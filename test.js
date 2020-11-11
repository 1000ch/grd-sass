const fs = require('fs');
const path = require('path');
const test = require('ava');
const sass = require('sass');

test.cb('can be compiled', t => {
  const file = path.resolve(__dirname, 'grd.scss')
  const data = fs.readFileSync(file, {encoding: 'utf-8'});

  sass.render({data}, (error, result) => {
    t.falsy(error);
    t.truthy(result?.css);
    t.end();
  });
});
