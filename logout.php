<?php session_start();

unset($_SESSION['_AUTH_US']);
session_destroy();
session_unset();

$time = - time() * 60;
setcookie('___AUTH', '', $time, '/');
header("location: signin.html");