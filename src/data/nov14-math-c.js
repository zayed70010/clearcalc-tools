import { nov14Page as page } from './nov14-page.js';

export const nov14MathC = {
  'coordinate-distance-calculator': page({
    slug: 'coordinate-distance-calculator',
    title: 'Coordinate Distance Calculator | ClearCalc',
    h1: 'Coordinate Distance Calculator',
    description: 'Straight-line distance between two coordinates. From (0, 0) to (3, 4) the distance is 5. A third axis is optional.',
    intro: [
      'The distance from (x1, y1) to (x2, y2) is the square root of the sum of the squared differences. From (0, 0) to (3, 4) the differences are 3 and 4. The squares are 9 and 16. Their sum is 25, and the square root of 25 is 5. The headline is 5.',
      'Switch the axes choice to space and the same square root gains a third square, (z2 − z1) squared. From (0, 0, 0) to (3, 4, 12) the squares are 9, 16, and 144. Those add to 169, and the square root of 169 is 13. If the two z values are equal, that third square is 0 and the distance matches the plane result. From (0, 0) to (1, 1), still in the plane, the distance is the square root of 2, shown as 1.414214.',
      'The length is the straight line through the coordinates you type. A driving distance follows roads, and this page does not look up a road, a city, or a map. Leave the axes on the plane and any numbers sitting in the z boxes are ignored. The Pythagorean page starts from two legs of a right triangle and returns a side. This page starts from coordinates and returns only the length.'
    ],
    steps: [
      'Enter the first point as x1 and y1. The sample point is (0, 0).',
      'Enter the second point as x2 and y2. The sample point is (3, 4).',
      'Leave the axes on the plane, or choose space and fill z1 and z2. The space sample uses z2 = 12.',
      'Press Calculate. The headline is the straight-line distance, with up to 6 decimal places.'
    ],
    howHeading: 'How the straight-line distance is calculated',
    howItWorks: [
      'Subtract the coordinates one axis at a time. Square each difference, add the squares, and take the square root. In the plane the z difference is forced to 0 before that sum, so a filled z box cannot change a plane answer. In space the third square is included. The arithmetic is ordinary real arithmetic, and the headline uses the same loose format as the other math pages on this batch, at most 6 decimal places.',
      'From (0, 0) to (3, 4) the working line is the square root of 3 squared plus 4 squared. From (0, 0, 0) to (3, 4, 12) it is the square root of 3 squared plus 4 squared plus 12 squared. From (0, 0) to (1, 1) it is the square root of 1 plus 1. Squaring the displayed 1.414214 gives a value a little over 2, because 1.414214 is √2 cut at 6 decimal places. The distance itself was computed before that rounding.'
    ],
    formula: 'Plane: distance = √((x2 − x1)² + (y2 − y1)²)\nSpace: distance = √((x2 − x1)² + (y2 − y1)² + (z2 − z1)²)\nIn the plane, z1 and z2 are treated as 0\nThe headline keeps at most 6 decimal places',
    formulaNotes: [
      '9 + 16 = 25 and √25 = 5. 9 + 16 + 144 = 169 and √169 = 13. 1 + 1 = 2 and √2 is shown as 1.414214.',
      'A point measured against itself has every difference equal to 0, so the distance is 0. That is a real result, not an empty form.'
    ],
    examplesHeading: 'Worked coordinate distances',
    samples: [
      { title: '(0, 0) to (3, 4)', overrides: {}, blurb: 'The plane sample. Differences 3 and 4 form a 3-4-5 triangle, so the length is the whole number 5. The z boxes are ignored while the axes stay on the plane.' },
      { title: '(0, 0, 0) to (3, 4, 12)', overrides: { usez: '1', z2: 12 }, blurb: 'Space is on, so the third difference is 12. 3-4-12 is the triple whose hypotenuse is 13. Equal z values would have left the distance at 5, because a zero difference adds nothing under the square root.' },
      { title: '(0, 0) to (1, 1)', overrides: { x2: 1, y2: 1 }, blurb: 'Both differences are 1. The exact length is √2. The headline stops at 6 decimal places, 1.414214, which is why squaring the headline does not land on 2 exactly.' }
    ],
    table: { heading: 'Distances for the three pairs', caption: 'Each headline is this calculator. The plane rows ignore z. The space row includes z2 = 12.', headers: ['Points', 'Distance'] },
    limitsHeading: 'What this distance leaves out',
    limits: [
      'It is not a driving distance. Nothing on the form is a road, a speed, or a map. Two cities with these coordinates would still need a route, and this page will not supply one.',
      'It does not convert units. A difference of 3 metres and a difference of 4 feet are squared as 3 and 4. Convert both points into one unit before you type them.',
      'It does not report an angle or an area. The 3-4-5 length is only the length. The right-triangle page adds the acute angles, the area, and the perimeter for legs you type as sides.',
      'It does not accept a blank coordinate. Each box has to be a finite number. The plane choice simply refuses to read z. It does not treat a blank as a missing dimension in any other way.'
    ],
    disclaimer: 'This is the straight-line distance between coordinates you type. It is not a driving distance, a survey, or a map lookup.',
    faqs: [
      { q: 'What is the distance from (0, 0) to (3, 4)?', a: '5. The differences are 3 and 4, the squares are 9 and 16, and the square root of 25 is 5. The headline is 5 while the axes stay on the plane.' },
      { q: 'How do I include a third coordinate?', a: 'Choose space and enter z1 and z2. From (0, 0, 0) to (3, 4, 12) the headline is 13, because 9 + 16 + 144 = 169. On the plane those z boxes are ignored even if they still hold numbers.' },
      { q: 'Why is the distance from (0, 0) to (1, 1) shown as 1.414214?', a: 'The exact value is √2. The page rounds the headline to at most 6 decimal places. 1.414214 is that display. The square root was taken before the rounding.' },
      { q: 'Is this the same as a driving distance?', a: 'No. The result is the straight line √(Δx² + Δy² + Δz²). A road route is a different length, and this page does not look one up.' },
      { q: 'What is the distance from a point to itself?', a: '0. Every difference is 0, and the square root of 0 is 0. The page still returns that headline. It does not treat a repeated point as a missing input.' }
    ],
    relatedLinks: [
      { slug: 'pythagorean-theorem-calculator', label: 'Pythagorean theorem calculator', note: 'Legs 3 and 4 give a hypotenuse of 5.0000. That page starts from side lengths. This page starts from coordinates.' },
      { slug: 'right-triangle-calculator', label: 'Right triangle calculator', note: 'The same 3 and 4, typed as legs, give hypotenuse 5, area 6, and the acute angles 36.8699° and 53.1301°.' },
      { slug: 'circle-calculator', label: 'Circle calculator', note: 'A radius of 1 has circumference 6.283185. A coordinate distance is a length between points, not a circumference.' }
    ]
  }),
  'circle-calculator': page({
    slug: 'circle-calculator',
    title: 'Circle Calculator | ClearCalc',
    h1: 'Circle Calculator',
    description: 'Radius, diameter, circumference, and area from any one of them. Radius 1 has circumference 6.283185 and area 3.141593.',
    intro: [
      'A circle is fixed once you know any one of the radius, the diameter, the circumference, or the area. Radius 1 has diameter 2, circumference 2π, and area π. On this page those two π results are shown as 6.283185 and 3.141593. The headline is the radius, and the other three measurements are the lines under it.',
      'The form asks which measurement you know, then takes that one positive number and recovers the radius. A diameter of 2 is divided by 2, so the radius is 1 and the rest of the circle matches the radius sample. An area of 1 uses the square root of area divided by π. That radius is shown as 0.56419, the diameter as 1.128379, and the circumference as 3.544908. The area line comes back as 1.',
      'The unit is the unit you used for a length. An area is the square of that unit. A circumference typed in metres produces a radius in metres and an area in square metres. The page does not convert centimetres to inches. The area calculator can find a circle area from a radius. This page also runs the other direction, from area, diameter, or circumference back to the radius.'
    ],
    steps: [
      'Choose radius, diameter, circumference, or area. The sample is radius.',
      'Enter that measurement. The sample radius is 1. It has to be greater than zero.',
      'Press Calculate. The headline is the radius, with at most 6 decimal places.',
      'Read the diameter, the circumference, and the area on the lines under the headline.'
    ],
    howHeading: 'How one measurement determines the circle',
    howItWorks: [
      'Each choice is turned into a radius, and every other measurement is computed from that radius. A known radius is used as it stands. A diameter is divided by 2. A circumference is divided by 2π. An area is divided by π and then square-rooted. Diameter is twice the radius, circumference is 2π times the radius, and area is π times the radius squared. The page uses the language value of π, then rounds each displayed line on its own.',
      'Radius 1 therefore shows diameter 2, circumference 6.283185, and area 3.141593. Diameter 2 is the same circle, so the four displayed numbers match. Area 1 is a different circle: the radius is √(1/π), shown as 0.56419. A known measurement of zero is rejected, because a circle with no radius has no circumference to divide and no area to take a root of.'
    ],
    formula: 'From radius: r = known\nFrom diameter: r = known / 2\nFrom circumference: r = known / (2π)\nFrom area: r = √(known / π)\nDiameter = 2r\nCircumference = 2πr\nArea = πr²',
    formulaNotes: [
      'For r = 1, 2π is shown as 6.283185 and π is shown as 3.141593. Those are display roundings of the same π the formula uses.',
      'For area 1, √(1/π) is shown as 0.56419. Doubling that radius gives the diameter 1.128379, and 2πr gives the circumference 3.544908.'
    ],
    examplesHeading: 'Worked circle examples',
    samples: [
      { title: 'Radius 1', overrides: {}, blurb: 'The known value is already the radius. Diameter is 2. Circumference is 2π, shown as 6.283185. Area is π, shown as 3.141593.' },
      { title: 'Diameter 2', overrides: { mode: '2', known: 2 }, blurb: 'Mode 2 divides the diameter by 2. Diameter 2 is radius 1, so the circumference and the area match the radius sample exactly, including the displayed 6.283185 and 3.141593.' },
      { title: 'Area 1', overrides: { mode: '4', known: 1 }, blurb: 'Mode 4 recovers the radius as the square root of area over π. Area 1 is not the circle of radius 1. The headline radius is 0.56419, and the area line returns 1 as a check.' }
    ],
    table: { heading: 'Radius recovered from three knowns', caption: 'The headline is the radius. Diameter 2 is the same circle as radius 1. Area 1 is a smaller circle.', headers: ['Known measurement', 'Radius'] },
    limitsHeading: 'What this circle page does not solve',
    limits: [
      'It does not take an arc, a chord, or a sector. One of the four full-circle measurements is the whole input. A pizza slice needs an angle this form never asks for.',
      'It does not convert units. Radius 1 inch and radius 1 centimetre are both typed as 1, and the area is 3.141593 square units of whichever unit you meant.',
      'It does not treat a diameter as a radius. Choosing the wrong line doubles or halves the circle. Diameter 2 was divided by 2 only because the diameter choice was selected.',
      'Zero and negative measurements are rejected. The area path takes a square root of a positive quotient, and the circumference path divides by 2π, so the known value has to be above zero.'
    ],
    disclaimer: 'This solves a circle from one positive measurement. It does not draw the circle or convert the unit you had in mind.',
    faqs: [
      { q: 'What are the circumference and area of a circle with radius 1?', a: 'Circumference is 2π, shown as 6.283185. Area is π, shown as 3.141593. The diameter is 2. The headline is the radius, 1.' },
      { q: 'Why does diameter 2 give the same circle as radius 1?', a: 'The diameter choice divides by 2 before it computes anything else. 2 / 2 is 1, so the circumference and the area are computed from radius 1 and match the first sample.' },
      { q: 'How does the circle calculator turn an area into a radius?', a: 'It divides the area by π and takes the square root. Area 1 gives radius 0.56419, diameter 1.128379, and circumference 3.544908. The area line shows 1 again.' },
      { q: 'Can I start from a circumference?', a: 'Yes. Choose circumference and the radius is that length divided by 2π. The page then fills diameter and area from the radius. A circumference of 0 is rejected.' },
      { q: 'Is the area line the same tool as the area calculator?', a: 'The area calculator can find πr² from a radius, along with rectangles and other flat shapes. This page starts from any one of radius, diameter, circumference, or area and returns the other three. The displayed area for radius 1 is 3.141593 on this page.' }
    ],
    relatedLinks: [
      { slug: 'area-calculator', label: 'Area calculator', note: 'A circle area from a radius is πr², and the page also does rectangles, triangles, trapezoids, ellipses, and parallelograms.' },
      { slug: 'surface-area-calculator', label: 'Surface area calculator', note: 'A sphere of radius 2 has surface area 50.265482. That is 4πr², the outside of a solid, not the area of a flat circle.' },
      { slug: 'coordinate-distance-calculator', label: 'Coordinate distance calculator', note: 'From (0, 0) to (3, 4) the straight-line distance is 5. A radius is a length, but this page does not place the circle on a grid.' }
    ]
  }),
  'surface-area-calculator': page({
    slug: 'surface-area-calculator',
    title: 'Surface Area Calculator | ClearCalc',
    h1: 'Surface Area Calculator',
    description: 'Surface area of a box, cylinder, sphere, or cone. A box 2 by 3 by 4 has surface area 52, from 2(lw + lh + wh).',
    intro: [
      'Surface area is the outside of a solid, measured in square units of the lengths you type. A rectangular box 2 by 3 by 4 has three pairs of faces. The 2 by 3 faces contribute 2 × 6 = 12, the 2 by 4 faces contribute 2 × 8 = 16, and the 3 by 4 faces contribute 2 × 12 = 24. The sum is 52, which is 2(lw + lh + wh) with those edges.',
      'A sphere uses only the radius. Radius 2 has surface area 4πr², which is 16π and is shown as 50.265482. The second length stays on the form and has to be positive, but the sphere formula does not read it. Changing that unused length from 3 to 9 leaves the headline at 50.265482. A cylinder uses radius and height and includes both circular bases. Radius 2 and height 3 give 2πr(r + h) = 2π × 2 × 5 = 20π, shown as 62.831853.',
      'Volume is a different page. The same 2 by 3 by 4 edges have volume 2 × 3 × 4 = 24, and the volume calculator reports that cubic size, with litres or US gallons once you pick a unit. This page never multiplies the three edges into a capacity. It also does not convert a centimetre length into inches. The square unit is the square of whatever length unit you used.'
    ],
    steps: [
      'Choose the box, the cylinder, the sphere, or the cone. The sample is the box.',
      'Enter the lengths that shape uses. The box sample is length 2, width 3, and height 4.',
      'For a cylinder or a cone, the first box is the radius and the second is the height. For a sphere, only the radius is used.',
      'Press Calculate. The headline is the surface area, with at most 6 decimal places.'
    ],
    howHeading: 'How each solid’s surface area is calculated',
    howItWorks: [
      'The box adds the three distinct face products and doubles them, because each pair has a front and a back. With 2, 3, and 4 that is 2(6 + 8 + 12) = 52. The cylinder formula is 2πr(r + h). The r inside the parentheses is the pair of bases, each πr², and the h is the lateral wall 2πrh. Both bases are included. Radius 2 and height 3 produce 20π, shown as 62.831853. The sphere is 4πr². Radius 2 produces 16π, shown as 50.265482, and the width box is not read.',
      'The cone includes its base. The slant height is √(r² + h²), and the area is πr(r + slant). Radius 3 and height 4 have slant √(9 + 16) = 5, so the area is π × 3 × (3 + 5) = 24π, shown as 75.398224. Every length has to be above zero for the boxes the shape reads. A sphere still requires a positive second length even though that number is unused, because the form checks it before it chooses the formula.'
    ],
    formula: 'Box = 2(lw + lh + wh)\nCylinder, both bases = 2πr(r + h)\nSphere = 4πr²\nCone, including the base = πr(r + slant), slant = √(r² + h²)\nThe unit is the square of the length unit you typed',
    formulaNotes: [
      '2(2×3 + 2×4 + 3×4) = 2(6 + 8 + 12) = 52. The volume of those edges is 24, and that product is not the surface area.',
      'Radius 2 on a sphere is 16π, shown as 50.265482. Radius 2 and height 3 on a cylinder is 20π, shown as 62.831853. A cone of radius 3 and height 4 has slant 5 and area 75.398224.'
    ],
    examplesHeading: 'Worked surface-area examples',
    samples: [
      { title: 'Box 2 by 3 by 4', overrides: {}, blurb: 'Three pairs of faces: 12, 16, and 24. The headline is 52. The volume calculator, given the same three edges, multiplies them to 24 and calls that a volume.' },
      { title: 'Sphere of radius 2', overrides: { shape: '3' }, blurb: '4π times 2 squared is 16π, shown as 50.265482. The width still has to be a positive number so the form can be submitted, and the sphere formula does not use it.' },
      { title: 'Cylinder radius 2, height 3', overrides: { shape: '2' }, blurb: '2π × 2 × (2 + 3) = 20π, shown as 62.831853. Both circular bases are inside that product. An open tube, with the bases left off, is a different formula and is not what this choice computes.' }
    ],
    table: { heading: 'Surface areas of the worked solids', caption: 'Each headline is this calculator. The box is 52 exactly. The sphere and the cylinder are multiples of π, shown to 6 decimal places.', headers: ['Solid', 'Surface area'] },
    limitsHeading: 'What this surface area leaves out',
    limits: [
      'Volume is a different page. A 2 by 3 by 4 box has surface area 52 here and volume 24 on the volume calculator. The two results answer different questions, and this page does not print the cubic size.',
      'It does not convert units and it does not append litres or gallons. The volume page can add those once you name centimetres, metres, inches, or feet. Here the square unit is implied by the lengths you typed.',
      'A sphere does not read the second length, but that box still has to be above zero. A cylinder does not read the box height. Switching shape without changing the numbers changes which boxes count.',
      'The cylinder includes both bases, and the cone includes its base. A lateral-only area, a frustum, or a hollow solid with thickness is not a choice on the form.'
    ],
    disclaimer: 'These are the outside areas of the four solids. They are not volumes, paint estimates, or unit conversions.',
    faqs: [
      { q: 'What is the surface area of a 2 by 3 by 4 box?', a: '52. That is 2(2×3 + 2×4 + 3×4) = 2(6 + 8 + 12). The volume of the same box is 24, which belongs on the volume calculator.' },
      { q: 'What is the surface area of a sphere with radius 2?', a: '50.265482, from 4πr² = 16π. The second length is not used. It still has to be a positive number because the form checks every length it asks for before it ignores the unused one.' },
      { q: 'Does the cylinder surface area include the bases?', a: 'Yes. Radius 2 and height 3 give 2πr(r + h) = 20π, shown as 62.831853. The r in (r + h) is the two bases. A tube with open ends is not this choice.' },
      { q: 'How is a cone’s surface area calculated?', a: 'Slant is √(r² + h²), and the area is πr(r + slant), including the base. Radius 3 and height 4 have slant 5 and area 75.398224.' },
      { q: 'Why is 52 not the volume of the 2 by 3 by 4 box?', a: 'Volume multiplies length, width, and height once: 2 × 3 × 4 = 24. Surface area doubles each pair of faces. The volume page reports 24.0000 cubic units once you also choose a unit. This page stops at 52.' }
    ],
    relatedLinks: [
      { slug: 'volume-calculator', label: 'Volume calculator', note: 'The 2 by 3 by 4 box is 24.0000 cubic feet when the unit is feet. Surface area of those edges is 52 here.' },
      { slug: 'area-calculator', label: 'Area calculator', note: 'Flat shapes, including a circle of area πr². The cylinder on this page uses that circle twice, as the two bases, and then adds the wall.' },
      { slug: 'circle-calculator', label: 'Circle calculator', note: 'Radius 1 has area 3.141593 and circumference 6.283185. Those are the flat pieces inside a cylinder, not the cylinder surface by themselves.' }
    ]
  }),
  'right-triangle-calculator': page({
    slug: 'right-triangle-calculator',
    title: 'Right Triangle Calculator | ClearCalc',
    h1: 'Right Triangle Calculator',
    description: 'Solve a right triangle from two legs, a hypotenuse and a leg, or a leg and an acute angle. Legs 3 and 4 give hypotenuse 5 and area 6.',
    intro: [
      'A right triangle is fixed by two legs, by the hypotenuse and one leg, or by one leg and an acute angle. Legs 3 and 4 give hypotenuse √(9 + 16) = √25 = 5. The area is half of 3 × 4, which is 6. The perimeter is 3 + 4 + 5 = 12. The angle opposite the leg of 3 is 36.8699°, and the angle opposite the leg of 4 is 53.1301°. The third angle is the right angle.',
      'The headline is always the hypotenuse, including in the mode that starts from the hypotenuse. Put 13 in the hypotenuse box and 5 in the known-leg box. The missing leg is √(169 − 25) = √144 = 12. The headline still reads hypotenuse 13. The other leg line is 12, the area is 30, and the perimeter is 30. The angles are 22.6199° opposite the leg of 5, and 67.3801° opposite the leg of 12.',
      'The third mode takes the leg adjacent to an acute angle, in degrees. Adjacent 3 and 30° give the opposite leg as 3 × tan(30°), shown as 1.732051, and the hypotenuse as 3 / cos(30°), shown as 3.464102. The angle list is 60° and 30°. The Pythagorean page solves a side only. It prints the side to four decimal places and an area byproduct. This page also prints both acute angles, the area, and the perimeter, and it can start from an angle.'
    ],
    steps: [
      'Choose two legs, hypotenuse and one leg, or one leg and an acute angle. The sample is two legs.',
      'In the first mode, enter the legs. The sample is 3 and 4. In the second mode, the first box is the hypotenuse and the second is the known leg.',
      'In the third mode, the first box is the leg adjacent to the angle and the second box is the angle in degrees, greater than 0 and less than 90.',
      'Press Calculate. The headline is the hypotenuse. Read the other leg, the two acute angles, the area, and the perimeter underneath.'
    ],
    howHeading: 'How the right triangle is solved',
    howItWorks: [
      'Two legs use the Pythagorean relation directly. The hypotenuse is the square root of the sum of the squares. Legs 3 and 4 produce 5. The area is the product of the legs divided by 2, so 6, and the perimeter adds the three sides, so 12. The first acute angle is the inverse tangent of the first leg over the other leg, converted from radians to degrees. That is the angle opposite the first leg. The second acute angle is 90° minus the first.',
      'Hypotenuse and one leg subtract the squares instead of adding them. The known leg has to be shorter than the hypotenuse, so 5 and 5 is rejected. Hypotenuse 13 and leg 5 leave √144 = 12. A leg and an angle stay in degrees inside the form. The opposite leg is the adjacent leg times the tangent of the angle, and the hypotenuse is the adjacent leg divided by the cosine. Adjacent 3 at 30° shows opposite 1.732051 and hypotenuse 3.464102. An angle of 0° or 90° is rejected, because the tangent or the cosine would not give a triangle with two acute angles.'
    ],
    formula: 'Two legs: hypotenuse = √(a² + b²)\nHypotenuse and one leg: other leg = √(hypotenuse² − leg²), and the leg must be shorter\nLeg and angle, in degrees: opposite = adjacent × tan(angle), hypotenuse = adjacent / cos(angle)\nArea = (first leg × other leg) / 2\nPerimeter = first leg + other leg + hypotenuse\nAngles: atan2(first leg, other leg) in degrees, then 90° minus that angle',
    formulaNotes: [
      'Legs 3 and 4: hypotenuse 5, area 6, perimeter 12, angles 36.8699° and 53.1301°. The 36.8699° angle is opposite the leg of 3.',
      'Hypotenuse 13 and leg 5: the other leg is 12, the area is 30, and the perimeter is 30. Adjacent 3 at 30° shows hypotenuse 3.464102, other leg 1.732051, and angles 60° and 30°.'
    ],
    examplesHeading: 'Worked right-triangle examples',
    samples: [
      { title: 'Legs 3 and 4', overrides: {}, blurb: 'Both legs were typed. The hypotenuse is 5 and the area is 6. The angle opposite 3 is 36.8699°, and the angle opposite 4 is 53.1301°. The perimeter is 12.' },
      { title: 'Hypotenuse 13 and leg 5', overrides: { mode: '2', a: 13, b: 5 }, blurb: 'Mode 2. The first box is the hypotenuse, 13, and the second is the known leg, 5. The missing leg is 12. The headline remains the hypotenuse, 13, rather than the leg that was just solved. Area and perimeter are both 30.' },
      { title: 'Adjacent leg 3 at 30 degrees', overrides: { mode: '3', a: 3, b: 30 }, blurb: 'Mode 3. The angle is in degrees and is adjacent to the leg of 3. The opposite leg is 3 × tan(30°), shown as 1.732051. The hypotenuse is 3 / cos(30°), shown as 3.464102. The angle list reads 60° and 30°.' }
    ],
    table: { heading: 'Hypotenuse for three right triangles', caption: 'The headline is the hypotenuse in every mode. The missing leg, the angles, the area, and the perimeter are detail lines.', headers: ['Known parts', 'Hypotenuse'] },
    limitsHeading: 'What this right-triangle page leaves out',
    limits: [
      'The Pythagorean page solves a side only. Legs 3 and 4 are 5.0000 there. This page reports that hypotenuse as 5 and also reports the angles, the area 6, and the perimeter 12. Use the Pythagorean page when the side is the only result you want.',
      'The right angle is assumed. An acute or obtuse triangle needs a different relation, and this form has no place to type an angle that is not the acute angle in the third mode, or the implied 90° between the legs.',
      'Mode 2 rejects a leg that is longer than or equal to the hypotenuse. A leg cannot be the longest side. Mode 3 rejects an angle that is not strictly between 0° and 90°.',
      'It does not convert units, and it does not take a coordinate pair. Differences of coordinates belong on the distance page, which returns the length and stops there.'
    ],
    disclaimer: 'This solves a right triangle from the two measurements you choose. It does not check a drawing, and the angle in the third mode is in degrees.',
    faqs: [
      { q: 'What is the hypotenuse and the area for legs 3 and 4?', a: 'The hypotenuse is 5 and the area is 6. The perimeter is 12. The angles are 36.8699° opposite the leg of 3, and 53.1301° opposite the leg of 4, plus the right angle.' },
      { q: 'How do I enter a hypotenuse and one leg?', a: 'Choose the second mode. Put the hypotenuse in the first box and the known leg in the second. Hypotenuse 13 and leg 5 give the other leg 12. The headline is still hypotenuse 13. The known leg has to be shorter than the hypotenuse.' },
      { q: 'What does a leg of 3 and an angle of 30 degrees produce?', a: 'The opposite leg is shown as 1.732051 and the hypotenuse as 3.464102. The area is 2.598076 and the perimeter is 8.196152. The angles are listed as 60° and 30°. The 30° is the angle you typed, adjacent to the leg of 3.' },
      { q: 'How is this different from the Pythagorean calculator?', a: 'That page solves one side and shows it to four decimal places. Legs 3 and 4 are 5.0000 there. This page uses the same square-root relation for two legs, then also reports both acute angles, the area, and the perimeter, and it accepts an angle in the third mode.' },
      { q: 'Why is the angle entered in degrees?', a: 'The third mode multiplies degrees by π/180 before it calls tangent and cosine, and it converts the inverse tangent back to degrees for the angle list. An angle of 90 is rejected. Type 30, not π/6.' }
    ],
    relatedLinks: [
      { slug: 'pythagorean-theorem-calculator', label: 'Pythagorean theorem calculator', note: 'Legs 3 and 4 give 5.0000, and hypotenuse 13 with leg 5 gives 12.0000. That page solves a side only.' },
      { slug: 'coordinate-distance-calculator', label: 'Coordinate distance calculator', note: 'From (0, 0) to (3, 4) the distance is 5. It does not report the 36.8699° angle or the area 6.' },
      { slug: 'area-calculator', label: 'Area calculator', note: 'A triangle area from base and height, plus rectangles and circles. It does not solve a hypotenuse from two legs.' }
    ]
  }),
  'half-life-calculator': page({
    slug: 'half-life-calculator',
    title: 'Half-Life Calculator | ClearCalc',
    h1: 'Half-Life Calculator',
    description: 'Amount left after a constant half-life, or the time to reach a smaller target. Start 100, half-life 10, elapsed 10 leaves 50.',
    intro: [
      'A constant half-life cuts the remaining amount in half once each half-life has passed. Start at 100 with a half-life of 10. After one half-life, elapsed time 10, the amount left is 50. After two half-lives, elapsed time 20, the amount left is 25. The formula is the starting amount times one half, raised to the power of elapsed time divided by the half-life.',
      'The other question asks how long it takes to fall from the start to a smaller target. From 100 down to 25, with the same half-life of 10, the ratio 100/25 is 4, and 4 is 2 to the power 2, so two half-lives have to pass. The time is 10 × 2 = 20. The headline reads 20 time units. The check line recomputes the amount and gets 25.',
      'The time unit is whatever unit the half-life was typed in. A half-life of 10 years and an elapsed time of 10 mean 10 years, and the amount left is 50. A half-life of 10 hours uses hours. The page does not convert hours to years. This is exponential decay with one constant half-life. It is not a medical clearance model, and it does not know a dose, a compartment, or a laboratory assay.'
    ],
    steps: [
      'Choose the amount left, or the time to reach a target. The sample is the amount left.',
      'Enter the starting amount and the half-life. The sample starts at 100 with a half-life of 10. Both have to be above zero.',
      'For the amount left, enter the elapsed time in the same unit as the half-life. The sample elapsed time is 10. Zero is allowed. A negative time is rejected.',
      'Press Calculate. For a target, switch questions and enter a target below the starting amount. The sample target is 25.'
    ],
    howHeading: 'How the half-life amount and the time are calculated',
    howItWorks: [
      'The amount left is start × (1/2) raised to (elapsed / half-life). Elapsed 10 and half-life 10 is an exponent of 1, so 100 × 1/2 = 50. Elapsed 20 is an exponent of 2, so 100 × 1/4 = 25. Elapsed 0 is an exponent of 0, and the amount left is the starting 100. The page reports how many halves have elapsed, which is the exponent itself.',
      'The time to a target is half-life × ln(start / target) / ln(2). From 100 to 25, ln(4) / ln(2) is 2, and 2 × 10 is 20. The headline adds the words time units so the number is not mistaken for an amount. The target has to be below the start. A target of 100, or anything larger, is rejected, because this page models decay. The expression 10*ln(100/25)/ln(2) evaluates to 20 in the expression calculator, which is the same time without the unit label.'
    ],
    formula: 'Amount left = start × (1/2)^(elapsed / half-life)\nTime = half-life × ln(start / target) / ln(2)\nThe target must be below the start\nElapsed time may be zero and may not be negative\nThe time unit is the unit of the half-life you typed',
    formulaNotes: [
      '100 × (1/2)^(10/10) = 50. 100 × (1/2)^(20/10) = 25. 100 × (1/2)^(0/10) = 100.',
      'Time from 100 to 25 with half-life 10 is 20 time units. The check amount after that time is 25. A half-life typed in years produces a time in years.'
    ],
    examplesHeading: 'Worked half-life examples',
    samples: [
      { title: 'Elapsed 10 leaves 50', overrides: {}, blurb: 'One half-life has passed, because 10 / 10 = 1. Half of 100 is 50. The unit is the unit you used for the half-life of 10.' },
      { title: 'Elapsed 20 leaves 25', overrides: { elapsed: 20 }, blurb: 'Two half-lives have passed. A quarter of 100 is 25. The same 20, if the half-life was typed in hours, is 20 hours, not 20 years.' },
      { title: 'Time to reach 25', overrides: { mode: '2' }, blurb: 'The target 25 is two halvings below 100. With a half-life of 10 the time is 20 time units. The check line returns 25, which matches the elapsed-20 sample.' }
    ],
    table: { heading: 'Half-life results for the sample inputs', caption: 'The first two headlines are amounts left. The third headline is a time, in the unit of the half-life.', headers: ['Question', 'Result'] },
    limitsHeading: 'What this half-life model leaves out',
    limits: [
      'It is not a medical clearance model. It does not estimate how a drug leaves the body, and it does not read an assay, a dose, or a patient. The inputs are a starting amount, a half-life, and either an elapsed time or a smaller target.',
      'The time unit is whatever unit the half-life was typed in. The page will not turn hours into years or minutes into days. If the half-life is 10 years, type the elapsed time in years.',
      'The target has to be above zero and below the starting amount. A target of zero is rejected before the logarithm is used. A target equal to the start, or any larger target, is rejected because the page models decay.',
      'The half-life is constant. A process whose half-life changes, or a mix of two half-lives, is not a second field on the form. Elapsed time can be zero, and the amount left is then the starting amount.'
    ],
    disclaimer: 'This is constant-half-life exponential decay of the numbers you type. It is not a medical clearance model and it is not a laboratory result.',
    faqs: [
      { q: 'How much is left after one half-life if I start at 100?', a: '50. With half-life 10 and elapsed 10, the exponent is 1, and 100 × 1/2 = 50. After elapsed 20 the amount is 25.' },
      { q: 'How long does it take to fall from 100 to 25?', a: '20 time units when the half-life is 10. That is half-life × ln(100/25) / ln(2). The check amount at that time is 25. The headline says time units because the page does not invent a unit you did not type.' },
      { q: 'What unit is the half-life time in?', a: 'The unit of the half-life you typed. A half-life of 10 years makes the elapsed time and the solved time years. A half-life of 10 hours makes them hours. The page does not convert one unit into another.' },
      { q: 'Is this a medical clearance calculator?', a: 'No. The formula is a single constant half-life. It does not model drug clearance, dosing, or an assay. Use it only for the exponential decay of the amounts you enter.' },
      { q: 'What does an elapsed time of zero return?', a: 'The starting amount. 100 × (1/2)^0 = 100. A negative elapsed time is rejected. A target that is not smaller than the start is also rejected.' }
    ],
    relatedLinks: [
      { slug: 'expression-calculator', label: 'Expression calculator', note: '100*(1/2)^(20/10) is 25, and 10*ln(100/25)/ln(2) is 20. Those are the same two formulas, typed as expressions.' },
      { slug: 'exponent-calculator', label: 'Exponent calculator', note: '2 raised to 10 is 1,024. A half-life uses a power of 1/2, with the exponent equal to elapsed time divided by the half-life.' },
      { slug: 'fraction-calculator', label: 'Fraction calculator', note: '1 1/2 + 2 1/3 is 3 5/6. The factor 1/2 in a half-life is a decay step, not a mixed-number sum.' }
    ]
  }),
  'number-base-calculator': page({
    slug: 'number-base-calculator',
    title: 'Number Base Calculator | ClearCalc',
    h1: 'Number Base Calculator',
    description: 'Convert or do exact integer arithmetic in bases 2, 8, 10, and 16. Binary 11111111 is the decimal 255.',
    intro: [
      'Binary 11111111 is eight ones. From the left, the place values are 128, 64, 32, 16, 8, 4, 2, and 1. Their sum is 255. The convert choice reads the digits in the input base as an exact whole number and writes that integer in the output base. The sample input base is binary and the sample output base is decimal, so the headline is 255.',
      'Hexadecimal FF is the same integer. F is 15, so FF is 15 × 16 + 15 = 255. Choose input base 16, leave the output base at 10, and type FF. The headline is 255 again. The decimal line under a conversion repeats that integer with thousands separators when it is large enough to need them. 255 has no separator.',
      'Add, subtract, and multiply read both boxes in the input base, do the operation with exact integer arithmetic, and write the result in the output base. Binary 11111111 plus binary 1, written in decimal, is 256. The same 256, written back in binary, is grouped as 1 0000 0000. The spaces are groups of four digits. They are not part of the value. Bases 2, 8, 10, and 16 are the only choices. Fractions are rejected.'
    ],
    steps: [
      'Choose convert, add, subtract, or multiply. The sample is convert.',
      'Choose the input base and the output base. The sample reads base 2 and writes base 10. The bases are 2, 8, 10, and 16.',
      'Enter the whole number. The sample is 11111111. For arithmetic, enter the second whole number in the same input base. The sample second number is 1.',
      'Press Calculate. The headline is the result in the output base. Read the decimal value on the line underneath.'
    ],
    howHeading: 'How a base conversion and a base sum are calculated',
    howItWorks: [
      'Each digit is looked up in 0–9 and then A–F, after the input is trimmed, spaces and underscores are removed, and letters are read in upper case. The digits accumulate as an exact integer: start at 0, and for each digit multiply by the base and add the digit value. A leading minus is allowed and flips the integer at the end. A digit that does not belong in the base is rejected, so a 2 cannot appear in binary. A decimal point is not a digit, so 1.5 is rejected in every base, including decimal.',
      'Conversion writes that integer in the output base. Addition, subtraction, and multiplication combine two such integers and then write the result. Binary 11111111 is 255, and 255 + 1 is 256, so the add sample headlines 256 when the output base stays at 10. Binary and hexadecimal headlines insert a space every four digits, counting from the right. Decimal 256 in binary is 1 0000 0000. Hexadecimal output of decimal 255 is FF, with no space, because two digits do not fill a group of four. Octal 17 converts to binary 1111 and has decimal value 15, which is the base-8 place check: 1 × 8 + 7.'
    ],
    formula: 'Value = digits read in the input base, as an exact integer\nConvert writes that integer in the output base\nAdd, subtract, and multiply combine two integers from the input base, then write the result in the output base\nBases are 2, 8, 10, and 16 only\nBinary and hexadecimal headlines group digits by fours',
    formulaNotes: [
      '11111111 in base 2 is 128 + 64 + 32 + 16 + 8 + 4 + 2 + 1 = 255. FF in base 16 is 15 × 16 + 15 = 255.',
      '11111111 + 1 in base 2 is 256 in base 10. Written in base 2, 256 is 1 0000 0000, and the space is grouping. Octal 17 is decimal 15 and binary 1111.'
    ],
    examplesHeading: 'Worked base examples',
    samples: [
      { title: 'Binary 11111111 to decimal', overrides: {}, blurb: 'Eight ones. The place values from 128 down to 1 sum to 255. The headline is the decimal writing, with no digit groups, because the output base is 10.' },
      { title: 'Hex FF to decimal', overrides: { from: '16', left: 'FF' }, blurb: 'F is 15. FF is 15 × 16 + 15 = 255. Lower case ff is read the same way, because letters are upper-cased before the digits are valued.' },
      { title: 'Add binary 11111111 and 1', overrides: { op: '2' }, blurb: 'Both numbers are read in base 2. 255 + 1 = 256, and the output base is still 10, so the headline is 256. The decimal line agrees. This is exact integer arithmetic, not a floating-point sum.' }
    ],
    table: { heading: 'Base results for the three samples', caption: 'The headline is written in the output base. Spaces, when a binary or hex headline has them, are groups of four digits.', headers: ['Input', 'Result'] },
    limitsHeading: 'What this base calculator will not accept',
    limits: [
      'The only bases are 2, 8, 10, and 16. Base 3, base 12, and a base you type yourself are not on the form. Octal 17 is accepted, and it is decimal 15.',
      'The values are exact integers. A fraction, a decimal point, and a digit from outside the base are rejected. Binary cannot contain a 2. The arithmetic does not round.',
      'A binary or hexadecimal headline groups digits in fours. The space in 1 0000 0000 is not a thousands separator and it is not part of the integer. Decimal headlines are not grouped that way. The separate decimal line uses commas for thousands.',
      'At most 200 digits are read, after spaces and underscores are removed. A leading minus is allowed. There is no division choice, so a remainder is the long-division page, in decimal whole numbers.'
    ],
    disclaimer: 'This converts and combines exact whole numbers in bases 2, 8, 10, and 16. It is not floating-point arithmetic and it does not accept fractions.',
    faqs: [
      { q: 'What is binary 11111111 in decimal?', a: '255. The places are 128 + 64 + 32 + 16 + 8 + 4 + 2 + 1. The sample conversion uses input base 2 and output base 10, and the headline is 255.' },
      { q: 'What is hexadecimal FF in decimal?', a: '255. F is 15, and 15 × 16 + 15 = 255. The page accepts ff as well, because it upper-cases the letters before it reads them.' },
      { q: 'What is binary 11111111 plus 1?', a: '256 when the sum is written in decimal. Both inputs are read in base 2, and the sample output base is 10. In binary that integer is 1 0000 0000, with a space that only groups the digits.' },
      { q: 'Which bases can I use?', a: '2, 8, 10, and 16. Octal 17 is binary 1111 and decimal 15. A digit that does not belong in the chosen base is rejected, and a decimal point is rejected in every base.' },
      { q: 'Are the results exact?', a: 'Yes. The digits are accumulated as an integer, and add, subtract, and multiply use that integer arithmetic. This is not a floating-point calculator. Fractions are not accepted.' }
    ],
    relatedLinks: [
      { slug: 'roman-numeral-converter', label: 'Roman numeral converter', note: '1994 is MCMXCIV. That is a numeral, not a place-value base, and it stops at 3,999.' },
      { slug: 'exponent-calculator', label: 'Exponent calculator', note: '2 raised to 8 is 256, the place value just above the binary sample. That page uses a floating-point power. This page keeps exact integers.' },
      { slug: 'expression-calculator', label: 'Expression calculator', note: '2+3*4 is 14 in ordinary decimal arithmetic. It does not read binary digits or a hexadecimal letter.' }
    ]
  }),
  'roman-numeral-converter': page({
    slug: 'roman-numeral-converter',
    title: 'Roman Numeral Converter | ClearCalc',
    h1: 'Roman Numeral Converter',
    description: 'Standard Roman numerals from 1 to 3,999. 1994 is MCMXCIV. 4 is IV, and IIII is rejected.',
    intro: [
      '1994 is written MCMXCIV. M is 1,000. CM is 900, which is 1,000 minus 100. XC is 90, which is 100 minus 10. IV is 4, which is 5 minus 1. Add those values: 1,000 + 900 + 90 + 4 = 1,994. The number-to-numeral sample starts at 1994 and the headline is MCMXCIV.',
      '4 is IV, not IIII. The page builds a numeral from the standard subtractive pairs, largest first: M, CM, D, CD, C, XC, L, XL, X, IX, V, IV, and I. It takes as many of each pair as the remaining value allows. 4 takes one IV and stops. Reading runs the other way. MCMXCIV is parsed with those same pairs and returns 1994. A lower-case mcmxciv is accepted, because the letters are upper-cased first.',
      'The range is 1 to 3,999. 3,999 is MMMCMXCIX. Zero and 4,000 are rejected on the way from a number to a numeral. On the way back, the letters are totaled and then checked against the standard writing of that total. IIII adds up like four ones, but the standard writing of 4 is IV, so IIII is rejected rather than rewritten as 4. VV and IC fail the same check.'
    ],
    steps: [
      'Choose number to numeral, or numeral to number. The sample is number to numeral.',
      'For a number, enter a whole number from 1 to 3,999. The sample is 1994.',
      'For a numeral, switch direction and type the letters. The sample numeral is MCMXCIV. Lower case is accepted.',
      'Press Calculate. The headline is the numeral, or the whole number if you are reading one.'
    ],
    howHeading: 'How a standard Roman numeral is written and read',
    howItWorks: [
      'Writing walks a fixed list of values: 1,000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, and 1, with glyphs M, CM, D, CD, C, XC, L, XL, X, IX, V, IV, and I. While the remaining value is at least the next entry, that glyph is appended and the value is subtracted. 1994 takes M, then CM, then XC, then IV. 4 takes IV only. Nothing in that list produces IIII.',
      'Reading accepts only the letters I, V, X, L, C, D, and M. It consumes a standard pair when the next two letters are IV, IX, XL, XC, CD, or CM. Otherwise it consumes one letter. The total is then written back with the same rules, and the original numeral has to match that writing. IIII totals 4 and the standard writing is IV, so it is rejected. A vinculum, a bar that would multiply by 1,000 and reach past 3,999, is not a character this page reads.'
    ],
    formula: 'Values, largest first: M 1000, CM 900, D 500, CD 400, C 100, XC 90, L 50, XL 40, X 10, IX 9, V 5, IV 4, I 1\nWrite by taking each value as many times as it fits\nRead the standard pairs, then require the numeral to match the standard writing\nWhole numbers from 1 to 3999',
    formulaNotes: [
      '1994 = 1000 + 900 + 90 + 4 = M + CM + XC + IV = MCMXCIV. Reading MCMXCIV returns 1994.',
      '4 = IV. IIII is rejected because it is not the standard writing of 4. 3999 = MMMCMXCIX. 0 and 4000 are outside the range.'
    ],
    examplesHeading: 'Worked Roman numeral examples',
    samples: [
      { title: '1994 to MCMXCIV', overrides: {}, blurb: 'One thousand, then nine hundred, then ninety, then four. The subtractive pairs are CM, XC, and IV. The headline is MCMXCIV.' },
      { title: '4 to IV', overrides: { number: 4 }, blurb: 'The list reaches 4 and uses IV once. It does not emit four I glyphs. IIII is the writing this direction will not produce.' },
      { title: 'MCMXCIV to 1994', overrides: { mode: '2' }, blurb: 'The reader takes CM, XC, and IV as pairs and M as a single letter. The total is 1994, and that numeral is the standard writing of 1994, so it is accepted.' }
    ],
    table: { heading: 'Roman conversions for the three samples', caption: 'Number to numeral headlines are glyphs. Numeral to number headlines are the whole-number total.', headers: ['Input', 'Result'] },
    limitsHeading: 'What this Roman converter rejects',
    limits: [
      'The range is 1 to 3,999. Zero, negatives, and 4,000 or more are rejected on the number side. Vinculum numerals above 3,999 are not read on the letter side.',
      'IIII is rejected. So are VV, IC, and IIIII. A string is accepted only when it uses I, V, X, L, C, D, and M and it is the standard writing of its value. The page does not quietly rewrite IIII as IV.',
      'Only the subtractive pairs IV, IX, XL, XC, CD, and CM are recognized as pairs. A clock face that uses IIII for 4 will not convert. Lower case is accepted because it is upper-cased before the check.',
      'This is not a place-value base. Binary 11111111 is 255 on the number-base page. Roman numerals do not have a zero digit, and they do not encode a fraction.'
    ],
    disclaimer: 'This converts standard Roman numerals from 1 to 3,999. IIII is rejected, and numerals above 3,999 are not read.',
    faqs: [
      { q: 'What is 1994 in Roman numerals?', a: 'MCMXCIV. M is 1,000, CM is 900, XC is 90, and IV is 4. The sum is 1,994. Reading MCMXCIV returns 1994.' },
      { q: 'Why is 4 written IV and not IIII?', a: 'The standard list uses the subtractive pair IV for 4. The writer never emits IIII. If you type IIII in the other direction, the letters total 4, the standard writing is IV, and the page rejects the mismatch.' },
      { q: 'What range of numbers can be converted?', a: 'Whole numbers from 1 to 3,999. The top value is MMMCMXCIX. Zero and 4,000 are rejected. A bar over a numeral, used historically for thousands beyond that range, is not accepted.' },
      { q: 'Does lower case work?', a: 'Yes. mcmxciv is upper-cased to MCMXCIV and returns 1994. iv returns 4. Any letter outside I, V, X, L, C, D, and M is rejected.' },
      { q: 'Why is IC rejected when it looks like 99?', a: 'IC is not one of the standard pairs. 99 is XCIX, built from XC and IX. The reader totals a numeral and then requires it to match the standard writing, so IC fails that check.' }
    ],
    relatedLinks: [
      { slug: 'number-base-calculator', label: 'Number base calculator', note: 'Binary 11111111 is decimal 255, using place values. Roman numerals are not a base, and they stop at 3,999.' },
      { slug: 'long-division-calculator', label: 'Long division calculator', note: '100 divided by 7 is quotient 14 remainder 2. That is whole-number division, not a numeral conversion.' },
      { slug: 'fraction-calculator', label: 'Fraction calculator', note: '1 1/2 + 2 1/3 is 3 5/6. Roman numerals on this page are whole numbers from 1 to 3,999, with no fraction part.' }
    ]
  }),
  'long-division-calculator': page({
    slug: 'long-division-calculator',
    title: 'Long Division Calculator | ClearCalc',
    h1: 'Long Division Calculator',
    description: 'Quotient, remainder, and digit steps for two whole numbers. 100 divided by 7 is quotient 14 remainder 2.',
    intro: [
      'Long division of whole numbers splits 100 by 7 into a quotient and a remainder. 7 goes into 100 fourteen times, because 7 × 14 = 98, and 100 − 98 = 2. The headline is quotient 14. The remainder line is 2. The check line is 7 × 14 + 2 = 100. The decimal 100/7 is shown beside that, as 14.28571429, and it is not the headline.',
      'The digit steps bring down one digit of the dividend at a time. Start from 0. The first digit of 100 is 1: 1 ÷ 7 contributes 0, subtract 0, and leave 1. Bring down 0 to make 10: 10 ÷ 7 contributes 1, subtract 7, and leave 3. Bring down 0 to make 30: 30 ÷ 7 contributes 4, subtract 28, and leave 2. The contributed digits are 0, 1, and 4. The leading 0 is the first step, and the headline quotient is 14. The last leftover is the remainder 2.',
      'Both inputs are whole numbers. The dividend runs from 0 through 1,000,000,000,000,000. The divisor runs from 1 through 1,000,000,000,000. A divisor of 0 is rejected. 25 divided by 4 is quotient 6 remainder 1, and 4 × 6 + 1 = 25. 144 divided by 12 is quotient 12 remainder 0, an exact division. The fraction calculator writes 100 ÷ 7 as the mixed number 14 2/7. This page keeps the quotient and the remainder separate and prints the digit steps.'
    ],
    steps: [
      'Enter the dividend as a whole number. The sample is 100. Zero is allowed.',
      'Enter the divisor as a whole number from 1 up. The sample is 7.',
      'Press Calculate. The headline is the quotient. The remainder is the next line.',
      'Read the digit steps. Each line is one digit of the dividend brought down, the digit it contributes to the quotient, and what is left.'
    ],
    howHeading: 'How the quotient, the remainder, and the digit steps are found',
    howItWorks: [
      'The quotient is the greatest whole number of times the divisor fits in the dividend, which is the dividend divided by the divisor and then rounded down. The remainder is the dividend minus that quotient times the divisor. For 100 and 7, the quotient is 14 and the remainder is 2, and 7 × 14 + 2 returns 100. The same identity is printed for every pair, so 4 × 6 + 1 = 25 and 12 × 12 + 0 = 144.',
      'The steps rebuild that quotient one digit at a time. A running value starts at 0. Each digit of the dividend is appended, the divisor divides that running value, the contributed digit times the divisor is subtracted, and the leftover stays for the next digit. For 100 ÷ 7 the lines are 1 ÷ 7 contributes 0, 10 ÷ 7 contributes 1, and 30 ÷ 7 contributes 4. For 25 ÷ 4 the lines are 2 ÷ 4 contributes 0, then 25 ÷ 4 contributes 6 and leaves 1. For 144 ÷ 12 the lines are 1 ÷ 12 contributes 0, 14 ÷ 12 contributes 1 and leaves 2, and 24 ÷ 12 contributes 2 and leaves 0. Up to eight of those lines are shown. A longer dividend still has an exact quotient and remainder.'
    ],
    formula: 'Quotient = the whole number of times the divisor fits in the dividend\nRemainder = dividend − quotient × divisor\nCheck: divisor × quotient + remainder = dividend\nEach digit of the dividend is brought down into a running value\nDividend is a whole number from 0 to 1000000000000000\nDivisor is a whole number from 1 to 1000000000000',
    formulaNotes: [
      '100 = 7 × 14 + 2. The digit contributions are 0, then 1, then 4, and the headline drops the leading zero, leaving quotient 14. The decimal 14.28571429 is quotient plus remainder over divisor.',
      '25 = 4 × 6 + 1, and the decimal is 6.25. 144 = 12 × 12 + 0, so the remainder is 0 and the decimal is 12.'
    ],
    examplesHeading: 'Worked long-division examples',
    samples: [
      { title: '100 divided by 7', overrides: {}, blurb: 'Quotient 14, remainder 2, because 98 + 2 = 100. The steps contribute 0 from the digit 1, then 1 from 10, then 4 from 30, leaving 2. The fraction form of the same pair is 14 2/7.' },
      { title: '25 divided by 4', overrides: { dividend: 25, divisor: 4 }, blurb: 'Quotient 6 and remainder 1. The first digit 2 contributes 0. Bringing down 5 makes 25, which contributes 6, and 24 subtracted from 25 leaves 1. The decimal is 6.25.' },
      { title: '144 divided by 12', overrides: { dividend: 144, divisor: 12 }, blurb: 'An exact division. The steps contribute 0, then 1, then 2, and the last subtraction leaves 0. The headline is quotient 12 and the remainder is 0. The decimal is 12.' }
    ],
    table: { heading: 'Quotients for the three divisions', caption: 'The headline is the quotient. The remainder and the digit steps are the detail lines, not a second column.', headers: ['Problem', 'Quotient'] },
    limitsHeading: 'What this long division does not do',
    limits: [
      'The dividend and the divisor are whole numbers. A decimal such as 10.5 is rejected. The dividend can be 0, and the quotient and remainder are then 0. The divisor starts at 1. Zero is rejected, and the top of the divisor range is 1,000,000,000,000.',
      'The headline is the quotient, not the decimal. 100 / 7 shows quotient 14, remainder 2, and mentions 14.28571429 as the decimal. The fraction calculator shows the same division as 14 2/7, with decimal 14.285714 at its own number of places.',
      'The digit list shows at most eight steps. A dividend with more digits still has an exact quotient and remainder. The omitted lines are later bring-down steps, not a change to the answer.',
      'There is no polynomial division, no repeating-decimal expansion digit by digit past the remainder, and no mixed-number reduction. The remainder stays a whole number smaller than the divisor.'
    ],
    disclaimer: 'This divides two whole numbers and shows the quotient, the remainder, and the digit steps. It does not accept a decimal divisor.',
    faqs: [
      { q: 'What is 100 divided by 7 with a remainder?', a: 'Quotient 14 and remainder 2. 7 × 14 + 2 = 100. The digit steps contribute 0, then 1, then 4, and the last leftover is 2. The decimal 14.28571429 is shown as a check, not as the headline.' },
      { q: 'What do the digit steps mean?', a: 'Each line brings down one digit of the dividend. For 100 ÷ 7, 1 ÷ 7 contributes 0 and leaves 1, 10 ÷ 7 contributes 1 and leaves 3, and 30 ÷ 7 contributes 4 and leaves 2. Those contributed digits build the quotient.' },
      { q: 'What is 25 divided by 4, and 144 divided by 12?', a: '25 ÷ 4 is quotient 6 remainder 1, and 4 × 6 + 1 = 25. 144 ÷ 12 is quotient 12 remainder 0. The second one divides exactly, so the last step leaves 0.' },
      { q: 'Why is the decimal not the headline?', a: 'The page is long division of whole numbers, so the headline is the quotient. The remainder is separate. 100 / 7 as a decimal is 14.28571429 here. The fraction calculator writes 100 ÷ 7 as 14 2/7.' },
      { q: 'Can the dividend be zero, or the divisor?', a: 'A dividend of 0 is allowed and produces quotient 0 and remainder 0. A divisor of 0 is rejected. The divisor has to be a whole number from 1 to 1,000,000,000,000, and the dividend a whole number from 0 to 1,000,000,000,000,000.' }
    ],
    relatedLinks: [
      { slug: 'fraction-calculator', label: 'Fraction calculator', note: '100 ÷ 7 is the mixed number 14 2/7, with decimal 14.285714. This page keeps quotient 14 and remainder 2, plus the digit steps.' },
      { slug: 'number-base-calculator', label: 'Number base calculator', note: 'Binary 11111111 is decimal 255, exact integer conversion. It does not show a remainder or a bring-down step.' },
      { slug: 'expression-calculator', label: 'Expression calculator', note: '100/7 in that parser is the decimal 14.28571429. It does not separate a quotient of 14 from a remainder of 2.' }
    ]
  }),
  'expression-calculator': page({
    slug: 'expression-calculator',
    title: 'Expression Calculator | ClearCalc',
    h1: 'Expression Calculator',
    description: 'A real arithmetic parser. 2+3*4 is 14 because multiplication comes first. 2^3^2 is 512, and sin(30) is 0.5.',
    intro: [
      '2+3*4 is 14 because multiplication is done before addition. The product 3*4 is 12, and 2 + 12 is 14. Parentheses change the order. (2+3)*4 adds first, inside the parentheses, and 5*4 is 20. The page reads the characters with a parser. It does not call eval(), and it does not look the text up as a program.',
      'A power uses ^. Powers are done before multiplication, and a tower of powers is evaluated from the right. 2^3^2 is 2^(3^2), which is 2^9, which is 512. It is not (2^3)^2. That parenthesized form is 8^2, which is 64. The same parser shows sqrt(9) as 3. sin(30) is shown as 0.5 because sine, cosine, and tangent take degrees. 30 degrees is a sixth of a full turn, and the sine of that angle is one half.',
      'The functions are sin, cos, tan, asin, acos, atan, sqrt, log, ln, and abs. Each takes one argument in parentheses. log is base 10, so log(1000) is 3. ln is natural, so ln(1) is 0. abs(-3.5) is 3.5. The constants are pi and e, recognized when they are not followed by a parenthesis. asin, acos, and atan return degrees, so asin(0.5) is 30. Multiplication and division share a level and run from left to right, so 8/2*2 is 8.'
    ],
    steps: [
      'Type one expression of at most 200 characters. The sample is 2+3*4.',
      'Use + and - for addition and subtraction, * and / for multiplication and division, and ^ for a power.',
      'Use parentheses to group. Function names need parentheses: sin(30), sqrt(9), log(1000), ln(1), abs(-3.5).',
      'Press Calculate. The headline is the value, with at most 8 decimal places. Degrees are the unit for every trigonometric function.'
    ],
    howHeading: 'How the expression parser decides the order',
    howItWorks: [
      'The reader walks the string from the left and never hands it to eval(). Addition and subtraction sit at the outside. Each of their sides is a product. Multiplication and division sit inside that, and each of their sides is a power. A power, when it sees ^, reads the exponent with the same power rule, so the exponent can contain another power. That is why 2^3^2 becomes 2^(3^2) = 512 rather than (2^3)^2 = 64. Unary plus and minus bind tighter still, and a function or a parenthesis is read as a single value. pi and e are the two constants.',
      'Trigonometry converts degrees to radians before sine, cosine, or tangent, and converts an inverse result back to degrees. sin(30) is shown as 0.5, cos(60) is shown as 0.5, and tan(45) is shown as 1. asin(0.5) is shown as 30. sqrt(9) is 3. A negative square root, a base-10 log of a non-positive number, division by zero, and tangent of 90° are rejected. A negative base with a fractional exponent is rejected too, so (-8)^(1/3) is not given the real cube root. The nth-root page does return -2 for the cube root of -8, because the degree there is a whole number and the odd root is allowed on purpose.'
    ],
    formula: '2+3*4 = 2 + (3*4) = 14\n(2+3)*4 = 5*4 = 20\n2^3^2 = 2^(3^2) = 512\n(2^3)^2 = 64\nsin, cos, and tan take degrees. sin(30) = 0.5. sqrt(9) = 3\n8/2*2 = (8/2)*2 = 8\nFunctions: sin cos tan asin acos atan sqrt log ln abs\nConstants: pi and e',
    formulaNotes: [
      'Powers associate to the right. Multiplication and division associate to the left and share one level, above addition and subtraction. Parentheses override both.',
      'sin(30) displays as 0.5, cos(60) as 0.5, tan(45) as 1, and asin(0.5) as 30. log(1000) is 3 and ln(1) is 0. The display keeps at most 8 decimal places.'
    ],
    examplesHeading: 'Worked expression examples',
    samples: [
      { title: '2+3*4', overrides: {}, blurb: 'Multiplication comes first. 3*4 is 12, and 2+12 is 14. Reading the plus before the times would have produced 20, which is a different expression.' },
      { title: '(2+3)*4', overrides: { expression: '(2+3)*4' }, blurb: 'The parentheses add 2 and 3 before the multiplication. 5*4 is 20. The same characters without the parentheses are the sample that returns 14.' },
      { title: '2^3^2', overrides: { expression: '2^3^2' }, blurb: 'The tower is read from the right. 3^2 is 9, and 2^9 is 512. (2^3)^2 forces the other association and returns 64. A single power such as 2^10 is 1,024, which is also what the exponent page reports for base 2 and exponent 10.' }
    ],
    table: { heading: 'Values for the three expressions', caption: 'Each headline is this parser. Powers associate to the right. Multiplication happens before addition.', headers: ['Expression', 'Value'] },
    limitsHeading: 'What this parser will not evaluate',
    limits: [
      'There is no eval(). The characters are read by the parser described above. An unknown name, a missing parenthesis, and leftover characters after a complete expression are rejected. The text can be at most 200 characters.',
      'Trigonometry is in degrees. sin(30) is 0.5. Typing 30 as if it were already a radian will not match a radian-mode calculator. asin, acos, and atan return degrees. asin(0.5) is 30. Tangent of 90° is rejected.',
      'sqrt(9) is 3. The square root of a negative number is rejected. log needs a positive argument and is base 10. ln is natural. A negative base to a fractional power, including (-8)^(1/3), is rejected here. The nth-root page returns -2 for the cube root of -8.',
      'The page does not store a previous answer, and it does not solve an equation for a letter. 8/2*2 is 8, from left to right. It is not 8/(2*2).'
    ],
    disclaimer: 'This is a real-number parser with degree-mode trigonometry. It does not call eval(), and it does not solve equations.',
    faqs: [
      { q: 'Why is 2+3*4 equal to 14?', a: 'Multiplication is done before addition. 3*4 is 12, and 2+12 is 14. (2+3)*4 is 20, because the parentheses add first. The parser does not evaluate the expression from left to right regardless of the signs.' },
      { q: 'Why is 2^3^2 equal to 512?', a: 'A tower of ^ is evaluated from the right. 2^3^2 is 2^(3^2) = 2^9 = 512. (2^3)^2 is 64. The exponent page takes one exponent only, so a tower belongs here.' },
      { q: 'Why is sin(30) equal to 0.5?', a: 'Sine, cosine, and tangent take degrees. sin(30) is shown as 0.5, cos(60) as 0.5, and tan(45) as 1. Inverse sine returns degrees, so asin(0.5) is 30. A radian-mode sine of 30 would be a different number.' },
      { q: 'What is sqrt(9), and which functions are allowed?', a: 'sqrt(9) is 3. The functions are sin, cos, tan, asin, acos, atan, sqrt, log, ln, and abs. log(1000) is 3, ln(1) is 0, and abs(-3.5) is 3.5. pi and e are the constants.' },
      { q: 'Does the expression calculator use eval()?', a: 'No. It walks the string in a parser: powers first and from the right, then multiplication and division from the left, then addition and subtraction from the left. Division by zero, a negative square root, and an unknown name are rejected.' }
    ],
    relatedLinks: [
      { slug: 'exponent-calculator', label: 'Exponent calculator', note: '2 raised to 10 is 1,024, one base and one exponent. 2^3^2 is 512 here because a tower is evaluated from the right.' },
      { slug: 'half-life-calculator', label: 'Half-life calculator', note: 'Start 100, half-life 10, elapsed 20 leaves 25. The expression 100*(1/2)^(20/10) is that same 25.' },
      { slug: 'fraction-calculator', label: 'Fraction calculator', note: '1 1/2 + 2 1/3 is 3 5/6. This parser uses decimals and functions. It does not reduce a mixed number.' }
    ]
  })
};
