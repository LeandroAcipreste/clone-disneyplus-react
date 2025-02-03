import "../slider/imgSlider.css";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImgSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoPlay: true
    }

    return (
        <Slider {...settings} className='carousel'>
            <div >
                <img src="./images/slider-badging.jpg" alt="" className='carousel-img'/>
            </div>
            <div >
                <img src="./images/slider-badag.jpg" alt="" className='carousel-img'/>
            </div>
            <div >
                <img src="./images/slider-scale.jpg" alt="" className='carousel-img'/>
            </div>
            <div >
                <img src="./images/slider-scales.jpg" alt="" className='carousel-img'/>
            </div>
        </Slider>
    )
}

export default ImgSlider
