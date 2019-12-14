import React, { Component, Fragment } from "react"
import {
    Dialog, DialogTitle, DialogContent, DialogContentText, Fab
} from "@material-ui/core"
import AddIcon from "@material-ui/icons/Add"
import Form from "./Form"

export default class Create extends Component {
    state = {
        open: false
    }

    handleToggle = () => {
        this.setState(({ open }) => ({ open: !open }))
    }

    render() {
        const { open } = this.state,
            { muscles } = this.props;

        return (
            <Fragment>
                <Fab color="secondary" aria-label="add" onClick={this.handleToggle}>
                    <AddIcon />
                </Fab>
                <Dialog aria-labelledby="form-dialog-title" open={open} onClose={this.handleToggle}>
                    <DialogTitle id="form-dialog-title">
                        Create a new Exercise
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Fill the form below to create a new exercise
                        </DialogContentText>
                        <Form
                            muscles={muscles}
                        />
                    </DialogContent>
                </Dialog>
            </Fragment>
        )
    }
}