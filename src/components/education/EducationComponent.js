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
      breakpoint: { max: 1024, min: 576 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 575, min: 0 },
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
    <div className={styles.mainDiv}>
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
        </Carousel>
      </Container>
    </div>
  );
}

export default EducationComponent;
