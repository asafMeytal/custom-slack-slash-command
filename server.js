var express = require ('express');
var bodyParser = require ('body-parser');
var getInfo = require('./zd_api');
var request = require('sync-request');
var app = express();
var port = 8080;

app.use(bodyParser.urlencoded({extended:true}));


app.post ("/",function  (req,res){
    res.sendStatus = 200;
    res.setHeader ('Content-Type','application/json');
    res.json({"text": "Getting your information ready..."});
    res.end();
    let respone_url = req.body.response_url;
    var case_num = req.body.text;
    var tempResult = getInfo(case_num);
    try{
        var result = tempResult.join('\n*** **\n');
        let respone = request ('POST',respone_url,{
            json: {"text": result}
        })
    }
    catch(e){
        let respone = request ('POST',respone_url,{
            json : {"text":"Are you sure you have entered a valid Zendesk case number? :thinking_face:"}
        }) 
    }
})

app.listen(port, ()=> console.log('running on port '+ port));