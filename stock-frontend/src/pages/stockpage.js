import React, { useEffect, useState } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";
import { getStocks } from "../api/stockapi";
import StockChart from "../components/stock";

const mockStocks = {
  Apple: "AAPL",
  Google: "GOOGL",
  Amazon: "AMZN",
  Microsoft: "MSFT",
  Tesla: "TSLA"
};

const StockPage = () => {
  const [stocks, setStocks] = useState({});
  const [selected, setSelected] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const stockList = await getStocks();
      // If API fails, fallback to mock
      setStocks(Object.keys(stockList || {}).length > 0 ? stockList : mockStocks);
    };
    fetch();
  }, []);

  const handleSelect = (e) => {
    const stock = e.target.value;
    setSelected(stock);

    // Generate mock price data
    const mock = Array.from({ length: 10 }, (_, i) => ({
      time: `T${i + 1}`,
      price: Math.random() * 100 + 50,
    }));
    setData(mock);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        📈 Select a Stock to View Its Price Trend
      </Typography>

      <FormControl fullWidth sx={{ my: 3 }}>
        <InputLabel>Select Stock</InputLabel>
        <Select value={selected} onChange={handleSelect} label="Select Stock">
          {Object.entries(stocks).map(([name, symbol]) => (
            <MenuItem key={symbol} value={symbol}>
              {name} ({symbol})
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {data.length > 0 && <StockChart data={data} />}
    </Box>
  );
};

export default StockPage;
