const express = require('express');
const connectDb = require('./config/db');

const app = express();

// Connect Database
connectDb();

app.use(express.json({ extended : false }));

app.get('/', (req, res) => res.send('Hello'));

// Route
app.use('/api/distance', require('./routes/distance'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on : ${PORT}`)); 