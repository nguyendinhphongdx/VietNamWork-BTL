function loadData() {
    var listData = JSON.parse(localStorage.getItem('listJobs'));
    //  document.getElementById("txt").innerHTML = localStorage.getItem('listJobs');
    for (var i = 0; i < Object.keys(listData).length; i++) {
        var para = document.createElement("div");
        para.innerHTML = "<div class='content'> <div class='avt'> <img id='image" + i + "' class='avtcontent' src='a'  width='100%'> </div> <div class='rv'> <div> <h3 onlick='detail_Job(" + i + ")' id='job-name" + i + "' class='h3'>CHUYÊN VIÊN CHĂM SÓC KHÁCH HÀNG</h3> </div> <div><a class='a' href=''><b id='company" + i + "'>Công ty CP bệnh viện đa khoa quốc tế Vinmec</b></a></div> <div><span id='salary" + i + "'>300000<span></div> <div id='address" + i + "'> Hà Nội</div> <div> <div class='icon'> <img src='assets/front-end/images/hand.png' width='20px'> <span>Thưởng</span> </div> <div class='icon'> <span> <img src='/assets/front-end/images/doctor.png' width='20px'></span> <span>Giấy khám sức khỏe</span> </div> <div class='icon'> <span><img src='assets/front-end/images/airplane.png' width='20px'></span> <span>Du lịch</span> </div> </div> </div> <div class='view'> <a href=''>Đăng nhập để xem thưởng</a> </div> </div>";
        document.getElementById("contents").appendChild(para);
        document.getElementById("image" + i).src = "assets/front-end/images/" + listData[i].image;
        document.getElementById("job-name" + i).innerText = listData[i].name;
        document.getElementById("company" + i).innerText = listData[i].company;
        document.getElementById("salary" + i).innerText = listData[i].salary;
        document.getElementById("address" + i).innerText = listData[i].address;
    }
}

function detail_Job(t) {
    console.log(t);
}