import React from 'react'
import styles from './header.module.scss';
import Topbar from '../topbar';
import Button from '../button';
import Link from 'next/link';
const Logo = '/assets/logo/logo.svg';
export default function Header() {
  return (
    <div className={styles.headerTop}>
      <Topbar />
      <header className={styles.header}>
        <div className='container-md'>
          <div className={styles.headerAlignment}>
            <div className={styles.logo}>
              <Link href="/">
                <img src={Logo} alt='Logo' />
              </Link>
            </div>
            <div className={styles.menu}>
              <a aria-label='About Us'>About Us</a>
              <a aria-label='Courses'>Courses</a>
              <a aria-label='Blogs'>Blogs</a>
              <a aria-label='Contact Us'>Contact Us</a>
              <a aria-label='Sign-up'>Sign-up</a>
              <Button text='Login' />
            </div>
            <div className={styles.line}></div>
          </div>
        </div>
      </header>
    </div>
  )
}
