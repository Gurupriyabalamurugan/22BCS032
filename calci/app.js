const express = require('express');
const { fetchNumbersByType } = require('./services/numberService');
const { addNumbers, getWindow, getAverage } = require('./utils/windowManager');

const app = express();
const PORT = 9876;

app.get('/numbers/:numberid', async (req, res) => {
  const numberid = req.params.numberid;
  if (!['p', 'f', 'e', 'r'].includes(numberid)) {
    return res.status(400).json({ error: 'Invalid number ID' });
  }

  const prevWindow = getWindow();

  const startTime = Date.now();
  const numbers = await fetchNumbersByType(numberid);
  const duration = Date.now() - startTime;

  if (duration > 500) {
    return res.status(504).json({ error: 'Request to external API timed out' });
  }

  addNumbers(numbers);
  const currWindow = getWindow();

  return res.json({
    windowPrevState: prevWindow,
    windowCurrState: currWindow,
    numbers: numbers,
    avg: getAverage()
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
