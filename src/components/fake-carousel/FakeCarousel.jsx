import './FakeCarousel.css';

function FakeCarousel(props){
    return (
        <div className="container-fakeCarousel">
            <h3 className="h3-fake-carousel"><span className="gold">W</span>ild <span className="gold">C</span>ode <span className="gold">B</span>ar</h3>
            <img className="imgFakeCarousel" src={props.urlImg} alt="Wild Code Bar"/>
            <img className="imgFakeCarouselTablet" src={props.urlImgTablet} alt="Wild Code Bar"/>
            <img className="imgFakeCarouselMobile" src={props.urlImgMobile} alt="Wild Code Bar"/>
        </div>
    )
}

export default FakeCarousel;