var like = document.getElementById("like")
like.addEventListener("click", myFunction)
var likelessener= document.querySelector("#likelessener")
var likeimg=document.querySelector("#likeimg")
var witelilike=document.querySelector("#witelilike")
var likdediv=document.querySelector("#likdediv")




function myFunction(){

    likelessener.textContent= "24 "
    likeimg.style.display = "none"
    witelilike.style.display = "block"
    like.style.display = "none"
    likebutton2.style.display="block"

}

var likebutton2=document.querySelector("#likebutton2")

likebutton2.addEventListener ("click", myFunction2)

function myFunction2(){
    
    likelessener.textContent= "23"
    likebutton2.style.display = "none";
    like.style.display="block" ;
    likeimg.style.display="block"

    
}
var rightdivhamburger = document.querySelector("#rightdivhamburger")
var hamburger=document.querySelector("#hamburger").addEventListener("click", fhamburger)
function fhamburger(){


    if (rightdivhamburger.style.display === "none") {
        rightdivhamburger.style.display = "block";
      } else {
        rightdivhamburger.style.display = "none";
      }
    };


    
