import React from 'react';
import styles from './aboutUsComponent.module.css';
import { missionData } from '../../data/aboutUsData';

function AboutUsComponent() {

    return (
        <div className={styles.rootContainer}>
            <div className={styles.aboutUsContainer}>
                <div className={styles.aboutUsHeader}>
                    <h1 className={styles.mainHeader}>What is IIT?</h1>
                    <p className={styles.aboutUsMainIntro}>
                        The International Institute of Theravada (IIT) is a comprehensive training institute aimed at
                        facilitating spiritual and academic development of Buddhist monks and nuns, based on Theravada teachings.
                        It is inclusive and accommodative, irrespective of sects (Nikaya) and other differences within the Theravada
                        Buddhist clergy. The IIT would disseminate the teachings of the Buddha as per the ancient Theravada texts,
                        to Buddhist practitioners across the globe.
                    </p>
                </div>
                <div className={styles.map}>
                    <iframe
                        height="100%"
                        width="100%"
                        position="absolute"
                        id="gmap_canvas"
                        src="https://maps.google.com/maps?q=International%20Institute%20of%20Therav%C4%81da,%20Heenatikalmavatta,%20Rajavigama,%20Karuwalagaswewa&t=&z=13&ie=UTF8&iwloc=&output=embed">

                    </iframe>
                </div>
                <div className={styles.mapInformation}>
                    <div className={styles.mapInformationDetails}>
                        <h2 className={styles.subHeading1}>Where is the IIT?</h2>
                        <p className={styles.mapTextInfo}>
                            Located in Sri Lanka (Karuwalagaswewa, near Anamaduwa), a country
                            where theravāda Buddhism is preserved and practiced extensively,
                            the IIT will cater to monastics from all parts of the world.
                        </p>
                    </div>
                    <div className={styles.mapInformationLink}>
                        <div className={styles.mapIcon}>
                            <img src="/GetDirections.svg" />
                        </div>
                        <div className={styles.directionText}>
                            <div className={styles.directionHeading}>GetDirections</div>
                            <div className={styles.directionSubHeading}>View in google map</div>
                        </div>
                        <div className={styles.linkArrow}>
                            <a href="https://www.google.com/maps/place/International+Institute+of+Therav%C4%81da/@7.964815,79.98393,13z/data=!4m5!3m4!1s0x0:0x55e0440823643e03!8m2!3d7.9662346!4d79.9838372?hl=en-GB"
                                target="_blank">
                                <img src="/Arrow01.svg" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className={styles.missionHeading}>
                    <h2 className={styles.subHeading2}>Our Vision & Mission</h2>
                </div>
                <div className={styles.missionDetails}>
                    <div className={styles.missionBriefing}>
                        <p className={styles.brefingText}>
                            The IIT shall always function to achieve its vision and mission.
                        </p>
                    </div>
                    <div className={styles.missionInfo}>
                        {missionData.map((data, index) => {
                            return (
                                <div key={index} className={styles.missionDataContainer}>
                                    <div className={styles.missionImageContainer}>
                                        <img src={data.image} className={styles.missionImage} />
                                    </div>
                                    <div className={styles.missionText}>{data.text}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className={styles.ourFocus}>
            </div>
        </div>
    );
}

export default AboutUsComponent;