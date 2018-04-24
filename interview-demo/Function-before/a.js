Function.prototype.before = function(fn) {
  const self = this
  return function() {
    if (fn.apply(this, arguments)) {
      self.apply(this, arguments)
    }
  }
}

function post() {
  console.log('post')
}

function validate() {
  console.log('validate')
  if (Math.floor(Math.random() * 2) === 0) {
    return true
  }
  return false
}

var submit = post.before(validate)
submit()