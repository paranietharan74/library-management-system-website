import React from "react";
import { Avatar, Divider, Grid, Paper } from "@material-ui/core";


function Comment({ comment }) {
    const { imgLink, author, content, timestamp } = comment;

    return (
        <>
            <Paper style={{ padding: "20px 10px" }}>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                        <Avatar alt="Remy Sharp" src={imgLink} />
                    </Grid>
                    <Grid justifyContent="left" item xs zeroMinWidth>
                        <h4 style={{ margin: 0, textAlign: "left" }}>{author}</h4>
                        <p style={{ textAlign: "left" }}>{content}</p>
                        <p style={{ textAlign: "left", color: "gray" }}>
                            posted {timestamp}
                        </p>
                    </Grid>
                </Grid>
            </Paper>
            
            <Divider variant="fullWidth" style={{ margin: "5px 0" }} />
        </>
    );
}

export default Comment;