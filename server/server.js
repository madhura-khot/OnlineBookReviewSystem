const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());
app.get('/', (req, res) => res.send('API Running'));
app.listen(5000, () => console.log('Server started on port 5000'));