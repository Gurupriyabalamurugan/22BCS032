import axios from "axios";

const BASE_URL = "http://20.244.56.144/evaluation-service";
const BEARER_TOKEN = process.env.REACT_APP_BEARER_TOKEN;
export const getStocks = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/stocks`);
    return res.data.stocks;
  } catch (err) {
    console.error("Error fetching stock list", err);
    return {};
  }
};

export const getStockPriceHistory = async (symbol, minutes = 50) => {
  try {
    const res = await axios.get(`${BASE_URL}/stocks/${symbol}?minutes=${minutes}`);
    return res.data;
  } catch (err) {
    console.error("Error fetching stock prices", err);
    return [];
  }
};
