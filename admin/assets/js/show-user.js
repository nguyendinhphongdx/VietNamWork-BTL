// import { getListAccountFromLS } from 'login.js'
var ListAccount = [];

function setup() {
    listAccount = getListAccountFromLS();
    console.log(listAccount);
    showListUser(listAccount);
}
function showListUser(list){
    var table = document.getElementById('list-user');
    var tableOrigin = table.innerHTML;
    var addRow = "";
    var length = list.length;
    for(var i=0;i<length;i++){
        addRow+="<tr>"
        +"<td>"+i+"</td>"
        +"<td>"+list[i].name+"</td>"
        +"<td>"+list[i].username+"</td>"
        "<td>"+list[i].password+"</td>"
        "<td>"+list[i].email+"</td>"
        "<td>"+list[i].-   +"</td>"
        "<td><input type="checkbox" name="" id=""></td>"
        "<td><a href=""><i class="far fa-edit"></i></a></td>"
        "<td><a href="" onclick="remove(this)"><i class="fas fa-trash"></i></a></td>"
    +"</tr>";
    }
}
function getListAccountFromLS() {
    var resutl = [];
    resutl = JSON.parse(localStorage.getItem('listAccount'));
    //console.log(resutl);
    return resutl;
}