import test from 'node:test';
import assert from 'node:assert/strict';
import {spawnSync} from 'node:child_process';
const run = (...args) => spawnSync(process.execPath, [new URL('./cli.mjs', import.meta.url).pathname, ...args], {encoding: 'utf8'});
test('CLI prints known contrast', () => {const r = run('#000000','#ffffff'); assert.equal(r.status,0); assert.equal(r.stdout.trim(),'21.00:1');});
test('CLI rejects missing or extra arguments', () => {for(const args of [[],['#000000'],['#000000','#ffffff','extra']]) {const r=run(...args); assert.equal(r.status,2); assert.match(r.stderr,/Usage/);}});
test('CLI rejects malformed colors without a stack trace', () => {const r=run('bad','#ffffff'); assert.equal(r.status,2); assert.match(r.stderr,/opaque/); assert.doesNotMatch(r.stderr,/at file/);});
