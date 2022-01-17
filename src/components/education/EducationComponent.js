import React from 'react';
import { Container, Row, Card } from 'react-bootstrap';
import newsAndEvents from '../../data/newsAndEventsData.json';
import styles from './Education.module.css';
import Carousel from 'react-multi-carousel';
import { CustomButtonGroup } from '../customarrow/CustomArrows';

function EducationComponent() {
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
      breakpoint: { max: 1410, min: 1017 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 1016, min: 0 },
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
          {`${card.description.slice(0, 200)}...`}
        </Card.Text>
        <Card.Link href="#">Read more...</Card.Link>
      </Card>
    );
  };

  return (
    <div className={styles.eduMainDiv}>
      <Container>
        <div className={styles.eduIntroduction}>
          <p>
            Comprehensive studies of Buddhist scriptures pave the foundation for
            the prolongation of the Buddha Sāsana (dispensation). IIT capacitate
            monks capable in attaining their own liberation, guiding others
            towards it and prolonging the dispensation with highest erudition.
          </p>
        </div>
      </Container>
      <Container className={styles.relativeClass}>
        <Row className={styles.eductionHeaderContainer}>
          <span className={styles.mainText}>Courses Conducted</span>
        </Row>
        <Carousel
          className={styles.shsslkCardListCarousel}
          ssr
          itemClass="image-item"
          responsive={responsive}
          infinite={true}
          arrows={false}
          customButtonGroup={<CustomButtonGroup />}
          renderButtonGroupOutside={true}
        >
          {/* {newsAndEvents.map(renderCard)} */}
          <Card
            className={styles.cardBody}
            // key={index}
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: '#FFD426',
              border: 'none',
            }}
          >
            <div className={styles.courseHeader}>
              <span className={styles.courseName}>
                Nissayamuttaka Course{' '}
                <span className={styles.smallText}>(NmC)</span>
              </span>
              <img
                className="d-block w-100 course-icon-max-width-99"
                src="/courseIcon-1.svg"
                alt="Nissayamuttaka Course"
              />
            </div>
            <div className={styles.courseDescription}>
              Nissayamuttaka course is a series of theoretical and practical
              lessons that will impart knowledge and develop skills required by
              a monk who wishes to live by himself independent of a teacher.
            </div>
            <div className={styles.courseDetailListContainer}>
              <ul className={styles.courseDetailList}>
                <li className={styles.courseDetailListItem}>
                  <img
                    className={`d-block w-100 course-item-icon-max-width-49 ${styles.courseIcon}`}
                    src="/Duration.svg"
                    alt="Duration"
                  />
                  <div>
                    <p className={styles.detailTitle}>Duration of the course</p>
                    <p className={styles.detailDesc}>Six Years</p>
                  </div>
                </li>
                <li className={styles.courseDetailListItem}>
                  <img
                    className={`d-block w-100 course-item-icon-max-width-49 ${styles.courseIcon}`}
                    src="/Subjects.svg"
                    alt="Subjects"
                  />
                  <div>
                    <p className={styles.detailTitle}>Subjects</p>
                    <p className={styles.detailDesc}>
                      Vinaya, Suttanat, Abhidhamma, Pāḷi, Samatha, Vipassanā,
                      History of the Sāsana, English and few more
                    </p>
                  </div>
                </li>
                <li className={styles.courseDetailListItem}>
                  <img
                    className={`d-block w-100 course-item-icon-max-width-49 ${styles.courseIcon}`}
                    src="/Practice.svg"
                    alt="Practice"
                  />
                  <div>
                    <p className={styles.detailTitle}>Practice</p>
                    <p className={styles.detailDesc}>
                      Students undergo daily meditation practices throughout the
                      six-year course (in addition to theoretically studying
                      samatha and vipassanā subjects), and observation of
                      dhutaṅga practices during an entire semester
                    </p>
                  </div>
                </li>
                <li className={styles.courseDetailListItem}>
                  <img
                    className={`d-block w-100 course-item-icon-max-width-49 ${styles.courseIcon}`}
                    src="/Skills.svg"
                    alt="Skills"
                  />
                  <div>
                    <p className={styles.detailTitle}>Skills</p>
                    <p className={styles.detailDesc}>
                      Abilities to execute formal disciplinary acts
                      (vinayakammas), skillfulness in crafts such as robe-making
                      and bowl-colouring and capability in preaching Dhamma
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </Card>

          <Card
            className={styles.cardBody}
            // key={index}
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: '#025BC1',
              border: 'none',
            }}
          >
            <div className={styles.courseHeader}>
              <span className={styles.courseName} style={{ color: '#FFFFFF' }}>
                Parisupaṭṭhāka Course{' '}
                <span className={styles.smallText} style={{ color: '#FFFFFF' }}>
                  (PuC)
                </span>
              </span>
              <img
                className="d-block w-100 course-icon-max-width-99"
                src="/courseIcon-2.svg"
                alt="Nissayamuttaka Course"
              />
            </div>
            <div
              className={styles.courseDescription}
              style={{ color: '#FFFFFF' }}
            >
              Parisupaṭṭhāka course is a series of theoretical and practical
              lessons aimed at facilitating the monk to become a qualified
              mentor with adequate knowledge and spiritual qualities mentioned
              in the Vinaya Piṭaka as required to become a teacher (preceptor).
            </div>
            <div className={styles.courseDetailListContainer}>
              <ul className={styles.courseDetailList}>
                <li className={styles.courseDetailListItem}>
                  <img
                    className={`d-block w-100 course-item-icon-max-width-49 ${styles.courseIcon}`}
                    src="/Duration-white.svg"
                    alt="Duration"
                  />
                  <div>
                    <p
                      className={styles.detailTitle}
                      style={{ color: '#FFFFFF' }}
                    >
                      Duration of the course
                    </p>
                    <p
                      className={styles.detailDesc}
                      style={{ color: '#FFFFFF' }}
                    >
                      Two Years
                    </p>
                  </div>
                </li>
                <li className={styles.courseDetailListItem}>
                  <img
                    className={`d-block w-100 course-item-icon-max-width-49 ${styles.courseIcon}`}
                    src="/Subjects-white.svg"
                    alt="Subjects"
                  />
                  <div>
                    <p
                      className={styles.detailTitle}
                      style={{ color: '#FFFFFF' }}
                    >
                      Subjects
                    </p>
                    <p
                      className={styles.detailDesc}
                      style={{ color: '#FFFFFF' }}
                    >
                      Extensive studies on Pārājikāpāḷi, Pācittiyapāḷi,
                      Vinayakammas and Khandhakavatta in Vinaya, comprehensive
                      studies on Mahāvagga of Dīgha Nikāya, Mūlapaṇṇāsaka of
                      Majjhima Nikāya, Mahāvagga of Saṃyutta Nikāya, first half
                      of the Aṅguttara Nikāya, Jātakapāḷi together with its
                      commentary and Dhammapadapāḷi together with its commentary
                      in Suttanta and extensive lessons in meditation especially
                      on giving meditative instructions
                    </p>
                  </div>
                </li>
                <li className={styles.courseDetailListItem}>
                  <img
                    className={`d-block w-100 course-item-icon-max-width-49 ${styles.courseIcon}`}
                    src="/Practice-white.svg"
                    alt="Practice"
                  />
                  <div>
                    <p
                      className={styles.detailTitle}
                      style={{ color: '#FFFFFF' }}
                    >
                      Practice
                    </p>
                    <p
                      className={styles.detailDesc}
                      style={{ color: '#FFFFFF' }}
                    >
                      Regular meditation during the course
                    </p>
                  </div>
                </li>
                <li className={styles.courseDetailListItem}>
                  <img
                    className={`d-block w-100 course-item-icon-max-width-49 ${styles.courseIcon}`}
                    src="/Skills-white.svg"
                    alt="Skills"
                  />
                  <div>
                    <p
                      className={styles.detailTitle}
                      style={{ color: '#FFFFFF' }}
                    >
                      Skills
                    </p>
                    <p
                      className={styles.detailDesc}
                      style={{ color: '#FFFFFF' }}
                    >
                      Regular meditation during the course
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </Card>

          <Card
            className={styles.cardBody}
            // key={index}
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: '#FFE5A8',
              border: 'none',
            }}
          >
            <div className={styles.courseHeader}>
              <span className={styles.courseName}>
                Bahussuta Course{' '}
                <span className={styles.smallText}>(BstC)</span>
              </span>
              <img
                className="d-block w-100 course-icon-max-width-99"
                src="/courseIcon-3.svg"
                alt="Nissayamuttaka Course"
              />
            </div>
            <div className={styles.courseDescription}>
              Bahussuta courses are the advanced theoretical training courses
              that focus upon extensive and comprehensive studies on scriptures
              especially following ancient methods of interpretation preserved
              in Myanmar. There are few such courses based on the subjects
              studied.
            </div>
            <div className={styles.courseDetailListContainer}>
              <ul className={styles.courseDetailList}>
                <li className={styles.courseDetailListItem}>
                  <img
                    className={`d-block w-100 course-item-icon-max-width-49 ${styles.courseIcon}`}
                    src="/Duration.svg"
                    alt="Duration"
                  />
                  <div>
                    <p className={styles.detailTitle}>Duration of the course</p>
                    <p className={styles.detailDesc}>Depends on the subject</p>
                  </div>
                </li>
                <li className={styles.courseDetailListItem}>
                  <img
                    className={`d-block w-100 course-item-icon-max-width-49 ${styles.courseIcon}`}
                    src="/Courses-list.svg"
                    alt="Courses"
                  />
                  <div className={styles.courseListContainer}>
                    <p className={styles.detailTitle}>Courses</p>
                    <ul>
                      <li>The whole Vinaya Piṭaka and related literature</li>
                      <li>The Dīgha Nikāya and related literature</li>
                      <li>The Majjhima Nikāya related literature</li>
                      <li>The Aṅguttara Nikāya related literature</li>
                      <li> The Saṃyutta Nikāya related literature</li>
                      <li>The whole Abhidhamma Piṭaka related literature</li>
                      <li>
                        Visuddhimagga, Paisambhidāmagga and literature related
                        to meditation
                      </li>
                      <li>
                        Advanced Pāḷi Studies; Kaccāyana, Moggallāna, Saddanīti
                        traditions and modern philological studies
                      </li>
                    </ul>
                  </div>
                </li>
                {/* <li className={styles.courseDetailListItem}>
                  <img
                    className={`d-block w-100 course-item-icon-max-width-49 ${styles.courseIcon}`}
                    src="/Practice.svg"
                    alt="Tasks"
                  />
                  <div>
                    <p className={styles.detailTitle}>Tasks</p>
                    <p className={styles.detailDesc}>
                      Vinaya, Suttanat, Abhidhamma, Pāḷi, Samatha, Vipassanā,
                      History of the Sāsana, English and few more
                    </p>
                  </div>
                </li> */}
              </ul>
            </div>
          </Card>
        </Carousel>
      </Container>
    </div>
  );
}

export default EducationComponent;
