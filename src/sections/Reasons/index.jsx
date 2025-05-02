import { Items } from "../../Arrays/Items";
import WhatsApp from "../../assets/whatsapp.png";
import styled from "./style.module.scss";
import { EcoCasaSlide } from "../../Arrays/EcoCasa";

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss";
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import 'swiper/scss/autoplay';

export const Reasons = () => {
    return (
        <section className={styled.Reasons}>
            <div className={styled.SubSection}>
                <div className={`${styled.Container}`}>
                    <div className={styled.Title}>
                        <h1 className="reasons-title">
                            Por que escolher
                            a <span>Eco Casa?</span>
                        </h1>
                        <div className={styled.Line}></div>
                    </div>

                    <div className={styled.List}>
                        <ul>
                            {
                                Items.map((Item) => (
                                    <li>
                                        <img src={Item.icon} />
                                        <p className="reasons-text">{Item.text}</p>
                                    </li>
                                ))
                            }
                        </ul>
                        <a target="blank" href="https://wa.me/5598982110015?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20Eco%20Casa%20Lago%20da%20Pedra!%F0%9F%8F%A1%F0%9F%8F%A1"
                        >
                            <div>
                                <img src={WhatsApp} />
                                <p className="reasons-btn">COMPRE SUA CASA AGORA!</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className={`${styled.ContainerCarrossel}`}>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation
                        autoplay
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                    >
                        {
                            EcoCasaSlide.map((slide) => (
                                <SwiperSlide>
                                    <img src={slide} />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    )
}