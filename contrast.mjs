/** WCAG relative luminance for opaque sRGB hex colors. */
export function luminance(hex) {
  if (typeof hex !== 'string' || !/^#[0-9a-f]{6}$/i.test(hex)) throw new TypeError('Use an opaque #RRGGBB color.');
  const rgb = [1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16) / 255);
  const linear = rgb.map(c => c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
  return linear[0] * 0.2126 + linear[1] * 0.7152 + linear[2] * 0.0722;
}
export function contrastRatio(foreground, background) {
  const a = luminance(foreground), b = luminance(background);
  return (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
}
