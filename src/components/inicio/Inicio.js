import React from 'react';
import './Inicio.css';
import Jesus from './../../media/Jesus.jpg'

//Muestra Información sobre el usuario del portfolio.

export const Inicio = () => {
  return <div className='contenedor' id='home'>
      <br></br>
      <br></br>
      <h1 className='nombre'>Jesús Sayago Mey</h1>
      <img className='img_personal' src={Jesus} alt='' class="perfil rounded-circle mx-auto d-block"/>
      <h5 className='titulo'>| Desarrollador Web |</h5>
      <p className='texto'>Buenas!, me llamo Jesús y soy Desarrollador Web. Aunque llevo poco tiempo en esto de la programación, mi camino en la informática se inició hace bastante, cuando algo en mi cabeza hizo click y decidí empezar a adentrarme en este mundo realizando los estudios de sistemas microinformáticos y redes. Una vez terminados decidí pasár al siguiente nivel y comencé a adentrarme en el mundo de la programación iniciando los estudios de Desarrollo de Aplicaciones Web y descubriendo un nuevo horizonte que aunque a veces causa muchos dolores de cabeza (Como ya sabréis), también aporta muchísima satisfacción y una increible sensación de crecimiento personal.</p>
      <p className='texto'> </p>
  </div>;
};

export default Inicio;