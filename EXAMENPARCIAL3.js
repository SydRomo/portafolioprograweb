function compararMes() {
    var fecha = new Date(document.getElementById("fecha").value);
    var mesIngresado = fecha.getMonth();
  
    var fechaActual = new Date();
    var mesActual = fechaActual.getMonth();
  
    if (mesIngresado === mesActual) {
      document.getElementById("resultado").textContent = "ES EL MES DE TU CUMPLEANOS";
      
  
  
    
  
  
  
    } else {
      document.getElementById("resultado").textContent = "NO ES EL MES DE TU CUMPLENOS";
    }
  }
  
