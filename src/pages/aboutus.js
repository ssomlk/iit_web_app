import Head from "next/head";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import MainLayoutSection from "../components/maincommonlayout/MainCommonLayoutSection";
import NavigationCommonLayout  from "../components/navigationcommonlayout/NavigationCommonLayout";
import { Container, Row, Col } from "react-bootstrap";
import {  BsFillArrowRightCircleFill } from "react-icons/bs";
import OurFocusCardDeck from "../components/ourfocuscarddeck/OurFocusCardDeck";
import { aboutUsList } from "../data/commonLayoutNavigationData";

export default function AboutUs() {
  const { t, lang } = useTranslation();
  const router = useRouter();

  return (
    <div className='skeleton'>
      <Head>
        <title>About Us</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="international institute of theravada" />
      </Head>

      <div className='navbarCarouselWrapper'>
        <Header />
      </div>
    <MainLayoutSection/> 
  <NavigationCommonLayout navigationList={aboutUsList}/>

<Container style={{textAlign: 'center', color: '#5D5D5D', paddingTop:'10px', fontSize:'45px', fontWeight:'500' }}>
<Row >
    <Col>
    What is IIT?
    </Col>
</Row>
</Container>

<Container style={{textAlign: 'center', color: '#5D5D5D', paddingTop:'10px' }}>
<Row>
    <Col>
    The International Institute of Theravada (IIT) is a comprehensive training institute aimed at facilitating spiritual and academic development of Buddhist monks and nuns, based on Theravada teachings. It is inclusive and accommodative, irrespective of sects (Nikaya) and other differences within the Theravada Buddhist clergy. The IIT would disseminate the teachings of the Buddha as per the ancient Theravada texts, to Buddhist practitioners across the globe.
    </Col>
</Row>
</Container>
      
<Container style={{textAlign: 'center', color: '#5D5D5D', paddingTop:'10px', marginBottom:'20px' }}>
<Row>
    <Col>
    <iframe height="100%" width="100%" position="absolute" id="gmap_canvas" src="https://maps.google.com/maps?q=International%20Institute%20of%20Therav%C4%81da,%20Heenatikalmavatta,%20Rajavigama,%20Karuwalagaswewa&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
    </Col>
    <Col>
    <Container style={{ color: 'black', paddingTop:'10px', fontSize:'25px', fontWeight:'300', textAlign:'left' }}>
    Where is the IIT?<br/></Container>
    <Container style={{ color: 'black', paddingTop:'10px', fontWeight:'300', textAlign:'left' }}>
    Located in Sri Lanka (Karuwalagaswewa, near Anamaduwa), a country where theravāda Buddhism is preserved and practiced extensively, the IIT will cater to monastics from all parts of the world.
<br/>

<div style={{borderRadius:'25px', background:'#FFEFD9', padding:'40px'}}>

<Row>
  <Col>
  <img src="/GetDirections.svg"/>
  </Col>
  <Col>
  <div style={{color:'#FF7C19', textAlign:'center',font: 'normal normal bold 31px/36px Raleway' }}>
Get Directions
<div style={{color:'#044884', textAlign:'center',font: 'normal normal bold 20px/24px Raleway' }}> 
View in google map
</div> 
</div> 
  </Col>
  <Col>
<BsFillArrowRightCircleFill size={50} style={{alignContent:'center'}}/>
  
  </Col>
  </Row>

</div>

</Container>
    </Col>
</Row>
</Container>

<Container>
  <div style={{textAlign:'left', color:'#202020', font: 'normal normal bold 30px/35px Raleway'}}>Our Vision & Mission</div>
<Row>
  <Col>
  <div style={{textAlign:'left', color:'#4E4E4E', font: 'normal normal bold 42px/49px Raleway'}}>
  The IIT shall always function to achieve its vision and mission.
  </div>
  </Col>
  <Col>
  <img src="/DhammaChakra.svg" width="88px" height="88"/>
  <div  style={{textAlign:'left', color:'#616057', font: 'normal normal normal 32px/48px Raleway'}}>
  Creating and propagating a Buddhist monastic community which clearly understands the path to ultimate liberation or Nibbāna, and whose primary goal is to encourage striving towards it.
  </div>
  </Col>
</Row>

<Row>
  <Col>
  </Col>
  <Col>
  <img src="/DhammaChakra.svg" width="88px" height="88"/>
  <div  style={{textAlign:'left', color:'#616057', font: 'normal normal normal 32px/48px Raleway'}}>
  Establishing a community of monastics who would share the theravāda teachings, and guide monks, nuns and lay persons in practicing the dhamma-vinaya according to the original teachings of the Buddha as published in the Pāli Canon and Commentaries.
  </div>
  </Col>
</Row>

<Row>
  <Col>
  </Col>
  <Col>
  <img src="/DhammaChakra.svg" width="88px" height="88"/>
  <div  style={{textAlign:'left', color:'#616057', font: 'normal normal normal 32px/48px Raleway'}}>
  Building the capacity of monks in executing formal disciplinary acts (Vinaya kamma) in order to prolong the sanctity of monks’ lineage.
  </div>
  </Col>
</Row>
  </Container>

<OurFocusCardDeck/>

      <Footer/>
    </div>

    
  );
}

export async function getServerSideProps(context) {
  // const products = await fetch('https://fakestoreapi.com/products')
  // .then(res=>res.json());

  return {
    props: {
      //products
    }
  }
}