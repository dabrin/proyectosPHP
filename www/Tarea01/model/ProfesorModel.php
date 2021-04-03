<?php

class ProfesorModel {

    private $db;

    public function __construct() {
        require_once 'libs/SPDO.php';
        $this->db = SPDO::singleton();
    }//Fin del constructor.

    public function obtenerTodosLosProfesores() {
        $query = $this->db->prepare("SELECT * FROM tbProfesor");
        $query->execute();
        $data = $query->fetchAll(PDO::FETCH_ASSOC);
        $query->closeCursor();
        $rows = count($data);
        $profesorArray = [];

        for ($i = 0; $i < $rows; $i++) {
            $profesorTemporal = new Profesor();
            $profesorTemporal->setId($data[$i]["tbProfesor_id"]);
            $profesorTemporal->setA($data[$i]["tbProfesor_a"]);
            $profesorTemporal->setB($data[$i]["tbProfesor_b"]);
            $profesorTemporal->setC($data[$i]["tbProfesor_c"]);
            $profesorTemporal->setD($data[$i]["tbProfesor_d"]);
            $profesorTemporal->setE($data[$i]["tbProfesor_e"]);
            $profesorTemporal->setF($data[$i]["tbProfesor_f"]);
            $profesorTemporal->setG($data[$i]["tbProfesor_g"]);
            $profesorTemporal->setH($data[$i]["tbProfesor_h"]);
            $profesorTemporal->setClase($data[$i]["tbProfesor_class"]);

            array_push($profesorArray, $profesorTemporal->getJsonData());
        }
        return $profesorArray;
    }
    
}//Fin de la clase ProfesorModel.
