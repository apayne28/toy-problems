// //
// //Let's make a function that returns a new object, containing all of the properties of any objects passed in as parameters.

// //The returned object should include the first instance of each property seen on any parameter object, and any other instance of that property should be ignored.

// Also, if any parameter is not an object, it should be ignored. You can use the function isObject(object) to determine if a parameter is an object or not (it will return true or false).

// extend( {a: 1, b: 2}, {c: 3} ) // should === {a: 1, b: 2, c: 3}
// extend( {a: 1, b: 2}, {c: 3}, {d: 4} ) // should === {a: 1, b: 2, c: 3, d: 4}
// extend( {a: 1, b: 2}, {a: 3, c: 3} ) // should  === {a: 1, b: 2, c: 3}
// extend( {a: false, b: null}, {a: true, b: 2, c: 3} ) // should  === {a: false, b: null, c: 3}

const objectExtend = (...objs) => {
  let combinedObjs = {};
  //check if parameter is an object, Loop through ...objs, get the keys/values, put key/values into combinedObjs, if key exists, skip it
  for (let i = 0; i < objs.length; i++) {
    if (
      objs[i].constructor.name !== "Object" ||
      objs[i].constructor.name === "Array" ||
      objs[i] === null
    ) {
      continue;
    }

    let objKeys = Object.keys(objs[i]);
    for (let j = 0; j < objKeys.length; j++) {
      //if key doesnt exist in combinedObjs
      if (!combinedObjs[objKeys[j]]) {
        //perform operations

        //then set key-value inside combinedObjs
        combinedObjs[objKeys[j]] = objs[i][objKeys[j]];
      }
    }
  }

  return combinedObjs;
};

objectExtend({ a: false, b: null }, { a: true, b: 2, c: 3 });

const objectExtend = (...objs) => {
  let combinedObjs = {};
  //check if parameter is an object, Loop through ...objs, get the keys/values, put key/values into combinedObjs, if key exists, skip it
  for (let i = 0; i < objs.length; i++) {
    if (
      objs[i].constructor.name !== "Object" ||
      objs[i].constructor.name === "Array" ||
      objs[i] === null
    ) {
      continue;
    }

    let objKeys = Object.keys(objs[i]);
    for (let j = 0; j < objKeys.length; j++) {
      //if key doesnt exist in combinedObjs
      if (!combinedObjs.hasOwnProperty(objKeys[j])) {
        //perform operations

        //then set key-value inside combinedObjs
        combinedObjs[objKeys[j]] = objs[i][objKeys[j]];
      }
    }
  }

  return combinedObjs;
};
