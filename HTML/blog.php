<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../Cascading_Style_Sheets/blog.css" />
    <script src="../JavaScript/blog.js"></script>
    <title>Blog</title>
</head>

<body>
<header id="header">Blog</header>
<div id="root">
    <div id="left">
        <form method="post">
            <label for=" new-post">Enter New Blog Post</label><br />
            <label for="new-post-title">Post Title: </label><input type="text" id="new-post-title" name="blog_title" placeholder="enter new post title" /><br />
            <label for="new-post">Post Contents: </label><input type="text" id="new-post" name="blog_post" placeholder="content" size="50" /><br />
            <label for="post_date">Post Date: </label><input type="date" name="post_date" id="post_date" />
            <input type="submit" value="Submit" id="submit" name="submit" />
        </form>
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
            }}
        ?>
    </div>

    <div id="right">
        <?php
        if ($result = mysqli_query($conn, $sql)) {
            if (mysqli_num_rows($result) >= 0) {
                echo "<p>There are " . mysqli_num_rows($result) . " rows in the result set.</p>";
                while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
                    echo "<div class='blog-post'>";
                    echo "<p>" . $row['ID'] . "</p>";
                    echo "<p>@" . $row['USER'] . "</p>";
                    echo "<p>" . $row['DATE'] . "</p>";
                    echo "<h2>" . $row['TITLE'] . "</h2>";
                    echo "<p> Postage Content: <br>" . $row['CONTENT'] . "</p>";
                    echo "</div>";
                }
            }
            $conn->close();
        }
        ?>
    </div>
</div>
<footer id="footer">Thanks for Reading</footer>
</body>

</html>