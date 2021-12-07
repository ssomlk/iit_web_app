import Image from 'next/image';
import { useRouter } from 'next/dist/client/router';
import { Navbar, Container, Nav } from 'react-bootstrap';
import styles from './CustomHeader.module.css';


function Header() {
    const router = useRouter();

    return (
        <div className={styles.navBarContainer}>
            <Navbar collapseOnSelect expand="xl" className={styles.navBarTop}>
                <Navbar.Brand onClick={() => router.push('/')}>
                    <div className={styles.headerContainer}>
                        <div className={styles.headerIconContainer}>
                            <img src='/IIT-1.png' className={styles.bannerImage} />
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
                        <Nav.Link onClick={() => router.push('/aboutus')}>About Us</Nav.Link>
                        <Nav.Link onClick={() => router.push('/institute')}>Institute</Nav.Link>
                        <Nav.Link onClick={() => router.push('/education')}>Education</Nav.Link>
                        <Nav.Link onClick={() => router.push('#meditation')}>Meditation</Nav.Link>
                        <Nav.Link onClick={() => router.push('#news')}>News & Events</Nav.Link>
                        <Nav.Link onClick={() => router.push('#publications')}>Publications</Nav.Link>
                        <Nav.Link onClick={() => router.push('/contactus')}>Contact Us</Nav.Link>
                        <Nav.Link onClick={() => router.push('/howtosupport')}>
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
