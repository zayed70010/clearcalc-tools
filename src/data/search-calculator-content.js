export const searchCalculatorContent = {
  'new-york-paycheck-calculator': {
    title: 'New York Paycheck Calculator 2026 (State and NYC) | ClearCalc',
    h1: 'New York Paycheck Calculator for 2026',
    description: 'Estimate a 2026 New York paycheck after federal income tax, New York State tax, Social Security, and Medicare, with New York City resident tax as an option.',
    intro: [
      'This New York paycheck calculator estimates what is left from 2026 wages after federal income tax, New York State income tax, Social Security, and Medicare. A separate choice adds New York City resident tax. Wages earned in the rest of the state do not pay that city tax. Yonkers is not a third choice. The sample is $75,000, single, paid every two weeks, with no 401(k) and no city tax.',
      'Federal income tax uses the tax year 2026 brackets and standard deduction in IRS Revenue Procedure 2025-32. New York State tax uses the 2026 rate schedule: 3.90%, 4.40%, 5.15%, 5.40%, 5.90%, 6.85%, 9.65%, 10.3%, and 10.9%, and the standard deduction of $8,000 for a single filer or $16,050 for married filing jointly. Those deduction amounts are the figures in the 2026 Form IT-2104 instructions. New York City tax, when you select it, uses 3.078%, 3.762%, 3.819%, and 3.876%. The result is an annual estimate divided by the number of paychecks. It is not the withholding table on Form IT-2104.'
    ],
    steps: [
      'Enter annual gross wages in dollars. The sample, 75000, means $75,000 for the year, not one paycheck.',
      'Choose Single or Married filing jointly. Joint uses the joint brackets and both standard deductions on this salary only.',
      'Choose a pay frequency. Every two weeks means 26 paychecks. Twice a month means 24. Weekly is 52 and monthly is 12.',
      'Enter a traditional 401(k) deferral for the year, or leave 0. Then choose New York City resident or the rest of New York State. Press Calculate.'
    ],
    howHeading: 'How a 2026 New York paycheck is estimated',
    howItWorks: [
      'Federal taxable wages are gross wages minus the traditional 401(k) deferral actually applied, then minus the federal standard deduction. For 2026 that deduction is $16,100 single and $32,200 married filing jointly. The deferral is capped at wages and at the $24,500 elective deferral limit. Tax on what remains uses the Revenue Procedure 2025-32 brackets. Social Security is 6.2% of wages up to $184,500. Medicare is 1.45% of all wages. Additional Medicare Tax withholding is 0.9% of wages over $200,000. A 401(k) does not reduce Social Security or Medicare.',
      'New York taxable income starts from the same wages minus the same 401(k), which is this page’s stand-in for New York adjusted gross income. It then subtracts the New York standard deduction, not the federal one. On $75,000 with no deferral, New York taxable income is $67,000. The 3.90% band covers the first $8,500, 4.40% runs to $11,700, 5.15% runs to $13,900, and 5.40% covers the rest of that $67,000 because the 5.40% band continues to $80,650 of taxable income. The tax is $3,453.00. Married filing jointly uses wider early bands: 3.90% to $17,150, 4.40% to $23,600, 5.15% to $27,900, and 5.40% to $161,550.',
      'New York City resident tax, when selected, is computed on that same New York taxable income. It is not a flat percent of the whole paycheck. For a single filer the 3.078% band ends at $12,000, 3.762% ends at $25,000, 3.819% ends at $50,000, and 3.876% applies above that. Joint city bands end at $21,600, $45,000, and $90,000. Outside the city the city line is $0.00. Yonkers residents pay a surcharge on New York State tax instead, and this form does not compute it.',
      'If wages minus the 401(k) are over $107,650, New York requires a supplemental-tax worksheet that takes back the benefit of the lower brackets. This page still shows the ordinary rate-schedule tax and adds a line saying the recapture is not included. Do not treat that result as the full state tax. Annual take-home is wages minus federal income tax, Social Security, Medicare, Additional Medicare Tax, New York State tax, city tax if selected, and the deferral. Dividing by 26, 24, 12, or 52, and rounding to the cent, is the headline.'
    ],
    formula: 'Tax year 2026. New York wages.\nFederal taxable wages = max(0, wages − traditional 401(k) − federal standard deduction)\nFederal standard deduction = $16,100 single, or $32,200 married filing jointly\n401(k) applied = min(amount entered, wages, $24,500)\nFederal income tax = 2026 Rev. Proc. 2025-32 brackets\nSocial Security = 6.2% × min(wages, $184,500)\nMedicare = 1.45% × wages\nAdditional Medicare Tax = 0.9% × max(0, wages − $200,000)\nNew York AGI proxy = max(0, wages − traditional 401(k))\nNew York taxable income = max(0, New York AGI proxy − New York standard deduction)\nNew York standard deduction = $8,000 single, or $16,050 married filing jointly\nNew York State tax = 2026 state brackets on New York taxable income\nNew York City tax = 2026 city brackets on the same taxable income, or $0 outside the city\nSupplemental tax recapture above $107,650 of New York AGI is not applied\nAnnual take-home = wages − federal income tax − Social Security − Medicare − Additional Medicare Tax − New York State tax − city tax − 401(k)\nPaycheck = annual take-home ÷ number of paychecks',
    formulaNotes: [
      'The state and city taxes are the exact marginal amounts, rounded to the cent at the end. The Tax Department’s printed rate schedule instead rounds the tax at each bracket floor to the nearest dollar and then applies the marginal rate to the excess. On the $75,000 single example the exact New York State tax is $3,453.00. The printed-schedule path is $586 plus 5.40% of the excess over $13,900, which is $3,453.40. The forty-cent gap is that rounding, not a second tax.',
      'On $90,000 single with no deferral, New York taxable income is $82,000, so $1,350 sits in the 5.90% band above $80,650. Exact state tax is $4,269.75. Federal income tax on the same wages is $10,970.00, Social Security is $5,580.00, and Medicare is $1,305.00. City tax, if selected, is $3,053.49. None of those lines uses the supplemental-tax worksheet, because $90,000 of wages is still under the $107,650 recapture threshold.'
    ],
    examplesHeading: 'Worked 2026 New York paycheck examples',
    examples: [
      {
        title: '$75,000, single, every two weeks, outside New York City',
        paragraphs: [
          'Federal income tax is $7,670.00, Social Security is $4,650.00, and Medicare is $1,087.50. Additional Medicare Tax is $0.00. New York State income tax is $3,453.00 and New York City resident tax is $0.00. Annual take-home is $58,139.50. Divided by 26, the headline is $2,236.13 / two weeks. Twenty-six times $2,236.13 is $58,139.38, twelve cents under the annual figure, because the paycheck was rounded on its own.',
          'A Texas paycheck with the same wages, status, frequency, and no deferral keeps the federal and FICA lines that belong to $65,000 on that page, not these $75,000 lines. The useful comparison at a shared salary is below. What this example shows on its own is that New York State tax is real even when the city tax is $0.00. The state standard deduction is $8,000, not the federal $16,100, so more of the salary is inside the state brackets than inside the federal ones.'
        ]
      },
      {
        title: 'The same $75,000 as a New York City resident, and a $6,500 deferral upstate',
        paragraphs: [
          'Select New York City resident and leave the other $75,000 single inputs alone. State tax stays $3,453.00. City tax becomes $2,472.09. Annual take-home falls from $58,139.50 to $55,667.41, and the headline is $2,141.05 / two weeks. The city tax is the entire difference. It is not a second copy of the state tax, and it is not charged on top of a flat city percentage of $75,000. Three percent of $75,000 would be $2,250, which is not the figure this page uses.',
          'Go back outside the city and enter a $6,500 traditional 401(k) on a $65,000 single salary. Federal income tax is $4,840.00, which is $780.00 below the no-deferral federal tax of $5,620.00. That $780.00 is 12% of $6,500, because the deferral sits in the federal 12% band. New York State tax is $2,562.00, which is $351.00 below the no-deferral state tax of $2,913.00. That $351.00 is 5.40% of $6,500, because the deferral sits in the state 5.40% band. Social Security stays $4,030.00 and Medicare stays $942.50. Annual take-home is $46,125.50, or $1,774.06 / two weeks. The deferral reduces both income taxes and cash pay. It does not reduce FICA.'
        ]
      },
      {
        title: '$65,000 outside the city, and $120,000 where the recapture warning appears',
        paragraphs: [
          'At $65,000, single, every two weeks, no deferral, and outside the city, federal income tax is $5,620.00, Social Security is $4,030.00, and Medicare is $942.50. New York State tax is $2,913.00. Annual take-home is $51,494.50, or $1,980.56 / two weeks. The same federal and FICA lines on the Texas paycheck page produce an annual take-home of $54,407.50. The $2,913.00 gap is the New York State tax and nothing else. Add city residence and the city tax is $2,084.49, annual take-home is $49,410.01, and the headline is $1,900.39 / two weeks.',
          'At $120,000, single, every two weeks, outside the city, the ordinary state tax line is $6,039.75 and annual take-home before any recapture is $87,210.25, or $3,354.24 / two weeks. The result also says New York AGI is over $107,650 and that the supplemental tax is not included. The headline is incomplete for that salary. The worksheet phases the benefit of the lower brackets back in over the next $50,000 of New York AGI. This form does not apply that phase-in, so use the $120,000 row only as the ordinary-schedule piece.'
        ]
      }
    ],
    table: {
      heading: '2026 New York paycheck at selected wages',
      caption: 'Single filer, paid every two weeks, no 401(k). Federal income tax uses Revenue Procedure 2025-32 and the $16,100 standard deduction. New York State tax uses the 2026 brackets and the $8,000 standard deduction. Every wage in this table is at or under $107,650, so the supplemental-tax recapture does not apply. Medicare is 1.45% of wages and is included in take-home rather than shown as its own column. Social Security is 6.2% of these wages.',
      headers: ['Wages', 'Place', 'Federal income tax', 'New York State tax', 'New York City tax', 'Annual take-home', 'Every two weeks'],
      rows: [
        ['$40,000', 'Outside NYC', '$2,620.00', '$1,563.00', '$0.00', '$32,757.00', '$1,259.88'],
        ['$50,000', 'Outside NYC', '$3,820.00', '$2,103.00', '$0.00', '$40,252.00', '$1,548.15'],
        ['$65,000', 'Outside NYC', '$5,620.00', '$2,913.00', '$0.00', '$51,494.50', '$1,980.56'],
        ['$65,000', 'NYC resident', '$5,620.00', '$2,913.00', '$2,084.49', '$49,410.01', '$1,900.39'],
        ['$75,000', 'Outside NYC', '$7,670.00', '$3,453.00', '$0.00', '$58,139.50', '$2,236.13'],
        ['$75,000', 'NYC resident', '$7,670.00', '$3,453.00', '$2,472.09', '$55,667.41', '$2,141.05'],
        ['$90,000', 'Outside NYC', '$10,970.00', '$4,269.75', '$0.00', '$67,875.25', '$2,610.59'],
        ['$90,000', 'NYC resident', '$10,970.00', '$4,269.75', '$3,053.49', '$64,821.76', '$2,493.14']
      ]
    },
    limitsHeading: 'What this New York paycheck estimate leaves out',
    limits: [
      'The federal and state lines are annual standard-deduction estimates, then divided by the number of paychecks. They are not the IRS Publication 15-T percentage method and they are not the New York withholding method on Form IT-2104 or in NYS-50-T-NYS. Dependents, extra withholding, a second job, the head-of-household deduction, and the New York household credit are not modeled. The household credit is small and only at low federal AGI. Married filing jointly applies the joint brackets and the joint deductions to this salary alone. A spouse with income needs a different return than this one-wage form can build.',
      'The supplemental tax that recaptures lower-bracket benefits is omitted whenever New York AGI, measured here as wages minus the traditional 401(k), is over $107,650. The page says so in the result. It does not invent the 2026 worksheet amounts. Yonkers resident income tax surcharge, the New York City household credit, and the New York City school tax credit are also omitted. The school tax credit is a feature of the resident return, not a line this paycheck estimate refunds in advance.',
      'Pre-tax health premiums, HSAs, and FSAs are not separate fields. A traditional 401(k) above $24,500 is cut back to that elective limit. Catch-up contributions are not added. New York additions and subtractions other than the 401(k), including 414(h) retirement contributions for some public employees, are not applied. Local taxes outside New York City, and the Metropolitan Commuter Transportation Mobility Tax on self-employment earnings, are not wage withholding on this form.',
      'Employer Social Security, employer Medicare, and federal and state unemployment taxes are not deducted. A bonus withheld at a flat supplemental rate will not match a row that assumes the bonus was ordinary wages spread over the year. Compare a dollar result with a dollar take-home. The England and Scotland pages on this site are in pounds and do not belong in the same subtraction.'
    ],
    disclaimer: 'This is a 2026 planning estimate for New York wages, not a pay stub, a Form IT-2104, or tax advice. The IRS, the New York State Tax Department, and your employer assess what is withheld.',
    faqs: [
      {
        q: 'Does someone working in New York State but outside New York City pay city income tax in 2026?',
        a: 'Not on this calculator. Choose “New York State, outside New York City” and the city line is $0.00. New York State tax, federal income tax, Social Security, and Medicare still come out. At $65,000, single, every two weeks, and no 401(k), state tax is $2,913.00 and the two-week headline is $1,980.56.'
      },
      {
        q: 'How much New York City resident tax does the 2026 calculator add at $75,000?',
        a: 'For a single filer with no 401(k), city tax is $2,472.09. State tax stays $3,453.00. Annual take-home falls from $58,139.50 outside the city to $55,667.41 in the city. The city brackets are 3.078%, 3.762%, 3.819%, and 3.876%, applied to New York taxable income of $67,000, not to the gross $75,000.'
      },
      {
        q: 'Why is the New York standard deduction smaller than the federal one?',
        a: 'They are separate laws. For 2026 this page uses a federal standard deduction of $16,100 single or $32,200 joint, and a New York standard deduction of $8,000 single or $16,050 joint. On $75,000 single with no deferral, federal taxable income is $58,900 and New York taxable income is $67,000.'
      },
      {
        q: 'Does a traditional 401(k) reduce New York State tax and FICA?',
        a: 'It reduces federal income tax and New York State tax, and New York City tax when that tax is selected. It does not reduce Social Security or Medicare. On $65,000 single outside the city, a $6,500 deferral cuts state tax by $351.00, from $2,913.00 to $2,562.00, and cuts federal income tax by $780.00. FICA is unchanged.'
      },
      {
        q: 'Why can this New York result differ from the IT-2104 withholding tables?',
        a: 'IT-2104 withholding uses allowances, an annualized payroll method, and its own rounding. This page computes one full-year tax and divides by the number of paychecks. The printed state rate schedule can also differ by less than a dollar from the exact marginal tax, because it rounds the tax at each bracket floor. At $75,000 single that gap is $0.40 of state tax.'
      },
      {
        q: 'Is the New York supplemental tax included above $107,650?',
        a: 'No. When wages minus the 401(k) exceed $107,650, the result still shows the ordinary bracket tax and adds a line that the recapture is not included. At $120,000 single outside the city, the ordinary state tax line is $6,039.75 and the warning is present. Do not use that headline as the full New York State tax.'
      }
    ],
    relatedLinks: [
      { slug: 'texas-paycheck-calculator', label: 'Texas paycheck calculator for 2026', note: 'The same federal tax and FICA, with state income tax of $0. At $65,000 single the Texas annual take-home is $54,407.50.' },
      { slug: 'california-paycheck-calculator', label: 'California paycheck calculator for 2026', note: 'Adds California income tax and State Disability Insurance. It does not compute New York City tax.' },
      { slug: 'washington-paycheck-calculator', label: 'Washington paycheck calculator for 2026', note: 'No wage income tax, but Paid Leave and WA Cares can still come out of the check.' },
      { slug: '401k-contribution-calculator', label: '2026 401(k) contribution calculator', note: 'Find a deferral that respects the elective limit, then type that dollar amount here. The deferral reduces New York income tax and not FICA.' }
    ]
  },
  'alberta-take-home-pay-calculator': {
    title: 'Alberta Take-Home Pay Calculator 2026 | ClearCalc',
    h1: 'Alberta Take-Home Pay Calculator for 2026',
    description: 'Estimate 2026 Alberta take-home pay after federal income tax, Alberta income tax, the basic personal amounts, CPP, and EI.',
    intro: [
      'This Alberta take-home pay calculator estimates what an employee keeps from a 2026 salary after federal income tax, Alberta income tax, Canada Pension Plan contributions, and Employment Insurance. Alberta has no provincial health premium. That is the main reason an Alberta result is not an Ontario result with the province name swapped. The sample salary is $70,000. The headline is the annual take-home divided by 12.',
      'Federal brackets, the basic personal amount, CPP, and EI are the 2026 figures used on the Ontario and British Columbia pages of this site: 14% to $58,523, 20.5% to $117,045, 26% to $181,440, 29% to $258,482, and 33% above that. Alberta’s own 2026 brackets are 8% to $61,200, 10% to $154,259, 12% to $185,111, 13% to $246,813, 14% to $370,220, and 15% above that. The Alberta basic personal amount credited here is $22,769, at the 8% rate. Those provincial figures are the indexed 2026 amounts published by Alberta and by the CRA’s Alberta payroll tables.'
    ],
    steps: [
      'Enter annual gross salary in Canadian dollars. The sample, 70000, means $70,000 for the year.',
      'Press Calculate. The headline is monthly take-home, the annual figure divided by 12 and rounded to the cent.',
      'Read federal tax, Alberta tax, CPP including CPP2, and EI as separate lines. Employer shares are not in the list.',
      'Use the every-two-weeks line only as the annual figure divided by 26. It is not a separate payroll-table calculation.'
    ],
    howHeading: 'How 2026 Alberta take-home pay is estimated',
    howItWorks: [
      'Employee CPP is 5.95% of pensionable earnings between the $3,500 basic exemption and the $74,600 yearly maximum pensionable earnings. Of that 5.95 points, 4.95 points are the base contribution and 1.00 point is the first additional contribution. CPP2 is 4% of earnings between $74,600 and the $85,000 year’s additional maximum, capped at $416. EI outside Quebec is 1.63% of earnings up to $68,900, capped at $1,123.07. At $70,000 the salary is already past the EI maximum and still under the CPP maximum, so EI is the full $1,123.07 and CPP2 is $0.',
      'The first additional CPP contribution and CPP2 are deductions from income. The base CPP contribution and EI are non-refundable credits, not deductions. Federal tax is the 2026 brackets on salary minus those CPP deductions, minus 14% of the federal basic personal amount, the base CPP, EI, and the Canada employment amount of up to $1,501. The federal basic personal amount is $16,452 when net income is $181,440 or less, and it falls toward $14,829 by $258,482. Alberta tax is the Alberta brackets on the same taxable income, minus 8% of $22,769 plus the base CPP and EI. There is no Alberta surtax and no health premium to add back.',
      'At $70,000 the federal tax line is $7,278.19, the same federal line the Ontario calculator shows for that salary, because the federal arithmetic does not change with the province. Alberta tax is $3,534.79. CPP including the first additional contribution is $3,956.75, and EI is $1,123.07. Annual take-home is $54,107.20. The Ontario page’s annual take-home at the same salary is $53,786.26. The $320.94 gap equals the difference between Ontario tax of $3,855.73 and Alberta tax of $3,534.79. Ontario’s figure includes a $600 health premium. Alberta does not charge one. The currencies are both Canadian dollars, so this comparison is a real tax difference rather than an exchange-rate illusion.',
      'A salary of $61,200 is the top of the 8% Alberta bracket, but the bracket applies to taxable income after the enhanced CPP deduction, not to the gross salary. At $61,200 the displayed Alberta tax is $2,720.02 and the whole taxable amount is still inside the 8% band. Crossing $61,200 of gross pay does not, by itself, mean a dollar was taxed at 10%. Monthly take-home at that salary is $4,039.87. At $200,000 the federal basic personal amount has started to phase out and the line shows $16,084.75 rather than $16,452.00. Alberta’s $22,769 amount does not phase out on this page.'
    ],
    formula: 'Calendar year 2026. Alberta employee. Claim code 1, no other credits.\nPensionable earnings = min(salary, $74,600)\nContributory earnings = max(0, pensionable earnings − $3,500)\nBase CPP = 4.95% × contributory earnings\nFirst additional CPP = 1.00% × contributory earnings\nCPP2 = 4% × max(0, min(salary, $85,000) − $74,600), capped at $416\nEI = 1.63% × min(salary, $68,900), capped at $1,123.07\nTaxable income = max(0, salary − first additional CPP − CPP2)\nFederal tax = 2026 federal brackets − 14% × (federal basic personal amount + base CPP + EI + Canada employment amount)\nFederal basic personal amount = $16,452, phasing to $14,829 between $181,440 and $258,482 of net income\nCanada employment amount = min($1,501, salary)\nAlberta tax = 2026 Alberta brackets − 8% × ($22,769 + base CPP + EI)\nAlberta brackets: 8% to $61,200, 10% to $154,259, 12% to $185,111, 13% to $246,813, 14% to $370,220, 15% above\nNo Alberta health premium and no Alberta surtax\nAnnual take-home = salary − CPP − CPP2 − EI − federal tax − Alberta tax\nMonthly take-home = annual take-home ÷ 12',
    formulaNotes: [
      'At $70,000 the pieces are federal tax $7,278.19, Alberta tax $3,534.79, CPP $3,956.75, and EI $1,123.07. Their sum is $15,892.80, and $70,000.00 minus that sum is $54,107.20. Divided by 12, that is $4,508.933…, which the headline rounds to $4,508.93. Twelve times $4,508.93 is $54,107.16, four cents under the annual line. The every-two-weeks line is $2,081.05.',
      'At $90,000, CPP has reached the CPP2 cap. CPP including CPP2 is $4,646.45, EI stays $1,123.07, federal tax is $11,251.60, and Alberta tax is $5,470.38. Annual take-home is $67,508.50, or $5,625.71 / month. The federal tax again matches the Ontario page at $90,000. Only the provincial line changes.'
    ],
    examplesHeading: 'Worked 2026 Alberta take-home examples',
    examples: [
      {
        title: '$70,000 in Alberta, set beside the same salary in Ontario',
        paragraphs: [
          'The calculator shows $4,508.93 / month. Federal income tax is $7,278.19. Alberta income tax is $3,534.79. CPP including CPP2 is $3,956.75, and there is no CPP2 yet because $70,000 is under $74,600. EI is $1,123.07, the annual maximum, because $70,000 is over the $68,900 EI cap. Annual take-home is $54,107.20. The federal basic personal amount applied is $16,452.00 and the Alberta amount applied is $22,769.00.',
          'The Ontario calculator at $70,000 shows the same federal tax, the same CPP, and the same EI. Its provincial tax is $3,855.73, of which $600.00 is the Ontario Health Premium, and its annual take-home is $53,786.26. Alberta’s advantage on this particular salary is $320.94 for the year, about $26.75 a month before rounding. That is a tax comparison inside Canada. It is not a statement about rent, and it disappears if the job is actually taxed in another province.'
        ]
      },
      {
        title: 'The top of the 8% band, and a salary that reaches CPP2',
        paragraphs: [
          'At $61,200 the headline is $4,039.87 / month. Federal tax is $5,570.78, Alberta tax is $2,720.02, CPP is $3,433.15, and EI is $997.56. Annual take-home is $48,478.49. Taxable income is under $61,200 after the enhanced CPP deduction, so the 10% Alberta rate has not started. The $61,200 figure is the gross threshold printed in the bracket table, not a promise that the last dollar of that salary was taxed at 10%.',
          'At $90,000 the headline is $5,625.71 / month. CPP including CPP2 is $4,646.45. The extra $416 of CPP2, plus the base and first additional contributions on the earnings up to $74,600, is the whole CPP line. EI does not grow past $1,123.07. Alberta tax is $5,470.38. Part of taxable income is now in the 10% band, which runs from $61,200 to $154,259. None of it has reached the 12% band at $154,259.'
        ]
      },
      {
        title: '$40,000, where the personal amounts do most of the work, and $200,000',
        paragraphs: [
          'At $40,000 the headline is $2,777.70 / month. Federal tax is $2,691.25, Alberta tax is $1,152.58, CPP is $2,171.75, and EI is $652.00. Annual take-home is $33,332.42. Both basic personal amounts are still the full $16,452 and $22,769. Alberta tax is not zero, because $40,000 of taxable income is well above the $22,769 credit. The credit wipes out tax on the first slice. It does not wipe out the slice above it.',
          'At $200,000 the headline is $11,487.81 / month. Federal tax is $38,876.54, Alberta tax is $17,500.28, CPP including CPP2 is $4,646.45, and EI is $1,123.07. Annual take-home is $137,853.66. The federal basic personal amount applied is $16,084.75, inside the phase-out that runs from $181,440 to $258,482. The Alberta basic personal amount is still $22,769.00. The 14% Alberta band has started, because taxable income is above $154,259, and the 15% band has not, because it starts at $370,220.'
        ]
      }
    ],
    table: {
      heading: '2026 Alberta take-home at selected salaries',
      caption: 'Each row is what this calculator displays for that annual salary. Federal tax, CPP, and EI use the 2026 employee rules outside Quebec. Alberta tax uses the 2026 brackets and a $22,769 basic personal amount credited at 8%. No other provincial credits are claimed. Monthly figures are the annual take-home divided by 12.',
      headers: ['Salary', 'Federal tax', 'Alberta tax', 'CPP including CPP2', 'EI', 'Annual take-home', 'Monthly'],
      rows: [
        ['$40,000', '$2,691.25', '$1,152.58', '$2,171.75', '$652.00', '$33,332.42', '$2,777.70'],
        ['$61,200', '$5,570.78', '$2,720.02', '$3,433.15', '$997.56', '$48,478.49', '$4,039.87'],
        ['$70,000', '$7,278.19', '$3,534.79', '$3,956.75', '$1,123.07', '$54,107.20', '$4,508.93'],
        ['$90,000', '$11,251.60', '$5,470.38', '$4,646.45', '$1,123.07', '$67,508.50', '$5,625.71'],
        ['$120,000', '$17,502.14', '$8,470.38', '$4,646.45', '$1,123.07', '$88,257.96', '$7,354.83'],
        ['$160,000', '$27,902.14', '$12,562.66', '$4,646.45', '$1,123.07', '$113,765.68', '$9,480.47'],
        ['$200,000', '$38,876.54', '$17,500.28', '$4,646.45', '$1,123.07', '$137,853.66', '$11,487.81']
      ]
    },
    limitsHeading: 'What this Alberta estimate leaves out',
    limits: [
      'The credit is the basic personal amount plus the base CPP and EI amounts. The spouse or common-law partner amount, the age amount, the caregiver amount, and tuition are not claimed. A TD1 or TD1AB with a larger claim code will have less tax withheld than this page shows. Quebec is not covered. Quebec uses the Quebec Pension Plan and a lower EI rate. British Columbia and Ontario have their own pages. The other provinces and the territories are not estimated here. Province of employment follows the CRA rule about where you report for work, which can differ from the province where you live.',
      'RRSP, RPP, and union dues are not deducted. Salary in this box is treated as employment income for a full year, with no bonus and no mid-year start. A payroll table that annualizes each pay and then rounds to the CRA’s published cent can differ by a small amount from this full-year calculation. Self-employed people pay both halves of CPP and do not pay EI on self-employment earnings in the same way. Do not use this employee form for that case.',
      'Employer CPP, employer EI, and Workers’ Compensation premiums are employer costs. They are not subtracted. Alberta’s education property tax and the federal climate-related amounts that may appear on a notice of assessment are not payroll deductions either. This page also does not convert the result to US dollars or to pounds. A New York or England take-home figure is a different tax and a different currency.'
    ],
    disclaimer: 'This is a 2026 planning estimate for an Alberta employee, not a pay stub, a TD1AB, or tax advice. The Canada Revenue Agency and your employer assess the deductions.',
    faqs: [
      {
        q: 'What Alberta tax brackets does the 2026 calculator use?',
        a: '8% on taxable income up to $61,200, 10% to $154,259, 12% to $185,111, 13% to $246,813, 14% to $370,220, and 15% above that. The basic personal amount is $22,769, credited at 8%. At $70,000 the Alberta tax line is $3,534.79.'
      },
      {
        q: 'Why is Alberta take-home higher than Ontario at the same $70,000 salary?',
        a: 'Federal tax, CPP, and EI match. Alberta tax is $3,534.79 and Ontario tax is $3,855.73, including a $600 Ontario Health Premium. Annual take-home is $54,107.20 in Alberta and $53,786.26 in Ontario. The $320.94 difference is provincial tax. Alberta has no health premium on this page.'
      },
      {
        q: 'Does a $61,200 Alberta salary get taxed at 10%?',
        a: 'Not on this calculator. The 10% rate starts at $61,200 of taxable income. The enhanced CPP deduction comes off the salary first, so taxable income at a $61,200 salary is still inside the 8% band. The displayed Alberta tax is $2,720.02.'
      },
      {
        q: 'When does CPP2 appear on an Alberta paycheck?',
        a: 'CPP2 is 4% of earnings between $74,600 and $85,000, capped at $416. At $70,000 the CPP line is $3,956.75 and CPP2 is zero. At $90,000 and above, CPP including CPP2 is $4,646.45. EI has already stopped growing at $1,123.07 once earnings pass $68,900.'
      },
      {
        q: 'Does the federal basic personal amount stay $16,452 at every Alberta salary?',
        a: 'It stays $16,452 when net income is $181,440 or less. It is $16,084.75 at the $200,000 row, because taxable income is inside the phase-out that ends at $14,829 once net income reaches $258,482. The Alberta $22,769 amount on this page does not phase out with income.'
      },
      {
        q: 'Will this match the CRA Payroll Deductions Online Calculator for Alberta?',
        a: 'It should be close for a full year of ordinary salary with federal and Alberta claim code 1 and no other deductions. PDOC can differ when the pay period, a bonus, or a mid-year CPP maximum changes the annualization. This page does one annual calculation and then divides by 12 and by 26.'
      }
    ],
    relatedLinks: [
      { slug: 'ontario-take-home-pay-calculator', label: 'Ontario take-home pay calculator for 2026', note: 'Same federal tax, CPP, and EI. Ontario adds its own tax and the Ontario Health Premium.' },
      { slug: 'british-columbia-take-home-pay-calculator', label: 'British Columbia take-home pay calculator for 2026', note: 'Same federal pieces, with the 2026 B.C. brackets and the B.C. tax reduction.' },
      { slug: 'australia-take-home-pay-calculator', label: 'Australia take-home pay calculator for 2026–27', note: 'A different country, tax year, and currency. Do not subtract an Australian figure from this Alberta salary.' }
    ]
  },
  'nsw-stamp-duty-calculator': {
    title: 'NSW Stamp Duty Calculator 2026/27 (Transfer Duty) | ClearCalc',
    h1: 'NSW Stamp Duty Calculator for 2026/27',
    description: 'Estimate New South Wales transfer duty for 2026/27, including the first home buyer concession and the 9% foreign surcharge purchaser duty.',
    intro: [
      'This NSW stamp duty calculator estimates transfer duty on a residential purchase in New South Wales using the 2026/27 general rates published by Revenue NSW. The rate year runs from 1 July 2026 to 30 June 2027 and is set by the contract date, or by the transfer date if there is no contract. The sample is a first home buyer paying $900,000 for a home. The headline is the duty, in Australian dollars.',
      'Transfer duty is calculated on the dutiable value, which is the higher of the price and the unencumbered market value. This form does not know the market value. The number you type is treated as that dutiable value already. First home buyers can be fully exempt or on a concessional rate. A foreign person pays surcharge purchaser duty of 9% on top of general duty. England’s stamp duty page on this site is a different tax, in pounds, and it does not apply to a purchase in Sydney or anywhere else in New South Wales.'
    ],
    steps: [
      'Enter the dutiable value in Australian dollars. Use the higher of price and market value if you already know both. The sample is 900000.',
      'Choose the buyer. “First home buyer, home” is a house or apartment with a dwelling. “First home buyer, vacant land” is land you intend to build on. “Not a first home buyer” uses the general scale.',
      'Choose whether the 9% foreign-person surcharge applies. A foreign person is not given the first-home concession on this page.',
      'Press Calculate. Read transfer duty and surcharge as separate lines. The headline is their sum.'
    ],
    howHeading: 'How 2026/27 NSW transfer duty is calculated',
    howItWorks: [
      'General duty is a sliding scale, not one rate on the whole price. For 2026/27, Revenue NSW publishes $1.25 for every $100 up to $18,000, with a $20 minimum; $225 plus $1.50 for every $100 over $18,000 up to $38,000; $525 plus $1.75 for every $100 over $38,000 up to $103,000; $1,662 plus $3.50 for every $100 over $103,000 up to $387,000; $11,602 plus $4.50 for every $100 over $387,000 up to $1,290,000; and $52,237 plus $5.50 for every $100 over $1,290,000. This page applies those published feet as a straight percentage of the excess, which is how Revenue NSW’s own 2026/27 worked examples are written. A $1,350,000 purchase is $52,237 plus ($1,350,000 − $1,290,000) × 0.055, which is $55,537.',
      'Premium property duty replaces the general rate on a residential property above $3,870,000. The 2026/27 premium foot is $194,137 plus $7 for every $100 over $3,870,000. At exactly $3,870,000 the general formula already equals $194,137, so the premium rate changes the result only above that threshold. Revenue NSW’s pre-auction example of a $4,000,000 dutiable value is $194,137 plus ($4,000,000 − $3,870,000) × 0.07, which is $203,237. This page reproduces that figure. It does not split a mixed business-and-home property, and it does not limit premium duty to the first two hectares.',
      'The First Home Buyers Assistance Scheme, for a contract on or after 1 July 2023 and still the thresholds Revenue NSW states for 2026, charges no duty on a home of $800,000 or less, or on vacant land of $350,000 or less. Between those floors and the ceilings, duty follows the Duties Act formula. For a home, concessional duty is N minus (1,000,000 − V) / 200,000 times D, where V is the dutiable value, N is the general duty on V, and D is the general duty on $800,000. For vacant land the ceiling is $450,000, the width is $100,000, and D is the general duty on $350,000. At $1,000,000 or more for a home, or $450,000 or more for vacant land, the concession is refused and general duty is charged.',
      'Surcharge purchaser duty is 9% of the whole dutiable value, not a marginal rate, and it is added to transfer duty. Revenue NSW states that current rate for a foreign person acquiring residential-related property. On a $1,000,000 value the surcharge is $90,000 and general duty is $39,187, so the headline is $129,187. Choosing the foreign-person option turns the first-home concession off, because the scheme requires an eligible buyer to be an Australian citizen or permanent resident. The form cannot check a visa. It only follows the choice you make.'
    ],
    formula: '2026/27 NSW transfer duty. V is the dutiable value you type.\nUp to $18,000: max($20, V × 1.25%), or $0 if V is $0\n$18,000 to $38,000: $225 + 1.50% × (V − $18,000)\n$38,000 to $103,000: $525 + 1.75% × (V − $38,000)\n$103,000 to $387,000: $1,662 + 3.50% × (V − $103,000)\n$387,000 to $1,290,000: $11,602 + 4.50% × (V − $387,000)\nOver $1,290,000: $52,237 + 5.50% × (V − $1,290,000)\nOver $3,870,000, residential premium rate: $194,137 + 7% × (V − $3,870,000)\nFirst home, home: $0 if V ≤ $800,000; general duty if V ≥ $1,000,000;\notherwise N − (1,000,000 − V) / 200,000 × D, with D = general duty on $800,000\nFirst home, vacant land: $0 if V ≤ $350,000; general duty if V ≥ $450,000;\notherwise N − (450,000 − V) / 100,000 × D, with D = general duty on $350,000\nForeign person: no first-home concession; add 9% × V',
    formulaNotes: [
      'General duty on $800,000 is $11,602 plus ($800,000 − $387,000) × 0.045, which is $30,187. General duty on $900,000 is $11,602 plus ($900,000 − $387,000) × 0.045, which is $34,687. The first-home concession is $34,687 − ($100,000 / $200,000) × $30,187 = $34,687 − $15,093.50 = $19,593.50. That is the sample headline, and it is the $900,000 row in the NSW Government’s reduced-rate table for contracts from 1 July 2026 to 30 June 2027.',
      'The same check at $850,000 is $9,796.75, at $950,000 is $29,390.25, and at $990,000 is $37,227.65. Vacant land at $370,000 is $2,761.40, at $390,000 is $5,552.80, at $410,000 is $8,514.20, and at $430,000 is $11,475.60. Those four land figures are the reduced-rate examples on the same NSW Government page. A $450,000 value, whether or not you asked for the land concession, is $14,437, which is also Revenue NSW’s published calculation for that dutiable value.'
    ],
    examplesHeading: 'Worked 2026/27 NSW transfer duty examples',
    examples: [
      {
        title: 'A first home buyer at $900,000, and the same price with no concession',
        paragraphs: [
          'Choose first home buyer, home, and not a foreign person. The headline is $19,593.50. Transfer duty is $19,593.50 and the surcharge is $0.00. The effective rate is 2.18%. The note says the concessional rate applies because the value is above $800,000 and below $1,000,000. General duty on that price would have been $34,687. The concession removes $15,093.50, which is half of the $30,187 duty on an $800,000 home, because $900,000 is halfway from $800,000 to $1,000,000.',
          'Switch the buyer to “Not a first home buyer” at the same $900,000 and the headline becomes the general duty. At $800,000 a first home buyer pays $0.00, while a buyer who is not eligible pays $30,187.00. The exemption is worth the whole general duty, not a partial discount. At $750,000 the first-home result is still $0.00. The threshold is $800,000 or less, not a sliding scale below that line.'
        ]
      },
      {
        title: 'The $1,000,000 cliff, a $1,350,000 auction, and premium duty at $4,000,000',
        paragraphs: [
          'A first home buyer at $1,000,000 does not get the concession. The result says so, and the duty is $39,187.00, the same general duty a buyer who is not a first home buyer pays at that price. One dollar under $1,000,000 is still concessional. The statute draws the line at $1,000,000 or more. At $990,000 the first-home duty is $37,227.65, so the last $10,000 of price before the ceiling is not where the jump happens. The jump is at the ceiling itself.',
          'A $1,350,000 purchase by someone who is not a first home buyer is $55,537.00. That is Revenue NSW’s auction example: $52,237 plus $60,000 × 0.055. A $4,000,000 dutiable value is $203,237.00, the premium-duty example: $194,137 plus $130,000 × 0.07. At exactly $3,870,000 the result is $194,137.00 and the premium rate has not yet replaced the general rate, because the two formulas meet at that point. Above it, each extra $100 costs $7 of duty rather than $5.50.'
        ]
      },
      {
        title: 'Vacant land for a first home buyer, and a foreign purchaser at $1,000,000',
        paragraphs: [
          'Vacant land at $350,000 for a first home buyer is $0.00. At $370,000 it is $2,761.40. At $430,000 it is $11,475.60. At $450,000 the concession stops and the duty is $14,437.00, whether you selected vacant land or a buyer who is not eligible. Revenue NSW uses that same $14,437 figure for a $450,000 dutiable value in its family-transfer example. The concession does not care that a relative discounted the price. If the market value is higher than the price, the higher number is the one that should be typed in.',
          'A foreign person at $1,000,000 pays $39,187.00 of transfer duty plus $90,000.00 of surcharge, and the headline is $129,187.00. The effective rate is 12.92%. Selecting first home buyer at the same time does not restore the concession. If you are not a foreign person, leave the surcharge off. The 9% line is not a substitute for foreign buyer duty in another Australian state, and it is not England’s non-resident stamp duty surcharge.'
        ]
      }
    ],
    table: {
      heading: '2026/27 NSW duty at the published check prices',
      caption: 'Home concession rows use the First Home Buyers Assistance Scheme for a dwelling. Land concession rows use the vacant-land formula. General rows are buyers who are not first home buyers. Foreign adds 9% of the dutiable value and drops the concession. These prices are the ones Revenue NSW or the NSW Government publish as 2026/27 examples, plus the $800,000 and $1,000,000 boundaries.',
      headers: ['Dutiable value', 'Buyer', 'Transfer duty', 'Surcharge', 'Headline'],
      rows: [
        ['$800,000', 'First home, home', '$0.00', '$0.00', '$0.00'],
        ['$850,000', 'First home, home', '$9,796.75', '$0.00', '$9,796.75'],
        ['$900,000', 'First home, home', '$19,593.50', '$0.00', '$19,593.50'],
        ['$990,000', 'First home, home', '$37,227.65', '$0.00', '$37,227.65'],
        ['$1,000,000', 'First home, home', '$39,187.00', '$0.00', '$39,187.00'],
        ['$370,000', 'First home, land', '$2,761.40', '$0.00', '$2,761.40'],
        ['$450,000', 'General', '$14,437.00', '$0.00', '$14,437.00'],
        ['$1,350,000', 'General', '$55,537.00', '$0.00', '$55,537.00'],
        ['$4,000,000', 'General, premium', '$203,237.00', '$0.00', '$203,237.00'],
        ['$1,000,000', 'Foreign person', '$39,187.00', '$90,000.00', '$129,187.00']
      ]
    },
    limitsHeading: 'What this NSW duty estimate leaves out',
    limits: [
      'Eligibility for the first-home scheme is more than a price. The buyers have to be eligible persons, at least one must be a citizen or permanent resident, the purchase has to be of the whole property, and the buyers must live in the home for the required period. This page only applies the price formula. It will show $0 on an $800,000 home even if a buyer would fail those tests. Shared-equity arrangements use a different concession and are not modeled.',
      'The published bracket foot at $103,000 is $1,662, which is 50 cents below a pure extension of the previous band. This calculator follows the published foot for each band, and it follows the straight percentage in Revenue NSW’s worked examples rather than rounding every slice up to the next $100. A value that is not a whole hundred dollars can therefore differ by cents from a counter that ceilings each $100. The $20 minimum applies only on the first band, and only when the value is above zero.',
      'Premium duty on a property used partly for business, and the two-hectare limit for large residential land, are not split out. Surcharge purchaser duty exemptions, including some Australian-based developers and retirement visa holders, are not tested. Victoria, Queensland, and the other states have their own rate cards. England and Northern Ireland use Stamp Duty Land Tax. Typing a pound price into this form does not convert it, and it does not produce an SDLT figure.',
      'The result is the duty on the value you type. It is not a quote for mortgage insurance, legal fees, or an adjustment for GST. A new-home contract that is treated as a different dutiable transaction needs the ruling that fits that contract. If the market value and the price differ, use the higher one. The calculator cannot look the property up.'
    ],
    disclaimer: 'This is a 2026/27 planning estimate for NSW transfer duty, not an assessment, a Revenue NSW calculation notice, or legal advice. Revenue NSW and your conveyancer assess the duty due.',
    faqs: [
      {
        q: 'How much stamp duty does a first home buyer pay on a $900,000 NSW home in 2026/27?',
        a: 'This calculator shows $19,593.50. General duty would be $34,687. The concession is half of the $30,187 duty on an $800,000 home, because $900,000 sits halfway to the $1,000,000 ceiling. The surcharge is $0 unless you mark the purchase as a foreign person.'
      },
      {
        q: 'Is NSW transfer duty zero for every first home under $800,000?',
        a: 'On the price test, yes for a home, and the vacant-land test is $350,000 or less. At $800,000 the first-home home result is $0.00. A buyer who is not eligible pays $30,187.00 at that same value. The other eligibility rules, including living in the home, are not checked here.'
      },
      {
        q: 'What happens to the NSW first home concession at $1,000,000?',
        a: 'It stops. A first home buyer and any other buyer both pay general duty of $39,187.00 at $1,000,000. At $990,000 the first-home result is still the concessional $37,227.65. The cliff is at $1,000,000, not a smooth approach to it.'
      },
      {
        q: 'How is the 2026/27 premium rate applied above $3,870,000?',
        a: 'Duty is $194,137 plus 7% of the value over $3,870,000. At $4,000,000 that is $203,237.00, matching Revenue NSW’s worked example. At exactly $3,870,000 the general formula already equals $194,137.00, so the premium rate and the general rate meet.'
      },
      {
        q: 'Does the 9% foreign surcharge replace transfer duty?',
        a: 'No. It is added. On $1,000,000 the headline is $129,187.00, made up of $39,187.00 transfer duty and $90,000.00 surcharge. The first-home concession is not applied together with the surcharge on this page.'
      },
      {
        q: 'Can this NSW calculator be used for England stamp duty?',
        a: 'No. England and Northern Ireland charge Stamp Duty Land Tax, in pounds, on a different set of bands. A $900,000 result of $19,593.50 is not an SDLT figure, and a pound price typed into this form is treated as Australian dollars.'
      }
    ],
    relatedLinks: [
      { slug: 'england-stamp-duty-calculator', label: 'England stamp duty calculator', note: 'Residential SDLT in pounds for England and Northern Ireland. A different statute and a different currency.' },
      { slug: 'mortgage-calculator', label: 'Fixed-rate mortgage payment calculator', note: 'Principal and interest in US dollars. It does not add this Australian transfer duty or convert currencies.' },
      { slug: 'australia-take-home-pay-calculator', label: 'Australia take-home pay calculator for 2026–27', note: 'Resident income tax and the Medicare levy on a salary. It is not the tax on a house.' }
    ]
  },
  'uk-student-loan-repayment-calculator': {
    title: 'UK Student Loan Repayment Calculator 2026/27 | ClearCalc',
    h1: 'UK Student Loan Repayment Calculator for 2026/27',
    description: 'Estimate the 2026/27 Plan 1, Plan 2, Plan 4, Plan 5, or postgraduate student loan deduction from monthly or weekly UK earnings.',
    intro: [
      'This UK student loan repayment calculator estimates the deduction an employer takes for the 2026/27 tax year, 6 April 2026 to 5 April 2027. It covers one undergraduate plan, Plan 1, Plan 2, Plan 4, or Plan 5, and it can add a postgraduate loan on top. The sample is £35,000 a year on Plan 2, paid monthly, with no postgraduate loan. The headline is the deduction for one pay period, rounded down to the pound the way the employer tables round.',
      'The annual thresholds are the ones HMRC tells employers to use: £26,900 for Plan 1, £29,385 for Plan 2, £33,795 for Plan 4, £25,000 for Plan 5, and £21,000 for a postgraduate loan. Undergraduate plans take 9% of earnings over the threshold. A postgraduate loan takes 6%. The take-home pay pages for England and for Scotland do not subtract this deduction. Add it yourself if you want pay after tax, National Insurance, and the loan.'
    ],
    steps: [
      'Enter annual gross earnings in pounds. The sample, 35000, means £35,000 for the year before tax.',
      'Choose one undergraduate plan, or “No undergraduate plan” if you only have a postgraduate loan. Do not pick a second undergraduate plan and add the two results.',
      'Choose whether a postgraduate loan is repaid as well. That 6% is on top of the undergraduate 9%.',
      'Choose monthly or weekly pay. Press Calculate. The headline is the deduction for that pay period, already rounded down to a whole pound.'
    ],
    howHeading: 'How a 2026/27 student loan deduction is worked out',
    howItWorks: [
      'Payroll does not take 9% of the annual salary and then divide by 12. It takes the earnings in the pay period, subtracts the pay-period threshold, multiplies the excess by 9% or by 6%, and rounds that deduction down to the nearest pound. HMRC’s published monthly thresholds are £2,241.66 for Plan 1, £2,448.75 for Plan 2, £2,816.25 for Plan 4, £2,083.33 for Plan 5, and £1,750.00 for a postgraduate loan. The weekly thresholds are £517.30, £565.09, £649.90, £480.76, and £403.84. This page uses those figures, not a fresh division of the annual threshold.',
      'A flat annual salary is turned into one pay period by dividing by 12 or by 52 and rounding to the penny. £35,000 a month is £2,916.67. Plan 2 then sees £2,916.67 − £2,448.75 = £467.92, times 9% is £42.1128, which rounds down to £42. The straight annual sum, 9% of £35,000 − £29,385, is £505.35. Twelve times the £42 payroll deduction is £504. The £1.35 gap is the penny of pay-period rounding plus the rule that drops anything under the next pound. It is not interest, and it is not a second plan.',
      'Weekly pay uses the same salary and a different threshold. £35,000 over 52 weeks is £673.08. Plan 2 weekly is £673.08 − £565.09 = £107.99, times 9% is £9.719, which rounds down to £9. Fifty-two times £9 is £468, which is £36 less than the monthly method’s £504 and £37.35 less than the straight £505.35. Someone paid weekly really can repay less over a flat year than someone paid monthly, because each week drops its own leftover pence. This page shows that. It does not say one frequency is better. It says the payslip rule is not the annual percentage.',
      'Two undergraduate plans do not mean 18%. If you have Plan 1 and Plan 2, HMRC takes 9% of earnings over the lower threshold and splits that one deduction between the plans. Choose the plan with the lower threshold if you want the total that leaves your pay. Do not run Plan 2 as well and add it. A postgraduate loan is different: it is an extra 6% over £21,000, paid at the same time as the undergraduate 9%. The form allows that combination. Plan 5 is the plan for undergraduate courses that started on or after 1 August 2023, and repayments through payroll start from April 2026. Plan 4 is the Scottish plan.'
    ],
    formula: 'Tax year 2026/27. One pay frequency, a flat annual salary.\nPay-period earnings = annual salary ÷ 12 or ÷ 52, rounded to the penny\nPlan 1 threshold = £26,900 a year, £2,241.66 a month, £517.30 a week, at 9%\nPlan 2 threshold = £29,385 a year, £2,448.75 a month, £565.09 a week, at 9%\nPlan 4 threshold = £33,795 a year, £2,816.25 a month, £649.90 a week, at 9%\nPlan 5 threshold = £25,000 a year, £2,083.33 a month, £480.76 a week, at 9%\nPostgraduate threshold = £21,000 a year, £1,750 a month, £403.84 a week, at 6%\nDeduction = excess over the pay-period threshold × rate, rounded down to a whole pound\nUndergraduate plans are not added together. Postgraduate is added to the one undergraduate plan you chose.\nAnnual payroll total = deduction × number of pay periods\nStraight annual percentage = rate × max(0, salary − annual threshold), kept in pence and not rounded down to a pound',
    formulaNotes: [
      'The £28,000 Plan 5 row is a check against the Student Loans Company guide for 2026 to 2027, which lists an approximate monthly repayment of £22 at that income. This calculator shows £22.00 / month. Pay-period earnings are £2,333.33, the excess over £2,083.33 is £250.00, and 9% is £22.50, which rounds down to £22. The straight annual 9% of £3,000 is £270, while twelve payroll deductions are £264.',
      'The postgraduate guide lists about £45 a month at £30,000. With no undergraduate plan and a postgraduate loan, this page shows £45.00 / month. Pay-period earnings are £2,500.00, the excess over £1,750.00 is £750.00, and 6% is £45.00 exactly, so the pound rounding removes nothing. At £21,000 the postgraduate deduction is £0.00, and at £25,000 the Plan 5 deduction is £0.00.'
    ],
    examplesHeading: 'Worked 2026/27 student loan examples',
    examples: [
      {
        title: '£35,000 on Plan 2, monthly, with and without a postgraduate loan',
        paragraphs: [
          'The sample headline is £42.00 / month. Plan 2 is £42.00, the postgraduate line is £0.00, and pay-period earnings are £2,916.67. If every month matched, the year would be £504.00. The straight annual percentage is £505.35. The threshold line confirms Plan 2 at £29,385 a year and £2,448.75 a month.',
          'Turn the postgraduate loan on and keep Plan 2. The headline is £112.00 / month, made of £42.00 undergraduate and £70.00 postgraduate. The year of matched months is £1,344.00, against a straight annual figure of £1,345.35. The postgraduate piece on its own is 6% of the pay-period excess over £1,750, not 6% of the whole £2,916.67. Someone who adds 6% of £35,000 and ignores the threshold will overstate the loan by a wide margin.'
        ]
      },
      {
        title: 'The same Plan 2 salary paid weekly, and Plan 5 at the guide’s £28,000',
        paragraphs: [
          '£35,000 on Plan 2, paid weekly, is £9.00 / week. Pay-period earnings are £673.08 and the weekly threshold is £565.09. Fifty-two weeks at £9 is £468.00, against £504.00 on the monthly method and £505.35 on the straight annual percentage. The salary did not change. The threshold and the rounding did. Use the frequency that matches the payslip you are checking.',
          '£28,000 on Plan 5, paid monthly, is £22.00 / month. That matches the approximate figure in the 2026/27 student-loan guide. The straight annual percentage is £270.00 and the payroll year is £264.00. At £25,000, Plan 5 monthly earnings equal the £2,083.33 threshold and the deduction is £0.00. One pound of annual salary over £25,000 does not produce a deduction until the pay-period excess reaches enough to round to a pound.'
        ]
      },
      {
        title: 'Plan 1, Plan 4, and a postgraduate loan with no undergraduate plan',
        paragraphs: [
          '£35,000 on Plan 1, monthly, is £60.00 / month. The threshold is lower than Plan 2, so the deduction is higher: the excess over £2,241.66 is larger than the excess over £2,448.75. The straight annual figure is £729.00, and twelve payroll months are £720.00. If you also had a Plan 2 loan, you would not add the £42 Plan 2 result to this £60. The total undergraduate deduction would be the Plan 1 amount, split between the plans. Adding both overstates the payslip.',
          '£35,000 on Plan 4, the Scottish plan, is £9.00 / month. The threshold is £33,795, so only a thin slice of £35,000 is over it. The straight annual figure is £108.45 and the payroll year is £108.00. A postgraduate loan with no undergraduate plan, at £30,000 monthly, is £45.00 / month and a straight annual £540.00. At £21,000 that postgraduate deduction is £0.00. Plan 4 and a postgraduate loan can be selected together. They answer different loans.'
        ]
      }
    ],
    table: {
      heading: '2026/27 deductions from a flat salary',
      caption: 'Monthly rows divide the annual salary by 12, subtract the HMRC monthly threshold, apply 9% or 6%, and round down to the pound. The payroll-year column is that monthly deduction times 12. The straight-annual column is the rate times earnings over the annual threshold, before that pound rounding. Postgraduate rows have no undergraduate plan.',
      headers: ['Salary', 'Plan', 'This month', 'Payroll year', 'Straight annual'],
      rows: [
        ['£28,000', 'Plan 5', '£22.00', '£264.00', '£270.00'],
        ['£30,000', 'Postgraduate only', '£45.00', '£540.00', '£540.00'],
        ['£35,000', 'Plan 2', '£42.00', '£504.00', '£505.35'],
        ['£35,000', 'Plan 2 plus postgraduate', '£112.00', '£1,344.00', '£1,345.35'],
        ['£35,000', 'Plan 1', '£60.00', '£720.00', '£729.00'],
        ['£35,000', 'Plan 4', '£9.00', '£108.00', '£108.45'],
        ['£35,000', 'Plan 5', '£75.00', '£900.00', '£900.00'],
        ['£50,000', 'Plan 2 plus postgraduate', '£299.00', '£3,588.00', '£3,595.35']
      ]
    },
    limitsHeading: 'What this student loan deduction leaves out',
    limits: [
      'The salary is treated as a flat amount in every pay period. A bonus, overtime, or a month of statutory pay can push one period over the threshold even when the annual salary looks close to it, or the reverse. HMRC’s instruction for earnings above the printed tables is the same threshold-and-rate sum this page uses, still rounded down to the pound. Directors and irregular pay are not given a special rule here.',
      'Interest on the loan balance is not calculated. The balance does not change the deduction. Repayments stop being due through payroll once Student Loans Company tells the employer to stop, which can happen near the end of the loan even if income is still over the threshold. This page cannot see that notice. Voluntary payments you send yourself are not in the headline.',
      'Plan 1 together with Plan 2 is one 9% deduction over the lower threshold, not two. The form has only one undergraduate menu so that mistake is harder to make, but nothing stops you from adding two visits. Overseas thresholds are different from these UK thresholds and are not used. The deduction is also not income tax and not National Insurance. The England, Wales, and Northern Ireland take-home page, and the Scotland page, stop before the loan.',
      'Earnings below the pay-period threshold produce a zero deduction for that plan even if a previous month was over it. There is no annual reconciliation in ordinary PAYE that refunds you merely because the year’s total ended near the annual threshold. If your pay is uneven, add the monthly results yourself. Do not assume the straight annual column is what left the bank account.'
    ],
    disclaimer: 'This is a 2026/27 planning estimate of a UK payroll student-loan deduction, not a statement from the Student Loans Company and not tax advice. Your payslip and SLC determine what you repay.',
    faqs: [
      {
        q: 'How much is a Plan 2 deduction on £35,000 a month in 2026/27?',
        a: '£42.00. Monthly earnings are taken as £2,916.67, the Plan 2 monthly threshold is £2,448.75, and 9% of the excess rounds down from £42.11 to £42. Twelve such months are £504.00. The straight 9% of £35,000 minus £29,385 is £505.35.'
      },
      {
        q: 'Why is the weekly Plan 2 total for the same £35,000 lower than the monthly total?',
        a: 'Each week is rounded down on its own. The weekly deduction is £9.00, and 52 weeks are £468.00. The monthly method produces £504.00. The salary and the 9% rate are the same. The weekly threshold is £565.09, and the discarded pence are not saved up for a later week.'
      },
      {
        q: 'Do Plan 1 and Plan 2 both come out at 9%?',
        a: 'No. If you have both, the payslip takes 9% over the lower threshold and splits that one amount. On £35,000 the Plan 1 monthly deduction is £60.00 and the Plan 2 deduction on its own is £42.00. Adding those two overstates the undergraduate repayment. Choose the lower threshold when you want the combined total.'
      },
      {
        q: 'Is a postgraduate loan included in the undergraduate 9%?',
        a: 'No. It is an extra 6% over £21,000, and it is paid at the same time. On £35,000 monthly, Plan 2 plus a postgraduate loan is £112.00, of which £70.00 is the postgraduate part. A postgraduate loan alone at £30,000 is £45.00 a month, which matches the approximate figure in the 2026/27 guide.'
      },
      {
        q: 'What does Plan 5 take from £28,000 in 2026/27?',
        a: '£22.00 a month on this calculator, the same approximate repayment the student-loan guide lists for that income. The annual threshold is £25,000 and the monthly threshold is £2,083.33. At exactly £25,000 the monthly deduction is £0.00.'
      },
      {
        q: 'Does the England take-home calculator already subtract this loan?',
        a: 'No. That page is income tax and employee National Insurance only. Its limits name these same 2026/27 thresholds and leave the loan out. Subtract this deduction from that take-home figure yourself, and only when both results are for the same salary and the same year.'
      }
    ],
    relatedLinks: [
      { slug: 'uk-take-home-pay-calculator', label: '2026/27 take-home pay for England, Wales and Northern Ireland', note: 'Income tax and employee National Insurance. It does not subtract this student loan.' },
      { slug: 'scotland-take-home-pay-calculator', label: 'Scotland take-home pay calculator for 2026/27', note: 'Scottish income tax and the same National Insurance. Plan 4 is still a separate deduction.' },
      { slug: 'hourly-to-salary-calculator', label: 'Hourly to salary calculator', note: 'Turn an hourly rate into an annual figure first if the loan threshold is easier to compare with a salary.' }
    ]
  },
  'room-paint-calculator': {
    title: 'Room Paint Calculator: Gallons for Walls and Ceiling | ClearCalc',
    h1: 'How Many Gallons of Paint for a Room',
    description: 'Calculate gallons of paint for a rectangular room from length, width, wall height, door and window area, coats, and the coverage on the can.',
    intro: [
      'This room paint calculator turns a rectangular room into a gallon count. You enter the length and width of the floor, the wall height, the square feet of doors and windows, the number of coats, and how many square feet one gallon covers. You also say whether the ceiling is painted. The sample is a 12 by 10 foot room with 8 foot walls, 36 square feet of openings, two coats, 350 square feet per gallon, and the ceiling included. The headline is the number of whole gallons to buy.',
      'The arithmetic is area, not a price. It does not pick a brand, a sheen, or a color, and it does not know whether the walls were already painted a similar color. Primer, texture, bare drywall, and a drastic color change can all use more paint than the coverage number on a can of finish paint. The concrete slab calculator on this site answers a different shopping question, in cubic yards and bags. Do not use a bag yield as a gallon coverage, or the reverse.'
    ],
    steps: [
      'Enter length, width, and wall height in feet. The sample is 12 by 10 with walls 8 feet high. Measure the room you are painting, including a closet only if you will paint it.',
      'Enter the combined square feet of doors and windows. A common 3 by 7 foot door is 21 square feet. The sample, 36, is that door plus about 15 square feet of window. Use 0 if you will paint the openings too.',
      'Enter the number of coats and the coverage in square feet per gallon. The sample is 2 coats and 350. Then choose whether the ceiling is included.',
      'Press Calculate. The headline rounds up to a whole gallon. The line under it keeps the exact gallons, and another line rounds up only as far as the next quart.'
    ],
    howHeading: 'How room area becomes a gallon count',
    howItWorks: [
      'Wall area is the perimeter times the height. The perimeter of a rectangle is twice the length plus the width, so a 12 by 10 foot room has a perimeter of 44 feet. At 8 feet high the walls are 44 × 8 = 352 square feet. The ceiling, if you include it, is length times width, 120 square feet. Openings are subtracted from the walls only. They are not subtracted from the ceiling, because a door is not a hole in the ceiling. Paintable area in the sample is 352 − 36 + 120 = 436 square feet.',
      'Each coat covers that area again. Two coats mean 872 square feet of paint. Divide by the coverage you typed. At 350 square feet per gallon, 872 / 350 = 2.491… gallons, which the screen shows as 2.49. You cannot buy 0.49 of a gallon from the whole-gallon line. The headline rounds up to 3 gallons unless the division is exact. The quart line is less blunt: 2.49 gallons rounds up to 2.5 gallons, which is 10 quarts. If the store sells quarts, 2 gallons plus 2 quarts is closer to the math than 3 gallons. The headline still says 3, because a gallon is the unit it promises to round to.',
      'Coverage is your input, not a hidden constant. A can that says 400 square feet per gallon will not match a can that says 350. The sample uses 350 because that is a common figure for smooth finished walls. Porous drywall, bare wood, and heavy texture drink more, so a lower coverage number is the honest input, not a second waste percentage. This form has no separate waste field. If you want slack, lower the coverage or add a fraction of a coat. Turning 2 coats into 2.25 is allowed. The coat field is not limited to whole numbers.',
      'Leaving the ceiling off changes the sample more than people expect. The walls after openings are 316 square feet. Two coats are 632 square feet, divided by 350 is 1.81 gallons. The headline becomes 2 gallons, and the quart line is exactly 2 gallons, which is 8 quarts. The ceiling was 120 square feet, 240 square feet across two coats, about 0.69 gallon at this coverage. That is why the with-ceiling exact figure is 2.49 rather than 1.81. Painting the ceiling is a real extra purchase, not a rounding artifact.'
    ],
    formula: 'Perimeter = 2 × (length + width)\nWall area = perimeter × height\nCeiling area = length × width, or 0 if the ceiling is not painted\nPaintable area = wall area − openings + ceiling area\nOpenings cannot exceed the wall area\nExact gallons = paintable area × coats / coverage\nGallons to buy = exact gallons, rounded up to the next whole gallon\nQuarts to buy = exact gallons × 4, rounded up to the next whole quart',
    formulaNotes: [
      'The sample is exact: walls 352, ceiling 120, openings 36, paintable area 436, two coats 872, 872 / 350 = 2.491428…, displayed as 2.49 gallons. The whole-gallon headline is 3. The quart line is 2.5 gallons, or 10 quarts. With the ceiling turned off, 316 × 2 / 350 = 1.8057…, displayed as 1.81 gallons, and the headline is 2.',
      'An 8 by 8 foot room with 8 foot walls, no openings, one coat, walls only, and 350 square feet per gallon is 256 / 350 = 0.731… gallons, displayed as 0.73. The headline is still 1 gallon, because that is the whole-gallon round-up. The quart line is 0.75 gallons, or 3 quarts. On a room this small the quart line is the more useful shopping number, and the headline is there so a gallon-only store is not short.'
    ],
    examplesHeading: 'Worked room paint examples',
    examples: [
      {
        title: '12 by 10 feet, 8 foot walls, two coats, ceiling included',
        paragraphs: [
          'The calculator shows 3 gallons to buy. Exact paint is 2.49 gallons. Rounded up to the next quart, that is 2.5 gallons, or 10 quarts. Wall area is 352 square feet, the ceiling adds 120, and 36 square feet of openings come off the walls. Paintable area is 436 square feet across 2 coats. Coverage is 350 square feet per gallon.',
          'Buying 3 gallons covers the round-up and leaves almost half a gallon unopened if the walls take paint the way the can promises. Buying 2 gallons and 2 quarts matches the quart line and leaves less leftover. Neither answer prices the paint. A third coat, or a primer that the can does not count inside the 350, is a new calculation. Change the coat field rather than guessing a percentage on top of the 3.'
        ]
      },
      {
        title: 'The same room without the ceiling, and one coat at 400 square feet per gallon',
        paragraphs: [
          'Turn the ceiling off and keep two coats at 350. The headline is 2 gallons to buy. Exact paint is 1.81 gallons, and the quart line is 2 gallons, or 8 quarts. Wall area stays 352 square feet. Openings stay 36. Paintable area is 316 square feet. The ceiling’s 120 square feet were the difference between 2.49 gallons and 1.81 gallons before the round-up. After the round-up the shopping difference is one gallon, from 3 down to 2.',
          'Walls only, no openings, one coat, and a can that covers 400 square feet per gallon: exact paint is 0.88 gallons, the headline is 1 gallon, and the quart line is 1 gallon, or 4 quarts. The walls are still 352 square feet. One coat at 400 uses less than one coat at 350 would, and far less than two coats. If the can in your hand says 350, do not leave 400 in the form because the sample started there. The coverage field is the claim printed on that can.'
        ]
      },
      {
        title: 'A 10 by 10 room with one door, and a larger room that needs five gallons',
        paragraphs: [
          'A 10 by 10 foot room, 8 foot walls, 21 square feet of openings, two coats, 350 square feet per gallon, and the ceiling included, shows 3 gallons to buy. Exact paint is 2.28 gallons, or 2.5 gallons at the quart line, which is 10 quarts. Wall area is 320 square feet and the ceiling is 100. Paintable area is 399 square feet. One standard door, and no window subtracted, still does not bring a two-coat ceiling job under 2 gallons. The exact figure would have to be 2.00 or less before the headline dropped to 2.',
          'A 15 by 12 foot room, 9 foot walls, 60 square feet of openings, two coats, 300 square feet per gallon, and the ceiling included, shows 5 gallons to buy. Exact paint is 4.04 gallons. The quart line is 4.25 gallons, or 17 quarts. Wall area is 486 square feet, the ceiling is 180, and paintable area is 606 square feet across two coats. The lower coverage is doing as much work as the larger room. At 350 square feet per gallon this same room would use less. Type the number from the can you will open, especially for a dark color that the label says covers fewer square feet.'
        ]
      }
    ],
    table: {
      heading: 'Gallons for rectangular rooms at the coverage you set',
      caption: 'Each row is what this calculator displays for that room. Openings are subtracted from the walls before the ceiling is added. The gallon column rounds up to a whole gallon. The quart column rounds up to the next quart and is the closer shopping figure when the store sells quarts.',
      headers: ['Room', 'Openings', 'Coats', 'Coverage', 'Ceiling', 'Exact', 'Gallons to buy', 'To the next quart'],
      rows: [
        ['12 × 10 × 8 ft', '36 sq ft', '2', '350', 'Yes', '2.49', '3', '2.5 gal (10 qt)'],
        ['12 × 10 × 8 ft', '36 sq ft', '2', '350', 'No', '1.81', '2', '2 gal (8 qt)'],
        ['12 × 10 × 8 ft', 'None', '1', '400', 'No', '0.88', '1', '1 gal (4 qt)'],
        ['10 × 10 × 8 ft', '21 sq ft', '2', '350', 'Yes', '2.28', '3', '2.5 gal (10 qt)'],
        ['15 × 12 × 9 ft', '60 sq ft', '2', '300', 'Yes', '4.04', '5', '4.25 gal (17 qt)'],
        ['8 × 8 × 8 ft', 'None', '1', '350', 'No', '0.73', '1', '0.75 gal (3 qt)']
      ]
    },
    limitsHeading: 'What a rectangular gallon count leaves out',
    limits: [
      'The room is a box. A sloped ceiling, a stair hall, an alcove, wainscot that stops partway up the wall, and built-in shelves that you paint on every face are different areas. Measure those separately and add the square feet, or raise the height only if that honestly represents the extra wall. The form will not accept a triangle. Openings larger than the wall area are rejected, because a subtraction bigger than the walls would invent negative paint.',
      'Coverage on a label is a laboratory-style figure for smooth, sealed surfaces. The first coat on new drywall often covers less. A gallon of primer is not counted unless you include it as a coat or lower the coverage. Dark colors, ceiling paint, and masonry paint publish their own numbers. Trim paint in a quart is outside this wall-and-ceiling area. Closet interiors are excluded unless their length and width are part of the room you measured.',
      'The result is in US gallons and square feet. A UK or Australian litre can is not a US gallon, and a metre-measured room has to be converted to feet before it is typed here. One US gallon is about 3.785 litres. The length converter on this site turns metres into feet if that is the measurement you have. It does not convert the gallon answer into litres. Multiply the exact-gallon line by 3.785 yourself if the can on the shelf is metric, then round up to a can you can buy.',
      'Waste is not a separate percentage. Rounding up to a gallon or a quart is the only spare the formula adds, and it adds that spare so you do not stop short of the area, not so you can repaint after a spill. Two people with the same room and different coverage numbers should get different answers. If they do not, one of them left the sample coverage of 350 in the form.'
    ],
    disclaimer: 'This is an area estimate for a rectangular room, not a decorating specification or a promise that a particular can will match the coverage you typed. Confirm the label, and buy primer when the surface needs it.',
    faqs: [
      {
        q: 'How many gallons of paint do I need for a 12 by 10 room with 8 foot ceilings?',
        a: 'With 36 square feet of doors and windows, two coats, 350 square feet per gallon, and the ceiling included, this calculator shows 3 gallons. The exact amount is 2.49 gallons, or 2.5 gallons if you can buy quarts. Walls are 352 square feet and the ceiling is 120.'
      },
      {
        q: 'Does the room paint calculator include the ceiling?',
        a: 'Only if you choose “Paint the ceiling.” The sample includes it. Turn it off and the same 12 by 10 room falls from 2.49 exact gallons to 1.81, and the whole-gallon headline falls from 3 to 2. Openings are subtracted from the walls either way. They are not subtracted from the ceiling.'
      },
      {
        q: 'Why does the gallon count round up when the quart line is lower?',
        a: 'The headline is a whole gallon, because that is a common can size. The sample’s 2.49 gallons becomes 3 on that line and 2.5 gallons, 10 quarts, on the quart line. An 8 by 8 foot room at one coat can show 1 gallon in the headline and 0.75 gallons, 3 quarts, underneath. Use the quart line when the store sells quarts.'
      },
      {
        q: 'What coverage per gallon should I type?',
        a: 'Type the number on the can you will use. The sample uses 350 square feet per gallon, which is a common figure for smooth walls and not a rule. A can rated at 400 square feet per gallon, on the sample walls with one coat and no ceiling or openings, uses 0.88 gallons. The same walls at 350 would use more. Porous or textured surfaces need the lower number the job actually gets, not the best number on the label.'
      },
      {
        q: 'How do I count a door and a window?',
        a: 'Add their areas and type one number. A 3 by 7 foot door is 21 square feet. The sample’s 36 square feet is that door plus 15 square feet of window. A 10 by 10 room with only the 21 square foot door, two coats, the ceiling, and 350 square feet per gallon still shows 3 gallons, because the exact amount is 2.28. Use 0 if you are painting the doors and windows the same as the walls.'
      },
      {
        q: 'Can I use this gallon count for a concrete slab or a metric room?',
        a: 'No for the slab. The concrete calculator uses cubic feet, cubic yards, and bag yields. Paint coverage is square feet per gallon. For a room measured in metres, convert the length, width, and height to feet first. The exact-gallon line times 3.785 is an approximate litre count. This form does not sell the paint in litres itself.'
      }
    ],
    relatedLinks: [
      { slug: 'concrete-slab-calculator', label: 'Concrete slab calculator', note: 'Bags and cubic yards for a rectangular pour. A different material and a different unit.' },
      { slug: 'length-converter', label: 'Length converter from meters', note: 'Convert a metric room to feet before you type the length, width, and height here.' },
      { slug: 'percentage-calculator', label: 'Percentage calculator', note: 'Useful if you want to raise the coverage assumption by a percent after you have read the can. This paint form has no separate waste field.' }
    ]
  }
};
