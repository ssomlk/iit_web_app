import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { Container } from 'react-bootstrap';
import MainLayoutSection from '../components/maincommonlayout/MainCommonLayoutSection';
import { Chrono } from 'react-chrono';
import newsAndEvents from '../data/newsAndEventsData.json';
import React, { useState } from 'react';

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

  const [arrayNews, setArrayNews] = useState([]);
  const [arrayEvents, setArrayEvents] = useState([]);

  var newArr = array.sort(function (a, b) {
    return new Date(b.dateStr) - new Date(a.dateStr);
  });

  // const items = [
  //   {
  //     title: 'May 1940',
  //     cardTitle: 'Dunkirk',
  //     url: 'http://www.history.com',
  //     cardSubtitle:
  //       'Men of the British Expeditionary Force (BEF) wade out to..',
  //     cardDetailedText:
  //       'Men of the British Expeditionary Force (BEF) wade out to..',
  //     media: {
  //       type: 'IMAGE',
  //       source: {
  //         url: 'http://someurl/image.jpg',
  //       },
  //     },
  //   },
  //   {
  //     title: 'May 1940',
  //     cardTitle: 'Dunkirk',
  //     url: 'http://www.history.com',
  //     cardSubtitle:
  //       'Men of the British Expeditionary Force (BEF) wade out to..',
  //     cardDetailedText:
  //       'Men of the British Expeditionary Force (BEF) wade out to..',
  //     media: {
  //       type: 'IMAGE',
  //       source: {
  //         url: 'http://someurl/image.jpg',
  //       },
  //     },
  //   },
  // ];

  arrayEvents.sort(function (a, b) {
    return new Date(b.dateStr) - new Date(a.dateStr);
  });

  return (
    <div>
      <title>News and Events</title>
      <div className="navbarCarouselWrapper institute">
        <Header />
        <MainLayoutSection
          title="News and Events"
          description="Be informed of our wholesome activities. Join, Rejoice, and Accumulate Great Merits."
          photo="/Group 1071.png"
          backgroundImg="url(/MaskGroup3.svg)"
        />
      </div>

      {/* <Container> */}
      {/* <NavigationCommonLayout navigationList={instituteList} /> */}

      {/* <div className="newsandevents-heading">News and Events</div> */}
      {/* <NewsAndEventsComponent2 /> */}
      {/* </Container> */}
      <div>
        <div className="news-and-events-chrono-container">
          <Container className="news-and-events-container-timeline">
            <p className="news-and-events-chrono-title">Timeline</p>
            <Chrono
              items={newArr}
              mode="HORIZONTAL"
              theme={{
                primary: '#532F00',
                secondary: '#FFD607',
                cardBgColor: 'transparent',
                cardForeColor: '#545454',
                titleColor: '#616057',
              }}
            />
          </Container>
        </div>
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
