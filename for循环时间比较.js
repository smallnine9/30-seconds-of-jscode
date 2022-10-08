const ARR_SIZE = 6666666
const hugeArr = new Array(ARR_SIZE).fill(1)

// 方法一，普通for循环
function method1() {
  var arrCopy = []
  console.time('method1')
  for (let i = 0; i < hugeArr.length; i++) {
    arrCopy.push(hugeArr[i])
  }
  console.timeEnd('method1')
}
// 方法二，缓存长度
function method2() {
  var arrCopy = []
  console.time('method2')
  for (let i = 0, len = hugeArr.length; i < len; i++) {
    arrCopy.push(hugeArr[i])
  }
  console.timeEnd('method2')
}
// 方法三，取值和判断合并
function method3() {
  var arrCopy = []
  console.time('method3')
  for (let i = 0, item; item = hugeArr[i]; i++) {
    arrCopy.push(item)
  }
  console.timeEnd('method3')
}
// 方法四，i--与判断合并，倒序迭代
function method4() {
  var arrCopy = []
  console.time('method4')
  for (let i = hugeArr.length; i--;) {
    arrCopy.push(hugeArr[i])
  }
  console.timeEnd('method4')
}