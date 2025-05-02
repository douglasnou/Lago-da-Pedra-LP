import BannerSection from "../../assets/Banner.png";
import BannerMobile from "../../assets/Banner-celular.png";
import styled from "./style.module.scss";

export const Banner = () => {
    return (
        <div className={styled.Banner}>
            <img src={BannerSection} className={styled.BannerBig}/>
            <img src={BannerMobile} className={styled.BannerSmall}/>
        </div>
    )
}