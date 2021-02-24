import React from "react";

export const IncompleteTodos = (props) => {
  const { todo, onClickComplete, onClickDelete } = props;

  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {/* アロー関数で新しく関数を生成してやる、そうすると引数を渡せる */}
        {/* indexは、番号 1,2,3,4,5 */}
        {/* 未完了TODO state(App.jsxのincompleteTodos) */}
        {todo.map((todo, index) => {
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
  );
};
