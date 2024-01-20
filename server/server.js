const express = require('express')
const app = express()
const port = 3000
const index = require("./UserData-Api")
const auth = require("./google-auth")
const cors = require("cors")
app.use(cors("http://localhost:5173/"))
//middelwares
app.use(index)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)})



 