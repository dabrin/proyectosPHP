<?php
class ItemController {
    private $view;
    public function __construct(){

        $this-> view= new View();
    }
    public function listar(){
        require 'model/ItemModel.php';
        $items=new ItemModel();
        $data['listado']=$items->listar();
        $this->view->show("listar.php",$data);
    }//listar

     public function arts_menor_precio(){
        require 'model/ItemModel.php';
        $items=new ItemModel();
        $data['listado']=$items->arts_menor_precio();
        $this->view->show("indexClient.php",$data);
     }

    //Realizar un registro!!!!!
    public function registrar(){
        $this->view->show("register.php",null);
    }
    public function registrar_commit(){
        require 'model/ItemModel.php';
        $items=new ItemModel();
        $items->registrar();
        //$this->view->show("register.php",null);
    }
    //Termino de realizar registro

    public function actualizar(){
        session_start();
        if(isset($_SESSION['user'])){
            if($_SESSION['GProd']==1){
                $this->view->show("update.php",null);
                }else $this->view->show("no_permisos.php",null); 
           }else $this->view->show("cliente_log.php",null);
    }
    public function actualizar_commit(){
        session_start();
        if(isset($_SESSION['user'])){
            require 'model/ItemModel.php';
            $items=new ItemModel();
            $items->actualizar();
        }else $this->view->show("cliente_log.php",null);
    }


    public function crear_combo(){
        if(isset($_SESSION['user'])){
        $this->view->show("mostrar_productos.php",null);
    }else $this->view->show("cliente_log.php",null);
    }

    public function crear_combo_commit(){
        if(isset($_SESSION['user'])){
            require 'model/ItemModel.php';
            $items=new ItemModel();
            $items->crear_combo();
        }else $this->view->show("cliente_log.php",null);
    }

    public function ver_combos(){
        require 'model/ItemModel.php';
        $items=new ItemModel();
        $data['listado']=$items->ver_combos();
        $this->view->show("view_tabla_combos.php",$data);
    }
    public function view_tabla(){
        session_start();
            if(isset($_SESSION['user'])){
         $this->view->show("mostrar_productos.php",null);
        }else $this->view->show("cliente_log.php",null);
    }

    public function agregar_prod_a_combo(){
        require 'model/ItemModel.php';
        $items=new ItemModel();
        $data['lista']=$items->listar();
        $this->view->show("mostrar_arts_para_combo.php",$data);
    }
    public function view_add_prod(){
        //echo '20';
        //$item=$_POST['id'];
        $_SESSION['id_combo']="1";
        $this->view->show("view_add_prod_combo.php",null);
         
    }


public function obtener(){
        require 'model/ItemModel.php';
        $items=new ItemModel();
        $items->obtain();


}
     public function mostrar_formulario(){
        $this->view->show("formulario.php",null);
    }//listar


    public function proceso(){
        $resultado=$_POST["nombre_combo"];
        echo $resultado;
    }
    //termino de realizar registro!

    public function combo_art(){
        require 'model/ItemModel.php';
        $items=new ItemModel();
        $items->insert_art_combo();
        //echo $resultado;
    }

    public function listar_arts(){
        session_start();
        if(isset($_SESSION['user'])){
        require 'model/ItemModel.php';
        $items=new ItemModel();
        $data['lista']=$items->listar();
        $this->view->show("view_arts.php",$data);
    }else $this->view->show("cliente_log.php",null);
    }

    public function obtener_prod(){
        require 'model/ItemModel.php';
        $items=new ItemModel();
        $val=$items->obtener_prod();
        //$this->view->show("",null);
    }

    public function comprar(){
        require 'model/ItemModel.php';
        $items=new ItemModel();
        $items->comprar();
    }
    public function agregarACarrito(){
        require 'model/ItemModel.php';
        $items=new ItemModel();
        $items->agregarACarrito();
    }

    public function updateProd(){
        require 'model/ItemModel.php';
        $items=new ItemModel();
        echo json_encode($items->updateProd());
    }//NO TOCAR


    public function obtener_prod_actualizar(){
        require 'model/ItemModel.php';
        $items=new ItemModel();
        echo json_encode($items->obten_prod_venta());
    }
    
     public function recuperar(){
       require 'model/ItemModel.php';
       $items=new ItemModel();
       echo json_encode($items->obten_prod_venta());
    }

    public function deleteProd(){
        require 'model/ItemModel.php';
       $items=new ItemModel();
       $items->deleteProd();
    }
}//ALV


