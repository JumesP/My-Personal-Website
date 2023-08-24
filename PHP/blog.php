<?php

    $blog_ID = "100001";
    $blog_title = $_POST['blog_title'];
    $blog_post = $_POST['blog_post'];
    $blog_user = "James";
    $blog_date = "2023-08-24";

    // Connect to the database
    $conn = new mysqli('localhost', 'jameshos_user', 'password1231', 'jameshos_Accounts');
    if ($conn->connect_error) {
        die('Connection Failed : ' . $conn->connect_error);
    } else {
        $stmt = $conn->prepare("insert into Blog(ID, TITLE, DATE, USER, CONTENT) values(?, ?, ?, ?, ?)");
        if ($stmt === false) {
            die("Error: a");
        }
        $stmt->bind_param("issss", $blog_ID, $blog_title, $blog_date, $blog_user, $blog_post);
        $stmt->execute();
        echo "Blog Posted Successfully...";
        $stmt->close();
        $conn->close();
    }
?>