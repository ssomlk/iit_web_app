import React, { useState, useEffect } from "react";
import { Col, Container, Row, Card, Pagination } from "react-bootstrap";
import newsAndEvents from '../../data/newsAndEventsData.json'
import styles from './NewsAndEvents.module.css';

const NewsAndEventsComponent = () => {
  const renderCard = (card, index) => {
    return (
        <Card className={styles.cardBody} key={index}>
            {(card.type === "News") ? (
              <span className={  styles.typeNews } > {card.type}</span> 
            ) : (
              <span className={  styles.typeEvent } > {card.type}</span> 
            )} 
            <Card.Subtitle className={styles.custSubTitle}>{card.date}</Card.Subtitle>
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
          <Col xs={6} sm={6} md={6} lg={10}>
            <p className={styles.mainText}>News and Events</p>
          </Col>
          <Col xs={6} sm={6} md={6} lg={2}>
            <Pagination className={styles.mainText}>
              <Pagination.Prev className={styles.paginationButton} />
              <Pagination.Next className={styles.paginationButton}/>
            </Pagination>
          </Col>
        </Row>
        <Container>
          <Row className={styles.newsContainer} xs={1} sm={2} md={4} lg={4}>
          {newsAndEvents.map(renderCard)}
          </Row>
        </Container>
      </Container>
    </div>
  );
};
export default NewsAndEventsComponent;
