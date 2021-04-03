<?php
  if(isset($_POST["button"])){
    $number1=$_POST["num1"];
    $number2=$_POST["num2"];
    $operacion=$_POST["operacion"];

    switch ($operacion) {
      case "Suma":
        echo "Estoy sumando, el resultado es: ".($number1+$number2);
        break;

      case "Resta":
        echo "Estoy Restando, el resultado es: ".($number1-$number2);
        break;

      case "Multiplicación":
      echo "Estoy multiplicando, el resultado es: ".($number1*$number2);
        break;
      case "División":
        echo "Estoy dividiendo, el resultado es: ".($number1/$number2);
        break;

      case "Módulo":
        echo "Estoy modulando, el resultado es: ".($number1%$number2);
        break;
      default:
        
        break;
    }

  }  

?>