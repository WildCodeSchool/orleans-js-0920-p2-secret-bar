import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ControlledCarousel.css';

const imageLounge = 'https://zupimages.net/up/20/45/7hkw.jpg';
const imageBar = 'https://zupimages.net/up/20/44/kqd0.jpg';
const imageServices = 'https://zupimages.net/up/20/44/cwee.jpg';
const imageEvent = 'https://zupimages.net/up/20/44/ba78.jpg';
const imageLoungeTablet = 'https://zupimages.net/up/20/45/rdf6.jpg';
const imageBarTablet = 'https://zupimages.net/up/20/45/wolv.jpg';
const imageServicesTablet = 'https://zupimages.net/up/20/45/exzt.jpg';
const imageEventTablet = 'https://zupimages.net/up/20/45/ktwi.jpg';
const imageLoungeMobile = 'https://zupimages.net/up/20/45/y27s.jpg';
const imageBarMobile = 'https://zupimages.net/up/20/45/q4ad.jpg';
const imageServicesMobile = 'https://zupimages.net/up/20/45/4sra.jpg';
const imageEventMobile = 'https://zupimages.net/up/20/45/j5eo.jpg';


function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const customer = JSON.parse(localStorage.getItem("customer"));

  return (
    <div className="container">
      <div className="carousel-desktop">
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          slide
          pause={false}
        >
          <Carousel.Item>
            <img className="d-block w-100" src={imageLounge} alt="Lounge" />
            <Carousel.Caption>
              <h3 className="h3-carousel"><span className="gold">W</span>ild <span className="gold">C</span>ode <span className="gold">B</span>ar</h3>
              <p className="p-carousel">{`Un plaisir de vous revoir ${customer.name}`}</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={imageBar} alt="Bar" />
            <Carousel.Caption>
              <h3 className="h3-carousel"><span className="gold">W</span>ild <span className="gold">C</span>ode <span className="gold">B</span>ar</h3>
              <p className="p-carousel">Venez découvrir nos alcools haut de gamme</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={imageServices} alt="Services" />
            <Carousel.Caption>
              <h3 className="h3-carousel"><span className="gold">W</span>ild <span className="gold">C</span>ode <span className="gold">B</span>ar</h3>
              <p className="p-carousel">Profitez de nos services uniques au monde</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={imageEvent} alt="Event" />
            <Carousel.Caption>
              <h3 className="h3-carousel"><span className="gold">W</span>ild <span className="gold">C</span>ode <span className="gold">B</span>ar</h3>
              <p className="p-carousel">Participez à nos événements inédits et exclusifs</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="carousel-tablet">
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          slide
          pause={false}
        >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={imageLoungeTablet}
              alt="Lounge"
            />
            <Carousel.Caption>
              <h3 className="h3-carousel"><span className="gold">W</span>ild <span className="gold">C</span>ode <span className="gold">B</span>ar</h3>
              <p className="p-carousel">{`Un plaisir de vous revoir ${customer.name}`}</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={imageBarTablet} alt="Bar" />
            <Carousel.Caption>
              <h3 className="h3-carousel"><span className="gold">W</span>ild <span className="gold">C</span>ode <span className="gold">B</span>ar</h3>
              <p className="p-carousel">Venez découvrir nos alcools haut de gamme au bar</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={imageServicesTablet}
              alt="Services"
            />
            <Carousel.Caption>
              <h3 className="h3-carousel"><span className="gold">W</span>ild <span className="gold">C</span>ode <span className="gold">B</span>ar</h3>
              <p className="p-carousel">Profitez de nos services uniques</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={imageEventTablet} alt="Event" />
            <Carousel.Caption>
              <h3 className="h3-carousel"><span className="gold">W</span>ild <span className="gold">C</span>ode <span className="gold">B</span>ar</h3>
              <p className="p-carousel">Participez à nos événements</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="carousel-mobile">
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          slide
          pause={false}
        >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={imageLoungeMobile}
              alt="Lounge"
            />
            <Carousel.Caption>
              <h3 className="h3-carousel"><span className="gold">W</span>ild <span className="gold">C</span>ode <span className="gold">B</span>ar</h3>
              <p className="p-carousel">{`Un plaisir de vous revoir ${customer.name}`}</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={imageBarMobile} alt="Bar" />
            <Carousel.Caption>
              <h3 className="h3-carousel"><span className="gold">W</span>ild <span className="gold">C</span>ode <span className="gold">B</span>ar</h3>
              <p className="p-carousel">Venez découvrir nos alcools haut de gamme au bar</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={imageServicesMobile}
              alt="Services"
            />
            <Carousel.Caption>
              <h3 className="h3-carousel"><span className="gold">W</span>ild <span className="gold">C</span>ode <span className="gold">B</span>ar</h3>
              <p className="p-carousel">Profitez de nos services uniques au monde</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={imageEventMobile} alt="Event" />
            <Carousel.Caption>
              <h3 className="h3-carousel"><span className="gold">W</span>ild <span className="gold">C</span>ode <span className="gold">B</span>ar</h3>
              <p className="p-carousel">Participez à nos événements</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default ControlledCarousel;