var listAccount = [];
var listJobs = [];
var listCompany = [];

function setup() {
    listAccount.push(new User('Nguyễn Đình Phong', 'dinhphong', '123', 'phongnguyendx@gmail.com', '039403920', false));
    listAccount.push(new User('Lưu Thị Xuyên', 'xuyenluu', '123', 'luuthixuyen@gmail.com', '090593400', false));
    listAccount.push(new User('Kiều Thị Thu Thúy', 'thuthuy', '123', 'kieuthithuthuy@gmail.com', '08987968', false));
    localStorage.setItem('listAccount', JSON.stringify(listAccount));
    listJobs.push(new Job('bkav.png', 'Automation Tester', 'BKAV', '1500', 'Ha Noi', 'hot'));
    listJobs.push(new Job('bkav.png', 'Automation Tester1', 'BKAV', '1500', 'Ha Noi', 'hot'));
    listJobs.push(new Job('bkav.png', 'Automation Tester2', 'BKAV', '1500', 'Ha Noi', 'hot'));
    listJobs.push(new Job('bkav.png', 'Automation Tester3', 'BKAV', '1500', 'Ha Noi', 'hot'));
    localStorage.setItem('listJobs', JSON.stringify(listJobs));
    listCompany.push(new Company('bkav.png', 'BKAV', 'Hà Nội', 'still'));
    listCompany.push(new Company('bkav.png', 'VNPT', 'Hà Nội', 'still'));
    listCompany.push(new Company('bkav.png', 'VINGROUP', 'Hà Nội', 'still'));
    listCompany.push(new Company('bkav.png', 'SYMPHONY', 'Hà Nội', 'still'));
    localStorage.setItem('listCompany', JSON.stringify(listCompany));
}

function User(name, username, password, email, phone, disabled) {
    this.name = name;
    this.username = username;
    this.password = password;
    this.email = email;
    this.phone = phone;
    this.disabled = disabled;
}

function Job(image, name, company, salary, address, status) {
    this.image = image;
    this.name = name;
    this.company = company;
    this.salary = salary;
    this.address = address;
    this.status = status;
}

function Company(image, name, address, status) {
    this.image = image;
    this.name = name;
    this.address = address;
    this.status = status;
}