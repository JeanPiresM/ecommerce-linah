import Carousel from 'react-bootstrap/Carousel';

function Banner () {
  return (
    <div>
    <Carousel>
      <Carousel.Item interval={6000}>
      <img
          className="d-block w-100"
          src="https://cdn.discordapp.com/attachments/803014479830188042/1243419270319181864/banner1.jpg?ex=665167ef&is=6650166f&hm=5a8a46def0ece3e690bf0ac1a6948a42df3a0005fd80024352a40a5597210d4f&"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={6000}>
      <img
          className="d-block w-100"
          src="https://cdn.discordapp.com/attachments/803014479830188042/1243419794414243881/banner2.jpg?ex=6651686c&is=665016ec&hm=8191564bf30bfd415f2ef88495e1a07c48b66a7a5aac90437e73f83f698ad9f6&"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={6000}> 
        
      <img
          className="d-block w-100"
          src="https://cdn.discordapp.com/attachments/803014479830188042/1243419818296610857/banner3.jpg?ex=66516872&is=665016f2&hm=b3206bee6da08405619e3a9dcf5887bfadc31fd8484e08007037bf8087e4754f&"
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Banner;