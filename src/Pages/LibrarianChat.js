import style from './style/LibrarianChatStyle.module.css';
import LibrarianTopNavBar from '../Components/LibrarianTopNavBar';
import AdminLeftNavBar from '../Components/AdminLeftNavBar';

function LibrarianChat() {
    return (
        <>
            <LibrarianTopNavBar />
            <AdminLeftNavBar />

            <div className={style.librarianChatContainer}></div>
        </>
    );
}

export default LibrarianChat;