<?php
    class adivinarRecintoController {

        function __construct() {
            $this->view = new View();
        }//Fin del constructor.

        function adivinarRecintoAction() {
            require 'model/EstudianteModel.php';
            require 'public/domain/Estudiante.php';

            $estudianteModel = new EstudianteModel();
            $estudiantes = $estudianteModel->obtenerTodosLosEstudiantes();
            $this->view->show("adivinarRecintoView.php", $estudiantes);
        }/* Fin de la función adivinarRecintoAction, que obtiene todos los
        registros de los estudiantes almacenados en la BD y los envía a la vista. */
        
    }//Fin de la clase adivinarRecintoController.
?>

