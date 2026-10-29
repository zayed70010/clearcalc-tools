export const clusterCalculatorContent = {
  'washington-paycheck-calculator': {
    title: 'Washington Paycheck Calculator 2026 (Paid Leave and WA Cares) | ClearCalc',
    h1: 'Washington Paycheck Calculator for 2026',
    description: 'Estimate a 2026 Washington paycheck after federal income tax, Social Security, Medicare, the Paid Leave employee premium, and WA Cares. Washington has no wage income tax.',
    intro: [
      'This Washington paycheck calculator estimates what is left from 2026 wages after federal income tax, Social Security, Medicare, the employee share of Washington Paid Family and Medical Leave, and the WA Cares premium. Washington does not levy a personal income tax on wages, so the state income tax line is $0. That does not make the paycheck identical to a no-tax state that also skips payroll premiums. Paid Leave and WA Cares are withheld from gross wages even though they are not income tax.',
      'Enter annual gross wages, choose single or married filing jointly, choose how often you are paid, enter any traditional 401(k) deferral, and say whether the employee premiums are withheld. The sample is $65,000, single, paid every two weeks, with both premiums withheld and no 401(k). Federal income tax uses the tax year 2026 brackets and standard deduction in IRS Revenue Procedure 2025-32. Social Security and Medicare use the employee rates in IRS Publication 15 for 2026 and the Social Security wage base of $184,500. Paid Leave uses the 2026 premium published by the Employment Security Department. WA Cares uses the 0.58% employee rate.'
    ],
    steps: [
      'Enter annual gross wages in dollars. The sample, 65000, means $65,000 for the year, not one paycheck.',
      'Choose Single or Married filing jointly. Joint uses the joint brackets and the $32,200 standard deduction on this salary only.',
      'Choose a pay frequency. Every two weeks means 26 paychecks. Twice a month means 24. Weekly is 52 and monthly is 12.',
      'Enter a traditional 401(k) deferral for the year, or leave 0. Then choose whether Paid Leave and WA Cares are withheld from the employee, or paid by the employer. Press Calculate.'
    ],
    howHeading: 'How a 2026 Washington paycheck is estimated',
    howItWorks: [
      'Federal taxable wages are gross wages minus the traditional 401(k) deferral actually applied, then minus the standard deduction. For 2026 that deduction is $16,100 for a single filer and $32,200 for married filing jointly. The deferral is capped at wages and at the $24,500 elective deferral limit. Tax on what remains uses the Revenue Procedure 2025-32 brackets: 10%, 12%, 22%, 24%, 32%, 35%, and 37%. For a single filer the 10% band ends at $12,400 of taxable income and the 12% band ends at $50,400. Joint bands are wider.',
      'Social Security is 6.2% of wages up to $184,500. Medicare is 1.45% of all wages. Additional Medicare Tax withholding is 0.9% of wages over $200,000. None of those payroll taxes is reduced by the 401(k) or by the standard deduction. Washington income tax stays at $0. There is no state wage bracket to index for 2026.',
      'Paid Leave is separate from FICA. For 2026 the total premium is 1.13% of gross wages, excluding tips, up to the Social Security cap of $184,500. The Employment Security Department’s simplified method withholds the employee share as wages × 0.0113 × 0.7143, rounded to the cent. That is 71.43% of the total premium. The other 28.57% is the employer share, and employers with fewer than 50 employees are not required to pay it. This page never subtracts the employer share. WA Cares is 0.58% of all gross wages in the amount you type, with no Social Security cap, and it is entirely an employee premium unless the employer chooses to pay it. A 401(k) deferral does not reduce either premium in this model, because both are assessed on gross wages.',
      'Annual take-home is wages minus federal income tax, Social Security, Medicare, Additional Medicare Tax, the employee premiums you said are withheld, and the deferral. Dividing by 26, 24, 12, or 52, and rounding to the cent, is the headline. Twenty-six times that headline can miss the annual figure by a few cents.'
    ],
    formula: 'Tax year 2026. Washington wages. No Washington personal income tax.\nFederal taxable wages = max(0, wages − traditional 401(k) − standard deduction)\nStandard deduction = $16,100 single, or $32,200 married filing jointly\n401(k) applied = min(amount entered, wages, $24,500)\nFederal income tax = 2026 Rev. Proc. 2025-32 brackets on taxable wages\nSocial Security = 6.2% × min(wages, $184,500)\nMedicare = 1.45% × wages\nAdditional Medicare Tax = 0.9% × max(0, wages − $200,000)\nPaid Leave wages = min(wages, $184,500), tips not split out\nEmployee Paid Leave = round(Paid Leave wages × 0.0113 × 0.7143) when withheld\nWA Cares = round(wages × 0.0058) when withheld, with no wage cap\nWashington income tax = $0\nEmployer Paid Leave share is not deducted\nAnnual take-home = wages − federal income tax − Social Security − Medicare − Additional Medicare Tax − withheld premiums − 401(k)\nPaycheck = annual take-home ÷ number of paychecks',
    formulaNotes: [
      'A single filer with $65,000 of wages and no deferral has the same federal and FICA lines as the Texas page: $5,620.00 of federal income tax, $4,030.00 of Social Security, and $942.50 of Medicare. Washington then adds Paid Leave of $524.65 and WA Cares of $377.00. Those two premiums are $901.65 together. They are the entire reason the Washington annual take-home is $53,505.85 rather than the Texas figure of $54,407.50.',
      'The Paid Leave product 65,000 × 0.0113 × 0.7143 is $524.65335, which rounds to $524.65. WA Cares on the same wages is 65,000 × 0.0058 = $377.00 exactly. At $184,500, Paid Leave reaches $1,489.21 and then stops. WA Cares does not stop: at $210,000 it is $1,218.00, while Paid Leave is still $1,489.21.',
      'Choosing “Employer pays both” sets both premium lines to $0 and reproduces the Texas take-home for the same wages, status, frequency, and deferral. That option is only right when the employer has actually agreed to pay the employee shares. The default assumes the employee pays both, which is what the statute allows the employer to withhold.'
    ],
    examplesHeading: 'Worked 2026 Washington paycheck examples',
    examples: [
      {
        title: '$65,000, single, every two weeks, both premiums withheld',
        paragraphs: [
          'Federal income tax is $5,620.00, Social Security is $4,030.00, and Medicare is $942.50. Additional Medicare Tax is $0.00 and Washington income tax is $0.00. Paid Leave is $524.65 and WA Cares is $377.00. Annual take-home is $53,505.85. Divided by 26, the headline is $2,057.92 / two weeks. Twenty-six times $2,057.92 is $53,505.92, seven cents above the annual figure, because the paycheck was rounded on its own.',
          'Against a Texas paycheck with the same federal inputs, cash pay is lower by $901.65 for the year, or about $34.68 on each of 26 checks before rounding. The state income tax line is still $0.00. The gap is the two Washington premiums, not a hidden income-tax bracket.'
        ]
      },
      {
        title: 'The same wages when the employer pays both premiums, or when you defer $6,500',
        paragraphs: [
          'If the employer pays both employee premiums, Paid Leave and WA Cares display as $0.00. Annual take-home rises to $54,407.50, and the two-week headline is $2,092.60. That matches the Texas result for $65,000, single, every two weeks, and no deferral. Use this setting only when those premiums are not coming out of the check.',
          'With both premiums still withheld and a $6,500 traditional 401(k), federal income tax falls from $5,620.00 to $4,840.00. The $780 difference is 12% of $6,500, because the deferral sits in the 12% band. Social Security stays $4,030.00, Medicare stays $942.50, Paid Leave stays $524.65, and WA Cares stays $377.00. Annual take-home is $47,785.85, or $1,837.92 / two weeks. The deferral reduces income tax and cash pay. It does not reduce the Washington premiums.'
        ]
      },
      {
        title: '$120,000 joint with one salary, and $210,000 single',
        paragraphs: [
          'At $120,000, married filing jointly, paid monthly, with both premiums withheld and no deferral, federal income tax is $10,040.00, Social Security is $7,440.00, and Medicare is $1,740.00. Paid Leave is $968.59 and WA Cares is $696.00. Washington income tax is $0.00. Annual take-home is $99,115.41, and the headline is $8,259.62 / month. The joint result assumes the spouse has no income. A second salary needs a different return than this one-wage form can build.',
          'At $210,000, single, every two weeks, Social Security stops at the wage base: $11,439.00. Medicare on the full $210,000 is $3,045.00. Additional Medicare Tax is $90.00. Paid Leave also stops at the wage base, at $1,489.21. WA Cares does not: 0.58% of $210,000 is $1,218.00. Federal income tax is $39,134.00. Annual take-home is $153,584.79, or $5,907.11 / two weeks. Washington income tax is still $0.00.'
        ]
      }
    ],
    table: {
      heading: '2026 Washington paycheck at selected wages',
      caption: 'Single filer, paid every two weeks, no 401(k), with the employee Paid Leave premium and WA Cares both withheld. Federal income tax uses Revenue Procedure 2025-32 and the $16,100 standard deduction. Social Security is 6.2% up to $184,500. Paid Leave uses wages × 1.13% × 71.43% up to that same cap. WA Cares is 0.58% of all wages. Washington income tax is $0. Medicare, 1.45% of wages, is included in annual take-home and is not its own column. Additional Medicare Tax is $0 except at $250,000, where it is $450.00.',
      headers: ['Wages', 'Federal income tax', 'Paid Leave', 'WA Cares', 'Social Security', 'Annual take-home', 'Every two weeks'],
      rows: [
        ['$40,000', '$2,620.00', '$322.86', '$232.00', '$2,480.00', '$33,765.14', '$1,298.66'],
        ['$65,000', '$5,620.00', '$524.65', '$377.00', '$4,030.00', '$53,505.85', '$2,057.92'],
        ['$100,000', '$13,170.00', '$807.16', '$580.00', '$6,200.00', '$77,792.84', '$2,992.03'],
        ['$150,000', '$24,734.00', '$1,210.74', '$870.00', '$9,300.00', '$111,710.26', '$4,296.55'],
        ['$184,500', '$33,014.00', '$1,489.21', '$1,070.10', '$11,439.00', '$134,812.44', '$5,185.09'],
        ['$250,000', '$51,304.00', '$1,489.21', '$1,450.00', '$11,439.00', '$180,242.79', '$6,932.42']
      ]
    },
    limitsHeading: 'What this Washington paycheck estimate leaves out',
    limits: [
      'The federal income tax line is an annual standard-deduction estimate, then divided by the number of paychecks. It is not the IRS Publication 15-T percentage method, and it does not read a Form W-4. Dependents, extra withholding, a second job, and the head-of-household standard deduction are not modeled. Married filing jointly applies the joint brackets and the $32,200 standard deduction to this salary alone. If a spouse also has income, the result understates the tax.',
      'Paid Leave wages in the statute exclude tips, and the Social Security cap is applied per employer. This form has one wage box and one employer. It treats the whole amount as Paid Leave wages up to $184,500, with no tip split. If part of your pay is tips, Paid Leave on this page is too high by 1.13% × 71.43% of those tips. WA Cares is calculated on the same typed amount, which matches the “all gross wages, no cap” rule only when that amount is the gross the premium actually sees.',
      'Some employees are exempt from WA Cares, including certain veterans and some people who had private long-term care coverage when exemptions were open. An exempt employee should choose “WA Cares only” only if Paid Leave is employer-paid and WA Cares is still withheld, or “Employer pays both” if neither comes out of the check. The form cannot look up an exemption letter. Voluntary plans can also change the Paid Leave split. The simplified 71.43% employee share is the statewide default for 2026, not a voluntary-plan rate.',
      'Employer Social Security, employer Medicare, the employer share of Paid Leave, and federal unemployment tax are not deducted. Pre-tax health premiums, HSAs, and FSAs are not separate fields. Catch-up 401(k) contributions above $24,500 are not added. Washington’s paid sick leave and Seattle or other local ordinances are not extra income-tax withholding, and they are not estimated here. Seattle does not add a wage income tax on this page.'
    ],
    disclaimer: 'This is a 2026 planning estimate for Washington wages, not a pay stub, a Form W-4, or tax advice. The IRS, the Employment Security Department, and your employer assess what is withheld.',
    faqs: [
      {
        q: 'Does Washington withhold a state income tax on wages in 2026?',
        a: 'No. This calculator sets Washington income tax to $0.00 at every salary. Federal income tax, Social Security, and Medicare still come out, and so do Paid Leave and WA Cares unless you mark those premiums as employer-paid. The absence of a state income tax is not the same as a Texas or Florida paycheck.'
      },
      {
        q: 'How is the 2026 Washington Paid Leave employee premium calculated?',
        a: 'The total premium is 1.13% of gross wages, excluding tips, up to $184,500. The employee share used here is that wage base times 0.0113 times 0.7143, rounded to the cent. At $65,000 the line is $524.65. At $184,500 and above it is $1,489.21. The employer’s 28.57% share is never subtracted on this page.'
      },
      {
        q: 'Does WA Cares stop at the Social Security wage base?',
        a: 'No. WA Cares is 0.58% of gross wages with no cap. At $65,000 it is $377.00. At $184,500 it is $1,070.10. At $250,000 it is $1,450.00, while Paid Leave has already stopped increasing at $1,489.21. An approved exemption is not detected automatically. Set the premium choice so WA Cares is not withheld if you do not pay it.'
      },
      {
        q: 'Why is this Washington paycheck lower than the Texas result for the same wages?',
        a: 'Federal income tax, Social Security, and Medicare match the Texas page when the wages, filing status, and 401(k) match. At $65,000, single, with nothing deferred, both pages show $5,620.00, $4,030.00, and $942.50. Washington then withholds $524.65 of Paid Leave and $377.00 of WA Cares. Annual take-home is $53,505.85 here and $54,407.50 on the Texas page. The $901.65 gap is those two premiums.'
      },
      {
        q: 'Does a traditional 401(k) reduce Washington Paid Leave or WA Cares?',
        a: 'Not in this model. Both premiums use gross wages. On the $65,000 example, a $6,500 deferral lowers federal income tax from $5,620.00 to $4,840.00 and leaves Paid Leave at $524.65 and WA Cares at $377.00. Social Security and Medicare also stay on gross wages. The deferral itself is still subtracted from cash pay.'
      },
      {
        q: 'What if my Washington employer pays the employee share of Paid Leave?',
        a: 'Choose “WA Cares only” if Paid Leave is employer-paid and WA Cares is still withheld. At $65,000, single, every two weeks, that setting shows Paid Leave of $0.00, WA Cares of $377.00, and a headline of $2,078.10. Choose “Employer pays both” only when neither premium is taken from the check. That setting shows $2,092.60, the same two-week figure as the Texas calculator for these wages.'
      }
    ],
    relatedLinks: [
      { slug: 'texas-paycheck-calculator', label: 'Texas paycheck calculator for 2026', note: 'The same federal tax and FICA, with no Paid Leave and no WA Cares.' },
      { slug: 'florida-paycheck-calculator', label: 'Florida paycheck calculator for 2026', note: 'Another state income-tax line of $0, again without Washington’s two premiums.' },
      { slug: 'california-paycheck-calculator', label: 'California paycheck calculator for 2026', note: 'Adds California income tax and State Disability Insurance instead of Paid Leave and WA Cares.' }
    ]
  },
  'british-columbia-take-home-pay-calculator': {
    title: 'British Columbia Take-Home Pay Calculator 2026 | ClearCalc',
    h1: 'British Columbia Take-Home Pay Calculator for 2026',
    description: 'Estimate 2026 British Columbia take-home pay after federal tax, B.C. tax at 5.60% on the first bracket, the B.C. tax reduction, CPP, and EI.',
    intro: [
      'This British Columbia take-home pay calculator estimates what an employee working in B.C. keeps from an annual salary in the 2026 tax year. It subtracts federal income tax, British Columbia income tax, Canada Pension Plan contributions, and Employment Insurance, then divides the annual result by 12. A two-week figure is shown as well. The sample salary is $70,000.',
      'The provincial math is the full-year 2026 tax, not the July payroll catch-up. British Columbia’s own rate table taxes the first $50,363 at 5.60%. The Canada Revenue Agency told employers to withhold a prorated 6.14% on that bracket for the second half of 2026, because the first half had used 5.06%. A pay stub from September can therefore sit above this annual estimate even when the year’s tax return will use 5.60%. The basic personal amount used here is $13,216, and the B.C. tax reduction base is $690.'
    ],
    steps: [
      'Enter annual gross salary in Canadian dollars. Use 70000 for $70,000, not the amount of one paycheque.',
      'Use employment income before income tax, CPP, and EI. The form has no field for RRSP contributions or union dues. Subtract those yourself if you want them reflected, and read the limits first, because CPP is not a flat deduction.',
      'Press Calculate. The headline is annual take-home divided by 12, rounded to the cent.',
      'Read federal tax, B.C. tax, the B.C. tax reduction inside that B.C. tax, CPP including CPP2, EI, and both basic personal amounts.'
    ],
    howHeading: 'How 2026 British Columbia tax, CPP, and EI are worked out',
    howItWorks: [
      'Employee CPP for 2026 is 5.95% of pensionable earnings between the $3,500 basic exemption and the $74,600 year’s maximum pensionable earnings. Of that 5.95 points, 4.95 points are the base contribution and 1.00 point is the first additional contribution. CPP2 is 4% of earnings between $74,600 and the $85,000 year’s additional maximum, capped at $416. EI outside Quebec is 1.63% of insurable earnings up to $68,900, a maximum premium of $1,123.07. These ceilings match the Ontario calculator on this site. Province changes the income tax, not the CPP or EI rate, for an employee outside Quebec.',
      'The first additional CPP contribution and any CPP2 are deducted in arriving at the income that federal and B.C. tax see. The 4.95-point base CPP contribution is not deducted. It is a non-refundable credit, at 14% federally and at 5.60% in B.C. EI is a credit on the same basis, not a deduction. Federal tax then uses the 2026 brackets already used on the Ontario page: 14% to $58,523, 20.5% to $117,045, 26% to $181,440, 29% to $258,482, and 33% above that. The federal basic personal amount is $16,452, phasing down toward $14,829 between $181,440 and $258,482 of net income. The Canada employment amount is the lesser of salary and $1,501. Credits are 14% of the basic personal amount, base CPP, EI, and the employment amount.',
      'British Columbia tax uses seven brackets. The first $50,363 is taxed at 5.60%, then 7.70% to $100,728, 10.50% to $115,648, 12.29% to $140,430, 14.70% to $190,405, 16.80% to $265,545, and 20.50% above that. The non-refundable credit is 5.60% of $13,216 plus base CPP plus EI. There is no B.C. employment amount in that credit. After the credit, the B.C. tax reduction can wipe out some or all of the remaining provincial tax. The reduction is $690 when net income is $25,570 or less. Above that threshold it falls by 3.56% of the excess, and it is $0 once net income reaches $44,952. It cannot exceed the B.C. tax left after credits, and it is not a refund.',
      'Annual take-home is salary minus CPP, CPP2, EI, federal tax, and B.C. tax. The headline divides that year by 12. A payroll system that annualizes each cheque, hits the CPP maximum in the autumn, and uses the 6.14% second-half withholding rate will not reprint this page on every stub. The page is the full-year employee cost under the assumptions below.'
    ],
    formula: 'Tax year 2026. Employee in British Columbia, outside Quebec.\nBase CPP = 4.95% × pensionable earnings from $3,500 to $74,600\nFirst additional CPP = 1.00% × the same earnings\nCPP2 = 4% × earnings from $74,600 to $85,000, maximum $416\nEI = 1.63% × earnings up to $68,900, maximum $1,123.07\nTaxable income = salary − first additional CPP − CPP2\nFederal tax = 2026 federal brackets on taxable income, minus 14% of (federal basic personal amount + base CPP + EI + Canada employment amount)\nB.C. tax before credits = 5.60% to $50,363, then 7.70%, 10.50%, 12.29%, 14.70%, 16.80%, and 20.50%\nB.C. credit = 5.60% × ($13,216 + base CPP + EI)\nB.C. tax reduction = $690 if net income ≤ $25,570, otherwise $690 − 3.56% × (net income − $25,570), not below $0 and not above B.C. tax after credits\nThe reduction reaches $0 at $44,952 of net income\nB.C. tax = B.C. tax after credits − reduction\nAnnual take-home = salary − CPP − CPP2 − EI − federal tax − B.C. tax\nMonthly = annual take-home / 12',
    formulaNotes: [
      'At $70,000 the CPP exemption leaves $66,500 of contributory earnings. Base CPP is $3,291.75 and the first additional contribution is $665.00, so employee CPP is $3,956.75. Earnings are under $74,600, so CPP2 is $0. EI is at the $1,123.07 maximum because $70,000 is over $68,900. Taxable income is $70,000 − $665.00 = $69,335. Federal income tax on that figure is $7,278.19, the same federal line the Ontario calculator shows at $70,000, because the federal brackets, the $16,452 basic personal amount, and the CPP deduction are national.',
      'B.C. tax on $69,335 before credits is $4,281.17: 5.60% of the first $50,363 and 7.70% of the remaining $18,972. The credit base is $13,216 + $3,291.75 + $1,123.07 = $17,630.82, and 5.60% of that credit base rounds to $987.33. B.C. tax after the credit is $3,293.84. Net income is far above $44,952, so the tax reduction is $0.00. Annual take-home is $54,348.15, or $4,529.01 a month.',
      'The 6.14% figure is deliberately absent. It is a withholding patch for July through December 2026 so that employers who used 5.06% from January still collect about a full year at 5.60%. Using 6.14% on the whole salary would overstate the tax owing on the return. Using 5.06% would understate it. This page uses 5.60% for the year.'
    ],
    examplesHeading: 'Worked 2026 British Columbia take-home examples',
    examples: [
      {
        title: '$70,000, above the tax reduction',
        paragraphs: [
          'Federal income tax is $7,278.19. British Columbia income tax is $3,293.84, and the tax-reduction line is $0.00. CPP including CPP2 is $3,956.75. EI is $1,123.07. The five amounts sum to $15,651.85, and $70,000 minus that sum is $54,348.15. The monthly headline is $4,529.01. Every two weeks displays as $2,090.31. The federal basic personal amount line reads $16,452.00 and the B.C. line reads $13,216.00.',
          'The same $70,000 on the Ontario calculator produces the same federal tax, the same CPP, and the same EI. Ontario income tax, including the health premium, is higher than this B.C. tax. The two provincial pages share the payroll deductions and then apply different Income Tax Acts. Do not subtract an Ontario figure from a B.C. salary, or the reverse.'
        ]
      },
      {
        title: '$30,000, where the B.C. tax reduction does most of the work',
        paragraphs: [
          'Contributory earnings are $26,500. Base CPP is $1,311.75 and the first additional contribution is $265.00, so CPP is $1,576.75. EI is 1.63% of $30,000, which is $489.00. Taxable income is $29,735. Federal income tax is $1,397.37.',
          'B.C. tax before the reduction is larger than the $282.49 that remains. The reduction itself is $541.73. Net income of $29,735 is $4,165 over the $25,570 threshold, and 3.56% of $4,165 is $148.27, so $690.00 − $148.27 = $541.73. That credit is smaller than the tax left after the basic personal credit, so all of it is used. Annual take-home is $26,254.39, or $2,187.87 a month. Someone comparing a July pay stub with this page should expect the stub’s provincial withholding to use the temporary 6.14% rate on the first bracket, not this annual 5.60% calculation.'
        ]
      },
      {
        title: '$45,000 at the edge of the reduction, and $120,000 with CPP maxed',
        paragraphs: [
          'At $45,000, CPP is $2,469.25 and EI is $733.50. Federal income tax is $3,338.19. B.C. income tax is $1,587.48, and only $13.07 of B.C. tax reduction is left. Taxable income is $44,585, which is $367 under the $44,952 point where the reduction disappears. Annual take-home is $36,871.58, or $3,072.63 a month. A salary a little higher than this loses the last of the reduction. It does not lose the $13,216 basic personal amount. That amount stays in the credit at much higher incomes.',
          'At $120,000, CPP including CPP2 is at the employee maximum of $4,646.45, and EI is at $1,123.07. Federal income tax is $17,502.14. B.C. income tax is $7,661.31, with a $0.00 reduction. Annual take-home is $89,067.03, or $7,422.25 a month. The federal basic personal amount is still $16,452.00 because net income has not reached the $181,440 phase-out.'
        ]
      }
    ],
    table: {
      heading: '2026 British Columbia take-home at selected salaries',
      caption: 'Each row is what this calculator displays for that annual salary. Federal tax uses the 2026 brackets and a claim built from the basic personal amount, base CPP, EI, and the Canada employment amount. B.C. tax uses the 5.60% first bracket and the $690 tax reduction. CPP and EI are the employee amounts outside Quebec. RRSP contributions are not deducted.',
      headers: ['Salary', 'Federal tax', 'B.C. tax', 'Tax reduction', 'CPP and CPP2', 'EI', 'Annual take-home'],
      rows: [
        ['$30,000', '$1,397.37', '$282.49', '$541.73', '$1,576.75', '$489.00', '$26,254.39'],
        ['$45,000', '$3,338.19', '$1,587.48', '$13.07', '$2,469.25', '$733.50', '$36,871.58'],
        ['$70,000', '$7,278.19', '$3,293.84', '$0.00', '$3,956.75', '$1,123.07', '$54,348.15'],
        ['$90,000', '$11,251.60', '$4,785.52', '$0.00', '$4,646.45', '$1,123.07', '$68,193.36'],
        ['$120,000', '$17,502.14', '$7,661.31', '$0.00', '$4,646.45', '$1,123.07', '$89,067.03'],
        ['$200,000', '$38,876.54', '$19,079.61', '$0.00', '$4,646.45', '$1,123.07', '$136,274.33']
      ]
    },
    limitsHeading: 'What this British Columbia estimate leaves out',
    limits: [
      'The result is an annual tax calculation for one salary, divided by 12. It is not the CRA’s T4127 payroll formula and it does not apply the 6.14% first-bracket withholding rate used from July 2026. A bonus, a commission, a mid-year CPP maximum, or a claim code other than the basic personal amount will move a paycheque. The B.C. credit here is the basic personal amount plus base CPP plus EI. The spouse or common-law partner amount, the age amount, tuition, and the caregiver amount are not claimed.',
      'RRSP, RPP, and union or professional dues are not separate fields. Those amounts can reduce taxable income. Typing a salary that you have already reduced by an RRSP contribution, while the form also deducts the enhanced CPP, will understate income if you are not careful. The clean use is to type employment income before those deductions and treat the result as pay before the RRSP comes out.',
      'Employer CPP, employer EI, and the B.C. employer health tax are employer costs. They are not subtracted. British Columbia does not charge an Ontario-style health premium on this page, and Medical Services Plan premiums are not added back as a payroll line. Self-employed people pay both halves of CPP and do not pay EI on self-employment earnings in the same way. Do not use this employee form for that case. Quebec residents and people who report to work in another province need that province’s brackets. Alberta, Ontario, and the territories are different Acts, even when the federal lines match.'
    ],
    disclaimer: 'This is a 2026 planning estimate for a British Columbia employee, not a pay stub, a TD1BC, or tax advice. The Canada Revenue Agency and your employer assess the deductions.',
    faqs: [
      {
        q: 'What is the lowest British Columbia income tax rate for the 2026 tax year?',
        a: '5.60% on taxable income up to $50,363. The next bracket is 7.70% to $100,728. This calculator uses 5.60% for the whole year. The 6.14% rate is a July-to-December withholding patch for employers who had been using 5.06%, not the rate on the annual return.'
      },
      {
        q: 'Why might a 2026 B.C. pay stub withhold more than this annual estimate?',
        a: 'From the first payroll in July 2026, CRA’s B.C. payroll tables use a prorated 6.14% rate on income under $50,363 so the year still lands near 5.60% after a first half withheld at 5.06%. A single cheque in that period can look heavier than one-twenty-sixth of this page. The page estimates the year’s tax, then divides by 12.'
      },
      {
        q: 'How does the B.C. tax reduction work below $44,952 of net income?',
        a: 'The base reduction is $690 when net income is $25,570 or less. It falls by 3.56% of income above $25,570 and reaches zero at $44,952. At a $30,000 salary the calculator applies $541.73 of reduction and leaves $282.49 of B.C. tax. At $45,000 only $13.07 of reduction remains. At $70,000 the reduction is $0.00. It cannot create a refund.'
      },
      {
        q: 'Are CPP and EI the same on the British Columbia and Ontario calculators?',
        a: 'Yes for an employee outside Quebec in 2026. At $70,000 both pages show $3,956.75 of CPP, including the first additional contribution and no CPP2, and $1,123.07 of EI. Federal income tax is also $7,278.19 on both pages. The provincial tax is different: B.C. shows $3,293.84 and does not add an Ontario Health Premium.'
      },
      {
        q: 'Does this B.C. calculator include employer health tax or MSP?',
        a: 'No. Employer health tax is paid by the employer. This page also does not add a Medical Services Plan premium to the employee. The only provincial amount subtracted is B.C. income tax after the basic credit and the tax reduction. At $70,000 that amount is $3,293.84.'
      },
      {
        q: 'Is the B.C. basic personal amount $13,216 in 2026?',
        a: 'Yes. The credit is 5.60% of $13,216 plus the base CPP contribution plus EI. The $13,216 amount is indexed and is what the Province of British Columbia lists for 2026. It is not the federal basic personal amount. The federal amount on the $70,000 row is $16,452.00, shown on its own line.'
      }
    ],
    relatedLinks: [
      { slug: 'ontario-take-home-pay-calculator', label: 'Ontario take-home pay calculator for 2026', note: 'The same federal brackets, CPP, and EI, with Ontario tax and the Ontario Health Premium.' },
      { slug: 'uk-take-home-pay-calculator', label: 'UK take-home pay for England, Wales and Northern Ireland', note: 'Pounds and National Insurance for 2026/27, not Canadian dollars.' },
      { slug: 'australia-take-home-pay-calculator', label: 'Australia take-home pay calculator for 2026–27', note: 'Resident income tax and the Medicare levy, in Australian dollars.' }
    ]
  },
  'england-stamp-duty-calculator': {
    title: 'England Stamp Duty Calculator 2026 (SDLT) | ClearCalc',
    h1: 'England Stamp Duty Calculator for 2026 Purchases',
    description: 'Estimate residential Stamp Duty Land Tax on an England or Northern Ireland purchase using the post-April 2025 rates still in force in 2026, including first-time buyers and additional homes.',
    intro: [
      'This England stamp duty calculator estimates Stamp Duty Land Tax on a residential freehold purchase in England or Northern Ireland. The price is sliced across bands. You do not pay one rate on the whole price. The rates are the residential rates that have applied since 1 April 2025 and that GOV.UK was still publishing for purchases in 2026: 0% to £125,000, then 2% to £250,000, 5% to £925,000, 10% to £1.5 million, and 12% above that.',
      'Choose whether the purchase replaces your main home, whether every buyer is a first-time buyer, or whether the higher rates for an additional dwelling apply. A separate choice adds the 2 percentage point non-UK resident surcharge on every band. The sample price is £450,000 for someone replacing a main home and treated as a UK resident. Scotland charges Land and Buildings Transaction Tax instead, and Wales charges Land Transaction Tax. Neither of those systems is calculated here.'
    ],
    steps: [
      'Enter the chargeable consideration in pounds. The sample, 450000, means a £450,000 purchase price. Do not enter the deposit alone.',
      'Choose the buyer. “Replacing your main home” uses the standard residential bands. “First-time buyer” uses the relief only when the price is £500,000 or less. “Additional property” uses the higher rates when the price is £40,000 or more.',
      'Choose UK resident or non-UK resident. Non-UK resident adds 2 percentage points to whichever bands the buyer type selected.',
      'Press Calculate. The headline is the SDLT in pounds. The lines under it name the rate table, the effective rate, and the price.'
    ],
    howHeading: 'How residential SDLT is sliced in 2026',
    howItWorks: [
      'Standard residential SDLT, for a purchase that leaves you with one home, is £0 on the first £125,000, 2% on the next £125,000, 5% on the next £675,000 (the slice from £250,001 to £925,000), 10% on the next £575,000 (up to £1.5 million), and 12% on anything above £1.5 million. A £295,000 purchase, the example GOV.UK uses for these thresholds, is £0 plus £2,500 plus £2,250, which is £4,750. The calculator returns that figure.',
      'First-time buyer relief replaces those bands only when the price is £500,000 or less and every purchaser qualifies. The first £300,000 is taxed at 0% and the slice from £300,001 to £500,000 is taxed at 5%. On a price of £500,000 the tax is £10,000. One pound above £500,000 loses the relief on the entire price, not just on the excess. The calculator then switches to the standard bands and says so. At £500,001 that standard calculation is £15,000.05.',
      'The higher rates for an additional dwelling are 5 percentage points above the standard rates, for a price of £40,000 or more: 5%, 7%, 10%, 15%, and 17%. GOV.UK’s example of an additional home bought for £300,000 is £6,250 plus £8,750 plus £5,000, which is £20,000. Below £40,000 the higher rates are not applied. A non-UK resident, generally someone not present in the UK for at least 183 days in the 12 months before the purchase, pays 2 percentage points more on every band that applies, including first-time buyer bands and the higher rates. The employer, the lender, and the solicitor decide residence. This page only adds the 2 points when you select that status.',
      'The duty is calculated in pence and rounded to the nearest penny once, after every band has been added. The effective rate is that duty divided by the price. It is always lower than the top band you touched, because the earlier slices were cheaper. On the £450,000 standard example the top slice is taxed at 5%, and the effective rate is 2.78%.'
    ],
    formula: 'Residential freehold in England or Northern Ireland. Rates in force from 1 April 2025 and unchanged on the GOV.UK residential tables used here for 2026.\nStandard, replacing a main home:\n  0% to £125,000\n  2% on £125,001 to £250,000\n  5% on £250,001 to £925,000\n  10% on £925,001 to £1,500,000\n  12% above £1,500,000\nFirst-time buyers, price £500,000 or less:\n  0% to £300,000\n  5% on £300,001 to £500,000\nAbove £500,000, first-time buyer relief is refused and the standard table is used on the whole price.\nAdditional dwelling, price £40,000 or more: standard rates + 5 points (5%, 7%, 10%, 15%, 17%).\nUnder £40,000, the additional-dwelling table is not used.\nNon-UK resident: add 2 percentage points to every band in the table that was selected.\nSDLT = sum of (slice × rate), rounded to the nearest penny\nEffective rate = SDLT / price',
    formulaNotes: [
      'A £450,000 standard purchase is £0 on the first £125,000, 2% of £125,000 which is £2,500, and 5% of the remaining £200,000 which is £10,000. The total is £12,500. The same price as a first-time buyer is £0 on £300,000 and 5% of £150,000, which is £7,500. The same price as an additional dwelling is 5% of £125,000 (£6,250), 7% of £125,000 (£8,750), and 10% of £200,000 (£20,000), which is £35,000.',
      'Adding the non-UK resident surcharge is the same as adding 2% of the whole price when every pound falls in a band, which it does. On £450,000 the surcharge is £9,000. Standard duty rises from £12,500 to £21,500. First-time buyer duty rises from £7,500 to £16,500. Additional-dwelling duty rises from £35,000 to £44,000. The calculator still builds that result by lifting each band, then rounding once.',
      'The £500,000 first-time buyer cliff is not a rounding quirk. Relief is an all-or-nothing test on the chargeable consideration. £500,000 is £10,000 of SDLT. £500,001 is £15,000.05 on the standard table. Negotiating a price across that line changes the tax by about £5,000, which is more than the extra pound of price.'
    ],
    examplesHeading: 'Worked England stamp duty examples',
    examples: [
      {
        title: '£450,000, three buyer types, UK resident',
        paragraphs: [
          'Replacing a main home: the calculator shows £12,500.00, an effective rate of 2.78%, and the standard-rate sentence. The arithmetic is £2,500 on the slice between £125,000 and £250,000 plus £10,000 on the £200,000 above £250,000.',
          'First-time buyer: the calculator shows £7,500.00, an effective rate of 1.67%. The relief sentence says the price is within £500,000. Additional property: the calculator shows £35,000.00, an effective rate of 7.78%. The higher-rate sentence says the 5-point loading was applied. The house has not changed. The ownership facts have. This form cannot know whether you still own another dwelling worth £40,000 or more anywhere in the world. You have to choose the row that matches the transaction.'
        ]
      },
      {
        title: 'The £295,000 GOV.UK example, and the £500,000 first-time buyer cliff',
        paragraphs: [
          'A standard purchase at £295,000 shows £4,750.00, an effective rate of 1.61%. That is £0 on £125,000, £2,500 on the next £125,000, and £2,250 on the last £45,000. It matches the sliced example on the GOV.UK residential rates page for these thresholds. A first-time buyer at the same price would pay less, because £295,000 is under the £300,000 nil-rate band for the relief. Run that buyer type separately. The standard button will not invent the relief.',
          'A first-time buyer at exactly £500,000 shows £10,000.00, which is 5% of the £200,000 above £300,000. At £500,001 the relief sentence changes: relief does not apply, and standard rates produce £15,000.05. The extra penny of price costs £5,000.05 of tax because the nil-rate treatment of the first £300,000 is withdrawn, not tapered.'
        ]
      },
      {
        title: 'A £300,000 additional home, and a non-resident £450,000 purchase',
        paragraphs: [
          'An additional dwelling at £300,000 shows £20,000.00 and an effective rate of 6.67%. That is the GOV.UK higher-rate example: £6,250 at 5%, £8,750 at 7%, and £5,000 at 10%. A purchase under £40,000 does not use that table. At £39,999 the additional-property choice shows £0.00 and explains that the higher rates were not applied. At £40,000 the same choice shows £2,000.00, which is 5% of £40,000.',
          'A non-UK resident replacing a main home at £450,000 shows £21,500.00, an effective rate of 4.78%. That is the £12,500 standard result plus £9,000, and £9,000 is 2% of £450,000. The same non-resident first-time buyer shows £16,500.00. The same non-resident additional-property buyer shows £44,000.00. Residence is a statutory test with its own refund rules if you later spend enough days in the UK. Selecting the surcharge here does not file that test.'
        ]
      }
    ],
    table: {
      heading: 'SDLT at selected England residential prices',
      caption: 'UK resident purchases. Standard means the rates for replacing a main home. First-time buyer relief is refused above £500,000, so those cells equal the standard column. Additional means the higher rates. Each amount is what this calculator displays. Non-UK residents pay 2 percentage points more on each band.',
      headers: ['Price', 'Standard SDLT', 'First-time buyer', 'Additional dwelling'],
      rows: [
        ['£250,000', '£2,500.00', '£0.00', '£15,000.00'],
        ['£350,000', '£7,500.00', '£2,500.00', '£25,000.00'],
        ['£450,000', '£12,500.00', '£7,500.00', '£35,000.00'],
        ['£600,000', '£20,000.00', '£20,000.00 (no relief)', '£50,000.00'],
        ['£925,000', '£36,250.00', '£36,250.00 (no relief)', '£82,500.00'],
        ['£1,500,000', '£93,750.00', '£93,750.00 (no relief)', '£168,750.00']
      ]
    },
    limitsHeading: 'What this stamp duty estimate leaves out',
    limits: [
      'The form covers one residential freehold price. It does not calculate rent on a new lease, the net present value of rent, non-residential or mixed-use rates, multiple dwellings relief, or the 17% flat rate that can apply when a company buys a dwelling over £500,000. Linked transactions, exchanges, and contingent consideration need the chargeable consideration rules, not a single typed price. Fixtures that are chattels can fall outside the price. This page taxes whatever number you type.',
      'First-time buyer relief has conditions beyond the £500,000 cap. Every buyer must be a first-time buyer, and the property must be intended as their only or main residence. Married couples and civil partners can fail the test because of the other person’s ownership history. The higher rates also have reliefs, including the replacement of a main residence and a refund if the old home is sold within 36 months. If you still own the old home on completion day, the higher rates are due first and the refund is a later claim. This calculator will not claim it for you.',
      'Scotland and Wales are outside the result even when the town sounds English. A purchase in Edinburgh is Land and Buildings Transaction Tax, calculated on the Scotland LBTT page, not by retyping the price here. At £250,000 a main home is £2,500 of SDLT on this page and £2,100 of LBTT on that one. At £450,000 the same comparison reverses: this page shows £12,500 and the Scotland page shows £18,350, because Scotland’s 10% band starts at £325,000 rather than £925,000. A purchase in Cardiff is Land Transaction Tax, which neither page calculates. The mortgage payment on the amount you borrow is also a different sum, and it is not increased by this tax automatically. SDLT is usually paid within 14 days of completion. It is not a monthly line inside the loan payment unless a lender has rolled a fee into the balance, which this page does not assume.',
      'Shared ownership, staircasing, and the reliefs for certain social-housing and right-to-buy transactions are not modeled. Non-resident status has its own day-count and its own refund. Adding 2 points because a buyer lives abroad for work can be wrong if the statutory presence test is met. When the price, the buyer type, or residence is uncertain, the figure is a planning range, not the SDLT return.'
    ],
    disclaimer: 'This SDLT figure is general information for a straightforward residential freehold in England or Northern Ireland, not an SDLT return and not legal or tax advice. HMRC and your conveyancer assess the tax due.',
    faqs: [
      {
        q: 'Which Stamp Duty Land Tax rates does this England calculator use for 2026?',
        a: 'The residential rates that have applied since 1 April 2025: 0% to £125,000, 2% on the next £125,000, 5% up to £925,000, 10% up to £1.5 million, and 12% above that. A £295,000 standard purchase shows £4,750.00. The higher rates for additional dwellings are those bands plus 5 percentage points. The page does not use the temporary thresholds that ended on 31 March 2025.'
      },
      {
        q: 'What does a first-time buyer pay on a £450,000 home in England?',
        a: '£7,500.00 on this calculator if every buyer qualifies and the price is the chargeable consideration. The first £300,000 is at 0% and the remaining £150,000 is at 5%. The same price on the standard table, for someone replacing a main home, is £12,500.00. Relief is refused if the price is over £500,000.'
      },
      {
        q: 'When do the additional-dwelling higher rates apply?',
        a: 'When the purchase is £40,000 or more and buying it means you own more than one residential property worth £40,000 or more, subject to the replacement-of-main-residence rules. At £300,000 the higher-rate result is £20,000.00. At £450,000 it is £35,000.00. Under £40,000 the calculator refuses the higher-rate table and shows the standard result instead.'
      },
      {
        q: 'Does this stamp duty calculator work in Scotland or Wales?',
        a: 'No. It calculates Stamp Duty Land Tax for England and Northern Ireland only. Scotland uses Land and Buildings Transaction Tax, which has its own calculator on this site. A £250,000 main home is £2,500.00 here and £2,100.00 there. A £450,000 main home is £12,500.00 here and £18,350.00 there. Wales uses Land Transaction Tax, which is not calculated on either page.'
      },
      {
        q: 'How does the non-UK resident surcharge change a £450,000 purchase?',
        a: 'It adds 2 percentage points on every band, which is £9,000 on a £450,000 price. The standard result moves from £12,500.00 to £21,500.00. The first-time buyer result moves from £7,500.00 to £16,500.00. The additional-dwelling result moves from £35,000.00 to £44,000.00. The surcharge has its own statutory test and a possible refund. Selecting it here does not decide residence.'
      },
      {
        q: 'Is England stamp duty included in the monthly mortgage payment?',
        a: 'No. SDLT is a tax on the purchase, usually due shortly after completion. The mortgage calculator on this site estimates principal and interest on the amount borrowed in US dollars, and it does not add this sterling tax. If a lender increases the loan to cover a cost, that is a new loan amount, not an automatic line on this page.'
      }
    ],
    relatedLinks: [
      { slug: 'scotland-lbtt-calculator', label: 'Scotland LBTT calculator for 2026', note: 'Residential Land and Buildings Transaction Tax, including up to £600 of first-time buyer relief and the 8% additional dwelling supplement. A £250,000 main home is £2,100 there and £2,500 here.' },
      { slug: 'mortgage-calculator', label: 'Fixed-rate mortgage payment calculator', note: 'Principal and interest in US dollars. It does not add SDLT or convert pounds.' },
      { slug: 'nsw-stamp-duty-calculator', label: 'NSW stamp duty calculator for 2026/27', note: 'Transfer duty in Australian dollars, including the first home buyer concession. Not SDLT.' },
      { slug: 'uk-take-home-pay-calculator', label: '2026/27 take-home pay for England, Wales and Northern Ireland', note: 'Income tax and employee National Insurance on a salary, not the tax on a house.' },
      { slug: 'rent-affordability-calculator', label: 'Rent affordability calculator', note: 'Compares monthly rent with 30% of gross income. It is not a purchase tax.' }
    ]
  },
  'final-exam-grade-calculator': {
    title: 'Final Exam Grade Calculator: Score You Need | ClearCalc',
    h1: 'What Grade Do I Need on My Final Exam?',
    description: 'Calculate the percentage you need on a weighted final exam to reach a target course grade. Shows the result if you score 0% or 100% as well.',
    intro: [
      'This final exam grade calculator answers a narrower question than a GPA average. You already have a percentage in the rest of the course. The final is worth a stated share of the course grade. You want the whole course to land on a target. The form solves for the final-exam score that makes that true. The sample is a current grade of 86%, a final worth 30% of the course, and a target of 90%.',
      'The current grade must already be the average of everything except the final, weighted the way the syllabus weights that work. If homework is 20%, quizzes are 20%, and the midterm is 30%, do not type the homework average alone and call the final 30%. Combine the completed categories first, and type their combined weight as 100 minus the final’s weight. The calculator will not rebuild a gradebook with five columns. It will solve the one-final equation exactly.'
    ],
    steps: [
      'Enter the current grade as a percent. The sample, 86, means 86% on the work that is already scored. A grade above 100 is allowed if extra credit lifted the average.',
      'Enter the final exam’s weight as a percent of the whole course. The sample, 30, means the final is 30% and the current grade covers the other 70%. Use a number above 0 and at most 100.',
      'Enter the target course grade as a percent. The sample, 90, means you want the course to finish at 90%.',
      'Press Calculate. If the required score is between 0 and 100, the headline is that percentage. If it is below 0, the target is already secured. If it is above 100, the headline says the target is above a perfect final.'
    ],
    howHeading: 'How the required final-exam score is solved',
    howItWorks: [
      'Let C be the current percentage, W the final’s weight as a percent of the course, and T the target course percentage. Work already completed is worth (100 − W) percent of the course, so it contributes C × (100 − W) / 100 points toward the course grade. The final contributes F × W / 100 points, where F is the percentage you score on the final. The course grade is the sum of those two contributions.',
      'Set the course grade equal to T and solve for F. F = (T − C × (100 − W) / 100) / (W / 100). That is the same as (T × 100 − C × (100 − W)) / W. Nothing in the formula rounds until the result is displayed. The headline and the detail lines use two decimal places.',
      'Two boundaries matter more than the raw algebra. If F is negative, you could score 0% on the final and still finish above the target. The headline then reads “Target already secured,” and the detail line still shows the negative score so you can see how much cushion you have. If F is above 100, even a perfect final leaves the course short of the target. The headline reads “Above a perfect final,” and another line states the course grade a 100% final would actually produce.',
      'The same equation run forwards checks the result. Course grade = C × (100 − W) / 100 + F × W / 100. For the sample, a final of 99.33% should land on 90%. A final of 0% lands on the “if the final is 0” line, and a final of 100% lands on the “if the final is 100” line. Those two lines are the floor and the ceiling of the course given the current grade. No score on the final can finish outside them, unless the syllabus offers extra credit on the exam itself, which this form does not add.'
    ],
    formula: 'C = current grade percent, already excluding the final\nW = final exam weight, as a percent of the course, 0 < W ≤ 100\nT = target course grade percent\nPoints already earned = C × (100 − W) / 100\nScore needed on the final, F = (T − points already earned) ÷ (W / 100)\nCourse grade if the final is 0 = points already earned\nCourse grade if the final is 100 = points already earned + W\nIf F < 0, the target is already secured even with a zero on the final\nIf F > 100, the target is above a perfect score on this final',
    formulaNotes: [
      'For C = 86, W = 30, and T = 90, points already earned are 86 × 0.70 = 60.2. The final must supply 90 − 60.2 = 29.8 course points. Because the final is only 30% of the course, the score that supplies 29.8 points is 29.8 / 0.30 = 99.333…%, displayed as 99.33%. A zero on the final leaves the course at 60.20%. A perfect final leaves it at 90.20%. The target of 90 sits just inside that ceiling, which is why the required score is high but still possible.',
      'The current percentage and the weight are different kinds of percent. 86% is a score. 30% is a share of the course. Multiplying them without converting the weight is the usual mistake: 86 × 30 is not a course grade. The formula always turns the weight into a fraction of the course before it multiplies.',
      'Display rounding can make a required score of 99.33% look as if it misses 90.00 by a hundredth. 99.33 × 0.30 = 29.799, and 60.2 + 29.799 = 89.999, which rounds back to 90.00 at two decimal places. The unrounded required score hits 90 exactly. The headline is the rounded score, not a second equation.'
    ],
    examplesHeading: 'Worked final-exam examples',
    examples: [
      {
        title: '86% now, final worth 30%, target 90%',
        paragraphs: [
          'The calculator shows 99.33% on the final. The detail lines are a required score of 99.33%, a course grade of 60.20% if the final is 0, and a course grade of 90.20% if the final is 100. The note says work already completed is 70.00% of the course and the final is the other 30.00%.',
          'Check it forwards. 86% of the 70-point block is 60.2 course points. A 99.33% final contributes about 29.80 points. The sum is 90.00 course points at the displayed rounding. The room between the target and a perfect final is only 0.20 course points, so the required score sits close to 100. That is the situation the headline is for: still possible, with almost no waste on the exam.'
        ]
      },
      {
        title: 'A reachable 70, and a target no final can save',
        paragraphs: [
          'Current grade 78, final worth 40, target 70. Points already earned are 78 × 0.60 = 46.8. The final must supply 70 − 46.8 = 23.2 course points, and 23.2 / 0.40 = 58. The calculator shows 58.00% on the final. A zero leaves the course at 46.80%. A perfect final leaves it at 86.80%. The target is comfortably inside the range, which is why the required score is an ordinary pass mark rather than a near-perfect one.',
          'Current grade 70, final worth 50, target 90. Points already earned are 35. A perfect final adds 50 and finishes the course at 85. The calculator’s headline is “Above a perfect final.” The required score line reads 110.00%, and the ceiling line says a 100% final finishes at 85.00%, which is 5.00 points short of the target. No amount of careful arithmetic on this form changes that. The missing points were in the half of the course that is already closed, or the target has to move.'
        ]
      },
      {
        title: 'A target that is already safe, and a 20% final',
        paragraphs: [
          'Current grade 96, final worth 10, target 80. Points already earned are 96 × 0.90 = 86.4, which is already above 80. The headline is “Target already secured.” The required score displays as −64.00%, a course grade of 0 on the final still finishes at 86.40%, and that result is 6.40 points over the target. The negative score is not a suggestion to aim for a negative paper. It is the cushion, expressed in exam points. A perfect final would finish the course at 96.40%, not at 96, because the final still has weight.',
          'Current grade 92, final worth 20, target 90. Points already earned are 92 × 0.80 = 73.6. The exam must supply 16.4 course points. Divided by 0.20, that is 82. The calculator shows 82.00% on the final. The floor is 73.60% and the ceiling is 93.60%. A final worth only a fifth of the course cannot move the grade as far as a final worth a half, which is why 82 on this exam reaches 90, while the 50% final in the previous example could not reach 90 from a 70.'
        ]
      }
    ],
    table: {
      heading: 'Final-exam score required for a 90% course grade',
      caption: 'Each cell is the “score needed on the final” line from this calculator when the target course grade is 90%. A figure above 100% is the same case as the headline “Above a perfect final.” A figure of 100.00% means a perfect final lands on 90%.',
      headers: ['Current grade', 'Final is 20%', 'Final is 30%', 'Final is 40%', 'Final is 50%'],
      rows: [
        ['70%', '170.00%', '136.67%', '120.00%', '110.00%'],
        ['80%', '130.00%', '113.33%', '105.00%', '100.00%'],
        ['86%', '106.00%', '99.33%', '96.00%', '94.00%'],
        ['92%', '82.00%', '85.33%', '87.00%', '88.00%'],
        ['96%', '66.00%', '76.00%', '81.00%', '84.00%'],
        ['98%', '58.00%', '71.33%', '78.00%', '82.00%']
      ]
    },
    limitsHeading: 'What a single weighted final cannot see',
    limits: [
      'The current grade has to be the average of the other categories already combined with their own weights. If the syllabus has homework, labs, a midterm, and a final, averaging those categories without weights and then typing the result here will not match the instructor’s spreadsheet. Build the pre-final average first. Pass/fail items, dropped lowest quizzes, and late penalties belong in that average, not in a second run of this form.',
      'Some courses require a minimum score on the final itself, such as 50%, even when the weighted course grade would pass. This page does not know that rule. A headline of 40% means 40% keeps the course average on target. It does not mean the syllabus will accept 40%. Letter-grade cutoffs also differ. A target of 90 is only an A if 90 is the cutoff your instructor published. The form does not convert 90 into a letter or into grade points.',
      'Extra credit on the final can push the exam score above 100, and a few syllabi cap the course grade at 100 no matter what. This calculator neither caps the course nor adds extra credit. If it says the target needs 110%, an extra-credit opportunity on the exam might close that gap, but only if the syllabus actually offers one. A curve applied after the raw percentages are in is also outside the equation. So is a GPA. Four course grades on a 4.0 scale are a different page. This one never sees credit hours.'
    ],
    disclaimer: 'This is the weighted-average score a final must reach for the target you typed. It is not your instructor’s gradebook, a curve, or a transcript.',
    faqs: [
      {
        q: 'How do I calculate the grade I need on my final exam?',
        a: 'Multiply the current grade by the share of the course that is already complete. Subtract that from the target course grade. Divide by the final’s weight. For a current grade of 86%, a final worth 30%, and a target of 90%, the completed work contributes 60.2 points and the final must be 99.33%.'
      },
      {
        q: 'What if the score I need on the final is over 100%?',
        a: 'The target is above what this final can add. With a current grade of 70% and a final worth 50%, a target of 90% needs 110.00% on the final. The calculator says “Above a perfect final” and shows that a 100% final finishes the course at 85.00%, which is 5.00 points short. The closed part of the course is what makes the target unreachable.'
      },
      {
        q: 'What if my current grade already secures the target before the final?',
        a: 'The headline reads “Target already secured.” A current grade of 96% with a final worth 10% and a target of 80% still finishes at 86.40% even if the final is 0. The required-score line shows −64.00%, which is cushion, not a score to aim for. The final still changes the course grade if you score above zero. A perfect final in that example finishes at 96.40%.'
      },
      {
        q: 'Does the final exam weight have to be a percent of the whole course?',
        a: 'Yes. Enter 30 if the syllabus says the final is 30% of the course, not 30 points out of an unknown total and not the number of questions. The current grade then covers the other 70%. If several categories are still open, this one-exam formula does not apply until you collapse the open work into a single weight.'
      },
      {
        q: 'Can I type a current average above 100% because of extra credit?',
        a: 'Yes. The current grade is not capped. Extra credit that is already inside the pre-final average can be typed as a number above 100, and the equation still holds. Extra credit that exists only on the final is not added for you. The ceiling line assumes the best raw final is 100%.'
      },
      {
        q: 'Will this match a gradebook that still has homework and a midterm open?',
        a: 'Only if the percentage you type is already the weighted average of every category except the final, and the weight you type is the final’s share of the course. An unweighted mean of homework and midterm scores will not match a syllabus that weights them differently. The unweighted GPA calculator on this site is a different question. It averages four grade-point numbers and does not solve for an exam.'
      }
    ],
    relatedLinks: [
      { slug: 'gpa-calculator', label: 'Unweighted 4.0 GPA calculator', note: 'Averages four course grades after they exist. It does not solve for a final.' },
      { slug: 'percentage-calculator', label: 'Percentage calculator', note: 'A raw score such as 45 out of 60 is 75% on that page. Type a percent into this final-exam form only after the rest of the course is combined.' }
    ]
  },
  'concrete-slab-calculator': {
    title: 'Concrete Slab Calculator: Bags and Cubic Yards | ClearCalc',
    h1: 'Concrete Calculator for a Rectangular Slab',
    description: 'Find cubic yards and the number of 80 lb, 60 lb, or 40 lb bags for a rectangular concrete slab, including a waste allowance and a ready-mix quantity.',
    intro: [
      'This concrete slab calculator turns a rectangle into a volume and then into bags. Enter the length and width in feet, the thickness in inches, the bag size, and a waste allowance. The sample is a 10 foot by 10 foot slab, 4 inches thick, using 80 lb bags and 10% extra for spillage and an uneven subgrade. The headline is the number of whole bags to buy after that waste is included.',
      'The bag yields are the published yields for standard concrete mix, not a particular store’s price. An 80 lb bag is counted as 0.60 cubic feet, a 60 lb bag as 0.45 cubic feet, and a 40 lb bag as 0.30 cubic feet. Those three yields are in proportion to the bag weight, and 27 cubic feet make one cubic yard, so an 80 lb bag is 1/45 of a cubic yard. The page also rounds the waste-adjusted volume up to the next quarter yard for a ready-mix order. A driveway with curves, a footing, or a slab that changes thickness needs a different volume before you use the bag step.'
    ],
    steps: [
      'Enter the length and the width in feet. The sample is 10 by 10. Measure the slab you will actually pour, not the property line.',
      'Enter the thickness in inches. A typical patio slab in this kind of estimate is 4 inches. Type 4, not 0.33 feet. The form converts inches to feet.',
      'Choose 80 lb, 60 lb, or 40 lb. The yield used is 0.60, 0.45, or 0.30 cubic feet. Then enter a waste allowance from 0 to 100 percent. The sample is 10.',
      'Press Calculate. Read the bag count, the cubic feet and cubic yards, the bag count before waste, and the ready-mix quantity rounded up to the next 0.25 yard.'
    ],
    howHeading: 'How slab volume becomes a bag count',
    howItWorks: [
      'Volume in cubic feet is length times width times thickness, and the thickness has to be in feet. Four inches is 4/12 of a foot, so a 10 by 10 slab at 4 inches is 10 × 10 × 4 / 12 = 100/3 cubic feet, about 33.33 cubic feet on the display. Divide by 27 to get cubic yards. 100/3 / 27 is about 1.235 cubic yards. That is the geometric volume of a perfect rectangular prism. Real ground is not perfect, and a little concrete stays in the mixer and the wheelbarrow.',
      'The waste allowance multiplies that volume. Ten percent turns 100/3 cubic feet into 110/3 cubic feet, about 36.67 cubic feet, or about 1.358 cubic yards. Bags are that volume divided by the yield of one bag. For an 80 lb bag the yield is 0.60 cubic feet, so 110/3 / 0.60 = 61.11 bags. You cannot buy 0.11 of a bag. The headline rounds up to the next whole bag unless the division is exact. The sample therefore reads 62 bags (80 lb). The line “bags before rounding up” keeps the 61.11 so you can see that the extra bag is the remainder, not a second waste factor.',
      'Ready-mix suppliers often take orders in quarter-yard steps. The calculator takes the waste-adjusted yardage and rounds up to the next 0.25 cubic yard. The sample’s 1.358 yards becomes 1.5 cubic yards on that line. If you order ready-mix, you do not also buy the 62 bags. The two counts are alternative ways to obtain the same volume. Adding them would double the pour.',
      'A zero waste allowance is allowed. On the same 10 by 10 by 4 inch slab it shows 56 bags of the 80 lb mix, because 100/3 / 0.60 = 55.56, which rounds up to 56, and the ready-mix line rounds 1.235 yards up to 1.25. Use zero only when you have a reason to believe the form will be filled exactly. Most slab estimates keep some waste because a thin spot in the gravel, or a form that bowed, is discovered after the truck has left.',
      'The same rectangle is not a mulch order. Mulch is sold by the cubic yard or by a 2 or 3 cubic foot bag, and the usual shortcut is length times width times depth in inches, divided by 324. That divisor is 12 times 27: inches become feet, then cubic feet become yards. A 10 foot by 20 foot bed at 3 inches is 600/324 cubic yards, which is 1.852 cubic yards and exactly 50 cubic feet, or 25 bags if each bag is 2 cubic feet. This concrete page would be the wrong tool for that bed. An 80 lb bag is 0.60 cubic feet of concrete, not 2 cubic feet of mulch, and 45 of those bags fill a yard. Thirteen and a half of the 2 cubic foot mulch bags fill a yard. Mixing those yields buys the wrong material.'
    ],
    formula: 'Thickness in feet = thickness in inches / 12\nCubic feet = length (ft) × width (ft) × thickness (ft)\nCubic yards = cubic feet / 27\nVolume with waste = cubic feet × (1 + waste percent / 100)\nBag yield: 80 lb = 0.60 cu ft, 60 lb = 0.45 cu ft, 40 lb = 0.30 cu ft\nExact bags = volume with waste / bag yield\nBags to buy = exact bags, rounded up to the next whole bag\nReady-mix order = volume with waste, in cubic yards, rounded up to the next 0.25 yard\n80 lb bags per cubic yard with no waste = 27 / 0.60 = 45',
    formulaNotes: [
      'The 10 × 10 × 4 inch sample is exactly 100/3 cubic feet. The screen shows 33.33 cubic feet and 1.235 cubic yards because those lines are rounded for display. The bag math uses the full fraction. With 10% waste the exact bag count is 61.111…, the screen shows 61.11 bags before rounding, and the headline is 62. With no waste the exact count is 55.555…, shown as 55.56, and the headline is 56 bags.',
      'Switching bag size does not change the cubic yards. It changes only the bag lines. The same 10 by 10 by 4 inch slab with 10% waste needs 82 bags of the 60 lb mix, because 36.67 / 0.45 is about 81.48, which rounds up to 82. A 40 lb bag on a 20 by 10 by 4 inch slab with 10% waste is a different volume: 200/3 cubic feet before waste, about 73.33 cubic feet after, and 245 bags. The ready-mix line for that larger slab is 2.75 cubic yards.',
      'An exact hit is left alone. A 12 foot by 24 foot slab at 6 inches is 144 cubic feet, which is 5.333 cubic yards. Five percent waste makes 151.2 cubic feet and 5.6 cubic yards. Divided by 0.60, that is exactly 252 bags, so the headline is 252 rather than 253. The ready-mix quarter-yard round-up of 5.6 is 5.75 cubic yards. The bag count and the truck order answer different purchasing questions.',
      'Dividing by 324 is only a yardage shortcut, and only when the depth is typed in inches. It does not know a bag yield. 10 times 10 times 4, divided by 324, is about 1.235, the same yardage this page shows for the sample slab before waste. The bag count still has to divide cubic feet by 0.60, 0.45, or 0.30. The mulch calculator divides by 2 or 3 instead, and it rounds a bulk order up to the next half yard rather than the next quarter yard, because that is how bulk mulch is commonly sold. Keep the two round-ups on their own pages.'
    ],
    examplesHeading: 'Worked concrete slab examples',
    examples: [
      {
        title: '10 by 10 feet, 4 inches thick, 80 lb bags, 10% waste',
        paragraphs: [
          'The calculator shows 62 bags (80 lb). Slab volume is 33.33 cubic feet, or 1.235 cubic yards. With 10% waste the volume is 36.67 cubic feet, or 1.358 cubic yards. Bags before rounding up are 61.11. Bags with no waste allowance, rounded up, are 56. The ready-mix order is 1.5 cubic yards. The yield line says each 80 lb bag counts as 0.6 cubic feet, which is the 0.60 cubic foot yield displayed without a trailing zero.',
          'Buying 62 bags and also ordering 1.5 yards would pour the slab twice. Pick one. The bag figure is for mixing on site. The yard figure is for a truck. The 6-bag gap between 56 and 62 is the 10% waste plus the effect of rounding two different remainders. It is not a second thickness.'
        ]
      },
      {
        title: 'The same slab with no waste, and the same slab in 60 lb bags',
        paragraphs: [
          'Set the waste allowance to 0 and keep 80 lb bags. The headline is 56 bags (80 lb). Volume stays 33.33 cubic feet and 1.235 cubic yards, and the waste line repeats that volume because 0% changes nothing. Bags before rounding up are 55.56. The ready-mix line is 1.25 cubic yards, which is the next quarter yard above 1.235. If your supplier will sell 1.25 and you have no waste, that is the order. If the supplier’s minimum is a full yard above the calculated volume, the minimum wins. This page does not know the supplier’s minimum.',
          'Return the waste to 10 and choose the 60 lb bag. The headline is 82 bags (60 lb). Cubic yards do not change: still 1.235 before waste and 1.358 after, and the ready-mix line is still 1.5 cubic yards. The bag yield line now reads 0.45 cubic feet. A 60 lb bag holds three-quarters of the concrete an 80 lb bag holds, and 62 / 0.75 is about 82.7 before you account for the fact that each count was rounded up separately. Trust the 82 the form shows for the 60 lb choice, not a rescaled 62.'
        ]
      },
      {
        title: 'A small pad that comes out even, and a larger 6 inch slab',
        paragraphs: [
          'A 3 foot by 3 foot pad, 4 inches thick, with 80 lb bags and no waste, is 3 cubic feet. Divided by 0.60 that is exactly 5 bags. The headline is 5 bags (80 lb), bags before rounding up are 5, and the no-waste bag line is also 5. Volume is 3 cubic feet, or 0.111 cubic yards. Ready-mix rounded up to the next quarter yard is 0.25 cubic yards. Ordering a truck for a quarter yard is often unrealistic. The useful answer on a pad this small is the 5 bags. The yard line is there so the arithmetic stays visible, not as a suggestion to schedule a ready-mix delivery.',
          'A 12 foot by 24 foot slab at 6 inches, 80 lb bags, and 5% waste, is 144 cubic feet before waste and 151.2 cubic feet after. The headline is 252 bags (80 lb), an exact division, so nothing extra was added for rounding. Ready-mix is 5.75 cubic yards. At a 45-bag-per-yard yield, 5.6 yards times 45 is 252, which is the check. A garage slab of this size is where bags stop being practical for many people. The calculator still counts them, because the yield math does not change at the point where your back does.'
        ]
      }
    ],
    table: {
      heading: 'Bag counts for common rectangular slabs',
      caption: 'Each cell is the whole-bag headline from this calculator for an 80 lb bag at 0.60 cubic feet, with the waste allowance in that column. Thickness is 4 inches unless the row says otherwise. The last column is the ready-mix quantity at 10% waste, rounded up to the next 0.25 cubic yard. It is an alternative to the bags, not an addition.',
      headers: ['Slab', '80 lb bags, 0% waste', '80 lb bags, 10% waste', 'Ready-mix at 10% waste'],
      rows: [
        ['3 ft × 3 ft × 4 in', '5', '6', '0.25 cu yd'],
        ['10 ft × 10 ft × 4 in', '56', '62', '1.5 cu yd'],
        ['12 ft × 12 ft × 4 in', '80', '88', '2 cu yd'],
        ['20 ft × 10 ft × 4 in', '112', '123', '2.75 cu yd'],
        ['12 ft × 24 ft × 4 in', '160', '176', '4 cu yd'],
        ['12 ft × 24 ft × 6 in', '240', '264', '6 cu yd']
      ]
    },
    limitsHeading: 'What a rectangular bag count leaves out',
    limits: [
      'The yields 0.60, 0.45, and 0.30 cubic feet are the usual published yields for US concrete mix in those bag weights. A bag of sand mix, mortar, fast-setting post mix, or a high-strength blend can yield less. Read the yield printed on the bag you are buying and do not assume this table overrides it. If the bag says 0.60 cubic feet, the 80 lb choice matches. If it says something else, scale the volume yourself. This form will not accept a custom yield.',
      'The shape is a rectangle of one thickness. A footing under a thickened edge, a slope for drainage, a circular patio, steps, and sonotube piers are different volumes. Air entrainment, fiber, and color do not change the geometry, but the water you add does change the finished strength. The calculator does not give a water quantity or a strength. It also does not subtract the volume of rebar, which is small next to a 10% waste allowance and is one reason the waste factor exists.',
      'UK and Australian bags are sold by the kilogram, often 20 kg, and the yield is printed in litres or cubic metres. Do not treat an 80 lb bag as a 20 kg bag. Forty kilograms is about 88 lb, so the weights are not interchangeable, and the cubic-foot yield is a US customary figure. You can still use the cubic-yard line as a volume check: 1 cubic yard is 0.764555 cubic metres. Convert the displayed yards if a local supplier sells by the metre, then apply that supplier’s bag yield. The bag headline itself is for the 40, 60, and 80 lb yields above.',
      'Waste of 10% is a planning allowance, not a code requirement. A careful pour on a flat, well-formed base may come in under it. A pour on soft soil may exceed it. The ready-mix quarter-yard step is a common ordering practice, not a rule that every plant uses. Confirm the plant’s minimum load and its rounding before you treat 1.5 cubic yards as an order. Neither count includes delivery, gravel, forms, or the labor.'
    ],
    disclaimer: 'This is a volume estimate for a rectangular slab using standard bag yields. It is not a structural design, a mix design, or a quote from a ready-mix plant. Thickness and reinforcement for a driveway or a footing need a specification that fits the soil and the load.',
    faqs: [
      {
        q: 'How many 80 lb bags of concrete do I need for a 10 by 10 slab at 4 inches?',
        a: 'With no waste, this calculator shows 56 bags, because the slab is 33.33 cubic feet and an 80 lb bag yields 0.60 cubic feet. With the sample 10% waste allowance it shows 62 bags. The volume with waste is 36.67 cubic feet, or 61.11 bags before rounding up to a whole bag.'
      },
      {
        q: 'Why does the concrete calculator round the bag count up?',
        a: 'A supplier sells whole bags. On the 10 by 10 by 4 inch slab with 10% waste, the exact count is 61.11 bags of the 80 lb mix, and 61 bags would leave the pour short of the waste-adjusted volume. The headline is 62. When the division is exact, as with 252 bags for the 12 by 24 foot, 6 inch slab at 5% waste, no extra bag is added.'
      },
      {
        q: 'What yield does the calculator use for an 80 lb, 60 lb, or 40 lb bag?',
        a: '0.60 cubic feet for 80 lb, 0.45 cubic feet for 60 lb, and 0.30 cubic feet for 40 lb. Those are standard concrete-mix yields, and 27 / 0.60 is 45 bags of the 80 lb size per cubic yard before waste. A bag with a different yield printed on it will not match. Sand mix and mortar are not these yields.'
      },
      {
        q: 'Should I order ready-mix yards and the bags?',
        a: 'No. They are two ways to buy the same waste-adjusted volume. The 10 by 10 by 4 inch slab at 10% waste is 62 bags or 1.5 cubic yards of ready-mix, not both. The yard line rounds up to the next quarter yard. A plant with a larger minimum load will not honor a quarter-yard order just because this page printed one.'
      },
      {
        q: 'Does the 10% waste allowance change the cubic yards?',
        a: 'Yes. Waste multiplies the geometric volume before either the bag count or the ready-mix rounding. The 10 by 10 by 4 inch slab is 1.235 cubic yards with no waste and 1.358 cubic yards with 10% waste. The ready-mix line then rounds 1.358 up to 1.5 cubic yards. Set waste to 0 if you want the bare geometry, and expect a real pour to run past it if the base is low.'
      },
      {
        q: 'Can I use these 80 lb bag counts for a metric pour in the UK or Australia?',
        a: 'Use them only as a volume check. One cubic yard is about 0.765 cubic metres. Local bags are commonly 20 kg and publish their own litre yield, which is not 0.60 cubic feet. The headline bag count is for 40, 60, and 80 lb US bags. Convert the cubic-yard line, then divide by the yield on the bag you can actually buy.'
      }
    ],
    relatedLinks: [
      { slug: 'mulch-calculator', label: 'Mulch calculator for a rectangular bed', note: 'Cubic yards and 2 or 3 cubic foot bags. A 10 by 20 foot bed at 3 inches is 25 bags, not these 80 lb concrete bags.' },
      { slug: 'mortgage-calculator', label: 'Fixed-rate mortgage payment calculator', note: 'The loan payment on a house, not the concrete under a patio.' },
      { slug: 'rent-affordability-calculator', label: 'Rent affordability calculator', note: 'Compares rent with 30% of gross income. It does not estimate a pour.' },
      { slug: 'length-converter', label: 'Length converter from meters', note: 'If the slab was measured in meters, convert to feet before you type the length and width here. Thickness stays in inches on this form.' },
      { slug: 'room-paint-calculator', label: 'Room paint calculator', note: 'Gallons for a rectangular room. It uses square feet per gallon, not these bag yields.' }
    ]
  }
};
