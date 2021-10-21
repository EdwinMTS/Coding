// Excersice 1
function reverseArray(array) {
    let arrayIndex = array.length - 1;
    // console.log(arrayindex);
    let newArray = []
    for (let i = 0; i < arrayIndex; i++) {
        newArray[i] = 'e';
    }
    // console.log(newArray);
    array.forEach(element => {
        newArray[arrayIndex] = element;
        arrayIndex--; 
    })
    return newArray;
}



// When you're ready to test your code, uncomment the below and run:

// const sentence = ['sense.','make', 'all', 'will', 'This'];

// console.log(reverseArray(sentence)) 
// Should print ['This', 'will', 'all', 'make', 'sense.'];

// Exersice 2
function greetAliens(array) {
    for (let i = 0; i < array.length; i++) {
        
        console.log(`Oh powerful ${array[i]}, we humans offer our unconditional surrender!`)
    }
}
// When you're ready to test your code, uncomment the below and run:

// const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

// greetAliens(aliens);

// Exersice 3
function convertToBaby(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(`baby ${array[i]}`);
    }
    return newArray
}
// When you're ready to test your code, uncomment the below and run:

// const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

// console.log(convertToBaby(animals)) 

// Exersice 4
const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

function declineEverything (array) {
    array.forEach(politelyDecline)
}
declineEverything(veggies);

function acceptEverything(array) {
    array.forEach(element => console.log(`Ok, I guess I will eat some ${element}`))
}

acceptEverything(veggies);

// Exersice 5
const numbers = [2, 7, 9, 171, 52, 33, 14]

const toSquare = num => num * num

function squareNums(array) {
    return array.map(e=> toSquare(e));
}
console.log(squareNums(numbers));

// Exersice 6
function shoutGreetings(array) {
    return array.map(e => 
        e.toUpperCase() + '!')
}
const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];

console.log(shoutGreetings(greetings))

// Exersice 7
function sortYears(array) {
    array.sort();
    return array.reverse();
}

const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]

console.log(sortYears(years))

// Exersice 8
function justCoolStuff(array1, array2) {
    return array1.filter(e => array2.includes(e))
}

const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 

console.log(justCoolStuff(myStuff, coolStuff))

// Exersice 9
function isTheDinnerVegan(array) {
    return array.every(e => e.source === 'plant')
}

const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];

console.log(isTheDinnerVegan(dinner))

// Exersice 10
// function sortSpeciesByTeeth(array) {
//     return array.sort((obj1, obj2) => obj1.numTeeth > obj2.numTeeth)
// }
const sortSpeciesByTeeth = arr => arr.sort((speciesObj1, speciesObj2) => speciesObj1.numTeeth > speciesObj2.numTeeth)

const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];
console.log(sortSpeciesByTeeth(speciesArray));

// Exersice 11
function dogFactory (_name, _breed, _weight) {
    return {
      _name,
      get name () {
        return this._name;
      },
      set name(name) {
        this._name = name;
      },
      _breed,
      get breed() {
        return this._breed;
      },
      set breed(breed) {
        this._breed = breed;
      },
      _weight,
      get weight() {
        return this._weight;
      },
      set weight(weight) {
        this._weight = weight;
      },
    }
  }