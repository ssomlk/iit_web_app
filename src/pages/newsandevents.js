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
import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import { eventItems } from '../data/aboutUsData';

export default function NewsAndEvents() {
  const { t, lang } = useTranslation();
  const router = useRouter();

  const [arrayNews, setArrayNews] = useState([]);
  const [arrayEvents, setArrayEvents] = useState([]);

  useEffect(() => {
    let newsArray = [];
    let eventsArray = [];

    newsAndEvents.map((element, index) => {
      if (element.type.indexOf('News') > -1) {
        newsArray.push(element);
      } else {
        let item = {};
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
        eventsArray.push(item);
      }
    });

    eventsArray.sort(function (a, b) {
      return new Date(b.dateStr) - new Date(a.dateStr);
    })

    setArrayNews(newsArray);
    setArrayEvents(eventsArray);
  }, []);

  return (
    <div>
      <title>News and Events</title>
      <div className="navbarCarouselWrapper institute">
        <Header />
        <MainLayoutSection
          title="News and Events"
          description="Be informed of our wholesome activities. Join, Rejoice, and Accumulate Great Merits."
          photo="/one-buddha-gold-temple-thailand.png"
          backgroundImg="url(/Ellipse-4.svg)"
        />
      </div>
      <Container>
        {/* <NavigationCommonLayout navigationList={instituteList} /> */}

        <div className="newsandevents-heading">Events Timeline</div>
        <Chrono
          items={eventItems}
          theme={{
            primary: '#532F00',
            secondary: '#FFD607',
            cardBgColor: '#FFFFFF',
            cardForeColor: 'black',
            titleColor: '#532F00',
          }}
        />

        <div className="newsandevents-heading">News</div>
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
