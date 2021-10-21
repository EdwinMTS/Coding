const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: [],
    },

    get courses () {
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts,
      }
    },

    get appetizers() {
      return this._courses.appetizers;
    },

    get mains() {
      return this._courses.mains;
    },
    
    get desserts() {
      return this._courses.desserts;
    },

    set appetizers(app) {
      if (typeof app === 'string') {
        this._courses.appetizers.push(app);
      }
    },

    set desserts(dessert) {
      if (typeof dessert === 'string') {
        this._courses.desserts.push(app);
      }
    },

    set mains(main) {
      if (typeof main === 'string') {
        this._courses.mains.push(app);
      }
    },
  
    addDishToCourse(courseName, dishName, dishPrice) {
      const dish = {
        name: dishName,
        price: dishPrice,
      }
      this.courses[courseName].push(dish)
    },

    getRandomDishFromCourse(courseName) {
      let dishes = this.courses[courseName];
      let randomNumber = Math.floor(Math.random() * dishes.length);
      return dishes[randomNumber];
    },

    generateRandomMeal () {
      let appetizer = this.getRandomDishFromCourse('appetizers');
      let main = this.getRandomDishFromCourse('mains');
      let dessert = this.getRandomDishFromCourse('desserts');
      
      let totalPrice = appetizer.price + main.price + dessert.price;

      return `You appetizer will be ${appetizer.name}, with the main course being ${main.name} and to top it all off: ${dessert.name} as dessert. The total price will be $${totalPrice}`
    }
  }

menu.addDishToCourse('appetizers', 'Steak Tartar', 10.50);
menu.addDishToCourse('appetizers', 'Paddo Cookies', 12.75);
menu.addDishToCourse('appetizers', 'Tuna Tartar', 11.00);
menu.addDishToCourse('mains', 'Ribeye', 21.00);
menu.addDishToCourse('mains', 'Prawn Salad', 16.00);
menu.addDishToCourse('mains', 'Black Angus Burger', 18.00);
menu.addDishToCourse('desserts', 'Chocolate Cheesecake', 7.00);
menu.addDishToCourse('desserts', 'Oreo CheeseCake', 7.00);
menu.addDishToCourse('desserts', 'Apple Blondie', 8.50);

let randomMeal = menu.generateRandomMeal();
console.log(randomMeal);



  

