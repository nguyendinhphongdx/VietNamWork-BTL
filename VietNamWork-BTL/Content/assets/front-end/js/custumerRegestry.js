﻿var listCustumer = JSON.parse(localStorage.getItem('listCustumer'));

function setup() {
    console.log(listCustumer);
}

function Regestry() {
    console.log(document.getElementById('name'));
    console.log(document.getElementById('password'));
    var username = document.getElementById('name').value;
    var password = document.getElementById('password').value;
    var confirm = document.getElementById('confirm').value;
    console.log(username+password);
    if (password != confirm) {
        alert('mật khẩu xác nhận không giống nhau!');
    } else if (password.length == 0 || username.length == 0) {
        alert('Thông tin người dùng không được để trống!');
    } else {
        if (listCustumer == null || listCustumer.length == 0) {
            var x = new Custumer(username, password);
            console.log('listcustumer =0');
            listCustumer = [];
            listCustumer.push(x);
            localStorage.setItem('listCustumer', JSON.stringify(listCustumer));
            localStorage.setItem('currentCustumer', JSON.stringify(x));

        } else {
            console.log('listcustumer !=0');
            var x = new Custumer(username, password);
            listCustumer.push(x);
            localStorage.setItem('listCustumer', JSON.stringify(listCustumer));
            localStorage.setItem('currentCustumer', JSON.stringify(x));
        }
        window.location = 'Index';
    }
}

function Custumer(username, password) {
    this.username = username;
    this.password = password;
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