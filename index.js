const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

//configuring env variables for dev environment
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

app.use(express.json());

//connect to databate
require("./config/dbConnection")();

//integrating book routes
app.use("/api/book", require("./routes/book"));

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
