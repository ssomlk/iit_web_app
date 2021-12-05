import { Row, Container, Col, Button } from 'react-bootstrap';
import { BsFacebook, BsYoutube, BsWhatsapp, BsTelegram, BsGoogle } from 'react-icons/bs';
import styles from './CustomFooter.module.css';

function Footer() {
  return (
    <footer className="page-footer font-small unique-color-dark">

      <div className={styles.mainDiv}>
        <div className="container">

          <div className="row py-4 align-items-center flex-column-reverse flex-lg-row" >
            <div className="col-sm-12 col-md-6 col-lg-7 text-center text-md-left mb-md-0 p-0 ">
              <h6 >
                <div className={styles.instituteHeading}>International </div>
                <div className={styles.instituteHeading}>Institute of</div>
                <div className={styles.instituteHeading}>Theravada</div>
              </h6>
            </div>
            <div className={`col-sm-12 col-md-6 col-lg-5 text-end  text-md-right p-0 ${styles.footerIcons}`}   >

              <a href='#'>
                <BsFacebook color='white' size={25} />
              </a>
              &nbsp;&nbsp;&nbsp;
              <a href='#'>
                <BsYoutube color='white' size={25} />
              </a>
              &nbsp;&nbsp;&nbsp;
              <a href='#'>
                <BsWhatsapp color='white' size={25} />
              </a>
              &nbsp;&nbsp;&nbsp;
              <a href='#'>
                <BsTelegram color='white' size={25} />
              </a>
              &nbsp;&nbsp;&nbsp;
              <a href='#'>
                <BsGoogle color='white' size={25} />
              </a>

            </div>

          </div>

        </div>

        <hr className={styles.hrLine} />
       

        <Container fluid className="padding-right=0px " >
          <Row xs={1} md={4} lg={6} style={{ color: 'white' }} >
            <Col className={styles.removePaddingStyle}>
              <ul className={styles.removePaddingStyle} >
                <li className={styles.liMain}> About Us</li>
                <li className={styles.liSub}> <a href='#'> History of Theravada Buddhism</a></li>
                <li className={styles.liSub}><a href='#'>History of IIT</a></li>
                <li className={styles.liSub}><a href='#'>Review Board</a></li>
                <li className={styles.liSub}><a href='#'>Editorial Process</a></li>
                <li className={styles.liSub}><a href='#'>Our Policies</a></li>
                <li className={styles.liSub}><a href='#'>Spirituality</a></li>
              </ul>
            </Col>
            <Col className={styles.removePaddingStyle}>
              <ul className={styles.ulPaddingStyle} >
                <li className={styles.liMain}> Monsastery</li>
                <li className={styles.liSub}> <a href='#'> Facilities</a></li>
                <li className={styles.liSub}><a href='#'>Practise Schedule</a></li>
              </ul>
            </Col>
            <Col className={styles.removePaddingStyle}>
              <ul className={styles.ulPaddingStyle} >
                <li className={styles.liMain}> Education</li>
                <li className={styles.liSub}> <a href='#'> Teachers Details</a></li>
                <li className={styles.liSub}><a href='#'> Online Courses</a></li>
                <li className={styles.liSub}> <a href='#'>  Programms Trainings</a></li>
              </ul>
            </Col>
            <Col className={styles.removePaddingStyle}>
              <ul className={styles.ulPaddingStyle}>
                <li className={styles.liMain}> News &amp; Events</li>
                <li className={styles.liSub}> <a href='#'> News</a></li>
                <li className={styles.liSub}><a href='#'> Events</a></li>
                <li className={styles.liSub}> <a href='#'>  Messages</a></li>
              </ul>
            </Col>
            <Col className={styles.removePaddingStyle}>
              <ul className={styles.ulPaddingStyle}>
                <li className={styles.liMain}> Meditation</li>
              </ul>
            </Col>
            <Col className={styles.removePaddingStyle}  >
              <ul className={styles.ulPaddingStyle}>
                <div className={styles.supportBtn} ><Button variant="warning" className={styles.supportBtn}>Support</Button></div>
                <div  className={styles.liContactUs}>Contact Us </div>
                <div className={styles.contactDetails}><a href="mailto:info@iit.lk">info@iit.lk</a><br /><a href="tel:00941128978899">+94 112 897 8899</a></div><br />
                <div className={styles.contactDetails}> Hinetikalma Watta Road, Kaluwaragas Wewa, Sri Lanka.</div><br />
                <div className={styles.contactDetails}> Get Directions</div>
              </ul>
            </Col>
          </Row>

          
          <Row className={styles.lastLine} >
          <Col className={styles.removePaddingStyle} xs={2} sm={3} md={2} lg={2} ><a href='#'> Privacy Policy</a></Col>
          <Col xs={2} sm={3} md={6} lg={5}><a href='#'> Terms of Use</a></Col>
          <Col className={styles.copyright} xs={8} sm={6} md={4} lg={5}>©{GetCurrentYear()} International Institute of Theravada</Col>
        </Row>
        </Container>
      
        <div  className={`container ${styles.textColorWhite}`}>
          <div className="row" >
            <div className="col-6"><a href='#'> Privacy Policy</a></div>
            <div className="col-6 text-end"><a href='#'> Terms of Use</a></div>
          </div>
          <div className= {`row ${styles.textOpacity}`}>
            <div className="col-xs-12"><a href='#'>©{GetCurrentYear()} International Institute of Theravada</a></div>
          </div>
        </div>

      

      </div>

     

    </footer>);
}

function GetCurrentYear(){
  return new Date().getFullYear();
}

export default Footer;
