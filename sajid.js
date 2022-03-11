let myInputs = document.querySelectorAll('.Input');
let submitForm = document.getElementById('Form');
let submitBtn = document.getElementById('Submit');

let pdfFile = document.querySelector('.pdfFile')
let textArea = document.querySelector('#textarea');
let txtBtn = document.querySelector('#txt');
let PDFBtn = document.querySelector('#csv');
let myFile = document.getElementById('file');


submitForm.addEventListener('submit', (e) => {
    e.preventDefault();
    location.href = 'login.html'
});


txtBtn.addEventListener('click', () => {
    textArea.innerHTML = myFile.value;
})


