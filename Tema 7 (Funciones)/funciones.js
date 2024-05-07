
const elevoalcuadra = (arr, callback) =>{
    const respuesta=[];
    for(i=0; i< arr.length; i++){
        respuesta.push(callback(arr[i]))
    }
    return respuesta;
}


let callback = (num) => num*num;

let ejemplo=[1,2,3,4,5];
let respuesta1 = elevoalcuadra(ejemplo, (num) => num*num);

console.log(respuesta1)