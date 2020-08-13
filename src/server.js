const express = require('express')
const server = express()

server.use(express.static("public"))

.get("/", (req, res)=>{
 return res.sendFile(__dirname + "/view/index.html")
})
.get("/study" , (req, res) => {
    return res.sendFile(__dirname + "/view/study.html")
})
.get("/page-give-class" , (req, res) => {
    return res.sendFile(__dirname + "/view/page-give-class.html")
})
.listen(5000)

