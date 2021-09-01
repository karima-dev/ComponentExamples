import "./index.css";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import CustomCard from "../../components/CustomCard";
import { textInputProps } from "../../constants";
import { buttonProps, cardProps } from "../../constants";
import React, { useState } from "react";
const TodoApp = () => {
  const [tacheInputs, settacheInputs] = useState({ tache: "", heure: "" });
  const [todos, setTodos] = useState([{ todoTache: "", isDone: false }]);

  var i = 0;
  const handleChange = (e) => {
    switch (e.target.name) {
      case textInputProps.timeTodo.name:
        settacheInputs({ ...tacheInputs, heure: e.target.value });
        break;
      case textInputProps.texttodo.name:
        settacheInputs({ ...tacheInputs, tache: e.target.value });
        break;
    }
  };
  const handleClick = () => {
    if (!tacheInputs.tache) alert("Add a task");
    const listTodo = [
      ...todos,
      { isDone: false, todoTache: tacheInputs.tache },
    ];
    setTodos(listTodo);
    //console.log(listTodo);
    document.getElementsByClassName("classtime")[0].value = "";
    document.getElementsByClassName("classtext")[0].value = "";
  };
  const handledo = (e) => {
    const i = Number(e.target.name);

    const listTodo = [...todos];
    listTodo[i].isDone = true;

    setTodos(listTodo);
  };
  const handleremove = (e) => {
    const listTodo = [...todos];
    const index = Number(e.target.name);
    listTodo.splice(index, 1);
    setTodos(listTodo);
  };
  const showResult = (todo, index) =>
    todo.todoTache ? (
      <div
        style={{ backgroundColor: todo.isDone ? "#b7ebc6" : "" }}
        key={index}
        className="divtodo"
      >
        <li>{todo.todoTache}</li>

        <div>
          <h6>{tacheInputs.heure}</h6>
          <CustomButton
            style={{ display: todo.isDone ? "none" : "" }}
            name={index}
            color={buttonProps.color.outlineSuccess}
            text={buttonProps.text.todoDone}
            onClick={handledo}
          />
          <CustomButton
            name={index}
            color={buttonProps.color.outlineDanger}
            text={buttonProps.text.todosupp}
            onClick={handleremove}
          />
        </div>
      </div>
    ) : (
      ""
    );

  return (
    <div className="container">
      <h1>ToDo Application</h1>
      <CustomInput
        label={textInputProps.texttodo.label}
        type={textInputProps.texttodo.type}
        placeholder={textInputProps.texttodo.placeholder}
        name={textInputProps.texttodo.name}
        className={textInputProps.texttodo.className}
        onChange={handleChange}
      />
      <CustomInput
        label={textInputProps.timeTodo.label}
        type={textInputProps.timeTodo.type}
        placeholder={textInputProps.timeTodo.placeholder}
        className={textInputProps.timeTodo.className}
        name={textInputProps.timeTodo.name}
        onChange={handleChange}
      />

      <CustomButton
        className={buttonProps.className.classpad}
        color={buttonProps.color.warning}
        text={buttonProps.text.ajouter}
        onClick={handleClick}
      />
      <br></br>
      <br></br>
      {todos.map((todo, index) => ((i = index), showResult(todo, i)))}
    </div>
  );
};
export default TodoApp;
