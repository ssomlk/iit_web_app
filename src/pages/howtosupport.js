import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import MainLayoutSection from '../components/maincommonlayout/MainCommonLayoutSection';
import NavigationCommonLayout from '../components/navigationcommonlayout/NavigationCommonLayout';

import {
  Tabs,
  CardGroup,
  Card,
  Container,
  Tab,
  Row,
  Col,
  ListGroup,
  Sonnet,
} from 'react-bootstrap';
import {
  BsWatch,
  BsFillBookFill,
  BsCheckSquare,
  BsShieldFillPlus,
  BsCardChecklist,
  BsListStars,
  BsPersonCheckFill,
} from 'react-icons/bs';

export default function HowToSupport() {
  const { t, lang } = useTranslation();
  const router = useRouter();

  return (
    <div className="skeleton">
      <Head>
        <title>How to Support</title>
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
        title="How To Support"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        photo="/Howtosupportimg.png"
        backgroundImg="url(/Ellipse-2.svg)"
      />

      {/* <NavigationCommonLayout navigationList={instituteList} /> */}

      <Container>
        <div className="how-to-support-content">
          <div className="how-to-support-main-body">
            <div className="how-to-support-how-to-donate-header">
              Main Aspects
            </div>
            <div className="how-to-support-aspect-container">
              <div className="how-to-support-main-body-col">
                <div className="how-to-support-main-aspects">Construction</div>
                <div className="how-to-support-main-aspects-text">
                  Currently constructions are underway in a 100-acre land
                  donated by a devotee for a lecture hall and ten chambers
                  (Kuti) in order to commence the five-year teacher training
                  program. Constructions for the main complex will provide
                  lodging facilities for 300 monks, lecture theatres and a
                  library is expected to begin in the near future.
                </div>
              </div>

              <div className="how-to-support-main-body-col">
                <div className="how-to-support-main-aspects">Healthcare</div>
                <div className="how-to-support-main-aspects-text">
                  Contributions can be made for the medical expenses and other
                  healthcare related needs of the monks residing in the
                  Institute.
                </div>
                <br></br>
                <br></br>
                <div className="how-to-support-main-aspects">
                  Other Requisities
                </div>
                <div className="how-to-support-main-aspects-text">
                  Administration and other expenses required by the Institiute
                  can be fullfilled.
                </div>
              </div>
            </div>
            <div className="how-to-support-quote">
              <hr className="how-to-support-hr-quote"></hr>
              <div className="how-to-support-quote-container">
                <blockquote className="blockquote mb-0 ">
                  <p className="how-to-support-quote">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.{' '}
                  </p>
                  <footer className="how-to-support-source-name">
                    Someone famous in source title
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="how-to-support-main-body-bank-info">
            <div className="how-to-support-main-body-bank-info-section1">
              <div className="how-to-support-main-body-bank-info-section1-title">
                How to Donate
              </div>
              <div className="how-to-support-main-body-bank-info-section1-body">
                Devotees who wish to join this meritorious act can donate using
                the below Account details.
              </div>
            </div>

            <div className="how-to-support-main-body-bank-info-section2">
              <div className="how-to-support-main-body-bank-info-section2-subtitle">
                Account Name
                <div className="how-to-support-main-body-bank-info-section2-subtitle-val">
                  Kshemabhoomi Sansadaya
                </div>
                <hr></hr>
              </div>

              <div className="how-to-support-main-body-bank-info-section2-col2">
                <div className="how-to-support-main-body-bank-info-section2-subtitle-cust">
                  Account Number
                  <div className="how-to-support-main-body-bank-info-section2-subtitle-val">
                    119165000021
                  </div>
                  <hr></hr>
                </div>

                <div className="how-to-support-main-body-bank-info-section2-subtitle-cust">
                  Bank Name
                  <div className="how-to-support-main-body-bank-info-section2-subtitle-val">
                    Sampath Bank PLC
                  </div>
                  <hr></hr>
                </div>
              </div>

              <div className="how-to-support-main-body-bank-info-section2-col2">
                <div className="how-to-support-main-body-bank-info-section2-subtitle-cust">
                  Branch Name
                  <div className="how-to-support-main-body-bank-info-section2-subtitle-val">
                    Panchikawatte
                  </div>
                  <hr></hr>
                </div>

                <div className="how-to-support-main-body-bank-info-section2-subtitle-cust">
                  Bank Code
                  <div className="how-to-support-main-body-bank-info-section2-subtitle-val">
                    7278
                  </div>
                  <hr></hr>
                </div>
              </div>

              <div
                className="how-to-support-main-body-bank-info-section2-col2"
                style={{ paddingBottom: '23px' }}
              >
                <div className="how-to-support-main-body-bank-info-section2-subtitle-cust">
                  Branch Code
                  <div className="how-to-support-main-body-bank-info-section2-subtitle-val">
                    191
                  </div>
                </div>

                <div className="how-to-support-main-body-bank-info-section2-subtitle-cust">
                  SWIFT Code
                  <div className="how-to-support-main-body-bank-info-section2-subtitle-val">
                    BSAMLKLX
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

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
