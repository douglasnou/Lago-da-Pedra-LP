import Banner1 from "../../assets/SecondBanner.png";
import Banner2 from "../../assets/SecondBanner2.png";
import WhatsApp from "../../assets/whatsapp.png";
import styled from "./style.module.scss";

export const SecondBanner = () => {
    return (
        <section className={styled.Banner}>
            <h1 className="secondBanner-title">
                SAIA JÁ DO ALUGUEL!
            </h1>
            <img className={styled.ImgOne} src={Banner1} />
            <img className={styled.ImgTwo} src={Banner2} />
            <a target="blank" href="https://wa.me/5598982110015?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20Eco%20Casa%20Lago%20da%20Pedra!%F0%9F%8F%A1%F0%9F%8F%A1"
            >
                <div>
                    <img src={WhatsApp} />
                    <p className="secondBanner-btn">COMPRE SUA CASA AGORA!</p>
                </div>
            </a>
        </section>
    )
}