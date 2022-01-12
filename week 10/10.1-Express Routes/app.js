const express = require("express");
const app = express();
const numbers = [1, 2, 3, 4, 5];

// app.get("/", (req, res) => {
//   res.send("get request is success.");
// });

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
app.use(express.json());

app.get("/numbers", (req, res) => {
  res.send("success using get");
});

app.post("/numbers", (req, res) => {
  res.send("success using post");
});

app.delete("/numbers/", (req, res) => {
  res.send("success using delete");
});

app.put("/numbers/", (req, res) => {
  res.send("success using put");
});
