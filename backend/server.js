const express = require('express');

const app = express();

app.use(express.static('frontend'));

const port = process.env.port || 4000;

app.listen(port, () => console.log(`Server listenning on port ${port}`));
