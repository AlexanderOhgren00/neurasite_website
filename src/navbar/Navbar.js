import styles from './Navbar.module.css';
import homestyles from '../home/Home.module.css';
import HomeIcon from './navbarIcons/HomeIcon';
import AboutIcon from './navbarIcons/AboutIcon';
import NeurasiteIcon from '../home/homeIcons/NeurasiteIcon';
import SuitCaseIcon from './navbarIcons/SuitCaseIcon';
import LaptopIcon from './navbarIcons/LaptopIcon';
import PhoneIcon from '../home/homeIcons/PhoneIcon';

const Navbar = ({homePage, aboutPage, websitePage, consultantPage, popupRef}) => {

    const scrollTo = (section) => {
        window.scrollTo({top: section.current.offsetTop, behavior: "smooth"});

    }

    const handleContact = () => {
        console.log("clicked")
        const popup = popupRef.current
        popup.classList.add(homestyles["fadeActive"])
    }

    return (
        <div className={styles.navbarContainer}>
            <div className={styles.container}>
                <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}><NeurasiteIcon width={50} height={70}/></div>
            </div>
            <div className={styles.secondContainer}>
                <div className={styles.stickyContainer}>
                    <div className={styles.homeButton}>
                        <div style={{display: "flex", alignItems: "center", gap: "5px"}} onClick={() => scrollTo(homePage)}><HomeIcon /></div>
                    </div>
                    <div className={styles.navButtons} style={{backgroundColor: "#14151f"}}>
                        <div onClick={() => scrollTo(websitePage)}><LaptopIcon width={30} height={30}/></div>
                        <div onClick={() => scrollTo(consultantPage)}><SuitCaseIcon width={30} height={30}/></div>
                        <div onClick={() => scrollTo(aboutPage)}><AboutIcon width={30} height={30}/></div>
                        <div className={styles.phoneNav} onClick={handleContact}><PhoneIcon width={30} height={30}/></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
