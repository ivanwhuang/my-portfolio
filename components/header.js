import Head from 'next/head';

import { Navbar, Nav } from 'react-bootstrap';
import Link from 'next/link';

// The Navbar styles are in-line because they wont work otherwise for some reason

export default function Header() {
  return (
    <div>
      <Head>
        <title>Ivan Huang</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link
          rel='stylesheet'
          href='https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'
          integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T'
          crossorigin='anonymous'
        />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/icon?family=Material+Icons'
        />
        <link
          rel='stylesheet'
          href='https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
        />
        <link
          href='https://fonts.googleapis.com/css?family=Anton|Oxygen&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Navbar
        sticky='top'
        bg='dark'
        variant='dark'
        className='header'
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          backgroundColor: '#343a40',
          alignItems: 'center',
          padding: '.25rem 2rem',
          position: 'fixed',
          'z-index': '1',
          width: '100%',
          top: '0',
          borderBottom: 'solid 1px var(--info-color)',
          opacity: '0.9',
        }}
      >
        <Navbar.Brand style={{ 'font-size': '1.2rem' }} href='/'>
          Ivan Huang
        </Navbar.Brand>
        <Nav style={{ 'flex-direction': 'row'}}>
          <Link href='/projects'>
            <a>Projects</a>
          </Link>
          <Link href='/photography'>
            <a>Photography</a>
          </Link>
          <a href='/resume' target='_blank'>
            Resume
          </a>
        </Nav>
      </Navbar>
    </div>
  );
}
