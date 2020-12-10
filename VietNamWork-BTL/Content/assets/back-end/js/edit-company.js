var IdEdit = JSON.parse(localStorage.getItem('companyEditId'));
var listCompany = JSON.parse(localStorage.getItem('listCompany'));
var CompanyEdit = listCompany[IdEdit];

function setup() {
    document.getElementById('imgsrc').setAttribute('src', '~/Content/assets/back-end/images/' + CompanyEdit.image);
    document.getElementById('name').value = CompanyEdit.name;
    document.getElementById('address').value = CompanyEdit.address;
    document.getElementById('introduction').value = CompanyEdit.introduction;
    document.getElementById('vision').value = CompanyEdit.vision;
    document.getElementById('mission').value = CompanyEdit.mission;
    if (CompanyEdit.status == 'still') {
        document.getElementById('idisable').checked = true;
    } else {
        document.getElementById('idisable').checked = false;
    }
}

function UpdateCompany() {
    var image, name, address,intro,vision,mission, status;
    if (document.getElementById('image').value == '') {
        console.log('không thay đổi ảnh');
        image = CompanyEdit.image;
    } else {
        image = document.getElementById('image').files[0].name;
    }
    name = document.getElementById('name').value;
    address = document.getElementById('address').value;
    intro = document.getElementById('introduction').value;
    vision = document.getElementById('vision').value;
    mission = document.getElementById('mission').value;
    if (document.getElementById('idisable').checked == true) {
        status = 'still';
    } else {
        status = '';
    }
    var company = new Company(image, name, address,intro,vision,mission, status);
    listCompany[IdEdit] = company;
    console.log(listCompany);
    localStorage.setItem('listCompany', JSON.stringify(listCompany));
    if (confirm('Xác Nhận Cập Nhật !') == true) {
        localStorage.removeItem('companyEditId');
        window.location = 'list_company';
    }
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