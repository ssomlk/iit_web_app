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
import { items, newsItems } from '../data/aboutUsData';

export default function NewsAndEvents() {
  const { t, lang } = useTranslation();
  const router = useRouter();

  const [arrayNews, setArrayNews] = useState([]);

  // const [arrayEvents, setArrayEvents] = useState([]);

  //  console.log(items);
  // let newsArray =[];

  // useEffect(() => {
  //    newsAndEvents
  //     .map((element, index) => {
  //       if (element.type.indexOf('News') > -1) {
  //         // const item = {};
  //         // item.title = element.date;
  //         // item.cardTitle = element.title;
  //         // item.cardDetailedText = element.description;
  //         // item.dateStr = element.dateStr;
  //         // item.url = 'http://www.history.com'; // '/newsandevents/' + index +1;
  //         // item.media = {
  //         //   type: 'IMAGE',
  //         //   source: {
  //         //     url: element.image,
  //         //   },
  //         // };
  //         newsArray.push(element);
  //       }
  //     })
  //     .filter((a) => a != null);

  //   // console.log('>>>>>>>>>>> ', newsArray);

  //   setArrayNews(newsItems);

  //   // console.log(item);
  //   // setArrayEvents((el) => {
  //   //   let arr =[];
  //   //   if(el.length > 0){
  //   //     arr = [...el, item];
  //   //   }
  //   //   else {
  //   //       arr = [item];
  //   //   }
  //   //   // console.log(arr);
  //   //   return arr;
  //   // });
  //   // setArrayEvents([
  //   //   {
  //   //     title: 'May 1940',
  //   //     cardTitle: 'Dunkirk',
  //   //     url: 'http://www.history.com',
  //   //     cardSubtitle:
  //   //       'Men of the British Expeditionary Force (BEF) wade out to..',
  //   //     cardDetailedText:
  //   //       'Men of the British Expeditionary Force (BEF) wade out to..',
  //   //     media: {
  //   //       type: 'IMAGE',
  //   //       source: {
  //   //         url: 'http://someurl/image.jpg',
  //   //       },
  //   //     },
  //   //   },
  //   // ]);
  //   // setArrayNews((el) => {
  //   //   // console.log(el);
  //   //   // let arr =[];
  //   //   // if(el.length > 0){
  //   //   //   arr = [...el, element];
  //   //   // }
  //   //   // else {
  //   //   //     arr = [element];
  //   //   // }
  //   //   // return arr;
  //   // });
  // }, []);

  console.log('^^^^^^^^^^^^^ ', newsItems);

  // console.log('****', arrayEvents);
  // console.log("****", arrayEvents);

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
  // ];

  // console.log(arrayNews);

  // console.log("*************", arrayEvents);
  // console.log("*************", arrayNews);

  // function setArrayNews(){

  //console.log(arrayNews);

  // var newArr = arrayEvents.sort(function (a, b) {
  //   return new Date(b.dateStr) - new Date(a.dateStr);
  // });
  // }

  return (
    <div>
      <title>News and Events</title>
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

        <div className="newsandevents-heading">Events Timeline</div>

        <Chrono
          items={items}
          theme={{
            primary: '#532F00',
            secondary: '#FFD607',
            cardBgColor: '#FFFFFF',
            cardForeColor: 'black',
            titleColor: '#532F00',
          }}
        />

        <div className="newsandevents-heading">News</div>

<div id="test"></div>

     

        {/* {newsItems.forEach((element) => {
          console.log('.............', element);
      

          // <Row>
          //   <Col>
          //     <div className="newsandevents-news-item">
          //       <div className="newsandevents-news-item-card-body">
          //         <strong className="newsandevents-news-item-category">
          //           {element.category}
          //         </strong>
          //         <div className="newsandevents-news-item-card-title">
          //           {element.title}
          //         </div>
          //         <div className="newsandevents-news-item-card-date">
          //           {element.date}
          //         </div>

          //         <p className="newsandevents-news-item-card-description mb-auto">
          //           {element.description}
          //         </p>
          //         <a href="#">Continue reading</a>
          //       </div>

          //       <img
          //         class="card-img-right flex-auto d-none d-md-block"
          //         data-src="holder.js/200x250?theme=thumb"
          //         alt="Thumbnail [200x250]"
          //         style={{ width: '200px', height: '250px' }}
          //         src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22250%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20250%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17d9fc72576%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A13pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17d9fc72576%22%3E%3Crect%20width%3D%22200%22%20height%3D%22250%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2256.1953125%22%20y%3D%22131%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
          //         data-holder-rendered="true"
          //       />
          //     </div>
          //   </Col>
          // </Row>;
        })}
        */}

        {/* <div id="test"></div> */}

        {/* <div class="row mb-2">
          <div class="col">
            <div class="card flex-md-row mb-4 box-shadow h-md-250">
              <div class="card-body d-flex flex-column align-items-start">
                <strong class="d-inline-block mb-2 text-primary">World</strong>
                <h3 class="mb-0">
                  <a class="text-dark" href="#">
                    Featured post
                  </a>
                </h3>
                <div class="mb-1 text-muted">Nov 12</div>
                <p class="card-text mb-auto">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </p>
                <a href="#">Continue reading</a>
              </div>
              <img
                class="card-img-right flex-auto d-none d-md-block"
                data-src="holder.js/200x250?theme=thumb"
                alt="Thumbnail [200x250]"
                style={{ width: '200px', height: '250px' }}
                src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22250%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20250%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17d9fc72576%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A13pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17d9fc72576%22%3E%3Crect%20width%3D%22200%22%20height%3D%22250%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2256.1953125%22%20y%3D%22131%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                data-holder-rendered="true"
              />
            </div>
          </div>
        </div> */}
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
