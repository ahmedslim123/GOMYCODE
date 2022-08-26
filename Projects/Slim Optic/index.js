

elements = document.getElementsByClassName("fa-solid fa-heart");
for (var i = 0; i < elements.length; i++)
{
    elements[i].addEventListener("click" , changecolor)
}
function changecolor(e) {
    
    e.target.style.color=="black"? e.target.style.color="#0986FA": e.target.style.color ="black"
 }
elements = document.getElementsByClassName("  fa-basket-shopping");

for (var i = 0; i < elements.length; i++)
{
    elements[i].addEventListener("click" , changecolorbasket)
}
function changecolorbasket(e) {
    
     e.target.style.color=="grey"? e.target.style.color="#0986FA": e.target.style.color ="grey"
 
 }

 function show(){
    if(document.getElementsByClassName("pop")[0].style.display=="block")
    document.getElementsByClassName("pop")[0].style.display="none"
    else document.getElementsByClassName("pop")[0].style.display="block"
}

function like(){
    if(document.getElementById("iki").style.display=="block")
    document.getElementById("iki").style.display="none"
    else document.getElementById("iki").style.display="block"
}

tac= document.getElementsByClassName("hello")
    for(i=0;i<tac.length;i++)
    {
        tac[i].addEventListener("click",add)
    }


    function add(a){
        x=a.target.parentElement.cloneNode(true);
        x.setAttribute("class", "democlass");
        var element=document.createElement('button')
        element.innerText="delete"
        element.setAttribute("id","delete")
            element.onclick=function()
            {
                document.getElementsByClassName("democlass")[0].remove();
            }
        x.append(element)
        document.getElementsByClassName("pop")[0].append(x)

}

function showHomme(){
    document.getElementsByClassName("homme").style.display="block"
    document.getElementsByClassName("femme").style.display="none"
    document.getElementsByClassName("enfant").style.display="none"
    document.getElementsByClassName("mixte").style.display="none"

}
function showFemme(){
    document.getElementsByClassName("homme").style.display="none"
    document.getElementsByClassName("femme").style.display="block"
    document.getElementsByClassName("enfant").style.display="none"
    document.getElementsByClassName("mixte").style.display="none"

}
function showEnfant(){
    document.getElementsByClassName("homme").style.display="none"
    document.getElementsByClassName("femme").style.display="none"
    document.getElementsByClassName("enfant").style.display="block"
    document.getElementsByClassName("mixte").style.display="none"

}
function showMixte(){
    document.getElementsByClassName("homme").style.display="none"
    document.getElementsByClassName("femme").style.display="none"
    document.getElementsByClassName("enfant").style.display="none"
    document.getElementsByClassName("mixte").style.display="block"

}