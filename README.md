# MongoDB Fundamentals

I will recommend you to learn some basic knowledge about Javascript and JSON before this sharing as MongoDB is database about JSON (actually BSON) and we use Javascript to communicate with the database. Below are some guide you may refer to.

### JSON
* https://www.w3schools.com/js/js_json_intro.asp
* https://www.digitalocean.com/community/tutorials/an-introduction-to-json

### Javascript
* https://www.w3schools.com/js/

MongoDB University provide a series of MongoDB online courses for developers and DBAs, you can check below site if you are interesting in it.

* https://university.mongodb.com/courses/catalog

# Requirements

* Install MongoDB Community Edition 3.2 or later.
  <br>https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/
* Install RoboMongo
  <br>https://robomongo.org/
* Download sample database.
  <br>https://raw.githubusercontent.com/mongodb/docs-assets/primer-dataset/primer-dataset.json
* Import sample database using below command.
  The default port is 27017 and you can ignore the `--port` parameter if you are connection to the default port.
  <br>`mongoimport --port <port> --db test --collection restaurants --drop --file primer-dataset.json`

# Content
1. Connect to MongoDB
2. Create collections and documents
3. Read operations
4. Update operations
5. Delete operations
6. Aggregation Framework
7. pymongo: Manipulate MongoDB with Python

## Connect to MongoDB

This can be done by two approaches, Mongo shell or Robomongo GUI.

### Mongo Shell
The default port is 27017 and you can ignore the `--port` parameter if you are connection to the default port.
<br>`mongo --port <port>`
Show databases availble on server.
<br>`show dbs`
Switch to a specific database.
<br>`use <database>`
Show collections, tables in SQL Server, in the database.
<br>`show tables` or `show collections`
Select one record from a collection
<br>`db.<collection>.findOne()`

### Robomongo
Open Robomongo and click **Create** to open a new MongoDB connection. If you are using the default configuration for your MongoDB, just give the connection a name.
Click **Test** to check whether the connection is successful. Make sure your mongod is running when you do this.
Click **Save** and you will be connected to the database.
Double Click your database and choose the collection you want to check. A new window will occur with a command window and all documents in the collection.
In the shell command, you can run any command as Robomongo has a full featured shell as the original Mongo shell. There may be some commands that you can run but it will not return the result, such as explan command that returning the explain plan of one query.

## Create collections and documents
## Read operations
## Update operations
## Delete operations
## Aggregation Framework
## pymongo: Manipulate MongoDB with Python
