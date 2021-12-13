let containerIMG = document.getElementById('multiIMG');
let buttonRetour = document.getElementById('button1');
let buttonAvance = document.getElementById('button2');
let tab = ['pictures/img1.jpg', 'pictures/img2.jpg','pictures/img3.jpg', 'pictures/img4.jpg', 'pictures/img5.jpg',
           'pictures/img6.jpg', 'pictures/img7.png', 'pictures/img8.jpg', 'pictures/img9.jpg', 'pictures/img10.jpg',
           'pictures/img11.jpg', 'pictures/img12.jpg'];

function tableau () {
    for(let i = 0 ; i < tab.length ; i++) {
        containerIMG.style.backgroundImage = 'url(' + tab[i] + ')';
    }
}

tableau();
let x = 0;
function next () {
    x++;
    tableau();
    containerIMG.style.backgroundImage = 'url(' + tab[x] + ')';
    if(x === tab.length - 1 ) {
        x = -1;
        containerIMG.style.backgroundImage = 'url(' + tab[x] + ')';
        console.log('coucou');
    }
}

function back () {
    x--;
    tableau();
    containerIMG.style.backgroundImage = 'url(' + tab[x] + ')';
    if(x === tab.length - 1 ) {
        x = -1;
        containerIMG.style.backgroundImage = 'url(' + tab[x] + ')';
        console.log('coucou');
    }
}

buttonAvance.addEventListener('click', next);
buttonRetour.addEventListener('click' , back);