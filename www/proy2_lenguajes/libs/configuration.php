<?php
// configuration
    require 'libs/Config.php';
    $config=Config::singleton();
    $config->set('controllerFolder', 'controller/');
    $config->set('modelFolder', 'model/');
    $config->set('viewFolder', 'view/');
   
    $config->set('dbhost', 'localhost');
    $config->set('dbname', 'lenguajes');
    $config->set('dbuser', 'root');
    $config->set('dbpass', '');

    
  
   /* $config->set('dbhost', '163.178.107.130:3306');
    $config->set('dbname', 'b54994_Lenguajes_proy2');
    $config->set('dbuser', 'laboratorios');
    $config->set('dbpass', 'UCRSA.118');*/
   
?>