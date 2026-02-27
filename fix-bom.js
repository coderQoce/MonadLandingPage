const fs = require('fs');
const path = './package.json';

try {
  const content = fs.readFileSync(path, 'utf8');
  const clean = content.replace(/^\uFEFF/, '');
  fs.writeFileSync(path, clean);
  console.log('BOM removed from package.json');
} catch (error) {
  console.error('Error fixing BOM:', error);
}
