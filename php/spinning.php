



<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>




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




$phone_number = mysqli_real_escape_string($conn, $_POST['phone_number']);
$first_name = mysqli_real_escape_string($conn, $_POST['first_name']);
$last_name = mysqli_real_escape_string($conn, $_POST['last_name']);

 
$sql = "INSERT INTO registration(first_name, last_name, phone_number) VALUES('$first_name','$last_name','$phone_number')";

if($conn->query($sql) === TRUE){
 include 'try.php';
}
else
{
 include 'fail.html';

}
$conn->close();
?>


</body>
</html>