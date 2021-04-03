<?php

class EstudianteModel {

    private $db;

    public function __construct() {
        require_once 'libs/SPDO.php';
        $this->db = SPDO::singleton();
    }//Fin del constructor.

    public function obtenerTodosLosEstudiantes() {
        $query = $this->db->prepare("SELECT * FROM tbEstudiante");
        $query->execute();
        $data = $query->fetchAll(PDO::FETCH_ASSOC);
        $query->closeCursor();
        $rows = count($data);
        $estudiantesArray = [];

        for ($i = 0; $i < $rows; $i++) {
            $estudianteTemporal = new Estudiante();
            $estudianteTemporal->setId($data[$i]["tbEstudiante_id"]);
            $estudianteTemporal->setSexo($data[$i]["tbEstudiante_sexo"]);
            $estudianteTemporal->setRecinto($data[$i]["tbEstudiante_recinto"]);
            $estudianteTemporal->setPromedio($data[$i]["tbEstudiante_promedio"]);
            $estudianteTemporal->setCA($data[$i]["tbEstudiante_CA"]);
            $estudianteTemporal->setEC($data[$i]["tbEstudiante_EC"]);
            $estudianteTemporal->setEA($data[$i]["tbEstudiante_EA"]);
            $estudianteTemporal->setOR($data[$i]["tbEstudiante_OR"]);
            $estudianteTemporal->setCA_CE($data[$i]["tbEstudiante_CA_CE"]);
            $estudianteTemporal->setEA_OR($data[$i]["tbEstudiante_EA_OR"]);
            $estudianteTemporal->setEstilo($data[$i]["tbEstudiante_estilo"]);

            array_push($estudiantesArray, $estudianteTemporal->getJsonData());
        }/* Fin del for i, que inserta en un arreglo todos los registros de los 
        estudiantes que existen en la base de datos. */
        
        return $estudiantesArray;
    }/* Fin del la función obtenerTodosLosEstudiantes, que retorna el arreglo
    con todos registros de los estudiantes que existen en su respectiva tabla 
    de la base de datos. */
    
}//Fin de la clase EstudianteModel.
