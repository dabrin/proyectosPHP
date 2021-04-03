
<?php
class CarritoModel {
       
        protected  $db;

        public function __construct(){
            require 'libs/SPDO.php';
            $this->db=SPDO::singleton();
        }//constructor


  public function load_table(){
     session_start();
        $consulta=$this->db->prepare("call sp_ver_carrito('".$_SESSION['id']."')");
        $consulta->execute();
        $resultado=$consulta->fetchAll();
        $consulta->CloseCursor();
        return $resultado;
     }

     public function delete(){
        $var=$_POST['id_prod'];
        $consulta=$this->db->prepare("call sp_delete_prod_carrito('".$var."')");
        $consulta->execute();
        $resultado=$consulta->fetchAll();
        $consulta->CloseCursor();

     }
    }
     ?>