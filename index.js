const dotenv = require("dotenv").config()
const express = require("express")
const app = express()
const server = require('./api/server');
const port = process.env.PORT || 1245
// const path = require("path")

app.use("/api/users/:id", (_,res) => {
    res.json({data: "users information"})
})

// START YOUR SERVER HERE
server.listen(port, () => {
    console.log(`Running on port ${port}`)
}) 