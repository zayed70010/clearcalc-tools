export const waveCalculatorContent = {
  'michigan-paycheck-calculator': {
    title: 'Michigan Paycheck Calculator 2026 (4.25% after $5,900) | ClearCalc',
    h1: 'Michigan Paycheck Calculator for 2026',
    description: 'Estimate a 2026 Michigan paycheck after federal income tax, the 4.25% state tax on wages above a $5,900 exemption, and optional Detroit city tax.',
    intro: [
      'This Michigan paycheck calculator estimates what is left from 2026 wages after federal income tax, Michigan income tax, a city tax when you ask for one, Social Security, and Medicare. Michigan’s rate for the 2026 tax year is 4.25%. The state treasurer, the Senate Fiscal Agency, and the House Fiscal Agency published that determination on 15 April 2026: general-fund revenue fell in the fiscal year that ended 30 September 2025, so the statutory trigger for a one-year rate cut was not met. The personal exemption used for withholding is $5,900, up from $5,800 in 2025. There is no Michigan standard deduction. The exemption does that work, once for each exemption you enter.',
      'The sample is $65,000, single, paid every two weeks, with one exemption and no city tax. Federal income tax uses the tax year 2026 brackets and standard deduction in IRS Revenue Procedure 2025-32. Social Security is 6.2% up to $184,500, and Medicare is 1.45% of all wages. The result is an annual estimate divided by the number of paychecks. It is not the percentage method in Publication 15-T, and it is not a Michigan MI-1040. Detroit can be added from the city menu. Any other Michigan city is a rate and an exemption you type, because those ordinances are not one statewide table.'
    ],
    steps: [
      'Enter annual gross wages in dollars. The sample, 65000, means $65,000 for the year, not one paycheck.',
      'Choose Single or Married filing jointly, then a pay frequency. Joint changes the federal brackets and the $32,200 federal standard deduction. It does not change the 4.25% Michigan rate. Every two weeks means 26 paychecks.',
      'Enter a traditional 401(k) deferral for the year, or leave 0. Then enter Michigan exemptions. The sample is 1. A joint return that claims a spouse uses 2. A person who can be claimed on someone else’s return uses 0.',
      'Leave city income tax on “No city income tax” for the state result alone. Choose a Detroit row when that tax applies, or choose “Other city” and type that city’s rate and exemption. Press Calculate.'
    ],
    howHeading: 'How a 2026 Michigan paycheck is estimated',
    howItWorks: [
      'Federal taxable wages are gross wages minus the traditional 401(k) actually applied, then minus the federal standard deduction. For 2026 that deduction is $16,100 for a single filer and $32,200 for married filing jointly. On $65,000 with no deferral, a single filer has $48,900 of federal taxable income and $5,620.00 of federal income tax. Social Security is $4,030.00. Medicare is $942.50. Additional Medicare Tax is $0.00. Those three federal lines match the Ohio and Texas paychecks at the same wages, because FICA does not depend on the state.',
      'Michigan starts from wages minus the traditional 401(k), which this page treats as federal adjusted gross income for a wage earner with no other income. It then subtracts $5,900 times the number of exemptions. On the sample that allowance is $5,900, so Michigan taxable income is $59,100. Tax at 4.25% is $2,511.75. Annual take-home is $51,895.75, and the headline is $1,995.99 every two weeks. Twenty-six times that headline is $51,895.74, one cent under the annual line, because each paycheck is rounded on its own. Ohio at the same wages, one exemption, and no school district or city tax charges $1,344.00 and has annual take-home of $53,063.50. The $1,167.75 gap is the state tax: $2,511.75 minus $1,344.00. Illinois charges $3,072.71 after a $2,925 exemption and has annual take-home of $51,334.79. Michigan’s $51,895.75 is $560.96 higher than that Illinois figure. Texas, with state income tax at $0, has annual take-home of $54,407.50. The entire $2,511.75 gap from Texas is the Michigan tax.',
      'A traditional 401(k) reduces both the federal line and the Michigan line. A $6,500 deferral on the $65,000 single sample cuts federal income tax from $5,620.00 to $4,840.00. That $780.00 is 12% of $6,500. Michigan taxable income falls from $59,100 to $52,600, and Michigan tax falls from $2,511.75 to $2,235.50. The $276.25 saving is 4.25% of $6,500. Social Security stays $4,030.00 because the deferral is still Social Security wages on this page, and Medicare stays $942.50. Annual take-home is $46,452.00, or $1,786.62 every two weeks. A deferral typed above the 2026 elective limit of $24,500 is cut back to $24,500. On these wages that capped deferral leaves Michigan taxable income of $34,600, Michigan tax of $1,470.50, and annual take-home of $31,377.00.',
      'Detroit is a separate ordinance, not a second Michigan bracket. The 2026 City of Detroit Income Tax Withholding Guide sets the resident rate at 2.4% and the nonresident rate at 1.2%, after $600 for each exemption. On the $65,000 sample with one exemption, the city base is $64,400. A resident owes $1,545.60. Annual take-home falls from $51,895.75 to $50,350.15, and the headline is $1,936.54 every two weeks. A nonresident who earned the whole wage in Detroit owes $772.80, which is half the resident bill, and annual take-home is $51,122.95, or $1,966.27 every two weeks. The same $6,500 deferral cuts the resident city bill from $1,545.60 to $1,389.60, because this page removes the deferral before the $600 exemption. Annual take-home is then $45,062.40. The guide also allows extra exemptions for age and blindness. This form does not add them. Type a higher exemption count only if you are deliberately standing in for those extra exemptions.'
    ],
    formula: 'Tax year 2026. One wage earner. No Michigan retirement subtraction.\nMichigan income = max(0, wages − traditional 401(k))\nExemption allowance = $5,900 × number of exemptions, not above that income\nMichigan taxable income = max(0, Michigan income − exemption allowance)\nMichigan tax = 4.25% × Michigan taxable income\nDetroit resident tax = 2.4% × max(0, Michigan income − $600 × exemptions)\nDetroit nonresident tax = 1.2% × max(0, Michigan income − $600 × exemptions)\nOther city tax = the rate you type × max(0, Michigan income − the exemption you type × exemptions)\nFederal tax, Social Security, and Medicare use the 2026 federal paycheck rules on this site\nAnnual take-home = wages − federal income tax − Social Security − Medicare − Additional Medicare Tax − Michigan tax − city tax − 401(k)\nPaycheck = annual take-home ÷ number of paychecks',
    formulaNotes: [
      'Married filing jointly on the same $65,000, still with one exemption and no city tax, has federal income tax of $3,440.00. Michigan tax stays $2,511.75 because the statute does not have a joint rate. Annual take-home is $54,075.75, or $2,079.84 every two weeks. The $2,180.00 gap from the single result is entirely federal: $5,620.00 minus $3,440.00. Type 2 exemptions if the return claims the spouse as well. Two exemptions are $11,800, Michigan taxable income is $53,200, and Michigan tax is $2,261.00. Annual take-home becomes $54,326.50, or $2,089.48 every two weeks. A spouse’s own wages are not included.',
      'Zero exemptions on the $65,000 single sample tax the whole wage. Michigan tax is $2,762.50, which is 4.25% of $65,000, and annual take-home is $51,645.00, or $993.17 a week. Wages of exactly $5,900 with one exemption produce Michigan taxable income of $0.00 and Michigan tax of $0.00. Federal income tax is also $0.00 because the wage is under the $16,100 standard deduction. Social Security is $365.80 and Medicare is $85.55, so annual take-home is $5,448.65, or $454.05 a month. The exemption is not a credit against tax already computed. It reduces the base before the 4.25% is applied, and it cannot reduce that base below zero.'
    ],
    examplesHeading: 'Worked 2026 Michigan paycheck examples',
    examples: [
      {
        title: '$65,000, single, one exemption, no city tax',
        paragraphs: [
          'Federal income tax is $5,620.00, Social Security is $4,030.00, and Medicare is $942.50. The exemption allowance is $5,900.00. Michigan taxable income is $59,100.00. Michigan income tax is $2,511.75. City tax is $0.00. Annual take-home is $51,895.75. The headline is $1,995.99 / two weeks. Dividing the same annual figure by 12 gives $4,324.65 a month. The city menu can stay on “No city income tax” while the other-city rate field still shows 1. That typed rate is ignored until you choose “Other city.”',
          'A 1.5% city rate with a $600 exemption, which is what the other-city fields are for, is a different bill. On $75,000, single, one exemption, Michigan tax is $2,936.75 and the city line is $1,116.00. Federal income tax is $7,670.00, Social Security is $4,650.00, and Medicare is $1,087.50. Annual take-home is $57,539.75, or $2,213.07 every two weeks. The detail line names the rate you typed. It does not look up a street address, and it does not assume every city uses Detroit’s $600 exemption. Replace 600 if the ordinance says something else.'
        ]
      },
      {
        title: 'Detroit resident and Detroit nonresident on the same wages',
        paragraphs: [
          'Keep $65,000, single, one exemption, and no 401(k). Choose Detroit resident. City tax is $1,545.60 on a $64,400 base. Michigan tax is still $2,511.75. Annual take-home is $50,350.15, and the headline is $1,936.54 / two weeks. Switch to Detroit nonresident and the city line falls to $772.80. Annual take-home rises to $51,122.95, or $1,966.27 / two weeks. The nonresident path treats the entire wage as earned inside Detroit. If only part of the year was worked in the city, this form cannot split the wage. Type the Detroit portion as the annual wage, or leave the city off and compute the partial year outside the form.',
          'Add the $6,500 traditional deferral on the resident row. Michigan tax falls to $2,235.50 and Detroit tax falls to $1,389.60. The city base is $57,900, which is $65,000 minus $6,500 minus $600. Annual take-home is $45,062.40, or $1,733.17 / two weeks. A Roth contribution should not be typed in the deferral field. The form would treat it as pre-tax and understate both the federal tax and the Michigan tax.'
        ]
      },
      {
        title: '$90,000, $210,000, and the exemption at the wage',
        paragraphs: [
          'At $90,000, single, one exemption, and no city tax, Michigan taxable income is $84,100 and Michigan tax is $3,574.25. Federal income tax is $10,970.00, Social Security is $5,580.00, and Medicare is $1,305.00. Annual take-home is $68,570.75, or $2,637.34 / two weeks. The 4.25% rate does not step up at a higher wage. Michigan’s bracket, such as it is, is one rate after the exemption.',
          'At $210,000, single, one exemption, and no city tax, Social Security stops at $11,439.00 because wages are over the $184,500 base. Additional Medicare Tax is $90.00. Michigan tax is $8,674.25, which is 4.25% of $204,100. Federal income tax is $39,134.00. Annual take-home is $147,617.75, or $5,677.61 / two weeks. The $5,900 exemption is still there. This page does not phase it out. A retirement subtraction, a pension, or Social Security benefits are not in the wage figure, so the high-income retirement rules on the MI-1040 are not applied. At the other end, $5,900 of wages and one exemption produce $0.00 of Michigan tax and a monthly headline of $454.05 after FICA only.'
        ]
      }
    ],
    table: {
      heading: '2026 Michigan tax at selected wages, single, one exemption, no city tax',
      caption: 'The exemption is $5,900 except where the wage is lower than that allowance. Federal tax and FICA are included in the take-home column. Detroit and other city taxes are zero. Amounts are what this calculator displays.',
      headers: ['Wages', 'Michigan taxable income', 'Michigan tax', 'Annual take-home', 'Every two weeks'],
      rows: [
        ['$5,900', '$0.00', '$0.00', '$5,448.65', '$209.56'],
        ['$65,000', '$59,100.00', '$2,511.75', '$51,895.75', '$1,995.99'],
        ['$65,000 and a $6,500 401(k)', '$52,600.00', '$2,235.50', '$46,452.00', '$1,786.62'],
        ['$75,000', '$69,100.00', '$2,936.75', '$58,655.75', '$2,255.99'],
        ['$90,000', '$84,100.00', '$3,574.25', '$68,570.75', '$2,637.34'],
        ['$210,000', '$204,100.00', '$8,674.25', '$147,617.75', '$5,677.61']
      ]
    },
    limitsHeading: 'What this Michigan paycheck estimate leaves out',
    limits: [
      'The retirement and pension subtraction, the interest and dividend subtraction, and the other Michigan additions and subtractions are not applied. A wage earner with a pension can owe less Michigan tax than this page shows, and the subtraction itself has an income limit that this one-salary form does not test. The homestead property tax credit and the Michigan earned income tax credit are credits against the return, not lines on a paycheck, and they are omitted. Part-year residency and reciprocity with a neighboring state are omitted too.',
      'A traditional 401(k) reduces federal tax, Michigan tax, and the city tax on this page. A Roth amount typed into the deferral field is treated as pre-tax, which is the wrong direction. Catch-up contributions above the $24,500 elective limit are cut back. Health insurance premiums that are excluded from federal wages are not a field here. If those premiums were already left out of the wage you type, do not subtract them again. Social Security and Medicare are computed on gross wages before the deferral, which matches the usual payroll treatment of a 401(k). A plan that is exempt from FICA is outside this form.',
      'Detroit’s extra exemptions for being 65 or blind are not added automatically. The nonresident row assumes the typed wage was earned in Detroit. Other Michigan cities, including cities whose resident rate is 1% or 1.5% and whose exemption is not $600, have to be typed. The form will not refuse a rate that the ordinance does not actually charge. Withholding on a real stub can also differ because employers use payroll tables and pre-tax benefits. The Ohio page uses $332 plus 2.75% above $26,050 of taxable nonbusiness income. The Illinois page uses 4.95% after a $2,925 exemption. Neither result is this 4.25% calculation with the city left off.',
      'The calculator does not file an MI-1040 or a Detroit return, and it does not decide residency. Use the annual figure as a planning total, then compare it with the stub. A city tax withheld for a city you moved out of is a refund question for that return, not a second run of the 4.25% line.'
    ],
    disclaimer: 'This Michigan paycheck figure is general information for a wage earner, not an MI-1040, a Detroit return, or tax advice. Treasury and the city assess the tax due.',
    faqs: [
      {
        q: 'What Michigan income tax rate does this 2026 paycheck calculator use?',
        a: '4.25% of Michigan income after $5,900 for each exemption you enter. On $65,000 with one exemption and no 401(k), Michigan tax is $2,511.75 and the two-week headline with no city tax is $1,995.99. The 15 April 2026 rate letter left the rate at 4.25% because the conditions for a cut were not met. The 2023 rate of 4.05% is not used.'
      },
      {
        q: 'Does a traditional 401(k) reduce Michigan’s 4.25% tax?',
        a: 'Yes on this page. A $6,500 deferral on a $65,000 single wage cuts Michigan tax from $2,511.75 to $2,235.50 and cuts federal income tax from $5,620.00 to $4,840.00. Detroit city tax falls as well, from $1,545.60 to $1,389.60 for a resident with one exemption. Do not type a Roth amount into the deferral field. A deferral above $24,500 is cut back to the 2026 elective limit.'
      },
      {
        q: 'How much Detroit city tax does this calculator add to a $65,000 wage?',
        a: 'A resident with one exemption pays $1,545.60, which is 2.4% of $64,400. A nonresident pays $772.80, which is 1.2% of the same base. Annual take-home is $50,350.15 for the resident and $51,122.95 for the nonresident, against $51,895.75 with the city turned off. The $600 exemption is the 2026 withholding figure. Extra age and blindness exemptions are not added for you.'
      },
      {
        q: 'Does married filing jointly change the Michigan 4.25% calculation?',
        a: 'It changes the federal tax, not the Michigan rate. On $65,000 with one exemption and no city tax, joint filing cuts federal income tax from $5,620.00 to $3,440.00 and leaves Michigan tax at $2,511.75. Annual take-home rises from $51,895.75 to $54,075.75. Type 2 if the return claims a spouse’s exemption. That second exemption cuts Michigan tax to $2,261.00. A spouse’s own wages are not included.'
      },
      {
        q: 'Why is Michigan take-home lower than the Ohio result on the same $65,000?',
        a: 'The federal and FICA lines match. Ohio tax on that single wage with one exemption and no local rates is $1,344.00. Michigan tax is $2,511.75. Annual take-home is $53,063.50 in Ohio and $51,895.75 here. The $1,167.75 gap is the difference in those two state taxes. Illinois, at $3,072.71 of state tax, is $560.96 below this Michigan take-home.'
      }
    ],
    relatedLinks: [
      { slug: 'ohio-paycheck-calculator', label: 'Ohio paycheck calculator for 2026', note: 'At $65,000 single with one exemption and no local tax, Ohio tax is $1,344.00 and this Michigan tax is $2,511.75.' },
      { slug: 'illinois-paycheck-calculator', label: 'Illinois paycheck calculator for 2026', note: 'A 4.95% state tax after a $2,925 exemption. At $65,000 single the Illinois tax is $3,072.71.' },
      { slug: 'texas-paycheck-calculator', label: 'Texas paycheck calculator for 2026', note: 'The same federal and FICA lines at $65,000, with state income tax at $0 and annual take-home of $54,407.50.' },
      { slug: '401k-contribution-calculator', label: '2026 401(k) contribution calculator', note: 'Check a deferral against the $24,500 limit before you type the dollar amount here. The deferral reduces Michigan tax and the city line.' }
    ]
  },
  'new-brunswick-take-home-pay-calculator': {
    title: 'New Brunswick Take-Home Pay Calculator 2026 | ClearCalc',
    h1: 'New Brunswick Take-Home Pay Calculator for 2026',
    description: 'Estimate 2026 New Brunswick take-home pay after federal tax, New Brunswick tax from 9.40% to 19.5%, the $13,664 basic personal amount, CPP, and EI.',
    intro: [
      'This New Brunswick take-home pay calculator estimates what a resident employee keeps from 2026 employment income after federal income tax, New Brunswick income tax, Canada Pension Plan contributions, and Employment Insurance. New Brunswick indexes its thresholds and personal amounts by 2.0% for 2026. The rates in CRA’s T4032-NB tables for January 2026 are 9.40% to $52,333, 14% to $104,666, 16% to $193,861, and 19.5% above that. The basic personal amount on Form TD1NB is $13,664. The credit that comes from it is that amount, plus the CPP base and EI, multiplied by 9.40%. The sample salary is $70,000.',
      'Federal tax, CPP, and EI use the same 2026 payroll figures as the Nova Scotia, Saskatchewan, Manitoba, Alberta, Ontario, and British Columbia pages on this site. The lowest federal rate is 14%. The federal basic personal amount is $16,452 until the high-income phase-out begins. Employee CPP is 5.95% of pensionable earnings between $3,500 and the $74,600 year’s maximum pensionable earnings, plus CPP2 of 4% between that ceiling and $85,000. Employee EI is 1.63% up to the $68,900 maximum insurable earnings. Quebec’s QPP and its lower EI rate are not used. New Brunswick is in the CPP system. The result is an annual tax figure divided by 12. It is not the payroll-deduction table for one pay period, and it is not a T1 return.'
    ],
    steps: [
      'Enter annual gross employment income in Canadian dollars. The sample, 70000, means $70,000 for the year.',
      'Press Calculate. The headline is annual take-home divided by 12 and rounded to the cent.',
      'Read New Brunswick income tax separately from federal income tax. The provincial credit is taken at 9.40%, not at the federal 14% rate.',
      'Use another province’s page if the income is not New Brunswick employment income. This form has no province menu and no Quebec payroll path.'
    ],
    howHeading: 'How 2026 New Brunswick take-home pay is estimated',
    howItWorks: [
      'CPP and EI come off the salary before the tax credits are computed, and part of CPP also reduces taxable income. On $70,000 the pensionable earnings are the full salary, the $3,500 basic exemption leaves $66,500 of contributory earnings, and the employee CPP base is $3,291.75. The first additional contribution is $665.00. Together they are $3,956.75. CPP2 is $0 because the salary is under $74,600. EI reaches its annual maximum, $1,123.07. Taxable income for the brackets is $70,000 minus the $665.00 first additional CPP contribution, which is $69,335.00. That is the same taxable income the Nova Scotia page uses at this salary. CPP2 would also be deducted from taxable income. It is not due yet.',
      'Federal tax on $69,335 is the same $7,278.19 the Nova Scotia page reports, because the federal credit is 14% of the $16,452 basic personal amount, the CPP base, EI, and the $1,501 Canada employment amount. New Brunswick does not change that federal figure. Provincial tax is the part that moves. The four New Brunswick brackets are applied to $69,335, which sits in the 14% band because it is above $52,333 and below $104,666. The provincial credit is 9.40% of $13,664 plus the CPP base plus EI, which is $1,699.41. New Brunswick tax after that credit is $5,600.17.',
      'Annual take-home is $70,000 minus CPP, EI, federal tax, and New Brunswick tax, which is $52,041.82. The headline is $4,336.82 / month. Every two weeks is $2,001.61. Nova Scotia tax on the same salary is $7,145.72 and Nova Scotia take-home is $50,496.27. The $1,545.55 gap is the provincial tax: $7,145.72 minus $5,600.17. The monthly headlines differ by $128.80. Saskatchewan tax on the same salary is $4,972.68 and Saskatchewan take-home is $52,669.31, which is $627.49 above this New Brunswick figure. The federal, CPP, and EI lines match across those three pages. The provincial line does not. New Brunswick’s lowest rate is 9.40% and its basic amount is $13,664. Nova Scotia’s lowest rate is 8.79% but the higher bands and the $11,932 basic amount produce more tax at $70,000. A lower first rate is not, by itself, a lower bill.',
      'The credit grows when CPP and EI grow, and then it stops. At $40,000 the provincial credit is $1,515.54, New Brunswick tax is $2,210.15, and the monthly headline is $2,689.57. At $100,000 CPP has reached the first ceiling and CPP2 has started, so employee CPP including CPP2 is $4,646.45 and EI is still $1,123.07. The provincial credit is $1,720.81. It is the same $1,720.81 at $120,000 and at $200,000, because the CPP base and EI are already maxed and the $13,664 basic amount does not shrink. Federal tax does change at $200,000: the federal basic personal amount has started to phase out and the line shows $16,084.75 rather than $16,452. New Brunswick tax at $200,000 is $25,773.65 and the monthly headline is $10,798.36.'
    ],
    formula: 'Calendar year 2026. One employment income. New Brunswick resident. No low-income tax reduction.\nCPP base = 4.95% of pensionable earnings between $3,500 and $74,600\nCPP first additional = 1% of that same contributory earnings\nCPP2 = 4% of earnings between $74,600 and $85,000, capped at $416\nEI = 1.63% of earnings up to $68,900, capped at $1,123.07\nTaxable income = salary − CPP first additional − CPP2\nFederal tax uses the 2026 federal brackets on this site, then a 14% credit for the federal basic personal amount, the CPP base, EI, and the Canada employment amount\nNew Brunswick tax = bracket tax − 9.40% × ($13,664 + CPP base + EI)\nBrackets: 9.40% to $52,333, 14% to $104,666, 16% to $193,861, 19.5% above\nAnnual take-home = salary − CPP − CPP2 − EI − federal tax − New Brunswick tax\nMonthly headline = annual take-home ÷ 12',
    formulaNotes: [
      'The $52,333 threshold is a threshold of taxable income, not of the salary typed in the box. At $70,000 the first additional CPP contribution has already reduced taxable income to $69,335, and that figure is what crosses into the 14% band. A salary that looks as if it sits just under a bracket can be just over it once the CPP adjustment is made, or the other way around. The calculator applies the brackets to the adjusted figure.',
      'At $100,000, New Brunswick tax is $9,714.09, federal tax is $13,301.60, and annual take-home is $71,214.79, or $5,934.57 a month. At $120,000, New Brunswick tax is $12,798.23 and federal tax is $17,502.14. Annual take-home is $83,930.11, or $6,994.18 a month. The CPP and EI lines are identical at those two salaries, $4,646.45 and $1,123.07. The extra $20,000 is taxed, and it no longer buys a larger payroll credit. The 16% band starts only after taxable income passes $104,666, so part of the move from $100,000 to $120,000 is still inside 14% and part of it is not.'
    ],
    examplesHeading: 'Worked 2026 New Brunswick take-home examples',
    examples: [
      {
        title: '$70,000 of employment income',
        paragraphs: [
          'Federal income tax is $7,278.19. New Brunswick income tax is $5,600.17. Employee CPP, including a CPP2 of zero, is $3,956.75. EI is $1,123.07. Annual take-home is $52,041.82. The headline is $4,336.82 / month, and every two weeks is $2,001.61. The basic personal amount line reads $13,664.00, and the credit line reads $1,699.41. Twelve times the monthly headline is $52,041.84, two cents over the annual line, because the headline is rounded on its own.',
          'Put the same $70,000 on the Nova Scotia page and the federal, CPP, and EI lines do not move. Nova Scotia tax is $7,145.72 and the monthly headline is $4,208.02. Put it on the Saskatchewan page and provincial tax is $4,972.68, with a monthly headline of $4,389.11. New Brunswick sits between those two provincial bills. The ranking is not the ranking of the lowest rates alone. Nova Scotia starts at 8.79% and still charges more at this salary.'
        ]
      },
      {
        title: '$40,000, where CPP and EI are not yet at the ceiling',
        paragraphs: [
          'Federal income tax is $2,691.25. New Brunswick income tax is $2,210.15. CPP is $2,171.75. EI is $652.00, because $40,000 is under the $68,900 insurable ceiling and the 1.63% rate has not hit $1,123.07. Annual take-home is $32,274.85. The headline is $2,689.57 / month. The provincial credit is $1,515.54, smaller than the $1,699.41 at $70,000 because the CPP base and EI inside the credit are smaller.',
          'The low-income tax reduction is not in either figure. A wage still inside that reduction can owe less New Brunswick tax than this page shows. At $40,000 the page is already using the ordinary brackets and the basic personal amount only. Do not subtract a reduction you have not checked against the current form. The $70,000 sample is far enough above a typical low-income clawback that the missing reduction is not what sets the headline.'
        ]
      },
      {
        title: '$100,000, $120,000, and $200,000',
        paragraphs: [
          'At $100,000, federal tax is $13,301.60 and New Brunswick tax is $9,714.09. CPP including CPP2 is $4,646.45. EI stays at $1,123.07. Annual take-home is $71,214.79, or $5,934.57 / month, and every two weeks is $2,739.03. The provincial credit has reached $1,720.81. At $120,000 the credit is still $1,720.81, New Brunswick tax is $12,798.23, federal tax is $17,502.14, and the monthly headline is $6,994.18. The CPP line did not rise with the extra $20,000.',
          'At $200,000, New Brunswick tax is $25,773.65 and the basic personal amount is still $13,664.00. Federal tax is $38,876.54, and the federal basic personal amount has fallen to $16,084.75 because the phase-out between $181,440 and $258,482 has started. Annual take-home is $129,580.29, or $10,798.36 / month. CPP and EI are unchanged from the $100,000 row. The 19.5% band starts after taxable income passes $193,861, so this salary is the first of the worked examples that uses the top rate. The page does not add New Brunswick surtax. There is no surtax in these brackets.'
        ]
      }
    ],
    table: {
      heading: '2026 New Brunswick take-home pay at selected salaries',
      caption: 'Each row is what this calculator displays for that employment income. Federal tax, CPP, and EI use the same payroll figures as the other provincial pages. The low-income tax reduction is not included. The monthly figure is the annual take-home divided by 12.',
      headers: ['Salary', 'New Brunswick tax', 'Federal tax', 'Annual take-home', 'Monthly'],
      rows: [
        ['$40,000', '$2,210.15', '$2,691.25', '$32,274.85', '$2,689.57'],
        ['$70,000', '$5,600.17', '$7,278.19', '$52,041.82', '$4,336.82'],
        ['$100,000', '$9,714.09', '$13,301.60', '$71,214.79', '$5,934.57'],
        ['$120,000', '$12,798.23', '$17,502.14', '$83,930.11', '$6,994.18'],
        ['$200,000', '$25,773.65', '$38,876.54', '$129,580.29', '$10,798.36']
      ]
    },
    limitsHeading: 'What this New Brunswick estimate leaves out',
    limits: [
      'The low-income tax reduction is not applied. A person whose income is still inside that reduction can owe less provincial tax than the figure here. The page also omits the spouse or common-law partner amount, the eligible dependant amount, the age amount, tuition credits, and medical expenses. Someone claiming only the basic personal amount on TD1NB is the case the credit models. A larger TD1NB claim code lowers the tax. This form has no claim-code menu.',
      'CPP and EI follow the employee rates outside Quebec. A worker who is exempt from CPP, or who has already contributed at another job up to the annual maximum, will not match a full-year calculation that starts from zero. Pension income is not employment income for the Canada employment amount, and this page always gives that amount up to the $1,501 cap because it treats the typed figure as wages. Self-employment income uses different CPP rules and no EI in the ordinary employee sense. Do not type a net business income here and read the result as a T1.',
      'The other provincial pages are not interchangeable with a different label. Nova Scotia at $70,000 keeps $50,496.27. Saskatchewan keeps $52,669.31. This page keeps $52,041.82. The federal tax on that salary is $7,278.19 on each of them. Moving the same salary across the provincial line changes the provincial tax only. It does not change the CPP maximum or the EI maximum.',
      'Payroll tables withhold from each cheque using the claim code and the pay period. This page annualizes first and then divides. A bonus, a mid-year start, or a raise can make the stub differ from one-twelfth of the annual figure even when the year-end T4 ends up close. Use the annual total as the planning figure and the monthly headline as its average.'
    ],
    disclaimer: 'This New Brunswick figure is general information for an employee who claims the basic personal amount, not a T1, a TD1NB, or tax advice. The Canada Revenue Agency assesses the return.',
    faqs: [
      {
        q: 'Which New Brunswick tax brackets does this 2026 calculator use?',
        a: '9.40% to $52,333 of taxable income, 14% to $104,666, 16% to $193,861, and 19.5% above that. Those are the T4032-NB thresholds for January 2026, indexed by 2.0%. At $70,000 the provincial tax is $5,600.17 and the monthly headline is $4,336.82. The basic personal amount is $13,664, credited at 9.40% along with the CPP base and EI.'
      },
      {
        q: 'Why is New Brunswick take-home $4,336.82 a month at $70,000 when Nova Scotia is $4,208.02?',
        a: 'Federal tax, CPP, and EI match. Nova Scotia tax is $7,145.72 and New Brunswick tax is $5,600.17. The $1,545.55 difference in provincial tax is $128.80 a month. Saskatchewan tax on the same salary is $4,972.68, so that monthly headline, $4,389.11, is $52.29 above this one. The lowest provincial rate is not the whole story: Nova Scotia’s first rate is 8.79% and the bill at $70,000 is still higher.'
      },
      {
        q: 'Does the $13,664 New Brunswick basic personal amount shrink at $200,000?',
        a: 'Not on this page, and not in the 2026 T4032-NB figure it uses. The provincial amount stays $13,664 at $40,000, at $70,000, and at $200,000, and the provincial credit stays $1,720.81 once CPP and EI are maxed. The federal basic personal amount is a different figure. It is $16,452 at $70,000 and $16,084.75 at $200,000, where the federal phase-out has started.'
      },
      {
        q: 'Is the New Brunswick low-income tax reduction included?',
        a: 'No. A wage still inside that reduction can owe less provincial tax than this page shows. The $70,000 sample is computed from the ordinary brackets and the basic personal amount only. The $40,000 row is computed the same way: New Brunswick tax of $2,210.15 and a monthly headline of $2,689.57, with no reduction subtracted.'
      },
      {
        q: 'Does this New Brunswick calculator include CPP2 and the Quebec EI rate?',
        a: 'It includes CPP2 when the salary passes $74,600, and it uses the 1.63% EI rate outside Quebec. At $70,000 CPP2 is $0 and employee CPP is $3,956.75. At $100,000 employee CPP including CPP2 is $4,646.45, and EI stays at $1,123.07. Quebec Pension Plan contributions and the Quebec EI premium are not used. New Brunswick employees are in the CPP system.'
      }
    ],
    relatedLinks: [
      { slug: 'nova-scotia-take-home-pay-calculator', label: 'Nova Scotia take-home pay calculator for 2026', note: 'Same federal tax, CPP, and EI at $70,000. Nova Scotia tax is $7,145.72 rather than this $5,600.17, and the monthly headline is $4,208.02.' },
      { slug: 'saskatchewan-take-home-pay-calculator', label: 'Saskatchewan take-home pay calculator for 2026', note: 'Same federal pieces. Saskatchewan tax is $4,972.68 and the monthly headline is $4,389.11.' },
      { slug: 'ontario-take-home-pay-calculator', label: 'Ontario take-home pay calculator for 2026', note: 'Same federal payroll system, plus Ontario tax and the Ontario Health Premium. Not these New Brunswick brackets.' },
      { slug: 'alberta-take-home-pay-calculator', label: 'Alberta take-home pay calculator for 2026', note: 'Same federal pieces at a given salary, with Alberta’s own brackets and no provincial sales-tax field on that page either.' }
    ]
  },
  'wales-land-transaction-tax-calculator': {
    title: 'Wales Land Transaction Tax Calculator 2026 (LTT) | ClearCalc',
    h1: 'Wales Land Transaction Tax Calculator for 2026',
    description: 'Estimate residential Land Transaction Tax in Wales using the main rates from October 2022 and the higher rates in force since December 2024, including a £280,000 worked example.',
    intro: [
      'This Wales land transaction tax calculator estimates Land Transaction Tax on a residential purchase. The price is sliced across bands. You do not pay one rate on the whole price. The main residential rates have applied since 10 October 2022 and were still the GOV.WALES table in 2026: 0% to £225,000, then 6% to £400,000, 7.5% to £750,000, 10% to £1.5 million, and 12% above that. The Welsh Government’s tax policy report of October 2025 recorded no change to those main rates. The higher residential rates, for an additional dwelling and for a company buying a dwelling, are the bands that took effect on 11 December 2024: 5% to £180,000, 8.5% to £250,000, 10% to £400,000, 12.5% to £750,000, 15% to £1.5 million, and 17% above that.',
      'The sample is a £280,000 main home. GOV.WALES works that price as £0 on the first £225,000 and 6% of the remaining £55,000, which is £3,300. The calculator returns £3,300.00. Wales does not have England’s first-time buyer nil-rate band, and it does not have Scotland’s first-time buyer relief of up to £600. A buyer who would be a first-time buyer in England still uses the main residential table here. The higher rates are a different table, not five extra points painted onto the main rates. A £250,000 main home is £1,500.00 in Wales, £2,500.00 of SDLT in England, and £2,100.00 of LBTT in Scotland. Those three bills are three statutes.'
    ],
    steps: [
      'Enter the chargeable consideration in pounds. The sample, 280000, means a £280,000 purchase price. Do not enter the deposit alone.',
      'Choose “Main home, main residential rates” when the purchase is your only or replacement home and the higher-rate rules do not apply. Wales has no separate first-time buyer button.',
      'Choose “Additional dwelling, higher rates” when you will own more than one dwelling, or when a company is the buyer. Under £40,000 the higher rates are not applied.',
      'Press Calculate. The headline is the LTT in pounds and pence. The lines under it show the main-rate figure even when the higher rates were used, so the two tables can be compared on the same price.'
    ],
    howHeading: 'How Welsh residential LTT is sliced',
    howItWorks: [
      'Main residential LTT is £0 on the first £225,000, 6% on the next £175,000 (the slice from £225,001 to £400,000), 7.5% on the next £350,000 (up to £750,000), 10% on the next £750,000 (up to £1.5 million), and 12% above £1.5 million. A price of £225,000 is £0.00. A price of £226,000 is £60.00, which is 6% of £1,000. A price of £400,000 is £10,500.00, which is 6% of the £175,000 above £225,000 and nothing yet at 7.5%. One pound above that line, £400,001, is £10,500.08. The extra penny of price is taxed at 7.5%, which is 7.5 pence, and that half-penny rounds to 8 pence. The calculator rounds once, after every slice is added.',
      'The £280,000 sample stays inside the 6% band. The slice above £225,000 is £55,000, and 6% of £55,000 is £3,300. The effective rate is 1.18%, far below 6%, because most of the price was taxed at zero. A £450,000 main home crosses into 7.5%. The tax is £10,500 on the slice up to £400,000 plus 7.5% of £50,000, which is £3,750. The total is £14,250.00, and the effective rate is 3.17%. A £750,000 main home is £36,750.00. A £1,500,000 main home is £111,750.00. The effective rate at £1.5 million is 7.45%, still below the 10% band that the last slice touched, because the earlier slices were cheaper.',
      'Higher rates replace the main table. They do not add a flat supplement the way Scotland adds 8% of the whole price, and they are not the main rates plus five points the way England’s additional-dwelling rates are. At £250,000 the higher-rate bill is 5% of £180,000 plus 8.5% of £70,000, which is £9,000 plus £5,950, or £14,950.00. The main-rate bill on that price is £1,500.00, so choosing the additional-dwelling row costs £13,450.00 more. At £450,000 the higher-rate bill is £36,200.00 against £14,250.00 on the main table. England’s additional-dwelling SDLT on £450,000 is £35,000.00. The two additional-dwelling results are close at that price and they are not the same calculation. At £40,000 the higher rates produce £2,000.00, which is 5% of the price. At £39,999 they are refused, the main table is used, and the tax is £0.00 because the price is still inside the £225,000 nil-rate band.',
      'A purchase that would qualify for first-time buyer relief in England does not get a different Welsh band. England’s relief on a £450,000 first home is £7,500 of SDLT, against £12,500 on England’s standard table. Wales charges the main-rate £14,250.00 either way. Scotland’s first-time buyer relief would take £600 off the Scottish bill and would still not produce the Welsh figure. If you are comparing a house you might buy in Cardiff, Birmingham, or Glasgow, run each statute on its own page. Retyping a Welsh price into the England calculator will invent an SDLT bill, including a first-time buyer result Wales does not have.'
    ],
    formula: 'Residential freehold or leasehold in Wales. Main rates for an effective date on or after 10 October 2022. Higher rates for an effective date on or after 11 December 2024.\nMain residential:\n  0% to £225,000\n  6% on £225,001 to £400,000\n  7.5% on £400,001 to £750,000\n  10% on £750,001 to £1,500,000\n  12% above £1,500,000\nHigher residential, price £40,000 or more:\n  5% to £180,000\n  8.5% on £180,001 to £250,000\n  10% on £250,001 to £400,000\n  12.5% on £400,001 to £750,000\n  15% on £750,001 to £1,500,000\n  17% above £1,500,000\nUnder £40,000, the higher-rate table is not used.\nThere is no first-time buyer band.\nLTT = sum of (slice × rate), rounded to the nearest penny\nEffective rate = LTT / price',
    formulaNotes: [
      'The £280,000 main-rate example on GOV.WALES is the check for the 6% band: £0 plus £3,300. The calculator’s headline is £3,300.00 and the effective rate is 1.18%. A £200,000 main home is still inside the nil-rate band, so the headline is £0.00. The same £200,000 as an additional dwelling is £10,700.00: 5% of £180,000 is £9,000 and 8.5% of £20,000 is £1,700. The main-rate line under that result stays £0.00, so you can see what the higher-rate choice added.',
      'Half-pence appears when a 7.5%, 8.5%, or 12.5% band is touched by an odd pound. £400,001 on the main table is £10,500.08, not £10,500.075 and not £10,501. The 7.5 pence on that extra pound rounds to 8 pence, and the earlier slices are whole pounds. Scotland’s LBTT page rounds the final total down to the nearest pound. This Welsh page keeps the penny. A whole-pound price that lands on a 6%, 10%, or 5% boundary, such as £280,000 or £180,000, does not show that rounding because the tax is already a whole number of pounds.'
    ],
    examplesHeading: 'Worked Welsh land transaction tax examples',
    examples: [
      {
        title: 'The £280,000 GOV.WALES main-rate example',
        paragraphs: [
          'Choose the main home and enter 280000. The calculator shows £3,300.00, an effective rate of 1.18%, and the main-rate sentence. The arithmetic is £0 on £225,000 and 6% of £55,000. The higher-rate line says the higher rates were not applied. That is the worked example on the GOV.WALES rates page for transactions on or after 10 October 2022.',
          'The same price as an additional dwelling is £17,950.00, an effective rate that the higher-rate path computes from the December 2024 table. The main-rate line underneath still reads £3,300.00. The gap between those two lines is the cost of the higher-rate rules on this particular price, not a separate surcharge added on top of £3,300. Switching the menu replaces the table. It does not stack the tables.'
        ]
      },
      {
        title: '£250,000 and £450,000 against England and Scotland',
        paragraphs: [
          'A £250,000 main home shows £1,500.00, an effective rate of 0.60%. That is 6% of the £25,000 above £225,000. England’s standard SDLT on £250,000 is £2,500.00. Scotland’s standard LBTT is £2,100.00. The Welsh bill is the lowest of the three because the nil-rate band runs £100,000 further than England’s and £80,000 further than Scotland’s, even though the next Welsh rate is 6% rather than 2%. The same £250,000 as an additional dwelling in Wales is £14,950.00. England’s additional-dwelling SDLT on that price is £15,000.00. Scotland’s additional dwelling, standard LBTT plus 8% of the price, is £22,100.00.',
          'A £450,000 main home shows £14,250.00. England’s standard SDLT is £12,500.00, and a first-time buyer in England would pay £7,500.00. This Welsh page has no button that produces £7,500. Scotland’s standard LBTT on £450,000 is £18,350.00. The Welsh higher rate on £450,000 is £36,200.00, against £35,000.00 of additional-dwelling SDLT. At £250,000 Wales was cheaper than England on both the main home and the additional dwelling. At £450,000 the main-home comparison has flipped, and the additional-dwelling comparison has flipped the other way by £1,200. The bands do not preserve a single ranking as the price rises.'
        ]
      },
      {
        title: 'The £225,000 nil-rate edge, and the £40,000 higher-rate edge',
        paragraphs: [
          'A main home at £225,000 shows £0.00. At £226,000 it shows £60.00. There is no lump-sum cliff of the kind England’s first-time buyer relief has at £500,000. You pay 6% of the pounds above £225,000, and the pounds below that line stay at zero. A £500,000 main home is £18,000.00: £10,500 up to £400,000 and 7.5% of £100,000. A first-time buyer label would not change it.',
          'An additional dwelling at £39,999 shows £0.00 and explains that the higher rates were not applied. At £40,000 the same choice shows £2,000.00, an effective rate of 5.00%, while the main-rate line stays £0.00. At £180,000 the higher-rate headline is £9,000.00, still entirely inside the 5% band, and the main-rate line is still £0.00 because £180,000 is under £225,000. The higher rates can be due on a price that the main table would not tax at all. That is the practical reason the £40,000 test matters.'
        ]
      }
    ],
    table: {
      heading: 'Residential LTT at selected Welsh prices',
      caption: 'Main home uses the rates in force since 10 October 2022. Additional dwelling uses the higher rates in force since 11 December 2024, except under £40,000, where the main table is used. Each amount is what this calculator displays. Wales has no first-time buyer column.',
      headers: ['Price', 'Main home', 'Additional dwelling', 'Effective rate, main home'],
      rows: [
        ['£200,000', '£0.00', '£10,700.00', '0.00%'],
        ['£225,000', '£0.00', '£12,825.00', '0.00%'],
        ['£250,000', '£1,500.00', '£14,950.00', '0.60%'],
        ['£280,000', '£3,300.00', '£17,950.00', '1.18%'],
        ['£400,000', '£10,500.00', '£29,950.00', '2.63%'],
        ['£450,000', '£14,250.00', '£36,200.00', '3.17%'],
        ['£750,000', '£36,750.00', '£73,700.00', '4.90%'],
        ['£1,500,000', '£111,750.00', '£186,200.00', '7.45%']
      ]
    },
    limitsHeading: 'What this Welsh LTT estimate leaves out',
    limits: [
      'The form covers one residential price. It does not calculate non-residential rates, the tax on rent under a new lease, the net present value of rent, linked transactions, or multiple-dwellings relief. The minimum-tax rule inside multiple-dwellings relief was increased from 13 February 2026. A purchase of several dwellings needs that relief’s own arithmetic, not this single-price slice. Mixed-use property, such as a shop with a flat, is outside the residential tables. Fixtures that are chattels can fall outside the price. This page taxes the number you type.',
      'Higher-rate exceptions are facts the menu cannot see. Replacing a main residence, a refund after a later sale, a lease to a Welsh local authority under the rule added in February 2026, and the treatment of a property worth less than £40,000 all sit in the Welsh Revenue Authority guidance. Choosing “Main home” when you still own another dwelling will understate the tax. Choosing “Additional dwelling” when a replacement exception applies will overstate it. The calculator will not claim the exception for you. Companies and some trusts are in the higher rates even when a person would not be. The additional-dwelling row is the row this page offers for that case. It does not ask whether the buyer is a company.',
      'England and Scotland are different statutes, including at the prices where the bills look close. A £250,000 main home is £1,500.00 here, £2,500.00 of SDLT, and £2,100.00 of LBTT. A £450,000 main home is £14,250.00 here, £12,500.00 of SDLT, and £18,350.00 of LBTT. There is no non-UK resident surcharge to add. That 2 percentage point loading is an SDLT rule. Scotland’s additional dwelling supplement is 8% of the whole price. Neither of those shapes is the Welsh higher-rate table. A mortgage payment in dollars does not include this sterling tax. LTT is usually due with the return after completion. It is not a monthly line inside the loan unless a lender has added a cost to the balance, which this page does not assume.',
      'Transitional rules can keep an earlier rate when a contract was exchanged before a rate change and was not varied later. The December 2024 higher-rate change and the October 2022 main-rate change both have transitional guidance. This form always uses the current tables. A contract that stays on an older table needs that guidance, not a second menu here.'
    ],
    disclaimer: 'This LTT figure is general information for a straightforward residential purchase in Wales, not an LTT return and not legal or tax advice. The Welsh Revenue Authority and your conveyancer assess the tax due.',
    faqs: [
      {
        q: 'Which Welsh Land Transaction Tax rates does this calculator use for 2026?',
        a: 'The main residential rates in force since 10 October 2022: 0% to £225,000, 6% to £400,000, 7.5% to £750,000, 10% to £1.5 million, and 12% above that. A £280,000 main home shows £3,300.00, which is the GOV.WALES example. The higher rates are the 11 December 2024 table, starting at 5% to £180,000. The October 2025 tax policy report recorded no later change to the main rates.'
      },
      {
        q: 'Does Wales have a first-time buyer Land Transaction Tax relief?',
        a: 'Not on these rates. There is no Welsh equivalent of England’s £300,000 nil-rate band or Scotland’s relief of up to £600. A £450,000 main home is £14,250.00 whether or not the buyer has owned a home before. England’s first-time buyer result on that price is £7,500.00 of SDLT, and England’s standard result is £12,500.00. Neither of those is an LTT figure. This page has no first-time buyer button.'
      },
      {
        q: 'How do the Welsh higher rates differ from a flat surcharge?',
        a: 'They are a separate slice table, not 8% of the price and not five extra points on the main rates. At £250,000 the higher-rate result is £14,950.00 and the main-rate result is £1,500.00. At £450,000 the higher-rate result is £36,200.00 and the main-rate result is £14,250.00. Under £40,000 the higher rates are not applied. At £39,999 the additional-dwelling choice shows £0.00. At £40,000 it shows £2,000.00.'
      },
      {
        q: 'Why is Welsh LTT £1,500 at £250,000 when England SDLT is £2,500?',
        a: 'Wales taxes nothing until £225,000 and then taxes the next £25,000 at 6%, which is £1,500. England taxes nothing until £125,000 and then taxes the next £125,000 at 2%, which is £2,500. Scotland’s bill on a £250,000 main home is £2,100. At £450,000 the order changes: this page shows £14,250.00, England shows £12,500.00, and Scotland shows £18,350.00. Compare each price on its own statute.'
      },
      {
        q: 'Why can £400,001 of Welsh LTT show an extra eight pence?',
        a: 'The slice above £400,000 is taxed at 7.5%. One extra pound is 7.5 pence, and the calculator rounds the total to the nearest penny, so £400,001 shows £10,500.08 rather than £10,500.00. A £400,000 price is still entirely inside the 6% band and shows £10,500.00 with no fraction. Scotland’s LBTT page drops pence by rounding the total down to the next pound. This page keeps them.'
      }
    ],
    relatedLinks: [
      { slug: 'england-stamp-duty-calculator', label: 'England stamp duty calculator', note: 'Residential SDLT. A £250,000 main home is £2,500 there and £1,500 here. A £450,000 main home is £12,500 there and £14,250 here.' },
      { slug: 'scotland-lbtt-calculator', label: 'Scotland LBTT calculator for 2026', note: 'A £250,000 main home is £2,100 there and £1,500 here. Scotland also has first-time buyer relief of up to £600, which Wales does not.' },
      { slug: 'mortgage-calculator', label: 'Fixed-rate mortgage payment calculator', note: 'Principal and interest in US dollars. It does not add this LTT or convert pounds.' },
      { slug: 'uk-take-home-pay-calculator', label: '2026/27 take-home pay for England, Wales and Northern Ireland', note: 'Income tax and employee National Insurance on a salary. Welsh income tax rates match the rest of the UK outside Scotland. This page is the tax on the house, not the tax on the salary.' }
    ]
  },
  'floor-tile-calculator': {
    title: 'Floor Tile Calculator: How Many Tiles and Boxes | ClearCalc',
    h1: 'Floor Tile Calculator with Grout and Waste',
    description: 'Count floor tiles and boxes from a rectangular room, the tile size in inches, a grout joint, and a waste allowance. The sample 10 by 12 foot floor needs 130 tiles.',
    intro: [
      'This floor tile calculator counts how many tiles to buy for a rectangular floor, and how many boxes that is. Enter the room in feet, the tile in inches, the grout joint in inches, a waste allowance, and the number of tiles in a box. The sample is a 10 by 12 foot floor, 12 inch square tiles, a 1/8 inch joint, 10% waste, and 10 tiles in a box. The headline is 130 tiles. That is not the same question as the room paint calculator, which turns wall area into gallons, and it is not the concrete calculator, which turns a slab thickness into cubic yards.',
      'The grout joint is added once to the tile length and once to the tile width. Each tile in a grid is responsible for the joint on two edges, and the tiles at the opposite walls are cut into the remaining space. A 12 inch tile with a 1/8 inch joint therefore covers 12.125 by 12.125 inches, which is 1.0209 square feet, not a neat 1 square foot. Ignoring the joint on this sample buys two extra tiles. The waste allowance is a separate percentage for cuts, breakage, and a tile kept back for a later repair. Diagonal layouts and tiles with a pattern that has to be matched need more waste than a straight grid. The form will not guess that. You type the percentage.'
    ],
    steps: [
      'Enter the floor length and width in feet. The sample is 10 by 12, which is 120 square feet. Measure the floor you will tile, not the room including a closet you are leaving bare.',
      'Enter the tile length and width in inches. The sample is 12 by 12. A rectangular tile uses both fields. A 12 by 24 tile is 12 in one field and 24 in the other.',
      'Enter the grout joint in inches. The sample, 0.125, is 1/8 inch. Use 0 if you are estimating without a joint. Then enter a waste allowance from 0 to 100 percent. The sample is 10.',
      'Enter how many tiles are in the box you will actually buy. The sample is 10. Press Calculate. The headline is the waste-adjusted tile count, rounded up. Boxes, the no-waste count, and any spare tiles in the last box appear underneath.'
    ],
    howHeading: 'How the tile count is rounded up',
    howItWorks: [
      'Floor area is length times width, in square feet. The sample is 10 times 12, which is 120. Coverage of one tile is (tile length plus grout) times (tile width plus grout), divided by 144, because a square foot is 144 square inches. For a 12 inch tile and a 0.125 inch joint that product is 12.125 times 12.125, which is 147.015625 square inches, and 147.015625 divided by 144 is 1.0209418 square feet. The calculator displays that coverage as 1.0209 square feet. The waste allowance is applied to the floor area before the division. Ten percent of 120 is 12, so the area to cover is 132 square feet. Dividing 132 by the full-precision coverage gives 129.29 tiles before rounding. The count to buy is the next whole tile, 130.',
      'Boxes are the tile count divided by the number in a box, rounded up. The sample’s 130 tiles in boxes of 10 are 13 boxes, and the last box is full. There is no spare tile. Skip the waste allowance and the same floor needs 118 tiles, which is 12 boxes. The joint is why 118 is not 120. A 12 inch tile with no grout covers exactly 1 square foot, so 120 square feet plus 10% waste is 132 tiles exactly, and 132 tiles in boxes of 10 round up to 14 boxes with 8 spare. Adding the 1/8 inch joint drops the buy from 132 tiles to 130 and drops the boxes from 14 to 13. The joint is not a reason to skip waste. It is a reason not to pretend each tile covers a full square foot.',
      'A 12 by 24 inch tile on the same 10 by 12 floor, with the same 1/8 inch joint and 10% waste, covers 2.0314 square feet. The unrounded count is 64.98, so the headline is 65 tiles. In boxes of 8 that is 9 boxes, and the last box leaves 7 spare. Without waste the count is 60 tiles, which is 8 boxes exactly. The waste allowance, not the rounding, is what opens the ninth box. A 6 by 6 inch tile is the other direction. On an 8 by 10 foot floor, which is 80 square feet, a 1/8 inch joint gives 0.2605 square feet per tile. Fifteen percent waste lifts the area to 92 square feet and the unrounded count to 353.13, so you buy 354 tiles. In boxes of 24 that is 15 boxes, with 6 spare. Without waste the count is 308 tiles and 13 boxes. Small tiles multiply both the cut waste and the chance that a box count is decided by a fraction.',
      'A 5 by 5 foot floor with 12 inch tiles, a 1/8 inch joint, and no waste at all still does not land on a whole number of tiles. Coverage is 1.0209 square feet, 25 divided by that coverage is 24.49, and the calculator rounds up to 25 tiles. Three boxes of 10 leave 5 spare. The round-up is the difference between 24.49 and a tile you can buy. It is not a hidden waste percentage. If you also type 10% waste, you are adding waste on top of that round-up, which is what the sample does. The detail line “tiles before rounding up” is the figure to read when you want to see how close the fraction was.'
    ],
    formula: 'Floor area (sq ft) = length in feet × width in feet\nCoverage of one tile (sq ft) = (tile length in inches + grout) × (tile width in inches + grout) / 144\nArea with waste = floor area × (1 + waste percent / 100)\nTiles before rounding = area with waste / coverage\nTiles to buy = area with waste / coverage, rounded up to the next whole tile\nTiles with no waste = floor area / coverage, rounded up\nBoxes = tiles to buy / tiles per box, rounded up\nSpare tiles = boxes × tiles per box − tiles to buy\nA grout joint of 0 leaves coverage equal to the face of the tile.',
    formulaNotes: [
      'The sample’s 129.29 uses the full coverage of 1.0209418 square feet, then the display rounds that quotient to two decimal places. Multiplying the displayed 1.0209 by 129.29 will not return 132 exactly. The tile you buy is the rounded-up 130, not the 129.29. The same display rule turns a no-grout coverage of exactly 1 square foot into the line “1 sq ft” rather than “1.0000 sq ft.”',
      'Rounding up happens twice, and the two rounds are not the same decision. Tiles round up so you do not stop a fraction of a tile short of the waste-adjusted area. Boxes round up so you do not leave the store one tile short of that tile count. On the 12 by 24 example, 64.98 tiles become 65, and 65 divided by 8 becomes 9 boxes. Buying 8 boxes would be 64 tiles, one short of the rounded tile count and more than one short of a job that also breaks a tile. The spare-tile line tells you how many of the last box you did not need for the count. It does not promise those tiles will be the right ones for a future repair if the dye lot changes.'
    ],
    examplesHeading: 'Worked floor tile examples',
    examples: [
      {
        title: '10 by 12 feet, 12 inch tiles, 1/8 inch joint, 10% waste',
        paragraphs: [
          'The calculator shows 130 tiles. Floor area is 120 sq ft. Coverage is 1.0209 sq ft. The area with 10% waste is 132 sq ft. Tiles before rounding up are 129.29. Tiles with no waste allowance, rounded up, are 118. Boxes to buy are 13 boxes of 10. Boxes if you skip the waste allowance are 12. The last box is full.',
          'Set the grout joint to 0 and keep everything else. Coverage becomes 1 sq ft, the unrounded count becomes 132, and the headline becomes 132 tiles, which is 14 boxes with 8 spare. The joint saved two tiles and one box on this particular floor. It will not save a box on every floor. A count of 121 tiles with a joint and 120 without would still be 13 boxes of 10 either way. Read the box line, not just the tile line, when the box is what you pay for.'
        ]
      },
      {
        title: 'The same floor in 12 by 24 inch tiles',
        paragraphs: [
          'Tile length 12, tile width 24, grout 0.125, waste 10, and 8 tiles per box. The calculator shows 65 tiles. Coverage is 2.0314 sq ft. Tiles before rounding up are 64.98. Without waste the rounded count is 60. Boxes to buy are 9 boxes of 8, and the spare in the last box is 7. Skipping waste would be 8 boxes exactly.',
          'The floor did not change. The tile did. 130 of the 12 inch squares and 65 of the 12 by 24 rectangles are not a coincidence of the waste percentage. The larger tile covers almost twice the area, 2.0314 against 1.0209, and 130 divided by that ratio is about 65. The box size changed too, from 10 to 8, so the spare tiles are not comparable. A store that sells the rectangle in boxes of 10 would show a different box count for the same 65 tiles. Type the count printed on the box you are holding.'
        ]
      },
      {
        title: 'Small mosaics, and a floor that is already a fraction',
        paragraphs: [
          'An 8 by 10 foot floor is 80 square feet. Six inch tiles, a 1/8 inch joint, 15% waste, and 24 tiles per box produce 354 tiles. Coverage is 0.2605 sq ft. The area with waste is 92 sq ft, and the unrounded count is 353.13. Without waste the rounded count is 308 tiles, which is 13 boxes. With waste it is 15 boxes, and 6 tiles in the last box are spare. Fifteen percent is a judgment for cuts around a toilet, a vanity, and a closet. A clear rectangular floor often does not need that much. The form accepts it because you typed it. It does not know the room has fixtures.',
          'A 5 by 5 foot closet, 12 inch tiles, a 1/8 inch joint, and 0% waste shows 25 tiles from an unrounded 24.49. Three boxes of 10 leave 5 spare. The round-up from 24.49 to 25 is the only extra. If the closet door eats a tile’s worth of cuts, 0% waste is the assumption that fails, not the coverage formula. Raise the waste field. Do not stretch the room dimensions to hide the cuts, because that also stretches the open floor that did not need a cut.'
        ]
      }
    ],
    table: {
      heading: 'Tile counts for rectangular floors',
      caption: 'Each row is what this calculator displays. Grout is in inches. Coverage includes the joint. Tiles and boxes are rounded up after the waste allowance. The no-waste tile count is rounded up as well.',
      headers: ['Floor', 'Tile', 'Grout', 'Waste', 'Tiles', 'Boxes', 'Tiles, no waste'],
      rows: [
        ['10 × 12 ft', '12 × 12 in', '0.125', '10%', '130', '13 of 10', '118'],
        ['10 × 12 ft', '12 × 12 in', '0', '10%', '132', '14 of 10', '120'],
        ['10 × 12 ft', '12 × 24 in', '0.125', '10%', '65', '9 of 8', '60'],
        ['8 × 10 ft', '6 × 6 in', '0.125', '15%', '354', '15 of 24', '308'],
        ['5 × 5 ft', '12 × 12 in', '0.125', '0%', '25', '3 of 10', '25']
      ]
    },
    limitsHeading: 'What a rectangular tile count leaves out',
    limits: [
      'The floor is a rectangle. A bay window, a diagonal closet, and an L-shaped room are two rectangles added together, or a sketch you measure yourself. The form will not subtract an island you are tiling around. Measure the floor that receives tile, including the area under a future appliance if you will tile there, and leave out the area you will not. Niches and shower floors are separate small counts. Mixing them into the room length overstates the field tile and still does not count the niche.',
      'The grout model is a straight grid. A herringbone or a diagonal layout cuts more tiles, and a pattern with a repeat has to finish on the repeat, not merely cover the square footage. Raise the waste allowance for those layouts. Ten percent is a common starting figure for a straight set with ordinary cuts. It is not a rule. Tiles sold by the piece, rather than by the box, still use the tile headline. Set the box size to 1 if you want the box line to match the tile line. A box size of 10 when the shelf pack is 16 will tell you to buy the wrong number of cartons.',
      'Nothing in the formula knows the thickness of the tile, the thinset under it, or the grout you need in pounds. Coverage here is the face of the tile plus the joint, which is the count of pieces. A bag of grout is sold against joint width, joint depth, and the linear feet of joint, which this page does not compute. A meter-measured room has to be converted to feet first. The length converter on this site turns metres into feet. It does not know that a 30 centimetre European tile is 11.81 inches rather than 12. Type the inches printed on the carton.',
      'Rounding up can leave a nearly full spare box when the unrounded count is just over a box boundary. The 64.98 tile example becomes 65 and then 9 boxes, with 7 spare. If you are willing to use the waste allowance as the cushion and the unrounded count is only a hundredth over a whole tile, you might decide not to buy the extra box. That is a judgment about breakage. The headline still rounds up, because the calculator cannot see the tiles you already broke in the driveway.'
    ],
    disclaimer: 'This is a piece count for a rectangular floor, not a tile specification or a promise that a particular box will match the layout. Confirm the tile size, the joint, and the carton count on the box you buy.',
    faqs: [
      {
        q: 'How many 12 inch tiles do I need for a 10 by 12 foot floor?',
        a: 'With a 1/8 inch grout joint and 10% waste, this calculator shows 130 tiles, which is 13 boxes of 10. The floor is 120 square feet, one tile covers 1.0209 square feet once the joint is included, and 132 square feet with waste comes to 129.29 tiles before rounding up. Without the waste allowance the rounded count is 118 tiles, or 12 boxes.'
      },
      {
        q: 'Does the floor tile calculator count the grout joint as part of the tile?',
        a: 'Yes. The joint is added to the length and the width before the area is divided by 144. A 12 inch tile with a 1/8 inch joint covers 1.0209 square feet, not 1. Set the joint to 0 and the same 10 by 12 floor with 10% waste needs 132 tiles instead of 130. The joint is not a substitute for the waste percentage. Waste is a separate field for cuts and breakage.'
      },
      {
        q: 'Why does a 12 by 24 tile on that floor need 65 tiles and 9 boxes?',
        a: 'The same 120 square feet, 1/8 inch joint, and 10% waste produce an unrounded count of 64.98 because one tile covers 2.0314 square feet. Rounded up, that is 65 tiles. Boxes of 8 round 65 up to 9 boxes, with 7 spare. Without waste the count is 60 tiles and 8 boxes exactly. Type the number of tiles printed on your box. A box of 10 would not be 9 boxes.'
      },
      {
        q: 'How many 6 inch tiles cover an 8 by 10 foot floor?',
        a: 'With a 1/8 inch joint and 15% waste, the calculator shows 354 tiles, or 15 boxes of 24, with 6 spare. Coverage is 0.2605 square feet and the unrounded count is 353.13. Without waste the rounded count is 308 tiles and 13 boxes. Fifteen percent is what you type for a floor with a lot of cuts. A plain rectangle may not need it.'
      },
      {
        q: 'Can I use this tile count for paint or a concrete slab?',
        a: 'No. Paint is square feet of wall divided by coverage per gallon, on the room paint page. A 12 by 10 foot room there is a gallon question, not a tile question. Concrete is cubic feet from a thickness in inches, on the slab page. This form has no thickness and no gallon. It also does not convert metres. Convert the room to feet first, and type the tile’s inch size from the carton.'
      }
    ],
    relatedLinks: [
      { slug: 'room-paint-calculator', label: 'Room paint calculator', note: 'Gallons from wall area. A 12 by 10 foot room there is not the 130 tiles this 10 by 12 floor needs.' },
      { slug: 'concrete-slab-calculator', label: 'Concrete slab calculator', note: 'Bags and cubic yards from a thickness. Tile is a count of pieces, not a volume.' },
      { slug: 'length-converter', label: 'Length converter from meters', note: 'Convert a metric room to feet before you type the length and width. Tile size stays in inches.' },
      { slug: 'mulch-calculator', label: 'Mulch calculator', note: 'Cubic feet of a bed at a depth in inches. A different material and a different unit from a tile count.' }
    ]
  },
  'fuel-economy-converter': {
    title: 'Fuel Economy Converter: US mpg, UK mpg, and L/100 km | ClearCalc',
    h1: 'US mpg, UK mpg, and Litres per 100 km',
    description: 'Convert US miles per gallon, UK miles per gallon, and litres per 100 km with the exact gallon sizes. 30 US mpg is 7.84 L/100 km, not 30 UK mpg.',
    intro: [
      'This fuel economy converter turns one figure into the other two units a driver in the United States, the United Kingdom, Canada, or Australia is likely to meet. Enter a number and say whether it is US miles per gallon, UK miles per gallon, or litres per 100 kilometres. The sample is 30 US mpg. The headline is 7.84 L/100 km. The same car is 36.03 miles per imperial gallon. The length converter on this site multiplies metres by a foot factor. It does not know about gallons. This page does not convert a distance. It converts a rate of fuel use.',
      'The trap is that “miles per gallon” names two gallons. A US gallon is exactly 231 cubic inches. With the inch defined as 0.0254 metres, that gallon is 3.785411784 litres. An imperial gallon, the one UK fuel economy still uses, is exactly 4.54609 litres. The imperial gallon is larger, so the same car posts a higher mpg number in Britain than it does in the United States. Thirty US mpg and 30 UK mpg are not the same consumption. Thirty UK mpg is 9.42 L/100 km. Canada and Australia publish litres per 100 km, where a larger number is thirstier. The United States publishes mpg, where a larger number is more frugal. Reading either scale backwards is how a “good” figure becomes a bad one.'
    ],
    steps: [
      'Enter the figure you already have. The sample, 30, is a fuel-economy number, not a distance and not a price per gallon.',
      'Choose the unit that figure is in: US miles per gallon, UK miles per gallon, or litres per 100 km. The sample is the US gallon.',
      'Press Calculate. If you started from either mpg, the headline is litres per 100 km. If you started from litres per 100 km, the headline is US mpg.',
      'Read all three lines under the headline before you compare a US window sticker with a UK brochure or a Canadian EnerGuide label. The line after the starting figure shows what the same digits would mean in the other gallon.'
    ],
    howHeading: 'How mpg becomes litres per 100 km',
    howItWorks: [
      'Litres per 100 km equals the litres in the gallon, times 100, divided by mpg times the kilometres in a mile. The mile is the international mile, 1.609344 kilometres, the same mile the 5K pace page uses. For a US gallon that quotient at 1 mpg is about 235.214583. The calculator does not round the constant first. Thirty US mpg divides out to 7.840457 before rounding, and the display shows 7.84. The UK figure uses 4.54609 litres instead of 3.785411784, so the 1 mpg constant is larger, about 282.480936. Thirty UK mpg divides out to a figure the display shows as 9.42.',
      'Going the other way divides the same constant by the L/100 km figure. The sample’s 7.84 L/100 km converts back to 30.00 US mpg and 36.03 UK mpg. That return trip works because 7.84 was already the rounded US result. A figure you measured independently, such as 8.00 L/100 km, is 29.40 US mpg and 35.31 UK mpg. It will not land on a whole number of miles per gallon, and the calculator does not force it to. Six and a half litres per 100 km, a figure you might see on an Australian label, is 36.19 US mpg and 43.46 UK mpg. The display writes the 6.5 you typed as 6.50, so the unit line is unambiguous.',
      'The same digits in the wrong gallon are a different car. Thirty US mpg is 7.84 L/100 km. Thirty UK mpg is 9.42 L/100 km. The gap is 1.58 litres per 100 km, which is the whole difference between the two gallons: the imperial gallon holds 4.54609 / 3.785411784, or about 1.201, times as much fuel. A UK brochure that says 40 mpg is 7.06 L/100 km and 33.31 US mpg. A US window sticker that says 40 mpg is 5.88 L/100 km and 48.04 UK mpg. Treating the US 40 as if it were imperial makes the car look thirstier than it is, at 7.06 L/100 km instead of 5.88. Treating the UK 40 as if it were American makes the car look more frugal than it is.',
      'Fifty US mpg, a common hybrid claim, is 4.70 L/100 km and 60.05 UK mpg. The same digits read as UK mpg would be 5.65 L/100 km, not 4.70. None of these conversions includes the price of fuel, a tank size, or a trip distance. A car that uses 7.84 litres per 100 km uses 7.84 litres to travel 100 km, which is 62.14 miles. The page does not multiply that by a fuel price. The length converter will turn a trip distance from metres into miles if you need the distance first. It will not turn the mpg into a fuel cost either.'
    ],
    formula: '1 US gallon = 231 cubic inches = 3.785411784 litres\n1 imperial gallon = 4.54609 litres\n1 mile = 1.609344 kilometres\nL/100 km from US mpg = 3.785411784 × 100 / (mpg × 1.609344)\nL/100 km from UK mpg = 4.54609 × 100 / (mpg × 1.609344)\nUS mpg from L/100 km = 3.785411784 × 100 / (L/100 km × 1.609344)\nUK mpg from L/100 km = 4.54609 × 100 / (L/100 km × 1.609344)\nUK mpg = US mpg × 4.54609 / 3.785411784\nThe headline and the detail lines show two decimal places.',
    formulaNotes: [
      'The US-gallon constant often appears in print as 235.215. This page does not round the constant first. It divides the exact litre and mile definitions and then rounds the result to two decimal places. Thirty US mpg is 7.840457 before that rounding, so the headline 7.84 is the nearest hundredth, not a truncated 7.84 from 7.849. Fifty US mpg is 4.704292, which displays as 4.70.',
      'Reversing a rounded headline can miss the original by a hundredth. Start from 7.84 L/100 km and the US result is 30.00 mpg, because 7.84 was this tool’s own rounding of 30. Start from a published 7.8 L/100 km, which has already been rounded by someone else, and the US mpg will not be exactly 30. The detail line “started from” shows the figure after it has been formatted, so 6.5 litres is shown as 6.50 L/100 km. The arithmetic uses the number you typed, not a second rounding of that line.'
    ],
    examplesHeading: 'Worked fuel-economy conversions',
    examples: [
      {
        title: '30 miles per US gallon',
        paragraphs: [
          'Choose US miles per gallon and enter 30. The headline is 7.84 L/100 km. The detail lines are 30.00 US mpg, 36.03 UK mpg, and 7.84 litres per 100 km. The warning line says the same digits read as UK mpg would be 9.42 L/100 km. That 9.42 figure is a different car. It is what 30 imperial mpg consumes. It is not a second estimate of the US car.',
          'Enter 7.84 and choose litres per 100 km. The headline flips to 30.00 US mpg, and the UK line is 36.03 again. The two directions agree at this hundredth. They agree because the converter rounded 30 US mpg to 7.84 and 7.84 converts back inside the same hundredth. A sticker that prints 7.8, or 7.840, can land a hundredth away. Compare the unit before you compare the digits.'
        ]
      },
      {
        title: 'The same “40 mpg” in each country',
        paragraphs: [
          'Forty US mpg shows 5.88 L/100 km and 48.04 UK mpg. The warning line says those same digits read as UK mpg would be 7.06 L/100 km. Run that case directly: enter 40 and choose UK miles per gallon. The headline is 7.06 L/100 km, the US line is 33.31, and the UK line stays 40.00. One brochure number has become two cars, 1.18 litres per 100 km apart.',
          'The imperial gallon is the reason the UK mpg number is the larger one for a given car. Forty US mpg is 48.04 UK mpg, not 40 and not 33.31. The smaller US gallon makes the American mpg number look worse. A driver moving from Houston to Manchester who keeps the US number and calls it “mpg” on a UK forum has understated the imperial figure. A driver moving the other way who keeps the UK number has overstated the US figure. The three lines exist so that handoff does not depend on memory.'
        ]
      },
      {
        title: 'An Australian 6.5 L/100 km, and a 50 mpg hybrid claim',
        paragraphs: [
          'Enter 6.5 and choose litres per 100 km. The headline is 36.19 US mpg. The UK line is 43.46, and the litre line displays 6.50. The warning line says 6.50 L/100 km is 36.19 on a US gallon and 43.46 on an imperial gallon, and that those mpg figures are not interchangeable. Eight litres per 100 km, a rounder comparison figure, is 29.40 US mpg and 35.31 UK mpg. Both litre figures are thirstier as the number rises. Both mpg figures are thirstier as the number falls. The converter does not invert that relationship for you beyond showing all three.',
          'Enter 50 and choose US miles per gallon. The headline is 4.70 L/100 km, and the UK line is 60.05. The same digits read as UK mpg would be 5.65 L/100 km. A hybrid claim printed as “50 mpg” in a US advertisement is the 4.70 figure. The same claim printed in a UK advertisement would be the 5.65 figure, which is a thirstier car. The page does not know which advertisement you saw. The unit menu is that decision. It also does not know whether the test cycle was a laboratory figure or a trip you measured. The arithmetic is the same either way. The real-world gap between a test cycle and a commute is outside the gallon definition.'
        ]
      }
    ],
    table: {
      heading: 'The same fuel use in three units',
      caption: 'Each row is what this calculator displays when you start from the unit in the first column. US mpg uses the 3.785411784 litre gallon. UK mpg uses the 4.54609 litre gallon. Larger mpg is more frugal. Larger L/100 km is thirstier.',
      headers: ['Start', 'US mpg', 'UK mpg', 'L/100 km'],
      rows: [
        ['30 US mpg', '30.00', '36.03', '7.84'],
        ['30 UK mpg', '24.98', '30.00', '9.42'],
        ['40 US mpg', '40.00', '48.04', '5.88'],
        ['40 UK mpg', '33.31', '40.00', '7.06'],
        ['50 US mpg', '50.00', '60.05', '4.70'],
        ['6.50 L/100 km', '36.19', '43.46', '6.50'],
        ['8.00 L/100 km', '29.40', '35.31', '8.00']
      ]
    },
    limitsHeading: 'What this fuel-economy conversion leaves out',
    limits: [
      'The page converts a rate. It does not compute the fuel for a trip, the cost of a tank, or the range from a given tank size. To get litres for a journey you still multiply L/100 km by the kilometres and divide by 100. To get gallons you divide those litres by the gallon you buy, which is the US gallon in the United States and the imperial gallon in the United Kingdom. Canadian and Australian pumps sell litres, so the L/100 km line is already in the unit on the pump. Mixing a US mpg with a price per imperial gallon, or a UK mpg with a price per US gallon, puts the wrong gallon on both sides of the cost.',
      'Laboratory test cycles differ by country and by year. A US window-sticker mpg, a WLTP figure converted into UK mpg, and an Australian L/100 km from a different cycle are not the same experiment even after the units match. This converter makes the units comparable. It does not make the test cycles comparable. A figure you computed from your own trip, distance divided by fuel added, is the figure the arithmetic expects. Whether that trip included a roof box, a cold start, or a tailwind is not in the form.',
      'Older UK publications sometimes used miles per imperial gallon while a reader in the United States assumed the smaller gallon. Older Canadian publications sometimes used miles per imperial gallon as well, before litres per 100 km became the usual label. If a source does not say which gallon, the two results on this page are the range of that ambiguity, not a single answer. The length converter remains the tool for metres, feet, and kilometres of distance. A pace in minutes per mile is the 5K page. Neither of those pages divides by a gallon.',
      'Very small inputs are still divided. A typo of 3 instead of 30 US mpg produces a huge L/100 km and is mathematically valid. The form rejects zero and negative numbers because a rate of fuel use has to be above zero. It does not reject a number that is merely implausible for a passenger car. Electric vehicles quoted in miles per kilowatt-hour or watt-hours per kilometre are a different rate. There is no gallon in that conversion, and this page will not invent one.'
    ],
    disclaimer: 'This converter applies the exact US gallon, imperial gallon, and international mile to a fuel-economy rate you typed. It is not a test-cycle rating, a fuel-cost quote, or a vehicle specification.',
    faqs: [
      {
        q: 'What is 30 US mpg in litres per 100 km and in UK mpg?',
        a: '30 US mpg is 7.84 L/100 km and 36.03 UK mpg. The US gallon is 3.785411784 litres and the imperial gallon is 4.54609 litres, so the same car earns a higher mpg number in the UK. The same digits read as UK mpg would be 9.42 L/100 km, which is a thirstier rate. Enter 7.84 L/100 km and the converter returns 30.00 US mpg.'
      },
      {
        q: 'Why is 40 US mpg not the same car as 40 UK mpg?',
        a: 'The imperial gallon is about 1.201 times the US gallon. Forty US mpg is 5.88 L/100 km and 48.04 UK mpg. Forty UK mpg is 7.06 L/100 km and 33.31 US mpg. The gap between those two litre figures is 1.18 L/100 km. A larger mpg number means a more frugal car only when both numbers use the same gallon.'
      },
      {
        q: 'How do I convert litres per 100 km to US miles per gallon?',
        a: 'Divide the exact US constant, 3.785411784 × 100 / 1.609344, by the L/100 km figure. Printed tables often round that constant to 235.215 first. This page divides the litre and mile definitions directly, then rounds the answer. Eight litres per 100 km is 29.40 US mpg and 35.31 UK mpg. Six and a half litres per 100 km is 36.19 US mpg and 43.46 UK mpg. A larger L/100 km figure is a thirstier car, the opposite direction from mpg.'
      },
      {
        q: 'Does 50 US mpg convert to 50 UK mpg?',
        a: 'No. Fifty US mpg is 4.70 L/100 km and 60.05 UK mpg. Reading those same digits as UK mpg would mean 5.65 L/100 km, not 4.70. A hybrid claim has to say which gallon before the number can be compared with a Canadian or Australian litres-per-100 km label. This page does not adjust for the difference between a laboratory cycle and a commute.'
      },
      {
        q: 'Can this fuel converter price a trip or convert metres to miles?',
        a: 'No. It converts a rate of fuel use among US mpg, UK mpg, and L/100 km. Multiplying by a distance and a price per litre is a separate step, and the price has to use the same gallon or the same litre you converted to. Distance in metres belongs on the length converter. A running pace belongs on the 5K pace page. Neither of those tools divides by a gallon.'
      }
    ],
    relatedLinks: [
      { slug: 'length-converter', label: 'Length converter from meters', note: 'Metres to feet, inches, yards, or kilometres. It does not convert mpg or litres per 100 km.' },
      { slug: '5k-pace-calculator', label: '5K pace calculator', note: 'Minutes per kilometre and per mile from a finish time. A pace is not a fuel-economy rate. The mile is the same 1.609344 kilometre mile.' },
      { slug: 'percentage-calculator', label: 'Percentage calculator', note: 'Useful if you want the gap between two L/100 km figures as a percent after you have converted them here.' }
    ]
  }
};
