<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="../Cascading_Style_Sheets/blog.css" />
    <script src="../JavaScript/blog.js"></script>
    <title>Document</title>
</head>
<body style="height: 100dvh;">
<div id="root" class="new_post">
    <div id="entry">
        <form method="post">
            <h1 id="new-post">Enter New Blog Post</h1>
            <label for="new-post-title">Post Title: </label><input type="text" id="new-post-title" name="blog_title"/><br />
            <label for="new-post">Post Contents: </label><input type="text" id="new-post" name="blog_post"size="50" /><br />
            <label for="post_date">Post Date: </label><input type="date" name="post_date" id="post_date" />
            <input type="submit" value="Submit" id="submit" name="submit" />
        </form>
    </div>
</div>
<?php
$conn = new mysqli('localhost', 'jameshos_user', 'password1231', 'jameshos_Accounts');
$sql = "SELECT * FROM Blog";
if (isset($_POST['submit'])) {
    if ($result = mysqli_query($conn, $sql)) {
        if (mysqli_num_rows($result) >= 0) {
            $blog_ID = 100000 + mysqli_num_rows($result) + 1;
        } else {
            echo "error";
        }}
    $conn->close();

    $blog_title = $_POST['blog_title'];
    $blog_post = $_POST['blog_post'];
    $blog_user = "James";
    $blog_date = "2023-08-24"; // fix

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
    }}
?>
</body>
</html>