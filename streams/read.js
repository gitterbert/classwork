var ReadStream = require('./lib/readStream.js');

/**** non-flowing mode ****/

  console.log('starting read stream in non-flowing mode.');
  var rs1 = new ReadStream();
  rs1.on('readable', function() {
    while (null !== (record = rs1.read())) {
      console.log('received         : ' + JSON.stringify(record));
    }
  });
  rs1.on('end', function() {
    console.log('done with read stream in non-flowing mode.\n');
    console.log('starting read stream in flowing mode.');
  });



/**** flowing mode ****/

 
  var rs2 = new ReadStream();
  rs2.on('data', function(record) {
    console.log('received         : ' + JSON.stringify(record));
    console.log('pausing stream for 2 secs');
    rs2.pause();
    setTimeout(function() {
       console.log('ok, resuming stream');
       rs2.resume();
    },2000);
  });
  rs2.on('end', function() {
    console.log('done with read stream in flowing mode.\n');
  });