import { Container, Card, Button } from 'react-bootstrap';
import Header from '../components/header.js';
import Footer from '../components/footer.js';

export default function Projects() {
  return (
    <div>
      <Header />
      <div className='projects-background'></div>
      <div className='projects-content'>
        <Container>
          <hr class='content-spacer' />
          <h1>Projects</h1>
        </Container>
        <Container fluid>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <Card border='dark' style={{ width: '21rem', margin: '1rem' }}>
              <Card.Img
                style={{ height: '15rem' }}
                variant='top'
                src='/images/spotTheTrack.png'
              />
              <Card.Body>
                <Card.Title>SpotTheTrack</Card.Title>
                <Card.Text style={{ fontSize: '14px' }}>
                  <p>
                    An online round-based multiplayer game where each round,
                    players in the same game room compete with each other to
                    guess the name of the song that is currently playing.
                  </p>
                  <p>
                    Our app uses Spotify's web API to gather preview URLs for
                    each song.
                  </p>
                </Card.Text>
              </Card.Body>
              <Card.Footer style={{ fontSize: '14px' }}>
                <strong>Technologies Used:</strong>
                <p>Express, React, Node.js, Socket.io</p>
                <Button
                  className='project-btn'
                  variant='info'
                  href='https://spot-the-track.vercel.app/'
                  target='_blank'
                >
                  Visit App
                </Button>
                <Button
                  className='project-btn'
                  variant='secondary'
                  href='https://github.com/younghuangbao/SpotTheTrack'
                  target='_blank'
                >
                  Github Repo
                </Button>
              </Card.Footer>
            </Card>
            <Card border='dark' style={{ width: '21rem', margin: '1rem' }}>
              <Card.Img
                style={{ height: '15rem' }}
                variant='top'
                src='/images/prayerKeeper.png'
              />
              <Card.Body style={{ fontSize: '14px' }}>
                <Card.Title>PrayerKeeper</Card.Title>
                <Card.Text>
                  A full-stack MERN web app with token based authentication that
                  serves as an easy platform for users to keep up with the
                  prayer requests of others and to easily track them. Anything
                  that you request prayer for will be publicly displayed on your
                  profile, which can be directly added to the Keepers of other
                  users!
                </Card.Text>
              </Card.Body>
              <Card.Footer style={{ fontSize: '14px' }}>
                <strong>Technologies Used:</strong>
                <p>MongoDB, Express, React, Node.js, Redux</p>
                <Button
                  className='project-btn'
                  variant='info'
                  href='https://prayerkeeper.herokuapp.com/'
                  target='_blank'
                >
                  Visit App
                </Button>
                <Button
                  className='project-btn'
                  variant='secondary'
                  href='https://github.com/younghuangbao/prayerKeeper'
                  target='_blank'
                >
                  Github Repo
                </Button>
              </Card.Footer>
            </Card>
            <Card border='dark' style={{ width: '21rem', margin: '1rem' }}>
              <Card.Img
                style={{ height: '15rem' }}
                variant='top'
                src='/images/ethicScore.jpg'
              />
              <Card.Body>
                <Card.Title>Ethic Score (Sponsored Project)</Card.Title>
                <Card.Text style={{ fontSize: '14px' }}>
                  An embedded Shopify application that features a composite
                  scoring system for products and brands found on Ethic
                  Marketplace that allows users to easily see how products stack
                  up in regard to the things they care about.
                </Card.Text>
              </Card.Body>
              <Card.Footer style={{ fontSize: '14px' }}>
                <strong>Technologies Used:</strong>
                <p>Javascript, React, Next.js, Node.js, Express</p>
                <Button
                  className='project-btn'
                  variant='info'
                  href='https://www.youtube.com/watch?v=_k-yVTR4frA&feature=youtu.be'
                  target='_blank'
                >
                  Youtube Demo
                </Button>
              </Card.Footer>
            </Card>
            <Card border='dark' style={{ width: '21rem', margin: '1rem' }}>
              <Card.Img
                style={{ height: '15rem' }}
                variant='top'
                src='/images/amazonAlexa.jpg'
              />
              <Card.Body>
                <Card.Title>NextMuniAlexaSkill</Card.Title>
                <Card.Text style={{ fontSize: '14px' }}>
                  <p>
                    An Amazon Alexa skill that uses NextBus API to return a
                    voice output of prediction times for any given San Francisco
                    Muni bus, stop, and direction.
                  </p>
                  <p>Feel free to try it on your own Alexa!</p>
                </Card.Text>
              </Card.Body>
              <Card.Footer style={{ fontSize: '14px' }}>
                <strong>Technologies Used:</strong>
                <p>Javascript, Alexa Skills Kit</p>
                <Button
                  className='project-btn'
                  variant='info'
                  href='https://www.amazon.com/Student-NextMuni-Alexa-Skill/dp/B08GC3TVZB/ref=sr_1_1?dchild=1&keywords=next+Muni&qid=1600401807&s=digital-skills&sr=1-1'
                  target='_blank'
                >
                  Skill Page
                </Button>

                <Button
                  className='project-btn'
                  variant='secondary'
                  href='https://github.com/younghuangbao/NextMuniAlexaSkill'
                  target='_blank'
                >
                  Github Repo
                </Button>
              </Card.Footer>
            </Card>
            <Card border='dark' style={{ width: '21rem', margin: '1rem' }}>
              <Card.Img
                style={{ height: '15rem' }}
                variant='top'
                src='/images/smartDoor.png'
              />
              <Card.Body>
                <Card.Title>Smart Door</Card.Title>
                <Card.Text style={{ fontSize: '14px' }}>
                  With the emergence of Edge Computing in IoT, SmartDoor is a
                  proof of concept project of an automated attendance tracker
                  that also serves as a more personalized security system. This
                  project uses Raspberry Pis to simulate use case.
                </Card.Text>
              </Card.Body>
              <Card.Footer style={{ fontSize: '14px' }}>
                <strong>Technologies Used:</strong>
                <p>Python</p>
                <Button
                  className='project-btn'
                  variant='info'
                  href='https://www.youtube.com/watch?v=QMduXOS_j_Y'
                  target='_blank'
                >
                  Youtube Demo
                </Button>
                <Button
                  className='project-btn'
                  variant='secondary'
                  href='https://github.com/woonicholas/SmartDoor'
                  target='_blank'
                >
                  Github Repo
                </Button>
              </Card.Footer>
            </Card>

            <Card border='dark' style={{ width: '21rem', margin: '1rem' }}>
              <Card.Img
                style={{ height: '15rem' }}
                variant='top'
                src='/images/columns.png'
              />
              <Card.Body>
                <Card.Title>Columns</Card.Title>
                <Card.Text style={{ fontSize: '14px' }}>
                  Created my own version of Columns (an old puzzle-based game on
                  the Sega Genesis) that is played similarly to Tetris, but with
                  3-piece “columns” and vertical, horizontal, and diagonal
                  matching.
                </Card.Text>
              </Card.Body>
              <Card.Footer style={{ fontSize: '14px' }}>
                <strong>Technologies Used:</strong>
                <p>Python</p>
                <Button
                  className='project-btn'
                  variant='secondary'
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
