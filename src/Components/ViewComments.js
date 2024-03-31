import React from "react";
import Comment from "./Comment";

function ViewComments({ comments }) {
    // Check if comments array is undefined
    if (!comments) {
        return <div>No comments available</div>;
    }

    return (
        <>
            <h1>Comments</h1>
            <div style={{ padding: 14, width: "40vw", margin: "0 auto", overflowY: "auto", maxHeight: "25vh" }}>
                {comments.map((comment, index) => (
                    // Pass individual comment object to Comment component
                    <Comment key={index} comment={comment} />
                ))}
            </div>
        </>
    );
}

export default ViewComments;  