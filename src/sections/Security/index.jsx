import Shield from "../../assets/Shield.png";
import Family from "../../assets/back-security-small.png"
import styled from "./style.module.scss";

export const Security = () => {
    return (
        <section className={styled.Security}>
            <div className={styled.Container}>
                <h2 className="security-title">
                    <img src={Shield} />
                    + SEGURANÇA
                </h2>
                <p className="security-text">
                    Um bairro com <span>monitoramento 24h</span> e câmeras em todos os pontos do bairro, você vai morar em um lugar totalmente protegido, sem abrir mão do conforto.
                    Chega de se preocupar — aqui, você e sua família estarão sempre seguros.<br />
                    <strong>Viva com a tranquilidade que você merece!</strong>
                </p>
            </div>
            <img className={styled.Img} src={Family} />
        </section>
    )
}