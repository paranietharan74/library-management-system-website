import PersistentDrawerLeft from "../components/PersistentDrawerLeft";
import './style/FineManagementStyle.css';

function FineManagement() {
    return (
        <div>
            <PersistentDrawerLeft>
                <div className="fine-management-container">
                    <div className="fine-management-header">
                        <h1>Fine Payment Receipt</h1>
                        <p>27346733-022</p>
                    </div>

                    <div className="due-date-details">
                        <h2>Due Date</h2>
                        <p>2021-11-01</p>
                    </div>

                    <div className="fine-amount-details">
                        <table className="fine-amount-details-table">
                            <tr>
                                <th>Book Name</th>
                                <th>Days of late</th>
                                <th>Fine Amount</th>
                            </tr>
                            <tbody>
                                <tr>
                                    <td>Book 1</td>
                                    <td>5</td>
                                    <td>100</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="warning-message">
                        <p>After 7 March 2024 your Library account will be suspended</p>
                    </div>
                </div>
            </PersistentDrawerLeft>
        </div>
    );
}

export default FineManagement;