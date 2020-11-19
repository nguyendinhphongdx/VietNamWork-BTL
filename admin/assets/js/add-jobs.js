function addJob() {
    var image = document.getElementById('image').files[0].name;
    var name = document.getElementById('name').value;
    var company = document.getElementById('company').value;
    var salary = document.getElementById('salary').value;
    var address = document.getElementById('address').value;
    var status = "Not";
    if (!document.getElementById('idisable').value == 'not') {
        status = "New";
    }
    //console.log(name + company + salary + address + status);
    //console.log(image)
    var listJobs = [];
    listJobs = getListJobFromLS();
    listJobs.push(new Job(image, name, company, salary, address, status));
    localStorage.setItem('listJobs', JSON.stringify(listJobs));
    window.location.href = "list-jobs.html";
}

function getListJobFromLS() {
    var resutl = [];
    resutl = JSON.parse(localStorage.getItem('listJobs'));
    return resutl;
}

function setup() {

}