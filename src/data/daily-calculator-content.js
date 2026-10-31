export const dailyCalculatorContent = {
  'ohio-paycheck-calculator': {
    title: 'Ohio Paycheck Calculator 2026 (2.75% after $26,050) | ClearCalc',
    h1: 'Ohio Paycheck Calculator for 2026',
    description: 'Estimate a 2026 Ohio paycheck after federal income tax, Ohio nonbusiness tax of $332 plus 2.75% above $26,050, and optional school district and municipal rates.',
    intro: [
      'This Ohio paycheck calculator estimates what is left from 2026 wages after federal income tax, Ohio income tax, a school district rate you type, a municipal rate you type, Social Security, and Medicare. Ohio Revised Code 5747.02, as amended effective 30 September 2025, taxes nonbusiness income of $26,050 or less at zero. Above that line the tax is $332 plus 2.75% of the excess. There is no separate bracket above $100,000 for a taxable year that begins in 2026. The Department of Taxation’s annual-rates page was still showing the 2025 table, including 3.125% above $100,000, when this page was written. The calculator follows the enacted 2026 statute rather than that 2025 table.',
      'The sample is $65,000, single, paid every two weeks, with one Ohio exemption. The school district rate and the municipal rate are left at zero, so the headline is the state-and-federal result. Federal income tax uses the tax year 2026 brackets and standard deduction in IRS Revenue Procedure 2025-32. Social Security is 6.2% up to $184,500, and Medicare is 1.45% of all wages. The result is an annual estimate divided by the number of paychecks. It is not the percentage method in Publication 15-T, and it is not an Ohio IT 1040.'
    ],
    steps: [
      'Enter annual gross wages in dollars. The sample, 65000, means $65,000 for the year, not one paycheck.',
      'Choose Single or Married filing jointly, then a pay frequency. Joint changes the federal brackets and the $32,200 federal standard deduction. It does not open a separate Ohio rate table. Every two weeks means 26 paychecks.',
      'Enter a traditional 401(k) deferral for the year, or leave 0. Then enter the number of Ohio exemptions. The sample is 1. A joint return that claims a spouse uses 2. A person who can be claimed as a dependent uses 0.',
      'Choose the school district base, enter that district’s rate, and enter a municipal rate if the city taxes wages. Leave both rates at 0 when you want the state line alone. Press Calculate.'
    ],
    howHeading: 'How a 2026 Ohio paycheck is estimated',
    howItWorks: [
      'Federal taxable wages are gross wages minus the traditional 401(k) actually applied, then minus the federal standard deduction. For 2026 that deduction is $16,100 for a single filer and $32,200 for married filing jointly. On $65,000 with no deferral, a single filer has $48,900 of federal taxable income and $5,620.00 of federal income tax. Social Security is $4,030.00. Medicare is $942.50. Additional Medicare Tax is $0.00. Those three federal lines match the Texas paycheck at the same wages, because FICA does not depend on the state.',
      'Ohio starts from a different base. This page treats modified adjusted gross income as wages minus the traditional 401(k). It does not apply the Ohio Schedule of Adjustments, so Social Security benefits, business income, and the other Ohio additions and deductions are absent. The personal exemption depends on that modified adjusted gross income. At $40,000 or below it is $2,400. From $40,000.01 through $80,000 it is $2,150. Above $80,000, and below $500,000, it is $1,900. At $500,000 or more the 2026 statute allows no exemption. Those dollar amounts are the indexed figures printed in the 2025 IT 1040 instructions. House Bill 96 suspended a further inflation adjustment for 2026 and lowered the income level at which the exemption disappears from $750,000 to $500,000. On the $65,000 sample the exemption is $2,150, so one exemption leaves Ohio taxable nonbusiness income of $62,850.',
      'Ohio tax on $62,850 is $332 plus 2.75% of $36,800, which is $332 plus $1,012, or $1,344.00. The $332 is the amount the statute charges once taxable income crosses $26,050. At $26,050 or below the tax is $0, so the step is a real cliff, not a smooth 2.75% from the first dollar. Annual take-home on the sample is wages minus federal income tax, Social Security, Medicare, the $1,344.00, and a school district tax and a municipal tax of $0. That is $53,063.50, and the headline is $2,040.90 every two weeks. Texas, with state income tax at $0, has annual take-home of $54,407.50 on these wages. The entire $1,344.00 gap is the Ohio tax. Pennsylvania at 3.07% of the same wages, with the local fields at zero, charges $1,995.50 and has annual take-home of $52,412.00. Ohio is $651.50 higher than that Pennsylvania figure because $1,995.50 minus $1,344.00 is $651.50.',
      'A school district and a city are separate from that state line, and they do not share a base. A traditional school district taxes modified adjusted gross income after exemptions. An earned-income school district taxes wages after the 401(k) and does not subtract the exemption. The municipal line on this page is the rate you type times gross wages, before the 401(k), which is the usual qualifying-wage idea of starting from Medicare wages. Set a rate to 0 if that city or district uses a base this form does not match. At $65,000 with one exemption, a 1% traditional school district tax is $628.50 and a 1% earned-income school district tax is $650.00. The $21.50 gap is 1% of the $2,150 exemption.'
    ],
    formula: 'Tax year 2026. One wage earner. No Ohio Schedule of Adjustments.\nModified adjusted gross income = max(0, wages − traditional 401(k))\nExemption each = $2,400 if that income is $40,000 or less; $2,150 if it is $80,000 or less; $1,900 if it is under $500,000; otherwise $0\nOhio taxable nonbusiness income = max(0, modified adjusted gross income − exemption each × number of exemptions)\nIf that income is $26,050 or less: Ohio tax = $0\nOtherwise: Ohio tax = $332 + 2.75% × (Ohio taxable nonbusiness income − $26,050)\nTraditional school district tax = district rate × Ohio taxable nonbusiness income\nEarned-income school district tax = district rate × modified adjusted gross income\nMunicipal tax = municipal rate × gross wages, before the 401(k)\nFederal tax, Social Security, and Medicare use the 2026 federal paycheck rules on this site\nAnnual take-home = wages − federal income tax − Social Security − Medicare − Additional Medicare Tax − Ohio tax − school district tax − municipal tax − 401(k)\nPaycheck = annual take-home ÷ number of paychecks',
    formulaNotes: [
      'On $65,000 single, a $6,500 traditional 401(k) cuts federal income tax from $5,620.00 to $4,840.00. That $780.00 is 12% of $6,500. Ohio modified adjusted gross income falls to $58,500, the exemption stays $2,150, and Ohio taxable income falls to $56,350. Ohio tax falls from $1,344.00 to $1,165.25, a saving of $178.75. Social Security stays $4,030.00 and Medicare stays $942.50. Annual take-home is $47,522.25, or $1,827.78 every two weeks. A municipal rate does not fall with the deferral. At 2.5% the city line stays $1,625.00 with or without the $6,500. Pennsylvania does the opposite on the state line: the 3.07% tax ignores the deferral. Using the Pennsylvania habit on an Ohio stub understates the federal-and-state saving.',
      'Married filing jointly on the same $65,000, still with one exemption and both local rates at zero, has federal income tax of $3,440.00. Ohio tax stays $1,344.00 because the statute does not have a joint bracket. Annual take-home is $55,243.50, or $2,124.75 every two weeks. The $2,180.00 gap from the single result is entirely federal. Type 2 exemptions if the return claims the spouse as well. Two exemptions are $4,300, Ohio taxable income is $60,700, and Ohio tax is $1,284.88. Annual take-home becomes $55,302.62. The joint filing credit and the $20-per-exemption credit are not subtracted. Both need conditions this one-wage form does not test.'
    ],
    examplesHeading: 'Worked 2026 Ohio paycheck examples',
    examples: [
      {
        title: '$65,000, single, one exemption, no school district or city tax',
        paragraphs: [
          'Federal income tax is $5,620.00, Social Security is $4,030.00, and Medicare is $942.50. The exemption is $2,150. Ohio taxable nonbusiness income is $62,850. Ohio income tax is $1,344.00. School district tax and municipal tax are $0.00. Annual take-home is $53,063.50. The headline is $2,040.90 / two weeks. Dividing the same annual figure by 52 gives $1,020.45 / week. Twenty-six times the two-week headline is $53,063.40, ten cents under the annual line, because each paycheck is rounded on its own.',
          'Illinois at the same wages charges $3,072.71 of state tax after a $2,925 exemption and has annual take-home of $51,334.79. Ohio’s $53,063.50 is $1,728.71 higher. The states are not using the same subtraction: Illinois is 4.95% after its own exemption, and Ohio is the $332 plus 2.75% formula after $26,050. Adding a 1% traditional school district tax to the Ohio sample changes the school line to $628.50 and annual take-home to $52,435.00, or $2,016.73 / two weeks. Switching that 1% district to the earned-income base makes the school line $650.00 and annual take-home $52,413.50.'
        ]
      },
      {
        title: 'The $26,050 cliff, and the exemption step at $80,000',
        paragraphs: [
          'A single filer with one exemption and $28,200 of wages has modified adjusted gross income under $40,000, so the exemption is $2,400. Ohio taxable income is $25,800, which is under $26,050, and Ohio tax is $0.00. Annual take-home is $24,832.70, or $2,069.39 a month. Raise the wages to $28,451. The exemption is still $2,400, but Ohio taxable income is $26,051. Ohio tax becomes $332.03, because the statute adds $332 as soon as the income is greater than $26,050 and then 2.75% of the extra dollar. The result line says the starting amount was included. One extra dollar of taxable income does not cost 2.75 cents. It costs $332.03 on this page.',
          'The exemption tier has a smaller step. At exactly $80,000, single, one exemption, and no local rates, the exemption is still $2,150, Ohio tax is $1,756.50, and annual take-home is $63,353.50. At $80,001 the exemption falls to $1,900. Ohio taxable income rises by $251, not by $1, and Ohio tax is $1,763.40. Annual take-home is $63,347.31. The extra dollar of wages reduces annual cash by $6.19 once federal tax and FICA on that dollar are included. The page does not smooth the tier.'
        ]
      },
      {
        title: '$90,000, $210,000, and a 2.5% city',
        paragraphs: [
          'At $90,000, single, one exemption, and both local rates at zero, modified adjusted gross income is over $80,000, so the exemption is $1,900. Ohio taxable income is $88,100. Ohio tax is $2,038.38. Federal income tax is $10,970.00, Social Security is $5,580.00, and Medicare is $1,305.00. Annual take-home is $70,106.62, or $2,696.41 / two weeks. The 2.75% rate did not step up at $100,000 of Ohio taxable income, because the 2026 statute does not keep the 2025 top bracket.',
          'At $210,000, single, one exemption, and no local tax, Social Security stops at $11,439.00 because wages are over the $184,500 base. Additional Medicare Tax is $90.00. Ohio tax is $5,338.38, which is $332 plus 2.75% of the amount by which $208,100 exceeds $26,050, with the half-cent rounded. Federal income tax is $39,134.00. Annual take-home is $150,953.62, or $5,805.91 / two weeks. A 2.5% municipal rate on the $65,000 sample, with the school district turned off, is $1,625.00. Annual take-home falls from $53,063.50 to $51,438.50, or $1,978.40 / two weeks. The same 2.5% with a $6,500 deferral stays $1,625.00, while Ohio tax falls to $1,165.25. Annual take-home is then $45,897.25. Columbus, Cleveland, and Cincinnati do not all use 2.5%, and a city can define qualifying wages differently. Type the rate for the address, or leave 0.'
        ]
      }
    ],
    table: {
      heading: '2026 Ohio tax at selected wages, single, one exemption',
      caption: 'School district rate and municipal rate are zero. The exemption tier follows modified adjusted gross income. Ohio tax uses $0 through $26,050 of taxable nonbusiness income and $332 plus 2.75% above that. Federal tax and FICA are included in the take-home column. Amounts are what this calculator displays.',
      headers: ['Wages', 'Exemption', 'Ohio taxable income', 'Ohio tax', 'Annual take-home'],
      rows: [
        ['$28,200', '$2,400', '$25,800', '$0.00', '$24,832.70'],
        ['$28,451', '$2,400', '$26,051', '$332.03', '$24,707.37'],
        ['$65,000', '$2,150', '$62,850', '$1,344.00', '$53,063.50'],
        ['$80,000', '$2,150', '$77,850', '$1,756.50', '$63,353.50'],
        ['$90,000', '$1,900', '$88,100', '$2,038.38', '$70,106.62'],
        ['$210,000', '$1,900', '$208,100', '$5,338.38', '$150,953.62']
      ]
    },
    limitsHeading: 'What this Ohio paycheck estimate leaves out',
    limits: [
      'The $20 exemption credit in the 2025 IT 1040 instructions, available when modified adjusted gross income less exemptions is under $30,000, is not subtracted. On the $28,451 example that credit would be $20 if the same rule applies in 2026, and Ohio tax would be $312.03 rather than $332.03. The joint filing credit is also omitted. It requires each spouse to have qualifying income, and this form treats one salary as the only income on the return. Business income, taxed at 3% after its own deduction, is not in the wage formula. School district senior credits, part-year residency, and reciprocal agreements with a neighboring state are not modeled.',
      'A traditional 401(k) reduces federal tax and Ohio tax on this page. It does not reduce the municipal line. A Roth contribution should not be typed into the deferral field, because the form would treat it as pre-tax. Catch-up contributions above the $24,500 elective limit are cut back. A deferral above wages is cut back to wages. The school district rate is whatever you type, up to 10%. The Finder on the Department of Taxation site is the place to confirm a district and whether it uses the traditional base or the earned-income base. This page cannot look up a street address.',
      'Withholding on a real stub can differ because employers use payroll tables, pre-tax health premiums, and local courtesy withholding. Health insurance premiums that are excluded from federal wages are not a field here. If those premiums were already left out of the wage figure you type, do not subtract them again. The Pennsylvania page taxes the deferral. The Illinois page uses a flat 4.95% after a $2,925 exemption. Neither result is an Ohio result with the local rates set to zero.',
      'The calculator does not file an IT 1040 or an SD 100, and it does not decide residency. A nonresident who works in Ohio, or a resident of a school district for only part of the year, needs an allocation this form does not do. Use the annual figure as a planning total, then compare it with the stub.'
    ],
    disclaimer: 'This Ohio paycheck figure is general information for a wage earner, not an IT 1040, an SD 100, a city return, or tax advice. The Department of Taxation, the school district, and the city assess the tax due.',
    faqs: [
      {
        q: 'What Ohio income tax rate does this 2026 paycheck calculator use?',
        a: 'Zero on Ohio taxable nonbusiness income of $26,050 or less, then $332 plus 2.75% of the excess. That is Ohio Revised Code 5747.02(A)(3)(c) for a taxable year beginning in 2026. On $65,000 with one $2,150 exemption the Ohio tax is $1,344.00. The 2025 top rate of 3.125% above $100,000 is not used.'
      },
      {
        q: 'Does a traditional 401(k) reduce Ohio income tax?',
        a: 'Yes on this page. A $6,500 deferral on a $65,000 single wage cuts Ohio tax from $1,344.00 to $1,165.25 and cuts federal income tax from $5,620.00 to $4,840.00. The municipal line does not fall. Pennsylvania’s 3.07% tax does not fall either. Do not type a Roth amount into the deferral field.'
      },
      {
        q: 'Why is Ohio tax $332.03 on $26,051 of taxable income and $0 on $25,800?',
        a: 'The statute imposes no tax when the balance is $26,050 or less, and it imposes $332 plus 2.75% of the excess when the balance is greater. $28,200 of wages with one $2,400 exemption produces $25,800 and $0.00 of Ohio tax. $28,451 produces $26,051 and $332.03. The $20 exemption credit is not subtracted here.'
      },
      {
        q: 'How is a 1% Ohio school district tax different from a 1% city tax?',
        a: 'On $65,000 with one exemption and no 401(k), a 1% traditional school district tax is $628.50 because the exemption is removed first. A 1% earned-income school district tax is $650.00 because the exemption stays in the base. A 2.5% municipal tax on the same wages is $1,625.00 of gross wages, and a 401(k) does not reduce it. Leave a rate at 0 if you do not want that line.'
      },
      {
        q: 'Does married filing jointly change the Ohio 2.75% calculation?',
        a: 'It changes the federal tax, not an Ohio bracket. On $65,000 with one exemption, joint filing cuts federal income tax from $5,620.00 to $3,440.00 and leaves Ohio tax at $1,344.00. Annual take-home rises from $53,063.50 to $55,243.50. Type 2 if the return claims a spouse’s exemption. That second exemption cuts Ohio tax to $1,284.88. A spouse’s own wages are not included.'
      }
    ],
    relatedLinks: [
      { slug: 'pennsylvania-paycheck-calculator', label: 'Pennsylvania paycheck calculator for 2026', note: 'The 3.07% tax ignores a 401(k). At $65,000 single with no local tax, Pennsylvania tax is $1,995.50 and this Ohio tax is $1,344.00.' },
      { slug: 'michigan-paycheck-calculator', label: 'Michigan paycheck calculator for 2026', note: 'A flat 4.25% after a $5,900 exemption. At $65,000 single with one exemption and no city tax, Michigan tax is $2,511.75 and the two-week headline is $1,995.99.' },
      { slug: 'illinois-paycheck-calculator', label: 'Illinois paycheck calculator for 2026', note: 'A 4.95% state tax after a $2,925 exemption. At $65,000 single the Illinois tax is $3,072.71.' },
      { slug: 'texas-paycheck-calculator', label: 'Texas paycheck calculator for 2026', note: 'The same federal and FICA lines at $65,000, with state income tax at $0 and annual take-home of $54,407.50.' },
      { slug: '401k-contribution-calculator', label: '2026 401(k) contribution calculator', note: 'Check a deferral against the $24,500 limit before you type the dollar amount here. The deferral reduces Ohio income tax and not the municipal line.' }
    ]
  },
  'nova-scotia-take-home-pay-calculator': {
    title: 'Nova Scotia Take-Home Pay Calculator 2026 | ClearCalc',
    h1: 'Nova Scotia Take-Home Pay Calculator for 2026',
    description: 'Estimate 2026 Nova Scotia take-home pay after federal tax, Nova Scotia tax from 8.79% to 21%, the $11,932 basic personal amount, CPP, and EI.',
    intro: [
      'This Nova Scotia take-home pay calculator estimates what a resident employee keeps from 2026 employment income after federal income tax, Nova Scotia income tax, Canada Pension Plan contributions, and Employment Insurance. Nova Scotia indexes its brackets by 1.6% for 2026. The rates on the Province of Nova Scotia personal income tax page, and in CRA’s T4032-NS tables for January 2026, are 8.79% to $30,995, 14.95% to $61,991, 16.67% to $97,417, 17.5% to $157,124, and 21% above that. The basic personal amount is $11,932, and it stays at that maximum regardless of income. The sample salary is $70,000.',
      'Federal tax, CPP, and EI use the same 2026 payroll figures as the Saskatchewan, Manitoba, Alberta, Ontario, and British Columbia pages on this site. The lowest federal rate is 14%. The federal basic personal amount is $16,452 until the high-income phase-out begins. Employee CPP is 5.95% of pensionable earnings between $3,500 and the $74,600 year’s maximum pensionable earnings, plus CPP2 of 4% between that ceiling and $85,000. Employee EI is 1.63% up to the $68,900 maximum insurable earnings. The result is an annual tax figure divided by 12. It is not the payroll-deduction table for one pay period, and it is not a T1 return.'
    ],
    steps: [
      'Enter annual gross employment income in Canadian dollars. The sample, 70000, means $70,000 for the year.',
      'Press Calculate. The headline is annual take-home divided by 12 and rounded to the cent.',
      'Read Nova Scotia income tax separately from federal income tax. They are different statutes that happen to be collected together.',
      'Use another province’s page if the income is not Nova Scotia employment income. This form has no province menu.'
    ],
    howHeading: 'How 2026 Nova Scotia take-home pay is estimated',
    howItWorks: [
      'CPP and EI come off the salary before the tax credits are computed, and part of CPP also reduces taxable income. On $70,000 the pensionable earnings are the full salary, the $3,500 basic exemption leaves $66,500 of contributory earnings, and the employee CPP base is $3,291.75. The first additional contribution is $665.00. Together they are $3,956.75. CPP2 is $0 because the salary is under $74,600. EI reaches its annual maximum, $1,123.07. Taxable income for the brackets is $70,000 minus the $665.00 first additional CPP contribution, which is $69,335.00. CPP2 would also be deducted from taxable income. It is not due yet at this salary.',
      'Federal tax on $69,335 is $10,409.68 before credits. The federal credit is 14% of the $16,452 basic personal amount, the $3,291.75 CPP base, the $1,123.07 of EI, and the $1,501 Canada employment amount. That credit is $3,131.49, so federal tax is $7,278.19. The same federal figure appears on the Saskatchewan page at $70,000. Nova Scotia does not change it.',
      'Nova Scotia tax uses the five brackets on $69,335, then subtracts a credit at 8.79%. The credit base is the $11,932 basic personal amount plus the CPP base plus EI, and the credit is $1,436.89. Nova Scotia tax is $7,145.72. Annual take-home is $70,000 minus CPP, EI, federal tax, and Nova Scotia tax, which is $50,496.27. The headline is $4,208.02 / month. Every two weeks is $1,942.16. Saskatchewan tax on the same salary is $4,972.68 and Saskatchewan take-home is $52,669.31. The $2,173.04 gap is the provincial tax: $7,145.72 minus $4,972.68. Manitoba tax is $5,742.67 and Manitoba take-home is $51,899.32. Alberta tax is $3,534.79 and Alberta take-home is $54,107.20. The federal, CPP, and EI lines match. The provincial line does not.',
      'The low-income tax reduction in section 35 of the Nova Scotia Income Tax Act is not applied. The consolidated statute still describes a reduction built from $300 amounts, reduced by 5% of adjusted income over $15,000, and it allows those dollar amounts to be indexed by regulation. At $70,000 the reduction would already have been clawed back, so the sample does not depend on it. A salary near the bottom of the first bracket can owe less provincial tax than this page shows. Spouse, eligible dependant, age, pension, tuition, and medical credits are also omitted. The basic personal amount does not shrink as income rises. That is a 2025 change Nova Scotia carried into 2026, and it is different from the older Nova Scotia amount that phased down.'
    ],
    formula: 'Calendar year 2026. Nova Scotia employment income. One person, basic credits only.\nContributory earnings = min(salary, $74,600) − $3,500, not below zero\nCPP base = 4.95% × contributory earnings\nCPP first additional = 1% × contributory earnings\nCPP2 = 4% × the slice from $74,600 to min(salary, $85,000), capped at $416\nEI = 1.63% × min(salary, $68,900), capped at $1,123.07\nTaxable income = salary − CPP first additional − CPP2\nFederal tax = 2026 federal brackets − 14% × (federal basic personal amount + CPP base + EI + Canada employment amount)\nNova Scotia tax = Nova Scotia brackets − 8.79% × ($11,932 + CPP base + EI), not below zero\nBrackets: 8.79% to $30,995; 14.95% to $61,991; 16.67% to $97,417; 17.5% to $157,124; 21% above\nAnnual take-home = salary − CPP base − CPP first additional − CPP2 − EI − federal tax − Nova Scotia tax\nMonthly headline = annual take-home ÷ 12\nThe low-income tax reduction is not applied.',
    formulaNotes: [
      'At $40,000 the same structure produces federal tax of $2,691.25, Nova Scotia tax of $2,751.19, CPP of $2,171.75, and EI of $652.00. Annual take-home is $31,733.81, or $2,644.48 / month. The basic personal amount is still $11,932. The provincial credit is $1,264.95 because CPP and EI are smaller than they are at $70,000, so the 8.79% credit is smaller. Taxable income is still inside the 14.95% bracket, which starts at $30,995.',
      'At $100,000, CPP has reached the first ceiling and CPP2 is due, for combined employee CPP of $4,646.45. EI remains $1,123.07. Federal tax is $13,301.60. Nova Scotia tax is $12,061.78. Annual take-home is $68,867.10, or $5,738.93 / month. At $160,000 the salary is past the $157,124 threshold, so part of taxable income is in the 21% bracket. Nova Scotia tax is $22,622.99 and annual take-home is $103,705.35, or $8,642.11 / month. The Nova Scotia basic personal amount is still $11,932. The federal basic personal amount on that salary is still $16,452. It has started to fall by $200,000, where this page shows $16,084.75.'
    ],
    examplesHeading: 'Worked 2026 Nova Scotia pay examples',
    examples: [
      {
        title: '$70,000 of employment income',
        paragraphs: [
          'Federal income tax is $7,278.19. Nova Scotia income tax is $7,145.72. CPP, including the first additional contribution and no CPP2, is $3,956.75. EI is $1,123.07. Annual take-home is $50,496.27. The headline is $4,208.02 / month, and the two-week line is $1,942.16. Twelve times the monthly headline is $50,496.24, three cents under the annual line, because the headline is rounded on its own.',
          'Put the same $70,000 into the Saskatchewan calculator and the federal, CPP, and EI lines do not move. Saskatchewan tax is $4,972.68, so Saskatchewan keeps $2,173.04 more for the year. Alberta keeps $54,107.20, which is $3,610.93 more than Nova Scotia. Manitoba keeps $51,899.32, which is $1,403.05 more. The ranking is the provincial tax. It is not a different CPP rate.'
        ]
      },
      {
        title: '$40,000, still inside the second Nova Scotia bracket',
        paragraphs: [
          'Federal tax is $2,691.25 and Nova Scotia tax is $2,751.19. CPP is $2,171.75 and EI is $652.00. Annual take-home is $31,733.81, or $2,644.48 / month. The provincial credit at 8.79% is $1,264.95, not the $1,436.89 credit at $70,000, because the CPP and EI amounts inside the credit are smaller.',
          'The low-income tax reduction is still not applied. At $40,000 it would not change the result if the clawback has already finished near $21,000, which is the shape described in published 2026 combined-rate tables. A much lower wage can be different. This page will overstate Nova Scotia tax for an eligible person whose adjusted income is still inside that clawback. It will not invent a spouse or a child to enlarge the reduction.'
        ]
      },
      {
        title: '$100,000, where CPP2 starts, and $160,000 in the 21% bracket',
        paragraphs: [
          'At $100,000, employee CPP including CPP2 is $4,646.45 and EI is $1,123.07. Federal tax is $13,301.60. Nova Scotia tax is $12,061.78. The 17.5% bracket contains the taxable income here; the 21% bracket has not started. Annual take-home is $68,867.10, or $5,738.93 / month. The Nova Scotia credit is $1,456.90. It stopped rising with EI once EI hit the annual maximum, and CPP base has also reached its own maximum.',
          'At $160,000, federal tax is $27,902.14 and Nova Scotia tax is $22,622.99. CPP and EI do not rise further. Annual take-home is $103,705.35, or $8,642.11 / month. Part of the Nova Scotia calculation is now at 21%, the rate that applies above $157,124. Saskatchewan’s top rate on a salary in this range is 14.5%, and its brackets are not these brackets. Do not subtract the Saskatchewan tax from a Nova Scotia salary.'
        ]
      }
    ],
    table: {
      heading: '2026 Nova Scotia take-home pay at selected salaries',
      caption: 'Employment income only, basic personal amount, CPP, and EI. No spouse, dependant, age, or tuition credit. The low-income tax reduction is not applied. Each figure is what this calculator displays. Federal tax matches the other provincial pages on this site when the salary matches.',
      headers: ['Salary', 'Federal tax', 'Nova Scotia tax', 'CPP including CPP2', 'Annual take-home', 'Monthly'],
      rows: [
        ['$40,000', '$2,691.25', '$2,751.19', '$2,171.75', '$31,733.81', '$2,644.48'],
        ['$70,000', '$7,278.19', '$7,145.72', '$3,956.75', '$50,496.27', '$4,208.02'],
        ['$100,000', '$13,301.60', '$12,061.78', '$4,646.45', '$68,867.10', '$5,738.93'],
        ['$160,000', '$27,902.14', '$22,622.99', '$4,646.45', '$103,705.35', '$8,642.11']
      ]
    },
    limitsHeading: 'What this Nova Scotia estimate leaves out',
    limits: [
      'The low-income tax reduction can wipe out Nova Scotia tax for an eligible resident and then claw it back. This page never subtracts it. Credits for a spouse, an eligible dependant, age, pension income, disability, tuition, medical expenses, and charitable donations are omitted as well. A person who claims any of those will owe less provincial tax, and sometimes less federal tax, than the figure here. The calculator also assumes the whole salary is taxed in Nova Scotia. Income earned in another province is allocated on the return. This form does not allocate it.',
      'Payroll tables can differ by a few dollars from an annual calculation because of claim codes, rounding on each cheque, and bonuses. CPP and EI in this result are the annual employee amounts, not a year-to-date balance from a stub that has already hit a ceiling. Quebec employees pay QPP and a different employment insurance rate. Do not use this Nova Scotia page for Quebec. Self-employment income does not have employee EI in the same way, and the CPP calculation for a self-employed person includes both shares. Type employment income only.',
      'The federal basic personal amount falls once net income is above $181,440. At $200,000 this page shows $16,084.75 rather than $16,452. The Nova Scotia amount stays $11,932. There is no Nova Scotia health premium on this page. Ontario’s calculator adds the Ontario Health Premium. British Columbia can reduce provincial tax with the B.C. tax reduction. Neither of those adjustments belongs on a Nova Scotia salary.',
      'Nothing here is a pay stub, a TD1NS, or advice about how many credits to claim. Confirm the bracket and the basic personal amount against the province’s 2026 table if a later budget changes them. The numbers above are the indexed 2026 figures published by Nova Scotia and used in the CRA payroll guide for that year.'
    ],
    disclaimer: 'This Nova Scotia figure is general information for an employee with basic credits, not a T1, a payroll filing, or tax advice. The Canada Revenue Agency and the province assess the tax.',
    faqs: [
      {
        q: 'What are the 2026 Nova Scotia income tax brackets on this page?',
        a: '8.79% to $30,995, 14.95% to $61,991, 16.67% to $97,417, 17.5% to $157,124, and 21% above $157,124. The basic personal amount is $11,932, credited at 8.79% together with the CPP base contribution and EI. At $70,000 that credit is $1,436.89 and Nova Scotia tax is $7,145.72.'
      },
      {
        q: 'Why is Nova Scotia take-home pay lower than Saskatchewan at $70,000?',
        a: 'Federal tax, CPP, and EI match: $7,278.19, $3,956.75, and $1,123.07. Saskatchewan tax is $4,972.68 and Nova Scotia tax is $7,145.72. Annual take-home is $52,669.31 in Saskatchewan and $50,496.27 in Nova Scotia. The $2,173.04 gap is the provincial tax.'
      },
      {
        q: 'Does the $11,932 Nova Scotia basic personal amount shrink at a high salary?',
        a: 'Not in this calculator, and not in the 2026 rule it uses. It stays $11,932 at $40,000, at $70,000, and at $160,000. The federal basic personal amount is a different figure. It is $16,452 on those three salaries and $16,084.75 at $200,000, where the federal phase-out has started.'
      },
      {
        q: 'Is the Nova Scotia low-income tax reduction included?',
        a: 'No. Section 35 can reduce provincial tax for an eligible person and then claws the reduction back as income rises. At the $70,000 sample the reduction would already be gone, so the headline does not depend on it. A wage still inside the clawback can owe less Nova Scotia tax than this page shows.'
      },
      {
        q: 'Does this Nova Scotia calculator include CPP2?',
        a: 'Yes when the salary passes $74,600. At $70,000 CPP2 is $0 and employee CPP is $3,956.75. At $100,000 employee CPP including CPP2 is $4,646.45. EI stays capped at $1,123.07 once insurable earnings pass $68,900. Those are the same ceilings as the other provincial pages on this site.'
      }
    ],
    relatedLinks: [
      { slug: 'saskatchewan-take-home-pay-calculator', label: 'Saskatchewan take-home pay calculator for 2026', note: 'Same federal tax, CPP, and EI at $70,000. Saskatchewan tax is $4,972.68 rather than this $7,145.72.' },
      { slug: 'new-brunswick-take-home-pay-calculator', label: 'New Brunswick take-home pay calculator for 2026', note: 'Same federal tax, CPP, and EI at $70,000. New Brunswick tax is $5,600.17 rather than this $7,145.72, and the monthly headline is $4,336.82.' },
      { slug: 'manitoba-take-home-pay-calculator', label: 'Manitoba take-home pay calculator for 2026', note: 'Same federal pieces. Manitoba tax is $5,742.67 and annual take-home is $51,899.32.' },
      { slug: 'alberta-take-home-pay-calculator', label: 'Alberta take-home pay calculator for 2026', note: 'Same federal pieces. Alberta tax is $3,534.79 and annual take-home is $54,107.20.' },
      { slug: 'ontario-take-home-pay-calculator', label: 'Ontario take-home pay calculator for 2026', note: 'Same federal payroll system, plus Ontario tax and the Ontario Health Premium. Not this Nova Scotia bracket.' }
    ]
  },
  'scotland-lbtt-calculator': {
    title: 'Scotland LBTT Calculator 2026 (Residential) | ClearCalc',
    h1: 'Scotland LBTT Calculator for 2026',
    description: 'Estimate 2026 residential Land and Buildings Transaction Tax in Scotland, including first-time buyer relief of up to £600 and the 8% additional dwelling supplement.',
    intro: [
      'This Scotland LBTT calculator estimates Land and Buildings Transaction Tax on a residential purchase. The price is sliced across bands. You do not pay one rate on the whole price. The Scottish Budget for 2026 to 2027 left the residential bands where they were: 0% to £145,000, 2% to £250,000, 5% to £325,000, 10% to £750,000, and 12% above that. First-time buyer relief raises the nil-rate band from £145,000 to £175,000, which is worth up to £600. An additional dwelling pays those standard slices and then the additional dwelling supplement, 8% of the whole price, for a transaction on or after 5 December 2024.',
      'The sample is a £250,000 purchase that replaces a main home. The calculator shows £2,100.00. The same price in England, on the Stamp Duty Land Tax page, is £2,500.00, because England’s nil-rate band ends at £125,000 rather than £145,000. The same price in Wales is £1,500.00 of main-rate Land Transaction Tax, because the Welsh nil-rate band runs to £225,000. The three taxes are different statutes. This page does not calculate SDLT or LTT. The headline rounds the total down to the nearest pound, which is what the LBTT return asks for. The lines under the headline keep the pence before that rounding.'
    ],
    steps: [
      'Enter the chargeable consideration in pounds. The sample, 250000, means a £250,000 purchase price. Do not enter the deposit alone.',
      'Choose the buyer. “Replacing your main home” uses the standard residential bands and does not add the supplement. “First-time buyer” subtracts the relief, up to £600. “Additional dwelling” adds 8% of the price when the price is £40,000 or more.',
      'Press Calculate. The headline is the LBTT in pounds, rounded down. The lines under it show the tax before the supplement, the supplement itself, and the standard tax with no first-time buyer relief.',
      'If you are replacing a main home, do not choose the additional-dwelling row just because you owned a home in the past. The supplement is about what you own at the end of the day, under the Revenue Scotland rules, not about having bought before.'
    ],
    howHeading: 'How 2026 residential LBTT is sliced',
    howItWorks: [
      'Standard residential LBTT is £0 on the first £145,000, 2% on the next £105,000 (the slice from £145,000 to £250,000), 5% on the next £75,000 (up to £325,000), 10% on the next £425,000 (up to £750,000), and 12% on anything above £750,000. A £250,000 purchase uses only the first two slices: £0 plus 2% of £105,000, which is £2,100. A £300,000 purchase adds 5% of £50,000, which is £2,500, for a total of £4,600. A £400,000 purchase adds 10% of the £75,000 above £325,000, which is £7,500, for a total of £13,350. The effective rate is that tax divided by the price. On £250,000 it is 0.84%, well below the 2% band the price just reached, because the first £145,000 was free.',
      'First-time buyer relief is not a separate rate card with its own upper cliff. Revenue Scotland describes it as tax not being charged on the first £175,000. In arithmetic that is the standard calculation minus 2% of the slice between £145,000 and £175,000, and that slice is at most £30,000, so the relief is at most £600. At £150,000 the ordinary tax is £100 and the relief wipes it out. At £175,000 the ordinary tax is £600 and the relief wipes that out too. At £200,000 the ordinary tax is £1,100 and the relief is still £600, so the tax is £500. At £400,000 the ordinary tax is £13,350 and the relief is still £600, so the tax is £12,750. There is no £500,000 price at which the entire relief disappears. England’s first-time buyer relief does have that cliff. This Scottish relief does not.',
      'The additional dwelling supplement is not a higher set of slices. It is 8% of the consideration, added to the ordinary LBTT, when the price is £40,000 or more. At £250,000 the ordinary tax is £2,100 and the supplement is £20,000, so the headline is £22,100. At £300,000 the ordinary tax is £4,600 and the supplement is £24,000, so the headline is £28,600. At £40,000 the ordinary tax is £0 and the supplement is £3,200. At £39,999 the supplement is not charged. First-time buyer relief is not available on a transaction the supplement applies to, and this form does not try to combine them. If you sell a previous main home later and claim a repayment of the supplement, that repayment is a later event. The calculator will not reserve it.',
      'Pence are dropped once, on the total. A price of £145,001 produces 2% of £1, which is £0.02, and the headline is £0.00. A price of £145,050 produces £1.00, which survives the rounding. Whole-pound examples such as £250,000 are already on a pound, so the headline and the detail line match. Scotland does not add the 2 percentage point non-UK resident surcharge that SDLT can add. Do not lift these bands by 2 points because a buyer lives outside the UK.'
    ],
    formula: 'Residential LBTT, rates in the Scottish Budget 2026 to 2027 ready reckoner. Consideration in pounds.\nStandard slices:\n  0% to £145,000\n  2% on £145,000.01 to £250,000\n  5% on £250,000.01 to £325,000\n  10% on £325,000.01 to £750,000\n  12% above £750,000\nFirst-time buyer relief = 2% of the part of the price that falls between £145,000 and £175,000, and never more than £600\nFirst-time buyer LBTT = standard LBTT − that relief, not below zero\nAdditional dwelling supplement = 8% of the price when the price is £40,000 or more; otherwise £0\nThe supplement is added to standard LBTT. It is not combined with first-time buyer relief.\nHeadline = the total, rounded down to the nearest pound\nEffective rate = headline ÷ price',
    formulaNotes: [
      'A £450,000 standard purchase is £2,100 on the slice up to £250,000, £3,750 on the £75,000 taxed at 5%, and £12,500 on the £125,000 taxed at 10%. The total is £18,350, an effective rate of 4.08%. The England SDLT page shows £12,500 on the same price for someone replacing a main home. Scotland is £5,850 higher there because the 10% band starts at £325,000 in Scotland and at £925,000 in England. At £250,000 the comparison runs the other way: £2,100 of LBTT against £2,500 of SDLT.',
      'An additional dwelling at £450,000 would add 8% of £450,000, which is £36,000, to the £18,350, for a headline of £54,350. That supplement is a flat percentage of the price, not five extra points on each slice. England’s higher rates for an additional dwelling are a different structure, and at £450,000 that England page shows £35,000. The two “additional home” buttons are not interchangeable. A non-resident SDLT surcharge has no switch on this form because LBTT does not use that surcharge.'
    ],
    examplesHeading: 'Worked Scotland LBTT examples',
    examples: [
      {
        title: '£250,000 as a main home, a first home, and an additional dwelling',
        paragraphs: [
          'Replacing a main home: the calculator shows £2,100.00, an effective rate of 0.84%. The arithmetic is 2% of the £105,000 above £145,000. First-time buyer: the calculator shows £1,500.00, an effective rate of 0.60%. The relief line is £600.00, and the comparison line still shows the £2,100.00 of standard tax. Additional dwelling: the calculator shows £22,100.00, an effective rate of 8.84%. That is £2,100 of LBTT plus £20,000 of supplement. The house has not changed. The ownership facts have.',
          'The England page at the same £250,000, for a UK resident replacing a main home, shows £2,500.00. The £400 gap is the extra £20,000 of nil-rate band in Scotland, taxed at 2% in England. It is not a currency conversion. Both figures are pounds, and they are still different taxes.'
        ]
      },
      {
        title: 'The £600 first-time buyer ceiling, at £150,000, £175,000, and £200,000',
        paragraphs: [
          'A first-time buyer at £150,000 shows £0.00. Standard tax would have been £100.00, and the relief is that £100.00 rather than the full £600, because the price never reached £175,000. At exactly £175,000 the first-time buyer result is still £0.00, the relief is £600.00, and the standard comparison is £600.00. Revenue Scotland’s worked example of a £175,000 first home is the same zero.',
          'At £200,000 the first-time buyer result is £500.00. Standard tax is £1,100.00 and the relief has reached its £600 maximum, so it does not grow just because the price did. At £400,000 the first-time buyer result is £12,750.00 against a standard £13,350.00. The relief is still £600. England would have refused first-time buyer relief on a £400,000 price only if the price crossed £500,000. Scotland does not use that test. Every buyer still has to meet the statutory first-time buyer conditions, including never having owned a residential property anywhere.'
        ]
      },
      {
        title: '£300,000, £800,000, and the £40,000 supplement threshold',
        paragraphs: [
          'A main home at £300,000 shows £4,600.00, an effective rate of 1.53%. That is £2,100 plus 5% of £50,000. An additional dwelling at the same price shows £28,600.00: the £4,600 plus 8% of £300,000, which is £24,000. A main home at £800,000 shows £54,350.00. The slice above £750,000 is £50,000 at 12%, which is £6,000, added to the £48,350 due on a £750,000 purchase. The 12% rate does not reach back into the earlier slices.',
          'An additional dwelling at £39,999 shows £0.00 and says the supplement was not charged. At £40,000 the same choice shows £3,200.00, which is 8% of £40,000, and the ordinary LBTT line stays £0.00 because the price is inside the nil-rate band. A standard purchase at £145,001 shows a £0.02 detail line and a £0.00 headline, because the return rounds down. Do not treat the £0.00 headline as proof that the 2% band starts later than £145,000.'
        ]
      }
    ],
    table: {
      heading: 'Residential LBTT at selected 2026 prices',
      caption: 'Standard means a purchase that replaces a main home. First-time buyer relief is up to £600 and does not switch off at a price cap. Additional dwelling means standard LBTT plus 8% of the price, starting at £40,000. Each amount is the headline this calculator displays, rounded down to the nearest pound.',
      headers: ['Price', 'Standard LBTT', 'First-time buyer', 'Additional dwelling'],
      rows: [
        ['£150,000', '£100.00', '£0.00', '£12,100.00'],
        ['£175,000', '£600.00', '£0.00', '£14,600.00'],
        ['£250,000', '£2,100.00', '£1,500.00', '£22,100.00'],
        ['£300,000', '£4,600.00', '£4,000.00', '£28,600.00'],
        ['£450,000', '£18,350.00', '£17,750.00', '£54,350.00'],
        ['£800,000', '£54,350.00', '£53,750.00', '£118,350.00']
      ]
    },
    limitsHeading: 'What this LBTT estimate leaves out',
    limits: [
      'The form covers one residential price. It does not calculate non-residential rates, leases, the net present value of rent, linked transactions, or six or more dwellings treated as non-residential. It does not decide whether a property is residential. Fixtures that are moveable can fall outside the consideration. This page taxes the number you type. Ads reliefs other than the £40,000 threshold, including a repayment after you sell a previous main home, are not applied in advance.',
      'First-time buyer relief has conditions beyond the arithmetic. Every buyer must be a first-time buyer, the dwelling must be their only or main residence, and the transaction must not be one the supplement applies to. If any buyer has owned a residential property anywhere, the relief is refused. This form will still subtract up to £600 when you choose the first-time buyer row. Choosing the row is not a claim on a return.',
      'England and Northern Ireland charge Stamp Duty Land Tax. At £250,000 a main home is £2,500 there and £2,100 here. At £450,000 it is £12,500 there and £18,350 here. Wales charges Land Transaction Tax. At £250,000 the Wales page shows £1,500, and at £450,000 it shows £14,250. A mortgage payment in dollars does not include this sterling tax. LBTT is usually due with the return shortly after the effective date. It is not a monthly line inside the loan unless a lender has added a cost to the balance, which this page does not assume.',
      'The 8% supplement rate is the rate for an effective date on or after 5 December 2024, and the Scottish Government said the 2026 to 2027 budget would leave it there. A contract that keeps an earlier transitional rate is outside this form. Rounding down can make the headline a pound below the sum of the pence lines. Use the headline as the figure the return’s rounding rule produces, and use the detail lines to see the pence that were dropped.'
    ],
    disclaimer: 'This LBTT figure is general information for a straightforward residential purchase in Scotland, not an LBTT return and not legal or tax advice. Revenue Scotland and your solicitor assess the tax due.',
    faqs: [
      {
        q: 'Which Scotland LBTT bands does this calculator use for 2026?',
        a: '0% to £145,000, 2% to £250,000, 5% to £325,000, 10% to £750,000, and 12% above that. Those are the residential bands the Scottish Budget for 2026 to 2027 left in place. A £250,000 main home shows £2,100.00. A £300,000 main home shows £4,600.00.'
      },
      {
        q: 'How much is first-time buyer relief on a Scottish home?',
        a: 'Up to £600, which is 2% of the £30,000 between £145,000 and £175,000. At £175,000 the tax falls from £600 to £0. At £200,000 it falls from £1,100 to £500. At £400,000 it falls from £13,350 to £12,750. The relief does not vanish when the price passes £500,000. That cliff belongs to England’s SDLT relief, not to this one.'
      },
      {
        q: 'How does the 8% additional dwelling supplement work in Scotland?',
        a: 'It is 8% of the whole price, added to ordinary LBTT, when the price is £40,000 or more. At £250,000 the supplement is £20,000 and the headline is £22,100.00. At £300,000 the supplement is £24,000 and the headline is £28,600.00. Under £40,000 the supplement is not charged. It is not five extra points on each band, which is the shape of the England higher rates.'
      },
      {
        q: 'Why is Scottish LBTT £2,100 at £250,000 and England SDLT £2,500?',
        a: 'Scotland’s nil-rate band runs to £145,000 and the next £105,000 is taxed at 2%. England’s nil-rate band runs to £125,000 and the next £125,000 is taxed at 2%, which is £2,500. The gap is £400. At £450,000 the comparison reverses: this page shows £18,350 and the England page shows £12,500, because Scotland’s 10% band starts at £325,000.'
      },
      {
        q: 'Does this LBTT calculator add a non-resident surcharge?',
        a: 'No. The 2 percentage point non-UK resident surcharge is an SDLT rule for England and Northern Ireland. It is not added to these Scottish bands. Choosing a buyer type here does not decide residence, and it does not file a return.'
      },
      {
        q: 'Why can the LBTT headline be £0.00 when a detail line shows £0.02?',
        a: 'The LBTT return asks for the total rounded down to the nearest pound. Two pence of tax on £145,001 is dropped, so the headline is £0.00 while the detail line keeps £0.02. At £145,050 the tax is £1.00 and the headline stays £1.00. Whole-pound prices in the examples do not show that gap.'
      }
    ],
    relatedLinks: [
      { slug: 'england-stamp-duty-calculator', label: 'England stamp duty calculator', note: 'Residential SDLT. A £250,000 main home is £2,500 there and £2,100 here. A £450,000 main home is £12,500 there and £18,350 here.' },
      { slug: 'wales-land-transaction-tax-calculator', label: 'Wales Land Transaction Tax calculator', note: 'A £250,000 main home is £1,500 there and £2,100 here. Wales has no first-time buyer relief of the £600 kind this page subtracts.' },
      { slug: 'scotland-take-home-pay-calculator', label: 'Scotland take-home pay calculator for 2026/27', note: 'Scottish income tax and National Insurance on a salary. It is not the tax on a house.' },
      { slug: 'mortgage-calculator', label: 'Fixed-rate mortgage payment calculator', note: 'Principal and interest in US dollars. It does not add this LBTT or convert pounds.' },
      { slug: 'uk-working-days-calculator', label: 'UK working days calculator', note: 'Counts weekdays in Scotland after bank holidays. It does not prorate this tax.' }
    ]
  },
  'canada-business-days-calculator': {
    title: 'Canada Business Days Calculator (ON, BC, Alberta) | ClearCalc',
    h1: 'Canada Business Days Calculator',
    description: 'Count inclusive weekdays in Ontario, British Columbia, or Alberta and remove that province’s statutory holidays, including the 2026 calendar.',
    intro: [
      'This Canada business days calculator counts inclusive weekdays between two dates and can remove the statutory holidays for Ontario, British Columbia, or Alberta. The holidays are the current employment-standards lists, not a single federal set. Ontario’s Employment Standards Act public holidays are New Year’s Day, Family Day, Good Friday, Victoria Day, Canada Day, Labour Day, Thanksgiving, Christmas Day, and Boxing Day. British Columbia’s statutory holidays add B.C. Day, the National Day for Truth and Reconciliation, and Remembrance Day, and they do not include Boxing Day. Alberta’s nine general holidays include Alberta Family Day and Remembrance Day, and they do not include Boxing Day, Heritage Day, or the National Day for Truth and Reconciliation. Those last days are optional in Alberta, and this page does not remove them.',
      'The sample is 1 January 2026 through 31 December 2026 in Ontario, with holidays excluded. The year has 261 weekdays and 104 weekend days. Eight Ontario holidays fall on a weekday, and Boxing Day falls on Saturday, so it is not removed. The headline is 253 business days. British Columbia removes 11 weekday holidays and shows 250. Alberta removes 9 and shows 252. England and Wales also have 253 working days in 2026, and the United States has 250 business days, but the calendars are not the same list wearing a different name. A Saturday holiday in Canada stays on Saturday on this page, except Alberta’s rule that Canada Day moves to 2 July when 1 July is a Sunday. The United States page moves a Saturday federal holiday to Friday. This page does not.'
    ],
    steps: [
      'Enter the start date and the end date. The sample runs from 2026-01-01 through 2026-12-31. Both ends count when they are business days.',
      'Choose Ontario, British Columbia, or Alberta. The holiday list changes with that choice. There is no blended “Canada” list.',
      'Choose whether statutory holidays are excluded. “Count every weekday” leaves the holidays in the total.',
      'Press Calculate. The headline is the weekday count after any holidays that were removed. The lines under it name the weekdays, the weekend days, and the holiday dates inside the span.'
    ],
    howHeading: 'How provincial statutory holidays are removed',
    howItWorks: [
      'The span is inclusive. A lone non-holiday weekday is 1 business day. The days-between-dates page does not count that way: from 1 January to 31 December 2026 it shows 364 elapsed days, because it drops one end and keeps the weekends. This page keeps both ends, drops Saturday and Sunday, and then, if you ask, drops a weekday that is on the provincial list. Swapping the two dates does not change the count. The earlier date is treated as the start, and a line says they were reordered.',
      'Most of the dates follow a rule rather than a stored list. Family Day, and Alberta Family Day, are the third Monday in February. Good Friday is two days before Easter Sunday, using the Gregorian computus. Victoria Day is the Monday before 25 May, and when 25 May is itself a Monday the holiday is 18 May. In 2026 that is 18 May. Labour Day is the first Monday in September. Thanksgiving is the second Monday in October. B.C. Day is the first Monday in August. Canada Day is 1 July, except in Alberta when 1 July is a Sunday, in which case the general holiday is 2 July. Christmas is 25 December. Boxing Day, Ontario only, is 26 December. Truth and Reconciliation is 30 September. Remembrance Day is 11 November.',
      'A holiday that falls on Saturday or Sunday is listed and then left in the weekend count. It does not reduce the business-day headline, and the province is not given a substitute Monday unless the Alberta Canada Day rule says so. In 2026, Ontario’s Boxing Day is Saturday 26 December, so Ontario removes 8 weekday holidays from 261 weekdays and shows 253. British Columbia’s 11 holidays all fall on weekdays, so the headline is 250. Alberta’s 9 general holidays all fall on weekdays, so the headline is 252. In 2027, Christmas is Saturday. Ontario then removes 7 weekday holidays and shows 254, because both Christmas and Boxing Day are on the weekend. British Columbia shows 251. Alberta shows 253.',
      'The lists are the current statutes applied to whatever year you type. They are not a history of the year each holiday was enacted, and they are not a collective agreement. A federal workplace can observe Easter Monday, which Ontario, British Columbia, and Alberta do not require. Quebec’s National Holiday on 24 June is not in these three lists. Civic holidays that an employer chooses to close for, including Heritage Day in Alberta, stay in the count unless you shorten the dates yourself. A span longer than 50 years is refused.'
    ],
    formula: 'Inclusive dates. Saturday and Sunday are weekend days.\nWeekdays = dates in the span whose weekday is Monday through Friday\nStatutory holidays removed = weekdays that are on the selected province’s list, if you asked to exclude them\nBusiness days = weekdays − statutory holidays removed\nOntario: New Year’s Day, Family Day (third Monday in February), Good Friday, Victoria Day (Monday before 25 May), Canada Day, Labour Day, Thanksgiving, Christmas Day, Boxing Day\nBritish Columbia: Ontario’s list without Boxing Day, plus B.C. Day (first Monday in August), 30 September, and Remembrance Day\nAlberta: New Year’s Day, Alberta Family Day, Good Friday, Victoria Day, Canada Day, Labour Day, Thanksgiving, Remembrance Day, Christmas Day\nAlberta only: if 1 July is a Sunday, Canada Day is Monday 2 July\nOther weekend holidays are not moved to Friday or Monday',
    formulaNotes: [
      'Calendar year 2026 has 365 dates, 261 weekdays, and 104 weekend days in every province. The business-day gap is only the holiday list. Ontario 253, Alberta 252, and British Columbia 250 differ by Family Day’s neighbours: Alberta adds Remembrance Day to the shared weekday set and does not have a weekday Boxing Day to remove; British Columbia adds B.C. Day, 30 September, and Remembrance Day. England and Wales remove 8 bank holidays and also show 253, but those 8 dates are not Ontario’s 8. The US federal list removes 11 observed weekdays and shows 250, the same count as British Columbia for a different reason. Independence Day 2026 is observed on Friday 3 July on the US page. Canada Day stays on Wednesday 1 July on this page.',
      'In 2029, 1 July is a Sunday. Alberta observes Canada Day on Monday 2 July and removes that Monday. Ontario and British Columbia leave 1 July on Sunday and do not remove 2 July. Ontario 2029 shows 253 business days, with Canada Day named as a weekend holiday that was not removed. Alberta 2029 shows 253 as well, but one of the removed dates is 2 July. British Columbia also shows 253: Canada Day, 30 September, and Remembrance Day all fall on a weekend, so only 8 of its 11 holidays are removed. The three headlines match and the calendars do not. In 2028, a leap year, there are 260 weekdays. Ontario shows 253 business days, British Columbia shows 253, and Alberta shows 254, because several fixed dates fall on weekends.'
    ],
    examplesHeading: 'Worked Canadian business-day examples',
    examples: [
      {
        title: 'Calendar year 2026 in all three provinces',
        paragraphs: [
          'Ontario, holidays excluded, shows 253 business days. Eight weekday holidays are removed: 1 January, 16 February, 3 April, 18 May, 1 July, 7 September, 12 October, and 25 December. Boxing Day, 26 December, is named as a Saturday that was not removed. British Columbia shows 250. The extra weekday dates are 3 August, 30 September, and 11 November. Alberta shows 252. Remembrance Day is removed and Boxing Day is not on the list. Count every weekday instead and all three provinces show 261.',
          'The US business-day page shows 250 for 2026 after 11 observed federal holidays. The UK working-day page shows 253 for England and Wales and 251 for Scotland. Ontario’s 253 is not the England list. British Columbia’s 250 is not the US list. A contract that says “business days” and then names a holiday calendar has to be read. This form only applies the provincial employment-standards list you select.'
        ]
      },
      {
        title: '2027, when Christmas falls on Saturday',
        paragraphs: [
          'Ontario 2027 shows 254 business days. Seven weekday holidays are removed, and both 25 December and 26 December are named as weekend holidays that stay in the weekend count. The weekdays in the year are still 261. British Columbia shows 251, with Christmas on the weekend and 11 November still a Wednesday. Alberta shows 253, with Christmas on the weekend and Remembrance Day still removed.',
          'Good Friday 2027 is 26 March in all three lists, two days before Easter Sunday. Victoria Day is 24 May. Family Day is 15 February. None of those move because Christmas moved. The calculator does not invent a Boxing Day substitute on Monday 27 December for Ontario. If a workplace closes that Monday by policy, shorten the span or subtract the day yourself.'
        ]
      },
      {
        title: 'Alberta’s Sunday Canada Day rule in 2029, and a single holiday',
        paragraphs: [
          'Alberta from 1 January 2029 through 31 December 2029 shows 253 business days and names 2 July as “Canada Day, observed 2 July.” Ontario over the same dates also shows 253, and it names 1 July as a Sunday that was not removed. The matching headlines hide a different Monday. British Columbia follows Ontario on Canada Day: 1 July stays on Sunday, and 2 July is an ordinary Monday unless it is some other holiday, which it is not.',
          'A span that is only 1 January 2026 shows 0 business days in every province, because that Thursday is New Year’s Day. A span that is only 2 January 2026 shows 1 business day. The day counter’s elapsed result between those two dates is 1 day as well, but it is counting the gap, not deciding that 1 January was a holiday. Use this page when the question is which weekdays survive the provincial list.'
        ]
      }
    ],
    table: {
      heading: 'Business days in a full calendar year',
      caption: 'Holidays excluded. Weekdays are Monday through Friday before any holiday is removed. Ontario, British Columbia, and Alberta use different statutory lists. A holiday on Saturday or Sunday is not moved, except Alberta’s Canada Day when 1 July is a Sunday. Each count is what this calculator displays.',
      headers: ['Year', 'Weekdays', 'Ontario', 'British Columbia', 'Alberta'],
      rows: [
        ['2026', '261', '253', '250', '252'],
        ['2027', '261', '254', '251', '253'],
        ['2028', '260', '253', '253', '254'],
        ['2029', '261', '253', '253', '253']
      ]
    },
    limitsHeading: 'What this Canadian business-day count leaves out',
    limits: [
      'Only three provincial lists are included. Quebec, Saskatchewan, Manitoba, New Brunswick, Nova Scotia, Prince Edward Island, Newfoundland and Labrador, and the territories have their own holidays. A federal employee can be off on Easter Monday and on other days these provinces do not require. Alberta’s optional general holidays, including Easter Monday, Heritage Day, the National Day for Truth and Reconciliation, and Boxing Day, are not removed. If your employer recognizes one of them, the headline is one day high for that year.',
      'The page does not compute public holiday pay, and it does not know whether you qualify for the day off. Ontario, British Columbia, and Alberta each have eligibility rules, and some jobs are exempt. A holiday that falls during a vacation, a substitute day agreed in writing, and a collective agreement that adds days are outside the count. The result is also not a court deadline and not a CRA payment date. The CRA’s own public-holiday list is a federal administrative list. It is not the Ontario Employment Standards Act list.',
      'Weekend observance is deliberate and narrow. British Columbia’s published 2026 and 2027 statutory-holiday tables list Christmas on the calendar date even when that date is a Saturday. This page does the same, and it does not add the following Monday. Alberta’s published rule moves Canada Day from Sunday to 2 July and does not describe the same move for a Saturday. 2028 Canada Day is a Saturday and is not removed in Alberta. Applying a US-style “observe on Friday” rule would make these counts match the US page for the wrong reason.',
      'Family Day is applied in years before a province enacted it, because the calculator uses the current rule rather than a historical table. A one-off holiday, such as a funeral or a jubilee, is not added. Good Friday depends on the Gregorian Easter calculation. Dates more than 50 years apart are rejected. If the contract’s holiday schedule is attached to the contract, that schedule wins over this list.'
    ],
    disclaimer: 'This count applies current statutory-holiday rules for Ontario, British Columbia, or Alberta to a Monday-to-Friday span. It is not a determination of holiday pay, a workplace calendar, or legal advice about a deadline.',
    faqs: [
      {
        q: 'How many business days does Ontario have in 2026?',
        a: '253, after the eight weekday public holidays are removed. The year has 261 weekdays. Boxing Day is Saturday 26 December, so it is not one of the eight. British Columbia has 250 in 2026. Alberta has 252. Count every weekday and all three show 261.'
      },
      {
        q: 'Why is British Columbia’s 2026 total equal to the US business-day total?',
        a: 'Both headlines are 250, and the calendars are different. British Columbia removes 11 statutory weekdays, including Family Day, B.C. Day, and 30 September. The US page removes 11 observed federal holidays and moves Saturday 4 July 2026 to Friday 3 July. Matching totals are not matching days off.'
      },
      {
        q: 'Does this Canada calculator move a Saturday holiday to Friday?',
        a: 'No. A statutory holiday on Saturday or Sunday stays on that weekend and is not removed from the weekday count. The exception is Alberta, and only for Canada Day: when 1 July is a Sunday the holiday is Monday 2 July. In 2029 Alberta removes 2 July. Ontario does not.'
      },
      {
        q: 'Is Boxing Day a statutory holiday in British Columbia and Alberta?',
        a: 'Not on these lists. Ontario removes Boxing Day when 26 December is a weekday. In 2026 it is a Saturday, so Ontario names it and does not subtract it. British Columbia and Alberta do not put Boxing Day on the statutory list at all. An employer that closes anyway is giving a day this page still counts.'
      },
      {
        q: 'Are both the start date and the end date business days if they are weekdays?',
        a: 'They count when they are weekdays and, if you are excluding holidays, when they are not statutory holidays. 1 January 2026 alone is 0 business days. 2 January 2026 alone is 1. The days-between-dates page is an elapsed count, not this inclusive weekday count.'
      },
      {
        q: 'Which provinces can this business-day calculator exclude holidays for?',
        a: 'Ontario, British Columbia, and Alberta. Quebec’s 24 June and the other provinces’ lists are not included. Optional Alberta holidays are not included either. A span outside a 50-year window is refused. The rules are the current statutes, including Family Day on the third Monday in February, even in a year before that holiday existed.'
      }
    ],
    relatedLinks: [
      { slug: 'us-business-days-calculator', label: 'US business days calculator', note: 'Inclusive weekdays with US federal holidays removed. Calendar year 2026 is 250 business days, the same count as British Columbia and not the same calendar.' },
      { slug: 'uk-working-days-calculator', label: 'UK working days calculator', note: 'England and Wales have 253 working days in 2026, the same count as Ontario and not the same bank holidays.' },
      { slug: 'date-difference-calculator', label: 'Days between two dates', note: 'Elapsed calendar days, including weekends. 1 January to 31 December 2026 is 364 on that page.' },
      { slug: 'ontario-take-home-pay-calculator', label: 'Ontario take-home pay calculator for 2026', note: 'Federal tax, Ontario tax, CPP, and EI. It does not divide a salary by these 253 business days.' }
    ]
  },
  '5k-pace-calculator': {
    title: '5K Pace Calculator: Minutes per km and per Mile | ClearCalc',
    h1: '5K Pace Calculator',
    description: 'Convert a 5K finish time, or any other run, into pace per kilometre, pace per mile, and the time that pace takes for a 10K, half marathon, and marathon.',
    intro: [
      'This 5K pace calculator turns a finish time and a distance into minutes per kilometre and minutes per mile. The sample is 5 kilometres in 25:00. The headline is 5:00 per km. The same effort is 8:02.8 per mile, and the speed is 12 km/h, or 7.46 mph. The page then holds that pace still and applies it to a 10K, a half marathon of 21.0975 kilometres, and a marathon of 42.195 kilometres. At the sample pace those clocks are 50:00, 1:45:29.3, and 3:30:58.5.',
      'The distance does not have to be a 5K. Choose kilometres or miles and type the distance you actually covered. A mile in 8:00 is 4:58.3 per kilometre and projects a 5K of 24:51.3. The form does not estimate calories, and it does not know whether you can hold the pace for a longer race. The maintenance-calorie page uses body size and an activity multiplier. A 25:00 5K does not replace that multiplier, and 2,633 calories is not a pace. Use one page for the clock and the other for the daily energy estimate.'
    ],
    steps: [
      'Enter the distance as a number. The sample, 5, is a 5K when the unit is kilometres.',
      'Choose kilometres or miles. A mile on this page is the international mile, 1.609344 kilometres, not a casual 1.6.',
      'Enter the finish time as hours, minutes, and seconds. The sample is 0 hours, 25 minutes, and 0 seconds. You can type 90 in the minutes field instead of 1 hour and 30 minutes. The fields are added together.',
      'Press Calculate. If the unit is kilometres, the headline is the pace per kilometre. If the unit is miles, the headline is the pace per mile. The other pace, the speed, and the race projections are underneath.'
    ],
    howHeading: 'How a finish time becomes a pace',
    howItWorks: [
      'The time fields become one number of seconds: hours times 3,600, plus minutes times 60, plus seconds. The distance becomes kilometres. A mile entry is multiplied by 1.609344. Pace per kilometre is the seconds divided by the kilometres. Pace per mile is the seconds divided by the miles, which is the same as multiplying the per-kilometre pace by 1.609344. For the sample, 1,500 seconds divided by 5 kilometres is 300 seconds, which is 5:00. Multiply 300 by 1.609344 and the per-mile pace is 482.8032 seconds, which rounds to 8:02.8 on the display. Speed in kilometres per hour is the distance in kilometres times 3,600, divided by the seconds. Five kilometres in 1,500 seconds is exactly 12 km/h.',
      'The race lines do not look up a course. They multiply the per-kilometre pace by a fixed distance. A 10K is 10 kilometres, so the sample doubles to 50:00. A half marathon is 21.0975 kilometres, which is 6,329.25 seconds at this pace and displays as 1:45:29.3. A marathon is 42.195 kilometres, which is 12,658.5 seconds and displays as 3:30:58.5. The clock rounds to the nearest tenth of a second. A time that lands on a whole second, such as 25:00 or 50:00, does not show a decimal.',
      'A common road marking of 13.1 miles is not the half-marathon line. 13.1 times 1.609344 is about 21.082 kilometres, a little short of 21.0975. Type 13.1 miles and 1:45:00 and the headline is 8:00.9 per mile, while the half-marathon projection is 1:45:04.5. The four and a half seconds are the gap between 13.1 miles and the standard half-marathon distance, not a rounding glitch in the 1:45:00 you typed. A 5K is exactly 5 kilometres on this page. It is not 3.1 miles. Three miles is 4.828032 kilometres, about 172 metres short of a 5K.',
      'Nothing in the formula uses weight, age, heart rate, or hills. Two runners with the same average pace took the same time to cover the distance, whatever it felt like. The projection assumes the average pace continues. Most runners do not run a marathon at their 5K pace. The lines are a scale, so you can see how demanding that assumption is, not a prediction that the scale will happen. The calorie calculator cannot see this pace either. Its sample man, 30 years old, 75 kg, 175 cm, and a 1.55 multiplier, stays at 2,633 calories/day whether the 5K was 25:00 or 30:00.'
    ],
    formula: 'Total seconds = hours × 3,600 + minutes × 60 + seconds\nKilometres = distance, or distance × 1.609344 when the unit is miles\nMiles = kilometres ÷ 1.609344\nPace per kilometre = total seconds ÷ kilometres\nPace per mile = total seconds ÷ miles\nSpeed (km/h) = kilometres × 3,600 ÷ total seconds\nSpeed (mph) = miles × 3,600 ÷ total seconds\n10K time = pace per kilometre × 10\nHalf marathon time = pace per kilometre × 21.0975\nMarathon time = pace per kilometre × 42.195\nDisplayed clocks round to the nearest tenth of a second',
    formulaNotes: [
      'A 30:00 5K is 6:00 per kilometre and 9:39.4 per mile. Speed is 10 km/h, or 6.21 mph. The 10K line is 1:00:00. The half marathon is 2:06:35.1. The marathon is 4:13:10.2. Each of those is the 25:00 sample scaled by 30/25, then rounded to a tenth of a second on its own clock. The per-mile figure is not 6:00 times 1.6. Using 1.6 instead of 1.609344 would show 9:36.0 per mile and would be 3.4 seconds fast.',
      'An 8:00 mile is 480 seconds. Divided by 1.609344, the per-kilometre pace is 298.256 seconds, which displays as 4:58.3. Five kilometres at that pace is 1,491.3 seconds, or 24:51.3. The speed is 12.07 km/h and 7.50 mph. The sample 5:00-per-kilometre pace is slower than an 8:00 mile, even though 5:00 times 1.6 looks like 8:00 if the mile is shortened. The international mile is why the sample prints 8:02.8 rather than 8:00.'
    ],
    examplesHeading: 'Worked pace examples',
    examples: [
      {
        title: 'A 25:00 5K',
        paragraphs: [
          'Distance 5, unit kilometres, time 0:25:00. The headline is 5:00 per km. Pace per mile is 8:02.8. Speed is 12 km/h (7.46 mph). The 5K line repeats 25:00 because that is the distance you typed. The 10K line is 50:00. The half marathon is 1:45:29.3. The marathon is 3:30:58.5. Those last two use 21.0975 km and 42.195 km, not “about 13 miles” and “about 26 miles.”',
          'The same pace typed as 10 kilometres in 50:00 produces the same headline and the same race lines. The time-entered line changes to 50:00 for 10 kilometres. The calculator is dividing, not remembering that the field was labelled 5K. A 5K that took 50:00 would be 10:00 per kilometre. Do not leave the distance at 5 if the time you are typing is a 10K.'
        ]
      },
      {
        title: 'A 30:00 5K, and an 8:00 mile',
        paragraphs: [
          'Change only the minutes, from 25 to 30. The headline is 6:00 per km. Pace per mile is 9:39.4. Speed is 10 km/h (6.21 mph). The half marathon projection is 2:06:35.1 and the marathon projection is 4:13:10.2. The 5:00 pace was 12 km/h. This one is 10 km/h. The ratio of the times is 30/25 = 1.2, and 12 ÷ 1.2 is 10. The per-mile clock is not 1.2 times 8:02.8 in a way you should do by hand if you want the rounded display. Use the result line.',
          'Switch the unit to miles, set the distance to 1, and set the time to 8:00. The headline is 8:00 per mile. Pace per kilometre is 4:58.3. A 5K at that pace is 24:51.3, a 10K is 49:42.6, a half marathon is 1:44:52.5, and a marathon is 3:29:45. The marathon lands on a whole second after rounding, so it has no decimal. This 8:00 mile is quicker than the 25:00 5K, which needed 8:02.8 per mile.'
        ]
      },
      {
        title: '13.1 miles in 1:45:00 is not quite a half marathon',
        paragraphs: [
          'Distance 13.1, unit miles, time 1 hour, 45 minutes, 0 seconds. The headline is 8:00.9 per mile. Pace per kilometre is 4:58.8. Speed is 12.05 km/h (7.49 mph). The half-marathon line says 1:45:04.5, four and a half seconds slower than the time you typed, because 13.1 international miles are shorter than 21.0975 kilometres. The marathon line is 3:30:09. The 5K line is 24:54.1.',
          'If you want the projection to equal the time you typed, enter the standard distance. A half marathon in kilometres is 21.0975, not 13.1, and not 21.1 if you care about the last few seconds. The form will accept 21.0975 in the distance field with the unit set to kilometres. It will also accept a track workout. Four hundred metres is 0.4 kilometres. The race lines will still print a marathon at that lap pace, which is a scale, not a suggestion that the lap pace lasts 42 kilometres.'
        ]
      }
    ],
    table: {
      heading: 'Pace and race times for two 5K finishes and one mile',
      caption: 'Each row is what this calculator displays. The half marathon is 21.0975 km and the marathon is 42.195 km. The mile is 1.609344 km. Clocks are rounded to the nearest tenth of a second, and a whole second shows no decimal.',
      headers: ['Effort you type', 'Per km', 'Per mile', '10K', 'Half marathon', 'Marathon'],
      rows: [
        ['5 km in 25:00', '5:00', '8:02.8', '50:00', '1:45:29.3', '3:30:58.5'],
        ['5 km in 30:00', '6:00', '9:39.4', '1:00:00', '2:06:35.1', '4:13:10.2'],
        ['1 mile in 8:00', '4:58.3', '8:00', '49:42.6', '1:44:52.5', '3:29:45']
      ]
    },
    limitsHeading: 'What this pace figure leaves out',
    limits: [
      'The projection is the same average pace extended to a new distance. It is not a race predictor. A 5K pace held for a marathon is a much harder effort, and this page has no endurance model, no temperature, and no hills. It also has no stops. If the clock you type includes a minute of standing still, that minute is spread into the average. A moving-time average from a watch can be different. Type the clock you mean.',
      'Distances are exact only if you type them exactly. A certified marathon is 42.195 kilometres. A GPS file can be longer because of corners and drift. The calculator will not correct a GPS distance. Three miles is not a 5K, and 13.1 miles is not a half marathon, as the 1:45:00 example shows. The international mile is not the 1,500 metre metric mile used in track. A 1,500 is 1.5 kilometres. Select kilometres and type 1.5 if that is the race.',
      'Calories are a different question. The calorie calculator estimates maintenance from the Mifflin–St Jeor equation and a multiplier you choose. It does not accept a pace, and this page does not accept a weight. A 25:00 5K and a result of 2,633 calories/day can both be true for the sample inputs on those two pages. Neither number checks the other. BMI is a third calculation, from kilograms and centimetres, and it does not produce a pace.',
      'The display rounds each clock to a tenth of a second after the division. Adding the rounded per-kilometre pace up to a 5K can disagree with the typed time by a tenth. The 5K line for a 5 kilometre entry is the rounded total, so the sample stays 25:00. Very short distances and very long times still divide. A distance of zero, or a time of zero, is rejected. Negative numbers are rejected.'
    ],
    disclaimer: 'This pace is clock arithmetic for the distance and time you enter. It is not a training plan, a race prediction, or medical advice about whether you should run.',
    faqs: [
      {
        q: 'What is the pace for a 25:00 5K?',
        a: '5:00 per kilometre, which is 8:02.8 per mile. The speed is 12 km/h, or 7.46 mph. At that same pace a 10K is 50:00, a half marathon is 1:45:29.3, and a marathon is 3:30:58.5. The mile factor is 1.609344, so the per-mile clock is not exactly 8:00.'
      },
      {
        q: 'Why is a 5:00 kilometre not an 8:00 mile?',
        a: 'Because a mile is 1.609344 kilometres, not 1.6. Five minutes times 1.609344 is 8 minutes and 2.8032 seconds, which displays as 8:02.8. An actual 8:00 mile is 4:58.3 per kilometre and projects a 5K of 24:51.3. Using 1.6 would make the sample look like 8:00 and would be 3.4 seconds per mile fast on the 30:00 5K as well.'
      },
      {
        q: 'Is 13.1 miles a half marathon on this pace calculator?',
        a: 'No. The half-marathon line uses 21.0975 kilometres. 13.1 international miles are a little shorter, so 13.1 miles in 1:45:00 shows a half-marathon projection of 1:45:04.5 and a pace of 8:00.9 per mile. Type 21.0975 kilometres if you want the standard distance.'
      },
      {
        q: 'Does the 5K pace calculator estimate calories burned?',
        a: 'No. It only divides a time by a distance. The calorie calculator is a separate page, and its sample man at a 1.55 multiplier is 2,633 calories/day whether the 5K was 25:00 or 30:00. A pace is not an activity multiplier, and an activity multiplier is not a finish time.'
      },
      {
        q: 'Can I enter a time as 90 minutes instead of 1 hour and 30 minutes?',
        a: 'Yes. Hours, minutes, and seconds are added. 0 hours, 90 minutes, and 0 seconds is the same total as 1 hour, 30 minutes, and 0 seconds. A total of zero is rejected. The displayed clock then splits that total back into hours, minutes, and seconds, rounded to a tenth of a second.'
      }
    ],
    relatedLinks: [
      { slug: 'calorie-calculator', label: 'Daily maintenance calorie calculator', note: 'Mifflin–St Jeor times an activity multiplier. The sample man at 1.55 is 2,633 calories/day. A 25:00 5K does not change that figure.' },
      { slug: 'bmi-calculator', label: 'Adult BMI calculator', note: 'Weight in kilograms and height in centimeters. It does not accept a finish time or produce a pace.' },
      { slug: 'length-converter', label: 'Length converter from meters', note: 'If a split was measured in meters, convert it before you type kilometres. This pace page does not convert meters itself.' },
      { slug: 'percentage-calculator', label: 'Percentage calculator', note: 'Useful if you already have two paces and want one as a percent of the other. It does not divide a finish time by a distance.' }
    ]
  }
};
