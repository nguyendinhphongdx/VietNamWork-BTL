var listBanner = [];
//const currentCustumer = JSON.parse(localStorage.getItem('currentCustumer'));
let nameDetailCompany = JSON.parse(localStorage.getItem('nameDetailCompany'));
var listCompany = JSON.parse(localStorage.getItem('listCompany'));
var detailCompany;
function setup() {
    checkInfoCustumer();
    setBanner();
    showBanner();
    showInfomationDetailCompany(nameDetailCompany, listCompany);
    console.log(detailCompany);
    split_box(detailCompany);
}
function showInfomationDetailCompany(key, array) {
    var length = array.length;
    for (var i = 0; i < length;i++) {
        if (array[i].name == nameDetailCompany) {
            detailCompany = array[i]; break;
        }
    }
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




function split_box(object) {
    var str = '';
    document.getElementById('pictrueCompany').setAttribute('src', '/Content/assets/front-end/images/' + object.image);
    document.getElementById('slogan').innerHTML = `Công Ty  ${object.name} - Chào Mừng Bạn `;
    document.getElementById('address').innerHTML = `Địa diểm làm việc :  ${object.address} `;
    if (currentCustumer != null) {
        document.getElementById('salary').innerHTML = 'Lương trung bình : 800$ - 3000$';
    } else {
        document.getElementById('salary').innerHTML = 'Đăng nhập để xem lương trung binh.';
    }
   // console.log(object);
    if (typeof(object)=='function') {
        str = "Bkav là Tập đoàn công nghệ hoạt động trong các lĩnh vực an ninh mạng, phần mềm, chính phủ điện tử, nhà sản xuất smartphone và các thiết bị điện tử thông minh, Bkav là 1 trong 10 thương hiệu Nổi tiếng nhất Việt Nam do Hội Sở hữu trí tuệ Việt Nam bình chọn, nằm trong Top 10 Dịch vụ hoàn hảo do Hội Tiêu chuẩn Bảo vệ Người tiêu dùng Việt Nam bình chọn" +
            '<br/>' + '<br/>' + "*Tầm nhìn (Vision): New view with you – Vươn tới tầm cao mới" + '<br/>' + "Vươn tới thế giới mới, tầm cao mới – Nơi mỗi cá nhân, tập thể tại Hybrid Technologies ngày càng trở nên tuyệt vời hơn thông qua việc cùng nhau phát triển và nỗ lực hiện thực hóa giấc mơ chung" +
            '<br/>' + "* Sứ mệnh (Mission): Luôn tự phát triển & Đồng hành cùng thành công của khách hàng" + '<br/>' + "Trở thành một công ty công nghệ toàn cầu, một đối tác chuyên nghiệp, tin cậy thông qua việc luôn tự phát triển, song song với việc đồng hành cùng sự phát triển và thành công của khách hàng" +
            '<br/>' + "* Giá trị cốt lõi (Core Values):" + '<br/>' + "- Giao tiếp (Communication): Chủ động đối thoại không ngần ngại." + '<br/>' +
            "- Giải pháp (Solution): Đưa ra giải pháp khả thi nhất, phù hợp với mọi nhu cầu, hoàn cảnh." + '<br/>' + "- Mối quan hệ (Relation): Xây dựng mối quan hệ đồng hành, phát triển bền vững và đáng tin cậy" + '<br/>' + '<br/>' +
            "THAM GIA CÙNG CHÚNG TÔI NGAY !";
    } else {
        str += '<br/> *** <b>Gioi Thiệu :</b><br/>' +object.introduction+'<br/>';
        str += '<br/> *** <b>Tầm Nhìn Chiến Lược :</b><br/>' + object.vision + '<br/>';
        str += '<br/> *** <b>Sứ mệnh (Mission):</b><br/>' + object.mission + '<br/>';
        str += "<br/> *** <b>Giá trị cốt lõi (Core Values):</b>" + '<br/>' + "- Giao tiếp (Communication): Chủ động đối thoại không ngần ngại." + '<br/>' +
            " <br/>*** <b>Giải pháp (Solution)</b>:<br/> Đưa ra giải pháp khả thi nhất, phù hợp với mọi nhu cầu, hoàn cảnh." + '<br/>' + "- Mối quan hệ (Relation): Xây dựng mối quan hệ đồng hành, phát triển bền vững và đáng tin cậy" + '<br/>' + '<br/>' +
            "THAM GIA CÙNG CHÚNG TÔI NGAY !";
    }
    res = str.split(".");
    console.log(res);
    document.getElementById("box").innerHTML = str;
}