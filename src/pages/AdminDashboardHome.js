import AdminLeftNavBar from "../Components/AdminLeftNavBar";
import LibrarianTopNavBar from "../Components/LibrarianTopNavBar";
import LibraryBookCount from "../Components/LibraryBookCount";
import React from 'react';
import styles from './styles/AdminDashBoardHome.module.css';
import SearchBar from '../Components/SearchBar';
import SingleSearchResult from "../Components/SingleSearchResult";
import exampleImage from '../resources/sample-picture.jpg';

function AdminDashboardHome() {
  return (
    <div>
      <LibrarianTopNavBar />
      <AdminLeftNavBar />

      <div className={styles.content}>
        <LibraryBookCount />

        <div className={styles.search}>
          <SearchBar />

          <div className={styles.searchResults}>
            <SingleSearchResult
              profileImage={exampleImage}
              name="Paranie"
              bookName="Fire of wings"
              fineAmount="1000"
            />

            <SingleSearchResult
              profileImage={exampleImage}
              name="Paranie"
              bookName="Fire of wings"
              fineAmount="1000"
            />
          </div>
        </div>


      </div>
    </div>
  );
}

export default AdminDashboardHome;