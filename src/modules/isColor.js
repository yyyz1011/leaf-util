/**
 * @param color
 * @desc Determines whether the string is a hexadecimal color value
 * @return {boolean} Hex colors return true, otherwise false
 * @example
 *
 * isColor(1)
 * // => false
 *
 * isColor('1')
 * // => false
 *
 * isColor('#FFB6C1')
 * // => true
 */
function isColor(color) {
  return /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(color);
}

export default isColor;
