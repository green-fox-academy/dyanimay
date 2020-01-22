// 1 5 3 (1től 5ig megy és 3al kell növelni)
// 4 8 7
// 6 9 1
// 5 10 2

// 3 3 3 3 3 0 0 0 0 0
// 3 3 3 10 10 7 7 7 0 0


function manipulateArray(n, queries) {
  let array = initiateArray(n);
  array = executeQueries(array, queries);
  array = reconstructValues(array);
  const max = findMax(array);
  return max;
}

function initiateArray(n) {
  return new Array(n).fill(0);
}

function executeQueries(array, queries) {
  for (let query of queries) {
    array[query[0]-1] += query[2];
    if (query[1] < array.length) {
      array[query[1]] -= query[2];
    }
    // for (let i = query[0]-1; i < query[1]; i++) {
    //   array[i] += query[2];
    // }
  }
  return array;
}

//array.sort((a, b) => b - a)[0] megtalálni a max itemet egy arrayben
function findMax(array) {
  if (array.length == 0) {
    return null;
  }
  let max = array[0];
  for (let e of array) {
    if (e > max) {
      max = e;
    }
  }
  return max;
}

const queries = [
  [1, 5, 3],
  [4, 8, 7],
  [6, 9, 1],
  [5, 10, 2]
]

function reconstructValues(array) {
  for (let i = 1; i < array.length; i++) {
    array[i] += array[i-1];
  }
  return array;
}

console.log(manipulateArray(10, queries));