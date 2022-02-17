import React from 'react'
import './Tema3.css';
import { CopyBlock, github } from "react-code-blocks";

function Tema3() {
  return (
    <div id='tema3' className='tema3'>
        <h1 className='titulo_tema'>Recuperación Tema 3</h1>
        <p className='textotema3'>Escribe un script que pida al usuario el valor del radio de una circunferencia y muestre por pantalla:</p>
        <ol className='textotema3'>
          <li>El valor del radio.</li>
          <li>El valor del diámetro.</li>
          <li>El valor del perímetro de la circunferencia.</li>
          <li>El valor del área del círculo.</li>
          <li>El valor del área de la esfera.</li>
          <li>El valor del volumen de la esfera.</li>
        </ol>
        <p className='textotema3'> Anotaciones: </p>
        <ul className='textotema3'>
          <li>El valor de Pi debes obtenerlo del objeto Math, no introducirlo manualmente.</li>
          <li>Debes escribir al lado si son cm, o cm2, ó cm3.</li>
          <li>Como datos de muestra, si metes 5, deberías obtener aproximadamente: 5 / 10 / 31,41 / 78,54 / 314,15 /523,59. (sin incluir las unidades)</li>
        </ul>
        <p className='textotema3'>Solución:</p>
        <div className="demo">
        <p className='titulocuadro'>HTML</p>
          <CopyBlock
            language="html"
            text={`<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <script src="./JavaScript/ejercicio1.js"></script>
                <title>Document</title>
            </head>
            <body>
                <p>Introduce un valor</p>
                <input id="Entrada">
                <button onclick="Calcular()">Calcular</button>
                <p>Resultados:</p>
                <p id="resultado"></p>
            </body>
            </html>`}
            codeBlock
            theme={github}
            showLineNumbers={true}
          />
          <p className='titulocuadro'>Javascript</p>
          <CopyBlock
            language="javascript"
            text={`//Calcula diferentes parámetros de una circunferencia/esfera mediante el radio.

            function Calcular (){
            
                let vr = Math.round(document.getElementById("Entrada").value * 100) / 100;
                let diametro = Math.round(vr * 2 * 100) / 100;
                let perimetro = Math.round(2 * Math.PI * vr * 100) / 100;
                let areacirculo = Math.round(Math.PI * Math.pow(vr, 2) * 100) / 100;
                let areaesfera = Math.round(4 * Math.PI * Math.pow(vr, 2) * 100) / 100;
                let volumenesfera = Math.round((4/3) * Math.PI * Math.pow(vr, 3) * 100) / 100;
            
                if (!isNaN(vr)){
                    resultado.innerHTML = "El valor del radio de la circunferencia es" + " = " + vr + " cm" + "<br>El diámetro de la circunferencia es" + " = " + diametro + " cm" + "<br>El perímetro de la circunferencia es" + " = " + perimetro + " cm" + "<br>El área de la circunferencia es" + " = " + areacirculo + " cm2" + "<br>El área de la esfera es" + " = " + areaesfera + " cm2" + "<br>El volúmen de la esfera es" + " = " + volumenesfera + " cm3";
                }
                else {
                    alert("El valor introducido no es un número");
                }    
            }`}
            codeBlock
            theme={github}
            showLineNumbers={true}
          />
        </div>
        <br></br>
        <p className='textotema3'>Escribe un script que pida al usuario su nombre y apellidos y muestre:</p>
        <ol className='textotema3'>
          <li>El tamaño del nombre más los apellidos (sin contar espacios).</li>
          <li>La cadena en minúsculas y en mayúsculas.</li>
          <li>Que divida el nombre y los apellidos y los muestre en 3 líneas, donde ponga Nombre: / Apellido 1: / Apellido 2: y además,</li>
          <ol type='a'>
            <li>Una propuesta de nombre de usuario, compuesto por la inicial del nombre, el primer apellido y la inicial del segundo apellido: ej. Para Laura Folgado Galache sería lfolgadog.</li>
            <li>Una propuesta de nombre de usuario compuesto por las tres primeras letras del nombre y de los dos apellidos: ej. Laufolgal.</li>
          </ol>
        </ol>
        <p className='textotema3'>Solución:</p>
        <div className="demo">
        <p className='titulocuadro'>HTML</p>
          <CopyBlock
            language="html"
            text={`<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <script src="./JavaScript/ejercicio2.js"></script>
                <title>Document</title>
            </head>
            <body>
                
            </body>
            </html>`}
            codeBlock
            theme={github}
            showLineNumbers={true}
          />
          <p className='titulocuadro'>Javascript</p>
          <CopyBlock
            language="javascript"
            text={`let nombrecompleto = prompt("Introduce tu nombre y apellidos separados por espacios");

            let minus = nombrecompleto.toLowerCase();
            
            let mayus = nombrecompleto.toUpperCase();
            //Dividir el nombre y apellidos en 3 líneas
            let separador = nombrecompleto.split(" ");
            let nombre = separador [0];
            let apellido1 = separador [1];
            let apellido2 = separador[2];
            //Inicial nombre + apellido1 + inicial apellido2
            let inicialnombre = nombre.slice(0, 1);
            let inicialapellido2 = apellido2.slice(0, 1);
            let usuarioiniciales = inicialnombre + apellido1 + inicialapellido2;
            //3 primeras letras nombre + 3 primeras letras apellido 1 y 2
            let trinombre = nombre.slice(0, 3);
            let triapellido1 = apellido1.slice(0, 3);
            let triapellido2 = apellido2.slice(0, 3);
            let triusuario = trinombre + triapellido1.toLowerCase() + triapellido2.toLowerCase();
            
            document.write("Nombre en mayúsculas : " + mayus + "<br>");
            document.write("Nombre en minúsculas : " + minus + "<br>");
            document.write("Nombre : " + nombre + "<br>");
            document.write("Apellido1 : " + apellido1 + "<br>");
            document.write("Apellido2 : " + apellido2 + "<br>");
            document.write("Propuesta usuario 1 : " + usuarioiniciales.toLowerCase() + "<br>");
            document.write("Propuesta usuario 2 : " + triusuario);`}
            codeBlock
            theme={github}
            showLineNumbers={true}
          />
        </div>
        <br></br>
        <p className='textotema3'>La primera semana del año es la que tiene el primer jueves de Enero. Todos los años tienen 52 semanas, excepto los años bisiestos que tienen 53 semanas</p>
        <p className='textotema3'>Crea un script que reciba un string en formato YYYY-MM-DD y devuelva a qué número de semana pertenece una fecha dada.</p>
        <p className='textotema3'>Solución:</p>
        <div className="demo">
        <p className='titulocuadro'>HTML</p>
          <CopyBlock
            language="html"
            text={`<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <script src="./JavaScript/ejercicio3.js"></script>
                <title>Document</title>
            </head>
            <body>
                <p>Introduzca una fecha</p>
                <input type="text" id="fecha">
                <button onclick="Calcular()">Calcular semana</button>
                <p>La fecha actual corresponde a:</p>
                <p id="resultado"></p>
            
            </body>
            </html>`}
            codeBlock
            theme={github}
            showLineNumbers={true}
          />
          <p className='titulocuadro'>Javascript</p>
          <CopyBlock
            language="javascript"
            text={`function Calcular(){
              let fecha = document.getElementById("fecha").value;
              let regfecha = /^\d{4}-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/;
              if (!fecha.match(regfecha)){
                 alert("Formato de fecha no válido");
              }
                  else{    
                  
                  //pasamos parametros a variable con Date;
                  let compfecha = new Date(fecha);
                  let inicial = new Date(compfecha.getFullYear(),0,1);
                  let interfech = Math.floor(compfecha - inicial) / (24 * 60 * 60 * 1000);
                  let semanas = Math.ceil((interfech + compfecha.getDay() + 1)/ 7);
                  //comprobación año bisiesto
                  if (((compfecha.getFullYear() % 4 == 0) && (compfecha.getFullYear() % 100 != 0 )) || (compfecha.getFullYear() % 400 == 0)){
                      resultado.innerHTML="La semana número " + " " +semanas;
                  }
                  else{
                      resultado.innerHTML="La semana número" + " " + Number(semanas - 1);
                  }
              }
          }`}
            codeBlock
            theme={github}
            showLineNumbers={true}
          />
        </div>
        <br></br>
        <p className='textotema3'>Escribe una web que contenga un botón el cual cuando hagas click en él, abra una ventana de 400x400 localizada en una posición random dentro de los márgenes de la pantalla. Además cada segundo que pasa la pantalla debe de disminuir en tamaño de 40 en 40 pixeles tanto de alto como ancho y cuando tenga una medida menor o igual a 160 x 160 empiece a crecer hasta un tamaño no mayor que 400x400.</p>
        <p className='textotema3'>Solución:</p>
        <div className="demo">
        <p className='titulocuadro'>HTML</p>
          <CopyBlock
            language="html"
            text={`<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <script src="./JavaScript/ejercicio4.js"></script>
                <title>Document</title>
            </head>
            <body>
                <button onclick="abrir()">Click</button>
            </body>
            </html>`}
            codeBlock
            theme={github}
            showLineNumbers={true}
          />
          <p className='titulocuadro'>Javascript</p>
          <CopyBlock
            language="javascript"
            text={`//Haciendo pruebas funciona bien en Windows con google chrome

            function abrir(){
                ventana = window.open("" ,"" , "width=400,height=400");
            
                //Elección minimizar maximizar
                
                var interval;
            
                if (ventana.innerWidth >= 400 & ventana.innerHeight >= 400) {
                    interval = setInterval(minimizar, 1000);
                }
                else if (ventana.innerWidth <= 160 & ventana.innerHeight <= 160) {
                    interval = setInterval(maximizar, 1000);
                }
            
                //modificadores de tamaño
            
                function minimizar(){
                    ventana.resizeBy(-40, -40);
                    ventana.focus();
                    if(ventana.innerWidth <= 160 & ventana.innerHeight <= 160){
                        clearInterval(interval);
                        interval = setInterval(maximizar, 1000);
                    }
                }
            
                function maximizar(){
                    ventana.resizeBy(+40, +40);
                    ventana.focus();
                    if(ventana.innerWidth >= 400 & ventana.innerHeight >= 400){
                        clearInterval(interval);
                        interval = setInterval(minimizar, 1000);
                    }
                }
            }`}
            codeBlock
            theme={github}
            showLineNumbers={true}
          />
        </div>
        <br></br>
        <p className='textotema3'>Diseña un sitio web que muestre la hora actual actualizada por segundos. La hora debe tener el formato hh:mm:ss am/pm de forma que si la hora, los minutos o los segundos tienen un solo dígito se debe añadir un 0 para completar el formato.</p>
        <p className='textotema3'>Las horas se presentarán en formato de 12 horas, añadiendo am o pm dependiendo si la hora es anterior o posterior a las 12 del mediodía.</p>
        <p className='textotema3'>Solución:</p>
        <div className="demo">
        <p className='titulocuadro'>HTML</p>
          <CopyBlock
            language="html"
            text={`<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <script src="./JavaScript/ejercicio5.js"></script>
                <title>Document</title>
            </head>
            <body>
                <div id="reloj" class="reloj"></div>
            </body>
            </html>`}
            codeBlock
            theme={github}
            showLineNumbers={true}
          />
          <p className='titulocuadro'>Javascript</p>
          <CopyBlock
            language="javascript"
            text={`//Haciendo pruebas funciona bien en Windows con google chrome

            function abrir(){
                ventana = window.open("" ,"" , "width=400,height=400");
            
                //Elección minimizar maximizar
                
                var interval;
            
                if (ventana.innerWidth >= 400 & ventana.innerHeight >= 400) {
                    interval = setInterval(minimizar, 1000);
                }
                else if (ventana.innerWidth <= 160 & ventana.innerHeight <= 160) {
                    interval = setInterval(maximizar, 1000);
                }
            
                //modificadores de tamaño
            
                function minimizar(){
                    ventana.resizeBy(-40, -40);
                    ventana.focus();
                    if(ventana.innerWidth <= 160 & ventana.innerHeight <= 160){
                        clearInterval(interval);
                        interval = setInterval(maximizar, 1000);
                    }
                }
            
                function maximizar(){
                    ventana.resizeBy(+40, +40);
                    ventana.focus();
                    if(ventana.innerWidth >= 400 & ventana.innerHeight >= 400){
                        clearInterval(interval);
                        interval = setInterval(minimizar, 1000);
                    }
                }
            }`}
            codeBlock
            theme={github}
            showLineNumbers={true}
          />
        </div>
        <br></br>
        <p className='textotema3'>Diseña un sitio web que muestre un libro de recetas (4 o 5), siguiendo las siguientes instrucciones:</p>
        <ol className='textotema3'>
          <li>Las recetas deben tener nombre y explicación de la misma.</li>
          <li>Deben de mostrarse en formato ordered list.</li>
          <li>La lista se generará desde Js.</li>
          <li>La web ha de tener un botón de eliminar receta que pida al usuario el número de receta a eliminar, comprobar si existe, y si es así eliminarla de la lista.</li>
        </ol>
        <p className='textotema3'>Solución:</p>
        <div className="demo">
        <p className='titulocuadro'>HTML</p>
          <CopyBlock
            language="html"
            text={`<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <script src="./JavaScript/ejercicio6.js"></script>
                <title>Document</title>
            </head>
            <body>
              <input id="opcion" placeholder="Receta a eliminar">
              <button onclick="eliminar()">Eliminar</button>
            </body>
            </html>`}
            codeBlock
            theme={github}
            showLineNumbers={true}
          />
          <p className='titulocuadro'>Javascript</p>
          <CopyBlock
            language="javascript"
            text={`//Haciendo pruebas funciona bien en Windows con google chrome

            function abrir(){
                ventana = window.open("" ,"" , "width=400,height=400");
            
                //Elección minimizar maximizar
                
                var interval;
            
                if (ventana.innerWidth >= 400 & ventana.innerHeight >= 400) {
                    interval = setInterval(minimizar, 1000);
                }
                else if (ventana.innerWidth <= 160 & ventana.innerHeight <= 160) {
                    interval = setInterval(maximizar, 1000);
                }
            
                //modificadores de tamaño
            
                function minimizar(){
                    ventana.resizeBy(-40, -40);
                    ventana.focus();
                    if(ventana.innerWidth <= 160 & ventana.innerHeight <= 160){
                        clearInterval(interval);
                        interval = setInterval(maximizar, 1000);
                    }
                }
            
                function maximizar(){
                    ventana.resizeBy(+40, +40);
                    ventana.focus();
                    if(ventana.innerWidth >= 400 & ventana.innerHeight >= 400){
                        clearInterval(interval);
                        interval = setInterval(minimizar, 1000);
                    }
                }
            }`}
            codeBlock
            theme={github}
            showLineNumbers={true}
          />
        </div>
        <br></br>
        <p className='textotema3'>Al pulsar el botón aplicar, se añadirá una nueva fila en la posición indicada. Por ejemplo, si introducimos los valores Posición= 2, Equipo=Betis y Puntos=18</p>
        <p className='textotema3'>Solución:</p>
        <div className="demo">
        <p className='titulocuadro'>HTML</p>
          <CopyBlock
            language="html"
            text={`<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <script src="./JavaScript/ejercicio6.js"></script>
                <title>Document</title>
            </head>
            <body>
              <input id="opcion" placeholder="Receta a eliminar">
              <button onclick="eliminar()">Eliminar</button>
            </body>
            </html>`}
            codeBlock
            theme={github}
            showLineNumbers={true}
          />
          <p className='titulocuadro'>Javascript</p>
          <CopyBlock
            language="javascript"
            text={`//Haciendo pruebas funciona bien en Windows con google chrome

            function abrir(){
                ventana = window.open("" ,"" , "width=400,height=400");
            
                //Elección minimizar maximizar
                
                var interval;
            
                if (ventana.innerWidth >= 400 & ventana.innerHeight >= 400) {
                    interval = setInterval(minimizar, 1000);
                }
                else if (ventana.innerWidth <= 160 & ventana.innerHeight <= 160) {
                    interval = setInterval(maximizar, 1000);
                }
            
                //modificadores de tamaño
            
                function minimizar(){
                    ventana.resizeBy(-40, -40);
                    ventana.focus();
                    if(ventana.innerWidth <= 160 & ventana.innerHeight <= 160){
                        clearInterval(interval);
                        interval = setInterval(maximizar, 1000);
                    }
                }
            
                function maximizar(){
                    ventana.resizeBy(+40, +40);
                    ventana.focus();
                    if(ventana.innerWidth >= 400 & ventana.innerHeight >= 400){
                        clearInterval(interval);
                        interval = setInterval(minimizar, 1000);
                    }
                }
            }`}
            codeBlock
            theme={github}
            showLineNumbers={true}
          />
        </div>
        <br></br>
        <p className='textotema3'>Diseña un sitio que:</p>
        <ol className='textotema3'>
          <li>Compruebe si existen las cookies de los datos de una persona</li>
          <li>Si no existen, que pida los datos personales: Nombre, dirección, edad y profesión.</li>
          <li>Si existen los datos que los muestre y posteriormente borre las cookies.</li>
        </ol>
        <p className='textotema3'>Realiza las mismas operaciones anteriores con el objeto localStorage, en este caso los datos permanecerán almacenados mientras dure la sesión, cuando se vuelva a entrar, los datos se habrán borrado. En la misma sesión mostrará los datos cada vez que se pidan.</p>
        <p className='textotema3'>Solución:</p>
        <div className="demo">
        <p className='titulocuadro'>HTML</p>
          <CopyBlock
            language="html"
            text={`<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <script src="./JavaScript/ejercicio6.js"></script>
                <title>Document</title>
            </head>
            <body>
              <input id="opcion" placeholder="Receta a eliminar">
              <button onclick="eliminar()">Eliminar</button>
            </body>
            </html>`}
            codeBlock
            theme={github}
            showLineNumbers={true}
          />
          <p className='titulocuadro'>Javascript</p>
          <CopyBlock
            language="javascript"
            text={`//Haciendo pruebas funciona bien en Windows con google chrome

            function abrir(){
                ventana = window.open("" ,"" , "width=400,height=400");
            
                //Elección minimizar maximizar
                
                var interval;
            
                if (ventana.innerWidth >= 400 & ventana.innerHeight >= 400) {
                    interval = setInterval(minimizar, 1000);
                }
                else if (ventana.innerWidth <= 160 & ventana.innerHeight <= 160) {
                    interval = setInterval(maximizar, 1000);
                }
            
                //modificadores de tamaño
            
                function minimizar(){
                    ventana.resizeBy(-40, -40);
                    ventana.focus();
                    if(ventana.innerWidth <= 160 & ventana.innerHeight <= 160){
                        clearInterval(interval);
                        interval = setInterval(maximizar, 1000);
                    }
                }
            
                function maximizar(){
                    ventana.resizeBy(+40, +40);
                    ventana.focus();
                    if(ventana.innerWidth >= 400 & ventana.innerHeight >= 400){
                        clearInterval(interval);
                        interval = setInterval(minimizar, 1000);
                    }
                }
            }`}
            codeBlock
            theme={github}
            showLineNumbers={true}
          />
        </div>
    </div>
  )
}

export default Tema3