async function func1() {
  let p1
  console.log(await (p1 = Promise.resolve('1')))
  p1.then(() => {console.log('resolved')})
  console.log('fun1 end')
}

async function fun2() {
  console.log(await '2')
}
async function fun3() {
  console.log('3')
}

func1()
