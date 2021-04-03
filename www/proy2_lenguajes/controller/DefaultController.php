<?php
class DefaultController{
    
    private $view;
    
    public function __construct() {
        $this->view=new View();
    } // constructor
    
    public function acciondefault(){
       
        // llamar modelo para traer datos

        //include_once "?controlador=User&accion=iniciado";
        $this->view->show("LOGIN.php", null);
               
        
    } // acciondefault
    
} // fin clase

?>

