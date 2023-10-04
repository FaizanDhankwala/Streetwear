const slider=document.querySelector('.image-slider');

const arrLeft= document.querySelector('.arrow-left');

const arrRight= document.querySelector('.arrow-right');

const heading= document.querySelector('caption h1');

const description = document.querySelector('caption p');


const images= [
    "worldtour2.png", "worldtour3.png", "worldtour6.png"
];


const headings= [
    "Grand escape, Italy", "Oregon Forest, US", "Souel, Koreal", "My Basement, USA",
];

const descriptions = [
    "Drive your life away. Italy is home to many vintage cars",
     "A quick change of Scenery. Often times, the USA can be a good place to shoot films",
      "Up for the tournament, Korea is home to vibrant life and culture ",
       "I live here ong",
    ];

let id= 0;

function slide(id){
    slider.style.backgroundImage= `url(img/${images[id]})`;
    slider.classList.add('image-fade');

    setTimeout(() => {
    slider.classList.remove('image-fade');

}, 550);

heading.innerText= headings[id];

description.innerText= descriptions[id];

};


arrLeft.addEventListener('click',()=>{

    id--;

    if(id<0){
        id=images.length -1;

    }

    slide(id);
});

arrRight.addEventListener('click',()=>{

    id++;

    if(id>images.length-1){
        id=0;
    }

    slide(id);
});
