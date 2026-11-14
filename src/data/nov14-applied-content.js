import { nov14Page as page } from './nov14-page.js';

export const nov14AppliedContent = {
  'gas-mileage-calculator': page({
    slug: 'gas-mileage-calculator',
    title: 'Gas Mileage Calculator | ClearCalc',
    h1: 'Gas Mileage Calculator',
    description: '300 miles on 10 US gallons is 30.00 US mpg, which is 36.03 UK mpg and 7.84 L/100 km.',
    intro: [
      'Gas mileage on this page is a trip divided by the fuel that trip used. The sample trip is 300 miles and 10 US gallons. Distance divided by fuel is 30.00 US mpg. The same trip is 36.03 miles per UK gallon and 7.84 litres per 100 km, because the three units do not share a gallon.',
      'A US gallon is 3.785411784 litres. A UK gallon is 4.54609 litres. A mile is 1.609344 km. The 300 mile sample is therefore 482.8032 km, and the 10 US gallons are 37.8541 litres. UK mpg divides the miles by those litres after they have been turned into UK gallons. L/100 km divides the litres by the kilometres and multiplies by 100.',
      'The fuel-economy converter starts from an mpg or an L/100 km figure you already have and changes the unit. It does not ask for a distance or a fill-up. The fuel-cost calculator multiplies a trip by a price. This page stops at the rate. It does not know what you paid at the pump.'
    ],
    steps: [
      'Enter the distance. The sample is 300.',
      'Choose miles or kilometres. The sample is miles.',
      'Enter the fuel used and choose US gallons, UK gallons, or litres. The sample is 10 US gallons.',
      'Press Calculate. The headline is US mpg. Read the UK mpg line and the L/100 km line before you compare the trip with a brochure that uses another unit.'
    ],
    howHeading: 'How a trip becomes US mpg, UK mpg, and L/100 km',
    howItWorks: [
      'Miles are the distance when you choose miles, and distance divided by 1.609344 when you choose kilometres. Kilometres are the reverse: miles times 1.609344. US gallons are the fuel when you choose US gallons, the fuel times 4.54609 / 3.785411784 when you choose UK gallons, and the fuel divided by 3.785411784 when you choose litres. Litres are the fuel itself in the litre choice, the fuel times 3.785411784 for a US gallon, and the fuel times 4.54609 for a UK gallon.',
      'US mpg is miles divided by US gallons. UK mpg is miles divided by litres / 4.54609. L/100 km is litres / kilometres times 100. A larger mpg is a more frugal trip. A larger L/100 km is a thirstier trip. Ten UK gallons on the same 300 miles is not 30 US mpg: the UK gallon is larger, so the headline falls to 24.98 US mpg while UK mpg stays 30.00 and L/100 km rises to 9.42.',
      'One hundred kilometres on 8 litres is a different trip. That pair is 29.40 US mpg, 35.31 UK mpg, and 8.00 L/100 km. The distance line is 62.1371 miles and the fuel line is 2.1134 US gallons. The page is still dividing one trip by one quantity of fuel. It is not converting a sticker that already says 8.00 L/100 km, and it is not multiplying either figure by a price per litre.'
    ],
    formula: 'Miles = distance, or distance / 1.609344 if you entered kilometres\nKilometres = distance, or distance × 1.609344 if you entered miles\nUS gallons = fuel, or fuel × 4.54609 / 3.785411784 for a UK gallon, or fuel / 3.785411784 for litres\nLitres = fuel in litres, or fuel × 3.785411784 for a US gallon, or fuel × 4.54609 for a UK gallon\nUS mpg = miles / US gallons\nUK mpg = miles / (litres / 4.54609)\nL/100 km = litres / kilometres × 100\n1 US gallon = 3.785411784 L\n1 UK gallon = 4.54609 L\n1 mile = 1.609344 km',
    formulaNotes: [
      '300 / 10 = 30, so the headline is 30.00 US mpg. The UK line is 36.03 because 37.8541 litres is 37.8541 / 4.54609 UK gallons, and 300 divided by that count is 36.03. The litre line is 37.8541 / 482.8032 × 100 = 7.84.',
      'Choosing UK gallons for the same 10 changes the fuel to 45.4609 litres and 12.0095 US gallons. US mpg becomes 300 / 12.0095, which the page shows as 24.98. The digits 10 and 300 did not change. The gallon did.'
    ],
    examplesHeading: 'Worked gas-mileage trips',
    samples: [
      { title: '300 miles on 10 US gallons', overrides: {}, blurb: 'The sample trip divides evenly in US gallons. The headline is 30.00 US mpg. The UK gallon is larger, so the same fuel is 36.03 UK mpg, and the metric rate is 7.84 L/100 km.' },
      { title: '100 km on 8 litres', overrides: { distance: 100, distanceunit: 2, fuel: 8, fuelunit: 3 }, blurb: 'A round metric fill-up. Eight litres in 100 km is 8.00 L/100 km exactly on this page, 29.40 US mpg, and 35.31 UK mpg. The mile equivalent of that 100 km is 62.1371.' },
      { title: '300 miles on 10 UK gallons', overrides: { fuelunit: 2 }, blurb: 'The distance is the same 300 miles and the fuel count is still 10, but the gallon is the UK gallon of 4.54609 litres. UK mpg is 30.00. US mpg drops to 24.98 and L/100 km rises to 9.42.' }
    ],
    table: {
      heading: 'Three trips on this mileage page',
      caption: 'Each headline is US mpg from this calculator. UK mpg and L/100 km are the detail lines for the same trip.',
      headers: ['Trip', 'US mpg']
    },
    limitsHeading: 'What this mileage page leaves out',
    limits: [
      'It does not convert a fuel-economy number you already have. Thirty US mpg typed into the fuel-economy converter is a unit change of a rate. This page will not accept “30 mpg” as an input. It wants the miles and the gallons, or the kilometres and the litres, that produced the rate.',
      'It does not price the trip. Ten US gallons at a pump price is the fuel-cost calculator. A $3.50 US gallon on a 300 mile trip at 30 US mpg is that other page’s question, not this one.',
      'It does not know a tank size, a reserve, or whether the fill-up was to the same mark on the filler neck. The fuel box is the fuel you say the trip used.',
      'It does not adjust for a laboratory test cycle. A window-sticker mpg and a brim-to-brim trip can disagree after the units already match. This page only divides the two numbers you type.'
    ],
    disclaimer: 'This divides a distance by a quantity of fuel, using the exact US gallon, UK gallon, and international mile. It is not a vehicle rating and it is not a fuel bill.',
    faqs: [
      { q: 'What is 300 miles on 10 US gallons in US mpg, UK mpg, and L/100 km?', a: '30.00 US mpg, 36.03 UK mpg, and 7.84 L/100 km. The trip is 482.8032 km and 37.8541 litres. A US gallon is 3.785411784 litres, a UK gallon is 4.54609 litres, and a mile is 1.609344 km.' },
      { q: 'Why is 10 UK gallons on 300 miles not 30 US mpg?', a: 'The UK gallon holds 4.54609 litres, so 10 UK gallons are 45.4609 litres and 12.0095 US gallons. Miles divided by those US gallons is 24.98 US mpg. UK mpg for that entry is 30.00, and L/100 km is 9.42.' },
      { q: 'What does 100 km and 8 litres equal on the gas mileage calculator?', a: '29.40 US mpg, 35.31 UK mpg, and 8.00 L/100 km. The distance is 62.1371 miles and the fuel is 2.1134 US gallons. L/100 km is litres divided by kilometres times 100, so 8 litres in 100 km stays 8.00.' },
      { q: 'How is this gas mileage page different from the fuel-economy converter and the fuel-cost calculator?', a: 'This page divides one trip by the fuel that trip used. The fuel-economy converter changes an mpg or L/100 km figure you already have into the other units and does not ask for a distance. The fuel-cost calculator applies a price per gallon or per litre. No price is entered here.' }
    ],
    relatedLinks: [
      { slug: 'fuel-economy-converter', label: 'Fuel economy converter', note: '30 US mpg is 36.03 UK mpg and 7.84 L/100 km. That page converts a rate you already have. It does not divide a trip.' },
      { slug: 'fuel-cost-calculator', label: 'Fuel cost calculator', note: '300 miles at 30 US mpg and $3.50 a US gallon is a price. This mileage page stops at 30.00 US mpg and does not ask for a pump price.' },
      { slug: 'speed-distance-time-calculator', label: 'Speed, distance, and time calculator', note: '100 km in 1 hour is 62.1371 mph. A speed is not a fuel rate, and this mileage page does not ask how long the trip took.' }
    ]
  }),

  'ohms-law-calculator': page({
    slug: 'ohms-law-calculator',
    title: 'Ohm’s Law Calculator | ClearCalc',
    h1: 'Ohm’s Law Calculator',
    description: '12 V across 2 Ω is 6 A and 72 W. Mode 1 uses voltage and resistance, so the current box is ignored.',
    intro: [
      'Ohm’s law here is the DC relation V = IR, and power is P = VI. You choose which pair you know. Mode 1, the sample, knows voltage and resistance. Twelve volts across 2 ohms draws 12 / 2 = 6 A. Power is 12 × 6 = 72 W.',
      'The form still shows a current of 2 A and a power of 24 W, because those are the starting numbers in the unused boxes. Mode 1 does not read them. Changing the current box to 9 A and the power box to 100 W, while staying in mode 1, still returns 6 A and 72 W. The 24 W figure is a leftover default, not the power of 12 V on 2 Ω.',
      'This is a resistor relationship at a single voltage, current, resistance, and power. It is not an AC impedance, a wire-size table, or a utility bill. The electricity-cost calculator turns watts and hours into a price per kWh. The resistor-color page reads colored bands. Neither of those solves V = IR.'
    ],
    steps: [
      'Choose the pair you know. The sample is voltage and resistance.',
      'Enter that pair. The sample is 12 V and 2 Ω.',
      'Leave the other boxes alone, or change them on purpose. Mode 1 will not use current or power.',
      'Press Calculate. The headline is voltage. Current, resistance, and power are the lines under it.'
    ],
    howHeading: 'How each Ohm’s-law pair is solved',
    howItWorks: [
      'Mode 1 divides voltage by resistance to get current, then multiplies voltage by that current to get power. Mode 2 divides voltage by current to get resistance, and power is again voltage times current. Mode 3 multiplies current by resistance to get voltage. Mode 4 divides power by voltage to get current, then divides voltage by that current to get resistance. Mode 5 divides power by current to get voltage. Mode 6 takes the square root of power divided by resistance to get current, then multiplies that current by resistance to get voltage.',
      'Every mode requires the two quantities it names to be above zero. The other two boxes are parsed and then ignored, so a zero in an unused box is not an error and a different number in an unused box does not move the result. With the sample defaults, mode 2 would use 12 V and the current box’s 2 A and would get 6 Ω and 24 W. That is a different pair. Mode 1 does not do that multiplication.',
      'Mode 6 is the pair that does use the power box. Twenty-four watts and 2 Ω give a current of the square root of 24 / 2, which is 3.464102 A, and a voltage of 6.928203 V. Power stays 24 W because you supplied it. Mode 3 with the default 2 A and 2 Ω is 4 V and 8 W. The headline in every mode is the voltage, even when voltage was the quantity you typed.'
    ],
    formula: 'V = IR\nP = VI\nMode 1, voltage and resistance: I = V / R, P = VI\nMode 2, voltage and current: R = V / I, P = VI\nMode 3, current and resistance: V = IR, P = VI\nMode 4, power and voltage: I = P / V, R = V / I\nMode 5, power and current: V = P / I, R = V / I\nMode 6, power and resistance: I = √(P / R), V = IR\nThe two quantities you did not select are ignored',
    formulaNotes: [
      '12 / 2 = 6, and 12 × 6 = 72. The headline is 12 V, the current line is 6 A, and the power line is 72 W. The current field’s 2 and the power field’s 24 never enter that arithmetic in mode 1.',
      'Mode 4 with the default 24 W and 12 V would be I = 24 / 12 = 2 A and R = 12 / 2 = 6 Ω. That uses the power box. Select mode 4 if 24 W is a measurement. Leave mode 1 selected if 24 W is only the number the form started with.'
    ],
    examplesHeading: 'Worked Ohm’s-law pairs',
    samples: [
      { title: '12 V and 2 Ω', overrides: {}, blurb: 'Mode 1 divides 12 by 2. Current is 6 A and power is 72 W. The current box still says 2 A and the power box still says 24 W, and neither number is read.' },
      { title: 'Unused boxes changed, mode 1 kept', overrides: { current: 9, power: 100 }, blurb: 'Current is typed as 9 A and power as 100 W. Mode 1 still uses 12 V and 2 Ω, so the result is again 6 A and 72 W. The unused boxes are ignored for the pair you selected.' },
      { title: '24 W and 2 Ω', overrides: { mode: 6 }, blurb: 'Mode 6 is the pair that treats 24 W as an input. Current is the square root of 24 / 2, which is 3.464102 A, and voltage is 6.928203 V. This is not the mode 1 result of 72 W.' }
    ],
    table: {
      heading: 'Ohm’s-law headlines',
      caption: 'The headline is always voltage. Current and power are the detail lines. Mode 1 does not read the current or power boxes.',
      headers: ['Pair', 'Voltage']
    },
    limitsHeading: 'What this Ohm’s-law page does not do',
    limits: [
      'It does not price electricity. A watt figure, a number of hours, and a price per kWh belong on the electricity-cost calculator. Power here is volts times amps for the resistor, in watts, with no tariff.',
      'It does not decode color bands and it does not choose a resistor for a circuit. Bands are the resistor-color page. This page starts after you already know two of voltage, current, resistance, and power.',
      'It is a DC relationship. It does not compute reactance, impedance, power factor, or a three-phase load. A zero in a selected box is rejected because the pair would divide by zero or would not determine the other two quantities.',
      'It does not keep a previous mode’s answer in the unused boxes. If you switch from mode 1 to mode 2, type the current you mean. The 2 A sitting in the box is the form default, not the 6 A mode 1 just calculated.'
    ],
    disclaimer: 'This solves V = IR and P = VI for one DC pair you select. It is not a utility bill, a wire ampacity chart, or an AC design.',
    faqs: [
      { q: 'Why is 12 V and 2 ohms equal to 72 W rather than the 24 W in the power box?', a: 'Mode 1 uses voltage and resistance. Current is 12 / 2 = 6 A, and power is 12 × 6 = 72 W. The power box starts at 24 W and the current box starts at 2 A. Both are ignored until you pick a mode that names them.' },
      { q: 'What does Ohm’s law return for 24 W and 2 ohms?', a: 'Choose power and resistance, mode 6. Current is √(24 / 2) = 3.464102 A and voltage is 6.928203 V. The headline is that voltage. Power stays 24 W because this mode reads the power box.' },
      { q: 'What is 2 A through 2 ohms on this page?', a: 'Mode 3, current and resistance, gives 4 V and 8 W. Voltage is 2 × 2. Power is 4 × 2. The 12 V in the voltage box is not used in that mode.' },
      { q: 'Is the Ohm’s law calculator an electricity bill?', a: 'No. It reports volts, amps, ohms, and watts for one resistor relationship. The electricity-cost page is the one that multiplies watts by hours and by a price per kWh.' },
      { q: 'Which boxes does voltage-and-current mode read?', a: 'Mode 2 reads voltage and current. Twelve volts and 3 A is 4 Ω and 36 W. Resistance is 12 / 3 and power is 12 × 3. The resistance box and the power box are ignored in that mode.' }
    ],
    relatedLinks: [
      { slug: 'electricity-cost-calculator', label: 'Electricity cost calculator', note: 'Turns watts, hours, and a price per kWh into energy and a cost. Ohm’s law stops at watts and does not ask for a tariff.' },
      { slug: 'resistor-color-calculator', label: 'Resistor color code calculator', note: 'Brown, black, red, gold is 1,000 Ω ±5%. That page reads bands. It does not apply a voltage.' },
      { slug: 'horsepower-calculator', label: 'Horsepower calculator', note: '300 lb-ft at 4,000 rpm is 228.4844 hp. Shaft power is a different quantity from P = VI.' }
    ]
  }),

  'horsepower-calculator': page({
    slug: 'horsepower-calculator',
    title: 'Horsepower Calculator | ClearCalc',
    h1: 'Horsepower Calculator',
    description: '300 lb-ft at 4,000 rpm is 228.4844 hp, from torque × rpm / 5252.',
    intro: [
      'Shaft horsepower from pound-feet is torque times engine speed divided by 5252. Three hundred pound-feet at 4,000 rpm is 1,200,000 / 5252, which this page shows as 228.4844 hp. The same horsepower is 170,380.78 mechanical watts, or 170.3808 kW.',
      'The metric choice does not divide newton-metres by 1.356 and then use 5252. It computes watts as torque in newton-metres times rpm times 2π / 60, then divides those watts by 745.6998715822702. Three hundred newton-metres at 4,000 rpm is 125,663.71 W, 125.6637 kW, and 168.5178 hp. That is a different torque from 300 pound-feet, and the page will not convert one into the other for you.',
      'The other two methods are quarter-mile fits, not a dynamometer and not a physical law. Elapsed time uses weight / (ET / 5.825)³. Trap speed uses weight × (mph / 234)³. A 3,500 lb car with a 12 second ET is 400.32 hp on the first fit. The same weight at 110 mph is 363.58 hp on the second fit. They are not required to agree.'
    ],
    steps: [
      'Choose pound-feet and rpm, newton-metres and rpm, quarter-mile elapsed time, or quarter-mile trap speed.',
      'For a shaft figure, enter torque and rpm. The sample is 300 lb-ft and 4,000 rpm. Weight, ET, and trap speed are ignored in that mode.',
      'For a quarter mile, enter weight in pounds and either the elapsed time in seconds or the trap speed in mph. Use the method that matches the number you measured.',
      'Press Calculate. Read the line that names the formula so you can see which constant was used.'
    ],
    howHeading: 'How torque, elapsed time, and trap speed become horsepower',
    howItWorks: [
      'Pound-feet mode divides torque × rpm by 5252. The page states that 5252 is 33,000 / (2π), from 33,000 ft·lb per minute in one mechanical horsepower. The division on the page is by 5252 itself, not by a freshly computed 33,000 / (2π). Mechanical watts are that horsepower times 745.6998715822702, shown to two decimals as 170,380.78 for the sample. This mode does not read vehicle weight, elapsed time, or trap speed.',
      'Newton-metre mode multiplies torque by 2π by rpm and divides by 60. That product is watts. Horsepower is watts / 745.6998715822702, and the result line rounds one mechanical horsepower to 745.6999 watts. The page says outright that this is not the pound-foot result divided by 1.356. Three hundred newton-metres is not 300 pound-feet.',
      'Elapsed time is weight in pounds divided by (ET / 5.825) cubed. The 5.825 figure is the constant in that empirical fit. Trap speed is weight in pounds times (mph / 234) cubed. The 234 figure is the constant in the other fit. Neither one is a dyno reading, a drivetrain-loss correction, or an altitude correction, and the page does not check that the time or the speed came from a true quarter mile. Changing 5.825 or 234 is not offered.'
    ],
    formula: 'Pound-feet: hp = torque × rpm / 5252\n5252 is the page’s divisor; the note on the result says 5252 = 33000 / (2π)\nMechanical watts = hp × 745.6998715822702\nNewton-metres: watts = torque × rpm × 2π / 60\nhp = watts / 745.6998715822702\nQuarter-mile ET: hp = weight / (ET / 5.825)³\nQuarter-mile trap speed: hp = weight × (mph / 234)³\nWeight is pounds, ET is seconds, trap speed is mph\nThe ET and trap-speed formulas are empirical fits, not a dynamometer',
    formulaNotes: [
      '1,200,000 / 5252 = 228.484386…, shown as 228.4844 hp. The metric sample’s watts are 300 × 4,000 × 2π / 60 = 125,663.71 W, and 125,663.71 / 745.6998715822702 = 168.5178 hp.',
      'A 3,500 lb car, the weight the quarter-mile boxes start with, is 400.32 hp at a 12 second ET and 363.58 hp at 110 mph. The gap is the two fits, not a measurement error the page will reconcile. Use the fit that matches the number you actually have.'
    ],
    examplesHeading: 'Worked horsepower examples',
    samples: [
      { title: '300 lb-ft at 4,000 rpm', overrides: {}, blurb: 'Torque times rpm divided by 5252. The headline is 228.4844 hp, which is 170,380.78 W. The quarter-mile boxes are not read.' },
      { title: '300 N·m at 4,000 rpm', overrides: { mode: 2 }, blurb: 'Watts are torque times 2π times rpm divided by 60, which is 125,663.71 W. Dividing by 745.6998715822702 gives 168.5178 hp. This is not 228.4844 divided by 1.356.' },
      { title: '3,500 lb in 12 seconds', overrides: { mode: 3 }, blurb: 'The elapsed-time fit is weight / (12 / 5.825)³. The headline is 400.32 hp. It is an empirical quarter-mile estimate, not a dyno, and the trap-speed fit on the same weight is a different number.' }
    ],
    table: {
      heading: 'Horsepower by method',
      caption: 'Each headline is this calculator. The elapsed-time row is the empirical fit, not the torque formula.',
      headers: ['Method', 'Horsepower']
    },
    limitsHeading: 'What these horsepower formulas leave out',
    limits: [
      'Pound-feet mode and newton-metre mode are shaft power at one speed. They say nothing about a quarter mile. The ET and trap-speed modes say nothing about torque. The page does not convert pound-feet to newton-metres.',
      'The quarter-mile formulas are curve fits. They are not a dynamometer, they do not subtract drivetrain loss, and they do not adjust for altitude or for a time that was not a quarter mile. 5.825 and 234 stay fixed.',
      'Trap speed at the default 3,500 lb and 110 mph is 363.58 hp. That will not match the 400.32 hp from a 12 second ET. Pick the fit for the quantity you measured.',
      'A zero or negative torque, rpm, weight, ET, or trap speed is rejected in the mode that uses it. An unused box can stay at its default.'
    ],
    disclaimer: 'Shaft horsepower here is torque at a speed. The quarter-mile numbers are empirical fits with the constants 5.825 and 234, not a dyno sheet and not a racing prediction.',
    faqs: [
      { q: 'What is 300 lb-ft at 4,000 rpm in horsepower?', a: '228.4844 hp. The page computes 300 × 4,000 / 5252. It also shows 170,380.78 mechanical watts and 170.3808 kW, using 745.6998715822702 watts per mechanical horsepower.' },
      { q: 'How does the newton-metre horsepower mode differ from dividing by 5252?', a: 'It uses watts = torque × rpm × 2π / 60, then divides by 745.6998715822702. Three hundred newton-metres at 4,000 rpm is 125,663.71 W and 168.5178 hp. The page does not obtain that by dividing the pound-foot result by 1.356.' },
      { q: 'Is the quarter-mile horsepower a dyno reading?', a: 'No. Elapsed time is weight / (ET / 5.825)³ and trap speed is weight × (mph / 234)³. Both are empirical fits. A 3,500 lb car is 400.32 hp at 12 seconds and 363.58 hp at 110 mph. Those two headlines are not supposed to match.' },
      { q: 'Why is 5252 the divisor for pound-feet?', a: 'The result line says 5252 is 33,000 / (2π), from 33,000 ft·lb per minute in one mechanical horsepower. The arithmetic on the page divides by 5252 exactly. Three hundred times 4,000 divided by 5252 is 228.4844 hp.' },
      { q: 'Does the torque mode use the 3,500 lb weight?', a: 'No. Weight, elapsed time, and trap speed are read only in the quarter-mile modes. Pound-feet mode uses torque and rpm. The 3,500, 12, and 110 sitting in the other boxes do not change 228.4844 hp.' }
    ],
    relatedLinks: [
      { slug: 'speed-distance-time-calculator', label: 'Speed, distance, and time calculator', note: '100 km in 1 hour is 62.1371 mph. A road speed is not shaft horsepower and not a quarter-mile fit.' },
      { slug: 'gas-mileage-calculator', label: 'Gas mileage calculator', note: '300 miles on 10 US gallons is 30.00 US mpg. Fuel used on a trip is not torque at an rpm.' },
      { slug: 'density-calculator', label: 'Density calculator', note: '1 kg in 1 litre is 1,000 kg/m³. Mass and volume are not an engine calculation.' }
    ]
  }),

  'density-calculator': page({
    slug: 'density-calculator',
    title: 'Density and Mass Calculator | ClearCalc',
    h1: 'Density and Mass Calculator',
    description: '1 kg in 1 litre is 1,000 kg/m³, which is 1 g/cm³ and 62.428 lb/ft³.',
    intro: [
      'Density on this page is mass divided by volume, after both are converted to kilograms and cubic metres. The sample is 1 kg and 1 litre. A litre is 0.001 m³, so 1 / 0.001 is 1,000 kg/m³. That is 1 g/cm³ and 62.428 lb/ft³. Water near 4°C is about 1,000 kg/m³. The page does not look up a material and decide that you meant water. The number is just the division.',
      'The other two modes run the same density the other way. Mass is density times volume. Volume is mass divided by density. With the density box at 1,000 kg/m³ and the volume at 1 litre, the mass mode returns 1 kg. Two kilograms at that density is 2 litres, because 2 / 1,000 = 0.002 m³ and 0.002 m³ is 2 litres.',
      'A pound in the mass menu is 0.45359237 kg. One pound in 1 litre is 453.5924 kg/m³, 0.453592 g/cm³, and 28.3168 lb/ft³. A US gallon is 3.785411784 litres and a cubic foot is 0.028316846592 m³ when those volume units are selected. This is not the weight converter, which changes a mass from kilograms to pounds and does not ask for a volume.'
    ],
    steps: [
      'Choose density, mass, or volume. The sample solves for density.',
      'Enter mass and its unit, kilograms or pounds, when you are not solving for mass. The sample is 1 kg.',
      'Enter volume and its unit when you are not solving for volume. Units are litres, cubic metres, cubic feet, or US gallons. The sample is 1 litre.',
      'If you are solving for mass or volume, enter the density in kg/m³ or in g/cm³. Press Calculate.'
    ],
    howHeading: 'How mass and volume become a density',
    howItWorks: [
      'Kilograms pass through as kilograms. Pounds are multiplied by 0.45359237. Litres are multiplied by 0.001 to reach cubic metres. Cubic metres pass through. Cubic feet are multiplied by 0.028316846592. US gallons are multiplied by 0.003785411784. Density mode divides the kilograms by the cubic metres.',
      'The g/cm³ line divides kg/m³ by 1,000. The lb/ft³ line divides kg/m³ by 16.01846337396014. A density you type in g/cm³ is multiplied by 1,000 before it is used as kg/m³. The mass mode then multiplies that kg/m³ by the volume in cubic metres and, if you asked for pounds, divides the kilograms by 0.45359237. The volume mode divides kilograms by kg/m³ and converts the cubic metres into the volume unit you selected.',
      'One US gallon of a 1,000 kg/m³ liquid has a mass of 1,000 × 0.003785411784 kg. The page will do that multiplication in mass mode if you select US gallons and leave the density at 1,000 kg/m³. It will not name the liquid. Finding the density itself is the first mode, and that mode ignores the density box.'
    ],
    formula: 'kg = mass, or mass × 0.45359237 for pounds\nm³ = litres × 0.001, cubic metres × 1, cubic feet × 0.028316846592, or US gallons × 0.003785411784\nDensity mode: kg/m³ = kg / m³\ng/cm³ = kg/m³ / 1000\nlb/ft³ = kg/m³ / 16.01846337396014\nA typed g/cm³ density is multiplied by 1000 to become kg/m³\nMass mode: mass = density × volume\nVolume mode: volume = mass / density\n1 US gallon = 3.785411784 L\n1 cubic foot = 0.028316846592 m³',
    formulaNotes: [
      '1 kg / 0.001 m³ = 1,000 kg/m³. Dividing by 1,000 gives 1 g/cm³. Dividing by 16.01846337396014 gives 62.428 lb/ft³. The headline uses the kg/m³ figure.',
      'Mass mode with the default 1,000 kg/m³ and 1 litre returns 1 kg, because 1,000 × 0.001 = 1. Volume mode with 2 kg at 1,000 kg/m³ returns 2 litres. One pound in 1 litre is 0.45359237 / 0.001 = 453.5924 kg/m³.'
    ],
    examplesHeading: 'Worked density, mass, and volume examples',
    samples: [
      { title: '1 kg in 1 litre', overrides: {}, blurb: 'A litre is 0.001 cubic metres, so the density is 1,000 kg/m³. The other lines are 1 g/cm³ and 62.428 lb/ft³. The page does not look up water. The division happens to match the usual water figure near 4°C.' },
      { title: 'Mass from 1,000 kg/m³ and 1 litre', overrides: { mode: 2 }, blurb: 'Mass mode multiplies density by volume. 1,000 kg/m³ times 0.001 m³ is 1 kg. The density box is used here. It is ignored when you are solving for density.' },
      { title: '1 pound in 1 litre', overrides: { massunit: 2 }, blurb: 'A pound is 0.45359237 kg. In 0.001 m³ that is 453.5924 kg/m³, 0.453592 g/cm³, and 28.3168 lb/ft³. The mass unit changed the kilograms. The litre did not change.' }
    ],
    table: {
      heading: 'Density and the reverse questions',
      caption: 'The first and third rows solve for density. The middle row solves for mass and so the headline is kilograms.',
      headers: ['Inputs', 'Headline']
    },
    limitsHeading: 'What this density page leaves out',
    limits: [
      'It does not identify a substance. 1,000 kg/m³ is about water near 4°C, and the result line says so. The calculator still will not tell you that a sample is water, oil, or anything else.',
      'It is not a weight converter. Pounds appear only so a mass can enter the density formula. Changing kilograms to pounds with no volume is the weight converter, where 1 pound is 0.45359237 kg and no density is involved.',
      'Density mode ignores the density you typed. Mass mode ignores the mass you typed. Volume mode ignores the volume you typed. The ignored box can keep its default.',
      'Zero and negative mass, volume, or density are rejected in the mode that uses them. A very small volume makes a very large density and is still divided. The page does not judge whether the density is plausible.'
    ],
    disclaimer: 'Density here is mass divided by volume in SI units, with the pound, litre, cubic foot, and US gallon factors from the international definitions. It is not a material database.',
    faqs: [
      { q: 'Why is 1 kg in 1 litre equal to 1,000 kg per cubic metre?', a: 'A litre is 0.001 m³. Density is 1 / 0.001 = 1,000 kg/m³. The page also shows 1 g/cm³ and 62.428 lb/ft³. The lb/ft³ line divides by 16.01846337396014.' },
      { q: 'How do I get the mass back from 1,000 kg/m³?', a: 'Choose mass, leave the density at 1,000 kg/m³ and the volume at 1 litre. The headline is 1 kg, from 1,000 × 0.001. Two kilograms at the same density is 2 litres in the volume mode.' },
      { q: 'What density is 1 pound in 1 litre?', a: '453.5924 kg/m³. The pound is 0.45359237 kg and the litre is still 0.001 m³. That is 0.453592 g/cm³ and 28.3168 lb/ft³.' },
      { q: 'Does the density calculator convert a weight by itself?', a: 'No. Pounds are an input unit for a mass that will be divided by a volume, or an output unit for a mass that was multiplied by a density. The weight converter is the page that changes kilograms, pounds, and stone with no volume.' }
    ],
    relatedLinks: [
      { slug: 'volume-calculator', label: 'Volume calculator', note: 'Volume of a box, cylinder, sphere, or cone. This density page starts after you already know the volume.' },
      { slug: 'weight-converter', label: 'Weight converter', note: 'Kilograms, pounds, and stone with the international pound of 0.45359237 kg. No density and no volume.' },
      { slug: 'unit-converter', label: 'Unit converter', note: '1 inch is 2.54 centimetres, and the six dimensions include volume and mass. It does not divide mass by volume.' }
    ]
  }),

  'speed-distance-time-calculator': page({
    slug: 'speed-distance-time-calculator',
    title: 'Speed, Distance, and Time Calculator | ClearCalc',
    h1: 'Speed, Distance, and Time Calculator',
    description: '100 km in 1 hour is 62.1371 mph, and the same speed is 100 km/h and 27.777778 m/s.',
    intro: [
      'Speed is distance divided by time. The sample is 100 kilometres in 1 hour. The headline is 62.1371 mph because a mile is 1.609344 km and 100 / 1.609344 is 62.1371. The same speed is 100 km/h and 27.777778 m/s. All three lines are one speed, not three estimates.',
      'Distance mode multiplies speed by time. Sixty miles per hour for 2 hours is 120 miles. Time mode divides distance by speed. One hundred kilometres at 100 km/h is 1 hour, and the headline uses the unit label “hours”, so it reads 1 hours. The speed converter only changes a speed you already have from one unit to another. It does not ask for a time, so it cannot return a distance.',
      'Each mode ignores the quantity it is solving for. The speed box starts at 60 km/h and is not read when you ask for speed. The distance box is not read when you ask for distance. The time box is not read when you ask for time. A pace in minutes per kilometre is a different page. This one is a single speed, a single distance, or a single time.'
    ],
    steps: [
      'Choose speed, distance, or time. The sample asks for speed.',
      'Enter the two quantities that mode uses, and choose their units. Distance can be miles, kilometres, or metres. Time can be hours, minutes, or seconds. Speed can be mph, km/h, or m/s.',
      'The sample distance is 100 kilometres and the sample time is 1 hour.',
      'Press Calculate. For a speed, read the mph headline together with the km/h and m/s lines.'
    ],
    howHeading: 'How distance and time become a speed',
    howItWorks: [
      'Everything is converted to metres and seconds before the division. A mile is 1,609.344 metres, a kilometre is 1,000 metres, and a metre is 1 metre. An hour is 3,600 seconds, a minute is 60, and a second is 1. Speed mode divides metres by seconds. The headline multiplies metres per second by 3,600 and divides by 1,609.344 to show mph. Kilometres per hour are metres per second times 3.6.',
      'Distance mode converts the speed you typed into metres per second, multiplies by the time in seconds, and divides by the metres in the distance unit you asked for. Sixty mph is 26.8224 m/s. Over 7,200 seconds that is 193,121.28 metres, which is 120 miles. Time mode divides metres by metres per second and then divides by 3,600, 60, or 1, depending on whether you asked for hours, minutes, or seconds.',
      'One hundred kilometres at 100 km/h is 100,000 metres divided by 27.777778 m/s, which is 3,600 seconds, which is 1 hour. The speed converter can turn 100 km/h into mph without a clock. It cannot tell you that the trip took an hour, because a converter has no distance to divide.'
    ],
    formula: 'Metres = miles × 1609.344, kilometres × 1000, or metres × 1\nSeconds = hours × 3600, minutes × 60, or seconds × 1\nm/s from a typed speed = mph × 1609.344 / 3600, km/h × 1000 / 3600, or m/s × 1\nSpeed mode: m/s = metres / seconds\nmph = m/s × 3600 / 1609.344\nkm/h = m/s × 3.6\nDistance = speed × time\nTime = distance / speed\n1 mile = 1.609344 km',
    formulaNotes: [
      '100 km is 100,000 metres and 1 hour is 3,600 seconds. 100,000 / 3,600 = 27.777778 m/s. Times 3.6 is 100 km/h. Times 3,600 / 1,609.344 is 62.1371 mph. The headline is the mph figure.',
      'The speed box’s starting 60 is in km/h and is ignored in speed mode. Sixty mph for 2 hours, chosen on purpose in distance mode, is 120 miles. One hundred kilometres at 100 km/h, chosen in time mode, is 1 hour.'
    ],
    examplesHeading: 'Worked speed, distance, and time examples',
    samples: [
      { title: '100 km in 1 hour', overrides: {}, blurb: 'Speed mode divides the distance by the time. The headline is 62.1371 mph. The same speed is written again as 100 km/h and as 27.777778 m/s. The speed box is not used.' },
      { title: '60 mph for 2 hours', overrides: { mode: 2, speed: 60, speedunit: 1, time: 2, distanceunit: 1 }, blurb: 'Distance mode multiplies speed by time. Sixty miles per hour for two hours is 120 miles. In metres that is 26.8224 m/s times 7,200 seconds.' },
      { title: 'Time for 100 km at 100 km/h', overrides: { mode: 3, speed: 100, speedunit: 2, timeunit: 1 }, blurb: 'Time mode divides distance by speed. One hundred kilometres at 100 km/h is 3,600 seconds. The headline is 1 hours, because the unit label on this form is “hours”.' }
    ],
    table: {
      heading: 'Speed, distance, and time headlines',
      caption: 'Each row solves a different unknown. The speed row’s headline is mph. The other two rows are a distance and a time.',
      headers: ['Question', 'Headline']
    },
    limitsHeading: 'What this speed page leaves out',
    limits: [
      'It does not convert a speed by itself. The speed converter changes mph, km/h, m/s, and knots. This page needs two of speed, distance, and time, and it solves for the third.',
      'It is one constant speed. It does not average a trip with stops, and it does not accept a list of legs. A running pace in minutes per kilometre is the pace calculator, not this form.',
      'Speed mode ignores the speed you typed. Distance mode ignores the distance you typed. Time mode ignores the time you typed. Change the mode if the box you filled is the answer you wanted.',
      'Zero and negative values are rejected for the quantities the mode uses. The page does not know a speed limit, a vehicle, or a wind.'
    ],
    disclaimer: 'This solves speed = distance / time, distance = speed × time, or time = distance / speed, using 1,609.344 metres to the mile. It is not a speed-limit check and it is not a unit converter.',
    faqs: [
      { q: 'What is 100 kilometres in 1 hour in mph?', a: '62.1371 mph. The same speed is 100 km/h and 27.777778 m/s. A mile is 1.609344 km, so 100 / 1.609344 is the mph figure. The headline is mph because that is the road unit this form leads with.' },
      { q: 'How far is 60 mph for 2 hours?', a: '120 miles. Distance mode converts 60 mph to 26.8224 m/s, multiplies by 7,200 seconds, and converts 193,121.28 metres back to miles. The distance box is ignored in that mode.' },
      { q: 'How long does 100 km take at 100 km/h on this page?', a: '1 hour, shown as 1 hours because the result uses the unit label “hours”. The division is 100,000 metres / 27.777778 m/s = 3,600 seconds.' },
      { q: 'How is this different from the speed converter?', a: 'The speed converter changes a speed you already have into another speed unit and does not ask for a time or a distance. This page uses two of the three quantities and solves for the other one. One hundred kilometres in one hour is a trip, not a unit change of the number 100.' }
    ],
    relatedLinks: [
      { slug: 'speed-converter', label: 'Speed converter', note: 'Changes mph, km/h, m/s, or knots. It does not multiply by a time, so it cannot return the 120 miles from 60 mph for 2 hours.' },
      { slug: 'hours-calculator', label: 'Hours calculator', note: 'A clock gap with no distance. This page uses the hours only as the denominator of a speed or the factor in a distance.' },
      { slug: 'gas-mileage-calculator', label: 'Gas mileage calculator', note: '300 miles on 10 US gallons is 30.00 US mpg. A fuel rate needs gallons or litres. A speed does not.' }
    ]
  }),

  'wind-chill-calculator': page({
    slug: 'wind-chill-calculator',
    title: 'Wind Chill Calculator | ClearCalc',
    h1: 'Wind Chill Calculator',
    description: '0°F with a 20 mph wind is −22°F on the NWS 2001 wind-chill equation.',
    intro: [
      'This page applies the 2001 National Weather Service wind-chill equation. The inputs are Fahrenheit and miles per hour. At 0°F and 20 mph the equation returns −22°F. The unrounded value is about −21.995, and the headline keeps one decimal, so it shows as -22°F. The result line calls that pair a check, not a forecast.',
      'The equation is Wind chill (°F) = 35.74 + 0.6215T − 35.75V^0.16 + 0.4275T×V^0.16. It runs when the air is 50°F or colder and the wind is not below 3 mph. At 0°F and 3 mph the headline is still a wind chill, -6.9°F. At 0°F and 2 mph the wind is below 3 mph, so the page returns the air temperature, 0°F, and says it is not calling that number a wind chill. At 60°F and 20 mph the air is above 50°F, so the headline is 60°F for the same reason. At 50°F and 10 mph the equation does run, and the headline is 46°F. At 50.1°F it stops and returns 50.1°F.',
      'Wind chill is not the heat index. Heat index uses temperature and humidity and applies in hot air. This form has no humidity box. A Celsius temperature has to be converted before you type it. The page does not measure skin temperature on a particular person.'
    ],
    steps: [
      'Enter the air temperature in Fahrenheit. The sample is 0.',
      'Enter the wind speed in miles per hour. The sample is 20.',
      'Press Calculate. If the air is above 50°F or the wind is below 3 mph, the headline is the air temperature.',
      'Otherwise read the wind chill in Fahrenheit. 32°F and 10 mph is a second check, 23.7°F.'
    ],
    howHeading: 'How the 2001 NWS wind chill is applied',
    howItWorks: [
      'The published 2001 equation is 35.74 + 0.6215T − 35.75V^0.16 + 0.4275T×V^0.16, with T in Fahrenheit and V in mph. For 0°F and 20 mph the T terms drop out, leaving 35.74 − 35.75 × 20^0.16. Twenty to the power 0.16 is about 1.61497, and the difference rounds to −22°F at one decimal place.',
      'The guard is the comparison in the code: if temperature is greater than 50, or wind is less than 3, the page returns the air temperature to two decimals and explains why. Equality at 50°F still uses the equation. Equality at 3 mph still uses the equation. That is why 0°F at 3 mph is -6.9°F and 50°F at 10 mph is 46°F, while 2 mph and 50.1°F fall back to the air temperature. The page’s own sentence describes the published domain as air at or below 50°F and wind above 3 mph.',
      '32°F and 10 mph evaluates the full equation, including the terms that multiply T by V^0.16, and the headline is 23.7°F. Nothing in the arithmetic looks at humidity, sunlight, or how long someone has been outside. The heat-index page is the hot-weather apparent temperature, and it will not accept a wind speed.'
    ],
    formula: 'Used when T ≤ 50°F and wind ≥ 3 mph:\nWind chill (°F) = 35.74 + 0.6215T − 35.75V^0.16 + 0.4275T×V^0.16\nT is Fahrenheit, V is mph\nIf T > 50 or V < 3, the headline is the air temperature and it is not called a wind chill\nThe 2001 National Weather Service equation\n0°F at 20 mph is about −22°F',
    formulaNotes: [
      'At 0°F and 20 mph, 35.74 − 35.75 × 20^0.16 is approximately −21.995, which displays as -22°F. The check line on the result writes that pair as about −22.0°F.',
      '32°F at 10 mph is 23.7°F. 0°F at 3 mph is -6.9°F, so the formula is still applied on the 3 mph boundary. 0°F at 2 mph stays 0°F. 60°F at 20 mph stays 60°F. 50°F at 10 mph is 46°F, and 50.1°F stays 50.1°F.'
    ],
    examplesHeading: 'Worked wind-chill examples',
    samples: [
      { title: '0°F and 20 mph', overrides: {}, blurb: 'The NWS 2001 check pair. The headline is -22°F. The equation is 35.74 + 0.6215T − 35.75V^0.16 + 0.4275T×V^0.16, and the T terms are zero at 0°F.' },
      { title: '60°F and 20 mph', overrides: { temperature: 60 }, blurb: 'The air is above 50°F, so the equation is not applied. The headline is 60°F, the air temperature, and the page says it is not a wind chill.' },
      { title: '32°F and 10 mph', overrides: { temperature: 32, wind: 10 }, blurb: 'Both the temperature terms and the wind terms are active. The headline is 23.7°F. This is still the 2001 equation, not a heat index.' }
    ],
    table: {
      heading: 'Wind chill and the cases that stay at the air temperature',
      caption: 'The 60°F row is the air temperature because 60 is above 50. The other two rows use the 2001 equation.',
      headers: ['Air and wind', 'Headline']
    },
    limitsHeading: 'What this wind-chill page does not claim',
    limits: [
      'It is not a forecast and not a skin-temperature measurement. The 0°F and 20 mph result is a check of the equation, about −22°F.',
      'It is not the heat index. Heat index needs relative humidity and is an apparent temperature for hot air. This form has no humidity field.',
      'Above 50°F, or with a wind below 3 mph, the headline is the air temperature you typed. A 2 mph wind at 0°F stays 0°F. The page does not invent a chill in that range.',
      'The form is Fahrenheit and mph. A Celsius entry is not converted inside the formula. Convert it first. The page does not know an exposure time or a person’s clothing.'
    ],
    disclaimer: 'This evaluates the 2001 National Weather Service wind-chill equation for Fahrenheit and miles per hour. It is not a forecast, a medical limit, or a heat index.',
    faqs: [
      { q: 'What is the wind chill at 0°F and 20 mph?', a: 'The headline is -22°F. The unrounded 2001 equation is about −21.995°F, which rounds to −22 at one decimal place. The page calls that pair a check, not a forecast.' },
      { q: 'Why does 60°F and 20 mph return 60°F?', a: 'The equation is applied for air at or below 50°F. Above 50°F the page returns the air temperature and does not call it a wind chill. The same thing happens when the wind is below 3 mph: 0°F and 2 mph returns 0°F.' },
      { q: 'Does a wind of exactly 3 mph still use the formula?', a: 'Yes. The guard skips the equation only when the wind is below 3 mph. At 0°F and 3 mph the headline is -6.9°F. At 50°F and 10 mph it is 46°F. At 50.1°F the headline goes back to 50.1°F.' },
      { q: 'Is wind chill the same calculation as the heat index?', a: 'No. Wind chill uses Fahrenheit and wind speed in the 2001 NWS equation. Heat index uses Fahrenheit and relative humidity. 90°F at 50% humidity is a heat-index question, and this page has nowhere to put the humidity.' },
      { q: 'What is 32°F and 10 mph on this wind-chill page?', a: '23.7°F. Both the plain temperature terms and the terms that multiply temperature by wind to the power 0.16 are included. The formula is still 35.74 + 0.6215T − 35.75V^0.16 + 0.4275T×V^0.16.' }
    ],
    relatedLinks: [
      { slug: 'heat-index-calculator', label: 'Heat index calculator', note: '90°F at 50% relative humidity is 94.6°F. That page uses humidity. This one uses wind, and only in cold air.' },
      { slug: 'dew-point-calculator', label: 'Dew point calculator', note: '20°C at 50% relative humidity is 9.26°C on the Magnus formula. Dew point is Celsius and is not a wind chill.' },
      { slug: 'fahrenheit-to-celsius-calculator', label: 'Fahrenheit to Celsius calculator', note: '32°F is 0°C. Convert before you type a Celsius air temperature into this Fahrenheit wind-chill form.' }
    ]
  }),

  'heat-index-calculator': page({
    slug: 'heat-index-calculator',
    title: 'Heat Index Calculator | ClearCalc',
    h1: 'Heat Index Calculator',
    description: '90°F at 50% relative humidity is 94.6°F on the National Weather Service heat-index procedure.',
    intro: [
      'Heat index here follows the National Weather Service procedure. The simple formula is averaged with the air temperature. If that average is at least 80°F, the page applies the Rothfusz regression, then the low-humidity adjustment or the high-humidity adjustment when those conditions hold. At 90°F and 50% relative humidity the average is high enough for the regression, no humidity adjustment applies, and the headline is 94.6°F. The page notes that this sits near the familiar 95°F chart cell, and that 90°F at 60% is about 99.7°F.',
      'Below the 80°F average the regression is not used. At 75°F and 50% humidity the simple formula is 0.5 × (75 + 61 + (75 − 68) × 1.2 + 50 × 0.094) = 74.55. Averaged with 75 that is 74.775, which displays as 74.8°F. The result says the Rothfusz regression was not applied.',
      'This is an apparent temperature. It is not a forecast and not a medical threshold. It is not wind chill. Wind chill uses wind speed and cold air. This form has no wind box. The equation is not a measure of heat illness risk for a particular person, and the page says it is not valid for extreme conditions outside the data Steadman considered.'
    ],
    steps: [
      'Enter the air temperature in Fahrenheit. The sample is 90.',
      'Enter the relative humidity from 0 to 100. The sample is 50.',
      'Press Calculate. If the simple average with the air temperature is below 80°F, the headline is that average.',
      'If the average is at least 80°F, read the Rothfusz result and the line that says whether a low-humidity or high-humidity adjustment was applied.'
    ],
    howHeading: 'How the NWS heat index chooses a formula',
    howItWorks: [
      'The simple Steadman-style value is 0.5 × {T + 61 + [(T − 68) × 1.2] + (RH × 0.094)}. The page averages that with T. When the average is below 80°F, that average is the headline and the regression is skipped, because using the regression there would not match NWS practice.',
      'When the average is at least 80°F, the Rothfusz regression is HI = −42.379 + 2.04901523T + 10.14333127RH − 0.22475541TRH − 0.00683783T² − 0.05481717RH² + 0.00122874T²RH + 0.00085282TRH² − 0.00000199T²RH². After that polynomial, a low-humidity adjustment is subtracted when RH is under 13 and T is from 80°F through 112°F: ((13 − RH) / 4) × √((17 − |T − 95|) / 17). A high-humidity adjustment is added when RH is over 85 and T is from 80°F through 87°F: ((RH − 85) / 10) × ((87 − T) / 5). Only one of those can apply.',
      'At 90°F and 10% humidity the low-humidity term is ((13 − 10) / 4) × √((17 − |90 − 95|) / 17) = 0.75 × √(12 / 17), which the page subtracts as 0.63°F. The headline is 85.3°F. At 85°F and 90% humidity the high-humidity term is ((90 − 85) / 10) × ((87 − 85) / 5) = 0.2°F, and the headline is 101.8°F. At 90°F and 50% neither adjustment runs, and the headline is 94.6°F. At 90°F and 60% it is 99.7°F, still with no adjustment.'
    ],
    formula: 'Simple HI = 0.5 × {T + 61 + [(T − 68) × 1.2] + (RH × 0.094)}\nAverage = (simple HI + T) / 2\nIf average < 80°F, the headline is the average and Rothfusz is not applied\nOtherwise Rothfusz:\nHI = −42.379 + 2.04901523T + 10.14333127RH − 0.22475541TRH − 0.00683783T² − 0.05481717RH² + 0.00122874T²RH + 0.00085282TRH² − 0.00000199T²RH²\nIf RH < 13 and 80 ≤ T ≤ 112, subtract ((13 − RH) / 4) × √((17 − |T − 95|) / 17)\nIf RH > 85 and 80 ≤ T ≤ 87, add ((RH − 85) / 10) × ((87 − T) / 5)\nT is Fahrenheit. RH is percent. Humidity outside 0 to 100 is rejected.',
    formulaNotes: [
      '90°F at 50% humidity reaches the regression and takes no adjustment, so the headline is 94.6°F. The same temperature at 60% humidity is 99.7°F. The page describes 94.6°F as rounding near the familiar 95°F chart cell. The chart cell is not a separate calculation.',
      '75°F at 50% humidity stays on the simple average, 74.8°F. 90°F at 10% humidity subtracts a 0.63°F low-humidity adjustment and shows 85.3°F. 85°F at 90% humidity adds 0.2°F and shows 101.8°F.'
    ],
    examplesHeading: 'Worked heat-index examples',
    samples: [
      { title: '90°F at 50% humidity', overrides: {}, blurb: 'The simple average is at least 80°F, so the Rothfusz regression runs. No low-humidity or high-humidity adjustment applies. The headline is 94.6°F.' },
      { title: '75°F at 50% humidity', overrides: { temperature: 75 }, blurb: 'The simple formula averages with the air temperature to 74.8°F, which is below 80°F. The regression is not applied. The headline is that average.' },
      { title: '90°F at 10% humidity', overrides: { humidity: 10 }, blurb: 'The regression runs, and the low-humidity adjustment subtracts 0.63°F because humidity is under 13% and the temperature is between 80°F and 112°F. The headline is 85.3°F.' }
    ],
    table: {
      heading: 'Heat-index headlines',
      caption: 'The 75°F row stops at the simple average. The other two rows use the Rothfusz regression. The 10% row also subtracts the low-humidity adjustment.',
      headers: ['Air and humidity', 'Headline']
    },
    limitsHeading: 'What this heat index is not',
    limits: [
      'It is not a medical threshold and not a forecast. The page says the equation is not a measure of heat illness risk for a particular person, and that it is not valid for extreme conditions outside the data Steadman considered.',
      'It is not wind chill. There is no wind input. Cold-air apparent temperature is the wind-chill page, which uses the 2001 NWS wind equation.',
      'The Rothfusz regression is withheld when the simple average is below 80°F. A hotter-air polynomial applied under that line would not match the NWS procedure this page follows.',
      'Relative humidity below 0 or above 100 is rejected. The adjustments have their own windows: low humidity only from 80°F to 112°F with RH under 13, and high humidity only from 80°F to 87°F with RH over 85.'
    ],
    disclaimer: 'This applies the National Weather Service heat-index procedure to a Fahrenheit temperature and a relative humidity you type. It is an apparent temperature, not a medical limit and not a forecast.',
    faqs: [
      { q: 'What is the heat index at 90°F and 50% relative humidity?', a: '94.6°F. The simple average is at least 80°F, so the Rothfusz regression is used, and neither humidity adjustment applies. The page also notes that 90°F at 60% humidity is about 99.7°F.' },
      { q: 'Why is 75°F at 50% humidity reported as 74.8°F without the Rothfusz regression?', a: 'The simple value is 0.5 × (75 + 61 + 7 × 1.2 + 50 × 0.094) = 74.55, and the average with 75°F is 74.8°F at one decimal. That average is below 80°F, so the regression is not applied.' },
      { q: 'When does the heat-index page subtract the low-humidity adjustment?', a: 'After the regression, when relative humidity is under 13 and the temperature is from 80°F through 112°F. At 90°F and 10% humidity the subtraction is 0.75 × √(12 / 17), shown as 0.63°F, and the headline is 85.3°F.' },
      { q: 'What does 85°F at 90% humidity add for the high-humidity adjustment?', a: '0.2°F, from ((90 − 85) / 10) × ((87 − 85) / 5). The headline is 101.8°F. That addition runs only when humidity is over 85% and the temperature is from 80°F through 87°F.' },
      { q: 'Is a heat-index result a medical cutoff?', a: 'No. The page calls it an apparent temperature. It is not a forecast and not a measure of heat illness risk for a particular person. It also is not the wind-chill equation.' }
    ],
    relatedLinks: [
      { slug: 'wind-chill-calculator', label: 'Wind chill calculator', note: '0°F and 20 mph is −22°F on the 2001 NWS wind equation. That page has no humidity box.' },
      { slug: 'dew-point-calculator', label: 'Dew point calculator', note: '20°C at 50% relative humidity is a Magnus dew point of 9.26°C. Dew point is not an apparent temperature in Fahrenheit.' },
      { slug: 'celsius-to-fahrenheit-calculator', label: 'Celsius to Fahrenheit calculator', note: 'This heat-index form is Fahrenheit. Convert a Celsius air temperature before you type it.' }
    ]
  }),

  'dew-point-calculator': page({
    slug: 'dew-point-calculator',
    title: 'Dew Point Calculator | ClearCalc',
    h1: 'Dew Point Calculator',
    description: '20°C at 50% relative humidity has a Magnus dew point of 9.26°C.',
    intro: [
      'Dew point on this page is the Magnus formula with the Alduchov and Eskridge 1996 constants, a = 17.625 and b = 243.04°C. The temperature is Celsius. At 20°C and 50% relative humidity, γ is ln(0.50) + 17.625 × 20 / (243.04 + 20) = 0.646953, and the dew point bγ / (a − γ) is 9.26°C.',
      'At 100% relative humidity the logarithm term is zero and the dew point lands on the air temperature. Twenty degrees at 100% humidity is 20°C. At 25°C and 40% humidity, γ is 0.727587 and the dew point is 10.47°C. The fit is stated for about −40°C to 50°C. Outside that range the page rejects the temperature. Humidity must be above 0 and at most 100.',
      'This is not a frost-point calculation and it does not know a pressure. It is not the heat index and not wind chill. Those pages are Fahrenheit apparent temperatures. This one returns a Celsius dew point from temperature and relative humidity only.'
    ],
    steps: [
      'Enter the air temperature in Celsius. The sample is 20.',
      'Enter the relative humidity above 0 and at most 100. The sample is 50.',
      'Press Calculate. The headline is the dew point in Celsius.',
      'Read γ on the detail line if you want to check bγ / (a − γ) by hand.'
    ],
    howHeading: 'How the Magnus dew point is calculated',
    howItWorks: [
      'γ = ln(RH / 100) + aT / (b + T), with a = 17.625 and b = 243.04. The dew point is bγ / (a − γ). The natural log is the ordinary logarithm of the humidity fraction. At 50% that fraction is 0.5. At 100% it is 1, ln(1) is 0, and the remaining fraction aT / (b + T) is arranged so the dew point equals T.',
      'The constants are the Alduchov and Eskridge 1996 fit, not a generic pair of Magnus numbers from another paper. The page names them and uses these values only. It does not switch constants for a frost point, and it does not take a pressure. A Fahrenheit temperature typed into the box would be treated as Celsius.',
      'The stated range is about −40°C to 50°C. A temperature under −40 or over 50 throws an error rather than extrapolating the fit. Humidity of 0 is rejected because the logarithm of zero is not a number the page will return. Humidity of 100 is allowed and is the case where the dew point sits on the air temperature.'
    ],
    formula: 'a = 17.625\nb = 243.04°C\nγ = ln(RH / 100) + aT / (b + T)\nDew point (°C) = bγ / (a − γ)\nAlduchov and Eskridge 1996\nValid for about −40°C to 50°C\nHumidity must be above 0 and at most 100\nTemperature is Celsius, not Fahrenheit',
    formulaNotes: [
      'At 20°C and 50% humidity, γ = 0.646953 and the dew point is 9.26°C. That pair is the check stated on the result.',
      'At 100% humidity and 20°C, γ = 1.3401 and the dew point is 20°C, the air temperature. At 25°C and 40% humidity, γ = 0.727587 and the dew point is 10.47°C.'
    ],
    examplesHeading: 'Worked dew-point examples',
    samples: [
      { title: '20°C at 50% humidity', overrides: {}, blurb: 'The Alduchov and Eskridge constants give γ = 0.646953. The headline is 9.26°C. The temperature is Celsius.' },
      { title: '20°C at 100% humidity', overrides: { humidity: 100 }, blurb: 'Relative humidity of 100% puts the dew point on the air temperature. The headline is 20°C and γ is 1.3401.' },
      { title: '25°C at 40% humidity', overrides: { temperature: 25, humidity: 40 }, blurb: 'A warmer, drier pair. γ is 0.727587 and the dew point is 10.47°C. The same constants are used. The page still does not know a pressure.' }
    ],
    table: {
      heading: 'Magnus dew points',
      caption: 'Each headline is Celsius. The 100% row matches the air temperature. Constants are a = 17.625 and b = 243.04°C.',
      headers: ['Air and humidity', 'Dew point']
    },
    limitsHeading: 'What this dew-point page does not do',
    limits: [
      'It is not a frost point and it does not take a pressure. The formula is the Magnus dew point only.',
      'The temperature is Celsius. A Fahrenheit number in the box is interpreted as Celsius. Convert it on the Fahrenheit-to-Celsius page first.',
      'The fit is limited to about −40°C to 50°C. Outside that window the page rejects the input instead of extending the curve. Humidity of 0 is rejected. Humidity above 100 is rejected.',
      'It is not the heat index and not wind chill. Those are Fahrenheit apparent temperatures. A dew point of 9.26°C is not a 94.6°F heat index, even though both samples use 50% relative humidity.'
    ],
    disclaimer: 'This is the Magnus dew point with the Alduchov and Eskridge 1996 constants a = 17.625 and b = 243.04°C. It is not a frost point, a pressure correction, or a forecast.',
    faqs: [
      { q: 'What is the dew point at 20°C and 50% relative humidity?', a: '9.26°C. With a = 17.625 and b = 243.04°C, γ = ln(0.50) + aT / (b + T) = 0.646953, and the dew point is bγ / (a − γ). The constants are the Alduchov and Eskridge 1996 fit.' },
      { q: 'What happens to the dew point at 100% relative humidity?', a: 'It equals the air temperature. At 20°C and 100% humidity the headline is 20°C and γ is 1.3401. The logarithm of 1 is zero, so the humidity term drops out.' },
      { q: 'Which temperature unit does the dew-point calculator use?', a: 'Celsius. The sample 20 is 20°C, not 20°F. The valid window is about −40°C to 50°C. A Fahrenheit air temperature has to be converted before it is typed.' },
      { q: 'Why does the dew-point page reject a temperature of 60°C?', a: 'The Magnus fit on this page is stated for about −40°C to 50°C. Above 50°C, or below −40°C, the page stops rather than extrapolating. Humidity must be above 0 and at most 100.' },
      { q: 'Is the dew point a heat index?', a: 'No. Heat index at 90°F and 50% humidity is 94.6°F on the heat-index page. This page returns a Celsius dew point and does not apply the Rothfusz regression. It also does not use wind.' }
    ],
    relatedLinks: [
      { slug: 'heat-index-calculator', label: 'Heat index calculator', note: '90°F at 50% relative humidity is 94.6°F. That is an apparent temperature, not a dew point.' },
      { slug: 'wind-chill-calculator', label: 'Wind chill calculator', note: '0°F and 20 mph is −22°F. Wind chill uses wind speed. Dew point uses relative humidity.' },
      { slug: 'celsius-to-fahrenheit-calculator', label: 'Celsius to Fahrenheit calculator', note: 'The dew point is calculated in Celsius. Convert the result if you need Fahrenheit after the fact.' }
    ]
  }),

  'tire-size-calculator': page({
    slug: 'tire-size-calculator',
    title: 'Tire Size Calculator | ClearCalc',
    h1: 'Tire Size Calculator',
    description: 'A 225/45R17 is 24.97 inches in overall diameter, with a 101.25 mm sidewall and 2,537.2 revolutions per mile.',
    intro: [
      'A metric tire code on this page is a section width in millimetres, an aspect ratio in percent, and a rim diameter in inches. For 225/45R17 the sidewall is 225 × 0.45 = 101.25 mm. The overall diameter is the rim in millimetres plus two sidewalls: 17 × 25.4 + 2 × 101.25 = 634.3 mm, which is 24.972 inches. The headline rounds that to 24.97 inches. The circumference is π times the diameter, 78.453 inches.',
      'Revolutions per mile are 63,360 divided by the diameter in inches. A mile is 63,360 inches. For this tire that quotient is 2,537.2. The second width starts at 0, and a second width of 0 skips the comparison. The page does not invent a second tire.',
      'If you set a second width above 0, the page sizes that tire the same way and compares circumferences. A 205/55R16 next to the 225/45R17 has a diameter of 24.878 inches. The indicated-speed error is (second circumference − first circumference) / first circumference × 100, which is -0.38%. A positive percent would mean the new tire travels farther each turn, so the true speed is higher than a speedometer that still assumes the first tire. A negative percent means the new tire is shorter each turn. Load, pressure, and tread wear are ignored.'
    ],
    steps: [
      'Enter the section width in millimetres, the aspect ratio as a percent such as 45, and the rim in inches. The sample is 225, 45, and 17.',
      'Leave the second width at 0 if you only want one tire.',
      'To compare a speedometer, enter a second width above 0, plus that tire’s aspect ratio and rim.',
      'Press Calculate. The headline is the first tire’s diameter in inches. Revolutions per mile are 63,360 divided by that diameter in inches.'
    ],
    howHeading: 'How a metric tire code becomes a diameter',
    howItWorks: [
      'Sidewall height in millimetres is section width times aspect ratio divided by 100. Diameter in millimetres is rim inches times 25.4, plus two sidewalls. Diameter in inches is that millimetre diameter divided by 25.4. Circumference in inches is π times the inch diameter. The aspect ratio has to be a percent: 45, not 0.45. An aspect ratio above 100 is rejected with that reminder.',
      'Revolutions per mile use 63,360 / diameter in inches. For the sample diameter of 24.972 inches the page shows 2,537.2. That division is by the diameter in inches, which is the arithmetic that produces the printed revolutions. The circumference is reported on its own line, 78.453 inches, as π times the diameter.',
      'The comparison runs only when the second width is greater than 0. The error percent is the change in circumference divided by the first circumference, times 100. The 205/55R16 comparison is -0.38% because that tire’s diameter is 24.878 inches, a little under 24.972. A 245/40R18, entered as the first tire, is a different size: sidewall 98 mm, diameter 653.2 mm, 25.72 inches on the headline, circumference 80.791 inches, and 2,463.78 revolutions per mile.'
    ],
    formula: 'Sidewall mm = width × (aspect / 100)\nDiameter mm = rim × 25.4 + 2 × sidewall\nDiameter inches = diameter mm / 25.4\nCircumference inches = π × diameter inches\nRevolutions per mile = 63360 / diameter inches\nA mile is 63,360 inches\nSpeedometer error, if the second width is above 0:\n(second circumference − first circumference) / first circumference × 100\nA positive percent means the new tire travels farther each revolution\nA second width of 0 skips the comparison\nAspect ratio is a percent, such as 45, and a value above 100 is rejected',
    formulaNotes: [
      '225 × 0.45 = 101.25 mm. 17 × 25.4 = 431.8. Two sidewalls add 202.5. The diameter is 634.3 mm, or 24.972 inches, and the headline is 24.97 inches. 63,360 / 24.972 = 2,537.2 revolutions per mile.',
      'The 205/55R16 comparison diameter is 24.878 inches and the speedometer error is -0.38%. A 245/40R18 by itself is 25.72 inches in diameter and 2,463.78 revolutions per mile. Width 0 on the second tire leaves the comparison off.'
    ],
    examplesHeading: 'Worked tire-size examples',
    samples: [
      { title: '225/45R17 alone', overrides: {}, blurb: 'Sidewall 101.25 mm, overall diameter 634.3 mm (24.972 inches), circumference 78.453 inches. Revolutions per mile are 63,360 divided by the diameter in inches, 2,537.2. The second width is 0, so there is no speedometer comparison.' },
      { title: '225/45R17 compared with 205/55R16', overrides: { width2: 205, aspect2: 55, rim2: 16 }, blurb: 'The headline is still the first tire, 24.97 inches. The second tire is 24.878 inches. The indicated speed is off by -0.38% if the speedometer still assumes the first tire. Negative means the new tire travels less far each turn.' },
      { title: '245/40R18 alone', overrides: { width: 245, aspect: 40, rim: 18 }, blurb: 'The sidewall is 98 mm. The diameter is 653.2 mm, the headline is 25.72 inches, the circumference is 80.791 inches, and revolutions per mile are 2,463.78. The second width is still 0.' }
    ],
    table: {
      heading: 'Tire diameters',
      caption: 'The headline is the first tire’s diameter in inches. The comparison row still headlines the 225/45R17. The error percent is in the detail line.',
      headers: ['Tire', 'Diameter']
    },
    limitsHeading: 'What this tire page leaves out',
    limits: [
      'Revolutions per mile ignore load, pressure, and tread wear. The figure is geometry from the code you typed: 63,360 divided by the diameter in inches.',
      'A second width of 0 skips the comparison. The aspect and rim sitting in the second-tire boxes are not used until the second width is above 0.',
      'The aspect ratio is a percent. Typing 0.45 instead of 45 is rejected once the value is above zero and, if it were entered as a number above 100, the page tells you to use a percent such as 45. An aspect ratio above 100 is an error.',
      'The speedometer percent assumes the speedometer is still calibrated to the first tire and that both tires make the same revolutions. It is not a measurement from a GPS, and it does not know a gear or a speedometer drive.'
    ],
    disclaimer: 'This is the geometry of a metric tire code: sidewall, diameter, circumference, and revolutions per mile from 63,360 / diameter in inches. It ignores load, pressure, and wear.',
    faqs: [
      { q: 'What is the diameter of a 225/45R17?', a: '634.3 mm, or 24.972 inches, shown on the headline as 24.97 inches. The sidewall is 225 × 0.45 = 101.25 mm. Diameter in millimetres is 17 × 25.4 + 2 × 101.25. Circumference is 78.453 inches.' },
      { q: 'How are revolutions per mile calculated for a 225/45R17?', a: '63,360 divided by the diameter in inches. A mile is 63,360 inches and the diameter is 24.972 inches, so the page shows 2,537.2 revolutions per mile. Load, pressure, and tread wear are not in that division.' },
      { q: 'What does a second width of 0 do on the tire calculator?', a: 'It skips the comparison. The sample 225/45R17 with the second width left at 0 reports one tire and does not compute a speedometer error.' },
      { q: 'How far off is the speedometer if a 225/45R17 is replaced by a 205/55R16?', a: 'The second tire is 24.878 inches in diameter, and the indicated speed is off by -0.38% at the same revolutions. A negative percent means the new tire travels less far each turn, so the true speed is lower than the speedometer. A positive percent would mean the opposite.' },
      { q: 'Why will the tire page not accept an aspect ratio of 0.45?', a: 'The aspect box is a percent, such as 45. The sidewall is width times aspect / 100. An aspect ratio above 100 is rejected with that explanation. Use 45 for a 45-series tire.' }
    ],
    relatedLinks: [
      { slug: 'length-converter', label: 'Length converter', note: 'Converts a length you already have. It does not split a tire code into sidewall and rim.' },
      { slug: 'speed-converter', label: 'Speed converter', note: 'Changes mph, km/h, m/s, or knots. The tire page’s speedometer percent is a circumference ratio, not a unit conversion.' },
      { slug: 'unit-converter', label: 'Unit converter', note: '1 inch is exactly 2.54 centimetres, which is the 25.4 millimetres this page uses for each inch of rim.' }
    ]
  }),

  'resistor-color-calculator': page({
    slug: 'resistor-color-calculator',
    title: 'Resistor Color Code Calculator | ClearCalc',
    h1: 'Resistor Color Code Calculator',
    description: 'A 4-band brown, black, red, gold resistor is 1,000 Ω ±5%, from 950 Ω to 1,050 Ω.',
    intro: [
      'This page decodes a color code you already see on a resistor. Four bands use two digits. The sample is brown, black, red, gold: digits 1 and 0, multiplier ×100, gold tolerance ±5%. The value is 10 × 100 = 1,000 Ω. Five percent either way is 950 Ω to 1,050 Ω.',
      'Five bands use a third digit. Leaving the third digit on black and the multiplier on red makes the digits 1, 0, and 0, still times 100, which is 10,000 Ω, from 9,500 Ω to 10,500 Ω at ±5%. The first digit cannot be black. Gold and silver are multiplier or tolerance bands on this form, not digit bands. A six-band temperature-coefficient stripe is not read.',
      'The page does not pick a resistor for a circuit and it does not apply a voltage. Ohm’s law is the other electrical page. Brown, black, red, gold tells you the ohms. It does not tell you the current at 12 V.'
    ],
    steps: [
      'Choose 4 bands or 5 bands. The sample is 4.',
      'Choose the digit colors. The sample is brown, then black. For 5 bands, set the third digit too.',
      'Choose the multiplier and the tolerance. The sample multiplier is ×100, red, and the tolerance is gold, ±5%.',
      'Press Calculate. The headline is the nominal ohms. The tolerance window is the next line.'
    ],
    howHeading: 'How resistor bands become ohms',
    howItWorks: [
      'Digit colors are black 0, brown 1, red 2, orange 3, yellow 4, green 5, blue 6, violet 7, grey 8, and white 9. The first digit is restricted to 1 through 9, so it cannot be black. Four-band value is (10 × first + second) times the multiplier. Five-band value inserts the third digit: 100 × first + 10 × second + third, then times the multiplier.',
      'Multipliers on the form run from ×0.01 silver and ×0.1 gold through ×1 black, ×10 brown, ×100 red, ×1,000 orange, and on by powers of ten up to ×1,000,000,000 white. Tolerances are brown ±1%, red ±2%, green ±0.5%, blue ±0.25%, violet ±0.1%, grey ±0.05%, gold ±5%, and silver ±10%. The window is nominal × (1 − tolerance/100) through nominal × (1 + tolerance/100).',
      'The same brown-black digits with a black ×1 multiplier are 10 × 1 = 10 Ω, and gold still gives 9.5 Ω to 10.5 Ω. Silver tolerance on the 1,000 Ω sample is ±10%, 900 Ω to 1,100 Ω. None of these steps chooses a resistor. They only decode the bands you selected.'
    ],
    formula: '4 bands: ohms = (10 × digit1 + digit2) × multiplier\n5 bands: ohms = (100 × digit1 + 10 × digit2 + digit3) × multiplier\nLow = ohms × (1 − tolerance/100)\nHigh = ohms × (1 + tolerance/100)\nDigit colors: black 0 through white 9. The first digit is 1 through 9.\nGold tolerance is ±5%. Silver tolerance is ±10%.\nThe temperature-coefficient band of a six-band resistor is not read.',
    formulaNotes: [
      'Brown, black, ×100, gold is 10 × 100 = 1,000 Ω. Five percent of 1,000 is 50, so the window is 950 Ω to 1,050 Ω.',
      'Five bands with a black third digit make 100 × 100 = 10,000 Ω at the same ×100 multiplier, from 9,500 Ω to 10,500 Ω at ±5%. A ×1 multiplier on the four-band sample is 10 Ω, from 9.5 Ω to 10.5 Ω.'
    ],
    examplesHeading: 'Worked resistor color codes',
    samples: [
      { title: '4-band brown, black, red, gold', overrides: {}, blurb: 'Digits 1 and 0, multiplier ×100, tolerance ±5%. The headline is 1,000 Ω. The window is 950 Ω to 1,050 Ω. The third-digit box is ignored because this is a 4-band code.' },
      { title: '5-band brown, black, black, red, gold', overrides: { bands: 5 }, blurb: 'Five bands use the third digit. Brown, black, black is 100, times the ×100 multiplier, which is 10,000 Ω. Gold still means ±5%, so the window is 9,500 Ω to 10,500 Ω.' },
      { title: '4-band brown, black, black, gold', overrides: { multiplier: 2 }, blurb: 'The multiplier is ×1, the black multiplier band. Digits 1 and 0 times 1 is 10 Ω. Gold ±5% is 9.5 Ω to 10.5 Ω.' }
    ],
    table: {
      heading: 'Decoded resistor codes',
      caption: 'The headline is the nominal resistance. The tolerance window is the detail line, not the headline.',
      headers: ['Code', 'Ohms']
    },
    limitsHeading: 'What this color-code page does not do',
    limits: [
      'It does not design a circuit and it does not apply Ohm’s law. A 1,000 Ω resistor at 12 V is the Ohm’s-law page, which would use voltage and resistance and would not look at band colors.',
      'The first digit cannot be black. Gold and silver are not offered as digit colors. They appear as the ×0.1 and ×0.01 multipliers and as the ±5% and ±10% tolerances.',
      'Six-band resistors have a temperature-coefficient band. This form does not read it. Four bands ignore the third digit. Five bands require it.',
      'The window is a symmetric percent around the nominal value. The page does not look up an EIA series, a power rating, or a manufacturer’s measured resistance.'
    ],
    disclaimer: 'This decodes a 4-band or 5-band color code into ohms and a tolerance window. It does not select a resistor for a circuit.',
    faqs: [
      { q: 'What is a brown, black, red, gold resistor worth?', a: '1,000 Ω ±5%, from 950 Ω to 1,050 Ω. Brown and black are the digits 1 and 0. Red is the ×100 multiplier. Gold is ±5%. Four bands use two digits.' },
      { q: 'How does a 5-band code use the third digit?', a: 'The value is 100 × first + 10 × second + third, then times the multiplier. Brown, black, black, with a ×100 multiplier, is 100 × 100 = 10,000 Ω. At gold ±5% the window is 9,500 Ω to 10,500 Ω.' },
      { q: 'What is brown, black, with a black ×1 multiplier and a gold band?', a: '10 Ω ±5%, from 9.5 Ω to 10.5 Ω. The digits are still 1 and 0. The multiplier changed from ×100 to ×1.' },
      { q: 'Why can the first resistor digit not be black?', a: 'The first-digit menu starts at brown, the digit 1, and runs through white. Black is a legal second or third digit. Gold and silver are multiplier or tolerance bands on this form, not digits.' },
      { q: 'Does the resistor color calculator tell me which resistor to buy?', a: 'No. It decodes bands you already see. It does not apply a voltage or a current. Ohm’s law is the separate page for V = IR and P = VI.' }
    ],
    relatedLinks: [
      { slug: 'ohms-law-calculator', label: 'Ohm’s law calculator', note: '12 V across 2 Ω is 6 A and 72 W. That page starts from electrical quantities, not from band colors.' },
      { slug: 'electricity-cost-calculator', label: 'Electricity cost calculator', note: 'Prices watts over time. A resistor code has no hours and no price per kWh.' },
      { slug: 'bandwidth-calculator', label: 'Bandwidth calculator', note: '100 decimal MB at 100 Mbit/s is 8 seconds. Bits per second are not ohms.' }
    ]
  }),

  'ipv4-subnet-calculator': page({
    slug: 'ipv4-subnet-calculator',
    title: 'IPv4 Subnet Calculator | ClearCalc',
    h1: 'IPv4 Subnet Calculator',
    description: '192.168.1.40/24 has network 192.168.1.0, broadcast 192.168.1.255, and 254 usable hosts.',
    intro: [
      'This page does IPv4 prefix arithmetic. The sample address is 192.168.1.40 with prefix 24. The mask is 255.255.255.0, the network is 192.168.1.0, and the broadcast is 192.168.1.255. The block holds 256 addresses. For an ordinary prefix the first is the network and the last is the broadcast, so usable hosts are 254.',
      'A /31 is the exception in RFC 3021. 192.168.1.40/31 has mask 255.255.255.254, broadcast 192.168.1.41, and two addresses. Both are usable. Nothing is reserved for network and broadcast on that point-to-point rule. A /32 is one address. 192.168.1.40/32 has mask 255.255.255.255, broadcast equal to the address itself, and 1 usable address. There is no separate network and broadcast in the usual host sense.',
      'The page is IPv4 only. It does not know a router, a VLAN, or an IPv6 prefix. Each of the four numbers has to be a whole number from 0 to 255. The prefix is a whole number from 0 to 32. A /16 of the same address is network 192.168.0.0, mask 255.255.0.0, broadcast 192.168.255.255, 65,536 addresses, and 65,534 usable.'
    ],
    steps: [
      'Enter four decimal octets separated by dots. The sample is 192.168.1.40.',
      'Enter the prefix length from 0 to 32. The sample is 24.',
      'Press Calculate. The headline is the network address with the prefix.',
      'Read the mask, the broadcast, the block size, and the usable count. Check the note if the prefix is 31 or 32.'
    ],
    howHeading: 'How an IPv4 prefix is split',
    howItWorks: [
      'The address is turned into a 32-bit integer. The mask is 32 ones shifted left by (32 − prefix), or zero when the prefix is 0. The network is the address AND the mask. The broadcast is the network OR the inverted mask. The block size is 2 raised to (32 − prefix).',
      'For every prefix other than 31 and 32, usable hosts are the block size minus 2. The page’s note says the first address is the network and the last is the broadcast. At /24 that is 256 − 2 = 254. At /16 it is 65,536 − 2 = 65,534. The address you typed is reported back so you can see that it sits in the block. 192.168.1.40 sits in 192.168.1.0/24 and also in 192.168.0.0/16.',
      '/31 sets usable to 2 and cites RFC 3021: both addresses are used on a point-to-point link, so the page does not reserve one for network and one for broadcast. /32 sets usable to 1. The headline for /32 is the address itself with /32. The arithmetic does not consult a routing table.'
    ],
    formula: 'Mask: 32 one-bits, shifted left by (32 − prefix); prefix 0 uses mask 0\nNetwork = address AND mask\nBroadcast = network OR (NOT mask)\nBlock size = 2^(32 − prefix)\nUsable = 1 when prefix is 32\nUsable = 2 when prefix is 31 (RFC 3021, both addresses usable)\nOtherwise usable = block size − 2\nIPv4 only. Each octet is an integer from 0 to 255. Prefix is an integer from 0 to 32.',
    formulaNotes: [
      '192.168.1.40/24 lands on network 192.168.1.0, mask 255.255.255.0, broadcast 192.168.1.255, 256 addresses, 254 usable.',
      'The same address at /31 is 192.168.1.40/31, mask 255.255.255.254, broadcast 192.168.1.41, 2 usable. At /32 the network, the broadcast, and the usable address are all 192.168.1.40, and the usable count is 1.'
    ],
    examplesHeading: 'Worked IPv4 prefixes',
    samples: [
      { title: '192.168.1.40/24', overrides: {}, blurb: 'An ordinary 256-address block. Network 192.168.1.0, mask 255.255.255.0, broadcast 192.168.1.255, 254 usable hosts. The typed address sits in the block.' },
      { title: '192.168.1.40/31', overrides: { prefix: 31 }, blurb: 'RFC 3021. Two addresses, 192.168.1.40 and 192.168.1.41, and both are usable. The mask is 255.255.255.254. The page does not reserve a network or a broadcast on a /31.' },
      { title: '192.168.1.40/32', overrides: { prefix: 32 }, blurb: 'A single address. The mask is 255.255.255.255, the broadcast equals the address, and the usable count is 1. There is no separate host range.' }
    ],
    table: {
      heading: 'Network headlines for one address',
      caption: 'The headline is the network with the prefix. Usable counts are 254, 2, and 1 for these three prefixes.',
      headers: ['Prefix', 'Network']
    },
    limitsHeading: 'What this subnet page does not know',
    limits: [
      'It is IPv4 arithmetic only. It does not parse an IPv6 address, a router, or a VLAN.',
      '/31 follows RFC 3021 and counts both addresses as usable. A calculator that always subtracts 2 would disagree on that prefix, and on /32. This page does not subtract 2 in those two cases.',
      'Octets have to be whole numbers from 0 to 255, four of them, separated by dots. The prefix has to be a whole number from 0 to 32. A host name is not looked up.',
      'The usable count is an addressing rule, not a statement about how many devices answer ping or how a DHCP pool is configured.'
    ],
    disclaimer: 'This is IPv4 network, mask, broadcast, and usable-host arithmetic, with RFC 3021 for /31 and a single address for /32. It is not a network scan.',
    faqs: [
      { q: 'What is the network, broadcast, and usable count for 192.168.1.40/24?', a: 'Network 192.168.1.0, mask 255.255.255.0, broadcast 192.168.1.255. The block has 256 addresses and 254 usable hosts, because the first and last are reserved as network and broadcast.' },
      { q: 'How does this page treat a /31?', a: 'RFC 3021. 192.168.1.40/31 has two addresses, mask 255.255.255.254, and broadcast 192.168.1.41. Both addresses are usable. The page does not reserve one for the network and one for the broadcast.' },
      { q: 'What is 192.168.1.40/32?', a: 'A single address. The mask is 255.255.255.255, the broadcast is 192.168.1.40, and the usable count is 1. There is no separate network and broadcast in the usual host sense.' },
      { q: 'How many usable hosts are in 192.168.1.40/16?', a: '65,534. The network is 192.168.0.0, the mask is 255.255.0.0, the broadcast is 192.168.255.255, and the block size is 65,536. Ordinary prefixes subtract 2. /31 and /32 do not.' },
      { q: 'Does the subnet calculator understand IPv6?', a: 'No. It is IPv4 only. It also does not know a router or a VLAN. Each octet must be a whole number from 0 to 255, and the prefix must be a whole number from 0 to 32.' }
    ],
    relatedLinks: [
      { slug: 'bandwidth-calculator', label: 'Bandwidth and download time calculator', note: '100 decimal MB at 100 Mbit/s is 8 seconds. A transfer time is not a subnet mask.' },
      { slug: 'password-generator', label: 'Password generator', note: 'A 12-character password from 62 symbols has 71.45 bits of entropy. It is not an IPv4 address.' },
      { slug: 'unit-converter', label: 'Unit converter', note: 'Converts length, temperature, area, volume, mass, and time. An IPv4 prefix is none of those six dimensions.' }
    ]
  }),

  'bandwidth-calculator': page({
    slug: 'bandwidth-calculator',
    title: 'Bandwidth and Download Time Calculator | ClearCalc',
    h1: 'Bandwidth and Download Time Calculator',
    description: '100 decimal megabytes at 100 Mbit/s takes 8 seconds. A megabit is a million bits, not a million bytes.',
    intro: [
      'Download time here is file size in bits divided by speed in bits per second. One hundred decimal megabytes is 100 × 1,000 × 1,000 = 100,000,000 bytes, which is 800,000,000 bits. One hundred megabits per second is 100 × 1,000 × 1,000 = 100,000,000 bits per second. 800,000,000 / 100,000,000 = 8 seconds exactly. The headline is 8 seconds.',
      'KB, MB, and GB on this page are powers of 1,000. KiB, MiB, and GiB are powers of 1,024. One hundred mebibytes is 104,857,600 bytes, 838,860,800 bits, and 8.3886 seconds at 100 Mbit/s. That rounds to the same 8 second headline. A clearer split is 1,000 MiB, which is 1,048,576,000 bytes and 83.8861 seconds, shown as 1 minute 24 seconds. One thousand decimal megabytes at the same speed is 80 seconds, shown as 1 minute 20 seconds.',
      'A byte-per-second choice is multiplied by 8 to reach bits. One decimal megabyte at 1,000,000 bytes per second is 8,000,000 bits over 8,000,000 bits per second, which is 1 second. The same megabyte at 1 Mbit/s is 8 seconds. The page assumes the transfer holds that speed with no protocol overhead. A real download is often slower. Megabits are bits, not bytes.'
    ],
    steps: [
      'Enter the file size and choose bytes, decimal KB, MB, or GB, or binary KiB, MiB, or GiB. The sample is 100 decimal MB.',
      'Enter the speed and choose bits per second, kilobits, megabits, gigabits, or bytes per second. The sample is 100 megabits per second.',
      'Press Calculate. The headline is the time, rounded to the nearest second.',
      'Read the byte count, the bit count, and the unrounded seconds before you compare a decimal MB with a MiB.'
    ],
    howHeading: 'How file size and link speed become a time',
    howItWorks: [
      'Decimal steps are 1,000, 1,000,000, and 1,000,000,000 bytes for KB, MB, and GB. Binary steps are 1,024, 1,024², and 1,024³ for KiB, MiB, and GiB. Bytes are multiplied by 8 to make bits. Speeds in bits, kilobits, megabits, and gigabits use 1, 1,000, 1,000,000, and 1,000,000,000 bits per second for each unit you typed. A bytes-per-second speed is multiplied by 8.',
      'Seconds are bits divided by bits per second. The detail line keeps the unrounded seconds. The headline passes the nearest second through a duration formatter, so 8 stays “8 seconds”, 80 becomes “1 minute 20 seconds”, and 84 becomes “1 minute 24 seconds”. 1,000 MiB at 100 Mbit/s is 83.8861 seconds and headlines as 1 minute 24 seconds.',
      'The 8 in the sample is the byte-to-bit factor, not a coincidence of the two 100s. One hundred megabytes is 800 megabits, and 800 megabits at 100 megabits per second is 8 seconds. Calling the file 100 megabits would be a different transfer, one second at 100 Mbit/s, and that is not what the MB menu means.'
    ],
    formula: 'Decimal: KB = 1000 bytes, MB = 1000² bytes, GB = 1000³ bytes\nBinary: KiB = 1024 bytes, MiB = 1024² bytes, GiB = 1024³ bytes\nBits = bytes × 8\nSpeed: bit/s × 1, kbit/s × 1000, Mbit/s × 1000², Gbit/s × 1000³\nA bytes-per-second speed is multiplied by 8\nSeconds = bits / bits per second\nThe headline rounds to the nearest second\nNo protocol overhead is included',
    formulaNotes: [
      '100 × 1,000,000 bytes × 8 / 100,000,000 bit/s = 8 seconds. 100 MiB is 104,857,600 bytes and 8.3886 seconds, which still rounds to 8 seconds.',
      '1,000 decimal MB at 100 Mbit/s is 80 seconds, shown as 1 minute 20 seconds. 1,000 MiB is 83.8861 seconds, shown as 1 minute 24 seconds. One decimal MB at 1,000,000 bytes per second is 1 second, because the byte rate is multiplied by 8.'
    ],
    examplesHeading: 'Worked download times',
    samples: [
      { title: '100 decimal MB at 100 Mbit/s', overrides: {}, blurb: '100,000,000 bytes is 800,000,000 bits. The speed is 100,000,000 bits per second. Unrounded seconds are 8, and the headline is 8 seconds. The megabit menu means bits, not bytes.' },
      { title: '1,000 MiB at 100 Mbit/s', overrides: { size: 1000, sizeunit: 6 }, blurb: 'A mebibyte is 1,024² bytes, so 1,000 MiB is 1,048,576,000 bytes and 8,388,608,000 bits. Unrounded time is 83.8861 seconds. The headline rounds to 1 minute 24 seconds.' },
      { title: '1 decimal MB at 1,000,000 bytes per second', overrides: { size: 1, speed: 1000000, speedunit: 5 }, blurb: 'The size is 1,000,000 bytes, 8,000,000 bits. The byte speed is multiplied by 8, so the link is also 8,000,000 bits per second. The headline is 1 second. The same megabyte at 1 Mbit/s would be 8 seconds.' }
    ],
    table: {
      heading: 'Transfer times',
      caption: 'The headline is rounded to the nearest second. Decimal MB uses powers of 1,000. MiB uses powers of 1,024.',
      headers: ['Transfer', 'Time']
    },
    limitsHeading: 'What this bandwidth page leaves out',
    limits: [
      'KB, MB, and GB are decimal. KiB, MiB, and GiB are binary. One hundred MiB at 100 Mbit/s is 8.3886 seconds and still headlines as 8 seconds, so the unit only shows up in the byte line until the file is large enough to move the rounded second.',
      'Megabits per second are decimal millions of bits. They are not megabytes. The factor of 8 is applied to the file, and again if you chose a byte-per-second speed.',
      'The time assumes the transfer holds the speed you typed, with no protocol overhead, no handshake, and no slower link in the path. A real download is often slower.',
      'The headline rounds to the nearest second. A fraction under half a second disappears into the duration line. The unrounded seconds remain in the details.'
    ],
    disclaimer: 'This divides a file’s bits by a constant bit rate. Decimal sizes are powers of 1,000 and binary sizes are powers of 1,024. It does not model protocol overhead.',
    faqs: [
      { q: 'Why is 100 MB at 100 Mbit/s equal to 8 seconds?', a: 'Decimal MB is 1,000,000 bytes, so 100 MB is 100,000,000 bytes and 800,000,000 bits. 100 Mbit/s is 100,000,000 bits per second. The quotient is 8 seconds. A megabit is a million bits, not a million bytes.' },
      { q: 'What is the difference between 1,000 MB and 1,000 MiB at 100 Mbit/s?', a: '1,000 decimal MB is 80 seconds, shown as 1 minute 20 seconds. 1,000 MiB is 1,048,576,000 bytes and 83.8861 seconds, shown as 1 minute 24 seconds. MiB uses 1,024² bytes. MB uses 1,000² bytes.' },
      { q: 'Why is 1 MB at 1,000,000 bytes per second only 1 second?', a: 'A byte-per-second speed is multiplied by 8. One decimal megabyte is 8,000,000 bits, and 1,000,000 bytes per second is also 8,000,000 bits per second. The same file at 1 Mbit/s takes 8 seconds.' },
      { q: 'Does 100 MiB at 100 Mbit/s show a different headline from 100 MB?', a: 'Not after rounding. 100 MiB is 104,857,600 bytes and 8.3886 seconds, and the headline is still 8 seconds. The byte line is where the 1,024 factor shows up at that size.' }
    ],
    relatedLinks: [
      { slug: 'ipv4-subnet-calculator', label: 'IPv4 subnet calculator', note: '192.168.1.40/24 has 254 usable hosts. An address prefix does not time a download.' },
      { slug: 'unit-converter', label: 'Unit converter', note: 'Length, temperature, area, volume, mass, and time. It does not convert megabits to megabytes or time a file.' },
      { slug: 'speed-converter', label: 'Speed converter', note: 'Miles per hour, kilometres per hour, metres per second, and knots. A road speed is not a bit rate.' }
    ]
  }),

  'unit-converter': page({
    slug: 'unit-converter',
    title: 'Unit Converter | ClearCalc',
    h1: 'Unit Converter',
    description: '1 inch is 2.54 centimetres, from the exact definition 1 inch = 0.0254 metres.',
    intro: [
      'This converter covers six dimensions: length, temperature, area, volume, mass, and time. The sample is 1 inch to centimetres. An inch is exactly 0.0254 metres and a centimetre is 0.01 metres, so 1 inch is 2.54 centimetres. The headline reads 2.54 centimetre, using the unit name from the table.',
      'Temperature is affine, not a ratio. Zero Celsius is 32 Fahrenheit and 273.15 kelvin. The page converts through Celsius: Fahrenheit to Celsius is (F − 32) × 5/9, and Celsius to Fahrenheit is C × 9/5 + 32. Kelvin is Celsius plus 273.15. A difference of one degree Celsius is 1.8 degrees Fahrenheit, which is not the same operation as converting a temperature reading. A result below absolute zero, Celsius under −273.15, is rejected.',
      'Mismatched dimensions are an error. An inch measures length and a kilogram measures mass, and the page says so rather than returning a number. A month is not a time unit, because a month does not have one length. A speed is not a length. Dedicated length, weight, temperature, and speed pages still exist. This page is the six-dimension set.'
    ],
    steps: [
      'Enter the value. The sample is 1.',
      'Choose the unit you have. The sample is the inch.',
      'Choose the unit you want, in the same dimension. The sample is the centimetre.',
      'Press Calculate. For a temperature, use Celsius, Fahrenheit, or kelvin. Do not pick a month. There is no month in the list.'
    ],
    howHeading: 'How the six dimensions are converted',
    howItWorks: [
      'Length factors, all in metres, are metre 1, kilometre 1,000, centimetre 0.01, millimetre 0.001, inch 0.0254, foot 0.3048, yard 0.9144, and mile 1,609.344. The output is the value times the source factor divided by the target factor. One inch times 0.0254 / 0.01 is 2.54 centimetres. One mile is 1,609.344 metres by the same rule.',
      'Area factors, in square metres, are square metre 1, square kilometre 1,000,000, square foot 0.3048², square inch 0.0254², acre 4,046.8564224, and hectare 10,000. Volume factors, in cubic metres, are litre 0.001, millilitre 0.000001, cubic metre 1, cubic foot 0.028316846592, US gallon 0.003785411784, and UK gallon 0.00454609. Mass factors, in kilograms, are kilogram 1, gram 0.001, pound 0.45359237, ounce 0.028349523125, and stone 6.35029318. Time factors, in seconds, are second 1, minute 60, hour 3,600, day 86,400, and week 604,800. One week is 7 days. There is no month.',
      'Temperature does not use those ratios. The page converts the source to Celsius, rejects a Celsius value below −273.15, and converts from Celsius to the target. Zero Celsius is 32 fahrenheit and 273.15 kelvin on this form. One pound is 0.45359237 kilogram. One US gallon is 3.785411784 litres, shown on the headline to eight significant figures as 3.78541178 litre when you ask for that pair, with the exact factor repeated on the detail line.'
    ],
    formula: 'Non-temperature: result = value × (source factor) / (target factor)\nInch = 0.0254 m exactly, so 1 inch = 2.54 cm\nFoot = 0.3048 m, yard = 0.9144 m, mile = 1609.344 m\nPound = 0.45359237 kg, ounce = 0.028349523125 kg, stone = 6.35029318 kg\nUS gallon = 0.003785411784 m³, UK gallon = 0.00454609 m³\nAcre = 4046.8564224 m², hectare = 10000 m²\nTemperature: convert through Celsius\n°F to °C = (°F − 32) × 5/9\n°C to °F = °C × 9/5 + 32\nK = °C + 273.15\n0°C = 32°F = 273.15 K\nBelow −273.15°C is rejected\nDifferent dimensions are an error\nA month is not a unit',
    formulaNotes: [
      '1 × 0.0254 / 0.01 = 2.54. The headline is 2.54 centimetre. Zero Celsius to Fahrenheit is 32 fahrenheit. Zero Celsius to kelvin is 273.15 kelvin.',
      'A one-degree Celsius interval is 1.8 Fahrenheit degrees, and that is not what the converter does with a reading. Converting 1°C as a temperature gives 33.8°F, because the 32 degree offset is part of the affine formula. The page will not convert an inch into a kilogram.'
    ],
    examplesHeading: 'Worked unit conversions',
    samples: [
      { title: '1 inch to centimetres', overrides: {}, blurb: 'The inch is exactly 0.0254 metres. Dividing by 0.01 metres per centimetre gives 2.54. The headline is 2.54 centimetre.' },
      { title: '0°C to Fahrenheit', overrides: { value: 0, from: 9, to: 10 }, blurb: 'Temperature is affine. Zero Celsius is 32 Fahrenheit. The headline is 32 fahrenheit. A one-degree step is not this conversion. The offset of 32 is included.' },
      { title: '0°C to kelvin', overrides: { value: 0, from: 9, to: 11 }, blurb: 'Kelvin is Celsius plus 273.15. The headline is 273.15 kelvin. The same zero Celsius point is 32°F and 273.15 K.' }
    ],
    table: {
      heading: 'Sample conversions',
      caption: 'The inch row is a ratio. The other two rows are the affine temperature conversions of 0°C.',
      headers: ['Conversion', 'Headline']
    },
    limitsHeading: 'What this unit converter refuses',
    limits: [
      'Two units of different dimensions are an error. The message names both units and both dimensions. An inch cannot become a kilogram.',
      'A month is not in the time list. A week is 604,800 seconds, which is 7 days. A month does not have one length, so it is not offered.',
      'Temperature below absolute zero is rejected. The check is Celsius under −273.15 after the source has been converted.',
      'Length, weight, temperature, and speed still have their own pages. This page does not convert a speed, because a speed is not one of the six dimensions. The speed converter is the page for mph and km/h.'
    ],
    disclaimer: 'Conversions use the exact international factors on this page, including the inch of 0.0254 m and the affine Celsius, Fahrenheit, and kelvin relations. A month is not a unit here.',
    faqs: [
      { q: 'Why is 1 inch exactly 2.54 centimetres?', a: 'The inch on this page is 0.0254 metres and the centimetre is 0.01 metres. 0.0254 / 0.01 = 2.54. The headline is 2.54 centimetre. The factor is exact, not a rounded 2.54 from a longer expansion.' },
      { q: 'What is 0°C in Fahrenheit and in kelvin?', a: '32 Fahrenheit and 273.15 kelvin. Fahrenheit is C × 9/5 + 32. Kelvin is C + 273.15. Temperature is affine. A difference of one degree Celsius is 1.8 degrees Fahrenheit, which is a different question from converting the reading 1°C.' },
      { q: 'Which six dimensions does the unit converter include?', a: 'Length, temperature, area, volume, mass, and time. Area includes the acre at 4,046.8564224 m² and the hectare at 10,000 m². Mass includes the pound at 0.45359237 kg. Time stops at the week. There is no month.' },
      { q: 'What happens if I convert an inch to a kilogram?', a: 'The page rejects it. An inch measures length and a kilogram measures mass. The two units have to share a dimension. A speed is not a length either, and a month is not a time unit on this form.' },
      { q: 'Does this page replace the length, weight, and temperature converters?', a: 'No. Those dedicated pages still exist, and so does the speed converter. This page is the six-dimension set with the exact factors, including 0.0254 m per inch and 0.45359237 kg per pound.' }
    ],
    relatedLinks: [
      { slug: 'length-converter', label: 'Length converter', note: 'A dedicated length page starting from metres. This converter also does area, volume, mass, time, and temperature.' },
      { slug: 'weight-converter', label: 'Weight converter', note: 'Kilograms, pounds, and stone. One pound here is 0.45359237 kg, the same international pound.' },
      { slug: 'celsius-to-fahrenheit-calculator', label: 'Celsius to Fahrenheit calculator', note: 'A temperature-only page. Zero Celsius is 32 Fahrenheit here as well, because both use the affine formula.' }
    ]
  }),

  'payback-period-calculator': page({
    slug: 'payback-period-calculator',
    title: 'Payback Period Calculator | ClearCalc',
    h1: 'Payback Period Calculator',
    description: 'A $10,000 cost and a $2,500 yearly benefit pay back in 4 years when the discount rate is 0%.',
    intro: [
      'Simple payback is the upfront cost divided by a constant yearly benefit. Ten thousand dollars divided by $2,500 a year is 4 years. At a discount rate of 0% the discounted payback is the same 4 years, because discounting by zero does not change the benefit.',
      'A rate above zero discounts each benefit as if it arrives at the end of the year. The page adds benefit / (1 + r)^year until the sum covers the cost, then adds the fraction of that year still needed. At 10%, the $10,000 cost and $2,500 benefit take 5.3706 years, and the discounted benefits first cover the cost during year 6. At 5% the headline is 4.5795 years, and the cover happens during year 5. Simple payback stays 4 years in both cases. The discount rate is what moved the headline.',
      'There is no separate inflation line. The benefit does not grow. There is no salvage value. This is not a net present value of a project with a terminal value, and it is not an internal rate of return. If the discounted sum is still short after 500 years, the headline says there is no payback within 500 years and shows the simple payback beside that statement. A yearly benefit of zero or less is rejected, because a zero benefit never pays the cost back.'
    ],
    steps: [
      'Enter the upfront cost. The sample is 10,000.',
      'Enter the constant yearly benefit. The sample is 2,500. It has to be above zero.',
      'Enter the discount rate in percent. The sample is 0.',
      'Press Calculate. At 0% the headline is the simple ratio. Above 0%, read both the simple line and the discounted headline.'
    ],
    howHeading: 'How simple payback and discounted payback are counted',
    howItWorks: [
      'Simple payback is cost / benefit, with no reference to the rate. The sample is 10,000 / 2,500 = 4. When the rate is 0, the page stops there and says the two methods match. Benefits are described as constant every year, and as end-of-year receipts in the discounted case.',
      'When the rate is positive, r is the rate divided by 100. Year 1 contributes benefit / (1 + r), year 2 contributes benefit / (1 + r)², and so on. The loop stops in the year the running sum reaches the cost, or at 500 years. The fraction of the last year is (cost − previous sum) / that year’s discounted benefit. The headline is (year − 1) + that fraction.',
      'At 10%, the cover happens during year 6 and the fraction makes the headline 5.3706 years. At 5%, the cover happens during year 5 and the headline is 4.5795 years. The simple line remains 4 years either way. The page does not solve for the rate that would make net present value zero. That would be an internal rate of return, and this form does not compute one.'
    ],
    formula: 'Simple payback = cost / yearly benefit\nIf the discount rate is 0, discounted payback = simple payback\nOtherwise r = rate / 100\nAdd benefit / (1 + r)^year at the end of each year\nStop in the year the sum reaches the cost, or at 500 years\nHeadline = (year − 1) + (cost − previous sum) / that year’s discounted benefit\nThe benefit is constant\nA benefit of zero or less is rejected\nThis is not an internal rate of return',
    formulaNotes: [
      '$10,000 / $2,500 = 4 years at 0%. The result says discounted payback matches simple payback because the rate is zero.',
      'At 10% the headline is 5.3706 years and the cost is first covered during year 6. At 5% the headline is 4.5795 years and the cover is during year 5. Simple payback stays 4 years in both rows.'
    ],
    examplesHeading: 'Worked payback examples',
    samples: [
      { title: '$10,000 and $2,500 at 0%', overrides: {}, blurb: 'Simple division. The headline is 4 years. Discounted payback matches it because a zero rate does not shrink the end-of-year benefits.' },
      { title: 'The same cash flows at 10%', overrides: { rate: 10 }, blurb: 'Simple payback is still 4 years. Discounted benefits first cover the $10,000 during year 6, and the fractional year makes the headline 5.3706 years.' },
      { title: 'The same cash flows at 5%', overrides: { rate: 5 }, blurb: 'Simple payback is again 4 years. The discounted cover happens during year 5, and the headline is 4.5795 years. The benefit is still the constant $2,500, received at the end of each year.' }
    ],
    table: {
      heading: 'Payback at three discount rates',
      caption: 'The cash flows stay at $10,000 and $2,500. Only the discount rate changes. Simple payback is 4 years in every row.',
      headers: ['Discount rate', 'Headline']
    },
    limitsHeading: 'What this payback page does not compute',
    limits: [
      'It is not an internal rate of return. The rate is an input. The page does not search for the discount rate that sets a net present value to zero.',
      'It is not a project NPV with a salvage value. The cost is a single upfront amount and the benefit is a constant yearly figure. Nothing is added at the end.',
      'Benefits are end-of-year when the rate is positive, and they do not change with inflation unless you have already folded that into the rate or the benefit you typed.',
      'The search stops at 500 years. If the discounted benefits are still short, the headline says there is no payback within 500 years and shows what the simple payback would have been. A benefit of zero never pays the cost back and is rejected.'
    ],
    disclaimer: 'Payback here is a cost divided by a constant yearly benefit, with optional end-of-year discounting. It is not an internal rate of return and it has no salvage value.',
    faqs: [
      { q: 'How long is the payback on a $10,000 cost and a $2,500 yearly benefit at 0%?', a: '4 years. That is 10,000 / 2,500. At a zero discount rate, discounted payback matches simple payback. The benefit is constant, and in the discounted case it is treated as an end-of-year receipt.' },
      { q: 'What does a 10% discount rate do to that 4 year payback?', a: 'Simple payback stays 4 years. The discounted headline becomes 5.3706 years. The discounted benefits first cover the cost during year 6, and the headline includes the fraction of that year.' },
      { q: 'What is the discounted payback of the same example at 5%?', a: '4.5795 years. The cost is first covered during year 5. Simple payback on the detail line is still 4 years, because simple payback ignores the rate.' },
      { q: 'Is payback the same as an internal rate of return?', a: 'No. This page takes the discount rate as an input and counts years. It does not solve for a rate. It also does not add a salvage value or a changing benefit.' },
      { q: 'What if the discounted benefits never cover the cost?', a: 'The loop stops at 500 years. The headline then says there is no payback within 500 years, shows the simple payback, and shows the discounted sum still outstanding. A yearly benefit of zero is rejected before that loop, because it cannot pay the cost back.' }
    ],
    relatedLinks: [
      { slug: 'roi-calculator', label: 'ROI calculator', note: 'ROI is (final value − cost) / cost. A move from 100 to 200 is 100% over the whole span. It is not a year count.' },
      { slug: 'simple-interest-calculator', label: 'Simple interest calculator', note: 'Interest is principal times rate times time, with no compounding. Payback does not compute interest. It counts years until a benefit covers a cost.' },
      { slug: 'depreciation-calculator', label: 'Depreciation calculator', note: 'Straight line on $1,000 down to $100 over 5 years is $180.00 a year. That is an accounting schedule, not a payback.' }
    ]
  }),

  'depreciation-calculator': page({
    slug: 'depreciation-calculator',
    title: 'Depreciation Calculator | ClearCalc',
    h1: 'Depreciation Calculator',
    description: 'Straight-line depreciation of a $1,000 cost to a $100 salvage over 5 years is $180.00 per year.',
    intro: [
      'Straight line spreads the depreciable amount in equal charges. The sample cost is $1,000, the salvage value is $100, and the life is 5 years. (1,000 − 100) / 5 = 180, so the headline is $180.00 per year. Book value runs $820.00, $640.00, $460.00, $280.00, and $100.00. The last book value is the salvage value. The schedule is an accounting pattern, not a market price.',
      'Double declining balance uses twice the straight-line rate on the remaining book value, and it will not go below salvage. For 5 years the rate is 2/5 = 40%. The charges on the sample are $400.00, $240.00, $144.00, $86.40, and then $29.60. The fifth charge is shortened because 40% of the $129.60 book would push the book under $100. The ending book value is $100.00. There is no half-year convention, and there is no switch to straight line except for that salvage cap on the last charge.',
      'This is not a tax form. Tax depreciation systems are more specific than these two patterns. Years must be a whole number from 1 to 40. Salvage cannot exceed cost. A salvage equal to cost produces a zero straight-line charge. The page does not look up a recovery class or a placed-in-service month.'
    ],
    steps: [
      'Enter the cost and the salvage value. The sample is 1,000 and 100. Salvage cannot exceed cost.',
      'Enter the years, a whole number from 1 to 40. The sample is 5.',
      'Choose straight line or double declining balance.',
      'Press Calculate. Straight line headlines the yearly amount. Double declining headlines the percent of the declining book. The year lines show the charge and the book value.'
    ],
    howHeading: 'How straight line and double declining balance are scheduled',
    howItWorks: [
      'Straight-line annual depreciation is (cost − salvage) / years. Each year subtracts that same amount from the book, starting at cost. After the last year the book equals the salvage value, aside from the ordinary rounding of currency display. The sample subtracts $180.00 five times: 1,000 − 5 × 180 = 100.',
      'Double declining balance sets the rate to 2 / years. Each year the unconstrained charge is the current book times that rate. If book minus that charge would fall below salvage, the charge is cut to book minus salvage. Later years can then be zero. With a $700 salvage on the $1,000, 5 year asset, the first unconstrained charge would be $400, but that would leave a $600 book, under $700. The charge becomes $300, the book becomes $700, and years 2 through 5 are $0.00.',
      'On the default $100 salvage the cap waits until year 5. Year 4 ends at $129.60. Forty percent of that is $51.84, and $129.60 − $51.84 = $77.76, which is below $100. The page therefore charges $29.60 and stops at $100. It does not switch the earlier years to straight line. The result says there is no half-year convention.'
    ],
    formula: 'Straight line: annual = (cost − salvage) / years\nBook starts at cost and falls by that annual amount each year\nDouble declining rate = 2 / years\nUnconstrained charge = current book × rate\nIf book − charge would be below salvage, charge = book − salvage\nYears are a whole number from 1 to 40\nSalvage cannot exceed cost\nNo half-year convention\nNo switch to straight line except the salvage cap shortening a charge',
    formulaNotes: [
      '(1,000 − 100) / 5 = 180. The five book values are $820.00, $640.00, $460.00, $280.00, and $100.00.',
      'The 40% double-declining charges are $400.00, $240.00, $144.00, $86.40, and $29.60. A $700 salvage on the same cost and life charges $300.00 in year 1 and $0.00 after that, because the book is not allowed to fall below salvage.'
    ],
    examplesHeading: 'Worked depreciation schedules',
    samples: [
      { title: 'Straight line, $1,000 to $100 in 5 years', overrides: {}, blurb: 'The depreciable amount is $900. Divided by 5, the headline is $180.00 per year. Book value lands on the $100 salvage at the end of year 5.' },
      { title: 'Double declining, same cost and salvage', overrides: { method: 2 }, blurb: 'The rate is 2/5 = 40% of the remaining book. Charges are $400.00, $240.00, $144.00, $86.40, and a capped $29.60. Ending book value is $100.00. There is no half-year convention.' },
      { title: 'Double declining with a $700 salvage', overrides: { method: 2, salvage: 700 }, blurb: 'The unconstrained first charge of $400 would leave the book at $600, below the $700 salvage. The page charges $300 in year 1 and $0 after that. The book stays at $700.' }
    ],
    table: {
      heading: 'Depreciation headlines',
      caption: 'Straight line headlines a dollar amount per year. Double declining headlines the percent of the declining book. Year-by-year charges are in the detail lines.',
      headers: ['Method', 'Headline']
    },
    limitsHeading: 'What this depreciation schedule is not',
    limits: [
      'It is not a tax form. There is no half-year convention, no mid-quarter convention, and no recovery-period table. The result says tax depreciation systems are more specific than this.',
      'Double declining balance does not switch to straight line on its own. The only shortening is the salvage cap, which cuts a charge so the book does not fall below salvage.',
      'The book value is an accounting pattern, not a market price. The page does not know what the asset would sell for.',
      'Salvage cannot exceed cost. Years must be a whole number from 1 to 40. A life of 5.5 years is rejected. The schedule shows the first six years in the detail list and summarizes the rest when the life is longer.'
    ],
    disclaimer: 'This is straight-line or double-declining-balance arithmetic down to a salvage value you type. It is not a tax return and it has no half-year convention.',
    faqs: [
      { q: 'How is straight-line depreciation of $1,000 to $100 over 5 years calculated?', a: '(1,000 − 100) / 5 = $180.00 per year. The book values are $820.00, $640.00, $460.00, $280.00, and $100.00. The last book value is the salvage value.' },
      { q: 'What does double declining balance do to that same asset?', a: 'The rate is 2/5 = 40% of the remaining book. The charges are $400.00, $240.00, $144.00, $86.40, and $29.60. The last charge is cut so the book does not go below the $100 salvage. Ending book value is $100.00.' },
      { q: 'Will double declining balance fall below the salvage value?', a: 'No. If the full rate would push the book under salvage, the charge is reduced to the gap between book and salvage. With a $700 salvage, year 1 is $300.00 and the later years are $0.00.' },
      { q: 'Does this depreciation page use a half-year convention?', a: 'No. There is no half-year convention and no automatic switch from double declining balance to straight line. The salvage cap is the only reason a charge is shorter than the declining-balance rate.' },
      { q: 'Is this a tax depreciation form?', a: 'No. It is an accounting pattern for two methods. It does not look up a tax recovery class, a convention, or a placed-in-service date. Years are a whole number from 1 to 40, and salvage cannot exceed cost.' }
    ],
    relatedLinks: [
      { slug: 'payback-period-calculator', label: 'Payback period calculator', note: '$10,000 recovered by $2,500 a year is 4 years at 0%. That counts years to recover a cost. It does not schedule book value.' },
      { slug: 'cagr-calculator', label: 'CAGR calculator', note: 'From 100 to 200 in 10 years is 7.1773% per year. A growth rate between two values is not a depreciation schedule.' },
      { slug: 'roi-calculator', label: 'ROI calculator', note: 'ROI is profit divided by cost. Depreciation here is a pattern of book-value charges, not a return.' }
    ]
  }),

  'cagr-calculator': page({
    slug: 'cagr-calculator',
    title: 'CAGR Calculator | ClearCalc',
    h1: 'CAGR Calculator',
    description: 'A value that grows from 100 to 200 in 10 years has a CAGR of 7.1773% per year.',
    intro: [
      'Compound annual growth rate is (ending value / starting value) raised to the power 1/years, minus 1. From 100 to 200 in 10 years, that is 2^(1/10) − 1, which this page shows as 7.1773% per year. The check line compounds $100.00 at that rate for 10 years and lands on $200.00.',
      'A decline is a negative rate. From 200 down to 100 in the same 10 years the headline is -6.6967% per year, and compounding $200.00 at that rate returns $100.00. From 100 to 150 in 5 years the headline is 8.4472% per year. Both values have to be positive. Zero is rejected. A loss is allowed only because the ending value is still positive and simply smaller than the start.',
      'This is the smooth annual rate between two points. It is not an internal rate of return of an uneven cash flow, because there are no deposits or withdrawals in the middle. It is not the simple ROI on the ROI calculator, which is profit divided by cost. A move from 100 to 200 is a 100% ROI over the whole span, (200 − 100) / 100, and a 7.1773% compound annual rate. Those are different questions. The ROI page does not raise a ratio to 1/years.'
    ],
    steps: [
      'Enter the starting value. It has to be above zero. The sample is 100.',
      'Enter the ending value, also above zero. The sample is 200.',
      'Enter the number of years, above zero. The sample is 10. It does not have to be a whole number.',
      'Press Calculate. The headline is the annual rate in percent, to four decimal places.'
    ],
    howHeading: 'How CAGR is calculated between two values',
    howItWorks: [
      'Divide the ending value by the starting value. Raise that ratio to the power of one divided by the years. Subtract 1. Multiply by 100 for the headline, which is fixed at four decimal places. The sample ratio is 2, the exponent is 0.1, and 2^0.1 − 1 is 0.071773, shown as 7.1773% per year.',
      'The check multiplies the start by (1 + rate)^years. For the sample that product is the $200.00 you typed, which is how you know the rate and the two endpoints describe the same compound path. The path itself is not stored. Two bumpy years that start at 100 and end at 200 still get this one rate. The page cannot see the bump.',
      'Simple ROI for the same endpoints is (end − start) / start × 100. From 100 to 200 that is 100%, not 7.1773%. ROI does not divide the time into years. CAGR does not know a middle cash flow, so it is not an IRR. A non-finite result is rejected. A zero start or a zero end is rejected because the ratio or the power would not be a usable growth rate on this page.'
    ],
    formula: 'CAGR = (ending / starting)^(1 / years) − 1\nHeadline = that rate × 100, shown to 4 decimal places\nCheck: starting × (1 + CAGR)^years = ending\nStarting and ending must be above zero\nYears must be above zero\nA smaller ending value produces a negative rate\nThis is not an internal rate of return\nThis is not ROI = (ending − starting) / starting',
    formulaNotes: [
      '(200 / 100)^(1/10) − 1 = 7.1773% per year. Compounding $100.00 at that rate for 10 years ends at $200.00.',
      'The reverse, 100 / 200 over 10 years, is -6.6967% per year. From 100 to 150 in 5 years is 8.4472% per year. The ROI of a doubling is 100% on the ROI page, which does not take the 10 years into the exponent.'
    ],
    examplesHeading: 'Worked CAGR examples',
    samples: [
      { title: '100 to 200 in 10 years', overrides: {}, blurb: 'The ratio is 2 and the exponent is 1/10. The headline is 7.1773% per year. The check compounds $100.00 back to $200.00.' },
      { title: '200 down to 100 in 10 years', overrides: { start: 200, end: 100 }, blurb: 'The ending value is below the start, so the rate is negative. The headline is -6.6967% per year. Both inputs are still positive. Zero would be rejected.' },
      { title: '100 to 150 in 5 years', overrides: { end: 150, years: 5 }, blurb: 'A shorter span and a smaller multiple. (150 / 100)^(1/5) − 1 is 8.4472% per year. The check ends at $150.00.' }
    ],
    table: {
      heading: 'CAGR headlines',
      caption: 'Each headline is the compound annual rate. The negative row is a decline between two positive values, not a zero.',
      headers: ['Span', 'CAGR']
    },
    limitsHeading: 'What CAGR does not represent',
    limits: [
      'It is not an internal rate of return. There is no schedule of deposits and withdrawals. Two numbers and a time are the whole problem.',
      'It is not simple ROI. ROI on a doubling is (200 − 100) / 100 = 100% for the whole span. CAGR splits that span into a yearly compound rate, 7.1773% for 10 years.',
      'A zero starting value or a zero ending value is rejected. A negative value is rejected. A loss has to be entered as a smaller positive ending value, which produces a negative rate.',
      'The rate is the constant annual rate that connects the endpoints. It does not describe the path between them, and it does not adjust for inflation unless you already used inflation-adjusted values.'
    ],
    disclaimer: 'CAGR here is (end / start)^(1 / years) − 1 between two positive values. It is not an internal rate of return and it is not simple ROI.',
    faqs: [
      { q: 'What is the CAGR from 100 to 200 in 10 years?', a: '7.1773% per year. That is (200 / 100)^(1/10) − 1. Compounding $100.00 annually at that rate for 10 years ends at $200.00.' },
      { q: 'Why is a doubling not a 100% CAGR?', a: 'A 100% figure is the simple ROI, (200 − 100) / 100, on the ROI calculator. CAGR spreads the same doubling over the years you type. Over 10 years the compound annual rate is 7.1773%, not 100%.' },
      { q: 'What CAGR does the page give for a fall from 200 to 100 in 10 years?', a: '-6.6967% per year. The ending value is still positive, so the page accepts it and returns a negative rate. A zero ending value is rejected.' },
      { q: 'Is CAGR an internal rate of return?', a: 'No. IRR would need the dated cash flows in between. This page only sees a start, an end, and a number of years. From 100 to 150 in 5 years, with nothing else known, the headline is 8.4472% per year.' }
    ],
    relatedLinks: [
      { slug: 'roi-calculator', label: 'ROI calculator', note: 'ROI = (final value − cost) / cost. From 100 to 200 that is 100% for the whole span, not 7.1773% per year.' },
      { slug: 'compound-interest-calculator', label: 'Compound interest calculator', note: 'Projects a balance with a rate you type and optional monthly deposits. CAGR here solves for the rate between two balances you already know.' },
      { slug: 'simple-interest-calculator', label: 'Simple interest calculator', note: 'Principal times rate times time, with no compounding. CAGR is the compound rate, so the exponent is 1/years.' }
    ]
  }),

  'currency-converter': page({
    slug: 'currency-converter',
    title: 'Currency Converter | ClearCalc',
    h1: 'Currency Converter',
    description: '100 USD times a typed rate of 0.90 EUR per USD is €90.00. This page does not download a live rate.',
    intro: [
      'The conversion is the amount times the rate in the rate box. One hundred US dollars times 0.90 euros per dollar is €90.00. The detail line prints 100 × 0.9 = 90, because the formatter drops a trailing zero on the rate. The rate is how many units of the target currency you get for 1 unit of the source currency. It is the number you type. This site does not publish it and does not download it.',
      'A public fixing such as a European Central Bank reference rate can be typed here together with the date you checked. A number left over from an earlier visit is not today’s rate. The page has no clock and no feed. It will multiply whatever is in the box, including a stale one, and the result line says so.',
      'No fee, spread, or card markup is subtracted. A bank will not match a mid-market rate you type. If the source and the target are the same currency, the amount is unchanged and the rate box is ignored. One hundred dollars with the target still set to dollars is $100.00 even if the rate box says 1.5. Yen are shown with no decimal subunit. One hundred dollars at a typed 150 yen per dollar is ¥15,000. The other currencies on the form, the pound, Canadian dollar, Australian dollar, Swiss franc, rupee, and peso, use two decimal places. The labels do not supply a rate.'
    ],
    steps: [
      'Enter the amount. The sample is 100. Zero is allowed. A negative amount is not.',
      'Choose the source currency and the target currency. The sample is US dollars to euros.',
      'Type the target units per 1 source unit. The sample is 0.90. This box is the whole rate. Nothing is fetched.',
      'Press Calculate. If you used a public fixing, keep the date you read it next to the result. The page does not store that date.'
    ],
    howHeading: 'How a typed exchange rate is applied',
    howItWorks: [
      'When the currencies differ, the page requires a rate above zero and multiplies. The headline is formatted as money in the target currency. Euros, dollars, pounds, Canadian dollars, Australian dollars, francs, rupees, and pesos get two decimal places. Yen get none. 100 × 150 yen is ¥15,000, not ¥15,000.00.',
      'When the currencies match, multiplication is skipped. The result says the rate box is ignored and repeats that the page does not download a market rate. Changing the rate from 0.90 to 1.50 while both menus say US dollars leaves the headline at $100.00.',
      'The page names an ECB reference rate only as an example of a public fixing you might type, along with the date you read it. It does not contact the ECB. Leaving yesterday’s number in the box does not make it today’s rate. No fee is computed. If you need a bank’s all-in rate, type that rate yourself. The calculator will not invent a spread.'
    ],
    formula: 'If source and target currencies match, the result is the amount and the rate is ignored\nOtherwise result = amount × rate\nThe rate is target units per 1 source unit, typed by you\nNo live rate is downloaded\nNo fee, spread, or card markup is subtracted\nYen display with 0 decimal places\nUSD, EUR, GBP, CAD, AUD, CHF, INR, and MXN display with 2 decimal places\nA leftover rate is not today’s rate',
    formulaNotes: [
      '100 × 0.90 = 90, formatted as €90.00. The detail line shows the rate as 0.9. The currencies are USD to EUR only because those menus were selected. The 0.90 did not come from a feed.',
      'The same 100 dollars, with the target changed to yen and the rate typed as 150, is ¥15,000. With the target left on dollars, a rate of 1.5 is ignored and the headline stays $100.00.'
    ],
    examplesHeading: 'Worked currency conversions',
    samples: [
      { title: '100 USD at 0.90 EUR per USD', overrides: {}, blurb: 'The rate box is the whole conversion. 100 × 0.90 is €90.00. The page did not download 0.90, and a number left in the box from another day is not today’s rate.' },
      { title: '100 USD with the target still in USD', overrides: { to: 1, rate: 1.5 }, blurb: 'Source and target match, so the rate box is ignored. The headline is $100.00 even though 1.5 is typed. The page still does not download a rate.' },
      { title: '100 USD at 150 JPY per USD', overrides: { to: 6, rate: 150 }, blurb: '100 × 150 = 15,000. Yen are shown with no decimal subunit, so the headline is ¥15,000. The 150 is a rate you type. It is not a published fixing unless you copied one in, with the date you checked.' }
    ],
    table: {
      heading: 'Amounts times a typed rate',
      caption: 'Every rate in this table was typed. None was downloaded. The middle row ignores the rate because both currencies are USD.',
      headers: ['Conversion', 'Headline']
    },
    limitsHeading: 'What this currency page will not invent',
    limits: [
      'It does not download or store a live rate. The rate box is the entire conversion. An ECB reference rate, or any other public fixing, works only if you type it, and you should keep the date you checked.',
      'A number left over in the box is not today’s rate. The page will multiply it anyway. The result tells you that yesterday’s number does not become today’s by being left in place.',
      'No fee, spread, or card markup is subtracted. A bank will not match a mid-market figure you type. If you want the bank’s rate, type the bank’s rate.',
      'Identical source and target currencies skip the rate. Yen have no decimal places on the headline. The other eight currencies have two. The menu is a label and a rounding rule, not a quote.'
    ],
    disclaimer: 'This multiplies an amount by an exchange rate you type. It does not download a live rate, and it does not subtract a fee or a spread. A leftover number is not today’s rate.',
    faqs: [
      { q: 'What is 100 USD at 0.90 EUR per USD on this page?', a: '€90.00. The arithmetic is 100 × 0.90. The 0.90 is the rate in the box, not a rate this site downloaded or invented. The detail line prints it as 0.9.' },
      { q: 'Does the currency converter fetch today’s ECB rate?', a: 'No. You can type a European Central Bank reference rate, or any other public fixing, together with the date you read it. The page does not contact a rate feed. A number left over from last time is not today’s rate.' },
      { q: 'Why is 100 dollars still $100.00 when the rate box says 1.5?', a: 'The source and the target were both US dollars, so the rate box is ignored. When the currencies differ, the result is the amount times the rate you type. The page still does not download a market rate in that case.' },
      { q: 'How are yen displayed?', a: 'With no decimal subunit. One hundred dollars at a typed rate of 150 yen per dollar is ¥15,000. The other currencies on the form use two decimal places. No fee or spread is subtracted from either result.' },
      { q: 'Will this page subtract a card markup from €90.00?', a: 'No. No fee, spread, or card markup is subtracted. A bank will not match a mid-market rate you type. Type the all-in rate if that is the rate you want multiplied.' }
    ],
    relatedLinks: [
      { slug: 'unit-converter', label: 'Unit converter', note: '1 inch is 2.54 centimetres by an exact definition. A currency rate is not an exact definition. You have to type it.' },
      { slug: 'cagr-calculator', label: 'CAGR calculator', note: 'From 100 to 200 in 10 years is 7.1773% per year. That is a growth rate between two values, not an exchange rate.' },
      { slug: 'simple-interest-calculator', label: 'Simple interest calculator', note: 'Principal times rate times time. The interest rate is not a foreign-exchange rate, and this currency page does not compute interest.' }
    ]
  }),

  'dice-roller': page({
    slug: 'dice-roller',
    title: 'Dice Roller | ClearCalc',
    h1: 'Dice Roller',
    description: 'A checked 2d6 example with seed 1 shows the faces 1 and 4, which sum to 5. The form itself does not send a seed.',
    intro: [
      'Each die is a whole number from 1 to the number of sides, and every face is equally likely. The form rolls from 1 to 30 dice, with 2 to 100 sides on each. The sample form is 2 dice of 6 sides. Pressing Calculate uses crypto.getRandomValues with rejection sampling, so the faces stay uniform, and the next press is a new roll. Nothing about the previous roll is stored.',
      'The worked examples on this page pass a seed so the faces can be checked. Seed 1 on 2d6 produces the faces 1 and 4, and the headline is sum 5. Seed 2 on a single 20-sided die produces 14. Seed 3 on 3d6 produces 5, 6, and 3, which sum to 14. The form on the page does not send a seed. Calculate uses crypto.getRandomValues instead. The seeded strings exist only so these written examples stay put.',
      'One press is one throw. The page does not turn that throw into a probability distribution, a histogram, or the chance of the sum you just saw. Two faces that happen to be 1 and 4 are that throw. They are not a statement about how often a sum of 5 appears.'
    ],
    steps: [
      'Enter the number of dice, from 1 to 30. The sample is 2.',
      'Enter the sides on each die, from 2 to 100. The sample is 6.',
      'Press Calculate. The headline is the sum. The faces are listed underneath, each from 1 through the number of sides.',
      'Press Calculate again for a new roll. The form does not accept a seed. A repeated total is a new draw, not a stored result.'
    ],
    howHeading: 'How a roll is drawn',
    howItWorks: [
      'The live button calls crypto.getRandomValues on a 32-bit value and rejects draws that would make the remainder biased, then reduces the accepted draw modulo the number of sides and adds 1. The face is therefore an integer from 1 through the side count, and each face has the same chance. The page does not use Math.random.',
      'A worked example can pass a whole-number seed from 1 to 1,000,000,000. That path advances a fixed recurrence, state = 1664525 × state + 1013904223 in 32-bit arithmetic, and takes state modulo the number of sides. Seed 1 then seed-step then modulo 6, plus 1, is the first face 1. The next step is the face 4. The sum is 5. The form never sends that seed, so a visitor who presses Calculate does not get 1 and 4 on purpose.',
      'The result says this is not a statistics distribution of many rolls. It does not list the ways to make a sum, and it does not estimate a probability from one throw. Thirty dice is the maximum. One hundred sides is the maximum. A count of 0 or a coin with 1 side is rejected. Two sides is the smallest die, numbered 1 and 2.'
    ],
    formula: 'Each face is an integer from 1 to the number of sides\nCount is a whole number from 1 to 30\nSides is a whole number from 2 to 100\nThe form uses crypto.getRandomValues with rejection sampling\nA worked example may pass a seed from 1 to 1,000,000,000\nThe form does not send a seed\nThe headline is the sum of one throw\nOne throw is not a probability distribution',
    formulaNotes: [
      'Seed 1, two dice, six sides: faces 1 and 4, sum 5. Seed 2, one die, 20 sides: face 14, sum 14. Seed 3, three dice, six sides: faces 5, 6, and 3, sum 14.',
      'Those three results are repeatable only because the examples pass a seed. The button on the form omits the seed and draws with crypto.getRandomValues. Rolling again replaces the faces. The previous roll is not stored.'
    ],
    examplesHeading: 'Worked dice examples with a seed',
    samples: [
      { title: 'Seed 1, two 6-sided dice', overrides: { seed: 1 }, blurb: 'The seeded throw is 1 and 4, and the headline is sum 5. This is one throw. It is not the distribution of 2d6, and the form you use does not send the seed.' },
      { title: 'Seed 2, one 20-sided die', overrides: { seed: 2, count: 1, sides: 20 }, blurb: 'A different seed and a different die. The single face is 14, so the sum is 14. The face is a whole number from 1 to 20. One face is not a table of how often each face appears.' },
      { title: 'Seed 3, three 6-sided dice', overrides: { seed: 3, count: 3, sides: 6 }, blurb: 'Three faces, 5, 6, and 3, sum to 14. The count is within the 30-die limit. Pressing Calculate on the form would draw three new faces with crypto.getRandomValues rather than repeating 5, 6, and 3.' }
    ],
    table: {
      heading: 'Seeded rolls used as checks',
      caption: 'Each headline is one seeded throw. The form does not send a seed, so Calculate will not reproduce these faces.',
      headers: ['Seeded throw', 'Sum']
    },
    limitsHeading: 'What one dice roll does not say',
    limits: [
      'One press is one throw. The page does not plot a distribution, and a single sum of 5 is not evidence about how often that sum occurs.',
      'The form does not send a seed. The seeds 1, 2, and 3 exist so these written examples can be checked. A visitor’s roll uses crypto.getRandomValues.',
      'The count stops at 30 dice and the sides stop at 100. Faces run from 1 to the side count. There is no 0 face.',
      'Nothing about the previous roll is stored. Pressing Calculate again is a new draw, not a continuation that tries to balance the last total.'
    ],
    disclaimer: 'The form rolls equally likely faces with crypto.getRandomValues. The seeded examples are checks. One roll is one throw, not a probability distribution.',
    faqs: [
      { q: 'What does the seeded 2d6 example with seed 1 actually roll?', a: 'The faces are 1 and 4, and the sum is 5. That result is repeatable because the example passes a seed. The form on the page does not send a seed, so Calculate uses crypto.getRandomValues and will not keep returning 1 and 4.' },
      { q: 'Does one dice total describe the probability of that total?', a: 'No. The page draws one throw and stops. Seed 3 on 3d6 happens to be 5, 6, and 3, summing to 14. That is the throw. It is not a distribution of three-dice sums.' },
      { q: 'How many dice and how many sides can the roller take?', a: 'From 1 to 30 dice, and from 2 to 100 sides on each. Each face is a whole number from 1 to the number of sides. The live draw uses crypto.getRandomValues with rejection sampling so the faces stay equally likely.' },
      { q: 'Why do the worked dice examples mention a seed the form does not have?', a: 'So the faces can be checked. Seed 2 on one 20-sided die is the face 14. Without a seed, the same settings draw a new face every time and the page does not store the previous one.' }
    ],
    relatedLinks: [
      { slug: 'password-generator', label: 'Password generator', note: 'Also uses crypto.getRandomValues in the browser. A length-12 example from 62 characters is 71.45 bits. A password is not a die face.' },
      { slug: 'hours-calculator', label: 'Hours calculator', note: 'A clock gap. It does not draw a random integer from 1 to a number of sides.' },
      { slug: 'time-span-calculator', label: 'Time duration calculator', note: 'From 2026-01-01 00:00:00 to 2026-01-02 01:30:00 is 1 day 1 hour 30 minutes 0 seconds. A duration is not a roll.' }
    ]
  }),

  'password-generator': page({
    slug: 'password-generator',
    title: 'Password Generator | ClearCalc',
    h1: 'Password Generator',
    description: 'A length-12 password from 62 letters and digits has 71.45 bits of entropy. The checked seed-1 example is gvkZCfUt4RUD.',
    intro: [
      'The sample settings are length 12, lowercase, uppercase, and digits, with symbols off and look-alike removal off. That character set has 26 + 26 + 10 = 62 characters. Entropy, if every character is chosen independently and uniformly, is length × log2(charset size), which is 12 × log2(62) = 71.45 bits.',
      'The worked example passes seed 1 so the string can be checked. That draw is gvkZCfUt4RUD. The form does not send a seed. Calculate uses crypto.getRandomValues, and the password is generated in the browser. It is not sent to ClearCalc. The seeded string is only a check of this example, not a password to reuse. Generate a new one if a password was shown on a shared screen.',
      'Symbols, when selected, are the set !@#$%^&*()-_=+[]{}:;,.? and nothing else. Space, quote, and backslash are not in the set. With symbols on, the set has 85 characters and a length-12 password has 76.91 bits. The seed-2 example of that set is x-eK{QQe=[dx. Look-alike removal drops O, 0, I, l, and 1 before the draw. The same seed 1 with removal on uses 57 characters, 69.99 bits, and the string JtiXUhtHteEa. Length must be a whole number from 8 to 64, and at least one set has to be on.'
    ],
    steps: [
      'Choose a length from 8 to 64. The sample is 12.',
      'Turn lowercase, uppercase, digits, and symbols on or off. The sample uses the first three and leaves symbols off.',
      'Optionally drop O, 0, I, l, and 1. The sample keeps them.',
      'Press Calculate. Read the entropy line. The password stays in the browser. It is not sent to ClearCalc. Press Calculate again if this one was shown on a shared screen.'
    ],
    howHeading: 'How the password and its entropy are produced',
    howItWorks: [
      'The set is built in order: lowercase abc…z, then uppercase ABC…Z, then digits 0123456789, then the symbol string !@#$%^&*()-_=+[]{}:;,.? if that switch is on. Look-alike removal filters the finished set and deletes O, 0, I, l, and 1. If nothing is selected, or if filtering leaves fewer than two characters, the page rejects the combination.',
      'Each position draws an index uniformly from the finished set. On the form, the draw is crypto.getRandomValues with rejection sampling. In a worked example that passes a seed, the draw is the fixed 32-bit recurrence used only so the example can be checked. Seed 1 with the 62-character set spells gvkZCfUt4RUD. The same seed after look-alike removal spells a different string, JtiXUhtHteEa, because the set itself changed. Entropy uses the size of the set that was actually drawn from.',
      'Entropy is not a crack-time promise and it is not a password manager. It is length times the base-2 log of the set size, under the assumption that every character was independent and uniform. The page reports 71.45 bits for 12 characters from 62, 76.91 bits for 12 from 85, and 69.99 bits for 12 from 57. It does not send the password to ClearCalc.'
    ],
    formula: 'Charset = lowercase + uppercase + digits + symbols, for the switches that are on\nSymbols = !@#$%^&*()-_=+[]{}:;,.?\nSpace, quote, and backslash are not included\nLook-alike removal deletes O, 0, I, l, and 1\nEntropy bits = length × log2(charset size)\nLength is a whole number from 8 to 64\nThe form uses crypto.getRandomValues\nThe password is not sent to ClearCalc\nA worked example may pass a seed. The form does not.',
    formulaNotes: [
      'Twelve characters from 62 symbols: 12 × log2(62) = 71.45 bits. The seed-1 check string is gvkZCfUt4RUD. Do not reuse it. The form draws a different string with crypto.getRandomValues.',
      'Symbols raise the set from 62 to 85 and the entropy from 71.45 to 76.91 bits. Seed 2 in that set is x-eK{QQe=[dx. Dropping O, 0, I, l, and 1 leaves 57 characters and 69.99 bits. Seed 1 in that reduced set is JtiXUhtHteEa.'
    ],
    examplesHeading: 'Worked password examples with a seed',
    samples: [
      { title: 'Length 12, letters and digits, seed 1', overrides: { seed: 1 }, blurb: 'The set has 62 characters and the entropy is 71.45 bits. The seeded string is gvkZCfUt4RUD. The form does not send a seed, uses crypto.getRandomValues, and does not send the password to ClearCalc.' },
      { title: 'Length 12 with symbols, seed 2', overrides: { seed: 2, symbols: 1 }, blurb: 'Symbols add !@#$%^&*()-_=+[]{}:;,.? and the set grows to 85 characters. Entropy is 76.91 bits. The seeded string is x-eK{QQe=[dx. Space, quote, and backslash are not available.' },
      { title: 'Length 12 with look-alikes removed, seed 1', overrides: { seed: 1, avoid: 1 }, blurb: 'O, 0, I, l, and 1 are removed before the draw, leaving 57 characters and 69.99 bits. The same seed as the first example now spells JtiXUhtHteEa, because the set changed.' }
    ],
    table: {
      heading: 'Seeded passwords and their entropy',
      caption: 'The headline is the seeded string so the example can be checked. The form does not use these seeds and does not send the password to ClearCalc.',
      headers: ['Settings', 'Seeded string']
    },
    limitsHeading: 'What this password page does not do',
    limits: [
      'It does not send the password to ClearCalc. Generation uses crypto.getRandomValues in the browser. The seeds in the examples are not on the form.',
      'Entropy is length × log2(charset size) for an independent uniform draw. It is not a measured crack time, and the seeded examples are checks rather than passwords to adopt.',
      'Symbols are only !@#$%^&*()-_=+[]{}:;,.? Look-alike removal drops only O, 0, I, l, and 1. Space, quote, and backslash are absent either way.',
      'Length is a whole number from 8 to 64. At least one character set must stay on, and look-alike removal must leave at least two characters. The page does not check the string against a breach list.'
    ],
    disclaimer: 'The password is generated in the browser with crypto.getRandomValues and is not sent to ClearCalc. Entropy is length times log2 of the character set. The seeded strings are checks, not passwords to reuse.',
    faqs: [
      { q: 'What is the entropy of a 12-character password from letters and digits?', a: '71.45 bits. The set is 26 lowercase, 26 uppercase, and 10 digits, 62 characters, and entropy is 12 × log2(62). The seed-1 check string is gvkZCfUt4RUD. The form does not use that seed.' },
      { q: 'Which symbols can the password generator include?', a: 'The set !@#$%^&*()-_=+[]{}:;,.? and no others. Space, quote, and backslash are not included. Turning symbols on at length 12 raises the set to 85 characters and the entropy to 76.91 bits. The seed-2 check string is x-eK{QQe=[dx.' },
      { q: 'What does look-alike removal drop from a password?', a: 'O, 0, I, l, and 1, and only those. At length 12 with letters and digits, the set falls from 62 to 57 and the entropy from 71.45 to 69.99 bits. Seed 1 then spells JtiXUhtHteEa instead of gvkZCfUt4RUD.' },
      { q: 'Is the password sent to ClearCalc?', a: 'No. The form generates it in the browser with crypto.getRandomValues. The form does not send a seed. Generate a new password if one was shown on a shared screen. The seeded examples exist so the strings can be checked, and they are not meant to be reused.' },
      { q: 'How long can the generated password be?', a: 'A whole number from 8 to 64. At least one of lowercase, uppercase, digits, and symbols must be on. If look-alike removal leaves fewer than two characters, the page rejects the combination.' }
    ],
    relatedLinks: [
      { slug: 'dice-roller', label: 'Dice roller', note: 'Also draws with crypto.getRandomValues. A seeded 2d6 check is the faces 1 and 4. A die face is not a password.' },
      { slug: 'bandwidth-calculator', label: 'Bandwidth calculator', note: '100 decimal MB at 100 Mbit/s is 8 seconds. Those are transfer bits. Password entropy bits are length × log2 of the character set, 71.45 bits in the length-12 sample.' },
      { slug: 'ipv4-subnet-calculator', label: 'IPv4 subnet calculator', note: '192.168.1.40/24 is an address block with 254 usable hosts. It is not a secret string.' }
    ]
  }),

  'time-span-calculator': page({
    slug: 'time-span-calculator',
    title: 'Time Duration Calculator | ClearCalc',
    h1: 'Time Duration Calculator',
    description: 'From 2026-01-01 00:00:00 to 2026-01-02 01:30:00 is 1 day 1 hour 30 minutes 0 seconds.',
    intro: [
      'The sample span runs from 2026-01-01 at 00:00:00 to 2026-01-02 at 01:30:00. The difference is 91,800 seconds, written as 1 day 1 hour 30 minutes 0 seconds. Both clocks are read as UTC fields. A daylight-saving transition between them is not inserted. The page does not know whether you meant Eastern time or British time.',
      'The second mode adds a duration to a start. Adding the sample’s 1 day, 1 hour, 30 minutes, and 0 seconds to 2026-01-01 00:00:00 lands on 2026-01-02 01:30:00 UTC. The add fields do not accept a negative duration. Days run from 0 to 100,000, and the hours, minutes, and seconds you add are bounded like a clock: hours 0 to 23, minutes and seconds 0 to 59. A signed gap belongs in the difference mode, by putting the later instant in the start and the earlier instant in the end.',
      'The hours calculator is a clock without a date. The date-difference calculator counts calendar days and does not look at the clock. The time-zone converter moves a clock between named zones and applies the daylight-saving rule for that date. This page uses a date and a clock together, and it treats both clocks as UTC fields so daylight-saving is not applied.'
    ],
    steps: [
      'Choose a duration between two date-times, or choose to add a duration. The sample is the duration.',
      'Enter the start date as YYYY-MM-DD and the start hour, minute, and second. The sample is 2026-01-01 00:00:00.',
      'For a duration, enter the end the same way. The sample end is 2026-01-02 01:30:00.',
      'Press Calculate. Read the total seconds. If the end is earlier, the duration is negative.'
    ],
    howHeading: 'How two UTC clocks become a duration',
    howItWorks: [
      'Each date is parsed as a real calendar day, and each clock field is a whole number: hours 0 to 23, minutes 0 to 59, seconds 0 to 59. The instant is Date.UTC of those fields, so the numbers are not shifted for a local time zone. The difference in milliseconds is rounded to seconds. 91,800 seconds is 1 day, 1 hour, 30 minutes, and 0 seconds.',
      'An earlier end changes the sign. From 2026-01-01 00:00:00 back to 2025-12-31 22:30:00 the total is -5,400 seconds and the headline is −1 hour 30 minutes 0 seconds. The page says the end is before the start. It does not rewrite the clocks into a positive span unless you swap them.',
      'Add mode sums days, hours, minutes, and seconds into one millisecond offset and adds it to the start instant, then prints the UTC timestamp. The sample addition is the same 1 day 1 hour 30 minutes that the difference mode measured, and it lands on 2026-01-02 01:30:00 UTC. Because the fields are UTC, a civil clock that skipped or repeated an hour is not adjusted. Named zones belong on the time-zone converter.'
    ],
    formula: 'Both clocks are UTC fields\nDuration seconds = end instant − start instant\n1 day = 86400 seconds\nThe sample is 86400 + 3600 + 1800 = 91800 seconds\n= 1 day 1 hour 30 minutes 0 seconds\nA negative result means the end is before the start\nAdd mode: start + days + hours + minutes + seconds, printed as UTC\nDaylight-saving is not applied\nHours to add are 0 to 23. A negative duration is not an add field.',
    formulaNotes: [
      'From 2026-01-01 00:00:00 to 2026-01-02 01:30:00 is 91,800 seconds, shown as 1 day 1 hour 30 minutes 0 seconds. Adding that same duration to the start returns 2026-01-02 01:30:00 UTC.',
      'Ending at 2025-12-31 22:30:00 gives −1 hour 30 minutes 0 seconds, which is -5,400 seconds. The hours calculator would ignore the dates. The date-difference calculator would ignore the clocks. This page uses both, as UTC fields.'
    ],
    examplesHeading: 'Worked durations',
    samples: [
      { title: '2026-01-01 00:00:00 to 2026-01-02 01:30:00', overrides: {}, blurb: 'The gap is 91,800 seconds. The headline is 1 day 1 hour 30 minutes 0 seconds. Both clocks are UTC fields, so a daylight-saving change is not inserted.' },
      { title: 'Add 1 day, 1 hour, and 30 minutes', overrides: { mode: 2 }, blurb: 'The same numbers, added to 2026-01-01 00:00:00, land on 2026-01-02 01:30:00 UTC. The add fields are not negative. The result is a timestamp, not a length.' },
      { title: 'End before the start', overrides: { enddate: '2025-12-31', endhour: 22 }, blurb: 'The end is 2025-12-31 22:30:00 and the start is 2026-01-01 00:00:00. The headline is −1 hour 30 minutes 0 seconds, and the total is -5,400 seconds. Swap the instants if you wanted the positive span.' }
    ],
    table: {
      heading: 'Duration headlines',
      caption: 'The first row is a positive span. The second row adds that span. The third row is negative because the end is earlier. Clocks are UTC fields.',
      headers: ['Question', 'Headline']
    },
    limitsHeading: 'What this duration page does not adjust',
    limits: [
      'Daylight-saving is not applied. The clocks are treated as UTC fields. A local clock change between the two instants is not inserted.',
      'It does not convert named time zones. Eastern, British, and the other zones on the time-zone converter are unknown here. The result even labels an added timestamp as UTC.',
      'The hours calculator has no date. The date-difference calculator has no clock. This page is the one that uses both. It is not a substitute for either of those when you only have a clock or only have dates.',
      'Add mode cannot take a negative duration. Hours added must be 0 to 23, minutes and seconds 0 to 59, and days 0 to 100,000. Use the difference mode, and put the later instant second, if you need a signed gap the other way. An impossible date is rejected.'
    ],
    disclaimer: 'Durations are differences of UTC date and clock fields. Daylight-saving is not applied, and named time zones are not converted.',
    faqs: [
      { q: 'How long is the span from 2026-01-01 00:00:00 to 2026-01-02 01:30:00?', a: '1 day 1 hour 30 minutes 0 seconds, which is 91,800 seconds. The clocks are read as UTC fields. A daylight-saving transition is not applied between them.' },
      { q: 'What do I get if I add 1 day, 1 hour, and 30 minutes to 2026-01-01 00:00:00?', a: '2026-01-02 01:30:00 UTC. The add mode uses the same UTC calendar fields. It does not know whether you meant Eastern or British time. A negative duration is not an add field.' },
      { q: 'Why is this not the hours calculator or the date-difference calculator?', a: 'The hours calculator is a clock without a date. The date-difference calculator counts calendar days and does not look at the clock. This page uses the date and the clock together, and it treats both as UTC so daylight-saving is not applied.' },
      { q: 'What does the page show when the end is before the start?', a: 'A negative duration. From 2026-01-01 00:00:00 back to 2025-12-31 22:30:00 the headline is −1 hour 30 minutes 0 seconds, -5,400 seconds in total. The note says the end is before the start.' }
    ],
    relatedLinks: [
      { slug: 'hours-calculator', label: 'Hours calculator', note: 'A clock gap with no date. It does not span 2026-01-01 into 2026-01-02, because it has no calendar.' },
      { slug: 'date-difference-calculator', label: 'Date difference calculator', note: 'Calendar days between two dates, without a clock. 1 January to 2 January is a date count, not 1 day 1 hour 30 minutes.' },
      { slug: 'time-zone-converter', label: 'Time zone converter', note: 'Moves a clock between named zones and can apply a daylight-saving rule. This duration page treats the fields as UTC and does not.' }
    ]
  }),

  'body-surface-area-calculator': page({
    slug: 'body-surface-area-calculator',
    title: 'Body Surface Area Calculator | ClearCalc',
    h1: 'Body Surface Area Calculator',
    description: '170 cm and 70 kg is a Mosteller body surface area of 1.8181 m². This is not a medicine dose.',
    intro: [
      'The headline is the Mosteller equation, the square root of height in centimetres times weight in kilograms, divided by 3,600. At 170 cm and 70 kg that product is 11,900 / 3,600, and the square root is 1.818119 m², shown as 1.8181 m². The Du Bois line is 0.007184 × height^0.725 × weight^0.425, which is 1.809708 m² for the same person. The two formulas do not match, and neither one is a dose.',
      'Imperial entries are converted before either formula. Inches are multiplied by 2.54 and pounds by 0.45359237. A height of 67 inches and a weight of 154 pounds become 170.18 cm and 69.85 kg. Mosteller is then 1.8172 m² and Du Bois is 1.809482 m². One hundred eighty centimetres and 80 kilograms is an exact Mosteller square root of 4, because 180 × 80 / 3,600 = 4, so the headline is 2 m². Du Bois for that pair is 1.996421 m².',
      'Do not use this area to calculate a medicine dose. A prescriber uses a regimen, a renal and hepatic check, and a formula specified for that drug. This page only evaluates the two published area equations. The headline is Mosteller. Du Bois is the second line.'
    ],
    steps: [
      'Choose kilograms and centimetres, or pounds and inches. The sample is metric.',
      'Enter the height. The sample is 170 cm.',
      'Enter the weight. The sample is 70 kg.',
      'Press Calculate. Use the Mosteller headline only as an area. The Du Bois line is the other published equation. Neither line is a dose.'
    ],
    howHeading: 'How Mosteller and Du Bois areas are evaluated',
    howItWorks: [
      'Mosteller is √(cm × kg / 3600). The 3,600 is the constant in that equation, not a unit conversion done a second time. Du Bois is 0.007184 × cm^0.725 × kg^0.425. Both run on the same converted height and weight. The page prints Mosteller to four decimals in the headline and to six decimals on the detail line, and it prints Du Bois to six decimals.',
      'The metric sample needs no conversion. 170 × 70 / 3,600 = 3.305555…, and the square root is 1.818119, which rounds to 1.8181 m². Du Bois on those inputs is 1.809708 m². The gap is the two equations. The page does not average them and does not pick a clinical formula.',
      'Imperial conversion uses the exact inch, 2.54 cm, and the international pound, 0.45359237 kg, and then the same two equations. There is no third formula. There is no drug, no frequency, and no adjustment for kidneys or liver. Using the square metres as a dose would add a step this page refuses to take.'
    ],
    formula: 'Centimetres = height, or height × 2.54 for inches\nKilograms = weight, or weight × 0.45359237 for pounds\nMosteller m² = √(cm × kg / 3600)\nDu Bois m² = 0.007184 × cm^0.725 × kg^0.425\nThe headline is Mosteller\nDu Bois is the second line\nNeither equation is a medicine dose',
    formulaNotes: [
      '170 × 70 / 3,600 = 11,900 / 3,600. The square root is 1.818119 m², shown as 1.8181 m². Du Bois is 1.809708 m².',
      '67 inches and 154 pounds convert to 170.18 cm and 69.85 kg, then to a Mosteller area of 1.8172 m². 180 cm and 80 kg is exactly 2 m² on Mosteller, because 180 × 80 / 3,600 = 4. Du Bois there is 1.996421 m².'
    ],
    examplesHeading: 'Worked body-surface examples',
    samples: [
      { title: '170 cm and 70 kg', overrides: {}, blurb: 'Mosteller is √(170 × 70 / 3600) = 1.8181 m² on the headline. Du Bois is 1.809708 m². The inputs were already centimetres and kilograms. Neither figure is a dose.' },
      { title: '67 inches and 154 pounds', overrides: { units: 2, height: 67, weight: 154 }, blurb: 'The page converts with 1 inch = 2.54 cm and 1 pound = 0.45359237 kg, giving 170.18 cm and 69.85 kg. Mosteller is 1.8172 m² and Du Bois is 1.809482 m².' },
      { title: '180 cm and 80 kg', overrides: { height: 180, weight: 80 }, blurb: '180 × 80 / 3,600 = 4, so the Mosteller square root is exactly 2 m². Du Bois is 1.996421 m². The two equations still disagree, and the page still does not turn either one into a medicine dose.' }
    ],
    table: {
      heading: 'Mosteller headlines',
      caption: 'The headline is Mosteller in square metres. Du Bois is the second detail line and is not the headline.',
      headers: ['Height and weight', 'Mosteller']
    },
    limitsHeading: 'What this area must not be used for',
    limits: [
      'It is not a medicine dose. Do not multiply the square metres by a mg/m² regimen. A prescriber uses the regimen, a renal and hepatic check, and the formula specified for that drug.',
      'Mosteller and Du Bois disagree. The page shows both and does not average them. The headline is Mosteller only because that is the equation this form leads with.',
      'Imperial numbers are converted with 2.54 and 0.45359237 and then treated as adult inputs to the two equations. The page does not adjust the equations for age.',
      'Height and weight have to be above zero. The page does not judge whether the pair is a possible adult body, and it does not store a previous result.'
    ],
    disclaimer: 'Mosteller and Du Bois here are published area equations only. Do not use the result to calculate a medicine dose.',
    faqs: [
      { q: 'What is the Mosteller body surface area for 170 cm and 70 kg?', a: '1.8181 m², from √(170 × 70 / 3600) = 1.818119 m². Du Bois, 0.007184 × 170^0.725 × 70^0.425, is 1.809708 m². The headline is Mosteller. Neither number is a medicine dose.' },
      { q: 'Can I use this body surface area to dose a medicine?', a: 'No. Do not use this area to calculate a medicine dose. A prescriber uses a regimen, a renal and hepatic check, and a formula specified for that drug. This page only evaluates Mosteller and Du Bois.' },
      { q: 'How are inches and pounds converted before the area formulas?', a: 'Inches are multiplied by 2.54 and pounds by 0.45359237. Then Mosteller and Du Bois run in centimetres and kilograms. 67 inches and 154 pounds become 170.18 cm and 69.85 kg, and the Mosteller headline is 1.8172 m².' },
      { q: 'Why do Mosteller and Du Bois disagree at 180 cm and 80 kg?', a: 'They are different equations. Mosteller is √(180 × 80 / 3600) = 2 m² exactly. Du Bois is 1.996421 m². The page prints both and does not average them into a dose.' }
    ],
    relatedLinks: [
      { slug: 'bmi-calculator', label: 'BMI calculator', note: 'Weight and height as an index. Body surface area is a square-metre equation, Mosteller √(cm × kg / 3600), not a BMI category.' },
      { slug: 'ideal-weight-calculator', label: 'Ideal weight calculator', note: 'Devine, Robinson, and Miller targets from height. Those are weights, not a Mosteller area, and not a dose.' },
      { slug: 'weight-converter', label: 'Weight converter', note: 'Kilograms and pounds with 0.45359237 kg per pound. The area page uses that factor only to reach kilograms before the formula.' }
    ]
  }),

  'bac-calculator': page({
    slug: 'bac-calculator',
    title: 'BAC Estimate Calculator | ClearCalc',
    h1: 'BAC Estimate Calculator',
    description: 'A 70 kg person, Widmark r of 0.68, and 2 drinks of 14 g each is about 0.059% at 0 hours. This is not a breath test.',
    intro: [
      'The estimate is the Widmark expression (grams / (kilograms × 1,000 × r)) × 100, minus elimination × hours, and it is floored at 0. The sample uses the male average Widmark used, r = 0.68, a weight of 70 kg, 2 drinks, 14 g of ethanol in each drink, 0 hours, and an elimination of 0.015 per hour. Total alcohol is 28 g. The figure before elimination is 0.0588 g/dL, which the page treats as the same figure as a percent. Rounded to three decimals the headline is 0.059%. Nothing is subtracted at 0 hours.',
      'The female average Widmark used is r = 0.55. The same 70 kg and the same 28 g give 0.0727 g/dL before elimination and a headline of 0.073%. After 2 hours at the default elimination of 0.015, the male figure is 0.0588 − 0.030 = 0.029% on the headline. After 4 hours the subtraction passes zero, so the headline is 0.000%. The linear clock does not go negative.',
      'Fourteen grams is the NIAAA standard drink the field defaults to, and the grams box can be changed. The elimination default of 0.015 is an average assumption, not your measured rate. Absorption is not modeled. Food is not modeled. The time course is not modeled. This is not a breath test, a blood test, or a legal result. Do not use it to decide whether to drive.'
    ],
    steps: [
      'Choose the Widmark factor, 0.68 or 0.55. The sample is 0.68.',
      'Enter body weight in kilograms or pounds, the number of drinks, and the grams of ethanol in each drink. The sample is 70 kg, 2 drinks, and 14 g.',
      'Enter hours since the start and the elimination per hour. The sample is 0 hours and 0.015.',
      'Press Calculate. Read the headline as an arithmetic estimate. It is not a breath test and it is not a decision to drive.'
    ],
    howHeading: 'How the Widmark estimate is arranged',
    howItWorks: [
      'Grams are drinks times grams per drink. Kilograms are the weight you typed, or the weight times 0.45359237 if you selected pounds. The body-water factor r is 0.68 for the male average Widmark used and 0.55 for the female average Widmark used. The raw estimate is (grams / (kg × 1,000 × r)) × 100. The page calls that raw figure a g/dL value and says it is the same figure as a percent.',
      'Elimination is then subtracted as elimination × hours. The sample subtraction at 0 hours is 0. At 2 hours it is 0.015 × 2 = 0.030, and 0.0588 − 0.030 headlines as 0.029%. If the subtraction passes zero, the headline is 0.000%. Four hours on the male sample does that: 0.015 × 4 = 0.060, which is more than the 0.0588 raw figure. Pounds do not change the formula. 154 lb is 69.85 kg, the raw figure becomes 0.0589, and the 0-hour headline is still 0.059% after three-decimal rounding.',
      'Nothing in that arithmetic is a breath test, a blood test, or a legal result. Absorption, food, and the time course are not modeled. The 14 g default is the NIAAA standard drink the box starts with. Type a different gram amount if the drink is different. The 0.015 elimination is an assumption you can replace. The page will not measure either one for you, and it will not tell you whether to drive.'
    ],
    formula: 'r = 0.68 or 0.55\nkg = weight, or weight × 0.45359237 for pounds\ngrams = drinks × grams per drink\nRaw = (grams / (kg × 1000 × r)) × 100\nEstimate = raw − elimination × hours\nThe headline is the estimate floored at 0, shown to 3 decimals as a percent\nThe raw line is labeled g/dL and treated as the same figure as a percent\n14 g is the default per drink\n0.015 is the default elimination per hour\nAbsorption is not modeled',
    formulaNotes: [
      '28 / (70 × 1,000 × 0.68) × 100 = 0.0588235…, shown before elimination as 0.0588 and as a headline of 0.059% at 0 hours. With r = 0.55 the raw figure is 0.0727 and the headline is 0.073%.',
      'Two hours subtracts 0.030 and the male headline becomes 0.029%. Four hours subtracts 0.060, the difference is negative, and the headline is floored at 0.000%. 154 lb converts to 69.85 kg and the 0-hour headline remains 0.059%.'
    ],
    examplesHeading: 'Worked Widmark examples',
    samples: [
      { title: '70 kg, r = 0.68, 2 drinks, 0 hours', overrides: {}, blurb: 'Alcohol is 28 g. The raw Widmark figure is 0.0588 g/dL. With 0 hours subtracted, the headline is 0.059%. This is not a breath test and not a decision to drive.' },
      { title: 'The same inputs with r = 0.55', overrides: { sex: 2 }, blurb: 'The factor changes to 0.55, the female average Widmark used. The raw figure is 0.0727 g/dL and the headline is 0.073%. Weight, drinks, grams, and hours are unchanged.' },
      { title: 'Two hours of elimination at 0.015', overrides: { hours: 2 }, blurb: 'The raw male figure is still 0.0588. The page subtracts 0.015 × 2 hours. The headline is 0.029%. Absorption and food are still not modeled.' }
    ],
    table: {
      heading: 'Widmark headlines',
      caption: 'Each headline is the estimate after subtraction, floored at 0, not a measured blood or breath result.',
      headers: ['Inputs', 'Headline']
    },
    limitsHeading: 'What this BAC estimate is not',
    limits: [
      'It is not a breath test, a blood test, or a legal result. Do not use it to decide whether to drive.',
      'Absorption is not modeled. Food is not modeled. The time course is not modeled. Hours are a linear subtraction of the elimination you typed, floored at 0.',
      'The 14 g default is the NIAAA standard drink the field starts with, and you can change the grams. The 0.015 elimination is an average assumption, not your measured rate. The page does not measure either value.',
      'r is only the two averages on the form, 0.68 and 0.55. A weight in pounds is converted with 0.45359237 kg per pound and then used in the same formula. The result is still not a test.'
    ],
    disclaimer: 'This is a Widmark arithmetic estimate. It is not a breath test, a blood test, or a legal result. Absorption is not modeled. Do not use it to decide whether to drive.',
    faqs: [
      { q: 'What Widmark estimate does 70 kg, r = 0.68, and two 14 g drinks give at 0 hours?', a: '0.059%. Total alcohol is 28 g. Raw = (28 / (70 × 1,000 × 0.68)) × 100 = 0.0588 g/dL, which the page treats as the same figure as a percent. Zero hours subtracts nothing. This is not a breath test and not a decision to drive.' },
      { q: 'What changes when the Widmark factor is 0.55 instead of 0.68?', a: 'The same 28 g and 70 kg produce a raw figure of 0.0727 and a headline of 0.073% at 0 hours. The form calls 0.55 the female average Widmark used and 0.68 the male average Widmark used. Absorption is still not modeled.' },
      { q: 'How does the 0.015 elimination change the 0.059% estimate after 2 hours?', a: 'The page subtracts 0.015 × 2 = 0.030 from the raw 0.0588 figure. The headline is 0.029%. After 4 hours the subtraction passes zero and the headline is floored at 0.000%. The clock does not go negative.' },
      { q: 'Is 14 grams a fixed legal drink size on this page?', a: 'No. 14 g is the NIAAA standard drink the grams field defaults to, and you can change it. The elimination default of 0.015 is an average assumption, not your measured rate. The result is still not a legal result.' },
      { q: 'Can this BAC estimate tell me whether I can drive?', a: 'No. It is not a breath test, a blood test, or a legal result. Absorption, food, and the time course are not modeled. Do not use it to decide whether to drive.' }
    ],
    relatedLinks: [
      { slug: 'body-surface-area-calculator', label: 'Body surface area calculator', note: '170 cm and 70 kg is a Mosteller area of 1.8181 m². That area is not a Widmark estimate and not a dose.' },
      { slug: 'bmi-calculator', label: 'BMI calculator', note: 'An index from weight and height. It does not take a drink count or a Widmark factor.' },
      { slug: 'weight-converter', label: 'Weight converter', note: 'Pounds and kilograms. This BAC page multiplies pounds by 0.45359237 only to reach the kilograms in the Widmark formula.' }
    ]
  }),

  'pregnancy-weight-gain-calculator': page({
    slug: 'pregnancy-weight-gain-calculator',
    title: 'Pregnancy Weight Gain Calculator | ClearCalc',
    h1: 'Pregnancy Weight Gain Calculator',
    description: '165 cm and 60 kg is a pre-pregnancy BMI of 22.04, and the 2009 IOM singleton range is 25 to 35 lb.',
    intro: [
      'The range comes from the 2009 Institute of Medicine and National Research Council report, Weight Gain During Pregnancy: Reexamining the Guidelines. BMI is pre-pregnancy weight in kilograms divided by height in metres squared, and it is only a sorting key for that table, not a diagnosis. At 165 cm and 60 kg, BMI is 60 / 1.65² = 22.04, which is the normal band. For one baby the total range is 25 to 35 lb, or 11.34 to 15.88 kg at 0.45359237 kg per pound.',
      'The singleton bands in the code are underweight 28 to 40 lb, normal 25 to 35 lb, overweight 15 to 25 lb, and obese 11 to 20 lb. The second- and third-trimester rates printed with them are 1.0 lb per week (about 1.0 to 1.3) for underweight, 1.0 lb per week (about 0.8 to 1.0) for normal, 0.6 lb per week (about 0.5 to 0.7) for overweight, and 0.5 lb per week (about 0.4 to 0.6) for obese. The BMI cuts are under 18.5, under 25, under 30, and 30 or above.',
      'Twin totals in the same report, as this page stores them, are normal 37 to 54 lb, overweight 31 to 50 lb, and obese 25 to 42 lb. The twin line is a total gain, not the singleton weekly rate. The report did not set a twin range for underweight BMI. At 165 cm and 45 kg the BMI is 16.53, and if you ask for twins the headline is “no IOM twin range”. The page will not invent that range. A singleton at that BMI would be 28 to 40 lb, and the page says that singleton range is not a twin recommendation. This is not advice for a particular pregnancy.'
    ],
    steps: [
      'Choose kilograms and centimetres, or pounds and inches. The sample is metric.',
      'Enter height and pre-pregnancy weight. The sample is 165 cm and 60 kg.',
      'Choose one baby or twins.',
      'Press Calculate. Read the BMI band and the 2009 range. If the headline says no IOM twin range, the page has refused to invent an underweight twin interval.'
    ],
    howHeading: 'How the 2009 IOM table is selected',
    howItWorks: [
      'Height in inches is multiplied by 2.54 and weight in pounds by 0.45359237 before the BMI division. BMI = kg / (cm / 100)². Under 18.5 is underweight, under 25 is normal, under 30 is overweight, and 30 or above is obese. The sample 60 / 1.65² is 22.04, normal. Seventy-five kilograms at the same height is BMI 27.55, overweight, singleton 15 to 25 lb. Ninety kilograms is BMI 33.06, obese, singleton 11 to 20 lb. Forty-five kilograms is BMI 16.53, underweight, singleton 28 to 40 lb.',
      'The weekly phrases are copied from the singleton table in the code, and they apply to the second and third trimesters. The normal phrase is 1.0 lb per week (about 0.8 to 1.0). Twins do not receive that weekly sentence. At BMI 22.04 the twin total is 37 to 54 lb, which is 16.78 to 24.49 kg. The page does not convert a twin total into the singleton weekly rate.',
      'Underweight twins stop. The result names the BMI, says the 2009 report set twin ranges for normal, overweight, and obese BMI and did not set one for underweight, and points out that 28 to 40 lb is the singleton range only. Triplets and higher, a short interval, edema, and clinical limits are outside the table. The page is not advice for a particular pregnancy.'
    ],
    formula: 'BMI = kg / (m)² from pre-pregnancy height and weight\nUnderweight BMI < 18.5, normal < 25, overweight < 30, obese otherwise\nSingleton totals: underweight 28 to 40 lb, normal 25 to 35 lb, overweight 15 to 25 lb, obese 11 to 20 lb\nWeekly 2nd and 3rd trimester, singleton: underweight 1.0 lb/week (about 1.0 to 1.3), normal 1.0 (about 0.8 to 1.0), overweight 0.6 (about 0.5 to 0.7), obese 0.5 (about 0.4 to 0.6)\nTwins: normal 37 to 54 lb, overweight 31 to 50 lb, obese 25 to 42 lb\nUnderweight twins: no range is invented\n1 lb = 0.45359237 kg\nSource: IOM and NRC, 2009',
    formulaNotes: [
      '165 cm and 60 kg give BMI 22.04, normal. One baby is 25 to 35 lb, 11.34 to 15.88 kg, with the normal weekly phrase 1.0 lb per week (about 0.8 to 1.0) in the second and third trimesters.',
      'The same BMI for twins is 37 to 54 lb, 16.78 to 24.49 kg, as a total, not a weekly rate. 45 kg at 165 cm is BMI 16.53, and twins at that BMI return “no IOM twin range”.'
    ],
    examplesHeading: 'Worked 2009 IOM ranges',
    samples: [
      { title: '165 cm, 60 kg, one baby', overrides: {}, blurb: 'BMI is 22.04, in the normal band. The singleton range is 25 to 35 lb, 11.34 to 15.88 kg. The weekly phrase is 1.0 lb per week (about 0.8 to 1.0) in the second and third trimesters. This is the 2009 table, not personal medical advice.' },
      { title: 'The same BMI, twins', overrides: { plurality: 2 }, blurb: 'BMI stays 22.04. The twin total is 37 to 54 lb, 16.78 to 24.49 kg. The page does not apply the singleton weekly rate to twins.' },
      { title: '165 cm, 45 kg, twins', overrides: { weight: 45, plurality: 2 }, blurb: 'BMI is 16.53, under 18.5. The headline is no IOM twin range. The 2009 report did not set an underweight twin interval, and the page does not invent one. The singleton 28 to 40 lb range is not offered as a twin recommendation.' }
    ],
    table: {
      heading: 'IOM range headlines',
      caption: 'The headline is the 2009 total-gain range in pounds, or a refusal when the report has no underweight twin range. BMI is the sorting key.',
      headers: ['Inputs', 'Headline']
    },
    limitsHeading: 'What the 2009 table does not decide',
    limits: [
      'It is not advice for a particular pregnancy. Triplets and higher, a short interval, edema, and clinical limits are outside the table.',
      'BMI is a sorting key for the 2009 categories, not a diagnosis. The cuts used here are 18.5, 25, and 30.',
      'Underweight twins have no range on this page. The report did not set one, and the calculator will not invent one. The singleton 28 to 40 lb band is not a twin substitute.',
      'Twin results are totals. They do not inherit the singleton weekly rates. Imperial height and weight are converted with 2.54 and 0.45359237 before BMI is calculated.'
    ],
    disclaimer: 'This looks up the 2009 Institute of Medicine total-gain range from a pre-pregnancy BMI. It is not personal medical advice, and it does not invent an underweight twin range.',
    faqs: [
      { q: 'What pregnancy weight-gain range does 165 cm and 60 kg select?', a: 'BMI is 22.04, normal. For one baby the 2009 IOM range is 25 to 35 lb, 11.34 to 15.88 kg. The second- and third-trimester phrase is 1.0 lb per week (about 0.8 to 1.0). This is not personal medical advice.' },
      { q: 'What are the singleton ranges stored from the 2009 report?', a: 'Underweight 28 to 40 lb, normal 25 to 35 lb, overweight 15 to 25 lb, and obese 11 to 20 lb. The weekly second- and third-trimester phrases are 1.0 lb per week (about 1.0 to 1.3), 1.0 (about 0.8 to 1.0), 0.6 (about 0.5 to 0.7), and 0.5 (about 0.4 to 0.6).' },
      { q: 'What twin ranges does the page use?', a: 'Normal 37 to 54 lb, overweight 31 to 50 lb, and obese 25 to 42 lb. They are totals, not the singleton weekly rate. At BMI 22.04 the twin headline is 37 to 54 lb.' },
      { q: 'Why does the page refuse underweight twins?', a: 'The 2009 Institute of Medicine report set twin ranges for normal, overweight, and obese BMI and did not set one for underweight. At 165 cm and 45 kg the BMI is 16.53 and the headline is no IOM twin range. The page will not invent the missing interval. A singleton at that BMI is 28 to 40 lb, and that is not a twin recommendation.' },
      { q: 'Is the pregnancy weight-gain result personal medical advice?', a: 'No. It is the 2009 table indexed by pre-pregnancy BMI. Triplets and higher, a short interval, edema, and clinical limits are outside the table. BMI here is a sorting key, not a diagnosis.' }
    ],
    relatedLinks: [
      { slug: 'bmi-calculator', label: 'BMI calculator', note: 'The same weight-for-height index. This page uses BMI only to choose a 2009 IOM range. It is not a diagnosis.' },
      { slug: 'pregnancy-due-date-calculator', label: 'Pregnancy due date calculator', note: 'A due date from the last menstrual period. It does not look up a weight-gain range.' },
      { slug: 'ideal-weight-calculator', label: 'Ideal weight calculator', note: 'Adult ideal-weight formulas from height. They are not the 2009 pregnancy table.' }
    ]
  }),

  'gdp-calculator': page({
    slug: 'gdp-calculator',
    title: 'GDP Identity Calculator | ClearCalc',
    h1: 'GDP Identity Calculator',
    description: 'The default expenditure identity is 100 + 50 + 40 + (20 − 10) = 200, and the income side is also 200, so the gap is 0.',
    intro: [
      'Expenditure GDP on this page is the textbook identity C + I + G + (X − M). The defaults are consumption 100, investment 50, government spending 40, exports 20, and imports 10. Net exports are 20 − 10 = 10, and the sum is 200. The headline is that expenditure total.',
      'The income side is wages + rent + interest + profit + depreciation + taxes on production and imports − subsidies. The defaults are 140 + 10 + 10 + 30 + 15 + 5 − 10, which is also 200. The gap, expenditure minus the income side, is 0. In a full set of accounts the two approaches meet after a statistical discrepancy. Here the gap is only the numbers you typed.',
      'Imports are entered as a positive amount that is subtracted. The default box says so. Do not type imports as a negative unless that really is your sign convention. Raising imports from 10 to 30 changes net exports from 10 to −10 and the expenditure headline from 200 to 180, while the income side stays 200, so the gap is −20. Raising wages from 140 to 150 leaves expenditure at 200, moves the income side to 210, and makes the gap −10. This is not a BEA release. There is no price index. A zero in a box is a zero, not a blank.'
    ],
    steps: [
      'Enter consumption, investment, government spending, exports, and imports. Imports are a positive number to subtract. The sample is 100, 50, 40, 20, and 10.',
      'Enter wages, rent, interest, profit, depreciation, taxes on production and imports, and subsidies. The sample is 140, 10, 10, 30, 15, 5, and 10.',
      'Press Calculate. The headline is the expenditure total.',
      'Read the income-side total and the gap. A gap of 0 means the two sums you typed match. It does not mean a statistical agency has balanced them.'
    ],
    howHeading: 'How the expenditure and income identities are added',
    howItWorks: [
      'Expenditure is consumption + investment + government + exports − imports. The parentheses in the detail line keep exports and imports together so the subtraction is visible: 100 + 50 + 40 + (20 − 10). Income is wages + rent + interest + profit + depreciation + taxes − subsidies. Depreciation has to be zero or positive. The other boxes accept a negative if that is the sign you mean, and a negative import would be added rather than subtracted, which is why the page warns you.',
      'The gap is expenditure minus income, not a residual the page estimates. On the defaults both sides are 200 and the gap is 0. Change one side and the gap moves by the same amount, with the opposite sign if you changed the income side. 150 in wages instead of 140 adds 10 to income and the gap becomes −10. Imports of 30 instead of 10 subtract an extra 20 from expenditure and the gap becomes −20.',
      'Nothing is deflated, seasonally adjusted, or fetched from a statistical release. The identity is the textbook one. A zero you leave in a box is a zero contribution, not an instruction to skip the term. The page will add a set of zeros to zero.'
    ],
    formula: 'Expenditure = C + I + G + (X − M)\nIncome = wages + rent + interest + profit + depreciation + taxes − subsidies\nGap = expenditure − income\nImports are a positive amount that is subtracted\nDefault expenditure = 100 + 50 + 40 + (20 − 10) = 200\nDefault income = 140 + 10 + 10 + 30 + 15 + 5 − 10 = 200\nDefault gap = 0\nThis is the textbook identity, not a BEA release',
    formulaNotes: [
      '100 + 50 + 40 + 10 = 200 on the expenditure side once imports of 10 have been subtracted from exports of 20. The income terms 140 + 10 + 10 + 30 + 15 + 5 − 10 also equal 200. The gap is 0.',
      'Imports of 30 make expenditure 180 and the gap −20. Wages of 150 make income 210 and the gap −10. Both examples leave every other default in place. Neither one is an official revision.'
    ],
    examplesHeading: 'Worked GDP identities',
    samples: [
      { title: 'The default two sides', overrides: {}, blurb: 'Expenditure is 100 + 50 + 40 + (20 − 10) = 200. The income side is also 200. The gap is 0. Imports were entered as a positive 10 and then subtracted.' },
      { title: 'Imports raised to 30', overrides: { imports: 30 }, blurb: 'Net exports become 20 − 30 = −10, so expenditure falls to 180. The income side is still 200. The gap is −20. The import was still typed as a positive number.' },
      { title: 'Wages raised to 150', overrides: { wages: 150 }, blurb: 'Expenditure stays 200. Income becomes 210 because wages rose by 10. The gap, expenditure minus income, is −10. A zero was not hiding in the wage box. The previous 140 was replaced.' }
    ],
    table: {
      heading: 'Expenditure headlines and what moved',
      caption: 'The headline is the expenditure identity. The gap is expenditure minus the income side and is printed in the details.',
      headers: ['Change', 'Expenditure']
    },
    limitsHeading: 'What this GDP identity is not',
    limits: [
      'It is not a BEA release, a national-accounts publication, or a forecast. It adds the numbers you type.',
      'There is no price index and no real-versus-nominal switch. A zero in a box is a zero, not a blank and not a chained dollar.',
      'Imports are subtracted because they are typed as a positive amount. Typing them as a negative will add them, and the page tells you not to do that unless that is really your sign convention.',
      'The gap is only the difference between the two sums. It is not an estimated statistical discrepancy from an official reconciliation.'
    ],
    disclaimer: 'This adds the textbook expenditure identity and an income-side total from numbers you type. It is not a BEA release and it has no price index.',
    faqs: [
      { q: 'What do the default GDP boxes add up to?', a: 'Expenditure is 100 + 50 + 40 + (20 − 10) = 200. The income side, 140 + 10 + 10 + 30 + 15 + 5 − 10, is also 200. The gap is 0. Imports of 10 are a positive number that is subtracted.' },
      { q: 'What happens to GDP if imports are entered as 30 instead of 10?', a: 'Net exports become 20 − 30, expenditure becomes 180, and the gap against the unchanged income side of 200 is −20. Type imports as a positive amount. A negative import would be added.' },
      { q: 'Why is the GDP headline the expenditure total rather than the income total?', a: 'The page leads with C + I + G + (X − M). The income side and the gap are the detail lines. Raising wages from 140 to 150 leaves the headline at 200 and moves the gap to −10, because income became 210.' },
      { q: 'Is this GDP calculator a statistical-agency release?', a: 'No. It is the textbook identity. It has no price index, and a zero in a box is a zero, not a blank. In official accounts the two sides meet after a statistical discrepancy. Here the gap is only the numbers you typed.' }
    ],
    relatedLinks: [
      { slug: 'cagr-calculator', label: 'CAGR calculator', note: 'From 100 to 200 in 10 years is 7.1773% per year. A growth rate between two values is not the expenditure identity.' },
      { slug: 'roi-calculator', label: 'ROI calculator', note: 'Profit divided by cost. GDP here adds C, I, G, and net exports. It is not a return on a single cost.' },
      { slug: 'payback-period-calculator', label: 'Payback period calculator', note: '$10,000 covered by $2,500 a year is 4 years at 0%. A payback year count is not a GDP identity.' }
    ]
  }),

  'height-predictor-calculator': page({
    slug: 'height-predictor-calculator',
    title: 'Mid-Parental Height Calculator | ClearCalc',
    h1: 'Mid-Parental Height Calculator',
    description: 'A father of 180 cm and a mother of 165 cm give a Tanner mid-parental target of 179 cm for a boy.',
    intro: [
      'The Tanner mid-parental target for a boy is (father + mother + 13 cm) / 2. For a girl it is (father + mother − 13 cm) / 2. A father of 180 cm and a mother of 165 cm give a boy of (180 + 165 + 13) / 2 = 179 cm, which is 70.47 inches. A girl with the same parents is (180 + 165 − 13) / 2 = 166 cm, which is 65.35 inches.',
      'The page also shows an interval of ±10 cm. For the boy that is 169 to 189 cm, 66.5 to 74.4 inches. For the girl it is 156 to 176 cm, 61.4 to 69.3 inches. The ±10 cm is the range often quoted with the Tanner mid-parental target. It is not a regression residual from a named growth study. A child can finish outside the interval.',
      'This is not the Khamis-Roche regression, and it does not use the child’s current height or age. Inches are converted with 1 inch = 2.54 cm before the 13 cm adjustment. The 13 cm shift is about 5.12 inches, and it is applied in centimetres, not by adding 5 inches to the inch heights. A father of 71 inches and a mother of 65 inches are 180.34 cm and 165.1 cm. The boy target is 179.2 cm. The girl target is 166.2 cm.'
    ],
    steps: [
      'Choose centimetres or inches. The sample is centimetres.',
      'Choose boy or girl. The sample is a boy, which adds 13 cm.',
      'Enter the mother’s height and the father’s height in the unit you chose. The sample is 165 and 180.',
      'Press Calculate. The headline is the mid-parental target in centimetres. The ±10 cm interval is a quoted range, not the child’s current height.'
    ],
    howHeading: 'How the Tanner mid-parental target is averaged',
    howItWorks: [
      'If the heights are in inches, each is multiplied by 2.54 before anything else. The 13 cm adjustment is then added for a boy or subtracted for a girl, and the two parental heights plus that signed 13 cm are divided by 2. The sample boy is (180 + 165 + 13) / 2 = 179. The sample girl is (180 + 165 − 13) / 2 = 166. Dividing by 2.54 converts the headline back to inches for the detail line.',
      'The interval subtracts and adds 10 cm. It is not fitted on this page from a data set, and the result says it is not a regression residual from a named growth study. Khamis-Roche would need the child’s current height, weight, and age. None of those fields exist here. The target can be missed.',
      'Applying the adjustment in inches by a rough 5 inch shift is a different calculation. The page converts first and then uses 13 cm, which it describes as about 5.12 inches. That is why 71 inches and 65 inches become 180.34 cm and 165.1 cm, and the boy headline is 179.2 cm rather than a figure built by adding 5 inches to the parental average in inches.'
    ],
    formula: 'Convert inches with 1 inch = 2.54 cm before the adjustment\nBoy: (father cm + mother cm + 13 cm) / 2\nGirl: (father cm + mother cm − 13 cm) / 2\nInterval = target ± 10 cm\nThe ±10 cm is the range often quoted with the Tanner target\nIt is not a Khamis-Roche residual\nThe child’s current height and age are not used\n13 cm is about 5.12 inches',
    formulaNotes: [
      '(180 + 165 + 13) / 2 = 179 cm for a boy, 70.47 inches, with an interval of 169 to 189 cm. (180 + 165 − 13) / 2 = 166 cm for a girl, 65.35 inches, with an interval of 156 to 176 cm.',
      '71 inches is 180.34 cm and 65 inches is 165.1 cm. The boy target is 179.2 cm and the girl target is 166.2 cm. The 13 cm adjustment happens after the 2.54 conversion.'
    ],
    examplesHeading: 'Worked mid-parental targets',
    samples: [
      { title: 'Father 180 cm, mother 165 cm, boy', overrides: {}, blurb: 'The boy formula adds 13 cm before dividing by 2. The headline is 179 cm, 70.47 inches. The quoted interval is 169 to 189 cm. It is not the child’s current height, and it is not a Khamis-Roche regression.' },
      { title: 'The same parents, a girl', overrides: { sex: 2 }, blurb: 'The girl formula subtracts 13 cm. The headline is 166 cm, 65.35 inches. The interval is 156 to 176 cm. A child can finish outside that interval.' },
      { title: 'Father 71 in, mother 65 in, boy', overrides: { units: 2, father: 71, mother: 65 }, blurb: 'Inches are multiplied by 2.54 first, giving 180.34 cm and 165.1 cm. The 13 cm adjustment is applied after that conversion. The headline is 179.2 cm. Adding 5 inches in place of 13 cm would be a different formula, and this page does not do it.' }
    ],
    table: {
      heading: 'Mid-parental headlines',
      caption: 'The headline is the Tanner target in centimetres. The ±10 cm interval is in the detail line and is a quoted range, not a regression residual.',
      headers: ['Parents and child', 'Target']
    },
    limitsHeading: 'What the mid-parental target does not use',
    limits: [
      'It does not use the child’s current height, weight, or age. Khamis-Roche is a different method, and this page does not run it.',
      'The ±10 cm band is the range often quoted with the Tanner target. It is not a residual from a named growth study. A child can finish outside 169 to 189 cm, or outside whatever ±10 cm band the parents produce.',
      'Inches are converted with 2.54 before the 13 cm adjustment. The adjustment is about 5.12 inches. It is not applied as a flat 5 inch add or subtract on the inch values.',
      'Both parental heights have to be above zero. The page does not know a growth chart, a bone age, or a medical history.'
    ],
    disclaimer: 'This is the Tanner mid-parental target, with the commonly quoted ±10 cm interval. It is not the Khamis-Roche regression and it does not use the child’s current height.',
    faqs: [
      { q: 'What is the mid-parental height for a boy with a 180 cm father and a 165 cm mother?', a: '179 cm. The boy formula is (father + mother + 13 cm) / 2, so (180 + 165 + 13) / 2 = 179, which is 70.47 inches. The quoted interval is 169 to 189 cm. That ±10 cm is not a Khamis-Roche residual, and the child’s current height is not used.' },
      { q: 'What target does the same couple give for a girl?', a: '166 cm, from (180 + 165 − 13) / 2. That is 65.35 inches, and the interval is 156 to 176 cm. The only change from the boy formula is the sign of the 13 cm adjustment.' },
      { q: 'How are inches converted before the 13 cm adjustment?', a: 'Each height is multiplied by 2.54 first. A 71 inch father is 180.34 cm and a 65 inch mother is 165.1 cm. The boy target is then 179.2 cm. The 13 cm shift is about 5.12 inches, and it is not applied by adding 5 to the inch measurements.' },
      { q: 'Does the mid-parental calculator use the child’s current height?', a: 'No. It is not the Khamis-Roche regression, and there is no field for the child’s height or age. The ±10 cm interval is the range often quoted with the Tanner target. A child can finish outside it.' }
    ],
    relatedLinks: [
      { slug: 'bmi-calculator', label: 'BMI calculator', note: 'An index from current weight and height. The mid-parental target does not use the child’s current height.' },
      { slug: 'ideal-weight-calculator', label: 'Ideal weight calculator', note: 'Adult weight formulas from a height you already have. It does not average two parents.' },
      { slug: 'length-converter', label: 'Length converter', note: 'Converts a length. This height page applies 2.54 cm per inch and then the 13 cm Tanner adjustment, which a plain length conversion does not do.' }
    ]
  })
};
