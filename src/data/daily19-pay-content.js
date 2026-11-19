import { daily19Page as page, daily19Run } from './daily19-page.js';

const run = (slug, overrides = {}) => daily19Run(slug, overrides);

function line(result, prefix) {
  return result.details.find((item) => item.startsWith(prefix));
}

const federalNote = 'Federal income tax on $65,000 single with no 401(k) is $5,620.00. Social Security is $4,030.00 and Medicare is $942.50. Those lines match the other single $65,000 paychecks on this site. The state line is the only part that changes.';

export const daily19PayContent = {
  'iowa-paycheck-calculator': page({
    slug: 'iowa-paycheck-calculator',
    title: 'Iowa Paycheck Calculator 2026 (3.80% Withholding) | ClearCalc',
    h1: 'Iowa Paycheck Calculator for 2026',
    description: 'Iowa paycheck calculator for 2026 take-home pay. The Department of Revenue withholding formula uses 3.80% after a $13,000, $19,500, or $26,000 deduction. A biweekly wage of $2,100 on column A with a $40 allowance is $59.26 of Iowa tax.',
    intro: [
      'This Iowa paycheck calculator estimates 2026 take-home pay after federal income tax, Iowa withholding, Social Security, and Medicare. Iowa’s figure is the four-step formula the Department of Revenue published for wages paid beginning 1 January 2026. The rate is 3.80%. The deduction depends on the marital column on a 2024 or later IA W-4.',
      'Column A, the sample, is “Other” or married filing jointly when the spouse also has earned income. The annual deduction is $13,000, which is $500 on a biweekly paycheck. Column C, married with a spouse who has no earned income, uses $26,000. Head of household uses $19,500. Those amounts are not the federal standard deduction. Federal tax is computed separately.',
      'The department’s own biweekly example is the arithmetic check. Wages of $2,100, column A, and a $40 allowance produce $59.26 of Iowa tax for that paycheck. This page reproduces that period tax and then multiplies it by the number of paychecks for the annual line. An extra amount written on the IA W-4 is not a field.'
    ],
    steps: [
      'Enter annual gross wages. The sample, 65000, is the year. The publication example is $2,100 every two weeks, which is $54,600 for the year.',
      'Choose the IA W-4 column. Column A is the $13,000 deduction. Column C is $26,000. Head of household is $19,500.',
      'Choose the pay frequency, enter a traditional 401(k) or leave 0, and enter the dollar allowance from the IA W-4. Leave the allowance at 0 if the form shows none.',
      'Press Calculate. The headline is one paycheck. The Iowa line is the annual total of the period tax.'
    ],
    howHeading: 'How the 2026 Iowa withholding formula runs',
    howItWorks: [
      federalNote,
      'Iowa subtracts the period deduction from the period wage, multiplies the remainder by 3.80%, then subtracts the annual allowance divided by the number of pay periods. On the publication example the period wage is $2,100, the deduction is $500, 3.80% of $1,600 is $60.80, and $40 divided by 26 is $1.54. The period tax rounds to $59.26. A traditional 401(k) is removed before both the federal tax and this Iowa wage. It is not removed from FICA.'
    ],
    formula: 'T1 = period wage − period deduction\nT2 = T1 × 3.80%\nT3 = T2 − (allowance ÷ pay periods)\nPeriod tax = T3, not below zero\nAnnual Iowa tax = period tax × pay periods\nPaycheck = (wages − federal income tax − Social Security − Medicare − Additional Medicare Tax − Iowa tax − 401(k)) ÷ paychecks',
    formulaNotes: [
      'Period deductions for a 2024 or later IA W-4 are $250, $500, $541.67, and $1,083.33 on column A for weekly, biweekly, semimonthly, and monthly pay. Column C is double those amounts. Head of household is $375, $750, $812.50, and $1,625.',
      'The formula rounds the 3.80% product to the cent, subtracts the allowance share, and rounds again. A negative result is withheld as zero. Employees still on a 2023 or earlier IA W-4 use a $40-per-allowance rule this form does not switch to. Type the dollar allowance the 2026 instructions would use.'
    ],
    examplesHeading: 'Worked 2026 Iowa paycheck examples',
    samples: [
      { title: '$65,000, column A, no allowance', overrides: {}, blurb: 'The comparison wage used on the other single paychecks. Column A takes the $13,000 deduction. The allowance box is 0.' },
      { title: 'Publication example, $2,100 biweekly and a $40 allowance', overrides: { salary: 54600, periods: 26, allowance: 40 }, blurb: 'Iowa Department of Revenue example 1. Biweekly wages are $2,100, the column is Other, and the allowance is $40. Period tax is $59.26.' },
      { title: '$65,000, column C, spouse has no earned income', overrides: { status: 2 }, blurb: 'The $26,000 deduction and the federal joint standard deduction, both applied to this one wage. Use it only when the spouse has no earned income.' }
    ],
    table: { heading: 'Iowa results on this page', caption: 'Each headline is this calculator. The $54,600 row is the publication’s $2,100 biweekly wage.', headers: ['Case', 'Headline'] },
    limitsHeading: 'What this Iowa estimate leaves out',
    limits: [
      'An additional withholding amount requested on the IA W-4 is not added. School district surtax and any local income tax are not subtracted. Iowa withholding here is the state formula only.',
      'A 2023 or earlier IA W-4 counts allowances at $40 each. This page expects the dollar allowance from a 2024 or later form. Typing 40 reproduces the publication’s $40 example. Typing 1 does not mean one old-style allowance.',
      'Head of household uses Iowa’s $19,500 deduction and the federal single brackets. The federal head-of-household standard deduction is not in this form. A spouse’s wages are not combined on the joint column.',
      'The result is an annual estimate for a full-year resident whose income is this wage. It does not file an Iowa return and it is not the wage-bracket table.'
    ],
    disclaimer: 'This Iowa paycheck figure is general information for a wage earner, not an Iowa return and not tax advice. The Department of Revenue assesses the tax due.',
    faqs: [
      { q: 'What Iowa tax does the 2026 formula give on $2,100 biweekly?', a: `The Department of Revenue example is $59.26 for the paycheck: column A, a $40 allowance, and no extra withholding. On this page the annual Iowa line for that wage is ${line(run('iowa-paycheck-calculator', { salary: 54600, allowance: 40 }), 'Iowa income tax')?.replace('Iowa income tax: ', '')}.` },
      { q: 'Which Iowa deduction is $13,000 in 2026?', a: 'Column A on a 2024 or later IA W-4: Other, or married filing jointly when the spouse has earned income, or a missing marital status. Married with a spouse who has no earned income is $26,000. Head of household is $19,500.' },
      { q: 'Does the Iowa paycheck calculator use 3.80% on the whole wage?', a: `No. The 3.80% applies after the period deduction, and the allowance is subtracted from that tax. On $65,000, column A, with no allowance, ${line(run('iowa-paycheck-calculator'), 'Iowa income tax')} and the headline is ${run('iowa-paycheck-calculator').headline}.` },
      { q: 'Does Iowa add a local income tax on this paycheck?', a: 'Not on this page. The state 3.80% formula is the only Iowa income tax subtracted. A school district surtax is outside the withholding formula used here.' }
    ],
    relatedLinks: [
      { slug: 'georgia-paycheck-calculator', label: 'Georgia paycheck calculator for 2026', note: 'A 4.99% tax after a $15,000 standard deduction. At $65,000 single, Georgia tax is $2,495.00.' },
      { slug: 'kansas-paycheck-calculator', label: 'Kansas paycheck calculator for 2026', note: 'The KW-100 allowance is $9,160 single, then 5.2% and 5.58%. Not Iowa’s 3.80%.' },
      { slug: 'us-federal-income-tax-calculator', label: '2026 federal income tax calculator', note: 'At $65,000 single the federal income tax is $5,620.00 before Iowa tax and FICA.' },
      { slug: 'hourly-to-salary-calculator', label: 'Hourly to salary calculator', note: 'Turn an hourly rate into the annual wage this Iowa page expects.' }
    ]
  }),
  'utah-paycheck-calculator': page({
    slug: 'utah-paycheck-calculator',
    title: 'Utah Paycheck Calculator 2026 (4.45% from June) | ClearCalc',
    h1: 'Utah Paycheck Calculator for 2026',
    description: 'Utah paycheck calculator for 2026 take-home pay. Publication 14 Rev. 4/26 withholds 4.45% and phases out a base allowance, for pay periods beginning on or after 1 June 2026. At $65,000 single the allowance is fully phased out.',
    intro: [
      'This Utah paycheck calculator follows Publication 14 from the Utah State Tax Commission, revision 4/26. The schedules apply to pay periods beginning on or after 1 June 2026. The rate is 4.45% of Utah taxable wages. A base allowance is then subtracted, and that allowance shrinks by 1.3% of wages above a threshold that depends on the pay period and on single or married status.',
      'S.B. 60 set the income-tax rate at 4.45% retroactive to 1 January 2026. Withholding tables before June still used 4.50%. This page does not blend the two rates. A stub from January through May can show the older withholding. The return for the year uses 4.45%.',
      'Utah reads the federal W-4. There is no separate Utah allowance count on this form. The sample is $65,000 single, paid every two weeks. At that wage the biweekly base allowance of $19 is fully phased out, so the period tax is 4.45% of the period wage.'
    ],
    steps: [
      'Enter annual gross wages. 65000 means $65,000 for the year.',
      'Choose single or married, matching the federal W-4 status Utah uses. Married applies the joint federal standard deduction to this one wage.',
      'Choose the pay frequency and enter a traditional 401(k) deferral, or leave 0. The deferral comes out of the wage before the 4.45% multiplication.',
      'Press Calculate. The headline is one paycheck after federal tax, Utah tax, Social Security, Medicare, and the deferral.'
    ],
    howHeading: 'How the June 2026 Utah schedule is applied',
    howItWorks: [
      federalNote,
      'The calculator divides the annual wage by the number of paychecks and uses the Publication 14 schedule for that frequency, rather than scaling the annual allowance. Biweekly single starts with a $19 allowance and a $360 threshold. Married biweekly starts with $37 and $719. Weekly, semimonthly, and monthly use their own published dollar amounts, which are rounded and do not scale perfectly from the annual $485 and $970 allowances.'
    ],
    formula: 'Period tax = max(0, wages × 4.45% − allowance)\nAllowance = max(0, base − 1.3% × max(0, wages − threshold))\nBiweekly single: base $19, threshold $360\nBiweekly married: base $37, threshold $719\nAnnual Utah tax = period tax × pay periods',
    formulaNotes: [
      'Weekly single uses a $9 base and a $180 threshold. Semimonthly single uses $20 and $390. Monthly single uses $40 and $779. The married column is the paired figure in the same Publication 14 schedule.',
      'Pay periods that began before 1 June 2026 were withheld at 4.50% under the previous guide. This page is the 4.45% revision only.'
    ],
    examplesHeading: 'Worked 2026 Utah paycheck examples',
    samples: [
      { title: '$65,000 single, allowance phased out', overrides: {}, blurb: 'Biweekly wages are $2,500. The $19 allowance is gone because wages sit far above $360. Period tax is 4.45% of $2,500.' },
      { title: '$26,000 single, allowance still partly there', overrides: { salary: 26000 }, blurb: 'Biweekly wages are $1,000. The allowance is $19 minus 1.3% of the $640 above $360, which leaves $10.68. Period tax is $33.82.' },
      { title: '$65,000 married', overrides: { status: 2 }, blurb: 'The married biweekly schedule and the federal joint standard deduction, both on this one wage. A spouse’s wages are not added.' }
    ],
    table: { heading: 'Utah headlines', caption: 'Each headline is this calculator. The $26,000 row is where the base allowance still reduces the 4.45% tax.', headers: ['Case', 'Headline'] },
    limitsHeading: 'What this Utah estimate leaves out',
    limits: [
      'Stubs for pay periods that began before 1 June 2026 can still show 4.50% withholding. This page does not reconstruct that earlier table.',
      'Utah has no city income tax on this form. A second job and a spouse’s wages are not combined. The married schedule applies the married allowance to the one wage you type.',
      'Federal tax for the single column uses the single standard deduction. There is no federal head-of-household column. A Roth amount typed as a traditional 401(k) is treated as pre-tax.',
      'The result is an estimate of withholding, not the Utah return. Credits on the return are not applied.'
    ],
    disclaimer: 'This Utah paycheck figure is general information, not a Utah return and not tax advice. The State Tax Commission assesses the tax due.',
    faqs: [
      { q: 'What Utah rate does Publication 14 use after 1 June 2026?', a: `4.45%. On $65,000 single, paid every two weeks, the allowance is fully phased out. ${line(run('utah-paycheck-calculator'), 'Utah income tax')} and the headline is ${run('utah-paycheck-calculator').headline}.` },
      { q: 'Why is Utah tax on $26,000 not simply 4.45%?', a: 'The biweekly single schedule still has part of the $19 base allowance. On a $1,000 paycheck the allowance left is $10.68 and the period tax is $33.82. The annual Utah line is that amount times 26.' },
      { q: 'Does Utah use a state allowance count like a W-4 exemption?', a: 'Not on this page. Publication 14 builds the allowance from filing status and the wage. You do not type a number of Utah exemptions.' },
      { q: 'Did Utah withhold 4.45% for the whole of 2026?', a: 'The income-tax rate is 4.45% for the 2026 year. The withholding schedules in Publication 14 Rev. 4/26 apply to pay periods beginning on or after 1 June 2026. Earlier pay periods in 2026 used 4.50%.' }
    ],
    relatedLinks: [
      { slug: 'iowa-paycheck-calculator', label: 'Iowa paycheck calculator for 2026', note: 'A 3.80% tax after a $13,000, $19,500, or $26,000 deduction. Not Utah’s 4.45% schedule.' },
      { slug: 'arizona-paycheck-calculator', label: 'Arizona paycheck calculator for 2026', note: 'A flat 2.5% after a standard deduction. Utah phases out an allowance instead.' },
      { slug: 'us-federal-income-tax-calculator', label: '2026 federal income tax calculator', note: 'The federal line at $65,000 single is $5,620.00 before Utah tax and FICA.' },
      { slug: 'salary-to-hourly-calculator', label: 'Salary to hourly calculator', note: 'Divide the annual wage after you have the Utah paycheck, or build the wage first.' }
    ]
  }),
  'oklahoma-paycheck-calculator': page({
    slug: 'oklahoma-paycheck-calculator',
    title: 'Oklahoma Paycheck Calculator 2026 (OW-2 Percentage Method) | ClearCalc',
    h1: 'Oklahoma Paycheck Calculator for 2026',
    description: 'Oklahoma paycheck calculator for 2026. Packet OW-2 uses 0%, 2.50%, 3.50%, and 4.50% after a $1,000 allowance, then rounds the period tax to the nearest dollar. The booklet’s $1,825 semimonthly married example rounds to $37.',
    intro: [
      'This Oklahoma paycheck calculator uses the 2026 percentage method in Packet OW-2 from the Oklahoma Tax Commission. Each allowance is $1,000 a year, divided by the number of pay periods and subtracted from the period wage. The net wage is then run through a table whose rates are 0%, 2.50%, 3.50%, and 4.50%. The result is rounded to the nearest dollar. Fifty cents rounds up.',
      'The booklet’s worked example is the check. A married employee paid $1,825 semimonthly and claiming two allowances has $83.34 of allowances, a net wage of $1,741.66, and tax of $36.67 before rounding. The amount withheld is $37. This page reproduces that dollar.',
      'Single and “married, but withhold at higher Single rate” use the single table. The married table has wider zero and low-rate bands. Two working spouses who both use the married table often under-withhold. Federal tax, Social Security, and Medicare are subtracted as well.'
    ],
    steps: [
      'Enter annual gross wages. The booklet example is $1,825 twice a month, which is $43,800 for the year.',
      'Choose the single table or the married table. Married withholding at the single rate stays on the single table.',
      'Choose the pay frequency, enter a traditional 401(k) or leave 0, and enter the number of Oklahoma allowances. One allowance is $1,000 a year.',
      'Press Calculate. The headline is one paycheck. The Oklahoma annual line is the rounded period tax times the number of paychecks.'
    ],
    howHeading: 'How the 2026 Oklahoma percentage method rounds',
    howItWorks: [
      federalNote,
      'On $65,000 single with one allowance, the biweekly allowance is $38.46 and the net period wage is $2,461.54. The percentage method produces $91.52, which rounds to $92. The annual Oklahoma tax is $92 times 26. The unrounded cent is shown so it can be compared with the booklet’s $36.67 before that example rounds to $37.'
    ],
    formula: 'Allowance per period = $1,000 ÷ pay periods\nNet wage = period wage − allowances × allowance per period\nTax from the single or married percentage table\nWithholding = that tax rounded to the nearest dollar\nAnnual Oklahoma tax = rounded withholding × pay periods',
    formulaNotes: [
      'Published allowance amounts are $19.23 weekly, $38.46 biweekly, $41.67 semimonthly, and $83.33 monthly. The tables in Packet OW-2 are used after that subtraction.',
      'The single and married tables are different. Biweekly single is zero through $388, 2.50% to $433, 3.50% to $521, and 4.50% above $521. Biweekly married is zero through $777, then $865, then $1,042.'
    ],
    examplesHeading: 'Worked 2026 Oklahoma paycheck examples',
    samples: [
      { title: '$65,000 single, one allowance', overrides: {}, blurb: 'The comparison wage. One allowance is $38.46 on a biweekly paycheck. The percentage-method tax rounds from $91.52 to $92.' },
      { title: 'OW-2 example, $1,825 semimonthly, married, two allowances', overrides: { salary: 43800, periods: 24, status: 2, allowances: 2 }, blurb: 'Packet OW-2’s percentage-method example. The unrounded tax is $36.67 and the withholding is $37.00.' },
      { title: '$65,000 married, one allowance', overrides: { status: 2 }, blurb: 'The married table and the federal joint standard deduction on this one wage. A working spouse is not included.' }
    ],
    table: { heading: 'Oklahoma headlines', caption: 'Each headline is this calculator. The $43,800 row is the booklet’s semimonthly example.', headers: ['Case', 'Headline'] },
    limitsHeading: 'What this Oklahoma estimate leaves out',
    limits: [
      'The wage-bracket tables can differ by about a dollar from the percentage method. This page uses the percentage method and the required nearest-dollar rounding.',
      'Married taxpayers are taxed on combined income. This form does not add a spouse’s wage. Choosing the single table is the booklet’s option when both spouses work and the OK-W-4 says to withhold at the single rate.',
      'A traditional 401(k) reduces the wage before the allowance. A Roth amount in that box is treated as pre-tax. Catch-up contributions above $24,500 are cut off.',
      'The result is not an Oklahoma return. Credits, itemizing, and non-wage income are not applied.'
    ],
    disclaimer: 'This Oklahoma paycheck figure is general information, not an Oklahoma return and not tax advice. The Tax Commission assesses the tax due.',
    faqs: [
      { q: 'Why does the Oklahoma example withhold $37 instead of $36.67?', a: 'Packet OW-2 says to round the percentage method to the nearest dollar. The semimonthly married example with two allowances computes $36.67 and withholds $37. This page does the same rounding on every frequency it offers.' },
      { q: 'How much is one Oklahoma withholding allowance in 2026?', a: '$1,000 for the year, or $38.46 on a biweekly paycheck. On $65,000 single with one allowance the rounded period tax is $92 and the headline is the two-week take-home after federal tax and FICA as well.' },
      { q: 'What are the 2026 Oklahoma withholding rates?', a: '0%, 2.50%, 3.50%, and 4.50%, applied to wages after allowances. The top rate is not a flat 4.50% on the whole wage. The zero band is wider on the married table than on the single table.' },
      { q: 'Does this Oklahoma page subtract a city income tax?', a: 'No. The OW-2 state percentage method is the only Oklahoma income tax on the page. Federal income tax and FICA are separate lines.' }
    ],
    relatedLinks: [
      { slug: 'kansas-paycheck-calculator', label: 'Kansas paycheck calculator for 2026', note: 'A $9,160 allowance and rates of 5.2% and 5.58%. Not Oklahoma’s four-rate table.' },
      { slug: 'texas-paycheck-calculator', label: 'Texas paycheck calculator for 2026', note: 'No state income tax. The same federal and FICA lines, with a state line of zero.' },
      { slug: 'us-federal-income-tax-calculator', label: '2026 federal income tax calculator', note: 'Federal income tax at $65,000 single is $5,620.00 before the Oklahoma line.' },
      { slug: 'hourly-to-salary-calculator', label: 'Hourly to salary calculator', note: 'Build the annual wage, then come back for the Oklahoma withholding.' }
    ]
  }),
  'louisiana-paycheck-calculator': page({
    slug: 'louisiana-paycheck-calculator',
    title: 'Louisiana Paycheck Calculator 2026 (3.09% Withholding) | ClearCalc',
    h1: 'Louisiana Paycheck Calculator for 2026',
    description: 'Louisiana paycheck calculator for 2026. R-1306 withholds 3.09% after a $12,875 or $25,750 standard deduction. The booklet’s weekly example of $700 with the single deduction is $13.98.',
    intro: [
      'This Louisiana paycheck calculator follows the computer formula in Department of Revenue form R-1306, effective on or after 1 January 2026. Withholding is 3.09% of the period wage after that period’s share of the standard deduction. Single and married filing separately use $12,875. Married filing jointly, a qualifying surviving spouse, and head of household use $25,750.',
      'The booklet’s first example is a weekly wage of $700 with the $12,875 deduction. The period share of the deduction is $247.60, and 3.09% of the remaining $452.40 is $13.98. The second example, $4,600 biweekly with the $25,750 deduction, is $111.54. This page uses that same order of rounding.',
      'Revenue Information Bulletin 26-005 says the withholding deductions used CPI-U information available on 1 December 2025, and that the standard deduction on the 2026 return can differ slightly. Federal income tax, Social Security, and Medicare come off as well. The sample comparison wage is $65,000 single.'
    ],
    steps: [
      'Enter annual gross wages. The booklet’s weekly example is $700, which is $36,400 for the year.',
      'Choose the $12,875 deduction or the $25,750 deduction. Head of household uses the larger one on the Louisiana formula.',
      'Choose the pay frequency and enter a traditional 401(k) deferral, or leave 0.',
      'Press Calculate. The headline is one paycheck. Louisiana tax is the period amount times the number of paychecks.'
    ],
    howHeading: 'How the 2026 Louisiana 3.09% formula is rounded',
    howItWorks: [
      federalNote,
      'The annual deduction is divided by the number of pay periods and rounded to the cent before it is subtracted. The 3.09% tax on what remains is rounded to the cent. If the deduction is larger than the period wage, the tax is zero. A traditional 401(k) reduces the wage first. It does not reduce Social Security or Medicare.'
    ],
    formula: 'Period deduction = standard deduction ÷ pay periods, rounded to the cent\nPeriod tax = max(0, period wage − period deduction) × 3.09%, rounded to the cent\nSingle or married separate: standard deduction $12,875\nJoint, surviving spouse, or head of household: standard deduction $25,750\nAnnual Louisiana tax = period tax × pay periods',
    formulaNotes: [
      'R-1306’s weekly example divides $12,875 by 52 to get $247.60, then multiplies $452.40 by 0.0309 to get $13.98. The biweekly joint example divides $25,750 by 26 to get $990.38 and withholds $111.54 on a $4,600 wage.',
      'The withholding deduction is the figure employers were told to use. The deduction allowed on the 2026 income-tax return can be a few dollars different once the final CPI-U is applied.'
    ],
    examplesHeading: 'Worked 2026 Louisiana paycheck examples',
    samples: [
      { title: '$65,000 single, $12,875 deduction', overrides: {}, blurb: 'The comparison wage. The single deduction is spread across 26 paychecks and 3.09% is applied to the rest.' },
      { title: 'R-1306 example, $700 a week', overrides: { salary: 36400, periods: 52 }, blurb: 'Example 1 in R-1306. The period deduction is $247.60 and the withholding is $13.98.' },
      { title: '$65,000 with the $25,750 deduction', overrides: { status: 2 }, blurb: 'Married filing jointly, a qualifying surviving spouse, or head of household. Federal tax on this row uses the joint standard deduction for the one wage, which is wider than a federal head-of-household deduction.' }
    ],
    table: { heading: 'Louisiana headlines', caption: 'Each headline is this calculator. The $36,400 row is the booklet’s $700 weekly wage.', headers: ['Case', 'Headline'] },
    limitsHeading: 'What this Louisiana estimate leaves out',
    limits: [
      'The standard deduction on the 2026 return may not equal the withholding figure of $12,875 or $25,750. This page stays on the withholding formula.',
      'Head of household uses Louisiana’s $25,750 deduction and, on this form, the federal joint standard deduction. That federal deduction is too large for a real head-of-household return. The Louisiana math is the part the formula specifies.',
      'No parish income tax is subtracted. A second job is not combined. A Roth deferral typed as traditional is treated as pre-tax.',
      'The result does not file a Louisiana return and it is not the wage-bracket table. The table and the formula are meant to match. Cents can still differ.'
    ],
    disclaimer: 'This Louisiana paycheck figure is general information, not a Louisiana return and not tax advice. The Department of Revenue assesses the tax due.',
    faqs: [
      { q: 'What is Louisiana withholding on $700 a week in 2026?', a: 'R-1306 example 1 is $13.98. The wage uses the $12,875 single deduction, which is $247.60 for a weekly paycheck, and the rate is 3.09% of the remaining $452.40.' },
      { q: 'What are the two Louisiana standard deductions for 2026 withholding?', a: '$12,875 for single and married filing separately. $25,750 for married filing jointly, a qualifying surviving spouse, and head of household. On $65,000 single the headline is the two-week take-home after the smaller deduction, federal tax, and FICA.' },
      { q: 'Is the Louisiana withholding rate 3.09% of the whole paycheck?', a: 'Only after the period share of the standard deduction. If that share is larger than the paycheck, withholding is zero. The rate is not applied to the gross wage and then reduced.' },
      { q: 'Does the Louisiana paycheck calculator include a parish tax?', a: 'No. The 3.09% state formula is the only Louisiana income tax subtracted. Federal income tax and FICA are the other subtractions.' }
    ],
    relatedLinks: [
      { slug: 'mississippi-paycheck-calculator', label: 'Mississippi paycheck calculator for 2026', note: '4% above $10,000 of taxable income, after an exemption and a different standard deduction.' },
      { slug: 'alabama-paycheck-calculator', label: 'Alabama paycheck calculator for 2026', note: 'Alabama deducts federal income tax before its own rates. Louisiana does not.' },
      { slug: 'us-federal-income-tax-calculator', label: '2026 federal income tax calculator', note: 'The $5,620.00 federal line at $65,000 single is computed before Louisiana tax.' },
      { slug: 'hourly-to-salary-calculator', label: 'Hourly to salary calculator', note: 'An hourly rate becomes the annual wage this page divides into paychecks.' }
    ]
  }),
  'kansas-paycheck-calculator': page({
    slug: 'kansas-paycheck-calculator',
    title: 'Kansas Paycheck Calculator 2026 (KW-100 Percentage Method) | ClearCalc',
    h1: 'Kansas Paycheck Calculator for 2026',
    description: 'Kansas paycheck calculator for 2026. The KW-100 annual percentage method subtracts a $9,160 or $18,320 allowance, then applies 5.2% and 5.58%. A $65,000 single wage with no dependents uses the single table.',
    intro: [
      'This Kansas paycheck calculator uses the annual percentage method in the Kansas Department of Revenue KW-100 guide. The allowance is subtracted first: $9,160 for single, $18,320 for married filing jointly, and an extra $2,320 for head of household. Each dependent adds another $2,320. The wage that remains is taxed at 0% through a small band, then 5.2%, then 5.58%.',
      'The annual single table is $0 through $3,605, 5.2% of the excess over $3,605 through $26,605, and $1,196 plus 5.58% of the excess over $26,605. The married table is $0 through $8,240, 5.2% through $54,240, and $2,392 plus 5.58% above that. Those dollar amounts are exact on the annual table: 5.2% of the $23,000 single middle band is $1,196.',
      'KW-100 has been the withholding guide for wages paid on and after 1 July 2024, and the department was still publishing it for 2026. Weekly and biweekly tables round the same thresholds, so a payroll stub can differ by cents from this annual calculation. Federal tax and FICA are subtracted too.'
    ],
    steps: [
      'Enter annual gross wages. The sample is 65000.',
      'Choose single, married filing jointly, or head of household. Head of household uses the single rate table plus the extra $2,320 allowance.',
      'Choose the pay frequency, enter a traditional 401(k) or leave 0, and enter dependent allowances. Each one is $2,320.',
      'Press Calculate. The headline is one paycheck. Kansas tax is the annual table, not a rounded wage-bracket cell.'
    ],
    howHeading: 'How the Kansas annual percentage table is applied',
    howItWorks: [
      federalNote,
      'On $65,000 single with no dependents, the allowance is $9,160 and the wage left is $55,840. That sits in the 5.58% band. Tax is $1,196 plus 5.58% of the excess over $26,605. A dependent would remove another $2,320 before that table. A traditional 401(k) reduces the wage before the allowance. FICA does not fall.'
    ],
    formula: 'Allowance = $9,160 single, $18,320 joint, or $11,480 head of household, plus $2,320 × dependents\nNet wage = wages after the 401(k) − allowance\nSingle tax = 0% to $3,605, 5.2% to $26,605, then $1,196 + 5.58% of the excess over $26,605\nMarried tax = 0% to $8,240, 5.2% to $54,240, then $2,392 + 5.58% of the excess over $54,240',
    formulaNotes: [
      'The $1,196 and $2,392 anchors are 5.2% of the width of the middle band. The calculator uses them so the top band matches the annual table instead of recomputing a rounded weekly threshold.',
      'Head of household uses the single rate table. KW-100 says the single percentage table includes head of household. The extra allowance is separate from a dependent allowance.'
    ],
    examplesHeading: 'Worked 2026 Kansas paycheck examples',
    samples: [
      { title: '$65,000 single, no dependents', overrides: {}, blurb: 'Allowance $9,160. The net wage is in the 5.58% band of the annual single table. Federal tax uses the single brackets.' },
      { title: '$65,000 married filing jointly', overrides: { status: 2 }, blurb: 'Allowance $18,320 and the married annual table. Federal tax uses the joint standard deduction on this one wage.' },
      { title: '$65,000 single, one dependent', overrides: { dependents: 1 }, blurb: 'The allowance is $9,160 plus $2,320. The rate table does not change. Only the wage that enters it changes.' }
    ],
    table: { heading: 'Kansas headlines', caption: 'Each headline is this calculator for that allowance. The rate table is annual.', headers: ['Case', 'Headline'] },
    limitsHeading: 'What this Kansas estimate leaves out',
    limits: [
      'Weekly and biweekly percentage tables round the annual thresholds. A wage-bracket cell can differ by cents from the annual tax divided by the number of paychecks.',
      'Federal tax for head of household uses the single standard deduction. Kansas still adds the $2,320 head-of-household allowance and uses the single rate table. The federal head-of-household deduction is not modeled.',
      'No Kansas local income tax is subtracted. A spouse’s wages are not added on the joint column. A Roth deferral typed as traditional is treated as pre-tax.',
      'The result is withholding math, not a Kansas return. Credits and itemized deductions are not applied.'
    ],
    disclaimer: 'This Kansas paycheck figure is general information, not a Kansas return and not tax advice. The Department of Revenue assesses the tax due.',
    faqs: [
      { q: 'What allowance does the Kansas paycheck calculator subtract in 2026?', a: `$9,160 single, $18,320 married filing jointly, and an extra $2,320 for head of household. Each dependent adds $2,320. On $65,000 single with no dependents, ${line(run('kansas-paycheck-calculator'), 'Kansas income tax')} and the headline is ${run('kansas-paycheck-calculator').headline}.` },
      { q: 'What are the Kansas withholding rates after the allowance?', a: 'Zero through $3,605 single or $8,240 married, then 5.2%, then 5.58% above $26,605 single or $54,240 married. The 5.58% band starts with $1,196 or $2,392 already computed on the middle band.' },
      { q: 'Does head of household use the married Kansas table?', a: 'No. KW-100 puts head of household on the single percentage table and adds a $2,320 allowance on top of the $9,160 single allowance. Dependents are another $2,320 each.' },
      { q: 'Why might a Kansas stub differ by a few cents?', a: 'The weekly and biweekly tables round the thresholds in the annual table. This page uses annual Table 7 and divides take-home pay. It does not reproduce every wage-bracket cell.' }
    ],
    relatedLinks: [
      { slug: 'missouri-paycheck-calculator', label: 'Missouri paycheck calculator for 2026', note: 'A standard deduction of $16,100 or $32,200 and brackets that top out at 4.7%. Kansas uses 5.2% and 5.58%.' },
      { slug: 'oklahoma-paycheck-calculator', label: 'Oklahoma paycheck calculator for 2026', note: 'OW-2 rates of 0%, 2.50%, 3.50%, and 4.50% after a $1,000 allowance.' },
      { slug: 'us-federal-income-tax-calculator', label: '2026 federal income tax calculator', note: 'Federal income tax of $5,620.00 at $65,000 single, before the Kansas allowance.' },
      { slug: 'hourly-to-salary-calculator', label: 'Hourly to salary calculator', note: 'Convert an hourly rate into the annual wage the Kansas table expects.' }
    ]
  }),
  'mississippi-paycheck-calculator': page({
    slug: 'mississippi-paycheck-calculator',
    title: 'Mississippi Paycheck Calculator 2026 (4% above $10,000) | ClearCalc',
    h1: 'Mississippi Paycheck Calculator for 2026',
    description: 'Mississippi paycheck calculator for 2026. Taxable income above $10,000 is withheld at 4%, after the Form 89-350 exemption and the standard deduction. A $65,000 single wage with a $6,000 exemption uses the $2,300 deduction.',
    intro: [
      'This Mississippi paycheck calculator follows the Department of Revenue’s 2026 computer formula and the withholding booklet revised 13 January 2026. Annual wages are reduced by the exemption on Form 89-350 and by a standard deduction. The first $10,000 of what remains is taxed at 0%. The rest is taxed at 4%. The period withholding is that annual tax divided by the number of paychecks and rounded to the nearest dollar.',
      'The standard deduction is $2,300 for single, $4,600 for married when the spouse is not employed, $2,300 for married when both spouses are employed, and $3,400 for head of family. The usual exemptions are $6,000 single, $12,000 married, and $9,500 head of family. The exemption box is yours to type, because a married couple can split the $12,000 and because age, blindness, and dependents add $1,500 each.',
      'The sample is $65,000 single with the $6,000 exemption and the $2,300 deduction. Taxable income is $56,700. Tax is 4% of the $46,700 above $10,000, which is $1,868 before the paycheck is rounded to the nearest dollar. Federal tax and FICA are subtracted as well. This is an estimate, not an employer payroll system.'
    ],
    steps: [
      'Enter annual gross wages. The sample is 65000.',
      'Choose the filing column, which sets the standard deduction. It does not set the exemption. Type the exemption from Form 89-350.',
      'Choose the pay frequency and enter a traditional 401(k) or leave 0. The deferral reduces the wage before the exemption.',
      'Press Calculate. The headline is one paycheck. The Mississippi line uses the dollar-rounded period amount times the number of paychecks.'
    ],
    howHeading: 'How the 2026 Mississippi 4% formula is applied',
    howItWorks: [
      federalNote,
      'Single taxable income is wages, after any 401(k), minus the exemption and $2,300. The 4% applies only above $10,000. The booklet then says to round the pay-period withholding to the nearest dollar, including when wages run past the printed table and the employer annualizes. This page annualizes first, divides, and rounds that period amount. The unrounded annual formula is shown beside it.'
    ],
    formula: 'Taxable income = wages − exemption − standard deduction\nTax = 0% of the first $10,000, then 4% of the excess\nStandard deduction = $2,300 single, $4,600 married with the spouse not employed, $2,300 married with both employed, $3,400 head of family\nPeriod withholding = annual tax ÷ pay periods, rounded to the nearest dollar',
    formulaNotes: [
      'A $65,000 single wage with a $6,000 exemption and the $2,300 deduction has taxable income of $56,700 and formula tax of $1,868. Divided by 26, that is $71.85, which rounds to $72. The annual state-tax line becomes $1,872.',
      'Both-employed married filers use the $2,300 standard deduction, not $4,600. The booklet is explicit about that split. The $12,000 joint exemption is divided between the spouses in multiples of $500.'
    ],
    examplesHeading: 'Worked 2026 Mississippi paycheck examples',
    samples: [
      { title: '$65,000 single, $6,000 exemption', overrides: {}, blurb: 'Standard deduction $2,300. Formula tax is $1,868 and the rounded biweekly withholding is $72, so the annual line is $1,872.' },
      { title: '$65,000 married, spouse not employed, $12,000 exemption', overrides: { status: 2, exemption: 12000 }, blurb: 'Standard deduction $4,600 and the usual married exemption. Federal tax uses the joint standard deduction on this one wage.' },
      { title: '$65,000 head of family, $9,500 exemption', overrides: { status: 4, exemption: 9500 }, blurb: 'Standard deduction $3,400. The $9,500 exemption is the head-of-family amount, which already counts the one required dependent. Federal tax uses the single brackets.' }
    ],
    table: { heading: 'Mississippi headlines', caption: 'Each headline is this calculator. The exemption is typed. The column sets only the standard deduction.', headers: ['Case', 'Headline'] },
    limitsHeading: 'What this Mississippi estimate leaves out',
    limits: [
      'Age and blindness exemptions of $1,500, and extra dependents at $1,500, belong in the exemption you type. The form does not add them on its own. A single worker who qualifies types more than $6,000.',
      'Married couples who both work must split the $12,000 exemption. Each of them also uses the $2,300 standard deduction, not $4,600. Choosing the spouse-not-employed column for both jobs will understate the tax.',
      'Federal tax for head of family uses the single standard deduction. Mississippi’s own $3,400 deduction and $9,500 exemption are still applied. A spouse’s other wage is not added.',
      'No city income tax is subtracted. The result is not a Mississippi return. The wage-bracket tables round by brackets and can differ from this annual division by about a dollar.'
    ],
    disclaimer: 'This Mississippi paycheck figure is general information, not a Mississippi return and not tax advice. The Department of Revenue assesses the tax due.',
    faqs: [
      { q: 'What is the 2026 Mississippi withholding rate?', a: `0% on the first $10,000 of taxable income and 4% on the rest. On $65,000 single with a $6,000 exemption, the formula tax is $1,868.00 before pay-period rounding. The headline is ${run('mississippi-paycheck-calculator').headline}.` },
      { q: 'Why is Mississippi tax $1,872 on the sample when the formula is $1,868?', a: 'The withholding booklet rounds the amount for the pay period to the nearest dollar. $1,868 divided by 26 is $71.85, which rounds to $72. Twenty-six paychecks make $1,872. The page shows both numbers.' },
      { q: 'What standard deduction does a Mississippi couple use when both work?', a: '$2,300 for each spouse, not $4,600. The $4,600 deduction is for married filing when the spouse is not employed. The $12,000 exemption is divided between them.' },
      { q: 'Does the Mississippi paycheck calculator estimate a FICA tax that is different from other states?', a: 'No. Social Security is 6.2% up to the 2026 wage base of $184,500, and Medicare is 1.45%. On $65,000 those lines are $4,030.00 and $942.50, the same figures used on the other 2026 paycheck pages.' }
    ],
    relatedLinks: [
      { slug: 'louisiana-paycheck-calculator', label: 'Louisiana paycheck calculator for 2026', note: '3.09% after a $12,875 or $25,750 deduction. Not Mississippi’s 4% above $10,000.' },
      { slug: 'alabama-paycheck-calculator', label: 'Alabama paycheck calculator for 2026', note: 'Alabama deducts federal income tax before its 2%, 4%, and 5% rates. Mississippi does not deduct federal tax.' },
      { slug: 'us-federal-income-tax-calculator', label: '2026 federal income tax calculator', note: 'The federal line at $65,000 single is $5,620.00 before the Mississippi exemption.' },
      { slug: 'us-self-employment-tax-calculator', label: 'US self-employment tax calculator', note: 'Schedule SE on net profit. It is not this wage withholding and it is not Mississippi income tax.' }
    ]
  })
};
