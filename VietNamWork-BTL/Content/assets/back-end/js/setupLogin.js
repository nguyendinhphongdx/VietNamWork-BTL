var listAccount = [];
var listJobs = [];
var listCompany = [];
var listQuestion = [];
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
    listQuestion.push(new Question('bkav.png', 'Giới thiệu sơ lược về bản thân bạn?(Could you briefly Introduce yourself?)', 'text1', 'favourite'));
    listQuestion.push(new Question('bkav.png', 'Bạn có thể mô tả sơ lược về những công việc bạn đã làm? Nhiệm vụ chính ở công việc gần đây nhất của bạn là gì? (Can you briefly describe the work you have done? What was the main tasks at your most recent job?)', 'text2', 'favourite'));
    listQuestion.push(new Question('bkav.png', 'Những thành tựu nào đã đạt được trong công việc khiến bạn tự hào nhất? (What achievements in your job are you most proud of?)', 'text3', 'favourite'));
    localStorage.setItem('listQuestion', JSON.stringify(listQuestion));
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

function Question(image, title, answer, status) {
    this.image = image;
    this.title = title;
    this.answer = answer;
    this.status = status;
}