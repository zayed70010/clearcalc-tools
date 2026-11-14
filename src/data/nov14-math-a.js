import { nov14Page as page } from './nov14-page.js';

const math = 'math-and-school';

export const nov14MathA = {
  'percent-error-calculator': page({
    slug: 'percent-error-calculator',
    title: 'Percent Error Calculator | ClearCalc',
    h1: 'Percent Error Calculator',
    description: 'Percent error for a measurement against a true value. A measured 9 and a true 10 is 10.00%. The signed difference is kept on its own line.',
    intro: [
      'Percent error answers how far a measurement sits from a reference, as a percent of that reference. A measured 9 against a true 10 is an absolute miss of 1, and 1/10 is 10.00%. The headline has no sign. The line above it keeps the signed difference, so a low reading is not written the same way as a high one.',
      'The percentage calculator asks what percent one number is of another. The percentage-change calculator asks how a starting value moved to a new value. Neither of those divides by a true value you are treating as the reference. This page does only that.',
      'A true value of zero is rejected. The fraction would divide by zero, and “percent of nothing” is not a useful error. Type the reference you actually trust, not a guess labeled as exact.'
    ],
    steps: [
      'Enter the measured value. The sample is 9.',
      'Enter the true value. The sample is 10.',
      'Press Calculate. The headline is the absolute percent error.',
      'Read the signed difference if you need to know whether the measurement was high or low.'
    ],
    howHeading: 'How percent error is calculated',
    howItWorks: [
      'Subtract the true value from the measured value. Take the absolute value of that difference. Divide by the absolute value of the true value, then multiply by 100. Using the absolute true value means a negative reference, such as a signed calibration offset, does not flip the percent by itself.',
      'The result is not a grade, a tolerance band, or a statement that the measurement is acceptable. A 10% error can be fine in one lab and useless in another. This page stops at the percent.'
    ],
    formula: 'Signed difference = measured − true\nPercent error = |measured − true| / |true| × 100\nA true value of zero is rejected',
    formulaNotes: [
      '9 − 10 = −1. The absolute error is 1. 1/10 × 100 = 10. The headline is 10.00%.',
      'If the measured value equals the true value, both the difference and the percent are zero. That is a match, not a missing input.'
    ],
    examplesHeading: 'Worked percent-error examples',
    samples: [
      { title: 'Measured 9, true 10', overrides: {}, blurb: 'The measurement is one unit low. The percent uses the absolute miss, so the headline is positive 10.00% while the difference line stays negative.' },
      { title: 'Measured 105, true 100', overrides: { measured: 105, truth: 100 }, blurb: 'Five units high on a reference of 100 is 5.00%. The same five units on a reference of 50 would be 10%, which is why the denominator is the true value and not a fixed scale.' },
      { title: 'An exact match', overrides: { measured: 10, truth: 10 }, blurb: 'Equal inputs are a zero error. The page does not treat a match as a blank form.' }
    ],
    table: { heading: 'Percent error for three pairs', caption: 'Each headline is this calculator. The signed difference is the first detail line, not the headline.', headers: ['Pair', 'Percent error'] },
    limitsHeading: 'What percent error does not say',
    limits: [
      'It is not a percent change from an earlier reading to a later one. From 80 to 100 is a 25% increase on the percentage-change page. Percent error would need you to name which of those is the true value.',
      'It does not average several trials. Type one measured value. A list belongs on the average or the descriptive-statistics page.',
      'It does not know the instrument. Repeating the same wrong method can produce a small percent error against a bad reference.',
      'Negative true values are allowed, and the denominator uses the absolute value. If your field uses a different convention for a signed reference, do not assume this page matches that convention.'
    ],
    disclaimer: 'Percent error is a comparison of two numbers you type. It is not a laboratory accreditation and it does not decide whether a result passes a spec.',
    faqs: [
      { q: 'Why is a measured 9 and a true 10 a 10.00% error?', a: 'The absolute difference is 1 and the true value is 10. 1 divided by 10 is 0.10, which is 10.00%. The measurement is low, and that sign is on the difference line rather than in the headline.' },
      { q: 'What happens if the true value in the percent error calculator is zero?', a: 'The page rejects it. Percent error divides by the true value, so zero has no percent. Use the signed difference by itself if the reference really is zero.' },
      { q: 'Is percent error the same as percent change?', a: 'No. Percent change divides by the starting value of a move from old to new. Percent error divides by the value you call true. They match only when that true value is also the starting value and you take the absolute value.' },
      { q: 'Can percent error be zero?', a: 'Yes. A measured 10 and a true 10 is 0.00%. That means the two numbers you typed are equal, not that the experiment was well designed.' }
    ],
    relatedLinks: [
      { slug: 'percentage-calculator', label: 'Percentage calculator', note: '25 is 12.50% of 200. That is part divided by whole, not an error against a reference.' },
      { slug: 'percentage-change-calculator', label: 'Percentage change calculator', note: 'From 80 to 100 is a 25.00% increase. The starting value is the denominator, not a true value you name separately.' },
      { slug: 'rounding-calculator', label: 'Rounding calculator', note: '2.5 to a whole number is 3 under half-away-from-zero, and 2 under half-to-even.' }
    ]
  }),
  'exponent-calculator': page({
    slug: 'exponent-calculator',
    title: 'Exponent Calculator | ClearCalc',
    h1: 'Exponent Calculator',
    description: 'Exponent calculator for a real power. 2 raised to 10 is 1,024. A negative base with a fractional exponent is rejected.',
    intro: [
      'An exponent says how many times to use the base in a product when the exponent is a positive whole number. 2 raised to 10 is 1,024, which is 2 multiplied by itself ten times. The same box also accepts a negative exponent, a zero exponent, and a fractional exponent when the result is a real number.',
      'The expression calculator can raise a number with the ^ sign inside a longer formula. This page is only the power, so the base and the exponent stay in separate fields and a bad combination can be named directly.',
      'A negative base with a fractional exponent, such as (−8)^(1/3) typed as a decimal power that is not a whole number, is rejected. Some of those values have a real cube root, and the nth-root page handles an odd root of a negative number on purpose. A general fractional power of a negative is not given a complex result here.'
    ],
    steps: [
      'Enter the base. The sample is 2.',
      'Enter the exponent. The sample is 10.',
      'Press Calculate. The headline is the power.',
      'For a root, use a unit fraction only when the base is not negative, or switch to the nth-root page for an even or odd root with its own rule.'
    ],
    howHeading: 'How a power is calculated',
    howItWorks: [
      'A positive whole exponent repeats multiplication. A negative whole exponent takes the reciprocal of the positive power. An exponent of zero returns 1 for any base other than zero. Zero to a negative power is rejected because it would divide by zero.',
      'A fractional exponent is a real power, not a printed stack of multiplications. The page refuses it when the base is negative. Very large results that overflow ordinary floating-point numbers are rejected rather than shown as infinity.'
    ],
    formula: 'Result = base ^ exponent\n0 ^ 0 is treated as 1 by the floating-point power used here\nA negative base requires a whole-number exponent\nZero to a negative exponent is rejected',
    formulaNotes: [
      '2^10 = 1,024. 2^−1 = 0.5. 9^0.5 = 3, the same square root the nth-root page reports for degree 2.',
      'This page’s 0^0 follows the language power and returns 1. If your context leaves 0^0 undefined, do not use that input.'
    ],
    examplesHeading: 'Worked exponent examples',
    samples: [
      { title: '2 to the 10th', overrides: {}, blurb: 'Ten factors of 2. The headline is 1,024, which is also 2^9 × 2.' },
      { title: 'A negative exponent', overrides: { base: 2, power: -1 }, blurb: '2^−1 is the reciprocal of 2. The headline is 0.5. The base is not inverted by itself. The sign of the exponent does that.' },
      { title: 'A square as a half power', overrides: { base: 9, power: 0.5 }, blurb: '9^0.5 is 3. The same question on the nth-root page, degree 2, is the square root. A negative base is allowed on that page only when the degree is odd.' }
    ],
    table: { heading: 'Powers checked on this page', caption: 'Each headline is this calculator. Fractional powers of a negative base are rejected.', headers: ['Power', 'Result'] },
    limitsHeading: 'What this exponent page leaves out',
    limits: [
      'It does not evaluate a tower. 2^3^2 belongs in the expression calculator, which applies powers from the right and gets 512.',
      'It does not return a complex number for a negative base and a fractional exponent.',
      'It does not convert the result into scientific notation. 2^10 is shown as 1,024. A very large but finite power is still an ordinary number until it overflows.',
      'Integer-only exact arithmetic for huge whole powers is the number-base calculator’s product, not this page. This page uses ordinary floating-point powers.'
    ],
    disclaimer: 'This is real arithmetic. It is not a symbolic algebra system, and 0^0 is the floating-point result rather than a debate.',
    faqs: [
      { q: 'What is 2 to the power of 10?', a: '1,024. That is 2 × 2 × 2 × 2 × 2 × 2 × 2 × 2 × 2 × 2. The exponent page reports 1,024 for base 2 and exponent 10.' },
      { q: 'Why does the exponent calculator reject a negative base with a decimal exponent?', a: 'A fractional power of a negative number is not always a real number. Odd roots of negatives are on the nth-root page, where the degree is a whole number and the sign rule is explicit.' },
      { q: 'What is 2 to the power of −1?', a: '0.5. A negative exponent means the reciprocal of the positive power. 2^−1 is 1/2.' },
      { q: 'Does this page do 2^3^2?', a: 'No. Enter one exponent. In the expression calculator, 2^3^2 is 512 because powers are evaluated from the right.' }
    ],
    relatedLinks: [
      { slug: 'nth-root-calculator', label: 'Nth root calculator', note: 'The 4th root of 81 is 3. An even root of a negative is rejected. An odd root is not.' },
      { slug: 'expression-calculator', label: 'Expression calculator', note: '2+3*4 is 14. Powers use ^ and a tower is right-associative.' },
      { slug: 'scientific-notation-calculator', label: 'Scientific notation calculator', note: '12,345 is 1.2345 × 10^4. That rewrites one number. It does not raise a base to an exponent you choose.' }
    ]
  })
};
