var contador = 0;
var contador2 = 0;
var contador3 = 0;

function filter_age(){
	if(document.getElementById("age1").value!="" && document.getElementById("age2").value!=""){
		var contenido = document.getElementById("bodyTable");
		var numero1 = parseInt(document.getElementById("age1").value);
		var numero2 = parseInt(document.getElementById("age2").value);

		var numeroMayor = (numero1 > numero2) ? numero1 : numero2;
		var numeroMenor = (numero1 < numero2) ? numero1 : numero2;

		var xhr = new XMLHttpRequest();
		xhr.open("GET",  "control.php?opt=filter_age&code=nn&mayor="+numeroMayor+"&menor="+numeroMenor,  true );
		xhr.onreadystatechange = function(){
			if (xhr.readyState == 4 && xhr.status == 200){
				console.log(xhr.responseText);
				const resp = JSON.parse(xhr.responseText);
				cont = 0;
				for ( row of resp ){
					contador++;
					var fila = document.createElement('tr');
					var columna = document.createElement('th');
					var columna2 = document.createElement('th');
					var columna3 = document.createElement('th');
					var columna4 = document.createElement('th');
					var columna5 = document.createElement('th');
					var columna6 = document.createElement('th');
					var columna7 = document.createElement('th');
					var columna8 = document.createElement('th');
					var columna9 = document.createElement('th');

					columna.appendChild(document.createTextNode(contador));
					columna2.appendChild(document.createTextNode(resp[cont].code));
					columna3.appendChild(document.createTextNode(resp[cont].name));
					columna4.appendChild(document.createTextNode(resp[cont].lastName));
					columna5.appendChild(document.createTextNode(row.age));
					columna6.appendChild(document.createTextNode(resp[cont].gender));
					columna7.appendChild(document.createTextNode(resp[cont].city));
					columna8.appendChild(document.createTextNode(resp[cont].email[1]));
					columna9.appendChild(document.createTextNode(resp[cont].phones));

					fila.appendChild(columna);
					fila.appendChild(columna2);
					fila.appendChild(columna3);
					fila.appendChild(columna4);
					fila.appendChild(columna5);
					fila.appendChild(columna6);
					fila.appendChild(columna7);
					fila.appendChild(columna8);
					fila.appendChild(columna9);

					contenido.appendChild(fila);
					cont++;
				}
			}
		}
		xhr.send(null);
	}else{
		alert("Hay campos vacios");
	}
}

function filter_city(){
	if(document.getElementById("city").value!=""){
		var contenido = document.getElementById("bodyTable");
		var ciudad = document.getElementById("city").value;
		var xhr = new XMLHttpRequest();
		xhr.open("GET",  "control.php?opt=filter_city&code=nn&city="+ciudad,  true );
		xhr.onreadystatechange = function(){
			if (xhr.readyState == 4 && xhr.status == 200){
				console.log(xhr.responseText);
				const resp = JSON.parse(xhr.responseText);
				cont = 0;
				for ( row of resp ){
					contador2++;
					var fila = document.createElement('tr');
					var columna = document.createElement('th');
					var columna2 = document.createElement('th');
					var columna3 = document.createElement('th');
					var columna4 = document.createElement('th');
					var columna5 = document.createElement('th');
					var columna6 = document.createElement('th');
					var columna7 = document.createElement('th');
					var columna8 = document.createElement('th');
					var columna9 = document.createElement('th');

					columna.appendChild(document.createTextNode(contador2));
					columna2.appendChild(document.createTextNode(resp[cont].code));
					columna3.appendChild(document.createTextNode(resp[cont].name));
					columna4.appendChild(document.createTextNode(resp[cont].lastName));
					columna5.appendChild(document.createTextNode(row.age));
					columna6.appendChild(document.createTextNode(resp[cont].gender));
					columna7.appendChild(document.createTextNode(resp[cont].city));
					columna8.appendChild(document.createTextNode(resp[cont].email[1]));
					columna9.appendChild(document.createTextNode(resp[cont].phones));

					fila.appendChild(columna);
					fila.appendChild(columna2);
					fila.appendChild(columna3);
					fila.appendChild(columna4);
					fila.appendChild(columna5);
					fila.appendChild(columna6);
					fila.appendChild(columna7);
					fila.appendChild(columna8);
					fila.appendChild(columna9);

					contenido.appendChild(fila);
					cont++;
				}

			}
		}
		xhr.send(null);
	}else{
		alert("Hay campos vacios");
	}
}


function filter_gender(){
	if(document.getElementById("genders").value!="none"){
		var contenido = document.getElementById("bodyTable");
		var genero = document.getElementById("genders").value;
		var xhr = new XMLHttpRequest();
		xhr.open("GET",  "control.php?opt=filter_gender&code=nn&gender="+genero,  true );
		xhr.onreadystatechange = function(){
			if (xhr.readyState == 4 && xhr.status == 200){
				console.log(xhr.responseText);
				const resp = JSON.parse(xhr.responseText);
				cont = 0;
				for ( row of resp ){
					contador3++;
					var fila = document.createElement('tr');
					var columna = document.createElement('th');
					var columna2 = document.createElement('th');
					var columna3 = document.createElement('th');
					var columna4 = document.createElement('th');
					var columna5 = document.createElement('th');
					var columna6 = document.createElement('th');
					var columna7 = document.createElement('th');
					var columna8 = document.createElement('th');
					var columna9 = document.createElement('th');

					columna.appendChild(document.createTextNode(contador3));
					columna2.appendChild(document.createTextNode(resp[cont].code));
					columna3.appendChild(document.createTextNode(resp[cont].name));
					columna4.appendChild(document.createTextNode(resp[cont].lastName));
					columna5.appendChild(document.createTextNode(row.age));
					columna6.appendChild(document.createTextNode(resp[cont].gender));
					columna7.appendChild(document.createTextNode(resp[cont].city));
					columna8.appendChild(document.createTextNode(resp[cont].email[1]));
					columna9.appendChild(document.createTextNode(resp[cont].phones));

					fila.appendChild(columna);
					fila.appendChild(columna2);
					fila.appendChild(columna3);
					fila.appendChild(columna4);
					fila.appendChild(columna5);
					fila.appendChild(columna6);
					fila.appendChild(columna7);
					fila.appendChild(columna8);
					fila.appendChild(columna9);

					contenido.appendChild(fila);
					cont++;
				}

			}
		}
		xhr.send(null);
	}else{
		alert("Seleccione una opcion");
	}
}