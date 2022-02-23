import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Rick from './../../media/Rick.jpg';
import './Proyectos.css'

//Muestra los proyectos desplegados utilizando las tarjetas de Bootstrap.

function Proyectos() {
  return (
      <div id='project'>
          <h1 className='titulo_tema'>Proyectos</h1>
          <p className='texto'>A continuación podréis ver mi último proyecto, juanto al cuál, iré añadiendo nuevos proyectos a medida que los vaya realizando para que así se pueda acceder a ellos de la manera más sencilla posible.</p>
        <br></br>
        <div className="d-flex justify-content-around">
            <Card style={{ width: '18rem' }}>
                <img src={Rick} className='imagenproyecto' alt=''></img>
                <Card.Body>
                <Card.Title>Proyecto Web Rick y Morty</Card.Title>
                <Card.Text>
                    Proyecto de uso didáctico para practicar validaciones y llamadas a APIS
                </Card.Text>
                <Button variant="primary" href='https://proyectodesplieguesayago.000webhostapp.com/index.html'>Visitar</Button>
                </Card.Body>
            </Card>
        </div>
    </div>
    
)}

export default Proyectos