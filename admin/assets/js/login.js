var listAccount = [];

function login() {
    listAccount = getListAccountFromLS();
    var username = document.getElementById('name').value;
    var password = document.getElementById('password').value;
    //console.log(username.value + password.value);
    var length = listAccount.length;
    for (var i = 0; i < length; i++) {
        if (listAccount[i].username == username && listAccount[i].password == password) {
            console.log('đăng nhập thành công vói tài khoản ' + username);
            window.location = 'dashboard.html';
            localStorage.setItem('userCurrent', JSON.stringify(listAccount[i]));
            break;
        } else {

            console.log('tài khoản mật khẩu không chính xác !');
        }
    }
}

function getListAccountFromLS() {
    var resutl = [];
    resutl = JSON.parse(localStorage.getItem('listAccount'));
    //console.log(resutl);
    return resutl;
}