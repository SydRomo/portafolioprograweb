
function suma ()
{
    var suma1,suma2,resul;
    suma1=prompt("Escribe un numero","");
    suma2=prompt("Escribe otro numero","");
    resul=parseInt(suma1)+parseInt(suma2);
    alert ("La suma es  "+resul);
}


function resta ()
{
    var resta1,resta2,resul;
    resta1=prompt("Escribe un numero","");
    resta2=prompt("Escribe otro numero","");
    resul=parseInt(resta1)-parseInt(resta2);
    alert ("La resta es  "+resul);
}



function multi ()
{
    var multi1,multi2,resul;
    multi1=prompt("Escribe un numero","");
    multi2=prompt("Escribe otro numero","");
    resul=parseInt(multi1)*parseInt(multi2);
    alert ("El resultado de la multiplicación es  "+resul);
}




function divi ()
{
    var divi1,divi2,resul;
    divi1=prompt("Escribe un numero","");
    divi2=prompt("Escribe otro numero","");
    resul=parseInt(divi1)/parseInt(divi2);
    alert ("La división es  "+resul);
}


function posinega ()
{
    var num1;
    num1=prompt("Escribe un numero","");
    if (parseInt (num1)>0)
    {
        alert ("Positivo");
    }
    else
    {
        alert ("Negativo");
    }
    
}