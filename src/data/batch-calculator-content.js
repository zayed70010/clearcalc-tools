export const batchCalculatorContent = {
  'georgia-paycheck-calculator': {
    title: 'Georgia Paycheck Calculator 2026 (4.99% after $15,000) | ClearCalc',
    h1: 'Georgia Paycheck Calculator for 2026',
    description: 'Estimate a 2026 Georgia paycheck after federal income tax and the 4.99% state tax, using the $15,000 single or $30,000 joint standard deduction and a $5,000 dependent deduction.',
    intro: [
      'This Georgia paycheck calculator estimates what is left from 2026 wages after federal income tax, Georgia income tax, Social Security, and Medicare. House Bill 463 cut the flat rate from 5.19% to 4.99% for taxable years beginning on or after 1 January 2026. The Governor signed it on 11 May 2026, and the Department of Revenue’s 2026 employer’s tax guide tells employers they could start withholding at 4.99% on that date. A stub from January through early May can still show 5.19% even though the return for the year uses 4.99%. This page uses the annual 4.99% rate, not the pre-May withholding rate.',
      'The same act raised the standard deduction to $15,000 for a single filer, a head of household, and a married person filing separately, and to $30,000 for married filing jointly. The dependent deduction is $5,000 for each dependent. Georgia no longer has a personal exemption for the taxpayer. The standard deduction does that work. The sample is $65,000, single, paid every two weeks, with no dependents and no 401(k). Federal tax uses the tax year 2026 brackets and standard deduction in IRS Revenue Procedure 2025-32. Social Security is 6.2% up to $184,500, and Medicare is 1.45% of all wages. Georgia has no city income tax on these wages.'
    ],
    steps: [
      'Enter annual gross wages in dollars. The sample, 65000, means $65,000 for the year, not one paycheck.',
      'Choose Single or Married filing jointly, then a pay frequency. Joint uses the $30,000 Georgia standard deduction and the $32,200 federal standard deduction. It does not change the 4.99% rate. Every two weeks means 26 paychecks.',
      'Enter a traditional 401(k) deferral for the year, or leave 0. Then enter Georgia dependent allowances. The sample is 0. Each allowance is $5,000. A person with two children who are dependents types 2.',
      'Press Calculate. The headline is one paycheck. Federal tax, Georgia tax, Social Security, Medicare, and the annual take-home are listed underneath. A deferral above $24,500 is cut back to the 2026 elective limit.'
    ],
    howHeading: 'How a 2026 Georgia paycheck is estimated',
    howItWorks: [
      'Federal taxable wages are gross wages minus the traditional 401(k) actually applied, then minus the federal standard deduction. On $65,000 with no deferral, a single filer has $48,900 of federal taxable income and $5,620.00 of federal income tax. Social Security is $4,030.00. Medicare is $942.50. Additional Medicare Tax is $0.00. Those three federal lines match the Michigan and Texas paychecks at the same wages, because FICA does not depend on the state.',
      'Georgia starts from the same wages minus the traditional 401(k). It then subtracts the standard deduction and $5,000 for each dependent. On the sample the deduction is $15,000, the dependent allowance is $0, and Georgia taxable income is $50,000. Tax at 4.99% is $2,495.00. Annual take-home is $51,912.50, and the headline is $1,996.63 every two weeks. Twenty-six times that headline is $51,912.38, twelve cents under the annual line, because each paycheck is rounded on its own. Michigan at the same wages, one exemption, and no city tax charges $2,511.75 and has annual take-home of $51,895.75. Georgia’s higher rate produces a bill that is $16.75 lower, because $15,000 comes off before 4.99% and only $5,900 comes off before Michigan’s 4.25%. North Carolina at the same wage, with no qualifying child, charges $2,084.78 after a $12,750 deduction and has annual take-home of $52,322.72. Texas, with state income tax at $0, has annual take-home of $54,407.50. The entire $2,495.00 gap from Texas is the Georgia tax.',
      'A traditional 401(k) reduces both the federal line and the Georgia line. A $6,500 deferral on the $65,000 single sample cuts federal income tax from $5,620.00 to $4,840.00. Georgia taxable income falls from $50,000 to $43,500, and Georgia tax falls from $2,495.00 to $2,170.65. The $324.35 saving is 4.99% of $6,500. Social Security stays $4,030.00 because the deferral is still Social Security wages on this page, and Medicare stays $942.50. Annual take-home is $46,516.85, or $1,789.11 every two weeks. A deferral typed above $24,500 is cut back to $24,500. On these wages that capped deferral leaves Georgia taxable income of $25,500, Georgia tax of $1,272.45, and annual take-home of $31,575.05.',
      'Two dependent allowances on the $65,000 single sample subtract $10,000 after the $15,000 standard deduction. Georgia taxable income is $40,000 and Georgia tax is $1,996.00, which is $499.00 less than the no-dependent result. That $499.00 is 4.99% of $10,000. Federal tax does not change, because this form does not apply a federal child tax credit. Annual take-home is $52,411.50, or $2,015.83 every two weeks. The allowance cannot reduce Georgia taxable income below zero. A $20,000 single wage with one dependent uses the whole $15,000 deduction and $5,000 of the dependent allowance, Georgia tax is $0.00, and annual take-home is $18,080.00 after federal tax of $390.00 and FICA. A wage of exactly $15,000 with no dependents is also $0.00 of Georgia tax. Federal income tax is $0.00 because the wage equals the point where the $16,100 federal standard deduction still covers it only if the wage is at or under $16,100. At $15,000, Social Security is $930.00 and Medicare is $217.50, so the monthly headline is $1,154.38.'
    ],
    formula: 'Tax year 2026. One wage earner. HB 463 rate of 4.99%, retroactive to 1 January 2026.\nGeorgia income = max(0, wages − traditional 401(k))\nStandard deduction = $15,000 single, or $30,000 married filing jointly, not above that income\nDependent allowance = $5,000 × dependents, not above the income left after the standard deduction\nGeorgia taxable income = max(0, Georgia income − standard deduction − dependent allowance)\nGeorgia tax = 4.99% × Georgia taxable income\nFederal tax, Social Security, and Medicare use the 2026 federal paycheck rules on this site\nAnnual take-home = wages − federal income tax − Social Security − Medicare − Additional Medicare Tax − Georgia tax − 401(k)\nPaycheck = annual take-home ÷ number of paychecks',
    formulaNotes: [
      'Married filing jointly on the same $65,000, still with no dependents, has federal income tax of $3,440.00 and Georgia tax of $1,746.50. The Georgia base is $35,000 because the joint standard deduction is $30,000. Annual take-home is $54,841.00, or $2,109.27 every two weeks. The Department of Revenue’s percentage-method note says a married couple who both have income should use the $15,000 column, not $30,000 each. This form applies the whole $30,000 to the one salary you type. If a spouse also has wages, run each wage with Single, or add the wages yourself and keep one $30,000 deduction for the return. Typing joint twice would deduct $60,000.',
      'The guide’s own semi-monthly example is a different paycheck from this annual method. A married person paid $2,000 twice a month, spouse not working, one child, has $1,250 of standard deduction and $208.33 of dependent allowance removed from that cheque, then 4.99% of the $541.67 left, which the guide prints as $27.03. This page annualizes first. It will not reproduce a year-to-date stub that withheld 5.19% before 11 May and 4.99% after. Overtime and tipped wages can exclude up to $1,750 of each from Georgia taxable net income under the same act. There is no field for that exclusion. Georgia did not adopt the broader federal overtime and tip exclusions.'
    ],
    examplesHeading: 'Worked 2026 Georgia paycheck examples',
    examples: [
      {
        title: '$65,000, single, no dependents',
        paragraphs: [
          'Federal income tax is $5,620.00, Social Security is $4,030.00, and Medicare is $942.50. The standard deduction is $15,000.00. Georgia taxable income is $50,000.00. Georgia income tax is $2,495.00. Annual take-home is $51,912.50. The headline is $1,996.63 / two weeks. Dividing the same annual figure by 12 gives $4,326.04 a month. Michigan’s monthly figure on the same wage, one exemption, and no city tax is $4,324.65. The two state taxes differ by $16.75 for the year.',
          'Add two dependents and Georgia tax falls to $1,996.00. The federal line stays $5,620.00. Annual take-home rises to $52,411.50, or $2,015.83 / two weeks. The dependent deduction is not a credit against tax already computed. It reduces the base, and it stops at zero. A Roth contribution should not be typed in the deferral field. The form would treat it as pre-tax and understate both the federal tax and the Georgia tax.'
        ]
      },
      {
        title: 'The same wage filed jointly, and a capped 401(k)',
        paragraphs: [
          'Keep $65,000 and no dependents, and switch to married filing jointly. Georgia tax is $1,746.50 on a $35,000 base. Federal income tax is $3,440.00. Annual take-home is $54,841.00, or $2,109.27 / two weeks. The $2,928.50 gap from the single result is federal tax of $2,180.00 plus Georgia tax of $748.50. That Georgia piece is 4.99% of the extra $15,000 of standard deduction. A spouse’s own wages are not in the form.',
          'Back on the single row, type a $30,000 deferral. The form cuts it to $24,500. Georgia tax is $1,272.45, federal income tax is $2,680.00, and annual take-home is $31,575.05, or $1,214.43 / two weeks. The detail line says the deferral was reduced. Social Security and Medicare are still computed on the $65,000 of wages.'
        ]
      },
      {
        title: '$90,000, $210,000, and the deduction at the wage',
        paragraphs: [
          'At $90,000, single, and no dependents, Georgia taxable income is $75,000 and Georgia tax is $3,742.50. Federal income tax is $10,970.00, Social Security is $5,580.00, and Medicare is $1,305.00. Annual take-home is $68,402.50, or $2,630.87 / two weeks. The 4.99% rate does not step up at a higher wage. There is one rate after the deduction and the dependent allowances.',
          'At $210,000, single, and no dependents, Social Security stops at $11,439.00 because wages are over the $184,500 base. Additional Medicare Tax is $90.00. Medicare is $3,045.00. Georgia tax is $9,730.50, which is 4.99% of $195,000. Federal income tax is $39,134.00. Annual take-home is $146,561.50, or $5,636.98 / two weeks. Michigan at this wage, one exemption, and no city tax has annual take-home of $147,617.75. The $1,056.25 gap is Georgia tax of $9,730.50 minus Michigan tax of $8,674.25. At the other end, $15,000 of wages and no dependents produce $0.00 of Georgia tax and a monthly headline of $1,154.38 after FICA only.'
        ]
      }
    ],
    table: {
      heading: '2026 Georgia tax at selected wages, single, no dependents',
      caption: 'The standard deduction is $15,000 except where the wage is lower. Federal tax and FICA are included in the take-home column. No city tax is computed. Amounts are what this calculator displays.',
      headers: ['Wages', 'Georgia taxable income', 'Georgia tax', 'Annual take-home', 'Every two weeks'],
      rows: [
        ['$15,000', '$0.00', '$0.00', '$13,852.50', '$532.79'],
        ['$65,000', '$50,000.00', '$2,495.00', '$51,912.50', '$1,996.63'],
        ['$65,000 and two dependents', '$40,000.00', '$1,996.00', '$52,411.50', '$2,015.83'],
        ['$65,000 and a $6,500 401(k)', '$43,500.00', '$2,170.65', '$46,516.85', '$1,789.11'],
        ['$90,000', '$75,000.00', '$3,742.50', '$68,402.50', '$2,630.87'],
        ['$210,000', '$195,000.00', '$9,730.50', '$146,561.50', '$5,636.98']
      ]
    },
    limitsHeading: 'What this Georgia paycheck estimate leaves out',
    limits: [
      'The up-to-$1,750 exclusions for overtime and for tips are not fields on the form. A worker who qualifies subtracts those amounts on the return, and this page will overstate Georgia tax by up to 4.99% of the excluded dollars. Itemized deductions are not offered. The standard deduction is used in every row. A filer whose itemized deductions exceed $15,000, or $30,000 on a joint return, can owe less than the figure here. The retirement exclusion for Georgia residents over a qualifying age is also omitted.',
      'A traditional 401(k) reduces federal tax and Georgia tax. A Roth amount typed into the deferral field is treated as pre-tax, which is the wrong direction. Catch-up contributions above the $24,500 elective limit are cut back. Health insurance premiums that are excluded from federal wages are not a field here. If those premiums were already left out of the wage you type, do not subtract them again. Social Security and Medicare are computed on gross wages before the deferral.',
      'Employers who withheld 5.19% before 11 May 2026 and 4.99% after will not match one-twenty-sixth of this annual tax on every stub. The percentage-method tables also remove the standard deduction and the dependent allowance from each pay period, which can differ by cents from an annual tax divided by 26. There is no Georgia city wage tax to add. A local occupational tax or a business license fee is not income tax withholding and is not subtracted. The Michigan page can add Detroit. This page cannot, because that ordinance is not a Georgia tax.',
      'The calculator does not file a Georgia Form 500, and it does not decide residency. A part-year resident reports only the Georgia portion of the wage. Use the annual figure as a planning total, then compare it with the stub and with the Department of Revenue’s withholding tables if the question is what the employer should have withheld in a particular month.'
    ],
    disclaimer: 'This Georgia paycheck figure is general information for a wage earner, not a Form 500 or tax advice. The Department of Revenue assesses the tax due.',
    faqs: [
      {
        q: 'What Georgia income tax rate does this 2026 paycheck calculator use?',
        a: '4.99% of Georgia income after the standard deduction and $5,000 for each dependent. On $65,000, single, with no dependents and no 401(k), Georgia tax is $2,495.00 and the two-week headline is $1,996.63. House Bill 463 set that rate for the 2026 taxable year. The 5.19% rate is the withholding rate employers used before 11 May 2026, not the rate on the annual return.'
      },
      {
        q: 'Does Georgia still have a personal exemption for the taxpayer in 2026?',
        a: 'No. The standard deduction replaced it. A single filer subtracts $15,000. A joint return with this salary as the only wage subtracts $30,000. Dependents are a separate $5,000 deduction each, not a personal exemption for the filer. Two dependents on the $65,000 single sample cut Georgia tax from $2,495.00 to $1,996.00.'
      },
      {
        q: 'Why is Georgia tax $16.75 below Michigan tax on the same $65,000?',
        a: 'The federal and FICA lines match. Michigan tax with one exemption and no city tax is $2,511.75. Georgia tax with no dependents is $2,495.00. Annual take-home is $51,895.75 in Michigan and $51,912.50 here. Georgia’s rate is higher, 4.99% against 4.25%, and the base is smaller because $15,000 comes off instead of $5,900. North Carolina on the same wage is $2,084.78 of state tax and $52,322.72 of annual take-home.'
      },
      {
        q: 'Does a traditional 401(k) reduce Georgia’s 4.99% tax?',
        a: 'Yes on this page. A $6,500 deferral on a $65,000 single wage cuts Georgia tax from $2,495.00 to $2,170.65 and cuts federal income tax from $5,620.00 to $4,840.00. Social Security stays $4,030.00. Do not type a Roth amount into the deferral field. A deferral above $24,500 is cut back to the 2026 elective limit, which leaves Georgia tax of $1,272.45 on this wage.'
      },
      {
        q: 'What if both spouses work and the return is married filing jointly?',
        a: 'The $30,000 standard deduction belongs to the return once. This form applies it to the single salary you type, which is right only when that salary is the only wage. The Department of Revenue tells two-earner couples to use the $15,000 withholding column rather than $30,000 each. On one $65,000 wage filed jointly, Georgia tax is $1,746.50 and the two-week headline is $2,109.27. Adding a second wage requires a second pass, or one combined wage with the deduction left at $30,000.'
      }
    ],
    relatedLinks: [
      { slug: 'north-carolina-paycheck-calculator', label: 'North Carolina paycheck calculator for 2026', note: 'A 3.99% tax after a $12,750 standard deduction. At $65,000 single the North Carolina tax is $2,084.78 and the two-week headline is $2,012.41.' },
      { slug: 'michigan-paycheck-calculator', label: 'Michigan paycheck calculator for 2026', note: 'A 4.25% tax after a $5,900 exemption. At $65,000 single with one exemption and no city tax, Michigan tax is $2,511.75.' },
      { slug: 'texas-paycheck-calculator', label: 'Texas paycheck calculator for 2026', note: 'The same federal and FICA lines at $65,000, with state income tax at $0 and annual take-home of $54,407.50.' },
      { slug: '401k-contribution-calculator', label: '2026 401(k) contribution calculator', note: 'Check a deferral against the $24,500 limit before you type the dollar amount here. The deferral reduces Georgia tax and federal income tax.' }
    ]
  },
  'north-carolina-paycheck-calculator': {
    title: 'North Carolina Paycheck Calculator 2026 (3.99%) | ClearCalc',
    h1: 'North Carolina Paycheck Calculator for 2026',
    description: 'Estimate a 2026 North Carolina paycheck after federal income tax and the 3.99% state tax, using the $12,750 standard deduction and the qualifying-child deduction.',
    intro: [
      'This North Carolina paycheck calculator estimates what is left from 2026 wages after federal income tax, North Carolina income tax, Social Security, and Medicare. Session Law 2023-134 set the individual rate at 4.25% for taxable years beginning in 2025 and at 3.99% for taxable years beginning after 2025. The Department of Revenue’s 2026 withholding tables use 3.99%. Later years can fall further if revenue triggers are met. This page does not guess a 2027 rate. The standard deduction in G.S. 105-153.5 is $12,750 for single and married filing separately, $25,500 for married filing jointly or a surviving spouse, and $19,125 for head of household. The form offers single and joint. Head of household is not a third status. A head of household who uses $12,750 here will overstate North Carolina tax by 3.99% of the $6,375 difference.',
      'North Carolina taxable income starts from federal adjusted gross income. A traditional 401(k) that reduces federal AGI reduces the state base as well. There is no North Carolina personal exemption on top of the standard deduction. There is a child deduction, in G.S. 105-153.5(a1), for each qualifying child for whom the federal child tax credit is allowed. The amount per child depends on filing status and on federal AGI. The sample is $65,000, single, paid every two weeks, with no qualifying children and no 401(k). Federal tax uses the 2026 brackets and the $16,100 single standard deduction. North Carolina does not add a city wage tax the way Pennsylvania, Ohio, or Detroit can.'
    ],
    steps: [
      'Enter annual gross wages in dollars. The sample, 65000, means $65,000 for the year.',
      'Choose Single or Married filing jointly, then a pay frequency. Joint uses the $25,500 North Carolina standard deduction and the wider federal brackets. It also uses the joint rows of the child-deduction table. The 3.99% rate itself does not change.',
      'Enter a traditional 401(k) deferral for the year, or leave 0. Then enter qualifying children. The sample is 0. A child counts only if the federal child tax credit is allowed for that child. The deduction per child is looked up from federal AGI after the 401(k).',
      'Press Calculate. The headline is one paycheck. The child-deduction line says how much was subtracted, including $0.00 when the AGI is above the last band.'
    ],
    howHeading: 'How a 2026 North Carolina paycheck is estimated',
    howItWorks: [
      'Federal taxable wages are gross wages minus the traditional 401(k), then minus the federal standard deduction. On $65,000 with no deferral, a single filer has $5,620.00 of federal income tax, $4,030.00 of Social Security, and $942.50 of Medicare. Those lines match Georgia and Michigan. North Carolina then subtracts its own standard deduction from federal AGI, which on this page is the wage minus the deferral. The single deduction is $12,750, so North Carolina taxable income is $52,250. Tax at 3.99% is $2,084.78. Annual take-home is $52,322.72, and the headline is $2,012.41 every two weeks. Georgia on the same wage, with no dependents, charges $2,495.00 and pays $51,912.50 for the year. The $410.22 gap is the state tax: $2,495.00 minus $2,084.78. Michigan charges $2,511.75 and pays $51,895.75. Texas, with no state income tax, pays $54,407.50. The $2,084.78 gap from Texas is this North Carolina tax.',
      'The child deduction is a subtraction from AGI, not a credit against the 3.99% after it has been computed. For a single filer the statute’s steps are $3,000 per child up to $20,000 of AGI, $2,500 up to $30,000, $2,000 up to $40,000, $1,500 up to $50,000, $1,000 up to $60,000, $500 up to $70,000, and $0 above $70,000. At $65,000 a single filer is in the $500 band. One qualifying child cuts North Carolina taxable income from $52,250 to $51,750 and cuts the tax from $2,084.78 to $2,064.83. The $19.95 difference is 3.99% of $500. Annual take-home rises from $52,322.72 to $52,342.67, and the headline is $2,013.18 every two weeks. At $80,000 the same one child is worth $0, because AGI is over $70,000. North Carolina tax is $2,683.28 on $67,250, and annual take-home is $62,426.72. At $40,000 the single band is $2,000. One child leaves taxable income of $25,250, tax of $1,007.48, and annual take-home of $33,312.52.',
      'Married filing jointly uses a wider table: $3,000 per child up to $40,000 of AGI, $2,500 up to $60,000, $2,000 up to $80,000, $1,500 up to $100,000, $1,000 up to $120,000, $500 up to $140,000, and $0 above $140,000. On $65,000 with no children, the joint standard deduction is $25,500, North Carolina tax is $1,576.05, federal income tax is $3,440.00, and annual take-home is $55,011.45, or $2,115.83 every two weeks. Two qualifying children at that AGI are $2,000 each, so $4,000 comes off. Tax falls to $1,416.45, which is $159.60 less, and 3.99% of $4,000 is $159.60. Annual take-home is $55,171.05, or $2,121.96 every two weeks. The joint deduction is for the return. A spouse’s wages are not included. Two earners who each run this form on joint will each subtract $25,500.',
      'A traditional 401(k) reduces federal AGI, so it reduces both federal income tax and the North Carolina base, and it can move the child-deduction band. A $6,500 deferral on the $65,000 single sample with no children cuts federal income tax from $5,620.00 to $4,840.00. North Carolina taxable income falls from $52,250 to $45,750, and North Carolina tax falls from $2,084.78 to $1,825.43. The $259.35 saving is 3.99% of $6,500. Social Security stays $4,030.00. Annual take-home is $46,862.07, or $1,802.39 every two weeks. A deferral above $24,500 is cut back to $24,500 before any of those lines are computed.'
    ],
    formula: 'Tax year 2026. One wage earner. Rate 3.99% under Session Law 2023-134.\nFederal AGI = max(0, wages − traditional 401(k))\nChild deduction = the G.S. 105-153.5(a1) amount for that AGI and filing status × qualifying children\nStandard deduction = $12,750 single, or $25,500 married filing jointly, not above the AGI left after the child deduction\nNorth Carolina taxable income = max(0, federal AGI − standard deduction − child deduction)\nNorth Carolina tax = 3.99% × North Carolina taxable income\nFederal tax, Social Security, and Medicare use the 2026 federal paycheck rules on this site\nAnnual take-home = wages − federal income tax − Social Security − Medicare − Additional Medicare Tax − North Carolina tax − 401(k)\nPaycheck = annual take-home ÷ number of paychecks',
    formulaNotes: [
      'The child-deduction bands are applied to the dollar of AGI, inclusive of the top of each “up to” step. A single filer at exactly $70,000 still gets $500 per qualifying child. One dollar over $70,000 gets $0. A joint filer at exactly $80,000 gets $2,000 per child, and one dollar over gets $1,500. The form uses the wage after the 401(k) as AGI. Other income, an IRA deduction, or student-loan interest would move the band, and none of those is a field.',
      'At $210,000, single, and no children, North Carolina taxable income is $197,250 and North Carolina tax is $7,870.28. Social Security stops at $11,439.00. Additional Medicare Tax is $90.00. Medicare is $3,045.00. Federal income tax is $39,134.00. Annual take-home is $148,421.72, or $5,708.53 every two weeks. Georgia at this wage charges $9,730.50 and has annual take-home of $146,561.50. The rate stays 3.99% above the standard deduction. There is no second North Carolina bracket. A child at this AGI adds nothing, because a single filer is above $70,000 and a joint filer would be above $140,000 as well.'
    ],
    examplesHeading: 'Worked 2026 North Carolina paycheck examples',
    examples: [
      {
        title: '$65,000, single, no qualifying children',
        paragraphs: [
          'Federal income tax is $5,620.00, Social Security is $4,030.00, and Medicare is $942.50. The standard deduction is $12,750.00. North Carolina taxable income is $52,250.00. North Carolina income tax is $2,084.78. The child deduction is $0.00. Annual take-home is $52,322.72. The headline is $2,012.41 / two weeks. Georgia’s headline on the same wage and no dependents is $1,996.63. Michigan’s headline with one exemption and no city tax is $1,995.99. The federal and FICA lines are the reason those three headlines sit close together while the state lines do not.',
          'One qualifying child at this wage uses the $500 single band. Tax falls to $2,064.83 and annual take-home rises to $52,342.67, or $2,013.18 / two weeks. The detail line names the $500.00 amount. A child who does not qualify for the federal child tax credit should be left at zero. The form cannot see age, residency, or the other child’s support tests.'
        ]
      },
      {
        title: 'Joint filing, two children, and a 401(k)',
        paragraphs: [
          'Keep $65,000 and switch to married filing jointly with no children. North Carolina tax is $1,576.05 on $39,500. Federal income tax is $3,440.00. Annual take-home is $55,011.45, or $2,115.83 / two weeks. Add two qualifying children. The joint band at $65,000 is $2,000 each, so $4,000 comes off and tax is $1,416.45. Annual take-home is $55,171.05, or $2,121.96 / two weeks. That $4,000 is not a Georgia-style flat $5,000 dependent allowance. Georgia’s two-dependent result on a single $65,000 wage is a different statute and a different $1,996.00 of state tax.',
          'A $6,500 traditional deferral on the single, no-child sample cuts North Carolina tax to $1,825.43 and federal income tax to $4,840.00. Annual take-home is $46,862.07, or $1,802.39 / two weeks. The same deferral on the Georgia page leaves Georgia tax of $2,170.65 and annual take-home of $46,516.85. FICA does not fall on either page. A Roth amount typed here would be treated as pre-tax.'
        ]
      },
      {
        title: '$40,000 with one child, $80,000 with one child, and $52,000',
        paragraphs: [
          'At $40,000, single, and one qualifying child, the band is $2,000. North Carolina taxable income is $25,250. Tax is $1,007.48. Federal income tax is $2,620.00, Social Security is $2,480.00, and Medicare is $580.00. Annual take-home is $33,312.52, or $1,281.25 / two weeks. The standard deduction and the child deduction are both subtracted. Neither one is a credit that could produce a refund on this form.',
          'At $80,000, single, and one child, the child line is $0.00 because AGI is over $70,000. Tax is $2,683.28 on $67,250. Federal income tax is $8,770.00, Social Security is $4,960.00, and Medicare is $1,160.00. Annual take-home is $62,426.72, or $2,401.03 / two weeks. At $52,000, single, and no children, taxable income is $39,250, tax is $1,566.08, and the two-week headline is $1,630.61. That wage is a useful check against a no-tax state: Florida at $52,000 has no state line at all, and this page’s $1,566.08 is the entire difference in the annual tax.'
        ]
      }
    ],
    table: {
      heading: '2026 North Carolina tax at selected wages',
      caption: 'Single rows use the $12,750 standard deduction. The joint row uses $25,500. The child deduction follows G.S. 105-153.5(a1). Federal tax and FICA are included in the take-home column. Amounts are what this calculator displays.',
      headers: ['Wages and filing', 'NC taxable income', 'NC tax', 'Annual take-home', 'Every two weeks'],
      rows: [
        ['$40,000 single, 1 child', '$25,250.00', '$1,007.48', '$33,312.52', '$1,281.25'],
        ['$52,000 single, no children', '$39,250.00', '$1,566.08', '$42,395.92', '$1,630.61'],
        ['$65,000 single, no children', '$52,250.00', '$2,084.78', '$52,322.72', '$2,012.41'],
        ['$65,000 single, 1 child', '$51,750.00', '$2,064.83', '$52,342.67', '$2,013.18'],
        ['$65,000 joint, 2 children', '$35,500.00', '$1,416.45', '$55,171.05', '$2,121.96'],
        ['$80,000 single, 1 child', '$67,250.00', '$2,683.28', '$62,426.72', '$2,401.03'],
        ['$210,000 single, no children', '$197,250.00', '$7,870.28', '$148,421.72', '$5,708.53']
      ]
    },
    limitsHeading: 'What this North Carolina paycheck estimate leaves out',
    limits: [
      'Head of household is not on the filing-status menu. That standard deduction is $19,125, not the $12,750 used for single. Itemized deductions under G.S. 105-153.5(a)(2) are not offered. The mortgage-interest and property-tax limits on the North Carolina return can differ from the federal Schedule A, and this wage-only form does not reconstruct them. A filer who itemizes can owe less than the standard-deduction result.',
      'The child deduction requires a qualifying child for the federal child tax credit. Typing a number does not prove the credit. The bands use federal AGI, and this page treats AGI as wages minus the traditional 401(k). A second job, a spouse’s wages on a joint return, taxable interest, or an above-the-line deduction would change both the band and the tax. The form also omits the North Carolina child deduction’s interaction with a year in which the federal credit is limited to zero.',
      'A traditional 401(k) reduces the state tax. A Roth amount in the deferral field is treated as pre-tax. Catch-up contributions above $24,500 are cut back. Pre-tax health premiums should already be missing from the wage you type. Social Security and Medicare stay on gross wages. North Carolina has no local income tax on wages to add beside the 3.99% line. A Pennsylvania local earned income tax, an Ohio city tax, or Detroit tax does not belong on this result.',
      'Withholding tables can differ by cents from an annual tax divided by 26, and a bonus withholding at 3.99% of the bonus is not modeled separately. The calculator does not file a Form D-400. Part-year residents and nonresidents with North Carolina-source wages allocate the income. Use the annual figure as a planning total for a full-year resident whose only income is the wage you typed.'
    ],
    disclaimer: 'This North Carolina paycheck figure is general information for a wage earner, not a Form D-400 or tax advice. The Department of Revenue assesses the tax due.',
    faqs: [
      {
        q: 'What North Carolina income tax rate does this 2026 paycheck calculator use?',
        a: '3.99% of North Carolina taxable income. On $65,000, single, with no children and no 401(k), the tax is $2,084.78 and the two-week headline is $2,012.41. Session Law 2023-134 sets 3.99% for taxable years beginning after 2025. The 2025 rate of 4.25% is not used. Revenue triggers can reduce a later year. They do not change this 2026 figure.'
      },
      {
        q: 'How much is the North Carolina child deduction at $65,000?',
        a: 'For a single filer, $500 per qualifying child, because federal AGI is over $60,000 and not over $70,000. One child cuts the tax from $2,084.78 to $2,064.83. For married filing jointly at the same AGI, the amount is $2,000 per child. Two children cut the joint tax from $1,576.05 to $1,416.45. Above $70,000 of single AGI, and above $140,000 of joint AGI, the deduction is $0.'
      },
      {
        q: 'Why is North Carolina take-home higher than Georgia on the same $65,000?',
        a: 'Federal income tax, Social Security, and Medicare match. Georgia tax with no dependents is $2,495.00. North Carolina tax with no children is $2,084.78. Annual take-home is $51,912.50 in Georgia and $52,322.72 here. The $410.22 gap is the state line. Georgia’s rate is 4.99% after $15,000. This rate is 3.99% after $12,750. Michigan, at $2,511.75, is $426.97 above this North Carolina tax.'
      },
      {
        q: 'Does a traditional 401(k) reduce North Carolina’s 3.99% tax?',
        a: 'Yes. North Carolina taxable income starts from federal AGI, and a traditional deferral reduces that AGI. A $6,500 deferral on $65,000 single, with no children, cuts North Carolina tax from $2,084.78 to $1,825.43 and federal income tax from $5,620.00 to $4,840.00. The same deferral can also move a child into a larger deduction band, because the band uses AGI after the deferral. A Roth amount should not be entered in that field.'
      },
      {
        q: 'Does North Carolina add a city income tax the way Pennsylvania does?',
        a: 'Not on wages, and not on this page. The state line is the 3.99% tax after the standard deduction and any child deduction. Pennsylvania’s 3.07% state tax can be followed by a local earned income tax you type. Ohio can add a school-district rate and a municipal rate. Those fields are not here. A $65,000 single North Carolina result is $2,084.78 of state tax and nothing local.'
      }
    ],
    relatedLinks: [
      { slug: 'georgia-paycheck-calculator', label: 'Georgia paycheck calculator for 2026', note: 'A 4.99% tax after a $15,000 standard deduction. At $65,000 single with no dependents, Georgia tax is $2,495.00.' },
      { slug: 'michigan-paycheck-calculator', label: 'Michigan paycheck calculator for 2026', note: 'A 4.25% tax after a $5,900 exemption, plus optional Detroit tax. At $65,000 single the Michigan tax with no city tax is $2,511.75.' },
      { slug: 'pennsylvania-paycheck-calculator', label: 'Pennsylvania paycheck calculator for 2026', note: 'A 3.07% state tax plus a local earned income tax you type. North Carolina does not add that local wage tax.' },
      { slug: '401k-contribution-calculator', label: '2026 401(k) contribution calculator', note: 'Check a deferral against the $24,500 limit before you type it here. The deferral reduces federal AGI and the North Carolina base.' }
    ]
  },
  'quebec-take-home-pay-calculator': {
    title: 'Quebec Take-Home Pay Calculator 2026 (QPP, QPIP, Abatement) | ClearCalc',
    h1: 'Quebec Take-Home Pay Calculator for 2026',
    description: 'Estimate 2026 Quebec take-home pay after federal tax reduced by the 16.5% abatement, Quebec income tax, QPP, QPIP, and the 1.30% EI premium.',
    intro: [
      'This Quebec take-home pay calculator estimates what an employee keeps from a 2026 salary after federal income tax, Quebec income tax, the Quebec Pension Plan, the Quebec Parental Insurance Plan, and Employment Insurance. Quebec does not use the payroll stack on the New Brunswick or Ontario pages. The employee QPP rate is 6.30%, made of a 5.30% base and a 1% first additional contribution, on earnings between $3,500 and the $74,600 maximum pensionable earnings. A second 4% contribution applies from $74,600 to $85,000, up to $416. QPIP is 0.430% of insurable earnings up to $103,000, a maximum of $442.90. EI in Quebec is 1.30% up to $68,900, a maximum of $895.70, not the 1.63% rate used in the other provinces.',
      'Federal tax is calculated and then reduced by the Quebec abatement, 16.5% of basic federal tax. The provincial brackets for 2026, indexed by 2.05%, are 14% to $54,345, 19% to $108,680, 24% to $132,245, and 25.75% above that. The basic personal amount is $18,952, credited at 14%. A worker deduction removes the lesser of $1,450 and 6% of employment income from Quebec income only. The sample is $70,000. The monthly headline is $4,253.73. New Brunswick on that salary is $4,336.82, and the federal tax on the New Brunswick page is not the federal tax here.'
    ],
    steps: [
      'Enter annual gross salary in Canadian dollars. The sample, 70000, means $70,000 for the year.',
      'Press Calculate. The headline is one-twelfth of annual take-home, rounded to the cent. Federal tax is already net of the 16.5% abatement.',
      'Read QPP, QPIP, and EI separately. QPP includes the second additional contribution when the salary passes $74,600. EI stops at $895.70. QPIP stops at $442.90.',
      'Use the annual take-home when you compare provinces. The monthly and two-week lines are that annual figure divided by 12 and by 26. They are not the source-deduction table for one pay period.'
    ],
    howHeading: 'How 2026 Quebec take-home pay is estimated',
    howItWorks: [
      'On $70,000 the pensionable earnings above $3,500 are $66,500. The base QPP contribution is 5.30% of that, $3,524.50. The first additional contribution is 1%, $665.00. Employee QPP is $4,189.50. QPP2 is $0 because the salary is under $74,600. QPIP is 0.430% of $70,000, $301.00. EI is the Quebec maximum, $895.70, because $70,000 is over the $68,900 insurable ceiling. New Brunswick at the same salary uses CPP of $3,956.75 and EI of $1,123.07, and it has no QPIP line. The contribution gap is not a rounding difference. The rates are different statutes.',
      'Federal taxable income subtracts the enhanced QPP, the $665.00, and not the base contribution. At $70,000 that taxable income is $69,335. Federal tax on that income, minus 14% credits for the $16,452 basic personal amount, the $3,524.50 base QPP, the $895.70 of EI, the $301.00 of QPIP, and the $1,501 Canada employment amount, is basic federal tax of $7,235.29. The abatement is 16.5% of that, $1,193.82. Federal tax after the abatement is $6,041.47. The New Brunswick page’s federal tax at $70,000 is $7,278.19, because that page uses CPP, the 1.63% EI premium, and no abatement. Do not subtract $7,278.19 from a Quebec salary.',
      'Quebec taxable income subtracts the $1,450 worker deduction and the same $665.00 of enhanced QPP. It does not subtract base QPP, QPIP, or EI. At $70,000 the Quebec base is $67,885. Tax from the brackets, minus the $18,952 basic amount at 14% ($2,653.28), is $7,527.62. The Chaire de recherche en fiscalité et en finances publiques at the Université de Sherbrooke describes the Quebec system as giving no separate non-refundable credit for employee base QPP, QPIP, or EI, because those contributions are already reflected in the basic personal amount. This page follows that treatment. Adding a second 14% credit for those contributions would understate Quebec tax. Annual take-home is $51,044.71, or $4,253.73 a month and $1,963.26 every two weeks. New Brunswick’s annual figure is $52,041.82. The $997.11 gap is the whole difference in tax and contributions, not a single bracket.',
      'At $85,000 the contributions reach the pension ceiling. Employee QPP including QPP2 is $4,895.30, which is the $4,479.30 maximum on the first tier plus $416. QPIP is $365.50. EI stays $895.70. Enhanced QPP deducted from income is the $711.00 first additional contribution plus the $416, so federal taxable income is $83,873. Federal tax after the abatement is $8,493.97, and the abatement itself is $1,678.45. Quebec tax, after the $1,450 worker deduction, is $10,289.84. Annual take-home is $60,059.69, or $5,004.97 a month. At $150,000, QPIP is at its $442.90 cap, federal tax after the abatement is $21,073.00, Quebec tax is $24,842.61, and annual take-home is $97,850.49. The federal basic personal amount is still $16,452 at $150,000. At $200,000 it has phased down to $16,084.75, the same federal figure the New Brunswick page shows at that salary, and the monthly headline here is $10,303.41.'
    ],
    formula: 'Calendar year 2026. One employee. No spouse, dependant, age, or living-alone amount.\nQPP base = 5.30% × max(0, min(salary, $74,600) − $3,500)\nQPP first additional = 1% × the same contributory earnings\nQPP2 = 4% × max(0, min(salary, $85,000) − $74,600), capped at $416\nQPIP = 0.430% × min(salary, $103,000), capped at $442.90\nEI = 1.30% × min(salary, $68,900), capped at $895.70\nFederal taxable income = salary − QPP first additional − QPP2\nBasic federal tax = federal brackets − 14% × (federal basic personal amount + QPP base + EI + QPIP + Canada employment amount)\nFederal tax = basic federal tax − 16.5% abatement\nWorker deduction = min($1,450, 6% of salary)\nQuebec taxable income = salary − worker deduction − QPP first additional − QPP2\nQuebec tax = Quebec brackets − 14% × $18,952\nAnnual take-home = salary − federal tax − Quebec tax − QPP − QPP2 − QPIP − EI',
    formulaNotes: [
      'The worker deduction is already at the $1,450 cap by $40,000, because 6% of $40,000 is $2,400. At that salary Quebec tax is $2,692.62, federal tax after the abatement is $2,227.59, QPP is $2,299.50, QPIP is $172.00, EI is $520.00, and the monthly headline is $2,674.02. Below about $24,167 the 6% limb is the smaller number. This page applies the cap and the 6% test to the salary you type. It does not apply the deduction to pension income or to a self-employed worker.',
      'At $45,000, federal tax after the abatement is $2,765.15 and the abatement is $546.41. Quebec tax is $3,385.62. QPP is $2,614.50, QPIP is $193.50, and EI is $585.00. Annual take-home is $35,456.23, or $2,954.69 a month. The federal basic personal amount is still the full $16,452. None of these rows applies the work premium, the solidarity credit, or the deduction for a person living alone. Those can raise the refund on a return. They are not withheld as a lower tax rate on this form.'
    ],
    examplesHeading: 'Worked 2026 Quebec take-home examples',
    examples: [
      {
        title: '$70,000 against the New Brunswick payroll stack',
        paragraphs: [
          'Federal tax after the abatement is $6,041.47. Quebec tax is $7,527.62. QPP is $4,189.50. QPIP is $301.00. EI is $895.70. Annual take-home is $51,044.71. The headline is $4,253.73 / month, and the two-week line is $1,963.26. The worker deduction is $1,450.00. The abatement is $1,193.82. The Quebec basic personal amount stays $18,952.00.',
          'New Brunswick at $70,000 keeps $52,041.82, or $4,336.82 a month. Its federal tax is $7,278.19, its provincial tax is $5,600.17, its CPP is $3,956.75, and its EI is $1,123.07. Quebec’s provincial tax is higher and its pension contribution is higher, while its EI is lower and its federal tax is lower because of the abatement and the QPIP credit. The net is $997.11 less take-home for the year, $83.09 a month. Swapping the province label without swapping QPP, QPIP, and the abatement would invent a third system that neither page uses.'
        ]
      },
      {
        title: '$85,000, where QPP2 appears',
        paragraphs: [
          'Employee QPP including QPP2 is $4,895.30. QPIP is $365.50. EI remains $895.70. Federal taxable income is $83,873 after the $711.00 first additional contribution and the $416.00 of QPP2. Federal tax after the abatement is $8,493.97. The abatement is $1,678.45. Quebec tax is $10,289.84 after the $1,450 worker deduction. Annual take-home is $60,059.69. The headline is $5,004.97 / month, or $2,309.99 every two weeks.',
          'The first-tier QPP maximum of $4,479.30 is 6.30% of $71,100. The extra $416.00 is 4% of the $10,400 between $74,600 and $85,000. A salary of $74,600 has no QPP2. A salary of $85,000 has the full $416. This page does not ask you to type the contribution. It computes both tiers from the salary.'
        ]
      },
      {
        title: '$40,000, $150,000, and the federal amount at $200,000',
        paragraphs: [
          'At $40,000 the worker deduction is already $1,450.00, not 6% of the wage. Quebec tax is $2,692.62. Federal tax after the abatement is $2,227.59. Contributions are $2,299.50 of QPP, $172.00 of QPIP, and $520.00 of EI. Annual take-home is $32,088.29, or $2,674.02 a month. At $45,000 the monthly headline is $2,954.69, with Quebec tax of $3,385.62 and federal tax of $2,765.15.',
          'At $150,000, QPIP has reached $442.90 and QPP including QPP2 is still $4,895.30. Federal tax after the abatement is $21,073.00. Quebec tax is $24,842.61. Annual take-home is $97,850.49, or $8,154.21 a month. At $200,000 the federal basic personal amount falls to $16,084.75, Quebec tax is $37,717.61, the abatement is $6,403.90, and the monthly headline is $10,303.41. The Quebec basic amount does not phase out on this page. It stays $18,952.'
        ]
      }
    ],
    table: {
      heading: '2026 Quebec take-home pay at selected salaries',
      caption: 'Federal tax is after the 16.5% abatement. QPP includes QPP2 when the salary passes $74,600. The worker deduction is $1,450 at every row. Amounts are what this calculator displays.',
      headers: ['Salary', 'Federal tax', 'Quebec tax', 'QPP, QPIP, and EI', 'Monthly take-home'],
      rows: [
        ['$40,000', '$2,227.59', '$2,692.62', '$2,991.50', '$2,674.02'],
        ['$45,000', '$2,765.15', '$3,385.62', '$3,393.00', '$2,954.69'],
        ['$70,000', '$6,041.47', '$7,527.62', '$5,386.20', '$4,253.73'],
        ['$85,000', '$8,493.97', '$10,289.84', '$6,156.50', '$5,004.97'],
        ['$150,000', '$21,073.00', '$24,842.61', '$6,233.90', '$8,154.21'],
        ['$200,000', '$32,407.63', '$37,717.61', '$6,233.90', '$10,303.41']
      ]
    },
    limitsHeading: 'What this Quebec estimate leaves out',
    limits: [
      'The living-alone amount, the age amount, the amount transferred from a spouse, the amount for a person living alone, and the career-extension credit are not applied. Each of those is a provincial credit on top of the $18,952 basic amount, and a person who claims one can owe less Quebec tax than this page shows. The work premium and the solidarity tax credit are refundable. They are not subtracted from the tax in this estimate. Medical expenses, union dues, and donations are omitted on both returns.',
      'Self-employed workers pay both shares of QPP and a different QPIP rate, and they do not pay employee EI unless they opt into special benefits. This form is the employee share only: 6.30% plus QPP2, 0.430% QPIP, and 1.30% EI. An RRSP or FHSA contribution reduces taxable income on both returns when it is deductible. There is no field for it. Type the salary after a contribution only if you want the tax lines on that smaller number, and remember that QPP and QPIP still follow the gross employment income, which this form would then understate.',
      'Source-deduction tables withhold from each cheque using the claim code on the TP-1015.3-V and the federal TD1. This page annualizes a full year that starts from zero contributions. A mid-year hire, a second job that has already hit the QPP or EI maximum, or a bonus will not match one-twelfth of the annual figure on a single stub. The prescription-drug premium and the health-services fund are not employee wage withholdings in this calculation. The fund is an employer contribution.',
      'The other provincial calculators on this site use CPP and the 1.63% EI rate. Their federal tax is not a Quebec federal tax with the abatement removed. At $70,000 the federal gap between this page and New Brunswick is $1,236.72, $7,278.19 minus $6,041.47. Comparing only the provincial brackets would miss the QPP, the QPIP, the cheaper EI premium, and that abatement.'
    ],
    disclaimer: 'This Quebec figure is general information for an employee who claims the basic personal amount, not a TP-1, a T1, or tax advice. Revenu Québec and the Canada Revenue Agency assess the returns.',
    faqs: [
      {
        q: 'Why is Quebec take-home $4,253.73 a month at $70,000 instead of the New Brunswick figure?',
        a: 'New Brunswick at $70,000 is $4,336.82 a month, or $52,041.82 for the year. Quebec is $4,253.73 a month, or $51,044.71. The $83.09 monthly gap is $997.11 a year. Quebec tax is $7,527.62 against New Brunswick tax of $5,600.17, QPP is $4,189.50 against CPP of $3,956.75, and Quebec also pays $301.00 of QPIP. Federal tax here is $6,041.47 after a $1,193.82 abatement, not the $7,278.19 on the New Brunswick page, and EI is $895.70 rather than $1,123.07.'
      },
      {
        q: 'What does the 16.5% Quebec abatement come off?',
        a: 'It comes off basic federal tax, after non-refundable credits and before any provincial tax. At $70,000 basic federal tax is $7,235.29 and the abatement is $1,193.82, leaving $6,041.47. At $85,000 the abatement is $1,678.45 and federal tax is $8,493.97. At $200,000 the abatement is $6,403.90. Quebec income tax is not reduced by that percentage. The province has its own brackets.'
      },
      {
        q: 'Does Quebec give a second tax credit for QPP, QPIP, and EI?',
        a: 'Not on this page. Base QPP, the Quebec EI premium, and QPIP are credits at 14% on the federal return, and they are part of the basic federal tax that the abatement then reduces. The Quebec return credits the $18,952 basic personal amount at 14% and does not add those contributions again. The enhanced QPP is a deduction from income on both returns. The worker deduction, up to $1,450, is Quebec only.'
      },
      {
        q: 'When does QPP2 start on a 2026 Quebec salary?',
        a: 'At $74,600. The 4% second contribution runs up to $85,000 and stops at $416. A $70,000 salary has QPP of $4,189.50 and no QPP2. An $85,000 salary has $4,895.30, the $4,479.30 first-tier maximum plus $416. QPIP at $85,000 is $365.50, still under the $442.90 cap that applies once earnings reach $103,000. EI has already stopped at $895.70.'
      },
      {
        q: 'Is the $1,450 Quebec worker deduction the same as the federal Canada employment amount?',
        a: 'No. The worker deduction reduces Quebec income, up to $1,450, and it is already at that cap on a $40,000 salary. The Canada employment amount is a federal credit base of up to $1,501, multiplied by 14% inside the federal tax calculation. Both can apply to the same employee. Neither one is a cash payment. At $70,000 the worker deduction is $1,450 and the federal employment amount is inside the $6,041.47 federal tax line, not printed as its own dollar of take-home.'
      }
    ],
    relatedLinks: [
      { slug: 'new-brunswick-take-home-pay-calculator', label: 'New Brunswick take-home pay calculator for 2026', note: 'CPP and the 1.63% EI rate, with no abatement. At $70,000 the monthly headline is $4,336.82 and federal tax is $7,278.19.' },
      { slug: 'ontario-take-home-pay-calculator', label: 'Ontario take-home pay calculator for 2026', note: 'The same CPP and EI system as New Brunswick, plus Ontario tax and the Ontario Health Premium. Not QPP or QPIP.' },
      { slug: 'nova-scotia-take-home-pay-calculator', label: 'Nova Scotia take-home pay calculator for 2026', note: 'Another CPP province. At $70,000 its monthly headline is $4,208.02, which is not a Quebec result with the label changed.' },
      { slug: 'alberta-take-home-pay-calculator', label: 'Alberta take-home pay calculator for 2026', note: 'CPP, the 1.63% EI premium, and Alberta brackets. The federal line there is not reduced by the Quebec abatement.' }
    ]
  },
  'western-australia-stamp-duty-calculator': {
    title: 'Western Australia Stamp Duty Calculator 2026 (from 7 May) | ClearCalc',
    h1: 'Western Australia Stamp Duty Calculator',
    description: 'Estimate Western Australian transfer duty for an agreement on or after 7 May 2026, including the first home owner rate through $800,000 and 7% foreign transfer duty.',
    intro: [
      'This Western Australia stamp duty calculator estimates transfer duty on property in Western Australia. The general rate is Schedule 2 of the Duties Act 2008, still the RevenueWA table updated on 30 July 2026. Duty is not one percentage of the whole price. Up to $120,000 it is $1.90 per $100 or part of $100. From there the steps are $2,280 plus $2.85 per $100 above $120,000 to $150,000, $3,135 plus $3.80 per $100 above $150,000 to $360,000, $11,115 plus $4.75 per $100 above $360,000 to $725,000, and $28,453 plus $5.15 per $100 above $725,000. The dutiable value is rounded down to the nearest dollar before those parts of $100 are counted. A started hundred dollars is a full hundred.',
      'The first home owner rate on this page is the rate for an agreement entered into on or after 7 May 2026, from the housing taxation package announced that day. A home, new or established, pays no duty up to $600,000. From $600,001 to $800,000, duty is $16.15 per $100 or part of $100 above $600,000. Above $800,000 the general rate applies to the whole value. Vacant land pays no duty up to $450,000, then $20.14 per $100 or part above $450,000 through $550,000, and the general rate above that. The sample is a $650,000 first home. The headline is $8,075.00. The general rate on that value is $24,890.00. Agreements before 7 May 2026 used lower thresholds, and this form does not store them.'
    ],
    steps: [
      'Enter the dutiable value in Australian dollars. If the contract includes GST, RevenueWA includes that GST in the dutiable value. The sample is 650000.',
      'Choose the buyer. “Home, not a first home” uses the concessional residential rate when the whole property is $200,000 or less, and the general rate above that. “First home, house and land” and “First home, vacant land” use the 7 May 2026 first home owner thresholds. “General rate” is the Schedule 2 scale for a purchase that is not on those concessions, including many investment purchases.',
      'Choose whether foreign transfer duty applies. The surcharge is 7% of the dollar-rounded dutiable value, added to transfer duty. A foreign person is not given the first home owner rate on this page.',
      'Press Calculate. The headline is transfer duty plus any foreign surcharge. The general-rate line is always shown so a concession can be compared with the full scale.'
    ],
    howHeading: 'How Western Australian transfer duty is calculated',
    howItWorks: [
      'A $500,000 purchase on the general rate sits in the $360,001 to $725,000 band. The excess over $360,000 is $140,000, which is 1,400 parts of $100. At $4.75 a part, that excess is $6,650. Added to $11,115, general duty is $17,765.00. The same arithmetic at $360,000 lands on $11,115.00 exactly, which is why the next band starts there. At $725,000 the excess over $360,000 is $365,000, or 3,650 parts at $4.75, which is $17,337.50. Added to $11,115, duty is $28,452.50. The following band’s published base is $28,453, so the scale steps by half a dollar at the boundary rather than matching to the cent. At $730,000, general duty is $28,710.50: $28,453 plus $5.15 for each of the 50 parts in the $5,000 above $725,000.',
      'The first home owner rate for a home does not use those bands while the value is $800,000 or under. At $600,000 duty is $0.00, and the general rate underneath is $22,515.00. At $600,001 the excess is $1, one part of $100, and duty is $16.15. At $650,000 the excess is $50,000, 500 parts at $16.15, and duty is $8,075.00. At $650,050 the excess is $50,050, which is 501 parts, and duty is $8,091.15. At $700,000 duty is $16,150.00 against a general rate of $27,265.00. At $730,000 duty is $20,995.00 against a general rate of $28,710.50. Queensland’s established first-home concession on $730,000 is $6,555.00 on that state’s page. The two concessions are not the same purchase. At $800,000 the first home owner rate is $32,300.00 and the general rate is $32,315.50, fifteen dollars and fifty cents apart. At $800,001 the first home owner rate no longer applies, and duty is the general $32,320.65.',
      'Vacant land has its own ceiling. At $450,000 a first home buyer of vacant land pays $0.00, while the general rate is $15,390.00. At $500,000 the land rate is $10,070.00, which is 500 parts of $20.14 above $450,000. At $550,000 it is $20,140.00, and the general rate happens to be $20,140.00 as well. At $550,001 the land concession ends and duty is the general $20,144.75. A home buyer, not a land buyer, still pays nothing at $550,000 and at $550,001, because the home nil-rate band runs to $600,000. Choosing “vacant land” for a house, or “house and land” for a block, changes the threshold. The form cannot see the title.',
      'A home that is not a first home, and that does not exceed $200,000, uses the concessional rate RevenueWA publishes for a principal place of residence: $1.50 per $100 up to $120,000, then $1,800 plus $4.04 per $100 above $120,000. At $120,000 that concession is $1,800.00 and the general rate is $2,280.00. At $200,000 the concession is $5,032.00 and the general rate is $5,035.00. At $200,001 the concession stops and both results are the general $5,038.80. The “General rate” menu always uses Schedule 2, including under $200,000, which is the right choice for a purchase that is not a principal place of residence. Foreign transfer duty is a further 7%. On a $650,000 residential purchase it is $45,500.00. Added to general duty of $24,890.00, the headline is $70,390.00. On a $500,000 general-rate purchase the surcharge is $35,000.00 and the headline is $52,765.00.'
    ],
    formula: 'Agreement on or after 7 May 2026. Value is rounded down to the nearest dollar. Each started $100 is one part.\nGeneral: $1.90 per $100 to $120,000; then $2,280 + $2.85 per $100 above $120,000 to $150,000; $3,135 + $3.80 per $100 above $150,000 to $360,000; $11,115 + $4.75 per $100 above $360,000 to $725,000; $28,453 + $5.15 per $100 above $725,000.\nHome, not a first home, value ≤ $200,000: $1.50 per $100 to $120,000; then $1,800 + $4.04 per $100 above $120,000.\nFirst home, house and land: $0 to $600,000; $16.15 per $100 above $600,000 through $800,000; general rate above $800,000.\nFirst home, vacant land: $0 to $450,000; $20.14 per $100 above $450,000 through $550,000; general rate above $550,000.\nForeign transfer duty = 7% of the dollar-rounded dutiable value, and the first home owner rate is not applied.\nHeadline = transfer duty + foreign transfer duty.',
    formulaNotes: [
      'The first home owner grant is a separate payment. From 7 May 2026 the grant cap for homes south of the 26th parallel is $800,000, and eligibility for the duty concession is no longer tied to staying under that cap. This calculator does not pay the grant and does not subtract it from duty. A $650,000 first home is $8,075.00 of duty here whether or not a grant is also paid. An established home can qualify for the duty rate even when the grant itself is aimed at a new home. The form does not test citizenship, prior ownership, or occupancy. Those are RevenueWA conditions.',
      'A foreign person who selects a first home row is moved to the general rate, and the 7% is added. At $650,000 that is $24,890.00 plus $45,500.00. The detail line says the first home owner rate was not applied. RevenueWA aligns that rate with grant eligibility, which a foreign purchaser generally does not meet. The 7% applies to residential property. Commercial property, and a build-to-sell exemption that was still moving through Parliament in 2026, are not options on the form. If the land is not residential, leave the foreign menu off and do not treat the 7% as automatic.'
    ],
    examplesHeading: 'Worked Western Australia duty examples',
    examples: [
      {
        title: 'A $650,000 first home, and the general rate beside it',
        paragraphs: [
          'Choose first home, house and land, and leave foreign duty off. The value is under $800,000 and over $600,000, so duty is 500 × $16.15. The headline is $8,075.00. General duty on the same value is $24,890.00, shown on its own line. The effective rate on $650,000 is 1.24%. At $600,000 the same buyer pays $0.00 against $22,515.00 of general duty. At $600,001 the headline is $16.15.',
          'Raise the price to $650,050. The extra $50 starts another $100, so the parts go from 500 to 501 and duty is $8,091.15. The general rate on $650,050 is $24,894.75. The dollar of dutiable value is not rounded up. Only the count of hundreds rounds up, and only the value itself is rounded down before that count. A price of $650,000.90 still uses $650,000.'
        ]
      },
      {
        title: 'The $800,000 ceiling, a $730,000 comparison, and vacant land',
        paragraphs: [
          'A first home at $800,000 is $32,300.00. General duty is $32,315.50. One dollar more, $800,001, drops the concession and the headline becomes $32,320.65. The concession does not taper into the general rate. It stops. A $730,000 first home is $20,995.00, and general duty is $28,710.50. Queensland’s page charges $6,555.00 on an established first home at that price and $25,875.00 on the general scale. NSW and Victoria are further tables. The currency is Australian dollars on all four, and the statutes are not interchangeable.',
          'Vacant land for a first home at $500,000 is $10,070.00. The same price as a home is $0.00, because $500,000 is under the $600,000 home threshold and over the $450,000 land threshold. At $550,000 the land rate and the general rate are both $20,140.00. At $550,001 the land buyer pays general duty of $20,144.75, while a home buyer still pays $0.00. At $450,000 both a first-home block and a first home pay $0.00, and a general-rate purchase pays $15,390.00.'
        ]
      },
      {
        title: 'A home under $200,000, and a foreign buyer',
        paragraphs: [
          'A principal place of residence at $120,000 that is not a first home pays $1,800.00. General duty is $2,280.00. At $100,000 the concession is $1,500.00 and the general rate is $1,900.00. At $200,000 the concession is $5,032.00 and the general rate is $5,035.00, a $3.00 gap. At $200,001 the concession is gone and duty is $5,038.80 either way. Select “General rate” if the property is not a principal place of residence. That menu does not apply the $1.50 rate at $120,000. It charges $2,280.00.',
          'A foreign person on a $650,000 residential purchase is not given the $8,075.00 first home figure. The headline is $70,390.00: general duty of $24,890.00 plus 7% of $650,000, which is $45,500.00. A foreign person on a $500,000 general-rate purchase pays $52,765.00, of which $35,000.00 is the surcharge. The 7% is on the dollar-rounded value, not on the duty. It does not replace transfer duty.'
        ]
      }
    ],
    table: {
      heading: 'Transfer duty on selected Western Australian values',
      caption: 'First home rows use the thresholds for an agreement on or after 7 May 2026. General rows use Schedule 2. The home concession is the principal-place-of-residence rate at or under $200,000. Foreign duty is off. Amounts are what this calculator displays.',
      headers: ['Value', 'Buyer', 'Duty', 'General rate beside it'],
      rows: [
        ['$120,000', 'Home, not a first home', '$1,800.00', '$2,280.00'],
        ['$200,000', 'Home, not a first home', '$5,032.00', '$5,035.00'],
        ['$500,000', 'First home, house and land', '$0.00', '$17,765.00'],
        ['$500,000', 'First home, vacant land', '$10,070.00', '$17,765.00'],
        ['$650,000', 'First home, house and land', '$8,075.00', '$24,890.00'],
        ['$730,000', 'First home, house and land', '$20,995.00', '$28,710.50'],
        ['$800,000', 'First home, house and land', '$32,300.00', '$32,315.50'],
        ['$800,001', 'First home, house and land', '$32,320.65', '$32,320.65']
      ]
    },
    limitsHeading: 'What this Western Australia duty estimate leaves out',
    limits: [
      'Agreements entered into before 7 May 2026 used a $500,000 nil-rate band for homes in the period that began on 21 March 2025, with a different upper threshold in the metropolitan and Peel regions than outside them. This page does not ask for the contract date and does not store those older rates. If the agreement is dated before 7 May 2026, the $8,075.00 result on a $650,000 home is the wrong scale. Nominal duty, deceased-estate exemptions, transfers pursuant to a matrimonial settlement, and partial interests are not modeled. A half share is not half of the duty on the whole in every case, because several concessions look at the whole property.',
      'The off-the-plan concession is a separate reduction and is not a menu item. The foreign build-to-sell exemption announced with the 2026 housing package is not applied, including where the legislation was still being implemented in RevenueWA’s systems. A purchaser who is foreign at contract and not foreign at settlement can seek a reassessment. This form charges the 7% if you select foreign, and it does not refund it. Mixed-use property can be residential only in part. The 7% here is on the entire dutiable value you type.',
      'Dutiable value is not always the contract price. A gift, a transfer at an undervalue, or a property whose unencumbered value exceeds the consideration can be assessed on the higher value. GST, if it is payable on the transaction, is included. This page does not add GST for you. Subdivision, aggregation of related transactions, and landholder duty are outside the form. The $200,000 residential concession applies to the entire property, not to each purchaser’s fraction.',
      'Queensland, Victoria, and New South Wales publish their own scales, including their own first-home concessions and their own foreign surcharges of 8%, 8%, and 9% on those pages. A $730,000 figure moved from one state to another is a different tax. England, Scotland, and Wales use pounds and different statutes. The mortgage calculator estimates principal and interest in US dollars. It does not add this duty or convert Australian dollars.'
    ],
    disclaimer: 'This transfer-duty figure is general information for a Western Australian dutiable transaction, not an assessment from RevenueWA. The Commissioner assesses the duty.',
    faqs: [
      {
        q: 'How much is Western Australia duty on a $650,000 first home after 7 May 2026?',
        a: 'For an eligible first home buyer of a home, $8,075.00. That is $16.15 for every $100 of the $50,000 above $600,000. The general rate on the same value is $24,890.00. A price of $650,050 becomes $8,091.15 because the extra $50 starts another $100. At $600,000 the first home duty is $0.00. These thresholds are for an agreement entered into on or after 7 May 2026.'
      },
      {
        q: 'What happens to the Western Australia first home rate above $800,000?',
        a: 'The general rate replaces it on the whole value. At $800,000 a first home is $32,300.00, and the general rate is $32,315.50. At $800,001 both results are $32,320.65. There is no sliding concession past $800,000. Vacant land loses its concession earlier, above $550,000. A $550,000 first-home block is $20,140.00, the same as the general rate, and $550,001 is general duty of $20,144.75.'
      },
      {
        q: 'Does a Western Australian home under $200,000 use a cheaper rate if it is not a first home?',
        a: 'Yes, when it is a principal place of residence and the whole property does not exceed $200,000. At $120,000 that concession is $1,800.00 and the general rate is $2,280.00. At $200,000 the concession is $5,032.00 and the general rate is $5,035.00. At $200,001 the concession ends and duty is $5,038.80. The general-rate menu never applies the $1.50 rate. Use it when the property is not a principal residence.'
      },
      {
        q: 'How is the 7% Western Australia foreign transfer duty added?',
        a: 'It is 7% of the dutiable value after that value is rounded down to the nearest dollar, and it is added to transfer duty. It does not replace the transfer duty. A $650,000 residential purchase is $45,500.00 of foreign duty. With the general rate of $24,890.00, the headline is $70,390.00. A foreign person is not given the first home owner rate on this page, so the $8,075.00 concession is not combined with the 7%.'
      },
      {
        q: 'Is Western Australia duty on a $730,000 home the same as Queensland’s $6,555?',
        a: 'No. An eligible Western Australian first home buyer at $730,000 pays $20,995.00 under the post-7 May 2026 home rate. General duty there is $28,710.50. Queensland’s established first-home concession at $730,000 is $6,555.00, and its general duty is $25,875.00. Victoria and New South Wales use their own Acts. The first home owner grant is not subtracted from any of these duty figures.'
      }
    ],
    relatedLinks: [
      { slug: 'queensland-stamp-duty-calculator', label: 'Queensland stamp duty calculator', note: 'An established first home at $730,000 is $6,555.00 there. The Western Australian first home figure at that price is $20,995.00.' },
      { slug: 'victoria-stamp-duty-calculator', label: 'Victoria stamp duty calculator', note: 'Victorian land transfer duty, including an 8% foreign purchaser additional duty. Not this 7% Western Australian surcharge.' },
      { slug: 'nsw-stamp-duty-calculator', label: 'NSW stamp duty calculator', note: 'New South Wales transfer duty and a 9% surcharge. A different scale from Schedule 2 of the Duties Act 2008 (WA).' },
      { slug: 'australia-take-home-pay-calculator', label: 'Australia take-home pay calculator for 2026–27', note: 'Resident income tax and the Medicare levy on a salary. It is not the duty on a house in Perth or anywhere else in Western Australia.' }
    ]
  },
  'square-footage-calculator': {
    title: 'Square Footage Calculator for Feet, Inches, and L-Shapes | ClearCalc',
    h1: 'Square Footage Calculator for a Room or an L-Shape',
    description: 'Calculate square feet from feet and inches, add a second rectangle for an L-shape, and convert the area to square yards and square metres.',
    intro: [
      'This square footage calculator multiplies length by width and reports the area in square feet, square yards, and square metres. Length and width can include extra inches, so a room that is 12 feet 6 inches by 10 feet does not have to be rewritten as 12.5. Twelve inches are one foot. Inches past 12 are still added, which is useful when a tape reading is 10 feet 18 inches and you would rather not do the carry yourself. A second rectangle, entered in decimal feet, is added for an L-shaped room. The sample is 12 feet 6 inches by 10 feet, with no second rectangle and no extra for ordering. The headline is 125.00 square feet, which is 13.89 square yards and 11.61 square metres.',
      'The floor tile calculator already knows that a 10 by 12 foot floor is 120 square feet, and then it counts tiles. This page stops at the area. With a 10% extra allowance that same floor is 132.00 square feet, the area the tile page divides by the coverage of one tile. Paint is wall area in gallons. Concrete is a volume. Mulch and gravel are volumes at a depth. None of those headlines is a square-footage measurement of the floor you are standing on. Real-estate “finished square footage” under ANSI Z765 is a different set of rules about stairs, garages, and below-grade space. This form is the arithmetic of the rectangles you measure.'
    ],
    steps: [
      'Enter the length in feet and any extra inches. The sample length is 12 feet and 6 inches. Inches may be 0. They may also be more than 12. A negative inch is rejected.',
      'Enter the width the same way. The sample width is 10 feet and 0 inches. Both sides have to produce an area above zero. A length with a zero width is not a room.',
      'If the room is an L, enter the second rectangle’s length and width in feet. Leave both at 0 for a single rectangle. Entering only one side of the second rectangle is rejected, so a forgotten width does not silently disappear.',
      'Type an extra-to-order percentage if you are buying carpet, vinyl, or underlayment, or leave 0. Press Calculate. The headline is the measured square feet, before that extra. The ordering line is underneath.'
    ],
    howHeading: 'How square feet, square yards, and square metres are calculated',
    howItWorks: [
      'Each side in feet is the foot count plus the inches divided by 12. The sample length is 12 + 6/12, which is 12.5 feet. Times 10 feet, the area is 125 square feet. One square yard is 9 square feet, so 125 / 9 is 13.888…, displayed as 13.89 square yards. One international foot is 0.3048 metres, so one square foot is 0.3048 × 0.3048, or 0.09290304 square metres. Times 125, that is 11.61288 square metres, displayed as 11.61. The length converter on this site turns metres into feet. It does not multiply two sides, and it does not use this exact square-metre factor. Its foot factor is the rounded 3.28084 used for a one-way length conversion.',
      'An L is two rectangles that do not overlap. A 20 by 15 foot main room is 300 square feet. An 8 by 6 foot wing, measured as the part that sticks out and not as a second copy of the main room, is 48 square feet. The total is 348.00 square feet, 38.67 square yards, and 32.33 square metres. If you measure the bounding box, 20 by 21, you include the empty corner. That box is 420 square feet and is the wrong area. If you measure the wing as 20 by 6 because the tape ran the full length of the house, you have counted a strip of the main room twice. The second rectangle is only the additional piece. Draw a line where the two rectangles meet and measure each one up to that line.',
      'Inches that are not a tidy half foot still multiply. A room 8 feet 3 inches by 10 feet 4 inches is 8.25 feet by 10.333… feet. The product is 85.25 square feet, 9.47 square yards, and 7.92 square metres. Eight and a quarter times ten and a third is exact in ordinary arithmetic: 8.25 × 31/3 = 85.25. The display rounds the square yards and the square metres. It does not round the square feet away from 85.25. Eighteen extra inches on a 10 foot side are 1.5 feet, so a 10 foot by 10 foot room with 18 inches added to the length is 11.5 × 10, or 115.00 square feet. You do not have to convert 18 inches to 1 foot 6 inches before you type.',
      'The extra-to-order field does not change the headline. A 10 by 12 foot floor is 120.00 square feet, 13.33 square yards, and 11.15 square metres. Ten percent extra makes the ordering line 132.00 square feet, 14.67 square yards, and 12.26 square metres. The tile page uses that 132 square feet, with a 1/8 inch grout joint, to reach 129.29 tiles before rounding up to 130. This page will not produce the 130. Carpet sold by the square yard is the 13.33 line, or 14.67 if you are ordering the extra. A 10% allowance is not a measurement of the room. It is waste, pattern match, and the piece you would rather have left over than go back for.'
    ],
    formula: 'Length in feet = feet + inches / 12\nWidth in feet = feet + inches / 12\nFirst rectangle = length × width\nSecond rectangle = its length × its width, or 0 when both sides are 0\nSquare feet = first rectangle + second rectangle\nSquare yards = square feet / 9\nSquare metres = square feet × 0.3048 × 0.3048\nOrdering area = square feet × (1 + extra percent / 100)\nThe headline is the measured square feet, before the extra.',
    formulaNotes: [
      'The international foot of 0.3048 metres is exact by agreement, so 0.09290304 square metres per square foot is exact before display rounding. An older US survey foot is not used. A result in square metres that came from a rounded 0.093 factor will disagree in the second decimal on a large floor. This page multiplies by 0.3048 twice and then rounds the displayed square metres to two decimals. At 125 square feet the unrounded product is 11.61288, which displays as 11.61.',
      'Square inches are square feet times 144, and acres are square feet divided by 43,560. Neither is the headline, because a room is not usually bought in those units. A 125 square foot room is 18,000 square inches and about 0.0029 acres. A lot measured in acres should be entered as feet only after you have converted, or the number will look like a room. The form accepts a large foot count. It does not know whether you measured a bedroom or a paddock.'
    ],
    examplesHeading: 'Worked square-footage examples',
    examples: [
      {
        title: '12 feet 6 inches by 10 feet',
        paragraphs: [
          'The length is 12.5 feet and the width is 10 feet. The headline is 125.00 sq ft. Square yards are 13.89. Square metres are 11.61. The second rectangle line says it was not used. The ordering line at 0% extra repeats 125.00 square feet. Six inches are half a foot, so this is the same area as typing 12.5 in the foot field and 0 inches. The inch field exists so the half does not have to be converted first.',
          'Add 10% extra and the headline stays 125.00 sq ft. The ordering line becomes 137.50 square feet. That extra is for a cut or a pattern. It is not a larger room. The tile page’s waste field works the same way on area, and then it goes on to count pieces. This page stops at the area.'
        ]
      },
      {
        title: 'The 10 by 12 floor the tile page starts from',
        paragraphs: [
          'Length 10 feet, width 12 feet, no extra inches, and no second rectangle: 120.00 square feet, 13.33 square yards, and 11.15 square metres. With 10% extra the ordering area is 132.00 square feet, 14.67 square yards, and 12.26 square metres. The floor tile calculator’s worked example takes that 132 square feet, divides by 1.0209 square feet of tile-plus-joint, and rounds 129.29 tiles up to 130. If you only needed the area, you are done on this page. If you need the box count, the tile page is the one that knows the carton.',
          'A square yard of carpet for the measured floor is the 13.33 line, not the 14.67 line, unless you meant to buy the waste. Some carpet remnants are sold by the square foot. The headline is that unit. The conversion does not change because the material changed. Vinyl, hardwood, and carpet use the same floor area and then apply their own waste, which is why the extra percentage is a field you set rather than a hidden 10%.'
        ]
      },
      {
        title: 'An L-shape, and a room that is not a whole number of feet',
        paragraphs: [
          'A 20 by 15 foot rectangle plus an 8 by 6 foot wing is 300.00 plus 48.00, so the headline is 348.00 sq ft. Square yards are 38.67 and square metres are 32.33. The wing is the protruding piece only. Measuring 20 by 21 as if the L filled its bounding box would report 420.00 square feet and would order too much material. Measuring the wing as 20 by 6, the full run of the house, would add a 120 square foot strip that is already inside the 20 by 15.',
          'A room 8 feet 3 inches by 10 feet 4 inches is 85.25 sq ft, 9.47 square yards, and 7.92 square metres. Three inches are 0.25 feet and four inches are one-third of a foot. The product is exact at two decimals. A 10 foot square with 18 extra inches on one side is 115.00 sq ft, because 18 inches are 1.5 feet and the side is 11.5 feet. Both readings are accepted. You do not have to borrow twelve inches into the foot field before the form will multiply.'
        ]
      }
    ],
    table: {
      heading: 'Square feet for rooms measured in feet and inches',
      caption: 'The second rectangle is added only in the L-shape row. Extra to order is 0% except the row that says otherwise. Square yards and square metres are the displayed rounding. One square foot is 0.09290304 square metres.',
      headers: ['Measurement', 'Square feet', 'Square yards', 'Square metres'],
      rows: [
        ['12 ft 6 in × 10 ft', '125.00', '13.89', '11.61'],
        ['10 ft × 12 ft', '120.00', '13.33', '11.15'],
        ['10 ft × 12 ft, plus 10% extra', '132.00 ordered', '14.67 ordered', '12.26 ordered'],
        ['20 ft × 15 ft plus 8 ft × 6 ft', '348.00', '38.67', '32.33'],
        ['8 ft 3 in × 10 ft 4 in', '85.25', '9.47', '7.92'],
        ['10 ft × 10 ft, plus 18 in on the length', '115.00', '12.78', '10.68']
      ]
    },
    limitsHeading: 'What this square-footage measurement leaves out',
    limits: [
      'Finished square footage for a listing follows measurement standards this form does not apply. ANSI Z765 distinguishes above-grade and below-grade area, excludes open areas to the floor below, and has rules for stairs and ceiling height. A basement, a garage, and a screened porch can be area you can measure and still not be “finished square footage” in a listing. Type the rectangles you mean, and do not read the headline as an appraisal.',
      'The second rectangle is added in full. There is no overlap subtraction. If your two measurements share a strip, the total is high by that strip. A T-shape or a U-shape needs the same discipline: split the floor into rectangles that meet at edges and do not cover one another, then put only one of them in the second pair of fields. A third rectangle has to be added by you to the headline. The form has two. Slopes, bay windows, and circles are not a length times a width. A circular alcove is a separate bit of geometry.',
      'The extra percentage increases the ordering line only. It does not know the width of a carpet roll, the direction of a plank, or a tile that needs a grout joint. The tile page adds the joint before it counts pieces. This page, given the same 10 by 12 floor and 10% extra, stops at 132.00 square feet. Paint coverage is wall area, which includes height and excludes openings. A floor area is the wrong input for gallons. Concrete, mulch, and gravel need a depth. Square feet times a depth in inches, divided by 12, is cubic feet, and this form does not ask for the depth.',
      'Units are the international foot and the square metre that follows from it. A metric room should be converted to feet first, on the length converter, or measured again in feet. That converter’s displayed foot factor is rounded, so a room near a rounding boundary can pick up a small difference if you convert each wall and multiply here. Measuring in feet on site avoids that. The result is an area, not a price. A cost per square foot is a multiplication you do after you trust the area.'
    ],
    disclaimer: 'This area is the product of the lengths you type. It is not a survey, a listing measurement under ANSI Z765, or a material quote.',
    faqs: [
      {
        q: 'How many square feet is a room that is 12 feet 6 inches by 10 feet?',
        a: '125.00 square feet. The 6 inches are half a foot, so the length is 12.5 and 12.5 times 10 is 125. That is 13.89 square yards and 11.61 square metres. The square-metre factor is 0.09290304, from a foot of 0.3048 metres. The headline does not include an ordering allowance unless you type one, and a 10% allowance would change the ordering line to 137.50 square feet without changing the 125.00 headline.'
      },
      {
        q: 'How do I calculate the square footage of an L-shaped room without counting the corner twice?',
        a: 'Split the L into two rectangles that share an edge and do not overlap, then enter the second rectangle in the extra length and width. A 20 by 15 foot piece plus an 8 by 6 foot piece is 348.00 square feet, 38.67 square yards, and 32.33 square metres. The bounding box, 20 by 21, is 420 square feet and includes empty space. A wing measured along the full 20 foot wall counts part of the main room a second time.'
      },
      {
        q: 'What is 120 square feet in square yards and square metres?',
        a: 'A 10 by 12 foot floor is 120.00 square feet, 13.33 square yards, and 11.15 square metres. Square yards are the area divided by 9. Square metres use 0.09290304 square metres per square foot. With 10% extra the ordering area is 132.00 square feet. The floor tile page starts from that same 120, and from the 132 after waste, and then counts tiles. This page does not.'
      },
      {
        q: 'Can I type 18 inches instead of converting them to a foot and a half?',
        a: 'Yes. Inches are divided by 12 and added to the foot count, including when they exceed 12. A 10 foot side plus 18 inches is 11.5 feet. A 10 foot by 10 foot room with that extra on the length is 115.00 square feet, 12.78 square yards, and 10.68 square metres. The inch fields accept 0 through 120. A negative inch is rejected. You can still convert first and type 11.5 feet with 0 inches. The area is the same.'
      },
      {
        q: 'Does this square footage calculator follow real-estate finished-area rules?',
        a: 'No. It multiplies the rectangles you enter. Listing standards such as ANSI Z765 decide which spaces count as finished square footage, how stairs are treated, and how below-grade area is reported. A garage or a porch can have an area on this page and still be excluded from a listing total. Measure the floor you mean, and treat the headline as that measurement rather than as an appraisal.'
      }
    ],
    relatedLinks: [
      { slug: 'floor-tile-calculator', label: 'Floor tile calculator', note: 'The 10 by 12 foot floor is 120 square feet here and 130 tiles there, once a 1/8 inch joint and 10% waste are included.' },
      { slug: 'room-paint-calculator', label: 'Room paint calculator', note: 'Gallons from wall height, openings, and coats. A floor area is not a wall area, and this page has no ceiling height.' },
      { slug: 'concrete-slab-calculator', label: 'Concrete slab calculator', note: 'Cubic yards and bags from a thickness in inches. Square feet are only the start of that volume.' },
      { slug: 'length-converter', label: 'Length converter from meters', note: 'Metres to feet for one length. It does not multiply two sides, and its displayed foot factor is a rounded 3.28084 rather than this page’s exact 0.3048 metre foot.' }
    ]
  }
};
