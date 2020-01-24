import React from "react"
import { Grid, Paper, Typography, List, ListItem, ListItemText } from "@material-ui/core"

const Exercises = ({ exercises }) => {
    const styles = {
        Paper: {
            marginTop: "10px",
            marginBottom: "10px",
            padding: "20px",
            height: "500px",
            overflowY: "auto"
        }
    }
    return (
        <Grid container sm spacing={2}>
            <Grid item sm>
                <Paper style={styles.Paper}>
                    {exercises.map(([muscles, exercises]) => {
                        return (
                            <React.Fragment>
                                <Typography
                                    variant="h6"
                                >
                                    {muscles}
                                </Typography>
                                <List component="ul" aria-label="muscles">
                                    {exercises.map(exercise => {
                                        return (
                                            <ListItem button>
                                                <ListItemText primary={exercise.title} />
                                            </ListItem>
                                        )
                                    })}
                                </List>
                            </React.Fragment>
                        )
                    })}
                </Paper>
            </Grid>
            <Grid item sm>
                <Paper style={styles.Paper}>
                    Right side
                </Paper>
            </Grid>
        </Grid>
    )
}
export default Exercises