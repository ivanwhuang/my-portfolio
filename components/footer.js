import { Navbar, Nav } from 'react-bootstrap';
import Link from 'next/link';

export default function Footer() {
  return (
    <Navbar
      sticky='top'
      expand='lg'
      bg='secondary'
      className='footer'
      variant='secondary'
    >
      <Navbar.Brand style={{ color: '#fff' }}>© 2020 Ivan Huang</Navbar.Brand>
      <Nav style={{ 'flex-direction': 'row' }}>
        <p>huangiw@uci.edu</p>
        <p>(415) 816-6519</p>
      </Nav>
    </Navbar>
  );
}
