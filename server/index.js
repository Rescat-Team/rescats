const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('client/dist')); // serve up the static files like index.html

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});