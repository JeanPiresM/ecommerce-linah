import Carousel from 'react-bootstrap/Carousel';
import baner1 from "../assets/banner1.jpg"
import baner2 from "../assets/banner2.jpg"
import baner3 from "../assets/banner3.jpg"


function Banner () {
  return (
    <div>
    <Carousel>
      <Carousel.Item interval={6000}>
      <img
          className="d-block w-100"
          src={baner1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={6000}>
      <img
          className="d-block w-100"
          src={baner2}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={6000}> 
        
      <img
          className="d-block w-100"
          src={baner3}
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Banner;