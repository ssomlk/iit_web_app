import React, { useState, useEffect } from "react";
import { Container, Accordion } from "react-bootstrap";
import faqData from '../../data/generalFAQData.json'
import styles from './GeneralFAQ.module.css';

const GeneralFAQ = () => {
  const renderAccordion = (card, index) => {
    return (
        <Accordion.Item eventKey={index} key={index} >
       <Accordion.Header>
            <div className={styles.questionSpan}>Q.</div>
            <div  className={styles.header}> {card.question}</div>
        </Accordion.Header>
     <Accordion.Body>
        <div className={styles.answerSpan}>A.</div>
        <div className={styles.header}>{card.answer}</div>
    </Accordion.Body>
        </Accordion.Item>
    );
  };

  return (
    <Container className={styles.generalFAQContainer}>
             <Accordion flush>
    {faqData.map(renderAccordion)}   
    </Accordion>
       </Container>
       );
};
export default GeneralFAQ;
