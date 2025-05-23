document.getElementById('imc-form').addEventListener('submit', function(event) {
    event.preventDefault();

var peso = parseFloat(document.getElementById("peso").value);
var estatura = parseFloat(document.getElementById("estatura").value);

if (peso <= 0 || estatura <= 0){
    alert("Por favor, introduce un peso y una estatura validos.")
    return;
}
 var imc = peso / (estatura * estatura);

window.alert ("Su Imc es: " + imc);
}); 
