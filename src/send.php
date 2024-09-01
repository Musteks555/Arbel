<?php
$email = htmlspecialchars($_POST['email']);
$basketDetails = htmlspecialchars($_POST['basketDetails']);
$totalQuantity = htmlspecialchars($_POST['totalQuantity']);
$totalPrice = htmlspecialchars($_POST['totalPrice']);

$to = 'Hello@arbelsupplements.com';
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
$headers .= 'From: <Hello@arbelsupplements.com>' . "\r\n";
$headers .= 'Reply-To: <Hello@arbelsupplements.com>' . "\r\n";

if (mail($to, $subject, $message, $headers)) {
    echo json_encode(['status' => 'success']);
} else {
    echo json_encode(['status' => 'error']);
}
?>
