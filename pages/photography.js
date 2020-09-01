import { Container, Row, Col, Carousel, Button } from 'react-bootstrap';
import Header from '../components/header.js';
import Footer from '../components/footer.js';

import Link from 'next/link';

export default function Photography() {
    return (
        <div>
            <Header />
            <div className='photography-background'></div>
            <div className='photography-content-a'>
                <Container>
                    <hr class='content-spacer' />
                    <h2>Photography</h2>
                    <Row>
                        <Col lg={8}>
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className='d-block w-100'
                                        src='/camera/abbey_bridge.jpg'
                                        alt='First slide'
                                    />
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className='d-block w-100'
                                        src='/camera/megan.jpg'
                                        alt='Ninth slide'
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className='d-block w-100'
                                        src='/camera/cameron_uke.jpg'
                                        alt='Third slide'
                                    />
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className='d-block w-100'
                                        src='/camera/hydroflask.jpg'
                                        alt='Third slide'
                                    />
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className='d-block w-100'
                                        src='/camera/mimi_grad.jpg'
                                        alt='Fourth slide'
                                    />
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className='d-block w-100'
                                        src='/camera/salmon.jpg'
                                        alt='Fifth slide'
                                    />
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className='d-block w-100'
                                        src='/camera/pizza.jpg'
                                        alt='Sixth slide'
                                    />
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className='d-block w-100'
                                        src='/camera/lobster.jpg'
                                        alt='Seventh slide'
                                    />
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className='d-block w-100'
                                        src='/camera/zacharymendoza.jpg'
                                        alt='Eighth slide'
                                    />
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className='d-block w-100'
                                        src='/camera/zachtree.jpg'
                                        alt='Ninth slide'
                                    />
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className='d-block w-100'
                                        src='/camera/david.jpg'
                                        alt='Tenth slide'
                                    />
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className='d-block w-100'
                                        src='/camera/groot.jpg'
                                        alt='11th slide'
                                    />
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className='d-block w-100'
                                        src='/camera/santamonica.jpg'
                                        alt='12th slide'
                                    />
                                </Carousel.Item>
                            </Carousel>
                            <div
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
                            </div>
                        </Col>
                        <Col lg={4}>
                            <h3>My Equipment</h3>
                            <div style={{ textAlign: 'center' }}>
                                <img
                                    src='/canon6D.png'
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
