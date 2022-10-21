const obj = {
  name: 'yulujiang'
}

const proxyData = new Proxy(obj,{
  get: function(target, key) {
    console.log("get!")
    return target[key]
  },
  set: function(target, key, newVal) {
    target[key] = newVal
    console.log("set!")
  }
})

console.log(proxyData.name)

proxyData.name = 'weijiayan'
console.log (proxyData.name)
