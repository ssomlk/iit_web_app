import Image from 'next/image';
import { Navbar, Container, Nav } from 'react-bootstrap';
import styles from './CustomHeader.module.css';

function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" className={styles.navBarTop}>
            <Container>
                <Navbar.Brand href="/">
                    <div className={styles.headerIconContainer}>
                        <Image
                            src='/IIT-1.png'
                            width={83}
                            height={96}
                            objectFit='contain'
                            objectPosition='left'
                        />
                        <div className={styles.headerIconNameContainer}>
                            <div>
                                International
                            </div>
                            <div>
                                Institute of
                            </div>
                            <div>
                                Theravada
                            </div>
                        </div>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link href="/aboutus">About Us</Nav.Link>
                        <Nav.Link href="/institute">Institute</Nav.Link>
                        <Nav.Link href="#education">Education</Nav.Link>
                        <Nav.Link href="#meditation">Meditation</Nav.Link>
                        <Nav.Link href="#news">News & Events</Nav.Link>
                        <Nav.Link href="#publications">Publications</Nav.Link>
                        <Nav.Link href="#contact">Contact Us</Nav.Link>
                        <Nav.Link href="#support">
                            <span className={styles.supportButton} >
                                SUPPORT
                            </span>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
