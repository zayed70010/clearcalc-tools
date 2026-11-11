export const nov11CalculatorContent = {
  'investment-calculator': {
    title: 'Investment Calculator: Contributions and Compounding | ClearCalc',
    h1: 'Investment Calculator',
    description: 'Project an investment from a starting balance, monthly or yearly contributions, and monthly, quarterly, or annual compounding. $10,000 plus $250 a month at 7% for 10 years ends at $63,367.82.',
    intro: [
      'This investment calculator projects one balance. You set a starting amount, a contribution, how often that contribution arrives, an annual return, how often the return compounds, and whether the contribution is added before or after that period’s growth. The sample is $10,000 to start, $250 at the end of each month, 7% a year, monthly compounding, and 10 years. The headline is $63,367.82.',
      'That sample is the same contract as the compound interest page on this site, which also shows $63,367.82 for end-of-month deposits and $63,620.23 when the same $250 is added at the beginning of the month. This page is the one that can change the contribution to once a year, or the compounding to quarterly or annual. The compound interest page stays on monthly deposits and monthly compounding.',
      'The return is a constant percent you type. It is not a forecast, a fund’s past result, or a guarantee. Fees, taxes, and inflation stay out of the balance so the growth from the rate is visible on its own. A retirement projection that restates the balance in today’s dollars is on the retirement page.'
    ],
    steps: [
      'Enter the starting amount. The sample is 10000, which is $10,000 already invested. Zero is allowed if the balance will come only from contributions.',
      'Enter the contribution and choose monthly or yearly. The sample contribution is 250, added every month. A yearly contribution uses the same box as one amount per year, not as a monthly figure you still have to multiply.',
      'Enter the annual return as a percent. For 7%, type 7. Choose monthly, quarterly, or annual compounding, and choose whether each contribution is added at the beginning or the end of its period.',
      'Enter the years, from 1 to 50, and press Calculate. The headline is the ending balance. Each year underneath shows the balance, the amount contributed so far, and the growth.'
    ],
    howHeading: 'How the balance is built month by month',
    howItWorks: [
      'The page walks one month at a time. A beginning-of-period contribution is added first. Compounding is applied next, but only on a month when that frequency is due: every month, every third month, or every twelfth month. An end-of-period contribution is added after that growth. A yearly contribution is added only in the first month of the year or the last month of the year, depending on the timing you chose.',
      'Monthly contribution and monthly compounding at the end of the month is an ordinary annuity. On the sample, the starting $10,000 grows to $20,096.61 and the deposits grow to $43,271.20. Those two pieces are $63,367.82. Moving the deposit to the beginning of the month multiplies the deposit piece by one extra month of growth and the headline becomes $63,620.23. The starting amount does not change with that switch, because timing applies only to contributions.',
      'Quarterly compounding uses a quarter of the annual rate, applied at the end of March, June, September, and December in the model’s year. A monthly contribution made in January waits until the March step before it earns anything. Annual compounding works the same way on a twelve-month wait. The page does not credit a partial period. If you wanted every deposit to earn immediately, choose monthly compounding.',
      'Year 1 of the sample ends at $13,821.05. You have put in $13,000 by then, so the growth is $821.05. Year 5 ends at $32,074.48 from $25,000 contributed. Year 10 ends at $63,367.82 from $40,000 contributed, and the growth line is $23,367.82. The contributed column includes the original $10,000. It is not only the new deposits.'
    ],
    formula: 'For each month, in order:\n  add the contribution if timing is the beginning and this month is a contribution month\n  if compounding is monthly: balance = balance × (1 + annual rate / 100 / 12)\n  if compounding is quarterly and the month is 3, 6, 9, or 12: balance = balance × (1 + annual rate / 100 / 4)\n  if compounding is annual and the month is 12: balance = balance × (1 + annual rate / 100)\n  add the contribution if timing is the end and this month is a contribution month\nGrowth = ending balance − starting amount − contributions added',
    formulaNotes: [
      'A yearly contribution of $3,000 at the end of each year, with annual compounding at 7% for 10 years and a $10,000 start, ends at $61,120.86. The first year is $10,000 × 1.07 + $3,000 = $13,700. That path is not the monthly sample. The rate is the same. The timing of the money is not.',
      'The effective annual rate of 7% compounded monthly is 7.23%, the same figure the compound interest page reports. This page does not print that rate again when compounding is quarterly or annual, because the balance line already shows the result of the frequency you picked.'
    ],
    examplesHeading: 'Worked investment examples',
    examples: [
      {
        title: '$10,000 plus $250 a month at 7% for 10 years',
        paragraphs: [
          'Starting amount 10000, contribution 250, monthly, return 7, monthly compounding, end of the period, 10 years. The calculator shows $63,367.82. Contributed is $40,000.00. Growth is $23,367.82.',
          'Year 1 is $13,821.05. The early years are mostly money you added. The later years are where the growth line gets large, because the balance it multiplies is larger. Year 10’s growth is $23,367.82, not a flat 7% of the original $10,000.'
        ]
      },
      {
        title: 'The same deposits at the beginning of the month',
        paragraphs: [
          'Change only the timing to the beginning of the period. The headline is $63,620.23. The extra $252.41 is one month of growth on each deposit. The compound interest page shows the same pair of headlines, $63,367.82 and $63,620.23.',
          'Use this switch when the deposit really is invested at the start of the month. Leaving it on the end is the ordinary case, and it is the right comparison when a paycheck contribution arrives after the month has started.'
        ]
      },
      {
        title: 'A once-a-year contribution with annual compounding',
        paragraphs: [
          'Starting amount 10000, contribution 3000, yearly, return 7, annual compounding, end of the period, 10 years. The headline is $61,120.86. The first year ends at $13,700.00, which is $10,700 of growth on the start plus the $3,000 added after that growth.',
          'A monthly plan of $250 is $3,000 a year as well, but it does not match this headline. The monthly sample ends higher because the deposits spend more time invested and the rate compounds twelve times a year. Same annual dollars, different balance.'
        ]
      }
    ],
    table: {
      heading: 'Year-by-year balance for the monthly sample',
      caption: 'Starting amount $10,000, $250 at the end of each month, 7% compounded monthly. Contributed includes the starting amount. Each figure is what this calculator displays.',
      headers: ['Year', 'Balance', 'Contributed', 'Growth'],
      rows: [
        ['1', '$13,821.05', '$13,000.00', '$821.05'],
        ['2', '$17,918.32', '$16,000.00', '$1,918.32'],
        ['5', '$32,074.48', '$25,000.00', '$7,074.48'],
        ['10', '$63,367.82', '$40,000.00', '$23,367.82']
      ]
    },
    limitsHeading: 'What this investment projection leaves out',
    limits: [
      'The return does not vary. A year that loses money, a dividend that is paid in cash and not reinvested, and a fee taken as a percent of assets are not fields. Lower the rate if you want a more cautious path. The page will not build that caution in for you.',
      'Taxes are not withheld. A taxable account, a traditional IRA, and a Roth IRA do not end at the same spendable amount. The Roth page applies the 2026 contribution limit and then projects a balance. This page accepts any contribution you type.',
      'Inflation is not removed. The $63,367.82 is future dollars. The retirement page divides a nominal balance by inflation so you can read it in today’s dollars. This page keeps the nominal figure so it can be checked against the compound interest page.',
      'Contributions are level. A raise, a skipped month, or a one-time extra deposit is not a row. You can raise the contribution to a rough average, and the result is then that average, not the path you actually saved.'
    ],
    disclaimer: 'This investment balance is a constant-rate projection. It is not a forecast, a fund prospectus, or financial advice.',
    faqs: [
      { q: 'What is the future value of $10,000 plus $250 a month at 7% for 10 years?', a: '$63,367.82 when the $250 is added at the end of each month and the 7% compounds monthly. Contributed is $40,000.00 and growth is $23,367.82. The same deposits at the beginning of the month end at $63,620.23.' },
      { q: 'How does this investment calculator differ from the compound interest page?', a: 'The compound interest page is monthly deposits and monthly compounding only. This page adds a yearly contribution and quarterly or annual compounding. On the shared monthly case the two pages show the same $63,367.82 and the same $63,620.23.' },
      { q: 'Why does quarterly compounding not credit a deposit in the month it is made?', a: 'The model applies the quarterly rate only at the end of each three-month block. A deposit made in the first month of the quarter sits until that date. Choose monthly compounding if every deposit should earn in the month it arrives.' },
      { q: 'Does the investment result deduct inflation or tax?', a: 'No. The headline is a future balance before fees, tax, and inflation. Use the retirement calculator when you want the same style of monthly contributions restated in today’s dollars, and the Roth IRA calculator when the contribution has a 2026 IRS cap.' },
      { q: 'What balance does a $3,000 yearly contribution produce at 7%?', a: '$61,120.86 after 10 years if you start with $10,000, add $3,000 at the end of each year, and compound once a year. The first year ends at $13,700.00. A monthly $250 contribution is the same $3,000 a year and ends higher, because of timing and monthly compounding.' }
    ],
    relatedLinks: [
      { slug: 'compound-interest-calculator', label: 'Compound interest calculator', note: 'Monthly deposits and monthly compounding. The shared sample is $63,367.82, or $63,620.23 if deposits earn in the month they are added.' },
      { slug: 'retirement-calculator', label: 'Retirement calculator', note: 'The same monthly contribution idea, then an inflation adjustment and a withdrawal rate. It is a teaching projection, not a plan.' },
      { slug: 'roth-ira-calculator', label: 'Roth IRA calculator', note: 'Caps the annual contribution at the 2026 IRS limit after the income phase-out, then projects growth.' },
      { slug: 'cd-calculator', label: 'CD calculator', note: 'One deposit, an APR or an APY, and a term in months. No periodic contribution.' },
      { slug: 'savings-goal-calculator', label: 'Savings goal calculator', note: 'Solves for the monthly deposit that hits a target. This page starts from the deposit and solves for the balance.' }
    ]
  },
  'retirement-calculator': {
    title: 'Retirement Calculator: Savings and Withdrawal | ClearCalc',
    h1: 'Retirement Calculator',
    description: 'Project savings from now until a retirement age, restate the balance in today’s dollars, and compare a withdrawal rate with spending. At 35, saving $500 a month on $50,000 at 7% until 65, 2.5% inflation leaves $484,280.16 in today’s dollars.',
    intro: [
      'This retirement calculator answers a planning question in two steps. First it compounds current savings and a level monthly contribution until the retirement age you type. Then it removes inflation, so the headline is that nest egg in today’s dollars. The sample starts at age 35 with $50,000, adds $500 at the end of each month, earns 7%, and retires at 65. Inflation is 2.5%. The headline is $484,280.16 in today’s dollars. The nominal balance, before that restatement, is $1,015,810.37.',
      'A withdrawal rate is applied to the nest egg next. At 4% the sample supports $19,371.21 a year in today’s dollars, which is $40,632.41 in the future dollars of the retirement date. If you also type annual spending in today’s dollars, the page estimates how many retirement years the inflation-adjusted nest egg lasts when that spending is taken at the start of each year and the remainder grows at the real return.',
      'None of this is a retirement plan. Social Security, a pension, a spouse’s savings, taxes on withdrawals, and a bad sequence of returns are not in the model. The 4% figure is a rate you can edit. It is a rule of thumb people test, not a promise that the money will last.'
    ],
    steps: [
      'Enter your current age and the age you want to stop contributing. The sample is 35 and 65, which is 30 years. The retirement age has to be later, and the gap cannot be more than 60 years.',
      'Enter current savings and the monthly contribution. The sample is 50000 and 500. The contribution is added at the end of each month.',
      'Enter the annual return and the inflation rate as percents. The sample is 7 and 2.5. Then enter a withdrawal rate. The sample is 4, meaning 4% of the nest egg per year.',
      'Enter annual spending in today’s dollars, or 0 if you only want the withdrawal amount. The sample spending is 40000. Press Calculate and read the headline as today’s dollars, then the nominal balance and the longevity line.'
    ],
    howHeading: 'How the nest egg and the withdrawal are calculated',
    howItWorks: [
      'Saving uses the same month-by-month path as the investment calculator: the contribution arrives at the end of the month, and the annual return compounds monthly. On the sample that path produces $1,015,810.37. You would have contributed $230,000.00 by then, including the original $50,000, so the growth before inflation is $785,810.37.',
      'Today’s dollars divide that nominal balance by (1 + inflation) raised to the number of years. At 2.5% for 30 years the divisor is large enough to turn $1,015,810.37 into $484,280.16. Set inflation to 0 and the headline equals the nominal balance, $1,015,810.37. The page is not using a different return. It is only undoing a price rise you typed.',
      'The real return used after retirement is (1 + return) / (1 + inflation) − 1. Spending is taken at the beginning of each retirement year from the inflation-adjusted nest egg, then what remains grows by that real return. Spending stays flat in today’s dollars, which means it is assumed to rise with the inflation rate you already typed. On the sample, $40,000 a year lasts about 16.6 years. The 4% withdrawal of $19,371.21 is a different question. It is not the spending line. It is 4% of the inflation-adjusted nest egg, shown so you can compare the two.',
      'Leave spending at 0 and the longevity sentence says it was skipped. The withdrawal line still appears. A nest egg that still has a balance after 80 retirement years is reported as lasting at least that long, not as a precise final year.'
    ],
    formula: 'Years = retirement age − current age\nNominal balance = monthly end-of-month compounding at the annual return, for that many years\nToday’s dollars = nominal balance / (1 + inflation) ^ years\nWithdrawal in today’s dollars = today’s dollars × withdrawal rate\nReal return = (1 + return) / (1 + inflation) − 1\nEach retirement year: subtract spending, then multiply the remainder by (1 + real return)\nLongevity stops when spending would exceed the balance, with a fractional final year',
    formulaNotes: [
      'The sample’s 4% of $484,280.16 is $19,371.21. The same 4% of the nominal $1,015,810.37 is $40,632.41. Both are on the result. They are the same rate at two price levels, not two different plans.',
      'With inflation at 0, today’s dollars stay $1,015,810.37. A $40,000 spending line then lasts longer than 16.6 years because the nest egg was not reduced and the real return equals the nominal 7%. Change inflation back to 2.5% before you treat 16.6 as the answer.'
    ],
    examplesHeading: 'Worked retirement examples',
    examples: [
      {
        title: 'Age 35 to 65, $50,000 saved, $500 a month, 7%, inflation 2.5%',
        paragraphs: [
          'The headline is $484,280.16 in today’s dollars. Nominal balance is $1,015,810.37. Contributed is $230,000.00. Growth before inflation is $785,810.37. A 4% withdrawal is $19,371.21 a year in today’s dollars.',
          'Spending of $40,000 a year in today’s dollars lasts about 16.6 years on the real return. That is shorter than a 30-year retirement. The gap is the point of the page: the saved amount, the return, and the spending are three different inputs, and this set does not cover a 30-year retirement at $40,000.'
        ]
      },
      {
        title: 'The same savings with inflation set to zero',
        paragraphs: [
          'Change inflation to 0 and leave the other sample fields. The headline is $1,015,810.37 in today’s dollars, because nothing was divided out. The nominal line matches it.',
          'Use the zero only as a check that inflation is a divisor, not a second investment return. A plan that ignores rising prices will look richer than the 2.5% case and will not buy the same groceries.'
        ]
      },
      {
        title: 'Spending left at zero',
        paragraphs: [
          'Set annual spending to 0. The nest egg and the 4% withdrawal still calculate. The longevity line says spending was left at zero, so the page does not estimate how long the money lasts.',
          'That is the right setting when you want the size of the nest egg and have not chosen a spending number yet. It is the wrong setting if you already know the spending and want the year count. Type the spending. Do not leave a zero and then read the withdrawal as a longevity promise.'
        ]
      }
    ],
    table: {
      heading: 'Sample nest egg with and without inflation',
      caption: 'Age 35 to 65, $50,000 already saved, $500 at the end of each month, 7% return compounded monthly. The today’s-dollars column is the headline. Spending of $40,000 is used only in the longevity note for the 2.5% row.',
      headers: ['Inflation', 'Nominal balance', 'Today’s dollars', '4% withdrawal today'],
      rows: [
        ['2.5%', '$1,015,810.37', '$484,280.16', '$19,371.21'],
        ['0%', '$1,015,810.37', '$1,015,810.37', '$40,632.41']
      ]
    },
    limitsHeading: 'What this retirement estimate leaves out',
    limits: [
      'The return never falls. A sequence of poor returns in the first retirement years can empty a balance that a flat real return keeps alive. This page has one return for the saving years and the same return, after inflation, for the spending years.',
      'Contributions stop at the retirement age. There is no part-time income after that, no Social Security benefit, and no pension. Add those only by lowering the spending figure yourself. The page will not look them up.',
      'Taxes on the contribution and on the withdrawal are omitted. A traditional account, a Roth account, and a taxable account are not the same spendable dollar. The Roth IRA page is about the 2026 contribution limit, not about this longevity count.',
      'The monthly contribution does not rise with pay. The investment calculator can change compounding frequency. This page stays on monthly contributions and monthly compounding so the inflation step has one balance to restate.'
    ],
    disclaimer: 'This retirement figure is a teaching projection with a constant return. It is not financial, tax, or retirement advice, and it is not a forecast of markets or of inflation.',
    faqs: [
      { q: 'How much is $50,000 plus $500 a month worth at 65 if you are 35?', a: 'At 7% compounded monthly the nominal balance is $1,015,810.37. At 2.5% inflation that is $484,280.16 in today’s dollars. You would have contributed $230,000.00, including the starting $50,000.' },
      { q: 'What does a 4% withdrawal mean on this retirement calculator?', a: 'It is 4% of the nest egg, once. On the sample that is $19,371.21 a year in today’s dollars and $40,632.41 in future dollars at retirement. It is not a guarantee that the rate is safe, and it is not the same number as the spending field.' },
      { q: 'Why does $40,000 of spending last about 16.6 years in the sample?', a: 'Because $40,000 is more than the $19,371.21 that 4% of the inflation-adjusted nest egg would provide. The page withdraws $40,000 at the start of each retirement year and grows the rest at the real return. The balance runs out in about 16.6 years on those assumptions.' },
      { q: 'Does the retirement calculator include Social Security?', a: 'No. It also leaves out pensions, taxes, fees, and a spouse’s account. Lower the spending you type if you want to represent income that arrives from somewhere else. The page will not add a benefit on its own.' },
      { q: 'Why is the headline smaller than the nominal balance?', a: 'Inflation divides the future balance back into today’s prices. At 2.5% for 30 years, $1,015,810.37 becomes $484,280.16. Set inflation to 0 and the two figures match. The investment calculator keeps the nominal balance and does not do this division.' }
    ],
    relatedLinks: [
      { slug: 'investment-calculator', label: 'Investment calculator', note: 'The saving engine without inflation or a withdrawal. $10,000 plus $250 a month at 7% for 10 years is $63,367.82 there.' },
      { slug: 'roth-ira-calculator', label: 'Roth IRA calculator', note: 'A 2026 contribution cap and income phase-out, then growth. This page does not apply an IRS limit.' },
      { slug: '401k-contribution-calculator', label: '401(k) contribution calculator', note: 'The 2026 elective deferral and a match. It does not project a balance to retirement.' },
      { slug: 'inflation-calculator', label: 'Inflation calculator', note: 'CPI-U annual averages, or a constant rate on one amount. This page uses only the constant inflation you type.' },
      { slug: 'compound-interest-calculator', label: 'Compound interest calculator', note: 'Monthly compounding and monthly deposits, without an age or a withdrawal.' },
      { slug: 'savings-goal-calculator', label: 'Savings goal calculator', note: 'Solves for the deposit that reaches a target. This page starts from the deposit.' }
    ]
  },
  'roth-ira-calculator': {
    title: 'Roth IRA Calculator 2026: Limit and Growth | ClearCalc',
    h1: 'Roth IRA Calculator for 2026',
    description: 'Check the 2026 Roth IRA contribution limit of $7,500, or $8,600 at age 50 or older, apply the IRS income phase-out, and project tax-free growth of the amount still allowed.',
    intro: [
      'This Roth IRA calculator does two jobs. It works out how much the IRS rules for 2026 still let you contribute, given a filing status, an age band, and a modified AGI. Then it compounds that allowed contribution, once a year, on top of any Roth balance you already have. The sample is single, under 50, modified AGI $80,000, no current balance, a $7,500 contribution, 7% a year, and 10 years, added at the end of each year. The headline is $104,751.03.',
      'The 2026 IRA contribution limit is $7,500, up from $7,000. The catch-up for age 50 or older is $1,100, so the cap before income limits is $8,600. Those dollar amounts are from the IRS newsroom announcement that the 401(k) limit is $24,500 for 2026 and the IRA limit is $7,500, and from the IRS pages Retirement topics — IRA contribution limits and Retirement topics — Catch-up contributions.',
      'Income can reduce the Roth contribution before it reaches zero. For 2026 the phase-out runs from $153,000 to $168,000 for single filers, heads of household, and married people filing separately who did not live with their spouse. It runs from $242,000 to $252,000 for married filing jointly or a qualifying surviving spouse. It runs from $0 to $10,000 for married filing separately if you lived with your spouse. A modified AGI at or above the top of the band leaves an allowed contribution of $0.'
    ],
    steps: [
      'Choose the filing status that matches the Roth phase-out, not a different deduction. The third row is only for married filing separately when you lived with your spouse. If you did not live with your spouse, use the first row.',
      'Choose under 50, or 50 or older. Under 50 uses $7,500. Age 50 or older uses $8,600 before the phase-out.',
      'Enter modified AGI and the annual contribution you want to make. The projection uses the smaller of that wish and the amount the phase-out still allows. Enter any current Roth balance.',
      'Enter the annual return, the years, and whether the contribution arrives at the start or the end of each year. Press Calculate. The headline is the projected balance, not the contribution limit.'
    ],
    howHeading: 'How the 2026 limit and the growth are worked out',
    howItWorks: [
      'Below the start of the phase-out the allowed contribution is the full cap, $7,500 or $8,600. At or above the end of the band it is zero. Between the ends, the cap is multiplied by (top of band − modified AGI) / width of the band. Publication 590-A rounds that reduced limit up to the next $10. If the rounded result is more than zero but less than $200, the allowed contribution is $200.',
      'A single filer at a modified AGI of $160,500 is halfway from $153,000 to $168,000, so the $7,500 cap becomes $3,750. At $167,900 the raw reduction is $50, and the $200 floor lifts it to $200. At $168,000 the allowed contribution is $0. A joint filer at $247,000, halfway from $242,000 to $252,000, is also at $3,750 of a $7,500 cap. Age 50 or older uses $8,600 in the same fraction.',
      'Growth compounds monthly. The annual contribution is added either before those twelve months or after them. The sample adds $7,500 at the end of each year for 10 years, starting from zero, at 7%. The headline is $104,751.03. If you type $7,500 but the phase-out only allows $3,750, the projection uses $3,750 and says so. A $10,000 starting balance plus that $3,750 at the beginning of each year for 20 years at 7% ends at $209,415.22.',
      'The contribution also cannot exceed taxable compensation, and a qualified distribution has a five-year clock and an age or exception rule. Neither test is a field. The page labels the growth as the balance if the earnings later come out under the qualified-distribution rules. It does not compute the tax on an early withdrawal.'
    ],
    formula: '2026 cap = $7,500, or $8,600 if age 50 or older\nSingle phase-out: $153,000 to $168,000\nJoint phase-out: $242,000 to $252,000\nMarried filing separately and lived with spouse: $0 to $10,000\nIf MAGI is at or above the top, allowed = $0\nIf MAGI is at or below the start, allowed = cap\nOtherwise allowed = cap × (top − MAGI) / (top − start), rounded up to the next $10, and at least $200 if it is still above $0\nProjection uses min(contribution typed, allowed), compounded monthly, added once a year',
    formulaNotes: [
      'Sources for the dollars and the bands: IRS IR-2025-111 and the Retirement topics pages for IRA limits and catch-up contributions, covering 2026. The $10 rounding and the $200 minimum reduced limit are the Publication 590-A worksheet rules.',
      'A modified AGI of $80,000 is under $153,000, so a single filer under 50 keeps the full $7,500. The phase-out line on that result is the full cap, and the projection uses the whole $7,500 you typed.'
    ],
    examplesHeading: 'Worked 2026 Roth IRA examples',
    examples: [
      {
        title: 'Single, under 50, MAGI $80,000, $7,500 for 10 years',
        paragraphs: [
          'The cap before the phase-out is $7,500.00. The amount this income still allows is $7,500.00. The projection uses $7,500.00 at the end of each year, compounded monthly at 7%, from a zero balance. The headline is $104,751.03.',
          'The contribution is inside the limit, so the result does not cut it. Compensation still has to cover the contribution. This page cannot see a W-2.'
        ]
      },
      {
        title: 'The same person at a modified AGI of $160,500',
        paragraphs: [
          'Halfway through the $153,000 to $168,000 band, the allowed contribution falls to $3,750.00. If you still type $7,500, the detail line says the wish is above the phase-out and the projection uses $3,750.00.',
          'Starting from $10,000 and adding that $3,750 at the beginning of each year for 20 years at 7% produces $209,415.22. The beginning-of-year switch matters. The same dollars at the end of the year would finish lower, because each contribution would miss a year of growth.'
        ]
      },
      {
        title: 'Age 50 or older, and a MAGI that closes the Roth',
        paragraphs: [
          'Choose 50 or older and a modified AGI under the phase-out. The cap before income limits is $8,600.00, which is $7,500 plus the $1,100 catch-up. The projection will use $8,600 if that is what you type and the income still allows it.',
          'A single modified AGI of $168,000 or more allows $0. The headline then grows only the current balance you typed. A joint modified AGI of $252,000 or more does the same. Married filing separately and living with a spouse is already at $0 once modified AGI reaches $10,000.'
        ]
      }
    ],
    table: {
      heading: '2026 Roth IRA amount still allowed',
      caption: 'Caps and phase-out ranges are the 2026 IRS figures. Between the ends, the reduced limit is rounded up to the next $10, and a reduced limit under $200 becomes $200. Each allowed amount is what this calculator uses.',
      headers: ['Filing and age', 'Modified AGI', 'Allowed contribution'],
      rows: [
        ['Single, under 50', '$80,000', '$7,500'],
        ['Single, under 50', '$160,500', '$3,750'],
        ['Single, under 50', '$167,900', '$200'],
        ['Single, under 50', '$168,000', '$0'],
        ['Joint, under 50', '$247,000', '$3,750'],
        ['Age 50 or older, single, under the band', '$80,000', '$8,600']
      ]
    },
    limitsHeading: 'What this Roth projection leaves out',
    limits: [
      'Modified AGI for Roth purposes is not the same as box 1 wages. Publication 590-A has a worksheet that adds some income back. This page uses the modified AGI you type. It does not rebuild the worksheet.',
      'The contribution cannot exceed taxable compensation, and contributions to a traditional IRA count toward the same annual limit. Employer SEP or SIMPLE contributions are a different limit. None of those offsets are fields, so a household that already contributed has to lower the number it types.',
      'A conversion, a rollover, and a withdrawal are not modeled. The five-year clock for a qualified distribution of earnings is not counted. Early-withdrawal tax and the 10% additional tax are not estimated.',
      'The return is constant and the contribution is level. The investment calculator will take a contribution with no IRS cap. The 401(k) page applies the 2026 elective deferral, which is a different limit from this IRA cap.'
    ],
    disclaimer: 'This Roth figure uses published 2026 IRS limits as general information. It is not tax advice, and it does not file a contribution or decide whether a distribution is qualified.',
    faqs: [
      { q: 'What is the Roth IRA contribution limit for 2026?', a: '$7,500 if you are under 50, and $8,600 if you are 50 or older. The extra $1,100 is the 2026 IRA catch-up. Both figures are before the income phase-out. The IRS stated the $7,500 IRA limit alongside the $24,500 401(k) limit for 2026.' },
      { q: 'What is the 2026 Roth IRA income phase-out for a single filer?', a: '$153,000 to $168,000 of modified AGI. At $160,500 the allowed contribution is $3,750 of a $7,500 cap. At $167,900 the worksheet floor makes the allowed contribution $200. At $168,000 it is $0.' },
      { q: 'What is the 2026 Roth phase-out for married filing jointly?', a: '$242,000 to $252,000. At $247,000 a couple under 50 is allowed $3,750. At $252,000 or more the allowed Roth contribution is $0. Married filing separately, if you lived with your spouse, phases out from $0 to $10,000 and is $0 at $10,000.' },
      { q: 'How much does $7,500 a year grow in 10 years at 7% on this Roth page?', a: '$104,751.03 if you start from zero, add $7,500 at the end of each year, and the 7% compounds monthly. That sample assumes the income phase-out still allows the full $7,500, which it does at a single modified AGI of $80,000.' },
      { q: 'Does this Roth calculator check the five-year rule?', a: 'No. It also does not test your compensation, a traditional IRA contribution already made, or the tax on a non-qualified withdrawal. The balance is a projection of contributions and a constant return, labeled as tax-free only if the distribution later qualifies under the IRS rules.' }
    ],
    relatedLinks: [
      { slug: '401k-contribution-calculator', label: '401(k) contribution calculator', note: 'The 2026 elective deferral is $24,500, with higher catch-up amounts. That limit is not the Roth IRA cap.' },
      { slug: 'retirement-calculator', label: 'Retirement calculator', note: 'Projects any monthly contribution to a retirement age and restates it for inflation. It does not apply a Roth phase-out.' },
      { slug: 'investment-calculator', label: 'Investment calculator', note: 'Any contribution and several compounding frequencies, with no IRS cap.' },
      { slug: 'us-federal-income-tax-calculator', label: '2026 federal income tax calculator', note: 'Tax on a wage after the standard deduction. It is not modified AGI for a Roth contribution.' },
      { slug: 'compound-interest-calculator', label: 'Compound interest calculator', note: 'Monthly deposits. This Roth page adds the contribution once a year.' }
    ]
  },
  'mortgage-payoff-calculator': {
    title: 'Mortgage Payoff Calculator: Extra Payments | ClearCalc',
    h1: 'Mortgage Payoff Calculator',
    description: 'See the months and interest saved when you add a lump sum or an extra monthly amount to a fixed-rate mortgage. On $300,000 at 6.5% for 30 years, an extra $200 a month pays the loan off in 277 months and saves $103,448.79 of interest.',
    intro: [
      'This mortgage payoff calculator keeps the contractual payment and then adds what you pay on top. The contractual payment is the fully amortizing payment on the balance and the years left, at the rate you type. An extra monthly amount is added to that payment every month. A lump sum is subtracted from the balance before the first payment. The payment does not fall just because you paid extra. That is the usual fixed-rate contract: extra principal shortens the term.',
      'The sample is a $300,000 balance at 6.5% with 30 years left and an extra $200 a month. With no extra money the loan runs 360 months and the interest is $382,633.47, the same interest the mortgage payment page reports for that loan. With the extra $200 the balance hits zero in 277 months. Interest falls to $279,184.67. You save 83 months and $103,448.79 of interest.',
      'A lump sum of $10,000 on the same loan, with no extra monthly amount, finishes in 327 months and cuts interest to $328,716.78, a saving of 33 months and $53,916.69. The contractual payment stays $1,896.20. The page does not recast the loan into a lower payment unless you change the balance and the years and look at the mortgage payment page instead.'
    ],
    steps: [
      'Enter the current balance and the annual rate. The sample is 300000 and 6.5. The rate is a nominal annual rate divided by 12, the same convention as the mortgage payment page.',
      'Enter the years left on the original term. The sample is 30. That term is used only to compute the contractual payment. Extra money can make the real payoff earlier.',
      'Enter the extra amount you will add every month, and any lump sum you will pay now. The sample extra is 200 and the lump sum is 0. A lump sum cannot be larger than the balance.',
      'Press Calculate. The headline is the number of months until the balance reaches zero. Months saved and interest saved are underneath, measured against the loan with no extra amount.'
    ],
    howHeading: 'How extra principal changes the payoff',
    howItWorks: [
      'The contractual payment is principal × r × (1 + r) ^ n / ((1 + r) ^ n − 1), where r is the annual rate divided by 100 and then by 12, and n is years times 12. On the sample that payment is $1,896.20 a month before you add anything. Each month the interest due is the remaining balance times r. The rest of the payment, including the extra amount, reduces principal.',
      'The no-extra schedule uses the full contractual payment for 360 months and charges $382,633.47 of interest. The extra-payment schedule starts from the balance after the lump sum and sends the contractual payment plus the extra amount. It stops in the month the balance reaches zero. The last month pays only the interest due plus the remaining principal, not a full extra payment past zero.',
      'If the payment you would send does not cover the interest due, the balance would rise and the page rejects the inputs. Raising the extra amount or the lump sum is what makes the balance fall. A zero rate has no interest, so the payoff is just the balance divided by the payment, and interest saved is zero.',
      'The mortgage payment page can add property tax, insurance, and PMI to a housing payment. Those are not principal. This page does not accept them, because sending them to the loan servicer would not retire the balance. Put only principal, the rate, the remaining term, and the extra principal here.'
    ],
    formula: 'Contractual payment M = balance × r × (1 + r) ^ n / ((1 + r) ^ n − 1)\nr = annual percent / 100 / 12\nn = years left × 12\nStarting balance for the extra schedule = balance − lump sum\nPayment sent = M + extra monthly amount\nEach month: interest = balance × r, principal paid = payment sent − interest, capped at the balance\nMonths saved = months without extra − months with extra\nInterest saved = interest without extra − interest with extra',
    formulaNotes: [
      'On $300,000 at 6.5% for 30 years, M is $1,896.20. Extra $200 makes the check $2,096.20. The payoff moves from 360 months to 277 months. Interest moves from $382,633.47 to $279,184.67.',
      'The lump sum is applied once, before month 1. It is not spread across the term. A $10,000 lump sum with no monthly extra leaves a $290,000 start and the same $1,896.20 payment, and the loan ends in 327 months.'
    ],
    examplesHeading: 'Worked mortgage payoff examples',
    examples: [
      {
        title: 'Extra $200 a month on $300,000 at 6.5% for 30 years',
        paragraphs: [
          'The headline is 277 months. Without the extra amount the loan takes 360 months and $382,633.47 of interest. With it, interest is $279,184.67. Months saved are 83. Interest saved is $103,448.79.',
          'The contractual payment stays $1,896.20. The payment you would send is $2,096.20. Nothing in that gap is a fee. It is additional principal, after the month’s interest is covered.'
        ]
      },
      {
        title: 'A $10,000 lump sum and no monthly extra',
        paragraphs: [
          'Set the extra monthly amount to 0 and the lump sum to 10000. The headline is 327 months. Interest saved is $53,916.69. Months saved are 33. The schedule starts from $290,000.00 and still uses the $1,896.20 payment that was computed on $300,000.',
          'If a lender recasts the loan, the payment would drop and the term would stay near 30 years. That is a different agreement. This page does not recast. The amortization calculator shows the original schedule with no extra principal at all.'
        ]
      },
      {
        title: 'No extra amount, as a check against the mortgage page',
        paragraphs: [
          'Extra 0 and lump sum 0. The headline is 360 months. Interest is $382,633.47. Months saved are 0 and interest saved is $0.00. That interest matches the mortgage payment page for $300,000 at 6.5% for 30 years.',
          'Use the zero case when a result looks surprising. If the no-extra interest is not $382,633.47 on those inputs, the rate or the years are not the sample. The page will not invent a biweekly draft or a prepayment penalty on top.'
        ]
      }
    ],
    table: {
      heading: 'Payoff on a $300,000 balance at 6.5% with 30 years left',
      caption: 'The contractual payment is $1,896.20 in every row. The lump sum is applied before the first payment. Months and interest are what this calculator displays.',
      headers: ['Extra each month', 'Lump sum now', 'Months to payoff', 'Interest', 'Interest saved'],
      rows: [
        ['$0', '$0', '360', '$382,633.47', '$0.00'],
        ['$200', '$0', '277', '$279,184.67', '$103,448.79'],
        ['$0', '$10,000', '327', '$328,716.78', '$53,916.69']
      ]
    },
    limitsHeading: 'What an extra-payment estimate leaves out',
    limits: [
      'A prepayment penalty, a biweekly program that drafts half a payment every two weeks, and an adjustable rate are not modeled. The Canada mortgage page has an accelerated bi-weekly payment. This page is monthly, in US dollars.',
      'The contractual payment is recomputed from the balance and years you type. If the servicer’s payment was rounded differently, or the remaining term is not a whole number of years, the month count can move. The page asks for whole years.',
      'Escrow for tax and insurance is not part of the extra principal. Paying the escrow does not shorten the loan. The mortgage payment page is where those housing costs are added to the monthly bill.',
      'Interest saved is pretax. Mortgage interest that is deductible would make the after-tax saving smaller. This page does not know your tax bracket and does not ask for it.'
    ],
    disclaimer: 'This payoff count is a fixed-rate monthly model. It is not a payoff quote from a servicer and not financial advice.',
    faqs: [
      { q: 'How many months does an extra $200 a month save on a $300,000 mortgage at 6.5%?', a: '83 months. The loan without the extra amount takes 360 months and $382,633.47 of interest. With an extra $200 it takes 277 months and $279,184.67 of interest. Interest saved is $103,448.79.' },
      { q: 'Does a lump sum lower the monthly mortgage payment on this page?', a: 'No. A $10,000 lump sum on the sample loan keeps the contractual payment at $1,896.20 and shortens the term to 327 months. A recast that lowers the payment is a different agreement. This page keeps the payment and cuts the term.' },
      { q: 'Why is the interest without extra payments $382,633.47?', a: 'That is the interest on $300,000 at 6.5% for 360 months using the standard amortizing payment of $1,896.20. The mortgage payment page shows the same interest. This page uses it as the baseline the extra principal is compared with.' },
      { q: 'Can I include property tax in the extra payment?', a: 'No. Tax, insurance, and PMI do not reduce the loan balance. Enter only extra principal. The mortgage calculator is the page that adds tax, insurance, and PMI to a housing payment without treating them as principal.' },
      { q: 'What happens if the extra payment is too small to cover the interest?', a: 'The page rejects the inputs and asks you to raise the extra amount or the lump sum. A payment that does not cover interest would leave the balance higher, and this model does not project a rising balance as a payoff.' }
    ],
    relatedLinks: [
      { slug: 'mortgage-calculator', label: 'Mortgage payment calculator', note: 'Principal and interest, plus tax, insurance, and PMI if you type them. $300,000 at 6.5% for 30 years is $1,896.20 before those extras. It does not apply an extra principal payment.' },
      { slug: 'amortization-calculator', label: 'Amortization calculator', note: 'The year-by-year and month-by-month schedule with no extra payment. Year 1 on this loan is $3,353.18 of principal and $19,401.27 of interest.' },
      { slug: 'loan-calculator', label: 'Personal and auto loan calculator', note: 'The same payment formula for a shorter installment loan. It does not track an extra monthly principal payment.' },
      { slug: 'house-affordability-calculator', label: 'How much house calculator', note: 'Starts from income and solves a price. This page starts from a balance you already owe.' },
      { slug: 'credit-card-payoff-calculator', label: 'Credit card payoff calculator', note: 'A revolving balance at a monthly rate, not a fixed mortgage payment.' }
    ]
  },
  'amortization-calculator': {
    title: 'Amortization Calculator: Monthly and Yearly Schedule | ClearCalc',
    h1: 'Amortization Calculator',
    description: 'Build the amortization schedule for a fixed monthly loan. On $300,000 at 6.5% for 30 years the payment is $1,896.20, year 1 interest is $19,401.27, and the balance after year 30 is $0.00.',
    intro: [
      'This amortization calculator lists how a fixed monthly payment splits between principal and interest. The sample is $300,000 at 6.5% for 30 years. The payment is $1,896.20 a month, total interest is $382,633.47, and the balance after the 360th payment is $0.00. The yearly view is the default. Each line is twelve payments. Switch to the monthly view when you want every month.',
      'The mortgage payment page uses this same payment and adds a short summary: year 1, year 15, and the final year, plus tax, insurance, and PMI if you type them. This page is the schedule itself. It does not add escrow. The mortgage payoff page is the one that adds extra principal and shortens the term. A schedule here assumes you pay exactly the contractual payment, on time, and the rate never changes.',
      'Early lines are mostly interest. Year 1 is $3,353.18 of principal and $19,401.27 of interest, and the balance is $296,646.82. Year 2 is $3,577.74 of principal and $19,176.70 of interest. Year 15 is $8,309.94 of principal and $14,444.51 of interest, with $217,677.42 still owed. Year 30 is $21,973.15 of principal and $781.30 of interest.'
    ],
    steps: [
      'Enter the loan amount, the annual rate, and the term in whole years. The sample is 300000, 6.5, and 30. The term can be from 1 to 40 years.',
      'Leave the view on yearly unless you want every month. A 30-year monthly view is 360 lines under the yearly totals.',
      'Press Calculate. The headline is the monthly principal-and-interest payment. Total interest and the schedule follow.',
      'Read a year line as the principal paid that year, the interest paid that year, and the balance after the last payment of that year.'
    ],
    howHeading: 'How each row of the schedule is built',
    howItWorks: [
      'The monthly rate is the annual percent divided by 100 and then by 12. The payment is the standard fully amortizing payment. Interest for a month is the balance at the start of the month times that rate. Principal is the payment minus that interest. The balance falls by the principal. The last month caps the principal at whatever is left, so the balance ends at zero rather than a fraction of a cent below zero.',
      'A year line adds the twelve principal amounts and the twelve interest amounts, then reports the balance after month 12, 24, and so on. The sums use the unrounded payment, and the displayed dollars are rounded to the cent afterwards. Adding the rounded principal and the rounded interest for a year can miss the rounded payment times 12 by a few cents. That is display rounding.',
      'The monthly view repeats the same loop and prints month 1 through the last month after the yearly lines. Month 1 on the sample is the first slice of the year-1 totals, not a different formula. Tax and insurance never enter the loop. If you wanted them in the housing payment, they belong on the mortgage page, outside the schedule.',
      'A zero rate makes interest zero and principal equal to the payment, which is the loan divided by the number of months. The balance falls in a straight line. An interest-only loan is not this page. The UK mortgage page has an interest-only option in pounds. This schedule always retires the US-dollar balance.'
    ],
    formula: 'r = annual percent / 100 / 12\nn = years × 12\nPayment M = principal × r × (1 + r) ^ n / ((1 + r) ^ n − 1), or principal / n when r is 0\nMonth interest = balance × r\nMonth principal = min(M − month interest, balance)\nBalance = balance − month principal\nYear principal and year interest are the sums of the twelve months\nThe displayed balance is the balance after that month or that year',
    formulaNotes: [
      'For $300,000 at 6.5% and 360 payments, M displays as $1,896.20 and total interest displays as $382,633.47. Year 1 principal displays as $3,353.18 and year 1 interest as $19,401.27.',
      'The mortgage payoff calculator keeps this same M and then adds extra principal. This schedule does not. If the two pages disagree on the no-extra loan, the inputs are not the same loan.'
    ],
    examplesHeading: 'Worked amortization examples',
    examples: [
      {
        title: '$300,000 at 6.5% for 30 years, yearly',
        paragraphs: [
          'The headline is $1,896.20 / month. Total interest is $382,633.47. Year 1 is principal $3,353.18, interest $19,401.27, balance $296,646.82. Year 15 is principal $8,309.94, interest $14,444.51, balance $217,677.42. Year 30 is principal $21,973.15, interest $781.30, balance $0.00.',
          'Interest in year 1 is more than five times the principal. By year 30 that relationship has flipped. The payment did not change. The balance it was charging interest on did.'
        ]
      },
      {
        title: 'The same loan, first months',
        paragraphs: [
          'Switch the view to monthly. Month 1 is the start of the year-1 line. The yearly totals are still printed above the months, so you can check that twelve month-lines add to the year.',
          'A servicer that rounds the payment to the cent before it builds the schedule can be a few cents off this unrounded payment by the final year. Use a matching coupon as a check. The direction of the schedule, interest first and principal later, is the part that does not depend on that cent.'
        ]
      },
      {
        title: 'A 15-year term on $300,000 at 6.5%',
        paragraphs: [
          'Change the years to 15. The payment rises and the interest falls, which is the same trade the mortgage page shows as $2,613.32 a month and $170,397.98 of interest. This page then lists 15 year-lines instead of 30.',
          'The higher payment is why the balance falls faster. It is not a different interest formula. It is the same formula with 180 payments instead of 360.'
        ]
      }
    ],
    table: {
      heading: 'Yearly amortization for $300,000 at 6.5% over 30 years',
      caption: 'Each row is the yearly line this calculator displays. The monthly payment is $1,896.20. Tax, insurance, and extra principal are not included.',
      headers: ['Year', 'Principal', 'Interest', 'Balance'],
      rows: [
        ['1', '$3,353.18', '$19,401.27', '$296,646.82'],
        ['2', '$3,577.74', '$19,176.70', '$293,069.08'],
        ['15', '$8,309.94', '$14,444.51', '$217,677.42'],
        ['30', '$21,973.15', '$781.30', '$0.00']
      ]
    },
    limitsHeading: 'What this amortization schedule leaves out',
    limits: [
      'Extra payments, a lump sum, biweekly drafts, interest-only months, and adjustable rates are outside the loop. The payoff calculator handles a level extra amount and one lump sum. It does not print this full grid.',
      'Property tax, insurance, and mortgage insurance are housing costs, not lines in the balance. Adding them here would make the principal look larger than the amount the lender applies to the loan.',
      'Fees, odd days before the first payment, and a payment that the lender rounds before accruing interest can move the final balance by a small amount. This page starts accrual on payment one with the unrounded payment.',
      'The loan is in US dollars and the rate is nominal, compounded monthly. A Canadian mortgage quoted with semi-annual compounding, and a UK repayment in pounds, are separate pages.'
    ],
    disclaimer: 'This amortization schedule is a fixed monthly model. It is not a lender’s statement and not a payoff quote.',
    faqs: [
      { q: 'What is the amortization of $300,000 at 6.5% for 30 years?', a: 'The payment is $1,896.20 a month and total interest is $382,633.47. Year 1 splits into $3,353.18 of principal and $19,401.27 of interest, leaving $296,646.82. Year 30 pays $21,973.15 of principal and $781.30 of interest, and the balance is $0.00.' },
      { q: 'Why is the first year of a mortgage almost all interest?', a: 'Interest is the rate times the balance, and the balance is largest at the start. On this sample the first year of interest is $19,401.27 and the first year of principal is $3,353.18. Later years reverse that split because the balance is smaller.' },
      { q: 'Does the amortization calculator include taxes and insurance?', a: 'No. The schedule is principal and interest only. The mortgage payment page can add annual property tax, annual insurance, and monthly PMI on top of the same $1,896.20 payment. Those amounts do not change the balance column here.' },
      { q: 'What is the difference between the yearly view and the monthly view?', a: 'Yearly adds each group of twelve months and shows one balance per year. Monthly prints every month after those year lines. The payment and the total interest do not change when you switch the view.' },
      { q: 'How do I see the effect of an extra mortgage payment?', a: 'Use the mortgage payoff calculator. An extra $200 a month on this sample loan pays it off in 277 months and saves $103,448.79 of interest. This schedule assumes you pay exactly $1,896.20 and no more.' }
    ],
    relatedLinks: [
      { slug: 'mortgage-calculator', label: 'Mortgage payment calculator', note: 'The same $1,896.20 payment, a year-1 summary, and optional tax, insurance, and PMI.' },
      { slug: 'mortgage-payoff-calculator', label: 'Mortgage payoff calculator', note: 'Extra monthly principal and a lump sum. An extra $200 on this loan saves 83 months.' },
      { slug: 'loan-calculator', label: 'Personal and auto loan calculator', note: 'Shorter installment loans. A $25,000 loan at 7.5% for 5 years is $500.95 a month there.' },
      { slug: 'uk-mortgage-calculator', label: 'UK mortgage calculator', note: 'Repayment or interest-only, in pounds, with the annual rate divided by 12.' },
      { slug: 'canada-mortgage-calculator', label: 'Canada mortgage calculator', note: 'Semi-annual compounding and an optional CMHC premium. Not this US monthly schedule.' }
    ]
  },
  'cd-calculator': {
    title: 'CD Calculator: APY, APR, and Maturity Value | ClearCalc',
    h1: 'CD Calculator',
    description: 'Find a certificate of deposit’s maturity value from an APR or an APY. $10,000 at 5% APR compounded monthly for 12 months matures at $10,511.62, which is a 5.116% APY.',
    intro: [
      'This CD calculator projects one deposit. There is no monthly contribution. You choose whether the rate you type is an APR, the nominal annual rate, or an APY, the effective annual yield. You choose how often it compounds and how many months the deposit stays in place. The sample is $10,000 at 5% APR, compounded monthly, for 12 months. The maturity value is $10,511.62. Interest earned is $511.62. The APY on that APR is 5.116%.',
      'APR and APY describe the same growth only after you account for compounding. An APR of 5% compounded monthly is not a 5% APY. The APY is (1 + 0.05 / 12) raised to the 12th power, minus 1, which displays as 5.116%. If you already have the APY and you type it in the APY mode, the page converts it back to a periodic rate at the compounding frequency you chose.',
      'A bank’s early-withdrawal penalty, a promotional bump, and a deposit that is added later are not in the maturity value. The investment calculator is the page for periodic contributions. This page is the single deposit held to term.'
    ],
    steps: [
      'Enter the deposit. The sample is 10000. It has to be above zero.',
      'Enter the rate and choose APR or APY. The sample is 5 and APR. For 5%, type 5, not 0.05.',
      'Choose how many times the rate compounds per year: monthly, quarterly, semiannual, annual, or daily using 365. Then enter the term in whole months, from 1 to 120.',
      'Press Calculate. The headline is the maturity value. Interest, the periodic rate, the APR, and the APY are listed under it.'
    ],
    howHeading: 'How APR and APY turn into a maturity value',
    howItWorks: [
      'If you enter an APR, the periodic rate is the APR divided by the number of compounds per year. The APY is (1 + periodic rate) raised to the compounds per year, minus 1. The deposit is then multiplied by (1 + periodic rate) once for every period in the term. A 12-month CD compounded monthly has 12 periods. A 12-month CD compounded daily has 365 periods, because the page uses 365 times the term in years, and 12 months is exactly one year.',
      'If you enter an APY, the page solves for the periodic rate that produces that yield at the frequency you chose, then grows the deposit by that periodic rate. The APR it reports is the periodic rate times the compounds per year. Typing the rounded APY 5.116 into APY mode, compounded monthly for 12 months, matures at $10,511.60 rather than $10,511.62. The two-cent gap is the rounding of 5.116%, not a second fee. The APR path on a full-precision 5% is the $10,511.62 result.',
      'The term in months is divided by 12 to get years, then multiplied by the compounds per year. An 18-month CD compounded quarterly has 4 × 1.5 = 6 periods. The page allows that fractional year. It does not require the term to land on a compounding anniversary beyond that exact period count.',
      'Daily compounding uses 365, not 366, and not a 360-day bank year. A certificate that pays actual days over a 360-day year will not match this maturity value. The page says so in the result.'
    ],
    formula: 'Years = months / 12\nPeriods = compounds per year × years\nIf the rate is an APR: periodic = APR / compounds per year\nAPY = (1 + periodic) ^ compounds per year − 1\nIf the rate is an APY: periodic = (1 + APY) ^ (1 / compounds per year) − 1\nAPR = periodic × compounds per year\nMaturity = deposit × (1 + periodic) ^ periods\nInterest = maturity − deposit',
    formulaNotes: [
      '$10,000 at 5% APR compounded monthly for 12 months is $10,000 × (1 + 0.05 / 12) ^ 12 = $10,511.62. The APY displays as 5.116%.',
      'The same deposit compounded annually at 5% APR for 12 months is one period at 5%, which is $10,500.00. Compounding frequency is the whole difference between those two maturity values.'
    ],
    examplesHeading: 'Worked CD examples',
    examples: [
      {
        title: '$10,000 at 5% APR, monthly, 12 months',
        paragraphs: [
          'The headline is $10,511.62. Interest is $511.62. The periodic rate displays as 0.4167%. The APR line is 5.000%. The APY line is 5.116%.',
          'There is one deposit and 12 compounding periods. Nothing is added on the way. A penalty for taking the money out at month 6 is not estimated. You would not receive this maturity value if you broke the certificate.'
        ]
      },
      {
        title: 'The same APR compounded once a year',
        paragraphs: [
          'Change compounds per year to annual and keep 5% APR and 12 months. The maturity value is $10,500.00. Interest is $500.00. The APY equals the APR when the rate compounds once a year, so both lines read 5%.',
          'The $11.62 gap versus monthly compounding is the interest on the interest inside the year. It is small on a one-year CD and larger when the term is several years, because each year’s APY then compounds again.'
        ]
      },
      {
        title: 'Typing the rounded APY instead of the APR',
        paragraphs: [
          'Choose APY, type 5.116, keep monthly compounding and 12 months. The maturity value is $10,511.60. The APR line comes back as 5.000% at the displayed precision, and the two cents are the digits that 5.116% already dropped.',
          'If a bank advertises the APY, use APY mode and type every digit they published. If they advertise the rate and the compounding, use APR mode. Mixing a rounded APY into the APR box treats 5.116 as a nominal rate and overstates the yield.'
        ]
      }
    ],
    table: {
      heading: 'Maturity of a $10,000 deposit at 5% for 12 months',
      caption: 'The APR rows type 5 as a nominal rate. The APY row types 5.116, which is the monthly APR’s yield rounded to three decimals. Figures are what this calculator displays.',
      headers: ['Rate entered', 'Compounding', 'Maturity', 'APY shown'],
      rows: [
        ['5% APR', 'Monthly', '$10,511.62', '5.116%'],
        ['5% APR', 'Annual', '$10,500.00', '5.000%'],
        ['5.116% APY', 'Monthly', '$10,511.60', '5.116%']
      ]
    },
    limitsHeading: 'What a CD maturity value leaves out',
    limits: [
      'Early-withdrawal penalties, a minimum balance fee, and a rate that steps up if you leave the deposit longer are not subtracted or added. The maturity value assumes the deposit stays for the whole term at the one rate.',
      'Interest may be taxed. This page does not withhold federal or state tax and does not know whether the CD is inside an IRA. The Roth page is about contribution limits, not about a bank CD.',
      'A 360-day year, a 365.25-day year, or compounding on business days only will not match the 365-day daily option. Monthly compounding is an exact count of months and does not care which calendar day the CD was opened.',
      'There is no periodic contribution. If you add money every month, use the investment calculator. Its sample of $10,000 plus $250 a month is a different product from this one deposit.'
    ],
    disclaimer: 'This CD value is compound growth of one deposit. It is not a bank quote, a rate lock, or tax advice.',
    faqs: [
      { q: 'What is the maturity value of $10,000 at 5% compounded monthly for one year?', a: '$10,511.62. Interest is $511.62. The APR is 5.000% and the APY is 5.116%. That is (1 + 0.05 / 12) raised to the 12th power, applied to $10,000.' },
      { q: 'What is the difference between APR and APY on a CD?', a: 'APR is the nominal annual rate. APY is the effective yield after compounding. A 5% APR compounded monthly has a 5.116% APY. Compounded annually, the APR and the APY are both 5%, and $10,000 matures at $10,500.00.' },
      { q: 'Why does typing a 5.116% APY miss the 5% APR result by two cents?', a: 'Because 5.116% is the APY rounded to three decimals. The full monthly compound of a 5% APR matures at $10,511.62. The rounded APY matures at $10,511.60. Use APR mode when the certificate quotes 5% compounded monthly.' },
      { q: 'Does this CD calculator add monthly deposits?', a: 'No. It is one deposit held to the term. The investment calculator is the page for a starting amount plus a monthly or yearly contribution. A savings goal page solves for the deposit that hits a target.' },
      { q: 'How does daily compounding work on this CD page?', a: 'The page uses 365 compounds per year, times the term in years. A 12-month term is 365 periods. It does not use 366 in a leap year and it does not use a 360-day bank year. A certificate written on one of those counts will differ.' }
    ],
    relatedLinks: [
      { slug: 'investment-calculator', label: 'Investment calculator', note: 'Starting amount plus ongoing contributions. Not a single CD deposit.' },
      { slug: 'compound-interest-calculator', label: 'Compound interest calculator', note: 'Monthly compounding and monthly deposits. The no-deposit path is the closer cousin of a CD.' },
      { slug: 'savings-goal-calculator', label: 'Savings goal calculator', note: 'The monthly deposit that reaches a target, rather than the maturity of a deposit you already have.' },
      { slug: 'apr-calculator', label: 'APR calculator', note: 'The APR of a loan after prepaid charges. A CD yield is not a loan APR.' },
      { slug: 'simple-interest-calculator', label: 'Simple interest calculator', note: '$10,000 at 5% for one year of simple interest is $500.00, not the $511.62 from monthly compounding.' }
    ]
  },
  'rent-vs-buy-calculator': {
    title: 'Rent vs Buy Calculator | ClearCalc',
    h1: 'Rent vs Buy Calculator',
    description: 'Compare the wealth from buying a home with the wealth from renting and investing the down payment. On a $400,000 home, $80,000 down, and $2,200 rent, owning is ahead by $16,074.46 after 7 years on the sample assumptions.',
    intro: [
      'This rent versus buy calculator compares two uses of the same cash. The buyer puts the down payment into a house and pays a mortgage, property tax, insurance, and maintenance. The renter invests the down payment and pays rent. Each month, whoever pays less in housing invests the difference. At the end of the stay the owner sells, pays a selling cost, and pays off what is left on the mortgage. The headline says who has more wealth, and by how much.',
      'The sample is a $400,000 home, $80,000 down, 6.5% for 30 years, a 7-year stay, $4,000 of property tax, $1,800 of insurance, maintenance at 1% of the price, 3% appreciation, a 6% selling cost, $2,200 rent growing at 3%, and a 5% return on invested cash. Owning is ahead by $16,074.46. Owner wealth is $173,100.59. Renter wealth is $157,026.13.',
      'The result is not advice to buy or to rent. It is the arithmetic of the assumptions you type. Change the stay, the appreciation, or the rent and the headline can flip. Closing costs on the purchase, mortgage insurance, and the tax deduction for mortgage interest are not in the model.'
    ],
    steps: [
      'Enter the price and the down payment in dollars. The down payment has to be less than the price. The sample is 400000 and 80000, which is 20% down. The loan is the difference.',
      'Enter the mortgage rate and the mortgage term, then the number of years you expect to stay. The stay can be shorter than the term. After the term ends, the mortgage payment stops and tax, insurance, and maintenance continue.',
      'Enter annual property tax, annual insurance, and maintenance as a percent of the original price. Then enter appreciation and the selling cost as percents of the future value.',
      'Enter monthly rent, how fast rent grows once a year, and the return earned on invested cash. Press Calculate. The headline names who is ahead.'
    ],
    howHeading: 'How the two ending wealth figures are built',
    howItWorks: [
      'The loan is the price minus the down payment. The principal-and-interest payment uses the standard monthly mortgage formula at the rate you type. On the sample that payment is $2,022.62. Month-1 cost of owning adds tax divided by 12, insurance divided by 12, and maintenance, and comes to $2,839.28. Maintenance is 1% of $400,000, which is $4,000 a year, or $333.33 a month. Tax and insurance and maintenance do not rise. Rent starts at $2,200 and steps up 3% at each anniversary.',
      'The renter’s investment pot starts as the $80,000 the buyer used as a down payment. Each month the pot compounds at a monthly rate that matches the annual investment return. If owning costs more than rent that month, the renter invests the difference. If rent costs more, the owner invests the difference. On the sample the owner pays more each month, so the renter’s pot receives the gap.',
      'After 7 years the home is worth $491,949.55, which is $400,000 grown at 3% a year. The mortgage balance is $289,331.98. Sale proceeds after a 6% selling cost and the mortgage are $173,100.59. The owner did not accumulate a side investment, because owning was the more expensive monthly payment, so owner wealth is those proceeds. Renter wealth is $157,026.13. The gap is $16,074.46. Housing payments made by the owner total $238,499.88. Rent paid totals $202,289.00. Those cash totals are not the wealth. The wealth is what is left after the sale and after investing the monthly gap.',
      'A check with a zero rate, zero growth, and zero investment return is useful. A $300,000 house, $60,000 down, a 0% thirty-year loan, a 10-year stay, no tax or maintenance, no appreciation, no selling cost, and $1,500 rent leaves owning ahead by $180,000.00. The owner’s wealth is $240,000.00 and the renter’s is $60,000.00. You got the principal back through the sale and you paid less than the rent. Put a selling cost or a real mortgage rate back in before you treat that as a decision.'
    ],
    formula: 'Loan = price − down payment\nMonthly rate r = mortgage rate / 100 / 12\nPrincipal and interest uses the standard amortizing payment over the term\nMonth-1 owning cost = principal and interest + tax / 12 + insurance / 12 + price × maintenance percent / 100 / 12\nRent rises once a year by the rent-growth percent\nInvestment compounds monthly at (1 + annual return) ^ (1 / 12) − 1\nThe person who pays less housing that month invests the difference\nHome value = price × (1 + appreciation) ^ years stayed\nSale proceeds = home value × (1 − selling percent) − remaining balance\nOwner wealth = sale proceeds + the owner’s invested surplus\nRenter wealth = the invested down payment, plus any invested surplus\nThe headline is the difference',
    formulaNotes: [
      'On the sample, month-1 principal and interest is $2,022.62 and the full month-1 owning cost is $2,839.28. Sale proceeds of $173,100.59 already subtract the $289,331.98 balance and the 6% selling cost from the $491,949.55 value.',
      'The zero-rate check, $300,000 with $60,000 down and $1,500 rent for 10 years, is owning ahead by $180,000.00. It is a test of the accounting, not a market.'
    ],
    examplesHeading: 'Worked rent and buy examples',
    examples: [
      {
        title: '$400,000 home, $80,000 down, seven years, $2,200 rent',
        paragraphs: [
          'The headline is owning ahead by $16,074.46. Owner wealth is $173,100.59. Renter wealth is $157,026.13. The house is worth $491,949.55 and the loan balance is $289,331.98.',
          'The owner paid $238,499.88 in housing and the renter paid $202,289.00 in rent. Owning still finishes ahead because the sale returns the equity after the 6% cost. A higher selling cost or flatter appreciation can erase that $16,074.46.'
        ]
      },
      {
        title: 'A zero-rate check',
        paragraphs: [
          'Price 300000, down payment 60000, rate 0, term 30, stay 10, tax 0, insurance 0, maintenance 0, appreciation 0, selling cost 0, rent 1500, rent growth 0, investment return 0. The headline is owning ahead by $180,000.00.',
          'Owner wealth is $240,000.00 and renter wealth is $60,000.00. The renter still has the original down payment because the investment return is zero, and the owner gets the principal back because the loan had no interest and the sale had no cost. Use it to see the machinery. Then put the sample rate and the selling cost back.'
        ]
      },
      {
        title: 'What flips the result',
        paragraphs: [
          'The sample’s lead for owning is $16,074.46 on a 7-year stay with 3% appreciation and a 6% selling cost. A shorter stay makes the selling cost a larger share of the equity you built. A higher rent, or rent that grows faster, moves the comparison toward owning. A higher investment return moves it toward renting, because the down payment the renter kept is compounding.',
          'Run the change you actually believe. The page will not pick a “normal” appreciation rate for your city. The 3% in the sample is a typed assumption, not a forecast.'
        ]
      }
    ],
    table: {
      heading: 'Sample rent-versus-buy results',
      caption: 'The first row is the form sample. The second row is a zero-rate check with no appreciation, no selling cost, and no investment return. Wealth figures are what this calculator displays.',
      headers: ['Case', 'Headline', 'Owner wealth', 'Renter wealth'],
      rows: [
        ['$400,000, 7 years, sample rates', 'Owning ahead by $16,074.46', '$173,100.59', '$157,026.13'],
        ['$300,000, 0% loan, 10 years, $1,500 rent', 'Owning ahead by $180,000.00', '$240,000.00', '$60,000.00']
      ]
    },
    limitsHeading: 'What this rent-versus-buy comparison leaves out',
    limits: [
      'Purchase closing costs, mortgage insurance, HOA dues, and repairs above the maintenance percent are not added. A down payment under 20% often brings mortgage insurance. The mortgage page can price a PMI amount. This comparison does not.',
      'Mortgage interest and property tax may be deductible, and rent is not. The page does not apply a tax bracket. A household that itemizes could value owning more than this pretax wealth gap.',
      'Tax, insurance, and maintenance do not inflate. Rent does, once a year. If you expect tax to rise with the house, the owning cost here is too low. Appreciation is a single annual rate, not a price path.',
      'The mortgage uses a US-style monthly rate. A UK repayment in pounds and a Canadian semi-annual rate are on their own pages and are not converted into this wealth comparison.'
    ],
    disclaimer: 'This rent-versus-buy result is the arithmetic of the rates you type. It is not advice to rent or buy, and it is not a loan offer.',
    faqs: [
      { q: 'Is it cheaper to rent or buy on the sample $400,000 home?', a: 'On these assumptions, owning is ahead by $16,074.46 after 7 years. Owner wealth is $173,100.59 and renter wealth is $157,026.13. The assumptions include 3% appreciation, a 6% selling cost, $2,200 rent growing at 3%, and a 5% return on the renter’s invested down payment.' },
      { q: 'Why is ending wealth not the same as the cash you paid?', a: 'The owner pays $238,499.88 and the renter pays $202,289.00 of rent, but the owner also holds a house that sells for $173,100.59 after the mortgage and the selling cost, and the renter holds an investment account worth $157,026.13. The headline compares that wealth, not the cash that left each month.' },
      { q: 'Does the rent versus buy calculator include PMI?', a: 'No. The sample down payment is 20%, and the page never adds mortgage insurance. A smaller down payment can make the comparison incomplete. The mortgage calculator is where a monthly PMI amount can be added to principal and interest.' },
      { q: 'What does the zero-rate example prove?', a: 'That a $300,000 house with $60,000 down, a 0% loan, no selling cost, and $1,500 rent for 10 years leaves owning ahead by $180,000.00. It checks the accounting. It is not a market forecast. Put a rate and a selling cost back in for a decision.' },
      { q: 'Can I use this for a UK or Canadian purchase?', a: 'The mortgage math here divides the annual rate by 12 and reports US dollars. A UK repayment or interest-only mortgage in pounds has its own page. A Canadian mortgage with semi-annual compounding and a CMHC premium has its own page. Do not paste those payments into this wealth model without saying so.' }
    ],
    relatedLinks: [
      { slug: 'mortgage-calculator', label: 'Mortgage payment calculator', note: 'Principal, interest, tax, insurance, and PMI. The sample principal-and-interest line here is $2,022.62, which is a different loan from the $300,000 example on that page.' },
      { slug: 'rent-affordability-calculator', label: 'Rent affordability calculator', note: 'Compares rent with 30% of gross income. It does not project a sale.' },
      { slug: 'house-affordability-calculator', label: 'How much house calculator', note: 'Starts from income and a payment cap. This page starts from a price and a rent.' },
      { slug: 'down-payment-calculator', label: 'Down payment calculator', note: 'Splits a price into cash and a loan. Twenty percent of $400,000 is the $80,000 used in this sample.' },
      { slug: 'uk-mortgage-calculator', label: 'UK mortgage calculator', note: 'Repayment or interest-only in pounds. Not this wealth comparison.' },
      { slug: 'canada-mortgage-calculator', label: 'Canada mortgage calculator', note: 'Semi-annual compounding and CMHC premiums, in Canadian dollars.' }
    ]
  },
  'uk-mortgage-calculator': {
    title: 'UK Mortgage Calculator: Repayment and Interest-Only | ClearCalc',
    h1: 'UK Mortgage Calculator',
    description: 'Estimate a UK repayment or interest-only mortgage in pounds. £200,000 at 4.5% for 25 years is £1,111.66 a month on repayment, or £750.00 a month interest-only.',
    intro: [
      'This UK mortgage calculator prices two contracts in pounds. A repayment mortgage uses a level payment that brings the balance to zero over the term. An interest-only mortgage charges the monthly interest and leaves the amount borrowed still due at the end. The sample is £200,000 at 4.5% for 25 years. Repayment is £1,111.66 a month. Interest-only is £750.00 a month.',
      'The monthly rate is the annual rate divided by 12. Many UK lenders accrue interest daily, so a statement can differ by a small amount from this figure. The page is a comparison model, not an offer and not a European Standardised Information Sheet. Fees, an introductory rate that later steps up, and an overpayment are not included.',
      'Stamp Duty Land Tax is not added to the payment. The England stamp duty page estimates that tax for a purchase in England or Northern Ireland. A Scottish purchase uses LBTT and a Welsh purchase uses LTT. This page does not convert pounds to dollars and it does not use the Canadian semi-annual compounding convention.'
    ],
    steps: [
      'Enter the amount borrowed in pounds. The sample is 200000. That should be the loan, not the purchase price, unless you are borrowing the whole price.',
      'Enter the annual interest rate as a percent. The sample is 4.5. Type 4.5, not 0.045.',
      'Enter the term in whole years, from 1 to 40. The sample is 25, which is 300 monthly payments.',
      'Choose repayment or interest-only and press Calculate. The headline is the monthly amount. Total interest is underneath.'
    ],
    howHeading: 'How a UK repayment payment is calculated',
    howItWorks: [
      'The monthly rate r is the annual percent divided by 100 and then by 12. For 4.5% that is 0.00375. A repayment payment is the standard amortizing payment: balance × r × (1 + r) ^ n / ((1 + r) ^ n − 1), with n equal to years times 12. On £200,000 for 25 years the payment displays as £1,111.66. Total paid is £333,499.49 and total interest is £133,499.49.',
      'Interest-only ignores that formula. The monthly interest is the balance times r, and the balance never falls. On £200,000 at 4.5% the interest is exactly £750.00 a month, because 200,000 × 0.045 / 12 = 750. Over 300 months the interest totals £225,000.00, and you still owe £200,000.00. The repayment contract costs more each month and less interest overall, and it retires the capital. The interest-only contract is cheaper each month only because the capital is postponed.',
      'A lender that charges interest daily will multiply a daily rate by the actual days in the month. This page uses equal months. Use it to compare a rate and a term. Use the lender’s illustration for the direct debit.',
      '£250,000 at the same 4.5% for 25 years on repayment is £1,389.58 a month, total paid £416,874.36, and interest £166,874.36. The payment scales with the amount borrowed when the rate and the term stay put. It does not scale in a straight line if you change the rate.'
    ],
    formula: 'Monthly rate r = annual percent / 100 / 12\nPayments n = years × 12\nRepayment = principal × r × (1 + r) ^ n / ((1 + r) ^ n − 1)\nIf r is 0, repayment = principal / n\nInterest-only = principal × r\nInterest-only total interest = interest-only payment × n\nThe interest-only balance at the end is still the amount borrowed',
    formulaNotes: [
      '£200,000 at 4.5% for 300 months is £1,111.66 on repayment. Total interest is £133,499.49. The interest-only payment is £750.00 and the capital is unpaid.',
      'Daily interest, a fee added to the loan, and an overpayment are not in either figure. The mortgage payoff page, in US dollars, is the one that models extra principal.'
    ],
    examplesHeading: 'Worked UK mortgage examples',
    examples: [
      {
        title: '£200,000 at 4.5% for 25 years, repayment',
        paragraphs: [
          'The headline is £1,111.66 / month. There are 300 payments. Total paid is £333,499.49. Total interest is £133,499.49.',
          'That interest is the cost of borrowing if the rate never changes and every payment is made. A product fee paid up front is extra. It is not inside the £1,111.66.'
        ]
      },
      {
        title: 'The same loan, interest-only',
        paragraphs: [
          'Switch the type to interest-only. The headline is £750.00 / month. The balance at the end of the term is still £200,000.00. Interest over 300 months is £225,000.00.',
          'The monthly bill is £361.66 lower than repayment, and the capital has not been touched. You need a separate plan for the £200,000. This page does not build that plan. It only shows that the balance does not fall.'
        ]
      },
      {
        title: '£250,000 on repayment at the same rate and term',
        paragraphs: [
          'Amount borrowed 250000, rate 4.5, 25 years, repayment. The payment is £1,389.58 a month. Total paid is £416,874.36. Total interest is £166,874.36.',
          'Stamp duty on the purchase is a separate bill, usually due within 14 days of completion. It is not one twelfth of this payment. A £430,000 main home in England is £11,500 of SDLT on the stamp duty page under the rates from 1 April 2025. That tax is not added here.'
        ]
      }
    ],
    table: {
      heading: 'UK mortgage payments at 4.5% for 25 years',
      caption: 'Repayment retires the balance. Interest-only does not. Amounts are what this calculator displays, in pounds, using a monthly rate of the annual rate divided by 12.',
      headers: ['Amount borrowed', 'Type', 'Monthly payment', 'Interest over the term'],
      rows: [
        ['£200,000', 'Repayment', '£1,111.66', '£133,499.49'],
        ['£200,000', 'Interest-only', '£750.00', '£225,000.00'],
        ['£250,000', 'Repayment', '£1,389.58', '£166,874.36']
      ]
    },
    limitsHeading: 'What this UK mortgage estimate leaves out',
    limits: [
      'Daily interest, fees, cashback, an offset balance, and a rate that changes after an introductory period are not modeled. Two products with the same headline rate can have different monthly amounts once the lender’s day count is applied.',
      'Overpayments reduce the balance or the term, depending on the contract. This page does not apply them. The US mortgage payoff page is a different currency and a different market.',
      'Stamp duty, LBTT, and LTT are not added. Nor is buildings insurance. The payment is the loan only.',
      'Affordability rules, a stress test, and a maximum loan-to-income ratio are not applied. A payment the formula can compute is not a payment a lender will offer.'
    ],
    disclaimer: 'This UK mortgage figure is a monthly model for comparison. It is not a mortgage offer, not an illustration from a lender, and not advice.',
    faqs: [
      { q: 'What is the monthly repayment on a £200,000 mortgage at 4.5% for 25 years?', a: '£1,111.66. Total paid over 300 months is £333,499.49, so the interest is £133,499.49. The monthly rate is 4.5% divided by 12. A lender that accrues interest daily can differ by a small amount.' },
      { q: 'What is the interest-only payment on £200,000 at 4.5%?', a: '£750.00 a month. The balance stays £200,000. Over 25 years the interest totals £225,000.00. The repayment on the same loan is £1,111.66 and does retire the capital.' },
      { q: 'Does this UK mortgage calculator include stamp duty?', a: 'No. Stamp Duty Land Tax for England and Northern Ireland is on the stamp duty page. A £430,000 main home at the rates from 1 April 2025 is £11,500 there. Scotland uses LBTT and Wales uses LTT. None of those taxes are added to this monthly payment.' },
      { q: 'Why might a lender’s figure differ from £1,111.66?', a: 'This page divides the annual rate by 12 and uses equal months. Many UK lenders charge interest by the day. Fees added to the loan, and a rate that lasts only for an introductory period, also change the direct debit. Use the lender’s illustration for the amount you will pay.' },
      { q: 'Is a UK repayment the same formula as a US mortgage?', a: 'The algebra is the same monthly amortizing payment. The currency, the market, and the usual term are not. The US mortgage page is in dollars and can add tax, insurance, and PMI. This page is in pounds and offers interest-only as a second contract.' }
    ],
    relatedLinks: [
      { slug: 'england-stamp-duty-calculator', label: 'Stamp duty calculator England', note: 'SDLT on a residential purchase. A £430,000 main home is £11,500 at the rates from 1 April 2025. It is not added to this payment.' },
      { slug: 'scotland-lbtt-calculator', label: 'Scotland LBTT calculator', note: 'Land and Buildings Transaction Tax, not SDLT and not the mortgage payment.' },
      { slug: 'wales-land-transaction-tax-calculator', label: 'Wales land transaction tax calculator', note: 'LTT in pounds. A different statute from SDLT.' },
      { slug: 'mortgage-calculator', label: 'US mortgage payment calculator', note: 'Dollars, with optional tax, insurance, and PMI. Not a sterling repayment.' },
      { slug: 'uk-take-home-pay-calculator', label: 'UK take-home pay calculator', note: '2026/27 income tax and National Insurance. It does not price a mortgage.' }
    ]
  },
  'canada-mortgage-calculator': {
    title: 'Canada Mortgage Calculator: CMHC and Semi-Annual Rate | ClearCalc',
    h1: 'Canada Mortgage Calculator',
    description: 'Estimate a Canadian mortgage using a rate compounded semi-annually, an optional CMHC premium, and monthly, bi-weekly, or accelerated bi-weekly payments. A $500,000 home with 5% down at 4.5% for 25 years is $2,734.16 a month after the 4% CMHC premium.',
    intro: [
      'This Canada mortgage calculator starts from a price and a down payment, then amortizes the loan with the compounding Canadian mortgages use in quotations: a nominal annual rate compounded semi-annually. The payment rate is the equivalent rate for the period you chose. Monthly, bi-weekly, and accelerated bi-weekly are separate choices.',
      'If you ask for the standard CMHC homeowner premium, it is looked up from the loan-to-value ratio and added to the amount amortized. The schedule is the one CMHC publishes for an owner-occupied property of 1 to 4 units: 0.60% up to and including 65% loan-to-value, 1.70% from 65.01% to 75%, 2.40% from 75.01% to 80%, 2.80% from 80.01% to 85%, 3.10% from 85.01% to 90%, and 4.00% from 90.01% to 95%. A non-traditional down payment in that top band is 4.50% instead of 4.00%. The source is CMHC’s premium page for homeowner and small rental loans on cmhc-schl.gc.ca.',
      'The sample is a $500,000 price, a $25,000 down payment, 4.5%, 25 years, monthly payments, and the standard premium. Loan-to-value is 95.00%. The premium is 4.00%, which is $19,000.00, and the amount amortized is $494,000.00. The payment is $2,734.16 a month.'
    ],
    steps: [
      'Enter the price and the down payment in Canadian dollars. The sample is 500000 and 25000. The down payment has to be less than the price.',
      'Enter the quoted annual rate. The sample is 4.5, meaning 4.5% compounded semi-annually, which is how Canadian fixed-rate mortgages are quoted.',
      'Enter the amortization in whole years, from 1 to 30. Choose monthly, bi-weekly, or accelerated bi-weekly.',
      'Choose whether to add the standard CMHC premium, to skip the premium, or to use the non-traditional down-payment rate. The non-traditional rate applies only from 90.01% to 95% loan-to-value. Press Calculate.'
    ],
    howHeading: 'How the Canadian payment and the CMHC premium are calculated',
    howItWorks: [
      'Loan-to-value is the loan before the premium, divided by the price. On the sample, $475,000 divided by $500,000 is 95.00%, so the standard premium is 4.00% of $475,000, which is $19,000.00. That premium is added to the loan. The payment is calculated on $494,000.00. Provincial sales tax on the premium, which Ontario, Quebec, and Saskatchewan charge and which cannot be added to the loan, is not included.',
      'The equivalent rate per payment is (1 + annual rate / 2) raised to the power of (2 / payments per year), minus 1. A monthly payment uses 12 periods a year. A bi-weekly payment uses 26. Accelerated bi-weekly takes half of the monthly payment and collects it 26 times a year, so the year contains one extra monthly payment. On the sample loan, accelerated bi-weekly is $1,367.08 every two weeks and the balance is scheduled over 564 payments rather than 300 months.',
      'A 20% down payment on the same $500,000 price is $100,000, loan-to-value 80.00%, and the standard premium in that band is 2.40% if you still ask for it. Choosing “do not add a premium” leaves the premium at zero even when the loan-to-value is high. High-ratio loans in Canada are generally insured. The zero option is there so you can see the loan without the premium, not because a 5% down payment is uninsured.',
      'CMHC Home Start, for a first home or a newly built home with a longer amortization, uses a different premium table: 3.00%, 3.30%, 4.20%, and 4.70% across the bands from 80.01% upward. This page does not use that table. A 0.20% surcharge that appears on some refinance files for an amortization beyond 25 years is not added either. Exactly 90.00% loan-to-value is the 3.10% band. The 4.00% band starts at 90.01%.'
    ],
    formula: 'Loan before premium = price − down payment\nLoan-to-value = loan before premium / price × 100\nStandard CMHC premium, owner-occupied 1–4 units:\n  up to 65%: 0.60%\n  65.01% to 75%: 1.70%\n  75.01% to 80%: 2.40%\n  80.01% to 85%: 2.80%\n  85.01% to 90%: 3.10%\n  90.01% to 95%: 4.00%, or 4.50% for a non-traditional down payment\nPremium dollars = loan before premium × rate\nAmount amortized = loan before premium + premium, when you ask for it\nPayment rate = (1 + annual rate / 2) ^ (2 / payments per year) − 1\nAccelerated bi-weekly payment = half of the monthly payment, paid 26 times a year',
    formulaNotes: [
      'The sample premium is 4% of $475,000 = $19,000. The monthly payment on $494,000 at 4.5% compounded semi-annually for 25 years is $2,734.16. Source of the percent: CMHC’s homeowner premium schedule.',
      'Bi-weekly on a $500,000 price with $100,000 down, no premium, 4.5%, and 25 years is $1,020.78 every two weeks, for 650 payments. That is 25 × 26. Accelerated bi-weekly on the insured sample is a shorter count than 25 × 26 because half of a monthly payment, paid 26 times, retires the loan sooner.'
    ],
    examplesHeading: 'Worked Canadian mortgage examples',
    examples: [
      {
        title: '$500,000 with 5% down, 4.5%, 25 years, monthly, standard CMHC',
        paragraphs: [
          'Down payment $25,000. Loan before the premium $475,000.00. Loan-to-value 95.00%. Premium 4.00%, $19,000.00. Amount amortized $494,000.00. The headline is $2,734.16 / month, for 300 payments.',
          'The premium is the CMHC standard homeowner rate, added to the loan. Provincial sales tax on that premium is not in the $19,000.00. Home Start’s 4.20% band for this loan-to-value is not used.'
        ]
      },
      {
        title: 'The same insured loan, accelerated bi-weekly',
        paragraphs: [
          'Keep the sample and switch the frequency to accelerated bi-weekly. The payment is $1,367.08 every two weeks, and the schedule runs 564 payments. Half of the monthly payment, taken 26 times a year, is more than twelve monthly payments, so the amortization ends sooner than 25 years.',
          'Ordinary bi-weekly is a different button. It calculates a payment that still fills the full amortization at 26 payments a year. It is smaller than the accelerated payment and it does not finish early.'
        ]
      },
      {
        title: '20% down and no premium, bi-weekly',
        paragraphs: [
          'Price 500000, down payment 100000, rate 4.5, 25 years, bi-weekly, and do not add a premium. Loan-to-value is 80%. The headline is $1,020.78 / two weeks, for 650 payments. No CMHC line is added.',
          'If you instead ask for the standard premium at 80.00% loan-to-value, the table charges 2.40%, because 80% is still inside the band that ends at 80%. The next band, 2.80%, starts at 80.01%. The page follows those published edges.'
        ]
      }
    ],
    table: {
      heading: 'CMHC standard premium used on this page',
      caption: 'Premium on the total loan amount for an owner-occupied property of 1 to 4 units, from CMHC’s homeowner schedule. Home Start rates are not listed because this calculator does not apply them. The non-traditional rate replaces 4.00% only from 90.01% to 95%.',
      headers: ['Loan-to-value', 'Standard premium', 'Non-traditional down payment'],
      rows: [
        ['Up to 65%', '0.60%', 'Not on this band'],
        ['65.01% to 75%', '1.70%', 'Not on this band'],
        ['75.01% to 80%', '2.40%', 'Not on this band'],
        ['80.01% to 85%', '2.80%', 'Not on this band'],
        ['85.01% to 90%', '3.10%', 'Not on this band'],
        ['90.01% to 95%', '4.00%', '4.50%']
      ]
    },
    limitsHeading: 'What this Canadian mortgage estimate leaves out',
    limits: [
      'Provincial sales tax on the insurance premium is not added. In Ontario, Quebec, and Saskatchewan that tax is charged and it cannot be folded into the loan. The premium dollars here are the CMHC rate only.',
      'CMHC Home Start premiums, portability credits, a blended amortization surcharge, and the multi-unit rental schedule are not applied. A loan-to-value above 95% is rejected because the published homeowner schedule stops there.',
      'The quoted rate is assumed to be compounded semi-annually for the whole amortization. A variable rate, a payment that the lender rounds to the cent before accruing, and a prepayment privilege are not modeled.',
      'This is not a US mortgage and not a UK repayment. Those pages divide a nominal annual rate by 12 and use a different currency. They do not add a CMHC premium.'
    ],
    disclaimer: 'This Canadian payment uses CMHC’s published homeowner premium schedule and semi-annual compounding as general information. It is not a lender approval, not a CMHC quote, and not advice.',
    faqs: [
      { q: 'How much is the CMHC premium on a $500,000 home with 5% down?', a: 'Loan-to-value is 95.00%, so the standard homeowner premium is 4.00% of the $475,000 loan, which is $19,000.00. Added to the loan, the amount amortized is $494,000.00. At 4.5% compounded semi-annually for 25 years the monthly payment is $2,734.16. Provincial sales tax on the premium is not included.' },
      { q: 'What CMHC rates does this Canada mortgage calculator use?', a: 'The standard schedule for an owner-occupied property of 1 to 4 units: 0.60%, 1.70%, 2.40%, 2.80%, 3.10%, and 4.00% as loan-to-value rises, and 4.50% for a non-traditional down payment from 90.01% to 95%. The source is CMHC’s premium page. Home Start’s higher table is not used.' },
      { q: 'What is an accelerated bi-weekly payment?', a: 'Half of the monthly payment, paid every two weeks, 26 times a year. On the insured sample that is $1,367.08 and the schedule is 564 payments, shorter than 25 years. Ordinary bi-weekly is calculated to last the full amortization and is a smaller payment.' },
      { q: 'Why is the interest rate compounded semi-annually?', a: 'Canadian fixed-rate mortgages are quoted that way. The page converts the quote into an equivalent monthly or bi-weekly rate with (1 + rate / 2) ^ (2 / payments per year) − 1. A US mortgage page that simply divides the rate by 12 is a different convention and a different currency.' },
      { q: 'Does 90% loan-to-value use the 4% CMHC premium?', a: 'No. Exactly 90.00% is in the 3.10% band, which runs through 90%. The 4.00% band starts at 90.01%. A $600,000 price with $60,000 down is 90.00% and takes 3.10% if you ask for the standard premium.' }
    ],
    relatedLinks: [
      { slug: 'mortgage-calculator', label: 'US mortgage payment calculator', note: 'A nominal rate divided by 12, in US dollars, with tax, insurance, and PMI. It does not add a CMHC premium.' },
      { slug: 'uk-mortgage-calculator', label: 'UK mortgage calculator', note: 'Repayment or interest-only in pounds. Not semi-annual compounding.' },
      { slug: 'ontario-take-home-pay-calculator', label: 'Ontario take-home pay calculator', note: '2026 tax, CPP, and EI. Not a mortgage payment, and not the provincial sales tax on a CMHC premium.' },
      { slug: 'british-columbia-take-home-pay-calculator', label: 'British Columbia take-home pay calculator', note: '2026 B.C. tax on a salary. A different question from this loan.' },
      { slug: 'house-affordability-calculator', label: 'How much house calculator', note: 'A US income-based price. It does not use CMHC premiums or semi-annual compounding.' }
    ]
  },
  'random-number-generator': {
    title: 'Random Number Generator | ClearCalc',
    h1: 'Random Number Generator',
    description: 'Draw whole numbers or decimals from a minimum to a maximum, with or without duplicates. Each draw uses crypto.getRandomValues, and the minimum and maximum are included.',
    intro: [
      'This random number generator draws from a range you set. You choose the minimum, the maximum, how many numbers you want, whether duplicates are allowed, and how many decimal places to keep. Whole numbers use 0 decimal places. The minimum and the maximum are both possible results. A draw of five different whole numbers from 1 to 100 is the sample the form starts with.',
      'The draw uses crypto.getRandomValues, the same browser API that fills a typed array with cryptographically strong random bytes. It does not use Math.random. The page maps those bytes onto the range without the usual leftover bias of a simple remainder: values that would make some results more likely are discarded and drawn again. Nothing you generate is stored.',
      'Pressing Calculate again makes a new list. The tests for this page check the mapping with a stand-in source of bytes, because a live draw is not a number you can lock in advance. The range rules themselves are fixed: the count, the decimal places, and the rejection of a range that is too small for a unique list.'
    ],
    steps: [
      'Enter the minimum and the maximum. The maximum has to be at least the minimum. The sample is 1 and 100.',
      'Enter how many numbers you want, from 1 to 50. Choose whether they must all be different or whether duplicates are allowed.',
      'Enter decimal places from 0 to 6. Zero means whole numbers. One decimal place on a minimum of 0 and a maximum of 1 can return 0.0, 0.1, and so on through 1.0.',
      'Press Calculate. A short list is the headline. A longer list is counted in the headline and written out underneath. Run it again for a different draw.'
    ],
    howHeading: 'How a draw stays inside the range',
    howItWorks: [
      'The page multiplies the minimum and the maximum by 10 raised to the number of decimal places and rounds to whole steps. A request for one decimal place from 1.2 to 1.5 uses the steps 1.2, 1.3, 1.4, and 1.5. Each step is equally likely. The ends are included.',
      'A single draw asks crypto.getRandomValues for a 32-bit integer. If the number of steps does not divide 2^32 evenly, the integers at the top of that range are thrown away and a new integer is requested. The kept integer is then reduced modulo the number of steps. That rejection step is what keeps the first steps from being slightly more common than the last ones.',
      'Unique draws keep a set of the steps already used. If the next step is already in the set, it is ignored and another is requested. If you ask for more unique values than the range contains, the page stops with an error instead of looping. Five different numbers from 1 to 3 is rejected. Five different numbers from 1 to 100 is not.',
      'Decimal results are printed with the exact number of places you asked for, so 0.10 stays 0.10 rather than collapsing to 0.1. Whole numbers are printed without a decimal point. The headline shows the list when there are eight or fewer numbers, and otherwise shows the count.'
    ],
    formula: 'Steps = round(maximum × 10^decimals) − round(minimum × 10^decimals) + 1\nEach draw picks a step uniformly with crypto.getRandomValues\nIntegers that would bias a remainder are discarded and redrawn\nUnique mode skips a step that was already used\nDisplayed value = chosen step / 10^decimals\nCount is from 1 to 50. Decimal places are from 0 to 6',
    formulaNotes: [
      'From 1 to 10 with 0 decimal places there are 10 possible results, and both 1 and 10 can appear. A unique request for 10 numbers is a shuffle of that whole range. A unique request for 11 numbers is rejected.',
      'The live button cannot be expected to repeat a previous list. The pure range function, given a fixed sequence of 32-bit integers, is what the tests lock down.'
    ],
    examplesHeading: 'Worked random-number examples',
    examples: [
      {
        title: 'Five different whole numbers from 1 to 100',
        paragraphs: [
          'Minimum 1, maximum 100, count 5, all different, 0 decimal places. The headline is five whole numbers. Each is between 1 and 100, and none is repeated. Running the button again replaces the list.',
          'The detail line repeats the numbers and says duplicates were not allowed. The page does not sort them. The order is the order they were drawn.'
        ]
      },
      {
        title: 'Decimals from 0 to 1',
        paragraphs: [
          'Minimum 0, maximum 1, count 3, duplicates allowed, 1 decimal place. Each result is one of 0.0, 0.1, 0.2, up to 1.0. Duplicates can appear because you allowed them. A unique draw of 3 from that 11-step range is also valid. A unique draw of 12 is not.',
          'Two decimal places make the step 0.01. The range then has 101 values from 0.00 to 1.00. The page rounds the ends to the decimal places first, so a minimum of 0.004 at 2 decimal places starts at 0.00.'
        ]
      },
      {
        title: 'A range that cannot supply the unique list',
        paragraphs: [
          'Minimum 1, maximum 3, count 5, all different. The calculator rejects the draw. There are only three whole numbers in the range, and five different ones do not exist.',
          'Allow duplicates, or widen the maximum, or lower the count. The error is about the size of the range, not about the random source.'
        ]
      }
    ],
    table: {
      heading: 'How many distinct values a range contains',
      caption: 'The count of distinct values includes both ends after rounding to the decimal places. A unique request larger than this count is rejected. These counts do not depend on the random draw.',
      headers: ['Minimum', 'Maximum', 'Decimal places', 'Distinct values'],
      rows: [
        ['1', '10', '0', '10'],
        ['1', '100', '0', '100'],
        ['0', '1', '1', '11'],
        ['0', '1', '2', '101'],
        ['−5', '5', '0', '11']
      ]
    },
    limitsHeading: 'What this generator does not do',
    limits: [
      'It does not draw from a normal distribution, a weighted list, or a set of words. Every remaining step in the numeric range is equally likely. A lottery that removes numbers by a different rule is not this page.',
      'It is not a password generator and it does not mix letters. The output is a list of numbers. Do not use a short public draw as a secret.',
      'The count stops at 50 and the decimal places stop at 6. A range wider than 2^32 steps is rejected. Those caps keep the rejection sampling inside one 32-bit draw.',
      'A result is not saved. Refreshing the page or pressing Calculate replaces it. There is no seed box, so you cannot replay a draw from a seed on this form.'
    ],
    disclaimer: 'This generator draws uniform numbers with crypto.getRandomValues. It is not a lottery, a password, or a stored random sample.',
    faqs: [
      { q: 'Does this random number generator include the minimum and the maximum?', a: 'Yes. A whole-number draw from 1 to 10 can return 1 and it can return 10. With one decimal place, a draw from 0 to 1 can return 0.0 and 1.0. The ends are steps, not boundaries that are left out.' },
      { q: 'Why does the generator use crypto.getRandomValues instead of Math.random?', a: 'crypto.getRandomValues fills a typed array from the browser’s cryptographic random source. Math.random is a different algorithm and is not used. The page still maps those bytes onto your range, and it discards leftover values so the steps stay equally likely.' },
      { q: 'Can I get the same random numbers twice?', a: 'Not from the button. Each press draws again, and the page does not keep a seed. The tests use a stand-in sequence of bytes so the range logic can be checked without pretending a live draw is repeatable.' },
      { q: 'Why was my unique random list rejected?', a: 'Because the range, after rounding to the decimal places, has fewer distinct values than the count you asked for. Five different whole numbers from 1 to 3 cannot exist. Allow duplicates or widen the range.' },
      { q: 'How many random numbers can I draw at once?', a: 'Up to 50. Decimal places can be from 0 to 6. A list of eight or fewer is the headline. A longer list is counted in the headline and written in full underneath.' }
    ],
    relatedLinks: [
      { slug: 'percentage-calculator', label: 'Percentage calculator', note: 'Part divided by whole. Not a random draw.' },
      { slug: 'ratio-calculator', label: 'Ratio calculator', note: 'Simplifies two whole numbers or solves a proportion.' },
      { slug: 'fraction-calculator', label: 'Fraction calculator', note: 'Adds, subtracts, multiplies, or divides mixed numbers and simplifies the result.' }
    ]
  },
  'fraction-calculator': {
    title: 'Fraction Calculator: Add, Subtract, Multiply, Divide | ClearCalc',
    h1: 'Fraction Calculator',
    description: 'Add, subtract, multiply, or divide mixed numbers. 1 1/2 plus 2 1/3 is 3 5/6, which is 23/6 and 3.833333 as a decimal.',
    intro: [
      'This fraction calculator works on two mixed numbers. Each one has a whole number, a numerator, and a denominator. You choose add, subtract, multiply, or divide. The headline is the simplified mixed number. The lines underneath show both inputs as improper fractions, the operation before it is reduced, the simplified improper fraction, and the decimal.',
      'The sample is 1 1/2 plus 2 1/3. As improper fractions those are 3/2 and 7/3. The common denominator is 6, and 9/6 + 14/6 = 23/6. That reduces to 3 5/6. The decimal is 3.833333. The same page subtracts, multiplies, and divides. 3 1/2 minus 1 3/4 is 1 3/4. Two thirds times three quarters is 1/2. Three quarters divided by one half is 1 1/2.',
      'The percentage page answers a different question: what percent one number is of another. A ratio page simplifies 1920:1080 to 16:9. This page stays on fractions. It uses whole numbers for every part so the steps divide evenly.'
    ],
    steps: [
      'Choose add, subtract, multiply, or divide. The sample is add.',
      'Enter the first mixed number: whole number, numerator, and denominator. The sample is 1, 1, and 2, which is 1 1/2. Use 0 as the whole number for a proper fraction.',
      'Enter the second mixed number the same way. The sample is 2, 1, and 3, which is 2 1/3. A denominator cannot be zero.',
      'Press Calculate. Read the mixed number, then the improper fraction and the decimal. The step line shows the common denominator or the reciprocal.'
    ],
    howHeading: 'How mixed numbers are added and reduced',
    howItWorks: [
      'A mixed number becomes an improper fraction first. The whole number is multiplied by the denominator and the numerator is added. The sign belongs on the whole number. If the whole number is zero, a negative numerator is a negative fraction. A negative numerator next to a non-zero whole number is rejected, so −2 and 1/2 is typed as whole −2 and numerator 1, which is −2 1/2, not an ambiguous pair of signs. A negative denominator flips onto the numerator before that rule is applied.',
      'Addition and subtraction use a common denominator, the product of the two denominators. Each numerator is scaled, the numerators are added or subtracted, and the result is reduced by the greatest common divisor. Multiplication multiplies the numerators and the denominators. Division multiplies by the reciprocal, and a zero numerator on the divisor is rejected.',
      'The mixed headline splits the simplified improper fraction into a whole number and a remainder. 23/6 is 3 5/6. 6/12 from 2/3 × 3/4 reduces to 1/2, and the whole number is 0 so the headline is just 1/2. 14/8 from the subtraction example reduces to 7/4, which is 1 3/4. The decimal line keeps up to six places, so 23/6 displays as 3.833333.',
      'Every input has to be a whole number. A decimal such as 1.5 belongs in the mixed-number fields as 1 and 1/2, not as a numerator of 1.5. The page will not guess a fraction from a decimal.'
    ],
    formula: 'Improper numerator = sign × (|whole| × |denominator| + |numerator|)\nAdd or subtract: common denominator = den1 × den2\n  result = (num1 × den2 ± num2 × den1) / common denominator\nMultiply: (num1 × num2) / (den1 × den2)\nDivide: (num1 × den2) / (den1 × num2), and num2 cannot be 0\nReduce by the greatest common divisor\nMixed number = whole quotient and the remainder over the reduced denominator\nDecimal = reduced numerator / reduced denominator',
    formulaNotes: [
      '1 1/2 + 2 1/3 = 3/2 + 7/3 = 9/6 + 14/6 = 23/6 = 3 5/6. The decimal is 3.833333.',
      '3/4 ÷ 1/2 = 3/4 × 2/1 = 6/4 = 3/2 = 1 1/2. The step line shows the reciprocal so the multiplication is visible before the reduction.'
    ],
    examplesHeading: 'Worked fraction examples',
    examples: [
      {
        title: '1 1/2 plus 2 1/3',
        paragraphs: [
          'The headline is 3 5/6. The improper fractions are 3/2 and 7/3. The step line is the common denominator 6, and 9/6 + 14/6 = 23/6. Simplified is 23/6. The decimal is 3.833333.',
          'The whole numbers are part of the inputs. Leaving them at 0 and putting 3 and 2 in the first fraction, and 7 and 3 in the second, is the same arithmetic without the mixed-number step.'
        ]
      },
      {
        title: '3 1/2 minus 1 3/4, and 2/3 times 3/4',
        paragraphs: [
          'Subtraction: whole 3, numerator 1, denominator 2, minus whole 1, numerator 3, denominator 4. The headline is 1 3/4. The common denominator is 8, and 28/8 − 14/8 = 14/8, which reduces to 7/4.',
          'Multiplication: 0 2/3 times 0 3/4. The product before reducing is 6/12. The headline is 1/2. The decimal is 0.5.'
        ]
      },
      {
        title: '3/4 divided by 1/2',
        paragraphs: [
          'Operation divide, first fraction 0 3/4, second fraction 0 1/2. The step multiplies by 2/1 and gets 6/4. The headline is 1 1/2. Simplified is 3/2. The decimal is 1.5.',
          'Dividing by zero is rejected. A second numerator of 0 with a whole number of 0 is a zero divisor. The page will not return infinity.'
        ]
      }
    ],
    table: {
      heading: 'Fraction results for four operations',
      caption: 'Each row is the headline and the simplified improper fraction this calculator shows. Inputs are mixed numbers, with a whole-number part of 0 where the fraction is proper.',
      headers: ['Operation', 'Left', 'Right', 'Mixed result', 'Simplified'],
      rows: [
        ['Add', '1 1/2', '2 1/3', '3 5/6', '23/6'],
        ['Subtract', '3 1/2', '1 3/4', '1 3/4', '7/4'],
        ['Multiply', '2/3', '3/4', '1/2', '1/2'],
        ['Divide', '3/4', '1/2', '1 1/2', '3/2']
      ]
    },
    limitsHeading: 'What this fraction calculator does not simplify',
    limits: [
      'Inputs have to be whole numbers. A decimal numerator is rejected. Convert 0.5 to 1/2 yourself, or use the decimal line only as an output.',
      'It does not solve an equation and it does not simplify a ratio written with a colon. 16:9 is the ratio page. A percent change is the percentage-change page.',
      'The sign rule is strict when the whole number is not zero. Put the minus on the whole number and keep the fraction part at zero or above. That avoids reading −2 and −1/2 as either −1 1/2 or −2 1/2.',
      'A very large product can exceed the safe integer range and the remainder will be wrong. Stay inside ordinary homework-sized numbers. This page is not an arbitrary-precision library.'
    ],
    disclaimer: 'This fraction result is exact integer arithmetic reduced by a greatest common divisor. It is not a rounded decimal until the decimal line, which is only a reading aid.',
    faqs: [
      { q: 'What is 1 1/2 plus 2 1/3?', a: '3 5/6. The improper fractions are 3/2 and 7/3, the common denominator is 6, and 9/6 + 14/6 = 23/6. The decimal is 3.833333.' },
      { q: 'What is 3/4 divided by 1/2?', a: '1 1/2. Division multiplies by the reciprocal, so 3/4 × 2/1 = 6/4, which simplifies to 3/2. The decimal is 1.5.' },
      { q: 'How do I enter a negative mixed number?', a: 'Put the minus on the whole number and keep the numerator at zero or above. Whole −2, numerator 1, denominator 2 is −2 1/2. If the whole number is 0, a negative numerator is allowed and carries the sign.' },
      { q: 'Why is 2/3 times 3/4 equal to 1/2 and not 6/12?', a: '6/12 is the product before it is reduced. The greatest common divisor of 6 and 12 is 6, so the simplified fraction is 1/2. The step line still shows 6/12 so you can see the cancellation.' },
      { q: 'Can this fraction calculator take a decimal?', a: 'No. Numerators, denominators, and whole numbers have to be integers. Type 1 1/2 rather than 1.5. The decimal on the result is an output, converted from the simplified fraction.' }
    ],
    relatedLinks: [
      { slug: 'percentage-calculator', label: 'Percentage calculator', note: 'Part divided by whole. 25 out of 200 is 12.5%. It does not add mixed numbers.' },
      { slug: 'percentage-change-calculator', label: 'Percent increase and decrease calculator', note: 'From 80 to 100 is a 25.00% increase. A fraction sum is a different question.' },
      { slug: 'ratio-calculator', label: 'Ratio calculator', note: '1920:1080 simplifies to 16:9. It does not add two fractions.' },
      { slug: 'grade-calculator', label: 'Grade calculator', note: 'A weighted average of scores, then a letter. Not fraction arithmetic.' },
      { slug: 'random-number-generator', label: 'Random number generator', note: 'Draws whole numbers or decimals with crypto.getRandomValues. It does not add fractions.' }
    ]
  },
  'ratio-calculator': {
    title: 'Ratio Calculator: Simplify and Solve a Proportion | ClearCalc',
    h1: 'Ratio Calculator',
    description: 'Simplify a ratio of two whole numbers, or solve the missing term in a/b = c/x. 1920:1080 simplifies to 16:9. If 2/3 = 10/x, x is 15.',
    intro: [
      'This ratio calculator has two modes. Simplify divides both sides of a ratio by their greatest common divisor. 8:12 becomes 2:3, and 1920:1080 becomes 16:9. Solve finds the missing term in a proportion a/b = c/x. If 2/3 = 10/x, x is 15.',
      'The sample form starts on simplify with 1920 and 1080, the pixel size people use when they mean a 16:9 frame. The third number is ignored in that mode. Switch to solve when you already know three terms and need the fourth. The fraction calculator is the one that adds or multiplies mixed numbers. This page does not add the two sides of a ratio.',
      'A ratio of 0:0 is rejected. A solve with a first number of 0 is rejected, because the formula divides by a. Negative whole numbers are allowed, and the greatest common divisor uses the absolute values so the signs stay where you put them.'
    ],
    steps: [
      'Choose simplify or solve. Simplify uses the first and second numbers. Solve uses all three, in the proportion a/b = c/x.',
      'Enter whole numbers for a simplify. The sample is 1920 and 1080. The third number can stay at its default. It is not read.',
      'For a proportion, enter a, b, and c. The page solves for x. a cannot be zero.',
      'Press Calculate. The simplify headline is the reduced ratio with a colon. The solve headline is the missing term.'
    ],
    howHeading: 'How a ratio is reduced and how a proportion is solved',
    howItWorks: [
      'The greatest common divisor is the usual Euclidean algorithm: replace the larger number by the remainder of the division until the remainder is zero. Both sides of the ratio are divided by that divisor. 1920 and 1080 have a greatest common divisor of 120, and 1920/120 : 1080/120 is 16:9. 8 and 12 have a greatest common divisor of 4, and the ratio is 2:3.',
      'The decimal line is the first number divided by the second. For 16:9 that is 1.777778 at the displayed precision. If the right side is zero, the decimal is reported as undefined and the ratio itself can still be simplified, such as 5:0 staying 1:0 after dividing by 5. A ratio of 0:4 becomes 0:1. A ratio of 0:0 has no divisor that defines it, and it is rejected.',
      'Solving uses cross-multiplication. a/b = c/x means a × x = b × c, so x = b × c / a. The check line multiplies a by x and b by c so you can see they match. 2/3 = 10/x gives x = 3 × 10 / 2 = 15. Then 2 × 15 = 30 and 3 × 10 = 30.',
      'Solve accepts numbers that are not whole, because a scale factor often is not an integer. Simplify insists on whole numbers so the greatest common divisor is exact. If you need to simplify 1.5:2.5, multiply both sides until they are whole numbers and use simplify, or leave them as a proportion on the solve mode.'
    ],
    formula: 'Simplify, whole numbers only:\n  d = greatest common divisor of a and b\n  reduced ratio = (a / d) : (b / d)\n  0:0 is rejected\nSolve:\n  x = b × c / a\n  a cannot be 0\n  Check: a × x = b × c',
    formulaNotes: [
      '1920:1080 divides by 120 and becomes 16:9. 8:12 divides by 4 and becomes 2:3.',
      '2/3 = 10/x gives x = 15. The products a × x and b × c are both 30.'
    ],
    examplesHeading: 'Worked ratio examples',
    examples: [
      {
        title: '1920:1080 and 8:12',
        paragraphs: [
          'Mode simplify, a 1920, b 1080. The headline is 16:9. The greatest common divisor is 120. The decimal value of the left divided by the right is 1.777778.',
          'Change the inputs to 8 and 12. The headline is 2:3 and the divisor is 4. The same mode does both. You do not pick a target ratio in advance.'
        ]
      },
      {
        title: 'Solve 2/3 = 10/x',
        paragraphs: [
          'Mode solve, a 2, b 3, c 10. The headline is 15. The proportion line reads 2 / 3 = 10 / x, and x = 3 × 10 / 2. The check is 2 × 15 = 30 and 3 × 10 = 30.',
          'If a is 0 the page rejects the solve. There is no x that makes 0/b equal 10/x when b is not zero. Use simplify only when both numbers are the ratio you already have.'
        ]
      },
      {
        title: 'A zero on one side',
        paragraphs: [
          'Simplify 0 and 4. The headline is 0:1. The divisor is 4. The decimal is 0. Simplify 5 and 0. The headline is 1:0, and the decimal line says the right side is zero so the division is undefined.',
          'Simplify 0 and 0 is rejected. That pair has no reduced form that preserves a meaning. Solve is a different mode and still needs a non-zero first number.'
        ]
      }
    ],
    table: {
      heading: 'Ratios this page reduces or solves',
      caption: 'Simplify rows are whole numbers and a greatest common divisor. The solve row is a/b = c/x. Each result is what this calculator displays.',
      headers: ['Mode', 'Inputs', 'Result'],
      rows: [
        ['Simplify', '8:12', '2:3'],
        ['Simplify', '1920:1080', '16:9'],
        ['Simplify', '0:4', '0:1'],
        ['Solve', '2/3 = 10/x', '15']
      ]
    },
    limitsHeading: 'What a ratio page does not calculate',
    limits: [
      'It does not add, subtract, multiply, or divide fractions. 1 1/2 + 2 1/3 is the fraction calculator, and the result is 3 5/6.',
      'It does not turn a ratio into a percent change. From 80 to 100 is a 25.00% increase on the percentage-change page. 16:9 is not a percent.',
      'Simplify rejects decimals. A measurement you still need to scale into whole numbers has to be scaled first. Solve will accept a decimal because x = b × c / a does not need a greatest common divisor.',
      'The page simplifies two numbers, not three. A recipe ratio a:b:c is two simplifies, not one. There is no field for a third side in simplify mode.'
    ],
    disclaimer: 'This ratio is integer reduction or one missing term in a proportion. It is not a scale drawing and not a percent.',
    faqs: [
      { q: 'What is 1920:1080 simplified?', a: '16:9. The greatest common divisor of 1920 and 1080 is 120. 1920/120 is 16 and 1080/120 is 9. The decimal 1920/1080 displays as 1.777778.' },
      { q: 'What is 8:12 as a simplified ratio?', a: '2:3. The greatest common divisor is 4. Both sides are divided by 4. The ratio calculator does not change the mode to do that. Simplify is the mode.' },
      { q: 'If 2/3 equals 10/x, what is x?', a: '15. x = 3 × 10 / 2. The check is 2 × 15 = 30 and 3 × 10 = 30. The first number cannot be zero, because the formula divides by it.' },
      { q: 'Why is 0:0 rejected?', a: 'Dividing both sides by a greatest common divisor does not define 0:0. A ratio with a zero on only one side is allowed: 0:4 becomes 0:1, and 5:0 becomes 1:0 with the decimal marked undefined.' },
      { q: 'How is a ratio different from a fraction calculation?', a: 'A ratio here is two numbers reduced together, or three numbers in a proportion. The fraction calculator adds, subtracts, multiplies, or divides mixed numbers and shows a mixed result. 1 1/2 + 2 1/3 is 3 5/6 on that page, not a colon.' }
    ],
    relatedLinks: [
      { slug: 'fraction-calculator', label: 'Fraction calculator', note: '1 1/2 + 2 1/3 = 3 5/6. It does not simplify 16:9.' },
      { slug: 'percentage-calculator', label: 'Percentage calculator', note: 'Part over whole as a percent. 16 out of 9 is not the 16:9 reduction.' },
      { slug: 'percentage-change-calculator', label: 'Percent increase and decrease calculator', note: 'From 80 to 100 is a 25.00% increase. A ratio is not a change from an old value to a new one.' },
      { slug: 'area-calculator', label: 'Area calculator', note: 'Rectangle, circle, triangle, and other areas. A 16:9 frame is a ratio, not an area, until you also have a size.' }
    ]
  },
  'area-calculator': {
    title: 'Area Calculator: Rectangle, Circle, Triangle, Trapezoid | ClearCalc',
    h1: 'Area Calculator',
    description: 'Calculate the area of a rectangle, circle, triangle, trapezoid, ellipse, or parallelogram. A 10 by 12 rectangle is 120. A circle of radius 5 is 78.5398.',
    intro: [
      'This area calculator applies one formula at a time. You choose a rectangle, a circle, a triangle, a trapezoid, an ellipse, or a parallelogram, and you type the lengths that formula needs. The unit is whatever unit those lengths were in. A 10 by 12 rectangle is 120. A circle with radius 5 is 78.5398, which is π times 25 rounded to four decimal places for the headline.',
      'The square footage page on this site is a rectangle measured in feet and inches, including a second rectangle and an extra-waste percent. This page does not convert feet and inches and it does not add waste. It is the general formula, so a circle and a triangle have a place. A room that is 10 feet by 12 feet is 120 square feet here and 120.00 square feet on the square footage page when you enter those feet with zero inches.',
      'Unused measurements stay on the form because the shape menu cannot hide them. A circle reads the first measurement as the radius and ignores the others. A trapezoid reads the first two as the parallel sides and the third as the height. The result names which reading it used.'
    ],
    steps: [
      'Choose the shape. The sample is a rectangle.',
      'Enter the lengths in one unit. For a rectangle, the first number is the length and the second is the width. The sample is 10 and 12. For a circle, the first number is the radius.',
      'For a trapezoid, enter the two parallel sides and the height in the third box. For a triangle or a parallelogram, the second number is the height, not the slanted side.',
      'Press Calculate. The headline is the area, up to four decimal places. The unrounded value is underneath, with eight decimal places, so a circle still shows π.'
    ],
    howHeading: 'How each shape’s area is calculated',
    howItWorks: [
      'A rectangle is length times width. A parallelogram is base times height, and the height is the perpendicular height, not the slanted side. Using the slanted side overstates the area. A triangle is half the base times the height. A trapezoid is the average of the two parallel sides times the height: (a + b) / 2 × h.',
      'A circle is π times the radius squared. An ellipse is π times the two radii. The page uses Math.PI, not 3.14 and not 22/7. A radius of 5 gives 78.53981634 before the headline rounds to 78.5398. A radius of 1 gives a headline of 3.1416.',
      'Lengths of zero are rejected when the formula needs them to be positive. A trapezoid may have one parallel side of zero, which is a triangle, but both sides cannot be zero and the height must be above zero. Negative lengths are rejected. The page does not take an absolute value and quietly continue.',
      'There is no unit conversion. Centimetres in, square centimetres out. Feet in, square feet out. Mixing a length in feet with a width in inches produces a number that is not square feet and not square inches. The square footage page is the one that accepts feet and inches on a rectangle.'
    ],
    formula: 'Rectangle = length × width\nParallelogram = base × perpendicular height\nTriangle = ½ × base × height\nTrapezoid = (side A + side B) / 2 × height\nCircle = π × radius²\nEllipse = π × radius A × radius B\nπ is Math.PI\nThe headline rounds to four decimal places\nThe unit is the square of the unit you typed',
    formulaNotes: [
      '10 × 12 = 120. A triangle with base 10 and height 6 is 30. A trapezoid with parallel sides 8 and 4 and height 3 is (8 + 4) / 2 × 3 = 18.',
      'A circle of radius 5 is 25π, which displays as 78.5398. The eight-decimal line keeps 78.53981634 so you can see the rounding.'
    ],
    examplesHeading: 'Worked area examples',
    examples: [
      {
        title: 'A 10 by 12 rectangle and a radius of 5',
        paragraphs: [
          'Shape rectangle, 10 and 12. The headline is 120. The unrounded line is 120.00000000. Square footage of a 10 foot by 12 foot room, with no inches, is the same 120 on the square footage page.',
          'Shape circle, radius 5. The headline is 78.5398. The formula line says π × radius². A diameter of 10 is not what the box wants. Halve a diameter before you type it, or the area will be four times too large.'
        ]
      },
      {
        title: 'A triangle and a trapezoid',
        paragraphs: [
          'Triangle, base 10, height 6. The headline is 30. That is half of 60. If the 6 is the slanted side rather than the height, this is the wrong number. The page cannot see the difference. It multiplies the two numbers you called base and height.',
          'Trapezoid, sides 8 and 4, height 3. The headline is 18. One of the parallel sides may be shorter. Both are averaged before the height is applied.'
        ]
      },
      {
        title: 'An ellipse and a parallelogram',
        paragraphs: [
          'Ellipse with radii 5 and 3. The area is π × 5 × 3, which is 47.1239 at four decimal places. A circle is the special case where the two radii match. Using the circle shape with radius 5 does not read the second radius.',
          'Parallelogram, base 10, height 4. The headline is 40. If you type the slanted side as the height, the area is wrong in the same way as the triangle. The result text says the slanted side is not the height.'
        ]
      }
    ],
    table: {
      heading: 'Areas for common shapes',
      caption: 'The area column is the headline. Lengths are in a single unit. A circle uses π from the language runtime, then rounds to four decimal places.',
      headers: ['Shape', 'Lengths', 'Area'],
      rows: [
        ['Rectangle', '10 by 12', '120'],
        ['Triangle', 'base 10, height 6', '30'],
        ['Trapezoid', 'sides 8 and 4, height 3', '18'],
        ['Circle', 'radius 5', '78.5398'],
        ['Ellipse', 'radii 5 and 3', '47.1239'],
        ['Parallelogram', 'base 10, height 4', '40']
      ]
    },
    limitsHeading: 'What this area formula leaves out',
    limits: [
      'It does not convert units and it does not accept feet and inches in separate boxes. The square footage calculator does that for a rectangle. A 12 foot 6 inch by 10 foot rectangle is 125.00 square feet there, not on this page, unless you convert 12 feet 6 inches to 12.5 first.',
      'It does not add a waste percent for tile, paint, or mulch. Those pages start from a rectangle and then count tiles, gallons, or bags. An area is the input they need, not the material count.',
      'Composite rooms, an L-shape, and a circle cut out of a rectangle are not one shape on the menu. Compute the pieces and add or subtract the headlines yourself. The page will not subtract a second shape.',
      'π is not rounded to 3.14 before the multiplication. If a textbook uses 3.14 or 22/7, its circle will not match 78.5398 for a radius of 5. The eight-decimal line is there so you can see which π was used.'
    ],
    disclaimer: 'This area is the formula for the shape you selected, in the unit you typed. It is not a material takeoff and not a unit conversion.',
    faqs: [
      { q: 'What is the area of a 10 by 12 rectangle?', a: '120, in the square of whatever unit you used for 10 and 12. A 10 foot by 12 foot floor is 120 square feet. The square footage page returns 120.00 square feet for that rectangle when the inch fields are zero.' },
      { q: 'What is the area of a circle with radius 5?', a: '78.5398. That is π × 25, rounded to four decimal places from 78.53981634. Type the radius, not the diameter. A diameter of 10 has radius 5.' },
      { q: 'How do I find the area of a triangle or a trapezoid?', a: 'A triangle is half the base times the height. Base 10 and height 6 give 30. A trapezoid averages the two parallel sides and multiplies by the height. Sides 8 and 4 with height 3 give 18. The height has to be the perpendicular height.' },
      { q: 'Does this area calculator convert inches to feet?', a: 'No. It multiplies the numbers you type. The square footage calculator is the one that takes feet and inches. Convert 12 feet 6 inches to 12.5 before you use it here, or use that other page for a rectangle.' },
      { q: 'Why might a textbook circle disagree with 78.5398?', a: 'Because the textbook may have used 3.14 or 22/7 for π. This page uses the fuller value of π and then rounds the area to four decimal places. The unrounded line shows eight decimal places so the source of the headline is visible.' }
    ],
    relatedLinks: [
      { slug: 'square-footage-calculator', label: 'Square footage calculator', note: 'A rectangle in feet and inches. 12 feet 6 inches by 10 feet is 125.00 square feet. This page does not take inches as a separate field.' },
      { slug: 'floor-tile-calculator', label: 'Floor tile calculator', note: 'Counts tiles from a floor size, a grout joint, and waste. It starts where an area stops.' },
      { slug: 'concrete-slab-calculator', label: 'Concrete slab calculator', note: 'A rectangular slab’s volume in cubic yards and bags. Area is not volume.' },
      { slug: 'ratio-calculator', label: 'Ratio calculator', note: '16:9 from 1920:1080. A ratio is not an area until you also have the lengths.' }
    ]
  },
  'grade-calculator': {
    title: 'Grade Calculator: Weighted Average and Letter | ClearCalc',
    h1: 'Grade Calculator',
    description: 'Average up to four weighted scores and map the result to a letter. Scores of 90, 80, 70, and 100 with weights 40, 30, 20, and 10 finish at 84.00%, a B. This is not a GPA and not a final-exam solver.',
    intro: [
      'This grade calculator is a weighted average of up to four categories. Each category has a score and a weight. The average is the sum of score times weight, divided by the sum of the weights. The sample scores are 90, 80, 70, and 100 with weights 40, 30, 20, and 10. The headline is 84.00% B.',
      'The letter uses the rounded average on a 10-point scale: A at 90.00 or above, B at 80.00, C at 70.00, D at 60.00, and F below that. There is no plus or minus. A school that cuts an A at 93, or that uses A−, will not match the letter even when the percentage is right. The percentage is the part to trust. The letter is a reading of that percentage on the scale printed on the page.',
      'This is not the GPA page and it is not the final-exam page. The GPA page averages four grade-point numbers on a 4.0 scale and does not weight them. The final-exam page solves for the score you still need on one exam. This page averages categories you already have. A weight of zero drops that category. Weights that do not add to 100 are still a weighted average. They are divided by the total you typed, not forced up to 100.'
    ],
    steps: [
      'Enter a score and a weight for each category you use. The sample is 90 with weight 40, 80 with weight 30, 70 with weight 20, and 100 with weight 10.',
      'A score can be above 100 if the category allows extra credit, up to 200. A score cannot be negative. Leave a category you do not use at weight 0.',
      'Weights may be percents that add to 100, or any positive sizes. Two weights of 1 and 1 are equal shares. The page tells you whether the weights added to 100.',
      'Press Calculate. The headline is the average to two decimal places and the letter. Each category line shows score times weight.'
    ],
    howHeading: 'How the weighted average and the letter are chosen',
    howItWorks: [
      'The page skips a category whose weight is zero. For every other category it multiplies the score by the weight. The sample is 90 × 40 = 3,600, 80 × 30 = 2,400, 70 × 20 = 1,400, and 100 × 10 = 1,000. The sum is 8,400. The weights sum to 100. 8,400 / 100 = 84, which displays as 84.00% and the letter B.',
      'If the weights sum to something other than 100, the division uses that sum. Scores of 70 and 90 with weights 1 and 1 average to 80.00% B. The page says the weights do not add to 100, so you can see that each category is half the result rather than 1% of it. Forgetting to type a weight of 50 and leaving a 1 does not silently become 50%.',
      'The letter is taken from the average after it is rounded to two decimal places. 89.996% rounds to 90.00% and is an A. 89.994% rounds to 89.99% and is a B. The cut is the displayed percentage, so the letter and the headline cannot disagree. A syllabus that uses 89.5 as an A is a different scale. This one does not round 89.50 up to an A. 89.50% is a B because it is still under 90.00.',
      'The final-exam calculator is the tool for “what do I need on the final.” If the final is still unwritten, do not put a hoped-for score in this average and treat it as earned. Put the completed categories here, note that their weights are only the completed share, or use the final-exam page with the current grade and the final’s weight.'
    ],
    formula: 'Average = sum(score × weight) / sum(weight), ignoring weights of 0\nThe headline rounds the average to two decimal places\nLetter on that rounded average:\n  A if 90.00 or above\n  B if 80.00 or above\n  C if 70.00 or above\n  D if 60.00 or above\n  F otherwise\nWeights do not have to sum to 100\nScores must be from 0 to 200',
    formulaNotes: [
      '90 × 40 + 80 × 30 + 70 × 20 + 100 × 10 = 8,400. Divided by 100, the average is 84.00%, a B.',
      '70 and 90 with equal weights of 1 and 1 average to 80.00%, a B. The weights are equal shares even though they sum to 2, not 100.'
    ],
    examplesHeading: 'Worked grade examples',
    examples: [
      {
        title: 'Four categories that add to 100',
        paragraphs: [
          'Scores 90, 80, 70, and 100 with weights 40, 30, 20, and 10. The headline is 84.00% B. The weight total is 100, so each weight is also a percent of the course. The category lines are 3,600, 2,400, 1,400, and 1,000.',
          'Drop the last category by setting its weight to 0 and the average uses only the first three. The page will say the weights no longer add to 100. That is a warning, not a change to the arithmetic. 3,600 + 2,400 + 1,400 = 7,400, divided by 90, which is 82.22% and still a B.'
        ]
      },
      {
        title: 'Two equal categories',
        paragraphs: [
          'Score 70 weight 1, score 90 weight 1, and the other weights 0. The headline is 80.00% B. Each category is half the grade because the weights match, not because they say 50.',
          'Change the weights to 50 and 50 and the percentage is the same 80.00%. The only new sentence is that the weights now add to 100. The letter does not move.'
        ]
      },
      {
        title: 'The letter cut at 90',
        paragraphs: [
          'An average that rounds to 90.00% is an A. An average that rounds to 89.99% is a B. The page does not add a plus. A syllabus with an A at 93 would call 90 a B or a B+, and this letter would be the wrong label. Keep the percentage and apply the syllabus yourself when the cuts differ.',
          'The GPA page would turn letter grades into grade points after you already know them. It does not compute this 84.00. The final-exam page would ask what the final has to be to reach a target, which is the question this average does not answer.'
        ]
      }
    ],
    table: {
      heading: 'Weighted averages and the letter this page assigns',
      caption: 'The letter uses the average after rounding to two decimal places. A is 90.00 or above, B is 80.00, C is 70.00, D is 60.00, and F is below. Weights of zero are omitted.',
      headers: ['Scores and weights', 'Average', 'Letter'],
      rows: [
        ['90×40, 80×30, 70×20, 100×10', '84.00%', 'B'],
        ['90×40, 80×30, 70×20, weight 0 on the last', '82.22%', 'B'],
        ['70×1 and 90×1', '80.00%', 'B'],
        ['A rounded average of 90.00', '90.00%', 'A'],
        ['A rounded average of 89.99', '89.99%', 'B']
      ]
    },
    limitsHeading: 'What this grade average leaves out',
    limits: [
      'It is not a GPA. Four course grades on a 4.0 scale belong on the GPA page, which does not use these weights and does not print a letter from a percentage.',
      'It does not solve for a final exam. If the final is unwritten, the final-exam page takes the current grade, the final’s weight, and a target, and returns the score you need. Putting a guess in this average pretends the final is already scored.',
      'The letter scale is a common 10-point scale without plus or minus. It is not your syllabus. A cut at 93, a curve, or a dropped lowest quiz is not applied.',
      'Only four categories fit on the form. Combine smaller assignments into a category average before you type them, and use the category’s total weight. The page will not accept a fifth row.'
    ],
    disclaimer: 'This grade is a weighted average and a 10-point letter. It is not a transcript, a GPA, or your syllabus.',
    faqs: [
      { q: 'What is the grade for scores of 90, 80, 70, and 100 with weights 40, 30, 20, and 10?', a: '84.00% B. The weighted sum is 8,400 and the weights total 100. The letter B is the 10-point scale on this page, which starts a B at 80.00 and an A at 90.00. A syllabus with different cuts can use the 84.00 and ignore the letter.' },
      { q: 'Do the weights have to add to 100?', a: 'No. The average divides by the weight total you entered. Scores of 70 and 90 with weights 1 and 1 are 80.00% B, the same percentage as weights 50 and 50. The page tells you when the weights do not add to 100 so an accidental 1 is visible.' },
      { q: 'How is this grade calculator different from the GPA calculator?', a: 'This page averages percentage scores with weights and then assigns a letter. The GPA page averages grade points such as 4, 3, 3.7, and 3.3 and does not use category weights. A course percentage is not a grade point until a school maps it.' },
      { q: 'How is this different from the final exam grade calculator?', a: 'The final-exam page solves for the score you still need. This page averages scores you already have. If the final is 30% of the course and you want a 90, that required score is the other page’s question, not this average.' },
      { q: 'Why is 89.99% a B and 90.00% an A?', a: 'The letter is read from the average after it is rounded to two decimal places, and an A starts at 90.00. 89.996 rounds to 90.00 and is an A. 89.994 rounds to 89.99 and is a B. There is no A− on this scale.' }
    ],
    relatedLinks: [
      { slug: 'final-exam-grade-calculator', label: 'Final exam grade calculator', note: 'The score a weighted final needs in order to hit a target. A current 86, a final worth 30, and a target of 90 needs 99.33% on that page.' },
      { slug: 'gpa-calculator', label: 'GPA calculator', note: 'An unweighted average of four grade-point numbers. It does not turn 84.00% into a letter or a grade point.' },
      { slug: 'percentage-calculator', label: 'Percentage calculator', note: 'Part divided by whole. A weighted grade is more than one percentage.' },
      { slug: 'fraction-calculator', label: 'Fraction calculator', note: 'Mixed-number arithmetic. Not a course grade.' }
    ]
  },
  'bmr-calculator': {
    title: 'BMR Calculator: Mifflin–St Jeor and Harris–Benedict | ClearCalc',
    h1: 'BMR Calculator',
    description: 'Estimate resting calories with Mifflin–St Jeor and the revised Harris–Benedict equation. A 30-year-old man at 75 kg and 175 cm has a Mifflin–St Jeor BMR of 1,698.75 kcal, which rounds to 1,699.',
    intro: [
      'This BMR calculator estimates resting energy with two published equations and shows both. The headline is Mifflin–St Jeor, rounded to the nearest calorie. The revised Harris–Benedict figure, from Roza and Shizgal in 1984, is on the line underneath so you can see the gap. The sample is a man, age 30, 75 kg, and 175 cm. Mifflin–St Jeor is 1,698.75 kcal/day and the headline is 1699 kcal. Revised Harris–Benedict is 1,762.65 kcal/day.',
      'The same body on the women’s equations is 1,532.75 kcal by Mifflin–St Jeor, which rounds to 1533, and 1,553.37 kcal by revised Harris–Benedict. The two equation sets differ by the constants, not by a guess about the person. You choose men or women. The page does not infer that choice from a name or from a measurement.',
      'A BMR is a resting estimate. It is not a daily target until you multiply by an activity factor. The TDEE page does that multiplication and then splits the result into a modest protein, fat, and carbohydrate estimate. The calorie page is Mifflin–St Jeor only, with an activity multiplier you type yourself. On this sample man, a 1.55 multiplier is 2,633 kcal, which is the calorie page’s figure and the TDEE page’s moderate activity figure.'
    ],
    steps: [
      'Choose the men’s or the women’s equation set, and choose kilograms and centimetres or pounds and inches.',
      'Enter age in whole years from 15 to 100, then weight and height. The sample is 30, 75, and 175 in metric units. These equations were built for adults. A result at 15 is still only the formula.',
      'Press Calculate. The headline is Mifflin–St Jeor to the nearest calorie. The unrounded Mifflin figure and the revised Harris–Benedict figure are underneath.',
      'If you chose pounds and inches, the detail line shows the kilogram and centimetre values that entered the formula, using 0.45359237 kg per pound and 2.54 cm per inch.'
    ],
    howHeading: 'How the two resting equations differ',
    howItWorks: [
      'Mifflin–St Jeor, 1990, is 10×kg + 6.25×cm − 5×age, then +5 for men or −161 for women. On the sample man that is 10×75 + 6.25×175 − 5×30 + 5 = 750 + 1,093.75 − 150 + 5 = 1,698.75. The headline rounds to 1699. The women’s constant replaces +5 with −161, which is 166 kcal lower before any rounding, so the same body is 1,532.75 and the headline is 1533.',
      'Revised Harris–Benedict is a different fit from 1984, not the original 1919 Harris–Benedict paper. Men: 88.362 + 13.397×kg + 4.799×cm − 5.677×age. Women: 447.593 + 9.247×kg + 3.098×cm − 4.330×age. On the sample man that is 1,762.65 kcal. On the sample woman it is 1,553.37 kcal. The page always prints this second number even though the headline is Mifflin–St Jeor, because the two equations answer the same resting question and they do not agree.',
      'Pounds convert with the international avoirdupois pound, 0.45359237 kg, and inches convert with 2.54 cm. Those are the same factors the BMI page uses. A man at 165.347 lb and 68.898 in is the sample body in imperial units, and the Mifflin line is 1,698.76 kcal rather than 1,698.75 because the typed pounds and inches are already rounded. Type metric when you want the 1,698.75 figure exactly.',
      'Neither equation measures you. A lab measurement of resting metabolism can disagree with both. The page does not add activity, pregnancy, or muscle mass. Height must convert into the range 100 to 250 cm, and weight must stay at or under 400 kg, so a unit mix-up fails instead of producing a quiet nonsense number.'
    ],
    formula: 'Mifflin–St Jeor, men = 10×kg + 6.25×cm − 5×age + 5\nMifflin–St Jeor, women = 10×kg + 6.25×cm − 5×age − 161\nRevised Harris–Benedict, men = 88.362 + 13.397×kg + 4.799×cm − 5.677×age\nRevised Harris–Benedict, women = 447.593 + 9.247×kg + 3.098×cm − 4.330×age\nPounds × 0.45359237 = kilograms\nInches × 2.54 = centimetres\nThe headline rounds Mifflin–St Jeor to the nearest calorie',
    formulaNotes: [
      'The sample man is 1,698.75 kcal by Mifflin–St Jeor and 1,762.65 kcal by revised Harris–Benedict. The sample woman is 1,532.75 and 1,553.37.',
      'The calorie page’s maintenance figure multiplies the Mifflin number by an activity factor you type. At 1.55 the sample man is 2,633 kcal/day. This page stops at the resting number.'
    ],
    examplesHeading: 'Worked BMR examples',
    examples: [
      {
        title: 'A man, 30 years, 75 kg, 175 cm',
        paragraphs: [
          'The headline is 1699 kcal Mifflin–St Jeor. The unrounded line is 1,698.75 kcal/day. Revised Harris–Benedict is 1,762.65 kcal/day, which rounds to 1,763 if you want a whole calorie. The page leaves that second figure at two decimals so the equation is visible.',
          'The 63.90 kcal gap is the two equations, not activity. Do not average them unless you have a reason to. The headline stays on Mifflin–St Jeor because that is the equation the calorie page also uses, and the two pages can be checked against each other.'
        ]
      },
      {
        title: 'The same age, weight, and height on the women’s equations',
        paragraphs: [
          'Switch the equation set to women. The headline is 1533 kcal. Unrounded Mifflin–St Jeor is 1,532.75. Revised Harris–Benedict is 1,553.37. The 166 kcal Mifflin gap versus the men’s equation is exactly the difference between +5 and −161.',
          'Choosing the women’s equation for a man, or the reverse, moves the result by that constant. The page will not correct the choice. The label on the result repeats which set you selected.'
        ]
      },
      {
        title: 'Pounds and inches',
        paragraphs: [
          'The same man typed as 165.347 lb and 68.898 in produces a Mifflin line of 1,698.76 kcal rather than 1,698.75, because those imperial figures are rounded. The conversion factors are 0.45359237 and 2.54.',
          'Use kilograms and centimetres when you want the sample to match 1,698.75 exactly. The BMI page uses the same pound and inch factors for a different output. BMI is not a calorie count.'
        ]
      }
    ],
    table: {
      heading: 'Resting estimates for age 30, 75 kg, 175 cm',
      caption: 'Mifflin–St Jeor is the 1990 equation. Revised Harris–Benedict is the Roza and Shizgal 1984 equation, not the 1919 original. The headline rounds the Mifflin figure to the nearest calorie.',
      headers: ['Equation set', 'Mifflin–St Jeor', 'Headline', 'Revised Harris–Benedict'],
      rows: [
        ['Men', '1,698.75 kcal', '1699 kcal', '1,762.65 kcal'],
        ['Women', '1,532.75 kcal', '1533 kcal', '1,553.37 kcal']
      ]
    },
    limitsHeading: 'What a BMR equation leaves out',
    limits: [
      'It is not a daily calorie target. Multiply by an activity factor on the TDEE page, or type your own multiplier on the calorie page. Eating at the BMR would be the resting estimate, not a maintenance intake for someone who moves.',
      'The revised Harris–Benedict equation is not the 1919 original. A worksheet that still uses the 1919 constants will not match 1,762.65. This page names the 1984 revision so the constants are the ones printed in the formula.',
      'Pregnancy, lactation, illness, and a measured resting metabolic rate are outside both formulas. The page does not add them. Age is limited to 15 through 100 because these are adult equations.',
      'Body fat is not an input. The body-fat page uses neck, waist, and hip measurements. A higher muscle mass can raise a true resting burn without changing the height and weight these equations see.'
    ],
    disclaimer: 'This BMR is an estimate from a published equation. It is not a medical measurement, a diet, or a calorie prescription.',
    faqs: [
      { q: 'What is the Mifflin–St Jeor BMR for a 30-year-old man at 75 kg and 175 cm?', a: '1,698.75 kcal/day, which this page rounds to 1699 kcal. The arithmetic is 10×75 + 6.25×175 − 5×30 + 5. Revised Harris–Benedict for the same inputs is 1,762.65 kcal/day.' },
      { q: 'What is the women’s BMR on the same height and weight?', a: 'Mifflin–St Jeor is 1,532.75 kcal/day, and the headline is 1533. Revised Harris–Benedict is 1,553.37. The Mifflin equations differ by 166 kcal because the constant is −161 instead of +5.' },
      { q: 'Which Harris–Benedict equation is this?', a: 'The revised equations published by Roza and Shizgal in 1984. Men use 88.362, 13.397, 4.799, and 5.677. Women use 447.593, 9.247, 3.098, and 4.330. The original 1919 constants are not used.' },
      { q: 'Is BMR the same as the calorie calculator?', a: 'The calorie page multiplies Mifflin–St Jeor by an activity number you type. At 1.55 the sample man is 2,633 kcal/day. This page stops at the resting figure and also shows revised Harris–Benedict. The TDEE page is the one that multiplies either equation by a named activity factor.' },
      { q: 'How are pounds and inches converted?', a: 'Pounds are multiplied by 0.45359237 to get kilograms, and inches by 2.54 to get centimetres. Those are the same factors as the BMI page. Rounded imperial inputs can move the Mifflin line by a hundredth of a calorie, which is why the metric sample is the one that shows 1,698.75 exactly.' }
    ],
    relatedLinks: [
      { slug: 'tdee-calculator', label: 'TDEE calculator', note: 'Multiplies Mifflin–St Jeor or revised Harris–Benedict by an activity factor. Moderate activity on this sample man is 2,633 kcal/day.' },
      { slug: 'calorie-calculator', label: 'Calorie calculator', note: 'Mifflin–St Jeor times a multiplier you type. The sample man at 1.55 is 2,633 kcal/day there too.' },
      { slug: 'bmi-calculator', label: 'BMI calculator', note: 'Weight and height as an index, not as calories. It uses the same pound and inch conversion factors.' },
      { slug: 'body-fat-calculator', label: 'Body fat calculator', note: 'U.S. Navy circumferences. It does not estimate resting calories.' },
      { slug: 'ideal-weight-calculator', label: 'Ideal weight calculator', note: 'Devine, Robinson, and Miller from height. A different output from a BMR.' }
    ]
  },
  'tdee-calculator': {
    title: 'TDEE Calculator: Activity and a Modest Macro Split | ClearCalc',
    h1: 'TDEE Calculator',
    description: 'Multiply Mifflin–St Jeor or revised Harris–Benedict by an activity factor. A 30-year-old man at 75 kg and 175 cm at moderate activity is 2,633 kcal/day, then split with the protein and fat shares you type.',
    intro: [
      'This TDEE calculator estimates total daily energy expenditure as a resting equation times an activity factor. You can start from Mifflin–St Jeor or from the revised Harris–Benedict equation. The activity choices are the common multipliers: 1.2 sedentary, 1.375 light, 1.55 moderate, 1.725 hard, and 1.9 very hard. The sample man, age 30, 75 kg, 175 cm, Mifflin–St Jeor, and moderate activity, has a headline of 2633 kcal/day.',
      'Under the calorie total, the page splits protein, fat, and carbohydrate. Protein is a number of grams per kilogram. Fat is a percent of the calorie total. Carbohydrate is whatever calories remain, at 4 kcal per gram. The sample uses 1.6 g of protein per kilogram and 30% of calories from fat. That split is arithmetic. It is not a diet and not a clinical prescription. The lines are there so the calorie figure is not the only number on the page.',
      'The calorie page is Mifflin–St Jeor with a multiplier you type freely, and it does not split macros. The BMR page shows both resting equations and stops before activity. This page is the combination: pick the equation, pick a named activity, and see a modest split.'
    ],
    steps: [
      'Choose the equation set and the units, then enter age, weight, and height. The sample is a man, metric, 30, 75, and 175.',
      'Choose Mifflin–St Jeor or revised Harris–Benedict, then an activity level. Moderate is 1.55.',
      'Enter protein in grams per kilogram, from 0 to 4, and fat as a percent of calories, from 0 to 70. The sample is 1.6 and 30. Carbohydrate is the remainder.',
      'Press Calculate. The headline is the TDEE rounded to the nearest calorie. If protein and fat together exceed that calorie total, the page rejects the split rather than printing a negative carbohydrate.'
    ],
    howHeading: 'How activity and the macro split are applied',
    howItWorks: [
      'The resting number is the same pair of equations as the BMR page. The sample man’s Mifflin–St Jeor value is 1,698.75 kcal. Times 1.55 is 2,633.0625, which rounds to 2633 kcal/day. That matches the calorie page when you type the multiplier 1.55 yourself. The women’s Mifflin value on the same body is 1,532.75, and 1,532.75 × 1.55 rounds to 2376 kcal/day.',
      'Protein grams are the grams-per-kilogram figure times body weight in kilograms. At 1.6 g/kg and 75 kg that is 120.0 g, and at 4 kcal per gram that is 480 kcal. Fat at 30% of 2,633.0625 kcal is about 790 kcal, or 87.7 g at 9 kcal per gram. Carbohydrate is the rest. The displayed grams are rounded. The rejection rule uses the unrounded TDEE, so a split that truly exceeds the calories is caught even if rounding would hide it.',
      'The activity labels are descriptions of the multipliers people commonly pair with a BMR. They are not a measurement of your day. A job that is “light” on this list and exhausting in practice will be wrong if you trust the label more than the multiplier. The multiplier is what the math uses: 1.2, 1.375, 1.55, 1.725, or 1.9.',
      'Revised Harris–Benedict as the base changes the TDEE because the resting number is different. The sample man’s revised figure is 1,762.65 kcal. Times 1.55 it is higher than 2,633. The page names which equation it used so a saved result is not ambiguous.'
    ],
    formula: 'BMR = Mifflin–St Jeor or revised Harris–Benedict, as on the BMR page\nTDEE = BMR × activity factor\nFactors: 1.2, 1.375, 1.55, 1.725, 1.9\nProtein grams = grams per kg × kg\nProtein calories = protein grams × 4\nFat calories = TDEE × fat percent / 100\nFat grams = fat calories / 9\nCarb calories = TDEE − protein calories − fat calories\nCarb grams = carb calories / 4\nThe headline rounds TDEE to the nearest calorie',
    formulaNotes: [
      '1,698.75 × 1.55 = 2,633.0625, which displays as 2633 kcal/day. Protein at 1.6 g/kg on 75 kg is 120.0 g.',
      'The women’s Mifflin BMR of 1,532.75 × 1.55 rounds to 2376 kcal/day, the same maintenance figure the calorie page shows for that constant and that multiplier.'
    ],
    examplesHeading: 'Worked TDEE examples',
    examples: [
      {
        title: 'Moderate activity, Mifflin–St Jeor, sample man',
        paragraphs: [
          'The headline is 2633 kcal/day. The BMR line is 1,698.75. The activity line says ×1.55. Protein at 1.6 g/kg is 120.0 g. Fat at 30% and carbohydrate as the remainder are listed in grams and calories.',
          'Change the activity to sedentary, ×1.2, and the headline falls because only the multiplier changed. The resting equation did not. A very hard factor of 1.9 raises it the same way. The labels are not personal measurements.'
        ]
      },
      {
        title: 'The women’s equation at the same size and activity',
        paragraphs: [
          'Switch to the women’s Mifflin–St Jeor equation and keep moderate activity. The resting number is 1,532.75 and the TDEE rounds to 2376 kcal/day. That is the calorie page’s women’s sample at a multiplier of 1.55.',
          'Protein grams change only if the kilogram weight changes. At 75 kg and 1.6 g/kg they stay 120.0 g. Fat calories change because they are a percent of the new TDEE.'
        ]
      },
      {
        title: 'A split that does not fit',
        paragraphs: [
          'Protein and fat are rejected when their calories exceed the TDEE. A very high grams-per-kilogram figure plus a high fat percent is an impossible split of that calorie total, so the page stops instead of showing negative carbohydrate.',
          'Lower the protein rate or the fat percent. The cap is 4 g per kilogram and 70% of calories, and even inside those caps the combination can be too large for a small TDEE. The error is the combination, not a broken equation.'
        ]
      }
    ],
    table: {
      heading: 'Activity factors applied to the sample resting estimates',
      caption: 'Age 30, 75 kg, 175 cm. The moderate column is BMR × 1.55, rounded to the nearest calorie, which is the headline for that activity. Sedentary is ×1.2. The macro split is not in this table.',
      headers: ['Equation', 'BMR', 'Sedentary', 'Moderate'],
      rows: [
        ['Mifflin–St Jeor, men', '1,698.75', '2,039 kcal', '2,633 kcal'],
        ['Mifflin–St Jeor, women', '1,532.75', '1,839 kcal', '2,376 kcal']
      ]
    },
    limitsHeading: 'What this TDEE estimate leaves out',
    limits: [
      'The activity factor is a multiplier you select from a list, not a count of steps or hours. Two people who both pick moderate will get the same product from the same body. The calorie page lets you type a multiplier that is not on this list.',
      'The macro split uses 4 kcal per gram of protein or carbohydrate and 9 kcal per gram of fat. It does not set a minimum protein for an athlete, a medical diet, or a preference. It will reject a split that asks for more calories than the TDEE.',
      'It is not a weight-loss prescription. Eating below the estimate may or may not change weight, and the page does not subtract 500 kcal or promise a weekly loss. Illness, pregnancy, and medication are not inputs.',
      'Revised Harris–Benedict here is the 1984 revision, the same constants as the BMR page. The original 1919 equation is not offered.'
    ],
    disclaimer: 'This TDEE is a resting equation times an activity factor, plus arithmetic for a macro split. It is not a diet, a medical energy study, or a prescription.',
    faqs: [
      { q: 'What is the TDEE for a 30-year-old man at 75 kg and 175 cm with moderate activity?', a: '2,633 kcal/day from Mifflin–St Jeor. The resting figure is 1,698.75 kcal and the activity factor is 1.55. That is the same 2,633 the calorie page shows when you type the multiplier 1.55 yourself.' },
      { q: 'What are the activity factors on this TDEE page?', a: '1.2 sedentary, 1.375 light, 1.55 moderate, 1.725 hard, and 1.9 very hard. They are common multipliers on a BMR, not a measurement of your day. The math uses the number, not the adjective.' },
      { q: 'How is the macro split calculated?', a: 'Protein grams are the grams per kilogram you type, times body weight. Fat calories are the fat percent times the TDEE. Carbohydrate calories are the remainder. The calorie factors are 4 per gram of protein or carbohydrate and 9 per gram of fat. The sample protein rate of 1.6 g/kg on 75 kg is 120.0 g.' },
      { q: 'Why does the women’s sample match the calorie page?', a: 'Because both pages use Mifflin–St Jeor. At 75 kg, 175 cm, age 30, the women’s resting figure is 1,532.75 kcal, and ×1.55 rounds to 2,376 kcal/day. This page also offers revised Harris–Benedict and a macro split, which the calorie page does not.' },
      { q: 'What if protein and fat are more than the TDEE?', a: 'The page rejects that split. Carbohydrate would be negative, which is not a usable remainder. Lower the grams per kilogram or the fat percent. The caps are 4 g per kilogram and 70% of calories, and a combination inside those caps can still be too large.' }
    ],
    relatedLinks: [
      { slug: 'bmr-calculator', label: 'BMR calculator', note: 'The resting numbers before activity. The sample man is 1,698.75 kcal by Mifflin–St Jeor and 1,762.65 by revised Harris–Benedict.' },
      { slug: 'calorie-calculator', label: 'Calorie calculator', note: 'Mifflin–St Jeor times a multiplier you type. No macro split and no Harris–Benedict option.' },
      { slug: 'bmi-calculator', label: 'BMI calculator', note: 'A weight-for-height index. Not an energy expenditure.' },
      { slug: 'body-fat-calculator', label: 'Body fat calculator', note: 'Circumference equations. Not a calorie total.' }
    ]
  },
  'period-calculator': {
    title: 'Period Calculator: Next Dates and Fertile Window | ClearCalc',
    h1: 'Period Calculator',
    description: 'Estimate upcoming period dates and a fertile window from your cycle length. A 28-day cycle from 1 January 2026 puts the next period on 29 January 2026 and ovulation on 15 January 2026. This is a calendar estimate, not medical advice.',
    intro: [
      'This period calculator counts forward from the first day of your last period. You type a cycle length, a luteal phase, and how many future periods to list. The sample is 1 January 2026, a 28-day cycle, a 14-day luteal phase, and six periods. The next period is 29 January 2026. Ovulation before that period is 15 January 2026, and the fertile window is 10 January 2026 through 15 January 2026.',
      'Those dates match the ovulation page when it is given the same last period, the same cycle, and the same luteal phase. The pregnancy due date page counts in the other direction, from a last period toward a due date. This page stays on the next periods and one fertile window. It does not confirm a pregnancy and it does not provide contraception.',
      'A real cycle moves. Illness, contraception, breastfeeding, stress, and pregnancy can all shift the next date off this count. The list is what the calendar does if the length you typed repeats. It is not a prediction that it will.'
    ],
    steps: [
      'Enter the first day of your last period. The sample is 2026-01-01.',
      'Enter the usual cycle length in whole days, from 21 to 45. The sample is 28. That length is the gap from one period start to the next, not the number of bleeding days.',
      'Enter the luteal phase, from 10 to 16 days. The sample is 14. Ovulation is the next period minus that many days. Then choose how many periods to list, from 1 to 12.',
      'Press Calculate. The headline is the next period. The list, the ovulation date, and the fertile window are underneath.'
    ],
    howHeading: 'How the next period and the fertile window are counted',
    howItWorks: [
      'The next period is the last period plus one cycle. 1 January 2026 plus 28 days is 29 January 2026. The following dates keep adding 28 days: 26 February 2026, 26 March 2026, and so on. A 28-day step from 1 February 2024 lands on 29 February 2024, because 2024 is a leap year. The page uses the calendar, not a 30-day month.',
      'Ovulation is that next period minus the luteal phase. With 14 days, 29 January minus 14 days is 15 January 2026. The fertile window starts five days before ovulation and ends on ovulation day, so it is 10 January through 15 January. It does not add the day after. That is the same window the ovulation page prints for one cycle.',
      'A longer or shorter luteal phase moves ovulation and leaves the period dates alone. A 12-day luteal phase puts ovulation two days later than a 14-day phase, because it is subtracted from the same next period. The pregnancy due date page always counts conception as cycle length minus 14, so a luteal phase other than 14 will not match that page’s conception day. The result does not hide the difference.',
      'The count of periods is a list, not a probability. Six entries means six additions of the cycle length. If your cycles are 26, 30, and 28 days, no single length will reproduce them. Type the length you want the estimate to assume, and treat a late period as a reason to look at a test or a clinician, not as a reason to add days on this form until it matches.'
    ],
    formula: 'Next period = last period + cycle length in days\nLater periods = last period + cycle length × 1, 2, 3, …\nOvulation = next period − luteal phase\nFertile window = ovulation − 5 days through ovulation day\nCycle length is 21 to 45 days\nLuteal phase is 10 to 16 days\nThe list can hold 1 to 12 periods',
    formulaNotes: [
      '1 January 2026 plus 28 days is 29 January 2026. Minus a 14-day luteal phase, ovulation is 15 January 2026. The fertile window is 10 January through 15 January.',
      '1 February 2024 plus 28 days is 29 February 2024. The leap day is a calendar fact, not a change to the cycle length.'
    ],
    examplesHeading: 'Worked period examples',
    examples: [
      {
        title: '1 January 2026, 28-day cycle, 14-day luteal phase',
        paragraphs: [
          'The headline is next period 29 January 2026. The first three dates in the list are 29 January 2026, 26 February 2026, and 26 March 2026. Ovulation is 15 January 2026. The fertile window is 10 January 2026 through 15 January 2026.',
          'The ovulation page, given the same three inputs, prints the same ovulation date and the same five-day window. Use that page if you want the following ovulation as well. Use this page if you want the period list.'
        ]
      },
      {
        title: 'A 35-day cycle',
        paragraphs: [
          'Change the cycle to 35 and keep 1 January 2026 and a 14-day luteal phase. The next period is 5 February 2026. Ovulation is 22 January 2026, which is 14 days before that period. The fertile window moves with it.',
          'The pregnancy due date page, given a last period of 1 January 2026 and a 35-day cycle, moves the due date later as well, but it still treats conception as cycle length minus 14. A luteal phase of 14 lines up with that convention. A different luteal phase does not.'
        ]
      },
      {
        title: 'A leap day',
        paragraphs: [
          'Last period 1 February 2024, cycle 28. The next period is 29 February 2024. The calculator does not skip the leap day and it does not invent a 29 February in 2026, which is not a leap year.',
          'A cycle that would land on a date that does not exist is not a problem for day addition. 31 January plus 30 days is a real March date. The page rejects a last-period date that is not a real calendar day, such as 31 February, before it adds anything.'
        ]
      }
    ],
    table: {
      heading: 'Dates from 1 January 2026 on a 28-day cycle',
      caption: 'Luteal phase 14 days. The fertile window is the five days before ovulation plus ovulation day. Later periods keep adding 28 days. This is a calendar estimate, not a prediction that the cycle will stay 28 days.',
      headers: ['Event', 'Date'],
      rows: [
        ['Fertile window starts', '10 January 2026'],
        ['Estimated ovulation', '15 January 2026'],
        ['Next period', '29 January 2026'],
        ['Period after that', '26 February 2026'],
        ['Third period', '26 March 2026']
      ]
    },
    limitsHeading: 'What a cycle count does not tell you',
    limits: [
      'It is not contraception and it is not a fertility treatment. Sperm survival and the day of ovulation both vary. A fertile window on a calendar is an estimate from the length you typed.',
      'It does not detect pregnancy. A late period can be a pregnancy, and it can be a longer cycle. The pregnancy due date page counts a due date from a last period. This page does not turn a missed period into a due date.',
      'Bleeding days, spotting, and a period that starts at night are not separate fields. The date you type is day one. The cycle length is the gap between day-one dates, not the number of days of bleeding.',
      'The ovulation page and this page share the fertile-window rule so the two tools do not disagree on the same inputs. If you change the luteal phase on only one of them, the dates will diverge, which is the inputs and not two different medical rules.'
    ],
    disclaimer: 'This period list is a calendar estimate from the cycle length you typed. It is not medical advice, not contraception, and not a pregnancy test.',
    faqs: [
      { q: 'When is the next period after 1 January 2026 on a 28-day cycle?', a: '29 January 2026. The date after that is 26 February 2026, then 26 March 2026, if the cycle stays 28 days. The calculator adds the cycle length. It does not predict that a real cycle will stay that length.' },
      { q: 'When is ovulation on a 28-day cycle with a 14-day luteal phase?', a: '15 January 2026 if the last period started on 1 January 2026. That is the next period, 29 January, minus 14 days. The fertile window is 10 January through 15 January. The ovulation page prints the same dates for those inputs.' },
      { q: 'Does this period calculator account for leap years?', a: 'Yes. 1 February 2024 plus 28 days is 29 February 2024. 2026 is not a leap year, so a February date in 2026 will not land on a 29th unless the day count reaches a real date. The page uses the calendar rather than a fixed 30-day month.' },
      { q: 'Is the fertile window safe to use as contraception?', a: 'No. It is five days before the estimated ovulation plus that ovulation day, counted from a cycle length you typed. Ovulation can move. This page is not a contraceptive method and not medical advice.' },
      { q: 'How is this different from the pregnancy due date calculator?', a: 'The due-date page counts forward from a last period to a due date, and it treats conception as cycle length minus 14. This page counts the next period starts and one fertile window. A 35-day cycle changes both tools. A luteal phase other than 14 changes this window and does not change that page’s conception rule.' }
    ],
    relatedLinks: [
      { slug: 'ovulation-calculator', label: 'Ovulation calculator', note: 'The same luteal subtraction and the same five-day window. A 1 January 2026 period, 28-day cycle, and 14-day luteal phase ovulates on 15 January 2026 there too.' },
      { slug: 'pregnancy-due-date-calculator', label: 'Pregnancy due date calculator', note: 'A due date from a last period. A 1 January 2026 period and a 28-day cycle is due 8 October 2026 on that page.' },
      { slug: 'add-days-calculator', label: 'Add days calculator', note: 'Adds a number of days to any date. It does not know a cycle or a luteal phase.' }
    ]
  },
  'pace-calculator': {
    title: 'Pace Calculator: Time, Pace, and Distance | ClearCalc',
    h1: 'Pace Calculator',
    description: 'Find running pace, finish time, or distance for any course. A 5 kilometre finish of 25:00 is 5:00 per kilometre and 8:02.8 per mile. The 5K page is the fixed-distance version of that split.',
    intro: [
      'This pace calculator works in three directions. Give it a distance and a time and it returns the pace. Give it a distance and a pace and it returns the time. Give it a time and a pace and it returns the distance. Distances can be kilometres or miles. The sample is 5 kilometres in 25:00, which is 5:00 per kilometre and 8:02.8 per mile.',
      'That 5 kilometre split is the same one the 5K pace page prints for a 25:00 finish. The 5K page also knows 10K, a half marathon, and a marathon as fixed race distances, and it starts from a finish time. This page is any distance, and it can start from the pace instead of the time. Use the 5K page when the race is one of those standard lengths. Use this page when the course is a number you type.',
      'The mile conversion is the international mile, 1.609344 kilometres. Pace per mile for a 5:00 kilometre pace is 5:00 times 1.609344, which is 8 minutes and 2.8 seconds. The headline drops a trailing .0, so an even 5 minutes shows as 5:00 rather than 5:00.0.'
    ],
    steps: [
      'Choose what you want: pace from distance and time, time from distance and pace, or distance from time and pace. Choose kilometres or miles.',
      'For a pace, enter the distance and the finish time in hours, minutes, and seconds. The sample is 5 kilometres, 0 hours, 25 minutes, and 0 seconds.',
      'For a time or a distance, enter the pace as minutes and seconds per kilometre or per mile. The sample pace fields are 5 minutes and 0 seconds, which matches the sample finish.',
      'Press Calculate. The headline is the pace, the finish time, or the distance, depending on the mode. The other unit, miles or kilometres, is underneath.'
    ],
    howHeading: 'How pace, time, and distance convert',
    howItWorks: [
      'Pace is time divided by distance. 25 minutes is 1,500 seconds. Divided by 5 kilometres that is 300 seconds per kilometre, which is 5:00. Speed is the distance divided by the hours, so 5 kilometres in 25 minutes is 12.00 km/h. The other pace multiplies by 1.609344 when you started in kilometres, or divides by it when you started in miles.',
      'Time is pace times distance. A half marathon typed as 13.1 miles at 8:00 per mile is 13.1 × 480 seconds = 6,288 seconds, which the headline shows as 1:44:48. The headline rounds to the nearest second. The detail line keeps one decimal of seconds when the product is not whole.',
      'Distance is time divided by pace. The unit of the distance matches the unit of the pace. A pace entered in minutes per mile produces miles. The other unit is printed as a second line. Hours can be 0. Minutes on a finish time are 0 to 59, and seconds are from 0 up to but not including 60. A pace of 0 is rejected.',
      'The 5K page’s 25:00 result is the check for this formula. If this page ever showed something other than 5:00 per kilometre and 8:02.8 per mile for that finish, the mile factor would be wrong. The factor is 1.609344, not a rounded 1.6.'
    ],
    formula: 'Pace = time / distance\nTime = pace × distance\nDistance = time / pace\n1 mile = 1.609344 kilometres\nPace per mile = pace per kilometre × 1.609344\nThe pace headline drops a trailing .0 and keeps one decimal otherwise\nThe time headline is hours:minutes:seconds, rounded to the nearest second',
    formulaNotes: [
      '5 kilometres in 1,500 seconds is 300 seconds per kilometre, or 5:00. Times 1.609344 that is 482.8032 seconds per mile, or 8:02.8.',
      '13.1 miles at 8:00 per mile is 6,288 seconds, which displays as 1:44:48. A road half marathon is often 13.1094 miles. 13.1 is the distance you typed, not a course certificate.'
    ],
    examplesHeading: 'Worked pace examples',
    examples: [
      {
        title: '5 kilometres in 25:00',
        paragraphs: [
          'Mode pace, unit kilometres, distance 5, time 0:25:00. The headline is 5:00 per km. Pace per mile is 8:02.8. Speed is 12.00 km/h.',
          'The 5K pace page prints the same two splits for a 25:00 finish. This page will also take 4.8 kilometres or 6.2 miles. The 5K page will not, because those are not the race distances it lists.'
        ]
      },
      {
        title: '13.1 miles at 8:00 per mile',
        paragraphs: [
          'Mode time, unit miles, distance 13.1, pace 8 minutes and 0 seconds. The headline is 1:44:48. The exact second count is 6,288.0.',
          'An 8:00 mile is 4:58.4 per kilometre, because 480 / 1.609344 seconds is that pace. This mode does not print that conversion. Switch the unit to kilometres and enter the kilometre pace if you want the time from a kilometre split.'
        ]
      },
      {
        title: 'How far in 45 minutes at 6:00 per kilometre',
        paragraphs: [
          'Mode distance, unit kilometres, time 0:45:00, pace 6 minutes and 0 seconds. Distance is time divided by pace. 45 minutes is 7.5 times a 6-minute kilometre, so the distance is 7.50 km.',
          'The mile line divides by 1.609344. A pace of 0 is rejected in every mode. A finish time of 0 is rejected when the mode needs a time. The page does not invent an infinite pace.'
        ]
      }
    ],
    table: {
      heading: 'Pace checks against a known split',
      caption: 'The 5 kilometre row matches the 5K pace page. The half-marathon row uses 13.1 miles exactly as typed. The mile factor is 1.609344 kilometres.',
      headers: ['Question', 'Inputs', 'Result'],
      rows: [
        ['Pace', '5 km in 25:00', '5:00 per km, 8:02.8 per mile'],
        ['Time', '13.1 miles at 8:00 per mile', '1:44:48'],
        ['Distance', '45:00 at 6:00 per km', '7.50 km']
      ]
    },
    limitsHeading: 'What this pace math leaves out',
    limits: [
      'It does not know hills, stops, or a treadmill setting. The pace is time divided by the distance you type. A watch that pauses, or a course that was long, will not match a straight division of the gun time.',
      'It does not estimate calories. The calorie and TDEE pages are body equations, not running splits. A 5:00 kilometre is not a calorie total.',
      'Standard race distances beyond the number you type live on the 5K page, which also lists 10K, half marathon, and marathon splits from one finish time. This page does not store those race lengths.',
      'Seconds on the pace can be fractional. Seconds on the finish-time fields are a number from 0 up to but not including 60, so 59.5 is allowed and 60 is not. Put 60 seconds in as 1 minute.'
    ],
    disclaimer: 'This pace is time and distance arithmetic. It is not a training plan, a race result, or a calorie estimate.',
    faqs: [
      { q: 'What is the pace for a 5K in 25 minutes?', a: '5:00 per kilometre and 8:02.8 per mile. That is 1,500 seconds divided by 5 kilometres, then multiplied by 1.609344 for the mile. The 5K pace page shows the same two splits for a 25:00 finish.' },
      { q: 'How long does 13.1 miles take at 8:00 per mile?', a: '1:44:48, which is 6,288 seconds. The page multiplies the pace by the distance and rounds the headline to the nearest second. 13.1 is the distance you type. A certified half marathon can differ in the third decimal of a mile.' },
      { q: 'How is this pace calculator different from the 5K page?', a: 'The 5K page fixes the distance at 5 kilometres and can also place that effort on a 10K, a half marathon, and a marathon. This page takes any distance and can solve for time or distance from a pace. The shared check is 25:00 for 5 kilometres.' },
      { q: 'Which mile does the pace conversion use?', a: 'The international mile, 1.609344 kilometres. A factor of 1.6 would miss the 8:02.8 split. The fuel economy converter uses the same mile when it turns miles per gallon into litres per 100 kilometres.' },
      { q: 'Can I enter a pace of 5 minutes and 30 seconds?', a: 'Yes. Put 5 in the pace minutes and 30 in the pace seconds. Those fields are used when you are solving for time or distance. The finish-time fields are used when you are solving for pace. A pace of 0 is rejected.' }
    ],
    relatedLinks: [
      { slug: '5k-pace-calculator', label: '5K pace calculator', note: 'A 25:00 5K is 5:00 per kilometre and 8:02.8 per mile, and that page also projects the effort onto longer standard races.' },
      { slug: 'calorie-calculator', label: 'Calorie calculator', note: 'A maintenance estimate from height, weight, age, and an activity multiplier. Not a running split.' },
      { slug: 'tdee-calculator', label: 'TDEE calculator', note: 'BMR times an activity factor. A 5:00 kilometre is not an input.' },
      { slug: 'fuel-economy-converter', label: 'Fuel economy converter', note: 'Miles, kilometres, and gallons. The mile factor is the same 1.609344, applied to fuel rather than pace.' }
    ]
  },
  'electricity-cost-calculator': {
    title: 'Electricity Cost Calculator: Watts, Hours, and kWh | ClearCalc',
    h1: 'Electricity Cost Calculator',
    description: 'Turn watts, hours, and a price per kWh into energy and cost. A 60 W bulb for 5 hours a day over 30 days at $0.16 per kWh uses 9 kWh and costs $1.44. A 1,500 W heater for 4 hours on those days costs $28.80.',
    intro: [
      'This electricity cost calculator multiplies power by time and by a price. Watts are divided by 1,000 to get kilowatts, then multiplied by hours per day and by the number of days. That product is kilowatt-hours. Cost is the kilowatt-hours times the price per kWh you type. The sample is a 60 W load, 5 hours a day, 30 days, at $0.16 per kWh. Energy is 9.000 kWh and the cost is $1.44.',
      'The device is not a menu. A 60 W bulb is the sample only because 60 × 5 × 30 / 1,000 is 9, an easy check. A 1,500 W space heater for 4 hours a day over the same 30 days at the same price is 180 kWh and $28.80. A phone charger that draws 5 W for 24 hours over 30 days is 3.6 kWh and $0.58. Type the watts from the label or from a meter. The page will not look up a model number.',
      'The headline uses a dollar sign because the arithmetic is a currency amount. The price you type might be US dollars, Canadian dollars, or another currency that uses the same symbol. The page does not add a utility’s daily supply charge, a tax, or a higher tier that starts after a block of kilowatt-hours. Those belong on the bill, not in this product.'
    ],
    steps: [
      'Enter the power in watts. The sample is 60. A heater labeled 1.5 kW is 1500 watts.',
      'Enter hours per day, from 0 to 24, and the number of days, from 0 to 366. The sample is 5 hours and 30 days.',
      'Enter the price per kWh. The sample is 0.16. Use the energy rate on the bill, not the total bill divided by nothing. A price above 5 per kWh is rejected as a likely unit mistake.',
      'Press Calculate. The headline is the cost. Kilowatt-hours are the first detail line.'
    ],
    howHeading: 'How watts become a cost',
    howItWorks: [
      'Kilowatt-hours = watts / 1,000 × hours per day × days. The sample is 60 / 1,000 × 5 × 30 = 0.06 × 150 = 9 kWh. At $0.16 per kWh the cost is 9 × 0.16 = $1.44. The energy line keeps three decimal places, so a small load does not round to 0 kWh before you see it.',
      'A 1,500 W heater for 4 hours is 6 kWh a day. Over 30 days that is 180 kWh. At $0.16 the cost is $28.80. The same heater for 1 hour a day is a quarter of that energy and a quarter of that cost, because nothing in the formula is a tier or a minimum bill.',
      'Hours are capped at 24 because the field is hours per day, not hours in the whole period. If a device runs 5 hours on weekdays only, either lower the days or lower the hours to an average. The page will not take a weekly schedule. Days can be 365 or 366 for a year-long estimate at a constant load.',
      'Standby power is a watt figure like any other. If a television draws 2 W all day, type 2 watts and 24 hours. Do not add the standby watts to the playing watts and then also type 24 hours, or you will charge the playing load for the hours it was off.'
    ],
    formula: 'kWh = watts / 1,000 × hours per day × days\nCost = kWh × price per kWh\nHours per day are from 0 to 24\nDays are from 0 to 366\nPrice per kWh is from 0 to 5\nThe headline is the cost, shown with a dollar sign',
    formulaNotes: [
      '60 W × 5 hours × 30 days / 1,000 = 9 kWh. 9 × $0.16 = $1.44.',
      '1,500 W × 4 hours × 30 days / 1,000 = 180 kWh. 180 × $0.16 = $28.80. 5 W × 24 hours × 30 days / 1,000 = 3.6 kWh, and 3.6 × $0.16 = $0.58.'
    ],
    examplesHeading: 'Worked electricity examples',
    examples: [
      {
        title: 'A 60 W bulb, 5 hours a day, 30 days',
        paragraphs: [
          'The headline is $1.44. Energy is 9.000 kWh. The price is $0.16 per kWh. The arithmetic is small enough to check by hand: 0.06 kW × 5 × 30 = 9, and 9 × 0.16 = 1.44.',
          'An LED that is actually 9 W, not 60, is a different load. Type 9. The page does not know that a bulb sold as “60 W equivalent” draws far less than 60 W. The label’s true wattage is the input.'
        ]
      },
      {
        title: 'A 1,500 W heater and a 5 W charger',
        paragraphs: [
          'Heater: 1500 watts, 4 hours, 30 days, 0.16 per kWh. Energy is 180.000 kWh and the cost is $28.80. Charger: 5 watts, 24 hours, 30 days, 0.16. Energy is 3.600 kWh and the cost is $0.58.',
          'The heater costs about fifty times the charger on these hours because the watts and the hours both differ. Comparing devices by watts alone misses a load that runs all day.'
        ]
      },
      {
        title: 'A year at a constant load',
        paragraphs: [
          'Days can be 365. A 60 W load for 5 hours on 365 days is 109.5 kWh. At $0.16 that is $17.52. The page does not apply a seasonal rate or a leap day unless you type 366.',
          'A bill that includes a $15 monthly supply charge is not this number. Twelve supply charges would be $180 before a single kilowatt-hour. Add that yourself. The formula here is only the energy.'
        ]
      }
    ],
    table: {
      heading: 'Cost of three loads at $0.16 per kWh for 30 days',
      caption: 'Each row is what this calculator returns. The wattage is the actual draw, not a marketing equivalent. No supply charge or tax is included.',
      headers: ['Load', 'Hours per day', 'Energy', 'Cost'],
      rows: [
        ['60 W bulb', '5', '9.000 kWh', '$1.44'],
        ['1,500 W heater', '4', '180.000 kWh', '$28.80'],
        ['5 W charger', '24', '3.600 kWh', '$0.58']
      ]
    },
    limitsHeading: 'What this electricity cost leaves out',
    limits: [
      'A daily supply charge, a demand charge, sales tax, and a tier that changes the price after a block of kilowatt-hours are not added. The price is one number for every kWh in the period.',
      'The page does not know your utility. $0.16 is a sample price, not a national average and not a quote. Read the energy rate on the bill.',
      'Power factor, a 240 V circuit, and a motor that draws a surge at startup are not modeled. If you have a plug-in meter, type the average watts it shows. The nameplate wattage can be a maximum rather than the load you actually run.',
      'The dollar sign on the headline is the currency format. A price in cents has to be typed in dollars, so 16 cents is 0.16, not 16. A price of 16 would be rejected as above the cap of 5, which is there to catch that mistake.'
    ],
    disclaimer: 'This electricity cost is watts times hours times a price you type. It is not a utility bill and not a quote.',
    faqs: [
      { q: 'How much does a 60 W bulb cost at $0.16 per kWh?', a: 'If it runs 5 hours a day for 30 days, it uses 9 kWh and costs $1.44. The formula is 60 / 1,000 × 5 × 30 × 0.16. A bulb marketed as a 60 W replacement often draws much less. Type the actual watts.' },
      { q: 'How much does a 1,500 W space heater cost?', a: '$28.80 for 4 hours a day over 30 days at $0.16 per kWh. That is 180 kWh. One hour a day would be a quarter of the energy and a quarter of the cost, because the price does not change with a tier in this formula.' },
      { q: 'What is a kilowatt-hour in this calculator?', a: 'Watts divided by 1,000, times hours. A 1,000 W load for 1 hour is 1 kWh. The sample 60 W load for 5 hours is 0.3 kWh that day, and 9 kWh over 30 days.' },
      { q: 'Does the electricity calculator include the fixed charge on my bill?', a: 'No. It also leaves out tax and a higher rate that starts after you have used a block of energy. The result is only the energy at the single price you type. A supply charge has to be added by hand.' },
      { q: 'Why is the price rejected when I type 16?', a: 'Because the field is dollars per kWh, and 16 dollars per kWh is above the cap of 5, which is there to catch a price that was still in cents. Sixteen cents is 0.16.' }
    ],
    relatedLinks: [
      { slug: 'fuel-cost-calculator', label: 'Fuel cost calculator', note: 'A trip’s fuel from distance and mpg or L/100 km. Not a kilowatt-hour.' },
      { slug: 'fuel-economy-converter', label: 'Fuel economy converter', note: 'Converts mpg and L/100 km. It does not price electricity.' },
      { slug: 'percentage-calculator', label: 'Percentage calculator', note: 'A share of a number. A tiered electric rate is not computed here.' }
    ]
  },
  'fuel-cost-calculator': {
    title: 'Fuel Cost Calculator: MPG and Litres per 100 km | ClearCalc',
    h1: 'Fuel Cost Calculator',
    description: 'Price a trip from distance and fuel economy. 300 miles at 30 US mpg and $3.50 a US gallon costs $35.00. 100 km at 8 L/100 km and £1.50 a litre costs £12.00. US and UK gallons are different.',
    intro: [
      'This fuel cost calculator prices the fuel for one distance. You choose miles or kilometres, and you choose US miles per gallon, UK miles per gallon, or litres per 100 kilometres. The price can be per US gallon, per UK gallon, or per litre, and you can label it in US dollars, pounds, Canadian dollars, or Australian dollars. The sample is 300 miles at 30 US mpg and $3.50 per US gallon. The cost is $35.00. The fuel used is 10 US gallons, which is 37.854 litres.',
      'A US gallon is 3.785411784 litres. A UK gallon is 4.54609 litres. They are not interchangeable. Thirty miles per US gallon is not 30 miles per UK gallon. The fuel economy converter on this site turns one economy figure into the others without a trip cost. This page adds the distance and the price. One hundred kilometres at 8 L/100 km uses 8 litres. At £1.50 a litre the cost is £12.00.',
      'Tolls, a hire charge, and a return trip are not included unless the distance you type already includes the drive back. The cost is the fuel at the price you typed, in the currency you selected.'
    ],
    steps: [
      'Enter the distance and choose miles or kilometres. The sample is 300 miles.',
      'Enter the fuel economy and its unit: US mpg, UK mpg, or L/100 km. The sample is 30 US mpg. A lower L/100 km figure means less fuel, which is the opposite direction from mpg.',
      'Enter the price, what that price is per, and the currency label. The sample is 3.5 per US gallon, in US dollars.',
      'Press Calculate. The headline is the trip cost. Litres, both gallons, and the economy restated in the other units are underneath.'
    ],
    howHeading: 'How US gallons, UK gallons, and litres meet',
    howItWorks: [
      'The page converts the distance into both miles and kilometres using 1.609344 kilometres per mile. It then finds litres. US mpg uses miles divided by mpg, times 3.785411784 litres per US gallon. UK mpg uses the UK gallon, 4.54609 litres. L/100 km uses kilometres times the economy figure, divided by 100. The sample’s 300 / 30 = 10 US gallons, and 10 × 3.785411784 = 37.854 litres.',
      'The price unit decides the cost. Per US gallon, the cost is US gallons times the price, so 10 × $3.50 = $35.00. Per litre, the cost is litres times the price. Per UK gallon, the cost uses UK gallons. Mixing a US mpg figure with a price per UK gallon is allowed, and the page converts. It does not assume the two gallons match.',
      'The detail lines restate the economy as US mpg, UK mpg, and L/100 km so you can see the conversion the fuel economy page would have done on its own. Thirty US mpg is 36.03 UK mpg and 7.84 L/100 km, the same pair the fuel economy converter prints for 30 US mpg. The trip cost is the extra step that converter does not take.',
      'A currency label changes the symbol and nothing else. Choosing pounds does not convert $3.50 into sterling. It only marks the price you typed as pounds. If the pump price is £1.50 a litre, type 1.5, per litre, and pounds. The 100 km example then costs £12.00.'
    ],
    formula: '1 mile = 1.609344 km\n1 US gallon = 3.785411784 litres\n1 UK gallon = 4.54609 litres\nLitres from US mpg = miles / mpg × 3.785411784\nLitres from UK mpg = miles / mpg × 4.54609\nLitres from L/100 km = kilometres × (L/100 km) / 100\nCost = gallons or litres × the price, using the price unit you chose\nThe currency label formats the symbol. It does not convert money.',
    formulaNotes: [
      '300 miles at 30 US mpg is 10 US gallons. At $3.50 a gallon the cost is $35.00. Those 10 gallons are 37.854 litres.',
      '100 km at 8 L/100 km is 8 litres. At £1.50 a litre the cost is £12.00. 30 US mpg is 7.84 L/100 km, the same figure as the fuel economy converter.'
    ],
    examplesHeading: 'Worked fuel-cost examples',
    examples: [
      {
        title: '300 miles at 30 US mpg and $3.50 a gallon',
        paragraphs: [
          'The headline is $35.00. Fuel used is 37.854 litres, which is 10.000 US gallons and 8.327 UK gallons. The economy restated is 30.00 US mpg, 36.03 UK mpg, and 7.84 L/100 km.',
          'The $35 is 10 times $3.50. If the pump sells litres and you type the gallon price by mistake, the cost will be wrong. Match the price unit to the sign on the pump.'
        ]
      },
      {
        title: '100 kilometres at 8 L/100 km and £1.50 a litre',
        paragraphs: [
          'Distance 100, unit kilometres, economy 8, unit L/100 km, price 1.5 per litre, currency pounds. The headline is £12.00. Litres are 8.000. The cost is 8 × 1.50.',
          'The same 100 km at 30 US mpg is a different economy. 30 US mpg is 7.84 L/100 km, so the litres would be a little under 8 and the cost a little under £12. Type the figure you actually have. Do not assume 30 mpg and 8 L/100 km are the same car.'
        ]
      },
      {
        title: 'Why the UK gallon changes the bill',
        paragraphs: [
          'Thirty UK mpg on 300 miles uses fewer litres than 30 US mpg, because the UK gallon is larger. The car went further per gallon only because the gallon contains 4.54609 litres instead of 3.785411784. The page shows both gallon counts so the unit is visible.',
          'The fuel economy converter is the place to flip a number between US mpg, UK mpg, and L/100 km without a distance. Bring the converted number back here if you then want a trip cost. This page will also do that conversion inside the detail lines.'
        ]
      }
    ],
    table: {
      heading: 'Trip fuel at two sample prices',
      caption: 'US gallon = 3.785411784 litres. UK gallon = 4.54609 litres. 1 mile = 1.609344 km. The currency is the label you select. It does not convert the price.',
      headers: ['Trip', 'Economy', 'Price', 'Cost'],
      rows: [
        ['300 miles', '30 US mpg', '$3.50 per US gallon', '$35.00'],
        ['100 km', '8 L/100 km', '£1.50 per litre', '£12.00']
      ]
    },
    limitsHeading: 'What this trip cost leaves out',
    limits: [
      'It does not add tolls, parking, a rental fee, or the drive home unless that distance is already in the number you typed. It is the fuel for the distance on the form.',
      'The currency label does not convert dollars to pounds. A price of 3.50 marked as pounds is £3.50, not the sterling value of $3.50. Type the price in the currency you will pay.',
      'City and highway economy are not blended. If the trip is half of each, average them yourself or run the trip in two pieces. The page uses one economy figure for the whole distance.',
      'The gallon sizes are the defined litre values, the same ones the fuel economy converter uses. A pump that still talks about a different historical gallon is not this conversion.'
    ],
    disclaimer: 'This fuel cost is distance, economy, and a price you type. It is not a quote from a station and not a currency conversion.',
    faqs: [
      { q: 'How much does 300 miles cost at 30 mpg and $3.50 a gallon?', a: '$35.00 if the 30 mpg and the $3.50 are both US gallons. The trip uses 10 US gallons, which is 37.854 litres. A UK gallon is larger, so 30 UK mpg is a different amount of fuel.' },
      { q: 'How much does 100 km cost at 8 litres per 100 km?', a: '£12.00 if the price is £1.50 a litre. The trip uses 8 litres, and 8 × 1.50 = 12. Label the currency as pounds. The page will not turn a dollar price into sterling for you.' },
      { q: 'What is the difference between a US gallon and a UK gallon?', a: 'A US gallon is 3.785411784 litres. A UK gallon is 4.54609 litres. Thirty miles per US gallon is 7.84 L/100 km and 36.03 UK mpg, which is the same conversion the fuel economy page shows. This page then multiplies by a distance and a price.' },
      { q: 'Does the fuel cost include the return trip?', a: 'Only if the distance you typed includes it. The sample 300 miles is one way unless your drive really is 300 miles in total. Tolls and parking are not added either.' },
      { q: 'Why does changing the currency not change the number?', a: 'The currency control picks the symbol. It does not look up an exchange rate. Type the price in the money you will pay, and choose the matching label so the headline shows $, £, or the Canadian or Australian dollar format.' }
    ],
    relatedLinks: [
      { slug: 'fuel-economy-converter', label: 'Fuel economy converter', note: '30 US mpg is 7.84 L/100 km and 36.03 UK mpg. That page does not price a trip.' },
      { slug: 'electricity-cost-calculator', label: 'Electricity cost calculator', note: 'Watts, hours, and a price per kWh. A 60 W bulb for 5 hours over 30 days at $0.16 is $1.44.' },
      { slug: 'length-converter', label: 'Length converter', note: 'Metres to feet, inches, yards, or kilometres. Not a fuel economy.' },
      { slug: 'pace-calculator', label: 'Pace calculator', note: 'Running pace from time and distance. It uses the same 1.609344 kilometre mile, for a split rather than a gallon.' }
    ]
  }
};
