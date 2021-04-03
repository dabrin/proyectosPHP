<?php
include_once 'libs/db.php';

class User extends DB{

    private $nombre;
    private $user;

     
    public function userExists($user, $pass){
        
        $passBD=$pass;
        
        //echo "no pasé por el script";
        $user=$_POST['usuario'];
        $pass=$_POST['password'];
        $response;
        $consulta=$this->connect()->prepare("call sp_user_exists('".$user."','".$pass."')");
        $consulta->execute();
        $resultado=$consulta->fetchAll();
        $consulta->CloseCursor();
        if($consulta->rowcount()){
            return true;

        }else{
            return false;
        }


    }


    public function admin_log(){

        $user=$_POST['usuario'];
        $pass=$_POST['password'];
        $response;
        $consulta=$this->connect()->prepare("call sp_log_('".$user."','".$pass."')");
        $consulta->execute();
        $resultado=$consulta->fetchAll();
        $consulta->CloseCursor();
        if($consulta->rowcount()){
            return true;
                
        }else{
        //$response=0;
        return false;
        }
    }
    
    public function setUser($user){
       
        $consulta=$this->connect()->prepare('SELECT * FROM cliente WHERE nombre = :user');
        $consulta->execute(['user' => $user]);
        $resultado=$consulta->fetchAll();       
        foreach ($resultado as $currUser) {
            $this->nombre=$currUser['nombre'];
            $this->user=$currUser['nombre'];
            # code...
        }
         $consulta->CloseCursor();

    }
    public function getNombre(){

        return $this->nombre;
    }
}

?>