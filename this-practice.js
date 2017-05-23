// The Keyword This

// Oh, JavaScript! Why is 'this' so confusing? Well, it is. So let's practice until you're convinced it makes sense. 

/* 

1. Create a car with an object literal.

Create an object called car using the object literal notation ({}). Give it a make property, a model property, and a year property. Then give it a method called getAge. This method should take in the current year and return the age of the car as an integer. 
*/

// Code here
var car;


/* 
2. Implicit Binding

Call the getAge method using the car object. Don't forget to pass the year argument. Assign the result to the variable 'carAge' so I can test it.
*/

// Code here
var carAge;



/*

/* 
3. Create anotherCar object literal

Create another object called anotherCar with the make, model, and year properties. Do not include the getAge method.

*/

// Code here
var anotherCar;



/*
4. Explicit Binding with Bind

Now bind the getAge method of the first car object to the context of anotherCar. Assign this bound function to the variable getAgeForAnotherCar. 
*/

// Code here
var getAgeForAnotherCar;



/* 
5. Explicit Binding with Call

Now assign a year property to the window object. Give that property the value 2000. Then call the getAge method of car with the window object as the context. Assign the result of that call to the variable windowAge. 

*/

// Code here
var windowAge;

/* 

/* 

6. Explicit Binding with Apply

Below you have two objects, both with purchaseTotals, but only one with a method called addToTotal. 

Use the apply method to call the addToTotal method of customer1 for customer2 while passing in the numbers 1, 2, and 3.
*/ 

var customer1 = {
   name: "Brian",
   purchaseTotal: 200,

   addToTotal: function(num1, num2, num3) {
      this.purchaseTotal += num1 + num2 + num3;
   }
};

var customer2 = {
   name: "Shea",
   purchaseTotal: 400
}

// use apply here



/*
7. More Explicit Binding

Bind the makeSound method of the animal object to the dog object. Assign this bound function to the variable called makeDogSound. 

*/

var animal = {
   name: "",
   location: "",
   sound: "",
   makeSound: function() {
      return this.sound
   }
}

var dog = {
   name: "Canis canis",
   location: "everywhere",
   sound: "bark"
}

// Code here
var makeDogSound;

// Use call or apply to invoke the makeSound method with different objects.


/*

8. More Practice

Below is an object with a findProp method. 

*/

var objWithFind = {
   findProp: function(value) {
      for (var prop in this) {
         if (this[prop] === value) {
            return prop
         }
      }
   }
}

/*

Now you can use my method with any object. Create an object and use my findProp method to find the correct value. You'll have to call my method and pass the right context, as well as the value you want to search.

*/

// Code here


/*
Below is another object with a filter method. This method filters returns a new object which contains only the properties with values that match the values in the array you pass to the method. 

*/ 

var objWithFilter = {
   filter: function(values) {
      var newObj = {}
      for (var prop in this) {
         for (var value of values) {
            if (this[prop] === value) {
               newObj[prop] = this[prop]
            }
         }
      }
      return newObj;
   }
}

// Now call my filter method on a new object. 


/* 
More Practice? 

Use the Array.prototype or String.prototype or Object.prototype methods to practice call and apply. 
*/

// Code here 




/*
Call the String.prototype.toUpperCase method and pass it a new string as a context.
*/

// Code here



/*
Call the Array.prototype.filter method and pass it a new array as context and a callback function as an argument.
*/

// Code here



/*
Apply the String.prototype.replace method and pass it a new string as context and an array which contains a value to search and a value to replace it with.
*/

// Code here