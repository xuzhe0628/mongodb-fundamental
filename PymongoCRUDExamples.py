# Import pymongo
from pymongo import MongoClient

'''***************Connect to MongoDB**************'''

# Create a Connection
client = MongoClient()
client = MongoClient("mongodb://localhost:27018")

# Access Database Objects
db = client.test 
# or use db = client['primer']

# Access Collection Objects
db.restaruants
# or db['dataset']

'''***************Insert Data*********************'''
# Insert a Document
from datetime import datetime

result = db.restaurants.insert_one(
    {
        "address": {
            "street": "2 Avenue",
            "zipcode": "10075",
            "building": "1480",
            "coord": [-73.9557413, 40.7720266]
        },
        "borough": "Manhattan",
        "cuisine": "Italian",
        "grades": [
            {
                "date": datetime.strptime("2014-10-01", "%Y-%m-%d"),
                "grade": "A",
                "score": 11
            },
            {
                "date": datetime.strptime("2014-01-16", "%Y-%m-%d"),
                "grade": "B",
                "score": 17
            }
        ],
        "name": "Vella",
        "restaurant_id": "41704620"
    }
)

'''***************Find or Query Data**************'''
# Query for All Documents in a Collection
cursor = db.restaurants.find()
    
# Specify Equality Conditions
# Query by a Top Level Field
cursor = db.restaurants.find({"borough": "Manhattan"})
    
# Query by a Field in an Embedded Document
cursor = db.restaurants.find({"address.zipcode": "10075"})
    
# Query by a Field in an Array
cursor = db.restaurants.find({"grades.grade": "B"})
    
# Specify Conditions with Operators
# Greater Than Operator ($gt)
cursor = db.restaurants.find({"grades.score": {"$gt": 30}})

# Less Than Operator ($lt)
cursor = db.restaurants.find({"grades.score": {"$lt": 10}})

# Combine Conditions
cursor = db.restaurants.find({"cuisine": "Italian", "address.zipcode": "10075"})

# Logical OR
cursor = db.restaurants.find(
    {"$or": [{"cuisine": "Italian"}, {"address.zipcode": "10075"}]})
    
# Sort Query Results
cursor = db.restaurants.find().sort([
    ("borough", pymongo.ASCENDING),
    ("address.zipcode", pymongo.ASCENDING)
])

'''***************Update Data*********************'''
# Update Top-Level Fields
result = db.restaurants.update_one(
    {"name": "Juni"},
    {
        "$set": {
            "cuisine": "American (New)"
        },
        "$currentDate": {"lastModified": True}
    }
)

# Update an Embedded Field
result = db.restaurants.update_one(
    {"restaurant_id": "41156888"},
    {"$set": {"address.street": "East 31st Street"}}
)

# Update Multiple Documents
result = db.restaurants.update_many(
    {"address.zipcode": "10016", "cuisine": "Other"},
    {
        "$set": {"cuisine": "Category To Be Determined"},
        "$currentDate": {"lastModified": True}
    }
)

# Replace a Document
result = db.restaurants.replace_one(
    {"restaurant_id": "41704620"},
    {
        "name": "Vella 2",
        "address": {
            "coord": [-73.9557413, 40.7720266],
            "building": "1480",
            "street": "2 Avenue",
            "zipcode": "10075"
        }
    }
) 

'''***************Remove Data*********************'''
# Remove All Documents That Match a Condition
result = db.restaurants.delete_many({"borough": "Manhattan"})

# Remove All Documents
result = db.restaurants.delete_many({})

# Drop a Collection
db.restaurants.drop()

'''***************Data Aggregation****************'''
# Group Documents by a Field and Calculate Count
cursor = db.restaurants.aggregate(
    [
        {"$group": {"_id": "$borough", "count": {"$sum": 1}}}
    ]
)

# Filter and Group Documents
cursor = db.restaurants.aggregate(
    [
        {"$match": {"borough": "Queens", "cuisine": "Brazilian"}},
        {"$group": {"_id": "$address.zipcode", "count": {"$sum": 1}}}
    ]
)