const express = require('express')()
.get("/", (req, res)=>{
 return res.send("Hi form Mars")
}).
listen(5000)