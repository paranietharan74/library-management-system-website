import './style/Profile.module.css';
import UserNavBar from '../components/UserNavBar';
import UserTopBackButton from '../components/UserTopBackButton';

function Profile() {

    return (
        <>
            <UserNavBar />
            <div>
                <UserTopBackButton content="Go Back" />
            </div>
        </>
    );
}

export default Profile;
