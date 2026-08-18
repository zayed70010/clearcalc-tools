const money = (value) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 }).format(value);
const number = (value, digits = 2) => new Intl.NumberFormat('en-US', { maximumFractionDigits: digits }).format(value);

export function calculate(slug, values) {
  const v = Object.fromEntries(Object.entries(values).map(([key, val]) => [key, key.includes('date') ? val : Number(val)]));
  if (slug === 'mortgage-calculator' || slug === 'loan-calculator') {
    const months = v.years * 12;
    const r = v.rate / 1200;
    const payment = r === 0 ? v.principal / months : v.principal * r * (1 + r) ** months / ((1 + r) ** months - 1);
    const total = payment * months;
    return { headline: `${money(payment)} / month`, details: [`Total repayment: ${money(total)}`, `Total interest: ${money(total - v.principal)}`] };
  }
  if (slug === 'compound-interest-calculator') {
    const months = v.years * 12, r = v.rate / 1200;
    const futurePrincipal = v.principal * (1 + r) ** months;
    const futureContributions = r === 0 ? v.monthly * months : v.monthly * (((1 + r) ** months - 1) / r);
    const total = futurePrincipal + futureContributions, contributed = v.principal + v.monthly * months;
    return { headline: money(total), details: [`Total contributions: ${money(contributed)}`, `Estimated growth: ${money(total - contributed)}`] };
  }
  if (slug === 'bmi-calculator') {
    const bmi = v.weight / ((v.height / 100) ** 2);
    const category = bmi < 18.5 ? 'Underweight' : bmi < 25 ? 'Healthy range' : bmi < 30 ? 'Overweight' : 'Obesity range';
    return { headline: `BMI ${number(bmi, 1)}`, details: [`Category: ${category}`, 'BMI is a screening measure, not a medical diagnosis.'] };
  }
  if (slug === 'calorie-calculator') {
    const bmr = 10 * v.weight + 6.25 * v.height - 5 * v.age + 5;
    return { headline: `${number(bmr * v.activity, 0)} calories/day`, details: ['Estimate based on the Mifflin–St Jeor equation for men.', 'Individual needs can differ.'] };
  }
  if (slug === 'percentage-calculator') return { headline: `${number(v.part / v.whole * 100)}%`, details: [`${number(v.part)} is ${number(v.part / v.whole * 100)}% of ${number(v.whole)}.`] };
  if (slug === 'tip-calculator') {
    const tipAmount = v.bill * v.tip / 100, total = v.bill + tipAmount;
    return { headline: `${money(total / v.people)} per person`, details: [`Tip: ${money(tipAmount)}`, `Total bill: ${money(total)}`] };
  }
  if (slug === 'age-calculator') {
    const birth = new Date(`${v.birthdate}T00:00:00`), target = v.targetdate ? new Date(`${v.targetdate}T00:00:00`) : new Date();
    let years = target.getFullYear() - birth.getFullYear(), months = target.getMonth() - birth.getMonth(), days = target.getDate() - birth.getDate();
    if (days < 0) { months--; days += new Date(target.getFullYear(), target.getMonth(), 0).getDate(); }
    if (months < 0) { years--; months += 12; }
    return { headline: `${years} years`, details: [`${months} months and ${days} days beyond the last birthday.`] };
  }
  if (slug === 'date-difference-calculator') {
    const days = Math.abs(new Date(v.enddate) - new Date(v.startdate)) / 86400000;
    return { headline: `${number(days, 0)} days`, details: [`Approximately ${number(days / 7)} weeks.`] };
  }
  if (slug === 'unit-converter') return { headline: number(v.value * v.factor, 4), details: [`Converted from ${number(v.value, 4)} meter(s).`] };
  if (slug === 'gpa-calculator') {
    const gpa = (v.grade1 + v.grade2 + v.grade3 + v.grade4) / 4;
    return { headline: `${number(gpa, 2)} GPA`, details: ['Unweighted average on a 4.0 scale.'] };
  }
  if (slug === 'discount-calculator') {
    const saved = v.price * v.discount / 100;
    return { headline: money(v.price - saved), details: [`You save ${money(saved)}.`] };
  }
  throw new Error('Unsupported calculator');
}
