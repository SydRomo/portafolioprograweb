function decide(nuevo)
{
   
 
    var fechan=new Date();
 
 
   
 
   var nuevo=new Date(nuevo);
 
 
    if ((nuevo==fechan.getMonth()))
    document.getElementById("comentario").innerHTML="ES EL MES DE TU CUMPLEAÑOS";
else
   
    document.getElementById("comentario").innerHTML="NO ES EL MES DE TU CUMPLEAÑOS";

}
   
     
   
