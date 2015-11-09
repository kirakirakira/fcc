function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}

function getMinOfArray(numArray) {
  return Math.min.apply(null, numArray);
}

function sumAll(arr) {  
  var sum = 0;
  var max = getMaxOfArray(arr);
  var min = getMinOfArray(arr);
  
  while (min<=max) {
    sum += min;
    console.log("sum ", sum);
    min += 1;
    console.log("min ", min);
  }
  
  return sum;
  console.log(sum);
};


console.log(sumAll([1, 4]));
