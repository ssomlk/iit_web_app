import Head from "next/head";
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import NavigationCommonLayout from '../components/navigationcommonlayout/NavigationCommonLayout';
import { Container, Row, Col } from 'react-bootstrap';
import MainLayoutSection from '../components/maincommonlayout/MainCommonLayoutSection';

export default function NewsAndEvents() {
  const { t, lang } = useTranslation();
  const router = useRouter();

  return (
      
    <div>
      <div className="navbarCarouselWrapper institute">
        <Header />
      </div>
      <MainLayoutSection
        title="News and Events"
        description="Comprehensive training institute aimed at facilitating spiritual and academic development of Buddhist monks and nuns, based on Theravada teachings."
        photo="/one-buddha-gold-temple-thailand.png"
        backgroundImg="url(/Ellipse-4.svg)"
      />
      {/* <NavigationCommonLayout navigationList={instituteList} /> */}

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
    },
  };
}
