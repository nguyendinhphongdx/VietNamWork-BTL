var listCustumer = JSON.parse(localStorage.getItem('listCustumer'));

function setup() {
    if (listCustumer == null || listCustumer.length == 0) {
        alert('Không có thông tin khách hàng');
    } else {

    }
}

function login() {
    var istrue = false;
    if (listCustumer == null || listCustumer.length == 0) {
        alert('Không có thông tin khách hàng');
        var username = document.getElementById('name').value;
        var password = document.getElementById('password').value;
        console.log(username+password);
    } else {
        var username = document.getElementById('name').value;
        var password = document.getElementById('password').value;
        for (var custumer of listCustumer) {
            if (custumer.username == username && custumer.password == password) {
                localStorage.setItem('currentCustumer', JSON.stringify(custumer));
                window.location = 'Index'; 
                istrue = true;
            } 
        }
        if (istrue == false) {
            console.log('tài khoản hoặc mật khẩu không chính xác!');
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