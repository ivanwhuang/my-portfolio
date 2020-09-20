import Header from '../components/header.js';
import Footer from '../components/footer.js';
import { Container, Row, Col, Button } from 'react-bootstrap';

import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Header />
      <div className='landing-header'>
        <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <img
            src='/images/linkedIn.png'
            alt='profile-img'
            className='landing-profile-img'
          />
          <div className='banner-text'>
            <h1>Aspiring Software Engineer</h1>

            <div className='social-links'>
              <a
                href='https://www.linkedin.com/in/ivanwhuang'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fa fa-linkedin-square' aria-hidden='true'></i>
              </a>
              <a
                href='https://github.com/younghuangbao'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fa fa-github-square' aria-hidden='true'></i>
              </a>

              <a
                href='https://www.facebook.com/ivan.huangbao'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fa fa-facebook-square' aria-hidden='true'></i>
              </a>
            </div>
            <p>
              {' '}
              Python &nbsp; JavaScript &nbsp; Java &nbsp; C++ &nbsp; React
              &nbsp; NodeJS &nbsp; HTML/CSS{' '}
            </p>
          </div>
        </div>
      </div>
      <div className='landing-intro'>
        <Container style={{ width: '75%' }}>
          <Row>
            <Col
              lg={8}
              style={{
                justifyContent: 'center',
                textAlign: 'left',
              }}
            >
              <hr class='content-spacer' />
              <h2>Hi! My name is Ivan.</h2>
              <p
                style={{
                  textAlign: 'left',
                }}
              >
                I am a senior at <b>University of California, Irvine</b> pursing
                a degree in computer science. I am seeking out new grad and
                entry level positions for after I graduate in June 2021. Contact
                me if interested!
              </p>
              <p>
                <strong>Hobbies:</strong> Photography, Eating, Walking/Running,
                Board Games, Puzzles
              </p>
              <p>
                <strong>Contact: </strong>I can be reached at{' '}
                <strong>(415) 816-6519 </strong>
                or by email at <strong>huangiw@uci.edu</strong>.
              </p>
            </Col>
            <Col lg={4}>
              <img
                style={{
                  margin: 'auto auto',
                  display: 'block',
                }}
                src='/images/ivan_camera.jpg'
                alt='profileimg'
                className='camera-profile-img'
              />
            </Col>
          </Row>
        </Container>
      </div>

      <div className='landing-skill-a'>
        <Container style={{ width: '75%' }}>
          <Row>
            <Col lg={5} style={{ textAlign: 'center' }}>
              <img src='/images/coding.png' alt='coding-img' />
            </Col>
            <Col lg={7}>
              <hr class='content-spacer' />
              <h2>Coding Experience</h2>
              <p>
                My coursework at the University of California, Irvine has
                provided me a substantial set of programming experiences and
                helped me build a solid foundation of programming principles,
                mainly in Python and C++. Along the way, I have developed a
                strong object-oriented background and an interest in the full
                stack and IoT development fields.{' '}
              </p>
              <Link href='/projects'>
                <Button className='skill-button' size='lg' variant='info'>
                  Check it out!
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='landing-skill-b'>
        <Container style={{ width: '75%' }}>
          <Row>
            <Col lg={5} style={{ textAlign: 'center' }}>
              <img src='/images/photo-camera.png' alt='profile-pic' />
            </Col>
            <Col lg={7}>
              <hr class='content-spacer' />
              <h2>Photography</h2>
              <p>
                {' '}
                Growing up, I loved creating digital content for my friends and
                family and had wanted to be a professional filmmaker one day.
                But with my career aspirations now pointed towards the CS world,
                there's been less time for film and instead, I started pursuing
                photography. One day, I hope to be a freelance photographer in
                my spare time.{' '}
              </p>
              <Link href='/photography'>
                <Button className='skill-button' size='lg' variant='info'>
                  Check it out!
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
}
