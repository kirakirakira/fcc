var inputs = [2, 36, 30, 5, 0];
var functions = ["x", "-", "+", "x"];
var output;
var input_1;
var input_2;
var operator;

while (functions.length > 0) {

	input_1 = inputs.shift();
	input_2 = inputs.shift();
	operator = functions.shift();

	switch(operator) {
	  case "+":
	    output = input_1 + input_2;
	    break;
	  case "-":
	    output = input_1 - input_2;
	    break;
	  case "/":
	    output = input_1 / input_2;
	    break;
	  case "x":
	    output = input_1 * input_2;
	    break;
	}

	inputs.unshift(output);

	console.log(inputs[0]);
}
