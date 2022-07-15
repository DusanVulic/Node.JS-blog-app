console.log("starter created");

const express = require("express");

const app = express();

//listen for requests

app.listen(3000, () => {
    "user hit the port 3000...";
});

app.get("/", (req, res) => {
    //res send salje ono sto zelim da vidim na /
    // res send automatski setuje status 200 i automatski kreira content-type
    res.send("<p>Home page</p>");
});