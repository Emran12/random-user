const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
const dbConnect = require("./utils/dbConnect");
const toolsRoutes = require("./routes/v1/tools.route.js");
const viewCount = require("./middlewares/viewCount");
const errorHandler = require("./middlewares/errorHandler");

app.use(cors());
app.use(express.json());

app.use(express.static("public"));
app.set("view engine", "ejs");
// app.use(viewCount);

dbConnect();
app.use("/api/v1/tools", toolsRoutes);

app.get("/", (req, res) => {
  // res.sendFile(__dirname + "/public/test.html");
  res.render("test.ejs", {
    id: 5,
    user: {
      name: "Admin",
    },
  });
});

app.all("*", (req, res) => {
  res.send("No route matched");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.use(errorHandler);

process.on("unhandledRejection", (error) => {
  console.log(error.name, error.message);
  app.close(() => {
    process.exit(1);
  });
});
