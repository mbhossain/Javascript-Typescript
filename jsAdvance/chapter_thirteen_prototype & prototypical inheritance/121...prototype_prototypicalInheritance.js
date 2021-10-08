// function Person(name) {
//     this.name = name
// }
// var p1 = new Person('Mohammad Belal')
// console.log(p1)

var person = {
        name: "M Belal"
    }
    // console.log(person)

// for (var i in person) {
//     console.log(i)
// }

// console.log(Object.keys(person))

// var descriptor = Object.getOwnPropertyDescriptor(person, 'name')
// console.log(descriptor)

// let baseObj = Object.getPrototypeOf(person)
// var descriptor = Object.getOwnPropertyDescriptor(baseObj, 'toString')
// console.log(descriptor)

Object.defineProperty(person, 'name', {
    enumerable: false,
    writable: false,
    configurable: false,
    // value: 'Mohammad Belal'
})
console.log(person)
console.log(Object.keys(person))
for (var i in person) {
    console.log(i)
}
person.name = 'Mohammad Belal'
console.log(person)
delete person.name
console.log(person)