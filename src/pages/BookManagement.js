import React from "react";
import AdminLeftNavBar from "../components/AdminLeftNavBar";
import LibrarianTopNavBar from "../components/LibrarianTopNavBar";
import style from "./styles/BookManagement.module.css";
import AddBooksComponent from "../components/AddBooksComponent";
import EditBooksComponent from "../components/EditBooksComponent";
import DeleteBooksComponent from "../components/DeleteBooksComponent";
import { useState } from "react";

function BookManagement() {
    const [displayComponent, setDisplayComponent] = useState('add');

    const handleButtonClick = (componentName) => {
        setDisplayComponent(componentName);
    };

    return (
        <div className={style.bookManagementPage}>
            <LibrarianTopNavBar />
            <AdminLeftNavBar />

            <div className={style.content}>
                <div className={style.menuItems}>
                    <button className={style.addBooks} onClick={() => handleButtonClick('add')}>Add Books</button>
                    <button className={style.editBooks} onClick={() => handleButtonClick('edit')}>Edit Books</button>
                    <button className={style.deleteBooks} onClick={() => handleButtonClick('delete')}>Delete Books</button>
                </div>

                <div className={style.displayComponent}>
                    {displayComponent === 'add' && <AddBooksComponent />}
                    {displayComponent === 'edit' && <EditBooksComponent />}
                    {displayComponent === 'delete' && <DeleteBooksComponent />}
                </div>
            </div>
        </div>
    );
}

export default BookManagement;