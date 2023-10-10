const express = require("express");
const app = express();
const person = require("./person")

app.use(express.json())

app.get("/", (req, res) => {
    res.status(200).send(person)
})
app.post("/", (req, res) => {
    res.status(200).send(person)
})

module.exports = app