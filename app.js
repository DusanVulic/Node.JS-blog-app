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
    //
    //res.send("<p>Home page</p>");

    // a mogu da saljem i fajlove
    //ali moram da kazem odakle dolazi taj fajl
    res.sendFile("./views/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
    res.sendFile("./views/about.html", { root: __dirname });
});

// redirektovanje
app.get("/about-us", (req, res) => {
    res.redirect("/about");
});

// 404
//mora ici na dno fajla
app.use((req, res) => {
    res.status(404).sendFile("./views/error.html", { root: __dirname });
});