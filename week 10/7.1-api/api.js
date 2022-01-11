//part1
const axios = require("axios");

const fetch = async () => {
  const { data } = await axios.get(
    "https://geek-jokes.sameerkumar.website/api?format=json"
  );
  console.log(data.joke);
};

//fetch();

//part 2

// const request = require("request");

// const url = "https://geek-jokes.sameerkumar.website/api?format=json";

// request({ url: url }, (error, response) => {
//   if (error) {
//     console.log("error");
//   } else {
//     const data = JSON.parse(response.body);
//     console.log(data.joke);
//   }
// });

// part 3
const got = require("got");

import got from "got";
const handleGot = async () => {
  const res = await got.get(
    "https://geek-jokes.sameerkumar.website/api?format=json"
  );
  console.log(JSON.parse(res.body).joke);
};
handleGot();
