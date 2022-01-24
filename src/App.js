import React, {useState} from "react"
import './App.css';
import Footer from "./components/footer"
import Main from "./components/main"
import Header from "./components/header"

function App() {
  //初始化状态
  let [todos, setTodos] = useState([
    {id:"001", name:"eat", done:true},
    {id:"002", name:"sleep", done:true},
    {id:"003", name:"code", done:false}
  ])

  //统计已完成todo
  const doneTodos = todos.filter((todoObj) => {
    return todoObj.done
  })

  //addTodo用于子组件向父组件传递参数。添加一个todo，参数是todo对象
  const addTodo = (todoObj) => {
    todos = [todoObj,...todos]   
    //...todos 结构传参，相当于把todos数组内所有内容传入
    console.log(todos)
    setTodos(todos)
  }

  //updateTodo用于item组件向app组件传递参数。根据todo勾选状态来更改todo其他信息状态
  const updateTodo = (id, done) => {
    todos =  todos.map((todoObj) => {
      if (todoObj.id === id) {
        return {...todoObj, done: done}
        // {...todoObj}结构传参，传入todoObj所有信息，并在,后修改相应属性的值
      } else {
        return todoObj
      }
    })
    setTodos(todos)
  }

  //删除一个todo
  const deleteTodo = (id) => {
    todos = todos.filter((todoObj) => {
      return todoObj.id !== id
    })
    // Array.filter用于过滤，判断为true的加入到新数组中
    setTodos(todos)
  }
  
  //删除已完成todo
  const deleteTodos = () => {
    todos = todos.filter((todoObj) => {
      return !todoObj.done 
    })
    setTodos(todos)
  }

  return (
    <div className="todo-container">
      <div className="todo-wrap">
        <Header addTodo={addTodo}></Header>
        <Main todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo}></Main>
        <Footer todos={todos} deleteTodos={deleteTodos} doneTodos={doneTodos}></Footer>
      </div>
    </div>
  );
}

export default App;
