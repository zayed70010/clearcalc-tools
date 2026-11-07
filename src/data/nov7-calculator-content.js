export const nov7CalculatorContent = {
  'car-payment-calculator': {
    title: 'Car Payment Calculator: Monthly Principal and Interest | ClearCalc',
    h1: 'Car Payment Calculator',
    description: 'Estimate a fixed-rate car loan payment from the amount financed, the APR, and the term in months. $25,000 at 6% for 60 months is $483.32 a month and $3,999.20 of interest.',
    intro: [
      'This car payment calculator finds the level monthly principal-and-interest payment that pays a fixed-rate auto loan down to zero. The term is in months, because a car contract is usually written as 36, 48, 60, or 72 payments rather than as a number of years. The sample is $25,000 financed at 6% APR for 60 months. The headline is $483.32 / month. Total paid is $28,999.20 and total interest is $3,999.20.',
      'The algebra is the same family as the mortgage page and the loan page. Those two ask for years and multiply by 12. This page takes the month count directly, so a 60-month note is not typed as 5. A five-year loan at 7.5% on $25,000 is still the loan page’s job: that payment is $500.95 and the interest is $5,056.92. The 6% and 60-month sample here is a different contract.',
      'Sales tax, title, registration, gap insurance, and an extended warranty are inside the payment only if they are already part of the amount financed. A down payment should be subtracted before you type the principal. The form does not price a car and it does not look up a credit tier.'
    ],
    steps: [
      'Enter the amount financed in US dollars, after the down payment and after any amount you are not borrowing. The sample is 25000.',
      'Enter the APR as a percent. For 6%, type 6, not 0.06. The monthly rate is that percent divided by 100 and then by 12.',
      'Enter the term as a whole number of months from 1 to 600. The sample is 60. A 48-month loan is 48, not 4.',
      'Press Calculate. The headline is the monthly principal-and-interest payment. Total paid, total interest, and the payment count are underneath.'
    ],
    howHeading: 'How a monthly car payment is amortized',
    howItWorks: [
      'The monthly rate r is the APR divided by 1,200. For 6% that is 0.005. The payment is principal × r × (1 + r)^n / ((1 + r)^n − 1), with n equal to the months you typed. On $25,000 for 60 months the unrounded payment rounds to $483.32, and the unrounded payment times 60 rounds to $28,999.20. Sixty times the displayed $483.32 is also $28,999.20, so this particular sample has no cent gap. That is not true of every loan.',
      'A $20,000 loan at 7.5% for 48 months shows $483.58 / month, total paid of $23,211.75, and interest of $3,211.75. Forty-eight times the displayed payment is $23,211.84, which is $0.09 above the displayed total. The total uses the full-precision payment. Each displayed line is then rounded on its own. The $0.09 is display rounding, not a fee.',
      'A zero APR divides the principal by the number of months. $18,000 at 0% for 36 months is $500.00 a month, total paid $18,000.00, and interest $0.00. That is a true zero-interest installment plan. It is not a credit card, and it is not a deferred-interest offer that starts charging later. A negative APR, a negative principal, and a term that is not a whole number of months are rejected.'
    ],
    formula: 'Monthly rate r = APR / 100 / 12\nPayments n = the term in months\nIf r = 0: payment M = principal / n\nOtherwise: M = principal × r × (1 + r)^n / ((1 + r)^n − 1)\nTotal paid = M × n, using the unrounded payment\nTotal interest = total paid − principal',
    formulaNotes: [
      'The headline payment is rounded to the cent after the formula. Total paid is rounded from the unrounded payment times n. When those two roundings disagree, the gap is a few cents, as on the $20,000, 7.5%, 48-month loan.',
      'The rate is a nominal APR compounded monthly. A contract that uses a daily periodic rate, a weekly payment, or a single balloon will not match. The loan page uses the same monthly formula with the term stored in years.'
    ],
    examplesHeading: 'Worked car payment examples',
    examples: [
      {
        title: '$25,000 at 6% for 60 months',
        paragraphs: [
          'Principal 25000, APR 6, months 60. The calculator shows $483.32 / month, 60 payments, total paid $28,999.20, and total interest $3,999.20. Sixty times $483.32 is $28,999.20, so the displayed payment and the displayed total agree on this loan.',
          'Interest is $3,999.20 on $25,000 borrowed. That is the cost of the 60-month schedule at 6%, before any fee that was not typed into the amount financed. The loan page’s $25,000 at 7.5% for 5 years is $500.95 and $5,056.92 of interest. Both the rate and the way the term is entered are different.'
        ]
      },
      {
        title: '$20,000 at 7.5% for 48 months, where the cents do not multiply back',
        paragraphs: [
          'Principal 20000, APR 7.5, months 48. The calculator shows $483.58 / month, total paid $23,211.75, and total interest $3,211.75. Forty-eight times $483.58 is $23,211.84. The $0.09 difference is the gap between a rounded payment and a total that was rounded from the unrounded payment.',
          'Shortening the same $20,000 and 7.5% idea is a different term, not a different formula. The loan page will do $25,000 at 7.5% for 3 years, which is 36 payments and $777.66 a month. This page wants 36 in the months field if that is the contract you are checking.'
        ]
      },
      {
        title: 'A 72-month loan, a 24-month loan, and a zero APR',
        paragraphs: [
          '$15,000 at 4.9% for 72 months is $240.88 / month, total paid $17,343.27, and interest $2,343.27. Seventy-two times $240.88 is $17,343.36, nine cents above the displayed total. $10,000 at 9.9% for 24 months is $460.99 / month, total paid $11,063.71, and interest $1,063.71. The shorter loan has the higher rate and the smaller interest bill.',
          '$18,000 at 0% for 36 months is $500.00 / month, total paid $18,000.00, and interest $0.00. Eighteen thousand divided by 36 is 500 exactly. Use 0 only when the contract really charges no interest. A blank rate is not zero. It fails the number check.'
        ]
      }
    ],
    table: {
      heading: 'Fixed monthly car payments this calculator shows',
      caption: 'Each row is the displayed payment, total paid, and interest for that amount, APR, and month count. Fees and insurance are not added. A displayed payment times the month count can differ by a few cents from total paid.',
      headers: ['Amount financed', 'APR', 'Months', 'Monthly payment', 'Total paid', 'Total interest'],
      rows: [
        ['$25,000', '6%', '60', '$483.32', '$28,999.20', '$3,999.20'],
        ['$20,000', '7.5%', '48', '$483.58', '$23,211.75', '$3,211.75'],
        ['$15,000', '4.9%', '72', '$240.88', '$17,343.27', '$2,343.27'],
        ['$10,000', '9.9%', '24', '$460.99', '$11,063.71', '$1,063.71'],
        ['$18,000', '0%', '36', '$500.00', '$18,000.00', '$0.00']
      ]
    },
    limitsHeading: 'What this car payment leaves out',
    limits: [
      'A dealer worksheet can add tax, title, and products to the amount financed, then quote a payment on that larger number. This form will not add them. If the quote is far from the figure here, compare the amount financed and the APR before assuming the formula is different.',
      'Extra principal payments, biweekly drafts, and a balloon at the end are not modeled. The payment stays level for every month in the term. Paying the loan off early would reduce interest, and this page cannot show the new payoff date.',
      'The APR field is the rate used to compute interest. An APR that already folds in prepaid finance charges can differ from the interest rate in the contract. Type the rate the amortization actually uses.',
      'The result is in US dollars. It is not a take-home pay figure. A $483.32 payment has to be compared with cash after tax, on a paycheck page, and the currencies have to match.'
    ],
    disclaimer: 'This car payment is general amortization, not a loan offer or a contract payment. Confirm the amount financed, the rate, and the number of payments with the lender.',
    faqs: [
      {
        q: 'What is the monthly payment on $25,000 at 6% for 60 months?',
        a: '$483.32. Total paid is $28,999.20 and total interest is $3,999.20 across 60 payments. Sixty times $483.32 equals that total on this particular loan. A different rate or term will not keep the same tidy cents.'
      },
      {
        q: 'Why can the monthly car payment times the term miss the total paid?',
        a: 'Total paid multiplies the unrounded payment by the number of months, then rounds. The headline rounds the payment first. On $20,000 at 7.5% for 48 months, $483.58 times 48 is $23,211.84 and the displayed total is $23,211.75. The $0.09 gap is rounding.'
      },
      {
        q: 'Does this car payment include sales tax or insurance?',
        a: 'No. Only principal and interest on the amount you type. Add tax or a warranty into that amount yourself if they are being financed. A down payment should already have been subtracted.'
      },
      {
        q: 'What does a 0% APR do to a car payment?',
        a: 'The payment is the amount financed divided by the months, and interest is $0.00. $18,000 for 36 months is $500.00 a month and $18,000.00 total. That model is for a true zero-interest installment plan, not a credit card.'
      },
      {
        q: 'How is a term in months different from the loan calculator’s term in years?',
        a: 'This page uses the month count as n. The loan calculator multiplies years by 12. $25,000 at 7.5% for 5 years is $500.95 there. $25,000 at 6% for 60 months is $483.32 here. Do not type 5 into the months field and expect a five-year loan. Five months is a different loan.'
      }
    ],
    relatedLinks: [
      { slug: 'loan-calculator', label: 'Personal and auto loan calculator', note: '$25,000 at 7.5% for 5 years is $500.95 a month and $5,056.92 of interest. The term on that page is in years.' },
      { slug: 'mortgage-calculator', label: 'Fixed-rate mortgage calculator', note: '$300,000 at 6.5% for 30 years is $1,896.20 a month. The formula family matches. The term and the taxes do not.' },
      { slug: 'credit-card-payoff-calculator', label: 'Credit card payoff calculator', note: 'A $5,000 balance at 21.99% with a $200 payment takes 34 months. That solves a term from a payment. This page solves a payment from a term.' }
    ]
  },
  'roi-calculator': {
    title: 'Simple ROI Calculator: Profit and Return Percent | ClearCalc',
    h1: 'Simple ROI Calculator',
    description: 'Calculate simple ROI and net profit from a cost and a final value. A $10,000 cost that ends at $12,500 is a 25.00% return and $2,500.00 of profit. A zero cost is rejected.',
    intro: [
      'This ROI calculator answers one ratio: how large the profit is compared with the money that was put in. Return on investment equals (final value − cost) / cost × 100. Net profit is the final value minus the cost, before that division. The sample cost is $10,000 and the final value is $12,500. Profit is $2,500.00 and the headline is 25.00%.',
      'The ratio does not know how long the money was invested. A 25% return over three months and a 25% return over ten years are the same headline here. Simple interest multiplies principal, rate, and years. Compound interest compounds a rate. An internal rate of return solves a rate from a series of cash flows. None of those is this page.',
      'A cost of zero or below is rejected. Division by zero is undefined, and a negative cost is not a sensible base for this ratio. A final value below the cost is allowed. It produces a negative profit and a negative ROI, which is a loss, not an error.'
    ],
    steps: [
      'Enter the cost, the amount invested or spent, as a number above zero. The sample is 10000.',
      'Enter the final value, what the investment is worth at the end, or the revenue you are comparing with that cost. The sample is 12500. Zero and negative final values are allowed.',
      'Press Calculate. The headline is the ROI percent. Net profit, the cost, and the final value are listed underneath, with a line that says whether the result is a gain, a loss, or neither.',
      'Do not type a rate or a number of years. This form has neither field. If you have a rate and a time, use the simple interest page or the compound interest page instead.'
    ],
    howHeading: 'How simple ROI is divided',
    howItWorks: [
      'Subtract the cost from the final value. That difference is net profit, and it can be negative. Divide the difference by the cost, then multiply by 100. On the sample, 12500 − 10000 = 2500, and 2500 / 10000 × 100 = 25. The percent is shown to two decimal places, so an even 25 is 25.00%.',
      'A cost of $8,000 and a final value of $6,000 is a profit of −$2,000.00 and an ROI of −25.00%. The loss is a quarter of the cost. A cost of $5,000 and a final value of $5,000 is $0.00 of profit and 0.00%. The detail line says there is no profit and no loss. A cost of 0, or a cost of −5, stops with an error that says ROI divides by the cost.',
      'Nothing in the formula is a year. Simple interest on $10,000 at 5% for 3 years is $1,500.00 of interest and an $11,500.00 total, which would be a 15% ROI only if you then brought that total here as the final value. Compound interest with no monthly deposit turns the same inputs into $11,614.72. This page will not do either projection. It only compares two amounts you already have.'
    ],
    formula: 'Net profit = final value − cost\nROI % = net profit / cost × 100\nCost must be greater than zero\nA negative final value is allowed\nTime and a discount rate are not inputs',
    formulaNotes: [
      'The percent is rounded to two decimal places for display. A profit of $1 on a cost of $3 is 33.333…%, which displays as 33.33%. The dollar lines use cent rounding.',
      'Revenue can be typed as the final value when you are comparing one cost with one receipt. If there are several receipts at different dates, this single ratio ignores the dates. That is the limitation, not a second formula hiding in the page.'
    ],
    examplesHeading: 'Worked ROI examples',
    examples: [
      {
        title: '$10,000 in, $12,500 out',
        paragraphs: [
          'Cost 10000, final value 12500. The calculator shows 25.00%, net profit $2,500.00, and the line that the result is a gain. The arithmetic is 2,500 / 10,000 × 100.',
          'The same dollars on the simple interest page would require a rate and a time. This page does not invent them. A 25% simple-interest rate for one year on $10,000 is also $2,500 of interest, and that coincidence is one year at 25%, which you did not type here.'
        ]
      },
      {
        title: 'A loss, and a break-even',
        paragraphs: [
          'Cost 8000, final value 6000. The calculator shows −25.00% and net profit of −$2,000.00. The result is a loss. The percent is negative because the final value is below the cost, and the base is positive.',
          'Cost 5000, final value 5000. The calculator shows 0.00% and net profit of $0.00. Breaking even is a defined result. It is not the error you get from a zero cost.'
        ]
      },
      {
        title: 'Why zero and negative costs stop',
        paragraphs: [
          'Cost 0 and any final value is rejected. The message says to enter a cost above zero because ROI divides by the cost. There is no infinity to display, and no convention on this page that treats a free outcome as a special percent.',
          'A negative cost is rejected with the same message. A negative final value is not. Cost 1000 and final value −200 is a profit of −$1,200.00 and an ROI of −120.00%. You lost the cost and another $200. The ratio is still defined because the cost was positive.'
        ]
      }
    ],
    table: {
      heading: 'Simple ROI for a cost and a final value',
      caption: 'Each row is what this calculator displays. No year is applied. A zero cost is not in the table because the form rejects it.',
      headers: ['Cost', 'Final value', 'Net profit', 'ROI'],
      rows: [
        ['$10,000', '$12,500', '$2,500.00', '25.00%'],
        ['$8,000', '$6,000', '−$2,000.00', '−25.00%'],
        ['$5,000', '$5,000', '$0.00', '0.00%'],
        ['$1,000', '−$200', '−$1,200.00', '−120.00%']
      ]
    },
    limitsHeading: 'What a single ROI ratio leaves out',
    limits: [
      'Time is missing. Two investments with the same 25% ROI can have very different annual rates. This page will not annualize the percent. If you need a rate per year from one deposit and one ending balance, that is a compound-growth question, and the inputs are a rate or a solved rate, not this ratio alone.',
      'Cash flows in the middle are missing. An internal rate of return needs every date and every amount. Typing the sum of the receipts as the final value throws away the timing. Do not read the headline as an IRR.',
      'Fees and taxes are included only if you already took them out of the final value or added them to the cost. The form will not guess a tax rate. A paycheck page and this page answer different questions.',
      'A zero cost is not a huge return. It is an undefined division, and the form stops. A very small cost, such as one cent against a large final value, produces a very large percent. That percent is arithmetically right and easy to misread. Check the dollar profit beside it.'
    ],
    disclaimer: 'This ROI figure is (final value − cost) / cost. It is not investment advice, an IRR, or a projection of a future balance.',
    faqs: [
      {
        q: 'How is simple ROI different from an internal rate of return?',
        a: 'Simple ROI is one profit divided by one cost. It has no dates. An internal rate of return solves the discount rate that sets the present value of a series of cash flows to zero. This page does not do that, and it does not ask for a holding period.'
      },
      {
        q: 'What is the ROI if a $10,000 cost ends at $12,500?',
        a: '25.00%, and the net profit is $2,500.00. The calculation is (12,500 − 10,000) / 10,000 × 100. The page does not say whether that 25% took a month or a decade.'
      },
      {
        q: 'Why does the ROI calculator reject a zero cost?',
        a: 'Because the percent divides by the cost. Zero makes the ratio undefined. A negative cost is rejected for the same reason. Enter the money that was actually spent, as a positive number.'
      },
      {
        q: 'Can the ROI be negative?',
        a: 'Yes. A cost of $8,000 and a final value of $6,000 is −25.00%, with net profit of −$2,000.00. The detail line calls that a loss. A final value equal to the cost is 0.00%, not an error.'
      },
      {
        q: 'Does this ROI calculator compound monthly or multiply by years?',
        a: 'No. Compound interest on $10,000 at 5% for 3 years, with no deposit, is $11,614.72 on that page. Simple interest on the same inputs is $1,500.00. Bring an ending value here only after you already have it. This form will not grow the cost forward.'
      }
    ],
    relatedLinks: [
      { slug: 'simple-interest-calculator', label: 'Simple interest calculator', note: '$10,000 at 5% for 3 years is $1,500.00 of interest and an $11,500.00 total. That total would be a 15% ROI here, and the interest page is what applied the years.' },
      { slug: 'compound-interest-calculator', label: 'Compound interest calculator', note: 'The same $10,000 at 5% for 3 years, with no monthly deposit, grows to $11,614.72. This ROI page does not compound.' },
      { slug: 'percentage-change-calculator', label: 'Percentage change calculator', note: 'From 10,000 to 12,500 is the same 25.00% increase. ROI also prints the dollar profit and rejects a zero cost in those words.' }
    ]
  },
  'percentage-change-calculator': {
    title: 'Percentage Change Calculator: Increase or Decrease | ClearCalc',
    h1: 'Percentage Change Calculator',
    description: 'Measure the percent increase or decrease from a starting value to a new value. From 80 to 100 is a 25.00% increase. From 100 to 80 is a 20.00% decrease. A starting value of zero is rejected.',
    intro: [
      'This percentage change calculator compares a starting value with a new value. The percent is (new − old) / old × 100. The headline also says whether the new value is an increase, a decrease, or no change. From 80 to 100 the difference is 20, and 20 / 80 × 100 is 25. The headline is 25.00% increase.',
      'The reverse trip is not the same percent. From 100 down to 80 the difference is −20, and −20 / 100 × 100 is −20. The headline is −20.00% decrease. A 25% increase followed by a 20% decrease lands back where it started. People often expect the percents to match. They match only when you divide by the same base, and these two calculations do not.',
      'The percentage calculator on this site answers part / whole. Part 20 and whole 80 is 25%, which happens to equal the change from 80 to 100, and part 20 and whole 100 is 20%, which happens to equal the change from 100 to 80. That page has no direction word and no old-versus-new fields. A starting value of zero is rejected here because the division is undefined.'
    ],
    steps: [
      'Enter the starting value. The sample is 80. Zero is rejected. Negative starting values are allowed, and the direction word then matters more than the sign of the percent.',
      'Enter the new value. The sample is 100. The new value may be zero, which is a 100% decrease when the start was positive.',
      'Press Calculate. Read the percent and the direction together. The difference and both inputs are listed underneath.',
      'If you wanted “what percent is A of B” rather than a change from A to B, use the percentage calculator. Part and whole are not a starting value and a new value.'
    ],
    howHeading: 'How percent change gets its sign and its direction',
    howItWorks: [
      'Subtract the starting value from the new value. Divide by the starting value. Multiply by 100. The sign of that result is the sign of the headline percent. Separately, compare the two values. If the new value is greater, the direction is increase. If it is smaller, the direction is decrease. If they are equal, the direction is no change.',
      'When the starting value is positive, the sign and the direction agree. From 40 to 0 the headline is −100.00% decrease. From 50 to 50 it is 0.00% no change. From 100 to 80 it is −20.00% decrease. From 80 to 100 it is 25.00% increase. None of those four is a tip, a discount, or a sales-tax rate. A 20% discount on $100 leaves $80.00 on the discount page. The change from 100 to 80 is the same −20% only because the base is the original price.',
      'When the starting value is negative, the sign and the direction can disagree. From −100 to −50 the value rose, so the direction is increase, but (−50 − −100) / −100 × 100 is −50. The headline is −50.00% increase. The detail line says the starting value is negative and tells you to read the direction word with the percent. A positive base does not need that warning. A starting value of exactly zero stops the calculation.'
    ],
    formula: 'Percent change = (new − old) / old × 100\nDirection = increase if new > old, decrease if new < old, no change if they are equal\nOld must not be zero\nThe sign of the percent follows the division\nThe direction word follows the comparison of the two values',
    formulaNotes: [
      'The percent displays with two decimal places. A change from 3 to 4 is 33.333…%, which displays as 33.33% increase. The difference line keeps up to four decimal places.',
      'A negative base is the case where a negative percent can still be an increase. The page does not flip the sign to force them to agree. It prints both and explains which rule made each one.'
    ],
    examplesHeading: 'Worked percent-change examples',
    examples: [
      {
        title: 'From 80 to 100, and back from 100 to 80',
        paragraphs: [
          'Starting value 80, new value 100. The calculator shows 25.00% increase. The difference is 20. Dividing by the starting 80, not by the new 100, is what makes it 25 rather than 20.',
          'Starting value 100, new value 80. The calculator shows −20.00% decrease. The difference is −20, divided by 100. The percentage calculator, given part 20 and whole 80, shows 25%, and given part 20 and whole 100 shows 20%. Those are shares, not changes, and they have no direction word.'
        ]
      },
      {
        title: 'No change, a drop to zero, and a rejected zero start',
        paragraphs: [
          'Starting value 50, new value 50. The calculator shows 0.00% no change. The difference is 0. Starting value 40, new value 0. The calculator shows −100.00% decrease. The whole starting value was lost, and the base was not zero, so the percent is defined.',
          'Starting value 0 and new value 10 is rejected. The message says percent change from zero is undefined. There is no “infinite increase” result on this page. Move the start off zero if you have a real base.'
        ]
      },
      {
        title: 'A negative starting value',
        paragraphs: [
          'Starting value −100, new value −50. The value increased by 50, from a more negative number toward zero. The formula still divides by −100, so the percent is −50.00%, and the direction word is increase. The headline is −50.00% increase.',
          'Read both parts. Quoting only −50% would sound like a fall. The direction word is there because the base is negative. A positive starting value does not produce this split. From 100 to 50 is −50.00% decrease, and there the sign and the word agree.'
        ]
      }
    ],
    table: {
      heading: 'Percent change for selected pairs',
      caption: 'The percent column is the headline without the direction word. The direction column is the word this calculator adds. A starting value of zero is omitted because it is rejected.',
      headers: ['Starting value', 'New value', 'Percent', 'Direction'],
      rows: [
        ['80', '100', '25.00%', 'increase'],
        ['100', '80', '−20.00%', 'decrease'],
        ['50', '50', '0.00%', 'no change'],
        ['40', '0', '−100.00%', 'decrease'],
        ['−100', '−50', '−50.00%', 'increase']
      ]
    },
    limitsHeading: 'What percent change does not measure',
    limits: [
      'It is not “what percent is A of B.” Part 25 and whole 200 is 12.5% on the percentage calculator. The change from 200 to 225 is also 12.5%, but the change from 25 to 200 is 700.00% increase. The two pages meet only when you set the bases up that way on purpose.',
      'A tip percent, a discount percent, and a sales-tax rate are inputs you choose. They are not the change between two measured values. Eighteen percent of $85 is $15.30 on the tip page. This page would call the move from 85 to 100.30 a 18.00% increase only after you already know the new total.',
      'Percentage points and percent change are different. A rate that moves from 5% to 6% rose by 1 percentage point. The percent change in the rate is (6 − 5) / 5 × 100 = 20%. This form will compute that 20% if you type 5 and 6. It will not label the result as percentage points.',
      'A zero starting value is rejected rather than plotted as an infinite spike. Very small starting values produce very large percents. Check the difference line before you quote the percent.'
    ],
    disclaimer: 'This percent change is (new − old) / old. It is arithmetic, not a price index, a tax rate, or a forecast.',
    faqs: [
      {
        q: 'What is the percent change from 80 to 100?',
        a: 'A 25.00% increase. The difference is 20, and 20 divided by the starting value 80 is 0.25. The new value is greater, so the direction word is increase.'
      },
      {
        q: 'Why is a decrease from 100 to 80 equal to 20% and not 25%?',
        a: 'Because the base is the starting value, which is now 100. The difference is 20, and 20 / 100 is 20%, shown as −20.00% decrease. The earlier 25% used 80 as the base. The two percents are not inverses of each other in the sense of matching digits.'
      },
      {
        q: 'Why is a starting value of zero rejected for percent change?',
        a: 'The formula divides by the starting value. Zero makes the percent undefined. From 40 to 0 is allowed and is −100.00% decrease, because the base is 40. From 0 to 10 is not calculated.'
      },
      {
        q: 'Why can a negative starting value show a negative percent and the word increase?',
        a: 'From −100 to −50 the value rose, so the direction is increase. The division (−50 − −100) / −100 is −0.5, so the percent is −50.00%. The headline keeps both: −50.00% increase. The sign follows the formula. The word follows which number is larger.'
      },
      {
        q: 'How is percent change different from part divided by whole?',
        a: 'Part 20 and whole 80 is 25% on the percentage calculator, with no direction. Percent change from 80 to 100 is 25.00% increase. Part 20 and whole 100 is 20%, while the change from 100 to 80 is −20.00% decrease. Use the page whose question you actually have.'
      }
    ],
    relatedLinks: [
      { slug: 'percentage-calculator', label: 'Percentage calculator', note: 'Part 25 and whole 200 is 12.5%. Part 20 and whole 80 is 25%, which matches the change from 80 to 100 only because those inputs line up. That page does not say increase or decrease.' },
      { slug: 'discount-calculator', label: 'Discount calculator', note: 'Twenty percent off $100 leaves $80.00. The change from 100 to 80 is −20.00% decrease here. The discount page is the one that subtracts the percent from a price.' },
      { slug: 'roi-calculator', label: 'ROI calculator', note: 'A cost of $10,000 and a final value of $12,500 is a 25.00% return and $2,500.00 of profit. The percent matches the change from 10000 to 12500. The ROI page also rejects a zero cost and prints the dollars.' }
    ]
  },
  'fahrenheit-to-celsius-calculator': {
    title: 'Fahrenheit to Celsius Calculator | °F to °C | ClearCalc',
    h1: 'Fahrenheit to Celsius Calculator',
    description: 'Convert Fahrenheit to Celsius with °C = (°F − 32) × 5/9. 32°F is 0°C, 212°F is 100°C, 98.6°F is 37°C, and 72°F is 22.22°C.',
    intro: [
      'This Fahrenheit to Celsius calculator converts one way. Type a Fahrenheit temperature. The headline is Celsius, using °C = (°F − 32) × 5/9. There is no direction menu. The sample, 72, is a common thermostat setting. The headline is 22.22°C. The line under it keeps 22.2222°C, because 40 × 5/9 is 200/9 and the 2 repeats. Kelvin is 295.37 K.',
      'Three checks confirm the scale before you trust a less tidy number. Water freezes at 32°F, which is 0°C and 273.15 K. Water boils at 212°F, which is 100°C and 373.15 K. A conventional body-temperature figure of 98.6°F is 37°C and 310.15 K. Each of those is exact at two decimal places. Minus 40 is the point where the numbers already match: −40°F is −40°C.',
      'The Celsius to Fahrenheit page is the other direction, and it is also the page that keeps an oven chart. 180°C is 356°F there. A chart that prints 350°F is not this formula. If you type 350 here, the result is 176.67°C, which is (350 − 32) × 5/9 and not 180. This page will not relabel 350 as 180. The length converter still cannot do this job.'
    ],
    steps: [
      'Enter the temperature in Fahrenheit. The sample is 72. Decimals are allowed. 98.6 is the body-temperature check. Negative numbers are allowed down to absolute zero.',
      'Press Calculate. The headline is Celsius, with at most two decimal places. The first detail line keeps four decimal places so a repeating fraction is visible.',
      'Read the Kelvin line if you need the absolute temperature. Kelvin is the Celsius result plus 273.15. This page does not print Rankine.',
      'To start from Celsius, including the 180°C oven example, use the Celsius to Fahrenheit page. Typing 180 here means 180°F, which is 82.22°C, not a baking temperature in Celsius.'
    ],
    howHeading: 'How Fahrenheit is turned into Celsius',
    howItWorks: [
      'Fahrenheit and Celsius share the interval from freezing to boiling, with 180 Fahrenheit degrees against 100 Celsius degrees. The slope the other way is 5/9. The zero points differ by 32, so the 32 is subtracted before the slope is applied. °C = (°F − 32) × 5/9. Multiplying by 0.555… is the same slope only when the decimal is the full repeating expansion of 5/9. The calculator uses 5/9.',
      '32 − 32 is 0, times 5/9 is 0. 212 − 32 is 180, times 5/9 is 100. 98.6 − 32 is 66.6, times 5/9 is 37. −40 − 32 is −72, times 5/9 is −40. Those four are exact, so the headline and the four-decimal line match. 72 − 32 is 40, times 5/9 is 22.2222…, so the headline is 22.22°C and the detail line is 22.2222°C. Typing 22.22 back into the Celsius page does not return exactly 72. That round trip is explained on the Celsius page, which is the one that starts from Celsius.',
      'A temperature below −459.67°F is below absolute zero, −273.15°C, and the form rejects it. 350°F is a real temperature and converts to 176.67°C, with 176.6667°C on the detail line and 449.82 K. It is not the 180°C setting an oven chart pairs with the label 350. The chart lives on the other page so the two tools do not repeat the same table.'
    ],
    formula: '°C = (°F − 32) × 5/9\nK = °C + 273.15\nThe headline rounds to at most two decimal places\nThe detail line keeps four decimal places\nTemperatures below −459.67°F are rejected',
    formulaNotes: [
      '5/9 is exact. A converter that multiplies by 0.56 has already rounded the slope and will miss 98.6°F → 37°C. This page does not ask you to type a factor.',
      'Display rounding is the same half-up rule as the other calculators. 22.2222…°C to two places is 22.22°C. Kelvin uses two places as well, so 22.2222… + 273.15 displays as 295.37 K.'
    ],
    examplesHeading: 'Worked Fahrenheit to Celsius examples',
    examples: [
      {
        title: 'Freezing, boiling, and body temperature',
        paragraphs: [
          'Temperature 32. The calculator shows 0°C and 273.15 K. Temperature 212. The calculator shows 100°C and 373.15 K. Temperature 98.6. The calculator shows 37°C and 310.15 K. The four-decimal lines match the headlines because none of these three repeats.',
          'Those three are the checks to run if a result looks wrong. A clinical thermometer that reads 98.4 or 100.4 is a different input. 100.4°F is not 100°C. Boiling is 212°F. This page converts the number you type and does not decide whether a reading is a fever.'
        ]
      },
      {
        title: 'A 72°F room, and −40',
        paragraphs: [
          'Temperature 72. The headline is 22.22°C. The detail line says 72°F is 22.2222°C before the headline is rounded. Kelvin is 295.37 K. The repeating digit is 2, from 200/9. Two decimal places are enough for a thermostat. They are not the full fraction.',
          'Temperature −40. The headline is −40°C and Kelvin is 233.15 K. This is the one temperature that does not change its number. It is a useful check that the formula subtracted 32 and then multiplied by 5/9, because those two steps cancel only at −40.'
        ]
      },
      {
        title: '350°F is not 180°C',
        paragraphs: [
          'Temperature 350. The calculator shows 176.67°C. The detail line is 176.6667°C, and Kelvin is 449.82 K. The arithmetic is 318 × 5/9. That is not 180.',
          'The Celsius page, given 180 and the Celsius-to-Fahrenheit direction, shows 356°F. The six-degree gap is the chart’s rounding, and that explanation stays on that page. This page’s job is the Fahrenheit number you actually have. If the dial says 350, the Celsius equivalent on this formula is 176.67, not 180.'
        ]
      }
    ],
    table: {
      heading: 'Fahrenheit temperatures and the Celsius this page shows',
      caption: 'The Celsius column is the headline. The four-decimal column is the detail line before that rounding. Kelvin is the two-decimal line. 180°C is not a row, because this form does not accept a Celsius input.',
      headers: ['Fahrenheit', 'Headline', 'Before rounding', 'Kelvin'],
      rows: [
        ['32°F', '0°C', '0°C', '273.15 K'],
        ['72°F', '22.22°C', '22.2222°C', '295.37 K'],
        ['98.6°F', '37°C', '37°C', '310.15 K'],
        ['212°F', '100°C', '100°C', '373.15 K'],
        ['350°F', '176.67°C', '176.6667°C', '449.82 K'],
        ['−40°F', '−40°C', '−40°C', '233.15 K']
      ]
    },
    limitsHeading: 'What a one-way Fahrenheit conversion leaves out',
    limits: [
      'The form does not convert Celsius to Fahrenheit. 180 typed here is 180°F, which is 82.22°C. The oven-chart comparison, including 180°C = 356°F against a printed 350°F, is on the Celsius to Fahrenheit page so the two explanations are not copies of each other.',
      'A weather “feels like” temperature mixes wind or humidity into the air temperature. This page converts the number you type. It does not know the wind. A 72°F air temperature is 22.22°C of air temperature either way.',
      'Rankine counts Fahrenheit-sized degrees from absolute zero. It is not a field. Kelvin is reported because it is one addition after the Celsius result. A temperature difference, such as a rise of 18°F, is a rise of 10°C, because the 32 cancels when you subtract. This form converts levels. Convert each end if you need the gap.',
      'Absolute zero is the floor. A number below −459.67°F is rejected. The length converter and the fuel economy converter are still separate unit systems. A degree is not a metre and not a gallon.'
    ],
    disclaimer: 'This conversion is the defined relationship from Fahrenheit to Celsius. It is not a medical reading, a weather forecast, or an oven calibration.',
    faqs: [
      {
        q: 'What is 32°F in Celsius?',
        a: '0°C, and Kelvin is 273.15 K. The arithmetic is (32 − 32) × 5/9. Boiling, 212°F, is 100°C. Those two points are the checks for the scale.'
      },
      {
        q: 'Is 98.6°F exactly 37°C on this Fahrenheit calculator?',
        a: 'Yes. (98.6 − 32) × 5/9 = 37, and Kelvin is 310.15 K. The Celsius page, started from 37, returns 98.6°F. A thermometer reading of 98.4 or 98.7 is a different number, not a different formula.'
      },
      {
        q: 'What is 212°F in Celsius?',
        a: '100°C, and Kelvin is 373.15 K. (212 − 32) × 5/9 = 180 × 5/9 = 100. The headline and the four-decimal line both read 100°C.'
      },
      {
        q: 'Why is 72°F shown as 22.22°C rather than 22.2222°C?',
        a: 'The headline keeps two decimal places.  (72 − 32) × 5/9 = 200/9 = 22.2222…, and the detail line shows 22.2222°C. Kelvin displays as 295.37 K. Two places are a thermostat reading. The four-decimal line is the one to keep if you are going to convert back.'
      },
      {
        q: 'Does this Fahrenheit page turn 180°C into an oven chart?',
        a: 'No. It does not accept a Celsius input, and it does not print the chart. 350°F entered here is 176.67°C, not 180°C. The Celsius to Fahrenheit page is where 180°C is 356°F, six degrees above the 350°F label.'
      }
    ],
    relatedLinks: [
      { slug: 'celsius-to-fahrenheit-calculator', label: 'Celsius to Fahrenheit calculator', note: '180°C is 356°F, and a chart that says 350°F is rounding. That page also converts Fahrenheit back to Celsius if you change the direction. This page starts from Fahrenheit only.' },
      { slug: 'length-converter', label: 'Length converter from metres', note: 'Metres to feet, inches, yards, or kilometres. A degree is not a length, and the foot factor on that page is not 5/9.' }
    ]
  },
  'oregon-paycheck-calculator': {
    title: 'Oregon Paycheck Calculator 2026 | ClearCalc',
    h1: 'Oregon Paycheck Calculator for 2026',
    description: 'Estimate a 2026 Oregon paycheck after federal tax and Oregon’s 4.75% to 9.9% brackets. At $65,000 single, Oregon tax is $5,113.38 and the two-week take-home is $1,895.93. Federal tax is not subtracted.',
    intro: [
      'This Oregon paycheck calculator estimates federal income tax, Social Security, Medicare, and Oregon income tax on a 2026 wage. Oregon’s brackets, from Publication OR-ESTIMATE, are 4.75% to $4,550, then $216 plus 6.75% to $11,400, $678 plus 8.75% to $125,000, and $10,618 plus 9.9% above $125,000 on a single return. Joint thresholds are $9,100, $22,800, and $250,000, with bases of $432, $1,357, and $21,237.',
      'Oregon taxable income on this page is the wage, minus a traditional 401(k), minus a standard deduction of $2,910 single or $5,820 joint. Those deduction amounts are the 2026 withholding figures: $2,910 for a single filer claiming fewer than three allowances, and $5,820 for a joint return. The sample is $65,000, single, paid every two weeks, with no 401(k). Oregon taxable income is $62,090.00. Oregon tax is $5,113.38, which is $678 plus 8.75% of the $50,690 above $11,400, with the half cent rounded to $5,113.38. Federal tax is $5,620.00, Social Security is $4,030.00, and Medicare is $942.50. Annual take-home is $49,294.12, and the headline is $1,895.93 every two weeks.',
      'The federal income-tax subtraction is not applied. Oregon returns and the 2026 withholding formula subtract federal tax, up to an $8,750 cap in the federal payroll withholding bulletin before that cap phases out. Leaving the subtraction out makes this Oregon tax higher than that withholding formula. The $263-per-exemption credit is not applied. The 0.1% statewide transit tax, employer transit-district taxes, and Portland-area local income taxes are not subtracted. Colorado on the same $65,000 single wage is $2,151.60 of state tax and $2,009.84 every two weeks, because Colorado’s base and rate are different.'
    ],
    steps: [
      'Enter annual gross wages in US dollars. The sample, 65000, is $65,000. Other income is not added.',
      'Choose single or married filing jointly, and the pay frequency. The sample is single and every two weeks. Joint uses the $5,820 Oregon deduction on this one wage. A second salary should not claim that deduction again.',
      'Enter a traditional 401(k) deferral if you want it removed before both federal and Oregon tax. The 2026 elective deferral cap is $24,500. A larger entry is cut back to that cap or to wages. A Roth contribution does not belong in the box.',
      'Press Calculate. The headline is one pay period of annual take-home. Oregon taxable income and the list of omitted items are underneath. The figure is not an employer withholding stub.'
    ],
    howHeading: 'How a 2026 Oregon paycheck is estimated',
    howItWorks: [
      'Federal tax uses the wage minus the 401(k) minus the federal standard deduction of $16,100 single or $32,200 joint. On $65,000 single that federal base is $48,900 and the tax is $5,620.00. Social Security is 6.2% of wages up to the $184,500 wage base, here $4,030.00. Medicare is 1.45% of all wages, here $942.50. Additional Medicare Tax of 0.9% starts above $200,000 and is $0.00 on this wage. Those federal and FICA lines match Colorado at the same wage and the same zero deferral. The state line does not.',
      'Oregon tax uses a smaller deduction and its own brackets. $65,000 minus $2,910 is $62,090. That amount sits in the 8.75% band. The published single formula is $678 plus 8.75% of the excess over $11,400. The excess is $50,690, 8.75% of that is $4,435.375, and $678 plus that amount rounds to $5,113.38. The published dollar bases are rounded, so tax can step by less than a dollar at $4,550 and at $11,400. A joint $65,000 wage uses the $5,820 deduction, leaves $59,180, and the joint formula $1,357 plus 8.75% of the excess over $22,800 produces $4,540.25. The two-week headline is $2,001.82. Federal tax on that joint wage is $3,440.00.',
      'A $6,500 traditional deferral on the $65,000 single wage cuts Oregon taxable income from $62,090 to $55,590. Both amounts are in the 8.75% band, so Oregon tax falls by 8.75% of $6,500, from $5,113.38 to $4,544.63. The difference is $568.75. Federal tax falls from $5,620.00 to $4,840.00, which is 12% of $6,500. The deferral itself leaves the cheque. Annual take-home is $44,142.87, and the headline is $1,697.80 every two weeks. Social Security and Medicare do not fall, because a 401(k) deferral is still FICA wages here.'
    ],
    formula: 'Oregon taxable income = wages − traditional 401(k) − Oregon standard deduction\nSingle deduction = $2,910. Joint deduction = $5,820. The deduction cannot exceed the wage after the 401(k).\nSingle tax: 4.75% to $4,550; $216 + 6.75% of the excess to $11,400; $678 + 8.75% of the excess to $125,000; $10,618 + 9.9% of the excess over $125,000\nJoint tax: 4.75% to $9,100; $432 + 6.75% to $22,800; $1,357 + 8.75% to $250,000; $21,237 + 9.9% over $250,000\nFederal tax uses the federal standard deduction, not the Oregon deduction\nSocial Security is 6.2% up to the wage base. Medicare is 1.45%, plus 0.9% above $200,000\nFederal income-tax subtraction is not applied',
    formulaNotes: [
      'The $678 and $10,618 single bases, and the $432, $1,357, and $21,237 joint bases, are the rounded dollar amounts in Publication OR-ESTIMATE. A pure percentage of the whole income can differ by less than a dollar at a threshold because those bases were rounded.',
      'The $2,910 single deduction is the withholding amount for fewer than three allowances. A single filer with three or more allowances uses $5,820 in that withholding formula. This page does not ask for allowances, so single always uses $2,910. The $263 credit per exemption is not subtracted from the tax.'
    ],
    examplesHeading: 'Worked 2026 Oregon paycheck examples',
    examples: [
      {
        title: '$65,000 single, no 401(k), paid every two weeks',
        paragraphs: [
          'Oregon taxable income is $62,090.00 and Oregon tax is $5,113.38. Federal tax is $5,620.00, Social Security is $4,030.00, and Medicare is $942.50. Additional Medicare Tax is $0.00. Annual take-home is $49,294.12. The headline is $1,895.93 / two weeks.',
          'Colorado on the same wage charges $2,151.60 and pays $52,255.90 for the year, which is $2,009.84 every two weeks. The $2,961.78 annual gap is the state-tax gap, $5,113.38 minus $2,151.60. Federal tax and FICA match. This Oregon figure is still before the federal tax subtraction a real Oregon return would consider.'
        ]
      },
      {
        title: 'The same wage with a $6,500 traditional 401(k), and a joint return',
        paragraphs: [
          'The $6,500 deferral cuts Oregon tax from $5,113.38 to $4,544.63 and federal tax from $5,620.00 to $4,840.00. Annual take-home is $44,142.87, and the headline is $1,697.80 every two weeks. The deferral of $6,500.00 is listed on its own line. It reduced income tax and it also left the cheque.',
          'A joint $65,000 wage with no deferral uses the $5,820 deduction. Oregon tax is $4,540.25, federal tax is $3,440.00, and the headline is $2,001.82 every two weeks. Annual take-home is $52,047.25. The joint deduction belongs to the whole return. A second earner should not run this page as if the $5,820 were still unused.'
        ]
      },
      {
        title: 'A $15,000 wage, and a wage above $200,000',
        paragraphs: [
          'At $15,000 single, Oregon taxable income is $12,090.00 and Oregon tax is $738.38, still inside the 8.75% band because $12,090 is just above $11,400. Federal tax is $0.00 because the federal deduction covers the wage. Social Security is $930.00 and Medicare is $217.50. Annual take-home is $13,114.12, and the headline is $504.39 every two weeks.',
          'At $210,000 single, paid monthly, Oregon taxable income is $207,090.00 and the 9.9% band applies. Oregon tax is $18,744.91. Additional Medicare Tax is $90.00, on the $10,000 above $200,000. Social Security stops at the $184,500 wage base and is $11,439.00. The monthly headline is $11,462.26. The federal subtraction cap has already phased out at this wage in the withholding bulletin, which is one more reason this high-wage row is only a bracket estimate.'
        ]
      }
    ],
    table: {
      heading: '2026 Oregon estimates for selected wages',
      caption: 'Oregon tax is the bracket tax after the Oregon standard deduction and a traditional 401(k), with no federal tax subtraction and no credits. Take-home is annual wages minus federal tax, FICA, Oregon tax, and the deferral. The two-week or monthly figure is that take-home divided by the number of pays.',
      headers: ['Wage and status', 'Oregon taxable income', 'Oregon tax', 'Annual take-home', 'Headline'],
      rows: [
        ['$65,000 single', '$62,090.00', '$5,113.38', '$49,294.12', '$1,895.93 / two weeks'],
        ['$65,000 single, $6,500 401(k)', '$55,590.00', '$4,544.63', '$44,142.87', '$1,697.80 / two weeks'],
        ['$65,000 joint', '$59,180.00', '$4,540.25', '$52,047.25', '$2,001.82 / two weeks'],
        ['$15,000 single', '$12,090.00', '$738.38', '$13,114.12', '$504.39 / two weeks'],
        ['$210,000 single', '$207,090.00', '$18,744.91', '$137,547.09', '$11,462.26 / month']
      ]
    },
    limitsHeading: 'What this Oregon estimate leaves out',
    limits: [
      'The federal income-tax subtraction is the largest omission. Publication OR-ESTIMATE and the withholding formula both reduce Oregon income by federal tax, subject to a cap and a phase-out. The 2026 federal payroll bulletin sets that withholding cap at $8,750 before it phases out above $125,000 single and above $250,000 joint. This page does not subtract it, so the Oregon tax is higher than a stub that does. On the $65,000 single sample, federal tax is $5,620.00, which is under that cap. A return that subtracts it would tax a smaller Oregon base than $62,090.',
      'The $263-per-exemption credit in the 2026 withholding formula is not applied. This form does not ask how many Oregon allowances you claim. The extra standard deduction for age 65 or blindness is not applied. A single filer with three or more allowances would get a $5,820 withholding deduction rather than $2,910. Itemized deductions are not applied.',
      'The statewide transit tax is one-tenth of one percent of wages and is an employee withholding. It is not subtracted. TriMet, Lane Transit, and other transit-district payroll taxes are generally employer taxes and are not in this cheque either. Metro supportive housing and Multnomah County preschool taxes are local income taxes. They are omitted. A Portland wage can be materially lower than this statewide estimate.',
      'Federal tax and FICA follow the same 2026 wage-only model as the other state paycheck pages. They are not a full Form 1040. A second job, a spouse’s income on a joint return, and investment income are absent. A Roth 401(k) should not be typed in the deferral box.'
    ],
    disclaimer: 'This Oregon paycheck is a 2026 bracket estimate on one wage. It is not an employer stub, an OR-40, or tax advice. The federal tax subtraction and local taxes are omitted on purpose and can change the result.',
    faqs: [
      {
        q: 'How much Oregon tax does this estimate charge on $65,000 single?',
        a: '$5,113.38. Taxable income is $62,090.00 after the $2,910 deduction. The two-week headline is $1,895.93, and annual take-home is $49,294.12. Federal tax is $5,620.00, Social Security is $4,030.00, and Medicare is $942.50. The federal tax subtraction is not in that $5,113.38.'
      },
      {
        q: 'Why is this Oregon tax higher than withholding that subtracts federal tax?',
        a: 'Because this page taxes wages after the 401(k) and the Oregon standard deduction only. Oregon withholding subtracts federal tax withheld, up to $8,750 in the 2026 federal payroll bulletin, and that cap then phases out. On $65,000 single the federal tax in this estimate is $5,620.00. A formula that subtracts it uses a smaller Oregon base than $62,090.'
      },
      {
        q: 'Does a traditional 401(k) reduce Oregon tax on this page?',
        a: 'Yes. A $6,500 deferral on $65,000 single cuts Oregon tax from $5,113.38 to $4,544.63, a difference of $568.75, which is 8.75% of $6,500. Federal tax falls from $5,620.00 to $4,840.00. Social Security and Medicare stay $4,030.00 and $942.50. The two-week headline becomes $1,697.80. A Roth amount should not be entered.'
      },
      {
        q: 'What Oregon taxes are left out of the $1,895.93 paycheck?',
        a: 'The 0.1% statewide transit tax, employer transit-district taxes such as TriMet, and Portland-area local income taxes. The $263 exemption credit is also left out. The $1,895.93 figure is federal income tax, Social Security, Medicare, and the state bracket tax only.'
      },
      {
        q: 'Which Oregon standard deduction does a single filer get here?',
        a: '$2,910, the 2026 withholding amount for fewer than three allowances. Joint filers get $5,820. A single filer with three or more allowances is not given the larger deduction, because the form does not ask for an allowance count. The federal $16,100 deduction is used only for the federal tax.'
      }
    ],
    relatedLinks: [
      { slug: 'colorado-paycheck-calculator', label: 'Colorado paycheck calculator for 2026', note: 'At $65,000 single, Colorado tax is $2,151.60 at 4.40% and the two-week headline is $2,009.84. Oregon is $5,113.38 and $1,895.93, without the federal tax subtraction.' },
      { slug: 'minnesota-paycheck-calculator', label: 'Minnesota paycheck calculator for 2026', note: 'The same wage is $2,896.61 of Minnesota tax after a $15,300 deduction and $1,981.19 every two weeks. Minnesota’s deduction is not Oregon’s $2,910.' },
      { slug: '401k-contribution-calculator', label: '2026 401(k) contribution calculator', note: 'Check a deferral against the $24,500 limit. On this page a traditional deferral reduces federal tax and Oregon tax. It does not reduce FICA.' }
    ]
  },
  'minnesota-paycheck-calculator': {
    title: 'Minnesota Paycheck Calculator 2026 | ClearCalc',
    h1: 'Minnesota Paycheck Calculator for 2026',
    description: 'Estimate a 2026 Minnesota paycheck after federal tax and Minnesota’s 5.35% to 9.85% brackets. At $65,000 single, Minnesota tax is $2,896.61 and the two-week take-home is $1,981.19.',
    intro: [
      'This Minnesota paycheck calculator estimates federal income tax, Social Security, Medicare, and Minnesota income tax on a 2026 wage. The Department of Revenue brackets for a single filer are 5.35% to $33,310, 6.80% to $109,430, 7.85% to $203,150, and 9.85% above that. Joint brackets are 5.35% to $48,700, 6.80% to $193,480, 7.85% to $337,930, and 9.85% above that. Minnesota’s own standard deduction is $15,300 single and $30,600 married filing jointly. It is not the federal $16,100 or $32,200.',
      'Minnesota taxable income here is the wage, minus a traditional 401(k), minus that Minnesota deduction. The sample is $65,000, single, paid every two weeks, with no 401(k). Taxable income is $49,700.00. The first $33,310 is taxed at 5.35% and the rest, $16,390, at 6.80%. The combined tax rounds to $2,896.61. Federal tax is $5,620.00, Social Security is $4,030.00, and Medicare is $942.50. Annual take-home is $51,510.89, and the headline is $1,981.19 every two weeks.',
      'Credits are not applied. The working family credit, the marriage credit, and the child and dependent care credit can lower a real return. This page stops at the brackets and the standard deduction. Minnesota has no general local wage tax in this estimate. Colorado on the same $65,000 single wage charges $2,151.60 and pays $52,255.90 for the year. The $745.01 gap is the state tax, $2,896.61 minus $2,151.60. Massachusetts on that wage is $3,030.00 and $1,976.06 every two weeks.'
    ],
    steps: [
      'Enter annual gross wages in US dollars. The sample is 65000. Other income is not added, so the brackets see only this wage after the 401(k) and the Minnesota deduction.',
      'Choose single or married filing jointly, and the pay frequency. Joint uses the $30,600 deduction on this one wage. Do not run a second salary through the joint deduction as if it were still available.',
      'Enter a traditional 401(k) deferral to remove it from both federal and Minnesota income. The 2026 cap is $24,500. A Roth contribution should not be entered. Social Security and Medicare are computed on gross wages either way.',
      'Press Calculate. The headline is one pay period. Minnesota taxable income is listed so you can see the $15,300 or $30,600 deduction before the brackets.'
    ],
    howHeading: 'How a 2026 Minnesota paycheck is estimated',
    howItWorks: [
      'Federal taxable income is the wage minus the 401(k) minus the federal standard deduction. On $65,000 single that is $48,900 and federal tax is $5,620.00. Minnesota taxable income is a different subtraction: $65,000 minus $15,300 is $49,700. The federal deduction is not used twice, and the Minnesota deduction is not used for the federal tax. Social Security is $4,030.00 and Medicare is $942.50. Additional Medicare Tax is $0.00 until wages pass $200,000.',
      'The $49,700 sits in the second single bracket. Tax is 5.35% of $33,310 plus 6.80% of $16,390. That sum is $2,896.605 before the final cent rounding, and the calculator shows $2,896.61. A joint $65,000 wage uses the $30,600 deduction and leaves $34,400, which is entirely inside the 5.35% joint band that runs to $48,700. Joint Minnesota tax is $1,840.40. Federal tax is $3,440.00. The two-week headline is $2,105.66, and annual take-home is $54,747.10.',
      'A $6,500 traditional deferral moves single taxable income from $49,700 to $43,200. Both amounts are above $33,310 and below $109,430, so the Minnesota tax falls by 6.80% of $6,500, from $2,896.61 to $2,454.61. The difference is $442.00. Federal tax falls from $5,620.00 to $4,840.00. Annual take-home is $46,232.89, and the headline is $1,778.19 every two weeks. At $15,000 single the Minnesota deduction is limited to the wage, taxable income is $0.00, and Minnesota tax is $0.00. Weekly take-home is $266.39 after $930.00 of Social Security and $217.50 of Medicare.'
    ],
    formula: 'Minnesota taxable income = wages − traditional 401(k) − Minnesota standard deduction\nSingle deduction = $15,300. Joint deduction = $30,600. The deduction cannot exceed the wage after the 401(k).\nSingle brackets: 5.35% to $33,310; 6.80% to $109,430; 7.85% to $203,150; 9.85% above\nJoint brackets: 5.35% to $48,700; 6.80% to $193,480; 7.85% to $337,930; 9.85% above\nFederal tax uses the federal standard deduction of $16,100 single or $32,200 joint\nCredits are not applied',
    formulaNotes: [
      'Bracket tax is computed in cents and rounded once at the end. The $65,000 single case is $2,896.605 before that rounding, which is why the displayed tax is $2,896.61 rather than a truncated $2,896.60.',
      'A traditional 401(k) reduces Minnesota income because this estimate starts from wages the way federal adjusted gross income starts, before the Minnesota deduction. A Roth deferral does not belong in the field. The form will not know if you typed one anyway.'
    ],
    examplesHeading: 'Worked 2026 Minnesota paycheck examples',
    examples: [
      {
        title: '$65,000 single, every two weeks',
        paragraphs: [
          'Minnesota taxable income is $49,700.00 and Minnesota tax is $2,896.61. Federal tax is $5,620.00, Social Security is $4,030.00, and Medicare is $942.50. Annual take-home is $51,510.89. The headline is $1,981.19 / two weeks.',
          'Colorado’s state tax on that wage is $2,151.60, so Colorado’s annual take-home is $745.01 higher, at $52,255.90. Massachusetts charges $3,030.00 and the two-week headline is $1,976.06. The federal and FICA lines match across the three pages when the deferral is zero. The state deduction and the state brackets are what move the cheque.'
        ]
      },
      {
        title: 'A $6,500 deferral, and a joint $65,000 wage',
        paragraphs: [
          'The deferral cuts Minnesota tax from $2,896.61 to $2,454.61. Federal tax falls from $5,620.00 to $4,840.00. The headline is $1,778.19 every two weeks, and annual take-home is $46,232.89. The $442.00 state-tax difference is 6.80% of $6,500, because both taxable incomes sit in that bracket.',
          'Joint, with no deferral, Minnesota tax is $1,840.40 on $34,400.00. That is 5.35% with nothing in the 6.80% band, because the joint 5.35% band runs through $48,700. The headline is $2,105.66 every two weeks. The $30,600 deduction is the return’s deduction, not a per-spouse deduction.'
        ]
      },
      {
        title: 'A wage inside the standard deduction, and a wage in the top bracket',
        paragraphs: [
          'At $15,000 single the deduction applied is $15,000.00, not $15,300.00, because the deduction cannot exceed the wage. Minnesota tax is $0.00. Federal tax is $0.00. The weekly headline is $266.39 after FICA. Choosing weekly rather than every two weeks changes only the split of the same $13,852.50 annual take-home.',
          'At $250,000 single, paid monthly, Minnesota taxable income is $234,700.00. That crosses $203,150, so part of the wage is taxed at 9.85%. Minnesota tax is $17,422.94. Additional Medicare Tax is $450.00. Social Security is $11,439.00, capped by the wage base. The monthly headline is $13,813.26. No credit reduces that $17,422.94.'
        ]
      }
    ],
    table: {
      heading: '2026 Minnesota estimates for selected wages',
      caption: 'Minnesota tax is the bracket tax after the Minnesota standard deduction and a traditional 401(k). Credits are not included. The headline splits annual take-home by the pay frequency of that row.',
      headers: ['Wage and status', 'Minnesota taxable income', 'Minnesota tax', 'Annual take-home', 'Headline'],
      rows: [
        ['$65,000 single', '$49,700.00', '$2,896.61', '$51,510.89', '$1,981.19 / two weeks'],
        ['$65,000 single, $6,500 401(k)', '$43,200.00', '$2,454.61', '$46,232.89', '$1,778.19 / two weeks'],
        ['$65,000 joint', '$34,400.00', '$1,840.40', '$54,747.10', '$2,105.66 / two weeks'],
        ['$15,000 single', '$0.00', '$0.00', '$13,852.50', '$266.39 / week'],
        ['$250,000 single', '$234,700.00', '$17,422.94', '$165,759.06', '$13,813.26 / month']
      ]
    },
    limitsHeading: 'What this Minnesota estimate leaves out',
    limits: [
      'The working family credit, the marriage credit, the child and dependent care credit, the long-term care credit, and other nonrefundable or refundable credits are not applied. A household that qualifies can owe less than the bracket tax on this page. The form does not ask for children, rent, or property tax.',
      'Itemized deductions are not applied. The standard deduction is used even when itemizing would be larger. The additional amount for age or blindness is not added. Federal taxable income and Minnesota taxable income are computed separately, and only the wage and the 401(k) go into both.',
      'There is no general city wage tax in this result. A local sales tax is not a paycheck withholding. The sales tax page can add a Minnesota statewide rate to a purchase. It does not belong in this wage calculation.',
      'A second job can push the combined wage into another bracket and can change Social Security once the wage base is reached. A joint return with two incomes should not claim the $30,600 deduction twice. This page sees one salary.'
    ],
    disclaimer: 'This Minnesota paycheck is a 2026 bracket estimate on one wage. It is not a Department of Revenue assessment, an employer stub, or tax advice. Credits are omitted.',
    faqs: [
      {
        q: 'How much Minnesota tax is in this estimate on $65,000 single?',
        a: '$2,896.61. Taxable income is $49,700.00 after the $15,300 deduction. The two-week headline is $1,981.19, and annual take-home is $51,510.89. Federal tax on that wage is $5,620.00. The 6.80% rate applies only to the slice above $33,310, not to the whole $49,700.'
      },
      {
        q: 'Why does Minnesota use a $15,300 deduction instead of the federal $16,100?',
        a: 'Because Minnesota has its own 2026 standard deduction: $15,300 single and $30,600 joint. The federal $16,100 is used only to compute federal income tax. On $65,000 single the two taxable-income figures are $49,700 for Minnesota and $48,900 for federal tax.'
      },
      {
        q: 'Does this Minnesota paycheck include a local wage tax?',
        a: 'No. The result is federal income tax, Social Security, Medicare, and Minnesota income tax. There is no city wage line. Credits that a return might claim are also absent, so the bracket tax can be higher than the tax after those credits.'
      },
      {
        q: 'What happens to Minnesota tax when wages are $15,000?',
        a: 'Minnesota tax is $0.00. The standard deduction is capped at the $15,000 wage, so taxable income is $0.00. Federal tax is also $0.00. Social Security is $930.00 and Medicare is $217.50. Weekly take-home is $266.39.'
      },
      {
        q: 'Does a $6,500 traditional 401(k) reduce the Minnesota tax?',
        a: 'Yes. On $65,000 single it cuts Minnesota tax from $2,896.61 to $2,454.61. The $442.00 difference is 6.80% of $6,500, because taxable income stays inside that bracket. Federal tax falls from $5,620.00 to $4,840.00. FICA does not change. The two-week headline is $1,778.19.'
      }
    ],
    relatedLinks: [
      { slug: 'colorado-paycheck-calculator', label: 'Colorado paycheck calculator for 2026', note: 'At $65,000 single, Colorado tax is $2,151.60 and annual take-home is $52,255.90. Minnesota tax is $2,896.61 and annual take-home is $51,510.89.' },
      { slug: 'massachusetts-paycheck-calculator', label: 'Massachusetts paycheck calculator for 2026', note: 'The same wage is $3,030.00 of Massachusetts tax and $1,976.06 every two weeks. Massachusetts uses a $4,400 exemption, not a $15,300 deduction.' },
      { slug: 'oregon-paycheck-calculator', label: 'Oregon paycheck calculator for 2026', note: 'Oregon tax on that wage is $5,113.38 after a $2,910 deduction, and the estimate does not subtract federal tax. Minnesota’s $15,300 deduction is a different base.' }
    ]
  },
  'yukon-take-home-pay-calculator': {
    title: 'Yukon Take-Home Pay Calculator 2026 | ClearCalc',
    h1: 'Yukon Take-Home Pay Calculator for 2026',
    description: 'Estimate 2026 Yukon take-home pay after federal tax, Yukon tax from 6.4% to 15%, CPP, and EI. At $70,000 the monthly headline is $4,521.58 and Yukon tax is $3,383.07.',
    intro: [
      'This Yukon take-home pay calculator estimates federal income tax, Yukon income tax, Canada Pension Plan contributions, and Employment Insurance on a 2026 salary. Yukon’s rates, from the Canada.ca 2026 territorial table and CRA Chart 2 for the Yukon payroll tables, are 6.4% to $58,523, 9% to $117,045, 10.9% to $181,440, 12.8% to $500,000, and 15% above that. The basic personal amount matches the federal amount: $16,452 before the phase-out that starts above $181,440, and $14,829 at the bottom of that phase-out.',
      'The federal tax, the CPP base, the CPP enhancement, CPP2, and EI come from the same helper the other provincial and territorial pages use. Yukon is not Quebec, so the Quebec pension plan, the Quebec parental insurance plan, and the reduced Quebec EI rate are not used. The sample salary is $70,000. Federal tax is $7,278.19. Yukon tax is $3,383.07. CPP, including CPP2, is $3,956.75. EI is $1,123.07. Annual take-home is $54,258.92, and the headline is $4,521.58 / month.',
      'The Northwest Territories page, on the same $70,000 and the same federal, CPP, and EI lines, charges $3,197.57 of territorial tax and pays $4,537.04 a month. The $185.50 tax gap is why Yukon’s month is $15.46 lower. The Yukon credit modeled here is 6.4% of the basic personal amount, the CPP base contribution, and EI. On $70,000 that credit is $1,335.48. The Canada employment amount is already inside the federal credit. It is not credited again against Yukon tax. The first-time home buyers’ tax credit and other territorial credits are not applied.'
    ],
    steps: [
      'Enter the annual gross salary in Canadian dollars. The sample is 70000. The form has no filing-status menu. The credits are the single basic personal amount plus the CPP base and EI that the payroll helper computes.',
      'Press Calculate. The headline is one twelfth of annual take-home, rounded to the cent. A separate line shows the same take-home divided by 26.',
      'Read the Yukon tax and the credit line together. The credit is subtracted from bracket tax and cannot reduce it below zero.',
      'Do not use this page for a Quebec salary. QPP, QPIP, and the federal abatement are a different payroll system, on the Quebec page.'
    ],
    howHeading: 'How 2026 Yukon tax sits on the shared federal payroll',
    howItWorks: [
      'The shared payroll helper taxes federal income on salary minus the enhanced CPP portions, applies the federal basic personal amount, and credits CPP base, EI, and the Canada employment amount at 14%. On $70,000 that federal tax is $7,278.19, the federal basic amount is $16,452.00, CPP including CPP2 is $3,956.75, and EI is $1,123.07. Those four figures match the Northwest Territories page at the same salary. Yukon does not recalculate them.',
      'Yukon bracket tax uses 6.4%, 9%, 10.9%, 12.8%, and 15% on the same taxable income the helper used for federal tax. The credit is 6.4% of the Yukon basic amount plus CPP base plus EI. At $70,000 the basic amount is still the full $16,452.00, the credit is $1,335.48, and Yukon tax after the credit is $3,383.07. Take-home is the salary minus CPP, CPP2, EI, federal tax, and Yukon tax, which is $54,258.92. One twelfth is $4,521.58. One twenty-sixth is $2,086.88.',
      'The basic amount phases down once taxable income is above $181,440, using the same formula as the federal amount, because the 2026 Yukon TD1 uses the same $16,452 maximum and $14,829 minimum. At $200,000 the amount applied is $16,084.75 on both the federal line and the Yukon line, and Yukon tax is $16,936.38. The monthly headline is $11,534.80. At $600,000 the amount is the $14,829.00 floor, Yukon tax is $70,391.96, and the 15% rate has been reached because taxable income is above $500,000. The monthly headline is $29,597.54. At $30,000, Yukon tax is $734.86 and the monthly headline is $2,150.17. No low-income credit is added at that salary.'
    ],
    formula: 'Federal tax, CPP, CPP2, and EI come from the shared 2026 Canada payroll helper\nYukon taxable income is that helper’s taxable income\nYukon basic amount = the federal basic personal amount, $16,452 down to $14,829\nYukon credit = 6.4% × (Yukon basic amount + CPP base + EI)\nYukon tax = bracket tax − credit, not below zero\nBrackets: 6.4% to $58,523; 9% to $117,045; 10.9% to $181,440; 12.8% to $500,000; 15% above\nTake-home = salary − CPP − CPP2 − EI − federal tax − Yukon tax',
    formulaNotes: [
      'The Canada employment amount reduces federal tax inside the helper. It is not multiplied by 6.4% on this page. Adding it again would understate Yukon tax.',
      'The monthly headline is annual take-home divided by 12 and then rounded. The two-week line divides by 26 and rounds separately. Twelve times the monthly headline can differ by a few cents from the annual figure.'
    ],
    examplesHeading: 'Worked 2026 Yukon examples',
    examples: [
      {
        title: '$70,000, beside the Northwest Territories',
        paragraphs: [
          'Federal tax is $7,278.19, Yukon tax is $3,383.07, CPP including CPP2 is $3,956.75, and EI is $1,123.07. Annual take-home is $54,258.92. The headline is $4,521.58 / month. Every two weeks is $2,086.88. The Yukon credit is $1,335.48, and the basic amount is $16,452.00.',
          'Northwest Territories tax on the same salary is $3,197.57, and that monthly headline is $4,537.04. Federal tax, CPP, and EI match. The $185.50 difference in territorial tax is the whole difference in annual take-home. Yukon’s lowest rate is 6.4% and the Northwest Territories lowest rate is 5.9%, on different brackets and a different basic amount.'
        ]
      },
      {
        title: '$30,000, where the credit does more of the work',
        paragraphs: [
          'Federal tax is $1,397.37 and Yukon tax is $734.86. CPP including CPP2 is $1,576.75 and EI is $489.00. Annual take-home is $25,802.02. The headline is $2,150.17 / month. The credit is $1,168.18, still at 6.4% of the full $16,452 basic amount plus the smaller CPP base and EI.',
          'The first-time home buyers’ tax credit is not what produced that $734.86. No territorial credit other than the basic amount, CPP base, and EI was subtracted. A return that claims more will owe less than this estimate.'
        ]
      },
      {
        title: '$200,000 and $600,000, where the basic amount changes',
        paragraphs: [
          'At $200,000 the basic amount on both the federal line and the Yukon line is $16,084.75. Yukon tax is $16,936.38 and the credit is $1,326.55. The monthly headline is $11,534.80. The 12.8% band is in use. The 15% band is not, because the $500,000 threshold has not been passed.',
          'At $600,000 the basic amount is $14,829.00. Yukon tax is $70,391.96 and the credit is $1,246.18. CPP is still the annual maximum, $4,646.45 including CPP2, and EI is still $1,123.07. The monthly headline is $29,597.54. The 15% rate applies to the slice above $500,000. It does not apply to the whole salary.'
        ]
      }
    ],
    table: {
      heading: '2026 Yukon take-home on selected salaries',
      caption: 'Federal tax, CPP, and EI use the shared Canada helper. Yukon tax is the territorial brackets minus the 6.4% credit. Other territorial credits are not included. The monthly figure is annual take-home divided by 12.',
      headers: ['Salary', 'Federal tax', 'Yukon tax', 'Annual take-home', 'Monthly'],
      rows: [
        ['$30,000', '$1,397.37', '$734.86', '$25,802.02', '$2,150.17'],
        ['$70,000', '$7,278.19', '$3,383.07', '$54,258.92', '$4,521.58'],
        ['$200,000', '$38,876.54', '$16,936.38', '$138,417.56', '$11,534.80'],
        ['$600,000', '$168,667.99', '$70,391.96', '$355,170.53', '$29,597.54']
      ]
    },
    limitsHeading: 'What this Yukon estimate leaves out',
    limits: [
      'The Canada employment amount is in the federal credit only. Age, pension, disability, caregiver, tuition, and the Yukon first-time home buyers’ tax credit are not applied. A filer who can claim them will owe less territorial tax than this page shows.',
      'The basic personal amount phases with taxable income from this salary alone. Other income can push the phase-out further, or a lower income from another source is simply absent. The page assumes the salary is the income.',
      'CPP and EI use the 2026 employee rates and maximums already in the shared helper, including the $3,500 basic exemption, the YMPE, the YAMPE, and the EI maximum. A worker who is exempt from CPP or EI, or who has already contributed the maximum at another job, will not match. Quebec payroll is a different calculator.',
      'The monthly and two-week figures are even splits of the annual total. A real pay stub can use a different period count, a bonus, or a mid-year hire. Twelve times the displayed month can be a few cents off the annual line because each line is rounded on its own.'
    ],
    disclaimer: 'This Yukon figure is a 2026 estimate for one salary. It is not a CRA assessment, a TD1, or tax advice. Territorial credits other than the basic amount, CPP base, and EI are omitted.',
    faqs: [
      {
        q: 'What are the 2026 Yukon income tax brackets?',
        a: '6.4% on taxable income to $58,523, 9% to $117,045, 10.9% to $181,440, 12.8% to $500,000, and 15% above that. The thresholds match the Canada.ca 2026 territorial table. A $70,000 salary is partly in the 9% band. The 15% rate is not reached on that sample.'
      },
      {
        q: 'How much is Yukon take-home pay on a $70,000 salary?',
        a: '$4,521.58 a month, from $54,258.92 for the year. Yukon tax is $3,383.07. Federal tax is $7,278.19. CPP including CPP2 is $3,956.75. EI is $1,123.07. Every two weeks is $2,086.88.'
      },
      {
        q: 'Why is the Yukon basic personal amount $16,452?',
        a: 'The 2026 Yukon TD1 uses the same basic amount as the federal TD1: $16,452, phasing down toward $14,829 once income is above $181,440. At $70,000 the full $16,452.00 is applied, and the 6.4% credit that includes CPP base and EI is $1,335.48. At $600,000 the amount applied is $14,829.00.'
      },
      {
        q: 'How does Yukon compare with the Northwest Territories at $70,000?',
        a: 'Federal tax, CPP, and EI are the same: $7,278.19, $3,956.75, and $1,123.07. Yukon tax is $3,383.07 and Northwest Territories tax is $3,197.57. Annual take-home is $54,258.92 here and $54,444.42 there. The monthly headlines are $4,521.58 and $4,537.04.'
      },
      {
        q: 'Is the Canada employment amount credited against Yukon tax?',
        a: 'No. It is inside the federal credit from the shared payroll helper. The Yukon credit on this page is 6.4% of the basic personal amount, the CPP base contribution, and EI. Crediting the employment amount a second time would understate the territorial tax.'
      }
    ],
    relatedLinks: [
      { slug: 'northwest-territories-take-home-pay-calculator', label: 'Northwest Territories take-home pay calculator for 2026', note: 'Same federal tax, CPP, and EI at $70,000. Territorial tax is $3,197.57 rather than $3,383.07, and the monthly headline is $4,537.04.' },
      { slug: 'british-columbia-take-home-pay-calculator', label: 'British Columbia take-home pay calculator for 2026', note: 'The same federal, CPP, and EI helper, with B.C. brackets and the B.C. tax reduction instead of the Yukon 6.4% credit.' },
      { slug: 'quebec-take-home-pay-calculator', label: 'Quebec take-home pay calculator for 2026', note: 'QPP, QPIP, the 1.30% EI rate, and the 16.5% abatement. At $70,000 the monthly headline is $4,253.73. That payroll system is not used for Yukon.' }
    ]
  },
  'northern-territory-stamp-duty-calculator': {
    title: 'Northern Territory Stamp Duty Calculator 2026 | ClearCalc',
    h1: 'Northern Territory Stamp Duty Calculator',
    description: 'Estimate 2026 Northern Territory conveyance duty. A $500,000 purchase is $23,928.60. A $750,000 purchase is $37,125.00. There is no first-home duty exemption on this scale.',
    intro: [
      'This Northern Territory stamp duty calculator estimates conveyance duty on a dutiable value for a residential purchase in 2026. The scale is Schedule 1 of the Stamp Duty Act 1978. Up to $525,000, duty is D = (0.06571441 × V²) + 15V, where V is the dutiable value divided by 1,000. The result is rounded to the nearest cent. Above $525,000 and under $3,000,000, duty is 4.95% of the whole value. From $3,000,000 up to but not including $5,000,000, duty is 5.75%. From $5,000,000, duty is 5.95%.',
      'The sample value is $500,000. V is 500. The unrounded duty is $23,928.6025, and the headline is $23,928.60. To the nearest dollar that is about $23,929. This page keeps the cent. A $750,000 value is over the formula band, so duty is 4.95% of the whole price, $37,125.00. A $1,000,000 value is $49,500.00. Those two percentage results are exact.',
      'There is no first-home duty concession on this scale. A first-home buyer pays the same duty as any other buyer. A first-home owner grant, if one is available for the purchase, is a separate payment and is not subtracted here. Pretending the duty is $0.00 would be a different program. There is no foreign purchaser surcharge. The ACT home-buyer concession, which can be $0.00 for an eligible contract on or after 1 July 2026, is a different statute.'
    ],
    steps: [
      'Enter the dutiable value in Australian dollars. The sample is 500000. The form has no buyer menu, because buyer type does not change this duty.',
      'Press Calculate. The headline is the duty in Australian dollars. The band line says whether the formula or one of the flat percentages was used.',
      'If the value is $525,000 or below, read the unrounded formula result as well. The headline is that amount to the nearest cent.',
      'Do not subtract a grant in your head and retype the price. The grant is not a reduction of dutiable value unless the assessment actually works that way, and this page does not model one.'
    ],
    howHeading: 'How Northern Territory conveyance duty is banded',
    howItWorks: [
      'For a value up to $525,000 the calculator sets V = dollars / 1,000 and evaluates 0.06571441 × V² + 15 × V. At $500,000, V is 500, V² is 250,000, and the product 0.06571441 × 250,000 is 16,428.6025. Adding 15 × 500, which is 7,500, gives 23,928.6025. Rounded to the cent, that is $23,928.60. At $100,000, V is 100 and the unrounded duty is $2,157.1441, so the headline is $2,157.14. At exactly $525,000, V is 525 and the headline is $25,987.53, from an unrounded $25,987.5343. The formula is still used at that dollar. The 4.95% rate starts on the next cent.',
      'Above $525,000 the percentage applies to the whole dutiable value, not to the slice above the threshold. $525,000.01 is $25,987.50, which is 4.95% of that price. $750,000 is $37,125.00. $1,000,000 is $49,500.00. $2,999,999.99 is still in the 4.95% band. At $3,000,000 the rate becomes 5.75% of the whole value, which is $172,500.00. At $5,000,000 the rate becomes 5.95%, which is $297,500.00. Crossing $3,000,000 or $5,000,000 changes the rate on every dollar, not only on the dollars above the line.',
      'Nothing in those bands asks whether the buyer has owned a home before. The detail line says a first-home buyer pays the same duty, and that a grant is not subtracted. It also says there is no foreign surcharge. An $800,000 purchase is 4.95% of $800,000, which is $39,600.00. ACT owner-occupier duty on $800,000 is $22,158.00 on that territory’s scale, and an eligible ACT home buyer can be at $0.00. Those are not Northern Territory results.'
    ],
    formula: 'If value ≤ $525,000: V = value / 1,000 and D = (0.06571441 × V²) + 15V, rounded to the nearest cent\nIf $525,000 < value < $3,000,000: duty = 4.95% of the whole value\nIf $3,000,000 ≤ value < $5,000,000: duty = 5.75% of the whole value\nIf value ≥ $5,000,000: duty = 5.95% of the whole value\nNo first-home exemption and no foreign surcharge are applied',
    formulaNotes: [
      'The quadratic constant is the Schedule 1 coefficient 0.06571441. Small changes in that coefficient would move the cent. This page uses the figure as published in the schedule description used for the 2026 scale.',
      '$23,928.6025 rounds to $23,928.60, not to $23,929. A nearest-dollar quote of about $23,929 is the same formula read one step coarser. Comparisons in this article use the cent.'
    ],
    examplesHeading: 'Worked Northern Territory duty examples',
    examples: [
      {
        title: '$500,000, the formula band',
        paragraphs: [
          'Dutiable value 500000. The calculator shows $23,928.60. The band line gives V as 500 and the unrounded duty as $23,928.6025. A first-home buyer typing the same value gets the same headline. There is no second result hiding behind a concession box.',
          'At $100,000 the headline is $2,157.14. At $525,000 it is $25,987.53. Both still use the formula. One cent over $525,000 leaves the formula.'
        ]
      },
      {
        title: '$750,000 and $1,000,000 at 4.95%',
        paragraphs: [
          'Value 750000. The calculator shows $37,125.00. That is 0.0495 × 750,000, with no remainder. Value 1000000. The calculator shows $49,500.00. The band line says the value is over $525,000 and under $3,000,000.',
          'An $800,000 value is $39,600.00 on this page. ACT owner-occupier duty at $800,000 is $22,158.00, and an eligible ACT home buyer with a contract on or after 1 July 2026 pays $0.00 there. Do not import that zero into a Darwin purchase.'
        ]
      },
      {
        title: 'The $3 million and $5 million rate changes',
        paragraphs: [
          'Value 3000000. The calculator shows $172,500.00, which is 5.75% of the whole $3,000,000. The band line says the 5.75% rate runs up to, but not including, $5,000,000. Just under $3,000,000, a value of $2,999,999.99 is still 4.95% and the duty is $148,500.00. The rate change is a step, not a marginal slice.',
          'Value 5000000. The calculator shows $297,500.00, which is 5.95% of $5,000,000. A foreign buyer does not add a surcharge on top of that figure on this page. A grant is still not subtracted.'
        ]
      }
    ],
    table: {
      heading: 'Northern Territory duty at selected values',
      caption: 'Each row is what this calculator displays for that dutiable value in 2026. The formula band is rounded to the cent. Percentage bands apply to the whole value. Buyer type does not change the row.',
      headers: ['Dutiable value', 'Band', 'Duty'],
      rows: [
        ['$100,000', 'Formula, V = 100', '$2,157.14'],
        ['$500,000', 'Formula, V = 500', '$23,928.60'],
        ['$525,000', 'Formula, V = 525', '$25,987.53'],
        ['$750,000', '4.95% of the whole value', '$37,125.00'],
        ['$1,000,000', '4.95% of the whole value', '$49,500.00'],
        ['$3,000,000', '5.75% of the whole value', '$172,500.00'],
        ['$5,000,000', '5.95% of the whole value', '$297,500.00']
      ]
    },
    limitsHeading: 'What this Northern Territory duty figure leaves out',
    limits: [
      'There is no first-home stamp duty concession in the calculation. A grant program is money paid separately, or a different assessment rule, and this form will not reduce the headline to $0.00 because the buyer is purchasing a first home. Eligibility for any grant has to be read from the program that pays it.',
      'There is no foreign purchaser surcharge to switch on. If a later amendment added one, this page would be wrong until it was updated. The 2026 scale used here does not add one.',
      'The number you type is taken as the dutiable value. A contract price that is not the dutiable value, or a transaction that includes chattels the Office treats differently, will not match an assessment. Mortgages and leases are not this conveyance formula.',
      'Other states and territories use other Acts. ACT duty, South Australian duty, and Western Australian duty on this site are different scales with their own first-home rules. A $0.00 result on one of those pages is not a Northern Territory result. Amounts are Australian dollars.'
    ],
    disclaimer: 'This duty figure applies Schedule 1 of the Stamp Duty Act 1978 to a dutiable value you enter. It is not an assessment by the Territory Revenue Office, and it does not pay or calculate a first-home owner grant.',
    faqs: [
      {
        q: 'How much is Northern Territory duty on a $500,000 home?',
        a: '$23,928.60. V is 500, and (0.06571441 × 500²) + 15 × 500 equals $23,928.6025 before rounding to the cent. About $23,929 is the same result to the nearest dollar. A first-home buyer pays the same $23,928.60 on this page.'
      },
      {
        q: 'Is there a first-home stamp duty concession in this Northern Territory calculator?',
        a: 'No. The scale does not zero the duty for a first home. A first-home owner grant is a separate payment and is not subtracted. The form has no buyer menu because the duty would not change.'
      },
      {
        q: 'Why is Northern Territory duty on $750,000 exactly $37,125?',
        a: 'Because $750,000 is over $525,000 and under $3,000,000, so the duty is 4.95% of the whole value. 0.0495 × 750,000 is 37,125 with no remainder. $1,000,000 is $49,500.00 for the same reason.'
      },
      {
        q: 'What duty applies at $3,000,000 and at $5,000,000?',
        a: '$172,500.00 at $3,000,000, which is 5.75% of the whole value, and $297,500.00 at $5,000,000, which is 5.95%. Just under $3,000,000 the rate is still 4.95%. The new rate applies to every dollar, not only to the excess.'
      },
      {
        q: 'Does a foreign buyer pay extra Northern Territory conveyance duty here?',
        a: 'No. This scale has no foreign surcharge. The headline for a given dutiable value is the same for every buyer. A surcharge in another Australian state is that state’s calculator, not this one.'
      }
    ],
    relatedLinks: [
      { slug: 'act-stamp-duty-calculator', label: 'ACT stamp duty calculator', note: 'An $800,000 owner-occupier pays $22,158.00, and an eligible home buyer with a contract on or after 1 July 2026 pays $0.00. Northern Territory duty at $800,000 is $39,600.00, with no first-home exemption.' },
      { slug: 'western-australia-stamp-duty-calculator', label: 'Western Australia stamp duty calculator', note: 'A different scale, including a first home owner rate. It is not the Northern Territory formula and it is not 4.95% of a $750,000 value.' },
      { slug: 'south-australia-stamp-duty-calculator', label: 'South Australia stamp duty calculator', note: 'General duty at $600,000 is $26,830.00, and an eligible first buyer of a new home can pay $0.00 there. The Northern Territory page does not offer that zero.' }
    ]
  },
  'wallpaper-calculator': {
    title: 'Wallpaper Calculator: Rolls from Wall Area | ClearCalc',
    h1: 'Wallpaper Roll Calculator',
    description: 'Estimate wallpaper rolls from room length, width, and wall height, minus openings, plus a pattern waste percent. A 12 by 10 by 8 foot room with 36 square feet of openings, 10% waste, and a 56 square foot roll needs 7 rolls.',
    intro: [
      'This wallpaper calculator estimates how many rolls to buy for the walls of a rectangular room. Wall area is the perimeter times the height: 2 × (length + width) × height, in feet. Doors and windows come off that area. A pattern and waste percent is then added, and the result is divided by the usable square feet printed on the roll. The count is rounded up, because you cannot buy a fraction of a roll.',
      'The sample room is 12 feet by 10 feet, with 8 foot walls. The perimeter is 44 feet and the wall area is 352 square feet. Openings of 36 square feet leave 316. Ten percent waste makes 347.6 square feet. A roll that covers 56 square feet usable is 6.21 rolls, which rounds up to 7. The ceiling is not included. Paint for this room is a different page, and that page can include the ceiling.',
      'The waste percent is the allowance you choose for pattern match and for cuts. A random match may need less extra paper than a large drop match. This form does not ask for the repeat length in inches and then compute the drop. It uses the percent you type so the assumption stays visible. Coverage is whatever the roll label says, in square feet. A European roll sold in square metres has to be converted before you type it.'
    ],
    steps: [
      'Enter the room length, width, and wall height in feet. The sample is 12, 10, and 8. The ceiling is not papered, so height is the wall height only.',
      'Enter the door and window area in square feet. The sample is 36, about one 3 by 7 foot door plus a window. Use 0 if you are papering over the openings or have none.',
      'Enter the pattern and waste allowance as a percent from 0 to 100, and the usable coverage of one roll in square feet. The sample is 10% and 56 square feet. Use the coverage on the bolt you will buy, not a guess from another brand.',
      'Press Calculate. The headline is the number of rolls to buy. Exact rolls, before rounding up, are listed underneath.'
    ],
    howHeading: 'How wall area becomes a roll count',
    howItWorks: [
      'Perimeter is 2 × (length + width). Times height, that is the gross wall area. The sample is 2 × 22 × 8 = 352 square feet. Openings are subtracted once. They cannot be larger than the walls. Net area is 352 − 36 = 316. Waste of 10% multiplies by 1.10, which is 347.6. Dividing by 56 is 6.207, shown as 6.21 exact rolls, and the headline rounds up to 7.',
      'The same walls with no openings and no waste are 352 / 56 = 6.29 exact rolls, which still rounds up to 7. Removing the openings did not save a roll at this coverage. A 12 by 12 foot room with 8 foot walls, no openings, no waste, and a 48 square foot roll is 384 / 48 = 8 exactly, so the headline is 8 rolls and the exact line is 8.00. Rounding up does nothing when the division lands on an integer.',
      'A larger pattern allowance changes the count. A 15 by 12 foot room with 9 foot walls has a perimeter of 54 feet and a wall area of 486 square feet. Openings of 42 leave 444. Twenty percent waste makes 532.8. At 28 square feet a roll, that is 19.03 exact rolls and a headline of 20. The 28 square foot figure is a single-roll coverage you might see on a label. If your bolt says 56, type 56. The calculator will not double it for you.'
    ],
    formula: 'Wall area = 2 × (length + width) × height, in square feet\nNet area = wall area − openings\nArea with waste = net area × (1 + waste percent / 100)\nExact rolls = area with waste / coverage per roll\nRolls to buy = exact rolls rounded up\nOpenings cannot exceed the wall area\nWaste percent must be from 0 to 100\nThe ceiling is not included',
    formulaNotes: [
      'A tiny rounding error just below an integer is not pushed up to the next roll. The ceiling operation ignores a fraction of a millionth of a roll so that an exact 8.00 stays 8.',
      'Coverage is square feet per roll, as printed. If the label is in square metres, convert first. One square metre is about 10.764 square feet. This form does not do that conversion inside the coverage field.'
    ],
    examplesHeading: 'Worked wallpaper examples',
    examples: [
      {
        title: 'The 12 by 10 by 8 foot sample',
        paragraphs: [
          'Length 12, width 10, height 8, openings 36, waste 10, coverage 56. The calculator shows 7 rolls. Gross wall area is 352 square feet, net area is 316, the area with waste is 347.6, and the exact roll count is 6.21.',
          'The room paint calculator, on a 12 by 10 by 8 foot room, is counting gallons and can include the ceiling. It does not divide by 56 square feet. Seven rolls of wallpaper are not a gallon count, and a gallon count is not a roll count.'
        ]
      },
      {
        title: 'No waste, and an exact division',
        paragraphs: [
          'The same 12 by 10 by 8 walls with openings 0, waste 0, and coverage 56 are 352 square feet and 6.29 exact rolls, still 7 to buy. You do not save a roll by ignoring the 36 square feet of openings at this particular coverage.',
          'Length 12, width 12, height 8, openings 0, waste 0, coverage 48. Wall area is 384 square feet. Exact rolls are 8.00 and the headline is 8 rolls. When the paper covers the walls with nothing left over, the rounded count and the exact count match.'
        ]
      },
      {
        title: 'A 20% pattern allowance on a taller room',
        paragraphs: [
          'Length 15, width 12, height 9, openings 42, waste 20, coverage 28. Wall area is 486 square feet, net area is 444, and the area with waste is 532.8. Exact rolls are 19.03. The headline is 20 rolls.',
          'If the same 532.8 square feet were covered by a 56 square foot roll, the exact count would be half of 19.03, and the rolls to buy would change. Type the coverage on the roll in your hand. A 20% allowance is a large drop match, not a rule. A straight match might be closer to the sample’s 10%.'
        ]
      }
    ],
    table: {
      heading: 'Rolls for selected rooms',
      caption: 'Each row is what this calculator displays. Area with waste is the net wall area times one plus the waste percent. Rolls to buy are rounded up. The ceiling is not in any row.',
      headers: ['Room', 'Openings', 'Waste', 'Coverage', 'Exact rolls', 'Rolls to buy'],
      rows: [
        ['12 × 10 × 8 ft', '36 sq ft', '10%', '56 sq ft', '6.21', '7'],
        ['12 × 10 × 8 ft', '0 sq ft', '0%', '56 sq ft', '6.29', '7'],
        ['12 × 12 × 8 ft', '0 sq ft', '0%', '48 sq ft', '8.00', '8'],
        ['15 × 12 × 9 ft', '42 sq ft', '20%', '28 sq ft', '19.03', '20']
      ]
    },
    limitsHeading: 'What a roll count from perimeter leaves out',
    limits: [
      'The room is a rectangle. A bay window, a sloped ceiling that shortens a wall, and a closet with its own door are extra area or missing area. Measure those faces yourself and add them to the length and width only if that shortcut matches the walls. Otherwise the perimeter formula is the wrong shape.',
      'Pattern repeat in inches is not computed. The waste percent is your allowance for match, for a dropped pattern, and for trimming. A 10% allowance on a large repeat can be too small. The exact-roll line shows how close you are to the next roll before you round up.',
      'Coverage must be the usable figure, after the manufacturer has already deducted the unprinted edge if the label does that. Typing the gross width times the length, when the label’s usable number is smaller, underbuys. Double rolls and single rolls are just different coverage numbers.',
      'The ceiling, a border, and a feature wall with a different paper are not separate fields. Run the feature wall as its own length and height, with width set so the perimeter matches that one wall, or compute its area outside the form. The drywall page counts sheets. The paint page counts gallons. Neither one is a wallpaper roll.'
    ],
    disclaimer: 'This roll count is wall area, minus openings, plus the waste percent you type, divided by the coverage you type. It is not a quote from a paperhanger, and it does not know the pattern repeat on the bolt.',
    faqs: [
      {
        q: 'How many wallpaper rolls does a 12 by 10 by 8 foot room need?',
        a: '7 rolls, when openings are 36 square feet, waste is 10%, and each roll covers 56 square feet. Gross wall area is 352 square feet, net area is 316, the area with waste is 347.6, and the exact count is 6.21 before rounding up.'
      },
      {
        q: 'Does the wallpaper calculator include the ceiling?',
        a: 'No. Area is the walls only. The room paint calculator can add the ceiling and then counts gallons. A ceiling that you intend to paper has to be added from its own length times width, outside this perimeter formula.'
      },
      {
        q: 'What roll coverage should I type?',
        a: 'The usable square feet on the roll you will buy. The sample uses 56. A label that says 28 is a different roll: the 15 by 12 by 9 foot example at 20% waste needs 20 of those, from 19.03 exact rolls. Do not type a square-metre figure without converting it.'
      },
      {
        q: 'How should a pattern repeat become the waste percent?',
        a: 'Decide the extra paper the match will cost and type that percent. This form does not take a repeat length in inches. Ten percent is the sample. Twenty percent on the taller room is what turns 444 square feet of net wall into 532.8. A larger drop match can need more than 10%.'
      },
      {
        q: 'Why does the wallpaper roll count round up?',
        a: 'Because a supplier sells whole rolls. 6.21 exact rolls becomes 7. An exact 8.00 stays 8. The exact line is there so you can see whether you are barely over a roll or most of the way to the next one.'
      }
    ],
    relatedLinks: [
      { slug: 'room-paint-calculator', label: 'Room paint calculator', note: 'Gallons for a rectangular room, with an option to paint the ceiling. The 12 by 10 by 8 foot walls are not 7 rolls of paper, and 7 rolls are not a gallon count.' },
      { slug: 'drywall-calculator', label: 'Drywall calculator', note: 'Sheets for the same kind of room. A 4×8 sheet is 32 square feet. A wallpaper roll at 56 square feet is not that sheet.' },
      { slug: 'square-footage-calculator', label: 'Square footage calculator', note: 'Floor area from feet and inches. Wallpaper on this page is wall area from length, width, and height, not the floor.' }
    ]
  },
  'time-card-hours-calculator': {
    title: 'Time Card Hours Calculator: Decimal Hours and HH:MM | ClearCalc',
    h1: 'Time Card Hours Calculator',
    description: 'Turn a same-day start and end time, minus unpaid break minutes, into decimal hours and an HH:MM total. 9:00 to 17:30 with a 30-minute break is 8.0000 hours, or 8:00.',
    intro: [
      'This time card calculator converts a clock-in and a clock-out on the same day into paid time. You enter the start hour and minute, the end hour and minute, and any unpaid break in minutes. The headline is decimal hours to four places. The first detail line is the same span as HH:MM, which is the exact minute count. The sample is 09:00 to 17:30 with a 30-minute break. Gross time is 8:30. Paid time is 8:00, and the headline is 8.0000 hours.',
      'Hours are a 24-hour clock. 17 means 5 p.m., not a second shift labeled “5.” Minutes run from 0 to 59. An end time before the start is rejected. The form does not roll the shift into the next day, so a 22:00 to 06:00 night shift has to be split or calculated outside this page. That limit is stated in the error, not hidden inside a silent overnight assumption.',
      'The weekly overtime page prices hours you have already totaled. It does not read a clock. A decimal from this page can be typed there as hours worked. Eight decimal hours at a straight-time rate is not, by itself, an overtime premium. The hourly-to-salary page is a weekly schedule repeated across a year. It is not one punched shift.'
    ],
    steps: [
      'Enter the start hour from 0 to 23 and the start minute from 0 to 59. The sample start is 9 and 0, which is 09:00.',
      'Enter the end hour and end minute on the same calendar day. The sample end is 17 and 30, which is 17:30. If that clock time is earlier than the start, the form stops.',
      'Enter unpaid break minutes as a whole number. The sample is 30. Use 0 if the break was paid or there was no break. A break longer than the clock span is rejected.',
      'Press Calculate. Use the HH:MM line when you need the exact minutes, and the four-decimal headline when a payroll system wants decimal hours.'
    ],
    howHeading: 'How a shift becomes decimal hours',
    howItWorks: [
      'Start and end are converted to minutes from midnight. 9:00 is 540. 17:30 is 1,050. The difference is 510 minutes, which is 8 hours and 30 minutes, or 8.5000 decimal hours, before the break. Thirty unpaid minutes leave 480. 480 / 60 is 8 exactly, so the headline is 8.0000 hours and the paid HH:MM line is 8:00.',
      'A shift that does not land on a quarter hour still converts cleanly when the minutes do. 08:07 to 16:22 is 495 minutes, which is 8:15 and 8.2500 decimal hours. Subtract a 30-minute unpaid break and the paid time is 465 minutes, 7:45, and 7.7500 hours. The break comes off the total. It is not a second shift.',
      'Four decimal places are not the same thing as exact minutes when the fraction does not terminate. One minute is 1/60 = 0.01666…, and the headline shows 0.0167 hours while the HH:MM line stays 0:01. Seven hours and 20 minutes, from 08:00 to 15:20 with no break, is 440/60 = 7.3333…, and the headline shows 7.3333 hours while the HH:MM line stays 7:20. Pay from the minute count when the fourth decimal has rounded. The overtime page never sees this rounding. It only sees the hours you type.'
    ],
    formula: 'Start minutes = start hour × 60 + start minute\nEnd minutes = end hour × 60 + end minute\nGross minutes = end − start, and end must not be earlier than start\nPaid minutes = gross minutes − unpaid break\nThe break cannot exceed the gross minutes\nHH:MM = paid minutes as hours and minutes\nDecimal hours = paid minutes / 60, shown to four decimal places\nHours are 0–23 and minutes are 0–59, as whole numbers\nOvernight shifts are not rolled forward',
    formulaNotes: [
      'Four-decimal display uses ordinary half-up rounding. 0.01666… becomes 0.0167. 7.3333… becomes 7.3333 because the following digit does not round the fourth place up. The HH:MM line is not rounded.',
      'A blank numeric field becomes zero after it is read, which is midnight or a zero-length break, not an error. Type the hour you mean. 0 is a real hour.'
    ],
    examplesHeading: 'Worked time-card examples',
    examples: [
      {
        title: '9:00 to 17:30 with a 30-minute lunch',
        paragraphs: [
          'Start hour 9, start minute 0, end hour 17, end minute 30, break 30. The calculator shows 8.0000 hours. Paid time is 8:00. Clock time before the break is 8:30, which is 8.5000 decimal hours. The break line reads 30 minutes.',
          'That 8.0000 can be typed as 8 hours on the overtime page if the rest of the week is known. This page does not know the other days, and it does not multiply by an hourly rate.'
        ]
      },
      {
        title: '8:07 to 16:22, with and without a break',
        paragraphs: [
          'Start 8:07, end 16:22, break 0. The headline is 8.2500 hours. Paid time and clock time are both 8:15. The span is 495 minutes, and 15 minutes is exactly a quarter of an hour, so four decimal places do not hide a remainder.',
          'The same clocks with a 30-minute unpaid break show 7.7500 hours and paid time of 7:45. Clock time stays 8:15. The 30 minutes are the only thing that changed. A break of 200 minutes on a three-hour shift is rejected because the break is longer than the shift.'
        ]
      },
      {
        title: 'One minute, seven hours 20 minutes, and a rejected night shift',
        paragraphs: [
          '09:00 to 09:01 with no break is a headline of 0.0167 hours and an HH:MM line of 0:01. The fourth decimal rounded 0.01666…. Use 0:01 if the payroll rule pays the minute. 08:00 to 15:20 with no break is 7.3333 hours and 7:20. The HH:MM line is the exact 7 hours and 20 minutes.',
          'Start 22:00 and end 06:00 is rejected. The message says the end time is before the start and that overnight shifts are not rolled into the next day. Split the shift at midnight, or add 8 hours yourself. The form will not quietly invent a next-day end.'
        ]
      }
    ],
    table: {
      heading: 'Decimal hours and HH:MM for selected shifts',
      caption: 'The headline is the four-decimal hours column. HH:MM is the exact paid time. A night shift that crosses midnight is not a row, because the form rejects it.',
      headers: ['Start', 'End', 'Unpaid break', 'Headline', 'HH:MM'],
      rows: [
        ['09:00', '17:30', '30 min', '8.0000 hours', '8:00'],
        ['08:07', '16:22', '0 min', '8.2500 hours', '8:15'],
        ['08:07', '16:22', '30 min', '7.7500 hours', '7:45'],
        ['08:00', '15:20', '0 min', '7.3333 hours', '7:20'],
        ['09:00', '09:01', '0 min', '0.0167 hours', '0:01']
      ]
    },
    limitsHeading: 'What a same-day time card does not do',
    limits: [
      'Overnight shifts are rejected. 22:00 to 06:00 is an error, not 8.0000 hours. If you need that shift, split it or add the minutes yourself and document the split. A silent next-day rule would make a typo look like a long shift.',
      'The four-decimal headline can round a fraction of a minute’s worth of an hour. One minute displays as 0.0167 hours even though 1/60 is 0.01666…. The HH:MM line is the exact count. A payroll system that stores two decimal hours will round further. This page shows four so the next rounding is visible.',
      'There is no hourly rate and no overtime threshold. The weekly overtime calculator applies a multiple after a threshold you set. California daily overtime is not computed from these two clocks. Multiple punches in one day have to be added outside the form, or entered as one span plus one break total.',
      'Hours must be whole numbers from 0 to 23 and minutes from 0 to 59. A minute of 60 is rejected. A 12-hour clock with a.m. and p.m. is not a field. 5 p.m. is 17.'
    ],
    disclaimer: 'This time-card total is clock arithmetic for one same-day shift. It is not a payroll system, an overtime determination, or a timesheet approval.',
    faqs: [
      {
        q: 'How many decimal hours is 9:00 to 17:30 with a 30-minute break?',
        a: '8.0000 hours. The clock span is 8:30, or 8.5000 hours, and 30 unpaid minutes leave 8:00. The HH:MM line reads 8:00. The headline and the minute count agree because 480 minutes is exactly 8 hours.'
      },
      {
        q: 'Why is one minute shown as 0.0167 hours?',
        a: 'Because 1/60 is 0.01666… and four decimal places round it to 0.0167. The HH:MM line stays 0:01, which is exact. Seven hours and 20 minutes displays as 7.3333 hours and 7:20. Use HH:MM when the rounded decimal would mis-state the minutes.'
      },
      {
        q: 'What happens if the end time is before the start?',
        a: 'The calculation stops. The message says the end is before the start and that overnight shifts are not rolled into the next day. 22:00 to 06:00 is that error. It is not reported as 8 hours.'
      },
      {
        q: 'Can I enter a 12-hour clock time such as 5 p.m.?',
        a: 'Type 17 for the hour and the minutes beside it. The fields are a 24-hour clock. Hours run from 0 to 23 and minutes from 0 to 59. A minute of 60 is rejected. 17:30 is the sample end time.'
      },
      {
        q: 'Does this time card calculate overtime pay?',
        a: 'No. It totals one shift. The weekly overtime page takes hours you already know, such as 48, and prices the hours above a threshold. An 8.0000 hour result from this page is an input you might type there. It is not already time and a half.'
      }
    ],
    relatedLinks: [
      { slug: 'overtime-pay-calculator', label: 'Weekly overtime pay calculator', note: 'Prices hours over a threshold at 1.5 or another multiple. It does not read 09:00 and 17:30. The 8.0000 hours from a shift can be part of the weekly total you type there.' },
      { slug: 'hourly-to-salary-calculator', label: 'Hourly to salary calculator', note: 'Turns an hourly rate and a weekly schedule into a year. It is not one time card with a break.' },
      { slug: 'date-difference-calculator', label: 'Date difference calculator', note: 'Counts calendar days between two dates. It does not convert 9:00 to 17:30 into decimal hours.' }
    ]
  }
};
