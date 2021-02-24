import React, { useState } from "react";
import "./styles.css";

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
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>

      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {/* アロー関数で新しく関数を生成してやる、そうすると引数を渡せる */}
          {/* indexは、番号 1,2,3,4,5 */}
          {incompleteTodos.map((todo, index) => {
            return (
              // ループで処理する場合、親タグにkeyを設定しないとエラーになる
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>

      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
