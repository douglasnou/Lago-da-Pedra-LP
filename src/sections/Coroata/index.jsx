import { CoroataItems } from "../../Arrays/Items";
import CoroataIcon from "../../assets/Coroata.png";
import styled from "./style.module.scss";

export const Coroata = () => {
    return (
        <section className={styled.Coroata}>
            <div className={styled.Container}>
                <div className={styled.SubContainer}>
                    <img src={CoroataIcon} />
                    <h2 className="coroata-title">
                        Estrutura completa no melhor bairro planejado da Região.
                    </h2>
                    <p className="coroata-text">
                        As <strong>Eco Casas</strong> ficam localizadas no <span>Ecoville Lago da Pedra</span>, um bairro planejado que oferece muito mais do que moradia: <strong>aqui você encontra segurança, lazer e qualidade de vida para toda a família!</strong>
                    </p>
                </div>

                <ul className={styled.List}>
                    {
                        CoroataItems.map((item) => (
                            <li>
                                <img src={item.img} />
                                <p className="coroata-item"><strong>{item.strong}</strong>{item.text}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}