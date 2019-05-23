const request = require ('sync-request');
const getAuthor = require ('./getAuthor');


function getInfo (caseNumber) {
    try {
        var login_user = ('asaf.meytal@takipi.com/token');
        var login_pass = ('67My**');
        var auth = "Basic " +new Buffer.from(login_user + ":"+ login_pass).toString("base64");
        var url ="https://takipi.zendesk.com/api/v2/tickets/"+caseNumber+"/comments.json?sort_order=desc";
        var res = request ('GET',url, {
            headers: {
                "Authorization" : auth
            }
        })
        var i;
        var temp =Array();
        let obj = JSON.parse(res.getBody().toString());
        for (i = 0;i<4;i++){
            author_id = obj.comments[i].author_id;
            author_name = getAuthor (author_id);
            if (obj.comments[i].public === true){
                temp.push("From: "+author_name+"\nUpdated at: "+ obj.comments[i].created_at + "\n\n"+obj.comments[i].body);
            } else {
                temp.push ("**INTERNAL REPLY** \nUpdated at: "+ obj.comments[i].created_at + "\n\n"+obj.comments[i].body);
            }
        }
        return (temp);
    }
    catch(error){
        console.error(caseNumber+' Is not a valid Zendesk number - operation will fail.');
        return
    }
}


module.exports = getInfo

