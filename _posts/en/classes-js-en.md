---
title: "Classes in Javascript 🧐"
date: "2024-11-15"
tags: ["Javascript", "Tutorial", "Web Development", "OOP"]
image: "/images/classes.png"
---

# What are Classes?

Classes are a fundamental concept in object-oriented programming (OOP). They are used to create objects that have both
data and behavior.

In JavaScript, classes are used to create objects that have both data and behavior. They are a way to define a blueprint
for creating objects, and then create multiple instances of those objects.

# How to Create a Class in JavaScript

To create a class in JavaScript, you can use the **class** keyword followed by the name of the class. Here's an example:

```javascript
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  startEngine() {
    console.log("Engine started");
  }

  stopEngine() {
    console.log("Engine stopped");
  }
}
```

In this example, we define a class called **Car** with three properties: **make**, **model**, and **year**. We also define two
methods: **startEngine** and **stopEngine**.

The **constructor** method is a special method that is called when a new instance of the class is created. It is used to
initialize the properties of the object.

# Creating Objects with the **new** Keyword

To create an object from a class, you can use the **new** keyword followed by the name of the class and any arguments
required by the constructor. Here's an example:

```javascript
const myCar = new Car("Toyota", "Camry", 2022);
```

In this example, we create a new instance of the **Car** class with the make "Toyota", model "Camry", and year 2022.

# Accessing Properties and Methods

Once you have created an object from a class, you can access its properties and methods using dot notation. Here's an
example:

```javascript
const myCar = new Car("Toyota", "Camry", 2022);

console.log(myCar.make); // Output: Toyota
console.log(myCar.model); // Output: Camry
console.log(myCar.year); // Output: 2022

myCar.startEngine(); // Output: Engine started
myCar.stopEngine(); // Output: Engine stopped
```

In this example, we create a new instance of the **Car** class and then access its properties and methods using dot
notation.   

# Static Methods

Static methods are methods that are called on the class itself, rather than on an instance of the class. They are
often used to perform operations that are not specific to a particular instance of the class.

Here's an example of a static method:

```javascript
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  static getAllCars() {
    return [new Car("Toyota", "Camry", 2022), new Car("Honda", "Civic", 2021)];
  }
}
```

In this example, we define a static method called **getAllCars** that returns an array of two **Car** objects.


# Extending Classes

You can extend a class by using the **extends** keyword followed by the name of the class you want to extend. Here's an
example:

```javascript
class ElectricCar extends Car {
  constructor(make, model, year, batteryCapacity) {
    super(make, model, year);
    this.batteryCapacity = batteryCapacity;
  }

  chargeBattery() {
    console.log("Battery charged");
  }
}
```

In this example, we extend the **Car** class and add a new property called **batteryCapacity**. We also add a new method
called **chargeBattery**.

# Inheritance

Inheritance is a key concept in object-oriented programming that allows you to create a new class based on an existing
class. The new class, called the child class or subclass, inherits the properties and methods of the parent class, called
the parent class or superclass.

In JavaScript, you can create a subclass by using the **extends** keyword followed by the name of the parent class. Here's
an example:

```javascript
class ElectricCar extends Car {
  constructor(make, model, year, batteryCapacity) {
    super(make, model, year);
    this.batteryCapacity = batteryCapacity;
  }

  chargeBattery() {
    console.log("Battery charged");
  }
}
```

In this example, we create a subclass called **ElectricCar** that extends the **Car** class. The **ElectricCar** class has
access to the **make**, **model**, **year**, and **batteryCapacity** properties of the parent class.

# Polymorphism

Polymorphism is a key concept in object-oriented programming that allows objects of different classes to be treated as
objects of a common superclass. This allows you to write code that can work with objects of different classes without
knowing their specific types.

In JavaScript, you can achieve polymorphism by using the **instanceof** operator. Here's an example:

```javascript
const myCar = new Car("Toyota", "Camry", 2022);
const myElectricCar = new ElectricCar("Toyota", "Camry", 2022, 100);

if (myCar instanceof Car) {
  console.log("This is a car");
}

if (myElectricCar instanceof Car) {
  console.log("This is a car");
}

if (myElectricCar instanceof ElectricCar) {
  console.log("This is an electric car");
}
```

In this example, we create two objects: **myCar** and **myElectricCar**. We then use the **instanceof** operator to check if
they are instances of the **Car** class. If they are, we can access the properties and methods of the **Car** class.

# Use cases for Classes
 
Classes are a powerful tool in JavaScript that can be used for a variety of purposes. Here are some common use cases for
classes:

- Creating objects with shared properties and methods.
- Implementing inheritance and polymorphism.
- Creating reusable components with encapsulated data and behavior.
- Implementing design patterns such as the Singleton pattern.
- Creating a blueprint for creating objects with specific properties and methods.

# Conclusion

In this article, we explored the concept of classes in JavaScript and learned how to create objects with shared properties
and methods, implement inheritance and polymorphism, and use classes for creating reusable components and design patterns.

Thank you for reading this blog, don't forget to like it and share it to your friends! 😊
 

