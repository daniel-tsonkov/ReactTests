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
    </div>
  );
};

export default Header;
