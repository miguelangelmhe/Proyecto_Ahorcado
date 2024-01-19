String.prototype.replaceAt = function (index, character) {
    return this.substring(0, index) + character + this.substring(index + character.length);
  };

  //conjunto de palabras para el juego
  const button = document.querySelector('#calcular');
  const palabras = ['hackaboss', 'bootcamp', 'tecnologia', 'artificial', 'inteligencia', 'imagen', 'metodo', 'variable', 'funcion', 'ciclo', 'condicion', 'objeto', 'clase', 'metodo', 'parametro', 'argumento', 'if', 'else', 'for', 'while', 'switch', 'break', 'continue', 'return', 'debugger', 'array', 'string', 'number', 'boolean', 'null', 'undefined', 'NaN', 'Infinity', 'typeof', 'instanceof', 'prototype', 'constructor', 'closure', 'callback', 'promise', 'async', 'await', 'try', 'catch', 'throw', 'finally', 'JSON', 'parse', 'stringify', 'map', 'filter', 'reduce', 'forEach', 'event', 'listener', 'DOM', 'ajax', 'fetch'
];
  //palabra random y con guiones bajos espaciados
  let palabra = palabras[Math.floor(Math.random() * palabras.length)].toLocaleLowerCase();
  let palabraConGuiones = palabra.replace(/./g, "_ ");
  
  let contadorFallos = 0;
  let letrasUsadas = [];
  
  document.querySelector('#output').innerHTML = palabraConGuiones;
  
  button.addEventListener('click', () => {
    //obtener el valor de la letra ingresada en id letra y guardarlo en la const letra.
    let letra = document.querySelector('#letra').value;
    letra = letra.toLowerCase();
    // Limpiar el cajón de entrada de letras
    document.querySelector('#letra').value = '';
    
  //verificar si la letra está usada
  if (letrasUsadas.includes(letra)) {
    // Actualiza el mensaje de repetición
    document.querySelector('#mensajeRepetido').innerHTML = 'Ya has usado esta letra. Intenta con otra.';
    return;
  } else {
    // Limpia el mensaje de repetición si no se repite
    document.querySelector('#mensajeRepetido').innerHTML = '';
  }
  letrasUsadas.push(letra.toLowerCase());
  
    let haFallado = true;
    for (const i in palabra) {
        //si encuentra la letra, reemplazara el guión+espacio por la letra que encontro en el espacio en que lo encontro.
      if (letra == palabra[i]) {
        palabraConGuiones = palabraConGuiones.replaceAt(i * 2, letra);
        haFallado = false;
      }
    }
  
    /* condición de ganador o perdedor */
    if (haFallado) {
      contadorFallos++;
  
      // Compara fallos con imagenes para colgar el muñeco
      document.querySelector('#ahorcado').style.backgroundImage = `url('./fallo${contadorFallos}.png')`;
      
      // Muestra imagenes de ahorcado a partir del primer error
      if (contadorFallos === 1) {
        document.querySelector('#ahorcado').style.display = 'block';
      }
  
      if (contadorFallos >= 6) {
        document.querySelector('#resultado').innerHTML = "¡Eres un Loser!";
        document.getElementById('resultado').style.backgroundColor = "rgba(141, 125, 125, 0.7)";
        document.getElementById('resultado').style.color = "#ffffff";
        document.getElementById('resultado').style.width = "30em";
        document.getElementById('resultado').style.height = "5em";
        document.getElementById('resultado').style.display = "flex";
        document.getElementById('resultado').style.alignItems = "center";
        document.getElementById('resultado').style.justifyContent = "center";
        button.disabled = true;
      }
    } else {
      if (palabraConGuiones.indexOf('_') < 0) {
        document.querySelector('#resultado').innerHTML = "¡¡Has Ganado!!";
        document.getElementById('resultado').style.backgroundColor = "rgba(141, 125, 125, 0.7)";
        document.getElementById('resultado').style.color = "#ffffff";
        document.getElementById('resultado').style.width = "30em";
        document.getElementById('resultado').style.height = "5em";
        document.getElementById('resultado').style.display = "flex";
        document.getElementById('resultado').style.alignItems = "center";
        document.getElementById('resultado').style.justifyContent = "center";
        button.disabled = true;
      }
    }
  
    document.querySelector('#output').innerHTML = palabraConGuiones;
    document.querySelector('#letrasUsadas').innerHTML = `Letras usadas: ${letrasUsadas.join(', ')}`;
    
  });
  