import Logo from "../../assets/Logo.png";
import styled from "./style.module.scss";

export const About = () => {
    return (
        <section className={styled.About}>
            <div className={styled.Logo}>
                <img src={Logo} />
            </div>

            <div className={styled.Text}>
                <article>
                    <p className={`about-text`}>
                        A Eco Casa é um produto da Eco Urbanismo com opções de 50m² e 70m².
                    </p>
                    <p className={`about-text`}>
                        As casas possuem áreas de expansão, garantindo que seu lar acompanhe seu crescimento longo do tempo.
                    </p>
                    <p className={`about-text`}>
                        Localizadas no bairro planejado do Ecoville Lago da Pedra onde possui infraestrutura completa e áreas de lazer, elas são perfeitas para a realização do seu sonho de morar em um lugar tranquilo e completo.
                    </p>
                </article>
            </div>
        </section>
    )
}