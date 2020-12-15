//Choose a random color
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple']


/**
 * 1. Necesitamos crear una función que devuelva un color aleatorio entre todos los colores del array 'colors'. Crea esta función o mira por Internet como hacer para escoger una posición aleatorio de un array
 */

function getRandomColor() {
    var aleatorio = Math.floor(Math.random()*(colors.length));
    // Si bien normalmente las funciones no conocen nada del exterior; estos casos son una buena excepción. La lista de colores se puede considerar una cofiguración "global" a la cual cualqueir función debe poder acceder.

    return colors[aleatorio]
}


/**
 * 2. Debemos seleccionar el botón a clicar, y todo el elemento 'body'. Guarda cada uno de los elementos en una variable. Deberían ser tan solo dos líneas de código. Muestra por consola el valor de las variables para comprobar que has seleccionado los elementos adecuados
 */

let body = document.querySelector('body')
let button = document.querySelector ('button')


/**
  * 3. Asocia al botón 'button' un evento onclick. Dicho evento debe llamar a una función; que se va a encargar de:
  * 
  *   A) Llamar a la otra función 'getRandomColor' y obtener un color aleatorio
  *    B) Modificar el 'backgroundColor' del body con el valor que hemos conseguido. Deves investigar como cambiar el color del fondo de un elemento HTML a través de JavaScript
  */

  button.onclick = cambiarColor

  function cambiarColor(){
    let color = getRandomColor()
    body.style.backgroundColor = color
  }
