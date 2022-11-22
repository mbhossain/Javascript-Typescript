  var rect = {
      width: 20,
      height: 35,

      draw: function() {
          console.log('I am a Rectangle')
          this.printProperties()
          console.log(this)
      },
      printProperties: function() {
          console.log('My width is: ' + this.width)
          console.log('My height is: ' + this.height)
      }
  }

  rect.draw()

  var another = {
      width: 56,
      height: 80,

      print: rect.printProperties
  }

  console.log(another.print)
  another.print()

  function myFunc() {
      console.log(this)
      rect.printProperties()
  }

  myFunc()
      //   new myFunc()