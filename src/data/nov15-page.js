import { calculateNov15 } from '../lib/nov15.js';
import { nov15Calculators } from './nov15-calculators.js';

function defaults(slug) {
  const calculator = nov15Calculators.find((item) => item.slug === slug);
  return Object.fromEntries(calculator.fields.map(([name, , , value]) => [name, value]));
}

export function nov15Run(slug, overrides = {}) {
  return calculateNov15(slug, { ...defaults(slug), ...overrides });
}

export function nov15Page(spec) {
  const runs = spec.samples.map((sample) => ({ ...sample, result: nov15Run(spec.slug, sample.overrides) }));
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
      paragraphs: [item.blurb, `The headline is ${item.result.headline}. ${item.result.details.join(' ')}`]
    })),
    table: {
      heading: spec.table.heading,
      caption: spec.table.caption,
      headers: spec.table.headers,
      rows: runs.map((item) => [item.title, item.result.headline])
    },
    limitsHeading: spec.limitsHeading,
    limits: spec.limits,
    disclaimer: spec.disclaimer,
    faqs: spec.faqs,
    relatedLinks: spec.relatedLinks
  };
}
