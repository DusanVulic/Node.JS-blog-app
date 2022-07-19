const express = require("express");

const router = express.Router();

const Blog = require("../models/blog");

router.get("/", (req, res) => {
    Blog.find()
        .sort({ createdAt: -1 })
        .then((result) => {
            res.render("index", { title: "all blogs", blogs: result });
        })
        .catch((error) => console.log(error));
});
router.post("/", (req, res) => {
    const blog = new Blog(req.body);
    blog
        .save()
        .then((result) => {
            res.redirect("/");
        })
        .catch((error) => console.log(error));
});
//
router.get("/create", (req, res) => {
    res.render("create", { title: "create new blog" });
});

//
router.get("/:id", (req, res) => {
    const id = req.params.id;

    Blog.findById(id)
        .then((result) => {
            res.render("details", { blog: result, title: " blog details" });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
        .then((result) => {
            res.json({ redirect: "/blogs" });
        })
        .catch((error) => console.log(error));
});

module.exports = router;