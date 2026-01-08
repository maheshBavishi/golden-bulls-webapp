import React from 'react'
import styles from './header.module.scss';
import Topbar from '../topbar';
import Button from '../button';
import Link from 'next/link';
import MenuIcon from '@/icons/menuIcon';
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
              <Link href="/about-us" aria-label='About Us'>About Us</Link>
              <Link href="/courses" aria-label='Courses'>Courses</Link>
              <Link href="/blog" aria-label='Blogs'>Blogs</Link>
              <Link href="/contact-us" aria-label='Contact Us'>Contact Us</Link>
              <Link href="/register" aria-label='Sign-up'>Sign-up</Link>
              <Button text='Login' />
            </div>
            <div className={styles.menuIcon}>
              <MenuIcon />
            </div>
            <div className={styles.line}></div>
          </div>
        </div>
      </header>
    </div>
  )
}
