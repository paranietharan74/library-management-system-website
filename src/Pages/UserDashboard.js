import PersistentDrawerLeft from "../components/PersistentDrawerLeft";
import Typography from "@mui/material/Typography";

function UserDashboard() {
  return (
    // <div>
    //   <PersistentDrawerLeft />
    // </div>
    <PersistentDrawerLeft>
      {/* Your custom content goes here */}
      <Typography variant="h4" gutterBottom>
        Your Custom Content
      </Typography>
      <Typography variant="body1">
        More custom content...
      </Typography>
    </PersistentDrawerLeft>

  );
}

export default UserDashboard;