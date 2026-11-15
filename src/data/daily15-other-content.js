import { daily15Page as page, daily15Run } from './daily15-page.js';

const run = (slug, overrides = {}) => daily15Run(slug, overrides);

export const daily15OtherContent = {
  'break-even-calculator': page({
    slug: 'break-even-calculator',
    title: 'Break-Even Calculator: Units, Revenue, and Contribution Margin | ClearCalc',
    h1: 'Break-Even Calculator',
    description: 'Break-even calculator for units and revenue. Fixed costs of $12,000, a variable cost of $8, and a $20 price break even at 1,000 units and $20,000 of revenue. Contribution margin is $12.',
    intro: [
      'This break-even calculator divides fixed costs by the contribution margin, which is price minus variable cost per unit. The sample is $12,000 of fixed costs, $8 of variable cost, and a $20 price. The margin is $12 a unit, so the break-even quantity is 1,000 units and the revenue at that quantity is $20,000.',
      'The contribution margin as a share of the price is 60%. That percent is not a markup and it is not a profit margin after the fixed costs. Profit starts only after the 1,000th unit. Every unit after that contributes $12 toward profit, because the fixed costs are already covered.',
      'A payback-period page counts years until cash flows repay a project. An ROI page divides profit by cost. Neither one finds the unit count that covers fixed costs. This page is that unit count, for one product, one price, and one variable cost.'
    ],
    steps: [
      'Enter fixed costs for the period you have in mind. The sample is 12000.',
      'Enter the variable cost of one unit and the price of one unit. The sample is 8 and 20.',
      'Press Calculate. The headline is the unit count. Revenue and the contribution margin are underneath.',
      'If the price is not above the variable cost, the form stops. There is no finite quantity that covers the fixed costs.'
    ],
    howHeading: 'How units to break even are calculated',
    howItWorks: [
      'Contribution per unit is price minus variable cost. Units are fixed costs divided by that contribution. Revenue is the unit count times the price. On the sample, 12000 / 12 = 1000, and 1000 × 20 = 20000.',
      'A higher price or a lower variable cost reduces the unit count. Raising fixed costs raises it in proportion. The page does not split fixed costs across several products, and it does not add a tax to the price.'
    ],
    formula: 'Contribution = price − variable cost per unit\nUnits = fixed costs ÷ contribution\nRevenue = units × price\nContribution margin percent = contribution ÷ price × 100',
    formulaNotes: [
      'The unit count is exact. A factory that must make a whole unit should round up. This page does not round up, so a fractional unit stays visible.',
      'Variable cost is the cost that changes with each unit. Rent, a salary, and insurance belong in fixed costs if they do not change with the unit count you are solving.'
    ],
    examplesHeading: 'Worked break-even examples',
    samples: [
      { title: '$12,000 fixed, $8 variable, $20 price', overrides: {}, blurb: 'The sample. One thousand units cover the fixed costs. Revenue at that point is $20,000, which is not profit. Profit is zero at break-even.' },
      { title: 'A $24 price on the same costs', overrides: { price: 24 }, blurb: 'The contribution rises from $12 to $16. The unit count falls. Fixed costs did not change.' },
      { title: 'No variable cost', overrides: { variable: 0 }, blurb: 'Every dollar of the price contributes. Units are fixed costs divided by the price. A zero variable cost is allowed. A price that does not clear the variable cost is not.' }
    ],
    table: { heading: 'Break-even headlines', caption: 'Each headline is the unit count from this calculator.', headers: ['Case', 'Headline'] },
    limitsHeading: 'What this break-even count leaves out',
    limits: [
      'One product only. A second product with its own margin is not allocated a share of the fixed costs.',
      'The price is the amount you type. Sales tax, a discount, and a payment fee are not added unless you have already put them in the price or the variable cost.',
      'This is not a payback period. Payback divides a cost by an annual cash flow and returns years. It is not an ROI. ROI divides a profit by a cost and returns a percent.',
      'A price at or below the variable cost has no break-even quantity. The form rejects that case instead of printing a negative unit count.'
    ],
    disclaimer: 'This break-even figure is planning arithmetic for one product. It is not a forecast of sales and it is not accounting advice.',
    faqs: [
      { q: 'How many units break even when fixed costs are $12,000 and the margin is $12?', a: `1,000 units. Revenue at that count is $20,000. The headline on the sample is ${run('break-even-calculator').headline}. Profit is zero at that point because the fixed costs have just been covered.` },
      { q: 'What is the contribution margin on the break-even calculator?', a: 'Price minus variable cost per unit. On the sample that is $12, which is 60% of the $20 price. The percent is not the profit margin after fixed costs.' },
      { q: 'How is break-even different from a payback period or ROI?', a: 'Break-even returns a unit count and the revenue at that count. Payback returns years. ROI returns a percent of profit over cost. The three questions use different inputs.' },
      { q: 'Why does the break-even calculator reject a price below the variable cost?', a: 'Each unit would lose money, so selling more units cannot cover the fixed costs. Raise the price or lower the variable cost before the division works.' }
    ],
    relatedLinks: [
      { slug: 'payback-period-calculator', label: 'Payback period calculator', note: 'Years until cash flows repay a cost. Not a unit count.' },
      { slug: 'roi-calculator', label: 'ROI calculator', note: 'Profit divided by cost. A $10,000 cost that ends at $12,500 is 25.00%. That percent is not a contribution margin.' },
      { slug: 'markup-margin-calculator', label: 'Markup and margin calculator', note: 'A 50% markup on a $40 cost is a $60 price and a 33.33% margin. This break-even page uses the dollar margin per unit to cover fixed costs.' }
    ]
  }),
  'emergency-fund-calculator': page({
    slug: 'emergency-fund-calculator',
    title: 'Emergency Fund Calculator: Months of Essential Expenses | ClearCalc',
    h1: 'Emergency Fund Calculator',
    description: 'Emergency fund calculator from essential monthly expenses. $3,200 a month is $9,600 for three months and $19,200 for six. With $4,000 saved and $500 a month, a six-month target takes 30.40 months.',
    intro: [
      'This emergency fund calculator multiplies essential monthly expenses by a number of months, then divides the gap by the amount you can save. The sample expenses are $3,200. Three months is $9,600. Six months is $19,200. With $4,000 already saved, the six-month gap is $15,200, and $500 a month covers it in 30.40 months.',
      'Three months and six months are printed on every result as planning ranges. They are choices, not a statute and not a required cushion. A household that can replace income quickly may aim at the shorter range. A household with one income or irregular work may aim longer. The target months box is where you pick.',
      'The savings-goal page compounds a deposit toward a dollar target and can charge a rate of return. The household-budget page sorts income and spending. This page does not earn interest and it does not categorize a budget. It only sizes a cash reserve and the months of saving still left.'
    ],
    steps: [
      'Enter essential monthly expenses, not the full paycheck. The sample is 3200.',
      'Enter the target in months. The sample is 6. The result still shows the three-month and six-month dollar amounts.',
      'Enter what is already saved and what you can add each month. The sample is 4000 and 500.',
      'Press Calculate. The headline is the months of saving still required, or a note that the target is already saved.'
    ],
    howHeading: 'How the emergency-fund gap is counted',
    howItWorks: [
      'The target is expenses times the months you chose. The gap is that target minus what is already saved, and not below zero. Months of saving are the gap divided by the monthly amount. No interest is credited, so the month count is a straight division.',
      'If the savings already cover the target, the headline says so and still prints the three-month and six-month figures. If the gap is open and the monthly amount is zero, the form stops, because the gap would never close.'
    ],
    formula: 'Three-month reserve = essential expenses × 3\nSix-month reserve = essential expenses × 6\nTarget = essential expenses × months you chose\nGap = max(0, target − already saved)\nMonths of saving = gap ÷ monthly savings',
    formulaNotes: [
      'The month count is exact. 15200 / 500 = 30.4. A calendar will not land on a fraction of a month. Round up if you want the first month in which the target is fully saved.',
      'Essential expenses are the ones you would still pay if income stopped: housing, food, utilities, insurance, the minimums you must send. A restaurant budget does not belong in the figure unless you decide it does.'
    ],
    examplesHeading: 'Worked emergency-fund examples',
    samples: [
      { title: '$3,200 of expenses, six months, $500 saved each month', overrides: {}, blurb: 'The six-month target is $19,200. Four thousand dollars is already there. The gap is $15,200 and the saving time is 30.40 months. Three months of the same expenses is $9,600, which the current savings do not yet cover either.' },
      { title: 'A three-month target', overrides: { months: 3 }, blurb: 'The same expenses and the same $4,000 already saved, with the target switched to three months. The six-month dollar amount is still printed. It is not the target.' },
      { title: 'The six-month target is already saved', overrides: { saved: 20000 }, blurb: 'Twenty thousand dollars is more than $19,200. The headline says the target is already saved. The monthly savings box is not used to invent a negative month count.' }
    ],
    table: { heading: 'Emergency-fund headlines', caption: 'Three-month and six-month dollar amounts are also in the detail lines. They are planning ranges, not a legal rule.', headers: ['Case', 'Headline'] },
    limitsHeading: 'What this reserve leaves out',
    limits: [
      'No interest and no investment return. A savings-goal calculator is the page that compounds a monthly deposit.',
      'The expenses are whatever you type. This page does not build a household budget and it does not decide which bills are essential.',
      'Three months and six months are labels for the multiples. A lender, an employer, and no statute on this page requires either one.',
      'A zero monthly savings amount cannot close a remaining gap. Raise the monthly amount or lower the target.'
    ],
    disclaimer: 'This emergency-fund figure is a planning division. It is not advice about how large a cash reserve should be.',
    faqs: [
      { q: 'How long does $500 a month take to finish a six-month emergency fund on $3,200 of expenses?', a: `$19,200 is six months. With $4,000 saved, the gap is $15,200 and the headline is ${run('emergency-fund-calculator').headline}. Three months of the same expenses is $9,600.` },
      { q: 'Are three months and six months a required emergency fund?', a: 'No. Both amounts are shown so you can see the range. The target months box is the one the gap uses. Nothing on this page is a legal minimum.' },
      { q: 'How is this different from the savings-goal calculator?', a: 'The savings-goal page can apply a rate of return to a deposit that is aiming at a dollar target. This page divides a gap by a monthly amount and does not credit interest.' },
      { q: 'What if the emergency fund is already saved?', a: 'The headline says the target is already saved. It still prints the three-month and six-month dollar amounts for the expenses you typed.' }
    ],
    relatedLinks: [
      { slug: 'savings-goal-calculator', label: 'Savings goal calculator', note: 'A $25,000 target with $5,000 already saved, at 5% for 5 years, needs a $273.26 monthly deposit. That page compounds. This one does not.' },
      { slug: 'household-budget-calculator', label: 'Household budget calculator', note: 'Subtracts spending categories from monthly income. It does not size a cash reserve.' },
      { slug: '50-30-20-budget-calculator', label: '50/30/20 budget calculator', note: 'Splits take-home pay into needs, wants, and saving. The emergency-fund page starts after you already know the essential monthly number.' }
    ]
  }),
  'dividend-calculator': page({
    slug: 'dividend-calculator',
    title: 'Dividend Calculator: Cash Yield from Shares and Price | ClearCalc',
    h1: 'Dividend Calculator',
    description: 'Dividend calculator for cash yield and expected cash dividends. 100 shares at $40 with a $1.60 dividend pay $160.00 a year, a 4.00% yield. Not a tax estimate and not a reinvested total return.',
    intro: [
      'This dividend calculator turns a share count, a price, and either an annual dividend per share or a yield into the cash you would receive in one year and the yield that cash represents. One hundred shares at $40 with a $1.60 dividend are worth $4,000 at that price and pay $160.00 a year. The yield is 4.00%.',
      'The second mode starts from a yield you type. A 4% yield on a $40 price is the same $1.60 per share. The page does not look up a declared dividend, a payment date, or a trailing twelve-month figure. The number you type is the number it uses.',
      'Nothing here is tax. A qualified dividend, an ordinary dividend, and a return of capital are taxed differently, and this form does not choose among them. It also does not reinvest the cash, so it is not a DRIP and it is not the compound path on the investment or CAGR pages.'
    ],
    steps: [
      'Choose dividend per share or a yield percent. The sample uses the dividend.',
      'Enter the number of shares and the price per share. The sample is 100 shares at 40.',
      'Enter the annual dividend per share, or the yield if that mode is selected. The sample dividend is 1.60. The sample yield is 4.',
      'Press Calculate. The headline is the annual cash. The yield and the value of the shares are underneath.'
    ],
    howHeading: 'How cash dividends and yield are calculated',
    howItWorks: [
      'Annual cash is shares times the dividend per share. Yield is that dividend divided by the price. Value is shares times the price. On the sample, 100 × 1.60 = 160 and 1.60 / 40 = 0.04.',
      'If you type a yield instead, the dividend per share is the price times that yield, and the cash follows. A yield above 100% is rejected. A dividend of zero is allowed and produces a zero yield.'
    ],
    formula: 'From a dividend: cash = shares × dividend per share\nYield = dividend per share ÷ price × 100\nFrom a yield: dividend per share = price × yield ÷ 100\nValue = shares × price',
    formulaNotes: [
      'The dividend is an annual amount per share. A quarterly dividend of $0.40 is $1.60 for the year. Type the annual figure, or the cash will be one quarter.',
      'The price is the price you type today. A yield that used a different price, such as the price on the ex-dividend date, will not match.'
    ],
    examplesHeading: 'Worked dividend examples',
    samples: [
      { title: '100 shares, $40, $1.60 dividend', overrides: {}, blurb: 'Cash is $160.00 and the yield is 4.00%. The shares are worth $4,000 at the price you typed. That value is not a gain.' },
      { title: 'The same shares from a 4% yield', overrides: { mode: 2 }, blurb: 'The yield box is used and the dividend box is ignored. A 4% yield on $40 is $1.60 a share, so the cash matches the first example.' },
      { title: '250 shares at $20 with a $0.80 dividend', overrides: { shares: 250, price: 20, dividend: 0.8 }, blurb: 'A different holding. The yield is still 4.00% because 0.80 / 20 = 0.04. The cash is higher because there are more shares.' }
    ],
    table: { heading: 'Dividend headlines', caption: 'The headline is one year of cash dividends if the per-share amount is paid and the share count does not change.', headers: ['Case', 'Headline'] },
    limitsHeading: 'What this dividend cash figure leaves out',
    limits: [
      'No tax. Qualified and ordinary dividends are not separated, and a withholding tax is not subtracted.',
      'No reinvestment. Dividends are not used to buy more shares, and the price is not grown. The investment calculator and the CAGR calculator are the growth pages.',
      'No declared-dividend lookup. A company can cut, skip, or raise the amount. The figure you type is not a forecast.',
      'Special dividends, return of capital, and a preferred-stock schedule are not modeled. One annual amount per share is the whole input.'
    ],
    disclaimer: 'This dividend figure is cash arithmetic from numbers you type. It is not tax advice, not a quote, and not a total-return backtest.',
    faqs: [
      { q: 'How much cash do 100 shares pay at a $1.60 dividend?', a: `$160.00 a year. At a $40 price the yield is 4.00% and the holding is worth $4,000. The headline is ${run('dividend-calculator').headline}.` },
      { q: 'Does the dividend calculator reinvest the cash or compute tax?', a: 'No. The cash is the dividend times the shares. It is not added back into the share count, and no tax rate is applied.' },
      { q: 'How is this different from the investment calculator and the CAGR calculator?', a: 'Those pages grow a balance over time. This page reports one year of cash from a dividend you type. A yield here is cash divided by price, not a compound annual growth rate.' },
      { q: 'What if I know the yield but not the dividend per share?', a: 'Switch to the yield mode. A 4% yield on a $40 price is $1.60 a share. The dividend box is ignored in that mode.' }
    ],
    relatedLinks: [
      { slug: 'investment-calculator', label: 'Investment calculator', note: '$10,000 plus $250 a month at 7% is a balance projection. It does not start from a dividend per share.' },
      { slug: 'cagr-calculator', label: 'CAGR calculator', note: 'A compound annual growth rate between two values. A cash yield is not that rate.' },
      { slug: 'uk-dividend-tax-calculator', label: 'UK dividend tax calculator', note: 'UK dividend tax after the dividend allowance. This page does not compute tax in any country.' }
    ]
  }),
  'cap-rate-calculator': page({
    slug: 'cap-rate-calculator',
    title: 'Cap Rate Calculator from NOI and Value | ClearCalc',
    h1: 'Cap Rate Calculator',
    description: 'Cap rate calculator. Net operating income of $24,000 on a $300,000 value is an 8.00% cap rate. The same NOI at a 6% target implies a $400,000 value. NOI is before debt service.',
    intro: [
      'This cap rate calculator does two jobs. The first divides net operating income by the current value. Income of $24,000 and a value of $300,000 is an 8.00% cap rate. The second divides the same income by a target cap rate. At a 6% target the implied value is $400,000.',
      'Net operating income is the annual rent and other property income you have left after operating expenses, and before the mortgage. Debt service, income tax, and depreciation do not belong in the figure. This page cannot see whether you left them in. If the mortgage payment is still inside the number you type, the cap rate is not a cap rate.',
      'The rental-property calculator also shows a cap rate, and then it keeps going into cash flow after the loan and a cash-on-cash return. This page stops at the cap rate or the value the target rate implies. It does not price a mortgage.'
    ],
    steps: [
      'Choose cap rate or implied value. The sample asks for the cap rate.',
      'Enter annual net operating income. The sample is 24000.',
      'Enter the current value for a cap rate, or the target cap rate for a value. The sample value is 300000. The sample target is 6.',
      'Press Calculate. A higher target cap rate produces a lower value for the same income.'
    ],
    howHeading: 'How cap rate and implied value are calculated',
    howItWorks: [
      'Cap rate is NOI divided by value. Implied value is NOI divided by the target rate. On $24,000, dividing by 0.08 returns $300,000 and dividing by 0.06 returns $400,000. The rate and the value move in opposite directions.',
      'The rental-property page builds NOI from rent, vacancy, tax, insurance, maintenance, management, and HOA, then subtracts a mortgage payment for cash flow. This page starts after NOI is already a single number, and it never subtracts a loan.'
    ],
    formula: 'Cap rate = net operating income ÷ current value × 100\nImplied value = net operating income ÷ (target cap rate ÷ 100)',
    formulaNotes: [
      'Both results use the NOI you type. A reserve for replacements that you forgot to subtract will overstate the income and the value.',
      'The target rate is a rate you choose. It is not a market survey and it is not an appraisal cap rate.'
    ],
    examplesHeading: 'Worked cap-rate examples',
    samples: [
      { title: '$24,000 of NOI on a $300,000 value', overrides: {}, blurb: 'The cap rate is 8.00%. The mortgage, if there is one, was not subtracted. Cash flow after debt would be a different ratio.' },
      { title: 'The same NOI at a 6% target', overrides: { mode: 2 }, blurb: 'Implied value is NOI divided by 0.06. The current-value box is not used in this mode.' },
      { title: '$18,000 of NOI on a $300,000 value', overrides: { noi: 18000 }, blurb: 'A lower income on the same value is a lower cap rate. The page does not explain why the income fell.' }
    ],
    table: { heading: 'Cap-rate headlines', caption: 'The first and third rows are cap rates. The middle row is an implied value.', headers: ['Case', 'Headline'] },
    limitsHeading: 'What this cap rate leaves out',
    limits: [
      'NOI is before debt service. A mortgage payment, a cash-out refinance, and income tax do not belong in the numerator. Depreciation is not a cash operating expense and is not a reason to reduce NOI on this page.',
      'Vacancy, repairs, insurance, tax, and management are already supposed to be out of the NOI you type. This form does not itemize them. The rental-property calculator does.',
      'The result is not an appraisal. A target cap rate is your input, not a published market rate.',
      'A value of zero is rejected. A target rate of zero is rejected, because the implied value would be undefined.'
    ],
    disclaimer: 'This cap rate is arithmetic on the NOI and value you type. It is not an appraisal and it is not a statement of market value.',
    faqs: [
      { q: 'What cap rate is $24,000 of NOI on a $300,000 property?', a: `8.00%. The headline is ${run('cap-rate-calculator').headline}. The same income at a 6% target implies a $400,000 value.` },
      { q: 'Should the mortgage payment be inside net operating income?', a: 'No. Cap rate is income after operating expenses and before debt service. A payment that is still in the number will understate the cap rate and is not NOI.' },
      { q: 'How is this different from the rental-property calculator?', a: 'That page builds income from rent and expenses, then subtracts a mortgage for cash flow and cash-on-cash return. This page starts from NOI and stops at the cap rate or the implied value.' },
      { q: 'Why does a higher target cap rate lower the value?', a: 'Value is income divided by the rate. The same dollars, divided by a larger rate, are a smaller price. That is the formula, not a forecast that the property will sell for less.' }
    ],
    relatedLinks: [
      { slug: 'rental-property-calculator', label: 'Rental property calculator', note: 'Builds NOI from rent and expenses, then cash flow after the mortgage. This page starts from NOI.' },
      { slug: 'mortgage-calculator', label: 'Mortgage calculator', note: 'A $300,000 loan at 6.5% for 30 years is $1,896.20 a month. That payment is not part of a cap rate.' },
      { slug: 'house-affordability-calculator', label: 'House affordability calculator', note: 'A price from income and debts. It does not divide NOI by a cap rate.' }
    ]
  }),
  'pmi-calculator': page({
    slug: 'pmi-calculator',
    title: 'PMI Calculator from a Rate You Type | ClearCalc',
    h1: 'PMI Calculator',
    description: 'PMI calculator for conventional mortgage insurance. A $270,000 loan on a $300,000 value is 90.00% LTV. At an example annual rate of 0.55% the premium is $123.75 a month. The rate is not a lender table.',
    intro: [
      'This PMI calculator multiplies the loan by an annual mortgage-insurance rate you type, then divides by 12. A $270,000 loan on a $300,000 value is a 90.00% loan-to-value. At 0.55% a year the premium is $1,485.00, or $123.75 a month. The 0.55% figure is an example sitting in the box. It is not a Fannie Mae grid and it is not a quote.',
      'Loan-to-value is the loan divided by the value. A common cancellation idea for borrower-paid conventional PMI is that a borrower can ask to drop it once the loan is about 80% of the original value, if the loan and the insurer allow the request. This page explains that idea. It does not decide the request, and it does not turn the premium off when the ratio crosses 80%. The dollars always use the rate you typed.',
      'The mortgage calculator has a box for a monthly PMI dollar amount, next to tax and insurance. This page is one way to fill that box from a rate. It is a different form. It does not amortize the loan.'
    ],
    steps: [
      'Enter the loan and the property value. The sample is 270000 and 300000.',
      'Enter the annual PMI rate as a percent. Leave 0.55 only if you want the example. Replace it with the rate your lender or insurer actually quoted.',
      'Press Calculate. The headline is the monthly premium. LTV is underneath.',
      'A rate above 5% is rejected. This page will not invent a premium table to justify a higher number.'
    ],
    howHeading: 'How a PMI premium is estimated from a rate',
    howItWorks: [
      'Annual premium is the loan times the rate. Monthly premium is that amount divided by 12. LTV is the loan divided by the value. On the sample, 270000 × 0.0055 = 1485, and 1485 / 12 = 123.75. LTV is 90%.',
      'If you change the rate to 0, the premium is zero and the LTV is still reported. If the LTV is 80% or lower, the detail line says conventional PMI is often dropped around there. The premium line still follows the rate, so you can see what a quoted rate would cost even when the ratio is already under 80%.'
    ],
    formula: 'Loan-to-value = loan ÷ value × 100\nAnnual premium = loan × annual rate ÷ 100\nMonthly premium = annual premium ÷ 12',
    formulaNotes: [
      'The rate is an input. No credit score, no coverage percent, and no loan term is used to look up a premium. Those are why two lenders quote different rates on the same LTV.',
      'The monthly figure is the annual premium divided by 12. It is not a daily rate and it is not added to the mortgage payment unless you type it into the mortgage calculator yourself.'
    ],
    examplesHeading: 'Worked PMI examples',
    samples: [
      { title: '$270,000 on $300,000 at the 0.55% example', overrides: {}, blurb: 'LTV is 90%. The 0.55% rate is the example in the box. Replace it before treating the premium as a quote.' },
      { title: 'The same loan at 0.30%', overrides: { rate: 0.3 }, blurb: 'A lower rate you type, on the same LTV. The page does not explain which borrower would be offered 0.30%.' },
      { title: 'An 80% loan-to-value', overrides: { loan: 240000, value: 300000 }, blurb: 'The loan is exactly 80% of the value. The detail line names the usual cancellation idea. The premium still uses the rate in the box.' }
    ],
    table: { heading: 'PMI headlines', caption: 'Each monthly premium uses the rate in that row. None of the rates is a published lender grid.', headers: ['Case', 'Headline'] },
    limitsHeading: 'What this PMI estimate leaves out',
    limits: [
      'There is no premium table. Credit score, loan term, coverage, and lender overlays are why a real quote can differ from 0.55%.',
      'Crossing 80% LTV does not automatically set the premium to zero. Cancellation is a request under the loan and the insurer’s rules, described here only at that high level.',
      'FHA mortgage insurance and VA funding fees are different charges. They are on the FHA and VA pages, not here.',
      'The mortgage payment itself is not computed. Type the monthly premium into the mortgage calculator if you want it inside the housing payment.'
    ],
    disclaimer: 'This PMI figure uses a rate you type. It is not a lender quote, not an insurer quote, and not a cancellation decision.',
    faqs: [
      { q: 'How much is PMI on a $270,000 loan at an example rate of 0.55%?', a: `$123.75 a month, which is $1,485.00 a year. The loan-to-value on a $300,000 value is 90.00%. The headline is ${run('pmi-calculator').headline}. The 0.55% rate is an example, not a table.` },
      { q: 'Does this PMI calculator turn the premium off at 80% LTV?', a: 'No. It reports the loan-to-value and says conventional PMI is often cancelled around 80%. The dollars still use the rate you typed.' },
      { q: 'Where do the PMI dollars go on the mortgage calculator?', a: 'The mortgage page has a monthly PMI box. This page estimates that monthly dollar amount from a rate. It does not amortize principal and interest.' },
      { q: 'Why will the form not accept a PMI rate above 5%?', a: 'A rate that high is outside the example this page is willing to multiply without a source. Type the rate you were quoted if it is 5% or below. The page will not build a premium grid to fill the gap.' }
    ],
    relatedLinks: [
      { slug: 'mortgage-calculator', label: 'Mortgage calculator', note: 'Principal and interest, plus tax, insurance, and a monthly PMI amount you type. A $300,000 loan at 6.5% for 30 years is $1,896.20 before those costs.' },
      { slug: 'house-affordability-calculator', label: 'House affordability calculator', note: 'A price from income. It does not compute PMI. A down payment under 20% often means a premium this page can estimate only after you supply a rate.' },
      { slug: 'down-payment-calculator', label: 'Down payment calculator', note: '20% of $400,000 is $80,000 down and a $320,000 loan. That loan is 80% LTV before any PMI rate is applied.' }
    ]
  }),
  'fifteen-vs-thirty-year-mortgage-calculator': page({
    slug: 'fifteen-vs-thirty-year-mortgage-calculator',
    title: '15-Year vs 30-Year Mortgage Calculator | ClearCalc',
    h1: '15-Year vs 30-Year Mortgage Calculator',
    description: 'Compare a 15-year and a 30-year mortgage on the same principal, with a rate for each. $300,000 at 6% for 15 years and 6.5% for 30 years shows both payments, both interest totals, and principal paid down after 5 years.',
    intro: [
      'This calculator compares one principal on a 15-year term and a 30-year term. Each term has its own rate. The sample is $300,000, 6% for 15 years and 6.5% for 30 years. The headline shows both monthly payments. The lines show total interest on each loan and the principal paid down after the number of years you choose. The sample uses 5 years.',
      'Equity on this page means principal paid down. It is the original principal minus the remaining balance. It is not the home’s market value, and it is not value minus the loan. Price appreciation is not estimated.',
      'The mortgage calculator is one loan, and it can add tax, insurance, and a PMI dollar amount. The mortgage-payoff calculator adds extra payments to a single existing loan. This page is the side-by-side term comparison, with no extra payments and no tax or insurance.'
    ],
    steps: [
      'Enter the principal. The sample is 300000. It is the amount borrowed, not the price.',
      'Enter the 15-year rate and the 30-year rate. They may differ. The sample is 6 and 6.5.',
      'Enter how many years of principal paydown to show, from 1 to 30. The sample is 5.',
      'Press Calculate. If the year count is past 15, the 15-year balance is zero and its principal paid down is the whole loan.'
    ],
    howHeading: 'How the two mortgage terms are compared',
    howItWorks: [
      'Each payment is the standard fully amortizing payment: principal times the monthly rate times (1 + rate) to the number of months, divided by that same power minus one. A zero rate divides principal by the number of months. Fifteen years is 180 months. Thirty years is 360.',
      'The balance after N years uses the same closed form. Principal paid down is principal minus that balance. Total interest is the payment times the full term, minus principal. The interest comparison assumes both loans run to the end with no extra payments. A 15-year loan that you check at year 20 is already paid off.'
    ],
    formula: 'Monthly rate r = annual percent ÷ 100 ÷ 12\nPayment = principal × r × (1 + r)^n ÷ ((1 + r)^n − 1)\nn = 180 or 360\nBalance after k months = principal × (1 + r)^k − payment × ((1 + r)^k − 1) ÷ r\nPrincipal paid down = principal − balance\nTotal interest = payment × n − principal',
    formulaNotes: [
      'Interest uses the unrounded payment. The headline rounds each payment to the cent, so payment times months can differ by a dollar or two from the interest line.',
      'On a $300,000 loan at 6.5% for 30 years the payment is $1,896.20, the same figure the mortgage page returns for that one loan. The 15-year payment at 6.5% on that page’s comparison is $2,613.32. This form lets the 15-year rate be a different number.'
    ],
    examplesHeading: 'Worked 15-year and 30-year examples',
    samples: [
      { title: '$300,000 at 6% and 6.5%, after 5 years', overrides: {}, blurb: 'The two rates differ. Both payments, both lifetime interest totals, and the principal paid down after five years are in the lines.' },
      { title: 'Both terms at 6.5%', overrides: { rate15: 6.5 }, blurb: 'The 30-year payment matches the mortgage page’s $1,896.20. The 15-year payment at the same rate is the mortgage page’s $2,613.32. The only difference left is the term.' },
      { title: 'The same sample after 15 years', overrides: { after: 15 }, blurb: 'The 15-year loan is finished, so its balance is zero and the principal paid down is the whole $300,000. The 30-year loan still has a balance.' }
    ],
    table: { heading: '15-year and 30-year headlines', caption: 'The headline is the pair of monthly payments. Interest and principal paid down are in the detail lines.', headers: ['Case', 'Headline'] },
    limitsHeading: 'What this term comparison leaves out',
    limits: [
      'No property tax, insurance, or PMI. The mortgage page can add those dollars to one payment. This page would double-count them if it added them to both terms without a separate input.',
      'No extra payments. The mortgage-payoff page is the one that shortens a single loan with an additional principal amount.',
      'Equity ignores the house price. A balance that falls is not a rise in market value.',
      'Both rates stay fixed. An adjustable rate, a balloon, and an interest-only period are outside the two formulas.'
    ],
    disclaimer: 'This comparison is fixed-rate amortization of one principal on two terms. It is not a Loan Estimate and it is not a refinance offer.',
    faqs: [
      { q: 'What are the payments on $300,000 at 6% for 15 years and 6.5% for 30 years?', a: `The headline is ${run('fifteen-vs-thirty-year-mortgage-calculator').headline}. Total interest and the principal paid down after 5 years are in the lines under it.` },
      { q: 'Why does the 30-year payment match the mortgage calculator at 6.5%?', a: 'Same formula. $300,000 at 6.5% for 360 months is $1,896.20 a month on both pages. This page then places a 15-year loan beside it, and the 15-year rate does not have to be 6.5%.' },
      { q: 'Is the equity figure the home value minus the loan?', a: 'No. It is principal paid down: the original principal minus the remaining balance. Market value is not an input.' },
      { q: 'How is this different from the mortgage payoff calculator?', a: 'The payoff page adds extra payments to one loan and finds the new payoff date. This page compares two full terms on the same principal and does not accept an extra payment.' }
    ],
    relatedLinks: [
      { slug: 'mortgage-calculator', label: 'Mortgage calculator', note: '$300,000 at 6.5% for 30 years is $1,896.20 a month before tax, insurance, and PMI. One loan, not a 15-year comparison.' },
      { slug: 'mortgage-payoff-calculator', label: 'Mortgage payoff calculator', note: 'Extra principal on one existing loan. Not a side-by-side 15-year and 30-year quote.' },
      { slug: 'house-affordability-calculator', label: 'House affordability calculator', note: 'On $120,000 of income the 28/36 sample is a $431,795.43 home. That page solves a price. This one compares two terms.' }
    ]
  }),
  'salary-to-hourly-calculator': page({
    slug: 'salary-to-hourly-calculator',
    title: 'Salary to Hourly Calculator | ClearCalc',
    h1: 'Salary to Hourly Calculator',
    description: 'Salary to hourly calculator. $60,000 a year at 40 hours and 52 paid weeks is $28.85 an hour. The hourly-to-salary page multiplies the other way. Unpaid weeks belong in the week count.',
    intro: [
      'This salary to hourly calculator divides an annual salary by the hours you are paid for. Hours are hours per week times paid weeks per year. A $60,000 salary at 40 hours and 52 weeks is 2,080 hours, and the rate is $28.85 an hour. Weekly pay is that rate times 40. Monthly pay is the salary divided by 12, which is not exactly four weeks.',
      'The hourly-to-salary page starts from the rate and multiplies. This page starts from the salary and divides. They are inverses. A rate of $28 an hour, 40 hours, and 52 weeks is $58,240 a year on that other page, not $60,000, because $60,000 does not divide into a whole-cent rate at 2,080 hours. $28.85 times 2,080 is $60,008, two dollars over the salary, because the headline rounded the hourly rate.',
      'Unpaid leave is a smaller week count if the salary is the amount you are actually paid. Do not also cut the hourly rate. Overtime hours do not belong in the ordinary week count. The overtime page prices those hours separately.'
    ],
    steps: [
      'Enter the annual salary, the amount paid for the year. The sample is 60000.',
      'Enter hours per week and paid weeks. The sample is 40 and 52.',
      'Press Calculate. The headline is the hourly rate. Weekly pay and the salary divided by 12 are underneath.',
      'Use fewer than 52 weeks when some weeks are unpaid. The form rejects a week count above 52 and an hour count above 168.'
    ],
    howHeading: 'How a salary becomes an hourly rate',
    howItWorks: [
      'Yearly hours are hours per week times paid weeks. The hourly rate is the salary divided by those hours. On the sample, 40 × 52 = 2080 and 60000 / 2080 = 28.84615, which displays as $28.85.',
      'The hourly-to-salary calculator does rate × hours × weeks. Feeding this page’s rounded headline back into that page will not always return the original salary, because the cent rounding happens first. Use the unrounded division if you need the salary to match to the cent.'
    ],
    formula: 'Paid hours = hours per week × paid weeks per year\nHourly rate = annual salary ÷ paid hours\nWeekly pay = hourly rate × hours per week\nMonthly pay = annual salary ÷ 12',
    formulaNotes: [
      'Monthly pay is the salary split into 12, not the weekly pay times 52 divided by 12. Those two can differ by cents once the hourly rate has been rounded.',
      'A 37.5-hour week or a 48-week year is allowed. The sample’s 2,080 hours is only the 40-by-52 case.'
    ],
    examplesHeading: 'Worked salary-to-hourly examples',
    samples: [
      { title: '$60,000, 40 hours, 52 weeks', overrides: {}, blurb: '2,080 paid hours. The headline rounds $28.84615 to $28.85. Weekly pay uses the unrounded rate.' },
      { title: 'The same salary over 50 paid weeks', overrides: { weeks: 50 }, blurb: 'Unpaid time is a lower week count. The hourly rate rises because the same salary is spread over fewer hours.' },
      { title: '$58,240, which is $28 an hour the other way', overrides: { salary: 58240 }, blurb: 'The hourly-to-salary page turns $28, 40 hours, and 52 weeks into $58,240. This page should turn that salary back into $28.00 an hour.' }
    ],
    table: { heading: 'Salary-to-hourly headlines', caption: 'Each headline is the hourly rate. The $58,240 row is the inverse of a $28 hourly salary.', headers: ['Case', 'Headline'] },
    limitsHeading: 'What this hourly rate leaves out',
    limits: [
      'No overtime premium. Hours above a threshold belong on the overtime page, not inside this average.',
      'No tax. The salary is the amount you type, gross or net, whichever you meant. The page does not withhold.',
      'Rounding to the cent means the headline times the yearly hours can miss the salary by a dollar or two.',
      'A week has at most 168 hours, and a year of paid weeks has at most 52. The form rejects numbers past those limits.'
    ],
    disclaimer: 'This hourly rate is the salary divided by the paid hours you enter. It is not a payroll rate and it is not a legal classification of exempt status.',
    faqs: [
      { q: 'What is the hourly rate for a $60,000 salary at 40 hours and 52 weeks?', a: `$28.85 an hour. That is $60,000 divided by 2,080 hours, rounded to the cent. The headline is ${run('salary-to-hourly-calculator').headline}.` },
      { q: 'How is salary-to-hourly different from hourly-to-salary?', a: 'This page divides. The other page multiplies. $28 an hour at 40 hours and 52 weeks is $58,240 there. Putting $58,240 back into this page returns $28.00 an hour.' },
      { q: 'Where do unpaid weeks go?', a: 'Lower the paid-weeks box. A $60,000 salary over 50 weeks is a higher hourly rate than the same salary over 52 weeks, because the hours shrank.' },
      { q: 'Does this page include overtime or tax?', a: 'No. Overtime is the overtime-pay calculator. Tax is a paycheck calculator. This page is only the salary divided by paid hours.' }
    ],
    relatedLinks: [
      { slug: 'hourly-to-salary-calculator', label: 'Hourly to salary calculator', note: '$28 an hour, 40 hours, and 52 weeks is $58,240 a year. This page divides a salary back to an hourly rate.' },
      { slug: 'pay-raise-calculator', label: 'Pay raise calculator', note: '$50,000 raised by 8% is $54,000. Put the new salary into this page if you want the new hourly rate.' },
      { slug: 'overtime-pay-calculator', label: 'Weekly overtime pay calculator', note: 'Hours over a threshold at a multiple of the hourly rate. Not an annual salary divided by 2,080.' },
      { slug: 'freelance-rate-calculator', label: 'Freelance rate calculator', note: 'A billable rate from a target, overhead, and a buffer. A salary divided by 2,080 is not that rate.' }
    ]
  }),
  'freelance-rate-calculator': page({
    slug: 'freelance-rate-calculator',
    title: 'Freelance Rate Calculator: Billable Hour and Day Rate | ClearCalc',
    h1: 'Freelance Rate Calculator',
    description: 'Freelance rate calculator. A $80,000 target plus $12,000 of overhead, 1,200 billable hours, and a 25% buffer is $102.22 an hour. The buffer is a percent you type, not a tax bracket.',
    intro: [
      'This freelance rate calculator finds the billable hourly rate that covers a target income, overhead, and a share of the rate you want to set aside. The sample target is $80,000, overhead is $12,000, billable hours are 1,200, and the buffer is 25%. Before the buffer the rate is $76.67. After it, the rate is $102.22 an hour. An 8-hour day at that rate is the day rate in the lines.',
      'The buffer is not a tax calculation. It grosses the rate up so that the percent you typed can be set aside. Self-employment tax, income tax, and a quarterly estimate are not computed. If you want 25% of the billable rate available for those bills, type 25. If you want none, type 0.',
      'Non-billable hours should already be out of the hour count. A year with 1,500 working hours and 1,200 billable hours uses 1,200 here. Do not also cut the rate for the 300. The salary-to-hourly page divides a salary by paid hours. It does not add overhead or a buffer.'
    ],
    steps: [
      'Enter the income you want left after the buffer, and the overhead for the year. The sample is 80000 and 12000.',
      'Enter billable hours for the year. The sample is 1200. Leave non-billable hours out.',
      'Enter the buffer as a percent of the billable rate, and the hours in a day you bill. The sample is 25 and 8.',
      'Press Calculate. A buffer of 80% or more is rejected, because the gross-up would be extreme or undefined at 100%.'
    ],
    howHeading: 'How the billable rate is grossed up',
    howItWorks: [
      'The amount to cover is the target plus overhead. Divide by billable hours to get the rate before the buffer. Divide that rate by one minus the buffer percent to get the billable rate. On the sample, 92000 / 1200 = 76.6667, and 76.6667 / 0.75 = 102.2222.',
      'The day rate is the billable hourly rate times the hours in a billed day. It is not the target divided by the number of working days. A day you do not bill is already reflected by being absent from the hour count.'
    ],
    formula: 'Rate before the buffer = (target income + overhead) ÷ billable hours\nBillable hourly rate = rate before the buffer ÷ (1 − buffer ÷ 100)\nDay rate = billable hourly rate × hours in a billed day',
    formulaNotes: [
      'The buffer is a share of the rate the client pays, not a share of the target. A 25% buffer means the target-plus-overhead is 75% of the rate.',
      'Overhead is a dollar amount you type: software, insurance, equipment, the costs you want the rate to cover. It is not looked up.'
    ],
    examplesHeading: 'Worked freelance-rate examples',
    samples: [
      { title: '$80,000, $12,000 overhead, 1,200 hours, 25% buffer', overrides: {}, blurb: 'The rate before the buffer is about $76.67. The billable rate grosses that up by dividing by 0.75. The day rate uses 8 hours.' },
      { title: 'The same practice with no buffer', overrides: { buffer: 0 }, blurb: 'The billable rate equals the rate before the buffer. Use this when the target is already the amount you need to bill, with nothing set aside on top.' },
      { title: '1,000 billable hours', overrides: { hours: 1000 }, blurb: 'Fewer billable hours raise the rate. The target and the overhead did not change. The missing hours are not billed at a discount. They are simply not in the denominator.' }
    ],
    table: { heading: 'Freelance-rate headlines', caption: 'The headline is the billable hourly rate after the buffer you typed.', headers: ['Case', 'Headline'] },
    limitsHeading: 'What this billable rate leaves out',
    limits: [
      'The buffer is not income tax and it is not self-employment tax. A paycheck calculator and a federal tax calculator answer those questions for wages. This page does not.',
      'Non-billable time is excluded by the hour count you type. The form cannot see a calendar.',
      'A deposit, a late fee, and a materials markup are not added. Overhead is only the dollar amount in that box.',
      'The rate is not a market quote. It is the rate that covers the dollars and hours you entered.'
    ],
    disclaimer: 'This freelance rate is a gross-up of a target, overhead, and a buffer you type. It is not a tax calculation and it is not a pricing survey.',
    faqs: [
      { q: 'What billable rate covers $80,000 plus $12,000 of overhead at 1,200 hours and a 25% buffer?', a: `The headline is ${run('freelance-rate-calculator').headline}. Before the buffer the rate is about $76.67. The 25% is a share of the rate, so the divisor is 0.75.` },
      { q: 'Is the freelance buffer a self-employment tax calculation?', a: 'No. It is the percent of the billable rate you said you want available to set aside. The page does not compute Social Security tax, Medicare tax, or an income-tax bracket.' },
      { q: 'How should non-billable hours be entered?', a: 'Leave them out of the billable-hours box. Do not also reduce the rate. A year with 1,200 billable hours uses 1,200, even if you worked more hours than that.' },
      { q: 'How is this different from dividing a salary by 2,080?', a: 'The salary-to-hourly page does that division and stops. This page adds overhead and grosses up by a buffer, and the hour count is the billable hours you type rather than 40 times 52.' }
    ],
    relatedLinks: [
      { slug: 'salary-to-hourly-calculator', label: 'Salary to hourly calculator', note: '$60,000 at 40 hours and 52 weeks is $28.85. That division has no overhead and no buffer.' },
      { slug: 'hourly-to-salary-calculator', label: 'Hourly to salary calculator', note: 'Multiplies an hourly rate by hours and weeks. A freelance day rate is not that salary.' },
      { slug: 'pay-raise-calculator', label: 'Pay raise calculator', note: 'An 8% raise on $50,000 is $54,000. A freelance rate is built from a target and overhead, not from a percent raise.' }
    ]
  }),
  'uk-inheritance-tax-calculator': page({
    slug: 'uk-inheritance-tax-calculator',
    title: 'UK Inheritance Tax Calculator 2026/27 | ClearCalc',
    h1: 'UK Inheritance Tax Calculator',
    description: 'UK Inheritance Tax calculator for a death on or after 6 April 2026. The nil-rate band is £325,000. A £600,000 estate with a £300,000 home left to direct descendants pays £40,000.00 when the residence nil-rate band is claimed.',
    intro: [
      'This UK Inheritance Tax calculator applies the nil-rate band of £325,000 and, if you claim it, the residence nil-rate band of £175,000. HMRC’s threshold table keeps both bands at those amounts from 6 April 2020 through 5 April 2030, and the residence band still tapers from £2 million. A death on or after 6 April 2026 uses those same figures. Tax above the bands that apply is 40%.',
      'The residence nil-rate band is capped at the value of the home you say passes to direct descendants, and it is reduced by £1 for every £2 the estate exceeds £2 million. It is gone once that reduction reaches £175,000, which is an estate of £2,350,000. If you do not claim the band, only the £325,000 nil-rate band is used.',
      'A transfer to a spouse or civil partner can be exempt. An unused nil-rate band can transfer to a survivor. The 36% rate can apply when 10% or more of the estate is left to charity. Business property relief and agricultural property relief can reduce the value. None of those is applied automatically. Take them off the estate value before you type it, or the tax will be too high. This is not the US federal estate tax, which uses a different exclusion.'
    ],
    steps: [
      'Enter the estate value after debts and after any relief you have already subtracted. The sample is 600000.',
      'Enter the home value left to direct descendants, or 0 if none. The sample is 300000. It cannot exceed the estate.',
      'Claim the residence nil-rate band or leave it off. The sample claims it.',
      'Press Calculate. The headline is Inheritance Tax at 40% of the value above the bands that were used.'
    ],
    howHeading: 'How the 2026/27 nil-rate bands are applied',
    howItWorks: [
      'The nil-rate band is £325,000 on every result. The residence band starts at £175,000 and is tapered only when the estate is over £2 million. The amount used is the smaller of the band that remains and the home value, and only when you claim it. Tax is 40% of the estate minus those bands.',
      'On a £600,000 estate with a £300,000 home left to descendants, both bands fit. The taxable slice is £100,000 and the tax is £40,000. On an estate of £500,000 with a £250,000 home, the bands cover the estate and the tax is zero. A £2,200,000 estate tapers the residence band by £100,000 before the home cap is applied.'
    ],
    formula: 'Nil-rate band = £325,000\nResidence band before the home cap = max(0, £175,000 − max(0, estate − £2,000,000) ÷ 2)\nResidence band used = the smaller of that band and the home value, or £0 if you do not claim it\nTax = 40% × max(0, estate − £325,000 − residence band used)',
    formulaNotes: [
      'HMRC’s published threshold table lists the nil-rate band at £325,000 from 6 April 2009 to 5 April 2031, and the residence nil-rate band at £175,000 from 6 April 2020 to 5 April 2030. The taper threshold remains £2 million.',
      'The 36% charity rate is not a switch. If it applies, do not treat this 40% figure as the bill. Spouse exemption and a transferred band are also not switches.'
    ],
    examplesHeading: 'Worked UK Inheritance Tax examples',
    samples: [
      { title: '£600,000 estate, £300,000 home, residence band claimed', overrides: {}, blurb: 'Both bands are available and the home is large enough to use the full residence band. The slice above £500,000 is taxed at 40%.' },
      { title: 'The same estate with the residence band turned off', overrides: { claim: 2 }, blurb: 'Only the £325,000 nil-rate band is used. The home value is ignored. Use this when the home does not pass to direct descendants.' },
      { title: 'A £2,200,000 estate', overrides: { estate: 2200000, home: 500000 }, blurb: 'The estate is £200,000 over £2 million, so the residence band is reduced by £100,000 before it is capped at the home. The nil-rate band is still £325,000. No spouse exemption is applied.' }
    ],
    table: { heading: 'Inheritance Tax headlines', caption: 'Each headline is 40% of the value above the bands this calculator actually used. Charity, spouse exemption, and transferable bands are not in the figure.', headers: ['Case', 'Headline'] },
    limitsHeading: 'What this Inheritance Tax estimate leaves out',
    limits: [
      'Spouse and civil-partner exemption, a transferred nil-rate band, and a transferred residence nil-rate band are not applied. Two unused bands can shelter more than this single-estate calculation.',
      'The 36% charity rate, business property relief, and agricultural property relief are not applied. Gifts in the seven years before death are not brought back in.',
      'The home must be a qualifying residence passing to direct descendants, including the downsizing rules. This page only caps the band at the value you type.',
      'This is not the US federal estate-tax calculator. That page uses the 2026 basic exclusion in dollars. The amounts are not interchangeable.'
    ],
    disclaimer: 'This Inheritance Tax figure is general information for a death on or after 6 April 2026. It is not tax advice and it does not replace the IHT400 account. HMRC assesses the tax.',
    faqs: [
      { q: 'How much Inheritance Tax is due on a £600,000 estate with a £300,000 home left to children?', a: `£40,000.00 when the residence nil-rate band is claimed. The bands used are £325,000 and £175,000. The headline is ${run('uk-inheritance-tax-calculator').headline}.` },
      { q: 'What are the UK nil-rate band and residence nil-rate band for 2026/27?', a: '£325,000 and £175,000. HMRC’s threshold table keeps those amounts through 5 April 2030 for the residence band and through 5 April 2031 for the nil-rate band. The residence band tapers from £2 million.' },
      { q: 'Does this page apply the spouse exemption or a transferred nil-rate band?', a: 'No. Those reliefs can remove or reduce the tax. Subtract them from the estate yourself, or leave them off and treat this figure as higher than the bill. The 36% charity rate is also not applied.' },
      { q: 'Is this the same as the US estate tax calculator?', a: 'No. The US page uses the federal basic exclusion in dollars. This page uses the UK nil-rate bands in pounds. A result on one is not a result on the other.' }
    ],
    relatedLinks: [
      { slug: 'uk-capital-gains-tax-calculator', label: 'UK capital gains tax calculator', note: '2026/27 Capital Gains Tax after the £3,000 annual exempt amount. A lifetime gain, not Inheritance Tax on death.' },
      { slug: 'estate-tax-calculator', label: 'US federal estate tax calculator', note: 'A 2026 US estate of $15,100,000 is $40,000 of tax above the $15,000,000 basic exclusion. Not a UK nil-rate band.' },
      { slug: 'uk-take-home-pay-calculator', label: 'UK take-home pay calculator', note: '2026/27 income tax and National Insurance on a salary. Inheritance Tax is not deducted from that pay.' }
    ]
  }),
  'australia-help-repayment-calculator': page({
    slug: 'australia-help-repayment-calculator',
    title: 'Australia HELP Repayment Calculator 2026–27 | ClearCalc',
    h1: 'Australia HELP Repayment Calculator',
    description: 'Australia HELP repayment calculator for 2026–27. Repayment income of $86,380 is a compulsory repayment of $2,527.80, which is 15 cents per dollar over $69,528. ATO thresholds, updated 30 June 2026.',
    intro: [
      'This Australia HELP repayment calculator uses the Australian Taxation Office study-and-training-loan thresholds for the 2026–27 income year. The page was current on the ATO site as of 30 June 2026. Compulsory repayments are marginal. Nothing is repaid at or under $69,528. Above that, the repayment is 15 cents per dollar over $69,528 until $129,717, then $9,028 plus 17 cents per dollar over $129,717 until $186,050, then 10% of the whole repayment income.',
      'The ATO’s own 2026–27 example is the sample. Repayment income of $86,380 is $16,852 over $69,528, and 15% of that is $2,527.80. The income you type should already be repayment income: taxable income, excluding assessable First Home Super Saver amounts, plus reportable fringe benefits, total net investment loss, reportable super contributions, and exempt foreign employment income. This page does not add those pieces.',
      'The same thresholds cover HELP, VET Student Loans, SFSS, Student Start-up Loans, ABSTUDY SSL, and the Australian Apprenticeship Support Loan. This is not a UK student loan and it is not a US student loan. Indexation of the debt and a voluntary repayment are separate from the compulsory amount.'
    ],
    steps: [
      'Enter repayment income in Australian dollars. The sample is 86380, the ATO example.',
      'Enter the HELP balance still owed, or 0 if you do not want a cap. The sample is 0.',
      'Press Calculate. The headline is the compulsory repayment for 2026–27, and not more than the balance if you entered one.',
      'Use the 2025–26 table only for a 2025–26 return. This form is the 2026–27 table and it does not switch years.'
    ],
    howHeading: 'How the 2026–27 HELP repayment is calculated',
    howItWorks: [
      'Under or at $69,528 the repayment is nil. From there to $129,717 it is 15 cents on each dollar over $69,528. From $129,718 to $186,050 it is $9,028 plus 17 cents on each dollar over $129,717. From $186,051 it is 10% of repayment income. The result is rounded to the cent.',
      'At the top of the 15-cent band, $129,717 produces $9,028.35. The next dollar uses the published $9,028 plus 17 cents, which is $9,028.17. The ATO table states both lines that way, so the repayment steps down by a few cents at that boundary and again changes formula at $186,051. This page follows the table rather than smoothing the step.',
      'If you enter a balance, the repayment is capped at that balance. A voluntary payment is not subtracted from the compulsory amount. Employer withholding during the year is a prepayment. The assessed amount is what this page estimates.'
    ],
    formula: '2026–27, ATO study and training loan table:\n$0 to $69,528: nil\n$69,529 to $129,717: 15 cents per $1 over $69,528\n$129,718 to $186,050: $9,028 plus 17 cents per $1 over $129,717\n$186,051 and over: 10% of repayment income\nResult = the smaller of that repayment and the balance, when a balance is entered',
    formulaNotes: [
      'The ATO example: $86,380 − $69,528 = $16,852, and $16,852 × 0.15 = $2,527.80.',
      '2025–26, for a prior return only, started at $67,000, then 15 cents over that amount to $125,000, then $8,700 plus 17 cents over $125,000 to $179,285, then 10%. This form does not use that older table.'
    ],
    examplesHeading: 'Worked 2026–27 HELP examples',
    samples: [
      { title: 'ATO example, repayment income of $86,380', overrides: {}, blurb: 'Fifteen cents on the dollars over $69,528. The ATO prints $2,527.80. No balance is entered, so nothing caps the result.' },
      { title: 'Income at the $69,528 threshold', overrides: { income: 69528 }, blurb: 'The compulsory repayment is nil. One dollar over the threshold starts the 15-cent band. The old system that taxed the whole income at a cliff is not used.' },
      { title: 'Income of $200,000', overrides: { income: 200000 }, blurb: 'This income is in the top band, so the repayment is 10% of repayment income. The 17-cent formula stops at $186,050.' }
    ],
    table: { heading: 'HELP repayment headlines', caption: 'Income year 2026–27. Each headline is this calculator. The first row is the ATO’s published example.', headers: ['Case', 'Headline'] },
    limitsHeading: 'What this HELP repayment leaves out',
    limits: [
      'The figure you type must already be repayment income. Taxable income alone is short if you have reportable fringe benefits, a net investment loss, reportable super, or exempt foreign employment income.',
      'Indexation of the debt, a voluntary repayment, and PAYG withholding by an employer are not computed. Withholding is not the assessed repayment.',
      'A balance you type caps the result. A zero balance means no cap, not a statement that the debt is gone.',
      'UK Plan 1, Plan 2, Plan 4, Plan 5, and postgraduate repayments are a different statute. The US student-loan page is a third statute. Do not reuse this threshold for either one.'
    ],
    disclaimer: 'This HELP figure is the 2026–27 compulsory repayment from the ATO table. It is not a tax assessment and it is not advice about voluntary repayments. The ATO calculates the amount on the return.',
    faqs: [
      { q: 'What is the HELP repayment on $86,380 of repayment income in 2026–27?', a: `$2,527.80. That is 15 cents for each of the $16,852 over $69,528, the ATO’s published example. The headline is ${run('australia-help-repayment-calculator').headline}.` },
      { q: 'What are the 2026–27 HELP repayment thresholds?', a: 'Nil to $69,528. Then 15 cents per dollar over $69,528 through $129,717. Then $9,028 plus 17 cents per dollar over $129,717 through $186,050. Then 10% of repayment income. Source: ATO study and training loan thresholds, updated 30 June 2026.' },
      { q: 'Is a HELP repayment the same as a UK or US student loan repayment?', a: 'No. UK loans use plan thresholds and a percent of earnings above them. A US student loan uses the repayment terms of that loan. This page is only the Australian compulsory amount.' },
      { q: 'Does the calculator add fringe benefits and reportable super for me?', a: 'No. Repayment income includes those amounts. Add them before you type the income. The Australia take-home page is a different calculation and does not build repayment income either.' }
    ],
    relatedLinks: [
      { slug: 'australia-take-home-pay-calculator', label: 'Australia take-home pay calculator', note: '2026–27 resident income tax, the low income tax offset, and the Medicare levy. HELP is not subtracted from that pay on that page.' },
      { slug: 'australia-superannuation-guarantee-calculator', label: 'Australia superannuation guarantee calculator', note: 'The 12% super guarantee on qualifying earnings. Reportable super can belong inside HELP repayment income, and this page does not add it.' },
      { slug: 'uk-student-loan-repayment-calculator', label: 'UK student loan repayment calculator', note: 'Plan 1, Plan 2, Plan 4, Plan 5, or a postgraduate loan for 2026/27. Related only as another student-loan repayment. The thresholds are not the HELP thresholds.' }
    ]
  }),
  'rent-increase-calculator': page({
    slug: 'rent-increase-calculator',
    title: 'Rent Increase Calculator: New Rent and Annual Cost | ClearCalc',
    h1: 'Rent Increase Calculator',
    description: 'Rent increase calculator. $1,800 a month raised by 5% becomes $1,890.00, which is $1,080.00 more over a year. A dollar increase uses the dollar box instead. Not a local rent-cap rule.',
    intro: [
      'This rent increase calculator adds either a percent or a dollar amount to the current monthly rent and then multiplies the monthly increase by 12. Rent of $1,800 raised by 5% becomes $1,890.00 a month. The extra cost over a year is $1,080.00. Switching to a dollar increase uses the dollar box and ignores the percent.',
      'The arithmetic is not a statement of what a landlord is allowed to charge. No city, state, or country rent cap is built in. A notice period, a ban on increases, and a limit tied to inflation are legal questions this page does not answer.',
      'The rent-affordability calculator compares a rent with gross income and the 30% cost-burden line. It does not apply an increase. Put the new rent into that page if you want to see the new ratio. This page stops at the new rent and the annual extra cost.'
    ],
    steps: [
      'Enter the current monthly rent. The sample is 1800.',
      'Choose a percent or a dollar increase. The sample is a percent.',
      'Enter the percent, or the dollar amount. The sample percent is 5. The sample dollar amount is 100, and it is used only in the dollar mode.',
      'Press Calculate. The headline is the new monthly rent.'
    ],
    howHeading: 'How the new rent and the annual extra cost are calculated',
    howItWorks: [
      'A percent increase is the current rent times the percent. A dollar increase is the dollar amount itself. The new rent is the current rent plus that increase. The annual extra cost is the monthly increase times 12. On the sample, 1800 × 0.05 = 90, and 90 × 12 = 1080.',
      'The mode switch decides which box is used. Leaving 5 in the percent box does not change a dollar-mode result. A percent above 100 is rejected. A dollar increase can be larger than the current rent. The page will still add it.'
    ],
    formula: 'Percent mode: monthly increase = current rent × percent ÷ 100\nDollar mode: monthly increase = the dollar amount\nNew rent = current rent + monthly increase\nExtra over 12 months = monthly increase × 12',
    formulaNotes: [
      'The annual figure is twelve times the monthly increase. It is not a renewal that starts mid-month, and it does not prorate the first month.',
      'Currency symbols are US dollars. The arithmetic is the same for another currency. The page does not convert.'
    ],
    examplesHeading: 'Worked rent-increase examples',
    samples: [
      { title: '$1,800 raised by 5%', overrides: {}, blurb: 'The new rent is $1,890 a month and the year costs $1,080 more. No local cap was consulted.' },
      { title: '$1,800 raised by $100', overrides: { mode: 2 }, blurb: 'The dollar box is used. The 5% box is ignored. The annual extra cost is $100 times 12.' },
      { title: '$2,400 raised by 3%', overrides: { rent: 2400, percent: 3 }, blurb: 'A different rent and a smaller percent. The affordability page can take the new rent and compare it with income. This page does not.' }
    ],
    table: { heading: 'Rent-increase headlines', caption: 'The headline is the new monthly rent. The annual extra cost is in the detail lines. No rent-cap statute is applied.', headers: ['Case', 'Headline'] },
    limitsHeading: 'What this rent increase leaves out',
    limits: [
      'No local rent cap, no notice period, and no exemption for a new tenancy. Those rules differ by place and are not stored here.',
      'Fees, parking, and utilities are not added unless they are already inside the rent you typed.',
      'The result is not a legal notice and it is not advice that an increase is permitted.',
      'Affordability is a different page. A higher rent can cross the 30% line there without this page knowing the income.'
    ],
    disclaimer: 'This rent increase is arithmetic. It is not legal advice and it does not state whether a landlord may charge the new rent.',
    faqs: [
      { q: 'What is $1,800 of rent after a 5% increase?', a: `$1,890.00 a month. The extra cost over twelve months is $1,080.00. The headline is ${run('rent-increase-calculator').headline}.` },
      { q: 'Does the rent increase calculator apply a local rent cap?', a: 'No. It adds the percent or the dollar amount you type. A cap, a notice rule, or a ban is not looked up and is not legal advice from this page.' },
      { q: 'How is this different from the rent affordability calculator?', a: 'That page compares rent with gross income. This page only changes the rent. Put the new rent into the affordability page if you want the income ratio.' },
      { q: 'When does the dollar box override the percent?', a: 'Only when the increase is set to a dollar amount. In percent mode the dollar box is ignored, and in dollar mode the percent box is ignored.' }
    ],
    relatedLinks: [
      { slug: 'rent-affordability-calculator', label: 'Rent affordability calculator', note: 'Compares a rent with 30% of gross income. It does not apply a percent increase.' },
      { slug: 'rent-vs-buy-calculator', label: 'Rent versus buy calculator', note: 'A longer comparison of renting and owning. The increase here is one year of extra rent, not that comparison.' },
      { slug: 'house-affordability-calculator', label: 'House affordability calculator', note: 'A purchase price from income and debts. A rent increase is not a mortgage payment.' }
    ]
  }),
  'pool-volume-calculator': page({
    slug: 'pool-volume-calculator',
    title: 'Pool Volume Calculator: Gallons and Litres | ClearCalc',
    h1: 'Pool Volume Calculator',
    description: 'Pool volume calculator for a rectangular, circular, or oval pool. A 32 by 16 foot pool with an average depth of 4.5 feet holds about 17,235 US gallons. Volume uses the dimensions you type. It does not dose chemicals.',
    intro: [
      'This pool volume calculator turns a shape, the horizontal dimensions, and an average depth into cubic feet, US gallons, and litres. A rectangle is length times width times depth. A circle uses the diameter you type in the length box. An oval uses the area of an ellipse. The sample rectangle is 32 feet by 16 feet with an average depth of 4.5 feet.',
      'A US gallon is 231 cubic inches, so one cubic foot is 1,728 ÷ 231 gallons. A US gallon is 3.785411784 litres. Both conversions are exact definitions, not rounded rules of thumb such as 7.5 gallons per cubic foot. The page shows the result of the exact factor.',
      'Average depth is your input. A pool that is 3 feet at one end and 8 feet at the other is not 8 feet deep for this formula. The page does not dose chlorine, salt, or any other chemical. Chemical amounts need a label, a test result, and a product direction. They are not a function of gallons alone on this site.'
    ],
    steps: [
      'Choose rectangular, circular, or oval. The sample is rectangular.',
      'Enter length and width in feet. For a circle, type the diameter as the length. The width is ignored for a circle.',
      'Enter the average depth in feet. The sample is 4.5.',
      'Press Calculate. The headline is US gallons. Litres and cubic feet are underneath, with the formula that was used.'
    ],
    howHeading: 'How pool gallons are calculated',
    howItWorks: [
      'Rectangular volume is length × width × average depth. Circular volume is π times the radius squared times depth, and the radius is half the diameter. Oval volume is π times (length ÷ 2) times (width ÷ 2) times depth. Gallons are cubic feet times 1,728 ÷ 231. Litres are gallons times 3.785411784.',
      'The sample rectangle is 32 × 16 × 4.5 = 2,304 cubic feet. The gallon count uses the exact factor rather than 7.5. A circular pool uses only the diameter and the depth. An oval pool needs both horizontal dimensions.'
    ],
    formula: 'Rectangle = length × width × average depth\nCircle = π × (diameter ÷ 2)² × average depth\nOval = π × (length ÷ 2) × (width ÷ 2) × average depth\nUS gallons = cubic feet × 1,728 ÷ 231\nLitres = US gallons × 3.785411784',
    formulaNotes: [
      '1,728 ÷ 231 is 7.48051948 gallons per cubic foot. A chart that uses 7.5 will be a little low.',
      'Depth is an average. Measure the shallow end and the deep end and use the average you are willing to stand behind. The form does not average two depths for you.'
    ],
    examplesHeading: 'Worked pool-volume examples',
    samples: [
      { title: '32 by 16 feet, 4.5 feet average depth', overrides: {}, blurb: 'A rectangle. Cubic feet are 2,304 before the gallon conversion. The headline uses 1,728 ÷ 231 rather than 7.5.' },
      { title: 'A 24-foot circular pool, 4 feet deep', overrides: { shape: 2, length: 24, depth: 4 }, blurb: 'The length box is the diameter. The width box is ignored. The radius is 12 feet.' },
      { title: 'A 30 by 15 foot oval, 4 feet deep', overrides: { shape: 3, length: 30, width: 15, depth: 4 }, blurb: 'The surface is an ellipse with those two radii. Average depth is still a number you type.' }
    ],
    table: { heading: 'Pool-volume headlines', caption: 'The headline is US gallons. Litres are in the detail lines. No chemical dose is computed.', headers: ['Pool', 'Headline'] },
    limitsHeading: 'What this pool volume leaves out',
    limits: [
      'No chemical dose. Chlorine, shock, algaecide, and salt are not calculated from the gallons.',
      'Steps, benches, and a spa attached to the pool are not subtracted or added. The shape is one simple solid.',
      'Average depth is not computed from two ends. Type the average you measured.',
      'Dimensions are in feet. A measurement in metres has to be converted before you type it. The length converter is the place for that conversion.'
    ],
    disclaimer: 'This pool volume is geometry. It is not a chemical dosing instruction and it is not a construction quantity.',
    faqs: [
      { q: 'How many gallons are in a 32 by 16 foot pool at 4.5 feet average depth?', a: `The rectangle is 2,304 cubic feet. The headline is ${run('pool-volume-calculator').headline}, using 1,728 ÷ 231 gallons per cubic foot. Litres use 3.785411784 litres per US gallon.` },
      { q: 'Which pool shapes does the volume calculator accept?', a: 'A rectangle, a circle from a diameter, and an oval from an ellipse. A freeform pool is not one of those three. Average the shape into one of them only if you accept the error.' },
      { q: 'Does the page tell me how much chlorine to add?', a: 'No. Gallons are not a dose. Follow the product label and a water test. This site does not calculate a chemical amount.' },
      { q: 'Why not use 7.5 gallons per cubic foot?', a: 'A US gallon is 231 cubic inches and a cubic foot is 1,728 cubic inches. The quotient is about 7.4805, not 7.5. The page uses the exact quotient.' }
    ],
    relatedLinks: [
      { slug: 'volume-calculator', label: 'Volume calculator', note: 'A box, a cylinder, a sphere, or a cone. A pool is a specific case of a box or a cylinder, reported in gallons.' },
      { slug: 'square-footage-calculator', label: 'Square footage calculator', note: 'Floor area, not a volume and not a gallon count.' },
      { slug: 'concrete-slab-calculator', label: 'Concrete slab calculator', note: 'Cubic yards of concrete for a slab. Not the water in a pool.' }
    ]
  }),
  'board-foot-calculator': page({
    slug: 'board-foot-calculator',
    title: 'Board Foot Calculator for Lumber | ClearCalc',
    h1: 'Board Foot Calculator',
    description: 'Board foot calculator using the standard lumber formula. A piece 2 inches by 6 inches by 8 feet is 8 board feet. Ten of those pieces are 80 board feet. Nominal sizes are not converted to actual dressed sizes.',
    intro: [
      'This board foot calculator uses the standard lumber formula: thickness in inches, times width in inches, times length in feet, times the number of pieces, divided by 12. One piece that is 2 inches by 6 inches by 8 feet is 8 board feet. Ten pieces are 80 board feet.',
      'The inches you type are the inches that are measured. A nominal 2×6 that has been surfaced to 1.5 by 5.5 inches is a different count if you type 2 and 6. This page does not keep a nominal-to-actual table and it does not convert one into the other. Type the dimensions the price or the cut list actually uses.',
      'A board foot is a volume, one twelfth of a cubic foot when thickness and width are in inches and length is in feet. Square footage of a floor is an area. The square-footage calculator does not count board feet, and this page does not count floor area.'
    ],
    steps: [
      'Enter thickness and width in inches. The sample is 2 and 6.',
      'Enter length in feet and the number of pieces. The sample is 8 feet and 10 pieces.',
      'Press Calculate. The headline is the board feet for the whole bundle. One piece is listed underneath.',
      'Use dressed measurements when the board has already been surfaced, if that is the volume you want. The form will not make that substitution.'
    ],
    howHeading: 'How board feet are calculated',
    howItWorks: [
      'Board feet = thickness × width × length × pieces ÷ 12. The sample is 2 × 6 × 8 × 10 ÷ 12 = 80. One piece is 8. A 1 by 12 by 1 foot piece is exactly 1 board foot, which is the definition the divisor of 12 encodes.',
      'Thickness is limited to 24 inches, width to 48 inches, and length to 100 feet, so a misplaced unit is rejected rather than turned into a huge tally. Pieces are a whole number from 1 to 100,000.'
    ],
    formula: 'Board feet = thickness (inches) × width (inches) × length (feet) × pieces ÷ 12\nOne piece = the same product with pieces set to 1',
    formulaNotes: [
      'The divisor is 12 because a board 1 inch thick and 12 inches wide is one board foot for each foot of length.',
      'Nominal sizes such as 2×4 are names. The surfaced size is often smaller. Type the size you mean. The page will not replace 2 and 4 with 1.5 and 3.5.'
    ],
    examplesHeading: 'Worked board-foot examples',
    samples: [
      { title: 'Ten pieces, 2 by 6 inches, 8 feet', overrides: {}, blurb: 'Eighty board feet. Each piece is 8 board feet. The numbers are the numbers typed, not a dressed 1.5 by 5.5.' },
      { title: 'One board foot, the definition', overrides: { thickness: 1, width: 12, length: 1, pieces: 1 }, blurb: 'One inch by twelve inches by one foot is 1 board foot. This is the check that the divisor is 12.' },
      { title: 'Dressed 2×6 dimensions, 1.5 by 5.5', overrides: { thickness: 1.5, width: 5.5 }, blurb: 'The same 8-foot length and 10 pieces, with the surfaced inches typed by hand. The count is lower than 80 because 2 and 6 were not used.' }
    ],
    table: { heading: 'Board-foot headlines', caption: 'Each headline is this calculator. Nominal sizes are not converted.', headers: ['Pieces', 'Headline'] },
    limitsHeading: 'What this board-foot count leaves out',
    limits: [
      'No nominal-to-actual conversion. A 2×4, a 2×6, and a 1×12 keep whatever inches you type.',
      'Waste, a kerf, and a taper are not added. Order extra only by raising the piece count or the length yourself.',
      'Square feet of a floor, cubic yards of concrete, and a sheet count are different units on different pages.',
      'The form rejects a thickness above 24 inches, a width above 48 inches, or a length above 100 feet so that a unit mix-up does not silently produce a huge tally.'
    ],
    disclaimer: 'This board-foot figure is the standard lumber formula on the dimensions you type. It is not a price and it is not a grading of the wood.',
    faqs: [
      { q: 'How many board feet are in ten 2 by 6 boards that are 8 feet long?', a: `80 board feet if you type 2 inches, 6 inches, and 8 feet. The headline is ${run('board-foot-calculator').headline}. A surfaced 1.5 by 5.5 is a different count.` },
      { q: 'What is the board-foot formula?', a: 'Thickness in inches × width in inches × length in feet × pieces ÷ 12. A 1 by 12 by 1 foot piece is exactly 1 board foot.' },
      { q: 'Does the calculator convert a nominal 2×6 to 1.5 by 5.5?', a: 'No. It uses the inches in the boxes. Type 1.5 and 5.5 yourself if the dressed size is what you want to count.' },
      { q: 'How is a board foot different from square footage?', a: 'A board foot is a volume of lumber. Square footage is an area. The square-footage page does not divide by 12, and this page does not report a floor area.' }
    ],
    relatedLinks: [
      { slug: 'square-footage-calculator', label: 'Square footage calculator', note: 'Area of a rectangle, in square feet. Not board feet.' },
      { slug: 'concrete-slab-calculator', label: 'Concrete slab calculator', note: 'Cubic yards and bags for a slab. A different volume and a different material.' },
      { slug: 'fence-calculator', label: 'Fence calculator', note: 'Posts, rails, and pickets for a rectangular run. It does not convert those pieces into board feet.' }
    ]
  }),
  'p-value-calculator': page({
    slug: 'p-value-calculator',
    title: 'P-Value Calculator for a Z or a T Statistic | ClearCalc',
    h1: 'P-Value Calculator',
    description: 'P-value calculator for a one-tail or two-tail probability. A z of 1.96 has a two-tail p of about 0.0500. A t of 2.228 with 10 degrees of freedom is also about 0.0500. The p-value is not the probability that a hypothesis is true.',
    intro: [
      'This p-value calculator starts from a statistic you already have. A standard normal z uses the error-function approximation of Abramowitz and Stegun, formula 7.1.26, and the two-tail probability is twice the tail beyond the absolute value. A Student t statistic uses the regularized incomplete beta function. With x = degrees of freedom ÷ (degrees of freedom + t²), the two-tail probability is I_x(df ÷ 2, 1/2). The fraction is evaluated with the modified Lentz continued fraction.',
      'The headline can be the two-tail probability or the one-tail probability. The one-tail figure is half the two-tail figure, because both distributions are symmetric. A negative statistic uses the same probabilities as its absolute value. The lines print both tails either way.',
      'A p-value is the probability, under the model you selected, of a statistic at least this far from zero if the model is centered at zero. It is not the probability that a hypothesis is true, and it is not the size of an effect. The z-score page standardizes an observation. The confidence-interval page builds a range around a mean. This page starts after the z or the t exists.'
    ],
    steps: [
      'Choose a normal z or a Student t. The sample is a z.',
      'Choose a two-tail or one-tail headline. The sample is two-tail.',
      'Enter the statistic. For a t, enter the degrees of freedom as well. The sample statistic is 1.96 and the sample degrees of freedom are 10, used only for a t.',
      'Press Calculate. A statistic beyond 40 in absolute value is rejected. Degrees of freedom run from 1 to 100,000.'
    ],
    howHeading: 'How the p-value is calculated',
    howItWorks: [
      'For a z, Φ(z) is one half plus one half times the error function of z divided by the square root of 2. The two-tail probability is 2 × (1 − Φ of the absolute value), and it is kept between 0 and 1. A z of 0 has a two-tail probability of 1. A z of about 1.95996 has a two-tail probability of 0.0500. A one-tail probability of 0.0500 sits near z = 1.64485.',
      'For a t, the two-tail probability is the regularized incomplete beta described above. A t of 0 has a two-tail probability of 1 at every degrees of freedom. A t of 1 with 1 degree of freedom is the Cauchy distribution, and the two-tail probability beyond 1 is 0.5. A t of 2.228138851986 with 10 degrees of freedom has a two-tail probability of 0.0500, which is the usual 5% critical value for that row. A t of 1.96 with 1,000 degrees of freedom sits close to the normal result, as it should.'
    ],
    formula: 'Normal two-tail p = 2 × (1 − Φ(|z|))\nΦ from Abramowitz and Stegun 7.1.26\nStudent two-tail p = I_x(df / 2, 1/2)\nx = df / (df + t²)\nOne-tail p = two-tail p / 2',
    formulaNotes: [
      'The beta continued fraction is the modified Lentz method. It was checked against the Cauchy case, the t critical value at 10 degrees of freedom, and a large-df comparison with the normal tail.',
      'The z-score page uses the same style of error function when it reports a probability next to a standardized observation. This page does not compute the z from a mean and a standard deviation. Bring the z with you.'
    ],
    examplesHeading: 'Worked p-value examples',
    samples: [
      { title: 'z of 1.96, two-tail', overrides: {}, blurb: 'The familiar normal point. The two-tail probability is about 0.05. The one-tail line is half of that. This is not a statement that a result is significant. Significance is a threshold you choose.' },
      { title: 't of 2.228 with 10 degrees of freedom', overrides: { distribution: 2, statistic: 2.228, df: 10 }, blurb: 'Close to the two-sided 5% critical value for 10 degrees of freedom. The more precise critical value 2.228138851986 lands on 0.0500 in the detail line’s extra digits.' },
      { title: 'One-tail normal probability at 1.64485', overrides: { tail: 2, statistic: 1.6448536269514722 }, blurb: 'The headline is the one-tail probability, about 0.05. The two-tail line is about 0.10. The statistic is the usual normal one-sided 5% point.' }
    ],
    table: { heading: 'P-value headlines', caption: 'Each headline is the tail you selected. Both tails are printed in the detail lines.', headers: ['Statistic', 'Headline'] },
    limitsHeading: 'What this p-value does not say',
    limits: [
      'It is not the probability that a hypothesis is true. It is a tail probability under a stated model centered at zero.',
      'It is not an effect size. A tiny p-value can belong to a tiny effect in a large sample.',
      'A one-tail probability assumes the question was one-sided. Halving a two-tail probability after seeing the sign is not a correction for having looked.',
      'The z-score page, the confidence-interval page, and the descriptive-statistics page answer different questions. This page does not standardize a list and it does not build an interval.'
    ],
    disclaimer: 'This p-value is a tail probability for a z or a t you type. It is not a hypothesis test by itself and it is not evidence of a cause.',
    faqs: [
      { q: 'What is the two-tail p-value for a z of 1.96?', a: `About 0.0500. The headline on the sample is ${run('p-value-calculator').headline}. The one-tail probability is half of the two-tail probability.` },
      { q: 'What is a p-value, and what is it not?', a: 'It is the probability of a statistic at least this far from zero under the model you selected. It is not the probability that the hypothesis is true, and it is not the size of an effect.' },
      { q: 'How does the t p-value differ from the z p-value?', a: 'A t needs degrees of freedom. The two-tail probability is a regularized incomplete beta. At 1 degree of freedom and t = 1, that probability is 0.5. A z does not use the degrees-of-freedom box.' },
      { q: 'How is this different from the z-score calculator?', a: 'The z-score page turns an observation, a mean, and a standard deviation into a z, and it can show a normal tail. This page starts from a z or a t you already computed, and it adds the t distribution.' }
    ],
    relatedLinks: [
      { slug: 'z-score-calculator', label: 'Z-score calculator', note: 'Standardizes an observation. This page starts after you have the z, and it also accepts a t.' },
      { slug: 'confidence-interval-calculator', label: 'Confidence interval calculator', note: 'A range around a mean. A p-value is not that range.' },
      { slug: 'descriptive-statistics-calculator', label: 'Mean, median, mode, and range', note: 'Summaries of a list. They are not a tail probability.' },
      { slug: 'sample-size-calculator', label: 'Sample size calculator', note: 'A sample size from a margin of error and a proportion. It does not return a p-value.' }
    ]
  })
};
