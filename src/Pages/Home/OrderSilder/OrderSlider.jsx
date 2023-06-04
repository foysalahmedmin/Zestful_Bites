import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import slide_1 from '../../../assets/home/slide1.jpg'
import slide_2 from '../../../assets/home/slide2.jpg'
import slide_3 from '../../../assets/home/slide3.jpg'
import slide_4 from '../../../assets/home/slide4.jpg'
import slide_5 from '../../../assets/home/slide5.jpg'

const OrderSlider = () => {
    return (
        <section className="py-10">
            <div className="container">
                <SectionTitle
                    heading={'Order Online'}
                    subHeading={'From 11:00am to 10:00pm'}
                />
                <div>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="relative">
                                <img className="w-full object-cover" src={slide_1} alt="" />
                                <h3 className="uppercase absolute left-0 right-0 bottom-10 text-center text-lg font-bold bg-black bg-opacity-75">Salads</h3>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="relative">
                                <img className="w-full object-cover" src={slide_2} alt="" />
                                <h3 className="uppercase absolute left-0 right-0 bottom-10 text-center text-lg font-bold bg-black bg-opacity-75">Pizza</h3>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="relative">
                                <img className="w-full object-cover" src={slide_3} alt="" />
                                <h3 className="uppercase absolute left-0 right-0 bottom-10 text-center text-lg font-bold bg-black bg-opacity-75">Soups</h3>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="relative">
                                <img className="w-full object-cover" src={slide_4} alt="" />
                                <h3 className="uppercase absolute left-0 right-0 bottom-10 text-center text-lg font-bold bg-black bg-opacity-75">Desserts</h3>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="relative">
                                <img className="w-full object-cover" src={slide_5} alt="" />
                                <h3 className="uppercase absolute left-0 right-0 bottom-10 text-center text-lg font-bold bg-black bg-opacity-75">Salads</h3>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default OrderSlider;