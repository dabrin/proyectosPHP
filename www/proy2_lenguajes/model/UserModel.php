
<?php
class UserModel {
       
        protected  $db;

        public function __construct(){
            require 'libs/SPDO.php';
            $this->db=SPDO::singleton();
        }//constructor

       
       public function ingresar_cliente(){

            //$codigo=$_POST["codigo"];
            $nombre=$_POST['usuario'];
            $contraseña=$_POST['password'];
            $email=$_POST['email'];
            $edad=$_POST['edad'];
            //$contraseña=$_POST[];

            $consulta=$this->db->prepare("call crear_cliente("."'".$nombre."','".$contraseña."','".$edad."','M','".$email."')");
            $consulta->execute();
            $consulta->closeCursor();
       }

       public function log_(){
          $user=$_POST['usuario'];
          $pass=$_POST['password'];
          $response;
          $consulta=$this->db->prepare("call sp_log_('".$user."','".$pass."')");
          $consulta->execute();
          $arreglo= $consulta->fetch(PDO::FETCH_ASSOC);
          $consulta->CloseCursor();
          if($consulta->rowcount()){
                 return $arreglo;
        }else{
          //$response=0;
          return false;
        }
     }
     
     public function load_table(){
          $consulta=$this->db->prepare("call sp_ver_historial_de_ventas()");
          $consulta->execute();
          $resultado=$consulta->fetchAll();
          $consulta->CloseCursor();
          return $resultado;
     }

     public  function ver_compras($id_user){
          $user=$id_user;
          $consulta=$this->db->prepare("call sp_ver_compras('".$user."')");
          $consulta->execute();
          $resultado=$consulta->fetchAll();
          $consulta->CloseCursor();
          return $resultado;
     }

      public function crear_usuario_create(){
          $user=$_POST['usuario'];
          $id_user=$_POST['cedula'];
          $correo=$_POST['email'];
          $pass=$_POST['password'];
           
           
          $consulta=$this->db->prepare("call sp_crear_cliente("."'".$user."','".$id_user."','".$correo."','".$pass."'".")");
          
          $consulta->execute();
          $resultado=$consulta->fetchAll();
          $consulta->CloseCursor();

         
      }

      public function obtener_id_rol($id_user){
          $consulta=$this->db->prepare("call sp_obtener_id_rol(".$id_user.")");
          $consulta->execute();
          $arreglo= $consulta->fetch(PDO::FETCH_ASSOC);
          //echo $arreglo['ID_rol'];
          $consulta->CloseCursor();
          return $arreglo['ID_rol'];
      }

      
        public function obtener_Gestion_Usuario($id_rol){
            
            $user=$id_rol;
            $response=1;
            $consulta=$this->db->prepare("call sp_obtener_Gestion_U('".$user."','".$response."')");
            $consulta->execute();
            $resultado=$consulta->fetchAll();
            $consulta->CloseCursor();
            if($consulta->rowcount()){
                return 1;
                
            }else{
        //$response=0;
                return 0;
            }
        }

        public function obtener_Gestion_Producto($id_rol){
            $user=$id_rol;
            $response=2;
            $consulta=$this->db->prepare("call sp_obtener_Gestion_U('".$user."','".$response."')");
            $consulta->execute();
            $resultado=$consulta->fetchAll();
            $consulta->CloseCursor();
            if($consulta->rowcount()){
                return 1;
                
            }else{
        //$response=0;
                return 0;
            }
            
        }

        public function obtener_Gestion_Informes($id_rol){
            $user=$id_rol;
            $response=3;
            $consulta=$this->db->prepare("call sp_obtener_Gestion_U('".$user."','".$response."')");
            $consulta->execute();
            $resultado=$consulta->fetchAll();
            $consulta->CloseCursor();
            if($consulta->rowcount()){
                return 1;
                
            }else{
        //$response=0;
                return 0;
            }
            
        }

        public function obtener_Gestion_Combos($id_rol){
            $user=$id_rol;
            $response=4;
            $consulta=$this->db->prepare("call sp_obtener_Gestion_U('".$user."','".$response."')");
            $consulta->execute();
            $resultado=$consulta->fetchAll();
            $consulta->CloseCursor();
            if($consulta->rowcount()){
                return 1;
                
            }else{
        //$response=0;
                return 0;
            }    
          }

        public function obtener_Gestion_Lista($id_rol){
            $user=$id_rol;
            $response=5;
            $consulta=$this->db->prepare("call sp_obtener_Gestion_U('".$user."','".$response."')");
            $consulta->execute();
            $resultado=$consulta->fetchAll();
            $consulta->CloseCursor();
            if($consulta->rowcount()){
                return 1;
            }else{
        //$response=0;
                return 0;
            }
            
        }

          
        public function crear_usuario_admin(){
            $user=$_POST['usuario'];
            $id_user=$_POST['cedula'];
            $correo=$_POST['email'];
            $pass=$_POST['password'];
            $consulta=$this->db->prepare("call sp_crear_admin("."'".$user."','".$id_user."','".$correo."','".$pass."'".")");
            $consulta->execute();
            $resultado=$consulta->fetchAll();
            $consulta->CloseCursor();
        }


        



} ?>