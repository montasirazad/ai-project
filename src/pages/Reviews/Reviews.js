import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import cardImg from '../../image/cardimg.jpg'

const Reviews = () => {

    const cardStyle = {
        height: '200px'
    }

    return (
        <div>
            <Swiper
                slidesPerView={3}
                spaceBetween={10}
                autoplay={{ delay: 1000 }}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide><img style={cardStyle} src={cardImg} alt="" /></SwiperSlide>
                <SwiperSlide><img style={cardStyle} src={cardImg} alt="" /></SwiperSlide>
                <SwiperSlide><img style={cardStyle} src={cardImg} alt="" /></SwiperSlide>
                <SwiperSlide><img style={cardStyle} src={cardImg} alt="" /></SwiperSlide>
                <SwiperSlide><img style={cardStyle} src={cardImg} alt="" /></SwiperSlide>
                <SwiperSlide><img style={cardStyle} src={cardImg} alt="" /></SwiperSlide>
                <SwiperSlide><img style={cardStyle} src={cardImg} alt="" /></SwiperSlide>
                <SwiperSlide><img style={cardStyle} src={cardImg} alt="" /></SwiperSlide>
                <SwiperSlide><img style={cardStyle} src={cardImg} alt="" /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Reviews;