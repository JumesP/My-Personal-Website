<?php

    $blog_title = $_POST['blog_title'];
    $blog_post = $_POST['blog_post'];
    $blog_date = $_POST['blog_date'];

    // Connect to the database
    $conn = new mysqli('localhost', 'root', '', 'Blog');
    if($conn->connect_error){
        die('Connection Failed : '.$conn->connect_error);
    }else{
        $stmt = $conn->prepare("insert into blog(blog_title, blog_post, blog_date) values(?, ?, ?)");
        $stmt->bind_param("sss", $blog_title, $blog_post, $blog_date);
        $stmt->execute();
        echo "Blog Posted Successfully...";
        $stmt->close();
        $conn->close();
    }
