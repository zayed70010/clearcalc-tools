function link(entry, slug, label, note) {
  entry.relatedLinks = entry.relatedLinks ?? [];
  if (!entry.relatedLinks.some((item) => item.slug === slug)) entry.relatedLinks.push({ slug, label, note });
}

function pushFaq(entry, q, a) {
  if (entry.faqs.some((item) => item.q === q)) return;
  if (entry.faqs.length >= 10) return;
  entry.faqs.push({ q, a });
}

export function applyNov20PriorityContent(content) {
  const sales = content['sales-tax-calculator'];
  sales.title = 'Sales Tax Calculator: Price Plus Tax, or Pre-Tax from a Receipt | ClearCalc';
  sales.h1 = 'Sales Tax Calculator: Price Plus Tax or the Pre-Tax Price';
  sales.description = 'Add sales tax so a price is plus tax, or find the pre-tax price inside a receipt. $100 plus 8.25% tax is $108.25. 7% sales tax on $130 is $9.10 and a $139.10 total. $200 at 8.25% reverses to $184.76 before tax. Statewide presets are 1 July 2026 base rates, not a ZIP code rate.';
  sales.intro.unshift('Plus tax means the price before tax, times the rate, rounded to the nearest cent, then added. $100 plus 8.25% tax is $8.25 of tax and a $108.25 total. 7% sales tax on $130 is $9.10 of tax and a $139.10 total. The other direction starts from the receipt: $200 at 8.25% is $200 divided by 1.0825, which this page rounds to $184.76 before tax and $15.24 of tax inside the total. 8.25% in decimal form is 0.0825, and the divisor that removes it is 1.0825. A state preset is the statewide base only. Local tax is not in that preset.');
  sales.examples.unshift(
    {
      title: '7% sales tax on $130',
      paragraphs: [
        'Choose a price before tax, type 130, and type 7 with the custom rate rather than a state preset. The tax is $9.10. The total, the price plus tax, is $139.10. Seven percent as a decimal is 0.07.',
        'The same addition works for any price you type. The page does not assume a state when the rate is one you typed. If a receipt used a city rate of 7%, type 7. Selecting a state would replace that 7% with the statewide base.'
      ]
    },
    {
      title: '$100 plus 8.25% tax',
      paragraphs: [
        'A price of $100 plus 8.25% tax is $8.25 of tax and a $108.25 total. 8.25% in decimal form is 0.0825. The receipt total divided by 1.0825 returns the price before tax when the same rounding is used.',
        '$200 at that same 8.25% rate is the reverse question. Choose the total that already includes tax, type 200, and type 8.25. The price before tax is $184.76 and the tax inside the $200 is $15.24. The unrounded division 200 / 1.0825 is about 184.76, and the cent rounding is what the page displays.'
      ]
    }
  );
  sales.extraSections.push({
    heading: 'Statewide base rates are not a ZIP code rate',
    paragraphs: [
      'The state menu is a statewide general rate as of 1 July 2026, including the statewide local add-ons already baked into California 7.25%, Utah 6.10%, and Virginia 5.30%. It is not a street address and it is not a ZIP code. Many states let cities, counties, or special districts add a local rate. Alaska has no statewide sales tax and still has local tax in many places. A combined city rate belongs in the percent box. Picking the state uses only the base and ignores the percent you typed.',
      'Streamlined Sales Tax publishes a state table that marks which states have local jurisdiction taxes, and member states post rate and boundary files that map an address or ZIP code to a local rate. Those files are updated on the state’s schedule. This page does not read them, and it does not guess a local rate from a ZIP code. Use the state lookup linked from that table when the receipt rate is not the statewide base.'
    ]
  });
  sales.sources = [
    {
      href: 'https://www.streamlinedsalestax.org/state-tables',
      label: 'Streamlined Sales Tax state tables',
      note: 'The state rate column and a flag for local jurisdiction taxes. This page’s presets are the 1 July 2026 statewide bases, not a live copy of that table.'
    },
    {
      href: 'https://www.streamlinedsalestax.org/Shared-Pages/rate-and-boundary-files',
      label: 'Streamlined Sales Tax rate and boundary files',
      note: 'Files states use to attach a local rate to an address or ZIP code. This calculator does not read them.'
    }
  ];
  pushFaq(sales, 'How do I calculate a price plus sales tax?', 'Type the price before tax and the rate. $100 plus 8.25% tax is $8.25 of tax and a $108.25 total. 7% sales tax on $130 is $9.10 of tax and a $139.10 total. The tax is the price times the rate, rounded to the nearest cent.');
  pushFaq(sales, 'What is 8.25% sales tax in decimal form?', '8.25% is 0.0825. The number that removes that rate from a receipt is 1.0825. $200 divided by 1.0825 is the pre-tax price at 8.25%, which this page rounds to $184.76, with $15.24 of tax inside the $200. 8% in decimal form is 0.08, and 7% is 0.07.');
  pushFaq(sales, 'Does this sales tax calculator use a ZIP code?', 'No. Presets are statewide base rates as of 1 July 2026. Local tax often applies on top, and a ZIP code can cross more than one local rate. Type the combined rate from the receipt, or use the state lookup linked from the Streamlined Sales Tax state tables. This page does not look up a street address.');
  link(sales, 'discount-calculator', 'Discount calculator', 'Take a percent off the price first, then add sales tax to the sale price if the shop taxes that price.');

  const rent = content['rent-affordability-calculator'];
  rent.title = 'How Much Rent Can I Afford? 30% Rule Calculator | ClearCalc';
  rent.h1 = 'How Much Rent Can I Afford?';
  rent.description = 'How much rent can I afford from gross monthly income or an hourly wage? The 30% figure is a rule of thumb for housing costs, including utilities, not a lease cap and not the 50/30/20 budget worksheet. $16 an hour at 40 hours a week is $2,773.33 a month, and 30% of that is $832.00.';
  rent.intro.push('The form also accepts an hourly wage. Choose hourly wage, type the rate and the hours per week, and the monthly gross income is the wage times the hours times 52 weeks, divided by 12. $16 an hour at 40 hours is $33,280.00 a year before that division, $2,773.33 a month after rounding to the cent, and a 30% guideline rent of $832.00. $22 an hour at the same 40 hours is $45,760.00 a year, $3,813.33 a month, and a guideline rent of $1,144.00. Twelve times the rounded month can be a few cents off the exact annual wage. The 30% line is still gross income, not take-home pay.');
  rent.howItWorks.push('An hourly wage is converted before the 30% comparison. Monthly gross income = hourly wage × hours per week × 52 / 12, rounded to the nearest cent. The guideline rent is 30% of that monthly figure, also rounded to the cent. $16 × 40 × 52 is $33,280.00. Divided by 12 and rounded, that is $2,773.33, and 30% is $832.00. The Consumer Financial Protection Bureau’s note for a first job says to try to keep housing costs, rent and utilities, below 30 percent of what you earn. Utilities are not a separate box here. Add them to the rent if you want them inside the share. That housing sentence is not the Bureau’s separate spending worksheet, which splits after-tax money into needs, savings, and wants.');
  rent.steps.push('If you know an hourly wage instead of a monthly income, choose hourly wage and enter the wage and the hours per week. The sample hourly pair is $16 and 40 hours. The monthly income box is ignored in that mode.');
  rent.examples.push({
    title: '$16 an hour and $22 an hour, 40 hours a week',
    paragraphs: [
      'Choose hourly wage. At $16 an hour and 40 hours, the exact annual gross is $33,280.00. The month used here is $2,773.33. Rent of $832 is 30.00% of that month, so the result sits at the guideline. A higher rent is over the line by the difference.',
      'At $22 an hour and 40 hours, the exact annual gross is $45,760.00 and the month is $3,813.33. The guideline rent is $1,144.00. Neither figure is take-home pay, and neither includes utilities unless you added them to the rent.'
    ]
  });
  rent.sources = [
    {
      href: 'https://www.consumerfinance.gov/archive/blog/the-graduates-guide-your-first-job/',
      label: 'CFPB, The graduate’s guide: Your first job',
      note: 'Says to try to keep housing costs, rent and utilities, below 30 percent of what you earn. This page compares the rent you type with gross income.'
    },
    {
      href: 'https://files.consumerfinance.gov/f/documents/cfpb_worksheet_my-spending-rule-to-live-by.pdf',
      label: 'CFPB spending worksheet',
      note: 'A needs, savings, and wants split. It is not this housing 30% comparison, and this calculator does not apply that worksheet.'
    }
  ];
  pushFaq(rent, 'How much rent can I afford making $16 an hour?', 'At 40 hours a week, $16 an hour is $33,280.00 a year and $2,773.33 a month on this page. Thirty percent of that month is $832.00. Change the hours if you do not work 40. The result is a gross-income rule of thumb. Tax and utilities are not removed unless you account for them yourself.');
  pushFaq(rent, 'How much rent can I afford making $22 an hour?', 'At 40 hours a week, $22 an hour is $45,760.00 a year and $3,813.33 a month here. Thirty percent of that month is $1,144.00. A different weekly schedule changes the month before the 30% is applied.');
  pushFaq(rent, 'Is the 30% rent rule the same as a 50/30/20 budget?', 'No. The housing rule of thumb is about rent and utilities as a share of earnings. The Consumer Financial Protection Bureau also publishes a separate spending worksheet that divides money into needs, savings, and wants. This calculator does not run that worksheet. It only compares the rent you type with 30% of gross income.');
  link(rent, 'hourly-to-salary-calculator', 'Hourly to salary calculator', 'Turns an hourly rate into a yearly salary. This page divides that year by 12 and compares rent with 30% of the month.');

  const down = content['down-payment-calculator'];
  down.title = 'Down Payment Calculator: Percent of the Purchase Price | ClearCalc';
  down.h1 = 'Down Payment Calculator: Cash or Percent of the Purchase Price';
  down.description = 'Cash from a percent of the purchase price, or the percent from the cash. The same math works for a home, a car, or another purchase. 15% of $13,450 is $2,017.50 down. $28,000 is 20% of $140,000, and $36,000 is 30% of $120,000.';
  down.intro.unshift('Both directions are on this page. A percent of the purchase price becomes the cash and the loan that is left. Cash you already know becomes the percent of the purchase price. The label is purchase price because the arithmetic is the same for a home, a car, or another purchase. 15% of $13,450 is $2,017.50 down and an $11,432.50 loan. $28,000 is 20.00% of a $140,000 purchase. $36,000 is 30.00% of a $120,000 purchase.');
  down.steps[0] = 'Enter the purchase price in dollars. The sample is 400000. A home, a car, and any other purchase use the same box. A price of zero is rejected.';
  down.steps.push('To go the other way, choose percent of the purchase price from the cash and type the down payment in dollars. The percent box is ignored in that mode. $28,000 on a $140,000 purchase is 20.00%.');
  down.examples.push({
    title: '15% of a $13,450 purchase, and two cash down payments',
    paragraphs: [
      'Price 13450 and percent 15. The down payment is $2,017.50. The loan is $11,432.50. Loan-to-value is 85.00%. The note says the down payment is under 20%, and this page still does not price mortgage insurance or a monthly payment.',
      'Switch to the cash mode. A $28,000 down payment on a $140,000 purchase is 20.00% of the purchase price, and the loan is $112,000.00. A $36,000 down payment on a $120,000 purchase is 30.00%, and the loan is $84,000.00. Those are calculator examples of the two directions, not a quote from a dealer or a lender.'
    ]
  });
  down.sources = [
    {
      href: 'https://www.consumerfinance.gov/owning-a-home/',
      label: 'CFPB, Owning a home',
      note: 'Consumer information on buying and borrowing. This page only splits a purchase price into cash and a loan.'
    },
    {
      href: 'https://www.consumerfinance.gov/consumer-tools/mortgages/',
      label: 'CFPB mortgage tools',
      note: 'Where to read about mortgages. The monthly payment is the mortgage calculator, not this split.'
    }
  ];
  pushFaq(down, 'What percent of the purchase price is the down payment?', 'Divide the cash by the purchase price and multiply by 100. $28,000 is 20.00% of $140,000. $36,000 is 30.00% of $120,000. Choose the cash mode on this page and the headline is that percent.');
  pushFaq(down, 'How much is 15% down on a $13,450 purchase?', '$2,017.50. The loan left is $11,432.50. The same percent-times-price step is what the first mode does for a $400,000 purchase at 20%, which is $80,000.00 down and a $320,000.00 loan.');
  link(down, 'car-payment-calculator', 'Car payment calculator', 'A monthly payment once you already know the amount financed. This page stops at the cash and the loan.');

  const loan = content['loan-calculator'];
  loan.title = 'Personal and Auto Loan Calculator: Total Cost and Interest | ClearCalc';
  loan.h1 = 'Personal and Auto Loan Calculator: Total Cost and Interest';
  loan.description = 'Monthly payment, total cost, and total interest for a fixed-rate personal or auto loan. A $40,000 loan at 10% for 5 years is $849.88 a month. The total cost is $50,992.91, and the total interest is $10,992.91.';
  loan.intro.unshift('The result is not only the monthly payment. Total cost is every payment added up, and total interest is that sum minus the amount borrowed. A $40,000 personal or auto loan at 10% for 5 years is $849.88 a month, a total cost of $50,992.91, and total interest of $10,992.91. The payment in the headline is rounded to the cent. The total uses the unrounded payment, so the rounded payment times 60 can differ by a few cents from $50,992.91.');
  loan.examples.unshift({
    title: '$40,000 at 10% for 5 years',
    paragraphs: [
      'Principal 40000, annual rate 10, term 5 years, which is 60 payments. The calculator shows $849.88 / month, total repayment of $50,992.91, and total interest of $10,992.91.',
      'That total repayment is the cost of borrowing $40,000 at 10% for five years under a fixed monthly payment. It does not add an origination fee, sales tax, or a late fee. A different rate or a different term changes both the payment and the interest.'
    ]
  });
  loan.sources = [
    {
      href: 'https://www.consumerfinance.gov/consumer-tools/auto-loans/',
      label: 'CFPB auto loan resources',
      note: 'Questions to ask before financing a vehicle. This page amortizes the rate and term you type. It does not shop a rate.'
    },
    {
      href: 'https://www.consumerfinance.gov/ask-cfpb/',
      label: 'Ask CFPB',
      note: 'Consumer answers on credit and loans. The numbers here are the fixed-payment formula, not a lender offer.'
    }
  ];
  pushFaq(loan, 'What is the total cost of a $40,000 loan at 10% for 5 years?', 'The monthly payment is $849.88. Total repayment, the total cost of the payments, is $50,992.91. Total interest is $10,992.91. Those figures are this calculator at 10% and 60 months, with no fees added.');
  link(loan, 'apr-calculator', 'APR calculator', 'Adds prepaid charges to a note rate. This loan page uses the rate you type and does not solve for an APR.');

  const mortgage = content['mortgage-calculator'];
  mortgage.title = 'Fixed-Rate Mortgage Payment Calculator: Principal and Interest vs PITI | ClearCalc';
  mortgage.h1 = 'Fixed-Rate Mortgage Payment Calculator: Principal and Interest vs PITI';
  mortgage.description = 'Fixed-rate mortgage payment calculator for monthly principal and interest versus PITI. Type the taxes, insurance, and PMI you want in the housing payment. A $136,000 loan at 4.25% for 30 years is $669.04 of principal and interest, and $877.37 with $1,500 of tax and $1,000 of insurance.';
  mortgage.intro.push('A fixed-rate mortgage payment is the fully amortizing principal and interest on a rate that does not change. PITI adds the property tax, insurance, and mortgage insurance you type. The $170,000 purchase example is here so the two numbers can be told apart: $669.04 is principal and interest on the $136,000 loan, and $877.37 is the housing payment after $1,500 of yearly tax and $1,000 of yearly insurance. The reason to open the calculator is the boxes for those extras, and for a different price, rate, or term. The page is not an answer key.');
  mortgage.howItWorks.splice(mortgage.howItWorks.length - 1, 0, 'Fixed-rate, on this page, means the annual rate you type is divided by 12 and then held constant for every payment. A 10-year term is 120 payments and a 30-year term is 360. The head phrase people use, fixed-rate mortgage payment, is this principal-and-interest line. PITI is that line plus tax, insurance, and PMI. Changing the term changes the payment. The page does not rank loan offers.');
  mortgage.sources = [
    {
      href: 'https://www.consumerfinance.gov/consumer-tools/mortgages/',
      label: 'CFPB mortgage tools',
      note: 'Official consumer tools for mortgages. This calculator is an estimate from the numbers you type.'
    },
    {
      href: 'https://www.consumerfinance.gov/owning-a-home/',
      label: 'CFPB, Owning a home',
      note: 'Background on buying and borrowing. It is not imported into the payment.'
    },
    {
      href: 'https://www.consumerfinance.gov/ask-cfpb/what-is-the-difference-between-a-mortgage-interest-rate-and-an-apr-en-135/',
      label: 'CFPB, interest rate and APR',
      note: 'APR includes charges the interest rate does not. The rate box on this page is the note rate used to amortize the payment, not an APR.'
    }
  ];
  pushFaq(mortgage, 'What does a fixed-rate mortgage payment include?', 'Principal and interest, from a rate that stays at the percent you typed. Tax, insurance, and PMI are included in the headline only when you type them. On the $136,000 loan at 4.25% for 30 years, principal and interest is $669.04 and the housing payment with $1,500 of tax and $1,000 of insurance is $877.37.');

  const card = content['credit-card-payoff-calculator'];
  card.title = 'Credit Card Payoff Calculator: Months or the Payment to Clear It | ClearCalc';
  card.h1 = 'Credit Card Payoff Calculator: Months or the Payment You Need';
  card.description = 'Months to pay off a fixed payment, or the payment that clears a balance in a set number of months, from a purchase APR or a monthly interest rate. A $5,000 balance at 21.99% takes 34 months at $200 a month. A $5,500 balance at 1.6% a month clears in 6 months at $968.68.';
  card.intro.unshift('Two questions use the same balance. If you know the payment, the page counts the months and the interest. If you know the number of months, it finds the payment that clears the balance in that count. The rate can be a purchase APR or a monthly interest rate. A monthly rate of 1.6% is not a 1.6% APR. Charged twelve times it is a 19.20% nominal APR. On a $5,500 balance, 1.6% a month, and 6 months, the payment is $968.68 and the interest is $312.07. The unrounded level payment is 968.6789, which is $969 to the nearest dollar. A card issuer that uses a daily rate will not match either figure.');
  card.steps.unshift('Choose months from a payment, or the payment that clears the balance in a set number of months. Then choose purchase APR or monthly interest rate. A monthly rate of 1.6 means 1.6% each month, not a 1.6% APR.');
  card.examples.unshift({
    title: '$5,500 at 1.6% a month for 6 months',
    paragraphs: [
      'Choose the payment mode, choose monthly interest rate, and enter balance 5500, rate 1.6, and 6 months. The headline is $968.68 / month. Interest over the six months is $312.07. Total paid is $5,812.07. The first month of interest is $88.00.',
      'The ordinary level payment before cent rounding is 968.6789, so the nearest dollar is $969. Both $968.68 and $969 clear this balance in 6 months under the cent rule this page uses. A nearby case, $5,500 at 1.825% a month for 5 months, needs $1,160.96. The unrounded $1,160.95 is a cent short and runs into a sixth month. The page reports the cent payment that actually finishes in the month count you asked for.'
    ]
  });
  card.examples.push({
    title: '$700 at 15% APR with a $100 payment',
    paragraphs: [
      'Stay on months-from-a-payment, choose purchase APR, and enter 700, 15, and 100. The balance is paid off in 8 months. Total interest is $37.25. The first month of interest is $8.75.',
      'The other direction, a payment for a set term, is the second mode. $2,900 at 15.5% APR for 24 months is $141.31 a month here. The unrounded level payment is about $141.30, and that extra cent is what keeps the payoff inside 24 months after each month’s interest is rounded.'
    ]
  });
  card.sources = [
    {
      href: 'https://www.consumerfinance.gov/consumer-tools/credit-cards/',
      label: 'CFPB credit card resources',
      note: 'Consumer information on cards. This page is one balance and a fixed payment or a fixed month count. It is not a minimum-payment schedule and not a particular bank’s tool.'
    }
  ];
  pushFaq(card, 'What payment clears a $5,500 balance in 6 months at 1.6% a month?', '$968.68 a month under this page’s cent rounding, with $312.07 of interest. The unrounded level payment is 968.6789, which is $969 to the nearest dollar. Choose monthly interest rate, not purchase APR, because 1.6% a month is not a 1.6% APR.');
  link(card, 'apr-calculator', 'APR calculator', 'A monthly periodic rate from an APR, or an APR from prepaid charges. A card payoff is the months or the payment on one balance.');

  const hours = content['hours-calculator'];
  hours.intro.push('A few clock gaps come up often enough to state them. How many hours from 8am to 8pm is 12 hours 0 minutes, and the end is later the same day. 8pm to 8am is also 12 hours 0 minutes, and that one crosses midnight. 10am to 8pm is 10 hours 0 minutes. Type 8 as 08, 8pm as 20, and 10am as 10.');
  pushFaq(hours, 'How many hours from 8am to 8pm?', '12 hours 0 minutes. 8am is 08:00 and 8pm is 20:00. The end is later the same day, so the page does not add 24 hours. Decimal hours are 12.0000.');
  pushFaq(hours, 'How many hours is 8pm to 8am?', '12 hours 0 minutes, overnight. 8pm is 20:00 and 8am is 08:00. The end clock is earlier, so the span crosses midnight and the end is the next day. The length is the same as 8am to 8pm. The note is what distinguishes them.');
  pushFaq(hours, 'How many hours is 10am to 8pm?', '10 hours 0 minutes. 10am is 10:00 and 8pm is 20:00. Both times are on the same day. 3pm to 10pm is 7 hours, and 8 to 5 in the afternoon is 9 hours if you type 08:00 to 17:00.');

  const apr = content['apr-calculator'];
  apr.title = 'APR Calculator: Monthly Rate from an APR, or APR with Fees | ClearCalc';
  apr.h1 = 'APR Calculator: Monthly Rate from an APR';
  apr.description = 'Monthly rate from an APR, or an APR from a note rate and prepaid charges. 19.5% APR divided by 12 is a 1.625% monthly periodic rate. $10,000 at a 7% note rate for 36 months, with $300 of prepaid charges, has a payment of $308.77 and an APR of 9.069%. This is not a Regulation Z disclosure.';
  apr.intro.unshift('One mode answers the question the other mode does not. Monthly periodic rate = APR / 12. A 19.5% APR is 1.625% a month, or 0.016250 as a decimal. That division does not add fees, and it is not the effective rate from daily compounding. The other mode is the one already on the page: a note rate plus prepaid charges. $10,000 at 7% for 36 months with $300 prepaid is a $308.77 payment and a 9.069% APR. Regulation Z section 1026.22 is the rule for determining a disclosed APR. This page is not that disclosure.');
  apr.steps.unshift('Choose monthly periodic rate from an APR when you already have the APR and want APR divided by 12. Choose the note-rate mode when you have a rate, a term, and prepaid charges and want an estimated APR.');
  apr.examples.unshift({
    title: 'Monthly periodic rate on a 19.5% APR',
    paragraphs: [
      'Choose monthly periodic rate from an APR and type 19.5. The headline is 1.625% monthly periodic rate. The decimal form is 0.016250. The formula line is APR / 12.',
      'That 1.625% is the nominal APR split into twelve equal parts. It is not a lender’s APR after points, and it is not a legal disclosure under Regulation Z. The fee mode is still on the page for a note rate plus prepaid charges.'
    ]
  });
  apr.sources = [
    {
      href: 'https://www.consumerfinance.gov/ask-cfpb/what-is-the-difference-between-a-mortgage-interest-rate-and-an-apr-en-135/',
      label: 'CFPB, interest rate and APR',
      note: 'APR is a broader measure than the interest rate because it can include points, fees, and other charges. The monthly-rate mode does not add those charges.'
    },
    {
      href: 'https://www.consumerfinance.gov/rules-policy/regulations/1026/22/',
      label: 'Regulation Z § 1026.22',
      note: 'How a disclosed APR is determined. This calculator is not a disclosure engine and does not apply the regulation’s tolerances.'
    }
  ];
  pushFaq(apr, 'How do I calculate a monthly rate from an APR?', 'Divide the APR by 12. That is the monthly periodic rate for a nominal APR paid monthly. 19.5% / 12 is 1.625%. The decimal is 0.016250. This is not the effective monthly rate from daily compounding, and it does not include fees.');
  pushFaq(apr, 'What is the monthly periodic rate on a 19.5% APR?', '1.625%, to three decimal places. Choose the monthly-rate mode and type 19.5. The other mode, a 7% note rate for 36 months with $300 prepaid on $10,000, is a different question and returns a 9.069% APR.');
  link(apr, 'loan-calculator', 'Personal and auto loan calculator', 'The payment, total cost, and interest from a rate you already have. It does not solve for an APR.');

  const tip = content['tip-calculator'];
  tip.title = 'Tip Calculator: Tip Amount, Total Bill, and Split | ClearCalc';
  tip.h1 = 'Tip Calculator: Tip Amount and Total Bill';
  tip.description = 'Tip amount, the total bill, and an equal split. An 18% tip on $48.12 is $8.66, and the total is $56.78. A $42.50 bill with a 15% tip is $6.38 of tip and a $48.88 total. Use 1 person if you are not splitting.';
  tip.intro.unshift('The tip and the total are on the page even when you are not splitting. An 18% tip on $48.12 is $8.66, and the bill plus tip is $56.78. A $42.50 bill with a 15% tip is $6.38 of tip and a $48.88 total. Set the people field to 1 when you want those amounts without a share. The headline is still the equal share, which is the whole total when there is one person.');
  tip.examples.unshift(
    {
      title: '18% tip on $48.12',
      paragraphs: [
        'Bill 48.12, tip 18, people 1. The tip is $8.66. The total bill is $56.78. The share is $56.78 because one person pays the whole total. The unrounded tip is 8.6616, which rounds to $8.66.'
      ]
    },
    {
      title: '15% tip added to a $42.50 bill',
      paragraphs: [
        'Bill 42.50, tip 15, people 1. The tip is $6.38. The total bill is $48.88. The unrounded tip is 6.375, which rounds to $6.38, and the unrounded total is 48.875, which rounds to $48.88.',
        'Two people on this same check would each be shown half of the total, rounded on its own. The single-person lines are the tip amount and the total the question asked for.'
      ]
    }
  );
  pushFaq(tip, 'How much is an 18% tip on $48.12?', '$8.66. The total with the tip is $56.78. Type 1 in the people field if you want the headline to be that total rather than a share.');
  pushFaq(tip, 'What is the total if I add a 15% tip to $42.50?', '$48.88. The tip itself is $6.38. The unrounded tip is 6.375, and the unrounded total is 48.875. Each displayed amount is rounded to the cent on its own.');
  link(tip, 'sales-tax-calculator', 'Sales tax calculator', 'Tax is not a tip. Remove sales tax from a receipt there if you want the pre-tax price before you choose a tip.');
}
