import React from "react";
import { Box, Typography } from "@mui/material";

const sampleStocks = ["Apple", "Google", "Tesla", "Netflix", "Meta"];

const getRandomCorrelation = () => (Math.random() * 2 - 1).toFixed(2);

const CorrelationHeatmap = () => {
  return (
    <Box>
      <Box display="grid" gridTemplateColumns={`repeat(${sampleStocks.length + 1}, 1fr)`} gap={1}>
        <div></div>
        {sampleStocks.map((s, i) => (
          <Typography key={`col-${i}`} align="center" variant="subtitle2">{s}</Typography>
        ))}

        {sampleStocks.map((rowStock, i) => (
          <>
            <Typography key={`row-${i}`} align="center" variant="subtitle2">{rowStock}</Typography>
            {sampleStocks.map((colStock, j) => {
              const value = i === j ? 1 : getRandomCorrelation();
              const bgColor = `rgba(30, 136, 229, ${Math.abs(value)})`;
              return (
                <Box
                  key={`${i}-${j}`}
                  sx={{
                    backgroundColor: bgColor,
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: 40
                  }}
                >
                  {value}
                </Box>
              );
            })}
          </>
        ))}
      </Box>
    </Box>
  );
};

export default CorrelationHeatmap;
