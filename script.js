// dichiaro immagini da inserire

const imgLandscapes = ["img/01.jpg", "img/02.jpg","img/03.jpg","img/04.jpg","img/05.jpg"];
const tittleText =["Lago","Svizzera","Londra","Dresden","Temae BeachTahiti"];
const descriptionText =["testo 1","testo 2","testo 3","testo 4","testo 5",];

 //dichiaro il luogo dove voglio inserire le immgagini
const imgContainer = document.querySelector('.img-container');
const imgSidebar = document.querySelector('.img-sidebar');


let currentIndex = 0;

//creo il ciclo per far scorrere le immgagini quanto la lunghezza della mia arrey

for (let i = 0; i < imgLandscapes.length; i++) {

    //assegno ad ogni elemento un immagine
    const landScapeCorrente = imgLandscapes[i];
    const tittleCurrent = tittleText[i];
    const descriptionCurrent = descriptionText[i];


    let classeAttivatrice = '';

    if (i === currentIndex){
        classeAttivatrice   ='active';
    }

    //devo creare il tag img da inserire all'interno del mio html
    //all'interno del mio contenitore .img-container
    const tagImg = `
                    <div class='boxframe ${classeAttivatrice}'>
                        <div class='img-box '>
                            <img src='${landScapeCorrente}' alt='immagine #${i + 1}'>
                        </div>
                        <div class="box-text" >
                            <h2>${tittleCurrent}</h2>
                            <span>${descriptionCurrent}</span> 
                        </div> 
                    </div>`;

        //inerisco il mio codice nell' html
    imgContainer.innerHTML += tagImg
    
}


/******************************            sidebar             ****************************************/ 
for (let i = 0; i < imgLandscapes.length; i++) {

    //assegno ad ogni elemento un immagine
    const landScapeCorrente = imgLandscapes[i];
    let classeAttivatrice = '';

    if (i === currentIndex){
        classeAttivatrice   ='active';
    }


    //devo creare il tag img da inserire all'interno del mio html
    //all'interno del mio contenitore .img-container
    const tagImg = `<div class='img-side-box ${classeAttivatrice}'><img  src='${landScapeCorrente}' alt='immagine #${i}'></div>`;

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
            const boxframe = imgContainer.querySelector('.active');
            const imgSideBox = imgSidebar.querySelector('.active');

            //rimuovo la classe active al clic della freccia al elemento corrente
            boxframe.classList.remove('active');
            imgSideBox.classList.remove('active');
            //cambio il suo indice
            currentIndex--;
            
            if(currentIndex < 0){
                currentIndex = imgLandscapes.length -1;
            }

            const tagBox = imgContainer.querySelectorAll('.boxframe');
            const sideBox = imgSidebar.querySelectorAll('.img-side-box');


            const newActiveBox = tagBox[currentIndex];
            const newActiveSide = sideBox[currentIndex];

            newActiveBox.classList.add('active');
            newActiveSide.classList.add('active');


            console.log(newActiveBox);
            
        });


           //freccia in basso
           arrowBottom.addEventListener('click', function(){

            //recupero l'elemeto con la classe active
            const boxframe = imgContainer.querySelector('.active');
            const imgSideBox = imgSidebar.querySelector('.active');


            //rimuovo la classe active al clic della freccia al elemento corrente
            boxframe.classList.remove('active');
            imgSideBox.classList.remove('active');

            //cambio il suo indice
            currentIndex++;
            
            if (currentIndex > imgLandscapes.length -1) {
                currentIndex = 0;
            }

            const tagBox = imgContainer.querySelectorAll('.boxframe'); 
            const sideBox = imgSidebar.querySelectorAll('.img-side-box');

            const newActiveBox = tagBox[currentIndex];
            const newActiveSide = sideBox[currentIndex];

            newActiveBox.classList.add('active');
            newActiveSide.classList.add('active');


            console.log(newActiveBox);

            
           
           
        });