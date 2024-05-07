//En primer lugar creamos el buscaminas con 3 filas 
let fila1 = []
let fila2 = []
let fila3 = []

const getRandomInt = max => Math.floor(Math.random()*max)

let caja = String.fromCodePoint(127873)
let mina = String.fromCodePoint(128163)
let acierto = String.fromCodePoint(9989)
let explosion = String.fromCodePoint(128165)

//Ahora generamos las filas incluyendo aleatoriamente una mina o aciertos.
function generarFila(a) {
    for (let i = 0; i < 3; i++) {
        let e = getRandomInt(2)
        if (e == 0) {
            a.push(caja)
        } else if (e == 1) {
            a.push(mina)
        }
    }   
}
//Ahora llamo a la función 3 veces para que se ejecute y se forme el buscaminas aleatoriamente
generarFila(fila1)
generarFila(fila2)
generarFila(fila3)

let fila4 = [caja, caja, caja]
let fila5 = [caja, caja, caja]
let fila6 = [caja, caja, caja]

let mibooleano = true
let puntuacion = ""

while (mibooleano) {
    //Ahora creo 2 tableros, uno lleno de cajas y otro que será el que se generó anteriormente 
    let tableroGenerado = [[fila1], [fila2], [fila3]]
    let miTablero = [fila4, fila5, fila6]

    //Los muestro
    alert(miTablero[0]+ '\n' + miTablero[1] + '\n' + miTablero[2])

    alert(tableroGenerado[0]+ '\n' + tableroGenerado[1] + '\n' + tableroGenerado[2])

    //Ahora pido al usuario que ingrese una coordenada
    let prueba = prompt("Ingresa una coordenada")
    if (prueba[0] == 0) {
        //Si encuentra un acierto, sigue jugando, sino, salta la explosión y pierde
        //Vamos rellenando los 2 tableros con aciertos en caso de acertar
        if (fila1[prueba[2]] == caja) {
            fila4[prueba[2]] = acierto
            fila1[prueba[2]] = acierto
            alert("Acierto")
        } else {
            fila4[prueba[2]] = explosion
            fila1[prueba[2]] = explosion
            mibooleano = false
            puntuacion = "perdiste"
        }

    
    } else if (prueba[0] == 1) {
        //Si encuentra un acierto, sigue jugando, sino, salta la explosión y pierde
        if (fila2[prueba[2]] == caja) {
            fila5[prueba[2]] = acierto
            fila2[prueba[2]] = acierto
            alert("Acierto")

        } else {
            fila5[prueba[2]] = explosion
            fila2[prueba[2]] = explosion
            mibooleano = false
            puntuacion = "perdiste"
        }


    } else if (prueba[0] == 2) {
        //Si encuentra un acierto, sigue jugando, sino, salta la explosión y pierde
        if (fila3[prueba[2]] == caja) {
            fila6[prueba[2]] = acierto
            fila3[prueba[2]] = acierto
            alert("Acierto")
        } else {
            fila6[prueba[2]] = explosion
            fila3[prueba[2]] = explosion
            mibooleano = false
            puntuacion = "perdiste"
        }

    }

    if (fila1.includes(caja) || fila2.includes(caja) || fila3.includes(caja)) {
        
    } else {
        //Si acaba el juego acertando todo saldrá este mensaje
        mibooleano = false
        alert("Has ganado")
    }

    if (puntuacion == "perdiste") {
        //Si la puntuación se iguala a perdiste entonces pierdes y salta el mensaje de derrota y cómo era el tablero
        alert("Has perdido, bomba encontrada")
        alert(tableroGenerado[0]+ '\n' + tableroGenerado[1] + '\n' + tableroGenerado[2])
    }

}


