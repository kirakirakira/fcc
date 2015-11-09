function convert(num) {

	var dec_to_romnum = {1: "I", 4: "IV", 5: "V", 9: "IX", 10: "X", 40: "XL",
						50: "L", 90: "XC", 100: "C", 400: "CD", 500: "D", 900: "CM",
						1000: "M"};

	var dec_keys = Object.keys(dec_to_romnum);

	var roman_numerals = new Array();

	while (num > 0) {

		var highest_dec = 0;

		for (var i=0; i < dec_keys.length; i++) {

			if ((Number(dec_keys[i]) <= num) && (Number(dec_keys[i]) >= highest_dec)) {
				highest_dec = Number(dec_keys[i]);
			}
		}

		roman_numerals.push(dec_to_romnum[highest_dec.toString()]);

		num -= highest_dec;
	}

	var roman_num = roman_numerals.join('');
	return roman_num;

}

convert(36); // XXXVI

convert(12); // XII

convert(5); // V

convert(9); // IX

convert(29); // XXIX

convert(16); // XVI

