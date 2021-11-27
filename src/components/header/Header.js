import Image from 'next/image';
import { Navbar, Container, Nav } from 'react-bootstrap';
import styles from './CustomHeader.module.css';

function Header() {
    return (
        <div className={styles.navBarContainer}>
            <Navbar collapseOnSelect expand="xl" className={styles.navBarTop}>
                <Navbar.Brand href="/">
                    <div className={styles.headerContainer}>
                        <div className={styles.headerIconContainer}>
                            <img src='/IIT-1.png' className={styles.bannerImage} />
                            {/* <Image
                                layout="responsive"
                                src='/IIT-1.png'
                                objectFit='contain'
                                objectPosition='left'
                            /> */}
                        </div>
                        <div className={styles.bannerText}>
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
                    <Nav className={styles.navItems}>
                        <Nav.Link href="/aboutus">About Us</Nav.Link>
                        <Nav.Link href="/institute">Institute</Nav.Link>
                        <Nav.Link href="/education">Education</Nav.Link>
                        <Nav.Link href="#meditation">Meditation</Nav.Link>
                        <Nav.Link href="#news">News & Events</Nav.Link>
                        <Nav.Link href="#publications">Publications</Nav.Link>
                        <Nav.Link href="/contactus">Contact Us</Nav.Link>
                        <Nav.Link href="#support">
                            <span className={styles.supportButton} >
                                How To Support
                            </span>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Header;
