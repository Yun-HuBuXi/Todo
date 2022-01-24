import "./footer.css"

function Footer(props) {
    const handleDelete = () => {
      props.deleteTodos()
    }

    return(
        <div className="todo-footer">
          <label>
            <input type="checkbox"/>
          </label>
          <span>
            <span>已完成{props.doneTodos.length}</span> / 全部{props.todos.length}
          </span>
          <button className="btn btn-danger" onClick={() => handleDelete()}>清除已完成任务</button>
        </div>
    )
}

export default Footer