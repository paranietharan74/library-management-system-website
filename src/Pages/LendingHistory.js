import UserProfileLeftSideNavBar from '../Components/UserProfileLeftSideNavBar';
import styles from './style/LendingHistory.module.css';

function LendingHistory() {
    return (
        <>
            <UserProfileLeftSideNavBar />
            <div className={styles.container}>
                <div className={styles.contents}>
                    <h1>Hi</h1>
                </div>
            </div>
        </>
    )
}

export default LendingHistory;