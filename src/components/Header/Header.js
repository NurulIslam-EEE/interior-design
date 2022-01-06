import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.jpg';

const Header = () => {
    const { user, logOut } = useAuth();

    return (
        <Navbar style={{ backgroundColor: '#FFFFFF' }} expand="lg">
            <Container fluid>
                <Navbar.Brand href="#"> <img style={{ height: '40px', width: '200px' }} src={logo} alt="" /> </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="ms-auto my-2 my-lg-0" navbarScroll >
                        <Nav.Link as={Link} to="/">Home</Nav.Link>

                        {user?.email && <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>}

                        <Nav.Link as={Link} to="contract"> Contract</Nav.Link>
                        <Nav.Link as={Link} to="/home"> {user?.displayName}</Nav.Link>
                        {!user?.email ? < Nav.Link as={Link} to="/login"> Login</Nav.Link>
                            : <button onClick={logOut}>Logout</button>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;