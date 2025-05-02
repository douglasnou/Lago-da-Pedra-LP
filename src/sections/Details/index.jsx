import styled from "./style.module.scss";

export const Details = () => {
    return (
        <section className={styled.Details}>
            <div>
                <h1 className="details-title">
                    Conforto e praticidade para a sua vida!
                </h1>

                <div className={styled.Line}></div>

                <p className="details-text">
                    Na sua Eco Casa, cada detalhe foi planejado para o seu bem-estar. <br />
                    <strong>Ambientes amplos, funcionais</strong> e perfeitos para a sua conquista da casa própria!
                </p>
            </div>
        </section>
    )
}