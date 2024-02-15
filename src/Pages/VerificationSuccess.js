import VerificationSuccessMessage from '../Components/VerificationSuccessMessage';
import './style/VerificationSuccess.css';

function VerificationSuccess() {
  return (
    <div className="VerificationSuccess">
      <div className="Verification-Success-container">
        <VerificationSuccessMessage />
      </div>
    </div>
  );
}

export default VerificationSuccess;