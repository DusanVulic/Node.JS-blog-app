console.log("starter created");

const express = require("express");

const app = express();

/// initialization of a mongoose
const mongoose = require("mongoose");

//
const blogRoutes = require("./routes/blogRoutes");
//IMPORTING MODEL
const BLog = require("./models/blog.js");

//register / connect with database
// const dbURI =
//     "HERE WAS PROPERTY THAT I MOVED INTO THE .env file;

///
require("dotenv").config();

mongoose
    .connect(process.env.MONGO_URI)
    .then((result) =>
        app.listen(3000, () => {
            "user hit the port 3000...";
        })
    )
    .catch((error) => console.log(error));

///

///  register view engine :

app.set("view engine", "ejs");

///

//listen for requests
// untill I add mongoose
// than I add it to the DB connection

// app.listen(3000, () => {
//     "user hit the port 3000...";
// });

//middleware for static

app.use(express.static("public"));
// end of middleware static

app.use((req, res, next) => {
    console.log("new request made");
    // with next app use says ok, we are finished so move one
    next();
});

//middleware
app.use(express.urlencoded({ extended: true }));

///mongo and mongoose sandbox -testing !!!!!

// //creating new blog test
// app.get("/add-blog", (req, res) => {
//     const blog = new BLog({
//         title: "new blog 222",
//         snippet: " about my new blog",
//         body: "more stuf about my new blog",
//     });

//     blog
//         .save()
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((error) => console.log(error));
// });

// //get all blogs test
// app.get("/all-blogs", (req, res) => {
//     Blog.find()
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((error) => console.log(error));
// });

// app.get("/single-blog", (req, res) => {
//     Blog.findById("62d5307f4bd28702948a7673")
//         .then((result) => res.send(result))
//         .catch((error) => console.log(error));
// });

// ////// END OF TESTS !!!!!!

///ROUTES
app.get("/", (req, res) => {
    res.redirect("/blogs");
});

app.get("/about", (req, res) => {
    res.render("about", { title: "About" });
});

//// blog routes

app.use("/blogs", blogRoutes);

app.use((req, res) => {
    res.status(404).render("404", { title: "error page" });
});