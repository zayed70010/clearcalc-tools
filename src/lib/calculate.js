const money = (value) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 }).format(value);
const gbp = (pence) => new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(pence / 100);
const number = (value, digits = 2) => new Intl.NumberFormat('en-US', { maximumFractionDigits: digits }).format(value);

// 2026/27 England, Wales, and Northern Ireland. Annual thresholds from HMRC
// "Rates and thresholds for employers 2026 to 2027". Allowance taper from
// Income Tax Act 2007, section 35: half the excess over £100,000, remainder
// rounded up to a whole pound, and never below zero.
const UK_PA_PENCE = 1_257_000;
const UK_TAPER_START_PENCE = 10_000_000;
const UK_BASIC_BAND_PENCE = 3_770_000;
const UK_HIGHER_TOP_PENCE = 12_514_000;
const UK_NI_UEL_PENCE = 5_027_000;

function ukPersonalAllowancePence(salaryPence) {
  if (salaryPence <= UK_TAPER_START_PENCE) return UK_PA_PENCE;
  const excess = salaryPence - UK_TAPER_START_PENCE;
  const remainingHalfPence = UK_PA_PENCE * 2 - excess;
  if (remainingHalfPence <= 0) return 0;
  return Math.min(UK_PA_PENCE, Math.ceil(remainingHalfPence / 200) * 100);
}

function ukIncomeTaxPence(taxablePence) {
  const basic = Math.min(taxablePence, UK_BASIC_BAND_PENCE);
  const higher = Math.min(Math.max(taxablePence - UK_BASIC_BAND_PENCE, 0), UK_HIGHER_TOP_PENCE - UK_BASIC_BAND_PENCE);
  const additional = Math.max(taxablePence - UK_HIGHER_TOP_PENCE, 0);
  return Math.round((basic * 20 + higher * 40 + additional * 45) / 100);
}

function ukEmployeeNiPence(salaryPence) {
  const main = Math.min(Math.max(salaryPence - UK_PA_PENCE, 0), UK_NI_UEL_PENCE - UK_PA_PENCE);
  const upper = Math.max(salaryPence - UK_NI_UEL_PENCE, 0);
  return Math.round((main * 8 + upper * 2) / 100);
}

export function calculate(slug, values) {
  const v = Object.fromEntries(Object.entries(values).map(([key, val]) => [key, key.includes('date') ? val : Number(val)]));
  if (slug === 'mortgage-calculator' || slug === 'loan-calculator') {
    const months = v.years * 12;
    const r = v.rate / 1200;
    const payment = r === 0 ? v.principal / months : v.principal * r * (1 + r) ** months / ((1 + r) ** months - 1);
    const total = payment * months;
    return { headline: `${money(payment)} / month`, details: [`Total repayment: ${money(total)}`, `Total interest: ${money(total - v.principal)}`] };
  }
  if (slug === 'compound-interest-calculator') {
    const months = v.years * 12, r = v.rate / 1200;
    const futurePrincipal = v.principal * (1 + r) ** months;
    const futureContributions = r === 0 ? v.monthly * months : v.monthly * (((1 + r) ** months - 1) / r);
    const total = futurePrincipal + futureContributions, contributed = v.principal + v.monthly * months;
    return { headline: money(total), details: [`Total contributions: ${money(contributed)}`, `Estimated growth: ${money(total - contributed)}`] };
  }
  if (slug === 'bmi-calculator') {
    const bmi = v.weight / ((v.height / 100) ** 2);
    const category = bmi < 18.5 ? 'Underweight' : bmi < 25 ? 'Healthy range' : bmi < 30 ? 'Overweight' : 'Obesity range';
    return { headline: `BMI ${number(bmi, 1)}`, details: [`Category: ${category}`, 'BMI is a screening measure, not a medical diagnosis.'] };
  }
  if (slug === 'calorie-calculator') {
    const bmr = 10 * v.weight + 6.25 * v.height - 5 * v.age + 5;
    return { headline: `${number(bmr * v.activity, 0)} calories/day`, details: ['Estimate based on the Mifflin–St Jeor equation for men.', 'Individual needs can differ.'] };
  }
  if (slug === 'percentage-calculator') return { headline: `${number(v.part / v.whole * 100)}%`, details: [`${number(v.part)} is ${number(v.part / v.whole * 100)}% of ${number(v.whole)}.`] };
  if (slug === 'tip-calculator') {
    const tipAmount = v.bill * v.tip / 100, total = v.bill + tipAmount;
    return { headline: `${money(total / v.people)} per person`, details: [`Tip: ${money(tipAmount)}`, `Total bill: ${money(total)}`] };
  }
  if (slug === 'age-calculator') {
    const birth = new Date(`${v.birthdate}T00:00:00`), target = v.targetdate ? new Date(`${v.targetdate}T00:00:00`) : new Date();
    let years = target.getFullYear() - birth.getFullYear(), months = target.getMonth() - birth.getMonth(), days = target.getDate() - birth.getDate();
    if (days < 0) { months--; days += new Date(target.getFullYear(), target.getMonth(), 0).getDate(); }
    // February can be shorter than a day deficit from the 31st, which would otherwise leave a negative day count.
    if (days < 0) { months--; days += new Date(target.getFullYear(), target.getMonth() - 1, 0).getDate(); }
    if (months < 0) { years--; months += 12; }
    const label = (value, singular) => `${value} ${singular}${value === 1 ? '' : 's'}`;
    return { headline: label(years, 'year'), details: [`${label(months, 'month')} and ${label(days, 'day')} beyond the last birthday.`] };
  }
  if (slug === 'date-difference-calculator') {
    const days = Math.abs(new Date(v.enddate) - new Date(v.startdate)) / 86400000;
    return { headline: `${number(days, 0)} days`, details: [`Approximately ${number(days / 7)} weeks.`] };
  }
  if (slug === 'length-converter') {
    const meters = number(v.value, 4);
    return { headline: number(v.value * v.factor, 4), details: [`Converted from ${meters} ${v.value === 1 ? 'meter' : 'meters'}.`] };
  }
  if (slug === 'gpa-calculator') {
    const gpa = (v.grade1 + v.grade2 + v.grade3 + v.grade4) / 4;
    return { headline: `${number(gpa, 2)} GPA`, details: ['Unweighted average on a 4.0 scale.'] };
  }
  if (slug === 'discount-calculator') {
    const saved = v.price * v.discount / 100;
    return { headline: money(v.price - saved), details: [`You save ${money(saved)}.`] };
  }
  if (slug === 'uk-take-home-pay-calculator') {
    if (!Number.isFinite(v.salary) || v.salary < 0) throw new Error('Enter a salary of zero or more');
    const salaryPence = Math.round(v.salary * 100);
    const allowance = ukPersonalAllowancePence(salaryPence);
    const tax = ukIncomeTaxPence(Math.max(salaryPence - allowance, 0));
    const ni = ukEmployeeNiPence(salaryPence);
    const takeHome = salaryPence - tax - ni;
    return {
      headline: `${gbp(Math.round(takeHome / 12))} / month`,
      details: [
        `Income tax: ${gbp(tax)}`,
        `Employee National Insurance: ${gbp(ni)}`,
        `Annual take-home: ${gbp(takeHome)}`,
        `Weekly take-home: ${gbp(Math.round(takeHome / 52))}`,
        `Personal allowance applied: ${gbp(allowance)}`
      ]
    };
  }
  throw new Error('Unsupported calculator');
}
