import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

class PriceDialog extends Component {
  state = {
    lastOpenedStatus: false,
  };


  // Only when this dialog is opened, copy the prices to local state.
  static getDerivedStateFromProps(props, state) {
    if (props.open === true && state.lastOpenedStatus === false) {
      return {
        min: props.min,
        max: props.max,
        lastOpenedStatus: true,
      };
    }

    return { lastOpenedStatus: props.open };
  }

  render() {
    let { min, max } = this.state;

    return (
      <div>
        <Dialog
          open={this.props.open}
          onClose={() => {
            this.props.onClose();
          }}
          >
            <AppBar position="static" style={{ backgroundColor: "#181a1c" }}>
              <Toolbar>
                Enter price range
              </Toolbar>
            </AppBar>

            <div
            style={{
              maxHeight: 700,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: 60,
              overflow: "auto"
            }}
          >

            <div style={{ display: "flex", padding: 20 }}>
              <TextField
                value={min}
                type="number"
                style={{ width: 70 }}
                placeholder="Minimum"
                label="Minimum"
                onChange={e => {
                  let val = parseInt(e.target.value, 10);
                  if (
                    Number.isNaN(val) ||
                    val < 0 ||
                    val > 1000
                  ) {
                    return;
                  }
                  this.setState({
                    min: val
                  });
                }}
              />
              <TextField
                value={max}
                type="number"
                style={{ width: 70, marginLeft: 20 }}
                placeholder="Maximum"
                label="Maximum"
                onChange={e => {
                  let val = parseInt(e.target.value, 10);

                  if (
                    Number.isNaN(val) ||
                    val < 0 ||
                    val > 1000
                  ) {
                    return;
                  }
                  this.setState({
                    max: val
                  });
                }}
              />
            </div>
            <div style={{ display: "flex", padding: 20 }}>
              <Button
                variant="outlined"
                color="primary"
                style={{ width: 40 }}
                onClick={() => {
                  this.props.onSave(min, max);
                }}
              >
                OK
              </Button>
              <Button
                color="primary"
                variant="outlined"
                style={{ width: 40, marginLeft: 5 }}
                onClick={() => {
                  this.props.onClose();
                }}
              >
                Cancel
              </Button>
            </div>
          </div>
        </Dialog>
      </div>
    );
  }
}

export default PriceDialog;
