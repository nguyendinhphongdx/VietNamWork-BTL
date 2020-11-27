var listCustumer = JSON.parse(localStorage.getItem('listCustumer'));

function setup() {
    if (listCustumer == null || listCustumer.length == 0) {
        alert('Không có thông tin khách hàng');
    } else {

    }
}

function login() {
    if (listCustumer == null || listCustumer.length == 0) {
        alert('Không có thông tin khách hàng');
    } else {
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        for (var custumer of listCustumer) {
            console.log(custumer);
            if (custumer.username == username && custumer.password == password) {
                localStorage.setItem('currentCustumer', JSON.stringify(custumer));
                window.location = 'index.html';
                break;
            }
        }
    }

}

function clickSignIn() {
    var btnSignIn = document.getElementById('group-signIn');
    var formSign = document.getElementsByClassName('formSignIn')[0];
    if (formSign.getAttribute('style') == "display: none;") {
        formSign.setAttribute('style', 'display: block;');
    } else {
        formSign.setAttribute('style', 'display: none;');
    }
}