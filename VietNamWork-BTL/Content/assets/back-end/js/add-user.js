function changeVisible(t) {
    var icon_cate = document.getElementsByClassName('icon-cate')[0];
    var x = icon_cate.getAttribute('class').toString();
    var button = document.getElementById('button');
    var menu_left = document.getElementsByClassName('Menu-left')[0];
    var content_right = document.getElementsByClassName('content-right')[0];
    if (x == 'icon-cate') {
        menu_left.setAttribute('class', 'Menu-left Menu-left2');
        content_right.setAttribute('style', 'width:100%');
        icon_cate.setAttribute('class', 'icon-cate icon-cate2');
    } else {
        menu_left.setAttribute('class', 'Menu-left');
        content_right.setAttribute('style', 'width:82%');
        icon_cate.setAttribute('class', 'icon-cate');
    }

};
var cbDisable;
var lbDi;

function setup() {
    var user = JSON.parse(localStorage.getItem('userCurrent'));
    document.getElementById('userNameCurrent').innerHTML = user.username;
    cbDisable = document.getElementById('idisable');
    lbDi = document.getElementById('lbdi');
    cbDisable.addEventListener('change', changeValueD);
}

function changeValueD() {
    if (cbDisable.getAttribute('value') == 'not') {
        cbDisable.setAttribute('value', 'checked');
        lbdi.innerHTML = 'True';
    } else {
        cbDisable.setAttribute('value', 'not');
        lbdi.innerHTML = 'False';
    }
    console.log(cbDisable.getAttribute('value'));
}

function addUser() {
    var name = document.getElementById('name').value;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var idisable = "";
    if (document.getElementById('idisable').value == "not") {
        idisable = false;
    } else {
        idisable = true;
    }
    // console.log(name + "<pre></pre>" + username + "<pre></pre>" + email + "<pre></pre>" + phone + "<pre></pre>" + idisable);
    var listAccount = [];
    listAccount = getListAccountFromLS();
    listAccount.push(new User(name, username, password, email, phone));
    console.log(listAccount);
    localStorage.setItem('listAccount', JSON.stringify(listAccount));
    window.location.href = "list_user";
}

function getListAccountFromLS() {
    var resutl = [];
    resutl = JSON.parse(localStorage.getItem('listAccount'));
    return resutl;
}

function User(name, username, password, email, phone, disabled) {
    this.name = name;
    this.username = username;
    this.password = password;
    this.email = email;
    this.phone = phone;
    this.disabled = disabled;
}