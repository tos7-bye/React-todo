// コンポーネント化 = 親と子のやりとり
import React from "react";

// App.jsx propsで渡す
export const InputTodo = (props) => {
  // App.jsxから渡されたpropsを取り出して分割代入で使いやすくする
  const { todoText, onChange, onClick } = props;
  return (
    <div className="input-area">
      <input placeholder="TODOを入力" value={todoText} onChange={onChange} />
      <button onClick={onClick}>追加</button>
    </div>
  );
};
