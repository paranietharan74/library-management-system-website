import React from 'react';
import styles from './style/AdminLeftNavBar.module.css';
import exmpleImage from '../resources/sample-picture.jpg';
import { Link } from 'react-router-dom';

const AdminLeftNavBar = () => {
    return (
        <div className={styles.sidebar}>
            <nav className={styles.sidebarContainer}>

                <div className={styles.sidebarAccount}>
                    <img src={exmpleImage} alt='Profile' className={styles.sidebarPerfil} />
                    <div className={styles.sidebarNames}>
                        <h3 className={styles.sidebarName}>Will Lens</h3>
                        <span className={styles.sidebarEmail}>willens@email.com</span>
                    </div>
                </div>

                <div className={styles.sidebarContent}>
                    <div className={styles.sidebarList}>
                        <Link to="/admin" className={`${styles.sidebarLink} ${styles.activeLink}`}>
                            <span className={styles.sidebarLinkName}>Home</span>
                        </Link>
                        <Link to="/admin-book-management" className={`${styles.sidebarLink} ${styles.activeLink}`}>
                            <span className={styles.sidebarLinkName}>Book Management</span>
                        </Link>
                        <Link to="/membership-management" className={`${styles.sidebarLink} ${styles.activeLink}`}>
                            <span className={styles.sidebarLinkName}>Membership Management</span>
                        </Link>
                        <Link to="/librarian-chat" className={`${styles.sidebarLink} ${styles.activeLink}`}>
                            <span className={styles.sidebarLinkName}>Chat</span>
                        </Link>
                    </div>

                    <div className={styles.sidebarList}>
                        <Link to="/" className={`${styles.sidebarLink} ${styles.activeLink}`}>
                            <span className={styles.sidebarLinkName}>Article Management</span>
                        </Link>
                        <Link to="/" className={`${styles.sidebarLink} ${styles.activeLink}`}>
                            <span className={styles.sidebarLinkName}>Fine Managemnt</span>
                        </Link>
                        <Link to="/" className={`${styles.sidebarLink} ${styles.activeLink}`}>
                            <span className={styles.sidebarLinkName}>Settings</span>
                        </Link>
                        <Link to="/" className={`${styles.sidebarLink} ${styles.activeLink}`}>
                            <span className={styles.sidebarLinkName}>Logout</span>
                        </Link>
                    </div>
                </div>

            </nav>
        </div>
    );
};

export default AdminLeftNavBar;