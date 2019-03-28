<?php
/**
 * Created by PhpStorm.
 * User: Administrateur
 * Date: 28/03/2019
 * Time: 13:54
 */

include 'log.php';

$login = $_REQUEST['login'];
$login = 'test';

$password = sha1($_REQUEST['password']);


var_dump($login,$password);

function check($login,$password)
{

    GLOBAL $conn;

    $sql = "SELECT `login`,`password` from `users` WHERE '$login' = `login` AND '$password' = `password` ";

    $result = $conn->query($sql);

    $row = $result->fetch_assoc();

    $pseudo = $row['login'];
    $mdp = $row['password'];



    if ($login == $pseudo && $password == $mdp) {

        echo json_encode('ok');

    }


}

if(isset($login) && isset($password)) {

    check($login, $password);

}