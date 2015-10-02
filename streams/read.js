var ReadStream = require('./lib/readStream.js');
var sleep = require('sleep');

/**** non-flowing mode 

  console.log('starting read stream in non-flowing mode.')
  sleep.sleep(3);
    var rs1 = new ReadStream();
  console.log('just constructed readstream1.')
  sleep.sleep(3);

  rs1.on('readable', function() {
    console.log('just set up the on watcher.')
    sleep.sleep(5);
    
    while (null !== (record = rs1.read())) {
      console.log('received         : ' + JSON.stringify(record));
    }
    
  });
  rs1.on('end', function() {
    console.log('done with read stream in non-flowing mode.\n');
    console.log('starting read stream in flowing mode.'); 
  });

*****/
/**** flowing mode *****/

   var rs2 = new ReadStream();
   var i = 0;
  console.log('just constructed readstream2.')
  sleep.sleep(5);
  rs2.on('data', function(record) {
    console.log('received         : ' + JSON.stringify(record));
    /*console.log('pausing stream for 2 secs');*/
    /*if (i==0) 
      {console.log('hold on a sec');
       sleep.sleep(5);
       i = 1;
      }*/
    
    rs2.pause();
    setTimeout(function() {
       console.log('ok, resuming stream');
       rs2.resume();
    },2000);
  });
  rs2.on('end', function() {
    console.log('done with read stream in flowing mode.\n');
  });

