// const { url } = require("inspector");
const request = require("request");

const url = "https://geek-jokes.sameerkumar.website/api?format=json";

request({ url: url }, (error, response) => {
  console.log({ response });
});
