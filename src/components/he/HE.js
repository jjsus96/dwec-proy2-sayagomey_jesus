import React from 'react';
import './HE.css';
import Cliente from './../../media/Cliente.png';
import Java from './../../media/Java.png';
import Js from './../../media/Js.png';
import Python from './../../media/Python.png';
import Grafica from './../../media/Grafica.png';
import Visual from './../../media/Visual.png';
import Chrome from './../../media/Chrome.png';
import Git from './../../media/Git.png';

//Con CSS y HTML Se muestra artículos creados por el usuario.

export const HE = () => {
  return <div id='HE'>
      <h1 className='titulo_tema'>Recuperación Tema 1</h1>
      <h3 className='titulo_articulo'>Modelo de ejecución Cliente/Servidor.</h3>
      <p className='texto_articulo'>Es uno de los modelos más usados  para la comunicación entre máquinas, mediante la cual, una máquina (cliente) envía a través de la red una petición a otra máquina (Servidor), siguiendo una serie de protocolos, para poder acceder a una serie de servicios.</p>
      <p className='texto_articulo'>Esta arquitectura consta de varias partes:</p>
      <p className='texto_articulo'>Cliente, que realiza una petición al servidor para acceder a los servicios que este proporciona.</p>
      <p className='texto_articulo'>Servidor, que se encarga de contestar a la petición del cliente y proporcionar dicho servicio.</p>
      <p className='texto_articulo'>Red, que es el medio que utilizan ambas partes para comunicarse y poder realizar y responder a las peticiones.</p>
      <p className='texto_articulo'>Protocolos, son un conjunto de normas que define como debe realizarse la comunicación.</p>  
      <img src={Cliente} className='imagen_cliente' alt=''></img>
      <p className='texto_articulo'>Ventajas:</p>
      <ul className='texto_articulo'>
        <li>Mayor control y seguridad de nuestros datos y servicios, ya que estos se encuentran en el servidor y no en la máquina de cada usuario, por lo que se dificulta mucho la posibilidad de dañar el sistema.</li>
        <li>Si fuese necesario aumentar las capacidades de los clientes o servidores, se podría hacer de forma que no afectase a los servicios.</li>
        <li>El mantenimiento se facilita, ya que en caso de necesitar actualizar o reparar un servidor, se puede hacer de forma que los usuarios no lo noten.</li>
      </ul>
      <p className='texto_articulo'>Desventajas:</p>
      <ul className='texto_articulo'>
        <li>Si muchos clientes realizan peticiones al mismo tiempo pueden saturar el servidor y hacer que este no pueda responder a todas las peticiones.</li>
        <li>Si el servidor no está disponible, las peticiones no llegan a ningún lugar, por lo que los clientes no pueden acceder a ningún servicio.</li>
        <li>Para poder satisfacer las peticiones de los clientes, muchas veces es necesario disponer de un equipo más potente de los que solemos tener en casa o contar con equipos diseñados para este fin, por lo que puede aumentar el coste económico.</li>
      </ul>
      <p className='texto_articulo'>Fuentes:</p>
      <ul className='texto_articulo'>
        <li><a href='https://blog.infranetworking.com/modelo-cliente-servidor/'>infranetworking</a></li>
        <li><a href='http://sopa.dis.ulpgc.es/diplomatura/practicas9798/banco.html'>ulpgc</a></li>
        <li><a href='https://es.wikipedia.org/wiki/Cliente-servidor'>wikipedia</a></li>
        <li><a href='https://redespomactividad.weebly.com/modelo-cliente-servidor.html'>redespomactividad</a></li>
      </ul>
      <p className='texto_articulo'>Imágenes.</p>
      <ul className='texto_articulo'>
        <li><a href='https://sites.google.com/site/p2pvozip/introduccion/p2p'>Modelo C/S</a></li>
      </ul>
      <h3 className='titulo_articulo'>Lenguajes más relevantes en la actualidad para la programación de clientes web.</h3>
      <p className='texto_articulo'>Cuando pensamos en lenguajes de programación, se nos viene a la cabeza un amplio abanico de posibilidades, pero si acotamos un poco y pensamos en lenguajes orientados a la programación web,  ese número se reduce. Una vez hecha esa acotación, vamos a ver 3 de los lenguajes más utilizados actualmente para la programación web:</p>
      <h5 className='titulo_lenguaje'>Java</h5>
      <img src={Java} className='imagen_lenguaje' alt=''></img>
      <p className='texto_articulo'>Desarrollado por Sun Microsystems , es un lenguaje de propósito general que es capaz de utilizarse en la mayoría de sistemas y es muy flexible a la hora de realizar proyectos, ya que permite una infinidad de posibilidades a la hora de realizarlos. Por esto y mucho más es uno de los más usados por los profesionales del sector.</p>
      <h5 className='titulo_lenguaje'>Javascript</h5>
      <img src={Js} className='imagen_lenguaje' alt=''></img>
      <p className='texto_articulo'>Es un lenguaje de programación el cuál fue creado con el propósito de hacer las páginas web más interactivas. Este lenguaje se ejecuta del lado del cliente, por lo que no requiere peticiones constantes al servidor, añade funcionalidades a las páginas web de forma limpia y eficaz, como validar formularios o modificar el DOM con lo que logramos darle dinamismo a nuestra página.</p>
      <h5 className='titulo_lenguaje'>Python</h5>
      <img src={Python} className='imagen_lenguaje' alt=''></img>
      <p className='texto_articulo'>Este lenguaje tiene una sintaxis simple, además su escritura se facilita al separar los bloques mediante sangrías, es un lenguaje sencillo de aprender por lo que es ampliamente utilizado por los desarrolladores. Además su uso en grandes proyectos como Youtube o Google y la adopción que ha conseguido gracias a los videojuegos, ha hecho que su popularidad se dispare</p>
      <img src={Grafica} className='imagen_grafica' alt=''></img>
      <p className='texto_articulo'>En la gráfica podemos ver que aunque hay muchos más lenguajes de programación, los que tienen un mayor uso son los nombrados anteriormente, ya sea por que están mas extendidos o por preferencia de los desarrolladores lo que está claro es que algo están haciendo bien.</p>
      <p className='texto_articulo'>Fuentes:</p>
      <ul className='texto_articulo'>
        <li><a href='https://www.ionos.es/digitalguide/paginas-web/desarrollo-web/lenguajes-de-programacion-web/'>ionos</a></li>
        <li><a href='https://desarrolloweb.com/home/java'>desarrolloweb</a></li>
        <li><a href='https://www.arimetrics.com/glosario-digital/javascript'>aritmetrics</a></li>
        <li><a href='https://developer.mozilla.org/es/docs/Web/JavaScript'>mozilla</a></li>
        <li><a href='https://www.jetbrains.com/es-es/lp/devecosystem-2021/'>jetbrains</a></li>
      </ul>
      <p className='texto_articulo'>Imágenes.</p>
      <ul className='texto_articulo'>
        <li><a href='https://www.jetbrains.com/es-es/lp/devecosystem-2021/'>Gráfica</a></li>
        <li><a href='https://es.wikipedia.org/wiki/Java_(lenguaje_de_programaci%C3%B3n)'>Logo Java</a></li>
        <li><a href='https://es.wikipedia.org/wiki/Archivo:Python-logo-notext.svg'>Logo Python</a></li>
        <li><a href='https://es.wikipedia.org/wiki/JavaScript'>Logo JavaScript</a></li>
      </ul>
      <h3 className='titulo_articulo'>Herramientas utilizadas en la programación de clientes web.</h3>
      <p className='texto_articulo'>Como ya sabemos para poder hacer programación de clientes web es necesario tener algunas nociones básicas sobre programación, pero lo que muchas veces no tenemos en cuenta es que también necesitaremos herramientas para poder llevar a cabo nuestras ideas. Por ello, a continuación vamos a ver algunas de las herramientas utilizadas en la programación web:</p>
      <ul className='texto_articulo'>
      <img src={Visual} className='imagen_lenguaje' alt=''></img>
        <li>Visual Studio Code: Es un editor de código compatible con muchos lenguajes de programación, dispone de una gran cantidad de extensiones que nos permiten facilitar el trabajo de escribir código.  Es uno de los editores más usados en la actualidad debido a su facilidad de uso, su versatilidad y la gran compatibilidad que presenta con las tecnologías actuales.</li>
        <img src={Chrome} className='imagen_lenguaje' alt=''></img>
        <li>Navegadores: Como por ejemplo Chrome, que es un navegador Web propiedad de Google, el cuál tiene una gran popularidad en la actualidad y que nos ofrece herramientas para probar y ejecutar nuestro código de forma que podamos localizar errores en la ejecución y comprobar que nuestro código se encuentra bien estructurado.</li> 
        <img src={Git} className='imagen_lenguaje' alt=''></img>
        <li>Git: Es un software de control de versiones, el cuál nos permite almacenar nuestro código en repositorios almacenados en servidores a los cuales podremos acceder desde cualquier lugar, además nos permitirá volver a cualquiera de los puntos de guardados de nuestro proyecto.</li>
      </ul>
      <p className='texto_articulo'>Ahora que ya las conocemos y hemos visto por encima para que sirve cada una de ellas, es vuestro momento para probarlas y comprobar lo útiles que son si se usan de forma adecuada.</p>
      <p className='texto_articulo'>Fuentes:</p>
      <ul className='texto_articulo'>
        <li><a href='https://www.pabloarias.eu/herramientas-desarrollo-web'>pabloarias</a></li>
        <li><a href='https://es.wikipedia.org/wiki/Git'>wikipedia(Git)</a></li>
        <li><a href='https://es.wikipedia.org/wiki/Microsoft_Visual_Studio'>wikipedia(Visual)</a></li>
      </ul>
      <p className='texto_articulo'>Imágenes.</p>
      <ul className='texto_articulo'>
        <li><a href='https://es.wikipedia.org/wiki/Microsoft_Visual_Studio'>Logo Visual</a></li>
        <li><a href='https://1000marcas.net/google-chrome-logo/'>Logo Chrome</a></li>
        <li><a href='https://www.freepng.es/png-45rvbl/'>Logo Git</a></li>
      </ul>
    </div>
};

export default HE;
