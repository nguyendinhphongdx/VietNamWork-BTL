var listQuestion = JSON.parse(localStorage.getItem('listQuestion'));

function setup() {

}

function AddQuestion() {
    var image = '';
    if (document.getElementById('image').value != '') {
        image = document.getElementById('image').value;
    }
    var title = document.getElementById('title').value;
    var answer = document.getElementById('answer').value;
    var status = '';
    if (document.getElementById('idisable').checked == true) {
        status = 'favourite';
    }
    listQuestion.push(new Question(image, title, answer, status));
    localStorage.setItem('listQuestion', JSON.stringify(listQuestion));
    window.location = 'list-questions.html';
}

function Question(image, title, answer, status) {
    this.image = image;
    this.title = title;
    this.answer = answer;
    this.status = status;
}