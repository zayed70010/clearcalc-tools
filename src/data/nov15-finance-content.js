import { nov15Page as page } from './nov15-page.js';

export const nov15FinanceContent = {
  'loan-solver-calculator': page({
    slug: 'loan-solver-calculator',
    title: 'Loan Term and Rate Calculator | ClearCalc',
    h1: 'Loan Term and Rate Calculator',
    description: 'Solve a fixed loan for the payment, the number of payments, or the interest rate. $10,000 at 6% for 5 years, paid monthly, is $193.33 a payment.',
    intro: [
      'This page solves one of three unknowns on a fixed-rate loan: the payment, the number of payments, or the annual interest rate. The amount borrowed stays in its own box. The sample loan is $10,000 at 6% for 5 years, paid monthly, and the payment is $193.33.',
      'The frequency changes how the annual rate is split. Monthly uses 12 periods. Twice a month uses 24. Every two weeks uses 26. Weekly uses 52. Five years weekly is 260 payments of $44.54 on the same $10,000 at 6%.',
      'A mortgage with taxes, insurance, or mortgage insurance is a different page. A fee charged before you receive the money is the business-loan page. This page is the note itself: one rate, one payment, one frequency.'
    ],
    steps: [
      'Choose payment, number of payments, or interest rate. The sample solves for the payment.',
      'Enter the amount borrowed. The sample is $10,000.',
      'Enter the rate and the years when you are solving for the payment, or the payment when you are solving for the rate or the term.',
      'Choose the frequency and press Calculate. The headline is the unknown you selected.'
    ],
    howHeading: 'How the payment, the term, and the rate are solved',
    howItWorks: [
      'The periodic rate is the annual percent divided by 100 and then by the number of periods in a year. The payment count is the years times that frequency, rounded to a whole number. With a positive rate, the payment is principal times r times (1 + r) to the n, divided by (1 + r) to the n minus 1. A zero rate divides the principal by the number of payments, so $10,000 over 60 months with no interest is $166.67.',
      'Solving for the number of payments uses the logarithm of that same identity. The result is not rounded up to a whole payment, so a last payment in real life is often smaller than the figure that produced the count. Solving for the rate searches for the nominal annual rate that makes the payment amortize the principal. That rate is not an APR, because no prepaid fee is in the equation. A payment of $193.33, which is the rounded $193.328 payment, comes back as 6.0004% a year.'
    ],
    formula: 'r = annual percent / 100 / periods per year\nn = round(years × periods per year)\nPayment = principal × r × (1 + r)^n / ((1 + r)^n − 1)\nIf r = 0, payment = principal / n\nPayments = log(payment / (payment − r × principal)) / log(1 + r)',
    formulaNotes: [
      'Sixty times the displayed $193.33 is $11,599.80. The interest line uses the unrounded payment, $193.328, so the total paid is $11,599.68 and the interest is $1,599.68.',
      'The term solver refuses a payment that does not cover one period of interest, because the balance would not fall. The rate solver refuses a set of payments that adds up to less than the amount borrowed.'
    ],
    examplesHeading: 'Worked loan-solver examples',
    samples: [
      { title: '$10,000 at 6% for 5 years, monthly', overrides: {}, blurb: 'Payment mode on the sample loan. The periodic rate is 0.5%. Sixty payments amortize $10,000, and the headline rounds the exact payment to the cent.' },
      { title: 'A $200 payment on the same loan', overrides: { mode: 2, payment: 200 }, blurb: 'The unknown is the number of payments. Two hundred dollars is more than $193.33, so the balance is gone in fewer than 60 payments. The count is the exact logarithm.' },
      { title: 'The rate behind a $193.33 payment', overrides: { mode: 3, payment: 193.33 }, blurb: 'The unknown is the annual rate. Sixty payments of the rounded sample payment on $10,000 land just above 6%, because $193.33 is a hair more than the unrounded 6% payment.' }
    ],
    table: { heading: 'Three unknowns on a $10,000 loan', caption: 'Each headline is this calculator. The payment sample is monthly. The term and the rate use the same principal.', headers: ['Unknown', 'Result'] },
    limitsHeading: 'What this loan solver leaves out',
    limits: [
      'The rate it solves is the note rate that fits the payment. Prepaid fees, which turn a note rate into an APR, belong on the APR calculator and the business-loan page.',
      'Taxes, insurance, and a changing rate are outside the formula. The payment stays fixed for every period.',
      'The term is the exact logarithm. A lender that rounds the last payment up to a whole period will show a different count.',
      'Twice-monthly means 24 equal periods. It is not a calendar rule that skips February or lands on a particular day of the month.'
    ],
    disclaimer: 'This is fixed-rate loan arithmetic. It is not a credit decision, a mortgage disclosure, or an APR that includes fees.',
    faqs: [
      { q: 'Why is $10,000 at 6% for 5 years a payment of $193.33?', a: 'The monthly rate is 0.06 / 12 = 0.005, and there are 60 payments. Principal × 0.005 × (1.005)^60 / ((1.005)^60 − 1) is $193.328, which displays as $193.33.' },
      { q: 'What does the loan solver do with a zero interest rate?', a: 'It divides the principal by the number of payments. $10,000 over 60 months at 0% is $166.67 a month, and the interest line is $0.00.' },
      { q: 'Why does solving for the rate return 6.0004% instead of 6%?', a: 'The payment box holds $193.33, the rounded cent. The unrounded 6% payment is about $193.328. Searching from the rounded cent finds 6.0004% a year.' },
      { q: 'Is the solved rate an APR?', a: 'No. The search finds the nominal rate that amortizes the amount borrowed. A fee taken before you receive the cash is a different calculation, on the business-loan page.' }
    ],
    relatedLinks: [
      { slug: 'loan-calculator', label: 'Personal and auto loan calculator', note: 'A $25,000 loan at 7.5% for five years is $500.95 a month. That page starts from a known term and rate. This page can also solve for the term or the rate.' },
      { slug: 'apr-calculator', label: 'APR calculator', note: 'Turns a note rate and prepaid finance charges into an APR. The rate solved here has no prepaid charge in it.' },
      { slug: 'business-loan-calculator', label: 'Business loan calculator', note: 'The same amortizing payment, then an APR on the cash left after an upfront fee you type. A $2,500 fee on $100,000 at 8% for 5 years is a 9.078% APR.' }
    ]
  }),
  'vehicle-loan-calculator': page({
    slug: 'vehicle-loan-calculator',
    title: 'Vehicle Loan Calculator | ClearCalc',
    h1: 'Vehicle Loan Calculator',
    description: 'Monthly payment for a car or a boat after trade-in, sales tax, and fees. The sample finances $29,240.00 and the payment is $565.29.',
    intro: [
      'The payment starts from a price, then subtracts a down payment and a trade-in allowance, adds sales tax and the fees you type, and amortizes what is left. On a $30,000 price, $2,000 down, a $1,000 trade-in, 6% tax, and $500 of fees, the amount financed is $29,240.00 and the payment at 6% for 60 months is $565.29.',
      'Sales tax is charged on the price after the trade-in allowance, not after the down payment. The sample tax is (30,000 − 1,000) × 6% = $1,740.00. The down payment reduces what you finance. It does not reduce that tax line.',
      'The same arithmetic is a car or a boat. The label on the price does not change the formula. A lender’s document fee, a payoff of negative equity, and a tax on the fees themselves are not filled in for you. Type the dollars you were quoted, or leave them at the sample only to see the arithmetic.'
    ],
    steps: [
      'Enter the price, the down payment, and the trade-in allowance. The sample is $30,000, $2,000, and $1,000.',
      'Enter the sales-tax percent and the fees that are added to the amount financed. The sample is 6% and $500.',
      'Enter the annual interest rate and the term in months. The sample is 6% and 60 months.',
      'Press Calculate. The headline is the monthly payment. The lines show the tax, the amount financed, and the interest.'
    ],
    howHeading: 'How the vehicle payment is built',
    howItWorks: [
      'Tax equals (price − trade-in) × tax percent / 100. Amount financed equals price − down payment − trade-in + tax + fees. That amount is then run through the standard monthly loan payment: principal × r × (1 + r)^n / ((1 + r)^n − 1), with r equal to the annual rate divided by 1,200. Interest is the payment times the months, minus the amount financed.',
      'A car and a boat use that same sequence. Nothing in the formula knows which one you are buying. The car payment calculator is the shorter question: you already know the amount financed, and you want the payment. This page exists so the tax and the trade-in are visible before that payment is computed.'
    ],
    formula: 'Tax = (price − trade-in) × tax percent / 100\nAmount financed = price − down payment − trade-in + tax + fees\nr = annual percent / 100 / 12\nPayment = financed × r × (1 + r)^months / ((1 + r)^months − 1)',
    formulaNotes: [
      'The sample interest is $4,677.47. That is 60 × the unrounded payment, minus $29,240.00. It is not 60 times a payment someone rounded before multiplying.',
      'With the tax, the fees, the trade-in, and the down payment all set to zero, a $30,000 price at 6% for 60 months finances $30,000.00 and the payment is $579.98.'
    ],
    examplesHeading: 'Worked vehicle-loan examples',
    samples: [
      { title: 'The sample car price', overrides: {}, blurb: 'Tax is figured on $29,000, the price after the $1,000 trade-in. The $2,000 down payment comes off after that. Fees of $500 are added and are not taxed on this page.' },
      { title: 'Price only, no tax and no fees', overrides: { tax: 0, fees: 0, trade: 0, down: 0 }, blurb: 'The amount financed is the price itself. This is the same payment shape as a loan on an amount you already know, which is why the car payment page can be shorter.' },
      { title: 'A boat at 7% for 84 months', overrides: { price: 45000, down: 5000, trade: 0, tax: 0, fees: 0, rate: 7, months: 84 }, blurb: 'A $45,000 boat with $5,000 down and no tax or fees finances $40,000. The formula does not change because the purchase is a boat. The longer term is the only reason the interest is larger.' }
    ],
    table: { heading: 'Payments after the amount financed is known', caption: 'Each headline is this calculator. Tax in the first row is on the price after the trade-in.', headers: ['Purchase', 'Payment'] },
    limitsHeading: 'What the vehicle payment leaves out',
    limits: [
      'Negative equity on a trade-in is not added. If you owe more than the allowance, add that payoff to the fees yourself or the amount financed will be too small.',
      'A tax on the fees, a tax on the down payment, or a county rule that taxes the price before the trade-in is not applied. The tax base here is price minus trade-in.',
      'The term is a whole number of months from 1 to 120. A balloon at the end is not a separate input.',
      'The page does not look up a sales-tax rate. Six percent is the sample, not a state rate.'
    ],
    disclaimer: 'This is the monthly payment on the amount financed. It is not a buyer’s order, a tax return, or a lender’s approval.',
    faqs: [
      { q: 'Why is the sample tax $1,740.00 when the price is $30,000?', a: 'Tax is on the price after the trade-in. $30,000 − $1,000 = $29,000, and 6% of $29,000 is $1,740.00. The $2,000 down payment does not reduce that base.' },
      { q: 'Does a boat use a different payment formula?', a: 'No. Price, down payment, trade-in, tax, fees, rate, and months are the whole calculation. A boat and a car with the same numbers produce the same payment.' },
      { q: 'What is the amount financed in the sample?', a: '$29,240.00. That is $30,000 − $2,000 − $1,000 + $1,740 + $500. The payment of $565.29 amortizes that figure, not the sticker price.' },
      { q: 'Where do I go if I already know the amount financed?', a: 'The car payment calculator. It skips the tax and the trade-in. $25,000 at 6% for 60 months there is $483.32 a month.' }
    ],
    relatedLinks: [
      { slug: 'car-payment-calculator', label: 'Car payment calculator', note: '$25,000 at 6% for 60 months is $483.32 a month. That loan is the amount you already financed. This page builds that amount from price, tax, and trade-in.' },
      { slug: 'loan-calculator', label: 'Personal and auto loan calculator', note: 'A $25,000 loan at 7.5% for five years is $500.95 a month. The term there is in years, and there is no sales-tax line.' },
      { slug: 'rebate-vs-rate-calculator', label: 'Cash rebate or low rate calculator', note: 'Compares the interest on a special rate with the interest after a rebate. On $30,000, a 1.9% rate costs less interest than a $2,000 rebate at 6.9% over 60 months.' }
    ]
  }),
  'after-tax-savings-calculator': page({
    slug: 'after-tax-savings-calculator',
    title: 'After-Tax Savings Calculator | ClearCalc',
    h1: 'After-Tax Savings Calculator',
    description: 'Savings balance after a tax rate you type is applied to the yield. $1,000 plus $100 a month at 5% with 20% tax on the yield ends at $16,215.81.',
    intro: [
      'A pretax yield overstates a taxable account, because the interest itself is taxed. This page multiplies the yield by one minus the tax rate you type, then compounds that net yield monthly. A 5% yield and a 20% tax on the interest become a 4.0000% after-tax yield.',
      'The sample starts at $1,000, adds $100 at the end of each month, and runs for 10 years. The ending balance is $16,215.81. The same deposits with the tax rate set to zero end at $17,175.24. The tax on the yield, at the rate you typed, is the $959.43 difference.',
      'The tax rate is not looked up from a bracket. Deposits are not taxed on the way in. Only the yield is reduced. A traditional IRA, where the contribution itself can change the tax for the year, is a different page.'
    ],
    steps: [
      'Enter the starting balance and the monthly deposit. The sample is $1,000 and $100.',
      'Enter the annual yield before tax and the tax rate on that yield. The sample is 5% and 20%.',
      'Enter the years, from 1 to 50. The sample is 10.',
      'Press Calculate. The headline is the balance after the last deposit.'
    ],
    howHeading: 'How the after-tax balance is compounded',
    howItWorks: [
      'The net annual yield is the typed yield times (1 − tax rate / 100). That net yield is divided by 12. Each month the balance grows by that monthly rate, and then the deposit is added. The deposit does not earn during the month it arrives. A tax rate above 100% is rejected.',
      'One year on $1,000 at a 4% after-tax yield, with no deposit, ends at $1,040.74. That is $1,000 × (1 + 0.04 / 12)^12, not $1,040 flat. The monthly split is why a 4% net yield is a little more than 4% over a full year. The compound interest calculator runs the pretax version of this projection.'
    ],
    formula: 'After-tax yield = annual yield × (1 − tax rate / 100)\nMonthly rate = after-tax yield / 100 / 12\nEach month: balance = balance × (1 + monthly rate) + deposit\nThe deposit is added at the end of the month',
    formulaNotes: [
      'A 5% yield taxed at 20% is exactly 4%. The headline’s “4.0000%” is that product, printed to four decimal places.',
      'The tax applies to the yield only. A $100 deposit stays $100. If your account taxes the contribution as well, this page will overstate the balance.'
    ],
    examplesHeading: 'Worked after-tax savings examples',
    samples: [
      { title: '$100 a month at 5%, taxed at 20%', overrides: {}, blurb: 'The yield used in the loop is 4% a year, split into 12 months. Ten years of end-of-month deposits on a $1,000 start produce the headline.' },
      { title: 'The same deposits with no tax on the yield', overrides: { tax: 0 }, blurb: 'The loop uses the full 5%. The gap between this balance and the taxed balance is the cost of a 20% tax on the yield, for these deposits only.' },
      { title: 'One year, no new deposit', overrides: { monthly: 0, years: 1, start: 1000, rate: 5, tax: 20 }, blurb: '$1,000 compounded monthly at 4% for 12 months. There is no deposit to mix into the growth, so the result is the after-tax compound factor on its own.' }
    ],
    table: { heading: 'Balances after tax on the yield', caption: 'Each headline is this calculator. The tax rate is applied to the yield, not to the deposits.', headers: ['Case', 'Ending balance'] },
    limitsHeading: 'What the after-tax balance leaves out',
    limits: [
      'The tax rate stays constant. A yield that pushes you into a higher bracket next year is not recomputed.',
      'The page does not tax the deposits, and it does not apply a capital-gains rate that depends on how long you held a fund.',
      'Inflation is not subtracted. The headline is future dollars at the after-tax yield you typed.',
      'A rate above 100% is rejected. A rate of 100% makes the after-tax yield zero, so the balance is the deposits plus the untouched starting amount.'
    ],
    disclaimer: 'The tax rate is the one you type. This is not a bracket lookup and it is not tax advice.',
    faqs: [
      { q: 'How does 5% with 20% tax become 4%?', a: 'The after-tax yield is 5 × (1 − 20 / 100) = 4. The page then divides 4% by 12 and compounds that monthly rate.' },
      { q: 'Why is one year on $1,000 at a 4% after-tax yield $1,040.74 rather than $1,040?', a: 'The 4% is split into twelve monthly rates. (1 + 0.04 / 12)^12 is about 1.04074, so $1,000 grows to $1,040.74.' },
      { q: 'Are the monthly deposits taxed?', a: 'No. Only the yield is multiplied by one minus the tax rate. The $100 deposit is added in full at the end of the month.' },
      { q: 'Does this page know my tax bracket?', a: 'No. Twenty percent is the sample you can replace. The federal income-tax calculator is the page that applies 2026 brackets to a wage.' }
    ],
    relatedLinks: [
      { slug: 'compound-interest-calculator', label: 'Compound interest calculator', note: '$10,000 at 7% for 10 years with no deposit grows to $20,096.61. That projection does not reduce the yield by a tax rate.' },
      { slug: 'traditional-ira-estimator', label: 'Traditional IRA estimator', note: 'Caps one 2026 contribution at $7,500, or $8,600 at age 50, and estimates tax at a rate you type. It does not tax a monthly yield.' },
      { slug: 'roth-ira-calculator', label: 'Roth IRA calculator', note: 'A 2026 contribution cap and an income phase-out, then growth. A Roth yield is not given the taxable-account haircut this page applies.' }
    ]
  }),
  'time-value-calculator': page({
    slug: 'time-value-calculator',
    title: 'Time Value of Money Calculator | ClearCalc',
    h1: 'Time Value of Money Calculator',
    description: 'Solve for periods, rate, present value, payment, or future value. A present value of −1,000 at 0% for 12 periods and no payment has a future value of $1,000.00.',
    intro: [
      'Five numbers describe a level cash stream: how many periods, the annual rate, the present value, the payment, and the future value. This page solves for one of them and treats the other four as known. Money you pay in is negative. Money you receive is positive. That is the sign convention of a financial calculator.',
      'A present value of −1,000, a rate of 0, 12 periods, and a payment of 0 solves to a future value of $1,000.00. Nothing grew. The sign flipped because the $1,000 you paid in is the $1,000 you can take out later. The same deposit at the sample 6% annual rate, divided by 12, grows to $1,061.68.',
      'Payments sit at the end of each period. The annual percent is divided by the frequency you choose: 12, 24, 26, or 52. A mortgage payment that also includes taxes is a different page. This page is only the five-variable identity.'
    ],
    steps: [
      'Choose the unknown. The sample solves for the future value.',
      'Choose how many periods fall in one year, then enter the number of periods and the annual rate.',
      'Enter the present value and the payment with a minus sign when the money is paid in. The sample present value is −1,000 and the payment is 0.',
      'Press Calculate. The headline is the unknown. The last detail line shows the search value with more decimals.'
    ],
    howHeading: 'How the five time-value numbers fit together',
    howItWorks: [
      'The period rate is the annual percent divided by 100 and then by the number of periods in a year. With a zero period rate, the future value is −(present value + payment × periods). That is why −1,000 with no payment and a zero rate comes back as $1,000.00. With a positive rate, the future value is −(present value × (1 + r)^n + payment × ((1 + r)^n − 1) / r).',
      'Solving for the present value searches for the amount which, fed back into that future-value formula, matches the future value you typed. Solving for the rate and for the number of periods uses the same identity. The future value of −1,000 at 6% for 12 monthly periods is $1,061.68, and solving backward for the present value of that $1,061.68 returns −$1,000.00.'
    ],
    formula: 'r = annual percent / 100 / periods per year\nIf r = 0: future value = −(present value + payment × n)\nOtherwise: future value = −(present value × (1 + r)^n + payment × ((1 + r)^n − 1) / r)\nMoney paid in is negative. Payments are at the end of the period.',
    formulaNotes: [
      'A payment of −100 alongside a present value of −1,000, at a zero rate for 12 periods, has a future value of $2,200.00. That is the $1,000 deposit plus twelve deposits of $100.',
      'The detail line for the 6% sample prints the search value as 1,061.677812. The headline rounds that figure to $1,061.68.'
    ],
    examplesHeading: 'Worked time-value examples',
    samples: [
      { title: 'A zero rate on money paid in', overrides: { rate: 0 }, blurb: 'Present value −1,000, payment 0, 12 periods, rate 0, solving for the future value. The sign flips and the dollars do not change, which is the required check for a zero rate.' },
      { title: 'Twelve months at 6%', overrides: {}, blurb: 'The annual 6% is divided by 12. The $1,000 paid in grows for 12 end-of-month periods with no further payment. The headline is the future value.' },
      { title: 'Present value of that $1,061.68', overrides: { solve: 3, fv: 1061.68 }, blurb: 'The unknown is the present value. The future value is the rounded 6% result, the payment is still 0, and the rate is still 6%. The answer is the original deposit, with its minus sign.' }
    ],
    table: { heading: 'Three solves on a 12-period stream', caption: 'Each headline is this calculator. A minus sign means money paid in.', headers: ['Solve', 'Result'] },
    limitsHeading: 'What the time-value page leaves out',
    limits: [
      'Payments are level and they arrive at the end of the period. A payment at the beginning is an annuity-due question, and it is not this identity.',
      'The rate solver searches from 0% upward. A stream that only works at a negative rate is outside that search.',
      'The period solver stops at 1,200 periods. A zero rate and a zero payment cannot turn one present value into a different future value, and that input is rejected.',
      'Taxes and fees are not in the five boxes. A mortgage payment with escrow is the mortgage calculator.'
    ],
    disclaimer: 'This is the five-variable time-value identity with the financial-calculator sign convention. It is not an investment recommendation.',
    faqs: [
      { q: 'Why is the future value of −1,000 at 0% equal to $1,000.00?', a: 'Money paid in is negative. At a zero rate the future value is −(present value + payment × periods). −(−1,000 + 0) is $1,000.00. The dollars are unchanged and the sign shows cash coming back.' },
      { q: 'What does a positive present value mean?', a: 'Money you receive now. A loan you take is positive at the start if you want to follow this sign convention, and the payments you make later are negative.' },
      { q: 'Why is −1,000 at 6% for 12 months worth $1,061.68?', a: 'The monthly rate is 0.5%. −1,000 × (1.005)^12, with the leading minus from the formula, is about $1,061.6778, which displays as $1,061.68.' },
      { q: 'Does the future-value box matter when I am solving for the future value?', a: 'No. The unknown is computed from the other four boxes. The future-value field is used only when the unknown is something else.' }
    ],
    relatedLinks: [
      { slug: 'compound-interest-calculator', label: 'Compound interest calculator', note: '$10,000 at 7% for 10 years with no monthly deposit grows to $20,096.61. Deposits there are typed as positive amounts. This page wants money paid in as a negative.' },
      { slug: 'annuity-calculator', label: 'Annuity calculator', note: '$200 a month at 6% for 10 years grows to $32,775.87 as an ordinary annuity. That page prices a payment stream you already chose.' },
      { slug: 'lump-sum-present-value-calculator', label: 'Lump sum present value calculator', note: '$10,000 discounted 10 years at 5% once a year is $6,139.13. That page is one future amount and no payment.' }
    ]
  }),
  'marriage-tax-calculator': page({
    slug: 'marriage-tax-calculator',
    title: 'Marriage Tax Calculator | ClearCalc',
    h1: 'Marriage Tax Calculator',
    description: '2026 federal income tax on two single wages compared with one joint return. Wages of $40,000 and $120,000 are $2,650.00 less filing jointly. No credits.',
    intro: [
      'The comparison is two single federal income-tax bills against one joint bill on the same two wages. The 2026 brackets and the standard deductions come from IRS Rev. Proc. 2025-32. Each single return takes a $16,100 standard deduction. The joint return takes $32,200. Those two single deductions add up to the joint deduction, so the deduction itself is not where a gap opens.',
      'Wages of $40,000 and $120,000 produce two single bills of $20,190.00 and one joint bill of $17,540.00. The joint return is $2,650.00 less. Two wages of $80,000 each produce $17,540.00 either way. Two wages of $500,000 each produce $3,982.00 more on the joint return.',
      'No credits are applied. There is no investment income, no self-employment tax, and no state tax. A wage of zero is allowed, and the other wage is still taxed under the status you are comparing. The result is not a filing recommendation.'
    ],
    steps: [
      'Enter the first person’s wages. The sample is $40,000.',
      'Enter the second person’s wages. The sample is $120,000.',
      'Press Calculate. The headline is the joint bill minus the two single bills.',
      'Read the two detail lines for the dollar tax on each side of the comparison. Credits are not in either number.'
    ],
    howHeading: 'How the two single bills are compared with one joint bill',
    howItWorks: [
      'Each single wage is reduced by $16,100, and the joint wages are reduced by $32,200. Taxable income below zero becomes zero. The single tax uses the 2026 single brackets: 10% through $12,400, 12% through $50,400, 22% through $105,700, 24% through $201,775, 32% through $256,225, 35% through $640,600, and 37% above that. The joint brackets are 10% through $24,800, 12% through $100,800, 22% through $211,400, 24% through $403,550, 32% through $512,450, 35% through $768,700, and 37% above that.',
      'Through the 32% bracket, each joint threshold is exactly twice the single threshold. Equal wages that stay inside that range produce the same tax either way, which is why $80,000 plus $80,000 matches. The 35% joint threshold is $768,700, not twice the single $640,600. Two wages of $500,000 each stay under the single 37% bracket and still put $199,100 of joint taxable income into the 37% bracket. That shape is the $3,982.00 gap. Unequal wages can do the reverse: the lower wage leaves room in the 10% and 12% joint brackets, so some of the higher wage that was taxed at 22% on a single return is taxed at 12% on the joint return.'
    ],
    formula: 'Single tax = tax on max(0, wage − $16,100) using the 2026 single brackets\nJoint tax = tax on max(0, wage one + wage two − $32,200) using the 2026 joint brackets\nGap = joint tax − (single tax on wage one + single tax on wage two)\nBrackets and deductions: IRS Rev. Proc. 2025-32\nNo credits',
    formulaNotes: [
      'The sample single bills are $2,620.00 on $40,000 and $17,570.00 on $120,000. Together they are $20,190.00. The joint taxable income is $160,000 − $32,200 = $127,800, and the joint tax is $17,540.00.',
      'A wage of $50,000 and a wage of $0 are $3,820.00 as two single returns and $1,780.00 as one joint return, which is $2,040.00 less filing jointly. The zero wage still consumes a $16,100 deduction on its own return, and that deduction is unused room the joint return can fill.'
    ],
    examplesHeading: 'Worked marriage-tax examples',
    samples: [
      { title: '$40,000 and $120,000', overrides: {}, blurb: 'The higher wage reaches the 22% single bracket. On the joint return, part of that income falls back into the 12% bracket because the lower wage did not fill it. The joint bill is the smaller one.' },
      { title: 'Two wages of $80,000', overrides: { one: 80000, two: 80000 }, blurb: 'Equal wages, and both the taxable incomes sit where the joint brackets are exact doubles of the single brackets. The two single bills and the joint bill match.' },
      { title: 'Two wages of $500,000', overrides: { one: 500000, two: 500000 }, blurb: 'Each single taxable income stays inside the 35% bracket. The joint taxable income crosses $768,700 and is partly taxed at 37%. The joint bill is larger.' }
    ],
    table: { heading: 'Joint bill compared with two single bills', caption: 'Each headline is this calculator for 2026. No credits are included.', headers: ['Wages', 'Comparison'] },
    limitsHeading: 'What the marriage comparison leaves out',
    limits: [
      'Credits are not included. A child tax credit, a dependent-care credit, or a saver’s credit can change which status owes less, and none of those is computed.',
      'Investment income, long-term capital gains, and qualified dividends are not in the wages. Those rates are not the ordinary brackets used here.',
      'Self-employment tax and the additional Medicare tax are not added. State tax is not added.',
      'The page does not look at filing status rules, a dependent, or which person can claim a deduction. It compares the two arithmetic results and stops.'
    ],
    disclaimer: 'This is 2026 ordinary federal income tax on two wages after the standard deduction. It is not a filing recommendation and it includes no credits.',
    faqs: [
      { q: 'Why are $40,000 and $120,000 taxed $2,650.00 less on a joint return?', a: 'Two single bills are $20,190.00 and the joint bill is $17,540.00. The $32,200 joint deduction matches two $16,100 deductions. The gap comes from the brackets: part of the higher wage is taxed at 12% jointly instead of 22% on a single return.' },
      { q: 'Why do two $80,000 wages come out the same either way?', a: 'Each single taxable income is $63,900 and the joint taxable income is $127,800. Through the 32% bracket the joint thresholds are exactly twice the single thresholds, so equal wages in that range produce the same tax. Both sides are $17,540.00.' },
      { q: 'When does the joint return cost more?', a: 'The 35% joint bracket ends at $768,700 of taxable income, which is not twice the single 35% top of $640,600. Two wages of $500,000 each are $276,268.50 as single returns and $280,250.50 jointly, a $3,982.00 difference.' },
      { q: 'Which deduction does the page use?', a: 'The 2026 standard deduction from Rev. Proc. 2025-32: $16,100 on each single return and $32,200 on the joint return. Itemized deductions are not computed. Credits are not computed.' },
      { q: 'Does a wage of zero get a deduction?', a: 'On its own single return, yes, and the tax on zero wages is zero because the deduction cannot create a refund here. Paired with $50,000, the two single bills are $3,820.00 and the joint bill is $1,780.00.' }
    ],
    relatedLinks: [
      { slug: 'us-federal-income-tax-calculator', label: '2026 federal income tax calculator', note: 'Tax on one wage after the standard deduction. At $65,000 single the federal income tax is $5,620.00. It does not compare two returns with one joint return.' },
      { slug: 'estate-tax-calculator', label: 'Federal estate tax calculator', note: 'A 2026 estate of $15,100,000 is $40,000.00 of tax, which is 40% of the $100,000 above the $15,000,000 basic exclusion. That is estate tax, not income tax.' },
      { slug: 'traditional-ira-estimator', label: 'Traditional IRA estimator', note: 'A $7,500 contribution at a 22% rate you type is $1,650.00 of tax. The income phase-out is not applied there, and this marriage page does not include a retirement deduction either.' }
    ]
  }),
  'estate-tax-calculator': page({
    slug: 'estate-tax-calculator',
    title: 'Federal Estate Tax Calculator | ClearCalc',
    h1: 'Federal Estate Tax Calculator',
    description: '2026 federal estate tax as 40% of the amount above the $15,000,000 basic exclusion. An estate of $15,100,000 produces $40,000.00.',
    intro: [
      'The 2026 basic exclusion used here is $15,000,000, from IRS Rev. Proc. 2025-32 and the amendment to section 2010 for calendar year 2026. The tax shown is 40% of the amount above that exclusion and nothing else. An estate of $15,100,000 has $100,000 above the exclusion, and 40% of $100,000 is $40,000.00.',
      'The 40% figure is the result of the unified credit when both the estate and the exclusion sit in the 40% bracket above $1 million, and when no deceased-spousal unused exclusion and no adjusted taxable gifts are entered. This page does not compute a lower bracket, a credit for tax on prior gifts, or portability.',
      'Type the amount after the deductions you have already taken. The exclusion is then subtracted. An amount of $15,000,000 or less shows $0.00. An amount of $16,000,000 shows $400,000.00, which is 40% of the $1,000,000 excess.'
    ],
    steps: [
      'Enter the estate after the deductions you have already taken, and before the basic exclusion. The sample is $15,100,000.',
      'Press Calculate. The headline is 40% of the excess over $15,000,000.',
      'Read the excess on the second detail line. An estate at or under the exclusion shows an excess of $0.00.',
      'Do not add a deceased spouse’s unused exclusion here. The page has no box for it, and the tax would be wrong if you assumed it was included.'
    ],
    howHeading: 'How the 40% estate tax is applied',
    howItWorks: [
      'The excess is the greater of zero and the amount you typed minus $15,000,000. The tax is that excess times 0.40. There is no graduated computation under $1 million on this page, because the exclusion itself is far above $1 million. Anything that remains after a $15,000,000 exclusion is taxed at the top rate of the estate-tax schedule, which is 40%.',
      'A deceased-spousal unused exclusion would raise the amount subtracted before the 40% is applied. Adjusted taxable gifts would change the lifetime base the credit is charged against. Neither number is an input. If either one applies, the $40,000.00 result on a $15,100,000 estate is only the no-DSUE, no-gift case.'
    ],
    formula: '2026 basic exclusion = $15,000,000\nExcess = max(0, amount − exclusion)\nTax = excess × 0.40\nNo deceased-spousal unused exclusion\nNo adjusted taxable gifts',
    formulaNotes: [
      '$15,100,000 − $15,000,000 = $100,000, and $100,000 × 0.40 = $40,000.00. An estate typed as $15,000,000 produces an excess of $0.00 and a tax of $0.00.',
      '$16,000,000 − $15,000,000 = $1,000,000, and the tax is $400,000.00. The rate does not step up again above 40%.'
    ],
    examplesHeading: 'Worked estate-tax examples',
    samples: [
      { title: '$100,000 over the exclusion', overrides: {}, blurb: 'The sample estate is $15,100,000. Only the $100,000 above $15,000,000 is taxed, and the rate on that slice is 40%.' },
      { title: 'An estate equal to the exclusion', overrides: { estate: 15000000 }, blurb: 'The excess is zero. The headline is $0.00. The exclusion is not a bill for the amount below it.' },
      { title: '$1,000,000 over the exclusion', overrides: { estate: 16000000 }, blurb: 'The excess is $1,000,000. Forty percent of that excess is the whole tax this page will show. No gift tax already paid is credited.' }
    ],
    table: { heading: 'Tax on three amounts before the exclusion', caption: 'Each headline is 40% of the excess over the 2026 basic exclusion of $15,000,000. No DSUE is included.', headers: ['Amount', 'Tax'] },
    limitsHeading: 'What this estate-tax figure leaves out',
    limits: [
      'Portability is not computed. A deceased spouse’s unused exclusion has to be added by you, outside this page, before you trust the excess.',
      'Adjusted taxable gifts and gift tax already paid are not entered. The unified credit’s real remaining amount can be lower than $15,000,000 for that reason.',
      'Deductions are assumed to be already taken. The page does not subtract a marital deduction, a charitable deduction, or expenses.',
      'State estate tax and inheritance tax are not added. The 40% is the federal rate on the excess only.'
    ],
    disclaimer: 'This is 40% of the amount above the 2026 basic exclusion of $15,000,000, with no DSUE and no taxable gifts. It is not an estate plan.',
    faqs: [
      { q: 'Why does $15,100,000 produce $40,000.00?', a: 'The 2026 basic exclusion is $15,000,000. The excess is $100,000. The tax shown is 40% of that excess, which is $40,000.00. Nothing below the exclusion is taxed on this page.' },
      { q: 'What is assumed about a deceased spouse’s unused exclusion?', a: 'Nothing is added. The exclusion stays $15,000,000. If a DSUE election applies, this page does not know the amount, and the tax here is higher than the tax after portability.' },
      { q: 'Are taxable gifts included?', a: 'No. Adjusted taxable gifts are not added to the estate, and gift tax already paid is not subtracted. The 40% applies only to the excess of the amount you typed.' },
      { q: 'What happens at exactly $15,000,000?', a: 'The excess is $0.00 and the tax is $0.00. An amount under the exclusion is the same result.' }
    ],
    relatedLinks: [
      { slug: 'marriage-tax-calculator', label: 'Marriage tax calculator', note: 'Compares two 2026 single income-tax bills with one joint bill. Wages of $40,000 and $120,000 are $2,650.00 less filing jointly. No credits. That is income tax, not estate tax.' },
      { slug: 'us-federal-income-tax-calculator', label: '2026 federal income tax calculator', note: 'Ordinary tax on a wage after the standard deduction. At $65,000 single the tax is $5,620.00. It does not apply the estate-tax exclusion.' },
      { slug: 'lump-sum-present-value-calculator', label: 'Lump sum present value calculator', note: 'Discounts one future amount at a rate you choose. $10,000 in 10 years at 5% once a year is $6,139.13. It is not an estate-tax computation.' }
    ]
  }),
  'pension-choice-calculator': page({
    slug: 'pension-choice-calculator',
    title: 'Pension Lump Sum Calculator | ClearCalc',
    h1: 'Pension Lump Sum Calculator',
    description: 'Present value of a monthly pension compared with a lump sum. $600 a month for 20 years at a 5% discount rate is worth $90,915.19 today.',
    intro: [
      'A pension choice is a lump sum on one side and a stream of monthly payments on the other. This page discounts the monthly pension at a rate you type and puts that present value next to the lump sum. It does not look up the plan’s own annuity factor.',
      'The sample is a $100,000 lump sum against $600 a month for 20 years, discounted at 5%. The present value of the pension is $90,915.19, so the lump sum is worth more at that rate. At a discount rate of zero the same checks add to $144,000.00, and the monthly pension has the higher present value.',
      'Taxes, a survivor option, and inflation on the pension are not in the comparison. The headline is the present value, and one sentence says which side is larger. That sentence is arithmetic. It is not advice to take one or the other.'
    ],
    steps: [
      'Enter the lump sum offered. The sample is $100,000.',
      'Enter the monthly pension and the number of years it would be paid. The sample is $600 and 20 years.',
      'Enter the annual discount rate. The sample is 5%. A higher rate makes the stream worth less today.',
      'Press Calculate. The headline is the present value of the monthly pension.'
    ],
    howHeading: 'How the pension stream is discounted',
    howItWorks: [
      'The monthly rate is the annual discount rate divided by 1,200. The count is the years times 12. The present value is the monthly pension times (1 − (1 + monthly rate) to the minus count) divided by the monthly rate. At a zero rate the present value is the monthly pension times the number of months, because there is nothing to discount.',
      'The comparison is that present value against the lump sum you typed. $90,915.19 is less than $100,000, so the sample says the lump sum is worth more. The same present value against a $200,000 lump sum is a wider gap in the same direction. Changing the lump sum does not change the present value. Only the rate, the monthly amount, and the years do that.'
    ],
    formula: 'Monthly rate r = annual discount rate / 100 / 12\nCount n = years × 12\nPresent value = monthly pension × (1 − (1 + r)^(−n)) / r\nIf r = 0, present value = monthly pension × n\nThe discount rate is yours',
    formulaNotes: [
      'Twenty years is 240 months. At a zero rate, 240 × $600 is $144,000.00. That undiscounted sum is the ceiling for this stream. Any positive discount rate lands below it.',
      'The sample rate of 5% turns $144,000 of future checks into $90,915.19 today. The plan’s factor, if it uses a different rate or a different mortality table, will not match this number.'
    ],
    examplesHeading: 'Worked pension comparisons',
    samples: [
      { title: '$600 a month for 20 years at 5%', overrides: {}, blurb: 'The present value is below the $100,000 lump sum, so the comparison sentence says the lump sum is worth more. The headline is the present value, not the lump sum.' },
      { title: 'The same checks with no discounting', overrides: { rate: 0 }, blurb: 'Two hundred forty payments of $600 add to $144,000.00. That is above the $100,000 lump sum, so the monthly pension has the higher present value when the rate is zero.' },
      { title: 'A $200,000 lump sum at the same 5%', overrides: { lump: 200000 }, blurb: 'The present value stays $90,915.19 because the stream did not change. The lump sum is larger, so it is still the side with the higher value, by more than in the sample.' }
    ],
    table: { heading: 'Present value of $600 a month', caption: 'Each headline is the present value of the monthly pension. The lump sum is the comparison, not the headline.', headers: ['Case', 'Present value'] },
    limitsHeading: 'What the pension comparison leaves out',
    limits: [
      'A survivor option that reduces the monthly check is not priced. Type the monthly amount you would actually receive.',
      'Inflation adjustments to the pension are not added. The $600 stays $600 for every month of the term.',
      'Taxes on the lump sum and taxes on the monthly checks are not subtracted. The side that looks larger before tax can look smaller after tax.',
      'The term is a whole number of years from 1 to 50. A pension that continues for life, with no year you are willing to type, is not computed from a mortality table here.'
    ],
    disclaimer: 'The discount rate is yours. This comparison is not the plan’s annuity factor and it is not advice to take the lump sum or the pension.',
    faqs: [
      { q: 'Why is $600 a month for 20 years worth $90,915.19 at 5%?', a: 'The monthly rate is 0.05 / 12. Over 240 payments, the ordinary present value of $600 is $90,915.19. The undiscounted total of those payments is $144,000.00.' },
      { q: 'Why does a zero discount rate favor the monthly pension in the sample?', a: 'At 0% the present value is 240 × $600 = $144,000.00, which is more than the $100,000 lump sum. Discounting at 5% pulls the stream down to $90,915.19, which is less than the lump sum.' },
      { q: 'Does the page use my plan’s annuity factor?', a: 'No. The only rate is the one you type. A plan factor built from a Treasury rate or a mortality table will differ, and this page does not look one up.' },
      { q: 'Does changing the lump sum change the headline?', a: 'No. The headline is the present value of the monthly pension. A $200,000 offer against the sample stream still shows $90,915.19, and the sentence beside it says the lump sum is worth more.' }
    ],
    relatedLinks: [
      { slug: 'annuity-calculator', label: 'Annuity calculator', note: 'Prices a payment stream you already chose. $200 a month at 6% for 10 years is an ordinary present value of $18,014.69. This page compares that kind of present value with a lump sum.' },
      { slug: 'annuity-payout-calculator', label: 'Annuity payout calculator', note: 'Turns a lump sum into the monthly payment that amortizes it to zero. $100,000 at 5% for 20 years pays $659.96 a month.' },
      { slug: 'lump-sum-present-value-calculator', label: 'Lump sum present value calculator', note: 'Discounts one future amount, not a monthly stream. $10,000 in 10 years at 5% compounded yearly is $6,139.13.' }
    ]
  }),
  'social-security-calculator': page({
    slug: 'social-security-calculator',
    title: 'Social Security PIA Calculator | ClearCalc',
    h1: 'Social Security PIA Calculator',
    description: 'A 2026 primary insurance amount from an AIME, then a claiming age from 62 to 70. An AIME of $1,286 at age 67 is $1,157.40 a month.',
    intro: [
      'The primary insurance amount on this page uses the 2026 bend points $1,286 and $7,749, from the Social Security Administration bend-point table for eligibility in 2026. The slices are 90%, 32%, and 15%. The raw amount is rounded down to the next lower dime, and the age-adjusted benefit is rounded down to the next lower dime again.',
      'An average indexed monthly earnings figure of $1,286 at age 67 is 90% of $1,286, which is $1,157.40 exactly, so the dime rounding changes nothing. Age 67 is full retirement age for a worker born in 1960 or later, and the factor at that age is 1. The same AIME claimed at 62 is $810.10 a month.',
      'The AIME is an input. This page does not index a year-by-year earnings record. It does not apply the earnings test, the windfall elimination provision, or a family maximum. It is not a Social Security statement.'
    ],
    steps: [
      'Enter the average indexed monthly earnings. The bend-point sample is $1,286. The form opens on $3,000.',
      'Enter a whole claiming age from 62 to 70. Age 67 uses a factor of 1.',
      'Press Calculate. The headline is the monthly benefit after the age factor, rounded down to the next lower dime.',
      'Read the PIA line before you read the age adjustment. Delayed credits and the early reduction are applied to that dime-rounded PIA.'
    ],
    howHeading: 'How the PIA and the age factor are calculated',
    howItWorks: [
      'The first slice is the AIME up to $1,286, multiplied by 0.90. The second slice is the AIME between $1,286 and $7,749, multiplied by 0.32. The third slice is anything above $7,749, multiplied by 0.15. The sum is rounded down to the next lower dime by taking the floor of the raw amount times 10, with a tiny offset so a value that is already on a dime is not pushed down by floating-point noise. An AIME of $3,000 at age 67 has a PIA of $1,705.80. An AIME of $7,749 has a raw amount of $3,225.56 and a PIA of $3,225.50.',
      'Full retirement age is fixed at 67 on this page. Each year before 67 is 12 months. The reduction is 5/9 of 1% for each of the first 36 months and 5/12 of 1% for each month after that. Five years early is 36 × 5/9 + 24 × 5/12 = 30%, so the factor is 0.70. $1,157.40 × 0.70 is $810.18, which rounds down to $810.10. Each year after 67 adds 8%. Three years of delayed credits multiply the PIA by 1.24. $1,705.80 × 1.24 is $2,115.192, which rounds down to $2,115.10.'
    ],
    formula: 'PIA raw = 90% of AIME up to $1,286 + 32% of AIME from $1,286 to $7,749 + 15% of AIME above $7,749\nPIA = round down to the next lower dime\nEarly: 5/9 of 1% per month for the first 36 months, then 5/12 of 1% per month, measured from age 67\nDelayed: 8% per year after 67\nBenefit = round the PIA × factor down to the next lower dime',
    formulaNotes: [
      'Age 62 on an AIME of $1,286 keeps the $1,157.40 PIA and then applies the 30% reduction. The headline is $810.10, not $810.18, because the benefit is rounded down to the next lower dime.',
      'Ages are whole years. Claiming at 62 and 6 months is not a separate input. The reduction for age 62 is always 60 months, and the delayed credit for age 70 is always three years at 8%.'
    ],
    examplesHeading: 'Worked Social Security examples',
    samples: [
      { title: 'AIME $1,286 at age 67', overrides: { aime: 1286, age: 67 }, blurb: 'The entire AIME sits in the 90% slice. 0.90 × 1,286 is 1,157.40, already on a dime. The age factor is 1 because 67 is full retirement age here.' },
      { title: 'AIME $3,000 at age 67', overrides: {}, blurb: 'The first $1,286 is at 90% and the remaining $1,714 is at 32%. The raw sum rounds down to a PIA of $1,705.80, and age 67 leaves that figure unchanged.' },
      { title: 'AIME $3,000 at age 70', overrides: { age: 70 }, blurb: 'The PIA is still $1,705.80. Three years of delayed retirement credits multiply it by 1.24, and the benefit is rounded down to the next lower dime.' }
    ],
    table: { heading: 'Monthly benefit from three AIME and age pairs', caption: 'Each headline is this calculator. Bend points are the 2026 amounts, $1,286 and $7,749. This is not a Social Security statement.', headers: ['Input', 'Monthly benefit'] },
    limitsHeading: 'What this PIA page leaves out',
    limits: [
      'It does not index earnings. The AIME has to be a figure you already have. A year-by-year wage record is not turned into an AIME here.',
      'The earnings test, the windfall elimination provision, the government pension offset, and a family maximum are not applied.',
      'Full retirement age is 67 only. A worker born before 1960, whose full retirement age is earlier, will not match this reduction schedule.',
      'Spousal benefits, survivor benefits, and taxation of benefits are not computed. The headline is one worker’s age-adjusted PIA.'
    ],
    disclaimer: 'This is a 2026 PIA from an AIME you type, adjusted for a whole claiming age from 62 to 70. It is not a Social Security statement.',
    faqs: [
      { q: 'Why is an AIME of $1,286 at age 67 a benefit of $1,157.40?', a: 'The first bend point is $1,286 and the rate on that slice is 90%. 1,286 × 0.90 = 1,157.40, which is already a dime, so rounding down does not change it. Age 67 uses a factor of 1.' },
      { q: 'How does claiming at 62 reduce the benefit?', a: 'From 67 to 62 is 60 months. The first 36 months cost 5/9 of 1% each, which is 20%. The next 24 months cost 5/12 of 1% each, which is 10%. The factor is 0.70. On a PIA of $1,157.40 the product is $810.18, and the benefit rounds down to $810.10.' },
      { q: 'What is the delayed credit after 67?', a: 'Eight percent a year, with no further dime rounding until the end. Three years on a PIA of $1,705.80 is a factor of 1.24 and a benefit of $2,115.10 after rounding down to the next lower dime.' },
      { q: 'Why does an AIME of $7,749 become $3,225.50 rather than $3,225.56?', a: 'The 90% slice is $1,157.40 and the 32% slice on $6,463 is $2,068.16. The sum is $3,225.56. The PIA is rounded down to the next lower dime, which is $3,225.50.' },
      { q: 'Is this my Social Security statement?', a: 'No. The AIME is an input, the earnings test is not applied, and the page does not know a year-by-year record, WEP, or a family maximum.' }
    ],
    relatedLinks: [
      { slug: 'pension-choice-calculator', label: 'Pension lump sum calculator', note: '$600 a month for 20 years at a 5% discount rate is worth $90,915.19 today. That is a pension you type, not a Social Security PIA.' },
      { slug: 'annuity-payout-calculator', label: 'Annuity payout calculator', note: '$100,000 at 5% for 20 years pays $659.96 a month until the balance is zero. A Social Security benefit is not amortized to zero on this PIA page.' },
      { slug: 'traditional-ira-estimator', label: 'Traditional IRA estimator', note: 'The 2026 dollar limit is $7,500, plus $1,100 at age 50. The deduction phase-out is not applied. That estimate is separate from a Social Security benefit.' }
    ]
  }),
  'annuity-payout-calculator': page({
    slug: 'annuity-payout-calculator',
    title: 'Annuity Payout Calculator | ClearCalc',
    h1: 'Annuity Payout Calculator',
    description: 'The monthly payment that amortizes a lump sum to zero. $100,000 at 5% for 20 years pays $659.96 a month.',
    intro: [
      'This page starts from a lump sum and solves for the end-of-month payment that drives the balance to zero. The sample is $100,000 at 5% for 20 years, which is 240 payments of $659.96. Interest over that term is $58,389.38, the payments minus the starting amount.',
      'The annuity calculator answers the other direction. You already know the payment, and you want the present value or the future value of that stream. Here the lump is known and the payment is the unknown.',
      'A zero rate on $12,000 for one year is $1,000.00 a month, because twelve payments must add up to the lump and there is no interest. The page does not subtract a fee or a tax, and it is not an insurance quote.'
    ],
    steps: [
      'Enter the starting amount. The sample is $100,000.',
      'Enter the annual interest rate. The sample is 5%.',
      'Enter the years, from 1 to 50. The sample is 20, which is 240 monthly payments.',
      'Press Calculate. The headline is the monthly payment. The interest line is the payments minus the starting amount.'
    ],
    howHeading: 'How the payout payment is calculated',
    howItWorks: [
      'The monthly rate is the annual percent divided by 1,200. The payment is the starting amount times that rate times (1 + rate) to the number of months, divided by (1 + rate) to the number of months minus 1. A zero rate divides the starting amount by the number of months.',
      'Shortening the sample from 20 years to 10 years raises the payment to $1,060.66 and lowers the interest to $27,278.62. The balance still ends at zero. A longer term lowers the payment and raises the interest, because the unpaid balance earns the rate for more months.'
    ],
    formula: 'r = annual percent / 100 / 12\nn = years × 12\nPayment = amount × r × (1 + r)^n / ((1 + r)^n − 1)\nIf r = 0, payment = amount / n\nInterest = payment × n − amount',
    formulaNotes: [
      'The interest on the sample is $58,389.38. That uses the unrounded payment times 240, minus $100,000. It is not 240 times the rounded $659.96.',
      '$12,000 at 0% for 12 months is exactly $1,000 a month, and the interest line is $0.00. The formula has no insurance load to add.'
    ],
    examplesHeading: 'Worked annuity-payout examples',
    samples: [
      { title: '$100,000 at 5% for 20 years', overrides: {}, blurb: 'Two hundred forty end-of-month payments amortize the lump to zero. The headline is the level payment. Interest is what those payments add beyond $100,000.' },
      { title: '$12,000 at 0% for one year', overrides: { rate: 0, nest: 12000, years: 1 }, blurb: 'Twelve payments and no interest. The payment is the lump divided by 12. This is the zero-rate check on the same formula.' },
      { title: 'The same $100,000 over 10 years', overrides: { years: 10 }, blurb: 'Half the term raises the payment and cuts the interest. The rate is still 5%, and the balance still ends at zero.' }
    ],
    table: { heading: 'Payments that amortize a lump to zero', caption: 'Each headline is this calculator. Interest is the payments minus the starting amount.', headers: ['Lump and term', 'Payment'] },
    limitsHeading: 'What the payout leaves out',
    limits: [
      'A fee, a surrender charge, and an insurer’s mortality load are not subtracted. The payment is pure amortization of the amount you typed.',
      'Tax on the payment is not withheld. The headline is the gross payment that zeros the balance.',
      'The payment does not rise with inflation. Every month is the same dollar amount.',
      'A payment that continues for life, with no final year, needs a mortality assumption this page does not have. The term is a number of years you choose.'
    ],
    disclaimer: 'This is the monthly payment that amortizes a lump sum to zero. It is not an insurance quote.',
    faqs: [
      { q: 'Why does $100,000 at 5% for 20 years pay $659.96 a month?', a: 'The monthly rate is 0.05 / 12 and the count is 240. The standard amortizing payment on $100,000 at that rate is $659.96 after rounding to the cent.' },
      { q: 'Where does the $58,389.38 of interest come from?', a: 'It is the unrounded payment times 240, minus the $100,000 you started with. The balance is zero at the end, so everything above $100,000 is interest.' },
      { q: 'What happens at a zero interest rate?', a: 'The payment is the lump divided by the number of months. $12,000 over 12 months is $1,000.00 a month, and the interest is $0.00.' },
      { q: 'How is this different from the annuity calculator?', a: 'That page prices a stream you already plan to pay or receive. $200 a month at 6% for 10 years is $32,775.87 as an ordinary future value. This page starts from the lump and solves for the payment.' }
    ],
    relatedLinks: [
      { slug: 'annuity-calculator', label: 'Annuity calculator', note: '$200 a month at 6% for 10 years grows to $32,775.87 as an ordinary annuity and $32,939.75 as an annuity due. You bring the payment. This page solves for it.' },
      { slug: 'pension-choice-calculator', label: 'Pension lump sum calculator', note: 'Discounts a monthly pension and compares it with a lump sum. $600 a month for 20 years at 5% is worth $90,915.19.' },
      { slug: 'lump-sum-present-value-calculator', label: 'Lump sum present value calculator', note: 'One future amount, discounted. $10,000 in 10 years at 5% once a year is $6,139.13. There is no monthly payout.' }
    ]
  }),
  'debt-payoff-calculator': page({
    slug: 'debt-payoff-calculator',
    title: 'Debt Payoff Calculator | ClearCalc',
    h1: 'Debt Payoff Calculator',
    description: 'Months to clear two to four debts, with extra money sent to the smallest balance or the highest rate. The sample clears in 41 months and $1,912.06 of interest.',
    intro: [
      'Each month the page adds that debt’s monthly interest, pays the minimum you typed, and then sends the extra amount to one debt. The extra goes either to the smallest remaining balance or to the highest rate. You need at least two balances above zero. The sample is a $2,000 balance at 22% with a $60 minimum, and a $5,000 balance at 15% with a $100 minimum, plus $100 extra aimed at the highest rate.',
      'That sample clears in 41 months. Interest in the simulation is $1,912.06. Dropping the extra to zero, and still paying both minimums, stretches the same two debts to 79 months and $4,014.82 of interest.',
      'A second pair of runs uses three debts and $200 extra: $1,500 at 24% with a $40 minimum, $8,000 at 6% with a $200 minimum, and $400 at 18% with a $25 minimum. Both orders finish in 26 months. Smallest-balance-first interest is $796.34. Highest-rate-first interest is $767.70. The months matched. The interest did not.'
    ],
    steps: [
      'Choose where the extra payment goes: the smallest balance, or the highest rate. The sample uses the highest rate.',
      'Enter the extra amount for the month. The sample is $100. Zero is allowed.',
      'Enter two to four debts as a balance, an annual rate, and a minimum. A balance of zero is ignored. Each minimum must be more than that debt’s first month of interest.',
      'Press Calculate. The headline is the number of months until every balance is gone.'
    ],
    howHeading: 'How the month-by-month payoff runs',
    howItWorks: [
      'Interest for a debt is the balance times the annual rate divided by 1,200. That charge is added to the balance and to the interest total, then the minimum is paid, capped at the balance so a final month does not overpay. After every minimum, the extra is applied to the debts that still have a balance, sorted by the strategy. If the first target is paid off before the extra is used up, the remainder continues to the next debt in that order.',
      'Minimums stay at the amount you typed until the balance is smaller than the minimum. A real statement often recomputes the minimum as the balance falls. This simulation does not. The run stops at 600 months. If a balance remains, the page rejects the inputs instead of showing a partial payoff.'
    ],
    formula: 'Monthly interest = balance × annual rate / 100 / 12\nPay the minimum on every debt, then pay the extra to one debt\nSmallest-balance order sorts the remaining balances ascending\nHighest-rate order sorts the remaining rates descending\nA minimum must exceed the first month of interest',
    formulaNotes: [
      'The sample minimums clear the first month of interest. On $2,000 at 22%, one month of interest is about $36.67, and the minimum is $60. On $5,000 at 15%, one month is $62.50, and the minimum is $100.',
      'Highest-rate-first and smallest-balance-first can finish in the same number of months and still differ in interest. On the three-debt example the gap is $796.34 − $767.70 = $28.64, both in 26 months.'
    ],
    examplesHeading: 'Worked debt-payoff examples',
    samples: [
      { title: 'Two debts, extra to the highest rate', overrides: {}, blurb: 'The $100 extra goes to the 22% balance before the 15% balance. Minimums are paid on both every month. The interest total is the sum of the monthly charges in the simulation.' },
      { title: 'Three debts, extra to the smallest balance', overrides: { strategy: 1, extra: 200, b1: 1500, r1: 24, m1: 40, b2: 8000, r2: 6, m2: 200, b3: 400, r3: 18, m3: 25 }, blurb: 'The $400 balance is the first target for the extra, then the $1,500 balance, then the $8,000 balance. The 6% debt is last even though it is the largest.' },
      { title: 'The same three debts, extra to the highest rate', overrides: { strategy: 2, extra: 200, b1: 1500, r1: 24, m1: 40, b2: 8000, r2: 6, m2: 200, b3: 400, r3: 18, m3: 25 }, blurb: 'The 24% balance receives the extra first, then the 18% balance, then the 6% balance. The month count matches the other order. The interest is lower.' }
    ],
    table: { heading: 'Months to clear the debts', caption: 'Each headline is this calculator. Interest for the same three debts depends on which balance receives the extra.', headers: ['Order', 'Months'] },
    limitsHeading: 'What the payoff simulation leaves out',
    limits: [
      'Minimums do not fall as a percent of the remaining balance. They stay fixed until the balance is smaller than the minimum.',
      'A new purchase, a fee, or a rate that changes after a promotional period is not added in a later month.',
      'The page needs two balances. One card, with a single monthly rate, is the credit-card payoff calculator.',
      'Six hundred months is the limit. Inputs that cannot clear the debts by then are rejected rather than shown as a remaining balance.'
    ],
    disclaimer: 'This is a month-by-month simulation with fixed minimums. It is not a credit-counseling plan.',
    faqs: [
      { q: 'Why does the sample take 41 months?', a: 'The debts are $2,000 at 22% with a $60 minimum and $5,000 at 15% with a $100 minimum, plus $100 extra sent to the highest rate. The simulation reaches a zero balance in month 41, after $1,912.06 of interest.' },
      { q: 'Why can two orders take the same number of months and different interest?', a: 'On the three-debt example both orders finish in 26 months. Sending the extra to the 24% balance first produces $767.70 of interest. Sending it to the $400 balance first produces $796.34. The last month can arrive on the same count while the balances that accrued interest were different along the way.' },
      { q: 'What if the extra is zero?', a: 'Only the minimums are paid. The sample debts then take 79 months and $4,014.82 of interest. The highest-rate setting has nothing extra to assign.' },
      { q: 'Why was my minimum rejected?', a: 'Each minimum has to be larger than that debt’s first month of interest. A $2,000 balance at 22% charges about $36.67 in the first month. A minimum of $36 or less is rejected because the balance would not fall.' }
    ],
    relatedLinks: [
      { slug: 'credit-card-payoff-calculator', label: 'Credit card payoff calculator', note: 'A $5,000 balance at 21.99% with a $200 payment takes 34 months. That is one card. This page runs two to four balances and an extra payment.' },
      { slug: 'debt-consolidation-calculator', label: 'Debt consolidation calculator', note: 'One new loan against a blended rate you type. On $10,000, a 9% loan for 4 years is $248.85 a month, against $350 of current payments at 18%.' },
      { slug: 'loan-calculator', label: 'Personal and auto loan calculator', note: 'A $25,000 loan at 7.5% for five years is $500.95 a month. That is a new amortizing loan, not a simulation of several minimums.' }
    ]
  }),
  'debt-consolidation-calculator': page({
    slug: 'debt-consolidation-calculator',
    title: 'Debt Consolidation Calculator | ClearCalc',
    h1: 'Debt Consolidation Calculator',
    description: 'One new loan compared with the payment and blended rate you pay now. $10,000 at 9% for 4 years is $248.85 a month, against $350 at 18%.',
    intro: [
      'The new loan is a standard monthly amortization of the combined balance at the new rate and the new term. The old path is the same balance, charged at one blended rate you type, and paid at the combined payment you type. The blended rate is not a balance-weighted average, because the old rates are not entered one by one. That debt-by-debt comparison is the debt-payoff page.',
      'The sample balance is $10,000. Current payments are $350 at a blended 18%. The new loan is 9% for 4 years, a payment of $248.85. New interest is $1,944.82 over 48 months. Staying with the $350 payment takes 38 months and $3,156.02 of interest. The new payment is $101.15 lower, and the new interest is lower too, because 9% replaces 18% even though the term is longer.',
      'A lower payment is not automatically less interest. The same $10,000 at 18% for 5 years has a payment of $253.93, still under $350, and the interest is $5,236.06, which is more than the $3,156.02 of staying with the current payment.'
    ],
    steps: [
      'Enter the combined balance and the current monthly payments added together. The sample is $10,000 and $350.',
      'Enter one blended annual rate for the current debts. The sample is 18%. This is a rate you choose, not a weighted calculation.',
      'Enter the new loan’s annual rate and its term in years. The sample is 9% and 4 years.',
      'Press Calculate. The headline is the new payment. A negative monthly difference means the new payment is lower.'
    ],
    howHeading: 'How the new loan is compared with the current payment',
    howItWorks: [
      'The new payment uses the amortizing formula at the new rate for years × 12 months. New interest is that payment times the number of months, minus the balance. The old path starts from the same balance, adds the blended monthly rate, and subtracts the current payment, repeating until the balance is gone or 600 months pass. If the current payment does not cover interest at the blended rate, the page stops, because the old balance would not fall.',
      'The monthly difference is the new payment minus the current payments. On the sample that is $248.85 − $350 = −$101.15. A two-year loan at the sample 9% rate raises the payment to $456.85, which is $106.85 more than $350, and cuts interest to $964.34. The headline is still the new payment. The interest comparison is in the detail lines.'
    ],
    formula: 'New payment = balance × r × (1 + r)^n / ((1 + r)^n − 1)\nr = new annual rate / 100 / 12, and n = years × 12\nOld path: each month, balance = balance × (1 + blended rate / 100 / 12) − current payment\nThe blended rate is the single rate you type',
    formulaNotes: [
      'The sample old path takes 38 months. That count is the simulation, not a closed-form logarithm printed as a fraction of a payment. The last month pays whatever balance remains, up to the $350 payment.',
      'Replacing 18% with another 18% loan for 5 years produces $5,236.06 of interest against $3,156.02 if you keep paying $350. The payment falls to $253.93 and the interest rises, because the term grew from 38 months to 60.'
    ],
    examplesHeading: 'Worked consolidation examples',
    samples: [
      { title: '$10,000 refinanced at 9% for 4 years', overrides: {}, blurb: 'The new payment is lower than $350 and the new interest is lower than staying on the blended 18% rate. The term is longer: 48 months against 38.' },
      { title: 'The same balance at 18% for 5 years', overrides: { newrate: 18, years: 5 }, blurb: 'The payment is still below $350, so the monthly difference is negative. Interest is higher than the current path because the rate did not fall and the term grew.' },
      { title: 'A 2-year loan at 9%', overrides: { years: 2 }, blurb: 'The payment rises above the current $350. Interest falls to the smallest of the three cases because the balance is gone in 24 months at the lower rate.' }
    ],
    table: { heading: 'New payment against a $350 current payment', caption: 'Each headline is the new loan’s monthly payment. The detail lines hold the interest on both paths.', headers: ['New loan', 'Payment'] },
    limitsHeading: 'What the consolidation comparison leaves out',
    limits: [
      'The blended rate is one number you type. It is not the balance-weighted average of several rates, because those rates are not entered.',
      'An origination fee on the new loan is not subtracted. The business-loan page is where an upfront fee changes the APR.',
      'The old path uses the same payment every month. A minimum that falls as the balance falls is the debt-payoff page, and only when you enter each debt.',
      'The simulation of the old path stops at 600 months. A payment that does not cover interest at the blended rate is rejected.'
    ],
    disclaimer: 'The blended rate is a rate you type for the old debts. This is not a lender’s consolidation offer.',
    faqs: [
      { q: 'Why is the sample new payment $248.85?', a: '$10,000 at 9% for 48 months uses a monthly rate of 0.09 / 12. The amortizing payment is $248.85. That is $101.15 below the $350 you said you pay now.' },
      { q: 'Why is the old interest $3,156.02 if I never typed each rate?', a: 'The old path charges the single 18% blended rate on the remaining balance and subtracts $350 a month. It reaches zero in 38 months. The interest total of that simulation is $3,156.02. A balance-weighted blend would need each old rate, which this page does not ask for.' },
      { q: 'Can a lower payment cost more interest?', a: 'Yes. $10,000 at 18% for 5 years pays $253.93 a month, which is less than $350, and the interest is $5,236.06. Staying with $350 at 18% costs $3,156.02 of interest and finishes in 38 months.' },
      { q: 'What is the monthly difference?', a: 'New payment minus the current payments. Negative means the new payment is lower. On the sample it is −$101.15. On the two-year 9% loan it is $106.85, because $456.85 is above $350.' }
    ],
    relatedLinks: [
      { slug: 'debt-payoff-calculator', label: 'Debt payoff calculator', note: 'Two sample debts, $2,000 at 22% and $5,000 at 15%, with $100 extra to the highest rate, clear in 41 months. Each rate is entered. This page uses one blended rate.' },
      { slug: 'loan-calculator', label: 'Personal and auto loan calculator', note: 'A $25,000 loan at 7.5% for five years is $500.95 a month. It does not compare that payment with the payments you already make.' },
      { slug: 'apr-calculator', label: 'APR calculator', note: 'An APR from a note rate and prepaid finance charges. The consolidation page uses the note rates you type and does not add a fee.' }
    ]
  }),
  'college-cost-calculator': page({
    slug: 'college-cost-calculator',
    title: 'College Cost Calculator | ClearCalc',
    h1: 'College Cost Calculator',
    description: 'A future college bill and the monthly deposit that funds the gap. $20,000 growing at 4% for 10 years is a $29,604.89 bill, and the sample deposit is $138.20 a month.',
    intro: [
      'The future bill is this year’s cost compounded once a year at an increase you type. The savings you already have grow once a year at a return you type. The gap is the future bill minus the grown savings, and it cannot go below zero. The headline is the end-of-month deposit that reaches that gap.',
      'The sample starts from $20,000 a year in today’s dollars, rising 4% for 10 years, which is a future cost of $29,604.89. Savings of $5,000 growing at 5% become $8,144.47. The gap is $21,460.41, and the monthly deposit that funds it at 5% is $138.20.',
      'Both rates are yours. The page is not a college’s bill and it is not a financial-aid offer. If the savings you already have grow past the future cost, the deposit is $0.00.'
    ],
    steps: [
      'Enter this year’s cost and the annual increase. The sample is $20,000 and 4%.',
      'Enter the years until you pay the bill. The sample is 10.',
      'Enter what is already saved and the annual return on those savings. The sample is $5,000 and 5%. The same return is used for the new monthly deposits.',
      'Press Calculate. The headline is the monthly deposit. A gap of zero means the headline is $0.00.'
    ],
    howHeading: 'How the future cost and the monthly deposit are calculated',
    howItWorks: [
      'The future cost is current cost × (1 + annual increase / 100) raised to the years. Savings already on hand grow as saved × (1 + annual return / 100) raised to the years. Those two growth rates compound once a year. The gap is the future cost minus the grown savings, or zero if the savings are ahead.',
      'The monthly deposit uses a different split of the same annual return. The monthly rate is the annual return divided by 1,200, and the count is years × 12. The deposit is the ordinary-annuity payment that grows to the gap: gap × monthly rate / ((1 + monthly rate)^n − 1). A zero return divides the gap by the number of months. One year, a $20,000 cost, no increase, no savings, and a zero return is $1,666.67 a month, which is $20,000 / 12.'
    ],
    formula: 'Future cost = current × (1 + increase / 100)^years\nGrown savings = saved × (1 + return / 100)^years\nGap = max(0, future cost − grown savings)\nMonthly deposit = gap × r / ((1 + r)^n − 1)\nr = return / 100 / 12, and n = years × 12\nIf r = 0, deposit = gap / n',
    formulaNotes: [
      '$20,000 × 1.04^10 is $29,604.89 only after cent rounding. $5,000 × 1.05^10 is $8,144.47 the same way. The gap of $21,460.41 uses the unrounded powers, so it is one cent away from the difference of the two rounded headlines.',
      'Savings of $200,000 at the sample 5% grow to $325,778.93, which is more than the $29,604.89 future cost. The gap is $0.00 and the monthly deposit is $0.00. The page does not tell you to contribute a negative amount.'
    ],
    examplesHeading: 'Worked college-cost examples',
    samples: [
      { title: '$20,000 rising 4% for 10 years', overrides: {}, blurb: 'The bill and the $5,000 already saved both grow annually. The deposit that fills the gap compounds monthly at the same 5% return used for the savings.' },
      { title: 'One year, nothing saved, no growth', overrides: { inflation: 0, earn: 0, saved: 0, years: 1 }, blurb: 'The future cost stays $20,000.00. With a zero return the deposit is the gap divided by 12 months.' },
      { title: 'Savings that already cover the bill', overrides: { saved: 200000 }, blurb: 'The future cost is still $29,604.89. The savings grow past it, the gap is zero, and the monthly deposit is zero.' }
    ],
    table: { heading: 'Monthly deposit for three college cases', caption: 'Each headline is this calculator. The deposit funds the gap after savings already on hand have grown.', headers: ['Case', 'Monthly deposit'] },
    limitsHeading: 'What the college projection leaves out',
    limits: [
      'The increase and the return stay constant. A tuition jump in one year, or a return that varies, is not a separate input.',
      'Financial aid, a scholarship, and a tax credit are not subtracted from the future cost. Lower the current cost yourself if you want them reflected.',
      'The savings already on hand compound once a year. The new deposits compound monthly. Those are two different conventions inside one result.',
      'The page funds one future bill. Four years of tuition, each due in a different year, are four gaps, not one.'
    ],
    disclaimer: 'The cost increase and the savings return are rates you type. This is not a college bill and it is not a financial-aid offer.',
    faqs: [
      { q: 'Why is $20,000 at 4% for 10 years a bill of $29,604.89?', a: 'The future cost is 20,000 × 1.04^10. That power is about 1.480244, and the dollar result rounded to the cent is $29,604.89.' },
      { q: 'Why is the sample deposit $138.20 rather than the gap divided by 120?', a: 'The gap of $21,460.41 earns 5% while you deposit, so the deposit is smaller than a straight split. The monthly rate is 0.05 / 12, and the payment is the ordinary annuity that grows to the gap over 120 months.' },
      { q: 'What if the savings already cover the future cost?', a: 'The gap is set to zero and the deposit is $0.00. Savings of $200,000 at 5% for 10 years grow to $325,778.93, against a future cost of $29,604.89.' },
      { q: 'Does the down payment on a 529 or a tax credit show up?', a: 'Only if you put it in the numbers yourself. The page does not know a plan, a credit, or a school’s aid formula. The current cost, the increase, the savings, and the return are the whole calculation.' }
    ],
    relatedLinks: [
      { slug: 'compound-interest-calculator', label: 'Compound interest calculator', note: '$10,000 plus $250 a month at 7% for 10 years is $63,367.82. That page does not inflate a future bill or solve for the deposit that closes a gap.' },
      { slug: 'lump-sum-present-value-calculator', label: 'Lump sum present value calculator', note: '$10,000 discounted 10 years at 5% once a year is $6,139.13. That is one future amount pulled back to today, not a monthly deposit.' },
      { slug: 'household-budget-calculator', label: 'Household budget calculator', note: 'Subtracts the amounts you already spend from monthly income. On $5,000 of income the sample leaves $1,200.00 unassigned. It does not project a college bill.' }
    ]
  }),
  'bond-calculator': page({
    slug: 'bond-calculator',
    title: 'Bond Price Calculator | ClearCalc',
    h1: 'Bond Price Calculator',
    description: 'Price of a bond with semiannual coupons. A face value of $1,000, a 5% coupon, and a 5% yield is $1,000.00.',
    intro: [
      'The price is the present value of the coupons plus the present value of the face amount, using a semiannual split. The annual coupon and the annual yield are each divided by two, and the number of periods is the years times two. A face value of $1,000 with a 5% coupon and a 5% yield is $1,000.00, because a coupon that equals the yield prices the bond at par.',
      'The form opens with a 6% yield against that 5% coupon. The price is $925.61, below face, because the coupon is smaller than the yield. A 6% coupon, a 4% yield, and five years to maturity price a $1,000 face at $1,089.83, above face.',
      'Accrued interest, a call date, and taxes are not in the price. The settlement is treated as a coupon date, so the first coupon is one full period away. This is not a bond quote.'
    ],
    steps: [
      'Enter the face value. The sample is $1,000.',
      'Enter the annual coupon percent and the yield to maturity. The par case sets both to 5%. The form opens at a 5% coupon and a 6% yield.',
      'Enter the years to maturity, from 1 to 50. Periods will be twice that number.',
      'Press Calculate. The headline is the price. Compare it with the face value to see a discount or a premium.'
    ],
    howHeading: 'How the semiannual price is calculated',
    howItWorks: [
      'Each coupon is face × annual coupon percent / 100 / 2. The yield per period is the annual yield percent / 100 / 2. For each period from 1 through years × 2, the coupon is divided by (1 + yield per period) raised to that period, and those present values are added. The face amount is divided by the same factor at the final period and added once.',
      'When the coupon rate equals the yield, every discount on a coupon is offset by the way the face is discounted, and the sum is the face value apart from a fraction of a cent. The 5% and 5% case lands on $1,000.00. A higher yield discounts the same coupons more heavily, so the 6% yield on a 5% coupon is the $925.61 discount. A coupon above the yield is the premium.'
    ],
    formula: 'Periods = years × 2\nCoupon = face × annual coupon percent / 100 / 2\nYield per period = annual yield / 100 / 2\nPrice = sum of coupon / (1 + yield per period)^t for t = 1 to periods\n+ face / (1 + yield per period)^periods\nCoupon equal to yield prices the bond at par',
    formulaNotes: [
      'The par case pays a $25.00 coupon twenty times. Discounting those coupons and the $1,000 face at 2.5% per period returns $1,000.00.',
      'The premium sample pays a $30.00 coupon ten times and discounts at 2% per period. The price is $1,089.83, which is $89.83 above the $1,000 face.'
    ],
    examplesHeading: 'Worked bond-price examples',
    samples: [
      { title: 'A 5% coupon at a 5% yield', overrides: { yield: 5 }, blurb: 'Face $1,000, ten years, semiannual. The coupon rate equals the yield, so the price is the face value.' },
      { title: 'A 5% coupon at a 6% yield', overrides: {}, blurb: 'The same coupons discounted at a higher yield. The price falls below face. The page’s rule is the same one that put the par bond at $1,000.00.' },
      { title: 'A 6% coupon at a 4% yield for 5 years', overrides: { coupon: 6, yield: 4, years: 5 }, blurb: 'The coupon is above the yield, so the price is above face. Five years means ten semiannual periods, not five.' }
    ],
    table: { heading: 'Semiannual prices for a $1,000 face', caption: 'Each headline is this calculator. The coupon and the yield are split in half.', headers: ['Coupon and yield', 'Price'] },
    limitsHeading: 'What this bond price leaves out',
    limits: [
      'Accrued interest between coupon dates is not added. The price assumes the next coupon is one full semiannual period away.',
      'A call date, a put date, and a sinking fund are not modeled. The face comes back at the maturity you typed.',
      'Taxes on the coupon and on a discount are not subtracted. The price is before tax.',
      'The coupon is fixed. A floating-rate note or an inflation-linked principal is not this formula.'
    ],
    disclaimer: 'This is a semiannual present-value price. It is not a bond quote.',
    faqs: [
      { q: 'Why is a 5% coupon at a 5% yield priced at $1,000.00?', a: 'The coupon and the yield are both split in half, so the period coupon is $25 and the period yield is 2.5%. Discounting 20 coupons and the $1,000 face at that yield returns the face value. A coupon equal to the yield prices the bond at par.' },
      { q: 'Why does a 6% yield produce $925.61?', a: 'The coupons are still $25 twice a year, but each one is discounted at 3% per period instead of 2.5%. The face is discounted at that higher rate too. The sum is $925.61, which is below the $1,000 face because the coupon is below the yield.' },
      { q: 'How many periods does a 5-year bond have?', a: 'Ten. This page always uses two periods a year. The premium sample, a 6% coupon and a 4% yield over 5 years, discounts ten coupons of $30 and prices the bond at $1,089.83.' },
      { q: 'Does the price include accrued interest?', a: 'No. The first coupon is assumed to be one full period away. A settlement in the middle of a coupon period would add accrued interest, and this page does not.' }
    ],
    relatedLinks: [
      { slug: 'lump-sum-present-value-calculator', label: 'Lump sum present value calculator', note: 'Discounts one future amount and ignores coupons. $10,000 in 10 years at 5% once a year is $6,139.13.' },
      { slug: 'irr-calculator', label: 'IRR calculator', note: 'The rate that sets the net present value of a cash-flow list to zero. An investment of −100 followed by 110 is 10% per period. A bond yield here is an input, not a solved IRR.' },
      { slug: 'cagr-calculator', label: 'CAGR calculator', note: 'From 100 to 200 in 10 years is 7.1773% per year. That is growth between two balances, not a coupon bond.' }
    ]
  }),
  'fund-cost-calculator': page({
    slug: 'fund-cost-calculator',
    title: 'Fund Expense Calculator | ClearCalc',
    h1: 'Fund Expense Calculator',
    description: 'Ending balance after an annual expense ratio. $10,000 at 7% before a 0.50% expense ratio ends at $35,005.57 after 20 years.',
    intro: [
      'The expense ratio is applied once a year to the whole balance. The net growth rate is (1 + return) × (1 − expense ratio) − 1, with both percents converted to decimals. A 7% return and a 0.50% expense ratio produce a net annual growth of 6.4650%. That is not 7% minus 0.50%.',
      'The sample starts at $10,000 and runs for 20 years. The balance is $35,005.57. The same return with a zero expense ratio ends at $38,696.84. The fee drag is $3,691.27, the difference between those two endings.',
      'A load, a 12b-1 fee on top of the ratio, and taxes are not added. Contributions during the 20 years are not added either. The expense ratio is limited to 5%, because a larger number is more often a return typed in the wrong box.'
    ],
    steps: [
      'Enter the starting balance. The sample is $10,000.',
      'Enter the annual return before the expense ratio. The sample is 7%.',
      'Enter the annual expense ratio, from 0 to 5 percent. The sample is 0.50%.',
      'Enter the years and press Calculate. The headline is the ending balance. The drag is the zero-expense ending minus this one.'
    ],
    howHeading: 'How the expense ratio reduces the balance',
    howItWorks: [
      'The net rate multiplies the gross growth factor by the share of the balance left after the expense ratio. For the sample, 1.07 × (1 − 0.005) − 1 = 1.07 × 0.995 − 1 = 0.06465, which is 6.4650%. The ending balance is the start times (1 + net rate) raised to the years. Subtracting the expense ratio from the return, 7 − 0.50 = 6.50, would use 6.50% instead of 6.4650% and would overstate the balance.',
      'A zero return and a 1% expense ratio for one year turns $10,000 into $9,900.00. The net rate is (1 + 0) × (1 − 0.01) − 1 = −1%. The drag against a zero-expense ending of $10,000.00 is $100.00. That is the cleanest view of the formula, because no positive return is mixed in.'
    ],
    formula: 'Net rate = (1 + return / 100) × (1 − expense ratio / 100) − 1\nEnding balance = start × (1 + net rate)^years\nZero-expense ending = start × (1 + return / 100)^years\nFee drag = zero-expense ending − ending balance',
    formulaNotes: [
      '6.50% would be the return minus the expense ratio. The page does not do that. 1.07 × 0.995 − 1 is 6.4650%, and 20 years of that rate on $10,000 is $35,005.57.',
      'An expense ratio above 5% is rejected. The check exists so a 7 typed into the expense box, meaning 7%, is not silently applied as a fee that consumes most of a normal return.'
    ],
    examplesHeading: 'Worked fund-expense examples',
    samples: [
      { title: '0.50% expenses on a 7% return', overrides: {}, blurb: 'Twenty years on $10,000. The net rate is 6.4650%, not 6.50%. The drag is the gap versus the same return with no expense ratio.' },
      { title: 'The same return with no expense ratio', overrides: { expense: 0 }, blurb: 'The net rate is the full 7%. This is the comparison balance used to compute the drag in the other rows. The drag here is zero.' },
      { title: 'A 1% expense ratio and no return', overrides: { years: 1, expense: 1, gross: 0 }, blurb: 'One year, a zero gross return, and a 1% expense ratio. The balance falls by exactly the expense ratio, which is the formula with no growth mixed in.' }
    ],
    table: { heading: 'Ending balances after the expense ratio', caption: 'Each headline is this calculator. The net rate is (1 + return) × (1 − expense ratio) − 1.', headers: ['Case', 'Ending balance'] },
    limitsHeading: 'What the expense drag leaves out',
    limits: [
      'A front load and a back load are not subtracted. Only the annual expense ratio, applied once a year, is in the net rate.',
      'A 12b-1 fee that is already inside the expense ratio should not be typed again. A fee on top of the ratio is not a separate box.',
      'Taxes are not subtracted. The drag is the expense ratio alone.',
      'No contribution is added along the way. A monthly deposit belongs on the compound interest calculator, which does not apply this expense ratio.'
    ],
    disclaimer: 'The expense ratio is applied once a year with the multiplicative net rate. This is not a fund prospectus.',
    faqs: [
      { q: 'Why is 7% with a 0.50% expense ratio a net rate of 6.4650%?', a: 'The formula is (1 + 0.07) × (1 − 0.005) − 1. That is 1.07 × 0.995 − 1 = 0.06465, or 6.4650%. Subtracting 0.50 from 7 would leave 6.50, and this page does not do that.' },
      { q: 'What is the $3,691.27 fee drag?', a: 'The zero-expense ending on $10,000 at 7% for 20 years is $38,696.84. The 0.50% expense path ends at $35,005.57. The difference is $3,691.27.' },
      { q: 'Why does a 1% fee on a zero return end at $9,900.00?', a: 'Net rate = (1 + 0) × (1 − 0.01) − 1 = −0.01. One year on $10,000 is $9,900.00. The drag against no expense ratio is $100.00.' },
      { q: 'Why is an expense ratio above 5% rejected?', a: 'A number that large is often a return typed in the expense box. The page accepts 0 through 5 percent and asks you to check anything above that.' }
    ],
    relatedLinks: [
      { slug: 'compound-interest-calculator', label: 'Compound interest calculator', note: '$10,000 at 7% for 10 years with no deposit grows to $20,096.61. There is no expense ratio in that projection.' },
      { slug: 'roth-ira-calculator', label: 'Roth IRA calculator', note: 'Caps a 2026 contribution and projects growth. It does not apply a fund expense ratio of the form (1 + return) × (1 − expense) − 1.' },
      { slug: 'cagr-calculator', label: 'CAGR calculator', note: 'From 100 to 200 in 10 years is 7.1773% per year. That rate is solved from two balances. It is not an expense ratio.' }
    ]
  }),
  'rebate-vs-rate-calculator': page({
    slug: 'rebate-vs-rate-calculator',
    title: 'Cash Rebate or Low Rate Calculator | ClearCalc',
    h1: 'Cash Rebate or Low Rate Calculator',
    description: 'Interest on a special rate compared with interest after a rebate. On $30,000 for 60 months, 1.9% costs $1,471.29 of interest and a $2,000 rebate at 6.9% costs $5,186.81.',
    intro: [
      'One choice finances the full amount at the special rate. The other subtracts the rebate and finances what remains at the higher rate. Both loans run for the whole term you type. The headline says which choice costs less interest, or that the interest totals match.',
      'The sample finances $30,000 at 1.9% for 60 months, against a $2,000 rebate that leaves $28,000 financed at 6.9%. The special-rate interest is $1,471.29. The rebate interest is $5,186.81. The special rate costs less, by $3,715.52.',
      'Interest is the comparison, not the payment and not the cash you part with if you care about principal. A dealer fee, sales tax on the rebate, and paying the loan off early are not included. If both rates are 0%, the interest totals match even though the payments do not.'
    ],
    steps: [
      'Enter the amount financed if you take the special rate. The sample is $30,000.',
      'Enter the rebate you would get instead, and the two annual rates. The sample rebate is $2,000, the special rate is 1.9%, and the rebate rate is 6.9%.',
      'Enter the term in months, from 1 to 96. The sample is 60. Both choices use that same term.',
      'Press Calculate. The headline names the cheaper interest total. The lines show each payment and each interest amount.'
    ],
    howHeading: 'How the two interest totals are compared',
    howItWorks: [
      'Each side uses the standard monthly payment on its own principal. The special-rate principal is the amount you typed. The rebate principal is that amount minus the rebate. Interest is the payment times the months, minus that side’s principal. The difference reported is special-rate interest minus rebate interest. A negative difference means the special rate costs less interest.',
      'Setting both rates to 6.9% makes the rebate the cheaper interest, by $370.49, because you finance $2,000 less at the same rate: $5,557.29 against $5,186.81. Setting both rates to 0% makes both interest totals $0.00, so the headline says they match. The payments still differ, $500.00 against $466.67, because the principals differ. The page is comparing interest, and at a zero rate there is none to compare.'
    ],
    formula: 'Special payment = payment on the full amount at the special rate\nRebate payment = payment on (amount − rebate) at the higher rate\nInterest = payment × months − principal for that choice\nDifference = special interest − rebate interest\nBoth loans run the full term',
    formulaNotes: [
      'The sample payments are $524.52 at 1.9% on $30,000 and $553.11 at 6.9% on $28,000. The lower rate wins on interest even though its principal is larger.',
      'A rebate equal to or larger than the amount financed is rejected. There is no loan left on the rebate side, so there is no payment to compare.'
    ],
    examplesHeading: 'Worked rebate-or-rate examples',
    samples: [
      { title: '1.9% against a $2,000 rebate at 6.9%', overrides: {}, blurb: 'Both loans run 60 months. The special rate finances $2,000 more and still costs less interest, because 1.9% is far below 6.9%.' },
      { title: 'Both choices at 6.9%', overrides: { low: 6.9, high: 6.9 }, blurb: 'The rate is no longer a reason to skip the rebate. Financing $28,000 instead of $30,000 at the same rate costs less interest. The headline follows the interest, not the payment.' },
      { title: 'Both rates at zero', overrides: { low: 0, high: 0 }, blurb: 'Interest is $0.00 on both sides, so the totals match. The payments still differ because one side finances the rebate. The page does not call the lower payment the winner.' }
    ],
    table: { heading: 'Which choice costs less interest', caption: 'Each headline is this calculator. The term is the full 60 months in every row.', headers: ['Rates', 'Cheaper interest'] },
    limitsHeading: 'What the rebate comparison leaves out',
    limits: [
      'Paying the loan off early is not modeled. A rebate that wins over 60 months can lose if you sell the car in the first year, and this page holds both loans to the end.',
      'Sales tax on the rebate, a dealer fee, and a different term for each offer are not inputs. Both sides use one term.',
      'The headline compares interest, not total cash paid and not the size of the payment. At a zero rate the interest tie hides a lower payment on the rebate side.',
      'The rebate has to be smaller than the amount financed. A rebate that covers the whole price is rejected.'
    ],
    disclaimer: 'Both choices are held for the whole term. This is not a dealer worksheet, and an early payoff is not included.',
    faqs: [
      { q: 'Why does 1.9% beat a $2,000 rebate at 6.9% in the sample?', a: 'Interest at 1.9% on $30,000 for 60 months is $1,471.29. Interest at 6.9% on $28,000 is $5,186.81. The special rate costs $3,715.52 less interest. The payments are $524.52 and $553.11.' },
      { q: 'When does the rebate cost less interest?', a: 'When both rates are 6.9%, interest is $5,557.29 on $30,000 and $5,186.81 on $28,000. The rebate costs $370.49 less interest because the principal is smaller and the rate is the same.' },
      { q: 'Why do two zero rates count as a match?', a: 'Interest is $0.00 on both sides. The payments are $500.00 and $466.67, so the rebate still has the lower payment, but the headline compares interest only.' },
      { q: 'Does the page assume I keep the loan for the full term?', a: 'Yes. Both interest totals are the payment times the months, minus principal. An early payoff would cut the interest on the higher-rate loan by more, and that path is not computed.' }
    ],
    relatedLinks: [
      { slug: 'vehicle-loan-calculator', label: 'Vehicle loan calculator', note: 'Builds the amount financed from price, tax, trade-in, and fees. The sample finances $29,240.00 and the payment is $565.29. It does not compare a rebate with a special rate.' },
      { slug: 'car-payment-calculator', label: 'Car payment calculator', note: '$25,000 at 6% for 60 months is $483.32 a month. That is one loan. This page runs two loans and compares the interest.' },
      { slug: 'loan-calculator', label: 'Personal and auto loan calculator', note: 'A $25,000 loan at 7.5% for five years is $500.95 a month. One rate and one term, with no rebate beside it.' }
    ]
  }),
  'irr-calculator': page({
    slug: 'irr-calculator',
    title: 'IRR Calculator | ClearCalc',
    h1: 'IRR Calculator',
    description: 'Internal rate of return for cash flows one period apart. The IRR of −100 followed by 110 is 10.0000% per period.',
    intro: [
      'The internal rate of return is the rate that sets the net present value of the cash flows to zero. The first number is time zero. Each later number is one period after the one before it. Money you invest is negative. Money you receive is positive. An investment of 100 that returns 110 one period later is entered as −100, 110, and the rate is 10.0000% per period.',
      'The form opens on −1000, 400, 400, 400. That stream’s rate is 9.7010% per period. A third stream, −1000, 500, 600, is 6.3941% per period. The period is whatever spacing you meant when you typed the list. The page does not turn a monthly list into an annual rate.',
      'If the signs change more than once, more than one rate can make the net present value zero. The page returns the rate inside the bracket it searched. A compound annual growth rate between two balances is the CAGR page. It is not this list.'
    ],
    steps: [
      'Enter at least two cash flows, separated by commas. The first is time zero and is negative when you are investing.',
      'Keep the list to 40 numbers. Spaces and semicolons are treated as separators along with commas.',
      'Press Calculate. The headline is the rate per period, in percent, to four decimal places.',
      'Check the NPV line. It should be about zero. That is the condition the search is trying to meet.'
    ],
    howHeading: 'How the rate is searched',
    howItWorks: [
      'Net present value at a trial rate is the sum of each cash flow divided by (1 + rate) raised to its index. The first cash flow is divided by (1 + rate)^0, which is itself. The search starts between −99% and 100%. If the NPV does not change sign on that interval, the upper end is widened to 1,000%. If it still does not change sign, the page says no rate was found in that range. Eighty bisections then narrow the bracket where the NPV changes sign.',
      '−100 + 110 / 1.10 = 0, so 10% is exact for that pair, and the headline is 10.0000%. The NPV line prints about zero. It can show −0 because of the way a tiny residual is formatted. The rate is per period, so a list of monthly cash flows is a monthly rate.'
    ],
    formula: 'NPV(rate) = sum of cash flow at t / (1 + rate)^t\nThe IRR is the rate where NPV is zero\nThe first cash flow is t = 0\nSearch bracket: −99% to 100%, widened to 1,000% if needed',
    formulaNotes: [
      '−100, 110 is the check that does not depend on a search tolerance you have to trust from a longer list. 110 / 1.10 = 100, which offsets the −100 at time zero.',
      'A list with more than one sign change can have more than one IRR. The page returns one rate, the one inside the bracket it searched, and the NPV line is the way to see that the rate it found does zero the NPV.'
    ],
    examplesHeading: 'Worked IRR examples',
    samples: [
      { title: '−100 followed by 110', overrides: { flows: '-100, 110' }, blurb: 'One period. The rate that offsets a 100 investment with a 110 receipt is exactly 10%. The headline prints 10.0000% per period.' },
      { title: '−1000, then 400 three times', overrides: {}, blurb: 'The opening sample. Three equal receipts, one period apart, against an investment at time zero. The rate is the one that drives this list’s NPV to about zero.' },
      { title: '−1000, 500, 600', overrides: { flows: '-1000, 500, 600' }, blurb: 'Two receipts of different sizes. The rate is still one number per period. It is not a CAGR between the first and the last number, because the middle cash flow would be ignored by that shortcut.' }
    ],
    table: { heading: 'Rates that zero the net present value', caption: 'Each headline is this calculator. The rate is per period, and the first cash flow is time zero.', headers: ['Cash flows', 'IRR'] },
    limitsHeading: 'What this IRR leaves out',
    limits: [
      'The rate is per period, not automatically per year. A monthly list is a monthly rate. Annualizing it is a separate step this page does not take.',
      'More than one sign change can mean more than one rate. The page returns the root inside its search bracket, not every root.',
      'Flows that never change the sign of the NPV between −99% and 1,000% are rejected. A list of all positive numbers has no IRR in that range.',
      'Two balances and a year count are the CAGR calculator. From 100 to 200 in 10 years is 7.1773% per year, and that calculation does not accept a middle cash flow.'
    ],
    disclaimer: 'This is one rate that sets the NPV of the list to about zero. It is not a unique IRR when the signs change more than once, and it is not a CAGR.',
    faqs: [
      { q: 'Why is the IRR of −100, 110 equal to 10%?', a: 'NPV at 10% is −100 + 110 / 1.10 = 0. The rate is 10.0000% per period. The first number is time zero, so it is not discounted.' },
      { q: 'What does the opening list −1000, 400, 400, 400 return?', a: '9.7010% per period. That is the rate the search finds where the NPV of those four cash flows is about zero.' },
      { q: 'Why might the NPV line say −0?', a: 'The residual after 80 bisections is a tiny number, sometimes just below zero. The formatter prints it as −0. The rate is still the value that makes the NPV about zero.' },
      { q: 'How is this different from CAGR?', a: 'CAGR uses a starting balance, an ending balance, and a year count. From 100 to 200 in 10 years is 7.1773% per year. IRR uses every cash flow in the list, and the rate is per period rather than per year unless your periods are years.' }
    ],
    relatedLinks: [
      { slug: 'cagr-calculator', label: 'CAGR calculator', note: 'From 100 to 200 in 10 years is 7.1773% per year. Two balances and a year count. A middle cash flow is not part of that formula.' },
      { slug: 'roi-calculator', label: 'ROI calculator', note: 'ROI is (final value − cost) / cost. A move from 100 to 200 is 100% over the whole span. It is not a per-period rate that zeros an NPV.' },
      { slug: 'bond-calculator', label: 'Bond price calculator', note: 'A $1,000 face, a 5% coupon, and a 5% yield price at $1,000.00. The yield is an input. This page solves for a rate from a list of cash flows.' }
    ]
  }),
  'fha-loan-calculator': page({
    slug: 'fha-loan-calculator',
    title: 'FHA Loan Calculator | ClearCalc',
    h1: 'FHA Loan Calculator',
    description: 'FHA payment with a 1.75% upfront premium and annual MIP from Mortgagee Letter 2023-05. The sample, $300,000 with $10,500 down at 6.5% for 30 years, is $1,996.87 a month at the start.',
    intro: [
      'The upfront mortgage insurance premium is 1.75% of the base loan, and it is added to the amount that amortizes. The annual premium follows Mortgagee Letter 2023-05. The dollar split in that letter is a national conforming loan limit. This page uses the FHFA 2026 baseline of $832,750 for that split. A county FHA limit is not applied.',
      'The sample price is $300,000 with $10,500 down, so the base loan is $289,500.00 and the loan-to-value ratio is 96.50%. The upfront premium is $5,066.25. Because the term is 30 years, the base is at or under $832,750, and the loan-to-value ratio is above 95%, the annual premium is 0.55% for the life of the loan, which is $135.01 a month. Principal and interest on the amount including the upfront premium is $1,861.86. The starting payment is $1,996.87.',
      'Streamline refinances and case numbers from before 2009 are not these rates. The headline is the payment at the start. A premium that the letter collects for 11 years is still in that starting payment. The page does not build a later payment with the annual premium removed.'
    ],
    steps: [
      'Enter the price or value and the down payment. The sample is $300,000 and $10,500. The base loan is the difference.',
      'Enter the annual interest rate. The sample is 6.5%.',
      'Choose 15 or 30 years. The annual MIP schedule depends on that choice, on whether the base loan is above $832,750, and on the loan-to-value ratio.',
      'Press Calculate. The headline is principal and interest plus the monthly MIP at the start.'
    ],
    howHeading: 'How the upfront premium and the annual MIP are applied',
    howItWorks: [
      'Loan-to-value is the base loan divided by the price, before the upfront premium is added. The annual rate then comes from Mortgagee Letter 2023-05, with $832,750 standing in for the letter’s conforming-limit split. For a term longer than 15 years and a base at or under $832,750: 0.50% for 11 years when the loan-to-value is at or under 90%, 0.50% for the term when it is above 90% and at or under 95%, and 0.55% for the term when it is above 95%. Above $832,750 those three cells are 0.70% for 11 years, 0.70% for the term, and 0.75% for the term.',
      'For a 15-year term and a base at or under $832,750: 0.15% for 11 years when the loan-to-value is at or under 90%, and 0.40% for the term otherwise. Above $832,750: 0.15% for 11 years at or under 78%, 0.40% for 11 years above 78% and at or under 90%, and 0.65% for the term above 90%. The monthly MIP is the financed amount, including the upfront premium, times that annual rate, divided by 12. A 15-year loan on the sample price with $30,000 down has a 90% loan-to-value and a 0.15% annual premium for 11 years. The starting payment is $2,427.49.'
    ],
    formula: 'Base = price − down payment\nUpfront MIP = 1.75% of the base, added to the loan\nLTV = base / price\nAnnual MIP from Mortgagee Letter 2023-05, split at the FHFA 2026 baseline of $832,750\nMonthly MIP = (base + upfront) × annual MIP rate / 12\nHeadline = principal and interest on (base + upfront) + monthly MIP',
    formulaNotes: [
      'A price of $900,000 with $45,000 down has a base of $855,000, which is above $832,750, and a loan-to-value of 95%. The 30-year annual premium is 0.70% for the term. The starting payment at 6.5% is $6,006.23.',
      'The 11-year duration is named in the detail line. The headline still includes that month’s MIP. This page does not show the payment in year 12 after a premium that lasts 11 years has dropped off.'
    ],
    examplesHeading: 'Worked FHA examples',
    samples: [
      { title: '$300,000 with 3.5% down, 30 years', overrides: {}, blurb: 'Base $289,500, which is under $832,750, and a loan-to-value of 96.50%. The annual premium is 0.55% for the term. Upfront MIP of 1.75% is added to the loan before the payment is computed.' },
      { title: 'The same price, 15 years, 10% down', overrides: { down: 30000, years: 15 }, blurb: 'The loan-to-value is 90.00% and the base is under the $832,750 split, so the 15-year schedule uses 0.15% for 11 years. The headline is the starting month, with that MIP included.' },
      { title: 'A base loan above $832,750', overrides: { price: 900000, down: 45000 }, blurb: 'The base is $855,000 and the loan-to-value is 95%. The 30-year premium above the FHFA 2026 baseline is 0.70% for the term. This split is not a county loan limit.' }
    ],
    table: { heading: 'Starting FHA payments', caption: 'Each headline includes principal, interest, and the monthly MIP at the start. The dollar split is $832,750.', headers: ['Loan', 'Starting payment'] },
    limitsHeading: 'What this FHA payment leaves out',
    limits: [
      'County FHA loan limits are not applied. The only dollar split is the FHFA 2026 baseline conforming limit of $832,750, used the way Mortgagee Letter 2023-05 uses the conforming limit.',
      'Streamline refinances and mortgages with case numbers assigned before 2009 are not these annual rates.',
      'Property tax, homeowners insurance, and a rate that is not fixed are not in the payment. The interest rate is the one you type.',
      'The headline is the first month. When the letter collects the annual premium for 11 years, the page names that duration and does not compute the payment after the premium ends.'
    ],
    disclaimer: 'Upfront MIP is 1.75%. Annual MIP is Mortgagee Letter 2023-05, split at the FHFA 2026 baseline of $832,750. This is not a county loan limit and it is not an underwriter’s case.',
    faqs: [
      { q: 'Why is the sample payment $1,996.87?', a: 'The base loan is $289,500. Upfront MIP of 1.75% is $5,066.25, so the amortizing amount is $294,566.25. Principal and interest at 6.5% for 30 years is $1,861.86. Annual MIP of 0.55% is $135.01 a month. The sum is $1,996.87.' },
      { q: 'Why is the annual rate 0.55% on the sample?', a: 'The term is longer than 15 years, the base is at or under $832,750, and the loan-to-value is 96.50%, which is above 95%. Mortgagee Letter 2023-05 uses 0.55% for the life of the loan in that cell.' },
      { q: 'What changes when the base loan is above $832,750?', a: 'The letter’s higher schedule applies. A $900,000 price with $45,000 down is a $855,000 base at 95% loan-to-value, and the 30-year annual premium is 0.70% for the term. The starting payment at 6.5% is $6,006.23. The $832,750 figure is the FHFA 2026 baseline, not a county FHA limit.' },
      { q: 'Does 10% down on a 15-year loan change the premium?', a: 'On a $300,000 price, $30,000 down is a 90% loan-to-value and a base under $832,750. The 15-year cell is 0.15% for 11 years. The starting payment at 6.5% is $2,427.49, which still includes that monthly MIP.' },
      { q: 'Is the upfront premium financed?', a: 'Yes. 1.75% of the base is added to the loan, and principal and interest are computed on that larger amount. The annual MIP is also computed on the amount that includes the upfront premium.' }
    ],
    relatedLinks: [
      { slug: 'mortgage-calculator', label: 'Mortgage calculator', note: '$300,000 at 6.5% for 30 years is $1,896.20 before tax and insurance. That payment has no FHA upfront premium and no annual MIP.' },
      { slug: 'va-loan-calculator', label: 'VA loan calculator', note: 'A $400,000 purchase with no down payment, first use, finances a 2.15% funding fee. The payment at 6.5% for 30 years is $2,582.63. The fee chart is the VA chart, not Mortgagee Letter 2023-05.' },
      { slug: 'loan-calculator', label: 'Personal and auto loan calculator', note: 'A $25,000 loan at 7.5% for five years is $500.95 a month. No mortgage insurance premium is added.' }
    ]
  }),
  'va-loan-calculator': page({
    slug: 'va-loan-calculator',
    title: 'VA Loan Calculator | ClearCalc',
    h1: 'VA Loan Calculator',
    description: 'VA purchase payment and funding fee from the chart effective 7 April 2023. A $400,000 first-use loan with no down payment uses a 2.15% fee and the payment is $2,582.63.',
    intro: [
      'The funding-fee percents are the VA purchase chart effective 7 April 2023, the chart VA.gov publishes for loans closing before 14 November 2031. First use with less than 5% down is 2.15%. Five percent down is 1.50%. Ten percent down or more is 1.25%. Later use with less than 5% down is 3.30%. The down-payment percent is the down payment divided by the price.',
      'The sample is a $400,000 price, nothing down, first use, fee financed, 6.5% for 30 years. The fee is 2.15% of $400,000, which is $8,600.00. The amount financed is $408,600.00 and the payment is $2,582.63. The same price with $40,000 down is a 10% down payment, so the fee rate is 1.25% and the fee is $4,500.00.',
      'Marking an exemption sets the fee to zero. The VA, not this page, decides whether an exemption applies. National Guard and Reserve use the same purchase percentages on this chart. The page does not calculate entitlement, residual income, or a certificate of eligibility.'
    ],
    steps: [
      'Enter the price, the down payment, the annual rate, and the term in years. The sample is $400,000, $0 down, 6.5%, and 30 years.',
      'Choose first use or a use after the first. Under 5% down, those two choices are 2.15% and 3.30%.',
      'Leave the fee on the published chart, or mark an exemption. An exemption sets the fee to 0. This page does not decide whether you qualify for that exemption.',
      'Choose whether to add the fee to the loan or pay it in cash, then press Calculate. The headline is the monthly payment on the loan amount that choice produces.'
    ],
    howHeading: 'How the VA funding fee and the payment are calculated',
    howItWorks: [
      'The down-payment percent is down payment / price × 100. If the exemption switch is on, the fee rate is 0. Otherwise a down payment of 10% or more uses 1.25%, a down payment of 5% or more uses 1.50%, and a down payment under 5% uses 2.15% on a first use and 3.30% on a later use. The fee is that rate times the price minus the down payment. Financing the fee adds it to the loan. Paying it in cash leaves the loan at the base amount, and the fee is still reported.',
      'A $400,000 first-use loan with $20,000 down is exactly 5%, so the fee rate is 1.50% of $380,000, which is $5,700.00. Financed at 6.5% for 30 years, the payment is $2,437.89. Later use with nothing down is 3.30% of $400,000, a fee of $13,200.00, an amount financed of $413,200.00, and a payment of $2,611.71. An exemption on the sample price, with the fee switch set to zero, finances $400,000.00 and the payment is $2,528.27. Paying the sample fee in cash produces that same payment, because the loan is also $400,000, but the $8,600 fee is cash at closing rather than part of the loan.'
    ],
    formula: 'Down percent = down payment / price × 100\nExemption: fee rate = 0\nDown percent ≥ 10: 1.25%\nDown percent ≥ 5: 1.50%\nFirst use, under 5% down: 2.15%\nLater use, under 5% down: 3.30%\nFee = (price − down payment) × fee rate\nThe chart is the VA purchase chart effective 7 April 2023',
    formulaNotes: [
      'The thresholds are “greater than or equal.” A down payment of exactly 5% receives 1.50%, and exactly 10% receives 1.25%. The first-use and later-use split applies only under 5%.',
      'National Guard and Reserve purchase loans use these same percentages on the chart this page follows. A different fee for a cash-out refinance is not in the table.'
    ],
    examplesHeading: 'Worked VA funding-fee examples',
    samples: [
      { title: 'First use, no down payment', overrides: {}, blurb: 'The fee rate is 2.15% because the down payment is under 5% and the loan is marked as a first use. The fee is financed, so the payment amortizes price plus fee.' },
      { title: 'Ten percent down', overrides: { down: 40000 }, blurb: '$40,000 is 10% of $400,000, so the fee rate is 1.25% of the $360,000 base. The first-use setting does not change a down payment that has reached 10%.' },
      { title: 'Later use, no down payment', overrides: { use: 2 }, blurb: 'Under 5% down, a use after the first is 3.30% rather than 2.15%. The fee is still financed. The page is applying the chart you selected. It is not deciding whether the loan is a later use.' }
    ],
    table: { heading: 'Payments under the 7 April 2023 purchase chart', caption: 'Each headline is this calculator. The fee is financed. An exemption, which is not one of these rows, sets the fee to zero.', headers: ['Case', 'Payment'] },
    limitsHeading: 'What this VA payment leaves out',
    limits: [
      'The page does not decide eligibility for an exemption. The switch sets the fee to zero only because you marked it. The VA decides the exemption.',
      'Entitlement, a residual-income test, and a certificate of eligibility are not computed. A payment is not an approval.',
      'The chart is the purchase chart. Cash-out refinance fees, and a down payment measured differently than down payment divided by price, are not applied.',
      'Property tax, insurance, and a funding fee that the lender did not finance the way you selected are not in the headline.'
    ],
    disclaimer: 'The funding fee comes from the VA purchase chart effective 7 April 2023. Marking an exemption sets the fee to zero. This page does not decide eligibility.',
    faqs: [
      { q: 'What is the first-use fee with no down payment?', a: '2.15% of the loan before the fee. On a $400,000 price that is $8,600.00. Financed at 6.5% for 30 years, the payment is $2,582.63. The chart is the VA purchase chart effective 7 April 2023.' },
      { q: 'What fee applies at 5% down and at 10% down?', a: 'Five percent down is 1.50%. On a $400,000 price, $20,000 down is a fee of $5,700.00 and a financed payment of $2,437.89. Ten percent down is 1.25%. $40,000 down is a fee of $4,500.00 and a financed payment of $2,303.89.' },
      { q: 'What is the later-use fee with less than 5% down?', a: '3.30%. On $400,000 with nothing down the fee is $13,200.00, the amount financed is $413,200.00, and the payment at 6.5% for 30 years is $2,611.71. At 5% down or more, first use and later use share the 1.50% and 1.25% rates.' },
      { q: 'What does the exemption switch do?', a: 'It sets the fee to zero. On the sample price the loan is $400,000.00 and the payment is $2,528.27. The VA decides whether an exemption applies. This page does not.' },
      { q: 'Why is the cash-pay payment the same as the exempt payment?', a: 'Paying the 2.15% fee in cash leaves the loan at $400,000, so the payment is also $2,528.27. The $8,600 is still due at closing. An exemption removes that $8,600. The payments match and the cash at closing does not.' }
    ],
    relatedLinks: [
      { slug: 'fha-loan-calculator', label: 'FHA loan calculator', note: 'Upfront MIP is 1.75%, and the annual MIP is Mortgagee Letter 2023-05 split at $832,750. The sample payment is $1,996.87 a month at the start. That is not the VA funding-fee chart.' },
      { slug: 'mortgage-calculator', label: 'Mortgage calculator', note: '$300,000 at 6.5% for 30 years is $1,896.20 of principal and interest. No VA funding fee is added.' },
      { slug: 'apr-calculator', label: 'APR calculator', note: 'Turns prepaid finance charges into an APR. The VA page reports the funding fee and the payment. It does not solve a Regulation Z APR.' }
    ]
  }),
  'lease-implied-rate-calculator': page({
    slug: 'lease-implied-rate-calculator',
    title: 'Lease Rate Calculator | ClearCalc',
    h1: 'Lease Rate Calculator',
    description: 'Money factor from a lease payment, a cap cost, and a residual. A $32,000 cap, a $19,200 residual, and a $420 payment for 36 months is a money factor of 0.001259.',
    intro: [
      'The payment you type is split into depreciation and a finance portion. Depreciation is the cap cost minus the residual, divided by the months. The finance portion is the payment minus that depreciation. The money factor is the finance portion divided by the cap cost plus the residual.',
      'The sample cap is $32,000, the residual is $19,200, the term is 36 months, and the payment before tax is $420. Depreciation is $355.56 a month. The finance portion is $64.44. The money factor is 0.001259. Multiplying a money factor by 2,400 is a rough APR, and for this sample that approximation is 3.021%. The 2,400 rule is an approximation. It is not a truth-in-lending APR.',
      'Tax, a disposition fee, and an acquisition fee that was not already folded into the cap cost sit outside the payment you typed. The residual has to be below the cap cost. A payment that does not cover the depreciation is rejected, because the money factor would not be positive.'
    ],
    steps: [
      'Enter the adjusted cap cost and the residual. The sample is $32,000 and $19,200. The residual must be lower than the cap.',
      'Enter the term in months and the monthly payment before tax. The sample is 36 months and $420.',
      'Press Calculate. The headline is the money factor.',
      'Read the rough APR only as the money factor times 2,400. It is labeled as an approximation.'
    ],
    howHeading: 'How the money factor is backed out',
    howItWorks: [
      'Depreciation per month is (cap − residual) / months. On the sample, ($32,000 − $19,200) / 36 is $355.555…, which displays as $355.56. The finance portion is $420 − that amount, displayed as $64.44. Dividing the unrounded finance portion by ($32,000 + $19,200) produces 0.001259. A payment of $500 on the same cap and residual leaves a finance portion of $144.44 and a money factor of 0.002821, and the 2,400 approximation is 6.771%.',
      'A residual of zero, a cap of $32,000, a payment of $1,000, and 36 months puts depreciation at $888.89 and the finance portion at $111.11. The money factor is 0.003472, and the 2,400 approximation is 8.333%. The denominator is the cap plus the residual, so a zero residual makes the denominator the cap alone. The approximation is still the factor times 2,400, not a solved APR from an amortization schedule.'
    ],
    formula: 'Depreciation = (adjusted cap cost − residual) / months\nFinance portion = payment − depreciation\nMoney factor = finance portion / (cap cost + residual)\nRough APR = money factor × 2,400\nThe 2,400 figure is an approximation, not a truth-in-lending APR',
    formulaNotes: [
      'The payment has to be larger than the depreciation. If it is not, the finance portion is not positive and the page rejects the input instead of printing a negative money factor.',
      'The rough APR moves in proportion to the money factor. 0.001259 × 2,400 is 3.021%. 0.002821 × 2,400 is 6.771%. Nothing in that step knows the term or the tax.'
    ],
    examplesHeading: 'Worked lease-rate examples',
    samples: [
      { title: 'A $420 payment on a $32,000 cap', overrides: {}, blurb: 'Depreciation takes $355.56 of the payment. The rest is the finance portion, and dividing it by the cap plus the residual is the money factor.' },
      { title: 'The same lease at a $500 payment', overrides: { payment: 500 }, blurb: 'Depreciation does not change, because the cap, the residual, and the months did not change. A higher payment is a higher finance portion and a higher money factor.' },
      { title: 'A zero residual and a $1,000 payment', overrides: { residual: 0, payment: 1000 }, blurb: 'The whole cap is depreciated over 36 months. The money factor divides the finance portion by the cap alone, because the residual no longer adds to the denominator.' }
    ],
    table: { heading: 'Money factors from three payments', caption: 'Each headline is this calculator. The rough APR in the detail line is the money factor times 2,400.', headers: ['Lease', 'Money factor'] },
    limitsHeading: 'What the money factor leaves out',
    limits: [
      'The 2,400 multiple is an approximation. It is not a truth-in-lending APR, and it does not use the term.',
      'Sales tax inside the payment will be treated as part of the finance portion. Type the payment before tax.',
      'A disposition fee, and an acquisition fee that is not already in the cap cost, are outside the payment. They do not change the money factor this page reports.',
      'A residual at or above the cap cost is rejected. There is no positive depreciation to subtract, so the split is not defined here.'
    ],
    disclaimer: 'The money factor is the finance portion divided by the cap cost plus the residual. The 2,400 APR figure is an approximation, not a truth-in-lending APR.',
    faqs: [
      { q: 'Why is the sample money factor 0.001259?', a: 'Depreciation is ($32,000 − $19,200) / 36, about $355.56. The finance portion of a $420 payment is about $64.44. Dividing that by $32,000 + $19,200 gives 0.001259.' },
      { q: 'What does multiplying by 2,400 mean?', a: 'It is a rough APR used with money factors. 0.001259 × 2,400 is 3.021%. The page labels it as an approximation. It is not a truth-in-lending APR, because the term and the fees never enter that multiplication.' },
      { q: 'Why does a $500 payment raise the factor to 0.002821?', a: 'Depreciation stays $355.56. The finance portion rises to $144.44. Dividing by the same $51,200 gives 0.002821, and the rough APR is 6.771%.' },
      { q: 'Why is a payment below the depreciation rejected?', a: 'The finance portion would be zero or negative, and the money factor would not be a positive rate. The page asks for a payment that covers the depreciation.' }
    ],
    relatedLinks: [
      { slug: 'car-payment-calculator', label: 'Car payment calculator', note: '$25,000 at 6% for 60 months is $483.32 a month, and that loan ends at zero. It has no residual and no money factor.' },
      { slug: 'vehicle-loan-calculator', label: 'Vehicle loan calculator', note: 'The sample finances $29,240.00 after tax and trade-in, and the payment is $565.29. That is an amortizing loan, not a lease split into depreciation and a finance portion.' },
      { slug: 'apr-calculator', label: 'APR calculator', note: 'An APR from a note rate and prepaid finance charges on a loan. It is not a money factor, and it does not use the 2,400 approximation.' }
    ]
  }),
  'business-loan-calculator': page({
    slug: 'business-loan-calculator',
    title: 'Business Loan Calculator | ClearCalc',
    h1: 'Business Loan Calculator',
    description: 'A fixed business-loan payment and an APR after an upfront fee you type. $100,000 at 8% for 5 years with a $2,500 fee is $2,027.64 a month, and the APR is 9.078%.',
    intro: [
      'The payment amortizes the amount you will repay, at the interest rate and the term you type. The upfront fee is then subtracted to get the cash you actually receive. The APR is the rate which, applied to that smaller cash amount, produces the same monthly payment. The fee is whatever you type.',
      'The sample repays $100,000 at 8% for 5 years. The payment is $2,027.64. A $2,500 fee leaves $97,500.00 of cash, and the APR on that cash is 9.078%. A fee of zero leaves the APR at 8.000%, the same as the note rate, because you received the full amount you are repaying.',
      'An SBA guarantee fee is not looked up. The percent depends on the program and the loan size, and this page does not store that schedule. Type the fee you were quoted. The loan is a fixed monthly rate. It is not a line of credit and it is not a Treasury rate.'
    ],
    steps: [
      'Enter the amount you will repay, the annual interest rate, and the term in years. The sample is $100,000, 8%, and 5 years.',
      'Enter the upfront fee in dollars. The sample is $2,500. A fee of zero is allowed. A fee as large as the loan is rejected.',
      'Press Calculate. The headline is the monthly payment on the amount you repay.',
      'Read the cash received and the APR on the next lines. The APR is higher than the note rate when the fee is above zero.'
    ],
    howHeading: 'How the payment and the APR are calculated',
    howItWorks: [
      'The payment is the standard monthly amortization of the amount you repay. The monthly rate is the annual percent divided by 1,200, and the count is the years times 12. Cash received is that amount minus the fee. The APR search looks for the annual rate that produces the same payment when the principal is the cash received rather than the amount you repay. With a fee of zero, that rate is the note rate.',
      'A $50,000 loan at 10% for 3 years with a $5,000 fee has a payment of $1,613.36. Cash received is $45,000.00. The APR is 17.401%, far above 10%, because a $5,000 fee is a tenth of the amount repaid and the term is only three years. The fee is still the number you typed. Nothing about that percent was looked up from an SBA schedule.'
    ],
    formula: 'Payment = amount repaid × r × (1 + r)^n / ((1 + r)^n − 1)\nr = annual rate / 100 / 12, and n = years × 12\nCash received = amount repaid − upfront fee\nAPR = the rate that produces the same payment on the cash received\nThe fee is the amount you type. SBA fees are not looked up.',
    formulaNotes: [
      'The sample note rate is 8%. The sample APR is 9.078%. The gap is the $2,500 fee spread across 60 payments on $97,500 of cash.',
      'A fee of zero on the sample loan keeps the payment at $2,027.64 and sets the APR to 8.000%. The search has nothing to add when cash received equals the amount repaid.'
    ],
    examplesHeading: 'Worked business-loan examples',
    samples: [
      { title: '$100,000 with a $2,500 fee', overrides: {}, blurb: 'The payment is computed on $100,000. The APR is computed on the $97,500 you keep after the fee. The fee is a number you typed, not a schedule.' },
      { title: 'The same loan with no fee', overrides: { fee: 0 }, blurb: 'Cash received equals the amount repaid. The APR matches the 8% note rate. This is the check that a zero fee does not invent a charge.' },
      { title: '$50,000, 10%, 3 years, $5,000 fee', overrides: { fee: 5000, amount: 50000, rate: 10, years: 3 }, blurb: 'The fee is 10% of the amount repaid and the term is short, so the APR on the $45,000 of cash is well above the note rate. The percent was not looked up.' }
    ],
    table: { heading: 'Payments after a fee you type', caption: 'Each headline is the monthly payment on the amount repaid. The APR in the detail line is on the cash after the fee.', headers: ['Loan', 'Payment'] },
    limitsHeading: 'What this business-loan APR leaves out',
    limits: [
      'SBA guarantee fees are not looked up. The percent depends on the program and the loan size. Type the fee from the quote.',
      'The rate is fixed and the payment is monthly. A line of credit, a daily repayment, and a rate that resets are not this formula.',
      'The APR search treats the fee as prepaid and the payment as level. A fee that is financed on top of the amount you repay should be included in the amount, not also typed as cash you never received.',
      'A fee greater than or equal to the amount repaid is rejected, because the cash received would not be positive.'
    ],
    disclaimer: 'The upfront fee is the amount you type. An SBA guarantee fee is not looked up. This is not a line of credit and not a Treasury rate.',
    faqs: [
      { q: 'Why is the sample payment $2,027.64 and the APR 9.078%?', a: '$100,000 at 8% for 60 months amortizes at $2,027.64 a month. After a $2,500 fee the cash is $97,500. The rate that produces a $2,027.64 payment on $97,500 is 9.078%.' },
      { q: 'Does the page look up an SBA fee?', a: 'No. The fee is whatever you type. An SBA guarantee fee depends on the program and the loan size, and this page does not store that schedule.' },
      { q: 'What happens when the fee is zero?', a: 'The payment stays $2,027.64 and the APR is 8.000%, the note rate. Cash received is the full $100,000.00.' },
      { q: 'Why does a $5,000 fee on a 3-year $50,000 loan produce a 17.401% APR?', a: 'The payment of $1,613.36 is computed on $50,000 at 10%. You receive $45,000. The rate that turns $45,000 into that same payment over 36 months is 17.401%. The short term gives the fee less time to spread out.' }
    ],
    relatedLinks: [
      { slug: 'loan-calculator', label: 'Personal and auto loan calculator', note: 'A $25,000 loan at 7.5% for five years is $500.95 a month. There is no upfront fee and no APR on the cash after a fee.' },
      { slug: 'apr-calculator', label: 'APR calculator', note: 'The APR of a loan after prepaid charges. The business-loan page is that idea with the fee typed in dollars and the payment shown beside the APR.' },
      { slug: 'loan-solver-calculator', label: 'Loan term and rate calculator', note: '$10,000 at 6% for 5 years, monthly, is $193.33 a payment. That rate is a note rate. It is not an APR after a fee.' }
    ]
  }),
  'household-budget-calculator': page({
    slug: 'household-budget-calculator',
    title: 'Household Budget Calculator | ClearCalc',
    h1: 'Household Budget Calculator',
    description: 'What is left after housing, food, transport, other spending, and savings. On $5,000 of monthly income the sample leaves $1,200.00.',
    intro: [
      'The page subtracts five amounts from monthly income after tax: housing, food, transport, other spending, and savings. The sample income is $5,000. The amounts are $1,600, $700, $400, $600, and $500, which add to $3,800.00. The headline is $1,200.00, the income that is not yet assigned.',
      'The labels are not a required budget. Housing is whatever you put in that box. Savings is an assignment, so it is subtracted even though it is not a bill. Raising savings from $500 to $1,700 assigns the whole $5,000 and the headline is $0.00.',
      'If the five amounts add up to more than income, the headline is negative. Housing of $3,000, food of $1,500, transport of $800, other spending of $900, and savings of $0 add to $6,200.00 against $5,000 of income, and the headline is −$1,200.00. The 50/30/20 page is a different question. It splits income into three target shares. This page uses the amounts you already spend.'
    ],
    steps: [
      'Enter monthly income after tax. The sample is $5,000.',
      'Enter housing, food, transport, other spending, and savings. The sample is $1,600, $700, $400, $600, and $500.',
      'Press Calculate. The headline is income minus the five amounts.',
      'A negative headline means the amounts you typed are larger than income. Nothing is reclassified for you.'
    ],
    howHeading: 'How the unassigned amount is calculated',
    howItWorks: [
      'The allocated total is housing + food + transport + other spending + savings. The headline is income minus that total. There is no percent test and no warning threshold. $5,000 − $3,800 = $1,200.00 on the sample, and $5,000 − $6,200 = −$1,200.00 when the amounts overshoot.',
      'On $5,000 a month, the 50/30/20 targets are $2,500 of needs, $1,500 of wants, and $1,000 of savings. This page does not check the sample against those targets. The sample housing of $1,600 is simply $1,600. If you want the three-way split, use that page. If you want the dollars you already wrote down, use this one.'
    ],
    formula: 'Allocated = housing + food + transport + other spending + savings\nLeft = income − allocated\nA negative result means the allocations are larger than income',
    formulaNotes: [
      'Savings is inside the allocated total. Moving $1,200 from the unassigned headline into savings, by typing savings of $1,700, makes the headline $0.00. The money did not disappear. It was assigned.',
      'Income is after tax because the boxes are spending and saving, which you do with money you have. A gross paycheck will make the leftover look larger than the cash that arrives.'
    ],
    examplesHeading: 'Worked household-budget examples',
    samples: [
      { title: '$5,000 with the sample amounts', overrides: {}, blurb: 'Five boxes add to $3,800.00. The headline is the $1,200.00 that has not been put in a box. The labels do not have to match anyone else’s categories.' },
      { title: 'Amounts larger than income', overrides: { housing: 3000, food: 1500, transport: 800, other: 900, savings: 0 }, blurb: 'The five amounts add to $6,200.00. The headline is negative by $1,200.00. The page does not move dollars between boxes to force a zero.' },
      { title: 'Savings raised until nothing is left', overrides: { savings: 1700 }, blurb: 'Housing, food, transport, and other spending stay at the sample. Savings of $1,700 brings the allocated total to $5,000.00, so the unassigned amount is zero.' }
    ],
    table: { heading: 'Unassigned income for three sets of amounts', caption: 'Each headline is income minus the five amounts. A negative headline means the amounts exceed income.', headers: ['Amounts', 'Left'] },
    limitsHeading: 'What this budget page leaves out',
    limits: [
      'The five labels are not a required plan. Nothing checks housing against a percent of income.',
      'Annual bills are not converted to a monthly amount. Type the monthly figure you want subtracted, including a twelfth of an annual bill if that is what you intend.',
      'Debt payments sit in whichever box you choose. The page does not amortize a balance or know an interest rate.',
      'The 50/30/20 targets are a different page. This one does not score the amounts you typed against 50%, 30%, and 20%.'
    ],
    disclaimer: 'These are amounts you type, subtracted from income you type. The labels are not a required budget.',
    faqs: [
      { q: 'Why does the sample leave $1,200.00?', a: 'Income is $5,000. Housing $1,600, food $700, transport $400, other spending $600, and savings $500 add to $3,800. The difference is $1,200.00.' },
      { q: 'Why is savings subtracted if it is not a bill?', a: 'It is an assignment of income. Leaving it out would show the same dollars as both saved and unassigned. Raising savings to $1,700, with the other sample amounts unchanged, leaves $0.00.' },
      { q: 'What does a headline of −$1,200.00 mean?', a: 'The five amounts add to more than income. In the over-budget sample they add to $6,200.00 against $5,000. The page reports the gap and does not reclassify a category.' },
      { q: 'How is this different from the 50/30/20 page?', a: 'That page splits income into three shares. On $5,000 the targets are $2,500, $1,500, and $1,000. This page subtracts the dollars you already spend and does not build those targets.' }
    ],
    relatedLinks: [
      { slug: '50-30-20-budget-calculator', label: '50/30/20 budget calculator', note: 'On $5,000 a month the targets are $2,500 of needs, $1,500 of wants, and $1,000 of savings. This household page uses the amounts you type instead of those shares.' },
      { slug: 'debt-payoff-calculator', label: 'Debt payoff calculator', note: 'The sample debts clear in 41 months with $1,912.06 of interest. A debt payment you want in the budget has to be typed into one of the five boxes. This page does not amortize it.' },
      { slug: 'college-cost-calculator', label: 'College cost calculator', note: 'A $20,000 cost rising at 4% for 10 years is a $29,604.89 bill, and the sample deposit is $138.20 a month. That deposit is a future plan, not one of the household boxes.' }
    ]
  }),
  'lump-sum-present-value-calculator': page({
    slug: 'lump-sum-present-value-calculator',
    title: 'Lump Sum Present Value Calculator | ClearCalc',
    h1: 'Lump Sum Present Value Calculator',
    description: 'Today’s value of one future amount. $10,000 discounted 10 years at 5%, compounded once a year, is $6,139.13.',
    intro: [
      'The page discounts a single future amount. There is no coupon and no monthly payment. The sample is $10,000 received in 10 years, discounted at 5% compounded once a year, which is worth $6,139.13 today. A rate of zero returns the future amount unchanged, so the same $10,000 is worth $10,000.00.',
      'Compounding can be once a year, twice a year, four times a year, or monthly. The same $10,000 at 5% for 10 years, compounded monthly, is $6,071.61. More frequent compounding at a positive rate lowers the present value, because the discount is applied more often.',
      'A level stream of payments is the annuity calculator’s present-value choice. This page is one future amount. The rate is a discount rate you choose. It is not an inflation series and it is not a Treasury quote.'
    ],
    steps: [
      'Enter the future amount. The sample is $10,000.',
      'Enter the annual discount rate and the years. The sample is 5% and 10 years. The years can be a fraction.',
      'Choose how often the rate compounds: yearly, twice a year, four times a year, or monthly.',
      'Press Calculate. The headline is the present value.'
    ],
    howHeading: 'How one future amount is discounted',
    howItWorks: [
      'The rate per period is the annual percent divided by 100 and then by the number of compounds in a year. The number of periods is the years times that count. The present value is the future amount divided by (1 + rate per period) raised to the number of periods. At a zero rate the divisor is 1, so the present value equals the future amount.',
      'Yearly compounding of the sample is $10,000 / 1.05^10. That power is about 1.62889, and the present value is $6,139.13. Monthly compounding uses a period rate of 0.05 / 12 and 120 periods, and the present value is $6,071.61. The annuity calculator is the page to use when the future money arrives as a series of payments instead of one amount.'
    ],
    formula: 'Rate per period = annual percent / 100 / compounds per year\nPeriods = years × compounds per year\nPresent value = future amount / (1 + rate per period)^periods\nCompounds per year: 1, 2, 4, or 12',
    formulaNotes: [
      'A zero rate for any compounding choice returns the future amount. $10,000 discounted at 0% is $10,000.00. The exponent does not matter when the base is 1.',
      'The years box accepts a value above zero that is not a whole number. Two and a half years at yearly compounding is 2.5 periods. Monthly compounding of that same span is 30 periods.'
    ],
    examplesHeading: 'Worked present-value examples',
    samples: [
      { title: '$10,000 in 10 years at 5%, yearly', overrides: {}, blurb: 'One compound a year. The future amount is divided by 1.05 raised to the 10th power. There is no payment between now and then.' },
      { title: 'The same amount at a zero rate', overrides: { rate: 0 }, blurb: 'Dividing by 1 leaves the future amount. This is the check that a zero discount rate does not invent a haircut.' },
      { title: 'Monthly compounding at the same 5%', overrides: { compounds: 12 }, blurb: 'The annual 5% is split into 12 period rates over 120 periods. The present value is lower than the yearly figure because the discount compounds more often.' }
    ],
    table: { heading: 'Present value of $10,000 in 10 years', caption: 'Each headline is this calculator. The rate is 5% except for the zero-rate row.', headers: ['Compounding', 'Present value'] },
    limitsHeading: 'What this present value leaves out',
    limits: [
      'A stream of payments is not discounted here. The annuity calculator prices a level payment, ordinary or due.',
      'The rate does not change from year to year. An inflation series, or a Treasury curve with a different rate each year, is not an input.',
      'Taxes on the future amount are not subtracted. Discount the after-tax amount yourself if that is the cash you will receive.',
      'The compounding choices are 1, 2, 4, and 12 times a year. Continuous compounding is not one of them.'
    ],
    disclaimer: 'This discounts one future amount at a rate you choose. It is not an inflation series and it is not a Treasury quote.',
    faqs: [
      { q: 'Why is $10,000 in 10 years at 5% worth $6,139.13 today?', a: 'With yearly compounding the present value is 10,000 / 1.05^10. The power is about 1.628895, and dividing produces $6,139.13.' },
      { q: 'Why does monthly compounding give $6,071.61?', a: 'The period rate is 0.05 / 12 and there are 120 periods. Dividing $10,000 by (1 + 0.05 / 12)^120 produces $6,071.61. The extra compounding lowers today’s value of the same future amount.' },
      { q: 'What does a zero discount rate do?', a: 'The present value equals the future amount. $10,000 at 0% for 10 years is $10,000.00, because the divisor is 1.' },
      { q: 'Where do I price a monthly payment instead of one amount?', a: 'The annuity calculator. $200 a month at 6% for 10 years has an ordinary present value of $18,014.69. This page has no payment box.' }
    ],
    relatedLinks: [
      { slug: 'annuity-calculator', label: 'Annuity calculator', note: '$200 a month at 6% for 10 years is an ordinary present value of $18,014.69. That is a stream. This page is one future amount.' },
      { slug: 'compound-interest-calculator', label: 'Compound interest calculator', note: '$10,000 at 7% for 10 years with no deposit grows to $20,096.61. That projects forward. This page discounts backward.' },
      { slug: 'time-value-calculator', label: 'Time value of money calculator', note: 'Solves any one of five variables. A present value of −1,000 at 0% for 12 periods has a future value of $1,000.00. Money paid in is negative there.' }
    ]
  }),
  'traditional-ira-estimator': page({
    slug: 'traditional-ira-estimator',
    title: 'Traditional IRA Estimator | ClearCalc',
    h1: 'Traditional IRA Estimator',
    description: 'A 2026 traditional IRA contribution capped at the IRS dollar limit, and tax at a rate you type. $7,500 at 22% is $1,650.00. The deduction phase-out is not applied.',
    intro: [
      'The 2026 traditional IRA dollar limit used here is $7,500, plus $1,100 if you mark age 50 or older, from IRS IR-2025-111. The contribution used is the smaller of the amount you want to deduct and that dollar limit. Tax is the contribution used times the marginal rate you type. The sample is $7,500 at 22%, which is $1,650.00.',
      'The deduction phase-out for a workplace retirement plan is not applied. If your modified adjusted gross income is inside a phase-out, the deductible amount can be lower than this dollar limit. Type the amount you are actually allowed to deduct. The page will not reduce it for income.',
      'The ending balance is that one contribution compounded for the years you type, with no new deposits. $7,500 at 6% for 10 years is $13,431.36. A detail line describes the figure as one year of growth. The power in the calculation uses the years box, so ten years is 7,500 × 1.06^10. Tax on the way out is not subtracted.'
    ],
    steps: [
      'Choose under 50, or 50 or older. Age 50 or older raises the dollar limit from $7,500 to $8,600.',
      'Enter the contribution you want to deduct and the marginal tax rate. The sample is $7,500 and 22%. The rate is capped at 50%.',
      'Enter the annual return and the years to compound that one contribution. The sample is 6% and 10 years. No later deposit is added.',
      'Press Calculate. The headline is the tax at the rate you typed, on the contribution after the dollar cap.'
    ],
    howHeading: 'How the dollar cap and the tax are applied',
    howItWorks: [
      'The cap is $7,500, or $7,500 + $1,100 when the age switch is on. The contribution used is the minimum of the amount you typed and that cap. Typing $10,000 while under 50 still uses $7,500.00, and the tax at 22% is still $1,650.00. The extra $2,500 is not given a partial deduction and it is not carried anywhere. The phase-out is a separate limit, based on income and a workplace plan, and this page does not apply it.',
      'The ending balance is contribution × (1 + annual return / 100)^years. There is no loop of new deposits. Age 50 or older with an $8,600 contribution at 22% has a tax headline of $1,892.00, and 10 years at 6% ends at $15,401.29. SEP and SIMPLE plans have different limits and are not this page. A Roth limit, including its income phase-out, is the Roth IRA calculator.'
    ],
    formula: 'Dollar limit = $7,500, plus $1,100 at age 50 or older\nContribution used = the smaller of the amount typed and the dollar limit\nTax = contribution used × marginal rate / 100\nEnding balance = contribution used × (1 + return / 100)^years\nThe deduction phase-out is not applied\nSource of the dollar limit: IRS IR-2025-111',
    formulaNotes: [
      'The phase-out is deliberately skipped. A workplace retirement plan can reduce the deductible traditional IRA contribution as income rises. If that applies, type the deductible amount you are allowed, not the wish and not the dollar cap alone.',
      '$7,500 × 1.06^10 = $13,431.36. The detail line’s phrase “one year of growth” is the same ending balance. The exponent is the years field. One actual year at 6% on $7,500 would be $7,950.'
    ],
    examplesHeading: 'Worked traditional IRA examples',
    samples: [
      { title: '$7,500 at 22%, under age 50', overrides: {}, blurb: 'The amount typed equals the dollar limit, so the cap does not bind. Tax is 22% of $7,500. The phase-out is not consulted. Ten years of growth is on this one contribution only.' },
      { title: 'Age 50 or older, $8,600', overrides: { catchup: 1, contribution: 8600 }, blurb: 'The dollar limit is $7,500 + $1,100. The contribution used is the full $8,600. Tax at the sample 22% rate is the headline, and the ending balance compounds that larger contribution.' },
      { title: 'A $10,000 request under age 50', overrides: { contribution: 10000 }, blurb: 'The dollar limit holds the contribution at $7,500. The tax matches the first example. The phase-out is still not applied. The cap here is the dollar limit only.' }
    ],
    table: { heading: 'Tax at 22% after the dollar limit', caption: 'Each headline is this calculator. The deduction phase-out is not applied. Growth uses one contribution and the years you type.', headers: ['Contribution', 'Tax'] },
    limitsHeading: 'What this IRA estimate leaves out',
    limits: [
      'The deduction phase-out is not applied. Income, a workplace retirement plan, and filing status can reduce the deductible amount below the dollar limit. Type the amount you are allowed to deduct.',
      'SEP and SIMPLE plans are not this dollar limit. A Roth IRA, including the income phase-out on contributions, is the Roth IRA calculator.',
      'The ending balance is one contribution compounded. It does not add another $7,500 in each later year, and it does not subtract tax on the withdrawal.',
      'The marginal rate is a number from 0 to 50 percent that you type. It is not looked up from the 2026 brackets.'
    ],
    disclaimer: 'The 2026 dollar limit is $7,500 plus $1,100 at age 50, from IRS IR-2025-111. The deduction phase-out is not applied. This is not a deductible amount for a workplace-plan phase-out.',
    faqs: [
      { q: 'Why is the sample tax $1,650.00?', a: 'The contribution used is $7,500, the 2026 dollar limit for someone under 50. The marginal rate you typed is 22%. 7,500 × 0.22 = 1,650. The phase-out is not applied, so income does not reduce that $7,500 on this page.' },
      { q: 'What is the age-50 catch-up?', a: 'An additional $1,100, from IR-2025-111. The dollar limit becomes $8,600. At 22%, the tax on $8,600 is $1,892.00. Ten years at 6% on that one contribution ends at $15,401.29.' },
      { q: 'Is the income phase-out applied?', a: 'No. The only cap is the dollar limit. If a workplace plan puts your modified adjusted gross income inside the phase-out, the deductible amount can be lower. Type that lower amount. The page will not compute it.' },
      { q: 'Why does typing $10,000 still show $1,650.00?', a: 'Under age 50 the contribution used is the smaller of $10,000 and $7,500. The tax is 22% of $7,500. The extra $2,500 is not deducted and is not added to the ending balance.' },
      { q: 'Is $13,431.36 one year of growth?', a: 'It is $7,500 × 1.06^10, the sample contribution compounded for the 10 years in the years box, with no new deposits. One year at 6% would be $7,950. The detail line uses the words “one year of growth” for this full-term balance.' }
    ],
    relatedLinks: [
      { slug: 'roth-ira-calculator', label: 'Roth IRA calculator', note: 'A 2026 Roth contribution cap and an income phase-out, then growth. This traditional page skips the phase-out and uses a marginal rate you type.' },
      { slug: 'compound-interest-calculator', label: 'Compound interest calculator', note: '$10,000 plus $250 a month at 7% for 10 years is $63,367.82. That allows new deposits. The IRA ending balance here is one contribution only.' },
      { slug: 'us-federal-income-tax-calculator', label: '2026 federal income tax calculator', note: 'Tax on a wage after the standard deduction. At $65,000 single the tax is $5,620.00. It does not cap an IRA contribution or apply IR-2025-111.' }
    ]
  })
};
