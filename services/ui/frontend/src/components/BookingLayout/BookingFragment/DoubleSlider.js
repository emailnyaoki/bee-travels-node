import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    width: 128,
  },
});

const PrettoSlider = withStyles({
  root: {
    color: "#000000",
  },
  thumb: {
    "&$focusVisible,&:hover": {
      boxShadow: `0px 0px 0px 8px rgba(0, 0, 0, 0.16)`,
      "@media (hover: none)": {
        boxShadow: "none",
      },
    },
    "&$active": {
      boxShadow: `0px 0px 0px 14px rgba(0, 0, 0, 0.16)`,
    },
  },
  active: {}, // needed.
})(Slider);

function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <PrettoSlider
        value={value}
        onChange={handleChange}
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
    </div>
  );
}
