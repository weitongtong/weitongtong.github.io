/**
 * 防抖动 只触发一次
 *  延迟触发：只触发最后一次
 *  立即触发: 只触发第一次
 * @param {Function} fn handle
 * @param {Number} wait 间隔时间
 * @param {Boolean} immediately 是否立即触发
 * @return {Function} Fun
 */
function debounce (fn, wait, immediately) {
  let timeout, result
  const debounced =  function(...args) {
    const content = this
    if (timeout) {
      clearTimeout(timeout)
    }
    if (immediately) {
      const callNow = !timeout
      timeout = setTimeout(function() {
        timeout = null
      }, wait)
      if (callNow) {
        result = fn.apply(content, args)
      }
    } else {
      timeout = setTimeout(function() {
        fn.apply(content, args)
      }, wait)
    }
    return result
  }
  debounced.cancel = function() {
    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = null
  }
  return debounced
}
