import { nov13Page as page, nov13Run as run } from './nov13-page.js';

export const nov13ToolsA = {
  'hours-calculator': page({
    slug: 'hours-calculator',
    title: 'Hours Calculator: Time Between Two Clocks, or Add and Subtract | ClearCalc',
    h1: 'Hours Calculator',
    description: 'Hours calculator for the time between two clock times, including across midnight, and for adding or subtracting a duration. 09:15 to 17:45 is 8 hours 30 minutes. 22:30 plus 3 hours 45 minutes is 02:15.',
    intro: [
      'This hours calculator answers two clock questions the time-card page does not. The first is the length of time from a start to an end, including a shift that crosses midnight. The second is the clock you land on when you add or subtract a duration. 09:15 to 17:45 is 8 hours 30 minutes, which is 8.5000 decimal hours. 22:30 plus 3 hours 45 minutes lands at 02:15 on the next day.',
      'The time-card calculator is a same-day shift with an unpaid break, and it does not roll a night shift into the next day. This page has no break and no wage. The date-difference calculator counts calendar days, not hours and minutes inside a day. Add-days moves a date by whole days and never looks at a clock.',
      'Times use a 24-hour clock. 17:45 is 5:45 in the afternoon. The form does not accept 5 with a pm switch. Type 17. Minutes run from 0 to 59. A duration used for adding or subtracting can be many hours, up to 1,000, because the question is sometimes “three days and a bit from now” rather than a single shift.'
    ],
    steps: [
      'Choose hours between two times, add a duration, or subtract a duration. The sample is the gap from 09:15 to 17:45.',
      'Enter the start hour and minute. Hours are 0 to 23. 0 is midnight at the start of the day.',
      'For a gap, enter the end hour and minute. If the end is earlier than the start, the page treats the end as the next day.',
      'For add or subtract, enter the duration hours and minutes. The end boxes are ignored in those two modes.',
      'Press Calculate. A gap headline is hours and minutes. An add or subtract headline is the landing clock, and a line says whether that clock is the same day, a later day, or an earlier day.'
    ],
    howHeading: 'How the hours and the landing clock are counted',
    howItWorks: [
      'A clock time becomes minutes from midnight: hour × 60 + minute. The gap is end minus start. When the end is smaller, 1,440 minutes are added first, and the note says the span crosses midnight. 22:00 to 06:30 is 8 hours 30 minutes, the same length as 09:15 to 17:45, but only the first of those two crosses midnight.',
      'Decimal hours are the total minutes divided by 60, shown to four decimal places. 8 hours 30 minutes is 8.5000. A payroll system that wants hundredths of an hour can read that line. This page still does not multiply by a rate. Overtime and a break belong on the other work pages.',
      'Adding a duration moves the minute count forward. Subtracting moves it backward. The landing clock is the minute count modulo 1,440, and the day count is how many midnights were crossed. 22:30 plus 3 hours 45 minutes is 26 hours 15 minutes from the previous midnight, which is 02:15 one day later. 09:00 minus 2 hours is 07:00 on the same day.'
    ],
    formula: 'Minutes from midnight = hour × 60 + minute\nGap = end − start, plus 1,440 if the end is earlier\nDecimal hours = minutes / 60\nLanding minutes = start ± duration\nLanding clock = landing minutes modulo 1,440\nDay shift = the number of midnights crossed',
    formulaNotes: [
      '09:15 is 555 minutes. 17:45 is 1,065 minutes. The difference is 510 minutes, which is 8 hours and 30 minutes. There is no break subtracted from that 510.',
      'A 24-hour duration added to 09:15 lands at 09:15 one day later. The clock looks unchanged. The day line is the part that moved. The date calculator is still the tool that names the calendar date.'
    ],
    examplesHeading: 'Worked hours examples',
    samples: [
      { title: '09:15 to 17:45 on the same day', values: { mode: 1, starthour: 9, startminute: 15, endhour: 17, endminute: 45, addhours: 0, addminutes: 0 }, blurb: 'A daytime span. The end is later than the start, so no midnight is added. The decimal line is 8.5000 hours.' },
      { title: '22:00 to 06:30, across midnight', values: { mode: 1, starthour: 22, startminute: 0, endhour: 6, endminute: 30, addhours: 0, addminutes: 0 }, blurb: 'The end clock is earlier, so the page adds 24 hours before subtracting. The length happens to match the daytime example. The note is what distinguishes them.' },
      { title: '22:30 plus 3 hours 45 minutes', values: { mode: 2, starthour: 22, startminute: 30, endhour: 0, endminute: 0, addhours: 3, addminutes: 45 }, blurb: 'Add mode ignores the end boxes. The landing clock is 02:15, and the day line says the result is one day later.' }
    ],
    table: {
      heading: 'Clock gaps and landing times',
      caption: 'Each row is this calculator’s headline. Gap rows use the between-two-times choice. The last row subtracts.',
      headers: ['Question', 'Headline'],
      rows: [
        ['09:15 to 17:45', run('hours-calculator', { mode: 1, starthour: 9, startminute: 15, endhour: 17, endminute: 45, addhours: 0, addminutes: 0 }).headline],
        ['22:00 to 06:30', run('hours-calculator', { mode: 1, starthour: 22, startminute: 0, endhour: 6, endminute: 30, addhours: 0, addminutes: 0 }).headline],
        ['22:30 plus 3h 45m', run('hours-calculator', { mode: 2, starthour: 22, startminute: 30, endhour: 0, endminute: 0, addhours: 3, addminutes: 45 }).headline],
        ['09:00 minus 2h', run('hours-calculator', { mode: 3, starthour: 9, startminute: 0, endhour: 0, endminute: 0, addhours: 2, addminutes: 0 }).headline]
      ]
    },
    limitsHeading: 'What this hours calculator leaves out',
    limits: [
      'There is no unpaid break. A 09:00 to 17:30 shift with a 30-minute lunch is the time-card calculator, and that page stays inside one day. Putting the break into this gap would overstate the worked time.',
      'There is no pay rate, no overtime threshold, and no time zone. 09:15 in New York and 09:15 in London are the same clock on this page. Moving a clock between zones is the time-zone converter.',
      'The page does not know a calendar date, a daylight-saving change, or a leap second. Adding 24 hours lands on the same clock one day later even on the night the civil clocks repeat or skip an hour.',
      'Seconds are not a field. A start and end in the same minute is 0 hours 0 minutes. An end that is exactly the start is a zero gap, not a 24-hour day, unless you meant the next day and say so by using add mode with 24 hours.'
    ],
    disclaimer: 'This is clock arithmetic. It is not a timesheet, a payroll calculation, or a time-zone conversion.',
    faqs: [
      { q: 'How many hours are there from 09:15 to 17:45?', a: '8 hours 30 minutes, which is 510 minutes and 8.5000 decimal hours. The end is later on the same day, so midnight is not added.' },
      { q: 'How does the hours calculator handle a shift that ends after midnight?', a: 'If the end clock is earlier than the start, the end is treated as the next day. 22:00 to 06:30 is 8 hours 30 minutes. The time-card page does not make that assumption.' },
      { q: 'What time is 22:30 plus 3 hours and 45 minutes?', a: '02:15 on the next day. Subtracting 2 hours from 09:00 lands at 07:00 on the same day. The day line under the headline says which of those happened.' },
      { q: 'Why is this not the time-card hours calculator?', a: 'The time card is a same-day start, end, and unpaid break, aimed at a shift. This page measures a gap that may cross midnight, or it moves a clock by a duration. Neither page multiplies by an hourly wage.' },
      { q: 'Can I add days as well as hours?', a: 'Type the days as hours. Two days is 48 duration hours. The landing clock repeats every 24 hours, and the day count says how far you moved. Naming the calendar date is the add-days calculator.' }
    ],
    relatedLinks: [
      { slug: 'time-card-hours-calculator', label: 'Time card hours calculator', note: '09:00 to 17:30 with a 30-minute break is 8.0000 hours. It does not cross midnight and it does subtract the break.' },
      { slug: 'date-difference-calculator', label: 'Date difference calculator', note: 'Counts calendar days between two dates. It does not look at hours and minutes.' },
      { slug: 'time-zone-converter', label: 'Time zone converter', note: 'Moves 15:00 US Eastern on 15 July 2026 to 20:00 in the UK. This page keeps the zone you are already in.' }
    ]
  }),
  'average-calculator': page({
    slug: 'average-calculator',
    title: 'Average Calculator: Arithmetic Mean, Count, and Sum | ClearCalc',
    h1: 'Average Calculator',
    description: 'Average calculator for the arithmetic mean of a list. 8, 6, 10, and 12 sum to 36 and average 9.0000. The count and the sum are shown with the mean.',
    intro: [
      'This average calculator finds the arithmetic mean of the numbers you type. Add them, then divide by how many there are. 8, 6, 10, and 12 sum to 36. Four numbers give a mean of 9.0000. The count and the sum stay on the page so the division can be checked.',
      'A mean is not a percent. The percentage calculator asks what percent one number is of another. The percentage change calculator asks how a starting value moved to a new value. Neither of those pages accepts a list. A weighted grade, where a category has a weight, is the grade calculator. This page treats every number as one equal item.',
      'The list is separated by commas or spaces. Negatives and decimals are allowed. One number is a valid average: the mean of a single value is that value, and the sum equals it. A blank list is rejected. The standard deviation page needs at least two numbers because a sample spread divides by count minus one.'
    ],
    steps: [
      'Type the numbers in one box, separated by commas. The sample is 8, 6, 10, 12.',
      'Spaces around the commas are ignored. A semicolon works as well.',
      'Press Calculate. The headline is the mean to four decimal places. The lines give the count, the sum, and the division.',
      'If a token is not a number, the page asks for numbers only. A trailing comma is ignored rather than treated as a zero.',
      'For a spread around this mean, use the standard deviation calculator with the same list. This page stops at the mean.'
    ],
    howHeading: 'How the arithmetic mean is calculated',
    howItWorks: [
      'The page splits the box on commas, semicolons, and whitespace, drops empty pieces, and adds the remaining numbers. The mean is that sum divided by the count. Nothing is weighted. The first number does not count twice, and a repeated number counts every time it appears.',
      'Display uses four decimal places. 9 is 9.0000. A mean of 10 / 3 would show 3.3333. The sum line keeps more places so a long decimal can be audited. The headline is the rounded mean, not a second formula.',
      'Outliers pull a mean. 8, 6, 10, and 12 sit close together. Replacing 12 with 100 moves the mean a long way, and the page will do that without comment. It does not drop a high or low score. A median would, and this is not a median.'
    ],
    formula: 'Count = how many numbers were typed\nSum = the numbers added\nArithmetic mean = sum / count\nEvery number has the same weight\nAt least one number is required',
    formulaNotes: [
      '8 + 6 + 10 + 12 = 36. 36 / 4 = 9. The headline is 9.0000. Leaving out the 12 would make the mean of the other three 8.0000, which is a different list.',
      'The mean of −2 and 2 is 0.0000. The sum is zero and the count is two. A negative is not an error. An empty token from a double comma is skipped, so it does not become a zero that would drag the mean down.'
    ],
    examplesHeading: 'Worked average examples',
    samples: [
      { title: 'The mean of 8, 6, 10, and 12', values: { numbers: '8, 6, 10, 12' }, blurb: 'Four everyday numbers. The sum is 36 and the count is 4, so the mean is exactly 9.' },
      { title: 'A single number', values: { numbers: '14' }, blurb: 'One value is allowed. The mean is the value, the count is 1, and the sum is the same number. A sample standard deviation cannot do this.' },
      { title: 'Decimals and a negative', values: { numbers: '1.5, 2.5, -1' }, blurb: 'The sum is 3 and the count is 3, so the mean is 1. Decimals and a negative are ordinary inputs, not a special mode.' }
    ],
    table: {
      heading: 'Means for short lists',
      caption: 'Each mean is this calculator’s headline. The sum and the count are the lines under it.',
      headers: ['List', 'Count', 'Sum', 'Mean'],
      rows: [
        ['8, 6, 10, 12', '4', '36', '9.0000'],
        ['14', '1', '14', '14.0000'],
        ['1.5, 2.5, −1', '3', '3', '1.0000'],
        ['2, 4, 4, 4, 5, 5, 7, 9', '8', '40', '5.0000']
      ]
    },
    limitsHeading: 'What an arithmetic mean does not say',
    limits: [
      'It is not a median or a mode. In 2, 4, 4, 4, 5, 5, 7, 9 the mean is 5 and the most common value is 4. This page reports 5.0000 and does not mention 4.',
      'It is not weighted. A grade category worth 40% of a course is the grade calculator. Typing 90 and 80 here treats them as two equal numbers, not as a 40/60 course.',
      'It is not a percent change and not “what percent is A of B.” Those questions have their own pages. The mean of 80 and 100 is 90, while the change from 80 to 100 is a 25% increase.',
      'A very long list is still just a sum and a count. The page does not plot the numbers or remove outliers. Check the count line if a comma went missing and two numbers stuck together.'
    ],
    disclaimer: 'This average is the arithmetic mean of the list you typed. It is not a grade, a forecast, or a weighted index.',
    faqs: [
      { q: 'What is the average of 8, 6, 10, and 12?', a: '9.0000. The sum is 36 and there are 4 numbers. 36 / 4 = 9. The headline keeps four decimal places even when the result is a whole number.' },
      { q: 'Does the average calculator ignore a blank after a comma?', a: 'Yes. An empty piece from a trailing comma or a double comma is dropped. It is not counted as zero. A word or a currency sign is rejected.' },
      { q: 'Can one number have an average?', a: 'Yes. The mean of a single number is that number. The standard deviation calculator rejects a single number because its sample formula divides by count minus one.' },
      { q: 'How is an average different from a percentage?', a: 'An average divides a sum by a count. A percentage divides a part by a whole and multiplies by 100. The mean of 25 and 200 is 112.5000. Part 25 of whole 200 is 12.5% on the percentage page.' },
      { q: 'Will a repeated number be counted twice in the average?', a: 'Yes. Every typed value counts once per time it appears. 4, 4, 4 is a mean of 4, and the count is 3, not 1. The page does not look for a mode.' }
    ],
    relatedLinks: [
      { slug: 'standard-deviation-calculator', label: 'Standard deviation calculator', note: 'The same list 2, 4, 4, 4, 5, 5, 7, 9 has mean 5 and a sample standard deviation of 2.1381.' },
      { slug: 'percentage-calculator', label: 'Percentage calculator', note: 'Part 25 and whole 200 is 12.5%. That is not the mean of 25 and 200.' },
      { slug: 'grade-calculator', label: 'Grade calculator', note: 'A weighted average of category scores. This page has no weights.' }
    ]
  }),
  'standard-deviation-calculator': page({
    slug: 'standard-deviation-calculator',
    title: 'Standard Deviation Calculator: Sample and Population | ClearCalc',
    h1: 'Standard Deviation Calculator',
    description: 'Standard deviation calculator with the sample formula and the population formula labelled. For 2, 4, 4, 4, 5, 5, 7, 9 the sample result is 2.1381 and the population result is 2.0000.',
    intro: [
      'This standard deviation calculator measures how far a list sits from its own mean. It always shows both figures. The sample standard deviation divides the sum of squared deviations by n − 1. The population standard deviation divides by n. You choose which one is the headline. For 2, 4, 4, 4, 5, 5, 7, and 9 the mean is 5, the sample result is 2.1381, and the population result is 2.0000.',
      'The average calculator stops at that mean of 5.0000. Spread is a different question. Two lists can share a mean and have very different standard deviations. A sample is a subset of a larger group, which is why the divisor loses one. A population is the whole group you actually have.',
      'At least two numbers are required. One number has a deviation of zero from itself, and the sample divisor would be zero. The page rejects that case instead of printing infinity. Negatives and decimals are allowed. The list uses the same commas as the average page.'
    ],
    steps: [
      'Choose the sample headline or the population headline. The sample choice is the default. Both numbers are still printed.',
      'Type at least two numbers, separated by commas. The sample list is 2, 4, 4, 4, 5, 5, 7, 9.',
      'Press Calculate. The headline ends in the word sample or population so the divisor is visible in the result, not only in the form.',
      'Read the mean and the sum of squared deviations before you quote the headline. Those two lines are the inputs to both formulas.',
      'If the list is the entire group, switch the headline to population. The sample number will still be underneath if you want the comparison.'
    ],
    howHeading: 'How sample and population standard deviation differ',
    howItWorks: [
      'The mean is the arithmetic mean. Each value then contributes (value − mean) squared. Those squares are added. For the sample list the squares are 9, 1, 1, 1, 0, 0, 4, and 16, and the sum is 32. The mean is 5 because the values sum to 40 and there are 8 of them.',
      'Sample standard deviation is the square root of 32 / 7, which is 2.1381 to four decimal places. Population standard deviation is the square root of 32 / 8, which is exactly 2. The only change is the divisor. The headline word tells you which root you are looking at.',
      'Four decimal places are rounded from the full square root. 2.1380899… becomes 2.1381. The population result is exact, so 2.0000 is not hiding a fraction. A different list will not land on a whole number just because the population divisor was used.'
    ],
    formula: 'Mean = sum / n\nSquared deviation of each value = (value − mean)²\nSample standard deviation = √(sum of squared deviations / (n − 1))\nPopulation standard deviation = √(sum of squared deviations / n)\nn is the count, and n must be at least 2',
    formulaNotes: [
      'The sample divisor is Bessel’s correction. It is the usual choice when the list is a sample and the mean was estimated from that same sample. It is not a statement that the population figure is wrong.',
      'This is the standard deviation, not the variance. The variance would be the figure before the square root: 32/7 for the sample and 4 for the population. The page takes the root and does not print the variance as a separate headline.'
    ],
    examplesHeading: 'Worked standard deviation examples',
    samples: [
      { title: 'Sample standard deviation of eight numbers', values: { which: 1, numbers: '2, 4, 4, 4, 5, 5, 7, 9' }, blurb: 'The headline uses n − 1. The population line underneath is 2.0000, from the same squares divided by 8.' },
      { title: 'Population standard deviation of the same list', values: { which: 2, numbers: '2, 4, 4, 4, 5, 5, 7, 9' }, blurb: 'Only the headline choice changes. The mean is still 5 and the sum of squares is still 32. The headline is now the division by n.' },
      { title: 'Two identical numbers', values: { which: 1, numbers: '10, 10' }, blurb: 'The deviations are zero, so both standard deviations are zero. The sample formula can still be computed because n − 1 is 1, not 0.' }
    ],
    table: {
      heading: 'Sample and population results',
      caption: 'The sample column divides by n − 1. The population column divides by n. Both come from this calculator.',
      headers: ['List', 'Mean', 'Sample', 'Population'],
      rows: [
        ['2, 4, 4, 4, 5, 5, 7, 9', '5.0000', '2.1381', '2.0000'],
        ['10, 10', '10.0000', '0.0000', '0.0000'],
        ['1, 2, 3', '2.0000', '1.0000', '0.8165']
      ]
    },
    limitsHeading: 'What this standard deviation does not do',
    limits: [
      'It is not a weighted standard deviation and not a standard deviation of a frequency table. Typing 4 three times is how a repeated value is entered. There is no frequency column.',
      'It does not remove outliers and it does not compute a z-score for a new observation. Subtract the mean and divide by the standard deviation you chose if you want that score. The page stops after the two roots.',
      'A single number is rejected. The average page accepts one number. If the form says at least two numbers are required, add the rest of the list rather than repeating the first number unless it really occurred twice.',
      'The result is in the same units as the data. A list of degrees and a list of dollars can both produce 2.1381. The page does not know the unit. The mean line is the check that the list was the one you meant.'
    ],
    disclaimer: 'Sample and population standard deviation are labelled separately. The page does not decide which divisor your assignment or dataset requires.',
    faqs: [
      { q: 'What is the sample standard deviation of 2, 4, 4, 4, 5, 5, 7, and 9?', a: '2.1381. The mean is 5, the squared deviations sum to 32, and the sample formula divides by 7 before the square root. The population result for the same list is 2.0000.' },
      { q: 'Why does the standard deviation calculator show two answers?', a: 'Because dividing by n and dividing by n − 1 are different formulas. The headline is the one you chose. The other is on the line underneath so a sample result is not quietly swapped for a population result.' },
      { q: 'When should I use the population standard deviation?', a: 'When the list is the whole group, not a sample from which you are estimating a larger group. The population line divides by the count. For the eight-number sample that division is 32 / 8, and the root is 2.' },
      { q: 'Why are two identical numbers a standard deviation of zero?', a: 'Each value equals the mean, so every squared deviation is zero. Both roots are zero. That is a real result, not a blank. A single number is the case that is rejected.' },
      { q: 'How is standard deviation different from the average?', a: 'The average is the mean. Standard deviation is the root of the squared distance from that mean. The list 2, 4, 4, 4, 5, 5, 7, 9 averages to 5.0000 on the average page and has a sample standard deviation of 2.1381 here.' }
    ],
    relatedLinks: [
      { slug: 'average-calculator', label: 'Average calculator', note: 'The mean of 2, 4, 4, 4, 5, 5, 7, 9 is 5.0000. This page starts from that mean and measures the spread.' },
      { slug: 'grade-calculator', label: 'Grade calculator', note: 'A weighted course score. It does not return a standard deviation of the category marks.' },
      { slug: 'percentage-change-calculator', label: 'Percentage change calculator', note: 'From 80 to 100 is a 25.00% increase. A list’s spread is not a change from the first item to the last.' }
    ]
  }),
  'pythagorean-theorem-calculator': page({
    slug: 'pythagorean-theorem-calculator',
    title: 'Pythagorean Theorem Calculator for a Right Triangle | ClearCalc',
    h1: 'Pythagorean Theorem Calculator',
    description: 'Pythagorean theorem calculator for a right triangle. Legs 3 and 4 give a hypotenuse of 5.0000. A hypotenuse of 13 and a leg of 5 give the missing leg 12.0000.',
    intro: [
      'This Pythagorean theorem calculator solves one side of a right triangle from the other two. Legs of 3 and 4 produce a hypotenuse of 5.0000, because 3² + 4² = 25 and the square root of 25 is 5. A hypotenuse of 13 and a known leg of 5 produce the missing leg 12.0000, the other familiar triple.',
      'The right angle is assumed to sit between the two legs. The page cannot see a drawing. If the angle you measured is not 90 degrees, the hypotenuse it prints is the hypotenuse of a different triangle. The area of the right triangle is shown as a side result, ab/2. The area calculator is the page that starts from a shape and can do rectangles, circles, and triangles that are not described by two legs.',
      'Both modes use the same two boxes. In hypotenuse mode the boxes are the legs. In missing-leg mode the first box is the hypotenuse and the second is the known leg. The known leg has to be shorter than the hypotenuse, because a leg cannot be the longest side of a right triangle.'
    ],
    steps: [
      'Choose hypotenuse or missing leg. The sample is the hypotenuse from legs 3 and 4.',
      'Enter the two lengths in the same unit. The page does not convert feet to metres. A 3 and a 4 are 3 and 4 of whatever unit you are using.',
      'In missing-leg mode, put the hypotenuse in the first box and the known leg in the second. A known leg that is longer than or equal to the hypotenuse is rejected.',
      'Press Calculate. The headline is the missing side to four decimal places. The area line is the right-triangle area, not the headline.',
      'For the area of a shape that is not a right triangle described this way, use the area calculator. This page will not treat a radius as a leg.'
    ],
    howHeading: 'How a² + b² = c² is applied',
    howItWorks: [
      'The hypotenuse is the square root of the sum of the squared legs. Math.hypot is used so a very large leg does not overflow a naive square. For 3 and 4 the squares are 9 and 16, the sum is 25, and the root is 5. The headline shows 5.0000.',
      'The missing leg is the square root of hypotenuse squared minus known leg squared. 13² − 5² = 169 − 25 = 144, and the root is 12. The page refuses the subtraction when it would be negative or zero. A zero leg is also refused, because a triangle with a side of zero is not a triangle.',
      'The area line multiplies the two legs and divides by 2. For 3 and 4 that is 6.0000. For 5 and 12 that is 30.0000. Quoting the area as the hypotenuse is the mix-up this layout tries to prevent: the headline is the side, and the area is labelled as area.'
    ],
    formula: 'Hypotenuse c = √(a² + b²)\nMissing leg b = √(c² − a²), and a must be shorter than c\nArea of the right triangle = a × b / 2\nLengths must be greater than zero\nThe unit is whatever unit you typed',
    formulaNotes: [
      '3-4-5 and 5-12-13 are exact in ordinary arithmetic, so four decimal places still end in zeros. A leg pair such as 1 and 1 is √2, which is 1.4142 to four places and not exact on the page.',
      'The area formula uses the legs, including the leg that was just solved. It is not the area of a circle and not a perimeter. The perimeter would be the two legs plus the hypotenuse, and it is not printed.'
    ],
    examplesHeading: 'Worked right-triangle examples',
    samples: [
      { title: 'Legs 3 and 4', values: { mode: 1, a: 3, b: 4 }, blurb: 'The classic triple. The hypotenuse is 5 and the area is 6. Either leg can go in either box in this mode.' },
      { title: 'Hypotenuse 13 and leg 5', values: { mode: 2, a: 13, b: 5 }, blurb: 'Missing-leg mode. The first box is 13, not 5. The missing side is 12 and the area is 30.' },
      { title: 'Legs 1 and 1', values: { mode: 1, a: 1, b: 1 }, blurb: 'An isosceles right triangle. The hypotenuse is the square root of 2, displayed to four decimal places. The area is 0.5000.' }
    ],
    table: {
      heading: 'Sides this page returns',
      caption: 'The solved side is the headline. Area is the detail line. Units are the units of the inputs.',
      headers: ['Known sides', 'Solved side', 'Area'],
      rows: [
        ['Legs 3 and 4', '5.0000', '6.0000'],
        ['Hypotenuse 13, leg 5', '12.0000', '30.0000'],
        ['Legs 1 and 1', '1.4142', '0.5000']
      ]
    },
    limitsHeading: 'What a right-triangle solver leaves out',
    limits: [
      'The angle between the legs is assumed to be 90 degrees. An acute or obtuse triangle needs a different relation, the law of cosines, and this page does not ask for an angle.',
      'It does not convert units. A leg of 3 feet and a leg of 36 inches are not both “3” and “36” in a way the page understands. Convert them first. The length converter does metres and feet, not this theorem.',
      'It does not solve a perimeter, a similar triangle, or a distance on a coordinate grid unless you have already turned the grid into two legs. The volume calculator is for solids. The area calculator is for other flat shapes.',
      'Four decimal places hide nothing on the exact triples and round √2. If you need more places, square the headline and compare it with the sum of squares. 1.4142² is slightly under 2 because of that rounding.'
    ],
    disclaimer: 'This applies the Pythagorean theorem to the lengths you type. It does not survey a triangle or check that the angle is right.',
    faqs: [
      { q: 'What is the hypotenuse of a right triangle with legs 3 and 4?', a: '5.0000. 3² + 4² = 25, and the square root of 25 is 5. The area of that triangle is 6.0000, which is a different line from the hypotenuse.' },
      { q: 'How do I find the missing leg when the hypotenuse is 13?', a: 'Put 13 in the first box, switch to the missing-leg choice, and type the known leg in the second box. A known leg of 5 returns 12.0000. The known leg has to be shorter than 13.' },
      { q: 'Why is the Pythagorean calculator not the area calculator?', a: 'The headline here is a side. The area of the right triangle is only a detail, computed as half the product of the legs. The area page starts from a rectangle, circle, triangle, trapezoid, ellipse, or parallelogram and does not solve a hypotenuse.' },
      { q: 'Does a 1 by 1 right triangle have a hypotenuse of 1.4142?', a: 'Yes, to four decimal places. The exact value is √2. 1.4142 is the display, and squaring the display does not return 2 exactly. The formula uses the square root before that rounding.' },
      { q: 'Can the two legs be in different units?', a: 'Only if you convert them yourself. The page adds the squares as typed. Three metres and four feet are not a 3-4-5 triangle. Convert both lengths, then calculate.' }
    ],
    relatedLinks: [
      { slug: 'area-calculator', label: 'Area calculator', note: 'Area of a rectangle, circle, triangle, and other shapes. It does not solve a hypotenuse.' },
      { slug: 'volume-calculator', label: 'Volume calculator', note: 'Cubic size of a box, cylinder, sphere, or cone. A right triangle has no volume on that page either.' },
      { slug: 'length-converter', label: 'Length converter', note: 'Metres to feet, inches, yards, or kilometres, before you type the legs.' }
    ]
  }),
  'volume-calculator': page({
    slug: 'volume-calculator',
    title: 'Volume Calculator for a Box, Cylinder, Sphere, and Cone | ClearCalc',
    h1: 'Volume Calculator',
    description: 'Volume calculator for a rectangular box, cylinder, sphere, or cone. A 2 by 3 by 4 foot box is 24.0000 cubic feet. A sphere of radius 1 metre is 4.1888 cubic metres.',
    intro: [
      'This volume calculator finds the cubic size of four solids. A rectangular box multiplies length, width, and height. A cylinder multiplies the area of its circular base by its height. A sphere uses 4/3 π r³. A cone uses one third of the cylinder that shares its radius and height. A 2 by 3 by 4 foot box is 24.0000 cubic feet, which is 179.5316 US gallons.',
      'The area calculator stays in two dimensions. Square footage is a floor or a footprint. Neither of those pages multiplies by a height or uses π for a solid. A roofing estimate starts from a footprint and a pitch and still reports square feet, not cubic feet. Volume is the page for the solid.',
      'Pick the unit before you read the extra line. Centimetres also show litres, because 1,000 cubic centimetres are a litre. Metres show litres at 1,000 litres per cubic metre. Inches and feet show US gallons, using the exact 231 cubic inches in a US gallon. The imperial gallon is not used.'
    ],
    steps: [
      'Choose the box, cylinder, sphere, or cone. The sample is a box in feet.',
      'Choose centimetres, metres, inches, or feet. Every length uses that unit. Do not mix inches and feet in the same form.',
      'Enter the lengths the shape needs. A box uses length, width, and height. A cylinder or cone uses radius and height. A sphere uses the radius and ignores the other boxes.',
      'Press Calculate. The headline is the cubic measure to four decimal places. The next lines repeat the formula with your numbers and give litres or US gallons.',
      'A zero or a negative length is rejected. A footprint with no thickness is area, not volume.'
    ],
    howHeading: 'How each solid’s volume is calculated',
    howItWorks: [
      'The box is the product of three edges. 2 × 3 × 4 = 24. There is no π. Turning the box does not change the product, so which edge you call length does not matter.',
      'The cylinder is π r² h. Radius 2 and height 5 in centimetres is 62.8319 cubic centimetres, about 0.0628 litres. The cone with radius 3 and height 4 inches is one third of the matching cylinder, 37.6991 cubic inches. The sphere of radius 1 metre is 4/3 π, which is 4.1888 cubic metres and 4,188.7902 litres.',
      'US gallons use 231 cubic inches exactly, so cubic inches are divided by 231 and cubic feet are multiplied by 1,728 / 231. A litre is a thousandth of a cubic metre and a thousand cubic centimetres. The page uses π from the language runtime, then rounds the display to four decimal places.'
    ],
    formula: 'Box = length × width × height\nCylinder = π × radius² × height\nSphere = 4/3 × π × radius³\nCone = 1/3 × π × radius² × height\n1 US gallon = 231 cubic inches\n1 litre = 1,000 cubic centimetres = 0.001 cubic metres',
    formulaNotes: [
      'The sphere ignores the width and height boxes. Leaving them filled does not change a sphere. Switching the shape to a cylinder without changing the numbers will use the radius and the height and will change the result.',
      'Four decimal places on a multiple of π are a display. 4.1888 cubic metres is 4/3 π rounded. The litre line is rounded separately, so it may not equal the headline times 1,000 at the last digit.'
    ],
    examplesHeading: 'Worked volume examples',
    samples: [
      { title: 'A 2 by 3 by 4 foot box', values: { shape: 1, unit: 4, a: 2, b: 3, c: 4 }, blurb: 'The product is 24 cubic feet. The gallon line uses 1,728 cubic inches per cubic foot and 231 cubic inches per US gallon.' },
      { title: 'A cylinder of radius 2 and height 5 centimetres', values: { shape: 2, unit: 1, a: 2, b: 5, c: 0 }, blurb: 'π × 4 × 5. The headline is cubic centimetres. Divide by 1,000 for litres, which is the extra line.' },
      { title: 'A sphere of radius 1 metre', values: { shape: 3, unit: 2, a: 1, b: 1, c: 1 }, blurb: '4/3 π cubic metres. The other two boxes are ignored for a sphere. The litre line is 1,000 times the cubic metres, before each line is rounded.' }
    ],
    table: {
      heading: 'Volumes for the worked solids',
      caption: 'Each cubic figure is this calculator’s headline. Gallons are US gallons. The imperial gallon is not listed.',
      headers: ['Solid', 'Headline', 'Also shown'],
      rows: [
        ['2 × 3 × 4 foot box', '24.0000 cubic feet', '179.5316 US gallons'],
        ['Cylinder r = 2 cm, h = 5 cm', '62.8319 cubic centimetres', '0.0628 litres'],
        ['Sphere r = 1 m', '4.1888 cubic metres', '4,188.7902 litres'],
        ['Cone r = 3 in, h = 4 in', '37.6991 cubic inches', '0.1632 US gallons']
      ]
    },
    limitsHeading: 'What this volume page does not measure',
    limits: [
      'It is not a tank calibration. A horizontal cylinder, a dished end, and the liquid height inside a partly filled tank are not shapes on the form. The cylinder here is the full geometric cylinder.',
      'It does not convert the lengths for you. Inches in one box and feet in another are not detected. The unit menu labels the result. It does not interpret the numbers.',
      'Floor area, roof squares, and concrete yardage are other pages. A slab in cubic yards from feet and inches of thickness is the concrete calculator, which also counts bags. This page will give the cubic size if you convert every edge into feet first, and it will not count bags.',
      'The imperial gallon, a board foot, and a cord of wood are not output units. US gallons and litres are the two conversions, chosen from the length unit.'
    ],
    disclaimer: 'These are geometric volumes of the solid you selected. They are not a shipping weight, a fluid capacity chart, or a construction takeoff.',
    faqs: [
      { q: 'What is the volume of a 2 by 3 by 4 foot box?', a: '24.0000 cubic feet. That is 2 × 3 × 4. The US gallon line is 179.5316, from 1,728 cubic inches in a cubic foot and 231 cubic inches in a US gallon.' },
      { q: 'How is a cone’s volume related to a cylinder?', a: 'A cone is one third of the cylinder with the same radius and height. Radius 3 and height 4 inches gives 37.6991 cubic inches. The matching cylinder would be three times that.' },
      { q: 'What is the volume of a sphere with radius 1 metre?', a: '4.1888 cubic metres, which is 4/3 π rounded to four decimal places. The litre line shows 4,188.7902 litres. The width and height boxes are not used for a sphere.' },
      { q: 'Why does the volume calculator also show litres or gallons?', a: 'Because a cubic unit is not always the unit a container is sold in. Centimetres and metres add litres. Inches and feet add US gallons. The imperial gallon is not used.' },
      { q: 'Is volume the same as square footage?', a: 'No. Square footage is an area. Volume multiplies by a third length, or it uses a radius. A 2 by 3 foot rectangle is 6 square feet on an area page. The 2 by 3 by 4 foot box is 24 cubic feet here.' }
    ],
    relatedLinks: [
      { slug: 'area-calculator', label: 'Area calculator', note: 'Flat shapes, including a circle’s area π r², which is the base of the cylinder on this page.' },
      { slug: 'square-footage-calculator', label: 'Square footage calculator', note: 'A floor or an L-shaped plan in square feet. It does not multiply by height.' },
      { slug: 'concrete-slab-calculator', label: 'Concrete slab calculator', note: 'Cubic yards and bags for a rectangular pour, including a waste allowance. This page does not count bags.' }
    ]
  })
};
