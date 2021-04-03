<?php

    include_once 'APIProduct.php';
    
    header('content-type: application/json; charset=utf-8');
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
    $api = new APIProduct();
    echo json_encode($api->getAll());

?>