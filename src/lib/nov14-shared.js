// Shared checks and formatters for the 14 November calculators.
// Each result is plain text. The page inserts it as text, not HTML.

export const fixed = (value, digits) => new Intl.NumberFormat('en-US', { minimumFractionDigits: digits, maximumFractionDigits: digits }).format(value);
export const loose = (value, digits = 6) => new Intl.NumberFormat('en-US', { maximumFractionDigits: digits }).format(value);
export const usd = (value) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value);

export function num(value, label) {
  const n = typeof value === 'number' ? value : Number(String(value ?? '').trim());
  if (!Number.isFinite(n)) throw new Error(`Enter a ${label}`);
  return n;
}

export function nonNegative(value, label) {
  const n = num(value, label);
  if (n < 0) throw new Error(`Enter a ${label} of zero or more`);
  return n;
}

export function positive(value, label) {
  const n = num(value, label);
  if (n <= 0) throw new Error(`Enter a ${label} above zero`);
  return n;
}

export function whole(value, min, max, label) {
  const n = num(value, label);
  if (!Number.isInteger(n) || n < min || n > max) throw new Error(`Enter a whole ${label} from ${min} to ${max}`);
  return n;
}

export function choice(value, allowed, label) {
  const n = Number(value);
  if (!allowed.includes(n)) throw new Error(label);
  return n;
}

export function numberList(text, label, minCount, maxCount = 100) {
  const raw = String(text ?? '').trim();
  if (!raw) throw new Error(`Enter ${label}`);
  const parts = raw.split(/[,;\s]+/).filter(Boolean);
  if (parts.length < minCount) throw new Error(`Enter at least ${minCount} ${label}`);
  if (parts.length > maxCount) throw new Error(`Enter at most ${maxCount} ${label}`);
  const values = parts.map((part) => Number(part));
  if (values.some((item) => !Number.isFinite(item))) throw new Error(`Use only numbers, separated by commas, for ${label}`);
  return values;
}

export function integerList(text, label, minCount, maxCount, min, max) {
  const values = numberList(text, label, minCount, maxCount);
  if (values.some((item) => !Number.isInteger(item) || item < min || item > max)) {
    throw new Error(`Use whole ${label} from ${min} to ${max}`);
  }
  return values;
}

export function result(headline, details) {
  return { headline, details };
}

export function parseDateParts(value, label) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(value ?? '').trim());
  if (!match) throw new Error(`Enter a ${label} as YYYY-MM-DD`);
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  if (year < 1 || year > 9999) throw new Error(`Enter a ${label} year from 1 to 9999`);
  const utc = Date.UTC(year, month - 1, day);
  const check = new Date(utc);
  if (check.getUTCFullYear() !== year || check.getUTCMonth() !== month - 1 || check.getUTCDate() !== day) {
    throw new Error(`Enter a real calendar ${label}`);
  }
  return { year, month, day, utc };
}

export function formatSignedDuration(totalSeconds) {
  const sign = totalSeconds < 0 ? -1 : 1;
  let rest = Math.abs(totalSeconds);
  const days = Math.floor(rest / 86400);
  rest -= days * 86400;
  const hours = Math.floor(rest / 3600);
  rest -= hours * 3600;
  const minutes = Math.floor(rest / 60);
  const seconds = rest - minutes * 60;
  const parts = [];
  if (days) parts.push(`${days} day${days === 1 ? '' : 's'}`);
  if (hours || days) parts.push(`${hours} hour${hours === 1 ? '' : 's'}`);
  if (minutes || hours || days) parts.push(`${minutes} minute${minutes === 1 ? '' : 's'}`);
  parts.push(`${seconds} second${seconds === 1 ? '' : 's'}`);
  return `${sign < 0 ? '−' : ''}${parts.join(' ')}`;
}

export function cryptoIndex(span) {
  if (!Number.isInteger(span) || span <= 0 || span > 0x100000000) throw new Error('The random range is not valid');
  const range = 0x100000000;
  const limit = range - (range % span);
  const buf = new Uint32Array(1);
  let draw;
  do {
    crypto.getRandomValues(buf);
    draw = buf[0];
  } while (draw >= limit);
  return draw % span;
}

export function gcdBig(a, b) {
  let x = a < 0n ? -a : a;
  let y = b < 0n ? -b : b;
  while (y) {
    const next = x % y;
    x = y;
    y = next;
  }
  return x;
}

export function formatBig(value) {
  const negative = value < 0n;
  const digits = (negative ? -value : value).toString();
  const grouped = digits.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return negative ? `−${grouped}` : grouped;
}
