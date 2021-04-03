<?php

    include_once 'libs/user.php';
    include_once 'libs/user_session.php'; 
   

    if(isset($_SESSION ['user'])){
        $user->setUser($userSess->getCurrUser());
        require 'controller/ItemController.php';
        $item =new ItemController();
    $item->arts_menor_precio();
    }else if(isset($_POST['usuario']) && isset($_POST['password'])){
        $userForm=$_POST['usuario'];
        $passForm=$_POST['password'];
            if($user->userExists($userForm,$passForm)){ 
                if($user->admin_log()){
                    $userSess->setCurrUser($userForm);
                    $user->setUser($userForm);
                    require 'view/indexAdmin.php';
                }else {
                    $userSess->setCurrUser($userForm);
                    $user->setUser($userForm);
                    echo $userSess->getCurrUser()."Usuario tipo cliente";
                    require 'controller/ItemController.php';
                    $item =new ItemController();
                    $item->arts_menor_precio();
                    
            }
        }else{
            include_once 'view/cliente_log.php'; 
        }
    }else{
        include_once 'view/cliente_log.php';
    }
    ?>