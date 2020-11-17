// import { getListAccountFromLS } from 'login.js'
var listAccount = [];

function setup() {
    listAccount = getListAccountFromLS();
    console.log(listAccount);
    showListUser(listAccount);
}

function showListUser(list) {
    var table = document.getElementById('list-user');
    var tableOrigin = table.innerHTML;
    var addRow = "<tr><td>STT</td><td>Name</td><td>UserName</td><td>Password</td><td>Email</td><td>Phone</td><td>Disable</td><td>Edit</td><td>Delete</td></tr>";
    var length = list.length;
    for (var i = 0; i < length; i++) {
        addRow += "<tr>" +
            "<td>" + i + "</td>" +
            "<td>" + list[i].name + "</td>" +
            "<td>" + list[i].username + "</td>" +
            "<td>" + list[i].password + "</td>" +
            "<td>" + list[i].email + "</td>" +
            "<td>" + list[i].phone + "</td>";
        if (list[i].disabled == true) {
            addRow += '<td><input type="checkbox" name="" id="" checked disabled = true></td>';
        } else {
            addRow += '<td><input type="checkbox" name="" id="" disabled = true></td>';
        }
        addRow += '<td><a href=""><i class="far fa-edit"></i></a></td>' +
            ' <td><a href="#" onclick="remove(this)" value=' + i + '><i class="fas fa-trash"></i></a></td>';
    }
    // console.log(tableOrigin + addRow);
    table.innerHTML = "";
    table.innerHTML = tableOrigin + addRow;
}

function getListAccountFromLS() {
    var resutl = [];
    resutl = JSON.parse(localStorage.getItem('listAccount'));
    return resutl;
}

function remove(t) {
    //console.log([t.getAttribute('value')]);
    var index = t.getAttribute('value');
    if (confirm('xác nhận xóa ' + index)) {
        listAccount.splice(index, 1);
        //console.log(listAccount);
        localStorage.setItem('listAccount', JSON.stringify(listAccount));
        window.location = 'list-user.html';
    } else {
        console.log(false);

    }
}