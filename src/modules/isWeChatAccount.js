/**
 * @param value
 * @desc Verify the WeChat account is correct
 * @return {boolean} 
 * @example
 *
 * isWeChatAccount(1)
 * // => false
 *
 * isWeChatAccount(yz19991011)
 * // => true
 *
 */
 function isWeChatAccount(value) {
    const accountReg = /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/;
    return accountReg.test(value);
  }
  
  export default isWeChatAccount;
  