console.log("Git hub Lab");

const fs = require('fs');
fs.readFile('file.txt', 'Utf8', function(err, data){
    if(err) throw err;
    console.log(data);
});

const fsw = require('fs');
fsw.writeFile('file.txt', 'Hello World!', function(err){
    if(err) throw err;
    console.log('File saved');
});

const http = require('https');
http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write('Hello World!');
    res.end();
}).listen(8080);

const https = require('https'); 
https.get('https://jsonplaceholder.typicode.com/posts/1', (resp) => { 
  let data = ''; 
 
  resp.on('data', (chunk) => { 
    data += chunk; 
  }); 
 
  resp.on('end', () => { 
    console.log(JSON.parse(data)); 
  }); 
}).on('error', (err) => { 
  console.log("Error: " + err.message); 
});

const myModule = require('./my-module.js'); 
console.log(myModule.myFunction()); 

const myPromise = new Promise((resolve, reject) => { 
    if (condition) { 
      resolve('Success!'); 
    } else { 
      reject('Failure!'); 
    } 
  }); 
   
  myPromise.then((result) => { 
    console.log(result); 
  }).catch((error) => { 
    console.log(error); 
  }); 

  async function myFunction() { 
    try { 
      const result = await myPromise; 
      console.log(result); 
    } catch (error) { 
      console.log(error); 
    } 
  } 
   
  myFunction();