const fs = require('fs');
const pkgPath = './package.json';
let pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
pkg.devDependencies["@tailwindcss/vite"] = "^4.0.0";
pkg.devDependencies["tailwindcss"] = "^4.0.0";
fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
