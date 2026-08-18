export const calculators = [
  { slug: 'mortgage-calculator', icon: '⌂', category: 'Finance', title: 'Mortgage Calculator', description: 'Estimate your monthly mortgage payment, total interest, and total repayment.', fields: [
    ['principal', 'Home loan amount', 'number', 300000, 'USD'], ['rate', 'Annual interest rate', 'number', 6.5, '%'], ['years', 'Loan term', 'number', 30, 'years']
  ]},
  { slug: 'loan-calculator', icon: '$', category: 'Finance', title: 'Loan Calculator', description: 'Calculate payments and total interest for a fixed-rate personal or auto loan.', fields: [
    ['principal', 'Loan amount', 'number', 25000, 'USD'], ['rate', 'Annual interest rate', 'number', 7.5, '%'], ['years', 'Loan term', 'number', 5, 'years']
  ]},
  { slug: 'compound-interest-calculator', icon: '↗', category: 'Finance', title: 'Compound Interest Calculator', description: 'Project how savings can grow with compound interest and monthly contributions.', fields: [
    ['principal', 'Initial investment', 'number', 10000, 'USD'], ['monthly', 'Monthly contribution', 'number', 250, 'USD'], ['rate', 'Annual return', 'number', 7, '%'], ['years', 'Years', 'number', 10, 'years']
  ]},
  { slug: 'bmi-calculator', icon: '♥', category: 'Health', title: 'BMI Calculator', description: 'Calculate adult body mass index using height and weight.', fields: [
    ['weight', 'Weight', 'number', 75, 'kg'], ['height', 'Height', 'number', 175, 'cm']
  ]},
  { slug: 'calorie-calculator', icon: '⚡', category: 'Health', title: 'Calorie Calculator', description: 'Estimate daily calories needed to maintain your current weight.', fields: [
    ['age', 'Age', 'number', 30, 'years'], ['weight', 'Weight', 'number', 75, 'kg'], ['height', 'Height', 'number', 175, 'cm'], ['activity', 'Activity multiplier', 'number', 1.55, '']
  ]},
  { slug: 'percentage-calculator', icon: '%', category: 'Math', title: 'Percentage Calculator', description: 'Find what percentage one number is of another.', fields: [
    ['part', 'Part', 'number', 25, ''], ['whole', 'Whole', 'number', 200, '']
  ]},
  { slug: 'tip-calculator', icon: '★', category: 'Everyday', title: 'Tip Calculator', description: 'Split a bill and tip fairly between any number of people.', fields: [
    ['bill', 'Bill amount', 'number', 85, 'USD'], ['tip', 'Tip percentage', 'number', 18, '%'], ['people', 'Number of people', 'number', 2, '']
  ]},
  { slug: 'age-calculator', icon: '◷', category: 'Date & Time', title: 'Age Calculator', description: 'Calculate your exact age in years, months, and days.', fields: [
    ['birthdate', 'Date of birth', 'date', '1990-01-01', ''], ['targetdate', 'Age on date', 'date', '', '']
  ]},
  { slug: 'date-difference-calculator', icon: '▦', category: 'Date & Time', title: 'Date Difference Calculator', description: 'Count the exact number of days between two dates.', fields: [
    ['startdate', 'Start date', 'date', '2026-01-01', ''], ['enddate', 'End date', 'date', '2026-12-31', '']
  ]},
  { slug: 'unit-converter', icon: '⇄', category: 'Conversions', title: 'Length Converter', description: 'Convert common length measurements quickly and accurately.', fields: [
    ['value', 'Value', 'number', 1, ''], ['factor', 'Convert meters to', 'select', '3.28084', '']
  ], options: [['3.28084', 'Feet'], ['39.3701', 'Inches'], ['1.09361', 'Yards'], ['0.001', 'Kilometers']]},
  { slug: 'gpa-calculator', icon: 'A+', category: 'Education', title: 'GPA Calculator', description: 'Estimate a grade point average from four course grades.', fields: [
    ['grade1', 'Course 1 grade points', 'number', 4, ''], ['grade2', 'Course 2 grade points', 'number', 3, ''], ['grade3', 'Course 3 grade points', 'number', 3.7, ''], ['grade4', 'Course 4 grade points', 'number', 3.3, '']
  ]},
  { slug: 'discount-calculator', icon: '−', category: 'Everyday', title: 'Discount Calculator', description: 'Find a sale price and how much money you save.', fields: [
    ['price', 'Original price', 'number', 100, 'USD'], ['discount', 'Discount', 'number', 20, '%']
  ]}
];

export const categories = [...new Set(calculators.map((item) => item.category))];
