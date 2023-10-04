hamburger= document.querySelector('.hamburger');
hamburger.onclick= function(){
    navBar= document.querySelector('.nav-bar');

    navBar.classList.toggle('active');
}


function getthestuff(){


    var a= document.getElementById("Name").value;


    var b= document.getElementById("comment").value;


console.log("Your name is " + a );
console.log ("Your comment is " + b );


    document.getElementById("username2").innerHTML= "Your name is " + a;
    document.getElementById("comment2").innerHTML= "You wrote :  " + b;
}