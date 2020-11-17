function setup() {
    var user = JSON.parse(localStorage.getItem('userCurrent'));
    document.getElementById('userNameCurrent').innerHTML = user.username;
    document.getElementById('NameCurrent').innerHTML = user.name;
}