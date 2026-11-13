import { calculate } from '../lib/calculate.js';
import { nov13ToolsA } from './nov13-tools-a.js';
import { nov13ToolsB } from './nov13-tools-b.js';
import { nov13ToolsC } from './nov13-tools-c.js';
import { nov13ToolsD } from './nov13-tools-d.js';

export const nov13CalculatorContent = {
  ...nov13ToolsA,
  ...nov13ToolsB,
  ...nov13ToolsC,
  ...nov13ToolsD
};

const gbp = (value) => new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 }).format(value);

function duty(price, buyer, period) {
  return calculate('england-stamp-duty-calculator', { price, buyer, residence: 1, period }).headline;
}

const SEARCHED_PRICES = [190000, 220000, 270000, 360000, 420000, 430000, 850000, 900000, 1100000];

export function applyNov13Deepening(content) {
  const stamp = content['england-stamp-duty-calculator'];
  stamp.description = `${stamp.description} A second home uses the higher rates. The default answer is the 2026/27 card, not a 2017 or 2018 calculator.`;
  stamp.intro.push(
    'Search Console queries on this page are dominated by “stamp duty calculator”, “stamp calculator uk”, “how much is stamp duty 2018”, and “stamp duty calculator second home”, plus prices such as £190,000, £220,000, £270,000, £360,000, £420,000, £430,000, £850,000, £900,000, and £1.1 million. The default completion period is 1 April 2025 onward, which is the card still published for a 2026/27 purchase in England or Northern Ireland. For a UK resident replacing a main home, those prices produce the same SDLT in 2018 as they do now, because the standard slices under £1.5 million did not move. A second home does not match. The additional-dwelling loading was 3 percentage points in 2018 and is 5 points now. This page will calculate the 2018 card if you select it. It does not pretend the default is 2018.'
  );
  stamp.examples.push(
    {
      title: 'Second homes at the prices people search',
      paragraphs: [
        'A second home, or any other additional dwelling, uses the higher rates when the price is £40,000 or more: 5%, 7%, 10%, 15%, and 17% from 1 April 2025. On £190,000 that is 5% of £125,000 plus 7% of £65,000, which is £10,800.00. On £220,000 it is £12,900.00. On £270,000 it is £17,000.00. On £360,000 it is £26,000.00. On £420,000 it is £32,000.00. On £430,000 it is £33,000.00. On £850,000 it is £75,000.00. On £900,000 it is £80,000.00. On £1.1 million it is £108,750.00. Choose “Additional property” and leave the completion period on the 2026 row.',
        'The same £430,000 additional dwelling completed in 2018, which sits in 22 November 2017 to 7 July 2020, is £24,400.00. The £8,600 gap is the later increase from 3 points to 5 points. A completion from 1 April 2016 to 21 November 2017, which is most of 2017, is also £24,400.00 on that additional dwelling. What 2017 did not have, until 22 November, was first-time buyer relief. A first-time buyer of a £360,000 home pays £3,000.00 now and paid £3,000.00 in 2018, and would have paid the standard £8,000.00 on a completion before 22 November 2017.'
      ]
    },
    {
      title: '£270,000, £360,000, and £420,000 on the 2026/27 bands',
      paragraphs: [
        '£270,000, replacing a main home, is £0 on the first £125,000, 2% of the next £125,000 which is £2,500, and 5% of the remaining £20,000 which is £1,000. The calculator shows £3,500.00. A first-time buyer pays £0.00 because £270,000 is under the £300,000 relief nil band. A second home pays £17,000.00.',
        '£360,000 standard is £2,500 plus 5% of £110,000, which is £8,000.00. A first-time buyer pays 5% of the £60,000 above £300,000, which is £3,000.00. £420,000 standard is £2,500 plus 5% of £170,000, which is £11,000.00. The first-time buyer pays 5% of £120,000, which is £6,000.00. The second-home results are £26,000.00 and £32,000.00. All six figures are the default 2026/27 card for a UK resident.'
      ]
    }
  );
  stamp.extraSections.push(
    {
      heading: 'Stamp duty rates for 2026/27',
      anchor: 'stamp-duty-rates-2026-27',
      paragraphs: [
        'The rates below are the residential Stamp Duty Land Tax bands GOV.UK publishes for a purchase in England or Northern Ireland on or after 1 April 2025. The House of Commons Library briefing on SDLT, using the HMRC residential table, was still showing these main rates in May 2026. They are the bands this calculator uses for a 2026/27 completion unless you change the completion-period menu. Each rate applies only to its slice. Scotland and Wales are not in the table.',
        'GOV.UK’s own sliced example is unchanged: a £295,000 purchase that leaves you with one home is £0 + £2,500 + £2,250 = £4,750. A first-time buyer pays no SDLT up to £300,000 and 5% from £300,001 to £500,000, and loses the relief entirely above £500,000. An additional dwelling, including a second home, usually pays 5 percentage points on top of the standard rates. The non-UK resident surcharge is a further 2 percentage points and is not in the table below. Source: GOV.UK, “Stamp Duty Land Tax: Residential property rates”, and the higher-rates guidance for additional dwellings. Checked against this calculator on 13 November 2026.'
      ],
      table: {
        heading: 'Residential SDLT slices from 1 April 2025, still the 2026/27 card',
        caption: 'England and Northern Ireland. Standard is a purchase that replaces your only or main home. First-time buyer relief applies only when the whole price is £500,000 or less. The second-home column is the higher rates, standard plus 5 points, from £40,000. A non-UK resident pays 2 points more on each band that was used.',
        headers: ['Slice of the price', 'Standard', 'First-time buyer, price £500,000 or less', 'Second home or other additional dwelling'],
        rows: [
          ['Up to £125,000', '0%', '0% (the relief nil band runs to £300,000)', '5%'],
          ['£125,001 to £250,000', '2%', '0% while the price is still inside the £300,000 relief band', '7%'],
          ['£250,001 to £300,000', '5%', '0%', '10%'],
          ['£300,001 to £500,000', '5%', '5%', '10%'],
          ['£500,001 to £925,000', '5%', 'No relief. Standard 5% on this slice.', '10%'],
          ['£925,001 to £1.5 million', '10%', 'No relief. Standard 10%.', '15%'],
          ['Above £1.5 million', '12%', 'No relief. Standard 12%.', '17%']
        ]
      }
    },
    {
      heading: 'Current rates are not the 2017 or 2018 rates',
      anchor: 'stamp-duty-2017-2018',
      paragraphs: [
        'This tool is not a 2018 stamp duty calculator and it is not a 2017 one. The form opens on “1 April 2025 onward (2026 rates)”. The history section and the completion-period menu exist so a question about an old completion can be answered without changing the default. For the prices in the Search Console list, a UK resident replacing a main home pays the same SDLT in 2018 as in 2026/27. The standard slices of 0%, 2%, 5%, 10%, and 12% have been the main-home card since 4 December 2014, except during the later temporary nil-rate increases. £430,000 was £11,500.00 then and is £11,500.00 now.',
        'The second-home question is where 2018 and 2017 differ from today. From 1 April 2016 to 30 October 2024 the additional-dwelling loading was 3 percentage points. It became 5 points on 31 October 2024. A £430,000 second home was £24,400.00 in 2018 and is £33,000.00 now. A £190,000 second home was £7,000.00 and is £10,800.00. First-time buyer relief did not exist before 22 November 2017, so a 2017 completion before that date pays the standard amount even if you select first-time buyer. From 22 November 2017 through 2018 the first-time buyer result matches the 2026/27 relief at these prices. Pick the period that matches the completion. Leaving the menu alone always means the current card.'
      ],
      table: {
        heading: 'Searched prices: 2026/27 against 2018 and early 2017',
        caption: 'UK resident. 2026/27 is the default period, 1 April 2025 onward. 2018 is the period 22 November 2017 to 7 July 2020, which also covers 2019. Early 2017 is 1 April 2016 to 21 November 2017, before first-time buyer relief. Each amount is this calculator’s headline. Main-home tax matches across the three periods at these prices. Second-home tax does not.',
        headers: ['Price', 'Main home, 2026/27 and 2018', 'Second home, 2026/27', 'Second home, 2018 and early 2017', 'First-time buyer, 2026/27 and 2018', 'First-time buyer before 22 Nov 2017'],
        rows: SEARCHED_PRICES.map((price) => [
          gbp(price),
          duty(price, 1, 1),
          duty(price, 3, 1),
          duty(price, 3, 8),
          duty(price, 2, 1),
          duty(price, 2, 9)
        ])
      }
    }
  );
  const secondHomeFaq = stamp.faqs.findIndex((faq) => faq.q.startsWith('How does the non-UK resident'));
  if (secondHomeFaq >= 0) {
    stamp.faqs[secondHomeFaq] = {
      q: 'How much is the stamp duty on a second home in England?',
      a: 'At the 2026/27 higher rates, a UK resident pays £10,800.00 on a £190,000 second home, £17,000.00 on £270,000, £32,000.00 on £420,000, £33,000.00 on £430,000, and £75,000.00 on £850,000. The loading is 5 percentage points above the standard slices when the price is £40,000 or more. The same £430,000 additional dwelling was £24,400.00 in 2018, when the loading was 3 points. Choose Additional property. The default period is the current card, not 2018. A non-UK resident pays a further 2 percentage points on top of whichever card applies from 1 April 2021.'
    };
  }
  const historicalFaq = stamp.faqs.find((faq) => faq.q.startsWith('How much was stamp duty in 2018'));
  if (historicalFaq) {
    historicalFaq.a = `This is not a 2018 calculator. The default is the 2026/27 card. ${historicalFaq.a}`;
  }

  const change = content['percentage-change-calculator'];
  change.title = 'Percentage Change Calculator: Increase and Decrease | ClearCalc';
  change.description = 'Percentage change calculator for a percentage increase or a percentage decrease. From 80 to 100 is a 25.00% increase. From 100 to 80 is a 20.00% decrease. From 52,000 to 56,000 is a 7.69% increase. The formula is (new − old) / old × 100.';
  change.intro.push(
    'A percentage increase and a percentage decrease use the same formula. Subtract the starting value from the new value, divide by the starting value, and multiply by 100. The sign is the sign of that result, and the direction word follows which number is larger. From 52,000 to 56,000 the difference is 4,000, and 4,000 / 52,000 is a 7.69% increase. From 64,000 to 58,000 the difference is −6,000, and −6,000 / 64,000 is a −9.38% decrease. From 40 to 70 is a 75.00% increase. None of these is “what percent is A of B”, which is the percentage calculator, and none of them is a salary contract. The pay-raise page adds the monthly and hourly translations when the two numbers are pay.'
  );
  change.examples.push(
    {
      title: 'An increase from 52,000 to 56,000, and a decrease from 64,000 to 58,000',
      paragraphs: [
        'Starting value 52000, new value 56000. The difference is 4,000. Dividing by the starting 52,000 gives 0.076923…, which the headline shows as 7.69% increase. The new value is greater, so the direction word agrees with the positive sign.',
        'Starting value 64000, new value 58000. The difference is −6,000. Dividing by 64,000 gives −0.09375, shown as −9.38% decrease. The decrease that would undo a move from 52,000 to 56,000 is not 7.69%, because the base would then be 56,000. This pair is a separate example, not that reverse.'
      ]
    },
    {
      title: 'A 75% increase, and why the reverse is not 75%',
      paragraphs: [
        'Starting value 40, new value 70. The difference is 30, and 30 / 40 is 0.75. The headline is 75.00% increase. Going back from 70 to 40 is a difference of −30 on a base of 70, which is −42.86% decrease, not −75%. The formula always divides by the value you called the start.',
        'Percent difference, the second choice on the form, would ignore the direction. From 40 to 70 the absolute gap is 30 and the average of the absolute values is 55, so the difference is 54.55%. That is a third number, neither 75% nor 42.86%. Use it only when neither value is the base.'
      ]
    }
  );
  change.extraSections.push({
    heading: 'Increase and decrease on the same formula',
    paragraphs: [
      'The table is the headline of this calculator for pairs that are not already in the smaller example table. Each percent uses (new − old) / old. A starting value of zero is still rejected, so it is not a row. The percentage calculator remains the page for part divided by whole.'
    ],
    table: {
      heading: 'More percentage increases and decreases',
      caption: 'Mode left on percent change. The percent column is this calculator’s headline.',
      headers: ['Starting value', 'New value', 'Percentage change'],
      rows: [
        ['52,000', '56,000', calculate('percentage-change-calculator', { old: 52000, next: 56000 }).headline],
        ['64,000', '58,000', calculate('percentage-change-calculator', { old: 64000, next: 58000 }).headline],
        ['40', '70', calculate('percentage-change-calculator', { old: 40, next: 70 }).headline],
        ['70', '40', calculate('percentage-change-calculator', { old: 70, next: 40 }).headline],
        ['100', '100', calculate('percentage-change-calculator', { old: 100, next: 100 }).headline]
      ]
    }
  });
  change.faqs.push(
    {
      q: 'What is the percentage increase from 52,000 to 56,000?',
      a: 'A 7.69% increase. The difference is 4,000, and 4,000 divided by the starting value 52,000 is 0.076923, which displays as 7.69% increase. The pay-raise page, given those two salaries, reports the same percent and also divides the pay by 12 and by 2,080.'
    },
    {
      q: 'What is the percentage decrease from 64,000 to 58,000?',
      a: 'A −9.38% decrease. The difference is −6,000 and the base is 64,000. −6,000 / 64,000 = −0.09375. The direction word is decrease because 58,000 is smaller than 64,000. A starting value of zero would be rejected. This one is not.'
    }
  );

  const mortgage = content['mortgage-calculator'];
  mortgage.title = 'Mortgage Calculator: Principal and Interest vs PITI | ClearCalc';
  mortgage.h1 = 'Mortgage Calculator: Principal and Interest vs PITI';
  mortgage.description = 'Mortgage calculator that separates principal and interest from the PITI housing payment. A $170,000 purchase with 20% down, 30 years, and 4.25% has a $136,000 loan. Principal and interest is $669.04 a month. With $1,500 of tax and $1,000 of insurance the housing payment is $877.37.';
  mortgage.intro.push(
    'Principal and interest is the amortizing payment. PITI is that payment plus property tax, homeowners insurance, and mortgage insurance. On a $170,000 purchase with 20% down, the loan is $136,000. At 4.25% for 30 years the principal-and-interest payment is $669.04 a month. Annual tax of $1,500 is $125.00 a month and annual insurance of $1,000 is $83.33 a month, so the housing payment is $877.37. A figure of $669 is that principal and interest rounded to the dollar. A figure of $877 is the housing payment rounded to the dollar. $208 and $1,200 are not this loan. Leave tax, insurance, and PMI at zero and the headline stays $669.04. Type them and the headline becomes the housing payment, while the principal-and-interest line does not move.'
  );
  mortgage.howItWorks.splice(mortgage.howItWorks.length - 1, 0,
    'The $136,000 loan is the one to use when the question gives a purchase price and a down payment instead of a loan amount. Twenty percent of $170,000 is $34,000, and $170,000 − $34,000 is $136,000. The monthly rate is 4.25 / 100 / 12. Over 360 payments the principal-and-interest result is $669.04. Total interest is $104,853.77. Year 1 is $2,292.78 of principal and $5,735.68 of interest, and the balance is $133,707.22. Tax and insurance are not inside that balance. A different typical US case is $320,000 at 6.5% for 30 years, which is $2,022.62 of principal and interest. Adding $4,800 of tax and $1,800 of insurance makes the housing payment $2,572.62. The UK and Canada mortgage pages use different compounding conventions and different currencies. This page stays on a US nominal rate divided by 12.'
  );
  mortgage.examples.unshift({
    title: '$170,000 purchase, 20% down, 4.25% for 30 years',
    paragraphs: [
      'The loan amount to type is 136000, not 170000. The rate is 4.25 and the term is 30. With tax and insurance left at zero, the headline is $669.04 / month. That is principal and interest. Total repayment is $240,853.77 and total interest is $104,853.77.',
      'Type 1500 for annual property tax and 1000 for annual insurance. The principal-and-interest line stays $669.04. Tax is $125.00 a month and insurance is $83.33 a month. The headline switches to the housing payment, $877.37 / month. PMI left at zero adds nothing. The year-by-year balance still uses only principal and interest. $877.37 is not the amortizing payment, and $669.04 is not the full housing bill.'
    ]
  });
  mortgage.extraSections.push({
    heading: 'Principal and interest compared with PITI',
    paragraphs: [
      'PITI here means principal, interest, tax, and insurance. PMI is included when you type a monthly amount, and it is zero in the rows below. The principal-and-interest column does not change when tax and insurance change. The housing column does. The $300,000 row is the page’s original sample, with the extras left at zero, so the two columns match.'
    ],
    table: {
      heading: 'Two loans, with and without tax and insurance',
      caption: 'Principal and interest is the amortizing payment. Tax and insurance are annual amounts divided by 12. The housing payment is this calculator’s headline once either of those is above zero, and it is the principal-and-interest headline when both are zero.',
      headers: ['Loan', 'Principal and interest', 'Monthly tax', 'Monthly insurance', 'Housing payment'],
      rows: [
        ['$136,000 at 4.25% for 30 years', '$669.04', '$125.00', '$83.33', '$877.37'],
        ['$320,000 at 6.5% for 30 years', '$2,022.62', '$400.00', '$150.00', '$2,572.62'],
        ['$300,000 at 6.5% for 30 years', '$1,896.20', '$0.00', '$0.00', '$1,896.20']
      ]
    }
  });
  mortgage.faqs[0] = {
    q: 'Does this mortgage payment include property tax and insurance?',
    a: 'The headline does, when you type them. Principal and interest on $136,000 at 4.25% for 30 years is $669.04 a month. Adding $1,500 of annual tax and $1,000 of annual insurance makes the housing payment $877.37. Those extras are not in the interest or the balance. Leave the three boxes at zero and the headline stays the principal-and-interest payment, $1,896.20 on the $300,000, 6.5%, 30-year sample.'
  };
  mortgage.faqs.push({
    q: 'What is the principal and interest on a $170,000 home with 20% down at 4.25%?',
    a: 'The loan is $136,000, which is $170,000 minus the $34,000 down payment. At 4.25% for 30 years the principal-and-interest payment is $669.04 a month. With $1,500 of yearly tax and $1,000 of yearly insurance the PITI housing payment is $877.37. $669 rounded to the dollar is the principal and interest. $877 rounded to the dollar is the housing payment. They are not interchangeable.'
  });

  const link = (from, slug, label, note) => {
    const entry = content[from];
    if (!entry) return;
    entry.relatedLinks = entry.relatedLinks ?? [];
    if (!entry.relatedLinks.some((item) => item.slug === slug)) entry.relatedLinks.push({ slug, label, note });
  };
  link('england-stamp-duty-calculator', 'uk-capital-gains-tax-calculator', 'UK capital gains tax calculator', 'A later sale, not the SDLT on the purchase. A £12,600 gain with £20,000 of taxable income is £1,728.00 of UK CGT.');
  link('percentage-change-calculator', 'pay-raise-calculator', 'Pay raise calculator', 'From $50,000 to $54,000 is an 8.00% raise and $4,000.00. This page would report the 8.00% increase and would not divide by 2,080.');
  link('percentage-change-calculator', 'average-calculator', 'Average calculator', 'The mean of 8, 6, 10, and 12 is 9.0000. A mean is not a percent change from the first number to the last.');
  link('mortgage-calculator', 'heloc-calculator', 'HELOC calculator', 'Available equity and the payment on a draw. A $500,000 home with a $280,000 mortgage at an 80% cap leaves $120,000. A $50,000 draw at 8% interest-only is $333.33 a month.');
  link('mortgage-calculator', 'rental-property-calculator', 'Rental property calculator', 'The $320,000 payment at 6.5% for 30 years is $2,022.62 here. The rental page subtracts it from rent after vacancy and expenses.');
  link('mortgage-calculator', 'auto-lease-calculator', 'Auto lease calculator', 'A lease payment uses a residual and a money factor. It is not this amortizing mortgage payment.');
}

export function attachNov13Links(content) {
  const add = (from, slug, label, note) => {
    const entry = content[from];
    if (!entry) return;
    entry.relatedLinks = entry.relatedLinks ?? [];
    if (!entry.relatedLinks.some((item) => item.slug === slug)) entry.relatedLinks.push({ slug, label, note });
  };
  const links = [
    ['time-card-hours-calculator', 'hours-calculator', 'Hours calculator', '09:15 to 17:45 is 8 hours 30 minutes, and a span can cross midnight. The time card keeps the break and stays inside one day.'],
    ['percentage-calculator', 'average-calculator', 'Average calculator', 'The mean of a list. 8, 6, 10, and 12 average 9.0000. Part divided by whole stays on this page.'],
    ['grade-calculator', 'standard-deviation-calculator', 'Standard deviation calculator', 'Sample and population spread of a list. The grade page is a weighted score, not a standard deviation.'],
    ['area-calculator', 'pythagorean-theorem-calculator', 'Pythagorean theorem calculator', 'Legs of 3 and 4 give a hypotenuse of 5.0000. The area page does not solve a side.'],
    ['area-calculator', 'volume-calculator', 'Volume calculator', 'A 2 by 3 by 4 foot box is 24.0000 cubic feet. Area stays flat.'],
    ['square-footage-calculator', 'roofing-calculator', 'Roofing calculator', 'A 40 by 30 foot footprint at 6/12 with 10% waste is 1,341.64 sq ft and 45 bundles. Square footage has no pitch.'],
    ['fence-calculator', 'stair-calculator', 'Stair calculator', 'A 108 inch rise is 15 risers of 7.200 inches. A fence spacing is not a riser, and the 7.75 inch screen is not a fence post.'],
    ['car-payment-calculator', 'auto-lease-calculator', 'Auto lease calculator', 'A $32,000 cap and a $19,200 residual at money factor 0.00125 for 36 months is $419.56. A car loan has no residual.'],
    ['home-equity-loan-calculator', 'heloc-calculator', 'HELOC payment calculator', 'The same $120,000 room, plus the payment on the amount you draw. Interest-only on $50,000 at 8% is $333.33 a month.'],
    ['hourly-to-salary-calculator', 'commission-calculator', 'Commission calculator', '8% of $80,000 of sales plus a $2,000 base is $8,400.00. Hourly pay does not start from sales.'],
    ['hourly-to-salary-calculator', 'pay-raise-calculator', 'Pay raise calculator', '$50,000 to $54,000 is an 8.00% raise. The hourly line assumes 2,080 hours.'],
    ['compound-interest-calculator', 'annuity-calculator', 'Annuity calculator', '$200 a month at 6% for 10 years is a $32,775.87 ordinary future value, with no starting lump sum.'],
    ['rent-vs-buy-calculator', 'rental-property-calculator', 'Rental property calculator', 'One year of cash flow, cap rate, and cash-on-cash. The sample at $2,800 rent cash-flows −$325.42 a month and has a 5.09% cap rate.'],
    ['calorie-calculator', 'calories-burned-calculator', 'Calories burned calculator', 'One session from a 2024 MET. Walking at 3.8 MET for 30 minutes at 70 kg is 133.0 kcal. The daily page is maintenance, not a session.'],
    ['body-fat-calculator', 'lean-body-mass-calculator', 'Lean body mass calculator', 'Boer or Hume from sex, height, and weight. A man at 80 kg and 180 cm is 61.42 kg by Boer. No circumferences.'],
    ['day-of-the-week-calculator', 'time-zone-converter', 'Time zone converter', '15:00 US Eastern on 15 July 2026 is 20:00 in the UK. The weekday page does not move the clock.'],
    ['length-converter', 'speed-converter', 'Speed converter', '60 mph is 96.5606 km/h and 52.1386 knots. Length is a distance, not a speed.'],
    ['tip-calculator', 'bill-split-calculator', 'Bill split calculator', 'Unequal shares. A $120 bill, 20% tip, and weights 2, 1, 1 is $72.00, $36.00, and $36.00. The tip page splits equally.'],
    ['us-federal-income-tax-calculator', 'us-capital-gains-tax-calculator', 'US capital gains tax calculator', '2026 federal tax on a gain. Single, $40,000 of other taxable income, and a $20,000 long-term gain is $1,582.50. Wages stay on the income-tax page.'],
    ['canada-rrsp-tax-savings-calculator', 'canada-tfsa-calculator', 'Canada TFSA calculator', '2026 TFSA room. The dollar limit is $7,000, and unused room since 2009 with no contributions is $109,000.00. An RRSP deduction is not TFSA room.']
  ];
  for (const [from, slug, label, note] of links) add(from, slug, label, note);
}
