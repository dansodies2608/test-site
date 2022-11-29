<?php
$fio = $_POST['fio'];
$email = $_POST['email'];
$name = htmlspecialchars($name);
$phone = htmlspecialchars($phone);
$email = htmlspecialchars($email);
$name = urldecode($name);
$phone = urldecode($phone);
$email = urldecode($email);
$name = trim($name);
$phone = trim($phone);
$email = trim($email);
//echo $fio;
//echo "<br>";
//echo $email;
if (mail("danso12345@gmail.com", "Заявка с сайта", "Имя: ".$name.". Телефон:"$phone" E-mail: ".$email ,"From: danso12345@gmail.com \r\n"))
 {     echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}?>