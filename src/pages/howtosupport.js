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
        photo="/black-hand-buddha-statue-with-yellow-light.png"
        backgroundImg="url(/Ellipse-3.svg)"
      />

      {/* <NavigationCommonLayout navigationList={instituteList} /> */}

      <Container>
        <div className="how-to-support-how-to-donate-header">Main Aspects</div>

        <CardGroup
          style={{
            boxShadow:
              '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
            marginBottom: '100px',
          }}
        >
          <Card>
            <Card.Img
              variant="top"
              src="construction.JPG"
              style={{ height: '100', width: '160' }}
            />
            <Card.Body>
              <Card.Title className="how-to-support-main-aspects">
                Construction
              </Card.Title>
              <Card.Text className="how-to-support-main-aspects-text">
                Currently constructions are underway in a 100-acre land donated
                by a devotee for a lecture hall and ten chambers (Kuti) in order
                to commence the five-year teacher training program.
                Constructions for the main complex will provide lodging
                facilities for 300 monks, lecture theatres and a library is
                expected to begin in the near future.
              </Card.Text>
            </Card.Body>
            {/* <Card.Footer>
              <small className="text-muted"></small>
            </Card.Footer> */}
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="healthcare.jpg"
              style={{ height: '100', width: '160' }}
            />
            <Card.Body>
              <Card.Title className="how-to-support-main-aspects">
                Healthcare
              </Card.Title>
              <Card.Text className="how-to-support-main-aspects-text">
                Contributions can be made for the medical expenses and other
                healthcare related needs of the monks residing in the Institute.
              </Card.Text>
            </Card.Body>
            {/* <Card.Footer>
              <small className="text-muted"></small>
            </Card.Footer> */}
          </Card>
          <Card>
            <Card.Img variant="top" src="Administration.JPG" />
            <Card.Body>
              <Card.Title className="how-to-support-main-aspects">
                Other Requisities
              </Card.Title>
              <Card.Text className="how-to-support-main-aspects-text">
                Administration and other expenses required by the Institiute can
                be fullfilled.
              </Card.Text>
            </Card.Body>
            {/* <Card.Footer>
              <small className="text-muted"></small>
            </Card.Footer> */}
          </Card>
        </CardGroup>
      </Container>

      <Container className="how-to-support-quote-container">
        <blockquote className="blockquote mb-0 ">
          <p className="how-to-support-quote">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.{' '}
          </p>
          <footer className="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>
      </Container>

      <div className="how-to-support-focus">
        <Container>
          <div className="how-to-support-how-to-donate-header">
            How to Donate
          </div>
          <p className="how-to-support-donate-sub-header"> 
            Devotees who wish to join this meritorious act can donate using the below Account details.
            </p>


          <ul class="how-to-support-account-info">
            <li>Account Name: Kshemabhoomi Sansadaya </li>
            <li>Account Number: 119165000021</li>
            <li>Bank Name: Sampath Bank PLC</li>
            <li>Branch Name: Panchikawatte</li>
            <li>Bank Code: 7278</li>
            <li>Branch Code: 191</li>
            <li>SWIFT Code: BSAMLKLX</li>
          </ul>

     

        </Container>
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
