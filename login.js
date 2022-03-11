
function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var submit = document.querySelector(".submit")
    if (username == "admin" && password == "admin123") {
        alert("Login Successfull");
        document.getElementById("form_id").action="home.html";
        return false;
    }
    else {
        alert("Login Failed")
        document.getElementById("form_id").action="";
    }
}