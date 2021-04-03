<?php
    include_once 'user_session.php';
    $userSession = new UserSession();
    $userSession->closeSess();
    header("location: ../index.php");
?>