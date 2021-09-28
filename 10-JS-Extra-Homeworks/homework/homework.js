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
  return Object.entries(objeto);
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var object = {};
  for(var i = 0; i < string.length; i++) {
    var cant = 0;
    if (!object[string[i]]) {
      for(var j = 0; j < string.length; j++) {
        if (string[i] === string[j]) {
          cant = cant + 1
        }
      }
      object[string[i]] = cant;
    }
  }
  return object;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var resultM = '';
  var resultm = '';
  for (var i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      resultM = resultM + s[i];
    }
    else 
      resultm = resultm + s[i];
  }
  return resultM + resultm;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  
  //return str.split(' ').reverse().join('');
  var strInv = [];
  var words = str.split(' ');
  for(var i = 0; i < words.length; i++) {
    var letters = words[i].split('');
    var letterInv = letters.reverse();
    strInv.push(letterInv.join(''));
  }
  return strInv.join(' ');

} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var numeroInv = numero.toString().split('').reverse().join('');
  if (numeroInv === numero.toString()) {
    return 'Es capicua';
  }
  return 'No es capicua';
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  //var letters = '';
  //for(i = 0; i < cadena.length; i++) {
    //if (cadena[i] !== 'a' && cadena[i] !== 'b' && cadena[i] !== 'c') {
      //letters = letters + cadena[i];
    //}
  //}
  //return letters;

  var withouta = cadena.replace('a', '');
  var withoutab = withouta.replace('b', '');
  var withoutabc = withoutab.replace('c', '');
  return withoutabc;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  // for(var i = 0; i < arr.length; i++) {
  //   for(var j = i + 1; j < arr.length; j++) {
  //     if (arr[i].length > arr[j].length) {
  //       var myarr = arr[i];
  //       arr[i] = arr[j];
  //       arr[j] = myarr;
  //     }
  //   }
  // }
  // return arr;
  //con el metodo sort reemplazo todos estos pasos:

  var orderarray = arr.sort(function(elem, elem2) {
    return elem.length - elem2.length
  })
  return orderarray;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var array = arreglo1.filter(function(n) {
    return arreglo2.indexOf(n) !== -1;
  })
  return array;

  //var array = [];
  //for(var i = 0; i < arreglo1.length; i++) {
  //  for(var j = 0; j < arreglo2.length; j++) {
  //   if(arreglo1[i] === arreglo2[j]) {
  //     array.push(arreglo1[i]);
  //   }
  //  }  
  // }
  // return array;
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

