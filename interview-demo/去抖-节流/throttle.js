/**
 * 节流 时间戳实现方式
 * 使用时间戳，当触发事件的时候，我们取出当前的时间戳，然后减去之前的时间戳（最一开始值设为0）
 * 如果大于设置的时间周期，就执行函数，然后更新时间戳为当前的时间戳，如果小于，就不执行
 * @param {Function} func handle
 * @param {Number} wait 间隔时间
 */
function throttle(func, wait) {
  var context, args
  var previous = 0

  return function() {
    var now = +new Date()
    context = this
    args = arguments
    if (now - previous > wait) {
      func.apply(context, args)
      previous = now
    }
  }
}
// 立刻执行 每隔wait会执行一次 

/**
 * 使用定时器
 * 当触发事件的时候，我们设置一个定时器，再触发事件的时候，如果定时器存在，就不执行，
 * 知道定时器执行，然后执行函数，清空定时器，这样就可以设置下一个定时器。
 */
function throttle(func, wait) {
  var timeout, previous = 0

  return function() {
    context = this
    args = arguments
    if (!timeout) {
      timeout = setTimeout(function() {
        timeout = null
        func.apply(context, args)
      }, wait)
    }
  }
}

// 不会立刻执行 wait之后执行一次

// 比较：
// 第一种事件会立刻执行，第二种事件会在 n 秒后第一次执行
// 第一种事件停止触发后没有办法再执行事件，第二种事件停止触发后依然会再执行一次事件

