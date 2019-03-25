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
    open: true,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
    window.location.pathname = '/result'
    
  };

  render() {
    return (
      <div className='signup'>
        <Dialog
          open={this.state.open}
        //   onClose={this.handleClose}
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

          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Register
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
      
  
  }
}