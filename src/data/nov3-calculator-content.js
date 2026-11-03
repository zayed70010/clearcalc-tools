export const nov3CalculatorContent = {
  'celsius-to-fahrenheit-calculator': {
    title: 'Celsius to Fahrenheit Calculator | Exact °C to °F | ClearCalc',
    h1: 'Celsius to Fahrenheit Calculator',
    description: 'Convert Celsius to Fahrenheit or Fahrenheit to Celsius with °F = °C × 9/5 + 32. 180°C is 356°F. A chart that says 350°F is rounding the same temperature.',
    intro: [
      'This Celsius to Fahrenheit calculator converts a temperature either way with the exact scale definition. Enter 180 and leave the direction on Celsius to Fahrenheit. The headline is 356°F. Kelvin is 453.15 K. The same 180°C typed as Fahrenheit the other way, 356, comes back as 180°C. A printed oven chart that pairs 180°C with 350°F is six degrees low. The gap is the chart, not a second formula.',
      'The length converter on this site multiplies metres by a rounded foot factor. It does not touch temperature. The fuel economy converter divides by a gallon. Neither page can turn a weather forecast or an oven dial into the other scale. This one does only that. Water freezes at 0°C, which is 32°F, and boils at 100°C, which is 212°F. Those two points are what the 9/5 slope is fitted to.',
      'A body-temperature reading of 37°C is 98.6°F, and 98.6°F converts back to 37°C. A room at 20°C is 68°F. Minus 40 is the one temperature that has the same number on both scales: −40°C is −40°F, and Kelvin there is 233.15 K. The form rejects a temperature below absolute zero, −273.15°C or −459.67°F, because a lower number is not a temperature on this scale.'
    ],
    steps: [
      'Enter the temperature as a number. The sample, 180, is a common baking temperature in Celsius. Negative numbers are allowed. Absolute zero is the floor.',
      'Choose Celsius to Fahrenheit or Fahrenheit to Celsius. The sample runs from Celsius. Switching the direction does not change the number you already typed, so 180 Fahrenheit is a different question from 180 Celsius.',
      'Press Calculate. The headline is the converted temperature, with at most two decimal places. The line under it keeps four decimal places so a repeating value is visible before that rounding.',
      'Read the Kelvin line if you need the absolute scale. Kelvin is Celsius plus 273.15. This page does not convert Rankine, and it does not convert gas marks by themselves.'
    ],
    howHeading: 'How the Celsius and Fahrenheit scales meet',
    howItWorks: [
      'Fahrenheit places 180 degrees across the same interval in which Celsius places 100, the gap from freezing to boiling. The slope is 180/100 = 9/5 = 1.8. The zero points differ by 32 Fahrenheit degrees, because 0°C was defined as freezing and 0°F was not. So °F = °C × 9/5 + 32, and °C = (°F − 32) × 5/9. Multiplying by 1.8 is the same slope only when 1.8 is exact. A rounded 1.80 that was stored as something else is not this formula. The calculator uses 9/5.',
      'The sample 180 × 9/5 + 32 is 324 + 32 = 356, with nothing left over. 0 × 9/5 + 32 is 32. 100 × 9/5 + 32 is 212. 20 × 9/5 + 32 is 68. 37 × 9/5 + 32 is 66.6 + 32 = 98.6. −40 × 9/5 + 32 is −72 + 32 = −40. Each of those is exact, so the headline and the four-decimal line match. A kitchen chart that prints 350, 375, and 400 next to 180, 190, and 200 is stepping by 25°F while the exact results are 356, 374, and 392. The chart is a memory aid. The dial on a Celsius oven is still 180, not 176, if the recipe was written in Celsius.',
      'Going the other way, 72°F is a familiar thermostat setting. (72 − 32) × 5/9 = 40 × 5/9 = 200/9 = 22.2222…°C. The headline is 22.22°C. The detail line keeps 22.2222°C, and Kelvin is 295.37 K because 22.2222… + 273.15 rounds to 295.37 at two decimal places. Typing the headline 22.22 back in as Celsius does not return exactly 72. 22.22 × 9/5 + 32 is 71.996, which itself displays as 72.00 only after rounding. Use the four-decimal line, or the original Fahrenheit, when the tenth of a degree matters.',
      '140°C is 284°F, not the 275°F a chart often prints. 150°C is 302°F, against a chart’s 300. 160°C is 320°F, against a chart’s 325. 200°C is 392°F, against a chart’s 400. 220°C is 428°F, against a chart’s 425. The largest of those gaps is 9 degrees, on 160°C. None of them is an error in the 9/5 formula. A recipe that says 180°C / 350°F is offering two labels for one instruction, and the Celsius label is the one this calculator treats as exact when you type 180.'
    ],
    formula: '°F = °C × 9/5 + 32\n°C = (°F − 32) × 5/9\nK = °C + 273.15\nThe headline rounds to at most two decimal places. The detail line keeps four.\nTemperatures below −273.15°C are rejected.',
    formulaNotes: [
      '9/5 and 5/9 are exact rationals. A converter that multiplies by 1.8 is the same conversion when 1.8 is the terminating decimal of 9/5. It is not the same if the factor was rounded to 1.80 from a measurement. This page does not ask you for a factor. The length converter does, because feet and metres are a ratio you pick from a menu. Temperature has one definition.',
      'Display rounding is half up at the last kept digit, via the same number format as the other calculators. 22.2222…°C to two places is 22.22°C. 22.225°C would round to 22.23°C. Kelvin uses the same two-place display. A scientific value that needs more than four places should be computed from the formula, not read off the four-place line.'
    ],
    examplesHeading: 'Worked Celsius and Fahrenheit examples',
    examples: [
      {
        title: '180°C, the sample, and the chart that says 350°F',
        paragraphs: [
          'Temperature 180, direction Celsius to Fahrenheit. The calculator shows 356°F. The unrounded line is also 356°F. Kelvin is 453.15 K. The formula line cites °F = °C × 9/5 + 32.',
          'A chart that says 350°F for the same oven is 6°F lower. 350°F converted the other way is (350 − 32) × 5/9 = 318 × 5/9 = 176.6666…°C, which would display as 176.67°C. That is not 180. If the recipe was developed at 180°C, the chart’s 350°F is a rounded label, and this page will not silently apply it.'
        ]
      },
      {
        title: 'Freezing, boiling, body temperature, and −40',
        paragraphs: [
          '0°C is 32°F and 273.15 K. 100°C is 212°F and 373.15 K. 37°C is 98.6°F and 310.15 K. 20°C is 68°F and 293.15 K. −40°C is −40°F and 233.15 K. Each of those headlines is exact at two decimal places.',
          'Switch 98.6 to Fahrenheit to Celsius and the headline is 37°C. Switch 32 and the headline is 0°C. The two fixed points of the scale are a useful check that the direction field was the one you meant. Leaving 180 in the box and flipping the direction answers a different question: 180°F is 82.22°C, not a baking temperature in Celsius.'
        ]
      },
      {
        title: 'A 72°F room, and why 22.22°C is not the full result',
        paragraphs: [
          'Temperature 72, direction Fahrenheit to Celsius. The headline is 22.22°C. The detail line is 22.2222°C before the headline is rounded. Kelvin is 295.37 K. The full-precision pair reads 22.2222°C and 72°F.',
          'The repeating digit is 2, because 200/9 does not terminate. Two decimal places are enough for a thermostat. They are not enough to prove the reverse. The length converter has the same kind of display limit: 1 metre times 3.28084 is shown as 3.2808 feet. Here the hidden digits are a repeating 2, not a rounded conversion factor.'
        ]
      }
    ],
    table: {
      heading: 'Exact Fahrenheit beside a common oven chart',
      caption: 'The exact column is what this calculator displays for that Celsius temperature. The chart column is a widely reprinted rounding, not a second definition of the scale. Gas marks are not calculated.',
      headers: ['Celsius', 'Exact Fahrenheit', 'Kelvin', 'Common chart'],
      rows: [
        ['0°C', '32°F', '273.15 K', 'Freezing, not an oven setting'],
        ['140°C', '284°F', '413.15 K', 'Often printed as 275°F'],
        ['160°C', '320°F', '433.15 K', 'Often printed as 325°F'],
        ['180°C', '356°F', '453.15 K', 'Often printed as 350°F'],
        ['200°C', '392°F', '473.15 K', 'Often printed as 400°F'],
        ['−40°C', '−40°F', '233.15 K', 'Same number on both scales']
      ]
    },
    limitsHeading: 'What a two-scale conversion leaves out',
    limits: [
      'Gas marks are a UK oven convention, not a temperature unit with a formula as tight as 9/5. A chart that says gas mark 4 is 180°C is using the Celsius label. This page will turn that 180 into 356°F and will not print “gas mark 4” for you. Fan ovens, convection offsets, and a dial that runs hot are properties of the appliance. Subtracting 20°C for a fan oven is a cook’s rule of thumb, and it is not applied here.',
      'Weather “feels like” temperatures mix wind and humidity into the air temperature. A 20°C day is 68°F of air temperature whether or not a forecast adds a wind chill. This form converts the number you type. It does not know the wind.',
      'Rankine is Fahrenheit-sized degrees counted from absolute zero, and Réaumur is a historical scale. Neither is a field. Kelvin is reported because it is Celsius shifted by 273.15, which is one addition. A difference of temperatures, such as a rise of 10°C, is a rise of 18°F, because the +32 cancels when you subtract. This form converts levels, not gaps. Convert each end and subtract if you need the gap in the other unit.',
      'The length converter still cannot do this job, and this page cannot turn metres into feet. A recipe that mixes a 180°C oven with a pan measured in centimetres needs both tools. Fuel economy is a third unit system, gallons and litres, and a warm day does not change the 30 US mpg example on that page.'
    ],
    disclaimer: 'This temperature conversion is the defined relationship between the Celsius and Fahrenheit scales. It is not a medical reading, a weather forecast, or an oven calibration.',
    faqs: [
      {
        q: 'What is 180°C in Fahrenheit, exactly?',
        a: '356°F. The arithmetic is 180 × 9/5 + 32 = 356, and Kelvin is 453.15 K. A chart that says 350°F is rounding by 6 degrees. 350°F itself converts to 176.67°C, not 180°C.'
      },
      {
        q: 'Why do oven charts say 350°F when 180°C is 356°F?',
        a: 'The charts step in 25°F labels: 325, 350, 375, 400, 425. The exact conversions of 160, 180, 190, 200, and 220°C are 320, 356, 374, 392, and 428°F. The chart is easier to remember. This calculator follows 9/5 and will not substitute the label.'
      },
      {
        q: 'Which temperature is the same number in Celsius and Fahrenheit?',
        a: '−40. Minus 40°C is −40°F, and Kelvin is 233.15 K. Freezing is 0 and 32. Boiling is 100 and 212. Those pairs match only after the conversion. −40 is the one place the numbers already agree.'
      },
      {
        q: 'How do I convert 72°F back from the rounded Celsius headline?',
        a: '72°F is 22.2222°C before rounding, and the headline is 22.22°C. Typing 22.22 as Celsius produces 71.996°F, which displays as 72.00 only because of rounding. Keep the four-decimal line, or start again from 72, if you need the original.'
      },
      {
        q: 'Is 98.6°F exactly 37°C?',
        a: 'Yes. 37 × 9/5 + 32 = 98.6, and (98.6 − 32) × 5/9 = 37. Kelvin is 310.15 K. A thermometer that reads 98.4 or 98.7 is a different measurement, not a different formula. This page converts the number you type.'
      },
      {
        q: 'Can this Celsius calculator convert metres or miles per gallon?',
        a: 'No. Metres to feet, inches, yards, or kilometres stay on the length converter. US mpg, UK mpg, and litres per 100 km stay on the fuel economy converter. This page is only Celsius, Fahrenheit, and the Kelvin line that follows from Celsius.'
      }
    ],
    relatedLinks: [
      { slug: 'length-converter', label: 'Length converter from metres', note: 'Metres to feet, inches, yards, or kilometres. It does not convert a temperature, and its foot factor is a rounded 3.28084.' },
      { slug: 'fuel-economy-converter', label: 'Fuel economy converter', note: '30 US mpg is 7.84 L/100 km. A gallon is not a degree, and this temperature page does not use the mile of 1.609344 kilometres.' }
    ]
  },
  'sales-tax-calculator': {
    title: 'Sales Tax Calculator: Add or Remove Tax | ClearCalc',
    h1: 'Sales Tax Calculator',
    description: 'Add a sales tax rate to a price or remove it from a total. $100 at 8.25% becomes $108.25. Statewide rates are the 1 July 2026 figures, and a city rate can be typed instead.',
    intro: [
      'This sales tax calculator either adds a rate to a pre-tax price or pulls the tax back out of a total that already includes it. The sample is $100 before tax, with 8.25% typed in. The tax is $8.25 and the headline is $108.25 total. That 8.25% is a rate you chose, not a state lookup. It is a common combined city rate. The menu can replace it with a statewide rate as of 1 July 2026.',
      'The percentage calculator answers a different question. Part 8.25 and whole 100 is 8.25%, which matches this tax only because the tax on $100 came out in even cents. Part 8.25 and whole 108.25 is 7.62%. That second figure is the tax as a share of the tax-inclusive total, and it is not the rate. The discount calculator takes a percent off a price. The tip calculator adds a percent and splits the bill. Neither one looks up a state, and neither one removes tax from a total.',
      'Statewide rates here follow the Tax Foundation state-rate column as of 1 July 2026, with three rates kept at the statutory figure that column rounds: Minnesota 6.875% rather than 6.88%, Missouri 4.225% rather than 4.23%, and New Jersey 6.625% rather than 6.63%. California’s 7.25% includes the 1.25% mandatory statewide local add-on. Utah’s 6.10% includes its 1.25% statewide local add-on. Virginia’s 5.30% includes its 1% statewide local add-on. City and county tax on top of those rates is not in the menu. Type the combined rate when you have it.'
    ],
    steps: [
      'Enter the amount in US dollars. The sample, 100, is a price before tax. If you already have a receipt total, switch the amount to “Total that already includes tax” and type that total instead.',
      'Leave the statewide menu on “Use the percent I type” and enter the rate, or pick a state and ignore the typed percent. The sample rate is 8.25. For New Jersey’s statewide rate, pick New Jersey and the 6.625% figure is used even if 8.25 is still sitting in the percent box.',
      'Press Calculate. Adding tax, the headline is the total. Removing tax, the headline is the price before tax. The tax in dollars, the rate used, and the tax as a share of both the price and the total are listed underneath.',
      'Read the rate-source line before you trust the result. It says whether the typed percent or a statewide rate was used, and it says that a local add-on is not included unless you typed the combined rate yourself.'
    ],
    howHeading: 'How a sales tax rate becomes a cent total',
    howItWorks: [
      'On a pre-tax price the tax is the price times the rate divided by 100, rounded to the nearest cent, and the total is the price plus that tax. $100 × 8.25% is $8.25 exactly, so the total is $108.25. The tax is 8.25% of the price and 7.62% of the total, because $8.25 / $108.25 = 0.07621, which displays as 7.62%. Quoting 7.62% as “the sales tax” would understate the rate. The rate is what was applied to the price.',
      'Removing tax divides the total by 1 plus the rate and rounds to the nearest cent. $108.25 / 1.0825 is $100 exactly, so the headline is $100.00 before tax and the tax inside the total is $8.25. The forward and reverse sample meet. A $49.99 price at New Jersey’s 6.625% statewide rate is not that tidy. $49.99 × 0.06625 = $3.3118375, which rounds to $3.31. The total is $53.30. The tax is 6.62% of $49.99 and 6.21% of $53.30. The rate was 6.625%. Cent rounding is why the share of the price displays as 6.62% rather than 6.625%.',
      'Picking a state ignores the typed percent. $100 with Texas selected is $6.25 of tax and a $106.25 total, even if the percent box still says 8.25. The detail line says the typed percent was not used. California on $100 is $7.25 of tax and $107.25, and the note adds that 7.25% already contains the 1.25% statewide local piece. Oregon on $100 is $0.00 of tax and a $100.00 total, because Oregon has no general statewide sales tax. Alaska’s menu rate is also 0%, and the note says local borough and city taxes can still apply. Delaware, Montana, and New Hampshire are the other zeros.',
      'Minnesota’s 6.875% on $100 is $6.875, and the nearest cent is $6.88, so the total is $106.88. New Jersey’s 6.625% on $100 is $6.625, and the nearest cent is $6.63, so the total is $106.63. Missouri’s 4.225% on $100 is $4.225, which rounds to $4.23 and a $104.23 total. Those three are the rates a rounded table would smear. A city rate still has to be typed. Texas’s 6.25% state rate plus up to 2% local is not the same as selecting Texas.'
    ],
    formula: 'Tax on a pre-tax price = round(price × rate ÷ 100) to the nearest cent\nTotal = price + tax\nPrice inside a total = round(total ÷ (1 + rate ÷ 100)) to the nearest cent\nTax inside a total = total − that price\nA statewide menu entry replaces the typed rate.\nThe typed rate is allowed from 0% through 30%.',
    formulaNotes: [
      'Rounding is to the nearest cent, with a half cent rounded away from zero for a positive amount. $6.875 becomes $6.88. $6.625 becomes $6.63. $3.3118375 becomes $3.31. The share-of-price line then divides those rounded cents by the price, so it can disagree with the rate in the third decimal.',
      'The reverse of a total this page just built returns the price it started from, for the rates checked through ordinary retail amounts. $108.25 at 8.25% returns $100.00. The percentage page can then tell you that $8.25 is 8.25% of $100 and 7.62% of $108.25. It cannot add the tax. This page cannot answer “what percent is 25 of 200.”'
    ],
    examplesHeading: 'Worked sales tax examples',
    examples: [
      {
        title: '$100 at a typed 8.25%',
        paragraphs: [
          'Amount 100, price before tax, statewide menu left on the typed percent, rate 8.25. The calculator shows $108.25 total, sales tax of $8.25, and a rate of 8.25%. The tax is 8.25% of the price and 7.62% of the total.',
          'Switch the amount to a total that already includes tax and type 108.25 at the same 8.25%. The headline is $100.00 before tax, and the tax inside the total is $8.25. The percentage calculator, given part 8.25 and whole 108.25, shows 7.62%, which is the share-of-total line and not the rate you typed.'
        ]
      },
      {
        title: 'New Jersey’s 6.625% on $49.99, and the same rate on $100',
        paragraphs: [
          'Amount 49.99, price before tax, preset New Jersey, and any number in the percent box. The calculator shows $53.30 total and sales tax of $3.31. The rate used is 6.625%. The tax is 6.62% of the $49.99 price because $3.31 / $49.99 displays as 6.62%, and it is 6.21% of the $53.30 total. The source line says the typed percent was not used, and that some Urban Enterprise Zone areas collect less than 6.625%.',
          'On $100 the same statewide rate shows $6.63 of tax and a $106.63 total. The unrounded tax is $6.625. One cent of that gap is rounding, not a local add-on. A local add-on is still missing unless the combined rate is typed with the menu set back to the percent you type.'
        ]
      },
      {
        title: 'Texas, California, and a state with no statewide tax',
        paragraphs: [
          'Texas on $100 shows $6.25 of tax and a $106.25 total. The tax is 5.88% of that total. California on $100 shows $7.25 of tax and a $107.25 total, and the note says the 7.25% includes the 1.25% mandatory statewide local add-on. District taxes can still be higher. Selecting California does not type 8.25 for you.',
          'Oregon on $100 shows $0.00 of tax and a $100.00 total. Delaware, Montana, and New Hampshire do the same. Alaska’s statewide rate is also 0%, with a different note: local sales taxes still exist in many boroughs and cities. A zero from the menu is the state row. It is not a promise that the shop charged nothing.'
        ]
      }
    ],
    table: {
      heading: 'Tax on $100 at selected 1 July 2026 rates',
      caption: 'Each row is what this calculator displays for a $100 price before tax. The first row uses a typed rate. The others use the statewide menu, which ignores the typed percent. Local tax beyond the statewide figure is not included. California includes its mandatory 1.25% statewide local add-on.',
      headers: ['Rate source', 'Rate', 'Tax', 'Total', 'Tax as a share of the total'],
      rows: [
        ['Typed percent', '8.25%', '$8.25', '$108.25', '7.62%'],
        ['California', '7.25%', '$7.25', '$107.25', '6.76%'],
        ['Texas', '6.25%', '$6.25', '$106.25', '5.88%'],
        ['New Jersey', '6.625%', '$6.63', '$106.63', '6.22%'],
        ['Oregon', '0%', '$0.00', '$100.00', '0.00%']
      ]
    },
    limitsHeading: 'What a single sales tax rate leaves out',
    limits: [
      'Groceries, clothing, prescription drugs, and prepared food are exempt or taxed at a different rate in many states. A basket with both taxable and exempt goods is not one rate on the whole receipt. Split the receipt, or the headline taxes the exempt part. A use tax on something bought out of state is the same arithmetic only when the rate you type is the rate your state actually wants.',
      'The menu is the statewide rate, not the rate at a particular address. Louisiana’s statewide 5% plus a local rate near 5% is a different bill from selecting Louisiana. New Jersey’s average local adjustment in the Tax Foundation table is slightly negative because some areas collect less than 6.625%, not because the state rate is 6.63%. Type 3.3125 only if that is the rate your location actually charges. This form will apply whatever allowed percent you type.',
      'The New Jersey paycheck calculator estimates wage tax, Social Security, and Medicare. It does not add 6.625% to a purchase, and this page does not withhold New Jersey gross income tax from a salary. A $65,000 New Jersey wage and a $49.99 purchase are different taxes. The discount page reduces a price before any tax. Apply the discount first, then run the sale price through this form if the tax is charged on the discounted amount.',
      'A tip is not sales tax. The tip calculator will add 18% to whatever bill you type and split it. If the bill already includes sales tax, tipping on that total is your choice of base, and this page is how you would have built the tax. Currency display is US dollars. The percent math is the same in another currency, and the symbols will still say $.'
    ],
    disclaimer: 'This sales tax figure is a rate applied to one amount. It is not a register total from a particular shop, and a statewide rate is not the combined rate on your street.',
    faqs: [
      {
        q: 'How much is 8.25% sales tax on $100?',
        a: '$8.25 of tax and a $108.25 total. The tax is 8.25% of the price and 7.62% of the total. Removing tax from $108.25 at the same rate returns $100.00. The 7.62% figure is not a rate you should type back in.'
      },
      {
        q: 'Why is New Jersey’s statewide sales tax 6.625% and not 6.63%?',
        a: 'The rate is 6.625%. A table that prints one fewer decimal shows 6.63%. On $100 the unrounded tax is $6.625 and this calculator charges $6.63, for a $106.63 total. On $49.99 the tax is $3.31 and the total is $53.30. Some Urban Enterprise Zone areas collect less than the statewide rate.'
      },
      {
        q: 'Does this sales tax calculator include city and county rates?',
        a: 'Only if you type the combined rate and leave the menu on the percent you type. Selecting Texas uses 6.25% and says the typed percent was ignored. Local Texas rates can add as much as about two points on top of that. California’s 7.25% already includes a 1.25% statewide local add-on, and district taxes can still be higher.'
      },
      {
        q: 'How do I remove sales tax from a price that already includes it?',
        a: 'Set the amount to “Total that already includes tax,” enter the total, and set the rate. $108.25 at 8.25% returns $100.00 before tax, with $8.25 of tax inside the total. The price is the total divided by 1.0825, rounded to the cent.'
      },
      {
        q: 'Which states have no statewide sales tax in this 2026 list?',
        a: 'Delaware, Montana, New Hampshire, and Oregon show $0.00 of tax on $100. Alaska’s statewide rate is also 0%, and local sales taxes still apply in many boroughs and cities. A zero from the menu is the state row, not a receipt.'
      },
      {
        q: 'Why is California’s state rate 7.25% rather than 6%?',
        a: 'The Tax Foundation state column counts California’s mandatory 1.25% statewide local add-on inside the 7.25%. On $100 the tax is $7.25 and the total is $107.25. District taxes are extra and are not added unless you type the combined rate yourself.'
      }
    ],
    relatedLinks: [
      { slug: 'percentage-calculator', label: 'Percentage calculator', note: '$8.25 is 8.25% of $100 and 7.62% of $108.25. That page does not add the tax or look up a state.' },
      { slug: 'discount-calculator', label: 'Discount calculator', note: 'Takes a percent off a price. Run the sale price through this sales tax page if tax is charged on the discounted amount.' },
      { slug: 'tip-calculator', label: 'Tip calculator', note: 'Adds a tip percent to a bill and splits it. A tip is not sales tax, and that page does not remove tax from a total.' },
      { slug: 'new-jersey-paycheck-calculator', label: 'New Jersey paycheck calculator for 2026', note: 'Wage tax from 1.4% to 10.75%. It is not the 6.625% sales tax on a purchase, and a $65,000 wage is not a $49.99 receipt.' }
    ]
  },
  'new-jersey-paycheck-calculator': {
    title: 'New Jersey Paycheck Calculator 2026 | ClearCalc',
    h1: 'New Jersey Paycheck Calculator for 2026',
    description: 'Estimate a 2026 New Jersey paycheck after federal tax and gross income tax from 1.4% to 10.75%. At $65,000 single, New Jersey tax is $2,043.50 and the two-week take-home is $2,014.00. A 401(k) does not reduce the state tax.',
    intro: [
      'This New Jersey paycheck calculator estimates federal income tax, Social Security, Medicare, and New Jersey gross income tax on a 2026 wage. New Jersey’s rates are the Division of Taxation schedule still labeled “2020 and After,” and they are the rates in the 2026 NJ-1040-ES tables. Single filers use Table A: 1.4% to $20,000, 1.75% to $35,000, 3.5% to $40,000, 5.525% to $75,000, 6.37% to $500,000, 8.97% to $1,000,000, and 10.75% above that. Joint filers use Table B, which inserts a 2.45% band and stretches the middle bands. The brackets are not indexed.',
      'The sample is $65,000, single, paid every two weeks, with one $1,000 personal exemption and no 401(k). New Jersey taxable income is $64,000. New Jersey tax is $2,043.50. Federal tax is $5,620.00, Social Security is $4,030.00, and Medicare is $942.50. Annual take-home is $52,364.00, and the headline is $2,014.00 every two weeks. Virginia on the same wage, with one $930 exemption, charges $2,923.40 of state tax and pays $51,484.10 for the year, which is $1,980.16 every two weeks. The $879.90 annual gap is the state tax. New Jersey has no standard deduction. Virginia’s $8,750 standard deduction is why its taxable income is $55,320 rather than something near $64,000, and its 5.75% top rate still produces more tax on this wage.',
      'A traditional 401(k) does not come out of New Jersey wages. The same $65,000 with a $6,500 deferral still has New Jersey tax of $2,043.50. Federal tax falls from $5,620.00 to $4,840.00, the deferral itself leaves the cheque, and the two-week headline falls to $1,794.00. Virginia, on that same deferral, cuts state tax from $2,923.40 to $2,549.65. Copying a Virginia result into a New Jersey budget double-counts a deduction New Jersey does not allow. Roth contributions should not be typed in the deferral box, because they do not reduce federal taxable income either.'
    ],
    steps: [
      'Enter annual gross wages in US dollars. The sample, 65000, means $65,000 for the year. Other income is not added, so the filing threshold and the brackets see only this wage.',
      'Choose single or married filing jointly, and the pay frequency. The sample is single and every two weeks. A joint return uses Table B. Type 2 personal exemptions if both spouses are $1,000 exemptions. The form does not add the second exemption when you change the status.',
      'Enter a traditional 401(k) deferral if you want it removed from federal taxable income. It is not removed from New Jersey taxable income. The 2026 elective deferral cap is $24,500, and a larger entry is cut back to that cap or to wages, whichever is smaller.',
      'Enter $1,000 personal exemptions, $1,500 dependent exemptions, and $6,000 veteran exemptions. The sample is 1, 0, and 0. Press Calculate. The headline is one pay period of annual take-home, rounded to the cent.'
    ],
    howHeading: 'How 2026 New Jersey take-home pay is estimated',
    howItWorks: [
      'Federal taxable income is the wage minus the 401(k), then minus the 2026 standard deduction of $16,100 single or $32,200 joint, from IRS Revenue Procedure 2025-32. On the $65,000 sample that is $48,900. The tax is 10% of the first $12,400 and 12% of the rest, which is $1,240 + $4,380 = $5,620. Social Security is 6.2% of wages up to the $184,500 wage base, here $4,030. Medicare is 1.45% of all wages, here $942.50. Additional Medicare Tax of 0.9% starts at $200,000 and is $0 on this wage. Those federal and FICA lines match the Virginia page at the same wage and the same zero deferral.',
      'New Jersey taxable income is the wage minus exemptions, and the 401(k) stays in. One $1,000 exemption leaves $64,000. Table A on $64,000 is 1.4% of $20,000 ($280), 1.75% of the next $15,000 ($262.50), 3.5% of the next $5,000 ($175), and 5.525% of the remaining $24,000 ($1,326). The sum is $2,043.50. The shortcut on the rate schedule, 5.525% of $64,000 minus $1,492.50, is the same $2,043.50. There is no $8,750 to subtract, and there is no local wage tax of the Pennsylvania kind.',
      'A joint return on one $65,000 wage with two $1,000 exemptions uses Table B on $63,000. That is 1.4% of $20,000 ($280), 1.75% of the next $30,000 ($525), and 2.45% of the remaining $13,000 ($318.50), which is $1,123.50. Federal tax falls to $3,440.00 because the joint standard deduction is $32,200 and the joint 10% bracket runs to $24,800. Annual take-home is $55,464.00, and the two-week headline is $2,133.23. Leaving the exemption count at 1 on a joint return would tax $64,000 under Table B instead. The status and the count are separate fields on purpose.',
      'One $1,500 dependent exemption on the single $65,000 wage cuts New Jersey taxable income from $64,000 to $62,500 and the tax from $2,043.50 to $1,960.63. The $82.87 difference is 5.525% of $1,500. Federal tax does not change, because a New Jersey dependent exemption is not the federal child tax credit. The extra $1,000 New Jersey allows for a dependent under 22 who is in college full time is not added. A $6,000 veteran exemption is a separate field and is not one of the $1,000 boxes. Wages of $10,000 or less for a single filer, and $20,000 or less for a joint return, are under the filing threshold, so New Jersey tax is $0.00 even though 1.4% of the wage after the exemption would not be zero. At $10,000 single the federal tax is also $0.00, Social Security is $620.00, Medicare is $145.00, and the two-week headline is $355.19.'
    ],
    formula: 'Federal taxable income = wages − 401(k) − 2026 standard deduction\nFederal tax uses the Rev. Proc. 2025-32 brackets\nSocial Security = 6.2% of wages up to $184,500\nMedicare = 1.45% of wages, plus 0.9% above $200,000\nNew Jersey taxable income = wages − $1,000 personal exemptions − $1,500 dependent exemptions − $6,000 veteran exemptions\nThe 401(k) is not subtracted for New Jersey\nIf wages are at or under $10,000 single or $20,000 joint, New Jersey tax is $0\nOtherwise New Jersey tax is Table A for single and Table B for joint\nTake-home = wages − federal tax − Social Security − Medicare − Additional Medicare − New Jersey tax − 401(k)',
    formulaNotes: [
      'The 5.525% band is stored as 5.525% rather than as a rounded 5.53% or 5.52%. On $64,000 that third decimal is the difference between the schedule’s $2,043.50 and a tax that would miss it. Joint Table B’s 2.45% band does not exist on Table A. A single filer never passes through 2.45%.',
      'Employee unemployment insurance, temporary disability, and family leave insurance are real New Jersey paycheck lines and they are not in this total. The rates and wage bases change, and an employer’s private plan can replace the state disability plan. Property-tax deduction or credit on the NJ-1040 is not applied. The sales tax page’s 6.625% is a tax on a purchase, not a wage withholding.'
    ],
    examplesHeading: 'Worked New Jersey paycheck examples',
    examples: [
      {
        title: '$65,000 single, one exemption, no 401(k)',
        paragraphs: [
          'Salary 65000, single, 26 periods, deferral 0, exemptions 1, dependents 0, veterans 0. The calculator shows $2,014.00 every two weeks. New Jersey tax is $2,043.50 on $64,000 of taxable income. Federal tax is $5,620.00, Social Security is $4,030.00, Medicare is $942.50, and annual take-home is $52,364.00.',
          'Virginia on that wage shows $2,923.40 of state tax and $1,980.16 every two weeks. The annual take-home there is $51,484.10. The $879.90 difference is $2,923.40 minus $2,043.50. Two times 26 of the $33.84 two-week gap is $879.84, and the remaining six cents is the rounding of each state’s pay-period headline. Compare the annual lines when the cent matters.'
        ]
      },
      {
        title: 'The same wage with a $6,500 traditional 401(k)',
        paragraphs: [
          'Change only the deferral to 6500. New Jersey tax stays $2,043.50, and New Jersey taxable income stays $64,000. Federal tax falls to $4,840.00. The deferral of $6,500 comes out of the cheque. Annual take-home is $46,644.00, and the headline is $1,794.00 every two weeks.',
          'The federal saving is $780.00, which is $5,620.00 minus $4,840.00. New Jersey saves nothing, because the contribution is still New Jersey wages. Virginia would have saved $373.75 of state tax on that same $6,500. A deferral above $24,500 is reduced before either tax is computed. A Roth amount left in the box would understate federal tax and would still not change New Jersey tax.'
        ]
      },
      {
        title: 'A joint return, a higher wage, and the $10,000 threshold',
        paragraphs: [
          'Married filing jointly, exemptions 2, the same $65,000 and no deferral, shows New Jersey tax of $1,123.50, federal tax of $3,440.00, and $2,133.23 every two weeks. Annual take-home is $55,464.00. Table B’s 2.45% band is doing the work that Table A’s 5.525% band did for the single filer. This is one wage on a joint return. A second salary would need its own run, and both runs must not each claim the full joint standard deduction.',
          'At $90,000 single with one exemption, New Jersey taxable income is $89,000 and the tax is $3,543.05, in the 6.37% band. Federal tax is $10,970.00, Social Security is $5,580.00, Medicare is $1,305.00, and the two-week headline is $2,638.54. At $10,000 single, New Jersey tax is $0.00 because of the filing threshold, not because the $1,000 exemption wiped the wage out. Federal tax is $0.00, FICA is $765.00, and the two-week headline is $355.19.'
        ]
      }
    ],
    table: {
      heading: '2026 New Jersey paycheck examples',
      caption: 'Each row is what this calculator displays. Federal tax uses the 2026 standard deduction and brackets. New Jersey tax uses Table A or Table B after the exemptions shown, and it does not subtract a 401(k). Employee disability and family leave are not included.',
      headers: ['Wage', 'New Jersey tax', 'Federal tax', 'Annual take-home', 'Every two weeks'],
      rows: [
        ['$65,000 single, 1 exemption', '$2,043.50', '$5,620.00', '$52,364.00', '$2,014.00'],
        ['$65,000 single, $6,500 401(k)', '$2,043.50', '$4,840.00', '$46,644.00', '$1,794.00'],
        ['$65,000 joint, 2 exemptions', '$1,123.50', '$3,440.00', '$55,464.00', '$2,133.23'],
        ['$90,000 single, 1 exemption', '$3,543.05', '$10,970.00', '$68,601.95', '$2,638.54'],
        ['$10,000 single, 1 exemption', '$0.00', '$0.00', '$9,235.00', '$355.19']
      ]
    },
    limitsHeading: 'What this New Jersey estimate leaves out',
    limits: [
      'Unemployment, temporary disability, family leave insurance, and a private plan that replaces the state plan are withheld on real paycheques and are absent here. So are wage garnishment, union dues, health premiums, and a Roth contribution. The 401(k) box is a traditional deferral capped at $24,500 for 2026. Catch-up contributions for older workers are not added on top of that cap.',
      'The filing threshold looks at New Jersey gross income, and this form treats the wage as that entire income. Interest, a second job, or a spouse’s wages can push a household over $10,000 or $20,000 and into the rate table. Exemptions cannot be used twice. The college-student addition of $1,000, on top of the $1,500 dependent exemption, is not a field. Property tax paid on a home can become a deduction or a credit on the resident return, and it is not estimated.',
      'New York City resident tax, Pennsylvania local earned income tax, and Ohio city tax do not apply because the wage is assigned to New Jersey. Withholding for a nonresident who works in New York or Pennsylvania can look nothing like this annual Table A result. The page is an annual estimate divided by the number of pays, not a payroll system’s year-to-date method.',
      'Sales tax is a separate New Jersey tax. The sales tax page charges 6.625% on a purchase, $3.31 on $49.99, and does not withhold it from wages. Virginia’s $2,923.40 on this sample wage is a different state’s income tax, useful as a comparison and useless as a New Jersey withholding. Texas has no wage income tax, so its state line is $0 on the same federal and FICA amounts.'
    ],
    disclaimer: 'This New Jersey paycheck estimate is general information for 2026, not a withholding calculation from an employer or an assessment from the Division of Taxation.',
    faqs: [
      {
        q: 'How much New Jersey tax comes out of a $65,000 single wage in 2026?',
        a: 'With one $1,000 exemption and no 401(k), New Jersey taxable income is $64,000 and the tax is $2,043.50. Federal tax is $5,620.00, Social Security is $4,030.00, and Medicare is $942.50. Annual take-home is $52,364.00, or $2,014.00 every two weeks. Virginia on that wage is $2,923.40 of state tax and $1,980.16 every two weeks.'
      },
      {
        q: 'Does a traditional 401(k) reduce New Jersey gross income tax?',
        a: 'No. A $6,500 deferral on $65,000 single leaves New Jersey tax at $2,043.50 and New Jersey taxable income at $64,000. Federal tax falls from $5,620.00 to $4,840.00. The two-week headline falls to $1,794.00 because the contribution and the federal tax both change, not because New Jersey gave a deduction. Virginia would cut state tax by $373.75 on that same deferral.'
      },
      {
        q: 'Why is New Jersey tax zero at $10,000 even though the rate starts at 1.4%?',
        a: 'Single filers with New Jersey gross income of $10,000 or less, and joint filers at $20,000 or less, pay no gross income tax. At $10,000 single the tax is $0.00, federal tax is $0.00, and FICA is $765.00. The $1,000 exemption is not what zeroed the state tax. A wage above the threshold is taxed on the amount after exemptions.'
      },
      {
        q: 'What are the New Jersey exemption amounts on this page?',
        a: 'A personal exemption is $1,000, for the taxpayer, a spouse on a joint return, an age-65 exemption, or a blind or disabled exemption. A dependent is $1,500. A veteran exemption is $6,000. The sample uses one personal exemption. The extra $1,000 for a dependent under 22 in college full time is not added automatically.'
      },
      {
        q: 'How is a joint New Jersey return different from a single one at $65,000?',
        a: 'Table B replaces Table A, and two $1,000 exemptions have to be typed. On one $65,000 wage that produces New Jersey tax of $1,123.50, federal tax of $3,440.00, and $2,133.23 every two weeks. The single result is $2,043.50 and $2,014.00. Table B includes a 2.45% band that Table A does not have. A second wage should not claim the joint deduction again.'
      },
      {
        q: 'Does this New Jersey paycheck include disability and family leave insurance?',
        a: 'No. Temporary disability, family leave insurance, unemployment insurance, and a private plan in place of the state plan are not subtracted. Neither is the 6.625% sales tax, which belongs on a purchase. The $2,014.00 headline is federal income tax, Social Security, Medicare, New Jersey gross income tax, and any traditional 401(k) you entered.'
      }
    ],
    relatedLinks: [
      { slug: 'virginia-paycheck-calculator', label: 'Virginia paycheck calculator for 2026', note: 'At $65,000 single with one $930 exemption, Virginia tax is $2,923.40 and the two-week headline is $1,980.16. A 401(k) reduces Virginia tax. It does not reduce New Jersey tax.' },
      { slug: 'new-york-paycheck-calculator', label: 'New York paycheck calculator for 2026', note: 'New York State brackets, plus optional New York City resident tax. A wage taxed only in New Jersey should not use that city line.' },
      { slug: 'texas-paycheck-calculator', label: 'Texas paycheck calculator for 2026', note: 'The same federal and FICA structure with a state income tax of $0. Texas still has a 6.25% statewide sales tax, which is not a wage tax.' },
      { slug: 'sales-tax-calculator', label: 'Sales tax calculator', note: 'New Jersey’s statewide sales tax is 6.625%, or $3.31 on a $49.99 purchase. That is not withheld from the $2,014.00 paycheque.' },
      { slug: '401k-contribution-calculator', label: '2026 401(k) contribution calculator', note: 'Check a deferral against the $24,500 limit. On this page the deferral reduces federal income tax only.' }
    ]
  },
  'newfoundland-and-labrador-take-home-pay-calculator': {
    title: 'Newfoundland and Labrador Take-Home Pay Calculator 2026 | ClearCalc',
    h1: 'Newfoundland and Labrador Take-Home Pay Calculator for 2026',
    description: 'Estimate 2026 Newfoundland and Labrador take-home pay after federal tax, provincial tax from 8.7% to 21.8%, the $13,094 basic personal amount, CPP, and EI. At $70,000 the monthly figure is $4,308.58.',
    intro: [
      'This Newfoundland and Labrador take-home pay calculator estimates what an employee keeps from a 2026 salary after federal income tax, Newfoundland and Labrador income tax, the Canada Pension Plan, and Employment Insurance. The provincial brackets are 8.7% to $44,678, 14.5% to $89,354, 15.8% to $159,528, 17.8% to $223,340, 19.8% to $285,319, 20.8% to $570,638, 21.3% to $1,141,275, and 21.8% above that. Those thresholds are the 2026 figures on the Canada.ca personal income tax page and on the provincial Department of Finance page. The indexation factor for the year is 1.1%.',
      'The basic personal amount for the 2026 return is $13,094, credited at 8.7% together with the base CPP contribution and EI. The sample is $70,000. Provincial tax is $5,938.98. Federal tax is $7,278.19. CPP including CPP2 is $3,956.75. EI is $1,123.07. Annual take-home is $51,703.01, and the monthly headline is $4,308.58. Prince Edward Island on that salary uses the same federal tax, CPP, and EI, then charges $6,258.09 of provincial tax and pays $51,383.90 for the year, a monthly headline of $4,281.99. The $319.11 gap is the provincial tax. Newfoundland and Labrador keeps the larger amount.',
      'July 2026 payroll tables use a prorated basic personal amount of $15,000 for the second half of the year. The province announced the move from the earlier indexed figure up to $13,094 on 29 April 2026, after employers had already withheld against a smaller amount. The $15,000 figure is a catch-up so that a full year of paycheques lands near $13,094. It is not the amount on the annual return, and this page does not use it. A July stub can withhold less tax than this estimate and still be consistent with the same $13,094 year.'
    ],
    steps: [
      'Enter annual gross salary in Canadian dollars. The sample, 70000, means $70,000 for the year. The result is an annual tax divided by 12, not a payroll table for one July cheque.',
      'Press Calculate. The headline is monthly take-home. Federal tax, Newfoundland and Labrador tax, CPP including CPP2, and EI are listed underneath, with an every-two-weeks line.',
      'Read the credit line. It is 8.7% of the $13,094 basic amount plus the base CPP contribution plus EI. On the sample that credit is $1,523.27. The enhanced CPP amounts are deducted in arriving at taxable income instead of being credited a second time.',
      'Use $13,094 for the year. Do not replace it with the $15,000 figure from the July withholding tables. The low-income tax reduction is not subtracted.'
    ],
    howHeading: 'How 2026 Newfoundland and Labrador take-home pay is estimated',
    howItWorks: [
      'Federal tax, CPP, and EI are the same engine as the Prince Edward Island page. The federal brackets for 2026 are 14% to $58,523, 20.5% to $117,045, 26% to $181,440, 29% to $258,482, and 33% above that. The basic personal amount is $16,452 at this salary, because $70,000 of taxable income is under the $181,440 point where that amount starts to fall toward $14,829. The Canada employment amount, base CPP, and EI are credited at 14%. On $70,000 the federal tax is $7,278.19, the same number the PEI page prints. If it were different, one of the two pages would be using the wrong federal year.',
      'CPP on $70,000 is $3,956.75 including the second additional contribution, and EI is $1,123.07. Those match PEI, Nova Scotia, and New Brunswick, and they do not match Quebec. Quebec uses QPP, QPIP, and a lower EI rate. The employee CPP basic exemption and the year’s maximums are the 2026 figures already used on those Atlantic pages. This page does not invent a Newfoundland pension plan.',
      'Provincial tax starts from the same taxable income, after the enhanced CPP deduction. The credit is 8.7% of $13,094 plus base CPP plus EI, which is $1,523.27 on the sample. Tax before that credit, minus $1,523.27, is $5,938.98. At a salary of zero the credit line is still $1,139.18, which is 8.7% of $13,094, and the tax is $0.00 because the brackets have nothing to tax. The credit is non-refundable. It cannot create a payment.',
      'At $30,000, provincial tax is $1,291.11, federal tax is $1,397.37, and the monthly headline is $2,103.81. At $45,000, provincial tax is $2,497.19 and the monthly headline is $2,996.82. At $150,000, provincial tax is $18,225.93, federal tax is $25,302.14, CPP is $4,646.45, EI stays $1,123.07 because the EI maximum was already reached at $70,000, and the monthly headline is $8,391.87. The low-income tax reduction is a separate provincial credit and it is not in any of those figures. A salary near the bottom of the table could be lower once that reduction is claimed. The $70,000 sample is not in that range.'
    ],
    formula: 'Taxable income = salary − enhanced CPP deductions used on the federal return\nFederal tax = 2026 federal brackets − 14% credits for the basic personal amount, Canada employment amount, base CPP, and EI\nNewfoundland and Labrador tax = 2026 provincial brackets − 8.7% of ($13,094 + base CPP + EI), not below zero\nCPP and EI use the 2026 employee maximums outside Quebec\nTake-home = salary − federal tax − provincial tax − CPP − EI\nThe monthly headline is take-home ÷ 12, rounded to the cent\nThe July withholding basic amount of $15,000 is not used\nThe low-income tax reduction is not applied',
    formulaNotes: [
      'The $13,094 amount is the annual figure published for the 2026 return after the 29 April 2026 increase. Indexation at 1.1% had produced a smaller amount before that announcement. Using the smaller amount would overstate provincial tax for the year. Using $15,000 would understate it, because $15,000 is only the second-half withholding patch.',
      'Credits use the lowest rate, 8.7%, which is the usual non-refundable-credit rate. The Canada employment amount is in the federal credit only. A spouse amount, an age amount, tuition, and medical expenses are not fields. One salary is the whole return.'
    ],
    examplesHeading: 'Worked Newfoundland and Labrador examples',
    examples: [
      {
        title: '$70,000, beside Prince Edward Island',
        paragraphs: [
          'Salary 70000. The calculator shows $4,308.58 a month. Provincial tax is $5,938.98, federal tax is $7,278.19, CPP including CPP2 is $3,956.75, and EI is $1,123.07. Annual take-home is $51,703.01. Every two weeks is $1,988.58. The provincial credit is $1,523.27, and the basic personal amount applied is $13,094.00.',
          'Prince Edward Island on the same salary shows the same federal tax, CPP, and EI, provincial tax of $6,258.09, and $4,281.99 a month. Annual take-home there is $51,383.90. The $319.11 difference is $6,258.09 minus $5,938.98. The monthly headlines differ by $26.59, and 12 × $26.59 is $319.08. The other three cents are the rounding of the two monthly headlines. Compare the annual lines.'
        ]
      },
      {
        title: '$30,000 and $45,000',
        paragraphs: [
          'At $30,000 the monthly headline is $2,103.81. Provincial tax is $1,291.11, federal tax is $1,397.37, CPP is $1,576.75, and EI is $489.00. Annual take-home is $25,245.77. The provincial credit is $1,295.84, just above the tax the brackets produced before the credit was large enough to matter this much.',
          'At $45,000 the monthly headline is $2,996.82. Provincial tax is $2,497.19, federal tax is $3,338.19, CPP is $2,469.25, and EI is $733.50. Annual take-home is $35,961.87. The first provincial bracket still covers $44,678, so almost all of this salary is inside 8.7% after the enhanced CPP deduction. The low-income tax reduction is still not applied. A household that qualifies for it would keep more than $2,996.82 a month.'
        ]
      },
      {
        title: '$150,000, where EI has already capped',
        paragraphs: [
          'At $150,000 the monthly headline is $8,391.87. Provincial tax is $18,225.93, federal tax is $25,302.14, CPP including CPP2 is $4,646.45, and EI is $1,123.07, the same EI dollar as at $70,000. Annual take-home is $100,702.41. Every two weeks is $3,873.17. The provincial credit is $1,543.08.',
          'The federal basic personal amount is still $16,452.00 at this salary, because the phase-down starts at $181,440. A salary above that point would show a smaller federal amount on the detail line, the way the Prince Edward Island page does at $250,000. This sample does not reach it. Quebec at $70,000 is a different payroll system, not a different point on these brackets.'
        ]
      }
    ],
    table: {
      heading: '2026 Newfoundland and Labrador take-home at four salaries',
      caption: 'Each row is what this calculator displays. Federal tax, CPP, and EI match the other non-Quebec pages at the same salary. The low-income tax reduction is not included. The basic personal amount is $13,094, not the July withholding figure of $15,000.',
      headers: ['Salary', 'Provincial tax', 'Federal tax', 'Annual take-home', 'Monthly'],
      rows: [
        ['$30,000', '$1,291.11', '$1,397.37', '$25,245.77', '$2,103.81'],
        ['$45,000', '$2,497.19', '$3,338.19', '$35,961.87', '$2,996.82'],
        ['$70,000', '$5,938.98', '$7,278.19', '$51,703.01', '$4,308.58'],
        ['$150,000', '$18,225.93', '$25,302.14', '$100,702.41', '$8,391.87']
      ]
    },
    limitsHeading: 'What this Newfoundland and Labrador estimate leaves out',
    limits: [
      'The low-income tax reduction is indexed and it is not computed. The $30,000 and $45,000 rows can therefore sit above the tax a return would show after that reduction. The $70,000 row is the planning figure for a salary that does not depend on it. Spouse, eligible dependant, age, disability, tuition, and medical credits are not fields. Adding them would lower provincial tax and, where the federal credit exists, federal tax.',
      'A July paycheque that uses the prorated $15,000 basic amount will not match $4,308.58 divided into the pay periods that have already passed. The withholding patch exists so the year can still end at $13,094. This page is the year. It is not the stub.',
      'Quebec does not use these CPP and EI figures. At $70,000 the Quebec monthly headline is $4,253.73, which is $54.85 below this one, and the reason is QPP, QPIP, the 1.30% EI rate, and the 16.5% federal abatement. Ontario adds a health premium. British Columbia uses its own brackets and a tax reduction. None of those belong on a Newfoundland and Labrador wage.',
      'HST on a purchase in the province is not withheld from salary. A mortgage payment in US dollars, and a sales tax on a US receipt, are different currencies. The $4,308.58 headline is Canadian dollars after the four deductions named above.'
    ],
    disclaimer: 'This Newfoundland and Labrador figure is a 2026 planning estimate, not a payroll deduction calculated by the Canada Revenue Agency and not a notice of assessment.',
    faqs: [
      {
        q: 'What is Newfoundland and Labrador take-home pay on $70,000 in 2026?',
        a: '$4,308.58 a month, or $51,703.01 for the year. Provincial tax is $5,938.98, federal tax is $7,278.19, CPP including CPP2 is $3,956.75, and EI is $1,123.07. Every two weeks is $1,988.58. Prince Edward Island on the same salary pays $4,281.99 a month because its provincial tax is $6,258.09.'
      },
      {
        q: 'Why is the Newfoundland basic personal amount $13,094 when July payroll tables say $15,000?',
        a: 'The annual amount for the 2026 return is $13,094, announced on 29 April 2026. Employers had withheld against a smaller amount for the first half of the year, so the July tables use a prorated $15,000 for the rest of the year as a catch-up. This page uses $13,094. A second-half stub can withhold less and still fit the same annual tax.'
      },
      {
        q: 'What are the 2026 Newfoundland and Labrador tax brackets?',
        a: '8.7% to $44,678, 14.5% to $89,354, 15.8% to $159,528, 17.8% to $223,340, 19.8% to $285,319, 20.8% to $570,638, 21.3% to $1,141,275, and 21.8% above that. The credit rate on the basic personal amount is the 8.7% bottom rate. The thresholds are indexed by 1.1% for 2026.'
      },
      {
        q: 'Is the Newfoundland low-income tax reduction already in the $30,000 result?',
        a: 'No. Provincial tax at $30,000 is $1,291.11 and the monthly headline is $2,103.81 before that reduction. The $70,000 sample is not in the range where the reduction would change the result. A household that can claim it should treat the lower-salary rows as high.'
      },
      {
        q: 'How does Newfoundland and Labrador compare with Prince Edward Island at $70,000?',
        a: 'Federal tax, CPP, and EI are the same. Provincial tax is $5,938.98 here and $6,258.09 on Prince Edward Island. Annual take-home is $51,703.01 here and $51,383.90 there. The $319.11 gap is the provincial tax. The monthly headlines, $4,308.58 and $4,281.99, differ by $26.59, and multiplying those headlines by 12 loses three cents to rounding.'
      },
      {
        q: 'Can this Newfoundland result be used for a Quebec or Ontario job?',
        a: 'No. Quebec at $70,000 uses QPP, QPIP, a 1.30% EI rate, and the 16.5% federal abatement, and its monthly headline is $4,253.73. Ontario adds its own tax and the Ontario Health Premium on top of the same CPP and EI. This page is Newfoundland and Labrador’s brackets and the $13,094 amount only.'
      }
    ],
    relatedLinks: [
      { slug: 'prince-edward-island-take-home-pay-calculator', label: 'Prince Edward Island take-home pay calculator for 2026', note: 'Same federal tax, CPP, and EI at $70,000. PEI tax is $6,258.09 rather than $5,938.98, and the monthly headline is $4,281.99.' },
      { slug: 'nova-scotia-take-home-pay-calculator', label: 'Nova Scotia take-home pay calculator for 2026', note: 'Same CPP and EI. Nova Scotia’s monthly headline at $70,000 is $4,208.02, below both this page and Prince Edward Island.' },
      { slug: 'new-brunswick-take-home-pay-calculator', label: 'New Brunswick take-home pay calculator for 2026', note: 'Same federal pieces. New Brunswick’s monthly headline at $70,000 is $4,336.82, which is above this $4,308.58.' },
      { slug: 'quebec-take-home-pay-calculator', label: 'Quebec take-home pay calculator for 2026', note: 'QPP, QPIP, the 1.30% EI rate, and the 16.5% abatement. At $70,000 the monthly headline is $4,253.73, and the payroll system is not the one used here.' }
    ]
  },
  'south-australia-stamp-duty-calculator': {
    title: 'South Australia Stamp Duty Calculator | ClearCalc',
    h1: 'South Australia Stamp Duty Calculator',
    description: 'Estimate South Australia transfer duty on the general scale, including $26,830 on a $600,000 home. An eligible first home buyer of a new home pays $0, with no price cap. Foreign purchasers add 7%.',
    intro: [
      'This South Australia stamp duty calculator applies the general conveyance scale under the Stamp Duties Act 1923, the scale RevenueSA publishes: 1% to $12,000, 2% to $30,000, 3% to $50,000, 3.5% to $100,000, 4% to $200,000, 4.25% to $250,000, 4.75% to $300,000, 5% to $500,000, and 5.5% on the slice above $500,000. The sample is a $600,000 dutiable value on the general scale, with no foreign surcharge. Transfer duty is $26,830.00. That is $21,330 on the first $500,000 plus 5.5% of the remaining $100,000, which is $5,500. It is not 5.5% of the whole price. Five and a half percent of $600,000 would be $33,000, and that figure is wrong.',
      'An eligible first home buyer of a new home, an off-the-plan apartment, or vacant land on which a home will be built pays no transfer duty, and there is no price cap on that exemption for contracts from 6 June 2024. The same $600,000 with that buyer selected is $0.00. A $1,500,000 new home for an eligible first buyer is also $0.00. The general scale on $1,500,000 is $76,330.00, so the exemption is the whole of that duty, not a discount off the top. An established home does not get the exemption. A first home buyer of an established $600,000 house pays the same $26,830.00 as any other buyer. That is the point on which South Australia differs from New South Wales, Victoria, Queensland, and Western Australia, where an established first home often still gets a concession.',
      'Section 72 adds a foreign ownership surcharge of 7% of the interest in residential land, on top of transfer duty, for instruments from 1 January 2018. On $600,000 the surcharge is $42,000.00 and the headline is $68,830.00. A foreign person is not given the new-home exemption on this page. Selecting both the exemption and the surcharge produces the general duty plus 7%, and the result says the exemption was not applied. Western Australia also uses a 7% foreign surcharge, but its transfer duty is a different scale. A $650,000 Western Australian first home, for an agreement on or after 7 May 2026, is $8,075.00. The South Australian general duty on $650,000 is $29,580.00, and an eligible South Australian first buyer of a new home at that price pays $0.00.'
    ],
    steps: [
      'Enter the dutiable value in Australian dollars. The sample, 600000, means $600,000. Duty is charged on the higher of the consideration and the unencumbered value. If GST is part of the transaction, include it in the value you type. This form does not add GST.',
      'Choose the general scale or an eligible first home buyer of a new home or vacant land. The general scale is also the right choice for a first home buyer of an established home. The form does not check citizenship, prior ownership, or the six-month residence test.',
      'Choose whether the 7% foreign ownership surcharge applies. A foreign person and the new-home exemption do not combine. The surcharge is 7% of the value, not 7% of the duty.',
      'Press Calculate. The headline is transfer duty plus any surcharge. The two pieces are listed separately so a $0 exemption is not confused with a missing surcharge.'
    ],
    howHeading: 'How South Australia transfer duty is calculated',
    howItWorks: [
      'Each band applies only to the slice inside it. Up to $12,000 the duty is 1%, so $12,000 is $120.00. The bands then meet at the boundaries the scale quotes: $30,000 produces $480, $50,000 produces $1,080, $100,000 produces $2,830, $200,000 produces $6,830, $250,000 produces $8,955, $300,000 produces $11,330, and $500,000 produces $21,330. The calculator’s $250,000 result is $8,955.00 and its $500,000 result is $21,330.00. Those are the hand-off points. A price of $450,000 is $11,330 plus 5% of $150,000, which is $18,830.00. A price of $600,000 is $21,330 plus 5.5% of $100,000, which is $26,830.00.',
      'The effective rate on $600,000 is $26,830 / $600,000, or 4.47% when the percentage calculator rounds it to two places. The marginal rate on the last dollar is 5.5%. Both numbers are true, and they answer different questions. A buyer who multiplies the whole price by 5.5% overstates the duty by $6,170 on this price. A buyer who multiplies by 4.47% and then rounds again will miss the official $26,830 by a few dollars. Use the band sum.',
      'At $650,000 the slice above $500,000 is $150,000 and 5.5% of it is $8,250, so duty is $29,580.00. At $730,000 the slice is $230,000 and 5.5% of it is $12,650, so duty is $33,980.00. Queensland’s established first-home concession at $730,000 is $6,555.00, and Western Australia’s general duty at that price is $28,710.50. The three numbers are three statutes. Moving the same contract price from Adelaide to Brisbane does not keep the duty. At $1,000,000 the South Australian general duty is $48,830.00, which is $21,330 plus 5.5% of $500,000.',
      'The new-home exemption is a switch to zero, not a narrower band. $600,000 and $1,500,000 both show $0.00 of transfer duty when the eligible first-buyer option is selected and the foreign surcharge is not. Established homes stay on the general scale at every price, including prices under $500,000 where another state might still be conceding duty. The foreign surcharge, when it applies, is 7% of the whole dutiable value. It does not replace the $26,830. On the sample it adds $42,000 and the headline becomes $68,830.00. Selecting the exemption at the same time does not reduce that headline, and the buyer line says why.'
    ],
    formula: 'General duty is the sum of the slices:\n1% to $12,000\n2% of the excess to $30,000\n3% of the excess to $50,000\n3.5% of the excess to $100,000\n4% of the excess to $200,000\n4.25% of the excess to $250,000\n4.75% of the excess to $300,000\n5% of the excess to $500,000\n5.5% of the excess above $500,000\nAn eligible first home buyer of a new home or vacant land pays $0 of transfer duty, unless a foreign person is selected\nForeign ownership surcharge = 7% of the dutiable value\nHeadline = transfer duty + surcharge',
    formulaNotes: [
      'The 5.5% rate never applies to the first $500,000. At the boundary, $500,000 is $21,330.00 and the next dollar starts the 5.5% slice. The bands are continuous, so a price that lands on a threshold matches the base amount of the next band. $250,000 is $8,955.00 from either description.',
      'Section 72’s 7% is on the value of the interest acquired, which this form treats as the whole dutiable value you type. A half share is not automatically half the headline, because aggregation and the value of the interest are assessment questions. The first-home exemption has eligibility tests this menu does not ask. Ticking it is a claim, not a ruling.'
    ],
    examplesHeading: 'Worked South Australia duty examples',
    examples: [
      {
        title: 'A $600,000 established home',
        paragraphs: [
          'Price 600000, general scale, not a foreign person. The calculator shows $26,830.00. Transfer duty is $26,830.00 and the surcharge is $0.00. The buyer line says an established home, including a first home buyer of an established home, uses this scale.',
          'The build is $21,330 on the first $500,000 and $5,500 on the next $100,000. The effective rate is 4.47% of the price. The marginal rate is 5.5%. Western Australia’s first-home figure of $8,075.00 is for a $650,000 home under that state’s post-7 May 2026 rate, not for this $600,000 Adelaide price.'
        ]
      },
      {
        title: 'The same price as a new home for an eligible first buyer',
        paragraphs: [
          'Switch the buyer to an eligible first home buyer of a new home or vacant land, and leave the surcharge off. The headline is $0.00. Transfer duty is $0.00. The note says there is no price cap, and that the form does not check the other tests.',
          'The same choice at $1,500,000 is still $0.00. The general scale on $1,500,000 is $76,330.00, so the exemption is worth the whole of that duty when the buyer qualifies. An established home at either price does not qualify. Selecting the general scale is how an established first home is calculated, and at $600,000 that returns $26,830.00.'
        ]
      },
      {
        title: 'A foreign purchaser, and a $650,000 comparison',
        paragraphs: [
          'Price 600000, general scale, foreign person. The headline is $68,830.00. Transfer duty is $26,830.00 and the surcharge is $42,000.00, which is 7% of $600,000. Selecting the new-home exemption as well does not change the headline. The buyer line says the exemption was not applied because a foreign person was selected.',
          'A $650,000 value on the general scale, with no surcharge, is $29,580.00. An eligible first buyer of a new home at $650,000 pays $0.00 in South Australia. A Western Australian first home buyer at $650,000, on an agreement dated on or after 7 May 2026, pays $8,075.00 of transfer duty under that state’s scale. Queensland’s established first-home concession at $730,000 is $6,555.00, while South Australia’s general duty at $730,000 is $33,980.00. The concession and the general scale are not interchangeable across a border.'
        ]
      }
    ],
    table: {
      heading: 'South Australia duty at prices this calculator uses',
      caption: 'Each row is what this calculator displays. The new-home rows are the eligible first-buyer exemption with no foreign surcharge. The foreign row adds 7% of the value to general duty. Local grants are not subtracted.',
      headers: ['Value and buyer', 'Transfer duty', 'Surcharge', 'Headline'],
      rows: [
        ['$600,000 general scale', '$26,830.00', '$0.00', '$26,830.00'],
        ['$600,000 new home, first buyer', '$0.00', '$0.00', '$0.00'],
        ['$600,000 foreign person', '$26,830.00', '$42,000.00', '$68,830.00'],
        ['$650,000 general scale', '$29,580.00', '$0.00', '$29,580.00'],
        ['$1,500,000 new home, first buyer', '$0.00', '$0.00', '$0.00'],
        ['$500,000 general scale', '$21,330.00', '$0.00', '$21,330.00']
      ]
    },
    limitsHeading: 'What this South Australia duty figure leaves out',
    limits: [
      'Eligibility for the new-home exemption is narrower than the menu label. Buyers generally have to be natural persons of at least 18, meet a citizenship or permanent-residence test, not have held a relevant interest in Australian residential property, and occupy the home for a continuous period. A spouse’s earlier ownership can matter. This form does not ask those questions. An established home is outside the exemption even when every other test would pass.',
      'The foreign ownership surcharge assumes the whole value is residential land acquired by a foreign person. A mixed-use property, a partial interest, or a person who ceases to be foreign within 12 months and can seek a refund under section 72 will not match a headline that charged the full 7%. The page does not refund. It also does not model landholder duty or aggregation of related transactions.',
      'The First Home Owner Grant is a separate payment and it is not subtracted from duty. A $0 duty result is not a grant. GST, if it belongs in the dutiable value, has to be in the number you type. Off-the-plan concessions that are not the full exemption, deceased estates, and transfers under a relationship breakdown are not menu items.',
      'Western Australia, Queensland, Victoria, and New South Wales publish their own scales and their own foreign surcharges, 7%, 8%, 8%, and 9% on those pages. England, Scotland, and Wales use pounds. A mortgage payment in US dollars does not include this duty. Take-home pay in Australian dollars is income tax and the Medicare levy, not a cost of the transfer.'
    ],
    disclaimer: 'This transfer-duty figure is general information for a South Australian conveyance, not an assessment from RevenueSA. The Commissioner assesses the duty.',
    faqs: [
      {
        q: 'How much is South Australia stamp duty on a $600,000 home?',
        a: '$26,830.00 on the general scale. That is $21,330 on the first $500,000 plus $5,500 on the rest. It is not 5.5% of $600,000. An eligible first home buyer of a new home at the same price pays $0.00. A foreign person pays $26,830.00 plus a $42,000.00 surcharge, $68,830.00 in total.'
      },
      {
        q: 'Do first home buyers pay stamp duty on an established home in South Australia?',
        a: 'Yes, the general scale. A first home buyer of an established $600,000 house pays $26,830.00. The exemption with no price cap is for a new home, an eligible off-the-plan purchase, or vacant land to build on, for an eligible buyer. Selecting the general scale is how this page calculates the established home.'
      },
      {
        q: 'How is the 7% South Australia foreign ownership surcharge added?',
        a: 'It is 7% of the dutiable value under section 72 of the Stamp Duties Act 1923, and it is added to transfer duty. On $600,000 it is $42,000.00, and the headline with general duty is $68,830.00. It does not replace the $26,830.00. The new-home exemption is not combined with the surcharge on this page.'
      },
      {
        q: 'Is South Australia duty on a $650,000 home the same as Western Australia’s $8,075?',
        a: 'No. South Australia’s general duty at $650,000 is $29,580.00. An eligible first buyer of a new home in South Australia pays $0.00 at that price. Western Australia’s $8,075.00 is the first home owner rate for a home under an agreement on or after 7 May 2026. Queensland’s established first-home figure at $730,000 is $6,555.00, while South Australia’s general duty there is $33,980.00.'
      },
      {
        q: 'What is the top South Australia transfer duty rate?',
        a: '5.5% of the value above $500,000. The first $500,000 is $21,330.00. At $600,000 the duty is $26,830.00. At $1,000,000 it is $48,830.00. At $1,500,000 it is $76,330.00. There is no separate premium-property schedule above that. The 5.5% marginal rate is not the effective rate on the whole price.'
      },
      {
        q: 'Does the South Australia new-home exemption have a price cap?',
        a: 'Not on this page, and not in the exemption for contracts from 6 June 2024. A $600,000 new home and a $1,500,000 new home both show $0.00 of transfer duty for an eligible first buyer who is not a foreign person. The general duty those prices would have paid is $26,830.00 and $76,330.00. Eligibility tests other than the price still apply, and this form does not check them.'
      }
    ],
    relatedLinks: [
      { slug: 'western-australia-stamp-duty-calculator', label: 'Western Australia stamp duty calculator', note: 'A $650,000 first home on or after 7 May 2026 is $8,075.00 there. South Australia’s general duty at that price is $29,580.00, and an eligible new-home first buyer pays $0.00.' },
      { slug: 'queensland-stamp-duty-calculator', label: 'Queensland stamp duty calculator', note: 'An established first home at $730,000 is $6,555.00 there. South Australia’s general duty at $730,000 is $33,980.00.' },
      { slug: 'nsw-stamp-duty-calculator', label: 'NSW stamp duty calculator', note: 'New South Wales transfer duty and a 9% foreign surcharge. A first home concession there can apply to an established home, which the South Australian exemption does not.' },
      { slug: 'australia-take-home-pay-calculator', label: 'Australia take-home pay calculator for 2026–27', note: 'Resident income tax and the Medicare levy on a salary. It is not the duty on a house in Adelaide.' }
    ]
  }
};
