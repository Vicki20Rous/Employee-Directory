import axios from "axios";

const BASEURL = 'https://randomuser.me/api/?results=100';

export default {
  // Gets all users
  getEmployees: function() {

    return axios.get(BASEURL);
  }
};