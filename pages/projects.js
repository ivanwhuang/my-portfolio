import { Container, Card, Button } from 'react-bootstrap';
import Header from '../components/header.js';
import Footer from '../components/footer.js';

export default function Projects() {
    return (
        <div>
            <Header />
            <div className='projects-background'></div>
            <div className='projects-intro'>
                <Container>
                    <hr class='content-spacer' />
                    <h2>Personal Projects</h2>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                        }}
                    >
                        <Card
                            border='dark'
                            style={{ width: '24rem', margin: '1rem' }}
                        >
                            <Card.Img
                                style={{ height: '15rem' }}
                                variant='top'
                                src='/smartDoor.png'
                            />
                            <Card.Body>
                                <Card.Title>Smart Door</Card.Title>
                                <Card.Text>
                                    With the emergence of Edge Computing in IoT,
                                    SmartDoor is a proof of concept project of
                                    an automated attendance tracker that also
                                    serves as a more personalized security
                                    system. This project uses Raspberry Pis to
                                    simulate use case.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <strong>Languages and Frameworks Used:</strong>
                                <p>Python</p>
                                <Button
                                    className='project-btn'
                                    variant='info'
                                    href='https://github.com/woonicholas/SmartDoor'
                                    target='_blank'
                                >
                                    Github Repo
                                </Button>
                                <Button
                                    className='project-btn'
                                    variant='secondary'
                                    href='https://www.youtube.com/watch?v=QMduXOS_j_Y'
                                    target='_blank'
                                >
                                    Youtube Demo
                                </Button>
                            </Card.Footer>
                        </Card>
                        <Card
                            border='dark'
                            style={{ width: '24rem', margin: '1rem' }}
                        >
                            <Card.Img
                                style={{ height: '15rem' }}
                                variant='top'
                                src='/ethicScore.png'
                            />
                            <Card.Body>
                                <Card.Title>
                                    Ethic Score (Sponsored Project)
                                </Card.Title>
                                <Card.Text>
                                    An embedded Shopify application that
                                    features a composite scoring system for
                                    products and brands found on Ethic
                                    Marketplace that allows users to easily see
                                    how products stack up in regard to the
                                    things they care about.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <strong>Languages and Frameworks Used:</strong>
                                <p>
                                    Javascript, React, Next.js, Liquid, Node.js,
                                    Express
                                </p>
                                <Button
                                    className='project-btn'
                                    variant='secondary'
                                    href='https://www.youtube.com/watch?v=_k-yVTR4frA&feature=youtu.be'
                                    target='_blank'
                                >
                                    Youtube Demo
                                </Button>
                            </Card.Footer>
                        </Card>
                        <Card
                            border='dark'
                            style={{ width: '24rem', margin: '1rem' }}
                        >
                            <Card.Img
                                style={{ height: '15rem' }}
                                variant='top'
                                src='/amazonAlexa.jpg'
                            />
                            <Card.Body>
                                <Card.Title>NextMuniAlexaSkill</Card.Title>
                                <Card.Text>
                                    An Amazon Alexa skill that uses NextBus API
                                    to return a voice output of prediction times
                                    for any given San Francisco Muni bus, stop,
                                    and direction.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <strong>Languages and Frameworks Used:</strong>
                                <p>Javascript</p>
                                <Button
                                    className='project-btn'
                                    variant='info'
                                    href='https://github.com/younghuangbao/NextMuniAlexaSkill'
                                    target='_blank'
                                >
                                    Github Repo
                                </Button>
                            </Card.Footer>
                        </Card>
                        <Card
                            border='dark'
                            style={{ width: '24rem', margin: '1rem' }}
                        >
                            <Card.Img
                                style={{ height: '15rem' }}
                                variant='top'
                                src='/prayerKeeper.png'
                            />
                            <Card.Body>
                                <Card.Title>PrayerKeeper</Card.Title>
                                <Card.Text>
                                    A full-stack MERN web app with token based
                                    authentication that serves as an easy
                                    platform for users to keep up with the
                                    prayer requests of others and to easily
                                    track them. Anything that you request prayer
                                    for will be publicly displayed on your
                                    profile, which can be directly added to the
                                    Keepers of other users!
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <strong>Languages and Frameworks Used:</strong>
                                <p>Mongoose, Express, Node.js, React, Redux</p>
                                <Button
                                    className='project-btn'
                                    variant='info'
                                    href='https://github.com/younghuangbao/prayerKeeper'
                                    target='_blank'
                                >
                                    Github Repo
                                </Button>
                                <Button
                                    className='project-btn'
                                    variant='secondary'
                                >
                                    Open App
                                </Button>
                            </Card.Footer>
                        </Card>

                        <Card
                            border='dark'
                            style={{ width: '24rem', margin: '1rem' }}
                        >
                            <Card.Img
                                style={{ height: '15rem' }}
                                variant='top'
                                src='/galacticMech.png'
                            />
                            <Card.Body>
                                <Card.Title>Galactic Mechanic</Card.Title>
                                <Card.Text>
                                    <p>
                                        "A mechanic close to retirement ... Will
                                        he go above and beyond his duty to help
                                        people reach their destinations?"
                                    </p>
                                    <p>
                                        A dialogue-driven game where the story
                                        is decided by kindness-based choices
                                        while featuring spaceflight and puzzle
                                        mini games
                                    </p>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <strong>Languages and Frameworks Used:</strong>
                                <p>C#</p>
                                <Button
                                    className='project-btn'
                                    variant='info'
                                    href='https://github.com/susantham/GGJ2018-repairshipgame'
                                    target='_blank'
                                >
                                    Github Repo
                                </Button>
                                <Button
                                    className='project-btn'
                                    variant='secondary'
                                    href='https://globalgamejam.org/2018/games/galactic-mechanic'
                                    target='_blank'
                                >
                                    Global Game Jam
                                </Button>
                            </Card.Footer>
                        </Card>

                        <Card
                            border='dark'
                            style={{ width: '24rem', margin: '1rem' }}
                        >
                            <Card.Img
                                style={{ height: '15rem' }}
                                variant='top'
                                src='/columns.png'
                            />
                            <Card.Body>
                                <Card.Title>Columns</Card.Title>
                                <Card.Text>
                                    Created my own version of Columns (an old
                                    puzzle-based game on the Sega Genesis) that
                                    is played similarly to Tetris, but with
                                    3-piece “columns” and vertical, horizontal,
                                    and diagonal matching.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <strong>Languages and Frameworks Used:</strong>
                                <p>Python</p>
                                <Button
                                    className='project-btn'
                                    variant='info'
                                    href='https://github.com/younghuangbao/columns'
                                    target='_blank'
                                >
                                    Github Repo
                                </Button>
                            </Card.Footer>
                        </Card>
                    </div>
                </Container>
            </div>
            <Footer />
        </div>
    );
}
