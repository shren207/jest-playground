const axios = require("axios");
const API_ENDPOINT = "https://jsonplaceholder.typicode.com";
const data = require("./data");

module.exports = {
  findAll() {
    return data.users;
  },
  findOne(id) {
    return axios
      .get(`${API_ENDPOINT}/users/${id}`)
      .then((response) => response.data);
  },
  create(user) {
    data.users.push(user);
  },
  destroy(id) {
    data.users.splice(
      data.users.findIndex((user) => user.id === id),
      1
    );
  },
  update(id, user) {
    data.users[data.users.findIndex((user) => user.id === id)] = user;
  },
};
