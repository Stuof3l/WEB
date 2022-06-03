class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
    greet(){
        console.log("Test");
        return "Hello!";
    }
}

const r = new Rectangle(10, 20);