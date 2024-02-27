import style from './styles/MembershipManagement.module.css';
import LibrarianTopNavBar from '../components/LibrarianTopNavBar';
import AdminLeftNavBar from '../components/AdminLeftNavBar';

function MembershipManagement(){
    return(
        <div className={style.MembershipManagement}>
            <LibrarianTopNavBar />
            <AdminLeftNavBar />

            <div className={style.contents}>
                <p>Hi</p>
            </div>
        </div>
    )
}

export default MembershipManagement;