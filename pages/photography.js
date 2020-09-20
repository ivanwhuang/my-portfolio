import { Container, Row, Col, Carousel, Button } from 'react-bootstrap';
import Header from '../components/header.js';
import Footer from '../components/footer.js';

import Link from 'next/link';

export default function Photography() {
  return (
    <div>
      <Header />
      <div className='photography-background'></div>
      <div className='photography-content'>
        <Container>
          <hr class='content-spacer' />
          <h1>Photography</h1>
          <Row style={{ marginTop: '2rem' }}>
            <Col lg={8}>
              <Carousel>
                <Carousel.Item>
                  <img
                    className='d-block w-100'
                    src='/images/camera/abbey_bridge.jpg'
                    alt='slide-1'
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className='d-block w-100'
                    src='/images/camera/megan.jpg'
                    alt='slide-2'
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className='d-block w-100'
                    src='/images/camera/cameron_uke.jpg'
                    alt='slide-3'
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className='d-block w-100'
                    src='/images/camera/mimi_grad.jpg'
                    alt='slide-4'
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className='d-block w-100'
                    src='/images/camera/zachtree.jpg'
                    alt='slide-5'
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className='d-block w-100'
                    src='/images/camera/david.jpg'
                    alt='slide-6'
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className='d-block w-100'
                    src='/images/camera/pizza.jpg'
                    alt='slide-7'
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className='d-block w-100'
                    src='/images/camera/lobster.jpg'
                    alt='slide-8'
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className='d-block w-100'
                    src='/images/camera/santamonica.jpg'
                    alt='slide-9'
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className='d-block w-100'
                    src='/images/camera/groot.jpg'
                    alt='slide-10'
                  />
                </Carousel.Item>
              </Carousel>
              {/* <div
                style={{
                  'text-align': 'center',
                  'margin-top': '1rem',
                }}
              >
                <a
                  href='https://photos.app.goo.gl/HJifsuwgem9N3naAA'
                  target='_blank'
                >
                  <Button
                    className='photography-button'
                    size='lg'
                    variant='info'
                  >
                    See More!
                  </Button>
                </a>
              </div> */}
            </Col>
            <Col lg={4}>
              <h3>My Equipment</h3>
              <div style={{ textAlign: 'center' }}>
                <img
                  src='/images/canon6D.png'
                  style={{ width: '15rem', margin: '10px 0' }}
                  alt='canon6d'
                />
              </div>
              <div>
                <p className='equipment-text'>
                  <strong>Camera: </strong>
                  <ul>
                    <li>Canon 6D</li>
                    <li>GoPro HERO4 </li>
                  </ul>
                </p>

                <p className='equipment-text'>
                  <strong>Lenses: </strong>
                  <ul>
                    <li>Canon EF 50mm f/1.8 STM Lens</li>
                    <li>Canon EF 24-70mm f/4.0L IS USM</li>
                  </ul>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
}
