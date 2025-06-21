import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
} from "@mui/material";
import StockPage from "./pages/stockpage";
import HeatmapPage from "./pages/heatmappage";

export default function App() {
  return (
    <Router>
      <AppBar position="static" sx={{ bgcolor: "#0D47A1" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            📊 Stock Visualizer
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Price Chart
          </Button>
          <Button color="inherit" component={Link} to="/heatmap">
            Correlation Heatmap
          </Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" sx={{ mt: 5 }}>
        <Routes>
          <Route path="/" element={<StockPage />} />
          <Route path="/heatmap" element={<HeatmapPage />} />
        </Routes>
      </Container>

      <Box mt={5} textAlign="center" color="gray">
        <Typography variant="body2">Made by Gurupriya Balamurugan</Typography>
      </Box>
    </Router>
  );
}
