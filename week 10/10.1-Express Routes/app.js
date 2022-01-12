const express = require("express");
const app = express();
const numbers = [1, 2, 3, 4, 5];

app.get("/", (req, res) => {
  res.send("get request is success.");
});

app.listen(3003, () => {
  console.log("Server is up on port 3003");
});
app.use(express.json());

app.get("/numbers", (req, res) => {
  res.send(numbers);
});

app.post("/numbers", (req, res) => {
  const num = Number(req.body.number);
  if (numbers.includes(num)) {
    return res.status(400).send({ error: "Number already exist" });
  } else {
    numbers.push(num);
    res.status(201).send(numbers);
  }
  //target from body postman the number and pushes to the array numbers.
  //best practice is to send the object you created back
});

app.delete("/numbers/:number/", (req, res) => {
  const number = Number(req.params.number);
  if (!numbers.includes(number)) {
    res.status(400).send("number doesnt exits");
  } else {
    const index = numbers.indexOf(number);
    numbers.splice(index, 1); //splice changes the original array(self reminder)
    res.send(numbers);
  }
});

app.put("/numbers/:number", (req, res) => {
  const number = Number(req.params.number);
  const newNumber = Number(req.body.number);
  if (!numbers.includes(number)) {
    res.status(400).send("number does not exist");
  } else {
    const index = numbers.indexOf(number);
    numbers.splice(index, 1, newNumber);
    res.send(numbers);
  }
  //target from body postman the number and pushes to the array numbers.
  //best practice is to send the object you created back
});
