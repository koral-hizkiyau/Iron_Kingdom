<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>
<main style="font-size: 30px; border: 2px solid black; display: inline-block; padding: 32px;">
<img src="../img/logo.png" alt=""><hr>
<p> The registration has been accepted</p>
<p>
<?php
$server = "sql113.byethost.com";
$user = "b10_24254137";
$pass = "koralangel";
$dbname = "b10_24254137_spinning";

// Create connection
$conn = new mysqli($server, $user, $pass, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql="SELECT first_name, last_name, number from registration ORDER BY number DESC LIMIT 1";


$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "Thank you " . $row["first_name"]. " " . $row["last_name"]. "<br><p>Your confirmation number is: " .$row["number"]."</p>";
    }
} else {
    echo "0 results";
}
$conn->close();
?>
</p>
<p>See you :)</p>



</main>
<div style="display: inline;">
<a onclick="printPage()" href="#"><img src="../img/print.png" alt="print page" width="50px"><p style="display: inline; color: blue;">Click to print this page</p></a>
</div>
<a style="display: block; font-size: 25px; color: blue;" href="../index.html">&#8592; back to home page</a>

<script>
function printPage() {
  window.print();
}
</script>



</body>
</html>



