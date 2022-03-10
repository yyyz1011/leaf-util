/**
 * @param phone
 * @desc Check if it's a cell phone number
 * @return {boolean} Cell phone number returns true, otherwise false
 * @example
 *
 * isPhone(1111)
 * // => false
 *
 * isPhone(13868142750)
 * // => true
 *
 * isPhone('13868142750')
 * // => true
 *
 */
function isPhone(phone) {
  const phoneReg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
  return phoneReg.test(phone);
}

export default isPhone;
