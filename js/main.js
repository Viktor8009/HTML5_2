//Módosítjuk a h1 elem tartalmát
document.querySelector("h1").innerHTML="Hello ITFactory";


//Kép forrásának módosítása
function changeMoon(){
                
 document.querySelector("img").src="http://hangvar.hu/wp-content/uploads/2013/11/holdacska.png";
               
}

function changeSun(){
    
 document.querySelector("img").src="http://szepkepek.bloglap.hu/kepek/nap.png";
    
}

//Stílus módosítása
function imgReduce(){
         
    document.querySelector("img").style.width="40px";    
}

function imgEnlarge(){

    
    document.querySelector("img").style.width="255px";
    
}


//Adatok ellenőrzése

function validate(){
    
    //Az input mező és a hibaüzenet kiválasztása
     var input = document.querySelector(".input-validate");
    
     var errorP= document.querySelector(".no-validate");
    
    //Az input mező értékének kiolvasása
    
     var inputValue = input.value;
    
    //Az input mező éréke nagyobb legyen mint 5 és kisebb mint 21
    
    if(inputValue>5 && inputValue<21){
        
         console.log("Az érték megfelelő");
        
         errorP.innerHTML = "Az érték megfelelő";
         errorP.style.color="#006400";
        
    }
    
    else{
        
        errorP.innerHTML = "Az érték nem megfelelő";
        errorP.style.color= "#EE0000";

    }
    
}