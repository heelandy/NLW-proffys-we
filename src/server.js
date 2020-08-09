const express = require('express')
const server = express()

server.use(express.static("public"))

.get("/home/heel/Programa/projectweb/", (req, res)=>{
 return res.sendFile(__dirname + "/home/heel/Programa/projectweb/view/index.html")
})
.get("/home/heel/Programa/projectweb/study" , (req, res) => {
    return res.sendFile(__dirname + "/home/heel/Programa/projectweb/view/study.html")
})
.get("/home/heel/Programa/projectweb/page-give-class" , (req, res) => {
    return res.sendFile(__dirname + "/home/heel/Programa/projectweb/view/study.html")
})
.listen(5500)
