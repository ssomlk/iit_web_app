import Head from "next/head";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
// import NavigationCommonLayout  from "../components/navigationCommonLayout/NavigationCommonLayout";
import { Container, Row, Col } from "react-bootstrap";
import {  BsFillArrowRightCircleFill } from "react-icons/bs";
import { instituteList } from "../data/commonLayoutNavigationData";

export default function Institute() {
  const { t, lang } = useTranslation();
  const router = useRouter();

  return (
      <div>
    <Header />
    <div style={{color:'red', textAlign:'center'}}>TODO: Add the main componet here.</div>
    {/* <NavigationCommonLayout navigationList={instituteList}/> */}

<Container>
<div style={{color: '#5D5D5D',font: 'normal normal bold 50px/59px Raleway',marginBottom:'20px', marginTop:'20px' }}>Academic Staff</div>
<Row key='0'>
    <Col key='1'>
    <div style={{color: '#202020',textAlign: 'left', font: 'normal normal bold 30px/35px Raleway', letterSpacing:'0px' }}>Ven Werapitiye Dewānanda Thera</div>
    <div style={{textAlign: 'left', font: 'normal normal 600 24px/29px Raleway',letterSpacing: '0px',color: '#202020',opacity: '.61', marginTop:'10px', marginBottom:'10px'}}>President of the IIT</div>
    <div style={{textAlign: 'left', font: 'normal normal 600 20px/35px Raleway',letterSpacing: '0px',color: '#616057',opacity: '1'}}>BA & MA in Buddha Dhamma at the International Theravāda Buddhist Missionary University, Yangon. BA (Hon) in Sanskrit at the University of Peradeniya, Vidyanidhi Panditha Vidyodaya Parivena, extensive experiences in propagating Buddhist teachings in both Australia and Hawaii.</div>
    </Col>

    <Col key='2'>
    <div style={{color: '#202020',textAlign: 'left', font: 'normal normal bold 30px/35px Raleway', letterSpacing:'0px' }}>Ven Watagoda Maggavihari Thera</div>
    <div style={{textAlign: 'left', font: 'normal normal 600 24px/29px Raleway',letterSpacing: '0px',color: '#202020',opacity: '.61', marginTop:'10px', marginBottom:'10px'}}>Vice-President of the IIT</div>
    <div style={{textAlign: 'left', font: 'normal normal 600 20px/35px Raleway',letterSpacing: '0px',color: '#616057',opacity: '1'}}>BA & MA in Buddha Dhamma at the International Theravāda Buddhist Missionary University, Yangon. Also undergone monastic training under the Thai Forest Tradition.</div>
    </Col>
</Row>

<Row style={{marginTop:'30px'}} key='3'>
<Col key='4'>
    <div style={{color: '#202020',textAlign: 'left', font: 'normal normal bold 30px/35px Raleway', letterSpacing:'0px' }}>Ven Matugama Dhammanisanti Thera</div>
    <div style={{textAlign: 'left', font: 'normal normal 600 24px/29px Raleway',letterSpacing: '0px',color: '#202020',opacity: '.61', marginTop:'10px', marginBottom:'10px'}}></div>
    <div style={{textAlign: 'left', font: 'normal normal 600 20px/35px Raleway',letterSpacing: '0px',color: '#616057',opacity: '1'}}>an experienced Abhidhamma teacher currently conducting basic and advanced Abhidhamma courses for lay devotees in Colombo for over five years.</div>
    </Col>

    <Col key='5'>
    <div style={{color: '#202020',textAlign: 'left', font: 'normal normal bold 30px/35px Raleway', letterSpacing:'0px' }}>Ven Ududigana Siddhatthālaṅkāra Thera</div>
    <div style={{textAlign: 'left', font: 'normal normal 600 24px/29px Raleway',letterSpacing: '0px',color: '#202020',opacity: '.61', marginTop:'10px', marginBottom:'10px'}}>Secretary of the IIT and Head of the Vinaya Department</div>
    <div style={{textAlign: 'left', font: 'normal normal 600 20px/35px Raleway',letterSpacing: '0px',color: '#616057',opacity: '1'}}> BA in Buddha Dhamma at the International Theravāda Buddhist Missionary University, Yangon. The first Sri Lankan to pass all the three stages in both Sāsnālaṅkāra (Sāmaṇejo) and Vinayavidu Traditional Buddhist Examinations in Myanmar. 
</div>
    </Col>

    <Col key='6'>
    <div style={{color: '#202020',textAlign: 'left', font: 'normal normal bold 30px/35px Raleway', letterSpacing:'0px' }}>Ven Kiribathgoda Tilokānanda Thera</div>
    <div style={{textAlign: 'left', font: 'normal normal 600 24px/29px Raleway',letterSpacing: '0px',color: '#202020',opacity: '.61', marginTop:'10px', marginBottom:'10px'}}></div>
    <div style={{textAlign: 'left', font: 'normal normal 600 20px/35px Raleway',letterSpacing: '0px',color: '#616057',opacity: '1'}}>Diploma in Buddha Dhamma at the International Theravāda Buddhist Missionary University, Yangon. He has undergone monastic training under the Thai Forest Tradition.</div>
    </Col>

</Row>

<Row style={{marginTop:'30px'}} key='7'>
<Col key='8'>
    <div style={{color: '#202020',textAlign: 'left', font: 'normal normal bold 30px/35px Raleway', letterSpacing:'0px' }}>Ven Labunoruwe Dhammavihari Thera</div>
    <div style={{textAlign: 'left', font: 'normal normal 600 24px/29px Raleway',letterSpacing: '0px',color: '#202020',opacity: '.61', marginTop:'10px', marginBottom:'10px'}}></div>
    <div style={{textAlign: 'left', font: 'normal normal 600 20px/35px Raleway',letterSpacing: '0px',color: '#616057',opacity: '1'}}>Passed the Vinayācariya and Abhidhammācariya examinations held under the Srī Kaḷyāṇī Yogāśrama Saṃsthā, Rāmañña Mahānikāya, Sri Lanka. He is currently a Vinaya teacher at the Nā-Uyana Forest Monastery, Sri Lanka</div>
    </Col>

    <Col key='9'>
    <div style={{color: '#202020',textAlign: 'left', font: 'normal normal bold 30px/35px Raleway', letterSpacing:'0px' }}>Ven Walawe Sumedhaloka Thera</div>
    <div style={{textAlign: 'left', font: 'normal normal 600 24px/29px Raleway',letterSpacing: '0px',color: '#202020',opacity: '.61', marginTop:'10px', marginBottom:'10px'}}>Head of the Language Department</div>
    <div style={{textAlign: 'left', font: 'normal normal 600 20px/35px Raleway',letterSpacing: '0px',color: '#616057',opacity: '1'}}>Diploma in Buddha Dhamma at the International Theravāda Buddhist Missionary University, Yangon. He has also earned knowledge and experience under the monastic education system in Myanmar for four years and has gained training under the Thai Forest Tradition as well. He is a competent Abhidhamma- and Pāḷi-teacher capable teaching in both Sinhalese and English. 
</div>
    </Col>

    <Col key='10'>
    <div style={{color: '#202020',textAlign: 'left', font: 'normal normal bold 30px/35px Raleway', letterSpacing:'0px' }}>Ven Deniyaye Upasama Thera</div>
    <div style={{textAlign: 'left', font: 'normal normal 600 24px/29px Raleway',letterSpacing: '0px',color: '#202020',opacity: '.61', marginTop:'10px', marginBottom:'10px'}}>Head of the Abhidhamma Department</div>
    <div style={{textAlign: 'left', font: 'normal normal 600 20px/35px Raleway',letterSpacing: '0px',color: '#616057',opacity: '1'}}>He has studied the Abhidhamma with specialization in the Paṭṭhānappakaraṇa, the seventh and most profound book in the basket of Abhidhamma and had taught Abhidhamma in Burmese language in Myanmar and also in Sinhala at several Sri Lankan monastic education institutes. He is arguably the best academic in the field of Paṭṭhāna studies currently in Sri Lanka.</div>
    </Col>

</Row>

<Row style={{marginTop:'30px'}} key='11'>
<Col key='12'>
    <div style={{color: '#202020',textAlign: 'left', font: 'normal normal bold 30px/35px Raleway', letterSpacing:'0px' }}>Rev Kuliyāpitiye Saṅgharatana Thera</div>
    <div style={{textAlign: 'left', font: 'normal normal 600 24px/29px Raleway',letterSpacing: '0px',color: '#202020',opacity: '.61', marginTop:'10px', marginBottom:'10px'}}></div>
    <div style={{textAlign: 'left', font: 'normal normal 600 20px/35px Raleway',letterSpacing: '0px',color: '#616057',opacity: '1'}}>Diploma in Buddha Dhamma, International Theravāda Buddhist Missionary University, Yangon. 
</div>
    </Col>

    <Col key='13'>
    <div style={{color: '#202020',textAlign: 'left', font: 'normal normal bold 30px/35px Raleway', letterSpacing:'0px' }}>Ven Palmadulle Vijitānandābhivaṃsa Thera</div>
    <div style={{textAlign: 'left', font: 'normal normal 600 24px/29px Raleway',letterSpacing: '0px',color: '#202020',opacity: '.61', marginTop:'10px', marginBottom:'10px'}}>Vice Secretary of the IIT and Head of the Pāḷi, Sanskrit and Prakrit Department</div>
    <div style={{textAlign: 'left', font: 'normal normal 600 20px/35px Raleway',letterSpacing: '0px',color: '#616057',opacity: '1'}}>One of the most academically celebrated Sri Lankan Buddhist monks studied in Myanmar. Successfully completed the first stage of the well-celebrated Sakyasīha Dhammācariaya Examination (known as the Mandalay Abhivaṃsa Examination) becoming the second Sri Lankan to make this achievement. Only about six hundred monks have passed the first level of the Abhivaṃsa Examination, in Myanmar, throughout its history of more than a century. He has also passed one of the three subjects of the second stage of the Sakyasīha Dhammācariya (Abhivaṃsa) Examination. Venerable Vijitānanda has also successfully passed the Sāsanadhaja Dhammācariya Examination in Myanmar. He is currently a Dhamma teacher at the well-celebrated Yuwa Mā Pariyatti Center, Ein Sein, Yangon. 
</div>
    </Col>
</Row>

</Container>

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

</Container>

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