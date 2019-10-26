var contador = 0;
function list(){
	var contenido = document.getElementById("bodyTable");
	var xhr = new XMLHttpRequest();
	xhr.open("GET",  "control.php?opt=list&code=nn",  true );
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
				columna5.appendChild(document.createTextNode(resp[cont].dateBirthday[0]+"/"+resp[cont].dateBirthday[1]+"/"+resp[cont].dateBirthday[2]));
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
}

function add(){
	location.href='CRUD/create.html';
}

function update(){
	location.href='CRUD/update.html';
}

function remove(){
	location.href='CRUD/delete.html';
}

function build_delete(){
	var xhr = new XMLHttpRequest();
	var dptos = document.getElementById('codes');
	xhr.open("GET",  "../control.php?opt=list&code=nn",  true );
	
	xhr.onreadystatechange = function(){
		if (xhr.readyState == 4 && xhr.status == 200){
			const resp = JSON.parse(xhr.responseText);
			cont = 0;
			for ( dpto of resp ){
                var option = document.createElement('option');
                option.setAttribute('value',resp[cont].code);
                option.appendChild( document.createTextNode(resp[cont].code));
                dptos.appendChild( option );
                cont++;
            }
		}
	}
	xhr.send(null);
}

function eliminar(){
	var xhr = new XMLHttpRequest();
	var code = document.getElementById('codes').value;
	xhr.open("GET",  "../control.php?opt=remove&code="+code,  true );

	xhr.onreadystatechange = function(){
		if (xhr.readyState == 4 && xhr.status == 200){
			console.log(xhr.responseText);
			const resp = JSON.parse(xhr.responseText);
			alert(resp);
			location.href='../index.html';
		}
	}
	xhr.send(null);
}

function back(){
	location.href='../index.html';
}

function soloLetras(e){
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toLowerCase();
    letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
    especiales = "8-37-39-46";

    tecla_especial = false
    for(var i in especiales){
    	if(key == especiales[i]){
        	tecla_especial = true;
        	break;
        }
    }

    if(letras.indexOf(tecla)==-1 && !tecla_especial){
	    return false;
    }
}

function agregar(){
	//DATOS
	var codigo = document.getElementById("code").value;
	var apellidos = document.getElementById("lastName").value;
	var nombre = document.getElementById("name").value;
	var correoInstitucional = document.getElementById("institutional_email").value;
	var correoPersonal = document.getElementById("personal_email").value;
	var fechaNacimiento = document.getElementById("birthdate").value;
	var genero1 = document.getElementById("male");
	var genero2 = document.getElementById("female");
	var telefono = document.getElementById("telefono").value;
	var ciudad = document.getElementById("city").value;
	//EXPRESIONES REGULARES
	var code = new RegExp('^[0-9]{9}$');
	var email = new RegExp('^[a-zA-Z0-9.!#$%&*+=?^_{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$');
	var date = new RegExp('^[0-2][0-9]+\/+[0-1][0-9]+\/+[0-2][0-9][0-9][0-9]$');
	var phone = new RegExp('^[0-9]{10}$');

	var validate = true;

	if(!code.test(codigo)){
		alert("codigo inválido");
		validate = false;
	}
	if(!email.test(correoInstitucional)){
		alert("correo institucional inválido");
		validate = false;
	}
	if(!email.test(correoPersonal)){
		alert("correo personal inválido");
		validate = false;
	}
	if(!date.exec(fechaNacimiento)){
		alert("fecha invalida");
		validate = false;
	}
	if(!phone.test(telefono)){
		alert("teléfono inválido");
		validate = false;
	}
	if(apellidos==''){
		alert("campo apellidos vacío");
		validate = false;
	}
	if(nombre==''){
		alert("campo nombre vacío");
		validate = false;
	}
	if(ciudad==''){
		alert("Campo ciudad vacio");
		validate = false;
	}

	genero = (genero1.checked) ? genero = 'M' : genero = 'F';

	if(validate){
		var xhr = new XMLHttpRequest();
		xhr.open("GET",  "../control.php?opt=add&code="+codigo+"&lastname="+apellidos+"&name="+nombre
		+"&email1="+correoInstitucional+"&email2="+correoPersonal+"&fecha="+fechaNacimiento+"&gender="+genero+
		"&teleph="+telefono+"&city="+ciudad ,  true );
		xhr.onreadystatechange = function(){
			if (xhr.readyState == 4 && xhr.status == 200){
				const resp = xhr.responseText;
				alert(resp);
				location.href='../index.html';
			}
		}
		xhr.send(null);
	}
}

function build_update(){
	var xhr = new XMLHttpRequest();
	var dptos = document.getElementById('codes');
	xhr.open("GET",  "../control.php?opt=list&code=nn",  true );

	xhr.onreadystatechange = function(){
		if (xhr.readyState == 4 && xhr.status == 200){
			const resp = JSON.parse(xhr.responseText);
			cont = 0;
			for ( dpto of resp ){
                var option = document.createElement('option');
                option.setAttribute('value',resp[cont].code);
                option.appendChild( document.createTextNode(resp[cont].code));
                dptos.appendChild( option );
                cont++;
            }
		}
	}
	xhr.send(null);
}


function build_fields(){
	var xhr = new XMLHttpRequest();
	var code = document.getElementById('codes').value;
	xhr.open("GET",  "../control.php?opt=find&code="+code,  true );

	xhr.onreadystatechange = function(){
		if (xhr.readyState == 4 && xhr.status == 200){
			const resp = JSON.parse(xhr.responseText);
			for ( dpto of resp ){
				document.getElementById("lastName").value = dpto.lastName;
				document.getElementById("name").value = dpto.name;
				document.getElementById("city").value = dpto.city;
				document.getElementById("institutional_email").value = dpto.email[0];
				document.getElementById("personal_email").value = dpto.email[1];
				document.getElementById("telefono").value = dpto.phones;
				document.getElementById("birthdate").value = dpto.dateBirthday[0]+"/"+dpto.dateBirthday[1]+"/"+dpto.dateBirthday[2];
			}
			
		}
	}
	xhr.send(null);
}

function update_fields(){
	var codigo = document.getElementById("codes").value;
	var apellidos = document.getElementById("lastName").value;
	var nombre = document.getElementById("name").value;
	var correoInstitucional = document.getElementById("institutional_email").value;
	var correoPersonal = document.getElementById("personal_email").value;
	var fechaNacimiento = document.getElementById("birthdate").value;
	var genero1 = document.getElementById("male");
	var genero2 = document.getElementById("female");
	var telefono = document.getElementById("telefono").value;
	var ciudad = document.getElementById("city").value;
	//EXPRESIONES REGULARES
	var code = new RegExp('^[0-9]{9}$');
	var email = new RegExp('^[a-zA-Z0-9.!#$%&*+=?^_{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$');
	var date = new RegExp('^[0-2][0-9]+\/+[0-1][0-9]+\/+[0-2][0-9][0-9][0-9]$');
	var phone = new RegExp('^[0-9]{10}$');

	var validate = true;

	if(!code.test(codigo)){
		alert("codigo inválido");
		validate = false;
	}
	if(!email.test(correoInstitucional)){
		alert("correo institucional inválido");
		validate = false;
	}
	if(!email.test(correoPersonal)){
		alert("correo personal inválido");
		validate = false;
	}
	if(!date.exec(fechaNacimiento)){
		alert("fecha invalida");
		validate = false;
	}
	if(!phone.test(telefono)){
		alert("teléfono inválido");
		validate = false;
	}
	if(apellidos==''){
		alert("campo apellidos vacío");
		validate = false;
	}
	if(nombre==''){
		alert("campo nombre vacío");
		validate = false;
	}
	if(ciudad==''){
		alert("Campo ciudad vacio");
		validate = false;
	}

	genero = (genero1.checked) ? genero = 'M' : genero = 'F';

	if(validate){
		var xhr = new XMLHttpRequest();
		alert(fechaNacimiento);
		xhr.open("GET",  "../control.php?opt=update&code="+codigo+"&lastname="+apellidos+"&name="+nombre
		+"&email1="+correoInstitucional+"&email2="+correoPersonal+"&fecha="+fechaNacimiento+"&gender="+genero+
		"&teleph="+telefono+"&city="+ciudad ,  true );
		xhr.onreadystatechange = function(){
			if (xhr.readyState == 4 && xhr.status == 200){
				const resp = xhr.responseText;
				alert("Se actualizo el registro");
				location.href='../index.html';
			}
		}
		xhr.send(null);
	}
}