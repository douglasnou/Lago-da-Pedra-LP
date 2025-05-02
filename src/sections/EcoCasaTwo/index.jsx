import { EcoCasaBig } from "../../Arrays/EcoCasa";
import EcoCasa from "../../assets/Casa70.png";
import styled from "./style.module.scss";

export const EcoCasaTwo = () => {
    return (
        <section className={styled.EcoCasa}>
            <div className={styled.SubSection}>
                <div className={styled.Container}>
                    <h1 className="ecoCasa-title">
                        Eco Casa 70m²
                    </h1>
                    <div className={styled.SubContainer}>
                        <ul>
                            {
                                EcoCasaBig.map((eco) => (
                                    <li>
                                        <img src={eco.icon} />
                                        <p className="ecoCasa-text">{eco.text}</p>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <img className={styled.Img} src={EcoCasa} />
            </div>
        </section>
    )
}