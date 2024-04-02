import styles from './style/SecurityPageStyle.module.css';
import UserProfileLeftSideNavBar from '../components/UserProfileLeftSideNavBar';
import ChangePassword from '../components/ChangePassword';

function SecurityPage() {
    return (
        <div className={styles.SecurityPageContainer}>
            <UserProfileLeftSideNavBar />

            <div className={styles.SecurityPageContent}>
                <ChangePassword />
            </div>
        </div>
    );
}

export default SecurityPage;