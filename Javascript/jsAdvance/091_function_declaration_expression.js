declaration()

function declaration() {
    console.log('I ma function declaration')
}

declaration()

// newExpression() // This will happen on the line TypeError: newExpression is not a function

var newExpression = function () {
    console.log('I ma function expresion')
}

newExpression()