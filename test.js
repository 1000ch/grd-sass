import fs from 'node:fs/promises';
import test from 'ava';
import sass from 'sass';

test('Sass file can be compiled', async t => {
  const url = new URL('grd.scss', import.meta.url);
  const data = await fs.readFile(url, {encoding: 'utf-8'});

  const result = sass.compileString(data);
  t.truthy(result.css);
});
