const Blog = require("../models/blog");

// blog_index, blog_details

const blog_index = (req, res) => {
    Blog.find()
        .sort({ createdAt: -1 })
        .then((result) => {
            res.render("index", { title: "all blogs", blogs: result });
        })
        .catch((error) => console.log(error));
};

const blog_details = (req, res) => {
    const id = req.params.id;

    Blog.findById(id)
        .then((result) => {
            res.render("details", { blog: result, title: " blog details" });
        })
        .catch((error) => {
            res.status(404).render("404", { title: "blog not found" });
        });
};

const blog_create_get = (req, res) => {
    res.render("create", { title: "create new blog" });
};

const blog_create_post = (req, res) => {
    const blog = new Blog(req.body);
    blog
        .save()
        .then((result) => {
            res.redirect("/");
        })
        .catch((error) => console.log(error));
};

const blog_delete = (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
        .then((result) => {
            res.json({ redirect: "/blogs" });
        })
        .catch((error) => console.log(error));
};

module.exports = {
    blog_index,
    blog_details,
    blog_create_get,
    blog_create_post,
    blog_delete,
};