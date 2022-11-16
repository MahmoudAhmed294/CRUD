import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Grid, Button, TextField, Container, Backdrop, CircularProgress } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { db } from "./api/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import ItemList from "./components/ItemList";

function App() {
  const [task, setTask] = useState("");
  const [open, setOpen] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      setOpen(true)
      await addDoc(collection(db, "tasks"), {
        task: task,
        created: Timestamp.now(),
      }).then(() => {
        setTask("");
        setOpen(false)
      });
    } catch (err) {
      setOpen(false)
      setTask("");
      alert(err);
    }
  };

  return (
    <Container maxWidth="sm">
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        component={"form"}
        onSubmit={handleSubmit}
      >
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        <Grid item xs={9} md={10}>
          <TextField
            fullWidth
            id="outlined-basic"
            onChange={(e) => setTask(e.target.value)}
            value={task}
            label="Enter task"
            variant="outlined"
            size="medium"
          />
        </Grid>
        <Grid item xs={1}>
          <Button
            variant="contained"
            type={"submit"}
            size="large"
            sx={{ py: 2 }}
          >
            <AddIcon />
          </Button>
        </Grid>
        <Grid item xs={12} mt={4}>
          <ItemList  />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
