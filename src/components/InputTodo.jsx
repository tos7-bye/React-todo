// コンポーネント化 = 親と子のやりとり
import React from "react";

// cssをインラインでスタイリングする cssinjs
const style = {
  backgroundColor: "#c1ffff",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};
// App.jsx propsで渡す
export const InputTodo = (props) => {
  // App.jsxから渡されたpropsを取り出して分割代入で使いやすくする
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div style={style}>
      <input
        disabled={disabled}
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
      />
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
