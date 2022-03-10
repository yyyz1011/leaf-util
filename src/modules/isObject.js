/**
 * @param value
 * @desc Verify whether it is object
 * @return {boolean} Return true if the type is object, false otherwise
 * @example
 *
 * isObject({})
 * // => true
 *
 * isObject([1,2,3])
 * // => true
 *
 * isObject(Function)
 * // => true
 *
 * isObject(null)
 * // => false
 *
 */
function isObject(value) {
  const type = typeof value;
  return value !== null && ["object", "function"].includes(type);
}

export default isObject;
