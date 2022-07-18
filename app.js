console.log("starter created");

const express = require("express");

const app = express();

//register with database

const dbURI =
    "mongodb+srv://dukadizel:test1234@nodeexpressprojects.xowmjvz.mongodb.net/?retryWrites=true&w=majority";

///  register view engine :

app.set("view engine", "ejs");

///

//listen for requests

app.listen(3000, () => {
    "user hit the port 3000...";
});

//middleware for static

app.use(express.static("public"));
// end of middleware static

app.use((req, res, next) => {
    console.log("new request made");
    // with next app use says ok, we are finished so move one
    next();
});

app.get("/", (req, res) => {
    const blogs = [
        { title: "bagzi bi da jede ", snippet: "lorem ipsum dolor sit amet" },
        { title: "dusan bi da trenira ", snippet: "lorem ipsum dolor sit amet" },
        { title: "bagzi bi u setnju ", snippet: "lorem ipsum dolor sit amet" },
    ];
    //adding dinamic values to the ejs pages
    res.render("index", { title: "Home", blogs });
});

app.get("/about", (req, res) => {
    res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
    res.render("create", { title: "create new blog" });
});

app.use((req, res) => {
    res.status(404).render("404", { title: "error page" });
});