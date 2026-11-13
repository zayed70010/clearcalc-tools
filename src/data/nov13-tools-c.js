import { nov13Page as page } from './nov13-page.js';
import { MET_ACTIVITIES, TFSA_LIMITS, tfsaRoomSince } from '../lib/nov13.js';

const tfsaRows = Object.entries(TFSA_LIMITS).map(([year, limit]) => [year, `$${limit.toLocaleString('en-US')}`]);

export const nov13ToolsC = {
  'annuity-calculator': page({
    slug: 'annuity-calculator',
    title: 'Annuity Calculator: Future Value and Present Value | ClearCalc',
    h1: 'Annuity Calculator',
    description: 'Annuity calculator for the future value or present value of a level payment, ordinary or due. $200 a month at 6% for 10 years grows to $32,775.87 as an ordinary annuity and $32,939.75 as an annuity due.',
    intro: [
      'This annuity calculator prices a level stream of payments and nothing else. Future value is what the payments grow to. Present value is what the stream is worth today. An ordinary annuity pays at the end of each period. An annuity due pays at the beginning, so each payment earns one extra period, and the result is the ordinary result times one plus the rate per period. $200 a month for 10 years at 6% a year is $32,775.87 ordinary and $32,939.75 due.',
      'There is no starting lump sum. The compound interest calculator and the investment calculator both take a starting balance plus deposits. This page is only the deposits, or only the payment stream you are valuing. A mortgage payment is the other direction: you know the loan and solve for the payment. Here you know the payment and solve for the value.',
      'The rate is nominal and split evenly across the payments. Monthly means the annual percent divided by 12. A 6% annual rate is 0.5% per month. Fees, taxes, and a payment that changes are not in the formula. The term has to produce a whole number of payments.'
    ],
    steps: [
      'Choose future value or present value. The sample is the future value.',
      'Choose ordinary (end of period) or annuity due (beginning). The sample is ordinary.',
      'Enter the payment, the annual rate, and whether the payment is monthly or yearly. The sample is 200, 6%, monthly.',
      'Enter the years. The sample is 10, which is 120 monthly payments. The term cannot be more than 50 years.',
      'Press Calculate. The headline is the value. The lines name the timing, the number of payments, and the rate per payment.'
    ],
    howHeading: 'How an ordinary annuity and an annuity due are calculated',
    howItWorks: [
      'The monthly rate is 6 / 100 / 12 = 0.005. Over 120 payments the ordinary future value is payment × ((1.005)^120 − 1) / 0.005, which is $32,775.87. The last payment is included and earns nothing after it arrives, because it arrives at the end.',
      'Annuity due multiplies that result by 1.005. $32,775.87 × 1.005 = $32,939.75. Every payment has one extra month of growth, including what would have been the last ordinary payment. The present value does the same multiplication. The ordinary present value of the sample stream is $18,014.69. The due present value is $18,104.76.',
      'A zero rate skips the power formula. Future value and present value are both just the payment times the number of payments, and due versus ordinary does not change a zero rate because multiplying by 1 does nothing. A rate above 40% is rejected so a percent is not confused with an already-decimal rate.'
    ],
    formula: 'Rate per payment r = annual percent / 100 / payments per year\nCount n = years × payments per year\nOrdinary future value = payment × ((1 + r)^n − 1) / r\nOrdinary present value = payment × (1 − (1 + r)^(−n)) / r\nAnnuity due = ordinary × (1 + r)\nIf r = 0, the value is payment × n',
    formulaNotes: [
      'The investment calculator’s sample, $10,000 plus $250 a month at 7% for 10 years, ends at $63,367.82 because of the starting balance. This page cannot add that $10,000. Putting 250 here at 7% answers a different question.',
      'Present value is not a monthly mortgage payment. The mortgage page starts from a principal. This page starts from the payment. Using one headline as the input of the other only works when the rate, the count, and the timing match, and a mortgage is an ordinary annuity.'
    ],
    examplesHeading: 'Worked annuity examples',
    samples: [
      { title: '$200 a month at 6% for 10 years, ordinary future value', values: { aim: 1, timing: 1, payment: 200, rate: 6, frequency: 12, years: 10 }, blurb: 'End-of-month payments. The headline is $32,775.87. There is no separate starting balance inside that figure.' },
      { title: 'The same payments as an annuity due', values: { aim: 1, timing: 2, payment: 200, rate: 6, frequency: 12, years: 10 }, blurb: 'Beginning-of-month payments. The ordinary result is multiplied by 1.005. The headline is $32,939.75.' },
      { title: 'Present value of the ordinary stream', values: { aim: 2, timing: 1, payment: 200, rate: 6, frequency: 12, years: 10 }, blurb: 'What $200 a month for 10 years is worth today at 6%, if each payment arrives at month end. The headline is $18,014.69.' }
    ],
    table: {
      heading: 'Value of $200 a month at 6% for 10 years',
      caption: '120 payments. Due is the ordinary value times 1.005. Each value is this calculator’s headline.',
      headers: ['Question', 'Timing', 'Value'],
      rows: [
        ['Future value', 'Ordinary', '$32,775.87'],
        ['Future value', 'Due', '$32,939.75'],
        ['Present value', 'Ordinary', '$18,014.69'],
        ['Present value', 'Due', '$18,104.76']
      ]
    },
    limitsHeading: 'What this annuity value leaves out',
    limits: [
      'There is no starting principal and no payment that grows. A lump sum plus deposits is the compound interest page or the investment page. A raise in the contribution is not a row here.',
      'Tax, fees, and inflation are not removed. The future value is a nominal balance. The present value is a nominal discount at the rate you typed, not a market quote for an insurance annuity.',
      'Payments are monthly or annual. Weekly and quarterly are not frequencies. A quarterly contract has to be rewritten as an equivalent the page does not compute for you.',
      'The due adjustment is one period of interest on the ordinary result. A contract that pays in advance but credits interest differently will not match. The page names the timing in the first detail line so the two results are not swapped.'
    ],
    disclaimer: 'This is the level-payment annuity formula. It is not an insurance quote, a pension valuation, or investment advice.',
    faqs: [
      { q: 'What is the future value of $200 a month at 6% for 10 years?', a: '$32,775.87 if each payment arrives at the end of the month. If each payment arrives at the beginning, the annuity-due value is $32,939.75. Both use a monthly rate of 0.5%.' },
      { q: 'What is the present value of that $200 monthly annuity?', a: '$18,014.69 ordinary, and $18,104.76 if it is an annuity due. Present value discounts the same 120 payments. It is not the monthly payment on a loan of that size unless the loan is ordinary and uses this rate.' },
      { q: 'How is an annuity due different from an ordinary annuity?', a: 'The due payment arrives one period earlier, so the value is the ordinary value multiplied by one plus the rate per period. At 0.5% a month the factor is 1.005. A zero rate makes the two timings equal.' },
      { q: 'Why is there no starting balance on the annuity calculator?', a: 'Because this page is only the payment stream. The compound interest page adds a starting balance to monthly deposits. The investment page can also change the compounding frequency. Mixing a lump sum into this headline would double count if you then added it yourself.' },
      { q: 'Does the annuity result deduct tax or fees?', a: 'No. The headline is the formula value at a constant rate. It is not a quoted insurance annuity and it is not a retirement-account balance after tax.' }
    ],
    relatedLinks: [
      { slug: 'compound-interest-calculator', label: 'Compound interest calculator', note: '$10,000 plus $250 a month at 7% for 10 years is $63,367.82. That starting balance is not an input here.' },
      { slug: 'investment-calculator', label: 'Investment calculator', note: 'The same monthly sample, plus yearly contributions and other compounding frequencies.' },
      { slug: 'mortgage-calculator', label: 'Mortgage calculator', note: 'Solves the payment from a principal. This page solves the value from a payment.' }
    ]
  }),
  'rental-property-calculator': page({
    slug: 'rental-property-calculator',
    title: 'Rental Property Calculator: Cash Flow, Cap Rate, Cash-on-Cash | ClearCalc',
    h1: 'Rental Property Calculator',
    description: 'Rental property calculator for monthly cash flow, cap rate, and cash-on-cash return. A $400,000 purchase, $80,000 down, and $2,800 rent at the sample expenses cash-flows −$325.42 a month, with a 5.09% cap rate.',
    intro: [
      'This rental property calculator separates what the building earns from what the loan costs. Net operating income is collected rent minus operating expenses, before the mortgage. Cap rate is that NOI divided by the purchase price. Cash flow subtracts the mortgage payment. Cash-on-cash divides the annual cash flow by the down payment plus closing costs. On the sample, a $400,000 purchase with $80,000 down, $8,000 of closing costs, and $2,800 a month of rent produces $20,366.40 of NOI, a 5.09% cap rate, and −$325.42 a month after the loan.',
      'The negative cash flow is the useful part of the sample, not a broken formula. The cap rate can look acceptable while the payment on $320,000 at 6.5% for 30 years, which is $2,022.62, is larger than the monthly NOI. The rent-versus-buy page compares ending wealth with renting and investing. The mortgage page prices a loan and does not know the rent. This page is the one-year operating picture.',
      'Vacancy is a percent of gross rent and other income. The management fee is a percent of what remains after vacancy, not of the full gross. Tax, insurance, maintenance, and HOA are annual dollar amounts. None of them is inside the cap rate’s price, and all of them are inside NOI.'
    ],
    steps: [
      'Enter the price, the down payment, and the closing costs you are counting as cash invested. The sample is 400000, 80000, and 8000.',
      'Enter the mortgage rate and the term in years. The loan is the price minus the down payment. The sample is 6.5% for 30 years.',
      'Enter monthly rent and any other monthly income. The sample rent is 2800 and other income is 0.',
      'Enter vacancy and the management fee as percents, and tax, insurance, maintenance, and HOA as annual dollars. The sample vacancy is 5 and management is 8.',
      'Press Calculate. The headline is monthly cash flow after the mortgage. Cap rate and cash-on-cash are underneath, and they answer different questions.'
    ],
    howHeading: 'How cash flow, cap rate, and cash-on-cash are separated',
    howItWorks: [
      'Gross income is (rent + other) × 12. $2,800 × 12 = $33,600. Vacancy of 5% leaves $31,920 collected. Management of 8% of that collected rent is $2,553.60. Tax $4,800, insurance $1,800, and maintenance $2,400 bring operating expenses to $11,553.60. NOI is $31,920 − $11,553.60 = $20,366.40.',
      'Cap rate is $20,366.40 / $400,000 = 5.09%. The loan is not in that percentage. The loan is $320,000, and the payment is $2,022.62 a month, $24,271.41 a year. Cash flow is $20,366.40 − $24,271.41 = −$3,905.01 a year, or −$325.42 a month.',
      'Cash invested is $80,000 + $8,000 = $88,000. Cash-on-cash is −$3,905.01 / $88,000 = −4.44%. If cash invested were zero, the page would still show cash flow and cap rate and would say cash-on-cash is not defined. A down payment larger than the price is rejected.'
    ],
    formula: 'Loan = price − down payment\nMortgage payment = standard monthly payment on the loan\nCollected = (rent + other) × 12 × (1 − vacancy / 100)\nManagement = collected × management percent / 100\nNOI = collected − tax − insurance − maintenance − HOA − management\nCap rate = NOI / price\nAnnual cash flow = NOI − mortgage payment × 12\nCash-on-cash = annual cash flow / (down payment + closing costs)',
    formulaNotes: [
      'Cap rate ignores the loan on purpose. Two buyers with different down payments have the same cap rate and different cash-on-cash returns. Quoting one as the other is the mix-up the separate lines are there to prevent.',
      'The mortgage payment uses a nominal annual rate divided by 12, the same convention as the US mortgage page. A $320,000 loan at 6.5% for 30 years is $2,022.62 there as well. This page then subtracts it from NOI. The mortgage page does not know the rent.'
    ],
    examplesHeading: 'Worked rental examples',
    samples: [
      { title: 'The $400,000 sample with $2,800 rent', values: { price: 400000, down: 80000, closing: 8000, rate: 6.5, years: 30, rent: 2800, other: 0, vacancy: 5, tax: 4800, insurance: 1800, maintenance: 2400, management: 8, hoa: 0 }, blurb: 'NOI is $20,366.40 and the cap rate is 5.09%. The loan payment is larger, so monthly cash flow is −$325.42 and cash-on-cash is −4.44%.' },
      { title: 'The same property with no loan', values: { price: 400000, down: 400000, closing: 0, rate: 6.5, years: 30, rent: 2800, other: 0, vacancy: 5, tax: 4800, insurance: 1800, maintenance: 2400, management: 8, hoa: 0 }, blurb: 'The down payment is the whole price, so the mortgage payment is zero. Cash flow equals NOI. Cap rate does not change, because the price and the expenses did not.' },
      { title: 'A higher rent on the sample loan', values: { price: 400000, down: 80000, closing: 8000, rate: 6.5, years: 30, rent: 3200, other: 0, vacancy: 5, tax: 4800, insurance: 1800, maintenance: 2400, management: 8, hoa: 0 }, blurb: 'Rent is the only change. Collected income rises, management rises with it, and the mortgage payment stays $2,022.62. The headline moves because NOI moved.' }
    ],
    table: {
      heading: 'What changes the sample result',
      caption: 'The base row is the form’s sample. Cap rate uses NOI and the price. Cash flow is after the mortgage. Figures are this calculator’s lines.',
      headers: ['Case', 'Monthly cash flow', 'Cap rate', 'Cash-on-cash'],
      rows: [
        ['$2,800 rent, 20% down', '−$325.42', '5.09%', '−4.44%'],
        ['$3,200 rent, 20% down', '$24.18', '6.14%', '0.33%'],
        ['$2,800 rent, no loan', '$1,697.20', '5.09%', '5.09%']
      ]
    },
    limitsHeading: 'What this one-year rental picture leaves out',
    limits: [
      'It is one steady year. Vacancy does not vary, rent does not grow, and there is no repair that exceeds the maintenance allowance. A sale, a capital gain, and depreciation are not computed.',
      'The mortgage is a new fully amortizing loan on the price minus the down payment. An interest-only loan, a second lien, and private mortgage insurance are not added. Closing costs are cash invested. They are not added to the loan.',
      'Cap rate uses the purchase price you type, not an appraised value and not the loan. A buyer who overpays lowers the cap rate on this page because the denominator grew. The page does not know a market cap rate.',
      'The rent-versus-buy calculator projects wealth over the years you stay, including appreciation and an investment return on the cash you did not tie up. This page does not. A negative cash flow here is not by itself a reason to rent. It is the operating gap.'
    ],
    disclaimer: 'This is a one-year operating estimate. It is not a rent roll, an appraisal, a tax return, or a buy-or-rent decision.',
    faqs: [
      { q: 'What is the cash flow on a $400,000 rental with $2,800 rent?', a: 'On the sample expenses, 5% vacancy, 8% management, $80,000 down, and a 6.5% 30-year loan, monthly cash flow is −$325.42. NOI is $20,366.40 and the mortgage is $2,022.62 a month.' },
      { q: 'What is the cap rate if cash flow is negative?', a: 'Cap rate does not use the loan. The sample cap rate is 5.09% because NOI is $20,366.40 and the price is $400,000. Cash-on-cash is the figure that goes negative, at −4.44% of the $88,000 cash invested.' },
      { q: 'How is a rental property calculator different from rent versus buy?', a: 'Rent versus buy compares ending wealth from owning and from renting while investing the cash. This page is one year of NOI, cap rate, and cash flow. It does not project a sale or an investment account.' },
      { q: 'Does the management fee come out before or after vacancy?', a: 'After. Vacancy reduces gross income first. The management percent applies to the collected amount. On $33,600 of gross rent, 5% vacancy leaves $31,920, and 8% management is $2,553.60.' },
      { q: 'Why does paying cash not change the cap rate?', a: 'Cap rate is NOI divided by price. The loan is not in NOI. Paying cash changes the mortgage payment, the cash flow, and the cash invested. The sample cap rate stays 5.09% when the down payment becomes the whole price.' }
    ],
    relatedLinks: [
      { slug: 'mortgage-calculator', label: 'Mortgage calculator', note: 'The $320,000 loan at 6.5% for 30 years is $2,022.62 of principal and interest. This page subtracts that payment from NOI.' },
      { slug: 'rent-vs-buy-calculator', label: 'Rent vs buy calculator', note: 'Ending wealth over the years you stay, including appreciation. Not this one-year cash flow.' },
      { slug: 'rent-affordability-calculator', label: 'Rent affordability calculator', note: 'Compares a tenant’s rent with 30% of income. It is not the landlord’s cash flow.' }
    ]
  }),
  'calories-burned-calculator': page({
    slug: 'calories-burned-calculator',
    title: 'Calories Burned Calculator from a Compendium MET | ClearCalc',
    h1: 'Calories Burned Calculator',
    description: 'Calories burned calculator using 2024 Adult Compendium MET values. Walking at 2.8–3.4 mph is 3.8 MET. A 70 kg person for 30 minutes uses about 133.0 kcal. Not a medical or diet instruction.',
    intro: [
      'This calories burned calculator estimates one session from a published MET, body weight, and minutes. The 2024 Adult Compendium defines a MET so that energy use is about MET × kilograms × hours, because 1 MET is tied to roughly 1 kilocalorie per kilogram per hour. Walking at 2.8 to 3.4 mph on a level firm surface is code 17190, 3.8 MET. A 70 kg person for 30 minutes is 3.8 × 70 × 0.5 = 133.0 kcal.',
      'The codes and MET values are the 2024 Adult Compendium figures published at pacompendium.com, the update described by Herrmann and colleagues. Older tables listed moderate walking near 3.0 mph as 3.5 MET. This page uses 3.8 for that description and says so. Running at 6 to 6.3 mph is code 12050, 9.3 MET, not the older 9.8 figure that now belongs to a faster freestyle swim and to a different running band.',
      'The calorie calculator estimates a day’s maintenance calories from age, size, and an activity factor. It is not this session. The TDEE page multiplies a resting equation by a day-long factor. Neither of those pages looks up a compendium code. This page is not medical advice and not a training plan.'
    ],
    steps: [
      'Choose the activity whose description matches what you did. The sample is walking at 2.8–3.4 mph, 3.8 MET.',
      'Choose kilograms or pounds and enter body weight. The sample is 70 kilograms. Pounds are converted with 0.45359237 kg per pound.',
      'Enter the minutes. The sample is 30. The maximum is 1,440 minutes, one day.',
      'Press Calculate. The headline is kilocalories to one decimal place. The lines name the compendium code, the MET, the kilograms used, and the hours.',
      'If the description does not match the session, the MET is the wrong one. The page will not invent a MET for an activity that is not on the list.'
    ],
    howHeading: 'How MET, weight, and time become kilocalories',
    howItWorks: [
      'The selected activity has a fixed MET from the 2024 table. Walking 2.8–3.4 mph is 3.8. The hours are the minutes divided by 60. Kilocalories are MET × kilograms × hours. 3.8 × 70 × 0.5 = 133 exactly, shown as 133.0 kcal.',
      'Running at 6–6.3 mph is 9.3 MET, code 12050. The same 70 kg person for 30 minutes is 9.3 × 70 × 0.5 = 325.5 kcal. The weight and the time changed nothing about the formula. Only the MET changed. A heavier person scales the result in proportion to weight, which is what the compendium equation does and what a lab test may not.',
      'Pounds are converted before the multiplication, so a 154.32 pound body is about 70 kg and lands near the kilogram example. The page refuses a converted weight under 20 kg or over 400 kg. It does not refuse an activity that was harder than the description. The description is the MET.'
    ],
    formula: 'Kilocalories ≈ MET × body weight in kilograms × hours\nHours = minutes / 60\n1 pound = 0.45359237 kilograms\nMET values are the 2024 Adult Compendium codes on the form\n1 MET ≈ 1 kcal per kilogram per hour',
    formulaNotes: [
      'The compendium ties 1 MET to a reference 3.5 mL of oxygen per kilogram per minute. The kcal equation is the practical companion of that definition. A person whose resting metabolism is not that reference will not match a calorimeter.',
      'Code 17190 is 3.8 MET in the 2024 table for walking 2.8 to 3.4 mph, level, moderate pace, firm surface. The 2011 compendium used 3.5 for a similar description. This page does not offer the retired value as a second answer.'
    ],
    examplesHeading: 'Worked calorie examples',
    samples: [
      { title: 'Walking, 70 kg, 30 minutes', values: { activity: 2, units: 1, weight: 70, minutes: 30 }, blurb: 'Code 17190, 3.8 MET. 3.8 × 70 × 0.5 = 133.0 kcal. This is the sample.' },
      { title: 'Running at about 6 mph, same person and time', values: { activity: 6, units: 1, weight: 70, minutes: 30 }, blurb: 'Code 12050, 9.3 MET. The same weight and minutes produce 325.5 kcal. The only change is the activity.' },
      { title: 'Slow freestyle, 70 kg, 45 minutes', values: { activity: 8, units: 1, weight: 70, minutes: 45 }, blurb: 'Code 18240, 5.8 MET, swimming laps, freestyle, slow, recreational. Minutes are 45, so the hours are 0.75 rather than 0.5.' }
    ],
    table: {
      heading: '2024 MET values used on this page',
      caption: 'MET and code from the 2024 Adult Compendium. The 30-minute column is a 70 kg person, which is MET × 70 × 0.5. It is an estimate, not a measured expenditure.',
      headers: ['Activity', 'Code', 'MET', '70 kg, 30 min'],
      rows: MET_ACTIVITIES.map((item) => [item[1], item[3], item[2].toFixed(1), `${(item[2] * 70 * 0.5).toFixed(1)} kcal`])
    },
    limitsHeading: 'What a MET estimate does not measure',
    limits: [
      'It is not a wearable reading and not a metabolic-cart result. Terrain, heat, fitness, and carrying a load change the cost. The compendium description is an average for that description, not a test of you.',
      'It is not a diet prescription and not medical advice. The day’s maintenance estimate is the calorie calculator. A session total should not be subtracted from a guessed intake as if both were exact.',
      'Only the listed activities are available. Yoga, a team sport, or a hill repeat that is not one of these codes is not approximated by picking the closest label. Pick the row whose words match, or do not use the page for that session.',
      'The 2024 values replaced some familiar 2011 numbers. Moderate walking here is 3.8 MET, and running at 6–6.3 mph is 9.3 MET. A calculator still using 3.5 and 9.8 is on the older table. This page is on the 2024 table.'
    ],
    disclaimer: 'This MET estimate is general information from the 2024 Adult Compendium equation. It is not medical advice, a diet, or a measured calorie burn.',
    faqs: [
      { q: 'How many calories does a 70 kg person use walking for 30 minutes?', a: 'About 133.0 kcal at the 2024 compendium value for walking 2.8–3.4 mph, which is 3.8 MET, code 17190. The arithmetic is 3.8 × 70 × 0.5. A brisker walk, 3.5–3.9 mph, is 4.8 MET and a higher result.' },
      { q: 'Which MET table does the calorie burn calculator use?', a: 'The 2024 Adult Compendium. Walking at 2.8–3.4 mph is 3.8 MET, not the older 3.5. Running at 6–6.3 mph is 9.3 MET, code 12050. The code is printed under the headline.' },
      { q: 'How is this different from the daily calorie calculator?', a: 'The daily page estimates maintenance calories for a day from a body-size equation and an activity factor. This page estimates one described activity for the minutes you type. They are not substitutes.' },
      { q: 'Does a heavier person burn more calories at the same MET?', a: 'In this equation, yes. Kilocalories scale with kilograms. That is the compendium formula, MET × kg × hours. It is not a claim about a particular person’s fitness.' },
      { q: 'Is the calorie result medical or diet advice?', a: 'No. It is an estimate for a published activity description. It does not set an intake, diagnose anything, or replace a measured test. Food, rest, and a clinician’s advice are outside the form.' }
    ],
    relatedLinks: [
      { slug: 'calorie-calculator', label: 'Calorie calculator', note: 'A day’s maintenance estimate from Mifflin–St Jeor and an activity multiplier. Not one session.' },
      { slug: 'tdee-calculator', label: 'TDEE calculator', note: 'A resting equation times a day-long activity factor. It does not look up a compendium code.' },
      { slug: 'pace-calculator', label: 'Pace calculator', note: 'Minutes per kilometre or mile. A pace is not a MET, and this page does not convert a finish time into a code.' }
    ]
  }),
  'lean-body-mass-calculator': page({
    slug: 'lean-body-mass-calculator',
    title: 'Lean Body Mass Calculator: Boer and Hume Formulas | ClearCalc',
    h1: 'Lean Body Mass Calculator',
    description: 'Lean body mass calculator using the Boer (1984) or Hume (1966) formula. A man at 80 kg and 180 cm is 61.42 kg by Boer and 57.79 kg by Hume. Not a body-composition test.',
    intro: [
      'This lean body mass calculator estimates fat-free mass from sex, height, and weight. It does not use a waist, a neck, or a skinfold. Boer (1984) for a man is 0.407 × kilograms + 0.267 × centimetres − 19.2. At 80 kg and 180 cm that is 61.42 kg. Hume (1966) for a man is 0.32810 × kilograms + 0.33929 × centimetres − 29.5336, which is 57.79 kg at the same size. Both results are shown. The headline is the formula you chose.',
      'The two equations were fit on different adult reference groups, which is why they do not agree. The gap, about 3.6 kg in the sample, is the reason the page prints both instead of pretending there is one lean mass. The women’s equations are different constants. A woman at 65 kg and 165 cm is 46.13 kg by Boer.',
      'The body-fat calculator uses the U.S. Navy circumference equations and can split a body weight into fat and lean mass from a percent. The BMI calculator is a ratio of weight to height squared. Neither of those measurements is Boer or Hume. This page is not a DEXA scan and not medical advice.'
    ],
    steps: [
      'Choose the men’s or women’s equation set. The constants are not interchangeable. The sample is the men’s set.',
      'Choose Boer or Hume for the headline. The other formula is still printed. The sample is Boer.',
      'Choose kilograms and centimetres, or pounds and inches. The sample is 80 kg and 180 cm. Pounds use 0.45359237 kg, and inches use 2.54 cm.',
      'Press Calculate. The headline is the chosen formula in kilograms, even if you typed pounds. The lines show both formulas and the converted height and weight.',
      'If the estimate is above the body weight, the inputs are outside a sensible range for these fits. The page says so instead of hiding the number.'
    ],
    howHeading: 'How the Boer and Hume equations are applied',
    howItWorks: [
      'Weight and height are converted to kilograms and centimetres first. The men’s Boer equation is 0.407 × 80 + 0.267 × 180 − 19.2 = 32.56 + 48.06 − 19.2 = 61.42. The women’s Boer equation, 0.252 × weight + 0.473 × height − 48.3, is not used for that row. Switching the equation set changes the constants, not just a label.',
      'The men’s Hume equation is 0.32810 × 80 + 0.33929 × 180 − 29.5336 = 26.248 + 61.0722 − 29.5336 = 57.7866, displayed as 57.79 kg. The women’s Hume constants are 0.29569, 0.41813, and 43.2933. The page always computes both formulas so the headline choice is visible against the other one.',
      'If the chosen figure is below the body weight, the remainder is labelled as an estimated fat mass only if the lean figure were exact. It is a subtraction, not a measured fat mass. The Navy body-fat page is the one that starts from circumferences. This remainder should not be quoted as that percent.'
    ],
    formula: 'Boer, men: 0.407×kg + 0.267×cm − 19.2\nBoer, women: 0.252×kg + 0.473×cm − 48.3\nHume, men: 0.32810×kg + 0.33929×cm − 29.5336\nHume, women: 0.29569×kg + 0.41813×cm − 43.2933\nWeight and height are converted to kilograms and centimetres before the formula\n1 pound = 0.45359237 kg, 1 inch = 2.54 cm',
    formulaNotes: [
      'Boer P. Estimated lean body mass as an index for normalization of body fluid volumes in humans. American Journal of Physiology, 1984. Hume R. Prediction of lean body mass from height and weight. Journal of Clinical Pathology, 1966. The constants are those published fits, not a new regression.',
      'The display is two decimal places in kilograms. 57.7866 becomes 57.79. The other formula is rounded on its own line. The gap between them is not a confidence interval.'
    ],
    examplesHeading: 'Worked lean-body-mass examples',
    samples: [
      { title: 'Boer, man, 80 kg, 180 cm', values: { sex: 1, formula: 1, units: 1, weight: 80, height: 180 }, blurb: 'The headline is 61.42 kg. The Hume line on the same inputs is 57.79 kg. The equation set is the men’s constants.' },
      { title: 'Hume headline, same man', values: { sex: 1, formula: 2, units: 1, weight: 80, height: 180 }, blurb: 'Only the headline formula changes. Both numbers are still printed. The headline is now 57.79 kg.' },
      { title: 'Boer, woman, 65 kg, 165 cm', values: { sex: 2, formula: 1, units: 1, weight: 65, height: 165 }, blurb: 'The women’s Boer constants replace the men’s. The headline is 46.13 kg. Using the men’s equation on these inputs would be a different, wrong, calculation.' }
    ],
    table: {
      heading: 'Boer and Hume at two adult sizes',
      caption: 'Kilograms. Each pair is this calculator. The headline depends on the formula choice. The other column is the line under the headline.',
      headers: ['Size', 'Boer', 'Hume'],
      rows: [
        ['Man, 80 kg, 180 cm', '61.42 kg', '57.79 kg'],
        ['Woman, 65 kg, 165 cm', '46.13 kg', '44.92 kg']
      ]
    },
    limitsHeading: 'What these lean-mass formulas do not measure',
    limits: [
      'They are not a DEXA, a Bod Pod, or a clinical body-composition test. They were fit to adult reference data. A child, a pregnancy, an amputation, or a body far outside the original groups can produce a number the page will still compute inside its weight and height limits.',
      'They do not use a circumference. The body-fat calculator does, with the U.S. Navy equations, and it can report a lean mass from a fat percent. Quoting both pages as one measurement mixes two methods.',
      'The remainder under the body weight is not a measured fat mass. It is body weight minus the estimate. If the estimate exceeds body weight, the page says the inputs are outside a sensible result.',
      'Choosing the men’s or women’s constants is required because the equations differ. The page cannot infer which set to use. BMI is a different ratio and is not converted into a lean mass here.'
    ],
    disclaimer: 'Boer and Hume estimates are population formulas, not a measurement of your lean mass and not medical advice.',
    faqs: [
      { q: 'What is the Boer lean body mass for a man at 80 kg and 180 cm?', a: '61.42 kg. That is 0.407×80 + 0.267×180 − 19.2. The Hume formula on the same inputs is 57.79 kg. The page shows both.' },
      { q: 'Why do Boer and Hume disagree?', a: 'They are different published fits. The men’s Hume equation uses 0.32810, 0.33929, and 29.5336. Boer uses 0.407, 0.267, and 19.2. The sample gap is about 3.6 kg. The page does not average them into a third number.' },
      { q: 'How is lean body mass different from the body-fat calculator?', a: 'The body-fat page uses Navy circumferences and a weight, then can split fat and lean mass from a percent. This page uses only sex, height, and weight, and only the Boer or Hume equation. A neck and a waist are not inputs here.' },
      { q: 'Do I enter pounds or kilograms?', a: 'Either. The pound-and-inch choice converts with 0.45359237 kilograms per pound and 2.54 centimetres per inch, then uses the same equations. The headline is always kilograms.' },
      { q: 'Is the estimated fat mass a measured result?', a: 'No. If the lean estimate is below the body weight, the page subtracts and labels the remainder as fat only if the lean figure were exact. It is not a skinfold and not the Navy fat percent.' }
    ],
    relatedLinks: [
      { slug: 'body-fat-calculator', label: 'Body fat calculator', note: 'U.S. Navy circumferences. A man at 70 inches, neck 15, waist 34, and 180 pounds is 17.51% body fat there. This page does not use those measurements.' },
      { slug: 'bmi-calculator', label: 'BMI calculator', note: 'Weight divided by height squared. It is not a lean-mass equation.' },
      { slug: 'ideal-weight-calculator', label: 'Ideal weight calculator', note: 'Devine, Robinson, and Miller. A target weight is not a Boer or Hume lean mass.' }
    ]
  }),
  'canada-tfsa-calculator': page({
    slug: 'canada-tfsa-calculator',
    title: 'Canada TFSA Calculator: 2026 Contribution Room | ClearCalc',
    h1: 'Canada TFSA Contribution Room Calculator',
    description: 'Canada TFSA calculator for 2026 contribution room. The CRA dollar limit is $7,000 for 2024, 2025, and 2026. Someone eligible since 2009 who has never contributed has $109,000.00 of room. Not contribution advice.',
    intro: [
      'This TFSA calculator estimates unused room for a Canadian resident. The Canada Revenue Agency dollar limit is $7,000 for 2026, the same limit it lists for 2024 and 2025. Added to the earlier limits, a person who was 18 or older and resident in every year since 2009, and who has never contributed or withdrawn, has $109,000.00 of room in 2026. That total is the sum of the CRA table from 2009 through 2026.',
      'A second path follows the CRA worksheet. Room on 1 January 2025, minus 2025 contributions, plus 2025 withdrawals, plus the 2026 limit of $7,000, minus contributions already made in 2026. CRA’s own example of someone who turned 18 in 2024, contributed $7,000 that year and $2,000 in 2025, and has not withdrawn, has $12,000 of room in 2026. This page reproduces that case from the lifetime path: limits for 2024, 2025, and 2026 are $21,000, contributions are $9,000, and room is $12,000.00.',
      'A withdrawal in 2026 does not increase 2026 room. It is added on 1 January 2027. A year the person was not a resident does not receive that year’s limit, and the lifetime path cannot see those years. The result is an estimate from what you type. The CRA account, updated from issuer records, is the record that matters. This is not a contribution instruction, and TFSA room is not an RRSP deduction.'
    ],
    steps: [
      'Choose lifetime room or the worksheet. Lifetime room is the sample. It assumes residence and age 18 or older in every year from the first year through 2026.',
      'For lifetime room, enter the first year, from 2009 through 2026, all contributions including 2026, and withdrawals from 2025 and earlier. Do not include a 2026 withdrawal.',
      'For the worksheet, enter room on 1 January 2025, contributions and withdrawals during 2025, and contributions already made in 2026. The other boxes are ignored.',
      'Press Calculate. A non-negative headline is the room left. A negative result is an excess, labelled as over, and the 1% monthly tax is not computed.',
      'Compare the figure with the CRA account and with your own records. Issuer data can lag. The page cannot log into that account.'
    ],
    howHeading: 'How 2026 TFSA room is added up',
    howItWorks: [
      'The lifetime path adds the CRA dollar limit for each year from the first year through 2026, then adds withdrawals made before 2026, then subtracts every contribution, including contributions already made in 2026. Someone eligible since 2009 with no contributions and no withdrawals is at $109,000.00. The 2009–2012 limits are $5,000, 2013–2014 and 2016–2018 are $5,500, 2015 is $10,000, 2019–2022 are $6,000, 2023 is $6,500, and 2024–2026 are $7,000.',
      'The worksheet path is the order on the CRA worksheet. Unused room at the end of 2025 is January 2025 room minus 2025 contributions. Room on 1 January 2026 is that unused amount, plus 2025 withdrawals, plus $7,000. Available room subtracts contributions already made in 2026. A starting room of $7,000, contributions of $3,000, a withdrawal of $1,000, and a 2026 contribution of $1,500 leave $10,500.00.',
      'An excess is reported as a positive “over” amount. The tax on an excess TFSA amount is 1% per month, and this page does not know which month the excess began, so it does not compute the tax. Qualifying transfers, exempt contributions, and specified distributions are ignored, which is how the CRA worksheet treats them.'
    ],
    formula: 'Lifetime room = sum of CRA dollar limits from the first year through 2026\n  + withdrawals in 2025 and earlier − all contributions, including 2026\nWorksheet:\n  unused 2025 = room on 1 January 2025 − 2025 contributions\n  room on 1 January 2026 = unused 2025 + 2025 withdrawals + 2026 limit\n  available = room on 1 January 2026 − 2026 contributions already made\n2026 dollar limit = $7,000',
    formulaNotes: [
      'The dollar limits are the CRA table “MP, DB, RRSP, DPSP, ALDA, TFSA limits” and the 2026 TFSA contribution-room pages. The 2026 limit is $7,000. The lifetime total from 2009 through 2026, with no contributions, is $109,000.',
      'CRA’s Joe example: turned 18 in 2024, contributed the full $7,000, then contributed $2,000 in 2025. Room in 2026 is $12,000 before any 2026 contribution. The lifetime path with first year 2024 and contributions of $9,000 returns that $12,000.00.'
    ],
    examplesHeading: 'Worked TFSA room examples',
    samples: [
      { title: 'Eligible since 2009, nothing contributed', values: { mode: 1, firstyear: 2009, contributed: 0, withdrawn: 0, roomprev: 0, contribprev: 0, withdrawprev: 0, contribnow: 0 }, blurb: 'Every dollar limit from 2009 through 2026. The headline is $109,000.00. A 2026 withdrawal is not part of this path and would not increase 2026 room anyway.' },
      { title: 'Turned 18 in 2024 and contributed $9,000', values: { mode: 1, firstyear: 2024, contributed: 9000, withdrawn: 0, roomprev: 0, contribprev: 0, withdrawprev: 0, contribnow: 0 }, blurb: 'The CRA illustration of $7,000 in 2024 and $2,000 in 2025. Limits for three years are $21,000. Room is $12,000.00.' },
      { title: 'Worksheet from $7,000 of 2025 room', values: { mode: 2, firstyear: 2009, contributed: 0, withdrawn: 0, roomprev: 7000, contribprev: 3000, withdrawprev: 1000, contribnow: 1500 }, blurb: 'Unused 2025 room is $4,000. Add the $1,000 withdrawal and the $7,000 limit, then subtract the $1,500 already contributed in 2026. Available room is $10,500.00.' }
    ],
    table: {
      heading: 'CRA TFSA dollar limits, 2009–2026',
      caption: 'Annual dollar limits from the Canada Revenue Agency TFSA table. The 2026 limit is $7,000. A person does not receive a year before they were 18 and resident.',
      headers: ['Year', 'Dollar limit'],
      rows: tfsaRows
    },
    extraSections: [
      {
        heading: 'Cumulative room if every year was available',
        paragraphs: [
          `The sum of the CRA limits from 2009 through 2026 is ${new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD' }).format(tfsaRoomSince(2009))}. That is the lifetime-path headline when the first year is 2009 and contributions and prior withdrawals are zero. It is not the room of a person who turned 18 later or who was non-resident for a year.`
        ]
      }
    ],
    limitsHeading: 'What this TFSA room estimate leaves out',
    limits: [
      'The lifetime path gives every year from the first year through 2026. A year of non-residence does not create room. This form cannot see immigration dates or a year you left Canada. Use the worksheet path with the room the CRA account actually shows if those years are not all available.',
      'A withdrawal made in 2026 is not an input. It does not increase 2026 room. Putting it in the prior-withdrawal box would add it a year too early. The worksheet’s withdrawal box is for 2025 withdrawals only.',
      'The 1% per month tax on an excess is not calculated. The page reports the excess and stops. It does not know the month the excess started, and it does not file the return.',
      'Qualifying transfers, exempt contributions, and specified distributions are ignored. An RRSP deduction is a different calculator. TFSA room is not a deduction from income, and this page does not estimate a tax refund.'
    ],
    disclaimer: 'This TFSA room figure is an estimate from CRA dollar limits and the amounts you type. It is not the CRA account, a contribution instruction, or tax advice.',
    faqs: [
      { q: 'What is the 2026 TFSA dollar limit?', a: 'The Canada Revenue Agency lists $7,000 for 2026, the same dollar limit as 2024 and 2025. It is added on 1 January 2026 for someone who is eligible. It is not, by itself, the whole room if earlier years were unused.' },
      { q: 'How much TFSA room has accumulated since 2009?', a: '$109,000.00 for someone who was eligible in every year from 2009 through 2026 and has never contributed or withdrawn. The total is the sum of the CRA annual limits, including three years at $7,000.' },
      { q: 'What room does someone who turned 18 in 2024 have in 2026?', a: 'CRA’s example contributed $7,000 in 2024 and $2,000 in 2025 and has $12,000 of room in 2026 before a 2026 contribution. This calculator’s lifetime path, first year 2024 and contributions of $9,000, returns $12,000.00.' },
      { q: 'Does a 2026 TFSA withdrawal increase 2026 room?', a: 'No. A withdrawal is added to room on 1 January of the following year. The lifetime path asks for withdrawals from 2025 and earlier. The worksheet asks for withdrawals during 2025. A 2026 withdrawal is intentionally not a field.' },
      { q: 'Is TFSA room the same as an RRSP deduction?', a: 'No. The RRSP calculator estimates tax saved by a deduction. A TFSA contribution is not deducted from income. This page estimates room. Over-contributing can create a 1% monthly tax that this page does not compute.' }
    ],
    relatedLinks: [
      { slug: 'canada-rrsp-tax-savings-calculator', label: 'Canada RRSP tax savings calculator', note: 'The tax saved by a 2026 RRSP deduction. TFSA room is not a deduction.' },
      { slug: 'ontario-take-home-pay-calculator', label: 'Ontario take-home pay calculator', note: '2026 federal and Ontario tax on employment income. A TFSA contribution is not withheld on that page.' },
      { slug: 'compound-interest-calculator', label: 'Compound interest calculator', note: 'Growth of a balance you already decided to contribute. It does not know the TFSA limit.' }
    ]
  })
};
