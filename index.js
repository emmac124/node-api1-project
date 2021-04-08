require("dotenv").config()
const server = require('./api/server');
const port = process.env.PORT || 1245

// START YOUR SERVER HERE
server.listen(port, () => {
    console.log(`Running on port ${port}`)
}) 