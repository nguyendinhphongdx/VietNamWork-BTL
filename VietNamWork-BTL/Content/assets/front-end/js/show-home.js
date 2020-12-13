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
            ' <img src="/Content/assets/front-end/images/' + listCourse[i].image + '" alt="">' +
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
            '<img src="/Content/assets/front-end/images/' + list[i].image + '" alt="">' +
            ' </div> <div class="info-job">' +
            '<div class="name" onclick="detailJob(this)">' + list[i].name + '</div>' +
            ' <div class="address">' + list[i].address + '</div>' +
            '</div>' +
            '<div class="status">' + list[i].status + ' </div>  </div>    </div>    </li>';
    }
    Obj.innerHTML = stringHTML;
}
function detailJob(t) {
    var nameDetailJob = t.innerText;
    console.log(nameDetailJob);
    localStorage.setItem('nameDetailJob', JSON.stringify(nameDetailJob));
    window.location = "detailJob";
}
function showBanner() {
    var banner = document.getElementsByClassName('banner');
    //var index = Math.floor(Math.random() * listBanner.length);
    //console.log("banner " + listBanner[index]);
   // banner.setAttribute("src", "/Content/assets/front-end/images/" + listBanner[index] + ".jpg");
    for (var i = 0; i < listBanner.length; i++) {
        banner[i].setAttribute("src", "/Content/assets/front-end/images/" + listBanner[i] + ".jpg");
    }
    cirlceBanner();
}
function cirlceBanner() {
    setInterval(changeBanner, 3000);
}

function changeBanner() {
    console.log('changing...');
    var listRadioBanner = document.getElementsByName('r');
    for (var i = 0; i < listRadioBanner.length; i++) {
        console.log(`Radio ${i}:${listRadioBanner[i].checked}`);
        if (listRadioBanner[i].checked == true && i != listRadioBanner.length - 1) {
            listRadioBanner[i + 1].checked = true;
            break;
        } else if (i == listRadioBanner.length - 1) {
            listRadioBanner[0].checked = true;
        }
    }
}
function showFeartureCompany() {
    var ulFearture = document.getElementById('feature-company');
    ulFearture.innerHTML = "";
    var length = listFeartureCompany.length;
    var stringUL = "";
    for (var i = 0; i < length; i++) {
        stringUL += '<li><div class="company" onclick="detailCompany(this)">' +
            '<div class="box-company">' +
            '<div class="picture" >' +
            '<img src="/Content/assets/front-end/images/' + listFeartureCompany[i].image + '" alt="">' +
            ' </div>  </div>' +
            '<div class="name">' +
            '<a href="">' + listFeartureCompany[i].name + '</a>' +
            '</div> </div></li>'
    }
    ulFearture.innerHTML = stringUL;
}
function detailCompany(t) {
    var nameCompanyDetail = t.innerText;
    console.log(nameCompanyDetail);
    localStorage.setItem('nameDetailCompany', JSON.stringify(nameCompanyDetail));
    window.location = "detailCompany";
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
    console.log(list);
    listFeartureCompany = list.getNElement(7);
    console.log(listFeartureCompany);
}

function getListFromLS(s) {
    var list = [];
    list = JSON.parse(localStorage.getItem(s));
    return list;
}
Array.prototype.getNElement = function (n) {
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
            element = arrCopy[index];
            console.log(element);
            list.push(element);
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
    console.log('curent custumer:'+currentCustumer);
    if (currentCustumer == null || currentCustumer.username == '') {

    } else {
        document.getElementById('username').textContent = currentCustumer.username;
    }
}

function logout() {
    localStorage.removeItem('currentCustumer');
    window.location = 'Admin/Index';
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
function search() {
    var key = document.getElementById('key-search').value;
    if (key == '') {
        alert('Nhập từ khóa để tìm kiếm');
    } else {
        var listjob = getListFromLS('listJobs');
        var listResult = [];
        var length = listjob.length;
        for (var i = 0; i < length;i++) {
            if (listjob[i].name.includes(key) || listjob[i].company.includes(key)) {
                listResult.push(listjob[i]);
            }
        }
        if (listResult.length == 0) {
            alert('Không Tìm Thấy Công Việc Nào Phù Hợp!');
        } else {
            localStorage.setItem('jobSearch',JSON.stringify( listResult));
            window.location = '/Custumer/Jobs_Search';
        }
    }
}