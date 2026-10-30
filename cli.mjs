#!/usr/bin/env node
import {contrastRatio} from './contrast.mjs';
const args = process.argv.slice(2);
if (args.length !== 2) {
  console.error('Usage: node cli.mjs "#RRGGBB" "#RRGGBB"');
  process.exitCode = 2;
} else {
  try { console.log(`${contrastRatio(...args).toFixed(2)}:1`); }
  catch (error) { console.error(error.message); process.exitCode = 2; }
}
