/**
 * @param value
 * @desc Digital conversion currency format
 * @return {string} Returns a string in currency format
 * @example
 *
 * formatPrice(1)
 * // => '1'
 * 
 * formatPrice(1000)
 * // => '1,000'
 * 
 * formatPrice(1000001)
 * // => '1,000,001'
 *
 */
function formatPrice(value) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default formatPrice;
