<?php

class RedModel {

    private $db;

    public function __construct() {
        require_once 'libs/SPDO.php';
        $this->db = SPDO::singleton();
    }//Fin del constructor.
    public function obtenerTodasLasRedes() {
        $query = $this->db->prepare("SELECT * FROM tbRedes");
        $query->execute();
        $data = $query->fetchAll(PDO::FETCH_ASSOC);
        $query->closeCursor();
        $rows = count($data);
        $redArray = [];
        for ($i = 0; $i < $rows; $i++) {
            $redTemporal = new Red();
            $redTemporal->setId($data[$i]["tbRedes_id"]);
            $redTemporal->setConfiabilidad($data[$i]["tbRedes_confiabilidad"]);
            $redTemporal->setNumeroEnlaces($data[$i]["tbRedes_numeroEnlaces"]);
            $redTemporal->setCapacidad($data[$i]["tbRedes_capacidad"]);
            $redTemporal->setCosto($data[$i]["tbRedes_costo"]);
            $redTemporal->setClase($data[$i]["tbRedes_clase"]);

            array_push($redArray, $redTemporal->getJsonData());
        }
        return $redArray;
    }
}//Fin de la clase RedModel.
