import React from "react";
import { Box, Typography } from "@mui/material";
import CorrelationHeatmap from "../components/heatmap";

const HeatmapPage = () => {
  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>
        Correlation Heatmap
      </Typography>
      <CorrelationHeatmap />
    </Box>
  );
};

export default HeatmapPage;
