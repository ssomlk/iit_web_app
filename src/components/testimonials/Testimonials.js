import React, { useState, useEffect } from "react";
import { Container, Carousel, Row, Col } from "react-bootstrap";
import data from '../../data/testimonialsData.json'
import styles from './Testimonials.module.css';
import ReactPlayer from 'react-player';
import {BsFillChatRightQuoteFill} from 'react-icons/bs';

const Testomonials = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [playLabel, setPlayLable] = useState("Play")

    const handlePlaying = () => {
         if(isPlaying) {
            setIsPlaying(false);
            setPlayLable("Play");
         } else{
            setIsPlaying(true);
            setPlayLable("Stop");
         } 
    }

  const renderCarousel = (item, index) => {
    return (
      
        <Carousel.Item key={index}>
         <Row>
             <Col>
             <ReactPlayer url={item.video}  control="true"/>
             </Col>
             <Col>
             <img src={item.image}/>

             <div style={{textAlign: 'left', font: 'normal normal normal 41px/49px Raleway',letterSpacing: '0px',color: '#FFFFFF', 
             opacity: '0.73'}}><BsFillChatRightQuoteFill/> &nbsp;{item.quote}</div>

             <div style={{color: '#D1C7BB',textAlign: 'left', font: 'normal normal 600 26px/61px Raleway', letterSpacing: '0px', opacity: '0.73'
             }}>{item.author}</div>

                <div style={{color: '#FFFFFF',textAlign: 'left', font: 'normal normal 600 14px/19px Raleway', letterSpacing: '0px', opacity: '0.38'
             }}>{item.description}</div>
             </Col>
         </Row>
        </Carousel.Item>

    );
  };

  return (
      <Carousel style={{background:'#532F00', width:'100%', height:'100%'}}>

    {data.map(renderCarousel)}   
    </Carousel>
       );
};
export default Testomonials;
