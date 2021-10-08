import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import "./App.css";

import { TodoForm } from "./components/form/todo-form";
import { TodoList } from "./components/todo/todo-list";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [todoArray, setTodoArray] = useState([]);

  return (
    <Box className="App">
      <Typography variant="h1" component="h2">
        Todo form
      </Typography>
      <TodoForm
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        handleSubmit={(event) => {
          event.preventDefault();
          setTodoArray((prev) => [
            ...prev,
            { title, description, id: prev.length + 1 },
          ]);
          setTitle("");
          setDescription("");
        }}
      />
      <TodoList todoArray={todoArray} />
    </Box>
  );
}

export default App;
