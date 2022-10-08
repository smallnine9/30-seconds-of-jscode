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
    console.log(await 'await func')
}
func()
console.log('hello world')