class DynamicArray {

  constructor(defaultSize = 4) {
    this.data = new Array(defaultSize);
    this.length = 0;
    this.capacity = defaultSize;
  }

  read(index) {
    if (index >= this.length) {
      return undefined; // out of bounds
    }
    return this.data[index]; // return the value at the given index
  }

  push(val) {
    if (this.length === this.capacity) {
      this.resize();
    }
    this.data[this.length] = val;
    this.length++;
  }


  pop() {
    if (this.length === 0) {
      return undefined;
    }
    const value = this.data[this.length - 1];
    this.data[this.length - 1] = undefined; // clear the slot
    this.length--;
    return value;
  }

  shift() {
    if (this.length === 0) {
      return undefined;
    }
    const value = this.data[0];
    for (let i = 0; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    this.data[this.length - 1] = undefined; // clear the last slot
    this.length--;
    return value;
  }

  unshift(val) {
    if (this.length === this.capacity) {
      this.resize();
    }
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = val;
    this.length++;
  }

  indexOf(val) {
    for (let i = 0; i < this.length; i++) {
      if (this.data[i] === val) {
        return i;
      }
    }
    return -1;
  }

  resize() {
    this.capacity *= 2;
    const newData = new Array(this.capacity);
    for (let i = 0; i < this.length; i++) {
      newData[i] = this.data[i];
    }
    this.data = newData;
  }

}


module.exports = DynamicArray;
