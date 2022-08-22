

elements = document.getElementsByClassName("fa-solid fa-heart");
for (var i = 0; i < elements.length; i++)
{
    elements[i].addEventListener("click" , changecolor)
}
function changecolor(e) {
    
    if (e.target.style.color=="red")
     e.target.style.color="#979797"
     else
     e.target.style.color="red"
 }
elements = document.getElementsByClassName("  fa-basket-shopping");

for (var i = 0; i < elements.length; i++)
{
    elements[i].addEventListener("click" , changecolorbasket)
}
function changecolorbasket(e) {
    
     e.target.style.color=="grey"? e.target.style.color="#CE981C": e.target.style.color ="grey"
     
    
 }

function show() {
    if(document.getElementById("item").style.display=="block")
        document.getElementById("item").style.display="none"
    else
        document.getElementById("item").style.display="block"
}