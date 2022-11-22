var a = 100

// newPrint(a)
print(10)

var newPrint = print

newPrint(45)

function print(a) {
    console.log(a)
}

print(a)

// creational phase
// a = undefind
// newPrint = undefind
// print = ref. 

// executional phase
// a = 100
// print will call ref. of print function [argument = 10]
// newPrint = will get ref. of print function
// newPrint will call ref. of print function [argument = 45]
// print will call ref. of print function [argument = a = 100]