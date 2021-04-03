<?php

  function calculate($operacion,$number1,$number2){
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
      case "Incremento":
      //$number1++;
        echo "Estoy incrementando, el resultado es: ".(++$number1);
        break;

      case "Decremento":
        echo "Estoy decrementando, el resultado es: ".(--$number1);
        break;
      default:
        
        break;
    }

  }

    
    

?>