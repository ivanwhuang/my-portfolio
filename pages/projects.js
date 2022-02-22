import { Container, Card, Button } from 'react-bootstrap';
import Header from '../components/header.js';
import Footer from '../components/footer.js';

export default function Projects() {
  return (
    <div>
      <Header />
      <div className='projects-background'></div>
      <div className='projects-content'>
        <Container fluid>
          <div style={{marginLeft: '7rem'}}>
            <hr class='content-spacer' />
            <h1>Projects</h1>
          </div>
          <div className='project-cards'>
            <Card border='dark' className='project-card'>
              <Card.Img
                variant='top'
                src='/images/spotTheTrack.png'
              />
              <Card.Body>
                <Card.Title>SpotTheTrack</Card.Title>
                <Card.Text>
                  <p>
                    SpotTheTrack is an online round-based multiplayer game where each round,
                    players in the same game room compete with each other to
                    guess the name of the song that is currently playing.
                  </p>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
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
            <Card border='dark' className='project-card'>
              <Card.Img
                variant='top'
                src='/images/prayerKeeper.png'
              />
              <Card.Body>
                <Card.Title>PrayerKeeper</Card.Title>
                <Card.Text>
                  <p>
                    A full-stack MERN web app with token based authentication
                    that has served as an easy platform for a group of 30
                    friends to keep up with each other's prayer requests.
                  </p>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <strong>Technologies Used:</strong>
                <p>Express, React, Node.js, Redux, MongoDB</p>
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
            <Card border='dark' className='project-card'>
              <Card.Img
                variant='top'
                src='/images/ethicScore.jpg'
              />
              <Card.Body>
                <Card.Title>Ethic Score (Sponsored Project)</Card.Title>
                <Card.Text>
                  An embedded Shopify application that features a composite
                  scoring system for products and brands found on Ethic
                  Marketplace that allows users to identify how well each product
                  aligns with their values.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
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
            <Card border='dark' className='project-card'>
              <Card.Img
                variant='top'
                src='/images/LampLytics.png'
              />
              <Card.Body>
                <Card.Title>LampLytics</Card.Title>
                <Card.Text>
                LampLytics is a prototype of a personal desk assistant system that utilizes 
                data from multiple sensors in order to automatically turn on a lamp and fan with just the 
                right amount of power in order to create a comfortable desk environment. 
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <strong>Technologies Used:</strong>
                <p>C++</p>
                <Button
                  className='project-btn'
                  variant='info'
                  href='https://www.youtube.com/watch?v=SsZZQ1udUtw&feature=youtu.be&ab_channel=IvanHuang'
                  target='_blank'
                >
                  Youtube Demo
                </Button>
                <Button
                  className='project-btn'
                  variant='secondary'
                  href='https://github.com/younghuangbao/LampLytics'
                  target='_blank'
                >
                  Github Repo
                </Button>    
              </Card.Footer>
            </Card>                         
            <Card border='dark' className='project-card'>
              <Card.Img
                variant='top'
                src='/images/amazonAlexa.jpg'
              />
              <Card.Body>
                <Card.Title>NextMuniAlexaSkill</Card.Title>
                <Card.Text>
                  <p>
                    An Amazon Alexa skill that uses NextBus API to return a
                    voice output of prediction times for any given San Francisco
                    Muni bus, stop, and direction.
                  </p>
                  <p>Feel free to try it on your own Alexa!</p>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
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
            <Card border='dark' className='project-card'>
              <Card.Img
                variant='top'
                src='/images/smartDoor.png'
              />
              <Card.Body>
                <Card.Title>Smart Door</Card.Title>
                <Card.Text>
                  With the emergence of Edge Computing in IoT, SmartDoor is a
                  proof of concept project of an automated attendance tracker
                  that also acts as a personalized security system. This
                  project uses Raspberry Pis to simulate use case.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <strong>Technologies Used:</strong>
                <p>Python, TensorFlow</p>
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
            <Card border='dark' className='project-card'>
              <Card.Img
                variant='top'
                src='/images/UCI.png'
              />
              <Card.Body>
                <Card.Title>ICS Search Engine</Card.Title>
                <Card.Text>
                A search engine built from the ground up using web pages scraped from 
                UC Irvine's Information and Computer Science's (ICS) domain. It is 
                capable of handling tens of thousands of documents, under harsh operational 
                constriants and having a query response time under 300ms.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <strong>Technologies Used:</strong>
                <p>Python</p>
                <Button
                  className='project-btn'
                  variant='secondary'
                  href='https://github.com/younghuangbao/ics-search-engine'
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
