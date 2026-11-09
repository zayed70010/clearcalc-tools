export const nov6CalculatorContent = {
  'pregnancy-due-date-calculator': {
    title: 'Pregnancy Due Date Calculator (Naegele’s Rule) | ClearCalc',
    h1: 'Pregnancy Due Date Calculator',
    description: 'Estimate a due date with Naegele’s rule adjusted for cycle length. An LMP of 1 January 2026 and a 28-day cycle is due 8 October 2026. On 1 April 2026 that pregnancy is 12 weeks and 6 days.',
    intro: [
      'This pregnancy due date calculator estimates an estimated due date from the first day of the last menstrual period, using Naegele’s rule of 280 days, then shifts that date by the difference between the cycle length you type and 28 days. A 28-day cycle uses the 280 days with no shift. A longer cycle moves the due date later. A shorter cycle moves it earlier. The sample is 1 January 2026 and a 28-day cycle. The headline is Due 8 October 2026. That is exactly 40 weeks after the LMP. Gestational age on 1 April 2026 is 12 weeks and 6 days, which is 90 days from the LMP, and 190 days remain until the due date.',
      'The cycle length changes the due date and the conception estimate. It does not change the week count from the LMP. The same 1 January 2026 LMP with a 35-day cycle is due 15 October 2026, seven days later, and the adjustment line reads +7 days. Gestational age on 1 April 2026 is still 12 weeks and 6 days. Days until the due date become 197. The estimated conception day moves from 15 January 2026 to 22 January 2026. A 21-day cycle from the same LMP is due 1 October 2026, seven days earlier. Clinicians often keep dating the pregnancy from the LMP, or from an ultrasound, and use cycle length only as a reason the 280-day date might be early or late. This page shows both: the LMP week count, and the cycle-adjusted due date.',
      'The result is a planning estimate, not a diagnosis and not an ultrasound date. A dating scan in the first trimester is the usual way a clinician confirms or replaces a last-menstrual-period date. Bleeding that was not a period, an irregular cycle, contraception recently stopped, and assisted conception all move the real date away from this arithmetic. The BMI page on this site says BMI is not the right chart in pregnancy. This page does not compute a BMI, a weight, or a calorie target. It counts days.'
    ],
    steps: [
      'Enter the first day of the last menstrual period as a calendar date. The sample, 2026-01-01, is 1 January 2026. The day the period started is the day to use, not the day it ended.',
      'Enter the usual cycle length in whole days. The sample is 28. The form accepts 21 through 45. A blank or a decimal is rejected. Leave 28 when you do not know the cycle, which is the Naegele assumption.',
      'Optionally enter the date on which you want gestational age. The examples use 2026-04-01 so the week count can be checked. Leave it blank to use the date in your browser today. The due date does not depend on that field. The week count does.',
      'Press Calculate. The headline is the estimated due date. Gestational age, days until that date, the conception window, and the three trimester ranges are listed underneath.'
    ],
    howHeading: 'How Naegele’s rule and the cycle adjustment are counted',
    howItWorks: [
      'Naegele’s rule, as this page runs it, adds 280 days to the LMP. 280 days is 40 weeks. The old calendar shortcut, add one year, subtract three months, and add seven days, matches 280 days when 29 February is not inside the span. It can be one day different when it is. An LMP of 1 January 2024 is a leap-year check. Adding 280 days lands on 7 October 2024, and gestational age on that day is 40 weeks and 0 days. The calendar shortcut would say 8 October 2024. This page uses the 280-day count, not the shortcut. The 2026 sample does not include 29 February, so 1 January 2026 plus 280 days is 8 October 2026 either way.',
      'The cycle adjustment is added after the 280 days: due date = LMP + 280 + (cycle length − 28). A 35-day cycle adds 7 days, so 1 January 2026 is due 15 October 2026. A 21-day cycle subtracts 7 days and is due 1 October 2026. The adjustment is the whole difference in days. There is no separate formula for a half-day cycle, because the field has to be a whole number from 21 to 45. The conception day is LMP + (cycle length − 14), which is the usual estimate that ovulation falls about 14 days before the next period. On a 28-day cycle that is day 14, 15 January 2026 if the LMP is 1 January. The window runs from four days before that day through that day, 11 January 2026 through 15 January 2026, as a rough fertile window. It is not a proof of the day conception happened.',
      'Trimester dates follow the LMP, using the common boundaries of 13 weeks 6 days, 27 weeks 6 days, and 28 weeks 0 days. For 1 January 2026 the first trimester is 1 January 2026 through 8 April 2026. The second is 9 April 2026 through 15 July 2026. The third starts 16 July 2026 and ends on the estimated due date, so a 28-day cycle ends it on 8 October 2026 and a 35-day cycle ends it on 15 October 2026. The starts do not move with cycle length. Only the end of the third trimester does, because that end is the due date. On the due date itself the week count for a 28-day cycle is 40 weeks and 0 days, and the detail line says the gestational age date is the estimated due date. Seven days later, 15 October 2026, the count is 41 weeks and 0 days and the line says 7 days past the estimated due date.',
      'An empty gestational-age date uses today in the browser, so the week count changes every day and the due date does not. The worked examples type a date so the 12 weeks and 6 days figure can be checked without depending on the day you open the page. A date before the LMP is rejected. A date that is not a real calendar day is rejected. The age calculator on this site counts completed years, months, and days between two dates. It does not add 280 days, and it does not know a cycle length. The day-difference page counts elapsed days, which is the raw material of this estimate, without naming a trimester.'
    ],
    formula: 'Due date = LMP + 280 days + (cycle length − 28)\n280 days is 40 weeks, the Naegele count for a 28-day cycle\nCycle length must be a whole number from 21 to 45\nGestational age = completed weeks and days from the LMP to the as-of date\nConception day = LMP + (cycle length − 14)\nConception window = the four days before the conception day, through that day\nFirst trimester = LMP through LMP + 13 weeks 6 days\nSecond trimester = 14 weeks 0 days through 27 weeks 6 days from the LMP\nThird trimester = 28 weeks 0 days from the LMP through the estimated due date\nThe calendar shortcut of +1 year − 3 months + 7 days is not used',
    formulaNotes: [
      'Day counts use calendar dates, so a daylight-saving change does not add or drop a day. 1 January 2026 to 1 April 2026 is 90 days, and 90 = 12 weeks and 6 days. 1 January 2026 to 8 October 2026 is 280 days. The 190 days from 1 April to 8 October are 280 minus 90.',
      'A 35-day cycle does not make 1 April "less pregnant" on this page. The LMP week count stays 12 weeks and 6 days. What changes is the due date, the days remaining, the conception window, and the last day of the third trimester. An ultrasound date, if you have one, should replace both the LMP and the cycle guess. This form has no field for a scan.'
    ],
    examplesHeading: 'Worked due-date examples',
    examples: [
      {
        title: '1 January 2026, 28-day cycle, age on 1 April',
        paragraphs: [
          'LMP 2026-01-01, cycle 28, as-of date 2026-04-01. The calculator shows Due 8 October 2026. Gestational age on 1 April 2026 is 12 weeks and 6 days, 90 days from the LMP. Days until the estimated due date: 190. The Naegele adjustment is 0 days. The conception day is 15 January 2026, and the window is 11 January 2026 through 15 January 2026.',
          'The first trimester runs 1 January 2026 through 8 April 2026. The second runs 9 April 2026 through 15 July 2026. The third runs 16 July 2026 through 8 October 2026. On 8 October 2026 the same inputs show 40 weeks and 0 days, and the line says the gestational age date is the estimated due date. On 15 October 2026 they show 41 weeks and 0 days and 7 days past the estimated due date. The due date in the headline does not change.'
        ]
      },
      {
        title: 'The same LMP with a 35-day cycle and a 21-day cycle',
        paragraphs: [
          'Change only the cycle to 35. The headline becomes Due 15 October 2026. The adjustment is +7 days. Gestational age on 1 April 2026 is still 12 weeks and 6 days. Days until the due date are 197. The conception day is 22 January 2026, and the window is 18 January 2026 through 22 January 2026. The third trimester still starts on 16 July 2026 and now ends on 15 October 2026.',
          'Change the cycle to 21 and set the as-of date to the LMP itself, 2026-01-01. The headline is Due 1 October 2026. The adjustment is -7 days. Gestational age on 1 January 2026 is 0 weeks and 0 days. Days until the due date: 273. The conception day is 8 January 2026, which is after the LMP, and the window is 4 January 2026 through 8 January 2026. A cycle outside 21 to 45, or a decimal such as 28.5, is rejected rather than silently rounded.'
        ]
      },
      {
        title: 'The 2024 leap-year check against the calendar shortcut',
        paragraphs: [
          'LMP 2024-01-01, cycle 28, as-of date 2024-10-07. The calculator shows Due 7 October 2024. Gestational age on that day is 40 weeks and 0 days, 280 days from the LMP. The conception day is 15 January 2024, and the window is 11 January 2024 through 15 January 2024. The trimesters are 1 January 2024 through 7 April 2024, 8 April 2024 through 14 July 2024, and 15 July 2024 through 7 October 2024.',
          'Adding one year, subtracting three months, and adding seven days to 1 January 2024 produces 8 October 2024, one day later, because 2024 includes 29 February. This page does not use that shortcut. If a clinic wrote 8 October on a card, the difference is the leap day, not a second pregnancy. An ultrasound that dates the pregnancy to a different day should be followed instead of either figure.'
        ]
      }
    ],
    table: {
      heading: 'Due dates from an LMP of 1 January',
      caption: 'Each row is what this calculator displays. Gestational age in the 2026 rows is on 1 April 2026. The 2024 row is measured on the due date itself. Trimester starts stay on the LMP. Only the due date, the conception day, and the end of the third trimester move with cycle length.',
      headers: ['LMP', 'Cycle', 'Due date', 'Age on the check date', 'Conception day'],
      rows: [
        ['1 January 2026', '28 days', '8 October 2026', '12 weeks and 6 days', '15 January 2026'],
        ['1 January 2026', '35 days', '15 October 2026', '12 weeks and 6 days', '22 January 2026'],
        ['1 January 2026', '21 days', '1 October 2026', '0 weeks on the LMP', '8 January 2026'],
        ['1 January 2024', '28 days', '7 October 2024', '40 weeks and 0 days', '15 January 2024']
      ]
    },
    limitsHeading: 'What this due-date estimate leaves out',
    limits: [
      'An ultrasound, a known ovulation date, and an embryo-transfer date are better dating information than a cycle guess. This form cannot enter a transfer day or a crown-rump length. If those exist, the due date on a clinic chart is the one to use. The 280-day rule is a population average. Individual pregnancies are born before and after it, and a due date is not a deadline.',
      'The conception window is four days before the estimated ovulation day through that day. Sperm can survive a little longer, and the egg does not wait a week. The window is a teaching range, not a fertility diagnosis and not a way to determine a conception date after the fact. Implantation is later than ovulation and is not dated here.',
      'Irregular cycles, polycystic ovary syndrome, breastfeeding, and recent hormonal contraception make the cycle field a poor guide. Typing 28 when the cycle is usually 40 days will pull the due date a week or more early. The 21 to 45 limit is the range this estimator will run. It is not a statement that every cycle outside that range is abnormal, and it is not medical advice to ignore a cycle outside it.',
      'This page does not estimate weight gain, calories, BMI, or a birth weight. The BMI calculator says its categories are not for pregnancy. The ideal-weight formulas are adult height formulas, not a pregnancy target. The age calculator will say how many years, months, and days old a person is on a date. It will not add 280 days to an LMP.'
    ],
    disclaimer: 'This due date is Naegele’s rule plus a cycle-length adjustment. It is general information, not a prenatal diagnosis, an ultrasound report, or medical advice.',
    faqs: [
      {
        q: 'What due date does a 1 January 2026 LMP give on a 28-day cycle?',
        a: '8 October 2026. That is 280 days, or 40 weeks, after 1 January 2026. On 1 April 2026 the gestational age is 12 weeks and 6 days, which is 90 days from the LMP, and 190 days remain. The conception window is 11 January 2026 through 15 January 2026. The trimesters end on 8 April 2026, 15 July 2026, and 8 October 2026.'
      },
      {
        q: 'Does a 35-day cycle change the week count, or only the due date?',
        a: 'On this page it changes the due date, not the week count from the LMP. The same 1 January 2026 LMP is due 15 October 2026, the adjustment is +7 days, and gestational age on 1 April 2026 is still 12 weeks and 6 days. Days remaining become 197. The conception day moves to 22 January 2026. A 21-day cycle is due 1 October 2026.'
      },
      {
        q: 'Why is 1 January 2024 due on 7 October rather than 8 October?',
        a: 'Because this calculator adds 280 days, and 2024 has a 29 February inside that span. The calendar shortcut of one year minus three months plus seven days lands on 8 October 2024. On 7 October 2024 the gestational age is 40 weeks and 0 days. The 2026 sample has no leap day in the count, so 1 January 2026 is due 8 October 2026.'
      },
      {
        q: 'What do the trimester dates mean for the January 2026 example?',
        a: 'They follow the LMP. The first trimester is 1 January 2026 through 8 April 2026, which is 13 weeks and 6 days. The second is 9 April 2026 through 15 July 2026. The third starts 16 July 2026 and ends on the due date, 8 October 2026 when the cycle is 28 days. A longer cycle does not move 16 July. It moves the last day.'
      },
      {
        q: 'Can the gestational age date be left blank?',
        a: 'Yes. A blank date uses today in the browser, so the week count advances each day and the due date stays put. The examples type 2026-04-01 because 12 weeks and 6 days is only true on that date for a 1 January 2026 LMP. A date before the LMP is rejected. On the due date the line says the gestational age date is the estimated due date, and 40 weeks and 0 days for a 28-day cycle.'
      },
      {
        q: 'Is this pregnancy due date a substitute for an ultrasound?',
        a: 'No. It is 280 days from the LMP, plus or minus the cycle difference from 28. A dating scan, a known ovulation, or an embryo transfer can replace it. The conception window is an estimate around LMP + (cycle − 14), not a finding. The BMI page is a different tool and says its adult categories are not for pregnancy.'
      }
    ],
    relatedLinks: [
      { slug: 'age-calculator', label: 'Age calculator', note: 'Completed years, months, and days between two dates. It does not add 280 days to an LMP or read a cycle length.' },
      { slug: 'date-difference-calculator', label: 'Date difference calculator', note: 'Elapsed days between two dates. 1 January 2026 to 8 October 2026 is the 280-day span this due date uses, without the trimester labels.' },
      { slug: 'ideal-weight-calculator', label: 'Ideal weight calculator', note: 'Devine, Robinson, and Miller from adult height. A 175 cm man is 70.5 kg on the Devine headline. That is not a pregnancy weight.' },
      { slug: 'bmi-calculator', label: 'Adult BMI calculator', note: 'BMI from kilograms and centimeters, or pounds and inches. The page says the adult categories are not the right chart in pregnancy. This due date page does not compute one.' },
      { slug: 'ovulation-calculator', label: 'Ovulation calculator', note: 'A last period of 1 January 2026 and a 28-day cycle with a 14-day luteal phase ovulates on 15 January 2026. That is the conception day this due date page uses. The fertile window is 10 January through 15 January. This page still estimates the due date, not the window.' }
    ]
  },
  'simple-interest-calculator': {
    title: 'Simple Interest Calculator (I = P × r × t) | ClearCalc',
    h1: 'Simple Interest Calculator',
    description: 'Calculate simple interest with I = P × r × t. $10,000 at 5% for 3 years earns $1,500.00 and totals $11,500.00. The compound interest page, with no deposit, reaches $11,614.72 on the same inputs.',
    intro: [
      'This simple interest calculator multiplies principal by the annual rate and by time in years. The formula is I = P × r × t, and the total is principal plus that interest. The rate is the percent you type, divided by 100. Time can be a fraction of a year, and the interest scales in a straight line with that fraction. The sample is $10,000 at 5% for 3 years. Interest is $1,500.00 and the headline total is $11,500.00. Nothing is compounded, and no monthly deposit is added.',
      'The compound interest calculator on this site answers a different question. It compounds monthly, and it can add an end-of-month deposit. Set that deposit to $0, keep $10,000, 5%, and 3 years, and the compound page shows $11,614.72, of which $1,614.72 is growth. Simple interest on the same three numbers is $1,500.00. The $114.72 gap is the interest that monthly compounding earns on earlier interest. Over a longer span the gap is larger. $10,000 at 7% for 10 years is $7,000.00 of simple interest and a $17,000.00 total. The compound page, again with a $0 monthly deposit, shows $20,096.61. The extra $3,096.61 is compounding, not a different principal.',
      'Simple interest is also not the interest on an installment loan. A loan that is paid down every month charges interest on a falling balance. The loan calculator, given $25,000 at 7.5% for 5 years, shows a payment of $500.95 a month, total repayment of $30,056.92, and total interest of $5,056.92. Simple interest on that same principal, rate, and time is $9,375.00, and the total is $34,375.00. The simple figure keeps charging 7.5% on the original $25,000 for all five years. The amortizing loan does not. Use this page when the contract really is simple interest, or when you want the straight-line comparison. Use the loan page for a monthly payment that retires the debt.'
    ],
    steps: [
      'Enter the principal in US dollars. The sample, 10000, is $10,000. A principal of zero is allowed and produces zero interest. A negative principal is rejected.',
      'Enter the annual interest rate as a percent. For 5%, type 5, not 0.05. The sample is 5. A rate of zero is allowed and produces $0.00 of interest. A negative rate is rejected.',
      'Enter the time in years. The sample is 3. A fraction is allowed: 1.5 years is one and a half times the annual interest, not a monthly amortization. Zero years produces zero interest. A negative time is rejected.',
      'Press Calculate. The headline is principal plus interest. The interest line, the rate, and the time are underneath. There is no monthly deposit field. That field lives on the compound interest page.'
    ],
    howHeading: 'How simple interest differs from monthly compounding',
    howItWorks: [
      'The calculator divides the percent by 100, multiplies by the principal, and multiplies by the years. $10,000 × 0.05 × 3 = $1,500.00. Adding the principal gives $11,500.00. Halve the time to 1.5 years and the interest halves to $750.00, so the total is $10,750.00. That straight line is the point of the formula. Compound interest does not halve when the time halves, because each period’s interest joins the balance.',
      'A zero rate is the check that nothing is invented. $10,000 at 0% for 3 years is a headline of $10,000.00 and interest of $0.00. A zero principal at 5% for 3 years is $0.00. A zero time is the same: the principal is unchanged and the interest is $0.00. The compound page has the same zero-rate behaviour for a different reason. At 0% for 10 years, $10,000 plus $250 a month ends at $40,000.00, which is only the money contributed. This page has no contribution to add, so a zero rate leaves the principal sitting where it started.',
      'The 5% three-year comparison is small because three years of monthly compounding does not have long to build. $11,614.72 minus $11,500.00 is $114.72. The 7% ten-year comparison is the one that shows why the pages are not substitutes. Simple interest pays $7,000.00. Monthly compounding with no deposits grows the same $10,000 to $20,096.61, which is $10,096.61 of growth. You cannot get the $20,096.61 figure by typing 7 and 10 on this page. You also cannot get the $1,500.00 figure from the compound page, because that page will not turn monthly compounding off. Annual compounding, daily compounding, and continuous compounding are further formulas. Neither page runs them.',
      'The installment contrast matters if the principal is a loan rather than a lump that sits untouched. $25,000 × 0.075 × 5 = $9,375.00 of simple interest. The loan page’s $5,056.92 of interest is lower because each payment reduces the balance the next month’s interest is charged on. A credit card is a third pattern. The credit-card payoff page compounds a monthly rate and applies a fixed payment. Simple interest of 18% on $5,000 for 2 years is $1,800.00, and the total is $6,800.00. That is not a card payoff. A card does not leave the $5,000 untouched for two years and then add 18% once a year.'
    ],
    formula: 'Rate r = annual percent / 100\nSimple interest I = principal × r × time in years\nTotal = principal + I\nTime may be a fraction. Interest is linear in time.\nNo compounding, no monthly deposit, and no payment schedule\nThe compound page instead uses a monthly rate of r / 12 for years × 12 months',
    formulaNotes: [
      'Display rounding is to the cent, from the full product. The sample numbers divide evenly, so $1,500.00 and $11,500.00 are exact, not rounded. A rate or a time that does not land on a cent is rounded on the interest line and again on the total line.',
      'Entering 0.05 in the rate box means five hundredths of one percent, not 5%. The interest on $10,000 for 3 years would then be $15.00, which is 0.05% rather than 5%. The compound page uses the same percent convention. Type 5 on both pages when you mean five percent.'
    ],
    examplesHeading: 'Worked simple-interest examples',
    examples: [
      {
        title: '$10,000 at 5% for 3 years, beside monthly compounding',
        paragraphs: [
          'Principal 10000, rate 5, years 3. The calculator shows $11,500.00. Simple interest is $1,500.00. The rate line reads 5.00%, and the time line reads 3 years. The arithmetic is 10,000 × 0.05 × 3.',
          'The compound interest page with principal 10000, monthly contribution 0, rate 5, and years 3 shows $11,614.72 and growth of $1,614.72. Simple interest is $114.72 lower. That gap is not a fee. It is the interest the compound page credits on interest already earned. Shorten the simple-interest time to 1.5 years and this page shows $10,750.00, with $750.00 of interest, exactly half of the three-year interest. The compound result would not fall by exactly half.'
        ]
      },
      {
        title: '$10,000 at 7% for 10 years, and a zero rate',
        paragraphs: [
          'Principal 10000, rate 7, years 10. Simple interest is $7,000.00 and the headline is $17,000.00. The compound page with a $0 monthly deposit shows $20,096.61 on those same inputs, and $10,096.61 of that is growth. The $3,096.61 difference is ten years of monthly compounding. The rule of 72 on the compound page is a check on that other formula. It is not a check on $17,000.00.',
          'Principal 10000, rate 0, years 3. The headline is $10,000.00 and simple interest is $0.00. The same principal at 5% for 0 years is also $10,000.00 of total and $0.00 of interest. A zero does not mean "use a default rate." It means the term you set to zero drops out of the product.'
        ]
      },
      {
        title: 'A $25,000 loan quote, and an 18% two-year note',
        paragraphs: [
          'Principal 25000, rate 7.5, years 5. Simple interest is $9,375.00 and the total is $34,375.00. The loan calculator on $25,000 at 7.5% for 5 years shows $500.95 a month, total repayment of $30,056.92, and interest of $5,056.92. The simple total is $4,318.08 higher because it never reduces the principal. If the contract is a monthly amortizing loan, the loan page is the one that matches the payment. If the contract charges simple interest on the original amount for the whole term, this page is the one that matches.',
          'Principal 5000, rate 18, years 2. Simple interest is $1,800.00 and the total is $6,800.00. That figure assumes the $5,000 sits untouched and the 18% is applied in a straight line. A credit card that compounds monthly and receives payments is the credit-card payoff calculator. Do not type the card’s APR here and treat $1,800.00 as the interest the card will charge.'
        ]
      }
    ],
    table: {
      heading: 'Simple interest on lump sums',
      caption: 'Each row is what this calculator displays. Interest is principal times the rate times the years, with no compounding. The compound-interest totals in the text use a $0 monthly deposit on that other page and are not restated as a column here.',
      headers: ['Principal', 'Annual rate', 'Time', 'Simple interest', 'Total'],
      rows: [
        ['$10,000', '5%', '3 years', '$1,500.00', '$11,500.00'],
        ['$10,000', '5%', '1.5 years', '$750.00', '$10,750.00'],
        ['$10,000', '7%', '10 years', '$7,000.00', '$17,000.00'],
        ['$25,000', '7.5%', '5 years', '$9,375.00', '$34,375.00'],
        ['$5,000', '18%', '2 years', '$1,800.00', '$6,800.00'],
        ['$10,000', '0%', '3 years', '$0.00', '$10,000.00']
      ]
    },
    limitsHeading: 'What straight-line interest leaves out',
    limits: [
      'Monthly, daily, and continuous compounding are not available. The compound page is monthly only, and it adds deposits this page cannot see. A bank that compounds daily will not match $1,500.00 on the three-year sample, and it will not match $11,614.72 either unless its convention is the same monthly rate.',
      'An amortizing loan, a mortgage, and a credit card apply the rate to a changing balance. The $9,375.00 of simple interest on $25,000 at 7.5% for 5 years is not the $5,056.92 the loan page computes, and it is not a mortgage payment. Fees, late charges, and an interest-only period are not fields.',
      'Taxes on the interest, inflation, and a rate that changes during the term are not applied. A 5% simple rate for 3 years is $1,500.00 before any tax. Time is a fraction of a calendar year in the abstract, not a count of actual days with a 365-day or 360-day money-market convention. For a 90-day note, type 90/365 as the years if that is the contract, rather than expecting this page to know the day count.',
      'The headline is a total of principal and interest, in US dollars. The percent math is the same in another currency, and the symbol will still say $. A result above the principal means the rate and the time were both positive. It is not a forecast that a borrower or a lender will agree to the rate.'
    ],
    disclaimer: 'This simple-interest figure is the formula I = P × r × t. It is general arithmetic, not a loan offer, an investment projection, or tax advice.',
    faqs: [
      {
        q: 'How much simple interest does $10,000 earn at 5% for 3 years?',
        a: '$1,500.00. The total of principal and interest is $11,500.00. That is 10,000 × 0.05 × 3. The compound interest page, with a monthly deposit of $0, shows $11,614.72 on the same principal, rate, and years. The $114.72 difference is monthly compounding. This page does not compound.'
      },
      {
        q: 'Why is $10,000 at 7% for 10 years only $17,000 here?',
        a: 'Because simple interest is $7,000.00 and the principal is added once: $17,000.00. The compound page with no monthly deposit shows $20,096.61, and $10,096.61 of that is growth. The $3,096.61 gap is compounding over 120 months. Typing 7 and 10 on this page cannot produce $20,096.61.'
      },
      {
        q: 'Does half the time mean half the simple interest?',
        a: 'Yes. $10,000 at 5% for 1.5 years is $750.00 of interest and a $10,750.00 total, which is half of the $1,500.00 earned over 3 years. Compound interest is not linear in time. A zero rate or a zero time leaves the interest at $0.00 and the total equal to the principal, $10,000.00 in the zero-rate example.'
      },
      {
        q: 'Why is simple interest on a $25,000 loan higher than the loan calculator?',
        a: 'Simple interest on $25,000 at 7.5% for 5 years is $9,375.00, and the total is $34,375.00. The loan calculator amortizes that loan and shows $500.95 a month, with $5,056.92 of interest and $30,056.92 repaid. The payment reduces the balance. Simple interest keeps the original principal outstanding for the whole term. Use the page that matches the contract.'
      },
      {
        q: 'Is 18% simple interest for 2 years the same as a credit-card APR?',
        a: 'No. $5,000 at 18% for 2 years is $1,800.00 of simple interest and a $6,800.00 total, only if the $5,000 is untouched and the rate is not compounded. A card compounds a monthly rate and usually receives payments. That payoff is the credit-card calculator, not this straight-line product.'
      },
      {
        q: 'What happens if the rate is entered as 0.05 instead of 5?',
        a: 'The calculator treats 0.05 as 0.05%, not as 5%. Interest on $10,000 for 3 years is then $15.00 rather than $1,500.00. Type 5 when you mean five percent. The same convention is used on the compound interest page. A negative rate, a negative principal, or a negative time is rejected.'
      }
    ],
    relatedLinks: [
      { slug: 'compound-interest-calculator', label: 'Compound interest calculator', note: '$10,000 at 5% for 3 years with no monthly deposit grows to $11,614.72. Simple interest on this page is $1,500.00 and the total is $11,500.00. At 7% for 10 years the compound balance is $20,096.61 against a $17,000.00 simple total.' },
      { slug: 'loan-calculator', label: 'Personal and auto loan calculator', note: '$25,000 at 7.5% for 5 years is $500.95 a month and $5,056.92 of interest. Simple interest on those inputs is $9,375.00, because the principal is not paid down.' },
      { slug: 'mortgage-calculator', label: 'Fixed-rate mortgage calculator', note: 'A fully amortizing monthly payment. $300,000 at 6.5% for 30 years is $1,896.20 a month. That is not simple interest on the original balance.' },
      { slug: 'credit-card-payoff-calculator', label: 'Credit card payoff calculator', note: 'A monthly rate and a fixed payment. Simple interest of 18% on an untouched $5,000 for 2 years is $1,800.00 here, and that is not a card payoff.' },
      { slug: 'roi-calculator', label: 'ROI calculator', note: 'A $10,000 cost that ends at $12,500 is a 25.00% simple return and $2,500.00 of profit. It does not multiply by years the way simple interest does.' }
    ]
  },
  'colorado-paycheck-calculator': {
    title: 'Colorado Paycheck Calculator 2026 (Flat 4.40%) | ClearCalc',
    h1: 'Colorado Paycheck Calculator for 2026',
    description: 'Estimate a 2026 Colorado paycheck after federal tax and the flat 4.40% state tax. At $65,000 single, Colorado tax is $2,151.60 and the two-week take-home is $2,009.84.',
    intro: [
      'This Colorado paycheck calculator estimates federal income tax, Social Security, Medicare, and Colorado income tax on a 2026 wage. Colorado’s individual rate is a flat 4.40%. The Colorado Department of Revenue’s DR 1098 withholding worksheet dated 21 October 2025 multiplies Colorado taxable wages by 4.40%. The January 2026 Individual Income Tax Guide lists 4.40% for tax year 2025, after a temporary 4.25% rate in 2024 under the TABOR reduction, and it does not print a different 2026 rate. This page uses 4.40% for 2026. The rate does not rise at a higher wage.',
      'Colorado taxable income on a return starts from federal taxable income, before Colorado additions and subtractions. This estimate uses the wage, minus a traditional 401(k), minus the 2026 federal standard deduction of $16,100 single or $32,200 joint from IRS Revenue Procedure 2025-32. The sample is $65,000, single, paid every two weeks, with no 401(k). Federal taxable income is $48,900. Colorado tax is $2,151.60, which is 4.40% of $48,900. Federal tax is $5,620.00, Social Security is $4,030.00, and Medicare is $942.50. Annual take-home is $52,255.90, and the headline is $2,009.84 every two weeks.',
      'Arizona on that same wage charges a flat 2.5% after its own $15,750 deduction, which is $1,231.25 of state tax and $2,045.24 every two weeks. Federal tax and FICA match. The $920.35 annual gap is the state tax: $2,151.60 minus $1,231.25. Massachusetts on the wage charges $3,030.00 at 5% after a $4,400 exemption and pays $1,976.06 every two weeks. Colorado’s 4.40% is not Arizona’s 2.5% and it is not Massachusetts’s 5%. A traditional 401(k) reduces Colorado tax here because it reduces federal taxable income, which is the Colorado starting point.'
    ],
    steps: [
      'Enter annual gross wages in US dollars. The sample, 65000, is $65,000 for the year. Other income is not added, so the 4.40% tax sees only this wage after the 401(k) and the federal standard deduction.',
      'Choose single or married filing jointly, and the pay frequency. The sample is single and every two weeks. Joint uses the $32,200 federal deduction on this one wage. A second salary should not claim that deduction again.',
      'Enter a traditional 401(k) deferral if you want it removed before both federal and Colorado tax. The 2026 elective deferral cap is $24,500. A larger entry is cut back to that cap or to wages, whichever is smaller. A Roth contribution does not belong in the box.',
      'Press Calculate. The headline is one pay period of annual take-home, rounded to the cent. Colorado tax and Colorado taxable income are listed underneath. The figure is the annual tax divided by the number of pays, not the DR 1098 withholding worksheet.'
    ],
    howHeading: 'How a 2026 Colorado paycheck is estimated',
    howItWorks: [
      'Federal taxable income and Colorado taxable income are the same number on this page: the wage, minus the 401(k), minus the federal standard deduction, and not below zero. On $65,000 single that is $48,900. Federal tax on $48,900 is $5,620.00. Colorado tax is 4.40% of $48,900, which is $2,151.60 with no further bracket. Social Security is 6.2% of wages up to the $184,500 wage base, here $4,030.00. Medicare is 1.45% of all wages, here $942.50. Additional Medicare Tax of 0.9% starts at $200,000 and is $0.00 on this wage. Those federal and FICA lines match Arizona and Massachusetts at the same wage and the same zero deferral. The state line is the piece that differs.',
      'DR 1098 does not subtract the federal standard deduction. For an employee who files only a federal W-4, the 2026 worksheet subtracts $5,500 if the expected status is not married filing jointly, or $11,000 if it is, and then multiplies by 4.40%. On a $65,000 single wage that worksheet base is $59,500, and 4.40% of the extra $10,600 is $466.40. Adding $466.40 to this page’s $2,151.60 is $2,618.00, which is the worksheet’s annual withholding, not a line this calculator prints. Employer withholding can therefore run about $466.40 a year higher than the return-style tax on this sample. A joint $65,000 wage is $1,443.20 on this page, because the $32,200 deduction leaves $32,800 taxed at 4.40%. The worksheet’s $11,000 subtraction would leave a larger base. This page follows the return starting point.',
      'A $6,500 traditional deferral on the $65,000 single wage cuts Colorado taxable income from $48,900 to $42,400. Colorado tax falls from $2,151.60 to $1,865.60. The $286.00 difference is 4.40% of $6,500. Federal tax falls from $5,620.00 to $4,840.00. The deferral itself leaves the cheque. Annual take-home is $46,821.90, and the headline is $1,800.84 every two weeks. A deferral typed as $30,000 is reduced to the $24,500 elective limit before either tax is computed. Colorado tax in that capped case is $1,073.60, and the two-week headline is $1,222.07. The detail line says the entry was reduced.',
      'Filing status changes the deduction, not the 4.40% rate. A joint return on one $65,000 wage uses $32,200, leaves $32,800, and charges $1,443.20. Federal tax is $3,440.00. Annual take-home is $55,144.30, and the two-week headline is $2,120.93. At $90,000 single, Colorado taxable income is $73,900 and the tax is $3,251.60. Federal tax is $10,970.00, Social Security is $5,580.00, Medicare is $1,305.00, and the two-week headline is $2,649.75. At $15,000 single the applied deduction is $15,000.00, not $16,100.00, because there is only $15,000 to subtract. Colorado tax and federal tax are both $0.00. Social Security is $930.00 and Medicare is $217.50, so the two-week headline is $532.79 and annual take-home is $13,852.50. At $210,000 single, paid monthly, Colorado tax is $8,531.60 on $193,900. Social Security has reached the $11,439.00 wage-base cap, Additional Medicare Tax is $90.00, and the monthly headline is $12,313.37. The state rate did not step up.'
    ],
    formula: 'Colorado taxable income = wages − 401(k) − 2026 federal standard deduction, not below zero\nThe federal standard deduction is $16,100 single or $32,200 joint, and the amount applied cannot exceed the income left after the 401(k)\nFederal tax uses the Rev. Proc. 2025-32 brackets on that same taxable income\nSocial Security = 6.2% of wages up to $184,500\nMedicare = 1.45% of wages, plus 0.9% above $200,000\nColorado tax = 4.40% of Colorado taxable income, rounded to the cent\nTake-home = wages − federal tax − Social Security − Medicare − Additional Medicare − Colorado tax − 401(k)\nDR 1098’s $5,500 or $11,000 subtraction is not used. Colorado additions and subtractions are not applied',
    formulaNotes: [
      'The 4.40% figure is the statutory rate after the earlier voter reduction to 4.40%, and it is the rate printed on the 2026 withholding worksheet. Tax year 2024 was temporarily 4.25%. This page does not use 4.25%. If a later TABOR certification lowered the 2026 rate, the tax here would be high by the difference in the rate times Colorado taxable income. On the $48,900 sample, each tenth of a percentage point is $48.90.',
      'Colorado additions can increase the tax. For 2026, a federal deduction for overtime has to be added back on the Colorado return. This form has no overtime field, so it does not add that back. The state sales tax is a different tax. Colorado’s statewide sales tax rate on the sales tax page is 2.90%, or $2.90 on $100 and a $102.90 total. That $2.90 is not withheld from the $2,009.84 paycheck.'
    ],
    examplesHeading: 'Worked Colorado paycheck examples',
    examples: [
      {
        title: '$65,000 single, no 401(k), beside Arizona',
        paragraphs: [
          'Salary 65000, single, 26 periods, deferral 0. The calculator shows $2,009.84 every two weeks. Colorado tax is $2,151.60 on $48,900.00 of taxable income. The federal standard deduction applied is $16,100.00. Federal tax is $5,620.00, Social Security is $4,030.00, Medicare is $942.50, and annual take-home is $52,255.90.',
          'Arizona on that wage shows $1,231.25 of state tax and $2,045.24 every two weeks. Annual take-home there is $53,176.25. The $920.35 difference is the state tax. Massachusetts shows $3,030.00 of state tax and $1,976.06 every two weeks. The federal and FICA lines are the common piece. The DR 1098 worksheet would withhold about $2,618.00 of Colorado tax on this wage, $466.40 more than the $2,151.60 return-style figure, because it subtracts $5,500 rather than $16,100. That $2,618.00 is not what this page prints.'
        ]
      },
      {
        title: 'The same wage with a $6,500 traditional 401(k)',
        paragraphs: [
          'Change only the deferral to 6500. Colorado tax falls to $1,865.60 and Colorado taxable income to $42,400.00. Federal tax falls to $4,840.00. The $6,500 deferral leaves the cheque. Annual take-home is $46,821.90, and the headline is $1,800.84 every two weeks. The state-tax saving is $286.00, which is 4.40% of $6,500. The federal saving is $780.00.',
          'A Roth amount should not be entered. It would reduce the headline without reducing the tax that will actually be assessed. A deferral above $24,500 is reduced to $24,500 before the 4.40% is applied. On a $65,000 wage, a $30,000 entry becomes $24,500, Colorado tax is $1,073.60, and the two-week headline is $1,222.07. The result says the entry was reduced.'
        ]
      },
      {
        title: 'A joint return, a $90,000 wage, and a wage under the deduction',
        paragraphs: [
          'Married filing jointly, the same $65,000, and no deferral, shows Colorado tax of $1,443.20 on $32,800.00, federal tax of $3,440.00, and $2,120.93 every two weeks. Annual take-home is $55,144.30. The deduction applied is $32,200.00. This is one wage on a joint return. A spouse’s wages need their own care with that deduction.',
          'At $90,000 single, Colorado tax is $3,251.60 and the two-week headline is $2,649.75. At $15,000 single, Colorado tax is $0.00 because the deduction uses the whole wage, federal tax is $0.00, and FICA is $1,147.50. The two-week headline is $532.79. The applied deduction prints as $15,000.00 even though the status line still names the $16,100 statutory amount. At $210,000 single, paid monthly, the rate is still 4.40% and the tax is $8,531.60. The monthly headline is $12,313.37, after the Social Security cap and $90.00 of Additional Medicare Tax.'
        ]
      }
    ],
    table: {
      heading: '2026 Colorado paycheck examples',
      caption: 'Each row is what this calculator displays. Federal tax uses the 2026 federal standard deduction and brackets. Colorado tax is 4.40% of that federal taxable income. The DR 1098 $5,500 and $11,000 worksheet subtractions are not used. A traditional 401(k) is subtracted.',
      headers: ['Wage', 'Colorado tax', 'Federal tax', 'Annual take-home', 'Pay-period headline'],
      rows: [
        ['$65,000 single, every two weeks', '$2,151.60', '$5,620.00', '$52,255.90', '$2,009.84'],
        ['$65,000 single, $6,500 401(k)', '$1,865.60', '$4,840.00', '$46,821.90', '$1,800.84'],
        ['$65,000 joint, every two weeks', '$1,443.20', '$3,440.00', '$55,144.30', '$2,120.93'],
        ['$90,000 single, every two weeks', '$3,251.60', '$10,970.00', '$68,893.40', '$2,649.75'],
        ['$15,000 single, every two weeks', '$0.00', '$0.00', '$13,852.50', '$532.79']
      ]
    },
    limitsHeading: 'What this Colorado estimate leaves out',
    limits: [
      'Colorado additions and subtractions are not computed. The 2026 overtime add-back, the pension and annuity subtraction, and the charitable and conservation adjustments can move taxable income off the federal figure this page uses. Itemizing on the federal return changes the federal taxable income that Colorado starts from. This page always subtracts the federal standard deduction, limited to the wage after the 401(k).',
      'DR 1098 withholding can exceed this annual estimate because the worksheet subtracts $5,500 or $11,000 instead of $16,100 or $32,200. On the $65,000 single sample that gap is $466.40 a year, and the worksheet tax is $2,618.00. A DR 0004 can change the worksheet inputs. This page does not read a W-4 or a DR 0004. The headline is the year divided by the number of pays.',
      'Health premiums, wage garnishments, and a Roth contribution are not fields. The 401(k) box is a traditional deferral capped at $24,500 for 2026. Catch-up contributions for older workers are not added on top of that cap. A second job can push Social Security over the wage base across employers while each employer still withholds the full 6.2%. This page sees one wage.',
      'Colorado’s 2.90% statewide sales tax is not income tax. On $100 it is $2.90 of tax and a $102.90 total. That $2.90 is not subtracted from the $2,009.84 paycheck. Local sales tax on top of 2.90% is not in either number unless you type a combined rate on the sales tax page. Arizona’s $1,231.25 and Massachusetts’s $3,030.00 are other states’ income taxes on the same $65,000 wage.'
    ],
    disclaimer: 'This Colorado paycheck estimate is general information for 2026, not a withholding calculation from an employer or an assessment from the Colorado Department of Revenue.',
    faqs: [
      {
        q: 'How much Colorado tax comes out of a $65,000 single wage in 2026?',
        a: 'With no 401(k), Colorado taxable income is $48,900 and the tax is $2,151.60, which is 4.40% of federal taxable income after the $16,100 standard deduction. Federal tax is $5,620.00, Social Security is $4,030.00, and Medicare is $942.50. Annual take-home is $52,255.90, or $2,009.84 every two weeks. Arizona on that wage is $1,231.25 of state tax and $2,045.24 every two weeks.'
      },
      {
        q: 'Does a traditional 401(k) reduce Colorado’s 4.40% tax?',
        a: 'Yes. A $6,500 deferral on $65,000 single cuts Colorado tax from $2,151.60 to $1,865.60. The $286.00 difference is 4.40% of $6,500. Federal tax falls from $5,620.00 to $4,840.00, and the two-week headline is $1,800.84. A Roth amount should not be typed in the box. An entry above $24,500 is cut to $24,500, and on this wage that capped tax is $1,073.60.'
      },
      {
        q: 'Why does DR 1098 withholding differ from this Colorado paycheck?',
        a: 'The 2026 worksheet subtracts $5,500 for a single filer who did not file Form DR 0004, then multiplies by 4.40%. This page subtracts the $16,100 federal standard deduction, which is how the return starts. The extra $10,600 in the worksheet base is $466.40 of tax, so worksheet withholding on $65,000 is $2,618.00 against this page’s $2,151.60. The $2,618.00 is not a line in the result.'
      },
      {
        q: 'What rate does this Colorado calculator use for 2026, and why not 4.25%?',
        a: '4.40%. That is the rate on DR 1098 dated 21 October 2025, and it is the rate the January 2026 income-tax guide lists for 2025 after the temporary 4.25% rate in 2024. The guide does not print a lower 2026 rate. A joint $65,000 wage is still 4.40%, on $32,800, which is $1,443.20. The rate does not change with filing status. The deduction does.'
      },
      {
        q: 'Why is Colorado income tax zero on a $15,000 wage?',
        a: 'The standard deduction cannot exceed the wage. On $15,000 the applied deduction is $15,000.00, Colorado taxable income is $0.00, and the tax is $0.00. Federal tax is $0.00. Social Security is $930.00 and Medicare is $217.50, so the two-week take-home is $532.79. The status line still names the $16,100 statutory deduction. There was not $16,100 of wages to subtract.'
      },
      {
        q: 'Is Colorado’s 2.90% sales tax withheld from this paycheck?',
        a: 'No. The 2.90% figure is the statewide sales tax rate on the sales tax page. On $100 it is $2.90 of tax and a $102.90 total. The $2,009.84 paycheck is federal income tax, Social Security, Medicare, and the 4.40% income tax. City and special-district sales tax is not in either number unless you type a combined rate on the sales tax page.'
      }
    ],
    relatedLinks: [
      { slug: 'arizona-paycheck-calculator', label: 'Arizona paycheck calculator for 2026', note: 'At $65,000 single, Arizona tax is $1,231.25 and the two-week headline is $2,045.24. The flat rate there is 2.5% after a $15,750 deduction. Colorado’s 4.40% result is $2,151.60 and $2,009.84.' },
      { slug: 'massachusetts-paycheck-calculator', label: 'Massachusetts paycheck calculator for 2026', note: 'The same wage is $3,030.00 of Massachusetts tax and $1,976.06 every two weeks. Massachusetts uses a $4,400 exemption and a 5% rate, plus a 4% surtax above $1,107,750.' },
      { slug: 'texas-paycheck-calculator', label: 'Texas paycheck calculator for 2026', note: 'The same federal and FICA structure with a state income tax of $0. Texas still has a statewide sales tax. Colorado’s wage tax is the 4.40% line.' },
      { slug: 'sales-tax-calculator', label: 'Sales tax calculator', note: 'Colorado’s statewide sales tax is 2.90%, or $2.90 on $100. That is not withheld from the $2,009.84 paycheck.' },
      { slug: '401k-contribution-calculator', label: '2026 401(k) contribution calculator', note: 'Check a deferral against the $24,500 limit. On this page the deferral reduces both federal income tax and the 4.40% Colorado tax.' },
      { slug: 'oregon-paycheck-calculator', label: 'Oregon paycheck calculator for 2026', note: 'At $65,000 single, Oregon tax is $5,113.38 after a $2,910 deduction and the two-week headline is $1,895.93. Colorado is $2,151.60 and $2,009.84. Oregon’s estimate does not subtract federal tax.' }
    ]
  },
  'massachusetts-paycheck-calculator': {
    title: 'Massachusetts Paycheck Calculator 2026 (5% plus 4% Surtax) | ClearCalc',
    h1: 'Massachusetts Paycheck Calculator for 2026',
    description: 'Estimate a 2026 Massachusetts paycheck after federal tax, the 5% wage tax, and the 4% surtax above $1,107,750. At $65,000 single, state tax is $3,030.00 and the two-week take-home is $1,976.06.',
    intro: [
      'This Massachusetts paycheck calculator estimates federal income tax, Social Security, Medicare, and Massachusetts income tax on a 2026 wage. Massachusetts taxes wages, which are Part B income, at 5%. There is no Massachusetts standard deduction. The personal exemption used here is $4,400 for a single filer and $8,800 for a married couple filing jointly, the statutory ceilings Mass.gov still published on 6 January 2026. A 4% surtax applies to taxable income above $1,107,750 for tax year 2026. Mass.gov lists that threshold, up from $1,083,150 in 2025. Only the slice above the threshold is surtaxed, so the combined rate on that slice is 9%, not 9% on the whole wage.',
      'The sample is $65,000, single, paid every two weeks, with no 401(k). Massachusetts taxable income is $60,600 after the $4,400 exemption. The 5% tax is $3,030.00. The surtax is $0.00 because $60,600 is far under $1,107,750. Federal tax is $5,620.00, Social Security is $4,030.00, and Medicare is $942.50. Annual take-home is $51,377.50, and the headline is $1,976.06 every two weeks. Colorado on that wage charges $2,151.60 at 4.40% and pays $2,009.84 every two weeks. Arizona charges $1,231.25 at 2.5% and pays $2,045.24. Federal tax and FICA match. The state lines do not.',
      'No Tax Status zeroes the Massachusetts tax when Massachusetts AGI from this wage is $8,000 or less for a single filer, or $16,400 or less for a joint return. Those are the Form 1 thresholds, without the extra $1,000 per dependent that a joint return can add. An $8,000 single wage has $3,600 of income after the exemption, and 5% of that would be $180.00, but No Tax Status applies and the tax is $0.00. The two-week headline is $284.15. One cent over the threshold, $8,000.01, loses No Tax Status. Taxable income is $3,600.01, the tax is $180.00, and the headline is $277.23. The Limited Income Credit, which can reduce tax for a single filer between $8,000 and $14,000 of AGI, is not applied.'
    ],
    steps: [
      'Enter annual gross wages in US dollars. The sample, 65000, is $65,000 for the year. Other income is not added. The 5% tax and the surtax see only this wage after the 401(k) and the personal exemption.',
      'Choose single or married filing jointly, and the pay frequency. The sample is single and every two weeks. Joint uses the $8,800 exemption on this one wage. A second salary should not claim that exemption again. The No Tax Status threshold for joint is $16,400 on this page, with no dependent add-on.',
      'Enter a traditional 401(k) deferral if you want it removed from both federal and Massachusetts income. The 2026 elective deferral cap is $24,500. A larger entry is cut back to that cap or to wages, whichever is smaller. A Roth contribution does not belong in the box.',
      'Press Calculate. The headline is one pay period of annual take-home. Massachusetts tax is split into the 5% amount and the 4% surtax. A wage under the No Tax Status threshold shows $0.00 even when the exemption has not used up the wage.'
    ],
    howHeading: 'How a 2026 Massachusetts paycheck is estimated',
    howItWorks: [
      'Massachusetts taxable income is the wage, minus the 401(k), minus the personal exemption, and not below zero. The exemption actually applied cannot exceed the income it is subtracted from. On $65,000 the full $4,400 comes off, leaving $60,600. Tax at 5% is $3,030.00. The surtax line is $0.00, and the note says taxable income is not above $1,107,750. Federal taxable income is a different subtraction: the wage minus the 401(k) minus the $16,100 federal standard deduction, which is $48,900, and federal tax is $5,620.00. Massachusetts does not use that $16,100 figure. Social Security is $4,030.00 and Medicare is $942.50. Additional Medicare Tax is $0.00. Those federal and FICA lines match Colorado and Arizona. The $3,030.00 state line is the Massachusetts piece.',
      'A traditional 401(k) reduces Massachusetts income on this page because a pre-tax deferral is excluded from Massachusetts wages the same way it is excluded from federal wages. A $6,500 deferral on $65,000 leaves $54,100 after the $4,400 exemption. The 5% tax is $2,705.00, which is $325.00 less. That $325.00 is 5% of $6,500. Federal tax falls from $5,620.00 to $4,840.00. Annual take-home is $45,982.50, and the headline is $1,768.56 every two weeks. The surtax is still $0.00. A Roth amount left in the box would understate both federal and Massachusetts tax.',
      'No Tax Status is applied to AGI before anyone should read the 5% line as the tax. AGI here is the wage minus the 401(k). At $8,000, AGI equals the $8,000 threshold, the exemption still prints as $4,400.00, and taxable income prints as $3,600.00, but the tax lines are $0.00 and the note says the 5% figure was not charged. Annual take-home is $7,388.00, which is the wage minus $496.00 of Social Security and $116.00 of Medicare. At $8,000.01 the note changes. Tax is $180.00, annual take-home is $7,208.01, and the two-week headline is $277.23. At $15,000 single, which is above both the No Tax Status threshold and the $14,000 top of the single Limited Income Credit range, Massachusetts tax is $530.00 on $10,600. Federal tax is $0.00. The two-week headline is $512.40 and annual take-home is $13,322.50.',
      'The surtax is the high-wage case. A $1,200,000 single wage, paid monthly, has taxable income of $1,195,600 after the $4,400 exemption. The 5% tax is $59,780.00. The amount above $1,107,750 is $87,850, and 4% of that is $3,514.00. Combined Massachusetts tax is $63,294.00. Federal tax is $394,000.25. Social Security is capped at $11,439.00. Medicare is $17,400.00 and Additional Medicare Tax is $9,000.00. Annual take-home is $704,866.75, and the monthly headline is $58,738.90. A joint $65,000 wage is nowhere near that threshold. It uses the $8,800 exemption, leaves $56,200, charges $2,810.00 at 5%, and shows $2,068.37 every two weeks. Annual take-home is $53,777.50. The surtax line is $0.00.'
    ],
    formula: 'Massachusetts AGI on this page = wages − traditional 401(k)\nNo Tax Status: tax is $0 when AGI is $8,000 or less single, or $16,400 or less joint\nOtherwise: taxable income = AGI − personal exemption, not below zero\nThe exemption is $4,400 single or $8,800 joint, and it cannot exceed AGI\n5% tax = 5% of taxable income, rounded to the cent\n4% surtax = 4% of taxable income above $1,107,750\nMassachusetts tax = the 5% tax + the surtax\nFederal tax uses the 2026 federal standard deduction and the Rev. Proc. 2025-32 brackets\nSocial Security = 6.2% of wages up to $184,500\nMedicare = 1.45% of wages, plus 0.9% above $200,000\nThe Limited Income Credit, dependent exemptions, and the rent deduction are not applied',
    formulaNotes: [
      'The $1,107,750 threshold is the tax-year 2026 figure on the Mass.gov surtax page. Tax year 2025 used $1,083,150. This page does not use the 2025 threshold. The surtax applies to Massachusetts taxable income, which for a wage-only estimate is the wage after the 401(k) and the personal exemption. Other Part A and Part C income on a real return can push a household over the threshold sooner.',
      'Massachusetts sales tax is not this income tax. The statewide sales tax rate on the sales tax page is 6.25%, or $6.25 on $100 and a $106.25 total. That $6.25 is not withheld from the $1,976.06 paycheck. Paid Family and Medical Leave and the employer’s EMAC are not subtracted. The $1,000 dependent exemption, the age-65 exemption, and the blindness exemption are not fields.'
    ],
    examplesHeading: 'Worked Massachusetts paycheck examples',
    examples: [
      {
        title: '$65,000 single, no 401(k), beside Colorado',
        paragraphs: [
          'Salary 65000, single, 26 periods, deferral 0. The calculator shows $1,976.06 every two weeks. Massachusetts tax is $3,030.00, all of it at 5%, on $60,600.00 of taxable income. The exemption applied is $4,400.00. The surtax is $0.00. Federal tax is $5,620.00, Social Security is $4,030.00, Medicare is $942.50, and annual take-home is $51,377.50.',
          'Colorado on that wage shows $2,151.60 of state tax and $2,009.84 every two weeks. Annual take-home there is $52,255.90. The $878.40 difference is the state tax: $3,030.00 minus $2,151.60. Arizona’s state tax on the same wage is $1,231.25 and the two-week headline is $2,045.24. The federal and FICA lines match. The 4% surtax does not appear at this wage.'
        ]
      },
      {
        title: 'A $6,500 deferral, and the $8,000 No Tax Status line',
        paragraphs: [
          'Change only the deferral to 6500 on the $65,000 single wage. Massachusetts tax falls to $2,705.00 and taxable income to $54,100.00. Federal tax falls to $4,840.00. Annual take-home is $45,982.50, and the headline is $1,768.56 every two weeks. The state-tax saving is $325.00, which is 5% of $6,500. The surtax remains $0.00. A Roth contribution should not be entered.',
          'Salary 8000, single, no deferral. Massachusetts tax is $0.00 even though taxable income is $3,600.00. The note says No Tax Status applies and the 5% figure was not charged. Social Security is $496.00, Medicare is $116.00, and the two-week headline is $284.15. Salary 8000.01 loses that status. Tax is $180.00, taxable income is $3,600.01, and the headline is $277.23. The Limited Income Credit is not what creates either result. It is not in the formula.'
        ]
      },
      {
        title: 'A joint return, a $15,000 wage, and the surtax at $1,200,000',
        paragraphs: [
          'Married filing jointly, the same $65,000, and no deferral, shows Massachusetts tax of $2,810.00 on $56,200.00, federal tax of $3,440.00, and $2,068.37 every two weeks. Annual take-home is $53,777.50. The exemption applied is $8,800.00. The surtax is $0.00. This is one wage on a joint return. The $16,400 No Tax Status threshold is not close.',
          'At $15,000 single, Massachusetts tax is $530.00 on $10,600.00 and the two-week headline is $512.40. Federal tax is $0.00. At $1,200,000 single, paid monthly, the 5% tax is $59,780.00 and the 4% surtax is $3,514.00, for $63,294.00 combined. Taxable income is $1,195,600.00, which is $87,850 over $1,107,750. The monthly headline is $58,738.90. The 9% combined rate applies only to that $87,850, not to the whole $1,200,000.'
        ]
      }
    ],
    table: {
      heading: '2026 Massachusetts paycheck examples',
      caption: 'Each row is what this calculator displays. The 5% tax and the 4% surtax are added in the state-tax column. No Tax Status zeroes the $8,000 row. The Limited Income Credit is not included. A traditional 401(k) is subtracted.',
      headers: ['Wage', 'Massachusetts tax', 'Of which surtax', 'Federal tax', 'Pay-period headline'],
      rows: [
        ['$65,000 single, every two weeks', '$3,030.00', '$0.00', '$5,620.00', '$1,976.06'],
        ['$65,000 single, $6,500 401(k)', '$2,705.00', '$0.00', '$4,840.00', '$1,768.56'],
        ['$65,000 joint, every two weeks', '$2,810.00', '$0.00', '$3,440.00', '$2,068.37'],
        ['$8,000 single, every two weeks', '$0.00', '$0.00', '$0.00', '$284.15'],
        ['$1,200,000 single, monthly', '$63,294.00', '$3,514.00', '$394,000.25', '$58,738.90']
      ]
    },
    limitsHeading: 'What this Massachusetts estimate leaves out',
    limits: [
      'The Limited Income Credit is not computed. A single filer with Massachusetts AGI between $8,000 and $14,000 may pay less than the straight 5% this page charges once No Tax Status has ended. At $15,000 the wage is above that band, and the $530.00 result is the 5% tax on $10,600. A $10,000 single wage is inside the band this page ignores, so the straight 5% figure can overstate the tax a return would assess after the credit.',
      'Dependent exemptions of $1,000, the age-65 exemption, the blindness exemption, the rental deduction, and commuting and other Massachusetts deductions are not fields. The joint No Tax Status threshold does not grow by $1,000 per dependent. Paid Family and Medical Leave premiums are not subtracted. A real pay stub can be lower for that reason alone.',
      'The surtax threshold is $1,107,750 of Massachusetts taxable income for 2026, not of gross wages, and not the 2025 threshold of $1,083,150. Other income can cross it while this wage-only form still shows a $0.00 surtax. The $1,200,000 example crosses it on the wage itself, by $87,850 after the $4,400 exemption, and the surtax is $3,514.00.',
      'Health premiums, garnishments, and a Roth contribution are not fields. The 401(k) box is a traditional deferral capped at $24,500 for 2026. Catch-up contributions are not added. A second job can push Social Security over the wage base across employers. Massachusetts’s 6.25% sales tax, $6.25 on $100, is not withheld from the $1,976.06 paycheck. Colorado’s $2,151.60 and Arizona’s $1,231.25 are other states’ income taxes on the same $65,000 wage.'
    ],
    disclaimer: 'This Massachusetts paycheck estimate is general information for 2026, not a withholding calculation from an employer or an assessment from the Massachusetts Department of Revenue.',
    faqs: [
      {
        q: 'How much Massachusetts tax comes out of a $65,000 single wage in 2026?',
        a: 'With no 401(k), taxable income is $60,600 and the tax is $3,030.00, which is 5% of wages after the $4,400 exemption. The 4% surtax is $0.00. Federal tax is $5,620.00, Social Security is $4,030.00, and Medicare is $942.50. Annual take-home is $51,377.50, or $1,976.06 every two weeks. Colorado on that wage is $2,151.60 of state tax and $2,009.84 every two weeks.'
      },
      {
        q: 'When does the Massachusetts 4% surtax show up on this paycheck?',
        a: 'Only when taxable income exceeds $1,107,750, the tax-year 2026 threshold. A $65,000 wage does not. A $1,200,000 single wage has taxable income of $1,195,600, so the 5% tax is $59,780.00 and the surtax is $3,514.00, which is 4% of the $87,850 above the threshold. Combined state tax is $63,294.00 and the monthly headline is $58,738.90. The 9% rate is not applied to the whole wage.'
      },
      {
        q: 'Why is Massachusetts tax zero at $8,000 and $180.00 at $8,000.01?',
        a: 'No Tax Status applies when single AGI is $8,000 or less. The $8,000 wage still has $3,600.00 of income after the $4,400 exemption, but the tax is $0.00 and the two-week headline is $284.15. At $8,000.01, No Tax Status drops away. Taxable income is $3,600.01, the 5% tax is $180.00, and the headline is $277.23. The Limited Income Credit is not applied on either side of that line.'
      },
      {
        q: 'Does a traditional 401(k) reduce the Massachusetts 5% tax?',
        a: 'Yes. A $6,500 deferral on $65,000 single cuts Massachusetts tax from $3,030.00 to $2,705.00. The $325.00 difference is 5% of $6,500. Federal tax falls from $5,620.00 to $4,840.00, and the two-week headline is $1,768.56. A Roth amount should not be typed in the box. The surtax does not appear at either of those wages.'
      },
      {
        q: 'What personal exemption does this Massachusetts paycheck use?',
        a: '$4,400 single and $8,800 married filing jointly. Those are the statutory ceilings Mass.gov published as of 6 January 2026. There is no Massachusetts standard deduction, and the federal $16,100 deduction is used only for the federal tax. On a joint $65,000 wage the $8,800 exemption leaves $56,200 taxed at 5%, which is $2,810.00, and the two-week headline is $2,068.37.'
      },
      {
        q: 'Is the 6.25% Massachusetts sales tax withheld from this paycheck?',
        a: 'No. The 6.25% figure is the statewide sales tax rate on the sales tax page. On $100 it is $6.25 of tax and a $106.25 total. The $1,976.06 paycheck is federal income tax, Social Security, Medicare, and the 5% income tax. Paid Family and Medical Leave is not in that paycheck either.'
      }
    ],
    relatedLinks: [
      { slug: 'colorado-paycheck-calculator', label: 'Colorado paycheck calculator for 2026', note: 'At $65,000 single, Colorado tax is $2,151.60 at 4.40% and the two-week headline is $2,009.84. Massachusetts is $3,030.00 and $1,976.06. Colorado has no million-dollar surtax on this site.' },
      { slug: 'arizona-paycheck-calculator', label: 'Arizona paycheck calculator for 2026', note: 'The same wage is $1,231.25 of Arizona tax at 2.5% and $2,045.24 every two weeks. Arizona’s deduction is $15,750. Massachusetts uses a $4,400 exemption and a 5% rate.' },
      { slug: 'new-york-paycheck-calculator', label: 'New York paycheck calculator for 2026', note: 'New York State tax, and optional New York City resident tax, on a different bracket table. It is not the Massachusetts 5% flat rate.' },
      { slug: 'sales-tax-calculator', label: 'Sales tax calculator', note: 'Massachusetts statewide sales tax is 6.25%, or $6.25 on $100. That is not withheld from the $1,976.06 paycheck.' },
      { slug: '401k-contribution-calculator', label: '2026 401(k) contribution calculator', note: 'Check a deferral against the $24,500 limit. On this page the deferral reduces both federal income tax and the 5% Massachusetts tax.' },
      { slug: 'minnesota-paycheck-calculator', label: 'Minnesota paycheck calculator for 2026', note: 'At $65,000 single, Minnesota tax is $2,896.61 after a $15,300 deduction and the two-week headline is $1,981.19. Massachusetts is $3,030.00 and $1,976.06.' }
    ]
  },
  'act-stamp-duty-calculator': {
    title: 'ACT Stamp Duty Calculator (2026–27 Conveyance Duty) | ClearCalc',
    h1: 'ACT Stamp Duty Calculator',
    description: 'Estimate Australian Capital Territory conveyance duty for 2026–27. An $800,000 owner-occupier pays $22,158.00. An investor pays $25,150.00. An eligible home buyer from 1 July 2026 pays $0.00.',
    intro: [
      'This ACT stamp duty calculator applies the non-commercial conveyance-duty scales in the Duties Act 1999, the scales the ACT Revenue Office publishes for transactions from 1 July 2025 and the 2026–27 instrument keeps unchanged. Owner-occupiers pay $0.28 per $100 up to $260,000, then a published base plus a rate per $100, or part of $100, through $1,455,000. Buyers who are not eligible owner-occupiers pay a higher scale that starts at $1.20 per $100 up to $200,000. Above $1,455,000 both scales charge a flat $4.54 per $100 of the whole dutiable value. The sample is an $800,000 home on the owner-occupier scale. Duty is $22,158.00. That is $19,208 plus $5.90 for each of the 500 hundreds in the $50,000 above $750,000. It is not 5.90% of the whole price.',
      'From $260,000 through $1,455,000 the investor scale is exactly $2,992.00 higher than the owner-occupier scale. The marginal rates match, and the gap at $260,000 is $3,720.00 minus $728.00. An $800,000 investor therefore pays $25,150.00, which is $22,158.00 plus $2,992.00. At $580,000 the owner-occupier duty is $11,864.00 and the investor duty is $14,856.00. The $14,856 figure is the investor amount in the instrument’s worked example. The owner amount is $8,408 plus $4.32 on each of 800 hundreds, which is $8,408 plus $3,456, or $11,864. A figure of $11,128 on that price used $3.40, the rate from the band below, on the $80,000 slice. The $500,001 to $750,000 band is $4.32.',
      'The Home Buyer Concession Scheme, for a contract on or after 1 July 2026, charges $0.00 at any price. The ACT Revenue Office says the property-value cap and the income test were removed on that date. The same $800,000 with that buyer selected is $0.00, against $22,158.00 on the owner-occupier scale and $25,150.00 on the investor scale. A contract before 1 July 2026 used a $1,020,000 cap and a maximum concession of $35,238. This page does not apply that older concession. Age, the five-year prior-ownership test, and the requirement to live in the home are not checked. Tasmania’s general duty on a $550,000 home is $20,372.50. South Australia’s general duty on a $600,000 home is $26,830.00. ACT owner-occupier duty on $600,000 is $12,728.00. The statutes are not interchangeable.'
    ],
    steps: [
      'Enter the dutiable value in Australian dollars. The sample, 800000, is $800,000. Any chattels the ACT Revenue Office includes in dutiable value have to be in the number you type. This form does not add them.',
      'Choose the buyer. Owner-occupier uses the lower scale and does not apply the Home Buyer Concession. Investor uses the non-owner-occupier scale. The Home Buyer Concession choice zeroes duty at any price above zero and says the contract is on or after 1 July 2026.',
      'Press Calculate. The headline is the duty for the buyer you chose. The owner-occupier duty and the investor duty at the same value are both listed, so the $2,992.00 gap can be read without a second calculation. A value over $1,455,000 uses the flat $4.54 rate for both of those scales.',
      'Check the buyer note. A $0.00 result on a positive price means the Home Buyer Concession was selected. It does not mean the owner-occupier scale was zero. At $800,000 that scale is $22,158.00.'
    ],
    howHeading: 'How ACT conveyance duty is calculated',
    howItWorks: [
      'Each band charges a published base plus a rate per $100, or part, of the excess over the band’s floor. The bases are the duty at the top of the previous band. Owner-occupier duty at $260,000 is $728.00, which is $0.28 times 2,600 hundreds. At $300,000 it is $1,608.00. At $500,000 it is $8,408.00. At $750,000 it is $19,208.00. At $1,000,000 it is $33,958.00. At $1,455,000 it is $63,078.00, which is $33,958 plus $6.40 times the 4,550 hundreds between $1,000,000 and $1,455,000. The investor bases at those same points are $2,400, $4,600, $11,400, $22,200, $36,950, and $66,070. From $260,000 up, each investor base is $2,992.00 above the owner-occupier base, and the marginal rate in each later band is the same, so the gap stays $2,992.00 until the flat rate.',
      'The “or part” rule is why a price that is not a round hundred can cost a full extra step. $500,000 on the owner-occupier scale is $8,408.00. $500,000.01 is $8,412.32, because one cent over $500,000 is one part of $100 at $4.32. The investor duty at $500,000.01 is $11,404.32, still $2,992.00 higher. $1,455,000 is the last dollar of the marginal scale: $63,078.00 for an owner-occupier and $66,070.00 for an investor. One cent more, $1,455,000.01, leaves both scales and uses $4.54 per $100, or part, of the whole value. Both headlines become $66,061.54. The owner-occupier discount disappears, and the duty jumps by $2,983.54 from the $63,078.00 that $1,455,000 itself would pay. The Home Buyer Concession does not follow that jump. It stays $0.00 on both prices.',
      'The concession replaces duty with zero. It does not create a partial reduction inside a band, and it does not depend on the $1,020,000 cap that applied from 1 July 2025 to 30 June 2026. $800,000, $1,455,000, and $1,455,000.01 are all $0.00 when that buyer is selected. The form says the age test, the five-year prior-ownership test, and the one-year residence test are not checked. Selecting investor and hoping for the concession does not zero the duty. At $800,000 the investor headline stays $25,150.00, and the note says the concession was not applied. A dutiable value of $0.00 is $0.00 for every buyer, and the note says the buyer choice is not what zeroed it.',
      'Tasmania’s $20,372.50 on a $550,000 general transfer, and the $0.00 Tasmanian exemption that required a settlement on or before 30 June 2026, are a different Act. South Australia’s $26,830.00 on a $600,000 general transfer is another. ACT owner-occupier duty at $600,000 is $12,728.00, and investor duty is $15,720.00. The $2,992.00 gap is the same gap as at $800,000. Western Australia’s first-home concession is not this $0.00 rule. A foreign-purchaser surcharge is not added, because this page does not model one on top of the ACT scales.'
    ],
    formula: 'Owner-occupier, per $100 or part:\n$0.28 up to $260,000\n$728 plus $2.20 over $260,000, up to $300,000\n$1,608 plus $3.40 over $300,000, up to $500,000\n$8,408 plus $4.32 over $500,000, up to $750,000\n$19,208 plus $5.90 over $750,000, up to $1,000,000\n$33,958 plus $6.40 over $1,000,000, up to $1,455,000\nInvestor: $1.20 up to $200,000, then $2,400 plus $2.20, $4,600 plus $3.40, $11,400 plus $4.32, $22,200 plus $5.90, and $36,950 plus $6.40 on the same upper thresholds\nAbove $1,455,000, both scales: $4.54 per $100 or part of the whole value\nHome Buyer Concession from 1 July 2026: duty $0 at any positive price\nA value of $0 is $0 for every buyer',
    formulaNotes: [
      'The $2,992.00 investor gap is $3,720.00 minus $728.00, and it holds at every value from $260,000 through $1,455,000 because the marginal rates match. It does not hold above $1,455,000, where both pay the flat rate, and it does not hold at $200,000, where owner-occupier duty is still on the $0.28 rate. $200,000 of owner-occupier duty is $560.00. Investor duty at $200,000 is $2,400.00.',
      'A flat 4.32% of $580,000 would be $25,056.00. The scale does not charge that. It charges $8,408.00 plus $4.32 on the $80,000 above $500,000, which is $11,864.00 for an owner-occupier. Marginal rates are not effective rates. The Home Buyer Concession is not a percentage of either figure. It is zero, or it is not applied.'
    ],
    examplesHeading: 'Worked ACT duty examples',
    examples: [
      {
        title: '$800,000 as an owner-occupier, an investor, and a home buyer',
        paragraphs: [
          'Price 800000, owner-occupier. The calculator shows $22,158.00. That is $19,208.00 plus $5.90 times 500 hundreds. Investor duty at the same value is listed as $25,150.00. The $2,992.00 gap is the standing difference, not a second rate on the $50,000 slice. A flat 5.90% of $800,000 would be $47,200.00, which overstates this result by $24,042.00.',
          'Choose the investor on the same price and the headline is $25,150.00. The note says the Home Buyer Concession was not applied. Choose the concession and the headline is $0.00. The owner-occupier line still prints $22,158.00 so the duty given up is visible. The note says age, the five-year prior-ownership test, and the residence test are not checked, and that a contract before 1 July 2026 is not this result.'
        ]
      },
      {
        title: '$580,000, the $500,000.01 part-of-$100 step, and the $1,455,000 line',
        paragraphs: [
          'Price 580000, owner-occupier. The headline is $11,864.00. Investor duty at that value is $14,856.00. The owner figure is $8,408 plus $3,456. Using $3.40 on the $80,000 instead of $4.32 produces $11,128, which is the band below and is not this scale. The investor $14,856.00 is $11,400 plus the same $3,456.',
          'Price 500000.01, owner-occupier, is $8,412.32, one $4.32 part above the $8,408.00 due on $500,000. Price 1455000, owner-occupier, is $63,078.00. Investor duty at that exact price is $66,070.00. Price 1455000.01 is $66,061.54 for both the owner-occupier and the investor, because the flat $4.54 rate replaces both marginal scales. The concession on $1,455,000.01 remains $0.00. One cent changes the ordinary scales. It does not bring the pre-July 2026 cap back.'
        ]
      },
      {
        title: 'A $600,000 comparison, and a zero value',
        paragraphs: [
          'Price 600000, owner-occupier, is $12,728.00. Investor duty is $15,720.00. The gap is again $2,992.00. Tasmania’s general duty at $600,000 is $22,497.50. South Australia’s general duty at $600,000 is $26,830.00. An eligible South Australian first buyer of a new home can pay $0.00 under that state’s rule. The ACT $0.00 result is the Home Buyer Concession from 1 July 2026, which is a different test and has no price cap on this page.',
          'Price 0, on any buyer, is $0.00. The note says a dutiable value of zero has no conveyance duty and the buyer choice is not what zeroed the result. The concession note, including the five-year ownership test, is reserved for a positive price. Do not read a zero price as proof that a buyer qualified.'
        ]
      }
    ],
    table: {
      heading: 'ACT conveyance duty at the prices used on this page',
      caption: 'Each row is what this calculator displays for 2026–27. The owner-occupier and investor scales are unchanged from 1 July 2025. The $0.00 rows are the Home Buyer Concession for a contract on or after 1 July 2026. The $2,992.00 investor gap holds through $1,455,000 and disappears on the flat rate.',
      headers: ['Dutiable value', 'Buyer', 'Duty', 'Owner-occupier scale', 'Investor scale'],
      rows: [
        ['$800,000', 'Owner-occupier', '$22,158.00', '$22,158.00', '$25,150.00'],
        ['$800,000', 'Investor', '$25,150.00', '$22,158.00', '$25,150.00'],
        ['$800,000', 'Home Buyer Concession', '$0.00', '$22,158.00', '$25,150.00'],
        ['$580,000', 'Owner-occupier', '$11,864.00', '$11,864.00', '$14,856.00'],
        ['$600,000', 'Owner-occupier', '$12,728.00', '$12,728.00', '$15,720.00'],
        ['$1,455,000', 'Owner-occupier', '$63,078.00', '$63,078.00', '$66,070.00'],
        ['$1,455,000.01', 'Owner-occupier', '$66,061.54', '$66,061.54', '$66,061.54']
      ]
    },
    limitsHeading: 'What this ACT duty estimate leaves out',
    limits: [
      'The ACT Revenue Office assesses duty from the documents, and a dutiable value can include chattels or can be a substituted value. The number you type is taken as that value. A contract price that is not the dutiable value will not match the assessment. The transaction date is the date the agreement is made, which is usually exchange, not settlement. This page does not compute interest on a late payment.',
      'The Home Buyer Concession from 1 July 2026 is $0.00 only for an eligible buyer. The buyer must be an individual at least 18, must meet the prior-property test, and must live in the home. From 1 July 2024 that prior-property test looks back five years, including property outside the ACT. Income is not tested for a contract on or after 1 July 2026. A company, a trustee, or a partnership cannot use the result this page prints as $0.00. A contract exchanged before 1 July 2026 is the older concession, capped at $1,020,000 with a $35,238 maximum reduction, and this form will not compute that partial duty.',
      'Owner-occupier duty is the lower scale only if the residence requirement is met: at least one buyer lives in the home for a year, starting within a year of completion. This page does not check that either. Choosing owner-occupier on a rental purchase understates the duty by $2,992.00 at every price from $260,000 through $1,455,000. Commercial property uses a different threshold and is not this calculator. The flat $4.54 rate above $1,455,000 is the non-commercial rate. It is not a commercial assessment.',
      'Tasmania, South Australia, New South Wales, Victoria, Queensland, and Western Australia use their own scales and their own first-home rules. ACT owner-occupier duty of $12,728.00 on $600,000 is not Tasmania’s $22,497.50 and not South Australia’s $26,830.00. A $0.00 ACT result is not the Tasmanian exemption that ended for settlements after 30 June 2026. Amounts are Australian dollars.'
    ],
    disclaimer: 'This ACT duty figure applies the published 2026–27 non-commercial scales to a dutiable value you enter. It is not an assessment by the ACT Revenue Office.',
    faqs: [
      {
        q: 'How much is ACT conveyance duty on an $800,000 home?',
        a: '$22,158.00 on the owner-occupier scale. That is $19,208.00 plus $5.90 for each $100 of the $50,000 above $750,000. It is not 5.90% of $800,000, which would be $47,200.00. An investor pays $25,150.00, exactly $2,992.00 more. An eligible home buyer with a contract on or after 1 July 2026 pays $0.00.'
      },
      {
        q: 'Why is investor duty exactly $2,992 higher from $260,000 to $1,455,000?',
        a: 'Because the marginal rates match and the bases differ by $3,720.00 minus $728.00. At $580,000 the two duties are $14,856.00 and $11,864.00. At $600,000 they are $15,720.00 and $12,728.00. At $1,455,000 they are $66,070.00 and $63,078.00. Above $1,455,000 both pay the flat rate, so $1,455,000.01 is $66,061.54 either way. The gap is not a separate surcharge.'
      },
      {
        q: 'Who pays no ACT stamp duty from 1 July 2026?',
        a: 'An eligible buyer under the Home Buyer Concession Scheme, on a contract dated on or after 1 July 2026, pays $0.00 at any price. This page returns that zero when the concession is selected, including at $800,000 and at $1,455,000.01. It does not check age, the five-year prior-ownership test, or the residence test. A contract before 1 July 2026 used a $1,020,000 cap and is not this result.'
      },
      {
        q: 'Why is owner-occupier duty on $580,000 equal to $11,864 rather than $11,128?',
        a: '$11,864.00 is $8,408 plus $4.32 on each of the 800 hundreds above $500,000. $11,128 is what you get by using $3.40, the rate from the previous band, on that $80,000. The published $500,001 to $750,000 rate is $4.32. Investor duty at the same price is $14,856.00, which is $11,400 plus the same $3,456.'
      },
      {
        q: 'What does one cent over $1,455,000 do to ACT duty?',
        a: 'It leaves the marginal scale. Owner-occupier duty at $1,455,000 is $63,078.00. At $1,455,000.01 both the owner-occupier and the investor pay $66,061.54, which is $4.54 per $100, or part, of the whole value. The owner-occupier discount is gone. Separately, one cent over $500,000 adds one $4.32 part: $500,000.01 is $8,412.32 rather than $8,408.00. The Home Buyer Concession stays $0.00 on both sides of $1,455,000.'
      },
      {
        q: 'Is ACT duty on a $600,000 home the same as South Australia or Tasmania?',
        a: 'No. ACT owner-occupier duty at $600,000 is $12,728.00, and investor duty is $15,720.00. Tasmania’s general duty at $600,000 is $22,497.50. South Australia’s general duty is $26,830.00. An ACT home-buyer concession of $0.00 from 1 July 2026 is also a different rule from Tasmania’s established-home exemption, which did not apply to a settlement after 30 June 2026.'
      }
    ],
    relatedLinks: [
      { slug: 'tasmania-stamp-duty-calculator', label: 'Tasmania stamp duty calculator', note: 'General duty at $550,000 is $20,372.50, and at $600,000 it is $22,497.50. ACT owner-occupier duty at $600,000 is $12,728.00. The Tasmanian $0.00 exemption did not survive a settlement after 30 June 2026.' },
      { slug: 'south-australia-stamp-duty-calculator', label: 'South Australia stamp duty calculator', note: 'General duty at $600,000 is $26,830.00, against $12,728.00 on the ACT owner-occupier scale. An eligible South Australian first buyer of a new home pays $0.00 with no price cap, under that state’s rule.' },
      { slug: 'nsw-stamp-duty-calculator', label: 'NSW stamp duty calculator', note: 'New South Wales transfer duty, including first-home concessions and a foreign surcharge. It is not the ACT $0.28 owner-occupier rate or the $2,992.00 investor gap.' },
      { slug: 'australia-take-home-pay-calculator', label: 'Australia take-home pay calculator for 2026–27', note: 'Resident income tax and the Medicare levy on a salary. It is not the conveyance duty on a home in Canberra.' },
      { slug: 'northern-territory-stamp-duty-calculator', label: 'Northern Territory stamp duty calculator', note: 'A $500,000 purchase is $23,928.60 under the Schedule 1 formula. A $750,000 purchase is $37,125.00 at 4.95%. There is no first-home duty exemption on that scale. The ACT home-buyer concession is a different statute.' }
    ]
  }
};
