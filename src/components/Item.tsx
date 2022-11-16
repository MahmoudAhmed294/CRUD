import { Box, Stack, Typography, Button } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import Edit from "./Edit";
import Delete from "./Delete";
type Props = {
  task: string;
  id: string;
};

const Item = ({ task, id }: Props) => {
  return (
    <Box sx={{ p: 2, border: "1px solid #888", borderRadius: 1.5 , width:"100%" }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography>{task}</Typography>
        <Stack direction="row" spacing={2}>
            <Edit id={id} task={task} />
            <Delete id={id}/>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Item;
