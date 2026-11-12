import { calculate } from '../lib/calculate.js';
import { BTU_CHART, UNIFORM_LIFETIME } from '../lib/nov12.js';

function run(slug, values) {
  return calculate(slug, values);
}

function page(spec) {
  const runs = spec.samples.map((sample) => ({ ...sample, result: run(spec.slug, sample.values) }));
  return {
    title: spec.title,
    h1: spec.h1,
    description: spec.description,
    intro: spec.intro,
    steps: spec.steps,
    howHeading: spec.howHeading,
    howItWorks: [
      ...spec.howItWorks,
      runs.map((item) => `${item.title} produces the headline ${item.result.headline}. ${item.result.details.join(' ')}`).join(' ')
    ],
    formula: spec.formula,
    formulaNotes: spec.formulaNotes,
    examplesHeading: spec.examplesHeading,
    examples: runs.map((item) => ({
      title: item.title,
      paragraphs: [item.blurb, `The headline is ${item.result.headline}. ${item.result.details.slice(0, 5).join(' ')}`]
    })),
    table: spec.table,
    limitsHeading: spec.limitsHeading,
    limits: spec.limits,
    disclaimer: spec.disclaimer,
    faqs: spec.faqs,
    relatedLinks: spec.relatedLinks
  };
}

const cgt = (gain, income) => run('uk-capital-gains-tax-calculator', { gain, income }).headline;
const dividend = (other, dividends) => run('uk-dividend-tax-calculator', { other, dividends }).headline;
const ni = (salary) => run('uk-national-insurance-calculator', { salary }).headline;

export const nov12RestContent = {
  'uk-capital-gains-tax-calculator': page({
    slug: 'uk-capital-gains-tax-calculator',
    title: 'UK Capital Gains Tax Calculator 2026/27 | ClearCalc',
    h1: 'UK Capital Gains Tax Calculator',
    description: 'Estimate 2026/27 Capital Gains Tax after the £3,000 annual exempt amount. GOV.UK’s basic-rate example, a £12,600 gain and £20,000 of taxable income, is £1,728.00. The higher-rate example is £10,842.00.',
    intro: [
      'Capital Gains Tax for an individual in 2026/27 is 18% while the taxable gain still fits in the unused basic rate band, and 24% above that. The annual exempt amount is £3,000. The basic rate band is £37,700 of taxable income. Both figures are on GOV.UK for the tax year from 6 April 2026 to 5 April 2027.',
      'GOV.UK’s first worked example uses £20,000 of taxable income and a £12,600 gain. After the £3,000 allowance, £9,600 is taxed at 18% because £20,000 + £9,600 is still inside £37,700. The tax is £1,728. The second example uses a £52,600 gain. After the allowance, £17,700 is taxed at 18% and £31,900 at 24%, which is £10,842.',
      'Taxable income means income after the Personal Allowance and other Income Tax reliefs. Type that figure, not the gross salary, if you want the same starting point as the GOV.UK examples. A gross salary of £32,570 with a full £12,570 Personal Allowance is £20,000 of taxable income.'
    ],
    steps: [
      'Enter the gains after allowable losses, in pounds. The sample is 12600, the first GOV.UK example.',
      'Enter taxable income, already reduced by the Personal Allowance. The sample is 20000.',
      'Press Calculate. The headline is the Capital Gains Tax. The lines split the 18% slice from the 24% slice.',
      'Losses, Business Asset Disposal Relief, and Investors’ Relief are not boxes on this form. Deduct losses before you type the gain. Relief gains are a different 18% charge and are not selected here.'
    ],
    howHeading: 'How the 2026/27 Capital Gains Tax bands are applied',
    howItWorks: [
      'The allowance comes off the gain first. The remainder is stacked on top of taxable income. The gap between that income and £37,700 is taxed at 18%. Anything above the gap is taxed at 24%. A higher-rate taxpayer, whose taxable income is already £37,700 or more, pays 24% on the whole taxable gain.',
      'The £1,728 and £10,842 results are the two examples printed on the GOV.UK Capital Gains Tax rates page for gains on or after 6 April 2026. This calculator returns those amounts for the same inputs.',
      'Trustees and personal representatives pay 24%, and most trustees have a £1,500 annual exempt amount. This page is the individual calculation only.'
    ],
    formula: 'Taxable gain = max(0, gains after losses − £3,000)\nBasic-rate room = max(0, £37,700 − taxable income)\nTax = 18% of the taxable gain inside that room + 24% of the rest\n2026/27 individual rates. The annual exempt amount is £3,000.',
    formulaNotes: [
      '£12,600 of gains and £20,000 of taxable income: taxable gain £9,600, all inside the basic-rate room, 18% is £1,728.',
      '£52,600 of gains and £20,000 of taxable income: taxable gain £49,600, of which £17,700 is at 18% (£3,186) and £31,900 is at 24% (£7,656). The total is £10,842.'
    ],
    examplesHeading: 'Worked UK capital gains tax examples',
    samples: [
      { title: 'GOV.UK basic-rate example', values: { gain: 12600, income: 20000 }, blurb: 'The published 2026/27 example. The whole taxable gain sits in the basic rate band.' },
      { title: 'GOV.UK example that crosses into 24%', values: { gain: 52600, income: 20000 }, blurb: 'The same taxable income and a larger gain. Part of the gain is at 18% and the rest is at 24%.' },
      { title: 'No basic-rate room left', values: { gain: 10000, income: 37700 }, blurb: 'Taxable income already fills the £37,700 band, so the £7,000 above the allowance is entirely at 24%.' }
    ],
    table: {
      heading: '2026/27 Capital Gains Tax on sample gains',
      caption: 'Each tax figure is this calculator’s headline. Taxable income is income after the Personal Allowance. The annual exempt amount is £3,000.',
      headers: ['Gains', 'Taxable income', 'Capital Gains Tax'],
      rows: [
        ['£12,600', '£20,000', cgt(12600, 20000)],
        ['£52,600', '£20,000', cgt(52600, 20000)],
        ['£10,000', '£37,700', cgt(10000, 37700)],
        ['£3,000', '£20,000', cgt(3000, 20000)]
      ]
    },
    limitsHeading: 'What this Capital Gains Tax estimate leaves out',
    limits: [
      'Business Asset Disposal Relief and Investors’ Relief are 18% on qualifying gains in 2026/27. This form does not apply those reliefs. Carried interest is taxed as income from 6 April 2026 and is not a capital gain here.',
      'The annual exempt amount is not available if you claim the foreign income and gains regime or Overseas Workday Relief. Trustees generally have a £1,500 allowance. This page uses the £3,000 individual amount.',
      'Losses should be deducted before the gain is typed. The calculator does not match gains to particular assets, and it does not file a 60-day residential property return.',
      'Scottish income tax bands do not change these Capital Gains Tax rates. The £37,700 basic rate band used here is the UK-wide band GOV.UK uses in the examples.'
    ],
    disclaimer: 'This Capital Gains Tax figure is general information for 2026/27, not a return and not tax advice. HMRC assesses the tax due.',
    faqs: [
      { q: 'How much is Capital Gains Tax in 2026/27 on a £12,600 gain?', a: '£1,728.00 when taxable income is £20,000. That is GOV.UK’s example: the £3,000 allowance leaves £9,600, all taxed at 18%.' },
      { q: 'What is the Capital Gains Tax annual exempt amount for 2026/27?', a: '£3,000 for individuals. Most other trustees have £1,500. This calculator uses the £3,000 individual amount.' },
      { q: 'What are the 2026/27 Capital Gains Tax rates?', a: '18% for the part of the taxable gain that still fits in the basic rate band, and 24% above that. From 6 April 2026 those rates apply to individuals on the GOV.UK rate card.' },
      { q: 'Do I enter gross salary or taxable income for Capital Gains Tax?', a: 'Enter taxable income, after the Personal Allowance. GOV.UK’s examples start from that figure. A £32,570 salary with a full £12,570 allowance is £20,000 of taxable income.' },
      { q: 'Does this UK capital gains calculator include Business Asset Disposal Relief?', a: 'No. Qualifying gains are charged at 18% under that relief in 2026/27. This page uses the main 18% and 24% rates only.' }
    ],
    relatedLinks: [
      { slug: 'uk-take-home-pay-calculator', label: 'UK take-home pay calculator', note: 'Income tax and employee National Insurance on a salary. It does not tax a capital gain.' },
      { slug: 'uk-dividend-tax-calculator', label: 'UK dividend tax calculator', note: 'Dividend rates for 2026/27 are 10.75%, 35.75%, and 39.35%, not these Capital Gains Tax rates.' },
      { slug: 'england-stamp-duty-calculator', label: 'Stamp duty calculator for England and Northern Ireland', note: 'SDLT is a purchase tax. It is not Capital Gains Tax on a later sale.' }
    ]
  }),
  'uk-dividend-tax-calculator': page({
    slug: 'uk-dividend-tax-calculator',
    title: 'UK Dividend Tax Calculator 2026/27 | ClearCalc',
    h1: 'UK Dividend Tax Calculator',
    description: 'Estimate 2026/27 dividend tax after the £500 allowance. On GOV.UK’s example, £3,000 of dividends and £29,570 of wages produce £268.75 of dividend tax at 10.75%.',
    intro: [
      'For 6 April 2026 to 5 April 2027 the dividend allowance is £500. Dividend income above that allowance is taxed at 10.75% in the basic rate band, 35.75% in the higher rate band, and 39.35% in the additional rate band. Those rates are on GOV.UK’s tax-on-dividends page and in the income tax rates publication. The ordinary and upper rates each rose by 2 percentage points from the year before. The additional rate did not.',
      'GOV.UK’s example is £3,000 of dividends and £29,570 of wages. The Personal Allowance of £12,570 comes off the wages first, leaving £17,000 of wages taxed at 20%. The dividends then use the basic rate band: £500 at 0% and £2,500 at 10.75%, which is £268.75.',
      'The allowance uses band even though the rate on it is zero. Dividends inside an ISA are outside this calculation. Scottish bands do not apply to dividend rates.'
    ],
    steps: [
      'Enter non-dividend income, such as wages, before the Personal Allowance. The sample is 29570.',
      'Enter dividend income that is not inside an ISA. The sample is 3000.',
      'Press Calculate. The headline is dividend tax only. Income tax on the wages is shown underneath so the band can be checked, and it is not added to the headline.',
      'If total income is over £100,000, the Personal Allowance tapers. The calculator applies that taper before it places the dividends.'
    ],
    howHeading: 'How dividend income is stacked in 2026/27',
    howItWorks: [
      'The Personal Allowance is applied to non-dividend income first. Unused allowance then covers dividends. The remaining dividends are placed above the taxable non-dividend income. The first £500 of those remaining dividends is the dividend allowance at 0%. The rest is taxed at the dividend rate of whichever band it falls in.',
      'On the GOV.UK example the wages use £17,000 of the basic rate band after the Personal Allowance. The £500 allowance and the £2,500 balance both still fit in the £37,700 band, so the rate on the balance is 10.75%, not 35.75%.',
      'A larger dividend can cross into the higher rate. The form splits the slices and names the rate on each one. The headline adds only the dividend tax.'
    ],
    formula: 'Personal Allowance = £12,570, reduced by £1 for every £2 of income over £100,000\nApply the allowance to non-dividend income first\nDividend allowance = £500 at 0%, and it uses the band it sits in\nThen 10.75% in the basic rate band, 35.75% in the higher rate band, and 39.35% in the additional rate band\nBasic rate band of taxable income: £37,700. Higher rate band runs to £125,140.',
    formulaNotes: [
      '£29,570 of wages and £3,000 of dividends: wage tax is £3,400.00 at 20% on £17,000, and dividend tax is £268.75. The headline is the dividend tax.',
      'The £500 allowance is not an extra band on top of the Personal Allowance. Dividends covered by unused Personal Allowance are not taxed and do not also consume the £500.'
    ],
    examplesHeading: 'Worked UK dividend tax examples',
    samples: [
      { title: 'The GOV.UK £3,000 dividend example', values: { other: 29570, dividends: 3000 }, blurb: 'Wages of £29,570 and dividends of £3,000. Dividend tax is the 10.75% charge on £2,500.' },
      { title: 'Dividends inside the allowance', values: { other: 29570, dividends: 500 }, blurb: '£500 of dividends uses the allowance and produces no dividend tax when the wages have already consumed the Personal Allowance.' },
      { title: 'A dividend that reaches the higher rate', values: { other: 50000, dividends: 10000 }, blurb: 'Wages of £50,000 already use all of the basic rate band after the Personal Allowance, so dividends above the £500 allowance are taxed at 35.75%.' }
    ],
    table: {
      heading: 'Dividend tax at sample incomes',
      caption: 'The dividend tax column is this calculator’s headline for 2026/27. Wage tax is not included in that column.',
      headers: ['Other income', 'Dividends', 'Dividend tax'],
      rows: [
        ['£29,570', '£3,000', dividend(29570, 3000)],
        ['£29,570', '£500', dividend(29570, 500)],
        ['£50,000', '£10,000', dividend(50000, 10000)],
        ['£12,570', '£3,000', dividend(12570, 3000)]
      ]
    },
    limitsHeading: 'What this dividend tax estimate leaves out',
    limits: [
      'ISA dividends are ignored only if you leave them out of the dividend box. The calculator taxes the number you type.',
      'The starting rate for savings and the personal savings allowance are not applied. If the other income includes savings, the band position can differ from a full return.',
      'Scottish income tax changes the tax on wages. It does not change dividend rates. The wage-tax line on this page uses the main UK rates, so a Scottish taxpayer should not treat that line as the wage bill. The dividend headline still uses the UK dividend rates.',
      'Dividend income of a trust, and the tax credit position of foreign dividends, are outside this form.'
    ],
    disclaimer: 'This dividend tax figure is general information for 2026/27, not a Self Assessment return and not tax advice. HMRC assesses the tax due.',
    faqs: [
      { q: 'How much tax do I pay on £3,000 of dividends in 2026/27?', a: '£268.75 on GOV.UK’s example, where wages are £29,570. The £500 allowance is free and the remaining £2,500 is taxed at 10.75%.' },
      { q: 'What is the dividend allowance for 2026/27?', a: '£500. It is taxed at 0% and it uses whichever Income Tax band the dividends fall into.' },
      { q: 'What are the dividend tax rates from 6 April 2026?', a: '10.75% at the basic rate, 35.75% at the higher rate, and 39.35% at the additional rate. The first two rates are 2 percentage points higher than in 2025/26.' },
      { q: 'Does the Personal Allowance cover dividends before the £500 allowance?', a: 'Unused Personal Allowance is applied to dividends before the £500 dividend allowance. Dividends that fit inside the Personal Allowance are not taxed.' },
      { q: 'Are ISA dividends included in this UK dividend calculator?', a: 'Only if you type them. Dividends from an ISA are not taxed and should be left out of the dividend box.' }
    ],
    relatedLinks: [
      { slug: 'uk-take-home-pay-calculator', label: 'UK take-home pay calculator', note: 'Wage tax and National Insurance. It does not tax dividends.' },
      { slug: 'uk-capital-gains-tax-calculator', label: 'UK capital gains tax calculator', note: '18% and 24% on a gain. A dividend is not a capital gain.' },
      { slug: 'uk-national-insurance-calculator', label: 'UK National Insurance calculator', note: 'Class 1 contributions on earnings. Dividends do not pay National Insurance.' }
    ]
  }),
  'uk-national-insurance-calculator': page({
    slug: 'uk-national-insurance-calculator',
    title: 'UK National Insurance Calculator 2026/27, Employee Class 1 | ClearCalc',
    h1: 'UK National Insurance Calculator',
    description: 'Estimate 2026/27 employee Class 1 National Insurance for category A. On £35,000 the annual charge is £1,794.40: 8% between £12,570 and £50,270, then 2% above that.',
    intro: [
      'Most employees pay Class 1 National Insurance at 8% on earnings above the primary threshold and at 2% above the upper earnings limit. For 6 April 2026 to 5 April 2027 those annual thresholds are £12,570 and £50,270. GOV.UK also publishes them as £242 and £967 a week, and as £1,048 and £4,189 a month.',
      'This page is category A, the ordinary employee rate. It is the same National Insurance the England, Wales, and Northern Ireland take-home page subtracts. The difference is that this page stops at National Insurance and does not also compute income tax.',
      'A weekly or monthly payroll can differ by a few pence from an annual calculation, because the pay-period thresholds are the published figures rather than the annual threshold divided again.'
    ],
    steps: [
      'Enter annual cash earnings in pounds. The sample is 35000.',
      'Press Calculate. The headline is the annual employee National Insurance.',
      'Read the 8% and 2% lines separately. Earnings at or below £12,570 are at 0% for category A.',
      'Use the take-home page if you also want income tax. Use a category letter other than A only as a reason to ignore this result: reduced rate, deferment, and employer-only categories are not on the form.'
    ],
    howHeading: 'How employee Class 1 National Insurance is charged in 2026/27',
    howItWorks: [
      'On £35,000 the slice between £12,570 and £35,000 is £22,430. Eight percent of that slice is £1,794.40. Nothing is above £50,270, so the 2% line is zero.',
      'On £60,000 the 8% slice is the full gap from £12,570 to £50,270, which is £37,700 and £3,016.00 of contributions. The £9,730 above £50,270 is at 2%, which is £194.60. The total is £3,210.60.',
      'Employer National Insurance is a different charge. The secondary threshold is £5,000 a year and it is not deducted here.'
    ],
    formula: 'Category A employee Class 1, 2026/27\n0% up to the £12,570 primary threshold\n8% from £12,570 to the £50,270 upper earnings limit\n2% above £50,270\nAnnual estimate. Weekly and monthly payroll thresholds can round differently.',
    formulaNotes: [
      '£35,000 produces £1,794.40, all of it at 8%.',
      '£60,000 produces £3,016.00 at 8% and £194.60 at 2%, together £3,210.60.'
    ],
    examplesHeading: 'Worked National Insurance examples',
    samples: [
      { title: '£35,000, entirely in the 8% band', values: { salary: 35000 }, blurb: 'The earnings sit between the primary threshold and the upper earnings limit.' },
      { title: '£60,000, with a 2% slice', values: { salary: 60000 }, blurb: 'The upper earnings limit cuts the 8% band off at £50,270. The rest is at 2%.' },
      { title: '£12,570, at the threshold', values: { salary: 12570 }, blurb: 'Earnings equal to the primary threshold do not yet pay the 8% rate.' }
    ],
    table: {
      heading: 'Employee Class 1 National Insurance on annual earnings',
      caption: 'Category A, 2026/27. Each amount is this calculator’s headline.',
      headers: ['Annual earnings', 'Employee National Insurance'],
      rows: [12570, 35000, 50270, 60000].map((salary) => [`£${salary.toLocaleString('en-GB')}`, ni(salary)])
    },
    limitsHeading: 'What this National Insurance estimate leaves out',
    limits: [
      'Category B, the married women’s reduced rate, is 1.85% rather than 8% between the thresholds. Deferment categories pay 2% on that slice. This form is category A only.',
      'Employer contributions, the employment allowance, and Class 1A on benefits are not calculated.',
      'Directors can have an annual earnings period. A weekly payroll uses £242 and £967. This annual figure will not match every payslip to the penny.',
      'Income tax is not subtracted. The take-home calculators do both.'
    ],
    disclaimer: 'This National Insurance figure is general information for category A employees in 2026/27, not a payslip and not tax advice. HMRC and the employer operate the deduction.',
    faqs: [
      { q: 'How much National Insurance do I pay on £35,000 in 2026/27?', a: '£1,794.40 as a category A employee. That is 8% of the £22,430 above the £12,570 primary threshold.' },
      { q: 'What are the employee National Insurance thresholds for 2026/27?', a: 'The primary threshold is £12,570 a year, £1,048 a month, or £242 a week. The upper earnings limit is £50,270 a year, £4,189 a month, or £967 a week.' },
      { q: 'What are the Class 1 employee rates from 6 April 2026?', a: '8% between the primary threshold and the upper earnings limit, then 2%. Category A is the rate this calculator uses. The lower earnings limit is £6,708 a year and the rate there is 0%.' },
      { q: 'Does this National Insurance calculator include employer contributions?', a: 'No. Employer Class 1 is a separate charge. The secondary threshold for 2026/27 is £5,000 and it is not deducted from the employee on this page.' },
      { q: 'Why might a payslip differ from this annual National Insurance figure?', a: 'Payroll uses the weekly or monthly thresholds published by HMRC. Dividing the annual thresholds again can miss those rounded pay-period figures by a few pence.' }
    ],
    relatedLinks: [
      { slug: 'uk-take-home-pay-calculator', label: 'UK take-home pay calculator', note: 'Subtracts this National Insurance and income tax. At £35,000 the monthly take-home figure there is £2,393.30.' },
      { slug: 'uk-dividend-tax-calculator', label: 'UK dividend tax calculator', note: 'Dividends are not liable to Class 1 National Insurance.' },
      { slug: 'scotland-take-home-pay-calculator', label: 'Scotland take-home pay calculator', note: 'Scottish income tax bands, with the same employee National Insurance. National Insurance is not devolved.' }
    ]
  }),
  'australia-superannuation-guarantee-calculator': page({
    slug: 'australia-superannuation-guarantee-calculator',
    title: 'Australia Superannuation Guarantee Calculator, 12% | ClearCalc',
    h1: 'Australia Superannuation Guarantee Calculator',
    description: 'Estimate the super guarantee at 12% of qualifying earnings. A fortnight of $3,000 is $360.00 of super. The 12% rate applies from 1 July 2025 through 2026–27.',
    intro: [
      'The super guarantee percentage is 12% from 1 July 2025, and the Australian Taxation Office’s table keeps it at 12% for 1 July 2026 to 30 June 2027. From 1 July 2026, Payday Super means the employer calculates that percentage on qualifying earnings and pays it each payday.',
      'The ATO’s worked example is a fortnightly wage of $3,000 that is ordinary hours. Twelve percent is $360. This calculator returns that amount when the earnings box is 3000 and the period is a fortnight.',
      'Qualifying earnings are the payments that count from 1 July 2026. For most employees they are the same payments that used to be ordinary time earnings, plus some commissions. This page does not decide which parts of a pay packet qualify. It applies 12% to the figure you type.'
    ],
    steps: [
      'Enter the qualifying earnings for one period, or for a whole year if you select that period.',
      'Choose week, fortnight, month, or year. The sample is a fortnight of 3000.',
      'Press Calculate. The headline is the super guarantee for that period.',
      'If you picked a week, fortnight, or month, the details also show the annual amount that follows from repeating that period. A year has 52 weeks, 26 fortnights, or 12 months in that projection.'
    ],
    howHeading: 'How the 12% super guarantee is applied',
    howItWorks: [
      'The contribution is 12% of the qualifying earnings you enter, rounded to the cent. $3,000 × 0.12 is $360 exactly. An annual salary of $80,000 is $9,600.',
      'The maximum contribution base caps the earnings on which super guarantee is required. This page does not apply that cap, because the result is the rate on the earnings you marked as qualifying. Earnings above the base should be left out of the box if you are estimating only the compulsory amount.',
      'Norfolk Island’s transitional rate is 11% for 2026–27, not 12%. This page uses the general 12% rate.'
    ],
    formula: 'Super guarantee = qualifying earnings × 12%\nThe 12% rate applies from 1 July 2025 and for 1 July 2026 to 30 June 2027.\nFrom 1 July 2026 the base is qualifying earnings, paid each payday.',
    formulaNotes: [
      'A $3,000 fortnight is $360.00. The ATO uses that example for qualifying earnings.',
      '$80,000 for the year is $9,600.00. That treats the whole $80,000 as qualifying and ignores the maximum contribution base.'
    ],
    examplesHeading: 'Worked super guarantee examples',
    samples: [
      { title: 'The ATO fortnight of $3,000', values: { earnings: 3000, period: 26 }, blurb: 'Twelve percent of a $3,000 fortnight of ordinary hours.' },
      { title: '$80,000 for the year', values: { earnings: 80000, period: 1 }, blurb: 'The period is a full year, so the headline is 12% of $80,000 and there is no second multiplication.' },
      { title: 'A $1,500 week', values: { earnings: 1500, period: 52 }, blurb: 'Twelve percent of one week, with an annual projection of 52 identical weeks underneath.' }
    ],
    table: {
      heading: 'Super guarantee at 12%',
      caption: 'Each super amount is this calculator’s headline. The annual column repeats a week 52 times, a fortnight 26 times, or a month 12 times. The maximum contribution base is not applied.',
      headers: ['Earnings entered', 'Period', 'Super for the period'],
      rows: [
        ['$3,000', 'Fortnight', run('australia-superannuation-guarantee-calculator', { earnings: 3000, period: 26 }).headline],
        ['$6,000', 'Month', run('australia-superannuation-guarantee-calculator', { earnings: 6000, period: 12 }).headline],
        ['$80,000', 'Year', run('australia-superannuation-guarantee-calculator', { earnings: 80000, period: 1 }).headline]
      ]
    },
    limitsHeading: 'What this super guarantee estimate leaves out',
    limits: [
      'The maximum contribution base is not applied. Compulsory super is not required on earnings above that base.',
      'Salary sacrifice, employer extra contributions, and the concessional contributions cap are not calculated. This is the minimum 12% on the earnings you type.',
      'Norfolk Island uses 11% in 2026–27. Under-18s have an hours test. Contractors paid mainly for their labour can be employees for super. None of those tests are on the form.',
      'The take-home pay page does not subtract super, because super is paid to a fund rather than deducted as income tax. Do not subtract this headline from that take-home figure unless the employer also reduces cash pay.'
    ],
    disclaimer: 'This super guarantee figure is general information for 2026–27, not a payroll determination and not financial advice. The ATO sets the rate and the qualifying-earnings rules.',
    faqs: [
      { q: 'What is the super guarantee rate in 2026?', a: '12%. The ATO table shows 12% from 1 July 2025, for 1 July 2026 to 30 June 2027, and from 1 July 2027 onward. Norfolk Island is 11% in 2026–27.' },
      { q: 'How much super is payable on a $3,000 fortnight?', a: '$360.00. That is the ATO’s qualifying-earnings example: 12% of $3,000.' },
      { q: 'Does Payday Super change the 12% rate?', a: 'No. From 1 July 2026 it changes the payday and the name of the earnings base. The percentage stays 12%.' },
      { q: 'Is the maximum super contribution base applied here?', a: 'No. Type only the qualifying earnings that are within the base if you want the compulsory minimum. This page multiplies the number you enter.' },
      { q: 'Is super subtracted from the Australia take-home pay figure?', a: 'Not on that page. Super is a contribution to a fund. Income tax and the Medicare levy are what that page subtracts.' }
    ],
    relatedLinks: [
      { slug: 'australia-take-home-pay-calculator', label: 'Australia take-home pay calculator', note: '2026–27 resident income tax, the low income tax offset, and the Medicare levy. Super is not deducted there.' },
      { slug: 'australia-gst-calculator', label: 'Australia GST calculator', note: '10% GST on a price. It is not superannuation.' },
      { slug: 'retirement-calculator', label: 'Retirement calculator', note: 'Projects a balance from contributions you type. It does not apply the Australian 12% rule.' }
    ]
  }),
  'canada-rrsp-tax-savings-calculator': page({
    slug: 'canada-rrsp-tax-savings-calculator',
    title: 'Canada RRSP Tax Savings Calculator 2026 | ClearCalc',
    h1: 'Canada RRSP Tax Savings Calculator',
    description: 'Estimate the 2026 federal and provincial tax saved by an RRSP deduction. The CRA dollar limit for 2026 is $33,810. A $10,000 deduction against $90,000 in Ontario is the difference in tax shown in the headline.',
    intro: [
      'An RRSP deduction reduces the income that federal and provincial brackets are applied to. The tax saved is the tax before the deduction minus the tax after it. For 2026 the CRA dollar limit on new room is $33,810, which is 18% of $187,833 of prior earned income. Your own deduction room can be lower because of a pension adjustment or unused room, so the form has a room box and will not deduct more than that room.',
      'Federal brackets for 2026 are 14% to $58,523, 20.5% to $117,045, 26% to $181,440, 29% to $258,482, and 33% above that. The basic personal amount credit is included, including its phase-out above $181,440. Provincial brackets are the 2026 figures used on the provincial take-home pages. Ontario also includes surtax and the health premium. British Columbia includes the tax reduction. Quebec federal tax is reduced by the 16.5% abatement.',
      'CPP and EI do not fall because of an RRSP deduction, so they are not in the savings. The dollar tax is higher than a full return that also claims the CPP, EI, and Canada employment credits. Those credits are omitted on both sides, so the difference is the bracket effect plus the credits and surtaxes that actually change with income.'
    ],
    steps: [
      'Enter income before this RRSP deduction, in Canadian dollars. Use the income the brackets will see, after other deductions you have already decided.',
      'Enter the contribution you want to deduct, and your deduction room. The room defaults to 33810, the 2026 dollar limit. Lower it if your Notice of Assessment shows less room.',
      'Choose the province. The provincial tax uses that province’s brackets and basic personal amount.',
      'Press Calculate. The headline is the tax saved. The percent line is that saving divided by the contribution actually used.'
    ],
    howHeading: 'How the RRSP tax saving is measured',
    howItWorks: [
      'The calculator computes federal and provincial tax at the income you typed, then again at that income minus the contribution. The contribution cannot exceed the room or the income. The headline is the drop in tax.',
      'A contribution that sits inside one bracket saves tax at about that marginal rate. A contribution that crosses a bracket, the federal basic-amount phase-out, the Ontario surtax, or the Ontario health premium can save a different percentage than the headline rate of the bracket you started in. The percent line is the actual difference, not a printed marginal-rate table.',
      'The 2026 dollar limit is a ceiling on new room. It is not automatically your deduction limit. The room box exists so a smaller Notice of Assessment figure can be used.'
    ],
    formula: 'Contribution used = the smallest of the contribution, the deduction room, and the income\nTax saved = combined tax at the income − combined tax at the income after the contribution\nFederal 2026 brackets: 14%, 20.5%, 26%, 29%, 33%\n2026 RRSP dollar limit: $33,810',
    formulaNotes: [
      'Quebec’s federal tax is 83.5% of basic federal tax, which is the 16.5% abatement.',
      'Ontario health premium and surtax are part of the Ontario tax both before and after the deduction, so a deduction that changes them is included in the saving.'
    ],
    examplesHeading: 'Worked RRSP tax-savings examples',
    samples: [
      { title: '$10,000 against $90,000 in Ontario', values: { income: 90000, contribution: 10000, room: 33810, province: 1 }, blurb: 'The contribution is inside the 2026 dollar limit. Ontario tax includes surtax and the health premium.' },
      { title: 'The same contribution in Alberta', values: { income: 90000, contribution: 10000, room: 33810, province: 3 }, blurb: 'Federal tax matches the Ontario case. Alberta’s brackets replace Ontario’s, so the saving changes.' },
      { title: 'A contribution larger than the room', values: { income: 90000, contribution: 40000, room: 33810, province: 1 }, blurb: 'The deduction stops at $33,810. The extra $6,190 is not treated as deductible.' }
    ],
    table: {
      heading: 'Tax saved by a $10,000 RRSP deduction on $90,000',
      caption: 'Deduction room is $33,810. Each saving is this calculator’s headline for that province in 2026. CPP, EI, and the Canada employment amount are not in the tax.',
      headers: ['Province', 'Tax saved'],
      rows: [
        ['Ontario', run('canada-rrsp-tax-savings-calculator', { income: 90000, contribution: 10000, room: 33810, province: 1 }).headline],
        ['British Columbia', run('canada-rrsp-tax-savings-calculator', { income: 90000, contribution: 10000, room: 33810, province: 2 }).headline],
        ['Alberta', run('canada-rrsp-tax-savings-calculator', { income: 90000, contribution: 10000, room: 33810, province: 3 }).headline],
        ['Quebec', run('canada-rrsp-tax-savings-calculator', { income: 90000, contribution: 10000, room: 33810, province: 6 }).headline]
      ]
    },
    limitsHeading: 'What this RRSP estimate leaves out',
    limits: [
      'CPP, EI, the Canada employment amount, and most provincial low-income reductions are not applied. The savings are still the difference between two calculations that omit the same items.',
      'The territories are not on the province list. A spousal RRSP, the Home Buyers’ Plan repayment, and the 1% per month over-contribution tax are not calculated. The $2,000 over-contribution cushion is not added on top of the room.',
      'The room box is your deduction limit, not a guess at 18% of this year’s income. New room for 2026 is based on 2025 earned income.',
      'Quebec’s worker deduction and the Quebec abatement’s interactions with credits other than the basic personal amount are simplified. The abatement is 16.5% of the basic federal tax this page computes.'
    ],
    disclaimer: 'This RRSP figure is general information for the 2026 tax year, not a tax return and not financial advice. CRA and the province assess the tax.',
    faqs: [
      { q: 'What is the RRSP dollar limit for 2026?', a: 'CA$33,810. That is the CRA maximum for new deduction room. Your own room can be lower. The form will not deduct more than the room you enter.' },
      { q: 'Does an RRSP contribution reduce CPP or EI?', a: 'No. Employee CPP and EI are based on pensionable and insurable earnings, not on the RRSP deduction. This calculator leaves them out of both tax calculations.' },
      { q: 'Which federal brackets does the 2026 RRSP calculator use?', a: '14% to $58,523, 20.5% to $117,045, 26% to $181,440, 29% to $258,482, and 33% above that, from the Canada.ca 2026 rate table.' },
      { q: 'Why is Quebec’s federal tax lower on this RRSP page?', a: 'Quebec residents receive a 16.5% abatement of basic federal tax. The calculator applies that reduction only when Quebec is selected.' },
      { q: 'Is the tax saved equal to my marginal rate times the contribution?', a: 'Only when the contribution stays inside one bracket and does not move a surtax, a health premium, or the basic personal amount. The headline is the actual difference in tax, and the percent line reports that difference.' }
    ],
    relatedLinks: [
      { slug: 'ontario-take-home-pay-calculator', label: 'Ontario take-home pay calculator', note: 'A full 2026 paycheque, including CPP and EI. It does not show the tax saved by an RRSP deduction.' },
      { slug: 'british-columbia-take-home-pay-calculator', label: 'British Columbia take-home pay calculator', note: 'The same federal brackets with B.C. tax. The RRSP page isolates the deduction.' },
      { slug: 'roth-ira-calculator', label: 'Roth IRA calculator', note: 'A US retirement account with a 2026 dollar limit. It is not an RRSP and the currency is dollars.' }
    ]
  }),
  'irs-rmd-calculator': page({
    slug: 'irs-rmd-calculator',
    title: 'IRS RMD Calculator, Uniform Lifetime Table | ClearCalc',
    h1: 'IRS Required Minimum Distribution Calculator',
    description: 'Divide a prior year-end IRA balance by the IRS Uniform Lifetime Table. At age 73 the denominator is 26.5, so $100,000 requires $3,773.58. At age 75 the denominator is 24.6.',
    intro: [
      'A required minimum distribution for an IRA owner is the account balance at the end of the prior year divided by an applicable denominator. For most owners the denominator comes from Table III, the Uniform Lifetime Table, in Appendix B of IRS Publication 590-B. The table in that publication is the one used for 2026 distribution years.',
      'Publication 590-B says that if you reach age 72 after 31 December 2022, required distributions begin by 1 April of the year after you reach age 73. The denominator for the year is the one next to your age on your birthday in that year. Age 73 uses 26.5. Age 75 uses 24.6.',
      'The IRS example in the publication takes a $100,000 balance at age 75 and describes the distribution as $4,065, which is $100,000 divided by 24.6 rounded to the nearest dollar. This page rounds the same division to the cent, $4,065.04. A spouse who is the sole beneficiary and more than 10 years younger uses the Joint Life Table instead. That table is not on this page.'
    ],
    steps: [
      'Enter the traditional IRA balance at the end of the previous calendar year. The sample is 100000.',
      'Enter your age on your birthday in the distribution year. The table starts at 72 and the “120 and over” row is used at 120.',
      'Press Calculate. The headline is the required distribution. The denominator is printed under it.',
      'Do not use this result if your spouse is the sole beneficiary and more than 10 years younger. That case uses a different IRS table.'
    ],
    howHeading: 'How the Uniform Lifetime Table produces the RMD',
    howItWorks: [
      'The distribution is the balance divided by the applicable denominator. There is no other factor for a single account on Table III. $100,000 at age 73 is $100,000 / 26.5.',
      'Each traditional IRA is divided on its own, but the owner can take the combined minimum from one or more of the IRAs. This page divides the single balance you type. It does not combine accounts.',
      'Roth IRA owners do not take lifetime required minimum distributions under the current rule described by the IRS. This page does not switch itself off for a Roth. Use it for a traditional IRA, SEP, or SIMPLE where Table III applies.'
    ],
    formula: 'RMD = prior year-end balance ÷ Uniform Lifetime applicable denominator\nAge 73: 26.5. Age 75: 24.6. Age 120 and over: 2.0.\nSource: IRS Publication 590-B, Appendix B, Table III.',
    formulaNotes: [
      '$100,000 at age 73 is $3,773.58 to the cent.',
      '$100,000 at age 75 is $4,065.04 to the cent. The IRS example describes that division as $4,065.'
    ],
    examplesHeading: 'Worked required minimum distribution examples',
    samples: [
      { title: '$100,000 at age 73', values: { balance: 100000, age: 73 }, blurb: 'The first age at which many owners born after 1950 use Table III. The denominator is 26.5.' },
      { title: 'The IRS age-75 example', values: { balance: 100000, age: 75 }, blurb: 'Publication 590-B divides $100,000 by 24.6. The cent rounding is $4,065.04.' },
      { title: '$250,000 at age 80', values: { balance: 250000, age: 80 }, blurb: 'The denominator at 80 is 20.2. The distribution is the balance divided by that factor.' }
    ],
    table: {
      heading: 'Uniform Lifetime Table on a $100,000 balance',
      caption: 'Denominators are Table III of IRS Publication 590-B. The distribution is this calculator’s headline, rounded to the cent.',
      headers: ['Age', 'Applicable denominator', 'RMD on $100,000'],
      rows: [73, 75, 80, 85, 90, 100, 120].map((age) => [String(age), String(UNIFORM_LIFETIME[age]), run('irs-rmd-calculator', { balance: 100000, age }).headline])
    },
    limitsHeading: 'What this RMD estimate leaves out',
    limits: [
      'Table II, the Joint Life and Last Survivor table, is required when the spouse is the sole beneficiary and more than 10 years younger. This page cannot apply it.',
      'Inherited IRAs, the 10-year rule, and the single life table for beneficiaries are not calculated. The year-of-death distribution has its own instructions.',
      'The first distribution year can have two deadlines: 1 April of the following year for the first RMD, and 31 December for the next one. This page only divides a balance. It does not choose the year.',
      'Annuity contracts, still-working exceptions for some workplace plans, and qualified charitable distributions are not modeled. The balance should already be the 31 December figure the IRS tells you to use.'
    ],
    disclaimer: 'This required minimum distribution is general information from the Uniform Lifetime Table, not tax advice and not a determination of which table you must use. The IRS rules in Publication 590-B control.',
    faqs: [
      { q: 'How is an RMD calculated from the Uniform Lifetime Table?', a: 'Divide the account balance at the end of the prior year by the applicable denominator for your age in the distribution year. At 73 the denominator is 26.5.' },
      { q: 'What is the RMD on $100,000 at age 73?', a: '$3,773.58 on this page, which is $100,000 divided by 26.5 and rounded to the cent.' },
      { q: 'Why does the IRS example at age 75 say $4,065?', a: 'Publication 590-B divides $100,000 by 24.6 and describes the result as $4,065. The unrounded quotient is $4,065.04, which is what this page shows.' },
      { q: 'When do RMDs start?', a: 'Publication 590-B says that if you reach age 72 after 31 December 2022, you begin by 1 April of the year after you reach age 73. This calculator does not apply a different starting age.' },
      { q: 'Can I use this RMD calculator if my spouse is more than 10 years younger?', a: 'Not if your spouse is the sole beneficiary. That case uses the Joint Life Table. Table III is for everyone else the IRS lists, including a spouse who is not more than 10 years younger.' }
    ],
    relatedLinks: [
      { slug: 'roth-ira-calculator', label: 'Roth IRA calculator', note: 'The 2026 contribution limit and a growth projection. Roth owners are not given a lifetime RMD by the rule this page cites.' },
      { slug: 'retirement-calculator', label: 'Retirement calculator', note: 'Projects a nest egg. It does not divide a balance by an IRS life-expectancy factor.' },
      { slug: 'us-federal-income-tax-calculator', label: 'US federal income tax calculator', note: 'Tax on wages after the standard deduction. An RMD is additional taxable income this wage page does not see.' }
    ]
  }),
  'mortgage-refinance-calculator': page({
    slug: 'mortgage-refinance-calculator',
    title: 'Mortgage Refinance Calculator, Break-Even Months | ClearCalc',
    h1: 'Mortgage Refinance Calculator',
    description: 'Compare the payment on a fixed-rate mortgage with a refinance. Break-even months are the cash closing costs divided by the monthly saving. Interest left on each loan is shown beside that month count.',
    intro: [
      'A refinance replaces the remaining balance, the rate, and the term. This page computes the current fixed payment from the balance, the current rate, and the years left, then computes the new payment from the new rate and the new term. The monthly difference is the old payment minus the new one.',
      'Break-even months are the closing costs you pay in cash divided by that monthly difference, and only when the new payment is lower. Costs that are added to the new loan are not cash you paid today, so they are not divided into the break-even month. They do increase the amount financed and the interest on the new loan.',
      'Both loans use the ordinary US monthly formula: the annual rate divided by 12. Taxes, insurance, and mortgage insurance are not in either payment. The interest comparison ignores the time value of money.'
    ],
    steps: [
      'Enter the current balance, the current annual rate, and the years still left. The sample is 300000 at 6.5% with 27 years left.',
      'Enter the new rate, the new term in years, and the closing costs. The sample is 5.5% for 30 years and 6000 of costs.',
      'Choose whether the costs are paid in cash or added to the new loan.',
      'Press Calculate. The headline is the break-even month count, or a statement that the new payment is not lower.'
    ],
    howHeading: 'How the refinance break-even month is calculated',
    howItWorks: [
      'The current payment is the fully amortizing payment that would retire the balance over the years remaining. The new payment does the same for the new term. Neither payment includes an extra principal amount. Extra principal belongs on the payoff page.',
      'If the new payment is lower, break-even months equal cash closing costs divided by the monthly drop. A longer new term can lower the payment while increasing total interest. Read the interest lines before treating a lower payment as a saving.',
      'Rolling the costs into the loan raises the new balance by the costs. The interest on that extra balance is inside the new interest total. The break-even headline then says the costs were not paid in cash.'
    ],
    formula: 'Monthly rate r = annual percent / 100 / 12\nPayment = balance × r × (1 + r)^n / ((1 + r)^n − 1)\nMonthly difference = current payment − new payment\nBreak-even months = cash closing costs / monthly difference, when the difference is positive',
    formulaNotes: [
      'A zero rate uses balance divided by the number of months. Closing costs of zero produce a break-even of zero months when the payment falls.',
      'The interest totals use the unrounded payment and run the schedule until the balance is gone. They are not the rounded payment times the number of months.'
    ],
    examplesHeading: 'Worked refinance examples',
    samples: [
      { title: '$300,000 at 6.5% into 5.5% for 30 years', values: { balance: 300000, oldrate: 6.5, oldyears: 27, newrate: 5.5, newyears: 30, costs: 6000, roll: 1 }, blurb: 'Costs are paid in cash. The headline is the number of months of payment savings needed to recover $6,000.' },
      { title: 'The same refinance with costs rolled in', values: { balance: 300000, oldrate: 6.5, oldyears: 27, newrate: 5.5, newyears: 30, costs: 6000, roll: 2 }, blurb: 'The new balance is $306,000. The break-even month is not a cash recovery, because the costs were financed.' },
      { title: 'A shorter term at the same rate', values: { balance: 300000, oldrate: 6.5, oldyears: 27, newrate: 6.5, newyears: 15, costs: 3000, roll: 1 }, blurb: 'The payment rises, so there is no break-even month. The interest lines still show whether the shorter term costs less interest.' }
    ],
    table: {
      heading: 'Refinance comparisons on a $300,000 balance',
      caption: 'The current loan in every row has 27 years left at 6.5%. Closing costs of $6,000 are paid in cash. The break-even column is this calculator’s headline.',
      headers: ['New rate', 'New term', 'Break-even'],
      rows: [
        ['5.5%', '30 years', run('mortgage-refinance-calculator', { balance: 300000, oldrate: 6.5, oldyears: 27, newrate: 5.5, newyears: 30, costs: 6000, roll: 1 }).headline],
        ['6%', '30 years', run('mortgage-refinance-calculator', { balance: 300000, oldrate: 6.5, oldyears: 27, newrate: 6, newyears: 30, costs: 6000, roll: 1 }).headline],
        ['5.5%', '15 years', run('mortgage-refinance-calculator', { balance: 300000, oldrate: 6.5, oldyears: 27, newrate: 5.5, newyears: 15, costs: 6000, roll: 1 }).headline]
      ]
    },
    limitsHeading: 'What this refinance estimate leaves out',
    limits: [
      'Points, prepaid interest, escrow, and mortgage insurance are included only if you put them inside the closing-cost box or the balance. The form does not look them up.',
      'A cash-out amount other than rolled-in costs is not a separate field. Add it to the balance yourself if the new loan is larger for another reason, and keep that decision visible.',
      'The interest difference is not discounted. A dollar of interest in year 20 is treated the same as a dollar this year. Tax deductions for mortgage interest are not estimated.',
      'An adjustable rate, an interest-only period, and a biweekly schedule are outside the fixed monthly formula.'
    ],
    disclaimer: 'This refinance comparison is general information, not a Loan Estimate and not financial advice. Confirm the rate, term, and cash due with the lender.',
    faqs: [
      { q: 'How is the mortgage refinance break-even month calculated?', a: 'Divide the closing costs you pay in cash by the drop in the monthly principal-and-interest payment. If the new payment is not lower, there is no break-even month.' },
      { q: 'What happens if refinance closing costs are added to the loan?', a: 'The new balance includes the costs, so the new payment and the new interest rise. The break-even headline does not divide those costs by the monthly saving, because they were not paid in cash.' },
      { q: 'Does a lower refinance payment always save interest?', a: 'No. Extending the term can cut the payment and still increase the interest left to pay. Compare the interest lines, not only the payment.' },
      { q: 'Are taxes and insurance in this refinance payment?', a: 'No. Both payments are principal and interest. Escrow is not estimated.' },
      { q: 'Which rate convention does the refinance calculator use?', a: 'A nominal annual rate divided by 12, with monthly payments. That is the ordinary US fixed-rate convention used on the mortgage payment page.' }
    ],
    relatedLinks: [
      { slug: 'mortgage-calculator', label: 'Mortgage payment calculator', note: 'The payment on a new loan from scratch. This page starts from a balance that already exists.' },
      { slug: 'mortgage-payoff-calculator', label: 'Mortgage payoff calculator', note: 'Extra principal on the current loan. A refinance replaces the loan instead.' },
      { slug: 'apr-calculator', label: 'APR calculator', note: 'Turns prepaid finance charges into an APR. The refinance page uses the note rates you type and does not solve for an APR.' }
    ]
  }),
  'student-loan-repayment-calculator': page({
    slug: 'student-loan-repayment-calculator',
    title: 'Student Loan Repayment Calculator, US Fixed Payment | ClearCalc',
    h1: 'Student Loan Repayment Calculator',
    description: 'Estimate a fixed US student loan payment and the interest saved by an extra monthly payment. A $30,000 balance at 5.5% for 10 years is the standard payment in the headline before any extra amount.',
    intro: [
      'This is standard amortization. The payment is the fixed monthly amount that retires the balance over the term at the annual rate you type, divided by 12. An extra amount is added to that payment and the schedule is run again so you can see the months and the interest that disappear.',
      'It is not a US income-driven plan, and it is not a UK student loan. UK Plan 1, Plan 2, Plan 4, Plan 5, and postgraduate deductions are on the UK student loan page, where the payment is a percentage of earnings above a threshold rather than an amortizing installment.',
      'If the payment would not cover the interest, the balance would not fall and the calculator stops. A zero rate divides the balance by the number of months and charges no interest.'
    ],
    steps: [
      'Enter the balance and the annual interest rate. The sample is 30000 at 5.5%.',
      'Enter the term in whole years from 1 to 40. The sample is 10.',
      'Enter an extra amount to pay each month, or leave it at 0 to see the standard payment alone.',
      'Press Calculate. The headline is the payment including the extra amount. The standard payment, the month counts, and the interest are underneath.'
    ],
    howHeading: 'How a fixed student loan payment is amortized',
    howItWorks: [
      'The standard payment uses the same formula as a personal loan. Each month the interest is the balance times the monthly rate, and the rest of the payment reduces principal. The extra amount increases principal from the first month.',
      'Interest saved is the standard schedule’s interest minus the faster schedule’s interest. The faster schedule stops when the balance reaches zero, which can be many months before the original term.',
      'Unpaid interest is not capitalized as a separate event, and a deferment is not modeled. The balance you type is the balance the schedule starts from.'
    ],
    formula: 'Monthly rate r = annual percent / 100 / 12\nStandard payment = balance × r × (1 + r)^n / ((1 + r)^n − 1)\nPayment with extra = standard payment + extra\nInterest is the sum of each month’s interest until the balance is zero',
    formulaNotes: [
      'A zero rate makes the payment the balance divided by the number of months, and total interest is zero.',
      'The headline uses the payment that includes the extra amount. The standard payment is the first detail line.'
    ],
    examplesHeading: 'Worked student loan examples',
    samples: [
      { title: '$30,000 at 5.5% for 10 years', values: { balance: 30000, rate: 5.5, years: 10, extra: 0 }, blurb: 'No extra payment. The headline is the standard amortizing payment and the term runs the full 120 months.' },
      { title: 'The same loan with $50 extra', values: { balance: 30000, rate: 5.5, years: 10, extra: 50 }, blurb: 'Fifty dollars is added every month. The month count falls and the interest line shows the saving.' },
      { title: 'A zero-interest check', values: { balance: 12000, rate: 0, years: 10, extra: 0 }, blurb: 'The payment is $12,000 divided by 120 months, and interest is zero.' }
    ],
    table: {
      heading: 'Standard payment and an extra $50',
      caption: 'Ten-year term. The payment column is the headline with the extra amount shown in the row. Interest is the detail this calculator prints for that row.',
      headers: ['Balance', 'Rate', 'Extra', 'Headline payment'],
      rows: [
        ['$30,000', '5.5%', '$0', run('student-loan-repayment-calculator', { balance: 30000, rate: 5.5, years: 10, extra: 0 }).headline],
        ['$30,000', '5.5%', '$50', run('student-loan-repayment-calculator', { balance: 30000, rate: 5.5, years: 10, extra: 50 }).headline],
        ['$12,000', '0%', '$0', run('student-loan-repayment-calculator', { balance: 12000, rate: 0, years: 10, extra: 0 }).headline]
      ]
    },
    limitsHeading: 'What this student loan estimate leaves out',
    limits: [
      'Income-driven repayment, Public Service Loan Forgiveness, and forbearance are not modeled. The payment does not fall when income falls.',
      'A UK student loan is a payroll percentage, not this amortization. Use the UK student loan page for Plan 1, Plan 2, Plan 4, Plan 5, or a postgraduate loan.',
      'Several loans at different rates are not blended. Run them one at a time, or type a balance only if one rate really applies to all of it.',
      'The extra payment is assumed to continue every month until the balance is gone. A one-off lump sum is not a separate field.'
    ],
    disclaimer: 'This student loan figure is general amortization, not a federal repayment plan and not financial advice. The servicer’s rate and term control the contract payment.',
    faqs: [
      { q: 'How is a standard US student loan payment calculated?', a: 'It is the fixed monthly payment that amortizes the balance over the term. The monthly rate is the annual rate divided by 12.' },
      { q: 'What does an extra student loan payment change?', a: 'It shortens the number of months and reduces the interest. The headline becomes the standard payment plus the extra amount, and the details show the months and the interest saved.' },
      { q: 'Is this the UK student loan repayment?', a: 'No. UK plans deduct a percentage of earnings above a threshold. That calculation is on the UK student loan page. This page amortizes a balance at a rate you type.' },
      { q: 'Does this calculator include income-driven repayment?', a: 'No. The payment does not depend on income, family size, or a forgiveness clock.' },
      { q: 'What happens at a 0% student loan rate?', a: 'The payment is the balance divided by the number of months, and total interest is zero.' }
    ],
    relatedLinks: [
      { slug: 'loan-calculator', label: 'Loan calculator', note: 'The same fixed payment for a personal or auto loan, without an extra-payment field.' },
      { slug: 'uk-student-loan-repayment-calculator', label: 'UK student loan repayment calculator', note: 'Plan thresholds for 2026/27. A percentage of earnings, not this US amortization.' },
      { slug: 'credit-card-payoff-calculator', label: 'Credit card payoff calculator', note: 'A revolving balance at a monthly rate. A student loan here is an installment schedule.' }
    ]
  }),
  'home-equity-loan-calculator': page({
    slug: 'home-equity-loan-calculator',
    title: 'Home Equity Loan and HELOC Calculator | ClearCalc',
    h1: 'Home Equity Loan and HELOC Calculator',
    description: 'Estimate how much you can borrow against a home from a combined loan-to-value cap. A $500,000 home with a $280,000 mortgage at 80% CLTV has $120,000.00 of room before any existing HELOC.',
    intro: [
      'Combined loan-to-value, or CLTV, is the mortgage plus the home equity balance, divided by the home value. Lenders often cap that ratio. This page does the arithmetic for a cap you type. It does not look up a credit score or a county limit, and 80% is only the sample, not a rule that every lender uses.',
      'Available borrowing is the home value times the maximum CLTV, minus the mortgage, minus any HELOC or home equity loan that is already outstanding. If that room is negative, the headline is zero. The current LTV uses the mortgage alone. The current CLTV adds the existing equity balance.',
      'The page does not estimate the interest rate, the draw period, or the monthly payment. Once you have a balance you might borrow, the loan calculator or the mortgage calculator can amortize it.'
    ],
    steps: [
      'Enter the home value. The sample is 500000.',
      'Enter the first-mortgage balance and any existing HELOC or home equity balance. The sample mortgage is 280000 and the existing equity balance is 0.',
      'Enter the maximum combined loan-to-value as a percent. The sample is 80.',
      'Press Calculate. The headline is the additional amount that still fits under that cap.'
    ],
    howHeading: 'How LTV and CLTV set the borrowing room',
    howItWorks: [
      'On the sample, LTV is $280,000 / $500,000, which is 56%. CLTV is the same because the existing HELOC is zero. Eighty percent of $500,000 is $400,000. Subtracting the $280,000 mortgage leaves $120,000.',
      'An existing HELOC of $20,000 would make the current CLTV 60% and would reduce the room by $20,000, to $100,000. The cap did not change. The balance already drawn did.',
      'A cap of 90% on the same sample would raise the ceiling to $450,000 and the room to $170,000. Whether a lender will use 90% is not something this page knows.'
    ],
    formula: 'LTV = mortgage / home value\nCLTV = (mortgage + existing HELOC) / home value\nAvailable = max(0, home value × maximum CLTV − mortgage − existing HELOC)',
    formulaNotes: [
      'The sample at 80% is $120,000.00 of room.',
      'Room below zero is shown as zero in the headline. The detail line still shows the negative lending room so you can see how far past the cap the balances sit.'
    ],
    examplesHeading: 'Worked home equity examples',
    samples: [
      { title: '$500,000 home, $280,000 mortgage, 80% cap', values: { value: 500000, mortgage: 280000, existing: 0, cltv: 80 }, blurb: 'No existing HELOC. The room is 80% of the value minus the mortgage.' },
      { title: 'The same home with a $20,000 HELOC already drawn', values: { value: 500000, mortgage: 280000, existing: 20000, cltv: 80 }, blurb: 'The existing balance uses part of the cap before any new borrowing.' },
      { title: 'A mortgage already over the cap', values: { value: 400000, mortgage: 350000, existing: 0, cltv: 80 }, blurb: 'Eighty percent of $400,000 is $320,000, which is below the mortgage, so the additional borrowing is zero.' }
    ],
    table: {
      heading: 'Borrowing room at an 80% CLTV',
      caption: 'No existing HELOC. Each available amount is this calculator’s headline.',
      headers: ['Home value', 'Mortgage', 'Available at 80%'],
      rows: [
        ['$500,000', '$280,000', run('home-equity-loan-calculator', { value: 500000, mortgage: 280000, existing: 0, cltv: 80 }).headline],
        ['$400,000', '$250,000', run('home-equity-loan-calculator', { value: 400000, mortgage: 250000, existing: 0, cltv: 80 }).headline],
        ['$400,000', '$350,000', run('home-equity-loan-calculator', { value: 400000, mortgage: 350000, existing: 0, cltv: 80 }).headline]
      ]
    },
    limitsHeading: 'What this home equity estimate leaves out',
    limits: [
      'A lender can set a lower cap than the percent you type, and can refuse a second lien entirely. Credit, income, and the property itself are not inputs.',
      'The interest rate, closing costs, and the monthly payment on the new borrowing are not estimated. Amortize a balance on the loan page after you have one.',
      'A HELOC is often a revolving limit with a draw period and a variable rate. This page estimates room under a CLTV cap. It does not model the rate.',
      'Private mortgage insurance, a county loan limit, and the difference between a home equity loan and a HELOC are not applied.'
    ],
    disclaimer: 'This borrowing room is arithmetic from the cap you type, not a loan offer and not financial advice. The lender sets the limit.',
    faqs: [
      { q: 'How much home equity can I borrow at 80% CLTV?', a: 'On a $500,000 home with a $280,000 mortgage and no existing HELOC, the room is $120,000.00. That is 80% of the value minus the mortgage.' },
      { q: 'What is the difference between LTV and CLTV?', a: 'LTV uses the mortgage only. CLTV adds the existing home equity balance. Both are divided by the home value.' },
      { q: 'Does this HELOC calculator estimate the interest rate?', a: 'No. It estimates how much balance still fits under a combined loan-to-value cap. The payment on a balance you choose belongs on the loan calculator.' },
      { q: 'Why is the available home equity zero?', a: 'The mortgage and any existing HELOC already meet or exceed the cap you entered. The detail line shows the lending room before it is floored at zero.' },
      { q: 'Is 80% the legal maximum CLTV?', a: 'No. Eighty percent is the sample. Type the cap the lender actually offered. This page does not store a legal maximum.' }
    ],
    relatedLinks: [
      { slug: 'house-affordability-calculator', label: 'How much house can I afford calculator', note: 'Solves a purchase price from income. This page starts from a home you already value.' },
      { slug: 'mortgage-calculator', label: 'Mortgage payment calculator', note: 'Amortizes a balance. It does not compute loan-to-value room.' },
      { slug: 'debt-to-income-ratio-calculator', label: 'Debt-to-income ratio calculator', note: 'Compares a housing payment with income. CLTV is a balance ratio, not an income ratio.' }
    ]
  }),
  'net-worth-calculator': page({
    slug: 'net-worth-calculator',
    title: 'Net Worth Calculator | ClearCalc',
    h1: 'Net Worth Calculator',
    description: 'Add cash, investments, property, and other assets, then subtract mortgages, student loans, and other debts. The sample assets are $415,000 and the sample debts are $259,000.',
    intro: [
      'Net worth is what you own minus what you owe. This page adds four asset boxes and three debt boxes. It does not appraise a house, mark an investment to market, or subtract the tax that would be due if a retirement account were withdrawn.',
      'A negative result is allowed. It means the debts you listed are larger than the assets you listed. Leaving a box at zero omits it. There is no hidden asset and no hidden debt.',
      'The sample uses $12,000 of cash, $45,000 of investments, $350,000 of property, $8,000 of other assets, a $240,000 mortgage, $15,000 of student loans, and $4,000 of other debts.'
    ],
    steps: [
      'Enter cash, investments, property, and any other asset, using values you could defend.',
      'Enter the mortgage, student loans, and other debts at their current balances, not the original amounts borrowed.',
      'Press Calculate. The headline is assets minus debts.',
      'Change one box at a time if you want to see which balance moves the result. The page does not store a history.'
    ],
    howHeading: 'How net worth is added up',
    howItWorks: [
      'Assets are the sum of the four asset fields. Debts are the sum of the three debt fields. Net worth is the difference. No field is weighted, and property is not reduced by a selling-cost percentage unless you already reduced the value you typed.',
      'A retirement account can be typed as an investment. The balance is used as you typed it. A later tax on a withdrawal is not estimated, so the figure is not spendable cash.',
      'The same addition is what a personal balance sheet does. This page is that addition and nothing further. It does not project next year’s net worth.'
    ],
    formula: 'Assets = cash + investments + property + other assets\nDebts = mortgage + student loans + other debts\nNet worth = assets − debts',
    formulaNotes: [
      'The sample assets are $415,000.00 and the sample debts are $259,000.00.',
      'A negative net worth is shown with a minus sign. It is not floored at zero.'
    ],
    examplesHeading: 'Worked net worth examples',
    samples: [
      { title: 'The sample balance sheet', values: { cash: 12000, investments: 45000, property: 350000, otherassets: 8000, mortgage: 240000, student: 15000, otherdebts: 4000 }, blurb: 'Four asset lines and three debt lines. Nothing is imputed.' },
      { title: 'Cash and a credit-card debt only', values: { cash: 4000, investments: 0, property: 0, otherassets: 0, mortgage: 0, student: 0, otherdebts: 6000 }, blurb: 'The property and investment boxes are zero. The result is cash minus the other-debt box.' },
      { title: 'Debts larger than assets', values: { cash: 1000, investments: 0, property: 0, otherassets: 0, mortgage: 0, student: 20000, otherdebts: 0 }, blurb: 'A student loan with almost no assets produces a negative headline. That is the arithmetic, not an error.' }
    ],
    table: {
      heading: 'Sample net worth totals',
      caption: 'Each net worth figure is this calculator’s headline for that row. Boxes that are not mentioned are zero.',
      headers: ['What is included', 'Net worth'],
      rows: [
        ['Sample assets and debts', run('net-worth-calculator', { cash: 12000, investments: 45000, property: 350000, otherassets: 8000, mortgage: 240000, student: 15000, otherdebts: 4000 }).headline],
        ['$4,000 cash and $6,000 of other debt', run('net-worth-calculator', { cash: 4000, investments: 0, property: 0, otherassets: 0, mortgage: 0, student: 0, otherdebts: 6000 }).headline],
        ['$1,000 cash and a $20,000 student loan', run('net-worth-calculator', { cash: 1000, investments: 0, property: 0, otherassets: 0, mortgage: 0, student: 20000, otherdebts: 0 }).headline]
      ]
    },
    limitsHeading: 'What this net worth estimate leaves out',
    limits: [
      'Selling costs, an agent’s commission, and tax on a retirement withdrawal are not subtracted. Reduce the value yourself if you want a spendable figure.',
      'A pension that has no lump-sum value you can type is omitted. So is a future inheritance. The page adds only the balances you enter.',
      'Business interests, vehicles, and collectibles belong in other assets if you want them counted. There is no separate box and no depreciation schedule.',
      'The result is a snapshot. The retirement calculator projects growth. This page does not.'
    ],
    disclaimer: 'This net worth figure is the sum of the balances you type, not an appraisal and not financial advice.',
    faqs: [
      { q: 'How is net worth calculated?', a: 'Add the assets you list and subtract the debts you list. On the sample that is $415,000.00 of assets minus $259,000.00 of debts.' },
      { q: 'Should I use the mortgage balance or the original loan?', a: 'Use the current balance. The original loan is not what you still owe.' },
      { q: 'Can net worth be negative?', a: 'Yes. If the debts are larger than the assets, the headline is negative. The calculator does not replace that result with zero.' },
      { q: 'Does this net worth calculator subtract tax on a retirement account?', a: 'No. Type the statement balance if you want it included. A future tax on a withdrawal is not estimated.' },
      { q: 'Does the net worth page project next year?', a: 'No. It is a snapshot of the boxes you fill in. Growth belongs on the compound interest or retirement page.' }
    ],
    relatedLinks: [
      { slug: 'retirement-calculator', label: 'Retirement calculator', note: 'Projects a nest egg forward. It is not a balance sheet of today’s debts.' },
      { slug: 'compound-interest-calculator', label: 'Compound interest calculator', note: 'Grows a starting balance and a monthly deposit. It does not subtract a mortgage.' },
      { slug: 'debt-to-income-ratio-calculator', label: 'Debt-to-income ratio calculator', note: 'Compares monthly payments with income. Net worth compares balances, not payments.' }
    ]
  }),
  '50-30-20-budget-calculator': page({
    slug: '50-30-20-budget-calculator',
    title: '50/30/20 Budget Calculator | ClearCalc',
    h1: '50/30/20 Budget Calculator',
    description: 'Split monthly after-tax income into 50% needs, 30% wants, and 20% savings. On $5,000 the three targets are $2,500.00, $1,500.00, and $1,000.00.',
    intro: [
      'The 50/30/20 budget puts half of after-tax income toward needs, 30% toward wants, and 20% toward savings and extra debt payments. Elizabeth Warren and Amelia Warren Tyagi described that split in All Your Worth. It is a guideline, not a statute, and the labels are yours: rent can be a need, and a subscription can be a want.',
      'The headline is the needs target, 50% of the income you type. Wants and savings are on the lines under it. If you also type what you already spend, each comparison is that amount minus the target. A positive comparison means you are over the guideline. A negative comparison means you are under it.',
      'Leave the three actual boxes at zero when you only want the targets. Zero is a real comparison against the target, so the lines will show the whole target as an underspend. That is expected when the boxes are still empty.'
    ],
    steps: [
      'Enter monthly income after tax. The sample is 5000. A gross paycheck will overstate the targets.',
      'Optionally enter what you already spend on needs and wants, and what you already save.',
      'Press Calculate. Read the three targets first, then the three comparisons.',
      'Move a cost from wants to needs, or the reverse, by changing the amounts you type. The page does not classify a bill for you.'
    ],
    howHeading: 'How the 50/30/20 targets are split',
    howItWorks: [
      'Needs are half the income, wants are 30%, and savings are 20%. On $5,000 those are $2,500, $1,500, and $1,000. They add back to the income.',
      'The comparison lines subtract the target from the amount you typed. Spending $2,800 on needs against a $2,500 target is $300 over. Saving $400 against a $1,000 target is $600 under.',
      'The split does not know your city, your debt, or a minimum payment. A high rent can take more than half of after-tax income. The calculator still shows 50% so you can see the gap. It does not tell you the rent is affordable.'
    ],
    formula: 'Needs = after-tax income × 0.50\nWants = after-tax income × 0.30\nSavings = after-tax income × 0.20\nComparison = amount you typed − the matching target',
    formulaNotes: [
      'On $5,000 the targets are $2,500.00, $1,500.00, and $1,000.00.',
      'The three targets add to the income. Rounding to the cent can leave a one-cent gap on an income that does not divide evenly. Each target is rounded on its own.'
    ],
    examplesHeading: 'Worked 50/30/20 examples',
    samples: [
      { title: '$5,000 with no spending entered', values: { income: 5000, needs: 0, wants: 0, savings: 0 }, blurb: 'The targets are the result. The comparisons are negative by the whole target because the actual boxes are zero.' },
      { title: '$5,000 with spending above the needs target', values: { income: 5000, needs: 2800, wants: 1500, savings: 400 }, blurb: 'Needs are $300 over the 50% line and savings are $600 under the 20% line. Wants match the 30% line.' },
      { title: '$3,200 of after-tax income', values: { income: 3200, needs: 1600, wants: 900, savings: 700 }, blurb: 'The targets scale with income. The comparisons show which box is over or under its own percent.' }
    ],
    table: {
      heading: '50/30/20 targets by monthly income',
      caption: 'Each target is 50%, 30%, or 20% of the income, as this calculator displays it. Actual spending is not in the table.',
      headers: ['After-tax income', 'Needs', 'Wants', 'Savings'],
      rows: [3000, 5000, 7500].map((income) => {
        const result = run('50-30-20-budget-calculator', { income, needs: 0, wants: 0, savings: 0 });
        return [`$${income.toLocaleString('en-US')}`, result.headline.replace(' needs', ''), result.details[1].replace('Wants at 30%: ', ''), result.details[2].replace('Savings at 20%: ', '')];
      })
    },
    limitsHeading: 'What this budget split leaves out',
    limits: [
      'Gross income will make the targets too large if tax is still coming out. Use the paycheck or take-home page first if you need an after-tax figure, and keep the currency the same.',
      'The page does not decide whether a cost is a need or a want. A minimum debt payment might be a need, and an extra payment might be savings. That labeling is yours.',
      'An irregular annual bill is not smoothed. Divide it by 12 yourself if you want it inside the monthly targets.',
      'The guideline is not a promise that 20% is enough to retire, or that 50% is enough for housing. The rent page compares rent with 30% of gross income, which is a different rule.'
    ],
    disclaimer: 'This 50/30/20 split is a budgeting guideline, not financial advice and not a statement that any particular expense is a need.',
    faqs: [
      { q: 'What is the 50/30/20 budget on $5,000 a month?', a: 'Needs are $2,500.00, wants are $1,500.00, and savings are $1,000.00. That is 50%, 30%, and 20% of $5,000.' },
      { q: 'Should the 50/30/20 income be before or after tax?', a: 'After tax, if the split is meant to describe money you can assign. A gross figure makes every target larger than the cash you receive.' },
      { q: 'What does a positive comparison mean on the budget calculator?', a: 'The amount you typed is above the target. A negative comparison means it is below the target. Zero actual boxes produce a negative comparison equal to the whole target.' },
      { q: 'Who is the 50/30/20 rule from?', a: 'Elizabeth Warren and Amelia Warren Tyagi described it in All Your Worth. It is a guideline. It is not a tax rule and it is not a lender’s underwriting ratio.' },
      { q: 'Does the budget calculator classify rent as a need?', a: 'No. You decide which dollars are needs, wants, and savings. The rent affordability page is the one that compares rent with 30% of gross income.' }
    ],
    relatedLinks: [
      { slug: 'rent-affordability-calculator', label: 'Rent affordability calculator', note: 'Compares rent with 30% of gross income. That is not the same as 50% of after-tax income for every need.' },
      { slug: 'savings-goal-calculator', label: 'Savings goal calculator', note: 'Turns a target balance into a monthly deposit. The 20% line here is not that deposit unless you set the goal that way.' },
      { slug: 'uk-take-home-pay-calculator', label: 'UK take-home pay calculator', note: 'After-tax pay in pounds for 2026/27. Convert nothing automatically. Type the monthly cash figure you actually have.' }
    ]
  }),
  'macro-calculator': page({
    slug: 'macro-calculator',
    title: 'Macro Calculator: Protein, Carbs, and Fat | ClearCalc',
    h1: 'Macro Calculator',
    description: 'Convert a calorie target into grams of protein, carbohydrate, and fat. At 2,000 calories and 30/40/30, protein is 150.0 g, carbohydrate is 200.0 g, and fat is 66.7 g. This is not a diet prescription.',
    intro: [
      'A macro split is a way of dividing a calorie target you already have. Protein and carbohydrate are counted at 4 calories per gram. Fat is counted at 9 calories per gram. Those are the Atwater energy factors. The percentages have to add to 100, because the page will not invent the missing share.',
      'The sample is 2,000 calories with 30% protein, 40% carbohydrate, and 30% fat. That is 600 protein calories, 800 carbohydrate calories, and 600 fat calories, which is 150.0 grams, 200.0 grams, and 66.7 grams. The headline is the protein grams. It is the split you typed, not a recommendation.',
      'The TDEE page estimates maintenance calories. This page starts after that choice. It does not know your age, weight, or a medical condition. It is not medical advice.'
    ],
    steps: [
      'Enter the daily calorie target. The sample is 2000.',
      'Enter protein, carbohydrate, and fat as percentages of those calories. They must add to 100 within 0.05 of a percentage point.',
      'Press Calculate. The headline is protein in grams. Carbohydrate and fat grams are underneath.',
      'If the percentages do not add to 100, the page stops and tells you the total it saw. It does not rescale them.'
    ],
    howHeading: 'How calories become grams',
    howItWorks: [
      'Each percentage is multiplied by the calorie target. That calorie share is divided by 4 for protein, by 4 for carbohydrate, and by 9 for fat. The 2,000-calorie sample at 30/40/30 is the arithmetic in the description.',
      'A 25/45/30 split on the same 2,000 calories moves protein to 125.0 grams and carbohydrate to 225.0 grams. Fat stays 66.7 grams because its percentage did not change. The page is not choosing between those splits.',
      'Alcohol and fiber are not given their own factors here. If the calorie target already excludes them, the grams match that target. If it includes them, the three macros will not describe the whole plate.'
    ],
    formula: 'Protein grams = calories × protein percent / 100 / 4\nCarbohydrate grams = calories × carbohydrate percent / 100 / 4\nFat grams = calories × fat percent / 100 / 9\nThe three percentages must add to 100.',
    formulaNotes: [
      '2,000 calories at 30/40/30 is 150.0 g protein, 200.0 g carbohydrate, and 66.7 g fat.',
      'The fat grams display one decimal place. 600 / 9 is 66.666…, which displays as 66.7.'
    ],
    examplesHeading: 'Worked macro examples',
    samples: [
      { title: '2,000 calories at 30/40/30', values: { calories: 2000, protein: 30, carb: 40, fat: 30 }, blurb: 'The sample split. Protein is the headline.' },
      { title: '2,000 calories at 25/45/30', values: { calories: 2000, protein: 25, carb: 45, fat: 30 }, blurb: 'The same calories with a different protein and carbohydrate share. Fat is unchanged.' },
      { title: '1,600 calories at 30/40/30', values: { calories: 1600, protein: 30, carb: 40, fat: 30 }, blurb: 'The same percentages on a smaller calorie target. Every gram line scales down.' }
    ],
    table: {
      heading: 'Grams from three calorie targets',
      caption: 'Each row uses 30% protein, 40% carbohydrate, and 30% fat. Protein is this calculator’s headline. Carbohydrate and fat are the matching detail lines.',
      headers: ['Calories', 'Protein', 'Carbohydrate', 'Fat'],
      rows: [1600, 2000, 2500].map((calories) => {
        const result = run('macro-calculator', { calories, protein: 30, carb: 40, fat: 30 });
        return [String(calories), result.headline, result.details[0].replace('Carbohydrate: ', ''), result.details[1].replace('Fat: ', '')];
      })
    },
    limitsHeading: 'What this macro split leaves out',
    limits: [
      'It does not estimate how many calories you use. That question is the TDEE page, and even that page is an estimate.',
      'It does not set a minimum protein intake, a medical diet, or a limit for a kidney condition. The protein page multiplies body weight by a grams-per-kilogram figure, including the 0.8 g/kg adult RDA.',
      'The percentages must add to 100. A 30/40/20 split is rejected because 10% of the calories would be unassigned.',
      'This is not medical advice. A calorie target and a split do not diagnose a deficiency or prescribe what to eat.'
    ],
    disclaimer: 'This macro split is arithmetic from percentages you choose. It is not medical advice and not a diet plan.',
    faqs: [
      { q: 'How many grams of protein are in 2,000 calories at 30%?', a: '150.0 g. Thirty percent of 2,000 is 600 calories, and protein is counted at 4 calories per gram.' },
      { q: 'Why does fat use 9 calories per gram?', a: 'The Atwater factor used here is 9 calories per gram of fat, against 4 for protein and 4 for carbohydrate. The 600 fat calories in the sample are 66.7 grams.' },
      { q: 'What happens if the macro percentages do not add to 100?', a: 'The calculator stops and reports the total. It does not rescale 30, 40, and 20 into a 100% split.' },
      { q: 'Does the macro calculator choose a diet?', a: 'No. You type the calorie target and the three percentages. The TDEE page is a separate estimate of maintenance calories.' },
      { q: 'Is this macro calculator medical advice?', a: 'No. It converts a target you already chose into grams. It does not diagnose a deficiency or prescribe a diet.' }
    ],
    relatedLinks: [
      { slug: 'tdee-calculator', label: 'TDEE calculator', note: 'Estimates maintenance calories from a BMR and an activity factor. This page starts from a calorie number you already have.' },
      { slug: 'protein-intake-calculator', label: 'Protein intake calculator', note: 'Multiplies body weight by grams per kilogram. The default 0.8 is the adult RDA, which is a different question from a calorie percentage.' },
      { slug: 'calorie-calculator', label: 'Calorie calculator', note: 'Mifflin–St Jeor maintenance calories. It does not split those calories into grams.' }
    ]
  }),
  'protein-intake-calculator': page({
    slug: 'protein-intake-calculator',
    title: 'Protein Intake Calculator, Grams per Kilogram | ClearCalc',
    h1: 'Protein Intake Calculator',
    description: 'Multiply body weight by a grams-per-kilogram figure. At 75 kg and the adult Recommended Dietary Allowance of 0.8 g/kg, the result is 60.0 g per day. A higher multiplier is only arithmetic.',
    intro: [
      'The US Recommended Dietary Allowance for protein is 0.8 grams per kilogram of body weight per day for a healthy adult. That figure is the National Academies Dietary Reference Intake. The default box is 0.8 so the headline matches that allowance. At 75 kilograms the result is 60.0 grams.',
      'Pounds are converted with the international avoirdupois pound, 2.2046226218 pounds per kilogram. A person who types 165 pounds is not asked to convert first. The detail line shows the kilograms used.',
      'You can type a different multiplier up to 4 grams per kilogram. The page will multiply it. It will not tell you that a sports-nutrition range is appropriate for you. This is not medical advice.'
    ],
    steps: [
      'Choose kilograms or pounds. The sample weight, 75, is kilograms.',
      'Enter body weight. Leave the grams-per-kilogram box at 0.8 for the adult RDA, or type another figure if you are comparing a published number.',
      'Press Calculate. The headline is grams per day.',
      'Read the kilogram line before you quote the result. A pound entry is converted before the multiplication.'
    ],
    howHeading: 'How grams of protein are multiplied from body weight',
    howItWorks: [
      'Kilograms are used as typed. Pounds are divided by 2.2046226218. The grams are the kilograms times the multiplier. There is no activity factor and no calorie target on this page.',
      'The RDA is a population reference for healthy adults, not a prescription for pregnancy, growth, illness, or kidney disease. Those situations are why the page refuses to treat any other number in the box as advice.',
      'The macro page answers a different question: grams from a share of calories. Sixty grams of protein is 240 calories at 4 calories per gram. That calorie figure is not computed here, because this page does not have a calorie target.'
    ],
    formula: 'Kilograms = weight, or weight / 2.2046226218 when the weight is in pounds\nGrams per day = kilograms × grams per kilogram\nThe default multiplier, 0.8, is the adult Recommended Dietary Allowance.',
    formulaNotes: [
      '75 kg × 0.8 = 60.0 g.',
      '165 lb is 74.84 kg before rounding the display, and at 0.8 g/kg the grams follow that kilogram figure rather than a rounded weight.'
    ],
    examplesHeading: 'Worked protein examples',
    samples: [
      { title: '75 kg at the 0.8 g/kg RDA', values: { units: 1, weight: 75, perkg: 0.8 }, blurb: 'The default multiplier. The headline is the adult RDA applied to 75 kilograms.' },
      { title: '165 pounds at 0.8 g/kg', values: { units: 2, weight: 165, perkg: 0.8 }, blurb: 'The pounds are converted with the international pound before the 0.8 multiplier.' },
      { title: '75 kg at 1.6 g/kg', values: { units: 1, weight: 75, perkg: 1.6 }, blurb: 'A different multiplier, shown only as multiplication. It is not a statement that 1.6 g/kg is the right intake.' }
    ],
    table: {
      heading: 'Protein at 0.8 grams per kilogram',
      caption: 'The gram column is this calculator’s headline at the adult RDA multiplier. Pound rows are converted before the multiplication.',
      headers: ['Weight', 'Grams at 0.8 g/kg'],
      rows: [
        ['60 kg', run('protein-intake-calculator', { units: 1, weight: 60, perkg: 0.8 }).headline],
        ['75 kg', run('protein-intake-calculator', { units: 1, weight: 75, perkg: 0.8 }).headline],
        ['90 kg', run('protein-intake-calculator', { units: 1, weight: 90, perkg: 0.8 }).headline],
        ['165 lb', run('protein-intake-calculator', { units: 2, weight: 165, perkg: 0.8 }).headline]
      ]
    },
    limitsHeading: 'What this protein figure leaves out',
    limits: [
      'It is not medical advice. The 0.8 g/kg RDA is a reference for healthy adults. Pregnancy, childhood, illness, and kidney disease are not modeled.',
      'The multiplier is capped at 4 g/kg so a stray extra zero is rejected. A number inside that cap is still not an endorsement.',
      'Calories, training load, and body composition are not inputs. The macro page converts a calorie percentage into grams if that is the question instead.',
      'Ideal body weight is a different formula. This page uses the weight you type, not a Devine or Robinson weight from the ideal-weight page.'
    ],
    disclaimer: 'This protein figure multiplies a weight by a number you type. The default 0.8 g/kg is the adult Recommended Dietary Allowance. It is not medical advice.',
    faqs: [
      { q: 'How much protein is 0.8 grams per kilogram at 75 kg?', a: '60.0 g per day. That multiplier is the adult Recommended Dietary Allowance from the National Academies Dietary Reference Intakes.' },
      { q: 'How are pounds converted for the protein calculator?', a: 'Divide by 2.2046226218, the international avoirdupois pound. The kilogram line under the headline is the weight that was multiplied.' },
      { q: 'Does this protein calculator recommend more than the RDA?', a: 'No. You can type another multiplier and the page will multiply it. The multiplication is not a recommendation.' },
      { q: 'Is the protein calculator medical advice?', a: 'No. It does not account for pregnancy, illness, or kidney disease. A clinician is the right source for a limit in those situations.' },
      { q: 'How is this different from the macro calculator?', a: 'This page multiplies body weight. The macro page divides a calorie target by 4 or 9. Sixty grams of protein is not a percentage until you also have a calorie target.' }
    ],
    relatedLinks: [
      { slug: 'calorie-calculator', label: 'Calorie calculator', note: 'Mifflin–St Jeor maintenance calories. Protein grams are not a calorie total.' },
      { slug: 'macro-calculator', label: 'Macro calculator', note: 'Grams from a percentage of calories. It does not use body weight.' },
      { slug: 'ideal-weight-calculator', label: 'Ideal weight calculator', note: 'Devine, Robinson, and Miller weights from height. This page uses the weight you already have.' }
    ]
  }),
  'one-rep-max-calculator': page({
    slug: 'one-rep-max-calculator',
    title: 'One Rep Max Calculator: Epley, Brzycki, Lombardi | ClearCalc',
    h1: 'One Rep Max Calculator',
    description: 'Estimate a one-rep max from a submaximal set. A 100-unit lift for 5 reps is 116.7 with Epley, 112.5 with Brzycki, and 117.5 with Lombardi. One rep returns the weight itself.',
    intro: [
      'A one-rep max is the heaviest single lift. These formulas estimate it from a lighter weight you lifted for several reps. Epley is weight × (1 + reps / 30). Brzycki is weight × 36 / (37 − reps). Lombardi is weight × reps raised to the power 0.10. The form shows all three and uses the one you select as the headline.',
      'A single rep needs no estimate. Epley and Brzycki return the weight. Lombardi returns the same weight because 1 to the power 0.10 is 1. The page limits reps to 12 because the regressions are less stable as the set gets longer.',
      'The weight unit is whatever you typed. The formulas do not convert pounds to kilograms. This is not a training program and it is not medical advice. Stop a set that is not under control.'
    ],
    steps: [
      'Enter the weight you lifted and the number of completed reps, from 1 to 12. The sample is 100 for 5 reps.',
      'Choose Epley, Brzycki, or Lombardi for the headline. The other two formulas are still printed.',
      'Press Calculate. Compare the three numbers before you load a bar to the headline.',
      'Treat the result as an estimate from one set. A different exercise, a different rest, or a failed rep is not in the formula.'
    ],
    howHeading: 'How the Epley, Brzycki, and Lombardi estimates differ',
    howItWorks: [
      'Epley adds a fraction of the weight for every rep past the first, using reps / 30. Five reps add 5/30 of the weight, so 100 becomes 116.7. Brzycki uses a denominator that shrinks as the reps rise, so the same set is 112.5. Lombardi uses a power curve, so five reps become 117.5.',
      'The three numbers are not a range the body is guaranteed to lift. They are three published regressions. The gap between them is a reason to treat the headline as an estimate.',
      'Brzycki’s denominator is 37 minus the reps. The page stops at 12 reps, far from the point where the denominator would reach zero.'
    ],
    formula: 'Epley = weight × (1 + reps / 30)\nBrzycki = weight × 36 / (37 − reps)\nLombardi = weight × reps^0.10\nReps are a whole number from 1 to 12.',
    formulaNotes: [
      '100 for 5 reps: Epley 116.7, Brzycki 112.5, Lombardi 117.5.',
      '100 for 1 rep: all three return 100.0.'
    ],
    examplesHeading: 'Worked one-rep max examples',
    samples: [
      { title: '100 for 5 reps, Epley headline', values: { weight: 100, reps: 5, formula: 1 }, blurb: 'The headline uses Epley. Brzycki and Lombardi are still in the details.' },
      { title: '100 for 5 reps, Brzycki headline', values: { weight: 100, reps: 5, formula: 2 }, blurb: 'The same set with the headline switched. The three estimates do not change. Only the headline does.' },
      { title: '100 for 1 rep', values: { weight: 100, reps: 1, formula: 1 }, blurb: 'A completed single is already a one-rep max. The formulas agree.' }
    ],
    table: {
      heading: 'Estimates for a 100-unit lift',
      caption: 'Each cell is the matching formula from this calculator. The weight unit is the one you have in mind. The page does not convert it.',
      headers: ['Reps', 'Epley', 'Brzycki', 'Lombardi'],
      rows: [1, 5, 10].map((reps) => {
        const result = run('one-rep-max-calculator', { weight: 100, reps, formula: 1 });
        return [String(reps), result.details[1].replace('Epley: ', ''), result.details[2].replace('Brzycki: ', ''), result.details[3].replace('Lombardi: ', '')];
      })
    },
    limitsHeading: 'What this one-rep max estimate leaves out',
    limits: [
      'It is not medical advice and it is not a program. A formula does not know an injury, a spotter, or whether the reps were complete.',
      'Reps above 12 are rejected. The estimates get less useful as the set gets longer, and Brzycki is not defined in a useful way near 37 reps.',
      'Pounds and kilograms are not converted. A 100-kilogram result is not a 100-pound result.',
      'The three formulas can disagree by several units on the same set. That gap is visible on purpose. It is not a confidence interval.'
    ],
    disclaimer: 'This one-rep max is an estimate from a published formula. It is not medical advice and not a training program.',
    faqs: [
      { q: 'What is the Epley one-rep max for 100 lifted 5 times?', a: '116.7. Epley multiplies the weight by 1 plus the reps divided by 30. Five divided by 30 is the extra fraction.' },
      { q: 'What is the Brzycki formula?', a: 'Weight × 36 / (37 − reps). For 100 lifted 5 times that is 112.5. The page will not run it near 37 reps.' },
      { q: 'What is the Lombardi one-rep max formula?', a: 'Weight × reps raised to the power 0.10. For 100 lifted 5 times the headline is 117.5 when Lombardi is selected.' },
      { q: 'Why do Epley, Brzycki, and Lombardi disagree?', a: 'They are different regressions from submaximal sets. The page prints all three so the gap is visible. None of them is a measured single.' },
      { q: 'Is the one-rep max calculator medical advice?', a: 'No. It does not clear you to attempt the estimate. Stop a set that is not under control.' }
    ],
    relatedLinks: [
      { slug: 'bmi-calculator', label: 'BMI calculator', note: 'Weight and height as an index. It does not estimate a lift.' },
      { slug: 'heart-rate-zone-calculator', label: 'Heart rate zone calculator', note: 'A training heart-rate estimate. It is not a load on a bar.' },
      { slug: 'pace-calculator', label: 'Pace calculator', note: 'Running pace from distance and time. A rep scheme is a different workout.' }
    ]
  }),
  'heart-rate-zone-calculator': page({
    slug: 'heart-rate-zone-calculator',
    title: 'Heart Rate Zone Calculator: Max HR and Karvonen | ClearCalc',
    h1: 'Heart Rate Zone Calculator',
    description: 'Estimate maximum heart rate as 220 minus age, then build Karvonen zones from a resting heart rate. At age 35 and a resting rate of 60, the estimated maximum is 185 bpm. This is not a measured maximum.',
    intro: [
      'A common estimate of maximum heart rate is 220 minus age. The American Heart Association describes that figure as a rough guide and describes moderate effort for many adults as about 50% to 70% of maximum, and vigorous effort as about 70% to 85%. This page prints both of those percent-of-max ranges.',
      'Karvonen’s heart-rate reserve method is different. It subtracts the resting heart rate from the estimated maximum, multiplies by an intensity, and adds the resting rate back. A fitter resting rate therefore lifts the zone. The page shows 50–60%, 60–70%, 70–80%, and 80–90% of heart-rate reserve.',
      'Neither number is a measured maximum from a stress test. A medicine that changes heart rate, or a heart condition, can make both estimates the wrong target. This is not medical advice.'
    ],
    steps: [
      'Enter age as a whole number from 15 to 90. The sample is 35, so the estimated maximum is 185.',
      'Enter a resting heart rate between 30 and 120 beats per minute. The sample is 60.',
      'Press Calculate. The headline is the estimated maximum. The Karvonen bands and the percent-of-max bands are underneath.',
      'Do not use the headline as a target if a clinician has given you a different limit.'
    ],
    howHeading: 'How 220 minus age and Karvonen zones are built',
    howItWorks: [
      'Maximum is 220 minus age. Heart-rate reserve is that maximum minus the resting rate. A Karvonen bound is resting plus reserve times the intensity. At age 35 and a resting rate of 60, the reserve is 125. The 50% bound is 60 + 62.5, which rounds to 123, and the 60% bound rounds to 135.',
      'Percent of maximum ignores the resting rate. Fifty percent of 185 is 93, and 70% is 130. Those beats are lower than the Karvonen band at the same percents because the resting rate was not added back in the same way. The two methods answer different questions. The page prints both.',
      'The resting rate has to be below the estimated maximum. A resting rate at or above 220 minus age is rejected, because the reserve would not be positive.'
    ],
    formula: 'Estimated maximum = 220 − age\nHeart-rate reserve = maximum − resting heart rate\nKarvonen = resting + reserve × intensity\nModerate percent-of-max, from the American Heart Association description: 50% to 70% of the estimated maximum\nVigorous percent-of-max: 70% to 85%',
    formulaNotes: [
      'Age 35 and a resting rate of 60: maximum 185 bpm, reserve 125 bpm.',
      'The zone edges are rounded to the nearest beat. A .5 rounds with the ordinary half-up rule used by Math.round.'
    ],
    examplesHeading: 'Worked heart-rate examples',
    samples: [
      { title: 'Age 35, resting 60', values: { age: 35, resting: 60 }, blurb: 'The sample. The headline is 185 bpm, and both zone methods are listed.' },
      { title: 'Age 50, resting 70', values: { age: 50, resting: 70 }, blurb: 'A lower estimated maximum and a higher resting rate. The reserve shrinks from both sides.' },
      { title: 'Age 25, resting 50', values: { age: 25, resting: 50 }, blurb: 'A higher estimated maximum. It is still 220 minus age, not a lab measurement.' }
    ],
    table: {
      heading: 'Estimated maximum from 220 minus age',
      caption: 'The maximum is this calculator’s headline. Resting heart rate is 60 bpm in every row so the Karvonen lines underneath would use that resting rate. The table itself shows only the maximum.',
      headers: ['Age', 'Estimated maximum'],
      rows: [25, 35, 50, 65].map((age) => [String(age), run('heart-rate-zone-calculator', { age, resting: 60 }).headline])
    },
    limitsHeading: 'What this heart-rate estimate leaves out',
    limits: [
      'It is not medical advice. 220 minus age is a rough estimate. A measured maximum can be quite different.',
      'Beta blockers and other medicines can lower heart rate. A zone built from 220 minus age can then be the wrong target. Use a limit from a clinician in that case.',
      'The page does not read a chest strap or a watch. The resting rate is the number you type.',
      'Percent-of-max and Karvonen are both shown because they are easy to mix up. A training plan that names one of them is not using the other.'
    ],
    disclaimer: 'This heart-rate estimate is not medical advice. It is 220 minus age and the Karvonen arithmetic. A clinician should set a limit if you have a heart condition or take medicine that changes heart rate.',
    faqs: [
      { q: 'What is the estimated maximum heart rate at age 35?', a: '185 bpm, from 220 minus 35. That is a rough estimate, not a measured maximum.' },
      { q: 'How does the Karvonen heart-rate formula work?', a: 'Subtract the resting rate from the estimated maximum, multiply by the intensity, and add the resting rate back. At age 35 and a resting rate of 60, the reserve is 125 bpm.' },
      { q: 'What heart-rate range does the American Heart Association describe as moderate?', a: 'About 50% to 70% of maximum heart rate for many adults, with vigorous effort about 70% to 85%. The page prints both ranges from the estimated maximum.' },
      { q: 'Why can Karvonen and percent of maximum disagree?', a: 'Percent of maximum ignores the resting rate. Karvonen starts from the resting rate and uses only the reserve. The same intensity percent is not the same beat count.' },
      { q: 'Is the heart rate zone calculator medical advice?', a: 'No. Do not use 220 minus age as a target if a clinician has given you a different limit, or if a medicine changes your heart rate.' }
    ],
    relatedLinks: [
      { slug: 'pace-calculator', label: 'Pace calculator', note: 'Minutes per kilometre or mile. A pace is not a heart rate.' },
      { slug: 'calorie-calculator', label: 'Calorie calculator', note: 'Maintenance calories from the Mifflin–St Jeor equation. It does not use a heart-rate zone.' },
      { slug: 'one-rep-max-calculator', label: 'One rep max calculator', note: 'A lifting estimate. It is a different kind of training number.' }
    ]
  }),
  'day-of-the-week-calculator': page({
    slug: 'day-of-the-week-calculator',
    title: 'Day of the Week Calculator | ClearCalc',
    h1: 'Day of the Week Calculator',
    description: 'Find the weekday for any calendar date. 1 January 2026 is a Thursday. 12 November 2026 is a Thursday. The date is read as a civil year-month-day, not as a UTC instant.',
    intro: [
      'The weekday is the day name of a civil date: Sunday through Saturday. 1 January 2026 is a Thursday. 12 November 2026 is also a Thursday. The calculator builds the date from the year, month, and day you type, in the browser’s local calendar, so a date does not roll backward the way a UTC midnight can.',
      'An impossible date is rejected. 2026-02-31 is not a day, and the form says so instead of overflowing into March. A real 29 February is accepted only in a leap year. 2028 is a leap year. 2026 is not.',
      'This page does not count the days between two dates, and it does not remove weekends or holidays. The date-difference page counts elapsed days. The business-day pages remove weekends and a holiday list.'
    ],
    steps: [
      'Enter a date. The sample is 2026-01-01.',
      'Press Calculate. The headline is the weekday name.',
      'Change the date to check another day. The page does not keep a list of earlier queries.',
      'Use the week-number page if you wanted the ISO week rather than the weekday name.'
    ],
    howHeading: 'How the weekday is chosen',
    howItWorks: [
      'The year, month, and day are read from the date field and passed to the local calendar. The weekday number from that calendar is mapped to a name, with Sunday as the first name in the list and Saturday as the last. The headline is the name.',
      '1 January 2026 falls on Thursday, which fixes the rest of that civil year. 12 November 2026 is 315 days later and is also a Thursday. You do not need that day count to use the page. The date-difference page is the one that counts it.',
      'The result is the Gregorian weekday. It is not a market session and it is not a business day. A Thursday can still be a holiday.'
    ],
    formula: 'Read the date as year-month-day in the local calendar\nWeekday = the calendar’s day of the week for that date\nSunday through Saturday are the seven names',
    formulaNotes: [
      '2026-01-01 is Thursday.',
      '2026-11-12 is Thursday. 2028-02-29 is a real date because 2028 is a leap year.'
    ],
    examplesHeading: 'Worked day-of-the-week examples',
    samples: [
      { title: '1 January 2026', values: { date: '2026-01-01' }, blurb: 'The first day of the civil year. The headline is Thursday.' },
      { title: '12 November 2026', values: { date: '2026-11-12' }, blurb: 'A date later in the same year. The weekday is Thursday again.' },
      { title: '29 February 2028', values: { date: '2028-02-29' }, blurb: 'A leap day. The date is accepted because 2028 is divisible by 4 and is not a skipped century.' }
    ],
    table: {
      heading: 'Weekdays for dates in 2026',
      caption: 'Each weekday is this calculator’s headline.',
      headers: ['Date', 'Weekday'],
      rows: ['2026-01-01', '2026-07-04', '2026-11-12', '2026-12-25'].map((date) => [date, run('day-of-the-week-calculator', { date }).headline])
    },
    limitsHeading: 'What this weekday lookup leaves out',
    limits: [
      'It does not count elapsed days. Two dates and a day count belong on the date-difference page.',
      'It does not skip weekends or holidays. A business-day count is a different page for the US, the UK, or Canada.',
      'It does not give the ISO week number. That is the week-number page, and a date near 1 January can fall in the previous or next ISO year.',
      'Historical calendar reforms before the Gregorian calendar are not applied. The date is interpreted with the calendar the browser uses.'
    ],
    disclaimer: 'This weekday is the civil day name of the date you type. It is not a business-day count.',
    faqs: [
      { q: 'What day of the week is 1 January 2026?', a: 'Thursday. The calculator reads 2026-01-01 as a civil date and returns that name.' },
      { q: 'What day of the week is 12 November 2026?', a: 'Thursday. The date is 2026-11-12.' },
      { q: 'Does the day-of-the-week calculator accept 29 February 2026?', a: 'No. 2026 is not a leap year, so 29 February is rejected. 29 February 2028 is accepted.' },
      { q: 'Why is the date not treated as a UTC midnight?', a: 'A UTC instant near midnight can fall on the previous local day. The year, month, and day are read directly so the civil date stays put.' },
      { q: 'Does this page count business days?', a: 'No. It names the weekday. The US, UK, and Canada business-day pages are the ones that remove weekends and holidays.' }
    ],
    relatedLinks: [
      { slug: 'date-difference-calculator', label: 'Date difference calculator', note: 'Elapsed days between two dates. It does not name the weekday of a single date as the headline.' },
      { slug: 'week-number-calculator', label: 'ISO week number calculator', note: '1 January 2026 is ISO week 1 of 2026. The weekday and the week number are different questions.' },
      { slug: 'add-days-calculator', label: 'Add days calculator', note: 'Moves a date forward or backward. This page tells you what weekday you landed on only if you come back and ask.' }
    ]
  }),
  'week-number-calculator': page({
    slug: 'week-number-calculator',
    title: 'Week Number Calculator, ISO 8601 | ClearCalc',
    h1: 'Week Number Calculator',
    description: 'Find the ISO 8601 week number. 1 January 2026 is week 1 of 2026. 29 December 2025 is also week 1 of 2026, because ISO weeks start on Monday and week 1 contains the first Thursday.',
    intro: [
      'ISO 8601 weeks start on Monday. Week 1 is the week that contains the first Thursday of the calendar year, which is also the week that contains 4 January. A date in late December can belong to week 1 of the next ISO year. A date in early January can belong to week 52 or 53 of the previous ISO year.',
      '1 January 2026 is a Thursday, so it is inside week 1 of 2026. The Monday of that week is 29 December 2025, and that Monday is also week 1 of 2026. The calendar year and the week-numbering year are not always the same.',
      '31 December 2026 is a Thursday. The next Monday, 4 January 2027, starts week 1 of 2027, so 31 December 2026 stays in week 53 of 2026. This is not a week that starts on Sunday, and it is not a count of weeks since 1 January.'
    ],
    steps: [
      'Enter a date. The sample is 2026-01-01.',
      'Press Calculate. The headline is the ISO week and the ISO week-numbering year.',
      'Check the year in the headline before you quote the week. Near 1 January the ISO year can differ from the calendar year.',
      'Use the day-of-the-week page if you only wanted the weekday name.'
    ],
    howHeading: 'How an ISO 8601 week number is found',
    howItWorks: [
      'The date is moved to the Thursday of its week, by stepping back from Monday as day 0. The year of that Thursday is the ISO week-numbering year. Week 1’s Thursday is the Thursday of the week that contains 4 January. The week number is one plus the number of weeks from that Thursday to the date’s Thursday.',
      'Because 1 January 2026 is itself a Thursday, it is week 1 and the ISO year is 2026. 29 December 2025 shares that Thursday, so it is the same week number and the same ISO year even though the calendar year is 2025.',
      'A US week that starts on Sunday would put a different date at the boundary. This page does not offer that week. The label in the headline says the ISO year so the two systems are not mixed.'
    ],
    formula: 'ISO weeks start on Monday\nWeek 1 contains the first Thursday of the calendar year, and contains 4 January\nThe ISO week-numbering year is the year of the Thursday of the date’s week',
    formulaNotes: [
      '2026-01-01 is week 1 of 2026.',
      '2025-12-29 is week 1 of 2026. 2026-12-31 is week 53 of 2026.'
    ],
    examplesHeading: 'Worked ISO week examples',
    samples: [
      { title: '1 January 2026', values: { date: '2026-01-01' }, blurb: 'A Thursday, and the first Thursday of 2026, so it is week 1.' },
      { title: '29 December 2025', values: { date: '2025-12-29' }, blurb: 'The Monday of the same week. The calendar year is 2025 and the ISO year is 2026.' },
      { title: '31 December 2026', values: { date: '2026-12-31' }, blurb: 'A Thursday that still belongs to 2026. The following Monday starts week 1 of 2027, so this date is week 53.' }
    ],
    table: {
      heading: 'ISO week numbers around the year boundary',
      caption: 'Each headline is the ISO week and week-numbering year from this calculator.',
      headers: ['Date', 'ISO week'],
      rows: ['2025-12-29', '2026-01-01', '2026-11-12', '2026-12-31'].map((date) => [date, run('week-number-calculator', { date }).headline])
    },
    limitsHeading: 'What this week number leaves out',
    limits: [
      'It is not a week that starts on Sunday. US calendars often print that week. The number here will not match a Sunday-start calendar at the boundary.',
      'It is not the count of weeks since 1 January. Week 1 can start in December of the previous calendar year.',
      'The weekday name is in the details, but the day-of-the-week page is the one whose headline is the name.',
      'Business days and holiday lists are not removed. A week number does not say how many of those days were working days.'
    ],
    disclaimer: 'This week number follows ISO 8601. It is the week that starts on Monday and contains the date’s Thursday.',
    faqs: [
      { q: 'What ISO week is 1 January 2026?', a: 'Week 1 of 2026. That date is a Thursday, and week 1 is the week that contains the first Thursday.' },
      { q: 'Why is 29 December 2025 in week 1 of 2026?', a: 'ISO weeks start on Monday. 29 December 2025 is the Monday of the week that contains 1 January 2026, so the ISO year is 2026.' },
      { q: 'What ISO week is 31 December 2026?', a: 'Week 53 of 2026. The next week, starting Monday 4 January 2027, is week 1 of 2027.' },
      { q: 'Does this week number start on Sunday?', a: 'No. ISO 8601 weeks start on Monday. A Sunday-start calendar can show a different number near the year boundary.' },
      { q: 'Is the ISO week the same as the number of weeks since 1 January?', a: 'No. Week 1 can begin in the previous December, and the last days of December can fall in week 1 of the next ISO year.' }
    ],
    relatedLinks: [
      { slug: 'day-of-the-week-calculator', label: 'Day of the week calculator', note: '1 January 2026 is a Thursday. The week number is a separate headline.' },
      { slug: 'date-difference-calculator', label: 'Date difference calculator', note: 'Elapsed days between two dates. It does not number the ISO week.' },
      { slug: 'add-days-calculator', label: 'Add days calculator', note: 'Moves a date by a number of days. Come back to this page for the ISO week of the result.' }
    ]
  }),
  'btu-calculator': page({
    slug: 'btu-calculator',
    title: 'BTU Calculator for Room Air Conditioner Size | ClearCalc',
    h1: 'BTU Air Conditioner Size Calculator',
    description: 'Match a room to the ENERGY STAR room air conditioner chart. Exactly 300 square feet is 8,000 BTU/h before adjustments, because that floor area starts the next row. A room from 250 up to 300 is 7,000. Heavy shade takes 10% off, strong sun adds 10%, a kitchen adds 4,000, and each person past two adds 600.',
    intro: [
      'ENERGY STAR publishes a room air conditioner sizing chart that pairs floor area with a cooling capacity in BTU per hour. The chart assumes an 8-foot ceiling. A room from 100 up to 150 square feet is 5,000 BTU/h. A room from 250 up to 300 is 7,000. A room from 450 up to 550 is 12,000. The chart continues through 1,500 up to 2,000 square feet at 30,000 BTU/h.',
      'The same ENERGY STAR guidance then adjusts the chart. A heavily shaded room is reduced by 10%. A very sunny room is increased by 10%. A kitchen adds 4,000 BTU/h. Each person regularly in the room beyond two adds 600 BTU/h. This page applies those adjustments after the chart lookup.',
      'The chart is a screen for a single room, not a Manual J load calculation for a whole house. A higher ceiling, poor insulation, and a ducted system are outside it. The square-footage page can help with the floor area. It does not choose a BTU capacity.'
    ],
    steps: [
      'Enter the floor area in square feet, from 100 to 2,000. The sample is 300.',
      'Choose heavily shaded, neither, or very sunny. The sample is neither, so the chart capacity is not adjusted for sun.',
      'Say whether the unit cools a kitchen, and enter how many people are regularly in the room. Two people do not add the occupant adjustment. A third person adds 600 BTU/h.',
      'Press Calculate. The headline is the adjusted capacity. The chart capacity before the adjustments is the first detail line.'
    ],
    howHeading: 'How the ENERGY STAR room chart is applied',
    howItWorks: [
      'The area is matched to a row. The lower bound is included and the upper bound belongs to the next row, except that 2,000 square feet stays on the last row at 30,000 BTU/h. A 300 square foot room is in the 250-up-to-300 row only when it is under 300. At exactly 300 it is in the next row, 300 up to 350, which is 8,000 BTU/h. The sample of 300 is therefore 8,000 before adjustments. A room of 299 uses the 7,000 row.',
      'Shade multiplies the chart capacity by 0.9. Sun multiplies it by 1.1. The kitchen and the extra people are added after that multiplication. Two people are already assumed by the chart, so the occupant add-on starts at the third person.',
      'Areas under 100 or over 2,000 are rejected. The published room chart does not give a capacity there, and this page does not invent one.'
    ],
    formula: 'Find the ENERGY STAR row for the floor area\nIf heavily shaded, multiply by 0.9\nIf very sunny, multiply by 1.1\nIf the room is a kitchen, add 4,000 BTU/h\nAdd 600 BTU/h for each person beyond two\nThe chart assumes an 8-foot ceiling and stops at 2,000 square feet',
    formulaNotes: [
      'The rows are 100–150 at 5,000, 150–250 at 6,000, 250–300 at 7,000, 300–350 at 8,000, 350–400 at 9,000, 400–450 at 10,000, 450–550 at 12,000, 550–700 at 14,000, 700–1,000 at 18,000, 1,000–1,200 at 21,000, 1,200–1,400 at 23,000, 1,400–1,500 at 24,000, and 1,500–2,000 at 30,000.',
      'A boundary belongs to the higher row. 300 square feet is 8,000 BTU/h on the chart. 250 square feet is 6,000.'
    ],
    examplesHeading: 'Worked air-conditioner size examples',
    samples: [
      { title: '300 square feet, no adjustments', values: { area: 300, sun: 2, kitchen: 0, people: 2 }, blurb: 'Exactly 300 square feet is the start of the 8,000 BTU/h row. Two people and no kitchen leave the chart figure unchanged.' },
      { title: '300 square feet, very sunny kitchen, three people', values: { area: 300, sun: 3, kitchen: 1, people: 3 }, blurb: 'The chart capacity is increased by 10%, then 4,000 is added for the kitchen and 600 for the third person.' },
      { title: '450 square feet, heavily shaded', values: { area: 450, sun: 1, kitchen: 0, people: 2 }, blurb: '450 square feet starts the 12,000 BTU/h row. Heavy shade multiplies that capacity by 0.9.' }
    ],
    table: {
      heading: 'ENERGY STAR room capacity before adjustments',
      caption: 'Each capacity is this calculator’s headline for the lower bound of the row, with no shade, sun, kitchen, or extra-person adjustment. The upper bound of a row is the lower bound of the next row.',
      headers: ['Area row (sq ft)', 'Chart capacity (BTU/h)'],
      rows: BTU_CHART.map(([low, high, capacity]) => [`${low} up to ${high}`, run('btu-calculator', { area: low, sun: 2, kitchen: 0, people: 2 }).headline])
    },
    limitsHeading: 'What this BTU estimate leaves out',
    limits: [
      'The chart assumes an 8-foot ceiling. A taller ceiling can need more capacity. This page does not scale by ceiling height, because the published chart does not give that factor.',
      'It is a single-room screen. A whole-home system needs a load calculation such as Manual J. Insulation, windows, and climate are not inputs beyond the shade and sun choice.',
      'Areas under 100 square feet or over 2,000 square feet are outside the chart and are rejected rather than extrapolated.',
      'The square-footage page measures the floor. This page does not. Measure the room first if the area is not already known.'
    ],
    disclaimer: 'This capacity follows the ENERGY STAR room air conditioner chart and its published adjustments. It is not a Manual J load calculation.',
    faqs: [
      { q: 'How many BTU does a 300 square foot room need?', a: '8,000 BTU/h on the ENERGY STAR chart before adjustments, because 300 square feet is the start of that row. A room under 300, down to 250, is on the 7,000 row.' },
      { q: 'How does ENERGY STAR adjust room air conditioner size?', a: 'Reduce the chart capacity by 10% if the room is heavily shaded. Increase it by 10% if the room is very sunny. Add 4,000 BTU/h for a kitchen and 600 BTU/h for each person beyond two.' },
      { q: 'What ceiling height does the BTU chart assume?', a: 'Eight feet. ENERGY STAR states that the capacities are calculated for an 8-foot ceiling. This page does not invent a factor for a higher ceiling.' },
      { q: 'Can this BTU calculator size a whole house?', a: 'No. The chart is for a room air conditioner. A whole-home system needs a load calculation. Areas above 2,000 square feet are rejected.' },
      { q: 'Where does the room air conditioner table come from?', a: 'The ENERGY STAR room air conditioner sizing chart, including the shade, sun, kitchen, and occupancy adjustments printed with that chart.' }
    ],
    relatedLinks: [
      { slug: 'square-footage-calculator', label: 'Square footage calculator', note: 'Floor area from length and width. This page starts after you have the square feet.' },
      { slug: 'room-paint-calculator', label: 'Room paint calculator', note: 'Gallons for the walls. It does not choose a cooling capacity.' },
      { slug: 'electricity-cost-calculator', label: 'Electricity cost calculator', note: 'The cost of running a unit once you know its watts. BTU capacity is not a wattage.' }
    ]
  })
};


