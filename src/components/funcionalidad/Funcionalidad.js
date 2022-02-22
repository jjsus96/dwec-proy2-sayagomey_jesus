import React, {useState} from 'react'
import './Funcionalidad.css'

function Funcionalidad() {

  let apikey = '26820b81e497e01c0449a96f5d932ead';
  let [tiempoinfo, settiempo] = useState([{}]);
  let [ciudad, setciudad] = useState("");

  let gettiempo = (e) => {
      if (e.key === "Enter") {
          fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&APPID=${apikey}`).then(
              response => response.json()
          ).then(
              data => {
                  settiempo(data);
                  setciudad("")
              }
          )
      }
  }

  return (
    <div>
        <h1 className='titulofuncionalidad' id='clima'>Funcionalidad</h1>
        <h3 className='subtitulofuncionalidad'>EL TIEMPO</h3>
        <p className='definicion'>Introduce el nombre de cualquier ciudad para saber sus condiciones meteorológicas en este momento.</p>
        <input className='inputfuncionalidad' 
        placeholder='Introduzca ciudad y pulse enter'
        onChange={e => setciudad(e.target.value)}
        value={ciudad}
        onKeyPress={gettiempo} />
        {(typeof tiempoinfo.main != "undefined") ? (
            <div className='marcotemporal'>
                <p className='resultado'>Ciudad: {tiempoinfo.name}  ({tiempoinfo.sys.country})</p>
                <p className='resultado'>Cielo: {tiempoinfo.weather[0].description}</p>
                <p className='resultado'>Temperatura actual: {tiempoinfo.main.temp} ºC</p>
                <p className='resultado'>Temperatura máxima: {tiempoinfo.main.temp_max} ºC</p>
                <p className='resultado'>Temperatura mínima: {tiempoinfo.main.temp_min} ºC</p>
                <p className='resultado'>Humedad: {tiempoinfo.main.humidity}%</p>
                <p className='resultado'>Viento: {tiempoinfo.wind.speed} Km/h</p>
            </div>
        ): ('')}
    </div>
  )
}

export default Funcionalidad