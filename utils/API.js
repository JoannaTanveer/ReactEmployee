import axios from "axios";
const BASEURL = "https://randomuser.me/api/";


export default {
  initialSeed: function(query) {
    return axios.get(BASEURL + query);
  }
};