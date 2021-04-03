<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of ItemModel
 *
 * @author Pablo Rojas
 */
class ItemModel {

    //put your code here
    protected $db;

    public function __construct() {
        require 'libs/SPDO.php';
        $this->db = SPDO::singleton();
    }

//constructor

    public function listar() {
        $consulta = $this->db->prepare('call sp_listar()');
        $consulta->execute();
        $resulado = $consulta->fetchAll();
        $consulta->CloseCursor();
        return $resulado;
    }//listar

    //método para registar en la bd
    public function registrar() {
        $codigo = $_POST["codigo"];
        $nombre = $_POST["name"];
        $consulta = $this->db->prepare("call sp_ingresar_articulos(" . "'" . $codigo . "','" . $nombre . "')");
        $consulta->execute();
        $consulta->closeCursor();
         
    }
    
    public function actualizar() {
        $codigo = $_POST["codigo"];
        $nombre = $_POST["name"];
        $consulta = $this->db->prepare("call sp_actualizar(" . "'" . $codigo . "','" . $nombre . "')");
        $consulta->execute();
        $consulta->closeCursor();
    }
    
        public function borrar() {
        $codigo = $_POST["codigo"];
        $consulta = $this->db->prepare("call sp_eliminar(" . "'" . $codigo . "')");
        $consulta->execute();
        $consulta->closeCursor();
    }

    public function buscar(){

        $codigo=$_POST['codigo'];
        $consulta=$this->db->prepare("call sp_buscar("."'".$codigo."'".")");
        $consulta->execute();
        $arreglo= $consulta->fetch(PDO::FETCH_ASSOC);
        echo $arreglo;
        return $arreglo;
    }

}
