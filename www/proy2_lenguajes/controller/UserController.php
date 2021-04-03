<?php
class UserController {
    private $view;
    public function __construct(){

        $this->view= new View();
    }
    public function iniciado(){
        if(!isset($_SESSION['user'])){
            require 'model/UserModel.php';
            $client=new UserModel();
            session_start();
            $datos=$client->log_(); 
            $_SESSION['user']=$datos['nombre'];      
            $_SESSION['id']=$datos['identificador'];    
            $_SESSION['correo']=$datos['correo'];
            $_SESSION['t_user']=$datos['tipo_usuario'];
            if($_SESSION['t_user']!=1){
                $_SESSION['Rol_id']=$client->obtener_id_rol($_SESSION['id']);
                $_SESSION['GUser']=$client->obtener_Gestion_Usuario( $_SESSION['Rol_id']);
                $_SESSION['GProd']=$client->obtener_Gestion_Producto($_SESSION['Rol_id']);
                $_SESSION['GInformes']=$client->obtener_Gestion_Informes($_SESSION['Rol_id']);
                $_SESSION['GCombos']=$client->obtener_Gestion_Combos($_SESSION['Rol_id']);
                $_SESSION['GLista']=$client->obtener_Gestion_Lista($_SESSION['Rol_id']);
                if($_SESSION['t_user']==2){
                    $_SESSION['root']=1;
                }
                $this->view->show("indexAdmin.php",null);
            }else if($_SESSION['t_user']==1){
               $this->view->show("indexClient.php",null);
            }else $this->view->show("cliente_log.php",null);
        }else $this->view->show("cliente_log.php",null);
    }

    public function admin_log(){
        $this->view->show("admin_log.php",null);
    }
    public function log_(){
        require 'model/UserModel.php';
        $client=new UserModel();
        if($client->log_()){
            return true;
        }else return false;
    }
    
    public function crear_usuario(){
        session_start();
        if(isset($_SESSION['user'])){
            if($_SESSION['GUser']==1){
                $this->view->show("crear_usuario_admin.php",null);
            }else $this->view->show("no_permisos.php",null);
        }else $this->view->show("cliente_log.php",null);
    }


    public function crear_usuario_cliente(){
            $this->view->show("crear_usuario_cliente.php",null);
    }

    public function crear_usuario_create(){
        require 'model/UserModel.php';
        $client=new UserModel();
        $client-> crear_usuario_create();
    }
    
    public function indexClient(){
        $this->view->show("indexClient.php",null);
    }

    public function indexUser(){
        $this->view->show("indexAdmin.php",null);
    }

    public function ver_historial(){
        session_start();
        if(isset($_SESSION['user'])){
            if($_SESSION['GInformes']){
                $this->view->show("view_historico.php",null);
            }else $this->view->show("no_permisos.php",null);
        }else $this->view->show("cliente_log.php",null);
    }
    public function load_table(){
        session_start();
        if(isset($_SESSION['user'])){
            require 'model/UserModel.php';
            $client=new UserModel();
            $data['lista']=$client->load_table();
            $this->view->show("view_table_hist.php",$data);
        }else $this->view->show("cliente_log.php",null);
    }

    public function cliente_log(){
        session_start();
        if(isset($_SESSION['user'])){
            require 'model/UserModel.php';
            $client=new UserModel();
            $client->ingresar_cliente();
            //$this->view->show("LOGIN.php",null);
            $this->view->show("crear_usuario_cliente.php",null);
        }else $this->view->show("cliente_log.php",null);

    }

    public  function ver_compras() {
        session_start();
        if(isset($_SESSION['user'])){
            $this->view->show("view_informe_compras.php",null);
        }else $this->view->show("cliente_log.php",null);
    }

    public function cargar_tabla_ventas(){
        session_start();
        if(isset($_SESSION['user'])){
            require 'model/UserModel.php';
            $client=new UserModel();
            echo $_SESSION['id'];
            $data['lista']=$client->ver_compras($_SESSION['id']);
            $this->view->show("view_tabla_compras.php",$data);
          
        }else $this->view->show("cliente_log.php",null);
    }
     
        public function crear_usuario_admin(){
            require 'model/UserModel.php';
            $client=new UserModel();
            $client-> crear_usuario_admin();
        }


    }
?>