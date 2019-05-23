const request = require ('sync-request');

function getAuthor (author_id){
    var login_user = ('asaf.meytal@takipi.com/token');
    var login_pass = ('67M**');
    var auth = "Basic " +new Buffer.from(login_user + ":"+ login_pass).toString("base64");
    var url ="https://takipi.zendesk.com/api/v2/users/"+author_id+".json";
    var res = request ('GET',url, {
        headers: {
            "Authorization" : auth
        }
    })
    obj = JSON.parse(res.getBody().toString());
    result = obj.user.name;
    return result
}

module.exports = getAuthor

