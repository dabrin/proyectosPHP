<?php

include_once 'Sale.php';


class APISale{

    private $sale;


    function __construct(){
        $this->sale= new Sale();
    }

    function getAll(){
        $res = $this->sale->getAllProducts();
        return $res;
    }
    function getLogPayment(){
        $res = $this->sale->getLogPayment();
        return $res;
    }
    function post($params){
        $this->sale->newSale($params);
    }

    function delete($id){
        $this->sale->deleteProduct($id);
    }

    function getOne($id){
        $res=$this->sale->getOneProduct($id);
        //return $this->parseQuery($res);
        return $res;
    }
    function payment($params){
        $res=$this->sale->addPayment($params);
        return $res;
    }


}


?>