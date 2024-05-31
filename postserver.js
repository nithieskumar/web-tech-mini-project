var http=require('http');
var querystring=require('querystring');
var qs, name, email,password,rollno,confirm_password;
http.createServer (function(req, res) {
var datal= '';
req.on('data', function (chunk) {
console.log(chunk);
datal += chunk;
console.log("Data in String format: "+datal);
});
req.on('end', function() {
qs=querystring.parse(datal);
console.log(qs);
name=qs['username'];
rollno=qs['rollno'];
email=qs['email'];
password=qs['password'];
confirm_password=qs['cpassword'];
res.write("USER_NAME: "+name+'\n');
res.write("USER_ROLL: "+rollno+'\n');
res.write("USER_EMAIL: "+email+'\n');
res.write("PASSWORD: "+password+'\n');
res.write("USER_CONFIRM_PASSWORD: "+confirm_password+'\n');
res.end();              
});
}).listen(7777);
console.log("Server started");