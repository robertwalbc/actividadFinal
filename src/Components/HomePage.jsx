import React from "react";
import Menu from "./Menu";
import "./HomePage.css";
import Carousel from 'react-bootstrap/Carousel';

function HomePage(){

  return(
    <div>
      <Menu />
      <br />
      <div className="container py-5">
        <div className="text-center">
          <h1>Bienvenidos Tienda de Juegos y Computadoras</h1>
          <p>Si está buscando productos de alta calidad y un servicio excepcional, nuestra tienda de computadoras y juegos es el lugar perfecto para usted.</p>
        </div>
        <div class="row py-5 border-bottom">
            <div class="col-md-7">                
                <h2>Contamos <span class="text-muted fs-1 ms-1">con computadoras</span></h2>
                <p class="lead">
                  Ofrecemos una variedad de modelos para satisfacer todas sus necesidades informáticas, desde portátiles hasta torres de escritorio. Nuestras computadoras están equipadas con lo último en tecnología, como procesadores de última generación y tarjetas gráficas de alta calidad, para ofrecer una experiencia informática fluida y sin interrupciones.
                </p>
            </div>
            <div class="col-md-5">
                <img src="./img/image4.jpg" alt="Computadoras" class="w-100 rounded"/>
            </div>
        </div>
        <div class="row py-5 border-bottom">
            <div class="col-md-7 order-md-2">                
                <h2>Juegos <span class="text-muted fs-1 ms-1">De Primera Calidad</span></h2>
                <p class="lead">
                  Ofrecemos una amplia selección de juegos. Desde juegos de aventura hasta juegos de estrategia, tenemos algo para todos. Nuestros juegos son de los principales desarrolladores de juegos y ofrecen gráficos impresionantes y una jugabilidad emocionante.
                </p>
            </div>
            <div class="col-md-5 order-md-1">
                <img src="./img/image5.jpg" alt="Juegos" class="w-100 rounded"/>
            </div>
        </div>
      </div> 

      <div className="container-fluid px-0 py-3 bg-dark text-white">
      <div className="row g-0 py-5">
            <div className="col-12">
              <div className="text-center margen">
                <h2>Nos enorgullecemos de brindar un servicio excepcional <b>a nuestros clientes. </b></h2>
                <p>
                  Nuestro personal está altamente capacitado y dispuesto a ayudarlo en todo lo que necesite. Además, ofrecemos precios competitivos y opciones de financiamiento para que pueda obtener los productos que necesita sin romper su presupuesto.
                </p>
              </div>
            </div>
          </div>
        <Carousel variant="dark">          
          <Carousel.Item>
            <div className="img-area m-auto">
              <img className="d-block w-100 h-100 rounded-circle" src="./img/perfil1.jpg" alt="Perfil 1"/>
            </div>
            <Carousel.Caption className="position-static w-50 pb-5 m-auto">
              <h3 className="fw-light text-primary m-0">Karen Fuentes </h3>
              <p className="fw-normal text-white">Programdora en Desarrolló Web Frontend, Soy altamente talentosa y he experimentado el desarrollo de proyectos de diseño web con HTML, CSS, JavaScript, MySQL y React JS Readux.</p>
            </Carousel.Caption>
          </Carousel.Item>
        <Carousel.Item>
          <div className="img-area m-auto">
              <img className="d-block w-100 h-100 rounded-circle" src="./img/perfil2.jpg" alt="First slide"/>
          </div>
          <Carousel.Caption className="position-static w-50 pb-5 m-auto">
          <h3 className="fw-light text-primary m-0">Guillermo Alas</h3>
            <p className="fw-normal text-white">Programdor en Desarrolló Web Frontend, Soy altamente talentoso y he experimentado el desarrollo de proyectos de diseño web con HTML, CSS, JavaScript, MySQL y React JS Readux.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="img-area m-auto">
            <img className="d-block w-100 h-100 rounded-circle" src="./img/perfil3.jpg" alt="First slide"/>
          </div>
          <Carousel.Caption className="position-static w-50 pb-5 m-auto">
          <h3 className="fw-light text-primary m-0">Andrea Fortis</h3>
            <p className="fw-normal text-white">Programdora en Desarrolló Web Frontend, Soy altamente talentosa y he experimentado el desarrollo de proyectos de diseño web con HTML, CSS, JavaScript, MySQL y React JS Readux.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="img-area m-auto">
            <img className="d-block w-100 h-100 rounded-circle" src="./img/perfil4.jpg" alt="First slide"/>
          </div>
          <Carousel.Caption className="position-static w-50 pb-5 m-auto">
          <h3 className="fw-light text-primary m-0">Roberto Albeño</h3>
            <p className="fw-normal text-white">Programdor en Desarrolló Web Frontend, Soy altamente talentoso y he experimentado el desarrollo de proyectos de diseño web con HTML, CSS, JavaScript, MySQL y React JS Readux.</p>
          </Carousel.Caption>
        </Carousel.Item>        
        </Carousel>
      </div>
    </div>
  );
}

export default HomePage