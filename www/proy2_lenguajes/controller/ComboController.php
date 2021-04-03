<?php


    
   
class ComboController {
    private $view;
    public function __construct(){

        $this->view= new View();
    }
    public function ver_combos(){
        session_start();
            if(isset($_SESSION['user'])){
            require 'model/ComboModel.php';
            $items=new ComboModel();
            $data['lista']=$items->ver_combos();
            $this->view->show("view_combos.php",$data); 
        }else $this->view->show("cliente_log.php",null);
    }
    public function agregarACarrito(){
        require 'model/ComboModel.php';
        $items=new ComboModel();
        $items->agregarACarrito();
    }
    public function obtener_carrito(){
        require 'model/ComboModel.php';
        $items=new ComboModel();
        echo json_encode($items->obtener_carrito_combo());
    }
    public function crear_combo(){
        require 'model/ComboModel.php';
        $items=new ComboModel();
        $items->crearCombo();
        $this->view->show("view_combos.php",$data);
    }     
    public function deleteCombo(){
        require 'model/ComboModel.php';
        $items=new ComboModel();
        $items->deleteCombo();
    }   

    public function addProdcombo(){
        require 'model/ComboModel.php';
        $items=new ComboModel();
        $items->addProdcombo();
    }
     public function ver_combos2(){
        require 'model/ComboModel.php';
        $items=new ComboModel();
        $data['listado']=$items->ver_combos();
        $this->view->show("view_tabla_combos.php",$data);
    }
    public function view_tabla(){
        session_start();
        if(isset($_SESSION['user'])){
            if($_SESSION['GCombos']==1){
                $this->view->show("mostrar_productos.php",null);
            }else $this->view->show("no_permisos.php",null);
        }else $this->view->show("cliente_log.php",null);    
    }
    public function comprar(){
        require 'model/ComboModel.php';
        $combo=new ComboModel();
        $combo->comprar();

    }
    
}
    
  
    
?>