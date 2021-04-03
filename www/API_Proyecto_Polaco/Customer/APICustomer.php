<?php

include_once 'Customer.php';


class APICustomer{

    private $customer;


    function __construct(){
        $this->customer= new Product();
    }

    function getAll(){
        $res = $this->customer->getAllCustomers();
        return $res;
    }

    function post($params){
        $this->customer->newCustomer($params);
    }

    function delete($id){
        $this->customer->deleteCustomer($id);
    }

    function getOne($id){
        $res=$this->customer->getOneCustomer($id);
        //return $this->parseQuery($res);
        return $res;
    }

      function update($params){
        $res=$this->customer->update($params);
        return $res;
    }


}


?>