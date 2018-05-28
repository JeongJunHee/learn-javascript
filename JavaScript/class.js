class Shapes {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  get Height() { return this.height; }
  set Height(h) { this.height = h; }

  get Width() { return this.width; }
  set Width(w) { this.width = w; }

  get Area() { return this.height * this.width; }

  get CheckSquare() {
    if (this.height === this.width) { return true; }
    else return false;
  }
}

const square = new Shapes(10, 10);
const rectangle = new Shapes(10, 15);

console.log(`const square = new Shape(10, 10);

square.Height         : ${square.Height}
square.Width          : ${square.Width}
square.Area           : ${square.Area}
square.CheckSquare    : ${(square.CheckSquare) ? "정사각형" : "직사각형"}

const rectangle = new Shapes(10, 15);

rectangle.Height      : ${rectangle.Height}
rectangle.Width       : ${rectangle.Width}
rectangle.Area        : ${rectangle.Area}
rectangle.CheckSquare : ${(rectangle.CheckSquare) ? "정사각형" : "직사각형"}`)