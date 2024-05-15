const express = require("express");
const cors = require("cors");
const clientRoutes = require("./routes/clientRoutes");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 8080;

app.use("/clients", clientRoutes);

app.listen(port, () => {});
