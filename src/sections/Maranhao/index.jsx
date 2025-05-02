import MaranhaoImg from "../../assets/Maranhaoo.png";
import Ecoville from "../../assets/Ecovilles.png";
import styled from "./style.module.scss";

export const Maranhao = () => {
    return (
        <section className={styled.Maranhao}>
            <div className={styled.Container}>
                <div className={styled.Img}>
                    <img src={MaranhaoImg} />
                </div>

                <div className={styled.Text}>
                    <h2 className="maranhao-title">Eco Urbanismo</h2>
                    <p className="maranhao-text">
                        Empresa <strong>genuinamente maranhense</strong>, é a responsável pela idealização, planejamento e construção dos Ecovilles em 9 cidades ao longo do Maranhão.
                        Temos no nosso DNA o <strong>compromisso e qualidade</strong> na entrega bairros planejados com a infraestrutura necessária pra manter sua qualidade de vida de acordo com o que <strong>você merece</strong>.
                    </p>
                    <img className={styled.Ecovilles} src={Ecoville} />
                </div>
            </div>
        </section>
    )
}