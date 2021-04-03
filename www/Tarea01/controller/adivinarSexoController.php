<?php
    class adivinarSexoController {

        function __construct() {
            $this->view = new View();
        }//Fin del constructor.

        function adivinarSexoAction() {
            require 'model/EstudianteModel.php';
            require 'public/domain/Estudiante.php';

            $estudianteModel = new EstudianteModel();
            $estudiantes = $estudianteModel->obtenerTodosLosEstudiantes();
            $this->view->show("adivinarSexoView.php", $estudiantes);
        }/* Fin de la función adivinarSexoAction, que obtiene todos los registros 
        de los estudiantes almacenados en la BD y los envía a la vista. */
        
    }//Fin de la clase adivinarSexoController.
?>

