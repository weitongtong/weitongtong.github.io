// destructuringArray( [1,[2,4],3], "[a, [b, c, d], e]" );
// result
// { a:1, b:2, c:3 }


var destructuringArray1 = function(arr, str) {
  str = str.replace(/([a-z]+)/g, '"$1"')
  const arrVar = JSON.parse(str)

  const obj = {}
  var loop = function(arr, arrVar) {
    for (let i = 0; i < arrVar.length; i++) {
      if (Array.isArray(arrVar[i])) {
        loop(arr[i] || [], arrVar[i])
      } else {
        obj[arrVar[i]] = arr[i]
      }
    }
  }
  loop(arr, arrVar)
  return obj
}


function test(arr, str) {  
  var o = new Function(`
    ${str} = ${JSON.stringify(arr)}
    const arr = ${JSON.stringify(str)}.match(/[a-z]+/ig)
    const obj = {}
    for(let i of arr){
      obj[i] = eval(i)
    }
    console.log(obj)
  `)
  o(arr, str)
}  
test([1,[2,[3],4],3], "[a,[b,[d],e],c]");  
