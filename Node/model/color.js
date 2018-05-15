const fs = require('fs');

class Color {
  constructor() {
    const data = fs.readFileSync('./model/data.json');
    this.data = JSON.parse(data);
  }

  getColorList() {
    if (this.data) {
      return this.data;
    } else {
      return [];
    }
  }

  getColorDetail(c) {
    return new Promise((resolve, reject) => {
      for (var item of this.data) {
        if (item.color == c) {
          resolve(item);
          return;
        }
      }
      reject({ msg: 'Can not find Color' });
    })
  }

  addColor(color, value) {
    return new Promise((resolve, reject) => {
      for (var item of this.data) {
        if (item.color == color) {
          reject({ msg: 'error' });
          return;
        }
      }
      let newColor = { color: color, value: value };
      this.data.push(newColor);
      resolve(newColor);
    })
  }
}

module.exports = new Color();