console.log("hello")




/*
------------Object Oriented Programming------------

Define :  OOP is a coding approach that organizes software design around objects and classes.

class : class is a blueprint for creating objects.

object : object is an instance of a class.

instance : instance is a copy of a class.

constructor : constructor is a special method that is used to initialize objects.

method : method is a function that is defined inside a class.

this : this is a keyword that is used to refer to the current object.






encapsulation : 	Bundling data and methods inside an object; hiding internal state from outside access.

inheritance : inheritance is a mechanism that allows a class to inherit properties and methods from another class.

polymorphism : 	Ability to use different objects in different ways.

abstraction : 	Hiding complex implementation details and showing only the necessary features.
*/

// class User {
//     constructor(name, email, password) {
//         this.name = name;
//         this.email = email;
//         this.password = password;
//     }

//     login() {

//         console.log({
//             name: this.name,
//             email: this.email,
//             password: this.password
//         });
//     }
//     logout() {
//         console.log("logout successful");
//     }
//     register() {
//         console.log("register successful");
//     }
// }

// let obj = new User("Asad", "asad@gmail.com", "1234")
// let object = new User("Umer", "umer@gmail.com", "1234")



// obj.login()
// object.login()

// const user = new User();





// user.login();
// user.logout();
// user.register();













// Example 1 For Class and Object

class User { // class is a blueprint for creating objects.
    constructor(name, email, password) { // constructor is a special method that is used to initialize objects.
        this.name = name; // this is a keyword that is used to refer to the current object.
        this.email = email; // this is a keyword that is used to refer to the current object.
        this.password = password; // this is a keyword that is used to refer to the current object.
    }
    login() { // method is a function that is defined inside a class.
        console.log(`${this.name} is logged in`);
    }
    logout() { // method is a function that is defined inside a class.
        console.log(`${this.name} is logged out`);
    }
    register() { // method is a function that is defined inside a class.
        console.log(`${this.name} is registered`);
        console.log(`${this.email} is registered`);
        console.log(`${this.password} is registered`);
    }
}

const user = new User("Aman", "aman@gmail.com", "123456"); // object is an instance of a class.
user.login(); // method is a function that is defined inside a class.
user.logout(); // method is a function that is defined inside a class.
user.register(); // method is a function that is defined inside a class.




// Example 2 For  Encapsulation

// Encapsulation is a mechanism that binds the data and the methods that work on that data together.
class Car {
    constructor(name, color, price) {
        this.name = name;
        this.color = color;
        this.price = price;
    }
    getPrice() {
        return this.price;
    }
    getColor() {
        return this.color;
    }
    getName() {
        return this.name;
    }
    setPrice(price) {
        this.price = price;
    }
    setColor(color) {
        this.color = color;
    }
    setName(name) {
        this.name = name;
    }
}

const car = new Car("Toyota", "Red", 10000);

// console.log(car.getPrice());
// console.log(car.getColor());
// console.log(car.getName());
// car.setPrice(20000);
// car.setColor("Blue");
// car.setName("Honda");
// console.log(car.getPrice());
// console.log(car.getColor());
// console.log(car.getName());



// Example 3 For Inheritance

// class student {
//     constructor(name) {
//         this.name = name;
//     }
//     getName() {
//         console.log(`${this.name} is a student`);
//     }
// }

// class teacher extends student {
//     constructor(name) {
//         super(name); // super is a keyword that is used to refer to the parent class.
//     }
//     getTeacherName() {
//         console.log(`${this.name} is a teacher`);
//     }
// }

// const student = new student("Aman");
// student.getName();
// const teacher = new teacher("John");
// teacher.getTeacherName();




// Example 4 For Polymorphism








