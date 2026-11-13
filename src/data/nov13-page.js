import { calculate } from '../lib/calculate.js';

function run(slug, values) {
  return calculate(slug, values);
}

export function nov13Page(spec) {
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
        `The headline is ${item.result.headline}. ${item.result.details.slice(0, 6).join(' ')}`
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

export { run as nov13Run };
