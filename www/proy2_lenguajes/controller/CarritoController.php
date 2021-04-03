<?php
class CarritoController {
    private $view;
    public function __construct(){

        $this->view= new View();
    }
    public function ver_carrito(){
        session_start();
        if(isset($_SESSION['user'])){
        $this->view->show("view_carrito.php",null);
    }else $this->view->show("cliente_log.php",null);}

    public function load_table(){
        require 'model/CarritoModel.php';
        $carrito=new CarritoModel();
        $data['lista']=$carrito->load_table();
        $this->view->show("tabla_carrito.php",$data);

    }
    public function delete(){
        require 'model/CarritoModel.php';
        $carrito=new CarritoModel();
        $carrito->delete();
        

    }
}