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
    <div class="left">
        <a href="/HTML/new_post.php">Create a new post</a>
    </div>

    <div id="right">
        <?php
        $conn = new mysqli('localhost', 'jameshos_user', 'password1231', 'jameshos_Accounts');
        $sql = "SELECT * FROM Blog";
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