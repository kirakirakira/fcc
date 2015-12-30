function telephoneCheck(str) {
  // Check if a telephone number is a valid US number based on format
  // Valid formats:
  // 555-555-5555
  // (555)555-5555
  // (555) 555-5555
  // 555 555 5555
  // 5555555555
  // 1 555 555 5555

  // 1 555-555-5555
  // 1 (555) 555-5555
  // 1(555)555-5555

  var str_length = str.length;
  var check_1 = /^\d{3}-\d{3}-\d{4}$/;
  var check_2 = /^[(]\d{3}[)]\d{3}-\d{4}$/;
  var check_3 = /^[(]\d{3}[)]\s\d{3}-\d{4}$/;
  var check_4 = /^\d{3}\s\d{3}\s\d{4}$/;
  var check_5 = /^\d{10}$/;
  var check_6 = /^1\s\d{3}\s\d{3}\s\d{4}$/;
  var check_7 = /^1\s\d{3}-\d{3}-\d{4}$/;
  var check_8 = /^1\s[(]\d{3}[)]\s\d{3}-\d{4}$/;
  var check_9 = /^1[(]\d{3}[)]\d{3}-\d{4}$/;

  if (check_1.test(str) || check_2.test(str) || check_3.test(str) || check_4.test(str) || check_5.test(str) || check_6.test(str) || check_7.test(str) || check_8.test(str) || check_9.test(str)) {
  	return true;
  }

  else {
  	return false;
  }
}



console.log(telephoneCheck("555-555-5555"));	// true
console.log(telephoneCheck("555-555-55556"));	// false
console.log(telephoneCheck("5555-55-5555"));	// false
console.log(telephoneCheck("(555)555-5555"));	// true
console.log(telephoneCheck("(555) 555-5555"));	// true
console.log(telephoneCheck("555 555 5555"));	// true
console.log(telephoneCheck("5555555555"));		// true
console.log(telephoneCheck("55555555556"));		// false
console.log(telephoneCheck("1 555 555 5555"));	// true
console.log(telephoneCheck("2 555 555 5555"));	// false

console.log(telephoneCheck("1 555-555-5555"));
console.log(telephoneCheck("1 (555) 555-5555"));
console.log(telephoneCheck("1(555)555-5555"));

console.log(telephoneCheck("-1 (757) 622-7382"));