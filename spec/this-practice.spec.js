describe("The Keyword This", function() {
   describe("car object literal", function() {
      it("should exist", function(){
         expect(car).toEqual(jasmine.any(Object))
      })
      it("should contain make, model, and year properties", function(){
         expect(car.hasOwnProperty("make")).toBeTruthy()
         expect(car.hasOwnProperty("model")).toBeTruthy()
         expect(car.hasOwnProperty("year")).toBeTruthy()
      })
      it("should contain values and correct types for these properties", function() {
         expect(car.make).toBeTruthy()
         expect(car.model).toBeTruthy()
         expect(car.year).toBeTruthy()
         expect(typeof car.year).toEqual("number")
      })
      it("should contain a getAge method", function() {
         expect(car.getAge).toEqual(jasmine.any(Function))
      })
      it("should return the correct age when given current year", function(){
         car.year = 1979; 
         expect(car.getAge(1980)).toEqual(1)
      })
   })

   describe("implicit binding", function() {
      it("call getAge with implicit binding", function() {
         expect(carAge).toEqual(jasmine.any(Number))
      })
   })
   describe("anotherCar object literal", function() {
      it("should exist", function(){
         expect(anotherCar).toEqual(jasmine.any(Object))
      })
      it("should contain make, model, and year properties", function(){
         expect(anotherCar.hasOwnProperty("make")).toBeTruthy()
         expect(anotherCar.hasOwnProperty("model")).toBeTruthy()
         expect(anotherCar.hasOwnProperty("year")).toBeTruthy()
      })
      it("should contain values and correct types for these properties", function() {
         expect(anotherCar.make).toBeTruthy()
         expect(anotherCar.model).toBeTruthy()
         expect(anotherCar.year).toBeTruthy()
         expect(typeof anotherCar.year).toEqual("number")
      })
      it("should not contain a getAge method", function() {
         expect(anotherCar.hasOwnProperty("getAge")).toBeFalsy()
      })
   })
   describe("explicit binding with bind", function() {
      it("should contain a getAgeForAnotherCar variable", function() {
         expect(getAgeForAnotherCar).toEqual(jasmine.any(Function))
      })
      it("should get the age for anotherCar", function() {
         anotherCar.year = 2016;
         expect(getAgeForAnotherCar(2017)).toBe(1);
      })
   })
   describe("explicit binding with call", function() {
      it("should assign the number 2000 to a year property of the window", function() {
         expect(window.year).toEqual(jasmine.any(Number))
      })

      it("should call the getAge method of car to return the age of the window", function() {
         expect(windowAge).toBe(17)
      })
   })
   describe("explicit binding with apply", function() {
      it("should use apply to calculate purchaseTotal for customer2", function() {
         expect(customer2.purchaseTotal).toBe(406)
      })
   })
   describe("explicit binding with makeSound", function() {
      it("should bind makeDogSound to animal's makeSound method", function() {
         expect(makeDogSound()).toEqual("bark")
      })
   })
   
   describe("constructor function", function() {
      it("should contain a Person function", function() {
         expect(Person).toBeDefined()
         expect(Person).toEqual(jasmine.any(Function))
      })
      it("should create a name, age, and weight property for a new person", function() {
         var person = new Person(1, 2, 3)
         expect(person.hasOwnProperty("name")).toBeTruthy()
         expect(person.hasOwnProperty("age")).toBeTruthy()
         expect(person.hasOwnProperty("weight")).toBeTruthy()
      })
      it("should assign correct values to those properties", function() {
         var person = new Person(1, 2, 3)
         expect(person.name).toBe(1)
         expect(person.age).toBe(2)
         expect(person.weight).toBe(3)
      })
      it("should assign a addWeight prototype method to Person", function() {
         var person = new Person(1, 2, 3)
         person.addWeight(3)
         expect(person.weight).toBe(6)
      })
      it("should create brian and briansClone Person objects", function() {
         expect(brian.hasOwnProperty("weight")).toBeTruthy()
         expect(briansClone.hasOwnProperty("weight")).toBeTruthy()
      })
   })

})