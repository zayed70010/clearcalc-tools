import { daily19Page as page, daily19Run } from './daily19-page.js';

const run = (slug, overrides = {}) => daily19Run(slug, overrides);

export const daily19OtherContent = {
  'us-self-employment-tax-calculator': page({
    slug: 'us-self-employment-tax-calculator',
    title: 'US Self-Employment Tax Calculator 2026 (Schedule SE) | ClearCalc',
    h1: 'US Self-Employment Tax Calculator for 2026',
    description: 'Self-employment tax calculator for 2026. Schedule SE taxes 92.35% of net profit at 12.4% for Social Security, up to the $184,500 wage base, and 2.9% for Medicare. A $100,000 profit with no W-2 wages is $14,129.55.',
    intro: [
      'This self-employment tax calculator estimates the Social Security and Medicare tax on net profit, using the IRS Schedule SE method for 2026. Net earnings are 92.35% of net profit. Social Security is 12.4% of those earnings up to the wage base that is left after any W-2 wages. Medicare is 2.9% of the same earnings, with no wage-base cap. Additional Medicare Tax of 0.9% applies above $200,000 single or $250,000 joint.',
      'The sample is $100,000 of net profit and no W-2 wages. Net earnings are $92,350. Social Security is $11,451.40. Medicare is $2,678.15. Additional Medicare Tax is zero because the earnings are under $200,000. The headline is $14,129.55. Half of the Social Security and Medicare portions, $7,064.78, is the income-tax deduction. It is not subtracted from the tax on this page.',
      'This is not the federal income-tax calculator and it is not a state paycheck. Those pages tax wages. This page taxes net profit from self-employment. It does not file Schedule SE, and net earnings under $400 produce no self-employment tax.'
    ],
    steps: [
      'Enter net profit from the business, after ordinary expenses and before this tax. The sample is 100000.',
      'Enter W-2 wages that already had Social Security withheld, or leave 0. Those wages use up the $184,500 wage base.',
      'Choose the single $200,000 threshold or the joint $250,000 threshold for Additional Medicare Tax.',
      'Press Calculate. The headline is the self-employment tax. The half-deduction is listed and is not removed from the headline.'
    ],
    howHeading: 'How 2026 self-employment tax is split',
    howItWorks: [
      'Schedule SE multiplies net profit by 92.35% and stops if the result is under $400. Social Security then uses the smaller of that amount and $184,500 minus W-2 Social Security wages. Medicare uses the full 92.35% amount. Additional Medicare Tax, from Form 8959, uses 0.9% of the self-employment earnings that sit above the threshold once W-2 wages are counted.',
      'A $250,000 profit produces net earnings of $230,875. Social Security stops at the $184,500 wage base. Medicare continues on the whole $230,875. Additional Medicare Tax starts because $230,875 is above $200,000 on the single threshold. The income-tax deduction is still only half of the Social Security and Medicare portions, not half of the additional tax.'
    ],
    formula: 'Net earnings = net profit × 92.35%\nIf net earnings are under $400, self-employment tax is $0\nSocial Security = 12.4% × min(net earnings, $184,500 − W-2 Social Security wages)\nMedicare = 2.9% × net earnings\nAdditional Medicare Tax = 0.9% × the portion of net earnings above the threshold after W-2 wages\nDeduction for income tax = half of Social Security and Medicare only',
    formulaNotes: [
      'The 92.35% factor is 100% minus half of the combined 15.3% employee-and-employer rate. It is applied before the wage base, not after.',
      'Married filing separately uses a $125,000 Additional Medicare threshold. That status is not a button here. The joint button is $250,000 and includes only the W-2 wages you type.'
    ],
    examplesHeading: 'Worked 2026 self-employment tax examples',
    samples: [
      { title: '$100,000 profit, no W-2 wages, single', overrides: {}, blurb: 'Net earnings are $92,350, under both the wage base and the $200,000 additional threshold. The tax is Social Security plus Medicare only.' },
      { title: '$250,000 profit, single', overrides: { profit: 250000 }, blurb: 'Social Security stops at $184,500. Medicare continues, and Additional Medicare Tax applies above $200,000.' },
      { title: '$40,000 profit and $170,000 of W-2 wages', overrides: { profit: 40000, wages: 170000 }, blurb: 'The W-2 wages have already used most of the Social Security wage base. Self-employment Social Security is charged only on the room that is left.' }
    ],
    table: { heading: 'Self-employment tax on this page', caption: 'Each headline is the 2026 Schedule SE tax, including Additional Medicare Tax when it applies. The income-tax deduction is not subtracted.', headers: ['Case', 'Headline'] },
    limitsHeading: 'What this self-employment estimate leaves out',
    limits: [
      'It is not federal income tax. The standard deduction, the brackets, and the qualified business income deduction are on the federal income-tax page. Half of the Social Security and Medicare portions is a deduction you would use there. This page only reports it.',
      'It is not a state paycheck. Iowa, Utah, Oklahoma, Louisiana, Kansas, and Mississippi withholding are wage tools. They do not compute Schedule SE.',
      'Church-employee wages, optional methods, and a loss carried from a partnership are not modeled. Net earnings under $400 are zero tax. A negative profit is rejected by the wage-style check only if you type a minus. Type zero for no profit.',
      'The joint threshold does not see a spouse’s self-employment unless you include it in the profit or the W-2 box yourself. This is an estimate, not a filed Schedule SE.'
    ],
    disclaimer: 'This self-employment tax figure is general information, not a Schedule SE and not tax advice. The IRS assesses the tax due.',
    faqs: [
      { q: 'How much self-employment tax is due on $100,000 of net profit in 2026?', a: `With no W-2 wages, net earnings are $92,350. Social Security is $11,451.40, Medicare is $2,678.15, and the headline is ${run('us-self-employment-tax-calculator').headline}. Additional Medicare Tax is zero.` },
      { q: 'Why does self-employment tax use 92.35% of profit?', a: 'Schedule SE multiplies net profit by 92.35% before the 12.4% and 2.9% rates. That factor stands in for the deduction of the employer half. The page does not also subtract half the tax from the headline.' },
      { q: 'Does a W-2 job reduce self-employment Social Security?', a: 'Yes. Social Security wages already taxed through a W-2 use up the 2026 wage base of $184,500. Medicare does not have that cap. Type the W-2 wages in the second box or the Social Security portion will be too high.' },
      { q: 'Is this the same tax as a state paycheck calculator?', a: 'No. A paycheck page withholds federal income tax, FICA, and one state’s wage tax from a salary. This page is only the self-employment Social Security and Medicare tax on net profit. It does not compute Iowa, Utah, Oklahoma, Louisiana, Kansas, or Mississippi income tax.' }
    ],
    relatedLinks: [
      { slug: 'us-federal-income-tax-calculator', label: '2026 federal income tax calculator', note: 'Income tax on taxable income. Put the half-deduction there yourself. This page does not compute the brackets.' },
      { slug: 'mississippi-paycheck-calculator', label: 'Mississippi paycheck calculator for 2026', note: 'Wage withholding at 4% above $10,000. Not Schedule SE.' },
      { slug: 'freelance-rate-calculator', label: 'Freelance rate calculator', note: 'A billable rate from a target and a buffer you type. It does not compute the 15.3% tax.' },
      { slug: 'social-security-calculator', label: 'Social Security benefit calculator', note: 'A primary insurance amount from earnings. This page is the tax, not the benefit.' }
    ]
  }),
  'apy-calculator': page({
    slug: 'apy-calculator',
    title: 'APY Calculator: Effective Annual Yield from a Nominal Rate | ClearCalc',
    h1: 'APY Calculator',
    description: 'APY calculator for the effective annual yield of a nominal rate. Five percent compounded monthly is a 5.1162% APY. The same 5% compounded once a year stays 5%. This is not a loan APR and not a CD maturity.',
    intro: [
      'This APY calculator turns a nominal annual rate and a compounding frequency into the effective annual yield. The formula is (1 + rate / n)^n − 1. Continuous compounding uses e raised to the rate, minus 1. The sample is 5% compounded monthly, which is a 5.1162% APY. A $1,000 balance becomes $1,051.16 after one year.',
      'The nominal rate is not the APY. Compounding more often raises the yield. Five percent compounded once a year is exactly 5%. The same 5% compounded continuously is higher than the monthly figure. None of these is the APR of a loan that includes a prepaid finance charge. That job is the APR calculator.',
      'A certificate of deposit page projects a maturity value over a term you choose and can start from either an APR or an APY. This page stops at the one-year yield. It does not schedule deposits and it does not subtract a fee.'
    ],
    steps: [
      'Enter the nominal annual rate as a percent. For 5%, type 5, not 0.05.',
      'Choose how often the rate compounds: annually, semiannually, quarterly, monthly, daily using 365, or continuously.',
      'Enter a starting balance if you want the dollar result for one year. The yield does not depend on the balance. The sample is 1000.',
      'Press Calculate. The headline is the APY. The balance after one year is underneath.'
    ],
    howHeading: 'How APY differs from the nominal rate and from APR',
    howItWorks: [
      'Divide the nominal rate by the number of compounding periods, add 1, raise that to the number of periods, and subtract 1. Monthly compounding of 5% uses 0.05 / 12. Twelve of those periods produce 5.1162%, not 5%. Daily compounding uses 365 periods. A 360-day bank year is not used.',
      'The APR calculator solves a loan. A 7% note with a $300 prepaid charge on $10,000 for 36 months is a 9.069% APR there. That percentage includes the fee. It is not the APY of a savings rate. The compound-interest calculator adds monthly deposits over many years. This page does neither.'
    ],
    formula: 'APY = (1 + nominal rate / n)^n − 1\nn = compounding periods per year\nContinuous APY = e^(nominal rate) − 1\nBalance after one year = principal × (1 + APY)\nDaily n = 365',
    formulaNotes: [
      'The headline shows four decimal places of the percent. 5% monthly is 5.116189…%, displayed as 5.1162%. The dollar balance is rounded to the cent from the full yield.',
      'A nominal rate of zero has an APY of zero at every frequency. A rate above 100% is rejected so a decimal typed by mistake, such as 0.05 for 5%, is not silently treated as a tiny rate. Type 5 for 5%.'
    ],
    examplesHeading: 'Worked APY examples',
    samples: [
      { title: '5% compounded monthly', overrides: {}, blurb: 'The sample. Twelve periods turn 5% into a 5.1162% APY. One thousand dollars grows by $51.16.' },
      { title: '5% compounded once a year', overrides: { compound: 1 }, blurb: 'With one period, the APY equals the nominal rate. The $1,000 balance becomes $1,050.00. Monthly compounding paid $1.16 more.' },
      { title: '5% compounded continuously', overrides: { compound: 0 }, blurb: 'The exponential limit. It is a little higher than daily compounding and it is not a product every bank offers. The formula is e^0.05 − 1.' }
    ],
    table: { heading: 'APY at 5% by compounding frequency', caption: 'Each headline is this calculator with a 5% nominal rate and a $1,000 balance. Only the frequency changes.', headers: ['Case', 'Headline'] },
    limitsHeading: 'What this APY does not price',
    limits: [
      'It is not a loan APR. Prepaid charges, a payment schedule, and Regulation Z are the APR page. Typing a loan fee here does nothing because there is no fee box.',
      'It is not a multi-year CD. The CD calculator takes a term in months and can start from an APY you already know. This page is how that APY is built from a nominal rate.',
      'Fees, a minimum balance, and a rate that changes during the year are not included. Daily compounding is 365, not 366 and not 360.',
      'The dollar line is one year of growth on the balance you type, with no added deposits. The compound-interest page is the one that accepts a monthly contribution.'
    ],
    disclaimer: 'This APY is the compound-yield formula. It is not a bank quote, a loan APR, or an investment forecast.',
    faqs: [
      { q: 'What is the APY of 5% compounded monthly?', a: `5.1162%. A $1,000 balance becomes $1,051.16 after one year. The headline on the sample is ${run('apy-calculator').headline}. Compounding once a year leaves the APY at 5%.` },
      { q: 'Is APY the same number as APR?', a: 'No. APY here is the effective yield of a nominal savings rate. The APR page includes a prepaid finance charge on a loan. A 5% nominal rate can be a 5.1162% APY. A 7% loan with a $300 fee is a different percentage on the APR page.' },
      { q: 'How does continuous compounding change the APY?', a: 'It uses e raised to the nominal rate, minus 1, which is the limit as the number of periods grows. At 5% it is slightly above daily compounding with 365 periods. A bank that compounds daily will not match the continuous line exactly.' },
      { q: 'Does the starting balance change the APY?', a: 'No. The yield is a property of the rate and the frequency. The balance only translates that yield into dollars for one year. A zero balance shows the same APY and zero interest.' }
    ],
    relatedLinks: [
      { slug: 'apr-calculator', label: 'APR calculator', note: 'A 7% note and a $300 prepaid charge on a $10,000, 36-month loan is 9.069% APR. That is a loan, not this yield.' },
      { slug: 'cd-calculator', label: 'CD calculator', note: 'A maturity value over the term you choose. It can start from an APY. This page builds the APY.' },
      { slug: 'compound-interest-calculator', label: 'Compound interest calculator', note: 'A starting balance plus monthly deposits over many years. This page is one year and no deposits.' },
      { slug: 'savings-goal-calculator', label: 'Savings goal calculator', note: 'The deposit that reaches a target. It assumes a rate. It does not convert that rate into an APY.' }
    ]
  }),
  'cash-on-cash-return-calculator': page({
    slug: 'cash-on-cash-return-calculator',
    title: 'Cash-on-Cash Return Calculator | ClearCalc',
    h1: 'Cash-on-Cash Return Calculator',
    description: 'Cash-on-cash return calculator. Divide one year of pre-tax cash flow by the cash invested. $8,000 of cash flow on $88,000 invested is 9.09%. This is not cap rate, not IRR, and not a tax figure.',
    intro: [
      'Cash-on-cash return is one year’s pre-tax cash flow divided by the cash you invested. The sample is $8,000 of cash flow and $88,000 invested, which is 9.09%. The cash invested might be a down payment plus closing costs. The cash flow is what you already decided was left after the mortgage and the operating bills. This page does not rebuild those bills.',
      'Cap rate is a different ratio. It divides net operating income by the property’s value and it ignores the loan. A rental page on this site can show both, because it builds the cash flow from rent and expenses. This page starts after that work is done. It will not invent a mortgage payment.',
      'It is also not an internal rate of return. IRR needs a series of cash flows and a starting outlay, and it solves for a rate over time. One year cannot be an IRR. The result is pre-tax. Depreciation and the tax on the cash flow are not subtracted.'
    ],
    steps: [
      'Enter the annual pre-tax cash flow. A loss is allowed and produces a negative percentage. The sample is 8000.',
      'Enter the total cash invested. It must be above zero, because the formula divides by it. The sample is 88000.',
      'Press Calculate. The headline is the percentage. Both dollar inputs are repeated underneath.',
      'If you do not yet know the cash flow, use the rental property calculator to build it, then bring the cash-flow and cash-invested lines here only if you want the ratio by itself.'
    ],
    howHeading: 'How cash-on-cash return is not cap rate',
    howItWorks: [
      'Divide the annual pre-tax cash flow by the cash invested and multiply by 100. Signs are kept. A negative cash flow on a positive investment is a negative return. There is no compounding and no second year.',
      'Cap rate uses value in the denominator and net operating income, before debt service, in the numerator. Cash-on-cash uses cash in the denominator and the cash flow after the mortgage. The same building can have a 6% cap rate and a 9% cash-on-cash return, or the reverse, depending on the loan. This page will not compute the cap rate from a value you did not type.'
    ],
    formula: 'Cash-on-cash return = annual pre-tax cash flow / total cash invested × 100\nCash invested must be above zero\nThe cash flow may be negative\nNo discounting, no tax, and no second year',
    formulaNotes: [
      'The headline is rounded to two decimal places of the percent. $8,000 / $88,000 is 9.0909…%, shown as 9.09%.',
      'Closing costs count as cash invested only if you included them in the number you type. The page does not add a default closing-cost percent.'
    ],
    examplesHeading: 'Worked cash-on-cash examples',
    samples: [
      { title: '$8,000 of cash flow on $88,000 invested', overrides: {}, blurb: 'The sample ratio. Nine dollars of pre-tax cash flow per hundred dollars of cash, plus the extra nine hundredths.' },
      { title: 'A negative cash flow', overrides: { flow: -2000, invested: 50000 }, blurb: 'The property costs more to hold than it brings in, before tax. The percentage is negative. Cap rate could still be positive if the loss is caused by the mortgage.' },
      { title: 'A larger cash investment', overrides: { flow: 8000, invested: 160000 }, blurb: 'The same $8,000 of cash flow on twice the cash. The return falls because the denominator grew. The cash flow did not.' }
    ],
    table: { heading: 'Cash-on-cash results', caption: 'Each headline is this calculator. The cash flow is one pre-tax year.', headers: ['Case', 'Headline'] },
    limitsHeading: 'What cash-on-cash return leaves out',
    limits: [
      'It is not cap rate. Bring net operating income and value to the cap-rate page. Do not type the property price into the cash-invested box unless the cash you put in really was the whole price.',
      'It is not IRR. A sale in year five, a changing rent, and the time value of money need a series. This page has two numbers.',
      'It is not tax advice and it is not after-tax cash flow. Depreciation, a refinance, and the tax on rental income are outside the ratio.',
      'A zero investment is rejected. The rental property calculator is where rent, vacancy, tax, insurance, and the mortgage become a cash flow.'
    ],
    disclaimer: 'This percentage is pre-tax cash flow divided by cash invested. It is not a cap rate, an IRR, an appraisal, or tax advice.',
    faqs: [
      { q: 'What is the cash-on-cash return on $8,000 of cash flow and $88,000 invested?', a: `9.09%. The headline is ${run('cash-on-cash-return-calculator').headline}. The cash flow is pre-tax and it is only one year.` },
      { q: 'How is cash-on-cash return different from cap rate?', a: 'Cap rate divides net operating income by property value and ignores the loan. Cash-on-cash divides cash flow after the mortgage by the cash you invested. A building can have one without matching the other.' },
      { q: 'Is cash-on-cash return the same as IRR?', a: 'No. IRR solves a rate from a series of cash flows. This page has a single year’s cash flow and does not discount it. A later sale is not included.' },
      { q: 'Can the cash-on-cash percentage be negative?', a: 'Yes. Type a negative cash flow. The page divides that loss by the cash invested and keeps the minus sign. It does not flip the loss into a positive cap rate.' }
    ],
    relatedLinks: [
      { slug: 'cap-rate-calculator', label: 'Cap rate calculator', note: 'NOI divided by value. A $24,000 NOI on a $300,000 value is an 8% cap rate. The mortgage is not in that ratio.' },
      { slug: 'rental-property-calculator', label: 'Rental property calculator', note: 'Builds cash flow, cap rate, and cash-on-cash from rent and expenses. This page starts from the two totals.' },
      { slug: 'irr-calculator', label: 'IRR calculator', note: 'A rate from a series of cash flows. One year of cash-on-cash is not that series.' },
      { slug: 'roi-calculator', label: 'ROI calculator', note: 'Profit divided by cost for one outlay and one final value. It is not a year of property cash flow.' }
    ]
  }),
  'uk-isa-calculator': page({
    slug: 'uk-isa-calculator',
    title: 'UK ISA Allowance Calculator for 2026/27 | ClearCalc',
    h1: 'UK ISA Allowance Calculator for 2026/27',
    description: 'UK ISA calculator for remaining 2026/27 allowance. The overall limit is £20,000 from 6 April 2026 to 5 April 2027. Lifetime ISA payments are capped at £4,000 and count toward the £20,000. A future cash ISA split is not applied.',
    intro: [
      'This UK ISA calculator subtracts what you have already paid into a cash ISA, a stocks and shares ISA, an innovative finance ISA, and a Lifetime ISA from the £20,000 overall allowance for the tax year 6 April 2026 to 5 April 2027. The sample has £5,000, £3,000, nothing, and £1,000 in those four pots. £9,000 is used. £11,000 of overall room is left.',
      'The Lifetime ISA cap is £4,000, and that £4,000 counts toward the £20,000. GOV.UK states both figures for 2026 to 2027. You must be under 40 to open a Lifetime ISA and you can pay in until 50. This page does not check your age and it does not add the 25% government bonus. The bonus is not part of the £4,000 you pay in.',
      'A rule that splits how much of the allowance can go into a cash ISA is due to start on 6 April 2027. It is not used for 2026/27. In this tax year the £20,000 can still be divided across the four ISA types, subject only to the £4,000 Lifetime ISA cap. This is room, not a forecast of growth, and it is not the Canada TFSA limit.'
    ],
    steps: [
      'Enter amounts already paid this tax year into a cash ISA, a stocks and shares ISA, an innovative finance ISA, and a Lifetime ISA. Use 0 for a type you have not paid into. The sample is 5000, 3000, 0, and 1000.',
      'Do not include the government Lifetime ISA bonus, a transfer of existing ISA money, or a Junior ISA.',
      'Press Calculate. The headline is overall room left. Lifetime ISA room that still fits inside that overall room is listed underneath.',
      'If a box is over its cap, the page says so. It does not silently trim the payment.'
    ],
    howHeading: 'How the 2026/27 ISA allowance is counted',
    howItWorks: [
      'Add the four payments. Subtract the total from £20,000. Room cannot go below zero. Separately, subtract the Lifetime ISA payment from £4,000. The Lifetime room you can still use is the smaller of that remainder and the overall room, because a Lifetime ISA payment also uses the overall allowance.',
      'The 6 April 2027 cash ISA change is mentioned only as a future rule. Nothing on this form reduces the cash ISA share of the 2026/27 £20,000. A Junior ISA has its own allowance and its own age rule. It is not one of the four boxes.'
    ],
    formula: 'Used = cash + stocks and shares + innovative finance + Lifetime ISA\nOverall room = max(0, £20,000 − used)\nLifetime room before the overall cap = max(0, £4,000 − Lifetime ISA payments)\nLifetime room you can still pay = the smaller of those two remainders\nTax year = 6 April 2026 to 5 April 2027',
    formulaNotes: [
      'GOV.UK’s ISA overview, read on 19 November 2026, states that the maximum you can save in ISAs in the 2026 to 2027 tax year is £20,000. The Lifetime ISA overview on the same date says you can put in up to £4,000 each year and that the £4,000 counts toward the £20,000.',
      'Transfers of money already inside an ISA do not use new allowance. This form cannot see a transfer. Type only new payments for 2026/27.'
    ],
    examplesHeading: 'Worked 2026/27 ISA room examples',
    samples: [
      { title: '£5,000 cash, £3,000 stocks and shares, £1,000 Lifetime', overrides: {}, blurb: 'Nine thousand pounds is used. Overall room is £11,000. Lifetime room is still £3,000, and that £3,000 fits inside the overall room.' },
      { title: '£4,000 already in a Lifetime ISA', overrides: { cash: 0, stocks: 0, innovative: 0, lifetime: 4000 }, blurb: 'The Lifetime ISA cap is fully used. Overall room is still £16,000, but further Lifetime ISA payments do not fit. The other ISA types can use the £16,000.' },
      { title: 'Payments over £20,000', overrides: { cash: 12000, stocks: 10000, innovative: 0, lifetime: 0 }, blurb: 'The total is £22,000. Overall room is £0 and the page says the payments are £2,000 over the allowance. It does not decide which payment the provider would reject.' }
    ],
    table: { heading: 'ISA room on this page', caption: 'Each headline is remaining overall room for 6 April 2026 to 5 April 2027. The Lifetime ISA cap is applied as well and shown in the detail lines.', headers: ['Case', 'Headline'] },
    limitsHeading: 'What this ISA room does not decide',
    limits: [
      'It is not a forecast of interest, dividends, or fund growth. It does not add the 25% Lifetime ISA bonus. The bonus is paid by the government on what you put in, up to £1,000, and it is not part of your £4,000.',
      'The cash ISA split expected from 6 April 2027 is not applied to 2026/27. Do not reduce this year’s cash ISA room for a rule that has not started.',
      'Age, UK residence, and the one-Lifetime-ISA rule are not checked. A Junior ISA is a different allowance. The Canada TFSA page uses CRA dollar limits, including $7,000 for 2026, and is not a substitute.',
      'This is not advice to open an account or to choose cash over investments. A provider applies the rules to the payments it receives.'
    ],
    disclaimer: 'This ISA figure is allowance arithmetic for 2026/27, not a forecast and not financial advice. GOV.UK and the ISA provider apply the rules.',
    faqs: [
      { q: 'What is the UK ISA allowance for 6 April 2026 to 5 April 2027?', a: '£20,000 overall. Lifetime ISA payments are capped at £4,000 and count toward that £20,000. The sample £9,000 of payments leaves £11,000 of overall room.' },
      { q: 'Does a Lifetime ISA payment reduce the cash ISA room in 2026/27?', a: 'It reduces the overall £20,000. It does not trigger a separate cash ISA cap. That kind of split is a future rule from 6 April 2027 and is not used on this page.' },
      { q: 'Should I include the Lifetime ISA government bonus in the amount paid?', a: 'No. The £4,000 cap is what you pay in. The bonus of up to £1,000 is not one of the four boxes. Including it would understate your remaining room.' },
      { q: 'Is a UK ISA the same as a Canada TFSA?', a: 'No. The TFSA page uses the CRA dollar limits in Canadian dollars. This page uses the £20,000 ISA allowance and the £4,000 Lifetime ISA cap for 2026/27. The currencies and the statutes are different.' }
    ],
    relatedLinks: [
      { slug: 'canada-tfsa-calculator', label: 'Canada TFSA calculator', note: 'CRA room in Canadian dollars, including the $7,000 limit for 2026. Not this £20,000 ISA allowance.' },
      { slug: 'uk-dividend-tax-calculator', label: 'UK dividend tax calculator', note: 'Tax on dividends held outside an ISA. An ISA wrapper is the point of the allowance this page measures.' },
      { slug: 'savings-goal-calculator', label: 'Savings goal calculator', note: 'A monthly deposit that reaches a target. It does not know the ISA cap.' },
      { slug: 'apy-calculator', label: 'APY calculator', note: 'The yield of a nominal rate. It is not ISA room and it is not a forecast for the ISA.' }
    ]
  }),
  'biweekly-mortgage-calculator': page({
    slug: 'biweekly-mortgage-calculator',
    title: 'Biweekly Mortgage Calculator: Half-Payments and Interest Saved | ClearCalc',
    h1: 'Biweekly Mortgage Calculator',
    description: 'Biweekly mortgage calculator comparing a monthly payment with 26 half-payments a year. A $300,000 loan at 6.5% for 30 years has a $1,896.20 monthly payment. Half of that, paid every two weeks, shortens the loan and cuts the interest. Not every lender applies the payments that way.',
    intro: [
      'A biweekly mortgage plan pays half of the normal monthly payment every two weeks. Twenty-six half-payments are thirteen full monthly payments a year, so the extra payment is what shortens the loan. The sample is $300,000 at 6.5% for 30 years. The monthly principal-and-interest payment is $1,896.20, the same figure the mortgage page shows. Half of it is $948.10.',
      'This page amortizes those half-payments with a rate of the annual rate divided by 26, rounding each period’s interest to the cent. It reports how many payments are needed, the years that represents, and the interest compared with paying the monthly amount for the full term. The monthly interest on the sample is $382,633.47.',
      'Some lenders do not apply money every two weeks. They hold the half-payments and credit a full payment once a month, which removes most of the interest saving, or they charge a fee to set the plan up. This calculator assumes each half-payment reduces the balance when it is made. It is not a refinance into a 15-year note, and it is not the mortgage-payoff page’s extra-principal box.'
    ],
    steps: [
      'Enter the principal. The sample is 300000, the amount borrowed, not the house price.',
      'Enter the annual interest rate. For 6.5%, type 6.5. The monthly and biweekly plans use the same rate.',
      'Enter the term of the ordinary monthly loan in whole years, from 1 to 40. The sample is 30.',
      'Press Calculate. The headline is the biweekly payoff time and the interest saved against the monthly plan.'
    ],
    howHeading: 'How 26 half-payments differ from 12 monthly payments',
    howItWorks: [
      'The monthly payment is the standard fully amortizing formula, principal times the monthly rate times (1 + r)^n over (1 + r)^n − 1. The biweekly payment is half of that unrounded monthly payment, rounded to the cent. Interest each fortnight is the remaining balance times the annual rate divided by 26.',
      'The comparison is not a 15-year loan. The 15-versus-30-year page uses two terms and can use two rates, and each payment is monthly. A biweekly plan keeps the original note and changes only the payment pattern. A lender that accrues interest daily, or that drafts your account every two weeks but posts to the loan monthly, will not match these years.'
    ],
    formula: 'Monthly rate r = annual percent / 100 / 12\nMonthly payment M = principal × r × (1 + r)^n / ((1 + r)^n − 1)\nBiweekly payment = M / 2, rounded to the cent\nBiweekly interest = balance × annual rate / 26, rounded to the cent each period\nInterest saved = monthly-plan interest − biweekly interest',
    formulaNotes: [
      'The monthly interest uses the closed-form payment times the number of months, minus principal. The biweekly interest is the sum of the rounded period charges. The two rounding conventions are why the saved-interest line is not a second closed form.',
      'If the half-payment does not cover the biweekly interest, the balance would rise and the page rejects the inputs. A zero rate simply splits the principal across the payments.'
    ],
    examplesHeading: 'Worked biweekly mortgage examples',
    samples: [
      { title: '$300,000 at 6.5% for 30 years', overrides: {}, blurb: 'The mortgage page’s sample loan. The monthly payment is $1,896.20. The biweekly plan pays $948.10 twenty-six times a year.' },
      { title: 'The same loan at 3%', overrides: { rate: 3 }, blurb: 'A lower rate shrinks both the monthly payment and the interest either plan would charge. The biweekly pattern still adds the equivalent of one extra monthly payment a year.' },
      { title: 'A 15-year monthly term, paid biweekly', overrides: { years: 15 }, blurb: 'The monthly plan is already the shorter note. Biweekly payments still add an extra month’s worth of principal each year, so the payoff moves a little earlier. This is not the 15-versus-30 comparison.' }
    ],
    table: { heading: 'Biweekly results', caption: 'Each headline is this calculator. Interest saved is against paying the monthly payment for the full term at the same rate.', headers: ['Case', 'Headline'] },
    limitsHeading: 'What this biweekly comparison does not assume',
    limits: [
      'Not every lender treats a biweekly draft as an immediate principal payment. A program that holds funds until a full monthly payment is due will not save the interest shown here. Ask the servicer before counting the saving.',
      'The mortgage calculator is one monthly loan and can add tax, insurance, and PMI. This page is principal and interest only, and only the payment pattern changes.',
      'The mortgage-payoff calculator adds an extra amount you choose on top of a monthly payment. The 15-versus-30-year calculator compares two notes. Neither is 26 half-payments.',
      'Fees for a biweekly service, a rate that can change, and extra principal on top of the half-payment are not included.'
    ],
    disclaimer: 'This biweekly figure assumes each half-payment reduces the balance immediately. It is not a lender quote and not a promise that a servicer will apply payments that way.',
    faqs: [
      { q: 'How does a biweekly mortgage payment compare with the monthly payment on $300,000 at 6.5%?', a: `The monthly payment is $1,896.20. The biweekly payment is $948.10. The headline for that loan is ${run('biweekly-mortgage-calculator').headline}. The monthly plan’s interest over 30 years is $382,633.47.` },
      { q: 'Why are 26 half-payments more than 12 full payments?', a: 'Half of a monthly payment, paid 26 times, is 13 monthly payments a year. The thirteenth payment is principal that a once-a-month plan would not send until later. That is the source of the interest difference.' },
      { q: 'Will every lender credit a biweekly payment the way this page does?', a: 'No. Some servicers store the money and apply it monthly, and some charge a fee. This page assumes the balance falls every two weeks at a rate of the annual rate divided by 26. A different posting rule will not match.' },
      { q: 'Is a biweekly plan the same as choosing a 15-year mortgage?', a: 'No. A 15-year note changes the term and usually the rate, and the payment is still monthly. This page keeps the original term and rate and only changes how often principal is sent. The 15-versus-30-year page is the term comparison.' }
    ],
    relatedLinks: [
      { slug: 'mortgage-calculator', label: 'Mortgage calculator', note: 'The $300,000, 6.5%, 30-year payment is $1,896.20 a month. This page pays half of it every two weeks.' },
      { slug: 'mortgage-payoff-calculator', label: 'Mortgage payoff calculator', note: 'An extra principal amount on a monthly loan. Not 26 half-payments.' },
      { slug: 'fifteen-vs-thirty-year-mortgage-calculator', label: '15-year vs 30-year mortgage calculator', note: 'Two terms and two rates. The payment stays monthly.' },
      { slug: 'amortization-calculator', label: 'Amortization calculator', note: 'The year-by-year balance of a monthly loan. It does not run a biweekly schedule.' }
    ]
  }),
  'credit-utilization-calculator': page({
    slug: 'credit-utilization-calculator',
    title: 'Credit Utilization Calculator | ClearCalc',
    h1: 'Credit Utilization Calculator',
    description: 'Credit utilization calculator for balances divided by limits, overall and per card, plus the figure after a payment on the first card. $3,000 of $10,000 and $500 of $2,000 is 29.17% overall. No credit score is estimated.',
    intro: [
      'Credit utilization is the balances on revolving accounts divided by the credit limits. The sample has $3,000 on a $10,000 card and $500 on a $2,000 card. Together that is $3,500 of $12,000, or 29.17%. Card 1 alone is 30.00%. Card 2 alone is 25.00%. A $1,000 payment on card 1 brings the overall figure to 20.83%.',
      'Utilization is one factor in credit scoring. This page does not turn it into a FICO score, a VantageScore, or an approval. It does not know the rest of a credit file. A third card can be left at zero balance and zero limit, and that row is ignored. A balance with a zero limit is rejected.',
      'The credit-card payoff calculator answers a different question: how many months a fixed payment takes to clear one balance, and how much interest that monthly rate adds. This page does not apply an APR and it does not count months. The payment here only changes the balances you are about to divide by the limits.'
    ],
    steps: [
      'Enter the balance and limit for card 1. The sample is 3000 and 10000.',
      'Enter card 2. The sample is 500 and 2000. Leave card 3 at 0 and 0 if you have only two cards.',
      'Enter a payment to apply to card 1, or leave 0. A payment larger than card 1’s balance is not moved to the other cards.',
      'Press Calculate. The headline is overall utilization before the payment. The after-payment figure is underneath, with each card.'
    ],
    howHeading: 'How utilization is balances over limits',
    howItWorks: [
      'Add the balances of the cards that have a balance or a limit. Add the limits the same way. Divide and multiply by 100. Each card is also divided on its own, because a low overall percentage can hide one card that is nearly full.',
      'The payment reduces card 1 only, and not below zero. Overall utilization is then recomputed with the same limits. Paying a card down does not raise its limit. A scoring model may also use the highest card, the statement date, and authorized-user accounts. None of that is estimated here.'
    ],
    formula: 'Card utilization = card balance / card limit × 100\nOverall utilization = sum of balances / sum of limits × 100\nBalance after the payment = max(0, card 1 balance − payment)\nThe payment is not spread to other cards\nNo score is computed',
    formulaNotes: [
      'A row with a zero balance and a zero limit is unused. A row with a balance and a zero limit is rejected, because the ratio would divide by zero.',
      'Percents are shown to two decimal places. $3,500 / $12,000 is 29.1666…%, displayed as 29.17%.'
    ],
    examplesHeading: 'Worked utilization examples',
    samples: [
      { title: 'Two cards and a $1,000 payment', overrides: {}, blurb: 'Overall utilization starts at 29.17%. After $1,000 on card 1 it is 20.83%. Card 2 is unchanged.' },
      { title: 'One card at half the limit', overrides: { balance1: 2500, limit1: 5000, balance2: 0, limit2: 0, payment: 0 }, blurb: 'A single card at $2,500 of $5,000 is 50%. The unused rows do not change the ratio.' },
      { title: 'A payment larger than card 1', overrides: { payment: 4000 }, blurb: 'Card 1 falls to zero. The extra $1,000 is not applied to card 2. The page says how much was left over.' }
    ],
    table: { heading: 'Utilization results', caption: 'The headline is overall utilization before the payment. The detail lines include the figure after the payment on card 1.', headers: ['Case', 'Headline'] },
    limitsHeading: 'What this utilization figure is not',
    limits: [
      'It is not a credit score. No FICO or VantageScore formula is used, and the page does not say that a percentage will raise or lower a score by a stated number of points.',
      'It is not a payoff plan. Interest, a minimum payment, and the months to zero are the credit-card payoff calculator. This page has no APR.',
      'Statement balances can differ from the balances you type today. An issuer may report on a date you do not choose. Authorized-user cards and installment loans are not rows.',
      'A payment above card 1 stays unapplied. Move it yourself by lowering another balance if that is what you will actually pay.'
    ],
    disclaimer: 'This percentage is balances divided by limits. It is not a credit score, a lender decision, or a payoff schedule.',
    faqs: [
      { q: 'What is the utilization of $3,000 on a $10,000 card and $500 on a $2,000 card?', a: `29.17% overall. Card 1 is 30% and card 2 is 25%. A $1,000 payment on card 1 leaves 20.83% overall. The headline is ${run('credit-utilization-calculator').headline}.` },
      { q: 'Does this credit utilization calculator predict a FICO score?', a: 'No. Utilization is one scoring factor. The page stops at the percentage. It does not output a score and it does not claim a point change.' },
      { q: 'How is this different from the credit card payoff calculator?', a: 'The payoff page takes one balance, an APR, and a fixed payment, and counts the months and the interest. This page takes balances and limits and divides. It does not know an interest rate.' },
      { q: 'What happens if the payment is larger than card 1?', a: 'Card 1 goes to zero and the extra is not applied to card 2 or card 3. The detail line states the unused amount. Lower the other balances yourself if you will pay them too.' }
    ],
    relatedLinks: [
      { slug: 'credit-card-payoff-calculator', label: 'Credit card payoff calculator', note: 'A $5,000 balance at 21.99% takes 34 months at $200 a month. That is interest and time, not utilization.' },
      { slug: 'debt-to-income-ratio-calculator', label: 'Debt-to-income ratio calculator', note: 'Monthly payments divided by income. A utilization percentage is not a debt-to-income ratio.' },
      { slug: 'debt-payoff-calculator', label: 'Debt payoff calculator', note: 'Two to four balances and an extra payment aimed at one of them. Not a limit ratio.' },
      { slug: 'apr-calculator', label: 'APR calculator', note: 'A loan APR that includes a prepaid charge. A card’s utilization does not need that APR.' }
    ]
  }),
  'irs-mileage-reimbursement-calculator': page({
    slug: 'irs-mileage-reimbursement-calculator',
    title: 'IRS Mileage Reimbursement Calculator for 2026 | ClearCalc',
    h1: 'IRS Mileage Reimbursement Calculator for 2026',
    description: 'IRS mileage calculator for 2026. Business is 72.5 cents from 1 January through 30 June and 76 cents from 1 July, per IR-2025-128 and IR-2026-29. Charity stays at 14 cents. One hundred business miles in the first half are $72.50.',
    intro: [
      'This IRS mileage calculator multiplies miles by the standard mileage rate for the 2026 period you choose. From 1 January through 30 June, business is 72.5 cents, charity is 14 cents, and medical or military moving is 20.5 cents. From 1 July through 31 December, business is 76 cents, charity is still 14 cents, and medical or military moving is 23.5 cents. One hundred business miles in the first half are $72.50. Ten business miles on 1 July are $7.60.',
      'A trip date in 2026 selects the half-year. A blank date uses the period menu. The medical rate and the moving rate are the same number, and the IRS limits the moving use to active-duty military members under orders. This page labels that choice as military moving so it is not read as a general moving deduction.',
      'The amount is an estimate of the standard rate, not a reimbursement an employer must pay and not the deduction on a return that uses actual expenses. The gas-mileage page is fuel economy, miles per gallon. The IRS RMD page is a retirement distribution. Neither is this rate.'
    ],
    steps: [
      'Enter the miles. The sample is 100.',
      'Choose business, charity, medical, or military moving.',
      'Leave the date blank and choose the half-year, or enter a 2026 date. A date overrides the menu. 30 June is the first rate. 1 July is the second.',
      'Press Calculate. The headline is miles times the rate, rounded to the cent.'
    ],
    howHeading: 'How the 2026 mid-year mileage rates are chosen',
    howItWorks: [
      'IR-2025-128 set the rates for 1 January through 30 June 2026: 72.5 cents business, 14 cents charity, and 20.5 cents medical or military moving. IR-2026-29 set the rates for 1 July through 31 December 2026: 76 cents business, 14 cents charity, and 23.5 cents medical or military moving. Charity does not change at mid-year.',
      'If you type a date, the month decides the half. June is the first card. July is the second. A date outside 2026 is rejected. The page does not look up a route. You type the miles. Actual oil, tires, and depreciation are an alternative to the business standard rate, not a line here.'
    ],
    formula: 'Amount = miles × rate, rounded to the cent\n1 January–30 June 2026: business 72.5¢, charity 14¢, medical or military moving 20.5¢\n1 July–31 December 2026: business 76¢, charity 14¢, medical or military moving 23.5¢\nA 2026 date overrides the period menu',
    formulaNotes: [
      'Sources are the IRS standard mileage rates page, news release IR-2025-128, and news release IR-2026-29. The rates were rechecked for this 19 November 2026 page against those published figures.',
      'The moving rate is the military rate the IRS states. It is not a deduction for a civilian household move.'
    ],
    examplesHeading: 'Worked 2026 mileage examples',
    samples: [
      { title: '100 business miles, January through June', overrides: {}, blurb: 'The first-half business rate is 72.5 cents. One hundred miles are $72.50.' },
      { title: '10 business miles on 1 July 2026', overrides: { miles: 10, tripdate: '2026-07-01' }, blurb: 'The date is on or after 1 July, so the business rate is 76 cents even if the period menu still says the first half. Ten miles are $7.60.' },
      { title: '100 charity miles in either half', overrides: { purpose: 2, period: 2 }, blurb: 'Charity is 14 cents all year. One hundred miles are $14.00 in the second half, the same as in the first.' }
    ],
    table: { heading: 'Mileage amounts on this page', caption: 'Each headline is this calculator. A date in 2026 overrides the period menu.', headers: ['Case', 'Headline'] },
    limitsHeading: 'What the standard mileage amount is not',
    limits: [
      'It is not tax advice and it is not an employer’s reimbursement policy. An employer may pay a different rate. The IRS rate is the standard optional amount for the uses the IRS describes.',
      'Military moving uses the medical rate. A civilian move does not get that rate on this page. Choose military moving only when the IRS military condition applies.',
      'The gas-mileage calculator converts distance and fuel into miles per gallon. It does not multiply by 72.5 cents. This page does not compute fuel economy.',
      'Miles are whatever you type. The page does not call a mapping service. A date outside 2026 is rejected rather than assigned to a neighboring year.'
    ],
    disclaimer: 'This mileage amount is the IRS standard rate times the miles you type. It is not tax advice and not a required employer reimbursement.',
    faqs: [
      { q: 'What is the IRS business mileage rate for the first half of 2026?', a: '72.5 cents per mile from 1 January through 30 June, in IR-2025-128. One hundred business miles are $72.50. From 1 July the business rate is 76 cents, in IR-2026-29.' },
      { q: 'Does the charity mileage rate change on 1 July 2026?', a: 'No. Charity is 14 cents per mile in both halves of 2026. Business, medical, and military moving change. One hundred charity miles are $14.00 on either side of 1 July.' },
      { q: 'Who can use the IRS moving mileage rate in 2026?', a: 'The IRS states the moving rate for active-duty military members moving under orders. It is the same cent amount as the medical rate, 20.5 cents and then 23.5 cents. This page does not apply it to a general civilian move.' },
      { q: 'How is this different from the gas mileage calculator?', a: 'Gas mileage is distance divided by fuel, in miles per gallon. This page multiplies miles by an IRS cent rate. The IRS RMD calculator is a retirement distribution, not a mileage rate either.' }
    ],
    relatedLinks: [
      { slug: 'gas-mileage-calculator', label: 'Gas mileage calculator', note: 'Miles per gallon from a trip and the fuel used. Not the IRS cent rate.' },
      { slug: 'fuel-cost-calculator', label: 'Fuel cost calculator', note: 'A fuel price times gallons. It does not use 72.5 cents or 76 cents a mile.' },
      { slug: 'irs-rmd-calculator', label: 'IRS RMD calculator', note: 'A required minimum distribution. The letters IRS are the only overlap.' },
      { slug: 'us-self-employment-tax-calculator', label: 'US self-employment tax calculator', note: 'Schedule SE on net profit. Business miles are not subtracted here and are not added there.' }
    ]
  }),
  'download-time-calculator': page({
    slug: 'download-time-calculator',
    title: 'Download Time Calculator: MB, MiB, and Mbps | ClearCalc',
    h1: 'Download Time Calculator',
    description: 'Download time calculator that keeps decimal MB apart from MiB and megabits per second apart from megabytes per second. One hundred MiB at 100 Mbps takes 8.39 seconds. This is not a speed test.',
    intro: [
      'This download time calculator divides a file size by a connection speed and shows the unit trap that makes the result eight times too short or too long. The sample is 100 MiB at 100 megabits per second. A mebibyte is 1,048,576 bytes. A megabit is one million bits. The transfer takes 8.39 seconds. Reading those same digits as megabytes per second would finish eight times sooner, and that reading is the mistake.',
      'MB and GB on this page are powers of 1,000. MiB and GiB are powers of 1,024. Megabits per second and gigabits per second are decimal bit rates. Megabytes per second and mebibytes per second are byte rates, converted to bits by multiplying by 8. The formula is seconds = bytes × 8 / bits per second.',
      'The bandwidth page is the more general transfer-time tool, with kilobits and bytes per second as well. This page is the narrower job of not confusing MB with Mb. It is not a speed test, and it does not apply a data cap or protocol overhead.'
    ],
    steps: [
      'Enter the file size and choose MB, MiB, GB, or GiB. The sample size is 100 MiB.',
      'Enter the speed and choose Mbps, MB/s, MiB/s, or Gbps. The sample is 100 Mbps.',
      'Press Calculate. The headline is the time. The byte count, the bit rate, and the mistaken-unit time are underneath.',
      'If the connection is advertised in megabits, leave the speed unit on Mbps. A file manager that says MB/s is a byte rate and needs the megabytes-per-second choice.'
    ],
    howHeading: 'How MB, MiB, and Mbps change the time',
    howItWorks: [
      'Convert the size to bytes with either 1,000 or 1,024. Convert the speed to bits per second. Divide the bit count of the file by that rate. One hundred MiB is 104,857,600 bytes, or 838,860,800 bits. At 100,000,000 bits per second the unrounded time is 8.3886 seconds, and the headline rounds the clock display.',
      'A megabyte per second is eight megabits per second. Choosing MB/s when the line is really Mbps makes the page finish the file eight times too quickly, and the detail line shows that shorter time so the mix-up is visible. Overhead, retransmission, and a speed that is not sustained are not subtracted.'
    ],
    formula: 'Bytes = size × 1,000,000 for MB, or size × 1,048,576 for MiB\nBits per second = megabits × 1,000,000, or megabytes per second × 8 × 1,000,000\nSeconds = bytes × 8 / bits per second\nA mebibyte per second uses 1,048,576 bytes',
    formulaNotes: [
      'The headline for a transfer under a minute shows hundredths of a second. Longer transfers are rounded to the nearest second and split into days, hours, and minutes.',
      'Gigabits per second are decimal billions of bits. A gibibyte of file is 1,024 mebibytes, not 1,000 megabytes.'
    ],
    examplesHeading: 'Worked download-time examples',
    samples: [
      { title: '100 MiB at 100 Mbps', overrides: {}, blurb: 'The sample. Binary mebibytes over a decimal megabit rate. The mistaken megabyte-per-second reading is also shown.' },
      { title: '100 MB at 100 Mbps', overrides: { sizeunit: 1 }, blurb: 'Decimal megabytes are a little smaller than mebibytes, so the same 100 Mbps line is slightly quicker than the sample.' },
      { title: '1 GiB at 100 MB/s', overrides: { size: 1, sizeunit: 4, speed: 100, speedunit: 2 }, blurb: 'The speed is a byte rate. Multiplying by 8 happens inside the formula. Treating 100 MB/s as 100 Mbps would make the transfer eight times longer.' }
    ],
    table: { heading: 'Download times', caption: 'Each headline is this calculator. The detail lines separate the correct unit from the eight-times mix-up.', headers: ['Case', 'Headline'] },
    limitsHeading: 'What this transfer time leaves out',
    limits: [
      'It is not a speed test. The speed is a number you type. The page does not contact a server or measure your line.',
      'Protocol overhead, Wi-Fi retries, and a data cap are not applied. A real download is often slower than size divided by the advertised rate.',
      'The bandwidth calculator covers more units, including kilobits and bytes per second. This page is the MB versus Mbps distinction, not a second copy of every unit.',
      'A zero size or a zero speed is rejected. Time would be zero or undefined, and neither is a useful headline.'
    ],
    disclaimer: 'This time is file size divided by a speed you type. It is not a measured download and not a data-cap plan.',
    faqs: [
      { q: 'How long does 100 MiB take at 100 Mbps?', a: `About 8.39 seconds. One hundred mebibytes is 838,860,800 bits, and 100 Mbps is 100,000,000 bits per second. The headline is ${run('download-time-calculator').headline}.` },
      { q: 'Why is a megabyte per second eight times a megabit per second?', a: 'A byte is 8 bits. A speed advertised in megabits has to be divided by 8 before it can be compared with a file size in megabytes. Mixing them changes the time by a factor of eight.' },
      { q: 'Is an MB the same size as an MiB?', a: 'Not on this page. An MB is 1,000,000 bytes. An MiB is 1,048,576 bytes. A 100 MiB file is larger than a 100 MB file, so it takes slightly longer at the same bit rate.' },
      { q: 'Does this download time calculator run a speed test?', a: 'No. You type the speed. The bandwidth page is the broader transfer-time tool. Neither page measures the connection or applies a monthly data cap.' }
    ],
    relatedLinks: [
      { slug: 'bandwidth-calculator', label: 'Bandwidth calculator', note: 'File size and speed in a wider set of units, including kilobits and bytes per second. This page isolates MB versus Mbps.' },
      { slug: 'time-span-calculator', label: 'Time duration calculator', note: 'A length of time you already know. It does not divide a file by a bit rate.' },
      { slug: 'speed-converter', label: 'Speed converter', note: 'Miles per hour and kilometres per hour. Not megabits per second.' },
      { slug: 'measurement-converter', label: 'Measurement converter', note: 'Length, weight, and temperature. A file size is not one of those dimensions.' }
    ]
  }),
  'cooking-unit-converter': page({
    slug: 'cooking-unit-converter',
    title: 'Cooking Unit Converter: Cups, Spoons, and Approximate Grams | ClearCalc',
    h1: 'Cooking Unit Converter',
    description: 'Cooking unit converter for exact US kitchen volumes and approximate grams. One gallon is 16 cups. One cup of all-purpose flour is about 120 grams on the King Arthur chart. Ingredient masses are not exact legal units.',
    intro: [
      'This cooking converter does two jobs and labels them separately. The volume choice uses exact US customary ratios: 1 gallon is 4 quarts, 8 pints, 16 cups, 128 fluid ounces, 256 tablespoons, and 768 teaspoons. One US fluid ounce is 29.5735295625 millilitres, so one US cup is 236.5882365 millilitres. One gallon converts to 16 cups.',
      'The mass choice multiplies those cups by a published gram weight for water, granulated white sugar, or all-purpose flour. Water is 1 gram per millilitre, so a US cup of water is 236.5882365 grams. King Arthur Baking’s ingredient weight chart, read on 19 November 2026, lists 198 grams for a cup of granulated white sugar and 120 grams for a cup of all-purpose flour measured by their fluff, spoon, and level method.',
      'Those gram figures are approximate kitchen weights. A scooped cup of flour can weigh more than 120 grams. They are not exact conversions and they are not legal metrology units. The general measurement converter does not carry cup weights. An imperial pint and a 250 millilitre metric cup are different volumes and are not hidden inside these US ratios.'
    ],
    steps: [
      'Choose exact volume or approximate ingredient mass.',
      'Enter the amount and the unit you have. The sample volume is 1 cup, converted to millilitres.',
      'For a volume conversion, choose the unit you want. For a mass estimate, choose water, granulated white sugar, or all-purpose flour. The “to” unit is ignored in the mass choice.',
      'Press Calculate. The headline is the converted volume or the gram estimate. The page says which choice it used.'
    ],
    howHeading: 'How exact volumes differ from cup weights',
    howItWorks: [
      'Every US volume is turned into fluid ounces with a whole-number ratio, then into the unit you asked for. Teaspoons, tablespoons, cups, pints, quarts, and gallons stay exact. Millilitres use the US fluid-ounce definition. A metric cup of 250 millilitres is not substituted.',
      'The mass choice first does that volume conversion into US cups, then multiplies by the grams per cup. Flour at 120 grams and sugar at 198 grams are the King Arthur chart rows, not a USDA legal standard and not a guarantee of what your cup weighs. Water follows the volume because its density is taken as 1 gram per millilitre.'
    ],
    formula: '1 gallon = 4 quarts = 8 pints = 16 cups = 128 fl oz = 256 tbsp = 768 tsp\n1 US fl oz = 29.5735295625 mL\n1 US cup = 236.5882365 mL\nGrams = US cups × grams per cup\nWater 236.5882365 g, sugar 198 g, all-purpose flour 120 g',
    formulaNotes: [
      'The sugar and flour numbers are King Arthur Baking, Ingredient Weight Chart, as published when this page was written on 19 November 2026. Flour assumes the chart’s 120 gram cup, not a packed scoop.',
      'Volume mode does not use the ingredient menu. Mass mode does not use the “to” menu. Switching modes is the only way to change which result is the headline.'
    ],
    examplesHeading: 'Worked cooking conversions',
    samples: [
      { title: '1 cup to millilitres', overrides: {}, blurb: 'Exact US volume. One cup is 8 fluid ounces and 236.5882365 millilitres. No ingredient weight is involved.' },
      { title: '1 gallon to cups', overrides: { amount: 1, from: 8, to: 3 }, blurb: 'The gallon-to-cup ratio is 16 exactly. This is the check that the spoon and cup chain has not drifted.' },
      { title: '1 cup of all-purpose flour in grams', overrides: { mode: 2, ingredient: 3 }, blurb: 'Approximate mass. The King Arthur chart’s 120 grams per cup is labeled as a kitchen weight, not an exact unit.' }
    ],
    table: { heading: 'Cooking results', caption: 'Volume rows are exact US ratios. The flour row is the approximate cup weight.', headers: ['Case', 'Headline'] },
    limitsHeading: 'What this kitchen conversion does not claim',
    limits: [
      'Ingredient grams are approximate. They depend on how the cup was filled and on the ingredient. They are not exact legal units and they are not a nutrition-label serving.',
      'An imperial pint is 20 imperial fluid ounces, not 16 US fluid ounces. A metric cup is often 250 millilitres. Neither is a choice here.',
      'The measurement converter handles metres, grams of mass you already know, and temperatures. It does not know that a cup of flour is about 120 grams.',
      'The page converts a quantity. It does not scale a whole recipe’s ingredient list or adjust for altitude.'
    ],
    disclaimer: 'Volume ratios are exact US kitchen measures. Ingredient masses are approximate published cup weights, not exact conversions and not nutrition advice.',
    faqs: [
      { q: 'How many cups are in a US gallon?', a: 'Sixteen. One gallon is also 4 quarts, 8 pints, 128 fluid ounces, 256 tablespoons, and 768 teaspoons. Those ratios are exact on the volume choice.' },
      { q: 'How many grams are in a cup of all-purpose flour?', a: 'About 120 grams on the King Arthur Baking ingredient weight chart read for this page, using their spoon-and-level cup. A scooped cup can weigh more. The figure is approximate.' },
      { q: 'How many grams of granulated sugar are in a US cup?', a: 'About 198 grams on the same King Arthur chart for granulated white sugar. It is not a legal mass, and a different sugar or a heaped cup will not match.' },
      { q: 'Is a US cup 250 millilitres?', a: 'No. A US cup is 236.5882365 millilitres, from 8 US fluid ounces. A 250 millilitre metric cup is a different measure and is not what this page uses.' }
    ],
    relatedLinks: [
      { slug: 'measurement-converter', label: 'Measurement converter', note: 'General units. It does not apply a 120 gram cup of flour.' },
      { slug: 'volume-calculator', label: 'Volume calculator', note: 'A box, cylinder, sphere, or cone. A cup measure is not that solid.' },
      { slug: 'weight-converter', label: 'Weight converter', note: 'Kilograms and pounds of a mass you already know. It does not start from a cup of flour.' },
      { slug: 'tank-volume-calculator', label: 'Tank volume calculator', note: 'Gallons in a tank. A kitchen cup is a much smaller US volume, converted on this page.' }
    ]
  }),
  'dog-age-calculator': page({
    slug: 'dog-age-calculator',
    title: 'Dog Age Calculator: Human Years without Multiplying by 7 | ClearCalc',
    h1: 'Dog Age Calculator',
    description: 'Dog age calculator using 16 × ln(dog years) + 31, the Labrador epigenetic formula from Wang et al., Cell Systems, 2020. A 2-year-old dog is about 42 human years. Multiplying by 7 is rejected as inaccurate. Not veterinary advice.',
    intro: [
      'This dog age calculator uses a published formula instead of multiplying by 7. The formula is 16 times the natural logarithm of the dog’s age in years, plus 31. It comes from Wang, et al., “Quantitative Translation of Dog-to-Human Aging by Conserved Remodeling of the DNA Methylome,” Cell Systems, 2 July 2020, and it was fit to Labrador retrievers. A 2-year-old dog is about 42.1 human years. A 7-year-old dog is about 62.1. Multiplying by 7 would say 14 and 49, and those answers are shown only as the rule this page refuses.',
      'The logarithm rises quickly at first and then slows, which is why the first two dog years are not fourteen human years. The same curve is a poor precision tool for a giant breed or a toy breed, because size changes lifespan and this form does not ask for a weight. It is an estimate of the published Labrador translation, not an exam.',
      'The human age calculator on this site counts civil years, months, and days from a birthday. It does not use a logarithm and it does not describe a dog. This page is not veterinary advice and it does not set a vaccine date.'
    ],
    steps: [
      'Enter the dog’s age in years. Decimals are allowed. The sample is 2. The range is just above 0 through 25.',
      'Do not multiply by 7 first. The page does that only to show the number it is not using.',
      'Press Calculate. The headline is the human-year estimate to one decimal place.',
      'Read the limitation. The curve is a Labrador methylation study, not a breed chart and not a diagnosis.'
    ],
    howHeading: 'Why the dog-age formula is not “times 7”',
    howItWorks: [
      'Take the natural log of the age, multiply by 16, and add 31. At 1 year the log is 0, so the result is 31. At 2 years the log of 2 is about 0.693, and 16 times that plus 31 is about 42.1. The times-7 rule would still be at 14. The gap is the reason the old rule is labeled inaccurate.',
      'Ages at or below zero are rejected because the logarithm is undefined. Ages above 25 are rejected as outside a reasonable use of the curve. A fraction of a year is allowed, which is not the same thing as sending the age through the gamma function. This is a dog-age estimate only.'
    ],
    formula: 'Human-year estimate = 16 × ln(dog years) + 31\nDog years must be greater than 0 and at most 25\nThe × 7 rule is displayed and not used\nSource: Wang et al., Cell Systems, 2 July 2020, Labrador retriever methylation',
    formulaNotes: [
      'The headline rounds to one decimal. The detail line keeps two decimals of the same product. A 7-year-old dog is 62.1 on the headline.',
      'AAHA life-stage guidelines describe puppy, young adult, mature, and senior care. They are not this logarithm, and this page does not pretend the formula is an AAHA chart.'
    ],
    examplesHeading: 'Worked dog-age examples',
    samples: [
      { title: 'A 2-year-old dog', overrides: {}, blurb: 'The sample. The log formula is about 42 human years. Multiplying by 7 would say 14, and that answer is rejected.' },
      { title: 'A 7-year-old dog', overrides: { years: 7 }, blurb: 'About 62 human years. The times-7 rule would say 49. The formula has already slowed down by this age.' },
      { title: 'A 1-year-old dog', overrides: { years: 1 }, blurb: 'The log of 1 is 0, so the formula returns 31. That first-year jump is the clearest break from “one dog year equals seven human years.”' }
    ],
    table: { heading: 'Dog-age estimates', caption: 'Each headline is 16 × ln(age) + 31. The times-7 figure is in the detail lines and is not the result.', headers: ['Case', 'Headline'] },
    limitsHeading: 'What this dog-age estimate cannot do',
    limits: [
      'It is one Labrador curve. Smaller dogs often live longer than giant breeds. A weight or a breed is not an input, so the number is not a size chart.',
      'It is not veterinary advice. It does not diagnose disease, choose a diet, or replace an exam. The human age calculator is a civil birthday count and is not a substitute.',
      'Puppies under one year are inside the mathematics and outside a careful clinical reading of the 2020 paper. Treat a fraction of a year as a rough illustration.',
      'Multiplying by 7 is shown so it can be refused. It is never the headline.'
    ],
    disclaimer: 'This dog-age figure is a published epigenetic translation for Labrador retrievers, not veterinary advice and not a breed chart.',
    faqs: [
      { q: 'How old is a 2-year-old dog in human years on this calculator?', a: `About 42.1, shown as ${run('dog-age-calculator').headline}. The formula is 16 × ln(2) + 31. Multiplying by 7 would say 14, and that rule is not used.` },
      { q: 'Why does the dog age calculator reject multiplying by 7?', a: 'The rule treats every dog year as the same seven human years. The methylation study shows a fast early rise and a slower later rise. A 1-year-old dog is 31 on the formula, not 7.' },
      { q: 'Does this dog age formula apply to every breed?', a: 'It was fit to Labrador retrievers. Size and breed change lifespan. The page states that limit and does not invent a separate curve for a toy dog or a giant breed.' },
      { q: 'Is the dog age result veterinary advice?', a: 'No. It is an arithmetic reading of one published formula. It does not examine the dog. The human age page counts calendar years from a birthday and is a different job.' }
    ],
    relatedLinks: [
      { slug: 'age-calculator', label: 'Age calculator', note: 'Civil years, months, and days for a person. No logarithm and no dog.' },
      { slug: 'pregnancy-due-date-calculator', label: 'Pregnancy due date calculator', note: 'A human due date from a last menstrual period. Not a pet age.' },
      { slug: 'ideal-weight-calculator', label: 'Ideal weight calculator', note: 'Devine, Robinson, and Miller for a person. Not a dog’s healthy weight.' },
      { slug: 'bmi-calculator', label: 'BMI calculator', note: 'Adult body mass index. It is not a canine body condition score.' }
    ]
  }),
  'brick-calculator': page({
    slug: 'brick-calculator',
    title: 'Brick Calculator: Wall Count with Mortar and Waste | ClearCalc',
    h1: 'Brick Calculator',
    description: 'Brick calculator for how many bricks a wall needs. A 10 by 8 foot wall with a 7.625 by 2.25 inch brick and a 0.375 inch joint is 549 bricks before waste, and 604 after 10% waste. The count rounds up.',
    intro: [
      'This brick calculator divides the wall area by the face of one brick including the mortar joint, then adds a waste percentage and rounds up. The sample wall is 10 feet long and 8 feet high. The sample brick is 7.625 inches by 2.25 inches with a 0.375 inch joint, so the face that gets laid is 8 inches by 2.625 inches, 21 square inches. The wall is 11,520 square inches. That is 548.57 bricks, which rounds up to 549 before waste.',
      'Ten percent waste multiplies 548.57 by 1.10, which is 603.43, and the count rounds up to 604. Waste covers cuts and breakage. It does not measure a window you forgot to subtract. Openings stay in the area unless you shrink the length or height yourself.',
      'The square-footage page reports the wall’s area and stops. The concrete page turns a slab into cubic yards. The roofing page counts shingle bundles on a pitched roof. None of those is a brick count. This page is the count only.'
    ],
    steps: [
      'Enter the wall length and height in feet. The sample is 10 by 8.',
      'Enter the brick length and height in inches, and the mortar joint in inches. The sample is 7.625, 2.25, and 0.375.',
      'Enter a waste percentage from 0 to 100. The sample is 10. Use 0 if you want the raw count rounded up.',
      'Press Calculate. The headline is the whole number of bricks to buy.'
    ],
    howHeading: 'How the brick count uses the joint',
    howItWorks: [
      'The wall is converted to square inches. Each brick’s laid face is (length + joint) times (height + joint). Divide the wall by that face. Multiply by 1 plus the waste percentage. Round up, with a tiny tolerance so a value that is already a whole number does not gain an extra brick from binary dust.',
      'A modular brick with a 3/8 inch joint is the sample, not a rule the page forces. Type the brick you are buying. A rowlock course, a corner counted twice, and a different cap brick are not extra rows. Subtract openings from the rectangle before you trust the count.'
    ],
    formula: 'Wall area in square inches = length in feet × 12 × height in feet × 12\nFace = (brick length + joint) × (brick height + joint)\nRaw count = wall area / face\nWith waste = raw count × (1 + waste / 100)\nBricks to buy = round up',
    formulaNotes: [
      'The 10 by 8 foot sample with a 21 square inch face is 11,520 / 21 = 548.571 bricks, which rounds up to 549. With 10% waste the unrounded count is 603.429 and the purchase count is 604.',
      'Length and height are feet. Brick and joint are inches. Mixing those units without the conversion would be off by a factor of 144, so the page converts the wall first.'
    ],
    examplesHeading: 'Worked brick examples',
    samples: [
      { title: '10 by 8 feet, 10% waste', overrides: {}, blurb: 'The sample modular face of 21 square inches. Waste lifts 549 bricks to 604.' },
      { title: 'The same wall with no waste', overrides: { waste: 0 }, blurb: 'The raw division rounds up to 549. Nothing is added for cuts.' },
      { title: 'A 20 foot wall, same brick and 10% waste', overrides: { length: 20 }, blurb: 'Doubling the length doubles the area. The rounded count is not always exactly double, because each result rounds up on its own.' }
    ],
    table: { heading: 'Brick counts', caption: 'Each headline is this calculator, already rounded up.', headers: ['Case', 'Headline'] },
    limitsHeading: 'What the brick count does not include',
    limits: [
      'Windows, doors, and corners you did not remove are still inside the rectangle. The page does not draw the wall.',
      'It is not square footage, not a concrete volume, and not a roofing bundle count. Those pages stop at their own units.',
      'A soldier course, a header course, and brick on the flat use a different face. Type the face that is actually exposed, including the joint you will lay.',
      'Waste above 100% is rejected. A zero joint is allowed and means the bricks are counted tight, which understates a real mortar joint.'
    ],
    disclaimer: 'This brick count is area divided by the laid face, plus waste. It is not a mason’s order and it does not see openings you leave in the rectangle.',
    faqs: [
      { q: 'How many bricks are in a 10 by 8 foot wall with a 3/8 inch joint?', a: `Using a 7.625 by 2.25 inch brick, the laid face is 21 square inches and the wall needs 549 bricks before waste. With 10% waste the headline is ${run('brick-calculator').headline}.` },
      { q: 'Does the brick calculator round up?', a: 'Yes. A fraction of a brick is still a brick you have to buy. The unrounded count is in the detail lines. The headline is the next whole brick when the division is not exact.' },
      { q: 'How is a brick count different from square footage?', a: 'Square footage is the wall area. This page divides that area by one brick’s face, including mortar, and adds waste. The square-footage page does not know a joint.' },
      { q: 'Should I subtract windows before using the brick count?', a: 'Yes, if you want the net wall. The calculator multiplies the length and height you type. An opening left inside that rectangle is counted as brick.' }
    ],
    relatedLinks: [
      { slug: 'square-footage-calculator', label: 'Square footage calculator', note: 'The area of a rectangle. It does not divide by a brick face.' },
      { slug: 'concrete-slab-calculator', label: 'Concrete slab calculator', note: 'Cubic yards and bags. A brick wall is not a slab volume.' },
      { slug: 'roofing-calculator', label: 'Roofing calculator', note: 'Shingle bundles from a footprint and a pitch. A different material and a different job.' },
      { slug: 'floor-tile-calculator', label: 'Floor tile calculator', note: 'Tiles from a floor and a grout joint. The arithmetic is similar and the units are a floor, not a brick wall.' }
    ]
  }),
  'tank-volume-calculator': page({
    slug: 'tank-volume-calculator',
    title: 'Tank Volume Calculator: Rectangle and Cylinder | ClearCalc',
    h1: 'Tank Volume Calculator',
    description: 'Tank volume calculator for a rectangle, a vertical cylinder, or a horizontal cylinder, in US gallons and litres. A horizontal cylinder that is half full holds half of πr² times the length. Not a pool and not a chemical dose.',
    intro: [
      'This tank calculator reports liquid volume for three shapes. A rectangle is length times width times the liquid depth. A vertical cylinder is π times the radius squared times the liquid depth. A horizontal cylinder uses the circular-segment formula so a partly filled tank is not treated as a box. Results are in US gallons and litres. A US gallon is 3.785411784 litres.',
      'Leave the liquid depth at 0 to treat the tank as full. The sample rectangle is 24 by 18 by 36 inches and full. A horizontal cylinder is checked two ways on this page: completely full equals πr² times the length, and half full equals exactly half of that, because the segment formula at the radius returns a semicircle.',
      'The pool-volume page is a pool, with average depth and pool shapes. The generic volume page is a box, cylinder, sphere, or cone in cubic units. This page is a tank of liquid, and it does not compute a chemical dose.'
    ],
    steps: [
      'Choose a rectangle, a vertical cylinder, or a horizontal cylinder, and choose inches, feet, or centimetres.',
      'For a rectangle, enter length, width, and height. For a cylinder, the first dimension is the diameter. The third dimension is the height of a vertical tank or the length of a horizontal tank. Width is ignored for a cylinder.',
      'Enter the liquid depth, or leave 0 for a full tank. The depth cannot exceed the tank.',
      'Press Calculate. The headline is US gallons. Litres are underneath.'
    ],
    howHeading: 'How a horizontal tank is different from a vertical one',
    howItWorks: [
      'A vertical cylinder keeps a circular top, so the volume grows in a straight line with the fill height. A horizontal cylinder’s surface is the curved wall. The filled area of the circle is r² × arccos((r − h) / r) − (r − h) × √(2rh − h²), and that area is multiplied by the tank’s length.',
      'At h = 0 the area is zero. At h = r the arccos term is π/2 and the second term is zero, so the area is a semicircle and the volume is half the full cylinder. At h = 2r the area is the full circle. Those three points are the test that the segment formula was implemented in the right direction.'
    ],
    formula: 'Rectangle = length × width × liquid depth\nVertical cylinder = π × radius² × liquid depth\nHorizontal segment = r² × arccos((r − h) / r) − (r − h) × √(2rh − h²)\nHorizontal volume = segment × tank length\nUS gallons = cubic centimetres / 3,785.411784\nA depth of 0 means full',
    formulaNotes: [
      'Dimensions are converted to centimetres first. An inch is 2.54 centimetres and a foot is 30.48. The litre is the cubic centimetre count divided by 1,000.',
      'Half of a horizontal cylinder is exactly half the full volume in this formula. A rectangular tank at half depth is also half, but for the simpler reason that depth is linear.'
    ],
    examplesHeading: 'Worked tank-volume examples',
    samples: [
      { title: 'A full 24 by 18 by 36 inch rectangle', overrides: {}, blurb: 'The sample box, filled to the top because the depth is 0. Gallons and litres both come from that one volume.' },
      { title: 'A horizontal cylinder, 24 inch diameter and 48 inch length, half full', overrides: { shape: 3, a: 24, b: 0, c: 48, fill: 12 }, blurb: 'The fill is the radius. The segment is a semicircle, so the volume is half of the full cylinder.' },
      { title: 'The same horizontal cylinder, full', overrides: { shape: 3, a: 24, b: 0, c: 48, fill: 0 }, blurb: 'Depth 0 means full. The volume is πr² times the length, and it is twice the half-full result.' }
    ],
    table: { heading: 'Tank volumes', caption: 'The headline is US gallons. A depth of 0 means the tank is full.', headers: ['Case', 'Headline'] },
    limitsHeading: 'What this tank volume does not do',
    limits: [
      'It is not a pool. The pool page uses pool shapes and an average depth. A chemical dose for a pool is not computed on either page.',
      'Dish ends, conical bottoms, and internal baffles are not in the three formulas. A real tank with domed ends holds a different volume.',
      'The generic volume calculator reports cubic units for a box, cylinder, sphere, or cone. It does not apply the horizontal-cylinder segment.',
      'Liquid depth above the tank is rejected. A depth of 0 is the full-tank shortcut, not an empty tank. Type a very small depth if you want nearly empty.'
    ],
    disclaimer: 'This volume is the geometric liquid capacity of the shape you chose. It is not a chemical dose and not a pool calculation.',
    faqs: [
      { q: 'How is a horizontal cylindrical tank measured when it is partly full?', a: 'With the circular segment r² × arccos((r − h) / r) − (r − h) × √(2rh − h²), times the length. At half full that segment is a semicircle, so the volume is exactly half the full tank.' },
      { q: 'What does a liquid depth of 0 mean on the tank calculator?', a: 'Full. The page uses the tank’s own height or diameter. It is not an empty tank. An empty reading would be a volume of zero, which is not a useful default.' },
      { q: 'Is this tank volume the same as the pool volume calculator?', a: 'No. The pool page is a pool with its own shapes and an average depth. This page is a rectangular tank or a cylinder, including a horizontal cylinder, in gallons and litres. Neither page doses a chemical.' },
      { q: 'How many litres are in a US gallon on this page?', a: '3.785411784 litres. The gallon in the headline is the cubic-centimetre volume divided by that constant. Cubic inches are not a separate headline.' }
    ],
    relatedLinks: [
      { slug: 'pool-volume-calculator', label: 'Pool volume calculator', note: 'A pool, not a closed tank. No chemical dose on either page.' },
      { slug: 'volume-calculator', label: 'Volume calculator', note: 'A box, vertical cylinder, sphere, or cone in cubic units. No horizontal-cylinder segment.' },
      { slug: 'concrete-slab-calculator', label: 'Concrete slab calculator', note: 'Cubic yards of a slab. Not a liquid tank.' },
      { slug: 'cooking-unit-converter', label: 'Cooking unit converter', note: 'Cups and teaspoons. A tank’s gallons are a different scale of the same US gallon.' }
    ]
  }),
  'water-intake-calculator': page({
    slug: 'water-intake-calculator',
    title: 'Water Intake Calculator: A Planning Range, Not a Prescription | ClearCalc',
    h1: 'Water Intake Calculator',
    description: 'Water intake calculator for a planning range from body weight and optional activity. About 30 to 35 millilitres per kilogram, plus 0.4 to 0.8 litres per hour of exercise. Seventy kilograms is 2.10 to 2.45 litres before activity. Not medical advice.',
    intro: [
      'This water calculator gives a planning range, not a prescribed amount. The weight line is a common clinical planning range of about 30 to 35 millilitres per kilogram of body weight per day. Seventy kilograms is 2,100 to 2,450 millilitres, or 2.10 to 2.45 litres, before any extra activity. Pounds are converted at 0.45359237 kilograms per pound.',
      'Optional activity adds the American College of Sports Medicine fluid-replacement range of about 0.4 to 0.8 litres per hour of exercise. Thirty minutes adds 200 to 400 millilitres on top of the weight range. Sweat rate and heat move people around inside that band, and some people should not use a high target at all.',
      'The National Academies of Sciences, Engineering, and Medicine Adequate Intakes, in Dietary Reference Intakes for Water, Potassium, Sodium, Chloride, and Sulfate (2005), are a different kind of number: 3.7 litres a day for men and 2.7 litres a day for women, from beverages and food together. They are not a per-kilogram formula, and this page does not replace them. It states them so the weight range is not mistaken for the Adequate Intake. The TDEE and macro pages are other planning tools. They do not set a fluid target.'
    ],
    steps: [
      'Choose kilograms or pounds and enter body weight. The sample is 70 kilograms.',
      'Enter extra activity in minutes if you want the exercise add-on, or leave 0. The maximum is 300 minutes.',
      'Press Calculate. The headline is the daily range in litres, including the activity add-on.',
      'Read the range as a planning band. It is not an instruction to drink that amount if a clinician has set a limit.'
    ],
    howHeading: 'How the planning range is built',
    howItWorks: [
      'Convert weight to kilograms. Multiply by 30 and by 35 to get the low and high millilitre targets before exercise. Add 400 millilitres per hour at the low end and 800 millilitres per hour at the high end. Divide by 1,000 for litres. Fluid ounces use the US fluid ounce of 29.5735295625 millilitres.',
      'The Adequate Intakes of 3.7 and 2.7 litres are printed as context. They include water in food, they are not split by body weight, and they are not the headline. Kidney disease, heart failure, pregnancy, and some medicines need a limit this product does not know.'
    ],
    formula: 'Low = 30 mL × kg + 400 mL × exercise hours\nHigh = 35 mL × kg + 800 mL × exercise hours\n1 pound = 0.45359237 kg\nAdequate Intakes, not used as the headline: 3.7 L men, 2.7 L women, beverages and food',
    formulaNotes: [
      'The 30 to 35 millilitre range is labeled as a common planning rule used in dietetic estimates. It is not the National Academies Adequate Intake and it is not a prescription.',
      'The activity add-on follows the ACSM position stand range of about 0.4 to 0.8 litres per hour. It is not a measured sweat rate.'
    ],
    examplesHeading: 'Worked fluid-planning examples',
    samples: [
      { title: '70 kilograms, no extra activity', overrides: {}, blurb: 'The weight range alone: 2.10 to 2.45 litres. The Adequate Intake numbers are in the details and are not the headline.' },
      { title: '70 kilograms and 30 minutes of activity', overrides: { activity: 30 }, blurb: 'Half an hour adds 0.20 to 0.40 litres. The range moves up by that band and the weight line does not change.' },
      { title: '154 pounds, no extra activity', overrides: { units: 2, weight: 154, activity: 0 }, blurb: 'One hundred fifty-four pounds is about 70 kilograms. The litre range should sit next to the 70 kilogram row, allowing for the exact pound conversion.' }
    ],
    table: { heading: 'Planning ranges', caption: 'Each headline is the litre range from this calculator. It is not a prescription.', headers: ['Case', 'Headline'] },
    limitsHeading: 'What this fluid range must not be used for',
    limits: [
      'It is not medical advice and not a prescription. People with kidney disease, heart failure, or a fluid restriction should use the limit they were given, not this product.',
      'The 3.7 litre and 2.7 litre Adequate Intakes are population reference values from the National Academies, including water in food. They are not what the headline calculates.',
      'The activity add-on is not a sweat-rate test. Heat, clothing, and fitness move the need. The TDEE and macro calculators plan energy and grams of food. They do not set this fluid range.',
      'Pregnancy, infancy, and older age are outside the simple per-kilogram band. The page does not ask for those conditions because it should not pretend to dose them.'
    ],
    disclaimer: 'This is a planning range from a weight rule and an exercise range. It is not medical advice and not a prescribed intake.',
    faqs: [
      { q: 'How much water does the planning range suggest for 70 kilograms?', a: `2.10 to 2.45 litres before extra activity, from 30 to 35 millilitres per kilogram. The headline is ${run('water-intake-calculator').headline}. The National Academies Adequate Intakes are a separate 3.7 and 2.7 litre reference and are not this result.` },
      { q: 'Does the water calculator add fluid for exercise?', a: 'Yes, if you type the minutes. It adds 0.4 to 0.8 litres per hour, the ACSM fluid-replacement range. Thirty minutes adds 200 to 400 millilitres. Leave the minutes at 0 to skip it.' },
      { q: 'Is 30 millilitres per kilogram the same as the Dietary Reference Intake?', a: 'No. The Dietary Reference Intake Adequate Intakes cited here are 3.7 litres a day for men and 2.7 litres a day for women, from food and beverages. The per-kilogram band is a labeled planning rule, not that Adequate Intake.' },
      { q: 'Should someone with a fluid restriction use this water range?', a: 'No. The page is not a prescription. A clinician’s limit for kidney disease, heart failure, or a similar condition replaces this planning range. The calculator cannot see that limit.' }
    ],
    relatedLinks: [
      { slug: 'tdee-calculator', label: 'TDEE calculator', note: 'A maintenance-energy estimate. It does not set a fluid target.' },
      { slug: 'macro-calculator', label: 'Macro calculator', note: 'Grams of protein, carbohydrate, and fat. Not millilitres of water.' },
      { slug: 'calorie-calculator', label: 'Calorie calculator', note: 'Mifflin–St Jeor maintenance calories. A different planning question.' },
      { slug: 'bmi-calculator', label: 'BMI calculator', note: 'A weight-for-height index. It is not a drinking target.' }
    ]
  }),
  'factorial-calculator': page({
    slug: 'factorial-calculator',
    title: 'Factorial Calculator: Exact n! for Whole Numbers | ClearCalc',
    h1: 'Factorial Calculator',
    description: 'Factorial calculator for n!, the product of the whole numbers from 1 through n. 10! is 3,628,800. 0! is 1. A fraction is rejected instead of being sent through the gamma function.',
    intro: [
      'This factorial calculator computes n! exactly. For a whole number n above zero, n! is n × (n − 1) × … × 1. The sample is 10!, which is 3,628,800. Zero factorial is 1, because there is one way to arrange an empty list. The product uses integers, so 20! is the full integer rather than a rounded scientific-notation guess.',
      'A value that is not a whole number is rejected. The gamma function extends factorial to fractions, and this page does not implement it and does not pretend a silent rounding is the same thing. Negative numbers are rejected. The upper limit is 1,000 so the page stays an exact product rather than an approximation.',
      'Permutations and combinations use factorials as parts of a larger count. That page asks for n and r and returns arrangements or selections. The big-integer calculator multiplies two numbers you type. Neither builds this running product for you.'
    ],
    steps: [
      'Enter a whole number from 0 to 1,000. The sample is 10.',
      'Do not enter a decimal. 5.5 is rejected rather than rounded to 5 or 6.',
      'Press Calculate. The headline is the exact value when it fits, or the number of digits when the integer is very long.',
      'The detail line shows the value, or the start of it plus the digit count when it is longer than 80 digits.'
    ],
    howHeading: 'How n! is defined on this page',
    howItWorks: [
      'Start at 1. Multiply by each integer from 2 through n. Zero skips the loop and stays 1. The multiplications are exact integer multiplications, not floating-point products, so a large factorial does not lose trailing digits.',
      'The permutation page uses n! / (n − r)!. The combination page divides further by r!. If you need one of those counts, use that page. If you need only the product, stay here. Stirling’s approximation is not used at any size.'
    ],
    formula: '0! = 1\nn! = n × (n − 1) × … × 1 for a whole n from 1 to 1,000\nA non-integer is rejected\nThe gamma function is not used',
    formulaNotes: [
      '10! = 3,628,800. 5! = 120. 0! = 1. 20! = 2,432,902,008,176,640,000. Those are exact.',
      'Headlines longer than 40 digits show the digit count instead of a comma-separated wall of numbers. The full value, or its first 40 digits and the length, is still in the details.'
    ],
    examplesHeading: 'Worked factorial examples',
    samples: [
      { title: '10!', overrides: {}, blurb: 'The sample product. Ten down to one is 3,628,800.' },
      { title: '0!', overrides: { n: 0 }, blurb: 'The empty product is 1. The page does not treat zero as an error.' },
      { title: '5!', overrides: { n: 5 }, blurb: 'Five times four times three times two times one is 120. A useful small check of the same loop that builds 10!.' }
    ],
    table: { heading: 'Factorials', caption: 'Each headline is the exact integer product, grouped with commas when it is short.', headers: ['Case', 'Headline'] },
    limitsHeading: 'What this factorial does not compute',
    limits: [
      'Fractions and negatives are rejected. There is no gamma-function mode. Rounding 5.5 to 6 would be a different problem, and the page will not do it quietly.',
      'Permutations and combinations are a different page. They need r as well as n. The big-integer calculator multiplies two numbers. It does not loop down to 1.',
      'The limit is 1,000. Beyond that the exact decimal is enormous and is not computed. Stirling’s approximation is not offered as a substitute.',
      'The result is a mathematical product. It is not a probability by itself. A probability page on this site is a separate tool.'
    ],
    disclaimer: 'This factorial is the exact product of the whole numbers from 1 through n, with 0! defined as 1. It is not the gamma function.',
    faqs: [
      { q: 'What is 10 factorial?', a: `3,628,800. The headline is ${run('factorial-calculator').headline}. The product is 10 × 9 × 8 × 7 × 6 × 5 × 4 × 3 × 2 × 1.` },
      { q: 'Why is 0 factorial equal to 1?', a: 'By definition, the empty product is 1. There is one way to order zero items. The calculator returns 1 for an input of 0 and does not treat it as a divide-by-zero.' },
      { q: 'What does the factorial calculator do with 5.5?', a: 'It rejects the input. A factorial on this page is defined for whole numbers. The gamma function is not calculated, and the page does not round 5.5 to 5 or 6.' },
      { q: 'How is n! different from a permutation?', a: 'n! is the product by itself. A permutation of n things taken r at a time is n! / (n − r)!. The permutation and combination page asks for both n and r. This page asks only for n.' }
    ],
    relatedLinks: [
      { slug: 'permutation-combination-calculator', label: 'Permutation and combination calculator', note: 'Arrangements and selections. They use factorials and also need r.' },
      { slug: 'big-integer-calculator', label: 'Big integer calculator', note: 'Add, subtract, or multiply two whole numbers you type. It does not build n!.' },
      { slug: 'exponent-calculator', label: 'Exponent calculator', note: 'A power, such as 2 to the 10th. A power is not a factorial.' },
      { slug: 'probability-calculator', label: 'Probability calculator', note: 'A probability model. A factorial may sit inside a count, but this page stops at n!.' }
    ]
  })
};
