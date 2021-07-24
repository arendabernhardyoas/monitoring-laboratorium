<?php
        include 'connect.php';
        
        date_default_timezone_set('Asia/Jakarta');
        $date=date("Y-m-d");
        $microcontroller_labs0 = $_GET['microcontroller_labs'];

        $queryResult=pg_query($connect, "SELECT * FROM monitoring_laboratorium WHERE date::text LIKE '%$date%' AND device_name='$microcontroller_labs0' ORDER BY date DESC LIMIT 1");
        $result=array();
        while($fethData=pg_fetch_assoc($queryResult)){
                        $result[]=$fethData;
        }
        echo json_encode($result);
        
?>
