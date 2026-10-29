const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>Automated CI/CD Pipeline Deployed Successfully!</h1><p>Status: Healthy & Running</p>');
});

app.listen(port, () => console.log(`Server running on port ${port}`));
