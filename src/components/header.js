import {nanoid} from  "nanoid"
// nanoid()每次调用的时候都可以随机生成一个唯一id
import "./header.css"
function Header(props){
  const handleKeyUp = (event) => {
    if (event.keyCode !== 13) {
      return
    }   
    //event是事件，event.keyCode获取事件键盘的值，13是回车键的值
    if (event.target.value.trim() ==="") {
      //trim() 方法用于删除字符串的头尾空白符，空白符包括：空格、制表符 tab、换行符等其他空白符等。
      alert("输入不能为空")
      return
    } else {
      const todoObj = {id:nanoid(), name:event.target.value, done:false}
      // event.target.value 获取用户输入的内容
      props.addTodo(todoObj)
      //传递给父组件
    }
    event.target.value = ""
  }

    return(
        <div className="todo-header">
          <input type="text" onKeyUp={handleKeyUp} placeholder="请输入你的任务名称，按回车键确认"/>
          {/*onKeyUp是键盘事件，当键盘某个键键弹起时发生*/}
        </div>
    )
}

export default Header