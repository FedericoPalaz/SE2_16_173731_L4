//download scripts
//hide internal structure
//app.use('/script',express.static(__dirname+'/scripts/'));
//in html
//<script src="script/script.js"></script>

/*function Car(name,brand)
{
    this.name=name;
    this.brand=brand;
}

var vars=[['1',new Car ("500","Fiat")],[],[]];
*/

//Fai comparire gli elementi nella form
function Aggiungi_campi()
{
	document.getElementById("myform").style.visibility="visible";
}

//Fai scomparire  la form
function submit()
{
	document.getElementById("myform").style.visibility="hidden";
	document.getElementById("id").value="";
	document.getElementById("name").value="";
	document.getElementById("surname").value="";
	document.getElementById("level").value="";
	document.getElementById("salary").value="";
}

//Fai scomparire i valori all'interno
function submit2()
{
	document.getElementById("id_search").value="";
	document.getElementById("cerca").checked = false;
	document.getElementById("elimina").checked = false;
}
