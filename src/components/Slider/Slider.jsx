import './Slider.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

export default () => {
    return (
        <Swiper modules={Autoplay} spaceBetween={70} autoplay={{delay: 3000}}>
            <SwiperSlide></SwiperSlide>
        </Swiper>
    )
}