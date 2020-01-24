import React from "react"
import { Paper, Tabs, Tab } from "@material-ui/core"
import { muscles } from "../../store"

export const Footer = props => {
    return (
        <Paper>
            <Tabs
                value={0}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Tab label="All" />
                {muscles.map(muscle => {
                    return (
                        <Tab label={muscle} />
                    )
                })}
            </Tabs>
        </Paper>
    )
}