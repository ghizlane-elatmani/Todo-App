import { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import Section from "./components/Section";
import Footer from "./components/Footer";
import "./css/App.css";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [active, setActive] = useState("all");
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos) {
      setTodoList(todos);
    }
  }, []);

  useEffect(() => {
    if (todoList.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todoList));
    }
  }, [todoList]);

  const submitTodoHandler = (e, todo, setTodo) => {
    e.preventDefault();
    setTodoList([...todoList, { text: todo, completed: false, id: uuidv4() }]);
    setTodo("");
  };

  const completedHandler = (todo) => {
    setTodoList(
      todoList.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const deleteHandler = (todo) => {
    const newList = todoList.filter((item) => item.id !== todo.id);
    setTodoList(newList);
  };

  const deleteAllHandler = () => {
    const newList = todoList.filter((item) => item.completed === false);
    setTodoList(newList);
  };

  return (
    <div className="App">
      <h1 className="heading-1">#todo</h1>

      <div className="container">
        <Navigation active={active} setActive={setActive} />
        <Section
          active={active}
          todoList={todoList}
          submitTodoHandler={submitTodoHandler}
          completedHandler={completedHandler}
          deleteHandler={deleteHandler}
          deleteAllHandler={deleteAllHandler}
        />
      </div>

      <Footer />
    </div>
  );
}

export default App;
