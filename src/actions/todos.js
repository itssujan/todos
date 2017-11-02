import { v4 } from "uuid";

export const addTodo = title => {
  return {
    type: "ADD_TODO",
    title: title,
    id: v4()
  };
};
