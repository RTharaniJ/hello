let http = require("http")
let express = require('express')
let mongodb = require('mongodb')
const serveStatic = require("serve-static")
let myApp =http.createServer

let app = express()
let db

let dbString = 'mongodb+srv://assessment:<12345678abc>@cluster0.dfhhp.mongodb.net/dpMyApp?retryWrites=true&w=majority'
mongo.connect(a,{useNewUr1Parser:true}, function(err,client){
    db = client.db()
})



app.listen(3000)
app.post('/creat-item', function(req, resz){
    db.collection('Resume'). insertOne({text:req.body.item})
    })
