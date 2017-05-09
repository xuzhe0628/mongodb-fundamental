# MongoDB Fundamentals

I will recommend you to learn some basic knowledge about Javascript and JSON before this sharing as MongoDB is database about JSON (actually BSON) and we use Javascript to communicate with the database. Below are some guide you may refer to.

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

### JSON
* https://www.w3schools.com/js/js_json_intro.asp
* https://www.digitalocean.com/community/tutorials/an-introduction-to-json

### Javascript
* https://www.w3schools.com/js/

# Content
1. Connect to MongoDB
2. Create collections and documents
3. Query documents
4. Update documents
5. Delete documents
6. CRUD by pymongo

## Connect to MongoDB
The default port is 27017 and you can ignore the `--port` parameter if you are connection to the default port.
<br>`mongo --port <port>`
Show databases availble on server.
<br>`show dbs`
Switch to a specific database.
<br>`use <database>`
Show collections, tables in SQL Server, in the database.
<br>`show tables` or `show collections`
