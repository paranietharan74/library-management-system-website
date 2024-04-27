import LibrarianTopNavBar from '../Components/LibrarianTopNavBar';
import styles from './style/AdminFineManagementStyle.module.css';

function AdminFineManagement() {
    return (
        <>
            <div className={styles.Container}>
              <LibrarianTopNavBar />

              <div className={styles.contents}></div>
            </div>
        </>
    );
}

export default AdminFineManagement;