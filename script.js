// dichiaro immagini da inserire

const imgLandscapes = ["img/01.jpg", "img/02.jpg","img/03.jpg","img/04.jpg","img/05.jpg"];


 //dichiaro il luogo dove voglio inserire le immgagini
const imgContainer = document.querySelector('.img-container');
const imgSidebar = document.querySelector('.img-sidebar');

let currentIndex = 2;

//creo il ciclo per far scorrere le immgagini quanto la lunghezza della mia arrey

for (let i = 0; i < imgLandscapes.length; i++) {

    //assegno ad ogni elemento un immagine
    const landScapeCorrente = imgLandscapes[i];


    let classeAttivatrice = '';

    if (i === currentIndex){
        classeAttivatrice   ='active';
    }

    //devo creare il tag img da inserire all'interno del mio html
    //all'interno del mio contenitore .img-container
    const tagImg = `<img class='${classeAttivatrice}' src='${landScapeCorrente}' alt='immagine #${i}'>`;

        //inerisco il mio codice dell'immagine nel .img-container
    imgContainer.innerHTML += tagImg
    
}


/******************************            sidebar             ****************************************/ 
for (let i = 0; i < imgLandscapes.length; i++) {

    //assegno ad ogni elemento un immagine
    const landScapeCorrente = imgLandscapes[i];


    //devo creare il tag img da inserire all'interno del mio html
    //all'interno del mio contenitore .img-container
    const tagImg = `<img  src='${landScapeCorrente}' alt='immagine #${i}'>`;

        //inerisco il mio codice dell'immagine nel .img-container
    imgSidebar.innerHTML += tagImg
    
}








    //dichiaro le frecce
    const arrowTop = document.querySelector('.arrow-top');
    const arrowBottom = document.querySelector('.arrow-bottom');

        //per ogni freccia aggiungo una reazione

        //freccia in alto
        arrowTop.addEventListener('click', function(){

            //recupero l'elemeto con la classe active
            const activeImage = document.querySelector('.active');

            //rimuovo la classe active al clic della freccia al elemento corrente
            activeImage.classList.remove('active');
            //cambio il suo indice
            currentIndex--;


            //cerco tutti i tag img
            const  imgTags = imgContainer.querySelectorAll('img');
            const newActiveImg = imgTags[currentIndex]
            newActiveImg.classList.add('active')


        });


           //freccia in basso
           arrowBottom.addEventListener('click', function(){

            //recupero l'elemeto con la classe active
            const activeImage = document.querySelector('.active');

            //rimuovo la classe active al clic della freccia al elemento corrente
            activeImage.classList.remove('active');
            //cambio il suo indice
            currentIndex++;


            //cerco tutti i tag img
            const  imgTags = imgContainer.querySelectorAll('img');
            //assegno la classe active all'elemento corrente
            const newActiveImg = imgTags[currentIndex]
            newActiveImg.classList.add('active')


        });