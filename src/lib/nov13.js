// Calculators added 13 November 2026. Tax, TFSA, and MET figures are the
// published amounts named next to the constants. Geometry, annuity, and
// lease formulas are the ordinary ones, labelled in the result.

const usd = (value) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value);
const cad = (value) => new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value);
const fixed = (value, digits) => new Intl.NumberFormat('en-US', { minimumFractionDigits: digits, maximumFractionDigits: digits }).format(value);
const loose = (value, digits = 4) => new Intl.NumberFormat('en-US', { maximumFractionDigits: digits }).format(value);

function num(value, label) {
  const n = typeof value === 'number' ? value : Number(String(value ?? '').trim());
  if (!Number.isFinite(n)) throw new Error(`Enter a ${label}`);
  return n;
}

function nonNegative(value, label) {
  const n = num(value, label);
  if (n < 0) throw new Error(`Enter a ${label} of zero or more`);
  return n;
}

function positive(value, label) {
  const n = num(value, label);
  if (n <= 0) throw new Error(`Enter a ${label} above zero`);
  return n;
}

function whole(value, min, max, label) {
  const n = num(value, label);
  if (!Number.isInteger(n) || n < min || n > max) throw new Error(`Enter a whole ${label} from ${min} to ${max}`);
  return n;
}

function choice(value, allowed, label) {
  const n = Number(value);
  if (!allowed.includes(n)) throw new Error(label);
  return n;
}

function numberList(text, label, minCount) {
  const raw = String(text ?? '').trim();
  if (!raw) throw new Error(`Enter ${label}`);
  const parts = raw.split(/[,;\s]+/).filter(Boolean);
  if (parts.length < minCount) throw new Error(`Enter at least ${minCount} ${label}`);
  const values = parts.map((part) => Number(part));
  if (values.some((item) => !Number.isFinite(item))) throw new Error(`Use only numbers, separated by commas, for ${label}`);
  return values;
}

function levelPayment(principal, annualPercent, payments) {
  const r = annualPercent / 100 / 12;
  if (r === 0) return principal / payments;
  return principal * r * (1 + r) ** payments / ((1 + r) ** payments - 1);
}

function bracketTaxCents(incomeCents, brackets) {
  if (incomeCents <= 0) return 0;
  let tax = 0;
  let previous = 0;
  for (const [upTo, basisPoints] of brackets) {
    const top = Math.min(incomeCents, upTo);
    const slice = top - previous;
    if (slice > 0) tax += slice * basisPoints;
    if (incomeCents <= upTo) break;
    previous = upTo;
  }
  return Math.round(tax / 10000);
}

function hoursBetween(v) {
  const mode = choice(v.mode, [1, 2, 3], 'Choose elapsed time, add a duration, or subtract a duration');
  const startHour = whole(v.starthour, 0, 23, 'start hour');
  const startMinute = whole(v.startminute, 0, 59, 'start minute');
  const start = startHour * 60 + startMinute;
  if (mode === 1) {
    const endHour = whole(v.endhour, 0, 23, 'end hour');
    const endMinute = whole(v.endminute, 0, 59, 'end minute');
    let end = endHour * 60 + endMinute;
    let nextDay = false;
    if (end < start) {
      end += 24 * 60;
      nextDay = true;
    }
    const minutes = end - start;
    return clockResult(minutes, nextDay
      ? 'The end time is earlier than the start, so the span crosses midnight and the end is on the next day.'
      : 'Both times are on the same day. A night shift that ends after midnight needs an end time earlier than the start, and this page then adds 24 hours.');
  }
  const addHours = whole(v.addhours, 0, 1000, 'duration in hours');
  const addMinutes = whole(v.addminutes, 0, 59, 'duration in minutes');
  const delta = (addHours * 60 + addMinutes) * (mode === 3 ? -1 : 1);
  const landed = start + delta;
  const dayShift = Math.floor(landed / (24 * 60));
  const clock = ((landed % (24 * 60)) + 24 * 60) % (24 * 60);
  const dayNote = dayShift === 0
    ? 'The result is on the same day.'
    : dayShift === 1
      ? 'The result is one day later.'
      : dayShift === -1
        ? 'The result is one day earlier.'
        : dayShift > 1
          ? `The result is ${dayShift} days later.`
          : `The result is ${Math.abs(dayShift)} days earlier.`;
  return {
    headline: formatClock(clock),
    details: [
      `Start: ${formatClock(start)}`,
      `Duration ${mode === 3 ? 'subtracted' : 'added'}: ${addHours} hours ${addMinutes} minutes`,
      dayNote,
      'This is a clock. It does not subtract an unpaid break and it does not multiply by a wage. A same-day shift with a break is the time-card calculator.'
    ]
  };
}

function clockResult(minutes, note) {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return {
    headline: `${hours} hour${hours === 1 ? '' : 's'} ${mins} minute${mins === 1 ? '' : 's'}`,
    details: [
      `Total minutes: ${minutes}`,
      `Decimal hours: ${fixed(minutes / 60, 4)}`,
      note,
      'Adding or subtracting a duration is the other choice on the form. The result there is a clock time, not a length of time.'
    ]
  };
}

function formatClock(minutes) {
  const hour = Math.floor(minutes / 60);
  const minute = minutes % 60;
  return `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
}

function average(v) {
  const values = numberList(v.numbers, 'numbers', 1);
  const sum = values.reduce((total, item) => total + item, 0);
  const mean = sum / values.length;
  return {
    headline: fixed(mean, 4),
    details: [
      `Count: ${values.length}`,
      `Sum: ${loose(sum, 6)}`,
      `Arithmetic mean: sum / count = ${loose(sum, 6)} / ${values.length}`,
      'This is the arithmetic mean. It is not a median, a mode, or a weighted average, and it is not a percent change from the first number to the last.',
      'The standard deviation calculator uses the same kind of list and then measures spread around this mean. Sample standard deviation divides by count minus 1. Population standard deviation divides by the count.'
    ]
  };
}

function standardDeviation(v) {
  const which = choice(v.which, [1, 2], 'Choose sample or population');
  const values = numberList(v.numbers, 'numbers', 2);
  const sum = values.reduce((total, item) => total + item, 0);
  const mean = sum / values.length;
  const squareSum = values.reduce((total, item) => total + (item - mean) ** 2, 0);
  const sample = Math.sqrt(squareSum / (values.length - 1));
  const population = Math.sqrt(squareSum / values.length);
  const headline = which === 1 ? sample : population;
  return {
    headline: `${fixed(headline, 4)} ${which === 1 ? 'sample' : 'population'}`,
    details: [
      `Count: ${values.length}`,
      `Mean: ${fixed(mean, 4)}`,
      `Sum of squared deviations from the mean: ${loose(squareSum, 6)}`,
      `Sample standard deviation, divide by n − 1: ${fixed(sample, 4)}`,
      `Population standard deviation, divide by n: ${fixed(population, 4)}`,
      which === 1
        ? 'The headline is the sample figure. Use it when the list is a sample from a larger group. Bessel’s correction divides by n − 1.'
        : 'The headline is the population figure. Use it when the list is the whole group you care about. It divides by n.',
      'A list of one number is rejected because the sample divisor would be zero. The average calculator accepts a single number because a mean does not need a spread.'
    ]
  };
}

function pythagorean(v) {
  const mode = choice(v.mode, [1, 2], 'Choose hypotenuse or a missing leg');
  if (mode === 1) {
    const a = positive(v.a, 'first leg');
    const b = positive(v.b, 'second leg');
    const c = Math.hypot(a, b);
    return {
      headline: fixed(c, 4),
      details: [
        `Leg a: ${loose(a, 6)}`,
        `Leg b: ${loose(b, 6)}`,
        `Hypotenuse = √(a² + b²) = √(${loose(a * a, 6)} + ${loose(b * b, 6)})`,
        `Area of the right triangle: ${fixed(a * b / 2, 4)}. That area is a byproduct. The area calculator is the page that starts from a shape.`,
        'The triangle is assumed to be right-angled between the two legs. This page does not check an angle you measured.'
      ]
    };
  }
  const c = positive(v.a, 'hypotenuse');
  const known = positive(v.b, 'known leg');
  if (known >= c) throw new Error('The known leg has to be shorter than the hypotenuse');
  const missing = Math.sqrt(c * c - known * known);
  return {
    headline: fixed(missing, 4),
    details: [
      `Hypotenuse: ${loose(c, 6)}`,
      `Known leg: ${loose(known, 6)}`,
      `Missing leg = √(c² − a²) = √(${loose(c * c, 6)} − ${loose(known * known, 6)})`,
      `Area of the right triangle: ${fixed(known * missing / 2, 4)}`,
      'The known side typed in the second box is a leg, not the hypotenuse. The first box is the hypotenuse in this mode.'
    ]
  };
}

const VOLUME_UNITS = {
  1: { name: 'centimetres', cubic: 'cubic centimetres', extra: (cubic) => `${fixed(cubic / 1000, 4)} litres` },
  2: { name: 'metres', cubic: 'cubic metres', extra: (cubic) => `${fixed(cubic * 1000, 4)} litres` },
  3: { name: 'inches', cubic: 'cubic inches', extra: (cubic) => `${fixed(cubic / 231, 4)} US gallons` },
  4: { name: 'feet', cubic: 'cubic feet', extra: (cubic) => `${fixed(cubic * 1728 / 231, 4)} US gallons` }
};

function volume(v) {
  const shape = choice(v.shape, [1, 2, 3, 4], 'Choose a box, cylinder, sphere, or cone');
  const unit = VOLUME_UNITS[choice(v.unit, [1, 2, 3, 4], 'Choose a unit')];
  let cubic;
  let formula;
  if (shape === 1) {
    const length = positive(v.a, 'length');
    const width = positive(v.b, 'width');
    const height = positive(v.c, 'height');
    cubic = length * width * height;
    formula = `Box = length × width × height = ${loose(length, 6)} × ${loose(width, 6)} × ${loose(height, 6)}`;
  } else if (shape === 2) {
    const radius = positive(v.a, 'radius');
    const height = positive(v.b, 'height');
    cubic = Math.PI * radius * radius * height;
    formula = `Cylinder = π × radius² × height = π × ${loose(radius, 6)}² × ${loose(height, 6)}`;
  } else if (shape === 3) {
    const radius = positive(v.a, 'radius');
    cubic = 4 / 3 * Math.PI * radius ** 3;
    formula = `Sphere = 4/3 × π × radius³ = 4/3 × π × ${loose(radius, 6)}³`;
  } else {
    const radius = positive(v.a, 'radius');
    const height = positive(v.b, 'height');
    cubic = Math.PI * radius * radius * height / 3;
    formula = `Cone = 1/3 × π × radius² × height = 1/3 × π × ${loose(radius, 6)}² × ${loose(height, 6)}`;
  }
  return {
    headline: `${fixed(cubic, 4)} ${unit.cubic}`,
    details: [
      formula,
      `Unit: ${unit.name}. Every length you type uses that unit.`,
      unit.extra(cubic),
      'A US gallon is 231 cubic inches. A litre is 1,000 cubic centimetres, and a cubic metre is 1,000 litres. The imperial gallon is not used.',
      'This is volume. Floor area and roof area are different pages. A footprint in square feet is not a cubic measure until a height is applied.'
    ]
  };
}

function roofing(v) {
  const length = positive(v.length, 'footprint length');
  const width = positive(v.width, 'footprint width');
  const pitch = nonNegative(v.pitch, 'pitch');
  if (pitch > 24) throw new Error('Enter a pitch from 0 to 24 inches of rise per 12 inches of run');
  const waste = nonNegative(v.waste, 'waste allowance');
  if (waste > 50) throw new Error('Enter a waste allowance from 0 to 50 percent');
  const factor = Math.hypot(pitch, 12) / 12;
  const footprint = length * width;
  const area = footprint * factor;
  const squares = area / 100;
  const withWaste = squares * (1 + waste / 100);
  const bundles = Math.ceil(withWaste * 3 - 1e-9);
  return {
    headline: `${bundles} bundles`,
    details: [
      `Footprint: ${fixed(footprint, 2)} sq ft`,
      `Pitch factor for ${loose(pitch, 4)}/12: ${fixed(factor, 4)}. Factor = √(rise² + 12²) / 12.`,
      `Roof area: ${fixed(area, 2)} sq ft`,
      `Squares before waste: ${fixed(squares, 4)}. One square is 100 sq ft of roof.`,
      `Squares with ${fixed(waste, 2)}% waste: ${fixed(withWaste, 4)}`,
      `Bundles, at 3 bundles per square, rounded up: ${bundles}`,
      'The factor treats the whole footprint as one roof plane at the pitch you type. A hip, a valley, a dormer, and a different pitch on part of the roof are not drawn. Three bundles per square is the usual packaging assumption for many asphalt shingles, not a count of the bundles in a particular product.'
    ]
  };
}

function stairs(v) {
  const rise = positive(v.rise, 'total rise');
  const run = nonNegative(v.run, 'total run');
  if (rise > 600) throw new Error('Enter a total rise of 600 inches or less');
  if (run > 2000) throw new Error('Enter a total run of 2,000 inches or less');
  const minimumCount = Math.ceil(rise / 7.75 - 1e-9);
  let count = minimumCount;
  let bestGap = Infinity;
  const maximumCount = Math.max(minimumCount, Math.floor(rise / 4));
  for (let candidate = minimumCount; candidate <= maximumCount; candidate += 1) {
    const riser = rise / candidate;
    const gap = Math.abs(riser - 7);
    if (gap < bestGap - 1e-9) {
      bestGap = gap;
      count = candidate;
    }
  }
  const riser = rise / count;
  const treads = count - 1;
  let tread;
  let treadNote;
  if (run > 0) {
    if (treads < 1) throw new Error('A total run needs at least two risers so there is a tread');
    tread = run / treads;
    treadNote = `Tread from the total run: ${fixed(run, 3)} / ${treads} = ${fixed(tread, 3)} inches.`;
  } else {
    const blondel = 24.5 - 2 * riser;
    tread = Math.max(10, blondel);
    treadNote = blondel >= 10
      ? `Suggested tread from 2 × riser + tread = 24.5: ${fixed(tread, 3)} inches. No total run was entered.`
      : `2 × riser + tread = 24.5 would suggest ${fixed(blondel, 3)} inches, which is under 10. The suggestion is raised to 10.00 inches, the 2021 IRC minimum tread used here as a screen.`;
  }
  const comfort = 2 * riser + tread;
  const flags = [];
  if (riser > 7.75 + 1e-9) flags.push('The riser is above 7.75 inches.');
  if (tread + 1e-9 < 10) flags.push('The tread is under 10 inches.');
  if (comfort < 24 || comfort > 25) flags.push(`2 × riser + tread is ${fixed(comfort, 3)}, outside the 24 to 25 inch rule of thumb.`);
  return {
    headline: `${count} risers at ${fixed(riser, 3)} in`,
    details: [
      `Total rise: ${fixed(rise, 3)} inches`,
      `Riser count is the integer whose riser is closest to 7 inches without exceeding the 7.75 inch screen. The fewest risers that stay at or under 7.75 is ${minimumCount}.`,
      `Treads, one fewer than the risers: ${treads}`,
      treadNote,
      `2 × riser + tread = ${fixed(comfort, 3)} inches.`,
      flags.length ? flags.join(' ') : 'The riser is at or under 7.75 inches and the tread is at least 10 inches. That is a screen against the 2021 IRC R311.7.5 limits used here, not a permit.',
      'Local code, a nosing, a winder, and a landing can change the layout. This page does not draw them. A total run of zero means you did not measure the run, so the tread is a suggestion rather than a measurement.'
    ]
  };
}

function autoLease(v) {
  const cap = nonNegative(v.cap, 'cap cost');
  const residual = nonNegative(v.residual, 'residual');
  if (residual > cap) throw new Error('The residual is larger than the cap cost');
  const months = whole(v.months, 1, 84, 'term in months');
  const rateMode = choice(v.ratemode, [1, 2], 'Choose money factor or APR');
  const rate = nonNegative(v.rate, rateMode === 1 ? 'money factor' : 'APR');
  const extra = nonNegative(v.extra, 'extra monthly amount');
  let moneyFactor = rate;
  if (rateMode === 2) {
    if (rate > 40) throw new Error('Enter an APR from 0 to 40 percent');
    moneyFactor = rate / 2400;
  } else if (rate > 0.02) {
    throw new Error('A money factor is a small decimal such as 0.00125. An APR belongs in the APR choice.');
  }
  const depreciation = (cap - residual) / months;
  const finance = (cap + residual) * moneyFactor;
  const payment = depreciation + finance + extra;
  return {
    headline: `${usd(payment)} / month`,
    details: [
      `Depreciation portion: ${usd(depreciation)} / month. (${usd(cap)} − ${usd(residual)}) / ${months}.`,
      `Finance portion: ${usd(finance)} / month. (${usd(cap)} + ${usd(residual)}) × ${fixed(moneyFactor, 6)}.`,
      rateMode === 2
        ? `Money factor from the APR: ${loose(rate, 4)} / 2400 = ${fixed(moneyFactor, 6)}. That conversion is the common lease convention, not a Regulation M disclosure.`
        : `Money factor used as typed: ${fixed(moneyFactor, 6)}.`,
      `Extra monthly amount: ${usd(extra)}`,
      'The cap cost should already be the capitalized cost after the cap reduction you negotiated. A down payment, a trade, and an acquisition fee change that cap cost only if you have already put them in or left them out. This page does not subtract a down payment a second time.',
      'A car loan amortizes the amount financed down to zero. A lease payment stops at the residual. The car payment calculator is the loan. This page is the lease.'
    ]
  };
}

function heloc(v) {
  const value = positive(v.value, 'home value');
  const mortgage = nonNegative(v.mortgage, 'mortgage balance');
  const existing = nonNegative(v.existing, 'existing equity balance');
  const cltv = positive(v.cltv, 'combined loan-to-value cap');
  if (cltv > 100) throw new Error('Enter a combined loan-to-value cap of 100 percent or less');
  const draw = nonNegative(v.draw, 'amount drawn');
  const rate = nonNegative(v.rate, 'interest rate');
  if (rate > 40) throw new Error('Enter an interest rate from 0 to 40 percent');
  const years = whole(v.years, 1, 30, 'term in years');
  const type = choice(v.type, [1, 2], 'Choose interest-only or amortizing');
  const ceiling = value * cltv / 100;
  const available = ceiling - mortgage - existing;
  if (available < -0.005) throw new Error('The mortgage and existing equity balance are already above the combined loan-to-value cap');
  const room = Math.max(0, available);
  if (draw - room > 0.005) throw new Error('That draw is larger than the estimated available equity');
  const payment = type === 1 ? draw * rate / 100 / 12 : levelPayment(draw, rate, years * 12);
  return {
    headline: `${usd(payment)} / month`,
    details: [
      `Available equity at ${fixed(cltv, 2)}% of ${usd(value)}, after the mortgage and any existing equity balance: ${usd(room)}`,
      `Combined cap: ${usd(ceiling)}`,
      `Amount drawn: ${usd(draw)}`,
      type === 1
        ? `Interest-only payment: ${usd(draw)} × ${loose(rate, 4)}% / 12. The draw is not paid down.`
        : `Amortizing payment: the standard monthly payment that brings ${usd(draw)} to zero in ${years} years at ${loose(rate, 4)}%.`,
      'The home equity page on this site stops at the available-equity line and does not price a draw. This page prices the draw you type, as interest-only or as a fixed amortizing payment. A HELOC rate can change. The rate here does not.',
      'Closing costs, an interest-only draw period followed by a repayment period, and a lender’s own CLTV limit are not looked up. The cap is the percent you type.'
    ]
  };
}

function commission(v) {
  const mode = choice(v.mode, [1, 2], 'Choose a flat rate or two tiers');
  const sales = nonNegative(v.sales, 'sales');
  const rate = nonNegative(v.rate, 'commission rate');
  if (rate > 100) throw new Error('Enter a commission rate from 0 to 100 percent');
  const base = nonNegative(v.base, 'base salary');
  let commissionPay;
  let rule;
  if (mode === 1) {
    commissionPay = sales * rate / 100;
    rule = `Flat commission: ${usd(sales)} × ${fixed(rate, 2)}% = ${usd(commissionPay)}.`;
  } else {
    const threshold = positive(v.threshold, 'tier threshold');
    const rate2 = nonNegative(v.rate2, 'second commission rate');
    if (rate2 > 100) throw new Error('Enter a second commission rate from 0 to 100 percent');
    const inFirst = Math.min(sales, threshold);
    const inSecond = Math.max(0, sales - threshold);
    const firstPay = inFirst * rate / 100;
    const secondPay = inSecond * rate2 / 100;
    commissionPay = firstPay + secondPay;
    rule = `Tiered commission: ${usd(inFirst)} × ${fixed(rate, 2)}% = ${usd(firstPay)}, and ${usd(inSecond)} × ${fixed(rate2, 2)}% = ${usd(secondPay)}.`;
  }
  return {
    headline: usd(base + commissionPay),
    details: [
      rule,
      `Base salary included: ${usd(base)}`,
      `Commission: ${usd(commissionPay)}`,
      `Gross pay: ${usd(base + commissionPay)}`,
      'Gross pay is before income tax, payroll tax, and any draw that has to be reconciled. A draw is not subtracted. Two tiers are the most this form splits. A third tier has to be folded into the rate you type.',
      'Hourly pay and overtime are a different page. This page starts from sales, not from hours.'
    ]
  };
}

function annuity(v) {
  const aim = choice(v.aim, [1, 2], 'Choose future value or present value');
  const timing = choice(v.timing, [1, 2], 'Choose ordinary or annuity due');
  const payment = nonNegative(v.payment, 'payment');
  const rate = nonNegative(v.rate, 'interest rate');
  if (rate > 40) throw new Error('Enter an interest rate from 0 to 40 percent');
  const periodsPerYear = choice(v.frequency, [1, 12], 'Choose monthly or annual payments');
  const years = positive(v.years, 'term');
  if (years > 50) throw new Error('Enter a term of 50 years or less');
  const n = years * periodsPerYear;
  if (!Number.isInteger(n)) throw new Error('Enter a term that gives a whole number of payments');
  const r = rate / 100 / periodsPerYear;
  const ordinary = r === 0
    ? payment * n
    : aim === 1
      ? payment * ((1 + r) ** n - 1) / r
      : payment * (1 - (1 + r) ** -n) / r;
  const value = timing === 2 ? ordinary * (1 + r) : ordinary;
  const name = aim === 1 ? 'Future value' : 'Present value';
  return {
    headline: usd(value),
    details: [
      `${name} of ${timing === 2 ? 'an annuity due' : 'an ordinary annuity'}.`,
      `Payment: ${usd(payment)} ${periodsPerYear === 12 ? 'each month' : 'each year'}`,
      `Payments: ${n}. Rate per payment: ${fixed(r * 100, 6)}%.`,
      timing === 2
        ? 'Annuity due multiplies the ordinary result by (1 + rate per payment), because each payment arrives one period earlier.'
        : 'Ordinary annuity: each payment arrives at the end of the period, so the last payment earns nothing more.',
      aim === 1
        ? 'Future value is what the payments grow to. There is no separate starting balance. A lump sum plus deposits is the compound interest calculator or the investment calculator.'
        : 'Present value is what the payments are worth today. It is the price of a level stream, not a mortgage payment, because you typed the payment and the page solved for the value.',
      'Fees, taxes, and a payment that changes are not in the formula.'
    ]
  };
}

function rental(v) {
  const price = positive(v.price, 'purchase price');
  const down = nonNegative(v.down, 'down payment');
  if (down > price) throw new Error('The down payment is larger than the price');
  const closing = nonNegative(v.closing, 'closing costs');
  const rate = nonNegative(v.rate, 'interest rate');
  if (rate > 40) throw new Error('Enter an interest rate from 0 to 40 percent');
  const years = whole(v.years, 1, 40, 'loan term in years');
  const rent = nonNegative(v.rent, 'monthly rent');
  const other = nonNegative(v.other, 'other monthly income');
  const vacancy = nonNegative(v.vacancy, 'vacancy allowance');
  if (vacancy > 100) throw new Error('Enter a vacancy allowance from 0 to 100 percent');
  const tax = nonNegative(v.tax, 'annual property tax');
  const insurance = nonNegative(v.insurance, 'annual insurance');
  const maintenance = nonNegative(v.maintenance, 'annual maintenance');
  const management = nonNegative(v.management, 'management fee');
  if (management > 100) throw new Error('Enter a management fee from 0 to 100 percent');
  const hoa = nonNegative(v.hoa, 'annual HOA');
  const loan = price - down;
  const monthlyDebt = loan === 0 ? 0 : levelPayment(loan, rate, years * 12);
  const gross = (rent + other) * 12;
  const collected = gross * (1 - vacancy / 100);
  const managementCost = collected * management / 100;
  const operating = tax + insurance + maintenance + hoa + managementCost;
  const noi = collected - operating;
  const cashFlow = noi - monthlyDebt * 12;
  const invested = down + closing;
  const cap = noi / price * 100;
  return {
    headline: `${usd(cashFlow / 12)} / month`,
    details: [
      `Loan amount: ${usd(loan)}. Mortgage payment: ${usd(monthlyDebt)} / month.`,
      `Gross annual rent and other income: ${usd(gross)}`,
      `Collected after the vacancy allowance: ${usd(collected)}`,
      `Operating expenses, including management: ${usd(operating)}`,
      `Net operating income, before debt: ${usd(noi)}`,
      `Annual cash flow after debt service: ${usd(cashFlow)}`,
      `Cap rate: ${fixed(cap, 2)}%. NOI / purchase price.`,
      invested > 0
        ? `Cash-on-cash return: ${fixed(cashFlow / invested * 100, 2)}% of ${usd(invested)} cash invested (down payment plus closing costs).`
        : 'Cash-on-cash return is not defined because cash invested is zero.',
      'Cap rate ignores the loan. Cash flow and cash-on-cash use the loan payment. Vacancy is a percent of gross income, and the management fee is a percent of what remains. This is one steady year, not a sale, and it is not the rent-versus-buy comparison.'
    ]
  };
}

// 2024 Adult Compendium of Physical Activities, Herrmann et al., and the
// activity pages at pacompendium.com. kcal ≈ MET × kg × hours, from the
// compendium’s definition that 1 MET is about 1 kcal/kg/hour.
export const MET_ACTIVITIES = [
  [1, 'Walking, 2.5 mph, level', 3.0, '17170'],
  [2, 'Walking, 2.8–3.4 mph, moderate', 3.8, '17190'],
  [3, 'Walking, 3.5–3.9 mph, brisk', 4.8, '17200'],
  [4, 'Jogging, general', 7.5, '12020'],
  [5, 'Running, 5.0–5.2 mph (12 min/mile)', 8.5, '12030'],
  [6, 'Running, 6–6.3 mph (10 min/mile)', 9.3, '12050'],
  [7, 'Bicycling, 12–13.9 mph, moderate', 8.0, '01030'],
  [8, 'Swimming laps, freestyle, slow', 5.8, '18240'],
  [9, 'Resistance training, 8–15 reps', 3.5, '02054'],
  [10, 'Heavy cleaning, moderate effort', 3.5, '05020']
];

function caloriesBurned(v) {
  const activity = MET_ACTIVITIES.find((item) => item[0] === Number(v.activity));
  if (!activity) throw new Error('Choose an activity');
  const units = choice(v.units, [1, 2], 'Choose kilograms or pounds');
  const weight = positive(v.weight, 'body weight');
  const minutes = positive(v.minutes, 'duration');
  if (minutes > 1440) throw new Error('Enter a duration of 1,440 minutes or less');
  const kg = units === 2 ? weight * 0.45359237 : weight;
  if (kg < 20 || kg > 400) throw new Error('Enter a body weight from 20 to 400 kilograms');
  const met = activity[2];
  const kcal = met * kg * (minutes / 60);
  return {
    headline: `${fixed(kcal, 1)} kcal`,
    details: [
      `${activity[1]}. 2024 Adult Compendium code ${activity[3]}, ${fixed(met, 1)} MET.`,
      `Body weight used: ${fixed(kg, 2)} kg`,
      `Duration: ${loose(minutes, 2)} minutes, which is ${fixed(minutes / 60, 4)} hours`,
      'kcal = MET × kilograms × hours. The compendium defines 1 MET as about 1 kcal per kilogram per hour, tied to a reference 3.5 mL of oxygen per kilogram per minute.',
      'The result is an estimate for that activity description. It is not a lab measurement, it does not know fitness or terrain, and it is not a diet or medical instruction. Maintenance calories for a day are the calorie calculator, not this session total.'
    ]
  };
}

function leanBodyMass(v) {
  const sex = choice(v.sex, [1, 2], 'Choose the Boer and Hume equation set');
  const formula = choice(v.formula, [1, 2], 'Choose Boer or Hume');
  const units = choice(v.units, [1, 2], 'Choose metric or imperial units');
  const weightInput = positive(v.weight, 'weight');
  const heightInput = positive(v.height, 'height');
  const kg = units === 2 ? weightInput * 0.45359237 : weightInput;
  const cm = units === 2 ? heightInput * 2.54 : heightInput;
  if (kg < 20 || kg > 400) throw new Error('Enter a weight from 20 to 400 kilograms');
  if (cm < 100 || cm > 250) throw new Error('Enter a height from 100 to 250 centimetres');
  const boer = sex === 1
    ? 0.407 * kg + 0.267 * cm - 19.2
    : 0.252 * kg + 0.473 * cm - 48.3;
  const hume = sex === 1
    ? 0.3281 * kg + 0.33929 * cm - 29.5336
    : 0.29569 * kg + 0.41813 * cm - 43.2933;
  const chosen = formula === 1 ? boer : hume;
  const name = formula === 1 ? 'Boer' : 'Hume';
  return {
    headline: `${fixed(chosen, 2)} kg`,
    details: [
      `Weight: ${fixed(kg, 2)} kg. Height: ${fixed(cm, 2)} cm. Equation set: ${sex === 1 ? 'men' : 'women'}.`,
      `Boer (1984): ${fixed(boer, 2)} kg. Men use 0.407×kg + 0.267×cm − 19.2. Women use 0.252×kg + 0.473×cm − 48.3.`,
      `Hume (1966): ${fixed(hume, 2)} kg. Men use 0.32810×kg + 0.33929×cm − 29.5336. Women use 0.29569×kg + 0.41813×cm − 43.2933.`,
      `Headline formula: ${name}.`,
      chosen > kg
        ? 'The estimate is above the body weight you typed. The formulas were fit on adult reference groups, and this combination is outside a sensible result. Do not treat it as a body measurement.'
        : `Estimated fat mass if this lean figure were exact: ${fixed(kg - chosen, 2)} kg. It is the remainder, not a measured fat mass.`,
      'Neither formula uses a waist, a neck, or a skinfold. The body-fat calculator uses the U.S. Navy circumferences and can also split a percent into fat and lean mass. This page does not. It is not a clinical body-composition test.'
    ]
  };
}

const ZONES = {
  1: ['UTC', 'UTC'],
  2: ['Europe/London', 'United Kingdom'],
  3: ['America/New_York', 'US Eastern'],
  4: ['America/Chicago', 'US Central'],
  5: ['America/Denver', 'US Mountain'],
  6: ['America/Los_Angeles', 'US Pacific'],
  7: ['America/Toronto', 'Canada Toronto'],
  8: ['America/Vancouver', 'Canada Vancouver'],
  9: ['America/Halifax', 'Canada Halifax'],
  10: ['Australia/Sydney', 'Australia Sydney'],
  11: ['Australia/Melbourne', 'Australia Melbourne'],
  12: ['Australia/Brisbane', 'Australia Brisbane'],
  13: ['Australia/Perth', 'Australia Perth'],
  14: ['Australia/Adelaide', 'Australia Adelaide']
};

function zoneParts(utcMs, timeZone) {
  const dtf = new Intl.DateTimeFormat('en-US', {
    timeZone,
    hourCycle: 'h23',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    weekday: 'long'
  });
  const parts = Object.fromEntries(dtf.formatToParts(new Date(utcMs)).filter((part) => part.type !== 'literal').map((part) => [part.type, part.value]));
  return {
    year: Number(parts.year),
    month: Number(parts.month),
    day: Number(parts.day),
    hour: Number(parts.hour) % 24,
    minute: Number(parts.minute),
    weekday: parts.weekday
  };
}

function sameWall(utcMs, y, m, d, h, min, timeZone) {
  const parts = zoneParts(utcMs, timeZone);
  return parts.year === y && parts.month === m && parts.day === d && parts.hour === h && parts.minute === min;
}

function wallToUtc(y, m, d, h, min, timeZone) {
  let utc = Date.UTC(y, m - 1, d, h, min, 0);
  for (let pass = 0; pass < 4; pass += 1) {
    const got = zoneParts(utc, timeZone);
    utc += Date.UTC(y, m - 1, d, h, min) - Date.UTC(got.year, got.month - 1, got.day, got.hour, got.minute);
  }
  if (!sameWall(utc, y, m, d, h, min, timeZone)) {
    throw new Error('That local time does not exist in the source zone because the clocks skipped it.');
  }
  let ambiguous = false;
  if (sameWall(utc - 60 * 60 * 1000, y, m, d, h, min, timeZone)) {
    utc -= 60 * 60 * 1000;
    ambiguous = true;
  }
  return { utc, ambiguous };
}

function timeZone(v) {
  const from = ZONES[Number(v.from)];
  const to = ZONES[Number(v.to)];
  if (!from || !to) throw new Error('Choose a source zone and a destination zone');
  const [year, month, day] = String(v.date ?? '').split('-').map(Number);
  if (!year || !month || !day) throw new Error('Enter a date');
  const hour = whole(v.hour, 0, 23, 'hour');
  const minute = whole(v.minute, 0, 59, 'minute');
  const probe = new Date(Date.UTC(year, month - 1, day));
  if (probe.getUTCFullYear() !== year || probe.getUTCMonth() !== month - 1 || probe.getUTCDate() !== day) {
    throw new Error('Enter a real date');
  }
  const source = wallToUtc(year, month, day, hour, minute, from[0]);
  const local = zoneParts(source.utc, to[0]);
  const sourceName = zoneName(source.utc, from[0]);
  const destName = zoneName(source.utc, to[0]);
  const stamp = `${local.weekday} ${local.year}-${String(local.month).padStart(2, '0')}-${String(local.day).padStart(2, '0')} ${formatClock(local.hour * 60 + local.minute)}`;
  return {
    headline: `${formatClock(local.hour * 60 + local.minute)} ${destName}`,
    details: [
      `Source: ${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')} ${formatClock(hour * 60 + minute)} ${sourceName} (${from[1]})`,
      `Destination: ${stamp} (${to[1]})`,
      `UTC instant: ${new Date(source.utc).toISOString().replace('.000Z', 'Z')}`,
      source.ambiguous
        ? 'That source time happens twice because clocks fell back. The earlier one is shown.'
        : 'Daylight-saving rules are the IANA rules Node used for this date, including a zone that does not observe daylight saving.',
      'The day-of-the-week calculator names a date. It does not move a clock between zones. A time that falls in a spring-forward gap is rejected rather than shifted silently.'
    ]
  };
}

function zoneName(utcMs, timeZoneName) {
  const dtf = new Intl.DateTimeFormat('en-US', { timeZone: timeZoneName, hour: '2-digit', timeZoneName: 'short', hourCycle: 'h23' });
  const part = dtf.formatToParts(new Date(utcMs)).find((item) => item.type === 'timeZoneName');
  return part?.value ?? timeZoneName;
}

const SPEED_TO_MPS = {
  1: 0.44704,
  2: 1 / 3.6,
  3: 1,
  4: 1852 / 3600
};
const SPEED_NAMES = { 1: 'mph', 2: 'km/h', 3: 'm/s', 4: 'knots' };

function speed(v) {
  const value = nonNegative(v.value, 'speed');
  const from = SPEED_TO_MPS[choice(v.from, [1, 2, 3, 4], 'Choose a source unit')];
  const to = choice(v.to, [1, 2, 3, 4], 'Choose a destination unit');
  const metresPerSecond = value * from;
  const converted = metresPerSecond / SPEED_TO_MPS[to];
  return {
    headline: `${fixed(converted, 4)} ${SPEED_NAMES[to]}`,
    details: [
      `Source: ${loose(value, 6)} ${SPEED_NAMES[Number(v.from)]}`,
      `Metres per second: ${fixed(metresPerSecond, 6)}`,
      `mph: ${fixed(metresPerSecond / SPEED_TO_MPS[1], 4)}`,
      `km/h: ${fixed(metresPerSecond / SPEED_TO_MPS[2], 4)}`,
      `knots: ${fixed(metresPerSecond / SPEED_TO_MPS[4], 4)}`,
      'A statute mile is 1,609.344 metres, so 1 mph is 0.44704 m/s. A kilometre per hour is 1/3.6 m/s. An international knot is 1,852 metres per hour. These are definitions, not a live traffic speed.'
    ]
  };
}

function payRaise(v) {
  const mode = choice(v.mode, [1, 2], 'Choose two salaries or a raise percent');
  const oldPay = nonNegative(v.old, 'current pay');
  if (oldPay === 0) throw new Error('Enter a current pay above zero so the percent has a base');
  let nextPay;
  let rule;
  if (mode === 1) {
    nextPay = nonNegative(v.next, 'new pay');
    rule = 'The new pay was typed. The percent is (new − current) / current × 100.';
  } else {
    const percent = num(v.percent, 'raise percent');
    if (percent < -100 || percent > 500) throw new Error('Enter a raise percent from −100 to 500');
    nextPay = oldPay * (1 + percent / 100);
    rule = `New pay = ${usd(oldPay)} × (1 + ${loose(percent, 4)} / 100).`;
  }
  const amount = nextPay - oldPay;
  const percentRaise = amount / oldPay * 100;
  return {
    headline: usd(nextPay),
    details: [
      rule,
      `Increase: ${usd(amount)}`,
      `Percent: ${fixed(percentRaise, 2)}%`,
      `Monthly, current divided by 12: ${usd(oldPay / 12)}. New: ${usd(nextPay / 12)}.`,
      `Hourly at 2,080 hours a year, current: ${usd(oldPay / 2080)}. New: ${usd(nextPay / 2080)}. 2,080 is 40 × 52. A different schedule will not match.`,
      'The percentage change calculator reports the percent for any two numbers. This page adds the dollar raise, the monthly figures, and the 2,080-hour rates. It does not withhold tax.'
    ]
  };
}

function billSplit(v) {
  const bill = nonNegative(v.bill, 'bill');
  const tip = nonNegative(v.tip, 'tip percent');
  if (tip > 100) throw new Error('Enter a tip percent from 0 to 100');
  const shares = numberList(v.shares, 'shares', 2);
  if (shares.some((share) => share < 0)) throw new Error('Enter shares of zero or more');
  const weight = shares.reduce((total, share) => total + share, 0);
  if (weight <= 0) throw new Error('The shares have to add up to more than zero');
  const totalCents = Math.round(bill * (1 + tip / 100) * 100);
  const raw = shares.map((share) => totalCents * share / weight);
  const floors = raw.map((item) => Math.floor(item));
  let leftover = totalCents - floors.reduce((total, item) => total + item, 0);
  const order = raw.map((item, index) => ({ index, fraction: item - Math.floor(item) })).sort((a, b) => b.fraction - a.fraction || a.index - b.index);
  for (const entry of order) {
    if (leftover <= 0) break;
    floors[entry.index] += 1;
    leftover -= 1;
  }
  const lines = floors.map((cents, index) => `Person ${index + 1}: ${usd(cents / 100)} (share ${loose(shares[index], 4)})`);
  return {
    headline: usd(totalCents / 100),
    details: [
      `Bill: ${usd(bill)}`,
      `Tip: ${usd(totalCents / 100 - bill)} at ${fixed(tip, 2)}%`,
      ...lines,
      'Each person pays total × that person’s share / the sum of the shares. Cents are distributed so the shares add back to the total. The tip calculator splits equally after a tip and has no share weights. Equal weights here still work, and unequal weights are the reason to use this page.',
      'A share of zero pays nothing. Tax that is already inside the bill stays inside the bill. This page does not add sales tax on its own.'
    ]
  };
}

// Rev. Proc. 2025-32, 2026 tax rate tables under § 1(j) and the § 1(j)(5)
// maximum zero and 15% rate amounts. Amounts are cents. Rates are basis points.
const CG_ORDINARY = {
  1: [
    [1_240_000, 1000],
    [5_040_000, 1200],
    [10_570_000, 2200],
    [20_177_500, 2400],
    [25_622_500, 3200],
    [64_060_000, 3500],
    [Number.POSITIVE_INFINITY, 3700]
  ],
  2: [
    [2_480_000, 1000],
    [10_080_000, 1200],
    [21_140_000, 2200],
    [40_355_000, 2400],
    [51_245_000, 3200],
    [76_870_000, 3500],
    [Number.POSITIVE_INFINITY, 3700]
  ]
};
const CG_ZERO = { 1: 4_945_000, 2: 9_890_000 };
const CG_FIFTEEN = { 1: 54_550_000, 2: 61_370_000 };

function capitalGains(v) {
  const status = choice(v.status, [1, 2], 'Choose single or married filing jointly');
  const holding = choice(v.holding, [1, 2], 'Choose long-term or short-term');
  const gain = Math.round(nonNegative(v.gain, 'gain') * 100);
  const other = Math.round(nonNegative(v.other, 'other taxable income') * 100);
  let tax;
  let rule;
  if (holding === 2) {
    tax = bracketTaxCents(other + gain, CG_ORDINARY[status]) - bracketTaxCents(other, CG_ORDINARY[status]);
    rule = 'Short-term: the gain is stacked on the other taxable income and taxed with the 2026 ordinary brackets. The tax shown is the difference, so the other income is not taxed again.';
  } else {
    const slices = [[CG_ZERO[status], 0], [CG_FIFTEEN[status], 1500], [Number.POSITIVE_INFINITY, 2000]];
    let cursor = other;
    const end = other + gain;
    let raw = 0;
    for (const [top, basisPoints] of slices) {
      if (cursor >= end) break;
      if (cursor >= top) continue;
      const room = Math.min(end, top) - cursor;
      raw += room * basisPoints;
      cursor += room;
    }
    tax = Math.round(raw / 10000);
    const zeroRoom = Math.max(0, CG_ZERO[status] - other);
    const atZero = Math.min(gain, zeroRoom);
    const fifteenRoom = Math.max(0, CG_FIFTEEN[status] - Math.max(other, CG_ZERO[status]));
    const atFifteen = Math.min(Math.max(0, gain - atZero), fifteenRoom);
    const atTwenty = Math.max(0, gain - atZero - atFifteen);
    rule = `Long-term: ${usd(atZero / 100)} of the gain is in the 0% band, ${usd(atFifteen / 100)} is at 15%, and ${usd(atTwenty / 100)} is at 20%. The 2026 zero-rate amount is ${usd(CG_ZERO[status] / 100)} and the 15% amount ends at ${usd(CG_FIFTEEN[status] / 100)} of taxable income for this filing status.`;
  }
  return {
    headline: `${usd(tax / 100)} federal tax`,
    details: [
      rule,
      `Gain: ${usd(gain / 100)}. Other taxable income, before this gain: ${usd(other / 100)}.`,
      status === 1
        ? 'Filing status: single. Rev. Proc. 2025-32 sets the 2026 standard deduction at $16,100. Subtract it, or your itemized deductions, before you type other taxable income. This page does not subtract it again.'
        : 'Filing status: married filing jointly. Rev. Proc. 2025-32 sets the 2026 standard deduction at $32,200. Subtract it, or your itemized deductions, before you type other taxable income. This page does not subtract it again.',
      'Net Investment Income Tax of 3.8%, the 25% and 28% rates for some special gains, state tax, and a loss carried to other income are not computed. A loss should be typed only after you have already netted it. A negative number is rejected.',
      'The federal income tax calculator taxes wages. It does not split a capital gain into the 0%, 15%, and 20% bands. This page does not tax a wage.'
    ]
  };
}

// Canada Revenue Agency TFSA dollar limits, "MP, DB, RRSP, DPSP, ALDA, TFSA
// limits" table and the 2026 contribution-room pages. 2026 is $7,000.
export const TFSA_LIMITS = {
  2009: 5000, 2010: 5000, 2011: 5000, 2012: 5000,
  2013: 5500, 2014: 5500, 2015: 10000,
  2016: 5500, 2017: 5500, 2018: 5500,
  2019: 6000, 2020: 6000, 2021: 6000, 2022: 6000,
  2023: 6500, 2024: 7000, 2025: 7000, 2026: 7000
};

export function tfsaRoomSince(firstYear) {
  let total = 0;
  for (let year = firstYear; year <= 2026; year += 1) total += TFSA_LIMITS[year];
  return total;
}

function tfsa(v) {
  const mode = choice(v.mode, [1, 2], 'Choose lifetime room or the worksheet');
  if (mode === 1) {
    const firstYear = whole(v.firstyear, 2009, 2026, 'first year of room');
    const contributed = nonNegative(v.contributed, 'total contributions');
    const withdrawn = nonNegative(v.withdrawn, 'withdrawals from years before 2026');
    const created = tfsaRoomSince(firstYear);
    const available = created + withdrawn - contributed;
    return tfsaResult(available, [
      `Dollar limits from ${firstYear} through 2026: ${cad(created)}`,
      `Contributions, including 2026: ${cad(contributed)}`,
      `Withdrawals from 2025 and earlier, which have been added back: ${cad(withdrawn)}`,
      'A withdrawal made in 2026 is not typed here. It becomes room on 1 January 2027, not in 2026.',
      'This path assumes you were a resident of Canada, and 18 or older, in every year from the first year through 2026. A year of non-residence does not receive that year’s dollar limit. This form cannot see those years.'
    ]);
  }
  const roomPrev = nonNegative(v.roomprev, 'room on 1 January 2025');
  const contribPrev = nonNegative(v.contribprev, '2025 contributions');
  const withdrawPrev = nonNegative(v.withdrawprev, '2025 withdrawals');
  const contribNow = nonNegative(v.contribnow, '2026 contributions already made');
  const unused = roomPrev - contribPrev;
  const january = unused + withdrawPrev + TFSA_LIMITS[2026];
  const available = january - contribNow;
  return tfsaResult(available, [
    `Unused room at the end of 2025: ${cad(roomPrev)} − ${cad(contribPrev)} = ${cad(unused)}`,
    `Room on 1 January 2026: ${cad(unused)} + ${cad(withdrawPrev)} withdrawn in 2025 + ${cad(TFSA_LIMITS[2026])} = ${cad(january)}`,
    `2026 contributions already made: ${cad(contribNow)}`,
    'The worksheet matches the CRA order: previous room, minus previous contributions, plus previous withdrawals, plus the current dollar limit, minus contributions already made this year.',
    'Qualifying transfers, exempt contributions, and specified distributions are ignored, which is how the CRA worksheet treats them. The 2026 dollar limit is $7,000.'
  ]);
}

function tfsaResult(available, lines) {
  const over = available < -0.005;
  return {
    headline: over ? `${cad(Math.abs(available))} over` : cad(Math.max(0, available)),
    details: [
      ...lines,
      over
        ? 'The room is negative, so the excess may be subject to the 1% per month tax. This page does not compute that tax, and it does not know which month the excess started.'
        : 'Room left is an estimate from the figures you typed. The CRA account is updated from issuer records and can differ, especially before the annual update.',
      'This is not a contribution instruction. An RRSP deduction is a different calculator. TFSA room is not a tax deduction.'
    ]
  };
}

const NOV13 = {
  'hours-calculator': hoursBetween,
  'average-calculator': average,
  'standard-deviation-calculator': standardDeviation,
  'pythagorean-theorem-calculator': pythagorean,
  'volume-calculator': volume,
  'roofing-calculator': roofing,
  'stair-calculator': stairs,
  'auto-lease-calculator': autoLease,
  'heloc-calculator': heloc,
  'commission-calculator': commission,
  'annuity-calculator': annuity,
  'rental-property-calculator': rental,
  'calories-burned-calculator': caloriesBurned,
  'lean-body-mass-calculator': leanBodyMass,
  'time-zone-converter': timeZone,
  'speed-converter': speed,
  'pay-raise-calculator': payRaise,
  'bill-split-calculator': billSplit,
  'us-capital-gains-tax-calculator': capitalGains,
  'canada-tfsa-calculator': tfsa
};

export const NOV13_SLUGS = new Set(Object.keys(NOV13));

export function calculateNov13(slug, values) {
  const fn = NOV13[slug];
  if (!fn) throw new Error('Unsupported calculator');
  return fn(values);
}
