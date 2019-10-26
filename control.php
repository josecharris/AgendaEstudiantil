<?php

include('ManagementStudent.php');
$opcion = $_REQUEST['opt'];
$code = $_REQUEST['code'];

$management = new ManagementStudent();
$students = $management->getStudents();

if(strcmp($opcion, 'list') == 0 ){
	$auxiliar = [];
	foreach ($students as $student) {
		$auxiliar[] = ["code"=>$student->getCode(), "lastName"=>$student->getLastNames(), "name"=>$student->getNames(),
		"dateBirthday"=>$student->getBirthdate(), "gender"=>$student->getGender(),
		"city"=>$student->getHometown(),"email"=>$student->getEmail(),"phones"=>$student->getPhone()];
	}
	echo json_encode($auxiliar);
}

if(strcmp($opcion, 'remove') == 0 ){
	if($management->deleteStudent($code)){
		echo json_encode("Se elimino correctamente");
	}else{
		echo json_encode("Error al eliminar");
	}
}

if(strcmp($opcion, 'add') == 0 ){
	$lastname = $_REQUEST['lastname'];
	$name = $_REQUEST['name'];
	$email1 = $_REQUEST['email1'];
	$email2 = $_REQUEST['email2'];
	$fecha = $_REQUEST['fecha'];
	$gender = $_REQUEST['gender'];
	$teleph = $_REQUEST['teleph'];
	$city = $_REQUEST['city'];

	if($management->addStudent($code, $lastname, $name, $fecha, $gender, $city, $email1, $email2, $teleph)){
		echo "Se agrego correctamente";
	}else{
		echo "Error al tratar de agregar";
	}
	
}

if(strcmp($opcion, 'find') == 0 ){
	$student = $management->findStudent($code);
	$auxiliar = [];
	$auxiliar[] = ["code"=>$student->getCode(), "lastName"=>$student->getLastNames(), "name"=>$student->getNames(),
		"dateBirthday"=>$student->getBirthdate(), "gender"=>$student->getGender(),
		"city"=>$student->getHometown(),"email"=>$student->getEmail(),"phones"=>$student->getPhone()];
	echo json_encode($auxiliar);
	
}

if(strcmp($opcion, 'update') == 0 ){
	$lastname = $_REQUEST['lastname'];
	$name = $_REQUEST['name'];
	$email1 = $_REQUEST['email1'];
	$email2 = $_REQUEST['email2'];
	$fecha = $_REQUEST['fecha'];
	$gender = $_REQUEST['gender'];
	$teleph = $_REQUEST['teleph'];
	$city = $_REQUEST['city'];

	if($management->updateStudent($code,$lastname, $name, $fecha, $gender, $city, $email1, $email2, $teleph)){
		echo json_encode("Se actualizo el registro");
	}else{
		echo json_encode("Error al actualizar");
	}
	
}

if(strcmp($opcion, 'filter_age') == 0 ){
	$numero_mayor = $_REQUEST['mayor'];
	$numero_menor = $_REQUEST['menor'];
	$rango = $management->filterAge($numero_mayor, $numero_menor);
	echo json_encode($rango);
}

if(strcmp($opcion, 'filter_city') == 0 ){
	$ciudad = $_REQUEST['city'];
	$ciudades = $management->filter_city($ciudad);
	echo json_encode($ciudades);
}

if(strcmp($opcion, 'filter_gender') == 0 ){
	$genero = $_REQUEST['gender'];
	$estudiantes_genero = $management->filter_gender($genero);
	echo json_encode($estudiantes_genero);
}