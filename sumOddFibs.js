function sumFibs(num) {
	var fib_seq = [0,1];
	var sum_odds = 0;
	var next_num;

	while (Number(fib_seq.slice(fib_seq.length-1, fib_seq.length)) < num) {
		next_num = Number(fib_seq.slice(fib_seq.length-2, fib_seq.length-1)) + Number(fib_seq.slice(fib_seq.length-1, fib_seq.length));
		console.log("next num", next_num);
	
		if (next_num < num) {
			fib_seq.push(next_num);
		}
	}

	//console.log(fib_seq);
	// console.log("fib seq length", fib_seq.length);
	// console.log("last num in fib seq", fib_seq[fib_seq.length-1])

	for (var i=0; i<fib_seq.length; i++) {
		if (fib_seq[i]%2 == 1) {
			sum_odds += fib_seq[i];
		}
	}

	console.log(sum_odds);
	return sum_odds;

}

// sumFibs(4); // 5
// sumFibs(10); // 99
sumFibs(5);
// sumFibs(1); // 0?
//sumFibs(1000); // 1785
// sumFibs(4000000); // 4613732
// sumFibs(75024); // 60696
// sumFibs(75025); // 135721


function fibonacci(num) {

	if (num === 1 || num === 2) {
		return 1;
	}

	return fibonacci(num-1) + fibonacci(num-2);
}

//console.log(fibonacci(1000));