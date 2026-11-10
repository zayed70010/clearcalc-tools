export const nov10CalculatorContent = {
  'uk-vat-calculator': {
    title: 'UK VAT Calculator: Add or Remove 20%, 5%, or 0% | ClearCalc',
    h1: 'UK VAT Calculator for the 20%, 5%, and 0% Rates',
    description: 'Add or remove UK VAT at the standard 20% rate, the reduced 5% rate, or the zero rate. £100 before VAT at 20% is £20.00 of VAT and a £120.00 total.',
    intro: [
      'This UK VAT calculator adds Value Added Tax to a price or removes it from a total that already includes it. The rates are the ones HMRC publishes: 20% standard, 5% reduced, and 0% zero. The sample is £100 before VAT at the standard rate. VAT is £20.00 and the headline is £120.00 total. The same £120.00 run backwards returns £100.00 before VAT.',
      'The rate is a legal classification of the supply, not a number this form can look up from a product name. Most goods and services are standard-rated. Domestic fuel and power and some other supplies are reduced-rated. Many foods, books, and children’s clothes are zero-rated. Exempt supplies, such as many financial services and some education, are not the zero rate. An exempt supply is outside VAT. A zero-rated supply is taxable at 0% and can still sit inside a VAT registration. This page will apply whichever of the three rates you select. It will not decide the category.',
      'Stamp duty on a house in England is not VAT. The stamp duty calculator estimates SDLT on a residential freehold. This page estimates VAT on a single amount. A builder’s invoice can contain both kinds of tax on different lines, and they are not added together here. Scotland and Wales use the same UK VAT rates. They do not use England’s SDLT.'
    ],
    steps: [
      'Enter the amount in pounds. The sample, 100, is a price before VAT. If the amount already includes VAT, switch the menu to that choice and type the gross total.',
      'Choose standard 20%, reduced 5%, or zero 0%. The sample is 20%.',
      'Press Calculate. Adding VAT, the headline is the total. Removing VAT, the headline is the price before VAT.',
      'Read the VAT in pounds underneath. A zero-rated amount has £0.00 of VAT. That is not a finding that the supply is exempt.'
    ],
    howHeading: 'How UK VAT is added and removed',
    howItWorks: [
      'On a price before VAT, the tax is the price times the rate divided by 100, rounded to the nearest penny. £100 × 20% is £20.00 exactly, so the total is £120.00. £100 × 5% is £5.00 and the total is £105.00. £100 at the zero rate stays £100.00, with VAT of £0.00. £49.99 × 20% is £9.998, which rounds to £10.00. The total is £59.99. The extra penny is rounding, not a second rate.',
      'Removing VAT divides the total by 1 plus the rate and rounds to the nearest penny. £120.00 / 1.20 is £100.00, and the VAT inside the total is £20.00. £105.00 at 5% returns £100.00. A total that was not built by this rounding can come back a penny away from the price somebody remembers. The form rounds once. It does not keep a fraction of a penny on the headline.',
      'HMRC’s VAT guide treats the standard rate as 20% of the VAT-exclusive price, which is one-sixth of the VAT-inclusive price when the arithmetic is exact. £20 is one-sixth of £120. The reduced rate is 5% of the exclusive price, which is 1/21 of the inclusive price. Those fractions are a check, not a different tax. £59.99 is not an exact one-sixth split because the VAT was rounded up from £9.998.',
      'The sales tax calculator on this site is a US state rate, in dollars. New Jersey’s statewide sales tax is 6.625%. It is not UK VAT, and a dollar total should not be typed here and read as pounds. The percentage calculator can say that £20 is 20% of £100 and 16.67% of £120. The second figure is the VAT as a share of the gross price. It is not the rate you should type back in.'
    ],
    formula: 'VAT on a net price = round(price × rate ÷ 100) to the nearest penny\nTotal = price + VAT\nNet price inside a gross total = round(total ÷ (1 + rate ÷ 100))\nVAT inside a gross total = total − net price\nStandard rate = 20%. Reduced rate = 5%. Zero rate = 0%.\nThe 20% rate is one-sixth of an exact VAT-inclusive price. The 5% rate is 1/21 of an exact VAT-inclusive price.',
    formulaNotes: [
      'Half a penny rounds away from zero for a positive amount, because the calculator uses ordinary half-up rounding on the penny. £9.998 becomes £10.00. A retailer that rounds each line of a long invoice and then adds the lines can differ by a penny from VAT computed on the invoice total. This page sees one amount.',
      'The flat-rate scheme, the margin scheme for second-hand goods, and the tour operators’ margin scheme are different calculations. They are not 20% of the price you type. A reverse charge, where the customer accounts for the VAT, is also outside this form.'
    ],
    examplesHeading: 'Worked UK VAT examples',
    examples: [
      {
        title: '£100 before VAT at 20%, and the same total in reverse',
        paragraphs: [
          'Amount 100, price before VAT, standard rate. The calculator shows £120.00 total and VAT of £20.00. The rate line says 20% standard rate. One-sixth of £120.00 is £20.00, which matches.',
          'Switch the amount to a total that already includes VAT and type 120 at 20%. The headline is £100.00 before VAT, and the VAT inside the total is £20.00. The forward and reverse samples meet. Typing 16.67 because VAT is about 16.67% of the gross price would be the wrong rate.'
        ]
      },
      {
        title: '£49.99 at 20%, where the penny rounds up',
        paragraphs: [
          'Amount 49.99, price before VAT, standard rate. The unrounded VAT is £9.998. The calculator shows VAT of £10.00 and a total of £59.99. The price before VAT stays £49.99.',
          'Removing VAT from £59.99 at 20% returns £49.99, because 59.99 / 1.20 rounds back to that penny. A receipt that showed £59.98 would not be this calculation. The rate is still 20%.'
        ]
      },
      {
        title: 'The reduced rate and the zero rate on £100',
        paragraphs: [
          'Amount 100, price before VAT, reduced 5%. VAT is £5.00 and the total is £105.00. Removing VAT from £105.00 at 5% returns £100.00. The reduced rate is not a discount. It is a different VAT rate for supplies HMRC lists at 5%.',
          'The same £100 at the zero rate shows VAT of £0.00 and a total of £100.00. The headline when you remove VAT from £100 at 0% is still £100.00. Zero-rated is not exempt. This form cannot tell you which of those two a particular supply is.'
        ]
      }
    ],
    table: {
      heading: 'UK VAT on £100 and on £49.99',
      caption: 'Each row is what this calculator displays. The rate is the VAT-exclusive rate. Totals are rounded to the penny.',
      headers: ['Price before VAT', 'Rate', 'VAT', 'Total'],
      rows: [
        ['£100.00', '20%', '£20.00', '£120.00'],
        ['£100.00', '5%', '£5.00', '£105.00'],
        ['£100.00', '0%', '£0.00', '£100.00'],
        ['£49.99', '20%', '£10.00', '£59.99'],
        ['£49.99', '5%', '£2.50', '£52.49']
      ]
    },
    limitsHeading: 'What this VAT estimate leaves out',
    limits: [
      'The form does not know whether your supply is standard-rated, reduced-rated, zero-rated, or exempt. Children’s clothes, most food, and books are often zero-rated. Hot takeaway food and confectionery often are not. The classification is in HMRC’s notices, not in this arithmetic.',
      'Imports, postponed import VAT, the flat-rate scheme, and partial exemption are not calculated. A price that already had a discount should be the discounted price if VAT is charged on the amount the customer pays. This page does not take a percent off first. The discount calculator can do that, in dollars, and the percent math is the same if you ignore the currency symbol.',
      'SDLT on a house, income tax, and National Insurance are different UK taxes. A £35,000 salary’s take-home pay is not a VAT total. A £430,000 house’s stamp duty is not VAT. Do not add this page’s pounds to either of those results unless an invoice really does contain a VAT line of that size.',
      'Currency display is pounds. The percent math would be the same in another currency, and the symbols will still say £. A US sales-tax question belongs on the sales tax calculator.'
    ],
    disclaimer: 'This VAT figure applies a rate you chose to one amount. It is not an HMRC decision on whether the supply is taxable, and it is not a VAT return.',
    faqs: [
      {
        q: 'How much is UK VAT on £100 at the standard rate?',
        a: '£20.00 of VAT and a £120.00 total. Removing VAT from £120.00 at 20% returns £100.00. The VAT is 20% of the net price and one-sixth of the gross price. It is not 20% of £120.'
      },
      {
        q: 'What is the difference between the UK zero rate and an exempt supply?',
        a: 'The zero rate is 0% VAT on a taxable supply. Exempt supplies are outside VAT. This calculator can show £0.00 of VAT on a zero-rated amount. It cannot tell you that a supply is exempt, and it does not change a VAT registration.'
      },
      {
        q: 'Why is VAT on £49.99 equal to £10.00 rather than £9.99?',
        a: '£49.99 × 20% is £9.998, and the nearest penny is £10.00. The total is £59.99. Removing 20% from £59.99 returns £49.99. The rate did not become 20.004%.'
      },
      {
        q: 'Does this UK VAT calculator work in Scotland and Wales?',
        a: 'Yes for VAT. Standard, reduced, and zero rates are UK-wide. It does not calculate Scottish LBTT or Welsh Land Transaction Tax. Those are on their own pages. England and Northern Ireland stamp duty is a different tax as well.'
      },
      {
        q: 'Is 5% UK VAT the same as a 5% discount?',
        a: 'No. Five percent VAT on £100 adds £5.00 and makes £105.00. A 5% discount on £100 removes £5.00 and leaves £95.00. The discount calculator subtracts. This page adds or removes VAT.'
      }
    ],
    relatedLinks: [
      { slug: 'england-stamp-duty-calculator', label: 'Stamp duty calculator UK for England and Northern Ireland', note: 'SDLT on a house. A £430,000 main home is £11,500 under the 2026 bands. That is not VAT.' },
      { slug: 'uk-take-home-pay-calculator', label: '2026/27 take-home pay for England, Wales and Northern Ireland', note: 'Income tax and employee National Insurance on a salary. Not VAT on a purchase.' },
      { slug: 'sales-tax-calculator', label: 'US sales tax calculator by state', note: '$100 at 8.25% is $108.25. That is a US rate in dollars, not 20% UK VAT.' },
      { slug: 'percentage-calculator', label: 'Percentage calculator', note: '£20 is 20% of £100 and about 16.67% of £120. The second figure is not the VAT rate.' },
      { slug: 'discount-calculator', label: 'Discount calculator', note: 'Takes a percent off a price. Apply VAT to the price after the discount if that is what the supplier charges.' }
    ]
  },
  'savings-goal-calculator': {
    title: 'Savings Goal Calculator: Monthly Deposit to Reach a Target | ClearCalc',
    h1: 'Savings Goal Calculator',
    description: 'Find the monthly deposit that reaches a savings goal. $5,000 already saved, 5% a year, and 5 years needs $273.26 a month at month-end to finish at $25,000.',
    intro: [
      'This savings goal calculator solves for the monthly deposit that makes a current balance grow to a target. You enter the goal, the amount already saved, an annual return, and a number of years. The sample is a $25,000 goal, $5,000 already saved, 5% a year, and 5 years, with each deposit added at the end of the month. The headline is $273.26 a month.',
      'The return is a constant rate you choose. It is divided by 12 and compounded once a month. It is not a savings-account quote, a bond yield, or a stock-market forecast. At 5% the $5,000 already saved grows to $6,416.79 by itself. The deposits have to cover the other $18,583.21 of the goal, and they earn interest too, which is why the cash you put in is $16,395.60 rather than the whole $18,583.21.',
      'The compound interest calculator answers the opposite question. It starts from a deposit and projects the balance. This page starts from the balance you want and projects the deposit. The simple interest calculator does not compound. $10,000 at 5% for 3 years is $1,500 of simple interest there, and $11,614.72 with monthly compounding and no deposits on the compound interest page.'
    ],
    steps: [
      'Enter the savings goal and the amount already saved, in dollars. The sample is 25000 and 5000.',
      'Enter the annual return as a percent. For 5%, type 5. The form accepts 0 through 20.',
      'Enter the term in years, above 0 and at most 50. Choose whether each deposit is added at the end of the month or the beginning.',
      'Press Calculate. The headline is the monthly deposit, rounded to the cent. If the money already saved grows past the goal, the headline is $0.00 a month.'
    ],
    howHeading: 'How the monthly deposit is solved',
    howItWorks: [
      'The monthly rate is the annual percent divided by 100 and then by 12. Five percent is 0.05 / 12. Over 5 years there are 60 months. The current balance is multiplied by (1 + monthly rate) raised to the number of months. That is $6,416.79 on the sample. The gap from there to $25,000 is what the deposits must accumulate to.',
      'A deposit at the end of each month is an ordinary annuity. The future value of $1 a month is ((1 + r)^n − 1) / r. Divide the gap by that factor and you have the payment. A deposit at the beginning of the month earns one extra period, so the factor is multiplied by (1 + r) and the required payment falls. On the sample that beginning-of-month payment is $272.12, which is $1.14 less than the end-of-month payment.',
      'If the rate is exactly zero, the payment is the gap divided by the number of months. A $12,000 goal, nothing saved, 0%, and 1 year is $1,000.00 a month. There is no interest to do any of the work. If the current balance already grows to more than the goal, the solved payment is negative. The calculator shows $0.00 a month and the surplus. A $10,000 balance at 5% for 5 years grows to $12,833.59, so a $10,000 goal needs no deposit and the surplus is $2,833.59.',
      'The payment in the headline is rounded to the cent. Sixty payments of $273.26 are $16,395.60 of cash deposits. Because the unrounded payment was rounded, the balance at the end can miss the goal by a few cents. The page reports the cent payment, not a second equation that forces the last cent.'
    ],
    formula: 'Monthly rate r = annual percent / 100 / 12\nMonths n = years × 12\nFuture value of current savings = current × (1 + r)^n\nGap = goal − that future value\nEnd of month: payment = gap × r / ((1 + r)^n − 1)\nBeginning of month: payment = gap × r / (((1 + r)^n − 1) × (1 + r))\nIf r = 0: payment = gap / n\nIf the payment is negative, no deposit is required.',
    formulaNotes: [
      'The current balance compounds for the full term. It is not subtracted from the goal before any interest is applied. Subtracting $5,000 from $25,000 and then saving toward $20,000 would ignore the growth on the $5,000 and would ask for too large a deposit.',
      'Deposits are assumed to be the same amount every month, with no missed months and no extra lump sum later. A bonus in year three would lower the required monthly amount. This form cannot place that bonus on a particular date. Taxes on the interest are not removed. A taxable account that pays 5% before tax does not deliver a 5% balance if the interest is taxed each year.'
    ],
    examplesHeading: 'Worked savings-goal examples',
    examples: [
      {
        title: '$25,000 in 5 years, with $5,000 already saved at 5%',
        paragraphs: [
          'End of each month: the calculator shows $273.26 a month. The $5,000 grows to $6,416.79. The deposits must cover $18,583.21. The cash deposited over 60 months is $16,395.60. The rest of the gap is growth on the deposits.',
          'Beginning of each month: the headline is $272.12. The current balance still grows to $6,416.79, because the timing switch changes the deposits, not the money already there. The cash deposited falls to $16,327.20. One extra month of interest on each deposit is worth $1.14 a month on this particular goal.'
        ]
      },
      {
        title: 'A goal the current balance already covers',
        paragraphs: [
          'Goal 10000, current 10000, rate 5, years 5, end of month. The calculator shows $0.00 a month. The balance grows to $12,833.59, and the surplus over the goal is $2,833.59.',
          'The zero is not a broken form. It means the return you typed does the whole job. If the return is not going to be 5%, type the return you are willing to plan with. At 0% the same inputs need a deposit of $0.00 as well, because the balance already equals the goal and nothing has to grow.'
        ]
      },
      {
        title: 'No interest, and a shorter deadline',
        paragraphs: [
          'Goal 12000, current 0, rate 0, years 1. The payment is 12000 / 12. The calculator shows $1,000.00 a month. Cash deposited is $12,000.00. There is no growth line doing hidden work.',
          'The same $12,000 goal with nothing saved, 5%, and 2 years, end of month, is a different payment because 24 deposits compound. Use the form for that case rather than dividing $12,000 by 24. Dividing by 24 ignores the interest and overstates the deposit you need if the 5% is real.'
        ]
      }
    ],
    table: {
      heading: 'Monthly deposit for a $25,000 goal',
      caption: 'Each row is what this calculator displays. Deposits are end of month unless the row says beginning. The return is compounded monthly. No taxes or fees are removed.',
      headers: ['Already saved', 'Return', 'Years', 'Timing', 'Monthly deposit'],
      rows: [
        ['$5,000', '5%', '5', 'End of month', '$273.26'],
        ['$5,000', '5%', '5', 'Beginning of month', '$272.12'],
        ['$0', '0%', '1 year, $12,000 goal', 'End of month', '$1,000.00'],
        ['$10,000', '5%', '5, and the goal is $10,000', 'End of month', '$0.00']
      ]
    },
    limitsHeading: 'What this savings plan leaves out',
    limits: [
      'The return does not vary. A year at 12% and a year at −2% do not average to the same balance as two years at 5%, because of the order of the returns. This page cannot take a list of yearly returns.',
      'Inflation is not removed. A $25,000 goal in five years buys less than $25,000 buys now if prices rise. The inflation calculator can restate an amount with CPI-U. It does not change the deposit this page solves.',
      'Contribution limits for an IRA, a 401(k), or an ISA are not applied. The 401(k) calculator on this site checks a deferral against the 2026 elective limit. This page will cheerfully ask for a deposit above any of those limits.',
      'The currency symbol is the dollar. The same formula works for a goal in pounds, Canadian dollars, or Australian dollars, and the symbol will still say $. Do not subtract the result from a take-home paycheck in another currency without converting.'
    ],
    disclaimer: 'This monthly deposit is a compound-interest plan from a rate you typed. It is not a savings-product quote or investment advice.',
    faqs: [
      {
        q: 'How much should I save each month to reach $25,000 in 5 years?',
        a: 'With $5,000 already saved and a constant 5% return, compounded monthly, the end-of-month deposit is $273.26. Deposits at the beginning of the month are $272.12. If you have saved nothing and earn nothing, a $12,000 goal in one year is $1,000.00 a month, which is a different problem.'
      },
      {
        q: 'Why is the cash I deposit less than the gap to the goal?',
        a: 'The deposits earn the same monthly rate. On the sample, the gap after the current balance grows is $18,583.21, and the cash deposited is $16,395.60. The difference is growth on the deposits. At a 0% return the two figures match.'
      },
      {
        q: 'What if my savings already grow past the goal?',
        a: 'The headline is $0.00 a month. $10,000 at 5% for 5 years grows to $12,833.59, so a $10,000 goal shows a surplus of $2,833.59 and asks for no deposit. The surplus disappears if the return you actually earn is lower.'
      },
      {
        q: 'Does the savings goal calculator include taxes on the interest?',
        a: 'No. The 5% is applied in full every month. Interest that is taxed in a taxable account reduces the balance. A retirement account with a different tax rule is not modeled either.'
      },
      {
        q: 'How is this different from the compound interest calculator?',
        a: 'That page starts with a balance and a deposit and reports the ending balance. This page starts with the ending balance and reports the deposit. The simple interest page does not compound at all.'
      }
    ],
    relatedLinks: [
      { slug: 'compound-interest-calculator', label: 'Compound interest calculator', note: 'Projects a balance from a starting amount and a monthly deposit. This page solves the deposit from the balance.' },
      { slug: 'simple-interest-calculator', label: 'Simple interest calculator', note: '$10,000 at 5% for 3 years is $1,500.00 of simple interest. Monthly compounding of the same inputs, with no deposit, is $11,614.72 on the compound interest page.' },
      { slug: 'inflation-calculator', label: 'Inflation calculator', note: '$100 in 2016 is $134.14 in 2025 CPI-U dollars. A future goal is not adjusted for that here.' },
      { slug: '401k-contribution-calculator', label: '2026 401(k) contribution calculator', note: 'Checks a deferral against the $24,500 elective limit. This savings page does not apply that cap.' }
    ]
  },
  'apr-calculator': {
    title: 'APR Calculator for a Fixed Monthly Loan | ClearCalc',
    h1: 'APR Calculator',
    description: 'Estimate the APR on a fixed monthly loan. $10,000 at a 7% note rate for 36 months, with $300 of prepaid charges, has a payment of $308.77 and an APR of 9.069%.',
    intro: [
      'This APR calculator estimates the annual percentage rate on a fixed monthly loan when you know the note rate, the term in months, and any prepaid finance charges. The sample is $10,000 repaid at 7% for 36 months, with $300 of charges taken before you receive the money. The payment on the note is $308.77. The amount you actually receive is $9,700. The APR is 9.069%.',
      'The payment is calculated on the full amount you repay, at the note rate. The APR is a different rate. It is the rate that makes the present value of those payments equal the amount financed, which is the amount you repay minus the prepaid charges. With no prepaid charges, the APR matches the note rate. On this sample with the fee removed, the APR is 7.000% and the payment is still $308.77.',
      'A car loan of $25,000 at 6% for 60 months, with no prepaid charge, has a payment of $483.32 and an APR of 6.000%. That payment matches the car payment calculator. This page adds the prepaid-charge step that the car page does not have. It is not a mortgage disclosure. Odd days, mortgage insurance, and a payment schedule that is not monthly will not match a lender’s APR.'
    ],
    steps: [
      'Enter the amount you repay, which is the principal the payment is calculated on. The sample is 10000.',
      'Enter the note interest rate as a percent and the term as a whole number of months, from 1 to 480. The sample is 7% and 36 months.',
      'Enter prepaid finance charges, or 0. The sample is 300. Charges cannot be larger than the amount you repay.',
      'Press Calculate. The headline is the APR to three decimal places. The payment, the amount financed, and the finance charge are underneath.'
    ],
    howHeading: 'How a note rate becomes an APR',
    howItWorks: [
      'The monthly payment uses ordinary amortization. The monthly note rate is the annual percent divided by 1,200. The payment is principal times that rate times (1 + rate) raised to the number of months, divided by (1 + rate) raised to the number of months, minus 1. At 7% for 36 months on $10,000 the payment is $308.77. Interest over the term, ignoring the prepaid charge, is $1,115.75. Thirty-six payments of the rounded $308.77 are a few cents off the unrounded total. The finance-charge line uses the unrounded payment.',
      'Prepaid charges reduce the amount financed. $10,000 minus $300 is $9,700. You still repay the $10,000, so the charges make the credit more expensive than the note rate. The APR is the constant monthly rate whose present value of the $308.77 payments equals $9,700, multiplied by 12 and expressed as a percent. The search is a bisection. The displayed APR is 9.069%.',
      'With fees of $0, amount financed equals principal, and the rate that fits the payment is the note rate. The headline is 7.000%. That figure is the nominal annual rate, twelve times the monthly rate. It is not the effective annual rate. The effective annual rate at 7% nominal, compounded monthly, is higher than 7% because of the compounding. Truth-in-lending style APR for this monthly loan is the nominal figure.',
      'The $25,000, 6%, 60-month loan with no fees has a payment of $483.32 and a finance charge of $3,999.20. The APR is 6.000%. Adding a fee on that loan would lift the APR above 6% and would not change the payment, because the payment is still computed on $25,000 at 6%. The fee changes what you receive, not the note.'
    ],
    formula: 'Monthly note rate i = annual note percent / 1200\nPayment M = principal × i × (1 + i)^n / ((1 + i)^n − 1)\nIf i = 0: M = principal / n\nAmount financed = principal − prepaid finance charges\nAPR is 12 times the monthly rate r that solves\n  amount financed = M × (1 − (1 + r)^(−n)) / r\nThe displayed APR is rounded to three decimal places.',
    formulaNotes: [
      'The finance charge on the detail line is total interest on the note plus the prepaid charges. On the sample that is $1,115.75 + $300 = $1,415.75. It is not the APR. The APR is a rate, not a dollar total.',
      'Regulation Z disclosures can include charges this form never sees, and they can use a different calendar for the first period. Use a matching disclosure as a check when the loan really is a fixed monthly payment with the charges paid up front. A mortgage with an interest-only period will not match.'
    ],
    examplesHeading: 'Worked APR examples',
    examples: [
      {
        title: '$10,000 at 7% for 36 months, with $300 up front',
        paragraphs: [
          'The calculator shows 9.069% APR. The payment is $308.77. The amount financed is $9,700.00. The note rate is 7.00%. The finance charge is $1,415.75. The term line says 36 monthly payments.',
          'The APR is more than two points above the note because $300 is 3% of the principal and the loan is only three years long. The same $300 on a longer loan would move the APR less. The payment does not become $308.77 plus a share of the $300. You pay the $300 at the start and then pay $308.77 a month.'
        ]
      },
      {
        title: 'The same loan with no prepaid charge',
        paragraphs: [
          'Set the charges to 0. The APR is 7.000%. The payment stays $308.77. The amount financed is $10,000.00. The finance charge falls to $1,115.75, which is the interest only.',
          'The detail line says that with no prepaid finance charge the APR matches the note rate, and that this is the nominal annual rate rather than the effective annual rate. Do not compare 7.000% here with an effective annual rate quoted by a savings account without converting one of them.'
        ]
      },
      {
        title: 'A 60-month car loan at 6% with no fees',
        paragraphs: [
          'Principal 25000, rate 6, months 60, fees 0. The payment is $483.32 and the APR is 6.000%. Interest over the term is $3,999.20. The car payment calculator shows the same payment and the same interest for those inputs.',
          'This page will not add sales tax, a title fee, or insurance to the principal unless you include them in the amount you repay. If a dealer prepaid charge is kept outside the amount financed, type it in the charges box. If it was added to the amount you repay, it is already inside the principal and should not be typed again.'
        ]
      }
    ],
    table: {
      heading: 'APR on a $10,000 loan at a 7% note rate',
      caption: 'Each row is what this calculator displays. The payment is the fully amortizing monthly payment on the principal at the note rate. The APR rises when prepaid charges reduce the amount financed.',
      headers: ['Term', 'Prepaid charges', 'Payment', 'APR'],
      rows: [
        ['36 months', '$0', '$308.77', '7.000%'],
        ['36 months', '$300', '$308.77', '9.069%'],
        ['60 months', '$0', '$198.01', '7.000%'],
        ['60 months, $25,000 at 6%', '$0', '$483.32', '6.000%']
      ]
    },
    limitsHeading: 'What this APR leaves out',
    limits: [
      'The term has to be a whole number of months. Biweekly payments, a skipped first month, and a balloon at the end are not modeled. A 0% note with a prepaid charge still has an APR above zero, because you repay more than you received.',
      'Mortgage insurance, discount points that the lender treats as prepaid finance charges, and fees that are financed rather than paid up front need a careful split. If you add a fee to the principal and also type it as a prepaid charge, the APR is counted twice.',
      'The payment is rounded for display. The APR search uses the full-precision payment. A lender that rounds the payment to the cent before solving the APR can differ in the third decimal.',
      'This is not the effective annual rate, and it is not the rate on the savings goal page. A 7% APR on a monthly loan and a 7% compound return on savings are different contracts.'
    ],
    disclaimer: 'This APR is an estimate for a fixed monthly loan with charges paid up front. It is not a lender’s Truth in Lending disclosure.',
    faqs: [
      {
        q: 'What is the APR on $10,000 at 7% for 36 months with a $300 fee?',
        a: '9.069%. The monthly payment is $308.77, calculated on the full $10,000 at 7%. The amount financed is $9,700. The finance charge, interest plus the fee, is $1,415.75. With the fee removed, the APR is 7.000% and the payment does not change.'
      },
      {
        q: 'Why does the APR stay equal to the note rate when there is no fee?',
        a: 'The amount financed is then the same as the principal the payment was built from. The rate that discounts the payments back to that principal is the note rate. The headline shows 7.000% or 6.000% in the no-fee examples. That is a nominal annual rate, not an effective annual rate.'
      },
      {
        q: 'Does this APR calculator match a car payment?',
        a: '$25,000 at 6% for 60 months with no prepaid charge has a payment of $483.32 and an APR of 6.000%. The car payment calculator shows the same $483.32 and $3,999.20 of interest. A dealer fee typed into this page changes the APR and does not change that payment.'
      },
      {
        q: 'Can the prepaid charges be larger than the loan?',
        a: 'No. The form rejects charges above the amount you repay. A charge of zero is allowed. A charge equal to the principal would leave nothing financed and is not a useful APR.'
      },
      {
        q: 'Is this APR a mortgage annual percentage rate?',
        a: 'Only in the special case of a fixed monthly payment with the charges paid up front and no mortgage insurance. Odd days, an interest-only period, or mortgage insurance need the lender’s disclosure. The mortgage payment page on this site does not compute an APR.'
      }
    ],
    relatedLinks: [
      { slug: 'loan-calculator', label: 'Personal and auto loan calculator', note: 'The payment from an amount, a rate, and a term in years. It does not solve an APR from a prepaid charge.' },
      { slug: 'car-payment-calculator', label: 'Car payment calculator', note: '$25,000 at 6% for 60 months is $483.32 a month. This APR page shows 6.000% when there is no prepaid charge.' },
      { slug: 'mortgage-calculator', label: 'Fixed-rate mortgage payment calculator', note: 'Principal and interest only. It does not disclose an APR.' },
      { slug: 'down-payment-calculator', label: 'Down payment calculator', note: 'Turns a home price and a percent into the cash and the loan amount. It does not price the APR on that loan.' }
    ]
  },
  'us-federal-income-tax-calculator': {
    title: 'US Federal Income Tax Calculator 2026 (Brackets) | ClearCalc',
    h1: 'US Federal Income Tax Bracket Calculator for 2026',
    description: 'See 2026 federal income tax by bracket. $80,000 single, after the $16,100 standard deduction, is $8,770.00 of tax. $65,000 single is $5,620.00. Social Security and state tax are not included.',
    intro: [
      'This federal income tax calculator splits a 2026 wage across the IRS tax brackets after the standard deduction. The brackets and the deduction are the tax year 2026 figures in Revenue Procedure 2025-32. Single filers deduct $16,100. Married filing jointly deducts $32,200. The sample is $80,000, single, with no 401(k). Taxable income is $63,900. Federal income tax is $8,770.00. The marginal rate on the next dollar of taxable income is 22%.',
      'The tax is not 22% of the wage. The first $12,400 of taxable income is taxed at 10%, the next slice at 12%, and only the remainder at 22%. On the sample those three pieces are $1,240.00, $4,560.00, and $2,970.00. They add to $8,770.00. The effective rate on the $80,000 wage is 10.96%, because $8,770 / $80,000 is 0.109625.',
      'A state paycheck calculator on this site starts from the same federal tax and then subtracts Social Security, Medicare, and that state’s income tax. At $65,000 single the federal line here is $5,620.00, which is the federal line on the Georgia and Texas paycheck pages. This page stops at the federal income tax. It does not produce a take-home paycheck.'
    ],
    steps: [
      'Enter annual wages in dollars. The sample is 80000. Other income is not added.',
      'Choose single or married filing jointly. Joint uses the wider brackets and the $32,200 standard deduction. It does not add a spouse’s wages.',
      'Enter a traditional 401(k) deferral, or leave 0. It is removed before the standard deduction, and it is capped at the 2026 elective limit of $24,500 or at wages, whichever is smaller.',
      'Press Calculate. The headline is the federal income tax. Each bracket that the taxable income reaches is listed underneath.'
    ],
    howHeading: 'How 2026 federal income tax is bracketed',
    howItWorks: [
      'Taxable income is wages minus the traditional 401(k), then minus the standard deduction, and not below zero. On $80,000 single with no deferral, $16,100 comes off and $63,900 remains. The 10% bracket covers the first $12,400 and the tax is $1,240.00. The 12% bracket covers the next $38,000, from $12,400 to $50,400, and the tax is $4,560.00. The 22% bracket covers the remaining $13,500, from $50,400 to $63,900, and the tax is $2,970.00. The sum is $8,770.00.',
      'The same $80,000 filed jointly has a $32,200 deduction and $47,800 of taxable income. The 10% bracket runs to $24,800, which is $2,480.00. The rest, $23,000, is in the 12% bracket at $2,760.00. Federal income tax is $5,240.00. The marginal rate is 12%, not 22%. A spouse’s wages are not in that figure. Typing joint on one salary applies the whole joint deduction to that salary.',
      '$65,000 single is the wage used on many state paycheck pages. Taxable income is $48,900. Tax is $1,240.00 at 10% plus $4,380.00 at 12%, which is $5,620.00. The marginal rate is 12% because $48,900 is still under $50,400. Georgia then charges its own 4.99% on a different base. Texas charges no state income tax. Neither of those state results is added here.',
      'A traditional 401(k) reduces taxable income. The cap used here is $24,500, the 2026 elective deferral limit for someone under the catch-up ages. Catch-up contributions are not added on top. A Roth amount typed into the deferral box is treated as pre-tax, which is the wrong direction. Social Security wages are not reduced on the paycheck pages by a 401(k), and this page does not compute Social Security at all.'
    ],
    formula: 'Tax year 2026. IRS Revenue Procedure 2025-32.\nTaxable income = max(0, wages − traditional 401(k) − standard deduction)\nStandard deduction = $16,100 single, or $32,200 married filing jointly\nSingle brackets: 10% to $12,400, 12% to $50,400, 22% to $105,700, 24% to $201,775, 32% to $256,225, 35% to $640,600, 37% above\nJoint brackets: 10% to $24,800, 12% to $100,800, 22% to $211,400, 24% to $403,550, 32% to $512,450, 35% to $768,700, 37% above\nThe 401(k) is capped at $24,500\nFederal income tax is the sum of taxable income in each bracket times that bracket’s rate',
    formulaNotes: [
      'Each bracket’s tax on the detail lines is rounded to the cent on its own. The headline uses one rounding of the full tax, which is the same method as the paycheck calculators. On the sample the pieces $1,240.00, $4,560.00, and $2,970.00 add to the headline with nothing left over.',
      'The standard deduction is the ordinary one. The additional amounts for age 65 or blindness are not added. Itemized deductions are not compared with the standard deduction. If your itemized deductions are larger, the tax here is high.'
    ],
    examplesHeading: 'Worked 2026 federal income tax examples',
    examples: [
      {
        title: '$80,000 single',
        paragraphs: [
          'The calculator shows $8,770.00 federal income tax. The standard deduction is $16,100.00. Taxable income is $63,900.00. The effective rate on wages is 10.96%. The bracket lines are $1,240.00, $4,560.00, and $2,970.00. The marginal rate is 22.00%.',
          'None of that $8,770.00 is Social Security or Medicare. On a paycheck those would be extra. The state tax, if any, would be extra as well. The headline is only the federal income tax on this wage after the standard deduction.'
        ]
      },
      {
        title: 'The same wage, married filing jointly',
        paragraphs: [
          'Switch the status and leave the wage at $80,000. Federal income tax is $5,240.00. Taxable income is $47,800.00. The effective rate on wages is 6.55%. The marginal rate is 12.00%. The 22% bracket is not reached.',
          'The $3,530.00 gap from the single result is the wider deduction and the wider 10% and 12% brackets. It is valid only when this $80,000 is the only income on the joint return. A second wage should be added to the salary before you run it, with the deduction left at $32,200 once.'
        ]
      },
      {
        title: '$65,000 single, the paycheck-page wage',
        paragraphs: [
          'Federal income tax is $5,620.00. Taxable income is $48,900.00. The 10% piece is $1,240.00 and the 12% piece is $4,380.00. The marginal rate is 12.00%. The effective rate on wages is 8.65%.',
          'Georgia’s paycheck page uses this same $5,620.00 and then subtracts $2,495.00 of Georgia tax, Social Security, and Medicare. Texas uses the same federal tax and subtracts no state income tax. This page’s job ends at $5,620.00.'
        ]
      }
    ],
    table: {
      heading: '2026 federal income tax at selected wages',
      caption: 'No 401(k). The standard deduction is $16,100 single or $32,200 joint. Bracket tax uses Revenue Procedure 2025-32. Social Security, Medicare, and state tax are not included.',
      headers: ['Wages', 'Status', 'Taxable income', 'Federal income tax', 'Marginal rate'],
      rows: [
        ['$65,000', 'Single', '$48,900.00', '$5,620.00', '12%'],
        ['$80,000', 'Single', '$63,900.00', '$8,770.00', '22%'],
        ['$80,000', 'Married filing jointly', '$47,800.00', '$5,240.00', '12%']
      ]
    },
    limitsHeading: 'What this federal tax estimate leaves out',
    limits: [
      'Social Security, Medicare, Additional Medicare Tax, and every state and city income tax are omitted on purpose. A take-home figure needs a paycheck page. The Georgia page is the one that continues from the $5,620.00 federal line into a Georgia paycheck.',
      'Credits are not applied. The child tax credit, the earned income credit, and education credits can reduce the tax or create a refund. This form stops at tax before credits, so it can overstate what a return actually pays.',
      'The additional standard deduction for age or blindness, itemized deductions, and investment income that is taxed at long-term capital-gain rates are not fields. A wage is taxed at ordinary rates. A household with both wages and qualified dividends needs a return, not this split.',
      'Catch-up 401(k) contributions above $24,500 are cut back. A deferral above wages is cut back to wages. The joint deduction is applied once to the wage you type.'
    ],
    disclaimer: 'This federal income tax figure is general information for a 2026 wage after the standard deduction. It is not a Form 1040 and not tax advice.',
    faqs: [
      {
        q: 'How much federal income tax is due on $80,000 single in 2026?',
        a: 'With no 401(k), taxable income is $63,900 after the $16,100 standard deduction, and the tax is $8,770.00. That is $1,240.00 at 10%, $4,560.00 at 12%, and $2,970.00 at 22%. The effective rate on the wage is 10.96%. Social Security and state tax are not included.'
      },
      {
        q: 'Why is the 2026 federal tax on $65,000 single equal to $5,620?',
        a: 'Taxable income is $48,900. The 10% bracket is $1,240.00 and the 12% bracket on the remaining $36,500 is $4,380.00. The sum is $5,620.00. Georgia and Texas paycheck pages use that same federal line and then apply their own state rules.'
      },
      {
        q: 'Do the 2026 federal brackets tax the whole wage at the marginal rate?',
        a: 'No. Only the slice inside each bracket uses that bracket’s rate. On $80,000 single the marginal rate is 22%, and the tax is $8,770.00 rather than 22% of $80,000. The joint result on the same wage is $5,240.00, and the marginal rate is 12%.'
      },
      {
        q: 'Does a traditional 401(k) reduce this federal income tax?',
        a: 'Yes. The deferral is subtracted before the standard deduction, up to $24,500 in 2026. A Roth contribution should not be typed in that box. Catch-up amounts above $24,500 are not added.'
      },
      {
        q: 'Does this federal calculator include Social Security and Medicare?',
        a: 'No. The headline is federal income tax only. Employee Social Security is 6.2% up to the 2026 wage base, and employee Medicare is 1.45%, on the paycheck calculators. They are not subtracted here.'
      }
    ],
    relatedLinks: [
      { slug: 'georgia-paycheck-calculator', label: 'Georgia paycheck calculator for 2026', note: 'At $65,000 single, federal tax is the same $5,620.00, then Georgia adds $2,495.00 and the two-week take-home is $1,996.63.' },
      { slug: 'texas-paycheck-calculator', label: 'Texas paycheck calculator for 2026', note: 'The same federal income tax structure, with state income tax at $0. Texas still has a statewide sales tax, which is not this wage tax.' },
      { slug: '401k-contribution-calculator', label: '2026 401(k) contribution calculator', note: 'Check a deferral against the $24,500 limit before you type it here.' },
      { slug: 'sales-tax-calculator', label: 'Sales tax calculator by state', note: 'A tax on a purchase. It is not federal income tax on a wage.' }
    ]
  },
  'canada-gst-hst-calculator': {
    title: 'Canada GST/HST Calculator by Province (2025 Rates) | ClearCalc',
    h1: 'Canada GST and HST Calculator',
    description: 'Add or remove GST or HST with the CRA provincial rates. Ontario is 13% and $100 becomes $113.00. Nova Scotia is 14% from 1 April 2025. Quebec adds 9.975% QST to 5% GST.',
    intro: [
      'This Canada GST/HST calculator adds the federal goods and services tax, or the harmonized sales tax, to a price, or removes it from a total. The rates are the Canada Revenue Agency’s provincial table. The sample is $100 before tax in Ontario. HST is $13.00 and the headline is $113.00 total. Removing HST from $113.00 returns $100.00.',
      'Participating provinces charge one HST rate: Ontario 13%, Nova Scotia 14% for tax that becomes payable on or after 1 April 2025, and New Brunswick, Newfoundland and Labrador, and Prince Edward Island 15%. Nova Scotia was 15% before that date. The other provinces and the territories charge 5% GST. British Columbia, Manitoba, Saskatchewan, and Quebec also have a provincial sales tax that is not part of HST. This page adds Quebec’s 9.975% QST because it is charged with the GST on the same price. It does not add British Columbia’s 7% PST, Manitoba’s 7% RST, or Saskatchewan’s 6% PST.',
      'The rate depends on the place of supply, not on where the seller’s head office sits. A good delivered in Ontario is generally Ontario’s 13% even if the seller is in Alberta. This form uses the province you select. Zero-rated groceries are 0% everywhere, and this page will not notice that you typed a grocery total.'
    ],
    steps: [
      'Enter the amount in Canadian dollars. The sample is 100. If the amount already includes the tax, switch the menu to that choice.',
      'Choose the province or territory where the supply is made. The sample is Ontario at 13%.',
      'Press Calculate. Adding tax, the headline is the total. Removing tax, the headline is the price before tax.',
      'Read the note under the result. For British Columbia, Manitoba, and Saskatchewan it says the provincial sales tax was not added. For Quebec it splits GST and QST.'
    ],
    howHeading: 'How GST and HST are applied by province',
    howItWorks: [
      'On a price before tax, the tax is the price times the rate, rounded to the nearest cent. $100 at 13% is $13.00 and the total is $113.00. $100 at Nova Scotia’s 14% is $14.00 and the total is $114.00. $100 at 5% GST is $5.00 and the total is $105.00. $49.99 in Alberta is $49.99 × 5% = $2.4995, which rounds to $2.50. The total is $52.49.',
      'Removing the tax divides the total by 1 plus the rate. $113.00 / 1.13 is $100.00. $114.00 at 14% returns $100.00. $105.00 at 5% returns $100.00. The tax inside the total is the total minus that price.',
      'Quebec is two taxes on the price before GST. GST is 5%. QST is 9.975% of the same price, not of the GST-inclusive amount. On $100, GST is $5.00 and QST is $9.975, which rounds to $9.98. The total is $114.98. Removing tax from $114.98 searches the nearby cent so the rebuilt GST and QST land on that total, and the price comes back to $100.00. The combined factor 1.14975 is the check, not a single HST rate.',
      'A provincial sales tax in British Columbia, Manitoba, or Saskatchewan is a separate statute with its own exemptions. Selecting British Columbia uses 5% GST only and says the 7% PST is not included. Adding 12% yourself would be a different calculator. If you already know the combined rate a shop charged, the US sales tax page can apply a typed percent, but its symbol is the US dollar.'
    ],
    formula: 'GST or HST = round(price × rate ÷ 100) to the nearest cent\nTotal = price + tax\nPrice inside a total = round(total ÷ (1 + rate ÷ 100))\nOntario 13%. Nova Scotia 14% on or after 1 April 2025. New Brunswick, Newfoundland and Labrador, and Prince Edward Island 15%.\nAlberta, British Columbia, Manitoba, Saskatchewan, the Northwest Territories, Nunavut, and Yukon: 5% GST. Provincial sales tax in B.C., Manitoba, and Saskatchewan is not added.\nQuebec: GST 5% of the price, QST 9.975% of the price before GST, each rounded to the cent.',
    formulaNotes: [
      'CRA’s rate table is the source for the provincial rates, including the Nova Scotia decrease from 15% to 14% on 1 April 2025. Tax that became payable before that date can still be 15%. This page uses 14% and says so. It does not ask for the invoice date.',
      'QST is calculated on the consideration before GST, which is the rule Revenu Québec has used since 2013. Rounding GST and QST separately is why $100 becomes $114.98 rather than a single rounded 14.975%.'
    ],
    examplesHeading: 'Worked GST and HST examples',
    examples: [
      {
        title: '$100 in Ontario, Nova Scotia, and Alberta',
        paragraphs: [
          'Ontario, price before tax, 100. The calculator shows $113.00 total and HST of $13.00. Nova Scotia on the same $100 shows $114.00 total and HST of $14.00. The note says 14% applies on or after 1 April 2025. Alberta shows GST of $5.00 and a $105.00 total, and it says Alberta has no provincial sales tax.',
          'Removing tax from $113.00 with Ontario selected returns $100.00 before tax and HST of $13.00 inside the total. The province has to match the rate that was charged. Removing 13% from a Nova Scotia total would invent a price.'
        ]
      },
      {
        title: 'Quebec GST and QST on $100',
        paragraphs: [
          'Province Quebec, amount 100, price before tax. GST is $5.00. QST is $9.98. The total is $114.98. The note says QST is 9.975% of the price before GST and is not HST.',
          'Amount 114.98, total that already includes tax, Quebec. The headline is $100.00 before tax. GST inside the total is $5.00 and QST is $9.98. The rounding gap is $0.00. A total that was not built from those two rounded taxes can leave a one-cent gap, which the page reports.'
        ]
      },
      {
        title: '$49.99 in Alberta, and a province that also has PST',
        paragraphs: [
          'Alberta, $49.99 before tax. GST is $2.50 and the total is $52.49. The unrounded tax is $2.4995. The cent of rounding is the whole story. There is no second Alberta tax on this page.',
          'British Columbia on $100 is $5.00 of GST and a $105.00 total. The detail line says the 7% PST is not added. Manitoba and Saskatchewan say the same thing about their own provincial taxes. A shop in Vancouver that charged both taxes collected more than $5.00. This form is the GST piece only, except in Quebec, where QST is included.'
        ]
      }
    ],
    table: {
      heading: 'Tax on $100 before tax, by province',
      caption: 'Each row is what this calculator displays for a $100 price before tax. PST in British Columbia, Manitoba, and Saskatchewan is not included. Quebec includes QST. Nova Scotia uses 14%.',
      headers: ['Place', 'Taxes', 'Tax', 'Total'],
      rows: [
        ['Ontario', '13% HST', '$13.00', '$113.00'],
        ['Nova Scotia', '14% HST', '$14.00', '$114.00'],
        ['New Brunswick', '15% HST', '$15.00', '$115.00'],
        ['Alberta', '5% GST', '$5.00', '$105.00'],
        ['British Columbia', '5% GST, PST not included', '$5.00', '$105.00'],
        ['Quebec', '5% GST + 9.975% QST', '$14.98', '$114.98']
      ]
    },
    limitsHeading: 'What a single GST or HST rate leaves out',
    limits: [
      'Zero-rated supplies, exempt supplies, and point-of-sale rebates are not detected. Basic groceries can be zero-rated. This page will tax whatever amount you type at the provincial rate you chose.',
      'Place-of-supply rules are more specific than a province menu. Services, intangible property, and goods that are shipped across a border can be taxed where the recipient is, not where the seller is. The form trusts the province you pick.',
      'British Columbia PST, Manitoba RST, and Saskatchewan PST have their own rates and exemptions. They are named in the result and not calculated. Quebec QST is calculated. Do not add 9.975% a second time.',
      'The Nova Scotia 14% rate is for tax payable on or after 1 April 2025. A 2024 invoice can still be 15%. Transitional rules depend on when the tax became payable. This page does not apply those rules.',
      'Take-home pay in Ontario is a wage tax, CPP, and EI. It is not HST. The Ontario paycheck page does not add 13% to a purchase, and this page does not withhold Ontario income tax from a salary.'
    ],
    disclaimer: 'This GST/HST figure applies the CRA provincial rate you selected to one amount. It is not a ruling on place of supply, and provincial sales tax outside Quebec is not included.',
    faqs: [
      {
        q: 'How much is Ontario HST on $100?',
        a: '$13.00 of HST and a $113.00 total. Removing 13% from $113.00 returns $100.00. Ontario’s HST is a single tax. There is no separate Ontario PST on top of it in this calculator.'
      },
      {
        q: 'What is the Nova Scotia HST rate in 2025 and 2026?',
        a: '14%, for GST/HST that becomes payable on or after 1 April 2025. On $100 the tax is $14.00 and the total is $114.00. The rate was 15% before that date. This page uses 14% and does not ask whether the tax became payable earlier.'
      },
      {
        q: 'How do Quebec GST and QST combine on $100?',
        a: 'GST is $5.00. QST is 9.975% of the $100 price before GST, which rounds to $9.98. The total is $114.98. QST is not charged on top of the GST. It is not HST.'
      },
      {
        q: 'Does this calculator include British Columbia PST?',
        a: 'No. British Columbia is 5% GST, or $5.00 on $100. The result says the 7% PST is not added. Manitoba’s 7% RST and Saskatchewan’s 6% PST are left out the same way. Quebec’s QST is the provincial tax this page does add.'
      },
      {
        q: 'Is GST the same as income tax withheld from a Canadian paycheck?',
        a: 'No. GST and HST are taxes on a supply. The Ontario, Alberta, and other take-home pay calculators estimate income tax, CPP, and EI on a salary. A $100 purchase and a $70,000 salary are different amounts and different taxes.'
      }
    ],
    relatedLinks: [
      { slug: 'ontario-take-home-pay-calculator', label: 'Ontario take-home pay calculator for 2026', note: 'Income tax, CPP, and EI on a salary. Ontario HST at 13% is this page, not that paycheck.' },
      { slug: 'alberta-take-home-pay-calculator', label: 'Alberta take-home pay calculator for 2026', note: 'A wage tax. Alberta GST is 5%, and there is no provincial sales tax on this GST page.' },
      { slug: 'sales-tax-calculator', label: 'US sales tax calculator by state', note: 'Dollar rates such as Texas at 6.25%. Not Canadian GST or HST.' },
      { slug: 'uk-vat-calculator', label: 'UK VAT calculator', note: '20%, 5%, or 0% in pounds. Not Canadian HST.' }
    ]
  },
  'weight-converter': {
    title: 'Weight Converter: Kilograms, Pounds, and Stone | ClearCalc',
    h1: 'Kilograms, Pounds, and Stone Converter',
    description: 'Convert kilograms, pounds, and stone with the international pound of 0.45359237 kg. 70 kg is 154.32 lb and 11 stone 0.32 lb. 11 stone is 154 lb.',
    intro: [
      'This weight converter turns a weight in kilograms, pounds, or stone into the other two. The pound is the international avoirdupois pound, exactly 0.45359237 kilograms. The stone is exactly 14 of those pounds. The sample is 70 kilograms. The headline is 154.32 lb. The fuller pound line is 154.3236 lb, and the stone line is 11 st 0.32 lb.',
      'The length converter on this site starts from meters and does not convert mass. A person’s height in centimeters and weight in kilograms meet on the BMI page, which squares the height. This page only changes the unit of the weight. It does not compute BMI, body fat, or an ideal weight.',
      'Eleven stone is 154 pounds exactly, because 11 × 14 = 154. The calculator shows 69.853 kg for 154 lb or for 11 stone. The headline when you start from pounds is the kilogram figure, 69.853 kg. When you start from stone, the headline is the pound figure, 154 lb.'
    ],
    steps: [
      'Enter the weight. The sample is 70. A weight of 0 is allowed. The upper limit is 1,000,000 of the unit you chose.',
      'Choose kilograms, pounds, or stone. The sample is kilograms.',
      'Press Calculate. If you started in kilograms or stone, the headline is pounds, except that a start in pounds uses kilograms as the headline.',
      'Read the kilogram, pound, decimal-stone, and stone-and-pounds lines. They are the same weight.'
    ],
    howHeading: 'How kilograms, pounds, and stone are defined',
    howItWorks: [
      'The international yard and pound agreement fixes the pound at 0.45359237 kilograms exactly. Multiply pounds by that constant to get kilograms. Divide kilograms by that constant to get pounds. 70 / 0.45359237 is 154.3235835… pounds. The headline keeps two decimal places, 154.32 lb. The detail line keeps four decimal places, 154.3236 lb.',
      'A stone is 14 pounds, not an approximate 6.35 kilograms. Fourteen times 0.45359237 is 6.35029318 kilograms per stone. The stone-and-pounds line takes the whole number of stones and leaves the remainder in pounds. For 70 kg the whole stones are 11, and the remainder is 0.32 lb at two decimal places. The decimal stone line is 11.0231.',
      'Starting from 154 pounds produces 69.85322 kg on the detail line and a headline of 69.853 kg. That is not 70 kg. The 0.147 kg gap is the difference between 154 lb and 154.3236 lb. Rounding the headline back to 154 lb and converting again will not return 70 kg. Keep the kilogram if that was the measurement you started with.',
      'The ounce is 1/16 of a pound and is not a field. A recipe that needs ounces can multiply the pound line by 16. Body weight for the BMI calculator should be typed in kilograms, or in pounds on that page’s US setting. Do not type a stone count into the BMI pound field.'
    ],
    formula: '1 pound = 0.45359237 kilograms exactly\n1 stone = 14 pounds exactly\nKilograms = pounds × 0.45359237\nPounds = kilograms / 0.45359237\nStone = pounds / 14\nThe headline rounds pounds to two decimal places, or kilograms to three, depending on the unit you started from.',
    formulaNotes: [
      'The pound used here is the international pound. A historical pound, a troy pound, or a metric pound of 500 grams will not match. Kitchen scales that show pounds and ounces are avoirdupois if they follow the usual US or UK grocery convention.',
      'Display rounding is not a second definition. 154.3236 lb rounded to 154.32 lb is a display choice. The conversion itself uses the full factor.'
    ],
    examplesHeading: 'Worked weight conversions',
    examples: [
      {
        title: '70 kilograms',
        paragraphs: [
          'Unit kilograms, value 70. The headline is 154.32 lb. Kilograms stay 70. Pounds are 154.3236. Stone is 11.0231. Stone and pounds are 11 st 0.32 lb.',
          'The BMI page, given 70 kg and a height, computes a ratio. It does not report 154.32 lb as its answer. If you switch that page to pounds, type 154.32 only if you accept the rounded pound. The unrounded 154.3236 lb is closer to 70 kg.'
        ]
      },
      {
        title: '154 pounds and 11 stone',
        paragraphs: [
          'Value 154, unit pounds. The headline is 69.853 kg. The kilogram detail is 69.85322. Stone is 11, and the remainder is 0 lb, because 154 is exactly 11 × 14.',
          'Value 11, unit stone. The headline is 154 lb. Kilograms are 69.85322, the same figure as 154 pounds. Eleven stone and 154 pounds are the same weight. Neither one is exactly 70 kg.'
        ]
      },
      {
        title: 'One pound and one stone as checks',
        paragraphs: [
          'One pound is 0.45359237 kg. The calculator’s kilogram line for 1 pound should agree with that constant to the decimals it prints. One stone is 14 pounds and 6.35029318 kg. Those are the definitions, not sample body weights.',
          'A zero weight stays zero in every unit. A negative weight is rejected. The converter does not know whether the number is a person, a parcel, or a barbell. It only multiplies by the factor.'
        ]
      }
    ],
    table: {
      heading: 'Kilograms, pounds, and stone',
      caption: 'Each row is what this calculator displays when you enter the first figure in the unit named. Pounds in the headline are rounded to two decimal places. The pound detail keeps four.',
      headers: ['Entered', 'Headline', 'Kilograms', 'Pounds detail', 'Stone and pounds'],
      rows: [
        ['70 kg', '154.32 lb', '70', '154.3236', '11 st 0.32 lb'],
        ['154 lb', '69.853 kg', '69.85322', '154', '11 st 0 lb'],
        ['11 stone', '154 lb', '69.85322', '154', '11 st 0 lb']
      ]
    },
    limitsHeading: 'What this weight conversion does not do',
    limits: [
      'It does not convert ounces, grams as a separate entry, or tons. Grams are kilograms times 1,000, which you can do from the kilogram line. A US short ton and a UK long ton are different, and neither is a field.',
      'It does not compute BMI, ideal weight, or body-fat percentage. Those pages use a weight together with a height or with circumferences. A converted number still has to be typed into them.',
      'Rounding the headline and converting back will drift. 70 kg becomes 154.32 lb on the headline, and 154.32 lb is not the full 154.3236 lb that came from 70 kg.',
      'Medical dosing is outside this tool. A kilogram on a chart and a pound on a scale need the full factor, not a rounded 2.2. This page uses 0.45359237, which is 1/2.2046226218… rather than 2.2.'
    ],
    disclaimer: 'This weight conversion uses the international avoirdupois pound. It is not a medical measurement and not a shipping quote.',
    faqs: [
      {
        q: 'How many pounds is 70 kilograms?',
        a: '154.32 lb on the headline, from 154.3236 lb before that rounding. The stone line is 11 st 0.32 lb. The factor is 1 pound = 0.45359237 kg. Eleven stone is 154 lb exactly, which is 69.853 kg, not 70 kg.'
      },
      {
        q: 'How many kilograms are in a stone?',
        a: 'One stone is 14 pounds, and one pound is 0.45359237 kg, so one stone is 6.35029318 kg. The calculator shows 11 stone as 154 lb and 69.85322 kg.'
      },
      {
        q: 'Why does 154 pounds not convert back to 70 kilograms?',
        a: 'Because 70 kg is 154.3236 lb, not 154 lb. Starting from the rounded 154 lb produces 69.853 kg. Keep the original kilograms if you need the round trip to match.'
      },
      {
        q: 'Is a stone used in the United States?',
        a: 'The stone is the customary body-weight unit in the UK and Ireland. US scales usually show pounds. The pound in both places, for this converter, is the same international pound of 0.45359237 kg.'
      },
      {
        q: 'Can this weight converter calculate BMI?',
        a: 'No. It only changes the unit. The BMI calculator accepts kilograms and centimeters, or pounds and inches. Type the converted weight there if you need the ratio. Do not type a stone count into the pound field.'
      }
    ],
    relatedLinks: [
      { slug: 'length-converter', label: 'Length converter', note: 'Meters to feet, inches, yards, or kilometers. It does not convert a weight.' },
      { slug: 'bmi-calculator', label: 'Adult BMI calculator', note: 'Uses kilograms and centimeters, or pounds and inches. 70 kg is a weight you can type there. This page does not square a height.' },
      { slug: 'ideal-weight-calculator', label: 'Ideal weight calculator', note: 'Devine, Robinson, and Miller from a height. A man at 175 cm has a Devine figure of 70.5 kg, which is a formula, not this conversion.' },
      { slug: 'fuel-economy-converter', label: 'Fuel economy converter', note: 'Miles, gallons, and litres. A different kind of unit from kilograms and stone.' }
    ]
  },
  'add-days-calculator': {
    title: 'Add Days to a Date Calculator | ClearCalc',
    h1: 'Add or Subtract Days from a Date',
    description: 'Add or subtract calendar days from a date. 1 January 2026 plus 90 days is 1 April 2026. 1 January 2024 plus 365 days is 31 December 2024 because 2024 is a leap year.',
    intro: [
      'This add-days calculator moves a start date forward or backward by a number of calendar days. The sample is 1 January 2026 plus 90 days. The headline is 1 April 2026. The start date is day zero. Adding 1 lands on the next calendar date. A negative count moves backward. 1 March 2026 minus 1 day is 28 February 2026, because 2026 is not a leap year.',
      'The days-between calculator answers the other question. You give it two dates and it counts the elapsed days. This page gives you one date and a count, and it returns the other date. The two pages use the same civil calendar. Weekends are included. Bank holidays and US federal holidays are not skipped. The UK working-days page and the US business-days page are the ones that drop weekends and, if you ask, holidays.',
      'Leap days are real dates. Adding 365 days to 1 January 2024 lands on 31 December 2024, not 1 January 2025, because 2024 contains 29 February. Adding 365 days to 1 January 2026 lands on 1 January 2027, because 2026 has 365 days and the start is not counted as one of the 365 steps in a way that skips the anniversary. The result for 1 January plus 365 in a non-leap year is the next 1 January only when the year you leave has 365 days. The 2024 example is the one that shows the leap day eating one of the 365 steps.'
    ],
    steps: [
      'Enter the start date. The sample is 2026-01-01.',
      'Enter the number of days to add. Use a negative number to subtract. The sample is 90. The allowed range is −36500 to 36500, about a century either way.',
      'The count has to be a whole number. A fraction of a day is rejected because the fields are dates, not times.',
      'Press Calculate. The headline is the resulting calendar date. The start, the count, and the elapsed-day check are underneath.'
    ],
    howHeading: 'How days are added on the civil calendar',
    howItWorks: [
      'The start date is read as a year, month, and day and checked against a real calendar date. 31 April is rejected. The day count is then added with the calendar’s own month lengths. 1 January plus 90 days walks through January’s 31 days, February’s 28 days in 2026, and March’s 31 days. 31 + 28 + 31 = 90, so the date is 1 April 2026. The elapsed-day line repeats 90, which is the check that the result is that many midnights away.',
      'Subtracting is the same walk in reverse. 1 March 2026 plus −1 is 28 February 2026. In 2024, 1 March minus 1 day is 29 February. The form does not have a separate leap-year switch. The calendar date you type decides whether February has 29 days.',
      'The age calculator borrows months and reports years, months, and days. It is not this day count. The days-between page reports an absolute elapsed count and does not care which date you enter first. This page keeps the direction. Adding 90 and then adding −90 returns the start. The days-between page would report 90 either way and would not tell you the date.',
      'The count includes Saturdays and Sundays. A deadline that is 90 working days away is a different number. England and Wales have 253 working days in 2026 on the UK working-days page, after bank holidays are removed. Ninety calendar days from 1 January is 1 April, which is not the date 90 weekdays later.'
    ],
    formula: 'Result = start date + N calendar days\nN is an integer from −36500 to 36500\nThe start date is day zero\nElapsed days from the start to the result = N\nFebruary 29 is included when the calendar has that date\nWeekends and holidays are not removed',
    formulaNotes: [
      'Adding 365 to 1 January 2024 gives 31 December 2024 because the leap day is one of the 365 days. Adding 366 to 1 January 2024 gives 1 January 2025. In 2026, adding 365 to 1 January gives 1 January 2027.',
      'The result is a civil date in the proleptic Gregorian calendar used by the runtime. Historical calendar reforms are not applied. A time of day is not an input, so the result does not depend on a time zone.'
    ],
    examplesHeading: 'Worked add-days examples',
    examples: [
      {
        title: '1 January 2026 plus 90 days',
        paragraphs: [
          'The calculator shows 1 April 2026. Days added are 90. Elapsed days are 90. January has 31 days, 2026’s February has 28, and March has 31. Those three months are exactly 90 days, so the result is the first of April rather than a day in March.',
          'The days-between calculator, given 1 January 2026 and 1 April 2026, reports 90 elapsed days. This page built the end date. That page would have measured it. Neither page removes the weekends inside those 90 days.'
        ]
      },
      {
        title: 'A leap year and a one-day step backward',
        paragraphs: [
          '1 January 2024 plus 365 days is 31 December 2024. The detail line says February 29 is included when the span crosses it. Adding 365 did not reach the next anniversary, because the leap day used one of the 365 steps.',
          '1 March 2026 plus −1 day is 28 February 2026. The same step in 2024 lands on 29 February. A negative count is a real date, not an error. The elapsed line shows −1, which matches the count you typed.'
        ]
      },
      {
        title: 'Day zero, and a year that is not 365 steps',
        paragraphs: [
          'Adding 0 days returns the start date. The elapsed line is 0. Adding 1 day returns the next date. The start is not counted as one of the days you added.',
          '1 January 2026 plus 365 days is 1 January 2027. That is the non-leap case. Use 366 only when you mean 366 calendar days. The age calculator’s “one year later” is a birthday rule, not a 365-day rule, and a 29 February birthday is the case where those two ideas separate.'
        ]
      }
    ],
    table: {
      heading: 'Dates produced by adding days',
      caption: 'Each row is what this calculator displays. The count includes weekends. Negative counts move backward.',
      headers: ['Start', 'Days added', 'Result'],
      rows: [
        ['1 January 2026', '90', '1 April 2026'],
        ['1 January 2024', '365', '31 December 2024'],
        ['1 January 2026', '365', '1 January 2027'],
        ['1 March 2026', '−1', '28 February 2026'],
        ['1 March 2024', '−1', '29 February 2024']
      ]
    },
    limitsHeading: 'What adding calendar days does not count',
    limits: [
      'Working days, business days, and bank holidays are not removed. Ninety days from a Thursday is not 90 weekdays later. Use the UK working-days calculator or the US or Canada business-days calculator when weekends should drop out.',
      'The count is whole days. Hours and minutes belong on the time-card page, which does not cross midnight. This page will not accept 1.5 days.',
      'The range stops at 36,500 days, about a century. Dates outside that window are rejected rather than wrapped. A date that is not a real calendar day, such as 31 April, is rejected.',
      'A legal deadline sometimes says “within 14 days” and means something inclusive, exclusive, or tied to a business day. This page performs the arithmetic you type. It does not interpret a statute. The days-between page has the same limit.'
    ],
    disclaimer: 'This date is calendar arithmetic, not a legal deadline. Confirm which days a contract or a filing rule actually counts.',
    faqs: [
      {
        q: 'What date is 90 days after 1 January 2026?',
        a: '1 April 2026. The 90 days run through January, February, and March of a non-leap year, which are 31 + 28 + 31 days. The start date is day zero. Weekends inside the span are included.'
      },
      {
        q: 'Why is 1 January 2024 plus 365 days still in 2024?',
        a: '2024 is a leap year. The 365 days include 29 February, so the result is 31 December 2024. Adding 366 days reaches 1 January 2025. In 2026, which is not a leap year, 1 January plus 365 days is 1 January 2027.'
      },
      {
        q: 'How do I subtract days from a date?',
        a: 'Type a negative count. 1 March 2026 plus −1 day is 28 February 2026. In 2024 the same step lands on 29 February. The elapsed line shows the negative count rather than an absolute value.'
      },
      {
        q: 'Does the add-days calculator skip weekends?',
        a: 'No. Every civil day counts. A 90-calendar-day span is not 90 working days. The UK working-days page can remove weekends and bank holidays. This page does not.'
      },
      {
        q: 'How is adding days different from the days-between calculator?',
        a: 'This page starts with one date and a count and returns the other date. The days-between page starts with two dates and returns the count. Given 1 January 2026 and 1 April 2026, that page shows 90 elapsed days, which is the count this page added.'
      }
    ],
    relatedLinks: [
      { slug: 'date-difference-calculator', label: 'Days between two dates', note: '1 January 2026 to 1 April 2026 is 90 elapsed days. This page built the 1 April date from the count.' },
      { slug: 'age-calculator', label: 'Age calculator', note: 'Completed years, months, and days from a birthday. It borrows month lengths instead of adding a raw day count.' },
      { slug: 'uk-working-days-calculator', label: 'UK working days calculator', note: 'Drops weekends and can drop bank holidays. England and Wales have 253 working days in 2026.' },
      { slug: 'us-business-days-calculator', label: 'US business days calculator', note: 'Inclusive weekdays with federal holidays removed. 2026 has 250 US business days.' }
    ]
  },
  'markup-margin-calculator': {
    title: 'Markup and Margin Calculator | ClearCalc',
    h1: 'Markup and Margin Calculator',
    description: 'Turn a markup on cost into a margin on price. A 50% markup on a $40 cost makes a $60 price and a 33.33% margin. A 50% margin on that cost needs an $80 price.',
    intro: [
      'This markup and margin calculator converts between two different percents. Markup is profit divided by cost. Margin is profit divided by price. A 50% markup on a $40 cost adds $20 and makes a $60 price. The margin on that price is $20 / $60, which is 33.33%. They are not the same percent.',
      'The sample uses the first mode: you know the cost and the markup. Switch to cost and margin when you know the percent of the selling price you want to keep. A 50% margin on a $40 cost needs a $80 price, because half of $80 is $40 of profit, and the markup on that price is 100%. The third mode ignores the percent box and computes both percents from a price and a cost you already have.',
      'A discount is a third idea. Twenty percent off a $100 price leaves $80. That is not a 20% margin and not a 20% markup. The percentage calculator can say what share one number is of another after you already know both numbers. This page is the one that builds the price.'
    ],
    steps: [
      'Choose what you know: cost and markup, cost and margin, or both the price and the cost.',
      'Enter the cost. For the first two modes, enter the percent. The sample cost is 40 and the percent is 50, which is a markup.',
      'If you chose price and cost, enter both dollar amounts. The percent box is not used. Cost cannot be above the price in that mode.',
      'Press Calculate. The headline is the price. Profit, markup, and margin are underneath.'
    ],
    howHeading: 'How markup and margin are different',
    howItWorks: [
      'Profit is price minus cost. Markup is profit / cost × 100. Margin is profit / price × 100. Starting from cost and markup, the price is cost × (1 + markup / 100). A $40 cost at a 50% markup is $40 × 1.5 = $60. Profit is $20. Margin is 20 / 60 × 100 = 33.333…%, shown as 33.33%.',
      'Starting from cost and margin, the price is cost / (1 − margin / 100). The margin has to be under 100%, because a 100% margin would mean the cost was zero. A $40 cost at a 50% margin is $40 / 0.5 = $80. Profit is $40. Markup is 40 / 40 × 100 = 100%. The sentence under the result states that relationship in general: a 50% markup is a 33.33% margin, and a 50% margin needs a 100% markup.',
      'Starting from a $60 price and a $40 cost, both percents are computed and the percent you typed is ignored. Markup is 50.00% and margin is 33.33%. The headline is the $60 price you typed. If the cost is above the price, the form rejects it rather than showing a negative margin.',
      'Rounding is to the cent on the price, then the percents are computed from those cents. A markup that does not land on a cent can make the displayed margin a hundredth away from the textbook fraction. The $40 and 50% case is exact, which is why it is the sample.'
    ],
    formula: 'Profit = price − cost\nMarkup % = profit / cost × 100\nMargin % = profit / price × 100\nFrom cost and markup: price = cost × (1 + markup / 100)\nFrom cost and margin: price = cost / (1 − margin / 100), and the margin must be under 100%\nFrom price and cost: both percents are computed, and the percent box is ignored',
    formulaNotes: [
      'Markup uses cost as the base. Margin uses price as the base. Adding a markup percent and a margin percent, or subtracting one from the other, is not a conversion. The conversion is the pair of formulas above.',
      'A cost of zero with a positive markup or margin is rejected. A price of zero cannot carry a margin. The third mode also rejects a cost above the price.'
    ],
    examplesHeading: 'Worked markup and margin examples',
    examples: [
      {
        title: 'A 50% markup on a $40 cost',
        paragraphs: [
          'Mode cost and markup, cost 40, percent 50. The calculator shows a $60.00 price. Profit is $20.00. Markup is 50.00%. Margin is 33.33%. The note says the percent you typed was a markup, and that margin is lower than the markup.',
          'The $20 profit is half of the cost and one-third of the price. That is the whole difference between 50% and 33.33%. Quoting a 50% margin for this price would describe an $80 price, not a $60 price.'
        ]
      },
      {
        title: 'A 50% margin on the same cost',
        paragraphs: [
          'Mode cost and margin, cost 40, percent 50. The price is $80.00. Profit is $40.00. Markup is 100.00%. Margin is 50.00%. Half of the selling price is profit, so the price has to be twice the cost.',
          'The note states the general pair: a 50% markup produces a 33.33% margin, and a 50% margin needs a 100% markup. Both halves of that sentence are the two examples on this page.'
        ]
      },
      {
        title: 'A price and a cost, with the percent ignored',
        paragraphs: [
          'Mode price and cost, price 60, cost 40. The headline stays $60.00. Markup is 50.00% and margin is 33.33%. Whatever number sits in the percent box is not used. The detail line says so.',
          'If the cost were $60 and the price were $60, both percents would be 0.00% and profit would be $0.00. A cost above the price is rejected. A discount that takes a price below cost is a loss, and this mode does not describe a loss.'
        ]
      }
    ],
    table: {
      heading: 'Markup and margin on a $40 cost',
      caption: 'Each row is what this calculator displays. The first two rows use the percent column. The last row types the price and the cost and ignores the percent.',
      headers: ['What you enter', 'Price', 'Profit', 'Markup', 'Margin'],
      rows: [
        ['$40 cost, 50% markup', '$60.00', '$20.00', '50.00%', '33.33%'],
        ['$40 cost, 50% margin', '$80.00', '$40.00', '100.00%', '50.00%'],
        ['$60 price and $40 cost', '$60.00', '$20.00', '50.00%', '33.33%']
      ]
    },
    limitsHeading: 'What markup and margin do not include',
    limits: [
      'Tax is not added. A 50% markup produces the price before sales tax or VAT. UK VAT at 20% on the $60-equivalent net price is a different page, and this page’s symbol is the dollar. Add the tax after you have the price, if the tax is charged on that price.',
      'Overhead, labour, and shipping are not estimated. The cost you type is the whole cost. If the cost is only the wholesale price of the goods, the margin here overstates what the business keeps.',
      'A discount after the price is set changes both percents. Twenty percent off the $60 price leaves $48, and the margin on $48 with a $40 cost is not 33.33%. Run the discounted price in the third mode if you need the new percents.',
      'The form rejects a margin of 100% or more, a negative percent, and a cost above the price in the third mode. It will accept a markup above 100%. A 100% markup doubles the cost.'
    ],
    disclaimer: 'This price is markup and margin arithmetic. It is not a pricing policy, a tax invoice, or accounting advice.',
    faqs: [
      {
        q: 'What price does a 50% markup on a $40 cost produce?',
        a: '$60.00. Profit is $20.00. The markup is 50.00% of the cost. The margin is 33.33% of the $60 price. A 50% margin on the same cost is a different price, $80.00, and the markup on that price is 100%.'
      },
      {
        q: 'Why is a 50% markup not a 50% margin?',
        a: 'Markup divides profit by the cost. Margin divides profit by the price. The price is larger than the cost whenever there is a profit, so the margin percent is smaller. On the $60 example, $20 is half of $40 and one-third of $60.'
      },
      {
        q: 'How do I find both percents from a price and a cost?',
        a: 'Choose the price-and-cost mode. A $60 price and a $40 cost show a 50.00% markup and a 33.33% margin. The percent box is ignored. A cost above the price is rejected.'
      },
      {
        q: 'Does the margin include sales tax or VAT?',
        a: 'No. The price is before tax. Add UK VAT or a US sales tax after you have this price, on the matching calculator, if the tax is charged on the amount the customer pays.'
      },
      {
        q: 'Can the margin be 100%?',
        a: 'Not in the cost-and-margin mode. A 100% margin would require the cost to be zero. The form asks for a margin under 100%. A markup of 100% is allowed, and on a $40 cost it produces the $80 price.'
      }
    ],
    relatedLinks: [
      { slug: 'percentage-calculator', label: 'Percentage calculator', note: '$20 is 50% of a $40 cost and 33.33% of a $60 price. That page does not build the price.' },
      { slug: 'discount-calculator', label: 'Discount calculator', note: 'Takes a percent off a price. A discount is not a margin.' },
      { slug: 'sales-tax-calculator', label: 'Sales tax calculator by state', note: 'Adds a US sales-tax rate after you have a price. Tax is not inside the margin here.' },
      { slug: 'uk-vat-calculator', label: 'UK VAT calculator', note: 'Adds 20%, 5%, or 0% VAT in pounds. Apply it to the net price, not to the markup percent.' }
    ]
  },
  'down-payment-calculator': {
    title: 'Down Payment Calculator: Cash and Loan Amount | ClearCalc',
    h1: 'Down Payment Calculator',
    description: 'Turn a home price and a down-payment percent into cash and the loan that is left. 20% of $400,000 is $80,000 down and a $320,000 loan. 5% of $350,000 is $17,500 down.',
    intro: [
      'This down payment calculator multiplies a home price by a percent and subtracts that cash from the price. The sample is a $400,000 home and a 20% down payment. The headline is $80,000.00 down. The loan amount is $320,000.00. The loan-to-value ratio is 80.00%.',
      'The percent is the share of the price, not a share of your income. Five percent of a $350,000 home is $17,500.00 down and a $332,500.00 loan, and the loan-to-value ratio is 95.00%. The result says a down payment under 20% is the range where many conventional loans look at mortgage insurance. This page does not price that insurance and does not compute the monthly payment.',
      'The mortgage calculator amortizes a loan amount you already know. If you take the $320,000 from this page and run it at 6.5% for 30 years, the payment is whatever that page shows for those inputs. The how-much-house calculator works in the other direction, from income and a payment cap to a price. Closing costs, earnest money, and seller credits are not in the cash figure here.'
    ],
    steps: [
      'Enter the home price in dollars. The sample is 400000. A price of zero is rejected.',
      'Enter the down payment as a percent from 0 to 100. The sample is 20. Type 5 for 5%, not 0.05.',
      'Press Calculate. The headline is the down payment in dollars. The loan amount and the loan-to-value ratio are underneath.',
      'Read the note about 20%. At 20% or more it points you to the mortgage page for the payment. Under 20% it says mortgage insurance is not priced here.'
    ],
    howHeading: 'How a down payment and a loan amount are split',
    howItWorks: [
      'The down payment is the price times the percent divided by 100, rounded to the cent. Twenty percent of $400,000 is $80,000.00 exactly. The loan is the price minus that cash, $320,000.00. Loan-to-value is the loan divided by the price, 80.00%. The two pieces add back to the price.',
      'Five percent of $350,000 is $17,500.00. The loan is $332,500.00. Loan-to-value is 95.00%. Because 5 is under 20, the note says many conventional loans then look at mortgage insurance. The insurance premium depends on the loan program, the credit history, and the insurer. None of those are fields on this form, so the page names the issue and stops.',
      'A 0% down payment leaves a loan equal to the price and a loan-to-value of 100%. A 100% down payment leaves a loan of $0.00. Both are allowed. A percent above 100, or a negative percent, is rejected. A price that is not a whole dollar is rounded to the cent before the percent is applied, through the same cent conversion the other money tools use.',
      'The monthly payment is a different formula. It needs a rate and a term. This page deliberately does not ask for them, so the cash and the loan stay visible on their own. Take the loan amount to the mortgage calculator when you want principal and interest. Take a target payment to the how-much-house calculator when you want to start from income instead of from a price.'
    ],
    formula: 'Down payment = round(home price × percent / 100) to the nearest cent\nLoan amount = home price − down payment\nLoan-to-value = loan amount / home price × 100\nPercent is from 0 through 100\nA result under 20% does not include a mortgage-insurance premium',
    formulaNotes: [
      'The price and the down payment are in the same currency, displayed as dollars. A pound price typed here will be labeled with a dollar sign. Convert the currency before you compare the loan with a UK stamp duty figure.',
      'Earnest money that will be credited at closing is still cash you paid. This form does not subtract it from the down payment, and it does not add closing costs. The check you bring can be higher or lower than the headline for those reasons.'
    ],
    examplesHeading: 'Worked down-payment examples',
    examples: [
      {
        title: '20% of a $400,000 home',
        paragraphs: [
          'Price 400000, percent 20. The calculator shows $80,000.00 down. The loan is $320,000.00. Loan-to-value is 80.00%. The note says the down payment is at least 20%, and that the monthly principal-and-interest payment is a separate calculation on the loan amount.',
          'Closing costs are not added. If a lender wants 20% of the price and also a separate cash amount for fees, the $80,000 is only the first of those. Seller credits are not subtracted.'
        ]
      },
      {
        title: '5% of a $350,000 home',
        paragraphs: [
          'Price 350000, percent 5. The down payment is $17,500.00. The loan is $332,500.00. Loan-to-value is 95.00%. The note says the down payment is under 20% and that mortgage insurance is not priced.',
          'The $17,500 is 5% of the price, not 5% of income. A household that can pay the loan may still be above or below a housing-cost rule. The rent page uses 30% of gross income for a rent payment. It is not this purchase.'
        ]
      },
      {
        title: 'Nothing down, and all cash',
        paragraphs: [
          'A 0% down payment on $400,000 shows $0.00 down, a $400,000.00 loan, and a loan-to-value of 100.00%. The under-20% note appears. Whether a lender will make that loan is not a question this arithmetic answers.',
          'A 100% down payment shows $400,000.00 down and a $0.00 loan. Loan-to-value is 0.00%. There is no monthly principal-and-interest payment to calculate. Stamp duty, transfer tax, and closing costs can still be due, and they are not in the headline.'
        ]
      }
    ],
    table: {
      heading: 'Down payment and loan at selected prices',
      caption: 'Each row is what this calculator displays. Mortgage insurance, closing costs, and the monthly payment are not included.',
      headers: ['Home price', 'Percent', 'Down payment', 'Loan', 'Loan-to-value'],
      rows: [
        ['$400,000', '20%', '$80,000.00', '$320,000.00', '80.00%'],
        ['$350,000', '5%', '$17,500.00', '$332,500.00', '95.00%'],
        ['$400,000', '0%', '$0.00', '$400,000.00', '100.00%'],
        ['$400,000', '100%', '$400,000.00', '$0.00', '0.00%']
      ]
    },
    limitsHeading: 'What this down payment leaves out',
    limits: [
      'Mortgage insurance, the interest rate, the term, taxes, and insurance are not in the result. The monthly payment needs the mortgage calculator and a rate. A payment cap based on income needs the how-much-house calculator.',
      'Closing costs, prepaid interest, and a seller credit change the cash at the table. Earnest money already paid may be credited. None of those adjustments are fields.',
      'A down payment under 20% is flagged because many conventional loans look at mortgage insurance there. Some programs allow a smaller down payment without the premium this note is thinking of, and some loans above 20% still have their own fees. The flag is a reminder, not an underwriting decision.',
      'England stamp duty, Canadian GST, and US transfer taxes are not added to the price. A £430,000 SDLT bill and an $80,000 down payment are different currencies and different transactions.'
    ],
    disclaimer: 'This down payment is a percent of a price you typed. It is not a loan approval, a Loan Estimate, or a mortgage-insurance quote.',
    faqs: [
      {
        q: 'How much is a 20% down payment on a $400,000 house?',
        a: '$80,000.00. The loan amount is $320,000.00 and the loan-to-value ratio is 80.00%. Closing costs are not included. The monthly payment depends on the rate and the term, which this page does not ask for.'
      },
      {
        q: 'How much is 5% down on a $350,000 home?',
        a: '$17,500.00 down and a $332,500.00 loan. Loan-to-value is 95.00%. The result notes that many conventional loans look at mortgage insurance below 20%. The insurance is not priced here.'
      },
      {
        q: 'Does the down payment calculator include closing costs?',
        a: 'No. The headline is the percent of the price only. Earnest money, seller credits, prepaid taxes, and lender fees can change the cash you need. They are not subtracted or added.'
      },
      {
        q: 'Where do I find the monthly payment on the loan that is left?',
        a: 'On the mortgage calculator. A $320,000 loan needs a rate and a term before it has a payment. This page stops once the price has been split into cash and loan.'
      },
      {
        q: 'Is loan-to-value the same as the down-payment percent?',
        a: 'They add to 100% of the price when the down payment is a single percent of that price. Twenty percent down is 80% loan-to-value. Five percent down is 95% loan-to-value. A gift or a credit that is not in the percent would change the cash without changing this arithmetic.'
      }
    ],
    relatedLinks: [
      { slug: 'mortgage-calculator', label: 'Fixed-rate mortgage payment calculator', note: 'Principal and interest on a loan amount. Use the $320,000 from a 20% down payment on $400,000 as the principal if that is the loan.' },
      { slug: 'house-affordability-calculator', label: 'How much house can I afford calculator', note: 'Starts from income, debts, tax, and insurance and solves a price. This page starts from the price.' },
      { slug: 'apr-calculator', label: 'APR calculator', note: 'Estimates an APR when prepaid charges sit on top of a note rate. It is not the down payment.' },
      { slug: 'rent-affordability-calculator', label: 'Rent affordability calculator', note: 'Compares rent with 30% of gross income. It does not split a purchase price.' },
      { slug: 'england-stamp-duty-calculator', label: 'England and Northern Ireland stamp duty calculator', note: 'SDLT in pounds. It is not added to this dollar down payment.' }
    ]
  },
  'australia-gst-calculator': {
    title: 'Australia GST Calculator: Add or Remove 10% | ClearCalc',
    h1: 'Australia GST Calculator',
    description: 'Add or remove Australia’s 10% GST. $100 before GST is $10.00 of GST and a $110.00 total. $110 including GST is $100.00 before GST and $10.00 of GST, which is one-eleventh of the total.',
    intro: [
      'This Australia GST calculator adds the goods and services tax to a price or removes it from a GST-inclusive total. The rate is 10%, the rate set by the A New Tax System (Goods and Services Tax) Act 1999 and still published by the Australian Taxation Office. GST on a price before tax is one-tenth of that price. GST inside a GST-inclusive price is one-eleventh of the total, when the division is exact.',
      'The sample is $110 as a total that already includes GST. The headline is $100.00 before GST, and the GST inside the total is $10.00. One-eleventh of $110 is $10. Switching the menu to a price before GST and typing 100 produces GST of $10.00 and a $110.00 total. The two directions meet.',
      'Australian take-home pay is a different tax. The 2026–27 salary calculator estimates income tax, the low income tax offset, and the Medicare levy. It does not add 10% to a purchase, and this page does not withhold the Medicare levy from a wage. Stamp duty on a home in New South Wales, Victoria, or another state is a third calculation, in a different statute. GST on a new home can be a real line in a contract and is still not transfer duty.'
    ],
    steps: [
      'Enter the amount in Australian dollars. The sample is 110.',
      'Choose whether the amount is a price before GST or a total that already includes GST. The sample is the inclusive total.',
      'Press Calculate. Removing GST, the headline is the price before GST. Adding GST, the headline is the total.',
      'Read the GST line. On an exact inclusive price it is one-eleventh of the total. On a price before GST it is one-tenth of that price.'
    ],
    howHeading: 'How Australia’s 10% GST is added and removed',
    howItWorks: [
      'On a price before GST, the tax is 10% of the price, rounded to the nearest cent. $100 × 10% is $10.00 and the total is $110.00. $19.99 × 10% is $1.999, which rounds to $2.00. The total is $21.99. The extra fraction of a cent became a whole cent. It is not a rate above 10%.',
      'On a GST-inclusive total, the price is the total divided by 1.1 and rounded to the nearest cent. GST is the remainder. $110 / 1.1 is $100 exactly, so GST is $10.00, which is also $110 / 11. The ATO describes GST as one-eleventh of the GST-inclusive price. That description and the divide-by-1.1 description are the same when the total is an exact multiple of 11 cents. A total that is not an exact multiple leaves the rounding on the cent.',
      'A tax invoice with several lines can round GST on each line and then add the lines. Rebuilding GST from the invoice total can differ by a cent from the sum of the line GSTs. This page sees one amount. It will not match a multi-line invoice that rounded as it went.',
      'GST-free supplies, such as many basic foods, are not detected. If you run a GST-free grocery total through this form, it will take 10% off or add 10% on, which is the wrong tax. Input-tax credits for a registered business are not estimated. The page also does not convert US dollars or pounds. The symbol is the Australian dollar format used on the rest of this site’s Australian tools.'
    ],
    formula: 'GST rate = 10%\nGST on a price before tax = round(price × 10 ÷ 100) to the nearest cent\nTotal = price + GST\nPrice inside a GST-inclusive total = round(total ÷ 1.1)\nGST inside that total = total − price\nWhen the division is exact, GST = total / 11',
    formulaNotes: [
      'One-tenth of the exclusive price and one-eleventh of the inclusive price are the same GST dollars when no rounding gets in the way. $10 is one-tenth of $100 and one-eleventh of $110. After cent rounding, a price such as $19.99 produces $2.00 of GST rather than $1.999.',
      'The luxury car tax, the wine equalisation tax, and fuel excise are not GST. They are not added. State stamp duty on a property transfer is not GST either, even when a new residential property also has a GST line.'
    ],
    examplesHeading: 'Worked Australian GST examples',
    examples: [
      {
        title: '$110 including GST, and $100 before GST',
        paragraphs: [
          'Amount 110, total that already includes GST. The headline is $100.00 before GST. GST inside the total is $10.00. One-eleventh of $110 is $10, so the remainder matches the fraction.',
          'Amount 100, price before GST. GST is $10.00 and the total is $110.00. The forward and reverse samples meet. Treating $10 as 10% of the $110 total would overstate the rate. The rate was applied to the $100.'
        ]
      },
      {
        title: '$19.99, where the cent rounds',
        paragraphs: [
          'Amount 19.99, price before GST. The unrounded GST is $1.999. The calculator shows GST of $2.00 and a total of $21.99.',
          'Removing GST from $21.99 divides by 1.1. The result rounds back to a price near $19.99, and the GST line is the remainder. A multi-line invoice that rounded a different way can be a cent off this single-amount result. The rate is still 10%.'
        ]
      },
      {
        title: 'A GST-free reminder, and a wage that is not GST',
        paragraphs: [
          'If the $110 were a GST-free supply, the tax would be $0.00 and this form would be the wrong tool. The calculator cannot see the product. It applies 10% whenever you press Calculate. Leave a GST-free amount out of the form.',
          'An $80,000 Australian salary’s take-home pay is income tax and the Medicare levy, on the Australia take-home page. It is not $80,000 plus 10%. GST is a tax on a supply. The Medicare levy is a tax on income. They are not substitutes.'
        ]
      }
    ],
    table: {
      heading: 'Australian GST at 10%',
      caption: 'Each row is what this calculator displays. Adding GST uses a price before tax. Removing GST uses a GST-inclusive total. Amounts are in Australian dollars.',
      headers: ['Amount you type', 'Direction', 'GST', 'The other figure'],
      rows: [
        ['$100.00', 'Add GST', '$10.00', '$110.00 total'],
        ['$110.00', 'Remove GST', '$10.00', '$100.00 before GST'],
        ['$19.99', 'Add GST', '$2.00', '$21.99 total']
      ]
    },
    limitsHeading: 'What this GST figure leaves out',
    limits: [
      'GST-free and input-taxed supplies are not identified. Many basic foods, some health supplies, and some education are GST-free. Running those totals through a 10% calculation overstates the tax.',
      'Line-by-line rounding on a tax invoice can disagree with GST computed on the invoice total. This page has one amount. It also does not split a mixed invoice into taxable and GST-free lines.',
      'The luxury car tax, wine equalisation tax, excise, and customs duty are separate. State or territory stamp duty on a transfer of land is separate. A contract for a new home can involve both GST and duty, and only the GST piece belongs here, and only when the supply is taxable.',
      'Income tax and the Medicare levy are not GST. The Australia take-home pay calculator is the wage tool. Superannuation is not a field on either page’s GST math, because this page has no wage.'
    ],
    disclaimer: 'This GST figure applies Australia’s 10% rate to one amount. It is not an ATO ruling on whether the supply is taxable, GST-free, or input-taxed.',
    faqs: [
      {
        q: 'How do I remove GST from an Australian price?',
        a: 'Mark the amount as a total that already includes GST. $110.00 becomes $100.00 before GST, and the GST inside the total is $10.00. That $10 is one-eleventh of $110. Dividing by 1.1 is the same step.'
      },
      {
        q: 'How much GST is added to $100 in Australia?',
        a: '$10.00. The total is $110.00. GST is 10% of the price before tax, which is one-tenth. It is not 10% of the $110 total.'
      },
      {
        q: 'Why is GST on $19.99 equal to $2.00?',
        a: '$19.99 × 10% is $1.999, and the nearest cent is $2.00. The total is $21.99. The rate is still 10%. A tax invoice that rounded several lines separately can differ by a cent from one calculation on the total.'
      },
      {
        q: 'Does this Australia GST calculator handle GST-free food?',
        a: 'No. It applies 10% to whatever you type. Many basic foods are GST-free. If the supply is GST-free, do not run the amount through this form. The page cannot tell a taxable supply from a GST-free one.'
      },
      {
        q: 'Is GST the same as stamp duty or the Medicare levy?',
        a: 'No. GST is a 10% tax on a taxable supply. State stamp duty is a tax on a transfer, calculated on the state pages. The Medicare levy is part of income tax on the Australia take-home pay page. A wage and a receipt are different bases.'
      }
    ],
    relatedLinks: [
      { slug: 'australia-take-home-pay-calculator', label: 'Australia take-home pay calculator for 2026–27', note: 'Income tax, the low income tax offset, and the Medicare levy on a salary. Not 10% GST.' },
      { slug: 'nsw-stamp-duty-calculator', label: 'NSW stamp duty calculator for 2026/27', note: 'Transfer duty on a New South Wales purchase. Not GST, even when a new home also has a GST line.' },
      { slug: 'uk-vat-calculator', label: 'UK VAT calculator', note: '20%, 5%, or 0% in pounds. Australia’s GST rate is 10%.' },
      { slug: 'canada-gst-hst-calculator', label: 'Canada GST/HST calculator', note: '5% GST or a provincial HST rate, in Canadian dollars. Nova Scotia is 14% from 1 April 2025. Not Australia’s 10%.' }
    ]
  }
};
