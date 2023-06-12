function generateLogo(text, textColor, shape, shapeColor) {
  let svg = '';

  if (shape === 'circle') {
    svg = `
      <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${shapeColor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
      </svg>
    `;
  } else if (shape === 'triangle') {
    svg = `
      <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 18 244, 182 56, 182" fill="${shapeColor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
      </svg>
    `;
  } else if (shape === 'square') {
    svg = `
      <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="160" height="160" x="70" y="20" fill="${shapeColor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
      </svg>
    `;
  }

  return svg;
}

module.exports = { generateLogo };