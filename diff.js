function diff(arr1, arr2) {
  var newArr = [];

  function notInArray(arr1, arr2) {
  	arr1.filter(function(val) {
  		if ((arr2).indexOf(val)===-1) {
  		newArr = newArr.concat(val);
  		}
  	})
  }

  notInArray(arr1, arr2);
  notInArray(arr2, arr1);

  console.log(newArr);
  return newArr;
}

diff([1, 2, 3, 5, 9], [1, 2, 3, 4, 5]);
