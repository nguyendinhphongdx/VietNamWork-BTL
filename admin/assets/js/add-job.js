function setup() {
    cbDisable = document.getElementById('idisable');
    lbDi = document.getElementById('lbdi');
    cbDisable.addEventListener('change', changeValueD);
}

function changeValueD() {
    if (cbDisable.getAttribute('value') == 'not') {
        cbDisable.setAttribute('value', 'checked');
        lbdi.innerHTML = 'True';
    } else {
        cbDisable.setAttribute('value', 'not');
        lbdi.innerHTML = 'False';
    }
    console.log(cbDisable.getAttribute('value'));
}

function addJob() {
    var image = document.getElementById('image');
    var name = document.getElementById('name').value;
    var company = document.getElementById('company').value;
    var salary = document.getElementById('salary').value;
    var address = document.getElementById('address').value;
    var status = document.getElementById('idisable').value;
    //console.log(name+company+salary+address+status);
    console.log(image.value);
}

function Job(image, name, company, salary, address, status) {
    this.image = image;
    this.name = name;
    this.company = company;
    this.salary = salary;
    this.address = address;
    this.status = status;
}