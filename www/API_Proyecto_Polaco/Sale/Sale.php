<?php    
    include_once '../Connection.php';

    class Sale extends Connection{
    
        function getAllProducts(){
            $query = $this->connect()->prepare("SELECT * FROM SALES");
            $query->execute();
            $data = $query->fetchAll(PDO::FETCH_ASSOC);
            $query->closeCursor();
            return $data;
        }

        function getOneProduct($id){
            $pdo = $this->connect()->prepare("SELECT * FROM SALES WHERE ID_NUMBER =" . $id . ";");
            $pdo->execute();
            $data= $pdo->fetchAll(PDO::FETCH_ASSOC);
            $pdo->closeCursor();
            return $data;
        }

        function newSale($params){
            $consulta = $this->connect()->prepare("call INSERT_SALE(" . "'" . $params['ID_PRODUCT'] . "','" . $params['ID_NUMBER'] ."','".$params['TYPE_PAYMENT']. "')");
            $consulta->execute();
            $consulta->closeCursor();
            $consulta=$this->connect()->prepare("UPDATE PRODUCTS SET QUANTITY=".$params['QUANTITY']."WHERE ID_PRODUCT=".$params['ID_PRODUCT']);
            $consulta->execute();
            $consulta->closeCursor();
            return $consulta;
        }

        function deleteProduct($id){
            $query = $this->connect()->query("DELETE FROM SALES WHERE ID_NUMBER=" . $id . ";");
            return $query;
        }

        function addPayment($params){
            $consulta = $this->connect()->prepare("call UPDATE_SALES(" . "'" . $params['_ID_CUSTOMER'] . "','" . $params['_PAYMENT'] ."')");
            $consulta->execute();
            $consulta->closeCursor();
        }

        function getLogPayment(){
            $pdo = $this->connect()->prepare("SELECT * FROM LOG_PAYMENT");
            $pdo->execute();
            $data= $pdo->fetchAll(PDO::FETCH_ASSOC);
            $pdo->closeCursor();
            return $data;
        }
    }
    


?>