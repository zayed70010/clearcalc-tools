import { choice, cryptoIndex, fixed, formatSignedDuration, loose, nonNegative, num, parseDateParts, positive, result, usd, whole } from './nov14-shared.js';

const HP_WATT = 745.6998715822702;

function gasMileage(v) {
  const distance = positive(v.distance, 'distance');
  const distanceUnit = choice(v.distanceunit, [1, 2], 'Choose miles or kilometres');
  const fuel = positive(v.fuel, 'fuel used');
  const fuelUnit = choice(v.fuelunit, [1, 2, 3], 'Choose a fuel unit');
  const miles = distanceUnit === 1 ? distance : distance / 1.609344;
  const km = distanceUnit === 2 ? distance : distance * 1.609344;
  const usGallons = fuelUnit === 1 ? fuel : fuelUnit === 2 ? fuel * 4.54609 / 3.785411784 : fuel / 3.785411784;
  const litres = fuelUnit === 3 ? fuel : fuelUnit === 1 ? fuel * 3.785411784 : fuel * 4.54609;
  const usMpg = miles / usGallons;
  const ukMpg = miles / (litres / 4.54609);
  const lPer100 = litres / km * 100;
  return result(`${fixed(usMpg, 2)} US mpg`, [
    `${fixed(ukMpg, 2)} UK mpg`,
    `${fixed(lPer100, 2)} L/100 km`,
    `Distance used: ${loose(miles, 4)} miles, ${loose(km, 4)} km. Fuel used: ${loose(litres, 4)} litres, ${loose(usGallons, 4)} US gallons.`,
    'A US gallon is 3.785411784 litres. A UK gallon is 4.54609 litres. A mile is 1.609344 km.',
    'This divides a trip by the fuel that trip used. The fuel-economy converter changes a mpg figure you already have into another unit. It does not use a trip.'
  ]);
}

function ohms(v) {
  const mode = choice(v.mode, [1, 2, 3, 4, 5, 6], 'Choose the two quantities you know');
  const voltageIn = nonNegative(v.voltage, 'voltage');
  const currentIn = nonNegative(v.current, 'current');
  const resistanceIn = nonNegative(v.resistance, 'resistance');
  const powerIn = nonNegative(v.power, 'power');
  let voltage;
  let current;
  let resistance;
  let power;
  if (mode === 1) {
    voltage = positive(voltageIn, 'voltage');
    resistance = positive(resistanceIn, 'resistance');
    current = voltage / resistance;
    power = voltage * current;
  } else if (mode === 2) {
    voltage = positive(voltageIn, 'voltage');
    current = positive(currentIn, 'current');
    resistance = voltage / current;
    power = voltage * current;
  } else if (mode === 3) {
    current = positive(currentIn, 'current');
    resistance = positive(resistanceIn, 'resistance');
    voltage = current * resistance;
    power = voltage * current;
  } else if (mode === 4) {
    power = positive(powerIn, 'power');
    voltage = positive(voltageIn, 'voltage');
    current = power / voltage;
    resistance = voltage / current;
  } else if (mode === 5) {
    power = positive(powerIn, 'power');
    current = positive(currentIn, 'current');
    voltage = power / current;
    resistance = voltage / current;
  } else {
    power = positive(powerIn, 'power');
    resistance = positive(resistanceIn, 'resistance');
    current = Math.sqrt(power / resistance);
    voltage = current * resistance;
  }
  return result(`${loose(voltage, 6)} V`, [
    `Current ${loose(current, 6)} A`,
    `Resistance ${loose(resistance, 6)} Ω`,
    `Power ${loose(power, 6)} W`,
    'Ohm’s law is V = IR. Power is P = VI. The unused boxes are ignored for the pair you selected.',
    'This is a DC relationship for a resistor. It is not an AC impedance, a wire-size calculation, or a utility bill. The electricity-cost page turns watts and hours into a price.'
  ]);
}

function horsepower(v) {
  const mode = choice(v.mode, [1, 2, 3, 4], 'Choose a method');
  if (mode === 1) {
    const torque = positive(v.torque, 'torque');
    const rpm = positive(v.rpm, 'engine speed');
    const hp = torque * rpm / 5252;
    return result(`${loose(hp, 4)} hp`, [
      `${loose(torque)} lb·ft × ${loose(rpm)} rpm / 5252`,
      `Mechanical watts: ${loose(hp * HP_WATT, 2)}. Kilowatts: ${loose(hp * HP_WATT / 1000, 4)}.`,
      '5252 is 33000 / (2π), from 33,000 ft·lb per minute in one mechanical horsepower.',
      'This is torque at a shaft speed. It is not a quarter-mile estimate.'
    ]);
  }
  if (mode === 2) {
    const torque = positive(v.torque, 'torque');
    const rpm = positive(v.rpm, 'engine speed');
    const watts = torque * rpm * 2 * Math.PI / 60;
    const hp = watts / HP_WATT;
    return result(`${loose(hp, 4)} hp`, [
      `Power = torque × 2π × rpm / 60 = ${loose(watts, 2)} W`,
      `Kilowatts: ${loose(watts / 1000, 4)}`,
      `One mechanical horsepower is ${loose(HP_WATT, 4)} watts.`,
      'The torque is in newton-metres. The pound-foot formula is the other choice, and it is not this number divided by 1.356.'
    ]);
  }
  const weight = positive(v.weight, 'weight');
  if (mode === 3) {
    const et = positive(v.et, 'elapsed time');
    const hp = weight / (et / 5.825) ** 3;
    return result(`${loose(hp, 2)} hp`, [
      `Weight / (ET / 5.825)³, with weight in pounds and ET in seconds.`,
      'This is an empirical quarter-mile fit, not a dynamometer reading and not a physical law. The 5.825 figure is the constant in that fit.',
      'A trap-speed estimate uses a different constant and will not match this number on the same car.',
      'The result says nothing about drivetrain loss, altitude, or whether the time is a true quarter mile.'
    ]);
  }
  const speed = positive(v.speed, 'trap speed');
  const hp = weight * (speed / 234) ** 3;
  return result(`${loose(hp, 2)} hp`, [
    `Weight × (mph / 234)³, with weight in pounds and trap speed in miles per hour.`,
    'This is the companion empirical quarter-mile fit. It is not the torque formula and not a dynamometer.',
    'The elapsed-time method is the other choice. Use the one that matches the number you actually measured.',
    '234 is the constant in that fit. Changing it would be a different estimator, which this page does not offer.'
  ]);
}

const MASS_KG = { 1: 1, 2: 0.45359237 };
const VOLUME_M3 = { 1: 0.001, 2: 1, 3: 0.028316846592, 4: 0.003785411784 };

function density(v) {
  const mode = choice(v.mode, [1, 2, 3], 'Choose what you want');
  const massUnit = choice(v.massunit, [1, 2], 'Choose a mass unit');
  const volumeUnit = choice(v.volumeunit, [1, 2, 3, 4], 'Choose a volume unit');
  const mass = mode === 2 ? 0 : positive(v.mass, 'mass');
  const volume = mode === 3 ? 0 : positive(v.volume, 'volume');
  const densityIn = mode === 1 ? 0 : positive(v.density, 'density');
  const densityUnit = choice(v.densityunit, [1, 2], 'Choose a density unit');
  const toKgM3 = densityUnit === 1 ? 1 : 1000;
  if (mode === 1) {
    const kg = mass * MASS_KG[massUnit];
    const m3 = volume * VOLUME_M3[volumeUnit];
    const kgM3 = kg / m3;
    return densityResult(kgM3, 'Density = mass / volume, after converting to kilograms and cubic metres.');
  }
  const kgM3 = densityIn * toKgM3;
  if (mode === 2) {
    const m3 = volume * VOLUME_M3[volumeUnit];
    const kg = kgM3 * m3;
    const shown = massUnit === 1 ? kg : kg / 0.45359237;
    const unit = massUnit === 1 ? 'kg' : 'lb';
    return result(`${loose(shown, 6)} ${unit}`, [
      `${loose(kgM3, 6)} kg/m³ × ${loose(m3, 6)} m³ = ${loose(kg, 6)} kg`,
      'Mass = density × volume. The headline uses the mass unit you selected.',
      'A US gallon is 3.785411784 litres. A cubic foot is 0.028316846592 cubic metres.'
    ]);
  }
  const kg = mass * MASS_KG[massUnit];
  const m3 = kg / kgM3;
  const shown = m3 / VOLUME_M3[volumeUnit];
  const labels = { 1: 'litres', 2: 'cubic metres', 3: 'cubic feet', 4: 'US gallons' };
  return result(`${loose(shown, 6)} ${labels[volumeUnit]}`, [
    `${loose(kg, 6)} kg / ${loose(kgM3, 6)} kg/m³ = ${loose(m3, 6)} m³`,
    'Volume = mass / density. The headline uses the volume unit you selected.',
    'Finding the density itself is the first choice.'
  ]);
}

function densityResult(kgM3, lead) {
  return result(`${loose(kgM3, 4)} kg/m³`, [
    lead,
    `${loose(kgM3 / 1000, 6)} g/cm³`,
    `${loose(kgM3 / 16.01846337396014, 4)} lb/ft³`,
    'Water near 4°C is about 1000 kg/m³, or 1 g/cm³. This page does not look up a material.',
    'The mass choice and the volume choice use the same density. They are not a weight converter.'
  ]);
}

function speedTime(v) {
  const mode = choice(v.mode, [1, 2, 3], 'Choose what you want');
  const distance = mode === 2 ? 0 : positive(v.distance, 'distance');
  const distanceUnit = choice(v.distanceunit, [1, 2, 3], 'Choose a distance unit');
  const time = mode === 3 ? 0 : positive(v.time, 'time');
  const timeUnit = choice(v.timeunit, [1, 2, 3], 'Choose a time unit');
  const speed = mode === 1 ? 0 : positive(v.speed, 'speed');
  const speedUnit = choice(v.speedunit, [1, 2, 3], 'Choose a speed unit');
  const metresPer = { 1: 1609.344, 2: 1000, 3: 1 };
  const secondsPer = { 1: 3600, 2: 60, 3: 1 };
  const speedMetres = { 1: 1609.344 / 3600, 2: 1000 / 3600, 3: 1 };
  if (mode === 1) {
    const metres = distance * metresPer[distanceUnit];
    const seconds = time * secondsPer[timeUnit];
    const mps = metres / seconds;
    return speedResult(mps, 'Speed = distance / time, both converted to metres and seconds.');
  }
  const mps = speed * speedMetres[speedUnit];
  if (mode === 2) {
    const seconds = time * secondsPer[timeUnit];
    const metres = mps * seconds;
    const shown = metres / metresPer[distanceUnit];
    const labels = { 1: 'miles', 2: 'kilometres', 3: 'metres' };
    return result(`${loose(shown, 6)} ${labels[distanceUnit]}`, [
      `${loose(mps, 6)} m/s × ${loose(seconds, 4)} s = ${loose(metres, 4)} m`,
      'Distance = speed × time.',
      'The speed converter changes a speed you already have into another speed unit. It does not use a time.'
    ]);
  }
  const metres = distance * metresPer[distanceUnit];
  const seconds = metres / mps;
  const shown = seconds / secondsPer[timeUnit];
  const labels = { 1: 'hours', 2: 'minutes', 3: 'seconds' };
  return result(`${loose(shown, 6)} ${labels[timeUnit]}`, [
    `${loose(metres, 4)} m / ${loose(mps, 6)} m/s = ${loose(seconds, 4)} s`,
    'Time = distance / speed.',
    'A pace in minutes per kilometre is the running-pace calculator. This page is a single speed, distance, or time.'
  ]);
}

function speedResult(mps, lead) {
  return result(`${loose(mps * 3600 / 1609.344, 4)} mph`, [
    lead,
    `${loose(mps * 3.6, 4)} km/h`,
    `${loose(mps, 6)} m/s`,
    'A mile is 1.609344 km. The headline is miles per hour because that is the usual road unit on this form. The other two lines are the same speed.'
  ]);
}

function windChill(v) {
  const temperature = num(v.temperature, 'temperature');
  const wind = nonNegative(v.wind, 'wind speed');
  if (temperature > 50 || wind < 3) {
    return result(`${loose(temperature, 2)}°F`, [
      'The NWS wind-chill equation is published for air at or below 50°F and wind above 3 mph. Outside that range this page reports the air temperature and does not call it a wind chill.',
      'Wind chill (F) = 35.74 + 0.6215T − 35.75V^0.16 + 0.4275T×V^0.16, with V in mph.',
      'The formula is the 2001 National Weather Service equation. It is not a measurement of skin temperature on a particular person.',
      'A Celsius entry has to be converted before you type it. This form is Fahrenheit.'
    ]);
  }
  const chill = 35.74 + 0.6215 * temperature - 35.75 * wind ** 0.16 + 0.4275 * temperature * wind ** 0.16;
  return result(`${loose(chill, 1)}°F`, [
    'NWS 2001: 35.74 + 0.6215T − 35.75V^0.16 + 0.4275T×V^0.16',
    `Air ${loose(temperature, 2)}°F, wind ${loose(wind, 2)} mph.`,
    '0°F and 20 mph is about −22.0°F on this equation. That pair is a check, not a forecast.',
    'This is not the heat index. Heat index uses temperature and humidity, and it applies in hot air.'
  ]);
}

function heatIndex(v) {
  const T = num(v.temperature, 'temperature');
  const RH = num(v.humidity, 'relative humidity');
  if (RH < 0 || RH > 100) throw new Error('Enter a relative humidity from 0 to 100');
  const simple = 0.5 * (T + 61 + (T - 68) * 1.2 + RH * 0.094);
  const averaged = (simple + T) / 2;
  if (averaged < 80) {
    return result(`${loose(averaged, 1)}°F`, [
      'The simple Steadman-style formula was averaged with the air temperature, and that average is below 80°F, so the Rothfusz regression is not applied.',
      'HI = 0.5 × {T + 61 + [(T − 68) × 1.2] + (RH × 0.094)}, then averaged with T. This is the National Weather Service procedure.',
      'The regression is for hotter air. Using it below this threshold would not match the NWS practice.',
      'This is an apparent temperature, not a forecast and not a medical limit.'
    ]);
  }
  let HI = -42.379 + 2.04901523 * T + 10.14333127 * RH - 0.22475541 * T * RH - 0.00683783 * T * T - 0.05481717 * RH * RH + 0.00122874 * T * T * RH + 0.00085282 * T * RH * RH - 0.00000199 * T * T * RH * RH;
  let adjustment = 'No low-humidity or high-humidity adjustment applied.';
  if (RH < 13 && T >= 80 && T <= 112) {
    const adj = ((13 - RH) / 4) * Math.sqrt((17 - Math.abs(T - 95)) / 17);
    HI -= adj;
    adjustment = `Low-humidity adjustment subtracted ${loose(adj, 3)}°F.`;
  } else if (RH > 85 && T >= 80 && T <= 87) {
    const adj = ((RH - 85) / 10) * ((87 - T) / 5);
    HI += adj;
    adjustment = `High-humidity adjustment added ${loose(adj, 3)}°F.`;
  }
  return result(`${loose(HI, 1)}°F`, [
    'Rothfusz regression, applied because the simple average was at least 80°F. Source: NWS Weather Prediction Center heat-index equation.',
    adjustment,
    '90°F at 50% humidity is about 94.6°F here, which rounds near the familiar 95°F chart cell. 90°F at 60% is about 99.7°F.',
    'The equation is not valid for extreme conditions outside the data Steadman considered. It is not a measure of heat illness risk for a particular person.'
  ]);
}

function dewPoint(v) {
  const temperature = num(v.temperature, 'temperature');
  const humidity = num(v.humidity, 'relative humidity');
  if (humidity <= 0 || humidity > 100) throw new Error('Enter a relative humidity above 0 and at most 100');
  if (temperature < -40 || temperature > 50) throw new Error('This Magnus fit is stated for about −40°C to 50°C');
  const a = 17.625;
  const b = 243.04;
  const gamma = Math.log(humidity / 100) + (a * temperature) / (b + temperature);
  const dew = (b * gamma) / (a - gamma);
  return result(`${loose(dew, 2)}°C`, [
    `Magnus form: dew point = bγ / (a − γ), with a = 17.625 and b = 243.04°C.`,
    `γ = ln(RH/100) + aT/(b + T) = ${loose(gamma, 6)}`,
    'These constants are the Alduchov and Eskridge (1996) fit. 20°C at 50% relative humidity is about 9.26°C.',
    '100% relative humidity puts the dew point on the air temperature. The temperature is Celsius, not Fahrenheit.',
    'This is not a frost-point calculation and it does not know a pressure.'
  ]);
}

function tire(v) {
  const first = tireSize(v.width, v.aspect, v.rim, 'first tire');
  const compare = Number(v.width2) > 0;
  const lines = [
    `Sidewall ${loose(first.sidewall, 2)} mm`,
    `Overall diameter ${loose(first.diameterMm, 2)} mm (${loose(first.diameterIn, 3)} in)`,
    `Circumference ${loose(first.circumferenceIn, 3)} in`,
    `Revolutions per mile: ${loose(63360 / first.diameterIn, 2)}`,
    'Diameter = rim inches × 25.4 + 2 × width × (aspect / 100), with the width in millimetres.',
    'A mile is 63,360 inches. The revolutions figure divides that by the circumference. It ignores load, pressure, and tread wear.'
  ];
  if (!compare) return result(`${loose(first.diameterIn, 2)} in diameter`, lines);
  const second = tireSize(v.width2, v.aspect2, v.rim2, 'second tire');
  const error = (second.circumferenceIn - first.circumferenceIn) / first.circumferenceIn * 100;
  lines.push(`Second tire diameter ${loose(second.diameterIn, 3)} in. If the speedometer still assumes the first tire, the indicated speed is off by ${loose(error, 2)}% at the same revolutions. A positive percent means the new tire travels farther each turn, so the true speed is higher than the speedometer.`);
  return result(`${loose(first.diameterIn, 2)} in diameter`, lines);
}

function tireSize(width, aspect, rim, label) {
  const w = positive(width, `${label} width`);
  const a = positive(aspect, `${label} aspect ratio`);
  const r = positive(rim, `${label} rim`);
  if (a > 100) throw new Error(`Enter the ${label} aspect ratio as a percent, such as 45, not 0.45`);
  const sidewall = w * (a / 100);
  const diameterMm = r * 25.4 + 2 * sidewall;
  const diameterIn = diameterMm / 25.4;
  return { sidewall, diameterMm, diameterIn, circumferenceIn: Math.PI * diameterIn };
}

const BAND = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];
const MULTIPLIERS = [0.01, 0.1, 1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000];
const TOLERANCE = { 1: 1, 2: 2, 5: 0.5, 6: 0.25, 7: 0.1, 8: 0.05, 10: 5, 11: 10 };

function resistor(v) {
  const bands = choice(v.bands, [4, 5], 'Choose 4 or 5 bands');
  const d1 = whole(v.d1, 1, 9, 'first digit');
  const d2 = whole(v.d2, 0, 9, 'second digit');
  const d3 = bands === 5 ? whole(v.d3, 0, 9, 'third digit') : 0;
  const mult = choice(v.multiplier, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 'Choose a multiplier');
  const tol = choice(v.tolerance, [1, 2, 5, 6, 7, 8, 10, 11], 'Choose a tolerance');
  const digits = bands === 5 ? d1 * 100 + d2 * 10 + d3 : d1 * 10 + d2;
  const ohms = digits * MULTIPLIERS[mult];
  const tolPercent = TOLERANCE[tol];
  const low = ohms * (1 - tolPercent / 100);
  const high = ohms * (1 + tolPercent / 100);
  const names = bands === 5
    ? `${BAND[d1]}, ${BAND[d2]}, ${BAND[d3]}`
    : `${BAND[d1]}, ${BAND[d2]}`;
  return result(`${loose(ohms, 6)} Ω`, [
    `Digits ${names}. Multiplier ×${loose(MULTIPLIERS[mult], 4)}.`,
    `Tolerance ±${tolPercent}% gives ${loose(low, 4)} Ω to ${loose(high, 4)} Ω.`,
    'The first digit is not black. Gold and silver are multiplier or tolerance bands, not digit bands, on this form.',
    'Four bands use two digits. Five bands use three. The temperature-coefficient band on a six-band resistor is not read here.',
    'This decodes a code you already see. It does not pick a resistor for a circuit. Ohm’s law is the other electrical page.'
  ]);
}

function ipv4ToInt(text, label) {
  const parts = String(text ?? '').trim().split('.');
  if (parts.length !== 4) throw new Error(`Enter ${label} as four numbers separated by dots`);
  const bytes = parts.map((part) => Number(part));
  if (bytes.some((part) => !Number.isInteger(part) || part < 0 || part > 255)) throw new Error(`Each part of ${label} must be a whole number from 0 to 255`);
  return (((bytes[0] << 24) | (bytes[1] << 16) | (bytes[2] << 8) | bytes[3]) >>> 0);
}

function intToIpv4(value) {
  return `${(value >>> 24) & 255}.${(value >>> 16) & 255}.${(value >>> 8) & 255}.${value & 255}`;
}

function subnet(v) {
  const ip = ipv4ToInt(v.address, 'the IPv4 address');
  const prefix = whole(v.prefix, 0, 32, 'prefix');
  const mask = prefix === 0 ? 0 : (0xffffffff << (32 - prefix)) >>> 0;
  const network = (ip & mask) >>> 0;
  const broadcast = (network | (~mask >>> 0)) >>> 0;
  const size = 2 ** (32 - prefix);
  let usable;
  let note;
  if (prefix === 32) {
    usable = 1;
    note = 'A /32 is a single address. There is no separate network and broadcast in the usual host sense.';
  } else if (prefix === 31) {
    usable = 2;
    note = 'A /31 has two addresses. RFC 3021 uses both of them on a point-to-point link, so nothing is reserved here for network and broadcast.';
  } else {
    usable = size - 2;
    note = 'The first address is treated as the network address and the last as the broadcast address, so usable hosts are two fewer than the block.';
  }
  return result(intToIpv4(network) + `/${prefix}`, [
    `Netmask ${intToIpv4(mask)}`,
    `Broadcast ${intToIpv4(broadcast)}`,
    `Addresses in the block: ${size}. Usable on the rule above: ${usable}.`,
    note,
    `The address you typed, ${intToIpv4(ip)}, sits in this block.`,
    'This is IPv4 arithmetic only. It does not know a router, a VLAN, or an IPv6 prefix.'
  ]);
}

function bandwidth(v) {
  const size = positive(v.size, 'file size');
  const sizeUnit = choice(v.sizeunit, [1, 2, 3, 4, 5, 6, 7], 'Choose a size unit');
  const speed = positive(v.speed, 'transfer speed');
  const speedUnit = choice(v.speedunit, [1, 2, 3, 4, 5], 'Choose a speed unit');
  const sizeBytes = {
    1: 1,
    2: 1000,
    3: 1000 ** 2,
    4: 1000 ** 3,
    5: 1024,
    6: 1024 ** 2,
    7: 1024 ** 3
  };
  const bitsPerSecond = {
    1: 1,
    2: 1000,
    3: 1000 ** 2,
    4: 1000 ** 3,
    5: 8
  };
  const bytes = size * sizeBytes[sizeUnit];
  const bps = speed * bitsPerSecond[speedUnit];
  const seconds = bytes * 8 / bps;
  return result(formatSignedDuration(Math.round(seconds)), [
    `${loose(bytes, 4)} bytes is ${loose(bytes * 8, 4)} bits.`,
    `The speed used is ${loose(bps, 4)} bits per second.`,
    `Unrounded seconds: ${loose(seconds, 4)}. The headline rounds to the nearest second.`,
    'KB, MB, and GB on this page are decimal: 1,000, 1,000,000, and 1,000,000,000 bytes. KiB, MiB, and GiB are powers of 1,024.',
    'Megabits per second are decimal millions of bits, not megabytes. A byte-per-second choice is multiplied by 8 to reach bits.',
    'The time assumes the transfer holds that speed with no protocol overhead. A real download is often slower.'
  ]);
}

const UNITS = {
  1: { name: 'metre', dim: 'length', to: 1 },
  2: { name: 'kilometre', dim: 'length', to: 1000 },
  3: { name: 'centimetre', dim: 'length', to: 0.01 },
  4: { name: 'millimetre', dim: 'length', to: 0.001 },
  5: { name: 'inch', dim: 'length', to: 0.0254 },
  6: { name: 'foot', dim: 'length', to: 0.3048 },
  7: { name: 'yard', dim: 'length', to: 0.9144 },
  8: { name: 'mile', dim: 'length', to: 1609.344 },
  9: { name: 'celsius', dim: 'temperature', to: null },
  10: { name: 'fahrenheit', dim: 'temperature', to: null },
  11: { name: 'kelvin', dim: 'temperature', to: null },
  12: { name: 'square metre', dim: 'area', to: 1 },
  13: { name: 'square kilometre', dim: 'area', to: 1e6 },
  14: { name: 'square foot', dim: 'area', to: 0.3048 ** 2 },
  15: { name: 'square inch', dim: 'area', to: 0.0254 ** 2 },
  16: { name: 'acre', dim: 'area', to: 4046.8564224 },
  17: { name: 'hectare', dim: 'area', to: 10000 },
  18: { name: 'litre', dim: 'volume', to: 0.001 },
  19: { name: 'millilitre', dim: 'volume', to: 1e-6 },
  20: { name: 'cubic metre', dim: 'volume', to: 1 },
  21: { name: 'cubic foot', dim: 'volume', to: 0.028316846592 },
  22: { name: 'US gallon', dim: 'volume', to: 0.003785411784 },
  23: { name: 'UK gallon', dim: 'volume', to: 0.00454609 },
  24: { name: 'kilogram', dim: 'mass', to: 1 },
  25: { name: 'gram', dim: 'mass', to: 0.001 },
  26: { name: 'pound', dim: 'mass', to: 0.45359237 },
  27: { name: 'ounce', dim: 'mass', to: 0.028349523125 },
  28: { name: 'stone', dim: 'mass', to: 6.35029318 },
  29: { name: 'second', dim: 'time', to: 1 },
  30: { name: 'minute', dim: 'time', to: 60 },
  31: { name: 'hour', dim: 'time', to: 3600 },
  32: { name: 'day', dim: 'time', to: 86400 },
  33: { name: 'week', dim: 'time', to: 604800 }
};

function toCelsius(value, unit) {
  if (unit === 9) return value;
  if (unit === 10) return (value - 32) * 5 / 9;
  return value - 273.15;
}

function fromCelsius(value, unit) {
  if (unit === 9) return value;
  if (unit === 10) return value * 9 / 5 + 32;
  return value + 273.15;
}

function unitConverter(v) {
  const value = num(v.value, 'value');
  const from = choice(v.from, Object.keys(UNITS).map(Number), 'Choose a unit to convert from');
  const to = choice(v.to, Object.keys(UNITS).map(Number), 'Choose a unit to convert to');
  const left = UNITS[from];
  const right = UNITS[to];
  if (left.dim !== right.dim) throw new Error(`${left.name} measures ${left.dim}, and ${right.name} measures ${right.dim}. Pick two units of the same kind.`);
  let out;
  if (left.dim === 'temperature') {
    const c = toCelsius(value, from);
    if (c < -273.15) throw new Error('That temperature is below absolute zero');
    out = fromCelsius(c, to);
  } else {
    out = value * left.to / right.to;
  }
  return result(`${loose(out, 8)} ${right.name}`, [
    `${loose(value, 8)} ${left.name} = ${loose(out, 10)} ${right.name}`,
    left.dim === 'temperature'
      ? 'Temperature uses the exact affine conversions. 0°C is 32°F and 273.15 K. A difference of one degree Celsius is 1.8 degrees Fahrenheit, which is not the same as converting a temperature reading.'
      : `The factor is exact for the inch (0.0254 m), the international pound (0.45359237 kg), the US gallon (3.785411784 L), and the UK gallon (4.54609 L).`,
    'Length, weight, and temperature also have their own pages. This page is the six-dimension set: length, temperature, area, volume, mass, and time.',
    'A month is not a time unit here, because a month does not have one length. A speed is not a length.'
  ]);
}

function payback(v) {
  const cost = positive(v.cost, 'cost');
  const benefit = num(v.benefit, 'yearly benefit');
  const rate = nonNegative(v.rate, 'discount rate');
  if (benefit <= 0) throw new Error('Enter a yearly benefit above zero. A zero benefit never pays the cost back.');
  const simple = cost / benefit;
  if (rate === 0) {
    return result(`${loose(simple, 4)} years`, [
      `${usd(cost)} / ${usd(benefit)} per year`,
      'The discount rate is zero, so discounted payback matches simple payback.',
      'The benefit is assumed constant every year, received at the end of the year for the discounted case. There is no inflation line separate from the discount rate.'
    ]);
  }
  const r = rate / 100;
  let cumulative = 0;
  let year = 0;
  while (cumulative < cost && year < 500) {
    year += 1;
    cumulative += benefit / (1 + r) ** year;
  }
  if (cumulative < cost) {
    return result('no payback within 500 years', [
      `Simple payback would be ${loose(simple, 4)} years if the benefit were not discounted.`,
      `After 500 years the discounted benefits sum to ${usd(cumulative)}, which is still under the cost.`,
      'Raise the benefit or lower the discount rate if you expected a finite discounted payback.'
    ]);
  }
  const previous = cumulative - benefit / (1 + r) ** year;
  const fraction = (cost - previous) / (benefit / (1 + r) ** year);
  const exact = year - 1 + fraction;
  return result(`${loose(exact, 4)} years`, [
    `Simple payback, ignoring the discount rate: ${loose(simple, 4)} years.`,
    `Discount rate ${loose(rate, 4)}%. The discounted benefits first cover the cost during year ${year}.`,
    'The headline includes the fraction of that year. Benefits are end-of-year and constant.',
    'This is not a net present value of a project with a salvage value, and it is not an internal rate of return.'
  ]);
}

function depreciation(v) {
  const cost = positive(v.cost, 'cost');
  const salvage = nonNegative(v.salvage, 'salvage value');
  const years = whole(v.years, 1, 40, 'years');
  const method = choice(v.method, [1, 2], 'Choose a method');
  if (salvage > cost) throw new Error('Salvage value cannot exceed the cost');
  const rows = [];
  if (method === 1) {
    const annual = (cost - salvage) / years;
    let book = cost;
    for (let year = 1; year <= years; year += 1) {
      book -= annual;
      rows.push(`Year ${year}: depreciation ${usd(annual)}, book value ${usd(book)}`);
    }
    return result(`${usd(annual)} per year`, [
      `(${usd(cost)} − ${usd(salvage)}) / ${years}`,
      ...rows.slice(0, 6),
      years > 6 ? `Years 7 through ${years} continue at the same ${usd(annual)} until the book value is ${usd(salvage)}.` : 'The schedule uses the same amount every year.',
      'Straight line spreads the depreciable amount evenly. It is an accounting pattern, not a market price.'
    ]);
  }
  const rate = 2 / years;
  let book = cost;
  const lines = [];
  for (let year = 1; year <= years; year += 1) {
    let charge = book * rate;
    if (book - charge < salvage) charge = book - salvage;
    book -= charge;
    lines.push(`Year ${year}: depreciation ${usd(charge)}, book value ${usd(book)}`);
  }
  return result(`${loose(rate * 100, 2)}% of the declining book`, [
    'Double declining balance uses twice the straight-line rate on the remaining book value, and it stops at the salvage value.',
    ...lines.slice(0, 6),
    years > 6 ? `The later years are in the same pattern. The final book value is ${usd(book)}.` : `Ending book value ${usd(book)}.`,
    'There is no half-year convention and no switch to straight line unless the salvage cap shortens the last charge. Tax depreciation systems are more specific than this.'
  ]);
}

function cagr(v) {
  const start = positive(v.start, 'starting value');
  const end = positive(v.end, 'ending value');
  const years = positive(v.years, 'number of years');
  const rate = (end / start) ** (1 / years) - 1;
  if (!Number.isFinite(rate)) throw new Error('That growth rate is not a finite number');
  return result(`${fixed(rate * 100, 4)}% per year`, [
    `(${loose(end)} / ${loose(start)})^(1 / ${loose(years)}) − 1`,
    `A check: ${usd(start)} compounded annually at this rate for ${loose(years)} years ends at ${usd(start * (1 + rate) ** years)}.`,
    'Both values have to be positive. A loss is a negative rate, which happens when the ending value is below the start. Zero is rejected.',
    'This is a compound annual growth rate between two points. It is not an internal rate of return of an uneven cash flow, and it is not the simple ROI of a single profit divided by cost.'
  ]);
}

const MONEY = { 1: ['USD', 2], 2: ['EUR', 2], 3: ['GBP', 2], 4: ['CAD', 2], 5: ['AUD', 2], 6: ['JPY', 0], 7: ['CHF', 2], 8: ['INR', 2], 9: ['MXN', 2] };

function money(value, code, digits) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: code, minimumFractionDigits: digits, maximumFractionDigits: digits }).format(value);
}

function currency(v) {
  const amount = nonNegative(v.amount, 'amount');
  const from = choice(v.from, Object.keys(MONEY).map(Number), 'Choose a source currency');
  const to = choice(v.to, Object.keys(MONEY).map(Number), 'Choose a target currency');
  const [fromCode] = MONEY[from];
  const [toCode, digits] = MONEY[to];
  if (from === to) {
    return result(money(amount, toCode, digits), [
      'The source and the target are the same currency, so the amount is unchanged.',
      'The rate box is ignored in that case.',
      'This page does not download a market rate. When the currencies differ, the result is the amount times the rate you type.'
    ]);
  }
  const rate = positive(v.rate, 'exchange rate');
  const converted = amount * rate;
  return result(money(converted, toCode, digits), [
    `${loose(amount, 4)} × ${loose(rate, 8)} = ${loose(converted, 6)}`,
    `The rate is how many ${toCode} you get for 1 ${fromCode}. It is the number in the rate box, not a rate published by this site.`,
    'A European Central Bank reference rate, or any other public fixing, can be typed here together with the date you read it. Leaving yesterday’s number in the box does not make it today’s rate.',
    'No fee, spread, or card markup is subtracted. A bank will not match a mid-market rate you type.',
    toCode === 'JPY' ? 'Yen are shown with no decimal subunit.' : 'The headline uses the usual two decimal places for this currency.'
  ]);
}

function makeIndex(values) {
  if (values.seed == null || values.seed === '') return cryptoIndex;
  const seed = Number(values.seed);
  if (!Number.isInteger(seed) || seed < 1 || seed > 1e9) throw new Error('A worked-example seed must be a whole number from 1 to 1,000,000,000');
  let state = seed >>> 0;
  return (span) => {
    state = (Math.imul(state, 1664525) + 1013904223) >>> 0;
    return state % span;
  };
}

function dice(v) {
  const count = whole(v.count, 1, 30, 'number of dice');
  const sides = whole(v.sides, 2, 100, 'number of sides');
  const draw = makeIndex(v);
  const rolls = Array.from({ length: count }, () => draw(sides) + 1);
  const sum = rolls.reduce((total, item) => total + item, 0);
  return result(`sum ${sum}`, [
    `Rolls: ${rolls.join(', ')}`,
    `Each die is a whole number from 1 to ${sides}. There are ${count} of them.`,
    v.seed == null || v.seed === ''
      ? 'The draw uses crypto.getRandomValues with rejection sampling, so the faces are equally likely. Press Calculate again for a new roll. Nothing about the previous roll is stored.'
      : 'This particular result used a fixed seed so a worked example can be checked. The form on the page does not send a seed, so Calculate uses crypto.getRandomValues instead.',
    'This is not a statistics distribution of many rolls. One press is one throw.'
  ]);
}

const SYMBOLS = '!@#$%^&*()-_=+[]{}:;,.?';

function password(v) {
  const length = whole(v.length, 8, 64, 'length');
  const lower = choice(v.lower, [0, 1], 'Choose whether to use lowercase');
  const upper = choice(v.upper, [0, 1], 'Choose whether to use uppercase');
  const digits = choice(v.digits, [0, 1], 'Choose whether to use digits');
  const symbols = choice(v.symbols, [0, 1], 'Choose whether to use symbols');
  const avoid = choice(v.avoid, [0, 1], 'Choose whether to drop look-alike characters');
  let charset = '';
  if (lower) charset += 'abcdefghijklmnopqrstuvwxyz';
  if (upper) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (digits) charset += '0123456789';
  if (symbols) charset += SYMBOLS;
  if (!charset) throw new Error('Choose at least one set of characters');
  if (avoid) charset = [...charset].filter((char) => !'O0Il1'.includes(char)).join('');
  if (charset.length < 2) throw new Error('That combination leaves fewer than two characters. Turn off look-alike removal or add another set.');
  const draw = makeIndex(v);
  let out = '';
  for (let i = 0; i < length; i += 1) out += charset[draw(charset.length)];
  const bits = length * Math.log2(charset.length);
  return result(out, [
    `Length ${length}, from a set of ${charset.length} characters.`,
    `Entropy if every character is chosen independently and uniformly: ${fixed(bits, 2)} bits.`,
    avoid ? 'O, 0, I, l, and 1 were removed from the set before the draw.' : 'Look-alike characters were kept.',
    `Symbols, when selected, are ${SYMBOLS}. Space, quote, and backslash are not in the set.`,
    v.seed == null || v.seed === ''
      ? 'The password is generated in this browser with crypto.getRandomValues. It is not sent to ClearCalc. Generate a new one if this one was shown on a shared screen.'
      : 'This particular password used a fixed seed so the example can be checked. The form does not send a seed. Calculate uses crypto.getRandomValues, and the password is not sent to ClearCalc.'
  ]);
}

function timeSpan(v) {
  const mode = choice(v.mode, [1, 2], 'Choose a difference or an added duration');
  const start = parseDateParts(v.startdate, 'start date');
  const sh = whole(v.starthour, 0, 23, 'start hour');
  const sm = whole(v.startminute, 0, 59, 'start minute');
  const ss = whole(v.startsecond, 0, 59, 'start second');
  const startMs = Date.UTC(start.year, start.month - 1, start.day, sh, sm, ss);
  if (mode === 2) {
    const days = whole(v.adddays, 0, 100000, 'days to add');
    const hours = whole(v.addhours, 0, 23, 'hours to add');
    const minutes = whole(v.addminutes, 0, 59, 'minutes to add');
    const seconds = whole(v.addseconds, 0, 59, 'seconds to add');
    const delta = (((days * 24 + hours) * 60 + minutes) * 60 + seconds) * 1000;
    const landed = new Date(startMs + delta);
    const stamp = landed.toISOString().slice(0, 19).replace('T', ' ');
    return result(stamp + ' UTC', [
      `Added ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds.`,
      'The arithmetic uses UTC calendar fields so a daylight-saving transition is not applied. The clock you typed is treated as a UTC reading.',
      'Moving a clock between named time zones is the time-zone converter. This page does not know whether you meant Eastern or British time.',
      'A negative duration is not a field. Swap the dates in the difference mode if you need a signed gap.'
    ]);
  }
  const end = parseDateParts(v.enddate, 'end date');
  const eh = whole(v.endhour, 0, 23, 'end hour');
  const em = whole(v.endminute, 0, 59, 'end minute');
  const es = whole(v.endsecond, 0, 59, 'end second');
  const endMs = Date.UTC(end.year, end.month - 1, end.day, eh, em, es);
  const seconds = Math.round((endMs - startMs) / 1000);
  return result(formatSignedDuration(seconds), [
    `Total seconds: ${seconds}`,
    seconds < 0 ? 'The end is before the start, so the duration is negative.' : 'The end is on or after the start.',
    'Both clocks are read as UTC fields. A local daylight-saving change between them is not inserted.',
    'The hours calculator is a clock without a date. The date-difference calculator counts calendar days and does not look at the clock. This page uses both.'
  ]);
}

function bodySurface(v) {
  const units = choice(v.units, [1, 2], 'Choose metric or imperial');
  const height = positive(v.height, 'height');
  const weight = positive(v.weight, 'weight');
  const cm = units === 1 ? height : height * 2.54;
  const kg = units === 1 ? weight : weight * 0.45359237;
  const mosteller = Math.sqrt(cm * kg / 3600);
  const dubois = 0.007184 * cm ** 0.725 * kg ** 0.425;
  return result(`${loose(mosteller, 4)} m²`, [
    `Mosteller: √(height cm × weight kg / 3600) = ${loose(mosteller, 6)} m²`,
    `Du Bois: 0.007184 × height^0.725 × weight^0.425 = ${loose(dubois, 6)} m²`,
    units === 2 ? `Converted with 1 inch = 2.54 cm and 1 pound = 0.45359237 kg, giving ${loose(cm, 2)} cm and ${loose(kg, 2)} kg.` : 'The inputs were already centimetres and kilograms.',
    'The headline is Mosteller. Du Bois is the second line. They will not match, and neither one is a dose.',
    'Do not use this area to calculate a medicine dose. A prescriber uses a regimen, a renal and hepatic check, and a formula specified for that drug. This page only evaluates the two published area equations.'
  ]);
}

function bac(v) {
  const sex = choice(v.sex, [1, 2], 'Choose a Widmark factor');
  const units = choice(v.units, [1, 2], 'Choose a weight unit');
  const weight = positive(v.weight, 'body weight');
  const drinks = nonNegative(v.drinks, 'number of drinks');
  const gramsEach = positive(v.grams, 'grams of alcohol per drink');
  const hours = nonNegative(v.hours, 'hours');
  const elimination = nonNegative(v.elimination, 'elimination rate');
  const r = sex === 1 ? 0.68 : 0.55;
  const kg = units === 1 ? weight : weight * 0.45359237;
  const grams = drinks * gramsEach;
  const raw = (grams / (kg * 1000 * r)) * 100;
  const value = raw - elimination * hours;
  const shown = Math.max(0, value);
  return result(`${fixed(shown, 3)}%`, [
    `Alcohol ${loose(grams, 2)} g. Body water factor r = ${r} (${sex === 1 ? 'the male Widmark average' : 'the female Widmark average'}). Weight ${loose(kg, 2)} kg.`,
    `Widmark estimate before elimination: ${fixed(raw, 4)} g/dL, which is the same figure as a percent.`,
    `Subtracted ${loose(elimination, 4)} g/dL per hour × ${loose(hours, 2)} hours.`,
    value < 0 ? 'The subtraction passed zero, so the headline is 0. The linear clock does not go negative.' : 'The headline is the estimate after that subtraction.',
    'A US standard drink is often counted as 14 g of ethanol. The grams-per-drink box is yours to set. The elimination default of 0.015 is an average assumption, not your measured rate.',
    'This is not a breath test, a blood test, or a legal result. Absorption, food, and the time course are not modeled. Do not use it to decide whether to drive.'
  ]);
}

function pregnancyGain(v) {
  const units = choice(v.units, [1, 2], 'Choose metric or imperial');
  const height = positive(v.height, 'height');
  const weight = positive(v.weight, 'pre-pregnancy weight');
  const plurality = choice(v.plurality, [1, 2], 'Choose one baby or twins');
  const cm = units === 1 ? height : height * 2.54;
  const kg = units === 1 ? weight : weight * 0.45359237;
  const bmi = kg / (cm / 100) ** 2;
  let band;
  if (bmi < 18.5) band = 'underweight';
  else if (bmi < 25) band = 'normal';
  else if (bmi < 30) band = 'overweight';
  else band = 'obese';
  const singleton = {
    underweight: [28, 40, '1.0 lb per week (about 1.0 to 1.3) in the second and third trimesters'],
    normal: [25, 35, '1.0 lb per week (about 0.8 to 1.0) in the second and third trimesters'],
    overweight: [15, 25, '0.6 lb per week (about 0.5 to 0.7) in the second and third trimesters'],
    obese: [11, 20, '0.5 lb per week (about 0.4 to 0.6) in the second and third trimesters']
  };
  const twins = { normal: [37, 54], overweight: [31, 50], obese: [25, 42] };
  if (plurality === 2 && band === 'underweight') {
    return result('no IOM twin range', [
      `Pre-pregnancy BMI ${loose(bmi, 2)}, which is under 18.5.`,
      'The 2009 Institute of Medicine report set twin ranges for normal, overweight, and obese BMI. It did not set one for underweight. This page will not invent that range.',
      'A singleton pregnancy at this BMI uses 28 to 40 lb. That range is not a twin recommendation.',
      'BMI here uses kilograms and metres. It is a sorting key for the table, not a diagnosis.'
    ]);
  }
  const range = plurality === 1 ? singleton[band] : twins[band];
  const lowKg = range[0] * 0.45359237;
  const highKg = range[1] * 0.45359237;
  return result(`${range[0]} to ${range[1]} lb`, [
    `Pre-pregnancy BMI ${loose(bmi, 2)} (${band}). ${plurality === 1 ? 'Singleton' : 'Twin'} pregnancy.`,
    `${loose(lowKg, 2)} to ${loose(highKg, 2)} kg, using 1 lb = 0.45359237 kg.`,
    plurality === 1 ? `Second- and third-trimester rate in the IOM table: ${singleton[band][2]}.` : 'The twin table in the 2009 report is a total gain, not the singleton weekly rate.',
    'Source: Institute of Medicine and National Research Council, Weight Gain During Pregnancy: Reexamining the Guidelines (2009). The ranges are for one term pregnancy and the BMI categories used in that report.',
    'This is not advice for a particular pregnancy. Triplets and higher, a short interval, edema, and clinical limits are outside the table.'
  ]);
}

function gdp(v) {
  const consumption = num(v.consumption, 'consumption');
  const investment = num(v.investment, 'investment');
  const government = num(v.government, 'government spending');
  const exports = num(v.exports, 'exports');
  const imports = num(v.imports, 'imports');
  const wages = num(v.wages, 'wages');
  const rent = num(v.rent, 'rent');
  const interest = num(v.interest, 'interest');
  const profit = num(v.profit, 'profit');
  const depreciation = nonNegative(v.depreciation, 'depreciation');
  const taxes = num(v.taxes, 'taxes on production and imports');
  const subsidies = num(v.subsidies, 'subsidies');
  const expenditure = consumption + investment + government + (exports - imports);
  const income = wages + rent + interest + profit + depreciation + taxes - subsidies;
  return result(loose(expenditure, 4), [
    `Expenditure: C + I + G + (X − M) = ${loose(consumption)} + ${loose(investment)} + ${loose(government)} + (${loose(exports)} − ${loose(imports)})`,
    `Income-side total: wages + rent + interest + profit + depreciation + taxes − subsidies = ${loose(income, 4)}`,
    `Gap, expenditure minus income-side: ${loose(expenditure - income, 4)}. In a full set of accounts the two approaches meet after a statistical discrepancy. Here the gap is only the numbers you typed.`,
    'Net exports are exports minus imports. Typing imports as a positive number subtracts them. Do not type imports as a negative unless that is really your sign convention. The default treats imports as a positive amount to subtract.',
    'This is the textbook identity. It is not a BEA release, it has no price index, and a zero in a box is a zero, not a blank.'
  ]);
}

function heightPredictor(v) {
  const units = choice(v.units, [1, 2], 'Choose centimetres or inches');
  const sex = choice(v.sex, [1, 2], 'Choose the child');
  const mother = positive(v.mother, 'mother height');
  const father = positive(v.father, 'father height');
  const toCm = (value) => units === 1 ? value : value * 2.54;
  const motherCm = toCm(mother);
  const fatherCm = toCm(father);
  const target = sex === 1 ? (fatherCm + motherCm + 13) / 2 : (fatherCm + motherCm - 13) / 2;
  const low = target - 10;
  const high = target + 10;
  const toIn = (cm) => cm / 2.54;
  return result(`${loose(target, 1)} cm`, [
    sex === 1
      ? `Boy: (father + mother + 13 cm) / 2. Father ${loose(fatherCm, 2)} cm, mother ${loose(motherCm, 2)} cm.`
      : `Girl: (father + mother − 13 cm) / 2. Father ${loose(fatherCm, 2)} cm, mother ${loose(motherCm, 2)} cm.`,
    `${loose(toIn(target), 2)} inches.`,
    `An approximate interval of ±10 cm is ${loose(low, 1)} to ${loose(high, 1)} cm (${loose(toIn(low), 1)} to ${loose(toIn(high), 1)} in). That ±10 cm is the range often quoted with the Tanner mid-parental target. It is not a regression residual from a named growth study.`,
    'This is the mid-parental estimate. It is not the Khamis-Roche regression, and it does not use the child’s current height or age. A child can finish outside the interval.',
    units === 2 ? 'Inches were converted with 1 inch = 2.54 cm before the 13 cm adjustment, which is about 5.12 inches.' : 'The 13 cm adjustment is applied in centimetres.'
  ]);
}

export const nov14Applied = {
  'gas-mileage-calculator': gasMileage,
  'ohms-law-calculator': ohms,
  'horsepower-calculator': horsepower,
  'density-calculator': density,
  'speed-distance-time-calculator': speedTime,
  'wind-chill-calculator': windChill,
  'heat-index-calculator': heatIndex,
  'dew-point-calculator': dewPoint,
  'tire-size-calculator': tire,
  'resistor-color-calculator': resistor,
  'ipv4-subnet-calculator': subnet,
  'bandwidth-calculator': bandwidth,
  'measurement-converter': unitConverter,
  'payback-period-calculator': payback,
  'depreciation-calculator': depreciation,
  'cagr-calculator': cagr,
  'currency-converter': currency,
  'dice-roller': dice,
  'password-generator': password,
  'time-span-calculator': timeSpan,
  'body-surface-area-calculator': bodySurface,
  'bac-calculator': bac,
  'pregnancy-weight-gain-calculator': pregnancyGain,
  'gdp-calculator': gdp,
  'height-predictor-calculator': heightPredictor
};
