import { nov14AppliedContent } from './nov14-applied-content.js';
import { nov14MathA } from './nov14-math-a.js';
import { nov14MathB } from './nov14-math-b.js';
import { nov14MathC } from './nov14-math-c.js';

export const nov14CalculatorContent = {
  ...nov14MathA,
  ...nov14MathB,
  ...nov14MathC,
  ...nov14AppliedContent
};

export function attachNov14Links(content) {
  const add = (from, slug, label, note) => {
    const entry = content[from];
    if (!entry) return;
    entry.relatedLinks = entry.relatedLinks ?? [];
    if (!entry.relatedLinks.some((item) => item.slug === slug)) entry.relatedLinks.push({ slug, label, note });
  };
  const links = [
    ['percentage-calculator', 'percent-error-calculator', 'Percent error calculator', 'A measured 9 against a true 10 is 10.00%. Part divided by whole stays on the percentage page.'],
    ['exponent-calculator', 'number-sequence-calculator', 'Number sequence calculator', 'An arithmetic sequence with first term 2 and difference 3 has 14 as term 5. An exponent is one power, not a sequence.'],
    ['average-calculator', 'descriptive-statistics-calculator', 'Mean, median, mode, and range', 'The same kind of list, plus the median, the mode, the range, and the geometric mean. The average page is the arithmetic mean only.'],
    ['pythagorean-theorem-calculator', 'right-triangle-calculator', 'Right triangle calculator', 'Legs of 3 and 4 still give a hypotenuse of 5, and this page also reports the acute angles, the area, and the perimeter.'],
    ['area-calculator', 'circle-calculator', 'Circle calculator', 'A radius of 1 has area π and circumference 2π. The area page also does other shapes and does not solve a circle from its circumference.'],
    ['volume-calculator', 'surface-area-calculator', 'Surface area calculator', 'A 2 by 3 by 4 box has surface area 52. Volume is the capacity. Surface area is the outside.'],
    ['length-converter', 'measurement-converter', 'Measurement converter', '1 inch is 2.54 centimetres. The measurement converter also covers temperature, area, volume, mass, and time.'],
    ['speed-converter', 'speed-distance-time-calculator', 'Speed, distance, and time', '100 km in 1 hour is 62.1371 mph. The speed converter only changes the unit of a speed you already have.'],
    ['fuel-economy-converter', 'gas-mileage-calculator', 'Gas mileage calculator', '300 miles on 10 US gallons is 30.00 US mpg. The converter changes an mpg figure. It does not divide a trip by fuel used.'],
    ['electricity-cost-calculator', 'ohms-law-calculator', 'Ohm’s law calculator', '12 V across 2 Ω is 6 A and 72 W. The cost page turns watts and hours into a price.'],
    ['hours-calculator', 'time-span-calculator', 'Time duration calculator', '1 January 2026 00:00:00 to 2 January 2026 01:30:00 is 1 day 1 hour 30 minutes. The hours page has no date.'],
    ['roi-calculator', 'cagr-calculator', 'CAGR calculator', '100 growing to 200 in 10 years is 7.1773% a year. ROI is a single profit divided by cost, not a compound annual rate.'],
    ['simple-interest-calculator', 'payback-period-calculator', 'Payback period calculator', 'A $10,000 cost and a $2,500 yearly benefit pay back in 4 years at a zero discount rate.'],
    ['bmi-calculator', 'pregnancy-weight-gain-calculator', 'Pregnancy weight gain calculator', 'The 2009 Institute of Medicine range for a singleton at a normal BMI is 25 to 35 lb. BMI itself is not that range.'],
    ['pregnancy-due-date-calculator', 'height-predictor-calculator', 'Mid-parental height calculator', 'A boy with a 180 cm father and a 165 cm mother has a Tanner target of 179 cm. The due-date page does not predict adult height.'],
    ['compound-interest-calculator', 'currency-converter', 'Currency converter', '100 USD at a rate you type of 0.90 EUR per dollar is €90.00. The rate is not downloaded, and compound interest does not convert currencies.'],
    ['fuel-cost-calculator', 'tire-size-calculator', 'Tire size calculator', 'A 225/45R17 is about 24.97 inches across. Fuel cost uses a distance you already know. It does not read a tire code.'],
    ['bmi-calculator', 'bac-calculator', 'BAC estimate', 'Two 14 g drinks at 70 kg and a Widmark factor of 0.68 are about 0.059% at zero hours. BMI does not estimate alcohol. This is not a breath test.'],
    ['roi-calculator', 'gdp-calculator', 'GDP identity calculator', 'The sample expenditure identity is 200. ROI is one profit divided by one cost. It is not C + I + G + (X − M).']
  ];
  for (const [from, slug, label, note] of links) add(from, slug, label, note);
}
