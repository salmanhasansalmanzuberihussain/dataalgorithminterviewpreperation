class MyArray {
  //creating a class for an array [myarray] are a template for creating objects
  //In class-based, object-oriented programming, a constructor is a special type of function called to create an object.
  constructor() {
    this.length = 0; //two data points [length]
    this.data = {}; //object that stores data
  }

  get(index) {
    //the get method grabs the data and adds an index
    return this.data[index]; //going to return this.data [this]
  }

 push(item){
  this.data[this.length]=item
  this.length++
  return this.length
 }

 pop(){
 let items= this.data[this.length-1]
 delete this.data[this.length-1]
 this.length--
 return items
 }
}

const newArray = new MyArray();
console.log;
