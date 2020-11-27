var listCompany = [];

function setup() {
    var user = JSON.parse(localStorage.getItem('userCurrent'));
    document.getElementById('userNameCurrent').innerHTML = user.username;
    listCompany = getListCompanyFromLS();
    showListCompany(listCompany);
}

function getListCompanyFromLS() {
    var resutl = [];
    resutl = JSON.parse(localStorage.getItem('listCompany'));
    return resutl;
}

function showListCompany(list) {
    var table = document.getElementById('list-user');
    var tableOrigin = table.innerHTML;
    var addRow = "<tr><td>STT</td><td>Image</td><td>Name Company</td><td>Address</td><td>Status</td><td>Edit</td><td>Delete</td></tr>";
    var length = list.length;
    for (var i = 0; i < length; i++) {
        addRow += "<tr>" +
            "<td>" + i + "</td>" +
            "<td id='tdImage'> <img src='../assets/images/" + list[i].image + "'/> </td>" +
            "<td>" + list[i].name + "</td>" +
            "<td>" + list[i].address + "</td>" +
            "<td>" + list[i].status + "</td>";
        addRow += '<td><a href= "#" onclick="edit(this)" value=' + i + '><i class="far fa-edit"></i></a></td>' +
            ' <td><a href="#" onclick="remove(this)" value=' + i + '><i class="fas fa-trash"></i></a></td>';
    }
    table.innerHTML = "";
    table.innerHTML = tableOrigin + addRow;
}

function edit(t) {
    var index = t.getAttribute('value');
    localStorage.setItem('companyEditId', JSON.stringify(index));
    window.location = 'edit-company.html';
}

function remove(t) {
    var index = t.getAttribute('value');
    if (confirm('xác nhận xóa ' + index)) {
        listCompany.splice(index, 1);
        localStorage.setItem('listCompany', JSON.stringify(listCompany));
        window.location = 'list_company';
    } else {
        console.log(false);

    }
}