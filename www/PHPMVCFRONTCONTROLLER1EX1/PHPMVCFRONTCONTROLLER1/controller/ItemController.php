<?php


class ItemController {

    public function __construct() {
        $this->view = new View();
    }

    public function call_listar(){

        $this->view->show("listar.php",null);
    }
    //Método para listar y devolver una lista tabla
    public function listar() {
        require 'model/ItemModel.php';
        $items = new ItemModel();
        $data['listado'] = $items->listar();
        $this->view->show("ver_tabla_arts.php", $data);
    }

    public function listar_venta() {
        require 'model/ItemModel.php';
        $items = new ItemModel();
        $data['listado'] = $items->listar();
        $this->view->show("ver_tabla_Venta.php", $data);
    }

//listar
    //Método devolver la vista registrar
    public function registrar() {
        $this->view->show("register.php", null);
    }

    //Método para registrar
    public function registrar_commit() {
        require 'model/ItemModel.php';
        $items = new ItemModel();
        $items->registrar();
        $this->view->show("register.php", null);
    }

    //Método devolver la vista registrar
    public function update() {
        $this->view->show("update.php", null);
    }

    //Método para registrar
    public function update_commit() {
        require 'model/ItemModel.php';
        $items = new ItemModel();
        $items->actualizar();
        $this->view->show("update.php", null);
    }

    public function delete() {
        $this->view->show("delete.php", null);
    }

    //Método para registrar
    public function delete_commit() {
        require 'model/ItemModel.php';
        $items = new ItemModel();
        $items->borrar();
        $this->view->show("delete.php", null);
    }


    //Inserts------------------------------------
    public function insertarMaderaView(){
        $this->view->show("insertMadera.php");

    }
    public function insertarMadera(){
        require 'model/ItemModel.php';
        $items = new ItemModel();
        $items->insertarMadera();
        //$this->view->show("listarMaderas.php");
    }

     public function insertarAcabadoView(){
        $this->view->show("insertAcabado.php");

    }
    public function insertarAcabado(){
        require 'model/ItemModel.php';
        $items = new ItemModel();
        $items->insertarAcabado();
    }

    public function insertarMueble(){
        require 'model/ItemModel.php';
        $items = new ItemModel();
        $data['listado'] = $items->verMaderas();
        $data['lista']= $items-> verAcabados();
        $this->view->show("insertMueble.php", $data);
    }

    public function insertarMuebleRealizar(){
        require 'model/ItemModel.php';
        $items = new ItemModel();
        $items->insertarMueble();
    }

    public function obtenerPrecios(){
        require 'model/ItemModel.php';
        $item = new ItemModel();
        //echo json_encode( $item->obtenerPrecios());
    }


    public function eliminarMueble1(){
        require 'model/ItemModel.php';
        $items = new ItemModel();
        $items->eliminarMueble();
    }
     
    public function agregarCliente() {
        $this->view->show("viewClienter.php", null);
    }

    public function agregarClienteFunc() {
        require 'model/ItemModel.php';
        $items = new ItemModel();
        $items->registrarCliente();
        $this->view->show("viewClienter.php", null);
    }

    public function view_venta(){
         $this->view->show("viewVenta.php");
    }

    public function comprarMueble(){
        require 'model/ItemModel.php';
        $items = new ItemModel();
       

    }
}
