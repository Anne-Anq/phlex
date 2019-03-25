import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing.unit * 2,
  },
  formControl: {
    minWidth: 120,
    margin: 0,
  },
});

class ControlledOpenSelect extends React.Component {
  state = {
    province: '',
    open: false,
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  render() {
    const { classes } = this.props;

    return (
      <form autoComplete="off">
        
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="demo-controlled-open-select">Province</InputLabel>
          <Select
            open={this.state.open}
            onClose={this.handleClose}
            onOpen={this.handleOpen}
            value={this.state.age}
            onChange={this.handleChange}
            inputProps={{
              name: 'province',
              id: 'demo-controlled-open-select',
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={'AB'}>AB</MenuItem>
            <MenuItem value={'BC'}>BC</MenuItem>
            <MenuItem value={'MB'}>MB</MenuItem>
            <MenuItem value={'NB'}>NB</MenuItem>
            <MenuItem value={'NL'}>NL</MenuItem>
            <MenuItem value={'NS'}>NS</MenuItem>
            <MenuItem value={'NT'}>NT</MenuItem>
            <MenuItem value={'NU'}>NU</MenuItem>
            <MenuItem value={'ON'}>ON</MenuItem>
            <MenuItem value={'PE'}>PE</MenuItem>
            <MenuItem value={'QC'}>QC</MenuItem>
            <MenuItem value={'SK'}>SK</MenuItem>
            <MenuItem value={'YT'}>YT</MenuItem>
          </Select>
        </FormControl>
      </form>
    );
  }
}

ControlledOpenSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ControlledOpenSelect);