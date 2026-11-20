const PRIORITY = {
  'sales-tax-calculator': 'calculateSalesTax',
  'loan-calculator': 'calculateLoan',
  'tip-calculator': 'calculateTip',
  'rent-affordability-calculator': 'calculateRent',
  'credit-card-payoff-calculator': 'calculateCreditCard',
  'apr-calculator': 'calculateApr',
  'down-payment-calculator': 'calculateDownPayment'
};

function coerce(values) {
  return Object.fromEntries(Object.entries(values).map(([key, val]) => [
    key,
    key.includes('date') || key === 'preset' ? val : Number(val)
  ]));
}

export async function calculateForPage(slug, values) {
  if (PRIORITY[slug]) {
    const math = await import('./priority-math.js');
    return math[PRIORITY[slug]](coerce(values));
  }
  if (slug === 'mortgage-calculator') {
    const { calculateNov11 } = await import('./nov11.js');
    return calculateNov11(slug, coerce(values));
  }
  if (slug === 'hours-calculator') {
    const { calculateNov13 } = await import('./nov13.js');
    return calculateNov13(slug, coerce(values));
  }
  const { calculate } = await import('./calculate.js');
  return calculate(slug, values);
}
