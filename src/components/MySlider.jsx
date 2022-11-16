import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { dataEmotionLog } from './SlickData';

function MySlider () {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        cssEase: "linear"
    };
return (
<Slider {...settings}>
            { dataEmotionLog.map((item)=>(
            <div className='emotion-card'>
                    <h1 className="feeling">{item.feeling}</h1>
                    <h4>{item.date}</h4>
                    <p>{item.memo}</p>
            </div>
        )) }
        </Slider>


);

}
export default MySlider;
