var listBanner = [];
var listFeartureCompany = [];
var listFeartureJob = [];
var listCourse = [];
const currentCustumer = JSON.parse(localStorage.getItem('currentCustumer'));

function setup() {
    checkInfoCustumer();
    setBanner();
    setFeatureCompany();
    setFeatureJob();
    setCourse();
    showBanner();
    showFeartureCompany();
    showFeatureJob();
    showCourse();
}

function showCourse() {
    var ulListCourse = document.getElementsByClassName('list-course')[0];
    //console.log(ulListCourse.innerHTML);
    ulListCourse.innerHTML = "";
    var stringHTML = "";
    var length = listCourse.length;
    for (var i = 0; i < length; i++) {
        stringHTML += '<li><a href=""><div class="course"><div class="course-picture">' +
            ' <img src="assets/front-end/images/' + listCourse[i].image + '" alt="">' +
            ' </div><div class="name-course">' + listCourse[i].name + ' </div>' +
            '<div class="author">' + listCourse[i].author + ' </div></div> </a> </li>';
    }
    ulListCourse.innerHTML = stringHTML;
}

function setCourse() {
    listCourse.push(new Course('course1.jpg', 'Rèn Luyện Kĩ Năng Giải Quyết Vấn Đề Mô Hình Ideas', 'Lê Đình Bảo Quốc'));
    listCourse.push(new Course('course2.jpg', 'Kỹ Năng Làm Việc Ở Công Ty Nước Ngoài', 'Lê Kim Tú'));
    listCourse.push(new Course('course3.jpg', 'Nói Tiếng Anh Tự Tin Sau 3 Tháng', 'Đặng Thanh Kiệt'));
    listCourse.push(new Course('course4.jpg', 'Tối Ưu Hiệu QUả Công Việc', 'Jonathan Yasuo'));
    listCourse.push(new Course('course5.jpg', 'Quyền Lợi Bảo Hiểm Cho Người Lao Động', 'Trần Thị Nhung'));
    listCourse.push(new Course('course6.jpg', 'Cải Thiện Tự Tin, Nâng Tầm Ảnh Hưởng', 'Jonathan Yasuo'));
    listCourse.push(new Course('course7.jpg', 'English For Job Interview', 'Nguyễn Quang Phúc'));
    listCourse.push(new Course('course8.jpg', 'Tiếng Anh Giao Tiếp Cho Người Thành Công', 'Trương Thảo Lam'));
    localStorage.setItem('listCourse', JSON.stringify(listCourse));
}

function setFeatureJob() {
    var list = getListFromLS("listJobs");
    listFeartureJob = list.getNElement(10);
    console.log(listFeartureJob);
}

function showFeatureJob() {
    var listjob1 = document.getElementById('list-jobs1');
    var listjob2 = document.getElementById('list-jobs2');
    setInnerHTML(listjob1, listFeartureJob, 0, 4);
    setInnerHTML(listjob2, listFeartureJob, 5, 9);
}

function setInnerHTML(Obj, list, start, end) {
    Obj.innerHTML = "";
    var stringHTML = "";
    for (var i = start; i <= end; i++) {
        stringHTML += '<li><div class="row"> <div class="container-row"><div class="avatar">' +
            '<img src="assets/front-end/images/' + list[i].image + '" alt="">' +
            ' </div> <div class="info-job">' +
            '<div class="name">' + list[i].name + '</div>' +
            ' <div class="address">' + list[i].address + '</div>' +
            '</div>' +
            '<div class="status">' + list[i].status + ' </div>  </div>    </div>    </li>';
    }
    Obj.innerHTML = stringHTML;
}

function showBanner() {
    var banner = document.getElementById('banner');
    var index = Math.floor(Math.random() * listBanner.length);
    console.log("banner " + listBanner[index]);
    banner.setAttribute("src", "assets/front-end/images/" + listBanner[index] + ".jpg");
}

function showFeartureCompany() {
    var ulFearture = document.getElementById('feature-company');
    ulFearture.innerHTML = "";
    var length = listFeartureCompany.length;
    var stringUL = "";
    for (var i = 0; i < length; i++) {
        stringUL += '<li><div class="company">' +
            '<div class="box-company">' +
            '<div class="picture">' +
            '<img src="assets/front-end/images/' + listFeartureCompany[i].image + '" alt="">' +
            ' </div>  </div>' +
            '<div class="name">' +
            '<a href="">' + listFeartureCompany[i].name + '</a>' +
            '</div> </div></li>'
    }
    ulFearture.innerHTML = stringUL;
}

function setBanner() {
    listBanner.push('banner');
    listBanner.push('banner2');
    listBanner.push('banner3');
    listBanner.push('banner4');
    localStorage.setItem('listBanner', JSON.stringify(listBanner));
}

function setFeatureCompany() {
    var list = [];
    list = getListFromLS("listCompany");
    listFeartureCompany = list.getNElement(7);
    console.log(listFeartureCompany);
}

function getListFromLS(s) {
    var list = [];
    list = JSON.parse(localStorage.getItem(s));
    return list;
}
Array.prototype.getNElement = function(n) {
    var list = [];
    var arrlength = this.length;
    var arrCopy = this;
    if (n <= arrlength) {
        for (var i = 0; i < n; i++) {
            var index = Math.floor(Math.random() * arrCopy.length);
            var element = {};
            element = arrCopy.splice(index, 1);
            list.push(element);
        }
    } else if (n > arrlength) {
        for (var i = 0; i < n; i++) {
            var index = Math.floor(Math.random() * arrlength);
            var element = {};
            list.push(this[index]);
        }
    }
    return list;
}

function Course(image, name, author) {
    this.image = image;
    this.name = name;
    this.author = author;
}

function checkInfoCustumer() {
    console.log(currentCustumer);
    if (currentCustumer == null || currentCustumer.username == '') {

    } else {
        document.getElementById('username').textContent = currentCustumer.username;
    }
}

function logout() {
    localStorage.removeItem('currentCustumer');
    window.location = 'index.html';
}

function clickSignIn() {
    var btnSignIn = document.getElementById('group-signIn');
    var formSign = document.getElementsByClassName('formSignIn')[0];
    var formLogout = document.getElementsByClassName('formLogout')[0];
    if (currentCustumer == null || currentCustumer.username == '') {
        if (formSign.getAttribute('style') == "display: none;") {
            formSign.setAttribute('style', 'display: block;');
        } else {
            formSign.setAttribute('style', 'display: none;');
        }
    } else {
        if (formLogout.getAttribute('style') == "display: none;") {
            formLogout.setAttribute('style', 'display: block;');
        } else {
            formLogout.setAttribute('style', 'display: none;');
        }
    }

}