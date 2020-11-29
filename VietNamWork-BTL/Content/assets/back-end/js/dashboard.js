window.addEventListener("load", function (event) {
    var user = JSON.parse(localStorage.getItem('userCurrent'));
    if (user == null) {
        window.location = 'Login';
    }
});
function setup() {
    var user = JSON.parse(localStorage.getItem('userCurrent'));
    if (!user.name == '') {
        document.getElementById('userNameCurrent').innerHTML = user.username;
        document.getElementById('NameCurrent').innerHTML = user.name;
    } else {
        window.location = "Login";
    }
   
}