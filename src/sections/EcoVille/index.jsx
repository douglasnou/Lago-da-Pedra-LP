import { EcoItems } from "../../Arrays/Items";
import styled from "./style.module.scss";

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss";
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import 'swiper/scss/autoplay';
import { EcovilleSlide } from "../../Arrays/EcoCasa";

export const EcoVille = () => {
    return (
        <section className={styled.Ecoville}>
            <div className={styled.Slide}>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation
                    autoplay
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                >
                    {
                        EcovilleSlide.map((slide) => (
                            <SwiperSlide>
                                <img src={slide} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}