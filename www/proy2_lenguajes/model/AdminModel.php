<?php 

class AdminModel {



    protected  $db;

        public function __construct(){
            require 'libs/SPDO.php';
            $this->db=SPDO::singleton();
        }//


    public function admin_log(){
        $user=$_POST['usuario'];
        $pass=$_POST['password'];
        $response;
        $consulta=$this->db->prepare("call sp_admin_exists('".$user."','".$pass."')");
        $consulta->execute();
        $resultado=$consulta->fetchAll();
        $consulta->CloseCursor();
        if($consulta->rowcount()){
            return true;
                //$response=$resultado[0];
        }else{
        //$response=0;
        return false;
        }
    }
    public function ver_administradores(){
        $consulta=$this->db->prepare("call sp_obtener_admin()");
        $consulta->execute();
        $resultado=$consulta->fetchAll();
        $consulta->CloseCursor();
        return $resultado;
    }
     public function verADM(){
            $id_user=$_POST["id_user"];
            $consulta=$this->db->prepare("call sp_obtener_un_admin("."'".$id_user."')");
            $consulta->execute();
            $arreglo= $consulta->fetch(PDO::FETCH_ASSOC);
            return $arreglo;
        }


        public function agregar_Gestión_Usuario(){
            $id_permiso=1;
            $id_user=$_POST['id_user'];
            $consulta=$this->db->prepare("call sp_ingresar_permiso_rol("."'".$id_permiso."','".$id_user."')");
            $consulta->execute();
            $resultado=$consulta->fetchAll();
            $consulta->CloseCursor();
        }

        public function agregar_Gestión_Productos(){
             $id_permiso=2;
            $id_user=$_POST['id_user'];
            $consulta=$this->db->prepare("call sp_ingresar_permiso_rol("."'".$id_permiso."','".$id_user."')");
            $consulta->execute();
            $resultado=$consulta->fetchAll();
            $consulta->CloseCursor();
        }
        public function agregar_Gestión_Informes(){
             $id_permiso=3;
            $id_user=$_POST['id_user'];
            $consulta=$this->db->prepare("call sp_ingresar_permiso_rol("."'".$id_permiso."','".$id_user."')");
            $consulta->execute();
            $resultado=$consulta->fetchAll();
            $consulta->CloseCursor();
        }
        public function agregar_Gestión_Combos(){
             $id_permiso=4;
            $id_user=$_POST['id_user'];
            $consulta=$this->db->prepare("call sp_ingresar_permiso_rol("."'".$id_permiso."','".$id_user."')");
            $consulta->execute();
            $resultado=$consulta->fetchAll();
            $consulta->CloseCursor();
        }
        public function agregar_Gestión_Lista_deseos(){
            $id_permiso=5;
            $id_user=$_POST['id_user'];
            $consulta=$this->db->prepare("call sp_ingresar_permiso_rol("."'".$id_permiso."','".$id_user."')");
            $consulta->execute();
            $resultado=$consulta->fetchAll();
            $consulta->CloseCursor();
        }



}