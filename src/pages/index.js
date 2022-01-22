import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import CustomCarousel from '../components/carousel/CustomCarousel';
import CardDeckComponent from '../components/carddeck/CardDeckComponent';
import Header from '../components/header/Header';
import NewsAndEventsComponent from '../components/newsandevents/NewsAndEventsComponent';
import Footer from '../components/footer/Footer';
import Testimonials from '../components/testimonials/Testimonials';

export default function Home() {
  const { t, lang } = useTranslation();
  const router = useRouter();

  return (
    <div className="skeleton">
      <Head>
        <title>Home</title>
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
      <NewsAndEventsComponent />
      <Testimonials />

      {/* Remove below div when GeneralFAQ section added*/}
      <div className="mt-4"></div>
      {/* <GeneralFAQ /> */}
      <Footer />
    </div>
  );
}
