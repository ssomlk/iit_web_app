import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import NavigationCommonLayout from '../components/navigationcommonlayout/NavigationCommonLayout';
import { Container, Row, Col } from 'react-bootstrap';
import MainLayoutSection from '../components/maincommonlayout/MainCommonLayoutSection';
import { Chrono } from 'react-chrono';
import newsAndEvents from '../data/newsAndEventsData.json';

export default function NewsAndEvents() {
  const { t, lang } = useTranslation();
  const router = useRouter();

  var array = [];
  newsAndEvents.map((element, index) => {
    if (element.type.indexOf('Event') > -1) {
      var item = {};
      item.title = element.date;
      item.cardTitle = element.title;
      item.cardDetailedText = element.description;
      item.dateStr = element.dateStr;
      item.url = 'http://www.history.com'; // '/newsandevents/' + index +1;
      item.media = {
        type: 'IMAGE',
        source: {
          url: element.image,
        },
      };
      array.push(item);
    }
  });

  var newArr = array.sort(function (a, b) {
    return new Date(b.dateStr) - new Date(a.dateStr);
  });

  const items = [
    {
      title: 'May 1940',
      cardTitle: 'Dunkirk',
      url: 'http://www.history.com',
      cardSubtitle:
        'Men of the British Expeditionary Force (BEF) wade out to..',
      cardDetailedText:
        'Men of the British Expeditionary Force (BEF) wade out to..',
      media: {
        type: 'IMAGE',
        source: {
          url: 'http://someurl/image.jpg',
        },
      },
    },
    {
      title: 'May 1940',
      cardTitle: 'Dunkirk',
      url: 'http://www.history.com',
      cardSubtitle:
        'Men of the British Expeditionary Force (BEF) wade out to..',
      cardDetailedText:
        'Men of the British Expeditionary Force (BEF) wade out to..',
      media: {
        type: 'IMAGE',
        source: {
          url: 'http://someurl/image.jpg',
        },
      },
    },
  ];

  return (
    <div>
      <div className="navbarCarouselWrapper institute">
        <Header />
        <MainLayoutSection
          title="News and Events"
          description="Comprehensive training institute aimed at facilitating spiritual and academic development of Buddhist monks and nuns, based on Theravada teachings."
          photo="/one-buddha-gold-temple-thailand.png"
          backgroundImg="url(/Ellipse-4.svg)"
        />
      </div>
      <Container>
        {/* <NavigationCommonLayout navigationList={instituteList} /> */}

        <div
         className="newsandevents-heading"
        >
          Events Timeline
        </div>
        <Chrono
          items={newArr}
          theme={{
            primary: '#532F00',
            secondary: '#FFD607',
            cardBgColor: '#FFFFFF',
            cardForeColor: 'black',
            titleColor: '#532F00',
          }}
        />

        <div
        className="newsandevents-heading"
        >
          News
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
