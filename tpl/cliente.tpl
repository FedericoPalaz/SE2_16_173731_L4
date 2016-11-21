<!DOCTYPE html>
<html>
<head>
       <!-- Here goes the metadata -->  
      <meta charset="utf-8">
      <title> HTML5 basics </title>
      <script src="/script.js"></script>
</head>

<body>
	<h2>Cerca Employee in base all'ID:</h2>
	<form  method="post" action="/searchordelete">
		<input type="text" name="id_search" id="id_search"/>
		<input type="radio" name="radio" value="cerca" id="cerca" checked=true/>Cerca
		<input type="radio" name="radio" value="elimina" id="elimina"/>Elimina
		<button type="button" onclick="submit()" >Submit</button>
	</form>
	<br/>
	<button onClick="Aggiungi_campi()">Aggiungi nuovo Emploeey</button>
	<br/>
    (:esiste:)
	<form  method="post" action="/Aggiungi" name="myform" id="myform" (:if[esiste_flag] ~[:then ~ style="visibility:visible" :][:else ~ style="visibility:hidden":]:)>

		ID:<input type="text" name="id" id="id" value=(:id:) /><br/> 		
		Name:<input type="text" name="name" id="name" value=(:name:) /><br/>
		Surname:<input type="text" name="surname" id="surname" value=(:surname:) /><br/>
		Level:<input type="text" name="level" id="level" value=(:level:) /><br/>
		Salary:<input type="text" name="salary" id="salary" value=(:salary:) /><br/>
		<button  type="button" id="Aggiungi" onclick="submit()" id="Invia">Invia</button>
	</form>
</body>
</html>
