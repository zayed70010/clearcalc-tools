import { calculate } from '../lib/calculate.js';
import { daily15OtherContent } from './daily15-other-content.js';
import { daily15PayContent } from './daily15-pay-content.js';
import { daily15Run } from './daily15-page.js';

export const daily15CalculatorContent = {
  ...daily15PayContent,
  ...daily15OtherContent
};

function addLink(content, from, slug, label, note) {
  const entry = content[from];
  if (!entry) return;
  entry.relatedLinks = entry.relatedLinks ?? [];
  if (!entry.relatedLinks.some((item) => item.slug === slug)) entry.relatedLinks.push({ slug, label, note });
}

function interestLine(result) {
  return result.details.find((item) => item.startsWith('Total interest:')) ?? '';
}

export function applyDaily15Deepening(content) {
  const sales = content['sales-tax-calculator'];
  sales.title = 'Sales Tax Calculator by State: Pre-Tax Price from a Receipt (2026) | ClearCalc';
  sales.h1 = 'Sales Tax Calculator by State: Pre-Tax Price or Receipt Total';
  sales.description = 'Sales tax calculator by state for 2026. Add tax to a price, or reverse sales tax to find the pre-tax price inside a receipt total. $100 at 8.25% is $108.25. $108.25 at 8.25% returns $100.00 before tax. Statewide presets stay on the 1 July 2026 base rates. This is not UK VAT or GST.';
  sales.intro.unshift('The receipt question is the reverse. If the amount you have is a total that already includes sales tax, choose that mode, keep the rate that was charged, and the calculator divides by 1 plus the rate. $108.25 at 8.25% returns a pre-tax price of $100.00, and the tax inside the receipt is $8.25. The forward path is the other choice: a price before tax times the rate, rounded to the cent, then added. Both paths use one US sales-tax rate. They do not compute UK VAT, Canadian GST or HST, or Australian GST.');
  sales.howItWorks.unshift('A shopper who only has the receipt total needs the reverse, not a second rate. The pre-tax price is the total divided by 1 plus the rate, rounded to the nearest cent. The tax is the total minus that price. On a total this page just built, the reverse returns the price the forward calculation started from. $108.25 at 8.25% is the check: it returns $100.00. A combined city rate belongs in the percent box. Picking a state uses the statewide base and ignores the typed percent, which is why a Texas receipt at 8.25% should stay on the typed rate rather than the 6.25% state row.');
  const reverseRows = [
    [108.25, 8.25, 'Typed 8.25%'],
    [53.3, 6.625, 'New Jersey statewide 6.625% on a $53.30 total'],
    [106.25, 6.25, 'Texas statewide 6.25% on a $106.25 total'],
    [107.25, 7.25, 'California statewide 7.25% on a $107.25 total']
  ].map(([amount, rate, label]) => {
    const result = calculate('sales-tax-calculator', { amount, mode: 2, preset: 'custom', rate });
    const tax = result.details.find((item) => item.startsWith('Sales tax inside the total'));
    return [label, `$${amount.toFixed(2)}`, `${rate}%`, result.headline, tax.replace('Sales tax inside the total: ', '')];
  });
  sales.extraSections = [
    ...(sales.extraSections ?? []),
    {
      heading: 'Reverse sales tax: pre-tax price from a receipt total',
      paragraphs: [
        'Use the second choice on the form when the amount is the number printed at the bottom of a receipt. Divide that total by 1 plus the rate that was actually charged, not by the rate you wish the city used. The table below is this calculator in reverse, with the percent typed rather than taken from the state menu. New Jersey’s $53.30 row is the forward total of $49.99 at 6.625%, read backwards. Texas at 6.25% and California at 7.25% are the statewide bases, not a city add-on.',
        'The tax as a share of the receipt is smaller than the rate. $8.25 is 8.25% of the $100 price and about 7.62% of the $108.25 total. Typing 7.62 back into the rate box would not recover $100. The rate is the percent that was applied to the price before tax.'
      ],
      table: {
        heading: 'Pre-tax price inside a receipt',
        caption: 'Each row is this sales-tax calculator with the amount set to a total that already includes tax and the rate typed by hand. State presets are not used in this table.',
        headers: ['Receipt', 'Total', 'Rate', 'Price before tax', 'Tax inside the total'],
        rows: reverseRows
      }
    },
    {
      heading: 'A US sales-tax rate is not VAT or GST',
      paragraphs: [
        'UK VAT at 20%, 5%, or 0% is the VAT calculator, in pounds. Canadian GST and HST use the CRA rates, including Ontario at 13%. Australian GST is 10% and is removed from a tax-inclusive price on the Australia GST page. This sales-tax page stays in US dollars and uses either a percent you type or a statewide base rate. It does not become a VAT or GST clone when you type 20 or 10. Those numbers are only a percent, and the currency symbol remains $.'
      ]
    }
  ];
  const removeFaq = sales.faqs.find((item) => item.q.startsWith('How do I remove sales tax'));
  if (removeFaq) {
    removeFaq.a += ' A $53.30 New Jersey total at 6.625% returns the $49.99 price the forward path started from. A $106.25 Texas total at 6.25% returns $100.00. If the receipt used a city rate, type that combined rate. Selecting the state menu instead would use only the statewide base.';
  }

  const card = content['credit-card-payoff-calculator'];
  card.title = 'Credit Card Payoff Calculator: Months, Interest, and a Larger Payment | ClearCalc';
  card.h1 = 'Credit Card Payoff Calculator: Months and Total Interest';
  card.description = 'Credit card payoff calculator for the months to clear a balance, the total interest, and the effect of a larger fixed payment. A $5,000 balance at 21.99% takes 34 months at $200 a month and $1,748.71 of interest. A larger fixed payment shortens that count. One card, not a debt stack and not a mortgage.';
  card.intro.unshift('The number people want from a card balance is the months to payoff, the interest those months add, and what happens if the fixed payment is larger. On a $5,000 balance at 21.99%, $200 a month takes 34 months and $1,748.71 of interest. The same balance at $300 a month takes fewer months and less interest, because more of each payment reaches principal after the monthly interest. The payment is a dollar amount you choose. It is not a minimum-payment percentage that shrinks as the balance shrinks.');
  const paymentRows = [200, 250, 300, 400].map((payment) => {
    const result = calculate('credit-card-payoff-calculator', { balance: 5000, apr: 21.99, payment });
    return [`$${payment}`, result.headline, interestLine(result).replace('Total interest: ', '')];
  });
  card.extraSections = [
    ...(card.extraSections ?? []),
    {
      heading: 'What a larger fixed payment does to a $5,000 balance',
      paragraphs: [
        'Every row is the same $5,000 balance at 21.99%. Only the fixed payment changes. Interest is still the unpaid balance times the APR divided by 12, rounded to the nearest cent, then the payment is applied. A larger payment does not change the APR. It changes how many months the balance survives and how much interest is charged along the way. The $200 row is the sample: 34 months and $1,748.71 of interest.',
        'This is one revolving balance. The debt-payoff calculator runs two to four balances and aims an extra payment at the smallest balance or the highest rate. The mortgage-payoff calculator adds extra principal to an installment loan that already has a term. Neither of those jobs is this month count.'
      ],
      table: {
        heading: 'Larger payments on $5,000 at 21.99%',
        caption: 'Each row is this credit card payoff calculator. The payment stays fixed until the last, smaller payment. A changing minimum is not shown.',
        headers: ['Fixed monthly payment', 'Months', 'Total interest'],
        rows: paymentRows
      }
    }
  ];
  card.faqs.push(
    {
      q: 'How much interest does a larger fixed payment save on $5,000 at 21.99%?',
      a: `$200 a month takes 34 months and $1,748.71 of interest. At $300 a month the same balance takes ${paymentRows[2][1]} and ${paymentRows[2][2]} of interest. At $400 a month it takes ${paymentRows[3][1]} and ${paymentRows[3][2]} of interest. The APR did not change. The payment did.`
    },
    {
      q: 'How is this credit card payoff different from the debt payoff calculator?',
      a: 'This page is one balance, one APR, and one fixed payment. The debt-payoff page takes two to four balances and sends an extra amount to the smallest balance or the highest rate. A single card does not need that page.'
    },
    {
      q: 'How is a credit card payoff different from a mortgage payoff?',
      a: 'A mortgage payoff starts from an installment loan that already has a term and then adds extra principal. A card does not hand you a term. You choose the payment, and the months are the result. The interest here is a monthly rate on the remaining card balance, not a mortgage amortization schedule.'
    }
  );

  const georgia = content['georgia-paycheck-calculator'];
  georgia.title = 'Georgia Paycheck Calculator 2026: Take-Home Pay After Federal and State Tax | ClearCalc';
  georgia.h1 = 'Georgia Paycheck Calculator 2026: Take-Home Pay After Tax';
  georgia.description = 'Georgia paycheck calculator for 2026 take-home pay. House Bill 463 taxes Georgia income at 4.99% after a $15,000 single standard deduction. A $65,000 single wage with no dependents has Georgia tax of $2,495.00. Federal withholding uses Revenue Procedure 2025-32, and FICA uses the 2026 wage base of $184,500.';
  georgia.intro.unshift('Searchers asking for a Georgia paycheck or Georgia take-home pay want the cash left after federal income tax, the 4.99% Georgia tax, Social Security, and Medicare. On $65,000, single, paid every two weeks, with no dependents and no 401(k), Georgia tax is $2,495.00 and the headline is $1,996.63. That is one paycheck. The annual take-home is $51,912.50. Twenty-six times the headline is twelve cents lower because each paycheck is rounded on its own.');
  georgia.extraSections = [
    ...(georgia.extraSections ?? []),
    {
      heading: '2026 sources for a Georgia paycheck',
      paragraphs: [
        'Georgia’s rate and deductions are House Bill 463, signed 11 May 2026 and retroactive to 1 January 2026. O.C.G.A. § 48-7-20 sets the flat 4.99% rate. The standard deduction is $15,000 for single, head of household, and married filing separately, and $30,000 for married filing jointly. Each dependent is a $5,000 deduction. The Department of Revenue’s 2026 employer materials told employers they could withhold at 4.99% from 11 May 2026. A stub from earlier in the year can still show 5.19%. This page uses 4.99% for the year, which is the rate on the return, not a blend of the two withholding rates.',
        'Federal income tax uses the tax year 2026 brackets and standard deduction in IRS Revenue Procedure 2025-32. The single standard deduction is $16,100 and the joint standard deduction is $32,200. On $65,000 single the federal income tax is $5,620.00. IRS Publication 15 for 2026 is the employer publication for withholding method. This page annualizes the wage and applies the brackets. It does not reproduce every wage-bracket cell in Publication 15-T, so a payroll stub can differ by cents.',
        'Social Security is 6.2% of wages up to the 2026 contribution base of $184,500, which is $11,439.00 at the cap. Medicare is 1.45% of all wages. Additional Medicare Tax is 0.9% of wages above $200,000 on this one-wage form. A joint return’s additional Medicare threshold is $250,000 of combined wages, and that combined test is not applied here. Those FICA amounts are the same on every 2026 paycheck page on this site.'
      ]
    },
    {
      heading: 'FICA, pre-tax dollars, and Georgia local tax',
      paragraphs: [
        'A traditional 401(k) reduces federal taxable wages and Georgia taxable income. On the $65,000 single sample, a $6,500 deferral cuts federal income tax from $5,620.00 to $4,840.00 and Georgia tax from $2,495.00 to $2,170.65. Social Security stays $4,030.00 and Medicare stays $942.50, because the deferral is still FICA wages here. A Roth amount typed into the deferral box is treated as pre-tax, which understates both taxes. Health insurance and an HSA that were already left out of the wage should not be subtracted again. Catch-up contributions above the $24,500 elective deferral are cut back.',
        'Georgia has no city income tax to add to this wage. A local occupational tax or a business license fee is not income-tax withholding and is not subtracted. The up-to-$1,750 exclusions for overtime and tips are not fields, so a worker who qualifies for them will see Georgia tax that is high by up to 4.99% of the excluded dollars. The form also cannot file a Form 500 or decide part-year residency.'
      ],
      table: {
        heading: 'Take-home pay on the $65,000 single sample',
        caption: 'No dependents and no 401(k). Amounts are what this Georgia paycheck calculator displays for 2026. The two-week headline is rounded separately from the annual total.',
        headers: ['Line', 'Amount'],
        rows: [
          ['Federal income tax', '$5,620.00'],
          ['Social Security', '$4,030.00'],
          ['Medicare', '$942.50'],
          ['Georgia income tax at 4.99%', '$2,495.00'],
          ['Annual take-home', '$51,912.50'],
          ['Every two weeks', '$1,996.63']
        ]
      }
    }
  ];
  georgia.faqs.push(
    {
      q: 'What is Georgia take-home pay on a $65,000 salary in 2026?',
      a: 'Single, no dependents, and no 401(k): federal income tax is $5,620.00, Social Security is $4,030.00, Medicare is $942.50, and Georgia tax is $2,495.00 after the $15,000 standard deduction. Annual take-home is $51,912.50, or $1,996.63 every two weeks.'
    },
    {
      q: 'Does Georgia withhold a local income tax from a 2026 paycheck?',
      a: 'Not on this page. The state line is the 4.99% tax. There is no city wage tax to add. A local occupational tax is not income-tax withholding and is not subtracted.'
    },
    {
      q: 'Which FICA amounts does the Georgia paycheck calculator subtract for 2026?',
      a: 'Social Security of 6.2% up to the $184,500 wage base, Medicare of 1.45% of all wages, and Additional Medicare Tax of 0.9% above $200,000 of wages on this one-wage form. On $65,000 those lines are $4,030.00, $942.50, and $0.00. A traditional 401(k) does not reduce them here.'
    }
  );
}

export function attachDaily15Links(content) {
  const wi = daily15Run('wisconsin-paycheck-calculator');
  const help = daily15Run('australia-help-repayment-calculator');
  const iht = daily15Run('uk-inheritance-tax-calculator');
  const hourly = daily15Run('salary-to-hourly-calculator');
  const links = [
    ['georgia-paycheck-calculator', 'wisconsin-paycheck-calculator', 'Wisconsin paycheck calculator for 2026', `W-166 withholding, not Georgia’s 4.99%. The $65,000 single headline is ${wi.headline}.`],
    ['georgia-paycheck-calculator', 'missouri-paycheck-calculator', 'Missouri paycheck calculator for 2026', 'A standard deduction of $16,100 or $32,200 and brackets that top out at 4.7%.'],
    ['georgia-paycheck-calculator', 'connecticut-paycheck-calculator', 'Connecticut paycheck calculator for 2026', 'DRS code A or code C, including the phase-out and recapture. Not a flat rate.'],
    ['georgia-paycheck-calculator', 'kentucky-paycheck-calculator', 'Kentucky paycheck calculator for 2026', 'A 3.5% tax after a $3,360 standard deduction. No city occupational tax is included.'],
    ['georgia-paycheck-calculator', 'alabama-paycheck-calculator', 'Alabama paycheck calculator for 2026', 'Alabama deducts federal income tax before its 2%, 4%, and 5% rates. Georgia does not.'],
    ['georgia-paycheck-calculator', 'south-carolina-paycheck-calculator', 'South Carolina paycheck calculator for 2026', 'Act 110’s return, with the income-adjusted deduction. Not the pre-Act 0%, 3%, and 6% withholding table.'],
    ['hourly-to-salary-calculator', 'salary-to-hourly-calculator', 'Salary to hourly calculator', `$60,000 at 40 hours and 52 weeks is ${hourly.headline}. This page multiplies the other way.`],
    ['hourly-to-salary-calculator', 'wisconsin-paycheck-calculator', 'Wisconsin paycheck calculator for 2026', 'Turn the salary into an hourly rate on the other page, or start from the annual wage here.'],
    ['overtime-pay-calculator', 'salary-to-hourly-calculator', 'Salary to hourly calculator', 'An annual salary divided by paid hours. Overtime on this page is a weekly premium, not that division.'],
    ['pay-raise-calculator', 'salary-to-hourly-calculator', 'Salary to hourly calculator', 'After the raise, divide the new salary by hours and weeks.'],
    ['pay-raise-calculator', 'freelance-rate-calculator', 'Freelance rate calculator', 'A billable rate from a target, overhead, and a buffer you type. Not a percent raise on a salary.'],
    ['discount-calculator', 'sales-tax-calculator', 'Sales tax calculator', 'Apply the discount first, then add sales tax to the sale price if the shop taxes that price.'],
    ['tip-calculator', 'sales-tax-calculator', 'Sales tax calculator', 'A tip is not sales tax. Remove tax from a receipt on the sales-tax page before you decide the tip base.'],
    ['markup-margin-calculator', 'sales-tax-calculator', 'Sales tax calculator', 'Margin is not sales tax. Add the tax after you have a price.'],
    ['vehicle-loan-calculator', 'sales-tax-calculator', 'Sales tax calculator', 'The vehicle page can add a sales-tax percent to a price. The sales-tax page is the rate by itself, including the reverse from a receipt.'],
    ['debt-payoff-calculator', 'credit-card-payoff-calculator', 'Credit card payoff calculator', 'One card, a fixed payment, and a month count. This debt page runs two to four balances.'],
    ['debt-consolidation-calculator', 'credit-card-payoff-calculator', 'Credit card payoff calculator', 'A single card at a monthly rate. Consolidation compares one new loan with the payments you already make.'],
    ['apr-calculator', 'credit-card-payoff-calculator', 'Credit card payoff calculator', 'APR here includes a prepaid charge on an installment loan. A card payoff is the months a fixed payment takes.'],
    ['debt-to-income-ratio-calculator', 'credit-card-payoff-calculator', 'Credit card payoff calculator', 'Put the card’s monthly payment in the debt-ratio page. The payoff page is where that payment becomes a month count.'],
    ['mortgage-calculator', 'pmi-calculator', 'PMI calculator', 'Estimate a monthly PMI dollar amount from a rate you type, then put that dollar amount in the mortgage page’s PMI box. 0.55% is only an example.'],
    ['mortgage-calculator', 'fifteen-vs-thirty-year-mortgage-calculator', '15-year vs 30-year mortgage calculator', 'Same principal, two rates, two terms. The mortgage page is one loan and can add tax, insurance, and PMI.'],
    ['mortgage-calculator', 'cap-rate-calculator', 'Cap rate calculator', 'NOI divided by value. The mortgage payment is not part of NOI.'],
    ['rental-property-calculator', 'cap-rate-calculator', 'Cap rate calculator', 'This rental page builds cash flow after the mortgage. The cap-rate page starts from NOI and stops there.'],
    ['house-affordability-calculator', 'pmi-calculator', 'PMI calculator', 'A price from income does not include PMI unless you already removed it from the payment. The PMI page needs a rate you type.'],
    ['house-affordability-calculator', 'fifteen-vs-thirty-year-mortgage-calculator', '15-year vs 30-year mortgage calculator', 'Affordability solves a price from one term. This comparison keeps the principal and changes the term.'],
    ['uk-capital-gains-tax-calculator', 'uk-inheritance-tax-calculator', 'UK Inheritance Tax calculator', `A death on or after 6 April 2026. The sample estate is ${iht.headline} of tax. Capital gains tax is a different statute.`],
    ['estate-tax-calculator', 'uk-inheritance-tax-calculator', 'UK Inheritance Tax calculator', 'Pounds and the UK nil-rate bands. The US page uses the dollar basic exclusion and is not a substitute.'],
    ['uk-take-home-pay-calculator', 'uk-inheritance-tax-calculator', 'UK Inheritance Tax calculator', 'Inheritance Tax is not deducted from this salary. The nil-rate band is £325,000.'],
    ['australia-take-home-pay-calculator', 'australia-help-repayment-calculator', 'Australia HELP repayment calculator', `2026–27 compulsory HELP. The ATO example of $86,380 is ${help.headline}. It is not subtracted from take-home pay on this page.`],
    ['australia-superannuation-guarantee-calculator', 'australia-help-repayment-calculator', 'Australia HELP repayment calculator', 'Reportable super can be part of HELP repayment income. This super page does not add it, and the HELP page will not add it for you.'],
    ['uk-student-loan-repayment-calculator', 'australia-help-repayment-calculator', 'Australia HELP repayment calculator', 'HELP uses the ATO 2026–27 marginal thresholds. A UK plan repayment is not the same formula.'],
    ['z-score-calculator', 'p-value-calculator', 'P-value calculator', 'A z or a t you already have, including a t with degrees of freedom. The z-score page standardizes an observation.'],
    ['confidence-interval-calculator', 'p-value-calculator', 'P-value calculator', 'A tail probability, not an interval around a mean.'],
    ['descriptive-statistics-calculator', 'p-value-calculator', 'P-value calculator', 'A list’s mean and spread are not a p-value. Bring a z or a t to the p-value page.'],
    ['sample-size-calculator', 'p-value-calculator', 'P-value calculator', 'Sample size is a count from a margin of error. A p-value is a tail probability.'],
    ['savings-goal-calculator', 'emergency-fund-calculator', 'Emergency fund calculator', 'Months of essential expenses, without interest. The savings-goal page compounds a deposit.'],
    ['household-budget-calculator', 'emergency-fund-calculator', 'Emergency fund calculator', 'A cash reserve from essential expenses. The budget page sorts spending and does not set a 3-month or 6-month target.'],
    ['investment-calculator', 'dividend-calculator', 'Dividend calculator', 'One year of cash dividends from a per-share amount or a yield. Not a compounded balance.'],
    ['rent-affordability-calculator', 'rent-increase-calculator', 'Rent increase calculator', 'The new rent and the extra cost over a year. Affordability compares a rent with income and does not apply the increase.'],
    ['payback-period-calculator', 'break-even-calculator', 'Break-even calculator', 'Units and revenue that cover fixed costs. Payback counts years, not units.'],
    ['roi-calculator', 'break-even-calculator', 'Break-even calculator', 'A contribution margin and a unit count. ROI is profit divided by cost.'],
    ['volume-calculator', 'pool-volume-calculator', 'Pool volume calculator', 'Gallons and litres for a rectangle, a circle, or an oval. The volume page is a box, cylinder, sphere, or cone.'],
    ['square-footage-calculator', 'board-foot-calculator', 'Board foot calculator', 'Thickness, width, length, and pieces divided by 12. Square footage is an area, not board feet.'],
    ['fence-calculator', 'board-foot-calculator', 'Board foot calculator', 'Posts and pickets are not board feet. The board-foot page uses the lumber formula.']
  ];
  for (const row of links) addLink(content, ...row);
}
