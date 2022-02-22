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
            <h1>Full-Stack Software Engineer</h1>

            <div className='social-links'>
              <a
                href='https://www.linkedin.com/in/ivanwhuang'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fa fa-linkedin-square' aria-hidden='true'></i>
              </a>
              <a
                href='https://github.com/ivanwhuang'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fa fa-github-square' aria-hidden='true'></i>
              </a>
            </div>
            <p>
              {' '}
              Python &nbsp; Go &nbsp; JavaScript &nbsp; PHP &nbsp; Java &nbsp; C++ &nbsp; React
              &nbsp; NodeJS &nbsp; HTML/CSS &nbsp; SQL
              {' '}
            </p>
          </div>
        </div>
      </div>
      <div className='landing-intro'>
        <Container style={{ width: '68%' }}>
          <Row>
            <Col
              lg={8}
              style={{
                textAlign: 'left',
              }}
            >
              <hr class='content-spacer' />
              <h2>Hi! My name is Ivan.</h2>
                <p style={{ paddingTop: '0.8rem'}}>
                  I am currently a software engineer on the Marketplace Trust & Safety team at
                  {' '}<a href='https://www.thumbtack.com' target='_blank' rel='noopener'>Thumbtack</a>{' '}
                  where I am primarily developing in Typescript, PHP, and Go. I strive to be a humble engineer who is
                  always willing to both learn and mentor.
                </p>
                <p>
                  <strong>Education:</strong> Computer Science @ University of California, Irvine
                </p>
                <p>
                  <strong>Hobbies:</strong> Photography, Film, Rock climbing,
                      Walking, Board Games, Video Games
                </p>
                <p>
                  <strong>Contact: </strong>I can be reached at{' '}
                  <strong>(415) 816-6519 </strong>
                  or by email at <strong>ivanhuang77@gmail.com</strong>.
                </p>
            </Col>
            <Col
              lg={4}
              style={{
                justifyContent: 'center',
                alignSelf: 'center'
              }}
            >
                <img
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
            <Col lg={5} style={{textAlign: 'center', alignSelf: 'center'}}>
              <img src='/images/coding.png' alt='coding-img' />
            </Col>
            <Col lg={7}>
              <hr class='content-spacer' />
              <h2>Coding Experience</h2>
              <p style={{ paddingTop: '0.8rem'}}>
                  My coursework in university has
                  provided me a substantial set of programming experiences and
                  helped me build a solid foundation of programming principles,
                  mainly in Python and C++. Along the way, I have developed a
                  strong object-oriented background and an interest for the
                  full-stack web development field.
              </p>
              <Link href='/projects'>
                <Button className='skill-button' size='lg' variant='info'>
                  View Projects
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='landing-skill-b'>
        <Container style={{ width: '75%' }}>
          <Row>
            <Col lg={5} style={{textAlign: 'center', alignSelf: 'center'}}>
              <img src='/images/photo-camera.png' alt='profile-pic' />
            </Col>
            <Col lg={7}>
              <hr class='content-spacer' />
              <h2>Photography</h2>
              <p style={{ paddingTop: '0.8rem'}}>
                  Growing up, I loved creating digital content for my friends
                  and family and dreamt of becoming a professional filmmaker.
                  As the years passed, I surprisingly ended up spending more time
                  in the photography scene. I hope to one day start a side hustle as
                  a freelance photographer while making short films for fun.
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
