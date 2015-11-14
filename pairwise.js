function pairwise(arr, arg) {
	if (arr.length === 0) {
		return 0;
	}
	else {
		pairwise_arr = [];
		for (i = 0; i < arr.length; i++) {
			for (j = 1; j < arr.length - 1; j++) {
				if ((arr[i] + arr[j] === arg) && (i !== j)) {
					if ((pairwise_arr.indexOf(i) === -1) && (pairwise_arr.indexOf(j) === -1)) {
						pairwise_arr.push(i);
						pairwise_arr.push(j);
					}
				}
			}
		}
		var sum = pairwise_arr.reduce(function(a, b) {
		  return a + b;
		});
		return sum;
		}
}

console.log(pairwise([1,4,2,3,0,5], 7)); // indices: 1, 2, 3, 5; sum = 11 

console.log(pairwise([1, 3, 2, 4], 4)); // indices: 0, 1; sum = 1

console.log(pairwise([1, 1, 1], 2)); // indices: 0, 1; sum = 1

console.log(pairwise([0, 0, 0, 0, 1, 1], 1)); // indices: 0, 4, 1, 5; sum = 10

console.log(pairwise([], 100)); // indices: none; sum = 0 