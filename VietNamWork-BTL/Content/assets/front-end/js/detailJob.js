var listBanner = [];
//const currentCustumer = JSON.parse(localStorage.getItem('currentCustumer'));
var btn,
    fallBack, btnClose;
let nameDetailJob = JSON.parse(localStorage.getItem('nameDetailJob'));
var listJob = JSON.parse(localStorage.getItem('listJobs'));
var detailJob;
function setup() {
    checkInfoCustumer();
    setBanner();
    showBanner();
    splip_description();
    splip_requirement();
    fillterDetailJob(nameDetailJob, listJob);
    console.log(detailJob);
    showDetailJob(detailJob);
    checkStatus();
    btn = document.getElementById('btnApply');
    fallBack = document.getElementsByClassName('fallBack')[0];
    btnClose = document.getElementById('closePopup');
    //btnClose.preventDefault();
    btn.addEventListener('click', showPopup);
    btnClose.addEventListener('click', hidePopup);
    window.onclick = function (e) {
        if (e.target == fallBack) {
            fallBack.style.display = 'none';
        }
    }
}
function fillterDetailJob(key, array) {
    var length = array.length;
    for (var i = 0; i < length; i++) {
        if (array[i].name == key) {
            detailJob = array[i]; break;
        }
    }
}
function showDetailJob(obj) {
    document.getElementById('picture-job').setAttribute('src', '/Content/assets/front-end/images/' + obj.image);
    document.getElementById('nameJob').innerHTML = 'Tên Công Việc : ' + obj.name;
    document.getElementById('slogan').innerHTML = 'TẬP ĐOÀN ' + obj.company+' - NƠI CHẮP CÁNH ƯỚC MƠ : ';
    document.getElementById('address').innerHTML = 'Địa điểm làm việc : '+obj.address;
    document.getElementById('salary').innerHTML = `Mức Lương Trung Bình : ${obj.salary} $`;
    splip_description();
}
function showBanner() {
    var banner = document.getElementsByClassName('banner');
    // var index = Math.floor(Math.random() * listBanner.length);
    // console.log("banner " + listBanner[index]);
    for (var i = 0; i < listBanner.length; i++) {
        banner[i].setAttribute("src", "/Content/assets/front-end/images/" + listBanner[i] + ".jpg");
    }
    cirlceBanner();
}

function setBanner() {
    listBanner.push('banner');
    listBanner.push('banner2');
    listBanner.push('banner3');
    listBanner.push('banner4');
    localStorage.setItem('listBanner', JSON.stringify(listBanner));
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
            list.push(this[index]);
        }
    }
    return list;
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

function cirlceBanner() {
    setInterval(changeBanner, 3000);
}

function changeBanner() {
    console.log('changing...');
    var listRadioBanner = document.getElementsByName('r');
    for (var i = 0; i < listRadioBanner.length; i++) {
        if (listRadioBanner[i].checked == true && i != listRadioBanner.length - 1) { // duyệt 4 radio và set checked cho radio kế
            listRadioBanner[i + 1].checked = true;
            // console.log(i);
            changeLabelBanner(i);
            break;
        } else if (i == listRadioBanner.length - 1) {
            listRadioBanner[0].checked = true;
        }
    }
}

function changeLabelBanner(i) {
    var listLableBanner = document.getElementsByClassName('lable-bar');
    for (var x = 0; x < listLableBanner.length; x++) {
        if (x == i && x != listLableBanner.length - 1) {
            listLableBanner[x + 1].setAttribute('style', 'background-color:#fff');
        } else if (i == listLableBanner.length - 1) {
            listLableBanner[x].setAttribute('style', 'background-color:none');
        } else {
            listLableBanner[x].setAttribute('style', 'background-color:none');
        }
    }
}

function splip_description() {
    console.log('running...');
    //var str = "- Tham gia vào các dự án phần mềm với các đối tác hàng đầu Nhật Bản." + '<br/>' + "- Lập trình các ứng dụng iOS, Android." + '<br/>' + "- Tham gia vào quá trình thiết kế, review source code";
    //res = str.split(".");
    var str = detailJob.description + "-AGAFASDASDASDASDASDSADSASAASDS";
    var res = str.split("-");
    var stringHtml = res.map(function (des) {
        return des+"<br/>";
    });
    document.getElementById("description").innerHTML = stringHtml;

}

function splip_requirement() {
    var str = " - Từ 3-5 năm kinh nghiệm lập trình các ứng dụng iOS/Android." + '<br/>' + " - Tiếng Anh đọc, viết tốt." +
        '<br/>' + '<br/>' + "*** iOS Developer:" + '<br/>' + "- Nắm vững kiến thức về Swift/Objective C." + '<br/>' + "- Có kinh nghiệm làm việc với SQLite, Realm." +
        '<br/>' + "- Có tư duy logic về Data Structures, Algorithm." + '<br/>' + "- Có hiểu biết về Clean code, Solid, design Pattern là 1 lợi thế." +
        '<br/>' + "- Có kinh nghiệm làm việc với các BaaS như Firebase là lợi thế" + '<br/>' + '<br/>' + "*** Android Developer:" + '<br/>' +
        "- Hiểu về mô hình Client-server." + '<br/>' + "- Hiểu và thành thạo lập trình hướng đối tượng." + '<br/>' + "- Kinh nghiệm sử dụng các mô hình phổ biến trong Android như MVP/MVVM." + '<br/>' +
        "- Kinh nghiệm triển khai các API mới." + '<br/>' + "- Có nền tảng Java tốt là 1 lợi thế";
    res = str.split(".");
    document.getElementById("Requirement").innerHTML = res;
}
function checkStatus() {
    console.log(document.cookie);
    if (document.cookie != '') {
        alert('Nộp Đơn Thành Công !');
        document.cookie = `status=;expires = Thu, 01 Jan 1970 00:00:00 GMT`;
    } 
    //var timeout = new Date();
    //timeout.setSeconds(timeout.getSeconds() + 3);
    //console.log(timeout);
    document.cookie = `status= ;expires = Thu, 01 Jan 1970 00:00:00 GMT`;
    setInterval(function () {
        console.log(document.cookie);
    },1000);
    //document.cookie = `status=;expires=${timeout.getUTCDate}`;
    //console.log(timeout);
    //console.log(document.cookie);
    //console.log(sessionStorage.getItem("status"));
    //if (sessionStorage.getItem("status") == true) {
    //    alert('Đã Nộp Đơn !');
    //} else if (sessionStorage.getItem("status") == false) {
    //    alert('Có Lỗi Xảy Ra Chưa Gửi Được !');
    //}
    //sessionStorage.removeItem("status");
}

function showPopup() {
    if (localStorage.getItem('currentCustumer') == null) {
        alert('Hãy đăng nhập!');
        //fallBack.style.display = 'none';
    } else {
        fallBack.style.display = 'flex';
    }
}

function hidePopup() {
    fallBack.style.display = 'none';
}
function search() {
    var key = document.getElementById('key-search').value;
    if (key == '') {
        alert('Nhập từ khóa để tìm kiếm');
    } else {
        var listjob = getListFromLS('listJobs');
        var listResult = [];
        var length = listjob.length;
        for (var i = 0; i < length; i++) {
            if (listjob[i].name.includes(key) || listjob[i].company.includes(key)) {
                listResult.push(listjob[i]);
            }
        }
        if (listResult.length == 0) {
            alert('Không Tìm Thấy Công Việc Nào Phù Hợp!');
        } else {
            localStorage.setItem('jobSearch', JSON.stringify(listResult));
            window.location = '/Custumer/Jobs_Search';
        }
    }
}