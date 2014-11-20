<?php

//$baseURL = "http://localhost:8080/events/";
$baseURL = "http://design-dev.tm-aws.com/events/";

$eDirectory =$_GET['dir'];
$fileList = json_decode($_GET['files']);

$_SERVER['AWS_ACCESS_KEY_ID'] = 'AKIAIQZVTKRJNF4JIBAQ';
$_SERVER['AWS_SECRET_ACCESS_KEY'] = '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';

$bucket = 'trinity-images';


require 'vendor/s3/aws-autoloader.php';
use Aws\S3\S3Client;

foreach ($fileList as $theFile) {
	echo $theFile;
	$content = file_get_contents($baseURL."output/".$eDirectory."/".$theFile);
	$client = S3Client::factory(array(
  
));


$result = $client->deleteObjects(array(
    // Bucket is required
    'Bucket' => $bucket,
    // Objects is required
    'Objects' => array(
        array(
            // Key is required
            'Key' => 'events/'.$eDirectory.'/'.$theFile
           
        )
		
        // ... repeated
    ),
    'Quiet' => true || false
    
));



$result = $client->putObject(array(
    'Bucket'     => $bucket,
    'Key'        => 'events/'.$eDirectory.'/'.$theFile,
	"Body" => $content
	//'ContentType' => 'html'
    
));

echo $result['Location'] . "\n";

	
}




exit;














// $filepath should be absolute path to a file on disk						
//$filepath = '\var\www\scotland-ref\output\map.svg';
						
// Instantiate the client.
$client = S3Client::factory(array(
  
));


$result = $client->deleteObjects(array(
    // Bucket is required
    'Bucket' => $bucket,
    // Objects is required
    'Objects' => array(
        array(
            // Key is required
            'Key' => 'mirror/strictly/weeklyscores.html'
           
        )
		
        // ... repeated
    ),
    'Quiet' => true || false
    
));



$result = $client->putObject(array(
    'Bucket'     => $bucket,
    'Key'        => 'mirror/strictly/weeklyscores.html',
	"Body" => $content
	//'ContentType' => 'svgz'
    
));
echo $result['Location'] . "\n";




echo $result['Location'] . "\n";






?>
