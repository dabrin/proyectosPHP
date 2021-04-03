
<?php

class AdminController {
    private $view;
    public function __construct(){

        $this->view= new View();
    }

    public function admin_log(){
    //crear código para determinar que tipo de usuario es...
        require 'model/AdminModel.php';
        $client=new AdminModel();
        if($client->admin_log()){
            return true;
        }else return false;
    }

    public function crear_rol(){
        session_start();
        if(isset($_SESSION['user'])){
            if(isset($_SESSION['root'])){
                $this->view->show("view_crear_roles.php",null);
            }else  $this->view->show("no_permisos.php",null);
        }else $this->view->show("cliente_log.php",null);    
    }
    public function ver_administradores(){
        require 'model/AdminModel.php';
        $adm=new AdminModel();
        $data['listado']=$adm->ver_administradores();
        $this->view->show("view_tabla_crear_roles.php",$data);
    }

    public function verAdm(){
        require 'model/AdminModel.php';
        $adm=new AdminModel();
        echo json_encode($adm->verADM());

    }

    public function agregarPermisosRol(){
        require 'model/AdminModel.php';
        $adm=new AdminModel();
        
        if($_POST['GUser']){
            $adm->agregar_Gestión_Usuario();
            
        }
        if($_POST['GProd']){
             $adm->agregar_Gestión_Productos();
            
        }
        if($_POST['GInform']){
             $adm->agregar_Gestión_Informes();
             
        }
        if($_POST['GCombos']){
             $adm->agregar_Gestión_Combos();
             
        }
        if($_POST['Glista']){
             $adm->agregar_Gestión_Lista_deseos();
            
        }
          
    }
}
    
  
    
?>