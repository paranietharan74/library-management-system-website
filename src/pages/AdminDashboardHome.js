import AdminLeftNavBar from "../components/AdminLeftNavBar";
import LibrarianTopNavBar from "../components/LibrarianTopNavBar";
import LibraryBookCount from "../components/LibraryBookCount";
import React from 'react';
import styles from './styles/AdminDashBoardHome.module.css';
import SearchBar from '../components/SearchBar';
import SingleSearchResult from "../components/SingleSearchResult";
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