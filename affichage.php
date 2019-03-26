<?php
/**
 * Created by PhpStorm.
 * User: Administrateur
 * Date: 24/01/2019
 * Time: 14:04
 */

include "log.php";

function affichage ($type) {

    GLOBAL $conn;

    $sql = "SELECT * FROM `angular` WHERE `type` = '$type'";



        $connexion = $conn -> query($sql) ;


        $arr = array();
        $result = $conn->query($sql);


        while($data = $result->fetch_assoc())
        {

            $arr[] = $data;

        }

        echo json_encode($arr);


}

affichage($type);