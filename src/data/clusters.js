import { nov14ClusterMembers } from './nov14-calculators.js';

export const clusters = [
  {
    id: 'paychecks-and-wages',
    title: 'Paychecks and wages',
    description: 'State paycheck estimates, hourly pay, and overtime.',
    members: [
      "texas-paycheck-calculator",
      "florida-paycheck-calculator",
      "california-paycheck-calculator",
      "hourly-to-salary-calculator",
      "overtime-pay-calculator",
      "washington-paycheck-calculator",
      "new-york-paycheck-calculator",
      "illinois-paycheck-calculator",
      "pennsylvania-paycheck-calculator",
      "ohio-paycheck-calculator",
      "michigan-paycheck-calculator",
      "georgia-paycheck-calculator",
      "north-carolina-paycheck-calculator",
      "virginia-paycheck-calculator",
      "new-jersey-paycheck-calculator",
      "arizona-paycheck-calculator",
      "colorado-paycheck-calculator",
      "massachusetts-paycheck-calculator",
      "oregon-paycheck-calculator",
      "minnesota-paycheck-calculator",
      "tennessee-paycheck-calculator",
      "indiana-paycheck-calculator",
      "maryland-paycheck-calculator",
      "commission-calculator",
      "pay-raise-calculator"
    ]
  },
  {
    id: 'uk-canada-australia-tax',
    title: 'UK, Canada, and Australia tax',
    description: 'Income tax, National Insurance, property transfer tax, VAT, GST, and HST.',
    members: [
      "uk-take-home-pay-calculator",
      "scotland-take-home-pay-calculator",
      "ontario-take-home-pay-calculator",
      "australia-take-home-pay-calculator",
      "british-columbia-take-home-pay-calculator",
      "alberta-take-home-pay-calculator",
      "manitoba-take-home-pay-calculator",
      "saskatchewan-take-home-pay-calculator",
      "nova-scotia-take-home-pay-calculator",
      "new-brunswick-take-home-pay-calculator",
      "quebec-take-home-pay-calculator",
      "prince-edward-island-take-home-pay-calculator",
      "newfoundland-and-labrador-take-home-pay-calculator",
      "northwest-territories-take-home-pay-calculator",
      "yukon-take-home-pay-calculator",
      "nunavut-take-home-pay-calculator",
      "northern-ireland-take-home-pay-calculator",
      "england-stamp-duty-calculator",
      "nsw-stamp-duty-calculator",
      "victoria-stamp-duty-calculator",
      "queensland-stamp-duty-calculator",
      "western-australia-stamp-duty-calculator",
      "south-australia-stamp-duty-calculator",
      "tasmania-stamp-duty-calculator",
      "act-stamp-duty-calculator",
      "northern-territory-stamp-duty-calculator",
      "scotland-lbtt-calculator",
      "wales-land-transaction-tax-calculator",
      "uk-student-loan-repayment-calculator",
      "uk-vat-calculator",
      "canada-gst-hst-calculator",
      "australia-gst-calculator",
      "ontario-land-transfer-tax-calculator",
      "british-columbia-property-transfer-tax-calculator",
      "uk-capital-gains-tax-calculator",
      "uk-dividend-tax-calculator",
      "uk-national-insurance-calculator",
      "us-federal-income-tax-calculator",
      "us-capital-gains-tax-calculator"
    ]
  },
  {
    id: 'mortgages-and-money',
    title: 'Mortgages and money',
    description: 'Home loans, refinance, consumer loans, budgets, and net worth.',
    members: [
      "mortgage-calculator",
      "loan-calculator",
      "rent-affordability-calculator",
      "credit-card-payoff-calculator",
      "house-affordability-calculator",
      "debt-to-income-ratio-calculator",
      "simple-interest-calculator",
      "car-payment-calculator",
      "roi-calculator",
      "apr-calculator",
      "down-payment-calculator",
      "mortgage-payoff-calculator",
      "amortization-calculator",
      "rent-vs-buy-calculator",
      "uk-mortgage-calculator",
      "canada-mortgage-calculator",
      "mortgage-refinance-calculator",
      "student-loan-repayment-calculator",
      "home-equity-loan-calculator",
      "net-worth-calculator",
      "50-30-20-budget-calculator",
      "auto-lease-calculator",
      "heloc-calculator",
      "rental-property-calculator"
    ]
  },
  {
    id: 'retirement-and-investing',
    title: 'Retirement and investing',
    description: 'Compound growth, retirement accounts, RMDs, RRSPs, and superannuation.',
    members: [
      "401k-contribution-calculator",
      "compound-interest-calculator",
      "investment-calculator",
      "retirement-calculator",
      "roth-ira-calculator",
      "cd-calculator",
      "savings-goal-calculator",
      "inflation-calculator",
      "irs-rmd-calculator",
      "canada-rrsp-tax-savings-calculator",
      "australia-superannuation-guarantee-calculator",
      "annuity-calculator",
      "canada-tfsa-calculator"
    ]
  },
  {
    id: 'health-and-fitness',
    title: 'Health and fitness',
    description: 'Body measurements, energy, running pace, and training estimates. Not medical advice.',
    members: [
      "bmi-calculator",
      "calorie-calculator",
      "5k-pace-calculator",
      "ideal-weight-calculator",
      "pregnancy-due-date-calculator",
      "body-fat-calculator",
      "ovulation-calculator",
      "sleep-calculator",
      "bmr-calculator",
      "tdee-calculator",
      "period-calculator",
      "pace-calculator",
      "macro-calculator",
      "protein-intake-calculator",
      "one-rep-max-calculator",
      "heart-rate-zone-calculator",
      "calories-burned-calculator",
      "lean-body-mass-calculator"
    ]
  },
  {
    id: 'dates-and-time',
    title: 'Dates and time',
    description: 'Ages, weekdays, ISO weeks, and business-day counts.',
    members: [
      "age-calculator",
      "date-difference-calculator",
      "us-business-days-calculator",
      "uk-working-days-calculator",
      "canada-business-days-calculator",
      "time-card-hours-calculator",
      "add-days-calculator",
      "day-of-the-week-calculator",
      "week-number-calculator",
      "hours-calculator",
      "time-zone-converter"
    ]
  },
  {
    id: 'conversions',
    title: 'Conversions',
    description: 'Length, weight, temperature, and fuel economy.',
    members: [
      "length-converter",
      "fuel-economy-converter",
      "celsius-to-fahrenheit-calculator",
      "fahrenheit-to-celsius-calculator",
      "weight-converter",
      "speed-converter"
    ]
  },
  {
    id: 'math-and-school',
    title: 'Math and school',
    description: 'Percentages, grades, fractions, ratios, and area.',
    members: [
      "percentage-calculator",
      "gpa-calculator",
      "final-exam-grade-calculator",
      "percentage-change-calculator",
      "random-number-generator",
      "fraction-calculator",
      "ratio-calculator",
      "area-calculator",
      "grade-calculator",
      "markup-margin-calculator",
      "average-calculator",
      "standard-deviation-calculator",
      "pythagorean-theorem-calculator",
      "volume-calculator"
    ]
  },
  {
    id: 'home-improvement',
    title: 'Home improvement',
    description: 'Materials, floor area, and room air-conditioner size.',
    members: [
      "concrete-slab-calculator",
      "room-paint-calculator",
      "mulch-calculator",
      "gravel-calculator",
      "floor-tile-calculator",
      "square-footage-calculator",
      "drywall-calculator",
      "wallpaper-calculator",
      "fence-calculator",
      "btu-calculator",
      "roofing-calculator",
      "stair-calculator"
    ]
  },
  {
    id: 'everyday-costs',
    title: 'Everyday costs',
    description: 'Tips, discounts, sales tax, electricity, and fuel.',
    members: [
      "tip-calculator",
      "discount-calculator",
      "electricity-cost-calculator",
      "fuel-cost-calculator",
      "sales-tax-calculator",
      "bill-split-calculator",
      "dice-roller",
      "password-generator",
      "gas-mileage-calculator"
    ]
  },
  {
    id: 'science-and-measurement',
    title: 'Science and measurement',
    description: 'Electrical, weather, density, speed, tires, and network arithmetic.',
    members: []
  }
];

for (const [id, slugs] of Object.entries(nov14ClusterMembers)) {
  const cluster = clusters.find((item) => item.id === id);
  if (!cluster) throw new Error(`Missing cluster ${id}`);
  for (const slug of slugs) {
    if (!cluster.members.includes(slug)) cluster.members.push(slug);
  }
}

const bySlug = new Map();
for (const cluster of clusters) {
  for (const slug of cluster.members) {
    if (bySlug.has(slug)) throw new Error(`Calculator ${slug} is in more than one cluster`);
    bySlug.set(slug, cluster);
  }
}

export function clusterFor(slug) {
  return bySlug.get(slug) ?? null;
}
