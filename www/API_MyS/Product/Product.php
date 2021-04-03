<?php    
    include_once '../Connection.php';

    class Product extends Connection{
        
        function getAllProducts(){
            $query = $this->connect()->prepare("SELECT * FROM products");
            $query->execute();
            $data = $query->fetchAll(PDO::FETCH_ASSOC);
            $query->closeCursor();
            return $data;
        }

        function getOneProduct($id){
            $pdo = $this->connect()->prepare("SELECT * FROM products WHERE id =" . $id . ";");
            $pdo->execute();
            $data= $pdo->fetchAll(PDO::FETCH_ASSOC);
            $pdo->closeCursor();
            return $data;
        }

        function newProduct($params){
            $sql = "INSERT INTO products (named, provider, price, brand, description, other, dte, quant_on_stock) VALUES (?,?,?,?,?,?,?,?)";
            $pdo = $this->connect()->prepare($sql);
            $query = $pdo->execute([$params['named'], $params['provider'], $params['price'], $params['brand'],
                $params['description'], $params['other'], $params['dte'], $params['quant_on_stock']]);
            return $query;
        }


        function deleteProduct($id){
            $query = $this->connect()->query("DELETE FROM products WHERE id=" . $id . ";");
            return $query;
        }






    }
    


?>