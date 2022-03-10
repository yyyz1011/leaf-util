/**
 * @param value
 * @desc Verify the QQ account is correct
 * @return {boolean} 
 * @example
 *
 * isQQAccount(1)
 * // => false
 *
 * isQQAccount(1540032876)
 * // => true
 *
 */
function isQQAccount(value) {
  const accountReg = /^[1-9][0-9]{4,10}$/;
  return accountReg.test(value);
}

export default isQQAccount;
