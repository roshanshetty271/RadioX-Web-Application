import express from "express";
import initialize from "./app/app.js";

const app = express()
const port = 4000
initialize(app)
app.listen(4000, () => console.log(`Server is listening at port ${port}`))