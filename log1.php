<?php

session_start();

if($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];


    if($username == '231011402714' && $password == '402714') {

        header('Location: Dash_Materi.html');
        exit();
    } else {

        echo 'Login failed. Invalid username or password.';
    }
}
?>
