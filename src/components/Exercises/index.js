import React from "react"
import {Grid} from "@material-ui/core"
import RightPane from "./RightPane"
import LeftPane from "./LeftPane"

const styles = {
    Paper: {
        padding: 20, marginTop:10 , marginBottom: 10
    }
}

export default props => (
    <Grid container spacing={2}>
        <Grid item sm>
            <LeftPane styles={styles}/>
        </Grid>
        <Grid item sm>
            <RightPane styles={styles}/>
        </Grid>
    </Grid>
)