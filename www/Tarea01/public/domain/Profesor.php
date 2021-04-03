<?php

    class Profesor {
        private $id;
        private $a;
        private $b;
        private $c;
        private $d;
        private $e;
        private $f;
        private $g;
        private $h;
        private $clase;
        function Profesor() {
            $this->id = 0;
            $this->a = '';
            $this->b = '';
            $this->c = '';
            $this->d = '';
            $this->e = '';
            $this->f = '';
            $this->g = '';
            $this->h = '';
            $this->clase = '';
        }
        function setId($id) {
            $this->id = $id;
        }
        function setA($a) {
            $this->a = $a;
        }
        function setB($b) {
            $this->b = $b;
        }
        function setC($c) {
            $this->c = $c;
        }
        function setD($d) {
            $this->d = $d;
        }
        function setE($e) {
            $this->e = $e;
        }
        function setF($f) {
            $this->f = $f;
        }
        function setG($g) {
            $this->g = $g;
        }
        function setH($h) {
            $this->h = $h;
        }
        function setClase($clase) {
            $this->clase = $clase;
        }
        function getJsonData() {
            $var = get_object_vars($this);
            foreach ($var as &$value) {
                if (is_object($value) && method_exists($value, 'getJsonData')) {
                    $value = $value->getJsonData();
                }
            }
            return $var;
        }//Fin del método getJsonData.//Funcion de internet

    }//Fin de la clase Profesor.

?>
