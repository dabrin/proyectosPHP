<?php
    class EstiloAprendizaje {

        // ****************************** ATRIBUTOS ******************************

        private $id;
        private $recinto;
        private $ca;
        private $ec;
        private $ea;
        private $or;
        private $ca_ce;
        private $ea_or;
        private $estilo;

        // ***************************** CONSTRUCTOR *****************************

        function EstiloAprendizaje() {
            $this->id = 0;
            $this->recinto = '';
            $this->ca = 0;
            $this->ec = 0;
            $this->ea = 0;
            $this->or = 0;
            $this->ca_ce = 0;
            $this->ea_or = 0;
        }//Fin del constructor.

        //Setters(No son necesarios los get en este sistema)
        function setId($id) {
            $this->id = $id;
        }

        function setRecinto($recinto) {
            $this->recinto = $recinto;
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

        function setEstilo($estilo) {
            $this->estilo = $estilo;
        }

        //Like ToString de lenguajes como Java,c++
        function getJsonData() {
            $var = get_object_vars($this);
            foreach ($var as &$value) {
                if (is_object($value) && method_exists($value, 'getJsonData')) {
                    $value = $value->getJsonData();   }
            }
            return $var;
        }//Fin método, obtenido de la red
    }//Fin de la clase EstiloAprendizaje.
?>