/**
 * @param mail
 * @desc Verify that the mailbox format is correct
 * @return {boolean} Returns true if the mailbox format is correct, false otherwise
 * @example
 *
 * isMail('1123@qq.com')
 * // => false
 *
 *
 * isMail('1540032876@qq.com')
 * // => true
 *
 */
function isMail(mail) {
  const mailReg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
  return mailReg.test(mail);
}

export default isMail;
