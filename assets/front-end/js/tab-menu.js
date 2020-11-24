function active_tab_menu() {
    console.log('funtion is running...');
    var tab_menu = document.getElementsByClassName('tab-menu')[0];
    console.log(tab_menu.getAttribute('style'));
    var button = document.getElementById('button');
    var istrue = (tab_menu.getAttribute('style') == 'transform: translateX(-100%); transition-duration: 300ms;');
    if (istrue == true) {
        tab_menu.setAttribute('style', 'transform: translateX(0);transition-duration: 300ms;');
        button.setAttribute('style', 'left: 11%; transform: translateX(300%); transition-duration: 300ms;');
        // document.getElementsByTagName('body')[0].setAttribute('disabled');
    } else {
        tab_menu.setAttribute('style', 'transform: translateX(-100%); transition-duration: 300ms;');
        button.setAttribute('style', 'transform: translateX(0); transition-duration: 300ms;');
        console.log('not getted');
    }
}