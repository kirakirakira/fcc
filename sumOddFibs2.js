function sumFibs(num) {
	var previous_num = 0;
	var current_num = 1;
	var sum_odds = 0;

	while (current_num <= num) {
		if (current_num %2 === 1) {
			sum_odds += current_num;
		}

		var next_num = previous_num + current_num;
		previous_num = current_num;
		current_num = next_num;
	}

	return sum_odds;

}

console.log(sumFibs(1));
console.log(sumFibs(1000));
console.log(sumFibs(75025));