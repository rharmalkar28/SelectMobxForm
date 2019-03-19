import React, { Component } from "react";
import { observer } from "mobx-react";
import {
  withStyles,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
  Chip
} from "@material-ui/core";

import SelectMobxFrom from "./Forms/SelectMobxFrom";

const styles = {
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    marginBottom: "10px"
  },
  chips: {
    display: "flex",
    flexWrap: "wrap"
  },
  chip: {
    margin: 3
  }
};

const carList = {
  "1": {
    name: "Ford Motor Company",
    value: "1"
  },
  "2": {
    name: "General Motors Company",
    value: "2"
  },
  "3": {
    name: "Fiat Chrysler Automobiles",
    value: "3"
  },
  "4": {
    name: "Honda Motor Company",
    value: "4"
  },
  "5": {
    name: "Toyota Motor Corporation",
    value: "5"
  }
};

class SelectBox extends Component {
  constructor(props) {
    super(props);
    this.form = new SelectMobxFrom();
    this.carField = this.form.$("cars");
  }

  renderCarValue = selected => {
    const { classes } = this.props;
    return (
      <div className={classes.chips}>
        {selected.map(value => (
          <Chip
            key={value}
            label={carList[value].name}
            className={classes.chip}
          />
        ))}
      </div>
    );
  };

  renderCarOptions = () => {
    return Object.keys(carList).map(vendorID => (
      <MenuItem key={`menuKey${vendorID}`} value={vendorID}>
        <Checkbox
          checked={this.carField.values().indexOf(carList[vendorID].value) > -1}
        />
        <ListItemText primary={carList[vendorID].name} />
      </MenuItem>
    ));
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <FormControl fullWidth className={classes.formControl}>
          <InputLabel htmlFor={this.carField.name}>
            {this.carField.label}
          </InputLabel>
          <Select
            {...this.carField.bind()}
            multiple
            inputProps={{
              name: this.carField.name,
              id: this.carField.name
            }}
            error={this.carField.hasError}
            renderValue={this.renderCarValue}
          >
            {this.renderCarOptions()}
          </Select>
        </FormControl>
      </div>
    );
  }
}

export default withStyles(styles)(observer(SelectBox));
