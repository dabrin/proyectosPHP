<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of ItemController
 *
 * @author Pablo Rojas
 */
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
        $data['lista']=json_decode(file_get_contents("http://dabrin-001-site1.btempurl.com/api/SolicitudLibro"),true);
       // $data['listado'] = $items->listar();
        $this->view->show("ver_tabla_arts.php", $data);
    }

       public function call_listar2(){
        $this->view->show("listar.php",null);
    }
    //Método para listar y devolver una lista tabla
    public function listar2() {
        require 'model/ItemModel.php';
        $items = new ItemModel();
        $data['lista']=json_decode(file_get_contents("http://dabrin-001-site1.btempurl.com/api/SolicitudLibro"),true);
       // $data['listado'] = $items->listar();
        $this->view->show("ver_tabla_arts.php", $data);
    }


//listar
    /*Método devolver la vista registrar
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

    public function buscar(){
        $this->view->show("buscar.php");
    }
    public function buscar_commit(){
        require 'model/ItemModel.php';
        $items=new ItemModel();
        echo json_encode($items->buscar());    
    }*/

    public function mostrarFormulario() {
        $this->view->show("formulario.php", null);
    }

    public function proceso() {
        $resultado = $_POST['valor1'] + $_POST['valor2'];
        echo $resultado;
    }

}
