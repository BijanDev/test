const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send("Hello world Bijan");
})

app.get('/api', (req, res) => {
    res.send("it run publicly");
})

app.listen(PORT, () => {
    console.log("Server is running on PORT 5000");
})