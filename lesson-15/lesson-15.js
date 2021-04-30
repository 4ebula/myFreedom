class Iron {
  made = 'China';
  powerState = false;
  temp = 0;
  constructor(brand) {
    this.brand = brand;
  }
  powerOn() {
    this.powerState = true;
    this.mode = 1;
    console.log(`Iron ${this.brand} is turn on`);
    return this;
  }
  powerOff() {
    this.powerState = false;
    console.log(`Iron ${this.brand} is turn off`);
    return this;
  }
  set mode(value) {
    if (this.powerState) {
      switch (value) {
        case 1: this.temp = 260;
          break;
        case 2: this.temp = 300;
          break;
      }
    } 
    else {
      console.log('Iron is turned off');
    }
  }
}

const newIron = new Iron('brand-name');
newIron.powerOn()//.mode = 1;
console.log(newIron.temp);

class ModIron extends Iron {
  constructor(brand) {
    super(brand);
    this.modified = true;
  }
  powerOn() {
    super.powerOn();
    console.log(` super modiefied`);
    this.temp = 1000;
    return this;
  }
}

const mewIron = new ModIron('brand-name222');
mewIron.powerOn()//.mode = 1;
console.log(mewIron.temp);

console.log('\n\n\n');

class Circle {
  constructor(radius){
    this.radius = radius ?? Circle.createDefalt();
  }
  square() {
    return this.radius**2 * 2 * Math.PI;
  }
  static createDefalt() {
    return new this(10);
  }
}

const cir1 = new Circle(5);
console.log(cir1, cir1.square());
const cir2 = Circle.createDefalt();
console.log(cir2);


// EXTENDING DEFAULT TYPE
const obj = {
  key: 'value',
  key2: 'value2',
};

// new Map([
//   ['key', 'value'],
//   ['key2', 'value2']
// ]);



class SmartMap extends Map {
  constructor(obj) {
    const entries = typeof obj === 'object' ? Object.entries(obj) : obj;
    super(entries)
  }
}

const smartmap = new SmartMap(obj);
console.log(smartmap);


// CHNAGING PROTOTYPE
// STAIC
Array.isNulableArray = function(arr) {
  for (let e of arr) {
    if (e !== 0) return false;
  }
  return true;
}

console.log(Array.isNulableArray([0,0,1,0,0]));
// PUBLIC

Array.prototype.isEmpty = function() {
  return this.length === 0
}
const arr = new Array(1,2,3,4);
const emptarr = new Array();
console.log(arr.isEmpty());
console.log(emptarr.isEmpty());