<?php

require("../config/db.php");


$host = 'ftp0.data.inrixmedia.com';
$username = 'TrinityMIrrorData';
$password = 'uRY3er227D';
$filename = 'MEN.xml';
$localfile = '../xml/' . $filename;

echo ( "Downloading " . $filename . " to " . $localfile . "\n" );

( $ftp = ftp_connect ( $host ) ) || die ( 'Can\'t connect' );
ftp_login ( $ftp, $username, $password ) || die ( 'Can\'t log in' );
ftp_pasv ( $ftp, TRUE ) || die ( 'Can\'t switch to passive mode' );
ftp_get ( $ftp, $localfile, $filename, FTP_BINARY ) || die ( 'Can\'t get file' );

echo "done";


$query = "TRUNCATE TABLE `incidents`";
mysqli_query($connection, $query);

if (file_exists('../xml/MEN.xml')) {
    $xml = simplexml_load_file('../xml/MEN.xml');
	echo "loaded";

	processXML($xml);
	
} else {
   echo('Failed to open test.xml.');
}



function processXML($obj) {
	  global $connection;
	$incidentobj = array();
	
	foreach ($obj->incidents->incident as $theincident) {
			print"<pre>";
			print_r($theincident);
			print"</pre>";
			$incidentobj["id"] =  addslashes((string)$theincident->attributes()->id);
			$incidentobj["prority"] =  (string)$theincident->details->attributes()->priority;
			$incidentobj["category"] =  (string)$theincident->details->attributes()->category;
			$incidentobj["road"] =  addslashes((string)$theincident->locations->location[0]);
			$incidentobj["direction"] =  addslashes((string)$theincident->locations->attributes()->direction);
			$incidentobj["area"] =  addslashes((string)$theincident->attributes()->area);
			$incidentobj["message"] =  addslashes((string)$theincident->details->attributes()->template);
			
			// save co-ords
			$tempcords = array();
			$tempcords["lat"] = (string)$theincident->attributes()->lat;
			$tempcords["long"] = (string)$theincident->attributes()->lon;
			$incidentobj["cord"] =  json_encode($tempcords);
			
			
			if($theincident->schedule->{'date-time'}->count() == 2) {
				$incidentobj["start"] =  (string)$theincident->schedule->{'date-time'}[0];
				$incidentobj["end"] =  (string)$theincident->schedule->{'date-time'}[1];
				
			 } else {
				$incidentobj["start"] =  (string)$theincident->schedule->{'date-time'};
				$incidentobj["end"] =  "";
				
			 }
			 $tempcameras = array();
			if ($theincident->cameras->camera->count() > 0) {
				foreach ($theincident->cameras->camera as $thecamera) {
				
					array_push($tempcameras, (string)$thecamera->attributes()->url) ;
			}
				$incidentobj["cameras"] = json_encode($tempcameras); 
				
			
			} else {
				$incidentobj["cameras"] = "[]"; 
			
			}
			
		
		print"<pre>";
		print_r($incidentobj);
		print"</pre>";
			
		
		$columns = implode(",", array_keys($incidentobj));
		
		$values = implode("','", $incidentobj);


		
		$query = "insert into incidents   (".$columns.") values ('".$values."')";
		
		mysqli_query($connection, $query);
		
		echo "<hr>";	
	
	
	
	}
	
}






?>