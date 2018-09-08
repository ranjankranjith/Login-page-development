var validate = function(){
    var obj1 = document.getElementById("mobileno").value;
    var obj2 =  document.getElementById("passwd").value;

var url = "https://test.sarci.in:5001/auth/1/login";

var data = {};
data.mobileno = obj1;
data.passwd  = obj2;
var json = JSON.stringify(data);

var xhr = new XMLHttpRequest();
xhr.open("POST", url, true);
xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
xhr.onload = function () {
var users = JSON.parse(xhr.responseText);
if (xhr.readyState == 4 && xhr.status == "201") {
   alert("sdkgf");
        console.log(users);
    }
}
xhr.send(json);

}
