var listBanner = [];
const currentCustumer = JSON.parse(localStorage.getItem('currentCustumer'));
var listJobs = JSON.parse(localStorage.getItem('jobSearch'));;

function setup() {
    checkInfoCustumer();
    setBanner();
    showBanner();
    getData();
}

function getData() {
    console.log('listjob:' + listJobs);
    var taglistJob = document.getElementById('list-job');
    var htmlnotification = document.getElementById('row-letter').innerHTML;
    var stringHtml = '';
    //listJob.innerHTML = '';
    var length = listJobs.length;
    for (var i = 0; i < length; i++) {
        stringHtml += '<div class="row-job"> <div class="picture">' +
            '<img src="/Content/assets/front-end/images/' + listJobs[i].image + '" alt=""></div>' +
            '<div class="info-job"> <div class="name-job" onclick="detailJob(this)"> ' + listJobs[i].name + '</div>' +
            `<div class="name-company">${listJobs[i].company}</div>` +
            `<div class="salary">Lương :${listJobs[i].salary} $</div>` +
            `<div class="address">Địa Chỉ : ${listJobs[i].address}</div>` +
            ` <div class="extra"><div class="grant">  <i class="fas fa-hand-holding-usd fa-2x"></i>Thưởng </div>` +
            `<div class="healthy">  <i class="fas fa-user-md fa-2x"></i>Khám Sức Khỏe</div>` +
            ` <div class="travel">  <i class="fas fa-plane-departure fa-2x"></i>Du Lịch</div> </div></div>` +
            ` <div class="login-to-detail-job"><button>Đăng Nhập Để Xem Thưởng</button></div> </div>`;
    }
    //console.log(stringHtml);
    taglistJob.innerHTML = stringHtml + ' <div class="row-letter" id="row-letter">' + htmlnotification + '</div>';
}

function detailJob(t) {
    var nameDetailJob = t.innerText;
    console.log(nameDetailJob);
    localStorage.setItem('nameDetailJob', JSON.stringify(nameDetailJob));
    window.location = "detailJob";
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
        console.log(`Radio ${i}:${listRadioBanner[i].checked}`);
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
        console.log(`x: ${x}  i: ${i}`);
        if (x == i && x != listLableBanner.length - 1) {
            listLableBanner[x + 1].setAttribute('style', 'background-color:#fff');
        } else if (i == listLableBanner.length - 1) {
            listLableBanner[x].setAttribute('style', 'background-color:none');
        } else {
            listLableBanner[x].setAttribute('style', 'background-color:none');
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