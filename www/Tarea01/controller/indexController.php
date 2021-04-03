<?php

class IndexController {

    function __construct() {
        $this->view = new View();
    }

    function defaultAction() {
        $this->view->show("indexView.php");
    }
    
    function notFound() {
        $this->view->show("notFoundView.php");
    }//?controller=Index&action=contact
}
