import React from "react";
import { observer } from "mobx-react";
import { autorun, reaction } from "mobx";

/*turn on a stateless function components into
reactive components by adding the function observer*/
const Todo = observer(({ todo }) => (
  console.log(todo),
  <li>
    <input
      type="checkbox"
      checked={todo.finished}
      onChange={() => (todo.finished = !todo.finished)}
    />
    {todo.title}
  </li>
));


export default Todo;
