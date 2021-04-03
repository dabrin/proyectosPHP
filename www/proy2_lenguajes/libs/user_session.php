<?php


class UserSession{
    public function __construct(){
        session_start();
    }

    public function setCurrUser($user){
        $_SESSION['user']=$user;
    }

    public function getCurrUser(){
        return $_SESSION['user'];

    }

    public function closeSess(){
        session_unset();
        session_destroy();
    }
}
?>