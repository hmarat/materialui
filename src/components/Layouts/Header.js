import React from "react"
import { AppBar, Toolbar, Typography } from "@material-ui/core"

export const Header = props => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">
                    Exercises List
                </Typography>
            </Toolbar>
        </AppBar >
    )
}