import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ProvinceSelect from "../UserRegister/ProvinceSelect";
import InputButton from "./InputButton";
import "../../stylesheets/Material.css";

export default class FormDialog extends React.Component {
  state = {
    data: {
      addPrice:5,
      basePrice:10,
    }

  }

  // make new data and insert into state
  handleChange = e => {
    const { value, id } = e.target;
    let data = {};
    Object.keys(this.state.data).map(input => (
      input === id
        ? (data[input] = value)
        : (data[input] = this.state.data[input])
    ));
    this.setState({ data });
  };

  // range logic
  renderRange(path, label, min = 0, max = 100, step = 1, val) {
    const ticks = [];
    for (let i = min; i <= max; i += step * 5) {
      ticks.push(i);
    }
    return (
      <div className="form-group text-left p-3">
        <label htmlFor={path}>{`${label}: ${val}`}</label>
        <input
          id={path}
          className="form-control"
          type="range"
          min={min}
          max={max}
          step={step}
          defaultValue={val}
          onChange={this.handleChange}
          list="tickmarks"
        />
        <datalist id="tickmarks">
          {ticks.map(tick => (
            <option key={tick} value={tick} />
          ))}
        </datalist>
      </div>
    );
  }
  render() {
    return (
      <div className='signup'>
        <Dialog
          open={this.props.isOpen}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Register</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To be a registered Phlex photographer, we need to get to know you a little better
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Full Name"
              type="text"
              fullWidth
            />
            <TextField
              margin="dense"
              id="email"
              label="Email Address"
              type="email"
              fullWidth
            />
            <TextField
              margin="dense"
              id="password"
              label="Password"
              type="password"
              fullWidth
            />
            <TextField
              margin="dense"
              id="city"
              label="City"
              type="text"
              fullWidth
              
            />
            <ProvinceSelect margin='dense' fullWidth
            />
              <TextField
                id="standard-full-width"
                label="Bio"
                style={{ marginTop: 10 }}
                placeholder="Let people know more about you"
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                />
                
         <InputButton name='Upload some photos'/>

         {/* render sliders */}
         {this.renderRange(
          "addPrice",
          "$ / each additional 5 pictures ",
          0,
          500,
          10,
          this.state.data.addPrice
        )}
        {this.renderRange(
          "basePrice",
          "$ / each additional 5 pictures ",
          0,
          500,
          10,
          this.state.data.basePrice
        )}
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.props.handleClose} color="primary">
              Register
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
      
  
  }
}