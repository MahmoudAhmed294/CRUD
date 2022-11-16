import { Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import Item from "./Item";
import { db } from "../api/firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

type Props = {};

const ItemList = (props: Props) => {
  const [tasks, setTasks] = useState<any>([]);

  useEffect(() => {
    const taskColRef = query(
      collection(db, "tasks"),
      orderBy("created", "desc")
    );
    onSnapshot(taskColRef, (snapshot) => {
      setTasks(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data().task,
        }))
      );
    });
  }, []);

  return (
    <Stack spacing={3}>
      {tasks.map((value: any) => (
        <Item id={value.id} task={value.data} />
      ))}
    </Stack>
  );
};

export default ItemList;
