<?php    
    include_once '../Connection.php';

    class Loan extends Connection{
    
        function getAll(){
            $query = $this->connect()->prepare("SELECT * FROM LOANS");
            $query->execute();
            $data = $query->fetchAll(PDO::FETCH_ASSOC);
            $query->closeCursor();
            return $data;
        }

        function getOne($id){
            $pdo = $this->connect()->prepare("SELECT * FROM LOANS WHERE ID_NUMBER =" . $id . ";");
            $pdo->execute();
            $data= $pdo->fetchAll(PDO::FETCH_ASSOC);
            $pdo->closeCursor();
            return $data;
        }

       function new_loan($params){
            $sql = "INSERT INTO LOANS ( ID_NUMBER, FIRST_AMOUNT,DESCRIPTION, DATE_START, DATE_CLOSE,PAYMENT) VALUES (?,?,?,?,?,?)";
            $pdo = $this->connect()->prepare($sql);
            $query = $pdo->execute([$params['ID_NUMBER'], $params['FIRST_AMOUNT'], $params['DESCRIPTION'],
            $params['DATE_START'], $params['DATE_CLOSE'],$params['PAYMENT']]);
            return $query;
            return $consulta;
        }

        function delete($id){
            $query = $this->connect()->query("DELETE FROM LOANS WHERE ID_NUMBER=" . $id . ";");
            return $query;
        }
        function update($params){
             $query= $this->connect()->query( "UPDATE LOANS SET FIRST_AMOUNT="."'".$params['FIRST_AMOUNT']."',DESCRIPTION='".$params['DESCRIPTION']."',DATE_START='".$params['DATE_START']."',DATE_CLOSE='".$params['DATE_CLOSE']."' WHERE ID_NUMBER='".$params['ID_NUMBER']."';"
            );

        }

        function addPayment($params){
            $consulta = $this->connect()->prepare("call UPDATE_LOANS(" . "'" . $params['_ID_CUSTOMER'] . "','" . $params['_PAYMENT'] ."')");
            $consulta->execute();
            $consulta->closeCursor();
        }
    }
    


?>