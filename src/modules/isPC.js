/**
 * @param
 * @desc Check whether it is a PC page
 * @return {boolean} Return true if PC page, false otherwise
 *
 */
function isPC() {
  if (
    window.navigator.userAgent.match(
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    )
  ) {
    return false;
  } else {
    return true;
  }
}

export default isPC;
