import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodo";
import { CompleteTodos } from "./components/CompleteTodo";

export const App = () => {
  // inputテキストのState
  const [todoText, setTodoText] = useState("");

  // 未完了のTODOを格納する配列
  const [incompleteTodos, setIncompleteTodos] = useState([]);

  // 完了のTODOを格納する配列
  const [completeTodos, setCompleteTodos] = useState([]);

  // inputテキストに文字が打たれたら反応する
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  // 追加ボタン
  const onClickAdd = () => {
    // todoTextが空であれば処理しない
    if (todoText === "") return;
    // incompleteTodosと同じ配列をコピーする、その一番後ろにinputで入力した値(todoText)を入れる
    const newTodos = [...incompleteTodos, todoText];
    // newTodosを更新
    setIncompleteTodos(newTodos);
    // 追加すると、リセットする処理
    setTodoText("");
  };

  // 削除ボタン
  const onClickDelete = (index) => {
    // incompleteTodosをコピー
    const newTodos = [...incompleteTodos];
    // 一つめの引数に何番目かを選び、二つ目の引数にいくつ消すかを入れる
    newTodos.splice(index, 1);
    // newTodosを更新
    setIncompleteTodos(newTodos);
  };

  // 完了ボタン
  const onClickComplete = (index) => {
    // incompleteTodosをコピー
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    //未完了TODOから完了TODOに移動
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    // 更新
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  // 戻るボタン
  const onClickBack = (index) => {
    // completeTodosをコピー
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    // 完了TODOから未完了TODOへ移動する
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    // 更新
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      {/* コンポーネント化 */}
      {/* InputTodo.jsxへstateと関数を渡す */}
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompleteTodos.length >= 5}
      />
      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>
          登録できるtodo5個までです。消化頑張ってください。
        </p>
      )}
      {/* Incomplete.jsxへstateと関数を渡す */}
      <IncompleteTodos
        todo={incompleteTodos}
        onClickDelete={onClickDelete}
        onClickComplete={onClickComplete}
      />
      {/* Complete.jsxへstateと関数を渡す */}
      <CompleteTodos
        todos={completeTodos}
        onClickBack={onClickBack}
        disabled={incompleteTodos.length >= 5}
      />
    </>
  );
};
