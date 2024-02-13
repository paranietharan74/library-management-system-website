import PersistentDrawerLeft from "../components/PersistentDrawerLeft";
import "./style/userHomeStyle.css";

function UserHome() {
    return (
        <div>
            <PersistentDrawerLeft>
                <h1>Welcome to the User Home Page</h1>
            </PersistentDrawerLeft>
        </div>
    );
}

export default UserHome;