<?php    
    include_once '../Connection.php';

    class Product extends Connection{
        
        function getAllCustomers(){
            $query = $this->connect()->prepare("SELECT * FROM customers");
            $query->execute();
            $data = $query->fetchAll(PDO::FETCH_ASSOC);
            $query->closeCursor();
            return $data;
        }

        function getOneCustomer($id){
            $pdo = $this->connect()->prepare("SELECT * FROM customers WHERE ID_NUMBER =" . $id . ";");
            $pdo->execute();
            $data= $pdo->fetchAll(PDO::FETCH_ASSOC);
            $pdo->closeCursor();
            return $data;
        }

        function newCustomer($params){
            $sql = "INSERT INTO customers (NAME_CUSTOMER, ID_NUMBER, PHONE_NUMBER, E_MAIL, ADDRESS, DESCRIPTION) VALUES (?,?,?,?,?,?)";
            $pdo = $this->connect()->prepare($sql);
            $query = $pdo->execute([$params['NAME_CUSTOMER'], $params['ID_NUMBER'], $params['PHONE_NUMBER'], $params['E_MAIL'],
                $params['ADDRESS'], $params['DESCRIPTION']]);
            return $query;
        }

        function deleteCustomer($id){
            $query = $this->connect()->query("DELETE FROM customers WHERE ID_NUMBER=" . $id . ";");
            return $query;
        }

        function update($params){
            $query= $this->connect()->query( "UPDATE CUSTOMERS SET NAME_CUSTOMER="."'".$params['NAME_CUSTOMER']."',PHONE_NUMBER='".$params['PHONE_NUMBER']."',DESCRIPTION='".$params['DESCRIPTION']."',E_MAIL='".$params['E_MAIL']."',ADDRESS='".$params['ADDRESS']."' WHERE ID_NUMBER='".$params['ID_NUMBER']."';"
            );
        }






    }
    


?>