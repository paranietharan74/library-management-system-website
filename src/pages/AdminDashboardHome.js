import AdminLeftNavBar from "../components/AdminLeftNavBar";
import LibrarianTopNavBar from "../components/LibrarianTopNavBar";

function AdminDashboardHome() {
  return (
    <div>
        <LibrarianTopNavBar />
        <AdminLeftNavBar />
    </div>
  );
}

export default AdminDashboardHome;