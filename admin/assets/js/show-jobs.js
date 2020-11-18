var ListJob = [];
function setup(){
    ListJob.push(new Job('bkav.png','Automation Tester','BKAV','1,500$','Ha Noi','hot'));
    ListJob.push(new Job('bkav.png','Automation Tester1','BKAV','1,500$','Ha Noi','hot'));
    ListJob.push(new Job('bkav.png','Automation Tester2','BKAV','1,500$','Ha Noi','hot'));
    ListJob.push(new Job('bkav.png','Automation Tester3','BKAV','1,500$','Ha Noi','hot'));
    localStorage.setItem('ListJobs', JSON.stringify(ListJob));
    //localStorage.removeItem('ListJObs');
    showJobToTable(ListJob);
}
function Job(image,name,company,salary,address,status){
    this.image = image;
    this.name =name;
    this.salary = salary;
    this.company = company;
    this.address = address;
    this.status = status;
};
function showJobToTable(list){
    var table = document.getElementById('list-user');
    var tableOrigin = table.innerHTML;
    var addRow = "<tr><td>STT</td><td>Image</td><td>Name</td><td>Company</td><td>Salary</td><td>Address</td><td>Status</td><td>Edit</td><td>Delete</td></tr>";
    var length = list.length;
    for (var i = 0; i < length; i++) {
        addRow += "<tr>" +
            "<td>" + i + "</td>" +
            "<td id='tdImage'> <img src='../assets/images/"+list[i].image+"'/> </td>"+
            "<td>" + list[i].name + "</td>" +
            "<td>" + list[i].company + "</td>" +
            "<td>" + list[i].salary + "</td>" +
            "<td>" + list[i].address + "</td>"+
            "<td>" + list[i].status + "</td>";
        addRow += '<td><a href=""><i class="far fa-edit"></i></a></td>' +
            ' <td><a href="#" onclick="remove(this)" value=' + i + '><i class="fas fa-trash"></i></a></td>';
    }
    // console.log(tableOrigin + addRow);
    table.innerHTML = "";
    table.innerHTML = tableOrigin + addRow;
}
function remove(t) {
    //console.log([t.getAttribute('value')]);
    var index = t.getAttribute('value');
    if (confirm('xác nhận xóa ' + index)) {
        ListJob.splice(index, 1);
        //console.log(ListJob);
        localStorage.setItem('ListJobs', JSON.stringify(ListJob));
        window.location = 'list-jobs.html';
    } else {
        console.log(false);

    }
}