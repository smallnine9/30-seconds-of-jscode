// setTimeout(()=>{
//     console.log('setTimeout1')
// },0)
// let p = new Promise((resolve,reject)=>{
//     console.log('Promise1')
//     resolve()
// })
// console.log('promise over!')
// p.then(()=>{
//     console.log('Promise2')    
// })
// console.log('stack null!')



// Promise.resolve().then(()=>{
//     console.log('Promise1')  
//     setTimeout(()=>{
//       console.log('setTimeout2')
//     },0)
//   })
  
//   setTimeout(()=>{
//     console.log('setTimeout1')
//     Promise.resolve().then(()=>{
//       console.log('Promise2')    
//     })
//   },0)

setTimeout(() => {
    console.log('settimeout')
}, 0);

Promise.resolve().then(function() {
    console.log('Promise')
})

let p1 = new Promise((resolve,reject) => {
    resolve()
})
p1.then(() => {
    console.log('Promise 2')
})
async function func() {
    console.log('func')
    await console.log('first await')
    await func2()
    console.log(await 'await func')
}
async function func2() {
    console.log('func2')
}
func()
console.log(Promise.resolve('3'))
console.log('hello world')
