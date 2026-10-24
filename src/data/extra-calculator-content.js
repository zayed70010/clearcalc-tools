const paycheckLimits = [
  'The federal income tax line is an annual Form 1040-style estimate, then divided by the number of paychecks. It is not the IRS Publication 15-T percentage method, and it does not read a Form W-4. A dependent, extra withholding, a second job, or the head-of-household standard deduction of $24,150 will not match. Married filing jointly applies the joint brackets and the $32,200 standard deduction to this salary alone. If a spouse also has income, the result understates the tax.',
  'Traditional 401(k) deferrals reduce wages for federal income tax up to the 2026 elective deferral limit of $24,500. They also reduce California taxable income on the California calculator. Catch-up contributions are not added on these paycheck forms. Social Security and Medicare still apply to the gross wages. Roth deferrals are after-tax and should be entered as zero. Pre-tax health premiums, HSAs, and FSAs are not separate fields. If one of those has already come out of the wage figure you type, do not subtract it again.',
  'Additional Medicare Tax withholding, from Publication 15 for 2026, is 0.9% of wages over $200,000 from the employer, whatever the filing status. On a joint return the tax itself starts at $250,000 of wages for the couple, so a joint filer can have tax withheld that the return later adjusts. This page follows the withholding threshold. Employer Social Security and employer Medicare are not deducted, and neither is federal unemployment tax.'
];

export const extraCalculatorContent = {
  'texas-paycheck-calculator': {
    title: 'Texas Paycheck Calculator 2026 | ClearCalc',
    h1: 'Texas Paycheck Calculator for 2026',
    description: 'Estimate a 2026 Texas paycheck after federal income tax, Social Security, and Medicare. Texas wages have a $0 state income tax line.',
    intro: [
      'This Texas paycheck calculator estimates what is left from 2026 wages after federal income tax, Social Security, and Medicare. The state income tax line is $0. Texas does not levy a personal income tax on wages, and this form does not add a city or county wage tax either. Enter annual gross wages, choose single or married filing jointly, choose how often you are paid, and enter any traditional 401(k) deferral. The headline is one paycheck.',
      'The sample is $65,000, single, paid every two weeks, with no 401(k). Federal income tax uses the tax year 2026 rate schedule and standard deduction in IRS Revenue Procedure 2025-32. Social Security and Medicare use the employee rates in IRS Publication 15 for 2026 and the Social Security wage base of $184,500.'
    ],
    steps: [
      'Enter annual gross wages in dollars. The sample, 65000, means $65,000 for the year, not $65,000 per paycheck.',
      'Choose Single or Married filing jointly. Joint uses the joint brackets and the $32,200 standard deduction on this salary only.',
      'Choose a pay frequency. Every two weeks means 26 paychecks. Twice a month means 24. Weekly is 52 and monthly is 12.',
      'Enter a traditional 401(k) deferral for the year, or leave 0. Press Calculate. The headline is annual take-home divided by the number of paychecks.'
    ],
    howHeading: 'How a 2026 Texas paycheck is estimated',
    howItWorks: [
      'Federal taxable wages are gross wages minus the traditional 401(k) deferral actually applied, then minus the standard deduction. For 2026 that deduction is $16,100 for a single filer and $32,200 for married filing jointly. The deferral is capped at wages and at the $24,500 elective deferral limit from IRS Notice 2025-67. Tax on what remains uses the Revenue Procedure 2025-32 brackets: 10%, 12%, 22%, 24%, 32%, 35%, and 37%. For a single filer the 10% band ends at $12,400 of taxable income, 12% runs to $50,400, 22% to $105,700, 24% to $201,775, 32% to $256,225, 35% to $640,600, and 37% above that. Joint bands are wider, and the 37% rate starts above $768,700 of taxable income.',
      'Social Security is 6.2% of wages up to $184,500, which is a maximum employee tax of $11,439. Medicare is 1.45% of all wages. Additional Medicare Tax withholding is 0.9% of wages over $200,000. None of those payroll taxes is reduced by the 401(k) deferral or by the standard deduction. Texas income tax stays at $0. The Comptroller does not impose a personal income tax on these wages, so there is nothing to index for 2026.',
      'Annual take-home is wages minus federal income tax, Social Security, Medicare, Additional Medicare Tax, and the deferral. Dividing by 26, 24, 12, or 52, and rounding to the cent, is the headline. Twenty-six times that headline can miss the annual figure by a few cents. Texas property tax and sales tax are real costs, but they are not withheld as income tax on a wage paycheck, so they are not in the formula.'
    ],
    formula: 'Tax year 2026. Texas wages. No Texas personal income tax.\nFederal taxable wages = max(0, wages − traditional 401(k) − standard deduction)\nStandard deduction = $16,100 single, or $32,200 married filing jointly\n401(k) applied = min(amount entered, wages, $24,500)\nFederal income tax = 2026 Rev. Proc. 2025-32 brackets on taxable wages\nSocial Security = 6.2% × min(wages, $184,500)\nMedicare = 1.45% × wages\nAdditional Medicare Tax = 0.9% × max(0, wages − $200,000)\nTexas income tax = $0\nAnnual take-home = wages − federal income tax − Social Security − Medicare − Additional Medicare Tax − 401(k)\nPaycheck = annual take-home ÷ number of paychecks',
    formulaNotes: [
      'A single filer with $65,000 of wages and no deferral has $48,900 of taxable income. That is $1,240 of tax at 10% on $12,400 plus $4,380 at 12% on the other $36,500, which is $5,620. Social Security is $4,030 and Medicare is $942.50. Nothing in that example crosses $184,500 or $200,000.',
      'The same wages and filing status produce the same federal and FICA figures on the Florida page, because Florida also contributes $0 of state income tax. The California page does not. Use this page when the wages are Texas wages. Wages earned in a state that does tax pay, even if you live in Texas, are outside the $0 line.'
    ],
    examplesHeading: 'Worked 2026 Texas paycheck examples',
    examples: [
      {
        title: '$65,000, single, every two weeks, no 401(k)',
        paragraphs: [
          'Federal income tax is $5,620.00, Social Security is $4,030.00, and Medicare is $942.50. Additional Medicare Tax is $0.00 and Texas income tax is $0.00. Annual take-home is $54,407.50. Divided by 26, the headline is $2,092.60 / two weeks. Twenty-six times $2,092.60 is $54,407.60, ten cents above the annual figure, because the paycheck was rounded on its own.',
          'The standard deduction line reads $16,100.00 and the filing-status line reads single. About 16.3% of the $65,000 went to federal income tax and FICA together. That percentage is a description of this example, not a flat Texas tax rate. Texas did not take a slice.'
        ]
      },
      {
        title: 'The same wages with a $6,500 traditional 401(k)',
        paragraphs: [
          'The deferral cuts taxable wages from $48,900 to $42,400. Federal income tax falls from $5,620.00 to $4,840.00, a saving of $780, which is 12% of $6,500 because the whole deferral sits in the 12% band. Social Security stays $4,030.00 and Medicare stays $942.50. The 401(k) line is $6,500.00.',
          'Annual take-home is $48,687.50, and the two-week headline is $1,872.60. Cash pay fell by more than the tax saving because $6,500 left the paycheck and only $780 of tax came back. The $6,500 is still your money, inside the plan, which this take-home figure does not spend.'
        ]
      },
      {
        title: '$120,000 joint with one salary, and $210,000 single',
        paragraphs: [
          'At $120,000, married filing jointly, paid monthly, with no deferral, the standard deduction is $32,200.00 and taxable income is $87,800. Federal income tax is $10,040.00, Social Security is $7,440.00, and Medicare is $1,740.00. Texas income tax is $0.00. Annual take-home is $100,780.00, and the headline is $8,398.33 / month. That joint result assumes the spouse has no income. A second salary needs a different return than this one-wage form can build.',
          'At $210,000, single, every two weeks, Social Security stops at the wage base: $11,439.00, which is 6.2% of $184,500. Medicare on the full $210,000 is $3,045.00. Additional Medicare Tax is 0.9% of $10,000, which is $90.00. Federal income tax is $39,134.00. Annual take-home is $156,292.00, or $6,011.23 / two weeks. Texas income tax is still $0.00.'
        ]
      }
    ],
    table: {
      heading: '2026 Texas paycheck at selected wages',
      caption: 'Single filer, paid every two weeks, no 401(k) deferral. Federal income tax uses Revenue Procedure 2025-32 and the $16,100 standard deduction. Social Security is 6.2% up to $184,500. Medicare is 1.45%, plus 0.9% Additional Medicare Tax withholding over $200,000. Texas income tax is $0.',
      headers: ['Wages', 'Federal income tax', 'Social Security', 'Medicare', 'Additional Medicare', 'Annual take-home', 'Every two weeks'],
      rows: [
        ['$40,000', '$2,620.00', '$2,480.00', '$580.00', '$0.00', '$34,320.00', '$1,320.00'],
        ['$65,000', '$5,620.00', '$4,030.00', '$942.50', '$0.00', '$54,407.50', '$2,092.60'],
        ['$100,000', '$13,170.00', '$6,200.00', '$1,450.00', '$0.00', '$79,180.00', '$3,045.38'],
        ['$150,000', '$24,734.00', '$9,300.00', '$2,175.00', '$0.00', '$113,791.00', '$4,376.58'],
        ['$184,500', '$33,014.00', '$11,439.00', '$2,675.25', '$0.00', '$137,371.75', '$5,283.53'],
        ['$250,000', '$51,304.00', '$11,439.00', '$3,625.00', '$450.00', '$183,182.00', '$7,045.46']
      ]
    },
    limitsHeading: 'What this Texas paycheck estimate leaves out',
    limits: paycheckLimits,
    disclaimer: 'This is a 2026 planning estimate for Texas wages, not a pay stub, a Form W-4, or tax advice. The IRS and your employer assess what is withheld and what you owe.',
    faqs: [
      {
        q: 'Does Texas withhold state income tax in 2026?',
        a: 'Not on wages. This calculator sets Texas income tax to $0.00 for every salary. Federal income tax, Social Security, and Medicare still come out. Local property tax and sales tax are not wage withholding and are not estimated here.'
      },
      {
        q: 'Why is a Texas paycheck the same as a Florida paycheck when the inputs match?',
        a: 'Both states add $0 of personal income tax on wages in this model. The federal brackets, the $16,100 or $32,200 standard deduction, the $184,500 Social Security wage base, and the Medicare rates are national. Enter the same wages, status, frequency, and 401(k) on each page and the dollar lines match. The state label is the difference.'
      },
      {
        q: 'Does a traditional 401(k) reduce Social Security tax on Texas wages?',
        a: 'No. On the $65,000 example, a $6,500 deferral lowers federal income tax from $5,620.00 to $4,840.00 and leaves Social Security at $4,030.00 and Medicare at $942.50. The deferral itself is also subtracted from take-home because it is not paid to you in cash.'
      },
      {
        q: 'Why might my Texas pay stub not match this 2026 estimate?',
        a: 'Employers withhold federal income tax from Publication 15-T using your Form W-4, not from this annual standard-deduction calculation. Pre-tax health insurance, a different pay count in the year, a bonus, or a second job will move the stub. The $65,000 example is $2,092.60 every two weeks only under the assumptions on the page.'
      },
      {
        q: 'When does Additional Medicare Tax appear on a Texas paycheck?',
        a: 'Withholding starts on wages over $200,000 in the year. At $210,000, single, the line is $90.00, which is 0.9% of $10,000. At $184,500 the line is still $0.00, while Social Security has already reached its $11,439.00 maximum. A joint return uses $250,000 as the tax threshold even though withholding uses $200,000.'
      }
    ],
    relatedLinks: [
      { slug: 'washington-paycheck-calculator', label: 'Washington paycheck calculator for 2026', note: 'State income tax is also $0, then Paid Leave and WA Cares come off gross wages.' },
      { slug: 'florida-paycheck-calculator', label: 'Florida paycheck calculator for 2026', note: 'The same federal and FICA rules, with a Florida state income tax line of $0.' },
      { slug: 'california-paycheck-calculator', label: 'California paycheck calculator for 2026', note: 'Adds California income tax and 1.3% State Disability Insurance.' },
      { slug: '401k-contribution-calculator', label: '2026 401(k) contribution calculator', note: 'Check a deferral rate against the $24,500 limit and an employer match before you type the dollar deferral here.' }
    ]
  },
  'florida-paycheck-calculator': {
    title: 'Florida Paycheck Calculator 2026 | ClearCalc',
    h1: 'Florida Paycheck Calculator for 2026',
    description: 'Estimate a 2026 Florida paycheck after federal income tax, Social Security, and Medicare. Florida wages have a $0 state income tax line.',
    intro: [
      'This Florida paycheck calculator estimates 2026 take-home pay from wages when the only income taxes on the paycheck are federal. Florida does not levy a personal income tax on wages, so the state line is $0. You still pay federal income tax under the tax year 2026 brackets, Social Security, and Medicare. The form takes annual gross wages, a filing status, a pay frequency, and an optional traditional 401(k) deferral.',
      'The sample is $52,000, single, paid every two weeks, with no deferral. Brackets and the standard deduction come from IRS Revenue Procedure 2025-32. Employee Social Security is 6.2% up to the 2026 wage base of $184,500, and employee Medicare is 1.45%, both as stated in IRS Publication 15 for 2026. A Florida sales tax or property tax bill is not part of this wage formula.'
    ],
    steps: [
      'Enter annual gross wages. Use 52000 for a $52,000 salary. Do not enter the amount of one paycheck unless you have already multiplied it out to a full year.',
      'Choose Single or Married filing jointly. Joint is only accurate when this salary is the only income on the joint return.',
      'Choose every two weeks (26), weekly (52), twice a month (24), or monthly (12).',
      'Enter the year’s traditional 401(k) deferral, or 0. Press Calculate and read the paycheck, the federal tax, FICA, and the $0 Florida income tax line.'
    ],
    howHeading: 'How a 2026 Florida paycheck is estimated',
    howItWorks: [
      'Taxable wages for the federal estimate equal gross wages, minus the traditional 401(k) amount the form accepts, minus the standard deduction. In 2026 the deduction is $16,100 single and $32,200 married filing jointly. The 401(k) amount cannot exceed wages or the $24,500 elective deferral limit in IRS Notice 2025-67. The tax on the remainder follows Revenue Procedure 2025-32. A single filer’s 22% bracket starts after $50,400 of taxable income. A joint filer’s 22% bracket starts after $100,800 of taxable income. The 37% thresholds are $640,600 single and $768,700 joint.',
      'FICA is calculated on gross wages, not on wages after the 401(k) or the standard deduction. Social Security stops at $184,500 of wages, a maximum of $11,439. Medicare does not stop. Additional Medicare Tax withholding of 0.9% applies to wages over $200,000, which is the employer withholding rule in Publication 15, not the $250,000 joint-return threshold. Florida income tax is then set to $0. There is no Florida wage bracket to look up for 2026.',
      'Take-home for the year is wages minus federal income tax, Social Security, Medicare, Additional Medicare Tax, and the deferral. The headline divides that year by 26, 24, 12, or 52 and rounds to the cent. If you enter the same numbers on the Texas calculator, every dollar line matches and only the state name changes. That is expected. Use the California calculator when the comparison is a job that withholds California tax and State Disability Insurance.'
    ],
    formula: 'Tax year 2026. Florida wages. No Florida personal income tax.\nFederal taxable wages = max(0, wages − traditional 401(k) − standard deduction)\nStandard deduction = $16,100 single, or $32,200 married filing jointly\n401(k) applied = min(amount entered, wages, $24,500)\nFederal income tax = 2026 Rev. Proc. 2025-32 brackets on taxable wages\nSocial Security = 6.2% × min(wages, $184,500)\nMedicare = 1.45% × wages\nAdditional Medicare Tax = 0.9% × max(0, wages − $200,000)\nFlorida income tax = $0\nAnnual take-home = wages − federal income tax − Social Security − Medicare − Additional Medicare Tax − 401(k)\nPaycheck = annual take-home ÷ number of paychecks',
    formulaNotes: [
      'At $52,000, single, with no deferral, taxable income is $35,900. Tax is 10% of $12,400, which is $1,240, plus 12% of the other $23,500, which is $2,820. Federal income tax is $4,060. The 22% bracket has not started because taxable income is under $50,400. Social Security is 6.2% of $52,000, which is $3,224. Medicare is 1.45% of $52,000, which is $754.',
      'Twice a month is 24 paychecks, not 26. A worker paid on the 15th and the last day of the month should choose that option. Choosing every two weeks on a twice-monthly salary overstates the annual wage if you typed a paycheck amount by mistake, which is why the form asks for the annual figure.'
    ],
    examplesHeading: 'Worked 2026 Florida paycheck examples',
    examples: [
      {
        title: '$52,000, single, every two weeks',
        paragraphs: [
          'Federal income tax is $4,060.00, Social Security is $3,224.00, and Medicare is $754.00. Additional Medicare Tax and Florida income tax are both $0.00. The 401(k) line is $0.00. Annual take-home is $43,962.00. The headline is $1,690.85 / two weeks. Twenty-six times $1,690.85 is $43,962.10, ten cents over the annual total, from rounding the paycheck by itself.',
          'The standard deduction applied is $16,100.00. Federal income tax plus FICA is $8,038.00, which is 15.4577% of $52,000. Florida’s share of that percentage is zero. The rest is the federal income tax and the two Medicare and Social Security rates.'
        ]
      },
      {
        title: '$85,000 married filing jointly, twice a month, with a $6,000 deferral',
        paragraphs: [
          'The joint standard deduction is $32,200.00. The $6,000 deferral is under the $24,500 limit, so taxable income is $85,000 − $6,000 − $32,200 = $46,800, all inside the 10% and 12% joint bands. Federal income tax is $5,120.00. Social Security is $5,270.00 and Medicare is $1,232.50. Florida income tax is $0.00.',
          'Annual take-home is $67,377.50 after the $6,000 deferral. There are 24 paychecks, so the headline is $2,807.40 / half month. This joint answer treats the $85,000 as the only income on the return. A spouse’s wages would use up part of the $32,200 deduction and the wide joint brackets, and the tax would be higher than $5,120.00.'
        ]
      },
      {
        title: '$190,000 single, monthly, deferring $23,000',
        paragraphs: [
          'Taxable income is $190,000 − $23,000 − $16,100 = $150,900. Federal income tax is $28,814.00. Social Security is the maximum $11,439.00 because wages are over $184,500. Medicare is 1.45% of $190,000, which is $2,755.00. Additional Medicare Tax is $0.00 because wages are not over $200,000. Florida income tax is $0.00.',
          'Annual take-home is $123,992.00 and the monthly headline is $10,332.67. The deferral is $23,000.00, under the $24,500 cap, so the form does not reduce it. Crossing $200,000 of wages, not $184,500, is what turns on the extra 0.9% Medicare withholding. This salary does the first and not the second.'
        ]
      }
    ],
    table: {
      heading: '2026 Florida paycheck at selected wages',
      caption: 'Single filer, every two weeks, no 401(k). Federal tax uses the 2026 Revenue Procedure 2025-32 schedule and the $16,100 standard deduction. Florida income tax is $0 on every row. Additional Medicare Tax is $0 because none of these wages exceed $200,000. The $184,500 wage base is not reached on these rows either, so Social Security is 6.2% of the full wage.',
      headers: ['Wages', 'Federal income tax', 'Social Security', 'Medicare', 'Florida income tax', 'Annual take-home', 'Every two weeks'],
      rows: [
        ['$40,000', '$2,620.00', '$2,480.00', '$580.00', '$0.00', '$34,320.00', '$1,320.00'],
        ['$52,000', '$4,060.00', '$3,224.00', '$754.00', '$0.00', '$43,962.00', '$1,690.85'],
        ['$75,000', '$7,670.00', '$4,650.00', '$1,087.50', '$0.00', '$61,592.50', '$2,368.94'],
        ['$100,000', '$13,170.00', '$6,200.00', '$1,450.00', '$0.00', '$79,180.00', '$3,045.38'],
        ['$160,000', '$27,134.00', '$9,920.00', '$2,320.00', '$0.00', '$120,626.00', '$4,639.46']
      ]
    },
    limitsHeading: 'What this Florida paycheck estimate leaves out',
    limits: [
      'Living in Florida does not, by itself, erase tax on wages performed in another state. This form is for Florida wages. It does not compute Georgia, New York, or any other state’s tax, and it does not split the year between states. Remote-work sourcing rules are not modeled.',
      paycheckLimits[0],
      paycheckLimits[1],
      'Additional Medicare Tax withholding is 0.9% of wages over $200,000, from Publication 15, for every filing status. The joint return’s own threshold is $250,000. Employer FICA and federal unemployment tax are not taken off the employee figure. Florida has no personal income tax figure in this result for a later credit to absorb.'
    ],
    disclaimer: 'This is a 2026 planning estimate for Florida wages, not a pay stub, a Form W-4, or tax advice. The IRS and your employer determine withholding and the tax on the return.',
    faqs: [
      {
        q: 'Does Florida have a state income tax on wages in 2026?',
        a: 'No personal income tax is withheld on Florida wages in this calculator. The state line is $0.00 at $52,000 and at $190,000. Federal income tax, Social Security, and Medicare are still calculated.'
      },
      {
        q: 'Will the Florida result match the Texas calculator?',
        a: 'Yes, when wages, filing status, pay frequency, and the 401(k) deferral are the same. Both pages use Revenue Procedure 2025-32, the 2026 standard deduction, and Publication 15 FICA rates, and both add $0 of state income tax. Compare either of them with the California page if the other offer withholds California tax.'
      },
      {
        q: 'How many paychecks is twice a month in Florida?',
        a: 'Twenty-four. Every two weeks is twenty-six. The $85,000 joint example uses 24 and shows $2,807.40 / half month from an annual take-home of $67,377.50. Using 26 for a twice-monthly job would show a smaller paycheck than the employer actually pays.'
      },
      {
        q: 'Does the $16,100 standard deduction apply to every Florida worker?',
        a: 'It applies to the single filer this form is estimating, and only when that filer takes the standard deduction rather than itemizing. Married filing jointly uses $32,200 on this page, and only if this salary is the sole income. Someone claimed as a dependent uses a different standard deduction, which is not in the formula.'
      },
      {
        q: 'Are Florida retirement or Social Security benefits taxed here?',
        a: 'No. The form taxes wages only. It does not add pension income, and it does not apply a Florida tax to Social Security benefits because it is not computing a Florida income tax at all. The Social Security line is the employee payroll tax on wages, which is not the same thing as tax on a benefit.'
      }
    ],
    relatedLinks: [
      { slug: 'texas-paycheck-calculator', label: 'Texas paycheck calculator for 2026', note: 'Same federal arithmetic, labeled for Texas wages.' },
      { slug: 'california-paycheck-calculator', label: 'California paycheck calculator for 2026', note: 'Use this when the offer is California wages, not Florida wages.' },
      { slug: 'hourly-to-salary-calculator', label: 'Hourly to salary calculator', note: 'Turn an hourly Florida rate into the annual wages this paycheck form expects.' }
    ]
  },
  'california-paycheck-calculator': {
    title: 'California Paycheck Calculator 2026 | ClearCalc',
    h1: 'California Paycheck Calculator for 2026',
    description: 'Estimate a 2026 California paycheck after federal tax, California income tax, 1.3% SDI, Social Security, and Medicare.',
    intro: [
      'This California paycheck calculator estimates 2026 take-home pay from California wages. It subtracts federal income tax, California income tax, State Disability Insurance, Social Security, and Medicare. The sample is $90,000, single, paid every two weeks, with no 401(k). Federal tax uses IRS Revenue Procedure 2025-32. California tax uses the Franchise Tax Board’s 2026 indexed brackets, standard deduction, and personal exemption credit. SDI uses the Employment Development Department rate for 2026, which is 1.3% of all wages with no wage cap.',
      'The result is an annual tax estimate divided by the number of paychecks. It is not the EDD Method B withholding table and it is not Publication 15-T. A pay stub can differ by more than rounding when the W-4, the DE 4, a cafeteria plan, or a bonus is in play. The figure is still a useful comparison against a Texas or Florida offer, where the state income tax line is $0 and there is no SDI line.'
    ],
    steps: [
      'Enter annual California gross wages. The sample 90000 is $90,000 for the year.',
      'Choose Single or Married filing jointly. Joint applies the joint federal and California brackets to this salary alone.',
      'Choose the pay frequency so the headline matches the stub you are comparing: 26, 52, 24, or 12 paychecks.',
      'Enter a traditional 401(k) deferral for the year, or 0. The form caps it at $24,500 and at wages. Press Calculate.'
    ],
    howHeading: 'How a 2026 California paycheck is estimated',
    howItWorks: [
      'Federal taxable wages are gross wages minus the traditional 401(k) deferral, minus the federal standard deduction of $16,100 single or $32,200 married filing jointly. The 2026 brackets from Revenue Procedure 2025-32 then apply. Social Security is 6.2% of wages up to $184,500. Medicare is 1.45% of all wages. Additional Medicare Tax withholding is 0.9% of wages over $200,000. Those payroll taxes are not reduced by the 401(k) or by either standard deduction.',
      'California taxable income is gross wages minus the same traditional deferral, minus the California standard deduction. For 2026 the Franchise Tax Board’s indexed deduction is $5,900 single and $11,800 married filing jointly. Tax uses the 2026 schedules: 1%, 2%, 4%, 6%, 8%, 9.3%, 10.3%, 11.3%, and 12.3%. On the single schedule the 9.3% band starts after $75,197 of taxable income. The personal exemption credit, $158 single or $316 joint, comes off that tax and cannot reduce it below zero. Taxable income over $1,000,000 also incurs the 1% Behavioral Health Services Tax. That threshold does not double for a joint return.',
      'State Disability Insurance is 1.3% of gross wages. The EDD says that for 2026 every dollar of wages is subject to SDI, with no wage ceiling. The deferral is not removed before the 1.3% in this form. California income tax and SDI are both subtracted from take-home, along with federal income tax, FICA, and the deferral. The headline divides the annual remainder by the number of paychecks.'
    ],
    formula: 'Tax year 2026. California wages.\nFederal tax = Rev. Proc. 2025-32 tax on max(0, wages − 401(k) − federal standard deduction)\nFederal standard deduction = $16,100 single, or $32,200 married filing jointly\nCalifornia taxable income = max(0, wages − 401(k) − California standard deduction)\nCalifornia standard deduction = $5,900 single, or $11,800 joint\nCalifornia regular tax = 2026 FTB brackets − exemption credit ($158 single, $316 joint), not below $0\nBehavioral Health Services Tax = 1% × max(0, California taxable income − $1,000,000)\nCalifornia income tax = regular tax + Behavioral Health Services Tax\nSDI = 1.3% × gross wages\nSocial Security = 6.2% × min(wages, $184,500)\nMedicare = 1.45% × wages, plus 0.9% of wages over $200,000\n401(k) applied = min(amount entered, wages, $24,500)\nPaycheck = (wages − federal tax − California income tax − SDI − Social Security − Medicare − Additional Medicare Tax − 401(k)) ÷ paychecks',
    formulaNotes: [
      'At $90,000, single, with no deferral, federal taxable income is $73,900 and federal income tax is $10,970.00. California taxable income is $84,100. The FTB single schedule charges $3,310.88 on the first $75,197 and 9.3% on the $8,903 above that, which is $827.979. The bracket tax rounds to $4,138.86. The $158 exemption credit leaves $3,980.86. SDI is 1.3% of $90,000, which is $1,170.00.',
      'A traditional 401(k) reduces both federal and California taxable income. It does not reduce Social Security, Medicare, or the SDI base used here. Roth contributions should be entered as zero. California does not conform to every federal deduction, and this form only removes the deferral and the California standard deduction.'
    ],
    examplesHeading: 'Worked 2026 California paycheck examples',
    examples: [
      {
        title: '$90,000, single, every two weeks, no 401(k)',
        paragraphs: [
          'Federal income tax is $10,970.00. Social Security is $5,580.00 and Medicare is $1,305.00. California income tax is $3,980.86 and SDI is $1,170.00. Additional Medicare Tax is $0.00. Annual take-home is $66,994.14. The headline is $2,576.70 / two weeks. The federal standard deduction line still shows $16,100.00. The California deduction of $5,900 is used inside the state tax and is not printed as a second deduction line.',
          'The same $90,000, single, with no deferral, would keep more in Texas or Florida because those pages would not subtract $3,980.86 or $1,170.00. That gap is the point of comparing the state line rather than the salary alone.'
        ]
      },
      {
        title: '$90,000 single with a $10,000 traditional 401(k)',
        paragraphs: [
          'Federal income tax falls to $8,770.00. California income tax falls to $3,065.12. Social Security, Medicare, and SDI do not move: they stay $5,580.00, $1,305.00, and $1,170.00. The deferral removes $10,000.00 from cash pay. Annual take-home is $60,109.88, or $2,311.92 / two weeks.',
          'Income tax fell by $2,200.00 federal plus $915.74 California, which is $3,115.74 together. The worker gave up $10,000 of cash to save that tax. The $10,000 is inside the 401(k), not spent. SDI did not participate in the saving.'
        ]
      },
      {
        title: '$250,000 single with the maximum ordinary deferral',
        paragraphs: [
          'The form applies a $24,500.00 deferral. Federal income tax is $43,464.00. Social Security is the $11,439.00 wage-base maximum. Medicare is $3,625.00 and Additional Medicare Tax is $450.00, which is 0.9% of the $50,000 of wages over $200,000. California income tax is $16,582.36. SDI is 1.3% of $250,000, which is $3,250.00, because there is no SDI wage cap.',
          'Annual take-home is $146,689.64. Paid twice a month, the headline is $6,112.07 / half month. Taxable income is still under $1,000,000, so the Behavioral Health Services Tax line does not appear. At $1,500,000, married filing jointly, with no deferral, that extra tax is $4,882.00 and is included in the California income tax line of $148,467.00.'
        ]
      }
    ],
    table: {
      heading: '2026 California paycheck at selected wages',
      caption: 'Single filer, every two weeks, no 401(k). Federal tax uses the $16,100 standard deduction. California tax uses the 2026 single brackets, the $5,900 standard deduction, and the $158 exemption credit. SDI is 1.3% of wages. Additional Medicare Tax appears once wages exceed $200,000.',
      headers: ['Wages', 'Federal tax', 'California tax', 'SDI', 'Annual take-home', 'Every two weeks'],
      rows: [
        ['$50,000', '$3,820.00', '$973.08', '$650.00', '$40,731.92', '$1,566.61'],
        ['$90,000', '$10,970.00', '$3,980.86', '$1,170.00', '$66,994.14', '$2,576.70'],
        ['$150,000', '$24,734.00', '$9,560.86', '$1,950.00', '$102,280.14', '$3,933.85'],
        ['$250,000', '$51,304.00', '$18,860.86', '$3,250.00', '$161,071.14', '$6,195.04'],
        ['$400,000', '$103,134.25', '$32,910.77', '$5,200.00', '$239,715.98', '$9,219.85']
      ]
    },
    limitsHeading: 'What this California paycheck estimate leaves out',
    limits: [
      'EDD withholding tables can differ from annual tax divided by 26. Low-income exemptions from withholding, estimated-deduction allowances on the DE 4, and supplemental-wage flat rates are not applied. A bonus withheld at a flat California rate will not match a row in the table.',
      'The Behavioral Health Services Tax is included only when California taxable income exceeds $1,000,000. California alternative minimum tax, mental-health withholding differences, and local taxes are not. San Francisco’s taxes on businesses and on certain compensation are not wage brackets in this form. State disability is an employee contribution here. Unemployment Insurance and the Employment Training Tax are employer costs and are not deducted.',
      paycheckLimits[0],
      paycheckLimits[2]
    ],
    disclaimer: 'This is a 2026 planning estimate for California wages, not a pay stub, a DE 4, or tax advice. The EDD, the Franchise Tax Board, and the IRS assess the amounts you owe.',
    faqs: [
      {
        q: 'What is the California SDI rate on a 2026 paycheck?',
        a: 'The Employment Development Department set the 2026 State Disability Insurance withholding rate at 1.3% of wages, with no wage limit. On $90,000 that is $1,170.00. On $250,000 it is $3,250.00. A traditional 401(k) deferral does not reduce that line in this calculator.'
      },
      {
        q: 'Why is the California standard deduction different from the federal one?',
        a: 'They are separate laws. For 2026 the federal standard deduction used here is $16,100 single or $32,200 joint, from Revenue Procedure 2025-32. The Franchise Tax Board’s 2026 indexed California standard deduction is $5,900 single or $11,800 joint. The $90,000 single example uses both: federal taxable income is $73,900 and California taxable income is $84,100.'
      },
      {
        q: 'Does the $158 California exemption credit reduce SDI?',
        a: 'No. It reduces California regular income tax, and it cannot reduce that tax below zero. SDI is computed separately at 1.3% of gross wages. The credit is $316 for the married filing jointly choice on this page.'
      },
      {
        q: 'When does the California Behavioral Health Services Tax apply?',
        a: 'When California taxable income is over $1,000,000, at 1% of the excess, for every filing status. The threshold is not indexed and it does not double on a joint return. A $250,000 salary does not reach it. A $1,500,000 joint salary with no deferral includes $4,882.00 of that tax inside the California income tax figure.'
      },
      {
        q: 'How do I compare this California paycheck with Texas or Florida?',
        a: 'Run the same wages, filing status, frequency, and 401(k) on those pages. Their state income tax is $0 and they have no SDI line. At $90,000, single, every two weeks, and no deferral, this page shows $2,576.70. The gap versus a no-tax state is the $3,980.86 of California income tax plus $1,170.00 of SDI, before any cost-of-living difference this calculator does not know.'
      }
    ],
    relatedLinks: [
      { slug: 'texas-paycheck-calculator', label: 'Texas paycheck calculator for 2026', note: 'Federal tax and FICA only. The Texas income tax line is $0.' },
      { slug: 'florida-paycheck-calculator', label: 'Florida paycheck calculator for 2026', note: 'The same federal rules as Texas, labeled for Florida wages.' },
      { slug: 'overtime-pay-calculator', label: 'Weekly overtime pay calculator', note: 'California also has daily overtime rules. This weekly tool only applies a multiple after a weekly hour threshold.' }
    ]
  },
  'scotland-take-home-pay-calculator': {
    title: 'Scotland Take-Home Pay Calculator 2026/27 | ClearCalc',
    h1: 'Scotland Take-Home Pay Calculator (2026/27)',
    description: 'Estimate 2026/27 Scottish take-home pay after Scottish income tax and employee Class 1 National Insurance.',
    intro: [
      'This Scotland take-home pay calculator estimates what an employee keeps from an annual salary in the 2026/27 tax year, 6 April 2026 to 5 April 2027, after Scottish income tax and employee Class 1 National Insurance. The headline divides the annual result by 12. A weekly figure is shown beside it. The sample salary is £35,000.',
      'Scottish income tax follows the rate resolution agreed by the Scottish Parliament for 2026-27: 19%, 20%, 21%, 42%, 45%, and 48% on the slices of income set out in that resolution. The personal allowance is still the UK allowance of £12,570, including the taper above £100,000. National Insurance is not devolved. This page uses the same category A employee rates as the England, Wales, and Northern Ireland calculator.'
    ],
    steps: [
      'Enter annual gross salary in pounds. Use 35000 for £35,000.',
      'Treat the figure as your only non-savings, non-dividend income, and as the whole of your adjusted net income.',
      'Press Calculate. The headline is annual take-home divided by 12, rounded to the penny.',
      'Read Scottish income tax, employee National Insurance, annual take-home, weekly take-home, and the personal allowance the taper produced.'
    ],
    howHeading: 'How 2026/27 Scottish income tax and National Insurance are worked out',
    howItWorks: [
      'The personal allowance is £12,570. Above £100,000 of adjusted net income it falls by half of the excess, rounded up to a whole pound if the result is not a whole number of pounds, and it cannot fall below zero. That is the same Income Tax Act 2007 section 35 rule used on the rest-of-the-UK page. At £100,001 the allowance is still £12,570 because half of £1 rounds back up. At £100,002 it is £12,569. At £125,140 it is zero.',
      'The Scottish rate resolution charges starter rate tax at 19% on the first £3,967 of income above the allowance, the Scottish basic rate at 20% up to £16,956, the intermediate rate at 21% up to £31,092, the higher rate at 42% up to £62,430, the advanced rate at 45% up to £125,140, and the top rate at 48% above £125,140. Those limits are on income chargeable at Scottish rates, which is salary after the allowance. With the full allowance still in place, the gross ends of the first four bands are £16,537, £29,526, £43,662, and £75,000, which matches the tables on gov.scot and GOV.UK. Once the allowance tapers, the gross bands move, because the limits stay attached to taxable income.',
      'Employee Class 1 National Insurance for category A is unchanged by devolution: 0% up to the primary threshold of £12,570, 8% from there to the upper earnings limit of £50,270, and 2% above £50,270. Those are the annual thresholds HMRC publishes for 2026 to 2027. Tax and National Insurance are each rounded to the penny. Monthly and weekly figures are the annual take-home divided by 12 and by 52, each rounded on its own.'
    ],
    formula: 'Tax year 6 April 2026 to 5 April 2027. Scottish taxpayer.\nPersonal allowance = £12,570, tapered above £100,000 by half the excess, rounded up to a pound, and not below £0\nTaxable income = max(0, salary − allowance)\nScottish income tax = 19% on taxable income up to £3,967\n  + 20% up to £16,956\n  + 21% up to £31,092\n  + 42% up to £62,430\n  + 45% up to £125,140\n  + 48% above £125,140\nEmployee NI (category A) = 8% between £12,570 and £50,270, then 2% above £50,270\nAnnual take-home = salary − Scottish income tax − employee NI\nMonthly = annual take-home / 12\nWeekly = annual take-home / 52',
    formulaNotes: [
      'At £35,000 the allowance is the full £12,570 and taxable income is £22,430. Tax is 19% of £3,967, 20% of the next £12,989, and 21% of the remaining £5,474. That is £753.73 + £2,597.80 + £1,149.54 = £4,501.07. The England and Northern Ireland calculator taxes the same taxable income entirely at 20%, which is £4,486.00. Scotland is £15.07 higher at this salary: the 19% band saves £39.67 against 20%, and the 21% slice costs £54.74.',
      'National Insurance at £35,000 is 8% of £22,430, which is £1,794.40, the same figure as on the England, Wales, and Northern Ireland page. The two calculators diverge on income tax only.'
    ],
    examplesHeading: 'Worked 2026/27 Scottish take-home examples',
    examples: [
      {
        title: '£35,000 salary',
        paragraphs: [
          'Scottish income tax is £4,501.07 and employee National Insurance is £1,794.40. Annual take-home is £35,000 − £4,501.07 − £1,794.40 = £28,704.53. Divided by 12 that is £2,392.04416…, shown as £2,392.04 a month. Divided by 52 it is £552.01 a week. The allowance line reads £12,570.00.',
          'The rest-of-the-UK calculator shows £2,393.30 a month on the same salary, because its income tax is £4,486.00 rather than £4,501.07. The gap is £15.07 a year, just over a pound a month. It is small at £35,000 because most of the taxable income is still at 20%.'
        ]
      },
      {
        title: '£60,000, into the 42% higher rate',
        paragraphs: [
          'The allowance is still £12,570. Taxable income is £47,430. Tax is £753.73 at 19%, £2,597.80 at 20%, £2,968.56 at 21% on the intermediate band of £14,136, and £6,861.96 at 42% on the £16,338 above £31,092. Scottish income tax is £13,182.05. The rest-of-the-UK tax on £60,000 is £11,432.00, so Scotland is £1,750.05 higher. Most of that gap is 42% against 40% on the slice above the higher-rate threshold.',
          'National Insurance is £3,210.60, the same 8% and 2% calculation as the other UK page, because £60,000 is over the £50,270 upper earnings limit. Annual take-home is £43,607.35. The monthly headline is £3,633.95 and the weekly figure is £838.60.'
        ]
      },
      {
        title: '£110,000 inside the personal-allowance taper',
        paragraphs: [
          'Half of the £10,000 over £100,000 is £5,000, so the allowance falls from £12,570 to £7,570. Taxable income is £102,430. That reaches the 45% advanced rate, which starts after £62,430 of taxable income, and it does not reach the 48% top rate, which starts after £125,140 of taxable income. Scottish income tax is £37,482.05. National Insurance is £4,210.60.',
          'Annual take-home is £68,307.35. The headline is £5,692.28 / month, the weekly figure is £1,313.60, and the allowance line reads £7,570.00. At £125,140 the allowance line is £0.00, Scottish income tax is £47,701.55, and annual take-home is £72,925.05.'
        ]
      }
    ],
    table: {
      heading: '2026/27 Scottish take-home at band edges and round salaries',
      caption: 'Each row is what this calculator displays. Income tax uses the 2026/27 Scottish rate resolution after the UK personal allowance and its taper. Employee National Insurance is category A at the UK annual thresholds. Pension contributions and student loans are not deducted.',
      headers: ['Salary', 'Personal allowance', 'Scottish income tax', 'Employee NI', 'Annual take-home', 'Monthly'],
      rows: [
        ['£16,000', '£12,570.00', '£651.70', '£274.40', '£15,073.90', '£1,256.16'],
        ['£29,526', '£12,570.00', '£3,351.53', '£1,356.48', '£24,817.99', '£2,068.17'],
        ['£35,000', '£12,570.00', '£4,501.07', '£1,794.40', '£28,704.53', '£2,392.04'],
        ['£43,662', '£12,570.00', '£6,320.09', '£2,487.36', '£34,854.55', '£2,904.55'],
        ['£60,000', '£12,570.00', '£13,182.05', '£3,210.60', '£43,607.35', '£3,633.95'],
        ['£75,000', '£12,570.00', '£19,482.05', '£3,510.60', '£52,007.35', '£4,333.95'],
        ['£110,000', '£7,570.00', '£37,482.05', '£4,210.60', '£68,307.35', '£5,692.28'],
        ['£125,140', '£0.00', '£47,701.55', '£4,513.40', '£72,925.05', '£6,077.09']
      ]
    },
    limitsHeading: 'What this Scottish take-home estimate leaves out',
    limits: [
      'Savings income and dividend income are not taxed at Scottish rates. They use the UK rates. This form has only one salary field, so it cannot split those sources. A code that starts with S is a sign of Scottish income tax. If your code does not, the England, Wales, and Northern Ireland calculator is the closer match.',
      'Payroll months do not reproduce an annual calculation divided by 12. HMRC’s monthly thresholds differ from one-twelfth of the annual £12,570 by a few pounds, as the other UK page explains. A bonus, a week 1 or month 1 code, or a K code can move a payslip by much more. Marriage Allowance and Blind Person’s Allowance are not added.',
      'Pension contributions and student loans are not deducted. For salary sacrifice, enter the salary after the sacrifice. For relief at source, enter the full gross salary and subtract the contribution you pay. Plan 1, Plan 2, Plan 4, Plan 5, and postgraduate loan repayments use the same 2026/27 thresholds HMRC publishes for employers, and none of them is subtracted here. Employer National Insurance, at 15% above the £5,000 secondary threshold for category A, is not an employee deduction.'
    ],
    disclaimer: 'This is a planning estimate for a Scottish taxpayer in 2026/27, not a payslip, a tax code, or tax advice. HMRC assesses the liability, and Scottish income tax rates are set by the Scottish Parliament.',
    faqs: [
      {
        q: 'How is this Scotland calculator different from the England, Wales and Northern Ireland one?',
        a: 'National Insurance matches: category A at 8% up to £50,270 and 2% above, after £12,570. Income tax does not. Scotland uses 19%, 20%, 21%, 42%, 45%, and 48%. At £35,000, Scottish income tax is £4,501.07 against £4,486.00 on the other page. At £60,000 it is £13,182.05 against £11,432.00.'
      },
      {
        q: 'Where do the 2026/27 Scottish band limits come from?',
        a: 'The Scottish Parliament’s rate resolution for 2026-27 sets the taxable-income limits: £3,967, £16,956, £31,092, £62,430, and £125,140, at 19%, 20%, 21%, 42%, 45%, and then 48%. With the full £12,570 allowance, gov.scot shows the gross bands ending at £16,537, £29,526, £43,662, and £75,000. This calculator applies the resolution to income after the allowance, so the taper is handled as well.'
      },
      {
        q: 'Does devolution change employee National Insurance in Scotland?',
        a: 'No. Employee Class 1 National Insurance is reserved. At £35,000 both UK pages show £1,794.40. At £60,000 both show £3,210.60. A difference between the two headlines is income tax.'
      },
      {
        q: 'Why is Scottish tax at £35,000 only a little higher than in England?',
        a: 'Taxable income of £22,430 sees a 19% band and a 21% band. The 19% band saves £39.67 against a flat 20%, and the 21% slice costs £54.74. The net difference is £15.07 for the year. The gap grows once pay reaches the 42% higher rate, which starts at £43,662 of gross salary while the full allowance remains.'
      },
      {
        q: 'Are student loans or pension contributions in the Scottish take-home figure?',
        a: 'No. The result is salary minus Scottish income tax minus category A employee National Insurance. Enter a salary-sacrifice pension as the lower salary. Subtract a relief-at-source contribution yourself. The 2026/27 student loan thresholds are not applied.'
      }
    ],
    relatedLinks: [
      { slug: 'uk-take-home-pay-calculator', label: 'Take-home pay for England, Wales and Northern Ireland', note: 'Same National Insurance and personal allowance, with the 20%, 40%, and 45% bands.' },
      { slug: 'ontario-take-home-pay-calculator', label: 'Ontario take-home pay calculator for 2026', note: 'A different country and currency. Do not subtract a Canadian result from a sterling salary.' },
      { slug: 'australia-take-home-pay-calculator', label: 'Australia take-home pay calculator for 2026–27', note: 'Resident income tax, the low income tax offset, and the Medicare levy, in Australian dollars.' }
    ]
  },
  'ontario-take-home-pay-calculator': {
    title: 'Ontario Take-Home Pay Calculator 2026 | ClearCalc',
    h1: 'Ontario Take-Home Pay Calculator for 2026',
    description: 'Estimate 2026 Ontario take-home pay after federal tax, Ontario tax, the health premium, employee CPP, and EI.',
    intro: [
      'This Ontario take-home pay calculator estimates what an employee working in Ontario keeps from an annual salary in the 2026 calendar year. It subtracts federal income tax, Ontario income tax, the Ontario Health Premium, employee Canada Pension Plan contributions, and employee Employment Insurance premiums. The headline is the annual result divided by 12. A figure for every two weeks, 26 pays, is shown underneath. The sample salary is $70,000.',
      'Rates and thresholds come from the Canada Revenue Agency’s 2026 payroll tables for Ontario, T4032-ON, effective 1 January 2026, and from the payroll deduction formulas in T4127. The form assumes one employer, a full year of pensionable and insurable employment, the basic personal amounts only, and no RRSP or RPP contribution. It is an annual calculation, not a copy of every rounding step in a pay-period table.'
    ],
    steps: [
      'Enter annual gross salary in Canadian dollars. Use 70000 for $70,000.',
      'Use salary before income tax, CPP, and EI. Do not subtract an RRSP contribution first. This form has no field for one.',
      'Press Calculate. The headline is annual take-home divided by 12, rounded to the cent.',
      'Read federal tax, Ontario tax, the health premium included in that Ontario tax, CPP, EI, annual take-home, and the federal basic personal amount.'
    ],
    howHeading: 'How 2026 Ontario take-home pay is worked out',
    howItWorks: [
      'Employee CPP is 5.95% of pensionable earnings between the $3,500 basic exemption and the year’s maximum pensionable earnings of $74,600. The maximum employee contribution is $4,230.45. Of that 5.95%, 4.95 percentage points are the base contribution and 1.00 point is the first additional contribution. The first additional contribution, and any CPP2, is deducted in arriving at taxable income. The base contribution is not a deduction. It is part of the non-refundable credit. CPP2 is 4% of pensionable earnings between $74,600 and the year’s additional maximum pensionable earnings of $85,000, to a maximum of $416. EI outside Quebec is 1.63% of insurable earnings up to $68,900, a maximum employee premium of $1,123.07.',
      'Federal tax uses the 2026 brackets: 14% to $58,523, 20.5% to $117,045, 26% to $181,440, 29% to $258,482, and 33% above that. The basic personal amount is $16,452 when net income is at or below $181,440, and $14,829 when net income is at or above $258,482. Between those incomes it is $16,452 minus the excess over $181,440 multiplied by $1,623 / $77,042, which is the T4127 formula. The Canada employment amount is the lesser of $1,501 and employment income. Credits for the basic personal amount, the CPP base, EI, and the employment amount are taken at 14%.',
      'Ontario tax uses 5.05% to $53,891, 9.15% to $107,785, 11.16% to $150,000, 12.16% to $220,000, and 13.16% above that. The Ontario basic personal amount in the credit is $12,989, and the credit rate is 5.05%. The credit also includes the CPP base and EI. Surtax is 20% of basic Ontario tax over $5,818, plus 36% of basic Ontario tax over $7,446. The health premium follows the 2026 T4032 steps, from $0 at taxable income of $20,000 or less up to $900 above $200,000. The Ontario tax reduction uses the basic $300 amount only: it is twice $300 minus basic Ontario tax including surtax, and it cannot exceed that tax or fall below zero. It does not wipe out the health premium.'
    ],
    formula: 'Calendar year 2026. Ontario employment. One employer, basic credits only.\nCPP = 4.95% base + 1.00% first additional, on earnings from $3,500 to $74,600, maximum $4,230.45\nCPP2 = 4% of earnings from $74,600 to $85,000, maximum $416\nEI = 1.63% of earnings up to $68,900, maximum $1,123.07\nTaxable income = salary − first additional CPP − CPP2\nFederal tax = 2026 federal brackets − 14% × (basic personal amount + CPP base + EI + Canada employment amount)\nOntario tax = 2026 Ontario brackets − 5.05% × ($12,989 + CPP base + EI), then surtax, health premium, and the $300 basic reduction\nAnnual take-home = salary − CPP − CPP2 − EI − federal tax − Ontario tax\nMonthly = annual take-home / 12\nEvery two weeks = annual take-home / 26',
    formulaNotes: [
      'At $70,000, contributory earnings are $66,500. The base contribution is $3,291.75 and the first additional contribution is $665.00, so CPP is $3,956.75. There is no CPP2 because the salary is under $74,600. EI is the maximum $1,123.07 because the salary is over $68,900. Taxable income is $69,335.00.',
      'Federal tax on $69,335.00 is $10,409.68 before credits. The credit base is $16,452 + $3,291.75 + $1,123.07 + $1,501 = $22,367.82, and 14% of that is $3,131.49. Federal tax is $7,278.19. Ontario basic tax after the 5.05% credit is $3,255.73, surtax is $0, and the health premium is $600. Ontario tax payable is $3,855.73. The reduction does not apply because basic Ontario tax is already far above $600.'
    ],
    examplesHeading: 'Worked 2026 Ontario take-home examples',
    examples: [
      {
        title: '$70,000 salary',
        paragraphs: [
          'Federal income tax is $7,278.19. Ontario income tax is $3,855.73, and that figure includes the $600.00 health premium. CPP is $3,956.75 and EI is $1,123.07. Annual take-home is $53,786.26. The monthly headline is $4,482.19. Every two weeks is $2,068.70. Twelve times $4,482.19 is $53,786.28, two cents over the annual figure, because the month was rounded on its own.',
          'The federal basic personal amount line reads $16,452.00. Net income is under $181,440, so the enhanced amount has not started to phase out. Combined employee deductions are $16,213.74, which is 23.1625% of $70,000. Employer CPP and employer EI are not in that percentage.'
        ]
      },
      {
        title: '$45,000, before the CPP and EI maximums',
        paragraphs: [
          'CPP is 5.95% of $41,500, which is $2,469.25. EI is 1.63% of $45,000, which is $733.50. Neither maximum has been reached. Taxable income is $45,000 minus the first additional CPP of $415.00, which is $44,585. Federal income tax is $3,338.19. Ontario income tax is $1,904.81, including a $450.00 health premium. The premium at this income is the $450 cap for the band over $36,000 and up to $48,000.',
          'Annual take-home is $36,554.25. The headline is $3,046.19 / month, and every two weeks is $1,405.93. The basic personal amount is still $16,452.00.'
        ]
      },
      {
        title: '$120,000 and $250,000',
        paragraphs: [
          'At $120,000, CPP plus CPP2 is the combined maximum $4,646.45, which is $4,230.45 plus $416.00. EI is $1,123.07. Federal income tax is $17,502.14 and Ontario income tax is $9,385.58, including the $750.00 health premium. Annual take-home is $87,342.76, or $7,278.56 a month. The basic personal amount is still $16,452.00 because taxable income is under $181,440.',
          'At $250,000 the CPP and EI lines do not rise any further: they stay $4,646.45 and $1,123.07. Federal income tax is $53,524.01 and Ontario income tax is $34,160.89, including the $900.00 health premium. The basic personal amount has phased down to $15,031.43 because taxable income, after the $711 first additional CPP and $416 of CPP2, sits between $181,440 and $258,482. Annual take-home is $156,545.58, and the monthly headline is $13,045.47.'
        ]
      }
    ],
    table: {
      heading: '2026 Ontario take-home at selected salaries',
      caption: 'Annual salary, one employer, basic personal amounts only, no RRSP. CPP, CPP2, and EI use the 2026 CRA maximums. Ontario tax includes surtax, the health premium, and the basic tax reduction when it applies. Monthly figures are the annual take-home divided by 12.',
      headers: ['Salary', 'Federal tax', 'Ontario tax', 'CPP including CPP2', 'EI', 'Annual take-home', 'Monthly'],
      rows: [
        ['$40,000', '$2,691.25', '$1,671.46', '$2,171.75', '$652.00', '$32,813.54', '$2,734.46'],
        ['$70,000', '$7,278.19', '$3,855.73', '$3,956.75', '$1,123.07', '$53,786.26', '$4,482.19'],
        ['$90,000', '$11,251.60', '$5,781.96', '$4,646.45', '$1,123.07', '$67,196.92', '$5,599.74'],
        ['$150,000', '$25,302.14', '$14,608.46', '$4,646.45', '$1,123.07', '$104,319.88', '$8,693.32'],
        ['$200,000', '$38,876.54', '$24,075.67', '$4,646.45', '$1,123.07', '$131,278.27', '$10,939.86']
      ]
    },
    limitsHeading: 'What this Ontario estimate leaves out',
    limits: [
      'Quebec is not covered. Quebec uses the Quebec Pension Plan and a lower EI rate, and it sets its own income tax. Other provinces are not covered either. Province of employment follows the CRA rule about where you report for work, which can differ from the province where you live. This page assumes Ontario is the right table.',
      'RRSP, RPP, and PRPP contributions are not deducted, and neither are union dues, child-care expenses, or northern-zone deductions. The Ontario credit is the basic personal amount only. The age amount, the spouse or common-law partner amount, and dependants are not claimed. The tax reduction uses $300, not the extra amounts for dependants. A payroll table that annualizes each pay and then rounds to the CRA’s published cent can differ by a small amount from this full-year calculation.',
      'Employer CPP and employer EI are not subtracted. The employer EI rate outside Quebec is 1.4 times the employee premium, and the employer matches CPP and CPP2. Those are employer costs. Ontario Employer Health Tax is also an employer cost and is not the same thing as the Ontario Health Premium on this page. Self-employed people pay both halves of CPP and do not pay EI on self-employment earnings in the same way. Do not use this employee form for that case.'
    ],
    disclaimer: 'This is a 2026 planning estimate for an Ontario employee, not a pay stub, a TD1, or tax advice. The Canada Revenue Agency and your employer assess the deductions.',
    faqs: [
      {
        q: 'What CPP and EI rates does the 2026 Ontario calculator use?',
        a: 'Employee CPP is 5.95% between the $3,500 exemption and $74,600, up to $4,230.45. CPP2 is 4% between $74,600 and $85,000, up to $416. EI is 1.63% up to $68,900, a maximum of $1,123.07. At $70,000 the result is $3,956.75 of CPP and $1,123.07 of EI. At $120,000, CPP including CPP2 is $4,646.45.'
      },
      {
        q: 'Why is part of CPP deducted before Ontario and federal tax?',
        a: 'The first additional CPP contribution, the 1.00 point inside the 5.95% rate, is a deduction from income. CPP2 is a deduction too. The 4.95-point base contribution is a non-refundable credit at the lowest federal rate of 14% and the lowest Ontario rate of 5.05%, not a deduction. At $70,000 the deduction is the $665.00 first additional contribution, and taxable income is $69,335.'
      },
      {
        q: 'Is the Ontario Health Premium the same as OHIP eligibility?',
        a: 'No. The premium is collected through the income tax system. Ontario’s own description says it is not linked to OHIP. On this page it is included inside Ontario income tax and also shown on its own line. At $70,000 that line is $600.00. At $20,000 of taxable income or less it is $0.'
      },
      {
        q: 'Does the federal basic personal amount stay $16,452 at every Ontario salary?',
        a: 'No. It stays $16,452 when net income is $181,440 or less. It falls to $14,829 at $258,482 or more. At a $250,000 salary the amount applied is $15,031.43, because taxable income after the CPP deductions is inside the phase-out. The $70,000 row still shows $16,452.00.'
      },
      {
        q: 'Will this match the CRA Payroll Deductions Online Calculator?',
        a: 'It should be close for a full year of ordinary salary with claim code 1 federally and in Ontario, and with no other deductions. PDOC can differ when the pay period, a bonus, a commission, or a mid-year maximum for CPP changes the annualization. This page does one annual calculation and then divides by 12 and by 26.'
      }
    ],
    relatedLinks: [
      { slug: 'british-columbia-take-home-pay-calculator', label: 'British Columbia take-home pay calculator for 2026', note: 'The same federal brackets, CPP, and EI, with B.C. tax and the B.C. tax reduction instead of Ontario tax.' },
      { slug: 'uk-take-home-pay-calculator', label: 'UK take-home pay for England, Wales and Northern Ireland', note: 'Pounds, for 2026/27, not Canadian dollars.' },
      { slug: 'scotland-take-home-pay-calculator', label: 'Scotland take-home pay calculator for 2026/27', note: 'Scottish income tax bands and UK National Insurance.' },
      { slug: 'australia-take-home-pay-calculator', label: 'Australia take-home pay calculator for 2026–27', note: 'A different tax year and a different currency.' }
    ]
  },
  'australia-take-home-pay-calculator': {
    title: 'Australia Take-Home Pay Calculator 2026–27 | ClearCalc',
    h1: 'Australia Take-Home Pay Calculator (2026–27)',
    description: 'Estimate 2026–27 Australian resident take-home pay after income tax, the low income tax offset, and the Medicare levy.',
    intro: [
      'This Australia take-home pay calculator estimates what an Australian resident keeps from taxable income in the 2026–27 income year, 1 July 2026 to 30 June 2027. It applies the resident rates published by the Australian Taxation Office, then the low income tax offset, then the Medicare levy. The headline divides the annual result by 12. A weekly figure is shown as well. The sample income is $80,000.',
      'The amount you type is treated as taxable income for a resident who is entitled to the full tax-free threshold, for the whole year, with no spouse and no dependants. Employer superannuation is not subtracted. The compulsory superannuation guarantee is an employer payment on top of ordinary time earnings, not a deduction from this take-home figure. Study-loan repayments and the Medicare levy surcharge are not included.'
    ],
    steps: [
      'Enter annual taxable income in Australian dollars. Use 80000 for $80,000. If you want a deduction reflected, subtract it before you type the income.',
      'Use resident taxable income, not a foreign-resident figure and not a working-holiday-maker figure.',
      'Press Calculate. The headline is annual take-home divided by 12.',
      'Read income tax before the offset, the offset actually used, income tax after the offset, the Medicare levy, and the annual and weekly take-home figures.'
    ],
    howHeading: 'How 2026–27 resident tax and the Medicare levy are worked out',
    howItWorks: [
      'The ATO resident rates for 2026–27, for someone entitled to the full tax-free threshold, are: nil on taxable income up to $18,200, then 15 cents for each dollar over $18,200 up to $45,000, then $4,020 plus 30 cents for each dollar over $45,000 up to $135,000, then $31,020 plus 37 cents for each dollar over $135,000 up to $190,000, then $51,370 plus 45 cents for each dollar over $190,000. Those rates do not include the Medicare levy. Tax on $45,000 is 15% of $26,800, which is exactly $4,020, so the published dollar amount and the bracket arithmetic agree.',
      'The low income tax offset is the schedule on the ATO’s offset page: $700 at taxable income of $37,500 or less, then $700 minus 5 cents for each dollar above $37,500 until $45,000, then $325 minus 1.5 cents for each dollar above $45,000 until it runs out at $66,667. It is non-refundable. This calculator will not reduce income tax below zero, so the offset line is the amount actually used. At $20,000, tax before the offset is $270 and the offset used is $270, not the full $700. The unused $430 is not paid out. The offset does not reduce the Medicare levy.',
      'The Medicare levy is 2% of taxable income once the single low-income shade-in is finished. The ATO’s Schedule 1 statement of formulas for withholding, in the edition that carries the 2026–27 rate scale, says no levy is payable at a taxable income of $28,011 or less, the levy shades in at 10% of the excess over $28,011 when income is under $35,013, and the levy is 2% at $35,013 or more. This page uses those parameters for a single resident who is not claiming the seniors and pensioners tax offset. At $29,000 the shade-in is 10% of $989, which is $98.90, the same figure the ATO uses in its reduction example. Family thresholds, exemptions, and half exemptions are not applied.'
    ],
    formula: 'Income year 1 July 2026 to 30 June 2027. Australian resident, full tax-free threshold.\nIncome tax = 0 on the first $18,200\n  + 15% from $18,200 to $45,000\n  + 30% from $45,000 to $135,000\n  + 37% from $135,000 to $190,000\n  + 45% above $190,000\nLow income tax offset = $700 up to $37,500\n  then $700 − 5 cents per dollar above $37,500, until $45,000\n  then $325 − 1.5 cents per dollar above $45,000, until $66,667\nOffset used = the smaller of that amount and the income tax\nMedicare levy = $0 at or below $28,011\n  10% of the excess over $28,011 below $35,013\n  2% of taxable income at $35,013 or more\nAnnual take-home = taxable income − (income tax − offset used) − Medicare levy\nMonthly = annual take-home / 12\nWeekly = annual take-home / 52',
    formulaNotes: [
      'At $80,000, income tax is $4,020 plus 30% of $35,000, which is $14,520.00. The low income tax offset is zero because $80,000 is above $66,667. The Medicare levy is 2% of $80,000, which is $1,600.00. Take-home is $63,880.00.',
      'At $30,000, income tax is 15% of $11,800, which is $1,770. The full $700 offset applies, so tax after the offset is $1,070. The Medicare levy is 10% of $30,000 − $28,011, which is $198.90. Take-home is $28,731.10. The offset did not reduce that levy.'
    ],
    examplesHeading: 'Worked 2026–27 Australian take-home examples',
    examples: [
      {
        title: '$80,000 taxable income',
        paragraphs: [
          'Income tax before the offset is $14,520.00. The offset is $0.00, so tax after the offset stays $14,520.00. The Medicare levy is $1,600.00. Annual take-home is $63,880.00. The monthly headline is $5,323.33. The weekly figure is $1,228.46. Twelve times $5,323.33 is $63,879.96, four cents under the annual figure, because the month was rounded on its own.',
          'Employer superannuation is not in the $16,120 of tax and levy. If the employer pays the 12% superannuation guarantee on top of this income, that payment does not reduce the $63,880.00. If you salary-sacrifice into super, enter the lower taxable income instead of expecting this form to remove the sacrifice.'
        ]
      },
      {
        title: '$55,000, where the low income tax offset is still tapering',
        paragraphs: [
          'Income tax before the offset is $4,020 plus 30% of $10,000, which is $7,020.00. The offset is $325 minus 1.5 cents for each of the 10,000 dollars over $45,000, which is $325 − $150 = $175.00. Tax after the offset is $6,845.00. The Medicare levy is the full 2%, $1,100.00, because $55,000 is above $35,013.',
          'Annual take-home is $47,055.00. The headline is $3,921.25 / month and the weekly figure is $904.90. The 1.5-cent taper means an extra dollar in this band costs the 30% bracket rate plus 1.5 cents of lost offset, before the 2% levy. This example is already past the Medicare shade-in, so the levy on the extra dollar is the full 2 cents.'
        ]
      },
      {
        title: '$20,000 and $140,000',
        paragraphs: [
          'At $20,000, tax before the offset is 15% of $1,800, which is $270.00. The offset used is $270.00, because the offset cannot create a refund of the unused part of the $700. The Medicare levy is $0.00 because $20,000 is below $28,011. Annual take-home is the full $20,000.00, and the monthly headline is $1,666.67.',
          'At $140,000, tax is $31,020 plus 37% of $5,000, which is $32,870.00. The offset is $0.00. The Medicare levy is $2,800.00. Annual take-home is $104,330.00, or $8,694.17 a month. The 45% band has not started. It starts on taxable income over $190,000, where the ATO’s published tax on the first $190,000 is $51,370 before the levy.'
        ]
      }
    ],
    table: {
      heading: '2026–27 resident take-home at the published thresholds',
      caption: 'Taxable income for a resident entitled to the full tax-free threshold. The low income tax offset column is the amount that reduces income tax, so it is $0 when tax is $0. The Medicare levy uses the $28,011 and $35,013 single parameters. No surcharge, no study-loan repayment, and no superannuation deduction.',
      headers: ['Taxable income', 'Income tax', 'Offset used', 'Medicare levy', 'Annual take-home', 'Monthly'],
      rows: [
        ['$18,200', '$0.00', '$0.00', '$0.00', '$18,200.00', '$1,516.67'],
        ['$30,000', '$1,770.00', '$700.00', '$198.90', '$28,731.10', '$2,394.26'],
        ['$45,000', '$4,020.00', '$325.00', '$900.00', '$40,405.00', '$3,367.08'],
        ['$80,000', '$14,520.00', '$0.00', '$1,600.00', '$63,880.00', '$5,323.33'],
        ['$135,000', '$31,020.00', '$0.00', '$2,700.00', '$101,280.00', '$8,440.00'],
        ['$190,000', '$51,370.00', '$0.00', '$3,800.00', '$134,830.00', '$11,235.83']
      ]
    },
    limitsHeading: 'What this Australian estimate leaves out',
    limits: [
      'The Medicare levy surcharge is separate from the levy. For 2026–27 the ATO’s single thresholds start at $105,000 of income for surcharge purposes, with rates of 1%, 1.25%, and 1.5% when private patient hospital cover is not held. Income for surcharge purposes can include reportable fringe benefits and reportable super contributions, which this salary field does not collect. The surcharge is not added.',
      'HELP, VSL, and other study and training support loans are repaid through a separate rate on repayment income. Those rates are indexed and are not in this take-home figure. Foreign residents, working holiday makers, and people who are residents for only part of the year use different tax calculations. The seniors and pensioners tax offset, and the higher Medicare thresholds that go with it, are not applied. A family Medicare reduction is not applied either.',
      'A work-related expense deduction is not subtracted automatically. Enter income after the deduction you intend to claim. Employer superannuation, including the superannuation guarantee, is not taken off take-home. Salary-sacrifice super should be removed from the income you type, because it changes taxable income before this formula starts. The Medicare levy result is for a single person using the Schedule 1 parameters of $28,011 and $35,013. If a later ATO assessment threshold for 2026–27 differs from the withholding parameters, trust the assessment notice for the levy.'
    ],
    disclaimer: 'This is a planning estimate for a resident’s 2026–27 taxable income, not a payment summary, a notice of assessment, or tax advice. The Australian Taxation Office works out the assessment when you lodge.',
    faqs: [
      {
        q: 'Do the 2026–27 Australian rates include the Medicare levy?',
        a: 'No. The ATO’s resident rate table says the rates do not include the Medicare levy of 2%. This calculator adds the levy after income tax and the low income tax offset. At $80,000 the levy is $1,600.00 on top of $14,520.00 of income tax.'
      },
      {
        q: 'Why is the low income tax offset $270 at $20,000 rather than $700?',
        a: 'The maximum offset is $700, but it can only reduce income tax to zero. Tax on $20,000 is $270, so $270 of the offset is used and the rest is not refunded. At $18,200, tax is $0, so the offset used is $0 as well.'
      },
      {
        q: 'Is superannuation deducted from this Australian take-home pay?',
        a: 'No. Take-home here is taxable income minus income tax, after the low income tax offset, minus the Medicare levy. The superannuation guarantee is paid by the employer and is not modeled as a deduction. A salary sacrifice should be removed from the income you enter.'
      },
      {
        q: 'Who gets the reduced Medicare levy in this calculator?',
        a: 'A single resident at or below $28,011 pays none. Between that amount and $35,013 the levy is 10% of the excess. At $30,000 that is $198.90. At $35,013 or more the levy is 2% of taxable income. Family reductions, exemptions, and the seniors and pensioners thresholds are not calculated.'
      },
      {
        q: 'Does this include the Medicare levy surcharge or a HELP repayment?',
        a: 'No. Both depend on tests this form does not ask. The surcharge for 2026–27 can apply from $105,000 of income for surcharge purposes for a single person without the right hospital cover. Study-loan repayments use repayment income, not this take-home formula. Subtract those yourself if you already know the amounts.'
      }
    ],
    relatedLinks: [
      { slug: 'ontario-take-home-pay-calculator', label: 'Ontario take-home pay calculator for 2026', note: 'Canadian dollars, CPP, EI, and Ontario tax. Not comparable one-for-one with an Australian salary.' },
      { slug: 'scotland-take-home-pay-calculator', label: 'Scotland take-home pay calculator for 2026/27', note: 'Pounds, Scottish income tax, and UK National Insurance.' },
      { slug: 'hourly-to-salary-calculator', label: 'Hourly to salary calculator', note: 'Convert an hourly rate into the annual figure this page treats as taxable income.' }
    ]
  },
  'rent-affordability-calculator': {
    title: 'Rent Affordability Calculator (30% Rule) | ClearCalc',
    h1: 'Rent Affordability Calculator Using the 30% Rule',
    description: 'See what share of gross monthly income a rent payment uses, and the rent that would sit at 30% of that income.',
    intro: [
      'This rent affordability calculator divides monthly rent by gross monthly income and compares the result with 30%. The U.S. Department of Housing and Urban Development describes households that pay more than 30% of their income for housing as cost-burdened, and households that pay more than 50% as severely cost-burdened. The 30% line is a screening rule of thumb, not a statute that caps your lease and not a lender’s underwriting decision.',
      'The sample is $1,800 of rent and $6,000 of gross monthly income. That pair lands on 30% exactly. Gross income means income before tax. A take-home paycheck is a smaller number, so the same rent is a larger share of cash pay than of gross pay. This page does not estimate tax, utilities, parking, or renter’s insurance.'
    ],
    steps: [
      'Enter the monthly rent you would actually send the landlord. The sample is 1800.',
      'Enter gross monthly income before tax. The sample is 6000. If you know annual gross income, divide it by 12 first.',
      'Press Calculate. The headline is rent divided by income, shown as a percent to two decimal places.',
      'Read whether the rent is under, at, or over the 30% guideline, and the monthly rent that would equal 30% of the income you entered.'
    ],
    howHeading: 'How the 30% rent comparison is calculated',
    howItWorks: [
      'The share is monthly rent divided by gross monthly income, multiplied by 100. At $1,800 and $6,000 the ratio is 0.30, so the headline is 30.00%. The guideline rent is 30% of the income, rounded to the cent. The gap is that guideline rent minus the rent you entered. A positive gap is money under the line. A negative gap is money over the line. Annual rent and annual gross income are the monthly figures multiplied by 12, with no tax adjustment.',
      'HUD’s cost-burden description is about housing costs and household income. A full housing cost can include utilities and other housing bills, not only the lease payment. This form uses the rent you type as the whole housing cost. If utilities are extra, add them to the rent field before you calculate, or the share will look smaller than the housing cost HUD would count.',
      'Thirty percent of gross income is not thirty percent of take-home pay. A renter who keeps about three-quarters of gross pay is spending 40% of take-home when the rent is 30% of gross. That conversion depends on the tax, which this form does not compute. Use a paycheck calculator for the tax, then decide which denominator you care about. The percent on this page is always the gross one.'
    ],
    formula: 'Share of gross income = monthly rent ÷ gross monthly income × 100\nGuideline rent = gross monthly income × 0.30\nGap = guideline rent − monthly rent\nAnnual rent = monthly rent × 12\nAnnual gross income = gross monthly income × 12\nAt the guideline: gap = 0\nUnder the guideline: gap > 0\nOver the guideline: gap < 0',
    formulaNotes: [
      'Income has to be greater than zero. Rent may be zero, which produces a 0.00% share and a guideline rent of 30% of income. The guideline rent is rounded to the cent from the exact 30% product. A one-cent difference versus a hand calculation is that rounding.',
      'The 50% severe-burden line is not a second mode, but you can see it in the headline. A result above 50.00% is past both the cost-burdened line and the severely cost-burdened line in HUD’s description. The form still labels the gap against 30%, not against 50%.'
    ],
    examplesHeading: 'Worked rent and income examples',
    examples: [
      {
        title: '$1,800 rent and $6,000 gross income',
        paragraphs: [
          'The share is 1,800 / 6,000 × 100 = 30.00%. The guideline rent is 30% of $6,000, which is $1,800.00. The result says the rent is at the 30% guideline. Annual rent is $21,600.00 and annual gross income is $72,000.00.',
          'There is no gap to report. Raising the rent by $1 would put the household $1 over the line. Lowering income by $1 would do the same, because both numbers move the ratio. The calculator does not round the income before it divides.'
        ]
      },
      {
        title: '$2,200 rent and $5,000 gross income',
        paragraphs: [
          'The share is 2,200 / 5,000 × 100 = 44.00%. The guideline rent is $1,500.00. The rent is $700.00 over the 30% guideline. Annual rent is $26,400.00 and annual gross income is $60,000.00.',
          'Forty-four percent is under the 50% severe-burden marker and over the 30% marker. The $700 is a monthly gap, so the annual gap against the guideline is $8,400. The form does not say the lease is illegal or that an application will be refused. It only places the rent against the 30% description.'
        ]
      },
      {
        title: '$1,400 rent and $7,000 gross income',
        paragraphs: [
          'The share is 1,400 / 7,000 × 100 = 20.00%. The guideline rent is $2,100.00. The rent is $700.00 under the 30% guideline. Annual rent is $16,800.00 and annual gross income is $84,000.00.',
          'Room under the line is not the same thing as spare cash. Tax, a loan payment, child care, and utilities still have to fit. The $700 is the amount the rent could rise before this gross-income test would call the household cost-burdened, and only if income stayed $7,000 and utilities stayed inside the rent figure.'
        ]
      }
    ],
    table: {
      heading: 'Rent as a share of gross monthly income',
      caption: 'Each row is what this calculator displays. The guideline rent is 30% of gross monthly income, rounded to the cent. The position column is the gap against that rent. Annual amounts are twelve times the monthly inputs.',
      headers: ['Monthly rent', 'Gross monthly income', 'Share', 'Guideline rent', 'Position'],
      rows: [
        ['$1,400', '$7,000', '20.00%', '$2,100.00', '$700.00 under'],
        ['$1,800', '$6,000', '30.00%', '$1,800.00', 'At the guideline'],
        ['$2,200', '$5,000', '44.00%', '$1,500.00', '$700.00 over'],
        ['$2,500', '$5,000', '50.00%', '$1,500.00', '$1,000.00 over'],
        ['$3,000', '$5,000', '60.00%', '$1,500.00', '$1,500.00 over']
      ]
    },
    limitsHeading: 'What the 30% rent test leaves out',
    limits: [
      'Gross income ignores tax. Two households with the same gross pay and the same rent can have very different cash left if one has higher withholding. This page will not compute that. A paycheck calculator is a separate step, and the currencies and the tax years have to match the income you are actually earning.',
      'Landlords and mortgage lenders do not all use 30% of gross income. A lender’s debt-to-income ratio includes other debts and uses its own limit. A landlord may look at take-home pay, credit, or a multiple of the rent such as three times monthly rent. Three times rent is a different test: $1,800 of rent would want $5,400 of gross monthly income, which is 33.33%, not 30%.',
      'Utilities, parking, pet rent, and insurance are included only if you add them to the rent field. A household with more than one earner should enter combined gross income if the question is about the household. Entering one paycheck while the lease is carried by two people makes the share look worse than the household’s. The form also does not know local fair-market rents or voucher payment standards.'
    ],
    disclaimer: 'This compares rent with 30% of the gross income you enter. It is not a lease approval, a voucher estimate, or financial advice.',
    faqs: [
      {
        q: 'Where does the 30% rent rule come from?',
        a: 'HUD describes households that spend more than 30% of their income on housing as cost-burdened, and more than 50% as severely cost-burdened. This calculator turns that description into rent divided by gross monthly income. It is not a legal cap on what a landlord may charge.'
      },
      {
        q: 'Should I enter gross income or take-home pay for rent?',
        a: 'Enter gross monthly income. The 30% comparison on this page is defined on that base. At $1,800 of rent and $6,000 of gross income the result is 30.00%. The same rent against take-home pay would be a higher percent, and this form does not calculate the tax that sits between those two incomes.'
      },
      {
        q: 'What rent is affordable on a $6,000 gross monthly income?',
        a: 'Thirty percent of $6,000 is $1,800.00 a month, which is the sample. Annual rent at that level is $21,600.00. That answer ignores utilities unless you have already included them, and it ignores tax.'
      },
      {
        q: 'Is 50% of income a different warning for rent?',
        a: 'Yes. HUD’s severely cost-burdened description starts above 50% of income. A $2,500 rent on $5,000 of gross income is 50.00% and is $1,000.00 over the 30% guideline. The headline shows the actual share, so you can see 50% without a second button.'
      },
      {
        q: 'Does this rent calculator know local prices or my tax?',
        a: 'No. It only divides the two numbers you type. It does not look up a city’s typical rent, and it does not withhold federal, state, or payroll tax. Use it beside a paycheck estimate if you want to see cash pay as well as the gross-income ratio.'
      }
    ],
    relatedLinks: [
      { slug: 'mortgage-calculator', label: 'Fixed-rate mortgage payment calculator', note: 'Principal and interest only. A different housing question from monthly rent.' },
      { slug: 'texas-paycheck-calculator', label: 'Texas paycheck calculator for 2026', note: 'Estimate federal tax and FICA on Texas wages before you compare rent with cash pay.' },
      { slug: 'hourly-to-salary-calculator', label: 'Hourly to salary calculator', note: 'Turn an hourly wage into an annual figure, then divide by 12 for the income field.' }
    ]
  },
  'hourly-to-salary-calculator': {
    title: 'Hourly to Salary Calculator | ClearCalc',
    h1: 'Hourly to Salary Calculator',
    description: 'Convert an hourly rate and a weekly schedule into weekly, monthly, and annual pay, using the weeks you are actually paid.',
    intro: [
      'This hourly to salary calculator multiplies an hourly rate by hours per week and by paid weeks in the year. The headline is the annual figure. Weekly pay and monthly pay are shown beside it, and so is the number of paid hours. The sample is $28 an hour, 40 hours a week, for 52 paid weeks, which is $58,240 a year.',
      'The useful choice is the weeks field. A person who is paid for every week, including paid leave, is on 52 weeks. A contractor who takes two unpaid weeks is closer to 50. The form does not assume overtime. Hours above 40 are paid at the same hourly rate unless you use the weekly overtime calculator for that week.'
    ],
    steps: [
      'Enter the hourly rate in dollars. Use 28 for $28 an hour, not 28 cents.',
      'Enter hours per week. The sample is 40. A part-time schedule might be 32 or 20.',
      'Enter paid weeks per year. Leave 52 if you are paid for every week. Use fewer weeks if some weeks are unpaid.',
      'Press Calculate. Read the annual headline, the weekly pay, the monthly pay, and the paid-hour count.'
    ],
    howHeading: 'How hourly pay becomes a salary',
    howItWorks: [
      'Weekly pay is the hourly rate times hours per week. Annual pay is weekly pay times the number of paid weeks, which is the same as rate times hours times weeks. Monthly pay is the annual figure divided by 12, not the weekly figure times 4. There are not exactly four weeks in a month. Using 4 would understate a 52-week year: 40 hours times $28 times 4 is $4,480, while $58,240 divided by 12 is $4,853.33.',
      'The paid-hour line is hours per week times weeks. At 40 and 52 that is 2,080 hours, the usual full-time count in the United States when leave is paid. At 40 and 50 it is 2,000 hours. The calculator rounds money to the cent at the end of each multiplication. A rate of $18.50 for 32 hours and 52 weeks is $30,784.00 a year, because 18.50 × 32 × 52 is exact.',
      'Nothing in the formula withholds tax. The annual headline is a gross salary, the sort of number a paycheck calculator expects in its wage field. It is not take-home pay. It also is not a quote that includes overtime, shift differentials, bonuses, or unpaid lunch. If the hours field already includes unpaid lunch, the salary will be high. Enter hours you are paid for.'
    ],
    formula: 'Weekly pay = hourly rate × hours per week\nAnnual pay = hourly rate × hours per week × paid weeks\nMonthly pay = annual pay ÷ 12\nPaid hours = hours per week × paid weeks\nA 40-hour week for 52 paid weeks = 2,080 paid hours',
    formulaNotes: [
      'Monthly pay uses the annual total divided by 12 so that twelve displayed months can be reconciled to the year, apart from cent rounding. It does not use 52 ÷ 12 as a weekly multiplier on the stub. If your employer pays twice a month, the cash amount of one paycheck is the annual figure divided by 24, which this page does not print. Divide the headline by 24 yourself, or run the annual figure through a paycheck calculator that has a twice-a-month choice.',
      'A week count other than 52 changes the note under the result. Fifty paid weeks at $45 an hour and 40 hours is $90,000.00 a year and 2,000 paid hours. The same hours at 52 weeks would be $93,600. The two-week gap is $3,600, which is two weeks of $1,800.'
    ],
    examplesHeading: 'Worked hourly-to-salary examples',
    examples: [
      {
        title: '$28 an hour, 40 hours, 52 weeks',
        paragraphs: [
          'Weekly pay is 28 × 40 = $1,120.00. Annual pay is 1,120 × 52 = $58,240.00, which is the headline. Monthly pay is 58,240 / 12 = $4,853.333…, shown as $4,853.33. Paid hours are 2,080. The note says the count uses 52 paid weeks.',
          'Twelve times $4,853.33 is $58,239.96, four cents under the annual headline. That is display rounding on the month. The annual figure itself is exact for these inputs. Tax is not removed. A 2026 paycheck calculator can take the $58,240 as gross wages if you want federal tax and FICA.'
        ]
      },
      {
        title: '$18.50 an hour, 32 hours, 52 weeks',
        paragraphs: [
          'Weekly pay is 18.50 × 32 = $592.00. Annual pay is 592 × 52 = $30,784.00. Monthly pay is $2,565.33. Paid hours are 1,664. This is a four-day schedule paid every week of the year, not a 40-hour salary with Fridays deleted after the fact.',
          'Compared with the $28 full-time sample, both the rate and the hours are lower. The calculator does not blend the two. If the 32 hours sometimes become 40, the annual figure will be low for those weeks. Add the extra hours only if they are paid at this same rate. Overtime needs the other calculator.'
        ]
      },
      {
        title: '$45 an hour, 40 hours, 50 paid weeks',
        paragraphs: [
          'Weekly pay is $1,800.00. Annual pay is 1,800 × 50 = $90,000.00. Monthly pay is $7,500.00 exactly, because $90,000 divides by 12 with no remainder. Paid hours are 2,000. The note says the count uses 50 paid weeks, not 52.',
          'The two unpaid weeks are why this is not $93,600. If those two weeks are actually paid vacation, change the weeks field to 52. Leaving 50 in that case understates the salary by $3,600. The form cannot tell paid leave from unpaid leave. The weeks field is that decision.'
        ]
      }
    ],
    table: {
      heading: 'Annual pay from hourly rate, hours, and weeks',
      caption: 'Each row is what this calculator displays. Monthly pay is the annual amount divided by 12 and rounded to the cent. No tax and no overtime premium are included.',
      headers: ['Hourly rate', 'Hours per week', 'Paid weeks', 'Weekly pay', 'Monthly pay', 'Annual pay'],
      rows: [
        ['$28.00', '40', '52', '$1,120.00', '$4,853.33', '$58,240.00'],
        ['$18.50', '32', '52', '$592.00', '$2,565.33', '$30,784.00'],
        ['$45.00', '40', '50', '$1,800.00', '$7,500.00', '$90,000.00'],
        ['$15.00', '20', '52', '$300.00', '$1,300.00', '$15,600.00'],
        ['$60.00', '40', '52', '$2,400.00', '$10,400.00', '$124,800.00']
      ]
    },
    limitsHeading: 'What this hourly conversion leaves out',
    limits: [
      'Overtime premiums, double time, weekend differentials, and unpaid meal breaks are not detected. If you type 48 hours at the straight rate, all 48 are paid at that rate. The weekly overtime calculator is the tool that applies a multiple after an hour threshold.',
      'Tax, retirement contributions, and benefit premiums are not withheld. The headline is gross pay. A salaried exempt worker is often paid the annual amount even when a particular week is not 40 hours. This form assumes every paid hour is at the rate you type, which describes hourly pay, not an exempt salary that happens to imply an hourly equivalent.',
      'Paid weeks are whatever you enter. The calculator does not know the legal holiday calendar or your employer’s leave plan. A year with 27 biweekly paychecks is a payroll-calendar issue, not a change to the hourly math, and it is not modeled. Currency is displayed in dollars. The arithmetic is the same in another currency if you ignore the symbol and keep the inputs in one currency.'
    ],
    disclaimer: 'This converts an hourly rate into gross weekly, monthly, and annual pay. It is not a pay stub, an overtime calculation, or tax advice.',
    faqs: [
      {
        q: 'How many hours are in a full-time year at 40 hours a week?',
        a: 'Forty hours times 52 paid weeks is 2,080 hours. At $28 an hour that is $58,240.00 a year and $1,120.00 a week. Monthly pay is $4,853.33, which is the annual figure divided by 12, not the weekly figure times 4.'
      },
      {
        q: 'Should a salaried worker use 52 weeks or 50?',
        a: 'Use 52 if you are paid for leave. Use 50, or another count, only for weeks that are unpaid. At $45 an hour and 40 hours, 50 weeks is $90,000.00 and 52 weeks would be $93,600. The form does not decide which one your job pays.'
      },
      {
        q: 'Does this hourly calculator include overtime?',
        a: 'No. Every hour uses the same rate. A 48-hour week at $22 is not time and a half here. The weekly overtime calculator applies a multiple after a threshold, by default 1.5 after 40 hours.'
      },
      {
        q: 'Why is monthly pay not four times the weekly pay?',
        a: 'A month is not four weeks. Four times $1,120 is $4,480, but $58,240 divided by 12 is $4,853.33. Using four weeks would drop almost a month of pay across a 52-week year. This page always divides the annual total by 12.'
      },
      {
        q: 'Is the annual figure take-home pay?',
        a: 'No. It is gross pay before tax, retirement contributions, and benefit premiums. You can use it as the wage input on a 2026 paycheck calculator. Those pages apply federal tax and FICA, and the California page also applies state income tax and SDI.'
      }
    ],
    relatedLinks: [
      { slug: 'overtime-pay-calculator', label: 'Weekly overtime pay calculator', note: 'Pays hours over a threshold at time and a half or another multiple.' },
      { slug: 'texas-paycheck-calculator', label: 'Texas paycheck calculator for 2026', note: 'Paste the annual gross figure in as wages if the job is in Texas.' },
      { slug: '401k-contribution-calculator', label: '2026 401(k) contribution calculator', note: 'Apply a percentage deferral to the annual salary once you have it.' }
    ]
  },
  'overtime-pay-calculator': {
    title: 'Weekly Overtime Pay Calculator (Time and a Half) | ClearCalc',
    h1: 'Weekly Overtime Pay Calculator',
    description: 'Calculate weekly gross pay when hours over a threshold are paid at 1.5 times the hourly rate, or at another multiple you set.',
    intro: [
      'This weekly overtime pay calculator splits hours worked into straight time and overtime. Hours up to the threshold are paid at the hourly rate. Hours above it are paid at the rate times the multiple. The default threshold is 40 hours and the default multiple is 1.5, which is the time-and-a-half rule in the federal Fair Labor Standards Act for nonexempt workers after 40 hours in a workweek. The sample is $22 an hour for 48 hours.',
      'The headline is gross pay for that one week. It also shows what a year would be if every week matched this one. Most years do not. The form does not compute California daily overtime, which can start after eight hours in a day and can require double time after 12. It does not decide whether a worker is exempt.'
    ],
    steps: [
      'Enter the straight-time hourly rate. The sample is 22, meaning $22 an hour.',
      'Enter hours worked in the workweek. The sample is 48.',
      'Leave the threshold at 40 unless you are testing a different rule. Leave the multiple at 1.5 for time and a half, or use 2 for double time.',
      'Press Calculate. Read straight-time pay, overtime pay, the overtime hours, and the extra half-time premium.'
    ],
    howHeading: 'How weekly overtime pay is calculated',
    howItWorks: [
      'Straight-time hours are the smaller of hours worked and the threshold. Overtime hours are the rest, and they are zero when hours worked do not exceed the threshold. Straight-time pay is the rate times straight-time hours. Overtime pay is the rate times the multiple times overtime hours. Weekly gross is the sum. The extra above straight time is overtime pay minus the rate times the overtime hours. At a 1.5 multiple, that extra is the half-time premium: half the rate, times the overtime hours.',
      'At $22 an hour and 48 hours, with a threshold of 40 and a multiple of 1.5, straight-time pay is 22 × 40 = $880. Overtime pay is 22 × 1.5 × 8 = $264. Weekly gross is $1,144. The extra above straight time on those eight hours is $88, which is 22 × 0.5 × 8. Paying all 48 hours at $22 and then adding $88 produces the same $1,144. That is the usual way to explain time and a half: every hour is paid, and the overtime hours are paid an extra half.',
      'The federal rule this default matches is a workweek, not a pay period. Two weeks of 32 and 48 hours are not the same as two weeks of 40, even though both total 80, because the 48-hour week has eight overtime hours if the threshold is 40. The calculator looks at one week only. The annual line multiplies that week by 52 and is labeled as a repeat of this week, not as a forecast.'
    ],
    formula: 'Straight-time hours = min(hours worked, threshold)\nOvertime hours = max(0, hours worked − threshold)\nStraight-time pay = hourly rate × straight-time hours\nOvertime pay = hourly rate × multiple × overtime hours\nWeekly gross = straight-time pay + overtime pay\nExtra above straight time = overtime pay − (hourly rate × overtime hours)\nAt a 1.5 multiple, that extra = hourly rate × 0.5 × overtime hours\nRepeated year = weekly gross × 52',
    formulaNotes: [
      'A multiple of 1 pays overtime hours at the same rate as straight time, so the extra above straight time is $0. A multiple of 2 doubles the overtime hours. At $19 an hour, 50 hours, a threshold of 40, and a multiple of 2, overtime pay is 19 × 2 × 10 = $380, and the extra above straight time is $190.',
      'The rate is the regular rate you type. Under the Fair Labor Standards Act the regular rate can include certain bonuses and differentials, spread over all hours in the week. This form does not rebuild that regular rate. If the legal regular rate is higher than the base hourly rate, enter the regular rate, not the lower posted rate.'
    ],
    examplesHeading: 'Worked weekly overtime examples',
    examples: [
      {
        title: '$22 an hour, 48 hours, time and a half after 40',
        paragraphs: [
          'Straight-time pay is $880.00. Overtime pay is $264.00. Overtime hours are 8. The extra above straight time is $88.00. The headline is $1,144.00 this week. If every week of the year matched it, gross pay would be $59,488.00. A flat 40-hour week at the same rate is $880, so the eight overtime hours add $264, not $176.',
          'Forty-eight hours at straight time would have been $1,056. The overtime law, at this multiple, adds $88 to that. Both ways of saying it land on $1,144.00. Tax is not withheld from the $1,144.00.'
        ]
      },
      {
        title: '$30 an hour and exactly 40 hours',
        paragraphs: [
          'Straight-time pay is $1,200.00. Overtime pay is $0.00 and overtime hours are 0. The extra above straight time is $0.00. The headline is $1,200.00 this week. The repeated year is $62,400.00, which is 30 × 40 × 52 and matches the hourly-to-salary calculator for a 52-week year with no overtime.',
          'Hitting the threshold exactly does not create an overtime hour. The next hour, the 41st, would be paid at $45 if the multiple stays 1.5. The form treats the threshold as the last straight-time hour, not as the first overtime hour.'
        ]
      },
      {
        title: '$19 an hour, 50 hours, double time after 40',
        paragraphs: [
          'Straight-time pay is 19 × 40 = $760.00. Overtime pay is 19 × 2 × 10 = $380.00. The extra above straight time on those 10 hours is $190.00. Weekly gross is $1,140.00. A year of identical weeks would be $59,280.00.',
          'Double time is not the federal minimum for hours over 40. The federal minimum for nonexempt overtime is one and a half times the regular rate. A multiple of 2 is for a contract, a state daily-overtime rule, or a what-if. This page will apply whatever multiple you type. It will not check that the multiple is legal.'
        ]
      }
    ],
    table: {
      heading: 'Weekly gross pay at time and a half after 40 hours',
      caption: 'The threshold is 40 hours and the multiple is 1.5 in every row. Straight-time pay covers the first 40 hours, or fewer if the week is shorter. The repeated-year column is this one week times 52, not a prediction that overtime happens every week.',
      headers: ['Rate', 'Hours', 'Straight-time pay', 'Overtime pay', 'Weekly gross', 'If every week matched'],
      rows: [
        ['$22', '40', '$880.00', '$0.00', '$880.00', '$45,760.00'],
        ['$22', '48', '$880.00', '$264.00', '$1,144.00', '$59,488.00'],
        ['$30', '40', '$1,200.00', '$0.00', '$1,200.00', '$62,400.00'],
        ['$30', '45', '$1,200.00', '$225.00', '$1,425.00', '$74,100.00'],
        ['$16', '55', '$640.00', '$360.00', '$1,000.00', '$52,000.00']
      ]
    },
    limitsHeading: 'What this overtime estimate leaves out',
    limits: [
      'The federal overtime requirement applies to nonexempt employees. Executive, administrative, professional, and other exemptions can remove the requirement, and those exemptions depend on duties and on a salary level this form does not ask for. Entering hours here does not mean the law requires the premium.',
      'California, and some other states, add daily overtime and, in California, double time after 12 hours in a day and after eight hours on the seventh day in a workweek. A week of five 10-hour days can owe California daily overtime even though it is 50 hours with only 10 hours over 40. This calculator sees only the weekly total. It also does not handle a regular rate that mixes two jobs or a nondiscretionary bonus.',
      'The result is gross pay for one week. It does not withhold income tax, Social Security, or Medicare. Overtime wages are generally still taxable wages. A deduction for qualified overtime on a federal return, if one applies to your year, is not computed here and is not the same thing as the half-time premium in the paycheck.'
    ],
    disclaimer: 'This is gross pay for one workweek from the rate, hours, threshold, and multiple you enter. It is not a determination that overtime is owed, and it is not tax advice.',
    faqs: [
      {
        q: 'How is time and a half calculated after 40 hours?',
        a: 'Hours up to 40 are paid at the hourly rate. Each hour after 40 is paid at 1.5 times that rate. At $22 an hour and 48 hours, straight-time pay is $880.00 and overtime pay is $264.00, so the week is $1,144.00. The extra above straight time on the eight hours is $88.00.'
      },
      {
        q: 'Does a 40-hour week include any overtime in this calculator?',
        a: 'No. Overtime hours are the hours above the threshold. At exactly 40, overtime pay is $0.00. At $30 an hour the week is $1,200.00. The 41st hour is the first overtime hour when the threshold is 40.'
      },
      {
        q: 'Can two workweeks be averaged to avoid overtime?',
        a: 'Not in this calculator, and not under the basic federal weekly rule it is modeling. A 32-hour week and a 48-hour week are entered as two separate calculations. The 48-hour week still has eight overtime hours at a 40-hour threshold. The form looks at one week at a time.'
      },
      {
        q: 'Does this weekly overtime tool apply California daily overtime?',
        a: 'No. It only compares the weekly total with the threshold you enter. California daily overtime, including double time after 12 hours in a day, needs the hours of each day. A multiple of 2 is available if you want to price a double-time hour yourself.'
      },
      {
        q: 'Is the overtime premium tax-free?',
        a: 'The weekly gross on this page is before tax. Social Security, Medicare, and income tax can still apply to overtime wages. This calculator does not withhold them and does not apply any federal deduction for qualified overtime. The $1,144.00 sample is a gross week, not a net paycheck.'
      }
    ],
    relatedLinks: [
      { slug: 'hourly-to-salary-calculator', label: 'Hourly to salary calculator', note: 'Straight time only, for a weekly schedule repeated across the paid weeks you choose.' },
      { slug: 'california-paycheck-calculator', label: 'California paycheck calculator for 2026', note: 'Annual California wages after tax and SDI. It does not compute daily overtime.' },
      { slug: 'florida-paycheck-calculator', label: 'Florida paycheck calculator for 2026', note: 'Put a full year of gross wages, including overtime you expect, into the wage field.' }
    ]
  },
  '401k-contribution-calculator': {
    title: '401(k) Contribution Calculator for 2026 | ClearCalc',
    h1: '401(k) Contribution Calculator for 2026',
    description: 'See a 2026 employee 401(k) deferral, the room under the IRS limit, and an employer match capped as a percent of pay.',
    intro: [
      'This 401(k) contribution calculator applies your contribution rate to annual salary and stops at the 2026 elective deferral limit you select. It then applies an employer match to the portion of that deferral which falls under a cap you set, such as 100% of the first 4% of pay. The headline is your deferral plus the match. The sample is an $80,000 salary, a 6% deferral, and a match of 100% on the first 4% of pay.',
      'The limits come from IRS Notice 2025-67. The elective deferral limit under section 402(g) is $24,500 in 2026. The standard catch-up limit for someone age 50 or over is $8,000, for a total of $32,500. The higher catch-up for someone who attains age 60, 61, 62, or 63 in 2026 is $11,250, for a total of $35,750. The annual additions limit under section 415(c) is $72,000, and catch-up contributions sit on top of that limit rather than inside it.'
    ],
    steps: [
      'Enter annual salary. The sample is 80000.',
      'Enter your contribution as a percent of salary. Use 6 for 6%, not 0.06.',
      'Enter the employer match as a percent of your deferral, and the cap as a percent of salary. A full match on the first 4% of pay is a match of 100 and a cap of 4.',
      'Choose the 2026 deferral limit that matches your age. Press Calculate and read your deferral, the match, and the room under both limits.'
    ],
    howHeading: 'How the 2026 deferral and the match are applied',
    howItWorks: [
      'Your requested deferral is salary times your contribution rate. The form then keeps the smallest of that request, your salary, and the deferral limit you selected. At $80,000 and 6%, the request is $4,800. The under-50 limit is $24,500, so the deferral stays $4,800. Room under the limit is $19,700. Someone contributing 20% of $200,000 has a request of $40,000. With the age-50 limit selected, the deferral stops at $32,500 and the room under that limit is $0.',
      'The match cap is a percent of salary. The matchable deferral is the smaller of your actual deferral and that cap. The employer match is the match rate times the matchable deferral. At $80,000, a 100% match on the first 4% of pay sets the cap at $3,200. You deferred $4,800, which is more than the cap, so the match is 100% of $3,200, which is $3,200. The extra $1,600 you deferred is unmatched. A 50% match on the first 6% of a $120,000 salary matches $3,600 when you defer at least $7,200. A 15% deferral on that salary is $18,000, so the match is still $3,600, not half of $18,000.',
      'Catch-up is the part of your deferral above $24,500. It is $0 when you are under the basic limit. It is $8,000 when a $32,500 deferral is entirely used, and $11,250 when a $35,750 deferral is entirely used. Annual additions, for the $72,000 test on this page, are your deferral excluding that catch-up, plus the employer match. The page does not add a profit-sharing contribution you forgot to type. If the match formula produces annual additions over $72,000, the result says how far over. It does not silently cut the match back.'
    ],
    formula: '2026 elective deferral limit = $24,500, or $32,500 at the standard catch-up, or $35,750 at the age 60–63 catch-up\nYour deferral = min(salary × your rate, salary, the limit you selected)\nMatch cap = salary × cap rate\nEmployer match = match rate × min(your deferral, match cap)\nCatch-up portion = max(0, your deferral − $24,500)\nAnnual additions, excluding catch-up = (your deferral − catch-up) + employer match\nSection 415(c) limit for 2026 = $72,000\nCombined contribution = your deferral + employer match',
    formulaNotes: [
      'The match rate is a percent of the matchable deferral, not a percent of salary. Typing 100 in the match field and 4 in the cap field means the employer contributes one dollar per dollar you contribute, until your contributions reach 4% of pay. Typing 4 in the match field would mean the employer contributes four cents per dollar you contribute, which is a different plan.',
      'A plan can set a lower deferral cap than the IRS, and a highly compensated employee’s deferral can be limited by a nondiscrimination test. This form only applies the statutory dollar limits and the match rule you type. It does not know the plan document.'
    ],
    examplesHeading: 'Worked 2026 contribution examples',
    examples: [
      {
        title: '$80,000 salary, 6% deferral, 100% match on the first 4%',
        paragraphs: [
          'Your elective deferral is $4,800.00. The match cap is 4% of $80,000, which is $3,200, so the employer match is $3,200.00. The headline is $8,000.00 / year. The limit applied is $24,500.00 and the room under it is $19,700.00. The catch-up portion is $0.00. Annual additions are $8,000.00, and the room under the $72,000 limit is $64,000.00.',
          'Raising your rate does not raise the match once you are already deferring at least 4%. A 10% deferral would be $8,000 from you and still $3,200 from the employer. The unmatched $4,800 would still count toward the $24,500 limit.'
        ]
      },
      {
        title: '$120,000 salary, 15% deferral, 50% match on the first 6%, age 50',
        paragraphs: [
          'Fifteen percent of $120,000 is $18,000, which is under the $32,500 age-50 limit, so the whole $18,000.00 is deferred. The catch-up portion is $0.00 because $18,000 is not above $24,500. Choosing the age-50 limit did not force a catch-up contribution. It only raised the ceiling.',
          'The match cap is 6% of $120,000, which is $7,200. The match rate is 50%, so the employer contributes $3,600.00. The headline is $21,600.00 / year. Room under the $32,500 limit is $14,500.00. Annual additions are $21,600.00, all of it inside the $72,000 limit, with $50,400.00 of room.'
        ]
      },
      {
        title: 'Using the whole catch-up at ages 50 and 60–63',
        paragraphs: [
          'A $200,000 salary at a 20% rate requests $40,000. With the $32,500 limit selected, and a 50% match on the first 6% of pay, your deferral is $32,500.00 and the catch-up portion is $8,000.00. The match cap is $12,000 and the match is half of that, $6,000.00, because the matchable amount cannot exceed 6% of pay. The headline is $38,500.00. Annual additions exclude the $8,000 catch-up, so they are $24,500 + $6,000 = $30,500.00.',
          'A $150,000 salary at a 30% rate, with the $35,750 age 60–63 limit and a 100% match on the first 6%, defers $35,750.00. The catch-up portion is $11,250.00. The match is 6% of $150,000, which is $9,000.00. The headline is $44,750.00. Annual additions excluding catch-up are $33,500.00. Room under $72,000 is $38,500.00.'
        ]
      }
    ],
    table: {
      heading: '2026 deferral limits used by this calculator',
      caption: 'Dollar limits are from IRS Notice 2025-67 for 2026. The age 60–63 catch-up is for a participant who attains age 60, 61, 62, or 63 in 2026. Annual additions exclude catch-up. The calculator does not apply a plan-imposed limit lower than these amounts.',
      headers: ['Choice on the form', 'Elective deferral ceiling', 'Of which catch-up', 'Annual additions ceiling'],
      rows: [
        ['Under 50', '$24,500', '$0', '$72,000'],
        ['Age 50–59 or 64+', '$32,500', '$8,000', '$72,000, catch-up on top'],
        ['Age 60–63', '$35,750', '$11,250', '$72,000, catch-up on top']
      ]
    },
    limitsHeading: 'What this 2026 contribution estimate leaves out',
    limits: [
      'The Roth catch-up rule is not applied. Notice 2025-67 sets the wage threshold used to decide whether a catch-up contribution must be designated Roth. This form only counts dollars. It does not choose Roth or pre-tax, and it does not know last year’s FICA wages.',
      'Employer profit sharing, forfeitures, and after-tax non-Roth contributions count toward the $72,000 annual additions limit and are not separate fields. If your plan adds them, the room shown here is too large. Compensation for the plan may also differ from the salary you type, and the limit is 100% of compensation as well as $72,000.',
      'A match formula can be more complicated than a single cap. Some plans match each paycheck and stop when a paycheck hits the cap, which can change the annual match if you defer unevenly. This page applies the cap to the annual salary and the annual deferral. It also ignores vesting. A match that is not vested is still shown in full.'
    ],
    disclaimer: 'This applies the 2026 IRS dollar limits to the salary, rates, and age band you enter. It is not plan advice, and the plan document controls the match.',
    faqs: [
      {
        q: 'What is the 401(k) employee limit for 2026?',
        a: 'IRS Notice 2025-67 sets the elective deferral limit at $24,500. The standard catch-up is $8,000, for a $32,500 total at age 50 or over. The higher catch-up at age 60, 61, 62, or 63 is $11,250, for a $35,750 total. This calculator will not defer more than the choice you select.'
      },
      {
        q: 'How do I enter a 100% match on the first 4% of pay?',
        a: 'Put 100 in the employer match field and 4 in the cap field. On an $80,000 salary and a 6% deferral, you contribute $4,800 and the employer contributes $3,200, because the match stops at 4% of pay. The headline is $8,000.00.'
      },
      {
        q: 'Does choosing the age-50 limit force me to contribute the catch-up?',
        a: 'No. It only raises the ceiling from $24,500 to $32,500. A 15% deferral on $120,000 is $18,000, which is under both ceilings, so the catch-up portion is $0.00 even with the age-50 choice selected.'
      },
      {
        q: 'Do catch-up contributions count toward the $72,000 limit?',
        a: 'Not in this calculator, and not in the section 415(c) annual additions limit described by the IRS. The $72,000 figure covers your deferral excluding catch-up, plus employer contributions. At a full $32,500 deferral and a $6,000 match, annual additions are $30,500, because $8,000 of the deferral is catch-up.'
      },
      {
        q: 'Will every plan match the amount this calculator shows?',
        a: 'Only if the plan’s match is the single cap you entered and you have deferred at least that much over the year. A lower plan cap, a match that is calculated each paycheck, a vesting schedule, or a nondiscrimination refund can all change the dollars. The IRS limits are the ceiling, not a promise that the plan allows the full amount.'
      }
    ],
    relatedLinks: [
      { slug: 'texas-paycheck-calculator', label: 'Texas paycheck calculator for 2026', note: 'Type the traditional deferral in dollars to see the effect on federal tax. The deferral does not reduce FICA.' },
      { slug: 'california-paycheck-calculator', label: 'California paycheck calculator for 2026', note: 'A traditional deferral reduces federal and California income tax in that estimate, not SDI.' },
      { slug: 'compound-interest-calculator', label: 'Compound interest calculator', note: 'Project a balance from a starting amount and a monthly contribution after you know the annual deferral.' }
    ]
  }
};
