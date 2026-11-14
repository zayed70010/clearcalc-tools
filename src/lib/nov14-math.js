import { choice, fixed, formatBig, gcdBig, integerList, loose, nonNegative, numberList, positive, result, whole } from './nov14-shared.js';

function percentError(v) {
  const measured = numFinite(v.measured, 'measured value');
  const truth = numFinite(v.truth, 'true value');
  if (truth === 0) throw new Error('Percent error divides by the true value, so a true value of zero has no percent error');
  const raw = measured - truth;
  const percent = Math.abs(raw) / Math.abs(truth) * 100;
  return result(`${fixed(percent, 2)}%`, [
    `Measured − true = ${loose(raw)}`,
    `Absolute error = ${loose(Math.abs(raw))}`,
    `Percent error = ${loose(Math.abs(raw))} / ${loose(Math.abs(truth))} × 100`,
    raw === 0
      ? 'The measurement matches the true value, so the error is zero.'
      : raw < 0
        ? 'The measurement is below the true value. Percent error itself has no sign. The signed difference is the line above.'
        : 'The measurement is above the true value. Percent error itself has no sign. The signed difference is the line above.',
    'This is not a percent change from an old reading to a new one, and it is not a grade. The true value is the reference in the denominator.'
  ]);
}

function numFinite(value, label) {
  const n = typeof value === 'number' ? value : Number(String(value ?? '').trim());
  if (!Number.isFinite(n)) throw new Error(`Enter a ${label}`);
  return n;
}

function exponent(v) {
  const base = numFinite(v.base, 'base');
  const power = numFinite(v.power, 'exponent');
  if (base < 0 && !Number.isInteger(power)) throw new Error('A negative base with a fractional exponent is not a real number on this page');
  if (base === 0 && power < 0) throw new Error('Zero raised to a negative exponent is undefined');
  const value = base ** power;
  if (!Number.isFinite(value)) throw new Error('That power is too large to show as an ordinary number');
  return result(loose(value, 8), [
    `${loose(base)} raised to ${loose(power)}`,
    Number.isInteger(power) && power >= 0 && power <= 20 && Number.isInteger(base)
      ? `Repeated multiplication, ${power} time${power === 1 ? '' : 's'}, of the integer base.`
      : 'A fractional or negative exponent uses a real power, not a list of multiplications.',
    'The scientific-notation page rewrites a single number. This page raises one number to another.',
    '2^3^2 is not typed here. Enter one exponent. In the expression calculator, a tower of ^ is evaluated from the right.'
  ]);
}

function quadratic(v) {
  const a = numFinite(v.a, 'a');
  const b = numFinite(v.b, 'b');
  const c = numFinite(v.c, 'c');
  if (a === 0 && b === 0) throw new Error('a and b cannot both be zero. There is no equation to solve.');
  if (a === 0) {
    const x = -c / b;
    return result(`x = ${loose(x, 8)}`, [
      'a is 0, so the equation is linear: bx + c = 0.',
      `x = −c / b = ${loose(-c)} / ${loose(b)}`,
      'There is one root. A quadratic discriminant is not used when a is zero.'
    ]);
  }
  const disc = b * b - 4 * a * c;
  if (disc < 0) {
    const real = -b / (2 * a);
    const imag = Math.sqrt(-disc) / (2 * Math.abs(a));
    const sign = a > 0 ? 1 : -1;
    return result(`${loose(real, 6)} ± ${loose(imag * sign, 6)} i`, [
      `Discriminant b² − 4ac = ${loose(disc)}. It is negative, so the roots are not real.`,
      `Real part = −b / (2a) = ${loose(real, 8)}`,
      `Imaginary magnitude = √|discriminant| / |2a| = ${loose(imag, 8)}`,
      'The two roots are conjugates. This page does not plot them.'
    ]);
  }
  const root = Math.sqrt(disc);
  const x1 = (-b + root) / (2 * a);
  const x2 = (-b - root) / (2 * a);
  const same = Math.abs(x1 - x2) < 1e-10;
  return result(same ? `x = ${loose(x1, 8)}` : `x = ${loose(x1, 8)} or ${loose(x2, 8)}`, [
    `Discriminant b² − 4ac = ${loose(disc)}`,
    same
      ? 'The discriminant is zero, so there is one repeated real root.'
      : `The two real roots use +√ and −√ over 2a.`,
    `a = ${loose(a)}, b = ${loose(b)}, c = ${loose(c)}`,
    'Check a root by substituting it back into ax² + bx + c. A rounding difference in the last digit is display, not a second root.'
  ]);
}

function slope(v) {
  const x1 = numFinite(v.x1, 'x1');
  const y1 = numFinite(v.y1, 'y1');
  const x2 = numFinite(v.x2, 'x2');
  const y2 = numFinite(v.y2, 'y2');
  if (x1 === x2) throw new Error('The two x values are equal, so the line is vertical and has no finite slope');
  const m = (y2 - y1) / (x2 - x1);
  const intercept = y1 - m * x1;
  return result(`slope ${loose(m, 6)}`, [
    `Rise = ${loose(y2)} − ${loose(y1)} = ${loose(y2 - y1)}`,
    `Run = ${loose(x2)} − ${loose(x1)} = ${loose(x2 - x1)}`,
    `Slope = rise / run = ${loose(m, 8)}`,
    `y-intercept = ${loose(intercept, 8)}. The line is y = ${loose(m, 6)}x + ${loose(intercept, 6)}.`,
    m === 0 ? 'The y values match, so the line is horizontal.' : m > 0 ? 'The line rises as x increases.' : 'The line falls as x increases.'
  ]);
}

function logarithm(v) {
  const value = numFinite(v.value, 'number');
  const mode = choice(v.base, [1, 2, 3, 4], 'Choose a base');
  if (value <= 0) throw new Error('The logarithm is defined for a positive number');
  let base;
  let name;
  if (mode === 1) { base = 10; name = 'log10'; }
  else if (mode === 2) { base = Math.E; name = 'ln'; }
  else if (mode === 3) { base = 2; name = 'log2'; }
  else {
    base = numFinite(v.custom, 'custom base');
    name = `log base ${loose(base)}`;
    if (base <= 0 || base === 1) throw new Error('The base must be positive and not 1');
  }
  const out = Math.log(value) / Math.log(base);
  if (!Number.isFinite(out)) throw new Error('That logarithm is not a finite number');
  return result(loose(out, 8), [
    `${name}(${loose(value)}) = ${loose(out, 10)}`,
    `Check: base^result should return the number. ${loose(base, 6)}^${loose(out, 6)} is ${loose(base ** out, 6)}.`,
    'A logarithm answers “which exponent produces this number.” The exponent page asks the opposite question, from a base and an exponent you already know.',
    mode === 2 ? 'ln uses the base e, about 2.718281828.' : `The base used here is ${loose(base, 8)}.`
  ]);
}

function nthRoot(v) {
  const value = numFinite(v.value, 'number');
  const degree = whole(v.degree, 2, 100, 'root degree');
  if (value < 0 && degree % 2 === 0) throw new Error('An even root of a negative number is not real on this page');
  const magnitude = Math.abs(value) ** (1 / degree);
  const out = value < 0 ? -magnitude : magnitude;
  return result(loose(out, 8), [
    `The ${degree} root of ${loose(value)}`,
    `Check by raising the result to the degree: ${loose(out, 6)}^${degree} is ${loose(out ** degree, 6)}.`,
    degree === 2 ? 'A square root is the second root. The expression calculator also has sqrt().' : 'The degree is a whole number from 2 to 100.',
    value < 0 ? 'The degree is odd, so the negative root is the real result. A positive root would not multiply back to a negative.' : 'The principal real root is the non-negative one when the number is positive.'
  ]);
}

function factorize(n) {
  const factors = [];
  let rest = n;
  let d = 2;
  while (d * d <= rest) {
    while (rest % d === 0) {
      factors.push(d);
      rest /= d;
    }
    d += d === 2 ? 1 : 2;
  }
  if (rest > 1) factors.push(rest);
  return factors;
}

function listFactors(n) {
  const small = [];
  const large = [];
  for (let d = 1; d * d <= n; d += 1) {
    if (n % d === 0) {
      small.push(d);
      if (d * d !== n) large.push(n / d);
    }
  }
  return small.concat(large.reverse());
}

function lcm(v) {
  const values = integerList(v.numbers, 'numbers', 2, 20, 1, 1e12);
  let acc = BigInt(values[0]);
  for (const item of values.slice(1)) {
    const b = BigInt(item);
    acc = acc / gcdBig(acc, b) * b;
  }
  return result(formatBig(acc), [
    `Numbers: ${values.join(', ')}`,
    'The least common multiple is the smallest positive integer that each of these divides.',
    'For two numbers, LCM(a, b) = a × b / GCF(a, b). More than two numbers fold that rule left to right.',
    'The GCF page lists shared factors. This page does not list multiples, only the least one.'
  ]);
}

function gcf(v) {
  const values = integerList(v.numbers, 'numbers', 2, 20, 1, 1e12);
  let acc = BigInt(values[0]);
  for (const item of values.slice(1)) acc = gcdBig(acc, BigInt(item));
  const g = Number(acc);
  const factors = g <= 1e7 ? listFactors(g) : null;
  return result(formatBig(acc), [
    `Numbers: ${values.join(', ')}`,
    'The greatest common factor is the largest positive integer that divides every number in the list.',
    factors
      ? `Every common factor: ${factors.join(', ')}. The greatest of them is the headline.`
      : 'The common-factor list is omitted because the greatest common factor is larger than 10,000,000. The headline is still that greatest factor.',
    'Prime factorization of one number is a different page. A common factor of one number with itself would be the number, which is why this form asks for two.'
  ]);
}

function factors(v) {
  const n = whole(v.number, 2, 1e12, 'whole number');
  const primes = factorize(n);
  const all = n <= 1e7 ? listFactors(n) : null;
  const grouped = new Map();
  for (const prime of primes) grouped.set(prime, (grouped.get(prime) ?? 0) + 1);
  const written = [...grouped.entries()].map(([prime, count]) => count === 1 ? String(prime) : `${prime}^${count}`).join(' × ');
  return result(written, [
    all ? `Positive divisors: ${all.join(', ')}` : 'The full divisor list is omitted above 10,000,000. The prime factorization is complete.',
    `${primes.length} prime factor${primes.length === 1 ? '' : 's'}, counting repeats.`,
    primes.length === 1 ? `${n} is prime. Its only prime factor is itself.` : `${n} is composite.`,
    'The greatest common factor of several numbers is the other page. This page factors one integer.'
  ]);
}

function rounding(v) {
  const value = numFinite(v.value, 'number');
  const places = whole(v.places, 0, 8, 'decimal places');
  const mode = choice(v.mode, [1, 2, 3, 4, 5], 'Choose a rounding rule');
  const scale = 10 ** places;
  const scaled = value * scale;
  let rounded;
  if (mode === 3) rounded = Math.floor(scaled);
  else if (mode === 4) rounded = Math.ceil(scaled);
  else if (mode === 5) rounded = scaled < 0 ? Math.ceil(scaled) : Math.floor(scaled);
  else if (mode === 2) {
    const floor = Math.floor(scaled);
    const diff = scaled - floor;
    const even = floor % 2 === 0;
    if (Math.abs(diff - 0.5) < 1e-10) rounded = even ? floor : floor + 1;
    else rounded = Math.round(scaled);
  } else {
    rounded = Math.sign(scaled) * Math.round(Math.abs(scaled));
  }
  const out = rounded / scale;
  const names = { 1: 'half away from zero', 2: 'half to even', 3: 'toward −infinity', 4: 'toward +infinity', 5: 'toward zero' };
  return result(fixed(out, places), [
    `Rule: ${names[mode]}, to ${places} decimal place${places === 1 ? '' : 's'}.`,
    `Unrounded value: ${loose(value, 12)}`,
    mode === 2
      ? 'A tie, exactly halfway, goes to the even digit. Anything that is not an exact tie uses ordinary nearest rounding.'
      : 'A value that is not a tie follows the rule named above. Halfway cases are the reason the rule is named.',
    'This does not change the number of significant figures in scientific notation. That rewrite is the scientific-notation page.'
  ]);
}

function scientificNotation(v) {
  const mode = choice(v.mode, [1, 2], 'Choose a direction');
  if (mode === 2) {
    const coefficient = numFinite(v.coefficient, 'coefficient');
    const exponent = whole(v.exponent, -300, 300, 'exponent');
    if (coefficient !== 0 && (Math.abs(coefficient) < 1 || Math.abs(coefficient) >= 10)) {
      throw new Error('A normalized coefficient is from 1 up to, but not including, 10. Zero uses coefficient 0.');
    }
    const value = coefficient * 10 ** exponent;
    if (!Number.isFinite(value)) throw new Error('That power of ten is outside ordinary numbers');
    return result(loose(value, 10), [
      `${loose(coefficient)} × 10^${exponent}`,
      'The coefficient was already normalized, so the exponent was not adjusted.',
      'The other direction takes an ordinary number and finds the coefficient and the exponent.'
    ]);
  }
  const value = numFinite(v.value, 'number');
  if (value === 0) return result('0 × 10^0', ['Zero has no other normalized form on this page.', 'The exponent is 0 by convention here.']);
  const exponent = Math.floor(Math.log10(Math.abs(value)));
  const coefficient = value / 10 ** exponent;
  return result(`${loose(coefficient, 8)} × 10^${exponent}`, [
    `Ordinary number: ${loose(value, 12)}`,
    `The coefficient sits from 1 up to, but not including, 10, and the exponent is an integer.`,
    `Check: ${loose(coefficient, 8)} × 10^${exponent} = ${loose(coefficient * 10 ** exponent, 8)}.`,
    'A negative number keeps its sign on the coefficient. The exponent stays the same as it would for the absolute value.'
  ]);
}

function sequence(v) {
  const kind = choice(v.kind, [1, 2], 'Choose arithmetic or geometric');
  const first = numFinite(v.first, 'first term');
  const step = numFinite(v.step, kind === 1 ? 'common difference' : 'common ratio');
  const n = whole(v.n, 1, 500, 'term number');
  if (kind === 1) {
    const term = first + (n - 1) * step;
    const sum = n * (first + term) / 2;
    return result(`term ${loose(term, 8)}`, [
      `Arithmetic term ${n} = ${loose(first)} + (${n} − 1) × ${loose(step)}`,
      `Sum of the first ${n} terms = ${loose(sum, 8)}`,
      'The sum uses n/2 × (first + last). The difference is added, not multiplied.',
      'A geometric sequence, where each term is multiplied by a ratio, is the other choice.'
    ]);
  }
  if (first === 0) {
    return result('term 0', [
      'The first term is zero, so every later term of a geometric sequence is zero.',
      `Sum of the first ${n} terms = 0`,
      'A zero ratio is allowed only because the first term is already zero or the later terms become zero. A negative first term with ratio zero is the next check.'
    ]);
  }
  const term = first * step ** (n - 1);
  if (!Number.isFinite(term)) throw new Error('That term is too large to show');
  let sum;
  if (step === 1) sum = first * n;
  else sum = first * (1 - step ** n) / (1 - step);
  if (!Number.isFinite(sum)) throw new Error('That sum is too large to show');
  return result(`term ${loose(term, 8)}`, [
    `Geometric term ${n} = ${loose(first)} × ${loose(step)}^${n - 1}`,
    `Sum of the first ${n} terms = ${loose(sum, 8)}`,
    step === 1 ? 'The ratio is 1, so the sum is the first term times the count.' : 'The sum is first × (1 − ratio^n) / (1 − ratio).',
    'An arithmetic sequence adds a difference instead of multiplying by a ratio.'
  ]);
}

function permutations(v) {
  const n = whole(v.n, 0, 1000, 'n');
  const r = whole(v.r, 0, 1000, 'r');
  if (r > n) throw new Error('r cannot be larger than n');
  let perm = 1n;
  for (let i = 0; i < r; i += 1) perm *= BigInt(n - i);
  const take = Math.min(r, n - r);
  let comb = 1n;
  for (let i = 1; i <= take; i += 1) comb = comb * BigInt(n - take + i) / BigInt(i);
  return result(`${formatBig(perm)} permutations`, [
    `nPr = ${formatBig(perm)}`,
    `nCr = ${formatBig(comb)}`,
    'A permutation is an arrangement: order matters, and nPr = n × (n − 1) × … × (n − r + 1).',
    'A combination ignores order. nCr = nPr / r!. The division is exact.',
    r === 0 ? 'Choosing nothing can be done in one way, so both results are 1.' : `n = ${n} and r = ${r}.`
  ]);
}

function erf(x) {
  const sign = x < 0 ? -1 : 1;
  const ax = Math.abs(x);
  const t = 1 / (1 + 0.3275911 * ax);
  const y = 1 - (((((1.061405429 * t - 1.453152027) * t + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t) * Math.exp(-ax * ax);
  return sign * y;
}

export function normalTwoTail(z) {
  const phi = 0.5 * (1 + erf(Math.abs(z) / Math.SQRT2));
  const p = 2 * (1 - phi);
  return Math.min(1, Math.max(0, p));
}

function zScore(v) {
  const mode = choice(v.mode, [1, 2], 'Choose a z-score or a p-value');
  if (mode === 2) {
    const z = numFinite(v.z, 'z-score');
    if (Math.abs(z) > 12) throw new Error('Enter a z-score from −12 to 12. Beyond that the two-tail probability underflows the approximation.');
    const p = normalTwoTail(z);
    return result(`two-tail p ${fixed(p, 4)}`, [
      `One-tail p, the probability beyond this |z| on one side, is ${fixed(p / 2, 4)}.`,
      'The curve is the standard normal. The approximation is Abramowitz and Stegun 7.1.26 for the error function, then Φ(z) = ½(1 + erf(z/√2)).',
      'A two-tail p-value is the probability of a result at least this far from zero in either direction. It is not a confidence interval.',
      `z = ${loose(z, 6)}. A z of 1.96 has a two-tail probability of about 0.0500.`
    ]);
  }
  const x = numFinite(v.x, 'observation');
  const mean = numFinite(v.mean, 'mean');
  const sd = positive(v.sd, 'standard deviation');
  const z = (x - mean) / sd;
  const p = Math.abs(z) > 12 ? null : normalTwoTail(z);
  return result(`z = ${loose(z, 4)}`, [
    `(${loose(x)} − ${loose(mean)}) / ${loose(sd)}`,
    p == null
      ? 'The two-tail probability is smaller than the approximation reports at |z| above 12.'
      : `Two-tail standard-normal probability beyond this |z|: ${fixed(p, 4)}.`,
    'The standard deviation must be the one that matches the question. A sample standard deviation and a population standard deviation are not interchangeable, and this page does not choose between them.',
    'The standard-deviation calculator computes that spread from a list. This page starts after you already have the mean and the spread.'
  ]);
}

const T95 = {
  1: 12.706, 2: 4.303, 3: 3.182, 4: 2.776, 5: 2.571, 6: 2.447, 7: 2.365, 8: 2.306, 9: 2.262, 10: 2.228,
  11: 2.201, 12: 2.179, 13: 2.160, 14: 2.145, 15: 2.131, 16: 2.120, 17: 2.110, 18: 2.101, 19: 2.093, 20: 2.086,
  21: 2.080, 22: 2.074, 23: 2.069, 24: 2.064, 25: 2.060, 26: 2.056, 27: 2.052, 28: 2.048, 29: 2.045, 30: 2.042
};

function confidenceInterval(v) {
  const mean = numFinite(v.mean, 'mean');
  const sd = positive(v.sd, 'standard deviation');
  const n = whole(v.n, 2, 1000000, 'sample size');
  const level = choice(v.level, [1, 2], 'Choose 95% with t, or 95% with 1.96');
  const df = n - 1;
  let critical;
  let rule;
  if (level === 2) {
    critical = 1.96;
    rule = 'The critical value is 1.96, the usual normal two-sided 95% point. It does not use a t table.';
  } else if (df > 30) {
    critical = 1.96;
    rule = `Degrees of freedom are ${df}, past the end of the small t table on this page, so the 95% critical value falls back to 1.96.`;
  } else {
    critical = T95[df];
    rule = `Degrees of freedom are ${df}. The two-sided 95% t critical value used here is ${critical}.`;
  }
  const margin = critical * sd / Math.sqrt(n);
  return result(`${loose(mean - margin, 4)} to ${loose(mean + margin, 4)}`, [
    `Margin of error = ${loose(critical, 4)} × ${loose(sd)} / √${n} = ${loose(margin, 6)}`,
    rule,
    'The interval is mean ± margin. It estimates the mean of the population the sample was drawn from, if the usual independence and approximate normality assumptions hold.',
    'This is not a prediction interval for one future observation, and it is not a tolerance interval. The standard deviation is the sample standard deviation when you use t.'
  ]);
}

function sampleSize(v) {
  const confidence = choice(v.confidence, [1, 2, 3], 'Choose a confidence level');
  const z = confidence === 1 ? 1.64485362695 : confidence === 2 ? 1.95996398454 : 2.57582930355;
  const label = confidence === 1 ? '90%' : confidence === 2 ? '95%' : '99%';
  const margin = positive(v.margin, 'margin of error');
  if (margin >= 1) throw new Error('Enter the margin of error as a proportion below 1. Five percent is 0.05.');
  const p = numFinite(v.proportion, 'expected proportion');
  if (p <= 0 || p >= 1) throw new Error('Enter an expected proportion between 0 and 1. Use 0.5 when you do not have one.');
  const n0 = z * z * p * (1 - p) / (margin * margin);
  const population = whole(v.population, 0, 1e12, 'population');
  let n = n0;
  let finite = 'No finite-population correction. The population field is 0, which means the population is treated as very large.';
  if (population > 0) {
    n = n0 / (1 + (n0 - 1) / population);
    finite = `Finite-population correction with N = ${population}: n = n0 / (1 + (n0 − 1) / N).`;
  }
  const rounded = Math.ceil(n - 1e-9);
  return result(`${rounded} responses`, [
    `Cochran n0 = ${loose(z, 4)}² × ${loose(p)} × ${loose(1 - p)} / ${loose(margin)}² = ${loose(n0, 4)}`,
    finite,
    `The headline rounds up. The unrounded size is ${loose(n, 4)}.`,
    `${label} two-sided normal critical value. Five percent is typed as 0.05, not 5.`,
    'This is a simple random sample for a proportion. It is not a sample size for a mean, a comparison of two groups, or a clustered survey.'
  ]);
}

function probability(v) {
  const mode = choice(v.mode, [1, 2, 3], 'Choose a probability rule');
  const a = numFinite(v.a, 'P(A)');
  if (a < 0 || a > 1) throw new Error('P(A) must be from 0 to 1');
  if (mode === 3) {
    return result(fixed(1 - a, 6), [
      `1 − ${loose(a)} = ${loose(1 - a, 8)}`,
      'This is the complement: the probability that A does not happen, when A and not-A cover every outcome without overlap.',
      'It is not a conditional probability.'
    ]);
  }
  const b = numFinite(v.b, 'P(B)');
  if (b < 0 || b > 1) throw new Error('P(B) must be from 0 to 1');
  if (mode === 1) {
    const both = a * b;
    return result(fixed(both, 6), [
      `P(A and B) = ${loose(a)} × ${loose(b)} = ${loose(both, 8)}, if A and B are independent.`,
      `P(A or B) under that same independence assumption is ${loose(a + b - both, 8)}.`,
      'Independence is an assumption you are making. This page cannot tell whether two events are independent.',
      'If you know P(A and B) and it is not the product, use the second rule and type that overlap.'
    ]);
  }
  const both = numFinite(v.both, 'P(A and B)');
  if (both < 0 || both > 1) throw new Error('P(A and B) must be from 0 to 1');
  if (both > a + 1e-12 || both > b + 1e-12) throw new Error('P(A and B) cannot exceed P(A) or P(B)');
  const either = a + b - both;
  if (either > 1 + 1e-9) throw new Error('Those probabilities add past 1. Check the overlap.');
  return result(fixed(Math.min(1, either), 6), [
    `P(A or B) = P(A) + P(B) − P(A and B) = ${loose(either, 8)}`,
    'The overlap is subtracted once because it was counted in both singles.',
    'This does not assume independence. If the events are independent, the overlap equals the product, and the first rule will match.'
  ]);
}

function descriptive(v) {
  const values = numberList(v.numbers, 'numbers', 1, 500);
  const n = values.length;
  const sum = values.reduce((total, item) => total + item, 0);
  const mean = sum / n;
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(n / 2);
  const median = n % 2 === 1 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
  const range = sorted[n - 1] - sorted[0];
  const counts = new Map();
  for (const item of values) counts.set(item, (counts.get(item) ?? 0) + 1);
  const most = Math.max(...counts.values());
  const modes = [...counts.entries()].filter(([, count]) => count === most).map(([item]) => item);
  const modeText = most === 1 ? 'no mode, because every value appears once' : `mode ${modes.map((item) => loose(item, 6)).join(', ')} (each appears ${most} time${most === 1 ? '' : 's'})`;
  const nonPositive = values.some((item) => item <= 0);
  let geometric = 'Geometric mean is undefined because a value is zero or negative.';
  let harmonic = 'Harmonic mean is undefined because a value is zero or negative.';
  if (!nonPositive) {
    const logMean = values.reduce((total, item) => total + Math.log(item), 0) / n;
    geometric = `Geometric mean: ${loose(Math.exp(logMean), 6)}`;
    const harm = n / values.reduce((total, item) => total + 1 / item, 0);
    harmonic = `Harmonic mean: ${loose(harm, 6)}`;
  }
  const variance = values.reduce((total, item) => total + (item - mean) ** 2, 0);
  const population = Math.sqrt(variance / n);
  const sample = n > 1 ? Math.sqrt(variance / (n - 1)) : null;
  return result(`mean ${loose(mean, 6)}`, [
    `Count ${n}, sum ${loose(sum, 6)}, median ${loose(median, 6)}, range ${loose(range, 6)}`,
    modeText,
    geometric,
    harmonic,
    sample == null
      ? `Population standard deviation: ${loose(population, 6)}. A sample standard deviation needs at least two numbers.`
      : `Sample standard deviation (divide by n − 1): ${loose(sample, 6)}. Population standard deviation (divide by n): ${loose(population, 6)}.`,
    'The average page is the arithmetic mean only. This page adds the median, the mode, the range, and the two means that use products or reciprocals.'
  ]);
}

function distance(v) {
  const x1 = numFinite(v.x1, 'x1');
  const y1 = numFinite(v.y1, 'y1');
  const x2 = numFinite(v.x2, 'x2');
  const y2 = numFinite(v.y2, 'y2');
  const useZ = choice(v.usez, [0, 1], 'Choose a plane or space');
  const z1 = useZ ? numFinite(v.z1, 'z1') : 0;
  const z2 = useZ ? numFinite(v.z2, 'z2') : 0;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const dz = z2 - z1;
  const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
  return result(loose(dist, 6), [
    useZ
      ? `√((${loose(dx)})² + (${loose(dy)})² + (${loose(dz)})²)`
      : `√((${loose(dx)})² + (${loose(dy)})²)`,
    'The points are coordinates you type. This is not a driving distance, and it does not look up a road.',
    useZ ? 'The third axis is included.' : 'The z fields are ignored in the plane.',
    'A right triangle with those legs is the Pythagorean page. This page only reports the straight-line length.'
  ]);
}

function circle(v) {
  const mode = choice(v.mode, [1, 2, 3, 4], 'Choose what you know');
  const known = positive(v.known, 'known measurement');
  let radius;
  if (mode === 1) radius = known;
  else if (mode === 2) radius = known / 2;
  else if (mode === 3) radius = known / (2 * Math.PI);
  else radius = Math.sqrt(known / Math.PI);
  const diameter = radius * 2;
  const circumference = 2 * Math.PI * radius;
  const area = Math.PI * radius * radius;
  return result(`radius ${loose(radius, 6)}`, [
    `Diameter ${loose(diameter, 6)}`,
    `Circumference ${loose(circumference, 6)}`,
    `Area ${loose(area, 6)}`,
    'The unit is whatever unit you used for a length, or the square of that unit for the area. A circumference typed in metres produces an area in square metres.',
    'The area calculator also finds a circle’s area from a radius. This page solves any one of the four measurements for the other three.'
  ]);
}

function surfaceArea(v) {
  const shape = choice(v.shape, [1, 2, 3, 4], 'Choose a solid');
  const a = positive(v.a, 'first length');
  const b = positive(v.b, 'second length');
  const c = shape === 1 ? positive(v.c, 'height') : 0;
  let area;
  let formula;
  if (shape === 1) {
    area = 2 * (a * b + a * c + b * c);
    formula = '2(lw + lh + wh)';
  } else if (shape === 2) {
    area = 2 * Math.PI * a * (a + b);
    formula = '2πr(r + h), the full cylinder including both bases';
  } else if (shape === 3) {
    area = 4 * Math.PI * a * a;
    formula = '4πr². The second length is not used for a sphere.';
  } else {
    const slant = Math.sqrt(a * a + b * b);
    area = Math.PI * a * (a + slant);
    formula = `πr(r + slant). Slant = √(r² + h²) = ${loose(slant, 6)}.`;
  }
  return result(loose(area, 6), [
    formula,
    'The unit is the square of the length unit you used. This page does not convert units.',
    'Volume of the same solids is the volume calculator. Surface area counts the outside, not the capacity.',
    shape === 3 ? 'A sphere needs only the radius.' : 'Both bases are included for the cylinder, and the cone includes its base.'
  ]);
}

function rightTriangle(v) {
  const mode = choice(v.mode, [1, 2, 3], 'Choose what you know');
  const a = positive(v.a, 'first measurement');
  const b = positive(v.b, 'second measurement');
  let legA;
  let legB;
  let hyp;
  if (mode === 1) {
    legA = a;
    legB = b;
    hyp = Math.sqrt(a * a + b * b);
  } else if (mode === 2) {
    hyp = a;
    legA = b;
    if (legA >= hyp) throw new Error('The leg must be shorter than the hypotenuse');
    legB = Math.sqrt(hyp * hyp - legA * legA);
  } else {
    const angle = b;
    if (angle <= 0 || angle >= 90) throw new Error('Enter an acute angle in degrees, greater than 0 and less than 90');
    legA = a;
    const radians = angle * Math.PI / 180;
    legB = legA * Math.tan(radians);
    hyp = legA / Math.cos(radians);
  }
  const angleA = Math.atan2(legA, legB) * 180 / Math.PI;
  const angleB = 90 - angleA;
  const area = legA * legB / 2;
  const perimeter = legA + legB + hyp;
  return result(`hypotenuse ${loose(hyp, 6)}`, [
    `Leg adjacent to the named angle, or the first leg: ${loose(mode === 3 ? legA : legA, 6)}`,
    `Other leg: ${loose(legB, 6)}`,
    `Angles: ${loose(angleA, 4)}° and ${loose(angleB, 4)}°, plus the right angle.`,
    `Area ${loose(area, 6)}, perimeter ${loose(perimeter, 6)}`,
    mode === 1
      ? 'Both legs were typed. The hypotenuse is √(leg² + leg²).'
      : mode === 2
        ? 'The missing leg is √(hypotenuse² − leg²).'
        : 'The angle is in degrees. The opposite leg is the adjacent leg times tan of the angle, and the hypotenuse is the adjacent leg divided by cos of the angle.',
    'The Pythagorean page solves a side only. This page also reports the acute angles, the area, and the perimeter.'
  ]);
}

function halfLife(v) {
  const mode = choice(v.mode, [1, 2], 'Choose a question');
  const initial = positive(v.initial, 'starting amount');
  const half = positive(v.half, 'half-life');
  if (mode === 2) {
    const target = positive(v.target, 'target amount');
    if (target >= initial) throw new Error('The target must be below the starting amount. This page models decay, not growth.');
    const time = half * Math.log(initial / target) / Math.LN2;
    return result(`${loose(time, 6)} time units`, [
      `Time = half-life × ln(start / target) / ln(2)`,
      `Amount left after that time, as a check: ${loose(initial * 0.5 ** (time / half), 6)}`,
      'The time unit is the unit of the half-life you typed. A half-life in years produces a time in years.',
      'This is exponential decay with a constant half-life. It is not a biological clearance model and it does not know a laboratory assay.'
    ]);
  }
  const elapsed = nonNegative(v.elapsed, 'elapsed time');
  const left = initial * 0.5 ** (elapsed / half);
  return result(loose(left, 6), [
    `${loose(initial)} × (1/2)^(${loose(elapsed)} / ${loose(half)})`,
    `Halves elapsed: ${loose(elapsed / half, 6)}`,
    'The amount and the half-life must use a consistent time unit. The page does not convert hours to years.',
    'Finding the time to reach a smaller amount is the other choice.'
  ]);
}

function readBig(upper, base, negative) {
  let acc = 0n;
  const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (const char of upper) acc = acc * BigInt(base) + BigInt(alphabet.indexOf(char));
  return negative ? -acc : acc;
}

function writeBase(value, base) {
  const negative = value < 0n;
  let rest = negative ? -value : value;
  if (rest === 0n) return '0';
  const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let out = '';
  while (rest > 0n) {
    out = alphabet[Number(rest % BigInt(base))] + out;
    rest /= BigInt(base);
  }
  if (base === 2 || base === 16) out = out.replace(/\B(?=(?:.{4})+$)/g, ' ');
  return negative ? `−${out}` : out;
}

function numberBase(v) {
  const from = choice(v.from, [2, 8, 10, 16], 'Choose a base');
  const to = choice(v.to, [2, 8, 10, 16], 'Choose a base');
  const op = choice(v.op, [1, 2, 3, 4], 'Choose convert, add, subtract, or multiply');
  const left = readBigChecked(v.left, from);
  if (op === 1) {
    return result(writeBase(left, to), [
      `Base ${from} interpreted as a whole number, then written in base ${to}.`,
      `Decimal value: ${formatBig(left)}`,
      'Spaces in the binary or hexadecimal headline are groups of four digits. They are not part of the value.',
      'A leading minus is allowed. Fractions are not.'
    ]);
  }
  const right = readBigChecked(v.right, from);
  let value;
  if (op === 2) value = left + right;
  else if (op === 3) value = left - right;
  else value = left * right;
  const names = { 2: 'sum', 3: 'difference', 4: 'product' };
  return result(writeBase(value, to), [
    `Both inputs were read in base ${from}. The ${names[op]} is written in base ${to}.`,
    `Decimal value: ${formatBig(value)}`,
    'The arithmetic is exact integer arithmetic. It is not a floating-point calculator.',
    'Conversion without a second number is the first operation.'
  ]);
}

function readBigChecked(text, base) {
  const raw = String(text ?? '').trim().replace(/[\s_]/g, '');
  if (!raw) throw new Error('Enter a whole number');
  const negative = raw.startsWith('-') || raw.startsWith('−');
  const body = negative ? raw.slice(1) : raw;
  if (!body || body.length > 200) throw new Error('Enter 1 to 200 digits');
  const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'.slice(0, base);
  const upper = body.toUpperCase();
  if ([...upper].some((char) => !alphabet.includes(char))) throw new Error(`Use only digits that belong in base ${base}`);
  return readBig(upper, base, negative);
}

const ROMAN = [[1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'], [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'], [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']];

function toRoman(n) {
  let rest = n;
  let out = '';
  for (const [value, glyph] of ROMAN) {
    while (rest >= value) {
      out += glyph;
      rest -= value;
    }
  }
  return out;
}

function fromRoman(text) {
  const raw = String(text ?? '').trim().toUpperCase();
  if (!/^[IVXLCDM]+$/.test(raw)) throw new Error('Use the letters I, V, X, L, C, D, and M only');
  let total = 0;
  let i = 0;
  while (i < raw.length) {
    const two = raw.slice(i, i + 2);
    const pair = ROMAN.find(([, glyph]) => glyph.length === 2 && glyph === two);
    if (pair) {
      total += pair[0];
      i += 2;
      continue;
    }
    const one = ROMAN.find(([, glyph]) => glyph === raw[i]);
    if (!one || one[1].length !== 1) throw new Error('That is not a standard Roman numeral on this page');
    total += one[0];
    i += 1;
  }
  if (total < 1 || total > 3999 || toRoman(total) !== raw) throw new Error('Use a standard numeral from 1 to 3,999, without repeated subtractive pairs');
  return total;
}

function roman(v) {
  const mode = choice(v.mode, [1, 2], 'Choose a direction');
  if (mode === 2) {
    const value = fromRoman(v.text);
    return result(String(value), [
      `${String(v.text).trim().toUpperCase()} is ${value}`,
      'The page accepts the standard subtractive pairs IV, IX, XL, XC, CD, and CM.',
      'A numeral that is not the standard writing of its value is rejected. IIII is not rewritten as 4.',
      'Vinculum numerals above 3,999 are not on this page.'
    ]);
  }
  const value = whole(v.number, 1, 3999, 'number');
  const glyph = toRoman(value);
  return result(glyph, [
    `${value} written with the standard subtractive pairs`,
    'M is 1,000, D is 500, C is 100, L is 50, X is 10, V is 5, and I is 1.',
    '4 is IV, not IIII. 900 is CM. 1,994 is MCMXCIV.',
    'Reading a numeral back to a number is the other direction.'
  ]);
}

function longDivision(v) {
  const dividend = whole(v.dividend, 0, 1e15, 'dividend');
  const divisor = whole(v.divisor, 1, 1e12, 'divisor');
  const quotient = Math.floor(dividend / divisor);
  const remainder = dividend - quotient * divisor;
  const digits = String(dividend).split('').map(Number);
  const steps = [];
  let running = 0;
  for (const digit of digits) {
    running = running * 10 + digit;
    const q = Math.floor(running / divisor);
    const take = q * divisor;
    steps.push(`${running} ÷ ${divisor} contributes ${q}. ${take} is subtracted, leaving ${running - take}.`);
    running -= take;
    if (steps.length > 16) break;
  }
  return result(`quotient ${quotient}`, [
    `Remainder ${remainder}`,
    `${divisor} × ${quotient} + ${remainder} = ${divisor * quotient + remainder}`,
    ...steps.slice(0, 8),
    steps.length > 8 ? 'Later digit steps are omitted from this list. The quotient and the remainder are exact.' : 'Each line is one digit of the dividend brought down.',
    'The dividend and the divisor are whole numbers. A decimal quotient is the quotient plus the remainder divided by the divisor, which is ' + loose(dividend / divisor, 8) + '.'
  ]);
}

function applyFn(name, arg) {
  const rad = (deg) => deg * Math.PI / 180;
  const deg = (r) => r * 180 / Math.PI;
  if (name === 'sin') return Math.sin(rad(arg));
  if (name === 'cos') return Math.cos(rad(arg));
  if (name === 'tan') {
    const cosine = Math.cos(rad(arg));
    if (Math.abs(cosine) < 1e-12) throw new Error('Tangent is undefined at that angle');
    return Math.sin(rad(arg)) / cosine;
  }
  if (name === 'asin') {
    if (arg < -1 || arg > 1) throw new Error('Inverse sine is defined from −1 to 1');
    return deg(Math.asin(arg));
  }
  if (name === 'acos') {
    if (arg < -1 || arg > 1) throw new Error('Inverse cosine is defined from −1 to 1');
    return deg(Math.acos(arg));
  }
  if (name === 'atan') return deg(Math.atan(arg));
  if (name === 'sqrt') {
    if (arg < 0) throw new Error('The square root of a negative number is not real on this page');
    return Math.sqrt(arg);
  }
  if (name === 'log') {
    if (arg <= 0) throw new Error('A base-10 logarithm needs a positive number');
    return Math.log10(arg);
  }
  if (name === 'ln') {
    if (arg <= 0) throw new Error('A natural logarithm needs a positive number');
    return Math.log(arg);
  }
  if (name === 'abs') return Math.abs(arg);
  throw new Error(`Unknown function ${name}`);
}

export function evaluateExpression(source) {
  const s = String(source ?? '').trim();
  if (!s) throw new Error('Enter an expression');
  if (s.length > 200) throw new Error('Enter an expression of at most 200 characters');
  let i = 0;
  const peek = () => s[i];
  const skip = () => { while (s[i] === ' ') i += 1; };
  function parseExpr() {
    let left = parseTerm();
    skip();
    while (peek() === '+' || peek() === '-') {
      const op = peek();
      i += 1;
      const right = parseTerm();
      left = op === '+' ? left + right : left - right;
    }
    return left;
  }
  function parseTerm() {
    let left = parsePow();
    skip();
    while (peek() === '*' || peek() === '/') {
      const op = peek();
      i += 1;
      const right = parsePow();
      if (op === '/' && right === 0) throw new Error('Division by zero');
      left = op === '*' ? left * right : left / right;
    }
    return left;
  }
  function parsePow() {
    const base = parseUnary();
    skip();
    if (peek() === '^') {
      i += 1;
      const exp = parsePow();
      if (base < 0 && !Number.isInteger(exp)) throw new Error('A negative number raised to a fractional power is not real here');
      const value = base ** exp;
      if (!Number.isFinite(value)) throw new Error('That power is too large or is not a real number');
      return value;
    }
    return base;
  }
  function parseUnary() {
    skip();
    if (peek() === '-') { i += 1; return -parseUnary(); }
    if (peek() === '+') { i += 1; return parseUnary(); }
    return parsePrimary();
  }
  function parsePrimary() {
    skip();
    if (peek() === '(') {
      i += 1;
      const value = parseExpr();
      skip();
      if (peek() !== ')') throw new Error('Missing a closing parenthesis');
      i += 1;
      return value;
    }
    if (/[a-z]/i.test(peek() || '')) {
      const start = i;
      while (/[a-z]/i.test(peek() || '')) i += 1;
      const name = s.slice(start, i).toLowerCase();
      skip();
      if ((name === 'pi' || name === 'e') && peek() !== '(') return name === 'pi' ? Math.PI : Math.E;
      if (peek() !== '(') throw new Error(`${name} is not a known constant or function`);
      i += 1;
      const arg = parseExpr();
      skip();
      if (peek() !== ')') throw new Error('Missing a closing parenthesis after the function');
      i += 1;
      return applyFn(name, arg);
    }
    const start = i;
    if (!/[0-9.]/.test(peek() || '')) throw new Error('The expression could not be read');
    while (/[0-9.]/.test(peek() || '')) i += 1;
    if (s[start] === '.' && i === start + 1) throw new Error('A decimal point needs a digit');
    const value = Number(s.slice(start, i));
    if (!Number.isFinite(value)) throw new Error('That number could not be read');
    return value;
  }
  const value = parseExpr();
  skip();
  if (i !== s.length) throw new Error('There are characters left after the expression');
  if (!Number.isFinite(value)) throw new Error('The result is not a finite number');
  return value;
}

function expression(v) {
  const value = evaluateExpression(v.expression);
  return result(loose(value, 8), [
    'The expression was read from left to right for + and −, and for × and ÷, with × and ÷ done before + and −.',
    'A power, written with ^, is done before multiplication, and a tower of powers is evaluated from the right. 2^3^2 is 2^(3^2) = 512, not 64.',
    'sin, cos, tan, asin, acos, and atan use degrees. log is base 10. ln is natural. sqrt and abs take one argument. pi and e are constants.',
    'Parentheses group a subexpression. This is ordinary real arithmetic. It is not a solver and it does not store a previous answer.'
  ]);
}

export const nov14Math = {
  'percent-error-calculator': percentError,
  'exponent-calculator': exponent,
  'quadratic-formula-calculator': quadratic,
  'slope-calculator': slope,
  'logarithm-calculator': logarithm,
  'nth-root-calculator': nthRoot,
  'lcm-calculator': lcm,
  'gcf-calculator': gcf,
  'integer-factor-calculator': factors,
  'rounding-calculator': rounding,
  'scientific-notation-calculator': scientificNotation,
  'number-sequence-calculator': sequence,
  'permutation-combination-calculator': permutations,
  'z-score-calculator': zScore,
  'confidence-interval-calculator': confidenceInterval,
  'sample-size-calculator': sampleSize,
  'probability-calculator': probability,
  'descriptive-statistics-calculator': descriptive,
  'coordinate-distance-calculator': distance,
  'circle-calculator': circle,
  'surface-area-calculator': surfaceArea,
  'right-triangle-calculator': rightTriangle,
  'half-life-calculator': halfLife,
  'number-base-calculator': numberBase,
  'roman-numeral-converter': roman,
  'long-division-calculator': longDivision,
  'expression-calculator': expression
};
