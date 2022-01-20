import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import MainLayoutSection from '../components/maincommonlayout/MainCommonLayoutSection';
import ContactUs from '../components/contactus/ContactUs';
import Map from '../components/maps/Map';

export default function AboutUs() {
  const { t, lang } = useTranslation();
  const router = useRouter();

  return (
    <div className="skeleton">
      <Head>
        <title>Contact Us</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="international institute of theravada"
        />
      </Head>

      <div className="navbarCarouselWrapper contact">
        <Header />
      </div>

      <MainLayoutSection
        title="Contact Us"
        description="Our mission is to disseminate Theravada Buddhist teachings in its pure form. We are always willing to assist you in your quest to realize the Noble Dhamma.Please feel at ease to contact us."
        photo="/black-hand-buddha-statue-with-yellow-light.png"
        backgroundImg="url(/Ellipse-3.svg)"
      />

      <ContactUs />

      <div className="mapWrapper">
        <Map
          locationDetails={[
            { lat: 7.977506380440952, long: 79.98450023230482 },
          ]}
        />
      </div>

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
