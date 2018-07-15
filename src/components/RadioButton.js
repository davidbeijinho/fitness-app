import React from "react";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';

const RadioButton = ({ value, label }) => (
<FormControlLabel value={value} control={<Radio />} label={label} />
);

export default RadioButton;