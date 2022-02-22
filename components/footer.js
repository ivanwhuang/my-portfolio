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
      <Navbar.Brand style={{ color: '#fff', 'font-size': '0.8rem'}}>© 2022 Ivan Wan Le Huang</Navbar.Brand>
      <Nav style={{ 'flex-direction': 'row'}}>
        <p>ivanhuang77@gmail.com</p>
        <p>(415) 816-6519</p>
      </Nav>
    </Navbar>
  );
}
