const { func } = require("prop-types")

function verif()
{
   if(document.getElementById("name").value.length!=4 )
   alert("nom invalid")
   ch=document.getElementById("name").value
   ch=ch.toUpperCase()
   for(i=0;i<ch.length;i++)
   {
    if (ch[i]<"A" || ch[i]>"Z")
    alert("invalid name")
   }
}
function show()
{
    document.getElementById("password").type=="text"? document.getElementById("password").type="password": document.getElementById("password").type="text"
}

x= document.createElement("div")
document.getElementById("item").append(x)