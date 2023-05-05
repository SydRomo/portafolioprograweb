function RFC ()
{
    var nom=document.getElementById("nombre").value;
    var nomresul=nom.charAt(0);

    var ap=document.getElementById("ap").value;
    var apresul=ap.substring(0, 2);

    var am=document.getElementById("am").value;
    var amresul=am.charAt(0);

    var anio=document.getElementById("anio").value;
    var anioresul=anio.substring(2);

    var mes=document.getElementById("mes").value;
   
    var dia=document.getElementById("dia").value;

    var concatenar=apresul.concat(amresul,nomresul,anioresul,mes,dia);
    var resultado=concatenar.toUpperCase();
    document.getElementById("resultado").value=resultado;
   




    document.getElementById("resultado").value=resultado;
}