import React from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";

const Buttons = (props) => {
  return (
    <div>
      <Stack direction="row" spacing={2}>
        <Button onClick={props.onClick} variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </Stack>
    </div>
  );
};

export default Buttons;
