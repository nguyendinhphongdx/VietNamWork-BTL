var listJobs = [];

function setup() {
    var user = JSON.parse(localStorage.getItem('userCurrent'));
  
    document.getElementById('userNameCurrent').innerHTML = user.username;
    listJobs = getListJobFromLS();
    showJobToTable(listJobs);
}

function getListJobFromLS() {
    var resutl = [];
    resutl = JSON.parse(localStorage.getItem('listJobs'));
    return resutl;
}
function showJobToTable(list) {
    var table = document.getElementById('list-user');
    var tableOrigin = table.innerHTML;
    var addRow = "<tr><td>STT</td><td>Image</td><td>Name</td><td>Company</td><td>Salary</td><td>Address</td><td>Status</td><td>Edit</td><td>Delete</td></tr>";
    var length = list.length;
    for (var i = 0; i < length; i++) {
        addRow += "<tr>" +
            "<td>" + i + "</td>" +
            "<td id='tdImage'> <img src='/Content/assets/back-end/images/" + list[i].image + "'/> </td>" +  
            "<td>" + list[i].name + "</td>" +
            "<td>" + list[i].company + "</td>" +
            "<td>" + new Intl.NumberFormat().format(list[i].salary)+ " $</td>" +
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
    localStorage.setItem('JobEditId', JSON.stringify(index));
    window.location = 'edit_job';
}
function remove(t) {
    var index = t.getAttribute('value');
    if (confirm('xác nhận xóa ' + index)) {
        listJobs.splice(index, 1);
        localStorage.setItem('listJobs', JSON.stringify(listJobs));
        window.location = 'list_job';
    } else {
        console.log(false);

    }
}