import React from 'react';
import { Container, Row, Card, Pagination } from 'react-bootstrap';
import newsAndEvents from '../../data/newsAndEventsData.json';
import styles from './NewsAndEvents.module.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const NewsAndEventsComponent2 = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 576 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 575, min: 0 },
      items: 1,
    },
  };

  const renderCard = (card, index) => {
    return (
      <Card
        className={styles.cardBody}
        key={index}
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        {card.type === 'News' ? (
          <span className={styles.typeNews}> {card.type}</span>
        ) : (
          <span className={styles.typeEvent}> {card.type}</span>
        )}
        <Card.Subtitle className={styles.custSubTitle}>
          {card.date}
        </Card.Subtitle>
        <Card.Title className={styles.custTitle}>{card.title}</Card.Title>
        <Card.Text className={styles.custDescription}>
          {card.description}
        </Card.Text>
        <Card.Link href="#">Read more...</Card.Link>
      </Card>
    );
  };

  return (
    <div className={styles.mainDiv}>
      <Container>
        <Row className={styles.newEventsHeaderContainer}>
          <p className={styles.mainText}>News and Events</p>
          <Pagination className={styles.mainText}>
            <Pagination.Prev className={styles.paginationButton} />
            <Pagination.Next className={styles.paginationButton} />
          </Pagination>
        </Row>
        <Carousel
          className={styles.shsslkCardListCarousel}
          ssr
          deviceType="desktop"
          itemClass="image-item"
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={8000}
        >
          {newsAndEvents.map(renderCard)}
        </Carousel>
      </Container>
    </div>
  );
};
export default NewsAndEventsComponent2;
