//TODO: Implement hexToRgb
export function hexToRgb(hex: string): { r: number; g: number; b: number } {
  if (hex.length === 3) {
    let r = hex[0];
    let g = hex[1];
    let b = hex[2];
    return hexToRgb(`${r}${r}${g}${g}${b}${b}`);
  }
  let [r, g, b] = [0, 2, 4].map(offset => hex.substring(offset, offset + 2)).map(hexC => parseInt(hexC, 16));
  // let r = parseInt(`${hex[0]}${hex[1]}`, 16);
  // let g = parseInt(`${hex[2]}${hex[3]}`, 16);
  // let b = parseInt(`${hex[4]}${hex[5]}`, 16);
  return { r, g, b };
}

//TODO: Implement rgbToHex
export function rgbToHex(r: number, g: number, b: number): string {
  return [r, g, b]
    .map(dec => Math.max(0, Math.min(255, dec)).toString(16))
    .map(hex => (hex.length === 1 ? `0${hex}` : hex))
    .join('');
}
