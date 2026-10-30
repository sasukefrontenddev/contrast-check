# Contrast Check
A tiny, dependency-free JavaScript utility for checking the contrast between two opaque sRGB colors. No network calls, tracking, build step, or account required.
## Use
Requires Node.js 22 or later. Clone the repository, then:
```js
import { contrastRatio } from './contrast.mjs';
console.log(contrastRatio('#000000', '#ffffff')); // 21
```
### Command line
```sh
node cli.mjs '#000000' '#ffffff'
# 21.00:1
```
Quote colors in the shell because `#` can start a comment. Invalid input prints a short error and exits with status 2. Successful calculations exit with status 0. Output is rounded to two decimals for display; the JavaScript API retains full precision.
Run `npm test` for the test suite. No installation is needed.
## Interpreting a result
For WCAG 2.2 Level AA text contrast, the usual minimum is 4.5:1 for normal text and 3:1 for large text (at least 18pt, or 14pt bold). Exceptions and the full definition are described in the [W3C contrast guidance](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html).
Compare the unrounded JavaScript result with a threshold. The CLI rounds for display: a displayed `4.50:1` can represent a value slightly below 4.5 and must not be treated as proof of a pass.
```js
const ratio = contrastRatio("#767676", "#ffffff");
console.log(ratio >= 4.5); // true: normal-text AA contrast threshold
```
This is one contrast check, not a certification of complete WCAG conformance.
## Scope
Accepts six-digit hex colors (`#RRGGBB`). The result is a numerical ratio; it does not determine whether an entire interface is accessible. Transparency, gradients, images, font sizing and other accessibility requirements need separate assessment.
Formula reference: [WCAG relative luminance](https://www.w3.org/WAI/GL/wiki/Relative_luminance).
## Contributions
Useful bug reports should include the two input colors, expected result, actual result and runtime version. Changes should include a focused test. Please do not include private files, passwords or customer information.
## License
MIT — see [LICENSE](LICENSE).
