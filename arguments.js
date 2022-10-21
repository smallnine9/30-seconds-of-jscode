function func1(a,...args) {
    console.log(a)
    console.log(...args)
    func2(...args)
}
function func2(a) {
    console.log(a)
}
func1(1,2,3)
