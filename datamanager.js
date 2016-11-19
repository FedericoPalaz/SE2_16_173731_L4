//struct per gli emploeey
function Emploeey(id,name,surname,level,salary)
{
	this.id=id;
    this.name=name;
    this.surname=surname;
    this.level=level;
    this.salary=salary;
}

//vettore di emploeey
var vettore=new Array();
vettore=[new Emploeey (1,"Fabio","Casati",4,3000),new Emploeey (2,"Mattia","Salnitri",5,4000)];

//Aggiunge l'elemento nel vettore
//input:id(può essere null),name,surname,level,salary
//output:vettore aggiornato
function Aggiungi_Emploeey(id,name,surname,level,salary)
{
	if(id==null){
		var count=vettore.length;
		var emploeey=new Emploeey((vettore[count-1].id+1),name,surname,level,salary);		
		vettore[count]=emploeey;
	}
	else
	{
		var emploeey=new Emploeey(id,name,surname,level,salary);
		var trovato=0,i;
		for(i=0;i<vettore.length;i++)
		{
			if(id==vettore[i].id)
			{
				trovato=1;
				vettore[i]=emploeey;
			}
		}
		if(trovato==0)
		{
			vettore[i]=emploeey;
		}
	}
}

//express lib
var express = require('express');
//inspect
var util = require('util');

//instantiate express
var app = express();

//for templates
var bind = require('bind');

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
    //response.writeHead(200, headers);

	var text = '';

	if ( typeof request.body !== 'undefined' && request.body)
	{
		
		//Funzioni
		if(request.body.id_search && request.body.radio)
		{
			//funzione di ricerca o elimina
		}
		else
		{
			//se i campi sono stati settati e non a null allora inserisco l'emploeey
			if(request.body.name && request.body.surname && request.body.level && request.body.salary)
			{
				Aggiungi_Emploeey(parseInt(request.body.id),request.body.name,request.body.surname,parseInt(request.body.level),parseInt(request.body.salary));
			}
		}
	
        //the content of the POST receiced
		text = "request body: " + util.inspect(request.body) + "\n";
		
        //content of the post
		var id,name,surname,level,salary;
		
		//if query is defined and not null
		if ( typeof request.body.id !== 'undefined' && request.body.id)
            
			id = request.body.id;
		else 
			id = "not defined";
		
		for(var i=0;i<vettore.length;i++)
		{
			text+=vettore[i].id + " ";
		}
	}
	else
	{
		text = "body undefined";
	}
	
	bind.toFile('cliente.tpl', text,function() {
        //write response
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(text);
    });
    //
    //response.end(callback);
    
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
