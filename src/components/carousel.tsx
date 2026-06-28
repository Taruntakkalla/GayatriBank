import Carousel from 'react-bootstrap/Carousel';

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQUGG6IyDxGxTak-NCc1IBBhYl0cekf0RH9Q&s"
          alt="First slide"
          style={{ height: '400px',objectFit:"contain" }} 
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGtpOCKvFr5CVsAL_fQqdhG9wFR_XtliXjtg&s"
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
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfNUy-huGFMRhrJPsmtQTya2g9QN596i-wKw&s "
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