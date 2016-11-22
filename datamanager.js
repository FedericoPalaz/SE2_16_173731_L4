/**
 * @brief COstruzione della struct di employee
 * @param [in|out] type intero id dell'utente.
 * @param [in|out] type string name dell'utente.
 * @param [in|out] type string surname dell'utente.
 * @param [in|out] type int livello.
 * @param [in|out] type int salario.
 * @return Description of returned value.
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
    * @brief Aggiunge un utente al vettore
     * @param [in|out] type intero id dell'utente.
     * @param [in|out] type string name dell'utente.
     * @param [in|out] type string surname dell'utente.
     * @param [in|out] type int livello.
     * @param [in|out] type int salario.
    * @return Non ritorna nulla
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
 * @brief Cancello un utente attraverso il suo id.
 * @param [in|out] type integer Id del mio utente.
 * @return ritorna uno se è andato a buon fine altrimenti 0.
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
 * @brief Cerca un utente attraverso l'id.
 * @param [in|out] type integer Id del mio utente.
 * @return ritorna l'utente cercato.
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

exports.Employee=Employee;
exports.Delete=Delete;
exports.Aggiungi_Employee=Aggiungi_Employee;
exports.Search=Search;