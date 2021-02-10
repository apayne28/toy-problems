// https://www.codewars.com/kata/5f709c8fb0d88300292a7a9d

// Some people have been killed!
// You have managed to narrow the suspects down to just a few. Luckily, you know every person who those suspects have seen on the day of the murders.

// Task.
// Given a dictionary with all the names of the suspects and everyone that they have seen on that day which may look like this:

// {'James': ['Jacob', 'Bill', 'Lucas'],
//  'Johnny': ['David', 'Kyle', 'Lucas'],
//  'Peter': ['Lucy', 'Kyle']}
// and also a list of the names of the dead people:

// ['Lucas', 'Bill']
// return the name of the one killer, in our case 'James' because he is the only person that saw both 'Lucas' and 'Bill'

// //loop through object
// //loop through array, if any of the current index person is included in dead people array, then he is killer
// //if dictionary has both names in it, they are the killer

suspectsDict = {
  James: ["Jacob", "Bill", "Lucas"],
  Johnny: ["David", "Kyle", "Lucas"],
  Peter: ["Lucy", "Kyle"],
};

deadPeople = ["Lucas", "Bill"];

const whoIsTheKiller = (suspectsList, deadPeople) => {
  let numDeadPeople = deadPeople.length;
  let counter = 0;

  for (const suspect in suspectsList) {
    suspectsList[suspect].forEach((person) => {
      if (deadPeople.includes(person)) {
        counter += 1;
      }
    });
    if (counter === numDeadPeople) {
      return `${suspect}`;
    }
  }
};

console.log(whoIsTheKiller(suspectsList, deadPeople));
