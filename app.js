const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get('/api', (req, res) => {
    res.json("Hello World");
})

app.listen(PORT, () => {
    console.log("Server is running on PORT 5000");
})