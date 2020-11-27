var listQuestion = [];

function setup() {
    var user = JSON.parse(localStorage.getItem('userCurrent'));

    document.getElementById('userNameCurrent').innerHTML = user.username;
    listQuestion = getlistQuestionFromLS();
    showlistQuestion(listQuestion);
}

function getlistQuestionFromLS() {
    var resutl = [];
    resutl = JSON.parse(localStorage.getItem('listQuestion'));
    return resutl;
}

function showlistQuestion(list) {
    var table = document.getElementById('list-user');
    var tableOrigin = table.innerHTML;
    var addRow = "<tr><td>STT</td><td>Tille</td><td>Answer</td><td>Status</td><td>Edit</td><td>Delete</td></tr>";
    var length = list.length;
    for (var i = 0; i < length; i++) {
        addRow += "<tr>" +
            "<td>" + i + "</td>" +
            "<td>" + list[i].title + "</td>" +
            "<td>" + list[i].answer + "</td>" +
            "<td>" + list[i].status + "</td>";
        addRow += '<td><a href= ""><i class="far fa-edit"></i></a></td>' +
            ' <td><a href="#" onclick="remove(this)" value=' + i + '><i class="fas fa-trash"></i></a></td>';
    }
    table.innerHTML = "";
    table.innerHTML = tableOrigin + addRow;
}

function remove(t) {
    var index = t.getAttribute('value');
    if (confirm('xác nhận xóa ' + index)) {
        listQuestion.splice(index, 1);
        localStorage.setItem('listQuestion', JSON.stringify(listQuestion));
        window.location = 'list_question';
    } else {
        console.log(false);

    }
}