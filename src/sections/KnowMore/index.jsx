import Logo from "../../assets/Logo.png";
import WhatsApp from "../../assets/whatsapp-big.png";
import styled from "./style.module.scss";

export const KnowMore = () => {
    const videoId = ["1Dpz6HT__vyGFzYV6vtK_acXVwAb1XIpC", "1QwvyMF7ht66Pg1xTFkDgPKovE2GczmvL", "1l-OouYZE59x-dWoX-dTtjtslXs5blA9Q"];
    const videoLinkOne = `https://drive.google.com/file/d/${videoId[0]}/preview`;
    const videoLinkTwo = `https://drive.google.com/file/d/${videoId[1]}/preview`;
    const videoLinkThree = `https://drive.google.com/file/d/${videoId[2]}/preview`;


    return (
        <section className={styled.KnowMore}>
            <div className={styled.Head}>
                <h1 className="knowmore-title">CASAS QUE JÁ ENTREGAMOS!</h1>
            </div>

            <div className={styled.Container}>
                <div className={styled.Videos}>
                    <iframe
                    src={videoLinkOne}
                    allow="autoplay"
                    title="Casas entregues"
                    ></iframe>

                    <iframe
                    src={videoLinkTwo}
                    allow="autoplay"
                    title="Casas entregues"></iframe>

                    <iframe
                    src={videoLinkThree}
                    allow="autoplay"
                    title="Casas entregues"></iframe>
                </div>
                <div className={styled.Logos}>
                    <img src={Logo} />
                </div>
                <a target="blank" href="https://wa.me/5598982110015?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20Eco%20Casa%20Lago%20da%20Pedra!%F0%9F%8F%A1%F0%9F%8F%A1"
                >
                    <div>
                        <img src={WhatsApp} />
                        <p className="knowmore-btn">COMPRE SUA CASA <span>AGORA!</span></p>
                    </div>
                </a>
            </div>
        </section>
    )
}