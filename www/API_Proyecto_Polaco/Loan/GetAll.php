<?php

    include_once 'APILoan.php';
    
    header('content-type: application/json; charset=utf-8');
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
    $api = new APILoan();
    echo json_encode($api->getAll());

?>