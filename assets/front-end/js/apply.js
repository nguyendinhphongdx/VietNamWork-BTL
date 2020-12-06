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