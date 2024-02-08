import PageMessage from "../components/PageMessage";
import PersistentDrawerLeft from "../components/PersistentDrawerLeft";

function UserMessages() {
  const messageStyle = {
    marginTop: '10px', // Add top gap
    marginBottom: '10px', // Add bottom gap
    textAlign: 'center', // Align in center
  };

  return (
    <PersistentDrawerLeft>
      <div className="notification-container">
        <div className="notifications">
          <PageMessage message="Custom message 1" style={messageStyle} />
          <PageMessage message="Custom message 2" style={messageStyle} />
          <PageMessage message="Custom message 3" style={messageStyle} />
          <PageMessage message="Custom message 4" style={messageStyle} />
          <PageMessage message="Custom message 5" style={messageStyle} />
        </div>
      </div>
    </PersistentDrawerLeft>

  );
}

export default UserMessages;