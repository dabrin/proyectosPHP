<?php

class EstiloAprendizajeModel {

    private $db;

    public function __construct() {
        require_once 'libs/SPDO.php';
        $this->db = SPDO::singleton();
    }//Fin del constructor.

    public function obtenerTodosLosEstilosAprendizaje() {
        $query = $this->db->prepare("SELECT * FROM tbEstiloAprendizaje");
        $query->execute();
        $data = $query->fetchAll(PDO::FETCH_ASSOC);
        $query->closeCursor();
        $rows = count($data);
        $estiloAprendizajeArray = [];

        for ($i = 0; $i < $rows; $i++) {
            $estiloAprendizajeTemporal = new EstiloAprendizaje();
            $estiloAprendizajeTemporal->setId($data[$i]["tbEstiloAprendizaje_id"]);
            $estiloAprendizajeTemporal->setRecinto($data[$i]["tbEstiloAprendizaje_recinto"]);
            $estiloAprendizajeTemporal->setCA($data[$i]["tbEstiloAprendizaje_CA"]);
            $estiloAprendizajeTemporal->setEC($data[$i]["tbEstiloAprendizaje_EC"]);
            $estiloAprendizajeTemporal->setEA($data[$i]["tbEstiloAprendizaje_EA"]);
            $estiloAprendizajeTemporal->setOR($data[$i]["tbEstiloAprendizaje_OR"]);
            $estiloAprendizajeTemporal->setCA_CE($data[$i]["tbEstiloAprendizaje_CA_CE"]);
            $estiloAprendizajeTemporal->setEA_OR($data[$i]["tbEstiloAprendizaje_EA_OR"]);
            $estiloAprendizajeTemporal->setEstilo($data[$i]["tbEstiloAprendizaje_estilo"]);
            array_push($estiloAprendizajeArray, $estiloAprendizajeTemporal->getJsonData());
        }
        
        return $estiloAprendizajeArray;
    }
}
