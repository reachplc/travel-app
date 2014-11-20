<?php
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
?>
