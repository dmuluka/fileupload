var express = require('express');
var fileUpload = require('express-fileupload');
var app = express();
var request = require('request');
var server = {
	host: "localhost",
	port: "3000"
}
 
app.use(fileUpload());

app.use(express.static(__dirname + '/'));
 
app.post('/upload', function(req, res) {

	var url = "http://"+server.host+":"+server.port+"/upload";
	var file = req.files.file;

	var formData = {
  	file: new Buffer(file.data),
  	name: file.name
  }
	request.post({url:url, formData: formData}, function optionalCallback(err, httpResponse, body) {
		if (err) {
		  return res.end('upload failed:', err);
		}
		res.end('Upload successful!');
	});

});


app.listen(8000);
