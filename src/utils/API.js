import axios from "axios";

const BASEURL = "https://dog.ceo/api/";

export default {
  get: function () {
    return axios.get(BASEURL + "/image/random");
  },
  search: function(query) {
    return axios.get(BASEURL + query + "/image/random");
  }
};
