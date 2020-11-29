var idQuestionEdit = JSON.parse(localStorage.getItem('idQuestionEdit'));
var listQuestion = JSON.parse(localStorage.getItem('listQuestion'));
var EditQustion = listQuestion[idQuestionEdit];

function setup() {
    console.log(EditQustion);
    if (EditQustion.image != '') {
        document.getElementById('imgsrc').setAttribute('src', '../assets/images/' + EditQustion.image);
    }
    document.getElementById('title').value = EditQustion.title;
    document.getElementById('answer').value = EditQustion.answer;
    if (EditQustion.status == 'favourite') {
        document.getElementById('idisable').checked = true;
    } else {
        document.getElementById('idisable').checked = false;
    }
}

function UpdateQuestion() {
    var image, title, answer, status;
    if (document.getElementById('image').value != '') {
        image = document.getElementById('image').files[0].name;
    } else {
        image = EditQustion.image;
    }
    title = document.getElementById('title').value;
    answer = document.getElementById('answer').value;
    if (document.getElementById("idisable").checked == true) {
        status = 'favourite';
    } else {
        status = '';
    }
    var question = new Question(image, title, answer, status);
    listQuestion[idQuestionEdit] = question;
    localStorage.setItem('listQuestion', JSON.stringify(listQuestion));
    localStorage.removeItem('idQuestionEdit');
    window.location = 'list_question';
}

function Question(image, title, answer, status) {
    this.image = image;
    this.title = title;
    this.answer = answer;
    this.status = status;
}