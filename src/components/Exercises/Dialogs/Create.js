import React, { Component, Fragment } from "react"
import {
    Button, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Fab,
    FormControl, InputLabel, Select, MenuItem, withStyles
} from "@material-ui/core"
import AddIcon from "@material-ui/icons/Add"

const styles = theme => ({
    FormControl: {
        width: 400
    }
})

export default withStyles(styles)(class Create extends Component {
    state = {
        open: false,
        exercise: {
            title: "",
            description: "",
            muscles: ""
        }
    }

    handleToggle = () => {
        this.setState(({ open }) => ({ open: !open }))
    }

    handleChange = name => event => {
        const value = event.target.value;
        this.setState((prevState) => ({
            exercise: {
                ...prevState.exercise,
                [name]: value
            }
        }))
    }

    handleSubmit = () => {
        //validate
        const { exercise } = this.state;
        this.props.createExercise({
            ...exercise,
            id: exercise.title.toLocaleLowerCase().replace(/ /g, "-")
        });

        this.setState({
            open: false,
            exercise: {
                title: "",
                description: "",
                muscles: ""
            }
        })
    }

    render() {
        const classes = this.props.classes;
        console.log(this.state)
        const { open, exercise: { title, description, muscles } } = this.state,
            { muscles: categories } = this.props

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
                        <form className={classes.FormControl}>
                            <TextField
                                id="standard-basic"
                                label="Title"
                                onChange={this.handleChange("title")}
                                value={title}
                                className={classes.FormControl}
                            />
                            <TextField
                                id="standard-multiline-static"
                                label="Description"
                                value={description}
                                multiline
                                rows="4"
                                onChange={this.handleChange("description")}
                                className={classes.FormControl}
                            />
                            <FormControl className={classes.FormControl}>
                                <InputLabel id="demo-simple-select-label">Muscles</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={muscles}
                                    onChange={this.handleChange("muscles")}
                                    variant="standard"
                                >
                                    {categories.map((category) => (
                                        <MenuItem value={category}>{category}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button color="primary" onClick={this.handleSubmit}>
                            Create
                        </Button>
                    </DialogActions>
                </Dialog>
            </Fragment>
        )
    }
})