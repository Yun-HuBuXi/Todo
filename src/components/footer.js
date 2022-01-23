import "./footer.css"

function Footer(props) {
    return(
        <div className="todo-footer">
          <label>
            <input type="checkbox"/>
          </label>
          <span>
            <span>已完成0</span> / 全部{props.todos.length}
          </span>
          <button className="btn btn-danger">清除已完成任务</button>
        </div>
    )
}

export default Footer