import React from 'react'
import './Footer.css'
import FontAwesome from 'react-fontawesome';

function Footer() {
  return (
    <div class="footer">
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-3 item">
                        <h3 className='titulofooter'>Contacto Profesional</h3>
                        <ul>
                            <li><a href="https://github.com/jjsus96">Github</a></li>
                            <li><a href="https://www.linkedin.com/in/jes%C3%BAs-sayago-mey-0b50ba198/">Linkedin</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-6 col-md-3 item">
                        <h3 className='titulofooter'>Redes Sociales</h3>
                        <ul>
                            <li><a href="https://www.instagram.com/jjsus96/?hl=es">Instagram</a></li>
                            <li><a href="https://twitter.com/jjsus96">Twitter</a></li>
                        </ul>
                    </div>
                    <div class="col-md-6 item text">
                        <h3 className='titulofooter'>Resumen</h3>
                        <p>Este es un portfolio personal en el que me presento al resto del mundo, explico el camino que he seguido hasta el momento y muestro los proyectos que he logrado desarrollar.</p>
                    </div>
                    <div class="col item social"><a href="#"><i class="icon ion-social-facebook"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-instagram"></i></a></div>
                </div>
                <p class="copyright">Jesús Sayago Mey © 2022</p>
            </div>
        </footer>
        <br></br>
    </div>
  )
}

export default Footer