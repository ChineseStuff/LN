const express = require('express');
const app = express();
const cors = require('cors');
const { getArticlesWithTags } = require('./articles');

// Middlewares
app.use(express.json());
app.use(cors());

app.get('/api/articles', getArticlesWithTags);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
