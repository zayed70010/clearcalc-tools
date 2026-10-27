export const longtailCalculatorContent = {
  'illinois-paycheck-calculator': {
    title: 'Illinois Paycheck Calculator 2026 (4.95% Flat Tax) | ClearCalc',
    h1: 'Illinois Paycheck Calculator for 2026',
    description: 'Estimate a 2026 Illinois paycheck after federal income tax, the 4.95% Illinois tax, and the $2,925 personal exemption, plus Social Security and Medicare.',
    intro: [
      'This Illinois paycheck calculator estimates what is left from 2026 wages after federal income tax, Illinois income tax, Social Security, and Medicare. Illinois taxes individuals at a flat 4.95% of net income. That rate has been in place since 1 July 2017, and the Illinois Department of Revenue still lists it as the individual rate. The 2026 personal exemption is $2,925. A single filer gets one exemption. Married filing jointly gets two, which is $5,850, unless federal adjusted gross income is over the cap that removes the exemption entirely.',
      'The sample is $65,000, single, paid every two weeks, with no traditional 401(k). Federal income tax uses the tax year 2026 brackets and standard deduction in IRS Revenue Procedure 2025-32. Social Security is 6.2% of wages up to $184,500, and Medicare is 1.45% of all wages, the employee rates in IRS Publication 15 for 2026. Additional Medicare Tax withholding is 0.9% of wages over $200,000. Illinois does not add a state standard deduction on top of the exemption. The result is an annual estimate divided by the number of paychecks. It is not the withholding method in the 2026 IL-700-T tables, and Form IL-1040 rounds tax to the nearest dollar.'
    ],
    steps: [
      'Enter annual gross wages in dollars. The sample, 65000, means $65,000 for the year, not one paycheck.',
      'Choose Single or Married filing jointly. Joint uses the joint federal brackets, the $32,200 federal standard deduction, and two Illinois exemptions, all on this salary only.',
      'Choose a pay frequency. Every two weeks means 26 paychecks. Twice a month means 24. Weekly is 52 and monthly is 12.',
      'Enter a traditional 401(k) deferral for the year, or leave 0. The deferral is capped at wages and at the $24,500 elective limit. Press Calculate.'
    ],
    howHeading: 'How a 2026 Illinois paycheck is estimated',
    howItWorks: [
      'Federal taxable wages are gross wages minus the traditional 401(k) actually applied, then minus the federal standard deduction. For 2026 that deduction is $16,100 for a single filer and $32,200 for married filing jointly. Tax on what remains uses the Revenue Procedure 2025-32 brackets. On $65,000 with no deferral, a single filer has $48,900 of federal taxable income and $5,620.00 of federal income tax. Social Security on those wages is $4,030.00. Medicare is $942.50. Additional Medicare Tax is $0.00. A 401(k) does not reduce Social Security or Medicare.',
      'Illinois starts from a different base. This page treats wages minus the traditional 401(k) as federal adjusted gross income, because a pre-tax deferral is excluded from AGI. The exemption comes off that amount, and 4.95% applies to what is left. On the $65,000 single sample the exemption is $2,925, the Illinois base is $62,075, and 4.95% of $62,075 is $3,072.7125, which rounds to $3,072.71. There is no bracket table. The next dollar of Illinois base is taxed at the same 4.95%.',
      'The exemption is one amount or nothing. The Department’s answer says the allowance is not allowed when federal AGI exceeds $250,000 for a return that is not married filing jointly, or $500,000 for married filing jointly. At exactly $250,000 of wages and no deferral, the single exemption is still $2,925 and Illinois tax is $12,230.21. At $250,001 the exemption drops to $0.00 and Illinois tax is $12,375.05. That is a cliff, not a phase-out. The extra dollar of wages also moves federal tax and Medicare by a few cents, so annual take-home falls from $170,951.79 to $170,807.61, a drop of $144.18. The Illinois line itself jumps by $144.84.',
      'Annual take-home is wages minus federal income tax, Social Security, Medicare, Additional Medicare Tax, Illinois tax, and the deferral. Dividing by 26 and rounding to the cent is the headline. Twenty-six times that headline can miss the annual figure by a few cents. The sample annual take-home is $51,334.79, and the headline is $1,974.42 every two weeks.'
    ],
    formula: 'Tax year 2026. Illinois wages.\nFederal taxable wages = max(0, wages − traditional 401(k) − federal standard deduction)\nFederal standard deduction = $16,100 single, or $32,200 married filing jointly\n401(k) applied = min(amount entered, wages, $24,500)\nFederal income tax = 2026 Rev. Proc. 2025-32 brackets\nSocial Security = 6.2% × min(wages, $184,500)\nMedicare = 1.45% × wages\nAdditional Medicare Tax = 0.9% × max(0, wages − $200,000)\nIllinois AGI proxy = max(0, wages − traditional 401(k))\nExemption = $2,925 single, or $5,850 married filing jointly, and $0 when that AGI proxy exceeds $250,000 single or $500,000 joint\nIllinois tax = 4.95% × max(0, Illinois AGI proxy − exemption), rounded to the cent\nAnnual take-home = wages − federal income tax − Social Security − Medicare − Additional Medicare Tax − Illinois tax − 401(k)\nPaycheck = annual take-home ÷ number of paychecks',
    formulaNotes: [
      'The same $65,000, single, with no deferral, is the Texas sample as well. Texas income tax is $0, so that page’s annual take-home is $54,407.50. Illinois annual take-home is $51,334.79. The entire $3,072.71 gap is the Illinois tax. Federal income tax, Social Security, and Medicare match. Washington at the same wages also starts from those federal lines and then subtracts Paid Leave and WA Cares instead of a 4.95% income tax.',
      'A joint return on the same $65,000 has federal income tax of $3,440.00, which is $2,180.00 below the single figure, and Illinois tax of $2,927.93. The federal gap is not 12% of the extra $16,100 of standard deduction. That slice, from $32,800 of taxable income up to $48,900, does sit in the 12% band and is worth $1,932.00. The joint 10% band also runs $12,400 further than the single 10% band, and two percentage points on that $12,400 is another $248.00. Together those are the $2,180.00. The second Illinois exemption is $2,925 times 4.95%. After each tax is rounded to the cent, the Illinois lines differ by $144.78, not by a separately rounded $144.79.',
      'On $65,000 single, a $6,500 traditional 401(k) cuts federal income tax from $5,620.00 to $4,840.00. That $780.00 is 12% of $6,500, because the deferral sits in the federal 12% band. Illinois tax falls from $3,072.71 to $2,750.96, a cut of $321.75, which is 4.95% of $6,500. Social Security stays $4,030.00 and Medicare stays $942.50. Annual take-home is $45,936.54, or $1,766.79 every two weeks. The deferral reduces both income taxes and the cash in the paycheck. It does not reduce FICA.'
    ],
    examplesHeading: 'Worked 2026 Illinois paycheck examples',
    examples: [
      {
        title: '$65,000, single, every two weeks, no 401(k)',
        paragraphs: [
          'Federal income tax is $5,620.00, Social Security is $4,030.00, and Medicare is $942.50. Illinois income tax is $3,072.71 after the $2,925 exemption. Annual take-home is $51,334.79. The headline is $1,974.42 / two weeks. The New York page, outside New York City, keeps the same federal and FICA lines at this salary and charges $2,913.00 of state tax. Its annual take-home is $51,494.50. Illinois is $159.71 lower, and that $159.71 is $3,072.71 minus $2,913.00. The two states are not using the same kind of tax. New York has brackets and an $8,000 standard deduction. Illinois has one rate and an exemption.',
          'A Florida paycheck at $52,000, single, every two weeks, and no deferral has the federal and FICA lines that belong to that salary and a state tax of zero. Annual take-home there is $43,962.00. The same inputs on this page produce Illinois tax of $2,429.21 and annual take-home of $41,532.79. The gap is the 4.95% tax. Florida does not have a $2,925 exemption to subtract, because it has no wage income tax for the exemption to reduce.'
        ]
      },
      {
        title: 'The same $65,000 filed jointly, and with a $6,500 deferral',
        paragraphs: [
          'Married filing jointly, still at $65,000, every two weeks, and no deferral, uses a $5,850 exemption. Illinois tax is $2,927.93. Federal income tax is $3,440.00. Social Security and Medicare do not change. Annual take-home is $53,659.57, or $2,063.83 / two weeks. The joint figure treats this salary as the only income on the return. A spouse with wages needs a return this one-wage form cannot build. The wider federal brackets would be shared, and the Illinois exemptions would still be two unless AGI is over $500,000.',
          'Go back to single and enter a $6,500 traditional 401(k). Federal income tax is $4,840.00 and Illinois tax is $2,750.96. The exemption is still $2,925, because AGI is $58,500, well under $250,000. Annual take-home is $45,936.54. Cash pay falls by more than the tax savings, because the $6,500 itself is not in the paycheck. A deferral above $24,500 is cut back to that 2026 elective limit. Catch-up contributions are not added on this form.'
        ]
      },
      {
        title: '$90,000 in the federal 22% band, and the exemption cliff at $250,000',
        paragraphs: [
          'At $90,000, single, every two weeks, and no deferral, federal income tax is $10,970.00, Social Security is $5,580.00, and Medicare is $1,305.00. Illinois tax is $4,310.21, which is 4.95% of $87,075. Annual take-home is $67,834.79, or $2,609.03 / two weeks. The Illinois math did not change shape when federal taxable income entered the 22% band. The state line is still one rate times wages after the exemption.',
          'At $250,000, paid monthly, the exemption remains and Illinois tax is $12,230.21. Social Security has already stopped at $11,439.00 because wages are over the $184,500 base. Additional Medicare Tax is $450.00. Annual take-home is $170,951.79, or $14,245.98 / month. One dollar more, $250,001, removes the exemption. Illinois tax becomes $12,375.05 and the monthly headline becomes $14,233.97. Do not read the cliff as a one-dollar tax of $144. The exemption worth $2,925 of base, times 4.95%, leaves the return all at once.'
        ]
      }
    ],
    table: {
      heading: '2026 Illinois paycheck at selected wages',
      caption: 'No 401(k). Federal income tax uses Revenue Procedure 2025-32. Illinois tax is 4.95% after the exemption, $2,925 single or $5,850 joint. Every wage in this table is at or under the exemption cap. Social Security and Medicare are included in take-home rather than shown as their own columns. The two-week figure is the annual take-home divided by 26 and rounded to the cent.',
      headers: ['Wages', 'Status', 'Federal income tax', 'Illinois tax', 'Annual take-home', 'Every two weeks'],
      rows: [
        ['$40,000', 'Single', '$2,620.00', '$1,835.21', '$32,484.79', '$1,249.42'],
        ['$52,000', 'Single', '$4,060.00', '$2,429.21', '$41,532.79', '$1,597.42'],
        ['$65,000', 'Single', '$5,620.00', '$3,072.71', '$51,334.79', '$1,974.42'],
        ['$65,000', 'Joint', '$3,440.00', '$2,927.93', '$53,659.57', '$2,063.83'],
        ['$90,000', 'Single', '$10,970.00', '$4,310.21', '$67,834.79', '$2,609.03'],
        ['$120,000', 'Single', '$17,570.00', '$5,795.21', '$87,454.79', '$3,363.65']
      ]
    },
    limitsHeading: 'What this Illinois paycheck estimate leaves out',
    limits: [
      'The federal line is an annual standard-deduction estimate, then divided by the number of paychecks. It is not the IRS Publication 15-T percentage method, and the Illinois line is not the wage-bracket withholding in the 2026 IL-700-T booklet. IL-700-T also uses a per-pay exemption allowance rather than one annual subtraction. Dependents, the extra $1,000 exemption for being 65 or blind, extra withholding, a second job, and head of household are not modeled. Married filing jointly applies the joint brackets and both exemptions to this salary alone.',
      'Form IL-1040 rounds the computed tax to the nearest dollar. This page keeps the cent, because a paycheck is not that annual return. On the sample, $3,072.71 would be $3,073 on a dollar-rounded return. Property tax, which Illinois funds heavily at the local level, is not wage withholding. Neither is sales tax. Reciprocal agreements with Iowa, Kentucky, Michigan, and Wisconsin can change which state tax a cross-border worker owes. This form assumes the wages are Illinois wages of an Illinois resident with no credit for tax paid to another state.',
      'Pre-tax health premiums, HSAs, and FSAs are not separate fields. A traditional 401(k) above $24,500 is cut back to that elective limit. Roth deferrals do not reduce federal AGI or the Illinois base, and this form has no Roth switch, so do not type a Roth amount into the deferral field. Illinois subtractions other than the exemption, including some retirement income that is subtracted on the return, are not applied to these wages.',
      'Employer Social Security, employer Medicare, and unemployment taxes are not deducted. A bonus withheld at a flat supplemental rate will not match a row that assumes the bonus was ordinary wages spread over the year. Compare a dollar result with a dollar take-home. The England and Manitoba pages on this site are in other currencies and do not belong in the same subtraction.'
    ],
    disclaimer: 'This is a 2026 planning estimate for Illinois wages, not a pay stub, a Form IL-W-4, or tax advice. The IRS, the Illinois Department of Revenue, and your employer assess what is withheld.',
    faqs: [
      {
        q: 'Does Illinois use a flat income tax rate in 2026?',
        a: 'Yes. The individual rate is 4.95% of net income, the rate in effect since 1 July 2017. On $65,000 of single wages with no 401(k), the tax is $3,072.71 after the $2,925 exemption. There is no Illinois bracket table on this page.'
      },
      {
        q: 'How large is the Illinois personal exemption on a 2026 paycheck?',
        a: 'The Department of Revenue sets the 2026 exemption at $2,925. This calculator allows one for a single filer and two, $5,850, for married filing jointly. At $65,000 those choices produce Illinois tax of $3,072.71 and $2,927.93. The extra $1,000 exemption for age 65 or blindness is not included.'
      },
      {
        q: 'Why is Illinois take-home lower than Texas at the same $65,000 salary?',
        a: 'Federal income tax, Social Security, and Medicare match. Texas state income tax is $0, so annual take-home is $54,407.50. Illinois tax is $3,072.71, so annual take-home is $51,334.79. The gap is the state tax and nothing else.'
      },
      {
        q: 'Does a traditional 401(k) reduce the 4.95% Illinois tax?',
        a: 'Yes on this page, because the deferral reduces the AGI proxy before the exemption and the 4.95% rate. A $6,500 deferral on $65,000 single cuts Illinois tax by $321.75, from $3,072.71 to $2,750.96, and cuts federal income tax by $780.00. Social Security and Medicare stay put.'
      },
      {
        q: 'What happens to the Illinois exemption when wages pass $250,000?',
        a: 'It disappears all at once for a single filer. At $250,000 the exemption is still $2,925 and Illinois tax is $12,230.21. At $250,001 the exemption is $0 and Illinois tax is $12,375.05. Married filing jointly keeps both exemptions until federal AGI exceeds $500,000. There is no sliding scale under the cap.'
      },
      {
        q: 'Why might an Illinois pay stub differ from this 2026 estimate?',
        a: 'Employers withhold from Publication 15-T and from IL-700-T using Form W-4 and Form IL-W-4, not from this annual standard-deduction calculation. Pre-tax health insurance, a bonus, a second job, or a pay count other than 26 will move the stub. The $65,000 single example is $1,974.42 every two weeks only under the assumptions on the page.'
      }
    ],
    relatedLinks: [
      { slug: 'pennsylvania-paycheck-calculator', label: 'Pennsylvania paycheck calculator for 2026', note: 'The 3.07% state tax is charged on wages before a 401(k). At $65,000 single with no local tax, Pennsylvania tax is $1,995.50.' },
      { slug: 'texas-paycheck-calculator', label: 'Texas paycheck calculator for 2026', note: 'The same federal and FICA lines when the inputs match, with state income tax at $0.' },
      { slug: 'new-york-paycheck-calculator', label: 'New York paycheck calculator for 2026', note: 'At $65,000 single, New York State tax is $2,913.00 rather than this $3,072.71 Illinois tax.' },
      { slug: 'california-paycheck-calculator', label: 'California paycheck calculator for 2026', note: 'California brackets plus 1.3% State Disability Insurance, instead of a flat 4.95%.' },
      { slug: '401k-contribution-calculator', label: '2026 401(k) contribution calculator', note: 'Check a deferral rate against the $24,500 limit before you type the dollar amount here.' }
    ]
  },
  'manitoba-take-home-pay-calculator': {
    title: 'Manitoba Take-Home Pay Calculator 2026 | ClearCalc',
    h1: 'Manitoba Take-Home Pay Calculator for 2026',
    description: 'Estimate 2026 Manitoba take-home pay after federal tax, Manitoba tax at 10.8%, 12.75%, and 17.4%, plus CPP and EI.',
    intro: [
      'This Manitoba take-home pay calculator estimates what a Manitoba resident keeps from 2026 employment income after federal income tax, Manitoba income tax, Canada Pension Plan contributions, and Employment Insurance. The sample is a $70,000 salary. The monthly headline is the annual take-home divided by 12 and rounded to the cent. A second line divides the same annual figure by 26.',
      'Manitoba’s 2026 rates, from CRA’s T4032-MB payroll tables effective 1 January 2026, are 10.8% on taxable income up to $47,000, 12.75% from there to $100,000, and 17.4% above $100,000. Form TD1MB sets the basic personal amount at $15,780. Manitoba paused indexation, so this page does not inflate those thresholds. Federal brackets, the federal basic personal amount, CPP, and EI are the same 2026 payroll amounts used on the Alberta, Ontario, and British Columbia pages. Quebec is a different system, with QPP and a federal abatement, and it is not estimated here.'
    ],
    steps: [
      'Enter annual gross salary in Canadian dollars. The sample, 70000, means $70,000 for the year.',
      'Press Calculate. The headline is monthly take-home. Federal tax, Manitoba tax, CPP, and EI are listed under it.',
      'Read the basic personal amounts before comparing the result with another province. Manitoba’s $15,780 is not Alberta’s $22,769, and it can shrink once net income is over $200,000.',
      'Use one salary. A second job, a bonus, or pension income needs a return this form does not build.'
    ],
    howHeading: 'How 2026 Manitoba take-home pay is estimated',
    howItWorks: [
      'CPP and EI come off the salary first. For 2026 the YMPE is $74,600 and the basic exemption is $3,500. The employee CPP rate on contributory earnings is 5.95%, split here into the 4.95% base contribution and the 1% first additional contribution. CPP2 is 4% of earnings between $74,600 and the $85,000 year’s additional maximum, capped at $416. EI is 1.63% of insurable earnings up to $68,900, so the maximum premium is $1,123.07. On a $70,000 salary, EI is already at that maximum. CPP, including a CPP2 of zero, is $3,956.75. The first additional contribution is $665.00 and the base contribution is $3,291.75.',
      'Taxable income on this page is salary minus the enhanced CPP contributions, the first additional contribution and CPP2. At $70,000 that is $69,335. Federal tax uses the 2026 federal brackets on that income, then subtracts the 14% credit for the federal basic personal amount, the CPP base contribution, EI, and the Canada employment amount. The federal basic personal amount is $16,452 at this income. Federal tax is $7,278.19, the same figure the Alberta page shows at $70,000, because nothing in the federal calculation depends on the province until Quebec.',
      'Manitoba tax uses the three brackets on the same taxable income, then subtracts a credit at 10.8%. The first $47,000 at 10.8% is $5,076.00. The remaining $22,335 at 12.75% is $2,847.7125. The bracket total rounds to $7,923.71. The credit is 10.8% of $15,780 plus the $3,291.75 CPP base plus the $1,123.07 of EI, which is 10.8% of $20,194.82, or $2,181.04 after rounding to the cent. Manitoba tax is $7,923.71 minus $2,181.04, which is $5,742.67. There is no Manitoba health premium in this model.',
      'Annual take-home is salary minus federal tax, Manitoba tax, CPP, CPP2, and EI. At $70,000 that is $51,899.32. The headline is $4,324.94 / month, and the two-week line is $1,996.13. Twelve times the monthly headline can miss the annual figure by a few cents because the month was rounded on its own. CRA’s payroll constant for the 12.75% band is $917, which is the rounded value of $916.50. A constant-style calculation can therefore sit about fifty cents away from this exact marginal tax. The page keeps the marginal amount.'
    ],
    formula: 'Calendar year 2026. Manitoba employment income. Outside Quebec.\nContributory earnings = min(salary, $74,600) − $3,500, and not below zero\nCPP base = 4.95% × contributory earnings\nCPP first additional = 1% × contributory earnings\nCPP2 = 4% × earnings between $74,600 and $85,000, capped at $416\nEI = 1.63% × min(salary, $68,900), capped at $1,123.07\nTaxable income = salary − CPP first additional − CPP2\nFederal tax = 2026 federal brackets on taxable income, minus 14% credits\nManitoba basic personal amount = $15,780, reduced linearly from $200,000 to $400,000 of taxable income used as the net-income proxy, and $0 at $400,000 or more\nManitoba credit = 10.8% × (Manitoba basic personal amount + CPP base + EI)\nManitoba tax = 10.8% / 12.75% / 17.4% brackets − that credit, and not below zero\nAnnual take-home = salary − federal tax − Manitoba tax − CPP − CPP2 − EI\nMonthly take-home = annual take-home ÷ 12',
    formulaNotes: [
      'At $70,000 the Alberta page uses the same federal tax of $7,278.19, the same CPP of $3,956.75, and the same EI of $1,123.07. Alberta tax is $3,534.79 and annual take-home is $54,107.20. Manitoba tax is $5,742.67 and annual take-home is $51,899.32. The $2,207.88 gap is provincial tax. Alberta’s basic personal amount is $22,769, credited at 8%. Manitoba’s is $15,780, credited at 10.8%, and the bracket rates above that credit are higher. Neither page charges an Ontario-style health premium.',
      'A $100,000 salary is not automatically in the 17.4% band. Enhanced CPP of $1,127.00, the $711.00 first additional contribution plus $416.00 of CPP2, leaves taxable income of $98,873, which is still under $100,000. Manitoba tax at that salary is $9,484.18, federal tax is $13,301.60, and annual take-home is $71,444.70. The 17.4% rate appears once taxable income passes $100,000. At $150,000 it has, and Manitoba tax is $18,131.77.',
      'The basic personal amount stays $15,780 while the net-income proxy is $200,000 or less. A $200,000 salary still shows $15,780, because enhanced CPP has already pulled taxable income under the line. At $250,000 the amount is $11,923.92. That is $15,780 times the fraction of the $200,000 phase-out window that remains after taxable income of $248,873. At $402,000 the amount is $0.00. TD1MB tells an employee whose net income will be $400,000 or more to claim zero.'
    ],
    examplesHeading: 'Worked 2026 Manitoba salary examples',
    examples: [
      {
        title: '$70,000, the sample salary',
        paragraphs: [
          'Federal income tax is $7,278.19. Manitoba income tax is $5,742.67. CPP including CPP2 is $3,956.75. EI is $1,123.07. Annual take-home is $51,899.32, the monthly headline is $4,324.94, and the two-week figure is $1,996.13. Both basic personal amounts are at their maximums: $16,452 federal and $15,780 Manitoba. The result says the Manitoba amount starts to phase out above $200,000 of net income, which this salary has not reached.',
          'Put the same $70,000 on the Alberta page and the federal, CPP, and EI lines match. Only the provincial tax changes, from $5,742.67 here to $3,534.79 there. The dollars are not interchangeable with an Ontario result either. Ontario at this salary adds its own tax and a health premium. British Columbia adds the B.C. brackets and a tax reduction. Leave those pages in their own provinces.'
        ]
      },
      {
        title: '$40,000, where EI is not yet capped, and $55,000',
        paragraphs: [
          'At $40,000, EI is $652.00 rather than the $1,123.07 maximum, and CPP including CPP2 is $2,171.75. Federal tax is $2,691.25. Manitoba tax is $2,310.79. Annual take-home is $32,174.21, or $2,681.18 / month. The 12.75% bracket has not started, because taxable income is under $47,000. The credit rate is still 10.8%, the lowest rate, which is how non-refundable credits are valued.',
          'At $55,000, taxable income has crossed $47,000, so part of the salary is in the 12.75% band. Federal tax is $4,632.07, Manitoba tax is $3,953.96, CPP is $3,064.25, and EI is $896.50. Annual take-home is $42,453.22, or $3,537.77 / month. EI reaches its maximum only once insurable earnings reach $68,900, so this salary is still on the slope.'
        ]
      },
      {
        title: '$100,000 under the top bracket, and $250,000 inside the phase-out',
        paragraphs: [
          'At $100,000, CPP including CPP2 is at its $4,646.45 maximum and EI is at $1,123.07. Taxable income is $98,873, so the 17.4% rate is not used. Manitoba tax is $9,484.18 and federal tax is $13,301.60. Annual take-home is $71,444.70, or $5,953.73 / month. The basic personal amount is still the full $15,780. Crossing $100,000 of salary is not the same event as crossing $100,000 of taxable income.',
          'At $250,000, the Manitoba basic personal amount has fallen to $11,923.92 and the federal basic personal amount has fallen to $15,031.43. Manitoba tax is $35,948.22 and federal tax is $53,524.01. Annual take-home is $154,758.25, or $12,896.52 / month. CPP and EI are unchanged from the $100,000 row because both are already capped. The phase-out is a reduction of the credit, not a new bracket. By $402,000 of salary the Manitoba amount on this page is $0.00.'
        ]
      }
    ],
    table: {
      heading: '2026 Manitoba take-home at selected salaries',
      caption: 'One salary, no deductions other than CPP and EI. Federal tax uses the 2026 brackets and the basic personal amount that applies at that income. Manitoba tax uses 10.8%, 12.75%, and 17.4% with a $15,780 basic personal amount, reduced only on the $250,000 row. The monthly figure is annual take-home divided by 12.',
      headers: ['Salary', 'Federal tax', 'Manitoba tax', 'CPP including CPP2', 'EI', 'Annual take-home', 'Monthly'],
      rows: [
        ['$40,000', '$2,691.25', '$2,310.79', '$2,171.75', '$652.00', '$32,174.21', '$2,681.18'],
        ['$55,000', '$4,632.07', '$3,953.96', '$3,064.25', '$896.50', '$42,453.22', '$3,537.77'],
        ['$70,000', '$7,278.19', '$5,742.67', '$3,956.75', '$1,123.07', '$51,899.32', '$4,324.94'],
        ['$100,000', '$13,301.60', '$9,484.18', '$4,646.45', '$1,123.07', '$71,444.70', '$5,953.73'],
        ['$150,000', '$25,302.14', '$18,131.77', '$4,646.45', '$1,123.07', '$100,796.57', '$8,399.71'],
        ['$250,000', '$53,524.01', '$35,948.22', '$4,646.45', '$1,123.07', '$154,758.25', '$12,896.52']
      ]
    },
    limitsHeading: 'What this Manitoba estimate leaves out',
    limits: [
      'The calculation is one annual salary with the basic personal amounts only. It is not the CRA Payroll Deductions Online Calculator’s pay-period annualization, and it will drift when a bonus, a mid-year maximum, or a second employer changes the CPP and EI already withheld. Claim codes other than the basic amount are omitted: the age amount, pension income amount, tuition, disability, spouse, eligible dependant, and caregiver amounts on TD1MB are not fields. Someone claiming those will owe less provincial tax than this page shows.',
      'The Manitoba basic personal amount phase-out uses taxable income, after the enhanced CPP deduction, as a stand-in for net income from all sources. Other deductions that reduce net income, and other income that increases it, are absent. A $200,000 salary can still show the full $15,780 for that reason. Dividend tax credits, the labour-sponsored funds credit, and provincial surtaxes are not applied. Manitoba has no health premium in the way Ontario does, so none is invented here.',
      'Federal amounts follow the same non-Quebec payroll rules as the other Canadian pages: brackets from 14% through 33%, a basic personal amount that falls from $16,452 to $14,829, and the Canada employment amount. The federal abatement that reduces federal tax in Quebec is not used. A resident of Manitoba on 31 December is the person these provincial brackets describe. Income earned in another province is not split.',
      'Figures are in Canadian dollars. Do not subtract an Australian or US take-home figure from this salary, and do not treat the monthly headline as the amount deposited if the employer pays every two weeks. Use the two-week line for that comparison, and remember that twenty-six deposits of a rounded amount can miss the annual total by a few cents.'
    ],
    disclaimer: 'This is a 2026 planning estimate for Manitoba employment income, not a pay stub, a TD1, or tax advice. The Canada Revenue Agency and your employer assess what is withheld.',
    faqs: [
      {
        q: 'What are the Manitoba income tax brackets for 2026?',
        a: '10.8% up to $47,000 of taxable income, 12.75% from $47,000 to $100,000, and 17.4% above $100,000. Those are the T4032-MB thresholds, not an indexed rewrite of them. The basic personal amount is $15,780, credited at 10.8%.'
      },
      {
        q: 'Why is Manitoba take-home lower than Alberta at a $70,000 salary?',
        a: 'Federal tax, CPP, and EI match: $7,278.19, $3,956.75, and $1,123.07. Manitoba tax is $5,742.67 and Alberta tax is $3,534.79. Annual take-home is $51,899.32 in Manitoba and $54,107.20 in Alberta. The $2,207.88 difference is provincial tax.'
      },
      {
        q: 'Does the Manitoba calculator add a health premium?',
        a: 'No. Ontario’s page includes the Ontario Health Premium. This page does not add a Manitoba equivalent. At $70,000 the provincial line is the bracket tax after the 10.8% credit, $5,742.67, and nothing further.'
      },
      {
        q: 'When does the Manitoba basic personal amount shrink?',
        a: 'It stays $15,780 at a net-income proxy of $200,000 or less, then falls in a straight line to $0 at $400,000. A $250,000 salary shows $11,923.92 because taxable income is $248,873 after enhanced CPP. A $402,000 salary shows $0.00.'
      },
      {
        q: 'Why does this page not use a $47,564 Manitoba threshold?',
        a: 'Some indexed summaries still show a threshold near $47,564. T4032-MB, effective 1 January 2026, and TD1MB keep $47,000, $100,000, and a $15,780 basic personal amount after Manitoba paused indexation. This calculator follows those payroll figures.'
      },
      {
        q: 'Will the Manitoba result match the CRA payroll deductions calculator?',
        a: 'It should be close for a full year of ordinary salary with federal and Manitoba claim code 1 and no other credits. PDOC can differ when the pay period or a bonus changes the annualization. The bracket constant in T4032 can also move the provincial tax by about fifty cents relative to the exact marginal tax used here.'
      }
    ],
    relatedLinks: [
      { slug: 'saskatchewan-take-home-pay-calculator', label: 'Saskatchewan take-home pay calculator for 2026', note: 'Same federal tax, CPP, and EI at $70,000. Saskatchewan tax is $4,972.68 rather than this $5,742.67.' },
      { slug: 'alberta-take-home-pay-calculator', label: 'Alberta take-home pay calculator for 2026', note: 'Same federal tax, CPP, and EI at $70,000. Alberta tax is $3,534.79 rather than $5,742.67.' },
      { slug: 'ontario-take-home-pay-calculator', label: 'Ontario take-home pay calculator for 2026', note: 'Same federal pieces, plus Ontario tax and the Ontario Health Premium.' },
      { slug: 'british-columbia-take-home-pay-calculator', label: 'British Columbia take-home pay calculator for 2026', note: 'Same federal pieces, with the 2026 B.C. brackets and the B.C. tax reduction.' },
      { slug: 'australia-take-home-pay-calculator', label: 'Australia take-home pay calculator for 2026–27', note: 'A different country, tax year, and currency. Do not subtract it from this Manitoba salary.' }
    ]
  },
  'victoria-stamp-duty-calculator': {
    title: 'Victoria Stamp Duty Calculator 2026 (Land Transfer Duty) | ClearCalc',
    h1: 'Victoria Stamp Duty Calculator for 2026',
    description: 'Estimate Victorian land transfer duty, including principal place of residence rates, the first home buyer concession up to $750,000, and 8% foreign purchaser additional duty.',
    intro: [
      'This Victoria stamp duty calculator estimates land transfer duty on a dutiable value you type, using the rates the State Revenue Office still publishes for contracts entered into on or after 1 July 2021. The sample is a first home buyer at $700,000. The headline is the duty in Australian dollars, including foreign purchaser additional duty when you select it. The number you type is treated as the dutiable value already, the greater of the price and the unencumbered market value. This form does not know the market value, and it does not apply an off-the-plan concession.',
      'A home that is a principal place of residence uses a concessional scale through $550,000 and the general scale above that. A purchase that is not a principal place of residence uses the general scale at every value. An eligible first home buyer pays no duty at $600,000 or less, and a reduced duty from there through $750,000, under section 57JA of the Duties Act 2000 (Vic). Foreign purchaser additional duty is 8% of the dutiable value for a residential purchase arising from an agreement on or after 1 July 2019. New South Wales transfer duty, and England’s stamp duty land tax, are different statutes.'
    ],
    steps: [
      'Enter the dutiable value in Australian dollars. The sample is 700000.',
      'Choose the buyer. First home buyer applies the exemption or the concession. Home, not a first home buyer, uses the principal place of residence scale. Not a principal place of residence uses general duty.',
      'Choose whether foreign purchaser additional duty applies. The 8% is calculated on the dutiable value, not on the duty after a concession, and a foreign purchaser is not given the first home concession on this page.',
      'Press Calculate. Read the land transfer duty and the foreign purchaser line separately. The headline is their sum, already rounded.'
    ],
    howHeading: 'How Victorian land transfer duty is calculated',
    howItWorks: [
      'Section 28 of the Duties Act charges general duty to the nearest dollar, and an amount that lands on exactly fifty cents rounds down. This page rounds each of land transfer duty and foreign purchaser additional duty that way, then adds them. The general scale is 1.4% up to $25,000, then $350 plus 2.4% of the excess over $25,000 up to $130,000, then $2,870 plus 6% of the excess over $130,000 up to $960,000. Above $960,000 and up to $2,000,000 the rate is 5.5% of the whole dutiable value, not 5.5% of the excess. Above $2,000,000 it is $110,000 plus 6.5% of the excess over $2,000,000.',
      'The principal place of residence scale matches the general scale through $130,000. From there to $440,000 it is $2,870 plus 5% of the excess over $130,000, rather than 6%. From $440,000 to $550,000 it is $18,370 plus 6% of the excess over $440,000. Above $550,000 the State Revenue Office says the concessional rate does not apply, so this page switches to general duty. At $550,000 exactly, a home pays $24,970 and a purchase that is not a home pays $28,070. The $3,100 gap is the concession. At $440,000 the gap is wider in percentage terms: $18,370 for the home and $21,470 otherwise.',
      'First home buyer relief replaces that calculation when every buyer qualifies and the purchaser is not treated as foreign on this form. At a dutiable value of $600,000 or less, duty is $0. A $450,000 first home is $0, while the same value as a later home is $18,970 on the principal place of residence scale. Between $600,000 and $750,000, section 57JA multiplies the duty that would otherwise be payable by (value minus $600,000) divided by $150,000. At $700,000 the unreduced home duty is general duty of $37,070, because $700,000 is above $550,000. The fraction is 100,000/150,000, and $37,070 times that fraction is $24,713.33, which rounds to $24,713. At $750,000 the fraction is 1, so the concession equals full duty of $40,070.',
      'Foreign purchaser additional duty is a separate 8%. The State Revenue Office’s worked case of a foreign purchaser buying a $1,000,000 house is $80,000 of additional duty. General duty on that value is 5.5%, or $55,000, so the headline here is $135,000. Additional duty is calculated before concessions. If land transfer duty is fully exempt, the additional duty is not charged either. A foreign purchaser is not given the first home exemption on this page, including at values under $600,000, because a sole foreign purchaser does not meet the citizenship or permanent-residence test the exemption requires.'
    ],
    formula: 'Victorian land transfer duty. Contracts on or after 1 July 2021. Dollars, then rounded to the nearest dollar, with exactly 50 cents rounded down.\nGeneral duty\n  up to $25,000: 1.4%\n  $25,000 to $130,000: $350 + 2.4% over $25,000\n  $130,000 to $960,000: $2,870 + 6% over $130,000\n  $960,000 to $2,000,000: 5.5% of the dutiable value\n  over $2,000,000: $110,000 + 6.5% over $2,000,000\nPrincipal place of residence duty matches general duty through $130,000, then\n  $130,000 to $440,000: $2,870 + 5% over $130,000\n  $440,000 to $550,000: $18,370 + 6% over $440,000\n  over $550,000: general duty\nFirst home, not a foreign purchaser\n  value ≤ $600,000: $0\n  $600,000 < value ≤ $750,000: home duty × (value − $600,000) / $150,000\n  value > $750,000: home duty, which is general duty\nForeign purchaser additional duty = 8% of dutiable value, unless land transfer duty is exempt\nHeadline = land transfer duty + foreign purchaser additional duty',
    formulaNotes: [
      'At $650,000 the unreduced duty is $34,070, which is $2,870 plus 6% of $520,000. The first home fraction is $50,000 / $150,000, so one third of $34,070 is $11,356.67, and the nearest dollar is $11,357. At $600,001 the unreduced duty rounds to $31,070 and the fraction is one dollar over $150,000, about twenty-one cents. Nearest-dollar rounding makes the concessional duty $0. The exemption has already ended. The result is zero only because the sliding scale has not yet reached a whole dollar.',
      'The 5.5% band is not marginal. At $960,000, general duty is still the 6% formula: $2,870 plus 6% of $830,000, which is $52,670. At $960,001, 5.5% of the whole value rounds to $52,800. The duty steps up by $130 at that boundary. At $2,000,000, 5.5% is $110,000. At $2,500,000, duty is $110,000 plus 6.5% of $500,000, which is $142,500. Both of those are general-rate results. A home above $550,000 uses the same numbers.',
      'A foreign purchaser selecting first home buyer at $450,000 does not receive the exemption. Principal place of residence duty is $18,970, foreign purchaser additional duty is 8% of $450,000, which is $36,000, and the headline is $54,970. The same value with the exemption, and without the foreign charge, is $0. The page will not stack the exemption and the 8%.'
    ],
    examplesHeading: 'Worked Victorian duty examples',
    examples: [
      {
        title: 'A $700,000 first home, and the same price as a later home',
        paragraphs: [
          'The sample first home buyer pays $24,713. The result calls it the concession between $600,000 and $750,000, shows land transfer duty of $24,713, foreign purchaser additional duty of $0, and an effective rate of 3.53%. The unreduced duty is $37,070. The concession removes $12,357 of that. Change the buyer to a home that is not a first home and the duty is the unreduced $37,070, because $700,000 is past the end of the principal place of residence scale.',
          'At $750,000 the first home fraction reaches 1 and duty is $40,070, the same figure a later home pays. One dollar higher, $750,001, is still $40,070, because 6% of the extra dollar is six cents and the nearest-dollar rule rounds it away. The concession has not created a cliff of thousands of dollars at $750,001. It has already arrived at full duty on the dollar before.'
        ]
      },
      {
        title: '$600,000 or under for a first home, against the home scale',
        paragraphs: [
          'A first home at $600,000 is $0. A first home at $450,000 is also $0. The same $450,000 as a principal place of residence that is not a first home is $18,970, which is $18,370 plus 6% of the $10,000 over $440,000. Treated as not a principal place of residence, $450,000 is $22,070, which is $2,870 plus 6% of the $320,000 over $130,000. The first home result is not a discount on those figures. It replaces them.',
          'At $550,000 the principal place of residence scale is still available and duty is $24,970. General duty at the same value is $28,070. A first home at $550,000 remains $0, because $550,000 is under the $600,000 exemption. The $24,970 line matters for a buyer who has owned a home before, not for the exemption.'
        ]
      },
      {
        title: 'A $1,000,000 purchase, with and without the 8% charge',
        paragraphs: [
          'General duty, and home duty, at $1,000,000 is $55,000. That is 5.5% of the whole value. The effective rate on the result is 5.50%. Add foreign purchaser additional duty and the extra line is $80,000, the State Revenue Office’s own example, and the headline is $135,000, an effective rate of 13.50%. The 8% is not 8% of the $55,000. It is 8% of the $1,000,000.',
          'A first home buyer is past the concession at this price, so choosing first home buyer does not reduce the $55,000. Choosing foreign as well keeps the $80,000 on top. NSW transfer duty on a different rate card is not this number. England’s calculator is in pounds. A dollar typed here is an Australian dollar.'
        ]
      }
    ],
    table: {
      heading: 'Victorian duty at selected dutiable values',
      caption: 'No foreign purchaser additional duty except the last row. First home values at or under $600,000 are exempt. From $600,001 to $750,000 the first home row is the section 57JA concession. Home means principal place of residence, which uses general duty once the value is over $550,000. Not a home uses general duty at every value. Amounts are rounded to the nearest dollar.',
      headers: ['Dutiable value', 'Buyer', 'Land transfer duty', 'Foreign purchaser duty', 'Total'],
      rows: [
        ['$450,000', 'First home', '$0', '$0', '$0'],
        ['$450,000', 'Later home', '$18,970', '$0', '$18,970'],
        ['$450,000', 'Not a home', '$22,070', '$0', '$22,070'],
        ['$550,000', 'Later home', '$24,970', '$0', '$24,970'],
        ['$550,000', 'Not a home', '$28,070', '$0', '$28,070'],
        ['$650,000', 'First home', '$11,357', '$0', '$11,357'],
        ['$700,000', 'First home', '$24,713', '$0', '$24,713'],
        ['$700,000', 'Later home', '$37,070', '$0', '$37,070'],
        ['$1,000,000', 'Home', '$55,000', '$0', '$55,000'],
        ['$1,000,000', 'Home, foreign purchaser', '$55,000', '$80,000', '$135,000']
      ]
    },
    limitsHeading: 'What this Victorian duty estimate leaves out',
    limits: [
      'Eligibility for the first home exemption is more than a price. Purchasers have to be natural persons, at least 18, buying a principal place of residence at market value, and at least one has to be an Australian citizen, a New Zealand citizen, or a permanent resident. Prior ownership, a prior First Home Owner Grant, and the requirement to live in the home for 12 continuous months are not checked. The page applies the price test and the foreign-purchaser switch only. A buyer who fails the other tests should choose the later-home or not-a-home option instead.',
      'The off-the-plan concession, the pensioner concession, a partial interest, and a purchase shared between a foreign and a non-foreign purchaser are not calculated. Foreign purchaser additional duty on a shared purchase is charged only on the foreign share. This form charges 8% of the whole dutiable value or none of it. Commercial property, a corporate reconstruction, and economic entitlements are outside the residential scales. The regional commercial concession is not applied.',
      'The First Home Owner Grant is a separate payment, often $10,000 on a new home, and it is not subtracted from the duty. An exemption from duty is not the grant. GST included in a price is part of dutiable value when GST is payable, and this form does not add GST to a price that was typed without it. Duty on a dutiable value of zero is zero.',
      'Rates are the current State Revenue Office tables for contracts from 1 July 2021, which remain the tables in 2026. A contract from an earlier rate era, including the temporary 50% waiver for some principal place of residence purchases before 1 July 2021, needs the historical table. Rounding follows section 28. A supplier’s quote can still differ if the dutiable value you typed is not the value the Commissioner assesses.'
    ],
    disclaimer: 'This is an estimate of Victorian land transfer duty from the value and buyer type you enter. It is not an assessment by the State Revenue Office, and it does not decide whether you qualify for a concession.',
    faqs: [
      {
        q: 'How much Victorian stamp duty does a first home buyer pay at $600,000?',
        a: 'Nothing, on the price test in section 57JA. At $600,000 and at $450,000 the result is $0. A later home at $450,000 pays $18,970. The other eligibility rules, including living in the home, are not checked here.'
      },
      {
        q: 'How is the Victorian first home concession worked out above $600,000?',
        a: 'Duty that would otherwise be payable is multiplied by (value minus $600,000) divided by $150,000. At $700,000 the unreduced duty is $37,070 and the concession result is $24,713. At $650,000 it is $11,357. At $750,000 the fraction is 1 and duty is the full $40,070.'
      },
      {
        q: 'What is the gap between Victorian home duty and general duty at $550,000?',
        a: 'A principal place of residence pays $24,970. A purchase that is not a principal place of residence pays $28,070. The $3,100 difference is the concessional scale, which stops at $550,000. Above that, a later home pays general duty.'
      },
      {
        q: 'Is Victoria foreign purchaser additional duty still 8% in 2026?',
        a: 'Yes for an agreement on or after 1 July 2019. On a $1,000,000 residential purchase the additional duty is $80,000, on top of $55,000 of land transfer duty, and the headline is $135,000. The 8% is charged on the dutiable value, not on the duty.'
      },
      {
        q: 'Why is Victorian duty at $600,001 still zero for a first home buyer?',
        a: 'The exemption has ended, but the sliding scale has barely started. Unreduced duty is about $31,070, and one dollar of the $150,000 concession range is about twenty-one cents. Section 28 rounds to the nearest dollar, so the concessional duty is $0. It is not a second exemption.'
      },
      {
        q: 'Can this Victoria duty figure be used for a purchase in New South Wales?',
        a: 'No. NSW transfer duty uses a different rate card, a different first home scheme, and a 9% surcharge purchaser duty. A $700,000 Victorian result of $24,713 is not an NSW assessment. England’s calculator is in pounds as well.'
      }
    ],
    relatedLinks: [
      { slug: 'queensland-stamp-duty-calculator', label: 'Queensland stamp duty calculator for 2026', note: 'Queensland transfer duty. An established first home at $700,000 is $0 on that page, which is not Victoria’s result at the same price.' },
      { slug: 'nsw-stamp-duty-calculator', label: 'NSW stamp duty calculator for 2026/27', note: 'New South Wales transfer duty, including that state’s first home concession and the 9% surcharge.' },
      { slug: 'england-stamp-duty-calculator', label: 'England stamp duty calculator', note: 'Residential SDLT in pounds. A different statute and a different currency.' },
      { slug: 'australia-take-home-pay-calculator', label: 'Australia take-home pay calculator for 2026–27', note: 'Resident income tax and the Medicare levy on a salary. It is not the tax on a house.' },
      { slug: 'mortgage-calculator', label: 'Fixed-rate mortgage payment calculator', note: 'Principal and interest in US dollars. It does not add this Victorian duty or convert currencies.' }
    ]
  },
  'us-business-days-calculator': {
    title: 'US Business Days Calculator Excluding Federal Holidays | ClearCalc',
    h1: 'US Business Days Calculator, with Federal Holidays',
    description: 'Count inclusive weekdays between two dates and remove US federal holidays, including the 2026 Monday-to-Friday observed dates.',
    intro: [
      'This business days calculator counts the weekdays from a start date through an end date, and it can remove US federal holidays. Both ends count when they are business days. That is the inclusive convention used by a weekday network count, and it is not the elapsed-day count on the days-between-dates page. The sample runs from 1 January 2026 through 31 December 2026 and excludes federal holidays. The headline is 250 business days.',
      'The holidays are the eleven named in 5 U.S.C. § 6103. For a Monday-to-Friday schedule, a holiday that falls on Saturday is observed the preceding Friday, and a holiday that falls on Sunday is observed the following Monday. Those are the rules in section 6103(b) and Executive Order 11582, and they are the dates on the Office of Personnel Management’s 2026 holiday list. State holidays, company shutdowns, and a Tuesday-to-Saturday tour are not removed.'
    ],
    steps: [
      'Enter the start date and the end date. If you reverse them, the count uses the earlier date first and says so.',
      'Leave the holiday choice on “Exclude US federal holidays” unless you want every weekday, including holidays, to count.',
      'Press Calculate. The headline is the business-day count. Weekdays, weekend days, and inclusive calendar days are listed under it.',
      'Read the observed-date line when it appears. It names each federal holiday whose observed date falls inside the span, up to a dozen of them.'
    ],
    howHeading: 'How federal business days are counted',
    howItWorks: [
      'The count walks the calendar one date at a time and keeps Monday through Friday. Saturday and Sunday are weekend days. They are reported, and they are not business days. A span that is only a weekend is zero. 3 January 2026 is a Saturday and 4 January 2026 is a Sunday, so that pair is 0 business days, 0 weekdays, 2 weekend days, and 2 inclusive calendar days.',
      'Federal holidays are generated from the statute rather than from a list that only exists for 2026. New Year’s Day, Juneteenth, Independence Day, Veterans Day, and Christmas are fixed dates. Martin Luther King Jr. Day is the third Monday in January. Washington’s Birthday is the third Monday in February. Memorial Day is the last Monday in May. Labor Day is the first Monday in September. Columbus Day is the second Monday in October. Thanksgiving is the fourth Thursday in November. Each of those legal dates is then moved to the observed weekday when it falls on a weekend.',
      'In 2026, Independence Day falls on Saturday 4 July, so most federal employees observe it on Friday 3 July. The other ten holidays already fall on a weekday, so their observed dates are the legal dates. The year runs from Thursday 1 January through Thursday 31 December. It has 365 dates, 104 weekend days, and 261 weekdays. All eleven observed holidays are among those weekdays, so excluding them leaves 250 business days. Choosing “Count every weekday” on the same dates leaves the headline at 261. The days-between-dates page, which does not include the end date and does not drop weekends, shows 364 elapsed days from 1 January to 31 December. Three different questions, three different numbers.',
      'A single date is an inclusive span of one. If that date is a weekday and not an observed holiday, the result is 1 business day. If it is the holiday, the result is 0 when holidays are excluded. 1 January 2026 is New Year’s Day, a Thursday, so the headline is 0 business days, with 1 weekday and 1 holiday removed. The same date with holidays kept would be 1 business day. The form will not count a span longer than 50 years.'
    ],
    formula: 'Inclusive Monday-to-Friday count, optionally minus observed US federal holidays.\nBusiness days = weekdays in the closed interval [start, end] − observed federal holidays in that interval\nA holiday on Saturday is observed on the preceding Friday.\nA holiday on Sunday is observed on the following Monday.\nWeekdays = dates in the interval whose weekday is Monday, Tuesday, Wednesday, Thursday, or Friday\nInclusive calendar days = every date from the start through the end\n2026, 1 January through 31 December, holidays excluded:\n  365 inclusive dates\n  104 weekend days\n  261 weekdays\n  11 observed federal holidays\n  250 business days',
    formulaNotes: [
      'The eleven observed dates in 2026 are 1 January, 19 January, 16 February, 25 May, 19 June, 3 July, 7 September, 12 October, 11 November, 26 November, and 25 December. OPM lists Independence Day on Friday 3 July because 4 July is a Saturday. Christmas is Friday 25 December and is not moved. Veterans Day is Wednesday 11 November and is not moved to a Monday.',
      'Monday 29 June 2026 through Friday 3 July 2026 is five weekdays and no weekend days. One of those weekdays, 3 July, is the observed Independence Day. The headline is 4 business days. Reverse the two dates and the count is the same 4, with a line that the dates were ordered. Thanksgiving week, Monday 23 November through Friday 27 November, is also 4 business days, because Thursday 26 November is removed and the other four weekdays remain.',
      'A span that crosses New Year is not limited to the 2026 list. Thursday 24 December 2026 through Monday 4 January 2027 has 12 inclusive dates, 4 weekend days, and 8 weekdays. Christmas Day and New Year’s Day 2027, which is a Friday, are both removed. The headline is 6 business days. Count every weekday on that same span and the headline is 8. The holiday generator looks one year past each end so a Saturday New Year observed on the previous Friday is not missed.'
    ],
    examplesHeading: 'Worked business-day examples',
    examples: [
      {
        title: 'All of 2026, with federal holidays removed',
        paragraphs: [
          'The sample headline is 250 business days. Weekdays in the span are 261, weekend days are 104, and inclusive calendar days are 365. Federal holidays removed are 11, and the result names each observed date from New Year’s Day through Christmas Day. Leave the holiday switch off and the headline becomes 261 business days. Nothing else in the span changes. The 11 holidays are still sitting inside those 261 weekdays. They are simply no longer subtracted.',
          'The days-between-dates calculator answers a different question about the same year. From 1 January 2026 to 31 December 2026 it shows 364 elapsed days, because it stops short of the end date and it keeps the weekends. Adding one makes the inclusive 365. Neither 364 nor 365 is a business-day count. 261 is the weekday count. 250 is the weekday count after the federal holidays.'
        ]
      },
      {
        title: 'Independence Day week, and Thanksgiving week',
        paragraphs: [
          '29 June 2026 through 3 July 2026 is 4 business days. The span is five inclusive dates, all of them weekdays, and 3 July is the only holiday. Someone who still has 4 July circled as the day off will double-count, or miss the Friday, because the legal date and the observed date are not the same in 2026. In a year when 4 July is a weekday, the observed date is 4 July and 3 July is an ordinary Friday.',
          '23 November 2026 through 27 November 2026 is also 4 business days. Thanksgiving is Thursday 26 November, and it is not moved. The Friday after Thanksgiving is not a federal holiday under section 6103. This calculator counts Friday 27 November as a business day. An employer that closes that Friday has a company holiday, not a federal one, and the form does not know about it. Enter a shorter span, ending on Wednesday 25 November, if that Friday should not count.'
        ]
      },
      {
        title: 'A single holiday, a weekend, and the week of New Year 2027',
        paragraphs: [
          '1 January 2026 by itself is 0 business days when holidays are excluded. It is one inclusive calendar day and one weekday, and that weekday is New Year’s Day. 3 January through 4 January is also 0 business days, for the opposite reason: both dates are weekend days, and no holiday has to be removed. A project plan that starts on a Saturday does not gain a business day from the Saturday.',
          '24 December 2026 through 4 January 2027 is 6 business days. Eight weekdays sit in the twelve inclusive dates, and two of them are holidays, Christmas and New Year’s Day. The result names both observed dates. The count is not 2026’s 250, and it is not the eleven-holiday list printed for the calendar year. Each span builds its own holiday set from the statute.'
        ]
      }
    ],
    table: {
      heading: 'US federal holidays observed in 2026',
      caption: 'Monday-to-Friday schedule. Observed dates match the Office of Personnel Management list for 2026. Independence Day is observed on Friday 3 July because 4 July is a Saturday. Every other holiday falls on a weekday, so the legal date and the observed date are the same. All eleven are removed from the 261 weekdays in the calendar year.',
      headers: ['Holiday', 'Observed date', 'Weekday'],
      rows: [
        ["New Year's Day", '1 January 2026', 'Thursday'],
        ['Birthday of Martin Luther King, Jr.', '19 January 2026', 'Monday'],
        ["Washington's Birthday", '16 February 2026', 'Monday'],
        ['Memorial Day', '25 May 2026', 'Monday'],
        ['Juneteenth National Independence Day', '19 June 2026', 'Friday'],
        ['Independence Day', '3 July 2026', 'Friday'],
        ['Labor Day', '7 September 2026', 'Monday'],
        ['Columbus Day', '12 October 2026', 'Monday'],
        ['Veterans Day', '11 November 2026', 'Wednesday'],
        ['Thanksgiving Day', '26 November 2026', 'Thursday'],
        ['Christmas Day', '25 December 2026', 'Friday']
      ]
    },
    limitsHeading: 'What this business-day count leaves out',
    limits: [
      'The holiday set is the federal list for a Monday-to-Friday employee. A worker whose tour is Tuesday through Saturday observes a Sunday holiday on the next scheduled workday, which can be Tuesday, and observes some Saturday holidays on a different day than the Friday this page uses. OPM’s in-lieu fact sheet covers those tours. This calculator does not. State holidays, bank holidays that are not federal, and the day after Thanksgiving are not removed.',
      'The count includes both the start date and the end date when they qualify. It is not the elapsed-day difference. A deadline that should exclude the start date, or exclude the end date, needs one day added or removed by hand. The days-between-dates page is the elapsed count, and adding one to it produces an inclusive calendar count that still contains weekends. Neither substitution equals this headline.',
      'Dates are calendar dates with no time of day. A shift that starts at 11 p.m. and crosses midnight is not split. The span is capped at 50 years so a mistyped year does not walk the calendar for centuries. An impossible date, such as 31 February, is rejected. Swapped dates are reordered and the result says so. The count is never negative.',
      'Nothing here is a payroll rule about holiday premium pay. OPM’s holiday-pay guidance decides whether an employee who works on the observed date is paid a premium, and for how many hours. This page only counts dates. It also does not know school calendars in the UK, Canada, or Australia, and it does not remove provincial or bank holidays in those countries.'
    ],
    disclaimer: 'This counts weekdays and observed US federal holidays for a Monday-to-Friday schedule. It is not a determination of holiday pay, a company calendar, or legal advice about a filing deadline.',
    faqs: [
      {
        q: 'How many US business days are in the 2026 calendar year?',
        a: '250, if federal holidays are removed. The year has 261 weekdays and 11 observed federal holidays, and all 11 fall on weekdays. Leave the holidays in and the same dates produce 261. The inclusive calendar count is 365.'
      },
      {
        q: 'Why does the calculator treat July 3 2026 as the Independence Day holiday?',
        a: '4 July 2026 is a Saturday. For most federal employees on a Monday-to-Friday schedule, the preceding Friday is the observed holiday. The week of 29 June through 3 July is therefore 4 business days, not 5.'
      },
      {
        q: 'Does the business-day calculator include both the start date and the end date?',
        a: 'Yes, when each of them is a business day. 1 January 2026 alone is 0 business days because that Thursday is New Year’s Day. A non-holiday weekday standing alone is 1 business day. The days-between-dates page does not include the end date.'
      },
      {
        q: 'Why is 250 business days not the same as 364 days between January and December?',
        a: 'The day counter’s 364 is an elapsed count from 1 January to 31 December. It keeps weekends and drops the end date. Adding one makes 365 calendar dates. Removing 104 weekend days leaves 261 weekdays. Removing 11 federal holidays leaves 250 business days.'
      },
      {
        q: 'Are state holidays or the Friday after Thanksgiving removed?',
        a: 'No. Only the eleven federal holidays are removed, and only when you ask for that. Friday 27 November 2026 is a business day on this page. A state holiday or a company shutdown has to be handled by shortening the dates you enter.'
      }
    ],
    relatedLinks: [
      { slug: 'uk-working-days-calculator', label: 'UK working days calculator', note: 'Inclusive weekdays with UK bank holidays removed. England and Wales in 2026 have 253 working days, not these 250 US business days.' },
      { slug: 'date-difference-calculator', label: 'Days between two dates', note: 'Elapsed calendar days, including weekends. 1 January to 31 December 2026 is 364 on that page and 250 business days here.' },
      { slug: 'age-calculator', label: 'Exact age calculator', note: 'Completed years, months, and days from a birthday. It does not drop weekends or holidays.' },
      { slug: 'hourly-to-salary-calculator', label: 'Hourly to salary calculator', note: 'Turns an hourly rate and a number of weeks into annual pay. It does not count the dates.' }
    ]
  },
  'mulch-calculator': {
    title: 'Mulch Calculator: Cubic Yards and Bags | ClearCalc',
    h1: 'Mulch Calculator for a Rectangular Bed',
    description: 'Convert a rectangular bed in feet and a depth in inches into cubic yards and 2 or 3 cubic foot bags of mulch, with an optional waste allowance.',
    intro: [
      'This mulch calculator turns a rectangular bed into a volume, then into bags. Enter the length and width in feet, the depth in inches, the bag size, and a waste allowance. The sample is a 10 foot by 20 foot bed, 3 inches deep, using 2 cubic foot bags and no extra for waste. The headline is 25 bags. The volume under that headline is 50 cubic feet, which is 1.852 cubic yards.',
      'The arithmetic is the geometry of a rectangular prism, not a brand’s coverage claim, though the two agree when the bag is a true 2 or 3 cubic feet. One cubic yard is 27 cubic feet. Depth has to be converted from inches to feet before that division, and 12 times 27 is 324, so length times width times depth in inches, divided by 324, is the same yardage. A concrete slab uses a different bag. An 80 lb bag of concrete is about 0.60 cubic feet, and the concrete page on this site counts those bags. Do not use that bag count for mulch.'
    ],
    steps: [
      'Enter the length and the width in feet. The sample is 10 by 20. Measure the bed you will cover, not the whole yard.',
      'Enter the depth in inches. Three inches is a common finished depth for bark mulch. Type 3, not 0.25 feet. The form converts inches to feet.',
      'Choose a 2 cubic foot bag or a 3 cubic foot bag. Then enter a waste allowance from 0 to 100 percent. The sample is 0.',
      'Press Calculate. Read the bag count, the cubic feet and cubic yards, the coverage of one bag at this depth, and the bulk order rounded up to the next half yard.'
    ],
    howHeading: 'How a bed becomes a bag count',
    howItWorks: [
      'Volume in cubic feet is length times width times depth, and the depth has to be in feet. Three inches is 3/12 of a foot, so a 10 by 20 bed at 3 inches is 10 × 20 × 3 / 12 = 50 cubic feet. Divide by 27 to get cubic yards. 50 / 27 is 1.8518…, shown as 1.852 cubic yards. The shortcut 10 × 20 × 3 / 324 is the same division, because the 12 in the depth and the 27 in the yard were folded together. Both paths describe a perfect rectangular layer. Real beds have tree trunks, curves, and a depth that is not uniform.',
      'Bags are the volume divided by the size of one bag. A 2 cubic foot bag goes into 50 cubic feet exactly 25 times, so the headline is 25 bags and the line before rounding is 25 as well. A 3 cubic foot bag goes into the same 50 cubic feet 16.67 times, and the headline rounds up to 17 bags. You cannot buy two-thirds of a bag. When the division is exact, nothing extra is added. Coverage is the other direction of the same division. At 3 inches, a 2 cubic foot bag covers 2 × 12 / 3 = 8 square feet. The bed is 200 square feet, and 200 / 8 is 25 bags, which matches the headline.',
      'Waste multiplies the volume before the bag count and before the bulk round-up. Ten percent turns 50 cubic feet into 55 cubic feet, or 2.037 cubic yards. Divided by 2, that is 27.5 bags, and the headline rounds up to 28. The bulk line then rounds 2.037 yards up to the next half yard, which is 2.5 cubic yards. That half-yard step is a common way bulk mulch is sold. It is not a second waste factor stacked on the 10%. If you buy bags, you do not also order the 2.5 yards. The two lines are alternative purchases of the waste-adjusted volume.',
      'A thinner layer uses fewer bags only because each bag covers more ground. At 2 inches, a 2 cubic foot bag covers 12 square feet. The label on many 2 cubic foot bags states that 2-inch coverage, and 200 / 12 is 16.67, so the 10 by 20 bed needs 17 bags. At 1 inch the same bag covers 24 square feet and the bed needs 9 bags. At 4 inches it covers 6 square feet and the bed needs 34 bags. Depth is a choice about weeds and appearance, not a constant the calculator should hide.'
    ],
    formula: 'Depth in feet = depth in inches / 12\nCubic feet = length (ft) × width (ft) × depth (ft)\nCubic yards = cubic feet / 27\nSame yards, depth kept in inches = length × width × depth / 324\nVolume with waste = cubic feet × (1 + waste percent / 100)\nBag size = 2 cubic feet, or 3 cubic feet\nExact bags = volume with waste / bag size\nBags to buy = exact bags, rounded up to the next whole bag\nCoverage of one bag = bag size × 12 / depth in inches, in square feet\nBags per cubic yard, no waste = 27 / bag size, so 13.5 bags at 2 cubic feet and 9 bags at 3 cubic feet\nBulk order = waste-adjusted yards, rounded up to the next 0.5 yard',
    formulaNotes: [
      'The sample is exact, which makes the rounding visible by its absence. 10 × 20 × 3 / 12 is 50 cubic feet, not 49 or 51. 50 / 2 is 25 bags. 50 / 27 displayed to three decimals is 1.852 cubic yards. The bulk line rounds 1.852 up to 2 cubic yards. Ordering 2 yards for a bed whose geometry is 1.852 yards is the half-yard spare. It is not the same thing as typing a waste percent. With the waste field left at 0, the volume line and the waste line match, and only the bulk line has moved up.',
      'Ten percent waste is 5 extra cubic feet on this bed, 27.5 bags before rounding, and a headline of 28. The no-waste bag line stays at 25 so you can see the waste separately from the round-up. Switch the bag to 3 cubic feet and leave the waste at 0: the yards stay 1.852, the exact bag count is 16.67, and the headline is 17. Coverage becomes 12 square feet per bag, because 3 × 12 / 3 is 12. A 3 cubic foot bag at 2 inches would cover 18 square feet. That is 3 × 12 / 2, and it is a different depth from the sample.',
      'A small bed shows why the bulk round-up can be the wrong purchase. A 4 foot by 8 foot bed at 3 inches is 8 cubic feet, exactly 4 bags of the 2 cubic foot size, and 0.296 cubic yards. Rounded up to the next half yard, the bulk line says 0.5 cubic yards. Half a yard is 13.5 cubic feet, far more than the 8 cubic feet the bed holds. Four bags are the useful order. The half-yard line is there so the arithmetic stays visible, not as advice to schedule a delivery for a bed that fits in a car.'
    ],
    examplesHeading: 'Worked mulch examples',
    examples: [
      {
        title: '10 by 20 feet, 3 inches deep, 2 cubic foot bags, no waste',
        paragraphs: [
          'The headline is 25 bags (2 cu ft). Bed volume is 50 cubic feet, or 1.852 cubic yards. Bags before rounding up are 25. The bulk order is 2 cubic yards. Coverage at this depth is 8 square feet per 2 cubic foot bag. Those 25 bags and the 2 yards are two ways to buy a volume that started at 1.852 yards. Buying both covers the bed twice and leaves a pile over. The half yard you did not need, if you choose bags, is the reason the bag line and the bulk line are not equal volumes.',
          'Check it from the coverage side. Two hundred square feet divided by 8 square feet per bag is 25 bags. Check it from the yard side. One cubic yard takes 13.5 bags of this size, and 1.8518 yards times 13.5 is 25 bags. The three routes meet because they are the same geometry. If your bag says 1.5 cubic feet, or 1 cubic foot, this headline will not match the pallet. The form only offers 2 and 3.'
        ]
      },
      {
        title: 'The same bed with 10% waste, and in 3 cubic foot bags',
        paragraphs: [
          'Set the waste to 10 and keep the 2 cubic foot bag. The headline is 28 bags (2 cu ft). Volume with waste is 55 cubic feet, or 2.037 cubic yards. Bags before rounding up are 27.5. Bags with no waste allowance, rounded up, stay at 25. The bulk order is 2.5 cubic yards. The jump from 25 bags to 28 is the 2.5 extra bags of waste, then a round-up from 27.5 to 28. It is not a second 10% applied after the round-up.',
          'Return the waste to 0 and choose the 3 cubic foot bag. The headline is 17 bags (3 cu ft). Cubic yards do not change. Bags before rounding up are 16.67. Coverage is 12 square feet per bag, and 200 / 12 is the same 16.67. Nine of these bags fill a cubic yard, because 27 / 3 is 9, whereas the 2 cubic foot bag took 13.5. Trust the 17 the form shows. Do not rescale the 25 by a rough ratio and then round a second time.'
        ]
      },
      {
        title: 'Changing the depth, and a bed that is an exact four bags',
        paragraphs: [
          'On the 10 by 20 foot bed with 2 cubic foot bags and no waste, 1 inch of mulch is 9 bags and 0.617 cubic yards, with a bulk line of 1 cubic yard. Two inches is 17 bags and 1.235 cubic yards. Three inches is the sample, 25 bags. Four inches is 34 bags and 2.469 cubic yards, with a bulk line of 2.5. The 2-inch row is the one a bag label usually prints, 12 square feet of coverage. The 3-inch row is 8 square feet. Using the 12-square-foot claim on a bed you intend to spread 3 inches deep will leave you short by the difference between 17 and 25 bags.',
          'A 4 by 8 foot bed at 3 inches and a 2 cubic foot bag is 8 cubic feet and exactly 4 bags. The yardage is 0.296, and the bulk line rounds it to 0.5 cubic yards. Order the 4 bags. The concrete calculator’s 10 by 10 by 4 inch slab is a different material and a different yield: about 1.235 cubic yards and 56 bags of 80 lb concrete with no waste. That 56 is not a mulch count, and this 25 is not a concrete count.'
        ]
      }
    ],
    table: {
      heading: 'Bags for a 10 by 20 foot bed',
      caption: 'Each row is this calculator with a 2 cubic foot bag and no waste allowance. Coverage is the square feet one bag treats at that depth. The bulk column rounds the exact yardage up to the next 0.5 cubic yard. It is an alternative to the bags, not an extra load on top of them.',
      headers: ['Depth', 'Cubic yards', '2 cu ft bags', 'Coverage per bag', 'Bulk order'],
      rows: [
        ['1 inch', '0.617', '9', '24 sq ft', '1 cubic yard'],
        ['2 inches', '1.235', '17', '12 sq ft', '1.5 cubic yards'],
        ['3 inches', '1.852', '25', '8 sq ft', '2 cubic yards'],
        ['4 inches', '2.469', '34', '6 sq ft', '2.5 cubic yards']
      ]
    },
    limitsHeading: 'What a rectangular mulch count leaves out',
    limits: [
      'The bed is a rectangle of one depth. A curved bed, a ring around a tree, a slope, and a depth that tapers at the edge are different volumes. Tree trunks and stepping stones displace a little mulch. The waste field is the place to allow for that, and for a pile that never quite leaves the wheelbarrow. Ten percent is a planning allowance, not a rule. A careful spread on a flat bed may come in under it.',
      'Bag sizes are the nominal 2 and 3 cubic feet. Some bags are sold by weight, and a wet bag or a coarsely shredded product can fill less ground than the nominal volume. Read the volume printed on the bag. If it is not 2 or 3 cubic feet, divide the cubic-foot line by that volume yourself. Colour, dye, and the species of wood do not change the geometry. They change the price and how the mulch settles, which this page does not estimate.',
      'The bulk line rounds up to the next half yard because many landscape yards sell that way. A yard with a one-yard minimum, or a delivery fee that swamps a small order, will not honor a 0.5 yard request just because this page printed one. The 4 by 8 foot example is the case to watch: 4 bags are a closer match than half a yard. Cubic yards here are US survey-style customary yards of 27 cubic feet. A UK or Australian supplier selling by the cubic metre needs a conversion. One cubic yard is about 0.765 cubic metres. The bag headline itself is not a metric bag.',
      'Nothing on this page is a planting recommendation. Three inches is a common depth for suppressing weeds in an ornamental bed, and it can be too much against a trunk or too little on a path. The concrete page is the one that counts 40, 60, and 80 lb bags of concrete. The paint page counts gallons from square feet. A mulch volume will not answer either of those.'
    ],
    disclaimer: 'This is a volume estimate for a rectangular bed using 2 or 3 cubic foot bags. It is not a landscaping specification or a quote from a bulk yard. Confirm the volume printed on the bag you buy.',
    faqs: [
      {
        q: 'How many bags of mulch cover a 10 by 20 foot bed at 3 inches?',
        a: 'With 2 cubic foot bags and no waste, 25 bags. The bed is 50 cubic feet, or 1.852 cubic yards, and each bag covers 8 square feet at that depth. A 3 cubic foot bag on the same bed comes out to 16.67 bags, which rounds up to 17.'
      },
      {
        q: 'What is the difference between a 2 cubic foot and a 3 cubic foot bag of mulch?',
        a: 'The 3 cubic foot bag holds half again as much. It takes 13.5 of the smaller bags to fill a cubic yard, and 9 of the larger ones. On the sample bed the headlines are 25 and 17. The cubic yards do not change when you change the bag.'
      },
      {
        q: 'Why do mulch calculators divide by 324?',
        a: 'Length and width are in feet and the depth is in inches. Dividing the depth by 12 makes feet, and dividing cubic feet by 27 makes yards. Multiplying those divisors gives 324. The sample is 10 × 20 × 3 / 324, which is 1.852 cubic yards, the same figure as 50 cubic feet divided by 27.'
      },
      {
        q: 'Should I buy the mulch bags and the bulk cubic yards?',
        a: 'No. They are two ways to buy one volume. The sample is 25 bags or a bulk order of 2 cubic yards, not both. With 10% waste it is 28 bags or 2.5 cubic yards. The bulk line has already rounded up. Adding the bags on top of it double-counts the bed.'
      },
      {
        q: 'How many square feet does one 2 cubic foot bag cover at 3 inches?',
        a: 'Eight. At 2 inches the same bag covers 12 square feet, which is the figure many labels print. At 4 inches it covers 6. Using the 2-inch claim on a 3-inch job undercounts the bags. On this 200 square foot bed that mistake is 17 bags instead of 25.'
      }
    ],
    relatedLinks: [
      { slug: 'gravel-calculator', label: 'Gravel calculator', note: 'The same 10 by 20 foot area at 3 inches is 1.852 cubic yards, then 2.625 short tons of dry gravel. Mulch stops at the bags.' },
      { slug: 'concrete-slab-calculator', label: 'Concrete slab calculator', note: '80, 60, and 40 lb bags for a pour. A 10 by 10 slab at 4 inches is not this mulch count.' },
      { slug: 'room-paint-calculator', label: 'Room paint calculator', note: 'Gallons from wall area. It does not estimate a bed.' },
      { slug: 'length-converter', label: 'Length converter from meters', note: 'If the bed was measured in meters, convert to feet before you type the length and width. Depth stays in inches here.' }
    ]
  }
};
