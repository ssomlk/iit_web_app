import { useRouter } from 'next/router';
import Head from 'next/head';
import newsAndEvents from '../../data/newsAndEventsData.json';
import MainLayoutSection from '../../components/maincommonlayout/MainCommonLayoutSection';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './newsAndEventsPost.module.css';

export default function newsandevents(props) {
  const router = useRouter();
  var id = router.query.id;
  var item = newsAndEvents[id];
  console.log(item);
  return (
    <div>
      <Head>
        <title>News and Events - {item.title}</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="international institute of theravada"
        />
      </Head>

      <div className="navbarCarouselWrapper institute">
        <Header />
      </div>
      <MainLayoutSection
          title="News and Events"
          description="Be informed of our wholesome activities. Join, Rejoice, and Accumulate Great Merits."
          photo="/Group 1071.png"
          backgroundImg="url(/MaskGroup3.svg)"
        />
      {/* <NavigationCommonLayout navigationList={instituteList} /> */}

      <Container style={{ marginBottom: '40px' }}>
        <div style={{ marginBottom: '40px' }}>
          <div className={styles.newsAndEventsPostTitle}>{item.title}</div>
          <div className={styles.newsAndEventsPostSubTitle}>
            {item.date} | &nbsp;
            {item.type.indexOf("News") > -1 ? (
              <span className={styles.typeNews}> {item.type}</span>
            ) : (
              <span className={styles.typeEvent}>{item.type}</span>
            )}
          </div>
        </div>

        <article>
          <div className={styles.newsAndEventsPostRow}>
            <div className={styles.newsAndEventsPostRowImg}>
              <img width="100%" src="/blogImage.jpg" alt="Blog" />
            </div>

            <div className={styles.newsAndEventsPostRowText}>
              <p className={styles.newsAndEventsPostPara}>{item.description}</p>
            </div>
          </div>
        </article>
      </Container>
      <Footer />
    </div>
  );
}
