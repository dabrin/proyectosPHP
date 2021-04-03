<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Personas
 *
 * @author Pablo Rojas
 */
class Personas {
    //put your code here
    

    private $cedula;
    private $nombre;
    private $apellido;
    private $edad;
  

    function __construct() {
        $this->cedula = '';
        $this->nombre = '';
        $this->apellido = '';
        $this->edad = 0;
        $this->correo = '';
    }
    
//    function getJsonData() {
//        $var = get_object_vars($this);
//        foreach ($var as &$value) {
//            if (is_object($value) && method_exists($value, 'getJsonData')) {
//                $value = $value->getJsonData();
//            }
//        }
//        return $var;
//    }

    function getCedula() {
        return $this->cedula;
    }

    function getNombre() {
        return $this->nombre;
    }

    function getApellido() {
        return $this->apellido;
    }

    function getEdad() {
        return $this->edad;
    }

    function getCorreo() {
        return $this->correo;
    }

    function setCedula($cedula) {
        $this->cedula = $cedula;
    }

    function setNombre($nombre) {
        $this->nombre = $nombre;
    }

    function setApellido($apellido) {
        $this->apellido = $apellido;
    }

    function setEdad($edad) {
        $this->edad = $edad;
    }

    function setCorreo($correo) {
        $this->correo = $correo;
    }

}


