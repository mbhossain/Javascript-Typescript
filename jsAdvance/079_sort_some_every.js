var person = [{
        name: "Mohammad Belal",
        age: 32
    },
    {
        name: "Motaleb Mridha",
        age: 56
    },
    {
        name: "Khadeja Khatun",
        age: 50
    },
    {
        name: "Sadia Tonny",
        age: 25
    },
    {
        name: "Atri",
        age: 1
    }
]
var arr = [1, 3, 2, 5, 6, 3, 4, 7, 9, -5, 0, 8, -9, 7, 2, 1, -19, 21, 56, 77]
arr.sort(function(a, b) {
    if (a > b) {
        return -1
    } else if (b > a) {
        return 1
    } else {
        return 0
    }
})
console.log(arr)

person.sort(function(a, b) {
    if (a.age > b.age) {
        return 1
    } else if (b.age > a.age) {
        return -1
    } else {
        return 0
    }
})
console.log(person)

var arr1 = [1, 3, 2, 5, 6, 3, 4, 7, 9, 8, 7, 2, 1, 21, 56, 77]
var res1 = arr1.every(function(value) {
    return value % 2 == 0
})
console.log(res1)

var res2 = arr1.every(function(value) {
    return value > 0
})
console.log(res2)

var res3 = arr1.some(function(value) {
    return value % 2 == 0
})
console.log(res3)