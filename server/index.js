const express = require('express')
const path = require('path')

const app = express()

app.use(express.json())


const port = process.env.PORT || 4545

app.listen(port, () => console.log(`Take us to warp ${port}`))