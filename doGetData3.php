<?php
	include 'connect.php';
	
	if(!empty($_GET['date1'])&&!empty($_GET['date2'])){
	$date1 = $_GET['date1'];
	$date2 = $_GET['date2'];
	$queryResult=pg_query($connect, "SELECT * FROM monitoring_laboratorium WHERE date BETWEEN '$date1' AND '$date2'");
	$result=array();
	while($fethData=pg_fetch_assoc($queryResult)){
			$result[]=$fethData;
	}
	echo json_encode($result);
	}
	else{
	$queryResult=pg_query($connect, "SELECT * FROM monitoring_laboratorium");
	$result=array();
	while($fethData=pg_fetch_assoc($queryResult)){
			$result[]=$fethData;
	}
	echo json_encode($result);
	}
?>
