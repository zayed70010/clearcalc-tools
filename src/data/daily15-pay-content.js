import { daily15Page as page, daily15Run } from './daily15-page.js';

const run = (slug, overrides = {}) => daily15Run(slug, overrides);

function line(result, prefix) {
  return result.details.find((item) => item.startsWith(prefix));
}

export const daily15PayContent = {
  'wisconsin-paycheck-calculator': page({
    slug: 'wisconsin-paycheck-calculator',
    title: 'Wisconsin Paycheck Calculator 2026 (W-166 Withholding) | ClearCalc',
    h1: 'Wisconsin Paycheck Calculator for 2026',
    description: 'Wisconsin paycheck calculator for 2026 take-home pay. A $65,000 single wage with one exemption uses the W-166 alternate method. Publication example: $18,200 and one exemption is $394.65 of Wisconsin tax.',
    intro: [
      'This Wisconsin paycheck calculator estimates 2026 take-home pay after federal income tax, Wisconsin withholding, Social Security, and Medicare. Wisconsin’s figure is the alternate method in Department of Revenue Publication W-166, the guide whose interpretations are current to 15 January 2026. The department’s withholding update of 30 October 2026 says those withholding rates had not changed.',
      'The method is not the income-tax return. Withholding uses 3.54%, 4.65%, 5.30%, and 7.65%. The return uses 3.50%, 4.40%, 5.30%, and 7.65%. A refund or a balance due can appear at filing because of that gap, and because exemptions, a second job, or other income are not on this form. The sample is $65,000, single, one exemption, paid every two weeks.',
      'W-166’s own first example is a check on the arithmetic. A single employee with annual wages of $18,200 and one $400 exemption has a deduction of $6,651.60 and Wisconsin tax of $394.65. The second example, $26,000 and three exemptions, is $745.78. A married biweekly case of $26,000 and three exemptions is $574.16. Those three figures are the publication’s, and this page reproduces the annual tax.'
    ],
    steps: [
      'Enter annual gross wages. The sample, 65000, is the year, not one paycheck.',
      'Choose the single or married withholding column. Married uses the married deduction formula and the federal joint standard deduction on this one wage.',
      'Choose a pay frequency, enter a traditional 401(k) deferral or leave 0, and enter Wisconsin withholding exemptions. One exemption is $400.',
      'Press Calculate. The headline is one paycheck. Wisconsin tax is the annual W-166 amount, not a line copied from the wage-bracket table.'
    ],
    howHeading: 'How the 2026 Wisconsin withholding method is applied',
    howItWorks: [
      'Federal income tax uses Revenue Procedure 2025-32. On $65,000 with no deferral, a single filer has $5,620.00 of federal income tax, $4,030.00 of Social Security, and $942.50 of Medicare. Social Security stops at the 2026 wage base of $184,500. Additional Medicare Tax of 0.9% starts above $200,000 of wages on this one-wage form.',
      'Wisconsin then subtracts the W-166 deduction and $400 for each exemption. On the sample the single deduction is $1,035.60, the exemption is $400, and the net wage is $63,564.40. Tax on that net wage is $3,061.39. The married column on the same wage uses a different deduction formula. A traditional 401(k) is removed before both the federal tax and this Wisconsin net wage. It is not removed from FICA.'
    ],
    formula: 'Single deduction = $6,702 if wages are under $17,780, $0 if wages are $73,630 or more, otherwise $6,702 − 12% of wages above $17,780.\nMarried deduction = $9,461 if wages are under $25,727, $0 if wages are $73,032 or more, otherwise $9,461 − 20% of wages above $25,727.\nNet wage = wages − deduction − exemptions × $400\nTax = 3.54% to $12,760, then 4.65% to $25,520, then 5.30% to $280,950, then 7.65%.\nPaycheck = (wages − federal income tax − Social Security − Medicare − Additional Medicare Tax − Wisconsin tax − 401(k)) ÷ paychecks',
    formulaNotes: [
      'The worked examples in W-166 round the annual tax to the cent and then divide by the number of pay periods. This page keeps the annual tax in cents and divides the annual take-home pay. A wage-bracket table can differ by cents from that division.',
      'The deduction formula reaches zero at the top of its range: $73,630 single and $73,032 married. Above those wages the only subtraction left is $400 per exemption.'
    ],
    examplesHeading: 'Worked 2026 Wisconsin paycheck examples',
    samples: [
      { title: '$65,000 single, one exemption', overrides: {}, blurb: 'The sample wage. Federal tax is the same $5,620.00 used on the other single $65,000 paychecks on this site. Wisconsin then applies the single W-166 deduction and one $400 exemption.' },
      { title: 'W-166 example, $18,200 and one exemption', overrides: { salary: 18200, periods: 52, exemptions: 1 }, blurb: 'Publication W-166, example 1. Annual wages are $350 × 52. The deduction is $6,651.60 and the annual Wisconsin tax is $394.65. The headline divides the full take-home pay by 52, so it is not the publication’s $7.59 withholding line by itself.' },
      { title: '$65,000 with a $6,500 traditional 401(k)', overrides: { deferral: 6500 }, blurb: 'The deferral reduces federal taxable income and the Wisconsin net wage. Social Security stays on the $65,000 of wages.' }
    ],
    table: { heading: 'Wisconsin results on this page', caption: 'Each headline is this calculator. The $18,200 row is the publication’s annual wage, not its weekly withholding line.', headers: ['Case', 'Headline'] },
    limitsHeading: 'What this Wisconsin estimate leaves out',
    limits: [
      'The return brackets are 3.50%, 4.40%, 5.30%, and 7.65%. This page deliberately stays on the withholding scale. Itemized deductions, the sliding standard deduction on the return, and credits are not applied.',
      'A traditional 401(k) reduces the Wisconsin net wage here. A Roth amount in that box is treated as pre-tax. Catch-up contributions above $24,500 are cut back. Pre-tax health premiums should already be missing from the wage you type.',
      'Wisconsin has no city income tax to add. A second job, a spouse’s wages, and non-wage income are not combined. The married column applies the married deduction and the federal joint standard deduction to the one wage you type.',
      'The calculator does not file a Wisconsin return and does not decide residency. Part-year wages need the Wisconsin portion only. Compare the annual tax with the stub if the question is what the employer withheld in one period.'
    ],
    disclaimer: 'This Wisconsin paycheck figure is general information for a wage earner, not a Wisconsin return and not tax advice. The Department of Revenue assesses the tax due.',
    faqs: [
      { q: 'Does the Wisconsin paycheck calculator use the return rates or the W-166 withholding rates?', a: `Withholding rates: 3.54%, 4.65%, 5.30%, and 7.65%. On $65,000 single with one exemption the Wisconsin tax line is ${line(run('wisconsin-paycheck-calculator'), 'Wisconsin income tax')?.replace('Wisconsin income tax: ', '')} and the headline is ${run('wisconsin-paycheck-calculator').headline}. The return’s 3.50% and 4.40% brackets are not used.` },
      { q: 'What is Wisconsin tax on the W-166 example of $18,200?', a: 'Annual Wisconsin tax is $394.65, the figure in example 1 of Publication W-166 for a single employee, one exemption, and $350 a week. $26,000 with three exemptions is $745.78. The married $26,000 example with three exemptions is $574.16.' },
      { q: 'How much is one Wisconsin withholding exemption worth?', a: '$400 subtracted from wages after the W-166 deduction. The sample uses one exemption. Exemptions are not the federal standard deduction, which is applied only on the federal line.' },
      { q: 'Does Wisconsin add a city income tax on this paycheck?', a: 'No. The state withholding method is the only state or local income tax on the page. A local occupational tax from another state does not belong on this result.' }
    ],
    relatedLinks: [
      { slug: 'georgia-paycheck-calculator', label: 'Georgia paycheck calculator for 2026', note: 'A 4.99% tax after a $15,000 standard deduction. At $65,000 single with no dependents, Georgia tax is $2,495.00 and the two-week headline is $1,996.63.' },
      { slug: 'hourly-to-salary-calculator', label: 'Hourly to salary calculator', note: 'Turn an hourly rate into a salary before you type the annual wage here.' },
      { slug: 'overtime-pay-calculator', label: 'Weekly overtime pay calculator', note: 'Gross pay for a week with overtime. This Wisconsin page starts after you already have the annual wage.' },
      { slug: 'us-federal-income-tax-calculator', label: '2026 federal income tax calculator', note: 'At $65,000 single the federal income tax is $5,620.00, the same federal line this paycheck uses before Wisconsin tax and FICA.' }
    ]
  }),
  'missouri-paycheck-calculator': page({
    slug: 'missouri-paycheck-calculator',
    title: 'Missouri Paycheck Calculator 2026 (4.7% Top Rate) | ClearCalc',
    h1: 'Missouri Paycheck Calculator for 2026',
    description: 'Missouri paycheck calculator for 2026. The withholding formula uses a $16,100 or $32,200 standard deduction and rates from 0% through 4.7%. A $65,000 single wage is taxed on $48,900.',
    intro: [
      'This Missouri paycheck calculator follows the 2026 Withholding Tax Formula from the Missouri Department of Revenue. Annual wages are reduced by a standard deduction of $16,100 or $32,200, and the taxable remainder is run through brackets that start at 0% and end at 4.7%. Federal income tax, Social Security, and Medicare come off as well.',
      'The $16,100 deduction is the formula’s amount for single, married filing separate, and married when the spouse works. The $32,200 deduction is only the “married and spouse does not work” box on Form MO W-4. Choosing the larger deduction when a spouse also has wages will understate Missouri tax.',
      'The sample is $65,000 on the $16,100 column, paid every two weeks, with no 401(k). Missouri tells employers to round the withholding for a pay period to the nearest dollar. The tax line on this page keeps the cent from the annual brackets so it can be compared with the other state paychecks.'
    ],
    steps: [
      'Enter annual gross wages. 65000 means $65,000 for the year.',
      'Choose the $16,100 column or the $32,200 column. The second one is for a married employee whose spouse does not work.',
      'Choose the pay frequency and enter a traditional 401(k) deferral, or leave 0. The deferral is removed before the standard deduction.',
      'Press Calculate. The headline is one paycheck after federal tax, Missouri tax, Social Security, Medicare, and the deferral.'
    ],
    howHeading: 'How the 2026 Missouri withholding formula runs',
    howItWorks: [
      'On $65,000 single, federal income tax is $5,620.00, Social Security is $4,030.00, and Medicare is $942.50. Those lines match the other single $65,000 paychecks. Missouri taxable income is $65,000 minus $16,100, which is $48,900. The brackets charge nothing on the first $1,348 and 4.7% only on the slice above $9,436.',
      'The $32,200 column on the same wage leaves a smaller Missouri base and a lower state tax. It does not change the 4.7% top rate. A traditional 401(k) reduces both federal tax and the wage the standard deduction is subtracted from. St. Louis and Kansas City earnings taxes are not in the state formula and are not guessed here.'
    ],
    formula: 'Standard deduction = $16,100, or $32,200 if married and the spouse does not work\nMissouri taxable income = max(0, wages − 401(k) − standard deduction)\nTax = 0% to $1,348, 2% to $2,696, 2.5% to $4,044, 3% to $5,392, 3.5% to $6,740, 4% to $8,088, 4.5% to $9,436, 4.7% above $9,436\nPaycheck = annual take-home ÷ number of paychecks',
    formulaNotes: [
      'The department’s percentage table also prints rounded dollar amounts at the start of each bracket, such as $263 plus 4.70% of the excess over $9,436. This page multiplies each slice by its own rate and rounds the annual total to the cent. The two can differ by a few cents.',
      'Employers round the amount withheld in a pay period to the nearest dollar. Dividing this annual tax by 26 and then rounding will not always match a payroll system’s order of rounding.'
    ],
    examplesHeading: 'Worked 2026 Missouri paycheck examples',
    samples: [
      { title: '$65,000 on the $16,100 column', overrides: {}, blurb: 'Single, or married with a working spouse. Missouri taxable income is wages minus $16,100. Federal tax uses the single brackets because that is the matching federal status for this column on a one-wage form.' },
      { title: '$65,000, spouse does not work', overrides: { status: 2 }, blurb: 'The $32,200 standard deduction and the federal joint standard deduction, both applied to this one wage. Use this only when the spouse has no wages.' },
      { title: '$65,000 and a $6,500 deferral', overrides: { deferral: 6500 }, blurb: 'The traditional deferral comes out before the $16,100 deduction. FICA does not fall.' }
    ],
    table: { heading: 'Missouri headlines', caption: 'Each headline is this calculator for that filing column or deferral.', headers: ['Case', 'Headline'] },
    limitsHeading: 'What this Missouri estimate leaves out',
    limits: [
      'City earnings taxes, including any St. Louis or Kansas City earnings tax, are not subtracted. Add those locally if they apply. This page is the state withholding formula only.',
      'The federal tax follows the column you picked: single brackets with $16,100, joint brackets with $32,200. A married couple who both work should not each claim $32,200.',
      'A Roth deferral typed as a traditional 401(k) is treated as pre-tax. Catch-up contributions above $24,500 are cut off. Other Missouri modifications and credits are not applied.',
      'The result is an annual estimate for a full-year resident whose income is this wage. It is not a payroll deposit and it does not file a Missouri return.'
    ],
    disclaimer: 'This Missouri paycheck figure is general information, not a Form MO-1040 and not tax advice. The Department of Revenue assesses the tax due.',
    faqs: [
      { q: 'What standard deduction does the 2026 Missouri paycheck calculator use?', a: `The Department of Revenue formula uses $16,100, or $32,200 when the spouse does not work. On $65,000 and the $16,100 column the headline is ${run('missouri-paycheck-calculator').headline}. ${line(run('missouri-paycheck-calculator'), 'Missouri income tax')}.` },
      { q: 'What is the top Missouri withholding rate in 2026?', a: '4.7% of Missouri taxable income above $9,436. The slices below that are 0%, 2%, 2.5%, 3%, 3.5%, 4%, and 4.5%. The top rate is not a flat tax on the whole wage.' },
      { q: 'Why might a Missouri stub not match this cent?', a: 'Missouri tells employers to round withholding for the pay period to the nearest dollar. This page keeps cents on the annual tax and then divides take-home pay. A wage-bracket table can also differ.' },
      { q: 'Does this Missouri page subtract a Kansas City or St. Louis earnings tax?', a: 'No. Those local earnings taxes are outside the state withholding formula. The state line is the only income tax subtracted besides federal income tax.' }
    ],
    relatedLinks: [
      { slug: 'wisconsin-paycheck-calculator', label: 'Wisconsin paycheck calculator for 2026', note: 'The W-166 withholding scale, not Missouri’s 4.7% table.' },
      { slug: 'illinois-paycheck-calculator', label: 'Illinois paycheck calculator for 2026', note: 'A flat Illinois rate after an exemption. Missouri uses brackets that top out at 4.7%.' },
      { slug: 'hourly-to-salary-calculator', label: 'Hourly to salary calculator', note: 'Build the annual wage from an hourly rate, then come back to this Missouri page.' },
      { slug: 'us-federal-income-tax-calculator', label: '2026 federal income tax calculator', note: 'The federal line at $65,000 single is $5,620.00 before Missouri tax and FICA.' }
    ]
  }),
  'connecticut-paycheck-calculator': page({
    slug: 'connecticut-paycheck-calculator',
    title: 'Connecticut Paycheck Calculator 2026 (Code A or C) | ClearCalc',
    h1: 'Connecticut Paycheck Calculator for 2026',
    description: 'Connecticut paycheck calculator using the DRS withholding rules effective 1 January 2026. Code A on $65,000 has a $0 exemption, $2,825 of initial tax, and a $150 phase-out add-back.',
    intro: [
      'This Connecticut paycheck calculator uses the Department of Revenue Services withholding calculation rules effective 1 January 2026. DRS says the 2026 rules and tables are unchanged from 2025. The form offers code A, single, and code C, married filing jointly. Code B, code D, and code F are not calculated.',
      'Connecticut withholding is not a single percentage. The rules subtract a personal exemption that phases out, compute an initial tax, add back the benefit of the 2% bracket, add a recapture amount at higher wages, and then multiply by one minus a personal-tax-credit decimal. All of those tables key off annualized salary.',
      'On code A at $65,000 the exemption has already phased out to $0. Initial tax is $2,825.00, the 2% phase-out add-back is $150.00, recapture is $0.00, and the credit decimal is 0.00, so Connecticut tax is $2,975.00. There is no Connecticut local wage tax on this page.'
    ],
    steps: [
      'Enter annual wages. The sample is 65000.',
      'Choose code A or code C. Code C uses the joint exemption, the joint initial-tax table, and the joint credit table.',
      'Choose a pay frequency and a traditional 401(k) deferral. The deferral is removed before the salary is run through the Connecticut tables.',
      'Press Calculate. The lines show the exemption, the initial tax, the phase-out, the recapture, and the credit decimal separately.'
    ],
    howHeading: 'How Connecticut withholding code A and code C are calculated',
    howItWorks: [
      'Code A’s personal exemption is $12,000 when salary is $24,000 or less and falls by $1,000 for each further $1,000 of salary until it is gone above $35,000. Code C starts at $24,000 through $48,000 and is gone above $71,000. The initial tax then uses the code’s own brackets, from 2% up to 6.99%.',
      'The phase-out add-back and the recapture are looked up from salary, not from taxable income. The personal tax credit is a decimal from Table E. The annual withholding is (initial tax + add-back + recapture) × (1 − decimal). Federal income tax and FICA are computed with the same 2026 federal rules as the other paycheck pages, and they are not Connecticut deductions.'
    ],
    formula: 'Code A exemption = $12,000 through $24,000 of salary, then $1,000 less per $1,000, and $0 above $35,000.\nCode C exemption = $24,000 through $48,000, then $1,000 less per $1,000, and $0 above $71,000.\nInitial tax uses the code A or code C bracket table in TPG-211.\nWithholding = (initial tax + 2% phase-out + recapture) × (1 − personal-credit decimal)\nPaycheck = annual take-home ÷ paychecks',
    formulaNotes: [
      'Table boundaries follow “more than the lower amount, and not over the upper amount.” A salary that lands on a published upper bound stays in that row. One dollar above it uses the next row.',
      'Additional withholding or reduced withholding from Form CT-W4 lines 2 and 3 is not a field. Supplemental wages are not split out. DRS says there is no percentage method for Connecticut wage withholding.'
    ],
    examplesHeading: 'Worked 2026 Connecticut paycheck examples',
    samples: [
      { title: 'Code A at $65,000', overrides: {}, blurb: 'The exemption is zero, the phase-out add-back is $150, and the credit decimal is zero. Connecticut tax is the initial tax plus that $150.' },
      { title: 'Code C at $65,000', overrides: { status: 2 }, blurb: 'Married filing jointly on this one wage. The exemption, the initial-tax brackets, and the 10% personal credit at this salary are the code C tables. A spouse’s wages are not added.' },
      { title: 'Code A with a $6,500 deferral', overrides: { deferral: 6500 }, blurb: 'Salary for the Connecticut tables is wages after the traditional 401(k). Federal tax falls as well. FICA does not.' }
    ],
    table: { heading: 'Connecticut headlines', caption: 'Code A is single. Code C is married filing jointly. Each headline is this calculator.', headers: ['Case', 'Headline'] },
    limitsHeading: 'What this Connecticut estimate leaves out',
    limits: [
      'Withholding codes B, D, and F are not on the form. Head of household, the code with no exemption, and the code F column need the DRS tables for those codes. Using code A in their place will not match the stub.',
      'CT-W4 additional withholding and reduced withholding are not applied. A second job changes the annualized salary the tables expect. This form annualizes only the wage you type.',
      'The personal exemption and the credit use the salary after a traditional 401(k). A Roth amount should not be entered there. Catch-up deferrals above $24,500 are cut back. Connecticut does not get a deduction for the federal income tax computed beside it.',
      'Recapture becomes material well above the sample wage. The tables are included, but a payroll system that annualizes a bonus differently will not match. This is not a Connecticut return.'
    ],
    disclaimer: 'This Connecticut paycheck figure is general information from the withholding rules, not a CT-1040 and not tax advice. The Department of Revenue Services assesses the tax due.',
    faqs: [
      { q: 'How much Connecticut tax does code A withhold on a $65,000 salary in 2026?', a: `The exemption is $0, initial tax is $2,825.00, the phase-out add-back is $150.00, and the credit is zero, so Connecticut tax is $2,975.00. The headline is ${run('connecticut-paycheck-calculator').headline}.` },
      { q: 'Which Connecticut withholding codes does this paycheck calculator include?', a: 'Code A and code C only, from the rules effective 1 January 2026. DRS says those tables are unchanged from 2025. Code B, code D, and code F are omitted rather than approximated.' },
      { q: 'Does Connecticut charge a local wage tax on top of this withholding?', a: 'Not on this page. The result is the state withholding calculation plus federal income tax and FICA. No city rate is added.' },
      { q: 'Why is Connecticut withholding more than a flat percent of the wage?', a: 'The exemption phases out, the 2% bracket is added back as salary rises, and a recapture amount appears at higher salaries. A single percent would miss those three tables. The result lines show each piece.' }
    ],
    relatedLinks: [
      { slug: 'massachusetts-paycheck-calculator', label: 'Massachusetts paycheck calculator for 2026', note: 'A 5% tax after an exemption, plus a surtax only at a very high income. Connecticut uses the phase-out and recapture tables instead.' },
      { slug: 'new-york-paycheck-calculator', label: 'New York paycheck calculator for 2026', note: 'New York State tax, and New York City tax only if you ask for it. Connecticut has no city wage tax on this page.' },
      { slug: 'hourly-to-salary-calculator', label: 'Hourly to salary calculator', note: 'Convert an hourly rate to the annual wage this Connecticut form expects.' },
      { slug: 'us-federal-income-tax-calculator', label: '2026 federal income tax calculator', note: 'Federal income tax is separate from the Connecticut withholding tables.' }
    ]
  }),
  'kentucky-paycheck-calculator': page({
    slug: 'kentucky-paycheck-calculator',
    title: 'Kentucky Paycheck Calculator 2026 (3.5% Flat Tax) | ClearCalc',
    h1: 'Kentucky Paycheck Calculator for 2026',
    description: 'Kentucky paycheck calculator for 2026 take-home pay. The withholding formula subtracts a $3,360 standard deduction and taxes the rest at 3.5%. The department’s monthly example, $3,270, produces $1,255.80 of annual tax.',
    intro: [
      'This Kentucky paycheck calculator uses the 2026 Kentucky Withholding Tax Formula. The standard deduction is $3,360. The rate is 3.5% of taxable wages. The Department of Revenue’s employer page states the same 3.5% rate for tax year 2026, and the 4 September 2025 announcement sets the $3,360 deduction.',
      'The department’s monthly example is a useful check. Wages of $3,270 a month are $39,240 a year. Subtract $3,360 and the taxable wage is $35,880. Tax at 3.5% is $1,255.80, and one month of that tax is $104.65. This page reproduces that annual tax. The formula sheet’s biweekly illustration contains an arithmetic slip; the steps above are the ones applied here.',
      'Filing status changes the federal brackets only. Kentucky subtracts one $3,360 deduction from this employee’s wages either way. Two spouses who each run the form will each receive a deduction that the return allows only once. City occupational taxes are not subtracted.'
    ],
    steps: [
      'Enter annual wages. The sample is 65000.',
      'Choose single or married filing jointly. That choice sets the federal standard deduction and brackets. It does not change the $3,360 Kentucky deduction.',
      'Choose a pay frequency and enter a traditional 401(k) deferral or leave 0.',
      'Press Calculate. The headline is one paycheck. Kentucky tax is 3.5% of wages after the deduction and the deferral.'
    ],
    howHeading: 'How the 2026 Kentucky flat tax is withheld',
    howItWorks: [
      'Federal tax on $65,000 single with no deferral is $5,620.00. Social Security is $4,030.00 and Medicare is $942.50. Kentucky taxable wages are $65,000 minus $3,360, which is $61,640. Tax at 3.5% is $2,157.40. There is no second Kentucky bracket.',
      'A traditional 401(k) reduces the wage before the $3,360 deduction, so it reduces both federal tax and Kentucky tax. It does not reduce FICA. A city occupational license tax, such as a Louisville or Lexington tax, is a separate local charge and is not estimated here.'
    ],
    formula: 'Kentucky taxable wages = max(0, wages − traditional 401(k) − $3,360)\nKentucky tax = 3.5% × Kentucky taxable wages\nFederal tax, Social Security, and Medicare use the 2026 federal paycheck rules\nPaycheck = annual take-home ÷ number of paychecks',
    formulaNotes: [
      'The department’s formula annualizes the pay-period wage, subtracts $3,360, multiplies by 3.5%, and divides back by the number of pay periods. This page does that arithmetic on the annual wage you type.',
      'The published biweekly example multiplies a taxable wage that does not match its own subtraction and then prints a whole-dollar withholding figure. The monthly example, $1,255.80 on $39,240, is the check used here.'
    ],
    examplesHeading: 'Worked 2026 Kentucky paycheck examples',
    samples: [
      { title: '$65,000 single', overrides: {}, blurb: 'One $3,360 deduction and a 3.5% tax. Federal tax uses the single brackets.' },
      { title: 'The department’s $3,270 monthly wage', overrides: { salary: 39240, periods: 12 }, blurb: '$3,270 × 12 is $39,240. Kentucky tax is $1,255.80. The headline is the monthly take-home, not the $104.65 withholding line by itself.' },
      { title: '$65,000 and a $6,500 deferral', overrides: { deferral: 6500 }, blurb: 'The deferral is subtracted before the standard deduction. FICA stays on $65,000.' }
    ],
    table: { heading: 'Kentucky headlines', caption: 'The middle row is the Department of Revenue’s monthly example, annualized. Each headline is this calculator.', headers: ['Case', 'Headline'] },
    limitsHeading: 'What this Kentucky estimate leaves out',
    limits: [
      'Local occupational license taxes are not subtracted. Louisville, Lexington, and other cities can withhold a local tax that this state formula does not include.',
      'The $3,360 deduction is taken once on this wage, which matches withholding for one employee. A joint return does not get the deduction twice. Running the calculator twice on married filing jointly would deduct it twice.',
      'A Roth contribution should not be typed as a traditional 401(k). Amounts above the $24,500 elective deferral are cut back. The family-size filing threshold that can zero a small liability is not applied.',
      'The result is an estimate for a wage earner, not a Kentucky Form 740 and not a payroll system. Reciprocal-state and military exemptions on Form K-4 are not switches on this page.'
    ],
    disclaimer: 'This Kentucky paycheck figure is general information, not a Form 740 and not tax advice. The Department of Revenue assesses the tax due.',
    faqs: [
      { q: 'What Kentucky income tax rate does this 2026 paycheck calculator use?', a: `3.5% after a $3,360 standard deduction. On $65,000 single the headline is ${run('kentucky-paycheck-calculator').headline}. ${line(run('kentucky-paycheck-calculator'), 'Kentucky income tax')}.` },
      { q: 'How does the Kentucky calculator treat the department’s $3,270 example?', a: 'Twelve times $3,270 is $39,240. Taxable wages are $35,880. Annual Kentucky tax is $1,255.80, which is $104.65 a month of state tax before federal tax and FICA are removed from the paycheck.' },
      { q: 'Does filing jointly change Kentucky’s 3.5% tax?', a: 'Not the rate and not the $3,360 deduction on this form. It changes the federal brackets. The withholding formula subtracts $3,360 from the employee’s own wages either way.' },
      { q: 'Are Louisville or Lexington occupational taxes in this Kentucky take-home pay?', a: 'No. The page is the state withholding formula plus federal income tax and FICA. A local occupational license tax has to be handled separately.' }
    ],
    relatedLinks: [
      { slug: 'indiana-paycheck-calculator', label: 'Indiana paycheck calculator for 2026', note: 'Indiana’s state rate plus a county rate you type. Kentucky’s state rate here is 3.5%, and no county rate is added.' },
      { slug: 'ohio-paycheck-calculator', label: 'Ohio paycheck calculator for 2026', note: 'Ohio’s state tax plus optional school-district and city rates. Kentucky’s local occupational tax is named as a limit, not calculated.' },
      { slug: 'hourly-to-salary-calculator', label: 'Hourly to salary calculator', note: 'An hourly wage becomes the annual figure this Kentucky form divides into paychecks.' },
      { slug: 'overtime-pay-calculator', label: 'Weekly overtime pay calculator', note: 'Gross overtime for one week. Kentucky tax on this page starts from the annual wage, not from one overtime week.' }
    ]
  }),
  'alabama-paycheck-calculator': page({
    slug: 'alabama-paycheck-calculator',
    title: 'Alabama Paycheck Calculator 2026 (Federal Tax Deducted) | ClearCalc',
    h1: 'Alabama Paycheck Calculator for 2026',
    description: 'Alabama paycheck calculator for 2026. The January 2026 withholding booklet deducts a standard deduction, a personal exemption, dependents, and federal income tax before the 2%, 4%, and 5% rates.',
    intro: [
      'This Alabama paycheck calculator follows the withholding formula in the Department of Revenue booklet revised January 2026. Alabama is unusual: after a standard deduction, a personal exemption, and dependent exemptions, the formula also deducts federal income tax. The rates are then 2%, 4%, and 5%.',
      'Single, claiming the exemption, uses a $1,500 personal exemption and the narrower brackets: 2% of the first $500, 4% of the next $2,500, and 5% above $3,000. Married filing jointly uses a $3,000 personal exemption, 2% of the first $1,000, 4% of the next $5,000, and 5% above $6,000. The “0”, “MS”, and head-of-family columns are not on this form.',
      'The standard deduction phases down as gross income rises. At $26,000 single it is $2,975, one $25 step below the $3,000 maximum. At $65,000 it has reached the $2,500 floor. Dependents are $1,000 each when gross income is $50,000 or less, $500 each through $100,000, and $300 each above that. FICA is not an Alabama deduction.'
    ],
    steps: [
      'Enter annual wages. The sample is 65000.',
      'Choose single or married filing jointly. That sets the personal exemption, the standard-deduction schedule, the rate brackets, and the federal brackets.',
      'Enter a traditional 401(k) deferral and the number of dependents other than a spouse. Dependents use the gross income after the deferral.',
      'Press Calculate. Federal income tax is computed first and then deducted on the Alabama side. The headline is one paycheck.'
    ],
    howHeading: 'How the January 2026 Alabama withholding formula works',
    howItWorks: [
      'Gross income for the formula is wages after the traditional 401(k). The standard deduction, the personal exemption, the dependent exemption, and the federal income tax are added and subtracted from that gross income. On $65,000 single with no dependents, the standard deduction is $2,500, the personal exemption is $1,500, and federal income tax is $5,620.00. Alabama taxable income is $55,380 and Alabama tax is $2,729.00.',
      'The federal tax deducted is the annual federal income tax from Revenue Procedure 2025-32, not the cents an employer happened to withhold and not Social Security or Medicare. The booklet’s own illustration uses a placeholder federal withholding figure and warns that it may not match current federal rates. Social Security and Medicare are still subtracted to reach take-home pay. They are just not Alabama deductions.'
    ],
    formula: 'Standard deduction, single: $3,000 at or under $25,999, then $25 less for each $500 or part above $25,999, and $2,500 at $35,500 or more.\nMarried filing jointly: $8,500, then $175 per $500 step, and $5,000 at $35,500 or more.\nPersonal exemption = $1,500 single or $3,000 joint.\nDependents = $1,000, $500, or $300 each, from the gross-income bands.\nAlabama taxable amount = gross income − standard deduction − personal exemption − dependents − federal income tax\nSingle rates: 2% of the first $500, 4% of the next $2,500, 5% above $3,000.',
    formulaNotes: [
      '“Part thereof” means a started $500 band counts as a whole step. $26,000 is one step above $25,999, so the single deduction is $2,975. $26,499 is still that same step.',
      'The booklet allows the tax to be rounded to the nearest dollar. This page rounds the annual Alabama tax to the cent, consistent with the other paycheck estimates.'
    ],
    examplesHeading: 'Worked 2026 Alabama paycheck examples',
    samples: [
      { title: '$65,000 single, no dependents', overrides: {}, blurb: 'The standard deduction is on its $2,500 floor. Federal income tax of $5,620.00 is deducted before the 2%, 4%, and 5% rates.' },
      { title: '$65,000 married filing jointly', overrides: { status: 2 }, blurb: 'The $3,000 personal exemption, the joint standard-deduction schedule, the wider brackets, and the federal joint tax on this one wage. A spouse’s wages are not included.' },
      { title: '$26,000 single, one dependent', overrides: { salary: 26000, dependents: 1 }, blurb: 'The standard deduction is $2,975, one step down from $3,000. The dependent is worth $1,000 because gross income is not over $50,000.' }
    ],
    table: { heading: 'Alabama headlines', caption: 'Each headline is this calculator. Federal income tax is deducted inside the Alabama tax and also reduces take-home pay only once.', headers: ['Case', 'Headline'] },
    limitsHeading: 'What this Alabama estimate leaves out',
    limits: [
      'The “0” exemption, married filing separately, and head of family use different standard deductions and, for head of family, the joint-style brackets. They are not menu choices. A local occupational tax is not subtracted.',
      'Federal withholding on a real stub can differ from the annual federal tax deducted here. The booklet says to annualize the federal tax actually withheld for the period. This estimate uses the computed federal income tax instead.',
      'A traditional 401(k) reduces gross income and therefore the federal tax that Alabama deducts. A Roth amount in that box is the wrong direction. Dependents are a number you type. The form cannot see the support test.',
      'The result is not an Alabama Form 40. Itemized deductions in place of the standard deduction are not offered. Part-year and nonresident allocations are not applied.'
    ],
    disclaimer: 'This Alabama paycheck figure is general information from the January 2026 withholding booklet, not a Form 40 and not tax advice. The Department of Revenue assesses the tax due.',
    faqs: [
      { q: 'Why does the Alabama paycheck calculator deduct federal income tax?', a: `The January 2026 withholding formula says to deduct annual federal withholding before the state rates. On $65,000 single that federal income tax is $5,620.00, and ${line(run('alabama-paycheck-calculator'), 'Alabama income tax')}. The headline is ${run('alabama-paycheck-calculator').headline}. FICA is not part of that deduction.` },
      { q: 'What is the Alabama standard deduction at $26,000 in 2026?', a: '$2,975 for a single filer. That is $3,000 minus one $25 step, because $26,000 is the first $500 band above $25,999. At $35,500 and above the single deduction is the $2,500 floor.' },
      { q: 'How much is an Alabama dependent exemption on this paycheck?', a: '$1,000 when gross income is $50,000 or less, $500 when it is over $50,000 and not over $100,000, and $300 when it is over $100,000. A spouse is the personal exemption, not a dependent.' },
      { q: 'Does Alabama use a flat rate on the whole wage?', a: 'No. Single is 2% on the first $500, 4% on the next $2,500, and 5% above $3,000. Married filing jointly uses $1,000 and $5,000 as the first two widths, then 5%.' }
    ],
    relatedLinks: [
      { slug: 'georgia-paycheck-calculator', label: 'Georgia paycheck calculator for 2026', note: 'Georgia does not deduct federal income tax before its 4.99% rate. At $65,000 single, Georgia tax is $2,495.00.' },
      { slug: 'tennessee-paycheck-calculator', label: 'Tennessee paycheck calculator for 2026', note: 'Tennessee has no wage income tax. Alabama’s brackets are the difference on a similar wage.' },
      { slug: 'hourly-to-salary-calculator', label: 'Hourly to salary calculator', note: 'Convert hourly pay to the annual wage this Alabama formula annualizes.' },
      { slug: 'us-federal-income-tax-calculator', label: '2026 federal income tax calculator', note: 'The federal tax this Alabama page deducts is the same 2026 calculation, before FICA.' }
    ]
  }),
  'south-carolina-paycheck-calculator': page({
    slug: 'south-carolina-paycheck-calculator',
    title: 'South Carolina Paycheck Calculator 2026 (Act 110) | ClearCalc',
    h1: 'South Carolina Paycheck Calculator for 2026',
    description: 'South Carolina paycheck calculator for the 2026 return under Act 110: 1.99% under $30,000 of taxable income, and 5.21% minus $966 above that, after the income-adjusted deduction.',
    intro: [
      'This South Carolina paycheck calculator estimates the 2026 individual income tax from Act 110, signed on 30 March 2026, as described in Department of Revenue Information Letter 26-20 on 31 August 2026. Taxable income under $30,000 is taxed at 1.99%. Taxable income of $30,000 or more is taxed at 5.21% minus $966. The starting point is federal adjusted gross income, not federal taxable income.',
      'South Carolina decoupled from the federal standard deduction and replaced it with the South Carolina Income Adjusted Deduction. Single filers get $15,000, reduced once federal AGI is over $40,000 and gone at $95,000. Joint filers get $30,000, reduced above $80,000 and gone at $190,000. The reduction is rounded down to the next lower $10.',
      'On $65,000 single the deduction is $8,190, taxable income is $56,810, and South Carolina tax is $1,993.80. The older WH-1603F withholding booklet, with a 0%, 3%, and 6% scale, is dated before the act. A stub that still uses that booklet will not match this return estimate. The act tells the department to adjust the withholding tables.'
    ],
    steps: [
      'Enter annual wages. On this page they stand in for federal AGI. The sample is 65000.',
      'Choose single or married filing jointly. That sets both the federal brackets and the SCIAD.',
      'Enter a traditional 401(k) deferral or leave 0. The deferral reduces AGI before the SCIAD is measured.',
      'Press Calculate. The headline is one paycheck. The SCIAD and the taxable income are listed under it. This is not the pre-Act withholding table.'
    ],
    howHeading: 'How the 2026 South Carolina return tax is estimated',
    howItWorks: [
      'Federal income tax on $65,000 single is $5,620.00, and that federal standard deduction is not subtracted again for South Carolina. Social Security is $4,030.00 and Medicare is $942.50. The SCIAD fraction at $65,000 is ($65,000 − $40,000) ÷ $55,000. Fifteen thousand dollars times that fraction, rounded down to a $10, is the reduction from the $15,000 deduction.',
      'Taxable income of $56,810 uses the upper formula: 5.21% of taxable income minus $966. A wage that leaves taxable income under $30,000 uses 1.99% instead. The earned-income credit, which the letter caps at $200, is not applied. A nonresident proration of the SCIAD is not applied.'
    ],
    formula: 'Single SCIAD = $15,000 if AGI is $40,000 or less, $0 if AGI is $95,000 or more, otherwise $15,000 minus the reduction.\nReduction = $15,000 × (AGI − $40,000) / $55,000, rounded down to a multiple of $10.\nJoint SCIAD = $30,000, phasing out from $80,000 to $190,000 of AGI by the same style of fraction.\nTax = 1.99% of taxable income when that income is under $30,000.\nTax = 5.21% × taxable income − $966 when taxable income is $30,000 or more.',
    formulaNotes: [
      'Information Letter 26-20 says any reduction that is not a multiple of $10 is rounded down to the next lowest $10. This page rounds the reduction, not the deduction, that way.',
      'At exactly $30,000 of taxable income the upper formula applies. One dollar under that line uses 1.99%. The two expressions meet within about a dollar, which is how the statute is written.'
    ],
    examplesHeading: 'Worked 2026 South Carolina paycheck examples',
    samples: [
      { title: '$65,000 single', overrides: {}, blurb: 'The SCIAD is partly phased out. Taxable income is over $30,000, so the tax is 5.21% minus $966. Federal tax still uses the $16,100 federal standard deduction, and South Carolina does not deduct it again.' },
      { title: '$65,000 married filing jointly', overrides: { status: 2 }, blurb: 'AGI is under $80,000, so the joint SCIAD stays at $30,000. Federal tax uses the joint standard deduction on this one wage. A spouse’s wages would raise AGI and can start the phase-out.' },
      { title: '$65,000 single and a $6,500 deferral', overrides: { deferral: 6500 }, blurb: 'The deferral lowers AGI, which can raise the SCIAD because the phase-out uses that AGI. FICA does not fall.' }
    ],
    table: { heading: 'South Carolina headlines', caption: 'These rows are the Act 110 return estimate, not the pre-Act WH-1603F withholding table.', headers: ['Case', 'Headline'] },
    limitsHeading: 'What this South Carolina estimate leaves out',
    limits: [
      'WH-1603F, the withholding formula posted for 2026 with a November 2025 date, still describes 0% to $3,640, 3% to $18,230, and 6% above that, plus allowances. Act 110 changed the return and directed the department to adjust withholding. If an employer is still on the old table, the stub will not match this page.',
      'Head of household uses a $22,500 SCIAD and is not a menu choice. The earned-income credit, capped at $200, is not subtracted. Nonresidents must prorate the SCIAD, and this form does not.',
      'Federal AGI here is the wage minus a traditional 401(k). Other income, adjustments, and a spouse’s wages would change both the SCIAD and the tax. A Roth amount in the deferral box is treated as pre-tax.',
      'No local wage tax is subtracted. The result is a planning estimate for a full-year resident, not a South Carolina return and not a payroll system.'
    ],
    disclaimer: 'This South Carolina figure is general information about the 2026 return under Act 110, not a return and not tax advice. The Department of Revenue assesses the tax due. It is not the pre-Act withholding table.',
    faqs: [
      { q: 'What South Carolina tax does this 2026 paycheck calculator charge on $65,000?', a: `Single, no deferral: the income-adjusted deduction is $8,190, taxable income is $56,810, and South Carolina tax is $1,993.80. The headline is ${run('south-carolina-paycheck-calculator').headline}. The rates are 1.99% and 5.21% minus $966, from Act 110.` },
      { q: 'Why might a South Carolina pay stub not match this take-home pay?', a: 'The WH-1603F withholding formula posted with a pre-Act date still uses 0%, 3%, and 6%. This page estimates the 2026 return in Information Letter 26-20. The act tells SCDOR to adjust withholding, and a stub on the old table will differ.' },
      { q: 'Does South Carolina still subtract the federal standard deduction in 2026?', a: 'Not for the state tax. Act 110 decouples from that deduction. The federal standard deduction still affects the federal income-tax line. The state subtraction is the SCIAD.' },
      { q: 'How does the South Carolina deduction phase out?', a: 'Single: $15,000 until AGI passes $40,000, then a fraction of the way to $95,000, with the reduction rounded down to $10. Joint: $30,000 until $80,000, gone at $190,000. At $65,000 single the deduction left is $8,190.' }
    ],
    relatedLinks: [
      { slug: 'north-carolina-paycheck-calculator', label: 'North Carolina paycheck calculator for 2026', note: 'A 3.99% tax after a $12,750 standard deduction. South Carolina’s 2026 computation is the SCIAD and the two-bracket return, not that flat rate.' },
      { slug: 'georgia-paycheck-calculator', label: 'Georgia paycheck calculator for 2026', note: 'Georgia’s 4.99% tax after $15,000. At $65,000 single, Georgia tax is $2,495.00. This South Carolina tax is a different statute.' },
      { slug: 'hourly-to-salary-calculator', label: 'Hourly to salary calculator', note: 'Turn an hourly rate into the annual wage before estimating this South Carolina tax.' },
      { slug: 'us-federal-income-tax-calculator', label: '2026 federal income tax calculator', note: 'Federal income tax still uses the federal standard deduction. South Carolina does not deduct that amount again.' }
    ]
  })
};
