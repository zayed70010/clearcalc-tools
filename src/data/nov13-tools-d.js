import { nov13Page as page } from './nov13-page.js';

export const nov13ToolsD = {
  'time-zone-converter': page({
    slug: 'time-zone-converter',
    title: 'Time Zone Converter for the US, UK, Canada, and Australia | ClearCalc',
    h1: 'Time Zone Converter',
    description: 'Time zone converter for a date and clock between US, UK, Canada, and Australia zones and UTC. 15:00 US Eastern on 15 July 2026 is 20:00 in the UK and 14:00 US Central. A spring-forward gap is rejected.',
    intro: [
      'This time zone converter takes a civil date and a clock in one named zone and shows that same instant in another. The zones are UTC, the United Kingdom, US Eastern, Central, Mountain, and Pacific, Toronto, Vancouver, Halifax, and Sydney, Melbourne, Brisbane, Perth, and Adelaide. Daylight saving is the IANA rule for the date you type, not a fixed offset. On 15 July 2026, 15:00 in US Eastern is 20:00 in the United Kingdom, 14:00 in US Central, and 05:00 the next calendar day in Sydney.',
      'The day-of-the-week calculator names the weekday of a date. It does not move a clock. The hours calculator adds a duration inside one unnamed clock. Neither page knows that the UK is on British Summer Time in July or that Brisbane does not observe daylight saving when Sydney does.',
      'A local time that falls in a spring-forward gap does not exist, and the page says so instead of shifting it. On 8 March 2026 the US Eastern clocks jump from 02:00 to 03:00, so 02:30 is rejected. A time that happens twice, when clocks fall back, uses the earlier one and says so. 01:30 on 1 November 2026 in US Eastern is the earlier of the two, 05:30 UTC.'
    ],
    steps: [
      'Enter the date and the hour and minute in 24-hour time. The sample is 15:00 on 15 July 2026.',
      'Choose the source zone and the destination zone. The sample is US Eastern to the United Kingdom.',
      'Press Calculate. The headline is the destination clock and its short zone name. The lines show both civil times, the UTC instant, and whether the source hour was ambiguous.',
      'If the headline date is a day earlier or later, that is the conversion, not a mistake in the input date. Sydney in July is 14 hours ahead of US Eastern daylight time.',
      'A rejected gap means the clock skipped that minute. Type a time that existed, or move the date.'
    ],
    howHeading: 'How a civil time is moved between zones',
    howItWorks: [
      'The page finds the UTC instant whose wall clock in the source zone matches the date and time you typed, using the IANA time-zone data in Node. It then formats that instant in the destination zone. 15:00 US Eastern on 15 July 2026 is 19:00 UTC. The UK is on British Summer Time, UTC+1, so the clock is 20:00. US Central daylight time is UTC−5, so the same instant is 14:00.',
      'The short name in the headline comes from the zone, so a July Eastern time is labelled EDT rather than EST. Brisbane in July is a standard offset with no daylight-saving shift. Adelaide uses a half-hour offset. The page does not ask you to type “+10” or “−4”. The city is the input, and the offset is a result.',
      'The fall-back hour is detected by asking whether the instant one hour earlier has the same civil time. If it does, that earlier instant is used and the note says the local time happens twice. The spring-forward check is the opposite: if no UTC instant formats back to the civil time you typed, the page stops.'
    ],
    formula: 'Find the UTC instant whose wall time in the source zone is the date and clock you typed\nFormat that instant in the destination zone\nA civil time with no matching instant is a daylight-saving gap and is rejected\nA civil time with two instants uses the earlier one\nOffsets come from IANA rules for that date, not from a fixed table',
    formulaNotes: [
      '15 July 2026 is inside Northern Hemisphere daylight saving and inside Australian standard time. The same clock in January would not produce these offsets. The date is part of the question.',
      'The hours calculator can add 14 hours to 15:00 and land on 05:00, but it will not tell you that the 05:00 is Sydney time on the next date. That is the difference between a duration and a zone.'
    ],
    examplesHeading: 'Worked time-zone examples',
    samples: [
      { title: '15:00 US Eastern to the United Kingdom on 15 July 2026', values: { date: '2026-07-15', hour: 15, minute: 0, from: 3, to: 2 }, blurb: 'The UK is on British Summer Time. The headline clock is 20:00. The UTC instant is 19:00.' },
      { title: 'The same instant in US Central', values: { date: '2026-07-15', hour: 15, minute: 0, from: 3, to: 4 }, blurb: 'Central daylight time is one hour behind Eastern. The clock is 14:00 on the same date.' },
      { title: '01:30 US Eastern on 1 November 2026', values: { date: '2026-11-01', hour: 1, minute: 30, from: 3, to: 1 }, blurb: 'US clocks fall back on 1 November 2026. 01:30 happens twice. The page uses the earlier instant and converts it to UTC.' }
    ],
    table: {
      heading: '15:00 US Eastern on 15 July 2026',
      caption: 'One instant, several zones. Sydney’s civil date is 16 July. Brisbane does not use daylight saving. Headlines are this converter.',
      headers: ['Destination', 'Civil time'],
      rows: [
        ['United Kingdom', '20:00 GMT+1'],
        ['US Central', '14:00 CDT'],
        ['US Pacific', '12:00 PDT'],
        ['Sydney', '05:00 GMT+10 on 16 July']
      ]
    },
    limitsHeading: 'What this zone conversion does not do',
    limits: [
      'The zone list is the US, UK, Canada, and Australia set on the form, plus UTC. It is not every IANA zone. A city that is missing is not guessed from a country.',
      'A spring-forward gap is rejected. The page will not silently move 02:30 to 03:30. On 8 March 2026, 02:30 US Eastern does not exist.',
      'The earlier of two fall-back times is a choice, and the note says so. If you meant the later one, add an hour in the hours calculator after you read the note, or start from UTC.',
      'Business hours, a flight duration, and the weekday of a different date are other pages. This page converts one instant. It does not add a flight time.'
    ],
    disclaimer: 'Zone offsets come from the IANA data used by this runtime for the date you type. The result is a clock conversion, not a travel itinerary.',
    faqs: [
      { q: 'What time is 15:00 US Eastern in the UK on 15 July 2026?', a: '20:00 British Summer Time. The UTC instant is 19:00. US Central at that instant is 14:00 CDT, and Sydney is 05:00 on 16 July.' },
      { q: 'Why is a time rejected in the time zone converter?', a: 'Because the clocks skipped it. On 8 March 2026, US Eastern jumps from 02:00 to 03:00, so 02:30 has no UTC instant. The page says the local time does not exist instead of inventing one.' },
      { q: 'What happens when the clocks fall back and the hour repeats?', a: 'The earlier of the two instants is used, and a line says the local time happens twice. 01:30 US Eastern on 1 November 2026 is shown as the earlier one, 05:30 UTC.' },
      { q: 'Does the time zone converter know daylight saving?', a: 'Yes, for the date you type, from the IANA rules. July and January are not the same offset. Brisbane stays on standard time when Sydney is on daylight saving. You do not type the offset yourself.' },
      { q: 'How is this different from the day-of-the-week calculator?', a: 'That page names the weekday of a date. It does not move a clock between New York and London. This page does the conversion and can land on a different civil date.' }
    ],
    relatedLinks: [
      { slug: 'day-of-the-week-calculator', label: 'Day of the week calculator', note: '1 January 2026 is a Thursday. It does not convert a clock between zones.' },
      { slug: 'hours-calculator', label: 'Hours calculator', note: 'Adds a duration to a clock with no zone. 22:30 plus 3 hours 45 minutes is 02:15 the next day.' },
      { slug: 'date-difference-calculator', label: 'Date difference calculator', note: 'Counts calendar days. A zone conversion can change the civil date without counting a trip.' }
    ]
  }),
  'speed-converter': page({
    slug: 'speed-converter',
    title: 'Speed Converter: mph, km/h, m/s, and Knots | ClearCalc',
    h1: 'Speed Converter',
    description: 'Speed converter for miles per hour, kilometres per hour, metres per second, and knots. 60 mph is 96.5606 km/h, 26.8224 m/s, and 52.1386 knots. The factors are definitions, not a live traffic feed.',
    intro: [
      'This speed converter changes one speed among four units. A statute mile is 1,609.344 metres, so 1 mph is 0.44704 metres per second. A kilometre per hour is 1/3.6 metres per second. An international knot is 1,852 metres per hour. 60 mph is 96.5606 km/h, 26.8224 m/s, and 52.1386 knots.',
      'The length converter changes a distance, not a rate. Fuel economy is a distance per volume, and it is careful about US gallons versus imperial gallons. This page does not use gallons. Pace is time per distance for a run. A 5:00 kilometre is not a number this form accepts, and the pace page does not print knots.',
      'Every conversion goes through metres per second, so a round trip uses the same definitions in both directions. The headline is the destination unit to four decimal places. The other units are listed underneath, which is useful when you only needed to see all four and did not want to submit the form three times.'
    ],
    steps: [
      'Enter the speed as a number of zero or more. The sample is 60.',
      'Choose the unit that number is in, and the unit you want. The sample is miles per hour to kilometres per hour.',
      'Press Calculate. The headline is the destination. The lines repeat mph, km/h, m/s, and knots from the same metres-per-second value.',
      'A negative speed is rejected. A direction is not a negative number here.',
      'To convert a distance instead of a speed, use the length converter. Sixty miles is not 60 mph.'
    ],
    howHeading: 'How the four speed units are defined',
    howItWorks: [
      'The source number is multiplied by the metres-per-second factor for its unit. Miles per hour use 0.44704, which is 1,609.344 / 3,600. Kilometres per hour use 1/3.6. Metres per second use 1. Knots use 1,852 / 3,600. The destination divides by its own factor.',
      'Sixty miles per hour is 26.8224 metres per second exactly, because 60 × 0.44704 = 26.8224. Dividing the metre-per-hour equivalent by 1,000 gives 96.56064 km/h, which displays as 96.5606. Dividing by the knot definition gives 52.1386 knots to four places.',
      'Four decimal places are enough to see that 60 mph is not 100 km/h and not 50 knots. The unrounded metres-per-second line is kept to six places so the definitions can be checked. A zero speed converts to zero in every unit.'
    ],
    formula: '1 mph = 0.44704 m/s, from the statute mile of 1,609.344 m\n1 km/h = 1/3.6 m/s\n1 knot = 1,852/3,600 m/s, the international knot\nDestination = metres per second / the destination factor\nThe headline uses four decimal places',
    formulaNotes: [
      'The statute mile and the international nautical mile are definitions. A knot is not a “sea mile” you have to look up for the day. Nothing on this page is a GPS reading or a posted limit.',
      'Rounding is applied to each displayed unit separately. Multiplying the four-decimal km/h headline back by the inverse factor can miss the original 60 in the last digit. The metres-per-second line is the check.'
    ],
    examplesHeading: 'Worked speed examples',
    samples: [
      { title: '60 mph to km/h', values: { value: 60, from: 1, to: 2 }, blurb: 'The headline is 96.5606 km/h. The same speed is 26.8224 m/s and 52.1386 knots on the detail lines.' },
      { title: '60 mph to knots', values: { value: 60, from: 1, to: 4 }, blurb: 'The destination changes. The metres-per-second value does not. A knot is 1,852 metres per hour.' },
      { title: '100 km/h to mph', values: { value: 100, from: 2, to: 1 }, blurb: 'The reverse direction. 100 km/h is not 60 mph. The headline is the statute-mile figure from 1,000 metres per hour divided by 1,609.344 metres per mile.' }
    ],
    table: {
      heading: '60 mph in the other units',
      caption: 'Definitions: statute mile 1,609.344 m, international knot 1,852 m per hour. Four decimal places match this calculator’s headline.',
      headers: ['Unit', '60 mph'],
      rows: [
        ['km/h', '96.5606'],
        ['m/s', '26.8224'],
        ['knots', '52.1386'],
        ['mph', '60.0000']
      ]
    },
    limitsHeading: 'What a definitional speed conversion leaves out',
    limits: [
      'It does not convert pace. Minutes per mile and minutes per kilometre are the pace calculator. A running MET is the calories page. This page will not turn 9.3 MET into a speed.',
      'It does not know wind, current, or a vehicle’s speedometer error. The factors are exact definitions. A knot on a boat’s display is being interpreted as the international knot.',
      'Fuel economy is a different rate. Miles per gallon and litres per 100 kilometres are the fuel economy converter, which also separates the US gallon from the imperial gallon. A speed has no gallon.',
      'The length converter is for a distance. Converting 60 miles to kilometres and calling it a speed would be the wrong page, even though the mile length is the same 1,609.344 metres used here.'
    ],
    disclaimer: 'These speed factors are unit definitions. They are not a traffic report, a GPS track, or a pace.',
    faqs: [
      { q: 'What is 60 mph in km/h, m/s, and knots?', a: '96.5606 km/h, 26.8224 m/s, and 52.1386 knots. A mile is 1,609.344 metres and an international knot is 1,852 metres per hour. 60 mph is not 100 km/h.' },
      { q: 'How many metres per second is one mile per hour?', a: '0.44704. That is 1,609.344 metres divided by 3,600 seconds. The page uses that factor for every mph conversion, in either direction.' },
      { q: 'Is a knot the same as a mile per hour?', a: 'No. A knot is one international nautical mile, 1,852 metres, per hour. 60 mph is 52.1386 knots. The length converter does not have a knot, because a knot is a speed.' },
      { q: 'Why is the speed converter not the pace calculator?', a: 'Pace is time per distance, such as minutes per kilometre. This page converts mph, km/h, m/s, and knots. It does not accept a finish time, and the pace page does not print knots.' },
      { q: 'Does 100 km/h equal 60 mph?', a: 'No. 60 mph is 96.5606 km/h. 100 km/h is a higher speed. The page converts the number you type. It does not round 96.5606 up to 100.' }
    ],
    relatedLinks: [
      { slug: 'length-converter', label: 'Length converter', note: 'Metres to feet, inches, yards, or kilometres. A distance, not a speed.' },
      { slug: 'pace-calculator', label: 'Pace calculator', note: 'Time, pace, and distance for a run. Not mph to knots.' },
      { slug: 'fuel-economy-converter', label: 'Fuel economy converter', note: 'mpg and L/100 km, with US and imperial gallons kept apart. Not a speed.' }
    ]
  }),
  'pay-raise-calculator': page({
    slug: 'pay-raise-calculator',
    title: 'Pay Raise Calculator: New Pay, Dollars, and Percent | ClearCalc',
    h1: 'Pay Raise Calculator',
    description: 'Pay raise calculator for the new salary, the dollar increase, and the percent. From $50,000 to $54,000 is a $4,000.00 increase and 8.00%. An 8% raise on $50,000 lands on $54,000.00. Monthly and 2,080-hour rates are included.',
    intro: [
      'This pay raise calculator answers a salary question in both directions. If you know the current pay and the new pay, it reports the dollar increase and the percent. $50,000 to $54,000 is $4,000.00 more, which is 8.00%. If you know the current pay and the percent, it builds the new pay. Eight percent of $50,000 is the same $4,000.00, and the new pay is $54,000.00.',
      'The percentage change calculator is the general form of the percent. From 80 to 100 is a 25.00% increase, and it will also compute 50,000 to 54,000. It does not divide by 12 or by 2,080. This page adds the monthly figures and the hourly figures at 40 hours times 52 weeks. A different schedule will not match that hourly line, and the page says 2,080 is the assumption.',
      'A pay cut is allowed. The percent goes negative when the new pay is lower, and the increase line shows a negative dollar amount. A percent of −100% lands on zero. Below −100% is rejected. The result is not a paycheck. Tax is not withheld, and a commission on sales is a different page.'
    ],
    steps: [
      'Choose two salaries or a raise percent. The sample uses the two salaries, 50000 and 54000.',
      'Enter the current annual pay. It has to be above zero so the percent has a base.',
      'If you know the new pay, type it. If you know the percent, switch the choice and type the percent. The unused box is ignored.',
      'Press Calculate. The headline is the new annual pay. The lines give the dollar increase, the percent, the monthly amounts, and the hourly amounts at 2,080 hours.',
      'Read the percent beside the dollars. A $4,000 raise is 8% of $50,000 and a different percent of any other base. The percentage change page is where the same formula is explained without the pay labels.'
    ],
    howHeading: 'How the raise percent and the new pay are calculated',
    howItWorks: [
      'From two salaries, the increase is new minus current and the percent is that increase divided by the current pay, times 100. (54,000 − 50,000) / 50,000 × 100 = 8 exactly. The headline is the new pay you typed, $54,000.00, not the percent. The percent is a detail so the dollar figure stays the thing a contract usually states.',
      'From a percent, the new pay is current × (1 + percent / 100). $50,000 × 1.08 = $54,000. The two modes meet. A 7.5% raise would not land on a round salary, and the headline would carry the cents. The percent you type is not rounded before it is applied.',
      'Monthly pay is the annual figure divided by 12. Hourly pay at 2,080 hours is the annual figure divided by 2,080. $50,000 / 2,080 is $24.04 an hour to the cent. $54,000 / 2,080 is $25.96. Those lines are a translation, not a claim that the job is paid by the hour. The hourly-to-salary page runs the other way, from a rate and a week.'
    ],
    formula: 'From two salaries: increase = new − current\nPercent = increase / current × 100\nFrom a percent: new = current × (1 + percent / 100)\nMonthly = annual / 12\nHourly at a 40×52 year = annual / 2080\nCurrent pay must be above zero\nA percent below −100 or above 500 is rejected',
    formulaNotes: [
      'The percent uses the current pay as the base, which is what the percentage change page does with a starting value. A raise from $54,000 back to $50,000 is not an 8% cut. It is a cut of $4,000 / $54,000, about 7.41%, because the base moved.',
      '2,080 hours is 40 × 52. Someone paid for 37.5 hours, or for 26 pay periods of a different length, should not quote the hourly line as their rate. The annual and monthly lines do not depend on 2,080.'
    ],
    examplesHeading: 'Worked pay-raise examples',
    samples: [
      { title: '$50,000 to $54,000', values: { mode: 1, old: 50000, next: 54000, percent: 0 }, blurb: 'The new pay was typed. The increase is $4,000.00 and the percent is 8.00%. The percent box is ignored in this mode.' },
      { title: 'An 8% raise on $50,000', values: { mode: 2, old: 50000, next: 0, percent: 8 }, blurb: 'The percent was typed. New pay is $50,000 × 1.08 = $54,000.00. The two modes agree on this pair.' },
      { title: 'A smaller percent', values: { mode: 2, old: 64000, next: 0, percent: -9.375 }, blurb: 'A negative percent is a cut. The percentage change page, from 64,000 to 58,000, is a −9.38% decrease. This mode builds the new pay from the percent instead.' }
    ],
    table: {
      heading: 'Raises on a $50,000 salary',
      caption: 'New pay is this calculator’s headline when the percent is typed. Monthly is the new pay divided by 12. Hourly uses 2,080 hours.',
      headers: ['Raise', 'New pay', 'Monthly', 'Hourly at 2,080'],
      rows: [
        ['0%', '$50,000.00', '$4,166.67', '$24.04'],
        ['3%', '$51,500.00', '$4,291.67', '$24.76'],
        ['8%', '$54,000.00', '$4,500.00', '$25.96'],
        ['10%', '$55,000.00', '$4,583.33', '$26.44']
      ]
    },
    limitsHeading: 'What a salary raise figure does not include',
    limits: [
      'Tax is not withheld. A higher salary can move a bracket, and this page does not compute the take-home difference. A state paycheck calculator starts from the annual wage after you know it.',
      'The hourly line assumes 2,080 hours. It is not the overtime calculator and it is not a contract hourly rate unless the job really is 40 hours times 52 weeks.',
      'A commission, a bonus, and a one-time payment are not a raise in the annual rate unless you decide to include them in the two salaries. The commission page starts from sales.',
      'The percent is based on current pay. Comparing the raise with a coworker’s percent uses a different base. The page will not compute a percent of a midpoint or of a band.'
    ],
    disclaimer: 'This is the arithmetic of a salary change. It is not a compensation offer, a tax withholding, or a pay-equity study.',
    faqs: [
      { q: 'What percent raise is $50,000 to $54,000?', a: '8.00%. The dollar increase is $4,000.00. Typing 8% on $50,000 returns the same $54,000.00 new pay. Monthly new pay is $4,500.00, and the 2,080-hour rate is $25.96.' },
      { q: 'How does the pay raise calculator differ from percentage change?', a: 'Percentage change reports the percent for any two numbers. From 80 to 100 is a 25.00% increase. This page adds the dollar raise, divides by 12, and divides by 2,080. The percent formula is the same one.' },
      { q: 'Why is an 8% raise not reversed by an 8% cut?', a: 'The cut would use the new, higher base. Eight percent of $54,000 is $4,320, which would land on $49,680, not on $50,000. The percentage change page spells out the same base problem.' },
      { q: 'What does the hourly line assume?', a: '2,080 hours a year, which is 40 × 52. $50,000 is $24.04 an hour on that count. A different weekly schedule makes the hourly line wrong and leaves the annual and monthly lines unchanged.' },
      { q: 'Does a pay raise result include tax?', a: 'No. The headline is the new annual pay before withholding. A paycheck calculator is the place to apply federal and state tax to the new wage. This page does not know a filing status.' }
    ],
    relatedLinks: [
      { slug: 'percentage-change-calculator', label: 'Percentage change calculator', note: 'From 52,000 to 56,000 is a 7.69% increase. It does not divide a salary by 12 or by 2,080.' },
      { slug: 'hourly-to-salary-calculator', label: 'Hourly to salary calculator', note: 'Starts from an hourly rate and a week. This page starts from the annual salary.' },
      { slug: 'commission-calculator', label: 'Commission calculator', note: 'Gross pay from sales and a rate. An 8% commission is not an 8% raise.' }
    ]
  }),
  'bill-split-calculator': page({
    slug: 'bill-split-calculator',
    title: 'Bill Split Calculator for Unequal Shares | ClearCalc',
    h1: 'Bill Split Calculator',
    description: 'Bill split calculator for unequal shares plus a tip. A $120 bill, a 20% tip, and shares 2, 1, 1 totals $144.00. The double share pays $72.00 and each single share pays $36.00. Cents are assigned so the shares add up.',
    intro: [
      'This bill split calculator divides a bill and a tip by share weights that do not have to be equal. A $120 bill with a 20% tip is $144.00. Shares of 2, 1, and 1 mean the first person pays half and the other two pay a quarter each: $72.00, $36.00, and $36.00. The weights are not dollar amounts. They are the relative sizes of the shares.',
      'The tip calculator already splits a bill equally after a tip. Two people on an $85 bill at 18% each pay the same amount. It has no way to say that one person ordered twice as much. This page exists for that unequal case. Equal weights still work here, and the cents are distributed so the shares add back to the total. A $100 bill with no tip and three equal shares is $33.34, $33.33, and $33.33.',
      'The tip percent is applied to the bill first. Sales tax is not added. If the bill already includes tax, leave it inside the bill. A share of zero pays nothing, which is how a person who is not eating can sit in the list. At least two shares are required, and the weights have to add up to more than zero.'
    ],
    steps: [
      'Enter the bill before the tip. The sample is 120. Tax you want included should already be in that number.',
      'Enter the tip percent. The sample is 20. Zero is allowed. A percent above 100 is rejected.',
      'Enter the share weights, separated by commas. The sample is 2, 1, 1. At least two weights are required. A weight of zero is allowed.',
      'Press Calculate. The headline is the total including the tip. Each person is listed with a dollar amount that already includes their part of the tip.',
      'Check that the listed amounts add to the headline. Remainder cents are given out one at a time, starting with the largest fractional share, so the list sums to the total.'
    ],
    howHeading: 'How unequal shares and the leftover cents are handled',
    howItWorks: [
      'The total in cents is the bill times one plus the tip percent, rounded to the nearest cent. $120 × 1.20 = $144.00, which is 14,400 cents. Each person is owed total × weight / sum of weights. The weights 2, 1, and 1 sum to 4, so the raw shares are 7,200, 3,600, and 3,600 cents. Those are already whole cents, so nobody receives a remainder.',
      'A $100 bill with three equal shares is 10,000 cents. Each raw share is 3,333.333… cents. The page floors them at 3,333 and has one cent left. That cent goes to the first person, so the amounts are $33.34, $33.33, and $33.33. They add to $100.00. The tip calculator’s equal split can differ by a cent for the same reason. This page shows every person.',
      'The order of the remainder is the largest fractional part first, with earlier people winning a tie. That is a deterministic rule, not a suggestion that the first person should always subsidize the table. On an exact division nobody gets an extra cent.'
    ],
    formula: 'Total = bill × (1 + tip / 100), rounded to the cent\nRaw share = total × weight / sum of weights\nEach share is floored to a cent, then leftover cents go to the largest fractional parts\nAt least two shares are required\nWeights must add up to more than zero\nA zero weight pays nothing',
    formulaNotes: [
      'The weights are ratios. Shares of 2, 1, 1 are the same split as 4, 2, 2 or as 1, 0.5, 0.5. You do not have to make them add to 1 or to 100. The page divides by the sum.',
      'The tip is not computed per person and then summed, which can leave a cent on the table. The total is fixed first, and the shares are cut from that total. The headline is that total, not one person’s payment.'
    ],
    examplesHeading: 'Worked bill-split examples',
    samples: [
      { title: '$120 bill, 20% tip, shares 2, 1, 1', values: { bill: 120, tip: 20, shares: '2, 1, 1' }, blurb: 'The total is $144.00. The double share pays $72.00. Each single share pays $36.00. The division is exact, so no remainder cent is moved.' },
      { title: '$100 bill, no tip, three equal shares', values: { bill: 100, tip: 0, shares: '1, 1, 1' }, blurb: '10,000 cents do not divide by 3. The amounts are $33.34, $33.33, and $33.33. They add to $100.00.' },
      { title: 'One person is not paying', values: { bill: 80, tip: 0, shares: '1, 1, 0' }, blurb: 'A zero weight pays nothing. The $80 is split by the two positive weights. The zero is still listed so the party count on the page matches the list you typed.' }
    ],
    table: {
      heading: 'Shares of a $120 bill at 20%',
      caption: 'The total is $144.00 in every row. Amounts are what this calculator lists. Remainder cents, when any, are included.',
      headers: ['Weights', 'Person 1', 'Person 2', 'Person 3'],
      rows: [
        ['2, 1, 1', '$72.00', '$36.00', '$36.00'],
        ['1, 1, 1', '$48.00', '$48.00', '$48.00'],
        ['1, 1', '$72.00', '$72.00', ''],
        ['3, 1', '$108.00', '$36.00', '']
      ]
    },
    limitsHeading: 'What this unequal split does not do',
    limits: [
      'It does not add sales tax. The tip calculator does not either. If tax belongs in the total, include it in the bill before the tip percent is applied. A separate tax rate is the sales-tax page.',
      'It does not itemize dishes. The weights are the only way to say the shares differ. A person who had a single expensive item has to be given a weight that reflects the agreement, not a menu price. There is no item list.',
      'Equal weights are allowed, and they overlap the tip calculator on purpose so a two-tool comparison is possible. The job this page adds is the unequal weight. The tip page cannot take “2, 1, 1”.',
      'More than a handful of people is still one list. The amounts are rounded to the cent and forced to sum to the total. The page will not leave a penny unassigned, and it will not ask who pays the penny. The fractional-part rule does that.'
    ],
    disclaimer: 'This splits the bill and tip you typed by the weights you typed. It is not a tax calculation and not a suggestion about who should have ordered what.',
    faqs: [
      { q: 'How do I split a $120 bill with a 20% tip unequally?', a: 'Shares of 2, 1, and 1 make a $144.00 total. The first person pays $72.00 and the other two pay $36.00 each. The weights are relative. They do not have to add to 100.' },
      { q: 'Why did one person pay an extra cent?', a: 'Because the total in cents did not divide evenly. A $100 bill with three equal shares is $33.34, $33.33, and $33.33. The leftover cent goes to the largest fractional part. The shares still add to $100.00.' },
      { q: 'How is the bill split calculator different from the tip calculator?', a: 'The tip calculator divides the total into equal parts. This page takes share weights, so 2, 1, 1 does not become three equal payments. Equal weights still work here if you want the cent rule written out person by person.' },
      { q: 'Can one share be zero?', a: 'Yes. That person pays nothing, and they are still listed. The other weights split the total. Every weight at zero is rejected, because there is nothing to divide by.' },
      { q: 'Does the bill split add sales tax?', a: 'No. The tip percent is the only percent. Put tax inside the bill if the receipt already has it, or compute the tax on the sales-tax page first. The tip is then a percent of the number you typed.' }
    ],
    relatedLinks: [
      { slug: 'tip-calculator', label: 'Tip calculator', note: 'An equal split after a tip. It has no share weights. $85 at 18% split two ways is that page.' },
      { slug: 'sales-tax-calculator', label: 'Sales tax calculator', note: 'Adds or removes a sales-tax rate. This page does not. Put the taxed amount in the bill if you need it.' },
      { slug: 'discount-calculator', label: 'Discount calculator', note: 'A percent off one price. It does not divide a bill among people.' }
    ]
  }),
  'us-capital-gains-tax-calculator': page({
    slug: 'us-capital-gains-tax-calculator',
    title: 'US Capital Gains Tax Calculator for 2026 | ClearCalc',
    h1: 'US Capital Gains Tax Calculator for 2026',
    description: 'US capital gains tax calculator for 2026 federal tax. A single filer with $40,000 of other taxable income and a $20,000 long-term gain owes $1,582.50. The same gain taxed as short-term ordinary income is $3,360.00. State tax is not included.',
    intro: [
      'This capital gains calculator estimates 2026 federal tax on one net gain stacked on other taxable income you have already computed. Long-term means the asset was held more than one year and is eligible for the 0%, 15%, and 20% rates. Short-term means the gain is taxed as ordinary income. For a single filer, $40,000 of other taxable income and a $20,000 long-term gain produce $1,582.50 of federal tax on the gain. The same gain treated as short-term produces $3,360.00.',
      'The brackets are Internal Revenue Service Revenue Procedure 2025-32. For 2026 the long-term 0% rate applies until taxable income reaches $49,450 for single filers and $98,900 for married filing jointly. The 15% rate runs to $545,500 single and $613,700 joint. Above that the rate is 20%. Ordinary brackets for a short-term gain are the same 2026 rate tables the federal income-tax pages on this site use for wages. The standard deduction is $16,100 single and $32,200 joint. Subtract it, or your itemized deductions, before you type other taxable income. This page does not subtract it again.',
      'The federal income tax calculator taxes a wage. It does not split a gain across the preferential rates. This page does not tax a wage, does not apply the 3.8% Net Investment Income Tax, does not apply the 25% or 28% rates for special categories of gain, and does not compute state tax. It is not tax advice.'
    ],
    steps: [
      'Choose single or married filing jointly. Head of household and married filing separately are not on the form. The sample is single.',
      'Choose long-term or short-term. The sample is long-term, held more than one year.',
      'Enter the net gain as a positive amount. Losses should be netted before you type. A negative number is rejected. The sample gain is 20000.',
      'Enter other taxable income before this gain, after the standard deduction or itemized deductions. The sample is 40000. Do not also subtract the standard deduction in your head and then expect the page to subtract it.',
      'Press Calculate. The headline is the federal tax on the gain only. The other income is used to find the bracket and is not taxed a second time in the headline.'
    ],
    howHeading: 'How 2026 long-term and short-term gains are taxed',
    howItWorks: [
      'Long-term gain fills the space above the other taxable income. A single filer’s 0% band ends at $49,450. Other income of $40,000 leaves $9,450 of that band. The first $9,450 of a $20,000 gain is taxed at 0%. The remaining $10,550 is taxed at 15%, which is $1,582.50. None of this sample reaches the 20% threshold at $545,500.',
      'Short-term tax is ordinary tax on the other income plus the gain, minus ordinary tax on the other income alone. Single tax on $40,000 is $4,552.00. Single tax on $60,000 is $7,912.00. The difference is $3,360.00. That uses the 10%, 12%, and 22% portions of the 2026 single table. The preferential rates are not used.',
      'A joint filer with $80,000 of other taxable income and a $20,000 long-term gain still has $18,900 of room under the $98,900 zero-rate amount. $18,900 of the gain is at 0% and $1,100 is at 15%, which is $165.00. The filing status changes the thresholds. It does not change the idea of stacking the gain on top.'
    ],
    formula: '2026 long-term thresholds, Rev. Proc. 2025-32 § 1(j)(5):\n  Single 0% to $49,450, then 15% to $545,500, then 20%\n  Joint 0% to $98,900, then 15% to $613,700, then 20%\nTax = the gain sliced across those bands, starting from other taxable income\nShort-term tax = ordinary tax on (other + gain) − ordinary tax on other\nOrdinary tables are the 2026 § 1(j) single and joint rate schedules\nStandard deduction is not applied here: $16,100 single, $32,200 joint, subtract it first',
    formulaNotes: [
      'The sample long-term arithmetic is $10,550 × 0.15 = $1,582.50. The $9,450 in the 0% band adds nothing. Short-term uses the wage brackets: 10% to $12,400, 12% to $50,400, and 22% to $105,700 for a single filer.',
      'Taxable income for the thresholds includes the gain. The page does that by walking from the other income upward. You should not add the gain into the “other income” box as well. Doing both would push the gain into a higher band twice.'
    ],
    examplesHeading: 'Worked 2026 capital-gains examples',
    samples: [
      { title: 'Single, $40,000 other income, $20,000 long-term', values: { status: 1, holding: 1, gain: 20000, other: 40000 }, blurb: '$9,450 of the gain is inside the 0% band that ends at $49,450. $10,550 is taxed at 15%. The headline is $1,582.50.' },
      { title: 'The same gain taxed as short-term', values: { status: 1, holding: 2, gain: 20000, other: 40000 }, blurb: 'Ordinary tax on $60,000 minus ordinary tax on $40,000. The headline is $3,360.00. The holding period is the only change.' },
      { title: 'Joint, $80,000 other income, $20,000 long-term', values: { status: 2, holding: 1, gain: 20000, other: 80000 }, blurb: 'The joint zero-rate amount is $98,900. Most of the gain is still at 0%. $1,100 at 15% is $165.00.' }
    ],
    table: {
      heading: '2026 federal tax on a $20,000 gain',
      caption: 'Other taxable income is before the gain and after deductions. Long-term uses the 0/15/20 rates. Short-term uses ordinary rates. Net Investment Income Tax is not included. Figures are this calculator’s headline.',
      headers: ['Filing status', 'Other taxable income', 'Long-term tax', 'Short-term tax'],
      rows: [
        ['Single', '$40,000', '$1,582.50', '$3,360.00'],
        ['Single', '$0', '$0.00', '$2,152.00'],
        ['Joint', '$80,000', '$165.00', '$2,400.00'],
        ['Joint', '$98,900', '$3,000.00', '$4,210.00']
      ]
    },
    limitsHeading: 'What this 2026 federal estimate leaves out',
    limits: [
      'State tax is not computed. The 3.8% Net Investment Income Tax is not computed. Collectibles, qualified small-business stock, and unrecaptured section 1250 gain can face other rates. This page uses 0%, 15%, and 20%, or the ordinary brackets.',
      'The standard deduction is not applied inside the form. Rev. Proc. 2025-32 sets it at $16,100 for single filers and $32,200 for joint filers in 2026. Subtract it, or your itemized deductions, before typing other taxable income.',
      'Head of household and married filing separately are not filing statuses here. Their thresholds are in the same revenue procedure and are not interpolated from the single column. A loss carryover and the $3,000 limit on net capital losses against ordinary income are not applied. Enter the net gain you are testing.',
      'The wage calculator does not know a holding period. Do not add this headline to a paycheck estimate and call it a combined return. Credits, the additional Medicare tax, and a qualified dividend that shares the long-term brackets are outside the form.'
    ],
    disclaimer: 'This is a 2026 federal estimate from Revenue Procedure 2025-32 for a single gain stacked on taxable income you supply. It is not a tax return and not tax advice.',
    faqs: [
      { q: 'How much is the 2026 federal tax on a $20,000 long-term gain if other taxable income is $40,000?', a: 'For a single filer, $1,582.50. The 0% band ends at $49,450, so $9,450 of the gain is at 0% and $10,550 is at 15%. The same gain taxed as short-term ordinary income is $3,360.00.' },
      { q: 'What are the 2026 long-term capital gains thresholds?', a: 'Revenue Procedure 2025-32 sets the 0% ceiling at $49,450 for single filers and $98,900 for married filing jointly. The 15% rate runs to $545,500 single and $613,700 joint. Taxable income above that is at 20%.' },
      { q: 'Does the capital gains calculator subtract the 2026 standard deduction?', a: 'No. The 2026 standard deduction is $16,100 single and $32,200 joint. Subtract it, or your itemized deductions, before you type other taxable income. Typing wages without that subtraction pushes the gain into a higher band.' },
      { q: 'Why is short-term tax higher than long-term tax on the same gain?', a: 'Short-term gain uses the ordinary 2026 brackets. On the single sample that is $3,360.00. Long-term gain uses 0%, 15%, and 20%, and part of the sample still fits in the 0% band, so the tax is $1,582.50. The holding period is the switch.' },
      { q: 'Are state tax and the 3.8% net investment income tax included?', a: 'No. The headline is federal income tax on the gain under the ordinary brackets or the long-term rate schedule. State tax, the 3.8% Net Investment Income Tax, and the special 25% and 28% gain rates are not computed.' }
    ],
    relatedLinks: [
      { slug: 'us-federal-income-tax-calculator', label: 'US federal income tax calculator', note: '2026 tax on a wage after the standard deduction. It does not apply the 0%, 15%, and 20% capital-gains rates.' },
      { slug: 'investment-calculator', label: 'Investment calculator', note: 'A projected balance. Selling it is not modelled, and the tax is not withheld inside the projection.' },
      { slug: 'uk-capital-gains-tax-calculator', label: 'UK capital gains tax calculator', note: '2026/27 UK Capital Gains Tax after the £3,000 allowance. A different statute and a different currency.' }
    ]
  })
};
