import Form from "./Form";
import Todo from "./Todo";
import { MdDeleteOutline } from "react-icons/md";

const Section = ({
  active,
  todoList,
  submitTodoHandler,
  completedHandler,
  deleteHandler,
  deleteAllHandler,
}) => {
  return (
    <div>
      {/* ====== ALL SECTION ====== */}
      {active === "all" ? (
        <div>
          <Form submitTodoHandler={submitTodoHandler} />

          <div>
            {todoList.map((todo) => (
              <Todo
                key={todo.id}
                todo={todo}
                completedHandler={completedHandler}
              />
            ))}
          </div>
        </div>
      ) : null}

      {/* ====== ACTIVE SECTION ====== */}
      {active === "active" ? (
        <div>
          <Form submitTodoHandler={submitTodoHandler} />

          <div>
            {todoList
              .filter((todo) => todo.completed === false)
              .map((todo) => (
                <Todo
                  key={todo.id}
                  todo={todo}
                  completedHandler={completedHandler}
                />
              ))}
          </div>
        </div>
      ) : null}

      {/* ====== COMPLETED SECTION ====== */}
      {active === "completed" ? (
        <div>
          <div>
            {todoList
              .filter((todo) => todo.completed === true)
              .map((todo) => (
                <Todo
                  key={todo.id}
                  todo={todo}
                  completedHandler={completedHandler}
                  active={active}
                  deleteHandler={deleteHandler}
                />
              ))}
          </div>
          {todoList.filter((todo) => todo.completed === true).length > 0 ? (
            <div className="btn-to-the-right">
              <button
                className="btn-deleta-all"
                onClick={() => {
                  deleteAllHandler();
                }}
              >
                <MdDeleteOutline />
                delete all
              </button>
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};

export default Section;
