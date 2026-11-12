import { calculate, SALES_TAX_PRESETS } from '../lib/calculate.js';
import { clusterCalculatorContent } from './cluster-calculator-content.js';
import { nov3CalculatorContent } from './nov3-calculator-content.js';
import { nov7CalculatorContent } from './nov7-calculator-content.js';
import { nov12RestContent } from './nov12-rest-content.js';

const STAMP_PRICES = [150000, 190000, 220000, 250000, 270000, 300000, 360000, 400000, 420000, 430000, 500000, 600000, 750000, 850000, 900000, 1000000, 1100000, 1500000, 2000000];

function stampCell(price, buyer) {
  const headline = calculate('england-stamp-duty-calculator', { price, buyer, residence: 1, period: 1 }).headline;
  return buyer === 2 && price > 500000 ? `${headline} (no relief)` : headline;
}

const stampBase = structuredClone(clusterCalculatorContent['england-stamp-duty-calculator']);
stampBase.title = 'Stamp Duty Calculator UK (England & Northern Ireland) 2026 | ClearCalc';
stampBase.h1 = 'Stamp Duty Calculator UK (England & Northern Ireland)';
stampBase.description = 'Stamp Duty Calculator UK for England and Northern Ireland in 2026. How much stamp duty on £190k, £430k, £850k and £1.1 million for a home mover, a first-time buyer, and an additional property, using the rates from 1 April 2025. The price table is produced by the same calculation as the form.';
stampBase.intro = [
  'This Stamp Duty Calculator UK covers England and Northern Ireland for a 2026 completion. The default rates are the residential Stamp Duty Land Tax bands in force from 1 April 2025, which GOV.UK is still publishing for the 2026/27 year: 0% to £125,000, 2% to £250,000, 5% to £925,000, 10% to £1.5 million, and 12% above that. Scotland uses Land and Buildings Transaction Tax. Wales uses Land Transaction Tax. Neither is calculated on this page.',
  ...stampBase.intro.slice(1)
];
stampBase.table = {
  heading: 'How much stamp duty on £X?',
  anchor: 'common-house-prices',
  caption: 'Each amount is the headline this calculator returns for a UK resident when the completion period is left on 1 April 2025 onward. The rows are generated from that function at build time. Standard means replacing a main home. First-time buyer relief is refused above £500,000, so those cells match the standard column and are marked. Additional means the higher rates, 5 percentage points above standard, from £40,000. A non-UK resident pays 2 percentage points more on each band.',
  headers: ['Price', 'Standard home mover', 'First-time buyer', 'Additional property'],
  rows: STAMP_PRICES.map((price) => [`£${price.toLocaleString('en-GB')}`, stampCell(price, 1), stampCell(price, 2), stampCell(price, 3)])
};
stampBase.extraSections = stampBase.extraSections.map((section, index) => index === 0
  ? { ...section, heading: 'Stamp duty rates in previous years' }
  : section);
stampBase.extraSections[0].paragraphs = [
  'The calculator uses the current rules unless you change the completion-period menu. The history below is labelled so it is not mistaken for the 2026 default. Each window is the residential freehold card HMRC published for England and Northern Ireland. Sources are the GOV.UK residential rate pages for those dates, including the slice reform on 4 December 2014, first-time buyer relief from 22 November 2017, the 8 July 2020 to 30 June 2021 holiday, the 23 September 2022 thresholds, the additional-dwelling increase on 31 October 2024, and the return to the £125,000 nil-rate band on 1 April 2025.',
  ...stampBase.extraSections[0].paragraphs
];

const salesBase = structuredClone(nov3CalculatorContent['sales-tax-calculator']);
function salesShare(result) {
  const line = result.details.find((item) => item.startsWith('Tax as a share of the total'));
  return line.replace('Tax as a share of the total: ', '').replace('the total is zero.', '0.00%');
}
const typedSales = calculate('sales-tax-calculator', { amount: 100, mode: 1, preset: 'custom', rate: 8.25 });
const salesRows = [[
  'Typed percent',
  '8.25%',
  typedSales.details[0].replace('Sales tax: ', ''),
  typedSales.headline.replace(' total', ''),
  salesShare(typedSales)
]];
for (const [code, name, rate] of SALES_TAX_PRESETS) {
  if (code === 'custom') continue;
  const result = calculate('sales-tax-calculator', { amount: 100, mode: 1, preset: code, rate: 0 });
  salesRows.push([
    name,
    `${rate}%`,
    result.details[0].replace('Sales tax: ', ''),
    result.headline.replace(' total', ''),
    salesShare(result)
  ]);
}
salesBase.title = 'Sales Tax Calculator by State: Add or Remove Tax (2026) | ClearCalc';
salesBase.h1 = 'Sales Tax Calculator by State';
salesBase.description = 'Sales tax calculator by state for 2026. Add tax to a price or reverse sales tax to find the price before tax. $100 at 8.25% is $108.25. The table lists the 1 July 2026 statewide base rate for all 50 states and the District of Columbia. Local rates add on top.';
salesBase.table = {
  heading: 'Statewide sales tax on $100',
  caption: 'The first row uses a typed 8.25% rate. Every other row is what this calculator displays for a $100 price before tax at the 1 July 2026 statewide rate from the Tax Foundation state-rate column, with Minnesota kept at 6.875%, Missouri at 4.225%, and New Jersey at 6.625%. Local city and county rates are not included. California 7.25%, Utah 6.10%, and Virginia 5.30% already include the statewide local add-on those states require.',
  headers: ['Rate source', 'Statewide rate', 'Tax on $100', 'Total', 'Tax as a share of the total'],
  rows: salesRows
};
salesBase.intro = [
  'Reverse sales tax is the second choice on the form. If the amount is a total that already includes tax, the calculator divides by 1 plus the rate and returns the price before tax. $108.25 at 8.25% returns $100.00 before tax, and the tax inside the receipt is $8.25. The forward path multiplies a pre-tax price by the rate and rounds to the cent.',
  ...salesBase.intro
];

const changeBase = structuredClone(nov7CalculatorContent['percentage-change-calculator']);
changeBase.title = 'Percentage Change Calculator and Percentage Increase Calculator | ClearCalc';
changeBase.h1 = 'Percentage Change Calculator';
changeBase.description = 'Percentage change calculator and percentage increase calculator. From 80 to 100 is a 25.00% increase. From 100 to 80 is a 20.00% decrease. Percent difference uses the average of the two values. The reverse finds the original from a new value and a percent.';
changeBase.steps = [
  'Choose percent change, percent difference, or the original value. Percent change is the sample. It uses the starting value and the new value.',
  'For a percent increase or decrease, leave the choice on percent change. Enter the starting value and the new value. The sample, 80 then 100, is a 25.00% increase. A starting value of zero is rejected.',
  'For percent difference, switch the choice. The result divides the absolute gap by the average of the two absolute values. It has no sign, and swapping the values does not change it.',
  'To reverse a percent change, switch to the original-value choice, enter the new value, and enter the percent. A new value of 100 and a percent change of 25 returns 80. A change of −100% or lower is rejected because the divisor would be zero or negative.',
  'Press Calculate. The headline is the percent and a direction word, the percent difference, or the original value. The lines underneath show the inputs and the formula that was used.'
];
changeBase.extraSections = [
  ...(changeBase.extraSections ?? []),
  {
    heading: 'Percent difference is not percent change',
    paragraphs: [
      'Percent change divides by the starting value and keeps a sign. Percent difference divides the absolute gap by the average of the absolute values. From 80 to 100 the change is 25.00%. The difference is |100 − 80| / ((80 + 100) / 2) × 100 = 22.22%. From 100 to 80 the change is −20.00% and the difference is still 22.22%. Use percent change when one value is the base. Use percent difference when neither value is the base.'
    ]
  },
  {
    heading: 'Worked reverse examples',
    paragraphs: [
      'Original = new / (1 + percent / 100). A 25% increase that ends at 100 started at 80. A −20% change that ends at 80 started at 100. Those two reverses are the same pair read from opposite ends. The form’s third choice returns 80.0000 for a new value of 100 and 25%, and 100.0000 for a new value of 80 and −20%.'
    ]
  }
];

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
      paragraphs: [
        item.blurb,
        `The headline is ${item.result.headline}. ${item.result.details.slice(0, 5).join(' ')}`
      ]
    })),
    table: spec.table,
    limitsHeading: spec.limitsHeading,
    limits: spec.limits,
    disclaimer: spec.disclaimer,
    faqs: spec.faqs,
    relatedLinks: spec.relatedLinks,
    extraSections: spec.extraSections
  };
}

export const nov12CalculatorContent = {
  'england-stamp-duty-calculator': stampBase,
  'sales-tax-calculator': salesBase,
  'percentage-change-calculator': changeBase,
  'ontario-land-transfer-tax-calculator': page({
    slug: 'ontario-land-transfer-tax-calculator',
    title: 'Ontario Land Transfer Tax Calculator, Including Toronto | ClearCalc',
    h1: 'Ontario Land Transfer Tax Calculator',
    description: 'Estimate Ontario land transfer tax and the Toronto municipal land transfer tax. A $700,000 one- or two-unit home is CA$10,475.00 to Ontario. In Toronto the municipal tax matches that figure before the first-time rebates.',
    intro: [
      'Ontario charges land transfer tax when a conveyance is registered. The rates in the Land Transfer Tax Act since 1 January 2017 are 0.5% up to $55,000, 1% to $250,000, 1.5% to $400,000, and 2% above that. A property with one or two single-family residences also pays 2.5% on the value above $2,000,000. The City of Toronto charges municipal land transfer tax on top, on a scale that matches the provincial brackets through $3,000,000 and then uses higher graduated rates from 1 April 2026.',
      'A qualifying first-time homebuyer can receive an Ontario refund of the tax on the first $368,000, with a maximum refund of $4,000 above that price. Toronto’s first-time rebate is up to $4,475. The form applies those caps only when you claim them, and it scales both by the qualifying share you type. Eligibility still depends on age, citizenship or permanent residence, occupancy within nine months, and never having owned a home.',
      'A $700,000 home outside Toronto is CA$10,475.00. The same home in Toronto is CA$20,950.00 before rebates. A first-time buyer of that Toronto home, at a 100% qualifying share, pays CA$6,475.00 to Ontario and CA$6,000.00 to Toronto, CA$12,475.00 in total.'
    ],
    steps: [
      'Enter the value of the consideration in Canadian dollars. For a straightforward purchase that is the price.',
      'Choose Ontario outside Toronto, or the City of Toronto. Only Toronto adds the municipal tax.',
      'Choose one or two single-family residences when the higher slices apply. Other property stays at 2% above $400,000.',
      'Claim the first-time refund only if the buyers qualify, and set the qualifying share. A 50% share cuts the refund and the Toronto rebate in half.',
      'Press Calculate. The headline is the combined tax after any refund and rebate you claimed.'
    ],
    howHeading: 'How Ontario and Toronto slice the price',
    howItWorks: [
      'Each rate applies only to its own slice. On $700,000 the Ontario tax is $275 on the first $55,000, $1,950 on the next $195,000, $2,250 on the next $150,000, and $6,000 on the $300,000 above $400,000. That is $10,475. Toronto’s municipal tax uses the same arithmetic at this price, so the city adds another $10,475.',
      'The Ontario first-time refund is the full provincial tax at or under $368,000. Above $368,000 the refund is capped at $4,000. At $700,000 the refund is $4,000 and the provincial balance is $6,475. Toronto’s rebate is the municipal tax or $4,475, whichever is smaller. At $700,000 that rebate is $4,475 and the municipal balance is $6,000.',
      'The non-resident speculation tax and Toronto’s municipal non-resident speculation tax are separate charges. This page does not add them. Registration fees are not included either.'
    ],
    formula: 'Ontario, one or two single-family residences:\n  0.5% to $55,000\n  1% to $250,000\n  1.5% to $400,000\n  2% to $2,000,000\n  2.5% above $2,000,000\nOther property stops at 2% above $400,000.\nToronto municipal tax matches those brackets through $3,000,000, then 4.40%, 5.45%, 6.50%, 7.55%, and 8.60% on one- or two-unit homes from 1 April 2026.\nFirst-time Ontario refund = full tax up to $368,000, otherwise min(tax, $4,000), times the qualifying share.\nToronto first-time rebate = min(municipal tax, $4,475), times the qualifying share.',
    formulaNotes: [
      'The $368,000 line is the Ministry of Finance statement that no land transfer tax is payable by a qualifying first-time purchaser on the first $368,000, and that a higher price receives a maximum refund of $4,000. Tax on $368,000 itself is $3,995.00, so the refund at that price is the whole tax.',
      'Toronto’s $4,475 cap is the municipal tax on $400,000: $275 + $1,950 + $2,250. The City of Toronto rebate page states a rebate of up to $4,475.'
    ],
    examplesHeading: 'Worked Ontario land transfer tax examples',
    samples: [
      { title: '$700,000 in Toronto, no rebate', values: { price: 700000, where: 2, home: 1, buyer: 1, share: 100 }, blurb: 'A one- or two-unit home in Toronto with the first-time claim left off. Provincial tax and municipal tax are each CA$10,475.00.' },
      { title: '$700,000 in Toronto, first-time buyer', values: { price: 700000, where: 2, home: 1, buyer: 2, share: 100 }, blurb: 'The same price with the refund and rebate claimed at 100%. Ontario keeps $4,000 and Toronto keeps $4,475.' },
      { title: '$700,000 outside Toronto', values: { price: 700000, where: 1, home: 1, buyer: 1, share: 100 }, blurb: 'Mississauga, Ottawa, and the rest of Ontario do not add Toronto’s municipal tax. The headline is the provincial figure only.' }
    ],
    table: {
      heading: 'Ontario and Toronto tax at common prices',
      caption: 'One or two single-family residences. First-time figures use a 100% qualifying share. Each cell is this calculator’s headline or a line under it.',
      headers: ['Price', 'Ontario only', 'Toronto, no rebate', 'Toronto, first-time'],
      rows: [400000, 700000, 900000, 2000000].map((price) => {
        const outside = run('ontario-land-transfer-tax-calculator', { price, where: 1, home: 1, buyer: 1, share: 100 }).headline;
        const toronto = run('ontario-land-transfer-tax-calculator', { price, where: 2, home: 1, buyer: 1, share: 100 }).headline;
        const first = run('ontario-land-transfer-tax-calculator', { price, where: 2, home: 1, buyer: 2, share: 100 }).headline;
        return [`$${price.toLocaleString('en-US')}`, outside, toronto, first];
      })
    },
    limitsHeading: 'What this land transfer tax estimate leaves out',
    limits: [
      'The non-resident speculation tax, Toronto’s municipal non-resident speculation tax, and land registration fees are not added. HST on a new home is a different tax.',
      'A first-time refund requires the buyer to be at least 18, a Canadian citizen or permanent resident, to occupy the home within nine months, and never to have owned a home anywhere. A spouse’s earlier ownership can block the refund. This form cannot check those facts.',
      'When only some buyers qualify, the refund is limited to their share. Type that share. A 50% share cannot claim more than half of the $4,000 maximum, which is how the Ministry of Finance describes a parent and child buying together.',
      'Commercial, industrial, and multi-residential property may be outside the first-time refund. The “other property” choice only changes the rate scale. It does not decide eligibility.'
    ],
    disclaimer: 'This is general information about Ontario and Toronto land transfer tax, not a filing and not tax or legal advice. The Ministry of Finance and the City of Toronto assess the tax and the refund.',
    faqs: [
      { q: 'How much is Ontario land transfer tax on a $700,000 home?', a: 'CA$10,475.00 for one or two single-family residences, before any first-time refund. In Toronto the municipal tax is another CA$10,475.00, so the combined bill before rebates is CA$20,950.00.' },
      { q: 'What is the Ontario first-time homebuyer land transfer tax refund?', a: 'Up to $4,000 for a conveyance on or after 1 January 2017. At or under $368,000 the refund covers the provincial tax. Above that price the refund stays at $4,000. Toronto can add a rebate of up to $4,475.' },
      { q: 'Does Toronto land transfer tax apply in Mississauga or Ottawa?', a: 'No. Municipal land transfer tax on this page is only for the City of Toronto. A home elsewhere in Ontario pays the provincial tax alone.' },
      { q: 'When did Toronto’s higher municipal land transfer tax rates start?', a: 'City Council’s graduated rates above $3,000,000 for homes with one or two single-family residences took effect on 1 April 2026. Below $3,000,000 the municipal brackets still match the provincial scale.' },
      { q: 'Does this Ontario calculator include the non-resident speculation tax?', a: 'No. The headline is land transfer tax and, in Toronto, municipal land transfer tax, after any first-time refund you claimed. The speculation taxes are separate.' }
    ],
    relatedLinks: [
      { slug: 'ontario-take-home-pay-calculator', label: 'Ontario take-home pay calculator', note: '2026 federal and Ontario income tax, CPP, and EI. Land transfer tax is not withheld from pay.' },
      { slug: 'british-columbia-property-transfer-tax-calculator', label: 'British Columbia property transfer tax calculator', note: 'A different provincial statute. A $700,000 home with no exemption is CA$12,000.00 there.' },
      { slug: 'canada-mortgage-calculator', label: 'Canada mortgage calculator', note: 'The loan payment is not increased by this transfer tax unless a lender has rolled cash into the balance.' }
    ]
  }),
  'british-columbia-property-transfer-tax-calculator': page({
    slug: 'british-columbia-property-transfer-tax-calculator',
    title: 'British Columbia Property Transfer Tax Calculator | ClearCalc',
    h1: 'British Columbia Property Transfer Tax Calculator',
    description: 'Estimate B.C. property transfer tax for a 2026 registration. A $700,000 home is CA$12,000.00 before an exemption. A qualifying first-time buyer pays CA$4,000.00. A qualifying newly built home at that price pays CA$0.00.',
    intro: [
      'British Columbia property transfer tax has three general rates: 1% of fair market value up to $200,000, 2% above $200,000 up to $2,000,000, and 3% above $2,000,000. Residential property over $3,000,000 also pays a further 2% on the residential value above $3,000,000. Those rates are the ones the Province of British Columbia publishes on its property transfer tax page.',
      'Two exemptions are on the form, both for registrations on or after 1 April 2024. A first-time home buyer pays no tax at $500,000 or less, receives an $8,000 exemption through $835,000, and then sees that exemption fall to zero at $860,000. A newly built home used as a principal residence is fully exempt at $1,100,000 or less, and the exemption phases out by $1,150,000.',
      'The exemptions have conditions this page cannot check: Canadian citizenship or permanent residence, the size of the parcel, principal-residence use, and, for a first-time buyer, the residency and ownership history the province lists. The additional tax on some foreign buyers is not included.'
    ],
    steps: [
      'Enter the fair market value in Canadian dollars.',
      'Leave the residential choice on if the home itself can attract the further 2% above $3,000,000. Turn it off for a non-residential value.',
      'Choose no exemption, the first-time home buyers’ exemption, or the newly built home exemption. They are alternatives. The form applies the one you select.',
      'Press Calculate. The headline is the tax after that exemption. The lines show the general tax, the further 2%, and the exemption amount.'
    ],
    howHeading: 'How the B.C. general tax and the exemptions are calculated',
    howItWorks: [
      'On $700,000 the general tax is 1% of $200,000 plus 2% of $500,000, which is $2,000 + $10,000 = $12,000. The further 2% does not start until $3,000,000. A first-time buyer at this price is inside the $8,000 exemption band, so the tax due is $4,000. A newly built home at this price is under $1,100,000, so the exemption equals the whole tax and the headline is CA$0.00.',
      'Between $835,000 and $860,000 the first-time exemption is $8,000 × ($860,000 − value) / $25,000. At $836,000 that is $7,680 and the tax due is $7,040, which matches the province’s exemption table. At $860,000 the exemption is zero.',
      'Between $1,100,000 and $1,150,000 the newly built exemption is the general tax × ($1,150,000 − value) / $50,000. At $1,125,000 the tax before the exemption is $20,500 and the exemption is half, $10,250. At $1,150,000 the exemption is gone.'
    ],
    formula: 'General tax = 1% of the first $200,000 + 2% of the amount over $200,000 up to $2,000,000 + 3% of the amount over $2,000,000\nFurther residential tax = 2% of residential value over $3,000,000\nFirst-time exemption, registration on or after 1 April 2024:\n  full tax at $500,000 or less\n  $8,000 above $500,000 through $835,000\n  $8,000 × ($860,000 − value) / $25,000 under $860,000\n  zero at $860,000 or more\nNewly built exemption:\n  full tax at $1,100,000 or less\n  tax × ($1,150,000 − value) / $50,000 under $1,150,000\n  zero at $1,150,000 or more',
    formulaNotes: [
      'The first-time formula reproduces the Province of British Columbia table: $836,000 pays $7,040, $850,000 pays $11,800, and $860,000 pays $15,200.',
      'The newly built formula reproduces the province’s equation. $1,101,000 pays $400.40 and $1,125,000 pays $10,250.00.'
    ],
    examplesHeading: 'Worked B.C. property transfer tax examples',
    samples: [
      { title: '$700,000 with no exemption', values: { price: 700000, residential: 1, claim: 1 }, blurb: 'General tax only. The further 2% is zero because the price is under $3,000,000.' },
      { title: '$700,000 first-time home buyer', values: { price: 700000, residential: 1, claim: 2 }, blurb: 'The $8,000 exemption comes off the $12,000 general tax. The province’s table shows $4,000 payable at $700,000.' },
      { title: '$1,125,000 newly built home', values: { price: 1125000, residential: 1, claim: 3 }, blurb: 'Halfway through the $50,000 phase-out, so half of the $20,500 general tax remains.' }
    ],
    table: {
      heading: 'B.C. property transfer tax at published checkpoints',
      caption: 'Residential choice left on. The further 2% is zero at these prices. Each payable figure is this calculator’s headline.',
      headers: ['Fair market value', 'No exemption', 'First-time buyer', 'Newly built home'],
      rows: [500000, 700000, 850000, 860000, 1100000, 1125000, 1150000].map((price) => [
        `$${price.toLocaleString('en-US')}`,
        run('british-columbia-property-transfer-tax-calculator', { price, residential: 1, claim: 1 }).headline,
        run('british-columbia-property-transfer-tax-calculator', { price, residential: 1, claim: 2 }).headline,
        run('british-columbia-property-transfer-tax-calculator', { price, residential: 1, claim: 3 }).headline
      ])
    },
    limitsHeading: 'What this B.C. transfer tax estimate leaves out',
    limits: [
      'The additional property transfer tax for foreign buyers is not added. A partial interest, a parcel larger than 0.5 hectares, and a property with non-residential improvements can reduce an exemption. This form assumes the whole transfer qualifies.',
      'A newly built home has to be the first registration of a completed improvement and has to be occupied as a principal residence. A first-time buyer has a separate residency test. Selecting the exemption does not prove either one.',
      'The two exemptions are not stacked. Pick the one that applies. A first-time buyer of a new home under $1,100,000 is fully exempt on the newly built rule, which is the larger relief at that price.',
      'The figures follow the amounts for registrations on or after 1 April 2024. An earlier registration used lower thresholds. This page does not switch to those older amounts.'
    ],
    disclaimer: 'This is general information about British Columbia property transfer tax, not a return and not tax or legal advice. The Province of British Columbia assesses the tax and the exemption.',
    faqs: [
      { q: 'How much is B.C. property transfer tax on $700,000?', a: 'CA$12,000.00 with no exemption. A qualifying first-time buyer pays CA$4,000.00. A qualifying newly built home at that price pays CA$0.00.' },
      { q: 'What is the B.C. first-time home buyer exemption in 2026?', a: 'For a registration on or after 1 April 2024, the tax is fully exempt at $500,000 or less, reduced by $8,000 through $835,000, and phased out by $860,000. Those are the current amounts on the Province of British Columbia page.' },
      { q: 'What is the newly built home exemption threshold?', a: 'A full exemption at a fair market value of $1,100,000 or less, and a phase-out that reaches zero at $1,150,000, for registrations on or after 1 April 2024.' },
      { q: 'Does the further 2% apply under $3,000,000?', a: 'No. It applies to the residential value above $3,000,000. A $700,000 home does not pay it. Turn the residential choice off when the value is not residential.' },
      { q: 'Is the foreign buyer tax included in this B.C. calculator?', a: 'No. The additional property transfer tax on foreign entities and taxable trustees is a separate charge and is not added here.' }
    ],
    relatedLinks: [
      { slug: 'british-columbia-take-home-pay-calculator', label: 'British Columbia take-home pay calculator', note: '2026 B.C. income tax, CPP, and EI. Property transfer tax is not a payroll deduction.' },
      { slug: 'ontario-land-transfer-tax-calculator', label: 'Ontario land transfer tax calculator', note: 'A $700,000 home outside Toronto is CA$10,475.00, not the B.C. figure of CA$12,000.00.' },
      { slug: 'canada-mortgage-calculator', label: 'Canada mortgage calculator', note: 'Semi-annual compounding on the amount borrowed. This transfer tax is cash at registration unless it is financed separately.' }
    ]
  }),
  ...nov12RestContent
};

export function attachNov12Links(content) {
  const add = (from, slug, label, note) => {
    const entry = content[from];
    if (!entry) return;
    entry.relatedLinks = entry.relatedLinks ?? [];
    if (!entry.relatedLinks.some((link) => link.slug === slug)) entry.relatedLinks.push({ slug, label, note });
  };
  const links = [
    ['ontario-take-home-pay-calculator', 'ontario-land-transfer-tax-calculator', 'Ontario land transfer tax calculator', 'A $700,000 home is CA$10,475.00 of provincial tax before any first-time refund. Toronto adds a municipal tax.'],
    ['british-columbia-take-home-pay-calculator', 'british-columbia-property-transfer-tax-calculator', 'B.C. property transfer tax calculator', 'A $700,000 home is CA$12,000.00 before a first-time or newly built exemption.'],
    ['uk-take-home-pay-calculator', 'uk-capital-gains-tax-calculator', 'UK capital gains tax calculator for 2026/27', 'A £12,600 gain with £20,000 of taxable income is £1,728.00 of CGT after the £3,000 allowance.'],
    ['uk-take-home-pay-calculator', 'uk-dividend-tax-calculator', 'UK dividend tax calculator for 2026/27', '£3,000 of dividends on £29,570 of wages is £268.75 of dividend tax.'],
    ['uk-take-home-pay-calculator', 'uk-national-insurance-calculator', 'UK National Insurance calculator', 'Category A employee National Insurance on £35,000 is £1,794.40 for 2026/27.'],
    ['northern-ireland-take-home-pay-calculator', 'uk-national-insurance-calculator', 'Employee National Insurance calculator', 'The same Class 1 rates. This page shows only the National Insurance, not income tax.'],
    ['australia-take-home-pay-calculator', 'australia-superannuation-guarantee-calculator', 'Superannuation guarantee calculator', '12% of qualifying earnings. Super is not subtracted on the take-home page.'],
    ['ontario-take-home-pay-calculator', 'canada-rrsp-tax-savings-calculator', 'Canada RRSP tax savings calculator', 'The tax saved by a 2026 RRSP deduction, federal plus provincial. It is not a full paycheque.'],
    ['roth-ira-calculator', 'irs-rmd-calculator', 'IRS required minimum distribution calculator', 'A $100,000 balance at age 73 is $3,773.58 using the Uniform Lifetime denominator 26.5.'],
    ['retirement-calculator', 'irs-rmd-calculator', 'RMD calculator', 'The retirement page projects a balance. The RMD page divides a balance by the IRS life-expectancy factor.'],
    ['mortgage-calculator', 'mortgage-refinance-calculator', 'Mortgage refinance calculator', 'Compares the current payment with a new rate and shows the break-even month from closing costs.'],
    ['loan-calculator', 'student-loan-repayment-calculator', 'Student loan repayment calculator', 'A fixed amortizing payment plus an optional extra monthly amount. It is not a UK student loan plan.'],
    ['house-affordability-calculator', 'home-equity-loan-calculator', 'Home equity and HELOC calculator', 'Borrowing room from a combined loan-to-value cap. It does not estimate the interest rate.'],
    ['mortgage-payoff-calculator', 'mortgage-refinance-calculator', 'Refinance break-even calculator', 'A refinance replaces the rate and the term. Extra principal on the current loan stays on the payoff page.'],
    ['compound-interest-calculator', 'net-worth-calculator', 'Net worth calculator', 'Adds assets and subtracts debts. It does not project growth.'],
    ['rent-affordability-calculator', '50-30-20-budget-calculator', '50/30/20 budget calculator', 'Splits after-tax income into needs, wants, and savings. Rent is one possible need, not the whole budget.'],
    ['tdee-calculator', 'macro-calculator', 'Macro calculator', 'Turns a calorie target into grams. The TDEE page is where the calorie estimate starts.'],
    ['calorie-calculator', 'protein-intake-calculator', 'Protein intake calculator', '0.8 grams per kilogram is the adult Recommended Dietary Allowance. This page multiplies the weight by the figure you type.'],
    ['bmi-calculator', 'one-rep-max-calculator', 'One rep max calculator', 'Epley, Brzycki, and Lombardi estimates from a submaximal set. Body mass index is a different measurement.'],
    ['pace-calculator', 'heart-rate-zone-calculator', 'Heart rate zone calculator', '220 minus age, then Karvonen zones from a resting heart rate. Pace is not a heart rate.'],
    ['date-difference-calculator', 'day-of-the-week-calculator', 'Day of the week calculator', '1 January 2026 is a Thursday. The day counter still counts elapsed days.'],
    ['add-days-calculator', 'week-number-calculator', 'ISO week number calculator', '1 January 2026 is ISO week 1 of 2026. Adding days does not name the week.'],
    ['square-footage-calculator', 'btu-calculator', 'BTU air conditioner size calculator', 'The ENERGY STAR room chart. A 300 square foot room is 7,000 BTU/h before sun, kitchen, and occupancy adjustments.']
  ];
  for (const [from, slug, label, note] of links) add(from, slug, label, note);
}
