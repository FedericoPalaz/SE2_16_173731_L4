//struct per gli emploeey
function Employee(id,name,surname,level,salary)
{
	this.id=id;
    this.name=name;
    this.surname=surname;
    this.level=level;
    this.salary=salary;
}

//vettore di emploeey
var vettore=new Array();
vettore=[new Employee (1,"Fabio","Casati",4,3000),new Employee  (2,"Mattia","Salnitri",5,4000)];

//Aggiunge l'elemento nel vettore
//input:id(può essere null),name,surname,level,salary
//output:vettore aggiornato
function Aggiungi_Employee(id,name,surname,level,salary)
{
	if(id==null){
		var count=vettore.length;
		var employee=new Employee((vettore[count-1].id+1),name,surname,level,salary);		
		vettore[count]=employee;
	}
	else
	{
		var employee=new Employee(id,name,surname,level,salary);
		var trovato=0,i;
		for(i=0;i<vettore.length;i++)
		{
			if(id==vettore[i].id)
			{
				trovato=1;
				vettore[i]=employee;
			}
		}
		if(trovato==0)
		{
			vettore[i]=employee;
		}
	}
}

//Delete
//return 0 se non esiste
//return 1 se esiste e viene cancellato
function Delete(id)
{
    var impiegato=Search(id);
    if(impiegato==null)
    {
        return 0;
    }
    else
    {
        var trovato=-1;
        for(var i=0;i<(vettore.length);i++)
		{
			if(id==vettore[i].id)
			{
				vettore.splice(i,1);				
			}
		}

        return 1;
    }
}

//Search
function Search(id)
{
	var employee=null;
	for(i=0;i<vettore.length;i++)
		{
			if(id==vettore[i].id)
			{
				employee=vettore[i];
			}
		}
	return employee;
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
app.set('port', (process.env.PORT || 3500));
app.use(express.static(__dirname+"/scripts"));

app.get('/', function(req, res) 
{   
        //bind to the empty template
    bind.toFile('tpl/cliente.tpl', 
    {
        
    }, 
    function(data) {
        //write response
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
    });
});


app.use('/Aggiungi', function(request, response) 
{
    //se i campi sono stati settati e non a null allora inserisco l'emploeey
    if(request.body.name && request.body.surname && request.body.level && request.body.salary)
    {
        Aggiungi_Employee(parseInt(request.body.id),request.body.name,request.body.surname,parseInt(request.body.level),parseInt(request.body.salary));
    } 
    
    //ritorno nella homepage
    bind.toFile('tpl/cliente.tpl', 
    {
        //non invio nessuno dato
    }, 
    function(data) {
        //write response
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(data);
    });
});

app.use('/searchordelete', function(request, response) 
{

    var impiegato=null;
    //Controllo se nel body c'è qualcosa e anche ne radiobutton
    if(request.body && request.body.radio)
    {
        if(request.body.radio=="cerca")
        {
            //Cerca un emploeey
            impiegato=Search(parseInt(request.body.id_search));
            if(impiegato==null)
            {
                   bind.toFile('tpl/cliente.tpl', 
                    {
                       esiste:"L'utente cercato non esiste",
                       esiste_flag:false
                    }, 
                    function(data) {
                        //write response
                        response.writeHead(200, {'Content-Type': 'text/html'});
                        response.end(data);
                    }); 
            }
            else
            {
                    bind.toFile('tpl/cliente.tpl', 
                    {
                        id: impiegato.id,
                        name: impiegato.name,
                        surname: impiegato.surname,
                        level: impiegato.level,
                        salary: impiegato.salary,
                        esiste:"esiste",
                        esiste_flag:true
                    }, 
                    function(data) {
                        //write response
                        response.writeHead(200, {'Content-Type': 'text/html'});
                        response.end(data);
                    });
            }          
        }
        else
        {
            if(Delete(parseInt(request.body.id_search))==1)
            {
                bind.toFile('tpl/cliente.tpl', 
                {
                   esiste:"Eliminazione avvenuta correttamente"

                }, 
                function(data) {
                    //write response
                    response.writeHead(200, {'Content-Type': 'text/html'});
                    response.end(data);
                });
            }
            else
            {
                bind.toFile('tpl/cliente.tpl', 
                {
                   esiste:"Eliminazione non avvenuta correttamente"

                }, 
                function(data) {
                    //write response
                    response.writeHead(200, {'Content-Type': 'text/html'});
                    response.end(data);
                });
            }
        }
    }
    else{
           bind.toFile('tpl/cliente.tpl', 
            {
               esiste:"ciao2"
            }, 
            function(data) {
                //write response
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.end(data);
            }); 
    }    
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});