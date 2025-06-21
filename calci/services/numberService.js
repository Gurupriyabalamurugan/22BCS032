const axios = require('axios');

const URLS = {
  p: "http://20.244.56.144/evaluation-service/primes",
  f: "http://20.244.56.144/evaluation-service/fibo",
  e: "http://20.244.56.144/evaluation-service/even",
  r: "http://20.244.56.144/evaluation-service/rand"
};

async function fetchNumbersByType(type) {
  const url = URLS[type];
  if (!url) return [];

  try {
    const response = await Promise.race([
      axios.get(url),
      new Promise((_, reject) => setTimeout(() => reject(new Error("Timeout")), 500))
    ]);
    return response.data.numbers || [];
  } catch (error) {
    return []; // on timeout or error
  }
}

module.exports = {
  fetchNumbersByType
};
