<?php

    include_once 'APILoan.php';
    header('content-type: application/json; charset=utf-8');
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');

    $url = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
    $url_components = parse_url($url);
    parse_str($url_components['query'], $params);

    if(isset($params['id'])){
        $api = new APILoan();
        echo json_encode($api->getOne($params['id']));
    }
    else{
        echo json_encode(array('message' => 'Empty'));
    }

?>