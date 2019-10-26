<?php
include('Student.php');

class ManagementStudent{
	private $students = array();

	function __construct(){
		$this->loadStudents();
	}

	public function loadStudents(){
		$url = "resources/students.json";
		$file = fopen($url, "r" );
		$words = fread($file, filesize($url) );
		$vecWords = json_decode($words);


		foreach ($vecWords as $student) {
			array_push($this->students, new Student($student->code, $student->lastName,$student->name, $student->dateBirthday,
			 $student->gender, $student->city, $student->email, $student->phones, $student->age) );
		}
	}

	public function findStudent($code){
		foreach ($this->students as $student) {
			if( strcmp($student->getCode(), $code) == 0 ){
				return $student;
			}
		}
		return NULL;
	}

	public function dumpToFile(){
		$retornar = TRUE;
		$url = "resources/students.json";
		$file = fopen( $url, "w" );
		$auxiliar = [];

		if (isset($this->students)){
			foreach ($this->students as $student) {
			$auxiliar[] = ["code"=>$student->getCode(), "lastName"=>$student->getLastNames(), "name"=>$student->getNames(),
		"dateBirthday"=>$student->getBirthdate(), "gender"=>$student->getGender(),
		"city"=>$student->getHometown(),"email"=>$student->getEmail(),"phones"=>$student->getPhone(),"age"=>$student->getEdad()];
			}
			$arr_to_json = json_encode($auxiliar);
			fwrite($file, $arr_to_json);
			
		}else{
			$retornar = FALSE;
		}	
		fclose($file);	
		return $retornar;
	}

	public function addStudent($code, $names, $lastnames, $birthdate, $gender, $hometown, $institutionalMail, $personalMail, $phones){
		if($this->findStudent($code)==NULL){
			$emails_repo = $institutionalMail . "/" . $personalMail;
			$emails = explode("/", $emails_repo);
			$date = explode("/", $birthdate);
			$edad = 2019 - intval($date[2]); 
			array_push($this->students,new Student($code,$lastnames,$names,$date,$gender,$hometown,$emails,$phones,$edad));
			$this->dumpToFile();
			return true;
		}
		return false;
	}

	public function updateStudent($code, $names, $lastnames, $birthdate, $gender, $hometown, $institutionalMail, $personalMail, $phones){
		if($this->findStudent($code)!=NULL){
			$obj = $this->findStudent($code);
			$index = array_search($obj, $this->students, true);
			$date = explode("/", $birthdate);
			$this->students[$index]->setNames($names); 
			$this->students[$index]->setLastnames($lastnames); 
			$this->students[$index]->setBirthdate($date); 
			$this->students[$index]->setGender($gender); 
			$this->students[$index]->setHometown($hometown);
			$emails_repo = $institutionalMail . "/" . $personalMail;
			$emails = explode("/", $emails_repo);
			$this->students[$index]->setEmail($emails); 
			$this->students[$index]->setPhone($phones); 
			
			$edad = 2019 - intval($date[2]); 
			$this->students[$index]->setEdad($edad);
			$this->dumpToFile();
			return true;
			
		}
		return false;
	}

	public function deleteStudent($code){
		if($this->findStudent($code) != NULL){
			$obj = $this->findStudent($code);
			$index = array_search($obj, $this->students, true);
			unset($this->students[$index]);
		}
		return $this->dumpToFile();
	}

	public function filterAge($numero_mayor, $numero_menor){
		$auxiliar = [];
		foreach ($this->students as $student) {
			if(intval($student->getEdad()) >= $numero_menor && intval($student->getEdad()) <= $numero_mayor){
				$auxiliar[] = ["code"=>$student->getCode(), "lastName"=>$student->getLastNames(), "name"=>$student->getNames(),
		"dateBirthday"=>$student->getBirthdate(), "gender"=>$student->getGender(),
		"city"=>$student->getHometown(),"email"=>$student->getEmail(),"phones"=>$student->getPhone(),"age"=>$student->getEdad()];
			}
		}
		return $auxiliar;
	}

	public function filter_city($city){
		$auxiliar = [];
		foreach ($this->students as $student) {
			if( strcmp( $student->getHometown() , $city ) == 0){
				$auxiliar[] = ["code"=>$student->getCode(), "lastName"=>$student->getLastNames(), "name"=>$student->getNames(),
		"dateBirthday"=>$student->getBirthdate(), "gender"=>$student->getGender(),
		"city"=>$student->getHometown(),"email"=>$student->getEmail(),"phones"=>$student->getPhone(),"age"=>$student->getEdad()];
			}
		}
		return $auxiliar;
	}

	public function filter_gender($gender){
		$auxiliar = [];
		foreach ($this->students as $student) {
			if( strcmp( $student->getGender() , $gender ) == 0){
				$auxiliar[] = ["code"=>$student->getCode(), "lastName"=>$student->getLastNames(), "name"=>$student->getNames(),
		"dateBirthday"=>$student->getBirthdate(), "gender"=>$student->getGender(),
		"city"=>$student->getHometown(),"email"=>$student->getEmail(),"phones"=>$student->getPhone(),"age"=>$student->getEdad()];
			}
		}
		return $auxiliar;
	}

	public function getStudents(){
		return $this->students;
	}
}