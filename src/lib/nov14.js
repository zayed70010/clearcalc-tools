import { nov14Applied } from './nov14-applied.js';
import { nov14Math } from './nov14-math.js';

const NOV14 = { ...nov14Math, ...nov14Applied };

export const NOV14_SLUGS = new Set(Object.keys(NOV14));

export function calculateNov14(slug, values) {
  const fn = NOV14[slug];
  if (!fn) throw new Error('Unsupported calculator');
  return fn(values);
}
