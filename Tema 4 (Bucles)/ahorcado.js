
//Lista de palabras, se escogerá una al azar
let palabras = ["hola","soy","javi","ordenador","teclado"]

let palabraOculta = palabras[Math.floor(Math.random() * palabras.length)]
let aleatorio = []

let intentosFallidos = 0

let maxIntentos = 6

//Esta función consiste en recorrer la palabra e ingresarla de asteriscos
function asteriscos(palabra, aleatorio) {

    let resultado = ""
    for (let letra of palabra) {
        
        if (aleatorio.includes(letra)){
            resultado += letra + " "
        }else{
            resultado += " *"
        }
    }
    return resultado.trim()
}



function problema (){
    //El juego empieza aquí, en primer lugar te dan los caracteres de longitud que contiene la palabra y te la muestra llena de asteriscos
    console.log("La palabra jugada contiene "+ palabraOculta.length +" caracteres de longitud")
    console.log(asteriscos(palabraOculta, aleatorio))
    

    while (intentosFallidos < maxIntentos){
        //Ahora te piden que ingreses una letra y va contando los intentos en caso de que falles, si aciertas puedes seguir jugando
        let letra = prompt("Ingresa una letra: ").toLowerCase()

        
        if (letra.length === 1){
            if (aleatorio.includes(letra)){
                //Si la letra es la misma, te indica que ya la incluiste
                console.log("Ya has incluido esta letra")

            }else if(palabraOculta.includes(letra)){
                //Si aciertas la letra, te pone que la has acertado y removemos el asterisco por la letra
                console.log("Has acertado una letra: ")
                aleatorio.push(letra)
                console.log(asteriscos(palabraOculta, aleatorio))
                
                if(asteriscos(palabraOculta, aleatorio).indexOf("*") === -1){
                    console.log("Acertaste la palabra")
                    return;
                }
            }else{
                //En caso de no adivinar las letras, llegaremos a este else que irá avisando cuantos intentos te quedan hasta superarlos 
                intentosFallidos++
                console.log("Te quedan "+(maxIntentos-intentosFallidos)+ " intentos")
            
            }
        }else {
            //Si escribes la palabra y es la acertada, te dice que acertaste la palabra y se acaba el juego
            if(letra === palabraOculta){
                console.log("Felicidades. Acertaste la palabra")
                return
            }else{
                //Si escribes la palabra entera y no la aciertas, pierdes directamente, cuidado
                if( letra === palabraOculta){
                    console.log("Acertaste")
                    return
                }else{
                    console.log("Incorrecto. Perdiste")
                    return
                }
            }
        }
    }
    //Si te quedas sin intentos salta esta alerta y muestra la palabra
    console.log("¡Oh no! Te has quedado sin intentos. La palabra era: " + palabraOculta);

}


problema()

