import Carousel from 'react-bootstrap/Carousel';
import logoImg from "../assets/CEO.png";
import BoardMem from "../assets/BoardMem.png"
import img from  "../assets/image.png"

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img}
          alt="First slide"
          style={{ height: '400px',objectFit:"contain" }} 
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={logoImg}
          alt="Second slide"
          style={{ height: '400px',objectFit:"cover" }} 
        />
        <Carousel.Caption>
           <h5>Srinivas vanamala</h5>
          <p>CEO of gayatri co-operative bank </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={BoardMem}
          alt="Third slide"
          style={{ height: '400px',objectFit:"cover" }} 
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;