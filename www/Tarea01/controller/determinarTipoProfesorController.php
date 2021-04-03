<?php
    class determinarTipoProfesorController {
        
        function __construct() {
            $this->view = new View();
        }//Fin del constructor.

        function determinarTipoProfesorAction() {
            require 'model/ProfesorModel.php';
            require 'public/domain/Profesor.php';

            $profesorModel = new ProfesorModel();
            $profesores = $profesorModel->obtenerTodosLosProfesores();
            $this->view->show("determinarTipoProfesorView.php", $profesores);
        }/* Fin de la función determinarTipoProfesorAction, que obtiene todos los registros 
        de los profesores almacenados en la BD y los envía a la vista. */
        
    }//Fin de la función determinarTipoProfesorController.
?>

