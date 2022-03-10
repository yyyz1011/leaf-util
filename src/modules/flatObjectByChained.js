/**
 * @params source
 * @desc Chain flattening of an object
 * @return {flat obj} Returns the flattened object
 * @example
 *
 * flatObjectByChained({a:{b:1}})
 * // => {'a.b':1}
 *
 * flatObjectByChained({a:{b:{c:{d:{e:1}}}}},f:2)
 * // => {'a.b.c.d.e':1,f:2}
 */
function flatObjectByChained(obj) {
  const ans = {};
  inner(obj, null);
  function inner(o, prev) {
    for (let key in o) {
      if (o[key] instanceof Object) {
        if (prev === null) {
          inner(o[key], key);
        } else {
          inner(o[key], prev + "." + key);
        }
      } else {
        if (prev === null) {
          ans[key] = o[key];
        } else {
          ans[prev + "." + key] = o[key];
        }
      }
    }
  }
  return ans;
}

export default flatObjectByChained;
