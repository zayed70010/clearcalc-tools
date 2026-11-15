import { calculateDaily15 } from '../lib/daily15.js';
import { daily15Calculators } from './daily15-calculators.js';

function defaults(slug) {
  const calculator = daily15Calculators.find((item) => item.slug === slug);
  return Object.fromEntries(calculator.fields.map(([name, , , value]) => [name, value]));
}

export function daily15Run(slug, overrides = {}) {
  return calculateDaily15(slug, { ...defaults(slug), ...overrides });
}

export function daily15Page(spec) {
  const runs = spec.samples.map((sample) => ({ ...sample, result: daily15Run(spec.slug, sample.overrides) }));
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
    relatedLinks: spec.relatedLinks,
    extraSections: spec.extraSections
  };
}
