import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./NavigationCommonLayout.module.css";
import {  BsFillArrowRightCircleFill } from "react-icons/bs";

function  NavigationCommonLayout({navigationList}){
 
  return (
    <Container  className={styles.mainWrapper}>
    <Row className={styles.navRow}>
      {navigationList.map((item, index) => (
        <Col key={{index}}> <BsFillArrowRightCircleFill size={22}  ></BsFillArrowRightCircleFill > &nbsp;{item}</Col>
      ))}
    </Row>
    </Container>
     );
}

export default NavigationCommonLayout;

