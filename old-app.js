console.log("starter created");

const express = require("express");

const app = express();

///  register view engine :

app.set("view engine", "ejs");

///

//listen for requests

app.listen(3000, () => {
    "user hit the port 3000...";
});

//ovo je stai kod - bez  koriscenja view
// app.get("/", (req, res) => {
//     //res send salje ono sto zelim da vidim na /
//     // res send automatski setuje status 200 i automatski kreira content-type
//     //
//     //res.send("<p>Home page</p>");

//     // a mogu da saljem i fajlove
//     //ali moram da kazem odakle dolazi taj fajl
//     res.sendFile("./views/index.html", { root: __dirname });
// });

//ovo je sa koriscenjem  view
app.get("/", (req, res) => {
    res.render("index");
});

// app.get("/about", (req, res) => {
//     res.sendFile("./views/about.html", { root: __dirname });
// });

//sa view
app.get("/about", (req, res) => {
    res.render("about");
});

// redirektovanje
// app.get("/about-us", (req, res) => {
//     res.redirect("/about");
// });

// 404
//mora ici na dno fajla
// app.use((req, res) => {
//     res.status(404).sendFile("./views/error.html", { root: __dirname });
// });

//sa use view
app.use((req, res) => {
    res.status(404).render("404");
});