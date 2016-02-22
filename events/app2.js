var Emitter = require('events');
var eventConfig = require('./config2').events;

var emtr = new Emitter();

emtr.on(eventConfig.GREET, function() {
	console.log('Somewhere, someone said hello.');
});

emtr.on(eventConfig.GREET, function() {
	console.log('Yes, I know that definitely a greeting occurred!');
});

emtr.on(eventConfig.GOODBYE, function() {
	console.log('Bye yall, I know that definitely a goodbye later tater occurred!');
});

console.log('Hello - is there an echo in here somewhere?!');
emtr.emit(eventConfig.GREET);
emtr.emit(eventConfig.GOODBYE);