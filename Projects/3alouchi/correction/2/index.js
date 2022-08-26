


tab= document.getElementsByClassName("fa-solid fa-heart")
for(i=0;i<tab.length;i++)
{
    tab[i].addEventListener("click",changecolor)
}
function changecolor(e){
    if(e.target.style.color=="red")
    e.target.style.color="grey"
    else e.target.style.color="red"
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
    for(i=0;i<tab.length;i++)
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

 
 
 
 
    