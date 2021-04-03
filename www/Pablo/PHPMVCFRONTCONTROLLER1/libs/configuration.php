<?php
// configuration
    require 'libs/Config.php';
    $config=Config::singleton();
    $config->set('controllerFolder', 'controller/');
    $config->set('modelFolder', 'model/');
    $config->set('viewFolder', 'view/');
    
    $config->set('dbhost', 'localhost');
    $config->set('dbname', 'lenguajes_examen1');
    $config->set('dbuser', 'root');
    $config->set('dbpass', '');
    
    
?>