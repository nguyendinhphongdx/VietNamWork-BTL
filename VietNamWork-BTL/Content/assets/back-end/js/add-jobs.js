function addJob() {
    var image = document.getElementById('image').files[0].name;
    var name = document.getElementById('name').value;
    var company = document.getElementById('company').value;
    var salary = document.getElementById('salary').value;
    var address = document.getElementById('address').value;
    var healthy = document.getElementById('healthy').checked;
    var train = document.getElementById('train').checked;
    var travel = document.getElementById('travel').checked;
    var description = document.getElementById('description').value;
    var requirement = document.getElementById('requirement').value;
    console.log(healthy);
    var status = "Not";
    if (!document.getElementById('idisable').value == 'not') {
        status = "New";
    }
    //console.log(name + company + salary + address + status);
    //console.log(image)
    //var listJobs = [];
    listJobs = getListJobFromLS();
    listJobs.push(new Job(image, name, company, salary, address,healthy,train,travel,description,requirement, status));
    localStorage.setItem('listJobs', JSON.stringify(listJobs));
    window.location = "list_job";
}

function getListJobFromLS() {
    var resutl = [];
    resutl = JSON.parse(localStorage.getItem('listJobs'));
    return resutl;
}
function Job(image, name, company, salary, address, healthy, train, travel, description, requirement, status) {
    this.image = image;
    this.name = name;
    this.company = company;
    this.salary = salary;
    this.address = address;
    this.healthy = healthy;
    this.train = train;
    this.travel = travel;
    this.description = description;
    this.requirement = requirement;
    this.status = status;
}
function setup() {
    var user = JSON.parse(localStorage.getItem('userCurrent'));
    document.getElementById('userNameCurrent').innerHTML = user.username;
}