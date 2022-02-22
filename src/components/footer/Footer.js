import React from 'react'
import './Footer.css'
import { FaTwitterSquare, FaGithubSquare, FaInstagramSquare, FaLinkedin  } from "react-icons/fa";

function Footer() {
  return (
    <div class="footer">
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-3 item">
                        <h3 className='titulofooter'>Contacto Profesional</h3>
                        <ul className='listafooter'>
                            <a href="https://github.com/jjsus96"><FaGithubSquare className='iconosfooter'/></a>
                            <a href="https://www.linkedin.com/in/jes%C3%BAs-sayago-mey-0b50ba198/"><FaLinkedin className='iconosfooter'/></a>
                        </ul>
                    </div>
                    <div class="col-sm-6 col-md-3 item">
                        <h3 className='titulofooter'>Redes Sociales</h3>
                        <ul className='listafooter'>
                            <a href="https://www.instagram.com/jjsus96/?hl=es"><FaInstagramSquare className='iconosfooter'/></a>
                            <a href="https://twitter.com/jjsus96"><FaTwitterSquare className='iconosfooter'/></a>
                        </ul>
                    </div>
                    <div class="col-md-6 item text">
                        <h3 className='titulofooter'>Resumen</h3>
                        <p>Este es un portfolio personal en el que me presento al resto del mundo, explico el camino que he seguido hasta el momento y muestro los proyectos que he logrado desarrollar.</p>
                    </div>
                    
                </div>
                <p class="copyright">Jesús Sayago Mey © 2022</p>
            </div>
        </footer>
        <br></br>
    </div>
  )
}

export default Footer