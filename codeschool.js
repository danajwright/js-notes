

// FOR LOOP

for (i = 0; i < cars.length; i++) { 
    text += cars[i] + "<br>";
}

// statement 1: initialize variable
// statement 2: set condition
// statement 3: incriment



// closure dyl's example

var outside = function() {
  
  var i = 1;

  var innerIncrement = function() {
    i = i +1;
    console.log(i);
  }

  return innerIncrement;
}

var innerFunction = outside(); //var innerFunction is set to the innerIncrement function

innerFunction(); //console.log 2
innerFunction(); //console.log 3




//PASSING A FUNCTION TO ANOTHER FUNCTION

var fear = fearGenerated(numPeeps, rainInInches, numSharks);

var fearMessage = function() {
  if (fear < 200) {
    return("Fear Level: LOW\nStill wanna ride?");
  }
  else if (fear >= 200 && fear <= 300) {
    return("Fear Level: MEDIUM\nThink you'll make it?");
  }

};

function confirmRide(confirmToGo) {
  return confirmToGo(fearMessage);
}

var startRide = confirmRide(fearMessage);




// MAP METHOD IS SHORTHAND FOR A FOR LOOP

var numbers = [12, 4, 3, 9, 8, 6, 10, 1];

var results = numbers.map( *some coolFunction goes here* );

var results = [ ];
for(var i = 0; i < numbers.length; i++){
    results[i] =
}


// MAP TO arrayCell


var passengers = [ ["Thomas", "Meeks"],
                   ["Gregg", "Pollack"],
                   ["Christine", "Wong"],
                   ["Dan", "McGaw"] ];

var modifiedNames = passengers.map(function(arrayCell) {
			return arrayCell[0] + " " + arrayCell[1];
});



// MAP TO arrayCell no storage


var modifiedNames = [ "Thomas Meeks",
                      "Gregg Pollack",
                      "Christine Wong",
                      "Dan McGaw" ];


modifiedNames.map(function(name) {
  alert("Yo, " + name + "!"); 
});



// Puzzle function expressions

2
var puzzlers = [
3
  function(input) {
4
    return (input * 3) - 8;
5
  },
6
  function(input) {
7
    return (input + 2) * (input + 2) * (input + 2);
8
  },
9
  function(input) {
10
    return (input * input) - 9;
11
  },
12
  function(input) {
13
    return input % 4;
14
  }
15
];




//Returning a function from inside another function

function adventureSelector(userChoice){
  if (userChoice == 1) {
    return function() {
      alert("You selected the Vines of Doom!");
    };
  } else if (userChoice == 2) {
    return function() {
      alert("Looks like you want the Lake of Despair!");
    };
  } else {
    return function() {
      alert("The Caves of Catastrophe!");
    };
  }
}
 
//call adventureSelector
adventureSelector(3)();



//For loop to call the functions in the queue in order with 
//the input number, where the results of each function become 
//the next function’s input
//Queue should be empty after the function is called

var puzzlers = [
  function (a) { return 8*a - 10; },
  function (a) { return (a-3) * (a-3) * (a-3); },
  function (a) { return a * a + 4; },
  function (a) { return a % 5; }
];
var start = 2;

// build applyAndEmpty function expression here
var applyAndEmpty = function (input, queue) {
  var length = queue.length;
  for (var i = 0; i < length; i++) {
    input = queue.shift()(input);
  }
  return input;
};

alert(applyAndEmpty(start, puzzlers));


// Tracing a closure in the DOM
// http://screencast.com/t/OLxkGyGn8GP

function mystery() {
  var secret = 6;
  function mystery2(multiplier) {
    multiplier *= 3;
    return secret * multiplier;
  }
  return mystery2;
}

var hidden = mystery();
var result = hidden(3);



// Tracing a closure in the DOM II

function mystery(input) {
  var secret = 4;
  input += 2;
  function mystery2(multiplier) {
    multiplier *= input;
    return secret * multiplier;
  }
  return mystery2;
}

function mystery3(param) {
  function mystery4(bonus) {
    return param(6) + bonus;
  }
  return mystery4;
}

var hidden = mystery(3);
var jumble = mystery3(hidden);
var result = jumble(2);


//results

hidden
mystery2(multiplier) {
    multiplier *= input;
    return secret * multiplier;
  }

jumble
mystery4(bonus) {
    return param(6) + bonus;
  }

result
122


//first working closure

function warningMaker(obstacle) {
  return function(beware) {
    alert('Beware! There have been ' + obsticle + ' sightings in the Cove today!');  
  };
         
}

function warningMaker(obstacle) {
  return function() {
    alert("Beware! There have been " + obstacle + " sightings in the Cove today!");
  };
}

//second working closure

function warningMaker(obstacle) {
  return function() {
    alert("Beware! There have been " + obstacle + " sightings in the Cove today!");
  };
}

warningMaker("iceberg");

var icebergAlert = warningMaker("iceberg");

icebergAlert();



//add paramaters

function warningMaker(obstacle) {
  return function(number, location) {
    alert("Beware! There have been " + obstacle +
          " sightings in the Cove today!\n " + number + " have been spotted at the " + location + "!");

  };
}

warningMaker("iceberg");

var icebergAlert = warningMaker("iceberg");

icebergAlert();



//incrimenting the count variable each time warningMaker is called

function warningMaker(obstacle) {
  var count = 0;
  return function(number, location) {
    count++;
    alert("Beware! There have been " + obstacle +
          " sightings in the Cove today!\n" +
          number + " have been spotted at the " +
          location + "!\n" +
          "This is alert #" + count + " today for " +  obstacle + " danger.");
  };
}


//adding location to the zones array

function warningMaker(obstacle) {
  var count = 0;
  var zones = [];
  return function(number, location) {
    count++;
    var list = "";
    zones.push(location);
    for (var i = 0; i < zones.length; i++) {
      list += zones[i] + "\n";
    }
    alert("Beware! There have been " + obstacle +
          " sightings in the Cove today!\n" +
          number + " have been spotted at the " +
          location + "!\n" +
          "This is alert #" + count +
          " today for " + obstacle + " danger.\n" +
          "Current danger zones are:\n" +
          list);
  };
}

//pushing locations to the zones array

function warningMaker(obstacle) {
  var count = 0;
  var zones = [];
  return function(number, location) {
    count++;
    var list = "";
    zones.push([location, number]);
    for (var i = 0; i < zones.length; i++) {
      list += zones[i][0] + " (" + zones[i][1] + ")" + "\n";
    }
    alert("Beware! There have been " + obstacle +
          " sightings in the Cove today!\n" +
          number + " have been spotted at the " +
          location + "!\n" +
          "This is alert #" + count +
          " today for " + obstacle + " danger.\n" +
          "Current danger zones are:\n" +
          list);
  };
}


// Write a function that is a number guessing game. 
// It should determine a random number from 1-100, 
// and let the user guess the number. 
// It should report back whether their guess is correct, too high, or too low. 
// Important: if the user guesses a number they've already guessed, 
// it should tell them they have previously guessed this number. 
// Until they guess the correct number, it should continue to prompt them. 
// Once they've guessed the correct number, it should congratulate them 
// and tell them how many guesses they took to solve the problem 
// (minus any duplicate guesses).

//create instance of class.. new class.. runs initialize function.. pass in starting value for the game
//class allows variables and numbers to persist
//initialize the class with a random number
//call a method on the class.. guess number
//class has array as property
//initilization method.. constructor
//keeping track of number of guesses with array of numbers guessed

//sudo classical.. somewhat classlike
//looks traditional oo, but is using closure

function guessingGame(userGuess) {
  var answer = Math.floor(Math.random() * (100 - 1 + 1) + 1);  
  if (userGuess == answer) {
    return function() {
      alert("correct!");
    };
  } else if (userGuess > answer) {
      return function() {
        alert("too high!");
      };
  } else {
      return function() {
        alert("too low!");
      };
  }
}

//call guessingGame
guessingGame(9);




var test_image = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 0, 0, 0, 1],
  [1, 1, 1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1]
];


// var black = image[2][3]
// console.log(black);

function findUpperLeft (image) {
    for (var i = 0; i < image.length; i++ ) {
      for (var q = 0; q < image[i].length; q++) {
        if (image[i][q] == 0) {
          return [i, q];
        }
        
      }
      
    }
}

function findRectangle(image) {
  
}

// [[x, y], width, height]
// [[x1, y1], [x2, y2]]

console.log(findUpperLeft(test_image));











var test_image = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 0, 0, 0, 1],
  [1, 1, 1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1]
];


// var black = image[2][3]
// console.log(black);

function findUpperLeft (image) {
    for (var i = 0; i < image.length; i++ ) {
      for (var q = 0; q < image[i].length; q++) {
        if (image[i][q] == 0) {
          return [i, q];
        }
        
      }
      
    }
}

function findRectangle(image) {
  // upperLeft = [y1, x1]
  var lowerRight = [0,0]
  
  var upperLeft = findUpperLeft(test_image);
    for (var x = upperLeft[1]); x < image[i].length; x++) {
      if (image[upperLeft[0]][x] == 0) {
        lowerRight[1] = x;
      }
        
    } 
  // Codility
  return lowerRight;

}

// [[x, y], width, height]
// [[x1, y1], [x2, y2]]

console.log(findUpperLeft(test_image));




// hoisting


function theBridgeOfHoistingDoom() {
  
  // declared variables
  var sword = undefined;
  var dwarf = undefined;
  var fall = undefined;
  var ring = undefined;

  // function declarations
  function fellowship() {
    return "friends";
  }

  // declared variables receiving either 
  // new values or function expression 
  // assignments will lose the var keyword 
  // in the executable code

  sword = "sting";
  dwarf = function () {
    return "axe";
  };

  fall = "Fly you fools!";

  fellowship = function () {
    return "broken";
  };

  ring();

  return sword;
}


// object literal
var vehicle1 = {type: "Motorboat", capacity: 6, 
storedAt: "Ammunition Depot"};


// adding an object with bracket notation and adding properties
var superBlinders = [ ["Firestorm", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000] ];

var lighthouseRock = {
  gateClosed: true,
  weaponBulbs: superBlinders,
  capacity: 30,
  secretPassageTo: "Underwater Outpost",
  numRangers: 0
};

function addRanger(location, name, skillz, station) {
  // increment the number of rangers property
  for (var i = 1; i <= ["numRangers"]; i++); 
  location["numRangers"]++;
  // add the ranger<number> property and assign a ranger object
  location["ranger" + location["numRngers"]] = {name: name, skillz: skillz, station: station};
}

// call addRanger three times to add the new rangers
addRanger(lighthouseRock, "Nick Walsh", "magnification burn", 2);
addRanger(lighthouseRock, "Drew Barontini", "uppercut launch", 3);
addRanger(lighthouseRock, "Christine Wong", "bomb defusing", 1);



// make function into object property 
var lighthouseRock = {
  gateClosed: true,
  weaponBulbs: superBlinders,
  capacity: 30,
  secretPassageTo: "Underwater Outpost",
  numRangers: 3,
  ranger1: {name: "Nick Walsh", skillz: "magnification burn", station: 2},
  ranger2: {name: "Drew Barontini", skillz: "uppercut launch", station: 3},
  ranger3: {name: "Christine Wong", skillz: "bomb defusing", station: 1},
  addRanger: function(name, skillz, station) {
    this.numRangers++;
    this["ranger" + this.numRangers] = {
      name: name,
      skillz: skillz,
      station: station
    };
}

};

lighthouseRock.addRanger("Jordan Wade", "dual-wield hand crossbow", 4); //add ranger





var superBlinders = [ ["Firestorm", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000] ];

var lighthouseRock = {
  gateClosed: true,
  weaponBulbs: superBlinders,
  capacity: 30,
  secretPassageTo: "Underwater Outpost",
  numRangers: 3,
  ranger1: {name: "Nick Walsh", skillz: "magnification burn", station: 2},
  ranger2: {name: "Drew Barontini", skillz: "uppercut launch", station: 3},
  ranger3: {name: "Christine Wong", skillz: "bomb defusing", station: 1},
  ranger4: {name: "Jordan Wade", skillz: "dual-wield hand crossbow", station: 4},
  addRanger: function(name, skillz, station) {
    this.numRangers++;
    this["ranger" + this.numRangers] = {
      name: name,
      skillz: skillz,
      station: station
    };
  }
};

// create addBulb function property here
lighthouseRock.addBulb = function(name, wattage) {
  this.weaponBulbs.push([name, wattage]);
};
  




var vehicle3 = {
  type: "Submarine", capacity: 8, storedAt: "Underwater Outpost",
  ranger1: {name: "Gregg Pollack", skillz: "Lasering", dayOff: "Friday"},
  ranger2: {name: "Bijan Boustani", skillz: "Working", dayOff: "Saturday"},
  ranger3: {name: "Ashley Smith", skillz: "Torpedoing", dayOff: "Friday"},
  ranger4: {name: "Mark Krupinski", skillz: "Sniping", dayOff: "Wednesday"},
  numRangers: 4
};

var relieveDuty = function(vehicle, day) {
  var offDuty = [];
  var onDuty = [];

  for (var i = 1; i <= vehicle.numRangers; i++) {
    if (vehicle["ranger"+i].dayOff == day) {
      offDuty.push(vehicle["ranger"+i]);
    } else {
      onDuty.push(vehicle["ranger"+i]);
    }
    delete vehicle["ranger"+i];
  }

  vehicle.numRangers -= offDuty.length;

  for (var j = 1; j <= vehicle.numRangers; j++) {
    vehicle["ranger"+j] = onDuty.shift();
  }

  return offDuty;
};

var offToday = relieveDuty(vehicle3, "Friday");










