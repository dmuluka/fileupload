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
	
	request.post({
  	headers: {'content-type' : 'multipart/form-data'},
  	url:     url,
  	form: {file: req.files},
  	preambleCRLF: true,
  	postambleCRLF: true
	}, function(error, response, body){
  	res.end(body);
	});
	
});


app.listen(8000);
