import { Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  return (
    <div className="container">
      <Navbar className="yellotail">
        <Nav.Link to="/">
          <Navbar.Brand>The daily news</Navbar.Brand>
        </Nav.Link>
      </Navbar>
      <Nav>
        <Nav.Item>
          <Nav.Link to="/">HOME</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link to="/contact">CONTACT</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Header;
