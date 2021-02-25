const fetch = require('node-fetch');

function fetchData(id) {
  return fetch(`https://api.quotable.io/quotes/${id}`)
    .then((response) => response.json())
    .then((data) => (data));
}

module.exports = { fetchData };
