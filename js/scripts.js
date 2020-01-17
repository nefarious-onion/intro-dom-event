console.log('That was it');

function increaseValue(){
    var grade = document.getElementById('grade').innerText;
    var formattedGrade = parseInt(grade);

    if (formattedGrade < 100) {
        document.getElementById('grade').innerText = formattedGrade + 1 + '%';
    }
}

function decreaseValue(){
    var grade = document.getElementById('grade').innerText;
    var formattedGrade = parseInt(grade);

    if (formattedGrade > 0) {
        document.getElementById('grade').innerText = formattedGrade - 1 + '%';
    }
}

function changeColor() {
    document.getElementById('coloredRow').style.backgroundColor = getRandomColor();
}

function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomColor();
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}