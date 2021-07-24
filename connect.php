<?php

// Azure Database for PostgreSQL PHP runtime connection string
// "host=monitoring-labs.postgres.database.azure.com port=5432 dbname=monitoring_building user=labs@monitoring-labs password=AnyTh!ngy0uW@nT sslmode=require"

$connect = pg_connect("host=localhost port=5432 dbname=monitoring_building user=aby password=AnyTh!ngy0uW@nT");

	if (!$connect) {
		echo "Can't connect to Server!";
		exit();
	}

?>
