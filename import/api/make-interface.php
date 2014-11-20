<?php


require("../config/db.php");


$wrapper = file_get_contents('../template/wrapper.html');
$road_wrapper = file_get_contents('../template/road-wrapper.html');
$road_item = file_get_contents('../template/road-item.html');
$modal_item = file_get_contents('../template/modal.html');

$classpivot["Accidents"][1] = "accident";
$classpivot["Accidents"][2] = "accident";
$classpivot["Accidents"][3] = "accident";
$classpivot["Accidents"][4] = "accident";
$classpivot["Accidents"][5] = "accident";
$classpivot["Closures and Lane Restrictions"][1] = "lane-closure";
$classpivot["Closures and Lane Restrictions"][2] = "lane-closure";
$classpivot["Closures and Lane Restrictions"][3] = "lane-closure";
$classpivot["Closures and Lane Restrictions"][4] = "lane-closure";
$classpivot["Closures and Lane Restrictions"][5] = "lane-closure";
$classpivot["Delays"][1] = "severity-low";
$classpivot["Delays"][2] = "severity-low";
$classpivot["Delays"][3] = "severity-med";
$classpivot["Delays"][4] = "severity-med";
$classpivot["Delays"][5] = "severity-high";
$classpivot["Incidents and Hazards"][1] = "incidents";
$classpivot["Incidents and Hazards"][2] = "incidents";
$classpivot["Incidents and Hazards"][3] = "incidents";
$classpivot["Incidents and Hazards"][4] = "incidents";
$classpivot["Incidents and Hazards"][5] = "incidents";

$classpivot["Sporting Events"][1] = "special-event";
$classpivot["Sporting Events"][2] = "special-event";
$classpivot["Sporting Events"][3] = "special-event";
$classpivot["Sporting Events"][4] = "special-event";
$classpivot["Sporting Events"][5] = "special-event";

$classpivot["Non-sporting Events"][1] = "special-event";
$classpivot["Non-sporting Events"][2] = "special-event";
$classpivot["Non-sporting Events"][3] = "special-event";
$classpivot["Non-sporting Events"][4] = "special-event";
$classpivot["Non-sporting Events"][5] = "special-event";

$classpivot["Roadworks"][1] = "road-works ";
$classpivot["Roadworks"][2] = "road-works ";
$classpivot["Roadworks"][3] = "road-works ";
$classpivot["Roadworks"][4] = "road-works ";
$classpivot["Roadworks"][5] = "road-works ";

$classpivot["Other"][1] = "severity-low";
$classpivot["Other"][2] = "severity-low";
$classpivot["Other"][3] = "severity-med";
$classpivot["Other"][4] = "severity-med";
$classpivot["Other"][5] = "severity-high";
$classpivot["Advice"][1] = "severity-low";
$classpivot["Advice"][2] = "severity-low";
$classpivot["Advice"][3] = "severity-med";
$classpivot["Advice"][4] = "severity-med";
$classpivot["Advice"][5] = "severity-high";
$classpivot["Parking Information"][1] = "severity-low";
$classpivot["Parking Information"][2] = "severity-low";
$classpivot["Parking Information"][3] = "severity-med";
$classpivot["Parking Information"][4] = "severity-med";
$classpivot["Parking Information"][5] = "severity-high";
$classpivot["Speeds"][1] = "severity-low";
$classpivot["Speeds"][2] = "severity-low";
$classpivot["Speeds"][3] = "severity-med";
$classpivot["Speeds"][4] = "severity-med";
$classpivot["Speeds"][5] = "severity-high";
$classpivot["Traffic Comments"][1] = "severity-low";
$classpivot["Traffic Comments"][2] = "severity-low";
$classpivot["Traffic Comments"][3] = "severity-med";
$classpivot["Traffic Comments"][4] = "severity-med";
$classpivot["Traffic Comments"][5] = "severity-high";



$query = "select * from incidents";
mysqli_query($connection, $query);
$result = mysqli_query($connection, $query);

$incidents = mysqli_fetch_all($result, MYSQLI_ASSOC);
usort($incidents, "cmp");


foreach ($incidents as $incident) {
	
	$incident["icon"] = $classpivot[$incident["category"]][$incident["prority"]];
	$tempcameras = json_decode($incident["cameras"]);
	//print_r(count($tempcameras));
	if (count($tempcameras) > 0) {
		$incident["thecamera"] = $tempcameras[0];
		
		
		$incident["videodisplay"] = "";
		$model_output .= mergeAll($incident, $modal_item);
	} else {
		$incident["videodisplay"] = "hide";
	}
	print"<pre>";
	print_r($incident);
	print"</pre>";
	$item_output .= mergeAll($incident, $road_item);
	
}



$m_road_wrapper = str_replace( "{{roaditems}}", $item_output, $road_wrapper);
$m_wrapper = str_replace( "{{thecontent}}", $m_road_wrapper, $wrapper);
$m_wrapper = str_replace( "{{modals}}", $model_output, $m_wrapper );

echo $m_wrapper;







function mergeAll($object, $template) {
	$final = $template;
	
	
	foreach ($object as $key => $replacer) {
			$final = str_replace("{{".$key."}}", $replacer, $final);
	}
	return  $final;
}



file_put_contents("../output/widget.html",$m_wrapper);


function cmp($a, $b) {
       return   $b["prority"] -  $a["prority"];
}

?>