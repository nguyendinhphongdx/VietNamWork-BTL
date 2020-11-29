var listAccount = [];
localStorage.removeItem('userCurrent');

function login() {
    var exists = false;
    listAccount = getListAccountFromLS();
    var username = document.getElementById('name').value;
    var password = document.getElementById('password').value;
    //console.log(username.value + password.value);
    var length = listAccount.length;
    for (var i = 0; i < length; i++) {
        if (listAccount[i].username == username && listAccount[i].password == password) {
            console.log('đăng nhập thành công vói tài khoản 1111' + username);
            localStorage.setItem('userCurrent', JSON.stringify(listAccount[i]));
            exists = true;
            break;
        }
    }
    if (exists == true) {
        window.location = 'dashboard';
    } else {
        alert('Tài Khoản Hoặc mật khẩu không chính xác !');
    }
}

function getListAccountFromLS() {
    var resutl = [];
    resutl = JSON.parse(localStorage.getItem('listAccount'));
    //console.log(resutl);
    return resutl;
}