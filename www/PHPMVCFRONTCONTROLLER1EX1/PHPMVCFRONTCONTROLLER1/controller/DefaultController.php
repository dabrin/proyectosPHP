<?php

class DefaultController{
    
    private $view;
    
    public function __construct() {
        $this->view=new View();
    } // constructor
    
    public function acciondefault(){
       
        // llamar modelo para traer datos
        $this->view->show("insertMadera.php", null);
               
        
    } // acciondefault
    
} // fin clase

?>

