import React from 'react';
import { AppBar, Toolbar, Typography } from "@material-ui/core"
import CreateDialog from "../Exercises/Create"

const Header = ({ muscles, handleCreateExercise }) => (
    <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" color="inherit" style={{ flex: 1 }}>
                Exercise database
            </Typography>
            <CreateDialog muscles={muscles} createExercise={handleCreateExercise} />
        </Toolbar>
    </AppBar>
)

export default Header