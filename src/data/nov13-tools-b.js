import { nov13Page as page } from './nov13-page.js';

export const nov13ToolsB = {
  'roofing-calculator': page({
    slug: 'roofing-calculator',
    title: 'Roofing Calculator: Area, Squares, and Shingle Bundles | ClearCalc',
    h1: 'Roofing Calculator',
    description: 'Roofing calculator for roof area, squares, and shingle bundles from a footprint, a pitch, and waste. A 40 by 30 foot footprint at 6/12 with 10% waste is 1,341.64 sq ft and 45 bundles.',
    intro: [
      'This roofing calculator turns a flat footprint and a roof pitch into an estimated roof area, then into squares and bundles. A 40 by 30 foot footprint is 1,200 square feet on the ground. A 6/12 pitch multiplies that area by 1.1180, the slope factor √(6² + 12²) / 12. The roof area is 1,341.64 square feet. With 10% waste that is 14.7580 squares, and at 3 bundles per square the order rounds up to 45 bundles.',
      'The square footage calculator reports the footprint, not the sloped area. It has no pitch. The area calculator can find a rectangle and still will not apply a pitch factor or count bundles. This page is the one that does both, and it says clearly that one pitch is assumed for the whole footprint.',
      'Pitch is inches of rise per 12 inches of run. A 6/12 roof is entered as 6, not as 6/12 and not as an angle in degrees. Waste is a percent you choose. Ten percent is a common allowance for a simple roof. A cut-up roof with valleys often needs more, and the page will use whatever percent you type up to 50. It does not look at a plan and decide.'
    ],
    steps: [
      'Enter the footprint length and width in feet. The sample is 40 by 30, which is 1,200 square feet before the pitch.',
      'Enter the pitch as rise per 12. The sample is 6. A flat roof is 0, and the factor is then 1. The maximum is 24.',
      'Enter the waste percent. The sample is 10. Zero is allowed when you want the net area only.',
      'Press Calculate. The headline is the bundle count, rounded up. The lines give the footprint, the factor, the roof area, and the squares before and after waste.',
      'If the shingles you are pricing are not packaged as three bundles per square, divide the squares-with-waste line by the coverage on the wrapper instead of using the headline.'
    ],
    howHeading: 'How pitch turns a footprint into bundles',
    howItWorks: [
      'The slope factor is the hypotenuse of a 12-inch run and the rise you typed, divided by 12. For 6/12 that hypotenuse is √(36 + 144) = √180, and √180 / 12 is 1.1180339…, shown as 1.1180. Multiplying the footprint by that factor is the usual way to estimate the area of a single-pitch roof over that outline.',
      'A square is 100 square feet of roof. 1,341.64 square feet is 13.4164 squares. Waste of 10% multiplies by 1.10, which is 14.7580 squares. Three bundles per square is 44.274 bundles, and the page rounds up to 45 because you cannot buy a fraction of a bundle in this estimate.',
      'The rounding uses a tiny tolerance so a value that is already a whole number, aside from binary dust, does not jump to the next bundle. A result that is genuinely above a whole number still rounds up. The area line is not rounded up. Only the bundle count is.'
    ],
    formula: 'Footprint = length × width, in square feet\nPitch factor = √(rise² + 12²) / 12\nRoof area = footprint × pitch factor\nSquares = roof area / 100\nSquares with waste = squares × (1 + waste / 100)\nBundles = squares with waste × 3, rounded up',
    formulaNotes: [
      'A 0 pitch has factor 1. The roof area equals the footprint, which is the right answer for a flat measurement and the wrong answer for a roof that actually rises. Do not type 0 to skip the factor if the roof has a pitch.',
      'Three bundles per square is a packaging assumption used for many asphalt shingles. Some architectural bundles cover more or less than one third of a square. The squares line is the figure to keep if the bundle size is different. The headline will not match that wrapper.'
    ],
    examplesHeading: 'Worked roofing examples',
    samples: [
      { title: '40 by 30 feet at 6/12 with 10% waste', values: { length: 40, width: 30, pitch: 6, waste: 10 }, blurb: 'The sample. Factor 1.1180, roof area 1,341.64 square feet, 45 bundles after waste.' },
      { title: 'The same footprint with no waste', values: { length: 40, width: 30, pitch: 6, waste: 0 }, blurb: 'Waste is the only change. Squares stay 13.4164 and the bundle count falls because 10% is no longer added before rounding up.' },
      { title: 'A flat 40 by 30 foot measurement', values: { length: 40, width: 30, pitch: 0, waste: 0 }, blurb: 'Pitch 0 keeps the factor at 1. The area matches the footprint. This is the number the square footage page would be closer to, still without bundles.' }
    ],
    table: {
      heading: 'Pitch factors and the 40 by 30 sample',
      caption: 'Footprint 1,200 sq ft and 10% waste unless noted. Bundles use 3 per square, rounded up. Each bundle count is this calculator’s headline.',
      headers: ['Pitch', 'Factor', 'Roof area', 'Bundles at 10% waste'],
      rows: [
        ['0/12', '1.0000', '1,200.00 sq ft', '40'],
        ['4/12', '1.0541', '1,264.91 sq ft', '42'],
        ['6/12', '1.1180', '1,341.64 sq ft', '45'],
        ['12/12', '1.4142', '1,697.06 sq ft', '57']
      ]
    },
    limitsHeading: 'What this roof estimate leaves out',
    limits: [
      'One pitch covers the whole footprint. A hip and a gable can share a factor only when you want a rough area. Valleys, dormers, a different pitch on a wing, and starter strips are not drawn. Add waste or measure those pieces separately.',
      'Overhangs are not added unless they are already inside the length and width you type. The footprint is whatever rectangle you entered, not a measurement the page takes from an eave.',
      'Underlayment, ridge cap, flashing, and nails are not counted. The bundle headline is a shingle estimate at 3 bundles per square. It is not a material list.',
      'The page does not price the bundles and does not know a local code for underlayment on a low slope. A pitch under 2/12 is still calculated. Whether that product can be used there is a different question.'
    ],
    disclaimer: 'This is a single-pitch area estimate and a 3-bundles-per-square packaging assumption. It is not a roof takeoff or a bid.',
    faqs: [
      { q: 'How many shingle bundles does a 40 by 30 foot roof at 6/12 need?', a: '45 bundles with 10% waste, at 3 bundles per square. The roof area is 1,341.64 square feet, or 13.4164 squares before waste and 14.7580 squares after it. The count is rounded up.' },
      { q: 'What does a 6/12 pitch do to the footprint area?', a: 'It multiplies the footprint by 1.1180. That factor is √(6² + 12²) / 12. A 1,200 square foot footprint becomes 1,341.64 square feet of roof. A flat measurement uses pitch 0 and does not multiply.' },
      { q: 'Why is the roofing result in bundles instead of square feet?', a: 'The headline is the order quantity. The square-foot area is the first detail line after the factor, and it is not rounded up. Use the squares line if your bundles are not one third of a square.' },
      { q: 'How is this different from the square footage calculator?', a: 'Square footage is the flat area, including an L-shaped plan. It has no pitch and no bundles. This page starts from a rectangle, applies one pitch, and estimates shingles. It will not draw an L.' },
      { q: 'Does 10% waste mean the roof is 10% larger?', a: 'It means the order is 10% larger than the calculated squares. The geometric area does not change. Waste covers cuts, hips, and breakage you choose to allow. The page does not decide the percent from a photo of the roof.' }
    ],
    relatedLinks: [
      { slug: 'square-footage-calculator', label: 'Square footage calculator', note: 'The flat area. A 12 foot 6 inch by 10 foot plan is 125.00 square feet there, with no pitch factor.' },
      { slug: 'area-calculator', label: 'Area calculator', note: 'A rectangle or a circle in the units you type. It does not convert a pitch into bundles.' },
      { slug: 'concrete-slab-calculator', label: 'Concrete slab calculator', note: 'Cubic yards for a slab. Roof area is not a concrete volume.' }
    ]
  }),
  'stair-calculator': page({
    slug: 'stair-calculator',
    title: 'Stair Calculator: Riser and Tread from Total Rise | ClearCalc',
    h1: 'Stair Calculator',
    description: 'Stair calculator for a residential riser and tread layout. A 108 inch rise uses 15 risers of 7.200 inches. With a 140 inch run the tread is 10.000 inches. The 7.75 and 10 inch figures are a 2021 IRC screen, not a permit.',
    intro: [
      'This stair calculator lays out risers and treads from a total rise, and from a total run if you have one. A 108 inch rise, which is 9 feet, is split into 15 risers of 7.200 inches. That count is the one whose riser is closest to 7 inches without going over a 7.75 inch screen. Fourteen risers would be 7.714 inches, which still passes the screen and is farther from 7. Sixteen risers would be 6.750 inches.',
      'If you leave the run at 0, the page suggests a tread from the rule of thumb 2 × riser + tread = 24.5 inches, and it will not suggest less than 10 inches. If you type a run, the tread is the run divided by the number of treads, and there is one fewer tread than there are risers. A 140 inch run with 15 risers gives 14 treads of 10.000 inches.',
      'The 7.75 inch maximum riser and the 10 inch minimum tread are the limits in the 2021 International Residential Code section R311.7.5, used here as a screen. A local code can differ. A nosing, a winder, and a landing are not modeled. Passing the screen is not a permit and not a statement that your jurisdiction adopted that edition.'
    ],
    steps: [
      'Enter the total rise in inches. The sample is 108. Measure the finished floor to the finished floor, not a single step you hope to copy.',
      'Enter the total run in inches, or 0 if you have not measured it. The sample is 0, so the tread is a suggestion.',
      'Press Calculate. The headline is the riser count and the riser height. The lines give the tread count, the tread depth, and the 2R + T check.',
      'Read the flag line. It names a riser over 7.75 inches, a tread under 10 inches, or a 2R + T result outside 24 to 25 inches.',
      'Change the opening, not the formula, if the tread is too short. The page will not drop a riser below the screen to make a longer tread unless the total rise changes.'
    ],
    howHeading: 'How the riser count is chosen',
    howItWorks: [
      'The fewest risers that stay at or under 7.75 inches is the rise divided by 7.75, rounded up. For 108 inches that minimum is 14, because 108 / 7.75 is 13.94. The page then looks at every count from that minimum up to a riser of about 4 inches and keeps the count closest to a 7 inch riser. Fifteen wins: 7.200 is closer to 7 than 7.714 or 6.750.',
      'Treads are one fewer than risers on a straight flight between two floors. Fifteen risers mean fourteen treads. A typed run is divided by that tread count. 140 / 14 is 10 inches exactly. The comfort check is 2 × 7.200 + 10.000 = 24.400, which sits inside 24 to 25.',
      'With no run, 2 × 7.200 + tread = 24.5 suggests a tread of 10.100 inches. The page uses that suggestion and tells you it was not measured. If the rule of thumb had suggested less than 10, the suggestion would be raised to 10 and the note would say so. The IRC minimum is the floor of the suggestion, not a measurement of your stairwell.'
    ],
    formula: 'Minimum riser count = total rise / 7.75, rounded up\nChosen count = the count at or above that minimum whose riser is closest to 7 inches\nRiser = total rise / chosen count\nTread count = riser count − 1\nIf a run is typed: tread = run / tread count\nIf no run is typed: tread = max(10, 24.5 − 2 × riser)\nComfort check = 2 × riser + tread, compared with 24 to 25',
    formulaNotes: [
      '7.75 inches and 10 inches are the 2021 IRC R311.7.5 maximum riser and minimum tread depth used as a screen. The code also has rules for nosings, winders, landings, and headroom that this form does not apply.',
      'The 7 inch target and the 24 to 25 inch combination are rules of thumb, not the code section. A layout can pass 7.75 and 10 and still fall outside 24 to 25. The flag line says so. It does not hide the layout.'
    ],
    examplesHeading: 'Worked stair examples',
    samples: [
      { title: '108 inches of rise, run not measured', values: { rise: 108, run: 0 }, blurb: 'Fifteen risers of 7.200 inches. The tread is the 24.5 rule, not a measured run. Fourteen would have been the fewest legal risers on the 7.75 screen.' },
      { title: '108 inches of rise and 140 inches of run', values: { rise: 108, run: 140 }, blurb: 'The riser count does not change, because the run is not allowed to push the riser over 7.75. Fourteen treads of 10 inches give 2R + T = 24.400.' },
      { title: 'A short rise of 36 inches', values: { rise: 36, run: 0 }, blurb: 'A short flight still uses the same screen. The headline is the count closest to a 7 inch riser. The tread suggestion follows from that riser.' }
    ],
    table: {
      heading: 'Layouts for common rises',
      caption: 'Run left at 0, so the tread is the suggestion. The riser is the headline figure. The 7.75 inch and 10 inch checks use the 2021 IRC limits as a screen only.',
      headers: ['Total rise', 'Risers', 'Riser', 'Suggested tread'],
      rows: [
        ['36 in', '5', '7.200 in', '10.100 in'],
        ['84 in', '12', '7.000 in', '10.500 in'],
        ['108 in', '15', '7.200 in', '10.100 in'],
        ['120 in', '17', '7.059 in', '10.382 in']
      ]
    },
    limitsHeading: 'What this stair layout does not certify',
    limits: [
      'It is not a code compliance certificate. The 2021 IRC R311.7.5 limits are the screen that was coded. Your city may use a different edition, a local amendment, or a different maximum riser. A guard and a handrail are not checked.',
      'Nosings, winders, spiral stairs, and landings are omitted. The tread count assumes one straight flight. A landing in the middle splits the rise, and you would run each flight on its own.',
      'Headroom, width, and the thickness of the treads are not inputs. The total rise should already be the finished-floor dimension you care about. The page does not add a finished-floor thickness.',
      'A typed run that produces a tread under 10 inches is reported, not silently changed. The flag tells you. Lengthening the riser to fix the tread is how people end up over 7.75, so the page will not do that automatically.'
    ],
    disclaimer: 'This is a residential rule-of-thumb layout checked against the 2021 IRC riser and tread limits as a screen. It is not a building permit or a local-code determination.',
    faqs: [
      { q: 'How many risers do I need for a 108 inch rise?', a: '15 risers of 7.200 inches on this page. That is the count closest to a 7 inch riser that stays at or under 7.75 inches. The fewest risers that pass the 7.75 screen would be 14, at 7.714 inches.' },
      { q: 'What tread does a 140 inch run give with a 108 inch rise?', a: '10.000 inches. There are 14 treads because there is one fewer tread than the 15 risers. 140 / 14 = 10. The comfort check is 24.400 inches, inside the 24 to 25 inch rule of thumb.' },
      { q: 'Are 7.75 inch risers and 10 inch treads the building code?', a: 'They are the maximum riser and minimum tread in the 2021 International Residential Code section R311.7.5, used here only as a screen. A local code can be different. This page does not issue a pass for a permit.' },
      { q: 'Why is the suggested tread sometimes different from the run I have?', a: 'A run of 0 means the tread is a suggestion from 2 × riser + tread = 24.5, and never under 10 inches. A measured run replaces that suggestion. The riser count is chosen from the rise, not stretched to fit a short run.' },
      { q: 'Does the stair calculator include a nosing?', a: 'No. The tread is the going used in the layout, not a nosing projection. Winders, landings, and headroom are not on the form. A flight with a landing should be split into two rises.' }
    ],
    relatedLinks: [
      { slug: 'square-footage-calculator', label: 'Square footage calculator', note: 'Floor area of the room the stair opens into. It does not divide a rise into risers.' },
      { slug: 'fence-calculator', label: 'Fence calculator', note: 'Posts and pickets from a length and a spacing. A fence spacing is not a stair riser.' },
      { slug: 'concrete-slab-calculator', label: 'Concrete slab calculator', note: 'Cubic yards for a slab. A stair layout is not a concrete volume.' }
    ]
  }),
  'auto-lease-calculator': page({
    slug: 'auto-lease-calculator',
    title: 'Auto Lease Calculator: Payment from Cap Cost and Residual | ClearCalc',
    h1: 'Auto Lease Calculator',
    description: 'Auto lease calculator for a payment from cap cost, residual, money factor or APR, and term. A $32,000 cap, $19,200 residual, 0.00125 money factor, and 36 months is $419.56 a month before an extra fee.',
    intro: [
      'This auto lease calculator splits a payment into depreciation and a finance charge. Depreciation is the cap cost minus the residual, spread over the term. The finance charge is the cap cost plus the residual, multiplied by the money factor. A $32,000 adjusted cap cost, a $19,200 residual, a 0.00125 money factor, and 36 months is $355.56 of depreciation and $64.00 of finance, $419.56 a month.',
      'The car payment calculator amortizes a loan down to zero. It has no residual. A lease is built to stop at the residual, which is why the same dollars do not produce the same payment. Type the adjusted cap cost, after any cap reduction you have already negotiated. This page does not subtract a down payment a second time.',
      'You can type a money factor or an APR. An APR is converted by dividing by 2,400, the usual lease convention, so 3% becomes 0.00125. That conversion is not a Regulation M disclosure. A money factor above 0.02 is rejected, because that box is where someone types 3 meaning 3% and would otherwise get a nonsense payment. Use the APR choice for 3.'
    ],
    steps: [
      'Enter the adjusted cap cost and the residual in dollars. The residual cannot be larger than the cap cost. The sample is 32000 and 19200.',
      'Enter the term in whole months, from 1 to 84. The sample is 36.',
      'Choose money factor or APR, then type the rate. The sample money factor is 0.00125. The APR choice with 3 produces the same factor.',
      'Enter any extra monthly amount, such as a fee you want inside the payment. The sample is 0. The page does not know which fees your contract capitalizes.',
      'Press Calculate. The headline is the monthly payment. The two portions are listed separately so a big finance charge is not hidden inside one number.'
    ],
    howHeading: 'How a lease payment is split',
    howItWorks: [
      'Depreciation is (cap − residual) / months. (32,000 − 19,200) / 36 = 355.555…, which displays as $355.56. That portion would be zero only if the residual equalled the cap, which this form rejects when the residual is larger and allows when they are equal only if you type them equal. An equal residual makes the depreciation line zero.',
      'The finance portion is (cap + residual) × money factor. (32,000 + 19,200) × 0.00125 = 64 exactly. Adding the portions gives $419.56 after the depreciation cents are rounded for display. An extra monthly amount is added after that and is not multiplied by the money factor.',
      'APR / 2,400 is the conversion. 3 / 2,400 = 0.00125, so the APR choice at 3% matches the sample factor. The page does not convert a money factor back into an APR in the headline. The detail line shows the factor that was used.'
    ],
    formula: 'Depreciation = (cap cost − residual) / months\nMoney factor = the factor you typed, or APR / 2400\nFinance = (cap cost + residual) × money factor\nPayment = depreciation + finance + extra monthly amount\nResidual cannot exceed cap cost\nA typed money factor above 0.02 is rejected',
    formulaNotes: [
      'The 2,400 convention is 2,400 = 24 × 100, a shortcut from a monthly rate. It is widely used on lease worksheets. A contract that defines the rent charge differently will not match.',
      'Sales tax can be an extra monthly amount if you already know the monthly tax, or it can be inside the cap cost if it was capitalized. The page will not compute a state lease tax. Put the figure you already have in the box that matches how it is charged.'
    ],
    examplesHeading: 'Worked lease examples',
    samples: [
      { title: '$32,000 cap, $19,200 residual, factor 0.00125, 36 months', values: { cap: 32000, residual: 19200, months: 36, ratemode: 1, rate: 0.00125, extra: 0 }, blurb: 'Depreciation $355.56 and finance $64.00. The headline is $419.56 a month.' },
      { title: 'The same lease typed as a 3% APR', values: { cap: 32000, residual: 19200, months: 36, ratemode: 2, rate: 3, extra: 0 }, blurb: 'APR divided by 2,400 is 0.00125. The payment matches the money-factor example. The detail line shows the conversion.' },
      { title: 'The same lease plus $25 a month', values: { cap: 32000, residual: 19200, months: 36, ratemode: 1, rate: 0.00125, extra: 25 }, blurb: 'The extra $25 is added after the two portions. It is not financed by the money factor. The headline rises by that $25.' }
    ],
    table: {
      heading: 'Lease payments from the sample cap and residual',
      caption: 'Cap cost $32,000, residual $19,200, no extra monthly amount. The 3% APR row uses the ÷ 2,400 conversion. Payments are this calculator’s headline.',
      headers: ['Term', 'Rate', 'Payment'],
      rows: [
        ['36 months', 'Money factor 0.00125', '$419.56'],
        ['36 months', 'APR 3%', '$419.56'],
        ['48 months', 'Money factor 0.00125', '$330.67'],
        ['36 months', 'Money factor 0.00200', '$457.96']
      ]
    },
    limitsHeading: 'What this lease payment leaves out',
    limits: [
      'It does not subtract a down payment, a rebate, or a trade. Those belong inside the adjusted cap cost before you type it. Typing them again in the extra box would double count.',
      'It is not a loan payoff. The residual is still owed, in the sense that the car is worth that amount in the contract at the end, or you turn it in. The car payment calculator amortizes the amount financed to zero and has no residual.',
      'Mileage penalties, a disposition fee, gap insurance, and a state’s lease tax are not looked up. An amount you want in the monthly payment can be typed as the extra. The page will not split a drive-off check into capitalized and due-at-signing pieces.',
      'The money-factor field rejects a number above 0.02 so that an APR is not typed in the wrong mode. If your factor is genuinely that high, the APR choice can still represent it. A factor of 0.02 is an APR of 48% under the 2,400 convention.'
    ],
    disclaimer: 'This lease payment is the depreciation-plus-rent-charge worksheet. It is not a lease contract, a Regulation M disclosure, or a credit decision.',
    faqs: [
      { q: 'What is the lease payment on a $32,000 cap and a $19,200 residual?', a: 'At a 0.00125 money factor for 36 months it is $419.56 a month. Depreciation is $355.56 and the finance portion is $64.00. An extra monthly amount would be added on top.' },
      { q: 'How does the auto lease calculator turn an APR into a money factor?', a: 'It divides the APR by 2,400. An APR of 3 becomes 0.00125, and the sample payment matches the payment from typing 0.00125 directly. That is the common worksheet conversion, not a federal disclosure.' },
      { q: 'Why is a lease payment different from a car loan payment?', a: 'A loan pays the amount financed down to zero. A lease payment covers only the drop from the cap cost to the residual, plus a finance charge on the cap and the residual together. The car payment page has no residual field.' },
      { q: 'Should the down payment be typed as well as the cap cost?', a: 'No. Use the adjusted cap cost, which is the amount after the cap reduction. This page does not subtract a down payment, a trade, or a rebate. The extra box is only an amount added to the monthly payment.' },
      { q: 'Why was my money factor rejected?', a: 'A number above 0.02 in the money-factor choice is rejected. People type 3 there when they mean 3%. Switch to APR and type 3. A real factor looks like 0.00125.' }
    ],
    relatedLinks: [
      { slug: 'car-payment-calculator', label: 'Car payment calculator', note: '$25,000 at 6% for 60 months is $483.32 a month, and that loan ends at zero. It has no residual.' },
      { slug: 'loan-calculator', label: 'Loan calculator', note: 'The same amortizing idea in years rather than months. It is not a lease.' },
      { slug: 'apr-calculator', label: 'APR calculator', note: 'An APR from a note rate and prepaid finance charges on a loan. It is not a money factor.' }
    ]
  }),
  'heloc-calculator': page({
    slug: 'heloc-calculator',
    title: 'HELOC Calculator: Available Equity and the Draw Payment | ClearCalc',
    h1: 'HELOC Calculator',
    description: 'HELOC calculator for available equity and the payment on a draw. A $500,000 home, a $280,000 mortgage, and an 80% cap leave $120,000. Drawing $50,000 at 8% interest-only is $333.33 a month.',
    intro: [
      'This HELOC calculator does two jobs the home-equity page splits apart. It estimates the room under a combined loan-to-value cap, and it prices the amount you actually draw. A $500,000 home with an 80% cap supports $400,000 of debt. A $280,000 mortgage leaves $120,000. Drawing $50,000 at 8% interest-only is $333.33 a month. The same draw amortized over 10 years is $606.64 a month.',
      'The home equity calculator on this site stops at the room. Its sample is the same $120,000.00 of borrowing room, and it does not ask for a rate or a draw. Use that page when the only question is the cap. Use this page when you want the payment, interest-only or amortizing.',
      'The rate does not change. A real HELOC can. The amortizing choice is a fixed monthly payment that would pay the draw to zero over the term you type, which is a repayment-period model rather than a 10-year interest-only period followed by a different term. Interest-only does not reduce the draw at all.'
    ],
    steps: [
      'Enter the home value, the mortgage balance, and any existing equity balance. The sample value is 500000 and the mortgage is 280000.',
      'Enter the combined loan-to-value cap as a percent. The sample is 80. A cap above 100 is rejected.',
      'Enter the amount you want to draw. It cannot be larger than the room. The sample draw is 50000.',
      'Enter the annual rate and, for an amortizing payment, the term in years. Interest-only ignores the term. The sample rate is 8.',
      'Press Calculate. The headline is the monthly payment. The room is the first detail, so a payment is not quoted without the cap that allowed the draw.'
    ],
    howHeading: 'How the equity room and the payment are calculated',
    howItWorks: [
      'The cap in dollars is the home value times the percent. $500,000 × 0.80 = $400,000. Subtract the mortgage and any existing equity balance. $400,000 − $280,000 = $120,000 of room. A draw above that room is rejected. A mortgage that is already over the cap is rejected before a draw is considered.',
      'Interest-only is the draw times the annual rate divided by 12. $50,000 × 0.08 / 12 = $333.333…, shown as $333.33. Nothing in that payment reduces the principal. The next month’s interest, at the same rate, is the same amount.',
      'The amortizing payment uses the standard fully amortizing formula on the draw alone, not on the first mortgage. $50,000 at 8% for 120 months is $606.64. That payment would retire the draw. It does not refinance the $280,000 mortgage. The mortgage calculator is the page for that first loan.'
    ],
    formula: 'Dollar cap = home value × combined loan-to-value / 100\nAvailable = dollar cap − mortgage − existing equity balance\nInterest-only payment = draw × annual rate / 100 / 12\nAmortizing payment = the standard monthly payment on the draw for the term\nThe draw cannot exceed the available equity\nThe rate is constant',
    formulaNotes: [
      'The home equity page’s $120,000.00 room is the same arithmetic with no draw. This page will show that room and then a payment. Quoting only the payment leaves out how much of the line is still undrawn: $120,000 − $50,000 = $70,000 in the sample.',
      'Interest-only divides by 12. It does not use a daily rate or a bank’s actual/365 convention. A statement that uses a daily rate will differ by a small amount even when the annual rate matches.'
    ],
    examplesHeading: 'Worked HELOC examples',
    samples: [
      { title: '$50,000 drawn at 8%, interest only', values: { value: 500000, mortgage: 280000, existing: 0, cltv: 80, draw: 50000, rate: 8, years: 10, type: 1 }, blurb: 'Room is $120,000. The payment is $333.33 and does not reduce the draw. The 10-year term is ignored in this mode.' },
      { title: 'The same draw amortized over 10 years', values: { value: 500000, mortgage: 280000, existing: 0, cltv: 80, draw: 50000, rate: 8, years: 10, type: 2 }, blurb: 'The room does not change. The payment becomes $606.64 because the draw is now scheduled to reach zero in 120 months.' },
      { title: 'A smaller cap', values: { value: 500000, mortgage: 280000, existing: 0, cltv: 70, draw: 50000, rate: 8, years: 10, type: 1 }, blurb: 'Seventy percent of $500,000 is $350,000. After the mortgage the room is $70,000, and the $50,000 draw still fits. The interest-only payment is unchanged because the draw and the rate did not change.' }
    ],
    table: {
      heading: 'Payment on a $50,000 draw at 8%',
      caption: 'Home value $500,000, mortgage $280,000, no existing equity balance, 80% cap. The room is $120,000 in every row. Payments are this calculator’s headline.',
      headers: ['Payment type', 'Term', 'Monthly payment'],
      rows: [
        ['Interest only', 'Not used', '$333.33'],
        ['Amortizing', '10 years', '$606.64'],
        ['Amortizing', '15 years', '$477.83'],
        ['Amortizing', '20 years', '$418.22']
      ]
    },
    limitsHeading: 'What this HELOC estimate leaves out',
    limits: [
      'The rate is fixed for the calculation. A HELOC rate is often variable. This page will not step the rate. Type a higher rate if you want a stress case, and the result is that constant rate, not a forecast.',
      'It does not model an interest-only period followed by a repayment period of a different length. Pick one payment type. The term applies only to the amortizing choice.',
      'Closing costs, an annual fee, and a lender’s own combined loan-to-value limit are not looked up. The cap is the percent you type. A draw that the lender will not approve can still calculate if it fits the percent.',
      'The first mortgage is not refinanced and is not given a payment here. The mortgage calculator prices a home loan. The home equity page prices only the room. This page prices the draw.'
    ],
    disclaimer: 'This is an equity screen and a constant-rate payment. It is not a HELOC offer, a variable-rate disclosure, or an appraisal.',
    faqs: [
      { q: 'How much can I draw on a $500,000 home with a $280,000 mortgage at 80%?', a: 'The estimated room is $120,000. Eighty percent of $500,000 is $400,000, and the mortgage uses $280,000 of that. A draw larger than $120,000 is rejected.' },
      { q: 'What is the interest-only payment on a $50,000 HELOC draw at 8%?', a: '$333.33 a month. That is $50,000 × 0.08 / 12. The payment does not reduce the draw. The same draw amortized over 10 years is $606.64 a month on this page.' },
      { q: 'How is the HELOC calculator different from the home equity calculator?', a: 'The home equity page stops at the borrowing room. Its sample room is the same $120,000.00. This page also requires a draw, a rate, and a payment type, and the headline is the payment.' },
      { q: 'Does the amortizing HELOC payment include the first mortgage?', a: 'No. It amortizes only the draw. The $280,000 mortgage stays where it is. Pricing that mortgage is the mortgage calculator, which is a different loan.' },
      { q: 'Why is the term ignored for an interest-only HELOC?', a: 'Because an interest-only payment is just one month of interest on the draw. The term is used when you switch to the amortizing payment, which needs a number of months to reach zero.' }
    ],
    relatedLinks: [
      { slug: 'home-equity-loan-calculator', label: 'Home equity loan calculator', note: 'The $120,000.00 room from a $500,000 value, a $280,000 mortgage, and an 80% cap. It does not price a draw.' },
      { slug: 'mortgage-calculator', label: 'Mortgage calculator', note: 'Principal and interest on the first loan. $300,000 at 6.5% for 30 years is $1,896.20 before tax and insurance.' },
      { slug: 'rental-property-calculator', label: 'Rental property calculator', note: 'Cash flow and cap rate on a rental. It is not a HELOC draw.' }
    ]
  }),
  'commission-calculator': page({
    slug: 'commission-calculator',
    title: 'Commission Calculator: Flat Rate or Two Tiers | ClearCalc',
    h1: 'Commission Calculator',
    description: 'Commission calculator for gross pay from sales and a flat or two-tier rate, plus a base salary. $80,000 of sales at 8% plus a $2,000 base is $8,400.00. Two tiers, 8% then 12% above $50,000, are $7,600.00 before a base.',
    intro: [
      'This commission calculator turns sales into a commission and adds an optional base salary. A flat 8% of $80,000 is $6,400. With a $2,000 base the gross pay is $8,400.00. Two tiers use the first rate up to a threshold and the second rate only on the excess. Eight percent to $50,000 and 12% above, on $80,000 of sales and no base, is $4,000 plus $3,600, which is $7,600.00.',
      'The hourly-to-salary calculator starts from an hourly rate and a week. It does not know a sales figure. Overtime starts from hours. This page starts from sales. A draw against commission is not subtracted. Gross pay here is the base plus the commission, before tax.',
      'Two tiers are the most the form splits. A third tier has to be approximated or handled outside the page. The rates are percents of sales, not a percent raise on last year’s wage. The pay-raise calculator is the page for a salary increase.'
    ],
    steps: [
      'Choose one flat rate or two tiers. The sample is the flat rate.',
      'Enter the sales and the first rate. The sample sales are 80000 and the rate is 8.',
      'For two tiers, enter the threshold and the second rate. The sample threshold is 50000 and the second rate is 12. Those boxes are ignored for a flat rate.',
      'Enter the base salary to include, or 0. The sample base is 2000. The base is added after the commission. It is not itself commissioned.',
      'Press Calculate. The headline is gross pay. The lines separate the commission from the base and, for two tiers, the two slices.'
    ],
    howHeading: 'How flat and tiered commission are calculated',
    howItWorks: [
      'A flat commission is sales times the rate. $80,000 × 0.08 = $6,400. Adding the $2,000 base makes $8,400. The threshold and the second rate are not read in this mode, so leaving them filled does not change the flat result.',
      'Two tiers split the sales. The first slice is the sales or the threshold, whichever is smaller. The second slice is anything above the threshold. On $80,000 with a $50,000 threshold the slices are $50,000 and $30,000. Eight percent of the first is $4,000. Twelve percent of the second is $3,600. The commission is $7,600 before any base.',
      'A rate is a percent from 0 to 100. Sales and the base cannot be negative. The threshold, in the tiered mode, has to be above zero. Sales below the threshold pay only the first rate, and the second slice is zero. The page does not pay the second rate on the whole amount.'
    ],
    formula: 'Flat commission = sales × rate / 100\nTiered commission = min(sales, threshold) × first rate / 100\n  + max(0, sales − threshold) × second rate / 100\nGross pay = base salary + commission\nRates are percents from 0 to 100\nThe base is not commissioned',
    formulaNotes: [
      'The second rate applies only to the excess. Paying 12% on the entire $80,000 would be $9,600, which is a different contract. This page will not do that unless the threshold is so small that almost all of the sales sit in the second tier.',
      'Gross pay is not take-home pay. Federal income tax, state tax, and payroll tax are not withheld. A paycheck calculator for a state is the place for a wage. This page does not know which state the commission is taxed in.'
    ],
    examplesHeading: 'Worked commission examples',
    samples: [
      { title: '8% of $80,000 plus a $2,000 base', values: { mode: 1, sales: 80000, rate: 8, threshold: 50000, rate2: 12, base: 2000 }, blurb: 'Flat mode. The commission is $6,400 and the headline is $8,400.00. The tier boxes are ignored.' },
      { title: '8% to $50,000 and 12% above, no base', values: { mode: 2, sales: 80000, rate: 8, threshold: 50000, rate2: 12, base: 0 }, blurb: 'The split is $4,000 and $3,600. Gross pay is $7,600.00. The second rate does not reach back into the first $50,000.' },
      { title: 'Sales under the threshold', values: { mode: 2, sales: 40000, rate: 8, threshold: 50000, rate2: 12, base: 0 }, blurb: 'All $40,000 is in the first tier. The second slice is zero, so the 12% rate does not apply. The commission is $3,200.' }
    ],
    table: {
      heading: 'Gross pay on $80,000 of sales',
      caption: 'Each gross-pay figure is this calculator’s headline. The tiered row uses an 8% rate to $50,000 and 12% above, with no base. The flat rows use one rate.',
      headers: ['Contract', 'Commission', 'Base', 'Gross pay'],
      rows: [
        ['Flat 8%', '$6,400.00', '$2,000.00', '$8,400.00'],
        ['Flat 8%', '$6,400.00', '$0.00', '$6,400.00'],
        ['8% then 12% above $50,000', '$7,600.00', '$0.00', '$7,600.00'],
        ['Flat 10%', '$8,000.00', '$0.00', '$8,000.00']
      ]
    },
    limitsHeading: 'What this commission estimate leaves out',
    limits: [
      'A draw, a chargeback, a split with another salesperson, and a third tier are not fields. Gross pay is the base plus the commission on the sales you typed. It is not a payroll register.',
      'Tax is not withheld. The figure is not a paycheck. State paycheck calculators start from annual wages and a filing status. They do not know a commission schedule.',
      'The flat mode ignores the threshold. If you meant two tiers and left the choice on one rate, the second rate does nothing. The mode is the first control for a reason.',
      'Returns that reduce sales should be netted before you type the sales. The page will not subtract a return field. A negative sales number is rejected rather than treated as a clawback.'
    ],
    disclaimer: 'This gross pay is base salary plus the commission described on the form. It is not a paycheck, a tax withholding, or a commission agreement.',
    faqs: [
      { q: 'How much is an 8% commission on $80,000 of sales?', a: '$6,400.00. With a $2,000 base the gross pay is $8,400.00. The base is added. It is not multiplied by 8%.' },
      { q: 'How do two commission tiers work on $80,000?', a: 'The first rate applies up to the threshold and the second rate applies only above it. At 8% to $50,000 and 12% after that, the commission is $4,000 plus $3,600, which is $7,600.00 with no base.' },
      { q: 'Does the second commission rate apply to all of the sales?', a: 'No. It applies to the excess over the threshold. Twelve percent of the whole $80,000 would be $9,600, and this page does not calculate that unless you set the contract up that way with a flat rate.' },
      { q: 'Is commission gross pay the same as hourly pay?', a: 'No. Hourly pay starts from a rate and hours. This page starts from sales. It does not convert the commission into an hourly equivalent, and it does not compute overtime.' },
      { q: 'Why did the threshold not change my flat commission?', a: 'The one-rate choice ignores the threshold and the second rate. Switch to two tiers if both rates should apply. Leaving the sample threshold filled in does not create a tier by itself.' }
    ],
    relatedLinks: [
      { slug: 'hourly-to-salary-calculator', label: 'Hourly to salary calculator', note: 'An hourly rate, weekly hours, and paid weeks. It does not use a sales figure.' },
      { slug: 'pay-raise-calculator', label: 'Pay raise calculator', note: 'A salary moving from $50,000 to $54,000 is an 8.00% raise. That is not a commission on sales.' },
      { slug: 'overtime-pay-calculator', label: 'Overtime pay calculator', note: 'Weekly pay when hours over a threshold are paid at a multiple. Commission tiers are not overtime tiers.' }
    ]
  })
};
