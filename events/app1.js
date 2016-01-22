var Emitter = require('./emitter1');

var emtr = new Emitter();

emtr.on('greet', function() {
	console.log('Somewhere, someone said hello.');
});

emtr.on('greet', function() {
	console.log('Yes, I heard them!');
});

console.log('Hello - is there an echo in here?!');
emtr.emit('greet');