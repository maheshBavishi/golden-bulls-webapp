import React from 'react'
import styles from './sidebar.module.scss';
import UserIcon from '@/icons/userIcon';
import DownIcon from '@/icons/downIcon';
import UpIcon from '@/icons/upIcon';
import LibraryIcon from '@/icons/libraryIcon';
import CoursesIcon from '@/icons/coursesIcon';
import AlgobotsIcon from '@/icons/algobotsIcon';
import NotificationsIcon from '@/icons/notificationsIcon';
import PaymentIcon from '@/icons/paymentIcon';
import ReferIcon from '@/icons/referIcon';
import classNames from 'classnames';
const Logo = '/assets/logo/logo.svg';

export default function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.sidebarlogo}>
                <img src={Logo} alt='Logo' />
            </div>
            <div className={styles.asideBody}>
                <div className={classNames(styles.active, styles.menu)}>
                    <LibraryIcon />
                    <span>
                        My Library
                    </span>
                </div>
                <div className={styles.menu}>
                    <CoursesIcon />
                    <span>
                        Courses
                    </span>
                </div>
                <div className={styles.menu}>
                    <AlgobotsIcon />
                    <span>
                        Algobots
                    </span>
                </div>
                <div className={styles.menu}>
                    <NotificationsIcon />
                    <span>
                        Notifications
                    </span>
                </div>
                <div className={styles.menu}>
                    <PaymentIcon />
                    <span>
                        Payment History
                    </span>
                </div>
                <div className={styles.menu}>
                    <ReferIcon />
                    <span>
                        Refer and Earn
                    </span>
                </div>
            </div>
            <div className={styles.asideFooter}>
                <div className={styles.profileBox}>
                    <div className={styles.profile}>
                        <UserIcon />
                    </div>
                    <div className={styles.textgrid}>
                        <span>
                            Steve
                            Harrington
                        </span>
                        <UpIcon />
                    </div>
                </div>
            </div>
        </aside>
    )
}
