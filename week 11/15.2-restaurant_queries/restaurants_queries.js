// 1.1 db.restaurants.find().pretty()
// 1.2 db.restaurants.find({cuisine: "asian"})
// 1.3 db.restaurants.find({kosher: true})
//  1.4 db.restaurants.find({"address.city" : {$in :["Holon", "Tel Aviv"]}})
// 1.5 db.restaurants.find({name: "thailand paradise"},{address:1})
// 1.6 db.restaurants.find({name: "thailand paradise"},{"address.coordinates":1})
// 1.7 db.restaurants.find().sort({name:1})
// 1.8 db.restaurants.find().sort({"address.city":-1})
// 1.9 db.restaurants.updateOne({"name":"thailand paradise"},{$set:{"name":"thailand home"}})
// 2.10 db.restaurants.updateOne({"name": "thailand home"}, {$push:{"reviews": {"date": new Date("1993-01-06"), "score":1}}})
// 2.11db.restaurants.updateMany({}, {$set:{"kosher":true}})
// 2.12 db.restaurants.deleteOne({"name":"bombay"})
// 2.13 db.restaurants.deleteMany({})

// 2.1 db.restaurants.find().forEach( function(myDoc) {print (myDoc.name)})
// 2.2 db.restaurants.find().forEach( function(myDoc) {print (myDoc.address.city)})
// 2.3 db.restaurants.find().forEach( function(myDoc) {print (myDoc.address.coordinates)})

// 3.1 db.restaurants.find({name: /^c/})
// 3.2 db.restaurants.count()
// 3.3  ???
// db.restaurants.find({ "reviews.date" : { "$gte" : new Date("2016-01-01") }

// 4.1 db.restarants.aggregate([{ $group {$avg: "reviews.score"}}])
