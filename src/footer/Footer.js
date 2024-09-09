import React from 'react';
import styles from './Footer.module.css';
import InstagramIcon from "./footerIcon/InstagramIcon.js"
import LinkedinIcon from "./footerIcon/LinkedinIcon.js"
import FacebookIcon from './footerIcon/FacebookIcon.js';
import NeurasiteIcon from '../home/homeIcons/NeurasiteIcon.js';


const Footer = () => {

    const routeChange = (redirect) => {
        window.location.href = redirect;
    }

    return (
        <div className={styles.footerContainer}>
            <div className={styles.firstContainer}>
                <div className={styles.logoContainer}>
                    <NeurasiteIcon width={70} height={70}/>
                    <h2 style={{color: "white"}}>Neurasite</h2>
                </div>
                <div className={styles.email}>
                    <p>alexander.neurasite@gmail.com</p>
                </div>
            </div>
            <hr style={{margin: "0", alignSelf: "stretch", borderColor: "rgb(100, 100, 100)"}}></hr>
            <div className={styles.secondContainer}>
                <div className={styles.iconsContainer}>
                    <div className={styles.iconContainer} onClick={() => routeChange("https://www.instagram.com/neurasite/?igsh=ZDhnZzJrdzI3eHgw&utm_source=qr")}>
                        <InstagramIcon width={24} height={24}/>
                    </div>
                    <div className={styles.iconContainer} onClick={() => routeChange("https://www.linkedin.com/in/alexander-%C3%B6hgren-893434321/")}>
                        <LinkedinIcon width={20} height={20}/>
                    </div>
                    <div className={styles.iconContainer} onClick={() => routeChange("https://www.facebook.com/profile.php?id=61564180342801&locale=sv_SE")}>
                        <FacebookIcon width={24} height={24}/>
                    </div>
                </div>
                <div>
                    <p style={{color: "#848282", marginTop: 0}}>&copy;copyright all rights reserved</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
