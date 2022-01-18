//CRUD
const mongodb = require("mongodb");
const { MongoClient, ObjectID } = require("mongodb");

// const MongoClient = mongodb.MongoClient;

connectionURL = "mongodb://127.0.0.1:27017";
const database = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database");
    }
    const db = client.db(database);

    db.collection("users").createIndex({ email: 1 }, { unique: true });

    db.collection("users").insertMany(
      [
        { name: "Tal", email: "talwind1@gmail.com" },
        { name: "Lior", email: "liorWind2000@gmail.com" },
      ],
      (error, result) => {
        if (error) return console.log("Unable to add docs");
      }
    );
    db.collection("comments").insertMany([
      {
        userId: ObjectID("61e6bc13e59a5019ad3361f0"),
        postId: ObjectID("61e6bc13e59a5019ad3361ef"),
        content:
          "Hi Tal, I'm hiring for junior web dev at Google, sounds like it can be a great fit",
      },
      {
        userId: ObjectID("61e6bc13e59a5019ad3361f0"),
        postId: ObjectID("61e6f7e863a9f27d385ade27"),
        content:
          "Hi Lior, I recommend you to discover new places in the north of Israel, working in Kibutz education stuff, sounds like the best practice for you at the time",
      },
    ]);
    db.collection("posts").insertMany(
      [
        {
          writer: ObjectID("61e6bc13e59a5019ad3361ef"),
          content:
            "Hi! I'm looking for my first junior position, please let me know if you're hiring. I know very well React, Js, Css and Html, also node.js and mongodb for backend programing!",
          date: new Date("2022-02-20"),
          comments: [ObjectID("61e704ca955d1ca06dbf8841")],
        },
        {
          writer: ObjectID("61e6bc13e59a5019ad3361f0"),
          content:
            "Looking for my next adventure in Israel, looking for a nice and fun place to earn money and be independant.",
          date: new Date("2022-02-02"),
          comments: [ObjectID("61e705324776135389925819")],
        },
      ],
      (error, result) => {
        if (error) return console.log("Unable to add docs");
      }
    );
    console.log("Connected correctly!");
  }
);
