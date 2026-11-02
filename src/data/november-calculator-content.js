export const novemberCalculatorContent = {
  'credit-card-payoff-calculator': {
    title: 'Credit Card Payoff Calculator: Months and Interest | ClearCalc',
    h1: 'Credit Card Payoff Calculator',
    description: 'Find how many months a fixed payment takes to clear a credit card, and the interest that monthly rate adds. A $5,000 balance at 21.99% paid at $200 takes 34 months.',
    intro: [
      'This credit card payoff calculator counts the months a fixed payment needs to bring a revolving balance to zero, and the interest that piles up along the way. Enter the balance, the purchase APR, and the amount you will pay every month. The sample is a $5,000 balance at 21.99% with a $200 payment. The headline is 34 months, which is 2 years and 10 months. Total interest is $1,748.71 and the total paid is $6,748.71.',
      'The loan calculator on this site does the opposite job. It takes an amount, a rate, and a term in years, then solves for the level installment payment that finishes on that schedule. A credit card does not hand you a term. You choose the payment, and the term is whatever is left after interest. A $25,000 auto loan at 7.5% for five years is not this $5,000 card, and its $500.95 payment is not a minimum payment on a revolving balance.',
      'Interest here is the unpaid balance times the APR divided by 12, rounded to the nearest cent, then the payment is applied. That is the monthly method many payoff tools use when the cardholder wants a planning number from the APR on the statement. It is not the average-daily-balance method a particular issuer prints in the card agreement, and it is not a minimum-payment formula that shrinks as the balance shrinks. If the payment is at or below the first month of interest, the balance does not fall and the headline says so.'
    ],
    steps: [
      'Enter the current balance in US dollars. The sample, 5000, means $5,000 still owed, not the credit limit.',
      'Enter the purchase APR as a percent. For 21.99%, type 21.99. A promotional 0% rate is entered as 0.',
      'Enter the fixed dollar amount you will pay each month. The sample is 200. The payment has to be larger than the first month of interest or the balance will not fall.',
      'Press Calculate. The headline is the number of months. Interest, the total paid, the first month of interest, and the smaller final payment are listed underneath. The count stops at 600 months.'
    ],
    howHeading: 'How a fixed credit card payment pays down a balance',
    howItWorks: [
      'On the $5,000 sample the first month of interest is $5,000 × 21.99% ÷ 12. That product is $91.625, and the calculator rounds it to $91.63. The $200 payment covers that interest and puts $108.37 toward principal. The next month’s interest is charged on the smaller balance, so it is less than $91.63, and a larger share of the same $200 reduces principal. The loop repeats until a payment is big enough to cover the remaining balance and that month’s interest. That last payment is $148.71, not another full $200. Thirty-three full payments of $200 are $6,600, and $6,600 plus $148.71 is the $6,748.71 total.',
      'Dropping the payment from $200 to $150 on the same balance and APR stretches the payoff from 34 months to 52 months, which is 4 years and 4 months. Interest rises from $1,748.71 to $2,795.72. The extra $1,047.01 is the cost of sending $50 less each month, not a change in the APR. A $100 payment on the same card takes 137 months, 11 years and 5 months, and $8,657.07 of interest. The first month of interest is still $91.63, so $100 only barely exceeds it. Most of each early payment is interest, which is why a payment that looks affordable can last more than a decade.',
      'An $8,000 balance at 24.99% with a $250 payment takes 54 months and $5,316.26 of interest. The first month of interest is $166.60. A $1,200 balance at 0% with a $100 payment takes 12 months, interest is $0.00, and the total paid is $1,200.00. The zero-rate case is a useful check: the calculator divides the balance by the payment and does not invent interest. A $5,000 payment of exactly $91.63 at 21.99% equals the first month of interest, so the headline is “Balance does not fall” and the balance after that payment is still $5,000.00.',
      'A $3,500 balance at 18.99% with a $125 payment takes 38 months, 3 years and 2 months, and $1,160.46 of interest. The first month of interest is $55.39, so $125 puts $69.61 toward principal in month one. The final payment is $35.46. That card is a different APR and a different balance from the $5,000 sample. Comparing only the monthly payment would hide that the $125 plan costs less interest than the $200 plan because there is less to pay off and the rate is lower.'
    ],
    formula: 'Monthly interest = round(balance × APR ÷ 100 ÷ 12) to the nearest cent\nIf the payment is less than or equal to the first month of interest, the balance does not fall\nOtherwise, each month: interest = round(remaining × APR ÷ 12), then payment is applied, and the last payment is the smaller of the fixed payment and balance plus that month’s interest\nMonths = the number of payments until the balance is zero, stopping at 600\nTotal interest = the sum of the monthly interest\nTotal paid = the sum of the payments',
    formulaNotes: [
      'Rounding happens every month, not once at the end. A card that charges a daily periodic rate, uses a 365-day year, or computes interest on the average daily balance will not match these cents even when the APR and the payment match. Cash advances often use a different APR from purchases. This form has one rate.',
      'A minimum payment that is a percentage of the balance changes every month. This form does not model that. The $100 row is a fixed $100, not “2% of the balance” and not “interest plus 1%.” If the issuer also adds a fee, type the balance after the fee, or the months will be short. Payments above the balance simply end the loop on the first month.'
    ],
    examplesHeading: 'Worked credit card payoff examples',
    examples: [
      {
        title: '$5,000 at 21.99% with a $200 payment',
        paragraphs: [
          'Balance 5000, APR 21.99, payment 200. The calculator shows 34 months, payoff time of 2 years and 10 months, total interest of $1,748.71, and total paid of $6,748.71. The first month of interest is $91.63 and the final payment is $148.71.',
          'Interest is 34.97% of the $5,000 you started with, because $1,748.71 ÷ $5,000 = 0.349742. The APR is not 34.97%. That larger figure is the interest dollars divided by the starting balance over the whole payoff, which is a different ratio from the annual rate.'
        ]
      },
      {
        title: 'The same card at $150 and at $100',
        paragraphs: [
          'Change only the payment to 150. The calculator shows 52 months, 4 years and 4 months, total interest of $2,795.72, and total paid of $7,795.72. The final payment is $145.72. The extra 18 months cost $1,047.01 of interest.',
          'At a $100 payment the same card shows 137 months, 11 years and 5 months, total interest of $8,657.07, and total paid of $13,657.07. The final payment is $57.07. The first month of interest is still $91.63, so only $8.37 of the first payment reduces principal. A payment of $91.63 never reduces it.'
        ]
      },
      {
        title: 'A higher APR, and a zero-APR check',
        paragraphs: [
          'An $8,000 balance at 24.99% with a $250 payment shows 54 months, 4 years and 6 months, total interest of $5,316.26, and total paid of $13,316.26. The first month of interest is $166.60. The final payment is $66.26. This is not the $5,000 card with a larger payment. The rate and the balance both changed.',
          'A $1,200 balance at 0% with a $100 payment shows 12 months, 1 year, total interest of $0.00, and total paid of $1,200.00. The final payment is $100.00, the same as every other payment, because the balance divides evenly. A personal loan at 0% for one year on the loan page is the same division, but that page asks for the term and returns the payment. This page asks for the payment and returns the term.'
        ]
      }
    ],
    table: {
      heading: 'Fixed-payment payoff comparison',
      caption: 'Each row is what this calculator displays. Interest is the balance times the APR divided by 12, rounded to the nearest cent each month. A changing minimum payment is not shown.',
      headers: ['Balance and APR', 'Monthly payment', 'Months', 'Total interest', 'Total paid'],
      rows: [
        ['$5,000 at 21.99%', '$200', '34', '$1,748.71', '$6,748.71'],
        ['$5,000 at 21.99%', '$150', '52', '$2,795.72', '$7,795.72'],
        ['$5,000 at 21.99%', '$100', '137', '$8,657.07', '$13,657.07'],
        ['$8,000 at 24.99%', '$250', '54', '$5,316.26', '$13,316.26'],
        ['$1,200 at 0%', '$100', '12', '$0.00', '$1,200.00']
      ]
    },
    limitsHeading: 'What a monthly payoff estimate leaves out',
    limits: [
      'Issuers often compute interest with a daily periodic rate on the average daily balance, including new purchases and credits on the days they post. This page ignores new purchases. If you keep spending, the balance you typed is already out of date. A penalty APR, a late fee, or an annual fee is not added.',
      'The count stops at 600 months and says the balance is not paid off in 50 years. That stop is a guard, not a promise that a tiny payment would finish in year 51. Raise the payment until the headline is a month count.',
      'Paying the card is separate from whether the payment fits after tax. A 2026 Virginia paycheck, a 2026 Georgia paycheck, or a Texas paycheck with no state income tax will not agree on the cash left from the same wage. This page does not subtract tax. The installment-loan page does not count credit-card interest either. Use each form for the contract it describes.',
      'A 0% promotional period that expires is not a 0% APR for the whole payoff. If the rate jumps after 12 months, run the remaining balance at the later APR instead of leaving 0 in the field for the entire 34 months.'
    ],
    disclaimer: 'This credit card calculator is general information, not a payoff quote from the issuer. The card agreement controls the daily rate, fees, and minimum payment.',
    faqs: [
      {
        q: 'How long does a $5,000 balance at 21.99% take to pay off at $200 a month?',
        a: '34 months, which is 2 years and 10 months. Total interest is $1,748.71 and the total paid is $6,748.71. The first month of interest is $91.63 and the last payment is $148.71. The same balance at $150 a month takes 52 months and $2,795.72 of interest.'
      },
      {
        q: 'Why is the first month of interest $91.63 rather than $91.63 exactly from a daily rate?',
        a: '$5,000 × 0.2199 ÷ 12 is $91.625, which rounds to $91.63. The next month uses the new balance, not another $91.63. A card that multiplies a daily rate by the number of days in the billing cycle can differ by cents or more. This form is the monthly method, stated in the formula, so the rounding rule is visible.'
      },
      {
        q: 'What happens if the payment is only $91.63?',
        a: 'The balance does not fall. $91.63 equals the first month of interest on $5,000 at 21.99%, so nothing is left for principal and the balance after that payment is still $5,000.00. A payment below $91.63 makes the balance grow. The headline says “Balance does not fall” instead of printing a month count.'
      },
      {
        q: 'Does this credit card calculator use a minimum-payment percentage?',
        a: 'No. The payment you type is a fixed dollar amount every month until the last, smaller payment. A minimum that is interest plus 1% of the balance, or 2% of the balance, would change every month and usually take longer than the same opening payment held constant. The $100 row is a fixed $100, not a percentage minimum.'
      },
      {
        q: 'How is this different from the personal and auto loan calculator?',
        a: 'The loan page asks for a term and returns the level payment that finishes an installment loan on that date. A $25,000 loan at 7.5% for five years is $500.95 a month. This page asks for the payment and returns the months a revolving balance takes. It also charges interest on the remaining card balance each month rather than amortizing a closed-end loan from a fixed schedule of 60 payments.'
      },
      {
        q: 'Will a 0% APR show zero interest?',
        a: 'Yes, for as long as you leave the APR at 0. A $1,200 balance with a $100 payment shows 12 months, $0.00 of interest, and $1,200.00 paid. If a promotion ends, the later months need the post-promotion APR and the balance that is left. This form cannot switch rates halfway through.'
      }
    ],
    relatedLinks: [
      { slug: 'loan-calculator', label: 'Personal and auto loan calculator', note: 'A $25,000 loan at 7.5% for five years is $500.95 a month. That page solves the payment from the term. This page solves the months from the payment.' },
      { slug: 'house-affordability-calculator', label: 'How much house can I afford calculator', note: 'A housing payment from income and debts. It does not pay down a credit card, and a card payment belongs in its other-debt field only as a monthly dollar amount.' },
      { slug: 'compound-interest-calculator', label: 'Compound interest calculator', note: 'Growth on savings with monthly deposits. The rate there is a return, not a card APR, and the balance rises instead of falling.' },
      { slug: 'discount-calculator', label: 'Discount calculator', note: 'A percent off a price. It does not amortize a balance or charge a monthly rate.' }
    ]
  },
  'house-affordability-calculator': {
    title: 'How Much House Can I Afford Calculator (28/36) | ClearCalc',
    h1: 'How Much House Can I Afford Calculator',
    description: 'Estimate a home price from gross income, other debts, and a down payment. The 28/36 sample on $120,000 at 6.5% for 30 years is a $431,795.43 home.',
    intro: [
      'This how much house can I afford calculator turns income, debts, tax, insurance, and a down payment into a home price. It first caps the monthly housing payment, subtracts the tax, insurance, and HOA you enter, and then solves the fixed-rate mortgage formula for the loan that payment can carry. The sample is $120,000 of gross income, $400 of other monthly debts, a $60,000 down payment, 6.5% for 30 years, $3,600 of property tax, and $1,800 of homeowners insurance. The headline is a $431,795.43 home. The loan is $371,795.43 and the principal and interest is $2,350.00 a month.',
      'The mortgage calculator on this site starts from the loan and returns the payment. Typing 371795.43, 6.5, and 30 there returns $2,350.00 / month, the same principal and interest this page used. Total interest on that loan, from the mortgage page, is $474,204.58. This page does not print that lifetime interest. It prints the price. The two forms are inverses of one formula, not two opinions about the same house.',
      'The default rule is the traditional planning pair: 28% of gross monthly income for the housing payment, and 36% of gross monthly income for housing plus the other debts you type. A wider pair, 31% and 43%, is on the form for a what-if. Neither pair is a 2026 Fannie Mae hard maximum, and the 31/43 pair is not an FHA approval. FHFA set the 2026 baseline conforming limit for a one-unit home at $832,750 on 25 November 2025, up from $806,500. The high-cost ceiling is $1,249,125. The sample loan sits under the baseline.'
    ],
    steps: [
      'Enter annual gross income, other monthly debt payments, and the down payment, in US dollars. The sample income is 120000, debts are 400, and the down payment is 60000. Debts are car loans, student loans, and the minimums you actually pay, not the housing payment this form is about to build.',
      'Enter the annual mortgage rate as a percent, the term in years, annual property tax, annual homeowners insurance, and monthly HOA dues. The sample rate is 6.5, the term is 30, tax is 3600, insurance is 1800, and HOA is 0.',
      'Leave the payment rule on 28% housing and 36% with other debts, or switch to 31% and 43% for a wider budget. The rule changes the cap. It does not change the amortization formula.',
      'Press Calculate. The headline is the home price, loan plus down payment. If tax, insurance, HOA, and other debts already use the whole cap, the headline says no mortgage payment fits.'
    ],
    howHeading: 'How the 28/36 rule becomes a home price',
    howItWorks: [
      'Monthly gross income on $120,000 is $10,000. Twenty-eight percent is $2,800.00. Thirty-six percent is $3,600, and $400 of other debts leaves a $3,200.00 back-end cap. The tighter cap is the $2,800.00 housing cap, so the price is solved from that. Property tax is $3,600 ÷ 12 = $300.00. Insurance is $1,800 ÷ 12 = $150.00. HOA is $0.00. Principal and interest can use the $2,350.00 that remains. At 6.5% for 360 months, the loan that produces a $2,350.00 payment is $371,795.43. Adding the $60,000 down payment makes the $431,795.43 price. The housing payment is 28.00% of gross income. With the $400 of other debts it is 32.00%, still under 36%.',
      'The same inputs on a 15-year term keep the $2,350.00 principal and interest, because the cap did not change, and the loan falls to $269,771.57. The price is $329,771.57. The mortgage page shows $153,228.43 of interest on that 15-year loan, against $474,204.58 on the 30-year loan. A shorter term buys a smaller house at the same monthly cap and pays less interest. Raising other debts to $1,500 flips the binding cap. The 36% room is $3,600 − $1,500 = $2,100.00, which is below the $2,800.00 housing cap. Principal and interest falls to $1,650.00, the loan is $261,047.85, and the price is $321,047.85. The ratios are 21.00% and 36.00%.',
      'The wider 31/43 rule on the original sample lifts the housing cap to $3,100.00. Tax and insurance still take $450.00, so principal and interest is $2,650.00, the loan is $419,258.67, and the price is $479,258.67. The ratios are 31.00% and 35.00%. A $250 HOA on the original 28/36 sample, with the same tax and insurance, leaves $2,100.00 for principal and interest. The price falls from $431,795.43 to $392,242.72, a drop of $39,552.71, and the loan is $332,242.72. The HOA is inside the housing cap. It is not one of the “other debts.”',
      'A $90,000 income, $250 of other debts, a $20,000 down payment, 6.5% for 30 years, $2,400 of tax, and $1,200 of insurance produces a $304,779.48 home and a $284,779.48 loan. Principal and interest is $1,800.00, tax is $200.00, insurance is $100.00, and the ratios are 28.00% and 31.33%. A zero rate on the $120,000 sample is a formula check, not a quote: the $2,350.00 payment over 360 months supports an $846,000.00 loan and a $906,000.00 price. That loan is above the $832,750 baseline and at or under the $1,249,125 high-cost ceiling. Annual tax of $40,000 on the original sample uses $3,333.33 a month, and with $150.00 of insurance the carrying cost is $3,483.33, which is over the $2,800.00 cap. The headline is “No mortgage payment fits.” The $60,000 down payment is not turned into a price.'
    ],
    formula: 'Front cap = annual gross income × front percent ÷ 100 ÷ 12\nBack cap = annual gross income × back percent ÷ 100 ÷ 12 − other monthly debts\nHousing cap = the smaller of the two, and not below zero\nPrincipal and interest = housing cap − annual tax ÷ 12 − annual insurance ÷ 12 − monthly HOA\nIf that room is zero or less, no mortgage fits\nOtherwise the loan is the principal that amortizes to that payment at the rate and term\nHome price = loan + down payment\nDefault percents are 28 and 36. The wider pair is 31 and 43.',
    formulaNotes: [
      'The loan is rounded to the cent, then the principal and interest is recomputed from that rounded loan. On the sample both lines land on $2,350.00, which is why it matches the mortgage calculator exactly. A rate or a term that does not divide as cleanly can move the displayed payment by a cent from the room that was used to solve the price.',
      'Tax and insurance are divided by 12 and rounded to the cent before they are subtracted. A $40,000 tax bill is $3,333.33 a month, not $3,333.333…. The 2026 conforming comparison uses $832,750 and $1,249,125 for a one-unit property. It does not look up the county, and it does not apply the higher statutory limits for Alaska, Hawaii, Guam, and the U.S. Virgin Islands except to say when a loan is past the ordinary ceiling.'
    ],
    examplesHeading: 'Worked house-affordability examples',
    examples: [
      {
        title: '$120,000 income, 28/36, 30 years at 6.5%',
        paragraphs: [
          'Income 120000, debts 400, down payment 60000, rate 6.5, term 30, tax 3600, insurance 1800, HOA 0, and the 28/36 rule. The calculator shows a $431,795.43 home, a $371,795.43 loan, and $2,350.00 of principal and interest. Tax is $300.00 and insurance is $150.00. The housing payment is $2,800.00, which is 28.00% of gross monthly income and 32.00% once the other debts are added.',
          'The down payment is $60,000 ÷ $431,795.43 = 13.90% of the price. Many conventional loans still charge mortgage insurance below 20% down. This page does not add that premium, so the $2,800.00 housing payment is short of a lender’s payment if insurance is required. The loan is under the 2026 baseline of $832,750.'
        ]
      },
      {
        title: 'A 15-year term, and debts that bind the 36% cap',
        paragraphs: [
          'Keep every sample input and change the term to 15. The price is $329,771.57 and the loan is $269,771.57. Principal and interest stays $2,350.00 because the cap did not change. The mortgage calculator’s interest on that loan is $153,228.43, against $474,204.58 over 30 years.',
          'Back on a 30-year term, change other debts from 400 to 1500. The price is $321,047.85, the loan is $261,047.85, and principal and interest is $1,650.00. The 36% cap after those debts is $2,100.00, which is tighter than the $2,800.00 housing cap. The ratios are 21.00% and 36.00%. Paying down the $1,500 would move the result back toward the housing cap. This form does not pay the debts down for you.'
        ]
      },
      {
        title: 'The wider rule, an HOA, and a cap that is already used up',
        paragraphs: [
          'The original sample on the 31/43 rule is a $479,258.67 home, a $419,258.67 loan, and $2,650.00 of principal and interest. Ratios are 31.00% and 35.00%. Switching back to 28/36 and typing an HOA of 250, with tax and insurance unchanged, produces a $392,242.72 home and a $332,242.72 loan. Principal and interest is $2,100.00. The $250 comes out of the same $2,800.00 cap.',
          'Tax of 40000, insurance of 1800, and the original income produce no mortgage. Carrying cost is $3,483.33 against a $2,800.00 cap. The down payment stays $60,000.00 and is not reported as a home price. Lower the tax or choose the wider rule before the form will solve a loan. A $90,000 income with $250 of debts, $20,000 down, $2,400 of tax, and $1,200 of insurance, at 6.5% for 30 years on the 28/36 rule, is a $304,779.48 home.'
        ]
      }
    ],
    table: {
      heading: 'Home price under the two payment rules',
      caption: 'The $120,000 rows use a $60,000 down payment, 6.5%, $3,600 of annual tax, $1,800 of insurance, and no HOA. The $90,000 row uses a $20,000 down payment, 6.5%, $2,400 of tax, $1,200 of insurance, and no HOA. Mortgage insurance is not included.',
      headers: ['Income and rule', 'Other debts', 'Term', 'Home price', 'Loan', 'Principal and interest'],
      rows: [
        ['$120,000, 28/36', '$400', '30 years', '$431,795.43', '$371,795.43', '$2,350.00'],
        ['$120,000, 28/36', '$400', '15 years', '$329,771.57', '$269,771.57', '$2,350.00'],
        ['$120,000, 28/36', '$1,500', '30 years', '$321,047.85', '$261,047.85', '$1,650.00'],
        ['$120,000, 31/43', '$400', '30 years', '$479,258.67', '$419,258.67', '$2,650.00'],
        ['$90,000, 28/36', '$250', '30 years', '$304,779.48', '$284,779.48', '$1,800.00']
      ]
    },
    limitsHeading: 'What this price leaves out',
    limits: [
      'Mortgage insurance, flood insurance, and an HOA you forgot to type are real monthly costs. Only the HOA, tax, and homeowners insurance you enter are subtracted from the cap. A down payment under 20% often adds mortgage insurance. On the sample the $60,000 down payment is 13.90% of the $431,795.43 price, so a lender’s payment can be higher than $2,800.00.',
      'The 28/36 and 31/43 pairs are budgeting rules. Desktop underwriting in 2026 can allow a higher total ratio on a strong file, and it can refuse a file that meets 28/36. This page does not pull a credit score, count reserves, or apply a county loan limit. The $832,750 and $1,249,125 figures are the national baseline and the ordinary high-cost ceiling FHFA published on 25 November 2025.',
      'Gross income is not take-home pay. A $120,000 wage in Virginia, California, or Texas does not leave the same cash after tax. The rent affordability page uses 30% of gross income for rent, which is a different ratio and a different bill. Closing costs, repairs, and the seller’s price are not estimated. If the house you want costs more than the headline, the headline did not get the seller’s number wrong. It applied the cap you selected.',
      'A zero interest rate is accepted so the formula can be checked. It is not a market rate. The $846,000.00 loan in that check is a 360-month division of $2,350.00, and it happens to sit between the 2026 baseline and the high-cost ceiling. Do not treat it as a loan a lender offered.'
    ],
    disclaimer: 'This affordability calculator is general information, not a preapproval, a Loan Estimate, or an appraisal. A lender applies its own ratio, mortgage insurance, and the loan limit for the county.',
    faqs: [
      {
        q: 'How much house does $120,000 of income afford at 6.5% under the 28/36 rule?',
        a: 'With $400 of other monthly debts, a $60,000 down payment, 30 years, $3,600 of tax, and $1,800 of insurance, the price is $431,795.43. The loan is $371,795.43 and principal and interest is $2,350.00. The housing payment is 28.00% of gross income and 32.00% with the other debts. The 15-year price on the same cap is $329,771.57.'
      },
      {
        q: 'Why does the mortgage calculator show the same $2,350.00?',
        a: 'This page solves for the loan that produces the payment left after tax and insurance. The mortgage page starts from that loan. Enter 371795.43, 6.5, and 30 there and the payment is $2,350.00 / month, with $474,204.58 of interest over the term. The 15-year loan of $269,771.57 also pays $2,350.00 a month and $153,228.43 of interest. Same formula, two directions.'
      },
      {
        q: 'Does the 28/36 rule match a 2026 Fannie Mae limit?',
        a: 'No. It is the planning pair this form uses when that option is selected. Fannie Mae does not publish 28% and 36% as a hard maximum for every 2026 loan. Automated underwriting can go higher, and it can say no for reasons this page never sees. The 31/43 option is a wider budget, not an FHA approval and not a quote.'
      },
      {
        q: 'What is the 2026 conforming loan limit this page compares against?',
        a: 'FHFA’s 25 November 2025 announcement set the one-unit baseline at $832,750 for most of the United States, a 3.26% increase from $806,500, and the high-cost ceiling at $1,249,125. The sample loan of $371,795.43 is under the baseline. A zero-rate check on the same income produces an $846,000.00 loan, which the page flags as above the baseline and at or under the ceiling. County limits and the special statutory limits for Alaska, Hawaii, Guam, and the U.S. Virgin Islands are not looked up.'
      },
      {
        q: 'Why did a $250 HOA lower the price by $39,552.71?',
        a: 'The HOA is subtracted from the housing cap before the loan is solved. On the sample the cap stays $2,800.00, tax and insurance stay $450.00, and $250 of HOA leaves $2,100.00 for principal and interest instead of $2,350.00. The price falls from $431,795.43 to $392,242.72. Other debts do not work that way. They tighten the 36% cap only when that cap is the smaller one, as the $1,500 example does.'
      },
      {
        q: 'What does “No mortgage payment fits” mean?',
        a: 'Tax, insurance, and HOA, or the other debts, already use the entire cap, so nothing is left for principal and interest. Annual tax of $40,000 plus $1,800 of insurance is $3,483.33 a month, against a $2,800.00 cap on the $120,000 sample. The $60,000 down payment is listed and is not reported as a home price. Cut those carrying costs or select the wider rule to get a price.'
      }
    ],
    relatedLinks: [
      { slug: 'mortgage-calculator', label: 'Fixed-rate mortgage payment calculator', note: 'The $371,795.43 loan at 6.5% for 30 years is $2,350.00 a month there, with $474,204.58 of interest. This page solved that loan from the payment.' },
      { slug: 'rent-affordability-calculator', label: 'Rent affordability calculator', note: 'Compares rent with 30% of gross income. It does not amortize a mortgage or add property tax.' },
      { slug: 'england-stamp-duty-calculator', label: 'England stamp duty calculator', note: 'SDLT in pounds. It is not a US housing payment and it is not added to this dollar price.' },
      { slug: 'virginia-paycheck-calculator', label: 'Virginia paycheck calculator for 2026', note: 'The same $120,000 wage does not mean the same cash in every state. This price uses gross income, before that tax.' }
    ]
  },
  'virginia-paycheck-calculator': {
    title: 'Virginia Paycheck Calculator 2026 (2% to 5.75%) | ClearCalc',
    h1: 'Virginia Paycheck Calculator for 2026',
    description: 'Estimate a 2026 Virginia paycheck after federal income tax and Virginia’s 2%, 3%, 5%, and 5.75% brackets, using the $8,750 standard deduction and a $930 exemption.',
    intro: [
      'This Virginia paycheck calculator estimates what is left from 2026 wages after federal income tax, Virginia income tax, Social Security, and Medicare. Virginia’s brackets are the schedule Virginia Tax still publishes: 2% of the first $3,000, $60 plus 3% of the amount over $3,000 up to $5,000, $120 plus 5% of the amount over $5,000 up to $17,000, and $720 plus 5.75% of the amount over $17,000. The standard deduction for a taxable year beginning in 2026 is $8,750 for single and $17,500 for married filing jointly, under Code of Virginia § 58.1-322.03. That section sets those amounts for years beginning on or after 1 January 2025 and before 1 January 2027. A personal exemption is $930. An extra exemption for age 65 or blindness is $800.',
      'The sample is $65,000, single, paid every two weeks, with one personal exemption, no age or blind exemption, and no 401(k). Virginia taxable income is $55,320. Virginia tax is $2,923.40. Federal income tax is $5,620.00, Social Security is $4,030.00, and Medicare is $942.50. Annual take-home is $51,484.10, and the headline is $1,980.16 every two weeks. Georgia on the same wage, with no dependents, charges $2,495.00 and pays $51,912.50 for the year. North Carolina charges $2,084.78 and pays $52,322.72. The gap from Georgia is $428.40, and it is entirely the state tax. Virginia has no city wage tax on this page.'
    ],
    steps: [
      'Enter annual gross wages in dollars. The sample, 65000, means $65,000 for the year, not one paycheck.',
      'Choose Single or Married filing jointly, then a pay frequency. Joint uses the $17,500 Virginia standard deduction and the $32,200 federal standard deduction. The brackets themselves do not change with filing status. Every two weeks means 26 paychecks.',
      'Enter a traditional 401(k) deferral for the year, or leave 0. Then enter personal exemptions at $930 each, and any age-65 or blind exemptions at $800 each. The sample is 1 and 0. A joint return that claims both spouses uses 2 personal exemptions, which is $1,860. The form does not switch that count for you when you change the filing status.',
      'Press Calculate. The headline is one paycheck. A deferral above $24,500 is cut back to the 2026 elective limit. Exemptions cannot reduce Virginia taxable income below zero.'
    ],
    howHeading: 'How a 2026 Virginia paycheck is estimated',
    howItWorks: [
      'Federal taxable wages are gross wages minus the traditional 401(k), then minus the federal standard deduction. On $65,000 with no deferral, a single filer has $5,620.00 of federal income tax, $4,030.00 of Social Security, and $942.50 of Medicare. Those three lines match Georgia, North Carolina, and Texas. Virginia then subtracts its own standard deduction and exemptions from the same wages after the 401(k). The single deduction is $8,750 and one exemption is $930, so Virginia taxable income is $65,000 − $8,750 − $930 = $55,320. Tax is $720 plus 5.75% of $38,320, which is $720 + $2,203.40 = $2,923.40. Annual take-home is $51,484.10. Twenty-six times the $1,980.16 headline is $51,484.16, six cents over the annual line, because each paycheck is rounded on its own.',
      'Georgia’s 4.99% tax after a $15,000 deduction is $2,495.00, which is $428.40 less than this $2,923.40, even though 4.99% is close to 5.75%. The deduction does the work: Virginia removes $8,750 and $930, Georgia removes $15,000, and the rates then apply to different bases. North Carolina’s 3.99% tax after $12,750 is $2,084.78. Michigan’s 4.25% tax after a $5,900 exemption, with no city tax, is $2,511.75. Texas, with state income tax at $0, has annual take-home of $54,407.50. The $2,923.40 gap from Texas is this Virginia tax. A $90,000 single wage, still with one exemption, has Virginia taxable income of $80,320 and Virginia tax of $4,360.90. Federal tax is $10,970.00, the same federal line the California paycheck uses at $90,000. Annual take-home here is $67,784.10, or $2,607.08 every two weeks. California’s annual take-home on that wage is $66,994.14, because California income tax of $3,980.86 plus $1,170.00 of SDI is $789.96 more than this Virginia tax. Virginia does not charge that SDI.',
      'A traditional 401(k) reduces both federal tax and Virginia tax. A $6,500 deferral on the $65,000 single sample cuts federal income tax from $5,620.00 to $4,840.00. Virginia taxable income falls from $55,320 to $48,820, and Virginia tax falls from $2,923.40 to $2,549.65. The $373.75 difference is 5.75% of $6,500, because the whole deferral sits in the top bracket. Social Security stays $4,030.00 and Medicare stays $942.50. Annual take-home is $46,137.85, or $1,774.53 every two weeks. One age or blind exemption of $800, with no deferral, cuts Virginia tax from $2,923.40 to $2,877.40. The $46.00 difference is 5.75% of $800. Annual take-home is $51,530.10, and the headline is $1,981.93. A second personal exemption, $930 more, cuts the tax from $2,923.40 to $2,869.93 and raises annual take-home to $51,537.57.',
      'Married filing jointly on the same $65,000, with two personal exemptions, uses the $17,500 standard deduction and $1,860 of exemptions. Virginia taxable income is $45,640 and Virginia tax is $2,366.80. Federal tax is $3,440.00. Annual take-home is $54,220.70, or $2,085.41 every two weeks. Leaving the exemption count at 1 on a joint return taxes $46,570 and charges $2,420.28. The form will not assume the second spouse. At $40,000 single with one exemption, Virginia taxable income is $30,320 and the tax is $1,485.90, still entirely on the formula that starts at $720 because $30,320 is above $17,000. Annual take-home is $32,834.10, or $1,262.85 every two weeks. At $20,000 the taxable income is $10,320, which is inside the 5% band rather than the 5.75% band. Virginia tax is $386.00, federal tax is $390.00, and annual take-home is $17,694.00, or $680.54 every two weeks.'
    ],
    formula: 'Tax year 2026. One wage earner. Virginia Tax rate schedule.\nVirginia income = max(0, wages − traditional 401(k))\nStandard deduction = $8,750 single, or $17,500 married filing jointly, not above that income\nPersonal exemptions = $930 × the count you enter\nAge or blind exemptions = $800 × the count you enter\nVirginia taxable income = max(0, Virginia income − standard deduction − both exemption amounts)\nTax = 2% to $3,000, then 3% to $5,000, then 5% to $17,000, then 5.75% above $17,000\nFederal tax, Social Security, and Medicare use the 2026 federal paycheck rules on this site\nAnnual take-home = wages − federal income tax − Social Security − Medicare − Additional Medicare Tax − Virginia tax − 401(k)\nPaycheck = annual take-home ÷ number of paychecks',
    formulaNotes: [
      'Code of Virginia § 58.1-322.03 sets the 2026 standard deduction at $8,750 and $17,500 for years beginning on or after 1 January 2025 and before 1 January 2027. Later years in that section are higher, and this page does not use the 2027 figures. A person who can be claimed as a dependent on another return is limited to earned income for the standard deduction. This form does not apply that limit. It also does not apply the spouse tax adjustment, the child and dependent care deduction, or itemized deductions. If you itemize on the federal return, Virginia requires itemizing as well, and this standard deduction will not match the return.',
      'Social Security wages are still the gross wage, up to the 2026 base of $184,500. A traditional 401(k) does not reduce the Social Security or Medicare lines here. At $220,000 single with one exemption, Social Security stops at $11,439.00, Medicare is $3,190.00, Additional Medicare Tax is $180.00, and Virginia tax is $11,835.90 on taxable income of $210,320. Annual take-home is $151,651.10, or $5,832.73 every two weeks. There is no Virginia local wage tax to add the way a Pennsylvania earned income tax or a Detroit tax is added on those pages.'
    ],
    examplesHeading: 'Worked 2026 Virginia paycheck examples',
    examples: [
      {
        title: '$65,000 single, one exemption, no 401(k)',
        paragraphs: [
          'Salary 65000, single, 26 paychecks, deferral 0, personal exemptions 1, age or blind exemptions 0. Virginia taxable income is $55,320. The calculator shows Virginia tax of $2,923.40, federal tax of $5,620.00, Social Security of $4,030.00, Medicare of $942.50, annual take-home of $51,484.10, and a headline of $1,980.16 every two weeks.',
          'Georgia’s tax on the same wage with no dependents is $2,495.00 and the two-week headline is $1,996.63. North Carolina’s tax with no qualifying child is $2,084.78 and the headline is $2,012.41. Texas take-home is $54,407.50. The three state taxes differ because the deductions differ, not because the federal brackets changed.'
        ]
      },
      {
        title: 'A $6,500 deferral, and one age or blind exemption',
        paragraphs: [
          'The same $65,000 single wage with a 6500 deferral has Virginia taxable income of $48,820 and Virginia tax of $2,549.65. Federal tax falls to $4,840.00. The state-tax saving is $373.75, which is 5.75% of the $6,500. Annual take-home is $46,137.85, or $1,774.53 every two weeks. FICA does not change.',
          'Clear the deferral and set the age or blind count to 1. Virginia tax is $2,877.40, which is $46.00 less than $2,923.40, and $46.00 is 5.75% of the $800 exemption. Annual take-home is $51,530.10 and the headline is $1,981.93. The $800 exemption is allowed whether or not the federal return itemizes. This page still uses the Virginia standard deduction, so it is the right model only when the federal return takes the standard deduction too.'
        ]
      },
      {
        title: 'Joint with two exemptions, and a wage still in the 5% band',
        paragraphs: [
          'Married filing jointly, exemptions 2, on $65,000, has Virginia taxable income of $45,640 and Virginia tax of $2,366.80. Federal tax is $3,440.00. Annual take-home is $54,220.70, or $2,085.41 every two weeks. The $17,500 deduction belongs to the return once. A spouse with a separate wage needs a separate pass, or one combined wage with the deduction left at $17,500.',
          'A $20,000 single wage with one exemption has Virginia taxable income of $10,320. Tax is $120 plus 5% of $5,320, which is $386.00. That wage never reaches the 5.75% bracket. Federal tax is $390.00, Social Security is $1,240.00, Medicare is $290.00, and annual take-home is $17,694.00, or $680.54 every two weeks. A $40,000 single wage does reach 5.75%: taxable income is $30,320, tax is $1,485.90, and the headline is $1,262.85.'
        ]
      }
    ],
    table: {
      heading: '2026 Virginia tax at selected wages',
      caption: 'Each row is what this calculator displays for that wage, filing status, exemption count, and deferral. Age or blind exemptions are zero. Pay is every two weeks. Federal tax and FICA are included in take-home and are not a separate column.',
      headers: ['Wages', 'Status and exemptions', '401(k)', 'Virginia tax', 'Annual take-home', 'Two-week paycheck'],
      rows: [
        ['$65,000', 'Single, 1', '$0', '$2,923.40', '$51,484.10', '$1,980.16'],
        ['$65,000', 'Joint, 2', '$0', '$2,366.80', '$54,220.70', '$2,085.41'],
        ['$65,000', 'Single, 1', '$6,500', '$2,549.65', '$46,137.85', '$1,774.53'],
        ['$90,000', 'Single, 1', '$0', '$4,360.90', '$67,784.10', '$2,607.08'],
        ['$40,000', 'Single, 1', '$0', '$1,485.90', '$32,834.10', '$1,262.85']
      ]
    },
    limitsHeading: 'What this Virginia estimate leaves out',
    limits: [
      'Itemized deductions, the child and dependent care deduction, credits, and the spouse tax adjustment are not on the form. A return that itemizes federally cannot claim this $8,750 or $17,500 standard deduction. Withholding tables also annualize a single paycheck differently from this full-year method, so a stub can differ by more than the six-cent rounding on the $65,000 sample.',
      'The exemption count is whatever you type. Joint status does not insert a second $930. Age and blindness are $800 each, and a person who is both 65 and blind can have two of those exemptions. Dependents who qualify for a federal personal exemption amount use the $930 field. This page does not decide who qualifies.',
      'Virginia does not add a local wage tax here. A Pennsylvania local earned income tax, an Ohio city tax, or Detroit’s 2.4% resident tax is a different paycheck. Social Security benefits, interest, and a second job are not in the wage field. Additional Medicare Tax uses the $200,000 single threshold on this wage alone. A joint return can have a different additional-Medicare threshold, and this form does not apply the joint one.',
      'The 2027 standard deduction in the same statute is $9,200 single and $18,400 joint. Do not use this page for a 2027 wage. The brackets in the rate schedule are unchanged in the 2026 instructions this estimate follows. If the Department changes a figure, the return controls.'
    ],
    disclaimer: 'This Virginia paycheck calculator is general information, not tax advice or a withholding table. The Department of Taxation and the IRS assess the return.',
    faqs: [
      {
        q: 'How much Virginia tax comes out of a $65,000 single wage in 2026?',
        a: 'With one $930 exemption and no 401(k), Virginia taxable income is $55,320 and the tax is $2,923.40. Federal tax is $5,620.00, Social Security is $4,030.00, and Medicare is $942.50. Annual take-home is $51,484.10, or $1,980.16 every two weeks. Georgia on that wage is $2,495.00 of state tax. North Carolina is $2,084.78.'
      },
      {
        q: 'Why is the Virginia standard deduction $8,750 in 2026 and not the federal $16,100?',
        a: 'They are different statutes. The federal standard deduction for 2026 is $16,100 single and $32,200 joint, from IRS Revenue Procedure 2025-32, and it reduces federal taxable income only. Code of Virginia § 58.1-322.03 sets $8,750 and $17,500 for a year beginning in 2026. Both are subtracted in this estimate, from their own tax. Using the federal deduction as the Virginia deduction would understate Virginia tax.'
      },
      {
        q: 'Does a traditional 401(k) reduce the 5.75% Virginia tax?',
        a: 'Yes. Virginia starts from wages after the deferral. A $6,500 deferral on $65,000 single cuts Virginia tax from $2,923.40 to $2,549.65, a saving of $373.75, which is 5.75% of $6,500. Federal tax falls from $5,620.00 to $4,840.00. Social Security and Medicare do not change. A Roth amount should not be typed in that field. A deferral above $24,500 is cut back to $24,500.'
      },
      {
        q: 'How should a married couple count the $930 exemptions?',
        a: 'Type 2 if both spouses are exemptions, which subtracts $1,860, and choose Married filing jointly so the standard deduction is $17,500. On one $65,000 wage that produces Virginia tax of $2,366.80 and a two-week headline of $2,085.41. Leaving the count at 1 charges $2,420.28. The form does not add the second exemption when the status changes. Two wages should not each claim the full $17,500.'
      },
      {
        q: 'What is the $800 age or blind exemption worth on this wage?',
        a: 'On the $65,000 single sample, one $800 exemption cuts Virginia tax from $2,923.40 to $2,877.40. The $46.00 difference is 5.75% of $800 because taxable income stays in the top bracket. Annual take-home rises from $51,484.10 to $51,530.10. A person who is both 65 and blind can enter 2. The exemption does not change federal tax on this page.'
      },
      {
        q: 'Does Virginia add a local wage tax the way Pennsylvania does?',
        a: 'Not on this page. The state line is the bracket tax after the standard deduction and the exemptions you enter. At $65,000 single that line is $2,923.40 and nothing local is added. Pennsylvania’s 3.07% tax can be followed by a local earned income tax. Ohio can add a school-district rate and a city rate. Those fields are not here.'
      }
    ],
    relatedLinks: [
      { slug: 'georgia-paycheck-calculator', label: 'Georgia paycheck calculator for 2026', note: 'A 4.99% tax after a $15,000 standard deduction. At $65,000 single with no dependents, Georgia tax is $2,495.00 and the two-week headline is $1,996.63.' },
      { slug: 'north-carolina-paycheck-calculator', label: 'North Carolina paycheck calculator for 2026', note: 'A 3.99% tax after a $12,750 standard deduction. At $65,000 single the North Carolina tax is $2,084.78 and the two-week headline is $2,012.41.' },
      { slug: 'california-paycheck-calculator', label: 'California paycheck calculator for 2026', note: 'At $90,000 single, California income tax is $3,980.86 plus $1,170.00 of SDI. Virginia tax on that wage is $4,360.90 and annual take-home is $67,784.10, against $66,994.14 in California.' },
      { slug: 'texas-paycheck-calculator', label: 'Texas paycheck calculator for 2026', note: 'The same federal and FICA lines at $65,000, with state income tax at $0 and annual take-home of $54,407.50.' },
      { slug: '401k-contribution-calculator', label: '2026 401(k) contribution calculator', note: 'Check a deferral against the $24,500 limit before you type the dollar amount here. The deferral reduces Virginia tax and federal income tax.' }
    ]
  },
  'prince-edward-island-take-home-pay-calculator': {
    title: 'Prince Edward Island Take-Home Pay Calculator 2026 | ClearCalc',
    h1: 'Prince Edward Island Take-Home Pay Calculator for 2026',
    description: 'Estimate 2026 Prince Edward Island take-home pay after federal tax, PEI tax from 9.50% to 20%, the $15,000 basic personal amount, CPP, and EI. At $70,000 the monthly figure is $4,281.99.',
    intro: [
      'This Prince Edward Island take-home pay calculator estimates what an employee keeps from a 2026 salary after federal income tax, PEI income tax, the Canada Pension Plan, and Employment Insurance. The provincial brackets for 2026 are 9.50% to $33,928, 13.47% to $65,820, 16.60% to $106,890, 17.62% to $142,520, 19% to $200,000, and 20% above $200,000. The thresholds through 19%, and the 9.50% first rate, are the 2026 schedule in the Income Tax Act as amended for that year. The 20% rate on taxable income over $200,000 is the annual rate the province published for 2026. Payroll tables from July 2026 use 21% on that top slice as a withholding catch-up, because employers had used a lower rate in the first half of the year. This page uses 20% for the year, not the 21% catch-up.',
      'The basic personal amount is $15,000, credited at 9.50% along with the base CPP contribution and EI. The sample is $70,000. PEI tax is $6,258.09, federal tax is $7,278.19, CPP including CPP2 is $3,956.75, and EI is $1,123.07. Annual take-home is $51,383.90, and the monthly headline is $4,281.99. New Brunswick on that salary, with the same federal tax, CPP, and EI, charges $5,600.17 of provincial tax and pays $52,041.82 for the year, a monthly headline of $4,336.82. The $657.92 gap is the provincial tax. Nova Scotia on that salary charges $7,145.72 and pays $50,496.27, a monthly headline of $4,208.02. PEI sits between them.'
    ],
    steps: [
      'Enter annual gross salary in Canadian dollars. The sample, 70000, means $70,000 for the year.',
      'Press Calculate. The headline is one-twelfth of annual take-home, rounded to the cent. Federal tax, PEI tax, CPP, and EI are listed underneath.',
      'Read the credit line. It is 9.50% of the $15,000 basic amount plus the base CPP contribution plus EI. The enhanced CPP amounts are deducted in arriving at taxable income instead of being credited a second time.',
      'Use the annual 20% rate for income over $200,000. Do not replace it with the 21% figure from the July withholding tables. The low-income tax reduction is not subtracted.'
    ],
    howHeading: 'How 2026 Prince Edward Island take-home pay is estimated',
    howItWorks: [
      'CPP and EI match the other provinces outside Quebec. On $70,000 the pensionable earnings stop at the salary, the $3,500 basic exemption comes off, base CPP is 4.95%, and the first additional contribution is 1%. Together they are $3,956.75. The second additional contribution is zero because the salary is under the $74,600 ceiling. EI is 1.63% of insurable earnings up to $68,900, which is the $1,123.07 maximum. Taxable income for the brackets is the salary minus the enhanced CPP portions, $69,335.00 on this sample. Federal tax after the federal credits is $7,278.19, and the federal basic personal amount applied is $16,452.00. Those federal, CPP, and EI lines are the same ones the New Brunswick page uses at $70,000.',
      'PEI tax on $69,335.00 is the bracket tax minus a 9.50% credit. The credit base is the $15,000 basic amount, the base CPP, and EI, and the credit is $1,844.41. Tax after that credit is $6,258.09. Annual take-home is $70,000 − $7,278.19 − $6,258.09 − $3,956.75 − $1,123.07 = $51,383.90. Twelve times the $4,281.99 headline is $51,383.88, two cents under the annual line, because the monthly figure is rounded on its own. The every-two-weeks line is $1,976.30. New Brunswick tax at this salary is $5,600.17, so PEI tax is $657.92 higher and annual take-home is $657.92 lower. Nova Scotia tax is $7,145.72, so PEI tax is $887.63 lower and annual take-home is $887.63 higher. The federal pieces do not move.',
      'A $50,000 salary has PEI tax of $3,604.33, federal tax of $3,985.13, CPP of $2,766.75, and EI of $815.00. Annual take-home is $38,828.79, or $3,235.73 a month. New Brunswick tax at $50,000 is $3,078.90 and annual take-home is $39,354.22. The provincial gap is $525.43, and the annual take-home gap is the same $525.43. A $100,000 salary has PEI tax of $11,139.77, federal tax of $13,301.60, CPP of $4,646.45 including the second contribution, and EI still at the $1,123.07 maximum. Annual take-home is $69,789.11, or $5,815.76 a month. New Brunswick tax at $100,000 is $9,714.09 and annual take-home is $71,214.79. The gap is $1,425.68.',
      'The 20% bracket shows up once taxable income passes $200,000. A $250,000 salary has PEI tax of $39,444.40 and federal tax of $53,524.01. CPP is $4,646.45 and EI is $1,123.07, both at their maximums. Annual take-home is $151,262.07, or $12,605.17 a month. The federal basic personal amount falls to $15,031.43 because income is inside the phase-out between $181,440 and $258,482. The PEI basic amount stays $15,000. The July payroll instruction to withhold 21% on the top slice is a catch-up for the first half of 2026. Using 21% for the whole year would overstate the annual tax. A salary of $0 produces $0.00 of tax and a credit line of $1,425.00, which is 9.50% of $15,000, with nothing to absorb the credit. The low-income tax reduction in section 32 is a separate subtraction this page never makes. For a single person under 65 it starts at $350 and is reduced by 5% of adjusted income over $23,000, so it is already gone once that excess reaches $7,000. The $70,000 sample is far above that point.'
    ],
    formula: 'Calendar year 2026. One employee. Outside Quebec.\nCPP and EI match the 2026 federal payroll figures used on the other provincial pages\nTaxable income = salary − first additional CPP − CPP2\nPEI bracket tax uses 9.50%, 13.47%, 16.60%, 17.62%, 19%, and 20% at $33,928, $65,820, $106,890, $142,520, and $200,000\nCredit = 9.50% × ($15,000 + base CPP + EI)\nPEI tax = max(0, bracket tax − credit)\nThe low-income tax reduction is not applied\nThe July 2026 withholding rate of 21% on income over $200,000 is not used\nAnnual take-home = salary − federal tax − PEI tax − CPP − CPP2 − EI\nMonthly headline = annual take-home ÷ 12',
    formulaNotes: [
      'The credit uses base CPP, the 4.95% portion, not the 1% first additional contribution and not CPP2. Those enhanced amounts are already removed in taxable income, which is why they are not credited again. EI is in the credit and is also a deduction from cash. That is the same split the New Brunswick page uses at its own 9.40% rate, with a $13,664 basic amount instead of $15,000.',
      'Quebec does not use this stack. QPP, QPIP, the 1.30% EI rate, and the 16.5% federal abatement are on the Quebec page. At $70,000 that monthly headline is $4,253.73, not this $4,281.99. A salary that includes a bonus, a taxable benefit, or income from another province will not match a single T4 run through this form. The children’s wellness credit and the age amount are not applied.'
    ],
    examplesHeading: 'Worked 2026 Prince Edward Island examples',
    examples: [
      {
        title: '$70,000, between New Brunswick and Nova Scotia',
        paragraphs: [
          'Salary 70000. The calculator shows a monthly headline of $4,281.99, PEI tax of $6,258.09, federal tax of $7,278.19, CPP of $3,956.75, EI of $1,123.07, and annual take-home of $51,383.90. The credit is $1,844.41. The federal basic personal amount is $16,452.00.',
          'New Brunswick’s monthly headline is $4,336.82 and its provincial tax is $5,600.17. Nova Scotia’s monthly headline is $4,208.02 and its provincial tax is $7,145.72. Federal tax, CPP, and EI match. The entire difference in annual take-home is the provincial line: $657.92 more tax than New Brunswick, and $887.63 less tax than Nova Scotia.'
        ]
      },
      {
        title: '$50,000 and $100,000 on the same federal base',
        paragraphs: [
          'At $50,000, PEI tax is $3,604.33, federal tax is $3,985.13, and annual take-home is $38,828.79, or $3,235.73 a month. New Brunswick tax is $3,078.90 and annual take-home is $39,354.22. The gap is $525.43. CPP is $2,766.75 and EI is $815.00, under the EI maximum.',
          'At $100,000, PEI tax is $11,139.77, federal tax is $13,301.60, and annual take-home is $69,789.11, or $5,815.76 a month. CPP has reached $4,646.45 because the second contribution applies between $74,600 and $85,000. EI stays $1,123.07. New Brunswick tax is $9,714.09 and annual take-home is $71,214.79. The gap is $1,425.68. The 20% bracket is still unused, because taxable income is under $200,000.'
        ]
      },
      {
        title: 'The 20% bracket at $250,000, and a salary the reduction would not change',
        paragraphs: [
          'At $250,000, PEI tax is $39,444.40, federal tax is $53,524.01, and annual take-home is $151,262.07, or $12,605.17 a month. The federal basic personal amount is $15,031.43, down from $16,452.00, because the phase-out has started. The PEI amount stays $15,000. CPP and EI are at the same maximums as the $100,000 row. The 21% July withholding rate is not in this $39,444.40.',
          'At $30,000, PEI tax is $1,228.76 and the monthly headline is $2,109.01. The low-income reduction is still not applied. A single filer under 65 has a $350 reduction that 5% of income over $23,000 claws back, and $7,000 of excess cancels the $350. Someone near that threshold should not treat this headline as the final provincial tax. The $70,000 sample is not near it. A salary of zero shows a $1,425.00 credit and $0.00 of tax, which checks the 9.50% rate against the $15,000 amount.'
        ]
      }
    ],
    table: {
      heading: '2026 Prince Edward Island tax at selected salaries',
      caption: 'Each row is what this calculator displays. CPP and EI are included in annual take-home and are not a separate column. The low-income tax reduction is not applied. The 20% rate, not the 21% July withholding rate, is used on the $250,000 row.',
      headers: ['Salary', 'PEI tax', 'Federal tax', 'Annual take-home', 'Monthly take-home'],
      rows: [
        ['$70,000', '$6,258.09', '$7,278.19', '$51,383.90', '$4,281.99'],
        ['$50,000', '$3,604.33', '$3,985.13', '$38,828.79', '$3,235.73'],
        ['$100,000', '$11,139.77', '$13,301.60', '$69,789.11', '$5,815.76'],
        ['$30,000', '$1,228.76', '$1,397.37', '$25,308.12', '$2,109.01'],
        ['$250,000', '$39,444.40', '$53,524.01', '$151,262.07', '$12,605.17']
      ]
    },
    limitsHeading: 'What this Prince Edward Island estimate leaves out',
    limits: [
      'The low-income tax reduction, the age amount, the spouse or eligible dependant amount, the children’s wellness credit, and union dues are not applied. A single employee at $70,000 is outside the reduction. A household near $23,000 of adjusted income is not. Section 32 reduces $350 by 5% of the excess over $23,000 for 2026, with further amounts for a spouse, dependants, and a person 65 or older. Subtract that yourself if it applies. This page will not do it.',
      'The 21% rate in the July 2026 payroll tables is a withholding catch-up on income over $200,000 for the rest of that calendar year. An annual estimate that used 21% on the whole top slice would not match the 20% rate for the taxation year. A pay stub from the second half of 2026 can still show the catch-up. This headline will not reproduce that stub.',
      'Quebec’s QPP, QPIP, lower EI rate, and federal abatement are a different payroll system. Ontario adds the Ontario Health Premium and a surtax. British Columbia has its own brackets and a tax reduction. None of those are PEI. HST at 15% is a sales tax and is not subtracted from wages here.',
      'The monthly headline divided back by the algebra can miss the annual total by a cent or two. At $70,000, twelve times $4,281.99 is $51,383.88, and the annual line is $51,383.90. Use the annual line to add a year, and the headline to read one month.'
    ],
    disclaimer: 'This Prince Edward Island calculator is general information, not a tax assessment or a payroll table. The Canada Revenue Agency and the province assess the return.',
    faqs: [
      {
        q: 'What is take-home pay on a $70,000 Prince Edward Island salary in 2026?',
        a: 'The monthly headline is $4,281.99. PEI tax is $6,258.09, federal tax is $7,278.19, CPP is $3,956.75, and EI is $1,123.07. Annual take-home is $51,383.90. New Brunswick on the same salary is $4,336.82 a month. Nova Scotia is $4,208.02. The federal, CPP, and EI lines match those two pages.'
      },
      {
        q: 'Why does this page use 20% over $200,000 when July payroll tables say 21%?',
        a: 'The annual rate for 2026 is 20% on taxable income over $200,000. The 21% figure is a withholding catch-up for paycheques after employers had used a lower rate in the first half of the year. A $250,000 salary is taxed at 20% on that slice here, and PEI tax is $39,444.40. A second-half stub can still withhold at 21% and not match this annual estimate.'
      },
      {
        q: 'What is the Prince Edward Island basic personal amount worth?',
        a: 'The amount is $15,000 and the credit rate is 9.50%, so the basic amount alone is worth $1,425.00 before CPP and EI are added. On the $70,000 sample the full credit, including base CPP and EI, is $1,844.41. At a salary of zero the credit line is $1,425.00 and tax is $0.00. The enhanced CPP contributions are deducted from taxable income instead of being included in that credit.'
      },
      {
        q: 'Is the low-income tax reduction already in the $30,000 result?',
        a: 'No. PEI tax at $30,000 is $1,228.76 before that reduction, and the monthly headline is $2,109.01. The reduction for a single person under 65 starts at $350 and falls by 5% of adjusted income over $23,000, so $7,000 of excess cancels it. The $70,000 sample would not change if the reduction were applied. A salary near the threshold might.'
      },
      {
        q: 'Why is Prince Edward Island take-home different from New Brunswick at the same salary?',
        a: 'Federal tax, CPP, and EI are the same. The brackets and the basic amount are not. At $70,000, PEI tax is $6,258.09 and New Brunswick tax is $5,600.17. Annual take-home is $51,383.90 here and $52,041.82 in New Brunswick. The $657.92 gap is the provincial tax. Nova Scotia’s tax is $7,145.72, so PEI keeps $887.63 more than Nova Scotia for the year.'
      },
      {
        q: 'Can I use this Prince Edward Island result for a Quebec job?',
        a: 'No. Quebec uses QPP, QPIP, a 1.30% EI rate, and the 16.5% federal abatement. At $70,000 the Quebec monthly headline is $4,253.73, not $4,281.99. Ontario, Alberta, and British Columbia use the same CPP and EI as PEI and then their own provincial tax. HST is not part of any of those wage estimates.'
      }
    ],
    relatedLinks: [
      { slug: 'new-brunswick-take-home-pay-calculator', label: 'New Brunswick take-home pay calculator for 2026', note: 'Same federal tax, CPP, and EI at $70,000. New Brunswick tax is $5,600.17 rather than this $6,258.09, and the monthly headline is $4,336.82.' },
      { slug: 'nova-scotia-take-home-pay-calculator', label: 'Nova Scotia take-home pay calculator for 2026', note: 'Same federal pieces. Nova Scotia tax is $7,145.72 and the monthly headline is $4,208.02, which is $73.97 below this PEI headline.' },
      { slug: 'quebec-take-home-pay-calculator', label: 'Quebec take-home pay calculator for 2026', note: 'QPP, QPIP, the 1.30% EI rate, and the 16.5% abatement. At $70,000 the monthly headline is $4,253.73.' },
      { slug: 'ontario-take-home-pay-calculator', label: 'Ontario take-home pay calculator for 2026', note: 'Same CPP and EI system, plus Ontario tax, surtax, and the Ontario Health Premium. Not these PEI brackets.' }
    ]
  },
  'drywall-calculator': {
    title: 'Drywall Calculator: How Many 4×8 Sheets | ClearCalc',
    h1: 'Drywall Calculator for a Rectangular Room',
    description: 'Count 4×8 or 4×12 drywall sheets from wall area, openings, an optional ceiling, and a waste allowance. A 12 by 10 foot room with an 8 foot wall needs 15 sheets at 10% waste.',
    intro: [
      'This drywall calculator counts how many sheets to buy for a rectangular room. Enter the length, width, and wall height in feet, the door and window area you will not cover, whether the ceiling is included, a 4×8 or 4×12 sheet, and a waste allowance. The sample is 12 feet by 10 feet, with 8 foot walls, 36 square feet of openings, the ceiling included, 4×8 sheets, and 10% waste. The headline is 15 sheets. Wall area after the openings is 316 square feet, the ceiling is 120 square feet, and the area with waste is 479.6 square feet.',
      'The count is one face of the walls. A partition that is finished on both sides is two faces, and this form does not double the walls for you. The ceiling is the floor rectangle, added once, and openings are subtracted from the walls only. The square footage calculator can check that ceiling: a 10 by 12 foot rectangle is 120.00 square feet there. It does not count sheets. The floor tile calculator starts from the same 120 square feet and counts tiles, which is a different unit. The room paint calculator turns wall area into gallons. Fifteen sheets is not a gallon count.',
      'A 4×8 sheet covers 32 square feet. A 4×12 sheet covers 48 square feet. The calculator divides the area, including waste, by that coverage and rounds up. It does not nest pieces around a window or decide which way the long edge should run. Waste is the allowance you type for cuts, damage, and a corner that does not land on a factory edge.'
    ],
    steps: [
      'Enter the room length, width, and wall height in feet. The sample is 12, 10, and 8. Use decimals if a side is not a whole foot. Inches have to be converted first. Six inches is 0.5 feet.',
      'Enter doors and windows in square feet, or leave 0 if those openings will be covered too. The sample is 36, which is one 21 square foot door plus 15 square feet of window. Choose whether to include the ceiling.',
      'Choose a 4×8 sheet or a 4×12 sheet, and enter a waste allowance from 0 to 100 percent. The sample is the 32 square foot sheet and 10 percent.',
      'Press Calculate. The headline is the sheet count after waste, rounded up. The area with no waste, also rounded up, is listed so you can see what the allowance added.'
    ],
    howHeading: 'How a room becomes a sheet count',
    howItWorks: [
      'Wall area before openings is twice the length plus the width, times the height. The sample is 2 × (12 + 10) × 8 = 352 square feet. Subtracting 36 leaves 316. The ceiling is 12 × 10 = 120. The area to cover is 436 square feet. Ten percent waste makes 479.6 square feet. Dividing by 32 gives 14.9875, and rounding up makes 15 sheets. Without waste, 436 ÷ 32 = 13.625, which rounds up to 14 sheets. The allowance added one sheet. It did not add 10% of 14, because the rounding happens after the waste is applied to the area.',
      'Leaving the ceiling off drops the area to 316 square feet, or 347.6 with 10% waste. That is 11 sheets, against 10 sheets with no waste. The 120 square foot ceiling is four 4×8 sheets only if you ignore waste and ignore the fact that 120 does not divide into a tidy stack once it is added to the walls. On the combined 436 square feet the no-waste count is 14, not 10 walls plus 4 ceiling counted separately and then added, because 316 rounds up on its own and 120 rounds up on its own. 316 ÷ 32 is 9.875, which is 10 sheets, and 120 ÷ 32 is 3.75, which is 4 sheets. Ten plus four is 14, which happens to match the combined no-waste count. With 10% waste the separate counts would be 11 walls and 5 ceiling sheets, 16 in all, while the combined area rounds to 15. Buy the combined count. Adding the rounded piles double-counts the leftover on each pile.',
      'The same 436 square feet on a 4×12 sheet is 479.6 ÷ 48 = 9.9917, which rounds up to 10 sheets. Without waste, 436 ÷ 48 = 9.083, which also rounds up to 10. Waste did not add a sheet, because 436 was already just over nine sheets and 479.6 is still just under ten. A 4×12 sheet is not “half again a 4×8” in the headline when rounding sits that close to a boundary. The coverage really is 48 ÷ 32 = 1.5 times a 4×8 sheet. The purchase count is still an integer.',
      'A 20 by 16 foot room with 9 foot walls, 48 square feet of openings, the ceiling, 4×8 sheets, and 15% waste is a different room. Walls are 2 × (20 + 16) × 9 − 48 = 600 square feet. The ceiling is 320. The total is 920, and 15% waste makes 1,058 square feet. That is 34 sheets. Without waste it is 29 sheets, because 920 ÷ 32 = 28.75. An 8 by 8 foot room with 8 foot walls, no openings, no ceiling, and no waste is 2 × (8 + 8) × 8 = 256 square feet, which is 8 sheets exactly. The no-waste line and the headline match. Nothing was rounded up from a fraction.'
    ],
    formula: 'Wall area = 2 × (length + width) × height − openings\nCeiling = length × width, or zero if you leave it out\nArea = wall area + ceiling\nArea with waste = area × (1 + waste percent ÷ 100)\nSheets = area with waste ÷ sheet size, rounded up\nA 4×8 sheet is 32 square feet. A 4×12 sheet is 48 square feet.\nOpenings larger than the wall area are rejected. Waste is capped at 100 percent.',
    formulaNotes: [
      'Rounding uses the area after waste, then rounds up to a whole sheet. A result that is already a whole number, such as 256 ÷ 32 = 8, stays on that number. A result that is a hair under the next sheet, such as 479.6 ÷ 32 = 14.9875, still rounds up. The calculator subtracts a tiny fraction before calling the ceiling function so a value that is an integer in ordinary arithmetic is not pushed up by binary dust.',
      'One face means the inside of a room, or one side of a wall. Finishing both sides of the same partitions means the wall area is short by the second face. Run the walls twice and add the counts, and do not double the ceiling. Thickness, 1/2 inch versus 5/8 inch, does not change the sheet count. It changes the product you order. Joint compound, tape, and screws are not estimated.'
    ],
    examplesHeading: 'Worked drywall examples',
    examples: [
      {
        title: 'A 12 by 10 foot room, ceiling on, 10% waste',
        paragraphs: [
          'Length 12, width 10, height 8, openings 36, ceiling included, 4×8 sheets, waste 10. The calculator shows 15 sheets. Walls after openings are 316 square feet, the ceiling is 120, the area is 436, and the area with waste is 479.6. Without waste the count is 14 sheets.',
          'The ceiling’s 120 square feet is the same 10 by 12 floor the square footage page reports as 120.00 square feet. That page does not divide by 32. The floor tile page turns that 120 square feet, with a 1/8 inch joint and 10% waste, into 130 tiles. Tiles are not sheets, and the grout joint is not a drywall cut.'
        ]
      },
      {
        title: 'Walls only, and the same room on 4×12 sheets',
        paragraphs: [
          'Turn the ceiling off and keep the 10% waste and the 4×8 sheet. The area is 316 square feet, waste makes 347.6, and the headline is 11 sheets. Without waste it is 10. The four sheets you might have assigned to a 120 square foot ceiling are not a reason to subtract four from 15. The combined rounding is what produced 15, and the walls alone produce 11.',
          'Turn the ceiling back on and choose the 4×12 sheet. The area with waste is still 479.6 square feet, and the headline is 10 sheets. Without waste it is also 10. Each sheet covers 48 square feet. The count fell by five sheets from the 4×8 result, not by a neat one-third, because both counts are rounded up from numbers that were not integers.'
        ]
      },
      {
        title: 'A larger room, and an exact 8-sheet check',
        paragraphs: [
          'A 20 foot by 16 foot room, 9 foot walls, 48 square feet of openings, the ceiling, 4×8 sheets, and 15% waste shows 34 sheets. Walls are 600 square feet, the ceiling is 320, the area is 920, and the area with waste is 1,058 square feet. Without waste the count is 29. This is not the 12 by 10 sample with a higher waste percent. The room itself is larger.',
          'An 8 by 8 foot room, 8 foot walls, no openings, no ceiling, and no waste shows 8 sheets. The wall area is 256 square feet, and 256 ÷ 32 is 8 with nothing left over. That exact case is the check that a whole number of sheets is not rounded up to 9. Add 10% waste and the area becomes 281.6 square feet, which would be 9 sheets. The sample form does not use that waste on this check.'
        ]
      }
    ],
    table: {
      heading: 'Sheet counts for rectangular rooms',
      caption: 'Each row is what this calculator displays. The 12 by 10 foot rows use 8 foot walls and 36 square feet of openings. The last row uses 9 foot walls and 48 square feet of openings. One face of the walls is counted.',
      headers: ['Room', 'Ceiling', 'Sheet', 'Waste', 'Area with waste', 'Sheets'],
      rows: [
        ['12×10 ft, 8 ft walls', 'Included', '4×8', '10%', '479.6 sq ft', '15'],
        ['12×10 ft, walls only', 'No', '4×8', '10%', '347.6 sq ft', '11'],
        ['12×10 ft, 8 ft walls', 'Included', '4×12', '10%', '479.6 sq ft', '10'],
        ['12×10 ft, 8 ft walls', 'Included', '4×8', '0%', '436 sq ft', '14'],
        ['20×16 ft, 9 ft walls', 'Included', '4×8', '15%', '1,058 sq ft', '34']
      ]
    },
    limitsHeading: 'What a sheet count leaves out',
    limits: [
      'Both faces of a partition, a sloped ceiling, a vault, a soffit, and a stair wall are not in the rectangle. Measure those separately and add the areas yourself, or the headline is only the box you typed. Openings are a single square-foot number. A door that is finished on the edge, or a window return, is extra area this subtraction does not put back.',
      'The sheet count is not a layout. A 4×12 sheet may be the wrong length for the stud spacing or for a stair you have to carry it up. Rounding up buys a whole extra sheet when the remainder is a few square feet, which is what happened between 14.9875 and 15. It does not place the cutoffs onto the next wall.',
      'Paint, tile, and concrete answer different questions about a room this size. The paint page uses gallons and coverage per gallon. The tile page uses a grout joint. The concrete page uses thickness and cubic yards. None of those results is a check on 15 sheets, and 15 sheets is not a check on them. Square feet of the floor, 120 in this sample, is only the ceiling line.',
      'Metric rooms need to be converted to feet before they are typed. The length converter turns metres into feet for one side at a time. It does not multiply a room. Waste of 0% still rounds up a partial sheet. Waste does not have to be 10%. A room with many windows can need more, and a simple closet can need less.'
    ],
    disclaimer: 'This drywall calculator is a planning count, not a contractor’s takeoff. Board thickness, backing, and the layout of cuts can change the number of sheets you should buy.',
    faqs: [
      {
        q: 'How many 4×8 sheets does a 12 by 10 foot room need?',
        a: 'With 8 foot walls, 36 square feet of doors and windows, the ceiling included, and 10% waste, the count is 15 sheets. The area is 436 square feet and the area with waste is 479.6. Without waste the same room is 14 sheets. Walls only, still with 10% waste, are 11 sheets.'
      },
      {
        q: 'Why is the ceiling 120 square feet on this drywall page and on the square footage page?',
        a: 'The ceiling of a 12 by 10 foot room is the same rectangle as a 10 by 12 foot floor. The square footage calculator reports 120.00 square feet for that floor and does not divide by 32. This page adds that 120 to 316 square feet of walls and then counts sheets. The tile page starts from the same 120 square feet and counts 130 tiles once a 1/8 inch joint and 10% waste are included.'
      },
      {
        q: 'Why do 4×12 sheets not cut the count by exactly one third?',
        a: 'Each 4×12 sheet covers 48 square feet, which is 1.5 times a 32 square foot sheet. The 12 by 10 room with the ceiling and 10% waste is 479.6 square feet. That is 15 of the smaller sheets and 10 of the larger sheets. Both numbers are rounded up. Without waste the 4×12 count is still 10, because 436 ÷ 48 is 9.083. The coverage ratio is exact. The purchase count is an integer.'
      },
      {
        q: 'Does this drywall calculator count both sides of a wall?',
        a: 'No. The formula is one face: twice the length plus the width, times the height, which is the inside of a rectangular room. A partition finished on both sides needs a second pass for the walls. Do not double the ceiling when you do that. The sample’s 15 sheets would not become 30. Only the wall portion is repeated.'
      },
      {
        q: 'What does 10% waste change on the sample room?',
        a: 'It changes 436 square feet into 479.6 and the sheet count from 14 to 15. The allowance is applied to the area, and the rounding happens after that. It is not 10% of 14 sheets added as 1.4 sheets and then rounded on its own. On the 4×12 sheet the same waste leaves the count at 10, because both the raw area and the padded area round up to 10.'
      },
      {
        q: 'Can I use the sheet count as a paint or tile order?',
        a: 'No. Paint is gallons from wall area and a coverage rate. Tile is a count of pieces plus a grout joint. Concrete is cubic yards from a thickness. The 15-sheet result is only drywall. The 120 square foot ceiling can be checked on the square footage page, and that check still does not order the boards.'
      }
    ],
    relatedLinks: [
      { slug: 'square-footage-calculator', label: 'Square footage calculator', note: 'The ceiling in the 12 by 10 sample is 120.00 square feet there. That page does not divide by 32 or round up to sheets.' },
      { slug: 'room-paint-calculator', label: 'Room paint calculator', note: 'Gallons from the same kind of rectangular room. A sheet count is not a gallon count, and the paint page has no 4×8 sheet size.' },
      { slug: 'floor-tile-calculator', label: 'Floor tile calculator', note: 'The 10 by 12 foot floor is 130 tiles with a 1/8 inch joint and 10% waste. The ceiling here is that area, and the walls are not a floor.' },
      { slug: 'concrete-slab-calculator', label: 'Concrete slab calculator', note: 'Bags and cubic yards from a thickness. Drywall is an area, not a volume.' }
    ]
  }
};
