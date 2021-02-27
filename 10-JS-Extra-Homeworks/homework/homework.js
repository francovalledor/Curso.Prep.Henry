// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let array = []

  for (const key in objeto) {
    array.push([key, objeto[key]])
  }

  return array
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  const contador = {}
  for (const letra of string) {
    if (contador[letra]){
      contador[letra]++
    } else {
      contador[letra] = 1
    }
  }
  return contador
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  const isUpper = char => char === char.toUpperCase()

  let uppers = []
  let lowers = []

  for (const letra of s) {
    if (isUpper(letra)) {
      uppers.push(letra)
    } else {
      lowers.push(letra)
    }
  }

  return uppers.join('') + lowers.join('')
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  const invertirPalabra = palabra => palabra.split('').reverse().join('')

  const palabras = str.split(' ')
  const palabrasIvertidas = palabras.map(palabra => invertirPalabra(palabra))

  return palabrasIvertidas.join(' ')
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  const invertirPalabra = string => string.split('').reverse().join('')

  const palabra = String(numero)

  if (palabra === invertirPalabra(palabra)) {
    return "Es capicua"
  } else {
    return "No es capicua"
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  const aEliminar = ['a', 'b', 'c']

  let nuevaCadena = []

  for (const letra of cadena)
    if (!aEliminar.includes(letra))
      nuevaCadena.push(letra)

  return nuevaCadena.join('')
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  const byLengthSort = (a,b) => a.length - b.length

  return arr.sort(byLengthSort)
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  const intersect = (c1, c2) => {
    let result = new Set()

    for (const elemento of c1) 
      if (c2.has(elemento))
        result.add(elemento)

    return result
  }
  
  let conjunto1 = new Set(arreglo1)
  let conjunto2 = new Set(arreglo2)

  return Array.from(intersect(conjunto1, conjunto2))
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

