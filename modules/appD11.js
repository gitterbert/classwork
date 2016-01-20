var greet = require('./greetD11-1');
greet();

var greet2 = require('./greetD11-2').greet;
greet2();

var greet3 = require('./greetD11-3');
greet3.greet();
greet3.greeting = 'Changed hello world!';

var greet3b = require('./greetD11-3');
greet3b.greet();

var Greet4 = require('./greetD11-4');
var grtr1 = new Greet4();
grtr1.greet();
var grtr2 = new Greet4();
grtr2.greeting = 'New object test!! Woot!';
grtr2.greet();

var greet5 = require('./greetD11-5').greet;
greet5();
