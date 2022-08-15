// const Car = new Object()
// Car.name = "Ford"
// Car.year = 2014
// Car.fullInfo = function(){
//     return this.name + this.year
// }

class Car{
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  
  fullInfo(){
      return this.name + ' ' + this.year
  }
}

const car$1 = new Car("Ford", 2014)
console.log(car$1.fullInfo())