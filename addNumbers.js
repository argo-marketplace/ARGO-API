'use strict';
console.log('Loading a lamba function for adding two numbers');

export.addNumber = function(events,context, callback) => {
	
	if (event.number1 === undefined || event.number2 === undefined) {
        callback("Invalid Input");
    }
    var a = event.number1;
	var b = event.number2;
	var result = a + b;

	callback(null, result);
};