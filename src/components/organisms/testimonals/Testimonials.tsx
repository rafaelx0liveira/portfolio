import {TestimonialInfo} from "../../molecules/testimonial_info/TestimonialInfo"

import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"

import "swiper/css";
import "swiper/css/pagination"

const Testimonials = () => {
    return (
        <section className="testimonal container section">
            <h2 className="section-title">Recommendations</h2>
            <span className="section-subtitle">Testimonial</span>

            <Swiper className="testimonials-container"
                loop={true}
                grabCursor={true}
                spaceBetween={24}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                breakpoints={{
                    576: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 48,
                    }
                }}
                modules={[Pagination]}
                >
                { 
                    TestimonialInfo.map(({id, image, title, description}) => {
                        return (
                            <SwiperSlide className="testimonial-card" key={id}>
                                <img src={image} alt="" className="testimonial-img"/>

                                <h3 className="testimonial-name">{title}</h3>
                                <p className="testimonial-description">{description}</p>
                            </SwiperSlide>
                        )
                })}
            </Swiper>
        </section>
    )
}

export default Testimonials