<?php

include_once 'User.php';


class APIUser{

    private $user;


    function __construct(){
        $this->user= new User();
    }

    function getAll(){
        $res = $this->user->getAllUser();
        return $res;
    }

    function post($params){
        return $this->user->newUser($params);
    }

    function delete($id){
        $this->user->deleteUser($id);
    }

    function getOne($id){
        $res=$this->user->getOneUser($id);
        //return $this->parseQuery($res);
        return $res;
    }

      function update($params){
        $res=$this->user->update($params);
        return $res;
    }
    function login($params){
        $res=$this->user->login($params);
        return $res;
    }


}


?>