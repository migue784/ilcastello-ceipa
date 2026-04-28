const fs = require('fs');
const htmlPath = './index.html';
const cssPath = './src/index.css';

let html = fs.readFileSync(htmlPath, 'utf8');

const themeVariables = `
@theme {
  --color-primary: #384a35;
  --color-on-primary: #ffffff;
  --color-primary-container: #50624b;
  --color-on-primary-container: #c8ddc0;
  --color-primary-fixed: #d3e9cb;
  --color-on-primary-fixed: #0f1f0d;
  --color-primary-fixed-dim: #b8ccb0;
  --color-on-primary-fixed-variant: #3a4b36;

  --color-tertiary: #891b0d;
  --color-on-tertiary: #ffffff;
  --color-tertiary-container: #aa3322;
  --color-on-tertiary-container: #ffcbc2;
  --color-tertiary-fixed: #ffdad4;
  --color-on-tertiary-fixed: #400200;
  --color-tertiary-fixed-dim: #ffb4a7;
  --color-on-tertiary-fixed-variant: #8a1c0e;

  --color-error-container: #ffdad6;
  --color-inverse-primary: #ffb4a7;
  --color-on-secondary-fixed-variant: #5c4300;
  --color-surface-container-high: #ece7e3;
  --color-secondary-fixed-dim: #ecc162;
  --color-surface-container-low: #f7f3ee;
  --color-outline-variant: #e0bfb9;
  --color-secondary-fixed: #ffdf9f;
  --color-on-secondary-container: #785800;
  --color-surface-container: #f1ede8;
  --color-outline: #8c716c;
  --color-surface-bright: #fdf9f4;
  --color-secondary: #795900;
  --color-on-surface: #1c1c19;
  --color-on-surface-variant: #58413d;
  --color-inverse-surface: #31302d;
  --color-on-error: #ffffff;
  --color-background: #fdf9f4;
  --color-on-error-container: #93000a;
  --color-on-secondary: #ffffff;
  --color-surface-container-highest: #e6e2dd;
  --color-surface-variant: #e6e2dd;
  --color-surface-tint: #ab3423;
  --color-secondary-container: #fed170;
  --color-surface-dim: #ddd9d5;
  --color-error: #ba1a1a;
  --color-on-background: #1c1c19;
  --color-surface: #fdf9f4;
  --color-inverse-on-surface: #f4f0eb;
  --color-on-secondary-fixed: #261a00;
  --color-surface-container-lowest: #ffffff;

  --font-headline: "Noto Serif", serif;
  --font-body: "Manrope", sans-serif;
  --font-label: "Manrope", sans-serif;
}
`;

let css = fs.readFileSync(cssPath, 'utf8');
if (!css.includes('@theme')) {
  css = css.replace('@import "tailwindcss";', '@import "tailwindcss";\n' + themeVariables);
  fs.writeFileSync(cssPath, css);
}

// Remove scripts
html = html.replace(/<script src="https:\/\/cdn\.tailwindcss\.com.*"><\/script>\n?/g, '');
html = html.replace(/<script id="tailwind-config">[\s\S]*?<\/script>\n?/g, '');
fs.writeFileSync(htmlPath, html);
console.log('Migration done.');
