<?php

class Student{
	//Atributos
	private $code;
	private $names;
	private $lastnames;
	private $birthdate;
	private $gender;
	private $hometown;
	private $institutionalMail;
	private $email;
	private $phones;
	private $edad;

	//Constructor
	function __construct($code, $lastnames,$names, $birthdate, $gender, $hometown, $email, $phones,$edad){
		$this->code = $code;
		$this->names = $names;
		$this->lastnames = $lastnames;
		$this->birthdate = $birthdate;
		$this->gender = $gender;
		$this->hometown = $hometown;
		$this->email = $email;
		$this->phones = $phones;
		$this->edad = $edad;
	}


	//GETTERS AND SETTERS

	public function getEdad(){
		return $this->edad;
	}

	public function getCode(){
		return $this->code;
	}

	public function getNames(){
		return $this->names;
	}

	public function getLastNames(){
		return $this->lastnames;
	}

	public function getBirthdate(){
		return $this->birthdate;
	}

	public function getGender(){
		return $this->gender;
	}

	public function getHometown(){
		return $this->hometown;
	}

	public function getEmail(){
		return $this->email;
	}

	public function getPhone(){
		return $this->phones;
	}

	public function getContacts(){
		return $this->contacts;
	}

	public function setCode($newCode){
		$this->code = $newCode;
	}

	public function setNames($newNames){
		$this->names = $newNames;
	}

	public function setLastnames($newLastnames){
		$this->lastnames = $newLastnames;
	}

	public function setBirthdate($newBirthdate){
		$this->birthdate = $newBirthdate;
	}

	public function setGender($newGender){
		$this->gender = $newGender;
	}

	public function setHometown($newHometown){
		$this->hometown = $newHometown;
	}

	public function setEmail($newMail){
		$this->email = $newMail;
	}

	public function setPhone($newPhone){
		$this->phones = $newPhone;
	}

	public function setEdad($newEdad){
		$this->edad = $newEdad;
	}
}