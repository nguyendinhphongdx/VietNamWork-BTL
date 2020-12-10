function addCompany() {
    var image = document.getElementById('image').files[0].name;
    var name = document.getElementById('name').value;
    var address = document.getElementById('address').value;
    var intro = document.getElementById('introduction').value;
    var vision = document.getElementById('vision').value;
    var mission = document.getElementById('mission').value;
    var status = "Get out";
    if (!document.getElementById('idisable').value == 'not') {
        status = "still";
    }
    var listCompany = [];
    listCompany = getListCompanyFromLS();
    listCompany.push(new Company(image, name,address,intro,vision,mission, status));
    localStorage.setItem('listCompany', JSON.stringify(listCompany));
    window.location = "list_company";
}

function getListCompanyFromLS() {
    var resutl = [];
    resutl = JSON.parse(localStorage.getItem('listCompany'));
    return resutl;
}

function setup() {
    var user = JSON.parse(localStorage.getItem('userCurrent'));
    document.getElementById('userNameCurrent').innerHTML = user.username;
}
function Company(image, name, address, introduction, vision, mission, status) {
    this.image = image;
    this.name = name;
    this.address = address;
    this.introduction = introduction;
    this.vision = vision;
    this.mission = mission;
    this.status = status;
}