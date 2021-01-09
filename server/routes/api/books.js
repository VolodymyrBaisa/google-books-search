const router = require("express").Router();
const axios = require("axios");

const Book = require("../../models/book");

router.get("/", (req, res) => {
    Book.find()
        .then((book) => {
            res.json(book);
        })
        .catch((err) => res.json({ error: err }));
});

module.exports = router;
