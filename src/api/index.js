import api from "./api.js";
export default {
  login: (req, callback) => {
    console.log(req);
    return api.get(
      "https://jsonplaceholder.typicode.com/posts/1",
      req,
      callback
    );
  }
};
