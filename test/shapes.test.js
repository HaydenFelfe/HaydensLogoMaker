const { generateLogo } = require('./lib/logo');

describe('generateLogo', () => {
  it('should generate the correct SVG output for circle shape', () => {
    const text = 'SVG';
    const textColor = 'white';
    const shape = 'circle';
    const shapeColor = 'green';

    const expectedSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="100" r="80" fill="green" />
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
    </svg>`;

    expect(generateLogo(text, textColor, shape, shapeColor)).toBe(expectedSvg);
  });

  it('should generate the correct SVG output for triangle shape', () => {
    const text = 'Logo';
    const textColor = 'black';
    const shape = 'triangle';
    const shapeColor = 'blue';

    const expectedSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <polygon points="150, 18 244, 182 56, 182" fill="blue" />
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="black">Logo</text>
    </svg>`;

    expect(generateLogo(text, textColor, shape, shapeColor)).toBe(expectedSvg);
  });

  it('should generate the correct SVG output for square shape', () => {
    const text = 'Hello';
    const textColor = 'red';
    const shape = 'square';
    const shapeColor = 'yellow';

    const expectedSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect width="300" height="200" fill="yellow" />
      <text x="150" y="100" font-size="60" text-anchor="middle" fill="red">Hello</text>
    </svg>`;

    expect(generateLogo(text, textColor, shape, shapeColor)).toBe(expectedSvg);
  });
});