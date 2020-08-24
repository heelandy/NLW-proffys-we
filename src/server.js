const proffys =[
    { name:"Diego Fernadez",
     avatar:"", 
     whatsapp:"659974669",
     bio:"Entusiasta das melhores technologia de quimica avencada",
     subject:"Quimica",
     cost:"20",
     weekday:[0],
     time_from:[ 720 ],
     time_to:[1220]
            
    }
    ]   

const subjects = [
    
    "Artes",
    "Biologia",
    "Educacao Fisica",
    "Fisica",
    "Geografia",
    "Historia",
    "Matematica",
    "Portugues",
    "Quimica", 
] 

const weekdays = [
 "Domingo",
 "Segunda",
 "Terca",
 "Quarta",
 "Quinta",
"sexta",
"Sabado",
]




const express = require('express')
const server = express()

function getSubject(subjectNumber){
     const position = +subjectNumber -1
    return subjects[position]
}


function pageLanding(req, res) {
    return res.render("index.html")
}


function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", {proffys, filters, subjects, weekdays})
}


function pageGiveClass(req, res) {
    const data = req.query 
    
     const isNotEmpty = Object.keys(data).length !=0
      
     if (isNotEmpty) {
        data.subject = getSubject(data.subject)

        proffys.push(dados)
        res.redirect("/study")
      } 
    res.render("page-give-class.html", {subjects, weekdays})
}

//configurando o nunjucks (template engine)
const nunjucks = require('nunjucks') 
nunjucks.configure("src/view", {
    express: server,
    noCache:true,
})

// configurar arquivos estaticos css
server.use(express.static("public"))
//rotas da applicaÇão
.get("/", pageLanding)
.get("/study" ,pageStudy)
.get("/page-give-class" ,pageGiveClass)
.listen(5000)

