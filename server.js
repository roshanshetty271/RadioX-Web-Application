import express from 'express'
import initialize from './backend/app/app.js'

const app = express()
const port = 8000
initialize(app)
app.listen(port, () => console.log(`Server is listening at port ${port}`))
