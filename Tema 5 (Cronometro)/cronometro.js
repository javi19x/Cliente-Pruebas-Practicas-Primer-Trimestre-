//En primer lugar defino algunas variables que me servirán para crear el cronómetro funcional
let tiempoInicio= 0;
let tiempoPausado = 0;
let intervalo;
let vueltas = [];
let promedio = 0;

//Esta función solo se ejecuta cuando le das al boton "iniciar" y lo que hace es ir guardando el tiempo en tiempoInicio y mostrarlo en el cronometro con setInterval
function inicio(){
    if(!intervalo){
        tiempoInicio= Date.now() - tiempoPausado
        intervalo =setInterval(actualizarCronometro,100)
    }
}

function pausa(){
    //Limpio el intervalo y lo igualo a null para que no sume nada el cronometro y calculo el tiempo pausado y lo guardo
    clearInterval(intervalo)
    intervalo = null
    tiempoPausado = Date.now() - tiempoInicio
}

//Esta función actualiza mi cronometro para ver todo el rato los minutos y segundos a tiempo real. 
//Defino los minutos y los guardo en una variable y hago lo mismo con los segundos
//Finalmente cojo el elemento cronometro y pongo los minutos y segundos que han transcurrido separados por un : para que se pueda ver que cuenta minutos y segundos
function actualizarCronometro(){
    let tiempoTranscurrido = Date.now() - tiempoInicio
    let minutos = Math.floor(tiempoTranscurrido / 60000)
    let segundos=(Math.floor(tiempoTranscurrido % 60000)/1000).toFixed()
    document.getElementById('cronometro').innerText = minutos + ':' + segundos
}

//Esta función es muy sencilla, simplemente defino de nuevo todas las variables a 0 y limpio todo el contenido de cronometro y de vueltas
function reinicio(){
    tiempoInicio = 0
    tiempoPausado = 0
    tiempoTranscurrido = 0
    vueltas = []
    clearInterval(intervalo)
    promedio = 0
    intervalo = null
    document.getElementById("cronometro").innerText = "0:0"
    document.getElementById("vueltas").innerHTML = ""
}
//Esta función sirve para que se muestren las diferentes vueltas que han ocurrido
function mostrarVueltas() {
    let vueltasHtml = "<h1>Vueltas:</h1>"
    vueltas.forEach((vuelta, index) => {
        vueltasHtml += "<p>Vueltas: " + (index+1) + "= " + formatoTiempo(vuelta) + "</p>"
    })
    //Simplemente lo muestro así:
    document.getElementById("vueltas").innerHTML = vueltasHtml;
}

//Esta funcion sirve para crear a partir de ella la función mostrar vueltas, ya que hace falta alguna funcion que guarde los minutos y segundos
function formatoTiempo(tiempo){
    let minutos =Math.floor(tiempo / 60000)
    let segundos = ((tiempo % 60000)/1000).toFixed(0)
    return minutos +":" +segundos
}

//Esta funcion sirve para terminar con cada vuelta y llama a la funcion mostrar vueltas para que muestre todas las vueltas anteriores mas esta ultima y el promedio de todas las vueltas
function finalizarVuelta() {
    if (intervalo) {
      let duracionVuelta = Date.now() - tiempoInicio;
      vueltas.push(duracionVuelta);
      mostrarVueltas();
      calcularPromedio();
    }
}

//Función que calcula el promedio de todas las vueltas
function calcularPromedio() {
    let suma = 0;
    for (let i = 0; i < vueltas.length; i++) {
      suma += vueltas[i];
    }
    const promedio = suma / vueltas.length;
    const promedioFormateado = formatoTiempo(promedio);
    const elementoVueltas = document.getElementById('vueltas');
    elementoVueltas.innerHTML += '<p>Promedio: ' + promedioFormateado + '</p>';
}

