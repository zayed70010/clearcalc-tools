import { nov14Page as page } from './nov14-page.js';

const math = 'math-and-school';

export const nov14MathB = {
  'quadratic-formula-calculator': page({
    slug: 'quadratic-formula-calculator',
    title: 'Quadratic Formula Calculator | ClearCalc',
    h1: 'Quadratic Formula Calculator',
    description: 'Quadratic formula for ax² + bx + c = 0. a = 1, b = −5, and c = 6 has discriminant 1 and the real roots 3 and 2.',
    intro: [
      'The quadratic formula solves ax² + bx + c = 0. With a = 1, b = −5, and c = 6 the discriminant b² − 4ac is 25 − 24 = 1. The two roots are (5 ± 1) / 2, so x = 3 and x = 2. Substituting either root back gives 0: 9 − 15 + 6 = 0, and 4 − 10 + 6 = 0.',
      'The nth-root page takes one number to a whole-number root. The square root inside this formula is that kind of operation, applied to the discriminant. The exponent page raises one base to one power. This page keeps a, b, and c separate and names which case the discriminant falls into.',
      'A coefficient a of 0 is not forced through the quadratic formula. The equation is then linear, bx + c = 0, provided b is not 0 as well. If a and b are both 0 there is no equation to solve, and the page rejects the input.'
    ],
    steps: [
      'Enter a, b, and c. The sample is 1, −5, and 6, the coefficients of x² − 5x + 6.',
      'Press Calculate. The headline lists the real roots, one repeated real root, a complex conjugate pair, or the single linear root.',
      'Read the discriminant line. A positive value means two real roots, zero means a repeated root, and a negative value means the roots are not real.',
      'Substitute a reported real root back into ax² + bx + c. A last-digit difference is display rounding, not a second root.'
    ],
    howHeading: 'How the quadratic formula is applied',
    howItWorks: [
      'For a nonzero a, the discriminant is D = b² − 4ac. When D is positive the roots are (−b + √D) / (2a) and (−b − √D) / (2a). When D is 0 those two expressions meet, and the headline is the single repeated root. x² − 6x + 9 has a = 1, b = −6, c = 9, D = 0, and the repeated root x = 3.',
      'When D is negative the page still uses the quadratic formula, in complex form. The real part is −b / (2a). The imaginary magnitude is √|D| / |2a|. The printed ± term is that magnitude when a is positive, and the negative of that magnitude when a is negative, which swaps the two conjugates and leaves the pair unchanged. a = 1, b = 0, c = 1 has D = −4, real part negative zero, and imaginary magnitude 1, so the headline is -0 ± 1 i. Those roots are i and −i.'
    ],
    formula: 'D = b² − 4ac\nIf D ≥ 0 and a ≠ 0: x = (−b ± √D) / (2a)\nIf D < 0: real part = −b / (2a), imaginary magnitude = √|D| / |2a|\nIf a = 0 and b ≠ 0: x = −c / b\nIf a = 0 and b = 0: rejected',
    formulaNotes: [
      '1, −5, 6 gives D = 1. (5 + 1) / 2 = 3 and (5 − 1) / 2 = 2. The order in the headline follows +√ first, then −√.',
      '0, 2, −4 never forms a discriminant. x = −(−4) / 2 = 2. That is the solution of 2x − 4 = 0.'
    ],
    examplesHeading: 'Worked quadratic examples',
    samples: [
      { title: 'x² − 5x + 6', overrides: {}, blurb: 'a, b, and c are 1, −5, and 6. The discriminant is 1, so both roots are real. The +√ root is 3 and the −√ root is 2. Each one substitutes back to 0.' },
      { title: 'x² + 1, complex roots', overrides: { a: 1, b: 0, c: 1 }, blurb: 'The discriminant is −4. The real part −b / (2a) is negative zero because b itself is 0, so the page prints -0 ± 1 i. The equation x² + 1 = 0 has the conjugate solutions i and −i.' },
      { title: 'Linear fallback, a = 0', overrides: { a: 0, b: 2, c: -4 }, blurb: 'a is 0 and b is 2, so the equation is 2x − 4 = 0. x = −c / b = 4 / 2 = 2. A quadratic discriminant is not used in this branch.' }
    ],
    table: { heading: 'Three equations on this page', caption: 'Each headline is this calculator. Complex roots are printed as a conjugate pair. A zero leading coefficient uses the linear formula.', headers: ['Equation', 'Roots'] },
    limitsHeading: 'What the quadratic formula page leaves out',
    limits: [
      'It stops at degree 2. A cubic or higher polynomial is not solved here, and there is no factoring assistant that searches for rational roots of a longer polynomial.',
      'It does not plot the parabola, name the vertex, or report the axis of symmetry. The slope page is for a straight line through two points.',
      'When a is negative and the discriminant is negative, the ± sign is applied to a negative magnitude. a = −1, b = 0, c = −1 prints 0 ± -1 i. The two values are still the conjugates i and −i.',
      'A last displayed digit can differ from an exact radical. The page asks you to substitute a real root back into ax² + bx + c rather than treat a rounding residue as another root. a and b both 0 is rejected because no equation remains.'
    ],
    disclaimer: 'This is the quadratic formula applied to three coefficients you type. It is school algebra, not a computer-algebra proof, and it is not medical, financial, or legal advice.',
    faqs: [
      { q: 'Why do a = 1, b = −5, and c = 6 give the roots 3 and 2?', a: 'b² − 4ac = (−5)² − 4×1×6 = 25 − 24 = 1. Then (−b ± √1) / (2a) = (5 ± 1) / 2, which is 3 or 2. Both values make x² − 5x + 6 equal 0.' },
      { q: 'What does the quadratic formula calculator show for a = 1, b = 0, c = 1?', a: 'The discriminant is −4, so the roots are not real. The headline is -0 ± 1 i. The real part is zero, printed with a minus because −b is negative zero, and the imaginary magnitude is 1. The solutions are i and −i.' },
      { q: 'Why does a = 0, b = 2, c = −4 return x = 2?', a: 'A zero quadratic coefficient leaves the linear equation bx + c = 0. x = −c / b = 4 / 2 = 2. The page says a discriminant is not used when a is 0.' },
      { q: 'What if a and b in the quadratic formula calculator are both 0?', a: 'The page rejects the input. With a and b both 0 there is no equation in x to solve, whether c is 0 or not.' }
    ],
    relatedLinks: [
      { slug: 'nth-root-calculator', label: 'Nth root calculator', note: 'The 4th root of 81 is 3. The square root of a positive discriminant is the same idea with degree 2.' },
      { slug: 'exponent-calculator', label: 'Exponent calculator', note: '2 raised to 10 is 1,024. That page raises one base. This page solves ax² + bx + c = 0.' },
      { slug: 'slope-calculator', label: 'Slope calculator', note: 'The line through (1, 2) and (4, 8) has slope 2. A quadratic graph is a parabola, and this page reports roots rather than a slope.' }
    ]
  }),
  'slope-calculator': page({
    slug: 'slope-calculator',
    title: 'Slope Calculator | ClearCalc',
    h1: 'Slope Calculator',
    description: 'Slope through (1, 2) and (4, 8) is 2. Rise 6 over run 3, and the line is y = 2x + 0.',
    intro: [
      'Slope is rise over run for the line through two points. From (1, 2) to (4, 8) the rise is 8 − 2 = 6 and the run is 4 − 1 = 3, so the slope is 6 / 3 = 2. The y-intercept is y1 − m x1 = 2 − 2 × 1 = 0, and the line is y = 2x + 0. The line rises as x increases.',
      'The Pythagorean theorem page turns two legs into a hypotenuse. Legs 3 and 4 give 5.0000. This page divides rise by run and keeps the sign. It reports the slope, not the straight-line distance √(rise² + run²).',
      'Equal x values are rejected. The run would be 0, the line is vertical, and a vertical line has no finite slope. Equal y values are allowed. The rise is 0, the slope is 0, and the line is horizontal.'
    ],
    steps: [
      'Enter the first point as x₁ and y₁. The sample is (1, 2).',
      'Enter the second point as x₂ and y₂. The sample is (4, 8).',
      'Press Calculate. The headline is the slope. The detail lines show rise, run, and the y-intercept.',
      'Read the sentence under the intercept. It says whether the line rises, falls, or is horizontal.'
    ],
    howHeading: 'How slope and the intercept are calculated',
    howItWorks: [
      'Slope m = (y₂ − y₁) / (x₂ − x₁). The subtraction order is second point minus first point on both coordinates, so swapping the labels of the two points changes the sign of the rise and the run together and leaves m unchanged. The intercept is b = y₁ − m x₁, and the line is written y = mx + b.',
      'A positive slope rises as x increases. A negative slope falls. From (0, 6) to (3, 0) the rise is −6 and the run is 3, so m = −2 and the intercept is 6: y = −2x + 6. A horizontal sample from (0, 5) to (4, 5) has rise 0, slope 0, and intercept 5, written y = 0x + 5. A pair such as (2, 1) and (2, 5) is rejected because the run is 0.'
    ],
    formula: 'm = (y₂ − y₁) / (x₂ − x₁)\nb = y₁ − m x₁\nLine: y = mx + b\nEqual x values are rejected (vertical line)',
    formulaNotes: [
      '(8 − 2) / (4 − 1) = 6 / 3 = 2. The intercept 2 − 2 × 1 is 0, so the sample line passes through the origin.',
      'A slope of 0 still has an intercept. Horizontal points (0, 5) and (4, 5) give y = 5, written y = 0x + 5.'
    ],
    examplesHeading: 'Worked slope examples',
    samples: [
      { title: 'Points (1, 2) and (4, 8)', overrides: {}, blurb: 'Rise 6, run 3, slope 2. The intercept is 0, so the line is y = 2x + 0. The slope is positive, and the line rises as x increases.' },
      { title: 'A horizontal line', overrides: { x1: 0, y1: 5, x2: 4, y2: 5 }, blurb: 'The y values match, so the rise is 0 and the slope is 0. The run is 4, which is enough to define the line. The intercept is 5.' },
      { title: 'A line that falls', overrides: { x1: 0, y1: 6, x2: 3, y2: 0 }, blurb: 'Rise −6 over run 3 is slope −2. The intercept is 6, and the line is y = −2x + 6. The slope is negative, so the line falls as x increases.' }
    ],
    table: { heading: 'Slopes from three pairs of points', caption: 'Each headline is this calculator. A vertical pair is rejected and does not appear here.', headers: ['Points', 'Slope'] },
    limitsHeading: 'What this slope page does not do',
    limits: [
      'A vertical line is rejected. The two x values being equal means the run is 0, and the page will not return an infinite slope.',
      'It does not measure the distance between the points. That length is the Pythagorean page, which for legs equal to a rise of 3 and a run of 4 returns 5.0000.',
      'It does not fit a line to more than two points, and it does not report a correlation. Two points determine one line when the x values differ.',
      'The intercept uses the first point you typed, y₁ − m x₁. Swapping the point labels keeps the slope and produces the same line, even if an intermediate display of rise and run changes sign.'
    ],
    disclaimer: 'Slope here is the ratio of two coordinate differences you type. It is not a grade of a physical road, and it is not medical, financial, or legal advice.',
    faqs: [
      { q: 'Why is the slope through (1, 2) and (4, 8) equal to 2?', a: 'The rise is 8 − 2 = 6 and the run is 4 − 1 = 3. 6 / 3 = 2. The headline is slope 2, and the line is y = 2x + 0.' },
      { q: 'Why does the slope calculator reject a vertical line?', a: 'Equal x values make the run 0. Division by that run is undefined, so a vertical line has no finite slope. The page stops with that error instead of printing infinity.' },
      { q: 'What y-intercept does (1, 2) and (4, 8) produce?', a: '0. The intercept is y₁ − m x₁ = 2 − 2 × 1. The detail line writes the line as y = 2x + 0.' },
      { q: 'Can the slope calculator return 0?', a: 'Yes. Points with the same y value, such as (0, 5) and (4, 5), have rise 0 and slope 0. The line is horizontal, and the intercept is that shared y value.' }
    ],
    relatedLinks: [
      { slug: 'pythagorean-theorem-calculator', label: 'Pythagorean theorem calculator', note: 'Legs 3 and 4 give hypotenuse 5.0000. Slope divides those legs. That page takes the square root of the sum of their squares.' },
      { slug: 'ratio-calculator', label: 'Ratio calculator', note: '1920:1080 simplifies to 16:9. Slope is a signed ratio of rise to run, not a reduced pair of whole numbers.' },
      { slug: 'quadratic-formula-calculator', label: 'Quadratic formula calculator', note: 'a = 1, b = −5, c = 6 has roots 3 and 2. Those are x-intercepts of a parabola, not the slope of a line.' }
    ]
  }),
  'logarithm-calculator': page({
    slug: 'logarithm-calculator',
    title: 'Logarithm Calculator | ClearCalc',
    h1: 'Logarithm Calculator',
    description: 'log10 of 1,000 is 3, because 10³ = 1,000. The page also returns ln and log2.',
    intro: [
      'A logarithm answers which exponent produces a number from a chosen base. log10(1,000) is 3 because 10³ = 1,000. The headline is 3, and the check line raises the base back to that result and recovers 1,000.',
      'The exponent page starts from the base and the exponent and returns the power. 2 raised to 10 is 1,024. This page starts from the number and the base and returns the exponent. They are inverse questions, and the fields are not the same.',
      'The argument has to be positive. Zero and negative numbers are rejected because a real logarithm is not defined for them on this page. A custom base has to be positive and not 1. Base 10, base e, and base 2 are separate choices and do not read the custom-base field.'
    ],
    steps: [
      'Enter a positive number. The sample is 1,000.',
      'Choose base 10, natural log, base 2, or a custom base. The sample is base 10.',
      'If you chose a custom base, enter that base. It must be positive and not 1.',
      'Press Calculate. The headline is the exponent. The check line raises the base to that exponent.'
    ],
    howHeading: 'How a logarithm is calculated',
    howItWorks: [
      'The page computes ln(number) / ln(base), which is the change-of-base formula. Base 10 uses 10, natural log uses e (about 2.718281828), and base 2 uses 2. A custom base uses the number you type, after rejecting anything that is not positive and not equal to 1. log base 3 of 81 is 4, because 3⁴ = 81.',
      'Natural log of e itself is 1. The sample types the base-e choice and the value e, and the headline is 1. The detail line prints the argument as 2.718282, which is e shown to the page’s usual six digits, and it reminds you that the base is about 2.718281828. log2(8) is 3 because 2³ = 8. A result that is not a finite number is rejected.'
    ],
    formula: 'log_b(x) = ln(x) / ln(b)\nlog10 uses b = 10, ln uses b = e, log2 uses b = 2\nx must be positive\nA custom base must be positive and not 1',
    formulaNotes: [
      'log10(1,000) = 3, and 10³ = 1,000. The check uses the base and the result you were just shown.',
      'ln(e) = 1. log2(8) = 3. A custom example, log base 3 of 81, is 4.'
    ],
    examplesHeading: 'Worked logarithm examples',
    samples: [
      { title: 'log10 of 1,000', overrides: {}, blurb: 'Base 10 of 1,000 is 3. The check is 10³ = 1,000. The custom-base field is ignored because base 10 was selected.' },
      { title: 'Natural log of e', overrides: { value: Math.E, base: '2' }, blurb: 'The base choice is natural log, so the base is e. The value is e as well. ln(e) is 1. The printed argument is rounded to 2.718282 for display, and the base note still quotes e as about 2.718281828.' },
      { title: 'log2 of 8', overrides: { value: 8, base: '3' }, blurb: 'Base 2 of 8 is 3, because 2³ = 8. The same change-of-base division produces it. The custom base is not used.' }
    ],
    table: { heading: 'Three logarithms', caption: 'Each headline is this calculator. The argument is positive in every row. A custom base of 1 is rejected and is not shown.', headers: ['Logarithm', 'Value'] },
    limitsHeading: 'What this logarithm page rejects',
    limits: [
      'The argument must be positive. log of 0 and log of a negative number are rejected. There is no complex logarithm here.',
      'A custom base of 1, 0, or a negative number is rejected. The base must be positive and not 1. Bases between 0 and 1 are allowed, and the exponent can then be negative for a number greater than 1.',
      'The four base choices are base 10, e, 2, and custom. Choosing one of the named bases ignores the custom field, even if that field still shows a number.',
      'The check line rounds the power it prints. A headline that is an integer, such as 3, checks exactly. A long decimal can show a last-digit difference in the check and still be the computed logarithm.'
    ],
    disclaimer: 'This is the change-of-base logarithm of a positive number. It is not a decibel scale, a pH scale, or medical, financial, or legal advice.',
    faqs: [
      { q: 'Why is log10 of 1,000 equal to 3?', a: 'Because 10³ = 1,000. The page uses ln(1,000) / ln(10), and the headline is 3. The check line raises 10 to that result and gets 1,000.' },
      { q: 'What does the natural-log choice return for the value e?', a: '1. Natural log uses base e, about 2.718281828. The detail line prints the argument as 2.718282 and states that the base is e.' },
      { q: 'Why is log2 of 8 equal to 3?', a: '2³ = 8, so the exponent is 3. Select base 2 and enter 8. The custom-base box is not part of that calculation.' },
      { q: 'Why does a custom logarithm base of 1 fail?', a: 'A base of 1 cannot produce a useful exponent: 1 to any power is 1. The page also rejects a base that is 0 or negative. The base must be positive and not 1.' }
    ],
    relatedLinks: [
      { slug: 'exponent-calculator', label: 'Exponent calculator', note: '2 raised to 10 is 1,024. A logarithm asks for the exponent. That page starts from an exponent you already know.' },
      { slug: 'scientific-notation-calculator', label: 'Scientific notation calculator', note: '12,345 is 1.2345 × 10^4. The exponent 4 is the integer part of the base-10 logarithm of 12,345.' },
      { slug: 'nth-root-calculator', label: 'Nth root calculator', note: 'The 4th root of 81 is 3, the same statement as 81^(1/4) = 3. A logarithm returns an exponent rather than a root.' }
    ]
  }),
  'nth-root-calculator': page({
    slug: 'nth-root-calculator',
    title: 'Nth Root Calculator | ClearCalc',
    h1: 'Nth Root Calculator',
    description: 'The 4th root of 81 is 3, because 3⁴ = 81. An even root of a negative number is rejected.',
    intro: [
      'An nth root asks for a real number which, raised to a whole degree, returns the value you typed. The 4th root of 81 is 3, and 3⁴ = 81. The degree is a whole number from 2 to 100. Degree 2 is the square root. Degree 3 is the cube root.',
      'The exponent page can write a root as a unit-fraction power when the base is not negative. 9^0.5 is 3 there. A negative base with a fractional exponent is rejected on that page. This page takes the degree as a whole number and, when the degree is odd, returns the negative real root of a negative number on purpose.',
      'An even root of a negative number is rejected. No real number raised to an even power is negative. The quadratic page is the one that prints a complex conjugate pair. This page stays with real roots.'
    ],
    steps: [
      'Enter the number. The sample is 81.',
      'Enter the root degree, a whole number from 2 to 100. The sample is 4.',
      'Press Calculate. The headline is the real root. A negative number with an even degree stops with an error.',
      'Check by raising the result to the degree. The detail line does that multiplication for you.'
    ],
    howHeading: 'How a real nth root is calculated',
    howItWorks: [
      'The page takes the absolute value, raises it to the power 1/degree, and then restores a minus sign when the original number is negative. That sign is restored only after the even-degree rejection, so a negative result appears only for an odd degree. The principal real root of a positive number is the non-negative one. The 4th root of 81 is 3, not −3, even though (−3)⁴ is also 81.',
      'The cube root of −8 is −2, because the degree 3 is odd and (−2)³ = −8. A positive root would not multiply back to a negative. The square root of 2 is the degree-2 root, printed as 1.41421356. Squaring that displayed value checks back to 2 at the precision the detail line shows. Degree 1 and degree 101 are outside 2 to 100 and are rejected.'
    ],
    formula: 'For value ≥ 0: root = value ^ (1 / degree)\nFor value < 0 and odd degree: root = −(|value| ^ (1 / degree))\nEven degree and value < 0: rejected\nDegree is a whole number from 2 to 100',
    formulaNotes: [
      '81^(1/4) = 3. The check is 3^4 = 81. The positive root is the one reported.',
      'The cube root of −8 is −2. The square root of 2 is 1.41421356 at the headline’s eight-digit display.'
    ],
    examplesHeading: 'Worked nth-root examples',
    samples: [
      { title: '4th root of 81', overrides: {}, blurb: 'Degree 4 of 81 is 3. Raising 3 to the 4th power returns 81. The principal real root is the positive one.' },
      { title: 'Cube root of −8', overrides: { value: -8, degree: 3 }, blurb: 'Degree 3 is odd, so a negative input has a negative real root. (−2)³ = −8. The headline is −2.' },
      { title: 'Square root of 2', overrides: { value: 2, degree: 2 }, blurb: 'Degree 2 is the square root. The headline is 1.41421356. The check squares that root and returns 2 at the displayed precision.' }
    ],
    table: { heading: 'Three real roots', caption: 'Each headline is this calculator. An even root of a negative number is rejected and is not a row.', headers: ['Root', 'Result'] },
    limitsHeading: 'What this root page will not return',
    limits: [
      'An even root of a negative number is not real on this page. The square root of −16 is rejected. The quadratic formula page is where a negative discriminant becomes a complex pair.',
      'The degree must be a whole number from 2 to 100. Degree 1 is rejected, and so is a degree above 100. A fractional degree belongs on the exponent page, and only when the base is not negative.',
      'A positive number has two real even roots in the square-root sense, positive and negative. This page reports the non-negative principal root. The 4th root of 81 is 3.',
      'The check line rounds the power it prints. For an integer result such as 3 or −2 the check is exact. For √2 the squared display matches 2 at the digits that line shows.'
    ],
    disclaimer: 'This is a real nth root of one number. It is not a complex-root solver, and it is not medical, financial, or legal advice.',
    faqs: [
      { q: 'Why is the 4th root of 81 equal to 3?', a: '3 × 3 × 3 × 3 = 81. The degree is 4, the value is 81, and the principal real root is the positive one. The headline is 3.' },
      { q: 'Why is the cube root of −8 equal to −2?', a: 'The degree 3 is odd, so the negative root is the real result. (−2)³ = −8. A positive 2 would cube to positive 8.' },
      { q: 'Why does the nth-root calculator reject the square root of a negative?', a: 'An even power of a real number is never negative. The page rejects an even degree with a negative value. It does not invent a complex root.' },
      { q: 'What does this page return for the square root of 2?', a: '1.41421356, the degree-2 root printed to eight digits. The detail line squares that display and checks it against 2.' }
    ],
    relatedLinks: [
      { slug: 'exponent-calculator', label: 'Exponent calculator', note: '2 raised to 10 is 1,024. A root is a fractional power. A negative base with a fractional exponent is rejected there.' },
      { slug: 'quadratic-formula-calculator', label: 'Quadratic formula calculator', note: 'a = 1, b = −5, c = 6 has real roots 3 and 2. A negative discriminant on that page is a complex pair, which this root page does not produce.' },
      { slug: 'pythagorean-theorem-calculator', label: 'Pythagorean theorem calculator', note: 'Legs 3 and 4 give hypotenuse 5.0000, from √(3² + 4²). That is one square root of a sum of squares.' }
    ]
  }),
  'lcm-calculator': page({
    slug: 'lcm-calculator',
    title: 'LCM Calculator | ClearCalc',
    h1: 'LCM Calculator',
    description: 'The least common multiple of 4, 6, and 8 is 24. Each of 4, 6, and 8 divides 24, and no smaller positive integer works.',
    intro: [
      'The least common multiple of a list of positive whole numbers is the smallest positive integer that each of them divides. For 4, 6, and 8 that integer is 24. 24 / 4 = 6, 24 / 6 = 4, and 24 / 8 = 3. 12 is a multiple of 4 and of 6, but 8 does not divide 12, so 12 is not a common multiple of all three.',
      'For two numbers the identity is LCM(a, b) = a × b / GCF(a, b). The GCF page is where that shared factor is the headline, and where every common factor is listed. This page folds the two-number identity from left to right when you type more than two numbers, and it reports only the least common multiple.',
      'Every entry has to be a whole number from 1 to 1,000,000,000,000, and the list needs at least two numbers and at most 20. Zero is rejected. The page does not list the other multiples, only the least one.'
    ],
    steps: [
      'Type positive whole numbers separated by commas. The sample is 4, 6, 8.',
      'Use at least two numbers. A single number is rejected.',
      'Press Calculate. The headline is the least common multiple.',
      'Check that each input divides the headline. If one of them does not, the number is not a common multiple.'
    ],
    howHeading: 'How the least common multiple is calculated',
    howItWorks: [
      'The page starts with the first number and folds LCM(current, next) = current × next / GCF(current, next), using exact integer arithmetic. For 4, 6, and 8 the first pair gives LCM(4, 6) = 24 / 2 = 12, because the greatest common factor of 4 and 6 is 2. Then LCM(12, 8) = 96 / 4 = 24. The headline is 24.',
      'Coprime inputs have greatest common factor 1, so the least common multiple is the product. LCM(7, 11) = 77. LCM(15, 25) = 375 / 5 = 75, because the greatest common factor is 5 and 15 × 25 / 5 = 75. The fold is associative for positive integers, so the order of the list does not change the least common multiple.'
    ],
    formula: 'LCM(a, b) = a × b / GCF(a, b)\nMore than two numbers: fold that identity from left to right\nInputs: 2 to 20 whole numbers, each from 1 to 1,000,000,000,000',
    formulaNotes: [
      '4, 6, 8 folds as LCM(4, 6) = 12 and LCM(12, 8) = 24. Each of 4, 6, and 8 divides 24.',
      '7 and 11 are coprime, so the least common multiple is 7 × 11 = 77. 15 and 25 share a factor of 5, so their least common multiple is 75, not 375.'
    ],
    examplesHeading: 'Worked LCM examples',
    samples: [
      { title: '4, 6, and 8', overrides: {}, blurb: 'Three numbers, folded left to right. LCM(4, 6) is 12 and LCM(12, 8) is 24. 24 is the smallest positive integer that 4, 6, and 8 all divide.' },
      { title: '15 and 25', overrides: { numbers: '15, 25' }, blurb: 'The product is 375 and the greatest common factor is 5, so the least common multiple is 375 / 5 = 75. 15 divides 75 and 25 divides 75.' },
      { title: '7 and 11, no common factor', overrides: { numbers: '7, 11' }, blurb: 'The greatest common factor is 1, so the least common multiple is the product, 77. Neither prime divides the other.' }
    ],
    table: { heading: 'Least common multiples', caption: 'Each headline is this calculator. The list is the positive whole numbers you type, from two to twenty of them.', headers: ['Numbers', 'LCM'] },
    limitsHeading: 'What the LCM page does not list',
    limits: [
      'It reports the least common multiple only. It does not print the later common multiples 48, 72, and so on for 4, 6, and 8.',
      'It does not list the shared factors. The GCF page does that. For 48 and 18 the greatest common factor is 6 and the common factors are 1, 2, 3, and 6.',
      'Zero and negative integers are rejected. Each number has to be a whole number from 1 to 1,000,000,000,000. One number is not enough, and 21 numbers is too many.',
      'It does not find a least common multiple of fractions or decimals. A denominator’s least common multiple, used when adding fractions, starts from the whole denominators on the fraction page.'
    ],
    disclaimer: 'This is the least common multiple of the positive integers you type. It is school arithmetic, not a scheduling guarantee, and it is not medical, financial, or legal advice.',
    faqs: [
      { q: 'Why is the least common multiple of 4, 6, and 8 equal to 24?', a: 'LCM(4, 6) = 4 × 6 / 2 = 12, then LCM(12, 8) = 12 × 8 / 4 = 24. 4, 6, and 8 each divide 24, and no smaller positive integer is a multiple of all three.' },
      { q: 'How does the LCM calculator use the greatest common factor?', a: 'For two numbers, LCM(a, b) = a × b / GCF(a, b). The page folds that identity from left to right for a longer list. The division is exact integer arithmetic.' },
      { q: 'Why is the LCM of 7 and 11 equal to 77?', a: '7 and 11 share no factor other than 1, so the least common multiple is the product 77. The same rule gives LCM(15, 25) = 75, because those two share a factor of 5.' },
      { q: 'How many numbers can the LCM calculator take?', a: 'From 2 to 20 whole numbers, each from 1 to 1,000,000,000,000. A single number is rejected, and 0 is rejected.' }
    ],
    relatedLinks: [
      { slug: 'gcf-calculator', label: 'GCF calculator', note: 'The greatest common factor of 48 and 18 is 6, and the common factors are 1, 2, 3, and 6. LCM uses that factor in a × b / GCF.' },
      { slug: 'integer-factor-calculator', label: 'Factor calculator', note: '84 is 2^2 × 3 × 7. Prime factors show why a number divides a multiple. This page returns the multiple itself.' },
      { slug: 'fraction-calculator', label: 'Fraction calculator', note: 'Adding fractions builds a common denominator. That denominator is a common multiple of the two denominators you typed.' }
    ]
  }),
  'gcf-calculator': page({
    slug: 'gcf-calculator',
    title: 'GCF Calculator | ClearCalc',
    h1: 'GCF and Common Factor Calculator',
    description: 'The greatest common factor of 48 and 18 is 6. The common factors listed with it are 1, 2, 3, and 6.',
    intro: [
      'The greatest common factor of a list of positive whole numbers is the largest positive integer that divides every number in the list. For 48 and 18 that integer is 6. 48 = 2⁴ × 3 and 18 = 2 × 3², so the shared primes are one 2 and one 3, and 2 × 3 = 6. The page also lists every common factor: 1, 2, 3, and 6. The greatest of them is the headline.',
      'The LCM page uses this factor in the identity LCM(a, b) = a × b / GCF(a, b) and returns the least common multiple. The integer-factor page factors one integer, such as 84 = 2^2 × 3 × 7, and lists that integer’s own divisors. This page needs at least two numbers, because the common factors are the factors shared by the whole list.',
      'The common-factor list is the positive divisors of the greatest common factor, which is exactly the set of common divisors. When that greatest factor is larger than 10,000,000 the list is omitted and the headline is still the greatest factor. Inputs are whole numbers from 1 to 1,000,000,000,000, two to twenty of them.'
    ],
    steps: [
      'Type at least two positive whole numbers, separated by commas. The sample is 48, 18.',
      'Press Calculate. The headline is the greatest common factor.',
      'Read the common-factor line. For 48 and 18 it is 1, 2, 3, 6.',
      'If you need the prime factorization of just one of those numbers, use the factor page for that number alone.'
    ],
    howHeading: 'How the greatest common factor is calculated',
    howItWorks: [
      'The page folds the Euclidean algorithm from left to right: replace the current factor with GCF(current, next) until the list is finished. GCF(48, 18) runs 48 = 2 × 18 + 12, 18 = 1 × 12 + 6, 12 = 2 × 6 + 0, so the greatest common factor is 6. For 12, 18, and 30 the fold is GCF(12, 18) = 6 and GCF(6, 30) = 6. The common factors of that 6 are again 1, 2, 3, and 6.',
      'When the greatest common factor is 1, the numbers are coprime and the only common factor is 1. GCF(8, 15) = 1, and the list is just 1. That is a successful result, not a missing input. The headline is still that greatest factor when the factor is so large that the divisor list is skipped.'
    ],
    formula: 'GCF of a list: fold the Euclidean algorithm from left to right\nCommon factors: every positive divisor of that GCF, when the GCF is at most 10,000,000\nInputs: 2 to 20 whole numbers, each from 1 to 1,000,000,000,000',
    formulaNotes: [
      '48 and 18 give 6. The divisor list of 6 is 1, 2, 3, 6, and those are all the common factors of 48 and 18.',
      '8 and 15 give 1. The only common factor is 1. 12, 18, and 30 also give 6, the same headline as 48 and 18, from a longer list.'
    ],
    examplesHeading: 'Worked GCF examples',
    samples: [
      { title: '48 and 18', overrides: {}, blurb: 'The Euclidean algorithm ends at 6. Every common factor is listed: 1, 2, 3, 6. The headline is the greatest of those, 6.' },
      { title: '12, 18, and 30', overrides: { numbers: '12, 18, 30' }, blurb: 'GCF(12, 18) is 6, and 6 also divides 30, so the greatest common factor of all three is 6. The common factors are 1, 2, 3, and 6.' },
      { title: '8 and 15, coprime', overrides: { numbers: '8, 15' }, blurb: 'No prime is shared. The greatest common factor is 1, and the only common factor on the list is 1.' }
    ],
    table: { heading: 'Greatest common factors', caption: 'Each headline is this calculator. The detail line lists every common factor when the greatest one is at most 10,000,000.', headers: ['Numbers', 'GCF'] },
    limitsHeading: 'What the common-factor list leaves out',
    limits: [
      'One number is rejected. The form asks for two or more, because the common factors are what the numbers share. The factors of a single integer are on the factor page.',
      'The common-factor list is omitted when the greatest common factor is larger than 10,000,000. The headline is still that greatest factor.',
      'Zero and negatives are rejected. Each input is a whole number from 1 to 1,000,000,000,000, and the list holds at most 20 numbers.',
      'The page does not print a prime factorization of each input. 48 = 2⁴ × 3 is the reasoning above. The headline is the integer 6, and the factor page is where a single integer is written as a product of primes.'
    ],
    disclaimer: 'This is the greatest common factor of the positive integers you type, plus the divisor list of that factor when it is not huge. It is not medical, financial, or legal advice.',
    faqs: [
      { q: 'Why is the greatest common factor of 48 and 18 equal to 6?', a: '48 = 2⁴ × 3 and 18 = 2 × 3². The shared primes multiply to 2 × 3 = 6. The Euclidean algorithm reaches the same 6: 48 = 2 × 18 + 12, 18 = 1 × 12 + 6, and 12 is divisible by 6.' },
      { q: 'Which common factors does the page list for 48 and 18?', a: '1, 2, 3, and 6. Those are the positive divisors of the greatest common factor. The headline is 6, the greatest entry on that list.' },
      { q: 'What does a GCF of 1 mean for 8 and 15?', a: '8 and 15 share no divisor greater than 1. The page still returns a result: the headline is 1, and the only common factor listed is 1.' },
      { q: 'When does the GCF calculator omit the common-factor list?', a: 'When the greatest common factor is larger than 10,000,000. The headline is still that factor. The list is the part that is skipped.' }
    ],
    relatedLinks: [
      { slug: 'lcm-calculator', label: 'LCM calculator', note: 'The least common multiple of 4, 6, and 8 is 24. For two numbers, that multiple is a × b / GCF(a, b).' },
      { slug: 'integer-factor-calculator', label: 'Factor calculator', note: '84 is 2^2 × 3 × 7, with positive divisors 1, 2, 3, 4, 6, 7, 12, 14, 21, 28, 42, and 84. That is one integer, not a common factor of a list.' },
      { slug: 'fraction-calculator', label: 'Fraction calculator', note: 'Simplifying a fraction divides the numerator and the denominator by a common factor. This page finds that factor for a list of whole numbers.' }
    ]
  }),
  'integer-factor-calculator': page({
    slug: 'integer-factor-calculator',
    title: 'Factor Calculator | ClearCalc',
    h1: 'Factor and Prime Factorization Calculator',
    description: '84 factors as 2^2 × 3 × 7. The positive divisors are 1, 2, 3, 4, 6, 7, 12, 14, 21, 28, 42, and 84.',
    intro: [
      'Prime factorization writes one whole number as a product of primes, with repeated primes gathered into exponents. 84 = 2 × 2 × 3 × 7, which the page writes as 2^2 × 3 × 7. The headline is that product. The detail line also lists every positive divisor when the number is at most 10,000,000: for 84 those divisors are 1, 2, 3, 4, 6, 7, 12, 14, 21, 28, 42, and 84.',
      'The GCF page takes two or more numbers and returns what they share. The LCM page returns the least common multiple. This page takes one integer from 2 to 1,000,000,000,000. A prime is reported as itself: 13 has one prime factor, and the page says 13 is prime.',
      'The full divisor list is omitted above 10,000,000. The prime factorization is still complete. Trial division starts at 2, then tests odd candidates, and the remaining cofactor is prime once the candidate’s square passes it.'
    ],
    steps: [
      'Enter one whole number from 2 up to 1,000,000,000,000. The sample is 84.',
      'Press Calculate. The headline is the prime factorization, with exponents on repeated primes.',
      'Read the divisor line when it is present. 84 lists twelve positive divisors.',
      'A one-prime headline means the number is prime. 13 is 13, and its positive divisors are 1 and 13.'
    ],
    howHeading: 'How the prime factorization is built',
    howItWorks: [
      'The page divides out 2 for as long as the number is even, then tries 3, 5, 7, and the later odd integers, dividing out each prime as many times as it fits. Each successful division is one prime factor, counting repeats. 84 yields 2, 2, 3, and 7. Repeats collapse in the headline: two 2s become 2^2, and a prime that appears once is written without an exponent. The multiplication sign in 2^2 × 3 × 7 is the headline’s separator.',
      '100 yields 2, 2, 5, and 5, written 2^2 × 5^2. It is composite, and it has four prime factors counting repeats. Its positive divisors are 1, 2, 4, 5, 10, 20, 25, 50, and 100. A number such as 13 never divides until the cofactor is itself, so the headline is 13, the repeat count is 1, and the page calls it prime. The divisor list for a prime is 1 and the prime.'
    ],
    formula: 'Trial division: divide out 2, then odd integers, until the candidate’s square passes the cofactor\nHeadline: primes with repeats written as exponents, joined by ×\nPositive divisors are listed when the number is at most 10,000,000\nThe input is a whole number from 2 to 1,000,000,000,000',
    formulaNotes: [
      '84 = 2^2 × 3 × 7. That is four prime factors counting the repeated 2 twice, and 84 is composite. The divisor list has 12 entries.',
      '13 is prime, so the headline is 13 and the only positive divisors are 1 and 13. 100 = 2^2 × 5^2.'
    ],
    examplesHeading: 'Worked factorizations',
    samples: [
      { title: '84', overrides: {}, blurb: '84 divides by 2 twice, then by 3, and the cofactor 7 is prime. The headline is 2^2 × 3 × 7. Twelve positive divisors are listed, from 1 through 84.' },
      { title: '13, a prime', overrides: { number: 13 }, blurb: 'Nothing smaller than 13 divides it. The headline is 13, the page says 13 is prime, and the positive divisors are 1 and 13.' },
      { title: '100', overrides: { number: 100 }, blurb: '100 = 2^2 × 5^2. Counting repeats, there are four prime factors, and 100 is composite. The positive divisors run from 1 to 100 through the products of those primes.' }
    ],
    table: { heading: 'Prime factorizations', caption: 'Each headline is this calculator. A prime’s headline is the prime itself. Divisors are on the detail line when the number is at most 10,000,000.', headers: ['Number', 'Prime factorization'] },
    limitsHeading: 'What this factorization leaves out',
    limits: [
      'It factors one integer. The greatest common factor of several numbers is the GCF page. 48 and 18 share a factor of 6, which this page will not compute from a list.',
      'The positive divisor list is omitted above 10,000,000. The prime factorization is still produced, up to the input cap of 1,000,000,000,000.',
      '1 is below the minimum. The input starts at 2. Negatives and decimals are rejected because the routine is for a whole number in that range.',
      'Exponents in the headline count repeats. 2^2 means two factors of 2, not a separate exponent problem. The exponent page is where you raise a base you choose.'
    ],
    disclaimer: 'This is prime factorization by trial division of one whole number you type. It is not a cryptography recommendation, and it is not medical, financial, or legal advice.',
    faqs: [
      { q: 'Why is 84 written as 2^2 × 3 × 7?', a: '84 ÷ 2 = 42, 42 ÷ 2 = 21, 21 ÷ 3 = 7, and 7 is prime. Two 2s become the exponent 2. The headline joins the pieces with ×.' },
      { q: 'How does this page show that 13 is prime?', a: 'The only prime factor is 13 itself, so the headline is 13. The detail line says 13 is prime, and the positive divisors are 1 and 13.' },
      { q: 'What are the positive divisors of 84?', a: '1, 2, 3, 4, 6, 7, 12, 14, 21, 28, 42, and 84. They are listed because 84 is at most 10,000,000. The headline is still the prime factorization, not that list.' },
      { q: 'Why would the divisor list disappear for a large integer?', a: 'Above 10,000,000 the page omits the full divisor list and still returns the prime factorization. The input itself cannot exceed 1,000,000,000,000.' }
    ],
    relatedLinks: [
      { slug: 'gcf-calculator', label: 'GCF calculator', note: '48 and 18 have greatest common factor 6, and the common factors are 1, 2, 3, and 6. This page factors one integer at a time.' },
      { slug: 'lcm-calculator', label: 'LCM calculator', note: 'The least common multiple of 4, 6, and 8 is 24. Prime factors explain the multiple. That page returns the multiple.' },
      { slug: 'exponent-calculator', label: 'Exponent calculator', note: '2 raised to 10 is 1,024. The exponents in 2^2 × 3 × 7 count repeated prime factors. They are not a power you choose in a separate box.' }
    ]
  }),
  'rounding-calculator': page({
    slug: 'rounding-calculator',
    title: 'Rounding Calculator | ClearCalc',
    h1: 'Rounding Calculator',
    description: '2.5 rounded to 0 decimal places, half away from zero, is 3. The same tie under half to even is 2.',
    intro: [
      'Rounding replaces a number with a nearby value at a chosen number of decimal places, and the halfway case is the part that needs a named rule. 2.5 sits exactly halfway between 2 and 3. Half away from zero sends a positive halfway case away from zero, so 2.5 to 0 decimal places is 3. Half to even sends that same tie to the even neighbor, which is 2, so the headline is 2.',
      'The scientific-notation page rewrites a number as a coefficient times a power of 10. It does not apply these tie rules, and this page does not change a number into scientific notation. The percent-error page compares a measured value with a true value. Rounding either input before that division changes the percent.',
      'Five rules are on the form: half away from zero, half to even, toward −infinity, toward +infinity, and toward zero. Decimal places run from 0 to 8. −1.8 to 0 places toward zero is −1, the integer between −1.8 and 0. Toward −infinity that same number is −2, and toward +infinity it is −1.'
    ],
    steps: [
      'Enter the number. The sample is 2.5.',
      'Enter the decimal places, a whole number from 0 to 8. The sample is 0, which means a whole number.',
      'Choose the rule. The sample is half away from zero.',
      'Press Calculate. The headline is the rounded value, printed with the number of decimal places you asked for.'
    ],
    howHeading: 'How each rounding rule treats a tie',
    howItWorks: [
      'The page scales the number by 10 to the number of decimal places, applies the rule to that scaled value, and scales back. Half away from zero rounds the absolute value to the nearest integer, and an exact halfway case goes away from zero, then the original sign is restored. 2.5 becomes 3. −2.5 to 0 places under that same rule becomes −3. Half to even looks for a scaled value that is within a tiny tolerance of an exact halfway case. The tie goes to the even neighbor: 2.5 goes to 2 because 2 is even, and −2.5 goes to −2, which is the even neighbor of −2.5. Anything that is not a tie uses ordinary nearest rounding.',
      'Toward −infinity is the floor of the scaled value. Toward +infinity is the ceiling. Toward zero keeps the integer part in the direction of zero: floor for a positive scaled value and ceiling for a negative one. −1.8 at 0 places is −2 toward −infinity, −1 toward +infinity, and −1 toward zero. 2.5 is a tie, which is why the first two rules disagree. −1.8 is not a tie, and the directed rules are there for that kind of value.'
    ],
    formula: 'Scale by 10 ^ places, round, then divide by that power of 10\nHalf away from zero: nearest, and an exact tie moves away from 0\nHalf to even: an exact tie moves to the even neighbor\nToward −infinity: floor. Toward +infinity: ceiling. Toward zero: truncate\nPlaces: a whole number from 0 to 8',
    formulaNotes: [
      '2.5 at 0 places, half away from zero, is 3. The same input, half to even, is 2, because 2 is the even neighbor.',
      '−1.8 at 0 places toward zero is −1. Toward −infinity it is −2. Toward +infinity it is −1. −2.5 half away from zero is −3.'
    ],
    examplesHeading: 'Worked rounding examples',
    samples: [
      { title: '2.5, half away from zero', overrides: {}, blurb: '0 decimal places and the half-away-from-zero rule. 2.5 is an exact tie between 2 and 3, and the positive tie moves away from zero. The headline is 3.' },
      { title: '2.5, half to even', overrides: { mode: '2' }, blurb: 'The same 2.5 at 0 decimal places, with the tie sent to the even digit. 2 is even and 3 is odd, so the headline is 2. A value that is not an exact tie would use ordinary nearest rounding.' },
      { title: '−1.8 toward zero', overrides: { value: -1.8, places: 0, mode: '5' }, blurb: '−1.8 is not a halfway case. Toward zero drops the fractional part in the direction of 0, so the headline is −1. Floor would have given −2.' }
    ],
    table: { heading: 'Three rounded values', caption: 'Each headline is this calculator. The rule and the number of decimal places are part of the input, not a second column.', headers: ['Input and rule', 'Rounded'] },
    limitsHeading: 'What this rounding page does not decide',
    limits: [
      'Half to even treats a scaled value as a tie only when it is within 0.0000000001 of halfway. A decimal that looks like “.5” but is not an exact halfway value in binary can follow ordinary nearest rounding instead.',
      'Decimal places stop at 8. The page does not round to a number of significant figures, and it does not rewrite the result in scientific notation.',
      'Toward −infinity and toward +infinity are not the same rule once the number is negative. −1.8 at 0 places is −2 toward −infinity and −1 toward +infinity.',
      'The headline is padded to the number of decimal places you chose, including trailing zeros when places is greater than 0. Choosing 0 places prints an integer such as 3, 2, or −1.'
    ],
    disclaimer: 'This applies the rounding rule you select to the number you type. It is not a banker’s policy, a grading rule, or medical, financial, or legal advice.',
    faqs: [
      { q: 'Why does half away from zero round 2.5 to 3?', a: '2.5 is exactly halfway between 2 and 3. That rule sends a positive halfway case away from zero, so the whole number is 3. The same rule sends −2.5 to −3.' },
      { q: 'Why does half to even round 2.5 to 2?', a: 'The two neighbors are 2 and 3, and 2 is the even one. The tie goes to the even digit. −2.5 under the same rule goes to −2, the even neighbor.' },
      { q: 'Why does toward zero round −1.8 to −1 at 0 decimal places?', a: 'Toward zero drops the part beyond the last kept digit in the direction of 0. −1.8 is between −1 and −2, and −1 is closer to zero. Toward −infinity would return −2.' },
      { q: 'How do toward −infinity and toward +infinity treat −1.8?', a: 'At 0 decimal places, toward −infinity is the floor, −2. Toward +infinity is the ceiling, −1. Toward zero agrees with the ceiling in this negative example and returns −1.' }
    ],
    relatedLinks: [
      { slug: 'scientific-notation-calculator', label: 'Scientific notation calculator', note: '12,345 is 1.2345 × 10^4. That rewrite is not a rounding rule. This page does not build a power of ten.' },
      { slug: 'percent-error-calculator', label: 'Percent error calculator', note: 'A measured 9 and a true 10 is 10.00%. Rounding either input before that division changes the percent.' },
      { slug: 'percentage-calculator', label: 'Percentage calculator', note: '25 is 12.50% of 200. Rounding the part or the whole is a separate step from that division.' }
    ]
  }),
  'scientific-notation-calculator': page({
    slug: 'scientific-notation-calculator',
    title: 'Scientific Notation Calculator | ClearCalc',
    h1: 'Scientific Notation Calculator',
    description: '12,345 in scientific notation is 1.2345 × 10^4. The reverse direction expands 1.5 × 10^3 to 1,500.',
    intro: [
      'Scientific notation writes a number as a coefficient times a power of ten, with the coefficient at least 1 and below 10, or 0 for zero. 12,345 has four digits to the left of where a one-digit coefficient would sit, so the exponent is 4 and the coefficient is 12,345 / 10,000 = 1.2345. The headline is 1.2345 × 10^4. Multiplying back returns 12,345.',
      'The exponent page raises a base you choose to an exponent you choose. 2^10 is 1,024. This page does not take an arbitrary base. The power is always ten, and in the forward direction the exponent is chosen so the coefficient lands in the normalized range. The logarithm page’s log10 is the real number whose integer part is this exponent for a positive value.',
      'The reverse direction starts from a coefficient and an exponent and expands them. 1.5 × 10^3 is 1,500. A coefficient that is not 0 and is outside [1, 10) is rejected, so 15 × 10^2 is not accepted even though it equals 1,500. Zero in the forward direction is 0 × 10^0. The exponent 0 is the convention this page uses for zero.'
    ],
    steps: [
      'Choose the direction. The sample converts an ordinary number into scientific notation.',
      'For that direction, enter the ordinary number. The sample is 12,345.',
      'For the reverse direction, enter a normalized coefficient and a whole exponent from −300 to 300.',
      'Press Calculate. The headline is either the coefficient times 10 to an integer, or the expanded ordinary number.'
    ],
    howHeading: 'How the coefficient and the exponent are chosen',
    howItWorks: [
      'For a nonzero ordinary number the exponent is the floor of log10 of the absolute value, and the coefficient is the number divided by 10 to that exponent. The coefficient then sits in [1, 10) with the sign of the original number. −12,345 is −1.2345 × 10^4. The exponent matches the absolute value. The check multiplies the coefficient by the power of ten and recovers the ordinary number at the displayed precision.',
      'Zero skips the logarithm, because log10 of 0 is not finite. The headline is 0 × 10^0. In the reverse direction the exponent is not adjusted: you already supply a normalized coefficient. 1.5 and exponent 3 expand to 1,500. A coefficient of 0 is allowed with any exponent in range and expands to 0. A coefficient of 15, or of 0.5, is rejected. The exponent has to be a whole number from −300 to 300, and a power of ten that overflows ordinary numbers is rejected.'
    ],
    formula: 'Forward, nonzero: exponent = floor(log10(|number|)), coefficient = number / 10^exponent\nForward, zero: 0 × 10^0\nReverse: ordinary number = coefficient × 10^exponent\nA nonzero coefficient must satisfy 1 ≤ |coefficient| < 10\nExponent, reverse direction: a whole number from −300 to 300',
    formulaNotes: [
      '12,345 gives exponent 4 and coefficient 1.2345. 1.2345 × 10^4 = 12,345. −12,345 keeps the minus on the coefficient and the same exponent.',
      '1.5 × 10^3 expands to 1,500. Zero is 0 × 10^0. A coefficient of 15 is rejected because it is not normalized.'
    ],
    examplesHeading: 'Worked scientific-notation examples',
    samples: [
      { title: '12,345 to scientific notation', overrides: {}, blurb: 'The floor of log10(12,345) is 4, and 12,345 / 10,000 is 1.2345. The headline is 1.2345 × 10^4. The check multiplies back to 12,345.' },
      { title: '1.5 × 10^3 expanded', overrides: { mode: '2' }, blurb: 'The reverse direction uses the coefficient 1.5 and the exponent 3 already on the form. 1.5 is inside [1, 10), so the exponent is not adjusted. The ordinary number is 1,500.' },
      { title: 'Zero', overrides: { value: 0 }, blurb: 'Zero has no other normalized form on this page. The headline is 0 × 10^0. The exponent is 0 by the convention used here.' }
    ],
    table: { heading: 'Scientific notation in both directions', caption: 'Each headline is this calculator. The first and third rows start from an ordinary number. The middle row starts from a coefficient and an exponent.', headers: ['Input', 'Result'] },
    limitsHeading: 'What this notation page will not adjust',
    limits: [
      'The reverse direction does not renormalize. 15 with exponent 2 is rejected, even though 1.5 × 10^3 is the normalized writing of the same value. Type the coefficient from 1 up to, but not including, 10, or type 0.',
      'The forward exponent comes from floor(log10 of the absolute value). A negative number keeps its sign on the coefficient. −12,345 is −1.2345 × 10^4, not 1.2345 × 10^−4.',
      'The reverse exponent must be a whole number from −300 to 300. A power of ten that is not a finite ordinary number is rejected rather than shown as infinity.',
      'This page does not round to significant figures. 12,345 stays 1.2345 × 10^4. The rounding page is where a tie rule and a number of decimal places are applied.'
    ],
    disclaimer: 'This rewrites a number in normalized scientific notation, or expands a normalized coefficient and an integer power of ten. It is not engineering-tolerance advice, and it is not medical, financial, or legal advice.',
    faqs: [
      { q: 'Why is 12,345 written as 1.2345 × 10^4?', a: 'floor(log10(12,345)) is 4, and 12,345 / 10^4 is 1.2345, which sits between 1 and 10. The check is 1.2345 × 10^4 = 12,345.' },
      { q: 'What does coefficient 1.5 and exponent 3 expand to?', a: '1,500. The reverse direction multiplies the coefficient by 10 to the exponent you typed. 1.5 is already normalized, so the exponent stays 3.' },
      { q: 'Why is zero written as 0 × 10^0?', a: 'A zero coefficient is the normalized form this page uses, and the exponent is 0 by convention. log10 of 0 is not used, because that logarithm is not finite.' },
      { q: 'Why is a coefficient of 15 rejected?', a: 'A normalized nonzero coefficient is from 1 up to, but not including, 10. 15 is outside that range. Write 1.5 × 10^1 if you meant 15, or switch to the forward direction and type 15 as an ordinary number.' }
    ],
    relatedLinks: [
      { slug: 'exponent-calculator', label: 'Exponent calculator', note: '2 raised to 10 is 1,024. Scientific notation always uses base 10, and the forward direction chooses the exponent for you.' },
      { slug: 'logarithm-calculator', label: 'Logarithm calculator', note: 'log10 of 1,000 is 3, which is the exponent in 1 × 10^3. This page returns the coefficient and the integer exponent together.' },
      { slug: 'rounding-calculator', label: 'Rounding calculator', note: '2.5 to 0 decimal places is 3 under half away from zero, and 2 under half to even. This page does not apply those tie rules.' }
    ]
  }),
  'number-sequence-calculator': page({
    slug: 'number-sequence-calculator',
    title: 'Number Sequence Calculator | ClearCalc',
    h1: 'Number Sequence Calculator',
    description: 'The 5th term of an arithmetic sequence with first term 2 and difference 3 is 14. The sum of those five terms is 40.',
    intro: [
      'An arithmetic sequence adds the same difference at every step. Starting at 2 with difference 3, the terms are 2, 5, 8, 11, and 14. The 5th term is 2 + (5 − 1) × 3 = 14. The sum of the first n terms is n/2 × (first + last), so 5/2 × (2 + 14) = 40. The headline is the term. The sum is the next detail line.',
      'A geometric sequence multiplies by a common ratio instead. The exponent page raises one base to one power. 2^10 is 1,024 there. Here the power is the step from the first term: term n is first × ratio^(n − 1). First term 2, ratio 3, and n = 4 give 2 × 3³ = 54, and the four terms 2, 6, 18, and 54 add to 80.',
      'The term number is a whole number from 1 to 500. Term 1 is always the first term you typed, in both kinds, because the added multiple and the power are both zero. A geometric term or sum that overflows an ordinary number is rejected rather than shown as infinity.'
    ],
    steps: [
      'Choose arithmetic or geometric. The sample is arithmetic.',
      'Enter the first term and the common difference, or the common ratio if you chose geometric. The sample is first term 2 and step 3.',
      'Enter the term number, from 1 to 500. The sample is 5.',
      'Press Calculate. Read the term in the headline and the partial sum in the detail line.'
    ],
    howHeading: 'How the term and the partial sum are calculated',
    howItWorks: [
      'Arithmetic term n = first + (n − 1) × difference. The sum is n/2 × (first + last), which counts the average of the first and last term, n times. A negative difference walks downward. First term 10, difference −2, and n = 4 gives the terms 10, 8, 6, and 4. The 4th term is 10 + 3 × (−2) = 4, and the sum is 4/2 × (10 + 4) = 28.',
      'Geometric term n = first × ratio^(n − 1). When the ratio is not 1, the sum is first × (1 − ratio^n) / (1 − ratio). First 2, ratio 3, n = 4: the term is 2 × 27 = 54 and the sum is 2 × (1 − 81) / (1 − 3) = 80. When the ratio is 1, every term equals the first term and the sum is first × n. A first term of 0 makes every geometric term 0 and the sum 0. A ratio of 0 makes every term after the first equal 0. Term 1 with ratio 0 is the first term, because this page treats the power 0^0 as 1.'
    ],
    formula: 'Arithmetic term n = first + (n − 1) × difference\nArithmetic sum = n/2 × (first + last)\nGeometric term n = first × ratio^(n − 1)\nGeometric sum = first × (1 − ratio^n) / (1 − ratio), or first × n when the ratio is 1\nTerm number: a whole number from 1 to 500',
    formulaNotes: [
      '2, 5, 8, 11, 14 is the arithmetic sample. The 5th term is 14 and the sum is 40.',
      '2, 6, 18, 54 is the geometric sample with ratio 3. The 4th term is 54 and the sum of the four terms is 80.'
    ],
    examplesHeading: 'Worked sequence examples',
    samples: [
      { title: 'Arithmetic, five terms', overrides: {}, blurb: 'First term 2, difference 3, term number 5. The term is 14 and the sum of the five terms is 40. The difference is added, not multiplied.' },
      { title: 'Geometric, ratio 3', overrides: { kind: '2', n: 4 }, blurb: 'The same first term and step, read as a ratio, stopped at term 4. 2 × 3³ = 54. The sum formula gives 80 for the terms 2, 6, 18, and 54.' },
      { title: 'Arithmetic with a negative difference', overrides: { first: 10, step: -2, n: 4 }, blurb: 'The terms are 10, 8, 6, and 4. Term 4 is 4, and the sum is 28. A negative difference uses the same n/2 × (first + last) formula.' }
    ],
    table: { heading: 'Terms from three sequences', caption: 'Each headline is the requested term. The partial sum is on the detail line, not in the headline.', headers: ['Sequence', 'Term'] },
    limitsHeading: 'What this sequence page leaves out',
    limits: [
      'The term number stops at 500 and starts at 1. A geometric term or sum that is too large for an ordinary number is rejected.',
      'A ratio of 0 is allowed. Later terms are 0. Term number 1 is the first term, because the power on the ratio is 0 and this page treats 0^0 as 1. A first term of 0 makes the whole geometric sequence 0.',
      'A ratio of 1 does not use the fraction (1 − ratio^n) / (1 − ratio), which would divide by zero. The sum is the first term times the count.',
      'The page does not list every term in the headline, and it does not handle a sequence that is neither arithmetic nor geometric. The average of a list you type is the average calculator. 8, 6, 10, and 12 have mean 9.0000 there.'
    ],
    disclaimer: 'This is the closed form for an arithmetic or geometric sequence. It is school algebra, not a forecast, and it is not medical, financial, or legal advice.',
    faqs: [
      { q: 'Why is the 5th arithmetic term 14 and the sum 40?', a: 'First term 2 and difference 3 give term 5 = 2 + 4 × 3 = 14. The terms are 2, 5, 8, 11, and 14. The sum is 5/2 × (2 + 14) = 40.' },
      { q: 'Why is the 4th geometric term 54 when the first term is 2 and the ratio is 3?', a: 'Term 4 = 2 × 3^(4 − 1) = 2 × 27 = 54. The four terms are 2, 6, 18, and 54, and their sum is 2 × (1 − 3^4) / (1 − 3) = 80.' },
      { q: 'What sum does a geometric ratio of 1 use?', a: 'The sum is the first term times the term number. Every term equals the first term. The usual ratio formula would divide by zero, so this page uses the special case.' },
      { q: 'What term numbers does the sequence calculator accept?', a: 'Whole numbers from 1 to 500. Term 1 is the first term you typed. A geometric result that overflows an ordinary number is rejected.' }
    ],
    relatedLinks: [
      { slug: 'exponent-calculator', label: 'Exponent calculator', note: '2 raised to 10 is 1,024. A geometric term multiplies by ratio^(n − 1). That page is the power by itself.' },
      { slug: 'average-calculator', label: 'Average calculator', note: '8, 6, 10, and 12 have arithmetic mean 9.0000. That is the mean of a list, not the nth term of a sequence.' },
      { slug: 'percentage-calculator', label: 'Percentage calculator', note: '25 is 12.50% of 200. A common ratio of 3 means each term is 300% of the one before it, which is a percent question after you already have the ratio.' }
    ]
  }),
  'permutation-combination-calculator': page({
    slug: 'permutation-combination-calculator',
    title: 'Permutation and Combination Calculator | ClearCalc',
    h1: 'Permutation and Combination Calculator',
    description: '5 P 2 is 20 and 5 C 2 is 10. Order matters for the permutation and is ignored for the combination.',
    intro: [
      'A permutation counts ordered arrangements of r items chosen from n. 5 P 2 = 5 × 4 = 20. The first position has 5 choices and the second has 4 remaining, and the product is the number of ordered pairs. A combination ignores order. 5 C 2 = 20 / 2! = 10, because each unordered pair has been counted twice in the permutation, once for each order. The headline is the permutation count. The combination is the next detail line, and the division is exact.',
      'The probability page combines probabilities you already have. Independent events 0.3 and 0.4 have P(A and B) = 0.12. It does not count arrangements. This page counts the arrangements and the unordered selections. The integer-factor page writes 84 as 2^2 × 3 × 7. That is a product of primes, not nPr.',
      'n and r are whole numbers from 0 to 1,000, and r cannot be larger than n. Choosing nothing, r = 0, can be done in one way, so both results are 1. Choosing every item, r = n, makes the permutation n! and the combination 1, because there is only one unordered way to take the whole set.'
    ],
    steps: [
      'Enter n, the size of the set. The sample is 5.',
      'Enter r, how many items are taken. The sample is 2. r cannot exceed n.',
      'Press Calculate. The headline is nPr, labeled as permutations.',
      'Read nCr on the detail line. For 5 and 2 that line is 10.'
    ],
    howHeading: 'How nPr and nCr are calculated',
    howItWorks: [
      'nPr is the falling product n × (n − 1) × … × (n − r + 1), with r factors. 5 P 2 uses two factors, 5 × 4 = 20. 6 P 6 is 6 × 5 × 4 × 3 × 2 × 1 = 720. The product is exact integer arithmetic, so a large count is a whole number with thousands separators, not a rounded decimal. nCr divides that permutation by r!. The division is exact. 5 C 2 = 20 / 2 = 10. 6 C 6 = 720 / 720 = 1.',
      'The same combination can be written C(n, r) = n! / (r! (n − r)!). Dividing nPr by r! is that formula with (n − r)! cancelled. r = 0 uses an empty product, which is 1, and 0! is 1, so both counts are 1. r larger than n is rejected because you cannot choose more items than the set contains. n and r both stop at 1,000.'
    ],
    formula: 'nPr = n × (n − 1) × … × (n − r + 1)\nnCr = nPr / r!\nThe division is exact\nr = 0 gives 1 for both\nr > n is rejected\nn and r are whole numbers from 0 to 1,000',
    formulaNotes: [
      '5 P 2 = 5 × 4 = 20. 5 C 2 = 20 / 2 = 10. The two orders of each pair are one combination.',
      '6 P 6 = 720 and 6 C 6 = 1. Choosing nothing from 5 items gives 1 permutation and 1 combination.'
    ],
    examplesHeading: 'Worked permutation and combination examples',
    samples: [
      { title: '5 P 2 and 5 C 2', overrides: {}, blurb: 'Five items, take two. The ordered count is 5 × 4 = 20. Dividing by 2! removes the order, so the combination is 10.' },
      { title: '6 P 6 and 6 C 6', overrides: { n: 6, r: 6 }, blurb: 'Taking every item, the permutation is 6!, which is 720. There is one unordered way to take all six, so the combination is 1.' },
      { title: 'Choosing nothing', overrides: { n: 5, r: 0 }, blurb: 'r is 0. The empty product is 1 and 0! is 1, so both the permutation and the combination are 1. The page treats that as a real result.' }
    ],
    table: { heading: 'Permutations for three pairs', caption: 'The headline is nPr. nCr is on the detail line of the same result. r larger than n is rejected and is not a row.', headers: ['n and r', 'Permutations'] },
    limitsHeading: 'What nPr and nCr do not answer',
    limits: [
      'r cannot be larger than n. The page rejects that input. It does not return 0 for an impossible selection, because the form is asking you to fix r.',
      'The counts are exact integers up to n and r of 1,000. They are not probabilities. Divide a count by a total only if you have decided that every arrangement is equally likely.',
      'Order is the whole difference between the two lines. 5 P 2 is 20 and 5 C 2 is 10. Using the permutation where the combination belongs doubles the count for r = 2.',
      'Repeated items, partial order, and circular arrangements are not in these formulas. nPr assumes the n items are distinct and that each chosen item is used once.'
    ],
    disclaimer: 'This counts ordered and unordered selections of distinct items. It is not a probability by itself, and it is not medical, financial, or legal advice.',
    faqs: [
      { q: 'Why is 5 P 2 equal to 20?', a: 'nPr multiplies r descending factors starting at n. 5 × 4 = 20. The first position has 5 choices and the second has 4 left. The headline reads 20 permutations.' },
      { q: 'Why is 5 C 2 equal to 10?', a: 'nCr = nPr / r!. 20 / 2! = 10. Each unordered pair was counted twice among the 20 ordered pairs, once in each order. The division is exact.' },
      { q: 'Why are both counts 1 when r is 0?', a: 'There is one way to choose nothing. The empty product for nPr is 1, and dividing by 0! still leaves 1. The page says choosing nothing can be done in one way.' },
      { q: 'Why does the permutation calculator reject r larger than n?', a: 'You cannot arrange more distinct items than the set contains. r has to be a whole number from 0 through n, and both n and r stop at 1,000.' }
    ],
    relatedLinks: [
      { slug: 'probability-calculator', label: 'Probability calculator', note: 'Independent probabilities 0.3 and 0.4 have P(A and B) = 0.12. That page combines probabilities. This page counts arrangements.' },
      { slug: 'integer-factor-calculator', label: 'Factor calculator', note: '84 is 2^2 × 3 × 7. nCr is a different exact product, nPr divided by r!, not a prime factorization.' },
      { slug: 'exponent-calculator', label: 'Exponent calculator', note: '2 raised to 10 is 1,024. 5 P 2 is the product 5 × 4, which is 20, not the power 5².' }
    ]
  }),
  'z-score-calculator': page({
    slug: 'z-score-calculator',
    title: 'Z-Score Calculator | ClearCalc',
    h1: 'Z-Score and P-Value Calculator',
    description: 'An observation of 115 with mean 100 and standard deviation 15 has z = 1. A z of 1.96 has two-tail probability 0.0500.',
    intro: [
      'A z-score counts how many standard deviations an observation sits from a mean. z = (x − mean) / standard deviation. For 115, mean 100, and standard deviation 15, z = (115 − 100) / 15 = 1. The observation is one standard deviation above the mean. The same distance below the mean, 85, is z = −1. The two-tail standard-normal probability beyond |z| = 1 is 0.3173 on this page.',
      'The second mode starts from a z-score you already have and returns the two-tail probability. z = 1.96 has two-tail probability 0.0500 and one-tail probability 0.0250. The curve is the standard normal. The approximation is Abramowitz and Stegun 7.1.26 for the error function, then Φ(z) = ½(1 + erf(z / √2)). The two-tail probability is 2(1 − Φ(|z|)). A confidence interval is a different page. This probability is not that interval.',
      'The standard deviation has to be positive, and it has to be the spread that matches the question. A sample standard deviation and a population standard deviation are not interchangeable, and this page does not choose between them. The standard-deviation calculator computes that spread from a list. For 2, 4, 4, 4, 5, 5, 7, 9 it reports 2.1381 for the sample and 2.0000 for the population. This page starts after you already have the mean and the spread.'
    ],
    steps: [
      'Choose a z-score from a mean and a standard deviation, or a two-tail p-value from a z-score. The sample is the z-score.',
      'For a z-score, enter the observation, the mean, and a standard deviation above 0. The sample is 115, 100, and 15.',
      'For a p-value, enter a z-score from −12 to 12. The sample value in that field is 1.96.',
      'Press Calculate. A z-score headline also carries the two-tail probability when |z| is at most 12.'
    ],
    howHeading: 'How the z-score and the two-tail probability are calculated',
    howItWorks: [
      'The z-score mode divides the signed distance from the mean by the standard deviation you typed. 115 produces z = 1. 85 produces z = −1. The two-tail probability uses the absolute value, so both of those z-scores show 0.3173. If |z| is above 12 in this mode, the page still returns the z-score and says the two-tail probability is smaller than the approximation reports. The p-value mode refuses a z-score outside −12 to 12 outright, because the approximation underflows.',
      'Φ(z) comes from the error-function approximation, not from a printed z table. The headline for z = 1.96 is two-tail p 0.0500, and the one-tail line is 0.0250. That 0.0500 is the approximation rounded to four decimal places. A two-tail p-value is the probability of a standard-normal result at least this far from zero in either direction. It is not a statement that a study succeeded, and it is not a confidence interval.'
    ],
    formula: 'z = (observation − mean) / standard deviation\nThe standard deviation must be above 0\nΦ(z) = ½ (1 + erf(z / √2)), with erf from Abramowitz and Stegun 7.1.26\nTwo-tail p = 2 (1 − Φ(|z|))\nA p-value input outside −12 to 12 is rejected',
    formulaNotes: [
      '(115 − 100) / 15 = 1. The two-tail probability beyond |z| = 1 is 0.3173. (85 − 100) / 15 = −1, with the same two-tail probability.',
      'z = 1.96 returns two-tail p 0.0500 and one-tail p 0.0250. The one-tail figure is half of the two-tail figure because the curve is symmetric.'
    ],
    examplesHeading: 'Worked z-score examples',
    samples: [
      { title: '115, mean 100, sd 15', overrides: {}, blurb: 'The observation is 15 above a mean of 100, and the standard deviation is 15, so z = 1. The two-tail probability beyond that absolute z is 0.3173.' },
      { title: 'Two-tail probability of z = 1.96', overrides: { mode: '2' }, blurb: 'This mode ignores the observation, mean, and standard deviation and uses the z-score field, 1.96. The two-tail headline is 0.0500. The one-tail probability on one side is 0.0250.' },
      { title: '85, one standard deviation below', overrides: { x: 85 }, blurb: '(85 − 100) / 15 = −1. The sign says the observation is below the mean. The two-tail probability still uses |z| and is 0.3173, the same figure as z = 1.' }
    ],
    table: { heading: 'Z-scores and a two-tail probability', caption: 'Each headline is this calculator. The first and third rows are z-scores. The middle row is a two-tail probability from a z-score you type.', headers: ['Input', 'Result'] },
    limitsHeading: 'What a z-score on this page does not decide',
    limits: [
      'The page does not tell you whether the standard deviation is a sample or a population figure. The divisor n − 1 versus n is chosen on the standard-deviation page, before you arrive here.',
      'The probability is a standard-normal approximation from Abramowitz and Stegun 7.1.26. z = 1.96 prints 0.0500 to four decimal places. It is not a more precise published table, and it is not a t probability.',
      'In the p-value mode, a z-score beyond −12 to 12 is rejected. In the z-score mode, a more extreme result still shows the z-score, and the probability line says the approximation has underflowed.',
      'A two-tail probability is not a confidence interval, not a prediction for one new observation, and not a medical or financial threshold. The confidence-interval page builds an interval from a mean, a standard deviation, and a sample size.'
    ],
    disclaimer: 'This standardizes one observation or approximates a two-tail standard-normal probability. It is not a diagnosis, a hypothesis-test decision, or medical, financial, or legal advice.',
    faqs: [
      { q: 'Why is z equal to 1 for 115, mean 100, and standard deviation 15?', a: 'z = (115 − 100) / 15 = 15 / 15 = 1. The observation is one standard deviation above the mean. The two-tail probability beyond |z| = 1 is 0.3173.' },
      { q: 'What two-tail probability does z = 1.96 return?', a: '0.0500, printed as two-tail p 0.0500. The one-tail probability beyond 1.96 on one side is 0.0250. Both come from the error-function approximation named on the page.' },
      { q: 'What two-tail probability goes with an observation of 85 on this same mean and standard deviation?', a: 'z = (85 − 100) / 15 = −1. The two-tail probability uses the absolute value, so it is 0.3173, the same number as for z = 1.' },
      { q: 'Why is a z-score beyond 12 rejected in the p-value mode?', a: 'The error-function approximation underflows past |z| = 12. The p-value mode asks for a z-score from −12 to 12. The z-score mode still returns a more extreme z and withholds the probability.' }
    ],
    relatedLinks: [
      { slug: 'confidence-interval-calculator', label: 'Confidence interval calculator', note: 'Mean 100, standard deviation 15, and n = 25 give 93.808 to 106.192. That is an interval for a mean. A two-tail p-value is not that interval.' },
      { slug: 'standard-deviation-calculator', label: 'Standard deviation calculator', note: 'The list 2, 4, 4, 4, 5, 5, 7, 9 has sample standard deviation 2.1381 and population standard deviation 2.0000. Bring the one that matches the question.' },
      { slug: 'descriptive-statistics-calculator', label: 'Descriptive statistics calculator', note: 'That same list has mean 5, median 4.5, mode 4, and range 7. This page starts after the mean and the spread are already known.' }
    ]
  }),
  'confidence-interval-calculator': page({
    slug: 'confidence-interval-calculator',
    title: 'Confidence Interval Calculator | ClearCalc',
    h1: 'Confidence Interval Calculator',
    description: 'Mean 100, standard deviation 15, and n = 25 give a 95% t interval from 93.808 to 106.192, using critical value 2.064 on 24 degrees of freedom.',
    intro: [
      'A confidence interval for a mean is the sample mean plus and minus a margin of error. The margin is a critical value times the standard deviation divided by the square root of the sample size. For mean 100, standard deviation 15, and n = 25, the degrees of freedom are 24. The two-sided 95% t critical value on this page’s table is 2.064. The margin is 2.064 × 15 / √25 = 2.064 × 15 / 5 = 6.192. The interval is 100 − 6.192 to 100 + 6.192, which prints as 93.808 to 106.192.',
      'The second choice forces the critical value 1.96, the usual normal two-sided 95% point, and does not consult the t table. The same mean, standard deviation, and sample size then have margin 1.96 × 15 / 5 = 5.88, and the interval is 94.12 to 105.88. The z-score page’s two-tail probability for z = 1.96 is 0.0500. That probability is not this interval.',
      'The first choice uses the t table only through 30 degrees of freedom. Past that, the 95% critical value falls back to 1.96. A sample of 100, mean 50, and standard deviation 10 has 99 degrees of freedom, so the margin is 1.96 × 10 / √100 = 1.96 and the interval is 48.04 to 51.96. The standard deviation you type should be the sample standard deviation when you use t.'
    ],
    steps: [
      'Enter the sample mean, the standard deviation, and the sample size. The sample is 100, 15, and 25.',
      'Choose the critical value. The sample uses the 95% t value when the degrees of freedom are 30 or fewer, and 1.96 after that.',
      'The other choice always uses 1.96, including for a small sample.',
      'Press Calculate. The headline is the interval. The margin and the critical-value rule are on the detail lines.'
    ],
    howHeading: 'How the 95% interval is calculated',
    howItWorks: [
      'Degrees of freedom are n − 1. The sample size is a whole number from 2 to 1,000,000, so the smallest degrees of freedom are 1, where the table’s critical value is 12.706. The table continues through 30 degrees of freedom, where the critical value is 2.042, which is a sample of n = 31. The next sample size, n = 32, has 31 degrees of freedom. That is past the table, so the first choice uses 1.96. Forcing 1.96 uses 1.96 at every sample size, including n = 25, where the t value would have been 2.064.',
      'The margin is critical × standard deviation / √n, and the interval is mean ± margin. The standard deviation must be above 0. The interval estimates the mean of the population the sample was drawn from when the observations are independent and the sampling distribution of the mean is approximately normal, which is the condition the page states. It is not a prediction interval for one future observation, and it is not a tolerance interval that claims to cover a fraction of the individual values.'
    ],
    formula: 'Degrees of freedom = n − 1\nMargin = critical × standard deviation / √n\nInterval = mean ± margin\nCritical, first choice: the 95% t value for degrees of freedom 1 through 30, otherwise 1.96\nCritical, second choice: always 1.96\nn is a whole number from 2 to 1,000,000',
    formulaNotes: [
      'n = 25 has 24 degrees of freedom and t = 2.064. 2.064 × 15 / 5 = 6.192, so the interval is 93.808 to 106.192.',
      'The same inputs with critical value 1.96 have margin 5.88 and interval 94.12 to 105.88. A sample of 100 with mean 50 and standard deviation 10 falls back to 1.96 and gives 48.04 to 51.96.'
    ],
    examplesHeading: 'Worked confidence-interval examples',
    samples: [
      { title: 'n = 25, t on 24 degrees of freedom', overrides: {}, blurb: 'Mean 100, standard deviation 15, sample size 25. Degrees of freedom are 24, the t critical value is 2.064, and the margin is 6.192. The interval is 93.808 to 106.192.' },
      { title: 'The same sample with 1.96', overrides: { level: '2' }, blurb: 'The critical value is forced to 1.96 and the t table is not used. The margin is 5.88, and the interval is 94.12 to 105.88. The sample size is still 25.' },
      { title: 'n = 100, past the t table', overrides: { mean: 50, sd: 10, n: 100 }, blurb: 'Degrees of freedom are 99, past the table that ends at 30, so the first choice uses 1.96. The margin is 1.96 × 10 / 10 = 1.96, and the interval is 48.04 to 51.96.' }
    ],
    table: { heading: 'Three 95% intervals for a mean', caption: 'Each headline is this calculator. The critical value is 2.064 in the first row and 1.96 in the other two, for different reasons.', headers: ['Sample', '95% interval'] },
    limitsHeading: 'What this interval does not cover',
    limits: [
      'The t table stops at 30 degrees of freedom. n = 31 still uses 2.042. n = 32 and every larger sample use 1.96 on the first choice, even though a full t table would still sit slightly above 1.96.',
      'It is a 95% interval only. There is no 90% or 99% critical value on this page. The sample-size page is the one with 90%, 95%, and 99% choices, and it sizes a proportion rather than an interval for a mean you already measured.',
      'It is not a prediction interval for one future observation, and it is not a tolerance interval. The margin divides by √n, so it shrinks like an interval for the mean, not like a band for individual points.',
      'The standard deviation is the one you type. When you use the t critical value, that spread should be the sample standard deviation. The page does not compute it from a list. A standard deviation of 0 or less is rejected, and n = 1 is rejected because the t degrees of freedom would be 0.'
    ],
    disclaimer: 'This is a 95% interval for a mean under the usual independence and approximate-normality conditions. It is not a prediction for one person, and it is not medical, financial, or legal advice.',
    faqs: [
      { q: 'Why does n = 25 use the t critical value 2.064?', a: 'Degrees of freedom are 25 − 1 = 24. On this page’s two-sided 95% t table, 24 degrees of freedom use 2.064. The table is used because 24 is within 1 through 30 and the first critical-value choice is selected.' },
      { q: 'Why is the interval for mean 100, standard deviation 15, and n = 25 equal to 93.808 to 106.192?', a: 'The margin is 2.064 × 15 / √25 = 6.192. Subtracting and adding that margin around 100 gives 93.808 and 106.192.' },
      { q: 'What changes when the critical value is forced to 1.96?', a: 'The t table is skipped. The margin becomes 1.96 × 15 / 5 = 5.88, and the interval is 94.12 to 105.88. The mean, the standard deviation, and n stay 100, 15, and 25.' },
      { q: 'When does this confidence interval page stop using the t table?', a: 'When the degrees of freedom exceed 30, which starts at n = 32, or when you choose the critical value that is always 1.96. n = 31 still has 30 degrees of freedom and uses 2.042.' }
    ],
    relatedLinks: [
      { slug: 'z-score-calculator', label: 'Z-score calculator', note: 'z = 1.96 has two-tail probability 0.0500. This page uses 1.96 as a critical value in a margin, not as a p-value to report.' },
      { slug: 'standard-deviation-calculator', label: 'Standard deviation calculator', note: 'The list 2, 4, 4, 4, 5, 5, 7, 9 has sample standard deviation 2.1381. The t interval wants that sample spread, computed before you open this page.' },
      { slug: 'sample-size-calculator', label: 'Sample size calculator', note: '95%, margin 0.05, and p = 0.5 give 385 responses for a proportion. This page uses a sample size you already have and builds an interval for a mean.' }
    ]
  }),
  'sample-size-calculator': page({
    slug: 'sample-size-calculator',
    title: 'Sample Size Calculator | ClearCalc',
    h1: 'Sample Size Calculator',
    description: 'A 95% simple random sample for a proportion, with margin 0.05 and p = 0.5, is 385 responses when the population is left at 0.',
    intro: [
      'Cochran’s formula for a proportion estimates how many responses a simple random sample needs. n0 = z² × p × (1 − p) / e². For 95%, the z used in the multiplication is 1.95996398454. With p = 0.5 and margin e = 0.05, n0 = 384.1459. The headline rounds up to 385 responses. The detail line prints z to four decimals as 1.96, then shows that same 384.1459, so the printed 1.96 has already been shortened and squaring 1.96 by hand gives 384.16 rather than 384.1459. Both round up to 385.',
      'Five percent is typed as 0.05, not as 5. A margin of 1 or more is rejected, and the error tells you that five percent is 0.05. The expected proportion has to sit strictly between 0 and 1. p = 0.5 is the value that makes p(1 − p) as large as it can be, 0.25, so the sample size is the largest this formula gives for that margin and confidence. Use 0.5 when you do not have an expected proportion.',
      'A population of 0 means the population is treated as very large, and no finite-population correction is applied. A positive population N replaces n0 with n0 / (1 + (n0 − 1) / N), and the headline again rounds up. For the 95% inputs and N = 1,000, the unrounded size is 277.7335 and the headline is 278 responses.'
    ],
    steps: [
      'Choose 90%, 95%, or 99%. The sample is 95%.',
      'Enter the margin of error as a proportion below 1. Five percent is 0.05.',
      'Enter the expected proportion between 0 and 1. The sample is 0.5. Leave population at 0 when the population is very large.',
      'Press Calculate. The headline is the rounded-up number of responses. The detail line shows Cochran’s n0 before that rounding.'
    ],
    howHeading: 'How Cochran’s sample size is calculated',
    howItWorks: [
      'The critical value depends on the confidence you choose. 90% uses 1.64485362695, 95% uses 1.95996398454, and 99% uses 2.57582930355. Those are two-sided normal critical values. The detail line prints them as 1.6449, 1.96, and 2.5758. The same margin 0.05 and p = 0.5 give n0 = 270.5543 at 90%, which rounds up to 271, and n0 = 663.4897 at 99%, which rounds up to 664. The headline uses the ceiling of the unrounded size after subtracting a tiny 0.000000001, so a value that is already a whole number within that hair of an integer is not pushed up another step by floating-point noise.',
      'The finite-population correction is n = n0 / (1 + (n0 − 1) / N). It is applied only when the population field is a positive whole number. N = 1,000 with the 95% default inputs takes 384.1459 down to 277.7335 and then up to 278 responses. p = 0.2 with the same 95% margin and a very large population gives n0 = 245.8534 and 246 responses, because 0.2 × 0.8 is smaller than 0.5 × 0.5. The formula is for a simple random sample of a proportion. It is not a sample size for a mean, a comparison of two groups, or a clustered survey.'
    ],
    formula: 'n0 = z² × p × (1 − p) / e²\n90% z = 1.64485362695, 95% z = 1.95996398454, 99% z = 2.57582930355\nIf population N is positive: n = n0 / (1 + (n0 − 1) / N)\nHeadline = the unrounded n rounded up\nFive percent is typed as 0.05\np is strictly between 0 and 1',
    formulaNotes: [
      '95%, e = 0.05, p = 0.5, and population 0 give n0 = 384.1459 and the headline 385. The detail line writes the z as 1.96 because it prints four decimal places.',
      '99% with the same margin and proportion gives 664 responses. Population 1,000 at 95% gives 278 after the finite-population correction.'
    ],
    examplesHeading: 'Worked sample-size examples',
    samples: [
      { title: '95%, margin 0.05, p = 0.5', overrides: {}, blurb: 'Cochran n0 is 384.1459 for a very large population. The headline rounds up to 385 responses. The margin is the proportion 0.05, which is five percent.' },
      { title: '99% with the same margin and proportion', overrides: { confidence: '3' }, blurb: 'The critical value changes to 2.57582930355, printed as 2.5758. n0 is 663.4897, and the headline rounds up to 664 responses. The population is still treated as very large.' },
      { title: '95% with population 1,000', overrides: { population: 1000 }, blurb: 'n0 is still 384.1459. The finite-population correction divides by 1 + (n0 − 1) / 1,000, which gives 277.7335, and the headline rounds up to 278 responses.' }
    ],
    table: { heading: 'Rounded sample sizes', caption: 'Each headline is this calculator. Population 0 means no finite-population correction. The margin is 0.05 and p is 0.5 in every row.', headers: ['Setup', 'Responses'] },
    limitsHeading: 'What this sample-size formula does not size',
    limits: [
      'The margin is a proportion below 1. Typing 5 for five percent is rejected. The message says five percent is 0.05. A margin of 0 is rejected because the formula would divide by zero.',
      'The expected proportion cannot be 0 or 1. Those endpoints make p(1 − p) zero and are rejected. Use a value strictly between them, or 0.5 when you do not have one.',
      'Population 0 means “very large,” not a population of zero people. A positive population applies n = n0 / (1 + (n0 − 1) / N) and then rounds up. The population field itself stops at 1,000,000,000,000.',
      'The result is a simple random sample for one proportion. It is not a sample size for a mean, for a difference between two groups, or for a clustered or stratified survey. The confidence-interval page is for a mean you have already measured.'
    ],
    disclaimer: 'This is Cochran’s sample-size formula for a proportion, with an optional finite-population correction. It is not a survey design, and it is not medical, financial, or legal advice.',
    faqs: [
      { q: 'Why do 95%, margin 0.05, and p = 0.5 give 385 responses?', a: 'n0 = 1.95996398454² × 0.5 × 0.5 / 0.05² = 384.1459. The headline rounds up to 385. The detail line prints the critical value as 1.96. Squaring that shortened 1.96 by hand gives 384.16, which still rounds up to 385.' },
      { q: 'Why must five percent be typed as 0.05 in the sample size calculator?', a: 'The margin is a proportion in the denominator e². 0.05 is five percent. A margin of 5 is rejected because it is not below 1, and the error says five percent is 0.05.' },
      { q: 'What is the Cochran formula on this page?', a: 'n0 = z² × p × (1 − p) / e². z is 1.64485362695 at 90%, 1.95996398454 at 95%, and 2.57582930355 at 99%. If you enter a population N, the page then uses n0 / (1 + (n0 − 1) / N).' },
      { q: 'How does a population of 1,000 change the 385?', a: 'n0 stays 384.1459. The finite-population correction gives 277.7335, and the headline rounds up to 278 responses. Population 0 is what leaves the result at 385.' }
    ],
    relatedLinks: [
      { slug: 'confidence-interval-calculator', label: 'Confidence interval calculator', note: 'Mean 100, standard deviation 15, and n = 25 give 93.808 to 106.192. That interval uses a sample size you already have. This page estimates the size first, for a proportion.' },
      { slug: 'percentage-calculator', label: 'Percentage calculator', note: '25 is 12.50% of 200. Five percent as a margin on this page is the proportion 0.05, not the part-and-whole percent that calculator returns.' },
      { slug: 'probability-calculator', label: 'Probability calculator', note: 'Independent probabilities 0.3 and 0.4 have P(A and B) = 0.12. The p in Cochran’s formula is an expected proportion, not that combined event.' }
    ]
  }),
  'probability-calculator': page({
    slug: 'probability-calculator',
    title: 'Probability Calculator | ClearCalc',
    h1: 'Probability Calculator',
    description: 'Independent probabilities 0.3 and 0.4 have P(A and B) = 0.12, printed as 0.120000. Under that assumption P(A or B) is 0.58.',
    intro: [
      'For two independent events, the probability that both happen is the product of the probabilities. P(A and B) = 0.3 × 0.4 = 0.12. The headline prints six decimal places, 0.120000. The same independence assumption gives P(A or B) = P(A) + P(B) − P(A)P(B) = 0.3 + 0.4 − 0.12 = 0.58. Independence is an assumption you are making. The page cannot tell whether two events are independent.',
      'The complement is 1 − P(A), the probability that A does not happen when A and not-A cover every outcome and do not overlap. The complement of 0.3 is 0.7, printed as 0.700000. That rule does not use P(B). It is not a conditional probability.',
      'The general addition rule is for when you already know the overlap. P(A or B) = P(A) + P(B) − P(A and B). With 0.3, 0.4, and an overlap of 0.1, the result is 0.6, printed as 0.600000. The overlap is subtracted once because it was counted in both singles. If the events are independent, the overlap equals the product 0.12, and this rule then matches the 0.58 from the first rule.'
    ],
    steps: [
      'Choose the independent-events rule, the general addition rule, or the complement. The sample is the independent rule.',
      'Enter P(A) from 0 to 1. The sample is 0.3. Enter P(B) when the rule uses it. The sample is 0.4.',
      'For the general rule, enter P(A and B). The sample overlap is 0.1. It cannot exceed P(A) or P(B).',
      'Press Calculate. The independent headline is the AND probability. The other two headlines are the complement and the OR probability.'
    ],
    howHeading: 'How the three probability rules are calculated',
    howItWorks: [
      'Every probability has to sit from 0 to 1. The independent rule multiplies P(A) by P(B) for the headline and also reports the OR value P(A) + P(B) − that product. 0.3 and 0.4 produce 0.12 and 0.58. The complement ignores P(B) and returns 1 − P(A). 1 − 0.3 = 0.7. The general rule subtracts the overlap you type: 0.3 + 0.4 − 0.1 = 0.6. If that OR value would exceed 1, the page rejects the input and asks you to check the overlap.',
      'The overlap also cannot exceed P(A) or P(B), because the joint event cannot be more likely than either event alone. An overlap of 0.5 with P(A) = 0.3 is rejected. The permutation page counts arrangements, such as 5 P 2 = 20 and 5 C 2 = 10. This page does not convert a count into a probability. If you want a probability from equally likely outcomes, divide the count by the total yourself and then type the resulting probabilities here.'
    ],
    formula: 'Independent: P(A and B) = P(A) × P(B)\nIndependent: P(A or B) = P(A) + P(B) − P(A) × P(B)\nGeneral: P(A or B) = P(A) + P(B) − P(A and B)\nComplement: P(not A) = 1 − P(A)\nEach probability must be from 0 to 1, and the overlap cannot exceed P(A) or P(B)',
    formulaNotes: [
      '0.3 × 0.4 = 0.12, printed 0.120000. The independent OR is 0.58. The complement of 0.3 is 0.700000.',
      '0.3 + 0.4 − 0.1 = 0.6, printed 0.600000. Replacing the overlap 0.1 with the independent product 0.12 returns the OR value 0.58.'
    ],
    examplesHeading: 'Worked probability examples',
    samples: [
      { title: 'Independent 0.3 and 0.4', overrides: {}, blurb: 'The headline is the product 0.12, printed to six decimals. The detail line also gives P(A or B) = 0.58 under the same independence assumption. The page is not checking that the events really are independent.' },
      { title: 'Complement of 0.3', overrides: { mode: '3' }, blurb: '1 − 0.3 = 0.7, printed as 0.700000. P(B) is not used. The result is the probability that A does not happen, when A and not-A split the outcomes without overlap.' },
      { title: 'General addition with overlap 0.1', overrides: { mode: '2' }, blurb: 'P(A or B) = 0.3 + 0.4 − 0.1 = 0.6, printed as 0.600000. The overlap is smaller than the independent product 0.12, so this OR is larger than the independent OR of 0.58.' }
    ],
    table: { heading: 'Three probability rules', caption: 'Each headline is this calculator. The independent row’s headline is P(A and B). The OR under independence is on that result’s detail line.', headers: ['Rule', 'Headline'] },
    limitsHeading: 'What these probability rules assume',
    limits: [
      'Independence is your assumption. The page multiplies the two probabilities and cannot detect dependence from the numbers alone. If you know a different overlap, use the general rule and type it.',
      'The complement is not a conditional probability, and none of the three rules is Bayes’ theorem. There is no field for P(B given A).',
      'P(A and B) cannot exceed P(A) or P(B), and P(A) + P(B) − P(A and B) cannot exceed 1. Either violation is rejected. Every typed probability has to be from 0 to 1.',
      'Counts of arrangements stay on the permutation page. 5 P 2 = 20 and 5 C 2 = 10 are counts. Turning a count into a probability requires a total number of equally likely outcomes, which this form does not ask for.'
    ],
    disclaimer: 'This applies the complement, the independent-product rule, or the general addition rule to probabilities you type. It is not a risk assessment, and it is not medical, financial, or legal advice.',
    faqs: [
      { q: 'Why is P(A and B) equal to 0.12 for independent probabilities 0.3 and 0.4?', a: 'Independence says the joint probability is the product. 0.3 × 0.4 = 0.12, and the headline prints 0.120000. The page uses that product only because you selected the independent rule.' },
      { q: 'What is P(A or B) for independent 0.3 and 0.4?', a: '0.58. The formula is 0.3 + 0.4 − 0.12. It is on the detail line. The headline of that mode is the AND probability, 0.120000.' },
      { q: 'What is the complement of 0.3 on this page?', a: '0.700000, from 1 − 0.3. The complement mode does not read P(B). It is the probability that A does not happen, not a conditional probability.' },
      { q: 'How does the general addition rule use an overlap of 0.1?', a: 'P(A or B) = 0.3 + 0.4 − 0.1 = 0.6, printed as 0.600000. The overlap is subtracted once. An overlap larger than 0.3 or 0.4 is rejected.' }
    ],
    relatedLinks: [
      { slug: 'permutation-combination-calculator', label: 'Permutation and combination calculator', note: '5 P 2 is 20 and 5 C 2 is 10. Those are counts. This page starts from probabilities you already have.' },
      { slug: 'percentage-calculator', label: 'Percentage calculator', note: '25 is 12.50% of 200. A probability of 0.12 is 12% if you convert it, and that conversion is a separate percent question.' },
      { slug: 'z-score-calculator', label: 'Z-score calculator', note: 'z = 1.96 has two-tail probability 0.0500 on the standard normal curve. This page does not use that curve. It uses the probabilities you type.' }
    ]
  }),
  'descriptive-statistics-calculator': page({
    slug: 'descriptive-statistics-calculator',
    title: 'Mean, Median, Mode, and Range Calculator | ClearCalc',
    h1: 'Mean, Median, Mode, and Range Calculator',
    description: 'The list 2, 4, 4, 4, 5, 5, 7, 9 has mean 5, median 4.5, mode 4, and range 7. The sample standard deviation divides by n − 1 and the population figure divides by n.',
    intro: [
      'This page summarizes a list, and the headline is the arithmetic mean. For 2, 4, 4, 4, 5, 5, 7, and 9 the count is 8 and the sum is 40, so the mean is 40 / 8 = 5. The same result also reports the median, the mode, the range, the geometric mean, the harmonic mean, and both standard deviations. It is not only the arithmetic mean. The average calculator is the mean by itself. Its own sample list 8, 6, 10, 12 has mean 9.0000 and does not report a median or a mode.',
      'The median is the middle value after sorting. With eight numbers the two central values are the 4th and 5th, which are 4 and 5, and the median is their average, 4.5. The mode is the value that appears most often. 4 appears three times, more than any other value, so the mode is 4. The range is the largest minus the smallest, 9 − 2 = 7.',
      'The two standard-deviation lines use different divisors on the same sum of squared deviations. The squared deviations from 5 add to 32. The sample standard deviation divides by n − 1, so √(32 / 7) = 2.13809. The population standard deviation divides by n, so √(32 / 8) = 2. The standard-deviation calculator prints those same two figures as 2.1381 and 2.0000 because it fixes four decimal places. This page prints the looser 2.13809 and 2.'
    ],
    steps: [
      'Type numbers separated by commas. The sample is 2, 4, 4, 4, 5, 5, 7, 9.',
      'Press Calculate. The headline is the arithmetic mean.',
      'Read the count, the sum, the median, and the range on the first detail line.',
      'Read the mode, then the geometric and harmonic means, then the two standard deviations. The sample line says it divides by n − 1. The population line says it divides by n.'
    ],
    howHeading: 'How the mean, median, mode, range, and spread are calculated',
    howItWorks: [
      'The mean is the sum divided by the count. The median sorts the list. An odd count takes the middle value. An even count averages the two central values, which is why eight numbers give (4 + 5) / 2 = 4.5. The mode counts repetitions. If every value appears once, the page says there is no mode. If several values tie for the highest count, and that count is at least 2, every one of them is listed. The range is the maximum minus the minimum after the sort. The list 1, 2, 3, 4 has mean 2.5, median 2.5, range 3, and no mode, because each value appears once.',
      'The geometric mean is the exponential of the average of the natural logs, and the harmonic mean is the count divided by the sum of the reciprocals. Both need every value to be positive. The geometric mean of the sample list is 4.603216 and the harmonic mean is 4.201751. The list −2, 0, 4 has mean 0.666667, median 0, and range 6, and both of those means are undefined because of the zero and the negative. A single number has a population standard deviation of 0 and no sample standard deviation, because n − 1 would be 0. The sample line appears once the list has at least two numbers.'
    ],
    formula: 'Mean = sum / n\nMedian = middle of the sorted list, or the average of the two central values when n is even\nMode = the most frequent value, or every value tied for that frequency\nRange = maximum − minimum\nSample standard deviation = √(sum of squared deviations / (n − 1))\nPopulation standard deviation = √(sum of squared deviations / n)\nGeometric mean = exp(average of ln), harmonic mean = n / sum of reciprocals, both only when every value is positive',
    formulaNotes: [
      '2, 4, 4, 4, 5, 5, 7, 9 has sum 40 and mean 5. The median is 4.5, the mode is 4, and the range is 7. The squared deviations add to 32, so the sample standard deviation is √(32 / 7) = 2.13809 and the population figure is √(32 / 8) = 2.',
      '1, 2, 3, 4 has no mode. −2, 0, 4 leaves the geometric and harmonic means undefined. A one-number list reports the population standard deviation and says the sample figure needs at least two numbers.'
    ],
    examplesHeading: 'Worked descriptive-statistics examples',
    samples: [
      { title: '2, 4, 4, 4, 5, 5, 7, 9', overrides: {}, blurb: 'The mean is 5 from the sum 40 and the count 8. The median is 4.5, the mode is 4 because it appears three times, and the range is 7. The sample standard deviation divides by 7 and is 2.13809. The population figure divides by 8 and is 2.' },
      { title: '1, 2, 3, 4, no mode', overrides: { numbers: '1, 2, 3, 4' }, blurb: 'Each value appears once, so the page says there is no mode. The mean and the median are both 2.5, and the range is 3. The geometric mean is 2.213364 and the harmonic mean is 1.92.' },
      { title: 'A zero and a negative', overrides: { numbers: '-2, 0, 4' }, blurb: 'The mean is 0.666667, the median is 0, and the range is 6. The geometric and harmonic means are both undefined because a value is zero or negative. The two standard deviations are still reported.' }
    ],
    table: { heading: 'Arithmetic means of three lists', caption: 'Each headline is the arithmetic mean from this calculator. Median, mode, range, and both standard deviations are on the detail lines.', headers: ['List', 'Mean'] },
    limitsHeading: 'What this summary does not replace',
    limits: [
      'The headline is the arithmetic mean, and the other summaries are detail lines. The average calculator stops at the mean. This page adds the median, the mode, the range, the geometric mean, the harmonic mean, and both standard deviations.',
      'The sample standard deviation divides by n − 1. The population standard deviation divides by n. They are printed together so the divisor is visible. A list of one number has no sample standard deviation.',
      'The geometric and harmonic means are undefined when any value is zero or negative. The arithmetic mean, the median, the mode, the range, and the standard deviations are still computed for that list.',
      'There is no weighted mean, no trimmed mean, and no percentile other than the median. The list holds from 1 to 500 numbers. A z-score for one new observation, once you have chosen a mean and a standard deviation, is the z-score page.'
    ],
    disclaimer: 'This summarizes the numbers you type. The two standard deviations are the n − 1 and n versions of the same list. It is not a hypothesis test, and it is not medical, financial, or legal advice.',
    faqs: [
      { q: 'Why is the mean of 2, 4, 4, 4, 5, 5, 7, 9 equal to 5?', a: 'The eight numbers add to 40. The arithmetic mean is 40 / 8 = 5. That is the headline. The average calculator would stop at this mean. This page continues.' },
      { q: 'What are the median, mode, and range of 2, 4, 4, 4, 5, 5, 7, 9?', a: 'Sorted, the two central values are 4 and 5, so the median is 4.5. The value 4 appears three times, so the mode is 4. The range is 9 − 2 = 7.' },
      { q: 'Why does the descriptive statistics page show two standard deviations?', a: 'They use different divisors. The sum of squared deviations from the mean 5 is 32. Dividing by n − 1 = 7 gives the sample standard deviation 2.13809. Dividing by n = 8 gives the population standard deviation 2.' },
      { q: 'When are the geometric and harmonic means left undefined?', a: 'When any value is zero or negative. The list −2, 0, 4 says both are undefined. The mean 0.666667, the median 0, and the range 6 are still reported.' },
      { q: 'How is this list summary different from the average calculator?', a: 'The average calculator returns the arithmetic mean only. 8, 6, 10, and 12 have mean 9.0000 there. This page’s headline is also an arithmetic mean, and the detail lines add the median, the mode, the range, the geometric mean, the harmonic mean, and both standard deviations.' }
    ],
    relatedLinks: [
      { slug: 'average-calculator', label: 'Average calculator', note: '8, 6, 10, and 12 have arithmetic mean 9.0000. That page is the mean only. This page adds the median, the mode, and the range.' },
      { slug: 'standard-deviation-calculator', label: 'Standard deviation calculator', note: 'On 2, 4, 4, 4, 5, 5, 7, 9 it prints 2.1381 for the sample and 2.0000 for the population. This page prints 2.13809 and 2 for those same divisors, n − 1 and n.' },
      { slug: 'z-score-calculator', label: 'Z-score calculator', note: 'An observation of 115 with mean 100 and standard deviation 15 has z = 1. That page starts after you already have a mean and a spread.' }
    ]
  })
};
