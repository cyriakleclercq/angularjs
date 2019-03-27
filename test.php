<?php
/**
 * Created by PhpStorm.
 * User: Administrateur
 * Date: 25/03/2019
 * Time: 14:30
 */

include 'log.php';


$nom = $_REQUEST['new'];

$type = $_REQUEST['type'];

var_dump($_REQUEST);


function add ($nom, $type) {

    GLOBAL $conn;

    $stmt = $conn -> prepare("INSERT INTO `angular` (`nom`,`type`) VALUE (?,?)");

    $stmt -> bind_param("ss",$nom,$type);

    $stmt -> execute();

    $stmt -> close();

}

if(isset($nom, $type)) {

    add($nom, $type);
}


