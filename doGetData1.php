<?php
	include 'connect.php';

	date_default_timezone_set('Asia/Jakarta');
	$date=date("Y-m-d");
	$queryResult=pg_query($connect, "SELECT * FROM monitoring_laboratorium WHERE date::text LIKE '%$date%'");
	$result=array();
	while($fethData=pg_fetch_assoc($queryResult)){

			$result[]=$fethData;

	}

	echo json_encode($result);

?>
