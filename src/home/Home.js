import React, { useRef } from 'react';
import styles from './Home.module.css';
import { useState, useEffect } from 'react';
import InternetIcon from './homeIcons/InternetIcon.js';
import MoneyIcon from './homeIcons/MoneyIcon.js';
import DesktopIcon from './homeIcons/DesktopIcon.js';
import profile_picture from '../images/profile_picture.jpeg';
import MailIcon from './homeIcons/MailIcon.js';
import PhoneIcon from './homeIcons/PhoneIcon.js';
import FrontPageIcon from './homeIcons/FrontPageIcon.js';

function debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
};

const Home = ({homePage, setBackgroundColor, backgroundColor, popupRef, aboutPage, consultantPage, websitePage}) => {

    const sliderImagesRef = useRef(null);
    const sliderTextRef = useRef(null);
    const [submitText, setSubmitText] = useState("Kopiera");
    let oldScrollY = 0;

    const handleButton = () => {
        console.log("clicked")
        const popup = popupRef.current
        popup.classList.add(styles["fadeActive"])
        
    }

    const handleCopy = () => {
        const copyText = document.getElementById("myInput");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.value);
        setSubmitText("Kopierad")
    }

    const handleExit = () => {
        const popup = popupRef.current
        popup.classList.remove(styles["fadeActive"])
    }

    const preventClick = (e) => {
        e.stopPropagation();
    }

    useEffect(() => {

        const checkSlide = (e) => {
            const sliderImage = sliderImagesRef.current
            const textSlideInAt = (window.scrollY + window.innerHeight) - sliderImage.offsetHeight / 2;
            const imageBottom = sliderImage.offsetTop + sliderImage.offsetHeight;
            const textIsHalfShown = textSlideInAt > sliderImage.offsetTop;
            const isNoScrolledPast = window.scrollY < imageBottom;

            if(textIsHalfShown && isNoScrolledPast) {
                console.log("hubbabbuabua")
                sliderImage.classList.add(styles['active']);
            } else {
                sliderImage.classList.remove(styles['active']);
            }
        };

        window.addEventListener('scroll', debounce(checkSlide));
        return () => window.removeEventListener('scroll', debounce(checkSlide)); // Clean up on unmount

        
    }, []);

    useEffect(() => {

        const textSlide = (e) => {
            const sliderText = sliderTextRef.current
            const textSlideInAt = (window.scrollY + window.innerHeight) - sliderText.offsetHeight / 2;
            const textBottom = sliderText.offsetTop + sliderText.offsetHeight;
            const textIsHalfShown = textSlideInAt > sliderText.offsetTop;
            const textIsNoScrolledPast = window.scrollY < textBottom;

            if(textIsHalfShown && textIsNoScrolledPast) {
                sliderText.classList.add(styles[`active`]);
            } else {
                sliderText.classList.remove(styles[`active`])
            }
        };

        window.addEventListener('scroll', debounce(textSlide));
        return () => window.removeEventListener('scroll', debounce(textSlide)); // Clean up
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > oldScrollY) {
                setBackgroundColor("rgb(33, 170, 216)");
            } else {
                setBackgroundColor("rgb(20, 20, 20)");
            }
    }, true);

    }, [oldScrollY, setBackgroundColor]);

    return (
        <div ref={homePage} className={styles.pageContainer} id='container'>
            <div ref={popupRef} className={styles.popupFader} onClick={handleExit}>
                <div className={styles.popupContainer} onClick={preventClick}>
                    <MailIcon width={50} height={50} />
                    <h3>Kontakta mig</h3>
                    <div className={styles.inputArea}>
                        <input type="text" value="alexander.neurasite@gmail.com" id="myInput"></input>
                        <button onClick={handleCopy} title="Kopiera till clipboard">{submitText}</button>
                    </div>
                    <div className={styles.callArea}>
                        <PhoneIcon width={30} height={30} />
                        <p>073-227 24 53</p>
                    </div>
                </div>
            </div>
            <div className={styles.homeContainer}>
                <div>
                    <div style={{display: "flex", alignItems: "flex-start"}}>
                        <h1>Uppgradera din digitala<br/>identitet med våra <br/>skräddarsydda<br/>webbplatslösningar</h1>
                    </div>
                    <div>
                        <h3>Vi skapar moderna, responsiva och skräddarsydda<br/> hemsidor till kundens önskemål i detalj.<br/>Behöver du en hemsida?<br/>Neurasite löser det!</h3>
                    </div>
                    <div style={{maxWidth: "700px"}}>
                    </div>
                    <div className={styles.buttonContainer}>
                        <button className={styles.button} onClick={handleButton}>
                            <p>TA KONTAKT MED OSS</p>
                        </button>
                    </div>
                    <div>
                        <span style={{color: "rgb(223 105 192)", display: "flex", gap: "5px"}}>&#10003;<p>Precis som du vill ha det</p></span>
                        <span style={{color: "rgb(223 105 192)", display: "flex", gap: "5px"}}>&#10003;<p>Större online närvaro</p></span>
                        <span style={{color: "rgb(223 105 192)", display: "flex", gap: "5px"}}>&#10003;<p>Prisvärt</p></span>
                    </div>
                </div>
                <div>
                    <FrontPageIcon width={300} height={300} />
                </div>
            </div>
            <div ref={websitePage} className={styles.subContainer}>
                <div>
                    <div>
                        <h1 style={{color: "rgb(8, 185, 97)"}}>Varför ska du ha<br/>en hemsida?</h1>
                    </div>
                </div>
                <div ref={sliderImagesRef} className={styles.sliderText}>
                    <div>
                        <h1>Problem & lösning</h1>
                    </div>
                    <div>
                        <h3>Vad händer om jag inte har en hemsida?
                            <h3 style={{fontWeight: "10", width: "400px"}}>
                                Utan en hemsida så är det svårt för potentiella kunder att hitta ditt företag online och ditt företag uppfattas inte som seriöst.
                            </h3>
                        </h3>
                    </div>
                    <div>
                        <p style={{width: "400px"}}>Minskad tillgänglighet<p style={{fontWeight: "10", color: "rgb(170, 170, 170)"}}>Utan en webbplats så minskar du tillgängligheten för potentiella kunder. Ditt företag är endast tillgängligt under dina öppettider, vilket kan avskräcka kunder som söker information.</p></p>
                    </div>
                    <div>
                        <p style={{width: "400px"}}>Konkurrensnackdel<p style={{fontWeight: "10", color: "rgb(170, 170, 170)"}}>De flesta företag har redan en hemsida, vilket gör att du hamnar på efterkälken jämfört med dina konkurrenter som erbjuder en bättre digital närvaro.</p></p>
                    </div>
                </div>
            </div>
            <div className={styles.benefitContainer}>
                <div style={{justifyContent: "center"}}>
                    <h2 style={{marginTop: "50px"}}>Vad erbjuder vi?</h2>
                </div>
                <div style={{justifyContent: "space-around", flexWrap: "wrap"}}>
                    <div>
                        <InternetIcon width={35} height={35} />
                        <h3>Hemsidor & Konsultion</h3>
                        <p>Skräddarsydda och moderna webbplatser samt konsultion inom IT-System</p>
                    </div>
                    <div>
                        <DesktopIcon width={35} height={35} />
                        <h3>Hosting</h3>
                        <p>Erbjuder hostingtjänster för att säkerställa kontinuerliga uppdateringar</p>
                    </div>
                    <div>
                        <MoneyIcon width={35} height={35} />
                        <h3>Bra pris</h3>
                        <p>Förmånligt pris, anpassat för just dig och ditt företag</p>
                    </div>
                </div>
            </div>
            <div ref={consultantPage}className={styles.subContainer}>
                <div>
                    <div>
                        <h1 style={{color: "rgb(8, 185, 97)"}}>Vi erbjuder även<br/>konsultation</h1>
                    </div>
                </div>
                <div ref={sliderTextRef} className={styles.sliderText}>
                    <div>
                        <h1>Automation</h1>
                    </div>
                    <div>
                        <h3>Vill du ha en ökad produktivitet?
                            <h3 style={{fontWeight: "10", width: "400px"}}>
                                Vi på Neurasite erbjuder hjälp med automatiserade system, vilket leder till ökad produktion och effektivitet.
                            </h3>
                        </h3>
                    </div>
                    <div>
                        <p style={{width: "400px"}}>Kostnadsbesparingar<p style={{fontWeight: "10", color: "rgb(170, 170, 170)"}}>Genom att automatisera repetitiva och tidskrävande uppgifter kan företag minska behovet för manuellt arbete. Vilket minskar arbetskraftskonstnaderna.</p></p>
                    </div>
                    <div>
                        <p style={{width: "400px"}}>Bättre resursallokering<p style={{fontWeight: "10", color: "rgb(170, 170, 170)"}}>Med hjälp av automation så frigör du mänskliga resurser från repetitiva uppgifter, istället förflyttas dessa resurser till mer strategiska och kreativa uppgifter. Detta kommer att bidra med innovation och tillväxt.</p></p>
                    </div>
                </div>
            </div>
            <div ref={aboutPage} className={styles.aboutContainer}>
                <div>
                   <img className={styles.aboutImage} src={profile_picture} alt='bild på Alexanded Öhgren'></img>
                </div>
                <div>
                    <h1>Om mig</h1>
                    <p>Mitt namn är Alexander och jag är en ung kille som brinner för allt inom IT. Att vara en egenföretagare har alltid varit en dröm för mig, då jag har en stor passion för hemsidor och artificiell intelligens. Mina tidigare erfarenhet har givit mig ett stort intresse för människor och hur det går att förbättra deras vardag med hjälp av digitaliseringen. Jag är en problemlösare i grund och botten och gillar att komma på innovativa lösningar på problem. <br/><br/>Så varför inte prata om dina över en kaffe?</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
