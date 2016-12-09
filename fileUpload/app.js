var express = require('express');
var app = express();
var fileUpload = require('express-fileupload');

app.use(fileUpload());
 
app.post('/upload', function(req, res) {
	var file = req.files.file;
	var name = req.body.name;
	file.mv('./uploads/'+name, function(err) {
        if (err) {
            res.status(500).send(err);
        }
        else {
            res.send('File uploaded!');
        }
    });
});

app.listen(3000);
