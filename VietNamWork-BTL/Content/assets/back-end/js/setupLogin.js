var listAccount = [];
var listJobs = [];
var listCompany = [];
var listQuestion = [];
function setup() {
    listAccount.push(new User('Nguyễn Đình Phong', 'dinhphong', '123', 'phongnguyendx@gmail.com', '039403920', false));
    listAccount.push(new User('Lưu Thị Xuyên', 'xuyenluu', '123', 'luuthixuyen@gmail.com', '090593400', false));
    listAccount.push(new User('Kiều Thị Thu Thúy', 'thuthuy', '123', 'kieuthithuthuy@gmail.com', '08987968', false));
    localStorage.setItem('listAccount', JSON.stringify(listAccount));
    setData();
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
function setData() {
    listJobs.push(new Job('bkav.png', 'Chuyên Viên An Ninh Mạng', 'BKAV', '1500', 'Ha Noi', true, true, true, `- Nắm vững kiến thức về Swift/Objective C,
- Có kinh nghiệm làm việc với SQLite, Realm,
- Có tư duy logic về Data Structures, Algorithm,
- Có hiểu biết về Clean code, Solid, design Pattern là 1 lợi thế,
- Có kinh nghiệm làm việc với các BaaS như Firebase là lợi thế`,
        'iOS Developer:Nắm vững kiến thức về Swift/Objective C.Có kinh nghiệm làm việc với SQLite, Realm.Có tư duy logic về Data Structures, Algorithm.Có hiểu biết về Clean code, Solid, design Pattern là 1 lợi thế.Có kinh nghiệm làm việc với các BaaS như Firebase là lợi thế'
        + 'Android Developer:Hiểu về mô hình Client-server.Hiểu và thành thạo lập trình hướng đối tượng.Kinh nghiệm sử dụng các mô hình phổ biến trong Android như MVP/MVVM.Kinh nghiệm triển khai các API mới.Có nền tảng Java tốt là 1 lợi thế', 'New'));
    listJobs.push(new Job('daesun.png', 'Lập Trình Viên PHP', 'DAESUN', '1500', 'Ha Noi', true, true, true, 'Tham gia vào các dự án phần mềm với các đối tác hàng đầu Nhật Bản.Lập trình các ứng dụng iOS, Android.Tham gia vào quá trình thiết kế, review source code',
        'iOS Developer:Nắm vững kiến thức về Swift/Objective C.Có kinh nghiệm làm việc với SQLite, Realm.Có tư duy logic về Data Structures, Algorithm.Có hiểu biết về Clean code, Solid, design Pattern là 1 lợi thế.Có kinh nghiệm làm việc với các BaaS như Firebase là lợi thế'
        + 'Android Developer:Hiểu về mô hình Client-server.Hiểu và thành thạo lập trình hướng đối tượng.Kinh nghiệm sử dụng các mô hình phổ biến trong Android như MVP/MVVM.Kinh nghiệm triển khai các API mới.Có nền tảng Java tốt là 1 lợi thế', 'New'));
    listJobs.push(new Job('hybird.png', 'Developer Mobile App', 'HYBIRD', '1500', 'Ha Noi', true, true, true, 'Tham gia vào các dự án phần mềm với các đối tác hàng đầu Nhật Bản.Lập trình các ứng dụng iOS, Android.Tham gia vào quá trình thiết kế, review source code',
        'iOS Developer:Nắm vững kiến thức về Swift/Objective C.Có kinh nghiệm làm việc với SQLite, Realm.Có tư duy logic về Data Structures, Algorithm.Có hiểu biết về Clean code, Solid, design Pattern là 1 lợi thế.Có kinh nghiệm làm việc với các BaaS như Firebase là lợi thế'
        + 'Android Developer:Hiểu về mô hình Client-server.Hiểu và thành thạo lập trình hướng đối tượng.Kinh nghiệm sử dụng các mô hình phổ biến trong Android như MVP/MVVM.Kinh nghiệm triển khai các API mới.Có nền tảng Java tốt là 1 lợi thế', 'New'));
    listJobs.push(new Job('Neo.png', 'Kiểm Tra Viên - Tester', 'NEO', '1500', 'Ha Noi', true, true, true, 'Tham gia vào các dự án phần mềm với các đối tác hàng đầu Nhật Bản.Lập trình các ứng dụng iOS, Android.Tham gia vào quá trình thiết kế, review source code',
        'iOS Developer:Nắm vững kiến thức về Swift/Objective C.Có kinh nghiệm làm việc với SQLite, Realm.Có tư duy logic về Data Structures, Algorithm.Có hiểu biết về Clean code, Solid, design Pattern là 1 lợi thế.Có kinh nghiệm làm việc với các BaaS như Firebase là lợi thế'
        + 'Android Developer:Hiểu về mô hình Client-server.Hiểu và thành thạo lập trình hướng đối tượng.Kinh nghiệm sử dụng các mô hình phổ biến trong Android như MVP/MVVM.Kinh nghiệm triển khai các API mới.Có nền tảng Java tốt là 1 lợi thế', 'Not'));
    listJobs.push(new Job('Nec.png', 'Lập Trình Viên React-native', 'NEC', '1500', 'Ha Noi', true, true, true, 'Tham gia vào các dự án phần mềm với các đối tác hàng đầu Nhật Bản.Lập trình các ứng dụng iOS, Android.Tham gia vào quá trình thiết kế, review source code',
        'iOS Developer:Nắm vững kiến thức về Swift/Objective C.Có kinh nghiệm làm việc với SQLite, Realm.Có tư duy logic về Data Structures, Algorithm.Có hiểu biết về Clean code, Solid, design Pattern là 1 lợi thế.Có kinh nghiệm làm việc với các BaaS như Firebase là lợi thế'
        + 'Android Developer:Hiểu về mô hình Client-server.Hiểu và thành thạo lập trình hướng đối tượng.Kinh nghiệm sử dụng các mô hình phổ biến trong Android như MVP/MVVM.Kinh nghiệm triển khai các API mới.Có nền tảng Java tốt là 1 lợi thế', 'Not'));
    listJobs.push(new Job('Vinhome.png', 'Nhân Viên Thiết Kế Nội Thất', 'VINHOME', '1500', 'Ha Noi', true, true, true, 'Tham gia vào các dự án phần mềm với các đối tác hàng đầu Nhật Bản.Lập trình các ứng dụng iOS, Android.Tham gia vào quá trình thiết kế, review source code',
        'iOS Developer:Nắm vững kiến thức về Swift/Objective C.Có kinh nghiệm làm việc với SQLite, Realm.Có tư duy logic về Data Structures, Algorithm.Có hiểu biết về Clean code, Solid, design Pattern là 1 lợi thế.Có kinh nghiệm làm việc với các BaaS như Firebase là lợi thế'
        + 'Android Developer:Hiểu về mô hình Client-server.Hiểu và thành thạo lập trình hướng đối tượng.Kinh nghiệm sử dụng các mô hình phổ biến trong Android như MVP/MVVM.Kinh nghiệm triển khai các API mới.Có nền tảng Java tốt là 1 lợi thế', 'Not'));
    localStorage.setItem('listJobs', JSON.stringify(listJobs));
    listCompany.push(new Company('bkav.png', 'BKAV', 'Hà Nội', 'Bkav là Tập đoàn công nghệ hoạt động trong các lĩnh vực an ninh mạng, phần mềm, chính phủ điện tử, nhà sản xuất smartphone và các thiết bị điện tử thông minh, Bkav là 1 trong 10 thương hiệu Nổi tiếng nhất Việt Nam do Hội Sở hữu trí tuệ Việt Nam bình chọn, nằm trong Top 10 Dịch vụ hoàn hảo do Hội Tiêu chuẩn Bảo vệ Người tiêu dùng Việt Nam bình chọn',
        'Vươn tới thế giới mới, tầm cao mới – Nơi mỗi cá nhân, tập thể tại Hybrid Technologies ngày càng trở nên tuyệt vời hơn thông qua việc cùng nhau phát triển và nỗ lực hiện thực hóa giấc mơ chung',
        ' Luôn tự phát triển & Đồng hành cùng thành công của khách hàng Trở thành một công ty công nghệ toàn cầu, một đối tác chuyên nghiệp, tin cậy thông qua việc luôn tự phát triển, song song với việc đồng hành cùng sự phát triển và thành công của khách hàng', 'still'));
    listCompany.push(new Company('Nec.png', 'NEC', 'Hà Nội', 'NEC là Tập đoàn công nghệ hoạt động trong các lĩnh vực an ninh mạng, phần mềm, chính phủ điện tử, nhà sản xuất smartphone và các thiết bị điện tử thông minh, Bkav là 1 trong 10 thương hiệu Nổi tiếng nhất Việt Nam do Hội Sở hữu trí tuệ Việt Nam bình chọn, nằm trong Top 10 Dịch vụ hoàn hảo do Hội Tiêu chuẩn Bảo vệ Người tiêu dùng Việt Nam bình chọn',
        'Vươn tới thế giới mới, tầm cao mới – Nơi mỗi cá nhân, tập thể tại Hybrid Technologies ngày càng trở nên tuyệt vời hơn thông qua việc cùng nhau phát triển và nỗ lực hiện thực hóa giấc mơ chung',
        ' Luôn tự phát triển & Đồng hành cùng thành công của khách hàng Trở thành một công ty công nghệ toàn cầu, một đối tác chuyên nghiệp, tin cậy thông qua việc luôn tự phát triển, song song với việc đồng hành cùng sự phát triển và thành công của khách hàng', 'still'));
    listCompany.push(new Company('Neo.png', 'NEO', 'Hà Nội', 'NEO là Tập đoàn công nghệ hoạt động trong các lĩnh vực an ninh mạng, phần mềm, chính phủ điện tử, nhà sản xuất smartphone và các thiết bị điện tử thông minh, Bkav là 1 trong 10 thương hiệu Nổi tiếng nhất Việt Nam do Hội Sở hữu trí tuệ Việt Nam bình chọn, nằm trong Top 10 Dịch vụ hoàn hảo do Hội Tiêu chuẩn Bảo vệ Người tiêu dùng Việt Nam bình chọn',
        'Vươn tới thế giới mới, tầm cao mới – Nơi mỗi cá nhân, tập thể tại Hybrid Technologies ngày càng trở nên tuyệt vời hơn thông qua việc cùng nhau phát triển và nỗ lực hiện thực hóa giấc mơ chung',
        ' Luôn tự phát triển & Đồng hành cùng thành công của khách hàng Trở thành một công ty công nghệ toàn cầu, một đối tác chuyên nghiệp, tin cậy thông qua việc luôn tự phát triển, song song với việc đồng hành cùng sự phát triển và thành công của khách hàng', 'still'));
    listCompany.push(new Company('hybird.png', 'HYBIRD', 'Hà Nội', 'HYBIRD là Tập đoàn công nghệ hoạt động trong các lĩnh vực an ninh mạng, phần mềm, chính phủ điện tử, nhà sản xuất smartphone và các thiết bị điện tử thông minh, Bkav là 1 trong 10 thương hiệu Nổi tiếng nhất Việt Nam do Hội Sở hữu trí tuệ Việt Nam bình chọn, nằm trong Top 10 Dịch vụ hoàn hảo do Hội Tiêu chuẩn Bảo vệ Người tiêu dùng Việt Nam bình chọn',
        'Vươn tới thế giới mới, tầm cao mới – Nơi mỗi cá nhân, tập thể tại Hybrid Technologies ngày càng trở nên tuyệt vời hơn thông qua việc cùng nhau phát triển và nỗ lực hiện thực hóa giấc mơ chung',
        ' Luôn tự phát triển & Đồng hành cùng thành công của khách hàng Trở thành một công ty công nghệ toàn cầu, một đối tác chuyên nghiệp, tin cậy thông qua việc luôn tự phát triển, song song với việc đồng hành cùng sự phát triển và thành công của khách hàng', 'still'));
    listCompany.push(new Company('daesun.png', 'DAESUN', 'Hà Nội', 'DAESUN là Tập đoàn công nghệ hoạt động trong các lĩnh vực an ninh mạng, phần mềm, chính phủ điện tử, nhà sản xuất smartphone và các thiết bị điện tử thông minh, Bkav là 1 trong 10 thương hiệu Nổi tiếng nhất Việt Nam do Hội Sở hữu trí tuệ Việt Nam bình chọn, nằm trong Top 10 Dịch vụ hoàn hảo do Hội Tiêu chuẩn Bảo vệ Người tiêu dùng Việt Nam bình chọn',
        'Vươn tới thế giới mới, tầm cao mới – Nơi mỗi cá nhân, tập thể tại Hybrid Technologies ngày càng trở nên tuyệt vời hơn thông qua việc cùng nhau phát triển và nỗ lực hiện thực hóa giấc mơ chung',
        ' Luôn tự phát triển & Đồng hành cùng thành công của khách hàng Trở thành một công ty công nghệ toàn cầu, một đối tác chuyên nghiệp, tin cậy thông qua việc luôn tự phát triển, song song với việc đồng hành cùng sự phát triển và thành công của khách hàng', 'still'));
    listCompany.push(new Company('Vinhome.png', 'VINHOME', 'Hà Nội', 'VINHOME là Tập đoàn công nghệ hoạt động trong các lĩnh vực an ninh mạng, phần mềm, chính phủ điện tử, nhà sản xuất smartphone và các thiết bị điện tử thông minh, Bkav là 1 trong 10 thương hiệu Nổi tiếng nhất Việt Nam do Hội Sở hữu trí tuệ Việt Nam bình chọn, nằm trong Top 10 Dịch vụ hoàn hảo do Hội Tiêu chuẩn Bảo vệ Người tiêu dùng Việt Nam bình chọn',
        'Vươn tới thế giới mới, tầm cao mới – Nơi mỗi cá nhân, tập thể tại Hybrid Technologies ngày càng trở nên tuyệt vời hơn thông qua việc cùng nhau phát triển và nỗ lực hiện thực hóa giấc mơ chung',
        ' Luôn tự phát triển & Đồng hành cùng thành công của khách hàng Trở thành một công ty công nghệ toàn cầu, một đối tác chuyên nghiệp, tin cậy thông qua việc luôn tự phát triển, song song với việc đồng hành cùng sự phát triển và thành công của khách hàng', 'still'));
    localStorage.setItem('listCompany', JSON.stringify(listCompany));
    localStorage.setItem('listCompany', JSON.stringify(listCompany));
    listQuestion.push(new Question('Vinhome.png', 'Giới thiệu sơ lược về bản thân bạn?(Could you briefly Introduce yourself?)', ' <p>Tham khảo câu trả lời phỏng vấn mẫu bằng Tiếng Việt: "Trước khi giới thiệu về bản thân mình, em/tôi xin gửi lời cảm ơn chân thành tới anh/chị khi đã tạo cơ hội cho em/tôi để được trao đổi về vị trí ứng tuyển của quý công' +
        'ty.Em chào anh / chị, tên em là Mai, họ tên đầy đủ của em là Trịnh Thị Tuyết Mai.Em là sinh viên mới ra trường của Trường đại học X, trong thời gian làm sinh viên em đã từng tham gia một số công việc bán thời gian nhưng không thật sự ấn tượng, vì các công việc em làm khá đơn giản, tuy vậy thông qua chúng em học được tính kiên nhẫn và tỉ mỉ.Thông qua các hoạt động này, em có kinh nghiệm hơn trong việc nắm bắt tâm lý người khác,' +
        'có thêm những kỹ năng như quan sát, có khả năng chịu áp lực cao.Và em tin những điều này sẽ có ích đối với vị trí này.Qua tìm hiểu kỹ về vị trí công việc và môi trường làm việc bên mình cũng như những kinh nghiệm và sở trường em đang có, em thực sự mong muốn được có cơ hội được làm việc cùng anh chị tại công ty Y với vị trí nhân viên tư vấn khách hàng.</p>' +
        '<p> Tham khảo câu trả lời phỏng vấn mẫu bằng Tiếng Việt: "Trước khi giới thiệu về bản thân mình, em/tôi xin gửi lời cảm ơn chân thành tới anh/chị khi đã tạo cơ hội cho em/tôi để được trao đổi về vị trí ứng tuyển của quý công' +
        'ty.Em chào anh / chị, tên em là Mai, họ tên đầy đủ của em là Trịnh Thị Tuyết Mai.Em là sinh viên mới ra trường của Trường đại học X, trong thời gian làm sinh viên em đã từng tham gia một số công việc bán thời gian nhưng không thật sự ấn tượng, vì các công việc em làm khá đơn giản, tuy vậy thông qua chúng em học được tính kiên nhẫn và tỉ mỉ.Thông qua các hoạt động này, em có kinh nghiệm hơn trong việc nắm bắt tâm lý người khác,' +
        'có thêm những kỹ năng như quan sát, có khả năng chịu áp lực cao.Và em tin những điều này sẽ có ích đối với vị trí này.Qua tìm hiểu kỹ về vị trí công việc và môi trường làm việc bên mình cũng như những kinh nghiệm và sở trường em đang có, em thực sự mong muốn được có cơ hội được làm việc cùng anh chị tại công ty Y với vị trí nhân viên tư vấn khách hàng.' +
        '</p>', 'favourite'));
    listQuestion.push(new Question('daesun.png', 'Bạn có thể mô tả sơ lược về những công việc bạn đã làm? Nhiệm vụ chính ở công việc gần đây nhất của bạn là gì? (Can you briefly describe the work you have done? What was the main tasks at your most recent job?)', ' <p>Tham khảo câu trả lời phỏng vấn mẫu bằng Tiếng Việt: "Trước khi giới thiệu về bản thân mình, em/tôi xin gửi lời cảm ơn chân thành tới anh/chị khi đã tạo cơ hội cho em/tôi để được trao đổi về vị trí ứng tuyển của quý công' +
        'ty.Em chào anh / chị, tên em là Mai, họ tên đầy đủ của em là Trịnh Thị Tuyết Mai.Em là sinh viên mới ra trường của Trường đại học X, trong thời gian làm sinh viên em đã từng tham gia một số công việc bán thời gian nhưng không thật sự ấn tượng, vì các công việc em làm khá đơn giản, tuy vậy thông qua chúng em học được tính kiên nhẫn và tỉ mỉ.Thông qua các hoạt động này, em có kinh nghiệm hơn trong việc nắm bắt tâm lý người khác,' +
        'có thêm những kỹ năng như quan sát, có khả năng chịu áp lực cao.Và em tin những điều này sẽ có ích đối với vị trí này.Qua tìm hiểu kỹ về vị trí công việc và môi trường làm việc bên mình cũng như những kinh nghiệm và sở trường em đang có, em thực sự mong muốn được có cơ hội được làm việc cùng anh chị tại công ty Y với vị trí nhân viên tư vấn khách hàng.</p>' +
        '<p> Tham khảo câu trả lời phỏng vấn mẫu bằng Tiếng Việt: "Trước khi giới thiệu về bản thân mình, em/tôi xin gửi lời cảm ơn chân thành tới anh/chị khi đã tạo cơ hội cho em/tôi để được trao đổi về vị trí ứng tuyển của quý công' +
        'ty.Em chào anh / chị, tên em là Mai, họ tên đầy đủ của em là Trịnh Thị Tuyết Mai.Em là sinh viên mới ra trường của Trường đại học X, trong thời gian làm sinh viên em đã từng tham gia một số công việc bán thời gian nhưng không thật sự ấn tượng, vì các công việc em làm khá đơn giản, tuy vậy thông qua chúng em học được tính kiên nhẫn và tỉ mỉ.Thông qua các hoạt động này, em có kinh nghiệm hơn trong việc nắm bắt tâm lý người khác,' +
        'có thêm những kỹ năng như quan sát, có khả năng chịu áp lực cao.Và em tin những điều này sẽ có ích đối với vị trí này.Qua tìm hiểu kỹ về vị trí công việc và môi trường làm việc bên mình cũng như những kinh nghiệm và sở trường em đang có, em thực sự mong muốn được có cơ hội được làm việc cùng anh chị tại công ty Y với vị trí nhân viên tư vấn khách hàng.' +
        '</p>', 'favourite'));
    listQuestion.push(new Question('Neo.png', 'Những thành tựu nào đã đạt được trong công việc khiến bạn tự hào nhất? (What achievements in your job are you most proud of?)', ' <p>Tham khảo câu trả lời phỏng vấn mẫu bằng Tiếng Việt: "Trước khi giới thiệu về bản thân mình, em/tôi xin gửi lời cảm ơn chân thành tới anh/chị khi đã tạo cơ hội cho em/tôi để được trao đổi về vị trí ứng tuyển của quý công' +
        'ty.Em chào anh / chị, tên em là Mai, họ tên đầy đủ của em là Trịnh Thị Tuyết Mai.Em là sinh viên mới ra trường của Trường đại học X, trong thời gian làm sinh viên em đã từng tham gia một số công việc bán thời gian nhưng không thật sự ấn tượng, vì các công việc em làm khá đơn giản, tuy vậy thông qua chúng em học được tính kiên nhẫn và tỉ mỉ.Thông qua các hoạt động này, em có kinh nghiệm hơn trong việc nắm bắt tâm lý người khác,' +
        'có thêm những kỹ năng như quan sát, có khả năng chịu áp lực cao.Và em tin những điều này sẽ có ích đối với vị trí này.Qua tìm hiểu kỹ về vị trí công việc và môi trường làm việc bên mình cũng như những kinh nghiệm và sở trường em đang có, em thực sự mong muốn được có cơ hội được làm việc cùng anh chị tại công ty Y với vị trí nhân viên tư vấn khách hàng.</p>' +
        '<p> Tham khảo câu trả lời phỏng vấn mẫu bằng Tiếng Việt: "Trước khi giới thiệu về bản thân mình, em/tôi xin gửi lời cảm ơn chân thành tới anh/chị khi đã tạo cơ hội cho em/tôi để được trao đổi về vị trí ứng tuyển của quý công' +
        'ty.Em chào anh / chị, tên em là Mai, họ tên đầy đủ của em là Trịnh Thị Tuyết Mai.Em là sinh viên mới ra trường của Trường đại học X, trong thời gian làm sinh viên em đã từng tham gia một số công việc bán thời gian nhưng không thật sự ấn tượng, vì các công việc em làm khá đơn giản, tuy vậy thông qua chúng em học được tính kiên nhẫn và tỉ mỉ.Thông qua các hoạt động này, em có kinh nghiệm hơn trong việc nắm bắt tâm lý người khác,' +
        'có thêm những kỹ năng như quan sát, có khả năng chịu áp lực cao.Và em tin những điều này sẽ có ích đối với vị trí này.Qua tìm hiểu kỹ về vị trí công việc và môi trường làm việc bên mình cũng như những kinh nghiệm và sở trường em đang có, em thực sự mong muốn được có cơ hội được làm việc cùng anh chị tại công ty Y với vị trí nhân viên tư vấn khách hàng.' +
        '</p>', 'favourite'));
    localStorage.setItem('listQuestion', JSON.stringify(listQuestion));
}