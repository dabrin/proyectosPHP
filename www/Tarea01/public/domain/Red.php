<?php
    class Red {
        private $id;
        private $confiabilidad;
        private $numeroEnlaces;
        private $capacidad;
        private $costo;
        private $clase;
        function Red() {
            $this->id = 0;
            $this->confiabilidad = 0;
            $this->numeroEnlaces = 0;
            $this->capacidad = '';
            $this->costo = '';
            $this->clase = '';
        }
        //Metodos accesores
        function setId($id) {
            $this->id = $id;
        }
         function setCapacidad($capacidad){
            $this->capacidad = $capacidad;
        }

        function setCosto($costo) {
            $this->costo = $costo;
        }

        function setClase($clase) {
            $this->clase = $clase;
        }

        function setConfiabilidad($confiabilidad){
            $this->confiabilidad = $confiabilidad;
        }

        function setNumeroEnlaces($numeroEnlaces) {
            $this->numeroEnlaces = $numeroEnlaces;
        }

       
        function getJsonData() {
            $var = get_object_vars($this);
            foreach ($var as &$value) {
                if (is_object($value) && method_exists($value, 'getJsonData')) {
                    $value = $value->getJsonData();
                }
            }
            return $var;
        }//Método de internet

    }//Fin de la clase Red

?>