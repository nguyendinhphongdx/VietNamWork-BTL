var listUser = JSON.parse(localStorage.getItem('listAccount'));
var editId = JSON.parse(localStorage.getItem('UserIdEdit'));
localStorage.removeItem('UserIdEdit');
var UserAccount = listUser[editId];
var cbDisable, lbDi;

function setup() {
    console.log(listUser);
    console.log(editId);
    document.getElementById('name').value = UserAccount.name;
    document.getElementById('username').value = UserAccount.username;
    document.getElementById('password').value = UserAccount.password;
    document.getElementById('email').value = UserAccount.email;
    document.getElementById('phone').value = UserAccount.phone;
    cbDisable = document.getElementById('idisable');
    lbDi = document.getElementById('lbdi');
    cbDisable.addEventListener('change', changeValue);
    if (UserAccount.disabled == true) {
        cbDisable.setAttribute('value', 'checked');
        cbDisable.setAttribute('checked', 'true');
        lbdi.innerHTML = 'True';
    } else {
        cbDisable.setAttribute('value', 'not');
        lbdi.innerHTML = 'False';
    }
}

function updateUser() {
    UserAccount.name = document.getElementById('name').value;
    UserAccount.username = document.getElementById('username').value;
    UserAccount.password = document.getElementById('password').value;
    UserAccount.email = document.getElementById('email').value;
    UserAccount.phone = document.getElementById('phone').value;
    if (lbdi.innerHTML == 'True') {
        UserAccount.disabled = true;
    } else {
        UserAccount.disabled = false;
    }
    listUser[editId] = UserAccount;
    localStorage.setItem('listAccount', JSON.stringify(listUser));
    window.location = 'list_user';
}

function changeValue() {
    if (cbDisable.getAttribute('value') == 'not') {
        cbDisable.setAttribute('value', 'checked');
        lbdi.innerHTML = 'True';
    } else {
        cbDisable.setAttribute('value', 'not');
        lbdi.innerHTML = 'False';
    }
    console.log(cbDisable.getAttribute('value'));
}