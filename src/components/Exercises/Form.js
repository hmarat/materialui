import React, { Component } from "react"
import { TextField, FormControl, InputLabel, Select, MenuItem, Button, withStyles } from "@material-ui/core"

const styles = theme => ({
    FormControl: {
        width: 400
    }
})

export default withStyles(styles)(class Form extends Component {
    state = this.getInitState();

    handleChange = name => event => {
        const value = event.target.value;
        this.setState(() => ({
            [name]: value
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
            title: "",
            description: "",
            muscles: ""
        })
    }

    getInitState() {
        const exercise = this.props;

        return exercise ? exercise : {
            title: "",
            description: "",
            muscles: ""
        }
    }

    render() {
        const { classes, muscles: categories } = this.props,
            { title, description, muscles } = this.state;

        return (
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
                <Button color="primary" onClick={this.handleSubmit}>
                    Create
                </Button>
            </form>
        )
    }
})