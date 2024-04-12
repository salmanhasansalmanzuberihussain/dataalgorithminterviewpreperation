class myArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    let lastitem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastitem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }
}

const newarray = new myArray();
newarray.push('a');
newarray.push('b');
newarray.pop();
console.log(newArray);
