<?php

print_r($_POST);

$first-name = $_POST["first-name"];
$last-name = $_POST["last-name"];
$age = filter_input(INPUT_POST, "age", FILTER_VALIDATE_INT);
$email = $_POST["email"];
$phone = filter_input(INPUT_POST, "phone", FILTER_VALIDATE_INT);
$password = $age = $_POST["password"];
$terms = filter_input(INPUT_POST, "terms", FILTER_VALIDATE_BOOL);

if ( ! $terms) {
    die("Terms must be accepted");
}

var_dump($first-name, $last-name, $age, $email, $phone, $password);h