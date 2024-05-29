//1. https://github.com/rvsp/typescript-oops/blob/master/Pr actice/Movie.md
class movie { 

    constructor(title, production, rating) { 

      this.title = title; 

      this.production =  production; 

      this.rating = rating; 

    } 
}

var movieDetails = new movie("Leo","7 Screen studios", "PG-14");
console.log(movieDetails);

2.https://github.com/rvsp/typescript-oops/blob/master/Pr actice/class-circle.md
class Circle {
    constructor(radius = 1.0, color = "red") {
      this._radius = radius;
      this._color = color;
    }
  
    get radius() {
      return this._radius;
    }
  
    set radius(radius) {
      this._radius = radius;
    }
  
    get color() {
      return this._color;
    }
  
    set color(color) {
      this._color = color;
    }
  
    toString() {
      return `Circle [radius = ${this._radius} , color = ${this._color}]`;
    }
  
    getArea() {
      return Math.PI * Math.pow(this._radius, 2);
    }
  
    getCircumference() {
      return 2 * Math.PI * this._radius;
    }
  }
  
  var circle1 = new Circle(2, "green");
var circle2 = new Circle(5, "Yellow");
  
  console.log(circle1.toString());
  console.log("Area:", circle1.getArea());
  console.log("Circumference:", circle1.getCircumference());
  
  console.log(circle2.toString());
  console.log("Area:", circle2.getArea());
  console.log("Circumference:", circle2.getCircumference());
  

//3.Write a "person" class to hold all the details
class Person {
    constructor(firstName, lastName, age, department, email, phone, city){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.department = department;
        this.email = email;
        this.phone = phone;
        this.city = city;
    }
    getPersonDetails(){
        return `Name: ${this.firstName} ${this.lastName}
        age: ${this.age}
        department: ${this.department}
        email: ${this.email}
        mobile: ${this.mobile}
        city: ${this.city}`;
    }
}
    var person1 = new person("lingesh", "Ling", 21, "BCA", "lingaarasubca2020@gmail.com", 1234567890, "Chennai" );
    console.log(person1);

    //4.write a class to calculate the Uber price
    class UberPrice {
        constructor(distance, duration, baseFare, costPerMile, costPerMinute) {
          this.distance = distance;
          this.duration = duration;
          this.baseFare = baseFare;
          this.costPerMile = costPerMile;
          this.costPerMinute = costPerMinute;
        }
      
        totalPrice() {
          return this.baseFare + (this.distance * this.costPerMile) + (this.duration * this.costPerMinute);
        }
      }
      
      var myUber = new UberPrice(5, 10, 60, 14, 2);
      console.log(myUber.totalPrice());
      