# TECO IAQ SYSTEM #

## 1. Structure ##
__In bluemix there's 3 main project (by now)__

1. TECO-IAQ
	* Node-Red
		- the area to deploy system flow
		- connecting the *TECO-IAQ-cloudantNoSQLDB* service
	* Freeboard
		- the main dashboard function
2. teco-test001
	* the current dashboard view (in .html files, includes freeboard inside[using iframe])
3. teco-phptest001
	* php-mysql server (not yet complete)
	* connecting the *php-mysql-db* service, which is host on CleanDB, could be manage by local machine with software like MySQL Workbench.
		- click into teco-phptest001 project, select "Connections" on the left panel, it shows the DB we're connecting, "View credentials" have the info we need to set in MySQL Workbench (might also be needed when coding the login/member function).

beside the main project, the member DB(in *php-mysql-db*)'s schema is as below:
- id (auto increment)
- username
- password
- email
- group (which organization/company)
- auth (the authentication level, to decide which content to be shown)
- verified (active/disable...etc.)

## 2. Current Status ##
the main task now is to fulfill the member system, and **fork the teco-test001's dashborad into the php server**. to do so, we need to successfully **build a member system on bluemix** first.

there's 2 ways to achieves the goal:
1. [deploy a functional php-mysql server on bluemix, then add the login/member function](https://www.ibm.com/blogs/bluemix/2015/08/simple-php-mysql-application/)
2. [porting a complete login/member system onto bluemix and connect it to could DB](https://github.com/fethica/PHP-Login) 

i'm trying to combine the two: use the first's connection ability and use the second's system, but didn't figured out yet.

you'll also need to know how to deploy local files onto bluemix, this part is relevantly easy, you can [take a look at here](http://how-to-host-static-sites-on.mybluemix.net/).

the second template is a fully functional solution(once we had it run), but takes some time to configure, i've config some files( _/login/dbconf.php_ & _/login/config.php_ ) but struggling on the MySQL part. i've attached the altered files, but which still didn't workout yet.

## 3. Future Features ##

after completing the member function _AND_ deploy on bluemix, the next step is to create different dashboard view for different users (according to their _group_ and _auth_ [defined in the _member_ table]), this part required the mqtt data to declare which byte contain the information.

the final goal is to create a control/backend dashboard for the sysadmins, which may could be done in the Node-Red's [built-in UI](teco-iaq.mybluemix.net/ui).