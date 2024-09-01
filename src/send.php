<?php
$email = $_POST['email'];
$basketDetails = $_POST['basketDetails'];
$totalQuantity = $_POST['totalQuantity'];
$totalPrice = $_POST['totalPrice'];

$to = 'your-email@example.com';
$subject = 'Order Summary from Basket';
$message = "
<html>
<head>
    <title>Order Summary</title>
</head>
<body>
    <h2>Order Summary</h2>
    <p><strong>Email:</strong> $email</p>
    <p><strong>Total Quantity:</strong> $totalQuantity</p>
    <p><strong>Total Price:</strong> $totalPrice</p>
    <h3>Basket Details:</h3>
    <pre>$basketDetails</pre>
</body>
</html>
";

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

$headers .= 'From: <webmaster@example.com>' . "\r\n"; // Замените на ваш email
$headers .= 'Reply-To: <webmaster@example.com>' . "\r\n"; // Замените на ваш email


if (mail($to, $subject, $message, $headers)) {
    echo json_encode(['status' => 'success']);
} else {
    echo json_encode(['status' => 'error']);
}
?>
