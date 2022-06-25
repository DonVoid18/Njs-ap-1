import express from "express"
import {dirname, join} from "path"
import { fileURLToPath } from "url"
import routers from "./routers/index.js"

const app = express()

// configuración del server
const __dirname = dirname(fileURLToPath(import.meta.url))
app.set("views", join(__dirname,"views"))
app.set("view engine", "ejs")

// router
app.use(routers)
app.use(express.static(join(__dirname, "public")))

app.listen(process.env.PORT || 3000)