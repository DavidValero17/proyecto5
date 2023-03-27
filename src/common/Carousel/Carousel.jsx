import Carousel from 'react-bootstrap/Carousel';

function CarouselHome() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="src/assets/1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="text-primary">D&J Clinic</h3>
          <p className="text-primary">Bienvenid@s a nuestra clinica</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="src/assets/2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className="text-primary">¡BU!</h3>
          <p className="text-primary">Que susto, pero mira que sonrisa más bonita.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="src/assets/3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className="text-primary">Mira que equipo más gracioso.</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHome;