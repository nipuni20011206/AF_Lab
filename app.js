console.log("Git hub Lab");

const fs = require('fs');
fs.readFile('file.txt', 'Utf8', function(err, data){
    if(err) throw err;
    console.log(data);
});

