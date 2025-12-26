import React from 'react'
import styles from './getInTouch.module.scss';
const AddressIcon = '/assets/icons/Address.svg';
const FacebookIcon = '/assets/icons/facebook-outline.svg';
const InstagramIcon = '/assets/icons/instagram-outline.svg';
const TwitterIcon = '/assets/icons/twitter-outline.svg';
const LinkdinIcon = '/assets/icons/linkdin-outline.svg';
export default function GetInTouch() {
    return (
        <div className={styles.getInTouch}>
            <div className='container-md'>
                <div className={styles.grid}>
                    <div className={styles.griditems}>
                        <h2>
                            get in touch
                        </h2>
                        <div className={styles.icongrid}>
                            <img src={AddressIcon} alt='AddressIcon' />
                            <div>
                                <h3>
                                    Address
                                </h3>
                                <p>
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.
                                </p>
                            </div>
                        </div>
                        <div className={styles.icongrid}>
                            <img src={AddressIcon} alt='AddressIcon' />
                            <div>
                                <h3>
                                    Contact  Details
                                </h3>
                                <a href='callto: +1 800-525-54-589'>
                                    +1 800-525-54-589
                                </a>
                            </div>
                        </div>
                        <div className={styles.icongrid}>
                            <img src={AddressIcon} alt='AddressIcon' />
                            <div>
                                <h3>
                                    Email Us
                                </h3>
                                <a href='callto: test@email.com'>
                                    test@email.com
                                </a>
                            </div>
                        </div>
                        <div className={styles.line}></div>
                        <div className={styles.followus}>
                            <span>
                                Follow Us :
                            </span>
                            <div className={styles.socialIcon}>
                                <img src={FacebookIcon} alt='FacebookIcon' />
                                <img src={InstagramIcon} alt='InstagramIcon' />
                                <img src={TwitterIcon} alt='TwitterIcon' />
                                <img src={LinkdinIcon} alt='LinkdinIcon' />
                            </div>
                        </div>
                    </div>
                    <div className={styles.griditems}></div>
                </div>
            </div>
        </div>
    )
}
