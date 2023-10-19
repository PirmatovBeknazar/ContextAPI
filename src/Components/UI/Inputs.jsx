import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Inputs = ({ type, value, onChange }) => {
  return (
    <div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          type={type}
          value={value}
          onChange={onChange}
          label="Filled success"
          variant="filled"
          color="success"
          focused
        />
      </Box>
    </div>
  );
};

export default Inputs;
