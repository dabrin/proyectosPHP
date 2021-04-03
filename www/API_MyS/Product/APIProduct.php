<?php

include_once 'Product.php';


class APIProduct{

    private $product;


    function __construct(){
        $this->product= new Product();
    }

    function getAll(){
        $res = $this->product->getAllProducts();
        return $res;
    }

    function post($params){
        $this->product->newProduct($params);
    }

    function delete($id){
        $this->product->deleteProduct($id);
    }

    function getOne($id){
        $res=$this->product->getOneProduct($id);
        //return $this->parseQuery($res);
        return $res;
    }


}


?>