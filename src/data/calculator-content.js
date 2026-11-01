import { extraCalculatorContent } from './extra-calculator-content.js';
import { clusterCalculatorContent } from './cluster-calculator-content.js';
import { searchCalculatorContent } from './search-calculator-content.js';
import { longtailCalculatorContent } from './longtail-calculator-content.js';
import { growthCalculatorContent } from './growth-calculator-content.js';
import { dailyCalculatorContent } from './daily-calculator-content.js';
import { waveCalculatorContent } from './wave-calculator-content.js';
import { batchCalculatorContent } from './batch-calculator-content.js';

export const calculatorContent = {
  'mortgage-calculator': {
    title: 'Fixed-Rate Mortgage Payment Calculator | ClearCalc',
    h1: 'Fixed-Rate Mortgage Payment Calculator',
    description: 'Estimate the monthly principal-and-interest payment on a fixed-rate mortgage, plus total interest over the full term. Includes the amortization formula and examples.',
    intro: [
      'This fixed-rate mortgage calculator estimates the monthly principal-and-interest payment that pays a home loan down to zero over a set term. Enter the amount borrowed, the annual interest rate, and the length of the loan in years. The result assumes every payment is made on time and the rate never changes.',
      'The figure is only the loan payment. Property taxes, homeowners insurance, mortgage insurance, and HOA dues are real parts of a housing bill, but they are not part of the amortization formula, so this page does not guess them. Use the result to compare a rate or a shorter term before you talk with a lender. It is a planning estimate, not a Loan Estimate or an approval.'
    ],
    steps: [
      'Enter the amount borrowed in US dollars. The sample value is 300,000.',
      'Enter the annual interest rate as a percent. For 6.5%, type 6.5, not 0.065.',
      'Enter the term in years. A 30-year mortgage uses 30, which is 360 monthly payments.',
      'Press Calculate. The headline is the monthly principal-and-interest payment. Total repayment and total interest appear underneath.'
    ],
    howHeading: 'How a fixed-rate mortgage payment is calculated',
    howItWorks: [
      'The calculator converts the annual percentage rate into a monthly rate by dividing by 100 and then by 12. A 6.5% rate becomes 0.065 / 12. It then counts the payments as years times 12. Those two numbers, plus the principal, are the only inputs to the standard fully amortizing loan formula.',
      'Each monthly payment covers that month\'s interest on the remaining balance and puts the rest toward principal. Early payments are mostly interest. Later payments retire principal faster. The tool does not print a full amortization schedule. It reports the level payment, the sum of every payment, and the interest portion of that sum.',
      'If the rate is exactly zero, there is no interest to compound. The payment is the principal divided by the number of months, and total interest is zero. Negative rates, extra principal payments, interest-only periods, and adjustable rates are outside what this form models.'
    ],
    formula: 'Monthly rate r = annual percent / 100 / 12\nPayments n = years × 12\nIf r = 0: payment M = principal / n\nOtherwise: M = principal × r × (1 + r)^n / ((1 + r)^n − 1)\nTotal repayment = M × n\nTotal interest = total repayment − principal',
    formulaNotes: [
      'The payment used in that total is the full-precision result, not the cents-rounded figure in the headline. Because of that, the on-screen monthly payment multiplied by the number of months can differ by a dollar or two from the on-screen total repayment. Both lines are rounded for display on their own.',
      'This is the ordinary US fixed-rate convention: a nominal annual rate divided by 12, with monthly payments in arrears. A lender that uses a different day count, biweekly payments, or a rate that is already a monthly rate will not match.'
    ],
    examplesHeading: 'Worked mortgage examples',
    examples: [
      {
        title: '$300,000 at 6.5% for 30 years',
        paragraphs: [
          'Principal is 300,000, the annual rate is 6.5, and the term is 30 years, so there are 360 payments. The monthly rate is 6.5 / 100 / 12. The calculator shows a payment of $1,896.20 / month, total repayment of $682,633.47, and total interest of $382,633.47.',
          'Multiplying the rounded payment by 360 gives $682,632.00, which is $1.47 less than the displayed total. That gap is display rounding, not a second fee. Interest here is more than the amount borrowed because the balance is outstanding for three decades.'
        ]
      },
      {
        title: 'The same loan on a 15-year term',
        paragraphs: [
          'Keep 300,000 and 6.5%, and change the term to 15 years (180 payments). The calculator shows $2,613.32 / month, total repayment of $470,397.98, and total interest of $170,397.98.',
          'The monthly bill is $717.12 higher than the 30-year payment, and total interest is $212,235.49 lower. A shorter term costs more each month and less over the life of the loan. This comparison still excludes taxes, insurance, and any mortgage insurance a smaller down payment might require.'
        ]
      },
      {
        title: 'A lower rate, and a zero-interest check',
        paragraphs: [
          'At 3% for 30 years on $300,000, the calculator shows $1,264.81 / month, total repayment of $455,332.36, and total interest of $155,332.36. Dropping the rate from 6.5% to 3% cuts the payment by $631.39 and cuts interest by $227,301.11 on this particular loan. Rate and term both matter, and they do not trade off in a straight line.',
          'At 0% for 30 years, the payment is 300,000 / 360. The calculator shows $833.33 / month, total repayment of $300,000.00, and total interest of $0.00. That zero-rate case is a useful check that the form is dividing principal by the number of payments when there is nothing to compound.'
        ]
      }
    ],
    table: {
      heading: 'Payment comparison for fixed monthly loans',
      caption: 'Each row is what this calculator displays for that principal, annual rate, and term. Taxes, insurance, and mortgage insurance are not included. Displayed amounts are rounded to the cent.',
      headers: ['Loan', 'Rate', 'Term', 'Monthly payment', 'Total repayment', 'Total interest'],
      rows: [
        ['$300,000', '6.5%', '30 years', '$1,896.20', '$682,633.47', '$382,633.47'],
        ['$300,000', '6.5%', '15 years', '$2,613.32', '$470,397.98', '$170,397.98'],
        ['$300,000', '3%', '30 years', '$1,264.81', '$455,332.36', '$155,332.36'],
        ['$400,000', '7%', '30 years', '$2,661.21', '$958,035.59', '$558,035.59'],
        ['$300,000', '0%', '30 years', '$833.33', '$300,000.00', '$0.00']
      ]
    },
    limitsHeading: 'What this mortgage estimate leaves out',
    limits: [
      'A real monthly housing payment often adds one-twelfth of the annual property tax and homeowners insurance, and sometimes mortgage insurance. Those amounts depend on the house, the down payment, and the insurer. Adding a round number yourself is more honest than hiding an assumed tax rate inside the formula.',
      'The form also ignores discount points, origination fees, extra principal payments, biweekly schedules, interest-only periods, balloons, and adjustable rates. Paying extra principal would shorten the loan and reduce interest, but you would need an amortization schedule to see the new payoff date. This page cannot produce that schedule.',
      'Lenders may round the payment to the cent using their own rule, so a quote can differ by a few cents from the figure here even when the rate, amount, and term match. Use a matching quote as a check, not as proof that either number is the contract payment.',
      'A payment in dollars also says nothing about tax taken out of a salary. If the income you would use to cover housing is taxed in England, Wales, or Northern Ireland, estimate that 2026/27 take-home pay separately and keep the currencies apart. This mortgage form does not convert pounds to dollars.'
    ],
    disclaimer: 'This mortgage calculator is general information, not a loan offer, a Loan Estimate, or financial advice. Confirm the rate, term, and cash due at closing with the lender.',
    faqs: [
      {
        q: 'Does this mortgage payment include property tax and insurance?',
        a: 'No. The result is principal and interest only. Taxes, homeowners insurance, mortgage insurance, and HOA dues are not estimated, because they are not determined by the amortization formula.'
      },
      {
        q: 'Why does a 15-year mortgage cost more each month and less overall?',
        a: 'The same balance is spread over 180 payments instead of 360, so each payment is larger. The balance also spends less time accruing interest, so the interest total falls. On the $300,000, 6.5% example, the 15-year payment is $2,613.32 and total interest is $170,397.98, against $1,896.20 and $382,633.47 over 30 years.'
      },
      {
        q: 'Should I type 6.5 or 0.065 for a 6.5% mortgage rate?',
        a: 'Type 6.5. The calculator divides the rate by 100 and then by 12. Entering 0.065 would be treated as a 0.065% annual rate, which is not a 6.5% mortgage.'
      },
      {
        q: 'Why does the monthly payment times the number of months miss the total?',
        a: 'Each displayed amount is rounded to the cent from the full-precision result. For the 30-year, 6.5%, $300,000 example, $1,896.20 times 360 is $682,632.00, while the displayed total repayment is $682,633.47. The $1.47 gap is rounding, not an extra charge.'
      },
      {
        q: 'Will this match a lender Loan Estimate?',
        a: 'Only the principal-and-interest line can be close, and only when the amount, note rate, and term match and the loan is a standard fixed monthly payment. A Loan Estimate also includes fees, escrow, and prepaid items that this calculator never sees.'
      }
    ],
    relatedLinks: [
      {
        slug: 'uk-take-home-pay-calculator',
        label: '2026/27 take-home pay calculator for England, Wales and Northern Ireland',
        note: 'Use it for the income side when the salary is taxed there. Do not subtract a sterling result from this dollar payment.'
      },
      {
        slug: 'loan-calculator',
        label: 'Personal and auto loan calculator',
        note: 'The same amortization formula, aimed at shorter installment loans.'
      },
      {
        slug: 'rent-affordability-calculator',
        label: 'Rent affordability calculator',
        note: 'Compares monthly rent with 30% of gross income. It does not estimate a mortgage payment.'
      },
      {
        slug: 'england-stamp-duty-calculator',
        label: 'England stamp duty calculator',
        note: 'Residential SDLT in pounds for a purchase in England or Northern Ireland. It is not added to this dollar loan payment.'
      },
      {
        slug: 'concrete-slab-calculator',
        label: 'Concrete slab calculator',
        note: 'Bags and cubic yards for a rectangular pour. It does not price the house or the mortgage.'
      }
    ]
  },
  'loan-calculator': {
    title: 'Personal and Auto Loan Payment Calculator | ClearCalc',
    h1: 'Personal and Auto Loan Payment Calculator',
    description: 'Calculate the monthly payment and total interest for a fixed-rate personal or auto loan. See the amortization formula, a 3-year versus 5-year example, and a payment table.',
    intro: [
      'This loan calculator estimates the fixed monthly payment on an installment loan such as a car loan or a personal loan. It uses the amount borrowed, the annual interest rate, and the term in years. The payment stays level until the balance reaches zero, as long as the rate does not change and every payment is made.',
      'It answers a different question from a mortgage page even though the algebra is the same. Auto and personal loans are usually shorter, the amounts are smaller, and people compare a three-year term with a five-year term rather than 15 years with 30. The page does not price a vehicle, check a credit score, or model a revolving credit-card balance.'
    ],
    steps: [
      'Enter the loan amount in US dollars. The sample is 25,000.',
      'Enter the annual interest rate as a percent. A 7.5% rate is entered as 7.5.',
      'Enter the term in years. Five years is 60 monthly payments.',
      'Press Calculate. Read the monthly payment, then the total repayment and total interest.'
    ],
    howHeading: 'How an installment-loan payment is calculated',
    howItWorks: [
      'The annual rate is divided by 100 and then by 12 to get the monthly rate. The term in years is multiplied by 12 to get the number of payments. Those values go into the standard amortizing-payment formula. Interest each month is the monthly rate times the remaining balance, and the rest of the payment reduces principal.',
      'A longer term lowers the payment and raises the interest you pay if the rate stays the same. A shorter term does the opposite. The calculator does not know whether the rate is a dealer rate, a credit-union rate, or a rate that required you to buy add-on products. It only amortizes the numbers you type.',
      'A zero rate is allowed. The payment becomes the principal divided by the number of months, and interest is zero. That is the right model for a true 0% promotional installment plan. It is the wrong model for a credit card, which charges interest on a revolving balance and lets the payment change.',
      'Whether the payment fits a budget is a second sum this form does not do. Divide the monthly payment by monthly take-home pay, not by gross salary. Gross pay still includes tax. On the sample loan the payment is $500.95. If monthly take-home is $3,200, the share is 500.95 / 3,200 = 0.156546875, which is 15.65% to two decimal places. Against a $4,000 gross month the same payment is only 12.52%, and that smaller share is the wrong check because the tax has not been removed. For a salary taxed in England, Wales, or Northern Ireland, the 2026/27 take-home page estimates income tax and employee National Insurance in pounds. Compare a pound payment with a pound take-home. Do not subtract this dollar result from that sterling figure.'
    ],
    formula: 'Monthly rate r = annual percent / 100 / 12\nPayments n = years × 12\nIf r = 0: payment M = principal / n\nOtherwise: M = principal × r × (1 + r)^n / ((1 + r)^n − 1)\nTotal repayment = M × n\nTotal interest = total repayment − principal',
    formulaNotes: [
      'Total repayment uses the unrounded payment. The headline payment is then rounded to the cent on its own, so payment times number of months can be a few cents away from the displayed total. On the sample five-year loan, $500.95 times 60 is $30,057.00, while the displayed total is $30,056.92.',
      'The formula assumes one payment per month and a rate that is a nominal annual rate compounded monthly. A loan quoted with a daily periodic rate, a weekly payment, or a single payoff date needs a different calculation.'
    ],
    examplesHeading: 'Worked personal and auto loan examples',
    examples: [
      {
        title: '$25,000 at 7.5% for five years',
        paragraphs: [
          'This is the form\'s sample: principal 25,000, annual rate 7.5, term 5 years, which is 60 payments. The calculator shows $500.95 / month, total repayment of $30,056.92, and total interest of $5,056.92.',
          'You pay back a bit more than $5,000 on top of the $25,000 you borrowed. That interest total is the cost of spreading the loan over five years at 7.5%, before any origination fee or late fee.'
        ]
      },
      {
        title: 'The same $25,000 loan paid in three years',
        paragraphs: [
          'Change only the term to 3 years (36 payments). The calculator shows $777.66 / month, total repayment of $27,995.60, and total interest of $2,995.60.',
          'The payment rises by $276.71, and interest falls by $2,061.32 compared with the five-year loan. Whether the higher payment is affordable is a budget question the formula cannot answer. The math only shows the trade.'
        ]
      },
      {
        title: 'An $18,000 car loan and a smaller two-year loan',
        paragraphs: [
          'An $18,000 balance at 6.9% for 4 years produces $430.20 / month, total repayment of $20,649.49, and total interest of $2,649.49. A dealer quote that is far from $430.20 either uses a different rate or term, includes add-on products in the amount financed, or is not a simple monthly installment loan.',
          'An $8,000 loan at 11% for 2 years produces $372.86 / month, total repayment of $8,948.70, and total interest of $948.70. The rate is higher than the car-loan example, but the short term keeps the interest under $1,000. Comparing only the monthly payment would hide that.'
        ]
      }
    ],
    table: {
      heading: 'Installment loan comparison',
      caption: 'Figures are what this calculator displays. They exclude fees, taxes, insurance, and any down payment, because those are not inputs.',
      headers: ['Amount and rate', 'Term', 'Monthly payment', 'Total repayment', 'Total interest'],
      rows: [
        ['$25,000 at 7.5%', '5 years', '$500.95', '$30,056.92', '$5,056.92'],
        ['$25,000 at 7.5%', '3 years', '$777.66', '$27,995.60', '$2,995.60'],
        ['$18,000 at 6.9%', '4 years', '$430.20', '$20,649.49', '$2,649.49'],
        ['$8,000 at 11%', '2 years', '$372.86', '$8,948.70', '$948.70']
      ]
    },
    limitsHeading: 'Limits of a simple loan payment',
    limits: [
      'Sales tax, title fees, extended warranties, and credit insurance are included only if you add them into the loan amount yourself. A down payment should be subtracted before you enter the principal. The calculator will not do either adjustment for you.',
      'Credit cards, buy-now-pay-later plans with a deferred interest cliff, and loans with a balloon payment do not follow this formula. Neither do loans whose payment is weekly or biweekly. If your contract says the rate is charged daily, do not expect this monthly formula to reproduce the lender\'s payoff quote.',
      'Prepaying principal saves interest and can shorten the term, but this tool always assumes you pay exactly the scheduled payment for the full term and nothing more. It also cannot tell you whether a quoted APR already includes fees. The rate field is the rate used to compute interest, which may differ from an APR that folds in prepaid charges.'
    ],
    disclaimer: 'This loan calculator is general information, not a credit offer or financial advice. The contract rate, fees, and payment schedule control what you actually owe.',
    faqs: [
      {
        q: 'Can I use this calculator for a car loan?',
        a: 'Yes, if the car loan is a fixed-rate installment loan with a monthly payment. Enter the amount financed after the down payment, the annual rate, and the term in years. Taxes and add-on products count only when they are part of that amount financed.'
      },
      {
        q: 'Does a shorter loan term always reduce the interest?',
        a: 'It does when the interest rate and the amount borrowed stay the same, because the balance is outstanding for fewer months. On $25,000 at 7.5%, three years of interest is $2,995.60 and five years is $5,056.92. A shorter term can still be a poor fit if the higher payment is unaffordable.'
      },
      {
        q: 'Why is this not a credit-card payoff calculator?',
        a: 'A credit card is revolving credit. The balance and the minimum payment change, and interest is often charged with a daily periodic rate. This form locks in one balance, one rate, and one term, then computes a single level payment that reaches zero on schedule.'
      },
      {
        q: 'What does a zero interest rate do on a personal loan?',
        a: 'The payment is the principal divided by the number of monthly payments, and total interest is $0.00. A $1,200 loan at 0% for one year is $100 a month. Enter the rate as 0, not as a blank field.'
      },
      {
        q: 'Are the payments assumed to be monthly?',
        a: 'Yes. The term in years is multiplied by 12, and the annual rate is divided by 12. A weekly payment plan needs a different period count and a weekly rate. Do not enter a number of weeks in the years field.'
      },
      {
        q: 'How do I compare this payment with take-home pay?',
        a: 'Divide the monthly payment by the monthly cash you receive after tax. The sample payment of $500.95 is 15.65% of a $3,200 take-home, because 500.95 / 3,200 × 100 = 15.6546875, which rounds to 15.65. It is a smaller percent of gross pay, and that comparison skips the tax. This loan form is in US dollars. A 2026/27 salary in England, Wales, or Northern Ireland can be turned into monthly take-home on the take-home pay calculator, then compared only with a payment that is also in pounds.'
      }
    ],
    relatedLinks: [
      {
        slug: 'uk-take-home-pay-calculator',
        label: '2026/27 take-home pay calculator for England, Wales and Northern Ireland',
        note: 'Estimates income tax and employee Class 1 National Insurance on an annual salary for that tax year.'
      },
      {
        slug: 'percentage-calculator',
        label: 'Percentage calculator',
        note: 'Enter the monthly payment as the part and monthly take-home as the whole if you want the same ratio as a percent.'
      }
    ]
  },
  'compound-interest-calculator': {
    title: 'Compound Interest Calculator with Monthly Deposits | ClearCalc',
    h1: 'Compound Interest Calculator with Monthly Deposits',
    description: 'Project a balance with monthly compounding and end-of-month contributions. Includes the future-value formula, a 10-year example, and a growth table.',
    intro: [
      'This compound interest calculator projects a future balance from a starting amount, a monthly contribution, an annual return, and a number of years. Compounding is monthly. Each contribution is treated as if it arrives at the end of the month, so it does not earn that month\'s return.',
      'The result is a mathematical projection, not a forecast of a bank account, a brokerage account, or a retirement plan. Markets do not pay a constant monthly rate. Fees, taxes, and inflation are not deducted. The useful part is seeing how the starting balance and the deposits combine, and how much of the ending number is growth rather than money you put in.'
    ],
    steps: [
      'Enter the initial investment in US dollars. Use 0 if you are starting from nothing.',
      'Enter the monthly contribution. Use 0 if you will not add money.',
      'Enter the annual return as a percent. A 7% illustration is entered as 7.',
      'Enter the number of years, then press Calculate. The headline is the projected ending balance.'
    ],
    howHeading: 'How monthly compounding and deposits are combined',
    howItWorks: [
      'The annual return is divided by 100 and then by 12 to produce a monthly rate. Ten years is 120 monthly periods. The starting balance grows by that monthly rate, compounded, which is the familiar principal times (1 + r) raised to the number of months.',
      'Contributions are handled separately as an ordinary annuity. The future value of a series of equal end-of-month deposits is the deposit times (((1 + r)^n − 1) / r). The calculator adds that to the future value of the starting balance. It does not multiply the contribution piece by an extra (1 + r), which is what a beginning-of-month deposit would require.',
      'The detail lines split the ending balance into money contributed and estimated growth. Contributions equal the starting amount plus every monthly deposit. Growth is the ending balance minus that sum. Growth can be larger than the deposits, and it can also be zero when the return is zero.'
    ],
    formula: 'Monthly rate r = annual percent / 100 / 12\nMonths n = years × 12\nFuture value of principal = principal × (1 + r)^n\nIf r = 0: future value of deposits = monthly deposit × n\nOtherwise: future value of deposits = monthly deposit × (((1 + r)^n − 1) / r)\nEnding balance = those two future values added\nContributions = principal + monthly deposit × n\nGrowth = ending balance − contributions',
    formulaNotes: [
      'End-of-month timing means a deposit made on the first day of the month would be worth slightly more than this model shows, because it would earn that month\'s return. The difference is one month of growth on each deposit, which is the ordinary-annuity result multiplied by (1 + r).',
      'A 0% return skips the division by r. The ending balance is then exactly the money you contributed, and growth is zero. That check confirms the form is not inventing a return you did not enter.'
    ],
    examplesHeading: 'Worked compound-growth examples',
    examples: [
      {
        title: '$10,000 plus $250 a month at 7% for 10 years',
        paragraphs: [
          'Starting balance 10,000, monthly contribution 250, annual return 7, years 10. There are 120 months, and the monthly rate is 0.07 / 12. The calculator shows an ending balance of $63,367.82, total contributions of $40,000.00, and estimated growth of $23,367.82.',
          'The $40,000 of contributions is the original $10,000 plus 250 times 120. Of the ending balance, about $20,096.61 comes from compounding the original $10,000, and about $43,271.20 comes from the deposits and the growth on those deposits. The two pieces add to the $63,367.82 headline. You did not "earn" $63,367.82 from the market. A large share is money you paid in.'
        ]
      },
      {
        title: 'The same $10,000 with no monthly deposit',
        paragraphs: [
          'Set the monthly contribution to 0 and leave 10,000, 7%, and 10 years. The calculator shows $20,096.61, contributions of $10,000.00, and growth of $10,096.61. The balance a little more than doubles.',
          'A rough check is the rule of 72: 72 / 7 is about 10.3 years to double at 7% a year. Ten years of monthly compounding lands just past a double, at $20,096.61, which is consistent with that shortcut. The rule of 72 is only a check. The calculator\'s figure is the one that uses the monthly formula.'
        ]
      },
      {
        title: 'Deposits only, a longer 5% case, and a zero return',
        paragraphs: [
          'Start at 0, contribute 250 a month, and keep 7% for 10 years. Contributions are 250 times 120, or $30,000. The calculator shows $43,271.20 and growth of $13,271.20. Every dollar of the ending balance came from the deposits and their growth, because the starting balance was zero.',
          'A longer illustration: $5,000 to start, $100 a month, 5% a year, 20 years. Contributions are 5,000 plus 100 times 240, or $29,000. The calculator shows $54,666.57 and growth of $25,666.57. The same $10,000 and $250 a month for 10 years at a 0% return shows $40,000.00 and growth of $0.00. No return was entered, so none is invented.'
        ]
      }
    ],
    table: {
      heading: 'Projected balances from this calculator',
      caption: 'Ending balances use monthly compounding and end-of-month contributions. They are projections at a constant rate, not account statements.',
      headers: ['Start', 'Monthly', 'Annual rate', 'Years', 'Contributions', 'Ending balance', 'Growth'],
      rows: [
        ['$10,000', '$250', '7%', '10', '$40,000.00', '$63,367.82', '$23,367.82'],
        ['$10,000', '$0', '7%', '10', '$10,000.00', '$20,096.61', '$10,096.61'],
        ['$0', '$250', '7%', '10', '$30,000.00', '$43,271.20', '$13,271.20'],
        ['$5,000', '$100', '5%', '20', '$29,000.00', '$54,666.57', '$25,666.57'],
        ['$10,000', '$250', '0%', '10', '$40,000.00', '$40,000.00', '$0.00']
      ]
    },
    limitsHeading: 'What a constant return leaves out',
    limits: [
      'A savings account, a bond, and a stock fund do not credit the same rate every month. Sequence of returns matters once you are withdrawing money, and this calculator never models withdrawals. It only compounds forward.',
      'Taxes can reduce what you keep, either each year in a taxable account or later in a tax-deferred one. Inflation reduces what the ending balance can buy. Neither is applied. A 7% illustration that ignores a 3% rise in prices is not a 7% increase in purchasing power.',
      'Fees work like a lower return. If a fund expense ratio is 0.20%, a 7% market illustration is closer to 6.8% after that fee, and you would enter 6.8 rather than expect the form to subtract expenses. Contribution limits, employer matches, and penalties for early withdrawal are also outside the formula.'
    ],
    disclaimer: 'This compound interest projection is general information, not an investment forecast or financial advice. Actual returns vary and can be negative.',
    faqs: [
      {
        q: 'Does my monthly deposit earn a return in the month I add it?',
        a: 'Not in this calculator. Deposits are treated as end-of-month contributions. They start compounding in later months. A beginning-of-month deposit would use the same annuity formula multiplied by one extra month of growth.'
      },
      {
        q: 'How often does the interest compound?',
        a: 'Monthly. The annual percent is divided by 12, and that monthly rate is compounded once per month for years times 12. Annual compounding, daily compounding, and continuous compounding are different formulas and will not match this result.'
      },
      {
        q: 'Is the ending balance a prediction of investment growth?',
        a: 'No. It is the balance you would have if the annual return you typed were credited evenly every month, with no fees, taxes, inflation, or withdrawals. A 7% figure is an illustration you chose, not a rate the calculator expects the market to pay.'
      },
      {
        q: 'How do I model a one-time deposit and nothing more?',
        a: 'Enter the one-time amount as the initial investment and set the monthly contribution to 0. At 7% for 10 years, $10,000 grows to $20,096.61 in this calculator, with $10,096.61 of that coming from growth.'
      },
      {
        q: 'What does estimated growth mean?',
        a: 'It is the ending balance minus every dollar you contributed. Contributions are the starting amount plus the monthly deposit times the number of months. Growth is not cash you can spend without selling or withdrawing, and it has not been reduced for taxes.'
      }
    ]
  },
  'bmi-calculator': {
    title: 'Adult BMI Calculator in Kilograms and Centimeters | ClearCalc',
    h1: 'Adult BMI Calculator (kg and cm)',
    description: 'Calculate adult body mass index from kilograms and centimeters. See the BMI formula, WHO category cutoffs, worked examples, and what the result does not diagnose.',
    intro: [
      'This BMI calculator computes adult body mass index from weight in kilograms and height in centimeters. BMI is weight divided by height squared, with height converted from centimeters to meters first. The page then labels the result with one of four ranges: Underweight, Healthy range, Overweight, or Obesity range.',
      'Those labels follow the usual adult cutoffs used by the World Health Organization: under 18.5, 18.5 up to 25, 25 up to 30, and 30 or above. BMI is a screening measure for population and clinic use. It is not a diagnosis, it does not measure body fat directly, and it is not the right chart for children, teenagers, or pregnancy. A clinician uses more than a single ratio.'
    ],
    steps: [
      'Enter weight in kilograms. Pounds have to be converted before you type.',
      'Enter height in centimeters, not meters. A height of 1.75 m is entered as 175.',
      'Press Calculate. The headline is BMI rounded to one decimal. The category uses the unrounded value.',
      'Read the category line. The calculator also reminds you that BMI is a screening measure, not a medical diagnosis.'
    ],
    howHeading: 'How adult BMI is calculated from kilograms and centimeters',
    howItWorks: [
      'Height in centimeters is divided by 100 to get meters. That height is squared. Weight in kilograms is divided by the squared height. For 75 kg and 175 cm, height is 1.75 meters, the square is 3.0625, and 75 / 3.0625 is about 24.49, which displays as BMI 24.5.',
      'The category is chosen from the unrounded value. Below 18.5 is Underweight. From 18.5 up to but not including 25 is Healthy range. From 25 up to but not including 30 is Overweight. 30 or above is Obesity range. A result that rounds to 25.0 on screen can still be Healthy range if the unrounded BMI is under 25.',
      'The form has no field for age, sex, waist circumference, or muscle mass. Those factors change how a clinician reads a number. The arithmetic itself is the same for every adult who enters the same weight and height.'
    ],
    formula: 'Height in meters = height in centimeters / 100\nBMI = weight in kilograms / (height in meters)²\nUnder 18.5: Underweight\n18.5 up to 25: Healthy range\n25 up to 30: Overweight\n30 or above: Obesity range',
    formulaNotes: [
      'The on-screen BMI uses at most one decimal place. The category does not use that rounded text. It uses the full division. That is why the label and the rounded number can sit on different sides of a cutoff.',
      'The World Health Organization describes the adult bands as underweight below 18.5, normal from 18.5 to 24.9, overweight from 25 to 29.9, and obese at 30 and above, with further obese classes at 35 and 40. This tool stops at four labels and calls the 18.5–24.9 band Healthy range. It does not split obesity into classes.'
    ],
    examplesHeading: 'Worked BMI examples',
    examples: [
      {
        title: '75 kg and 175 cm',
        paragraphs: [
          'Height is 175 / 100 = 1.75 meters. Squared height is 1.75 × 1.75 = 3.0625. BMI is 75 / 3.0625 = 24.4897959…. The calculator shows BMI 24.5 and the category Healthy range, because 24.49 is below 25.',
          'This is the sample built into the form. Changing either input changes both the number and, if you cross a cutoff, the label.'
        ]
      },
      {
        title: 'Shorter, heavier, and lighter adults',
        paragraphs: [
          '50 kg and 160 cm: height 1.60, squared height 2.56, BMI 50 / 2.56 = 19.53125. The calculator shows BMI 19.5 and Healthy range. 54 kg and 175 cm: 54 / 3.0625 = 17.63265, shown as BMI 17.6 and Underweight.',
          '92 kg and 180 cm: height 1.80, squared height 3.24, BMI 92 / 3.24 = 28.39506, shown as BMI 28.4 and Overweight. 120 kg and 175 cm: 120 / 3.0625 = 39.18367, shown as BMI 39.2 and Obesity range. The tool does not relabel 39.2 as a separate class III figure. Any BMI of 30 or more gets the same Obesity range label.'
        ]
      },
      {
        title: 'Starting from pounds and inches',
        paragraphs: [
          'The form does not accept pounds or feet. Convert first. Multiply pounds by 0.45359237 to get kilograms, and multiply inches by 2.54 to get centimeters. Five feet nine inches is 69 inches, and 69 × 2.54 = 175.26 cm. A weight of 165 pounds is 165 × 0.45359237 = 74.8427 kg.',
          'If you type the rounded values 74.8 kg and 175 cm, BMI is 74.8 / 3.0625 = 24.4245, which displays as BMI 24.4 and Healthy range. Rounding the inputs before you type them moves the result slightly. The calculator is doing the metric formula on whatever you entered, not a hidden imperial formula.'
        ]
      }
    ],
    table: {
      heading: 'Adult BMI cutoffs used on this page',
      caption: 'Category boundaries match this calculator. WHO wording for adults is shown beside the label this page prints. The displayed BMI is rounded to one decimal after the category is chosen.',
      headers: ['Unrounded BMI', 'Label on this page', 'Common WHO adult band'],
      rows: [
        ['Below 18.5', 'Underweight', 'Underweight'],
        ['18.5 up to 25', 'Healthy range', 'Normal range, often written 18.5–24.9'],
        ['25 up to 30', 'Overweight', 'Overweight, often written 25.0–29.9'],
        ['30 and above', 'Obesity range', 'Obese, with further classes at 35 and 40']
      ]
    },
    limitsHeading: 'What BMI does not tell you',
    limits: [
      'BMI does not distinguish fat from muscle, and it does not locate fat. Two adults with the same BMI can have different waist measurements, fitness, and lab results. Athletes and people with high muscle mass are often misread by the ratio alone. Older adults can lose muscle and still sit in a "healthy" band.',
      'Children and teenagers are interpreted with BMI-for-age percentiles, not these adult cutoffs. Pregnancy changes the meaning of the ratio. Some populations also have different associations between BMI and health risk than the bands imply. This page does not adjust for any of that.',
      'A single BMI is not a treatment plan, a body-fat percentage, or a reason to start or stop a diet. If you are making a medical decision, take the number to a clinician who can use height, weight, and the rest of your history together.'
    ],
    disclaimer: 'This BMI result is general information, not a diagnosis or medical advice. Adult cutoffs are a screening aid, not a judgment of health.',
    faqs: [
      {
        q: 'Which units does this BMI calculator accept?',
        a: 'Kilograms for weight and centimeters for height. Do not enter pounds, stones, feet, or meters. A height of 1.75 meters must be typed as 175. Convert pounds to kilograms by multiplying by 0.45359237, and inches to centimeters by multiplying by 2.54.'
      },
      {
        q: 'What do Underweight, Healthy range, Overweight, and Obesity range mean?',
        a: 'They are the four adult bands this tool prints: under 18.5, 18.5 up to 25, 25 up to 30, and 30 or above. The middle band corresponds to the WHO normal range. The tool does not subdivide obesity at 35 or 40.'
      },
      {
        q: 'Can the BMI display 25.0 and still say Healthy range?',
        a: 'Yes. The category uses the unrounded ratio, and the headline rounds to one decimal. A value such as 24.96 is still under 25, so the label is Healthy range, while the headline can round to 25.0.'
      },
      {
        q: 'Is BMI a medical diagnosis?',
        a: 'No. It is a screening ratio of weight to height squared. It does not measure body fat, and it is not a diagnosis of any disease. The calculator states that on the result itself.'
      },
      {
        q: 'Does age or sex change the formula here?',
        a: 'No. The same division is used for every entry. Age and sex matter in how a result is interpreted, especially for children, but this form does not collect them and does not switch formulas.'
      }
    ]
  },
  'calorie-calculator': {
    title: 'Daily Calorie Calculator for Men and Women (Mifflin–St Jeor) | ClearCalc',
    h1: 'Daily Maintenance Calorie Calculator',
    description: 'Estimate daily maintenance calories with the Mifflin–St Jeor equation for men (+5) or women (−161), then apply an activity multiplier. Includes both constants, worked examples, and a comparison table.',
    intro: [
      'This calorie calculator estimates a daily maintenance level from a Mifflin–St Jeor constant, age, weight, height, and an activity multiplier. Choose men (+5) or women (−161). The shared part of the equation is 10 times weight in kilograms, plus 6.25 times height in centimeters, minus 5 times age in years. The constant you chose is added last. That basal figure is then multiplied by the activity number you type.',
      'The two constants differ by 166 kcal before activity is applied. On the sample adult, age 30, 75 kg, and 175 cm, the men\'s basal estimate is 1,698.75 calories and the women\'s is 1,532.75. At a 1.55 multiplier the headlines are 2,633 calories/day and 2,376 calories/day. The result is an estimate of maintenance calories, not a prescribed intake, and it is not a basal metabolic measurement from a lab. Body mass index, on the separate BMI page, does not use this equation at all.',
      'A measured run is a different number from this multiplier. A 5 kilometre finish of 25:00 is 5:00 per kilometre, 8:02.8 per mile, and 12 km/h on the 5K pace calculator. That pace describes one session. It does not replace the 1.55 you type here, and this page will not turn the pace into a calorie burn. Use the two results side by side: maintenance is the daily estimate, and the pace page is the speed of a distance you already timed.'
    ],
    steps: [
      'Choose Men (+5) or Women (−161). The sample starts on the men\'s constant.',
      'Enter age in years, weight in kilograms, and height in centimeters.',
      'Enter an activity multiplier as a plain number. A common moderate factor is 1.55. The field is not a menu.',
      'Press Calculate. The headline is basal calories times that multiplier, rounded to the nearest calorie. The first detail line is the basal estimate before activity, and the next line names the constant you chose.'
    ],
    howHeading: 'How the Mifflin–St Jeor estimate is built',
    howItWorks: [
      'Mifflin–St Jeor estimates resting energy expenditure. Weight is in kilograms, height is in centimeters, and age is in years. The men\'s equation is 10×weight + 6.25×height − 5×age + 5. The women\'s equation replaces the final +5 with −161. This form applies the constant you select. It does not infer the constant from a name or from a body measurement. The two constants differ by 166 kcal before activity is applied, and that gap scales with the multiplier. At 1.55 the gap is 166 × 1.55 = 257.3 calories, which is the distance between the two sample headlines after rounding.',
      'Resting expenditure is not the maintenance target most people want. Maintenance is closer to resting expenditure times a factor that stands in for movement. This calculator multiplies by whatever number you enter. It does not look up your job, steps, or workouts. If you type 1, you get the resting estimate alone, rounded to a whole calorie. Switching the constant and leaving the multiplier at 1 is the clean way to compare the two basal figures.',
      'The headline is that product rounded to the nearest calorie. The first detail line prints the basal estimate before rounding to a whole calorie, with up to two decimal places. For the sample man that line is 1,698.75 calories. For the sample woman it is 1,532.75 calories. The second line names the equation, either men (+5) or women (−161), so a saved result still says which constant produced it.'
    ],
    formula: 'BMR (men) = 10×kg + 6.25×cm − 5×age + 5\nBMR (women) = 10×kg + 6.25×cm − 5×age − 161\nChoose one constant. The form does not average them.\nMaintenance estimate = BMR × activity multiplier\nThe headline rounds that product to the nearest calorie.\nThe basal line shows BMR before that rounding, up to two decimal places.',
    formulaNotes: [
      'The activity multipliers people usually type are conventions attached to the equation later, not part of the original Mifflin–St Jeor paper. A common set is 1.2 for little movement, 1.375 for light activity, 1.55 for moderate activity, 1.725 for a very active week, and 1.9 for heavy training or a physical job. They are rough. Two people who both type 1.55 will not spend the same energy.',
      'Rounding uses the same rule as the on-screen number. A product of 2,038.5 displays as 2,039 calories/day. The page quotes the displayed calorie count, not a truncated one.'
    ],
    examplesHeading: 'Worked calorie examples',
    examples: [
      {
        title: 'Age 30, 75 kg, 175 cm, multiplier 1.55',
        paragraphs: [
          'Choose men (+5). Basal estimate = 10×75 + 6.25×175 − 5×30 + 5 = 750 + 1,093.75 − 150 + 5 = 1,698.75. The basal line reads 1,698.75 calories. Times 1.55 is 2,633.0625. The calculator shows 2,633 calories/day, and the equation line says men (+5).',
          'Switch the constant to women (−161) and leave age, weight, height, and 1.55 in place. The basal estimate is 1,698.75 − 166 = 1,532.75, and 1,532.75 × 1.55 = 2,375.7625, which rounds to 2,376. The calculator shows 2,376 calories/day, the basal line reads 1,532.75 calories, and the equation line says women (−161). The button applies the constant. You do not subtract 166 by hand.'
        ]
      },
      {
        title: 'The same person at the other common multipliers',
        paragraphs: [
          'Holding age, weight, and height at 30, 75 kg, and 175 cm, and keeping the men\'s constant, the basal estimate stays 1,698.75. Times 1.2 is 2,038.5, shown as 2,039 calories/day. Times 1.375 is 2,335.78125, shown as 2,336. Times 1.725 is 2,930.34375, shown as 2,930. Times 1.9 is 3,227.625, shown as 3,228.',
          'The same body with the women\'s constant has a basal estimate of 1,532.75. The headlines are 1,839 at a 1.2 multiplier, 2,108 at 1.375, 2,376 at 1.55, 2,644 at 1.725, and 2,912 at 1.9. The span from 2,039 to 3,228 on the men\'s side, or from 1,839 to 2,912 on the women\'s side, is the activity guess. If you are unsure which factor fits, calculate two neighbors and treat the gap as uncertainty.'
        ]
      },
      {
        title: 'Two other adult examples',
        paragraphs: [
          'Age 45, 90 kg, 182 cm, multiplier 1.375, men\'s constant. Basal estimate = 10×90 + 6.25×182 − 5×45 + 5 = 900 + 1,137.5 − 225 + 5 = 1,817.5. The basal line reads 1,817.5 calories. Times 1.375 is 2,499.0625. The calculator shows 2,499 calories/day. The same inputs with the women\'s constant use 1,651.5 as the basal estimate and show 2,271 calories/day.',
          'Age 25, 60 kg, 165 cm, multiplier 1.725, women\'s constant. Basal estimate = 10×60 + 6.25×165 − 5×25 − 161 = 600 + 1,031.25 − 125 − 161 = 1,345.25. Times 1.725 is 2,320.55625. The calculator shows 2,321 calories/day, and the basal line reads 1,345.25 calories. Choosing the men\'s constant on this body instead would add 166 to the basal estimate before the multiplier. The equation line is what tells you which one the headline used.'
        ]
      }
    ],
    table: {
      heading: 'Activity multipliers for one sample adult, both constants',
      caption: 'Age 30, 75 kg, 175 cm. The men\'s basal estimate is 1,698.75 calories. The women\'s basal estimate is 1,532.75 calories. Each calorie column is the headline this calculator displays after multiplying by that factor and rounding to the nearest calorie.',
      headers: ['Multiplier you type', 'Common name for that factor', 'Men (+5)', 'Women (−161)'],
      rows: [
        ['1.2', 'Sedentary, little exercise', '2,039', '1,839'],
        ['1.375', 'Light activity', '2,336', '2,108'],
        ['1.55', 'Moderate activity', '2,633', '2,376'],
        ['1.725', 'Very active', '2,930', '2,644'],
        ['1.9', 'Extra active or physical work', '3,228', '2,912']
      ]
    },
    limitsHeading: 'Limits of a maintenance estimate',
    limits: [
      'Predictive equations miss individual metabolism. Illness, medications, pregnancy, lactation, and significant muscle or fat differences move true needs away from the formula. A lab measurement of resting metabolism will not match 10×kg + 6.25×cm − 5×age + 5, or the same equation with −161, exactly. The constant is a population offset, not a measurement of the person in front of you.',
      'The activity factor is the largest judgment on the page, and it is entirely yours. Overestimating activity overestimates maintenance. The calculator cannot see step counts or training logs.',
      'Maintenance is not a weight-loss or weight-gain prescription. Eating less than maintenance tends to reduce weight and eating more tends to increase it, but the size and speed of that change are not calculated here. Medical diets, eating disorders, and clinical nutrition need a professional, not a single multiplied equation.',
      'Do not feed a race time into the activity field. The 5K pace calculator keeps the arithmetic in minutes and kilometres: 25:00 for 5 kilometres is exactly 5:00 per kilometre, and the same pace projects a half marathon of 1:45:29.3 and a marathon of 3:30:58.5 using 21.0975 km and 42.195 km. None of those clocks is a calorie total. Holding the sample man at 1.55 still displays 2,633 calories/day whether or not you also run that 5K. The pace page will not accept a weight, and this page will not accept a finish time.'
    ],
    disclaimer: 'This calorie figure is a general estimate, not a diet, a measurement of your metabolism, or medical advice.',
    faqs: [
      {
        q: 'Does this calorie calculator use the women\'s Mifflin–St Jeor equation?',
        a: 'Yes, when you choose Women (−161). The men\'s choice uses plus 5. For the sample 30-year-old at 75 kg, 175 cm, and a 1.55 multiplier, the men\'s path displays 2,633 calories/day and a basal line of 1,698.75. The women\'s path displays 2,376 calories/day and a basal line of 1,532.75. The equation line under the headline names the constant that was used.'
      },
      {
        q: 'What activity multiplier should I type?',
        a: 'The form does not choose one. Common values people pair with this equation are 1.2, 1.375, 1.55, 1.725, and 1.9, from little movement up to heavy daily activity. They are rough labels. If you are between two of them, run both and treat the difference as uncertainty.'
      },
      {
        q: 'Is the result a weight-loss target?',
        a: 'No. It is an estimate of maintenance calories: the basal equation times your multiplier. The page does not subtract a deficit, add a surplus, or predict how quickly weight would change.'
      },
      {
        q: 'Why is the result a whole number of calories?',
        a: 'The product of the basal estimate and the multiplier is rounded to the nearest calorie for the headline. The sample basal estimate 1,698.75 times 1.2 is 2,038.5, and the calculator shows 2,039 calories/day.'
      },
      {
        q: 'What is the difference between the basal estimate and the headline?',
        a: 'The basal estimate is the Mifflin–St Jeor resting figure, printed on its own line before activity is applied. The headline multiplies it by the activity number you typed and rounds to the nearest calorie. Type 1 if you want the resting figure alone in the headline. For the sample man, the basal line stays 1,698.75 calories at every multiplier.'
      },
      {
        q: 'Can a 25:00 5K replace the activity multiplier?',
        a: 'No. The multiplier is a judgment about the whole day. The 5K pace calculator converts 25:00 for 5 kilometres into 5:00 per kilometre, 8:02.8 per mile, and 12 km/h, then projects that pace onto a 10K, a half marathon, and a marathon. Those clocks are not calories. The sample man at 1.55 remains 2,633 calories/day on this page.'
      }
    ],
    relatedLinks: [
      { slug: 'bmi-calculator', label: 'Adult BMI calculator', note: 'Weight in kilograms and height in centimeters, as a screening category. It does not estimate calories.' },
      { slug: '5k-pace-calculator', label: '5K pace calculator', note: 'Minutes per kilometre and per mile from a finish time. A 25:00 5K is 5:00 per kilometre. It does not estimate calories.' },
      { slug: 'percentage-calculator', label: 'Percentage calculator', note: 'Useful if you want a percent difference between two calorie figures you already have. It does not run Mifflin–St Jeor.' }
    ]
  },
  'percentage-calculator': {
    title: 'Percentage Calculator: What Percent Is X of Y? | ClearCalc',
    h1: 'What Percent Is One Number of Another?',
    description: 'Find what percentage one number is of another. Includes the formula, worked examples, a common-percent table, and the related percent-of and percent-change formulas.',
    intro: [
      'This percentage calculator answers one question: what percent is the part of the whole? Divide the part by the whole and multiply by 100. Enter 25 as the part and 200 as the whole, and the result is 12.5%.',
      'People use the words "percentage calculator" for three different jobs: this ratio, "what is X percent of Y," and percent change from an old number to a new one. This form does only the first. The other two formulas are written out below so you can do them by hand without pretending the button did them. The whole must not be zero, because division by zero is undefined.'
    ],
    steps: [
      'Enter the part, the number you are measuring.',
      'Enter the whole, the number you are measuring it against. Do not enter 0.',
      'Press Calculate. The headline is the part divided by the whole, times 100, with at most two decimal places.',
      'Read the sentence under the result. It restates the same ratio in words.'
    ],
    howHeading: 'How "percent of a whole" is calculated',
    howItWorks: [
      'A percent is a ratio scaled to 100. If the part equals the whole, the result is 100%. If the part is half the whole, the result is 50%. If the part is larger than the whole, the result is above 100%, which is allowed and often correct. 150 out of 80 is more than the whole, so the percent is above 100.',
      'The calculator does not know which number is a price, a score, or a count. It will happily report a percent for any pair except a zero whole. Negative inputs are passed through the same division, which can produce a negative percent. That is rarely what a shopping or grading question wants.',
      'Displayed percents use at most two decimal places. Two divided by three, times 100, is 66.666…%, and the calculator shows 66.67%. The repeating value is not stored as a fraction.'
    ],
    formula: 'Percentage = (part ÷ whole) × 100\nThe whole must not be 0.\nRelated, not what this form computes:\nX percent of Y = Y × X / 100\nPercent change = (new − old) / old × 100',
    formulaNotes: [
      'Finding 18% of 85 is the second formula: 85 × 18 / 100 = 15.3. You would not get that by entering part 18 and whole 85. That entry answers a different question and returns 21.18%, because 18 is 21.18% of 85.',
      'Percent change needs an old value and a new value. From 80 to 100, the change is (100 − 80) / 80 × 100 = 25% increase. From 100 to 80, it is (80 − 100) / 100 × 100 = −20%, a 20% decrease. The base is the old number, so a rise and the reverse fall are not the same percent.'
    ],
    examplesHeading: 'Worked percentage examples',
    examples: [
      {
        title: '25 is what percent of 200?',
        paragraphs: [
          'Part 25, whole 200. The ratio is 25 / 200 = 0.125, and 0.125 × 100 = 12.5. The calculator shows 12.5%, and the detail line reads "25 is 12.5% of 200."',
          'The same relationship backwards is "12.5% of 200 is 25," which is the percent-of formula, not a second mode of this form. Both sentences describe one ratio.'
        ]
      },
      {
        title: 'Scores, thirds, and results over 100%',
        paragraphs: [
          'A score of 45 out of 60: 45 / 60 × 100 = 75. The calculator shows 75%. Two out of three: 2 / 3 × 100 = 66.666…, shown as 66.67%. The hidden repeating 6 is rounded, not truncated to 66.66.',
          '150 out of 80: 150 / 80 × 100 = 187.5. The calculator shows 187.5%. A result above 100% is correct whenever the part is larger than the whole. It is not an error message.'
        ]
      },
      {
        title: 'The two questions this button does not answer',
        paragraphs: [
          'What is 18% of 85? Compute 85 × 18 / 100 = 15.3 by hand. Entering 18 and 85 in this form instead produces about 21.18%, which is the share 18 represents of 85, not 18 percent of 85.',
          'What is the percent change from 80 to 100? Compute (100 − 80) / 80 × 100 = 25, a 25% increase. The reverse, from 100 down to 80, is a 20% decrease because the base is now 100. This form has no "old" and "new" fields, so it cannot apply that formula for you.'
        ]
      }
    ],
    table: {
      heading: 'Common percents of 200',
      caption: 'Each row is a part you can type, with 200 as the whole, and the percent this calculator shows. The last column is the same fact written as "percent of."',
      headers: ['Part', 'Whole', 'This calculator shows', 'Same fact, other wording'],
      rows: [
        ['20', '200', '10%', '10% of 200 is 20'],
        ['25', '200', '12.5%', '12.5% of 200 is 25'],
        ['50', '200', '25%', '25% of 200 is 50'],
        ['100', '200', '50%', '50% of 200 is 100'],
        ['150', '200', '75%', '75% of 200 is 150'],
        ['200', '200', '100%', '100% of 200 is 200']
      ]
    },
    limitsHeading: 'Where a two-number percent stops',
    limits: [
      'The calculator does not convert a fraction in lowest terms, and it does not show repeating decimals beyond two places. 66.67% is not exactly two thirds. If you need an exact fraction, keep the division as 2/3 rather than the rounded percent.',
      'Percent change, percent of a number, percentage points, and "percent greater than" are easy to mix up. A move from 10% to 15% is a rise of 5 percentage points, and it is also a 50% increase relative to 10. This form will not choose the interpretation. You have to know which number is the part and which is the whole.',
      'A whole of zero cannot be used. There is no percent that expresses a part of nothing. Leave the field blank or enter 0 and the division does not produce a usable ratio.'
    ],
    disclaimer: 'This percentage tool is general arithmetic, not financial, grading, or tax advice. Match the part and the whole to the question you actually have.',
    faqs: [
      {
        q: 'How do I find what percent one number is of another?',
        a: 'Put the first number in Part and the second in Whole. The calculator divides part by whole and multiplies by 100. Part 25 and whole 200 produce 12.5%.'
      },
      {
        q: 'Can the percentage be more than 100%?',
        a: 'Yes. If the part is larger than the whole, the result is above 100%. Part 150 and whole 80 produce 187.5%. That is the correct ratio, not a cap.'
      },
      {
        q: 'What happens if the whole is zero?',
        a: 'The percent is undefined. Dividing by zero does not produce a meaningful ratio, so the whole has to be a non-zero number.'
      },
      {
        q: 'How is percent change different from this calculator?',
        a: 'Percent change is (new − old) / old × 100. From 80 to 100 that is a 25% increase. This form has no old and new fields. It only computes part / whole × 100.'
      },
      {
        q: 'How do I calculate a percent of a number instead?',
        a: 'Multiply the number by the percent and divide by 100. Eighteen percent of 85 is 85 × 18 / 100 = 15.3. Entering 18 and 85 here answers a different question: 18 is about 21.18% of 85.'
      }
    ]
  },
  'tip-calculator': {
    title: 'Tip Calculator for Splitting a Restaurant Bill | ClearCalc',
    h1: 'Tip Calculator for Splitting a Bill',
    description: 'Calculate a tip, the total bill, and an equal share per person. Includes a tip-rate table for a sample check and a note on cent rounding.',
    intro: [
      'This tip calculator takes a bill amount, a tip percent, and a number of people. It multiplies the bill by the tip rate, adds that tip to the bill, and divides the total by the number of people. The headline is one person\'s equal share of bill plus tip.',
      'The form does not know whether your bill is pre-tax or post-tax, and it does not know the local custom. In the United States a restaurant tip of 15% to 20% of the pre-tax or post-tax bill is a common range, and some bills already include a service charge. Other countries expect little or no extra tip. Type the percent you intend to leave. The calculator will not pick one.'
    ],
    steps: [
      'Enter the bill amount in US dollars, before the tip.',
      'Enter the tip percent. For 18%, type 18.',
      'Enter how many people are splitting the total. Use 1 if you are not splitting.',
      'Press Calculate. The headline is the equal share. Tip and total bill appear underneath.'
    ],
    howHeading: 'How the tip and the split are calculated',
    howItWorks: [
      'Tip equals bill times tip percent divided by 100. Total equals bill plus tip. Each person\'s share equals that total divided by the number of people. There is no tax field. If you want to tip on the pre-tax subtotal, enter the subtotal as the bill. If you want to tip on the amount after tax, enter that larger amount instead.',
      'Every displayed dollar amount is rounded to the cent on its own. The rounded tip plus the bill usually matches the rounded total, but the rounded per-person shares multiplied by the number of people can be a cent away from the rounded total. That is ordinary money rounding, not a missing cent in the formula.',
      'The split is equal. The calculator cannot give one person a different share, remove someone who did not eat, or add a fixed dollar tip instead of a percent. A 0% tip is allowed and produces a tip of $0.00.'
    ],
    formula: 'Tip = bill × tip percent / 100\nTotal = bill + tip\nShare per person = total / number of people\nEach dollar amount is rounded to the cent for display.',
    formulaNotes: [
      'The number of people must be at least 1. Dividing by zero people is undefined. Fractions of a person are not a meaningful split even though a numeric field will accept them.',
      'A tip percent above 100 is mathematically allowed and is rarely what a diner means. A tip of 0 is a real choice and calculates cleanly.'
    ],
    examplesHeading: 'Worked tip and split examples',
    examples: [
      {
        title: '$85 bill, 18% tip, two people',
        paragraphs: [
          'Tip = 85 × 18 / 100 = 15.30. Total = 85 + 15.30 = 100.30. Share = 100.30 / 2 = 50.15. The calculator shows $50.15 per person, a tip of $15.30, and a total bill of $100.30.',
          'These particular amounts add back exactly: two times $50.15 is $100.30, and $85.00 plus $15.30 is $100.30. Not every bill is that tidy. The next example is not.'
        ]
      },
      {
        title: 'A 20% tip that does not split to the cent',
        paragraphs: [
          'Bill $64.27, tip 20%, three people. Raw tip = 64.27 × 0.20 = 12.854, which displays as $12.85. Raw total = 77.124, which displays as $77.12. Raw share = 77.124 / 3 = 25.708, which displays as $25.71 per person.',
          'Three times the displayed share is $77.13, one cent more than the displayed total of $77.12. If you are settling cash, someone has to absorb that cent. The formula did not lose it. The screen rounded each line separately.'
        ]
      },
      {
        title: 'A four-person 15% tip, and no tip at all',
        paragraphs: [
          'Bill $120, tip 15%, four people. Tip = 18, total = 138, share = 34.50. The calculator shows $34.50 per person, a tip of $18.00, and a total bill of $138.00. Four times $34.50 is $138.00 exactly.',
          'Bill $42, tip 0%, one person. The calculator shows $42.00 per person, a tip of $0.00, and a total bill of $42.00. Use a zero when you mean no tip. Leaving the percent at the sample 18 would add a tip you did not intend.'
        ]
      }
    ],
    table: {
      heading: 'Tip rates on an $85 bill split two ways',
      caption: 'Shares are what this calculator displays for a bill of $85 and 2 people. At 15% and 25%, two displayed shares differ by one cent from the displayed total because each amount is rounded on its own.',
      headers: ['Tip percent', 'Tip', 'Total', 'Each of 2 people'],
      rows: [
        ['15%', '$12.75', '$97.75', '$48.88'],
        ['18%', '$15.30', '$100.30', '$50.15'],
        ['20%', '$17.00', '$102.00', '$51.00'],
        ['25%', '$21.25', '$106.25', '$53.13']
      ]
    },
    limitsHeading: 'What the tip split does not handle',
    limits: [
      'Service charges, auto-gratuities, and couvert fees that are already on the bill should not be tipped again unless you mean to. The calculator cannot see the printed check. If a 18% service charge is already included, entering 18 again doubles that idea.',
      'Unequal splits, itemized shares, and "I only had a salad" are not supported. Compute those shares outside the form, or enter one person\'s own subtotal as the bill and set people to 1.',
      'Currency display is US dollars. The percent math is the same in another currency, but the symbols will still say $. Rounding to the cent matches US coinage and may not match a currency with a different minor unit.'
    ],
    disclaimer: 'This tip calculator is general arithmetic for splitting a bill. It does not set the customary tip where you are eating.',
    faqs: [
      {
        q: 'Should I tip on the pre-tax or post-tax amount?',
        a: 'The calculator uses whatever bill amount you type. Enter the pre-tax subtotal to tip on that, or enter the after-tax total to tip on that. It does not add tax itself, and it has no way to know which base your table prefers.'
      },
      {
        q: 'Why can the per-person shares miss the total by one cent?',
        a: 'Each of the tip, the total, and the share is rounded to the cent separately. On a $64.27 bill with a 20% tip split three ways, the share displays as $25.71 and three times that is $77.13, while the total displays as $77.12. The extra cent is rounding, not a different tip rate.'
      },
      {
        q: 'What tip percentage should I enter?',
        a: 'Type the percent you want to leave. A common US restaurant range is 15% to 20%, and the sample value is 18. Some checks already include a service charge, and some places expect no tip. The form does not choose a custom for you.'
      },
      {
        q: 'Can the tip be zero?',
        a: 'Yes. Enter 0 for the tip percent. A $42 bill with a 0% tip and one person shows a $0.00 tip and a $42.00 share. Do not leave the sample 18 in the field if you mean to add nothing.'
      },
      {
        q: 'Can each person pay a different amount?',
        a: 'No. The total of bill plus tip is divided into equal shares. For an unequal split, run the calculator with one person on that person\'s own portion of the bill, or split the dollars outside this form.'
      }
    ]
  },
  'age-calculator': {
    title: 'Exact Age Calculator in Years, Months, and Days | ClearCalc',
    h1: 'Exact Age Calculator in Years, Months, and Days',
    description: 'Find completed age in years, months, and days between two calendar dates. See how month lengths and leap days are borrowed, with worked examples.',
    intro: [
      'This age calculator finds the completed years, months, and days between a date of birth and another calendar date. It compares the year, month, and day numbers and borrows a month or a year when the day or month difference would otherwise be negative. The result is a calendar age, not a count of hours.',
      'Leave "Age on date" blank to use today\'s date in your own time zone. The sample birth date in the form is 1 January 1990, but the worked examples below use fixed dates so the explanation does not change tomorrow. If the second date is earlier than the birth date, the year count can come out negative. Put the later date in the age-on field.'
    ],
    steps: [
      'Enter the date of birth.',
      'Enter the date you want the age on, or leave it blank for today.',
      'Press Calculate. The headline is the completed years. Months and days appear underneath.',
      'Read both lines together. "36 years" plus "9 months and 7 days" is the full result, not 36 years alone.'
    ],
    howHeading: 'How completed years, months, and days are borrowed',
    howItWorks: [
      'The calculator subtracts the birth year, month, and day from the target year, month, and day. Months are numbered with January as 1 in this explanation. If the day difference is negative, it borrows the length of the month before the target month and reduces the month difference by one. If the day difference is still negative, it borrows one more month, using the length of the month before that. A birth date on the 31st and a target date of March 1 needs that second borrow, because February is shorter than the day gap. If the month difference is then negative, it borrows one year and adds 12 months.',
      'Leap days are handled only through those month lengths. February has 29 days in a leap year and 28 otherwise. Someone born on 29 February is not given a special legal rule. Under this borrowing method, 1 March is an exact number of years later when the target year is not a leap year.',
      'The headline and the detail line use singular wording when the count is 1: "1 year", "1 month", and "1 day". Other counts use the plural, including zero.'
    ],
    formula: 'years = target year − birth year\nmonths = target month − birth month\ndays = target day − birth day\nIf days < 0, add the length of the previous month and subtract 1 month.\nIf days are still < 0, add the length of the month before that and subtract another month.\nIf months < 0, add 12 months and subtract 1 year.',
    formulaNotes: [
      'The length of a month is the real calendar length, including leap-day February. The calculator does not convert the span into an average 30.437-day month, and it does not divide total days by 365.25.',
      'A blank target date means the current local calendar date when you press Calculate. Two people in different time zones can still be on different calendar dates near midnight, so "today" is the date on the device running the page.'
    ],
    examplesHeading: 'Worked age examples',
    examples: [
      {
        title: 'Born 15 January 1990, age on 22 October 2026',
        paragraphs: [
          'Year difference 2026 − 1990 = 36. Month difference October − January = 9. Day difference 22 − 15 = 7. Nothing is negative, so nothing is borrowed. The calculator shows 36 years, then "9 months and 7 days beyond the last birthday."',
          'The last birthday on or before 22 October 2026 is 15 January 2026. Nine months after 15 January is 15 October, and seven days after that is 22 October. The borrowed-calendar result matches that count on this ordinary date.'
        ]
      },
      {
        title: 'A one-day-old infant, and an age of zero',
        paragraphs: [
          'Born 31 December 2010, age on 1 January 2011. The calculator shows 0 years, then "0 months and 1 day beyond the last birthday." The day is singular because the count is exactly one.',
          'Born 15 June 1995, age on 15 June 1995. The calculator shows 0 years, then "0 months and 0 days beyond the last birthday." The same calendar date is an age of zero, not one day. This tool does not add a day to include the birthday as a completed day of life.'
        ]
      },
      {
        title: '29 February, and a birth date on the 31st',
        paragraphs: [
          'Born 29 February 2000, age on 29 February 2024. Both dates are leap days. The calculator shows 24 years, then "0 months and 0 days beyond the last birthday." Age on 1 March 2025, a non-leap year, shows 25 years and "0 months and 0 days beyond the last birthday." The borrow uses February 2025\'s 28 days to fill the gap from the 29th to 1 March, so this tool treats 1 March as the anniversary. Age on 28 February 2026 shows 25 years and "11 months and 30 days beyond the last birthday." February 28 has not yet reached that 1 March anniversary.',
          'Born 31 August 1988, age on 1 March 2024. The day gap is 1 − 31 = −30. February 2024 has 29 days, so the first borrow leaves −1 day and then a second borrow adds January\'s 31 days. The calculator shows 35 years, then "5 months and 30 days beyond the last birthday." On the next day, 2 March 2024, February\'s 29 days exactly cover the gap from the 31st, and the result is 35 years and "6 months and 0 days beyond the last birthday." The extra month appears because the short February no longer needs the second borrow.'
        ]
      }
    ],
    table: {
      heading: 'Ages this calculator shows for fixed dates',
      caption: 'The detail line is the months-and-days text under the year headline. Blank "today" is not used, so these rows stay fixed.',
      headers: ['Date of birth', 'Age on', 'Headline', 'Detail line'],
      rows: [
        ['15 Jan 1990', '22 Oct 2026', '36 years', '9 months and 7 days beyond the last birthday.'],
        ['31 Dec 2010', '1 Jan 2011', '0 years', '0 months and 1 day beyond the last birthday.'],
        ['15 Jun 1995', '15 Jun 1995', '0 years', '0 months and 0 days beyond the last birthday.'],
        ['29 Feb 2000', '29 Feb 2024', '24 years', '0 months and 0 days beyond the last birthday.'],
        ['29 Feb 2000', '1 Mar 2025', '25 years', '0 months and 0 days beyond the last birthday.'],
        ['29 Feb 2000', '28 Feb 2026', '25 years', '11 months and 30 days beyond the last birthday.'],
        ['31 Aug 1988', '1 Mar 2024', '35 years', '5 months and 30 days beyond the last birthday.']
      ]
    },
    limitsHeading: 'What this calendar age does not count',
    limits: [
      'The result is not a count of days lived, and it is not an exact number of hours. Time of birth is ignored because the fields are dates. Someone born late on 15 January and someone born just after midnight have the same result on this page.',
      'Legal ages for driving, contracts, or benefits sometimes use a specific rule for a 29 February birthday, or they count the birthday as the moment a year is completed at a particular hour. This calculator\'s March 1 convention in non-leap years is a consequence of the borrow method, not a statement of the law where you live.',
      'The second borrow around February means a birth date on the 31st can show a sudden month change between March 1 and March 2 in a leap year. That jump is described in the example above so it is not a surprise. Other target dates use a single borrow and do not show a negative day count.'
    ],
    disclaimer: 'This age result is a calendar calculation, not legal, medical, or benefits advice. Confirm official age rules with the agency that asked for the date.',
    faqs: [
      {
        q: 'What happens if I leave the age-on date blank?',
        a: 'The calculator uses today\'s date on the device where the page is open, in that device\'s local time zone. The field is optional. Fill it when you want a fixed date instead of today.'
      },
      {
        q: 'How does this calculator treat a February 29 birthday?',
        a: 'It uses month lengths, not a separate leap-day rule. Born on 29 February 2000, the age on 29 February 2024 is exactly 24 years. The age on 1 March 2025 is exactly 25 years. The age on 28 February 2026 is 25 years, 11 months, and 30 days, so February 28 is still before that anniversary in this tool.'
      },
      {
        q: 'Why can the month count jump at the start of March?',
        a: 'A birth date on the 31st can need two month-borrows when the target is March 1, because February is shorter than the day gap. Born 31 August 1988, the age on 1 March 2024 is 35 years, 5 months, and 30 days. On 2 March 2024 it is 35 years and 6 months. The second date no longer needs the extra borrow.'
      },
      {
        q: 'What if the age-on date is before the date of birth?',
        a: 'The same subtraction runs anyway, and the year can be negative. That is not a useful age. Enter the birth date first and a target on or after that date.'
      },
      {
        q: 'Does the result count the birthday as a full day lived?',
        a: 'No. On the date of birth the calculator shows 0 years and 0 months and 0 days. The next calendar day is 1 day. It is a difference between dates, not an inclusive count of days alive.'
      }
    ],
    relatedLinks: [
      {
        slug: 'date-difference-calculator',
        label: 'Days between two dates',
        note: 'The elapsed day count, including weekends. It does not borrow months the way this age result does.'
      }
    ]
  },
  'date-difference-calculator': {
    title: 'Days Between Dates Calculator | ClearCalc',
    h1: 'Days Between Two Dates',
    description: 'Count elapsed calendar days between two dates, and see why an inclusive day count is one day higher. Includes deadline examples and a note on weekends.',
    intro: [
      'This date difference calculator counts the calendar days from a start date up to, but not including, an end date. January 1 through the following January 1 is the length of that year. January 1 to December 31 of the same non-leap year is 364 days, because December 31 has not yet reached the next January 1.',
      'The count includes weekends and holidays. It does not care which date you enter first, because it uses the absolute difference. It also does not add a day for "inclusive" counting. If you need the number of calendar dates from the start through the end, add one to the result. The same start and end date produces 0, while an inclusive count of that single date is 1.',
      'What the headline does not do is drop Saturdays and Sundays. The calendar year 2026, Thursday 1 January through Thursday 31 December, has 365 dates: 52 Saturdays, 52 Sundays, and 261 weekdays. The calculator still shows 364 elapsed days from 1 January to 31 December, because that figure is the year minus the end date, not the year minus the weekends. 261 weekdays is a different question, answered by listing the dates. This page now states those 2026 counts so the elapsed number is not mistaken for a count of working days.'
    ],
    steps: [
      'Enter the start date and the end date. Order does not change the result.',
      'Press Calculate. The headline is the elapsed day count.',
      'Read the week line as the day count divided by 7, not as a count of calendar weeks.',
      'Add one yourself if your deadline should include both the start date and the end date.'
    ],
    howHeading: 'How elapsed days between dates are counted',
    howItWorks: [
      'Each date is treated as a calendar day, and the calculator takes the absolute number of days between them. The time of day is not an input. A span that crosses a leap day includes February 29, so 1 January 2024 to 31 December 2024 is 365 elapsed days, one more than the same span in 2026.',
      'The second line divides that day count by 7 and rounds to at most two decimal places. It is not "how many Mondays" and it is not a count of Sunday-to-Saturday weeks. 364 divided by 7 is exactly 52, so the line reads "Approximately 52 weeks." 90 divided by 7 is about 12.857, shown as "Approximately 12.86 weeks."',
      'Swapping the two dates does not change the number. A project that runs from April back to January is the same length as January to April. If you need a signed "how many days until" versus "how many days since," you have to look at which date is later yourself.',
      'The 90 elapsed days from 15 January 2026 to 15 April 2026 are the 90 dates after 15 January up to and including 15 April. Fifteen January is a Thursday and 15 April is a Wednesday. Those 90 dates contain 13 Saturdays, 13 Sundays, and 64 weekdays. The calculator still reports 90 days and about 12.86 weeks. It does not report 64. A deadline that moves only on weekdays needs that second count, and this page prints it for the worked example so the two questions stay distinct. It still has no holiday list, so a weekday that is a public holiday remains inside the 64.'
    ],
    formula: 'Elapsed days = absolute calendar-day difference between the two dates\nInclusive day count = elapsed days + 1\nWeeks shown = elapsed days / 7, rounded to at most two decimals',
    formulaNotes: [
      'Inclusive counting is the rule many deadlines want. A rental from 1 March through 3 March covers three dates (the 1st, 2nd, and 3rd) and only two elapsed midnights. This calculator shows the elapsed 2 if you enter those dates, not the inclusive 3. Add one when the end date counts as a day you occupy or a day the task is still due.',
      'The week line uses the elapsed count, not the inclusive count. If you add one for an inclusive span, divide that new total by 7 yourself. The calculator will not do the inclusive version for you.'
    ],
    examplesHeading: 'Worked day-count examples',
    examples: [
      {
        title: 'A non-leap year and a leap year',
        paragraphs: [
          'Start 1 January 2026, end 31 December 2026. 2026 is not a leap year. The calculator shows 364 days and "Approximately 52 weeks." The inclusive count of every date in 2026 is 365, which is 364 plus one. The 52 weeks is 364 / 7 exactly, so no decimal appears.',
          'Start 1 January 2024, end 31 December 2024. 2024 is a leap year, and February 29 falls inside the span. The calculator shows 365 days and "Approximately 52.14 weeks." The inclusive count is 366. The extra day compared with 2026 is the leap day, not a different counting rule.'
        ]
      },
      {
        title: 'A 90-day span and the length of February',
        paragraphs: [
          'Start 15 January 2026, end 15 April 2026. The calculator shows 90 days and "Approximately 12.86 weeks." Ninety divided by 7 is 12.857…, and the week line stops at two decimal places. An inclusive count of 15 January through 15 April is 91 dates. Of the 90 dates after the start and through the end, 13 are Saturdays, 13 are Sundays, and 64 are weekdays. The week line is not that 64, and it is not 64 divided by 5.',
          'Start 1 February 2026, end 1 March 2026. The calculator shows 28 days and "Approximately 4 weeks." 2026 is not a leap year, so February has 28 days, and 28 / 7 is 4. The same inputs in 2024 would include February 29 and show 29 days. The end date of 1 March is the day the span reaches March, not an extra day added on top of February.'
        ]
      },
      {
        title: 'The same date twice',
        paragraphs: [
          'Start and end both 1 March 2026. The calculator shows 0 days and "Approximately 0 weeks." There is no midnight between a date and itself.',
          'If a form asks "how many days does this one-day event last?" the inclusive answer is 1, not the 0 this tool shows. Add one for that question. If a form asks "how many nights from arrival on 1 March to departure on 1 March," zero is the right hotel-night count, and the calculator already shows it.'
        ]
      }
    ],
    table: {
      heading: 'Elapsed days versus an inclusive count',
      caption: 'The calculator column is the elapsed difference this tool shows. Inclusive count is that number plus one, including when both dates are the same.',
      headers: ['Start', 'End', 'This calculator', 'Week line', 'Inclusive count'],
      rows: [
        ['1 Jan 2026', '31 Dec 2026', '364 days', 'Approximately 52 weeks.', '365'],
        ['1 Jan 2024', '31 Dec 2024', '365 days', 'Approximately 52.14 weeks.', '366'],
        ['15 Jan 2026', '15 Apr 2026', '90 days', 'Approximately 12.86 weeks.', '91'],
        ['1 Feb 2026', '1 Mar 2026', '28 days', 'Approximately 4 weeks.', '29'],
        ['1 Mar 2026', '1 Mar 2026', '0 days', 'Approximately 0 weeks.', '1']
      ]
    },
    limitsHeading: 'Weekends, holidays, and time zones',
    limits: [
      'Weekends are included. A span of 14 elapsed days always shows 14 days even if ten of them are working days. For the full calendar year 2026 the dates themselves are 261 weekdays, 52 Saturdays, and 52 Sundays, 365 in all. The elapsed headline from 1 January to 31 December is still 364, because 31 December is the end date of an exclusive count, and that end date happens to be a Thursday. Subtracting the 104 weekend dates from 365 does not produce 364. The form still has no holiday switch, so those 261 weekdays still include any public holiday that falls on Monday through Friday.',
      'The week figure is a decimal length, not a calendar-week count. "Approximately 12.86 weeks" does not mean twelve weeks and a particular weekday. Divide by 7 yourself if you want a quotient and a remainder: 90 days is 12 weeks and 6 days.',
      'Dates are whole civil dates. The calculator does not apply a time of day, and the difference does not depend on which time zone you are in. Historical calendar reforms and dates far outside the modern Gregorian range are not a goal of this tool.'
    ],
    disclaimer: 'This day count is general calendar arithmetic, not a legal deadline opinion. Confirm which dates a contract or court includes.',
    faqs: [
      {
        q: 'Are both the start date and the end date counted?',
        a: 'The calculator counts elapsed days between them, so the end date is not an extra included day. Add one for an inclusive count. 1 January 2026 to 31 December 2026 shows 364 days, and the inclusive count of those dates is 365.'
      },
      {
        q: 'Does the day count include weekends?',
        a: 'Yes. Every civil day in the span counts, including Saturdays, Sundays, and holidays. The tool does not remove them from the headline. In the 15 January 2026 to 15 April 2026 example the headline is 90 days, of which 13 are Saturdays, 13 are Sundays, and 64 are weekdays. The calendar year 2026 has 52 Saturdays, 52 Sundays, and 261 weekdays.'
      },
      {
        q: 'What if I swap the start and end dates?',
        a: 'The result stays the same. The calculator uses the absolute difference, so it does not show a negative number when the end is earlier than the start.'
      },
      {
        q: 'How does a leap year change the count?',
        a: 'February 29 is a day when it falls strictly inside the span. 1 January to 31 December is 365 elapsed days in leap year 2024 and 364 elapsed days in 2026. 1 February to 1 March is 29 days in 2024 and 28 days in 2026.'
      },
      {
        q: 'Is the week line a count of calendar weeks?',
        a: 'No. It is the elapsed day count divided by 7, shown with at most two decimal places. 90 days displays as approximately 12.86 weeks, which is 12 weeks and 6 days if you want a remainder instead.'
      },
      {
        q: 'How many weekdays are in the 2026 calendar year?',
        a: '261. The year has 365 dates, Thursday 1 January through Thursday 31 December, with 52 Saturdays and 52 Sundays. This calculator’s elapsed count from 1 January to 31 December is 364, not 261. The 364 figure keeps the weekends and drops the end date from an inclusive year count. It is not a business-day total, and the 261 weekdays still include public holidays.'
      }
    ],
    relatedLinks: [
      {
        slug: 'us-business-days-calculator',
        label: 'US business days calculator',
        note: 'Inclusive weekdays, with the 2026 federal holidays removed. The 364 elapsed days on this page are not those 250 business days.'
      },
      {
        slug: 'age-calculator',
        label: 'Exact age calculator',
        note: 'Completed years, months, and days from a birthday. It borrows month lengths instead of counting every elapsed day.'
      },
      {
        slug: 'hourly-to-salary-calculator',
        label: 'Hourly to salary calculator',
        note: 'Turns an hourly rate and a number of weeks into annual pay. It does not count the days between two dates.'
      }
    ]
  },
  'length-converter': {
    title: 'Length Converter: Meters to Feet, Inches, Yards, and km | ClearCalc',
    h1: 'Meters to Feet, Inches, Yards, and Kilometers',
    description: 'Convert a length in meters to feet, inches, yards, or kilometers using the factors this calculator multiplies by. Includes a conversion table and the exact definitions.',
    intro: [
      'This length converter multiplies a length in meters by one of four factors: feet, inches, yards, or kilometers. The old address called it a unit converter while the title said Length Converter. The page, the heading, and the URL now all describe length, and the previous address redirects here.',
      'The conversion runs in one direction, meters to the unit you pick. It does not convert feet back to meters, and it does not convert mass, temperature, area, or volume. The factors are the rounded values built into the form, not a fresh division by the exact international-foot definition on every click. The examples below show both, so a one-meter result of 3.2808 feet is explainable.'
    ],
    steps: [
      'Enter the length in meters. The sample value is 1.',
      'Choose feet, inches, yards, or kilometers in "Convert meters to."',
      'Press Calculate. The headline is the meters times that factor, with at most four decimal places.',
      'The line under the result repeats how many meters you started with. A value of 1 reads "Converted from 1 meter."'
    ],
    howHeading: 'How meters are converted on this page',
    howItWorks: [
      'The form stores four multipliers. Feet uses 3.28084. Inches uses 39.3701. Yards uses 1.09361. Kilometers uses 0.001. The headline is the number you typed times the selected factor, then rounded to at most four decimal places. One meter times 3.28084 is 3.28084, and four decimal places display that as 3.2808.',
      'Those foot, inch, and yard factors are rounded forms of the international definitions. One international foot is exactly 0.3048 meters, so one meter is 1 / 0.3048 = 3.280839895… feet. Rounded to five decimal places, that is 3.28084, which is the factor in the menu. One inch is exactly 0.0254 meters, so one meter is 39.37007874… inches, stored here as 39.3701. One yard is exactly 0.9144 meters, so one meter is 1.093613298… yards, stored here as 1.09361. The kilometer factor 0.001 is exact, because a kilometer is 1,000 meters.',
      'The tool does not use the old US survey foot. For everyday lengths the rounded international factors are far more precise than a tape measure. They will still disagree in the last digit with a converter that divides by 0.3048 at full precision or that rounds the display differently.'
    ],
    formula: 'Feet = meters × 3.28084\nInches = meters × 39.3701\nYards = meters × 1.09361\nKilometers = meters × 0.001\nThe headline shows at most four decimal places.',
    formulaNotes: [
      'Exact international identities, for comparison: 1 foot = 0.3048 m, 1 inch = 0.0254 m, 1 yard = 0.9144 m, and 1 km = 1,000 m. Dividing 1 by 0.3048 gives the unrounded feet factor 3.280839895…. This page multiplies by 3.28084 instead.',
      'Going backwards from a rounded headline is slightly lossy. 3.2808 divided by 3.28084 is not exactly 1. To reverse a conversion, divide the original unrounded quantity by the same factor, or start over from meters. Kilometers reverse cleanly because 0.001 is exact: multiply kilometers by 1,000 to get meters.'
    ],
    examplesHeading: 'Worked length conversions',
    examples: [
      {
        title: 'One meter into each unit',
        paragraphs: [
          'Enter 1 and choose feet. The calculator shows 3.2808, and the detail line reads "Converted from 1 meter." The factor 3.28084 was rounded to four decimal places for display. Choose inches and the headline is 39.3701. Choose yards and the headline is 1.0936, because 1.09361 rounded to four decimal places becomes 1.0936. Choose kilometers and the headline is 0.001.',
          'The yard and foot headlines look shorter than the factors in the menu because the display keeps four decimal places, not five. The inch factor already has four decimal places, so 39.3701 stays 39.3701.'
        ]
      },
      {
        title: '2.5 meters, 10 meters, and 100 meters',
        paragraphs: [
          '2.5 meters is 8.2021 feet, 98.4253 inches, 2.734 yards, and 0.0025 kilometers, using this calculator\'s rounding. Ten meters is 32.8084 feet, 393.701 inches, 10.9361 yards, and 0.01 kilometers. The 10-meter foot result is 32.8084 rather than 32.80840 because trailing zeros are not required.',
          'One hundred meters is 328.084 feet, 3,937.01 inches, 109.361 yards, and 0.1 kilometers. A 100-meter sprint is often called 109 yards in commentary. This calculator\'s yard factor produces 109.361, which rounds to that familiar 109 yards only after you drop the fraction.'
        ]
      },
      {
        title: 'Checking a known length, and reversing feet',
        paragraphs: [
          'A mile is not in the menu. If you already know a length in meters, you can still check the factor. Five kilometers is 5,000 meters. Enter 5000 and choose kilometers: 5,000 × 0.001 = 5, which displays as 5. That exact result is the best sanity check on the page, because the kilometer factor is not rounded.',
          'To express 6 feet in meters with this page\'s factor, divide 6 by 3.28084. That is about 1.8288 meters. The exact international-foot path is 6 × 0.3048 = 1.8288 meters exactly. The two routes meet at four decimal places for this particular 6-foot example. They will not meet for every input, because 3.28084 is a rounded multiplier.'
        ]
      }
    ],
    table: {
      heading: 'Meter conversions using this calculator\'s factors',
      caption: 'Each cell is the headline this tool shows for that many meters and that unit. Feet and yards can look shorter than the stored factor because the display keeps at most four decimal places.',
      headers: ['Meters', 'Feet', 'Inches', 'Yards', 'Kilometers'],
      rows: [
        ['1', '3.2808', '39.3701', '1.0936', '0.001'],
        ['2.5', '8.2021', '98.4253', '2.734', '0.0025'],
        ['10', '32.8084', '393.701', '10.9361', '0.01'],
        ['100', '328.084', '3,937.01', '109.361', '0.1']
      ]
    },
    limitsHeading: 'What this length converter does not convert',
    limits: [
      'There is no feet-to-meters, inches-to-centimeters, or miles option. Divide by the factor yourself for the reverse of feet, inches, or yards, and remember the display rounding. Kilometers reverse by multiplying by 1,000.',
      'Nautical miles, survey feet, light-years, and printer\'s points are different units. The US survey foot, now obsolete for most work, was slightly longer than the international foot of 0.3048 meters. This page does not offer it.',
      'Area and volume do not convert by these factors. Square meters to square feet uses the foot factor squared. Cubic meters to cubic feet uses the foot factor cubed. Running a length through this form once does not do either of those.'
    ],
    disclaimer: 'This length converter is a rounded metric-to-US and kilometer multiplication, not a surveying or engineering standard. Confirm critical dimensions with the exact factor your drawing specifies.',
    faqs: [
      {
        q: 'Which direction does the length converter run?',
        a: 'From meters to one other unit: feet, inches, yards, or kilometers. Enter the length in meters and pick the target. It does not start from feet or inches.'
      },
      {
        q: 'Why does 1 meter display as 3.2808 feet instead of 3.28084?',
        a: 'The menu multiplies by 3.28084, and the headline then keeps at most four decimal places. 3.28084 rounds to 3.2808. The same rule turns the yard factor 1.09361 into a headline of 1.0936 for one meter.'
      },
      {
        q: 'Are these the exact international foot, inch, and yard?',
        a: 'They are rounded. An international foot is exactly 0.3048 meters, so a meter is 3.280839895… feet, and this tool multiplies by 3.28084. An inch is exactly 0.0254 meters, stored here as 39.3701 per meter. A yard is exactly 0.9144 meters, stored here as 1.09361 per meter. The kilometer factor 0.001 is exact.'
      },
      {
        q: 'How do I convert feet back to meters?',
        a: 'Divide the number of feet by 3.28084 for a reverse of this tool\'s factor. Six divided by 3.28084 is about 1.8288 meters. For the exact international foot, multiply feet by 0.3048 instead. Do not divide the already rounded headline if you still have the original meters.'
      },
      {
        q: 'Can this convert weight, temperature, or area?',
        a: 'No. The menu is only feet, inches, yards, and kilometers, and the input is meters of length. Square and cubic conversions need the length factor raised to the second or third power, which this form does not do. Fuel economy, in US mpg, UK mpg, or litres per 100 km, is a different rate and has its own page.'
      }
    ],
    relatedLinks: [
      { slug: 'fuel-economy-converter', label: 'Fuel economy converter', note: '30 US mpg is 7.84 L/100 km and 36.03 UK mpg. This length page does not divide by a gallon. The mile on that page is 1.609344 kilometres, which is not the rounded foot factor used here.' },
      { slug: 'concrete-slab-calculator', label: 'Concrete slab calculator', note: 'If the slab was measured in meters, convert to feet here first. Thickness on that page stays in inches.' }
    ]
  },
  'gpa-calculator': {
    title: 'Unweighted GPA Calculator for Four Courses | ClearCalc',
    h1: 'Unweighted 4.0 GPA Calculator',
    description: 'Average four course grades on an unweighted 4.0 scale. See the equal-weight formula, a letter-grade point table, and how credit hours would change the result.',
    intro: [
      'This GPA calculator averages four grade-point numbers on an equal-weight, unweighted scale. Add the four numbers and divide by four. A 4.0, a 3.0, a 3.7, and a 3.3 produce 3.5, which the calculator shows as 3.5 GPA.',
      'It does not multiply by credit hours, drop a lowest grade, apply honors or AP weights, or convert letters for you. Schools do not all use the same points for A− and B+. The table on this page is a common US undergraduate scale so you can type a number, not a promise that your registrar uses it. If your courses have different credits, the equal average is the wrong official GPA even when the arithmetic is right.'
    ],
    steps: [
      'Convert each course to grade points yourself, using your school\'s scale. A common A is 4.0.',
      'Enter the four grade-point numbers. The sample is 4, 3, 3.7, and 3.3.',
      'Press Calculate. The headline is the sum divided by 4, with at most two decimal places.',
      'If you have a different number of courses, do not invent grades to fill the extra boxes. Average the real courses by hand, or see the note below about repeating values.'
    ],
    howHeading: 'How an unweighted four-course GPA is averaged',
    howItWorks: [
      'Every field has the same weight. The calculator does not ask for credits, and it always divides by 4, not by the number of classes you wish you had entered. The sample sum is 4 + 3 + 3.7 + 3.3 = 14, and 14 / 4 = 3.5 exactly, shown as 3.5 GPA.',
      'The display keeps at most two decimal places. A sum of 10.7 divided by 4 is 2.675, which displays as 2.68 GPA. Trailing zeros are not forced, so a perfect average displays as 4 GPA rather than 4.00, and a zero average displays as 0 GPA.',
      'Nothing clamps the inputs to the range 0 through 4. A school that awards 4.3 for an A+ will be averaged as typed. A number typed by mistake, such as 40 instead of 4.0, will also be averaged as typed. The form does not know the difference.'
    ],
    formula: 'Unweighted GPA = (grade 1 + grade 2 + grade 3 + grade 4) / 4\nCredit-weighted GPA, which this form does not compute:\n(sum of grade points × credits) / (sum of credits)',
    formulaNotes: [
      'Equal weights match a credit-weighted GPA only when every course has the same number of credits. A 4.0 on a 1-credit lab and a 2.0 on a 3-credit course have a weighted average of (4×1 + 2×3) / 4 = 2.5. The unweighted mean of 4 and 2 is 3.0. Those are different numbers, and this calculator can only produce the unweighted kind.',
      'If you truly have two courses of equal credit, entering each grade twice (4, 2, 4, 2) still averages to 3.0, which matches the two-course unweighted mean. If you have three courses, duplicating only one of them to fill the fourth box changes the weight. Don\'t do that. Add the three grades and divide by 3 yourself.'
    ],
    examplesHeading: 'Worked unweighted GPA examples',
    examples: [
      {
        title: '4.0, 3.0, 3.7, and 3.3',
        paragraphs: [
          'Sum = 4 + 3 + 3.7 + 3.3 = 14. Average = 14 / 4 = 3.5. The calculator shows 3.5 GPA, and the detail line says the result is an unweighted average on a 4.0 scale.',
          'On the common letter scale below, those points are an A, a B, an A−, and a B+. Your campus might assign A− a 3.67 instead of 3.7. If it does, type 3.67. The calculator will not translate the letters A− and B+ on its own.'
        ]
      },
      {
        title: 'All A grades, and a failing slate',
        paragraphs: [
          'Enter 4, 4, 4, and 4. The average is 4, and the calculator shows 4 GPA. Enter 0, 0, 0, and 0. The calculator shows 0 GPA. Both are exact. The display does not pad them to two decimal places.',
          'A student with a 4.0 in three classes and a blank fourth class should not type 0 unless that fourth class is actually an F. A typed 0 is a grade point of zero and pulls the average down to 3 if the other three are 4.0: (4 + 4 + 4 + 0) / 4 = 3.'
        ]
      },
      {
        title: 'A 2.68 average, and a credit-weighted contrast',
        paragraphs: [
          'Enter 3, 3, 2, and 2.7. The sum is 10.7. Divided by 4, that is 2.675, and the calculator shows 2.68 GPA. The third decimal was 5, so the displayed hundredths place rounds up.',
          'Those four numbers ignore credits. Suppose instead the grades were a 4.0 worth 1 credit and a 2.0 worth 3 credits, and you only had those two courses. The credit-weighted GPA is (4×1 + 2×3) / (1 + 3) = 10 / 4 = 2.5. An equal average of 4 and 2 is 3. This tool cannot accept the credit column, so it cannot show 2.5 for that pair. Use the weighted formula when credits differ.'
        ]
      }
    ],
    table: {
      heading: 'A common US 4.0 letter scale',
      caption: 'Type the point value your school publishes. This table is a frequent undergraduate scale, not a universal one. Some schools use 4.3 for A+ or 3.67 for A−. This calculator does not convert letters by itself.',
      headers: ['Letter', 'Points often typed', 'Letter', 'Points often typed'],
      rows: [
        ['A', '4.0', 'C', '2.0'],
        ['A−', '3.7', 'C−', '1.7'],
        ['B+', '3.3', 'D+', '1.3'],
        ['B', '3.0', 'D', '1.0'],
        ['B−', '2.7', 'F', '0.0'],
        ['C+', '2.3', 'A+ (some schools)', '4.0 or 4.3']
      ]
    },
    limitsHeading: 'What an equal average of four numbers misses',
    limits: [
      'Official GPAs are usually credit-weighted, term by term and cumulatively. Repeating a course may replace the old grade or average with it, depending on the school. Honors, AP, and IB courses are sometimes weighted to 4.5 or 5.0. None of those rules are in this form.',
      'Plus and minus cutoffs differ. A 90% might be an A at one college and an A− at another, and an A− might be 3.7, 3.67, or 4.0. Convert using the scale on your transcript legend, then type the points.',
      'The box count is four. Five courses cannot be averaged here without changing their weights. One course cannot be averaged by typing it once and filling the rest with zeros. Zeros are grades.'
    ],
    disclaimer: 'This GPA figure is an equal average of four numbers you typed, not an official transcript GPA or an admissions decision.',
    relatedLinks: [
      { slug: 'final-exam-grade-calculator', label: 'Final exam grade calculator', note: 'Solves for the score a weighted final needs. It does not average grade points.' },
      { slug: 'percentage-calculator', label: 'Percentage calculator', note: 'Turns a raw score into a percent before you convert that percent to grade points.' }
    ],
    faqs: [
      {
        q: 'Does this GPA calculator weight courses by credit hours?',
        a: 'No. It adds four grade-point numbers and divides by four. A 4.0 worth one credit and a 2.0 worth three credits have a credit-weighted average of 2.5, while the unweighted mean of 4 and 2 is 3. Use the weighted formula when credits differ.'
      },
      {
        q: 'What if I have fewer or more than four courses?',
        a: 'This form always divides by four. Two equal-credit courses can be entered twice each without changing an unweighted mean. Three courses should be added and divided by three yourself. Do not fill empty boxes with 0 unless the grade is actually zero.'
      },
      {
        q: 'Which letter grades match 4.0, 3.7, and 3.3?',
        a: 'On a common US scale, A is 4.0, A− is 3.7, and B+ is 3.3. Schools differ, especially on A− (sometimes 3.67) and A+ (sometimes 4.3). Type the points from your own scale. The calculator does not read letters.'
      },
      {
        q: 'Can I enter a grade above 4.0?',
        a: 'Yes. The average is not capped. If your campus awards 4.3 for A+, enter 4.3 and it will be included in the sum. A typo such as 40 is also included, so check the four boxes before you read the headline.'
      },
      {
        q: 'Will this match the GPA on my transcript?',
        a: 'Only if the transcript average is an unweighted mean of these same four numbers. Credit hours, repeated courses, pass/fail grades, and weighted honors points are all reasons a registrar total will differ. The result line says the figure is an unweighted average on a 4.0 scale.'
      }
    ]
  },
  'discount-calculator': {
    title: 'Percent-Off Discount and Sale Price Calculator | ClearCalc',
    h1: 'Percent-Off Sale Price Calculator',
    description: 'Find the amount saved and the sale price from a percent discount. Includes worked examples, a percent-off table, and how stacked discounts really combine.',
    intro: [
      'This discount calculator takes an original price and a percent off. Savings equal the price times the percent divided by 100. The sale price equals the original price minus those savings. The headline is the sale price, and the line under it is the amount you save.',
      'The percent comes off the original price once. A second discount taken "20% off the sale price" is not another field, and it is not the same as adding the percents. Two successive 20% discounts remove 36% of the original price, not 40%. Tax and shipping are not added. The sale price here is the merchandise price after the single discount, before the cashier adds anything else.'
    ],
    steps: [
      'Enter the original price in US dollars, before the discount.',
      'Enter the discount as a percent. For 20% off, type 20.',
      'Press Calculate. Read the sale price in the headline and the savings underneath.',
      'For a second discount, either run the sale price through the form again or use the stacked-discount steps in the examples.'
    ],
    howHeading: 'How a percent-off sale price is calculated',
    howItWorks: [
      'The discount rate is the percent divided by 100. Twenty percent is 0.20. Multiply the original price by that rate to get the savings. Subtract the savings from the original price to get the sale price. Equivalently, the sale price is the original price times (1 − rate). Both descriptions are the same arithmetic, and this form uses the subtract path.',
      'Each of the savings and the sale price is rounded to the cent for display. On many prices they add back to the original. On some prices they miss by a cent, because each line is rounded separately. The worked $79.99 example is one you can check by hand.',
      'A 100% discount saves the entire price and shows a sale price of zero. A discount above 100% produces a negative sale price, which is not a real markdown. A 0% discount saves nothing and returns the original price. The form does not block those entries.'
    ],
    formula: 'Savings = original price × discount percent / 100\nSale price = original price − savings\nStacked discounts: sale = price × (1 − rate1) × (1 − rate2)\nCombined percent off = 1 − (1 − rate1) × (1 − rate2), then times 100',
    formulaNotes: [
      'Adding percents is the mistake this formula prevents. Twenty percent plus twenty percent is 40 only if both discounts come off the original price. A store that takes 20% off and then 20% off the reduced price multiplies by 0.8 twice. 0.8 × 0.8 = 0.64, so you pay 64% of the original and save 36%.',
      'Display rounding can make the printed savings plus the printed sale price differ from the original by one cent. Trust the formula on the unrounded product if you are checking a till, and expect the on-screen pair to be rounded independently.'
    ],
    examplesHeading: 'Worked discount examples',
    examples: [
      {
        title: '20% off $100',
        paragraphs: [
          'Savings = 100 × 20 / 100 = 20. Sale price = 100 − 20 = 80. The calculator shows $80.00, and the detail line reads "You save $20.00."',
          'The same sale price is 100 × (1 − 0.20) = 80. Use whichever form is easier to check. There is no tax in that $80. A 8% sales tax, if your store charges it, would be computed by the store on the discounted price or the original price according to local rules. This page does not add it.'
        ]
      },
      {
        title: '15% off $79.99, where cents round',
        paragraphs: [
          'Raw savings = 79.99 × 0.15 = 11.9985, which displays as $12.00. Raw sale price = 79.99 − 11.9985 = 67.9915, which displays as $67.99. The calculator shows $67.99 and "You save $12.00."',
          'In this case $12.00 + $67.99 = $79.99, so the rounded pair adds back. That will not happen for every price. When you compare the screen with a receipt, a one-cent difference in the savings line is consistent with rounding each amount to the cent.'
        ]
      },
      {
        title: 'Larger markdowns, and two discounts in a row',
        paragraphs: [
          'Thirty percent off $240 saves 240 × 0.30 = 72, so the sale price is $168.00 and the savings line is $72.00. Fifty percent off $50 saves $25.00 and leaves a sale price of $25.00. Half off means half the original price remains, which is a useful mental check.',
          'Two 20% discounts on $100 are not $40 off. The first sale price is $80. The second discount is 20% of $80, which is $16, so the final price is $64 and the total saved is $36. That is 36% off the original, because 1 − 0.8 × 0.8 = 0.36. To do the second step in this calculator, enter 80 as the original price and 20 as the discount. Entering 40 once would overstate the markdown.'
        ]
      }
    ],
    table: {
      heading: 'Percent off a $100 original price',
      caption: 'Savings and sale prices are what this calculator shows for an original price of $100. Each row is a single discount, not a stack of discounts.',
      headers: ['Percent off', 'You save', 'Sale price', 'Fraction of price remaining'],
      rows: [
        ['10%', '$10.00', '$90.00', '0.90'],
        ['15%', '$15.00', '$85.00', '0.85'],
        ['20%', '$20.00', '$80.00', '0.80'],
        ['25%', '$25.00', '$75.00', '0.75'],
        ['30%', '$30.00', '$70.00', '0.70'],
        ['50%', '$50.00', '$50.00', '0.50']
      ]
    },
    limitsHeading: 'Tax, coupons, and stacked sales',
    limits: [
      'Sales tax, VAT, shipping, and fees are not in the formula. Some jurisdictions tax the discounted price and some tax the pre-discount price. Add tax only after you know which base applies. Do not type a tax rate into the discount field. That would subtract tax instead of adding it.',
      'A coupon for a fixed number of dollars is not a percent. Subtract that dollar amount yourself. A "20% off, then $10 off" deal is a percent followed by a flat subtraction, which is also not two runs of this form unless you do the percent first and then subtract $10 from the sale price by hand.',
      'Discounts above 100% and negative prices are not blocked. A normal markdown is a percent from 0 through 100. Employee discounts, "buy one get one," and tiered bulk prices often are not a single percent of one original price. Translate them into an effective price before you trust a single rate.'
    ],
    disclaimer: 'This sale price is general arithmetic, not a quote from a store. The receipt total includes tax and fees this calculator does not see.',
    faqs: [
      {
        q: 'Is the discount taken off the original price?',
        a: 'Yes. One discount percent is multiplied by the original price you enter. Savings on $100 at 20% are $20.00, and the sale price is $80.00. The percent is not applied to a price the form cannot see.'
      },
      {
        q: 'Why is 20% off and then another 20% off not 40% off?',
        a: 'The second 20% applies to the already reduced price. On $100, the first sale is $80 and the second takes $16 more, leaving $64. You save $36, which is 36% of the original, because 0.8 times 0.8 leaves 0.64 of the price. Enter 40 in this form only when a single 40% discount was actually offered.'
      },
      {
        q: 'Does the sale price include sales tax or shipping?',
        a: 'No. The headline is the original price minus the percent savings. Tax and shipping depend on rules this page does not apply. Add them after you have the discounted merchandise price, using the tax base your store actually uses.'
      },
      {
        q: 'What does a 100% discount do?',
        a: 'Savings equal the full original price, and the sale price is $0.00. A $50 item at 100% off shows $0.00 and "You save $50.00." A percent above 100 produces a negative sale price, which is not a normal markdown.'
      },
      {
        q: 'Why might the savings and the sale price look a cent apart from the original?',
        a: 'Each amount is rounded to the cent on its own. Fifteen percent of $79.99 is 11.9985, shown as a $12.00 savings, and the sale price is shown as $67.99. Check a one-cent gap against that rounding before assuming the percent was wrong.'
      }
    ]
  },
  'uk-take-home-pay-calculator': {
    title: 'Take-Home Pay Calculator 2026/27 for England, Wales and Northern Ireland | ClearCalc',
    h1: 'Take-Home Pay Calculator for England, Wales and Northern Ireland (2026/27)',
    description: 'Estimate 2026/27 take-home pay in England, Wales and Northern Ireland after income tax and employee National Insurance, with monthly and annual results.',
    intro: [
      'This take-home pay calculator estimates what an employee in England, Wales, or Northern Ireland keeps from an annual salary in the 2026/27 tax year, 6 April 2026 to 5 April 2027. It subtracts income tax and employee Class 1 National Insurance, then divides the annual result by 12 for a monthly figure and by 52 for a weekly figure. The sample salary is £35,000.',
      'The salary you type is treated as your only income and as the whole of your adjusted net income. The personal allowance is the standard £12,570, reduced only by the statutory taper above £100,000. National Insurance is category A, the letter most employees have. Pension contributions, student loans, and any other tax code are left out on purpose so the tax and National Insurance lines stay traceable.'
    ],
    steps: [
      'Enter annual gross salary in pounds. Use 35000 for £35,000, not 35.',
      'Use cash salary before income tax and employee National Insurance. Read the limits section before entering a figure that has already been reduced for a pension.',
      'Press Calculate. The headline is annual take-home divided by 12, rounded to the penny.',
      'Read income tax, employee National Insurance, annual take-home, weekly take-home, and the personal allowance the formula applied.'
    ],
    howHeading: 'How 2026/27 income tax and employee National Insurance are worked out',
    howItWorks: [
      'HMRC\'s rates and thresholds for employers for 2026 to 2027 set the same income tax bands for England, Northern Ireland, and Wales. Welsh rates of income tax are 10p in each band for 2026/27, which keeps the totals at 20%, 40%, and 45%. The standard personal allowance is £12,570. Taxable income is salary minus that allowance. The first £37,700 of taxable income is taxed at 20%. Taxable income above £37,700 and up to £125,140 is taxed at 40%. Taxable income above £125,140 is taxed at 45%.',
      'Above £100,000 of adjusted net income, Income Tax Act 2007 section 35 cuts the personal allowance by half of the excess. If the allowance left after that cut is not a whole number of pounds, it is rounded up to the next pound, and it cannot fall below zero. Half of £2 is £1, so £100,002 of income leaves an allowance of £12,569. Half of £1 is £0.50, so £100,001 leaves £12,569.50, which rounds back up to the full £12,570. The allowance is gone at £125,140, because half of the £25,140 excess is exactly £12,570.',
      'Employee Class 1 National Insurance for category A is 0% up to the annual primary threshold of £12,570, 8% on earnings above £12,570 up to and including the upper earnings limit of £50,270, and 2% above £50,270. Those annual thresholds are the ones HMRC publishes beside the weekly figures of £242 and £967 and the monthly figures of £1,048 and £4,189. This page uses the annual pair, because the input is an annual salary.',
      'Each of income tax and National Insurance is rounded to the nearest penny. Take-home is salary minus those two rounded amounts, so the three lines add back to the salary. Monthly and weekly figures are that annual take-home divided by 12 and by 52, each rounded to the nearest penny on its own. Where the division does not land on a penny, twelve times the displayed month can miss the annual total by a few pence.'
    ],
    formula: 'Tax year 6 April 2026 to 5 April 2027. England, Wales, and Northern Ireland.\nPersonal allowance = £12,570\nIf salary > £100,000: allowance = £12,570 − (salary − £100,000) / 2, rounded up to a whole pound, and not below £0\nTaxable income = max(0, salary − allowance)\nIncome tax = 20% × taxable income up to £37,700\n  + 40% × taxable income from £37,700 to £125,140\n  + 45% × taxable income above £125,140\nEmployee NI (category A) = 8% × earnings above £12,570 up to £50,270\n  + 2% × earnings above £50,270\nAnnual take-home = salary − income tax − employee NI\nMonthly = annual take-home / 12\nWeekly = annual take-home / 52',
    formulaNotes: [
      'The higher-rate slice starts after £37,700 of taxable income, which is a gross salary of £50,270 when the full £12,570 allowance is still in place. The additional rate starts after £125,140 of taxable income. Once the allowance has tapered to zero, that threshold and a gross salary of £125,140 are the same number. A simplified band chart that quotes "additional rate over £125,140" as if the £12,570 allowance still existed at that income does not match the way the allowance actually works.',
      'National Insurance uses the annual primary threshold and upper earnings limit, not a weekly payroll run. Earnings of exactly £12,570 pay no employee National Insurance. Earnings of exactly £50,270 pay 8% on the band above £12,570 and nothing at 2%. The next pound is in the 2% band.',
      'The salary is what both the allowance taper and National Insurance see. Adjusted net income in the statute can be lower than salary once pension contributions and Gift Aid are taken into account, and it can be higher once other taxable income is added. This form has no fields for those amounts.'
    ],
    examplesHeading: 'Worked 2026/27 take-home examples',
    examples: [
      {
        title: '£35,000 salary',
        paragraphs: [
          'The allowance is the full £12,570 because £35,000 is under £100,000. Taxable income is £22,430, all inside the 20% band, so income tax is £4,486.00. Employee National Insurance is 8% of the same £22,430, which is £1,794.40. Nothing is charged at 2% because the salary is under the £50,270 upper earnings limit.',
          'Annual take-home is £35,000 − £4,486.00 − £1,794.40 = £28,719.60. Divided by 12 that is exactly £2,393.30, which is the headline. Divided by 52 it is exactly £552.30. The two deductions together are £6,280.40, or 17.944% of the salary, so 82.056% remains. Those percentages are a description of this example, not a separate tax rate.'
        ]
      },
      {
        title: '£60,000, across the higher rate and the upper earnings limit',
        paragraphs: [
          'The allowance is still £12,570. Taxable income is £47,430. The first £37,700 is taxed at 20%, which is £7,540.00. The other £9,730 is taxed at 40%, which is £3,892.00. Income tax is £11,432.00.',
          'National Insurance is 8% of the £37,700 between £12,570 and £50,270, which is £3,016.00, plus 2% of the £9,730 above £50,270, which is £194.60. Employee National Insurance is £3,210.60. Annual take-home is £45,357.40. Divided by 12 that is £3,779.7833…, shown as £3,779.78 a month. Twelve times the displayed month is £45,357.36, four pence under the annual figure, because the month was rounded on its own. Weekly take-home displays as £872.26.'
        ]
      },
      {
        title: '£110,000 inside the personal-allowance taper',
        paragraphs: [
          'The excess over £100,000 is £10,000, so the allowance falls by £5,000, from £12,570 to £7,570. Taxable income is £102,430. Income tax is £7,540.00 at 20% on £37,700 plus £25,892.00 at 40% on the remaining £64,730, which is £33,432.00. Compared with £100,000, where income tax is £27,432.00, the extra £10,000 of salary created £6,000 of income tax. That is a 60% income-tax marginal rate: 40% on the extra salary itself, plus 40% on the £1 of allowance lost for each £2 of extra salary.',
          'Employee National Insurance at this level is all in the 2% band on the slice above £50,270, and the calculator shows £4,210.60. The National Insurance on the same extra £10,000 is £200, so income tax and National Insurance together take £6,200 of that £10,000, which is 62%. Annual take-home is £72,357.40, the monthly headline is £6,029.78, and the personal allowance line reads £7,570.00. A salary of £100,001 still shows the full £12,570 allowance because of the round-up rule. £100,002 shows £12,569.00.'
        ]
      }
    ],
    table: {
      heading: '2026/27 take-home at published annual thresholds',
      caption: 'Each row is what this calculator displays for that annual salary. Income tax and employee National Insurance use the 2026/27 annual thresholds for England, Wales, and Northern Ireland, category A. Pension, student loan, and other income are not deducted. Monthly figures are the annual take-home divided by 12 and rounded to the penny.',
      headers: ['Salary', 'Personal allowance', 'Income tax', 'Employee NI', 'Annual take-home', 'Monthly take-home'],
      rows: [
        ['£20,000', '£12,570.00', '£1,486.00', '£594.40', '£17,919.60', '£1,493.30'],
        ['£35,000', '£12,570.00', '£4,486.00', '£1,794.40', '£28,719.60', '£2,393.30'],
        ['£50,270', '£12,570.00', '£7,540.00', '£3,016.00', '£39,714.00', '£3,309.50'],
        ['£60,000', '£12,570.00', '£11,432.00', '£3,210.60', '£45,357.40', '£3,779.78'],
        ['£100,000', '£12,570.00', '£27,432.00', '£4,010.60', '£68,557.40', '£5,713.12'],
        ['£110,000', '£7,570.00', '£33,432.00', '£4,210.60', '£72,357.40', '£6,029.78'],
        ['£125,140', '£0.00', '£42,516.00', '£4,513.40', '£78,110.60', '£6,509.22'],
        ['£150,000', '£0.00', '£53,703.00', '£5,010.60', '£91,286.40', '£7,607.20']
      ]
    },
    limitsHeading: 'What this take-home estimate leaves out',
    limits: [
      'Scotland is not covered on this page. Scottish income tax bands for 2026/27 are different, including a 19% starter rate and a 48% top rate, and a tax code that starts with S is a sign you need those bands. The Scotland take-home pay calculator on this site applies that rate resolution. This page also ignores Marriage Allowance, Blind Person\'s Allowance, and any K code, BR code, 0T code, or week 1 or month 1 emergency code. The working assumption is a cumulative 1257L code in England or Northern Ireland, or C1257L in Wales, with no other adjustments.',
      'Payroll does not always reproduce an annual calculation divided by 12. HMRC\'s monthly personal allowance and monthly primary threshold are each £1,048, and twelve times £1,048 is £12,576, which is £6 more than the annual £12,570. On a flat £35,000 salary that £6 is £1.20 of basic-rate tax. The same flat salary measured against the monthly National Insurance thresholds comes to £1,793.92 of employee National Insurance for the year, against £1,794.40 here. A bonus, a new starter, or a tax code that is not cumulative can move a payslip by much more than that. Directors\' National Insurance can be assessed on an annual earnings period, which is closer to this page, but the director rules are still not modelled.',
      'Workplace pension contributions are not deducted. Under salary sacrifice, enter the salary after the sacrifice, because that is the pay tax and National Insurance see. Under a net pay arrangement the contribution reduces taxable pay but not National Insurance, which this single salary field cannot split. Under relief at source, tax and National Insurance are worked out on the full gross salary and the contribution is taken from after-tax pay, with basic-rate relief added inside the pension rather than returned in your take-home. Type the full gross salary for that last case and then subtract the contribution you actually pay.',
      'Student loan and postgraduate loan deductions are not subtracted. For 2026/27 HMRC\'s employer thresholds are £26,900 for Plan 1, £29,385 for Plan 2, £33,795 for Plan 4, and £25,000 for Plan 5, each at 9% of earnings above the threshold, and £21,000 for a postgraduate loan at 6%. The student loan repayment calculator applies those thresholds and rounds the pay-period deduction down to the pound. On a flat £35,000 Plan 2 salary it shows £42.00 a month, which is not already inside the £2,393.30 take-home headline on this page. Subtract it yourself if you want both. Benefits in kind, statutory payments, bonuses, commission, and a second job are not added. Employer National Insurance, which for category A is 15% above the £5,000 secondary threshold, is an employer cost and is not taken off this take-home figure.'
    ],
    disclaimer: 'This is a planning estimate for the 2026/27 tax year in England, Wales, and Northern Ireland, not a payslip, a tax code, or tax advice. HMRC and your employer assess the amount you owe.',
    faqs: [
      {
        q: 'Does this 2026/27 take-home calculator work in Scotland?',
        a: 'No. It uses the England, Wales, and Northern Ireland bands only: 20% on taxable income up to £37,700, 40% up to £125,140 of taxable income, and 45% above that, after the £12,570 personal allowance and its taper. Scottish income tax rates are different. National Insurance is not devolved, and the Scotland take-home pay calculator uses the same category A National Insurance with the 2026/27 Scottish bands.'
      },
      {
        q: 'Why does a salary of £100,001 still get the full £12,570 allowance?',
        a: 'The allowance falls by half the income above £100,000, and if the result is not a whole number of pounds it is rounded up. Half of £1 is 50p, so £12,570 minus 50p rounds back up to £12,570. At £100,002 the reduction is a full £1 and the allowance applied is £12,569. The calculator shows those two allowance lines if you enter those salaries.'
      },
      {
        q: 'Why might my monthly payslip not match the headline?',
        a: 'The headline is the annual take-home divided by 12. Payroll usually applies monthly thresholds, a tax code, and its own rounding, and it can include a pension or student loan that this page never sees. On a flat £35,000 with no other deductions, the monthly thresholds alone are only about £1.20 of tax and £0.48 of National Insurance away from these annual figures across a full year. A bonus or a non-cumulative code can open a much wider gap.'
      },
      {
        q: 'Are pension contributions or student loans included?',
        a: 'No. The result is salary minus income tax minus category A employee National Insurance. Plan 1, Plan 2, Plan 4, Plan 5, and postgraduate loan repayments are not deducted. For salary sacrifice, enter the salary after the amount given up. For relief at source, enter the full gross salary and subtract the contribution yourself.'
      },
      {
        q: 'Is employer National Insurance deducted from take-home pay?',
        a: 'No. Employer Class 1 National Insurance is paid by the employer. For category A in 2026/27 the employer rate is 15% above the £5,000 secondary threshold. It does not reduce the employee figure on this page. The employee rates used here are 8% and 2%.'
      },
      {
        q: 'What if my tax code is not 1257L or C1257L?',
        a: 'The personal allowance in the formula will not match your code. 1257L and the Welsh C1257L both point at the standard £12,570 allowance. A code that transfers Marriage Allowance, adds Blind Person\'s Allowance, collects a previous underpayment, or uses a K prefix changes the tax, and sometimes which band you sit in. Use the allowance printed on your coding notice instead of trusting this result.'
      }
    ],
    relatedLinks: [
      {
        slug: 'scotland-take-home-pay-calculator',
        label: 'Scotland take-home pay calculator for 2026/27',
        note: 'Same National Insurance, with the Scottish income tax bands instead of these ones.'
      },
      {
        slug: 'uk-student-loan-repayment-calculator',
        label: 'UK student loan repayment calculator for 2026/27',
        note: 'Plan 1, Plan 2, Plan 4, Plan 5, and postgraduate deductions. Not already subtracted from this take-home figure.'
      },
      {
        slug: 'loan-calculator',
        label: 'Personal and auto loan calculator',
        note: 'Compare a fixed monthly payment with take-home pay only when both numbers are in the same currency.'
      },
      {
        slug: 'mortgage-calculator',
        label: 'Fixed-rate mortgage calculator',
        note: 'Principal and interest only, in US dollars, with taxes and insurance left out.'
      },
      {
        slug: 'england-stamp-duty-calculator',
        label: 'England stamp duty calculator',
        note: 'SDLT on a residential purchase in England or Northern Ireland. Keep that sterling tax separate from this take-home figure.'
      }
    ]
  },
  ...extraCalculatorContent,
  ...clusterCalculatorContent,
  ...searchCalculatorContent,
  ...longtailCalculatorContent,
  ...growthCalculatorContent,
  ...dailyCalculatorContent,
  ...waveCalculatorContent,
  ...batchCalculatorContent
};

export function contentWordCount(entry) {
  const chunks = [
    entry.h1,
    entry.description,
    entry.howHeading,
    entry.examplesHeading,
    entry.limitsHeading,
    ...entry.intro,
    ...entry.steps,
    ...entry.howItWorks,
    entry.formula,
    ...entry.formulaNotes,
    ...entry.examples.flatMap((example) => [example.title, ...example.paragraphs]),
    entry.table.heading,
    entry.table.caption,
    ...entry.table.headers,
    ...entry.table.rows.flat(),
    ...entry.limits,
    entry.disclaimer,
    ...entry.faqs.flatMap((faq) => [faq.q, faq.a])
  ];
  return chunks.join(' ').trim().split(/\s+/).filter(Boolean).length;
}
