require("dotenv").config();
const fs = require("fs");
const path = require("path");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 80;
app.use(compression())
app.set("views", path.join(__dirname, "./public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.listen(PORT, () => {
    console.log("Server running in http://localhost:" + PORT);
});


app.get("/", (req, res) => {
    res.render("index.html");
});