<?php
	class Car{

		var $quant_of_wheels;
		var $color_of_car;
		var $quant_of_doors;
		var $type_of_motor;
		//Métodos es lo mismo que sets-gets, también existe un Constructor.
		function Car(){
			$this->quant_of_wheels=4;
			$this->color="";
			$this->type_of_motor=1500;		
			$this->quant_of_doors=2;
		}

		function turnOn(){
			echo "El carro está prendiendo <br>";
		}
		function turn(){
			echo "El carro está girando <br>";
		}
		function brake(){
			echo "El carro está frenando";
		}
		function setColor($colorCar,$name_car){
				$this->color=$colorCar;
				echo "El color del ".$name_car ." es: ".$this->color;
			} 

		}
		//-------------------------------------------------
		//---------------------------------------------------

	class Camion extends Car{
//Métodos es lo mismo que sets-gets
		function Camion(){
			$this->quant_of_wheels=8;
			$this->color="";
			$this->type_of_motor=2600;
			$this->quant_of_doors=2;
		}
		function setColor($color1,$nose){
			$this->color=$color1;
			echo "El color es: ".$this->color;
		}
	}

?>