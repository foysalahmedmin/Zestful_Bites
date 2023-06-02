import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

import image_1 from '../../../assets/home/01.jpg'
import image_2 from '../../../assets/home/02.jpg'
import image_3 from '../../../assets/home/03.png'
import image_4 from '../../../assets/home/04.jpg'
import image_5 from '../../../assets/home/05.png'
import image_6 from '../../../assets/home/06.png'


const HomeSlider = () => {
    return (
        <section>
            <Carousel>
                <div>
                    <img src={image_1} alt="" />
                </div>
                <div>
                    <img src={image_2} alt="" />
                </div>
                <div>
                    <img src={image_3} alt="" />
                </div>
                <div>
                    <img src={image_4} alt="" />
                </div>
                <div>
                    <img src={image_5} alt="" />
                </div>
                <div>
                    <img src={image_6} alt="" />
                </div>
            </Carousel>
        </section>
    );
};

export default HomeSlider;