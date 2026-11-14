import { nov15FinanceContent } from './nov15-finance-content.js';
import { nov15RestContent } from './nov15-rest-content.js';

export const nov15CalculatorContent = {
  ...nov15FinanceContent,
  ...nov15RestContent
};

export function attachNov15Context(content) {
  const bmi = content['bmi-calculator'];
  bmi.intro.push('An adult BMI under 18.5 is the underweight range used on this page. That label is a screening category, not a diagnosis and not a target. Unintentional weight loss, a BMI that keeps falling, or worry about eating is a reason to talk with a clinician. This page does not compute a weight to aim for in order to be underweight, and it is not an anorexia calculator.');
  bmi.faqs.push({
    q: 'Does the BMI page tell someone what weight to reach to be underweight?',
    a: 'No. It reports the BMI of the weight and height you type, and it prints the adult range from BMI 18.5 up to 25. It does not solve for an underweight target, and it is not a tool for anorexia nervosa. A low BMI or worry about eating is a reason to get care, not a number to chase.'
  });
  const fuel = content['fuel-cost-calculator'];
  fuel.limits.push('The distance is a driving distance you already measured on a route, from a map, an odometer, or a trip computer. This page does not look up roads between two places. The coordinate distance calculator is a straight line through coordinates, and that straight line is not a driving distance.');
  const add = (from, slug, label, note) => {
    const entry = content[from];
    if (!entry) return;
    entry.relatedLinks = entry.relatedLinks ?? [];
    if (!entry.relatedLinks.some((item) => item.slug === slug)) entry.relatedLinks.push({ slug, label, note });
  };
  const links = [
    ['loan-calculator', 'loan-solver-calculator', 'Loan term and rate calculator', '$10,000 at 6% for 5 years monthly is $193.33. This page also solves for the number of payments and the rate, and it can use a weekly frequency.'],
    ['car-payment-calculator', 'vehicle-loan-calculator', 'Vehicle loan calculator', 'A price, a trade-in, sales tax, and fees become the amount financed. The car payment page starts after that amount is already known.'],
    ['compound-interest-calculator', 'after-tax-savings-calculator', 'After-tax savings calculator', 'A 5% yield taxed at 20% grows at 4%. The compound interest page does not take a tax rate.'],
    ['annuity-calculator', 'annuity-payout-calculator', 'Annuity payout calculator', '$100,000 at 5% for 20 years pays $659.96 a month. The annuity page starts from the payment, not the lump.'],
    ['us-federal-income-tax-calculator', 'marriage-tax-calculator', 'Marriage tax calculator', 'Two wages taxed as two single returns, compared with one joint return, using the 2026 standard deductions.'],
    ['us-federal-income-tax-calculator', 'us-tax-balance-calculator', 'US tax balance calculator', 'Compares 2026 income tax, or self-employment tax plus income tax, with the withholding you type.'],
    ['us-federal-income-tax-calculator', 'estate-tax-calculator', 'Federal estate tax calculator', 'A 2026 estate of $15,100,000 is $40,000 of tax above the $15,000,000 basic exclusion. Income tax is a different statute.'],
    ['roth-ira-calculator', 'traditional-ira-estimator', 'Traditional IRA estimator', 'The 2026 dollar limit is $7,500, or $8,600 at 50 or older. The deduction phase-out is not applied.'],
    ['credit-card-payoff-calculator', 'debt-payoff-calculator', 'Debt payoff calculator', 'Two or more debts, with the extra payment aimed at the smallest balance or the highest rate.'],
    ['mortgage-calculator', 'fha-loan-calculator', 'FHA loan calculator', 'Adds the 1.75% upfront premium and the annual MIP from Mortgagee Letter 2023-05. A conventional payment does not.'],
    ['mortgage-calculator', 'va-loan-calculator', 'VA loan calculator', 'Adds the VA funding fee from the chart effective 7 April 2023. An exemption sets that fee to zero.'],
    ['body-fat-calculator', 'army-body-fat-calculator', 'Army body fat calculator', 'Army Regulation 600-9, not the Navy equations. A man at 70, 15, and 36 inches is 21.3%. No pass or fail.'],
    ['bmi-calculator', 'kidney-function-calculator', 'eGFR calculator', '2021 CKD-EPI. A 60-year-old man with creatinine 0.9 mg/dL is about 97.8. Not a diagnosis, and not a BMI.'],
    ['bmi-calculator', 'circumference-ratio-calculator', 'Waist-hip ratio calculator', 'Waist divided by hip, compared with the WHO 0.90 and 0.85 figures. Not a body-type grade.'],
    ['pregnancy-due-date-calculator', 'pregnancy-date-calculator', 'Pregnancy date calculator', 'Conception on 1 January 2026 is due 24 September 2026. The due-date page still starts from a last period.'],
    ['macro-calculator', 'nutrient-range-calculator', 'Carbohydrate and fat range', '2,000 kcal is 225 to 325 g of carbohydrate at the adult 45 to 65 percent range. The macro page uses a percent you pick.'],
    ['pythagorean-theorem-calculator', 'triangle-solver-calculator', 'Triangle calculator', 'Sides 3, 4, and 5 have area 6. The Pythagorean page is the right angle only.'],
    ['fuel-cost-calculator', 'foot-size-calculator', 'Foot size calculator', '10.5 inches is 266.7 mm mondopoint. Fuel cost does not measure a foot. Driving miles stay a number you type.'],
    ['expression-calculator', 'big-integer-calculator', 'Big integer calculator', 'Exact whole-number products up to 200 digits. The expression calculator uses ordinary decimals.'],
    ['retirement-calculator', 'social-security-calculator', 'Social Security PIA calculator', 'An AIME of $1,286 at age 67 is $1,157.40 a month on the 2026 bend points. The retirement page does not compute a primary insurance amount.'],
    ['investment-calculator', 'fund-cost-calculator', 'Fund expense calculator', 'An expense ratio is subtracted inside the annual growth. The investment page does not take a fund fee.'],
    ['auto-lease-calculator', 'lease-implied-rate-calculator', 'Lease rate calculator', 'A payment, a cap cost, and a residual imply a money factor. The lease payment page starts from the factor.'],
    ['area-calculator', 'matrix-2x2-calculator', '2 by 2 matrix calculator', 'The determinant of [[1, 2], [3, 4]] is −2. Area is not a matrix.'],
    ['ohms-law-calculator', 'voltage-drop-calculator', 'Voltage drop calculator', 'A round trip on copper, not Ohm’s law for a single resistor and not a code certificate.'],
    ['pace-calculator', 'golf-differential-calculator', 'Golf score differential', 'One World Handicap System differential. A pace is a run, and one differential is not a Handicap Index.'],
    ['tip-calculator', 'name-entertainment-score', 'Name score', 'Ada and Ben score 43 out of 100. The number has no scientific validity. A tip is a bill, not a name.'],
    ['calorie-calculator', 'unofficial-points-estimator', 'Unofficial food points estimator', 'Calories, fat, and fiber through an old public approximation. Not a Weight Watchers value, and not a calorie target.']
  ];
  for (const row of links) add(...row);
}
