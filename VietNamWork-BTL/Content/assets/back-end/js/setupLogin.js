var listAccount = [];
var listJobs = [];
var listCompany = [];
var listQuestion = [];
function setup() {
    listAccount.push(new User('Nguyễn Đình Phong', 'dinhphong', '123', 'phongnguyendx@gmail.com', '039403920', false));
    listAccount.push(new User('Lưu Thị Xuyên', 'xuyenluu', '123', 'luuthixuyen@gmail.com', '090593400', false));
    listAccount.push(new User('Kiều Thị Thu Thúy', 'thuthuy', '123', 'kieuthithuthuy@gmail.com', '08987968', false));
    localStorage.setItem('listAccount', JSON.stringify(listAccount));
    listJobs.push(new Job('bkav.png', 'Automation Tester', 'BKAV', '1500', 'Ha Noi', true, true, true, 'Tham gia vào các dự án phần mềm với các đối tác hàng đầu Nhật Bản.Lập trình các ứng dụng iOS, Android.Tham gia vào quá trình thiết kế, review source code',
        'iOS Developer:Nắm vững kiến thức về Swift/Objective C.Có kinh nghiệm làm việc với SQLite, Realm.Có tư duy logic về Data Structures, Algorithm.Có hiểu biết về Clean code, Solid, design Pattern là 1 lợi thế.Có kinh nghiệm làm việc với các BaaS như Firebase là lợi thế'
        +'Android Developer:Hiểu về mô hình Client-server.Hiểu và thành thạo lập trình hướng đối tượng.Kinh nghiệm sử dụng các mô hình phổ biến trong Android như MVP/MVVM.Kinh nghiệm triển khai các API mới.Có nền tảng Java tốt là 1 lợi thế', 'New'));
    listJobs.push(new Job('daesun.png', 'Automation Tester1', 'BKAV', '1500', 'Ha Noi', true, true, true, 'Tham gia vào các dự án phần mềm với các đối tác hàng đầu Nhật Bản.Lập trình các ứng dụng iOS, Android.Tham gia vào quá trình thiết kế, review source code',
        'iOS Developer:Nắm vững kiến thức về Swift/Objective C.Có kinh nghiệm làm việc với SQLite, Realm.Có tư duy logic về Data Structures, Algorithm.Có hiểu biết về Clean code, Solid, design Pattern là 1 lợi thế.Có kinh nghiệm làm việc với các BaaS như Firebase là lợi thế'
        + 'Android Developer:Hiểu về mô hình Client-server.Hiểu và thành thạo lập trình hướng đối tượng.Kinh nghiệm sử dụng các mô hình phổ biến trong Android như MVP/MVVM.Kinh nghiệm triển khai các API mới.Có nền tảng Java tốt là 1 lợi thế', 'New'));
    listJobs.push(new Job('hybird.png', 'Automation Tester2', 'BKAV', '1500', 'Ha Noi', true, true, true, 'Tham gia vào các dự án phần mềm với các đối tác hàng đầu Nhật Bản.Lập trình các ứng dụng iOS, Android.Tham gia vào quá trình thiết kế, review source code',
        'iOS Developer:Nắm vững kiến thức về Swift/Objective C.Có kinh nghiệm làm việc với SQLite, Realm.Có tư duy logic về Data Structures, Algorithm.Có hiểu biết về Clean code, Solid, design Pattern là 1 lợi thế.Có kinh nghiệm làm việc với các BaaS như Firebase là lợi thế'
        + 'Android Developer:Hiểu về mô hình Client-server.Hiểu và thành thạo lập trình hướng đối tượng.Kinh nghiệm sử dụng các mô hình phổ biến trong Android như MVP/MVVM.Kinh nghiệm triển khai các API mới.Có nền tảng Java tốt là 1 lợi thế', 'New'));
    listJobs.push(new Job('Neo.png', 'Automation Tester3', 'BKAV', '1500', 'Ha Noi', true, true, true, 'Tham gia vào các dự án phần mềm với các đối tác hàng đầu Nhật Bản.Lập trình các ứng dụng iOS, Android.Tham gia vào quá trình thiết kế, review source code',
        'iOS Developer:Nắm vững kiến thức về Swift/Objective C.Có kinh nghiệm làm việc với SQLite, Realm.Có tư duy logic về Data Structures, Algorithm.Có hiểu biết về Clean code, Solid, design Pattern là 1 lợi thế.Có kinh nghiệm làm việc với các BaaS như Firebase là lợi thế'
        + 'Android Developer:Hiểu về mô hình Client-server.Hiểu và thành thạo lập trình hướng đối tượng.Kinh nghiệm sử dụng các mô hình phổ biến trong Android như MVP/MVVM.Kinh nghiệm triển khai các API mới.Có nền tảng Java tốt là 1 lợi thế', 'Not'));
    localStorage.setItem('listJobs', JSON.stringify(listJobs));
    listCompany.push(new Company('bkav.png', 'BKAV', 'Hà Nội', 'Bkav là Tập đoàn công nghệ hoạt động trong các lĩnh vực an ninh mạng, phần mềm, chính phủ điện tử, nhà sản xuất smartphone và các thiết bị điện tử thông minh, Bkav là 1 trong 10 thương hiệu Nổi tiếng nhất Việt Nam do Hội Sở hữu trí tuệ Việt Nam bình chọn, nằm trong Top 10 Dịch vụ hoàn hảo do Hội Tiêu chuẩn Bảo vệ Người tiêu dùng Việt Nam bình chọn',
        'Vươn tới thế giới mới, tầm cao mới – Nơi mỗi cá nhân, tập thể tại Hybrid Technologies ngày càng trở nên tuyệt vời hơn thông qua việc cùng nhau phát triển và nỗ lực hiện thực hóa giấc mơ chung',
        ' Luôn tự phát triển & Đồng hành cùng thành công của khách hàng Trở thành một công ty công nghệ toàn cầu, một đối tác chuyên nghiệp, tin cậy thông qua việc luôn tự phát triển, song song với việc đồng hành cùng sự phát triển và thành công của khách hàng','still'));
    listCompany.push(new Company('Nec.png', 'VNPT', 'Hà Nội', 'Bkav là Tập đoàn công nghệ hoạt động trong các lĩnh vực an ninh mạng, phần mềm, chính phủ điện tử, nhà sản xuất smartphone và các thiết bị điện tử thông minh, Bkav là 1 trong 10 thương hiệu Nổi tiếng nhất Việt Nam do Hội Sở hữu trí tuệ Việt Nam bình chọn, nằm trong Top 10 Dịch vụ hoàn hảo do Hội Tiêu chuẩn Bảo vệ Người tiêu dùng Việt Nam bình chọn',
        'Vươn tới thế giới mới, tầm cao mới – Nơi mỗi cá nhân, tập thể tại Hybrid Technologies ngày càng trở nên tuyệt vời hơn thông qua việc cùng nhau phát triển và nỗ lực hiện thực hóa giấc mơ chung',
        ' Luôn tự phát triển & Đồng hành cùng thành công của khách hàng Trở thành một công ty công nghệ toàn cầu, một đối tác chuyên nghiệp, tin cậy thông qua việc luôn tự phát triển, song song với việc đồng hành cùng sự phát triển và thành công của khách hàng', 'still'));
    listCompany.push(new Company('Neo.png', 'VINGROUP', 'Hà Nội', 'Bkav là Tập đoàn công nghệ hoạt động trong các lĩnh vực an ninh mạng, phần mềm, chính phủ điện tử, nhà sản xuất smartphone và các thiết bị điện tử thông minh, Bkav là 1 trong 10 thương hiệu Nổi tiếng nhất Việt Nam do Hội Sở hữu trí tuệ Việt Nam bình chọn, nằm trong Top 10 Dịch vụ hoàn hảo do Hội Tiêu chuẩn Bảo vệ Người tiêu dùng Việt Nam bình chọn',
        'Vươn tới thế giới mới, tầm cao mới – Nơi mỗi cá nhân, tập thể tại Hybrid Technologies ngày càng trở nên tuyệt vời hơn thông qua việc cùng nhau phát triển và nỗ lực hiện thực hóa giấc mơ chung',
        ' Luôn tự phát triển & Đồng hành cùng thành công của khách hàng Trở thành một công ty công nghệ toàn cầu, một đối tác chuyên nghiệp, tin cậy thông qua việc luôn tự phát triển, song song với việc đồng hành cùng sự phát triển và thành công của khách hàng', 'still'));
    listCompany.push(new Company('VinD.png', 'SYMPHONY', 'Hà Nội', 'Bkav là Tập đoàn công nghệ hoạt động trong các lĩnh vực an ninh mạng, phần mềm, chính phủ điện tử, nhà sản xuất smartphone và các thiết bị điện tử thông minh, Bkav là 1 trong 10 thương hiệu Nổi tiếng nhất Việt Nam do Hội Sở hữu trí tuệ Việt Nam bình chọn, nằm trong Top 10 Dịch vụ hoàn hảo do Hội Tiêu chuẩn Bảo vệ Người tiêu dùng Việt Nam bình chọn',
        'Vươn tới thế giới mới, tầm cao mới – Nơi mỗi cá nhân, tập thể tại Hybrid Technologies ngày càng trở nên tuyệt vời hơn thông qua việc cùng nhau phát triển và nỗ lực hiện thực hóa giấc mơ chung',
        ' Luôn tự phát triển & Đồng hành cùng thành công của khách hàng Trở thành một công ty công nghệ toàn cầu, một đối tác chuyên nghiệp, tin cậy thông qua việc luôn tự phát triển, song song với việc đồng hành cùng sự phát triển và thành công của khách hàng', 'still'));
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

function Job(image, name, company, salary, address, healthy, train, travel,description,requirement, status) {
    this.image = image;
    this.name = name;
    this.company = company;
    this.salary = salary;
    this.address = address;
    this.healthy = healthy;
    this.train = train;
    this.travel = travel;
    this.description = description;
    this.requirement = requirement;
    this.status = status;
}

function Company(image, name, address,introduction,vision,mission, status) {
    this.image = image;
    this.name = name;
    this.address = address;
    this.introduction = introduction;
    this.vision = vision;
    this.mission = mission;
    this.status = status;
}

function Question(image, title, answer, status) {
    this.image = image;
    this.title = title;
    this.answer = answer;
    this.status = status;
}