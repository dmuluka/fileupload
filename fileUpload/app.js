var express = require('express');
var fileUpload = require('express-fileupload');
var app = express();
var fs = require('fs');		

app.use(fileUpload());

app.use(express.static(__dirname + '/'));
 
app.post('/upload', function(req, res) {
    
console.log(req.body);

if(!!req.body){
		var name = req.body['file[file][name]'];
		var data = req.body['file[file][data]'];
	 	fs.writeFile('./uploads/'+name, data, 'binary', function() {
		  res.end("File Uploaded");
		});
	}
});

app.listen(3000);
