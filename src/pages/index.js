import Head from 'next/head';
import UAParser from 'ua-parser-js';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import CustomCarousel from '../components/carousel/CustomCarousel';
import CardDeckComponent from '../components/carddeck/CardDeckComponent';
import Header from '../components/header/Header';
import NewsAndEventsComponent from '../components/newsandevents/NewsAndEventsComponent';
import Footer from '../components/footer/Footer';
import GeneralFAQ from '../components/generalfaq/GeneralFAQ';
import Testimonials from '../components/testimonials/Testimonials';
import NewsAndEventsComponent2 from '../components/newsandevents/NewsAndEventsComponent2';

export default function Home() {
  const { t, lang } = useTranslation();
  const router = useRouter();

  return (
    <div className="skeleton">
      <Head>
        <title>iit</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="international institute of theravada"
        />
      </Head>

      <div className="navbarCarouselWrapper">
        <div>
          <Header />
        </div>
        <CustomCarousel />
      </div>

      <CardDeckComponent />
      {/* <NewsAndEventsComponent /> */}
      <NewsAndEventsComponent2 deviceType={'desktop'} />
      <Testimonials />
      <GeneralFAQ />
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
