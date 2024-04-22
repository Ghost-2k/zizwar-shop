<?php
// Check if form data is received
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form data
    $firstName = isset($_POST['firstName']) ? $_POST['firstName'] : '';
    $lastName = isset($_POST['lastName']) ? $_POST['lastName'] : '';
    $phone = isset($_POST['phone']) ? $_POST['phone'] : '';
    $city = isset($_POST['city']) ? $_POST['city'] : '';
    $address = isset($_POST['address']) ? $_POST['address'] : '';

    // Get the product information
    $productInfo = isset($_POST['productInfo']) ? $_POST['productInfo'] : '';

    // Construct the message to send to Telegram bot
    $message = "تم استلام طلب جديد:\n" .
               "الاسم الشخصي: $firstName\n" .
               "الاسم العائلي: $lastName\n" .
               "رقم الهاتف: $phone\n" .
               "المدينة: $city\n" .
               "العنوان: $address\n" .
               "معلومات المنتجات:\n$productInfo";

    // Replace 'YOUR_TELEGRAM_BOT_TOKEN' with your actual bot token
    $botToken = '6933396102:AAHFiksIhYfwaGzAPhZ1IsPcocSjGHxaYuc';

    // Replace 'YOUR_CHAT_ID' with your actual chat ID
    $chatId = '949852027';

    // Construct the URL for the Telegram bot API
    $url = "https://api.telegram.org/bot$botToken/sendMessage";

    // Prepare the message data
    $data = array(
        'chat_id' => $chatId,
        'text' => $message
    );

    // Use cURL to send the message to the Telegram bot
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($ch);
    curl_close($ch);

    // Output a response to indicate success
    echo 'Message sent to Telegram bot successfully';
} else {
    // If form data is not received, output an error message
    echo 'Error: No message data received';
}
?>
