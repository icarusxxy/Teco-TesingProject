<!--
/**
* Copyright 2015 IBM Corp. All Rights Reserved.
*
* Licensed under the Apache License, Version 2.0 (the “License”);
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* https://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an “AS IS” BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
-->

<?php

if(!$_ENV["VCAP_SERVICES"]){ //local dev
    $host = "127.0.0.1:3306";
    $username = "root";
    $password = "";
	$mysql_database = "test";
	
	$tbl_prefix = ""; //***PLANNED FEATURE, LEAVE VALUE BLANK FOR NOW*** Prefix for all database tables
	$tbl_members = $tbl_prefix."members";
	$tbl_attempts = $tbl_prefix."loginAttempts";

} else { //running in Bluemix
    $vcap_services = json_decode($_ENV["VCAP_SERVICES" ]);
    if($vcap_services->{'mysql-5.5'}){ //if "mysql" db service is bound to this application
        $db = $vcap_services->{'mysql-5.5'}[0]->credentials;
    } 
    else if($vcap_services->{'cleardb'}){ //if cleardb mysql db service is bound to this application
        $db = $vcap_services->{'cleardb'}[0]->credentials;
    } 
    else { 
        echo "Error: No suitable MySQL database bound to the application. <br>";
        die();
    }
    $mysql_database = $db->name;
    $mysql_port=$db->port;
    $host =$db->hostname . ':' . $db->port;
    $username = $db->username; 
	$password = $db->password;
	
	$tbl_prefix = ""; //***PLANNED FEATURE, LEAVE VALUE BLANK FOR NOW*** Prefix for all database tables
	$tbl_members = $tbl_prefix."members";
	$tbl_attempts = $tbl_prefix."loginAttempts";
}
//echo "Debug: " . $host . " " .  $username . " " .  $password . "\n";
/*
$mysqli = new mysqli($host, $username, $password, $mysql_database);
if ($mysqli->connect_errno) {
    echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
    die();
}
*/
?>