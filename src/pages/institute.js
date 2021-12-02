import Head from "next/head";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import NavigationCommonLayout  from "../components/navigationcommonlayout/NavigationCommonLayout";
import { Container, Row, Col } from "react-bootstrap";
import {  BsFillArrowRightCircleFill } from "react-icons/bs";
import { instituteList } from "../data/commonLayoutNavigationData";
import { FirstRow, SecondRow, ThirdRow, FourthRow } from "../data/academicStaffData";
import MainLayoutSection from "../components/maincommonlayout/MainCommonLayoutSection";

export default function Institute() {
  const { t, lang } = useTranslation();
  const router = useRouter();

  return (
      <div>
    <div className='navbarCarouselWrapper institute'>
        <Header />
      </div>
    <MainLayoutSection 
      title="Institute" 
      description="Comprehensive training institute aimed at facilitating spiritual and academic development of Buddhist monks and nuns, based on Theravada teachings."
      photo="/one-buddha-gold-temple-thailand.png"
      backgroundImg="url(/Ellipse-4.svg)"
    /> 
    <NavigationCommonLayout navigationList={instituteList}/> 

<Container>
<div style={{color: '#5D5D5D',font: 'normal normal bold 50px/59px Raleway',marginBottom:'40px', marginTop:'30px' }}>Academic Staff</div>
<Row key='R1'>
{FirstRow.map((item, index) => (
        <Col md={6} lg={6} key={index +"A"}>
                <img src={item.image} className='inst-academic-image'/> 

          <div className='inst-academic-name'>{item.name}</div>
    <div className='inst-academic-heading'>{item.heading}</div>
    <div className='inst-academic-body'>{item.body}</div>
        </Col>
      ))}
</Row>

<Row style={{marginTop:'30px'}} >

{SecondRow.map((item, index) => (
        <Col md={4} lg={4} key={index + "B"}>
                <img src={item.image} className='inst-academic-image'/> 

                  <div className='inst-academic-name'>{item.name}</div>
    <div className='inst-academic-heading'>{item.heading}</div>
    <div className='inst-academic-body'>{item.body}</div>
           </Col>
      ))}

</Row>

<Row style={{marginTop:'30px'}} >

{ThirdRow.map((item, index) => (
        <Col md={4} lg={4} key={index + "C"}>
                <img src={item.image} className='inst-academic-image'/> 
                <div className='inst-academic-name'>         {item.name}</div>
    <div className='inst-academic-heading'>{item.heading}</div>
    <div className='inst-academic-body'>{item.body}</div>
         </Col>
      ))}
</Row>

<Row style={{marginTop:'30px'}} >

{FourthRow.map((item, index) => (
        <Col md={6} lg={6} key={index + "D"}>
                <img src={item.image} className='inst-academic-image'/> 

               <div className='inst-academic-name'>{item.name}</div>
    <div className='inst-academic-heading'>{item.heading}</div>
    <div className='inst-academic-body'>{item.body}</div>
          </Col>
      ))}
</Row>

</Container>
{/* 
<Container>
<div style={{ color: '#202020', textAlign:'left', font: 'normal normal bold 30px/35px Raleway', letterSpacing:'0px', marginBottom:'25px'}}>Administrational Structure</div>
<Row key='14'>
<Col key='15'>
<div style={{ color: '#4E4E4E', textAlign:'left', font: 'normal normal bold 42px/49px Raleway', letterSpacing:'0px'}}>IIT as an institution has both monastic features and, at the same time, features of a well organized academic institute. IIT is governed by its General Assembly of which powers are exersiced by three independent bodies, i.e., Executive Board, Senet and Vinaya Council.</div>
<div style={{ color: '#202020', textAlign:'left', font: 'normal normal 600 24px/36px Raleway', letterSpacing:'0px'}}>IIT is an independent academic institution that would retain autonomy with regard to, all aspects of decision-making.</div>
</Col>

<Col key='16'>
<Row key='17'>
  <div style={{color: '#202020', textAlign:'left', font: 'normal normal bold 24px/36px Raleway', letterSpacing:'0px', marginBottom:'15px'}}>General Assembly</div>
<div style={{color: '#616057', textAlign:'left', font: 'normal normal bold 20px/35px Raleway', letterSpacing:'0px', marginBottom:'15px'}}>Executive Board consisting of senior monks who are responsible in governing the IIT. It is divided into two sub-councils, i.e., Study Council and Monastic Council</div>
</Row>

<Row key='18'>
  <div style={{color: '#202020', textAlign:'left', font: 'normal normal bold 24px/36px Raleway', letterSpacing:'0px', marginBottom:'15px'}}>Study Council</div>
<div style={{color: '#616057', textAlign:'left', font: 'normal normal bold 20px/35px Raleway', letterSpacing:'0px', marginBottom:'15px'}}>Study Council is consisting of erudite monks who manage all academic and spriritual activities of the IIT</div>
</Row>

<Row key='19'>
  <div style={{color: '#202020', textAlign:'left', font: 'normal normal bold 24px/36px Raleway', letterSpacing:'0px', marginBottom:'15px'}}>Senat</div>
<div style={{color: '#616057', textAlign:'left', font: 'normal normal bold 20px/35px Raleway', letterSpacing:'0px', marginBottom:'15px'}}>Senet is the body consisting of members of the IIT who are knowlagable in the Theravada scriptures and who observe the decisions taken by the Executive Board and discuss on Dhamma Vinaya issues.</div>
</Row>

</Col>

<Col key='20'>
<Row key='21'>
  <div style={{color: '#202020', textAlign:'left', font: 'normal normal bold 24px/36px Raleway', letterSpacing:'0px', marginBottom:'15px'}}>Executive Board</div>
<div style={{color: '#616057', textAlign:'left', font: 'normal normal bold 20px/35px Raleway', letterSpacing:'0px', marginBottom:'15px'}}>Executive Board consisting of senior monks who are responsible in governing the IIT. It is divided into two sub-councils, i.e., Study Council and Monastic Council</div>
</Row>

<Row key='22'>
  <div style={{color: '#202020', textAlign:'left', font: 'normal normal bold 24px/36px Raleway', letterSpacing:'0px', marginBottom:'15px'}}>Monsatic Council</div>
<div style={{color: '#616057', textAlign:'left', font: 'normal normal bold 20px/35px Raleway', letterSpacing:'0px', marginBottom:'15px'}}>Monastic Council is cosisiting of skilled monks who supervise the construction of the IIT and the well-being of the residents of the IIT</div>
</Row>

<Row key='23'>
  <div style={{color: '#202020', textAlign:'left', font: 'normal normal bold 24px/36px Raleway', letterSpacing:'0px', marginBottom:'15px'}}>Vinay Council</div>
<div style={{color: '#616057', textAlign:'left', font: 'normal normal bold 20px/35px Raleway', letterSpacing:'0px', marginBottom:'15px'}}>Vinaya Council consisting of monks well versed in the monks disciplinary code, and decide on all disciplinary matters of the IIT</div>
</Row>

</Col>
</Row > 

</Container> */}

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