/////Arrays within Objects/////////////
// const adventurer = {
// 	name: "Timothy",
// 	hitpoints: 10,
// 	belongings: ["sword", "potion", "Tums"]
// }
// console.log(adventurer.belongings);
// console.log(adventurer.belongings[0]);
// // Iterate Over an Array within an Object
// for (let i=0; i < adventurer.belongings.length; i++) {
// 	console.log(adventurer.belongings[i]);
// }



// ////////Object within an Object//////////
// const adventurer = {
// 	name: "Timothy",
// 	hitpoints: 10,
// 	belongings: ["sword", "potion", "Tums"],
// 	companion: {
// 		name: "Velma",
// 		type: "Bat"
// 	}
// }
// console.log(adventurer.companion);
// console.log(adventurer.companion.name);
// console.log(adventurer.companion.type);



// /////////Object within an Object within an Object...///////////////////
// const adventurer = {
// 	name: "Timothy",
// 	hitpoints: 10,
// 	belongings: ["sword", "potion", "Tums"],
// 	companion: {
// 		name: "Velma",
// 		type: "Bat",
// 		companion: {
// 			name: "Tim",
// 			type: "Parasite"
// 		}  
// 	}
// }
// console.log(adventurer.companion.companion.type);




// //////// Array within an Object within an Object within an Object.....///////////////////////
// const adventurer = {
// 	name: 'Timothy',
// 	hitpoints: 10,
// 	belongings: ["sword", "potion", "Tums"],
// 	companion: {
// 		name: "Velma",
// 		type: "Bat",
// 		companion: {
// 			name: "Tim",
// 			type: "Parasite",
// 			belongings: ["SCUBA tank", "Rogan josh", "health insurance"]
// 		}  
// 	}
// }
// console.log(adventurer.companion.companion.belongings[2]);



// //////An Array of Objects////////////////
// const movies = [ { title: "Tokyo Story" },  { title: "Paul Blart: Mall Cop" }, { title: "L'Avventura" } ];
// console.log(movies[0]);
// console.log(movies[0].title);
// for (let i=0; i < movies.length; i++) {
// 	console.log(movies[i].title);
// }



//////// Combining Objects, Arrays, and Functions /////////////////////////////
// const foo = {
//     someArray:[1,2,3]
// };
// foo.someArray[0]; // 1

// const foo = {
//     someObject: {
//         someProperty: 'oh hai!'
//     }
// };
// foo.someObject.someProperty; // oh hai!
// //You can create a property for an object that is a function (method):
// const foo = {
//     someMethod:()=>{
//         console.log('oh hai');
//     }
// };
// foo.someMethod();// logs 'oh hai!'

// //You can store an object in an array:
// const foo = [{someProperty:'weee'}, 2, 3];
// console.log(foo[0].someProperty);

// //You can store an array in an array:
// const foo = [
//     ["0,0", "0,1", "0,2"],
//     ["1,0", "1,1", "1,2"],
//     ["2,0", "2,1", "2,2"]
// ];

// foo[1][2]; //1,2

// //You can store a function in an array:
// const foo = [
//     1,
//     "hi",
//     ()=>{
//         console.log('fun');
//     }
// ];

// foo[2]();




/////////// Adding Classes ///////////////////////////////////
//  A function that returns objects.
// const createEnemy = (nameIs, healthIs, powerIs, staminaIs) => {
//     const newEnemy = {
//       name: nameIs,
//       health: healthIs,
//       power: powerIs,
//       stamina: staminaIs
//     }
//     return newEnemy
//   }
  
//   const createPlayer = (nameIs, healthIs, powerIs, staminaIs) => {
//     const newPlayer = {
//       name: nameIs,
//       health: healthIs,
//       power: powerIs,
//       stamina: staminaIs
//     }
//     return newPlayer
//   }



////////  Character Class ////////////////////  
// class Character {
//     // going on an adventure
//   }
// const me = new Character();
// const you = new Character();

// console.log(me);
// console.log(you);
// console.log(typeof me);
// console.log(typeof you);



////// Adding Methods to Character /////////////////
// class Character {
//     greet (otherCharacter) {
//       console.log('Hi ' + otherCharacter + '!');
//     }
//   }
//   const me = new Character();
//   const you = new Character();
//   me.greet('you');
//   you.greet('me');


//   class Character {
//     greet (otherCharacter) {
//       console.log('Hi ' + otherCharacter + '!');
//     }
//     smite () {
//       console.log('I smite thee you vile person!');
//     }
//   }
//   const me = new Character();
//   const you = new Character();
//   me.greet('bob');
//   me.smite();
//   you.greet('bob');
//   you.smite();


/////  Setting Properties/////////
//If we log the instances of our class, we'll see they don't have any properties:
// class Character {
//     greet (otherCharacter) {
//       console.log('Hi ' + otherCharacter + '!');
//     }
//     smite () {
//       console.log('I smite thee you vile person!');
//     }
//   }
  
//   const me = new Character();
//   const you = new Character();
//   console.log(me);
//   console.log(you);

  //Let's add some properties with a constructor function:
//   class Character {
//     constructor () {
//       this.legs = 2;
//       this.arms = 2;
//       this.eyes = 'hazel';
//       this.hair = 'gray';
//     }
//     greet (otherCharacter) {
//       console.log('Hi ' + otherCharacter + '!');
//     }
//     smite () {
//       console.log('I smite thee you vile person!');
//     }
//   }
//   const me = new Character();
//   console.log(me);


///////  Custom Constructors  ////////////
// class Character {
//     constructor (name, age, eyes, hair) {
//       this.legs = 2;
//       this.arms = 2;
//       this.name = name;
//       this.age = age;
//       this.eyes = eyes;
//       this.hair = hair;
//     }
//     greet (otherCharacter) {
//       console.log('Hi ' + otherCharacter + '!');
//     }
//     smite () {
//       console.log('I smite thee you vile person!');
//     }
//   }
  
//   const me = new Character('Cathy the Miraculous', 29, 'brown', 'locs of dark brown');
//   console.log(me);


// ////// Creating Default Values ///////////////////////////
// class Character {
//     constructor (name, age, eyes, hair, lovesCats = false, lovesDogs) {
//       this.legs = 2;
//       this.arms = 2;
//       this.name = name;
//       this.age = age;
//       this.eyes = eyes;
//       this.hair = hair;
//       this.lovesCats = lovesCats;
//       this.lovesDogs = lovesDogs || false;
//     }
//     greet (otherCharacter) {
//       console.log('Hi ' + otherCharacter + '!');
//     }
//     smite () {
//       console.log('I smite thee you vile person!');
//     }
//   }
//   const you = new Character('Cathy the Miraculous', 29, 'brown', 'locs of dark brown', true, true);
//   const me = new Character('Wendel the Wavy', 32, 'brown', 'wavy blonde');
//   console.log(me);
//   console.log(you);




// ///////////// Class Methods  //////////////////////////////
// class Character {
//     constructor (name, age, eyes, hair, lovesCats = true, lovesDogs) {
//       this.legs = 2;
//       this.arms = 2;
//       this.name = name;
//       this.age = age;
//       this.eyes = eyes;
//       this.hair = hair;
//       this.lovesCats = lovesCats;
//       this.lovesDogs = lovesDogs || true;
//     }
//     greet (otherCharacter) {
//       console.log('Hi ' + otherCharacter + '!');
//     }
//     setHair (hairColor) {
//       this.hair = hairColor;
//     }
//     smite () {
//       console.log('I smite thee you vile person!');
//     }
//   }
  
//   const me = new Character('Wendel the Wavy', 32, 'brown', 'wavy blonde');
//   console.log(me);
//   me.setHair('red');
//   console.log(me);



// ////////////  Object Interactions  ///////////////////////////
// class Character {
//     constructor (name, age, eyes, hair, lovesCats = false, lovesDogs) {
//       this.legs = 2;
//       this.arms = 2;
//       this.name = name;
//       this.age = age;
//       this.eyes = eyes;
//       this.hair = hair;
//       this.lovesCats = lovesCats;
//       this.lovesDogs = lovesDogs || false;
//     }
//     greet (otherCharacter) {
//       console.log('Hi ' + otherCharacter + '!');
//     }
//     classyGreeting (otherClassyCharacter) {
//       console.log('Greetings ' + otherClassyCharacter.name + '!');
//     }
//     setHair (hairColor) {
//       this.hair = hairColor;
//     }
//     smite () {
//       console.log('I smite thee you vile person!');
//     }
//   }
//   const you = new Character('Cathy the Miraculous', 29, 'brown', 'locs of dark brown', true, true);
//   const me = new Character('Wendel the Wavy', 32, 'brown', 'wavy blonde');
  
//   me.classyGreeting(you);
//   you.classyGreeting(me);


//////////  Inheritance  ///////////////
// class Character {
//     constructor (name, age, eyes, hair, lovesCats = true, lovesDogs) {
//       this.legs = 2;
//       this.arms = 2;
//       this.name = name;
//       this.age = age;
//       this.eyes = eyes;
//       this.hair = hair;
//       this.lovesCats = lovesCats;
//       this.lovesDogs = lovesDogs || true;
//     }
//     greet (otherCharacter) {
//       console.log('Hi ' + otherCharacter + '!');
//     }
//     classyGreeting (otherClassyCharacter) {
//       console.log('Greetings ' + otherClassyCharacter.name + '!');
//     }
//     setHair (hairColor) {
//       this.hair = hairColor;
//     }
//     smite () {
//       console.log('I smite thee you vile person!');
//     }
  
//   }
  
//   const hobbit = new Character('Mr Baggins', 33, 'brown', 'black')
//   console.log(hobbit);

  

//   class Hobbit extends Character {
//     steal () {
//       console.log("Let's get away!");
//     }
//   }
  
//   const frodo = new Hobbit('Frodo', 30, 'brown', 'black')
//   console.log(frodo);
//   frodo.smite();
//   frodo.steal();

// // we can override previous functionality, if desired:
// class Hobbit extends Character {
//     steal () {
//       console.log("Let's get away!");
//     }
//     greet (otherCharacter) {
//       console.log(`Hello ${otherCharacter}.`);
//     }
//   }
  
//   const frodo = new Hobbit('Frodo', 30, 'brown', 'black')
//   frodo.greet('Bob');

//   // We can even reference the parent class's methods and extend its original functionality:
//   class Hobbit extends Character {
//     steal () {
//       console.log("Let's get away!");
//     }
//     greet (otherCharacter) {
//       console.log(`Hello ${otherCharacter}.`);
//     }
//     smite () {
//       super.smite();
//       this.steal();
//     }
//   }
  
//   const frodo = new Hobbit('Frodo', 30, 'brown', 'black')
//   frodo.smite();

// // This is most useful on the constructor:
// class Hobbit extends Character {
//     constructor (name, age, eyes, hair) {
//       super(name, age, eyes, hair);
//       this.skills = ["thievery", "speed", "willpower"];
//     }
//     steal () {
//       console.log("Let's get away!");
//     }
//     greet (otherCharacter) {
//       console.log(`Hello ${otherCharacter}.`);
//     }
//     smite () {
//       super.smite();
//       this.steal();
//     }
//   }
  
//   const frodo = new Hobbit('Frodo', 30, 'brown', 'black')
//   console.log(frodo);

 
  ////////   Additional Classes   ///////////////////////////////
//   class Elves extends Character {
//         constructor (name, age, eyes, hair) {
//           super(name, age, eyes, hair);
//           this.skills = ["thievery", "speed", "willpower"];
//         }
//         steal () {
//           console.log("Let's get away!");
//         }
//         greet (otherCharacter) {
//           console.log(`Hello ${otherCharacter}.`);
//         }
//         smite () {
//           super.smite();
//           this.steal();
//         }
//       }
      
//       const frodos = new Elves ('Frodos', 35, 'blue', 'brown')
//       console.log(frodos);


// class Dwarves extends Character {
//     constructor (name, age, eyes, hair) {
//       super(name, age, eyes, hair);
//       this.skills = ["gentle", "workers", "caring"];
//     }
//     steal () {
//       console.log("Let's get away!");
//     }
//     greet (otherCharacter) {
//       console.log(`Hello ${otherCharacter}.`);
//     }
//     smite () {
//       super.smite();
//       this.steal();
//     }
//   }
  
//   const smallHuman = new Dwarves ('Dwarve', 25, 'brown', 'black')
//   console.log(smallHuman);

// class Men extends Character {
//     constructor (name, age, eyes, hair) {
//       super(name, age, eyes, hair);
//       this.skills = ["strong", "workers", "caring"];
//     }
//     steal () {
//       console.log("Let's get away!");
//     }
//     greet (otherCharacter) {
//       console.log(`Hello ${otherCharacter}.`);
//     }
//     smite () {
//       super.smite();
//       this.steal();
//     }
//   }
  
//   const people = new Men ('Bob', 33, 'blue', 'black')
//   console.log(people);


/////   Create a Factory  //////////////////
// class Tome {
//     constructor (maker, serialNum) {
//       this.maker = maker;
//       this.spellType = spellType;
//       this.serialNum = serialNum;
//     }
//     cast () {
//       console.log('Casting a spell!');
//     }
//   }
  
//   const fireTome = new Tome('Merlin', 'Fire', 1);
//   console.log(fireTome);

//   class Factory {
//     constructor (maker) {
//       this.maker = maker;
//       this.tomes = [];
//     }
//     generateTome (spellType) {
//       const newTome = new Tome(this.maker, spellType, this.tomes.length);
//       this.tomes.push(newTome);
//     }
//     findTome (index) {
//       return this.tomes[index];
//     }
//   }
  
//   const merlin = new Factory('Merlin');
//   merlin.generateTome('Fire');
//   merlin.generateTome('Water');
//   merlin.generateTome('Earth');
//   merlin.generateTome('Air');
//   console.log(merlin);
//   console.log(merlin.findTome(0));


// const gandalf = new Factory('Gandalf');
// gandalf.generateTome('Light');
// gandalf.generateTome('Dark');
// console.log(gandalf);
// console.log(gandalf.findTome(0));



////// Static Properties  /////////////////////
// class Character {
//     static eyeColors () {
//       return ['blue', 'green', 'brown'];
//     }
//     // rest of class definition here...
//   }
//   // more code...
//   const superman = new Character('Clark Kent', 30, Person.eyeColors()[0], 'black');