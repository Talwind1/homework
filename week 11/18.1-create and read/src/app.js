const express = require("express"); //connect to postman , with client

require("./db/mongoose");

const app = express();
const productsRoute = require("./routes/products.route");

const port = 5000;

  app.use(express.json());
app.use(productsRoute);

app.listen(port, () => {
  console.log("Server is on port" + port);
});
