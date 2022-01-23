import "./main.css"
import Item from "./item"
function Main(props){
    return(
        <ul className="todo-main">
          {
            props.todos.map((todo) => {
              return <Item key={todo.id} {...todo} updateTodo={props.updateTodo} />  //结构传递，把todo对象内所有参数都传入了
            })
          }
        </ul>
    )
}

export default Main