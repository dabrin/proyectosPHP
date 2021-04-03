<?php
class PeliculaModel {

    //put your code here
    protected $db;

    public function __construct() {
        require 'libs/SPDO.php';
        $this->db = SPDO::singleton();
    }


    public function insertGenero(){

        $nombre = $_POST["name"];
        $consulta = $this->db->prepare("call sp_ingresar_genero(" . "'" . $nombre . "')");
        $consulta->execute();
        $consulta->closeCursor();
         
    
    }
}
