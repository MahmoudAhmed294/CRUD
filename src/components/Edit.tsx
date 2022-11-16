import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../api/firebase";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";

type Props = {
  id: string;
  task: string;
};

export default function FormDialog({ id, task }: Props) {
  const [open, setOpen] = React.useState(false);
  const [editInput, setEditInput] = React.useState(task);
  const handleChange = async () => {
    const taskDocRef = doc(db, "tasks", id);
    try {
      await updateDoc(taskDocRef, {
        task: editInput,
      }).then(()=> {
        setOpen(false)
      })
    } catch (err) {
      alert(err);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="warning" onClick={handleClickOpen}>
        <ModeEditOutlineIcon />
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit task</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Edit task"
            type="string"
            fullWidth
            variant="outlined"
            value={editInput}
            onChange={(e) => setEditInput(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleChange}  variant="contained">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
