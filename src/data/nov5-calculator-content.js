export const nov5CalculatorContent = {
  'debt-to-income-ratio-calculator': {
    title: 'Debt-to-Income Ratio Calculator (Front-End and Back-End) | ClearCalc',
    h1: 'Debt-to-Income Ratio Calculator',
    description: 'Find front-end and back-end debt-to-income ratios from gross monthly income, a housing payment, and other monthly debts. On $8,000, a $2,200 housing payment and $400 of other debts is 27.50% front-end and 32.50% back-end.',
    intro: [
      'This debt-to-income ratio calculator divides monthly debt by gross monthly income and keeps the housing payment separate from everything else. Front-end DTI is the housing payment alone divided by income. Back-end DTI is housing plus the other debts you type, divided by the same income. The sample is $8,000 of gross monthly income, a $2,200 housing payment, and $400 of other debts. The headline is 32.50% back-end. The front-end line is 27.50%. Housing is $40.00 under the $2,240.00 line for 28% of income. The $2,600 total is $280.00 under the $2,880.00 line for 36%.',
      'The how-much-house calculator on this site runs the same percentages in the other direction. It starts from annual income and solves a price. Its sample housing payment is $2,800 on $10,000 of monthly gross income, with $400 of other debts. Typed into this page, that pair is a 28.00% front-end ratio and a 32.00% back-end ratio. Housing equals the $2,800.00 line. This page does not turn those ratios back into a loan or a home price. The mortgage page, given the loan that house page solved, returns the principal and interest. Three tools, one set of percents, three different questions.',
      'A 28% housing line and a 36% total line are planning marks, and so are 31% and 43%. Neither pair is a 2026 Fannie Mae hard maximum. Automated underwriting can allow a back-end ratio near 50% on a strong file, and it can refuse a file that sits under 36%. The $5,000 example on this page, with $1,800 of housing and $700 of other debts, is 36.00% front-end and 50.00% back-end. The result reports the ratios and the dollar gaps. It does not approve or decline the loan.'
    ],
    steps: [
      'Enter gross monthly income in US dollars, before tax. The sample, 8000, is $8,000 a month. An annual salary has to be divided by 12 before you type it. Take-home pay is the wrong base, because the ratios lenders quote use gross income.',
      'Enter the monthly housing payment. Include principal, interest, property tax, insurance, and HOA if those are part of the housing bill you are testing. The sample is 2200. Do not also type that housing figure in the other-debt box.',
      'Enter other monthly debt payments: car loans, student loans, credit-card minimums, personal loans, and court-ordered support you actually pay. The sample is 400. Leave it at 0 if housing is the only debt. Utilities, groceries, and child care are not in the sample and are not added for you.',
      'Press Calculate. The headline is the back-end ratio. The front-end ratio, the dollar total, and the gaps under or over the 28%, 36%, 31%, and 43% lines are listed underneath.'
    ],
    howHeading: 'How front-end and back-end DTI are calculated',
    howItWorks: [
      'Both ratios use the same denominator, gross monthly income. On the sample that is $8,000. Front-end is $2,200 / $8,000 = 0.275, which displays as 27.50%. Back-end adds the $400 before dividing: $2,600 / $8,000 = 0.325, which displays as 32.50%. The headline is the back-end figure because that is the ratio people mean when they say “DTI” without a qualifier. The front-end figure is the first detail line so the housing share is not lost inside the total.',
      'The 28% line is income times 0.28, rounded to the cent. $8,000 × 0.28 is $2,240.00, and $2,200 is $40.00 under it. The 36% line is $2,880.00, and $2,600 is $280.00 under it. The 31% line is $2,480.00, which is $280.00 above the housing payment. The 43% line is $3,440.00, which is $840.00 above the combined payments. “Under” means the payment you typed is smaller than the line. It does not mean a lender has room left after mortgage insurance, a rate that has not been locked, or a debt you forgot.',
      'The house-affordability sample is the check that the two pages share a definition. Monthly income of $10,000, housing of $2,800, and other debts of $400 produce 28.00% and 32.00%. Housing equals the $2,800.00 line for 28%. The combined payments are $400.00 under the $3,600.00 line for 36%. That is the same 28.00% and 32.00% the house page prints for its $431,795.43 result. If this page ever disagreed, one of the two forms would be using a different percent. The house page still has to subtract tax and insurance before it solves a loan. This page treats the housing box as the whole housing payment, already assembled.',
      'A file can pass one line and miss the other. Income of $6,000 with $1,500 of housing and no other debts is 25.00% on both ratios, because the back-end total is the housing payment when other debts are zero. Housing is $180.00 under the $1,680.00 line for 28%. Income of $5,000 with $1,800 of housing and $700 of other debts is 36.00% front-end and 50.00% back-end. Housing is $400.00 over the $1,400.00 line, and the $2,500 total is $700.00 over the $1,800.00 line. The same $2,500 is also $350.00 over the $2,150.00 line for 43%. A 50% back-end ratio is a number some automated systems will still look at. This form only does the division.'
    ],
    formula: 'Front-end DTI = monthly housing payment ÷ gross monthly income × 100\nBack-end DTI = (monthly housing payment + other monthly debts) ÷ gross monthly income × 100\nA 28% housing line = income × 28 ÷ 100, rounded to the cent\nA 36% total line = income × 36 ÷ 100, rounded to the cent\nThe 31% and 43% lines use the same rounding\nThe headline is the back-end ratio\nGross monthly income must be above zero',
    formulaNotes: [
      'Ratios display with two decimal places. 27.5% is printed as 27.50%. A payment that lands on the line says “equals” rather than “under” or “over.” Dollar gaps are the rounded line minus the payment you typed, so a line that itself rounded to the cent can differ by a cent from income times the percent done by hand with more decimals.',
      'The house-affordability page uses annual income and divides by 12 inside its own formula. This page wants the monthly figure. $120,000 a year is $10,000 a month only when you divide by 12. Do not type 120000 into the income box and expect the 28.00% check to appear. That entry would be read as $120,000 a month.'
    ],
    examplesHeading: 'Worked debt-to-income examples',
    examples: [
      {
        title: '$8,000 income, $2,200 housing, $400 other debts',
        paragraphs: [
          'Income 8000, housing 2200, other debts 400. The calculator shows 32.50% back-end. Front-end is 27.50%. The housing payment is $2,200.00, other debts are $400.00, and the total is $2,600.00 against $8,000.00 of income. Housing is $40.00 under the $2,240.00 line for 28% of gross income. The total is $280.00 under the $2,880.00 line for 36%.',
          'The same payments are also $280.00 under the 31% housing line of $2,480.00 and $840.00 under the 43% line of $3,440.00. Clearing every planning line on this page is not a pre-qualification. A credit-card minimum that is about to rise, or a car loan that was left out of the $400, changes the back-end ratio as soon as you type the new dollar amount.'
        ]
      },
      {
        title: 'The how-much-house sample, checked as ratios',
        paragraphs: [
          'Income 10000, housing 2800, other debts 400. The headline is 32.00% back-end and the front-end line is 28.00%. Housing equals the $2,800.00 line for 28% of gross income. The total of housing and other debts is $400.00 under the $3,600.00 line for 36%. Those are the ratios the house page reports for $120,000 of annual income, $400 of other debts, and the housing payment it built.',
          'That house page’s price is $431,795.43, with $2,350.00 of principal and interest inside the $2,800.00. This form never sees the $2,350.00 separately. If you type only the principal and interest, and leave tax and insurance out, the front-end ratio falls and the comparison with the house page breaks. Put the full housing payment in the housing box.'
        ]
      },
      {
        title: 'A 25% pair, and a 50% back-end ratio',
        paragraphs: [
          'Income 6000, housing 1500, other debts 0. Both ratios are 25.00%, because there is nothing to add to housing. Housing is $180.00 under the $1,680.00 line for 28%, and the same $1,500.00 is $660.00 under the $2,160.00 line for 36%. A later car payment belongs in the other-debt field. It does not belong inside the housing payment unless it is actually part of the housing bill.',
          'Income 5000, housing 1800, other debts 700. The headline is 50.00% back-end and the front-end line is 36.00%. Housing is $400.00 over the $1,400.00 line. The $2,500.00 total is $700.00 over the $1,800.00 line for 36% and $350.00 over the $2,150.00 line for 43%. The page still prints the percents. It does not stop at 43% or at 50%.'
        ]
      }
    ],
    table: {
      heading: 'Front-end and back-end ratios for five monthly budgets',
      caption: 'Each row is what this calculator displays. The 28/36 and 31/43 lines are planning marks printed with the result. They are not a 2026 approval limit. Housing is not typed again as an other debt.',
      headers: ['Gross monthly income', 'Housing', 'Other debts', 'Front-end', 'Back-end'],
      rows: [
        ['$8,000', '$2,200', '$400', '27.50%', '32.50%'],
        ['$10,000', '$2,800', '$400', '28.00%', '32.00%'],
        ['$6,000', '$1,500', '$0', '25.00%', '25.00%'],
        ['$5,000', '$1,800', '$700', '36.00%', '50.00%'],
        ['$7,500', '$3,200', '$900', '42.67%', '54.67%']
      ]
    },
    limitsHeading: 'What a debt-to-income ratio leaves out',
    limits: [
      'Gross income is not the paycheck. A $96,000 annual wage is $8,000 a month before federal tax, state tax, Social Security, and Medicare. The Arizona and New Jersey paycheck pages estimate what a salary keeps after those taxes. They do not divide a housing payment by income. Using take-home pay in this form makes every ratio look worse than the gross-income convention, and it will not match a lender’s worksheet that asked for gross.',
      'Installment debts, revolving minimums, and support orders are the usual “other debts.” Renters insurance, utilities, groceries, phone bills, and childcare are real monthly costs and they are not added. A rent payment is housing, so it belongs in the housing box, not in both boxes. Double-counting the rent is the fastest way to invent a back-end ratio the household does not have.',
      'Mortgage insurance, a rate that is still a quote, and a tax escrow that has not been set are not estimated. The house page can build a housing payment from tax, insurance, HOA, and a mortgage rate, and this page can then score that payment. This page cannot invent the payment from a purchase price. Credit score, reserves, and the 2026 conforming loan limit are outside the division.',
      'Two borrowers need a combined income and a combined debt list if the loan is joint. Running each person separately and adding the percentages is not a joint ratio. Adding the incomes and adding the debts, then making one entry, is the joint ratio. A debt the other person pays alone should be in that total only if the lender will count it.'
    ],
    disclaimer: 'This debt-to-income figure is a ratio of the dollars you entered. It is not a pre-qualification, a Loan Estimate, or a statement of what a 2026 lender will allow.',
    faqs: [
      {
        q: 'What is the back-end debt-to-income ratio on $8,000 with $2,200 of housing and $400 of other debts?',
        a: '32.50%. The front-end ratio is 27.50%, because $2,200 is 27.50% of $8,000 and the $400 is not in that line. Housing is $40.00 under a 28% line of $2,240.00. The $2,600 total is $280.00 under a 36% line of $2,880.00. The headline is the back-end figure.'
      },
      {
        q: 'How is front-end DTI different from the back-end ratio?',
        a: 'Front-end uses only the housing payment. Back-end adds the other monthly debts first. On the sample those are 27.50% and 32.50%. If other debts are $0, the two ratios match, as they do at $6,000 of income and $1,500 of housing, both 25.00%. Do not type the housing payment in both fields or the back-end ratio counts it twice.'
      },
      {
        q: 'Does 32.50% back-end DTI meet a 2026 Fannie Mae limit?',
        a: 'This page does not know. It compares your payments with 28%, 36%, 31%, and 43% planning lines and says whether you are under, over, or equal. Fannie Mae does not publish those four numbers as a hard maximum for every 2026 loan. A 50.00% back-end result, from $5,000 of income with $1,800 of housing and $700 of other debts, is still only a ratio.'
      },
      {
        q: 'Why does the how-much-house sample read as 28.00% and 32.00% here?',
        a: 'That page’s housing payment is $2,800 on $10,000 of monthly gross income, plus $400 of other debts. $2,800 / $10,000 is 28.00%, and $3,200 / $10,000 is 32.00%. Housing equals the $2,800.00 line. The home price of $431,795.43 is solved on the other page. This one does not amortize the loan inside that payment.'
      },
      {
        q: 'Should utilities go in the other-debt field of a DTI calculator?',
        a: 'No. The field is for debts: car loans, student loans, card minimums, personal loans, and support you pay. Utilities, groceries, and childcare stay out, which is why a household can feel squeezed at a 32.50% ratio. A rent or mortgage payment is housing. Putting it in both boxes double-counts it.'
      },
      {
        q: 'What does a 50% back-end DTI mean on this page?',
        a: 'It means the housing payment plus the other debts equal half of gross monthly income. The $5,000 row with $1,800 of housing and $700 of other debts is that case: 36.00% front-end and 50.00% back-end. The payments are over the 28%, 36%, 31%, and 43% lines. The calculator still reports the ratio. It does not decline the file.'
      }
    ],
    relatedLinks: [
      { slug: 'house-affordability-calculator', label: 'How much house can I afford calculator', note: 'Turns income and debts into a price. Its sample housing payment of $2,800 on $10,000 a month is 28.00% front-end and 32.00% back-end on this page.' },
      { slug: 'mortgage-calculator', label: 'Fixed-rate mortgage payment calculator', note: 'The principal and interest inside a housing payment. A $371,795.43 loan at 6.5% for 30 years is $2,350.00 a month there, before tax and insurance.' },
      { slug: 'rent-affordability-calculator', label: 'Rent affordability calculator', note: 'Compares rent with 30% of gross income. It does not add car loans or card minimums, and it does not print a back-end ratio.' },
      { slug: 'credit-card-payoff-calculator', label: 'Credit card payoff calculator', note: 'A $5,000 balance at 21.99% takes 34 months at $200 a month. The minimum you actually pay is what belongs in this page’s other-debt field, not the balance.' }
    ]
  },
  'ideal-weight-calculator': {
    title: 'Ideal Weight Calculator: Devine, Robinson, and Miller | ClearCalc',
    h1: 'Ideal Body Weight Calculator',
    description: 'Estimate adult ideal body weight from height with the Devine, Robinson, and Miller formulas. At 175 cm, a man’s Devine weight is 70.5 kg. This is not a BMI.',
    intro: [
      'This ideal weight calculator applies three adult formulas that start from height: Devine (1974), Robinson (1983), and Miller (1983). Each one is a straight line in kilograms. The base is the weight at 5 feet, and the slope is a number of kilograms per inch above 5 feet. The sample is a male height of 175 cm. The headline is the Devine result rounded to one decimal, 70.5 kg. The unrounded Devine line is 70.46 kg, which is 155.3 lb. Robinson is 68.91 kg (151.9 lb). Miller is 68.75 kg (151.6 lb). The three answers are close at this height and they are not the same number.',
      'Body mass index is a different calculation and it already has its own page. BMI divides a weight you supply by height squared. It does not produce a target weight. Typing the rounded Devine figure, 70.5 kg, and 175 cm into that page shows BMI 23 and the Healthy range label. That label is a screening band for the weight you typed. It is not what Devine, Robinson, or Miller computed. A person can sit in the Healthy range at a weight none of these three formulas names, and a formula weight can be a poor description of a particular adult.',
      'The formulas were published for adults, and the male and female lines use different bases and, except for Devine, different slopes. A female height of 162.56 cm is 64 inches, four inches over 5 feet. Devine is 54.7 kg, Robinson is 55.8 kg, and Miller is 58.54 kg. Miller sits about 3.8 kg above Devine there, a wider gap than the male sample. The page will not average the three, and it will not pick a winner. Devine is the headline because it is the figure most often quoted. The other two stay on the page so the disagreement is visible.'
    ],
    steps: [
      'Choose male or female. The sample is male. The choice selects the base weight and the kilograms per inch. It does not change how centimetres are converted.',
      'Enter height in centimetres. The sample is 175. A height of 5 feet 10 inches is 177.8 cm, because 70 × 2.54 = 177.8. Do not type metres. 1.75 m is 175 cm.',
      'Press Calculate. The headline is the Devine weight in kilograms, to one decimal. Robinson, Miller, the pound equivalents, and the inch conversion are underneath.',
      'Read the BMI line only as a pointer. It is the ratio of the unrounded Devine kilograms to this height. The category is not assigned here. The BMI page assigns it when you type a weight.'
    ],
    howHeading: 'How Devine, Robinson, and Miller use height',
    howItWorks: [
      'An inch is 2.54 centimetres exactly, so inches = centimetres ÷ 2.54. Inches over 5 feet are that result minus 60. For 175 cm the calculator shows 68.9 inches and 8.9 inches over 5 feet. The formulas then use the full division, not those rounded displays. Devine for a man is 50 + 2.3 × (inches − 60). That product is 70.46 kg before the headline rounds it to 70.5 kg. Robinson for a man is 52 + 1.9 × (inches − 60), which is 68.91 kg. Miller for a man is 56.2 + 1.41 × (inches − 60), which is 68.75 kg. The pound line divides kilograms by 0.45359237.',
      'A clean check is 177.8 cm, which is 70 inches and 10 inches over 5 feet. Male Devine is 50 + 2.3 × 10 = 73 kg exactly, and the headline is 73 kg. Robinson is 52 + 1.9 × 10 = 71 kg. Miller is 56.2 + 1.41 × 10 = 70.3 kg. The detail line shows 73 kg (160.9 lb), 71 kg (156.5 lb), and 70.3 kg (155 lb). If those three are off, the sex field is not male or the height is not 177.8. At 5 feet exactly, 152.4 cm, the inches-over-5-feet term is zero. A man is Devine 50 kg, Robinson 52 kg, and Miller 56.2 kg. A woman is Devine 45.5 kg, Robinson 49 kg, and Miller 53.1 kg. The slope never gets a chance to matter.',
      'The female equations are Devine 45.5 + 2.3 × (inches − 60), Robinson 49 + 1.7 × (inches − 60), and Miller 53.1 + 1.36 × (inches − 60). Devine uses the same 2.3 kg per inch for both sexes and a lower base for women. Robinson and Miller change both the base and the slope. At 162.56 cm the female results are 54.7 kg, 55.8 kg, and 58.54 kg. At 163 cm, a round centimetre near that height, the female headline is 55.1 kg, with Robinson at 56.09 kg and Miller at 58.78 kg. Switching the sex on 175 cm is a different question, not a small correction. The male headline of 70.5 kg does not become the female answer by subtracting a fixed number you can reuse at every height.',
      'At 190 cm a man is 74.8 inches, 14.8 inches over 5 feet. Devine is 84.05 kg and the headline is 84 kg. Robinson is 80.13 kg. Miller is 77.07 kg. The order has flipped relative to the 175 cm sample in the sense that the spread is now several kilograms, with Devine the highest and Miller the lowest. That spread is the formulas, not a range of healthy weights. The BMI page, given 70.5 kg and 175 cm, shows BMI 23, Healthy range. Given 73 kg and 177.8 cm it shows BMI 23.1, still Healthy range. Those labels do not prove the formula. They only locate one of its outputs on a different chart.'
    ],
    formula: 'Inches = centimetres ÷ 2.54\nInches over 5 feet = inches − 60\nDevine, men: 50 + 2.3 × inches over 5 feet\nDevine, women: 45.5 + 2.3 × inches over 5 feet\nRobinson, men: 52 + 1.9 × inches over 5 feet\nRobinson, women: 49 + 1.7 × inches over 5 feet\nMiller, men: 56.2 + 1.41 × inches over 5 feet\nMiller, women: 53.1 + 1.36 × inches over 5 feet\nThe headline is Devine, in kilograms, to one decimal\nPounds = kilograms ÷ 0.45359237\nHeight must be from 122 cm through 244 cm',
    formulaNotes: [
      'The displayed inches are rounded. 175 cm is shown as 68.9 inches and 8.9 inches over 5 feet. The kilograms are computed from the unrounded quotient. Multiplying 2.3 by 8.9 gives 20.47 and a Devine weight of 70.47 kg, which is a tenth of a kilogram away from the 70.46 kg line. Use the kilogram line, not the rounded inches, if you are checking the page by hand.',
      'Hamwi’s formula and Broca’s formula are not on this page. A clinical note that says “ideal body weight” without naming the equation might mean any of them. Devine is the headline here, and the detail lines name Robinson and Miller so a saved result still says which three numbers were produced. The calorie page uses Mifflin–St Jeor and an activity multiplier. It does not read these weights.'
    ],
    examplesHeading: 'Worked ideal-weight examples',
    examples: [
      {
        title: 'A man at 175 cm, beside the BMI page',
        paragraphs: [
          'Sex male, height 175. The calculator shows 70.5 kg. Devine is 70.46 kg (155.3 lb), Robinson is 68.91 kg (151.9 lb), and Miller is 68.75 kg (151.6 lb). Height is shown as 68.9 inches, 8.9 inches over 5 feet. The BMI pointer on the unrounded Devine weight displays as 23.',
          'The BMI calculator, given weight 70.5 and height 175, shows BMI 23 and Healthy range. That is the rounded Devine kilogram run through a different formula. Robinson’s 68.91 kg is not what that BMI entry used. Ideal weight does not become BMI by changing the label, and BMI does not become a target weight by reading the category backwards.'
        ]
      },
      {
        title: '70 inches, and exactly 5 feet',
        paragraphs: [
          'Male, height 177.8. The height line says 70 inches and 10 inches over 5 feet. Devine is 73 kg (160.9 lb), Robinson is 71 kg (156.5 lb), and Miller is 70.3 kg (155 lb). The headline is 73 kg. The arithmetic is 50 + 23, 52 + 19, and 56.2 + 14.1. This is the row to use when you want the slopes with no leftover fraction of an inch.',
          'Male, height 152.4. Inches over 5 feet are 0. Devine is 50 kg (110.2 lb), Robinson is 52 kg (114.6 lb), and Miller is 56.2 kg (123.9 lb). Female at the same 152.4 cm is 45.5 kg, 49 kg, and 53.1 kg. The two sexes differ at 5 feet by the bases alone: 4.5 kg on Devine, 3 kg on Robinson, and 3.1 kg on Miller.'
        ]
      },
      {
        title: 'A woman at 64 inches, and a taller man',
        paragraphs: [
          'Female, height 162.56. The calculator shows 54.7 kg. Devine is 54.7 kg (120.6 lb), Robinson is 55.8 kg (123 lb), and Miller is 58.54 kg (129.1 lb). The height line says 64 inches and 4 inches over 5 feet. Miller is the highest of the three. On the male 175 cm sample, Miller was the lowest. The sex field is what swaps those slopes.',
          'Male, height 190. The headline is 84 kg. Devine is 84.05 kg (185.3 lb), Robinson is 80.13 kg (176.6 lb), and Miller is 77.07 kg (169.9 lb). The gap from Miller to Devine is a bit over 7 kg. Nothing on the page averages 84.05, 80.13, and 77.07 into a single “ideal.” The calorie calculator will not turn 84.05 kg into a maintenance target unless you type a weight into that form yourself.'
        ]
      }
    ],
    table: {
      heading: 'Devine, Robinson, and Miller at six adult heights',
      caption: 'Each kilogram is the unrounded detail line this calculator displays. The headline rounds Devine to one decimal, so 70.46 kg is shown as 70.5 kg and 84.05 kg as 84 kg. Pounds use the international pound of 0.45359237 kg.',
      headers: ['Height', 'Sex', 'Devine', 'Robinson', 'Miller'],
      rows: [
        ['175 cm', 'Male', '70.46 kg', '68.91 kg', '68.75 kg'],
        ['177.8 cm', 'Male', '73 kg', '71 kg', '70.3 kg'],
        ['152.4 cm', 'Male', '50 kg', '52 kg', '56.2 kg'],
        ['162.56 cm', 'Female', '54.7 kg', '55.8 kg', '58.54 kg'],
        ['152.4 cm', 'Female', '45.5 kg', '49 kg', '53.1 kg'],
        ['190 cm', 'Male', '84.05 kg', '80.13 kg', '77.07 kg']
      ]
    },
    limitsHeading: 'What an ideal-weight formula leaves out',
    limits: [
      'Frame size, muscle, pregnancy, amputation, and oedema are not inputs. A clinician who uses Devine as a starting point for a dose still adjusts for the person. This page is not a dose. Typing 175 cm and reading 70.5 kg does not say how much of a medicine to give, and it does not say that 70.5 kg is a goal weight for that adult.',
      'Children and teenagers are outside the formulas. The form accepts 122 cm through 244 cm so a short or tall adult can still run the arithmetic, and a height under 5 feet produces a smaller Devine weight because the inches-over-5-feet term is negative. That result is the line, not a paediatric chart. BMI-for-age percentiles are not computed on the BMI page either.',
      'The BMI category for 70.5 kg at 175 cm is Healthy range only because that weight and height fall between 18.5 and 25 on the adult cutoffs. Robinson’s 68.91 kg would be a different entry. Neither formula knows waist circumference. The calorie page’s Mifflin–St Jeor estimate needs an age and an activity multiplier this form does not collect. A 70.5 kg weight does not imply the sample 2,633 calories/day on that page, which was built for 75 kg, age 30, and a 1.55 multiplier.',
      'Pounds are a conversion of the kilogram result, not a second formula in pounds. Rounding the headline to 70.5 kg and converting that rounded kilogram is not how the 155.3 lb figure was made. The pound line uses the unrounded Devine kilograms. Checking 155.3 lb × 0.45359237 will land near 70.46 kg, not near a re-rounded 70.5.'
    ],
    disclaimer: 'These ideal-weight figures are the Devine, Robinson, and Miller equations applied to a height. They are not a diagnosis, a goal weight, or a medication dose.',
    faqs: [
      {
        q: 'What is the Devine ideal weight for a man who is 175 cm tall?',
        a: '70.46 kg before rounding, and 70.5 kg on the headline. That is 155.3 lb. Robinson is 68.91 kg (151.9 lb) and Miller is 68.75 kg (151.6 lb). The height is 68.9 inches, 8.9 inches over 5 feet. The BMI page, given 70.5 kg and 175 cm, shows BMI 23, Healthy range. That BMI is not the Devine formula.'
      },
      {
        q: 'Why do Robinson and Miller disagree with Devine at the same height?',
        a: 'They use different bases and different kilograms per inch. At 175 cm male, the three results are 70.46 kg, 68.91 kg, and 68.75 kg. At 162.56 cm female they are 54.7 kg, 55.8 kg, and 58.54 kg, and Miller is the highest rather than the lowest. The page reports all three and does not average them. Devine is only the headline.'
      },
      {
        q: 'Is ideal body weight the same calculation as BMI?',
        a: 'No. Ideal body weight here is a line from height and sex. BMI is weight divided by height squared, and the weight has to be supplied. 70.5 kg at 175 cm is BMI 23 on that page. The ideal-weight page never asks for a weight, and the BMI page never asks which of Devine, Robinson, or Miller you meant.'
      },
      {
        q: 'What do the ideal-weight formulas give at exactly 5 feet?',
        a: 'The slope term is zero. A man at 152.4 cm is Devine 50 kg, Robinson 52 kg, and Miller 56.2 kg. A woman at 152.4 cm is 45.5 kg, 49 kg, and 53.1 kg. Those are the published bases. Any taller height adds the slope times the inches over 60.'
      },
      {
        q: 'Can this ideal weight result be used as a drug dose?',
        a: 'No. Devine’s equation has been used as an input to dosing methods in clinical papers. This page only evaluates the equation and converts it to pounds. It does not know the drug, the indication, or the adjustments a prescriber would make. 70.5 kg is not a dose.'
      },
      {
        q: 'Why is 177.8 cm a useful check of the Devine formula?',
        a: '177.8 cm is 70 inches, exactly 10 inches over 5 feet, because 70 × 2.54 = 177.8. Male Devine is 50 + 2.3 × 10 = 73 kg. Robinson is 71 kg and Miller is 70.3 kg. If the headline is not 73 kg, the sex or the height is not the pair this check uses.'
      }
    ],
    relatedLinks: [
      { slug: 'bmi-calculator', label: 'Adult BMI calculator', note: '70.5 kg at 175 cm is BMI 23, Healthy range. That page needs a weight. This one starts from height and does not use the WHO cutoffs to choose Devine.' },
      { slug: 'calorie-calculator', label: 'Daily calorie calculator', note: 'Mifflin–St Jeor for a weight, height, age, and activity multiplier. The sample man at 75 kg is 2,633 calories/day. A Devine weight is not that estimate.' },
      { slug: 'percentage-calculator', label: 'Percentage calculator', note: 'If you already have two weights, this page will say what percent one is of the other. It does not run Devine, Robinson, or Miller.' }
    ]
  },
  'arizona-paycheck-calculator': {
    title: 'Arizona Paycheck Calculator 2026 (Flat 2.5%) | ClearCalc',
    h1: 'Arizona Paycheck Calculator for 2026',
    description: 'Estimate a 2026 Arizona paycheck after federal tax, the flat 2.5% state tax, and a $15,750 standard deduction. At $65,000 single, Arizona tax is $1,231.25 and the two-week take-home is $2,045.24.',
    intro: [
      'This Arizona paycheck calculator estimates federal income tax, Social Security, Medicare, and Arizona individual income tax on a 2026 wage. Arizona’s rate is a flat 2.5% of Arizona taxable income. The rate has been 2.5% for taxable years beginning after 31 December 2022, under the statute that replaced the old graduated brackets, and it is still 2.5% for 2026. There is no higher bracket at a higher wage. The standard deduction used here is $15,750 for a single filer and $31,500 for a married couple filing jointly. Those are the dollar amounts in A.R.S. § 43-1041, and they are the amounts the Department of Revenue printed for 2025, which the 2026 estimated-tax instructions still tell filers to use while a later inflation print is unpublished.',
      'The sample is $65,000, single, paid every two weeks, with no 401(k). Arizona taxable income is $49,250 after the $15,750 deduction. Arizona tax is $1,231.25, which is 2.5% of $49,250. Federal tax is $5,620.00, Social Security is $4,030.00, and Medicare is $942.50. Annual take-home is $53,176.25, and the headline is $2,045.24 every two weeks. New Jersey on the same wage, with one $1,000 exemption, charges $2,043.50 of state tax and pays $52,364.00 for the year, $2,014.00 every two weeks. The $812.25 annual gap is the state tax: $2,043.50 minus $1,231.25. Federal tax and FICA match. Virginia on that wage charges $2,923.40 and pays $51,484.10. Arizona’s flat rate is lower than both of those results on this particular salary.',
      'A traditional 401(k) reduces Arizona taxable income on this page because Arizona starts from federal adjusted gross income, and a traditional deferral is already out of that income. The same $65,000 with a $6,500 deferral has Arizona tax of $1,068.75, which is $162.50 less. That $162.50 is 2.5% of $6,500. Federal tax falls from $5,620.00 to $4,840.00. The two-week headline is $1,831.49. New Jersey, on that same deferral, leaves state tax at $2,043.50. Copying a New Jersey result into an Arizona budget misses a deduction Arizona allows and New Jersey does not. The charitable add-on to the standard deduction, itemized deductions, and the dependent tax credit are not in either Arizona figure.'
    ],
    steps: [
      'Enter annual gross wages in US dollars. The sample, 65000, means $65,000 for the year. Other income is not added, so the 2.5% tax sees only this wage after the 401(k) and the standard deduction.',
      'Choose single or married filing jointly, and the pay frequency. The sample is single and every two weeks. Joint uses the $31,500 deduction on this one wage. A second salary should not claim that deduction again.',
      'Enter a traditional 401(k) deferral if you want it removed from both federal and Arizona taxable income. The 2026 elective deferral cap is $24,500. A larger entry is cut back to that cap or to wages, whichever is smaller. A Roth contribution does not belong in the box.',
      'Press Calculate. The headline is one pay period of annual take-home, rounded to the cent. Arizona tax, the deduction actually applied, and Arizona taxable income are listed underneath.'
    ],
    howHeading: 'How a 2026 Arizona paycheck is estimated',
    howItWorks: [
      'Federal taxable income is the wage minus the 401(k), then minus the 2026 federal standard deduction of $16,100 single or $32,200 joint, from IRS Revenue Procedure 2025-32. On the $65,000 sample that is $48,900. Federal tax is $5,620.00. Social Security is 6.2% of wages up to the $184,500 wage base, here $4,030.00. Medicare is 1.45% of all wages, here $942.50. Additional Medicare Tax of 0.9% starts at $200,000 and is $0.00 on this wage. Those federal and FICA lines match New Jersey and Virginia at the same wage and the same zero deferral. The state line is the only piece that should differ.',
      'Arizona taxable income is the wage minus the 401(k), then minus the Arizona standard deduction, and not below zero. The deduction actually applied cannot exceed the income it is subtracted from. On $65,000 the full $15,750 comes off, leaving $49,250. Tax is 2.5% of $49,250, which is $1,231.25 with no further bracket. On a $15,000 wage the applied deduction is $15,000.00, not $15,750.00, because there is only $15,000 to subtract. Arizona taxable income is $0.00 and Arizona tax is $0.00. Federal tax is also $0.00. Social Security is $930.00 and Medicare is $217.50, so the two-week headline is $532.79 and annual take-home is $13,852.50. The filing-status line still names the $15,750 statutory amount. The “applied” line is the portion that fit.',
      'A joint return on one $65,000 wage uses the $31,500 deduction. Arizona taxable income is $33,500 and the tax is $837.50. Federal tax is $3,440.00 because the joint federal deduction is $32,200. Annual take-home is $55,750.00, and the two-week headline is $2,144.23. The rate is still 2.5%. Filing status changed the deduction, not the rate. At $90,000 single, Arizona taxable income is $74,250 and the tax is $1,856.25. Federal tax is $10,970.00, Social Security is $5,580.00, Medicare is $1,305.00, and the two-week headline is $2,703.41. At $210,000 single, paid monthly, Arizona tax is $4,856.25 on $194,250 of taxable income, Social Security has reached the $11,439.00 wage-base cap, Additional Medicare Tax is $90.00, and the monthly headline is $12,619.65. The state rate did not step up.',
      'The $6,500 deferral is the contrast with New Jersey. Arizona taxable income falls from $49,250 to $42,750, and 2.5% of the $6,500 difference is the $162.50 of state tax that disappears. New Jersey’s tax stays $2,043.50 because that state does not subtract a traditional 401(k) from wages. A deferral typed as $30,000 on a $65,000 Arizona wage is reduced to the $24,500 elective limit before either tax is computed. Arizona tax in that capped case is $618.75, federal tax is $2,680.00, and the two-week headline is $1,239.57. The detail line says the entry was reduced. A Roth amount left in the box would understate both federal and Arizona tax.'
    ],
    formula: 'Federal taxable income = wages − 401(k) − 2026 federal standard deduction\nFederal tax uses the Rev. Proc. 2025-32 brackets\nSocial Security = 6.2% of wages up to $184,500\nMedicare = 1.45% of wages, plus 0.9% above $200,000\nArizona taxable income = wages − 401(k) − Arizona standard deduction, not below zero\nThe standard deduction used is $15,750 single or $31,500 joint, and it cannot exceed the income left after the 401(k)\nArizona tax = 2.5% of Arizona taxable income, rounded to the cent\nTake-home = wages − federal tax − Social Security − Medicare − Additional Medicare − Arizona tax − 401(k)\nThe charitable addition, itemized deductions, and the dependent tax credit are not applied',
    formulaNotes: [
      'The $15,750 and $31,500 figures are the amounts in the current text of A.R.S. § 43-1041 and the amounts used for 2026 estimated payments while the Department’s next inflation print is not the source of this page. If a later 2026 instruction raises those dollars, this estimate will be high by 2.5% of the difference. The 2026 charitable increase, capped at $1,000 single or $2,000 joint, is a separate addition and it is not included. Itemized deductions are not compared with the standard deduction.',
      'Arizona’s dependent tax credit is a credit against tax, not a deduction from wages, and there is no field for it. Withholding for a local tax is not subtracted because this page treats the wage as Arizona state tax only. Transaction privilege tax, the state’s version of a sales tax, is a tax on a purchase. The statewide rate on the sales tax page is 5.6%, or $5.60 on $100, and it is not withheld here.'
    ],
    examplesHeading: 'Worked Arizona paycheck examples',
    examples: [
      {
        title: '$65,000 single, no 401(k), beside New Jersey',
        paragraphs: [
          'Salary 65000, single, 26 periods, deferral 0. The calculator shows $2,045.24 every two weeks. Arizona tax is $1,231.25 on $49,250.00 of taxable income. The standard deduction applied is $15,750.00. Federal tax is $5,620.00, Social Security is $4,030.00, Medicare is $942.50, and annual take-home is $53,176.25.',
          'New Jersey on that wage shows $2,043.50 of state tax and $2,014.00 every two weeks. Annual take-home there is $52,364.00. The $812.25 difference is the state tax. Virginia’s state tax on the same wage is $2,923.40 and the two-week headline is $1,980.16. The federal and FICA lines are the common piece. The state lines are not interchangeable.'
        ]
      },
      {
        title: 'The same wage with a $6,500 traditional 401(k)',
        paragraphs: [
          'Change only the deferral to 6500. Arizona tax falls to $1,068.75 and Arizona taxable income to $42,750.00. Federal tax falls to $4,840.00. The $6,500 deferral leaves the cheque. Annual take-home is $47,618.75, and the headline is $1,831.49 every two weeks. The state-tax saving is $162.50, which is 2.5% of $6,500. The federal saving is $780.00.',
          'New Jersey’s state tax would have stayed $2,043.50 on that deferral. The Arizona form is doing the subtraction New Jersey refuses. A Roth contribution should not be entered. It would reduce the headline without reducing the tax that will actually be assessed. A deferral above $24,500 is reduced to $24,500 before the 2.5% is applied, and the result says so.'
        ]
      },
      {
        title: 'A joint return, a $90,000 wage, and a wage under the deduction',
        paragraphs: [
          'Married filing jointly, the same $65,000, and no deferral, shows Arizona tax of $837.50 on $33,500.00, federal tax of $3,440.00, and $2,144.23 every two weeks. Annual take-home is $55,750.00. The deduction applied is $31,500.00. This is one wage on a joint return. A spouse’s wages need their own care with that deduction.',
          'At $90,000 single, Arizona tax is $1,856.25 and the two-week headline is $2,703.41. At $15,000 single, Arizona tax is $0.00 because the deduction uses the whole wage, federal tax is $0.00, and FICA is $1,147.50. The two-week headline is $532.79. The applied deduction prints as $15,000.00 even though the statutory single amount named in the status line is $15,750.'
        ]
      }
    ],
    table: {
      heading: '2026 Arizona paycheck examples',
      caption: 'Each row is what this calculator displays. Federal tax uses the 2026 federal standard deduction and brackets. Arizona tax is 2.5% after the $15,750 or $31,500 deduction, and a traditional 401(k) is subtracted. The dependent tax credit and the charitable addition are not included.',
      headers: ['Wage', 'Arizona tax', 'Federal tax', 'Annual take-home', 'Every two weeks'],
      rows: [
        ['$65,000 single', '$1,231.25', '$5,620.00', '$53,176.25', '$2,045.24'],
        ['$65,000 single, $6,500 401(k)', '$1,068.75', '$4,840.00', '$47,618.75', '$1,831.49'],
        ['$65,000 joint', '$837.50', '$3,440.00', '$55,750.00', '$2,144.23'],
        ['$90,000 single', '$1,856.25', '$10,970.00', '$70,288.75', '$2,703.41'],
        ['$15,000 single', '$0.00', '$0.00', '$13,852.50', '$532.79']
      ]
    },
    limitsHeading: 'What this Arizona estimate leaves out',
    limits: [
      'The dependent tax credit, the credit for taxes paid to another state, and the school-tuition and qualifying-charity credits are not computed. Neither is the 2026 charitable increase to the standard deduction, which is capped at $1,000 for a single filer and $2,000 for a joint return and depends on contributions this form does not ask for. Itemizing Arizona deductions can beat the standard deduction. This page always uses the standard deduction, limited to income.',
      'A later Department inflation adjustment that lifts $15,750 or $31,500 would lower Arizona tax by 2.5% of the extra deduction. Until that figure is the one the return instructions print, the amounts above are the planning figures. Withholding tables can also differ from an annual division of the tax, especially early in the year. The headline is the year divided by the number of pays.',
      'Health premiums, wage garnishments, and a Roth contribution are not fields. The 401(k) box is a traditional deferral capped at $24,500 for 2026. Catch-up contributions for older workers are not added on top of that cap. A second job can push Social Security over the wage base across employers while each employer still withholds the full 6.2%. This page sees one wage.',
      'Arizona transaction privilege tax is not income tax. Selecting Arizona on the sales tax page charges 5.6% on a purchase, $5.60 on $100, and a $105.60 total. That $5.60 is not subtracted from the $2,045.24 paycheck. New Jersey’s $2,043.50 and Virginia’s $2,923.40 are other states’ income taxes on the same $65,000 wage, useful as a comparison and useless as Arizona withholding.'
    ],
    disclaimer: 'This Arizona paycheck estimate is general information for 2026, not a withholding calculation from an employer or an assessment from the Arizona Department of Revenue.',
    faqs: [
      {
        q: 'How much Arizona tax comes out of a $65,000 single wage in 2026?',
        a: 'With no 401(k), Arizona taxable income is $49,250 and the tax is $1,231.25, which is 2.5% of that income after the $15,750 standard deduction. Federal tax is $5,620.00, Social Security is $4,030.00, and Medicare is $942.50. Annual take-home is $53,176.25, or $2,045.24 every two weeks. New Jersey on that wage is $2,043.50 of state tax and $2,014.00 every two weeks.'
      },
      {
        q: 'Does a traditional 401(k) reduce Arizona’s 2.5% tax?',
        a: 'Yes. A $6,500 deferral on $65,000 single cuts Arizona tax from $1,231.25 to $1,068.75. The $162.50 difference is 2.5% of $6,500. Federal tax falls from $5,620.00 to $4,840.00, and the two-week headline is $1,831.49. New Jersey would have left state tax at $2,043.50 on that same deferral. A Roth amount should not be typed in the box.'
      },
      {
        q: 'Why is Arizona income tax zero on a $15,000 wage?',
        a: 'The standard deduction cannot exceed the wage. On $15,000 the applied deduction is $15,000.00, Arizona taxable income is $0.00, and the tax is $0.00. Federal tax is $0.00. Social Security is $930.00 and Medicare is $217.50, so the two-week take-home is $532.79. The status line still names the $15,750 statutory deduction. There was not $15,750 of wages to subtract.'
      },
      {
        q: 'What standard deduction does this Arizona paycheck use for 2026?',
        a: '$15,750 single and $31,500 married filing jointly. Those are the amounts in A.R.S. § 43-1041 and the amounts the 2026 estimated-tax instructions still point at. A later inflation revision is not applied. The charitable addition, up to $1,000 single or $2,000 joint, is not added. On a joint $65,000 wage the $31,500 deduction leaves $33,500 taxed at 2.5%, which is $837.50.'
      },
      {
        q: 'How does Arizona take-home pay compare with New Jersey at $65,000?',
        a: 'Federal tax, Social Security, and Medicare match. Arizona tax is $1,231.25 and New Jersey tax is $2,043.50, so Arizona’s annual take-home is $53,176.25 against New Jersey’s $52,364.00. The two-week headlines are $2,045.24 and $2,014.00. Virginia’s state tax on the same wage is $2,923.40. A 401(k) widens the Arizona advantage because it reduces Arizona tax and does not reduce New Jersey tax.'
      },
      {
        q: 'Is Arizona’s 5.6% transaction privilege tax withheld from this paycheck?',
        a: 'No. The 5.6% figure is the statewide transaction privilege tax rate on the sales tax page. On $100 it is $5.60 of tax and a $105.60 total. The $2,045.24 paycheck is federal income tax, Social Security, Medicare, and the 2.5% income tax. Local privilege tax on a purchase is not in either number unless you type a combined rate on the sales tax page.'
      }
    ],
    relatedLinks: [
      { slug: 'new-jersey-paycheck-calculator', label: 'New Jersey paycheck calculator for 2026', note: 'At $65,000 single, New Jersey tax is $2,043.50 and the two-week headline is $2,014.00. A 401(k) does not reduce that state tax. It does reduce Arizona’s.' },
      { slug: 'virginia-paycheck-calculator', label: 'Virginia paycheck calculator for 2026', note: 'The same wage is $2,923.40 of Virginia tax and $1,980.16 every two weeks. Virginia’s brackets top out at 5.75%. Arizona’s rate stays 2.5%.' },
      { slug: 'texas-paycheck-calculator', label: 'Texas paycheck calculator for 2026', note: 'The same federal and FICA structure with a state income tax of $0. Texas still has a statewide sales tax. Arizona’s wage tax is the 2.5% line.' },
      { slug: 'sales-tax-calculator', label: 'Sales tax calculator', note: 'Arizona’s statewide transaction privilege tax is 5.6%, or $5.60 on $100. That is not withheld from the $2,045.24 paycheck.' },
      { slug: '401k-contribution-calculator', label: '2026 401(k) contribution calculator', note: 'Check a deferral against the $24,500 limit. On this page the deferral reduces both federal income tax and the 2.5% Arizona tax.' }
    ]
  },
  'tasmania-stamp-duty-calculator': {
    title: 'Tasmania Stamp Duty Calculator (2026 Transfer Duty) | ClearCalc',
    h1: 'Tasmania Stamp Duty Calculator',
    description: 'Estimate Tasmanian transfer duty on the general scale, including $20,372.50 on a $550,000 home. The established-home exemption applies only to a settlement on or before 30 June 2026. Foreign purchasers add 8%.',
    intro: [
      'This Tasmania stamp duty calculator applies the general transfer-duty scale in the Duties Act 2001, the scale the State Revenue Office still publishes in 2026. The bands have been in force since 21 October 2013. Duty is $50 on a value up to $3,000, then $1.75 per $100 or part of the excess to $25,000, $2.25 to $75,000, $3.50 to $200,000, $4.00 to $375,000, $4.25 to $725,000, and $4.50 per $100 or part above $725,000. “Or part” means any leftover, even one cent, is charged as a full $100. The sample is a $550,000 home on the general scale, with no foreign surcharge. Transfer duty is $20,372.50. That is $12,935 on the first $375,000 plus $4.25 for each of the 1,750 hundreds in the remaining $175,000, which is $7,437.50. It is not 4.25% of the whole price. Four and a quarter percent of $550,000 would be $23,375, and that figure is wrong.',
      'First home buyers of an established home had a full duty exemption, under section 57G, when the dutiable value was $750,000 or less and the transfer settled on or before 30 June 2026. The same $550,000 with that buyer selected is $0.00. A $750,000 purchase on that setting is also $0.00. The State Revenue Office says the exemption is not available for a settlement after 30 June 2026. Choosing the after-30-June first-home option on $550,000 returns the general duty, $20,372.50. A purchase that settles in the second half of 2026 does not keep the exemption by calling itself a first home. Eligibility tests other than the date and the cap, including citizenship, age, prior ownership, and living in the home, are not checked.',
      'Foreign investor duty surcharge on residential property is 8% of the dutiable value for a transaction entered into from 1 April 2020, added to transfer duty. On $550,000 the surcharge is $44,000.00 and the headline is $64,372.50. The surcharge does not replace the $20,372.50. A foreign person is not given the established-home exemption on this page, because that exemption requires an Australian citizen or permanent resident. Selecting both produces general duty plus 8%. South Australia’s general duty on a $600,000 home is $26,830.00. Tasmania’s general duty on $600,000 is $22,497.50. The scales are not the same, and South Australia’s new-home first-buyer exemption has no price cap of the kind this $750,000 rule uses.'
    ],
    steps: [
      'Enter the dutiable value in Australian dollars. The sample, 550000, is $550,000. Chattels that the State Revenue Office includes in dutiable value have to be in the number you type. This form does not add them.',
      'Choose the buyer. General scale is the ordinary residential transfer. The on-or-before-30-June-2026 choice zeroes duty only when the value is above zero and at or under $750,000 and no foreign surcharge is selected. The after-30-June choice always uses the general scale and says the exemption has ended.',
      'Choose whether the 8% foreign investor duty surcharge applies. It is calculated on the dutiable value and added to transfer duty. The 1.5% primary-production rate is not a choice on this residential page.',
      'Press Calculate. The headline is transfer duty plus any surcharge. A value of $725,000 on the general scale is $27,810.00, which is the published base of the top band and a useful check that the $4.25 band closed cleanly.'
    ],
    howHeading: 'How Tasmanian transfer duty is calculated',
    howItWorks: [
      'Each band charges a published base plus a rate per $100, or part, of the excess over the band’s floor. The bases are the duty at the top of the previous band, so the scale does not jump when a price lands on a threshold. $200,000 is $5,935.00. $375,000 is $12,935.00. $725,000 is $27,810.00. $550,000 sits in the $4.25 band: excess over $375,000 is $175,000, which is 1,750 hundreds, and 1,750 × $4.25 is $7,437.50. Added to $12,935.00, the duty is $20,372.50. $600,000 is 2,250 hundreds over $375,000, which is $9,562.50, and the duty is $22,497.50. $1,000,000 is in the top band: $27,810.00 plus $4.50 on each of the 2,750 hundreds over $725,000, which is $40,185.00.',
      'The “or part” rule is why a price that is not a round hundred can cost a full extra step. $3,000 is $50.00. $3,000.01 is $51.75, because one cent over $3,000 is one part of $100 at $1.75. $750,000 on the general scale is $28,935.00. $750,000.01 is $28,939.50. The extra cent is one more part in the $4.50 band, so duty rises by $4.50. The first-home cap does not follow that step. A value of $750,000.01 is over $750,000, so the on-or-before-30-June exemption is refused and the headline is the general $28,939.50, not $0.00 and not the $28,935.00 that $750,000 itself would pay without the exemption.',
      'The exemption, when it applies, replaces transfer duty with zero. It does not create a partial concession inside the band. $550,000 and $750,000 are both $0.00 for an eligible established-home buyer settling on or before 30 June 2026 who is not a foreign person. The general duty those prices would have paid is $20,372.50 and $28,935.00. After 30 June 2026 the same buyer pays those general amounts. The page says which rule it used. A foreign person on $550,000 pays $20,372.50 plus $44,000.00 even if the first-home option for the first half of the year was selected. The note says the exemption was not applied.',
      'South Australia’s $26,830.00 on $600,000 is $4,332.50 more than Tasmania’s $22,497.50 on the same general-scale price. An eligible South Australian first buyer of a new home pays $0.00 at that price, with no cap. Tasmania’s $0.00 result is narrower: established home, eligible buyer, value at or under $750,000, settlement on or before 30 June 2026. Western Australia’s $8,075.00 first-home figure at $650,000 is a concession that still operates for an agreement on or after 7 May 2026. It is not a reading of this Tasmanian card. A foreign surcharge of 8% is also not South Australia’s 7% or Western Australia’s 7%.'
    ],
    formula: 'Up to $3,000: $50, and a value of $0 is $0\nThen a published base plus a rate per $100 or part of the excess:\n$1.75 to $25,000, $2.25 to $75,000, $3.50 to $200,000,\n$4.00 to $375,000, $4.25 to $725,000, $4.50 above $725,000\nA part of $100 is any remainder, rounded up\nEstablished-home exemption: duty $0 when selected, the value is from $0.01 through $750,000, settlement is on or before 30 June 2026, and the foreign surcharge is not selected\nAfter 30 June 2026 the exemption is not applied\nForeign investor duty surcharge = 8% of dutiable value, added to transfer duty\nThe First Home Owner Grant, the pensioner concession, and the off-the-plan concession are not subtracted',
    formulaNotes: [
      'The $27,810.00 result at $725,000 is the published starting point of the top band, so a hand check that gets a different figure has used the wrong base or has charged $4.50 on the whole price. $4.50 on $725,000 would be $32,625, which this scale does not charge. Marginal rates are not effective rates.',
      'Primary-production land uses a 1.5% foreign surcharge for a transaction from 1 April 2020, not the 8% residential rate. This form is the residential rate only. The off-the-plan apartment concession is not available for an agreement executed after 30 June 2026 and is not a field. The pensioner downsizing concession is not a field. The First Home Owner Grant is a payment for an eligible new home, not a reduction of the duty figure on this page.'
    ],
    examplesHeading: 'Worked Tasmania duty examples',
    examples: [
      {
        title: '$550,000 on the general scale',
        paragraphs: [
          'Price 550000, general buyer, no foreign surcharge. The calculator shows $20,372.50. Transfer duty is $20,372.50 and the surcharge is $0.00. The value is in the $4.25 band: $12,935.00 plus $4.25 times 1,750 hundreds. A flat 4.25% of $550,000 is $23,375.00, which overstates this result by $3,002.50.',
          'The same price with the after-30-June first-home option is also $20,372.50. The detail line says the 100% exemption is not available for a settlement after 30 June 2026. Calling the buyer a first home buyer does not change the scale once that date has passed.'
        ]
      },
      {
        title: 'The exemption on or before 30 June 2026, and the $750,000 cap',
        paragraphs: [
          'Price 550000, established-home first buyer, settlement on or before 30 June 2026, no foreign surcharge. The headline is $0.00. Price 750000 on the same settings is $0.00. The general duty given up at those two prices is $20,372.50 and $28,935.00. The form does not check citizenship, age, prior ownership, or the requirement to live in the home.',
          'Price 750000.01 on those same first-home settings is $28,939.50, not $0.00. The cap is $750,000, and one cent over it returns the purchase to the general scale. That general duty is $4.50 higher than the $28,935.00 due on $750,000 exactly, because the extra cent is one more part of $100 in the top band. The exemption and the part-of-$100 rule are different mechanisms. Only the cap decides whether the exemption is refused.'
        ]
      },
      {
        title: 'An 8% foreign surcharge, and a $600,000 comparison',
        paragraphs: [
          'Price 550000, general buyer, foreign surcharge on. The headline is $64,372.50. Transfer duty stays $20,372.50 and the surcharge is $44,000.00, which is 8% of $550,000. Selecting the first-half exemption and the surcharge together does not zero the duty. The headline remains $64,372.50, and the note says the exemption was not applied.',
          'Price 600000 on the general scale, with no surcharge, is $22,497.50. South Australia’s general duty at that price is $26,830.00. A foreign person on the Tasmanian $600,000 pays $22,497.50 plus $48,000.00, and the headline is $70,497.50. The First Home Owner Grant is not subtracted from any of these figures.'
        ]
      }
    ],
    table: {
      heading: 'Tasmanian duty at the prices used on this page',
      caption: 'Each row is what this calculator displays. The general scale is the card in force since 21 October 2013. The $0.00 rows require an eligible established-home buyer, a settlement on or before 30 June 2026, and no foreign surcharge. The First Home Owner Grant is not deducted.',
      headers: ['Dutiable value', 'Buyer', 'Transfer duty', 'Surcharge', 'Headline'],
      rows: [
        ['$550,000', 'General scale', '$20,372.50', '$0.00', '$20,372.50'],
        ['$550,000', 'First home, on or before 30 June 2026', '$0.00', '$0.00', '$0.00'],
        ['$550,000', 'First home, after 30 June 2026', '$20,372.50', '$0.00', '$20,372.50'],
        ['$550,000', 'General scale, foreign person', '$20,372.50', '$44,000.00', '$64,372.50'],
        ['$600,000', 'General scale', '$22,497.50', '$0.00', '$22,497.50'],
        ['$750,000', 'First home, on or before 30 June 2026', '$0.00', '$0.00', '$0.00'],
        ['$725,000', 'General scale', '$27,810.00', '$0.00', '$27,810.00']
      ]
    },
    limitsHeading: 'What this Tasmania duty estimate leaves out',
    limits: [
      'The State Revenue Office assesses duty from the documents, and a dutiable value can include chattels or can be a substituted value. The number you type is taken as that value. A contract price that is not the dutiable value will not match the assessment. Duty is payable by the transferee, generally within three months of the transaction. This page does not compute interest on a late payment.',
      'The established-home exemption ended for settlements after 30 June 2026. A contract signed earlier and settled later follows the settlement rule the State Revenue Office states, which is why the form asks about the settlement rather than the contract date. The tests this form does not apply can still refuse the exemption: the buyer must be a natural person, at least 18, an Australian citizen or permanent resident where the rules require it, without a prior home, and must occupy the property. A company is not an eligible buyer.',
      'The First Home Owner Grant for a new home is not a credit against this duty. The off-the-plan concession and the pensioner downsizing concession are omitted. A 50% pensioner concession would not be half of $20,372.50 unless the buyer actually qualifies, and this page will not halve the result. Primary-production foreign surcharge at 1.5% is a different land type. Selecting the 8% option on farmland would overstate that surcharge.',
      'South Australia, Western Australia, Victoria, Queensland, and New South Wales use their own scales and their own first-home rules. Tasmania’s $22,497.50 on a $600,000 general transfer is not South Australia’s $26,830.00, and a $0.00 Tasmanian result after 30 June 2026 is not available on this page. Amounts are Australian dollars.'
    ],
    disclaimer: 'This Tasmania duty figure applies the published scale to a dutiable value you enter. It is not an assessment by the State Revenue Office of Tasmania.',
    faqs: [
      {
        q: 'How much is Tasmanian transfer duty on a $550,000 home?',
        a: '$20,372.50 on the general scale. That is $12,935.00 plus $4.25 for each $100 of the $175,000 above $375,000. It is not 4.25% of $550,000, which would be $23,375.00. An eligible first home buyer of an established home who settles on or before 30 June 2026 pays $0.00 at this price. A settlement after that date pays $20,372.50.'
      },
      {
        q: 'Can a first home buyer of an established Tasmanian home still pay no duty after 30 June 2026?',
        a: 'No. The State Revenue Office says the 100% exemption is not available for a settlement after 30 June 2026. This page returns the general scale for that choice. On $550,000 that is $20,372.50. The $0.00 result is only the on-or-before-30-June option, at a dutiable value from one cent through $750,000, with no foreign surcharge selected.'
      },
      {
        q: 'How is the 8% Tasmanian foreign investor duty surcharge added?',
        a: 'It is 8% of the residential dutiable value for a transaction entered into from 1 April 2020, and it is added to transfer duty. On $550,000 the surcharge is $44,000.00 and the headline is $64,372.50. Transfer duty stays $20,372.50. The established-home exemption is not combined with the surcharge. Primary production uses 1.5%, which this residential page does not charge.'
      },
      {
        q: 'Why does one cent over a round Tasmanian threshold add more than one cent of duty?',
        a: 'The scale charges per $100, or part of $100. $3,000 is $50.00 and $3,000.01 is $51.75. $750,000 on the general scale is $28,935.00 and $750,000.01 is $28,939.50, a rise of $4.50. Separately, $750,000.01 is over the first-home cap, so the exemption is refused entirely. The part-of-$100 step and the cap are two different reasons a single cent can matter.'
      },
      {
        q: 'Is Tasmanian duty on a $600,000 home the same as South Australia’s $26,830?',
        a: 'No. Tasmania’s general duty at $600,000 is $22,497.50, which is $4,332.50 less than South Australia’s $26,830.00. A foreign person in Tasmania pays $70,497.50 at that price, because the 8% surcharge is $48,000.00. South Australia’s new-home first-buyer exemption is a different rule from Tasmania’s established-home exemption, which ended for settlements after 30 June 2026.'
      },
      {
        q: 'Does this Tasmania calculator subtract the First Home Owner Grant?',
        a: 'No. The grant is a payment for an eligible new home, not a line on this duty result. The pensioner concession and the off-the-plan concession are also omitted. A $0.00 headline means the established-home exemption was applied, not that a grant was netted off. General duty at $725,000 is $27,810.00, which is the top band’s published base.'
      }
    ],
    relatedLinks: [
      { slug: 'south-australia-stamp-duty-calculator', label: 'South Australia stamp duty calculator', note: 'General duty at $600,000 is $26,830.00 there, against $22,497.50 on this Tasmanian scale. An eligible South Australian first buyer of a new home pays $0.00 with no price cap.' },
      { slug: 'western-australia-stamp-duty-calculator', label: 'Western Australia stamp duty calculator', note: 'A $650,000 first home on or after 7 May 2026 is $8,075.00 there. That concession is not the Tasmanian scale, and Tasmania’s established-home exemption does not survive a settlement after 30 June 2026.' },
      { slug: 'victoria-stamp-duty-calculator', label: 'Victoria stamp duty calculator', note: 'Victorian land transfer duty, including a first-home concession and an 8% foreign purchaser additional duty. The 8% is a different statute from Tasmania’s residential surcharge.' },
      { slug: 'australia-take-home-pay-calculator', label: 'Australia take-home pay calculator for 2026–27', note: 'Resident income tax and the Medicare levy on a salary. It is not the duty on a house in Hobart.' }
    ]
  },
  'northwest-territories-take-home-pay-calculator': {
    title: 'Northwest Territories Take-Home Pay Calculator 2026 | ClearCalc',
    h1: 'Northwest Territories Take-Home Pay Calculator for 2026',
    description: 'Estimate 2026 Northwest Territories take-home pay after federal tax, territorial tax from 5.9% to 14.05%, the $18,198 basic personal amount, CPP, and EI. At $70,000 the monthly figure is $4,537.04.',
    intro: [
      'This Northwest Territories take-home pay calculator estimates what an employee keeps from a 2026 salary after federal income tax, territorial income tax, the Canada Pension Plan, and Employment Insurance. The territorial brackets are the Canada.ca 2026 table and the January 2026 T4032-NT payroll tables: 5.9% to $53,003, 8.6% to $106,009, 12.2% to $172,346, and 14.05% above that. The indexing factor for 1 January 2026 is 2.0%. The basic personal amount is $18,198, credited at 5.9% together with the base CPP contribution and EI. There is no territorial health premium.',
      'The sample is $70,000. Territorial tax is $3,197.57. Federal tax is $7,278.19. CPP including the second additional contribution is $3,956.75. EI is $1,123.07. Annual take-home is $54,444.42, and the monthly headline is $4,537.04. Every two weeks is $2,094.02. Newfoundland and Labrador on that salary uses the same federal tax, the same CPP, and the same EI, then charges $5,938.98 of provincial tax and pays $51,703.01 for the year, a monthly headline of $4,308.58. The $2,741.41 gap is the territorial tax against the provincial tax. The Northwest Territories keeps the larger amount on this salary. The federal basic personal amount at $70,000 is $16,452 on both pages. If those federal figures ever diverged, one of the pages would be on the wrong federal year.',
      'The territorial credit on the sample is $1,334.16, which is 5.9% of $18,198 plus the base CPP contribution plus EI. The cost of living tax credit is a separate territorial credit and it is not subtracted. A household that can claim it would keep more than $4,537.04 a month. This page is the brackets, the $18,198 amount, CPP, and EI. It is not the July stub, and it is not a Quebec payroll. Quebec at $70,000 uses QPP, QPIP, a 1.30% EI rate, and the 16.5% federal abatement, and its monthly headline is $4,253.73.'
    ],
    steps: [
      'Enter annual gross salary in Canadian dollars. The sample, 70000, means $70,000 for the year. The result is an annual tax divided by 12, not one pay period from a payroll table.',
      'Press Calculate. The headline is monthly take-home. Federal tax, Northwest Territories tax, CPP including CPP2, and EI are listed underneath, with an every-two-weeks line.',
      'Read the credit line. It is 5.9% of the $18,198 basic amount plus base CPP plus EI. On the sample that credit is $1,334.16. The enhanced CPP amounts are deducted in arriving at taxable income instead of being credited a second time.',
      'Do not add the cost of living tax credit by hand unless you know the amount that applies to the return. It is not in the $3,197.57. A spouse amount, an age amount, and tuition are not fields.'
    ],
    howHeading: 'How 2026 Northwest Territories take-home pay is estimated',
    howItWorks: [
      'Federal tax, CPP, and EI are the same engine as the Newfoundland and Labrador page. The federal brackets for 2026 are 14% to $58,523, 20.5% to $117,045, 26% to $181,440, 29% to $258,482, and 33% above that. The basic personal amount is $16,452 at a $70,000 salary, because taxable income is under the $181,440 point where that amount starts to fall toward $14,829. The Canada employment amount, base CPP, and EI are credited at 14%. On $70,000 the federal tax is $7,278.19. CPP is $3,956.75 and EI is $1,123.07. Those three numbers are the non-Quebec employee figures already used on the Atlantic pages. The Northwest Territories does not replace them with a territorial pension plan.',
      'Territorial tax starts from the same taxable income, after the enhanced CPP deduction. On the sample the brackets produce tax, the $1,334.16 credit comes off, and the result is $3,197.57. The first $53,003 of taxable income is in the 5.9% band. A $70,000 salary, after the enhanced CPP deduction, reaches into the 8.6% band and stops well short of $106,009. The 12.2% and 14.05% rates do not touch this sample. At a salary of zero the credit is 5.9% of $18,198 and the tax is $0.00, because a non-refundable credit cannot create a payment and the brackets have nothing to tax.',
      'At $30,000, territorial tax is $574.44, federal tax is $1,397.37, CPP is $1,576.75, EI is $489.00, and the monthly headline is $2,163.54. Annual take-home is $25,962.44. The credit is $1,179.93. At $45,000, territorial tax is $1,392.36 and the monthly headline is $3,088.89. Both of those salaries are inside the 5.9% band after the enhanced CPP deduction, so the 8.6% rate is not doing the work yet. The cost of living tax credit, which matters more at lower income, is still not applied. The $30,000 row can sit above the tax a return would show after that credit.',
      'At $150,000, territorial tax is $11,567.51, federal tax is $25,302.14, CPP including CPP2 is $4,646.45, and EI stays $1,123.07 because the EI maximum was already reached. The monthly headline is $8,946.74 and annual take-home is $107,360.83. The federal basic personal amount is still $16,452.00. At $200,000 the federal amount falls to $16,084.75, territorial tax is $18,158.26, federal tax is $38,876.54, and the monthly headline is $11,432.97. The territorial basic amount stays $18,198. It does not phase down with the federal amount. Newfoundland and Labrador at $150,000 charges $18,225.93 of provincial tax and pays $8,391.87 a month. The gap at that salary is larger than the $2,741.41 gap at $70,000, and it is still the provincial-versus-territorial tax, not a different CPP line.'
    ],
    formula: 'Taxable income = salary − enhanced CPP deductions used on the federal return\nFederal tax = 2026 federal brackets − 14% credits for the basic personal amount, Canada employment amount, base CPP, and EI\nNorthwest Territories tax = 2026 territorial brackets − 5.9% of ($18,198 + base CPP + EI), not below zero\nBrackets: 5.9% to $53,003, 8.6% to $106,009, 12.2% to $172,346, 14.05% above that\nCPP and EI use the 2026 employee maximums outside Quebec\nTake-home = salary − federal tax − territorial tax − CPP − EI\nThe monthly headline is take-home ÷ 12, rounded to the cent\nThe cost of living tax credit is not applied',
    formulaNotes: [
      'The $18,198 amount and the bracket thresholds are the indexed 2026 figures. The indexing factor is 2.0%. A 2025 threshold left in a spreadsheet will not match this page. The 14.05% top rate is 14.05%, not a rounded 14% or 14.1%. On a salary that reaches that band, the third decimal is part of the tax.',
      'Credits use the lowest territorial rate, 5.9%. The Canada employment amount is in the federal credit only. One salary is the whole return. Ontario’s health premium is not a Northwest Territories charge. Quebec’s abatement is not applied, because a resident of the Northwest Territories does not receive it.'
    ],
    examplesHeading: 'Worked Northwest Territories examples',
    examples: [
      {
        title: '$70,000, beside Newfoundland and Labrador',
        paragraphs: [
          'Salary 70000. The calculator shows $4,537.04 a month. Territorial tax is $3,197.57, federal tax is $7,278.19, CPP including CPP2 is $3,956.75, and EI is $1,123.07. Annual take-home is $54,444.42. Every two weeks is $2,094.02. The territorial credit is $1,334.16, and the basic personal amount applied is $18,198.00.',
          'Newfoundland and Labrador on the same salary shows the same federal tax, CPP, and EI, provincial tax of $5,938.98, and $4,308.58 a month. Annual take-home there is $51,703.01. The $2,741.41 difference is $5,938.98 minus $3,197.57. The monthly headlines differ by $228.46. Multiplying the monthly headlines by 12 is a few cents off the annual gap, because each headline was rounded on its own. Compare the annual lines when the cent matters.'
        ]
      },
      {
        title: '$30,000 and $45,000, still in the 5.9% band',
        paragraphs: [
          'At $30,000 the monthly headline is $2,163.54. Territorial tax is $574.44, federal tax is $1,397.37, CPP is $1,576.75, and EI is $489.00. Annual take-home is $25,962.44. The territorial credit is $1,179.93.',
          'At $45,000 the monthly headline is $3,088.89. Territorial tax is $1,392.36, federal tax is $3,338.19, CPP is $2,469.25, and EI is $733.50. Annual take-home is $37,066.70. The first territorial bracket runs to $53,003, so the 8.6% rate is not reached once the enhanced CPP deduction is taken off. The cost of living tax credit is still not in these rows.'
        ]
      },
      {
        title: '$150,000 and $200,000',
        paragraphs: [
          'At $150,000 the monthly headline is $8,946.74. Territorial tax is $11,567.51, federal tax is $25,302.14, CPP including CPP2 is $4,646.45, and EI is $1,123.07, the same EI dollar as at $70,000. Annual take-home is $107,360.83. The federal basic personal amount is still $16,452.00. Newfoundland and Labrador at this salary pays $8,391.87 a month, with $18,225.93 of provincial tax.',
          'At $200,000 the monthly headline is $11,432.97. Territorial tax is $18,158.26 and federal tax is $38,876.54. The federal basic personal amount applied is $16,084.75, because income is past the point where the federal amount starts to fall. The territorial amount stays $18,198.00. CPP and EI are unchanged from the $150,000 row. The 14.05% rate is part of the territorial tax at this salary. It was not part of the $70,000 sample.'
        ]
      }
    ],
    table: {
      heading: '2026 Northwest Territories take-home at five salaries',
      caption: 'Each row is what this calculator displays. Federal tax, CPP, and EI match the other non-Quebec pages at the same salary. The cost of living tax credit is not included. The territorial basic personal amount is $18,198.',
      headers: ['Salary', 'Territorial tax', 'Federal tax', 'Annual take-home', 'Monthly'],
      rows: [
        ['$30,000', '$574.44', '$1,397.37', '$25,962.44', '$2,163.54'],
        ['$45,000', '$1,392.36', '$3,338.19', '$37,066.70', '$3,088.89'],
        ['$70,000', '$3,197.57', '$7,278.19', '$54,444.42', '$4,537.04'],
        ['$150,000', '$11,567.51', '$25,302.14', '$107,360.83', '$8,946.74'],
        ['$200,000', '$18,158.26', '$38,876.54', '$137,195.68', '$11,432.97']
      ]
    },
    limitsHeading: 'What this Northwest Territories estimate leaves out',
    limits: [
      'The cost of living tax credit is not computed. The $30,000 and $45,000 rows can therefore sit above the tax a return would show after that credit. The $70,000 row is the planning figure for a salary where the credit, if it still applies at all, is a smaller share of the story than it is at $30,000. Spouse, eligible dependant, age, disability, tuition, and medical credits are not fields.',
      'A payroll table can withhold a different amount in a single cheque than one twenty-sixth or one twelfth of this annual tax. This page is the year. It uses the January 2026 brackets and the $18,198 amount for the whole year. It does not switch rates on 1 July.',
      'Quebec does not use these CPP and EI figures. At $70,000 the Quebec monthly headline is $4,253.73. Ontario adds a health premium on top of the same CPP and EI. Newfoundland and Labrador uses the same CPP and EI and a different provincial tax, $5,938.98 at $70,000. None of those territorial or provincial amounts should be pasted onto a Yellowknife wage, and this $3,197.57 should not be pasted onto a St. John’s wage.',
      'GST on a purchase in the territory is not withheld from salary. The Northwest Territories has no territorial sales tax on this page. A US paycheck, including the Arizona 2.5% wage tax, is a different currency and a different statute. The $4,537.04 headline is Canadian dollars after the four deductions named above.'
    ],
    disclaimer: 'This Northwest Territories figure is a 2026 planning estimate, not a payroll deduction calculated by the Canada Revenue Agency and not a notice of assessment.',
    faqs: [
      {
        q: 'What is Northwest Territories take-home pay on $70,000 in 2026?',
        a: '$4,537.04 a month, or $54,444.42 for the year. Territorial tax is $3,197.57, federal tax is $7,278.19, CPP including CPP2 is $3,956.75, and EI is $1,123.07. Every two weeks is $2,094.02. Newfoundland and Labrador on the same salary pays $4,308.58 a month because its provincial tax is $5,938.98.'
      },
      {
        q: 'What are the 2026 Northwest Territories income tax brackets?',
        a: '5.9% on taxable income to $53,003, 8.6% to $106,009, 12.2% to $172,346, and 14.05% above that. The thresholds are indexed by 2.0% for 2026. A $70,000 salary, after the enhanced CPP deduction, is partly in the 8.6% band. The 12.2% and 14.05% rates are not reached on that sample. They are reached on the $200,000 row, where territorial tax is $18,158.26.'
      },
      {
        q: 'Why is the Northwest Territories basic personal amount $18,198?',
        a: 'That is the non-refundable amount in the 2026 T4032-NT tables, credited at the 5.9% lowest rate. On a $70,000 salary the credit line is $1,334.16, which also includes base CPP and EI. The federal basic personal amount on that salary is a separate $16,452.00. At $200,000 the federal amount falls to $16,084.75 and the territorial amount stays $18,198.00.'
      },
      {
        q: 'How does the Northwest Territories compare with Newfoundland and Labrador at $70,000?',
        a: 'Federal tax, CPP, and EI are the same: $7,278.19, $3,956.75, and $1,123.07. Territorial tax is $3,197.57 here and Newfoundland and Labrador tax is $5,938.98. Annual take-home is $54,444.42 here and $51,703.01 there. The $2,741.41 gap is that tax difference. The monthly headlines are $4,537.04 and $4,308.58.'
      },
      {
        q: 'Is the Northwest Territories cost of living tax credit in the $70,000 result?',
        a: 'No. Territorial tax at $70,000 is $3,197.57 before that credit, and the monthly headline is $4,537.04. The credit is also omitted at $30,000, where territorial tax is $574.44 and the monthly headline is $2,163.54. A return that can claim the credit should treat these rows as high.'
      },
      {
        q: 'Can this Northwest Territories result be used for a Quebec or Ontario salary?',
        a: 'No. Quebec at $70,000 uses QPP, QPIP, a 1.30% EI rate, and the 16.5% federal abatement, and its monthly headline is $4,253.73. Ontario adds its own tax and the Ontario Health Premium on top of the CPP and EI figures used here. This page is the territorial brackets and the $18,198 amount only.'
      }
    ],
    relatedLinks: [
      { slug: 'newfoundland-and-labrador-take-home-pay-calculator', label: 'Newfoundland and Labrador take-home pay calculator for 2026', note: 'Same federal tax, CPP, and EI at $70,000. Provincial tax is $5,938.98 rather than $3,197.57, and the monthly headline is $4,308.58.' },
      { slug: 'prince-edward-island-take-home-pay-calculator', label: 'Prince Edward Island take-home pay calculator for 2026', note: 'Same federal pieces. PEI tax at $70,000 is $6,258.09 and the monthly headline is $4,281.99, below both this page and Newfoundland and Labrador.' },
      { slug: 'nova-scotia-take-home-pay-calculator', label: 'Nova Scotia take-home pay calculator for 2026', note: 'Same CPP and EI. Nova Scotia’s monthly headline at $70,000 is $4,208.02. The territorial brackets here are not those provincial brackets.' },
      { slug: 'quebec-take-home-pay-calculator', label: 'Quebec take-home pay calculator for 2026', note: 'QPP, QPIP, the 1.30% EI rate, and the 16.5% abatement. At $70,000 the monthly headline is $4,253.73, and the payroll system is not the one used here.' }
    ]
  }
};
