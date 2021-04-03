<?php
$bulk=new MongoDB\Driver\BulkWrite;

$document1=['tittle'=>'one'];

$id1=$bulk->insert($document1);


var_dump($_id1);

$manager=new MongoDB\Driver('mongodb://localhost:27017');
$result= $manager->executeBulkWrite('prueba.primer',$bulk);
?>