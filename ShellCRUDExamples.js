// switch to database test
use test

/************Insert Data*******************/
// create a collection
db.createCollection('NewCollection')

// insert a document into restaurants collection
db.restaurants.insert(
   {
      "address" : {
         "street" : "2 Avenue",
         "zipcode" : "10075",
         "building" : "1480",
         "coord" : [ -73.9557413, 40.7720266 ]
      },
      "borough" : "Manhattan",
      "cuisine" : "Italian",
      "grades" : [
         {
            "date" : ISODate("2014-10-01T00:00:00Z"),
            "grade" : "A",
            "score" : 11
         },
         {
            "date" : ISODate("2014-01-16T00:00:00Z"),
            "grade" : "B",
            "score" : 17
         }
      ],
      "name" : "Vella",
      "restaurant_id" : "41704620"
   }
   
   //
)
/************Find or Query Data************/
// Query for All Documents in a Collection
db.restaurants.find()

// Specify Equality Conditions
// { <field1>: <value1>, <field2>: <value2>, ... }

// Query by a Top Level Field
db.restaurants.find( { "borough": "Manhattan" } )

// Query by a Field in an Embedded Document
db.restaurants.find( { "address.zipcode": "10075" } )

// Query by a Field in an Array
db.restaurants.find( { "grades.grade": "B" } )

// Specify Conditions with Operators
// { <field1>: { <operator1>: <value1> } }

// Greater Than Operator ($gt)
db.restaurants.find( { "grades.score": { $gt: 30 } } )

// Less Than Operator ($lt)
db.restaurants.find( { "grades.score": { $lt: 10 } } )

// Combine Conditions
// Logical AND
db.restaurants.find( { "cuisine": "Italian", "address.zipcode": "10075" } )

// Logical OR
db.restaurants.find(
   { $or: [ { "cuisine": "Italian" }, { "address.zipcode": "10075" } ] }
)

// Sort Query Results
db.restaurants.find().sort( { "borough": 1, "address.zipcode": 1 } )

// Projection
db.restaurants.find( 
    { "cuisine": "Italian", "address.zipcode": "10075" },
    { "name" : 1, "_id": 0 }    
)

/************Update Data*******************/
// Update Top-Level Fields
db.restaurants.update(
    { "name" : "Juni" },
    {
      $set: { "cuisine": "American (New)" },
      $currentDate: { "lastModified": true }
    }
)

// Update an Embedded Field
db.restaurants.update(
  { "restaurant_id" : "41156888" },
  { $set: { "address.street": "East 31st Street" } }
)

// Update Multiple Documents
db.restaurants.update(
  { "address.zipcode": "10016", cuisine: "Other" },
  {
    $set: { cuisine: "Category To Be Determined" },
    $currentDate: { "lastModified": true }
  },
  { multi: true}
)

// Replace a Document
db.restaurants.update(
   { "restaurant_id" : "41704620" },
   {
     "name" : "Vella 2",
     "address" : {
              "coord" : [ -73.9557413, 40.7720266 ],
              "building" : "1480",
              "street" : "2 Avenue",
              "zipcode" : "10075"
     }
   }
)

/************Remove Data*******************/
// Remove All Documents That Match a Condition
db.restaurants.remove( { "borough": "Manhattan" } )

// Use the justOne Option
db.restaurants.remove( { "borough": "Queens" }, { justOne: true } )

// WriteResult({ "nRemoved" : 1 })
WriteResult({ "nRemoved" : 1 })

// Remove All Documents
db.restaurants.remove( { } )

// Drop a Collection
db.restaurants.drop()

/************Data Aggregation**************/
// db.collection.aggregate( [ <stage1>, <stage2>, ... ] )
// Group Documents by a Field and Calculate Count
db.restaurants.aggregate(
   [
     { $group: { "_id": "$borough", "count": { $sum: 1 } } }
   ]
);

// Filter and Group Documents
db.restaurants.aggregate(
   [
     { $match: { "borough": "Queens", "cuisine": "Brazilian" } },
     { $group: { "_id": "$address.zipcode" , "count": { $sum: 1 } } }
   ]
);