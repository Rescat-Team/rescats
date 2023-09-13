const express = require('express');
const app = express();
const router = require('./router');

const PORT = process.env.PORT || 3000;

app.use(express.static('client/dist')); // serve up the static files like index.html
app.use('/', router)

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});