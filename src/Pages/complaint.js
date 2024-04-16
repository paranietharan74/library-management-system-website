import styles from './style/ComplaintStyle.module.css';
import UserNavBar from '../components/UserNavBar';
import ComplaintDetails from '../components/ComplaintDetails';

import MakeComplaint from '../components/MakeComplaint';

function Complaint() {
    const complaintSection = 'Library';
    const complaintDescription = 'The library is too noisy and it is difficult to concentrate on studying or reading. There are also not enough power outlets for charging laptops and phones.';

    return (
        <>
            <UserNavBar />
            <div className={styles.complaintContainer}>
                <ComplaintDetails
                    complaintSection={complaintSection}
                    complaintDescription={complaintDescription}
                />


                <div className={styles.complaintFooter}>
                    <MakeComplaint />
                </div>
            </div>
        </>
    );
}

export default Complaint;