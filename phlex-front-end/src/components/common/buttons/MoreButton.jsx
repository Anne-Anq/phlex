import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const styles = theme => ({
    margin: {
        margin: theme.spacing.unit,
    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
    },
});

function ButtonSizes({ classes, label, onClick, variant }) {
    return (
        <Button variant={variant} size="small" className={classes.margin} onClick={onClick}>
            {label}
        </Button>
    );
}

ButtonSizes.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonSizes);