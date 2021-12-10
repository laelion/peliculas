const express = require("express")
const app = express()

app.set("views engine", "ejs")
app.use(express.static("public"))

app.get("/", function(req, res){
    res.render("index.ejs")
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Conectado ${PORT}`)
})