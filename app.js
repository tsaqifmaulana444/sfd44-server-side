import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import menuRoute from "./routes/menu.js"


const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use("/menus", menuRoute)

app.listen(8000, () => console.log("Server Running At Port 8000"))