<?php
class ItemController {

    public function __construct() {
        $this->view = new View();
    }

    //Método para listar y devolver una lista tabla
    public function listar() {
        require 'model/ItemModel.php';
        $items = new ItemModel();
        $data['listado'] = $items->listar();

        $this->view->show("listar.php", $data);
    }

public function insertGenero(){

    
}

}