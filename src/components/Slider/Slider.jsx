import 'swiper/css'
import './Slider.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules' 

export default (props) => {
    const { children } = props
    const slides = Array.isArray(children) ? children : [children]

    return (
        <Swiper 
            modules={[Autoplay]} 
            centeredSlides={false} 
            spaceBetween={70} 
            autoplay={{delay: 3000, disableOnInteraction: false,}}>
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                    {slide}
                </SwiperSlide>
            ))}
        </Swiper>
    )
}