# MongoDB Fundamentals

I will recommend you to learn some basic knowledge about Javascript and JSON before this sharing as MongoDB is database about JSON (actually BSON) and we use Javascript to communicate with the database. Below are some guide you may refer to.

### JSON
* https://www.w3schools.com/js/js_json_intro.asp
* https://www.digitalocean.com/community/tutorials/an-introduction-to-json

### Javascript
* https://www.w3schools.com/js/

# Requirements

* Install MongoDB Community Edition 3.2 or later.
  <br>https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/
* Install RoboMongo
  <br>https://robomongo.org/
* Download sample database.
  <br>https://raw.githubusercontent.com/mongodb/docs-assets/primer-dataset/primer-dataset.json
* Import sample database using below command. The default port is 27017 and you can ignore the `--port` parameter if you are connection to the default port. This command will import the JSON file into database test as collection restaurants.
  <br>`mongoimport --port <port> --db test --collection restaurants --drop --file primer-dataset.json`
* Optional: Install Python 3.5.1 or later version and pymongo using below command.
  <br>`pip install pymongo`
* All codes used are stored in `ShellCRUDExamples.js` and `PymongoCRUDExamples.py`.

# Content
1. Connect to MongoDB
2. Insert Data
3. Find or Query Data
4. Update Data
5. Remove Data
6. Data Aggregation
7. (Optional) pymongo: Manipulate MongoDB with Python
8. Additional Resources

## Connect to MongoDB

This can be done by two approaches, Mongo shell or Robomongo GUI.

### Mongo Shell
* The default port is 27017 and you can ignore the `--port` parameter if you are connection to the default port. I will use 27018 in this course.
  <br>`mongo --port <port>`
* Show databases availble on server.
  <br>`show dbs`
* Switch to a specific database. I will use test database in this course.
  <br>`use <database>`
* Show collections, tables in SQL Server, in the database. I will use restaurants collection in this course.
  <br>`show tables` or `show collections`
* Select one record from a collection. Please take a look at the document structure.
  <br>`db.restaurants.findOne()`

### Robomongo
* Open Robomongo and click `Create` to open a new MongoDB connection. If you are using the default configuration for your MongoDB, just give the connection a name.
* Click `Test` to check whether the connection is successful. Make sure your mongod is running when you do this.
* Click `Save` and you will be connected to the database.
* Double Click your database and choose the collection you want to check. A new window will occur with a command window and all documents in the collection.
* In the shell command, you can run any command as Robomongo has a full featured shell as the original Mongo shell. Press `Enter` to change line in the command window and `Ctrl+Enter` to run the command.
* There may be some commands that you can run but it will not return the result, such as explan command that returning the explain plan of one query.

# Insert Data
https://docs.mongodb.com/getting-started/shell/update/

# Find or Query Data
https://docs.mongodb.com/getting-started/shell/query/

# Update Data
https://docs.mongodb.com/getting-started/shell/update/

# Remove Data
https://docs.mongodb.com/getting-started/shell/remove/

# Data Aggregation
https://docs.mongodb.com/getting-started/shell/aggregation/

# (Optional) pymongo: Manipulate MongoDB with Python
https://docs.mongodb.com/getting-started/python/

# Additional Resources

### MongoDB University Online Courses
MongoDB University provide a series of MongoDB online courses for developers and DBAs, you can check below site if you are interesting in it.

* Course catalog
  <br>https://university.mongodb.com/courses/catalog
* M101P: MongoDB for Developers
  <br>https://university.mongodb.com/courses/M101P/about
* M102: MongoDB for DBAs
  <br>https://university.mongodb.com/courses/M102/about
  
### MongoDB Manual and Blog

I always believe manual is the best reference. MongoDB blog also has some insightful articles may written by developers and DBAs. Here are some articles that I think will be helpful. Try it.

* MongoDB Manual
  <br>https://docs.mongodb.com/manual/
* SQL to MongoDB Mapping Chart
  <br>https://docs.mongodb.com/manual/reference/sql-comparison/
* 6 Rules of Thumb for MongoDB Schema Design: Part 1
  <br>https://www.mongodb.com/blog/post/6-rules-of-thumb-for-mongodb-schema-design-part-1
* 6 Rules of Thumb for MongoDB Schema Design: Part 2
  <br>https://www.mongodb.com/blog/post/6-rules-of-thumb-for-mongodb-schema-design-part-2
* 6 Rules of Thumb for MongoDB Schema Design: Part 3
  <br>https://www.mongodb.com/blog/post/6-rules-of-thumb-for-mongodb-schema-design-part-3
* Quick Reference Cards (Cheatsheet)
  <br>https://www.mongodb.com/collateral/quick-reference-cards
