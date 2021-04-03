<?php

include_once 'Loan.php';


class APILoan{

    private $loan;


    function __construct(){
        $this->loan= new Loan();
    }

    function getAll(){
        $res = $this->loan->getAll();
        return $res;
    }

    function post($params){
        $this->loan->new_loan($params);
    }

    function delete($id){
        $this->loan->delete($id);
    }

    function getOne($id){
        $res=$this->loan->getOne($id);
        //return $this->parseQuery($res);
        return $res;
    }
    function payment($params){
        $res=$this->loan->addPayment($params);
        return $res;
    }
    function update($params){
        $res=$this->loan->update($params);
        return $res;
    }


}


?>