function greet(callback) {
	console.log('Hello!');
	var data = {
		name: 'John Paul Doe'
	};
	
	callback(data);
}

greet(function(data) {
	console.log('The callback was invoked!');
	console.log(data);
});

greet(function(datax) {
	console.log('A different callback was invoked!');
	console.log(datax.name);
});