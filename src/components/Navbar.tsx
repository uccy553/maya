import React, { useState } from 'react';
import Image from 'next/image';
import { logo } from '@/assets';
import styles from '../styles/Navbar.module.css';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { nav_items } from '@/constants/nav';


interface nav_items {
    text: string,
    href: string
}
const Navbar = () => {
    const [navActive, setNavActive] = useState(false);
    
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
            <div className={styles.head_logo}>
              <Link href="/" style={{ display: 'flex', zIndex: '50' }}>
                  <Image src={logo} alt="logo" />
                  <h1>Maya</h1>
              </Link>
            </div>

        <div className={styles.menu} onClick={() => setNavActive(!navActive)}>
            {navActive ? <CloseIcon sx={{ color: '#fff' }} fontSize="large" /> : <MenuIcon sx={{ color: '#fff' }} fontSize="large" />}
        </div>

        <div className={`${navActive ? styles.active1 : ""} ${styles.nav__menu_list}`}>
                  {nav_items.map((item) => {                
                      return (
                        <div className={styles.nav__item} onClick={() => {
                          setNavActive(false);
                        }} key={item.text}>
                          <Link style={{ textDecoration: 'none' }} href={item.href}>
                            <div className={styles.nav__link}>{item.text}</div>
                          </Link>
                        </div>
                      );
                  })}
        </div>
              <div className={styles.contact_btn} style={{ margin: '5em' }}>
                <button className={styles.nav_btn}>Get Started</button>
              </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar
