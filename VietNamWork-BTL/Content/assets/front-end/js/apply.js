function checkStatus() {
    if (document.cookie != '') {
        alert('Đã có Cookie Nộp Đơn !');
        document.cookie = 'status=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
    } else {
        alert('Chưa có Cookie Nộp Đơn !');
        document.cookie = 'status=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
    }
    //console.log(sessionStorage.getItem("status"));
    //if (sessionStorage.getItem("status") == true) {
    //    alert('Đã Nộp Đơn !');
    //} else if (sessionStorage.getItem("status") == false) {
    //    alert('Có Lỗi Xảy Ra Chưa Gửi Được !');
    //}
    //sessionStorage.removeItem("status");
}
function clickSignIn() {
    var btnSignIn = document.getElementById('group-signIn');
    var formSign = document.getElementsByClassName('formSignIn')[0];
    if (formSign.getAttribute('style') == "display: none;") {
        formSign.setAttribute('style', 'display: block;');
    } else {
        formSign.setAttribute('style', 'display: none;');
    }
}
var btn,
    fallBack, btnClose;

function setup() {
    checkStatus();
    btn = document.getElementById('btnApply');
    fallBack = document.getElementsByClassName('fallBack')[0];
    btnClose = document.getElementById('closePopup');
    //btnClose.preventDefault();
    btn.addEventListener('click', showPopup);
    btnClose.addEventListener('click', hidePopup);
    window.onclick = function(e) {
        if (e.target == fallBack) {
            fallBack.style.display = 'none';
        }
    }
}

function showPopup() {
    if (localStorage.getItem('currentCustumer') == null) {
        alert('Hãy đăng nhập!');
        fallBack.style.display = 'flex';
    } else {
        fallBack.style.display = 'flex';
    }
}

function hidePopup() {
    fallBack.style.display = 'none';
}