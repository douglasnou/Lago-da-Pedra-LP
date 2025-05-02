import { About } from "./sections/About";
import { Banner } from "./sections/Banner";
import { Coroata } from "./sections/Coroata";
import { Details } from "./sections/Details";
import { EcoCasaOne } from "./sections/EcoCasaOne";
import { EcoCasaTwo } from "./sections/EcoCasaTwo";
import { EcoVille } from "./sections/EcoVille";
import { KnowMore } from "./sections/KnowMore";
import { Maranhao } from "./sections/Maranhao";
import { Reasons } from "./sections/Reasons";
import { SecondBanner } from "./sections/SecondBanner";
import { SecondDetail } from "./sections/SecondDetail";
import { Security } from "./sections/Security";
import "../src/styles/index.scss";

function App() {

  return (
    <>
      <Banner />
      <About />
      <Reasons />
      <Details />
      <EcoCasaOne />
      <EcoCasaTwo />
      <SecondBanner />
      <SecondDetail />
      <Coroata />
      <EcoVille />
      <Maranhao />
      <KnowMore />
    </>
  )
}

export default App
