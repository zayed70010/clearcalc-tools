export const nov9CalculatorContent = {
  'inflation-calculator': {
    title: 'Inflation Calculator: CPI-U and a Constant Rate | ClearCalc',
    h1: 'Inflation Calculator',
    description: 'Restate dollars with CPI-U annual averages from 1990 through 2025, or project a price at a constant yearly rate. $100 in 2016 is $134.14 in 2025, a 34.14% rise.',
    intro: [
      'This inflation calculator answers two different questions, and the method menu picks which one. The CPI-U path restates an amount between two calendar years using the annual average Consumer Price Index for All Urban Consumers, all items, U.S. city average, 1982–84 = 100. $100 in 2016 has the buying power of $134.14 in 2025. The cumulative change is 34.14%. The indexes behind that pair are 240.007 and 321.943.',
      'The constant-rate path ignores the year fields. It compounds a rate you type once a year. $100 at 3% for 10 years becomes a price of $134.39, and today’s $100 buys $74.41 of that future basket. The price factor is 1.3439. That is not the CPI result, and it is not the compound-interest balance. The investment page adds deposits and compounds monthly. This page does neither on the constant-rate path, and it never treats inflation as a return you earned.',
      'Years run from 1990 through 2025. The 1990–2017 averages are the annual figures in BLS Table 24. The 2018–2025 averages are BLS series CUUR0000SA0 as extracted on 9 November 2026, including the published 2025 annual average of 321.943. October 2025 is missing from the monthly row because of the appropriations lapse. Calendar 2026 has no annual average yet, so 2026 is rejected. A city index, CPI-W, and a single month are not in the table.'
    ],
    steps: [
      'Choose CPI-U annual averages or a constant annual rate. The sample starts on CPI-U.',
      'Enter the amount in dollars. The sample is 100.',
      'For CPI-U, enter a start year and an end year from 1990 through 2025. The sample is 2016 and 2025. The rate and the year-count are ignored on this path.',
      'For a constant rate, type the percent and the number of years. The year fields are ignored. Press Calculate. The headline is the restated amount or the future price.'
    ],
    howHeading: 'How a CPI ratio differs from a typed inflation rate',
    howItWorks: [
      'The CPI path multiplies the amount by the end-year index and divides by the start-year index. $100 × 321.943 / 240.007 is $134.14 after the headline is rounded to the cent. Going backwards, $100 × 240.007 / 321.943 is $74.55, and the change prints as −25.45%. The same two indexes produce both directions. A start year that equals the end year is a 0.00% change and returns the amount you typed.',
      '$100 in 2020, index 258.811, is $113.08 in 2022, index 292.655, a 13.08% change. $2,500 in 2000, index 172.2, is $4,673.97 in 2025, an 86.96% change. Those are annual-average comparisons. December-to-December inflation, which BLS also publishes, will not match an annual-average ratio.',
      'The constant-rate path uses future price = amount × (1 + rate/100)^years and buying power = amount divided by that factor. At 0% the factor is 1 and both lines stay $100.00. A rate of −100% or below is rejected because the factor would be zero or negative. A period above 100 years is rejected. Nothing in that path looks up a year.'
    ],
    formula: 'CPI path: adjusted = amount × CPI(end year) / CPI(start year)\nChange = (CPI(end) / CPI(start) − 1) × 100\nConstant path: factor = (1 + annual rate/100)^years\nFuture price = amount × factor\nBuying power = amount / factor',
    formulaNotes: [
      'CPI-U here is the not-seasonally-adjusted U.S. city average for all items. Indexes before 2007 are stored at the one-decimal precision BLS published for those annual averages. Later years keep the three-decimal annual average.',
      'The constant-rate headline is the future price, not the buying-power line. A 3% illustration is a rate you chose. It is not a Bureau of Labor Statistics forecast, and it does not compound monthly the way the compound-interest calculator does.'
    ],
    examplesHeading: 'Worked inflation examples',
    examples: [
      {
        title: '$100 from 2016 to 2025',
        paragraphs: [
          'Method CPI-U, amount 100, start 2016, end 2025. The calculator shows $134.14. The change is 34.14%. The detail line names the indexes 240.007 and 321.943. The 3% and 10-year fields can stay filled in. They are not used.',
          'Reverse the years, 2025 to 2016, and the same $100 becomes $74.55 with a change of −25.45%. The end year is earlier. That is the buying power of 2025 dollars measured in 2016 prices, not a forecast.'
        ]
      },
      {
        title: 'A shorter CPI span, and a 2000 starting point',
        paragraphs: [
          '$100 from 2020 to 2022 is $113.08, a 13.08% change, using 258.811 and 292.655. The jump is smaller than the 2016-to-2025 span even though 2021 and 2022 were high-inflation years, because the window is only two annual averages.',
          '$2,500 from 2000 to 2025 is $4,673.97, an 86.96% change, using 172.2 and 321.943. The 2000 index is the one-decimal annual average from the historical table. Typing 2026 in either year is rejected.'
        ]
      },
      {
        title: 'A constant 3% beside a zero rate',
        paragraphs: [
          'Switch the method to a constant annual rate. Amount 100, rate 3, years 10. The headline is $134.39. Buying power is $74.41. The factor is 1.3439. The CPI years are ignored, so this $134.39 is not the $134.14 CPI result. They are close on this particular pair and they are not the same calculation.',
          'Rate 0 for 10 years stays $100.00 on both the future price and the buying power. The factor is 1. Use 0 only when you mean no change in prices. A blank rate is not zero. It fails the number check.'
        ]
      }
    ],
    table: {
      heading: 'Amounts this inflation calculator shows',
      caption: 'CPI rows use annual-average CPI-U. The constant-rate row compounds once a year and does not read the index. Displayed money is rounded to the cent.',
      headers: ['Method', 'Amount', 'Span', 'Result', 'Change or buying power'],
      rows: [
        ['CPI-U', '$100', '2016 to 2025', '$134.14', '34.14%'],
        ['CPI-U', '$100', '2020 to 2022', '$113.08', '13.08%'],
        ['CPI-U', '$2,500', '2000 to 2025', '$4,673.97', '86.96%'],
        ['CPI-U', '$100', '2025 to 2016', '$74.55', '−25.45%'],
        ['Constant 3%', '$100', '10 years', '$134.39', 'Buying power $74.41']
      ]
    },
    limitsHeading: 'What this inflation figure leaves out',
    limits: [
      'An annual average hides the month you actually spent the money. Housing, food, and medical care do not move with the all-items index. A household that spends more on rent than the CPI basket will not see its own inflation in this ratio.',
      'The table stops at 2025. It does not invent a 2026 annual average from the months published so far. CPI-W, the chained CPI, and regional indexes are different series. Social Security cost-of-living adjustments use CPI-W, not this CPI-U ratio.',
      'The constant-rate path is an assumption. It does not add investment growth, contributions, taxes, or fees. A 7% compound-interest illustration and a 3% inflation illustration are not a 4% real return unless you do that subtraction yourself, and even then the compounding conventions differ.',
      'The result is in U.S. dollars of purchasing power. It is not a UK, Canadian, or Australian price index, and it does not convert currencies.'
    ],
    disclaimer: 'This inflation figure is a CPI ratio or a rate you typed. It is not a forecast, a cost-of-living adjustment, or financial advice.',
    faqs: [
      {
        q: 'What is $100 in 2016 worth in 2025 dollars on this page?',
        a: '$134.14. The CPI-U annual averages are 240.007 for 2016 and 321.943 for 2025, and the change is 34.14%. The reverse, $100 in 2025 measured in 2016 prices, is $74.55.'
      },
      {
        q: 'Why is a constant 3% for 10 years not the same as 2016 to 2025?',
        a: 'The constant path compounds 3% once a year and reaches $134.39. The CPI path uses the published indexes and reaches $134.14. The year fields are ignored on the constant path, and the rate field is ignored on the CPI path.'
      },
      {
        q: 'Can this inflation calculator use 2026?',
        a: 'No. BLS had not published a 2026 annual average when this table was taken on 9 November 2026. Years outside 1990 through 2025 are rejected. A partial year is not averaged on this page.'
      },
      {
        q: 'Does the inflation result include investment growth?',
        a: 'No. The compound-interest page, with no monthly deposit, turns $10,000 at 5% for 3 years into $11,614.72. This page would only restate a price or erode buying power. It does not add a deposit.'
      },
      {
        q: 'Which CPI is used for the historical years?',
        a: 'CPI-U, all items, U.S. city average, not seasonally adjusted, annual averages. It is not CPI-W, not a metro index, and not a December-to-December percent. The 2000 annual average is stored as 172.2, the precision in the historical table.'
      }
    ],
    relatedLinks: [
      { slug: 'compound-interest-calculator', label: 'Compound interest calculator', note: '$10,000 at 7% for 10 years with no deposit grows to $20,096.61. The effective annual rate is 7.23%. That is an investment balance, not a CPI restatement.' },
      { slug: 'simple-interest-calculator', label: 'Simple interest calculator', note: '$10,000 at 5% for 3 years is $1,500.00 of interest. Inflation is not subtracted from that interest.' },
      { slug: 'percentage-change-calculator', label: 'Percentage change calculator', note: 'From 240.007 to 321.943 is a percent change you can also compute there. That page does not store the CPI table.' }
    ]
  },
  'body-fat-calculator': {
    title: 'Body Fat Calculator: U.S. Navy Circumference Equations | ClearCalc',
    h1: 'Body Fat Calculator',
    description: 'Estimate body-fat percentage with the U.S. Navy circumference equations. A man at 70 in, neck 15, waist 34, and 180 lb is 17.51% body fat, with 31.52 lb of fat mass.',
    intro: [
      'This body-fat calculator uses the U.S. Navy circumference equations. For men, percent body fat is 86.010 × log10(waist − neck) − 70.041 × log10(height) + 36.76. For women it is 163.205 × log10(waist + hip − neck) − 97.684 × log10(height) − 78.387. The logarithms use inches. A centimeter entry is divided by 2.54 before those logs. Weight is not inside the percent. It is used only to split fat mass and lean mass.',
      'The sample man is 70 inches tall, with a 15 inch neck, a 34 inch waist, and a weight of 180 pounds. The hip field is ignored. The headline is 17.51% body fat. The unrounded figure is 17.5131%. Fat mass is 31.52 lb and lean mass is 148.48 lb. The general fitness band is the fitness band for men, about 14% up to 18%. That band is not a Navy body-composition standard and not a diagnosis.',
      'BMI on the other page is a different ratio. It does not use a neck, a waist, or a hip. A high-muscle adult can have a BMI in the overweight band and a lower circumference percent than the BMI label suggests. This page will not compute that BMI, and the BMI page will not run these logarithms.'
    ],
    steps: [
      'Choose the men’s or the women’s equation. The sample starts on men.',
      'Choose inches and pounds, or centimeters and kilograms. The sample is inches and pounds: height 70, neck 15, waist 34, weight 180.',
      'Enter a hip measurement when you use the women’s equation. The men’s equation does not read it. Neck, waist, and height must be above zero, and the waist must be larger than the neck.',
      'Press Calculate. The headline is the percent rounded to two decimals. Fat mass, lean mass, and a general fitness band are underneath.'
    ],
    howHeading: 'How the Navy circumference percent is calculated',
    howItWorks: [
      'The men’s sample uses log10(34 − 15) and log10(70). The equation returns 17.5131, which displays as 17.51%. Fat mass is 180 × 17.5131 / 100, shown as 31.52 lb. Lean mass is the weight minus that fat mass, 148.48 lb. The two masses add back to the weight after each line is rounded on its own.',
      'The women’s sample is 64 inches, neck 13, waist 28, hip 38, and 140 lb. The logarithm argument is 28 + 38 − 13 = 53. The unrounded percent is 26.5886, the headline is 26.59%, fat mass is 37.22 lb, and lean mass is 102.78 lb. The band is the average band for women, about 25% up to 32%.',
      'A metric man at 175 cm, neck 38 cm, waist 86 cm, and 75 kg is converted to inches before the logs. The headline is 17.79% body fat, fat mass 13.35 kg, and lean mass 61.65 kg. The same tape in inches would not need that division by 2.54. A waist that is not larger than the neck is rejected, because the logarithm would not be defined for a non-positive argument.'
    ],
    formula: 'Men, inches: 86.010 × log10(waist − neck) − 70.041 × log10(height) + 36.76\nWomen, inches: 163.205 × log10(waist + hip − neck) − 97.684 × log10(height) − 78.387\nCentimeters are divided by 2.54 first\nFat mass = weight × percent / 100\nLean mass = weight − fat mass',
    formulaNotes: [
      'These are the Hodgdon and Beckett circumference equations used by the U.S. Navy. They are not the Siri density formula written as 495 / density − 450, and the two forms will not match to the hundredth of a percent. This page uses the log10 equations above.',
      'Tape sites: neck just below the larynx. For men the waist is horizontal at the navel. For women the waist is the narrowest point and the hip is the largest horizontal circumference. A different site changes the percent. The fitness bands are general adult labels, about 6/14/18/25 for men and 14/21/25/32 for women. They are not clinical cutoffs.'
    ],
    examplesHeading: 'Worked body-fat examples',
    examples: [
      {
        title: 'A man at 70 inches, neck 15, waist 34, 180 pounds',
        paragraphs: [
          'Sex men, units inches and pounds, height 70, neck 15, waist 34, weight 180. Hip can be anything. It is ignored. The calculator shows 17.51% body fat, unrounded 17.5131%, fat mass 31.52 lb, and lean mass 148.48 lb. The band is the fitness band for men.',
          'The BMI page does not accept a neck or a waist. If this 180 lb man is about 81.6 kg at 70 inches, that is a different input and a different result. Do not read 17.51% as a BMI.'
        ]
      },
      {
        title: 'A woman at 64 inches, neck 13, waist 28, hip 38, 140 pounds',
        paragraphs: [
          'Switch to women and enter height 64, neck 13, waist 28, hip 38, weight 140. The calculator shows 26.59% body fat, unrounded 26.5886%, fat mass 37.22 lb, and lean mass 102.78 lb. The band is the average band for women.',
          'Leaving the hip blank, or entering a hip of zero, is rejected on the women’s equation. A waist plus hip that is not larger than the neck is also rejected. The men’s equation never applies that hip test.'
        ]
      },
      {
        title: 'The same style of measurement in centimeters',
        paragraphs: [
          'Choose men and centimeters. Height 175, neck 38, waist 86, weight 75. The calculator divides each length by 2.54, then uses the men’s equation. The headline is 17.79% body fat. Fat mass is 13.35 kg and lean mass is 61.65 kg. The weight unit follows the menu. Kilograms are not converted into the percent.',
          'These centimeters are not the 70 inch sample. 70 inches is 177.80 cm, not 175. Changing the unit menu without changing the numbers would treat 70 as centimeters and produce a different percent. Replace the measurements when you switch units.'
        ]
      }
    ],
    table: {
      heading: 'Body-fat results from the Navy equations',
      caption: 'Each row is the headline percent, fat mass, and lean mass this calculator displays. The fitness band is a general label, not a diagnosis. Hip is used only for women.',
      headers: ['Person', 'Measurements', 'Body fat', 'Fat mass', 'Lean mass'],
      rows: [
        ['Man', '70 in, neck 15, waist 34, 180 lb', '17.51%', '31.52 lb', '148.48 lb'],
        ['Woman', '64 in, neck 13, waist 28, hip 38, 140 lb', '26.59%', '37.22 lb', '102.78 lb'],
        ['Man, metric', '175 cm, neck 38, waist 86, 75 kg', '17.79%', '13.35 kg', '61.65 kg']
      ]
    },
    limitsHeading: 'What a circumference percent leaves out',
    limits: [
      'A tape measure is not a DEXA scan, an air-displacement test, or underwater weighing. Hydration, stomach contents, and where the tape sits can move the percent by more than the rounding on this page. The equation was built on a military population and will miss some body shapes.',
      'The fitness bands are rough adult labels so the percent is not left without context. They are not the Navy’s official body-composition tables, not ACE clinical guidance, and not a reason to start or stop a diet. Children and pregnancy are outside the equations.',
      'Weight errors do not change the percent. They change only fat mass and lean mass. A wrong waist changes the percent itself. The form cannot see whether the waist was taken at the navel.',
      'BMI remains a separate screening ratio. Ideal weight from Devine, Robinson, or Miller is a third calculation. None of those pages reads a neck circumference.'
    ],
    disclaimer: 'This body-fat percent is a circumference estimate, not a measurement of body composition and not medical advice. Tape site and individual variation change the result.',
    faqs: [
      {
        q: 'What body-fat percentage does the Navy equation give for a 34 inch waist?',
        a: 'For a man at 70 inches with a 15 inch neck and a 34 inch waist, 17.51%. Fat mass at 180 lb is 31.52 lb and lean mass is 148.48 lb. A different height or neck changes that percent even if the waist stays 34.'
      },
      {
        q: 'Does the women’s body-fat equation use the hip?',
        a: 'Yes. The sample at 64 inches, neck 13, waist 28, and hip 38 is 26.59% at 140 lb. The men’s equation ignores the hip field. A missing hip is rejected only for women.'
      },
      {
        q: 'Are centimeters converted before the logarithm?',
        a: 'Yes. Each length is divided by 2.54. A man at 175 cm, neck 38 cm, and waist 86 cm is 17.79% body fat. The 75 kg weight becomes 13.35 kg of fat mass and 61.65 kg of lean mass. The percent itself does not use the weight.'
      },
      {
        q: 'Is this body-fat percent the same thing as BMI?',
        a: 'No. BMI is weight divided by height squared. The sample BMI of 75 kg at 175 cm is 24.5. This page needs a neck and a waist and does not print a BMI. A fitness band is not an obesity class.'
      },
      {
        q: 'Can the Navy formula be used as a diagnosis?',
        a: 'No. It is a screening estimate from circumferences. It is not a DEXA result and not medical advice. The band names are general adult ranges, not a military standard and not a treatment threshold.'
      }
    ],
    relatedLinks: [
      { slug: 'bmi-calculator', label: 'Adult BMI calculator', note: '75 kg at 175 cm is BMI 24.5, Healthy range. 120 kg at 175 cm is BMI 39.2, Obesity class II. Neither result uses a neck or a waist.' },
      { slug: 'ideal-weight-calculator', label: 'Ideal weight calculator', note: 'Devine for a man at 175 cm is 70.5 kg. That target is not a body-fat percent.' },
      { slug: 'calorie-calculator', label: 'Daily calorie calculator', note: 'Mifflin–St Jeor for the sample man at 75 kg is 2,633 calories/day at a 1.55 multiplier. Body fat is not an input there.' }
    ]
  },
  'ovulation-calculator': {
    title: 'Ovulation Calculator from Cycle Length and Luteal Phase | ClearCalc',
    h1: 'Ovulation Calculator',
    description: 'Estimate ovulation and a five-day fertile window from the last menstrual period. A 1 January 2026 period, a 28-day cycle, and a 14-day luteal phase ovulates on 15 January 2026.',
    intro: [
      'This ovulation calculator counts forward from the first day of the last menstrual period. Ovulation is that date plus the cycle length, minus the luteal phase. The fertile window runs from five days before ovulation through ovulation day. It does not add the day after. A last period of 1 January 2026, a 28-day cycle, and a 14-day luteal phase ovulates on 15 January 2026. The window is 10 January 2026 through 15 January 2026. The next period, if the cycle stays 28 days, is 29 January 2026.',
      'The pregnancy due date page uses a related count. Its conception day is the last period plus the cycle length minus 14. When the luteal phase on this page is 14, the ovulation date and that conception day are the same day. A luteal phase of 12 on a 26-day cycle still ovulates on 15 January 2026, but the due date page would place conception on 13 January because it always subtracts 14. This page does not estimate a due date.',
      'The luteal phase is limited to 10 through 16 days, and the cycle to 21 through 45 days, which is the same cycle range as the due date page. Those limits keep the luteal phase shorter than the cycle. The calendar method is a planning estimate. It is not contraception and not a fertility treatment.'
    ],
    steps: [
      'Enter the first day of the last menstrual period. The sample is 2026-01-01.',
      'Enter the usual cycle length in whole days from 21 to 45. The sample is 28.',
      'Enter the luteal phase in whole days from 10 to 16. The sample is 14, which matches the conception count on the due date page.',
      'Press Calculate. The headline is the ovulation date. The fertile window, the next period, and the following ovulation are underneath.'
    ],
    howHeading: 'How the ovulation date and the fertile window are counted',
    howItWorks: [
      'The offset from the last period to ovulation is cycle length minus luteal phase. For 28 and 14 that offset is 14 days, so 1 January plus 14 days is 15 January. The fertile window starts five days earlier, on 10 January, and ends on ovulation day. The next period is the last period plus the full cycle, 29 January. The following ovulation adds one more cycle to the first ovulation, which is 12 February 2026.',
      'A 35-day cycle with a 14-day luteal phase ovulates on 22 January 2026. The window is 17 January through 22 January. The next period is 5 February 2026, and the following ovulation is 26 February 2026. The due date page’s conception day for a 35-day cycle is also 22 January, because both counts subtract 14.',
      'A 26-day cycle with a 12-day luteal phase has the same 14-day offset, so ovulation is again 15 January 2026 and the window is again 10 January through 15 January. The next period is 27 January 2026, not 29 January. The detail line says the due date page would not call 15 January the conception day, because that page subtracts 14 rather than 12. The dates are calendar dates, not ultrasound findings.'
    ],
    formula: 'Ovulation = last menstrual period + cycle length − luteal phase\nFertile window = ovulation − 5 days through ovulation day\nNext period = last menstrual period + cycle length\nFollowing ovulation = ovulation + cycle length\nCycle 21 to 45 days. Luteal phase 10 to 16 days, and shorter than the cycle.',
    formulaNotes: [
      'Five days is the usual upper estimate for how long sperm remain able to fertilize an egg, and the window ends on ovulation day because the egg is viable for about a day. Some charts add the day after ovulation. This page does not.',
      'When the luteal phase is 14, ovulation matches the conception day on the pregnancy due date calculator for the same cycle length. A different luteal phase moves only this page. The due date page does not have a luteal field.'
    ],
    examplesHeading: 'Worked ovulation examples',
    examples: [
      {
        title: '1 January 2026, 28-day cycle, 14-day luteal phase',
        paragraphs: [
          'The calculator shows ovulation on 15 January 2026. The fertile window is 10 January 2026 through 15 January 2026. The next period is 29 January 2026. The following ovulation is 12 February 2026. The note says this ovulation matches the due date page’s conception day.',
          'The due date for that same last period and a 28-day cycle is 8 October 2026 on the pregnancy page. This page does not print 8 October. It stops at the cycle you are in and the next ovulation.'
        ]
      },
      {
        title: 'A 35-day cycle with the luteal phase left at 14',
        paragraphs: [
          'Change the cycle to 35 and leave the luteal phase at 14. Ovulation moves to 22 January 2026. The window is 17 January through 22 January. The next period is 5 February 2026. The following ovulation is 26 February 2026.',
          'The due date page moves the due date to 15 October 2026 for a 35-day cycle and leaves gestational age counted from the last period. This page moves ovulation by the same seven days and does not discuss trimesters.'
        ]
      },
      {
        title: 'A shorter luteal phase that keeps the same ovulation day',
        paragraphs: [
          'Cycle 26 and luteal phase 12. The offset is still 14 days, so ovulation is 15 January 2026 and the window is 10 January through 15 January. The next period is 27 January 2026. The following ovulation is 10 February 2026.',
          'The result says this is not the conception day on the due date page. That page would use 26 − 14 = 12 days and land on 13 January. Use 14 on this page when you want the two dates to agree. A luteal phase of 16 on a 21-day cycle is allowed. The luteal field only accepts 10 to 16 days, so it cannot be as long as the shortest cycle the form allows.'
        ]
      }
    ],
    table: {
      heading: 'Ovulation dates from 1 January 2026',
      caption: 'Each row starts from a last menstrual period of 1 January 2026. The fertile window ends on ovulation day. The due date page matches the ovulation column only when the luteal phase is 14.',
      headers: ['Cycle', 'Luteal phase', 'Ovulation', 'Fertile window', 'Next period'],
      rows: [
        ['28 days', '14 days', '15 January 2026', '10 January through 15 January', '29 January 2026'],
        ['35 days', '14 days', '22 January 2026', '17 January through 22 January', '5 February 2026'],
        ['26 days', '12 days', '15 January 2026', '10 January through 15 January', '27 January 2026']
      ]
    },
    limitsHeading: 'What a calendar ovulation date leaves out',
    limits: [
      'Cycles are not identical every month. Illness, travel, contraception, breastfeeding, and polycystic ovary syndrome move ovulation off a fixed offset. An ovulation predictor kit or an ultrasound can disagree with this date by several days.',
      'The five-day window is a planning range, not a guarantee of fertility and not a safe period for avoiding pregnancy. The calendar method has a high failure rate when it is used as contraception. This page does not evaluate a method of birth control.',
      'Pregnancy, recent miscarriage, and hormonal medication are outside the count. The form does not ask whether a period was a true menstrual period. A date that is not a real calendar day is rejected.',
      'The due date calculator remains the page for Naegele’s rule. Matching conception days when the luteal phase is 14 is a cross-check of the arithmetic, not a clinical finding.'
    ],
    disclaimer: 'This ovulation date is a calendar estimate, not contraception, not a fertility treatment, and not medical advice. Confirm timing with a clinician if you are trying to conceive or to avoid pregnancy.',
    faqs: [
      {
        q: 'When is ovulation if the last period was 1 January 2026?',
        a: 'On 15 January 2026 if the cycle is 28 days and the luteal phase is 14 days. The fertile window is 10 January through 15 January, and the next period is 29 January 2026.'
      },
      {
        q: 'Why does a 35-day cycle move ovulation later?',
        a: 'Because the offset is 35 − 14 = 21 days. Ovulation is 22 January 2026, the window starts 17 January, and the next period is 5 February 2026. The due date page uses the same 21-day conception offset when its cycle field is 35.'
      },
      {
        q: 'What changes if the luteal phase is not 14 days?',
        a: 'This page subtracts the luteal phase you type. A 26-day cycle and a 12-day luteal phase still ovulate on 15 January 2026, but the next period is 27 January. The due date page would place conception on 13 January, because it always subtracts 14.'
      },
      {
        q: 'Does the fertile window include the day after ovulation?',
        a: 'No. It starts five days before ovulation and ends on ovulation day. Sperm survival and the life of the egg both vary. The day after is not added on this page.'
      },
      {
        q: 'Is this ovulation calculator a form of contraception?',
        a: 'No. It is a calendar estimate for planning. It is not a safe-period method, not a diagnosis, and not a substitute for contraception or for fertility care.'
      }
    ],
    relatedLinks: [
      { slug: 'pregnancy-due-date-calculator', label: 'Pregnancy due date calculator', note: 'The same 1 January 2026 period and a 28-day cycle is due 8 October 2026. Conception on that page is 15 January, which matches this ovulation date only when the luteal phase is 14.' },
      { slug: 'date-difference-calculator', label: 'Date difference calculator', note: '1 January to 15 January 2026 is 14 elapsed days. That page does not subtract a luteal phase.' },
      { slug: 'age-calculator', label: 'Age calculator', note: 'Completed years, months, and days. It does not estimate ovulation.' }
    ]
  },
  'sleep-calculator': {
    title: 'Sleep Calculator for 90-Minute Cycles | ClearCalc',
    h1: 'Sleep Calculator',
    description: 'Find a bedtime or a wake time from sleep cycles. Waking at 06:30, with 15 minutes to fall asleep and 90-minute cycles, puts the 5-cycle bedtime at 22:45 the evening before.',
    intro: [
      'This sleep calculator works backwards from a wake time, or forwards from a bedtime, in whole cycles. The default cycle is 90 minutes, and the default time to fall asleep is 15 minutes. Waking at 06:30, the 5-cycle bedtime is 22:45 the evening before. That is 7.5 hours asleep plus the 15 minutes spent falling asleep. Six cycles, 9 hours asleep, is 21:15 the evening before. Four cycles is 00:15 the same day, and three cycles is 01:45 the same day.',
      'The headline is always the 5-cycle result, which is a common full night rather than the longest or the shortest option. The other three counts are listed under it. If you already know the bedtime, switch the menu. Going to bed at 23:00 with the same 15 minutes and 90-minute cycles wakes at 06:45 the next morning for 5 cycles, 08:15 for 6 cycles, 05:15 for 4 cycles, and 03:45 for 3 cycles.',
      'Ninety minutes is an average length for a sleep cycle, not a measurement of your night. The cycle field accepts 60 to 120 minutes so you can see how a shorter or longer cycle moves the clock. The time-card page totals a shift. It does not suggest a bedtime. This page does not total hours worked.'
    ],
    steps: [
      'Choose whether you know the wake time or the bedtime. The sample is a wake time.',
      'Enter the hour from 0 to 23 and the minute from 0 to 59. The sample is 6 and 30, which is 06:30.',
      'Enter minutes to fall asleep, from 0 to 90, and a cycle length from 60 to 120. The sample is 15 and 90.',
      'Press Calculate. The headline is the 5-cycle clock time. Six, four, and three cycles are listed underneath.'
    ],
    howHeading: 'How bedtimes and wake times are counted in cycles',
    howItWorks: [
      'A wake-time calculation subtracts the cycles and then subtracts the minutes to fall asleep. For 06:30, five cycles are 450 minutes and the buffer is 15, so the bedtime is 465 minutes before 06:30, which is 22:45 the evening before. Six cycles subtract 555 minutes and land at 21:15. Four cycles leave 00:15 the same calendar morning, because 06:30 minus 375 minutes does not cross into the previous date.',
      'A bedtime calculation adds the buffer first, then adds the cycles. From 23:00, five cycles reach 06:45 the next morning. The clock is 24-hour. 11 p.m. is entered as 23. An hour of 24 or a minute of 60 is rejected.',
      'Set the fall-asleep field to 0 if you want the cycles alone. Waking at 07:00 with a 90-minute cycle and no buffer puts the 5-cycle bedtime at 23:30 the evening before: 7.5 hours exactly, with nothing added for falling asleep. The page still will not promise that you fall asleep at the moment you intend.'
    ],
    formula: 'Wake-time mode: bedtime = wake − (cycles × cycle length) − minutes to fall asleep\nBedtime mode: wake = bedtime + minutes to fall asleep + (cycles × cycle length)\nThe headline uses 5 cycles. The details also list 6, 4, and 3.\nDefault cycle length 90 minutes. Default fall-asleep buffer 15 minutes.',
    formulaNotes: [
      'Times wrap at midnight. A result on the previous date after noon is described as the evening before. A result on the next date before noon is the next morning. The clock is HH:MM on a 24-hour face.',
      'The cycle counts are fixed at 6, 5, 4, and 3 so the page compares nights rather than asking you to guess a single count. Changing the cycle length rescales all four. Two cycles and one cycle are not listed.'
    ],
    examplesHeading: 'Worked sleep-cycle examples',
    examples: [
      {
        title: 'Wake at 06:30, 15 minutes to fall asleep, 90-minute cycles',
        paragraphs: [
          'The headline is 5 cycles: 22:45, the evening before. Six cycles is 21:15, the evening before, which is 9 hours asleep. Four cycles is 00:15, the same day, which is 6 hours asleep. Three cycles is 01:45, the same day, which is 4.5 hours asleep.',
          'The 15 minutes is time in bed before sleep is assumed to start. It is not part of the hours-asleep figure. 7.5 hours plus 15 minutes is 7 hours 45 minutes before 06:30, and that clock time is 22:45.'
        ]
      },
      {
        title: 'Bedtime at 23:00 with the same buffer and cycle',
        paragraphs: [
          'Switch the menu to a bedtime. Hour 23, minute 0, fall asleep 15, cycle 90. The 5-cycle headline is 06:45, the next morning. Six cycles is 08:15 the next morning. Four cycles is 05:15 the next morning. Three cycles is 03:45 the next morning.',
          'This is the reverse of the wake-time arithmetic, not a new formula. Starting at 22:45 and adding 15 minutes plus five 90-minute cycles returns to 06:30. Use that pair as a check when you switch the menu.'
        ]
      },
      {
        title: 'A 07:00 wake time with no time allowed to fall asleep',
        paragraphs: [
          'Hour 7, minute 0, fall asleep 0, cycle 90. Five cycles is exactly 7.5 hours, so the bedtime is 23:30, the evening before. Six cycles is 22:00 the evening before. The buffer is zero, so the clock difference equals the hours asleep.',
          'A cycle of 80 minutes would move every line. The field accepts 60 through 120. An overnight shift from 22:00 to 06:00 belongs on a timesheet, and the time-card page rejects that span because it does not roll into the next day. This page is allowed to cross midnight because a night’s sleep does.'
        ]
      }
    ],
    table: {
      heading: 'Clock times for a 06:30 wake-up',
      caption: 'Fall-asleep buffer 15 minutes and a 90-minute cycle, working back from 06:30. The headline on that input is the 5-cycle row.',
      headers: ['Cycles', 'Hours asleep', 'Bedtime', 'When'],
      rows: [
        ['6', '9', '21:15', 'the evening before'],
        ['5', '7.5', '22:45', 'the evening before'],
        ['4', '6', '00:15', 'the same day'],
        ['3', '4.5', '01:45', 'the same day']
      ]
    },
    limitsHeading: 'What a cycle chart leaves out',
    limits: [
      'Real cycles vary. Deep sleep and REM are not the same length every cycle, and they change with age, alcohol, illness, and sleep debt. Waking at the end of a cycle is a comfort heuristic, not a measurement from a sleep study.',
      'The 15-minute buffer is a default, not your sleep latency. If you usually lie awake for 40 minutes, type 40. The page cannot see that from the wake time alone. It also cannot see naps, caffeine, or a shift-work schedule.',
      'This is not a schedule for an infant, not a treatment for insomnia, and not a screen for sleep apnea. A clinician uses a history and sometimes a study. Three cycles is listed so the short option is visible. It is not a recommendation to sleep 4.5 hours.',
      'The time-card calculator remains the tool for paid hours. An 8.0000 hour shift is not a sleep cycle, and a 22:45 bedtime is not a clock-in.'
    ],
    disclaimer: 'This sleep time is a cycle estimate for adults, not a diagnosis, a treatment for insomnia, or a schedule for an infant.',
    faqs: [
      {
        q: 'What bedtime matches a 06:30 wake-up on a 90-minute cycle?',
        a: '22:45 the evening before for 5 cycles, if you allow 15 minutes to fall asleep. Six cycles is 21:15 the evening before. Four cycles is 00:15 the same day, and three cycles is 01:45 the same day.'
      },
      {
        q: 'What time do I wake if I go to bed at 23:00?',
        a: '06:45 the next morning for 5 cycles, with 15 minutes to fall asleep and a 90-minute cycle. Six cycles is 08:15, four cycles is 05:15, and three cycles is 03:45, all the next morning.'
      },
      {
        q: 'Why does the sleep headline use 5 cycles?',
        a: 'Five cycles is 7.5 hours asleep at the default 90-minute length, which is the middle of the four nights the page lists. Six, four, and three cycles are still printed. The headline is not a prescription to sleep exactly 7.5 hours.'
      },
      {
        q: 'Can the cycle length be something other than 90 minutes?',
        a: 'Yes. Enter a whole number from 60 to 120. Minutes to fall asleep can be 0 through 90. An hour must be 0 to 23. The page uses a 24-hour clock, so 11 p.m. is 23.'
      },
      {
        q: 'Does this sleep calculator total a work shift?',
        a: 'No. The time-card page turns 09:00 to 17:30 with a 30-minute break into 8.0000 hours, and it rejects an overnight shift. This page is allowed to cross midnight because it is planning a night’s sleep, not paying an hour.'
      }
    ],
    relatedLinks: [
      { slug: 'time-card-hours-calculator', label: 'Time card hours calculator', note: '09:00 to 17:30 with a 30-minute break is 8.0000 hours. It does not suggest a bedtime, and it does not roll a night shift into the next day.' },
      { slug: 'overtime-pay-calculator', label: 'Weekly overtime pay calculator', note: 'Prices hours over a threshold. A sleep cycle is not an overtime hour.' },
      { slug: 'age-calculator', label: 'Age calculator', note: 'Completed years, months, and days. It does not divide a night into 90-minute cycles.' },
      { slug: 'calorie-calculator', label: 'Calorie calculator', note: 'A maintenance-calorie estimate from Mifflin–St Jeor. It does not turn a bedtime into a cycle count.' }
    ]
  },
  'tennessee-paycheck-calculator': {
    title: 'Tennessee Paycheck Calculator for 2026 | ClearCalc',
    h1: 'Tennessee Paycheck Calculator for 2026',
    description: 'Estimate a 2026 Tennessee paycheck after federal income tax, Social Security, and Medicare. At $65,000 single the two-week figure is $2,092.60, and Tennessee wage tax is $0.00.',
    intro: [
      'This Tennessee paycheck calculator estimates 2026 take-home pay on wages after federal income tax, Social Security, and Medicare. Tennessee income tax on the sample is $0.00. At $65,000, single, paid every two weeks, with no 401(k), the headline is $2,092.60. Federal income tax is $5,620.00, Social Security is $4,030.00, Medicare is $942.50, and Additional Medicare Tax is $0.00. Annual take-home is $54,407.50. The federal standard deduction applied is $16,100.',
      'Those dollar lines match the Texas and Florida pages when the wage, status, frequency, and deferral match. The legal reason for the zero is not the same statute. Tennessee has no tax on salaries or wages. The Department of Revenue says the state has no withholding requirement on earned income. The Hall income tax, which applied to some interest and dividends and never to wages, was repealed for tax periods beginning on or after 1 January 2021. The department tells filers not to file a Hall return for a year that begins on or after that date.',
      'No Tennessee county or city adds a wage tax on this page. Sales tax is a different bill. It is not withheld from this paycheck. A traditional 401(k) reduces federal taxable wages and is subtracted from cash pay. It cannot reduce a Tennessee wage tax that is already zero.'
    ],
    steps: [
      'Enter annual gross wages in dollars. The sample is 65000.',
      'Choose single or married filing jointly. Joint uses the $32,200 federal standard deduction and treats this wage as the only wage on the return.',
      'Choose a pay frequency. The sample is every two weeks, 26 pays.',
      'Enter a traditional 401(k) deferral, or leave it at 0. Press Calculate. The headline is one paycheck. Tennessee income tax is listed as $0.00.'
    ],
    howHeading: 'How a 2026 Tennessee paycheck is calculated',
    howItWorks: [
      'Federal taxable income is the wage minus the deferral minus the standard deduction, and not below zero. Single brackets for 2026 come from IRS Rev. Proc. 2025-32. On $65,000 with no deferral the deduction is $16,100, taxable income is $48,900, and federal tax is $5,620.00. Social Security is 6.2% of wages up to the $184,500 wage base, which is $4,030.00 on this salary. Medicare is 1.45%, which is $942.50. Additional Medicare Tax is 0.9% of wages over $200,000, which is $0.00 here.',
      'Take-home is the wage minus those federal lines, minus the deferral, minus Tennessee tax of $0.00. Dividing $54,407.50 by 26 and rounding to the cent is $2,092.60. A joint return on $90,000 with a $10,000 deferral, paid twice a month, shows $2,828.13 per half month, federal tax of $5,240.00, and Tennessee tax still at $0.00. The $32,200 deduction is used because the status is joint.',
      'The Hall tax is not a line that could come back at a zero rate. It was repealed. Interest and dividends that used to be in its scope are not estimated here either. The page is a wage paycheck. A Roth contribution should not be typed in the deferral field, because a Roth amount is not removed from federal taxable wages on this model.'
    ],
    formula: 'Federal taxable wages = wages − traditional 401(k) − 2026 standard deduction\nFederal tax from the Rev. Proc. 2025-32 brackets\nSocial Security = 6.2% up to the $184,500 wage base\nMedicare = 1.45% of wages\nAdditional Medicare Tax = 0.9% of wages over $200,000\nTennessee income tax = $0\nTake-home = wages − federal tax − Social Security − Medicare − Additional Medicare Tax − deferral',
    formulaNotes: [
      'The $0 Tennessee line is the earned-income rule, not a bracket that starts later. There is no Tennessee standard deduction to apply because there is no wage tax. The federal deduction is still used for federal tax.',
      'A deferral above the 2026 elective limit of $24,500, or above wages, is reduced to the limit. The catch-up amounts for age 50 and for ages 60 to 63 are not added. The same cap is used on the other state paycheck pages.'
    ],
    examplesHeading: 'Worked Tennessee paycheck examples',
    examples: [
      {
        title: '$65,000 single, every two weeks, no deferral',
        paragraphs: [
          'The calculator shows $2,092.60 / two weeks. Federal income tax is $5,620.00, Social Security is $4,030.00, Medicare is $942.50, Additional Medicare Tax is $0.00, and Tennessee income tax is $0.00. Annual take-home is $54,407.50. The standard deduction line is $16,100.00.',
          'Texas and Florida show the same dollars on this input. The Tennessee page adds the Hall-tax note. It does not add a local wage tax. Illinois on the same wage is $3,072.71 of state tax and a lower take-home, because Illinois has a 4.95% tax.'
        ]
      },
      {
        title: 'The same wage with a $6,500 traditional 401(k)',
        paragraphs: [
          'Federal taxable wages fall by $6,500. Federal income tax falls from $5,620.00 to $4,840.00. Social Security stays $4,030.00 and Medicare stays $942.50, because the deferral is not removed from FICA wages on this page. Tennessee tax stays $0.00. The deferral itself is subtracted from cash pay.',
          'There is no Tennessee tax saving to calculate. The only income-tax effect is federal. A Roth amount left in the deferral field would understate take-home and understate federal tax. Do not type it.'
        ]
      },
      {
        title: 'A joint wage and a higher salary',
        paragraphs: [
          '$90,000, married filing jointly, twice a month, with a $10,000 deferral, shows $2,828.13 / half month. Federal tax is $5,240.00, Social Security is $5,580.00, Medicare is $1,305.00, and Tennessee tax is $0.00. Annual take-home is $67,875.00. The standard deduction is $32,200.00, and it belongs to the return, not to each spouse.',
          'Additional Medicare Tax appears once wages pass $200,000. A $210,000 single wage on the Texas page shows $90.00 of that tax, and the same federal rule applies here. Sales tax on a purchase in Tennessee is not a line on this paycheck.'
        ]
      }
    ],
    table: {
      heading: '2026 Tennessee paychecks with no state wage tax',
      caption: 'Tennessee income tax is $0.00 on every row. Federal figures use the 2026 standard deduction and Rev. Proc. 2025-32 brackets. A 401(k) is a traditional deferral.',
      headers: ['Wages', 'Status', '401(k)', 'Federal tax', 'Tennessee tax', 'Paycheck'],
      rows: [
        ['$65,000', 'Single', '$0', '$5,620.00', '$0.00', '$2,092.60 / two weeks'],
        ['$90,000', 'Joint', '$10,000', '$5,240.00', '$0.00', '$2,828.13 / half month']
      ]
    },
    limitsHeading: 'What this Tennessee estimate leaves out',
    limits: [
      'Publication 15-T withholding uses Form W-4, pay-period tables, and credits this annual standard-deduction model does not see. A bonus, a second job, pre-tax health insurance, or a pay count other than the one you chose will move a stub.',
      'The Hall tax repeal means this page does not tax interest and dividends either. It simply never asks for them. Investment income, if you have it, is not run through a leftover Hall rate. There is no leftover rate.',
      'Local sales tax and the state sales tax are not wage withholding. Property tax is not withheld here. Unemployment insurance is an employer tax. None of those is subtracted from the $2,092.60.',
      'The result is a planning estimate for one job’s wages. It is not a Form W-2 and not a Tennessee return, because there is no Tennessee individual return on these wages.'
    ],
    disclaimer: 'This is a 2026 planning estimate for Tennessee wages, not a pay stub, a Form W-4, or tax advice. Federal withholding and any benefit deduction are set by the employer.',
    faqs: [
      {
        q: 'Does Tennessee tax wages in 2026?',
        a: 'No. Tennessee income tax on a $65,000 wage is $0.00, and the two-week headline is $2,092.60 after federal income tax, Social Security, and Medicare. The state has no withholding on earned income.'
      },
      {
        q: 'What happened to the Tennessee Hall income tax?',
        a: 'It was repealed for tax periods beginning on or after 1 January 2021. It had applied to some interest and dividends, not to wages. The Department of Revenue says not to file a Hall return for a year that begins on or after the repeal.'
      },
      {
        q: 'Why does this Tennessee paycheck match Texas at $65,000?',
        a: 'Both pages use the same 2026 federal brackets, the $16,100 single standard deduction, Social Security, and Medicare, and both set state wage tax to $0.00. The statutes are different. Tennessee’s zero is the absence of a wage tax plus the repealed Hall tax. Texas is a different state’s zero.'
      },
      {
        q: 'Does a 401(k) reduce Tennessee tax?',
        a: 'There is no Tennessee wage tax to reduce. A traditional deferral still reduces federal income tax and is removed from cash pay. On $65,000 single, a $6,500 deferral cuts federal tax from $5,620.00 to $4,840.00 and leaves Social Security at $4,030.00.'
      },
      {
        q: 'Is Tennessee sales tax taken out of this paycheck?',
        a: 'No. Sales tax is charged on purchases. It is not a line in this wage calculation, and neither is a county or city wage tax. No Tennessee locality adds an income tax on these wages.'
      }
    ],
    relatedLinks: [
      { slug: 'texas-paycheck-calculator', label: 'Texas paycheck calculator for 2026', note: 'The same $65,000 single inputs are also $2,092.60 every two weeks, with state tax at $0.00 for a different statute.' },
      { slug: 'florida-paycheck-calculator', label: 'Florida paycheck calculator for 2026', note: 'Another state wage tax of $0.00 on the same federal and FICA structure.' },
      { slug: 'illinois-paycheck-calculator', label: 'Illinois paycheck calculator for 2026', note: 'The same wage is $3,072.71 of Illinois tax at 4.95% after a $2,925 exemption, and a lower take-home.' },
      { slug: 'indiana-paycheck-calculator', label: 'Indiana paycheck calculator for 2026', note: 'Indiana adds 2.95% after a $1,000 exemption and a county rate. At $65,000 single with one exemption and 2.02% county tax, the two-week headline is $1,970.26.' }
    ]
  },
  'indiana-paycheck-calculator': {
    title: 'Indiana Paycheck Calculator for 2026: State and County Tax | ClearCalc',
    h1: 'Indiana Paycheck Calculator for 2026',
    description: 'Estimate a 2026 Indiana paycheck after the 2.95% state tax, a $1,000 exemption, and a county rate you enter. At $65,000 single with 2.02% county tax, the two-week figure is $1,970.26.',
    intro: [
      'This Indiana paycheck calculator estimates 2026 take-home pay after federal income tax, Social Security, Medicare, the Indiana state tax, and a county income tax rate you type. The state rate is 2.95% for 2026, from the Indiana Department of Revenue rate page. It is scheduled to be 2.90% in 2027, and that later rate is not used. Each exemption you enter subtracts $1,000. The sample is one exemption.',
      'At $65,000, single, every two weeks, no 401(k), one exemption, and a county rate of 2.02%, Indiana taxable income is $64,000.00. State tax is $1,888.00. County tax is $1,292.80. Federal income tax is $5,620.00, Social Security is $4,030.00, and Medicare is $942.50. The headline is $1,970.26 / two weeks. Annual take-home is $51,226.70. The 2.02% figure is a rate you must confirm. This page does not look up a county.',
      'County rates are in Departmental Notice #1. They can change in January and in October. An asterisk on that notice marks a rate that changed since the January edition. A resident uses the county of residence on 1 January. Someone who lived outside Indiana on 1 January and worked in an Indiana county uses that work county. The federal standard deduction is not an Indiana deduction.'
    ],
    steps: [
      'Enter annual gross wages. The sample is 65000.',
      'Choose single or married filing jointly, and a pay frequency. The sample is single and every two weeks.',
      'Enter Indiana exemptions. One exemption is $1,000. A joint return often uses 2. The form does not add the second exemption when you change the status.',
      'Type the county rate as a percent. For 2.02%, type 2.02. Use 0 if you want the state tax alone. Press Calculate.'
    ],
    howHeading: 'How Indiana state tax and county tax share one base',
    howItWorks: [
      'Indiana taxable income is the wage minus a traditional 401(k), minus $1,000 times the exemption count, and not below zero. State tax is 2.95% of that amount, rounded to the cent. County tax is the rate you typed, times the same amount, also rounded to the cent. On $64,000, 2.95% is $1,888.00 and 2.02% is $1,292.80. A county rate of 0 leaves the state tax at $1,888.00 and moves the two-week headline from $1,970.26 to $2,019.98. Annual take-home becomes $52,519.50.',
      'Federal tax uses the wage after the 401(k), then the federal standard deduction, then the Rev. Proc. 2025-32 brackets. The $16,100 single deduction is not subtracted again for Indiana. Social Security and Medicare use gross wages, not Indiana taxable income. A $6,500 deferral on the sample cuts Indiana taxable income to $57,500.00, state tax to $1,696.25, and county tax at 2.02% to $1,161.50. The two-week headline becomes $1,762.68. Federal tax falls from $5,620.00 to $4,840.00. FICA does not change.',
      'A joint return on $120,000 with two exemptions and a 1.10% county rate has Indiana taxable income of $118,000.00, state tax of $3,481.00, and county tax of $1,298.00. The monthly headline is $8,000.08. The $32,200 federal deduction is used only for federal tax. County rates with four decimal places are accepted, because some county rates are not whole hundredths of a percent. The rate must be from 0 to 4.'
    ],
    formula: 'Indiana taxable income = wages − traditional 401(k) − $1,000 × exemptions\nState tax = 2.95% of that income\nCounty tax = the county percent you type × the same income\nFederal tax uses wages after the 401(k), minus the federal standard deduction\nSocial Security = 6.2% up to $184,500\nMedicare = 1.45%, plus 0.9% over $200,000\nTake-home = wages − federal tax − FICA − state tax − county tax − deferral',
    formulaNotes: [
      'The 2.95% rate is the 2026 individual adjusted gross income tax rate. Department of Revenue material says the rate adjusts to 2.90% in 2027. This page stays on 2.95%.',
      'Exemptions are a whole number from 0 to 15. The usual filer claims at least one $1,000 exemption, and the Department’s instructions tell a person claimed on someone else’s return to enter $1,000 as well. Age and blindness can add exemptions. Include them in the count you type. This page does not add them automatically.'
    ],
    examplesHeading: 'Worked Indiana paycheck examples',
    examples: [
      {
        title: '$65,000 single, one exemption, 2.02% county tax',
        paragraphs: [
          'Taxable income is $65,000 − $1,000 = $64,000. State tax is $1,888.00. County tax is $1,292.80. Federal tax is $5,620.00, Social Security is $4,030.00, and Medicare is $942.50. The calculator shows $1,970.26 / two weeks and annual take-home of $51,226.70.',
          'Illinois on a $65,000 single wage is $3,072.71 of state tax after a $2,925 exemption, with no county line. Indiana’s state line is lower, and the county line is what you type. Tennessee on the same wage has a state line of $0.00 and a two-week headline of $2,092.60.'
        ]
      },
      {
        title: 'The same wage with the county rate set to zero',
        paragraphs: [
          'State tax stays $1,888.00. County tax is $0.00. The two-week headline is $2,019.98 and annual take-home is $52,519.50. The $1,292.80 of county tax is the whole difference in the annual figures. Use 0 when you want to see the state layer alone, not because a county rate of zero is typical. Every Indiana county has a local income tax.',
          'Replace 0 with the rate on Departmental Notice #1 for the county that applies on 1 January. A rate that changed in October is marked on the later notice. This form will not notice the asterisk for you.'
        ]
      },
      {
        title: 'A $6,500 deferral, and a joint return',
        paragraphs: [
          'On the $65,000 single sample, a $6,500 traditional 401(k) and a 2.02% county rate produce state tax of $1,696.25, county tax of $1,161.50, and a two-week headline of $1,762.68. Federal tax is $4,840.00. The deferral reduces both Indiana layers because both use income after the deferral.',
          '$120,000 joint, two exemptions, county rate 1.10%, paid monthly, shows $8,000.08 / month. State tax is $3,481.00 and county tax is $1,298.00. Indiana taxable income is $118,000.00. A deferral above $24,500 is cut back to the 2026 elective limit.'
        ]
      }
    ],
    table: {
      heading: '2026 Indiana paychecks at 2.95%',
      caption: 'State tax is 2.95% of wages after the 401(k) and the $1,000 exemptions. County tax uses the rate in the row. Federal tax is included in the paycheck column and is not repeated as its own column.',
      headers: ['Wages', 'Status', 'Exemptions', 'County rate', 'State tax', 'County tax', 'Paycheck'],
      rows: [
        ['$65,000', 'Single', '1', '2.02%', '$1,888.00', '$1,292.80', '$1,970.26 / two weeks'],
        ['$65,000', 'Single', '1', '0%', '$1,888.00', '$0.00', '$2,019.98 / two weeks'],
        ['$65,000', 'Single, $6,500 deferred', '1', '2.02%', '$1,696.25', '$1,161.50', '$1,762.68 / two weeks'],
        ['$120,000', 'Joint', '2', '1.10%', '$3,481.00', '$1,298.00', '$8,000.08 / month']
      ]
    },
    limitsHeading: 'What this Indiana estimate leaves out',
    limits: [
      'Add-backs on Schedule 1, deductions on Schedule 2, the renter’s deduction, the homeowner property-tax deduction, and the earned income credit are not applied. A return that claims them will owe less Indiana tax than this wage-only estimate.',
      'The county rate is your entry. Nonresident proration, a spouse with a different county, and professional-team rules in the Department’s bulletins are not modeled. Reciprocal agreements with other states do not cancel county tax.',
      'Employer withholding uses the deduction constants in Departmental Notice #1 and Form WH-4. Those pay-period tables can differ by a few dollars from this annual calculation. A bonus can be withheld without exemptions.',
      'The 2027 rate of 2.90% is not used. Local food-and-beverage tax and innkeeper’s tax are not wage taxes and are not subtracted.'
    ],
    disclaimer: 'This is a 2026 planning estimate for Indiana wages, not a pay stub, a Form WH-4, or tax advice. Confirm the county rate on Departmental Notice #1.',
    faqs: [
      {
        q: 'What is the Indiana state income tax rate for 2026?',
        a: '2.95% of Indiana taxable income. On $65,000 single with one $1,000 exemption and no 401(k), that tax is $1,888.00. The Department of Revenue says the rate adjusts to 2.90% in 2027. This page does not use 2.90%.'
      },
      {
        q: 'How does the county tax interact with the 2.95% state tax?',
        a: 'Both use the same taxable income. At a 2.02% county rate the county tax on $64,000 is $1,292.80, and the two-week headline is $1,970.26. Set the rate to 0 and the headline becomes $2,019.98, with state tax unchanged.'
      },
      {
        q: 'Does a traditional 401(k) reduce Indiana county tax?',
        a: 'Yes on this page. A $6,500 deferral cuts the $65,000 single base to $57,500 after the $1,000 exemption. State tax becomes $1,696.25 and a 2.02% county tax becomes $1,161.50. Social Security and Medicare do not change.'
      },
      {
        q: 'Which county rate should I type?',
        a: 'The rate on Departmental Notice #1 for your county of residence on 1 January, or your Indiana work county if you lived outside Indiana on that date. Rates can change in January and October. This page does not store the 92 counties.'
      },
      {
        q: 'Is the federal standard deduction an Indiana deduction?',
        a: 'No. The $16,100 single deduction reduces federal tax only. Indiana subtracts $1,000 per exemption you type. Illinois uses a $2,925 exemption and a 4.95% rate, which is a different state tax on the same wage.'
      }
    ],
    relatedLinks: [
      { slug: 'illinois-paycheck-calculator', label: 'Illinois paycheck calculator for 2026', note: 'At $65,000 single, Illinois tax is $3,072.71 after a $2,925 exemption. There is no county rate on that page.' },
      { slug: 'tennessee-paycheck-calculator', label: 'Tennessee paycheck calculator for 2026', note: 'The same wage is $2,092.60 every two weeks with state tax at $0.00. Tennessee has no county wage tax.' },
      { slug: 'ohio-paycheck-calculator', label: 'Ohio paycheck calculator for 2026', note: 'Ohio’s nonbusiness tax uses a different formula, then optional school-district and city rates. It is not a 2.95% state rate.' },
      { slug: '401k-contribution-calculator', label: '2026 401(k) contribution calculator', note: 'Check a deferral against the $24,500 limit before you type it here. The deferral reduces both Indiana layers.' }
    ]
  },
  'maryland-paycheck-calculator': {
    title: 'Maryland Paycheck Calculator for 2026: State and Local Tax | ClearCalc',
    h1: 'Maryland Paycheck Calculator for 2026',
    description: 'Estimate a 2026 Maryland paycheck after state brackets, a local rate, a $3,400 single standard deduction, and exemptions. At $65,000 single and 3.20% local tax, the two-week figure is $1,916.05.',
    intro: [
      'This Maryland paycheck calculator estimates 2026 take-home pay after federal tax, Maryland state income tax, and a local income tax rate you type. State tax uses the Comptroller’s 2026 rate schedules. Single filers pay 2% to $1,000, 3% to $2,000, 4% to $3,000, 4.75% to $100,000, then 5%, 5.25%, 5.5%, 5.75%, 6.25%, and 6.5% above $1,000,000. Joint filers keep 4.75% through $150,000, and 6.5% starts above $1,200,000.',
      'The standard deduction starts in Tax-General §10-217 at $3,350 single and $6,700 joint. For a taxable year beginning after 31 December 2025 the statute increases those amounts by the federal cost-of-living adjustment, with calendar year 2024 substituted for 2016, and rounds the increase down to a multiple of $50. Using CPI-U for the 12 months ending 31 August 2024 (310.955) and 31 August 2025 (319.205), the adjustment is 2.653%. The single increase rounds down to $50 and the joint increase rounds down to $150. This page uses $3,400 and $6,850. The Comptroller’s 2026 estimated-tax worksheet still prints $3,350 and $6,700. The 2026 withholding percentage method prints $3,400.',
      'At $65,000, single, one exemption, and a 3.20% local rate, Maryland taxable net income is $58,400.00. State tax is $2,721.50. Local tax is $1,868.80. The two-week headline is $1,916.05. Annual take-home is $49,817.20. The local rate is a percent of taxable net income. Anne Arundel County and Frederick County use income brackets instead of one rate, so a single percent is not their statute.'
    ],
    steps: [
      'Enter annual gross wages. The sample is 65000.',
      'Choose single or married filing jointly. Joint uses the $6,850 standard deduction and the joint brackets and phaseout.',
      'Enter the number of $3,200 exemptions before any phaseout. The sample is 1. A joint return often uses 2. The form does not add the spouse when the status changes.',
      'Type the local rate as a percent, from 0 to 3.30. The sample is 3.2, which several counties charge as a flat rate. Press Calculate.'
    ],
    howHeading: 'How Maryland state tax and local tax use one taxable income',
    howItWorks: [
      'Maryland starts from the wage after a traditional 401(k). It subtracts the standard deduction, then exemptions, and not below zero. Each exemption is $3,200 while federal AGI from this wage is $100,000 or under for a single filer, and $150,000 or under for a joint return. Above those lines the §10-211 phaseout cuts the exemption to $1,600, then $800, then $0. The extra $1,000 for age or blindness is not added.',
      'On $58,400 of single taxable income, state tax is $90 plus 4.75% of the amount over $3,000, which is $2,721.50. Local tax at 3.20% is $1,868.80. Federal tax on the same wage, after the $16,100 federal deduction, is $5,620.00. Social Security is $4,030.00 and Medicare is $942.50. Worcester County’s flat rate on the Comptroller’s 2026 list is 2.25%. At that rate the local tax is $1,314.00 and the two-week headline is $1,937.38. State tax does not change.',
      'A joint wage of $65,000 with two exemptions uses the $6,850 deduction and $6,400 of exemptions. Taxable income is $51,750.00, state tax is $2,405.63, and local tax at 3.20% is $1,656.00. The two-week headline is $2,020.23. A single wage of $160,000 is past the phaseout, so the exemption amount is $0.00. Taxable income is $156,600.00, state tax is $7,623.00, and local tax at 3.20% is $5,011.20. The two-week headline is $4,153.53.'
    ],
    formula: 'Maryland taxable net income = wages − 401(k) − standard deduction − exemptions\nSingle standard deduction used here: $3,400. Joint: $6,850.\nState tax from the Comptroller’s 2026 single or joint schedule\nLocal tax = the local percent you type × taxable net income\nExemption before phaseout: $3,200, phased out under Tax-General §10-211\nFederal tax, Social Security, and Medicare use the same 2026 wage rules as the other state pages',
    formulaNotes: [
      'The indexed deduction is this page’s reading of §10-217(c), not the unindexed pair still printed on the 2026 estimated-tax worksheet. If you want the worksheet’s $3,350, the single taxable income on the $65,000 sample would be $50 higher and the state tax would not be $2,721.50. This page does not offer that switch.',
      'Local tax is not a second set of brackets except in Anne Arundel County and Frederick County. Those two counties change the local percent as taxable income rises. Type one rate only if you already know which of their brackets applies. The maximum local rate the form accepts is 3.30%, the cap for a tax year beginning after 31 December 2025. The nonresident special rate is not applied.'
    ],
    examplesHeading: 'Worked Maryland paycheck examples',
    examples: [
      {
        title: '$65,000 single, one exemption, 3.20% local tax',
        paragraphs: [
          'The deduction is $3,400 and the exemption is $3,200, so taxable net income is $58,400. State tax is $2,721.50. Local tax is $1,868.80. Federal tax is $5,620.00, Social Security is $4,030.00, and Medicare is $942.50. The calculator shows $1,916.05 / two weeks and annual take-home of $49,817.20.',
          'Virginia on this wage, with one $930 exemption, is $2,923.40 of state tax and $1,980.16 every two weeks. Virginia has no local rate on that page. Maryland’s state line is lower and the local line is separate. Baltimore City, Baltimore County, and several other counties are 3.20% on the Comptroller’s 2026 list. Confirm the county before you rely on 3.2.'
        ]
      },
      {
        title: 'A 2.25% local rate, and a joint return',
        paragraphs: [
          'Keep the $65,000 single wage and one exemption, and change the local rate to 2.25. State tax stays $2,721.50. Local tax falls to $1,314.00. The two-week headline is $1,937.38 and annual take-home is $50,372.00. That 2.25% rate is the flat rate the Comptroller lists for Worcester County, and it is also the nonresident figure, but this page is a resident calculation. It does not switch rules when you type 2.25.',
          'A joint $65,000 wage with two exemptions and 3.20% local tax shows $2,020.23 / two weeks. State tax is $2,405.63, local tax is $1,656.00, and the standard deduction applied is $6,850.00. Federal tax is $3,440.00 because the joint federal deduction is $32,200.'
        ]
      },
      {
        title: 'The exemption phaseout at $160,000 single',
        paragraphs: [
          'A single wage of $160,000 is above $150,000, so each exemption is $0. The standard deduction is still $3,400. Taxable net income is $156,600. State tax is $7,623.00. At 3.20% the local tax is $5,011.20. The two-week headline is $4,153.53 and annual take-home is $107,991.80. Federal tax is $27,134.00.',
          'Between $100,000 and $125,000 a single exemption would be $1,600, and between $125,000 and $150,000 it would be $800. The joint phaseout starts later: $1,600 above $150,000, $800 above $175,000, and $0 above $200,000. The extra age and blindness amount of $1,000 is outside that phaseout and is not on this form.'
        ]
      }
    ],
    table: {
      heading: '2026 Maryland paychecks using the indexed deduction',
      caption: 'Single rows use a $3,400 standard deduction. The joint row uses $6,850. Local tax is the rate times Maryland taxable net income. The $160,000 row has a phased-out exemption.',
      headers: ['Wages', 'Status', 'Exemptions', 'Local rate', 'State tax', 'Local tax', 'Paycheck'],
      rows: [
        ['$65,000', 'Single', '1', '3.20%', '$2,721.50', '$1,868.80', '$1,916.05 / two weeks'],
        ['$65,000', 'Single', '1', '2.25%', '$2,721.50', '$1,314.00', '$1,937.38 / two weeks'],
        ['$65,000', 'Joint', '2', '3.20%', '$2,405.63', '$1,656.00', '$2,020.23 / two weeks'],
        ['$160,000', 'Single', '1', '3.20%', '$7,623.00', '$5,011.20', '$4,153.53 / two weeks']
      ]
    },
    limitsHeading: 'What this Maryland estimate leaves out',
    limits: [
      'The Comptroller’s worksheet deduction of $3,350 single and $6,700 joint is not used. Itemized deductions, the pension exclusion, the earned income credit, and the extra 2% tax on some net capital gain above $350,000 of federal AGI are not applied.',
      'Anne Arundel and Frederick local brackets are not coded. A single rate you type is applied to the whole taxable income. If your county uses steps, pick the rate for your income or accept that the local line is approximate.',
      'The $1,000 age or blindness exemption, the dependent extra for a dependent who is 65, and reciprocal withholding for residents of certain other states are omitted. A nonresident working in Maryland is not this result.',
      'Employer withholding can combine state and local tax on one stub line and can use a percentage method. This page keeps the two taxes separate and uses the annual schedules. A traditional 401(k) reduces the wage before the Maryland deduction. A Roth amount should not be entered.'
    ],
    disclaimer: 'This is a 2026 planning estimate for Maryland resident wages, not a pay stub, Form MW507, or tax advice. Confirm the local rate with the Comptroller’s county list, and confirm the standard deduction if you are using the estimated-tax worksheet’s unindexed amounts.',
    faqs: [
      {
        q: 'What is the Maryland tax on $65,000 of single wages in 2026?',
        a: 'State tax is $2,721.50 and, at a 3.20% local rate, local tax is $1,868.80. Taxable net income is $58,400 after a $3,400 deduction and a $3,200 exemption. The two-week headline is $1,916.05.'
      },
      {
        q: 'Why is the standard deduction $3,400 instead of $3,350?',
        a: 'Section 10-217 increases the $3,350 and $6,700 bases for a taxable year beginning after 31 December 2025 and rounds the increase down to $50. The CPI-U adjustment used here is 2.653%, so the increases are $50 and $150. The 2026 estimated-tax worksheet still prints the unindexed amounts. The withholding percentage method prints $3,400.'
      },
      {
        q: 'Do Maryland counties tax the same income as the state?',
        a: 'Yes on this page. Local tax is your rate times Maryland taxable net income. At 2.25% the $65,000 single local tax is $1,314.00 and the two-week headline is $1,937.38. Anne Arundel and Frederick change the rate by income bracket. One typed percent does not reproduce those steps.'
      },
      {
        q: 'When does the Maryland personal exemption disappear?',
        a: 'For a single filer the $3,200 exemption is $1,600 above $100,000, $800 above $125,000, and $0 above $150,000 of this wage. At $160,000 single the exemption line is $0.00, state tax is $7,623.00, and the two-week headline at 3.20% local tax is $4,153.53. Joint phaseout starts above $150,000.'
      },
      {
        q: 'How does this Maryland paycheck compare with Virginia?',
        a: 'At $65,000 single, Virginia tax is $2,923.40 and the two-week headline is $1,980.16, with no local wage tax on that page. Maryland state tax is $2,721.50 and local tax at 3.20% is another $1,868.80, so the Maryland headline is $1,916.05. The deductions are different statutes.'
      }
    ],
    relatedLinks: [
      { slug: 'virginia-paycheck-calculator', label: 'Virginia paycheck calculator for 2026', note: 'At $65,000 single with one $930 exemption, Virginia tax is $2,923.40 and the two-week headline is $1,980.16. There is no county rate.' },
      { slug: 'pennsylvania-paycheck-calculator', label: 'Pennsylvania paycheck calculator for 2026', note: 'A flat 3.07% state tax plus a local earned income tax you type. The local base is not Maryland taxable net income.' },
      { slug: 'indiana-paycheck-calculator', label: 'Indiana paycheck calculator for 2026', note: 'A flat 2.95% state tax plus a county rate. At $65,000 single, one exemption, and 2.02%, the two-week headline is $1,970.26.' },
      { slug: '401k-contribution-calculator', label: '2026 401(k) contribution calculator', note: 'Check a deferral against the $24,500 limit. A traditional deferral reduces the Maryland wage before the deduction and the exemption.' }
    ]
  },
  'nunavut-take-home-pay-calculator': {
    title: 'Nunavut Take-Home Pay Calculator for 2026 | ClearCalc',
    h1: 'Nunavut Take-Home Pay Calculator for 2026',
    description: 'Estimate 2026 Nunavut take-home pay after federal tax, territorial tax from 4% to 11.5%, the $19,659 basic personal amount, CPP, and EI. At $70,000 the monthly figure is $4,618.79.',
    intro: [
      'This Nunavut take-home pay calculator estimates 2026 pay after federal income tax, Nunavut income tax, Canada Pension Plan contributions, and Employment Insurance. The territorial brackets are the 2026 rates in CRA T4032-NU and on the Canada.ca rate table: 4% to $55,801, 7% to $111,602, 9% to $181,439, and 11.5% above that. The basic personal amount is $19,659, indexed by 2.0%. The credit uses the 4% lowest rate.',
      'At $70,000 the monthly headline is $4,618.79. Federal tax is $7,278.19. Nunavut tax is $2,216.47. Employee CPP, including the base and first additional contributions, is $3,956.75, and CPP2 is inside that total only when earnings pass the year’s maximum pensionable earnings. On this salary CPP2 is zero. EI is $1,123.07. Annual take-home is $55,425.52. Every two weeks is $2,131.75. The federal basic personal amount applied is $16,452.00. The Nunavut credit for the basic amount, base CPP, and EI is $962.95.',
      'Federal tax, the federal basic-personal-amount phase-out, CPP, CPP2, and EI outside Quebec come from the same helper as the Northwest Territories and Yukon pages. Quebec’s QPP, QPIP, and abatement are not used. The Nunavut cost of living tax credit is not applied, so a return that claims it will keep more than this estimate.'
    ],
    steps: [
      'Enter annual gross salary in Canadian dollars. The sample is 70000.',
      'Press Calculate. The headline is annual take-home divided by 12 and rounded to the cent.',
      'Read federal tax, Nunavut tax, CPP including CPP2, and EI as separate lines.',
      'Use the credit line to see the 4% credit on the $19,659 basic amount plus base CPP and EI. The cost of living credit is not in that line.'
    ],
    howHeading: 'How 2026 Nunavut tax sits on the federal payroll base',
    howItWorks: [
      'The shared payroll helper deducts the employee’s first additional CPP contribution, and CPP2 when it applies, before federal and territorial taxable income. On $70,000 the pensionable earnings are under the $74,600 YMPE used in that helper, the basic exemption is $3,500, base CPP is part of the $3,956.75 total, and EI is 1.63% up to the $68,900 maximum insurable earnings, which produces the $1,123.07 maximum. Federal tax after the 14% credit is $7,278.19, the same figure the Northwest Territories page shows at $70,000.',
      'Nunavut tax before the credit uses 4% on the first $55,801 of taxable income and 7% on the rest of the $70,000 salary after the CPP deduction. The credit is 4% of $19,659 plus base CPP plus EI, which is $962.95. Tax after the credit is $2,216.47. The Northwest Territories tax on the same payroll base is $3,197.57, so the Nunavut monthly headline is $4,618.79 against $4,537.04 there. The $81.75 gap between those two rounded monthly headlines is the territorial-tax difference after each page divides by 12 on its own.',
      'At $40,000 the monthly headline is $2,815.36. Federal tax is $2,691.25, Nunavut tax is $700.69, CPP is $2,171.75, and EI is $652.00. Annual take-home is $33,784.31. At $120,000 the monthly headline is $7,575.66. Federal tax is $17,502.14, Nunavut tax is $5,820.44, CPP including CPP2 is $4,646.45, and EI stays at the $1,123.07 maximum. The 9% bracket is in that $120,000 result. The 11.5% bracket is not.'
    ],
    formula: 'Taxable income = salary − first additional CPP − CPP2\nFederal tax from the 2026 federal brackets, minus 14% of the federal basic personal amount, base CPP, EI, and the Canada employment amount\nNunavut tax = bracket tax at 4%, 7%, 9%, and 11.5% − 4% × ($19,659 + base CPP + EI)\nEI = 1.63% up to the maximum insurable earnings, outside Quebec\nTake-home = salary − federal tax − Nunavut tax − CPP − CPP2 − EI',
    formulaNotes: [
      'The brackets and the $19,659 amount are the 1 January 2026 figures in T4032-NU. The indexing factor stated there is 2.0%. The basic amount is a single figure, not a federal-style pair that phases down.',
      'CPP and EI rates and ceilings are the ones already used for the other territories outside Quebec. A Quebec employer would not use this EI rate or this CPP. The northern residents deduction and the cost of living tax credit are territorial or federal relief this wage formula does not compute.'
    ],
    examplesHeading: 'Worked Nunavut take-home examples',
    examples: [
      {
        title: '$70,000, the sample salary',
        paragraphs: [
          'The calculator shows $4,618.79 / month. Federal tax is $7,278.19, Nunavut tax is $2,216.47, CPP is $3,956.75, and EI is $1,123.07. Annual take-home is $55,425.52. Every two weeks is $2,131.75. The federal basic personal amount is $16,452.00 and the Nunavut amount is $19,659.00. The 4% credit is $962.95.',
          'The Northwest Territories monthly headline at the same salary is $4,537.04, with territorial tax of $3,197.57. Yukon’s monthly headline is $4,521.58. The federal, CPP, and EI lines match. The territorial tax does not.'
        ]
      },
      {
        title: '$40,000, still inside the 4% band after the CPP deduction',
        paragraphs: [
          'The monthly headline is $2,815.36. Federal tax is $2,691.25. Nunavut tax is $700.69. CPP is $2,171.75. EI is $652.00, which is under the annual maximum because insurable earnings are under the cap. Annual take-home is $33,784.31. The credit is $884.71.',
          'The basic personal amount is still $19,659. It does not shrink at this income. The cost of living credit, which would matter more at a lower income, is still omitted, so this row is not a refund estimate.'
        ]
      },
      {
        title: '$120,000, with CPP2 and the 9% band',
        paragraphs: [
          'The monthly headline is $7,575.66. Federal tax is $17,502.14. Nunavut tax is $5,820.44. CPP including CPP2 is $4,646.45. EI remains $1,123.07. Annual take-home is $90,907.90. Every two weeks is $3,496.46. The credit is $972.06.',
          'Taxable income is above $111,602, so part of the territorial tax is at 9%. It is not above $181,439, so the 11.5% rate is unused. The federal basic personal amount on this salary is still $16,452.00 because the federal phase-out starts above $181,440 of net income in the shared helper.'
        ]
      }
    ],
    table: {
      heading: '2026 Nunavut take-home pay at three salaries',
      caption: 'CPP includes CPP2 where it applies. EI outside Quebec is capped. The cost of living tax credit is not subtracted. Monthly headlines are annual take-home divided by 12.',
      headers: ['Salary', 'Federal tax', 'Nunavut tax', 'CPP', 'EI', 'Monthly take-home'],
      rows: [
        ['$40,000', '$2,691.25', '$700.69', '$2,171.75', '$652.00', '$2,815.36'],
        ['$70,000', '$7,278.19', '$2,216.47', '$3,956.75', '$1,123.07', '$4,618.79'],
        ['$120,000', '$17,502.14', '$5,820.44', '$4,646.45', '$1,123.07', '$7,575.66']
      ]
    },
    limitsHeading: 'What this Nunavut estimate leaves out',
    limits: [
      'The cost of living tax credit is omitted at every salary. So are the northern residents deduction, tuition credits, and any other credit beyond the basic personal amount, base CPP, EI, and, on the federal side, the Canada employment amount.',
      'Payroll tables withhold by pay period. This page annualizes the salary and divides by 12. A bonus, a mid-year start, or a claim code other than the basic amount will move a stub. The two-week line is the annual figure divided by 26, not the T4032 biweekly cell.',
      'Self-employment CPP is a different rate and is not computed. Quebec employment uses QPP, QPIP, and a lower EI rate. Do not use this page for a Quebec salary.',
      'The result is an employee estimate for someone whose 31 December province or territory of residence is Nunavut. It is not a T1 assessment.'
    ],
    disclaimer: 'This is a 2026 planning estimate for Nunavut employment income, not a pay stub, a TD1NU, or tax advice. The cost of living tax credit is not included.',
    faqs: [
      {
        q: 'What is Nunavut take-home pay on a $70,000 salary in 2026?',
        a: '$4,618.79 a month. Federal tax is $7,278.19, Nunavut tax is $2,216.47, CPP is $3,956.75, and EI is $1,123.07. Annual take-home is $55,425.52. The basic personal amount is $19,659.'
      },
      {
        q: 'What are the 2026 Nunavut income tax brackets?',
        a: '4% to $55,801, 7% to $111,602, 9% to $181,439, and 11.5% above that. CRA’s indexing factor for 1 January 2026 is 2.0%. The $70,000 sample uses 4% and 7% after the CPP deduction. The $120,000 sample reaches 9% and does not reach 11.5%.'
      },
      {
        q: 'How does Nunavut compare with the Northwest Territories at $70,000?',
        a: 'Federal tax, CPP, and EI match. Nunavut tax is $2,216.47 and Northwest Territories tax is $3,197.57. The monthly headlines are $4,618.79 and $4,537.04. Yukon at the same salary is $4,521.58 a month.'
      },
      {
        q: 'Is the Nunavut cost of living credit in the $4,618.79 figure?',
        a: 'No. Territorial tax is $2,216.47 before that credit. The same omission applies at $40,000, where Nunavut tax is $700.69 and the monthly headline is $2,815.36. A credit you can claim would lower the tax below these rows.'
      },
      {
        q: 'Does this Nunavut page use Quebec payroll deductions?',
        a: 'No. CPP and EI are the rates for employment outside Quebec. A Quebec salary needs QPP, QPIP, the 1.30% EI rate, and the federal abatement. Those are on the Quebec page, and at $70,000 that monthly headline is $4,253.73.'
      }
    ],
    relatedLinks: [
      { slug: 'northwest-territories-take-home-pay-calculator', label: 'Northwest Territories take-home pay calculator for 2026', note: 'Same federal tax, CPP, and EI at $70,000. Territorial tax is $3,197.57 rather than $2,216.47, and the monthly headline is $4,537.04.' },
      { slug: 'yukon-take-home-pay-calculator', label: 'Yukon take-home pay calculator for 2026', note: 'Same federal pieces at $70,000. Yukon tax is $3,383.07 and the monthly headline is $4,521.58.' },
      { slug: 'quebec-take-home-pay-calculator', label: 'Quebec take-home pay calculator for 2026', note: 'A different payroll system. At $70,000 the monthly headline is $4,253.73. Do not subtract that from a Nunavut salary.' }
    ]
  },
  'northern-ireland-take-home-pay-calculator': {
    title: 'Northern Ireland Take-Home Pay Calculator for 2026/27 | ClearCalc',
    h1: 'Northern Ireland Take-Home Pay Calculator for 2026/27',
    description: 'Estimate 2026/27 Northern Ireland take-home pay with rest-of-UK income tax and employee National Insurance. At £35,000 with no loan the monthly figure is £2,393.30. Plan 1 makes it £2,332.55.',
    intro: [
      'This Northern Ireland take-home pay calculator uses the 2026/27 rest-of-UK income tax bands and employee National Insurance. Those are the same bands as England and Wales. Scottish income tax bands are not used. Income tax is 20% on the first £37,700 of taxable income, 40% up to £125,140 of taxable income, and 45% above that. The personal allowance is £12,570 and tapers by £1 for every £2 of income over £100,000. Employee National Insurance is 8% between the £12,570 primary threshold and the £50,270 upper earnings limit, then 2%. National Insurance is not a devolved Northern Ireland rate.',
      'At £35,000 with the student-loan menu left off, the monthly headline is £2,393.30. Income tax is £4,486.00, employee National Insurance is £1,794.40, and annual take-home is £28,719.60. That matches the England, Wales, and Northern Ireland page, which does not subtract a student loan. Northern Ireland undergraduate loans are Plan 1. Turn the menu on and the same salary subtracts £729.00, which is 9% of the £8,100 above the £26,900 Plan 1 threshold, rounded down to the pound. The monthly headline becomes £2,332.55 and annual take-home becomes £27,990.60.',
      'Plan 2, Plan 4, Plan 5, and a postgraduate loan are not subtracted even when Plan 1 is on. Employer withholding uses weekly or monthly Plan 1 thresholds and can differ by a few pounds from this annual threshold. The page is an annual estimate.'
    ],
    steps: [
      'Enter annual gross salary in pounds. The sample is 35000.',
      'Choose whether to subtract a Plan 1 student loan. The sample does not subtract one, so the tax and National Insurance can be compared with the England page.',
      'Press Calculate. The headline is annual take-home divided by 12.',
      'Read income tax, employee National Insurance, and the Plan 1 line separately. Scottish bands are not a menu.'
    ],
    howHeading: 'How rest-of-UK tax and Plan 1 apply in Northern Ireland',
    howItWorks: [
      'Taxable income is the salary minus the personal allowance, and not below zero. On £35,000 the allowance is the full £12,570, so taxable income is £22,430, all inside the 20% band. Income tax is £4,486.00. National Insurance is 8% of the £22,430 between £12,570 and the salary, because the salary is under £50,270. That is £1,794.40. Take-home without a loan is £28,719.60, or £2,393.30 a month and £552.30 a week.',
      'Plan 1 uses the 2026/27 annual threshold of £26,900 from the same HMRC employer figures as the student-loan page. Nine percent of £35,000 − £26,900 is £729 exactly, so the pound rounding does not change it. Monthly take-home falls by £60.75, from £2,393.30 to £2,332.55. Weekly take-home with the loan is £538.28. A £20,000 salary is under £26,900, so Plan 1 subtracts £0.00 even when the menu is on. Income tax at £20,000 is £1,486.00, National Insurance is £594.40, and the monthly headline is £1,493.30.',
      'At £60,000 with Plan 1 on, income tax is £11,432.00 and National Insurance is £3,210.60, the same pair the England page shows before any loan. Plan 1 is £2,979.00. The monthly headline is £3,531.53 and annual take-home is £42,378.40. The personal allowance is still £12,570 because £60,000 is under the taper. The Scotland page would use different income tax bands on this salary and the same National Insurance.'
    ],
    formula: 'Personal allowance = £12,570, reduced by £1 for every £2 over £100,000, rounded up to a pound, and never below £0\nIncome tax = 20% of taxable income to £37,700, 40% to £125,140, 45% above that\nEmployee NI = 8% between £12,570 and £50,270, then 2%\nPlan 1, if selected = 9% of earnings above £26,900, rounded down to the pound\nTake-home = salary − income tax − employee NI − Plan 1',
    formulaNotes: [
      'The bands and National Insurance thresholds are the 2026/27 rest-of-UK figures already used for England and Wales. HMRC’s employer rates set the primary threshold, the upper earnings limit, and the 8% and 2% employee rates. Scottish rates are a different statute.',
      'Plan 1 is the Student Loans Company plan for Northern Ireland undergraduates. The annual threshold is £26,900 for 2026/27. The deduction rounds down to the pound, which is the same rounding the student-loan page uses. A postgraduate loan at 6% is not added on top.'
    ],
    examplesHeading: 'Worked Northern Ireland take-home examples',
    examples: [
      {
        title: '£35,000 with no student loan',
        paragraphs: [
          'Income tax is £4,486.00. Employee National Insurance is £1,794.40. Plan 1 is £0.00. Annual take-home is £28,719.60. The monthly headline is £2,393.30 and the weekly figure is £552.30. The personal allowance is £12,570.00.',
          'The England, Wales, and Northern Ireland page shows the same tax, National Insurance, and monthly headline. This page is the one that can subtract Plan 1. Leaving the loan off is how you check that the bands match.'
        ]
      },
      {
        title: '£35,000 with a Plan 1 loan',
        paragraphs: [
          'Tax and National Insurance stay £4,486.00 and £1,794.40. Plan 1 is £729.00. Annual take-home is £27,990.60. The monthly headline is £2,332.55 and the weekly figure is £538.28. The £729.00 is 9% of £8,100.',
          'The student-loan page can show a Plan 1 deduction on its own. It does not subtract income tax and National Insurance. This page does all three, and only for Plan 1. A Plan 2 borrower in England would use a different threshold and should not leave this menu on.'
        ]
      },
      {
        title: '£20,000 under the Plan 1 threshold, and £60,000 above it',
        paragraphs: [
          'At £20,000 with Plan 1 selected, the loan line is £0.00 because the salary is below £26,900. Income tax is £1,486.00, National Insurance is £594.40, and the monthly headline is £1,493.30. Selecting the loan did not change the money.',
          'At £60,000 with Plan 1 on, income tax is £11,432.00, National Insurance is £3,210.60, and the loan is £2,979.00. The monthly headline is £3,531.53. The allowance has not started to taper. Scotland’s tax on £60,000 is a different bill. This page will not compute it.'
        ]
      }
    ],
    table: {
      heading: '2026/27 Northern Ireland take-home pay',
      caption: 'Income tax uses rest-of-UK bands. National Insurance is the UK employee rate. Plan 1 is 9% above £26,900, rounded down to the pound, and only when the row says it is on.',
      headers: ['Salary', 'Plan 1', 'Income tax', 'National Insurance', 'Loan', 'Monthly take-home'],
      rows: [
        ['£35,000', 'Off', '£4,486.00', '£1,794.40', '£0.00', '£2,393.30'],
        ['£35,000', 'On', '£4,486.00', '£1,794.40', '£729.00', '£2,332.55'],
        ['£20,000', 'On', '£1,486.00', '£594.40', '£0.00', '£1,493.30'],
        ['£60,000', 'On', '£11,432.00', '£3,210.60', '£2,979.00', '£3,531.53']
      ]
    },
    limitsHeading: 'What this Northern Ireland estimate leaves out',
    limits: [
      'Pension contributions, salary sacrifice, Marriage Allowance, and Blind Person’s Allowance are not applied. A tax code other than the standard £12,570 allowance will not match. The England page explains the same allowance limit.',
      'Plan 2, Plan 5, Plan 4, and postgraduate loans are omitted on purpose. Plan 4 is the Scottish plan. A Northern Ireland borrower who also has a postgraduate loan needs the student-loan page for that second deduction, then has to subtract it from this take-home.',
      'Payroll uses monthly and weekly thresholds. On a flat £35,000 the annual method and the monthly thresholds are close, and they are not identical. A bonus or a non-cumulative code opens a wider gap. Employer National Insurance, at 15% above the secondary threshold, is not deducted.',
      'Scottish bands are a different income tax. National Insurance would match and the tax would not. This page does not offer a Scotland switch.'
    ],
    disclaimer: 'This is a 2026/27 planning estimate for an employee taxed on rest-of-UK bands with UK National Insurance. It is not a payslip, a tax code, or advice. Plan 1 is included only when you select it.',
    faqs: [
      {
        q: 'Does Northern Ireland use Scottish income tax bands?',
        a: 'No. It uses the rest-of-UK bands: 20% to £37,700 of taxable income, 40% to £125,140, and 45% above that, after the £12,570 allowance. At £35,000 with no loan the monthly take-home is £2,393.30, the same figure as the England and Wales calculation. National Insurance is not devolved.'
      },
      {
        q: 'What does a Plan 1 student loan do to a £35,000 Northern Ireland salary?',
        a: 'It subtracts £729.00, which is 9% of the £8,100 above £26,900. Income tax stays £4,486.00 and National Insurance stays £1,794.40. The monthly headline falls from £2,393.30 to £2,332.55.'
      },
      {
        q: 'Why is Plan 1 £0 on a £20,000 salary?',
        a: 'Because £20,000 is below the £26,900 threshold. Tax is £1,486.00, National Insurance is £594.40, and the monthly headline is £1,493.30 whether or not the menu is on. The loan line still says the Plan 1 rule was selected.'
      },
      {
        q: 'Are Plan 2 or postgraduate loans included?',
        a: 'No. Only Plan 1 can be subtracted, and only when you select it. The student-loan calculator covers Plan 2, Plan 4, Plan 5, and a postgraduate loan as separate deductions. Those plans are not Northern Ireland’s undergraduate plan.'
      },
      {
        q: 'Why might a Northern Ireland payslip differ from £2,393.30?',
        a: 'The headline divides the annual figure by 12. Payroll uses period thresholds, a tax code, and its own rounding, and it may deduct a pension. A Plan 1 deduction on the stub uses the weekly or monthly threshold, which can differ by a few pounds from the annual £729.00.'
      }
    ],
    relatedLinks: [
      { slug: 'uk-take-home-pay-calculator', label: 'England, Wales, and Northern Ireland take-home pay calculator', note: 'The same bands with no student loan. At £35,000 the monthly figure is £2,393.30, matching this page when Plan 1 is off.' },
      { slug: 'scotland-take-home-pay-calculator', label: 'Scotland take-home pay calculator for 2026/27', note: 'Scottish income tax bands and the same National Insurance. It is not the Northern Ireland calculation.' },
      { slug: 'uk-student-loan-repayment-calculator', label: 'UK student loan repayment calculator for 2026/27', note: 'Plan 1 at the published period thresholds, plus the other plans. It does not compute income tax or National Insurance.' }
    ]
  },
  'fence-calculator': {
    title: 'Fence Calculator for Posts, Rails, and Pickets | ClearCalc',
    h1: 'Fence Calculator',
    description: 'Count posts, rails, and pickets for a rectangular fence or a straight run. A 40 by 20 foot rectangle at 8 foot spacing is 16 posts, 32 rails, and 241 pickets at 5.5 inches with a half-inch gap.',
    intro: [
      'This fence calculator counts materials for a closed rectangle or a straight run. Each side is divided by the post spacing. A side that divides evenly uses that many sections. A remainder becomes one shorter section at the end of that side. On a closed rectangle the posts equal the section count, because the last post of each side is the first post of the next side. On a straight run the posts equal the sections plus one, so both ends have a post.',
      'A 40 by 20 foot rectangle at 8 foot spacing does not divide evenly on the 20 foot sides. Each long side is 5 sections. Each short side is 3 sections, because 20 / 8 is 2.5 and the remainder rounds up to a section. The total is 16 sections and 16 posts. The perimeter is 120 feet. Two rails per section is 32 rail pieces. Pickets that are 5.5 inches wide with a 0.5 inch gap, and no gate, come to 241 boards.',
      'The concrete slab page counts bags for a pour. This page does not. Post holes, hinges, and a gate kit are omitted on purpose. A gate width is removed from the picket run only. It does not add posts, because a gate’s posts are already in the spacing count only when they fall on that spacing. If the gate needs posts that the spacing would not have placed, order those separately.'
    ],
    steps: [
      'Choose a closed rectangle or a straight run. The sample is a rectangle.',
      'Enter length and, for a rectangle, width, in feet. The sample is 40 by 20. Inches can be typed as a decimal, so 6 inches is 0.5.',
      'Enter post spacing from 2 to 20 feet. The sample is 8. Choose 2 or 3 rails per section.',
      'Enter picket width and gap in inches. Use 0 for the picket width on a rail fence. Enter total gate width in feet, or 0. Press Calculate. The headline is the post count.'
    ],
    howHeading: 'How posts, rails, and pickets are counted',
    howItWorks: [
      'Sections are counted per side, not by dividing the perimeter once. A 120 foot perimeter at 8 foot spacing would look like 15 equal sections, but the 20 foot sides are 2.5 spacing-lengths each. Building those sides needs three sections each, so the rectangle is 16 sections. The last section on each short side is 4 feet rather than 8. Rail pieces are still one per section per rail row. They are not all full 8 foot boards.',
      'Pickets cover the run after the gate. The count is the smallest number of boards whose widths, plus the gaps between them, meet or exceed that length. For 120 feet, a 5.5 inch picket, and a 0.5 inch gap, that count is 241. A picket width of 0 skips the count and ignores the gap. A straight 40 foot run at 8 foot spacing is 5 sections and 6 posts. Three rails make 15 pieces. With picket width 0 the picket line is 0.',
      'A 50 by 30 foot rectangle at 8 foot spacing is 22 posts and 22 sections, because neither side divides evenly: 50 / 8 rounds up to 7 sections and 30 / 8 rounds up to 4. The perimeter is 160 feet. Two rails make 44 pieces. A 4 foot gate and 6 inch pickets with no gap leave 156 feet of pickets, which is 312 boards. A gate wider than the fence is rejected.'
    ],
    formula: 'Sections on a side = the side length divided by spacing, rounded up when there is a remainder\nClosed rectangle: posts = sections on both lengths + sections on both widths\nStraight run: posts = sections + 1\nRails = sections × rails per section\nPickets = the smallest count whose widths and gaps cover (linear feet − gate width)\nLinear feet of a rectangle = 2 × (length + width)',
    formulaNotes: [
      'An exact division does not add an extra section. A 32 by 16 foot rectangle at 8 foot spacing is 4 sections on each long side and 2 on each short side, 12 posts, and 96 feet. The short-side remainder rule is what turned 40 by 20 into 16 posts rather than 15.',
      'Post thickness is not removed from the picket run. Corners are not given a second post. Concrete volume for the holes is not estimated. The concrete calculator remains a slab tool, in cubic yards and bags, and it does not know how many holes a fence has.'
    ],
    examplesHeading: 'Worked fence examples',
    examples: [
      {
        title: 'A 40 by 20 foot rectangle at 8 foot spacing',
        paragraphs: [
          'The calculator shows 16 posts. Linear feet are 120. Sections are 16. Two rails per section is 32 rail pieces. Pickets at 5.5 inches with a 0.5 inch gap and no gate are 241. The note says a side does not divide evenly, so the last section on the 20 foot sides is shorter than 8 feet.',
          'Dividing 120 by 8 and ordering 15 posts would leave a short side short of a post. The per-side count is the one this page uses. The picket formula does not subtract the width of those 16 posts.'
        ]
      },
      {
        title: 'A straight 40 foot rail fence',
        paragraphs: [
          'Choose a straight run, length 40, spacing 8, three rails, and a picket width of 0. Width is ignored. The calculator shows 6 posts, 5 sections, and 15 rail pieces. Pickets are 0. Every section is a full 8 feet because 40 divides by 8.',
          'A 4 foot gate on that run does not change the post headline. It would reduce a picket run if the picket width were above zero. With picket width 0 the gate does not create boards. Order the gate posts yourself if the spacing does not already put a post on each side of the opening.'
        ]
      },
      {
        title: 'A 50 by 30 foot yard with a 4 foot gate',
        paragraphs: [
          'Closed rectangle, 50 by 30, spacing 8, two rails, 6 inch pickets, no gap, gate 4. The headline is 22 posts. Linear feet are 160. Rail pieces are 44. Pickets are 312 on 156 feet after the gate.',
          'Both sides have a short last section. Fifty feet is six full spaces plus 2 feet, counted as 7 sections. Thirty feet is three full spaces plus 6 feet, counted as 4 sections. The concrete page will not turn those 22 holes into bags. A 10 by 10 slab at 4 inches is that page’s example, and it is not this fence.'
        ]
      }
    ],
    table: {
      heading: 'Fence counts from this calculator',
      caption: 'Posts are the headline. Rails use the rail count in the row. Pickets use the picket width and gap after the gate is removed. A picket width of 0 means a rail fence.',
      headers: ['Layout', 'Size', 'Spacing', 'Posts', 'Rails', 'Pickets'],
      rows: [
        ['Rectangle', '40 × 20 ft', '8 ft, 2 rails', '16', '32', '241 at 5.5 in with a 0.5 in gap'],
        ['Straight run', '40 ft', '8 ft, 3 rails', '6', '15', '0, rail fence'],
        ['Rectangle', '50 × 30 ft, 4 ft gate', '8 ft, 2 rails', '22', '44', '312 at 6 in, no gap']
      ]
    },
    limitsHeading: 'What this fence count leaves out',
    limits: [
      'Gates need hinges, a latch, and often their own posts. This page removes the gate width from the pickets and does not add hardware or extra posts. A double gate is just a wider number in the gate field.',
      'Slopes, steps, and curves are not modeled. A side that changes grade may need more posts than the flat division. The spacing is a maximum you type, not a code minimum. Local rules for pool fences and height are not checked.',
      'Rail length is not a shopping total in linear feet of lumber. The piece count treats every section as one piece per rail, including the short end section. You may cut a longer board or buy a shorter one. The page does not choose.',
      'Concrete for post holes, gravel under the fence, and paint are separate jobs. The concrete, gravel, and paint calculators do not read this post count.'
    ],
    disclaimer: 'This fence count is a material estimate for a flat rectangle or a straight run. It is not a building code check, a structural design, or a quote.',
    faqs: [
      {
        q: 'How many posts do I need for a 40 by 20 foot fence at 8 foot spacing?',
        a: '16 posts and 16 sections. The 40 foot sides are 5 sections each. The 20 foot sides are 3 sections each because 20 does not divide by 8. Two rails per section is 32 pieces. At 5.5 inch pickets with a half-inch gap and no gate, the picket count is 241.'
      },
      {
        q: 'Why is the post count not the perimeter divided by the spacing?',
        a: 'A single division of the 120 foot perimeter by 8 is 15. The short sides still need a post where the remainder falls, so the per-side count is 16. Exact sides, such as a straight 40 foot run at 8 foot spacing, do divide cleanly: 5 sections and 6 posts, because a straight run includes both ends.'
      },
      {
        q: 'How are fence pickets counted?',
        a: 'The page finds the smallest number of boards whose widths plus the gaps between them cover the fence after the gate. A 6 inch picket with no gap on 156 feet is 312 boards. A picket width of 0 means no pickets. Post thickness is not removed.'
      },
      {
        q: 'Does the gate add posts?',
        a: 'No. The gate width is subtracted from the picket run only. If the opening needs posts the spacing would not have placed, add those yourself. A gate wider than the fence is rejected.'
      },
      {
        q: 'Does this fence calculator order concrete for the holes?',
        a: 'No. The concrete calculator estimates a slab in cubic yards and bags. A 10 by 10 foot slab at 4 inches is that page’s example. It does not know that this 40 by 20 foot fence uses 16 posts.'
      }
    ],
    relatedLinks: [
      { slug: 'concrete-slab-calculator', label: 'Concrete slab calculator', note: 'A 10 by 10 foot slab at 4 inches is a bag count for a pour. It does not turn these 16 fence posts into post-hole concrete.' },
      { slug: 'gravel-calculator', label: 'Gravel calculator', note: 'A 10 by 20 foot area at 3 inches is 2.625 short tons of dry gravel. That is not a fence-post count.' },
      { slug: 'square-footage-calculator', label: 'Square footage calculator', note: 'The area inside a 40 by 20 foot rectangle is 800 square feet. This fence page uses the perimeter and the sides, not that area.' }
    ]
  }
};
