import React, { useState } from 'react';

import style from './styles/MembershipManagement.module.css';
import LibrarianTopNavBar from '../Components/LibrarianTopNavBar';
import AdminLeftNavBar from '../Components/AdminLeftNavBar';

import AddMemberComponent from '../Components/AddMemberComponent';
import DeleteMemberComponent from '../Components/DeleteMemberComponent';

import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';

function MembershipManagement() {
    const [showAddMember, setShowAddMember] = useState(true); // 2 control what component 2 display

    const handleAddMemberClick = () => {
        setShowAddMember(true); // Show AddMemberComponent default. so when the page is loaded, AddMemberComponent is displayed
    };

    const handleDeleteMemberClick = () => {
        setShowAddMember(false); // Show DeleteMemberComponent, it one only visible when the delete button is clicked
    };

    return (
        <div className={style.MembershipManagement}>
            <LibrarianTopNavBar />
            <AdminLeftNavBar />

            <div className={style.contents}>
                <div className={style.buttongroup}>
                    <button className={style.addbutton} onClick={handleAddMemberClick}>
                        <PersonAddIcon />
                        <p>Add Membership</p>
                    </button>
                    <button className={style.removebutton} onClick={handleDeleteMemberClick}>
                        <PersonRemoveIcon />
                        <p>Remove Membership</p>
                    </button>
                </div>
                {showAddMember ? <AddMemberComponent /> : <DeleteMemberComponent />}
            </div>
        </div>
    );
}

export default MembershipManagement;