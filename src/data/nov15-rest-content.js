import { nov15Page as page } from './nov15-page.js';

export const nov15RestContent = {
  'pregnancy-date-calculator': page({
    slug: 'pregnancy-date-calculator',
    title: 'Pregnancy Date Calculator | ClearCalc',
    h1: 'Pregnancy Date Calculator',
    description: 'A conception date of 2026-01-01 is due 2026-09-24, which is 266 days later. Due-date mode counts 266 days backward. An ultrasound uses 280 minus the age in days. A day-5 IVF transfer uses 261 days.',
    intro: [
      'This page dates a pregnancy from conception, from a due date you already have, from an ultrasound age, or from an IVF transfer. A conception date of 2026-01-01 produces the due date 2026-09-24. That span is 266 days. The 266-day count is 280 days minus the 14 days often taken from a last menstrual period to ovulation.',
      'Due-date mode reverses the same count. Enter 2026-09-24 and the headline is the conception estimate 2026-01-01, 266 days earlier. Ultrasound mode starts at the scan date and adds 280 minus the age in days. Eight completed weeks and 0 extra days is 56 days, so a scan on 2026-03-12 is due 2026-10-22, which is 224 days after the scan. A day-5 transfer is treated as conception plus 5 days, so the due date is 261 days after the transfer. A transfer on 2026-01-01 is due 2026-09-19.',
      'The pregnancy due date calculator remains Naegele’s count from a last menstrual period: last period plus 280 days plus the cycle length minus 28. A last period of 2026-01-01 and a 28-day cycle is due 2026-10-08 on that page. A conception date of 2026-01-15 on this page is also due 2026-10-08, because 15 January is 14 days after that period. The two pages meet on that one calendar path. They answer different questions the rest of the time.',
      'A clinic scan, a later ultrasound, and a birth can all fall on another day. The headline is a calendar estimate. It is not a due date a clinician assigned.'
    ],
    steps: [
      'Choose conception, a due date, an ultrasound age, or an IVF transfer. The sample is conception.',
      'Enter that date as YYYY-MM-DD. The sample is 2026-01-01.',
      'For an ultrasound, enter completed weeks from 0 to 42 and extra days from 0 to 6. For IVF, choose a day-3 or day-5 embryo. Those boxes are unused in conception mode.',
      'Press Calculate. Conception mode and the ultrasound and IVF modes print a due date. Due-date mode prints a conception date.'
    ],
    howHeading: 'How each pregnancy anchor is counted',
    howItWorks: [
      'Conception mode adds 266 days to the date you type. Due-date mode subtracts 266 days. Both use UTC calendar days, so a date line does not shift because of a local time zone. The day count is exact: 2026-01-01 plus 266 days lands on 2026-09-24, and 2026-09-24 minus 266 days lands on 2026-01-01.',
      'Ultrasound mode converts completed weeks and extra days into one age: weeks times 7, plus the extra days. The due date is the scan date plus 280 minus that age. An age of 0 would add the full 280 days. An age of 280 days would leave the scan date itself as the due date. The form stops the weeks box at 42, so the age you can type stays inside a pregnancy-length range.',
      'IVF mode subtracts the embryo day from 266. A day-5 embryo uses 261 days after the transfer. A day-3 embryo uses 263 days. The embryo box accepts only those two ages. The transfer date is the date the embryo was transferred, not a retrieval date and not a last period.',
      'Naegele’s rule stays on the pregnancy due date calculator, including the adjustment for a cycle that is not 28 days and the gestational-age lines counted from the last period. This page does not ask for a cycle length. Typing a last period into the conception box would run the wrong anchor.'
    ],
    formula: 'Conception mode: due date = conception date + 266 days\nDue-date mode: conception = due date − 266 days\nUltrasound: due date = scan date + (280 − age in days)\nAge in days = completed weeks × 7 + extra days\nIVF: due date = transfer date + (266 − embryo day)\nA day-5 transfer uses 261 days. A day-3 transfer uses 263 days.\n266 = 280 − 14',
    formulaNotes: [
      '2026-01-01 plus 266 days is 2026-09-24. The same due date run backward is 2026-01-01. A day-5 transfer on 2026-01-01 is 2026-09-19, five days earlier than the conception result, because 266 − 5 = 261.',
      'A scan on 2026-03-12 at 8 weeks and 0 days has an age of 56 days. 280 − 56 = 224, and 2026-03-12 plus 224 days is 2026-10-22. Conception on 2026-01-15, fourteen days after a 2026-01-01 last period, is due 2026-10-08, the Naegele date for a 28-day cycle on the other page.'
    ],
    examplesHeading: 'Worked pregnancy date examples',
    samples: [
      { title: 'Conception on 2026-01-01', overrides: {}, blurb: 'The date is a conception date. Adding 266 days reaches 2026-09-24. The 14 days that separate 266 from 280 are the usual gap from a last period to ovulation, and they are already removed in this mode.' },
      { title: 'Due date 2026-09-24, solved for conception', overrides: { mode: 2, date: '2026-09-24' }, blurb: 'Due-date mode subtracts 266 days. The headline is 2026-01-01, the conception estimate, not another due date. A last-period calculation remains on the pregnancy due date calculator.' },
      { title: 'Ultrasound on 2026-03-12 at 8 weeks 0 days', overrides: { mode: 3, date: '2026-03-12', weeks: 8, days: 0 }, blurb: 'The age is 8 × 7 + 0 = 56 days. The due date counts 280 − 56 = 224 days forward from the scan, which is 2026-10-22. The weeks and days boxes are the age on the scan date, not a last period.' },
      { title: 'Day-5 transfer on 2026-01-01', overrides: { mode: 4, date: '2026-01-01', embryo: 5 }, blurb: 'A day-5 embryo is treated as five days past conception, so the added span is 266 − 5 = 261 days. The due date is 2026-09-19. A day-3 embryo on the same transfer date would use 263 days and fall on 2026-09-21.' }
    ],
    table: {
      heading: 'Four anchors on the pregnancy date page',
      caption: 'Each headline is this calculator. Conception, ultrasound, and IVF print a due date. Due-date mode prints a conception date.',
      headers: ['Anchor', 'Headline']
    },
    limitsHeading: 'What this pregnancy calendar leaves out',
    limits: [
      'It is not a clinician’s due date. An IVF clinic protocol, a dating scan, and the day of birth can disagree with a fixed day count.',
      'It does not apply Naegele’s rule to a last menstrual period. That count, including a cycle other than 28 days, is the pregnancy due date calculator. This page has no cycle-length box.',
      'Ultrasound mode uses the age you type. It does not read a crown-rump length or a later growth measurement. Extra days must be a whole number from 0 to 6, and completed weeks must be a whole number from 0 to 42.',
      'IVF mode accepts a day-3 or day-5 embryo only. A fresh or frozen label, a retrieval date, and a trigger date are not separate inputs. The transfer date and the embryo day are the whole calculation.'
    ],
    disclaimer: 'This is a calendar estimate from the anchor you choose. It is not a due date a clinician assigned and it is not prenatal care.',
    faqs: [
      { q: 'What due date does a conception date of 2026-01-01 give?', a: '2026-09-24. Conception mode adds 266 days. That is 280 days minus 14, the gap often used between a last period and ovulation.' },
      { q: 'How does pregnancy due-date mode find a conception date?', a: 'It subtracts 266 days from the due date you type. A due date of 2026-09-24 returns 2026-01-01. The pregnancy due date calculator is the page that starts from a last menstrual period.' },
      { q: 'How does the ultrasound mode turn an age into a due date?', a: 'It converts the age to days, completed weeks times 7 plus extra days, then adds 280 minus that age to the scan date. A scan on 2026-03-12 at 8 weeks and 0 days is an age of 56 days and a due date of 2026-10-22.' },
      { q: 'Why is a day-5 IVF transfer 261 days, not 266?', a: 'The page treats the embryo as already 5 days past conception, and 266 − 5 = 261. A day-5 transfer on 2026-01-01 is due 2026-09-19. A day-3 transfer uses 263 days.' },
      { q: 'Is the pregnancy date calculator a clinician’s due date?', a: 'No. It is a day count from one anchor you type. The existing pregnancy due date page remains Naegele’s count from a last period. Neither page replaces a dating decision made in clinic.' }
    ],
    relatedLinks: [
      { slug: 'pregnancy-due-date-calculator', label: 'Pregnancy due date calculator', note: 'Naegele’s count from a last menstrual period. A period of 2026-01-01 and a 28-day cycle is due 2026-10-08. This page does not start from a last period.' }
    ]
  }),

  'army-body-fat-calculator': page({
    slug: 'army-body-fat-calculator',
    title: 'Army Body Fat Calculator | ClearCalc',
    h1: 'Army Body Fat Calculator',
    description: 'Army Regulation 600-9 circumference equations in inches. A man at 70 inches, neck 15, and waist 36 is 21.3%. The page does not pass or fail a soldier, and it is not the Navy body-fat page.',
    intro: [
      'The Army body-fat page applies the circumference equations published in Army Regulation 600-9. Measurements are inches. For men the equation is 86.010 × log10(waist − neck) − 70.041 × log10(height) + 36.76. A height of 70, a neck of 15, and a waist of 36 produces 21.3% after the page rounds to one decimal. The unrounded value is about 21.25.',
      'Women use one logarithm of the combined tape, waist plus hip minus neck: 163.205 × log10(waist + hip − neck) − 97.684 × log10(height) − 78.387. A height of 64, neck 13, waist 30, and hip 38 puts 55 inches inside the logarithm and prints 29.2%.',
      'The body-fat calculator is a different page. That page is the U.S. Navy circumference estimate, and it also asks for a weight so it can split fat mass from lean mass. A man at 70 inches, neck 15, waist 34, and 180 pounds is 17.51% there. This Army page has no weight box. Its sample waist is 36 inches, and the result is only the circumference percent.',
      'The percent is not a pass or a fail. Army Regulation 600-9 also has an age-and-sex maximum table, and this page does not look that table up. Rounding the tape the way the regulation requires is something you do before you type the numbers.'
    ],
    steps: [
      'Choose the men’s equation or the women’s equation. The sample is men.',
      'Enter height, neck, and waist in inches. The sample is 70, 15, and 36.',
      'For the women’s equation, enter the hip as well. The hip box is ignored for men.',
      'Press Calculate. The headline is the percent to one decimal. Read it as the equation result, not as a tape-test decision.'
    ],
    howHeading: 'How the AR 600-9 circumference percent is calculated',
    howItWorks: [
      'Both equations use base-10 logarithms of inch measurements. For men the first logarithm is the waist minus the neck. Those two tapes must leave a positive gap, and the page rejects a waist that is not larger than the neck. Height is the second logarithm. The coefficients 86.010, 70.041, and 36.76 are the published men’s constants.',
      'For women the first logarithm is a single sum, waist plus hip minus neck. The page rejects the entry when that sum is not larger than zero. Height uses the coefficient 97.684, and the constant term is −78.387. The hip is required only for this equation. Leaving the sample hip of 38 in place while you switch to the women’s equation changes the result, because 38 then enters the sum.',
      'The headline uses one decimal place. A second man, 72 inches tall with a neck of 16 and a waist of 34, has a waist-neck gap of 18 and prints 14.6%. A smaller gap raises the men’s percent. A taller height lowers it. The page does not convert centimeters. Divide a centimeter tape by 2.54 before you type it, or you will run the logarithms on the wrong scale.',
      'Nothing in the arithmetic compares the percent with an age row. Two soldiers with the same tapes receive the same headline at every age. The current regulation, not this page, owns the maximum table and the way a tape is rounded to the nearest half inch.'
    ],
    formula: 'Men, inches: 86.010 × log10(waist − neck) − 70.041 × log10(height) + 36.76\nWomen, inches: 163.205 × log10(waist + hip − neck) − 97.684 × log10(height) − 78.387\nThe headline is rounded to one decimal\nNo age maximum is applied',
    formulaNotes: [
      'Men at 70, 15, and 36: the waist-neck gap is 21 inches. The equation prints 21.3%. The same man with a 34 inch waist is the Navy page’s sample only when a weight is added there. This page does not ask for that weight.',
      'Women at 64, 13, 30, and 38: waist + hip − neck = 55. The equation prints 29.2%. Men at 72, 16, and 34 print 14.6%.'
    ],
    examplesHeading: 'Worked Army circumference examples',
    samples: [
      { title: 'Man, 70 in, neck 15, waist 36', overrides: {}, blurb: 'The men’s equation uses waist minus neck, which is 21 inches, and a height of 70. The headline is 21.3%. The hip value sitting in the form is not read.' },
      { title: 'Woman, 64 in, neck 13, waist 30, hip 38', overrides: { sex: 2, height: 64, neck: 13, waist: 30, hip: 38 }, blurb: 'The women’s equation takes one logarithm of waist plus hip minus neck, which is 55 inches, and a height of 64. The headline is 29.2%.' },
      { title: 'Man, 72 in, neck 16, waist 34', overrides: { height: 72, neck: 16, waist: 34 }, blurb: 'A taller height and a smaller waist-neck gap of 18 inches moves the men’s result to 14.6%. The equation is unchanged. Only the tapes changed.' }
    ],
    table: {
      heading: 'AR 600-9 percents for three tape sets',
      caption: 'Each headline is this calculator, rounded to one decimal. No row is a pass or a fail.',
      headers: ['Tapes', 'Percent']
    },
    limitsHeading: 'What the Army percent does not decide',
    limits: [
      'It does not pass or fail a soldier. The age-and-sex maximums in Army Regulation 600-9 are not applied, and the page does not know a soldier’s age.',
      'It is not the Navy body-fat page. That calculator uses a weight to split fat mass and lean mass. This page stops at the circumference percent.',
      'It is not a body-composition study. A tape on one day moves with the site you measure, the tension on the tape, and the time of day. The equation then does exactly what the numbers say.',
      'Centimeters and a waist that does not exceed the neck are outside the arithmetic. Convert units first. The logarithm of a zero or negative gap is rejected.'
    ],
    disclaimer: 'This is the AR 600-9 circumference equation on the inches you type. It does not pass or fail a soldier and it is not a medical body-composition test.',
    faqs: [
      { q: 'What Army body-fat percent is 70 inches, a 15 inch neck, and a 36 inch waist?', a: '21.3% on the men’s equation, 86.010 × log10(waist − neck) − 70.041 × log10(height) + 36.76. The waist-neck gap is 21 inches. The page rounds to one decimal.' },
      { q: 'What measurements does the women’s Army equation use?', a: 'Height, neck, waist, and hip, in inches. The first logarithm is waist plus hip minus neck. At 64, 13, 30, and 38 that sum is 55 and the headline is 29.2%.' },
      { q: 'Does the Army body-fat calculator pass or fail a soldier?', a: 'No. It prints the circumference percent and does not apply the regulation’s age-and-sex maximum table. The current Army Regulation 600-9 owns that table.' },
      { q: 'How is this different from the Navy body-fat page?', a: 'The body-fat calculator is the Navy circumference page. It asks for a weight and splits fat mass from lean mass. A man at 70 inches, neck 15, waist 34, and 180 pounds is 17.51% there. This page has no weight and its 70, 15, and 36 sample is 21.3%.' }
    ],
    relatedLinks: [
      { slug: 'body-fat-calculator', label: 'Body fat calculator', note: 'U.S. Navy circumferences plus a weight. A man at 70 inches, neck 15, waist 34, and 180 pounds is 17.51% body fat there. This Army page does not use a weight and does not pass or fail anyone.' },
      { slug: 'bmi-calculator', label: 'BMI calculator', note: 'Weight and height as an index. It does not take a neck, a waist, or a hip.' },
      { slug: 'circumference-ratio-calculator', label: 'Waist-hip ratio calculator', note: 'Waist divided by hip, compared with the World Health Organization figures 0.90 for men and 0.85 for women. It is not an Army percent.' }
    ]
  }),

  'kidney-function-calculator': page({
    slug: 'kidney-function-calculator',
    title: 'eGFR Calculator | ClearCalc',
    h1: 'eGFR Calculator',
    description: '2021 CKD-EPI creatinine equation with no race coefficient. A man age 60 with creatinine 0.9 mg/dL is 97.8 mL/min/1.73 m². The result is not a diagnosis.',
    intro: [
      'Estimated glomerular filtration rate on this page is the 2021 CKD-EPI creatinine equation. There is no race coefficient. Serum creatinine is in mg/dL. A man age 60 with creatinine 0.9 has a headline of 97.8 mL/min/1.73 m². The unrounded value is about 97.775.',
      'The equation is 142 × min(Scr/κ, 1)^α × max(Scr/κ, 1)^(−1.200) × 0.9938^age × a sex factor. For men, κ is 0.9 and α is −0.302, and the sex factor is 1. For women, κ is 0.7, α is −0.241, and the sex factor is 1.012. Age 60 and creatinine 0.7 for a woman sits on the female κ and prints 98.9.',
      'When creatinine equals κ, both the min term and the max term are 1, so the result is 142 × 0.9938^age × the sex factor. The female result at κ is the male result at κ multiplied by 1.012. Above κ, the −1.200 power applies to Scr/κ. A man age 40 with creatinine 1.2 is past κ = 0.9 and prints 78.4.',
      'The number is not a diagnosis, a stage, or a treatment recommendation. The page does not use cystatin C. A laboratory result in µmol/L has to be converted to mg/dL before it is typed.'
    ],
    steps: [
      'Choose the male or female constants. The sample is male, κ = 0.9 and α = −0.302.',
      'Enter age as a whole number of years from 18 to 100. The sample is 60.',
      'Enter serum creatinine in mg/dL. The sample is 0.9.',
      'Press Calculate. The headline is mL/min/1.73 m². A value under 60 is still only the equation result.'
    ],
    howHeading: 'How the 2021 CKD-EPI creatinine equation is applied',
    howItWorks: [
      'The page divides creatinine by κ, then splits that ratio at 1. The part at or below 1 is raised to α. The part at or above 1 is raised to −1.200. Those two pieces are multiplied by 142, by 0.9938 raised to the age, and by 1.012 when the female constants are selected. No fourth input changes the sex factor.',
      'Creatinine of 0.9 for a man is exactly κ, so the power terms drop out. The entire difference between a 60-year-old man at 0.9 and a 60-year-old woman at 0.7 is the female factor 1.012, which moves 97.775 to about 98.948 and prints 98.9. A creatinine above κ no longer cancels. The man age 40 at 1.2 uses (1.2 / 0.9)^(−1.200) and a younger 0.9938^age, and the headline is 78.4.',
      'Age has to be a whole year inside 18 to 100. A creatinine of zero or a blank is rejected because the ratio would not be a positive number. The units stay mg/dL. Dividing a µmol/L value by 88.4 is a conversion you do before this form, and the form will not do it for you.',
      'Every result includes the same boundary: a figure under 60 is a range clinicians often recheck, and this page does not diagnose kidney disease or assign a stage. The arithmetic is the same on either side of 60. The page does not switch equations there.'
    ],
    formula: 'eGFR = 142 × min(Scr/κ, 1)^α × max(Scr/κ, 1)^(−1.200) × 0.9938^age × sex factor\nMen: κ = 0.9, α = −0.302, sex factor = 1\nWomen: κ = 0.7, α = −0.241, sex factor = 1.012\nScr is serum creatinine in mg/dL\n2021 CKD-EPI creatinine equation, no race coefficient',
    formulaNotes: [
      'Male, age 60, creatinine 0.9: Scr equals κ, so eGFR = 142 × 0.9938^60 = 97.775, printed as 97.8 mL/min/1.73 m².',
      'Female, age 60, creatinine 0.7: the same age term times 1.012, printed as 98.9. Male, age 40, creatinine 1.2: the ratio 1.2/0.9 is above 1, and the headline is 78.4.'
    ],
    examplesHeading: 'Worked eGFR examples',
    samples: [
      { title: 'Male, age 60, creatinine 0.9 mg/dL', overrides: {}, blurb: 'Creatinine equals the male κ of 0.9, so the min and max powers are both 1. The headline is 97.8 mL/min/1.73 m² from 142 × 0.9938^60.' },
      { title: 'Female, age 60, creatinine 0.7 mg/dL', overrides: { sex: 2, creatinine: 0.7 }, blurb: 'Creatinine equals the female κ of 0.7. The female factor is 1.012, and the headline is 98.9. α is −0.241 for this choice, though at κ that power multiplies by 1.' },
      { title: 'Male, age 40, creatinine 1.2 mg/dL', overrides: { age: 40, creatinine: 1.2 }, blurb: 'The ratio 1.2/0.9 is above 1, so the −1.200 power applies and the α power applies to 1. A younger age raises 0.9938^age. The headline is 78.4.' }
    ],
    table: {
      heading: '2021 CKD-EPI results for three inputs',
      caption: 'Each headline is this calculator in mL/min/1.73 m². Creatinine is mg/dL. No row is a diagnosis.',
      headers: ['Input', 'eGFR']
    },
    limitsHeading: 'What this eGFR page does not conclude',
    limits: [
      'It is not a diagnosis and it does not choose a kidney-disease stage. A result under 60 is a range clinicians often recheck. The page still only prints the equation.',
      'It does not use a race coefficient. The 2021 CKD-EPI creatinine equation here has male constants and female constants only.',
      'Creatinine must be the laboratory’s mg/dL value. A µmol/L report has to be converted before it is typed. Cystatin C is not an input.',
      'Age is a whole year from 18 to 100. The equation is the adult creatinine equation. It is not a pediatric formula and it is not a medication dose.'
    ],
    disclaimer: 'This is the 2021 CKD-EPI creatinine equation on a creatinine in mg/dL. It is not a diagnosis, a stage, or a treatment recommendation.',
    faqs: [
      { q: 'What eGFR does the 2021 CKD-EPI equation give a man age 60 with creatinine 0.9?', a: '97.8 mL/min/1.73 m². Creatinine equals the male κ of 0.9, so the result is 142 × 0.9938^60. The unrounded figure is about 97.775. There is no race coefficient.' },
      { q: 'What creatinine unit does the eGFR calculator require?', a: 'mg/dL. A result reported in µmol/L has to be converted before it is typed. The female sample uses 0.7 mg/dL, which is the female κ, and prints 98.9 at age 60.' },
      { q: 'Does a low eGFR on this page diagnose kidney disease?', a: 'No. The equation result under 60 is a range clinicians often recheck. This page does not diagnose, stage, or recommend treatment, and it does not use cystatin C.' },
      { q: 'Why do the female constants differ from the male constants?', a: 'The female κ is 0.7, α is −0.241, and the result is multiplied by 1.012. The male κ is 0.9 and α is −0.302, with no extra factor. At age 60 and at each κ, that 1.012 factor is what separates 98.9 from 97.8.' }
    ],
    relatedLinks: [
      { slug: 'bmi-calculator', label: 'BMI calculator', note: 'An index from weight and height. It is not a filtration estimate and it does not use creatinine.' }
    ]
  }),

  'nutrient-range-calculator': page({
    slug: 'nutrient-range-calculator',
    title: 'Carbohydrate and Fat Range Calculator | ClearCalc',
    h1: 'Carbohydrate and Fat Range Calculator',
    description: 'Adult AMDR ranges on a calorie total you type. At 2,000 kcal the carbohydrate span is 225 to 325 g, from 45 to 65 percent, and the fat span is 44 to 78 g, from 20 to 35 percent. Not a diet prescription.',
    intro: [
      'This page turns a daily calorie total into the adult Acceptable Macronutrient Distribution Ranges for carbohydrate and fat. Carbohydrate is 45 to 65 percent of calories. Fat is 20 to 35 percent of calories. At 2,000 kcal the headline is 225 to 325 g carbohydrate, and the fat line is 44 to 78 g.',
      'Carbohydrate grams use 4 kcal per gram. Fat grams use 9 kcal per gram. The 2,000 kcal carbohydrate ends are exact: 2,000 × 0.45 / 4 = 225 and 2,000 × 0.65 / 4 = 325. The fat ends are 2,000 × 0.20 / 9 = 44.444… and 2,000 × 0.35 / 9 = 77.777…, and the page rounds each end to a whole gram, 44 and 78.',
      'The calorie total is yours. The TDEE calculator and the calorie calculator can estimate a maintenance total from a body size and an activity factor. This page does not estimate calories and it does not pick a point inside the range. A single carbohydrate percent and a single fat percent that you choose are the macro calculator. The sample macro split on that page is 30 percent protein, 40 percent carbohydrate, and 30 percent fat, which is a choice, not these published spans.',
      'The ranges are not a diet prescription. They do not set a medical target, a weight-loss plan, or a gram of protein. Protein is outside this page.'
    ],
    steps: [
      'Enter the daily calorie total. The sample is 2,000 kcal.',
      'Press Calculate. The headline is the carbohydrate gram range.',
      'Read the fat gram range on the line under the headline.',
      'To force one percent instead of the adult span, use the macro calculator and type that percent.'
    ],
    howHeading: 'How the adult carbohydrate and fat ranges are calculated',
    howItWorks: [
      'The low carbohydrate gram count is calories times 0.45, divided by 4. The high count uses 0.65. The low fat count is calories times 0.20, divided by 9. The high fat count uses 0.35. The page then rounds each displayed gram count to a whole number. Exact multiples of 4 stay exact, which is why 2,000 kcal prints 225 and 325 rather than a rounded neighbor.',
      'A 1,500 kcal total scales the same percents. Carbohydrate becomes 169 to 244 g, because 1,500 × 0.45 / 4 = 168.75 and 1,500 × 0.65 / 4 = 243.75, and both round to the nearest gram. Fat becomes 33 to 58 g. A 2,500 kcal total prints 281 to 406 g carbohydrate and 56 to 97 g fat. The percents never change. Only the calorie total does.',
      'The page does not check that a carbohydrate choice and a fat choice can be eaten together with protein. The top of both ranges is 65 + 35 = 100 percent of calories, which would leave no room for protein. The bottom is 45 + 20 = 65 percent, which would leave 35 percent. The output is two separate ranges, not one plate.',
      'Nothing here looks up a Dietary Reference Intake for a vitamin, a mineral, or an added-sugar limit. The adult AMDR percents for carbohydrate and fat are the whole formula.'
    ],
    formula: 'Carbohydrate grams = calories × 0.45 / 4 through calories × 0.65 / 4\nFat grams = calories × 0.20 / 9 through calories × 0.35 / 9\nAdult Acceptable Macronutrient Distribution Ranges\n4 kcal per gram of carbohydrate, 9 kcal per gram of fat\nDisplayed grams are rounded to whole numbers',
    formulaNotes: [
      '2,000 × 0.45 / 4 = 225 and 2,000 × 0.65 / 4 = 325. Fat is 400 / 9 and 700 / 9, printed as 44 to 78 g.',
      '1,500 kcal prints 169 to 244 g carbohydrate and 33 to 58 g fat. 2,500 kcal prints 281 to 406 g carbohydrate and 56 to 97 g fat.'
    ],
    examplesHeading: 'Worked carbohydrate and fat ranges',
    samples: [
      { title: '2,000 kcal', overrides: {}, blurb: 'The adult 45 to 65 percent carbohydrate span is exact at this total: 225 to 325 g. Fat at 20 to 35 percent prints 44 to 78 g after rounding 44.444… and 77.777… to whole grams.' },
      { title: '1,500 kcal', overrides: { calories: 1500 }, blurb: 'The same percents on a smaller total. Carbohydrate rounds from 168.75 and 243.75 to 169 and 244 g. Fat rounds to 33 to 58 g.' },
      { title: '2,500 kcal', overrides: { calories: 2500 }, blurb: 'A larger total scales both ranges. The headline is 281 to 406 g carbohydrate, and the fat line is 56 to 97 g. The page still has not chosen a calorie target.' }
    ],
    table: {
      heading: 'Adult ranges at three calorie totals',
      caption: 'Each headline is the carbohydrate range from this calculator. The fat range is the first detail line.',
      headers: ['Calories', 'Carbohydrate']
    },
    limitsHeading: 'What the AMDR ranges do not prescribe',
    limits: [
      'They are not a diet prescription, a medical nutrition target, or an instruction to eat at either end of the span.',
      'They are not the macro calculator. That page converts percents you pick into grams. This page always uses 45 to 65 percent for carbohydrate and 20 to 35 percent for fat.',
      'They do not estimate the calorie total. Maintenance estimates from body size are the calorie calculator and the TDEE calculator.',
      'They do not print a protein range, an added-sugar limit, or a vitamin target. Fiber and a points-style score are not part of this arithmetic.'
    ],
    disclaimer: 'These are the adult carbohydrate and fat Acceptable Macronutrient Distribution Ranges applied to a calorie total you type. They are not a diet prescription.',
    faqs: [
      { q: 'How many grams of carbohydrate are 45 to 65 percent of 2,000 kcal?', a: '225 to 325 g. The page divides 45 percent and 65 percent of 2,000 by 4 kcal per gram. Both ends are exact.' },
      { q: 'What fat range does 2,000 kcal produce on this page?', a: '44 to 78 g, from 20 to 35 percent of calories at 9 kcal per gram. The unrounded ends are 44.444… and 77.777…, and the page rounds them to whole grams.' },
      { q: 'Is the carbohydrate and fat range a diet prescription?', a: 'No. It reports the adult AMDR spans for the calorie total you type. It does not choose a target inside the span and it does not estimate how many calories you use.' },
      { q: 'Why does 2,000 kcal not use the macro page’s 40 percent carbohydrate?', a: 'The macro calculator uses a carbohydrate percent and a fat percent you pick. Its sample split is 30 percent protein, 40 percent carbohydrate, and 30 percent fat. This page does not take those percents. It always uses the adult ranges 45 to 65 and 20 to 35.' }
    ],
    relatedLinks: [
      { slug: 'macro-calculator', label: 'Macro calculator', note: 'Grams from percents you choose. The sample is 30 percent protein, 40 percent carbohydrate, and 30 percent fat of the calorie total. This page uses the adult ranges instead.' },
      { slug: 'tdee-calculator', label: 'TDEE calculator', note: 'A resting equation times an activity factor. Moderate activity on the sample man is 2,633 kcal/day. This page starts after you already have a calorie total.' },
      { slug: 'calorie-calculator', label: 'Calorie calculator', note: 'Mifflin–St Jeor times an activity multiplier you type. It does not split calories into the AMDR gram ranges.' }
    ]
  }),

  'triangle-solver-calculator': page({
    slug: 'triangle-solver-calculator',
    title: 'Triangle Calculator | ClearCalc',
    h1: 'Triangle Calculator',
    description: 'A 3-4-5 triangle has area 6. The page solves three sides, two sides and the included angle, or two angles and the included side. The ambiguous SSA case is not solved.',
    intro: [
      'Three sides of 3, 4, and 5 are a right triangle with area 6. The right angle sits opposite the side of length 5, and the other angles print as 36.87° and 53.13°. The area the page reports is ½ × side b × side c × sin A, which for this triangle is ½ × 4 × 5 × sin 36.87° and equals 6. Heron’s formula is a separate check: the semi-perimeter is 6, and √(6 × 1 × 2 × 3) = 6.',
      'The same triangle can be entered two other ways. Two sides and the included angle, 3 and 4 with 90° between them, builds the third side by the law of cosines and again prints area 6. Two angles and the included side, 36.87° and 53.13° with side 5 between them, uses the law of sines and returns sides 3, 4, and 5.',
      'A right triangle known only by its legs is also the right-triangle page and the Pythagorean page. Those pages assume the right angle. This page does not. Three sides of 5, 5, and 6 are not a right triangle. The area is 12, from a height of 4 on the base of 6, and the angles are 53.13°, 53.13°, and 73.74°.',
      'The ambiguous case is two sides and an angle that is not the included angle. One set of those inputs can be two different triangles, or one, or none. This page has no SSA mode and does not choose between the two possible triangles.'
    ],
    steps: [
      'Choose three sides, two sides and the included angle, or two angles and the side between them. The sample is three sides.',
      'Enter the three numbers. For three sides the sample is 3, 4, and 5. In the angle modes, read the field labels so a degree measure is not typed as a side.',
      'Press Calculate. The headline is the area. The lines under it list the three sides and the three angles.',
      'If you know two sides and a non-included angle, stop. That SSA case is not solved here.'
    ],
    howHeading: 'How the three triangle cases are solved',
    howItWorks: [
      'Three sides use the law of cosines. The angle opposite side a is arccos((b² + c² − a²) / (2bc)), and the angle opposite side b is the matching rearrangement. The third angle is half a turn minus those two, in radians, so the three angles sum to 180°. Sides that break the triangle inequality are rejected. The area is then ½bc sin A.',
      'Two sides and the included angle also use the law of cosines. The third box in that mode is the angle in degrees between the two sides, not a third side. The missing side is √(b² + c² − 2bc cos A). An included angle of 0° or 180° is rejected because it does not make a triangle. Sides 3 and 4 with an included 90° produce a hypotenuse of 5, because cos 90° is 0 and √(9 + 16) = 5.',
      'Two angles and the included side use the law of sines. The first two boxes are angles in degrees, and they must be positive and sum to less than 180°. The third angle is what remains. Each unknown side is the known side times sin of its opposite angle, divided by sin of the angle opposite the known side. Feeding 36.87°, 53.13°, and the included side 5 returns the 3-4-5 triangle because those angles are the three-side result rounded to two decimals.',
      'SSA is omitted on purpose. A given angle opposite one of two known sides can fit a second triangle when the height relative to that angle leaves room for an obtuse solution. Reporting one area would hide the other triangle. The right-triangle page is the place for two legs, a leg and a hypotenuse, or a leg and an acute angle, all with the right angle already known.'
    ],
    formula: 'SSS: law of cosines, then area = ½bc sin A\nSAS: missing side = √(b² + c² − 2bc cos A), included angle in degrees\nASA: law of sines, two angles and the side between them\nAngles are reported in degrees and sum to 180°\nSSA, two sides and a non-included angle, is not solved',
    formulaNotes: [
      'Sides 3, 4, and 5 give angles 36.87°, 53.13°, and 90°, and area 6. Sides 3 and 4 with an included 90° give sides 5, 3, and 4, the same area.',
      'Angles 36.87° and 53.13° with included side 5 return sides 3, 4, and 5. Sides 5, 5, and 6 give area 12 and angles 53.13°, 53.13°, and 73.74°.'
    ],
    examplesHeading: 'Worked triangle examples',
    samples: [
      { title: 'Sides 3, 4, and 5', overrides: {}, blurb: 'Three sides, solved by the law of cosines. The angle opposite 5 is 90°, and the area is 6. The same area is ½ × 3 × 4 once the right angle is known.' },
      { title: 'Sides 3 and 4 with included angle 90°', overrides: { mode: 2, a: 3, b: 4, c: 90 }, blurb: 'The third box is the included angle, not a side. The law of cosines builds the opposite side as 5. The headline is area 6, with angles 90°, 36.87°, and 53.13°.' },
      { title: 'Angles 36.87° and 53.13° with side 5 between them', overrides: { mode: 3, a: 36.87, b: 53.13, c: 5 }, blurb: 'The first two boxes are angles and the third is the included side. The law of sines returns sides 3, 4, and 5. The area is 6. These angles are the rounded angles from the 3-4-5 triangle.' },
      { title: 'Sides 5, 5, and 6', overrides: { a: 5, b: 5, c: 6 }, blurb: 'An isosceles triangle that is not right-angled. The height to the base of 6 is 4, and ½ × 6 × 4 = 12. The angles are 53.13°, 53.13°, and 73.74°.' }
    ],
    table: {
      heading: 'Areas from four triangle entries',
      caption: 'Each headline is the area from this calculator. SSA is not one of the modes.',
      headers: ['Known parts', 'Area']
    },
    limitsHeading: 'What this triangle page does not solve',
    limits: [
      'The ambiguous SSA case is not solved. Two sides and a non-included angle can describe two triangles, and the form has no mode for that input.',
      'A right triangle entered as two legs is also the right-triangle calculator, which assumes the right angle and reports the hypotenuse, the area, and the acute angles. The Pythagorean page solves a side only.',
      'The area calculator can take a base and a height directly. This page computes the height’s effect through an angle or through three sides. It does not ask for a separate height.',
      'Angles in the second and third modes are degrees. A radian entry would be read as a tiny or impossible degree measure. Sides have to satisfy the triangle inequality.'
    ],
    disclaimer: 'This solves one determined triangle from the three cases listed. It is not a coordinate geometry diagram, and it does not resolve the ambiguous SSA case.',
    faqs: [
      { q: 'What is the area of a 3-4-5 triangle?', a: '6. The angle opposite 5 is 90°, and ½ × 3 × 4 = 6. The page reports the same area from ½ × 4 × 5 × sin 36.87°.' },
      { q: 'Does the triangle calculator solve the ambiguous SSA case?', a: 'No. Two sides and a non-included angle can be two triangles. The modes here are three sides, two sides and the included angle, and two angles and the included side.' },
      { q: 'What does the included-angle mode do with sides 3 and 4 and 90 degrees?', a: 'It treats 90 as the angle between those sides. The opposite side is 5, and the area is 6. In that mode the third box is degrees, not a third side.' },
      { q: 'Where should two legs of a right triangle go?', a: 'They can be three sides once you also know the hypotenuse, or two sides and the included 90° on this page. The right-triangle calculator is built for the legs alone. Legs 3 and 4 there give hypotenuse 5, area 6, and acute angles 36.8699° and 53.1301°.' }
    ],
    relatedLinks: [
      { slug: 'pythagorean-theorem-calculator', label: 'Pythagorean theorem calculator', note: 'Legs 3 and 4 give hypotenuse 5.0000. That page solves a side. It does not report an area.' },
      { slug: 'right-triangle-calculator', label: 'Right triangle calculator', note: 'The same legs give hypotenuse 5, area 6, and acute angles 36.8699° and 53.1301°. The right angle is assumed.' },
      { slug: 'area-calculator', label: 'Area calculator', note: 'A triangle from a base and a height, plus rectangles, circles, trapezoids, ellipses, and parallelograms. It does not solve missing sides.' }
    ]
  }),

  'bra-fit-calculator': page({
    slug: 'bra-fit-calculator',
    title: 'Bra Fit Starting Point | ClearCalc',
    h1: 'Bra Fit Starting Point',
    description: 'An underbust of 32 and a bust of 36 is 32D. The band rounds up to an even number, and the cup is a position in a stated letter list. Brands differ. This is not a health measurement and not advice about what to wear.',
    intro: [
      'The starting size on this page is a band and a cup from two inch measurements. An underbust of 32 and a bust of 36 is 32D. The band is the underbust rounded up to an even integer when the measurement is not already an even inch. The cup is the bust minus that band, rounded to a whole number, then read from a fixed list.',
      'The list is position 0 AA, 1 A, 2 B, 3 C, 4 D, 5 DD, 6 DDD, 7 G, and 8 H. A difference of 4 is D, which is why 36 − 32 is 32D. A difference below 0 is held at AA. A difference above 8 is held at H. An underbust of 34 and a bust of 42 is a difference of 8 and prints 34H. One inch past that still prints H, because the list stops.',
      'An odd underbust moves to the next even band. An underbust of 31 becomes 32, and a bust of 35 is then 3 inches above the band, which is 32C. An underbust of 33 becomes 34, and a bust of 37 is 34C. The rounding is ceil(underbust / 2) × 2. Even 32 stays 32. The next value above 32, including 32.1, becomes 34.',
      'Brands differ. The same two tapes can be another letter in another brand, often by one cup. The result is a fitting starting point used by many US size guides. It is not a health measurement, and it is not advice about what to wear.'
    ],
    steps: [
      'Enter the underbust in inches. The sample is 32.',
      'Enter the bust in inches. The sample is 36. The bust has to be at least the underbust.',
      'Press Calculate. The headline is the band joined to the cup letter.',
      'Treat the letter as a position on the stated list. A brand’s own chart can place the same difference on a neighboring letter.'
    ],
    howHeading: 'How the band and the cup letter are chosen',
    howItWorks: [
      'The band is ceil(underbust / 2) × 2. Dividing by 2, taking the ceiling, and multiplying by 2 lands on an even integer at or above the measurement. An even whole number is already on that lattice, so 30 stays 30 and 32 stays 32. An odd whole number is halfway between multiples and the ceiling step carries it to the next even number. 31 becomes 32 and 33 becomes 34.',
      'The cup index is the bust minus the band, rounded to the nearest integer, then clamped between 0 and 8. The letters in order are AA, A, B, C, D, DD, DDD, G, H. Rounding uses ordinary half-up behavior of the language’s round function, so a difference of 3.5 becomes 4, the letter D, and a difference of 3.4 becomes 3, the letter C. The sample difference is an exact 4.',
      'A bust smaller than the underbust is rejected. Equal measurements produce a difference of 0 after the band is set. An even underbust of 30 and a bust of 30 is 30AA. If the band rounds up and passes the bust, the difference would be negative and the letter stays AA.',
      'The page does not know a sister size, a hook position, or a brand’s stretch. Moving from 32D to 34C is a different entry on this form, not an automatic conversion. You type the new measurements and the formula runs again.'
    ],
    formula: 'Band = ceil(underbust / 2) × 2\nCup index = round(bust − band), clamped from 0 to 8\nLetters: 0 AA, 1 A, 2 B, 3 C, 4 D, 5 DD, 6 DDD, 7 G, 8 H\nHeadline = band joined to that letter',
    formulaNotes: [
      'Underbust 32 and bust 36: the band stays 32, the difference is 4, and the letter is D. The headline is 32D.',
      'Underbust 31 and bust 35: the band becomes 32 and the difference is 3, so the headline is 32C. Underbust 33 and bust 37: the band becomes 34 and the headline is 34C.'
    ],
    examplesHeading: 'Worked band and cup examples',
    samples: [
      { title: 'Underbust 32 and bust 36', overrides: {}, blurb: 'The underbust is already an even inch, so the band stays 32. Bust minus band is 4, and position 4 on the list is D. The headline is 32D.' },
      { title: 'Underbust 31 and bust 35', overrides: { under: 31, bust: 35 }, blurb: '31 is odd, so the band rounds up to 32. The bust is 3 inches above that band, and position 3 is C. The headline is 32C.' },
      { title: 'Underbust 33 and bust 37', overrides: { under: 33, bust: 37 }, blurb: '33 rounds up to band 34. The difference is 3, so the letter is C and the headline is 34C. The same bust on a 32 band would have been a different letter.' }
    ],
    table: {
      heading: 'Starting sizes from three tape pairs',
      caption: 'Each headline is this calculator. The letter is a position on the stated list, not a brand’s size.',
      headers: ['Tapes', 'Starting size']
    },
    limitsHeading: 'What this starting size does not claim',
    limits: [
      'It is not a health measurement. The numbers are clothing tapes, not a body-composition result and not a circumference used for a medical chart.',
      'It is not advice about what to wear. The headline is the band and letter the formula produces from the two inches you type.',
      'Brands differ. A difference of 4 inches is D on this list and can be another letter on a brand chart, often by one cup. The page does not store brand charts.',
      'The letter list stops at H. A larger bust-to-band difference stays at H. Sister sizing, wire shape, and fabric stretch are not calculated.'
    ],
    disclaimer: 'This is a US starting band and a cup from a stated letter list. Brands differ. It is not a health measurement and it is not advice about what to wear.',
    faqs: [
      { q: 'What size is an underbust of 32 and a bust of 36?', a: '32D. The band stays 32 because the underbust is already even. The difference is 4, and position 4 on the list AA, A, B, C, D, DD, DDD, G, H is D.' },
      { q: 'How does an odd underbust become a band?', a: 'The band is ceil(underbust / 2) × 2, the next even inch when the measurement is odd. An underbust of 31 becomes 32. With a bust of 35 the difference is 3 and the headline is 32C. An underbust of 33 becomes 34.' },
      { q: 'Do bra brands use this same cup list?', a: 'Not always. This list is a fitting starting point used by many US size guides. The same tapes can be a different letter in another brand, often by one cup. The page does not pick a brand.' },
      { q: 'Is the bra fit result a health measurement or advice about what to wear?', a: 'No. It is the band and letter from two inch measurements. It does not assess health, and it does not say what someone should wear.' }
    ],
    relatedLinks: [
      { slug: 'foot-size-calculator', label: 'Foot size calculator', note: 'A foot length of 10.5 inches is 266.7 mm mondopoint and a Brannock-style US men’s 9.5. That is another clothing measurement, not a band or a cup.' },
      { slug: 'circumference-ratio-calculator', label: 'Waist-hip ratio calculator', note: 'Waist divided by hip. A clothing tape and a health-risk marker are different uses of a tape. This bra page is neither a diagnosis nor a recommendation.' }
    ]
  }),

  'matrix-2x2-calculator': page({
    slug: 'matrix-2x2-calculator',
    title: '2 by 2 Matrix Calculator | ClearCalc',
    h1: '2 by 2 Matrix Calculator',
    description: 'The determinant of [[1, 2], [3, 4]] is −2, and the inverse is [[−2, 1], [1.5, −0.5]]. The page also adds and multiplies two 2 by 2 matrices.',
    intro: [
      'A 2 by 2 matrix on this page is four numbers, row by row. Matrix A in the sample is [[1, 2], [3, 4]]. Its determinant is ad − bc = 1 × 4 − 2 × 3 = −2. The headline for that operation is “determinant -2”. The inverse is (1 / determinant) times [[d, −b], [−c, a]], which is [[−2, 1], [1.5, −0.5]].',
      'The inverse times A is the identity, apart from rounding. The first row of that product is 1 × −2 + 2 × 1.5 = 1 and 1 × 1 + 2 × −0.5 = 0. The second row is 3 × −2 + 4 × 1.5 = 0 and 3 × 1 + 4 × −0.5 = 1. The page prints the inverse and leaves that multiplication as the check.',
      'Addition is element by element. [[1, 2], [3, 4]] plus [[5, 6], [7, 8]] is [[6, 8], [10, 12]]. Multiplication is row by column, and the order matters. A times that same B is [[19, 22], [43, 50]], because the top-left entry is 1 × 5 + 2 × 7 = 19. B times A is a different matrix. The determinant operation ignores B.',
      'A determinant of zero has no inverse. [[2, 4], [1, 2]] has ad − bc = 4 − 4 = 0, and the headline is “determinant 0”. The page stops there. Only 2 by 2 matrices are accepted. The expression calculator evaluates a single arithmetic expression and does not multiply matrices.'
    ],
    steps: [
      'Choose add, multiply A by B, or the determinant and inverse of A. The sample is the determinant.',
      'Enter the four entries of A. The sample is 1, 2, 3, 4.',
      'Enter B when you are adding or multiplying. The determinant ignores B. The sample B is the identity, which does not affect a determinant.',
      'Press Calculate. Read the headline as the sum, the product, or the determinant. The inverse, when it exists, is on the next line.'
    ],
    howHeading: 'How a 2 by 2 sum, product, and determinant are formed',
    howItWorks: [
      'Addition adds matching positions. The entry in row i and column j of the sum is that entry of A plus that entry of B. No row is combined with another row. The printed form is “[first-row; second-row]”, with a space between the two numbers of a row.',
      'Multiplication uses the row-column rule. Result row 1 column 1 is A’s first row dotted with B’s first column. Row 1 column 2 uses B’s second column. The second row of A does the same with both columns of B. For the sample numbers against [[5, 6], [7, 8]], that is 19, 22, 43, and 50. Swapping A and B would use different dots. The page always multiplies A by B, never B by A.',
      'The determinant is a11 × a22 − a12 × a21. A non-zero determinant is inverted by swapping the diagonal, changing the signs of the off-diagonal, and dividing by the determinant. A determinant whose absolute value is under 10^−12 is treated as zero, and the page reports that the matrix has no inverse. The B entries stay on the form and are not read.',
      'Entries are ordinary numbers, so a very large product can show floating-point rounding. Exact integer arithmetic for two whole numbers, with no matrix structure, is the big-integer calculator. This page is the 2 by 2 operations only.'
    ],
    formula: 'Sum: each entry of A plus the matching entry of B\nProduct: row of A dotted with column of B\nDeterminant = a11 × a22 − a12 × a21\nInverse, when the determinant is not 0: (1/det) × [[a22, −a12], [−a21, a11]]\nOnly 2 by 2 matrices',
    formulaNotes: [
      '[[1, 2], [3, 4]] has determinant 1 × 4 − 2 × 3 = −2. The inverse printed by the page is [-2 1; 1.5 -0.5].',
      'The same A plus [[5, 6], [7, 8]] is [6 8; 10 12]. A times that B is [19 22; 43 50]. [[2, 4], [1, 2]] has determinant 0 and no inverse.'
    ],
    examplesHeading: 'Worked 2 by 2 examples',
    samples: [
      { title: 'Determinant of [[1, 2], [3, 4]]', overrides: {}, blurb: 'ad − bc = 1 × 4 − 2 × 3 = −2. The inverse is [[−2, 1], [1.5, −0.5]]. The identity B on the form is not used.' },
      { title: 'Add [[1, 2], [3, 4]] and [[5, 6], [7, 8]]', overrides: { op: 1, b11: 5, b12: 6, b21: 7, b22: 8 }, blurb: 'Matching entries add. 1 + 5, 2 + 6, 3 + 7, and 4 + 8 give the headline [6 8; 10 12].' },
      { title: 'Multiply [[1, 2], [3, 4]] by [[5, 6], [7, 8]]', overrides: { op: 2, b11: 5, b12: 6, b21: 7, b22: 8 }, blurb: 'The top-left entry is 1 × 5 + 2 × 7 = 19. The full product is [19 22; 43 50]. A times B is the only order this operation runs.' },
      { title: 'A singular matrix [[2, 4], [1, 2]]', overrides: { a11: 2, a12: 4, a21: 1, a22: 2 }, blurb: 'ad − bc = 2 × 2 − 4 × 1 = 0. The headline is determinant 0, and the page does not print an inverse. B is still ignored.' }
    ],
    table: {
      heading: 'Four operations on 2 by 2 matrices',
      caption: 'Each headline is this calculator. The inverse of a non-zero determinant is a detail line, not the headline.',
      headers: ['Operation', 'Headline']
    },
    limitsHeading: 'What this matrix page does not compute',
    limits: [
      'It does not accept a 3 by 3 or larger matrix, a vector, or a system of equations. Four entries define A, and four define B.',
      'It does not multiply B by A. Order matters, and the product operation is A times B only.',
      'A zero determinant has no inverse on this page. The headline says so and stops.',
      'It is not exact big-integer arithmetic and it is not a general expression. Those are separate calculators. This page uses ordinary numbers for the four matrix operations.'
    ],
    disclaimer: 'This adds, multiplies, or inverts 2 by 2 matrices of ordinary numbers. A zero determinant is reported as having no inverse.',
    faqs: [
      { q: 'What is the determinant of the matrix [[1, 2], [3, 4]]?', a: '−2. The determinant is ad − bc = 1 × 4 − 2 × 3. The inverse printed with it is [[−2, 1], [1.5, −0.5]].' },
      { q: 'What is [[1, 2], [3, 4]] times [[5, 6], [7, 8]]?', a: '[19 22; 43 50]. The top-left entry is 1 × 5 + 2 × 7. The page multiplies A by B and does not also print B times A.' },
      { q: 'What does the 2 by 2 calculator do when the determinant is zero?', a: 'It reports determinant 0 and says the matrix has no inverse. [[2, 4], [1, 2]] is that case, because 2 × 2 − 4 × 1 = 0.' },
      { q: 'Does the determinant use the B matrix?', a: 'No. Addition and multiplication use A and B. The determinant and inverse read A only. The identity numbers left in B do not change ad − bc.' }
    ],
    relatedLinks: [
      { slug: 'expression-calculator', label: 'Expression calculator', note: '2+3*4 is 14 in ordinary arithmetic. It does not add or multiply matrices.' },
      { slug: 'big-integer-calculator', label: 'Big integer calculator', note: 'Exact integer add, subtract, and multiply for whole numbers up to 200 digits. It is not a matrix product.' }
    ]
  }),

  'big-integer-calculator': page({
    slug: 'big-integer-calculator',
    title: 'Big Integer Calculator | ClearCalc',
    h1: 'Big Integer Calculator',
    description: 'Exact integer arithmetic. 12345678901234567890 multiplied by 100 is 1,234,567,890,123,456,789,000. The product is not a floating-point approximation.',
    intro: [
      'This page adds, subtracts, or multiplies two whole numbers with exact integer arithmetic. The sample multiplies 12345678901234567890 by 100. The headline is 1,234,567,890,123,456,789,000. Every digit is the digit the product has. An ordinary floating-point number cannot hold a 20-digit integer exactly, because a binary double stops representing every integer past 2^53, which is 9,007,199,254,740,992. The multiplication here does not pass through that format.',
      'Addition of 99999999999999999999 and 1 is 100,000,000,000,000,000,000. The carry runs through all twenty 9s and produces a 1 followed by twenty zeros. Subtraction of 250 from 100 is −150, with a true minus sign. A negative input is allowed. The sign is part of the integer, not an error.',
      'Commas and spaces in the boxes are removed before the integer is read. The text “12,345” times “1 000” is 12,345,000. A decimal point, a fraction, and a letter are rejected. Each integer can have at most 200 digits, not counting the sign.',
      'Division is the long-division calculator, which keeps a quotient and a remainder for two whole numbers that fit its own limits. A power of a huge integer is not this page. The expression calculator evaluates ordinary real arithmetic, where 2+3*4 is 14, and it is the wrong tool once the integers no longer fit in a floating-point value.'
    ],
    steps: [
      'Choose add, subtract, or multiply. The sample is multiply.',
      'Enter the first whole number. The sample is 12345678901234567890. Commas and spaces are optional.',
      'Enter the second whole number. The sample is 100.',
      'Press Calculate. The headline is the exact integer, grouped with commas. A negative result uses a minus sign.'
    ],
    howHeading: 'How the exact integer operations work',
    howItWorks: [
      'The page strips commas, underscores, and whitespace, then requires an optional minus sign and digits only. The remaining text is read as an integer, not as a floating-point number. Addition, subtraction, and multiplication are the integer operations on those values. The printed form groups digits by threes from the right.',
      'Multiply is the sample because it is the operation that grows fastest. Twenty digits times three digits is twenty-two digits in this case, since the multiplier is 100 and the original number does not end in a way that adds a carry into a new place beyond the two zeros. The headline shows those two zeros. There is no rounding step and no scientific notation.',
      'Subtract computes the first integer minus the second. Order matters. 100 minus 250 is −150, and 250 minus 100 would be 150. Add is commutative. The twenty-nines example is there to show a carry that a fixed-width calculator would overflow. The result is one digit longer than the input, and every digit is present.',
      'The 200-digit cap is a limit of the form, not of the arithmetic. A longer paste is rejected rather than truncated. Division would need a remainder policy, and this page does not choose one. The long-division calculator shows the quotient and the remainder for its own inputs. 100 divided by 7 there is quotient 14 remainder 2.'
    ],
    formula: 'Add: first + second\nSubtract: first − second\nMultiply: first × second, exact integer product\nCommas, underscores, and spaces in the input are ignored\nAt most 200 digits, not counting the sign\nNo division and no powers',
    formulaNotes: [
      '12345678901234567890 × 100 = 1,234,567,890,123,456,789,000. The commas in the headline are grouping. They are not part of a rounded approximation.',
      '99999999999999999999 + 1 = 100,000,000,000,000,000,000. 100 − 250 = −150. “12,345” × “1 000” = 12,345,000 after the comma and the space are removed.'
    ],
    examplesHeading: 'Worked exact integer examples',
    samples: [
      { title: 'Multiply a 20-digit number by 100', overrides: {}, blurb: 'The first integer has 20 digits. Times 100 it has the same digits followed by two zeros. The headline is 1,234,567,890,123,456,789,000, exact, not a floating-point estimate.' },
      { title: 'Add 1 to twenty 9s', overrides: { op: 1, left: '99999999999999999999', right: '1' }, blurb: 'The carry runs the length of the number. The sum is 100,000,000,000,000,000,000. A floating-point add of those same texts would not be a safe way to see that carry.' },
      { title: 'Subtract 250 from 100', overrides: { op: 2, left: '100', right: '250' }, blurb: 'The first integer minus the second is negative. The headline is −150. The minus sign is the sign of the exact result.' },
      { title: 'Multiply 12,345 by 1 000', overrides: { op: 3, left: '12,345', right: '1 000' }, blurb: 'The comma and the space are ignored, so the integers are 12345 and 1000. The exact product is 12,345,000.' }
    ],
    table: {
      heading: 'Exact integer results',
      caption: 'Each headline is this calculator. Grouping commas are added for reading. The arithmetic is exact.',
      headers: ['Operation', 'Exact result']
    },
    limitsHeading: 'What the big-integer page does not compute',
    limits: [
      'It does not divide. Quotient and remainder for a smaller whole-number division are the long-division calculator. 100 divided by 7 is quotient 14 remainder 2 there.',
      'It does not raise a huge integer to a power, and it does not accept a decimal or a fraction.',
      'It does not use floating-point arithmetic. The expression calculator does, and it is the right page for 2+3*4 or a power of a modest real number.',
      'Each input stops at 200 digits. A longer integer is rejected rather than shortened.'
    ],
    disclaimer: 'This is exact integer addition, subtraction, or multiplication. It is not floating-point arithmetic and it does not divide.',
    faqs: [
      { q: 'What is 12345678901234567890 multiplied by 100?', a: '1,234,567,890,123,456,789,000. The product is exact integer arithmetic. It is not a floating-point approximation, which could not hold every digit of a 20-digit whole number.' },
      { q: 'What is 99999999999999999999 plus 1 on the big integer calculator?', a: '100,000,000,000,000,000,000. The addend carries through every 9. The headline includes every digit.' },
      { q: 'Does the big integer calculator ignore commas?', a: 'Yes. Commas, underscores, and spaces are removed before the integer is read. The text 12,345 times the text 1 000 is 12,345,000. A decimal point is rejected.' },
      { q: 'Where is integer division?', a: 'On the long-division calculator, which separates a quotient from a remainder. 100 divided by 7 is quotient 14 remainder 2. This page adds, subtracts, or multiplies.' }
    ],
    relatedLinks: [
      { slug: 'long-division-calculator', label: 'Long division calculator', note: '100 divided by 7 is quotient 14 remainder 2. That is whole-number division. This page does not divide.' },
      { slug: 'expression-calculator', label: 'Expression calculator', note: '2+3*4 is 14 in ordinary real arithmetic. It is not exact arithmetic on a 200-digit integer.' }
    ]
  }),

  'voltage-drop-calculator': page({
    slug: 'voltage-drop-calculator',
    title: 'Voltage Drop Calculator | ClearCalc',
    h1: 'Voltage Drop Calculator',
    description: 'Ten amps on 100 feet of 12 AWG copper, round trip, drops 3.176 V from a 120 V source. Resistance uses 10.371 ohm-circular-mil per foot and the AWG diameter formula. Not an NEC pass or fail.',
    intro: [
      'Voltage drop here is the drop on a copper two-wire run. The sample is 10 amps, 100 feet one way, 12 AWG, and a 120 V source. The headline is 3.176 V. That is 2.65 percent of the source. The length is used twice, once out and once back, because a simple two-wire circuit carries the current through both conductors.',
      'Wire size starts from the AWG diameter formula. Diameter in inches is 0.005 × 92 raised to (36 − gauge) / 39. Circular mils are the square of that diameter in mils, and a mil is a thousandth of an inch. The page reports about 6,529.9 circular mils for 12 AWG. One-way resistance is 10.371 × feet / circular mils, which is 0.15882 ohm at 100 feet. The constant 10.371 ohm-circular-mil per foot is a published copper resistivity near 20°C.',
      'The drop is 2 × current × one-way resistance. Two times 10 times 0.15882 is 3.1764, and the page prints 3.176 V. A different gauge changes the circular mils. Fifteen amps on 50 feet of 14 AWG at 120 V is 3.788 V, about 4,106.7 circular mils and 0.12627 ohm one way, which is 3.16 percent of the source. Thirty amps on 150 feet of 6 AWG at 240 V is 3.556 V.',
      'The result is not an NEC pass or fail. Aluminum, three-phase circuits, conduit fill, temperature, and terminals are outside the formula. Ohm’s law on this site is a resistor relation, 12 V across 2 Ω drawing 6 A and dissipating 72 W. It does not know a wire length or a gauge.'
    ],
    steps: [
      'Enter the current in amps. The sample is 10.',
      'Enter the one-way length in feet. The sample is 100. The page doubles it for the round trip.',
      'Choose a copper gauge from 14, 12, 10, 8, 6, and 4 AWG, and enter the source voltage. The sample is 12 AWG and 120 V.',
      'Press Calculate. The headline is the drop in volts. The percent of the source is a later line. Neither line is a code compliance result.'
    ],
    howHeading: 'How round-trip copper drop is calculated',
    howItWorks: [
      'Gauge becomes a diameter, then a circular-mil area. The diameter formula is the standard AWG geometric step, where each change of one gauge scales the diameter by 92^(−1/39). Circular mils are (diameter in inches × 1,000) squared. The page prints that area to one decimal. Resistance for one foot of that conductor is 10.371 divided by the circular mils, and the one-way run multiplies by the length you typed.',
      'The round trip is the factor of 2 in front of current × resistance. It matches a two-wire DC circuit or a simple single-phase pair in which both conductors are the same copper gauge and the same length. It is not a there-and-back measurement you have to type yourself. Typing 200 feet when the cable is 100 feet one way would double the drop again.',
      'Percent of source is the drop divided by the voltage you typed, times 100. The voltage does not change the drop. It only scales that percent. A 240 V source with the sample current, length, and gauge still drops 3.176 V, and the percent line is 1.32 because that drop is divided by 240. The sample keeps 120 V, so the percent line is 2.65.',
      'The gauge list is six copper sizes. Other AWG numbers, aluminum resistivity, and a bundled conductor are not interpolated. Temperature changes copper resistance, and the 10.371 constant stays at the near-20°C value built into the page. A warmer conductor has a higher drop than the headline.'
    ],
    formula: 'Diameter in inches = 0.005 × 92^((36 − gauge) / 39)\nCircular mils = (diameter × 1,000)²\nOne-way ohms = 10.371 × one-way feet / circular mils\nDrop = 2 × current × one-way ohms\nPercent = drop / source voltage × 100\nCopper, round trip, near 20°C',
    formulaNotes: [
      '12 AWG is about 6,529.9 circular mils. At 100 feet the one-way resistance is 0.15882 ohm. Two times 10 A times that resistance is 3.176 V, which is 2.65 percent of 120 V.',
      '14 AWG at 15 A and 50 feet is 3.788 V from about 4,106.7 circular mils. 6 AWG at 30 A and 150 feet on 240 V is 3.556 V from about 26,251.4 circular mils.'
    ],
    examplesHeading: 'Worked copper voltage-drop examples',
    samples: [
      { title: '10 A, 100 ft, 12 AWG, 120 V', overrides: {}, blurb: 'Round-trip drop on the sample copper run. 12 AWG is about 6,529.9 circular mils, one-way resistance is 0.15882 ohm, and the headline is 3.176 V, or 2.65 percent of 120 V.' },
      { title: '15 A, 50 ft, 14 AWG, 120 V', overrides: { current: 15, feet: 50, gauge: 14 }, blurb: 'A thinner gauge and a shorter run. 14 AWG is about 4,106.7 circular mils and 0.12627 ohm one way. The drop is 3.788 V, 3.16 percent of the source.' },
      { title: '30 A, 150 ft, 6 AWG, 240 V', overrides: { current: 30, feet: 150, gauge: 6, volts: 240 }, blurb: 'A heavier gauge, a longer run, and a higher source. 6 AWG is about 26,251.4 circular mils. The drop is 3.556 V, which is 1.48 percent of 240 V.' }
    ],
    table: {
      heading: 'Round-trip drop on three copper runs',
      caption: 'Each headline is this calculator. The percent of source is a detail line. No row is an NEC pass or fail.',
      headers: ['Run', 'Drop']
    },
    limitsHeading: 'What this voltage drop does not approve',
    limits: [
      'It is not an NEC pass or fail, a wire-sizing table, or a statement that a percent is acceptable. The headline is the drop from the formula.',
      'It is copper only, at 10.371 ohm-circular-mil per foot near 20°C. Aluminum resistivity is not substituted. Temperature, conduit, and terminals change the resistance.',
      'It is a two-wire round trip. It is not a three-phase circuit and it does not apply a √3 factor. The length box is one way, and the formula doubles it.',
      'It is not Ohm’s law for a single resistor. That page solves voltage, current, resistance, and power for one component. It does not know AWG or feet.'
    ],
    disclaimer: 'This estimates round-trip drop on a copper pair from the AWG diameter formula and 10.371 ohm-circular-mil per foot. It is not an NEC compliance check.',
    faqs: [
      { q: 'What is the voltage drop for 10 amps on 100 feet of 12 AWG copper?', a: '3.176 V on a round trip at 10.371 ohm-circular-mil per foot. 12 AWG is about 6,529.9 circular mils and 0.15882 ohm one way. On a 120 V source that drop is 2.65 percent.' },
      { q: 'Why does the voltage drop calculator double the length?', a: 'The length you type is one way. A two-wire circuit uses two conductors, so the drop is 2 × current × one-way resistance. Typing the round-trip length yourself would count the path twice.' },
      { q: 'Is this voltage drop an NEC pass or fail?', a: 'No. The page does not compare the percent with a code limit. It also does not cover aluminum, three-phase runs, temperature, conduit, or terminals.' },
      { q: 'How is the AWG area calculated?', a: 'Diameter in inches is 0.005 × 92^((36 − gauge) / 39). Circular mils are that diameter times 1,000, squared. The resistance is 10.371 × one-way feet divided by those circular mils.' }
    ],
    relatedLinks: [
      { slug: 'ohms-law-calculator', label: 'Ohm’s law calculator', note: '12 V across 2 Ω is 6 A and 72 W. That is one resistor. This page is a copper wire run with a length and a gauge.' }
    ]
  }),

  'foot-size-calculator': page({
    slug: 'foot-size-calculator',
    title: 'Foot Size Calculator | ClearCalc',
    h1: 'Foot Size Calculator',
    description: 'A foot length of 10.5 inches is 266.7 mm mondopoint. The Brannock-style arithmetic gives US men’s 9.5 and US women’s 10.5. It is not a brand chart.',
    intro: [
      'Mondopoint on this page is the foot length in millimetres. One inch is 25.4 millimetres, so 10.5 inches is 10.5 × 25.4 = 266.7 mm. The headline is 266.7 mm mondopoint. That conversion is a definition of the inch, not a shoe-brand table.',
      'The US numbers are Brannock-style arithmetic. Men’s size is 3 × inches − 22. Women’s size is 3 × inches − 21. At 10.5 inches the men’s size is 31.5 − 22 = 9.5 and the women’s size is 31.5 − 21 = 10.5. The page labels both results that way. A brand’s size can differ, and UK and EU charts are not applied because they are not one standard.',
      'Ten inches is 254 mm, men’s 8, and women’s 9, because 3 × 10 − 22 = 8 and 3 × 10 − 21 = 9. Eleven inches is 279.4 mm, men’s 11, and women’s 12. Each extra inch adds 3 to both US numbers and 25.4 to the millimetre length. Half an inch adds 1.5 to the US numbers, which is why 10.5 lands on a half size for men and a half size for women.',
      'Measure the longer foot, standing, from the heel to the longest toe. The page does not know width. A Brannock device also has a width scale, and that scale is not this formula. The bra-fit page is a different clothing measurement, a band and a cup from two torso tapes, and it is not a shoe size.'
    ],
    steps: [
      'Measure the longer foot from heel to the longest toe, standing, in inches.',
      'Enter that length. The sample is 10.5.',
      'Press Calculate. The headline is millimetres, the mondopoint length.',
      'Read the men’s and women’s lines as 3 × inches − 22 and 3 × inches − 21. Compare them with a brand chart only after you accept that the chart can disagree.'
    ],
    howHeading: 'How inches become mondopoint and a US size',
    howItWorks: [
      'Millimetres are the inch length times 25.4, rounded to one decimal for display. 10.5 × 25.4 is exactly 266.7, so the sample shows no further rounding. Ten inches is exactly 254. Eleven inches is 279.4. The page does not convert from a centimetre entry. If you measured in centimetres, divide by 2.54 before you type, or multiply the centimetres by 10 and treat that as the mondopoint you already have.',
      'The men’s line multiplies the same inches by 3 and subtracts 22. The women’s line subtracts 21. The two sizes therefore differ by 1 at every length. A length that produces a men’s whole size produces a women’s size one larger. Half-inch lengths produce the .5 sizes because 3 × 0.5 = 1.5, and 1.5 minus an integer offset keeps the half.',
      'The arithmetic is the one commonly published with the Brannock device. Publishing the arithmetic is not the same as reading a brand’s last. A last can run long or short, and a width that this page never sees can push a fitter to a different length. UK sizes and EU sizes are left out because a single subtraction does not describe those charts.',
      'The headline is the millimetre length because mondopoint is defined as that length. The US sizes are detail lines. A reader who only needs 266.7 mm can ignore the size lines. A reader who needs a width still has to measure it somewhere else.'
    ],
    formula: 'Mondopoint mm = inches × 25.4\nUS men’s Brannock-style size = 3 × inches − 22\nUS women’s Brannock-style size = 3 × inches − 21\n1 inch = 25.4 mm\nNo width, and no UK or EU chart',
    formulaNotes: [
      '10.5 × 25.4 = 266.7. Men’s size is 3 × 10.5 − 22 = 9.5. Women’s size is 3 × 10.5 − 21 = 10.5.',
      '10 inches is 254 mm, men’s 8, women’s 9. 11 inches is 279.4 mm, men’s 11, women’s 12.'
    ],
    examplesHeading: 'Worked foot-length examples',
    samples: [
      { title: '10.5 inch foot', overrides: {}, blurb: 'The inch-to-millimetre factor is 25.4, so the length is 266.7 mm. Brannock-style arithmetic gives men’s 9.5 and women’s 10.5. The headline is the mondopoint length.' },
      { title: '10 inch foot', overrides: { inches: 10 }, blurb: 'A whole inch. Mondopoint is 254 mm. Men’s size is 3 × 10 − 22 = 8, and women’s size is 9. The two US lines still differ by 1.' },
      { title: '11 inch foot', overrides: { inches: 11 }, blurb: 'One inch longer than the 10 inch example. Mondopoint is 279.4 mm. The US lines each rise by 3, to men’s 11 and women’s 12.' }
    ],
    table: {
      heading: 'Mondopoint for three foot lengths',
      caption: 'Each headline is millimetres from this calculator. The US men’s and women’s lines use 3 × inches minus 22 and minus 21.',
      headers: ['Length', 'Mondopoint']
    },
    limitsHeading: 'What this foot size page does not know',
    limits: [
      'It is not a brand chart. The US numbers are Brannock-style arithmetic. A brand’s size can differ for the same foot length.',
      'UK and EU charts are not applied. They are not one standard that a single subtraction can represent.',
      'Width is not an input. Two feet of equal length and different width receive the same three numbers.',
      'The measurement assumed by the notes is the longer foot, standing, heel to longest toe. The page cannot tell whether the inches were taken that way. It multiplies the number you type.'
    ],
    disclaimer: 'Mondopoint here is inches times 25.4. The US lines are Brannock-style arithmetic, not a brand’s size chart and not a width.',
    faqs: [
      { q: 'What is 10.5 inches in mondopoint millimetres?', a: '266.7 mm. Mondopoint is the foot length in millimetres, and 1 inch is 25.4 mm. 10.5 × 25.4 = 266.7.' },
      { q: 'What US sizes does 10.5 inches produce?', a: 'Men’s 9.5 and women’s 10.5, from 3 × inches − 22 and 3 × inches − 21. The page labels that arithmetic Brannock-style. A brand chart can disagree.' },
      { q: 'Does the foot size calculator include width or a European chart?', a: 'No. It does not know width, and it does not apply UK or EU charts. Ten inches is 254 mm, men’s 8, and women’s 9. Eleven inches is 279.4 mm, men’s 11, and women’s 12.' },
      { q: 'How should the foot be measured for this page?', a: 'The longer foot, standing, from the heel to the longest toe. The formula then uses that inch length only. It cannot see how the tape was held.' }
    ],
    relatedLinks: [
      { slug: 'bra-fit-calculator', label: 'Bra fit starting point', note: 'An underbust of 32 and a bust of 36 is 32D on a stated cup list. That is a different clothing measurement, and brands differ there too.' }
    ]
  }),

  'molarity-calculator': page({
    slug: 'molarity-calculator',
    title: 'Molarity Calculator | ClearCalc',
    h1: 'Molarity Calculator',
    description: 'Molarity is moles of solute per litre of solution. 18.015 g of a solute at 18.015 g/mol, the formula weight of H2O, in 0.5 L is 2 mol/L. 0.1 mol in 0.5 L is 0.2 mol/L.',
    intro: [
      'Molarity is moles of solute divided by litres of solution. The litre in the denominator is the volume of the finished solution, not the volume of solvent poured in before the solute was added. The sample uses grams. 18.015 g divided by 18.015 g/mol is 1 mol, and 1 mol in 0.5 L is 2 mol/L. The 18.015 figure is the formula weight of H2O from the formula-weight page.',
      'The moles mode skips the grams. 0.1 mol in 0.5 L is 0.2 mol/L, because 0.1 / 0.5 = 0.2. Nothing in that mode checks what the solute is. The grams mode checks only that the grams per mole you type are positive. 74.092 g at 74.092 g/mol in 1 L is 1 mol/L. That molar mass is Ca(OH)2 on the formula-weight page. This page does not parse the formula.',
      'A concentrated solution and a dilute solution with the same moles in the same final volume have the same molarity here. The page does not compute how much solvent to add to reach that volume. It also does not convert molality, which is moles per kilogram of solvent, into molarity. Those two concentrations meet only for a particular density, and no density is entered.',
      'The formula-weight calculator is the place to add atomic weights. Bring its g/mol result back as the grams-per-mole box. A supplier’s assay can differ from the teaching mass, and this page will use the number you type either way.'
    ],
    steps: [
      'Choose moles and litres, or grams, grams per mole, and litres. The sample is the grams mode.',
      'Enter litres of solution. The sample is 0.5 L. This is the volume of the solution, not the solvent alone.',
      'In grams mode, enter grams and grams per mole. The sample is 18.015 and 18.015. In moles mode, enter moles instead. The unused boxes are ignored.',
      'Press Calculate. The headline is mol/L.'
    ],
    howHeading: 'How moles and grams become mol/L',
    howItWorks: [
      'Moles mode divides the moles by the litres and stops. The gram boxes can hold the sample values and they are not read. A litres value of zero is rejected because the division would be undefined. Negative moles are rejected. The printed quotient uses up to four decimal places, so 0.2 mol/L from 0.1 / 0.5 shows as 0.2 rather than 0.2000.',
      'Grams mode first divides grams by grams per mole. That quotient is the moles of solute. It then divides by litres. 18.015 / 18.015 is exactly 1 at these inputs, and 1 / 0.5 is exactly 2, so the headline is 2 mol/L with no rounding residue. A molar mass that does not match the grams produces a fractional mole count. The page does not round the moles before the division.',
      'The unit in the headline is mol/L, moles per litre of solution. If the volume you have is millilitres, convert it before typing. 500 mL is 0.5 L. Typing 500 in the litres box would divide by 500 and shrink the molarity by a factor of 1,000. The page does not have a millilitre switch.',
      'Ca(OH)2 at 74.092 g/mol is a check that a formula weight can be pasted in. One formula weight of grams in one litre is 1 mol/L by the definition, and the page returns that. It will return the same 1 mol/L for any matching pair of grams and grams per mole. The chemistry is in the mass you type, not in a lookup.'
    ],
    formula: 'Moles mode: molarity = moles / litres of solution\nGrams mode: moles = grams / (grams per mole)\nmolarity = moles / litres of solution\nThe litre is the volume of the solution, not the solvent\nH2O on the formula-weight page is 18.015 g/mol',
    formulaNotes: [
      '18.015 g / 18.015 g/mol = 1 mol. In 0.5 L the molarity is 2 mol/L. 0.1 mol in the same 0.5 L is 0.2 mol/L.',
      '74.092 g at 74.092 g/mol in 1 L is 1 mol/L. That grams-per-mole figure is the formula weight of Ca(OH)2. This page does not calculate it.'
    ],
    examplesHeading: 'Worked molarity examples',
    samples: [
      { title: '18.015 g at 18.015 g/mol in 0.5 L', overrides: {}, blurb: 'Grams divided by the molar mass is 1 mol. Divided by 0.5 L of solution, the headline is 2 mol/L. The 18.015 g/mol figure is the formula weight of H2O.' },
      { title: '0.1 mol in 0.5 L', overrides: { mode: 1 }, blurb: 'Moles mode ignores the gram boxes. 0.1 / 0.5 = 0.2, so the headline is 0.2 mol/L. The denominator is litres of solution.' },
      { title: '74.092 g at 74.092 g/mol in 1 L', overrides: { litres: 1, grams: 74.092, mw: 74.092 }, blurb: 'One formula weight in one litre is 1 mol/L. The mass 74.092 g/mol is Ca(OH)2 from the formula-weight page, typed here rather than parsed.' }
    ],
    table: {
      heading: 'Three ways of stating a molarity',
      caption: 'Each headline is mol/L from this calculator. Grams mode converts grams to moles first.',
      headers: ['Input', 'Molarity']
    },
    limitsHeading: 'What this molarity page does not convert',
    limits: [
      'It does not divide by litres of solvent. The denominator is litres of solution. Adding solute can change the volume, and that finished volume is what you type.',
      'It does not parse a chemical formula. H2O is 18.015 g/mol and Ca(OH)2 is 74.092 g/mol on the formula-weight page. You type the grams per mole here.',
      'It does not convert molality, normality, or percent by mass. No density and no equivalent weight are entered.',
      'Millilitres have to be converted to litres first. There is no unit menu on the volume box.'
    ],
    disclaimer: 'Molarity here is moles of solute per litre of solution. The grams per mole are the number you type or bring from the formula-weight page.',
    faqs: [
      { q: 'What is the molarity of 18.015 g at 18.015 g/mol in 0.5 L?', a: '2 mol/L. The grams and the grams per mole cancel to 1 mol, and 1 mol divided by 0.5 L of solution is 2. The 18.015 g/mol value is the formula weight of H2O.' },
      { q: 'Is molarity moles per litre of solvent?', a: 'No. It is moles per litre of solution. The volume box is the finished solution. 0.1 mol in 0.5 L of solution is 0.2 mol/L.' },
      { q: 'How do I use the formula weight of Ca(OH)2?', a: 'The formula-weight page gives Ca(OH)2 as 74.092 g/mol. Type 74.092 as the grams per mole. 74.092 g of it in 1 L is 1 mol/L on this page. This page does not read the formula text.' },
      { q: 'Which boxes does moles mode ignore?', a: 'The grams and the grams per mole. Moles mode divides the moles you type by the litres. The sample gram values can stay filled in and they do not change 0.1 mol in 0.5 L.' }
    ],
    relatedLinks: [
      { slug: 'formula-weight-calculator', label: 'Formula weight calculator', note: 'H2O is 18.015 g/mol and Ca(OH)2 is 74.092 g/mol from a limited element table. Bring that mass back here as grams per mole.' }
    ]
  }),

  'formula-weight-calculator': page({
    slug: 'formula-weight-calculator',
    title: 'Formula Weight Calculator | ClearCalc',
    h1: 'Formula Weight Calculator',
    description: 'H2O is 18.015 g/mol and Ca(OH)2 is 74.092 g/mol from a small element table. The table is limited to the symbols the page lists. The mass is a teaching mass.',
    intro: [
      'Formula weight here is the sum of conventional atomic weights in a formula you type. H2O is two hydrogens and one oxygen: 2 × 1.008 + 15.999 = 18.015 g/mol. The headline is 18.015 g/mol. Ca(OH)2 is one calcium, two oxygens, and two hydrogens: 40.078 + 2 × 15.999 + 2 × 1.008 = 74.092 g/mol. Parentheses multiply the group by the count that follows them.',
      'The element table is limited. The symbols it accepts are H, C, N, O, F, Na, Mg, Al, Si, P, S, Cl, K, Ca, Fe, Cu, Zn, Br, Ag, and I. NaCl uses sodium 22.990 and chlorine 35.45 and prints 58.44 g/mol. A symbol outside the table, including common metals that are not in that list, is rejected by name rather than replaced with a guessed mass.',
      'The parser reads element symbols, digits, and parentheses. A two-letter symbol is a capital letter and a lowercase letter, as in Ca, Na, and Cl. Digits after a symbol or a closing parenthesis are the count. A missing count means 1. A dot for a hydrate, a charge, and a coefficient in front of the whole formula are not read. Writing 2H2O does not mean two water molecules. The leading 2 is taken as a symbol and rejected, because 2 is not in the element table.',
      'The mass is a teaching mass from those conventional weights. A supplier’s assay can differ. The molarity page takes a grams-per-mole number you already have and divides grams by it. It does not parse H2O or Ca(OH)2 itself.'
    ],
    steps: [
      'Type a formula with element symbols, digits, and parentheses. The sample is H2O.',
      'Use a capital letter for a one-letter symbol and a capital plus a lowercase letter for a two-letter symbol. Ca(OH)2 is the calcium hydroxide pattern.',
      'Press Calculate. The headline is g/mol, rounded to three decimal places for display.',
      'If a symbol is rejected, it is outside the small table. The page will not look the symbol up elsewhere.'
    ],
    howHeading: 'How a formula is turned into grams per mole',
    howItWorks: [
      'The reader walks the text once. A capital letter starts a symbol, and a following lowercase letter is part of that symbol. The symbol is matched against the table in uppercase form, so the pair “Na” and the pair “NA” are not both stored, but the text you type must use the conventional capital-and-lowercase pattern. The stored masses include H 1.008, O 15.999, Ca 40.078, Na 22.990, and Cl 35.45.',
      'A digit run after a symbol multiplies that atom. H2 is hydrogen times 2. A parenthesis starts a group, the group is summed, and the digits after the closing parenthesis multiply the group. In Ca(OH)2 the group OH is 15.999 + 1.008 = 17.007, times 2 is 34.014, plus calcium 40.078 is 74.092. Nested parentheses would multiply from the inside. An unclosed parenthesis is rejected.',
      'Display rounding keeps three decimal places. H2O is already 18.015, and Ca(OH)2 is already 74.092, so the sample headlines match the sums. NaCl is 22.990 + 35.45 = 58.440, and three decimal places print 58.44. The underlying sum uses the table values as written, not a second set of more precise isotope masses.',
      'Isotopes are not selected. Writing D for deuterium fails because D is not in the table. Charges such as Ca2+ fail because the plus sign is not a legal character. A hydrate written with a middle dot fails for the same reason. Expand the hydrate into atoms if you need a mass, or add the water mass yourself from a second H2O result.'
    ],
    formula: 'Formula weight = sum of table atomic weights × counts\nH2O = 2 × 1.008 + 15.999 = 18.015 g/mol\nCa(OH)2 = 40.078 + 2 × 15.999 + 2 × 1.008 = 74.092 g/mol\nSymbols: H, C, N, O, F, Na, Mg, Al, Si, P, S, Cl, K, Ca, Fe, Cu, Zn, Br, Ag, I\nParentheses multiply a group. Dots, charges, and leading coefficients are not read.',
    formulaNotes: [
      'H2O prints 18.015 g/mol. Ca(OH)2 prints 74.092 g/mol. The hydroxide group is oxygen plus hydrogen, and the 2 outside the parentheses multiplies both of those atoms.',
      'NaCl prints 58.44 g/mol from 22.990 + 35.45. A symbol that is not in the twenty-symbol table stops the calculation and names the symbol.'
    ],
    examplesHeading: 'Worked formula-weight examples',
    samples: [
      { title: 'H2O', overrides: {}, blurb: 'Two hydrogens at 1.008 and one oxygen at 15.999. The sum is 18.015 g/mol. That figure is the molar mass the molarity sample divides into 18.015 g.' },
      { title: 'Ca(OH)2', overrides: { formula: 'Ca(OH)2' }, blurb: 'Calcium is 40.078. The group in parentheses is one oxygen and one hydrogen, and the subscript 2 doubles it. The headline is 74.092 g/mol.' },
      { title: 'NaCl', overrides: { formula: 'NaCl' }, blurb: 'Sodium is 22.990 and chlorine is 35.45. The sum is 58.44 g/mol at the page’s three decimal places. Both symbols are two-letter entries in the limited table.' }
    ],
    table: {
      heading: 'Formula weights from the small element table',
      caption: 'Each headline is this calculator. Masses are the conventional atomic weights stored for those symbols.',
      headers: ['Formula', 'g/mol']
    },
    limitsHeading: 'What the formula reader does not include',
    limits: [
      'The element table is limited to H, C, N, O, F, Na, Mg, Al, Si, P, S, Cl, K, Ca, Fe, Cu, Zn, Br, Ag, and I. Any other symbol is rejected.',
      'Hydrates written with a dot, ionic charges, and a coefficient in front of the formula are not read. Ca(OH)2 is calcium, two oxygen, and two hydrogen, which the parentheses can express.',
      'Isotopes are not in the table. The masses are conventional atomic weights for a teaching sum. A supplier’s assay can differ.',
      'The page does not divide the mass into a solution. Molarity starts after you already know grams per mole. 18.015 g at 18.015 g/mol in 0.5 L is 2 mol/L on that page.'
    ],
    disclaimer: 'This sums a limited table of conventional atomic weights. It is a teaching mass. A supplier’s assay can differ, and unknown symbols are rejected.',
    faqs: [
      { q: 'What formula weight does H2O have on this page?', a: '18.015 g/mol. Hydrogen is 1.008 and oxygen is 15.999, so 2 × 1.008 + 15.999 = 18.015. The molarity sample uses that same 18.015 g/mol.' },
      { q: 'What is the formula weight of Ca(OH)2?', a: '74.092 g/mol. Calcium is 40.078. Each OH is 15.999 + 1.008, and the subscript 2 after the parenthesis doubles the group: 40.078 + 2 × 17.007 = 74.092.' },
      { q: 'Which elements can the formula weight calculator read?', a: 'H, C, N, O, F, Na, Mg, Al, Si, P, S, Cl, K, Ca, Fe, Cu, Zn, Br, Ag, and I. The table is limited. A symbol outside it is rejected. NaCl, which uses two of those symbols, is 58.44 g/mol.' },
      { q: 'Can the formula box read a hydrate or a charge?', a: 'No. Dots and plus or minus signs are not accepted. Parentheses and digits are. Expand a hydrate by adding the water atoms yourself, or add a separate H2O mass of 18.015 g/mol.' }
    ],
    relatedLinks: [
      { slug: 'molarity-calculator', label: 'Molarity calculator', note: 'Moles per litre of solution. 18.015 g at 18.015 g/mol in 0.5 L is 2 mol/L. Type the formula weight there. That page does not parse a formula.' }
    ]
  }),

  'golf-differential-calculator': page({
    slug: 'golf-differential-calculator',
    title: 'Golf Score Differential Calculator | ClearCalc',
    h1: 'Golf Score Differential Calculator',
    description: 'One World Handicap System differential: (113 / slope) × (score − rating). A score of 90, rating 71.2, and slope 128 is 16.6. One differential is not a Handicap Index.',
    intro: [
      'A score differential on this page is one round. The formula is (113 / slope) × (adjusted gross score − course rating). The 113 is the standard slope in the World Handicap System formula. A score of 90, a course rating of 71.2, and a slope of 128 produces 16.6. The unrounded value is 16.596875, and the page keeps one decimal.',
      'The slope has to be from 55 to 155. A slope of 113 makes the fraction 1, so the differential is the score minus the rating. A score of 85 and a rating of 72.1 on slope 113 is 12.9. A score equal to the rating is 0 at any legal slope, because the difference inside the parentheses is zero. A score of 72 and a rating of 72 on slope 113 prints 0.',
      'One differential is not a Handicap Index. An index uses a set of recent differentials and the WHS table for how many of the lowest to average, and that average is then truncated. This page has one score, one rating, and one slope. It does not store earlier rounds and it does not apply that table.',
      'A playing-conditions calculation is not added. If you have one, adjust the score or the rating before you type them. The expression calculator can evaluate 113/128*(90-71.2) as ordinary arithmetic. It does not check the slope bounds and it does not call the result a differential. This page does both the arithmetic and the one-round boundary.'
    ],
    steps: [
      'Enter the adjusted gross score. The sample is 90. Adjust for a playing-conditions calculation before you type, if you have one.',
      'Enter the course rating. The sample is 71.2.',
      'Enter the slope rating from 55 to 155. The sample is 128.',
      'Press Calculate. The headline is one differential to one decimal. It is not a Handicap Index.'
    ],
    howHeading: 'How one score differential is calculated',
    howItWorks: [
      'Subtract the course rating from the adjusted gross score. Multiply by 113 divided by the slope. The 113 is a constant of the formula, not a slope you type. On the sample, 90 − 71.2 = 18.8, and 113 / 128 = 0.8828125. The product 16.596875 prints as 16.6. A score under the rating produces a negative differential. The page does not clip the result at zero.',
      'Slope is checked before the division. Values under 55 or over 155 are rejected, including a blank. The check is the published range used for slope ratings, and it prevents a typo such as a course rating pasted into the slope box from exploding the fraction. A slope of 113 is legal and cancels the fraction, which is a useful check: the headline should match the score minus the rating, to one decimal.',
      'The page does not average eight of the most recent twenty differentials, or any other count from the WHS table. Those counts depend on how many scores are in the record. A single box cannot see that record. Posting a differential to an association is also outside the page. The number can be copied. It is not submitted.',
      'Course rating and score are positive numbers, not integers only. A rating of 71.2 is allowed. A score of zero is rejected. The formula will accept a score far above any realistic card, and the differential will be large. The page does not know par and does not replace the score with a net double bogey. The adjusted gross score is your responsibility before the subtraction.'
    ],
    formula: 'Score differential = (113 / slope) × (adjusted gross score − course rating)\n113 is the standard slope in the World Handicap System formula\nSlope must be from 55 to 155\nOne differential is not a Handicap Index\nNo playing-conditions calculation is added',
    formulaNotes: [
      '(113 / 128) × (90 − 71.2) = 16.596875, printed as 16.6. The same score on slope 113 would be 18.8, because the fraction would be 1.',
      'Slope 113 and a score of 85 against a rating of 72.1 is 12.9. A score of 72 against a rating of 72 is 0.'
    ],
    examplesHeading: 'Worked score differentials',
    samples: [
      { title: 'Score 90, rating 71.2, slope 128', overrides: {}, blurb: 'The difference from the rating is 18.8. Multiplied by 113/128 it is 16.596875, and the headline is 16.6. This is one differential.' },
      { title: 'Score 85, rating 72.1, slope 113', overrides: { score: 85, rating: 72.1, slope: 113 }, blurb: 'A slope of 113 makes the leading fraction 1. The differential is the score minus the rating, 12.9. The standard slope is doing no scaling.' },
      { title: 'Score equal to the rating', overrides: { score: 72, rating: 72, slope: 113 }, blurb: '72 − 72 is 0, so the headline is 0 at slope 113. Any other legal slope would also print 0, because the score difference is zero.' }
    ],
    table: {
      heading: 'One differential for three rounds',
      caption: 'Each headline is this calculator. None of these single rounds is a Handicap Index.',
      headers: ['Round', 'Differential']
    },
    limitsHeading: 'What one differential is not',
    limits: [
      'It is not a Handicap Index. An index averages a selection of recent differentials using the WHS table. This page never sees a second round.',
      'It is not a handicap posted to a golf association. The calculation stays on the page.',
      'A playing-conditions calculation is not added. Adjust the score or the rating yourself if you have that figure.',
      'The page does not apply a net double bogey or any other score adjustment. The score box is the adjusted gross score you have already prepared. Slope entries outside 55 to 155 are rejected.'
    ],
    disclaimer: 'This is one World Handicap System score differential from the score, course rating, and slope you type. It is not a Handicap Index.',
    faqs: [
      { q: 'What is the score differential for a 90 on a course rated 71.2 with slope 128?', a: '16.6. The formula is (113 / 128) × (90 − 71.2) = 16.596875, printed to one decimal. 113 is the standard slope in the World Handicap System formula.' },
      { q: 'Is one golf differential a Handicap Index?', a: 'No. A Handicap Index uses a set of recent differentials and the WHS table for how many of the lowest to average. This page calculates the one round you type and does not store a scoring record.' },
      { q: 'What happens when the slope is 113?', a: 'The fraction 113/slope is 1, so the differential is the score minus the course rating. A score of 85 and a rating of 72.1 is 12.9. A score equal to the rating is 0.' },
      { q: 'Does this page add a playing-conditions calculation?', a: 'No. If you have one, adjust the score or the rating before you type them. The slope still has to be from 55 to 155.' }
    ],
    relatedLinks: [
      { slug: 'expression-calculator', label: 'Expression calculator', note: '113/128*(90-71.2) is ordinary arithmetic and prints 16.596875. It does not check a slope range or produce a Handicap Index.' }
    ]
  }),

  'base64-converter': page({
    slug: 'base64-converter',
    title: 'Base64 Encoder | ClearCalc',
    h1: 'Base64 Encoder',
    description: 'The text ClearCalc encodes as Q2xlYXJDYWxj. Base64 of text is an encoding, not encryption. Decoding that string returns ClearCalc. The text is UTF-8.',
    intro: [
      'Encode mode turns text into standard Base64. The sample text ClearCalc has the headline Q2xlYXJDYWxj. The steps are the UTF-8 bytes of the text, then the Base64 alphabet. Decoding Q2xlYXJDYWxj returns ClearCalc. The round trip is the check that the alphabet was applied and then reversed.',
      'Base64 of text is an encoding, not encryption. Anyone who can read the method can reverse it. There is no key. A string that looks opaque still contains the original text for anyone who runs the decode mode. The page says that on the result. Treating the headline as a secret would be a mistake about what the operation is.',
      'The text “a b” encodes as YSBi. The space is a byte in the UTF-8 input, not a URL percent-encoding. The URL encoder is the other page: a space there becomes %20, and a slash becomes %2F. Base64 does not use percent signs. The two tools answer different questions about the same characters.',
      'Decode ignores spaces in the input so a wrapped line can be pasted. The decoded bytes must be valid UTF-8. A payload that is not UTF-8 text is rejected. This is not a general binary decoder. The text is processed in the browser and is not stored by the calculation itself. Inputs longer than 500 characters are rejected.'
    ],
    steps: [
      'Choose encode or decode. The sample is encode.',
      'Enter the text. The sample is ClearCalc. Decode mode expects standard Base64 of UTF-8 text.',
      'Press Calculate. Encode prints the Base64. Decode prints the text.',
      'Remember that the result is reversible without a key. Encoding is not encryption.'
    ],
    howHeading: 'How text becomes standard Base64 and comes back',
    howItWorks: [
      'Encode reads the text as UTF-8 bytes. Those bytes are then written in the standard Base64 alphabet, with padding when the byte length requires it. ClearCalc happens to encode without a trailing equals sign. The text “hello” encodes as aGVsbG8=, and the equals sign is padding, not part of the original word. The page uses the language’s standard encoder on those bytes.',
      'Decode strips whitespace, runs the standard decoder, and interprets the bytes as UTF-8. If the bytes are not valid UTF-8, the operation fails instead of showing a replacement character. A string that is not Base64 at all fails as well. Spaces that were inserted for wrapping are the whitespace that is removed. Characters that are not whitespace stay in the alphabet check.',
      'The 500-character cap applies to the text you type, whether that text is the original message or the Base64. It is a form limit. The alphabet itself is not limited to English letters. Any Unicode text that fits the cap is encoded from its UTF-8 bytes, and the decode path requires those same bytes to come back as UTF-8.',
      'Nothing is encrypted and nothing is signed. The URL encoder percent-encodes one component with encodeURIComponent and leaves a plus sign as a plus sign on decode. Pasting Base64 into that page will percent-encode the plus signs and slashes that sometimes appear in Base64. That is a different encoding layered on top, not a decryption.'
    ],
    formula: 'Encode: UTF-8 bytes of the text, then standard Base64\nDecode: standard Base64, then UTF-8\nWhitespace in a decode input is ignored\nAt most 500 characters\nEncoding is not encryption',
    formulaNotes: [
      'ClearCalc encodes as Q2xlYXJDYWxj. Decoding that headline returns ClearCalc.',
      'The two characters “a b”, including the space, encode as YSBi. The space is a byte in the input. It is not written as %20. That percent form belongs to the URL encoder.'
    ],
    examplesHeading: 'Worked Base64 examples',
    samples: [
      { title: 'Encode ClearCalc', overrides: {}, blurb: 'UTF-8 bytes of the word, then standard Base64. The headline is Q2xlYXJDYWxj. There is no key. Anyone can reverse the alphabet.' },
      { title: 'Decode Q2xlYXJDYWxj', overrides: { mode: 2, text: 'Q2xlYXJDYWxj' }, blurb: 'The encode sample run backward. The headline is ClearCalc. Spaces in a Base64 paste would be ignored. This particular string has none.' },
      { title: 'Encode a space in “a b”', overrides: { text: 'a b' }, blurb: 'The space is part of the text. The headline is YSBi. This is not the URL encoding a%20b. Base64 and percent-encoding are different maps.' }
    ],
    table: {
      heading: 'Base64 encode and decode samples',
      caption: 'Each headline is this calculator. Encoding is reversible and is not encryption.',
      headers: ['Input', 'Headline']
    },
    limitsHeading: 'What this Base64 page does not protect',
    limits: [
      'It is not encryption. There is no key. Decode reverses encode for any reader who has the string.',
      'It is not a general binary tool. Decode requires valid UTF-8 after the Base64 alphabet is removed. Arbitrary file bytes are outside that rule.',
      'It is not the URL encoder. A space in Base64 is a byte inside the text. A space in the URL tool becomes %20, and a plus sign is not turned into a space on the way back.',
      'The text box stops at 500 characters. The calculation does not store the text as a feature of the result. The result is still something you can copy, and copying it does not make it secret.'
    ],
    disclaimer: 'Standard Base64 here encodes or decodes UTF-8 text. Encoding is not encryption. Anyone can reverse it.',
    faqs: [
      { q: 'What is the Base64 encoding of ClearCalc?', a: 'Q2xlYXJDYWxj. The page encodes the UTF-8 bytes with the standard Base64 alphabet. Decoding that string returns ClearCalc.' },
      { q: 'Is Base64 encryption?', a: 'No. It is an encoding. There is no key, and anyone can reverse it. A result that looks opaque still contains the original text.' },
      { q: 'How does the Base64 page treat a space?', a: 'As a character in the text. The text “a b” encodes as YSBi. Percent-encoding that space as %20 is the URL encoder, which is a different page.' },
      { q: 'What does decode reject?', a: 'Text that is not standard Base64, and Base64 that does not decode to valid UTF-8. Spaces in the input are ignored so a wrapped line can be pasted. The box allows at most 500 characters.' }
    ],
    relatedLinks: [
      { slug: 'url-encoding-converter', label: 'URL encoder', note: 'encodeURIComponent. The text “a b/c” becomes a%20b%2Fc. A plus sign is not a space. That is percent-encoding, not Base64, and it is also not encryption.' }
    ]
  }),

  'url-encoding-converter': page({
    slug: 'url-encoding-converter',
    title: 'URL Encoder | ClearCalc',
    h1: 'URL Encoder',
    description: 'encodeURIComponent turns “a b/c” into a%20b%2Fc. A plus sign is not a space: decoding a+b returns a+b. Percent-encoding is not encryption.',
    intro: [
      'Encode mode runs encodeURIComponent on one component. The sample text “a b/c” becomes a%20b%2Fc. The space is %20. The slash is %2F. Characters that are unreserved stay as themselves. The headline is the encoded component, not a finished URL with a scheme, a host, and a query structure.',
      'Decode mode runs decodeURIComponent. Decoding a%20b%2Fc returns “a b/c”, with the space and the slash restored. A plus sign is not a space. Decoding the text a+b returns a+b. The substitution of plus for space is a form-body convention, and this page does not apply it. If a form body used plus signs, this decoder will leave them.',
      'Percent-encoding is not encryption. The mapping is public. Anyone can decode a%20b. A stray percent sign that is not followed by two hex digits is rejected, because it is not a valid percent-encoding. The text stays in the browser for the calculation. The box stops at 500 characters.',
      'Base64 is the other text encoding on this site. ClearCalc in Base64 is Q2xlYXJDYWxj. That alphabet is not percent-encoding, and a space there is a byte in the message rather than %20. Use this page when the next step is a URL component. Use Base64 when the next step is the Base64 alphabet.'
    ],
    steps: [
      'Choose encode or decode. The sample is encode.',
      'Enter one component, not a whole URL you expect the page to split. The sample is “a b/c”.',
      'Press Calculate. Encode prints the percent-encoding. Decode prints the text.',
      'Leave plus signs as plus signs if you did not mean spaces. This decoder will not turn them into spaces.'
    ],
    howHeading: 'How encodeURIComponent treats a component',
    howItWorks: [
      'Encode reserves the characters that encodeURIComponent reserves. A space becomes %20, not a plus. A slash becomes %2F, so the sample “a b/c” cannot be read as a path separator after encoding. Letters and digits in the sample stay literal. The function encodes the component as UTF-8 bytes written in hexadecimal percent form.',
      'The page does not assemble a URL. If you paste “https://example.com/a b”, the colon, the slashes, and the space are all subject to the component encoder. The result is not a useful address. Encode the part that needs encoding, then place it in the address yourself. That is what “one component” means on this page.',
      'Decode reverses percent-encoding. %20 becomes a space and %2F becomes a slash. A plus is the character plus. The text a+b is already free of percent signs, so decode returns a+b unchanged. The text a%20b returns “a b”. Mixing the two conventions in one string keeps the plus and converts the percent sequence. The page does not offer a switch for the form-body plus.',
      'Invalid escapes fail. A trailing percent, or a percent followed by a letter that is not hex, throws rather than returning a partial string. The 500-character limit applies before the transformation. Encoding is still not encryption after the text fits.'
    ],
    formula: 'Encode: encodeURIComponent(text)\nA space becomes %20\nDecode: decodeURIComponent(text)\nA plus sign is not turned into a space\nOne component, not a full URL\nEncoding is not encryption',
    formulaNotes: [
      '“a b/c” encodes as a%20b%2Fc. Decoding that headline returns a b/c.',
      'Decoding a+b returns a+b. Decoding a%20b returns “a b”. The plus sign and the percent-encoded space are different inputs.'
    ],
    examplesHeading: 'Worked URL encoding examples',
    samples: [
      { title: 'Encode “a b/c”', overrides: {}, blurb: 'encodeURIComponent writes the space as %20 and the slash as %2F. The headline is a%20b%2Fc. The letters stay as letters. This is one component, not a full URL.' },
      { title: 'Decode a%20b%2Fc', overrides: { mode: 2, text: 'a%20b%2Fc' }, blurb: 'The encode sample reversed. The headline is a b/c, with the space and the slash restored. A broken percent sequence would be rejected.' },
      { title: 'Decode a+b', overrides: { mode: 2, text: 'a+b' }, blurb: 'The plus sign stays a plus sign. The headline is a+b. A form-body decoder would have made that a space. This page uses decodeURIComponent and does not.' }
    ],
    table: {
      heading: 'Percent-encoding samples',
      caption: 'Each headline is this calculator. A plus sign is not treated as a space.',
      headers: ['Input', 'Headline']
    },
    limitsHeading: 'What this URL encoder does not build',
    limits: [
      'It does not build a full URL. Scheme, host, path, and query structure have to be assembled by you. The function encodes one component.',
      'A plus sign is not a space. That substitution belongs to application/x-www-form-urlencoded handling, and this decode path does not apply it.',
      'Encoding is not encryption. The percent map is public, and decode reverses it.',
      'A percent sign that is not followed by two hex digits is rejected. The input stops at 500 characters. Base64 is a different alphabet on a different page.'
    ],
    disclaimer: 'This percent-encodes or decodes one component with encodeURIComponent and decodeURIComponent. A plus sign is not a space, and the encoding is not encryption.',
    faqs: [
      { q: 'How does the URL encoder write a space and a slash?', a: 'With encodeURIComponent. The text “a b/c” becomes a%20b%2Fc. The space is %20 and the slash is %2F. Decoding that string returns a b/c.' },
      { q: 'Does URL decode turn a plus sign into a space?', a: 'No. Decoding a+b returns a+b. Plus-to-space is a form-body convention. This page uses decodeURIComponent. A space that was encoded for a URL is %20, and decoding a%20b returns “a b”.' },
      { q: 'Is percent-encoding encryption?', a: 'No. It is an encoding with a public map. Anyone can reverse a%20b. The page does not apply a key.' },
      { q: 'Will this page encode a whole web address?', a: 'It will run encodeURIComponent on whatever you paste, which also encodes the characters that hold an address together. The tool is for one component. Put that component into the address yourself.' }
    ],
    relatedLinks: [
      { slug: 'base64-converter', label: 'Base64 encoder', note: 'ClearCalc encodes as Q2xlYXJDYWxj. That is the Base64 alphabet, not percent-encoding, and it is not encryption either.' }
    ]
  }),

  'name-entertainment-score': page({
    slug: 'name-entertainment-score',
    title: 'Name Score | ClearCalc',
    h1: 'Name Score',
    description: 'Ada and Ben score 43 out of 100. The number is an arbitrary function of the letters. The same names always give the same number. It has no scientific validity and it is not a measure of a relationship.',
    intro: [
      'Ada and Ben produce 43 out of 100. The number is an arbitrary function of the letters in the order you type them. It is entertainment only. It has no scientific validity. It does not measure affection, compatibility, or a relationship, and it is not advice about any person.',
      'The same two names always produce the same number, so the result can be checked. It is not a new random draw on each visit. The page lowercases both names before the function runs, so ada and Ben is also 43. Swapping the order can change the number, because the two strings are joined in the order typed. Ben and Ada is 39 out of 100. Mia and Leo is 30 out of 100, which shows that a different pair is a different input and can land on a different remainder.',
      'Each name must be from 1 to 40 characters. The function then reduces the letters to a remainder from 0 through 100. A 0 and a 100 are both inside that range. Neither end means anything about the people named. Two strangers and two close friends are scored by the same letters-only rule.',
      'Nothing on the page reads a birthday, a location, or a history. Adding those facts would not make the number a measure of a relationship, because the page would still be ignoring them. The result is a property of the spelling you typed.'
    ],
    steps: [
      'Enter the first name, from 1 to 40 characters. The sample is Ada.',
      'Enter the second name. The sample is Ben.',
      'Press Calculate. The headline is a number out of 100.',
      'Run the same spelling again if you want to check it. The number does not change. Swap the boxes if you want to see that order is part of the input.'
    ],
    howHeading: 'How the entertainment score depends on the letters',
    howItWorks: [
      'The page trims each box, checks the length, and lowercases both strings. Ada and ada are the same input. The two lowercased strings are joined in order with a separator between them, then passed through a fixed function of those characters. The headline is the remainder of that function, from 0 through 100, written as “43 out of 100” for the sample.',
      'Because the function is fixed, repeating the visit repeats the number. Because the join keeps the first box first, Ben in the first box and Ada in the second is a different string and a different remainder, 39. Case does not add a third result. The sample and the lowercase sample agree at 43.',
      'The remainder is not a probability and not a grade. A higher number is not a better outcome. The function was chosen so that a pair can be demonstrated and checked, not so that the number tracks any measured trait. No data set was fit. No claim is made that people with a score of 43 share anything the letters do not already show.',
      'The length cap keeps the input in the range the form allows. Empty boxes are rejected. The calculation does not call a network and does not store the names as a profile. The entertainment label is the whole product.'
    ],
    formula: 'Score = a fixed function of the lowercased names, in the order typed, reduced to a remainder from 0 through 100\nThe same names always give the same number\nThe number has no scientific validity\nIt is not a measure of a relationship\nEntertainment only',
    formulaNotes: [
      'Ada and Ben is 43 out of 100. ada and ben is also 43, because the page lowercases the letters before the function.',
      'Ben and Ada is 39 out of 100. The letters are the same and the order is not, so the number can change. Mia and Leo is 30 out of 100.'
    ],
    examplesHeading: 'Worked name-score examples',
    samples: [
      { title: 'Ada and Ben', overrides: {}, blurb: 'The sample pair. The headline is 43 out of 100. The same spelling returns 43 on every visit. The number is a function of the letters and nothing else.' },
      { title: 'ada and ben, same letters in lowercase', overrides: { left: 'ada', right: 'ben' }, blurb: 'Case is folded away. The headline is again 43 out of 100. The check is that the score is not a fresh random draw and is not sensitive to capital letters.' },
      { title: 'Ben and Ada, order swapped', overrides: { left: 'Ben', right: 'Ada' }, blurb: 'The same names in the other order. The headline is 39 out of 100. Order is part of the arbitrary function. The change from 43 to 39 is not a statement about either person.' }
    ],
    table: {
      heading: 'The same function on three spellings',
      caption: 'Each headline is this calculator. Matching spellings match. None of the numbers measures a relationship.',
      headers: ['Names', 'Score']
    },
    limitsHeading: 'What the name score does not measure',
    limits: [
      'It has no scientific validity. It is an arbitrary function of the letters you type.',
      'It is not a measure of a relationship, of compatibility, or of affection. A repeated number only means the spelling was repeated.',
      'It is not advice about any person. Swapping the names can change the number because the order is part of the input.',
      'Birthdays, locations, and histories are not inputs. Adding them in your head does not attach the number to those facts. Each name must be 1 to 40 characters.'
    ],
    disclaimer: 'This score is entertainment. It is an arbitrary function of the letters, it has no scientific validity, and it is not a measure of a relationship.',
    faqs: [
      { q: 'What score do the names Ada and Ben produce?', a: '43 out of 100. The same names always produce that number. ada and ben is also 43 because the letters are lowercased first. The result is entertainment only.' },
      { q: 'Does the name score have any scientific validity?', a: 'No. It does not measure affection, compatibility, or a relationship. It is an arbitrary function of the letters in the order you type them, and it is not advice about any person.' },
      { q: 'Why is Ben and Ada a different number from Ada and Ben?', a: 'The two strings are joined in the order typed. Ben and Ada is 39 out of 100. The change is a property of that order. It is not a finding about either name.' },
      { q: 'Will Ada and Ben get a new score on the next visit?', a: 'No. The function is fixed. The same letters return 43 every time. It is not a random draw. Mia and Leo, a different pair, is 30 out of 100.' }
    ],
    relatedLinks: [
      { slug: 'base64-converter', label: 'Base64 encoder', note: 'ClearCalc encodes as Q2xlYXJDYWxj. That transforms text and is not a score. The name score is not an encoding of a relationship.' },
      { slug: 'url-encoding-converter', label: 'URL encoder', note: '“a b/c” becomes a%20b%2Fc. That is percent-encoding. It does not rate the text, and the name score does not encode a name.' }
    ]
  }),

  'circumference-ratio-calculator': page({
    slug: 'circumference-ratio-calculator',
    title: 'Waist-Hip Ratio Calculator | ClearCalc',
    h1: 'Waist-Hip Ratio Calculator',
    description: 'Waist 90 divided by hip 100 is 0.90. The World Health Organization figures used here are 0.90 for men and 0.85 for women, as a health-risk marker. Not a diagnosis and not a body-type grade.',
    intro: [
      'The waist-hip ratio is the waist circumference divided by the hip circumference. A waist of 90 and a hip of 100 is 0.90, and the headline is “waist-hip ratio 0.90”. The units cancel if both tapes use the same unit. Inches divided by inches and centimetres divided by centimetres are the same ratio. Mixing the units would make a meaningless quotient, and the page cannot see the unit labels because the boxes are plain numbers.',
      'The comparison figures are the ones the World Health Organization has used as a health-risk marker: above 0.90 for men and above 0.85 for women. At 0.90 the men’s result is at the figure, and the page treats “above” strictly, so the line says the ratio is at or under 0.90. The same 0.90 for women is above 0.85, so the line names that marker. A men’s waist of 95 and hip of 100 is 0.95, which is above 0.90.',
      'The marker is not a diagnosis. It is not an attractiveness score and it is not a body-type grade. The page also names the largest circumference you typed. With waist 90 and hip 100, the largest is the hip. That sentence describes the numbers only. A bust or chest of 110, a waist of 80, and a hip of 100 makes the largest the bust, prints a waist-hip ratio of 0.80, and prints bust divided by waist as 1.38. The 1.38 is 110 / 80. It is another description of the three numbers.',
      'The Army body-fat page uses neck, waist, hip, and height in a logarithm and does not divide waist by hip. The Navy body-fat page adds a weight. BMI uses weight and height. None of those is this ratio.'
    ],
    steps: [
      'Choose the men’s figure, 0.90, or the women’s figure, 0.85. The sample is men.',
      'Enter waist and hip in the same unit. The sample is 90 and 100.',
      'Enter a bust or chest if you want it included in the largest-circumference sentence. Leave 0 to skip it. The sample is 0.',
      'Press Calculate. The headline is the waist-hip ratio to two decimals. Read the marker line as a published figure, not as a diagnosis.'
    ],
    howHeading: 'How the waist-hip ratio and the largest tape are reported',
    howItWorks: [
      'The ratio is waist divided by hip, formatted to two decimal places. 90 / 100 is exact, so the sample prints 0.90. A hip of zero is rejected. The comparison uses a strict greater-than test against 0.90 or 0.85. Equality stays on the “at or under” side of the sentence. Women’s 0.90 is greater than 0.85, so the same tapes change sentence when the reference changes and the headline ratio does not.',
      'The largest circumference is the maximum of the positive tapes. A bust of 0 is left out, and the page says so. With only waist and hip, the larger of those two is named. The name is “waist”, “hip”, or “bust”. The sentence that follows says the naming describes the numbers and is not a body-type grade and not a comment on appearance. The page does not attach an adjective to the winner.',
      'When the bust is positive, the page also divides bust by waist and prints that second ratio to two decimals. 110 / 80 = 1.375, which prints as 1.38. That quotient is not compared with a health figure. Only the waist-hip ratio is compared with 0.90 or 0.85. A zero waist would make the bust-waist division fail, and a zero waist is already rejected because the waist box has to be positive.',
      'Measurement site, clothing, and time of day change a tape. The page divides the numbers after you have dealt with those choices. It does not convert inches to centimetres. It does not average a left and a right side. Two people with the same three numbers receive the same sentences, which is what a ratio of numbers does.'
    ],
    formula: 'Waist-hip ratio = waist / hip\nMen: the World Health Organization figure used here is 0.90\nWomen: the figure used here is 0.85\nA ratio above the figure is described as a health-risk marker\nLargest circumference = the greatest of waist, hip, and a bust entered above 0\nBust / waist is printed only when bust is above 0',
    formulaNotes: [
      '90 / 100 = 0.90. For men that is at the 0.90 figure, so the page does not call it above the marker. For women, 0.90 is above 0.85.',
      'Waist 80, hip 100, and bust 110: the ratio is 0.80, the largest tape is the bust, and bust / waist prints as 1.38. A men’s waist of 95 and hip of 100 is 0.95, above 0.90.'
    ],
    examplesHeading: 'Worked waist-hip examples',
    samples: [
      { title: 'Men, waist 90, hip 100', overrides: {}, blurb: 'The ratio is 0.90, level with the men’s figure. The page says the ratio is at or under 0.90. The largest tape is the hip, and the bust box is unused because it is 0.' },
      { title: 'Women, waist 90, hip 100', overrides: { sex: 2 }, blurb: 'The headline ratio is still 0.90. The women’s figure is 0.85, so 0.90 is above that marker. The sentence names a health-risk marker. It does not diagnose.' },
      { title: 'Men, waist 80, hip 100, bust 110', overrides: { waist: 80, hip: 100, bust: 110 }, blurb: 'The ratio is 0.80, at or under 0.90 for men. The largest circumference typed is the bust. Bust divided by waist is 1.38. That sentence describes the numbers only.' }
    ],
    table: {
      heading: 'Waist-hip ratios for three entries',
      caption: 'Each headline is this calculator. The 0.90 and 0.85 figures are health-risk markers, not a grade of a body.',
      headers: ['Tapes', 'Ratio']
    },
    limitsHeading: 'What a waist-hip ratio does not grade',
    limits: [
      'It is not a diagnosis. The 0.90 men’s figure and the 0.85 women’s figure are health-risk markers the World Health Organization has used. Crossing one does not diagnose a condition on this page.',
      'It is not an attractiveness score and it is not a body-type grade. The largest-circumference sentence describes which typed number is largest and stops there.',
      'It is not the Army body-fat percent and it is not the Navy body-fat percent. Those pages use logarithms of tapes. This page divides waist by hip.',
      'The tapes have to share a unit. The page does not convert inches and centimetres. Site, clothing, and time of day are not adjusted after you type.'
    ],
    disclaimer: 'This divides waist by hip and compares the ratio with the World Health Organization figures 0.90 for men and 0.85 for women. It is not a diagnosis and it does not grade a body.',
    faqs: [
      { q: 'What is the waist-hip ratio of a 90 waist and a 100 hip?', a: '0.90. For the men’s figure, 0.90 is at the marker, so the page says the ratio is at or under 0.90. For the women’s figure of 0.85, the same 0.90 is above the marker.' },
      { q: 'Are 0.90 and 0.85 a diagnosis or a body-type grade?', a: 'No. They are World Health Organization figures used as a health-risk marker. The page does not diagnose. The largest circumference is a description of the numbers only, not an attractiveness score and not a body-type grade.' },
      { q: 'What does the page say when a bust measurement is the largest number?', a: 'It names the bust as the largest circumference typed. Waist 80, hip 100, and bust 110 give a waist-hip ratio of 0.80 and a bust-to-waist figure of 1.38. The naming describes those numbers.' },
      { q: 'How is this different from the Army body-fat calculator?', a: 'The Army page uses the AR 600-9 logarithms of height and circumferences and prints a percent. A man at 70 inches, neck 15, and waist 36 is 21.3% there. This page divides waist by hip and does not use height or neck.' }
    ],
    relatedLinks: [
      { slug: 'army-body-fat-calculator', label: 'Army body fat calculator', note: 'AR 600-9 equations. A man at 70 inches, neck 15, and waist 36 is 21.3%. That percent does not pass or fail a soldier, and it is not a waist-hip ratio.' },
      { slug: 'body-fat-calculator', label: 'Body fat calculator', note: 'U.S. Navy circumferences and a weight. A man at 70 inches, neck 15, waist 34, and 180 pounds is 17.51% there.' },
      { slug: 'bmi-calculator', label: 'BMI calculator', note: 'Weight divided by height squared. It does not take a waist or a hip circumference.' }
    ]
  }),

  'unofficial-points-estimator': page({
    slug: 'unofficial-points-estimator',
    title: 'Unofficial Food Points Estimator | ClearCalc',
    h1: 'Unofficial Food Points Estimator',
    description: 'Calories divided by 50, plus fat grams divided by 12, minus min(fiber grams, 4) divided by 5, floored at 0. The sample 250 kcal, 10 g fat, and 3 g fiber prints 5.2. Not a Weight Watchers value.',
    intro: [
      'The points figure on this page is calories / 50 + fat grams / 12 − min(fiber grams, 4) / 5, and a negative result is shown as zero. For 250 kcal, 10 g fat, and 3 g fiber the arithmetic is 250 / 50 + 10 / 12 − 3 / 5 = 5 + 5/6 − 0.6 = 5.2333…, and the page prints 5.2. That is the formula the code runs. There is not a second formula beside it.',
      'Fiber above 4 grams does not change the subtraction. min(8, 4) is 4, so 8 g of fiber subtracts 4 / 5 = 0.8, and 250 kcal with 10 g fat prints 5. The same 5 appears at exactly 4 g of fiber, because the cap and the actual fiber are equal there. A food with 0 kcal, 0 g fat, and 4 g fiber would be 0 + 0 − 0.8 = −0.8, and the page floors that at 0.',
      'This is an unofficial arithmetic approximation of an old publicly described points formula. It is not a current Weight Watchers, WW, SmartPoints, or PersonalPoints value. ClearCalc is not affiliated with that company. The current program’s formula is proprietary and is not used here. Matching or missing a number in a current app is expected, because that number is not what this page computes.',
      'The result is not a diet, a medical target, or a recommendation to eat toward a points number. The calorie calculator and the TDEE calculator estimate a day’s energy. The macro calculator turns percents you pick into grams. The nutrient-range page reports adult carbohydrate and fat spans. None of them produces this points figure.'
    ],
    steps: [
      'Enter calories. The sample is 250 kcal. Zero is allowed.',
      'Enter fat grams and fiber grams. The sample is 10 g fat and 3 g fiber.',
      'Press Calculate. The headline is the formula, printed to one decimal, and never below 0.',
      'Do not compare the headline with a current Weight Watchers, WW, SmartPoints, or PersonalPoints value. Those formulas are not used.'
    ],
    howHeading: 'How the unofficial points arithmetic is evaluated',
    howItWorks: [
      'Calories are divided by 50. Fat grams are divided by 12. Fiber grams are capped at 4, then divided by 5, and that term is subtracted. The three terms are added with ordinary floating-point division. The display keeps one decimal place. The sample’s exact sum is 5.2333…, so the tenths digit is 2 and the headline is 5.2. The page does not round the fat term to a nearby fraction before adding.',
      'The fiber cap is a minimum of the typed fiber and 4. Fiber of 0 subtracts nothing. Fiber of 3 subtracts 0.6. Fiber of 4 and every larger fiber subtract 0.8. That is why 8 g and 4 g give the same headline on the 250 kcal, 10 g fat food. Extra fiber beyond 4 is still recorded in the sense that you typed it, and it does not enter the arithmetic again.',
      'The floor is applied after the sum. Only a negative sum becomes 0. A small positive sum stays positive and can print as 0.1 or, if it is under 0.05, as 0 after one-decimal rounding. The explicit floor is the max(0, sum) step, which is what turns −0.8 into 0 on the zero-calorie, 4 g fiber example. Rounding and the floor are different. The sample does not need the floor.',
      'No branded point value is fetched, scaled, or hidden in the coefficients. The coefficients are 50, 12, and 5, and the fiber cap is 4, because that is the approximation this page publishes. Changing them to chase a current app would be a different formula, and this page does not do that.'
    ],
    formula: 'Points = calories / 50 + fat grams / 12 − min(fiber grams, 4) / 5\nIf that sum is negative, the result is 0\n250 / 50 + 10 / 12 − min(3, 4) / 5 = 5.2333…, shown as 5.2\nNot a Weight Watchers, WW, SmartPoints, or PersonalPoints value',
    formulaNotes: [
      'The sample uses the formula as written. 5 + 10/12 − 3/5 prints as 5.2. Fiber of 8 on the same calories and fat uses min(8, 4) = 4 and prints 5.',
      'Calories 0, fat 0, and fiber 4 produce 0 − 0.8, which is floored to 0. The floor does not raise a positive result.'
    ],
    examplesHeading: 'Worked unofficial points examples',
    samples: [
      { title: '250 kcal, 10 g fat, 3 g fiber', overrides: {}, blurb: 'The formula is 250/50 + 10/12 − min(3, 4)/5. That sum is 5.2333…, and the headline is 5.2. The fiber term uses the 3 g that were typed, because 3 is under the cap of 4.' },
      { title: 'The same food with 8 g fiber', overrides: { fiber: 8 }, blurb: 'min(8, 4) is 4, so the fiber term is 0.8 rather than 8/5. The headline is 5. Fiber above 4 grams does not move this approximation any further.' },
      { title: '0 kcal, 0 g fat, 4 g fiber', overrides: { calories: 0, fat: 0, fiber: 4 }, blurb: 'The sum is −0.8. The page floors a negative result at 0, so the headline is 0. The floor is part of the stated formula.' }
    ],
    table: {
      heading: 'Unofficial points for three foods',
      caption: 'Each headline is this calculator using calories/50 + fat/12 − min(fiber, 4)/5, floored at 0. These are not Weight Watchers points.',
      headers: ['Food', 'Points']
    },
    limitsHeading: 'What this points figure is not',
    limits: [
      'It is not a Weight Watchers, WW, SmartPoints, or PersonalPoints value. ClearCalc is not affiliated with that company. The current proprietary formula is not used.',
      'It is not a diet, a medical target, or a suggestion to eat toward a number of points.',
      'Fiber above 4 grams does not change the result. A different fiber credit would be a different formula.',
      'A negative sum is shown as 0. The page does not produce a negative headline. Calories, fat, and fiber are the only inputs.'
    ],
    disclaimer: 'This is an unofficial approximation: calories/50 + fat/12 − min(fiber, 4)/5, floored at 0. It is not a Weight Watchers, WW, SmartPoints, or PersonalPoints value, and ClearCalc is not affiliated with that company.',
    faqs: [
      { q: 'What does 250 kcal, 10 g fat, and 3 g fiber score on this estimator?', a: '5.2. The formula is 250/50 + 10/12 − min(3, 4)/5 = 5 + 10/12 − 0.6, which is 5.2333… and prints as 5.2. That is the formula the page runs.' },
      { q: 'Is this a Weight Watchers, SmartPoints, or PersonalPoints value?', a: 'No. It is not a current Weight Watchers, WW, SmartPoints, or PersonalPoints value. ClearCalc is not affiliated with that company. The current program’s formula is proprietary and is not used here.' },
      { q: 'Why does 8 g of fiber score the same as the cap?', a: 'The formula subtracts min(fiber, 4) / 5. Fiber of 8 uses 4, the same as fiber of 4. On 250 kcal and 10 g fat the headline is 5. Fiber above 4 grams does not change this approximation.' },
      { q: 'Can the unofficial points headline be negative?', a: 'No. The sum is floored at 0. A food with 0 kcal, 0 g fat, and 4 g fiber has a raw sum of −0.8 and a headline of 0.' }
    ],
    relatedLinks: [
      { slug: 'calorie-calculator', label: 'Calorie calculator', note: 'Mifflin–St Jeor maintenance calories for a day. It does not turn one food into this points figure.' },
      { slug: 'nutrient-range-calculator', label: 'Carbohydrate and fat range calculator', note: 'Adult AMDR spans. At 2,000 kcal the carbohydrate range is 225 to 325 g. That is not a points score.' },
      { slug: 'macro-calculator', label: 'Macro calculator', note: 'Grams from percents you pick. It is not calories/50 + fat/12 − min(fiber, 4)/5.' }
    ]
  }),

  'us-tax-balance-calculator': page({
    slug: 'us-tax-balance-calculator',
    title: 'US Tax Balance Calculator | ClearCalc',
    h1: 'US Tax Balance Calculator',
    description: '2026 standard deduction and Rev. Proc. 2025-32 brackets. Single wages of $80,000 with $8,000 withheld leave $770.00 of income tax due. FICA is shown and is not in that comparison. Not a tax return.',
    intro: [
      'Wages mode compares federal income tax with the federal income tax you say was withheld. Single wages of $80,000 use the 2026 standard deduction of $16,100. Taxable income is $63,900. The Rev. Proc. 2025-32 single brackets produce $8,770.00 of income tax. Against $8,000 withheld, the headline is $770.00 still due. Employee Social Security on that wage is $4,960.00 and employee Medicare is $1,160.00. Those FICA amounts are shown and are not part of the $770.00. FICA is not reconciled on the income-tax line in this estimate.',
      'Married filing jointly on the same $80,000 of wages uses the $32,200 standard deduction. Taxable income is $47,800 and income tax is $5,240.00. The same $8,000 of withholding becomes a $2,760.00 refund of income tax. Employee FICA does not change at this wage, because the wage is under the Social Security base and under the additional Medicare threshold. It is still shown and still left out of the refund.',
      'A single wage of $250,000 shows the exclusion clearly. Income tax is $51,304.00. With $45,000 withheld, the headline is $6,304.00 still due, which is the income tax minus the withholding. Social Security is $11,439.00, the 6.2 percent employee share on the $184,500 wage base, and Medicare is $4,075.00. Neither figure is inside the $6,304.00.',
      'Self-employment mode taxes 92.35 percent of the net profit. Social Security is 12.4 percent of that base up to $184,500. Medicare is 2.9 percent of that base. Half of the Social Security and Medicare portions is deducted before income tax. Additional Medicare is not in that half. On $80,000 of profit the self-employment tax is $11,303.64, the deductible half is $5,651.82, additional Medicare is $0.00, and income tax is $7,526.60. After $8,000 withheld, $10,830.24 is still due. This is not a tax return.'
    ],
    steps: [
      'Choose wages or net self-employment profit. The sample is wages.',
      'Choose single or married filing jointly. The sample is single, with a $16,100 standard deduction.',
      'Enter the wages or the net profit, and the federal income tax already withheld. The sample is $80,000 and $8,000.',
      'Press Calculate. In wages mode, compare the headline with the income-tax line only. Read FICA on its own line and leave it out of that comparison.'
    ],
    howHeading: 'How the 2026 balance is compared with withholding',
    howItWorks: [
      'Income tax starts with the standard deduction, $16,100 single or $32,200 joint, subtracted from wages or from self-employment profit after the deductible half. The brackets are the Rev. Proc. 2025-32 dollar thresholds. Single taxable income is 10 percent to $12,400, 12 percent to $50,400, 22 percent to $105,700, 24 percent to $201,775, 32 percent to $256,225, 35 percent to $640,600, and 37 percent above that. Joint taxable income is 10 percent to $24,800, 12 percent to $100,800, 22 percent to $211,400, 24 percent to $403,550, 32 percent to $512,450, 35 percent to $768,700, and 37 percent above that. Each rate applies only to the slice inside its threshold.',
      'On single wages of $80,000 the slices are $1,240.00 of tax in the 10 percent band, $4,560.00 in the 12 percent band on the $38,000 between $12,400 and $50,400, and $2,970.00 in the 22 percent band on the $13,500 between $50,400 and $63,900. The sum is $8,770.00. Subtracting $8,000 of withholding leaves $770.00. Joint wages of $80,000 are $2,480.00 on the first $24,800 and $2,760.00 on the remaining $23,000, which is $5,240.00 of tax and a $2,760.00 refund against the same withholding.',
      'Wages-mode FICA is computed and then set aside. Employee Social Security is 6.2 percent of wages up to $184,500. Employee Medicare is 1.45 percent of all wages, plus 0.9 percent of wages over $200,000 single or $250,000 joint. At $250,000 single, Social Security stops at $11,439.00 and the Medicare line is $4,075.00, which includes the additional 0.9 percent on $50,000. The headline $6,304.00 is $51,304.00 minus $45,000. Adding the FICA lines into that headline would be a different comparison, and the page does not do it.',
      'Self-employment multiplies profit by 0.9235. Social Security is 12.4 percent of the smaller of that base and $184,500. Medicare is 2.9 percent of the base. Half of those two portions is subtracted from profit before the income-tax brackets. Additional Medicare, 0.9 percent of the base over $200,000 single or $250,000 joint, is calculated and is not included in the half. The amount due is income tax plus self-employment tax plus additional Medicare, minus withholding. On $250,000 of single profit the page shows self-employment tax of $29,573.38, a deductible half of $14,786.69, additional Medicare of $277.88, income tax of $46,572.26, and $36,423.51 still due after $40,000 withheld. A W-2 wage and a self-employment profit in the same year are not combined.'
    ],
    formula: 'Wages: income tax on max(0, wages − standard deduction), using Rev. Proc. 2025-32\nBalance = income tax − withholding\nFICA is shown and is not in that balance\nStandard deduction: $16,100 single, $32,200 joint\nSelf-employment base = profit × 92.35%\nSocial Security = 12.4% of the base up to $184,500\nMedicare = 2.9% of the base\nDeductible half = half of Social Security and Medicare, not half of additional Medicare\nAdditional Medicare = 0.9% of the base over $200,000 single or $250,000 joint\nSelf-employment balance = income tax + self-employment tax + additional Medicare − withholding',
    formulaNotes: [
      'Single wages of $80,000: taxable $63,900, income tax $8,770.00, withholding $8,000, balance $770.00 still due. Social Security $4,960.00 and Medicare $1,160.00 are not inside the $770.00. Joint wages of $80,000: income tax $5,240.00 and a $2,760.00 refund of income tax.',
      'Single self-employment profit of $80,000: base $73,880, self-employment tax $11,303.64, deductible half $5,651.82, additional Medicare $0.00, income tax $7,526.60, balance $10,830.24 still due after $8,000 withheld. At $250,000 the Social Security portion stops at the $184,500 base and additional Medicare of $277.88 is excluded from the $14,786.69 half.'
    ],
    examplesHeading: 'Worked 2026 tax-balance examples',
    samples: [
      { title: 'Single wages $80,000, $8,000 withheld', overrides: {}, blurb: 'Income tax is $8,770.00 after the $16,100 standard deduction. The headline is $770.00 still due. Employee Social Security is $4,960.00 and Medicare is $1,160.00, and those FICA amounts are not part of the $770.00.' },
      { title: 'Joint wages $80,000, $8,000 withheld', overrides: { status: 2 }, blurb: 'The joint standard deduction is $32,200, so income tax falls to $5,240.00. The headline is a $2,760.00 refund of income tax. FICA at this wage matches the single wage and stays out of the refund.' },
      { title: 'Single wages $250,000, $45,000 withheld', overrides: { income: 250000, withheld: 45000 }, blurb: 'Income tax is $51,304.00 and the headline is $6,304.00 still due. Social Security is $11,439.00 because the wage base is $184,500, and Medicare is $4,075.00. The headline does not subtract those amounts again or add them in.' },
      { title: 'Single self-employment $80,000, $8,000 withheld', overrides: { mode: 2 }, blurb: '92.35 percent of the profit is $73,880. Self-employment tax is $11,303.64. Half of that, $5,651.82, is deducted before income tax of $7,526.60. Additional Medicare is $0.00. The headline is $10,830.24 still due.' },
      { title: 'Single self-employment $250,000, $40,000 withheld', overrides: { mode: 2, income: 250000, withheld: 40000 }, blurb: 'The 92.35 percent base is above $184,500, so the 12.4 percent Social Security portion stops at that cap. Additional Medicare is $277.88 and is not in the deductible half of $14,786.69. The headline is $36,423.51 still due.' }
    ],
    table: {
      heading: '2026 balances from five income entries',
      caption: 'Each headline is this calculator. Wages headlines compare income tax with withholding only. Self-employment headlines include self-employment tax. None of these is a tax return.',
      headers: ['Income', 'Balance']
    },
    limitsHeading: 'What this tax balance leaves out',
    limits: [
      'It is not a tax return. Credits, dependents, itemized deductions, investment income, and state tax are not included. The federal income tax calculator computes income tax on a wage and can subtract a traditional 401(k). It does not ask for withholding and it does not compute self-employment tax.',
      'Wages mode shows FICA and keeps it out of the refund or amount due. Self-employment mode includes self-employment tax and additional Medicare in the amount due, because that mode is estimating the tax on the profit rather than reconciling an employee income-tax line.',
      'The deductible half of self-employment tax is half of the 12.4 percent and 2.9 percent portions only. Additional Medicare is not in that half. The Social Security portion stops at $184,500 of the 92.35 percent base.',
      'A W-2 wage and a self-employment profit in the same year are not combined. Filing statuses other than single and married filing jointly are not offered. The brackets and the standard deduction are the 2026 figures from Rev. Proc. 2025-32.'
    ],
    disclaimer: 'This compares a 2026 estimate with the withholding you type. FICA on wages is shown and is not part of that income-tax comparison. It is not a tax return.',
    faqs: [
      { q: 'How much 2026 income tax is still due on $80,000 of single wages with $8,000 withheld?', a: 'The headline is $770.00 still due. Income tax is $8,770.00 after the $16,100 standard deduction, using the Rev. Proc. 2025-32 brackets. Employee Social Security of $4,960.00 and Medicare of $1,160.00 are shown and are not part of the $770.00.' },
      { q: 'Why is FICA left out of the wage refund comparison?', a: 'The wages headline is income tax minus the federal income tax withheld. FICA is a separate payroll tax in this estimate and is not reconciled on that income-tax line. On $250,000 of single wages with $45,000 withheld, the headline is $6,304.00 still due even though Social Security is $11,439.00 and Medicare is $4,075.00.' },
      { q: 'How is self-employment tax calculated on $80,000 of profit?', a: 'The base is 92.35 percent, $73,880. Social Security is 12.4 percent of that base and Medicare is 2.9 percent, together $11,303.64. Half, $5,651.82, is deducted before income tax of $7,526.60. Additional Medicare is $0.00 on this profit and would not have entered the half anyway. After $8,000 withheld, $10,830.24 is still due.' },
      { q: 'Is additional Medicare included in the deductible half of self-employment tax?', a: 'No. On $250,000 of single profit the deductible half is $14,786.69, from the Social Security and 2.9 percent Medicare portions, with Social Security limited to the $184,500 base. Additional Medicare of $277.88 is outside that half. The headline after $40,000 withheld is $36,423.51 still due.' },
      { q: 'Is the US tax balance calculator a tax return?', a: 'No. It uses the 2026 standard deduction and the Rev. Proc. 2025-32 brackets for single or married filing jointly. It omits credits, dependents, and state tax, and it does not combine wages with self-employment profit.' }
    ],
    relatedLinks: [
      { slug: 'us-federal-income-tax-calculator', label: 'US federal income tax calculator', note: 'Income tax on a wage after the 2026 standard deduction, with an optional traditional 401(k). It does not compare withholding and it does not compute self-employment tax.' }
    ]
  })
};
