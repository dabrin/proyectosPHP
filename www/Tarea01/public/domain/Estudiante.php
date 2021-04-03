<?php
    class Estudiante {
        private $id;
        private $sexo;
        private $recinto;
        private $promedio;
        private $ca;
        private $ec;
        private $ea;
        private $or;
        private $ca_ce;
        private $ea_or;
        private $estilo;
        function Estudiante() {
            $this->id = 0;
            $this->sexo = '';
            $this->recinto = '';
            $this->promedio = 0.0;
            $this->ca = 0;
            $this->ec = 0;
            $this->ea = 0;
            $this->or = 0;
            $this->ca_ce = 0;
            $this->ea_or = 0;
        }//Fin del constructor.
     function setId($id) {
            $this->id = $id;
        }

      
        function setCA($ca) {
            $this->ca = $ca;
        }

        function setEC($ec) {
            $this->ec = $ec;
        }

        function setEA($ea) {
            $this->ea = $ea;
        }

        function setOR($or) {
            $this->or = $or;
        }

        function setCA_CE($ca_ce) {
            $this->ca_ce = $ca_ce;
        }

        function setEA_OR($ea_or) {
            $this->ea_or = $ea_or;
        }
         
        function setSexo($sexo){
            $this->sexo = $sexo;
        }

        function setRecinto($recinto) {
            $this->recinto = $recinto;
        }

        function setPromedio($promedio){
            $this->promedio = $promedio;
        }
        function setEstilo($estilo) {
            $this->estilo = $estilo;
        }
        function getJsonData() {
            $var = get_object_vars($this);
            foreach ($var as &$value) {
                if (is_object($value) && method_exists($value, 'getJsonData')) {
                    $value = $value->getJsonData();
                }
            }
            return $var;
        }//Fin del método same ToString en Java y c++ encontrado de internet

    }//Fin de la clase Estudiante.
?>
