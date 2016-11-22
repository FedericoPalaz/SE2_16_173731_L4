/**
    * @Costruisco la struct per employee
    * @param [in|out] id type integer  è l'id dell'utente.
    * @param [in|out] name type string è il nome dell'utente
    * @param [in|out] surname type string è il cognome dell'utente
    * @param [in|out] level type integer è il livello dell'utente
    * @param [in|out] salary type integer è il salario dell'utente
    */
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

/**
    * @Aggiungo un employee nel vettore e se lo ho già lo sostituisco con i nuovi dati
    * @param [in|out] id type integer  è l'id dell'utente.
    * @param [in|out] name type string è il nome dell'utente
    * @param [in|out] surname type string è il cognome dell'utente
    * @param [in|out] level type integer è il livello dell'utente
    * @param [in|out] salary type integer è il salario dell'utente
    */
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

/**
    * @Cancello un employee utilizzando l'id
    * @param [in|out] id type integer  è l'id dell'utente.
    * @return 1 se è andato a buon fine e 0 se non 
    */
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

/**
    * @Cerco un employee attraverso l'id
    * @param [in|out] id type integer  è l'id dell'utente.
    * @return se ho trovato l'utento lo resituisco altrimenti null
    */
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