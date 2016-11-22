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

//esporto tutte le funzioni
exports.Employee=Employee;
exports.Search=Search;
exports.Delete=Delete;
exports.Aggiungi_Employee=Aggiungi_Employee;