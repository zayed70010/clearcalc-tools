function addLink(entry, slug, label, note) {
  entry.relatedLinks = entry.relatedLinks ?? [];
  if (!entry.relatedLinks.some((item) => item.slug === slug)) entry.relatedLinks.push({ slug, label, note });
}

function applyUkVat(entry) {
  entry.title = 'Plus VAT Calculator UK: Add or Remove 20% VAT | ClearCalc';
  entry.h1 = 'Plus VAT Calculator UK: Add or Remove 20% VAT';
  entry.description = '£100 plus VAT at the 20% standard rate is £120.00. £50 plus VAT is £60.00, £750 plus VAT is £900.00, £900 plus VAT is £1,080.00, and £1,250 plus VAT is £1,500.00. Remove VAT from a total at the same standing UK rates, or use 5% or 0%.';
  entry.intro = [
    'Plus VAT means the price before tax, times the rate, rounded to the nearest penny, then added. £100 plus VAT at 20% is £20.00 of VAT and a £120.00 total. The same arithmetic covers the other amounts people type: £50 plus VAT is £60.00, £750 plus VAT is £900.00, £900 plus VAT is £1,080.00, and £1,250 plus VAT is £1,500.00. The form opens on a price before VAT at the standard rate, so those sums are one button away.',
    'GOV.UK lists three standing rates: standard 20% on most goods and services, reduced 5% on some supplies such as domestic fuel and power and children’s car seats, and zero 0% on some supplies such as most food and children’s clothes. To get a standard-rated price that includes VAT, GOV.UK says to multiply the price excluding VAT by 1.2. This page does that, then rounds the VAT to the nearest penny. It does not add a fourth, temporary rate that applies only to a particular supply for a limited period.',
    'The other direction starts from a total that already includes VAT. £120.00 at 20% returns £100.00 before VAT. £1,500.00 returns £1,250.00. £900.00 returns £750.00. A zero-rated supply is taxable at 0% and can still sit inside a VAT registration. An exempt supply, such as many financial services, is outside VAT. The form can show £0.00 of VAT. It cannot decide which of those two a supply is.'
  ];
  entry.steps = [
    'Type the amount in pounds. The box starts at 100, which is the £100 plus VAT example.',
    'Leave “Plus VAT: a price before VAT” selected, or switch to “VAT included: remove the VAT” and type the gross total.',
    'Choose standard 20%, reduced 5%, or zero 0%. The sample is 20%.',
    'Press Calculate. The headline is the total when you add VAT, or the price before VAT when you remove it. The line under the result reads the sum in words, such as £100.00 plus 20% VAT is £120.00.'
  ];
  entry.howHeading = 'How a UK plus-VAT sum is worked out';
  entry.howItWorks = [
    'On a price before VAT, the tax is the price times the rate divided by 100, rounded half-up to the nearest penny. £100 × 20% is £20.00 exactly, and £100 × 1.2 is £120.00. £1,250 × 20% is £250.00, so £1,250 plus VAT is £1,500.00. £750 × 20% is £150.00 and the total is £900.00. £900 × 20% is £180.00 and the total is £1,080.00. £50 × 20% is £10.00 and the total is £60.00. £100 × 5% is £5.00 and the total is £105.00. £100 at 0% stays £100.00.',
    '£49.99 × 20% is £9.998, which rounds to £10.00. The total is £59.99. The extra penny is rounding, not a second rate. Removing VAT from £59.99 at 20% returns £49.99, because 59.99 / 1.20 rounds back to that penny. A receipt that showed a different total was not built with this rounding.',
    'HMRC’s standard rate is 20% of the VAT-exclusive price, which is one-sixth of a VAT-inclusive price when the arithmetic is exact. £20 is one-sixth of £120, and £250 is one-sixth of £1,500. The reduced rate is 5% of the exclusive price, which is 1/21 of an exact inclusive price. £59.99 is not an exact one-sixth split, because the VAT was rounded up from £9.998. Those fractions are a check. They are not a different tax.',
    'The rate is a legal classification of the supply, not a number this form can look up from a product name. Scotland, Wales, England, and Northern Ireland use the same UK VAT rates. Stamp duty, LBTT, and Land Transaction Tax are different taxes. A US sales-tax percent is not UK VAT, and a dollar total should not be read as pounds.'
  ];
  entry.formula = 'Price plus VAT = price + round(price × rate ÷ 100) to the nearest penny\nStandard-rated total = price × 1.2, when the VAT lands on an exact penny\n£100 plus 20% VAT = £120.00. £1,250 plus 20% VAT = £1,500.00\n£750 plus 20% VAT = £900.00. £900 plus 20% VAT = £1,080.00. £50 plus 20% VAT = £60.00\nPrice inside a gross total = round(total ÷ (1 + rate ÷ 100))\nStandard 20%. Reduced 5%. Zero 0%.\nThe 20% rate is one-sixth of an exact VAT-inclusive price. The 5% rate is 1/21 of an exact VAT-inclusive price.';
  entry.formulaNotes = [
    'Half a penny rounds away from zero for a positive amount. £9.998 becomes £10.00. A retailer that rounds each line of a long invoice and then adds the lines can differ by a penny from VAT computed on the invoice total. This page sees one amount.',
    'The flat-rate scheme, the margin scheme for second-hand goods, and a reverse charge are different calculations. They are not 20% of the price you type. GOV.UK’s VAT rates page is the source for the standing 20%, 5%, and 0% rates. The “multiply by 1.2” step for a standard-rated price is on GOV.UK’s page about charging VAT.'
  ];
  entry.examplesHeading = 'Worked plus-VAT and VAT-included examples';
  entry.examples = [
    {
      title: '£100, £50, £750, £900, and £1,250 plus VAT at 20%',
      paragraphs: [
        'Amount 100, plus VAT, standard rate. The calculator shows £120.00 total and VAT of £20.00. The detail line says £100.00 plus 20% VAT is £120.00. One-sixth of £120.00 is £20.00.',
        'Amount 50 is £10.00 of VAT and £60.00 total. Amount 750 is £150.00 of VAT and £900.00 total. Amount 900 is £180.00 of VAT and £1,080.00 total. Amount 1250 is £250.00 of VAT and £1,500.00 total. Each of those is an exact penny, so multiply-by-1.2 and the rounded VAT method agree.'
      ]
    },
    {
      title: 'The same totals with the VAT removed',
      paragraphs: [
        'Switch to VAT included and type 120 at 20%. The headline is £100.00 before VAT. Type 1500 and the headline is £1,250.00 before VAT. Type 900 and the headline is £750.00. Type 1080 and the headline is £900.00. Type 60 and the headline is £50.00. The forward and reverse sums meet.',
        'VAT is 20% of the net price, not 20% of the gross price. £20 is about 16.67% of £120. Typing 16.67 into the rate menu is the wrong rate, and the menu will not accept it. The rate choices are 20, 5, and 0.'
      ]
    },
    {
      title: '£49.99, the reduced rate, and the zero rate',
      paragraphs: [
        'Amount 49.99, plus VAT, 20%. VAT is £10.00 and the total is £59.99. Removing VAT from £59.99 returns £49.99. The rate did not become 20.004%.',
        '£100 plus VAT at the reduced 5% rate is £5.00 of VAT and a £105.00 total. Removing VAT from £105.00 at 5% returns £100.00. The same £100 at the zero rate shows VAT of £0.00 and a total of £100.00. Five percent is not a discount. A 5% discount on £100 would leave £95.00. Zero-rated is not the same as exempt, and this form will not classify the supply for you.'
      ]
    }
  ];
  entry.table = {
    heading: 'UK prices plus 20% VAT',
    caption: 'Each row is what this calculator displays for plus VAT at the standard rate, and for the same total with the VAT removed. The rate is 20% of the price before VAT.',
    headers: ['Price before VAT', 'VAT at 20%', 'Price plus VAT', 'VAT removed from that total'],
    rows: [
      ['£50.00', '£10.00', '£60.00', '£50.00'],
      ['£100.00', '£20.00', '£120.00', '£100.00'],
      ['£750.00', '£150.00', '£900.00', '£750.00'],
      ['£900.00', '£180.00', '£1,080.00', '£900.00'],
      ['£1,250.00', '£250.00', '£1,500.00', '£1,250.00'],
      ['£49.99', '£10.00', '£59.99', '£49.99']
    ]
  };
  entry.extraSections = [
    {
      heading: 'The 5% reduced rate and the 0% zero rate',
      paragraphs: [
        'The reduced rate is still VAT. It is not a bargain and not a tip. £100 at 5% is £5.00 of VAT and £105.00. £1,250 at 5% is £62.50 of VAT and £1,312.50. At 0%, both prices are unchanged and the VAT line is £0.00.',
        'Domestic fuel and power is a common reduced-rate example on GOV.UK, and most food and children’s clothes are common zero-rate examples. Conditions apply, and the list is not a ruling. If a supply is exempt rather than zero-rated, this calculator still cannot tell you that.'
      ],
      table: {
        heading: '£100 and £1,250 at 5% and at 0%',
        caption: 'Plus VAT at the reduced rate and the zero rate. Totals are what this calculator displays.',
        headers: ['Price before VAT', 'Rate', 'VAT', 'Total'],
        rows: [
          ['£100.00', '5%', '£5.00', '£105.00'],
          ['£1,250.00', '5%', '£62.50', '£1,312.50'],
          ['£100.00', '0%', '£0.00', '£100.00'],
          ['£1,250.00', '0%', '£0.00', '£1,250.00']
        ]
      }
    }
  ];
  entry.limitsHeading = 'What this plus-VAT figure leaves out';
  entry.limits = [
    'The form does not know whether a supply is standard-rated, reduced-rated, zero-rated, or exempt. Hot takeaway food and confectionery are often standard-rated even when other food is zero-rated. The classification is in HMRC’s notices, not in this arithmetic.',
    'A temporary VAT rate that applies only to some supplies between two dates is not a choice on the menu. The three standing rates are. Imports, the flat-rate scheme, partial exemption, and a reverse charge are not calculated.',
    'Apply VAT to the price after a discount if that is what the supplier charges. This page does not take a percent off first. Stamp duty on a house, income tax, and National Insurance are different UK taxes. Do not add this page’s pounds to a salary or to an SDLT result unless an invoice really does contain a VAT line of that size.',
    'The currency symbol is the pound. A US sales-tax question belongs on the sales tax calculator.'
  ];
  entry.disclaimer = 'This plus-VAT figure applies a standing UK rate you chose to one amount. It is not an HMRC decision on the supply, and it is not a VAT return.';
  entry.faqs = [
    {
      q: 'How much is £100 plus VAT at 20%?',
      a: '£20.00 of VAT and a £120.00 total. £50 plus VAT is £60.00. £750 plus VAT is £900.00. £900 plus VAT is £1,080.00. £1,250 plus VAT is £1,500.00. GOV.UK’s method for a standard-rated price is to multiply the VAT-exclusive price by 1.2 when the pennies are exact. The VAT is 20% of the net price, and one-sixth of an exact gross price. It is not 20% of the gross price.'
    },
    {
      q: 'How do I remove 20% VAT from £120 or from £1,500?',
      a: 'Choose VAT included. £120.00 returns £100.00 before VAT. £1,500.00 returns £1,250.00. £900.00 returns £750.00, £1,080.00 returns £900.00, and £60.00 returns £50.00. The price is the total divided by 1.20, rounded to the nearest penny.'
    },
    {
      q: 'What are the standing UK VAT rates?',
      a: 'Standard 20%, reduced 5%, and zero 0%, as listed on GOV.UK’s VAT rates page. The standard rate has been 20% since 4 January 2011. This calculator uses those three rates. It does not apply a temporary rate that covers only some supplies for a limited period, and it does not decide whether a supply is exempt.'
    },
    {
      q: 'Why is VAT on £49.99 equal to £10.00?',
      a: '£49.99 × 20% is £9.998, and the nearest penny is £10.00. The total is £59.99. Removing 20% from £59.99 returns £49.99. The rate is still 20%.'
    },
    {
      q: 'Does plus VAT at 5% work the same way?',
      a: 'Yes. £100 plus VAT at 5% is £5.00 of VAT and £105.00. £1,250 at 5% is £62.50 of VAT and £1,312.50. That is not a 5% discount, which would take £5.00 off £100 and leave £95.00. The zero rate leaves the price unchanged and shows £0.00 of VAT.'
    },
    {
      q: 'Is UK VAT the same in Scotland and Wales?',
      a: 'The standing VAT rates are UK-wide. This page does not calculate Scottish LBTT, Welsh Land Transaction Tax, or England and Northern Ireland stamp duty. Those are separate calculators, and they are not added to a VAT total.'
    }
  ];
  entry.sources = [
    {
      href: 'https://www.gov.uk/vat-rates',
      label: 'GOV.UK, VAT rates',
      note: 'Standard 20%, reduced 5%, and zero 0%. The standard rate increased to 20% on 4 January 2011. This page uses those standing rates.'
    },
    {
      href: 'https://www.gov.uk/charge-reclaim-record-vat',
      label: 'GOV.UK, Charge, reclaim and record VAT',
      note: 'Says the standard rate is currently 20%, and that a price including that rate is the VAT-exclusive price multiplied by 1.2.'
    },
    {
      href: 'https://www.gov.uk/guidance/vat-rates-on-different-goods-and-services',
      label: 'GOV.UK, VAT rates on different goods and services',
      note: 'Examples of reduced-rate and zero-rate supplies, and the warning that conditions apply. This calculator does not classify a product.'
    }
  ];
  entry.relatedLinks = [
    { slug: 'england-stamp-duty-calculator', label: 'Stamp duty calculator for England and Northern Ireland', note: 'SDLT on a house. A £430,000 main home is £11,500 under the 2026 bands. That is not VAT.' },
    { slug: 'scotland-lbtt-calculator', label: 'Scotland LBTT calculator', note: 'Land and Buildings Transaction Tax. Scotland uses UK VAT, and it does not use England’s SDLT.' },
    { slug: 'wales-land-transaction-tax-calculator', label: 'Wales land transaction tax calculator', note: 'LTT in pounds. Welsh VAT is still the UK 20%, 5%, or 0% rate.' },
    { slug: 'uk-take-home-pay-calculator', label: '2026/27 take-home pay for England, Wales and Northern Ireland', note: 'Income tax and employee National Insurance on a salary. Not VAT on a purchase.' },
    { slug: 'sales-tax-calculator', label: 'US sales tax calculator', note: '$100 plus 8.25% tax is $108.25. That is a US rate in dollars, not 20% UK VAT.' },
    { slug: 'percentage-calculator', label: 'Percentage calculator', note: '£20 is 20% of £100 and about 16.67% of £120. The second figure is not the VAT rate to type back in.' },
    { slug: 'discount-calculator', label: 'Discount calculator', note: 'Takes a percent off a price. Add VAT to the price after the discount if that is what the supplier charges.' }
  ];
}

function applyCanadaGst(entry) {
  entry.title = 'Canada GST/HST Calculator by Province (2026 Rates) | ClearCalc';
  entry.h1 = 'Canada GST/HST Calculator for 2026 Rates';
  entry.description = '2026 GST and HST by province, in Canadian dollars. Ontario HST at 13% turns $100 into $113.00 and $650 into $734.50. Nova Scotia is 14% HST from 1 April 2025. British Columbia is 5% GST, not HST. This page does not convert Canadian dollars to US dollars.';
  entry.intro = [
    'This Canada GST/HST calculator adds the federal goods and services tax, or harmonized sales tax, to a price, or removes it from a total. The rates are the Canada Revenue Agency’s provincial table for tax on or after 1 April 2025, which is the table this page uses in 2026. The sample is $100 before tax in Ontario. HST is $13.00 and the total is $113.00. The same $650 before tax in Ontario is $84.50 of HST and a $734.50 total.',
    'A search for a sum such as “650 HST to US dollars” is a currency question. This tool does not answer it. $734.50 here is Canadian dollars. Nothing on the page looks up an exchange rate. The currency converter is the separate page where you type a rate yourself.',
    'Participating provinces charge one HST rate: Ontario 13%, Nova Scotia 14% for GST/HST that becomes payable on or after 1 April 2025, and New Brunswick, Newfoundland and Labrador, and Prince Edward Island 15%. Nova Scotia was 15% before that date. Alberta, the territories, British Columbia, Manitoba, Saskatchewan, and Quebec charge 5% GST. British Columbia does not charge HST. Its provincial tax is PST, generally 7% on many goods, and this page does not add it. Manitoba’s PST and Saskatchewan’s PST are left out the same way. Quebec’s 9.975% QST is included, because it is charged with the GST on the same price before GST.'
  ];
  entry.steps = [
    'Enter the amount in Canadian dollars. The sample is 100. If the amount already includes the tax, switch the menu.',
    'Choose the province or territory where the supply is made. Ontario at 13% is the sample. British Columbia is labeled 5% GST, not HST.',
    'Press Calculate. Adding tax, the headline is the total. Removing tax, the headline is the price before tax.',
    'Read the note under the result. British Columbia, Manitoba, and Saskatchewan say the provincial tax was not added. Quebec splits GST and QST. Every result says the amount was not converted to US dollars.'
  ];
  entry.howHeading = 'GST and HST by province in 2026';
  entry.howItWorks = [
    'On a price before tax, the tax is the price times the rate, rounded to the nearest cent. $100 in Ontario is $13.00 of HST and $113.00. $650 in Ontario is $84.50 of HST and $734.50. $100 in Nova Scotia is $14.00 and $114.00. $80 in Nova Scotia is $11.20 and $91.20. $100 at 5% GST is $5.00 and $105.00. $100 at 15% HST is $15.00 and $115.00.',
    'The CRA’s rate table is the source. On or after 1 April 2025, Nova Scotia is 14% and the other HST provinces are unchanged from the previous column: Ontario 13%, and New Brunswick, Newfoundland and Labrador, and Prince Edward Island 15%. British Columbia’s federal rate on that table is 5%, with PST listed separately at 7%. There is no “BC HST rate” on the current table. British Columbia left the HST system years ago. Manitoba is 5% GST with PST listed at 7%. Saskatchewan is 5% GST with PST listed at 6%.',
    'Quebec is two taxes on the price before GST. GST is 5%. QST is 9.975% of the same price, not of the GST-inclusive amount. On $100, GST is $5.00 and QST rounds to $9.98, so the total is $114.98. On $250, GST is $12.50 and QST is $24.94, so the total is $287.44. The combined factor 1.14975 is a check, not a single HST rate.',
    'Place of supply can move the rate. The CRA’s own example is a Vancouver store that delivers a mattress to Toronto and charges Ontario’s 13% HST, and a Winnipeg store that delivers a laptop to Nova Scotia and charges 14%. If the customer instead picks the laptop up in Manitoba, the CRA’s example charges 5% GST plus Manitoba PST. This form uses the province you select. It does not add the PST in that pickup example. The British Columbia small-business guide’s $100 goods example is $7.00 PST plus $5.00 GST, a $112.00 till. This page stops at the $5.00 GST and the $105.00 GST-inclusive total.'
  ];
  entry.formula = 'GST or HST = round(price × rate ÷ 100) to the nearest cent\nTotal = price + tax\nPrice inside a total = round(total ÷ (1 + rate ÷ 100))\n2026 table, CRA rates on or after 1 April 2025:\nOntario 13% HST. Nova Scotia 14% HST. New Brunswick, Newfoundland and Labrador, and Prince Edward Island 15% HST.\nAlberta, British Columbia, Manitoba, Saskatchewan, the territories, and Quebec: 5% GST.\nBritish Columbia PST, Manitoba PST, and Saskatchewan PST are not added.\nQuebec: GST 5% of the price, QST 9.975% of the price before GST, each rounded to the cent.\nThe result stays in Canadian dollars. It is not a US-dollar conversion.';
  entry.formulaNotes = [
    'Nova Scotia’s decrease from 15% to 14% applies to GST/HST that becomes payable on or after 1 April 2025. This page uses 14% and says so. It does not ask for the invoice date, so a 2024 invoice can still be a different rate.',
    'QST is calculated on the consideration before GST. Rounding GST and QST separately is why $100 becomes $114.98 rather than a single rounded 14.975%. The CRA table lists Quebec’s provincial rate as 9.975%.'
  ];
  entry.examplesHeading = 'Worked examples for the provinces people ask about';
  entry.examples = [
    {
      title: 'Ontario HST on $100 and on $650',
      paragraphs: [
        'Ontario, price before tax, 100. The calculator shows $113.00 total and HST of $13.00. Amount 650 shows HST of $84.50 and a $734.50 total. Both lines say the amount stays in Canadian dollars and is not converted to US dollars.',
        'Removing HST from $113.00 with Ontario selected returns $100.00. The province has to match the rate that was charged. Removing 13% from a Nova Scotia total would invent a price.'
      ]
    },
    {
      title: 'British Columbia is not HST, and Manitoba is GST only',
      paragraphs: [
        'British Columbia on $100 is $5.00 of GST and a $105.00 total. The result says British Columbia does not charge HST, and that the 7% PST on the CRA table is not added. The province’s own $100 example, with both taxes, is $112.00. That extra $7.00 is not in this headline. Some BC supplies use a PST rate other than 7%. This page adds none of them.',
        'Manitoba on $100 is the same $5.00 of GST and $105.00 total. The result says Manitoba does not charge HST and does not add the 7% PST from the CRA table. Saskatchewan on $100 is also $105.00 of GST, and its 6% PST is not added. Alberta on $100 is $5.00 of GST and $105.00, and the CRA table shows no Alberta PST.'
      ]
    },
    {
      title: 'Quebec GST plus QST, and Nova Scotia at 14%',
      paragraphs: [
        'Quebec, amount 100, price before tax. GST is $5.00. QST is $9.98. The total is $114.98. Amount 250 is GST of $12.50, QST of $24.94, and a $287.44 total. QST is 9.975% of the price before GST. It is not HST, and it is not charged on top of the GST.',
        'Nova Scotia, amount 80. HST is $11.20 and the total is $91.20. Amount 100 is $14.00 and $114.00. The note says 14% applies on or after 1 April 2025. New Brunswick, Newfoundland and Labrador, and Prince Edward Island on $100 are $15.00 of HST and a $115.00 total.'
      ]
    }
  ];
  entry.table = {
    heading: '2026 GST and HST on $100 before tax, by province',
    caption: 'Each row is what this calculator displays for a $100 price before tax. The rates are the CRA table for supplies on or after 1 April 2025. PST in British Columbia, Manitoba, and Saskatchewan is not included. Quebec includes QST. Amounts are Canadian dollars.',
    headers: ['Place', 'What this page charges', 'Tax', 'Total'],
    rows: [
      ['Ontario', '13% HST', '$13.00', '$113.00'],
      ['Nova Scotia', '14% HST from 1 April 2025', '$14.00', '$114.00'],
      ['New Brunswick', '15% HST', '$15.00', '$115.00'],
      ['Newfoundland and Labrador', '15% HST', '$15.00', '$115.00'],
      ['Prince Edward Island', '15% HST', '$15.00', '$115.00'],
      ['Quebec', '5% GST + 9.975% QST', '$14.98', '$114.98'],
      ['British Columbia', '5% GST, not HST, PST not included', '$5.00', '$105.00'],
      ['Manitoba', '5% GST, PST not included', '$5.00', '$105.00'],
      ['Saskatchewan', '5% GST, PST not included', '$5.00', '$105.00'],
      ['Alberta', '5% GST, no PST on the CRA table', '$5.00', '$105.00'],
      ['Northwest Territories, Nunavut, Yukon', '5% GST', '$5.00', '$105.00']
    ]
  };
  entry.extraSections = [
    {
      heading: 'What $650 of HST is, and what it is not',
      paragraphs: [
        '$650 before tax in Ontario is $84.50 of HST and $734.50 Canadian. That is the whole of the “650 HST” arithmetic this page will do. It will not turn $734.50 into US dollars. If you already know an exchange rate, the currency converter multiplies by the rate you type. It does not download one, and it does not know that the amount was HST.',
        'Zero-rated groceries are 0% GST/HST across Canada. This page will not notice that you typed a grocery total. It taxes the amount at the provincial rate you chose.'
      ]
    }
  ];
  entry.limitsHeading = 'What a single GST or HST rate leaves out';
  entry.limits = [
    'Zero-rated supplies, exempt supplies, and point-of-sale rebates are not detected. Basic groceries can be zero-rated. This page will tax whatever amount you type.',
    'Place-of-supply rules are more specific than a province menu. A good delivered in another province generally takes that province’s GST/HST rate. The form trusts the province you pick, and it still does not add British Columbia, Manitoba, or Saskatchewan provincial sales tax.',
    'British Columbia’s general PST rate of 7% is not every BC supply. Liquor, accommodation, vapour products, and vehicles can use other PST rates. None of them are calculated here. Do not add Quebec’s 9.975% a second time. QST is already in the Quebec total.',
    'The Nova Scotia 14% rate is for tax payable on or after 1 April 2025. A 2024 invoice can still be 15%. This page does not apply the transitional rules.',
    'Take-home pay is income tax, CPP or QPP, and EI. It is not GST or HST. A purchase tax and a wage are different amounts.'
  ];
  entry.disclaimer = 'This GST/HST figure applies the CRA provincial rate you selected to one amount in Canadian dollars. It is not a ruling on place of supply, it does not convert currency, and provincial sales tax outside Quebec is not included.';
  entry.faqs = [
    {
      q: 'What is the GST or HST rate in each Canadian province in 2026?',
      a: 'Using the CRA table for supplies on or after 1 April 2025: Ontario 13% HST, Nova Scotia 14% HST, and New Brunswick, Newfoundland and Labrador, and Prince Edward Island 15% HST. Alberta, British Columbia, Manitoba, Saskatchewan, Quebec, and the three territories charge 5% GST. Quebec also charges 9.975% QST on the price before GST. British Columbia, Manitoba, and Saskatchewan have a separate PST that this page does not add.'
    },
    {
      q: 'Does British Columbia charge HST?',
      a: 'No. British Columbia’s federal tax on the CRA table is 5% GST, not HST. The same table lists 7% PST beside it. On $100 this calculator shows $5.00 of GST and a $105.00 total, and it says the PST was not added. A bill that also charges the general 7% PST is a different total. The province’s own goods example is $7.00 PST plus $5.00 GST, which is $112.00.'
    },
    {
      q: 'How much is Ontario HST on $100 and on $650?',
      a: '$100 is $13.00 of HST and a $113.00 total. $650 is $84.50 of HST and a $734.50 total. Both figures are Canadian dollars. This page does not convert either total to US dollars. Ontario HST is a single 13% tax. There is no separate Ontario PST on top of it here.'
    },
    {
      q: 'What is Nova Scotia’s HST rate in 2026?',
      a: '14%, for GST/HST that becomes payable on or after 1 April 2025. On $100 the tax is $14.00 and the total is $114.00. On $80 the tax is $11.20 and the total is $91.20. The rate was 15% before 1 April 2025. This page uses 14% and does not ask whether the tax became payable earlier.'
    },
    {
      q: 'Does this GST calculator convert Canadian dollars to US dollars?',
      a: 'No. Every result stays in Canadian dollars, including a $650 Ontario price that becomes $734.50 with HST. A currency conversion needs an exchange rate you supply on the currency converter. This page does not look one up.'
    },
    {
      q: 'How do Quebec GST and QST combine, and what about Manitoba?',
      a: 'On $100 in Quebec, GST is $5.00 and QST is $9.98, for a $114.98 total. On $250, GST is $12.50 and QST is $24.94, for $287.44. QST is 9.975% of the price before GST. Manitoba on $100 is $5.00 of GST and $105.00. Manitoba does not charge HST, and the 7% PST on the CRA table is not added.'
    }
  ];
  entry.sources = [
    {
      href: 'https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses/charge-collect-which-rate/calculator.html',
      label: 'CRA, GST/HST calculator and rates',
      note: 'Provincial GST/HST and the PST column, including Nova Scotia at 14% on or after 1 April 2025, British Columbia at 5% GST and 7% PST, and Quebec at 5% and 9.975%.'
    },
    {
      href: 'https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses/charge-collect-which-rate.html',
      label: 'CRA, Charge and collect the GST/HST',
      note: 'Place-of-supply examples, including a Vancouver sale delivered in Ontario and a Manitoba sale delivered in Nova Scotia. Basic groceries are zero-rated. GST is calculated on the price without PST.'
    },
    {
      href: 'https://www2.gov.bc.ca/gov/content/taxes/sales-taxes/pst/publications/small-business-guide',
      label: 'British Columbia, Small business guide to PST',
      note: 'The general PST rate is 7%, with other rates for some supplies. The guide’s $100 example is $7.00 PST plus $5.00 GST. This calculator adds only the GST.'
    }
  ];
  entry.relatedLinks = [
    { slug: 'ontario-take-home-pay-calculator', label: 'Ontario take-home pay calculator for 2026', note: 'Income tax, CPP, and EI on a salary. Ontario HST at 13% is this page, not that paycheck.' },
    { slug: 'british-columbia-take-home-pay-calculator', label: 'British Columbia take-home pay calculator', note: '2026 B.C. income tax. B.C. sales tax on this page is 5% GST only. PST is not added, and there is no HST.' },
    { slug: 'manitoba-take-home-pay-calculator', label: 'Manitoba take-home pay calculator', note: 'A wage tax. Manitoba GST is 5% here, and the provincial sales tax is not included.' },
    { slug: 'quebec-take-home-pay-calculator', label: 'Quebec take-home pay calculator', note: 'QPP, QPIP, and Quebec income tax on a salary. GST plus QST on a purchase is this page.' },
    { slug: 'nova-scotia-take-home-pay-calculator', label: 'Nova Scotia take-home pay calculator', note: '2026 Nova Scotia income tax. The 14% HST from 1 April 2025 is a purchase tax, not this paycheck.' },
    { slug: 'alberta-take-home-pay-calculator', label: 'Alberta take-home pay calculator for 2026', note: 'A wage tax. Alberta GST is 5%, and the CRA table shows no provincial sales tax.' },
    { slug: 'currency-converter', label: 'Currency converter', note: 'Multiplies by an exchange rate you type. It does not know that an amount was HST, and this GST page does not call it.' },
    { slug: 'sales-tax-calculator', label: 'US sales tax calculator', note: 'Dollar rates such as a price plus 8.25% tax. Not Canadian GST or HST.' },
    { slug: 'uk-vat-calculator', label: 'UK plus VAT calculator', note: '£100 plus VAT at 20% is £120.00. Not Canadian HST.' }
  ];
}

function applyUkMortgage(entry) {
  entry.title = 'Interest Only Mortgage Calculator UK, with Repayment | ClearCalc';
  entry.h1 = 'Interest Only Mortgage Calculator UK';
  entry.description = 'Interest only mortgage calculator for the UK, with the repayment on the same loan beside it. £200,000 at 4.5% for 25 years is £750.00 a month interest only, and the £200,000 is still owed. Repayment on that loan is £1,111.66 a month. The 4.5% is a rate you type, not a lender quote.';
  entry.intro = [
    'An interest only mortgage payment is the interest on the amount you borrowed. It does not reduce the capital. The form opens on that contract. £200,000 at 4.5% is £750.00 a month, because 200,000 × 0.045 / 12 = 750. Over 25 years the interest totals £225,000.00, and you still owe £200,000.00 at the end.',
    'The same loan on repayment is £1,111.66 a month. That payment is £361.66 higher, it retires the capital, and the interest over 300 months is £133,499.49 rather than £225,000.00. Both figures use the annual rate divided by 12. Switch the menu to see the other one. The result also prints the comparison, so you do not have to remember the first number.',
    'MoneyHelper describes a repayment mortgage as the contract that pays interest and capital so the balance can reach zero, and an interest-only mortgage as interest now and the capital at the end. It also says interest-only deals are now uncommon and are usually for particular circumstances, such as buy-to-let. This page does not know what a lender will offer. The 4.5% in the sample is a rate you typed for the comparison. It is not the Bank of England Bank Rate and not a product rate.'
  ];
  entry.steps = [
    'Enter the amount borrowed in pounds. The sample is 200000. That should be the loan, not the purchase price, unless you are borrowing the whole price.',
    'Enter the annual interest rate as a percent. The sample is 4.5. Type 4.5, not 0.045. The page does not fill this box from the Bank Rate.',
    'Enter the term in whole years, from 1 to 40. The sample is 25, which is 300 monthly payments.',
    'The type menu opens on interest only, with the capital still owed. Choose repayment if you want the payment that brings the balance to zero. Press Calculate. The headline is the monthly amount, and the other contract is in the lines underneath.'
  ];
  entry.howHeading = 'Interest only and repayment on the same UK loan';
  entry.howItWorks = [
    'The monthly rate r is the annual percent divided by 100 and then by 12. For 4.5% that is 0.00375. Interest only is the balance times r, and the balance never falls. On £200,000 that is exactly £750.00 a month. Over 300 months the interest is £225,000.00, and the balance at the end is still £200,000.00.',
    'A repayment payment is balance × r × (1 + r) ^ n / ((1 + r) ^ n − 1), with n equal to years times 12. On the same £200,000 for 25 years the payment displays as £1,111.66. Total paid is £333,499.49 and total interest is £133,499.49. The interest-only result prints that repayment beside it. The repayment result prints the £750.00 interest-only payment beside it. One URL covers both, because they are two readings of the same loan.',
    '£250,000 at the same 4.5% for 25 years is £937.50 a month interest only, with £281,250.00 of interest and the £250,000 still owed. Repayment is £1,389.58 a month and £166,874.36 of interest. £100,000 at 4% for 25 years is £333.33 a month on the interest-only headline. The unrounded monthly interest times 300 months is £100,000.00. Repayment on that loan is £527.84 a month and £58,351.05 of interest. £150,000 at 5% for 20 years is £625.00 a month interest only, and £989.93 a month on repayment.',
    'A lender that charges interest daily will multiply a daily rate by the actual days in the month. This page uses equal months. Fees, an introductory rate that later steps up, and an overpayment are not included. You still need a credible way to repay the capital if you stay on interest only. This calculator does not build that plan. It only shows that the balance does not fall.'
  ];
  entry.formula = 'Monthly rate r = annual percent / 100 / 12\nPayments n = years × 12\nInterest only = principal × r\nInterest-only total interest = interest-only payment × n\nThe interest-only balance at the end is still the amount borrowed\nRepayment = principal × r × (1 + r) ^ n / ((1 + r) ^ n − 1)\nIf r is 0, repayment = principal / n\nEach result also prints the other contract for the same amount, rate, and term\nThe rate is a number you type. It is not Bank Rate and not a product quote.';
  entry.formulaNotes = [
    '£200,000 at 4.5% for 300 months is £750.00 interest only and £1,111.66 on repayment. Interest-only interest is £225,000.00. Repayment interest is £133,499.49.',
    'MoneyHelper’s explanation of the two contracts is the consumer description this page follows. The pounds are this calculator’s, at the rate you type. Daily interest and a fee added to the loan are not in either figure.'
  ];
  entry.examplesHeading = 'Worked interest-only examples, next to repayment';
  entry.examples = [
    {
      title: '£200,000 at 4.5% for 25 years, interest only',
      paragraphs: [
        'The form’s sample is already this case. The headline is £750.00 / month. The balance at the end is £200,000.00. Interest over 300 months is £225,000.00. The comparison line says repayment on the same amount, rate, and term is £1,111.66 / month, with £133,499.49 of interest.',
        'The monthly bill is £361.66 lower than repayment only because the capital is postponed. A separate plan has to produce the £200,000. A product fee is extra. It is not inside the £750.00. The 4.5% is not a quote.'
      ]
    },
    {
      title: 'The same loan on repayment, and a £250,000 loan',
      paragraphs: [
        'Switch the type to repayment. The headline becomes £1,111.66 / month. Total paid is £333,499.49. Total interest is £133,499.49. The interest-only line underneath is still £750.00 / month, with £200,000.00 left owing.',
        'Amount borrowed 250000, rate 4.5, 25 years, interest only. The payment is £937.50 a month and the capital stays £250,000.00. Interest over the term is £281,250.00. Repayment is £1,389.58 a month and £166,874.36 of interest. Stamp duty on the purchase is a separate bill. A £430,000 main home in England is £11,500 of SDLT on the stamp duty page under the rates from 1 April 2025. That tax is not one twelfth of this payment.'
      ]
    },
    {
      title: '£100,000 at 4% and £150,000 at 5%',
      paragraphs: [
        '£100,000 at 4% for 25 years, interest only, is £333.33 a month on the headline. The interest total is £100,000.00, because the page multiplies the unrounded monthly interest by 300. Three hundred payments of the rounded £333.33 would be a pound short of that total. The gap is display rounding. Repayment is £527.84 a month and £58,351.05 of interest.',
        '£150,000 at 5% for 20 years, interest only, is £625.00 a month. The balance stays £150,000.00, and the interest over 240 months is £150,000.00. Repayment is £989.93 a month, total paid £237,584.07, and interest £87,584.07. Five percent is still a rate you typed. A lender’s illustration is the direct debit. This page is the comparison.'
      ]
    }
  ];
  entry.table = {
    heading: 'Interest only next to repayment',
    caption: 'Each row is what this calculator displays. Interest only leaves the amount borrowed unpaid. The rate is one you type, divided by 12. It is not a lender quote and not Bank Rate.',
    headers: ['Loan', 'Interest only', 'Still owed', 'Interest-only interest', 'Repayment', 'Repayment interest'],
    rows: [
      ['£200,000 at 4.5% for 25 years', '£750.00', '£200,000.00', '£225,000.00', '£1,111.66', '£133,499.49'],
      ['£250,000 at 4.5% for 25 years', '£937.50', '£250,000.00', '£281,250.00', '£1,389.58', '£166,874.36'],
      ['£100,000 at 4% for 25 years', '£333.33', '£100,000.00', '£100,000.00', '£527.84', '£58,351.05'],
      ['£150,000 at 5% for 20 years', '£625.00', '£150,000.00', '£150,000.00', '£989.93', '£87,584.07']
    ]
  };
  entry.extraSections = [
    {
      heading: 'What the lower monthly figure does not pay off',
      paragraphs: [
        'Interest only is cheaper each month because the capital is still due. On the sample, that is £200,000.00 after 25 years of £750.00 payments, on top of £225,000.00 of interest. Repayment costs more each month and less interest, and the balance is scheduled to reach zero.',
        'MoneyHelper says you, not the lender, are responsible for a credible plan to repay that capital, and that a hoped-for inheritance or a rise in the property price is not that plan. This calculator does not test a savings plan, an ISA, or a sale. The UK take-home pay page is a different sum, in the same currency, if you want to set the monthly payment next to a wage. It does not decide whether the loan is affordable.'
      ]
    }
  ];
  entry.limitsHeading = 'What this UK mortgage estimate leaves out';
  entry.limits = [
    'Daily interest, fees, cashback, an offset balance, and a rate that changes after an introductory period are not modeled. Two products with the same headline rate can have different monthly amounts once the lender’s day count is applied.',
    'The percentage you type is not the Bank of England Bank Rate and not a lender’s standard variable rate. This page does not look either of them up. Affordability rules and a maximum loan-to-income ratio are not applied. A payment the formula can compute is not a payment a lender will offer. Interest-only products are restricted.',
    'Overpayments are not applied. The US mortgage payoff page models extra principal in dollars. It is not a sterling interest-only calculator.',
    'Stamp duty, LBTT, and LTT are not added. Nor is buildings insurance. The payment is the loan only. A Canadian mortgage uses semi-annual compounding and a different currency.'
  ];
  entry.disclaimer = 'This interest-only figure, and the repayment beside it, is a monthly model for comparison. It is not a mortgage offer, not an illustration from a lender, and not advice to choose interest only.';
  entry.faqs = [
    {
      q: 'What is the interest only payment on £200,000 at 4.5% for 25 years?',
      a: '£750.00 a month. The balance stays £200,000.00. Over 300 months the interest totals £225,000.00. The repayment on the same loan is £1,111.66 a month, and its interest is £133,499.49. The 4.5% is a rate you type. A lender that accrues interest daily can differ by a small amount.'
    },
    {
      q: 'How does an interest only mortgage payment compare with repayment?',
      a: 'Interest only is the balance times the monthly rate, and the capital is still due at the end. Repayment uses the level payment that is built to reach a zero balance. On £200,000 at 4.5% for 25 years the difference is £361.66 a month, and the interest difference is £225,000.00 against £133,499.49. The lower payment has not repaid the loan.'
    },
    {
      q: 'Does the interest only balance get paid off?',
      a: 'Not by this payment. The result says the balance at the end of the term is still the amount borrowed. MoneyHelper describes that capital as something you repay from a plan of your own. This page does not build the plan, and it does not assume the property will rise enough to cover it.'
    },
    {
      q: 'Why might a lender’s figure differ from £750.00 or £1,111.66?',
      a: 'This page divides the annual rate by 12 and uses equal months. Many UK lenders charge interest by the day. Fees added to the loan, and a rate that lasts only for an introductory period, also change the direct debit. The rate in the box is not Bank Rate. Use the lender’s illustration for the amount you will pay.'
    },
    {
      q: 'Is this the same formula as the US mortgage calculator?',
      a: 'The repayment algebra is the same monthly amortizing payment. The currency, the market, and the interest-only choice are not. The US mortgage page is in dollars and can add tax, insurance, and PMI. This page is in pounds. It opens on interest only and prints the repayment beside it. Do not paste a dollar payment in as if it were sterling.'
    },
    {
      q: 'Does the UK interest only calculator include stamp duty?',
      a: 'No. Stamp Duty Land Tax for England and Northern Ireland is on the stamp duty page. A £430,000 main home at the rates from 1 April 2025 is £11,500 there. Scotland uses LBTT and Wales uses LTT. None of those taxes are added to the monthly payment.'
    }
  ];
  entry.sources = [
    {
      href: 'https://www.moneyhelper.org.uk/en/homes/buying-a-home/mortgage-repayment-options',
      label: 'MoneyHelper, Interest only and repayment mortgages explained',
      note: 'Repayment pays capital and interest. Interest only pays the interest, with the capital due at the end, and MoneyHelper says those deals are now uncommon. This page prices the contract you select. It does not say a lender will offer it.'
    },
    {
      href: 'https://www.moneyhelper.org.uk/en/homes/buying-a-home/ways-of-repaying-an-interest-only-mortgage',
      label: 'MoneyHelper, Ways of repaying an interest-only mortgage',
      note: 'The monthly payment covers interest, and a repayment plan for the capital is your responsibility. A hoped-for windfall or a rise in the property price is not that plan.'
    },
    {
      href: 'https://www.bankofengland.co.uk/monetary-policy/the-interest-rate-bank-rate',
      label: 'Bank of England, Bank Rate',
      note: 'The official Bank Rate page. This calculator does not read it. The percent in the rate box is the one you type.'
    }
  ];
  entry.relatedLinks = [
    { slug: 'england-stamp-duty-calculator', label: 'Stamp duty calculator for England and Northern Ireland', note: 'SDLT on a residential purchase. A £430,000 main home is £11,500 at the rates from 1 April 2025. It is not added to this payment.' },
    { slug: 'scotland-lbtt-calculator', label: 'Scotland LBTT calculator', note: 'Land and Buildings Transaction Tax, not SDLT and not the mortgage payment.' },
    { slug: 'wales-land-transaction-tax-calculator', label: 'Wales land transaction tax calculator', note: 'LTT in pounds. A different statute from SDLT.' },
    { slug: 'uk-take-home-pay-calculator', label: 'UK take-home pay calculator', note: '2026/27 income tax and National Insurance in pounds. It does not price a mortgage, and this page does not decide affordability.' },
    { slug: 'mortgage-calculator', label: 'US mortgage payment calculator', note: 'Dollars, with optional tax, insurance, and PMI. Not a sterling interest-only payment. The markets are different.' },
    { slug: 'canada-mortgage-calculator', label: 'Canada mortgage calculator', note: 'Semi-annual compounding and an optional CMHC premium, in Canadian dollars. Not this UK monthly rate.' }
  ];
}

function applyFuel(entry) {
  entry.title = 'MPG Calculator Cost: Per Mile, Gallon, and Litre | ClearCalc';
  entry.h1 = 'MPG Calculator Cost, per Mile and per Litre';
  entry.description = 'Cost a trip from mpg or litres per 100 km. 300 miles at 30 US mpg and a price you type of $3.50 a US gallon is $35.00, or $0.1167 a mile. 1,500 miles at that mpg is 50 US gallons and $175.00. A UK gallon and a litre are different, and the price is not a live pump quote.';
  entry.intro = [
    'This is the cost of a trip once you already know the fuel economy. The sample is 300 miles at 30 US mpg and a price you type of $3.50 a US gallon. The fuel is 10 US gallons, the cost is $35.00, and that cost is $0.1167 a mile and $0.0725 a kilometre. The same mpg over 1,500 miles is 50 US gallons and $175.00 at that same typed price. $3.50 is an example you can replace. It is not today’s pump price and not a national average.',
    'A US gallon is 3.785411784 litres. A UK gallon is 4.54609 litres. They are not interchangeable, so 30 US mpg is not 30 UK mpg, and a price per US gallon is not a price per UK gallon. The result restates the price you typed per litre, per US gallon, and per UK gallon. A price per litre times 3.785411784 is the US-gallon price. A price per litre times 4.54609 is the UK-gallon price. £1.50 a litre is £5.6781 a US gallon and £6.8191 a UK gallon. The currency menu only changes the symbol. It does not turn dollars into pounds.',
    'If you know the miles and the gallons and you want mpg, that division is the gas mileage calculator. Three hundred miles on 10 US gallons is 30.00 US mpg there. Bring that 30 back here, with a price, and the trip cost is the $35.00 above. Litres per 100 km run the other way: a higher number uses more fuel. Canada and the UK often talk in litres. The United States often talks in mpg. This page keeps the units you select instead of pretending one market’s gallon is universal.'
  ];
  entry.steps = [
    'Enter the distance and choose miles or kilometres. The sample is 300 miles. Include the drive home only if you want it in the cost.',
    'Enter the fuel economy and its unit: US mpg, UK mpg, or litres per 100 km. The sample is 30 US mpg. A lower L/100 km figure means less fuel.',
    'Type the fuel price, what that price is per, and the currency label. The sample is 3.5 per US gallon, in US dollars. Use the number on the pump, not a price this site invents.',
    'Press Calculate. The headline is the trip cost. Under it are the gallons, the cost per mile and per kilometre, and the same price restated per litre and per both gallons.'
  ];
  entry.howHeading = 'Cost per mile, and a price per litre turned into a gallon';
  entry.howItWorks = [
    'The page converts the distance with 1.609344 kilometres per mile, then finds litres. US mpg uses miles divided by mpg, times 3.785411784 litres. UK mpg uses 4.54609 litres. L/100 km uses kilometres times the economy figure, divided by 100. The sample is 300 / 30 = 10 US gallons, and 10 × 3.785411784 = 37.854 litres. The cost is those gallons times $3.50, which is $35.00.',
    'Cost per mile is the trip cost divided by the miles. Cost per kilometre is the trip cost divided by the kilometres. On the sample that is $0.1167 a mile and $0.0725 a kilometre, shown to four decimal places so the fraction of a cent is visible. It is the fuel only. It is not the IRS reimbursement rate, which is a cents-per-mile allowance on its own page and is not a pump price.',
    'The unit-price lines do not change the trip cost. They show what the typed price is in the other units. $3.50 a US gallon is $0.9246 a litre and $4.2033 a UK gallon, because the UK gallon holds more litres. £1.50 a litre, on the 100 km example, is £5.6781 a US gallon and £6.8191 a UK gallon. One hundred kilometres at 8 L/100 km uses 8 litres, so the trip is £12.00, which is £0.1200 a kilometre and £0.1931 a mile.',
    'A UK petrol example uses UK mpg and a litre price. Two hundred miles at 40 UK mpg is 5 UK gallons, 22.730 litres. At a typed £1.45 a litre the cost is £32.96, or £0.1648 a mile. Those 5 UK gallons are 6.005 US gallons. Reading 40 UK mpg as if it were 40 US mpg would buy a different amount of fuel. A Canadian example, 400 km at 8.5 L/100 km and a typed $1.60 a litre, is 34 litres and $54.40 Canadian, or $0.1360 a kilometre.'
  ];
  entry.formula = '1 mile = 1.609344 km\n1 US gallon = 3.785411784 litres\n1 UK gallon = 4.54609 litres\nLitres from US mpg = miles / mpg × 3.785411784\nLitres from UK mpg = miles / mpg × 4.54609\nLitres from L/100 km = kilometres × (L/100 km) / 100\nTrip cost = the gallons or litres × the price, in the unit you chose\nCost per mile = trip cost / miles\nCost per kilometre = trip cost / kilometres\nPrice per US gallon = price per litre × 3.785411784\nPrice per UK gallon = price per litre × 4.54609\nThe currency label formats the symbol. It does not convert money.\nThe price is the one you type. It is not a live quote.';
  entry.formulaNotes = [
    '300 miles at 30 US mpg is 10 US gallons. At a typed $3.50 a US gallon the cost is $35.00, or $0.1167 a mile. 1,500 miles at the same mpg and the same typed price is 50 US gallons and $175.00.',
    'The US gallon figure is the 231 cubic inch gallon, which is 3.785411784 litres. The UK gallon in the Weights and Measures Act 1985 is 4.54609 litres. This page uses those exact values. It does not round them before the multiplication.'
  ];
  entry.examplesHeading = 'Worked mpg, petrol, and per-mile costs';
  entry.examples = [
    {
      title: '300 miles at 30 US mpg, and 50 gallons at the same price',
      paragraphs: [
        'Distance 300 miles, economy 30 US mpg, price 3.5 per US gallon, US dollars. The headline is $35.00. Fuel used is 37.854 litres, 10.000 US gallons, and 8.327 UK gallons. Cost per distance is $0.1167 per mile and $0.0725 per kilometre. The typed price restated is $0.9246 per litre, $3.5000 per US gallon, and $4.2033 per UK gallon.',
        'Distance 1500 miles at the same 30 US mpg and the same $3.50 is 50.000 US gallons and $175.00. The per-mile figure stays $0.1167, because the economy and the price did not change. Fifty gallons is the fuel quantity, not a special mode. If you already know you bought 50 gallons, 50 times the gallon price is the same $175.00. Change $3.50 if the pump shows a different number. This site does not look the pump up.'
      ]
    },
    {
      title: 'Cost of petrol in UK mpg and litres',
      paragraphs: [
        'Distance 200 miles, economy 40 UK mpg, price 1.45 per litre, pounds. The headline is £32.96. The trip uses 22.730 litres, which is 5.000 UK gallons and 6.005 US gallons. Cost per mile is £0.1648. Cost per kilometre is £0.1024. The £1.45 a litre restates as £5.4888 a US gallon and £6.5918 a UK gallon.',
        'Thirty UK mpg on 300 miles would use fewer litres than 30 US mpg, because the UK gallon is larger. The fuel economy converter is the place to flip a bare mpg figure. This page then adds a distance and a price. Do not treat a UK petrol litre price as if it were a US gallon price.'
      ]
    },
    {
      title: 'A litre price in gallon units, and a Canadian trip',
      paragraphs: [
        'Distance 100 kilometres, economy 8 L/100 km, price 1.5 per litre, pounds. The headline is £12.00. Litres are 8.000. The cost is £0.1200 a kilometre and £0.1931 a mile. The price restated is £1.5000 per litre, £5.6781 per US gallon, and £6.8191 per UK gallon. That restatement is the price-per-litre to price-per-gallon step. The trip cost still uses the litre price you typed.',
        'Distance 400 kilometres, economy 8.5 L/100 km, price 1.6 per litre, Canadian dollars. The headline is $54.40. The trip uses 34.000 litres. Cost per kilometre is $0.1360, and cost per mile is $0.2189. The $1.60 is a price you type, labeled in Canadian dollars. It is not a US price and not an exchange-rate conversion. Thirty US mpg is 7.84 L/100 km, so it is not the same car as 8.5 L/100 km.'
      ]
    }
  ];
  entry.table = {
    heading: 'Trip cost and cost per mile at prices you type',
    caption: 'Each row is what this calculator displays. The prices are examples you type. They are not live pump prices. US gallon = 3.785411784 litres. UK gallon = 4.54609 litres. 1 mile = 1.609344 km.',
    headers: ['Trip', 'Economy', 'Typed price', 'Cost', 'Per mile'],
    rows: [
      ['300 miles', '30 US mpg', '$3.50 per US gallon', '$35.00', '$0.1167'],
      ['1,500 miles', '30 US mpg', '$3.50 per US gallon', '$175.00 (50 US gallons)', '$0.1167'],
      ['200 miles', '40 UK mpg', '£1.45 per litre', '£32.96', '£0.1648'],
      ['100 km', '8 L/100 km', '£1.50 per litre', '£12.00', '£0.1931'],
      ['400 km', '8.5 L/100 km', '$1.60 per litre, Canadian', '$54.40', '$0.2189']
    ]
  };
  entry.extraSections = [
    {
      heading: 'Price per litre to price per gallon',
      paragraphs: [
        'The conversion is the litre price times the litres in the gallon. It does not depend on the trip. £1.50 a litre is £5.6781 a US gallon and £6.8191 a UK gallon. $3.50 a US gallon is $0.9246 a litre and $4.2033 a UK gallon. £1.45 a litre is £5.4888 a US gallon and £6.5918 a UK gallon.',
        'Use the unit on the pump for the trip cost. The restated prices are there so a litre sign and a gallon sign are not mixed up. Miles divided by gallons, which is the mpg itself, stays on the gas mileage calculator.'
      ],
      table: {
        heading: 'The same typed price in three units',
        caption: 'Four decimal places, matching the calculator. These are not station quotes.',
        headers: ['Typed as', 'Per litre', 'Per US gallon', 'Per UK gallon'],
        rows: [
          ['$3.50 per US gallon', '$0.9246', '$3.5000', '$4.2033'],
          ['£1.50 per litre', '£1.5000', '£5.6781', '£6.8191'],
          ['£1.45 per litre', '£1.4500', '£5.4888', '£6.5918'],
          ['$1.60 per litre, Canadian', '$1.6000', '$6.0567', '$7.2737']
        ]
      }
    }
  ];
  entry.limitsHeading = 'What this trip cost leaves out';
  entry.limits.unshift(
    'The price is a number you type. It is not a live national average and not today’s pump price. Replace the sample $3.50, £1.45, £1.50, or $1.60 with the figure on the receipt.',
    'US mpg uses a US gallon. UK mpg and a UK petrol price use a UK gallon or a litre. A higher litres-per-100 km figure means more fuel, which is the opposite direction from mpg. The page does not treat one country’s units as universal.'
  );
  if (!entry.limits.some((line) => /not a driving distance/i.test(line))) {
    entry.limits.push('The distance is a driving distance you already measured on a route, from a map, an odometer, or a trip computer. This page does not look up roads between two places. The coordinate distance calculator is a straight line through coordinates, and that straight line is not a driving distance.');
  }
  entry.disclaimer = 'This fuel cost is the distance, the economy, and a price you type. It is not a quote from a station, not a live fuel price, and not a currency conversion.';
  entry.faqs = [
    {
      q: 'How much does 300 miles cost at 30 US mpg and $3.50 a gallon?',
      a: '$35.00 if both the 30 mpg and the $3.50 are US gallons, and if $3.50 is the price you typed rather than a live quote. The trip uses 10 US gallons, which is 37.854 litres. The cost is $0.1167 a mile and $0.0725 a kilometre. A UK gallon is larger, so 30 UK mpg is a different amount of fuel.'
    },
    {
      q: 'What does 50 gallons of gas cost at $3.50 a gallon?',
      a: '$175.00 at a typed price of $3.50 a US gallon. On this page, 1,500 miles at 30 US mpg is those 50.000 US gallons, and the headline is $175.00. The per-mile cost stays $0.1167. Type a different gallon price if the pump is not $3.50. The page will not fetch one.'
    },
    {
      q: 'How do I turn a price per litre into a price per gallon?',
      a: 'Multiply the litre price by 3.785411784 for a US gallon and by 4.54609 for a UK gallon. £1.50 a litre is £5.6781 a US gallon and £6.8191 a UK gallon. The calculator prints those restated prices under the trip cost. The trip itself is still charged in the unit you selected.'
    },
    {
      q: 'What is the cost of petrol for 200 miles at 40 UK mpg?',
      a: '£32.96 if the price you type is £1.45 a litre. The trip uses 5.000 UK gallons, or 22.730 litres, which is 6.005 US gallons. The cost is £0.1648 a mile. Forty UK mpg is not 40 US mpg.'
    },
    {
      q: 'Is cost per mile the same as the IRS mileage rate?',
      a: 'No. Cost per mile here is the fuel for the trip divided by the miles, at the pump price you typed. The IRS mileage page is a reimbursement allowance in cents per mile. This calculator does not use that allowance, and it does not add tolls or the return trip unless the distance already includes them.'
    },
    {
      q: 'Where do I calculate miles per gallon from the fuel I used?',
      a: 'On the gas mileage calculator. Three hundred miles on 10 US gallons is 30.00 US mpg there. This page starts after you know the mpg, or the litres per 100 km, and adds a price. The fuel economy converter changes an mpg figure from US to UK to L/100 km and does not price the trip.'
    }
  ];
  entry.sources = [
    {
      href: 'https://www.nist.gov/pml/owm/si-units-volume',
      label: 'NIST, SI units of volume',
      note: 'The US gallon used here is the 231 cubic inch gallon, equal to 3.785411784 litres. This page multiplies by that exact value.'
    },
    {
      href: 'https://www.legislation.gov.uk/ukpga/1985/72/schedule/1',
      label: 'Weights and Measures Act 1985, Schedule 1',
      note: 'The UK gallon is 4.54609 cubic decimetres, which is 4.54609 litres. A UK mpg figure uses that gallon, not the US gallon.'
    }
  ];
  addLink(entry, 'gas-mileage-calculator', 'Gas mileage calculator', '300 miles on 10 US gallons is 30.00 US mpg. This cost page starts from the mpg and a price. It does not divide miles by gallons to find mpg.');
  addLink(entry, 'irs-mileage-reimbursement-calculator', 'IRS mileage reimbursement calculator', 'A cents-per-mile allowance. The cost per mile on this page is fuel at a pump price you type, not that allowance.');
  addLink(entry, 'fuel-economy-converter', 'Fuel economy converter', '30 US mpg is 7.84 L/100 km and 36.03 UK mpg. That page does not price a trip or convert a litre price into a gallon price.');
}

export function applyNov26ExistingPages(content) {
  applyUkVat(content['uk-vat-calculator']);
  applyCanadaGst(content['canada-gst-hst-calculator']);
  applyUkMortgage(content['uk-mortgage-calculator']);
  applyFuel(content['fuel-cost-calculator']);
}
