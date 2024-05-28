import styles from './style/AdminNotificationControlStyle.module.css';
import LibrarianTopNavBar from '../Components/LibrarianTopNavBar';

function AdminNotificationControl() {
    return (
        <>
            <div className={styles.container}>
                <LibrarianTopNavBar />

                <div className={styles.contents}></div>
            </div>
        </>
    );
}

export default AdminNotificationControl;