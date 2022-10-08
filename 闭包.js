function nameConstructor (name) {
    return function displayName () {
        console.log(name)
    }
}

var func1 = nameConstructor('yulujiang')

func1()

var func2 = nameConstructor('cici')

func2()

for(let i =0; i<5; i++) {
    setTimeout(function () {
        console.log(i++)
    }, 2000)
}