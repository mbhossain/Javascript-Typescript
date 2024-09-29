const outputElement = document.getElementById('output');
console.log = function (message) {
    if (typeof message === 'object') {
        outputElement.innerHTML += JSON.stringify(message, null, 2) + '\n';
    } else {
        outputElement.innerHTML += message + '\n';
    }
};

aiAreaPosion = {
    left: 0,
    bottom: 0
};

function setAIArea() {
    const productNameField = document.querySelector('#product-name');
    const productNameProperty = productNameField.getBoundingClientRect();
    this.aiAreaPosion.left = productNameProperty?.left;
    this.aiAreaPosion.bottom = productNameProperty?.bottom;

    // Select the blue rectangle and update its position based on aiAreaPosion
    const blueRectangle = document.querySelector('.blue-rectangle');
    blueRectangle.style.position = 'absolute';  // Set the position to absolute
    blueRectangle.style.left = this.aiAreaPosion.left + 'px';  // Apply left position
    blueRectangle.style.bottom = this.aiAreaPosion.bottom + 'px';    // Apply bottom position
}

// Set the initial position
this.setAIArea();

// Reposition the rectangle on window resize
// window.removeEventListener('resize', this.setAIArea.bind(this));
// window.addEventListener('resize', this.setAIArea.bind(this));
