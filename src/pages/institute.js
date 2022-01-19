import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import NavigationCommonLayout from '../components/navigationcommonlayout/NavigationCommonLayout';
import { Container, Row, Col } from 'react-bootstrap';
import { instituteList } from '../data/commonLayoutNavigationData';
import MainLayoutSection from '../components/maincommonlayout/MainCommonLayoutSection';
import AcademicProfile from '../components/academicprofile/AcademicProfile';

export default function Institute() {
  const { t, lang } = useTranslation();
  const router = useRouter();

  return (
    <div className="skeleton">
      <Head>
        <title>Institute</title>
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
        title="Institute"
        description="IIT as an institution has both monastic features and, at the same time, features of a well-organized academic institute autonomously governed by its own peculiar constitution."
        photo="/Institute.png"
        backgroundImg="url(/Ellipse-4.svg)"
      />
      <NavigationCommonLayout navigationList={instituteList} />

      <Container>
        <div className="inst-academic-header" id="academy">Academy</div>
        <div className="inst-academic-academy-text">
          In our Academy, we impart Theravada teachings in their purest form in
          Buddhist monks and train them in authentic Theravada meditation
          techniques. Foremost objective of our Academy is to capacitate our
          students who have profound apprehension on fundamentals of the
          doctrine and meditation practice as preserved by the tradition of
          Theravada.
        </div>
        <div className="inst-academic-header" id="academic-staff">Academic Staff</div>
        <Row key="0" className="inst-academic-row">
          <Col key="1">
            <AcademicProfile
              body="BA & MA in Buddha Dhamma at the International Theravāda Buddhist
              Missionary University, Yangon. BA (Hon) in Sanskrit at the
              University of Peradeniya, Vidyanidhi Panditha Vidyodaya Parivena,
              extensive experiences in propagating Buddhist teachings in both
              Australia and Hawaii."
              name="Ven Werapitiye Dewānanda Thera"
              profileImage="/profilepic/DewanandaThero.webp"
              title="President of the IIT"
            />
          </Col>

          <Col key="2">
            <AcademicProfile
              body="BA & MA in Buddha Dhamma at the International Theravāda Buddhist
              Missionary University, Yangon. Also undergone monastic training
              under the Thai Forest Tradition."
              name="Ven Watagoda Maggavihari Thera"
              profileImage="/profilepic/MaggavihariThero.webp"
              title="Vice-President of the IIT"
            />
          </Col>
        </Row>

        <Row key="3" className="inst-academic-row">
          <Col key="4">
            <AcademicProfile
              body="An experienced Abhidhamma teacher currently conducting basic and
              advanced Abhidhamma courses for lay devotees in Colombo for over
              five years."
              name="Ven Matugama Dhammanisanti Thera"
              profileImage="/profilepic/DhammanisanthiThero.webp"
              title=""
            />
          </Col>

          <Col key="5">
            <AcademicProfile
              body=" BA in Buddha Dhamma at the International Theravāda Buddhist
              Missionary University, Yangon. The first Sri Lankan to pass all
              the three stages in both Sāsnālaṅkāra (Sāmaṇejo) and Vinayavidu
              Traditional Buddhist Examinations in Myanmar."
              name="Ven Ududigana Siddhatthālaṅkāra Thera"
              profileImage="/profilepic/SiddaththaThero.webp"
              title="Secretary of the IIT and Head of the Vinaya Department"
            />
          </Col>

          <Col key="6">
            {/* <AcademicProfile
              body="Diploma in Buddha Dhamma at the International Theravāda Buddhist
              Missionary University, Yangon. He has undergone monastic training
              under the Thai Forest Tradition."
              name="Ven Kiribathgoda Tilokānanda Thera"
              profileImage=""
              title=""
            /> */}
            <AcademicProfile
              body="Diploma in Buddha Dhamma, International Theravāda Buddhist
              Missionary University, Yangon."
              name="Ven Kuliyāpitiye Saṅgharatana Thera"
              profileImage="/profilepic/SangarathanaThero.webp"
              title=""
            />
          </Col>
        </Row>

        <Row key="7" className="inst-academic-row">
          {/* <Col key="8">
            <AcademicProfile
              body="Passed the Vinayācariya and Abhidhammācariya examinations held
              under the Srī Kaḷyāṇī Yogāśrama Saṃsthā, Rāmañña Mahānikāya, Sri
              Lanka. He is currently a Vinaya teacher at the Nā-Uyana Forest
              Monastery, Sri Lanka."
              name="Ven Labunoruwe Dhammavihari Thera"
              profileImage=""
              title=""
            />
          </Col> */}

          <Col key="8">
            <AcademicProfile
              body="Diploma in Buddha Dhamma at the International Theravāda Buddhist
              Missionary University, Yangon. He has also earned knowledge and
              experience under the monastic education system in Myanmar for four
              years and has gained training under the Thai Forest Tradition as
              well. He is a competent Abhidhamma- and Pāḷi-teacher capable
              teaching in both Sinhalese and English."
              name="Ven Walawe Sumedhaloka Thera"
              profileImage="/profilepic/SumedhalokaThero.webp"
              title="Head of the Language Department"
            />
          </Col>

          <Col key="9">
            <AcademicProfile
              body="He has studied the Abhidhamma with specialization in the
              Paṭṭhānappakaraṇa, the seventh and most profound book in the
              basket of Abhidhamma and had taught Abhidhamma in Burmese language
              in Myanmar and also in Sinhala at several Sri Lankan monastic
              education institutes. He is arguably the best academic in the
              field of Paṭṭhāna studies currently in Sri Lanka."
              name="Ven Deniyaye Upasama Thera"
              profileImage="/profilepic/UpasamaThero.webp"
              title="Head of the Abhidhamma Department"
            />
          </Col>

          <Col key="10">
            <AcademicProfile
              body="Passed the Vinayācariya and Abhidhammācariya examinations held
              under the Srī Kaḷyāṇī Yogāśrama Saṃsthā, Rāmañña Mahānikāya, Sri
              Lanka. He is currently a Vinaya teacher at the Nā-Uyana Forest
              Monastery, Sri Lanka."
              name="Ven Labunoruwe Dhammavihari Thera"
              profileImage="/profilepic/DhammavihariThero.webp"
              title=""
            />
          </Col>
        </Row>

        <Row key="11" className="inst-academic-row">
          {/* <Col key="12">
            <AcademicProfile
              body="Diploma in Buddha Dhamma, International Theravāda Buddhist
              Missionary University, Yangon."
              name="Ven Kuliyāpitiye Saṅgharatana Thera"
              profileImage="/SangarathanaThero.webp"
              title=""
            />
          </Col> */}

          <Col key="12">
            <AcademicProfile
              body="One of the most academically celebrated Sri Lankan Buddhist monks
              studied in Myanmar. Successfully completed the first stage of the
              well-celebrated Sakyasīha Dhammācariaya Examination (known as the
              Mandalay Abhivaṃsa Examination) becoming the second Sri Lankan to
              make this achievement. Only about six hundred monks have passed
              the first level of the Abhivaṃsa Examination, in Myanmar,
              throughout its history of more than a century. He has also passed
              one of the three subjects of the second stage of the Sakyasīha
              Dhammācariya (Abhivaṃsa) Examination. Venerable Vijitānanda has
              also successfully passed the Sāsanadhaja Dhammācariya Examination
              in Myanmar. He is currently a Dhamma teacher at the
              well-celebrated Yuwa Mā Pariyatti Center, Ein Sein, Yangon."
              name="Ven Palmadulle Vijitānandābhivaṃsa Thera"
              profileImage="/profilepic/VijithanandaThero.webp"
              title="Vice Secretary of the IIT and Head of the Pāḷi, Sanskrit and
              Prakrit Department"
            />
          </Col>
        </Row>

        <div className="inst-academic-header" id="monastery">Monastery</div>
        <div className="inst-academic-academy-text">
          IIT, being a monk-training center, has a monastery. In it, students
          can lead their lives well according to the disciplinary code advocated
          under the Theravada Vinaya. Monks in IIT fully abstain from using or
          handling money as admonished by the Buddha and strive to achieve their
          aspired sublime goals as per doctrine they have studied in the
          Academy.
        </div>
      </Container>

      <Container className="inst-admin-struct-container" id="administration">
        <div className="inst-admin-struct-header">
          Administrational Structure
        </div>

        <div className="inst-admin-struct-main-text">
          IIT is an independent academic institution that would retain autonomy
          with regard to, all aspects of decision-making.
        </div>

        <div className="inst-admin-struct-sub-text">
        IIT is governed by its General Assembly of which powers are exercised by three independent bodies, i.e., Executive Board, Senet and Vinaya Council.
        </div>

        <div className="inst-admin-struct-general">
        General Assembly
        </div>

        <div className="inst-admin-struct-general-subtext">
        Executive Board consisting of senior monks who are responsible in governing the IIT. It is divided into two sub-councils, i.e., Study Council and Monastic Council
        </div>

        {/* 
        <Row className="inst-admin-struct-row">
          <Col key="15">
        
            <div className="inst-admin-struct-sub-text">
              IIT is an independent academic institution that would retain
              autonomy with regard to, all aspects of decision-making.
            </div>
          </Col>

          <Col className="inst-admin-struct-2nd-col">
            <Row key="17" className="inst-admin-struct-row">
              <Col>
                <div className="inst-admin-struct-col-header">
                  General Assembly
                </div>
                <div className="inst-admin-struct-col-body">
                  Executive Board consisting of senior monks who are responsible
                  in governing the IIT. It is divided into two sub-councils,
                  i.e., Study Council and Monastic Council
                </div>
              </Col>

              <Col>
                <div className="inst-admin-struct-col-header">
                  Study Council
                </div>
                <div className="inst-admin-struct-col-body">
                  Study Council is consisting of erudite monks who manage all
                  academic and spriritual activities of the IIT
                </div>
              </Col>
            </Row>

            <Row key="19" className="inst-admin-struct-row">
              <Col>
                <div className="inst-admin-struct-col-header">Senat</div>
                <div className="inst-admin-struct-col-body">
                  Senet is the body consisting of members of the IIT who are
                  knowlagable in the Theravada scriptures and who observe the
                  decisions taken by the Executive Board and discuss on Dhamma
                  Vinaya issues.
                </div>
              </Col>

              <Col key="20">
                <div className="inst-admin-struct-col-header">
                  Executive Board
                </div>
                <div className="inst-admin-struct-col-body">
                  Executive Board consisting of senior monks who are responsible
                  in governing the IIT. It is divided into two sub-councils,
                  i.e., Study Council and Monastic Council
                </div>
              </Col>
            </Row>

            <Row key="22" className="inst-admin-struct-row">
              <Col>
                <div className="inst-admin-struct-col-header">
                  Monsatic Council
                </div>
                <div className="inst-admin-struct-col-body">
                  Monastic Council is cosisiting of skilled monks who supervise
                  the construction of the IIT and the well-being of the
                  residents of the IIT
                </div>
              </Col>

              <Col>
                <div className="inst-admin-struct-col-header">
                  Vinay Council
                </div>
                <div className="inst-admin-struct-col-body">
                  Vinaya Council consisting of monks well versed in the monks
                  disciplinary code, and decide on all disciplinary matters of
                  the IIT
                </div>
              </Col>
            </Row>
          </Col>
        </Row> */}
      </Container>

      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  // const products = await fetch('https://fakestoreapi.com/products')
  // .then(res=>res.json());

  return {
    props: {
      //products
    },
  };
}
