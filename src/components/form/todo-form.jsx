import { Button, TextField } from "@mui/material";

export const TodoForm = ({
  handleSubmit,
  title,
  setTitle,
  description,
  setDescription,
}) => {
  return (
    <>
      <form
        noValidate
        autoComplete="off"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
        onSubmit={handleSubmit}
      >
        <TextField
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          label="title"
          variant="outlined"
          required
        />
        <TextField
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          sx={{ mt: 1 }}
          label="description"
          variant="outlined"
          required
        />
        <Button sx={{ mt: 1 }} variant="contained" type="submit">
          Add todo
        </Button>
      </form>
    </>
  );
};
