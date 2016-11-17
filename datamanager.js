//express lib
var express = require('express');
//inspect
var util = require('util');

//instantiate express
var app = express();

//POST
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));


app.set('port', (process.env.PORT || 1337));

//use: for both POST and GET
app.use('/', function(request, response) 
{
    //set the headers of the responce
    var headers = {};
    //answer
    headers["Content-Type"] = "application/json";
    response.writeHead(200, headers);


	var text = '';

	if ( typeof request.body !== 'undefined' && request.body)
	{
        //the content of the POST receiced
		text = "request.body: " + util.inspect(request.body) + "\n";
		
        //content of the post
		var id,name,surname,level,salary;
		
		//if query is defined and not null
		if ( typeof request.body.id !== 'undefined' && request.body.id)
            
			id = request.body.id;
		else 
			id = "not defined";
		
		if ( typeof request.body.name !== 'undefined' && request.body.name)
            
    		name = request.body.name;
		else 
			name = "not defined";
		if ( typeof request.body.surname !== 'undefined' && request.body.surname)
            
			surname = request.body.surname;
		else 
			surname = "not defined";
		
		if ( typeof request.body.level !== 'undefined' && request.body.level)
            
    		level = request.body.level;
		else 
			level = "not defined";
		if ( typeof request.body.salary !== 'undefined' && request.body.salary)
            
    		salary = request.body.salary;
		else 
			salary = "not defined";
			    	
        text = text + "post received: " + id+','+name+','+surname+','+level+','+salary;
	}
	else
	{
		text = "body undefined";
	}
	
    response.end(text);

});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
