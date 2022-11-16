import React from "react";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { doc, deleteDoc} from "firebase/firestore";
import {db} from '../api/firebase'

type Props = {
    id:string
};

const Delete = ({id}: Props) => {
  const handleDelete = async () => {
    const taskDocRef = doc(db, 'tasks', id)
    try{
      await deleteDoc(taskDocRef)
    } catch (err) {
      alert(err)
    }
  }

  return (
    <Button variant="outlined" color="error" onClick={handleDelete}>
      <DeleteIcon />
    </Button>
  );
};

export default Delete;
