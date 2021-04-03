<?php    
    include_once '../Connection.php';

    class User extends Connection{
        
        function getAllUser(){
            $query = $this->connect()->prepare("SELECT * FROM USERS");
            $query->execute();
            $data = $query->fetchAll(PDO::FETCH_ASSOC);
            $query->closeCursor();
            return $data;
        }

        function getOneUser($id){
            $pdo = $this->connect()->prepare("SELECT * FROM USERS WHERE ID_NUMBER =" . $id . ";");
            $pdo->execute();
            $data= $pdo->fetchAll(PDO::FETCH_ASSOC);
            $pdo->closeCursor();
            return $data;
        }

        function newUser($params){
            $consulta = $this->connect()->prepare("call CREATE_USER(" . "'" . $params['ID_NUMBER'] . "','" . $params['NAME_USER'] ."','".$params['USER_NAME']. "','".$params['E_MAIL']. "','".$params['USER_PASSWORD']. "')");
            $consulta->execute();
            $data=$consulta->fetchAll(PDO::FETCH_ASSOC);
            $consulta->closeCursor();
            return $data; 
        }

        function deleteUser($id){
            $query = $this->connect()->query("DELETE FROM USERS WHERE ID_NUMBER=" . $id . ";");
            return $query;
        }

        function update($params){
            $query= $this->connect()->query( "UPDATE USERS SET 
            NAME_USER="."'".$params['NAME_USER'].
            "',USER_NAME='".$params['USER_NAME'].
            "',E_MAIL='".$params['E_MAIL'].
            "',USER_PASSWORD='".$params['USER_PASSWORD'].
            "' WHERE ID_NUMBER='".$params['ID_NUMBER']."';"
            );
        }
        function login($params){
            $consulta = $this->connect()->prepare("call login(" . "'" . $params['USER_NAME'] . "','" . $params['USER_PASSWORD'] ."')");
            $consulta->execute();
            $data=$consulta->fetchAll(PDO::FETCH_ASSOC);
            $consulta->closeCursor();
            return $data; 

        }






    }
    


?>