import { TodoItem } from "./todo-item";

export const TodoList = ({ todoArray }) => {
  return (
    <>
      {todoArray.length === 0 ? (
        <h1>Data is not found</h1>
      ) : (
        <>
          {todoArray.map((todo) => {
            return (
              <TodoItem
                key={todo.id}
                title={todo.title}
                description={todo.description}
              />
            );
          })}
        </>
      )}
    </>
  );
};
