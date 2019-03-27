import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import MenuItem from '@material-ui/core/MenuItem';
import DialogContent from '@material-ui/core/DialogContent';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
});

class DialogSelect extends React.Component {
    state = {
        open: false,
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes, label, fields, onChange } = this.props;

        return (
            <div>
                <Button onClick={this.handleClickOpen}>{label}</Button>
                <Dialog
                    disableBackdropClick
                    disableEscapeKeyDown
                    open={this.state.open}
                    onClose={this.handleClose}
                >

                    <DialogContent>
                        <form className={classes.container}>
                            {fields && fields.map(field =>
                                <FormControl key={field.label} className={classes.formControl}>
                                    <InputLabel htmlFor={field.name}>{field.name}</InputLabel>
                                    <Select
                                        onChange={onChange}
                                        value={field.value}
                                        input={<Input name={field.name} />}
                                    >
                                        <MenuItem value=""></MenuItem>
                                        {field.options && field.options.map((option, i) =>
                                            <MenuItem key={option} value={option}>{option}</MenuItem>
                                        )}
                                    </Select>
                                </FormControl>
                            )}
                        </form>
                    </DialogContent>
                    <DialogActions>
                        {/* <Button onClick={this.handleClose} color="primary">
                            Cancel
            </Button> */}
                        <Button onClick={this.handleClose} color="primary">
                            Ok
            </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

DialogSelect.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DialogSelect);