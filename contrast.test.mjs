import test from 'node:test';
import assert from 'node:assert/strict';
import {contrastRatio, luminance} from './contrast.mjs';
test('black and white are the maximum 21:1 contrast', () => assert.equal(contrastRatio('#000000', '#ffffff'), 21));
test('identical colors have a 1:1 ratio', () => assert.equal(contrastRatio('#abcdef', '#abcdef'), 1));
test('ratio is symmetric', () => assert.equal(contrastRatio('#123456', '#abcdef'), contrastRatio('#abcdef', '#123456')));
test('invalid colors fail explicitly', () => { for(const color of ['red', '#fff', '#fffffff', null, '#gggggg']) assert.throws(() => luminance(color), TypeError); });
