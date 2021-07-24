<?php
   	include 'connect.php';

	$device_name=$_GET['device_name'];
	$device_ipaddr=$_GET['device_ipaddr'];
	$temperature=$_GET['temperature'];
	$humidity=$_GET['humidity'];
	date_default_timezone_set('Asia/Jakarta');
        $date=date("Y-m-d H:i:s");


	$queryResult=pg_query($connect, "INSERT INTO monitoring_laboratorium (date,device_name,device_ipaddr,temperature,humidity) VALUES ('$date','$device_name','$device_ipaddr','$temperature','$humidity')");
	echo ($queryResult);


?>
