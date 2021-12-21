import axios from "axios";
const KEY = "AIzaSyC5B6_mwmED3HYmAoKqahF2SB9tgAZUIPY";

export default axios.create({
  baseURL: "GET https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
