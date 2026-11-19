import { calculate } from '../lib/calculate.js';
import { daily19OtherContent } from './daily19-other-content.js';
import { daily19PayContent } from './daily19-pay-content.js';
import { daily19Run } from './daily19-page.js';

export const daily19CalculatorContent = {
  ...daily19PayContent,
  ...daily19OtherContent
};

const gbp0 = (value) => new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value);

function stampHeadline(price, buyer, period = 1) {
  return calculate('england-stamp-duty-calculator', { price, buyer, residence: 1, period }).headline;
}

function slicePounds(price, bands) {
  let previous = 0;
  const parts = [];
  for (const [top, rate] of bands) {
    const width = Math.min(price, top) - previous;
    if (width > 0) parts.push(width * rate);
    if (price <= top) break;
    previous = top;
  }
  return parts;
}

const MAIN_BANDS = [[125000, 0], [250000, 0.02], [925000, 0.05], [1500000, 0.10], [Infinity, 0.12]];
const SECOND_BANDS = [[125000, 0.05], [250000, 0.07], [925000, 0.10], [1500000, 0.15], [Infinity, 0.17]];
const WORKED_PRICES = [190000, 220000, 270000, 360000, 420000, 430000, 850000, 900000, 1100000];

function workedStampRows() {
  return WORKED_PRICES.map((price) => {
    const main = slicePounds(price, MAIN_BANDS);
    const built = main.map((part) => gbp0(part)).join(' + ');
    const mainTotal = stampHeadline(price, 1);
    const secondTotal = stampHeadline(price, 3);
    const summed = Math.round(main.reduce((sum, part) => sum + part, 0) * 100) / 100;
    if (gbp0(summed) !== mainTotal) throw new Error(`Stamp slice mismatch at ${price}: ${gbp0(summed)} vs ${mainTotal}`);
    const secondSum = Math.round(slicePounds(price, SECOND_BANDS).reduce((sum, part) => sum + part, 0) * 100) / 100;
    if (gbp0(secondSum) !== secondTotal) throw new Error(`Second-home slice mismatch at ${price}`);
    return [gbp0(price).replace('.00', ''), built, mainTotal, secondTotal];
  });
}

function addLink(content, from, slug, label, note) {
  const entry = content[from];
  if (!entry) return;
  entry.relatedLinks = entry.relatedLinks ?? [];
  if (!entry.relatedLinks.some((item) => item.slug === slug)) entry.relatedLinks.push({ slug, label, note });
}

export function applyDaily19Deepening(content) {
  const stamp = content['england-stamp-duty-calculator'];
  const worked = workedStampRows();
  const million = worked.find((row) => row[0] === '£1,100,000');
  stamp.intro.push(
    'The worked price table below splits the current main-home bill into the slices that produce it, for the prices people ask about, and it puts the second-home total in the last column. £1.1 million is one of those prices. On the 1 April 2025 bands a UK resident replacing a main home pays £53,750.00: nothing on the first £125,000, £2,500 on the next £125,000, 5% of the £675,000 up to £925,000 which is £33,750, and 10% of the remaining £175,000 which is £17,500. The same price as a second home is £108,750.00. The form still opens on the current card. The historical comparison under that table is an old completion, not a 2018 calculator.'
  );
  stamp.extraSections = [
    ...(stamp.extraSections ?? []),
    {
      heading: 'Worked stamp duty at the prices people ask about',
      anchor: 'stamp-duty-worked-prices',
      paragraphs: [
        'Each main-home total is this calculator on the default completion period, 1 April 2025 onward, for a UK resident replacing a main home. The middle column adds the slices: 0% to £125,000, 2% to £250,000, 5% to £925,000, and 10% above that when the price reaches it. £1.1 million is the first row in this set that uses the 10% slice. The second-home column is the higher rates, 5 percentage points above those slices, for a price of £40,000 or more. First-time buyer relief is a different table and is not repeated in these rows.',
        `£1.1 million is ${million[2]} as a main home and ${million[3]} as a second home. The main-home arithmetic is ${million[1]}. A query about “the stamp duty on 1.1 million” is this current-card row, not the 2018 additional-dwelling row further down.`
      ],
      table: {
        heading: 'Current stamp duty, slice by slice, including £1.1 million',
        caption: 'England and Northern Ireland, UK resident, completion on or after 1 April 2025. Main-home slices are 0%, 2%, 5%, and 10% as far as the price reaches. The second-home total is the higher rates. Amounts are this calculator’s headlines.',
        headers: ['Price', 'How the main-home tax is built', 'Main home', 'Second home'],
        rows: worked
      }
    },
    {
      heading: 'Historical comparison for an old completion, not the default calculator',
      anchor: 'stamp-duty-historical-comparison',
      paragraphs: [
        'This section is not the default and it is not a 2018 stamp duty calculator. The form opens on 1 April 2025 onward. The rows below exist because a completion in 2018, which sits in 22 November 2017 to 7 July 2020, used a 3 percentage point additional-dwelling loading instead of today’s 5 points. The standard main-home slices at these prices did not change, so the main-home column matches the current card. The second-home column does not.',
        `A £430,000 second home is ${stampHeadline(430000, 3, 1)} now and was ${stampHeadline(430000, 3, 8)} on the 2018 card. A £1.1 million second home is ${stampHeadline(1100000, 3, 1)} now and was ${stampHeadline(1100000, 3, 8)} then. Choose the completion period in the form if the purchase was actually in that window. Leaving the menu alone always means the current rates.`
      ],
      table: {
        heading: 'Old completion compared with the current card',
        caption: 'Not the default result. “2018 card” means the period 22 November 2017 to 7 July 2020. Main-home tax matches. Second-home tax uses 3 points then and 5 points now. Each cell is this calculator.',
        headers: ['Price', 'Main home, current and 2018 card', 'Second home, current card', 'Second home, 2018 card'],
        rows: [190000, 430000, 850000, 1100000].map((price) => [
          gbp0(price).replace('.00', ''),
          stampHeadline(price, 1, 1),
          stampHeadline(price, 3, 1),
          stampHeadline(price, 3, 8)
        ])
      }
    }
  ];

  const change = content['percentage-change-calculator'];
  const increase = calculate('percentage-change-calculator', { old: 80, next: 100 }).headline;
  const decrease = calculate('percentage-change-calculator', { old: 100, next: 80 }).headline;
  const points = calculate('percentage-change-calculator', { old: 5, next: 6 }).headline;
  const ofWhole = calculate('percentage-calculator', { part: 25, whole: 80 }).headline;
  const discount = calculate('discount-calculator', { price: 100, discount: 20 }).headline;
  change.description = `${change.description} Percentage of a number, and a one percentage-point gap, are different questions from this percent change.`;
  change.extraSections = [
    ...(change.extraSections ?? []),
    {
      heading: 'Percentage change, percentage of, and percentage points',
      anchor: 'percent-change-versus-points',
      paragraphs: [
        'Three questions use the word percent and do not share an answer. Percentage change divides the gap by the starting value. Percentage of divides a part by a whole, with no “before” and “after.” A percentage-point change subtracts one rate from another and does not divide. From 80 to 100 is a 25.00% increase. Twenty-five is 31.25% of 80, which is the percentage calculator, not this page. A rate that moves from 5% to 6% rose by 1 percentage point. The percent change in that rate, if you type 5 and 6 here, is a 20.00% increase. Quoting the 20% as “1 percent” mixes the two.',
        'A discount is a third cousin. Twenty percent off a $100 price leaves the sale price on the discount page. The move from 100 to 80 on this page is a −20.00% decrease, which matches that discount only because the base was the original price. A later markup that tries to undo the discount will not be 20%, because the base has moved.'
      ],
      table: {
        heading: 'Which percent question is which',
        caption: 'Each result is the calculator named in the row. Percentage change keeps a direction. Percentage of does not. Percentage points are a subtraction, shown here by also running the percent-change formula on the two rates.',
        headers: ['Question', 'What is typed', 'Result', 'Page'],
        rows: [
          ['Percent increase', '80 then 100', increase, 'This page'],
          ['Percent decrease', '100 then 80', decrease, 'This page'],
          ['Percentage of', '25 of 80', ofWhole, 'Percentage calculator'],
          ['Percentage points', '5% to 6% is 1 point; the percent change of the rate is separate', points, 'This page, if you type the rates as values'],
          ['Discount', '20% off 100', discount, 'Discount calculator']
        ]
      }
    }
  ];
  if (change.faqs.length < 10) {
    change.faqs.push({
      q: 'What is the difference between a percent change and a percentage point?',
      a: 'A rate that moves from 5% to 6% changes by 1 percentage point. The percent change in the rate is (6 − 5) / 5 × 100, a 20.00% increase, which is what this page reports if you type 5 and 6. The percentage calculator answers a different question: 25 is 31.25% of 80. None of those three is the discount page’s sale price.'
    });
  }
  addLink(content, 'percentage-change-calculator', 'percentage-calculator', 'Percentage calculator', 'Part 25 of whole 80 is 31.25%. That is not the 25.00% increase from 80 to 100.');
  addLink(content, 'percentage-change-calculator', 'discount-calculator', 'Discount calculator', '20% off $100 is an $80.00 sale price. From 100 to 80 on this page is a −20.00% decrease.');

  const days = content['add-days-calculator'];
  const dayRows = [
    ['2026-01-31', 1, 'Month rollover'],
    ['2026-12-31', 1, 'Year rollover'],
    ['2024-02-28', 1, 'Leap day forward'],
    ['2026-02-28', 1, 'Non-leap February'],
    ['2024-03-01', -1, 'Back onto a leap day'],
    ['2026-03-01', -1, 'Back onto 28 February'],
    ['2026-01-01', 90, 'Ninety calendar days']
  ].map(([startdate, count, label]) => {
    const result = calculate('add-days-calculator', { startdate, days: count });
    return [label, result.details[0].replace('Start: ', ''), String(count), result.headline];
  });
  days.title = 'Add Days to a Date Calculator | ClearCalc';
  days.h1 = 'Add Days to a Date Calculator';
  days.description = 'Add days to a date, or subtract them. 1 January 2026 plus 90 days is 1 April 2026. 31 December 2026 plus 1 day is 1 January 2027. The count is civil calendar days, including weekends and a leap day. It is not a working-days calculator.';
  days.intro.push(
    'Adding days means date plus a whole number of civil days. The start date is day zero. 31 January 2026 plus 1 day is 1 February 2026, a month rollover. 31 December 2026 plus 1 day is 1 January 2027, a year rollover. 28 February 2024 plus 1 day is 29 February 2024 because 2024 is a leap year. The same step in 2026 lands on 1 March, because 2026 has no 29 February. Subtracting is a negative count: 1 March 2024 minus 1 day returns to the leap day.',
    'These are calendar days, not working days. Weekends and holidays stay in the count. A deadline of 10 working days is a different date from 10 calendar days, and it depends on which country’s holidays you drop. The date-difference page counts the gap between two dates. The US business-days, UK working-days, and Canada business-days pages are the ones that can skip weekends and holidays. This page does not become one of them.'
  );
  days.extraSections = [
    ...(days.extraSections ?? []),
    {
      heading: 'Month rollover, year rollover, and a leap day',
      anchor: 'add-days-rollover',
      paragraphs: [
        'The rows are this calculator. A positive count moves forward and a negative count moves backward. The leap-day row exists only because 2024 contains 29 February. The 2026 row next to it shows the common year. Ninety days from 1 January 2026 is still 1 April 2026, the sample result, and that span includes the weekends inside it.',
        'Working days are a different count. England and Wales have 253 working days in 2026 after bank holidays, the United States has 250 business days after federal holidays, and a Canadian province has its own statutory list. None of those totals is what you get by adding 253 or 250 on this page to 1 January, because this page would land on a calendar date that many days later and would not have removed weekends along the way.'
      ],
      table: {
        heading: 'Add and subtract calendar days',
        caption: 'Each result is this add-days calculator. The count includes weekends. Leap day appears only when the calendar has it.',
        headers: ['Case', 'Start', 'Days', 'Result'],
        rows: dayRows
      }
    }
  ];
  if (days.faqs.length < 10) {
    days.faqs.push(
      {
        q: 'What date is one day after 31 December 2026?',
        a: '1 January 2027. The year rolls over because December has 31 days and the start date is day zero. The same kind of step takes 31 January 2026 to 1 February 2026.'
      },
      {
        q: 'Does adding days skip weekends or bank holidays?',
        a: 'No. The count is civil calendar days. Use the US business-days calculator, the UK working-days calculator, or the Canada business-days calculator when weekends and holidays should drop out. This page does not turn into those tools.'
      }
    );
  }
  addLink(content, 'add-days-calculator', 'date-difference-calculator', 'Date difference calculator', '1 January 2026 to 1 April 2026 is 90 elapsed days. This page built 1 April from the count.');
  addLink(content, 'add-days-calculator', 'us-business-days-calculator', 'US business days calculator', 'Weekdays with US federal holidays removed. 2026 has 250 US business days. This page counts every civil day.');
  addLink(content, 'add-days-calculator', 'uk-working-days-calculator', 'UK working days calculator', 'Weekdays with bank holidays removed. England and Wales have 253 working days in 2026.');
  addLink(content, 'add-days-calculator', 'canada-business-days-calculator', 'Canada business days calculator', 'Weekdays with statutory holidays for Ontario, British Columbia, or Alberta. Not a calendar-day addition.');

  const iowa = daily19Run('iowa-paycheck-calculator');
  const se = daily19Run('us-self-employment-tax-calculator');
  const apy = daily19Run('apy-calculator');
  const isa = daily19Run('uk-isa-calculator');
  const util = daily19Run('credit-utilization-calculator');
  const miles = daily19Run('irs-mileage-reimbursement-calculator');
  const bricks = daily19Run('brick-calculator');
  const water = daily19Run('water-intake-calculator');
  const links = [
    ['georgia-paycheck-calculator', 'iowa-paycheck-calculator', 'Iowa paycheck calculator for 2026', `A 3.80% withholding formula. The $65,000 column A headline is ${iowa.headline}.`],
    ['georgia-paycheck-calculator', 'utah-paycheck-calculator', 'Utah paycheck calculator for 2026', 'Publication 14 at 4.45% for pay periods beginning on or after 1 June 2026.'],
    ['georgia-paycheck-calculator', 'oklahoma-paycheck-calculator', 'Oklahoma paycheck calculator for 2026', 'Packet OW-2, rounded to the nearest dollar. Not Georgia’s 4.99%.'],
    ['georgia-paycheck-calculator', 'louisiana-paycheck-calculator', 'Louisiana paycheck calculator for 2026', '3.09% after a $12,875 or $25,750 deduction.'],
    ['georgia-paycheck-calculator', 'kansas-paycheck-calculator', 'Kansas paycheck calculator for 2026', 'KW-100, with a $9,160 single allowance and rates of 5.2% and 5.58%.'],
    ['georgia-paycheck-calculator', 'mississippi-paycheck-calculator', 'Mississippi paycheck calculator for 2026', '4% of taxable income above $10,000. Not an Arkansas page.'],
    ['us-federal-income-tax-calculator', 'us-self-employment-tax-calculator', 'US self-employment tax calculator', `Schedule SE. A $100,000 profit is ${se.headline}. Income-tax brackets stay on this page.`],
    ['apr-calculator', 'apy-calculator', 'APY calculator', `A nominal 5% compounded monthly is ${apy.headline}. The APR page prices a loan fee instead.`],
    ['cap-rate-calculator', 'cash-on-cash-return-calculator', 'Cash-on-cash return calculator', '$8,000 of pre-tax cash flow on $88,000 invested is 9.09%. Cap rate uses value, not cash invested.'],
    ['canada-tfsa-calculator', 'uk-isa-calculator', 'UK ISA allowance calculator', `2026/27 room. The sample headline is ${isa.headline}. The TFSA uses Canadian dollar limits.`],
    ['mortgage-calculator', 'biweekly-mortgage-calculator', 'Biweekly mortgage calculator', 'Half of the $1,896.20 payment, 26 times a year. The monthly page stays monthly.'],
    ['credit-card-payoff-calculator', 'credit-utilization-calculator', 'Credit utilization calculator', `Balances over limits. The sample is ${util.headline}. No score, and no month count.`],
    ['gas-mileage-calculator', 'irs-mileage-reimbursement-calculator', 'IRS mileage reimbursement calculator', `2026 standard rates. One hundred first-half business miles are ${miles.headline}.`],
    ['bandwidth-calculator', 'download-time-calculator', 'Download time calculator', '100 MiB at 100 Mbps, with MB and Mbps kept apart. The bandwidth page has the wider unit list.'],
    ['measurement-converter', 'cooking-unit-converter', 'Cooking unit converter', 'Exact US cups and spoons, plus approximate gram weights for water, sugar, and flour.'],
    ['age-calculator', 'dog-age-calculator', 'Dog age calculator', '16 × ln(years) + 31 for a Labrador curve. Not a human birthday and not times 7.'],
    ['square-footage-calculator', 'brick-calculator', 'Brick calculator', `A 10 by 8 foot wall with the sample brick and 10% waste is ${bricks.headline}.`],
    ['pool-volume-calculator', 'tank-volume-calculator', 'Tank volume calculator', 'A rectangle or a cylinder, including a horizontal tank. Not a pool and not a chemical dose.'],
    ['tdee-calculator', 'water-intake-calculator', 'Water intake calculator', `A planning range. At 70 kg with no extra activity the headline is ${water.headline}. Not a prescription.`],
    ['big-integer-calculator', 'factorial-calculator', 'Factorial calculator', '10! is 3,628,800. The big-integer page multiplies two numbers you type.']
  ];
  for (const [from, slug, label, note] of links) addLink(content, from, slug, label, note);
}
