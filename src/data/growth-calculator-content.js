export const growthCalculatorContent = {
  'pennsylvania-paycheck-calculator': {
    title: 'Pennsylvania Paycheck Calculator 2026 (3.07% plus Local EIT) | ClearCalc',
    h1: 'Pennsylvania Paycheck Calculator for 2026',
    description: 'Estimate a 2026 Pennsylvania paycheck after federal income tax, the 3.07% state tax, a local earned income tax rate you enter, and the local services tax.',
    intro: [
      'This Pennsylvania paycheck calculator estimates what is left from 2026 wages after federal income tax, Pennsylvania personal income tax, a local earned income tax, the local services tax, Social Security, and Medicare. The state rate is 3.07% of taxable compensation. The Pennsylvania Department of Revenue lists that flat rate on its current tax-rate page, and it does not allow a standard deduction or a personal exemption against compensation. The sample is $65,000, single, paid every two weeks, with a 1% local rate and a $52 local services tax.',
      'The 1% local rate is the usual combined resident earned income tax under the Local Tax Enabling Act, often split 0.5% to the municipality and 0.5% to the school district. It is not Philadelphia’s wage tax, and it is not the same dollar amount in every township. Type the resident rate for the address where you live. Federal income tax uses the tax year 2026 brackets and standard deduction in IRS Revenue Procedure 2025-32. Social Security is 6.2% up to $184,500, and Medicare is 1.45% of all wages. The result is an annual estimate divided by the number of paychecks. It is not the percentage method in Publication 15-T.'
    ],
    steps: [
      'Enter annual gross wages in dollars. The sample, 65000, means $65,000 for the year, not one paycheck.',
      'Choose Single or Married filing jointly. Joint changes the federal brackets and the $32,200 federal standard deduction. It does not change the 3.07% Pennsylvania tax.',
      'Choose a pay frequency. Every two weeks means 26 paychecks. Twice a month means 24. Weekly is 52 and monthly is 12.',
      'Enter a traditional 401(k) deferral for the year, or leave 0. Then enter the local earned income tax as a percent, and the local services tax in dollars for the whole year. The sample is 1 and 52. Press Calculate.'
    ],
    howHeading: 'How a 2026 Pennsylvania paycheck is estimated',
    howItWorks: [
      'Federal taxable wages are gross wages minus the traditional 401(k) actually applied, then minus the federal standard deduction. For 2026 that deduction is $16,100 for a single filer and $32,200 for married filing jointly. On $65,000 with no deferral, a single filer has $48,900 of federal taxable income and $5,620.00 of federal income tax. Social Security is $4,030.00. Medicare is $942.50. Additional Medicare Tax is $0.00. Those three federal lines match the Texas paycheck at the same wages, because FICA does not depend on the state.',
      'Pennsylvania does not follow that federal base. The Department of Revenue taxes compensation, and an employee’s contribution to a 401(k) is compensation for Pennsylvania personal income tax. This page therefore multiplies the full wages by 3.07%, before the deferral and before the federal standard deduction. On $65,000 that is $1,995.50, whether or not you type a deferral and whether you file single or joint. There is no Pennsylvania bracket. The next dollar of wages is taxed at the same 3.07%.',
      'Local earned income tax uses the same compensation idea. The rate you type, taken to three decimal places, is applied to full wages. One percent of $65,000 is $650.00. A traditional 401(k) does not reduce it. The local services tax is different: it is a flat dollar amount for the year, not a percent. The sample uses $52, which is the usual Act 511 cap. Annual take-home is wages minus federal income tax, Social Security, Medicare, Additional Medicare Tax, the 3.07% state tax, the local tax, the local services tax, and the deferral. On the sample that is $51,710.00, and the headline is $1,988.85 every two weeks.',
      'Set the local rate to 0 and the local services tax to 0 if you want the state line alone. The same $65,000 single wage then has annual take-home of $52,412.00. Texas, with state income tax at $0, has annual take-home of $54,407.50 on those wages. The entire $1,995.50 gap is the Pennsylvania tax. Adding the sample 1% and the $52 pulls Pennsylvania down by another $702.00, to $51,710.00. Illinois at the same wages charges $3,072.71 of state tax after a $2,925 exemption and has no local earned income tax on this site’s Illinois page. Its annual take-home is $51,334.79. Pennsylvania with the 1% local tax is $375.21 higher than that Illinois figure, and Pennsylvania with the local fields at zero is $1,077.21 higher. The states are not using the same subtraction.'
    ],
    formula: 'Tax year 2026. Pennsylvania wages.\nFederal taxable wages = max(0, wages − traditional 401(k) − federal standard deduction)\nFederal standard deduction = $16,100 single, or $32,200 married filing jointly\n401(k) applied = min(amount entered, wages, $24,500)\nFederal income tax = 2026 Rev. Proc. 2025-32 brackets\nSocial Security = 6.2% × min(wages, $184,500)\nMedicare = 1.45% × wages\nAdditional Medicare Tax = 0.9% × max(0, wages − $200,000)\nPennsylvania tax = 3.07% × wages\nLocal earned income tax = local percent × wages\nLocal services tax = the dollar amount entered, usually $52 or $0\nAnnual take-home = wages − federal income tax − Social Security − Medicare − Additional Medicare Tax − Pennsylvania tax − local earned income tax − local services tax − 401(k)\nPaycheck = annual take-home ÷ number of paychecks',
    formulaNotes: [
      'A joint return on the same $65,000, still at 1% and $52, has federal income tax of $3,440.00. Pennsylvania tax stays $1,995.50. Local tax stays $650.00. Social Security and Medicare do not change. Annual take-home is $53,890.00, which is $2,180.00 above the single result. That $2,180.00 is the whole federal gap. The extra $16,100 of standard deduction is not taxed at one rate: part of it sits in the 12% band and part of the joint 10% band is wider than the single 10% band. The Illinois page walks through those two pieces on the same salary. Pennsylvania adds nothing further when the filing status changes.',
      'On $65,000 single, a $6,500 traditional 401(k) cuts federal income tax from $5,620.00 to $4,840.00. That $780.00 is 12% of $6,500. Pennsylvania tax stays $1,995.50 and the 1% local tax stays $650.00, because both are charged on the wages before the deferral. Social Security stays $4,030.00 and Medicare stays $942.50. Annual take-home is $45,990.00, or $1,768.85 every two weeks. Cash pay falls by $5,720.00, which is the $6,500 deferral minus the $780.00 of federal tax saved. A deferral typed above $24,500 is cut back to the 2026 elective limit. Catch-up contributions are not added. Do not type a Roth amount into the deferral field: a Roth contribution does not reduce federal income tax, and this form would treat it as if it did.'
    ],
    examplesHeading: 'Worked 2026 Pennsylvania paycheck examples',
    examples: [
      {
        title: '$65,000, single, 1% local tax, $52 local services tax',
        paragraphs: [
          'Federal income tax is $5,620.00, Social Security is $4,030.00, and Medicare is $942.50. Pennsylvania income tax is $1,995.50. Local earned income tax is $650.00. The local services tax is $52.00. Annual take-home is $51,710.00. The headline is $1,988.85 / two weeks. Dividing the same annual figure by 52 instead gives $994.42 / week. Twenty-six times the two-week headline is $51,710.10, ten cents above the annual line, because each paycheck is rounded on its own.',
          'A Philadelphia resident is not in this 1% example. For wages paid on or after 1 July 2026, the City of Philadelphia lists the resident wage tax at 3.735%, down from 3.74% in the year that began 1 July 2025. Type 3.735 in the local field and 0 in the local services tax if you want that second-half rate for the whole year. On $65,000, single, the local line becomes $2,427.75, Pennsylvania tax stays $1,995.50, and annual take-home is $49,984.25, or $1,922.47 / two weeks. A full calendar year 2026 can mix 3.74% and 3.735% if the employer changed withholding on 1 July. This form applies one rate to all of the wages.'
        ]
      },
      {
        title: 'The same $65,000 filed jointly, and with a $6,500 deferral',
        paragraphs: [
          'Married filing jointly, every two weeks, 1% local tax, and a $52 local services tax, uses federal income tax of $3,440.00. Pennsylvania tax is still $1,995.50. Annual take-home is $53,890.00, or $2,072.69 / two weeks. The joint figure treats this salary as the only income on the return. A spouse with wages needs a return this one-wage form cannot build. The wider federal brackets would be shared. The Pennsylvania 3.07% would still apply to each spouse’s compensation, not to a combined bracket.',
          'Go back to single and enter a $6,500 traditional 401(k). Federal income tax falls to $4,840.00. Pennsylvania tax and the local tax do not fall. Annual take-home is $45,990.00. The Illinois calculator, on the same wages and the same deferral, does reduce the state tax, because Illinois starts from wages after the deferral. Using that Illinois habit on a Pennsylvania stub will overstate take-home by 3.07% of the deferral, which is $199.55, plus another 1% if the local tax is 1%.'
        ]
      },
      {
        title: '$90,000 at 1%, and $210,000 where the Social Security wage base stops',
        paragraphs: [
          'At $90,000, single, every two weeks, 1% local tax, and $52, federal income tax is $10,970.00, Social Security is $5,580.00, and Medicare is $1,305.00. Pennsylvania tax is $2,763.00, which is 3.07% of $90,000. Local earned income tax is $900.00. Annual take-home is $68,430.00, or $2,631.92 / two weeks. The Pennsylvania math did not change shape when federal taxable income entered the 22% band. The state line is still one rate times wages.',
          'At $210,000, single, with the same 1% and $52, Social Security stops at $11,439.00 because wages are over the $184,500 base. Additional Medicare Tax is $90.00, which is 0.9% of the $10,000 above $200,000. Pennsylvania tax is $6,447.00. Local earned income tax is $2,100.00. Federal income tax is $39,134.00. Annual take-home is $147,693.00, or $5,680.50 / two weeks. The local rate is still applied to the full $210,000. A home-rule municipality can charge more than 1%, and Philadelphia’s resident rate is already above 1%. The field accepts a rate up to 10% so those addresses can be typed. It does not look the rate up from a street address.'
        ]
      }
    ],
    table: {
      heading: '2026 Pennsylvania paycheck at a 1% local rate',
      caption: 'No 401(k). Federal income tax uses Revenue Procedure 2025-32. Pennsylvania tax is 3.07% of wages. The local column is 1% of wages plus the $52 local services tax. The two-week figure is annual take-home divided by 26 and rounded to the cent. Philadelphia is not in this table.',
      headers: ['Wages', 'Status', 'Federal income tax', 'Pennsylvania tax', 'Local tax', 'Annual take-home', 'Every two weeks'],
      rows: [
        ['$40,000', 'Single', '$2,620.00', '$1,228.00', '$452.00', '$32,640.00', '$1,255.38'],
        ['$52,000', 'Single', '$4,060.00', '$1,596.40', '$572.00', '$41,793.60', '$1,607.45'],
        ['$65,000', 'Single', '$5,620.00', '$1,995.50', '$702.00', '$51,710.00', '$1,988.85'],
        ['$65,000', 'Joint', '$3,440.00', '$1,995.50', '$702.00', '$53,890.00', '$2,072.69'],
        ['$90,000', 'Single', '$10,970.00', '$2,763.00', '$952.00', '$68,430.00', '$2,631.92'],
        ['$120,000', 'Single', '$17,570.00', '$3,684.00', '$1,252.00', '$88,314.00', '$3,396.69']
      ]
    },
    limitsHeading: 'What this Pennsylvania paycheck estimate leaves out',
    limits: [
      'The federal line is an annual standard-deduction estimate, then divided by the number of paychecks. It is not Publication 15-T withholding, and the Pennsylvania line is not an employer’s withholding table. Dependents, the child tax credit, extra withholding, a second job, and head of household are not modeled. Married filing jointly applies the joint federal brackets to this salary alone. Pennsylvania special tax forgiveness, which can reduce the state tax for eligible low incomes, is not applied. The 3.07% is charged in full on the wages you type.',
      'Local earned income tax is whatever percent you enter. This page does not read a PSD code or the DCED municipal statistics. Philadelphia wage tax is a different statute from Act 32 earned income tax. For pay on or after 1 July 2026 the resident rate is 3.735% and the nonresident rate is 3.425%, from the City of Philadelphia wage-tax table. From 1 July 2025 through 30 June 2026 those rates were 3.74% and 3.43%. Type one of them if it matches the pay you are estimating, and set the local services tax to 0 for a Philadelphia wage-tax paycheck. A rate above the usual 1% Act 511 cap is allowed here because home-rule places and Philadelphia exceed it. A local services tax above $52 is also accepted up to $156, and the result says so, because the usual cap is not a universal one.',
      'Unemployment compensation tax in Pennsylvania is an employer cost and is not deducted. There is no employee state disability tax on this page. Pre-tax health premiums, HSAs, and FSAs are not separate fields. If a premium is excluded from federal wages and from Pennsylvania compensation, subtract it from the wage field yourself before you calculate. Reciprocal agreements can change which state tax a cross-border worker owes. This form assumes the wages are Pennsylvania compensation of a Pennsylvania resident.',
      'Employer Social Security and employer Medicare are not deducted. A bonus withheld at a flat supplemental rate will not match a row that treats the bonus as ordinary wages spread over the year. Compare a dollar result with a dollar take-home. The Saskatchewan and England pages on this site are in other currencies.'
    ],
    disclaimer: 'This is a 2026 planning estimate for Pennsylvania wages, not a pay stub, a local earned income tax return, or tax advice. The IRS, the Pennsylvania Department of Revenue, the local tax collector, and your employer assess what is withheld.',
    faqs: [
      {
        q: 'Does Pennsylvania tax a traditional 401(k) deferral in 2026?',
        a: 'Yes. Employee contributions to a 401(k) are compensation for Pennsylvania personal income tax, and local earned income tax uses that compensation base. On $65,000, a $6,500 deferral cuts federal income tax from $5,620.00 to $4,840.00 and leaves the $1,995.50 state tax and the $650.00 local tax unchanged. Social Security and Medicare are also unchanged.'
      },
      {
        q: 'What local earned income tax rate should a Pennsylvania paycheck use?',
        a: 'Use the resident rate for your home municipality and school district. The common combined rate is 1%, and that is the sample. Some places are 0.5%, and a few home-rule places are higher. At $65,000, 0.5% with no local services tax is $325.00 of local tax and $52,087.00 of annual take-home. The 1% sample plus $52 is $51,710.00. Look the rate up by address before you treat either figure as your stub.'
      },
      {
        q: 'How much Pennsylvania state income tax is there on $65,000 of wages?',
        a: 'The 3.07% tax is $1,995.50. There is no standard deduction and no personal exemption in that line. Filing jointly does not change it. A 401(k) deferral does not change it. Federal income tax on the same single wage, with no deferral, is a separate $5,620.00.'
      },
      {
        q: 'Why is the Philadelphia wage tax not the 1% earned income tax?',
        a: 'Philadelphia taxes wages under its own wage tax. For pay on or after 1 July 2026 the resident rate is 3.735% and the nonresident rate is 3.425%. On $65,000 the resident line is $2,427.75, and with the local services tax at $0 the annual take-home is $49,984.25. The first half of 2026 used 3.74% for residents. Type the rate that matches the pay period you care about.'
      },
      {
        q: 'Does married filing jointly change the 3.07% Pennsylvania tax?',
        a: 'No. On $65,000 the state tax is $1,995.50 either way, and a 1% local tax is $650.00 either way. Joint filing changes the federal income tax, from $5,620.00 to $3,440.00 on this one salary, and annual take-home rises from $51,710.00 to $53,890.00. A spouse’s wages are not included.'
      },
      {
        q: 'Is the $52 local services tax a percent of wages?',
        a: 'No. It is a flat amount for the year. The sample subtracts $52 once, not $52 per paycheck. One percent of $65,000 is the separate $650.00 local earned income tax. Leaving the flat field at 52 when your municipality charges $10, or $0, overstates the deduction. Philadelphia wage tax is not this $52 field.'
      }
    ],
    relatedLinks: [
      { slug: 'ohio-paycheck-calculator', label: 'Ohio paycheck calculator for 2026', note: 'At $65,000 single with one exemption, Ohio tax is $1,344.00 rather than this $1,995.50. A 401(k) reduces Ohio tax. It does not reduce Pennsylvania tax.' },
      { slug: 'illinois-paycheck-calculator', label: 'Illinois paycheck calculator for 2026', note: 'A 4.95% state tax after a $2,925 exemption. At $65,000 single the Illinois tax is $3,072.71, and a 401(k) does reduce it.' },
      { slug: 'texas-paycheck-calculator', label: 'Texas paycheck calculator for 2026', note: 'The same federal and FICA lines at $65,000, with state income tax at $0 and annual take-home of $54,407.50.' },
      { slug: 'rent-affordability-calculator', label: 'Rent affordability calculator', note: 'Compares rent with 30% of gross income. The rent page uses a $72,000 Pennsylvania example to show the take-home share.' },
      { slug: '401k-contribution-calculator', label: '2026 401(k) contribution calculator', note: 'Check a deferral against the $24,500 limit. Pennsylvania still taxes the amount you defer.' }
    ]
  },
  'saskatchewan-take-home-pay-calculator': {
    title: 'Saskatchewan Take-Home Pay Calculator 2026 | ClearCalc',
    h1: 'Saskatchewan Take-Home Pay Calculator for 2026',
    description: 'Estimate 2026 Saskatchewan take-home pay after federal tax, Saskatchewan tax at 10.5%, 12.5%, and 14.5%, plus CPP and EI.',
    intro: [
      'This Saskatchewan take-home pay calculator estimates what a Saskatchewan resident keeps from 2026 employment income after federal income tax, Saskatchewan income tax, Canada Pension Plan contributions, and Employment Insurance. The sample is a $70,000 salary. The monthly headline is the annual take-home divided by 12 and rounded to the cent. A second line divides the same annual figure by 26.',
      'Saskatchewan’s 2026 rates, from the province’s personal income tax structure page and from CRA’s T4032-SK payroll tables, are 10.5% on taxable income up to $54,532, 12.5% from there to $155,805, and 14.5% above $155,805. The basic personal amount is $20,381, credited at 10.5%. Federal brackets, the federal basic personal amount, CPP, and EI are the same 2026 payroll amounts used on the Alberta and Manitoba pages. Quebec is a different system, with QPP and a federal abatement, and it is not estimated here.'
    ],
    steps: [
      'Enter annual gross salary in Canadian dollars. The sample, 70000, means $70,000 for the year.',
      'Press Calculate. The headline is monthly take-home. Federal tax, Saskatchewan tax, CPP, and EI are listed under it.',
      'Read the basic personal amounts before comparing the result with Alberta or Manitoba. Saskatchewan’s $20,381 is not Alberta’s $22,769 and not Manitoba’s $15,780.',
      'Use one salary. A second job, a bonus, self-employment, or pension income needs a return this form does not build.'
    ],
    howHeading: 'How 2026 Saskatchewan take-home pay is estimated',
    howItWorks: [
      'The federal piece is the same calculation as on the Alberta page. CPP is split into the base contribution, the first additional contribution, and CPP2. The first additional contribution and CPP2 are deducted in arriving at the taxable-income figure. The base CPP contribution is not deducted there. It is part of the non-refundable credit instead. EI is both a deduction from take-home and part of that credit. The federal credit also includes the basic personal amount and the Canada employment amount, and the credit is taken at 14%, the lowest federal rate for 2026. On $70,000 the federal basic personal amount stays at the maximum, $16,452, because the phase-out has not started.',
      'Saskatchewan tax uses the taxable income left after those CPP deductions. The brackets are 10.5%, 12.5%, and 14.5%. The provincial credit is the $20,381 basic personal amount, plus the base CPP contribution, plus EI, multiplied by 10.5% and rounded to the cent. There is no Saskatchewan health premium on this page. On $70,000 the provincial tax is $4,972.68. Federal tax is $7,278.19. Employee CPP, including CPP2, is $3,956.75. EI is $1,123.07. Annual take-home is $52,669.31. The headline is $4,389.11 / month, and the two-week line is $2,025.74.',
      'Alberta on the same $70,000 uses the same federal tax, the same CPP, and the same EI. Alberta tax is $3,534.79, so Alberta annual take-home is $54,107.20. The $1,437.89 gap is the provincial tax and nothing else. Manitoba on the same salary charges $5,742.67 of provincial tax and annual take-home of $51,899.32, which is $769.99 below Saskatchewan. The three provinces are not three versions of one bracket table. Alberta’s lowest rate is 8% and its basic personal amount is $22,769. Manitoba’s lowest rate is 10.8% and its basic personal amount is $15,780. Saskatchewan sits between them on this salary.',
      'A salary of $54,532 is the top of the 10.5% band. Federal tax there is $4,571.53, Saskatchewan tax is $3,173.71, CPP including CPP2 is $3,036.40, and EI is $888.87. Annual take-home is $42,861.49, or $3,571.79 / month. One dollar past $54,532 is in the 12.5% band. The calculator does not add a surtax, and it does not phase the $20,381 basic personal amount out. Manitoba’s basic personal amount does phase out above $200,000 of net income. Saskatchewan’s, on this page, does not.'
    ],
    formula: 'Tax year 2026. Saskatchewan employment income. Claim code 1.\nPensionable earnings = min(salary, $74,600)\nBase and first-additional contributory earnings = max(0, pensionable earnings − $3,500)\nBase CPP = 4.95% of that contributory amount\nFirst additional CPP = 1% of that contributory amount\nCPP2 = 4% of earnings between $74,600 and $85,000, capped at $416\nEI = 1.63% of earnings up to $68,900, capped at $1,123.07\nTaxable income = max(0, salary − first additional CPP − CPP2)\nFederal tax = 2026 federal brackets minus the 14% credit for the basic personal amount, base CPP, EI, and the Canada employment amount\nSaskatchewan tax = 10.5% / 12.5% / 14.5% brackets minus 10.5% of ($20,381 + base CPP + EI)\nBracket tops: $54,532 and $155,805\nAnnual take-home = salary − federal tax − Saskatchewan tax − CPP − CPP2 − EI\nMonthly take-home = annual take-home ÷ 12',
    formulaNotes: [
      'On $40,000, which is inside the 10.5% band, federal tax is $2,691.25 and Saskatchewan tax is $1,763.51. CPP including CPP2 is $2,171.75 and EI is $652.00. Annual take-home is $32,721.49, or $2,726.79 / month. The provincial credit is still built from the full $20,381, because nothing on this page reduces that amount as income rises. The credit cannot pull the provincial tax below zero. A salary of $0 produces $0 of tax and $0 of contributions.',
      'On $100,000, federal tax is $13,301.60 and Saskatchewan tax is $8,641.02. CPP including CPP2 has reached $4,646.45, and EI has reached the $1,123.07 cap. Annual take-home is $72,287.86, or $6,023.99 / month. On $160,000, just into the 14.5% band, federal tax is $27,902.14 and Saskatchewan tax is $16,202.38. CPP and EI stay at those same caps, $4,646.45 and $1,123.07. Annual take-home is $110,125.96, or $9,177.16 / month. The two-week figure is $4,235.61. The extra provincial rate applies only to taxable income above $155,805, not to the whole salary.'
    ],
    examplesHeading: 'Worked 2026 Saskatchewan salary examples',
    examples: [
      {
        title: '$70,000 beside Alberta and Manitoba',
        paragraphs: [
          'Federal income tax is $7,278.19. Saskatchewan income tax is $4,972.68. Employee CPP, including CPP2, is $3,956.75. EI is $1,123.07. Annual take-home is $52,669.31. The headline is $4,389.11 / month. Twelve times that headline is $52,669.32, one cent above the annual line, because the month is rounded on its own. The two-week line is $2,025.74.',
          'Alberta’s annual take-home on the same salary is $54,107.20. Manitoba’s is $51,899.32. Federal tax, CPP, and EI match on all three pages. If a comparison of the three monthly headlines does not equal the provincial-tax gap divided by 12, the cents of rounding are the reason. Use the annual lines for the dollar gap: Saskatchewan is $1,437.89 below Alberta and $769.99 above Manitoba.'
        ]
      },
      {
        title: '$54,532 at the top of the 10.5% band, and $40,000 inside it',
        paragraphs: [
          'At $54,532 the provincial tax is $3,173.71 and annual take-home is $42,861.49. The monthly headline is $3,571.79. This is the last dollar of the 10.5% bracket on the 2026 rate card. The basic personal amount on the result is still $20,381. The federal basic personal amount is still $16,452.',
          'At $40,000 the provincial tax is $1,763.51 and annual take-home is $32,721.49, or $2,726.79 / month. CPP is $2,171.75 because the salary is under the $74,600 year’s maximum pensionable earnings, and EI is $652.00 because the salary is under the $68,900 EI cap. Neither contribution has hit the ceiling that appears on the $100,000 row.'
        ]
      },
      {
        title: '$100,000, and $160,000 in the 14.5% band',
        paragraphs: [
          'At $100,000 the salary is above both the EI maximum and the CPP2 ceiling. CPP including CPP2 is $4,646.45 and EI is $1,123.07. Saskatchewan tax is $8,641.02. Federal tax is $13,301.60. Annual take-home is $72,287.86. The monthly headline is $6,023.99. The salary is still inside the 12.5% band, which runs through $155,805.',
          'At $160,000 the provincial tax is $16,202.38 and federal tax is $27,902.14. The CPP and EI lines do not move. Annual take-home is $110,125.96, or $9,177.16 / month. The slice above $155,805 is what draws 14.5%. A reader who multiplies the whole $160,000 by 14.5% will overshoot this provincial line by a wide margin, because the lower bands and the $20,381 credit are still in the formula.'
        ]
      }
    ],
    table: {
      heading: '2026 Saskatchewan take-home pay at selected salaries',
      caption: 'One employment salary, federal and Saskatchewan claim code 1, no other credits. CPP includes CPP2. The monthly figure is annual take-home divided by 12 and rounded to the cent. Alberta and Manitoba are not in the tax columns.',
      headers: ['Salary', 'Federal income tax', 'Saskatchewan tax', 'Annual take-home', 'Monthly'],
      rows: [
        ['$40,000', '$2,691.25', '$1,763.51', '$32,721.49', '$2,726.79'],
        ['$54,532', '$4,571.53', '$3,173.71', '$42,861.49', '$3,571.79'],
        ['$70,000', '$7,278.19', '$4,972.68', '$52,669.31', '$4,389.11'],
        ['$100,000', '$13,301.60', '$8,641.02', '$72,287.86', '$6,023.99'],
        ['$160,000', '$27,902.14', '$16,202.38', '$110,125.96', '$9,177.16']
      ]
    },
    limitsHeading: 'What this Saskatchewan estimate leaves out',
    limits: [
      'The result is an annual claim-code-1 calculation divided by 12. It is not the CRA payroll deductions online calculator’s per-pay rounding, and a bonus can be withheld on a different method. The spouse or common-law partner amount, the dependent child amount, the age amount, the senior supplement, the disability amount, and the pension credit are listed on the province’s 2026 credit table and are not applied here. Only the basic personal amount, the base CPP credit, the EI credit, and, on the federal side, the Canada employment amount are in the formula.',
      'Saskatchewan has no provincial health premium in this estimate. Ontario’s page adds the Ontario Health Premium. British Columbia’s page adds the B.C. tax reduction. Do not subtract either of those from a Saskatchewan salary. Quebec employees pay QPP, a lower EI rate, and the Quebec Parental Insurance Plan, and they receive the federal abatement. None of that is in these figures.',
      'A second job can push CPP or EI over the annual maximum when the two employers do not coordinate. This form assumes one salary and stops contributions at the annual caps. Union dues, a registered pension plan contribution other than the CPP treatment above, and taxable benefits are not separate fields. The low income tax reduction some provinces offer is not part of the 2026 Saskatchewan structure used here.',
      'Employer CPP and employer EI are not deducted. Currency is Canadian dollars. A Pennsylvania or Illinois paycheck is in US dollars and uses Social Security and Medicare rather than CPP and EI. Do not subtract one from the other.'
    ],
    disclaimer: 'This is a 2026 planning estimate for Saskatchewan employment income, not a pay stub, a TD1SK, or tax advice. The Canada Revenue Agency and your employer assess what is withheld.',
    faqs: [
      {
        q: 'What are Saskatchewan’s 2026 income tax rates?',
        a: '10.5% up to $54,532 of taxable income, 12.5% from there to $155,805, and 14.5% above $155,805. The basic personal amount is $20,381 and the credit is taken at 10.5%. Those are the figures on the province’s 2026 personal income tax structure page and in CRA T4032-SK. The indexing factor for 1 January 2026 is 2.0%, and the basic personal amount also includes the extra increase under the Saskatchewan Affordability Act.'
      },
      {
        q: 'How much Saskatchewan tax comes off a $70,000 salary?',
        a: 'Saskatchewan income tax is $4,972.68. Federal income tax is $7,278.19. CPP, including CPP2, is $3,956.75 and EI is $1,123.07. Annual take-home is $52,669.31, or $4,389.11 a month. The provincial line is after the 10.5% credit, not 10.5% of the whole salary.'
      },
      {
        q: 'Why is Saskatchewan take-home pay below Alberta at the same $70,000?',
        a: 'Federal tax, CPP, and EI match. Alberta tax is $3,534.79 and Saskatchewan tax is $4,972.68. Annual take-home is $54,107.20 in Alberta and $52,669.31 in Saskatchewan. The $1,437.89 gap is the provincial tax. Manitoba is $51,899.32, another $769.99 below Saskatchewan.'
      },
      {
        q: 'Does Saskatchewan add a health premium in 2026?',
        a: 'Not on this page, and not in the 2026 rate structure it uses. Ontario’s calculator adds the Ontario Health Premium once taxable income is over $20,000. British Columbia can reduce provincial tax with the B.C. tax reduction. Neither adjustment belongs on a Saskatchewan salary.'
      },
      {
        q: 'Does the $20,381 Saskatchewan basic personal amount shrink at a high salary?',
        a: 'Not in this calculator. It stays $20,381 at $40,000, at $70,000, and at $160,000. The federal basic personal amount is a different figure, $16,452 on these salaries, and it does start to fall once the federal phase-out begins. Manitoba’s provincial amount phases out from $200,000 to $400,000. Saskatchewan’s does not follow that rule here.'
      }
    ],
    relatedLinks: [
      { slug: 'nova-scotia-take-home-pay-calculator', label: 'Nova Scotia take-home pay calculator for 2026', note: 'Same federal tax, CPP, and EI at $70,000. Nova Scotia tax is $7,145.72 rather than this $4,972.68, and the monthly headline is $4,208.02.' },
      { slug: 'manitoba-take-home-pay-calculator', label: 'Manitoba take-home pay calculator for 2026', note: 'Same federal tax, CPP, and EI at $70,000. Manitoba tax is $5,742.67 rather than $4,972.68.' },
      { slug: 'alberta-take-home-pay-calculator', label: 'Alberta take-home pay calculator for 2026', note: 'Same federal pieces. Alberta tax is $3,534.79 and annual take-home is $54,107.20.' },
      { slug: 'ontario-take-home-pay-calculator', label: 'Ontario take-home pay calculator for 2026', note: 'Same federal payroll system, plus Ontario tax and the Ontario Health Premium.' },
      { slug: 'british-columbia-take-home-pay-calculator', label: 'British Columbia take-home pay calculator for 2026', note: 'The 2026 B.C. brackets and the B.C. tax reduction, on the same federal base.' }
    ]
  },
  'queensland-stamp-duty-calculator': {
    title: 'Queensland Stamp Duty Calculator 2026 (Transfer Duty) | ClearCalc',
    h1: 'Queensland Stamp Duty Calculator for 2026',
    description: 'Estimate Queensland transfer duty, including the home concession, the first home concession from 9 June 2024, and 8% additional foreign acquirer duty.',
    intro: [
      'This Queensland stamp duty calculator estimates transfer duty on a dutiable value you type, using the rate tables the Queensland Revenue Office publishes for transfer duty and for the home concessions. The sample is an established first home at $730,000. The headline is $6,555.00. The number you type is treated as the dutiable value already, the greater of the consideration and the unencumbered value. This form does not know the market value, and it does not split a property into a residential part and a non-residential part.',
      'General duty and home-concession duty are different scales. A later home uses the home concession scale. An established first home, for a contract on or after 9 June 2024, starts from that home scale and then subtracts a first home concession amount that disappears at $800,000. A first home that is a new home, and first home vacant land, have had a full concession from 1 May 2025, with no price cap on the residential value. Additional foreign acquirer duty is 8% of the dutiable value. From 1 August 2026 the concession pages require an eligible transferee to be an Australian citizen, a permanent resident, or a specified foreign retiree. This page does not give the concessions to a foreign person. Victorian land transfer duty and New South Wales transfer duty are different statutes.'
    ],
    steps: [
      'Enter the dutiable value in Australian dollars. The sample is 730000.',
      'Choose the buyer. Established first home is the sample. Later home uses the home concession only. New home and vacant land use the full first home concessions. No home concession uses the general scale.',
      'Choose whether additional foreign acquirer duty applies. A foreign person on this page pays general duty plus 8%, and the home concessions are turned off.',
      'Press Calculate. Read the transfer duty, the foreign duty, the home-concession duty before any first home deduction, and the general duty beside it.'
    ],
    howHeading: 'How Queensland transfer duty is calculated',
    howItWorks: [
      'Both published scales charge a rate for each $100, or part of $100. A value that is not a multiple of $100 rounds up to the next $100 before the rate is applied. General duty is nil up to $5,000, then $1.50 per $100 over $5,000 until $75,000, then $1,050 plus $3.50 per $100 over $75,000 until $540,000, then $17,325 plus $4.50 per $100 over $540,000 until $1,000,000, then $38,025 plus $5.75 per $100 over $1,000,000. At $730,000 that general duty is $25,875.00. At $1,000,000 it is $38,025.00. At $5,000 it is $0.00, and at $5,001 it is $1.50, because the first dollar past $5,000 is a part of $100.',
      'The home concession scale is $1.00 per $100 up to $350,000, then $3,500 plus $3.50 per $100 over $350,000 until $540,000, then $10,150 plus $4.50 per $100 over $540,000 until $1,000,000, then $30,850 plus $5.75 per $100 over $1,000,000. The Queensland Revenue Office’s own example of a later home at $950,000 is $10,150 plus $4.50 for each $100 in the $410,000 above $540,000, which is $28,600. This calculator returns $28,600.00 for that value. At $730,000 the home concession duty is $18,700.00, which is $7,175.00 below the general duty.',
      'The established first home concession subtracts a fixed amount from that home duty. Through $709,999.99 the subtraction is $17,350. It then falls by $1,735 at each $10,000 step, and it is nil from $800,000. At $730,000 the subtraction is $12,145, and $18,700.00 minus $12,145.00 is $6,555.00, the sample headline. The Revenue Office’s published $730,000 example is the same $6,555. At $650,000 and at $700,000 the home duty does not exceed $17,350, so transfer duty is $0.00. At $700,001 the home duty is $17,354.50 and the concession is still $17,350, so duty is $4.50. At $795,000 the home duty is $21,625 and the concession for the $790,000 band is $1,735, so duty is $19,890.00, which is the Revenue Office’s worked example. At $850,000 the first home concession is gone and the result is the home duty, $24,100.00.',
      'A new home or vacant land chosen as a first home, and not as a foreign purchase, has transfer duty of $0.00 on this page at any price. At $900,000 the new-home result is $0.00, while the home-concession line still printed for comparison is $26,350.00 and the general line is $33,525.00. Those comparison lines are not added to the headline. A foreign person at $730,000 pays the general $25,875.00 plus 8% of $730,000, which is $58,400.00. The headline is $84,275.00. The first home subtraction is not used.'
    ],
    formula: 'Queensland transfer duty. Rates current on the Queensland Revenue Office pages updated 31 July 2026.\nGeneral: nil to $5,000; $1.50 per $100 over $5,000 to $75,000; $1,050 + $3.50 per $100 over $75,000 to $540,000; $17,325 + $4.50 per $100 over $540,000 to $1,000,000; $38,025 + $5.75 per $100 over $1,000,000.\nHome concession: $1.00 per $100 to $350,000; $3,500 + $3.50 per $100 over $350,000 to $540,000; $10,150 + $4.50 per $100 over $540,000 to $1,000,000; $30,850 + $5.75 per $100 over $1,000,000.\nEach “per $100” uses the excess rounded up to the next $100.\nEstablished first home, contract on or after 9 June 2024: home duty minus $17,350 through $709,999.99, then $1,735 less at each $10,000, and nil from $800,000. Duty is not negative.\nNew home or vacant land, first home, from 1 May 2025: transfer duty $0 on the residential value.\nForeign person: general duty + 8% of dutiable value. Home concessions are not applied.',
    formulaNotes: [
      'The home scale is not cheaper at every price. At $5,000 general duty is $0 and the home scale is $50, because the home scale charges $1 per $100 from the first dollar. At $10,000 general duty is $75 and home duty is $100. At $15,000 both are $150. Above that, through the prices people actually pay for a home, the home scale is the lower one. At $450,000 a later home pays $7,000.00. Selecting the home concession on a token value under about $15,000 can raise the duty. The calculator follows the published table rather than silently switching you back to the general scale.',
      'At $1,000,000 a later home pays $30,850.00 and a purchase with no concession pays $38,025.00. The $7,175.00 gap is the home scale. An established first home at that price gets no further concession, because $800,000 is the end of the extra deduction. A new home at $1,000,000 is $0 of transfer duty on this page if you select that concession and you are not a foreign person. The 8% foreign duty on $1,000,000 would be $80,000, added to general duty, not to the concession.'
    ],
    examplesHeading: 'Worked Queensland transfer duty examples',
    examples: [
      {
        title: 'A $730,000 established first home',
        paragraphs: [
          'Home concession duty is $18,700.00. The first home concession for the $730,000 band is $12,145. Transfer duty is $6,555.00. Additional foreign acquirer duty is $0.00. General duty on the same value, shown for comparison, is $25,875.00. The effective rate on the $6,555.00 headline is 0.90%. The Revenue Office’s concession example for this band is the same $6,555.',
          'Move the same buyer to $650,000 or to $700,000 and the headline is $0.00. The concession amount, $17,350, covers the home duty. At $700,001 the headline is $4.50. That is not a second exemption. It is $17,354.50 of home duty minus $17,350, after the part-of-$100 rounding on the $160,001 above $540,000.'
        ]
      },
      {
        title: 'The Revenue Office’s $795,000 and $950,000 examples',
        paragraphs: [
          'An established first home at $795,000 has home duty of $21,625.00. The concession for $790,000 to $799,999.99 is $1,735. Transfer duty is $19,890.00. That is the arithmetic in the Queensland Revenue Office’s first home example: $10,150 plus $4.50 on each $100 of the $255,000 above $540,000, then minus $1,735.',
          'A later home at $950,000 does not get the first home subtraction. Home duty is $28,600.00, the office’s published total of $10,150 plus $18,450. General duty is higher. Selecting “no home concession” on $950,000 would use the general scale instead, and the headline would not be $28,600.00. The concession is a claim about how you will use the home, not an automatic setting for every house.'
        ]
      },
      {
        title: 'An $850,000 first home, a new home, and a foreign buyer',
        paragraphs: [
          'At $850,000 an established first home is past $800,000, so the extra concession is nil. The headline is the home duty, $24,100.00. A new home at $900,000, selected as a first home and not as a foreign purchase, is $0.00 of transfer duty. The comparison lines still show $26,350.00 of home duty and $33,525.00 of general duty, so you can see what the concession removed. Vacant land at $400,000 under the first home vacant land choice is also $0.00. Those full concessions date from 1 May 2025 and assume the whole value is the residential land the concession covers.',
          'A foreign person at $730,000 does not receive the $6,555 result. General duty is $25,875.00 and additional foreign acquirer duty is $58,400.00. The headline is $84,275.00. The 8% is charged on the dutiable value, not on the duty. A specified foreign retiree who is actually eligible for a concession is outside this switch. The page treats every foreign-person selection as ineligible, which is the ordinary case from 1 August 2026.'
        ]
      }
    ],
    table: {
      heading: 'Queensland transfer duty at selected 2026 values',
      caption: 'Not a foreign person, except the last row. Established first home uses the concession for contracts on or after 9 June 2024. Later home uses the home concession scale only. The $6,555, $19,890, and $28,600 rows match Queensland Revenue Office examples.',
      headers: ['Dutiable value', 'Buyer', 'Transfer duty', 'Foreign duty', 'Headline'],
      rows: [
        ['$650,000', 'Established first home', '$0.00', '$0.00', '$0.00'],
        ['$700,000', 'Established first home', '$0.00', '$0.00', '$0.00'],
        ['$730,000', 'Established first home', '$6,555.00', '$0.00', '$6,555.00'],
        ['$795,000', 'Established first home', '$19,890.00', '$0.00', '$19,890.00'],
        ['$850,000', 'Established first home', '$24,100.00', '$0.00', '$24,100.00'],
        ['$950,000', 'Later home', '$28,600.00', '$0.00', '$28,600.00'],
        ['$730,000', 'Foreign person', '$25,875.00', '$58,400.00', '$84,275.00']
      ]
    },
    limitsHeading: 'What this Queensland duty estimate leaves out',
    limits: [
      'The form assumes the whole dutiable value is residential land of the kind the concession describes. A business, a farm, or a residence with a non-residential part can be apportioned, and the concession does not cover the non-residential part. The Revenue Office’s calculator is the one that handles that split. This page also does not test whether you will live in the home, whether you have owned a home before, or whether a new home meets the definition of a new home.',
      'Additional foreign acquirer duty is added only when you select a foreign person, and the concessions are then turned off. A specified foreign retiree who remains eligible after 1 August 2026 is not given a separate switch. Transactions entered into before 1 August 2026 had different residency rules for the concessions. The rate tables themselves, including the first home amounts from 9 June 2024 and the full new-home concession from 1 May 2025, are the ones the Revenue Office was still publishing at its 31 July 2026 update.',
      'Transfer duty is not the only cost of a purchase. Mortgage registration, title transfer fees, and insurance are not added. There is no seniors or pensioner concession in the published home rates, and none is applied here. A trust or a company can be a foreign person under the additional foreign acquirer duty rules even when the people behind it are not, and this form cannot see through a structure.',
      'Victoria’s first home concession at $700,000 is not this $0 Queensland result, and NSW transfer duty is a different card again. England’s stamp duty land tax is in pounds. The mortgage calculator on this site is a US-dollar loan payment and does not add Queensland duty or convert currencies.'
    ],
    disclaimer: 'This is a planning estimate from the Queensland Revenue Office rate tables, not an assessment, a concession ruling, or tax advice. The Queensland Revenue Office assesses the duty.',
    faqs: [
      {
        q: 'How much Queensland stamp duty is there on a $730,000 established first home?',
        a: 'Transfer duty is $6,555.00 if the first home concession applies and additional foreign acquirer duty does not. Home concession duty is $18,700.00, and the first home amount for the $730,000 band is $12,145. General duty on the same value is $25,875.00. The $6,555 figure is the Queensland Revenue Office’s published example for that band.'
      },
      {
        q: 'Is an established Queensland first home under $700,000 free of transfer duty?',
        a: 'On this rate card, yes, through $700,000. At $650,000 and at $700,000 the headline is $0.00 because the $17,350 concession covers the home duty. At $700,001 the duty is $4.50. A later home is not free at those prices. The new-home and vacant-land concessions are a different, fuller exemption and they are not limited to $700,000.'
      },
      {
        q: 'What does the Queensland home concession charge on a $950,000 later home?',
        a: '$28,600.00. That is $10,150 plus $4.50 for each $100 of the $410,000 above $540,000, the worked example on the Revenue Office’s home concession page. There is no extra first home subtraction, because this buyer has owned a home before. The general scale would be higher.'
      },
      {
        q: 'Does a foreign buyer get the Queensland first home concession?',
        a: 'Not on this page. From 1 August 2026 the concession eligibility is aimed at Australian citizens, permanent residents, and specified foreign retirees. A foreign person at $730,000 pays general duty of $25,875.00 plus 8% additional foreign acquirer duty of $58,400.00. The headline is $84,275.00. The 8% is on the dutiable value.'
      },
      {
        q: 'Is Queensland transfer duty the same figure as Victoria at $700,000?',
        a: 'No. An established Queensland first home at $700,000 is $0.00 of transfer duty on this calculator. Victoria’s first home concession at $700,000 is a different formula under the Duties Act 2000 (Vic), and the Victoria page on this site does not return zero at that price. NSW is a third table. Use the state where the land is.'
      }
    ],
    relatedLinks: [
      { slug: 'victoria-stamp-duty-calculator', label: 'Victoria stamp duty calculator for 2026', note: 'Victorian land transfer duty, including that state’s first home concession through $750,000 and 8% foreign purchaser additional duty.' },
      { slug: 'nsw-stamp-duty-calculator', label: 'NSW stamp duty calculator for 2026/27', note: 'New South Wales transfer duty and a 9% surcharge. Not this Queensland scale.' },
      { slug: 'australia-take-home-pay-calculator', label: 'Australia take-home pay calculator for 2026–27', note: 'Resident income tax and the Medicare levy on a salary. It is not the duty on a house.' },
      { slug: 'england-stamp-duty-calculator', label: 'England stamp duty calculator', note: 'Residential SDLT in pounds. A different statute and a different currency.' }
    ]
  },
  'uk-working-days-calculator': {
    title: 'UK Working Days Calculator 2026, Excluding Bank Holidays | ClearCalc',
    h1: 'UK Working Days Calculator, with Bank Holidays',
    description: 'Count inclusive weekdays in England and Wales, Scotland, or Northern Ireland, and remove bank holidays from the GOV.UK list for 2025 through 2028.',
    intro: [
      'This UK working days calculator counts the weekdays from a start date through an end date, and it can remove bank holidays. Both ends count when they are working days. The sample runs from 1 January 2026 through 31 December 2026 for England and Wales and excludes bank holidays. The headline is 253 working days. The year has 261 weekdays. Eight of them are bank holidays, and all eight fall on a weekday, so 261 minus 8 is 253.',
      'The dates come from the GOV.UK bank-holidays list, retrieved on 27 October 2026. That list includes substitute days, so Boxing Day 2026, which falls on Saturday 26 December, is observed on Monday 28 December. Scotland’s list also includes Monday 15 June 2026, the World Cup bank holiday confirmed by the Scottish Government. England and Wales do not have that day. Northern Ireland’s list includes St Patrick’s Day and the Battle of the Boyne. Local council holidays, school holidays, and a workplace shutdown are not removed. The list on this page covers 2025, 2026, 2027, and 2028 only.'
    ],
    steps: [
      'Enter the start date and the end date. The sample is 2026-01-01 through 2026-12-31. If you reverse them, the calculator puts the earlier date first and says so.',
      'Choose England and Wales, Scotland, or Northern Ireland. The bank holidays are not the same list.',
      'Leave “Exclude bank holidays” on if you want those dates removed. Choose “Count every weekday” if you want the 261 weekdays of 2026 with the holidays left in.',
      'Press Calculate. The headline is the working-day count. The lines under it show how many bank holidays were removed and name them when the list is short enough to print.'
    ],
    howHeading: 'How UK working days are counted',
    howItWorks: [
      'The count is inclusive. A working day that stands alone is 1 working day, unless it is a bank holiday you asked to remove. Thursday 1 January 2026, on its own, is 0 working days in every part of the UK this page covers, because it is New Year’s Day. The days-between-dates calculator does not work this way. Its elapsed count from 1 January to 31 December 2026 is 364, which drops the end date and keeps the weekends. The US business-days page is inclusive too, but it removes US federal holidays and lands on 250 for the same year.',
      'Weekends are Saturday and Sunday. They are never working days here, and a bank holiday is removed only when it falls on a weekday. The GOV.UK list already moves weekend Christmas and Boxing Day dates onto a substitute weekday, so this page does not invent a second substitute. In 2026, Christmas Day is Friday 25 December and the Boxing Day substitute is Monday 28 December. The Saturday and Sunday in between are weekend days either way. England and Wales therefore lose two weekdays at Christmas, not four.',
      'England and Wales in 2026 lose eight weekdays: 1 January, Good Friday 3 April, Easter Monday 6 April, Early May on 4 May, Spring on 25 May, Summer on 31 August, Christmas Day, and 28 December. Scotland loses ten. It adds 2 January, the 15 June World Cup holiday, the summer holiday on 3 August rather than 31 August, and St Andrew’s Day on 30 November, and it does not have Easter Monday. The net against England is two extra weekdays removed, so Scotland’s 2026 headline is 251 working days, not 253. Northern Ireland also lands on 251. Against England it adds 17 March and 13 July, and it keeps Easter Monday and the 31 August summer holiday. Thirteen July is the substitute, because 12 July 2026 is a Sunday.',
      'Leave the holidays in and the 2026 headline is 261 working days in every nation. The nation choice still prints, but nothing is subtracted. The same 261 is what the day-counter page states as the weekday total for the calendar year. This tool’s job is the further subtraction. A span that reaches outside 2025 through 2028 is rejected when holidays are excluded, because the stored list stops there. Counting every weekday is still allowed on a longer span, up to 50 years.'
    ],
    formula: 'Working days = weekdays in the inclusive span − bank holidays that fall on those weekdays\nWeekdays are Monday to Friday\nBank holidays are the GOV.UK observed dates for the nation you choose, 2025 through 2028\nEngland and Wales, calendar year 2026: 261 weekdays − 8 bank holidays = 253\nScotland, calendar year 2026: 261 − 10 = 251, including 15 June\nNorthern Ireland, calendar year 2026: 261 − 10 = 251, including 17 March and 13 July\nThe same year with holidays left in: 261\n2028 has 260 weekdays, not 261',
    formulaNotes: [
      'Good Friday to Easter Monday 2026 is 3 April through 6 April. In England and Wales both Friday and Monday are bank holidays, the weekend is in the middle, and the working-day count is 0. In Scotland only the Friday is a bank holiday, so the Monday remains and the count is 1 working day. That is the cleanest way to see that Easter Monday is not a Scottish bank holiday on this list.',
      'The week of 15 June 2026 through 19 June is Monday to Friday. Scotland removes the Monday as the World Cup bank holiday and counts 4 working days. England and Wales do not have that holiday, so the same five dates are 5 working days. A UK-wide project calendar that uses the England list will treat 15 June as a working day. A Scotland calendar will not. The Scottish Government’s bank-holiday page is the confirmation for that one-off Monday. It is not in the 2025 or 2027 Scotland lists stored here.'
    ],
    examplesHeading: 'Worked UK working-day examples',
    examples: [
      {
        title: 'The 2026 calendar year in each part of the UK',
        paragraphs: [
          'England and Wales, with bank holidays removed, is 253 working days. Eight holidays are named under the result, from New Year’s Day through the Boxing Day substitute. Scotland is 251, with ten holidays named, including 2 January, 15 June, and 30 November. Northern Ireland is 251, with ten holidays named, including 17 March and 13 July. All three counts start from 261 weekdays and 104 weekend days. The inclusive calendar count is 365. 2026 is not a leap year.',
          'Turn the holiday switch off and each of those headlines becomes 261. The US business-days calculator, on the same dates with federal holidays removed, is 250, because it removes eleven federal holidays rather than eight bank holidays. The day counter’s 364 is a third number. None of the three is wrong. They are counting different sets.'
        ]
      },
      {
        title: 'Easter 2026, and the Scotland World Cup Monday',
        paragraphs: [
          'From Friday 3 April 2026 through Monday 6 April, England and Wales have 0 working days. Two bank holidays are removed and two weekend days sit between them. Scotland on the same dates has 1 working day, because Easter Monday is not on the Scotland list. Northern Ireland follows England and Wales at Easter and also has 0.',
          'From Monday 15 June 2026 through Friday 19 June, Scotland has 4 working days and names the World Cup bank holiday. England and Wales have 5, and the holiday line says none were removed. If a contract defines “business days” as England and Wales bank holidays even for work done in Scotland, use the England list. The calculator cannot see the contract. It only sees the nation you choose.'
        ]
      },
      {
        title: '2025, 2027, and the leap year 2028',
        paragraphs: [
          'The full years 2025 and 2027 also have 261 weekdays. England and Wales are 253 working days in each of those years, after 8 bank holidays. Scotland is 252 in both, after 9, because the 2026 World Cup Monday is not repeated. Northern Ireland is 251 in both, after 10. The substitute dates are already the dates in the GOV.UK list. In 2025, St Andrew’s Day is stored as 1 December, the Monday, rather than Sunday 30 November.',
          '2028 has 260 weekdays, not 261. It is a leap year and 1 January is a Saturday, so the two extra days of the 366-day year are weekend days and the weekdays do not gain one. New Year’s Day is stored as Monday 3 January. England and Wales have 252 working days after 8 bank holidays. Scotland has 251 after 9. Northern Ireland has 250 after 10. A span that includes 2024, or 2029, is refused while the holiday switch is on. The list this page copied does not go there.'
        ]
      }
    ],
    table: {
      heading: 'Working days in a full UK calendar year',
      caption: 'Inclusive, Monday to Friday, with the GOV.UK bank holidays for that nation removed. 2025, 2026, and 2027 each have 261 weekdays. 2028 has 260. Scotland’s 2026 count includes 15 June. Leaving holidays in does not change the weekday total.',
      headers: ['Year', 'Weekdays', 'England and Wales', 'Scotland', 'Northern Ireland'],
      rows: [
        ['2025', '261', '253', '252', '251'],
        ['2026', '261', '253', '251', '251'],
        ['2027', '261', '253', '252', '251'],
        ['2028', '260', '252', '251', '250']
      ]
    },
    limitsHeading: 'What this UK working-day count leaves out',
    limits: [
      'Bank holidays are not a right to a paid day off. GOV.UK says an employer does not have to give paid leave on a bank holiday. This page only removes the date from a weekday count. Privilege holidays, trades holidays, and local holidays set by a council are not in the GOV.UK national lists. Edinburgh and Glasgow do not share one local calendar, and neither is modeled.',
      'The stored dates stop at the end of 2028. A royal proclamation can add a bank holiday after this page was built. The 15 June 2026 Scotland holiday is included because it was already on the GOV.UK list retrieved on 27 October 2026. A later proclamation for 2027 or 2028 would be missing until the list is updated. Christmas and Boxing Day substitutes that are already in the source list are included. This page does not compute Easter. It copies the published dates.',
      'A Tuesday-to-Saturday workplace will not match a Monday-to-Friday count. Neither will a worker whose contract says bank holidays are ordinary working days. Count every weekday in that second case. The US federal-holiday calculator is the wrong list for a UK contract, and this list is the wrong one for a US payroll calendar.',
      'The count is not a court time limit and not a payment-clearing rule. Some deadlines use a different convention for the first day, the last day, or a day the banks are shut in one nation only. Scottish banks often follow the England and Wales closure dates for business reasons even when the Scottish bank holiday is different. If the question is “is the bank open?”, check the bank. If the question is “how many weekdays are not national bank holidays?”, use this page.'
    ],
    disclaimer: 'This counts weekdays and removes the GOV.UK bank holidays stored for 2025 through 2028. It is not a statement of your leave entitlement, a banking calendar, or legal advice.',
    faqs: [
      {
        q: 'How many working days does England and Wales have in 2026?',
        a: '253, if the eight bank holidays are removed. The year has 261 weekdays, and all eight holidays fall on weekdays. Leave the holidays in and the headline is 261. The inclusive calendar count is 365. Scotland and Northern Ireland are each 251 for the same year.'
      },
      {
        q: 'Why does Scotland have fewer working days than England in 2026?',
        a: 'Scotland’s list removes ten weekdays and England’s removes eight. Scotland adds 2 January, 15 June, and St Andrew’s Day on 30 November, and its summer holiday is 3 August rather than 31 August. It does not have Easter Monday. The net is two fewer working days, 251 rather than 253. In 2025 and 2027, without the World Cup Monday, Scotland is 252.'
      },
      {
        q: 'Is Easter Monday 2026 a bank holiday in Scotland?',
        a: 'No. From 3 April through 6 April 2026, England and Wales have 0 working days and Scotland has 1, the Monday. Northern Ireland keeps Easter Monday, so it matches England on that weekend. Good Friday is a bank holiday in all three lists.'
      },
      {
        q: 'Is 15 June 2026 a working day in England?',
        a: 'Yes on this calculator. The World Cup bank holiday is on the Scotland list only. The week of 15 June through 19 June is 5 working days in England and Wales and 4 in Scotland. A later year in the stored list does not repeat that Monday.'
      },
      {
        q: 'Which years of UK bank holidays can this page remove?',
        a: '2025, 2026, 2027, and 2028, from the GOV.UK list retrieved on 27 October 2026. A span outside those years is refused while holidays are excluded. You can still count every weekday on a longer span. 2028 has 260 weekdays and 252 working days in England and Wales.'
      }
    ],
    relatedLinks: [
      { slug: 'canada-business-days-calculator', label: 'Canada business days calculator', note: 'Ontario has 253 business days in 2026, the same count as England and Wales, but the holidays are Family Day, Victoria Day, and Canada Day rather than these bank holidays. British Columbia has 250.' },
      { slug: 'us-business-days-calculator', label: 'US business days calculator', note: 'Inclusive weekdays with US federal holidays removed. Calendar year 2026 is 250 business days, not 253.' },
      { slug: 'date-difference-calculator', label: 'Days between two dates', note: 'Elapsed calendar days, including weekends. 1 January to 31 December 2026 is 364 on that page.' },
      { slug: 'scotland-take-home-pay-calculator', label: 'Scotland take-home pay calculator for 2026/27', note: 'Scottish income tax and National Insurance. It does not count working days or pro-rate a salary by this 251.' },
      { slug: 'age-calculator', label: 'Exact age calculator', note: 'Completed years, months, and days from a birthday. It does not drop weekends or bank holidays.' }
    ]
  },
  'gravel-calculator': {
    title: 'Gravel Calculator: Cubic Yards to Short Tons | ClearCalc',
    h1: 'Gravel Calculator for Cubic Yards and Tons',
    description: 'Convert a rectangular area in feet and a depth in inches into cubic yards and short tons, using dry gravel at 105 lb per cubic foot or a wetter density.',
    intro: [
      'This gravel calculator turns a rectangular area into a volume, then into weight. Enter the length and width in feet, the depth in inches, the material, and a waste allowance. The sample is 10 feet by 20 feet, 3 inches deep, using dry gravel at 105 pounds per cubic foot and no waste. The headline is 2.625 short tons. The volume under that headline is 50 cubic feet, which is 1.852 cubic yards.',
      'The 105 lb figure is the dry-gravel density on the Engineering ToolBox dirt and mud density table, which also lists that density as about 1,680 kg per cubic metre. Wet gravel on the same table is 125 lb per cubic foot. Dry sand is 97. A quarry ticket is a weighed load, and a damp or compacted product will not hit the table exactly. The mulch calculator on this site stops at volume, because mulch is bought by the bag or the yard. Gravel is often bought by the ton, so this page does the extra step. It does not price the load or choose a stone size.'
    ],
    steps: [
      'Enter the length and the width in feet. The sample is 10 by 20. Measure the area you will cover, not the whole yard.',
      'Enter the depth in inches. Three inches is the sample. Type 3, not 0.25 feet. The form divides by 12.',
      'Choose dry gravel, wet gravel, or dry sand. Then enter a waste allowance from 0 to 100 percent. The sample is 0.',
      'Press Calculate. Read the short tons, the cubic yards, the tonne equivalent, the order rounded up to the next tenth of a ton, and the count of 0.5 cubic foot bags.'
    ],
    howHeading: 'How cubic feet of gravel become tons',
    howItWorks: [
      'Volume in cubic feet is length times width times depth, after the depth in inches is divided by 12. The sample is 10 × 20 × 3 / 12, which is 50 cubic feet. Divide by 27 to get cubic yards: 50 / 27 is 1.8518…, shown as 1.852. The same division can be written as length times width times depth in inches, divided by 324. The mulch page uses that 324 figure for a different material. The yards match. The shopping unit does not.',
      'Weight is the cubic feet, after waste, times the density. Dry gravel is 50 × 105 = 5,250 lb. A short ton is 2,000 lb, so the headline is 5,250 / 2,000 = 2.625 short tons. One cubic yard of the same gravel is 27 × 105 = 2,835 lb, which is 1.4175 short tons and displays as 1.418. A rule of thumb that says “a yard of gravel is 1.4 tons” is that density rounded. It is a fair memory aid for 105 lb per cubic foot and a poor one for wet gravel. Wet gravel at 125 lb per cubic foot on the same 50 cubic feet is 6,250 lb, or 3.125 short tons. Dry sand at 97 lb per cubic foot is 4,850 lb, or 2.425 short tons.',
      'The tonne line converts pounds with the exact factor 0.45359237 kilograms per pound. The sample is 2.381 tonnes. That is a metric tonne of 1,000 kg, not a short ton and not a UK long ton of 2,240 lb. The Engineering ToolBox rounds 105 lb per cubic foot to 1,680 kg per cubic metre. Using 1,680 instead of the pound-derived density moves the kilograms slightly. This page stays with 105 lb per cubic foot so the short-ton headline and the pound line are the same multiplication. The tonne line is the metric reading of those pounds.',
      'Two purchase lines sit under the weight, and they are alternatives. The bulk line rounds the short tons up to the next 0.1 ton. The sample 2.625 becomes 2.7, because 2.625 is already above 2.6. A yard that sells by the tenth will not put 2.625 on the ticket. The bag line divides the cubic feet by 0.5 and rounds up. The sample is 100 bags. Buying 2.7 tons and 100 bags covers the area twice. The waste field is the allowance for a pile that does not leave the truck cleanly. Ten percent on the sample raises the volume to 55 cubic feet, 2.037 cubic yards, and 2.888 short tons, and the bag count to 110.'
    ],
    formula: 'Cubic feet = length (ft) × width (ft) × depth (in) / 12\nCubic yards = cubic feet / 27\nWith waste: cubic feet × (1 + waste% / 100)\nPounds = cubic feet with waste × density\nDry gravel density = 105 lb per cubic foot\nWet gravel density = 125 lb per cubic foot\nDry sand density = 97 lb per cubic foot\nShort tons = pounds / 2,000\nTonnes = pounds × 0.45359237 / 1,000\nOne cubic yard of dry gravel = 2,835 lb = 1.418 short tons\n0.5 cu ft bags = cubic feet with waste / 0.5, rounded up\nCoverage of one cubic yard = 27 × 12 / depth in inches, in square feet',
    formulaNotes: [
      'At 3 inches, one cubic yard covers 108 square feet. The sample area is 200 square feet, and 200 / 108 is 1.8518 cubic yards, the same 1.852 the volume line shows. At 2 inches the coverage is 162 square feet. A 12 by 12 foot area at 2 inches is 24 cubic feet, 0.889 cubic yards, and 1.26 short tons of dry gravel, which is 48 of the half-cubic-foot bags. Using the 3-inch coverage on a 2-inch job overstates the tons.',
      'A single cubic yard is a 9 by 3 foot area at 12 inches, or any other shape that multiplies to 27 cubic feet. Dry gravel there is 1.418 short tons, 2,835 lb, and 1.286 tonnes. The bulk line rounds 1.418 up to 1.5 short tons. That tenth-ton step is coarse on a one-yard load: you would be ordering about 0.082 tons more than the calculated weight. On a large pad the same tenth is a smaller share of the order. The headline stays at 1.418 so the rounding is visible.'
    ],
    examplesHeading: 'Worked gravel weight examples',
    examples: [
      {
        title: 'A 10 by 20 foot area, 3 inches deep, dry gravel',
        paragraphs: [
          'The volume is 50 cubic feet, or 1.852 cubic yards. At 105 lb per cubic foot the weight is 5,250 lb. The headline is 2.625 short tons. The tonne line is 2.381 tonnes. The bulk order rounded to the next tenth is 2.7 short tons. The bag count is 100. One cubic yard covers 108 square feet at this depth, so the 200 square foot area is just under two yards, which is what 1.852 says.',
          'The same bed in mulch, on the mulch page, is 25 bags of 2 cubic foot mulch or a bulk order of 2 cubic yards. Those numbers are the volume. They are not 2.625 tons, and a ton of mulch is not a yard of gravel. If a supplier quotes the gravel job as “about two yards,” the matching dry weight on this density is 2.625 short tons before the tenth-ton round-up, not two tons.'
        ]
      },
      {
        title: 'The same bed in wet gravel, dry sand, and with 10% waste',
        paragraphs: [
          'Wet gravel at 125 lb per cubic foot weighs 6,250 lb, or 3.125 short tons, and 2.835 tonnes. The yards stay 1.852. The bags stay 100, because bags measure volume. Only the weight lines move. Dry sand at 97 lb per cubic foot weighs 4,850 lb, or 2.425 short tons. The tonne line shows 2.2 tonnes, because 4,850 × 0.45359237 kilograms is 2.1999 tonnes and the display keeps three decimal places of a figure that rounds to 2.200.',
          'Ten percent waste on the dry gravel does not change the 50 cubic foot bed. It changes the order. The volume with waste is 55 cubic feet, 2.037 cubic yards, and the headline becomes 2.888 short tons. The bulk line is 2.9 short tons and the bags are 110. Add waste when the stone will be spilled or when the depth is uneven. Do not also add a second cushion on top of a supplier’s minimum delivery. That double-counts the spare.'
        ]
      },
      {
        title: 'A 12 by 12 foot path at 2 inches, and one exact cubic yard',
        paragraphs: [
          'A 12 by 12 foot path at 2 inches is 24 cubic feet, 0.889 cubic yards, and 1.26 short tons of dry gravel. The bag count is 48. Coverage at 2 inches is 162 square feet per cubic yard, and 144 square feet is under one yard, which is why the yard line is 0.889 rather than 1. Wet gravel on this path would be heavier by 125 / 105. The calculator does that when you change the material. It does not assume the path is compacted after it is laid. Compaction can leave the finished depth thinner than the depth you ordered.',
          'Nine feet by three feet at 12 inches is exactly 27 cubic feet, one cubic yard. Dry gravel is 1.418 short tons. If a written estimate says 1.4 tons per yard, the gap against this table is 0.018 short tons per yard, about 35 lb. On the sample bed of 1.852 yards that gap is roughly 65 lb, small next to the jump from 2.625 up to a 2.7 ton order. Use 1.4 only as a check. Use 1.418, or the headline for your own area, when you are ordering.'
        ]
      }
    ],
    table: {
      heading: 'Weight of a 10 by 20 foot area at 3 inches',
      caption: 'Engineering ToolBox densities: dry gravel 105 lb/cu ft, wet gravel 125, dry sand 97. The last two rows change the shape or the waste. Short tons are pounds divided by 2,000. Bags are 0.5 cubic feet, rounded up. The bulk tenth-ton is not added on top of the bags.',
      headers: ['Case', 'Cubic yards', 'Short tons', '0.5 cu ft bags', 'Bulk tenth-ton'],
      rows: [
        ['Dry gravel, no waste', '1.852', '2.625', '100', '2.7'],
        ['Wet gravel, no waste', '1.852', '3.125', '100', '3.2'],
        ['Dry sand, no waste', '1.852', '2.425', '100', '2.5'],
        ['Dry gravel, 10% waste', '2.037', '2.888', '110', '2.9'],
        ['12×12 ft, 2 in, dry', '0.889', '1.26', '48', '1.3'],
        ['One cubic yard, dry', '1', '1.418', '54', '1.5']
      ]
    },
    limitsHeading: 'What a rectangular gravel weight leaves out',
    limits: [
      'The area is a rectangle of one depth. A curved path, a slope, a driveway that is thicker at the edges, and a ring around a tree are different volumes. The waste field is the place to allow for that. Ten percent is a planning allowance, not a specification. Geotextile, edging, and a compacted base are not given a thickness of their own. If the base is a separate layer, run it as its own depth and its own material.',
      'Density is the published loose figure, not a test of the stone in the truck. Crushed limestone, pea gravel, and recycled concrete do not all sit at 105 lb per cubic foot. Wet stone can land nearer 125. A supplier who sells by the ton from a scale is a better source for that yard’s product than a national table. If the quote is already in tons, you do not need this page to convert it again. If the quote is in cubic yards, multiply the yards by 1.418 for this dry-gravel density, or type the shape and let the form do it.',
      'The bag size is a nominal 0.5 cubic foot, a common home-center size for decorative stone. Read the bag. A bag sold by weight, or a 0.4 cubic foot bag, will not match the bag count. The tonne is a metric tonne. A UK or Australian “tonne” order can use that line. A UK long ton of 2,240 lb is neither the short ton nor the tonne, and it is not printed. One cubic yard is about 0.765 cubic metres if a supplier sells by the metre. The headline itself stays in short tons.',
      'Nothing here is a pavement design. Three inches of gravel is not a structural section for a driveway, and it may be too much or too little for a footpath. The concrete page counts 40, 60, and 80 lb bags of concrete. The mulch page counts 2 and 3 cubic foot bags of mulch. A ton of gravel does not answer either of those.'
    ],
    disclaimer: 'This is a volume and weight estimate from a published bulk density. It is not a quarry quote, a compaction specification, or a pavement design. Confirm the density with the supplier who will weigh the load.',
    faqs: [
      {
        q: 'How many tons of dry gravel cover 10 by 20 feet at 3 inches?',
        a: '2.625 short tons at 105 lb per cubic foot, with no waste. The area is 50 cubic feet, or 1.852 cubic yards, and 5,250 lb. The bulk line rounds that up to 2.7 short tons. The same volume is 100 bags of 0.5 cubic feet. Buy one of those, not both.'
      },
      {
        q: 'Why is one cubic yard of this gravel 1.418 tons instead of 1.4?',
        a: 'Because 27 cubic feet times 105 lb is 2,835 lb, and 2,835 divided by 2,000 is 1.4175, which displays as 1.418. The familiar 1.4 tons per yard is that density rounded. Wet gravel at 125 lb per cubic foot is heavier. On the sample bed it is 3.125 short tons, not 2.625.'
      },
      {
        q: 'Should the gravel order include both the tons and the bags?',
        a: 'No. They are two ways to buy one volume. The sample is 2.625 short tons, or a 2.7 ton rounded order, or 100 bags. With 10% waste it is 2.888 short tons or 110 bags. Adding the bags on top of the tons double-counts the area.'
      },
      {
        q: 'What density does the wet gravel setting use?',
        a: '125 lb per cubic foot, the wet-gravel figure on the Engineering ToolBox dirt and mud table. Dry gravel is 105 and dry sand is 97. The yards do not change when you change the material. On 50 cubic feet, wet gravel is 3.125 short tons and dry sand is 2.425 short tons.'
      },
      {
        q: 'Does a waste allowance change the cubic yards of the bed?',
        a: 'The bed’s own volume stays on the first volume line. Waste changes the order. At 10% the sample bed is still 1.852 cubic yards, and the order becomes 2.037 cubic yards and 2.888 short tons. The waste line is the one to compare with a delivery ticket.'
      }
    ],
    relatedLinks: [
      { slug: 'mulch-calculator', label: 'Mulch calculator', note: 'The same 10 by 20 foot area at 3 inches is 1.852 cubic yards and 25 bags of mulch, not 2.625 tons.' },
      { slug: 'concrete-slab-calculator', label: 'Concrete slab calculator', note: '80, 60, and 40 lb bags for a pour. A ton of gravel is not a bag of concrete.' },
      { slug: 'length-converter', label: 'Length converter from meters', note: 'If the area was measured in meters, convert to feet before you type the length and width. Depth stays in inches here.' },
      { slug: 'room-paint-calculator', label: 'Room paint calculator', note: 'Gallons from wall area. It does not estimate a stone order.' }
    ]
  }
};
