var IdJobEdit = JSON.parse(localStorage.getItem('JobEditId'));
var listJobs = JSON.parse(localStorage.getItem('listJobs'));
var JobEdit = listJobs[IdJobEdit];
console.log(JobEdit);

function setup() {
    console.log([document.getElementById('image')]);
    document.getElementById('imgsrc').setAttribute('src', '~/Content/assets/back-end/images/' + JobEdit.image);
    document.getElementById('name').value = JobEdit.name;
    document.getElementById('company').value = JobEdit.company;
    document.getElementById('salary').value = JobEdit.salary;
    document.getElementById('address').value = JobEdit.address;
    if (JobEdit.healthy == true) {
        document.getElementById('healthy').checked = true;
    } else {
        document.getElementById('healthy').checked = false;
    }
    if (JobEdit.train == true) {
        document.getElementById('train').checked = true;
    } else {
        document.getElementById('train').checked = false;
    } if (JobEdit.travel == true) {
        document.getElementById('travel').checked = true;
    } else {
        document.getElementById('travel').checked = false;
    }
    document.getElementById('description').value = JobEdit.description;
    document.getElementById('requirement').value = JobEdit.requirement;
    if (JobEdit.status == 'New') {
        document.getElementById('idisable').checked = true;
    } else {
        document.getElementById('idisable').checked = false;
    }
}

function UpdateJob() {
    var image, name, company, salary, address,healthy,train,travel,description,requirement, status;
    if (document.getElementById('image').value == '') {
        console.log('không thay đổi ảnh');
        image = JobEdit.image;
    } else {
        image = document.getElementById('image').files[0].name;
    }
    name = document.getElementById('name').value;
    company = document.getElementById('company').value;
    salary = document.getElementById('salary').value;
    address = document.getElementById('address').value;
    healthy = document.getElementById('healthy').checked;
    train = document.getElementById('train').checked;
    travel = document.getElementById('travel').checked;
    description = document.getElementById('description').value;
    requirement = document.getElementById('requirement').value;
    if (document.getElementById('idisable').checked == true) {
        status = 'hot';
    } else {
        status = '';
    }
    var job = new Job(image, name, company, salary, address,healthy,train,travel,description,requirement, status);
    console.log(job);
    listJobs[IdJobEdit] = job;
    console.log(listJobs);
    localStorage.setItem('listJobs', JSON.stringify(listJobs));
    if (confirm('Xác Nhận Cập Nhật !') == true) {
        localStorage.removeItem('JobEditId');
        window.location = 'list_job';
    }
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
