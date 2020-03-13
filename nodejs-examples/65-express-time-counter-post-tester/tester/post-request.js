const axios = require('axios');

axios.default.post('http://localhost:3000/counter', { value: -5 })
  .then(({ data }) => console.log(data));


// curl -d '{"value":55}' -H "Content-Type: application/json" -X POST http://localhost:3000/counter
