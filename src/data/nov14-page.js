import { calculate } from '../lib/calculate.js';
import { nov14Calculators } from './nov14-calculators.js';

function defaults(slug) {
  const calculator = nov14Calculators.find((item) => item.slug === slug);
  return Object.fromEntries(calculator.fields.map(([name, , , value]) => [name, value]));
}

export function nov14Values(slug, overrides = {}) {
  return { ...defaults(slug), ...overrides };
}

export function nov14Run(slug, overrides = {}) {
  return calculate(slug, nov14Values(slug, overrides));
}

export function nov14Page(spec) {
  const runs = spec.samples.map((sample) => ({ ...sample, result: nov14Run(spec.slug, sample.overrides) }));
  const tableRows = spec.tableRows ?? runs.map((item) => [item.title, item.result.headline]);
  return {
    title: spec.title,
    h1: spec.h1,
    description: spec.description,
    intro: spec.intro,
    steps: spec.steps,
    howHeading: spec.howHeading,
    howItWorks: [
      ...spec.howItWorks,
      runs.map((item) => `${item.title} produces ${item.result.headline}. ${item.result.details.join(' ')}`).join(' ')
    ],
    formula: spec.formula,
    formulaNotes: spec.formulaNotes,
    examplesHeading: spec.examplesHeading,
    examples: runs.map((item) => ({
      title: item.title,
      paragraphs: [
        item.blurb,
        `The headline is ${item.result.headline}. ${item.result.details.join(' ')}`
      ]
    })),
    table: {
      heading: spec.table.heading,
      caption: spec.table.caption,
      headers: spec.table.headers,
      rows: tableRows
    },
    limitsHeading: spec.limitsHeading,
    limits: spec.limits,
    disclaimer: spec.disclaimer,
    faqs: spec.faqs,
    relatedLinks: spec.relatedLinks
  };
}
