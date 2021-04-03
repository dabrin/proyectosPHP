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
            $pdo = $this->connect()->prepare("SELECT * FROM products WHERE CODE_PRODUCT =" . $id . ";");
            $pdo->execute();
            $data= $pdo->fetchAll(PDO::FETCH_ASSOC);
            $pdo->closeCursor();
            return $data;
        }

        function newProduct($params){
            $sql = "INSERT INTO products (CODE_PRODUCT, NAME_PRODUCT, SALE_PRICE, DESCRIPTION, COST_PRICE, QUANTITY) VALUES (?,?,?,?,?,?)";
            $pdo = $this->connect()->prepare($sql);
            $query = $pdo->execute([$params['CODE_PRODUCT'], $params['NAME_PRODUCT'], $params['SALE_PRICE'], $params['DESCRIPTION'],
                $params['COST_PRICE'], $params['QUANTITY']]);
            return $query;
        }


        function deleteProduct($id){
            $query = $this->connect()->query("DELETE FROM products WHERE CODE_PRODUCT=" . $id . ";");
            return $query;
        }

        function update($params){
            $query=$this->connect()->query(
                "UPDATE PRODUCTS SET NAME_PRODUCT="."'".$params['NAME_PRODUCT']."',SALE_PRICE='".$params['SALE_PRICE']."',DESCRIPTION='".$params['DESCRIPTION']."',COST_PRICE='".$params['COST_PRICE']."',QUANTITY='".$params['QUANTITY']."' WHERE CODE_PRODUCT='".$params['CODE_PRODUCT']."';"
            );
        }






    }
    


?>