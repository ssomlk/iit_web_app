import Head from "next/head";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import MainLayoutSection from "../components/maincommonlayout/MainCommonLayoutSection";
import { eduList } from "../data/commonLayoutNavigationData";
import NavigationCommonLayout  from "../components/navigationcommonlayout/NavigationCommonLayout";
import { Tabs, Tab, Container } from "react-bootstrap";
import {BsWatch, BsFillBookFill, BsCheckSquare, BsShieldFillPlus, BsCardChecklist, BsListStars, BsPersonCheckFill} from 'react-icons/bs';

export default function Education() {
  const { t, lang } = useTranslation();
  const router = useRouter();

  return (
    <div className='skeleton'>
      <Head>
        <title>Education</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="international institute of theravada" />
      </Head>

      <div className='navbarCarouselWrapper contact'>
        <Header />
      </div>

      <MainLayoutSection 
        title="Education" 
        description="Comprehensive training institute aimed at facilitating spiritual and academic development of Buddhist monks and nuns, based on Theravada teachings."
        photo="/black-hand-buddha-statue-with-yellow-light.png"
        backgroundImg="url(/MaskGroup-2.svg)"
      /> 

    <NavigationCommonLayout navigationList={eduList}/>

<Container style={{padding: '20px'}}>
    <div style={{color:'#5D5D5D', font:'normal normal bold 50px/59px Raleway', marginBottom:'20px', marginTop:'20px'}}>Courses Conducted </div>

    <Tabs defaultActiveKey="nmc" className="mb-3">
  <Tab eventKey="nmc" title="Nissayamuttaka Course (NmC)" >
  <div style={{color:'#FFFFF', padding:'10px',  font: 'normal normal 600 20px/35px Raleway'}}>
      Nissayamuttaka course is a series of theoretical and practical lessons that will impart knowledge and develop skills required by a monk who wishes to live by himself independent of a teacher. 
     </div>
      <div style={{color:'#5D5D5D', padding:'10px',  font: 'normal normal 600 20px/35px Raleway'}}>
     <div style={{marginBottom:'15px'}}> <BsWatch  size={20} />  <b>Duration of the course</b> – Six years </div>
     <div style={{marginBottom:'15px'}}> <BsFillBookFill  size={20} /> <b> Subjects</b> – Vinaya, Suttanat, Abhidhamma, Pāḷi, Samatha, Vipassanā, History of the Sāsana, English and few more </div> 
     <div style={{marginBottom:'15px'}}> <BsCheckSquare  size={20} />   <b>Practice</b> – Students undergo daily meditation practices throughout the six-year course (in addition to theoretically studying samatha and vipassanā subjects), and observation of dhutaṅga practices during an entire semester</div>
     <div style={{marginBottom:'15px'}}> <BsShieldFillPlus  size={20} />   <b> Skills</b> – Abilities to execute formal disciplinary acts (vinayakammas), skillfulness in crafts such as robe-making and bowl-colouring and capability in preaching Dhamma </div>
 </div>
  </Tab>
  <Tab eventKey="puc" title="Parisupaṭṭhāka Course (PuC)">
  <div style={{color:'#FFFFF', padding:'10px',  font: 'normal normal 600 20px/35px Raleway'}}>
  Parisupaṭṭhāka course is a series of theoretical and practical lessons aimed at facilitating the monk to become a qualified mentor with adequate knowledge and spiritual qualities mentioned in the Vinaya Piṭaka as required to become a teacher (preceptor).
      </div>
      <div style={{color:'#5D5D5D', padding:'10px',  font: 'normal normal 600 20px/35px Raleway'}}>
     <div style={{marginBottom:'15px'}}> <BsWatch  size={20} />  <b>Duration of the course</b> – Two years </div>
     <div style={{marginBottom:'15px'}}> <BsFillBookFill  size={20} /> <b> Subjects</b> – Extensive studies on Pārājikāpāḷi, Pācittiyapāḷi, Vinayakammas and Khandhakavatta in Vinaya, comprehensive studies on Mahāvagga of Dīgha Nikāya, Mūlapaṇṇāsaka of Majjhima Nikāya, Mahāvagga of Saṃyutta Nikāya, first half of the Aṅguttara Nikāya, Jātakapāḷi together with its commentary and Dhammapadapāḷi together with its commentary in Suttanta and extensive lessons in meditation especially on giving meditative instructions  </div> 
     <div style={{marginBottom:'15px'}}> <BsCheckSquare  size={20} />   <b>Practice</b> –  Regular meditation during the course </div>
     <div style={{marginBottom:'15px'}}> <BsShieldFillPlus  size={20} />   <b> Skills</b> – Skills in teaching and training students and Dhamma-preaching skills </div>
 </div>
  </Tab>

  <Tab eventKey="BstC" title="Bahussuta Courses (BstC)">
  <div style={{color:'#FFFFF', padding:'10px',  font: 'normal normal 600 20px/35px Raleway'}}>
  Bahussuta courses are the advanced theoretical training courses that focus upon extensive and comprehensive studies on scriptures especially following ancient methods of interpretation preserved in Myanmar. There are few such courses based on the subjects studied. For instance, course for studying the entire Vinaya Piṭaka, course for studying the entire Abhidhamma Piṭaka and so forth. 
      </div>
      <div style={{color:'#5D5D5D', padding:'10px',  font: 'normal normal 600 20px/35px Raleway'}}>
     <div style={{marginBottom:'15px'}}> <BsWatch  size={20} />  <b>Duration of the course</b> – depends on the subject </div>
     <div style={{marginBottom:'15px'}}> <BsCardChecklist  size={20} />  <b>Courses</b> -
     <ul>
         <li>The whole Vinaya Piṭaka and related literature</li>
         <li>The Dīgha Nikāya and related literature</li>
         <li>The Majjhima Nikāya related literature</li>
         <li>The Aṅguttara Nikāya related literature</li>
         <li>The Saṃyutta Nikāya related literature</li>
         <li>The whole Abhidhamma Piṭaka related literature</li>
         <li>Visuddhimagga, Paisambhidāmagga and literature related to meditation</li>
         <li>Advanced Pāḷi Studies; Kaccāyana, Moggallāna, Saddanīti traditions and modern philological studies</li>
     </ul>
     <div style={{marginBottom:'15px'}}> <BsListStars  size={20} />  <b>Tasks</b> – Students are expected to write term papers and a thesis at the end of each course. </div>

      </div>
  
 </div>
  </Tab>

  <Tab eventKey="mc" title="Minor Courses">
  <div style={{color:'#FFFFF', padding:'10px',  font: 'normal normal 600 20px/35px Raleway'}}>
  There are few minor courses which students can take in order to broaden their knowledge.
      </div>
      <div style={{color:'#5D5D5D', padding:'10px',  font: 'normal normal 600 20px/35px Raleway'}}>
     <div style={{marginBottom:'15px'}}> <BsCardChecklist  size={20} />  <b>Courses on books of Khuddaka Nikāya </b> such as the Buddhavaṃsapāḷi, Apadānapāḷi and Cariyāpiṭakapāḷi
 </div>
     <div style={{marginBottom:'15px'}}> <BsPersonCheckFill  size={20} />   <b> Basic foreign language courses</b>  intended for monks who wish to undertake do missionary assignmentsworks overseas 
 </div>
 </div>
  </Tab>

</Tabs>
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