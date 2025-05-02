import { EcoCasaSmall } from "../../Arrays/EcoCasa";
import EcoCasa from "../../assets/Casa50.png";
import styled from "./style.module.scss";

export const EcoCasaOne = () => {
    return (
        <section className={styled.EcoCasa}>
            <div className={styled.SubSection}>
                <div className={styled.Container}>
                    <h1 className="ecoCasa-title">
                        Eco Casa 50m²
                    </h1>
                    <div className={styled.SubContainer}>
                        <ul>
                            {
                                EcoCasaSmall.map((eco) => (
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