<?php
class ItemModel {

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

    public function insertarMadera(){
        $nombre = $_POST["nombre"];
        $costo = $_POST["costo"];
        $consulta = $this->db->prepare("call sp_insertar_madera(" . "'" . $nombre . "','" . $costo . "')");
        $consulta->execute();
        $consulta->closeCursor();
        
    }

    public function insertarAcabado(){
        $nombre = $_POST["tipoAcabado"];
        $costo = $_POST["costoCm"];
        $consulta = $this->db->prepare("call sp_insertar_acabado(" . "'" . $nombre . "','" . $costo . "')");
        $consulta->execute();
        $consulta->closeCursor();

    }

    public function verMaderas(){

        $consulta = $this->db->prepare('call sp_cargar_madera()');
        $consulta->execute();
        $resulado = $consulta->fetchAll();
        $consulta->CloseCursor();
        return $resulado;
    }
    public function verAcabados(){

        $consulta = $this->db->prepare('call sp_cargar_acabado()');
        $consulta->execute();
        $resulado = $consulta->fetchAll();
        $consulta->CloseCursor();
        return $resulado;
    }

    public function obtenerPrecio(){
        $nombre=$_POST["nombreMadera"];
        $nombre2=$_POST["nombreAcabado"];
        $consulta=$this->db->prepare("call sp_obtener_PrecioMadera_Id('".$nombre."','".$nombre2."')");
        $consulta->execute();
        $arreglo= $consulta->fetch(PDO::FETCH_ASSOC);
        $consulta->CloseCursor();
        return $arreglo;

    }

    public function insertarMueble(){
        $codigo = $_POST["id"];
        $nombre = $_POST["nombre"];
        $madera = $_POST["maderas"];
        $acabado = $_POST["acabado1"];
        $costo = $_POST["costo"];
        $consulta = $this->db->prepare("call sp_ingresar_mueble(" . "'" . $codigo . "','" . $nombre . "','" . $madera . "','" . $acabado . "','" . $costo . "')");
        $consulta->execute();
        $consulta->closeCursor();

    }

    public function eliminarMueble(){
        $codigo = $_POST["nombreMadera"];
        $consulta = $this->db->prepare("call sp_eliminar_mueble('" . $codigo . "')");
        $consulta->execute();
        $consulta->closeCursor();
    }


    public function registrarCliente() {
        $nombre = $_POST["nombre"];
        $cedula = $_POST["cedula"];
        $direccion = $_POST["direccion"];
        $consulta = $this->db->prepare("call sp_insert_cliente(" . "'" . $nombre . "','" . $cedula . "','" . $direccion . "')");
        $consulta->execute();
        $consulta->closeCursor();
    }

}
