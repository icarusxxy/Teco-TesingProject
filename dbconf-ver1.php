<?php
//DATABASE CONNECTION VARIABLES
$host = "us-cdbr-sl-dfw-01.cleardb.net:3306"; // Host name
$username = "becc67dbe2e9de"; // Mysql username
$password = "0c0d8b25"; // Mysql password
$db_name = "ibmx_80fcd83e07579cf"; // Database name

//DO NOT CHANGE BELOW THIS LINE UNLESS YOU CHANGE THE NAMES OF THE MEMBERS AND LOGINATTEMPTS TABLES

$tbl_prefix = ""; //***PLANNED FEATURE, LEAVE VALUE BLANK FOR NOW*** Prefix for all database tables
$tbl_members = $tbl_prefix."members";
$tbl_attempts = $tbl_prefix."loginAttempts";
