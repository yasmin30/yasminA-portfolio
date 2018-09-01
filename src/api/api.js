import axios from "axios";
const TIMEOUT = { timeout: 0 };
export default {
  post: (url, req, cb, timeout) => {
    console.log(url);
    axios
      .post(url, req, timeout || TIMEOUT)
      .then(function(response) {
        cb(response);
      })
      .catch(function(error) {
        cb(error);
      });
  },
  get: (url, req, cb, timeout) => {
    console.log(url);
    axios
      .get(url, req, timeout || TIMEOUT)
      .then(function(response) {
        cb(response);
      })
      .catch(function(error) {
        cb(error);
      });
  }
};
