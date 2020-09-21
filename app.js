const events = require('events');
// I'm requiring util module to use a method called inherits (there is a bunch of other methods)
const util = require('util');


//Creating an object to be the emit the event
var Person = function(name){
    this.name = name;
};

//Person object is inheriting the constructor EventEmitter from events
// The person will emit the event, so I need to create an event to be listen in the person object, therefore I need the property above

util.inherits(Person, events.EventEmitter)

var ramon = new Person('ramon');
var samuel = new Person('samuel');
var didico = new Person('didico');
var duno = new Person('duno');

const dercino = [ramon, samuel, didico, duno];

//Creating the event to be emitted for each person
dercino.forEach(function(dercineiro){
    dercineiro.on('speak', function(mssg){
        console.log(dercineiro.name + ' said ' + mssg);
    });
});

ramon.emit('speak', 'Samuel is a rascal');
samuel.emit('speak', 'Look that ass');
didico.emit('speak', 'weed');
duno.emit('speak', 'I love Taleb');



House = function(room1, room2){
    this.room1 = room1;
    this.room2 = room2;
};

didicoHouse = new House('bedroom', 'kitchen');

dercino.forEach(function(dercineiro){
   dercineiro.on('paint', function(color1, color2){
       console.log(dercineiro.name + ' painted ' + didicoHouse.room1 + ' in ' + color1);
       console.log(dercineiro.name + ' painted ' + didicoHouse.room2 + ' in ' + color2);
   });
});

ramon.emit('paint', 'red', 'blue');
