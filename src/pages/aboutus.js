import Head from "next/head";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import MainLayoutSection from "../components/maincommonlayout/MainCommonLayoutSection";
import OurFocusCardDeck from "../components/ourfocuscarddeck/OurFocusCardDeck";
import AboutUsComponent from "../components/aboutUsComponent/aboutUsComponent";
import { aboutUsList } from '../data/commonLayoutNavigationData';
import NavigationCommonLayout from '../components/navigationcommonlayout/NavigationCommonLayout';


export default function AboutUs() {
  const { t, lang } = useTranslation();
  const router = useRouter();

  return (
    <div className='skeleton'>
      <Head>
        <title>About Us</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="international institute of theravada" />
      </Head>

      <div className='navbarCarouselWrapper about'>
        <Header />
      </div>

      <MainLayoutSection
        title="About Us"
        description="Comprehensive training institute aimed at facilitating spiritual and academic development of Buddhist monks and nuns, based on Theravada teachings."
        photo="/monk-hike-deep-forest-reflection-with-lake-buddha-religion-concept.png"
        backgroundImg="url(/Ellipse-2.svg)"
      />

      <NavigationCommonLayout navigationList={aboutUsList} />
      <AboutUsComponent />
      {/* <OurFocusCardDeck /> */}

      <Footer />
    </div>


  );
}

export async function getServerSideProps(context) {
  // const products = await fetch('https://fakestoreapi.com/products')
  // .then(res=>res.json());

  return {
    props: {
      //products
    }
  }
}