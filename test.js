import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import test from 'ava';
import sass from 'sass';

test.cb('can be compiled', t => {
  const file = fileURLToPath(new URL('grd.scss', import.meta.url));
  const data = fs.readFileSync(file, {encoding: 'utf-8'});

  sass.render({data}, (error, result) => {
    t.falsy(error);
    t.truthy(result?.css);
    t.end();
  });
});
